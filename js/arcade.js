/* =====================================================================
   De speelhal: drie arcadespelletjes waarin je stiekem oefent.

   Elk spel is een ronde van 15 "duels": twee woorden, één goed en één
   fout. Bij Flappy Uil vlieg je door het goede poortje, bij Springheld
   spring je naar het goede blok (of blijf je laag), bij Woordregen vang
   je het goede woord met je emmer. De duels komen uit de bestaande data:

     - Spelling: de pick-, fill- en error-opdrachten uit de spellingsets
       (woorden die het kind eerder fout had, komen vaker langs)
     - Woordbetekenis: de moeilijke woorden uit de verhalen, met hun uitleg
       (woorden uit verhalen die het kind gelezen heeft, gaan voor)

   Een spel kost één speelkaartje 🎟️ (zie js/rewards.js). Kaartjes verdien
   je met lezen en spelling, dus de speelhal is een beloning voor lezen en
   geen vervanging ervan. XP en munten zijn hier bewust klein.
   ===================================================================== */
'use strict';

const Arcade = (function () {

  const ROUND = 15;
  const HEARTS = 3;
  const MAXLEN = 18;   /* langere woorden passen niet in een poortje */

  const GAMES = [
    { id: 'flappy', emoji: '🦉', hue: 200, nl: 'Flappy Uil', en: 'Flappy Owl',
      descNl: 'Tik om te fladderen. Vlieg door het poortje met het goede woord!',
      descEn: 'Tap to flap. Fly through the gate with the right word!',
      howNl: 'Tik, klik of druk op spatie om omhoog te fladderen. Vlieg door het poortje met het goede woord. Een muur of de grond kost een hartje.',
      howEn: 'Tap, click or press space to flap up. Fly through the gate with the right word. A wall or the ground costs a heart.' },
    { id: 'runner', emoji: '🏃', hue: 130, nl: 'Springheld', en: 'Jump Hero',
      descNl: 'Spring naar het hoge blok of blijf laag. Pak het goede woord!',
      descEn: 'Jump to the high block or stay low. Grab the right word!',
      howNl: 'Je held rent vanzelf. Tik of druk op spatie om te springen. Staat het goede woord hoog? Spring! Staat het laag? Blijf rennen. Spring over de slakken!',
      howEn: 'Your hero runs by itself. Tap or press space to jump. Is the right word up high? Jump! Is it low? Keep running. Jump over the snails!' },
    { id: 'rain', emoji: '☔', hue: 265, nl: 'Woordregen', en: 'Word Rain',
      descNl: 'Schuif je emmer en vang alleen de goede woorden.',
      descEn: 'Slide your bucket and catch only the right words.',
      howNl: 'Schuif met je vinger of muis, of gebruik de pijltjestoetsen. Vang het goede woord. Een fout woord in je emmer kost een hartje.',
      howEn: 'Slide with your finger or mouse, or use the arrow keys. Catch the right word. A wrong word in your bucket costs a heart.' }
  ];
  const DECKS = [
    { id: 'spell', emoji: '✍️', nl: 'Spelling', en: 'Spelling' },
    { id: 'words', emoji: '📖', nl: 'Woordbetekenis', en: 'Word meaning' }
  ];

  function gameById(id) { return GAMES.filter(function (g) { return g.id === id; })[0]; }

  /* =====================================================================
     1. De duels
     ===================================================================== */
  function plain(s) { return String(s || '').replace(/<[^>]+>/g, ''); }
  /* leestekens aan de rand van een woord uit een zin weghalen */
  function bare(w) { return String(w || '').replace(/^[„"“(]+/, '').replace(/[.,!?;:"”)]+$/, ''); }
  function fits(w) { return !!w && w.length <= MAXLEN && w.indexOf('<') === -1; }
  function pick(list) { return list[Math.floor(Math.random() * list.length)]; }

  let spellCache = null;
  function spellPool() {
    if (spellCache) return spellCache;
    const out = [];
    const seen = {};
    (window.SPELL_SETS || []).forEach(function (set) {
      set.items.forEach(function (it) {
        let right = null, wrongs = [], prompt = null;
        if (it.type === 'pick' && !it.whole) {
          right = it.options[it.answer];
          wrongs = it.options.filter(function (o, i) { return i !== it.answer; });
          prompt = it.sentence || null;
        } else if (it.type === 'fill') {
          right = it.before + it.gap[it.answer] + it.after;
          wrongs = it.gap.filter(function (g, i) { return i !== it.answer; })
            .map(function (g) { return it.before + g + it.after; });
        } else if (it.type === 'error') {
          right = bare(it.fix);
          wrongs = [bare(it.words[it.answer])];
          const s = it.words.map(function (w, i) {
            return i === it.answer ? w.replace(bare(w), '___') : w;
          }).join(' ');
          prompt = { nl: s, en: s };
        }
        if (!right) return;
        right = String(right).trim();
        wrongs = wrongs.map(function (w) { return String(w).trim(); })
          .filter(function (w) { return fits(w) && w !== right; });
        if (!fits(right) || !wrongs.length) return;
        const key = right + '|' + wrongs.join('|');
        if (seen[key]) return;
        seen[key] = 1;
        out.push({ right: right, wrongs: wrongs, prompt: prompt, why: it.why || null });
      });
    });
    spellCache = out;
    return out;
  }

  let wordCache = null;
  function wordPool() {
    if (wordCache) return wordCache;
    const seen = {};
    const out = [];
    (window.STORY_DB || []).forEach(function (s) {
      (s.words || []).forEach(function (w) {
        const k = w.nl.toLowerCase();
        if (seen[k] || !fits(w.nl)) return;
        seen[k] = 1;
        out.push({ word: w.nl, def: { nl: w.defNl, en: w.defEn }, story: s.id });
      });
    });
    wordCache = out;
    return out;
  }

  function vocabDuel(w, pool) {
    /* afleider: een ander woord van ongeveer dezelfde lengte */
    const near = pool.filter(function (x) { return x !== w && Math.abs(x.word.length - w.word.length) <= 3; });
    const other = pick(near.length ? near : pool.filter(function (x) { return x !== w; }));
    return { right: w.word, wrongs: [other.word], prompt: w.def, why: null, vocab: true };
  }

  function buildRound(deck) {
    let list = [];
    if (deck === 'words') {
      const pool = wordPool();
      const best = Store.player.best || {};
      const mine = shuffle(pool.filter(function (w) { return best[w.story]; }));
      const rest = shuffle(pool.filter(function (w) { return !best[w.story]; }));
      list = mine.slice(0, 10).concat(rest).slice(0, ROUND)
        .map(function (w) { return vocabDuel(w, pool); });
    } else {
      const pool = spellPool();
      /* woorden die dit kind eerder fout spelde komen vaker terug */
      const missed = {};
      Stats.spellMistakes().forEach(function (m) { missed[bare(m.word)] = 1; });
      const mine = shuffle(pool.filter(function (d) { return missed[d.right]; }));
      const rest = shuffle(pool.filter(function (d) { return !missed[d.right]; }));
      const seen = {};
      mine.slice(0, 5).concat(rest).forEach(function (d) {
        if (list.length < ROUND && !seen[d.right]) { seen[d.right] = 1; list.push(d); }
      });
    }
    return shuffle(list).map(function (d) {
      return { right: d.right, wrong: pick(d.wrongs), prompt: d.prompt, why: d.why, vocab: !!d.vocab, done: false, how: null };
    });
  }

  /* =====================================================================
     2. De spelmotor: één canvas, één lus, drie spellen
     ===================================================================== */
  const G = {
    id: null, deck: 'spell', duels: [], di: 0, score: 0, correct: 0, hearts: HEARTS, combo: 0,
    mistakes: [], state: 'idle', frames: 0, t: 0, raf: 0, last: 0,
    W: 600, H: 360, dpr: 1, game: null, pops: [], shake: 0, last_result: null
  };
  let canvas = null, ctx = null;
  const keys = { left: false, right: false };

  function resize() {
    if (!canvas) return;
    const wrap = canvas.parentElement;
    const w = Math.max(280, Math.floor(wrap.clientWidth || 600));
    const h = Math.round(Math.max(300, Math.min(430, w * 0.62)));
    G.dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(w * G.dpr);
    canvas.height = Math.round(h * G.dpr);
    canvas.style.height = h + 'px';
    ctx.setTransform(G.dpr, 0, 0, G.dpr, 0, 0);
    const changed = w !== G.W || h !== G.H;
    G.W = w; G.H = h;
    return changed;
  }

  function current() {
    for (let i = 0; i < G.duels.length; i++) if (!G.duels[i].done) return G.duels[i];
    return null;
  }

  /* ---- tekenhulpjes ---- */
  function rr(x, y, w, h, r) {
    r = Math.min(r, w / 2, h / 2);
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.arcTo(x + w, y, x + w, y + h, r);
    ctx.arcTo(x + w, y + h, x, y + h, r);
    ctx.arcTo(x, y + h, x, y, r);
    ctx.arcTo(x, y, x + w, y, r);
    ctx.closePath();
  }
  function font(px, weight) { ctx.font = (weight || 800) + ' ' + px + 'px Nunito, "Trebuchet MS", system-ui, sans-serif'; }
  function emoji(ch, x, y, px, rot) {
    ctx.save();
    ctx.translate(x, y);
    if (rot) ctx.rotate(rot);
    ctx.font = px + 'px "Apple Color Emoji", "Segoe UI Emoji", "Noto Color Emoji", sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    /* kleuremoji nemen de doorzichtigheid van de vorige vulkleur over */
    ctx.fillStyle = '#000';
    ctx.fillText(ch, 0, 0);
    ctx.restore();
  }
  /* een woordbordje; state: null (nog open), 'ok' of 'no' */
  function wordTag(text, cx, cy, state, px, fill) {
    font(px || 18);
    const w = ctx.measureText(text).width + 22;
    const h = (px || 18) + 16;
    ctx.save();
    ctx.shadowColor = 'rgba(0,0,0,.18)';
    ctx.shadowBlur = 6;
    ctx.shadowOffsetY = 2;
    ctx.fillStyle = state === 'ok' ? '#c8f5dc' : state === 'no' ? '#ffd6d2' : (fill || '#ffffff');
    rr(cx - w / 2, cy - h / 2, w, h, 12);
    ctx.fill();
    ctx.restore();
    ctx.lineWidth = 3;
    ctx.strokeStyle = state === 'ok' ? '#22a86b' : state === 'no' ? '#e4483f' : 'rgba(35,36,58,.18)';
    rr(cx - w / 2, cy - h / 2, w, h, 12);
    ctx.stroke();
    ctx.fillStyle = '#23243a';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(text, cx, cy + 1);
    return w;
  }
  function sky(top, bottom) {
    const g = ctx.createLinearGradient(0, 0, 0, G.H);
    g.addColorStop(0, top);
    g.addColorStop(1, bottom);
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, G.W, G.H);
  }
  function clouds(list, speed, dt) {
    ctx.fillStyle = 'rgba(255,255,255,.85)';
    list.forEach(function (c) {
      if (dt) { c.x -= speed * c.s * dt; if (c.x < -90) { c.x = G.W + 60; c.y = 20 + Math.random() * G.H * 0.35; } }
      ctx.beginPath();
      ctx.arc(c.x, c.y, 16 * c.s, 0, 7);
      ctx.arc(c.x + 20 * c.s, c.y - 8 * c.s, 20 * c.s, 0, 7);
      ctx.arc(c.x + 42 * c.s, c.y, 15 * c.s, 0, 7);
      ctx.fill();
    });
  }
  function makeClouds(n) {
    const out = [];
    for (let i = 0; i < n; i++) out.push({ x: Math.random() * G.W, y: 20 + Math.random() * G.H * 0.35, s: 0.6 + Math.random() * 0.7 });
    return out;
  }

  /* zwevende "+12" of "✗" boven het speelveld */
  function pop(text, good, x, y) {
    G.pops.push({ text: text, good: good, x: x === undefined ? G.W / 2 : x, y: y === undefined ? G.H * 0.4 : y, t: 0 });
  }
  function drawPops(dt) {
    G.pops.forEach(function (p) {
      p.t += dt;
      ctx.globalAlpha = Math.max(0, 1 - p.t / 1.1);
      font(26);
      ctx.textAlign = 'center';
      ctx.lineWidth = 5;
      ctx.strokeStyle = '#fff';
      ctx.strokeText(p.text, p.x, p.y - p.t * 50);
      ctx.fillStyle = p.good ? '#22a86b' : '#e4483f';
      ctx.fillText(p.text, p.x, p.y - p.t * 50);
      ctx.globalAlpha = 1;
    });
    G.pops = G.pops.filter(function (p) { return p.t < 1.1; });
  }

  /* =====================================================================
     3. Flappy Uil
     ===================================================================== */
  const Flappy = {
    init: function () {
      const H = G.H;
      this.owl = { x: G.W * 0.22, y: H * 0.45, vy: 0, r: Math.max(14, H * 0.045) };
      this.cols = [];
      this.spawned = 0;
      this.inv = 0;
      this.ground = H - 24;
      /* bewust vergevingsgezind (dit is geen echte Flappy Bird): brede
         poortjes en een zachte fladder van ~9% van de hoogte, zodat een
         kind van 10 kan mikken en de aandacht bij het woord blijft */
      this.gapH = H * 0.3;
      this.topY = H * 0.26;
      this.botY = H * 0.66;
      this.gravity = H * 2.2;
      this.flapV = -H * 0.62;
      this.clouds = makeClouds(4);
    },
    spacing: function () { return Math.max(290, Math.min(420, G.W * 0.52)); },
    action: function () {
      if (G.state !== 'play') return;
      this.owl.vy = this.flapV;
      Sound.click();
    },
    bonk: function (col) {
      if (this.inv > 0) return;
      this.inv = 1.4;
      G.shake = 0.3;
      if (col) resolve(col.di, 'crash');
      else loseHeart();
    },
    update: function (dt) {
      const o = this.owl;
      if (G.state !== 'play') { o.y = G.H * 0.45 + Math.sin(G.t * 3) * 8; o.vy = 0; return; }
      o.vy = Math.min(o.vy + this.gravity * dt, G.H * 1.3);
      o.y += o.vy * dt;
      if (this.inv > 0) this.inv -= dt;
      if (o.y - o.r < 0) { o.y = o.r; o.vy = 0; }
      if (o.y + o.r > this.ground) { o.y = this.ground - o.r; o.vy = this.flapV * 0.9; this.bonk(null); }

      const speed = 118 + G.di * 3;
      this.cols.forEach(function (c) { c.x -= speed * dt; });
      const last = this.cols[this.cols.length - 1];
      if (this.spawned < G.duels.length && (!last || last.x < G.W - this.spacing())) {
        this.cols.push({ x: G.W + 20, w: 60, di: this.spawned, rightTop: Math.random() < 0.5, hit: false });
        this.spawned++;
      }
      const self = this;
      const gh = this.gapH / 2;
      this.cols.forEach(function (c) {
        const d = G.duels[c.di];
        if (d.done || c.hit) return;
        const hit = o.r * 0.7;   /* de uil is ronder dan zijn vierkantje */
        const inX = o.x + hit > c.x && o.x - hit < c.x + c.w;
        if (inX) {
          const inTop = o.y - hit > self.topY - gh && o.y + hit < self.topY + gh;
          const inBot = o.y - hit > self.botY - gh && o.y + hit < self.botY + gh;
          if (!inTop && !inBot && self.inv <= 0) { c.hit = true; self.bonk(c); return; }
        }
        if (o.x > c.x + c.w / 2) {
          const top = o.y < (self.topY + self.botY) / 2;
          resolve(c.di, top === c.rightTop ? 'ok' : 'wrong', o.x, o.y - 30);
        }
      });
      this.cols = this.cols.filter(function (c) { return c.x + c.w > -60; });
    },
    pipe: function (x, y, w, h) {
      if (h <= 0) return;
      ctx.fillStyle = '#4cc36a';
      ctx.fillRect(x, y, w, h);
      ctx.fillStyle = '#3aa556';
      ctx.fillRect(x + w - 12, y, 12, h);
      ctx.fillStyle = 'rgba(255,255,255,.28)';
      ctx.fillRect(x + 6, y, 7, h);
      ctx.strokeStyle = '#2b7d41';
      ctx.lineWidth = 3;
      ctx.strokeRect(x, y, w, h);
    },
    cap: function (x, y, w) {
      ctx.fillStyle = '#5fd67d';
      rr(x - 6, y - 9, w + 12, 18, 5);
      ctx.fill();
      ctx.strokeStyle = '#2b7d41';
      ctx.lineWidth = 3;
      ctx.stroke();
    },
    draw: function (dt) {
      sky('#7fd3ff', '#d9f5ff');
      clouds(this.clouds, G.state === 'play' ? 22 : 8, dt);
      const self = this;
      const gh = this.gapH / 2;
      this.cols.forEach(function (c) {
        const d = G.duels[c.di];
        self.pipe(c.x, 0, c.w, self.topY - gh);
        self.pipe(c.x, self.topY + gh, c.w, (self.botY - gh) - (self.topY + gh));
        self.pipe(c.x, self.botY + gh, c.w, self.ground - (self.botY + gh));
        self.cap(c.x, self.topY - gh, c.w);
        self.cap(c.x, self.topY + gh, c.w);
        self.cap(c.x, self.botY - gh, c.w);
        self.cap(c.x, self.botY + gh, c.w);
        const topWord = c.rightTop ? d.right : d.wrong;
        const botWord = c.rightTop ? d.wrong : d.right;
        const st = function (isRight) { return d.done ? (isRight ? 'ok' : 'no') : null; };
        wordTag(topWord, c.x + c.w / 2, self.topY, st(c.rightTop), 17);
        wordTag(botWord, c.x + c.w / 2, self.botY, st(!c.rightTop), 17);
      });
      /* grond */
      ctx.fillStyle = '#e9c46a';
      ctx.fillRect(0, this.ground, G.W, G.H - this.ground);
      ctx.fillStyle = '#8ac926';
      ctx.fillRect(0, this.ground, G.W, 7);
      const o = this.owl;
      if (this.inv > 0 && Math.floor(this.inv * 10) % 2) return;
      emoji('🦉', o.x, o.y, o.r * 2.3, Math.max(-0.5, Math.min(0.7, o.vy / 600)));
    }
  };

  /* =====================================================================
     4. Springheld (een renner zoals in de bekende platformspellen)
     ===================================================================== */
  const Runner = {
    init: function () {
      this.ground = G.H - 46;
      this.hero = { x: Math.max(70, G.W * 0.16), h: 0, vy: 0, w: 36, hh: 44 };
      this.items = [];
      this.spawned = 0;
      this.sinceSpawn = 9999;
      this.inv = 0;
      this.scroll = 0;
      this.gravity = 2100;
      this.jumpV = 770;
      this.clouds = makeClouds(3);
    },
    action: function () {
      if (G.state !== 'play') return;
      /* een beetje speling: net-niet-op-de-grond telt ook */
      if (this.hero.h <= 6) { this.hero.vy = this.jumpV; Sound.click(); }
    },
    gap: function () { return Math.max(480, Math.min(580, G.W * 0.72)); },
    heroBox: function () {
      const h = this.hero;
      return { l: h.x - h.w / 2, r: h.x + h.w / 2, t: this.ground - h.h - h.hh, b: this.ground - h.h };
    },
    lowBox: function (it) { return { l: it.x, r: it.x + it.w, t: this.ground - 54, b: this.ground - 6 }; },
    highBox: function (it) { return { l: it.x, r: it.x + it.w, t: this.ground - 198, b: this.ground - 142 }; },
    update: function (dt) {
      const hero = this.hero;
      if (G.state !== 'play') { hero.h = 0; return; }
      if (this.inv > 0) this.inv -= dt;
      hero.vy -= this.gravity * dt;
      hero.h += hero.vy * dt;
      if (hero.h <= 0) { hero.h = 0; hero.vy = 0; }

      const speed = 185 + G.di * 3;
      this.scroll += speed * dt;
      this.sinceSpawn += speed * dt;
      this.items.forEach(function (it) { it.x -= speed * dt; });

      if (this.spawned < G.duels.length && this.sinceSpawn > this.gap()) {
        const d = G.duels[this.spawned];
        font(18);
        const w = Math.max(96, Math.max(ctx.measureText(d.right).width, ctx.measureText(d.wrong).width) + 30);
        this.items.push({ kind: 'pair', di: this.spawned, x: G.W + 30, w: w, rightHigh: Math.random() < 0.5, took: null });
        /* soms een slak om overheen te springen, precies midden in de vrije
           ruimte tot het volgende woordpaar: dan land je nooit per ongeluk
           op het volgende blok */
        if (this.spawned >= 2 && Math.random() < 0.6) {
          this.items.push({ kind: 'snail', x: G.W + 30 + w + (this.gap() - w) / 2 - 17, w: 34, hit: false });
        }
        this.spawned++;
        this.sinceSpawn = 0;
      }

      const hb = this.heroBox();
      const over = function (a, b) { return a.l < b.r && a.r > b.l && a.t < b.b && a.b > b.t; };
      const self = this;
      this.items.forEach(function (it) {
        if (it.kind === 'snail') {
          if (!it.hit && self.inv <= 0 && over(hb, { l: it.x + 4, r: it.x + it.w - 4, t: self.ground - 26, b: self.ground })) {
            it.hit = true;
            self.inv = 1.2;
            G.shake = 0.3;
            loseHeart();
          }
          return;
        }
        const d = G.duels[it.di];
        if (d.done) return;
        const high = over(hb, self.highBox(it));
        const low = over(hb, self.lowBox(it));
        if (high || low) {
          it.took = high ? 'high' : 'low';
          const ok = high === it.rightHigh;
          resolve(it.di, ok ? 'ok' : 'wrong', it.x + it.w / 2, high ? self.ground - 215 : self.ground - 70);
        } else if (it.x + it.w < hb.l) {
          resolve(it.di, 'miss');
        }
      });
      this.items = this.items.filter(function (it) { return it.x + it.w > -80; });
    },
    block: function (text, box, state, taken) {
      const w = box.r - box.l, h = box.b - box.t;
      ctx.save();
      if (taken) ctx.globalAlpha = 0.55;
      ctx.fillStyle = state === 'ok' ? '#9be7b8' : state === 'no' ? '#ffb4ab' : '#ffc93c';
      rr(box.l, box.t, w, h, 9);
      ctx.fill();
      ctx.lineWidth = 3;
      ctx.strokeStyle = state === 'ok' ? '#22a86b' : state === 'no' ? '#e4483f' : '#c98a00';
      ctx.stroke();
      ctx.fillStyle = 'rgba(255,255,255,.35)';
      ctx.fillRect(box.l + 6, box.t + 5, w - 12, 5);
      font(18);
      ctx.fillStyle = '#3a2600';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(text, box.l + w / 2, box.t + h / 2 + 2);
      ctx.restore();
    },
    draw: function (dt) {
      sky('#8fd8ff', '#e8f8ff');
      clouds(this.clouds, G.state === 'play' ? 30 : 6, dt);
      /* heuvels op de achtergrond, die langzamer bewegen */
      ctx.fillStyle = '#9fe3a5';
      for (let i = -1; i < 5; i++) {
        const x = i * 260 - (this.scroll * 0.25) % 260;
        ctx.beginPath();
        ctx.ellipse(x + 130, this.ground + 10, 150, 90, 0, Math.PI, 0);
        ctx.fill();
      }
      /* grond met stenen */
      ctx.fillStyle = '#c96f2d';
      ctx.fillRect(0, this.ground, G.W, G.H - this.ground);
      ctx.fillStyle = '#6ccf4c';
      ctx.fillRect(0, this.ground, G.W, 8);
      ctx.strokeStyle = 'rgba(0,0,0,.18)';
      ctx.lineWidth = 2;
      const off = this.scroll % 40;
      for (let x = -off; x < G.W; x += 40) {
        ctx.strokeRect(x, this.ground + 8, 40, 19);
        ctx.strokeRect(x + 20, this.ground + 27, 40, 19);
      }
      const self = this;
      this.items.forEach(function (it) {
        if (it.kind === 'snail') { emoji('🐌', it.x + it.w / 2, self.ground - 14, 30); return; }
        const d = G.duels[it.di];
        const hi = it.rightHigh ? d.right : d.wrong;
        const lo = it.rightHigh ? d.wrong : d.right;
        const st = function (isRight) { return d.done ? (isRight ? 'ok' : 'no') : null; };
        self.block(hi, self.highBox(it), st(it.rightHigh), it.took === 'high');
        self.block(lo, self.lowBox(it), st(!it.rightHigh), it.took === 'low');
      });
      const hero = this.hero;
      if (this.inv > 0 && Math.floor(this.inv * 10) % 2) return;
      const bob = hero.h > 0 ? 0 : Math.abs(Math.sin(G.t * 12)) * 3;
      emoji(Store.player.avatar || '🦸', hero.x, this.ground - hero.h - hero.hh / 2 - bob, 40);
    }
  };

  /* =====================================================================
     5. Woordregen
     ===================================================================== */
  const Rain = {
    init: function () {
      this.floor = G.H - 34;
      this.bucket = { x: G.W / 2, tx: G.W / 2, w: Math.max(96, Math.min(140, G.W * 0.26)) };
      this.drops = [];
      this.spawned = 0;
      this.lanes = [0.2, 0.5, 0.8];
      this.stars = [];
      for (let i = 0; i < 30; i++) this.stars.push({ x: Math.random() * G.W, y: Math.random() * G.H * 0.7, s: Math.random() * 1.6 + 0.4 });
    },
    action: function () {},
    pointer: function (x) { this.bucket.tx = x; },
    update: function (dt) {
      const b = this.bucket;
      if (keys.left) b.tx -= 460 * dt;
      if (keys.right) b.tx += 460 * dt;
      b.tx = Math.max(b.w / 2, Math.min(G.W - b.w / 2, b.tx));
      b.x += (b.tx - b.x) * Math.min(1, dt * 14);
      if (G.state !== 'play') return;

      if (!this.drops.length && this.spawned < G.duels.length) {
        const di = this.spawned++;
        const lanes = shuffle([0, 1, 2]).slice(0, 2);
        const rightFirst = Math.random() < 0.5;
        for (let k = 0; k < 2; k++) {
          this.drops.push({ di: di, right: (k === 0) === rightFirst, x: G.W * this.lanes[lanes[k]], y: -26, vy: 64 + di * 4.5, fade: 0, caught: false });
        }
      }
      const self = this;
      this.drops.forEach(function (d) {
        const duel = G.duels[d.di];
        if (duel.done && !d.caught) { d.fade += dt * 3; return; }
        if (d.caught) { d.fade += dt * 2.5; return; }
        d.y += d.vy * dt;
        if (d.y > self.floor - 30 && d.y < self.floor + 6 && Math.abs(d.x - b.x) < b.w / 2 + 16) {
          d.caught = true;
          resolve(d.di, d.right ? 'ok' : 'wrong', d.x, d.y - 30);
        } else if (d.y > self.floor + 14) {
          d.fade = 1;
          if (d.right) resolve(d.di, 'miss');
        }
      });
      this.drops = this.drops.filter(function (d) { return d.fade < 1; });
    },
    draw: function () {
      sky('#3b2a7a', '#8e6fe0');
      ctx.fillStyle = 'rgba(255,255,255,.75)';
      this.stars.forEach(function (s) {
        ctx.globalAlpha = 0.4 + 0.4 * Math.sin(G.t * 2 + s.x);
        ctx.fillRect(s.x, s.y, s.s, s.s);
      });
      ctx.globalAlpha = 1;
      ctx.fillStyle = '#2d1f5e';
      ctx.fillRect(0, this.floor + 8, G.W, G.H - this.floor);
      const self = this;
      this.drops.forEach(function (d) {
        const duel = G.duels[d.di];
        ctx.globalAlpha = Math.max(0, 1 - d.fade);
        emoji('💧', d.x, d.y - 26, 20);
        /* op een smal scherm staan de banen dicht op elkaar: kleinere letters */
        wordTag(d.right ? duel.right : duel.wrong, d.x, d.y, duel.done ? (d.right ? 'ok' : 'no') : null, G.W < 520 ? 14 : 18, '#eef6ff');
        ctx.globalAlpha = 1;
      });
      /* de emmer */
      const b = this.bucket;
      const top = self.floor - 18;
      ctx.fillStyle = '#ffb703';
      ctx.beginPath();
      ctx.moveTo(b.x - b.w / 2, top);
      ctx.lineTo(b.x + b.w / 2, top);
      ctx.lineTo(b.x + b.w / 2 - 12, self.floor + 16);
      ctx.lineTo(b.x - b.w / 2 + 12, self.floor + 16);
      ctx.closePath();
      ctx.fill();
      ctx.lineWidth = 3;
      ctx.strokeStyle = '#b36b00';
      ctx.stroke();
      ctx.fillStyle = 'rgba(255,255,255,.35)';
      ctx.fillRect(b.x - b.w / 2 + 10, top + 5, b.w - 20, 4);
      emoji(Store.player.avatar || '🦸', b.x, top - 16, 28);
    }
  };

  const MODULES = { flappy: Flappy, runner: Runner, rain: Rain };

  /* =====================================================================
     6. Punten, hartjes en het einde van een ronde
     ===================================================================== */
  function resolve(i, how, x, y) {
    const d = G.duels[i];
    if (!d || d.done || G.state !== 'play') return;
    d.done = true;
    d.how = how;
    G.di = G.duels.filter(function (q) { return q.done; }).length;
    if (how === 'ok') {
      G.correct++;
      G.combo++;
      const pts = 10 + Math.min(G.combo - 1, 5) * 2;
      G.score += pts;
      Sound.correct();
      pop('+' + pts, true, x, y);
      if ([3, 5, 10, 15].indexOf(G.combo) !== -1) FX.combo(G.combo);
      feedback('✅ ' + tRandom('praise'), 'good');
    } else {
      G.combo = 0;
      G.mistakes.push(d);
      pop('✗', false, x, y);
      feedback((how === 'miss' ? '👀 ' + t('arcadeMissed') : '❌ ' + t('arcadeRightWas')) + ' ' + d.right, 'bad');
      if (how === 'miss') Sound.wrong();
      else loseHeart();
    }
    hud();
    if (G.state === 'play' && G.di >= G.duels.length) endSoon();
  }

  function loseHeart() {
    if (G.state !== 'play') return;
    G.hearts = Math.max(0, G.hearts - 1);
    G.shake = 0.35;
    Sound.wrong();
    hud();
    if (G.hearts <= 0) endSoon();
  }

  let endTimer = null;
  function endSoon() {
    if (G.state !== 'play') return;
    G.state = 'over';
    clearTimeout(endTimer);
    const run = G.run;
    /* wie intussen via 🏠 is weggegaan, krijgt geen resultaatscherm meer
       over zich heen (de ronde telt dan gewoon niet) */
    endTimer = setTimeout(function () { if (G.run === run && S.screen === 'arcade') finish(); }, 750);
  }

  let fbTimer = null;
  function feedback(text, kind) {
    const el = $('arc-feedback');
    if (!el) return;
    el.textContent = text;
    el.className = 'arc-feedback show ' + (kind || '');
    clearTimeout(fbTimer);
    fbTimer = setTimeout(function () { el.className = 'arc-feedback'; }, kind === 'bad' ? 2400 : 1200);
  }

  function promptText(d) {
    if (!d) return '';
    if (d.vocab) return t('arcadeMeans') + ' “' + L(d.prompt) + '”';
    if (d.prompt) return plain(L(d.prompt));
    return t('arcadeWhich');
  }

  function hud() {
    const g = gameById(G.id);
    if (!g) return;
    $('arc-title').textContent = g.emoji + ' ' + L(g);
    $('arc-hearts').textContent = '❤️'.repeat(G.hearts) + '🤍'.repeat(Math.max(0, HEARTS - G.hearts));
    $('arc-score').textContent = G.score;
    $('arc-count').textContent = Math.min(G.di + 1, G.duels.length) + '/' + G.duels.length;
    $('arc-prompt').textContent = promptText(current());
    $('arc-goal').textContent = G.id === 'flappy' ? t('arcadeGoalFlappy') : G.id === 'runner' ? t('arcadeGoalRunner') : t('arcadeGoalRain');
    $('arc-start-title').textContent = g.emoji + ' ' + L(g);
    $('arc-start-how').textContent = window.LANG === 'nl' ? g.howNl : g.howEn;
    $('arc-start-go').textContent = t('arcadeTapStart');
  }

  /* =====================================================================
     7. De lus
     ===================================================================== */
  function frame(now) {
    if (S.screen !== 'arcade' || !G.game) { G.raf = 0; return; }
    const dt = Math.min(0.033, Math.max(0, (now - G.last) / 1000));
    G.last = now;
    if (!document.hidden) {
      G.t += dt;
      G.frames++;
      G.game.update(dt);
      ctx.save();
      if (G.shake > 0) {
        G.shake -= dt;
        ctx.translate((Math.random() - 0.5) * 8, (Math.random() - 0.5) * 6);
      }
      G.game.draw(dt);
      drawPops(dt);
      ctx.restore();
    }
    G.raf = requestAnimationFrame(frame);
  }
  function startLoop() {
    if (G.raf) return;
    G.last = performance.now();
    G.raf = requestAnimationFrame(frame);
  }
  function stopLoop() {
    if (G.raf) cancelAnimationFrame(G.raf);
    G.raf = 0;
  }

  /* =====================================================================
     8. Starten, stoppen en het resultaat
     ===================================================================== */
  function start(id) {
    const g = gameById(id);
    if (!g) return;
    if (!Rewards.spendTicket()) {
      FX.toast(t('arcadeNoTickets'), 3600);
      Sound.wrong();
      return;
    }
    const p = Store.player;
    G.id = id;
    G.deck = p.arcadeDeck === 'words' ? 'words' : 'spell';
    G.duels = buildRound(G.deck);
    G.di = 0; G.score = 0; G.correct = 0; G.hearts = HEARTS; G.combo = 0;
    G.mistakes = []; G.pops = []; G.shake = 0; G.t = 0; G.frames = 0;
    G.state = 'ready';
    G.run = (G.run || 0) + 1;
    G.game = MODULES[id];

    setHue(g.hue, 'default');
    show('arcade');
    resize();
    G.game.init();
    $('arc-start').classList.remove('hidden');
    $('arc-feedback').className = 'arc-feedback';
    hud();
    updateHUD();
    Store.log('arcade_start', { session: S.sessionId, game: id, deck: G.deck, lang: window.LANG });
    startLoop();
  }

  function begin() {
    if (G.state !== 'ready') return;
    G.state = 'play';
    $('arc-start').classList.add('hidden');
    Sound.click();
    if (G.id === 'flappy') G.game.action();
  }

  function action() {
    if (G.state === 'ready') { begin(); return; }
    if (G.game) G.game.action();
  }

  function finish() {
    stopLoop();
    G.state = 'done';
    const p = Store.player;
    const xp = G.correct * 3;
    const coinsBefore = p.coins || 0;
    if (xp) addXP(xp);
    addCoins(Math.floor(G.correct / 5), 'arcade:' + G.id);
    const coins = (p.coins || 0) - coinsBefore;
    if (!p.arcadeBest || typeof p.arcadeBest !== 'object') p.arcadeBest = {};
    const record = G.score > 0 && G.score > (p.arcadeBest[G.id] || 0);
    if (record) p.arcadeBest[G.id] = G.score;
    p.arcadeTop = Math.max(p.arcadeTop || 0, G.correct);
    p.arcadePlays = (p.arcadePlays || 0) + 1;
    Store.save();
    Store.log('arcade_done', {
      session: S.sessionId, game: G.id, deck: G.deck, score: G.score, correct: G.correct,
      total: G.di, hearts: G.hearts,
      missed: G.mistakes.map(function (d) { return d.right; }).join(', '), lang: window.LANG
    });
    if (G.di >= 3) { Rewards.track('arcade'); Rewards.earn('arcade'); }
    const badges = checkBadges({});
    G.last_result = {
      id: G.id, score: G.score, correct: G.correct, total: G.di, hearts: G.hearts,
      xp: xp, coins: coins, record: record, best: p.arcadeBest[G.id] || 0,
      mistakes: G.mistakes.slice(), badges: badges, win: G.hearts > 0 && G.di >= G.duels.length
    };
    renderResult();
    setHue(defaultHue(), 'default');
    show('arcade-result');
    if (G.last_result.win) { FX.burst(160); Sound.finish(); }
    else if (G.correct) { FX.burst(60); Sound.star(); }
  }

  function quit() {
    Sound.click();
    if (G.state === 'ready' && G.di === 0) {
      /* nog niet begonnen: kaartje terug */
      stopLoop();
      Rewards.addTickets(1, 'refund', true);
      G.state = 'idle';
      G.game = null;
      backToMenu();
      return;
    }
    if (G.state === 'play') G.state = 'over';
    clearTimeout(endTimer);
    finish();
  }

  function renderResult() {
    const r = G.last_result;
    if (!r) return;
    const g = gameById(r.id);
    $('arr-emoji').textContent = r.win ? '🏆' : (r.correct >= 8 ? '🌟' : g.emoji);
    $('arr-title').textContent = r.win ? t('arcadeWin') : t('arcadeOver');
    $('arr-sub').textContent = r.record ? t('arcadeRecord') : (r.win ? t('arcadeWinSub') : t('arcadeOverSub'));
    $('arr-score').textContent = r.score;
    $('arr-correct').textContent = r.correct + '/' + r.total;
    FX.countUp($('arr-xp'), r.xp, '+');
    FX.countUp($('arr-coins'), r.coins, '+');
    $('arr-best').textContent = r.best;

    const list = $('arr-missed');
    list.innerHTML = '';
    if (r.mistakes.length) {
      const h = document.createElement('h3');
      h.textContent = '📌 ' + t('arcadeRemember');
      list.appendChild(h);
      r.mistakes.forEach(function (d) {
        const row = document.createElement('div');
        row.className = 'sp-missed';
        row.innerHTML = '<b>' + escHtml(d.right) + '</b> <s class="arr-wrong">' + escHtml(d.wrong) + '</s>' +
          (d.vocab ? '<small>' + escHtml(L(d.prompt)) + '</small>' : (d.why ? '<small>' + L(d.why) + '</small>' : ''));
        list.appendChild(row);
      });
    }
    const nb = $('arr-badges');
    nb.innerHTML = '';
    (r.badges || []).forEach(function (b) {
      const d = document.createElement('div');
      d.className = 'new-badge';
      d.textContent = b.emoji + ' ' + (window.LANG === 'nl' ? b.nl : b.en);
      nb.appendChild(d);
    });
    $('btn-arc-again').textContent = t('arcadeAgain') + ' (🎟️ 1)';
    $('btn-arc-menu').textContent = t('arcadeMenu');
    Rewards.renderQuestStrip($('arr-quests'));
  }

  function backToMenu() {
    setHue(defaultHue(), 'default');
    S.mode = 'play';
    renderWorlds();
    show('worlds');
  }

  /* =====================================================================
     9. Het menu in het tabblad "Spellen"
     ===================================================================== */
  function renderMenu() {
    const box = $('play-grid');
    if (!box) return;
    box.innerHTML = '';
    const p = Store.player;
    const tk = Rewards.tickets();

    const top = document.createElement('div');
    top.className = 'card ticket-card';
    top.innerHTML =
      '<div class="ticket-big"><span class="ticket-emoji">🎟️</span><b id="play-tickets">' + tk + '</b></div>' +
      '<div class="ticket-text"><b>' + t('ticketsTitle') + '</b><p>' + t('ticketsHow') + '</p></div>';
    box.appendChild(top);

    const deckRow = document.createElement('div');
    deckRow.className = 'deck-row';
    deckRow.innerHTML = '<span class="deck-label">' + t('arcadeDeck') + '</span>';
    const deck = p.arcadeDeck === 'words' ? 'words' : 'spell';
    DECKS.forEach(function (d) {
      const b = document.createElement('button');
      b.className = 'deck-btn' + (d.id === deck ? ' on' : '');
      b.dataset.deck = d.id;
      b.textContent = d.emoji + ' ' + L(d);
      b.addEventListener('click', function () {
        Sound.click();
        Store.player.arcadeDeck = d.id;
        Store.save();
        renderMenu();
      });
      deckRow.appendChild(b);
    });
    box.appendChild(deckRow);

    const grid = document.createElement('div');
    grid.className = 'world-grid';
    box.appendChild(grid);

    GAMES.forEach(function (g) {
      const best = (p.arcadeBest || {})[g.id] || 0;
      const card = document.createElement('button');
      card.className = 'world-card game-card' + (tk < 1 ? ' no-ticket' : '');
      card.dataset.game = g.id;
      card.style.setProperty('--wh', g.hue);
      card.innerHTML =
        '<span class="game-cost">🎟️ 1</span>' +
        '<span class="wc-emoji">' + g.emoji + '</span>' +
        '<h3 class="wc-title">' + L(g) + '</h3>' +
        '<p class="wc-sub">' + (window.LANG === 'nl' ? g.descNl : g.descEn) + '</p>' +
        '<span class="wc-count"><span>🏆 ' + t('arcadeBest') + ': ' + best + '</span><span>' + ROUND + ' ' + t('arcadeDuels') + '</span></span>';
      card.addEventListener('click', function () { Sound.click(); start(g.id); });
      grid.appendChild(card);
    });

    /* de Woordkist: gratis, want dat is gewoon leren */
    const kist = Woordkist.summary();
    const kc = document.createElement('button');
    kc.className = 'world-card game-card kist-card-btn';
    kc.style.setProperty('--wh', 35);
    kc.innerHTML =
      '<span class="game-cost free">' + t('kistFree') + '</span>' +
      '<span class="wc-emoji">🗃️</span>' +
      '<h3 class="wc-title">' + t('kistTitle') + '</h3>' +
      '<p class="wc-sub">' + t('kistDesc') + '</p>' +
      '<span class="wc-count"><span>' + (kist.due ? '🔁 ' + t('kistDue').replace('{n}', kist.due) : '✨ ' + t('kistNewCards')) + '</span><span>🧠 ' +
        t('kistKnown').replace('{n}', kist.known) + '</span></span>';
    kc.addEventListener('click', function () { Sound.click(); Woordkist.open(); });
    grid.appendChild(kc);
  }

  /* =====================================================================
     10. Knoppen en toetsen
     ===================================================================== */
  function bind() {
    canvas = $('arc-canvas');
    if (!canvas) return;
    ctx = canvas.getContext('2d');

    canvas.addEventListener('pointerdown', function (e) {
      e.preventDefault();
      const r = canvas.getBoundingClientRect();
      if (G.id === 'rain' && G.game) G.game.pointer(e.clientX - r.left);
      action();
    });
    canvas.addEventListener('pointermove', function (e) {
      if (G.id !== 'rain' || !G.game) return;
      const r = canvas.getBoundingClientRect();
      G.game.pointer(e.clientX - r.left);
    });
    $('arc-start').addEventListener('click', function () { begin(); });
    $('btn-arc-quit').addEventListener('click', quit);
    $('btn-arc-again').addEventListener('click', function () { Sound.click(); start(G.last_result ? G.last_result.id : 'flappy'); });
    $('btn-arc-menu').addEventListener('click', function () { Sound.click(); backToMenu(); });

    document.addEventListener('keydown', function (e) {
      if (S.screen !== 'arcade' || e.ctrlKey || e.metaKey || e.altKey) return;
      if (e.key === ' ' || e.key === 'ArrowUp' || e.key === 'w' || e.key === 'Enter') {
        e.preventDefault();
        if (!e.repeat) action();
      } else if (e.key === 'ArrowLeft') { e.preventDefault(); keys.left = true; }
      else if (e.key === 'ArrowRight') { e.preventDefault(); keys.right = true; }
      else if (e.key === 'Escape') quit();
    });
    document.addEventListener('keyup', function (e) {
      if (e.key === 'ArrowLeft') keys.left = false;
      if (e.key === 'ArrowRight') keys.right = false;
    });
    window.addEventListener('resize', function () {
      if (S.screen !== 'arcade' || !G.game) return;
      /* opnieuw beginnen met de maten is het veiligst; de stand blijft */
      if (resize() && G.state === 'ready') G.game.init();
    });
  }
  document.addEventListener('DOMContentLoaded', bind);

  return {
    games: GAMES,
    renderMenu: renderMenu,
    renderHud: hud,
    renderResult: renderResult,
    start: start,
    quit: quit,
    /* voor de browsertest: de stand bekijken en een duel beslissen zonder
       dat een test pixelprecies hoeft te springen */
    state: function () { return G; },
    debugResolve: function (ok) {
      if (G.state === 'ready') begin();
      const d = current();
      if (d) resolve(G.duels.indexOf(d), ok ? 'ok' : 'wrong');
    },
    pools: function () { return { spell: spellPool().length, words: wordPool().length }; }
  };
})();
