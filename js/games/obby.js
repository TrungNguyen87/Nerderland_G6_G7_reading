/* =====================================================================
   🧗 Obby-toren: klim een toren op, zoals in een obby (hindernisparcours).

   Elke verdieping heeft twee platforms met een woord: één goed, één fout.
   Tik links of rechts (of ← →) om te springen. Het goede woord houdt je;
   het foute woord is een valblok: het brokkelt af, je valt terug, verliest
   een hartje en springt daarna alsnog op het goede platform (zo zie je
   meteen wat het had moeten zijn). Om de 5 verdiepingen een checkpoint 🚩
   met bonuspunten. Onder je stijgt langzaam de lava: wie heel lang
   treuzelt, verliest een hartje. De lava is ruim afgesteld (in level 1
   ruim 20 seconden per verdieping), het gaat om lezen, niet om haast.
   ===================================================================== */
'use strict';

(function () {
  const K = Arcade.kit;
  const G = K.G;
  /* geen groen en geen rood: die kleuren betekenen goed en fout */
  const COLORS = ['#3b82f6', '#f59e0b', '#a855f7', '#0891b2', '#ec4899', '#6366f1'];
  /* seconden die de lava nodig heeft om één verdieping te stijgen, per level */
  const LAVA_SECONDS = [0, 14, 11, 9];

  const Obby = {
    init: function () {
      const W = G.W, H = G.H;
      this.gap = Math.round(H * 0.3);
      this.base = H - 34;
      this.pw = Math.min(W * 0.38, 210);
      this.ph = 30;
      this.xs = { L: W * 0.27, R: W * 0.73, C: W * 0.5 };
      this.floors = [{ state: 'ok', side: 'C' }];
      for (let i = 0; i < G.duels.length; i++) this.floors.push({ rightLeft: Math.random() < 0.5, state: null, side: null, fade: 0 });
      this.at = 0;
      this.side = 'C';
      this.anim = null;
      this.cam = this.camFor(0);
      this.lava = -this.gap * 1.6;
      this.lavaRate = this.gap / LAVA_SECONDS[G.lv];
      this.bits = [];
      this.sparks = [];
      this.stars = [];
      for (let i = 0; i < 40; i++) this.stars.push({ x: Math.random() * W, y: Math.random() * H, s: Math.random() * 1.8 + 0.4 });
    },
    resized: function () { this.init(); },
    camFor: function (floor) { return floor * this.gap - 36; },
    sy: function (wy) { return this.base - (wy - this.cam); },

    /* ---- springen ---- */
    tap: function (x) { this.jump(x < G.W / 2 ? 'L' : 'R'); },
    left: function () { this.jump('L'); },
    right: function () { this.jump('R'); },
    action: function () {},
    jump: function (side) {
      if (G.state !== 'play' || this.anim || this.at >= G.duels.length) return;
      this.anim = { kind: 'jump', t: 0, dur: 0.42, x0: this.xs[this.side], w0: this.at * this.gap,
        x1: this.xs[side], w1: (this.at + 1) * this.gap, side: side };
      Sound.click();
    },
    land: function (side) {
      const i = this.at + 1;
      const f = this.floors[i];
      const ok = (side === 'L') === f.rightLeft;
      const x = this.xs[side];
      const y = this.sy(i * this.gap) - 44;
      if (ok) {
        f.state = 'ok';
        f.side = side;
        this.at = i;
        this.side = side;
        this.burst(x, this.sy(i * this.gap), '#22c55e');
        K.resolve(i - 1, 'ok', x, y);
        if (i % 5 === 0 && i < G.duels.length) {
          K.bonus(15, '🚩 Checkpoint!', G.W / 2, y - 30);
          Sound.star();
        }
        return;
      }
      /* valblok: brokkelt af, jij valt terug en springt daarna op het goede */
      f.state = 'no';
      f.side = f.rightLeft ? 'L' : 'R';
      for (let k = 0; k < 10; k++) {
        this.bits.push({ x: x + (Math.random() - 0.5) * this.pw, w: i * this.gap - Math.random() * this.ph,
          vx: (Math.random() - 0.5) * 80, vy: 40 + Math.random() * 60, t: 0 });
      }
      K.resolve(i - 1, 'wrong', x, y);
      this.anim = { kind: 'fall', t: 0, dur: 0.45, x0: x, w0: i * this.gap, x1: this.xs[this.side], w1: this.at * this.gap };
    },
    finishAnim: function () {
      const a = this.anim;
      this.anim = null;
      if (!a) return;
      if (a.kind === 'jump') this.land(a.side);
      else if (a.kind === 'fall') {
        const i = this.at + 1;
        const f = this.floors[i];
        this.anim = { kind: 'hop', t: 0, dur: 0.4, x0: this.xs[this.side], w0: this.at * this.gap, x1: this.xs[f.side], w1: i * this.gap };
      } else if (a.kind === 'hop') {
        this.at++;
        this.side = this.floors[this.at].side;
      }
    },
    burst: function (x, y, color) {
      for (let k = 0; k < 12; k++) {
        const ang = Math.random() * Math.PI * 2;
        this.sparks.push({ x: x, y: y, vx: Math.cos(ang) * 110, vy: Math.sin(ang) * 110 - 60, t: 0, c: color });
      }
    },

    /* waar staat de speler nu (wereldcoördinaten)? */
    player: function () {
      const a = this.anim;
      if (!a) return { x: this.xs[this.side], w: this.at * this.gap, rot: 0 };
      const k = Math.min(1, a.t / a.dur);
      const x = a.x0 + (a.x1 - a.x0) * k;
      let w = a.w0 + (a.w1 - a.w0) * k;
      if (a.kind !== 'fall') w += Math.sin(k * Math.PI) * this.gap * 0.32;
      return { x: x, w: w, rot: a.kind === 'fall' ? k * 5 : (a.x1 > a.x0 ? 1 : -1) * Math.sin(k * Math.PI) * 0.35 };
    },

    update: function (dt) {
      if (this.anim) {
        this.anim.t += dt;
        if (this.anim.t >= this.anim.dur) this.finishAnim();
      }
      /* de camera volgt rustig */
      const target = this.camFor(Math.min(this.at + (this.anim && this.anim.kind !== 'fall' ? 1 : 0), G.duels.length));
      this.cam += (target - this.cam) * Math.min(1, dt * 5);
      this.bits.forEach(function (b) { b.t += dt; b.x += b.vx * dt; b.w -= b.vy * dt; b.vy += 500 * dt; });
      this.bits = this.bits.filter(function (b) { return b.t < 1.2; });
      this.sparks.forEach(function (s) { s.t += dt; s.x += s.vx * dt; s.y += s.vy * dt; s.vy += 300 * dt; });
      this.sparks = this.sparks.filter(function (s) { return s.t < 0.7; });
      this.floors.forEach(function (f) { if (f.state) f.fade = Math.min(1, f.fade + dt * 2); });

      if (G.state !== 'play' || this.anim) return;
      /* de lava: nooit te ver weg, en langzaam omhoog */
      const feet = this.at * this.gap;
      this.lava = Math.max(this.lava, feet - this.gap * 1.6) + this.lavaRate * dt;
      if (this.lava >= feet - 6) {
        this.lava = feet - this.gap * 1.6;
        K.pop('🔥 Au!', false, this.xs[this.side], this.sy(feet) - 60);
        K.feedback('🔥 ' + t('obbyLava'), 'bad');
        K.loseHeart();
      }
    },

    /* ---- tekenen ---- */
    platform: function (x, wy, word, state, color, fade) {
      const ctx = K.ctx;
      const y = this.sy(wy);
      const w = this.pw, h = this.ph;
      ctx.save();
      if (state === 'gone') {
        ctx.globalAlpha = Math.max(0, 1 - fade);
        ctx.translate(0, fade * 30);
      }
      const fill = state === 'ok' ? '#22c55e' : state === 'gone' ? '#ef4444' : state === 'dim' ? '#9ca3af' : color;
      ctx.fillStyle = 'rgba(0,0,0,.18)';
      K.rr(x - w / 2 + 3, y + 4, w, h, 7);
      ctx.fill();
      ctx.fillStyle = fill;
      K.rr(x - w / 2, y, w, h, 7);
      ctx.fill();
      ctx.lineWidth = 3;
      ctx.strokeStyle = 'rgba(0,0,0,.25)';
      ctx.stroke();
      /* noppen bovenop, zoals bouwsteentjes */
      ctx.fillStyle = 'rgba(255,255,255,.35)';
      for (let sx = x - w / 2 + 14; sx < x + w / 2 - 6; sx += 22) {
        ctx.beginPath();
        ctx.ellipse(sx, y + 1, 6, 3, 0, 0, Math.PI * 2);
        ctx.fill();
      }
      if (word) {
        const size = K.fitFont(word, w - 14, 17, 10);
        K.font(size);
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.lineWidth = 3;
        ctx.strokeStyle = 'rgba(0,0,0,.35)';
        ctx.strokeText(word, x, y + h / 2 + 1);
        ctx.fillStyle = '#fff';
        ctx.fillText(word, x, y + h / 2 + 1);
        if (state === 'gone' || state === 'dim') {
          const tw = ctx.measureText(word).width;
          ctx.strokeStyle = '#fff';
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(x - tw / 2, y + h / 2 + 1);
          ctx.lineTo(x + tw / 2, y + h / 2 + 1);
          ctx.stroke();
        }
      }
      ctx.restore();
    },

    draw: function () {
      const ctx = K.ctx;
      const W = G.W, H = G.H;
      const N = G.duels.length;
      const p = Math.min(1, this.at / Math.max(1, N));
      /* hoe hoger, hoe donkerder de lucht: bovenin zie je de sterren */
      const g = ctx.createLinearGradient(0, 0, 0, H);
      g.addColorStop(0, 'hsl(' + (215 + p * 50) + ',75%,' + (70 - p * 45) + '%)');
      g.addColorStop(1, 'hsl(' + (200 + p * 40) + ',85%,' + (88 - p * 40) + '%)');
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, W, H);
      if (p > 0.3) {
        ctx.fillStyle = 'rgba(255,255,255,' + Math.min(0.9, (p - 0.3) * 1.6) + ')';
        this.stars.forEach(function (s) { ctx.fillRect(s.x, s.y, s.s, s.s); });
      }

      /* de torenmuren links en rechts: gekleurde blokken */
      const bw = Math.max(16, W * 0.06), bh = 26;
      const off = ((this.cam % (bh * 6)) + bh * 6) % (bh * 6);
      for (let side = 0; side < 2; side++) {
        const x0 = side ? W - bw : 0;
        for (let y = -bh * 6 + off, n = 0; y < H + bh; y += bh, n++) {
          ctx.fillStyle = COLORS[(n + side * 2 + 600) % COLORS.length];
          ctx.globalAlpha = 0.55;
          ctx.fillRect(x0, y, bw, bh - 2);
        }
        ctx.globalAlpha = 1;
      }

      /* verdiepingen */
      const self = this;
      this.floors.forEach(function (f, i) {
        const wy = i * self.gap;
        const y = self.sy(wy);
        if (y < -60 || y > H + 60) return;
        if (i === 0) {
          self.platform(self.xs.C, 0, 'START', 'ok', '#64748b', 0);
          return;
        }
        const d = G.duels[i - 1];
        const col = COLORS[i % COLORS.length];
        ['L', 'R'].forEach(function (side) {
          const isRight = (side === 'L') === f.rightLeft;
          const word = isRight ? d.right : d.wrong;
          let st = null;
          if (f.state === 'ok') st = isRight ? 'ok' : 'dim';
          else if (f.state === 'no') st = isRight ? 'ok' : 'gone';
          self.platform(self.xs[side], wy, word, st, col, f.fade);
        });
        if (i % 5 === 0) {
          K.emoji(i === N ? '🏆' : '🚩', W / 2, y - 18, i === N ? 34 : 26);
          if (i < N) {
            K.font(11);
            ctx.fillStyle = 'rgba(255,255,255,.9)';
            ctx.textAlign = 'center';
            ctx.fillText('CHECKPOINT', W / 2, y + 14);
          }
        }
      });

      /* brokstukken van een valblok */
      ctx.fillStyle = '#ef4444';
      this.bits.forEach(function (b) {
        ctx.globalAlpha = Math.max(0, 1 - b.t / 1.2);
        ctx.fillRect(b.x - 6, self.sy(b.w) - 6, 12, 12);
      });
      ctx.globalAlpha = 1;
      this.sparks.forEach(function (s) {
        ctx.globalAlpha = Math.max(0, 1 - s.t / 0.7);
        ctx.fillStyle = s.c;
        ctx.beginPath();
        ctx.arc(s.x, s.y, 3.5, 0, 7);
        ctx.fill();
      });
      ctx.globalAlpha = 1;

      /* de speler */
      const pl = this.player();
      K.emoji(Store.player.avatar || '🦸', pl.x, this.sy(pl.w) - 20, 36, pl.rot);

      /* de lava */
      const ly = this.sy(this.lava);
      if (ly < H + 10) {
        const lg = ctx.createLinearGradient(0, ly, 0, H);
        lg.addColorStop(0, '#ff9f1c');
        lg.addColorStop(0.35, '#f3530b');
        lg.addColorStop(1, '#9a1b00');
        ctx.fillStyle = lg;
        ctx.beginPath();
        ctx.moveTo(0, H);
        for (let x = 0; x <= W; x += 12) ctx.lineTo(x, ly + Math.sin(x / 26 + G.t * 3) * 5);
        ctx.lineTo(W, H);
        ctx.closePath();
        ctx.fill();
        ctx.fillStyle = 'rgba(255,230,120,.8)';
        for (let k = 0; k < 6; k++) {
          const bx = (k * 97 + G.t * 30) % W;
          const by = ly + 14 + ((k * 31 + G.t * 20) % 30);
          if (by < H) { ctx.beginPath(); ctx.arc(bx, by, 3 + (k % 3), 0, 7); ctx.fill(); }
        }
      }

      /* hoogtemeter rechtsboven */
      K.font(13);
      ctx.textAlign = 'right';
      ctx.fillStyle = 'rgba(255,255,255,.95)';
      ctx.strokeStyle = 'rgba(0,0,0,.35)';
      ctx.lineWidth = 3;
      const label = '🧗 ' + this.at + '/' + N;
      ctx.strokeText(label, W - bw - 8, 20);
      ctx.fillText(label, W - bw - 8, 20);
    },

    /* voor de test: meteen springen en landen */
    debugResolve: function (ok) {
      while (this.anim) this.finishAnim();
      if (this.at >= G.duels.length) return;
      const f = this.floors[this.at + 1];
      this.land((f.rightLeft === ok) ? 'L' : 'R');
      while (this.anim) this.finishAnim();
    }
  };

  Arcade.register({
    id: 'obby', emoji: '🧗', hue: 285, nl: 'Obby-toren', en: 'Obby Tower', cat: 'adventure', decks: ['spell', 'words'],
    descNl: 'Klim de toren op zoals in een obby. Spring naar het platform met het goede woord, voordat de lava je inhaalt!',
    descEn: 'Climb the tower like in an obby. Jump to the platform with the right word before the lava catches up!',
    howNl: 'Tik links of rechts (of gebruik ← →) om naar dat platform te springen. Het goede woord houdt je vast; het foute is een valblok. Om de 5 verdiepingen een checkpoint 🚩. Treuzel niet te lang: de lava stijgt!',
    howEn: 'Tap left or right (or use ← →) to jump to that platform. The right word holds you; the wrong one is a trap block. A checkpoint 🚩 every 5 floors. Do not dawdle: the lava is rising!',
    goalNl: '🧗 Links of rechts: spring naar het goede woord', goalEn: '🧗 Left or right: jump to the right word'
  }, Obby);
})();
