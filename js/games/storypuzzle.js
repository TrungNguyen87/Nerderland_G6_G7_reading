/* =====================================================================
   🧩 Verhaalpuzzel: zet het verhaal weer in de goede volgorde.

   Een stukje van een echt verhaal uit het leesdeel is door elkaar
   geschud. Lees de zinnen en bedenk wat er eerst, daarna en ten slotte
   gebeurt. Let op woorden als "toen", "daarna", "daarom" en op hij, zij en
   het: die wijzen terug naar iets uit de zin ervoor.

   Tik op een zin en dan op een andere om ze te wisselen (of gebruik de
   pijltjes). Druk op Controleer: de zinnen die op de goede plek staan
   worden groen en blijven vast zitten, de rest mag je opnieuw proberen.
   Je hebt een paar pogingen. Eén 💡 hint zet een zin voor je op zijn plek.

   Level 1 (groep 6): 5 zinnen uit een kort verhaal, de eerste staat vast.
   Level 2 (groep 7): 6 zinnen uit een langer verhaal, de eerste staat vast.
   Level 3 (groep 8): 7 zinnen uit het begin van een lange tekst; niets
     staat vast.
   ===================================================================== */
'use strict';

(function () {
  const K = Arcade.kit;
  const G = K.G;
  const PUZZLES = 3;
  const CFG = [null,
    { n: 5, fixFirst: true, tries: 5, lv: [1, 2], maxLen: 170 },
    { n: 6, fixFirst: true, tries: 5, lv: [3, 4], maxLen: 190 },
    { n: 7, fixFirst: false, tries: 6, lv: [5, 6], maxLen: 220 }];
  const MIN_LEN = 22;

  /* zinnen splitsen: na . ! ? … (met een sluitend aanhalingsteken) en een spatie,
     als er een hoofdletter, aanhalingsteken of cijfer volgt. "Mo!” roept Jesse
     blijft dus één zin. Geen lookbehind: oudere iPads begrijpen dat niet. */
  function splitSentences(p) {
    const out = [];
    const re = /[.!?…]+["”’']?(?=\s+["“‘„']?[A-ZÀ-Ý0-9])/g;
    let last = 0, m;
    while ((m = re.exec(p))) {
      const end = m.index + m[0].length;
      out.push(p.slice(last, end).trim());
      last = end;
    }
    out.push(p.slice(last).trim());
    return out.filter(Boolean);
  }

  /* per verhaal de zinnen, NL en EN naast elkaar. Een alinea waarvan het
     aantal zinnen in beide talen niet gelijk is, doet niet mee (bad). */
  const cache = {};
  function sentencesOf(story) {
    if (cache[story.id] !== undefined) return cache[story.id];
    const out = [];
    story.text.nl.forEach(function (para, pi) {
      const nl = splitSentences(para), en = splitSentences(story.text.en[pi] || '');
      nl.forEach(function (s, si) { out.push({ nl: s, en: en[si] || s, pi: pi, si: si, bad: nl.length !== en.length }); });
    });
    cache[story.id] = out;
    return out;
  }

  /* alle plekken waar een venster van n zinnen kan beginnen */
  function windows(story, cfg) {
    const sents = sentencesOf(story);
    const out = [];
    for (let i = 0; i + cfg.n <= sents.length; i++) {
      /* zonder vaste eerste zin moet het venster aan het begin van het verhaal staan */
      if (cfg.fixFirst ? !(i === 0 || sents[i].si === 0) : i !== 0) continue;
      let ok = true;
      for (let k = i; k < i + cfg.n; k++) {
        const s = sents[k];
        if (s.bad || s.nl.length < MIN_LEN || s.nl.length > cfg.maxLen) { ok = false; break; }
      }
      if (ok) out.push(i);
    }
    return out;
  }

  /* een schudvolgorde waarin bijna niets al goed staat */
  function scramble(n, fixFirst) {
    const from = fixFirst ? 1 : 0;
    for (let tries = 0; tries < 200; tries++) {
      const rest = [];
      for (let i = from; i < n; i++) rest.push(i);
      shuffle(rest);
      const order = fixFirst ? [0].concat(rest) : rest;
      let fixed = 0;
      for (let i = from; i < n; i++) if (order[i] === i) fixed++;
      if (fixed <= 1 && order.some(function (v, i) { return v !== i; })) return order;
    }
    const o = [];
    for (let i = 0; i < n; i++) o.push(i);
    return fixFirst ? [0].concat(o.slice(1).reverse()) : o.reverse();
  }

  function pickPuzzle(lv, usedStories) {
    const cfg = CFG[lv];
    const best = Store.player.best || {};
    let pool = (window.STORY_DB || []).filter(function (s) { return cfg.lv.indexOf(s.level) !== -1 && !usedStories[s.id]; });
    pool = shuffle(pool);
    /* verhalen die het kind nog niet las gaan voor: dan moet je echt redeneren */
    pool.sort(function (a, b) { return (best[a.id] ? 1 : 0) - (best[b.id] ? 1 : 0) + (Math.random() - 0.5) * 0.9; });
    for (let i = 0; i < pool.length; i++) {
      const w = windows(pool[i], cfg);
      if (!w.length) continue;
      const start = K.pick(w);
      const sents = sentencesOf(pool[i]).slice(start, start + cfg.n);
      return { story: pool[i], start: start, tiles: sents.map(function (s) { return { nl: s.nl, en: s.en }; }) };
    }
    return null;
  }

  const Story = {
    splitSentences: splitSentences,
    pick: pickPuzzle,

    makeDuels: function (deck, lv) {
      const used = {};
      const list = [];
      for (let i = 0; i < PUZZLES; i++) {
        const p = pickPuzzle(lv, used) || pickPuzzle(lv, {});
        used[p.story.id] = 1;
        list.push({ right: L(p.story.title), wrong: '', prompt: null,
          why: { nl: 'Let op tijdwoorden (eerst, toen, daarna) en op hij, zij en het: die wijzen terug naar de zin ervoor.',
            en: 'Look at time words (first, then, after that) and at he, she and it: they point back to the sentence before.' },
          puz: p, done: false, how: null });
      }
      return list;
    },

    init: function (dom) {
      this.dom = dom;
      this.cfg = CFG[G.lv];
      this.failed = 0;
      this.penalty = 0;
      this.solved = 0;
      this.load(0);
    },

    load: function (i) {
      const cfg = this.cfg;
      this.pi = i;
      this.puz = G.duels[i].puz;
      this.n = this.puz.tiles.length;
      this.order = scramble(this.n, cfg.fixFirst);
      this.locked = {};
      if (cfg.fixFirst) this.locked[0] = true;
      this.fixed = cfg.fixFirst ? 0 : -1;
      this.sel = null;
      this.triesLeft = cfg.tries;
      this.checks = 0;
      this.hints = 0;
      this.over = false;
      this.render();
      K.hud();
    },

    render: function () {
      const self = this;
      const p = this.puz;
      const root = document.createElement('div');
      root.className = 'sp-wrap';
      root.innerHTML =
        '<div class="sp-head"><span class="sp-emoji"></span><div><b class="sp-title"></b><small class="sp-sub"></small></div></div>' +
        '<p class="sp-help"></p>' +
        '<ol class="sp-list"></ol>' +
        '<div class="sp-bar"><button class="big-btn sp-check"></button><button class="ghost-btn sp-hint"></button>' +
          '<button class="big-btn sp-next hidden"></button></div>' +
        '<p class="sp-msg" role="status"></p>';
      this.dom.innerHTML = '';
      this.dom.appendChild(root);
      this.root = root;
      root.querySelector('.sp-check').addEventListener('click', function () { self.check(); });
      root.querySelector('.sp-hint').addEventListener('click', function () { self.hint(); });
      root.querySelector('.sp-next').addEventListener('click', function () { Sound.click(); self.load(self.pi + 1); });
      this.draw();
      this.texts();
    },

    /* de teksten die van de taal afhangen */
    texts: function () {
      const root = this.root, p = this.puz;
      if (!root) return;
      root.querySelector('.sp-emoji').textContent = p.story.emoji || '📖';
      root.querySelector('.sp-title').textContent = L(p.story.title);
      root.querySelector('.sp-sub').textContent = p.story.series
        ? t('bookChapter').replace('{n}', p.story.chapter)
        : (window.LANG === 'nl' ? 'Een stukje uit een verhaal' : 'A piece of a story');
      root.querySelector('.sp-help').textContent = (this.cfg.fixFirst ? '📌 ' + t('spHelpFixed') : '🧩 ' + t('spHelpFree'));
      root.querySelector('.sp-check').textContent = '✅ ' + t('spCheck');
      root.querySelector('.sp-hint').textContent = '💡 ' + t('spHint');
      root.querySelector('.sp-next').textContent = t('spNext') + ' →';
      this.draw();
      this.refresh();
    },
    relang: function () { this.texts(); },

    refresh: function () {
      const chk = this.root && this.root.querySelector('.sp-check');
      if (chk) chk.textContent = '✅ ' + t('spCheck') + ' (' + t('spTries').replace('{n}', this.triesLeft) + ')';
      const h = this.root && this.root.querySelector('.sp-hint');
      if (h) h.disabled = this.hints >= 1 || this.over;
    },

    /* de zinnen op het scherm */
    draw: function () {
      const self = this, list = this.root.querySelector('.sp-list');
      list.innerHTML = '';
      this.order.forEach(function (id, pos) {
        const li = document.createElement('li');
        const b = document.createElement('button');
        const lock = !!self.locked[pos];
        b.className = 'sp-tile' + (lock ? ' locked' : '') + (self.sel === pos ? ' sel' : '') + (self.wrongNow && self.wrongNow[pos] ? ' wrong' : '') +
          (self.fixed === pos ? ' fixed' : '');
        b.dataset.pos = pos;
        b.dataset.id = id;
        b.innerHTML = '<i>' + (pos + 1) + '</i><span class="sp-text"></span><em></em>';
        b.querySelector('.sp-text').textContent = L(self.puz.tiles[id]);
        b.querySelector('em').textContent = self.fixed === pos ? '📌' : lock ? '🔒' : '';
        b.addEventListener('click', function () { self.tap(pos); });
        li.appendChild(b);
        if (self.sel === pos && !lock) {
          const mv = document.createElement('div');
          mv.className = 'sp-move';
          const up = document.createElement('button');
          up.className = 'sp-arrow';
          up.textContent = '▲';
          up.setAttribute('aria-label', t('spUp'));
          up.addEventListener('click', function (e) { e.stopPropagation(); self.nudge(pos, -1); });
          const dn = document.createElement('button');
          dn.className = 'sp-arrow';
          dn.textContent = '▼';
          dn.setAttribute('aria-label', t('spDown'));
          dn.addEventListener('click', function (e) { e.stopPropagation(); self.nudge(pos, 1); });
          mv.appendChild(up);
          mv.appendChild(dn);
          li.appendChild(mv);
        }
        list.appendChild(li);
      });
    },

    msg: function (text, kind) {
      const el = this.root && this.root.querySelector('.sp-msg');
      if (!el) return;
      el.textContent = text || '';
      el.className = 'sp-msg' + (kind ? ' ' + kind : '');
    },

    canPlay: function () { return G.state === 'play' && !this.over; },

    swap: function (a, b) {
      const o = this.order;
      const x = o[a]; o[a] = o[b]; o[b] = x;
    },

    tap: function (pos) {
      if (!this.canPlay() || this.locked[pos]) return;
      Sound.click();
      this.wrongNow = null;
      if (this.sel === null) this.sel = pos;
      else if (this.sel === pos) this.sel = null;
      else {
        this.swap(this.sel, pos);
        this.sel = null;
      }
      this.msg('');
      this.draw();
    },

    /* een zin één plek omhoog of omlaag, voorbij de vaste zinnen */
    nudge: function (pos, dir) {
      if (!this.canPlay()) return;
      let to = pos + dir;
      while (to >= 0 && to < this.n && this.locked[to]) to += dir;
      if (to < 0 || to >= this.n) return;
      Sound.click();
      this.swap(pos, to);
      this.sel = to;
      this.wrongNow = null;
      this.draw();
    },

    check: function () {
      if (!this.canPlay()) return;
      const self = this;
      this.checks++;
      this.triesLeft--;
      this.sel = null;
      const wrong = {};
      let good = 0;
      this.order.forEach(function (id, pos) {
        if (id === pos) { self.locked[pos] = true; good++; } else wrong[pos] = true;
      });
      this.wrongNow = wrong;
      if (good === this.n) { this.solve(); return; }
      Sound.wrong();
      if (this.triesLeft <= 0) { this.fail(); return; }
      this.msg('🔒 ' + t('spGood').replace('{n}', good).replace('{total}', this.n) + ' ' + t('spAgain'), 'bad');
      this.draw();
      this.refresh();
    },

    hint: function () {
      if (!this.canPlay() || this.hints >= 1) return;
      const self = this;
      const pos = this.order.findIndex(function (id, p) { return id !== p; });
      if (pos < 0) return;
      const at = this.order.indexOf(pos);
      this.swap(pos, at);
      this.locked[pos] = true;
      this.hints++;
      this.sel = null;
      this.wrongNow = null;
      Sound.star();
      this.msg('💡 ' + t('spHinted').replace('{n}', pos + 1), 'good');
      this.draw();
      this.refresh();
      /* was dat de laatste? dan is hij klaar na een controle */
      if (this.order.every(function (id, p) { return id === p; })) {
        this.order.forEach(function (id, p) { self.locked[p] = true; });
        this.solve();
      }
    },

    solve: function () {
      this.over = true;
      this.solved++;
      this.penalty += (this.checks - 1) + this.hints * 2;
      this.draw();
      this.refresh();
      this.msg('✅ ' + t('spSolved'), 'good');
      FX.burst(60);
      const clean = this.checks <= 2 && this.hints === 0;
      K.resolve(this.pi, 'ok', G.W / 2, 60);
      if (clean) K.bonus(10, '🧩', G.W / 2, 90);
      this.showNext();
    },

    fail: function () {
      this.over = true;
      this.penalty += 6;
      this.failed++;
      /* de goede volgorde laten zien */
      const n = this.n;
      this.order = [];
      for (let i = 0; i < n; i++) this.order.push(i);
      for (let i = 0; i < n; i++) this.locked[i] = true;
      this.wrongNow = null;
      this.draw();
      this.refresh();
      this.msg('❌ ' + t('spFailed'), 'bad');
      K.resolve(this.pi, 'wrong', G.W / 2, 60);
      this.showNext();
    },

    showNext: function () {
      const last = this.pi >= G.duels.length - 1;
      const nx = this.root.querySelector('.sp-next');
      nx.classList.toggle('hidden', last);
      this.root.querySelector('.sp-check').classList.add('hidden');
      this.root.querySelector('.sp-hint').classList.add('hidden');
    },

    /* de HUD: hartjes (mislukte puzzels) en hoeveel pogingen nog over zijn */
    status: function () {
      return '❤️'.repeat(G.hearts) + '🤍'.repeat(Math.max(0, G.maxHearts - G.hearts)) + (this.over ? '' : ' · 🔁 ' + this.triesLeft);
    },
    countText: function () { return '🧩 ' + Math.min(G.di + 1, G.duels.length) + '/' + G.duels.length; },
    promptText: function () { return t('spPrompt'); },

    result: function () {
      const n = G.duels.length;
      const win = G.di >= n && G.hearts > 0;
      const solved = this.solved;
      const stars = win ? (this.penalty <= 3 ? 3 : this.penalty <= 8 ? 2 : 1) : (solved >= 2 ? 1 : 0);
      return {
        win: win, stars: stars, xpMul: 3,
        note: function () { return t('spResult').replace('{n}', solved); }
      };
    },

    /* voor de test: oplossen (goed) of alle pogingen opmaken (fout) */
    debugResolve: function (ok) {
      if (G.state !== 'play') return;
      if (this.over && this.pi < G.duels.length - 1) this.load(this.pi + 1);
      if (!this.canPlay()) return;
      if (ok) {
        for (let i = 0; i < this.n; i++) this.order[i] = i;
        this.check();
      } else {
        const wrong = this.order.slice();
        wrong.reverse();
        /* een stand waarin niets goed staat, en blijft staan */
        for (let k = 0; k < this.cfg.tries && !this.over; k++) {
          this.order = (this.cfg.fixFirst ? [0].concat(wrong.filter(function (v) { return v !== 0; })) : wrong).slice();
          this.locked = this.cfg.fixFirst ? { 0: true } : {};
          this.check();
        }
      }
      if (this.over && this.pi < G.duels.length - 1) this.load(this.pi + 1);
    }
  };
  Arcade.register({
    id: 'storypuzzle', emoji: '🧩', hue: 330, nl: 'Verhaalpuzzel', en: 'Story Puzzle', cat: 'puzzle', kind: 'dom', free: true,
    decks: ['read'],
    descNl: 'De zinnen van een verhaal zijn door elkaar. Zet ze in de goede volgorde!',
    descEn: 'The sentences of a story are jumbled. Put them in the right order!',
    howNl: 'Een stukje van een verhaal is door elkaar geschud. Tik op een zin en dan op een andere om ze te wisselen. Druk op Controleer: wat goed staat wordt groen en blijft vast zitten. Let op tijdwoorden en op hij, zij en het.',
    howEn: 'A piece of a story has been jumbled. Tap a sentence and then another one to swap them. Press Check: what is right turns green and stays put. Watch out for time words and for he, she and it.',
    goalNl: '🧩 Zet de zinnen van het verhaal in de goede volgorde',
    goalEn: '🧩 Put the sentences of the story in the right order'
  }, Story);
})();
