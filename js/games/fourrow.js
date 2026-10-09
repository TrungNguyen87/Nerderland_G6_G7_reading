/* =====================================================================
   ♟️ Woordvier: vier op een rij tegen de computer.

   Het bekende spel met 7 kolommen en 6 rijen, met een twist: je mag
   alleen een schijf laten vallen als je eerst een vraag goed hebt
   (welk woord is goed geschreven, wat betekent dit woord, welk antwoord
   hoort bij dit raadsel). Een fout antwoord? Dan slaat je beurt over:
   je verliest een zet en de computer is meteen aan de beurt. Zo moet je
   slim zijn én goed lezen.

   De computer rekent vooruit (minimax met alfa-bèta):
     Level 1 (groep 6): kijkt twee zetten vooruit en speelt soms gewoon
       een willekeurige kolom.
     Level 2 (groep 7): vier zetten vooruit, bijna nooit een foutje.
     Level 3 (groep 8): zes zetten vooruit. Dat is geen makkie.
   Het stapeltje (spelling, woordbetekenis, spreekwoorden of raadsels)
   kies je in het menu van de speelhal.
   ===================================================================== */
'use strict';

(function () {
  const K = Arcade.kit;
  const G = K.G;
  const ROWS = 6, COLS = 7;
  const DEPTH = [0, 2, 4, 6];
  const NOISE = [0, 0.3, 0.08, 0];
  const ORDER = [3, 2, 4, 1, 5, 0, 6];

  /* ---------- het bord en de computer ---------- */
  function newBoard() {
    const b = [];
    for (let r = 0; r < ROWS; r++) b.push(new Array(COLS).fill(0));
    return b;
  }
  function dropRow(b, c) {
    for (let r = ROWS - 1; r >= 0; r--) if (!b[r][c]) return r;
    return -1;
  }
  function isFull(b) {
    for (let c = 0; c < COLS; c++) if (!b[0][c]) return false;
    return true;
  }
  /* vier op een rij door deze schijf? geeft de vier vakjes terug */
  function winLine(b, r, c) {
    const p = b[r][c];
    if (!p) return null;
    const dirs = [[0, 1], [1, 0], [1, 1], [1, -1]];
    for (let d = 0; d < dirs.length; d++) {
      const cells = [[r, c]];
      for (let s = 1; s <= 3; s++) {
        const rr = r + dirs[d][0] * s, cc = c + dirs[d][1] * s;
        if (rr < 0 || rr >= ROWS || cc < 0 || cc >= COLS || b[rr][cc] !== p) break;
        cells.push([rr, cc]);
      }
      for (let s = 1; s <= 3; s++) {
        const rr = r - dirs[d][0] * s, cc = c - dirs[d][1] * s;
        if (rr < 0 || rr >= ROWS || cc < 0 || cc >= COLS || b[rr][cc] !== p) break;
        cells.push([rr, cc]);
      }
      if (cells.length >= 4) return cells;
    }
    return null;
  }
  /* hoe goed staat het bord voor `me`? (alle rijtjes van 4 tellen) */
  function evalBoard(b, me) {
    const opp = me === 1 ? 2 : 1;
    let score = 0;
    for (let r = 0; r < ROWS; r++) if (b[r][3] === me) score += 3; else if (b[r][3] === opp) score -= 3;
    const line = function (r, c, dr, dc) {
      let mine = 0, theirs = 0;
      for (let s = 0; s < 4; s++) {
        const v = b[r + dr * s][c + dc * s];
        if (v === me) mine++; else if (v === opp) theirs++;
      }
      if (mine && theirs) return 0;
      if (mine === 3) return 6;
      if (mine === 2) return 2;
      if (theirs === 3) return -7;
      if (theirs === 2) return -2;
      return 0;
    };
    for (let r = 0; r < ROWS; r++) for (let c = 0; c < COLS; c++) {
      if (c + 3 < COLS) score += line(r, c, 0, 1);
      if (r + 3 < ROWS) score += line(r, c, 1, 0);
      if (r + 3 < ROWS && c + 3 < COLS) score += line(r, c, 1, 1);
      if (r + 3 < ROWS && c - 3 >= 0) score += line(r, c, 1, -1);
    }
    return score;
  }
  function search(b, depth, alpha, beta, turn, ai, last) {
    if (last && winLine(b, last.r, last.c)) return last.p === ai ? 100000 + depth : -100000 - depth;
    if (depth === 0) return evalBoard(b, ai);
    const opp = ai === 1 ? 2 : 1;
    let any = false;
    if (turn === ai) {
      let best = -Infinity;
      for (let i = 0; i < COLS; i++) {
        const c = ORDER[i], r = dropRow(b, c);
        if (r < 0) continue;
        any = true;
        b[r][c] = turn;
        const v = search(b, depth - 1, alpha, beta, opp, ai, { r: r, c: c, p: turn });
        b[r][c] = 0;
        if (v > best) best = v;
        if (best > alpha) alpha = best;
        if (alpha >= beta) break;
      }
      return any ? best : 0;
    }
    let best = Infinity;
    for (let i = 0; i < COLS; i++) {
      const c = ORDER[i], r = dropRow(b, c);
      if (r < 0) continue;
      any = true;
      b[r][c] = turn;
      const v = search(b, depth - 1, alpha, beta, ai, ai, { r: r, c: c, p: turn });
      b[r][c] = 0;
      if (v < best) best = v;
      if (best < beta) beta = best;
      if (alpha >= beta) break;
    }
    return any ? best : 0;
  }
  /* de kolom die de computer kiest */
  function aiMove(b, ai, lv) {
    const open = [];
    for (let c = 0; c < COLS; c++) if (dropRow(b, c) >= 0) open.push(c);
    if (Math.random() < NOISE[lv]) {
      /* een slordige zet, maar een winnende zet laat hij nooit liggen */
      for (let i = 0; i < open.length; i++) {
        const r = dropRow(b, open[i]);
        b[r][open[i]] = ai;
        const w = winLine(b, r, open[i]);
        b[r][open[i]] = 0;
        if (w) return open[i];
      }
      return K.pick(open);
    }
    const opp = ai === 1 ? 2 : 1;
    let best = -Infinity, picks = [];
    open.forEach(function (c) {
      const r = dropRow(b, c);
      b[r][c] = ai;
      const v = search(b, DEPTH[lv] - 1, -Infinity, Infinity, opp, ai, { r: r, c: c, p: ai });
      b[r][c] = 0;
      if (v > best) { best = v; picks = [c]; } else if (v === best) picks.push(c);
    });
    return K.pick(picks);
  }

  /* ---------- het spel ---------- */
  const Four = {
    aiMove: aiMove,
    winLine: winLine,
    newBoard: newBoard,

    makeDuels: function (deck, lv) { return K.duels(deck, lv, 24); },

    init: function (dom) {
      this.dom = dom;
      this.board = newBoard();
      this.qi = 0;
      this.phase = 'answer';
      this.moves = 0;
      this.asked = 0;
      this.wrong = 0;
      this.outcome = null;
      this.winCells = null;
      this.lastDrop = null;
      this.opts = null;
      this.render();
      this.ask();
    },

    render: function () {
      const self = this;
      const root = document.createElement('div');
      root.className = 'c4-wrap';
      root.innerHTML =
        '<div class="c4-q"><p class="c4-qtext"></p><div class="c4-opts"></div></div>' +
        '<div class="c4-board" role="group"></div>' +
        '<p class="c4-msg" role="status"></p>';
      this.dom.innerHTML = '';
      this.dom.appendChild(root);
      this.root = root;
      const board = root.querySelector('.c4-board');
      for (let c = 0; c < COLS; c++) {
        const col = document.createElement('button');
        col.className = 'c4-col';
        col.dataset.c = c;
        col.setAttribute('aria-label', t('c4Column') + ' ' + (c + 1));
        for (let r = 0; r < ROWS; r++) {
          const cell = document.createElement('span');
          cell.className = 'c4-cell';
          cell.dataset.r = r;
          col.appendChild(cell);
        }
        col.addEventListener('click', function () { self.dropIn(c); });
        board.appendChild(col);
      }
      this.draw();
    },

    draw: function () {
      const self = this;
      const avatar = Store.player.avatar || '🦸';
      Array.prototype.forEach.call(this.root.querySelectorAll('.c4-col'), function (col) {
        const c = parseInt(col.dataset.c, 10);
        col.classList.toggle('open', self.phase === 'drop' && dropRow(self.board, c) >= 0);
        Array.prototype.forEach.call(col.querySelectorAll('.c4-cell'), function (cell) {
          const r = parseInt(cell.dataset.r, 10);
          const v = self.board[r][c];
          cell.innerHTML = '';
          if (!v) return;
          const disc = document.createElement('i');
          disc.className = 'c4-disc ' + (v === 1 ? 'p1' : 'p2');
          disc.textContent = v === 1 ? avatar : '🤖';
          if (self.lastDrop && self.lastDrop.r === r && self.lastDrop.c === c) {
            disc.classList.add('fall');
            disc.style.setProperty('--fall', (r + 1));
          }
          if (self.winCells && self.winCells.some(function (w) { return w[0] === r && w[1] === c; })) disc.classList.add('win');
          cell.appendChild(disc);
        });
      });
      this.lastDrop = null;      /* de val speelt maar één keer */
    },

    /* ---- de vraag ---- */
    ask: function () {
      if (G.state !== 'play' && G.state !== 'ready') return;
      if (this.qi >= G.duels.length) G.duels = G.duels.concat(K.duels(G.deck, G.lv, 12));
      const d = G.duels[this.qi];
      this.opts = shuffle([d.right, d.wrong]);
      this.phase = 'answer';
      this.drawQuestion();
      this.draw();
    },
    drawQuestion: function () {
      const self = this, d = G.duels[this.qi];
      const q = this.root.querySelector('.c4-q');
      q.classList.toggle('hidden', this.phase === 'over');
      this.root.querySelector('.c4-qtext').textContent = this.phase === 'answer' ? K.promptText(d) : '';
      const box = this.root.querySelector('.c4-opts');
      box.innerHTML = '';
      if (this.phase !== 'answer') { q.classList.add('quiet'); return; }
      q.classList.remove('quiet');
      this.opts.forEach(function (w, i) {
        const b = document.createElement('button');
        b.className = 'c4-opt';
        b.dataset.w = w;
        b.innerHTML = '<kbd>' + (i + 1) + '</kbd><span></span>';
        b.querySelector('span').textContent = w;
        b.addEventListener('click', function () { self.answer(w, b); });
        box.appendChild(b);
      });
    },
    answer: function (w, btn) {
      if (G.state !== 'play' || this.phase !== 'answer') return;
      const d = G.duels[this.qi];
      const ok = w === d.right;
      this.asked++;
      this.qi++;
      K.answer(d, ok);
      if (ok) {
        this.phase = 'drop';
        this.msg('✅ ' + t('c4Pick'), 'good');
        this.drawQuestion();
        this.draw();
      } else {
        this.wrong++;
        this.phase = 'ai';
        this.msg('❌ ' + t('c4Skip').replace('{w}', d.right), 'bad');
        this.drawQuestion();
        this.draw();
        this.aiTurn(1100);
      }
    },

    msg: function (text, kind) {
      const el = this.root && this.root.querySelector('.c4-msg');
      if (!el) return;
      el.textContent = text || '';
      el.className = 'c4-msg' + (kind ? ' ' + kind : '');
    },

    /* ---- zetten ---- */
    place: function (c, who) {
      const r = dropRow(this.board, c);
      if (r < 0) return false;
      this.board[r][c] = who;
      this.lastDrop = { r: r, c: c };
      this.moves++;
      Sound.click();
      const w = winLine(this.board, r, c);
      if (w) { this.winCells = w; this.finish(who === 1 ? 'win' : 'lose'); }
      else if (isFull(this.board)) this.finish('draw');
      this.draw();
      return true;
    },
    dropIn: function (c) {
      if (G.state !== 'play' || this.phase !== 'drop') return;
      if (dropRow(this.board, c) < 0) { Sound.wrong(); this.msg('🚫 ' + t('c4Full'), 'bad'); return; }
      this.phase = 'ai';
      if (!this.place(c, 1)) return;
      if (this.phase === 'over') return;
      this.msg('');
      this.aiTurn(650);
    },
    aiTurn: function (wait) {
      const self = this, run = G.run;
      this.phase = 'ai';
      setTimeout(function () {
        if (!K.alive(run) || self.phase !== 'ai') return;
        const c = aiMove(self.board, 2, G.lv);
        self.place(c, 2);
        if (self.phase === 'over') return;
        if (G.state === 'play') self.ask();
      }, wait);
    },

    finish: function (outcome) {
      this.outcome = outcome;
      this.phase = 'over';
      this.drawQuestion();
      if (outcome === 'win') {
        this.msg('🏆 ' + t('c4Win'), 'good');
        K.bonus(40, '🏆', G.W / 2, 60);
        FX.burst(120);
      } else if (outcome === 'lose') {
        this.msg('🤖 ' + t('c4Lose'), 'bad');
      } else {
        this.msg('🤝 ' + t('c4Draw'), '');
      }
      /* het eindbord even laten zien voor het resultaat komt */
      const run = G.run;
      setTimeout(function () { if (K.alive(run)) K.endSoon(); }, outcome === 'win' ? 1800 : 1500);
    },

    key: function (e) {
      if (G.state !== 'play') return false;
      const n = parseInt(e.key, 10);
      if (isNaN(n)) return false;
      if (this.phase === 'answer' && n >= 1 && n <= 2) {
        const b = this.root.querySelectorAll('.c4-opt')[n - 1];
        if (b) { b.click(); return true; }
      }
      if (this.phase === 'drop' && n >= 1 && n <= COLS) { this.dropIn(n - 1); return true; }
      return false;
    },

    relang: function () { if (this.root) { this.drawQuestion(); if (this.phase === 'drop') this.msg('✅ ' + t('c4Pick'), 'good'); } },

    status: function () { return '❓ ' + (this.asked - this.wrong) + '/' + this.asked; },
    countText: function () { return '♟️ ' + t('c4Move') + ' ' + (Math.floor(this.moves / 2) + 1); },
    promptText: function () {
      return this.phase === 'drop' ? t('c4Pick') : this.phase === 'ai' ? t('c4Wait') : t('c4Prompt');
    },

    result: function () {
      const o = this.outcome;
      const acc = this.asked ? (this.asked - this.wrong) / this.asked : 0;
      let stars = 0;
      if (o === 'win') stars = this.wrong === 0 ? 3 : acc >= 0.75 ? 2 : 1;
      else if (o === 'draw') stars = acc >= 0.8 ? 1 : 0;
      const wrong = this.wrong, asked = this.asked;
      return {
        win: o === 'win', stars: stars, xpMul: o === 'win' ? 2 : 1,
        note: function () { return (o === 'win' ? t('c4ResWin') : o === 'draw' ? t('c4ResDraw') : t('c4ResLose')).replace('{n}', asked - wrong).replace('{total}', asked); }
      };
    },

    /* voor de test */
    debugResolve: function (ok) {
      if (G.state !== 'play') return;
      if (this.phase === 'answer') {
        const d = G.duels[this.qi];
        this.answer(ok ? d.right : d.wrong);
      }
      if (this.phase === 'drop') {
        for (let c = 0; c < COLS; c++) if (dropRow(this.board, c) >= 0) { this.dropIn(c); break; }
      }
    },
    /* de test zet drie schijven van de speler klaar in één kolom: de volgende goede zet wint */
    debugAlmostWin: function () {
      this.board = newBoard();
      for (let r = ROWS - 1; r > ROWS - 4; r--) this.board[r][0] = 1;
      for (let r = ROWS - 1; r > ROWS - 3; r--) this.board[r][6] = 2;
      this.draw();
    }
  };

  Arcade.register({
    id: 'fourrow', emoji: '♟️', hue: 225, nl: 'Woordvier', en: 'Word Four', cat: 'strategy', kind: 'dom', hearts: 0,
    decks: ['spell', 'words', 'idiom', 'riddle'],
    descNl: 'Vier op een rij tegen de computer. Eerst een vraag goed, dan een schijf!',
    descEn: 'Connect Four against the computer. Answer a question first, then drop a disc!',
    howNl: 'Je speelt vier op een rij tegen de computer. Maar eerst moet je een vraag goed beantwoorden: dan mag je een schijf in een kolom laten vallen. Fout? Dan slaat je beurt over. Maak als eerste vier in een rij, recht of schuin!',
    howEn: 'You play Connect Four against the computer. But first you must answer a question: then you may drop a disc into a column. Wrong? Then you skip your turn. Be the first to make four in a row, straight or diagonal!',
    goalNl: '♟️ Beantwoord de vraag, laat een schijf vallen en maak vier op een rij',
    goalEn: '♟️ Answer the question, drop a disc and make four in a row'
  }, Four);
})();
