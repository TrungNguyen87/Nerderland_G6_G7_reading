/* =====================================================================
   De speelhal: spelletjes waarin je stiekem oefent.

   De meeste spellen zijn een ronde van 15 "duels": twee woorden, één goed
   en één fout. Bij Flappy Uil vlieg je door het goede poortje, bij
   Springheld spring je naar het goede blok (of blijf je laag), bij
   Woordregen vang je het goede woord met je emmer. Nieuwere spellen staan
   elk in een eigen bestand in js/games/ en melden zich hier aan met
   Arcade.register(); ze gebruiken dezelfde motor (Arcade.kit).

   De duels komen uit de bestaande data:
     - Spelling: de pick-, fill- en error-opdrachten uit de spellingsets
       (woorden die het kind eerder fout had, komen vaker langs)
     - Woordbetekenis: de moeilijke woorden uit de verhalen, met hun uitleg
       (woorden uit verhalen die het kind gelezen heeft, gaan voor)
     - Spreekwoorden: data/idioms.js (alleen voor spellen met veel ruimte
       voor tekst, zoals de puzzels en de kasteelverdediging)

   Elk spel heeft drie levels: groep 6, groep 7 en groep 8. Een hoger level
   neemt moeilijkere woorden (uit de moeilijkere spellingsets en verhalen),
   gaat iets sneller en geeft meer punten. ⭐ opent het volgende level; ⭐⭐
   geeft een diploma en zet het level op slot (zie js/ladder.js), zodat een
   kind dat het al kan niet de makkelijke versie blijft spelen.

   Een spel kost één speelkaartje 🎟️ (zie js/rewards.js). Kaartjes verdien
   je met lezen en spelling, dus de speelhal is een beloning voor lezen en
   geen vervanging ervan. XP en munten zijn hier bewust klein.
   ===================================================================== */
'use strict';

const Arcade = (function () {

  const ROUND = 15;
  const HEARTS = 3;
  const MAXLEN = 18;   /* langere woorden passen niet in een poortje */
  const TOP = 3;

  /* de drie levels van elk spel: moeilijkere woorden, iets sneller, meer punten */
  const LEVELS = [
    { lv: 1, stars: '⭐',   speed: 1,    pts: 1 },
    { lv: 2, stars: '⭐⭐', speed: 1.1,  pts: 1.5 },
    { lv: 3, stars: '👑',   speed: 1.2,  pts: 2 }
  ];
  function levelDef(lv) { return LEVELS[Math.max(1, Math.min(TOP, lv || 1)) - 1]; }
  function gradeOf(lv) { return lv === 1 ? t('grade6') : lv === 2 ? t('grade7') : t('grade8'); }
  function levelName(lv) { return levelDef(lv).stars + ' ' + t('arcadeLevel') + ' ' + lv + ' · ' + gradeOf(lv); }

  /* de kopjes in het menu */
  const CATS = [
    { id: 'arcade',    emoji: '🕹️', nl: 'Arcade',              en: 'Arcade' },
    { id: 'adventure', emoji: '🧗', nl: 'Avontuur & platform', en: 'Adventure & platform' },
    { id: 'puzzle',    emoji: '🧩', nl: 'Puzzels',             en: 'Puzzles' },
    { id: 'strategy',  emoji: '♟️', nl: 'Strategie',           en: 'Strategy' }
  ];

  const GAMES = [
    { id: 'flappy', emoji: '🦉', hue: 200, nl: 'Flappy Uil', en: 'Flappy Owl', cat: 'arcade', kind: 'canvas', decks: ['spell', 'words'],
      descNl: 'Tik om te fladderen. Vlieg door het poortje met het goede woord!',
      descEn: 'Tap to flap. Fly through the gate with the right word!',
      howNl: 'Tik, klik of druk op spatie om omhoog te fladderen. Vlieg door het poortje met het goede woord. Een muur of de grond kost een hartje.',
      howEn: 'Tap, click or press space to flap up. Fly through the gate with the right word. A wall or the ground costs a heart.' },
    { id: 'runner', emoji: '🏃', hue: 130, nl: 'Springheld', en: 'Jump Hero', cat: 'adventure', kind: 'canvas', decks: ['spell', 'words'],
      descNl: 'Spring naar het hoge blok of blijf laag. Pak het goede woord!',
      descEn: 'Jump to the high block or stay low. Grab the right word!',
      howNl: 'Je held rent vanzelf. Tik of druk op spatie om te springen. Staat het goede woord hoog? Spring! Staat het laag? Blijf rennen. Spring over de slakken!',
      howEn: 'Your hero runs by itself. Tap or press space to jump. Is the right word up high? Jump! Is it low? Keep running. Jump over the snails!' },
    { id: 'rain', emoji: '☔', hue: 265, nl: 'Woordregen', en: 'Word Rain', cat: 'arcade', kind: 'canvas', decks: ['spell', 'words'],
      descNl: 'Schuif je emmer en vang alleen de goede woorden.',
      descEn: 'Slide your bucket and catch only the right words.',
      howNl: 'Schuif met je vinger of muis, of gebruik de pijltjestoetsen. Vang het goede woord. Een fout woord in je emmer kost een hartje.',
      howEn: 'Slide with your finger or mouse, or use the arrow keys. Catch the right word. A wrong word in your bucket costs a heart.' }
  ];
  const DECKS = [
    { id: 'spell', emoji: '✍️', nl: 'Spelling', en: 'Spelling' },
    { id: 'words', emoji: '📖', nl: 'Woordbetekenis', en: 'Word meaning' },
    { id: 'idiom', emoji: '💬', nl: 'Spreekwoorden', en: 'Sayings' }
  ];

  function gameById(id) { return GAMES.filter(function (g) { return g.id === id; })[0]; }
  function deckById(id) { return DECKS.filter(function (d) { return d.id === id; })[0]; }

  /* het stapeltje dat dit spel echt gebruikt: de keuze van het kind, of het
     eerste stapeltje dat het spel wel kan (spreekwoorden passen niet in een
     poortje, zinnen met een fout zijn altijd spelling) */
  function deckFor(g) {
    const want = (Store.player && Store.player.arcadeDeck) || 'spell';
    return g.decks.indexOf(want) !== -1 ? want : g.decks[0];
  }

  /* =====================================================================
     1. De duels
     ===================================================================== */
  function plain(s) { return String(s || '').replace(/<[^>]+>/g, ''); }
  /* leestekens aan de rand van een woord uit een zin weghalen */
  function bare(w) { return String(w || '').replace(/^[„"“(]+/, '').replace(/[.,!?;:"”)]+$/, ''); }
  function fits(w) { return !!w && w.length <= MAXLEN && w.indexOf('<') === -1; }
  function pick(list) { return list[Math.floor(Math.random() * list.length)]; }

  /* welk level hoort bij een spellingset of een verhaal? */
  function setLv(set) { return set.grade === 8 ? 3 : set.level <= 1 ? 1 : 2; }
  function storyLv(s) { return s.level <= 2 ? 1 : s.level <= 4 ? 2 : 3; }

  /* eerst wat bij dit level hoort; te weinig? dan aanvullen met het
     dichtstbijzijnde level, zodat een ronde nooit te kort is */
  function atLevel(pool, lv, min) {
    let out = pool.filter(function (d) { return d.lv === lv; });
    if (out.length < min) {
      const rest = pool.filter(function (d) { return d.lv !== lv; })
        .sort(function (a, b) { return Math.abs(a.lv - lv) - Math.abs(b.lv - lv); });
      out = out.concat(rest.slice(0, min - out.length));
    }
    return out;
  }

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
        out.push({ right: right, wrongs: wrongs, prompt: prompt, why: it.why || null, lv: setLv(set) });
      });
    });
    spellCache = out;
    return out;
  }

  /* Zinnen met precies één spelfout, voor Blokbonk: de error-opdrachten, en
     de pick-opdrachten met het foute woord in de zin gezet */
  let sentCache = null;
  function sentencePool() {
    if (sentCache) return sentCache;
    const out = [];
    const seen = {};
    const split = function (w) {
      const m = String(w).match(/^([„"“(]*)(.*?)([.,!?;:"”)]*)$/);
      return m ? { lead: m[1], core: m[2], tail: m[3] } : { lead: '', core: w, tail: '' };
    };
    (window.SPELL_SETS || []).forEach(function (set) {
      set.items.forEach(function (it) {
        let words = null, err = -1, right = null;
        if (it.type === 'error') {
          words = it.words.slice();
          err = it.answer;
          right = bare(it.fix);
        } else if (it.type === 'pick' && !it.whole && it.sentence && typeof it.sentence.nl === 'string') {
          const toks = it.sentence.nl.trim().split(/\s+/);
          const holes = toks.filter(function (w) { return w.indexOf('___') !== -1; });
          const good = String(it.options[it.answer]).trim();
          const bad = it.options.filter(function (o, i) { return i !== it.answer; }).map(function (o) { return String(o).trim(); })[0];
          if (holes.length !== 1 || !bad || /\s/.test(good) || /\s/.test(bad)) return;
          err = toks.findIndex(function (w) { return w.indexOf('___') !== -1; });
          words = toks.map(function (w, i) { return i === err ? w.replace('___', bad) : w; });
          right = good;
        }
        if (!words || err < 0 || words.length < 3 || words.length > 13) return;
        if (words.some(function (w) { return w.length > 22 || w.indexOf('<') !== -1; })) return;
        const wrongCore = split(words[err]).core;
        if (!wrongCore || wrongCore === right) return;
        const key = words.join(' ');
        if (seen[key]) return;
        seen[key] = 1;
        const sp = split(words[err]);
        out.push({ words: words, err: err, right: right, wrongs: [wrongCore], fixShown: sp.lead + right + sp.tail,
          why: it.why || null, lv: setLv(set), sentence: true });
      });
    });
    sentCache = out;
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
        out.push({ word: w.nl, def: { nl: w.defNl, en: w.defEn }, story: s.id, lv: storyLv(s) });
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

  function idiomDuels() {
    const all = window.IDIOMS || [];
    return all.map(function (it) {
      const other = pick(all.filter(function (x) { return x !== it; }));
      return { right: it.nl, wrongs: [other.nl], prompt: { nl: it.meaningNl, en: it.meaningEn }, why: null, vocab: true, idiom: true };
    });
  }

  function mk(d) {
    return { right: d.right, wrong: pick(d.wrongs), prompt: d.prompt, why: d.why, vocab: !!d.vocab, idiom: !!d.idiom,
      words: d.words, err: d.err, fixShown: d.fixShown, sentence: !!d.sentence, done: false, how: null };
  }

  function buildRound(deck, lv, n) {
    n = n || ROUND;
    let list = [];
    if (deck === 'idiom') {
      list = shuffle(idiomDuels()).slice(0, n);
    } else if (deck === 'words') {
      const all = wordPool();
      const pool = atLevel(all, lv, n);
      const best = Store.player.best || {};
      const mine = shuffle(pool.filter(function (w) { return best[w.story]; }));
      const rest = shuffle(pool.filter(function (w) { return !best[w.story]; }));
      /* woorden uit gelezen verhalen gaan voor, maar vullen nooit alles */
      const lead = Math.ceil(n * 2 / 3);
      list = mine.slice(0, lead).concat(rest, mine.slice(lead)).slice(0, n)
        .map(function (w) { return vocabDuel(w, all); });
    } else {
      const pool = atLevel(spellPool(), lv, n);
      /* woorden die dit kind eerder fout spelde komen vaker terug */
      const missed = {};
      Stats.spellMistakes().forEach(function (m) { missed[bare(m.word)] = 1; });
      const mine = shuffle(pool.filter(function (d) { return missed[d.right]; }));
      const rest = shuffle(pool.filter(function (d) { return !missed[d.right]; }));
      const seen = {};
      mine.slice(0, 5).concat(rest, mine.slice(5)).forEach(function (d) {
        if (list.length < n && !seen[d.right]) { seen[d.right] = 1; list.push(d); }
      });
    }
    return shuffle(list).map(mk);
  }

  function sentenceRound(lv, n) {
    const pool = atLevel(sentencePool(), lv, n || ROUND);
    return shuffle(pool).slice(0, n || ROUND).map(mk);
  }

  /* paren voor het memoryspel: woord ↔ betekenis, of spreekwoord ↔ betekenis */
  function pairs(deck, lv, n) {
    if (deck === 'idiom') {
      return shuffle((window.IDIOMS || []).slice()).slice(0, n).map(function (it) {
        return { id: 'i:' + it.id, a: it.nl, b: { nl: it.meaningNl, en: it.meaningEn } };
      });
    }
    const seenDef = {};
    const out = [];
    shuffle(atLevel(wordPool(), lv, n * 2)).forEach(function (w) {
      if (out.length >= n || seenDef[w.def.nl]) return;
      seenDef[w.def.nl] = 1;
      out.push({ id: 'w:' + w.word, a: w.word, b: w.def });
    });
    return out;
  }

  /* woorden voor de woordzoeker: alleen letters, niet te lang */
  function searchWords(deck, lv, n, maxLen) {
    const ok = function (w) { return /^[A-Za-zÀ-ÿ]+$/.test(w) && w.length >= 3 && w.length <= maxLen; };
    const out = [];
    const seen = {};
    if (deck === 'spell') {
      shuffle(atLevel(spellPool(), lv, 40)).forEach(function (d) {
        const w = d.right, wrong = d.wrongs[0];
        /* alleen een hoofdletter verschil? Dat zie je niet in een veld met hoofdletters */
        if (out.length >= n || !ok(w) || !/^[A-Za-zÀ-ÿ]+$/.test(wrong) || seen[w.toLowerCase()] ||
            w.toLowerCase() === wrong.toLowerCase()) return;
        seen[w.toLowerCase()] = 1;
        out.push({ word: w, clue: { nl: '✗ ' + wrong, en: '✗ ' + wrong }, wrong: wrong, why: d.why, spell: true });
      });
    } else {
      shuffle(atLevel(wordPool(), lv, 40)).forEach(function (w) {
        if (out.length >= n || !ok(w.word) || seen[w.word.toLowerCase()]) return;
        seen[w.word.toLowerCase()] = 1;
        out.push({ word: w.word, clue: w.def, why: null });
      });
    }
    return out;
  }

  /* =====================================================================
     2. De spelmotor: één canvas, één lus, veel spellen
     ===================================================================== */
  const G = {
    id: null, lv: 1, deck: 'spell', duels: [], di: 0, score: 0, correct: 0, hearts: HEARTS, maxHearts: HEARTS, combo: 0,
    mistakes: [], state: 'idle', frames: 0, t: 0, raf: 0, last: 0,
    W: 600, H: 360, dpr: 1, game: null, pops: [], shake: 0, last_result: null, asked: 0, best0: 0, recordPopped: false
  };
  let canvas = null, ctx = null;
  const keys = { left: false, right: false };

  function spd() { return levelDef(G.lv).speed; }

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
  /* lettergrootte zodat een woord in een vak van maxW past */
  function fitFont(text, maxW, px, min) {
    let size = px;
    font(size);
    while (size > (min || 11) && ctx.measureText(text).width > maxW) { size -= 1; font(size); }
    return size;
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
    /* bij het starten meteen één fladder, anders valt de uil direct */
    begin: function () { this.action(); },
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

      const speed = (118 + G.di * 3) * spd();
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

      const speed = (185 + G.di * 3) * spd();
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
          this.drops.push({ di: di, right: (k === 0) === rightFirst, x: G.W * this.lanes[lanes[k]], y: -26, vy: (64 + di * 4.5) * spd(), fade: 0, caught: false });
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

  /* een nieuw spel meldt zich aan vanuit js/games/*.js */
  function register(meta, mod) {
    if (gameById(meta.id)) return;
    meta.kind = meta.kind || 'canvas';
    meta.decks = meta.decks || ['spell', 'words'];
    GAMES.push(meta);
    MODULES[meta.id] = mod;
  }

  /* =====================================================================
     6. Punten, hartjes en het einde van een ronde
     ===================================================================== */
  function points() { return Math.round((10 + Math.min(G.combo - 1, 5) * 2) * levelDef(G.lv).pts); }

  /* halverwege je oude record voorbij? dan meteen even juichen */
  function checkRecord() {
    if (G.recordPopped || G.best0 <= 0 || G.score <= G.best0) return;
    G.recordPopped = true;
    pop('🏅 ' + t('arcadeRecordPop'), true, G.W / 2, G.H * 0.3);
    Sound.star();
    FX.burst(40);
  }

  function resolve(i, how, x, y) {
    const d = G.duels[i];
    if (!d || d.done || G.state !== 'play') return;
    d.done = true;
    d.how = how;
    G.di = G.duels.filter(function (q) { return q.done; }).length;
    if (how === 'ok') {
      G.correct++;
      G.combo++;
      const pts = points();
      G.score += pts;
      Sound.correct();
      pop('+' + pts, true, x, y);
      if ([3, 5, 10, 15].indexOf(G.combo) !== -1) FX.combo(G.combo);
      feedback('✅ ' + tRandom('praise'), 'good');
      checkRecord();
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

  /* voor spellen met een vragenpaneel (zoals de kasteelverdediging): een
     antwoord telt mee, maar de ronde eindigt niet vanzelf */
  function answer(d, ok) {
    if (!d || d.done || G.state !== 'play') return 0;
    d.done = true;
    d.how = ok ? 'ok' : 'wrong';
    G.asked++;
    let pts = 0;
    if (ok) {
      G.correct++;
      G.combo++;
      pts = points();
      G.score += pts;
      Sound.correct();
      if ([3, 5, 10, 15].indexOf(G.combo) !== -1) FX.combo(G.combo);
      feedback('✅ ' + tRandom('praise'), 'good');
      checkRecord();
    } else {
      G.combo = 0;
      G.mistakes.push(d);
      Sound.wrong();
      feedback('❌ ' + t('arcadeRightWas') + ' ' + d.right, 'bad');
    }
    hud();
    return pts;
  }

  /* extra punten voor iets anders dan een woord (een checkpoint, een kever) */
  function bonus(pts, text, x, y) {
    if (G.state !== 'play') return;
    pts = Math.round(pts * levelDef(G.lv).pts);
    G.score += pts;
    pop('+' + pts + (text ? ' ' + text : ''), true, x, y);
    checkRecord();
    hud();
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
    if (d.idiom) return t('arcadeMeansIdiom') + ' “' + L(d.prompt) + '”';
    if (d.vocab) return t('arcadeMeans') + ' “' + L(d.prompt) + '”';
    if (d.prompt) return plain(L(d.prompt));
    return t('arcadeWhich');
  }

  function hud() {
    const g = gameById(G.id);
    if (!g) return;
    const m = G.game || {};
    $('arc-title').textContent = g.emoji + ' ' + L(g);
    $('arc-level').textContent = levelDef(G.lv).stars + ' ' + t('arcadeLevel') + ' ' + G.lv;
    $('arc-hearts').textContent = m.status ? m.status()
      : '❤️'.repeat(G.hearts) + '🤍'.repeat(Math.max(0, G.maxHearts - G.hearts));
    $('arc-score').textContent = G.score;
    $('arc-count').textContent = m.countText ? m.countText() : Math.min(G.di + 1, G.duels.length) + '/' + G.duels.length;
    $('arc-prompt').textContent = m.promptText ? m.promptText() : promptText(current());
    $('arc-goal').textContent = G.id === 'flappy' ? t('arcadeGoalFlappy') : G.id === 'runner' ? t('arcadeGoalRunner')
      : G.id === 'rain' ? t('arcadeGoalRain') : L({ nl: g.goalNl, en: g.goalEn });
    $('arc-start-title').textContent = g.emoji + ' ' + L(g);
    $('arc-start-how').textContent = window.LANG === 'nl' ? g.howNl : g.howEn;
    $('arc-start-level').textContent = levelName(G.lv);
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
  /* het level waarop dit spel nu gespeeld wordt: de keuze van het kind als
     die mag, anders het hoogste open level zonder diploma */
  function selectedLevel(id) {
    const sel = (Store.player.gameSel || {})[id];
    if (sel && Ladder.gameUnlocked(id, sel) && !Ladder.gameLocked(id, sel)) return sel;
    return Ladder.gameCurrent(id);
  }

  function start(id, lvWanted) {
    const g = gameById(id);
    if (!g) return;
    const lv = lvWanted || selectedLevel(id);
    if (!Ladder.gameUnlocked(id, lv)) { FX.toast(t('arcadeLevelShut').replace('{n}', lv - 1), 3000); Sound.wrong(); return; }
    if (Ladder.gameLocked(id, lv)) { FX.toast(t('arcadeLevelDone').replace('{n}', lv), 3200); Sound.star(); return; }
    if (!Rewards.spendTicket()) {
      FX.toast(t('arcadeNoTickets'), 3600);
      Sound.wrong();
      return;
    }
    const p = Store.player;
    G.id = id;
    G.lv = lv;
    G.deck = deckFor(g);
    G.maxHearts = g.hearts === undefined ? HEARTS : g.hearts;
    G.di = 0; G.score = 0; G.correct = 0; G.hearts = G.maxHearts; G.combo = 0; G.asked = 0;
    G.mistakes = []; G.pops = []; G.shake = 0; G.t = 0; G.frames = 0;
    G.best0 = (p.arcadeBest || {})[id] || 0;
    G.recordPopped = false;
    G.state = 'ready';
    G.run = (G.run || 0) + 1;
    G.game = MODULES[id];
    G.duels = G.game.makeDuels ? G.game.makeDuels(G.deck, lv) : buildRound(G.deck, lv);

    setHue(g.hue, 'default');
    show('arcade');
    const dom = g.kind === 'dom';
    $('arc-stage').classList.toggle('hidden', dom);
    $('arc-dom').classList.toggle('hidden', !dom);
    $('arc-panel').classList.toggle('hidden', !g.panel);
    $('arc-prompt').classList.toggle('hidden', !!g.noPrompt);
    $('arc-dom').innerHTML = '';
    $('arc-panel').innerHTML = '';
    $('arc-card').className = 'card arc-card arc-' + id;
    if (!dom) resize();
    G.game.init($('arc-dom'), $('arc-panel'));
    $('arc-start').classList.remove('hidden');
    $('arc-feedback').className = 'arc-feedback';
    hud();
    updateHUD();
    Store.log('arcade_start', { session: S.sessionId, game: id, level: lv, deck: G.deck, lang: window.LANG });
    if (!dom) startLoop();
  }

  function begin() {
    if (G.state !== 'ready') return;
    G.state = 'play';
    $('arc-start').classList.add('hidden');
    Sound.click();
    if (G.game.begin) G.game.begin();
    hud();
  }

  function action() {
    if (G.state === 'ready') { begin(); return; }
    if (G.game && G.game.action) G.game.action();
  }

  /* hoeveel sterren? 15/15 en nog hartjes = ⭐⭐⭐, 12 goed en gehaald = ⭐⭐,
     8 goed = ⭐. Spellen die anders tellen (puzzels) geven zelf sterren. */
  function defaultStars(r) {
    const of = r.of || G.duels.length || ROUND;
    if (r.win && r.correct >= of) return 3;
    if (r.win && r.correct >= Math.ceil(of * 0.8)) return 2;
    if (r.correct >= Math.ceil(of * 0.5)) return 1;
    return 0;
  }

  function finish() {
    stopLoop();
    G.state = 'done';
    const base = {
      id: G.id, lv: G.lv, score: G.score, correct: G.correct, total: G.di, of: G.duels.length, hearts: G.hearts,
      mistakes: G.mistakes.slice(), win: G.hearts > 0 && G.di >= G.duels.length
    };
    const r = Object.assign(base, G.game && G.game.result ? G.game.result() : {});
    if (r.stars === undefined) r.stars = defaultStars(r);
    complete(r);
  }

  function complete(r) {
    const p = Store.player;
    const xp = r.correct * (2 + r.lv);
    const coinsBefore = p.coins || 0;
    if (xp) addXP(xp);
    addCoins(Math.floor(r.correct / 5) + (r.win ? r.lv - 1 : 0), 'arcade:' + r.id);
    const coins = (p.coins || 0) - coinsBefore;
    if (!p.arcadeBest || typeof p.arcadeBest !== 'object') p.arcadeBest = {};
    const record = r.score > 0 && r.score > (p.arcadeBest[r.id] || 0);
    if (record) p.arcadeBest[r.id] = r.score;
    p.arcadeTop = Math.max(p.arcadeTop || 0, r.correct);
    p.arcadePlays = (p.arcadePlays || 0) + 1;

    /* per spel en per level: sterren, record en hoe vaak gespeeld */
    if (!p.games || typeof p.games !== 'object') p.games = {};
    if (!p.games[r.id]) p.games[r.id] = {};
    const prev = p.games[r.id][r.lv] || { stars: 0, best: 0, plays: 0 };
    const newLevel = r.lv < TOP && r.stars >= 1 && !(prev.stars >= 1);
    p.games[r.id][r.lv] = { stars: Math.max(prev.stars || 0, r.stars), best: Math.max(prev.best || 0, r.score), plays: (prev.plays || 0) + 1, at: Date.now() };
    if (newLevel) { if (!p.gameSel) p.gameSel = {}; p.gameSel[r.id] = r.lv + 1; }
    Store.save();
    Store.log('arcade_done', {
      session: S.sessionId, game: r.id, level: r.lv, deck: G.deck, score: r.score, correct: r.correct,
      total: r.total, hearts: r.hearts, stars: r.stars,
      missed: r.mistakes.map(function (d) { return d.right; }).join(', '), lang: window.LANG
    });
    if (r.total >= 3 || r.correct >= 3) { Rewards.track('arcade'); Rewards.earn('arcade'); }
    const diplomas = Ladder.checkGame(r.id, r.lv);
    const badges = checkBadges({});
    G.last_result = Object.assign({}, r, {
      xp: xp, coins: coins, record: record, best: p.arcadeBest[r.id] || 0, badges: badges,
      newLevel: newLevel, diplomas: diplomas
    });
    renderResult();
    setHue(defaultHue(), 'default');
    show('arcade-result');
    if (r.win) { FX.burst(160); Sound.finish(); }
    else if (r.correct) { FX.burst(60); Sound.star(); }
    Ladder.present(diplomas);
  }

  function quit() {
    Sound.click();
    if (G.state === 'ready' && G.di === 0 && !G.asked) {
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
    $('arr-emoji').textContent = r.win ? '🏆' : (r.stars >= 1 ? '🌟' : g.emoji);
    $('arr-title').textContent = r.win ? t('arcadeWin') : t('arcadeOver');
    const sub = r.record ? t('arcadeRecord') : (r.win ? t('arcadeWinSub') : t('arcadeOverSub'));
    /* een spel kan er een eigen regel bij zetten (plaats in de race, ...);
       als functie, zodat een taalwissel hem meevertaalt */
    const note = typeof r.note === 'function' ? r.note() : '';
    /* nog geen ⭐⭐? zeggen wat dat oplevert, zodat het een doel wordt */
    const tip = r.stars < 2 && r.lv < TOP && !Ladder.gameGraduated(r.id, r.lv) ? ' ' + t('arcadeTwoStars') : '';
    $('arr-sub').textContent = (note ? note + ' ' : '') + sub + tip;
    const st = $('arr-stars');
    st.innerHTML = '';
    for (let i = 0; i < 3; i++) {
      const s = document.createElement('span');
      s.textContent = i < r.stars ? '⭐' : '☆';
      s.style.animationDelay = (i * 0.22) + 's';
      st.appendChild(s);
    }
    $('arr-level').textContent = L(g) + ' · ' + levelName(r.lv) +
      (r.newLevel ? ' · 🔓 ' + t('arcadeNewLevel').replace('{n}', r.lv + 1) : '');
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
        row.innerHTML = '<b>' + escHtml(d.right) + '</b>' + (d.wrong ? ' <s class="arr-wrong">' + escHtml(d.wrong) + '</s>' : '') +
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
    /* level met diploma? dan geen "nog een keer" maar meteen het volgende */
    const lockedNow = Ladder.gameLocked(r.id, r.lv);
    const nextOk = r.lv < TOP && Ladder.gameUnlocked(r.id, r.lv + 1) && !Ladder.gameLocked(r.id, r.lv + 1);
    $('btn-arc-again').textContent = t('arcadeAgain') + ' (🎟️ 1)';
    $('btn-arc-again').classList.toggle('hidden', lockedNow);
    $('btn-arc-next').textContent = t('arcadeNextLevel').replace('{n}', r.lv + 1) + ' (🎟️ 1)';
    $('btn-arc-next').classList.toggle('hidden', !nextOk);
    $('btn-arc-menu').textContent = t('arcadeMenu');
    Rewards.renderQuestStrip($('arr-quests'));
  }

  function backToMenu() {
    setHue(defaultHue(), 'default');
    S.mode = 'play';
    renderWorlds();
    show('worlds');
  }

  /* vanaf een diploma: naar het menu, met het volgende level al gekozen */
  function openMenu(id, lv) {
    const p = Store.player;
    if (id && lv) { if (!p.gameSel) p.gameSel = {}; p.gameSel[id] = lv; Store.save(); }
    backToMenu();
    const card = id && document.querySelector('#play-grid .game-card[data-game="' + id + '"]');
    if (card) setTimeout(function () {
      card.scrollIntoView({ behavior: 'smooth', block: 'center' });
      card.classList.add('pulse');
    }, 80);
  }

  /* =====================================================================
     9. Het menu in het tabblad "Spellen"
     ===================================================================== */
  function levelChips(g) {
    const sel = selectedLevel(g.id);
    let html = '<span class="lv-chips">';
    for (let lv = 1; lv <= TOP; lv++) {
      const open = Ladder.gameUnlocked(g.id, lv);
      const grad = Ladder.gameGraduated(g.id, lv);
      const cls = grad ? 'grad' : !open ? 'shut' : lv === sel ? 'sel' : 'open';
      html += '<button class="lv-chip ' + cls + '" data-lv="' + lv + '" title="' + escHtml(levelName(lv)) + '">' +
        (grad ? '🎓' : !open ? '🔒' : levelDef(lv).stars) + '</button>';
    }
    return html + '</span>';
  }

  function chooseLevel(g, lv) {
    if (!Ladder.gameUnlocked(g.id, lv)) { FX.toast(t('arcadeLevelShut').replace('{n}', lv - 1), 3000); Sound.wrong(); return; }
    if (Ladder.gameLocked(g.id, lv)) { FX.toast(t('arcadeLevelDone').replace('{n}', lv), 3200); Sound.star(); return; }
    Sound.click();
    const p = Store.player;
    if (!p.gameSel) p.gameSel = {};
    p.gameSel[g.id] = lv;
    Store.save();
    renderMenu();
  }

  function gameCard(g, tk) {
    const p = Store.player;
    const best = (p.arcadeBest || {})[g.id] || 0;
    const deck = deckById(deckFor(g));
    const lv = selectedLevel(g.id);
    const card = document.createElement('div');
    card.className = 'world-card game-card' + (tk < 1 ? ' no-ticket' : '');
    card.dataset.game = g.id;
    card.setAttribute('role', 'button');
    card.tabIndex = 0;
    card.style.setProperty('--wh', g.hue);
    card.innerHTML =
      '<span class="game-cost">🎟️ 1</span>' +
      '<span class="wc-emoji">' + g.emoji + '</span>' +
      '<h3 class="wc-title">' + L(g) + '</h3>' +
      '<p class="wc-sub">' + (window.LANG === 'nl' ? g.descNl : g.descEn) + '</p>' +
      levelChips(g) +
      '<span class="wc-count"><span>' + levelDef(lv).stars + ' ' + gradeOf(lv) + ' · 🏆 ' + t('arcadeBest') + ' ' + best + '</span><span>' + deck.emoji + ' ' + L(deck) + '</span></span>';
    card.addEventListener('click', function (e) {
      const chip = e.target.closest('.lv-chip');
      if (chip) { e.stopPropagation(); chooseLevel(g, parseInt(chip.dataset.lv, 10)); return; }
      Sound.click();
      start(g.id);
    });
    card.addEventListener('keydown', function (e) {
      if (e.target !== card || (e.key !== 'Enter' && e.key !== ' ')) return;
      e.preventDefault();
      Sound.click();
      start(g.id);
    });
    return card;
  }

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
      '<div class="ticket-text"><b>' + t('ticketsTitle') + '</b><p>' + t('ticketsHow') + '</p><p class="lv-how">' + t('arcadeLevelsHow') + '</p></div>';
    box.appendChild(top);

    const deckRow = document.createElement('div');
    deckRow.className = 'deck-row';
    deckRow.innerHTML = '<span class="deck-label">' + t('arcadeDeck') + '</span>';
    const deck = DECKS.some(function (d) { return d.id === p.arcadeDeck; }) ? p.arcadeDeck : 'spell';
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

    /* eerst de Woordkist: gratis, want dat is gewoon leren */
    const learnHead = document.createElement('h3');
    learnHead.className = 'grid-heading';
    learnHead.textContent = '🗃️ ' + t('arcadeCatLearn');
    box.appendChild(learnHead);
    const learn = document.createElement('div');
    learn.className = 'world-grid';
    box.appendChild(learn);
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
    learn.appendChild(kc);

    CATS.forEach(function (cat) {
      const mine = GAMES.filter(function (g) { return g.cat === cat.id; });
      if (!mine.length) return;
      const h = document.createElement('h3');
      h.className = 'grid-heading';
      h.textContent = cat.emoji + ' ' + L(cat);
      box.appendChild(h);
      const grid = document.createElement('div');
      grid.className = 'world-grid';
      box.appendChild(grid);
      mine.forEach(function (g) { grid.appendChild(gameCard(g, tk)); });
    });
  }

  /* =====================================================================
     10. Knoppen en toetsen
     ===================================================================== */
  function bind() {
    canvas = $('arc-canvas');
    if (!canvas) return;
    ctx = canvas.getContext('2d');
    kit.ctx = ctx;

    const at = function (e) {
      const r = canvas.getBoundingClientRect();
      return { x: e.clientX - r.left, y: e.clientY - r.top };
    };
    canvas.addEventListener('pointerdown', function (e) {
      e.preventDefault();
      if (G.state === 'ready') { begin(); return; }
      const m = G.game;
      if (!m) return;
      const q = at(e);
      if (m.pointer) m.pointer(q.x, q.y, 'down');
      if (m.tap) m.tap(q.x, q.y); else action();
    });
    canvas.addEventListener('pointermove', function (e) {
      const m = G.game;
      if (!m || !m.pointer) return;
      const q = at(e);
      m.pointer(q.x, q.y, 'move');
    });
    $('arc-start').addEventListener('click', function () { begin(); });
    $('btn-arc-quit').addEventListener('click', quit);
    $('btn-arc-again').addEventListener('click', function () {
      Sound.click();
      const r = G.last_result;
      start(r ? r.id : 'flappy', r ? r.lv : undefined);
    });
    $('btn-arc-next').addEventListener('click', function () {
      Sound.click();
      const r = G.last_result;
      if (r) start(r.id, r.lv + 1);
    });
    $('btn-arc-menu').addEventListener('click', function () { Sound.click(); backToMenu(); });

    document.addEventListener('keydown', function (e) {
      if (S.screen !== 'arcade' || e.ctrlKey || e.metaKey || e.altKey) return;
      const g = gameById(G.id);
      const m = G.game;
      if (e.key === 'Escape') { quit(); return; }
      if (G.state !== 'ready' && m && m.key && m.key(e)) { e.preventDefault(); return; }
      /* in een puzzel met knoppen hoort Enter/spatie bij de knop die focus heeft */
      if (g && g.kind === 'dom' && G.state !== 'ready') return;
      if (e.key === ' ' || e.key === 'ArrowUp' || e.key === 'w' || e.key === 'Enter') {
        e.preventDefault();
        if (!e.repeat) action();
      } else if (e.key === 'ArrowLeft' || e.key === 'a') {
        e.preventDefault();
        keys.left = true;
        if (!e.repeat && m && m.left && G.state === 'play') m.left();
      } else if (e.key === 'ArrowRight' || e.key === 'd') {
        e.preventDefault();
        keys.right = true;
        if (!e.repeat && m && m.right && G.state === 'play') m.right();
      }
    });
    document.addEventListener('keyup', function (e) {
      if (e.key === 'ArrowLeft' || e.key === 'a') keys.left = false;
      if (e.key === 'ArrowRight' || e.key === 'd') keys.right = false;
    });
    window.addEventListener('resize', function () {
      if (S.screen !== 'arcade' || !G.game || (gameById(G.id) || {}).kind === 'dom') return;
      /* opnieuw beginnen met de maten is het veiligst; de stand blijft */
      if (resize()) {
        if (G.state === 'ready') G.game.init($('arc-dom'), $('arc-panel'));
        else if (G.game.resized) G.game.resized();
      }
    });
  }
  document.addEventListener('DOMContentLoaded', bind);

  /* =====================================================================
     11. De gereedschapskist voor de spellen in js/games/
     ===================================================================== */
  const kit = {
    G: G, keys: keys, ctx: null, ROUND: ROUND,
    rr: rr, font: font, emoji: emoji, wordTag: wordTag, fitFont: fitFont, sky: sky, clouds: clouds, makeClouds: makeClouds,
    pop: pop, resolve: resolve, answer: answer, bonus: bonus, loseHeart: loseHeart, endSoon: endSoon, feedback: feedback,
    hud: hud, current: current, promptText: promptText, pick: pick, bare: bare, spd: spd,
    level: function () { return levelDef(G.lv); },
    duels: buildRound, sentences: sentenceRound, pairs: pairs, searchWords: searchWords,
    /* leeft deze ronde nog? (voor timers in de puzzels) */
    alive: function (run) { return G.run === run && G.state === 'play' && S.screen === 'arcade'; }
  };

  return {
    games: GAMES,
    levels: LEVELS,
    kit: kit,
    register: register,
    renderMenu: renderMenu,
    renderHud: hud,
    renderResult: renderResult,
    levelName: levelName,
    openMenu: openMenu,
    start: start,
    quit: quit,
    selectedLevel: selectedLevel,
    /* voor de browsertest: de stand bekijken en een duel beslissen zonder
       dat een test pixelprecies hoeft te springen */
    state: function () { return G; },
    debugResolve: function (ok) {
      if (G.state === 'ready') begin();
      const m = G.game;
      if (m && m.debugResolve) { m.debugResolve(ok); return; }
      const d = current();
      if (d) resolve(G.duels.indexOf(d), ok ? 'ok' : 'wrong');
    },
    /* tijd vooruitspoelen zonder te tekenen (voor de kasteelverdediging) */
    debugFast: function (sec) {
      const m = G.game;
      if (!m || !m.update) return;
      const steps = Math.round(sec * 30);
      for (let i = 0; i < steps && (G.state === 'play'); i++) { G.t += 1 / 30; m.update(1 / 30); }
    },
    pools: function () {
      return { spell: spellPool().length, words: wordPool().length, sentences: sentencePool().length,
        byLevel: [1, 2, 3].map(function (lv) {
          return { spell: spellPool().filter(function (d) { return d.lv === lv; }).length,
            words: wordPool().filter(function (d) { return d.lv === lv; }).length,
            sentences: sentencePool().filter(function (d) { return d.lv === lv; }).length };
        }) };
    }
  };
})();
