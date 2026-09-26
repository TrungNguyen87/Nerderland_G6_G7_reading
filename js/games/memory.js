/* =====================================================================
   🧠 Woordmemory: het bekende omdraaispel, maar dan met betekenissen.

   Op tafel liggen kaartjes met een woord (📖) en kaartjes met een
   betekenis (💡). Draai er twee om: horen ze bij elkaar, dan blijven ze
   liggen. Zo leer je een woord en zijn betekenis samen, en onthoud je ook
   waar het lag. Met het stapeltje "Spreekwoorden" zoek je bij een
   spreekwoord wat het betekent. Level 1: 6 paren, level 2: 8, level 3: 10.

   Geen hartjes: sterren komen van zo weinig mogelijk misgrepen.
   ===================================================================== */
'use strict';

(function () {
  const K = Arcade.kit;
  const G = K.G;
  const PAIRS = [0, 6, 8, 10];

  const Memory = {
    makeDuels: function (deck, lv) {
      return K.pairs(deck, lv, PAIRS[lv]).map(function (p) {
        return { right: p.a, wrong: '', prompt: p.b, why: null, vocab: true, idiom: deck === 'idiom', done: false, how: null };
      });
    },
    init: function (dom) {
      this.dom = dom;
      this.open = [];
      this.misses = 0;
      this.moves = 0;
      this.lock = false;
      this.bad = {};
      const cards = [];
      G.duels.forEach(function (d, i) {
        cards.push({ k: i, face: 'word', text: d.right });
        cards.push({ k: i, face: 'def', text: L(d.prompt) });
      });
      this.cards = shuffle(cards);
      this.render();
    },
    render: function () {
      const self = this;
      const grid = document.createElement('div');
      grid.className = 'mem-grid mem-' + this.cards.length;
      this.cards.forEach(function (c, n) {
        const b = document.createElement('button');
        b.className = 'mem-card' + (c.face === 'def' ? ' def' : ' word') + (G.duels[c.k].idiom ? ' idiom' : '');
        b.dataset.k = c.k;
        b.dataset.face = c.face;
        b.dataset.n = n;
        b.innerHTML = '<span class="mem-back">❓</span><span class="mem-front"><small>' + (c.face === 'def' ? '💡' : (G.duels[c.k].idiom ? '💬' : '📖')) +
          '</small><span class="mem-text"></span></span>';
        b.querySelector('.mem-text').textContent = c.text;
        b.addEventListener('click', function () { self.flip(b); });
        grid.appendChild(b);
      });
      this.dom.innerHTML = '';
      this.dom.appendChild(grid);
    },
    flip: function (b) {
      if (G.state !== 'play' || this.lock || b.classList.contains('open') || b.classList.contains('found')) return;
      b.classList.add('open');
      Sound.click();
      this.open.push(b);
      if (this.open.length < 2) return;
      this.moves++;
      const a = this.open[0], c = this.open[1];
      if (a.dataset.k === c.dataset.k && a.dataset.face !== c.dataset.face) {
        a.classList.add('found');
        c.classList.add('found');
        this.open = [];
        K.resolve(parseInt(a.dataset.k, 10), 'ok');
        return;
      }
      this.miss(a, c);
    },
    miss: function (a, c) {
      this.misses++;
      G.combo = 0;
      this.bad[a.dataset.k] = 1;
      this.bad[c.dataset.k] = 1;
      a.classList.add('wrong');
      c.classList.add('wrong');
      Sound.wrong();
      this.lock = true;
      const self = this, run = G.run;
      setTimeout(function () {
        if (G.run !== run) return;
        a.classList.remove('open', 'wrong');
        c.classList.remove('open', 'wrong');
        self.open = [];
        self.lock = false;
      }, 950);
      K.hud();
    },
    status: function () { return '🔄 ' + this.moves + ' · ❌ ' + this.misses; },
    countText: function () { return '🧠 ' + G.di + '/' + G.duels.length; },
    promptText: function () { return G.deck === 'idiom' ? t('memPromptIdiom') : t('memPrompt'); },
    result: function () {
      const n = G.duels.length;
      const win = G.di >= n;
      const stars = win ? (this.misses <= n * 0.5 ? 3 : this.misses <= n * 1.25 ? 2 : 1) : (G.di >= n / 2 ? 1 : 0);
      const self = this;
      const misses = this.misses, moves = this.moves;
      return {
        win: win, stars: stars, hearts: 0,
        mistakes: G.duels.filter(function (d, i) { return self.bad[i] || !d.done; }).slice(0, 8),
        note: function () { return t('memResult').replace('{m}', moves).replace('{x}', misses); }
      };
    },
    /* voor de test: een paar vinden (goed) of twee verkeerde omdraaien (fout) */
    debugResolve: function (ok) {
      const cards = Array.prototype.slice.call(this.dom.querySelectorAll('.mem-card:not(.found)'));
      if (!cards.length) return;
      this.lock = false;
      this.open.forEach(function (b) { b.classList.remove('open', 'wrong'); });
      this.open = [];
      const a = cards[0];
      const c = ok ? cards.filter(function (x) { return x !== a && x.dataset.k === a.dataset.k; })[0]
        : cards.filter(function (x) { return x.dataset.k !== a.dataset.k; })[0];
      if (!c) return;
      this.flip(a);
      this.flip(c);
    }
  };

  Arcade.register({
    id: 'memory', emoji: '🧠', hue: 175, nl: 'Woordmemory', en: 'Word Memory', cat: 'puzzle', kind: 'dom', hearts: 0,
    decks: ['words', 'idiom'],
    descNl: 'Draai twee kaartjes om: zoek bij elk woord de goede betekenis.',
    descEn: 'Turn over two cards: find the right meaning for every word.',
    howNl: 'Tik op twee kaartjes. Een woord 📖 en zijn betekenis 💡 horen bij elkaar: die blijven liggen. Onthoud waar alles ligt: hoe minder misgrepen, hoe meer sterren.',
    howEn: 'Tap two cards. A word 📖 and its meaning 💡 belong together: those stay face up. Remember where everything is: the fewer misses, the more stars.',
    goalNl: '🧠 Zoek de paren: woord + betekenis', goalEn: '🧠 Find the pairs: word + meaning'
  }, Memory);
})();
