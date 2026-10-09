/* =====================================================================
   🕵️ Speurneus: wie is de dader?

   Een zaak in de buurt: de taart is gestolen, de hamster ontsnapt, de bal
   door het raam. Een rij verdachten staat voor je. Er zijn geen
   plaatjes die de dader verraden, alleen aanwijzingen in woorden. Lees ze,
   sluit verdachten uit (❌) en beschuldig de enige die overblijft (🕵️).

   Elke zaak wordt vers gemaakt en heeft precies één oplossing; elke
   aanwijzing is nodig (laat je er één weg, dan blijven er twee of meer
   verdachten over). Dat controleert de generator zelf.

   Level 1 (groep 6): 4 verdachten, 3 aanwijzingen. "De dader draagt een
     pet." Eén keer "niet" of een alibi.
   Level 2 (groep 7): 5 verdachten, 4 aanwijzingen. Ook "of", "en … geen",
     "naast iemand met…" en "aan de rand van de rij".
   Level 3 (groep 8): 6 verdachten, 5 aanwijzingen. Ook "links van Noor",
     "dezelfde trui als Sem", "als … dan …" en "óf … óf, maar niet beide".

   Een fout beschuldigen kost een hartje en vertelt precies welke
   aanwijzing niet klopt. Drie zaken per ronde.
   ===================================================================== */
'use strict';

(function () {
  const K = Arcade.kit;
  const G = K.G;
  const CASES = 3;
  const CFG = [null, { n: 4, k: 3 }, { n: 5, k: 4 }, { n: 6, k: 5 }];

  function T(nl, en) { return { nl: nl, en: en }; }

  const NAMES = ['Mila', 'Daan', 'Sem', 'Lotte', 'Noor', 'Finn', 'Bram', 'Evi', 'Tess', 'Jip', 'Lars', 'Fleur',
    'Yara', 'Otis', 'Luuk', 'Anna', 'Max', 'Zoë', 'Ravi', 'Sanne', 'Jens', 'Nova', 'Teun', 'Iris'];
  const FACES = ['🧒', '👧', '👦', '🧑', '👩', '👨', '🧓', '👵', '👴'];

  /* ---- de eigenschappen en hoe je ze in een zin zegt ---- */
  function hat(k, icon, nl, en) {
    return { icon: icon, word: T(nl, en), obj: T('een ' + nl, 'a ' + en),
      has: T('draagt een ' + nl, 'is wearing a ' + en), not: T('draagt geen ' + nl, 'is not wearing a ' + en),
      w: T('met een ' + nl, 'with a ' + en) };
  }
  function shirt(color, nl, adj, en) {
    return { icon: '', color: color, word: T(nl, en), adj: T(adj, en),
      has: T('draagt een ' + adj + ' trui', 'is wearing a ' + en + ' sweater'),
      not: T('draagt geen ' + adj + ' trui', 'is not wearing a ' + en + ' sweater'),
      w: T('in een ' + adj + ' trui', 'in a ' + en + ' sweater') };
  }
  function thing(icon, nl, en, enObj) {
    return { icon: icon, word: T(nl, en), obj: T('een ' + nl, enObj),
      has: T('heeft een ' + nl + ' bij zich', 'has ' + enObj),
      not: T('heeft geen ' + nl + ' bij zich', 'does not have ' + enObj),
      w: T('met een ' + nl, 'with ' + enObj) };
  }
  const VAL = {
    head: {
      pet: hat('pet', '🧢', 'pet', 'cap'),
      hoed: hat('hoed', '🎩', 'hoed', 'hat'),
      strohoed: hat('strohoed', '👒', 'strohoed', 'straw hat'),
      blank: { icon: '', word: T('niets op het hoofd', 'nothing on the head'), obj: T('niets op het hoofd', 'nothing on their head'),
        has: T('draagt niets op het hoofd', 'is wearing nothing on their head'),
        not: T('draagt iets op het hoofd', 'is wearing something on their head'),
        w: T('zonder hoofddeksel', 'with nothing on their head') }
    },
    glasses: {
      bril: { icon: '👓', word: T('bril', 'glasses'), has: T('heeft een bril op', 'is wearing glasses'),
        not: T('heeft geen bril op', 'is not wearing glasses'), w: T('met een bril', 'with glasses') },
      zonder: { icon: '', word: T('geen bril', 'no glasses'), has: T('heeft geen bril op', 'is not wearing glasses'),
        not: T('heeft een bril op', 'is wearing glasses'), w: T('zonder bril', 'without glasses') }
    },
    shirt: {
      rood: shirt('#e4483f', 'rood', 'rode', 'red'),
      blauw: shirt('#3b82f6', 'blauw', 'blauwe', 'blue'),
      groen: shirt('#22a86b', 'groen', 'groene', 'green'),
      geel: shirt('#f5b800', 'geel', 'gele', 'yellow')
    },
    item: {
      paraplu: thing('☂️', 'paraplu', 'umbrella', 'an umbrella'),
      rugzak: thing('🎒', 'rugzak', 'backpack', 'a backpack'),
      ijsje: thing('🍦', 'ijsje', 'ice cream', 'an ice cream'),
      boek: thing('📚', 'boek', 'book', 'a book'),
      ballon: thing('🎈', 'ballon', 'balloon', 'a balloon')
    }
  };
  const ATTRS = ['head', 'glasses', 'shirt', 'item'];
  function vals(a) { return Object.keys(VAL[a]); }

  /* ---- de zaken ---- */
  const FRAMES = [
    { emoji: '🥧', crime: T('De appeltaart van de bakker is gestolen!', 'The baker’s apple pie has been stolen!'),
      ask: T('Wie heeft de taart gestolen?', 'Who stole the pie?'),
      where: T('Voor de bakkerij staat een rij verdachten.', 'A line of suspects is standing in front of the bakery.'),
      caught: T('{n} geeft het toe: “De taart rook gewoon te lekker!”', '{n} confesses: “The pie just smelled too good!”') },
    { emoji: '⚽', crime: T('De bal ging dwars door het raam van groep 6!', 'The ball went straight through the window of group 6!'),
      ask: T('Wie schopte de bal?', 'Who kicked the ball?'),
      where: T('Op het schoolplein staat een rij kinderen.', 'A line of children is standing in the playground.'),
      caught: T('{n} bloost: “Het was echt een ongelukje!”', '{n} blushes: “It really was an accident!”') },
    { emoji: '🍪', crime: T('De koekjestrommel is helemaal leeg!', 'The cookie tin is completely empty!'),
      ask: T('Wie at alle koekjes op?', 'Who ate all the cookies?'),
      where: T('In de keuken staat een rij verdachten bij de deur.', 'In the kitchen a line of suspects is standing by the door.'),
      caught: T('{n} veegt de kruimels van de mond: “Ik had zo’n honger…”', '{n} wipes the crumbs away: “I was so hungry…”') },
    { emoji: '🎨', crime: T('Er zit blauwe verf op de muur van het lokaal!', 'There is blue paint on the classroom wall!'),
      ask: T('Wie heeft de muur beschilderd?', 'Who painted the wall?'),
      where: T('In de gang staat een rij verdachten.', 'In the corridor a line of suspects is standing.'),
      caught: T('{n} lacht verlegen: “Ik wilde alleen een regenboog maken.”', '{n} laughs shyly: “I just wanted to make a rainbow.”') },
    { emoji: '🐹', crime: T('De hamster van de klas is ontsnapt!', 'The class hamster has escaped!'),
      ask: T('Wie liet het kooitje open?', 'Who left the cage open?'),
      where: T('Bij de kooi staat een rij verdachten.', 'A line of suspects is standing by the cage.'),
      caught: T('{n} zucht: “Ik wilde hem alleen even laten rennen.”', '{n} sighs: “I only wanted to let him run for a bit.”') },
    { emoji: '🚲', crime: T('Alle fietsbellen in de stalling zijn omgedraaid!', 'All the bicycle bells in the shed have been turned around!'),
      ask: T('Wie draaide de bellen om?', 'Who turned the bells around?'),
      where: T('Bij de fietsenstalling staat een rij verdachten.', 'A line of suspects is standing by the bike shed.'),
      caught: T('{n} grinnikt: “Het was maar een grapje!”', '{n} giggles: “It was only a joke!”') },
    { emoji: '🖼️', crime: T('In het museum hangt een schilderij ondersteboven!', 'In the museum a painting is hanging upside down!'),
      ask: T('Wie draaide het schilderij om?', 'Who turned the painting around?'),
      where: T('In de museumzaal staat een rij verdachten.', 'In the museum hall a line of suspects is standing.'),
      caught: T('{n} zegt: “Ik vond het zo mooier.”', '{n} says: “I thought it looked better like that.”') },
    { emoji: '🎂', crime: T('De slagroom is van de verjaardagstaart gelikt!', 'The cream has been licked off the birthday cake!'),
      ask: T('Wie likte de slagroom op?', 'Who licked up the cream?'),
      where: T('Bij de feesttafel staat een rij verdachten.', 'A line of suspects is standing by the party table.'),
      caught: T('{n} lacht: “Een beetje proeven mag toch?”', '{n} laughs: “Surely a little taste is allowed?”') },
    { emoji: '🚩', crime: T('De vlag van de school is verdwenen!', 'The school flag has disappeared!'),
      ask: T('Wie nam de vlag mee?', 'Who took the flag?'),
      where: T('Onder de lege vlaggenmast staat een rij verdachten.', 'A line of suspects is standing under the empty flagpole.'),
      caught: T('{n} grijnst: “Ik gebruikte hem als cape!”', '{n} grins: “I used it as a cape!”') },
    { emoji: '📚', crime: T('Het laatste dinosaurusboek is niet teruggebracht!', 'The last dinosaur book has not been returned!'),
      ask: T('Wie heeft het boek nog?', 'Who still has the book?'),
      where: T('In de bibliotheek staat een rij verdachten bij de balie.', 'In the library a line of suspects is standing at the desk.'),
      caught: T('{n} schrikt: “Oeps, het ligt nog onder mijn bed!”', '{n} startles: “Oops, it is still under my bed!”') }
  ];

  /* ---- 1. De verdachten en de aanwijzingen ---- */
  function makeSuspects(n) {
    const names = shuffle(NAMES.slice()).slice(0, n);
    const itemPool = shuffle(vals('item')).slice(0, 4);
    for (let tries = 0; tries < 200; tries++) {
      const S = names.map(function (nm) {
        return { name: nm, face: K.pick(FACES), head: K.pick(vals('head')), glasses: K.pick(vals('glasses')),
          shirt: K.pick(vals('shirt')), item: K.pick(itemPool) };
      });
      const varied = ATTRS.every(function (a) {
        const seen = {};
        S.forEach(function (s) { seen[s[a]] = 1; });
        return Object.keys(seen).length >= 2;
      });
      if (varied) return S;
    }
    return null;
  }

  /* alle aanwijzingen die waar zijn voor de dader (c), per type */
  function candidates(S, c, lv) {
    const n = S.length, me = S[c];
    const out = [];
    const nb = function (i) { return [i - 1, i + 1].filter(function (j) { return j >= 0 && j < n; }); };
    const add = function (type, attr, nl, en, test, adv) {
      if (test(c)) out.push({ type: type, attr: attr, nl: nl, en: en, test: test, adv: !!adv });
    };
    const present = function (a) {
      const seen = {};
      S.forEach(function (s) { seen[s[a]] = 1; });
      return Object.keys(seen);
    };
    const first = function (s) { const i = s.indexOf(' '); return { verb: s.slice(0, i), rest: s.slice(i + 1) }; };
    /* bijzin: de persoonsvorm gaat naar het eind ("draagt een pet" → "een pet draagt") */
    const sub = function (s) { const f = first(s); return f.rest + ' ' + f.verb; };

    ATTRS.forEach(function (a) {
      const v = me[a];
      add('has', a, 'De dader ' + VAL[a][v].has.nl + '.', 'The culprit ' + VAL[a][v].has.en + '.',
        function (i) { return S[i][a] === v; });
      if (lv >= 1) {
        present(a).filter(function (x) { return x !== v; }).forEach(function (x) {
          add('not', a, 'De dader ' + VAL[a][x].not.nl + '.', 'The culprit ' + VAL[a][x].not.en + '.',
            function (i) { return S[i][a] !== x; });
        });
      }
    });

    /* alibi: twee anderen zijn het niet */
    const others = S.map(function (s, i) { return i; }).filter(function (i) { return i !== c; });
    for (let a = 0; a < others.length; a++) for (let b = a + 1; b < others.length; b++) {
      const x = others[a], y = others[b];
      add('alibi', null, 'Het is niet ' + S[x].name + ' en ook niet ' + S[y].name + ': zij hebben een alibi.',
        'It is not ' + S[x].name + ' and not ' + S[y].name + ' either: they have an alibi.',
        function (i) { return i !== x && i !== y; });
    }
    if (lv < 2) return out;

    /* of: een van twee waarden */
    ['head', 'shirt', 'item'].forEach(function (a) {
      present(a).filter(function (x) { return x !== me[a]; }).forEach(function (x) {
        const v1 = VAL[a][me[a]], v2 = VAL[a][x];
        let nl, en;
        if (a === 'head') {
          nl = 'De dader draagt ' + v1.obj.nl + ' of ' + v2.obj.nl + '.';
          en = 'The culprit is wearing ' + v1.obj.en + ' or ' + v2.obj.en + '.';
        } else if (a === 'shirt') {
          nl = 'De dader draagt een ' + v1.adj.nl + ' of ' + v2.adj.nl + ' trui.';
          en = 'The culprit is wearing a ' + v1.adj.en + ' or ' + v2.adj.en + ' sweater.';
        } else {
          nl = 'De dader heeft ' + v1.obj.nl + ' of ' + v2.obj.nl + ' bij zich.';
          en = 'The culprit has ' + v1.obj.en + ' or ' + v2.obj.en + '.';
        }
        const mine = me[a];
        add('or', a, nl, en, function (i) { return S[i][a] === mine || S[i][a] === x; });
      });
    });

    /* naast iemand met … */
    ATTRS.forEach(function (a) {
      present(a).forEach(function (v) {
        add('near', a, 'De dader staat naast iemand ' + VAL[a][v].w.nl + '.',
          'The culprit is standing next to someone ' + VAL[a][v].w.en + '.',
          function (i) { return nb(i).some(function (j) { return S[j][a] === v; }); });
      });
    });

    /* aan de rand, of juist niet; links- of rechterhelft (alleen bij een even aantal) */
    add('edge', null, 'De dader staat aan de rand van de rij.', 'The culprit is standing at the end of the line.',
      function (i) { return i === 0 || i === n - 1; });
    add('edge', null, 'De dader staat niet aan de rand van de rij.', 'The culprit is not standing at the end of the line.',
      function (i) { return i > 0 && i < n - 1; });
    if (n % 2 === 0) {
      add('half', null, 'De dader staat in de linkerhelft van de rij.', 'The culprit is standing in the left half of the line.',
        function (i) { return i < n / 2; });
      add('half', null, 'De dader staat in de rechterhelft van de rij.', 'The culprit is standing in the right half of the line.',
        function (i) { return i >= n / 2; });
    }

    /* "A en B": twee dingen in één zin */
    ATTRS.forEach(function (a) {
      ATTRS.forEach(function (b) {
        if (a === b) return;
        present(b).filter(function (x) { return x !== me[b]; }).forEach(function (x) {
          const va = me[a];
          add('and', a + b, 'De dader ' + VAL[a][va].has.nl + ' en ' + first(VAL[b][x].not.nl).verb + ' ' + first(VAL[b][x].not.nl).rest + '.',
            'The culprit ' + VAL[a][va].has.en + ' and ' + VAL[b][x].not.en + '.',
            function (i) { return S[i][a] === va && S[i][b] !== x; });
        });
      });
    });
    if (lv < 3) return out;

    /* groep 8: ten opzichte van een ander, vergelijken, voorwaarden */
    others.forEach(function (x) {
      add('rel', null, 'De dader staat ergens links van ' + S[x].name + '.', 'The culprit is standing somewhere to the left of ' + S[x].name + '.',
        function (i) { return i < x; }, true);
      add('rel', null, 'De dader staat ergens rechts van ' + S[x].name + '.', 'The culprit is standing somewhere to the right of ' + S[x].name + '.',
        function (i) { return i > x; }, true);
      add('rel', null, 'De dader staat direct naast ' + S[x].name + '.', 'The culprit is standing right next to ' + S[x].name + '.',
        function (i) { return Math.abs(i - x) === 1; }, true);
      if (S[x].shirt === me.shirt) {
        add('same', 'shirt', 'De dader draagt dezelfde kleur trui als ' + S[x].name + '.',
          'The culprit is wearing the same colour sweater as ' + S[x].name + '.',
          function (i) { return i !== x && S[i].shirt === S[x].shirt; }, true);
      }
      if (S[x].item === me.item) {
        add('same', 'item', 'De dader heeft hetzelfde bij zich als ' + S[x].name + '.',
          'The culprit has the same thing with them as ' + S[x].name + '.',
          function (i) { return i !== x && S[i].item === S[x].item; }, true);
      }
    });
    ATTRS.forEach(function (a) {
      present(a).forEach(function (v) {
        add('notnear', a, 'De dader staat niet naast iemand ' + VAL[a][v].w.nl + '.',
          'The culprit is not standing next to someone ' + VAL[a][v].w.en + '.',
          function (i) { return nb(i).every(function (j) { return S[j][a] !== v; }); }, true);
      });
    });
    ATTRS.forEach(function (a) {
      ATTRS.forEach(function (b) {
        if (a === b) return;
        const va = me[a], vb = me[b];
        /* "… dan draagt de dader ook niets" leest raar: het gevolg is altijd iets dat er IS */
        if (vb !== 'zonder' && vb !== 'blank') {
          add('cond', a + b, 'Als de dader ' + sub(VAL[a][va].has.nl) + ', dan ' + first(VAL[b][vb].has.nl).verb + ' de dader ook ' + first(VAL[b][vb].has.nl).rest + '.',
            'If the culprit ' + VAL[a][va].has.en + ', then the culprit ' + VAL[b][vb].has.en + ' too.',
            function (i) { return S[i][a] !== va || S[i][b] === vb; }, true);
        }
        /* óf … óf, maar niet allebei: precies één van de twee */
        present(b).filter(function (x) { return x !== vb; }).forEach(function (x) {
          add('xor', a + b, 'De dader ' + VAL[a][va].has.nl + ' of ' + VAL[b][x].has.nl + ', maar niet allebei.',
            'The culprit ' + VAL[a][va].has.en + ' or ' + VAL[b][x].has.en + ', but not both.',
            function (i) { return (S[i][a] === va) !== (S[i][b] === x); }, true);
        });
      });
    });
    return out;
  }

  /* wie blijft over na deze aanwijzingen? */
  function survivors(S, clues) {
    const out = [];
    for (let i = 0; i < S.length; i++) if (clues.every(function (cl) { return cl.test(i); })) out.push(i);
    return out;
  }

  function pop(m) { let c = 0; while (m) { c += m & 1; m >>= 1; } return c; }

  /* Zoek k aanwijzingen die samen precies één verdachte overlaten, waarbij
     elke aanwijzing nodig is. Aanwijzingen zijn bitmaskers over de
     verdachten; een nodige aanwijzing sluit altijd iemand uit, in elke
     volgorde. Dat maakt snoeien makkelijk: elke stap moet het aantal
     overgebleven verdachten verkleinen en er moeten er genoeg overblijven
     voor de aanwijzingen die nog komen. */
  function findSet(S, c, lv, k) {
    const n = S.length;
    const full = (1 << n) - 1;
    const seen = {};
    let pool = candidates(S, c, lv).map(function (cl) {
      let m = 0;
      for (let i = 0; i < n; i++) if (cl.test(i)) m |= 1 << i;
      cl.mask = m;
      return cl;
    }).filter(function (cl) {
      if (cl.mask === full || seen[cl.nl]) return false;        /* sluit niemand uit, of staat er al */
      seen[cl.nl] = 1;
      return true;
    });
    pool = shuffle(pool);
    /* de lastigere soorten eerst, zodat ze er ook echt in komen */
    const hard = function (cl) { return lv === 3 ? cl.adv : lv === 2 ? (cl.type !== 'has' && cl.type !== 'not' && cl.type !== 'alibi') : false; };
    if (lv >= 2) pool = pool.filter(hard).concat(pool.filter(function (cl) { return !hard(cl); }));

    const chosen = [];
    let nodes = 0, result = null;
    const allowed = function (cl) {
      const key = cl.type + ':' + cl.attr;
      for (let i = 0; i < chosen.length; i++) {
        if (chosen[i].type + ':' + chosen[i].attr === key) return false;
        if ((cl.type === 'alibi' || cl.type === 'edge' || cl.type === 'half') && chosen[i].type === cl.type) return false;
      }
      /* niet drie keer hetzelfde soort aanwijzing: dat is saai */
      if (chosen.filter(function (x) { return x.type === cl.type; }).length >= 2) return false;
      if (cl.type === 'not' && chosen.filter(function (x) { return x.type === 'not'; }).length >= (lv === 1 ? 1 : 2)) return false;
      return true;
    };
    const minimal = function () {
      return chosen.every(function (cl, j) {
        let m = full;
        chosen.forEach(function (o, i) { if (i !== j) m &= o.mask; });
        return pop(m) > 1;
      });
    };
    const levelOk = function () {
      const plain = chosen.filter(function (x) { return x.type === 'has' || x.type === 'not' || x.type === 'alibi'; }).length;
      if (lv === 2 && plain > k - 2) return false;
      if (lv === 3 && chosen.filter(function (x) { return x.adv; }).length < 2) return false;
      return true;
    };
    const dfs = function (start, mask) {
      if (result || nodes++ > 6000) return;
      const d = chosen.length;
      if (d === k) {
        if (mask === (1 << c) && minimal() && levelOk()) result = chosen.slice();
        return;
      }
      const left = k - d - 1;
      for (let j = start; j < pool.length && !result; j++) {
        const cl = pool[j];
        const m2 = mask & cl.mask;
        const pc = pop(m2);
        if (pc >= pop(mask) || pc < left + 1) continue;
        if (left === 0 && m2 !== (1 << c)) continue;
        if (!allowed(cl)) continue;
        chosen.push(cl);
        dfs(j + 1, m2);
        chosen.pop();
      }
    };
    dfs(0, full);
    return result;
  }

  function generate(lv) {
    const cfg = CFG[lv];
    for (let attempt = 0; attempt < 60; attempt++) {
      const S = makeSuspects(cfg.n);
      if (!S) continue;
      const c = Math.floor(Math.random() * cfg.n);
      const set = findSet(S, c, lv, cfg.k);
      if (!set) continue;
      return { lv: lv, n: cfg.n, suspects: S, culprit: c, clues: shuffle(set), frame: K.pick(FRAMES) };
    }
    return null;
  }

  /* ---- 2. Het spel ---- */
  const Detective = {
    generate: generate,
    solve: function (cs) { return survivors(cs.suspects, cs.clues); },

    makeDuels: function (deck, lv) {
      const seenFrame = {};
      const list = [];
      for (let i = 0; i < CASES; i++) {
        let cs = generate(lv);
        for (let tries = 0; cs && seenFrame[cs.frame.emoji] && tries < 12; tries++) cs = generate(lv);
        if (!cs) cs = generate(lv);
        seenFrame[cs.frame.emoji] = 1;
        list.push({ right: cs.suspects[cs.culprit].name, wrong: '', prompt: cs.frame.ask, why: null, case: cs, done: false, how: null });
      }
      return list;
    },

    init: function (dom) {
      this.dom = dom;
      this.ci = 0;
      this.wrongTotal = 0;
      this.log = [];
      this.waiting = false;
      this.loadCase(0);
    },

    loadCase: function (i) {
      this.ci = i;
      const d = G.duels[i];
      this.cs = d.case;
      this.crossed = {};
      this.sel = null;
      this.guilty = null;
      this.waiting = false;
      this.hit = null;
      this.used = {};
      this.render();
      K.hud();
    },

    render: function () {
      const self = this, cs = this.cs;
      const root = document.createElement('div');
      root.className = 'dt-wrap';
      root.innerHTML =
        '<div class="dt-case"><span class="dt-case-emoji"></span><div><b class="dt-crime"></b><small class="dt-where"></small></div></div>' +
        '<div class="dt-line" style="--n:' + cs.n + '"></div>' +
        '<div class="dt-axis"><span class="dt-left"></span><span class="dt-right"></span></div>' +
        '<div class="dt-legend"></div>' +
        '<h4 class="dt-clues-head"></h4>' +
        '<ol class="dt-clues"></ol>' +
        '<div class="dt-bar"></div>' +
        '<p class="dt-msg" role="status"></p>';
      this.dom.innerHTML = '';
      this.dom.appendChild(root);
      this.root = root;

      const line = root.querySelector('.dt-line');
      cs.suspects.forEach(function (s, i) {
        const b = document.createElement('button');
        b.className = 'dt-card';
        b.dataset.i = i;
        b.setAttribute('aria-label', s.name);
        let icons = '';
        ['head', 'glasses', 'item'].forEach(function (a) {
          const ic = VAL[a][s[a]].icon;
          icons += ic ? '<span class="dt-a">' + ic + '</span>' : '';
        });
        b.innerHTML = '<span class="dt-pos">' + (i + 1) + '</span><span class="dt-face">' + s.face + '</span>' +
          '<b class="dt-name"></b><span class="dt-attrs">' + icons + '</span>' +
          '<span class="dt-shirt" style="--c:' + VAL.shirt[s.shirt].color + '"><i></i></span><span class="dt-x">❌</span>';
        b.querySelector('.dt-name').textContent = s.name;
        b.querySelector('.dt-shirt i').textContent = L(VAL.shirt[s.shirt].word);
        b.addEventListener('click', function () { self.pick(i); });
        line.appendChild(b);
      });
      this.texts();
      this.paint();
    },

    /* alle teksten die van de taal afhangen (ook bij een taalwissel) */
    texts: function () {
      const self = this, cs = this.cs, root = this.root;
      if (!root) return;
      Array.prototype.forEach.call(root.querySelectorAll('.dt-card'), function (b) {
        b.querySelector('.dt-shirt i').textContent = L(VAL.shirt[cs.suspects[parseInt(b.dataset.i, 10)].shirt].word);
      });
      root.querySelector('.dt-case-emoji').textContent = cs.frame.emoji;
      root.querySelector('.dt-crime').textContent = L(cs.frame.crime);
      root.querySelector('.dt-where').textContent = L(cs.frame.where);
      root.querySelector('.dt-left').textContent = '← ' + t('dtLeft');
      root.querySelector('.dt-right').textContent = t('dtRight') + ' →';
      root.querySelector('.dt-clues-head').textContent = '📜 ' + t('dtClues');
      /* de verklaring van de plaatjes, alleen wat er echt in het spel zit */
      const seen = {};
      const leg = [];
      cs.suspects.forEach(function (s) {
        ['head', 'glasses', 'item', 'shirt'].forEach(function (a) {
          const key = a + s[a];
          if (seen[key]) return;
          seen[key] = 1;
          const v = VAL[a][s[a]];
          if (a === 'shirt') leg.push('<span class="dt-leg"><i class="dt-chip" style="background:' + v.color + '"></i> ' + escHtml(L(v.word)) + '</span>');
          else if (v.icon) leg.push('<span class="dt-leg">' + v.icon + ' ' + escHtml(L(v.word)) + '</span>');
          else leg.push('<span class="dt-leg dt-none">— ' + escHtml(L(v.word)) + '</span>');
        });
      });
      root.querySelector('.dt-legend').innerHTML = leg.join('');
      const ol = root.querySelector('.dt-clues');
      ol.innerHTML = '';
      cs.clues.forEach(function (cl, j) {
        const li = document.createElement('li');
        li.className = 'dt-clue' + (self.used[j] ? ' used' : '') + (self.hit === j ? ' hit' : '');
        li.dataset.j = j;
        li.textContent = L(cl);
        li.title = t('dtTickHelp');
        li.addEventListener('click', function () { self.used[j] = !self.used[j]; li.classList.toggle('used'); Sound.click(); });
        ol.appendChild(li);
      });
      this.bar();
    },

    relang: function () { this.texts(); },

    paint: function () {
      const self = this;
      Array.prototype.forEach.call(this.root.querySelectorAll('.dt-card'), function (b) {
        const i = parseInt(b.dataset.i, 10);
        b.classList.toggle('crossed', !!self.crossed[i]);
        b.classList.toggle('sel', self.sel === i);
        b.classList.toggle('guilty', self.guilty === i);
        b.classList.toggle('dim', self.guilty !== null && self.guilty !== i);
      });
    },

    /* de balk onder de aanwijzingen: ❌ en 🕵️ voor de gekozen verdachte */
    bar: function () {
      const self = this, bar = this.root && this.root.querySelector('.dt-bar');
      if (!bar) return;
      bar.innerHTML = '';
      if (this.waiting) {
        const last = this.ci >= G.duels.length - 1;
        const nx = document.createElement('button');
        nx.className = 'big-btn dt-next' + (last ? ' hidden' : '');
        nx.textContent = t('dtNext') + ' →';
        nx.addEventListener('click', function () { Sound.click(); self.loadCase(self.ci + 1); });
        bar.appendChild(nx);
        return;
      }
      if (this.sel === null) {
        const p = document.createElement('p');
        p.className = 'dt-hint';
        p.textContent = t('dtPick');
        bar.appendChild(p);
        return;
      }
      const s = this.cs.suspects[this.sel];
      const x = document.createElement('button');
      x.className = 'ghost-btn dt-cross';
      x.textContent = this.crossed[this.sel] ? '↩️ ' + t('dtUncross').replace('{n}', s.name) : '❌ ' + t('dtCross').replace('{n}', s.name);
      x.addEventListener('click', function () { self.toggleCross(); });
      const a = document.createElement('button');
      a.className = 'big-btn dt-accuse';
      a.textContent = '🕵️ ' + t('dtAccuse').replace('{n}', s.name);
      a.addEventListener('click', function () { self.accuse(self.sel); });
      bar.appendChild(x);
      bar.appendChild(a);
    },

    msg: function (text, kind) {
      const el = this.root && this.root.querySelector('.dt-msg');
      if (!el) return;
      el.textContent = text || '';
      el.className = 'dt-msg' + (kind ? ' ' + kind : '');
    },

    pick: function (i) {
      if (G.state !== 'play' || this.waiting) return;
      Sound.click();
      this.sel = this.sel === i ? null : i;
      this.paint();
      this.bar();
    },

    toggleCross: function () {
      if (G.state !== 'play' || this.sel === null) return;
      this.crossed[this.sel] = !this.crossed[this.sel];
      Sound.click();
      this.sel = null;
      this.paint();
      this.bar();
    },

    accuse: function (i) {
      if (G.state !== 'play' || this.waiting) return;
      const cs = this.cs, s = cs.suspects[i];
      if (i === cs.culprit) {
        this.guilty = i;
        this.waiting = true;
        this.sel = null;
        /* snel en zonder fouten loont */
        const fresh = this.errors(this.ci) === 0;
        this.paint();
        this.msg('✅ ' + L(cs.frame.caught).replace('{n}', s.name), 'good');
        K.resolve(this.ci, 'ok', G.W / 2, 60);
        if (fresh) K.bonus(10, '🔎', G.W / 2, 90);
        FX.burst(60);
        this.bar();
        return;
      }
      /* fout: welke aanwijzing klopt niet bij deze verdachte? */
      this.wrongTotal++;
      this.log.push({ ci: this.ci, accused: s.name, culprit: cs.suspects[cs.culprit].name });
      const j = cs.clues.findIndex(function (cl) { return !cl.test(i); });
      this.hit = j;
      this.crossed[i] = true;
      this.sel = null;
      this.paint();
      const why = L({ nl: 'Aanwijzing ' + (j + 1) + ' klopt niet bij ' + s.name + ': “' + cs.clues[j].nl + '”',
        en: 'Clue ' + (j + 1) + ' does not fit ' + s.name + ': “' + cs.clues[j].en + '”' });
      this.msg('❌ ' + t('dtNot').replace('{n}', s.name) + ' ' + why, 'bad');
      this.log[this.log.length - 1].why = { nl: 'Aanwijzing ' + (j + 1) + ' (“' + cs.clues[j].nl + '”) klopt niet bij ' + s.name + '.',
        en: 'Clue ' + (j + 1) + ' (“' + cs.clues[j].en + '”) does not fit ' + s.name + '.' };
      const li = this.root.querySelector('.dt-clue[data-j="' + j + '"]');
      if (li) { li.classList.add('hit'); li.scrollIntoView({ block: 'nearest', behavior: 'smooth' }); }
      K.loseHeart();
      this.bar();
    },
    errors: function (ci) { return this.log.filter(function (e) { return e.ci === ci; }).length; },

    status: function () {
      return '❤️'.repeat(G.hearts) + '🤍'.repeat(Math.max(0, G.maxHearts - G.hearts));
    },
    countText: function () { return '🔎 ' + Math.min(G.di + 1, G.duels.length) + '/' + G.duels.length; },
    promptText: function () {
      const d = G.duels[this.ci] || G.duels[0];
      return d && d.case ? d.case.frame.emoji + ' ' + L(d.case.frame.ask) : '';
    },

    result: function () {
      const n = G.duels.length;
      const win = G.di >= n && G.hearts > 0;
      const w = this.wrongTotal;
      const stars = win ? (w === 0 ? 3 : w === 1 ? 2 : 1) : (G.di >= 2 ? 1 : 0);
      const log = this.log;
      return {
        win: win, stars: stars, xpMul: 3,
        mistakes: log.map(function (e) { return { right: e.culprit, wrong: e.accused, why: e.why, vocab: false }; }),
        note: function () { return t('dtResult').replace('{n}', G.di).replace('{w}', w); }
      };
    },

    /* voor de test: goed beschuldigen, of iemand die het niet is */
    debugResolve: function (ok) {
      if (G.state !== 'play' || this.waiting) return;
      const cs = this.cs;
      let i = cs.culprit;
      if (!ok) i = cs.suspects.map(function (s, k) { return k; }).filter(function (k) { return k !== cs.culprit; })[0];
      this.accuse(i);
      if (this.waiting && this.ci < G.duels.length - 1) this.loadCase(this.ci + 1);
    }
  };

  Arcade.register({
    id: 'detective', emoji: '🕵️', hue: 215, nl: 'Speurneus', en: 'Super Sleuth', cat: 'puzzle', kind: 'dom', free: true,
    decks: ['read'],
    descNl: 'Lees de aanwijzingen, sluit verdachten uit en pak de dader!',
    descEn: 'Read the clues, rule out suspects and catch the culprit!',
    howNl: 'Er is een misdaad gebeurd en de dader staat in de rij. Lees alle aanwijzingen goed. Tik op een verdachte om hem of haar uit te sluiten ❌ of te beschuldigen 🕵️. Een foute beschuldiging kost een hartje en zegt welke aanwijzing niet klopt.',
    howEn: 'A crime has happened and the culprit is in the line. Read all the clues carefully. Tap a suspect to rule them out ❌ or to accuse them 🕵️. A wrong accusation costs a heart and tells you which clue does not fit.',
    goalNl: '🕵️ Vind de enige verdachte bij wie alle aanwijzingen kloppen',
    goalEn: '🕵️ Find the only suspect that every clue fits'
  }, Detective);
})();
