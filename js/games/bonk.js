/* =====================================================================
   🍄 Blokbonk: een platformspel zoals de bekende loodgieter-spellen.

   Boven het pad hangt een rij vraagtekenblokken, en samen vormen ze een
   zin. Precies één woord in die zin is fout gespeld. Je held rent vanzelf;
   tik (of spatie) om te springen en bonk met je hoofd tegen het blok met
   de spelfout: dan springt er een munt uit en zie je hoe het wél moet.
   Bonk je een goed woord, dan kost dat een hartje. Tussen de zinnen lopen
   soms kevers 🐞: spring er bovenop voor bonuspunten, maar loop er niet
   tegenaan. Zo lees je een hele zin vlot én zoek je de fout: de zin staat
   ook boven het speelveld, zodat je vooruit kunt lezen.

   De zinnen komen uit de "zoek de fout"-opdrachten en uit de "welk woord
   is goed"-opdrachten (met het foute woord in de zin gezet), zie
   sentencePool() in js/arcade.js.
   ===================================================================== */
'use strict';

(function () {
  const K = Arcade.kit;
  const G = K.G;
  /* hardloopsnelheid per level: rustig genoeg om de zin te lezen */
  const RUN = [0, 76, 86, 96];

  const Bonk = {
    makeDuels: function (deck, lv) { return K.sentences(lv); },
    init: function () {
      const ctx = K.ctx;
      const W = G.W, H = G.H;
      this.ground = H - 48;
      this.hero = { x: Math.max(64, W * 0.2), h: 0, vy: 0, w: 30, hh: 42 };
      this.blockB = this.ground - this.hero.hh - 52;
      this.blockH = 40;
      this.gravity = 1900;
      this.jumpV = 600;
      this.scroll = 0;
      this.inv = 0;
      this.items = [];
      this.hills = [];
      for (let i = 0; i < 8; i++) this.hills.push({ x: i * 230 + Math.random() * 80, r: 70 + Math.random() * 60 });
      this.clouds = K.makeClouds(4);
      /* het hele level in één keer uitleggen: zin, ruimte, zin, ... vlag */
      let x = W * 0.85;
      const self = this;
      G.duels.forEach(function (d, di) {
        if (di > 0) {
          const gapW = 250;
          /* een kever loopt heen en weer in zijn eigen stuk tussen twee zinnen,
             zodat je nooit onder een zin hoeft te springen om hem te ontwijken */
          if (Math.random() < 0.55) self.items.push({ kind: 'bug', x: x + gapW / 2, min: x + 40, max: x + gapW - 40, dir: -1, dead: false, squash: 0 });
          else if (Math.random() < 0.6) {
            for (let c = 0; c < 3; c++) self.items.push({ kind: 'coin', x: x + gapW / 2 - 30 + c * 30, y: self.blockB - 6 - (c === 1 ? 14 : 0), got: false });
          }
          x += gapW;
        }
        const blocks = [];
        K.font(17);
        d.words.forEach(function (word, k) {
          const w = Math.max(50, ctx.measureText(word).width + 20);
          blocks.push({ x: x, w: w, text: word, err: k === d.err, state: null, bump: 0 });
          x += w + 4;
        });
        self.items.push({ kind: 'sent', di: di, blocks: blocks, start: blocks[0].x, end: x, done: false });
      });
      this.flagX = x + 160;
    },
    resized: function () {},

    heroX: function () { return this.scroll + this.hero.x; },
    sentence: function () {
      const d = K.current();
      if (!d) return null;
      const di = G.duels.indexOf(d);
      return this.items.filter(function (it) { return it.kind === 'sent' && it.di === di; })[0] || null;
    },

    action: function () {
      if (G.state !== 'play') return;
      if (this.hero.h <= 4) { this.hero.vy = this.jumpV; Sound.click(); }
    },

    /* een blok geraakt: goed = munt, fout = hartje kwijt */
    hit: function (s, b) {
      if (s.done) return;
      s.done = true;
      b.bump = 0.22;
      const sx = b.x - this.scroll + b.w / 2;
      if (b.err) {
        b.state = 'ok';
        b.coin = 0.001;
        K.resolve(s.di, 'ok', sx, this.blockB - 60);
      } else {
        b.state = 'no';
        s.blocks.forEach(function (x) { if (x.err) x.state = 'show'; });
        K.resolve(s.di, 'wrong', sx, this.blockB - 60);
      }
    },

    update: function (dt) {
      const h = this.hero;
      const self = this;
      this.items.forEach(function (it) {
        if (it.kind === 'sent') it.blocks.forEach(function (b) {
          if (b.bump > 0) b.bump = Math.max(0, b.bump - dt);
          if (b.coin) b.coin += dt;
        });
        if (it.kind === 'bug' && it.squash) it.squash += dt;
      });
      if (G.state !== 'play') { if (G.state === 'ready') h.h = 0; return; }
      if (this.inv > 0) this.inv -= dt;
      const speed = RUN[G.lv] * (1 + G.di * 0.01);
      this.scroll += speed * dt;

      h.vy -= this.gravity * dt;
      h.h += h.vy * dt;
      if (h.h <= 0) { h.h = 0; h.vy = 0; }
      const hx = this.heroX();

      /* met je hoofd tegen de onderkant van een blok? */
      const head = this.ground - h.h - h.hh;
      if (h.vy > 0 && head <= this.blockB) {
        const s = this.items.filter(function (it) {
          return it.kind === 'sent' && hx >= it.start - 10 && hx <= it.end + 6;
        })[0];
        if (s) {
          let b = s.blocks.filter(function (x) { return hx >= x.x - 2 && hx <= x.x + x.w + 2; })[0];
          if (!b) b = s.blocks.slice().sort(function (p, q) { return Math.abs(p.x + p.w / 2 - hx) - Math.abs(q.x + q.w / 2 - hx); })[0];
          h.h = this.ground - h.hh - this.blockB;
          h.vy = -140;
          b.bump = 0.22;
          Sound.click();
          this.hit(s, b);
        }
      }

      this.items.forEach(function (it) {
        if (it.kind === 'sent') {
          /* de zin voorbij zonder te bonken: gemist */
          if (!it.done && it.end < hx - h.w) {
            it.done = true;
            it.blocks.forEach(function (x) { if (x.err) x.state = 'show'; });
            K.resolve(it.di, 'miss', G.W / 2, self.blockB - 50);
          }
        } else if (it.kind === 'bug' && !it.dead) {
          it.x += it.dir * 28 * dt;
          if (it.x < it.min) { it.x = it.min; it.dir = 1; }
          if (it.x > it.max) { it.x = it.max; it.dir = -1; }
          const bl = it.x - 15, br = it.x + 15;
          const heroL = hx - h.w / 2, heroR = hx + h.w / 2;
          if (heroR > bl && heroL < br) {
            if (h.vy < 0 && h.h > 8 && h.h < 30) {
              it.dead = true;
              it.squash = 0.001;
              h.vy = 420;
              Sound.star();
              K.bonus(5, '🐞', it.x - self.scroll, self.ground - 50);
            } else if (h.h <= 8 && self.inv <= 0) {
              it.dead = true;
              it.squash = 0.001;
              self.inv = 1.2;
              G.shake = 0.3;
              K.pop('🐞 Au!', false, it.x - self.scroll, self.ground - 60);
              K.loseHeart();
            }
          }
        } else if (it.kind === 'coin' && !it.got) {
          const top = self.ground - h.h - h.hh;
          if (Math.abs(it.x - hx) < 20 && it.y > top - 10 && it.y < self.ground - h.h + 4) {
            it.got = true;
            Sound.coin();
            K.bonus(2, '', it.x - self.scroll, it.y - 10);
          }
        }
      });
    },

    /* ---- tekenen ---- */
    block: function (b, sx) {
      const ctx = K.ctx;
      const y = this.blockB - this.blockH - Math.sin(Math.min(1, b.bump / 0.22) * Math.PI) * 8;
      const fill = b.state === 'ok' ? '#b7791f' : b.state === 'no' ? '#fca5a5' : b.state === 'show' ? '#fecaca' : '#fbbf24';
      ctx.fillStyle = fill;
      K.rr(sx, y, b.w, this.blockH, 6);
      ctx.fill();
      ctx.lineWidth = 3;
      ctx.strokeStyle = b.state === 'show' ? '#dc2626' : b.state === 'ok' ? '#7c4a03' : '#b45309';
      ctx.stroke();
      /* klinknageltjes in de hoeken */
      ctx.fillStyle = 'rgba(0,0,0,.25)';
      [[5, 5], [b.w - 5, 5], [5, this.blockH - 5], [b.w - 5, this.blockH - 5]].forEach(function (p) {
        ctx.fillRect(sx + p[0] - 1.5, y + p[1] - 1.5, 3, 3);
      });
      const text = b.state === 'ok' ? this.fixOf(b) : b.text;
      const size = K.fitFont(text, b.w - 8, 17, 10);
      K.font(size);
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillStyle = b.state === 'ok' ? '#fff' : '#3a2600';
      ctx.fillText(text, sx + b.w / 2, y + this.blockH / 2 + 1);
      if (b.state === 'show') {
        const tw = ctx.measureText(text).width;
        ctx.strokeStyle = '#dc2626';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(sx + b.w / 2 - tw / 2, y + this.blockH / 2 + 1);
        ctx.lineTo(sx + b.w / 2 + tw / 2, y + this.blockH / 2 + 1);
        ctx.stroke();
        K.wordTag(this.fixOf(b), sx + b.w / 2, y - 16, 'ok', 14);
      }
      if (b.coin && b.coin < 0.8) K.emoji('🪙', sx + b.w / 2, y - 10 - b.coin * 70, 24);
    },
    fixOf: function (b) {
      const s = this.items.filter(function (it) { return it.kind === 'sent' && it.blocks.indexOf(b) !== -1; })[0];
      return s ? G.duels[s.di].fixShown || G.duels[s.di].right : b.text;
    },

    draw: function (dt) {
      const ctx = K.ctx;
      const W = G.W, H = G.H;
      K.sky('#5ec3ff', '#c9ecff');
      K.clouds(this.clouds, G.state === 'play' ? 16 : 5, dt);
      /* heuvels met stippen, die langzamer meebewegen */
      const self = this;
      this.hills.forEach(function (hl) {
        const x = ((hl.x - self.scroll * 0.3) % 1840 + 1840) % 1840 - 120;
        ctx.fillStyle = '#5cc96b';
        ctx.beginPath();
        ctx.ellipse(x, self.ground, hl.r, hl.r * 0.8, 0, Math.PI, 0);
        ctx.fill();
        ctx.fillStyle = 'rgba(0,80,20,.25)';
        ctx.beginPath(); ctx.arc(x - hl.r * 0.3, self.ground - hl.r * 0.35, 4, 0, 7); ctx.fill();
        ctx.beginPath(); ctx.arc(x + hl.r * 0.25, self.ground - hl.r * 0.5, 4, 0, 7); ctx.fill();
      });
      /* de grond: bruine stenen */
      ctx.fillStyle = '#c8743c';
      ctx.fillRect(0, this.ground, W, H - this.ground);
      ctx.strokeStyle = 'rgba(0,0,0,.2)';
      ctx.lineWidth = 2;
      const off = this.scroll % 36;
      for (let x = -off; x < W; x += 36) {
        ctx.strokeRect(x, this.ground, 36, 24);
        ctx.strokeRect(x + 18, this.ground + 24, 36, 24);
      }
      ctx.fillStyle = '#4caf50';
      ctx.fillRect(0, this.ground - 4, W, 6);

      this.items.forEach(function (it) {
        if (it.kind === 'sent') {
          if (it.end - self.scroll < -40 || it.start - self.scroll > W + 40) return;
          it.blocks.forEach(function (b) { self.block(b, b.x - self.scroll); });
        } else if (it.kind === 'bug') {
          const sx = it.x - self.scroll;
          if (sx < -30 || sx > W + 30) return;
          if (it.squash) {
            if (it.squash < 0.5) { ctx.globalAlpha = 1 - it.squash * 2; K.emoji('🐞', sx, self.ground - 6, 30); ctx.globalAlpha = 1; }
          } else K.emoji('🐞', sx, self.ground - 13 - Math.abs(Math.sin(G.t * 8)) * 2, 28);
        } else if (it.kind === 'coin' && !it.got) {
          const sx = it.x - self.scroll;
          if (sx > -20 && sx < W + 20) K.emoji('🪙', sx, it.y + Math.sin(G.t * 4 + it.x) * 3, 22);
        }
      });
      /* de vlag aan het eind */
      const fx = this.flagX - this.scroll;
      if (fx < W + 40) {
        ctx.fillStyle = '#e5e7eb';
        ctx.fillRect(fx, this.ground - 150, 5, 150);
        K.emoji('🏁', fx + 18, this.ground - 138, 30);
      }

      const h = this.hero;
      if (this.inv > 0 && Math.floor(this.inv * 10) % 2) return;
      const bob = h.h > 0 ? 0 : Math.abs(Math.sin(G.t * 12)) * 3;
      K.emoji(Store.player.avatar || '🦸', h.x, this.ground - h.h - h.hh / 2 - bob, 38);
    },

    promptText: function () {
      const d = K.current();
      return d ? '🍄 ' + d.words.join(' ') : '';
    },

    /* voor de test: de huidige zin meteen goed of fout bonken */
    debugResolve: function (ok) {
      const s = this.sentence();
      if (!s) return;
      const b = s.blocks.filter(function (x) { return x.err === ok; })[0] || s.blocks[0];
      this.hit(s, b);
    }
  };

  Arcade.register({
    id: 'bonk', emoji: '🍄', hue: 20, nl: 'Blokbonk', en: 'Block Bonk', cat: 'adventure', decks: ['spell'],
    descNl: 'Een zin op vraagtekenblokken. Spring en bonk het blok met de spelfout eruit!',
    descEn: 'A sentence on question blocks. Jump and bonk out the block with the spelling mistake!',
    howNl: 'Je held rent vanzelf onder een zin door. Eén woord is fout gespeld: tik (of spatie) om te springen en bonk precies dat blok. Goed = een munt! Een goed woord bonken kost een hartje. Spring bovenop de kevers 🐞 voor bonuspunten.',
    howEn: 'Your hero runs under a sentence by itself. One word is misspelled: tap (or space) to jump and bonk exactly that block. Right = a coin! Bonking a correct word costs a heart. Jump on the beetles 🐞 for bonus points.',
    goalNl: '🍄 Bonk het blok met de spelfout', goalEn: '🍄 Bonk the block with the spelling mistake'
  }, Bonk);
})();
