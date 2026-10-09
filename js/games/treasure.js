/* =====================================================================
   🗺️ Schatkaart: lees de beschrijving en vind de schat.

   Er is geen pijl op de kaart die de weg wijst, alleen een tekst:
   "Loop drie stappen naar het oosten. Daarna twee naar het zuiden." Jij
   loopt met je held over de kaart en graaft op de plek waar de tekst je
   brengt. Elke kaart wordt vers gemaakt. Het spel voert de beschrijving
   zelf ook uit om te controleren dat de schat er echt ligt.

   Level 1 (groep 6): windrichtingen. "Loop drie stappen naar het oosten."
     "Loop naar het noorden tot je bij de boom komt."
   Level 2 (groep 7): links en rechts, zoals bij een robot die je
     programmeert. "Loop twee stappen vooruit. Draai een kwartslag naar
     links." Er ligt een rivier met één brug: "Steek de brug over."
   Level 3 (groep 8): eerst, daarna, ten slotte. Ook achteruit lopen,
     "Draai tot je naar het oosten kijkt", en een sleutel die je eerst
     moet vinden voordat je de schatkist kunt openen. De sleutel is
     verstopt: je merkt dat je hem gevonden hebt als je erop staat.

   Je mag een zin afstrepen als je hem gedaan hebt (tik erop). Een foute
   graafbeurt kost een hartje; na de eerste keer begin je opnieuw bij de
   start, na de tweede keer zie je de goede route.
   ===================================================================== */
'use strict';

(function () {
  const K = Arcade.kit;
  const G = K.G;
  const MAPS = 4;
  const SIZE = [0, 6, 7, 8];
  const ORDER = ['N', 'E', 'S', 'W'];                 /* met de klok mee */
  const VEC = { N: [0, -1], E: [1, 0], S: [0, 1], W: [-1, 0] };
  const DIRNAME = {
    N: { nl: 'het noorden', en: 'north' }, E: { nl: 'het oosten', en: 'east' },
    S: { nl: 'het zuiden', en: 'south' }, W: { nl: 'het westen', en: 'west' }
  };
  const NUM_NL = ['nul', 'één', 'twee', 'drie', 'vier', 'vijf', 'zes', 'zeven', 'acht'];
  const NUM_EN = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight'];
  const LM = {
    flag: { emoji: '🚩', nl: 'de vlag', en: 'the flag' },
    house: { emoji: '🏠', nl: 'het huisje', en: 'the little house' },
    tree: { emoji: '🌳', nl: 'de boom', en: 'the tree' },
    church: { emoji: '⛪', nl: 'de kerk', en: 'the church' },
    tower: { emoji: '🗼', nl: 'de toren', en: 'the tower' },
    tent: { emoji: '⛺', nl: 'de tent', en: 'the tent' },
    fountain: { emoji: '⛲', nl: 'de fontein', en: 'the fountain' },
    cactus: { emoji: '🌵', nl: 'de cactus', en: 'the cactus' },
    castle: { emoji: '🏰', nl: 'het kasteel', en: 'the castle' }
  };
  const LM_IDS = Object.keys(LM).filter(function (k) { return k !== 'flag'; });

  function rnd(a, b) { return a + Math.floor(Math.random() * (b - a + 1)); }
  function key(x, y) { return x + ',' + y; }
  function turn(d, side) { return ORDER[(ORDER.indexOf(d) + (side === 'L' ? 3 : 1)) % 4]; }
  function opposite(d) { return ORDER[(ORDER.indexOf(d) + 2) % 4]; }
  function stepsNl(n) { return n === 1 ? 'één stap' : NUM_NL[n] + ' stappen'; }
  function stepsEn(n) { return n === 1 ? 'one step' : NUM_EN[n] + ' steps'; }

  /* ---------------------------------------------------------------
     1. Een route bedenken (nog zonder kaart)
     Een route is een lijst opdrachten (ops):
       go    { d, n }      n stappen naar een windrichting      (level 1)
       fwd   { n }         n stappen vooruit                    (level 2+)
       back  { n }         n stappen achteruit                  (level 3)
       turn  { side }      een kwartslag links of rechts
       face  { d }         draai tot je naar d kijkt            (level 3)
       until { lm, n }     loop vooruit tot je bij lm bent (n stappen)
       cross { }           steek de brug over (2 stappen vooruit)
     --------------------------------------------------------------- */
  function applyOp(N, p, op) {
    /* geeft de nieuwe stand en de cellen die je onderweg betreedt, of null buiten de kaart */
    let x = p.x, y = p.y, d = p.d;
    const cells = [];
    const move = function (dir, n) {
      for (let i = 0; i < n; i++) {
        x += VEC[dir][0]; y += VEC[dir][1];
        if (x < 0 || y < 0 || x >= N || y >= N) return false;
        cells.push([x, y]);
      }
      return true;
    };
    let ok = true;
    if (op.k === 'go') ok = move(op.d, op.n);
    else if (op.k === 'fwd' || op.k === 'until') ok = move(d, op.n);
    else if (op.k === 'cross') ok = move(d, 2);
    else if (op.k === 'back') ok = move(opposite(d), op.n);
    else if (op.k === 'turn') d = turn(d, op.side);
    else if (op.k === 'face') d = op.d;
    return ok ? { pose: { x: x, y: y, d: d }, cells: cells } : null;
  }

  function randomRoute(lv) {
    const N = SIZE[lv];
    for (let attempt = 0; attempt < 600; attempt++) {
      const start = { x: rnd(1, N - 2), y: rnd(1, N - 2), d: K.pick(ORDER) };
      let pose = { x: start.x, y: start.y, d: start.d };
      const seen = {};
      seen[key(pose.x, pose.y)] = 1;
      const ops = [];
      const path = [[pose.x, pose.y]];
      const want = lv === 1 ? rnd(2, 3) : lv === 2 ? rnd(5, 6) : rnd(8, 9);
      let last = null, bad = 0;
      while (ops.length < want && bad < 60) {
        let op;
        if (lv === 1) {
          /* altijd een kwartslag verder: oost/west na noord/zuid en andersom */
          const dirs = last ? (last.d === 'N' || last.d === 'S' ? ['E', 'W'] : ['N', 'S']) : ORDER;
          op = { k: 'go', d: K.pick(dirs), n: rnd(1, 4) };
        } else {
          const r = Math.random();
          const lastK = last && last.k;
          if (lastK !== 'turn' && lastK !== 'face' && r < 0.34) op = { k: 'turn', side: Math.random() < 0.5 ? 'L' : 'R' };
          else if (lv === 3 && lastK === 'turn' && r < 0.55) op = { k: 'back', n: rnd(1, 3) };
          else if (lv === 3 && lastK !== 'turn' && lastK !== 'face' && r < 0.5) op = { k: 'face', d: K.pick(ORDER.filter(function (x) { return x !== pose.d && x !== opposite(pose.d); })) };
          else if (lastK === 'fwd') op = { k: 'turn', side: Math.random() < 0.5 ? 'L' : 'R' };
          else op = { k: 'fwd', n: rnd(1, 4) };
        }
        const res = applyOp(N, pose, op);
        let fresh = !!res;
        if (res) res.cells.forEach(function (c) { if (seen[key(c[0], c[1])]) fresh = false; });
        if (!fresh) { bad++; continue; }
        (res.cells).forEach(function (c) { seen[key(c[0], c[1])] = 1; path.push(c); });
        pose = res.pose;
        ops.push(op);
        last = op;
      }
      if (ops.length < want || ops[ops.length - 1].k === 'turn' || ops[ops.length - 1].k === 'face') continue;
      if (Math.abs(pose.x - start.x) + Math.abs(pose.y - start.y) < 3) continue;
      /* twee opdrachten van hetzelfde soort achter elkaar lezen als één: samenvoegen mag niet ontstaan */
      return { N: N, start: start, ops: ops, end: pose, path: path };
    }
    return null;
  }

  /* ---------------------------------------------------------------
     2. De kaart eromheen: rivier, brug, bomen, herkenningspunten
     --------------------------------------------------------------- */
  function dressMap(lv, route) {
    const N = route.N;
    const cells = [];
    for (let y = 0; y < N; y++) { cells.push([]); for (let x = 0; x < N; x++) cells[y].push({ t: 'g', lm: null }); }
    const pathKeys = {};
    route.path.forEach(function (c) { pathKeys[key(c[0], c[1])] = 1; });
    let ops = route.ops.map(function (o) { return Object.assign({}, o); });

    /* a. de rivier (level 2 en 3): precies één brug, waar de route overheen gaat */
    if (lv >= 2) {
      let placed = false;
      /* zoek een "vooruit" met minstens twee stappen, en een plek waar de rivier de route één keer snijdt */
      const poses = [{ x: route.start.x, y: route.start.y, d: route.start.d }];
      let pose = poses[0];
      const candidates = [];
      ops.forEach(function (op, idx) {
        const before = pose;
        const res = applyOp(N, pose, op);
        if (op.k === 'fwd' && op.n >= 2) {
          for (let a = 0; a <= op.n - 2; a++) {
            const bx = before.x + VEC[before.d][0] * (a + 1), by = before.y + VEC[before.d][1] * (a + 1);
            candidates.push({ idx: idx, a: a, bx: bx, by: by, dir: before.d, n: op.n });
          }
        }
        pose = res.pose;
      });
      shuffle(candidates);
      for (let c = 0; c < candidates.length && !placed; c++) {
        const cd = candidates[c];
        const vertical = cd.dir === 'E' || cd.dir === 'W';       /* een rivier die dwars op de looprichting ligt */
        const line = [];
        for (let i = 0; i < N; i++) line.push(vertical ? [cd.bx, i] : [i, cd.by]);
        const onLine = route.path.filter(function (p) { return vertical ? p[0] === cd.bx : p[1] === cd.by; });
        if (onLine.length !== 1) continue;                        /* de route mag de rivier maar één keer raken */
        if (cd.bx < 1 || cd.by < 1 || cd.bx > N - 2 || cd.by > N - 2) continue;
        line.forEach(function (p) { cells[p[1]][p[0]] = { t: 'w', lm: null }; });
        cells[cd.by][cd.bx] = { t: 'b', lm: null };
        /* "vooruit n" wordt: vooruit a, brug over, vooruit rest */
        const rest = cd.n - cd.a - 2;
        const repl = [];
        if (cd.a > 0) repl.push({ k: 'fwd', n: cd.a });
        repl.push({ k: 'cross' });
        if (rest > 0) repl.push({ k: 'fwd', n: rest });
        ops.splice.apply(ops, [cd.idx, 1].concat(repl));
        placed = true;
      }
      if (!placed) return null;
    }

    /* b. de herkenningspunten: de vlag op de start en één op het eind van een "tot je bij ... komt" */
    cells[route.start.y][route.start.x].lm = 'flag';
    const free = function (x, y) { return cells[y][x].t === 'g' && !cells[y][x].lm; };
    const used = { flag: 1 };
    const pickLm = function () {
      const rest = LM_IDS.filter(function (id) { return !used[id]; });
      const id = K.pick(rest);
      used[id] = 1;
      return id;
    };
    /* een opdracht die in een herkenningspunt eindigt: "loop tot je bij de boom komt" */
    let pose = { x: route.start.x, y: route.start.y, d: route.start.d };
    const endsAt = [];
    ops.forEach(function (op, idx) {
      const res = applyOp(N, pose, op);
      if ((op.k === 'go' || op.k === 'fwd') && idx < ops.length - 1) endsAt.push({ idx: idx, x: res.pose.x, y: res.pose.y });
      pose = res.pose;
    });
    shuffle(endsAt);
    const wantUntil = lv === 1 ? 1 : lv === 2 ? 1 : 2;
    let made = 0;
    endsAt.forEach(function (e) {
      if (made >= wantUntil || !free(e.x, e.y)) return;
      const id = pickLm();
      cells[e.y][e.x].lm = id;
      const op = ops[e.idx];
      ops[e.idx] = { k: 'until', n: op.n, d: op.d, lm: id };
      made++;
    });
    /* een paar herkenningspunten erbij als decoratie */
    let extra = lv === 1 ? 2 : 3;
    for (let tries = 0; tries < 80 && extra > 0; tries++) {
      const x = rnd(0, N - 1), y = rnd(0, N - 1);
      if (!free(x, y) || (x === route.end.x && y === route.end.y)) continue;
      cells[y][x].lm = pickLm();
      extra--;
    }
    /* bergen om niet doorheen te lopen (level 2 en 3), nooit op de route */
    if (lv >= 2) {
      let trees = lv === 2 ? rnd(2, 3) : rnd(4, 6);
      for (let tries = 0; tries < 120 && trees > 0; tries++) {
        const x = rnd(0, N - 1), y = rnd(0, N - 1);
        if (!free(x, y) || pathKeys[key(x, y)]) continue;
        cells[y][x] = { t: 't', lm: null };
        trees--;
      }
    }

    /* c. level 3: een verstopte sleutel halverwege de route */
    let keyCell = null, keyAfter = -1;
    if (lv === 3) {
      let p = { x: route.start.x, y: route.start.y, d: route.start.d };
      const stops = [];
      ops.forEach(function (op, idx) {
        const res = applyOp(N, p, op);
        if (idx >= 2 && idx <= ops.length - 3 && (op.k === 'fwd' || op.k === 'until' || op.k === 'back' || op.k === 'cross')) stops.push({ idx: idx, x: res.pose.x, y: res.pose.y });
        p = res.pose;
      });
      if (!stops.length) return null;
      const s = K.pick(stops);
      keyCell = { x: s.x, y: s.y };
      keyAfter = s.idx;
    }
    return { N: N, lv: lv, cells: cells, start: route.start, treasure: { x: route.end.x, y: route.end.y }, ops: ops, key: keyCell, keyAfter: keyAfter, path: route.path };
  }

  /* ---------------------------------------------------------------
     3. De tekst bij een kaart
     --------------------------------------------------------------- */
  function opText(op, lang) {
    const nl = lang === 'nl';
    const lm = op.lm ? LM[op.lm] : null;
    switch (op.k) {
      case 'go': return nl ? 'Loop ' + stepsNl(op.n) + ' naar ' + DIRNAME[op.d].nl + '.' : 'Walk ' + stepsEn(op.n) + ' ' + DIRNAME[op.d].en + '.';
      case 'fwd': return nl ? 'Loop ' + stepsNl(op.n) + ' vooruit.' : 'Walk ' + stepsEn(op.n) + ' forward.';
      case 'back': return nl ? 'Loop ' + stepsNl(op.n) + ' achteruit.' : 'Walk ' + stepsEn(op.n) + ' backwards.';
      case 'turn': return nl ? 'Draai een kwartslag naar ' + (op.side === 'L' ? 'links' : 'rechts') + '.'
        : 'Make a quarter turn to the ' + (op.side === 'L' ? 'left' : 'right') + '.';
      case 'face': return nl ? 'Draai tot je naar ' + DIRNAME[op.d].nl + ' kijkt.' : 'Turn until you face ' + DIRNAME[op.d].en + '.';
      case 'cross': return nl ? 'Steek de brug 🌉 over.' : 'Cross the bridge 🌉.';
      case 'until':
        if (op.d) return nl ? 'Loop naar ' + DIRNAME[op.d].nl + ' tot je bij ' + lm.nl + ' ' + lm.emoji + ' komt.'
          : 'Walk ' + DIRNAME[op.d].en + ' until you reach ' + lm.en + ' ' + lm.emoji + '.';
        return nl ? 'Loop vooruit tot je bij ' + lm.nl + ' ' + lm.emoji + ' komt.' : 'Walk forward until you reach ' + lm.en + ' ' + lm.emoji + '.';
    }
    return '';
  }

  /* een volgorde-woord in de zin: "Loop daarna drie stappen vooruit." */
  function withOrder(text, adv, nl) {
    if (nl) { const i = text.indexOf(' '); return text.slice(0, i) + ' ' + adv + text.slice(i); }
    return adv + ' ' + text.charAt(0).toLowerCase() + text.slice(1);
  }

  /* alle regels van de tekst: { kind: 'note' | 'step', op } en per taal de zin */
  function lines(map) {
    const out = [];
    const lv = map.lv;
    const dirHere = DIRNAME[map.start.d];
    out.push({ kind: 'note', nl: lv === 1 ? 'Je begint bij de vlag 🚩.' : 'Je staat bij de vlag 🚩 en kijkt naar ' + dirHere.nl + '.',
      en: lv === 1 ? 'You start at the flag 🚩.' : 'You are standing at the flag 🚩 and facing ' + dirHere.en + '.' });
    if (lv === 3) out.push({ kind: 'note', nl: 'De schat ligt in een kist met een slot. Haal eerst de sleutel 🗝️.', en: 'The treasure is in a locked chest. First get the key 🗝️.' });
    const advNl = ['daarna', 'vervolgens', 'dan'], advEn = ['Then', 'Next', 'After that'];
    map.ops.forEach(function (op, i) {
      let nl = opText(op, 'nl'), en = opText(op, 'en');
      if (lv === 3) {
        const first = i === 0, last = i === map.ops.length - 1;
        const a = Math.floor(i * 7 % 3);
        nl = withOrder(nl, first ? 'eerst' : last ? 'ten slotte' : advNl[a], true);
        en = withOrder(en, first ? 'First,' : last ? 'Finally,' : advEn[a], false);
      }
      out.push({ kind: 'step', op: i, nl: nl, en: en });
      if (lv === 3 && i === map.keyAfter) {
        out.push({ kind: 'note', nl: 'Hier vind je de sleutel 🗝️. Loop nu met de sleutel verder.', en: 'You find the key 🗝️ here. Now carry on with the key.' });
      }
    });
    out.push({ kind: 'note', nl: 'Graaf op de plek waar je uitkomt: daar ligt de schat!', en: 'Dig at the spot where you end up: that is where the treasure is!' });
    return out;
  }

  /* ---------------------------------------------------------------
     4. Een kaart maken en nalopen
     --------------------------------------------------------------- */
  function generate(lv) {
    for (let attempt = 0; attempt < 80; attempt++) {
      const route = randomRoute(lv);
      if (!route) continue;
      const map = dressMap(lv, route);
      if (map) { map.lines = lines(map); return map; }
    }
    return null;
  }

  /* voer de opdrachten uit zoals een kind ze leest, op de echte kaart: lukt dat,
     dan ligt de schat op de plek waar je uitkomt */
  function follow(map) {
    const N = map.N;
    let p = { x: map.start.x, y: map.start.y, d: map.start.d };
    let hasKey = !map.key;
    const free = function (x, y) {
      if (x < 0 || y < 0 || x >= N || y >= N) return false;
      const t = map.cells[y][x].t;
      return t === 'g' || t === 'b';
    };
    const stepTo = function (dir) {
      const nx = p.x + VEC[dir][0], ny = p.y + VEC[dir][1];
      if (!free(nx, ny)) return false;
      p = { x: nx, y: ny, d: p.d };
      if (map.key && p.x === map.key.x && p.y === map.key.y) hasKey = true;
      return true;
    };
    for (let i = 0; i < map.ops.length; i++) {
      const op = map.ops[i];
      if (op.k === 'go') { for (let s = 0; s < op.n; s++) if (!stepTo(op.d)) return { ok: false, why: 'blocked at op ' + i }; }
      else if (op.k === 'fwd') { for (let s = 0; s < op.n; s++) if (!stepTo(p.d)) return { ok: false, why: 'blocked at op ' + i }; }
      else if (op.k === 'back') { for (let s = 0; s < op.n; s++) if (!stepTo(opposite(p.d))) return { ok: false, why: 'blocked at op ' + i }; }
      else if (op.k === 'cross') {
        if (map.cells[p.y + VEC[p.d][1]] === undefined || map.cells[p.y + VEC[p.d][1]][p.x + VEC[p.d][0]] === undefined ||
            map.cells[p.y + VEC[p.d][1]][p.x + VEC[p.d][0]].t !== 'b') return { ok: false, why: 'no bridge ahead at op ' + i };
        if (!stepTo(p.d) || !stepTo(p.d)) return { ok: false, why: 'cannot cross at op ' + i };
      } else if (op.k === 'turn') p = { x: p.x, y: p.y, d: turn(p.d, op.side) };
      else if (op.k === 'face') p = { x: p.x, y: p.y, d: op.d };
      else if (op.k === 'until') {
        const dir = op.d || p.d;
        let n = 0;
        for (;;) {
          if (n > N || !stepTo(dir)) return { ok: false, why: 'never reaches the ' + op.lm + ' at op ' + i };
          n++;
          if (map.cells[p.y][p.x].lm === op.lm) break;
        }
        if (n !== op.n) return { ok: false, why: 'until took ' + n + ' steps, expected ' + op.n };
      }
    }
    return { ok: p.x === map.treasure.x && p.y === map.treasure.y && hasKey, end: p, hasKey: hasKey };
  }

  /* ---------------------------------------------------------------
     5. Het spel
     --------------------------------------------------------------- */
  const Treasure = {
    generate: generate,
    follow: follow,

    makeDuels: function (deck, lv) {
      const list = [];
      for (let i = 0; i < MAPS; i++) {
        let map = generate(lv);
        if (!map) map = generate(lv);
        list.push({ right: t('tmMap') + ' ' + (i + 1), wrong: '', prompt: null, why: { nl: 'Lees elke zin apart en streep af wat je gedaan hebt.', en: 'Read every sentence on its own and tick off what you have done.' },
          map: map, done: false, how: null });
      }
      return list;
    },

    init: function (dom) {
      this.dom = dom;
      this.wrongTotal = 0;
      this.mi = 0;
      this.load(0);
    },

    load: function (i) {
      this.mi = i;
      this.map = G.duels[i].map;
      this.tries = 0;
      this.waiting = false;
      this.reveal = false;
      this.hasKey = !this.map.key;
      this.ticked = {};
      this.trail = {};
      this.pose = { x: this.map.start.x, y: this.map.start.y, d: this.map.start.d };
      this.trail[key(this.pose.x, this.pose.y)] = 1;
      this.render();
      K.hud();
    },

    render: function () {
      const self = this, map = this.map, N = map.N, lv = map.lv;
      const root = document.createElement('div');
      root.className = 'tm-wrap tm-lv' + lv;
      root.innerHTML =
        '<div class="tm-body">' +
          '<div class="tm-left"><div class="tm-board" style="--n:' + N + '"></div>' +
            '<div class="tm-under"><span class="tm-compass"></span><span class="tm-keyflag hidden"></span></div>' +
            '<div class="tm-pad"></div>' +
            '<p class="tm-msg" role="status"></p></div>' +
          '<div class="tm-right"><h4 class="tm-head"></h4><div class="tm-steps"></div></div>' +
        '</div>';
      this.dom.innerHTML = '';
      this.dom.appendChild(root);
      this.root = root;
      const board = root.querySelector('.tm-board');
      for (let y = 0; y < N; y++) for (let x = 0; x < N; x++) {
        const c = map.cells[y][x];
        const el = document.createElement('div');
        el.className = 'tm-cell ' + c.t + ((x + y) % 2 ? ' alt' : '');
        el.dataset.x = x;
        el.dataset.y = y;
        el.textContent = c.t === 'w' ? '🌊' : c.t === 'b' ? '🌉' : c.t === 't' ? '⛰️' : c.lm ? LM[c.lm].emoji : '';
        board.appendChild(el);
      }
      const hero = document.createElement('div');
      hero.className = 'tm-hero';
      hero.innerHTML = '<span class="tm-hero-face"></span><span class="tm-arrow"></span>';
      hero.querySelector('.tm-hero-face').textContent = Store.player.avatar || '🦸';
      board.appendChild(hero);
      this.board = board;
      this.hero = hero;
      const pad = root.querySelector('.tm-pad');
      const mk = function (cls, label, fn) {
        const b = document.createElement('button');
        b.className = 'tm-btn ' + cls;
        b.innerHTML = label;
        b.addEventListener('click', function () { fn.call(self); });
        pad.appendChild(b);
        return b;
      };
      if (lv === 1) {
        const dir = document.createElement('div');
        dir.className = 'tm-dirs';
        [['N', '⬆️'], ['W', '⬅️'], ['E', '➡️'], ['S', '⬇️']].forEach(function (d) {
          const b = document.createElement('button');
          b.className = 'tm-btn tm-' + d[0];
          b.dataset.d = d[0];
          b.innerHTML = d[1] + '<small>' + d[0] + '</small>';
          b.addEventListener('click', function () { self.walk(d[0]); });
          dir.appendChild(b);
        });
        pad.appendChild(dir);
      } else {
        const row = document.createElement('div');
        row.className = 'tm-turtle';
        const l = document.createElement('button');
        l.className = 'tm-btn tm-left-btn';
        l.innerHTML = '↶<small></small>';
        l.addEventListener('click', function () { self.rotate('L'); });
        const f = document.createElement('button');
        f.className = 'tm-btn tm-fwd';
        f.innerHTML = '⬆️<small></small>';
        f.addEventListener('click', function () { self.forward(1); });
        const r = document.createElement('button');
        r.className = 'tm-btn tm-right-btn';
        r.innerHTML = '↷<small></small>';
        r.addEventListener('click', function () { self.rotate('R'); });
        row.appendChild(l);
        row.appendChild(f);
        row.appendChild(r);
        if (lv === 3) {
          const bk = document.createElement('button');
          bk.className = 'tm-btn tm-back';
          bk.innerHTML = '⬇️<small></small>';
          bk.addEventListener('click', function () { self.forward(-1); });
          row.appendChild(bk);
        }
        pad.appendChild(row);
      }
      const side = document.createElement('div');
      side.className = 'tm-side-btns';
      const dig = document.createElement('button');
      dig.className = 'big-btn tm-dig';
      dig.addEventListener('click', function () { self.dig(); });
      const reset = document.createElement('button');
      reset.className = 'ghost-btn tm-reset';
      reset.addEventListener('click', function () { self.restart(true); });
      side.appendChild(dig);
      side.appendChild(reset);
      pad.appendChild(side);
      const nx = document.createElement('button');
      nx.className = 'big-btn tm-next hidden';
      nx.addEventListener('click', function () { Sound.click(); self.load(self.mi + 1); });
      pad.appendChild(nx);
      this.texts();
      this.place(false);
    },

    /* alles wat van de taal afhangt */
    texts: function () {
      const self = this, root = this.root, map = this.map;
      if (!root) return;
      root.querySelector('.tm-head').textContent = '🧭 ' + t('tmClues');
      root.querySelector('.tm-compass').textContent = '🧭 ' + t('tmCompass');
      const box = root.querySelector('.tm-steps');
      box.innerHTML = '';
      let n = 0;
      map.lines.forEach(function (ln) {
        if (ln.kind === 'note') {
          const p = document.createElement('p');
          p.className = 'tm-note';
          p.textContent = L(ln);
          box.appendChild(p);
        } else {
          n++;
          const b = document.createElement('button');
          b.className = 'tm-step' + (self.ticked[ln.op] ? ' used' : '');
          b.dataset.op = ln.op;
          b.innerHTML = '<i>' + n + '</i><span></span>';
          b.querySelector('span').textContent = L(ln);
          b.addEventListener('click', function () { self.ticked[ln.op] = !self.ticked[ln.op]; b.classList.toggle('used'); Sound.click(); });
          box.appendChild(b);
        }
      });
      const set = function (sel, txt) { const e = root.querySelector(sel); if (e) e.textContent = txt; };
      set('.tm-left-btn small', t('tmTurnL'));
      set('.tm-fwd small', t('tmForward'));
      set('.tm-right-btn small', t('tmTurnR'));
      set('.tm-back small', t('tmBack'));
      const names = { N: t('tmN'), E: t('tmE'), S: t('tmS'), W: t('tmW') };
      Array.prototype.forEach.call(root.querySelectorAll('.tm-dirs .tm-btn'), function (b) { b.querySelector('small').textContent = names[b.dataset.d]; });
      root.querySelector('.tm-dig').textContent = '⛏️ ' + t('tmDig');
      root.querySelector('.tm-reset').textContent = '↺ ' + t('tmReset');
      root.querySelector('.tm-next').textContent = t('tmNext') + ' →';
      this.keyflag();
    },
    relang: function () { this.texts(); },

    keyflag: function () {
      const el = this.root && this.root.querySelector('.tm-keyflag');
      if (!el) return;
      el.classList.toggle('hidden', !this.map.key);
      el.textContent = this.hasKey ? '🗝️ ' + t('tmHaveKey') : '🔒 ' + t('tmNoKey');
      el.classList.toggle('got', this.hasKey);
    },

    msg: function (text, kind) {
      const el = this.root && this.root.querySelector('.tm-msg');
      if (!el) return;
      el.textContent = text || '';
      el.className = 'tm-msg' + (kind ? ' ' + kind : '');
    },

    /* de held en het spoor op het bord zetten */
    place: function (animate) {
      const N = this.map.N, p = this.pose;
      const hero = this.hero;
      hero.style.width = (100 / N) + '%';
      hero.style.height = (100 / N) + '%';
      hero.style.transform = 'translate(' + (p.x * 100) + '%,' + (p.y * 100) + '%)';
      hero.style.transition = animate ? 'transform .18s ease' : 'none';
      const arrow = hero.querySelector('.tm-arrow');
      arrow.style.display = this.map.lv === 1 ? 'none' : '';
      arrow.style.transform = 'rotate(' + (ORDER.indexOf(p.d) * 90) + 'deg)';
      const self = this;
      Array.prototype.forEach.call(this.board.querySelectorAll('.tm-cell'), function (c) {
        const k = key(c.dataset.x, c.dataset.y);
        c.classList.toggle('trail', !!self.trail[k]);
      });
    },

    free: function (x, y) {
      const N = this.map.N;
      if (x < 0 || y < 0 || x >= N || y >= N) return false;
      const t0 = this.map.cells[y][x].t;
      return t0 === 'g' || t0 === 'b';
    },

    /* een stap; geeft false (en schudt) als daar water, een boom of de rand is */
    stepTo: function (dir) {
      const p = this.pose;
      const nx = p.x + VEC[dir][0], ny = p.y + VEC[dir][1];
      if (!this.free(nx, ny)) {
        const cell = nx >= 0 && ny >= 0 && nx < this.map.N && ny < this.map.N ? this.map.cells[ny][nx].t : 'edge';
        this.msg('🚫 ' + (cell === 'w' ? t('tmWater') : cell === 't' ? t('tmRock') : t('tmEdge')), 'bad');
        Sound.wrong();
        this.hero.classList.remove('bump');
        void this.hero.offsetWidth;
        this.hero.classList.add('bump');
        return false;
      }
      this.pose = { x: nx, y: ny, d: p.d };
      this.trail[key(nx, ny)] = 1;
      Sound.click();
      this.msg('');
      const m = this.map;
      if (m.key && !this.hasKey && nx === m.key.x && ny === m.key.y) {
        this.hasKey = true;
        this.msg('🗝️ ' + t('tmFoundKey'), 'good');
        Sound.star();
        FX.burst(30);
        this.keyflag();
      }
      this.place(true);
      return true;
    },

    can: function () { return G.state === 'play' && !this.waiting; },
    walk: function (dir) { if (this.can()) this.stepTo(dir); },
    forward: function (sign) {
      if (!this.can()) return;
      this.stepTo(sign > 0 ? this.pose.d : opposite(this.pose.d));
    },
    rotate: function (side) {
      if (!this.can()) return;
      this.pose = { x: this.pose.x, y: this.pose.y, d: turn(this.pose.d, side) };
      Sound.click();
      this.msg('');
      this.place(true);
    },

    restart: function (free) {
      if (!this.can() && !free) return;
      if (G.state !== 'play') return;
      this.pose = { x: this.map.start.x, y: this.map.start.y, d: this.map.start.d };
      this.trail = {};
      this.trail[key(this.pose.x, this.pose.y)] = 1;
      this.hasKey = !this.map.key;
      this.ticked = {};
      Array.prototype.forEach.call(this.root.querySelectorAll('.tm-step'), function (b) { b.classList.remove('used'); });
      Sound.click();
      this.msg('');
      this.place(true);
      this.keyflag();
    },

    dig: function () {
      if (!this.can()) return;
      const m = this.map, p = this.pose;
      const here = p.x === m.treasure.x && p.y === m.treasure.y;
      if (here && !this.hasKey) {
        this.msg('🔒 ' + t('tmLocked'), 'bad');
        Sound.wrong();
        return;
      }
      if (here) {
        this.found(true);
        return;
      }
      /* fout: een hartje, de eerste keer opnieuw beginnen, de tweede keer de goede route laten zien */
      this.tries++;
      this.wrongTotal++;
      const cell = this.board.querySelector('.tm-cell[data-x="' + p.x + '"][data-y="' + p.y + '"]');
      if (cell) { cell.classList.add('dug'); cell.textContent = '🕳️'; }
      if (this.tries < 2) {
        this.msg('❌ ' + t('tmNothing'), 'bad');
        K.loseHeart();
        const self = this, run = G.run;
        setTimeout(function () { if (G.run === run && !self.waiting) self.restart(true); }, 900);
      } else {
        this.waiting = true;
        this.showRoute();
        this.msg('❌ ' + t('tmShowRoute'), 'bad');
        K.resolve(this.mi, 'wrong', G.W / 2, 60);
        this.finishCase();
      }
    },

    found: function () {
      const m = this.map;
      this.waiting = true;
      const cell = this.board.querySelector('.tm-cell[data-x="' + m.treasure.x + '"][data-y="' + m.treasure.y + '"]');
      if (cell) { cell.textContent = '💎'; cell.classList.add('treasure'); }
      this.msg('💎 ' + t('tmFound'), 'good');
      FX.burst(70);
      const fresh = this.tries === 0;
      K.resolve(this.mi, 'ok', G.W / 2, 60);
      if (fresh) K.bonus(10, '🗺️', G.W / 2, 90);
      this.finishCase();
    },

    showRoute: function () {
      const m = this.map, self = this;
      this.reveal = true;
      m.path.forEach(function (c) {
        const el = self.board.querySelector('.tm-cell[data-x="' + c[0] + '"][data-y="' + c[1] + '"]');
        if (el) el.classList.add('route');
      });
      const tr = this.board.querySelector('.tm-cell[data-x="' + m.treasure.x + '"][data-y="' + m.treasure.y + '"]');
      if (tr) { tr.textContent = '💎'; tr.classList.add('treasure'); }
      this.root.querySelector('.tm-steps').classList.add('revealed');
    },

    finishCase: function () {
      const nx = this.root.querySelector('.tm-next');
      if (nx) nx.classList.toggle('hidden', this.mi >= G.duels.length - 1);
      this.root.querySelector('.tm-dig').disabled = true;
    },

    key: function (e) {
      if (!this.can() || !this.map) return false;
      const lv = this.map.lv, k = e.key;
      if (k === 'Enter') { this.dig(); return true; }
      if (lv === 1) {
        const dir = k === 'ArrowUp' || k === 'w' ? 'N' : k === 'ArrowDown' || k === 's' ? 'S' : k === 'ArrowLeft' || k === 'a' ? 'W' : k === 'ArrowRight' || k === 'd' ? 'E' : null;
        if (!dir) return false;
        this.walk(dir);
        return true;
      }
      if (k === 'ArrowUp' || k === 'w') { this.forward(1); return true; }
      if (k === 'ArrowLeft' || k === 'a') { this.rotate('L'); return true; }
      if (k === 'ArrowRight' || k === 'd') { this.rotate('R'); return true; }
      if ((k === 'ArrowDown' || k === 's') && lv === 3) { this.forward(-1); return true; }
      return false;
    },

    status: function () { return '❤️'.repeat(G.hearts) + '🤍'.repeat(Math.max(0, G.maxHearts - G.hearts)); },
    countText: function () { return '🗺️ ' + Math.min(G.di + 1, G.duels.length) + '/' + G.duels.length; },
    promptText: function () { return t('tmPrompt'); },

    result: function () {
      const n = G.duels.length;
      const win = G.di >= n && G.hearts > 0;
      const w = this.wrongTotal;
      const stars = win ? (w === 0 ? 3 : w === 1 ? 2 : 1) : (G.di >= 2 ? 1 : 0);
      return {
        win: win, stars: stars, xpMul: 3,
        note: function () { return t('tmResult').replace('{n}', G.di).replace('{w}', w); }
      };
    },

    /* voor de test: de schat vinden (goed) of op een verkeerde plek graven (fout) */
    debugResolve: function (ok) {
      if (!this.can()) return;
      const m = this.map;
      if (ok) {
        this.pose = { x: m.treasure.x, y: m.treasure.y, d: this.pose.d };
        this.hasKey = true;
      } else {
        const bad = [[0, 0], [m.N - 1, m.N - 1], [0, m.N - 1]].filter(function (c) { return !(c[0] === m.treasure.x && c[1] === m.treasure.y) && m.cells[c[1]][c[0]].t !== 'w'; })[0] || [0, 0];
        this.pose = { x: bad[0], y: bad[1], d: this.pose.d };
      }
      this.dig();
      if (this.waiting && this.mi < G.duels.length - 1) this.load(this.mi + 1);
    }
  };

  Arcade.register({
    id: 'treasure', emoji: '🗺️', hue: 40, nl: 'Schatkaart', en: 'Treasure Map', cat: 'puzzle', kind: 'dom', free: true,
    decks: ['read'],
    descNl: 'Lees de beschrijving van de route en vind de schat!',
    descEn: 'Read the description of the route and find the treasure!',
    howNl: 'Op de kaart staat geen pijl, alleen een tekst. Lees hem zin voor zin en loop met je held over de kaart. Op de plek waar de tekst je brengt, tik je op Graaf. Je mag zinnen afstrepen. Een foute graafbeurt kost een hartje.',
    howEn: 'There is no arrow on the map, only a text. Read it sentence by sentence and walk your hero across the map. At the spot where the text leads you, tap Dig. You can tick sentences off. A wrong dig costs a heart.',
    goalNl: '🗺️ Volg de tekst en graaf op de goede plek',
    goalEn: '🗺️ Follow the text and dig in the right place'
  }, Treasure);
})();
