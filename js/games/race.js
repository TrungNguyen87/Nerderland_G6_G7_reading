/* =====================================================================
   🏎️ Woordrace: een kartrace over drie rijbanen.

   Er komen rijen poortjes op je af: in één baan het goede woord, in een
   andere het foute, en in de derde een olievlek. Stuur (tik links/rechts
   of ← →) door het goede woord: dat geeft een turbo 🔥 en je haalt de
   andere karts in. Het foute woord laat je slippen (hartje kwijt), de
   olievlek ook (zonder hartje, maar het woord is gemist). Aan het eind
   telt je plaats: 1e, 2e, 3e of 4e, met bonuspunten.

   De snelheden van de drie andere karts zijn met een simulatie afgesteld:
   12 van de 15 goed of meer = 1e, ongeveer 9 goed = 2e, 6 goed = 3e.
   Je begint achteraan, dus inhalen voelt als verdiend.
   ===================================================================== */
'use strict';

(function () {
  const K = Arcade.kit;
  const G = K.G;
  const BASE = [0, 115, 128, 142];
  const RIVALS = [
    { e: '🦊', c: '#ef4444', f: 0.97, head: 30 },
    { e: '🐼', c: '#3b82f6', f: 1.03, head: 70 },
    { e: '🐯', c: '#f59e0b', f: 1.09, head: 110 }
  ];
  const PLACE_BONUS = [0, 40, 25, 10, 0];

  const Race = {
    init: function () {
      const W = G.W, H = G.H;
      this.laneW = Math.min(W * 0.27, 150);
      this.cx = W / 2;
      this.kartY = H - 58;
      this.lane = 1;
      this.kx = this.laneX(1);
      this.rows = [];
      this.spawned = 0;
      this.since = 9999;
      this.base = BASE[G.lv];
      this.boost = 0;
      this.spin = 0;
      this.scroll = 0;
      this.dist = 0;
      this.rivals = RIVALS.map(function (r, i) { return { e: r.e, c: r.c, f: r.f, d: r.head, lane: i }; });
      this.flames = [];
      this.place = 4;
      this.decor = [];
      for (let i = 0; i < 14; i++) {
        this.decor.push({ side: i % 2, y: Math.random() * H, e: ['🌳', '🌷', '🌲', '🌼', '🍄', '🌳'][i % 6], s: 18 + Math.random() * 12 });
      }
    },
    resized: function () {
      this.laneW = Math.min(G.W * 0.27, 150);
      this.cx = G.W / 2;
      this.kartY = G.H - 58;
    },
    laneX: function (i) { return this.cx + (i - 1) * this.laneW; },
    spacing: function () { return Math.max(250, this.base * 2.4); },

    tap: function (x) { this.move(x < G.W / 2 ? -1 : 1); },
    left: function () { this.move(-1); },
    right: function () { this.move(1); },
    action: function () {},
    move: function (d) {
      if (G.state !== 'play') return;
      const to = Math.max(0, Math.min(2, this.lane + d));
      if (to !== this.lane) { this.lane = to; Sound.click(); }
    },
    steer: function (lane) { this.lane = Math.max(0, Math.min(2, lane)); },

    standing: function () {
      const me = this.dist;
      return 1 + this.rivals.filter(function (r) { return r.d > me; }).length;
    },

    update: function (dt) {
      this.kx += (this.laneX(this.lane) - this.kx) * Math.min(1, dt * 12);
      this.flames.forEach(function (f) { f.t += dt; });
      this.flames = this.flames.filter(function (f) { return f.t < 0.5; });
      if (G.state !== 'play') return;
      if (this.boost > 0) this.boost -= dt;
      if (this.spin > 0) this.spin -= dt;
      const v = this.base * (this.boost > 0 ? 1.4 : 1) * (this.spin > 0 ? 0.45 : 1);
      this.scroll += v * dt;
      this.dist += v * dt;
      const self = this;
      this.rivals.forEach(function (r) { r.d += self.base * r.f * dt; });
      this.decor.forEach(function (d) { d.y += v * dt; if (d.y > G.H + 30) d.y -= G.H + 60; });
      this.rows.forEach(function (r) { r.y += v * dt; });
      if (this.boost > 0 && Math.random() < 0.6) this.flames.push({ x: this.kx + (Math.random() - 0.5) * 16, y: this.kartY + 30, t: 0 });

      this.since += v * dt;
      if (this.spawned < G.duels.length && this.since >= this.spacing()) {
        const lanes = shuffle(['right', 'wrong', 'oil']);
        this.rows.push({ di: this.spawned, y: -50, lanes: lanes, judged: false, took: -1 });
        this.spawned++;
        this.since = 0;
      }

      this.rows.forEach(function (r) {
        if (r.judged || r.y < self.kartY - 16) return;
        r.judged = true;
        let lane = 0;
        [0, 1, 2].forEach(function (i) { if (Math.abs(self.laneX(i) - self.kx) < Math.abs(self.laneX(lane) - self.kx)) lane = i; });
        r.took = lane;
        const kind = r.lanes[lane];
        if (kind === 'right') {
          self.boost = 1.3;
          Sound.star();
          K.resolve(r.di, 'ok', self.kx, self.kartY - 50);
        } else if (kind === 'wrong') {
          self.spin = 0.8;
          K.resolve(r.di, 'wrong', self.kx, self.kartY - 50);
        } else {
          self.spin = 0.6;
          K.pop('🛢️', false, self.kx, self.kartY - 70);
          K.resolve(r.di, 'miss', self.kx, self.kartY - 50);
        }
        self.place = self.standing();
      });
      this.rows = this.rows.filter(function (r) { return r.y < G.H + 70; });
      this.place = this.standing();
    },

    kart: function (x, y, color, face, rot) {
      const ctx = K.ctx;
      ctx.save();
      ctx.translate(x, y);
      if (rot) ctx.rotate(rot);
      ctx.fillStyle = '#1f2937';
      [[-17, -14], [13, -14], [-17, 10], [13, 10]].forEach(function (w) { K.rr(w[0], w[1], 5, 12, 2); ctx.fill(); });
      ctx.fillStyle = color;
      K.rr(-13, -22, 26, 44, 9);
      ctx.fill();
      ctx.fillStyle = 'rgba(255,255,255,.35)';
      K.rr(-8, -19, 16, 8, 3);
      ctx.fill();
      ctx.restore();
      K.emoji(face, x, y + 2, 20, rot);
    },

    draw: function () {
      const ctx = K.ctx;
      const W = G.W, H = G.H;
      const self = this;
      /* gras met strepen */
      ctx.fillStyle = '#7ccf5b';
      ctx.fillRect(0, 0, W, H);
      ctx.fillStyle = 'rgba(255,255,255,.08)';
      const stripe = 40;
      const off = this.scroll % (stripe * 2);
      for (let y = -stripe * 2 + off; y < H; y += stripe * 2) ctx.fillRect(0, y, W, stripe);
      /* de weg */
      const roadL = this.laneX(0) - this.laneW / 2 - 10, roadR = this.laneX(2) + this.laneW / 2 + 10;
      ctx.fillStyle = '#4b5563';
      ctx.fillRect(roadL, 0, roadR - roadL, H);
      /* rood-witte stoeprand */
      for (let y = -24 + (this.scroll % 24); y < H; y += 24) {
        ctx.fillStyle = (Math.floor((y - this.scroll) / 24) % 2) ? '#ef4444' : '#f8fafc';
        ctx.fillRect(roadL - 8, y, 8, 12);
        ctx.fillRect(roadR, y, 8, 12);
        ctx.fillStyle = (Math.floor((y - this.scroll) / 24) % 2) ? '#f8fafc' : '#ef4444';
        ctx.fillRect(roadL - 8, y + 12, 8, 12);
        ctx.fillRect(roadR, y + 12, 8, 12);
      }
      /* streepjes tussen de banen */
      ctx.fillStyle = 'rgba(255,255,255,.55)';
      for (let i = 0; i < 2; i++) {
        const x = this.laneX(i) + this.laneW / 2 - 2;
        for (let y = -30 + (this.scroll % 46); y < H; y += 46) ctx.fillRect(x, y, 4, 24);
      }
      this.decor.forEach(function (d) {
        const x = d.side ? (roadR + W) / 2 + 4 : roadL / 2 - 4;
        if ((d.side && W - roadR > 26) || (!d.side && roadL > 26)) K.emoji(d.e, x, d.y, d.s);
      });

      /* de andere karts, getekend ten opzichte van jou */
      this.rivals.forEach(function (r) {
        const y = self.kartY - (r.d - self.dist) * 0.6;
        if (y < -40 || y > H + 40) return;
        self.kart(self.laneX(r.lane), y, r.c, r.e, 0);
      });

      /* poortjes */
      this.rows.forEach(function (r) {
        const d = G.duels[r.di];
        r.lanes.forEach(function (kind, i) {
          const x = self.laneX(i);
          if (kind === 'oil') {
            ctx.fillStyle = 'rgba(17,24,39,.85)';
            ctx.beginPath();
            ctx.ellipse(x, r.y, self.laneW * 0.3, 13, 0, 0, Math.PI * 2);
            ctx.fill();
            K.emoji('🛢️', x, r.y - 2, 18);
            return;
          }
          const word = kind === 'right' ? d.right : d.wrong;
          const st = d.done ? (kind === 'right' ? 'ok' : 'no') : null;
          ctx.fillStyle = '#e5e7eb';
          ctx.fillRect(x - self.laneW / 2 + 6, r.y - 26, 5, 30);
          ctx.fillRect(x + self.laneW / 2 - 11, r.y - 26, 5, 30);
          const size = K.fitFont(word, self.laneW - 26, 16, 10);
          K.wordTag(word, x, r.y - 26, st, size);
        });
      });

      /* jouw kart, met turbo-vlammen of slippend */
      this.flames.forEach(function (f) {
        ctx.globalAlpha = Math.max(0, 1 - f.t * 2);
        K.emoji('🔥', f.x, f.y + f.t * 40, 16);
      });
      ctx.globalAlpha = 1;
      const rot = this.spin > 0 ? this.spin * 12 : 0;
      this.kart(this.kx, this.kartY, '#8b5cf6', Store.player.avatar || '🦸', rot);

      /* stand linksboven */
      const medal = ['', '🥇', '🥈', '🥉', '4️⃣'][this.place] || '';
      K.font(15);
      ctx.textAlign = 'left';
      ctx.lineWidth = 4;
      ctx.strokeStyle = 'rgba(0,0,0,.45)';
      const label = medal + ' ' + t('racePlace').replace('{n}', this.place);
      ctx.strokeText(label, 10, 22);
      ctx.fillStyle = '#fff';
      ctx.fillText(label, 10, 22);
    },

    result: function () {
      const place = this.standing();
      const extra = Math.round(PLACE_BONUS[place] * K.level().pts);
      const medal = ['', '🥇', '🥈', '🥉', '🏁'][place];
      return {
        score: G.score + extra, place: place,
        note: function () { return medal + ' ' + t('raceResult').replace('{n}', place) + (extra ? ' (+' + extra + ')' : ''); }
      };
    }
  };

  Arcade.register({
    id: 'race', emoji: '🏎️', hue: 350, nl: 'Woordrace', en: 'Word Race', cat: 'arcade', decks: ['spell', 'words'],
    descNl: 'Kartrace! Stuur door het poortje met het goede woord voor een turbo en haal iedereen in.',
    descEn: 'Kart race! Steer through the gate with the right word for a turbo and overtake everyone.',
    howNl: 'Tik links of rechts (of ← →) om van baan te wisselen. Rijd door het goede woord: turbo 🔥! Het foute woord of de olievlek laat je slippen. Hoe meer goed, hoe hoger je eindigt.',
    howEn: 'Tap left or right (or ← →) to change lanes. Drive through the right word: turbo 🔥! The wrong word or the oil makes you skid. The more you get right, the higher you finish.',
    goalNl: '🏎️ Rijd door het goede woord, ontwijk de olie', goalEn: '🏎️ Drive through the right word, dodge the oil'
  }, Race);
})();
