/* =====================================================================
   🔎 Woordzoeker: vind de verstopte woorden in het letterveld.

   Je krijgt geen lijstje met de woorden zelf, maar een aanwijzing:
     - 📖 Woordbetekenis: de uitleg van een woord uit de verhalen, plus het
       aantal letters. Eerst bedenken welk woord het is, dan zoeken.
     - ✍️ Spelling: het woord zoals het FOUT geschreven wordt (✗ trijn).
       Zoek de goede spelling (TREIN) in het veld.
   Veeg over de letters, of tik op de eerste en de laatste letter.

   Level 1: 8×8, 5 woorden, alleen → en ↓.
   Level 2: 9×9, 6 woorden, ook schuin ↘.
   Level 3: 10×10, 7 woorden, alle richtingen, ook achterstevoren.
   Een 💡 hint laat de eerste letter oplichten (dat kost een ster).
   ===================================================================== */
'use strict';

(function () {
  const K = Arcade.kit;
  const G = K.G;
  const CFG = [null,
    { size: 8, n: 5, dirs: [[0, 1], [1, 0]] },
    { size: 9, n: 6, dirs: [[0, 1], [1, 0], [1, 1]] },
    { size: 10, n: 7, dirs: [[0, 1], [1, 0], [1, 1], [-1, 1], [0, -1], [-1, 0], [-1, -1], [1, -1]] }];
  /* opvulletters, ongeveer zo vaak als ze in het Nederlands voorkomen */
  const FILL = 'EEEEEEEENNNNNAAAAATTTTIIIIRRRROOOODDDSSSLLLGGKKHHMMVVBBUUWJPZCF';

  function place(words, cfg) {
    let bestPlaced = [], bestGrid = null;
    for (let attempt = 0; attempt < 25; attempt++) {
      const grid = [];
      for (let r = 0; r < cfg.size; r++) grid.push(new Array(cfg.size).fill(''));
      const placed = [];
      words.slice().sort(function (a, b) { return b.word.length - a.word.length; }).forEach(function (w) {
        if (placed.length >= cfg.n) return;
        const up = w.word.toUpperCase();
        for (let tries = 0; tries < 160; tries++) {
          const d = K.pick(cfg.dirs);
          const r0 = Math.floor(Math.random() * cfg.size), c0 = Math.floor(Math.random() * cfg.size);
          const r1 = r0 + d[0] * (up.length - 1), c1 = c0 + d[1] * (up.length - 1);
          if (r1 < 0 || r1 >= cfg.size || c1 < 0 || c1 >= cfg.size) continue;
          let fits = true;
          for (let k = 0; k < up.length && fits; k++) {
            const cell = grid[r0 + d[0] * k][c0 + d[1] * k];
            if (cell && cell !== up[k]) fits = false;
          }
          if (!fits) continue;
          const cells = [];
          for (let k = 0; k < up.length; k++) {
            grid[r0 + d[0] * k][c0 + d[1] * k] = up[k];
            cells.push([r0 + d[0] * k, c0 + d[1] * k]);
          }
          placed.push({ w: w, cells: cells });
          break;
        }
      });
      if (placed.length > bestPlaced.length) { bestPlaced = placed; bestGrid = grid; }
      if (placed.length >= cfg.n) break;
    }
    for (let r = 0; r < cfg.size; r++) for (let c = 0; c < cfg.size; c++) {
      if (!bestGrid[r][c]) bestGrid[r][c] = FILL[Math.floor(Math.random() * FILL.length)];
    }
    return { grid: bestGrid, placed: bestPlaced };
  }

  const Search = {
    makeDuels: function (deck, lv) {
      const cfg = CFG[lv];
      const words = K.searchWords(deck, lv, cfg.n + 4, cfg.size);
      const res = place(words, cfg);
      this.cfg = cfg;
      this.grid = res.grid;
      this.placed = res.placed;
      return res.placed.map(function (p) {
        return { right: p.w.word, wrong: p.w.wrong || '', prompt: p.w.clue, why: p.w.why || null,
          vocab: !p.w.spell, spell: !!p.w.spell, cells: p.cells, done: false, how: null };
      });
    },
    init: function (dom) {
      this.dom = dom;
      this.found = 0;
      this.misses = 0;
      this.hints = 0;
      this.hinted = {};
      this.anchor = null;
      this.drag = null;
      this.render();
    },
    render: function () {
      const self = this;
      const size = this.cfg.size;
      this.dom.innerHTML = '';
      const wrap = document.createElement('div');
      wrap.className = 'ws-wrap';
      const grid = document.createElement('div');
      grid.className = 'ws-grid';
      grid.style.gridTemplateColumns = 'repeat(' + size + ', 1fr)';
      for (let r = 0; r < size; r++) for (let c = 0; c < size; c++) {
        const cell = document.createElement('span');
        cell.className = 'ws-cell';
        cell.dataset.r = r;
        cell.dataset.c = c;
        cell.textContent = this.grid[r][c];
        grid.appendChild(cell);
      }
      const cellAt = function (e) {
        const el = document.elementFromPoint(e.clientX, e.clientY);
        return el && el.classList && el.classList.contains('ws-cell') ? [parseInt(el.dataset.r, 10), parseInt(el.dataset.c, 10)] : null;
      };
      grid.addEventListener('pointerdown', function (e) {
        if (G.state !== 'play') return;
        const at = cellAt(e);
        if (!at) return;
        e.preventDefault();
        self.drag = { from: at, to: at };
        self.preview();
      });
      grid.addEventListener('pointermove', function (e) {
        if (!self.drag) return;
        const at = cellAt(e);
        if (at && (at[0] !== self.drag.to[0] || at[1] !== self.drag.to[1])) { self.drag.to = at; self.preview(); }
      });
      const up = function () {
        if (!self.drag) return;
        const d = self.drag;
        self.drag = null;
        if (d.from[0] === d.to[0] && d.from[1] === d.to[1]) {
          /* een tik: eerste letter onthouden, of de lijn afmaken */
          if (self.anchor && (self.anchor[0] !== d.from[0] || self.anchor[1] !== d.from[1])) {
            const a = self.anchor;
            self.anchor = null;
            self.tryLine(a, d.from);
          } else {
            self.anchor = self.anchor ? null : d.from;
            self.preview();
          }
          return;
        }
        self.anchor = null;
        self.tryLine(d.from, d.to);
      };
      grid.addEventListener('pointerup', up);
      grid.addEventListener('pointercancel', function () { self.drag = null; self.preview(); });
      wrap.appendChild(grid);

      const side = document.createElement('div');
      side.className = 'ws-side';
      const list = document.createElement('ol');
      list.className = 'ws-clues';
      side.appendChild(list);
      G.duels.forEach(function (d, i) {
        const li = document.createElement('li');
        li.className = 'ws-clue';
        li.dataset.i = i;
        list.appendChild(li);
      });
      const hint = document.createElement('button');
      hint.className = 'ghost-btn ws-hint';
      hint.textContent = t('wsHint');
      hint.addEventListener('click', function () { self.hint(); });
      side.appendChild(hint);
      wrap.appendChild(side);
      this.dom.appendChild(wrap);
      this.cellsEl = grid;
      this.drawClues();
    },
    drawClues: function () {
      const self = this;
      Array.prototype.forEach.call(this.dom.querySelectorAll('.ws-clue'), function (li) {
        const d = G.duels[parseInt(li.dataset.i, 10)];
        li.className = 'ws-clue' + (d.done ? ' done' : '');
        const clue = d.spell ? L(d.prompt) + ' → ?' : L(d.prompt);
        li.innerHTML = '<span class="ws-clue-text"></span> <small></small>';
        li.querySelector('.ws-clue-text').textContent = d.done ? '✅ ' + d.right.toUpperCase() + ' · ' + clue : (d.spell ? '✍️ ' : '📖 ') + clue;
        li.querySelector('small').textContent = d.done ? '' : t('wsLetters').replace('{n}', d.right.length) + (self.hinted[G.duels.indexOf(d)] ? ' · ' + d.right[0].toUpperCase() + '…' : '');
      });
    },
    line: function (a, b) {
      const dr = b[0] - a[0], dc = b[1] - a[1];
      if (dr !== 0 && dc !== 0 && Math.abs(dr) !== Math.abs(dc)) return null;
      const n = Math.max(Math.abs(dr), Math.abs(dc));
      const sr = Math.sign(dr), sc = Math.sign(dc);
      const out = [];
      for (let k = 0; k <= n; k++) out.push([a[0] + sr * k, a[1] + sc * k]);
      return out;
    },
    cell: function (rc) { return this.cellsEl.querySelector('.ws-cell[data-r="' + rc[0] + '"][data-c="' + rc[1] + '"]'); },
    preview: function () {
      const self = this;
      Array.prototype.forEach.call(this.cellsEl.querySelectorAll('.ws-cell.sel'), function (c) { c.classList.remove('sel'); });
      const cells = this.drag ? this.line(this.drag.from, this.drag.to) : this.anchor ? [this.anchor] : null;
      (cells || []).forEach(function (rc) { self.cell(rc).classList.add('sel'); });
    },
    same: function (p, q) {
      if (p.length !== q.length) return false;
      const fwd = p.every(function (rc, i) { return rc[0] === q[i][0] && rc[1] === q[i][1]; });
      const back = p.every(function (rc, i) { const o = q[q.length - 1 - i]; return rc[0] === o[0] && rc[1] === o[1]; });
      return fwd || back;
    },
    tryLine: function (a, b) {
      const self = this;
      const cells = this.line(a, b);
      this.preview();
      if (!cells || G.state !== 'play') return;
      const i = G.duels.findIndex(function (d) { return !d.done && self.same(d.cells, cells); });
      if (i !== -1) {
        const colour = this.found % 6;
        cells.forEach(function (rc) { self.cell(rc).classList.add('found', 'f' + colour); });
        this.found++;
        K.resolve(i, 'ok');
        this.drawClues();
        return;
      }
      this.misses++;
      G.combo = 0;
      Sound.wrong();
      cells.forEach(function (rc) {
        const el = self.cell(rc);
        el.classList.add('bad');
        setTimeout(function () { el.classList.remove('bad'); }, 500);
      });
      K.hud();
    },
    hint: function () {
      if (G.state !== 'play') return;
      const i = G.duels.findIndex(function (d, k) { return !d.done && !this.hinted[k]; }, this);
      if (i === -1) { FX.toast(t('wsNoHint')); return; }
      this.hinted[i] = true;
      this.hints++;
      Sound.click();
      const el = this.cell(G.duels[i].cells[0]);
      el.classList.add('hint');
      this.drawClues();
      K.hud();
    },
    status: function () { return '💡 ' + this.hints + ' · ❌ ' + this.misses; },
    countText: function () { return '🔎 ' + G.di + '/' + G.duels.length; },
    promptText: function () { return G.deck === 'spell' ? t('wsPromptSpell') : t('wsPromptWords'); },
    result: function () {
      const n = G.duels.length;
      const win = G.di >= n;
      const stars = win ? (this.hints === 0 && this.misses <= 2 ? 3 : this.hints <= 1 && this.misses <= 6 ? 2 : 1) : (G.di >= n / 2 ? 1 : 0);
      const self = this;
      return {
        win: win, stars: stars, hearts: 0,
        mistakes: G.duels.filter(function (d, i) { return !d.done || self.hinted[i]; })
      };
    },
    debugResolve: function (ok) {
      const d = G.duels.filter(function (x) { return !x.done; })[0];
      if (!d) return;
      if (ok) this.tryLine(d.cells[0], d.cells[d.cells.length - 1]);
      else {
        /* twee cellen die samen geen woord zijn */
        const a = [0, 0], b = [0, 1];
        this.tryLine(a, b);
      }
    }
  };

  Arcade.register({
    id: 'wordsearch', emoji: '🔎', hue: 205, nl: 'Woordzoeker', en: 'Word Search', cat: 'puzzle', kind: 'dom', hearts: 0,
    decks: ['words', 'spell'],
    descNl: 'Zoek de verstopte woorden. De aanwijzing is de betekenis, of het woord fout gespeld!',
    descEn: 'Find the hidden words. The clue is the meaning, or the word spelled wrong!',
    howNl: 'Bedenk bij elke aanwijzing welk woord het is, en zoek het in het letterveld. Veeg over de letters of tik op de eerste en de laatste letter. Vast? Een 💡 hint laat de eerste letter zien.',
    howEn: 'For every clue, work out which word it is and find it in the grid. Swipe across the letters or tap the first and the last letter. Stuck? A 💡 hint shows the first letter.',
    goalNl: '🔎 Welk woord is het? Zoek het in het veld', goalEn: '🔎 Which word is it? Find it in the grid'
  }, Search);
})();
