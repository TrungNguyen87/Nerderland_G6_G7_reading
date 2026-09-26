/* =====================================================================
   🏰 Kasteelverdediging: een torenverdedigingsspel (strategie).

   Spelfoutjes (kleine monstertjes) lopen over het pad naar jouw kasteel.
   Bouw torens langs het pad om ze tegen te houden: 🏹 een boogschutter
   (snel, één monstertje tegelijk) of 🔮 een tovenaar (langzamer, raakt een
   groepje en maakt ze trager). Tik op een toren om hem sterker te maken.

   Goud verdien je met woorden: onder het speelveld staat steeds een vraag
   (welk woord is goed?). Goed = +15 goud. Voor elke golf mag je 5 vragen
   beantwoorden; tijdens de golf mag je doorgaan (+10 goud per goed
   antwoord). Zo telt elk goed antwoord echt mee voor je verdediging, en
   bepaal jij waar je je goud aan uitgeeft: dat is de strategie.

   Er is geen haast bij het bouwen: een golf start pas als jij op ▶ tikt.
   Level 1: 4 golven, level 2: 5, level 3: 6 (en taaiere monstertjes).
   ===================================================================== */
'use strict';

(function () {
  const K = Arcade.kit;
  const G = K.G;

  /* het pad en de bouwplekken, als deel van de breedte en hoogte */
  const PATH = [[-0.04, 0.3], [0.3, 0.3], [0.3, 0.74], [0.64, 0.74], [0.64, 0.3], [0.87, 0.3]];
  const SPOTS = [[0.15, 0.13], [0.15, 0.49], [0.47, 0.5], [0.47, 0.18], [0.47, 0.92], [0.8, 0.53], [0.79, 0.1]];
  const ENEMY = {
    f: { hp: 3, secs: 18, gold: 1, color: '#34d399', r: 11 },
    s: { hp: 2, secs: 12, gold: 1, color: '#fbbf24', r: 9 },
    g: { hp: 9, secs: 26, gold: 4, color: '#a78bfa', r: 15 }
  };
  const TOWER = {
    archer: { cost: 30, range: 82, rate: 1.2, dmg: 1, emoji: '🏹' },
    wizard: { cost: 50, range: 72, rate: 0.75, dmg: 1, splash: 34, slow: 1.2, emoji: '🔮' }
  };
  const UPGRADE = 40;
  const QPER = 5;
  /* goud per goed antwoord: voor de golf, en tijdens de golf */
  const BUILD_GOLD = 15, WAVE_GOLD = 6;
  /* golven per level: de eerste golf is altijd klein (dan heb je nog maar
     een paar vragen beantwoord), daarna meer en snellere monstertjes */
  const WAVES = [null,
    [{ f: 5 }, { f: 7, s: 2 }, { f: 8, s: 4, g: 1 }, { f: 10, s: 5, g: 2 }],
    [{ f: 6 }, { f: 8, s: 3 }, { f: 9, s: 4, g: 1 }, { f: 10, s: 6, g: 2 }, { f: 12, s: 6, g: 3 }],
    [{ f: 6 }, { f: 9, s: 3 }, { f: 10, s: 5, g: 1 }, { f: 11, s: 6, g: 2 }, { f: 12, s: 7, g: 3 }, { f: 14, s: 8, g: 4 }]];

  const Castle = {
    makeDuels: function (deck, lv) { return K.duels(deck, lv, 60); },
    init: function (dom, panel) {
      this.panel = panel;
      this.gold = 40;
      this.wave = 0;
      this.total = WAVES[G.lv].length;
      this.phase = 'build';
      this.left = QPER;
      this.queue = [];
      this.spawnT = 0;
      this.enemies = [];
      this.towers = [];
      this.shots = [];
      this.banner = null;
      this.won = false;
      this.pick = 'archer';
      this.qi = 0;
      this.qWait = 0;
      this.opts = null;
      this.layout();
      this.renderPanel();
    },
    layout: function () {
      const W = G.W, H = G.H;
      this.U = Math.min(W, H) / 300;
      this.pts = PATH.map(function (p) { return [p[0] * W, p[1] * H]; });
      this.lens = [];
      this.len = 0;
      for (let i = 1; i < this.pts.length; i++) {
        const l = Math.hypot(this.pts[i][0] - this.pts[i - 1][0], this.pts[i][1] - this.pts[i - 1][1]);
        this.lens.push(l);
        this.len += l;
      }
      this.spots = SPOTS.map(function (s) { return [s[0] * W, s[1] * H]; });
    },
    resized: function () { this.layout(); this.shots = []; },
    posAt: function (f) {
      let d = Math.max(0, f) * this.len;
      for (let i = 0; i < this.lens.length; i++) {
        if (d <= this.lens[i] || i === this.lens.length - 1) {
          const k = Math.min(1, d / this.lens[i]);
          const a = this.pts[i], b = this.pts[i + 1];
          return [a[0] + (b[0] - a[0]) * k, a[1] + (b[1] - a[1]) * k];
        }
        d -= this.lens[i];
      }
      return this.pts[this.pts.length - 1];
    },

    /* ---- het paneel onder het speelveld ---- */
    renderPanel: function () {
      const self = this;
      this.panel.innerHTML =
        '<div class="td-bar">' +
          '<span class="td-gold">🪙 <b class="td-gold-n"></b></span>' +
          '<button class="td-tower" data-t="archer">🏹 <small>' + TOWER.archer.cost + '</small></button>' +
          '<button class="td-tower" data-t="wizard">🔮 <small>' + TOWER.wizard.cost + '</small></button>' +
          '<button class="big-btn td-wave"></button>' +
        '</div>' +
        '<div class="td-q"><p class="td-qtext"></p><div class="td-opts"></div><small class="td-qnote"></small></div>' +
        '<p class="mini-note td-help"></p>';
      Array.prototype.forEach.call(this.panel.querySelectorAll('.td-tower'), function (b) {
        b.addEventListener('click', function () { Sound.click(); self.pick = b.dataset.t; self.drawPanel(); });
      });
      this.panel.querySelector('.td-wave').addEventListener('click', function () { self.startWave(); });
      this.nextQuestion();
      this.drawPanel();
    },
    drawPanel: function () {
      if (!this.panel.querySelector('.td-bar')) return;
      const self = this;
      this.panel.querySelector('.td-gold-n').textContent = this.gold;
      Array.prototype.forEach.call(this.panel.querySelectorAll('.td-tower'), function (b) {
        b.classList.toggle('on', b.dataset.t === self.pick);
        b.classList.toggle('poor', self.gold < TOWER[b.dataset.t].cost);
      });
      const wb = this.panel.querySelector('.td-wave');
      wb.textContent = this.phase === 'wave' ? '⚔️ ' + t('tdWave') + ' ' + this.wave : '▶ ' + t('tdWave') + ' ' + (this.wave + 1);
      wb.disabled = this.phase !== 'build' || G.state !== 'play';
      this.panel.querySelector('.td-help').textContent = t('tdHelp').replace('{n}', UPGRADE);
      const note = this.panel.querySelector('.td-qnote');
      note.textContent = this.phase === 'build'
        ? t('tdQLeft').replace('{n}', this.left).replace('{g}', BUILD_GOLD)
        : t('tdQWave').replace('{g}', WAVE_GOLD);
    },
    canAsk: function () { return G.state === 'play' && (this.phase === 'wave' || this.left > 0); },
    nextQuestion: function () {
      if (this.qi >= G.duels.length) G.duels = G.duels.concat(K.duels(G.deck, G.lv, 30));
      const d = G.duels[this.qi];
      this.opts = shuffle([d.right, d.wrong]);
      this.drawQuestion();
    },
    drawQuestion: function () {
      const self = this;
      const qt = this.panel.querySelector('.td-qtext');
      const box = this.panel.querySelector('.td-opts');
      if (!qt) return;
      box.innerHTML = '';
      if (!this.canAsk()) {
        qt.textContent = G.state === 'play' ? '✅ ' + t('tdQDone') : t('tdQStart');
        return;
      }
      const d = G.duels[this.qi];
      qt.textContent = K.promptText(d);
      this.opts.forEach(function (w, n) {
        const b = document.createElement('button');
        b.className = 'opt td-opt';
        b.innerHTML = '<span class="key">' + (n + 1) + '</span><span></span>';
        b.lastChild.textContent = w;
        if (d.done) {
          if (w === d.right) b.classList.add('ok');
          else if (d.how === 'wrong') b.classList.add('no');
          b.disabled = true;
        }
        b.addEventListener('click', function () { self.choose(w); });
        box.appendChild(b);
      });
    },
    choose: function (w) {
      const d = G.duels[this.qi];
      if (!d || d.done || !this.canAsk() || this.qWait > 0) return;
      const ok = w === d.right;
      K.answer(d, ok);
      if (ok) {
        const g = this.phase === 'wave' ? WAVE_GOLD : BUILD_GOLD;
        this.gold += g;
        K.pop('+' + g + ' 🪙', true, G.W * 0.5, G.H * 0.2);
      }
      if (this.phase === 'build') this.left--;
      this.qWait = ok ? 0.7 : 1.6;
      this.drawQuestion();
      this.drawPanel();
    },

    /* ---- bouwen ---- */
    tap: function (x, y) {
      if (G.state !== 'play') return;
      const self = this;
      let best = -1, bd = 1e9;
      this.spots.forEach(function (s, i) {
        const d = Math.hypot(s[0] - x, s[1] - y);
        if (d < bd) { bd = d; best = i; }
      });
      if (best === -1 || bd > 30 * this.U) return;
      const tw = this.towers.filter(function (tt) { return tt.spot === best; })[0];
      if (tw) this.upgrade(tw); else this.build(best, self.pick);
    },
    build: function (spot, type) {
      const def = TOWER[type];
      if (this.towers.some(function (tt) { return tt.spot === spot; })) return false;
      if (this.gold < def.cost) { K.feedback('🪙 ' + t('tdNoGold'), 'bad'); Sound.wrong(); return false; }
      this.gold -= def.cost;
      this.towers.push({ spot: spot, type: type, lvl: 1, cd: 0 });
      Sound.coin();
      this.drawPanel();
      return true;
    },
    upgrade: function (tw) {
      if (tw.lvl >= 2) { K.feedback('⭐ ' + t('tdMaxed'), 'good'); return false; }
      if (this.gold < UPGRADE) { K.feedback('🪙 ' + t('tdNoGold'), 'bad'); Sound.wrong(); return false; }
      this.gold -= UPGRADE;
      tw.lvl = 2;
      Sound.star();
      K.pop('⭐', true, this.spots[tw.spot][0], this.spots[tw.spot][1] - 20);
      this.drawPanel();
      return true;
    },

    /* ---- golven ---- */
    startWave: function () {
      if (this.phase !== 'build' || G.state !== 'play' || this.wave >= this.total) return;
      this.wave++;
      this.phase = 'wave';
      const spec = WAVES[G.lv][this.wave - 1];
      const list = [];
      for (let i = 0; i < (spec.f || 0); i++) list.push('f');
      for (let i = 0; i < (spec.s || 0); i++) list.push('s');
      const mixed = shuffle(list);
      for (let i = 0; i < (spec.g || 0); i++) mixed.push('g');
      this.queue = mixed;
      this.spawnT = 0.6;
      this.banner = { text: '⚔️ ' + t('tdWave') + ' ' + this.wave + '!', t: 0 };
      Sound.flash();
      this.drawQuestion();
      this.drawPanel();
      K.hud();
    },
    waveDone: function () {
      this.phase = 'build';
      this.left = QPER;
      this.gold += 10;
      if (this.wave >= this.total) {
        this.won = true;
        this.banner = { text: '🏆 ' + t('tdWon'), t: 0 };
        K.bonus(30, '🏰');
        K.endSoon();
        return;
      }
      this.banner = { text: '✅ ' + t('tdWaveDone'), t: 0 };
      K.bonus(10, '');
      Sound.star();
      this.drawQuestion();
      this.drawPanel();
      K.hud();
    },

    begin: function () { this.drawQuestion(); this.drawPanel(); },
    action: function () { if (this.phase === 'build') this.startWave(); },
    key: function (e) {
      if (e.key === '1' || e.key === '2') {
        if (this.opts && this.opts[parseInt(e.key, 10) - 1]) this.choose(this.opts[parseInt(e.key, 10) - 1]);
        return true;
      }
      return false;
    },

    update: function (dt) {
      const self = this;
      if (this.banner) { this.banner.t += dt; if (this.banner.t > 1.6) this.banner = null; }
      if (G.state !== 'play') return;
      if (this.qWait > 0) {
        this.qWait -= dt;
        if (this.qWait <= 0) { this.qi++; this.nextQuestion(); }
      }
      if (this.phase !== 'wave') return;
      const lvSpeed = K.spd();
      /* nieuwe monstertjes */
      this.spawnT -= dt;
      if (this.queue.length && this.spawnT <= 0) {
        const type = this.queue.shift();
        const def = ENEMY[type];
        const hp = def.hp;
        this.enemies.push({ type: type, hp: hp, max: hp, f: 0, v: lvSpeed / def.secs, slow: 0, wob: Math.random() * 6 });
        this.spawnT = type === 's' ? 0.8 : 1.1;
      }
      /* lopen */
      this.enemies.forEach(function (en) {
        if (en.slow > 0) en.slow -= dt;
        en.f += en.v * (en.slow > 0 ? 0.55 : 1) * dt;
        if (en.f >= 1 && !en.gone) {
          en.gone = true;
          K.loseHeart();
          if (en.type === 'g') K.loseHeart();
        }
      });
      /* torens schieten op het monstertje dat het verst is */
      this.towers.forEach(function (tw) {
        tw.cd -= dt;
        if (tw.cd > 0) return;
        const def = TOWER[tw.type];
        const sp = self.spots[tw.spot];
        const range = def.range * self.U * (tw.lvl === 2 ? 1.15 : 1);
        let target = null;
        self.enemies.forEach(function (en) {
          if (en.gone || en.hp <= 0) return;
          const p = self.posAt(en.f);
          if (Math.hypot(p[0] - sp[0], p[1] - sp[1]) <= range && (!target || en.f > target.f)) target = en;
        });
        if (!target) return;
        tw.cd = 1 / def.rate;
        self.shots.push({ x: sp[0], y: sp[1] - 8, target: target, kind: tw.type, dmg: def.dmg * (tw.lvl === 2 ? 2 : 1) });
      });
      /* pijlen en toverballen */
      this.shots.forEach(function (s) {
        const p = s.target.gone || s.target.hp <= 0 ? [s.lx || s.x, s.ly || s.y] : self.posAt(s.target.f);
        s.lx = p[0]; s.ly = p[1];
        const dx = p[0] - s.x, dy = p[1] - s.y;
        const dist = Math.hypot(dx, dy);
        const step = 330 * self.U * dt;
        if (dist <= step + 2) {
          s.hit = true;
          if (s.target.gone || s.target.hp <= 0) return;
          if (s.kind === 'wizard') {
            self.enemies.forEach(function (en) {
              if (en.gone || en.hp <= 0) return;
              const q = self.posAt(en.f);
              if (Math.hypot(q[0] - p[0], q[1] - p[1]) <= TOWER.wizard.splash * self.U) {
                en.hp -= s.dmg;
                en.slow = TOWER.wizard.slow;
              }
            });
          } else s.target.hp -= s.dmg;
        } else {
          s.x += dx / dist * step;
          s.y += dy / dist * step;
        }
      });
      this.shots = this.shots.filter(function (s) { return !s.hit; });
      /* opgeruimd: goud voor elk verslagen monstertje */
      this.enemies.forEach(function (en) {
        if (en.hp <= 0 && !en.gone) {
          en.gone = true;
          self.gold += ENEMY[en.type].gold;
          const p = self.posAt(en.f);
          K.pop('+' + ENEMY[en.type].gold, true, p[0], p[1] - 10);
        }
      });
      this.enemies = this.enemies.filter(function (en) { return !en.gone; });
      if (G.state === 'play' && !this.queue.length && !this.enemies.length) this.waveDone();
      if (Math.random() < 0.1) this.drawPanel();
    },

    /* ---- tekenen ---- */
    draw: function () {
      const ctx = K.ctx;
      const W = G.W, H = G.H, U = this.U;
      const self = this;
      ctx.fillStyle = '#86cf6a';
      ctx.fillRect(0, 0, W, H);
      ctx.fillStyle = 'rgba(255,255,255,.07)';
      for (let x = 0; x < W; x += 28) for (let y = (x / 28 % 2) * 14; y < H; y += 28) ctx.fillRect(x, y, 3, 3);
      /* het pad */
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.strokeStyle = '#c99a4b';
      ctx.lineWidth = 30 * U;
      ctx.beginPath();
      this.pts.forEach(function (p, i) { if (i) ctx.lineTo(p[0], p[1]); else ctx.moveTo(p[0], p[1]); });
      ctx.stroke();
      ctx.strokeStyle = '#e9c46a';
      ctx.lineWidth = 24 * U;
      ctx.stroke();
      /* het kasteel */
      const end = this.pts[this.pts.length - 1];
      K.emoji('🏰', end[0] + 16 * U, end[1] - 6 * U, 46 * U);
      /* bouwplekken en torens */
      this.spots.forEach(function (s, i) {
        const tw = self.towers.filter(function (tt) { return tt.spot === i; })[0];
        if (!tw) {
          ctx.setLineDash([5, 4]);
          ctx.strokeStyle = 'rgba(255,255,255,.9)';
          ctx.lineWidth = 2.5;
          ctx.beginPath();
          ctx.arc(s[0], s[1], 15 * U, 0, 7);
          ctx.stroke();
          ctx.setLineDash([]);
          K.font(12 * U);
          ctx.fillStyle = 'rgba(255,255,255,.95)';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText('+', s[0], s[1] + 1);
          return;
        }
        ctx.fillStyle = tw.lvl === 2 ? '#fde68a' : '#d1d5db';
        ctx.beginPath();
        ctx.arc(s[0], s[1], 16 * U, 0, 7);
        ctx.fill();
        ctx.strokeStyle = '#6b7280';
        ctx.lineWidth = 2;
        ctx.stroke();
        K.emoji(TOWER[tw.type].emoji, s[0], s[1] - 2, 20 * U);
        if (tw.lvl === 2) K.emoji('⭐', s[0] + 12 * U, s[1] - 13 * U, 11 * U);
      });
      /* monstertjes: blobjes met oogjes */
      this.enemies.forEach(function (en) {
        const def = ENEMY[en.type];
        const p = self.posAt(en.f);
        const r = def.r * U;
        const bob = Math.sin(G.t * 8 + en.wob) * 1.5;
        ctx.fillStyle = en.slow > 0 ? '#93c5fd' : def.color;
        ctx.beginPath();
        ctx.ellipse(p[0], p[1] + bob, r, r * 0.85, 0, 0, 7);
        ctx.fill();
        ctx.fillStyle = '#fff';
        ctx.beginPath(); ctx.arc(p[0] - r * 0.35, p[1] - r * 0.2 + bob, r * 0.28, 0, 7); ctx.fill();
        ctx.beginPath(); ctx.arc(p[0] + r * 0.35, p[1] - r * 0.2 + bob, r * 0.28, 0, 7); ctx.fill();
        ctx.fillStyle = '#111827';
        ctx.beginPath(); ctx.arc(p[0] - r * 0.3, p[1] - r * 0.15 + bob, r * 0.12, 0, 7); ctx.fill();
        ctx.beginPath(); ctx.arc(p[0] + r * 0.4, p[1] - r * 0.15 + bob, r * 0.12, 0, 7); ctx.fill();
        /* levensbalkje */
        ctx.fillStyle = 'rgba(0,0,0,.35)';
        ctx.fillRect(p[0] - r, p[1] - r - 7, r * 2, 4);
        ctx.fillStyle = '#ef4444';
        ctx.fillRect(p[0] - r, p[1] - r - 7, r * 2 * Math.max(0, en.hp / en.max), 4);
      });
      this.shots.forEach(function (s) {
        ctx.fillStyle = s.kind === 'wizard' ? '#a855f7' : '#78350f';
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.kind === 'wizard' ? 4.5 : 2.5, 0, 7);
        ctx.fill();
      });
      if (this.banner) {
        ctx.globalAlpha = Math.max(0, 1 - this.banner.t / 1.6);
        K.font(24);
        ctx.textAlign = 'center';
        ctx.lineWidth = 5;
        ctx.strokeStyle = '#fff';
        ctx.strokeText(this.banner.text, W / 2, H * 0.5);
        ctx.fillStyle = '#7c2d12';
        ctx.fillText(this.banner.text, W / 2, H * 0.5);
        ctx.globalAlpha = 1;
      }
    },

    countText: function () { return '🏰 ' + t('tdWave') + ' ' + Math.max(1, this.wave) + '/' + this.total; },
    result: function () {
      const acc = G.asked ? G.correct / G.asked : 0;
      const cleared = this.won ? this.total : Math.max(0, this.wave - 1);
      const stars = this.won ? (G.hearts >= 4 && acc >= 0.8 ? 3 : acc >= 0.6 ? 2 : 1) : (cleared >= this.total / 2 ? 1 : 0);
      const total = this.total;
      const won = this.won;
      return {
        win: won, stars: stars, total: G.asked, of: G.asked,
        note: function () { return won ? '🏰 ' + t('tdWon') : t('tdLost').replace('{n}', cleared).replace('{total}', total); }
      };
    },
    /* voor de test: de huidige vraag meteen beantwoorden */
    debugResolve: function (ok) {
      if (this.qWait > 0) { this.qWait = 0; this.qi++; this.nextQuestion(); }
      const d = G.duels[this.qi];
      if (!this.canAsk()) return;
      this.choose(ok ? d.right : d.wrong);
      this.qWait = 0;
      this.qi++;
      this.nextQuestion();
    }
  };

  Arcade.register({
    id: 'castle', emoji: '🏰', hue: 120, nl: 'Kasteelverdediging', en: 'Castle Defence', cat: 'strategy', panel: true, noPrompt: true, hearts: 5,
    decks: ['spell', 'words', 'idiom'],
    descNl: 'Spelfoutjes bestormen je kasteel! Verdien goud met goede antwoorden en bouw slim je torens.',
    descEn: 'Spelling bugs are storming your castle! Earn gold with right answers and place your towers wisely.',
    howNl: 'Beantwoord de vragen onder het veld: elk goed antwoord geeft goud. Kies 🏹 of 🔮 en tik op een ⊕-plek om een toren te bouwen; tik op een toren om hem sterker te maken. Klaar? Start de golf ▶. Laat geen monstertje bij je kasteel komen!',
    howEn: 'Answer the questions below the field: every right answer gives gold. Pick 🏹 or 🔮 and tap a ⊕ spot to build a tower; tap a tower to make it stronger. Ready? Start the wave ▶. Do not let any bug reach your castle!',
    goalNl: '🏰 Goede antwoorden = goud = torens', goalEn: '🏰 Right answers = gold = towers'
  }, Castle);
})();
