/* =====================================================================
   🔐 Ontsnappingskamers: lees, zoek de aanwijzingen en kom de kamer uit.

   Je zit opgesloten in een kamer in een verhaal. Tik op de spullen in de
   kamer en lees wat er staat: in de teksten zitten de aanwijzingen voor
   de sloten (een code, een woord, een volgorde, een voorwerp dat je nog
   moet vinden). Niet alles is belangrijk, en meestal moet je twee of drie
   teksten combineren. Een fout antwoord kost een hartje; een 💡 hint kost
   een ster.

   Elke zaak (data/escape.*.js) is een klein vervolgverhaal van kamers:
   level 1 is een kamer voor groep 6, level 2 voor groep 7, level 3 voor
   groep 8. Er mogen meer kamers per level in staan: je speelt de eerstvolgende
   die je nog niet hebt opgelost. Een kamer erbij zetten is dus gewoon een
   object achteraan `rooms` zetten, zonder iets aan de code te veranderen.

   Het formaat van een zaak (addEscape in data/bootstrap.js):

     addEscape({
       id: 'plof', emoji: '📚', hue: 285,
       title: { nl, en }, blurb: { nl, en },
       rooms: [{
         id: 'plof-1', lv: 1,
         title: { nl, en },
         intro: { nl, en },                // het begin van het verhaal
         outro: { nl, en },                // als je eruit bent: en hoe het verdergaat
         items: { sleutel: { emoji: '🗝️', nl: 'de sleutel', en: 'the key' } },
         objects: [{
           id: 'kluis', emoji: '🔐', name: { nl, en },
           text: { nl, en },               // wat je leest als je erop tikt
           hidden: true,                   // (optioneel) pas zichtbaar na `reveals`
           lock: {                         // (optioneel) een slot
             kind: 'code',                 //   'code'   een getal of woord intypen
                                           //   'choice' één van de opties kiezen
                                           //   'seq'    de opties in de goede volgorde tikken
                                           //   'item'   een voorwerp uit je tas gebruiken
             answer: '473',                //   code: tekst; choice: index; seq: lijst indexen
             options: [{ emoji, nl, en }], //   choice en seq
             item: 'sleutel',              //   item
             ask: { nl, en },              //   de vraag boven het slot
             hint: { nl, en },             //   wat de 💡 hint zegt
             need: { nl, en }              //   item: wat je hoort zonder het voorwerp
           },
           opened: { nl, en },             // wat je leest als het slot open is
           gives: 'sleutel',               // (optioneel) voorwerp(en) dat je krijgt
           reveals: ['luik'],              // (optioneel) maakt andere spullen zichtbaar
           exit: true                      // de deur naar buiten: precies één per kamer
         }]
       }]
     });

   De ontwerp-regel: laat de lezer rekenen en combineren, niet raden. Het
   antwoord staat nooit in één tekst. `node tools/validate.js` controleert
   of de kamer op te lossen is (de uitgang gaat open als je alles in de
   goede volgorde doet).
   ===================================================================== */
'use strict';

(function () {
  const K = Arcade.kit;
  const G = K.G;

  /* een antwoord vergelijken zonder hoofdletters, spaties, streepjes en accenten */
  function norm(s) {
    let x = String(s === undefined || s === null ? '' : s).toLowerCase().replace(/[\s.\-’']/g, '');
    if (x.normalize) x = x.normalize('NFD').replace(/[̀-ͯ]/g, '');
    return x;
  }

  /* kan de kamer opgelost worden? Speel hem na: elk slot waarvan je het
     antwoord "weet" gaat open, een voorwerp-slot pas als je het voorwerp hebt.
     Geeft de volgorde van opengemaakte spullen terug (of ok: false). */
  function solvable(room) {
    const visible = {}, open = {}, items = {};
    (room.objects || []).forEach(function (o) { visible[o.id] = !o.hidden; });
    const order = [];
    let progress = true, exitOpen = false;
    const need = function (o) { return o.lock && o.lock.kind === 'item' ? [].concat(o.lock.item || o.lock.items || []) : []; };
    while (progress && !exitOpen) {
      progress = false;
      (room.objects || []).forEach(function (o) {
        if (!visible[o.id] || open[o.id]) return;
        if (!need(o).every(function (it) { return items[it]; })) return;
        open[o.id] = true;
        order.push(o.id);
        [].concat(o.gives || []).forEach(function (it) { items[it] = true; });
        [].concat(o.reveals || []).forEach(function (id) { visible[id] = true; });
        if (o.exit) exitOpen = true;
        progress = true;
      });
    }
    return { ok: exitOpen, order: order, items: items };
  }

  function el(tag, cls, text) {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text !== undefined) e.textContent = text;
    return e;
  }

  function makeModule(def) {
    return {
      def: def,
      solvable: solvable,

      /* de eerstvolgende kamer van dit level die nog niet opgelost is */
      pickRoom: function (lv) {
        const list = def.rooms.filter(function (r) { return r.lv === lv; });
        const rec = ((Store.player.escape || {})[def.id]) || {};
        const fresh = list.filter(function (r) { return !(rec[r.id] >= 1); });
        if (fresh.length) return fresh[0];
        /* alles opgelost: de kamer waar je de minste sterren haalde */
        return list.slice().sort(function (a, b) { return (rec[a.id] || 0) - (rec[b.id] || 0); })[0] || list[0];
      },

      makeDuels: function (deck, lv) {
        const room = this.pickRoom(lv);
        return [{ right: L(room.title), wrong: '', prompt: null, why: null, room: room, done: false, how: null }];
      },

      init: function (dom) {
        const room = G.duels[0].room;
        this.dom = dom;
        this.room = room;
        this.st = {};
        room.objects.forEach(function (o) { this.st[o.id] = { seen: false, open: false, visible: !o.hidden, fresh: false }; }, this);
        this.inv = {};
        this.notes = [];
        this.cur = null;
        this.wrong = 0;
        this.hints = 0;
        this.seq = [];
        this.over = false;
        this.msgText = '';
        this.msgKind = '';
        this.render();
      },

      obj: function (id) { return this.room.objects.filter(function (o) { return o.id === id; })[0]; },

      /* ---- het scherm ---- */
      render: function () {
        const self = this;
        const keep = this.dom.querySelector('.es-input');
        const typed = keep ? keep.value : '';
        const root = el('div', 'es-wrap');
        const story = el('details', 'es-story');
        story.open = !this.started;
        const sum = el('summary');
        sum.appendChild(el('b', 'es-title'));
        story.appendChild(sum);
        story.appendChild(el('p', 'es-intro'));
        root.appendChild(story);
        root.appendChild(el('div', 'es-scene'));
        root.appendChild(el('div', 'es-inv'));
        root.appendChild(el('div', 'es-panel'));
        const tools = el('div', 'es-tools');
        const hint = el('button', 'ghost-btn es-hint');
        hint.addEventListener('click', function () { self.hint(); });
        tools.appendChild(hint);
        root.appendChild(tools);
        const notes = el('details', 'es-notes');
        notes.appendChild(el('summary'));
        notes.appendChild(el('div', 'es-notes-list'));
        root.appendChild(notes);
        root.appendChild(el('p', 'es-msg'));
        this.dom.innerHTML = '';
        this.dom.appendChild(root);
        this.root = root;
        this.texts();
        this.drawScene();
        this.drawInv();
        this.drawPanel(typed);
        this.drawNotes();
        this.drawMsg();
      },

      texts: function () {
        const r = this.root, room = this.room;
        r.querySelector('.es-title').textContent = room.emoji ? room.emoji + ' ' + L(room.title) : L(room.title);
        r.querySelector('.es-intro').textContent = L(room.intro);
        r.querySelector('.es-hint').textContent = '💡 ' + t('esHint');
        r.querySelector('.es-notes summary').textContent = '📓 ' + t('esNotes') + ' (' + this.notes.length + ')';
      },
      relang: function () { if (this.root) this.render(); },

      drawScene: function () {
        const self = this;
        const box = this.root.querySelector('.es-scene');
        box.innerHTML = '';
        this.room.objects.forEach(function (o) {
          const st = self.st[o.id];
          if (!st.visible) return;
          const b = el('button', 'es-obj' + (self.cur === o.id ? ' on' : '') + (st.open ? ' open' : '') + (o.lock && !st.open ? ' locked' : '') + (st.fresh ? ' fresh' : ''));
          b.dataset.id = o.id;
          b.appendChild(el('span', 'es-emoji', o.emoji));
          b.appendChild(el('span', 'es-name', L(o.name)));
          const badge = el('i', 'es-badge', st.open && (o.lock || o.exit) ? '✅' : o.lock ? '🔒' : st.seen ? '' : '✨');
          b.appendChild(badge);
          b.addEventListener('click', function () { self.enter(o); });
          box.appendChild(b);
        });
      },

      drawInv: function () {
        const self = this, box = this.root.querySelector('.es-inv');
        box.innerHTML = '';
        const have = Object.keys(this.inv);
        box.classList.toggle('empty', !have.length);
        box.appendChild(el('span', 'es-inv-label', '🎒 ' + t('esBag')));
        if (!have.length) { box.appendChild(el('span', 'es-inv-none', t('esBagEmpty'))); return; }
        have.forEach(function (id) {
          const it = self.room.items[id];
          const chip = el('span', 'es-item');
          chip.title = L(it);
          chip.appendChild(el('span', 'es-item-emoji', it.emoji));
          chip.appendChild(el('span', 'es-item-name', L(it)));
          box.appendChild(chip);
        });
      },

      drawNotes: function () {
        const list = this.root.querySelector('.es-notes-list');
        list.innerHTML = '';
        this.notes.forEach(function (n) {
          const row = el('div', 'es-note');
          row.appendChild(el('b', '', n.emoji + ' ' + L(n.name)));
          row.appendChild(el('p', '', L(n.text)));
          list.appendChild(row);
        });
        this.root.querySelector('.es-notes summary').textContent = '📓 ' + t('esNotes') + ' (' + this.notes.length + ')';
      },

      note: function (o, which) {
        const text = which === 'opened' ? o.opened : o.text;
        if (!text) return;
        this.notes.push({ emoji: o.emoji, name: o.name, text: text });
        this.drawNotes();
      },

      msg: function (text, kind) {
        this.msgText = text || '';
        this.msgKind = kind || '';
        this.drawMsg();
      },
      drawMsg: function () {
        const m = this.root && this.root.querySelector('.es-msg');
        if (!m) return;
        m.textContent = this.msgText;
        m.className = 'es-msg' + (this.msgKind ? ' ' + this.msgKind : '');
      },

      /* ---- spullen bekijken ---- */
      can: function () { return G.state === 'play' && !this.over; },

      enter: function (o) {
        if (!this.can()) return;
        const st = this.st[o.id];
        Sound.click();
        const details = this.root.querySelector('.es-story');
        if (details) details.open = false;
        this.started = true;
        this.cur = o.id;
        this.seq = [];
        st.fresh = false;
        this.msg('');
        if (!st.seen) {
          st.seen = true;
          this.note(o, 'text');
          if (!o.lock) this.openObj(o);
        }
        if (this.over) return;
        this.drawScene();
        this.drawPanel();
      },

      /* een slot is open (of er zat geen slot op) */
      openObj: function (o) {
        const st = this.st[o.id];
        const self = this;
        const first = !st.open;
        st.open = true;
        if (o.lock && first) this.note(o, 'opened');
        const gained = [];
        [].concat(o.gives || []).forEach(function (id) {
          if (!self.inv[id]) { self.inv[id] = true; gained.push(id); }
        });
        const shown = [];
        [].concat(o.reveals || []).forEach(function (id) {
          const so = self.st[id];
          if (so && !so.visible) { so.visible = true; so.fresh = true; shown.push(id); }
        });
        if (gained.length) {
          this.drawInv();
          this.msg('🎒 ' + t('esGot') + ' ' + gained.map(function (id) { const it = self.room.items[id]; return it.emoji + ' ' + L(it); }).join(', '), 'good');
          Sound.star();
        } else if (shown.length) {
          this.msg('✨ ' + t('esNew'), 'good');
          Sound.star();
        }
        K.hud();
        if (o.exit && first) this.solved();
      },

      /* een poging bij een slot */
      attempt: function (o, ok) {
        if (!this.can()) return;
        const lk = o.lock;
        if (ok) {
          Sound.correct();
          this.openObj(o);
          if (this.over) return;       /* de uitgang is open: solved() heeft het scherm al getekend */
          this.drawScene();
          this.drawPanel();
          return;
        }
        this.wrong++;
        this.seq = [];
        this.msg('❌ ' + (lk.fail ? L(lk.fail) : t('esWrong')), 'bad');
        K.loseHeart();
        if (this.can()) this.drawPanel();
      },

      drawPanel: function (typed) {
        const self = this;
        const panel = this.root.querySelector('.es-panel');
        panel.innerHTML = '';
        const o = this.cur && this.obj(this.cur);
        if (!o) {
          panel.appendChild(el('p', 'es-hintline', this.started ? '' : t('esTapAnything')));
          return;
        }
        const st = this.st[o.id];
        panel.appendChild(el('h4', '', o.emoji + ' ' + L(o.name)));
        const txt = el('p', 'es-text');
        txt.textContent = st.open && o.lock && o.opened ? L(o.opened) : L(o.text);
        panel.appendChild(txt);
        if (st.open && o.lock && o.opened) {
          const old = el('details', 'es-before');
          old.appendChild(el('summary', '', t('esBefore')));
          old.appendChild(el('p', '', L(o.text)));
          panel.appendChild(old);
        }
        if (o.lock && !st.open) panel.appendChild(this.lockUI(o, typed));
      },

      lockUI: function (o, typed) {
        const self = this, lk = o.lock;
        const box = el('div', 'es-lock');
        if (lk.ask) box.appendChild(el('p', 'es-ask', L(lk.ask)));
        if (lk.kind === 'code') {
          const row = el('div', 'es-code');
          const inp = el('input', 'es-input');
          inp.type = 'text';
          inp.autocomplete = 'off';
          inp.spellcheck = false;
          inp.setAttribute('autocapitalize', 'off');
          if (/^\d+$/.test(String(lk.answer))) inp.setAttribute('inputmode', 'numeric');
          inp.maxLength = Math.max(String(lk.answer).length + 2, 4);
          inp.placeholder = /^\d+$/.test(String(lk.answer)) ? '• '.repeat(String(lk.answer).length).trim() : '…';
          inp.value = typed || '';
          const go = el('button', 'big-btn es-go', '🔓 ' + t('esOpen'));
          const submit = function () { self.attempt(o, norm(inp.value) === norm(lk.answer)); };
          go.addEventListener('click', submit);
          inp.addEventListener('keydown', function (e) { e.stopPropagation(); if (e.key === 'Enter') { e.preventDefault(); submit(); } });
          row.appendChild(inp);
          row.appendChild(go);
          box.appendChild(row);
        } else if (lk.kind === 'choice') {
          const opts = el('div', 'es-opts');
          lk.options.forEach(function (op, i) {
            const b = el('button', 'es-opt');
            b.appendChild(el('span', 'es-opt-emoji', op.emoji || ''));
            b.appendChild(el('span', '', L(op)));
            b.addEventListener('click', function () { self.attempt(o, i === lk.answer); });
            opts.appendChild(b);
          });
          box.appendChild(opts);
        } else if (lk.kind === 'seq') {
          const prog = el('div', 'es-seq');
          const draw = function () {
            prog.innerHTML = '';
            for (let i = 0; i < lk.answer.length; i++) {
              const dot = el('span', 'es-dot' + (i < self.seq.length ? ' on' : ''));
              dot.textContent = i < self.seq.length ? (lk.options[self.seq[i]].emoji || String(self.seq[i] + 1)) : '·';
              prog.appendChild(dot);
            }
          };
          draw();
          box.appendChild(prog);
          const opts = el('div', 'es-opts');
          lk.options.forEach(function (op, i) {
            const b = el('button', 'es-opt');
            b.appendChild(el('span', 'es-opt-emoji', op.emoji || ''));
            b.appendChild(el('span', '', L(op)));
            b.addEventListener('click', function () {
              if (!self.can()) return;
              Sound.click();
              self.seq.push(i);
              draw();
              if (self.seq.length === lk.answer.length) {
                const ok = self.seq.every(function (v, k) { return v === lk.answer[k]; });
                self.attempt(o, ok);
              }
            });
            opts.appendChild(b);
          });
          box.appendChild(opts);
          const reset = el('button', 'ghost-btn es-reset', '↺ ' + t('esReset'));
          reset.addEventListener('click', function () { self.seq = []; draw(); Sound.click(); });
          box.appendChild(reset);
        } else if (lk.kind === 'item') {
          const ids = [].concat(lk.item || lk.items || []);
          const have = ids.every(function (id) { return self.inv[id]; });
          if (have) {
            const b = el('button', 'big-btn es-use', ids.map(function (id) { return self.room.items[id].emoji; }).join('') + ' ' + t('esUse') + ' ' +
              ids.map(function (id) { return L(self.room.items[id]); }).join(' + '));
            b.addEventListener('click', function () { self.attempt(o, true); });
            box.appendChild(b);
          } else {
            box.appendChild(el('p', 'es-need', '🔒 ' + (lk.need ? L(lk.need) : t('esNeedItem'))));
          }
        }
        return box;
      },

      /* ---- hint ---- */
      hint: function () {
        if (!this.can()) return;
        const self = this;
        let target = this.cur && this.obj(this.cur);
        if (!target || !target.lock || this.st[target.id].open) {
          target = this.room.objects.filter(function (o) { return self.st[o.id].visible && o.lock && !self.st[o.id].open && o.lock.hint; })[0];
        }
        this.hints++;
        Sound.click();
        if (target && target.lock.hint) {
          this.msg('💡 ' + L(target.lock.hint), 'hint');
        } else {
          this.msg('💡 ' + t('esHintLook'), 'hint');
        }
      },

      /* ---- klaar ---- */
      solved: function () {
        this.over = true;
        FX.burst(120);
        Sound.finish();
        const panel = this.root.querySelector('.es-panel');
        const self = this;
        panel.innerHTML = '';
        panel.appendChild(el('h4', '', '🚪 ' + t('esFree')));
        panel.appendChild(el('p', 'es-text', L(this.room.outro)));
        const b = el('button', 'big-btn es-finish', t('esContinue') + ' →');
        b.addEventListener('click', function () { Sound.click(); self.finish(); });
        panel.appendChild(b);
        this.root.querySelector('.es-tools').classList.add('hidden');
        this.msg('');
        this.drawScene();
      },
      finish: function () {
        this.done = true;
        const bonus = Math.max(10, 60 - this.hints * 8 - this.wrong * 10);
        K.bonus(bonus, '🔐', G.W / 2, 60);
        K.resolve(0, 'ok', G.W / 2, 60);
      },

      status: function () { return '❤️'.repeat(G.hearts) + '🤍'.repeat(Math.max(0, G.maxHearts - G.hearts)); },
      countText: function () {
        const self = this, locks = this.room ? this.room.objects.filter(function (o) { return o.lock; }) : [];
        return '🔓 ' + locks.filter(function (o) { return self.st[o.id] && self.st[o.id].open; }).length + '/' + locks.length;
      },
      promptText: function () { return this.room ? '🔐 ' + t('esPrompt') : ''; },

      result: function () {
        const win = !!this.done;
        const w = this.wrong, h = this.hints;
        const stars = win ? (w === 0 && h === 0 ? 3 : w + h <= 2 ? 2 : 1) : 0;
        if (win) {
          const p = Store.player;
          if (!p.escape || typeof p.escape !== 'object') p.escape = {};
          if (!p.escape[def.id]) p.escape[def.id] = {};
          p.escape[def.id][this.room.id] = Math.max(p.escape[def.id][this.room.id] || 0, stars);
        }
        return {
          win: win, stars: stars, xpMul: 6, correct: win ? 1 : 0, total: 1, of: 1,
          note: function () { return win ? t('esResult').replace('{w}', w).replace('{h}', h) : ''; }
        };
      },

      /* voor de test: de kamer in één keer oplossen, of een fout antwoord proberen */
      debugResolve: function (ok) {
        if (!this.can()) return;
        const self = this;
        if (!ok) {
          const o = this.room.objects.filter(function (x) { return self.st[x.id].visible && x.lock && x.lock.kind === 'code' && !self.st[x.id].open; })[0];
          if (o) { this.enter(o); this.attempt(o, false); }
          else this.attempt(this.room.objects[0] && this.room.objects.filter(function (x) { return x.lock; })[0], false);
          return;
        }
        const plan = solvable(this.room).order;
        plan.forEach(function (id) {
          const o = self.obj(id);
          if (!self.can() || self.st[id].open) return;
          self.enter(o);
          if (o.lock && !self.st[id].open) self.attempt(o, true);
        });
        if (this.over && !this.done) this.finish();
      },
      /* de test kan zo het goede antwoord van een slot opvragen */
      debugAnswer: function (id) { const o = this.obj(id); return o && o.lock ? o.lock.answer : null; }
    };
  }

  (window.ESCAPES || []).forEach(function (def) {
    Arcade.register({
      id: 'escape-' + def.id, emoji: def.emoji, hue: def.hue, nl: def.title.nl, en: def.title.en, cat: 'escape', kind: 'dom', free: true,
      hearts: 3, decks: ['read'], escapeId: def.id,
      descNl: def.blurb.nl, descEn: def.blurb.en,
      howNl: 'Je zit opgesloten in een kamer. Tik op de spullen en lees goed wat er staat: in de teksten zitten de aanwijzingen voor de sloten. Combineer wat je leest, open de sloten en kom de kamer uit. Een fout antwoord kost een hartje, een hint kost een ster.',
      howEn: 'You are locked in a room. Tap the things in the room and read carefully what it says: the texts hold the clues for the locks. Combine what you read, open the locks and get out of the room. A wrong answer costs a heart, a hint costs a star.',
      goalNl: '🔐 Lees de aanwijzingen en kom de kamer uit',
      goalEn: '🔐 Read the clues and get out of the room'
    }, makeModule(def));
  });
})();
