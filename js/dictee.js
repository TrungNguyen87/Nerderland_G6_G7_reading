/* =====================================================================
   Dagdictee en Werkwoordtrainer - spelling die nooit op raakt.

   Twee kaarten bovenaan het spellingscherm:

   📅 Dagdictee      elke dag tien woorden door elkaar, uit alle regels
                     die open staan. Woorden die de laatste keer fout
                     gingen komen terug, de zwakste regels vaker, en er
                     zitten altijd twee werkwoorden bij. Zelfde dag +
                     zelfde speler = hetzelfde dictee (ook na herladen).
                     Elke dag dat het dictee af is krijgt een stempel op
                     een kalender van 30 dagen ("spellingmaand"); bij
                     stempel 7, 14, 21 en 30 komt er een cadeaudoos.
   ⚡ Werkwoordtrainer eindeloos d/t/dt oefenen op groep 6, 7 of 8-niveau.
                     Elke ronde tien nieuwe zinnen uit data/verbs.js.

   Beide zijn "virtuele" oefeningen: Spell.openSet() speelt ze zoals elke
   andere oefening, maar ze tellen niet mee voor spellBest of de diploma's
   (die horen bij de vaste oefeningen). Elke opdracht draagt zijn eigen
   regel in `cat`, zodat de ouderstatistiek per regel blijft kloppen en
   de knop "De regel" de juiste regel laat zien.

   Opslag: Store.player.dictee = { days: { 'JJJJ-MM-DD': {stars, ok, n} },
   count, cur: { day, items } } en Store.player.verbs = { best: {lv: {stars,
   ok, n}}, rounds }.
   ===================================================================== */
'use strict';

const Dictee = (function () {

  const MONTH = 30;
  const MILESTONES = [7, 14, 21, 30];
  const DAILY_SIZE = 10;
  const DAILY_VERBS = 2;
  const ROUND_SIZE = 10;

  /* ---- kleine helpers ---- */
  function cap(s) { return s ? s.charAt(0).toUpperCase() + s.slice(1) : s; }
  function one(arr, rnd) { return arr[Math.floor(rnd() * arr.length)]; }
  function mix(arr, rnd) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(rnd() * (i + 1));
      const x = a[i]; a[i] = a[j]; a[j] = x;
    }
    return a;
  }
  function uniq(list) { return list.filter(function (x, i) { return x && list.indexOf(x) === i; }); }
  function words(parts) { return parts.filter(Boolean).join(' '); }
  function weighted(table, rnd) {
    const keys = Object.keys(table);
    let x = rnd() * keys.reduce(function (n, k) { return n + table[k]; }, 0);
    for (let i = 0; i < keys.length; i++) { x -= table[keys[i]]; if (x < 0) return keys[i]; }
    return keys[keys.length - 1];
  }

  /* =====================================================================
     1. Werkwoorden: van één rij uit data/verbs.js naar een opdracht
     ===================================================================== */
  const SUBJ3 = [
    { nl: 'hij', en: 'he' }, { nl: 'zij', en: 'she' }, { nl: 'Sanne', en: 'Sanne' }, { nl: 'Daan', en: 'Daan' },
    { nl: 'mijn zus', en: 'my sister' }, { nl: 'de buurman', en: 'the neighbour' }, { nl: 'opa', en: 'grandpa' },
    { nl: 'de juf', en: 'the teacher' }
  ];
  const SUBJPL = [
    { nl: 'wij', en: 'we' }, { nl: 'jullie', en: 'you' }, { nl: 'mijn ouders', en: 'my parents' },
    { nl: 'de kinderen', en: 'the children' }
  ];
  const WHEN_PAST = [['Gisteren', 'Yesterday'], ['Vorige week', 'Last week'], ['Toen', 'Then']];
  const WHEN_STATE = [['Toen', 'Back then'], ['Vroeger', 'In the old days']];
  const WHEN_NOW = [['Vandaag', 'Today'], ['Nu', 'Now']];
  const AUX = { h: { ik: 'heb', s3: 'heeft', pl: 'hebben' }, z: { ik: 'ben', s3: 'is', pl: 'zijn' } };
  const AUX_EN = { ik: 'have', s3: 'has', pl: 'have' };

  /* welke vormen er op elk niveau voorkomen, en hoe vaak */
  const LEVELS = {
    1: { maxLv: 1, forms: { ik: 2, jij: 1, inv: 2, hij: 4 } },
    2: { maxLv: 2, prefer: 2, forms: { ik: 1, inv: 1, hij: 2, hijNow: 1, past: 3, pastPl: 1, perf: 3 } },
    3: { maxLv: 3, prefer: 3, forms: { inv: 1, invNow: 1, hij: 2, hijNow: 1, u: 1, uInv: 1, past: 2, pastPl: 1, perf: 3 } }
  };
  /* met een vast onderwerp (het sneeuwt, het vliegtuig landt) kan alleen dit */
  const FIXED_FORMS = ['hij', 'hijNow', 'past', 'perf'];

  function verbs() { return window.VERBS || []; }
  function pres3(v) { return /t$/.test(v.stem) ? v.stem : v.stem + 't'; }
  function pastPl(v) { return v.pastPl || v.past + 'n'; }

  /* de letter waar 't kofschip naar kijkt: bij verhuizen en leven is dat
     de z of v van het hele werkwoord, niet de s of f van de stam */
  function kofLetter(v) {
    const root = v.inf.replace(/en$/, '');
    const last = root.slice(-1);
    if (last === 'z' || last === 'v') return last;
    if (/ch$/.test(v.stem)) return 'ch';
    return v.stem.slice(-1);
  }
  function inKof(l) { return ['t', 'k', 'f', 's', 'ch', 'p', 'x'].indexOf(l) !== -1; }

  /* ---- foute vormen om uit te kiezen ---- */
  function presWrongs(v, right) {
    const s = v.stem;
    let w = [];
    if (right === s) {
      w.push(s + 't');
      if (/d$/.test(s)) w.push(s.slice(0, -1) + 't');
    } else {
      w.push(s);
      if (/d$/.test(s)) w.push(s.slice(0, -1) + 't');
      if (/t$/.test(s)) w.push(s + 't');
      /* de echte instinker: het gebeurd / hij verhuisd */
      if (v.pp === s + 'd') w.unshift(v.pp);
    }
    /* "zitt" of "eett" maakt geen kind; alleen bij lange woorden als
       verwacht → verwachtt is dat een echte fout */
    w = w.filter(function (x) { return !/tt$/.test(x) || v.pre; });
    return uniq(w).filter(function (x) { return x !== right; });
  }

  function pastWrongs(v, plural) {
    const right = plural ? pastPl(v) : v.past;
    let w;
    if (v.sp) {
      w = ((v.bad && v.bad.past) || []).slice();
      if (plural) w = w.filter(function (x) { return /e$/.test(x); }).map(function (x) { return x + 'n'; });
    } else {
      const p = v.past;
      if (/dde$/.test(p)) w = [p.slice(0, -2) + 'e', p.slice(0, -2) + 'te'];
      else if (/tte$/.test(p)) w = [p.slice(0, -2) + 'e', p.slice(0, -2) + 'de'];
      else if (/te$/.test(p)) w = [p.slice(0, -2) + 'de'];
      else w = [p.slice(0, -2) + 'te'];
      if (plural) w = w.map(function (x) { return x + 'n'; });
    }
    return uniq(w).filter(function (x) { return x !== right; });
  }

  function ppWrongs(v) {
    if (v.bad && v.bad.pp) return uniq(v.bad.pp).filter(function (x) { return x !== v.pp; });
    const p = v.pp;
    let w = [];
    if (/d$/.test(p)) w = [p.slice(0, -1) + 't', p + 't'];
    else if (/t$/.test(p)) w = [p.slice(0, -1) + 'd'];
    if (v.pre) w.unshift('ge' + p);
    return uniq(w).filter(function (x) { return x !== p; });
  }

  /* ---- de uitleg onder de opdracht ---- */
  function whyPres(v, right, who) {
    const s = v.stem;
    let nl, en;
    if (who === 'ik') {
      nl = 'Bij <b>ik</b> schrijf je alleen de stam: ik ' + s + '.';
      en = 'With <b>ik</b> you write only the stem: ik ' + s + '.';
      if (/d$/.test(s)) {
        nl += ' De d hoort bij de stam (' + v.inf + '), dus die blijft staan.';
        en += ' The d belongs to the stem (' + v.inf + '), so it stays.';
      }
    } else if (who === 'inv' || who === 'invNow') {
      nl = 'Staat <b>jij</b> achter het werkwoord? Dan komt er geen t achter de stam: ' + s + ' jij.';
      en = 'When <b>jij</b> comes after the verb, no t is added to the stem: ' + s + ' jij.';
    } else if (who === 'u') {
      nl = 'Bij <b>u</b> komt er altijd een t achter de stam: u ' + right + '. Ook als u achter het werkwoord staat: ' + right + ' u?';
      en = 'With <b>u</b> you always add a t to the stem: u ' + right + '. Also when u comes after the verb: ' + right + ' u?';
    } else if (who === 'uInv') {
      nl = 'Bij <b>u</b> blijft de t staan, ook als u achter het werkwoord staat: ' + right + ' u? Alleen bij jij valt hij dan weg: ' + s + ' jij?';
      en = 'With <b>u</b> the t stays, even when u comes after the verb: ' + right + ' u? Only with jij does it drop off: ' + s + ' jij?';
    } else {
      nl = 'Bij hij, zij, het en jij (vóór het werkwoord) komt er een t achter de stam.';
      en = 'With hij, zij, het and jij (before the verb) you add a t to the stem.';
      if (who === 'hijNow') {
        nl += ' Ook als hij of zij achter het werkwoord staat!';
        en += ' Also when hij or zij comes after the verb!';
      }
      if (/t$/.test(s)) {
        nl += ' De stam ' + s + ' eindigt al op een t, dus er komt geen tweede t bij: ' + right + '.';
        en += ' The stem ' + s + ' already ends in t, so no second t: ' + right + '.';
      } else if (/d$/.test(s)) {
        nl += ' Stam ' + s + ' + t = ' + right + '. Je hoort het niet, maar je schrijft dt.';
        en += ' Stem ' + s + ' + t = ' + right + '. You cannot hear it, but you write dt.';
      } else {
        nl += ' Stam ' + s + ' + t = ' + right + '.';
        en += ' Stem ' + s + ' + t = ' + right + '.';
      }
      if (v.pp === s + 'd') {
        nl += ' Let op: ' + v.pp + ' met een d is het voltooid deelwoord (het is ' + v.pp + ').';
        en += ' Careful: ' + v.pp + ' with a d is the past participle (het is ' + v.pp + ').';
      }
    }
    return { nl: nl, en: en };
  }

  function whyPast(v, plural) {
    let nl, en;
    if (v.sp) {
      nl = cap(v.inf) + ' is een sterk werkwoord: de verleden tijd is ' + v.past +
        (plural ? ', in het meervoud ' + pastPl(v) : '') + '. Geen -te of -de.';
      en = cap(v.inf) + ' is a strong verb: the past tense is ' + v.past +
        (plural ? ', plural ' + pastPl(v) : '') + '. No -te or -de.';
      if (!plural && /d$/.test(v.past)) {
        nl += ' En er komt ook geen t achter: ' + v.past + '.';
        en += ' And no t is added either: ' + v.past + '.';
      }
      return { nl: nl, en: en };
    }
    const l = kofLetter(v);
    if (l === 'z' || l === 'v') {
      nl = 'Kijk naar het hele werkwoord: ' + v.inf + ', met een ' + l + ". Die zit niet in 't kofschip, dus -de: " + v.past + '.';
      en = 'Look at the whole verb: ' + v.inf + ', with a ' + l + ". That is not in 't kofschip, so -de: " + v.past + '.';
    } else if (inKof(l)) {
      nl = 'De stam ' + v.stem + ' eindigt op ' + l + ", en die zit in 't kofschip: " + v.stem + ' + te = ' + v.past + '.';
      en = 'The stem ' + v.stem + ' ends in ' + l + ", which is in 't kofschip: " + v.stem + ' + te = ' + v.past + '.';
    } else {
      nl = 'De stam ' + v.stem + ' eindigt op ' + l + ". Die zit niet in 't kofschip: " + v.stem + ' + de = ' + v.past + '.';
      en = 'The stem ' + v.stem + ' ends in ' + l + ", which is not in 't kofschip: " + v.stem + ' + de = ' + v.past + '.';
    }
    if (/dde$/.test(v.past)) { nl += " Daarom staan er twee d's."; en += " That is why there are two d's."; }
    if (/tte$/.test(v.past)) { nl += " Daarom staan er twee t's."; en += " That is why there are two t's."; }
    if (plural) {
      nl += ' In het meervoud komt er een n achter: ' + pastPl(v) + '.';
      en += ' In the plural an n is added: ' + pastPl(v) + '.';
    }
    return { nl: nl, en: en };
  }

  function whyPp(v) {
    let nl = '', en = '';
    if (v.pre) {
      nl = cap(v.inf) + ' begint al met ' + v.pre + '-, dus er komt geen ge- voor. ';
      en = cap(v.inf) + ' already starts with ' + v.pre + '-, so no ge- is added. ';
    }
    if (v.spp) {
      nl += cap(v.inf) + ' is een sterk werkwoord: het voltooid deelwoord is ' + v.pp + '.';
      en += cap(v.inf) + ' is a strong verb: the past participle is ' + v.pp + '.';
      return { nl: nl, en: en };
    }
    const l = kofLetter(v);
    if (/d$/.test(v.stem) && /d$/.test(v.pp)) {
      nl += 'De stam ' + v.stem + ' eindigt al op een d, dus er komt niets meer bij: ' + v.pp + '. Nooit dt in een voltooid deelwoord!';
      en += 'The stem ' + v.stem + ' already ends in d, so nothing is added: ' + v.pp + '. Never dt in a past participle!';
    } else if (/t$/.test(v.stem) && /t$/.test(v.pp)) {
      nl += 'De stam ' + v.stem + ' eindigt al op een t, dus er komt niets meer bij: ' + v.pp + '.';
      en += 'The stem ' + v.stem + ' already ends in t, so nothing is added: ' + v.pp + '.';
    } else if (l === 'z' || l === 'v') {
      nl += 'Kijk naar het hele werkwoord: ' + v.inf + ', met een ' + l + ". Die zit niet in 't kofschip, dus een d: " + v.pp + '.';
      en += 'Look at the whole verb: ' + v.inf + ', with a ' + l + ". That is not in 't kofschip, so a d: " + v.pp + '.';
    } else if (inKof(l)) {
      nl += 'De stam ' + v.stem + ' eindigt op ' + l + ", en die zit in 't kofschip: dus een t. " + cap(v.pp) + '.';
      en += 'The stem ' + v.stem + ' ends in ' + l + ", which is in 't kofschip: so a t. " + cap(v.pp) + '.';
    } else {
      nl += 'De stam ' + v.stem + ' eindigt op ' + l + ". Die zit niet in 't kofschip: dus een d. " + cap(v.pp) + '.';
      en += 'The stem ' + v.stem + ' ends in ' + l + ", which is not in 't kofschip: so a d. " + cap(v.pp) + '.';
    }
    return { nl: nl, en: en };
  }

  /* ---- één opdracht ---- */
  function subjectsFor(v, c) { return c.subj || v.subj || null; }

  function frame(v, form, rnd) {
    const c = one(v.c, rnd);
    const fixed = subjectsFor(v, c);
    if (fixed && FIXED_FORMS.indexOf(form) === -1) return null;
    /* ik houd en ik hou zijn allebei goed: daar vragen we niet naar */
    if (v.noIk && ['ik', 'inv', 'invNow'].indexOf(form) !== -1) return null;
    const s3 = fixed ? one(fixed, rnd) : one(SUBJ3, rnd);
    const when = one(v.t === 's' ? WHEN_STATE : WHEN_PAST, rnd);
    const now = one(WHEN_NOW, rnd);
    let nl, en, right, wrongs, why;

    if (form === 'ik') {
      nl = words(['Ik', '___', c.nl]) + '.'; en = words(['I', '___', c.en]) + '.';
      right = v.stem; wrongs = presWrongs(v, right); why = whyPres(v, right, 'ik');
    } else if (form === 'jij') {
      nl = words(['Jij', '___', c.nl]) + '.'; en = words(['You', '___', c.en]) + '.';
      right = pres3(v); wrongs = presWrongs(v, right); why = whyPres(v, right, 'hij');
    } else if (form === 'inv') {
      nl = words(['___', 'jij', c.nl]) + '?'; en = words(['___', 'you', c.en]) + '?';
      right = v.stem; wrongs = presWrongs(v, right); why = whyPres(v, right, 'inv');
    } else if (form === 'invNow') {
      nl = words([now[0], '___', 'jij', c.nl]) + '.'; en = words([now[1], 'you', '___', c.en]) + '.';
      right = v.stem; wrongs = presWrongs(v, right); why = whyPres(v, right, 'invNow');
    } else if (form === 'hij') {
      nl = words([cap(s3.nl), '___', c.nl]) + '.'; en = words([cap(s3.en), '___', c.en]) + '.';
      right = pres3(v); wrongs = presWrongs(v, right); why = whyPres(v, right, 'hij');
    } else if (form === 'hijNow') {
      nl = words([now[0], '___', s3.nl, c.nl]) + '.'; en = words([now[1], s3.en, '___', c.en]) + '.';
      right = pres3(v); wrongs = presWrongs(v, right); why = whyPres(v, right, 'hijNow');
    } else if (form === 'u') {
      nl = words(['U', '___', c.nl]) + '.'; en = words(['You', '___', c.en]) + '.';
      right = pres3(v); wrongs = presWrongs(v, right); why = whyPres(v, right, 'u');
    } else if (form === 'uInv') {
      nl = words(['___', 'u', c.nl]) + '?'; en = words(['___', 'you', c.en]) + '?';
      right = pres3(v); wrongs = presWrongs(v, right); why = whyPres(v, right, 'uInv');
    } else if (form === 'past') {
      const who = fixed ? s3 : (rnd() < 0.25 ? { nl: 'ik', en: 'I' } : s3);
      nl = words([when[0], '___', who.nl, c.nl]) + '.'; en = words([when[1], who.en, '___', c.en]) + '.';
      right = v.past; wrongs = pastWrongs(v, false); why = whyPast(v, false);
    } else if (form === 'pastPl') {
      const pl = one(SUBJPL, rnd);
      nl = words([when[0], '___', pl.nl, c.nl]) + '.'; en = words([when[1], pl.en, '___', c.en]) + '.';
      right = pastPl(v); wrongs = pastWrongs(v, true); why = whyPast(v, true);
    } else if (form === 'perf') {
      const r = fixed ? 2 : rnd();
      const who = r < 0.2 ? { s: { nl: 'ik', en: 'I' }, k: 'ik' } : r < 0.35 ? { s: { nl: 'wij', en: 'we' }, k: 'pl' } : { s: s3, k: 's3' };
      nl = words([cap(who.s.nl), AUX[v.aux][who.k], c.nl, '___']) + '.';
      en = words([cap(who.s.en), AUX_EN[who.k], '___', c.en]) + '.';
      right = v.pp; wrongs = ppWrongs(v); why = whyPp(v);
    } else return null;

    /* staat het werkwoord vooraan, dan krijgt het de hoofdletter */
    if (nl.indexOf('___') === 0) {
      right = cap(right);
      wrongs = wrongs.map(cap);
    }
    return { nl: nl, en: en, right: right, wrongs: wrongs, why: why };
  }

  function makeItem(v, form, kind, rnd) {
    const f = frame(v, form, rnd);
    if (!f) return null;
    const hint = { nl: ' (' + v.inf + ')', en: ' (' + v.inf + ': ' + v.en + ')' };
    if (!f.wrongs.length) kind = 'type';
    if (kind === 'error') {
      const toks = f.nl.split(' ');
      const at = toks.findIndex(function (w) { return w.indexOf('___') !== -1; });
      return {
        type: 'error', cat: 'dt', verb: v.inf,
        words: toks.map(function (w, i) { return i === at ? w.replace('___', f.wrongs[0]) : w; }),
        answer: at, fix: toks[at].replace('___', f.right), why: f.why
      };
    }
    const sentence = { nl: f.nl + hint.nl, en: f.en + hint.en };
    if (kind === 'type') return { type: 'type', cat: 'dt', verb: v.inf, word: f.right, sentence: sentence, why: f.why };
    return {
      type: 'pick', cat: 'dt', verb: v.inf, sentence: sentence, why: f.why,
      options: [f.right].concat(mix(f.wrongs, rnd).slice(0, 2)), answer: 0
    };
  }

  /* n opdrachten op niveau lv (1-3), elk met een ander werkwoord */
  function verbItems(lv, n, rnd) {
    rnd = rnd || Math.random;
    const L = LEVELS[lv] || LEVELS[1];
    const pool = verbs().filter(function (v) { return v.lv <= L.maxLv; });
    const top = pool.filter(function (v) { return v.lv === L.prefer; });
    const out = [];
    const used = {};
    let guard = 0;
    while (out.length < n && guard++ < 400 && pool.length) {
      const v = top.length && rnd() < 0.5 ? one(top, rnd) : one(pool, rnd);
      if (used[v.inf] && guard < 300) continue;
      const r = rnd();
      const kind = r < 0.55 ? 'pick' : r < 0.8 ? 'type' : 'error';
      const it = makeItem(v, weighted(L.forms, rnd), kind, rnd);
      if (!it) continue;
      used[v.inf] = 1;
      out.push(it);
    }
    return out;
  }

  /* het niveau dat bij de speler past: wie groep 8-spelling doet krijgt
     groep 8-werkwoorden, wie verder is dan de eerste oefeningen groep 7 */
  function playerLevel() {
    const best = Store.player.spellBest || {};
    const sets = (window.SPELL_SETS || []).filter(function (s) { return best[s.id]; });
    if (sets.some(function (s) { return s.grade === 8; })) return 3;
    if (sets.some(function (s) { return s.level >= 2; })) return 2;
    return 1;
  }

  /* =====================================================================
     2. Opslag
     ===================================================================== */
  function dict() {
    const p = Store.player;
    if (!p.dictee || typeof p.dictee !== 'object') p.dictee = {};
    if (!p.dictee.days || typeof p.dictee.days !== 'object') p.dictee.days = {};
    if (typeof p.dictee.count !== 'number') p.dictee.count = Object.keys(p.dictee.days).length;
    return p.dictee;
  }
  function verbState() {
    const p = Store.player;
    if (!p.verbs || typeof p.verbs !== 'object') p.verbs = {};
    if (!p.verbs.best || typeof p.verbs.best !== 'object') p.verbs.best = {};
    if (typeof p.verbs.rounds !== 'number') p.verbs.rounds = 0;
    return p.verbs;
  }
  function daysDone() { return Store.activeProfileId ? dict().count : 0; }
  /* de stempel van vandaag op de kalender van deze maand (1-30); 0 = nog niets */
  function monthDay(count) { return count ? ((count - 1) % MONTH) + 1 : 0; }

  /* =====================================================================
     3. Het dagdictee
     ===================================================================== */
  function dailyItems(rnd) {
    const out = [];
    const seen = {};
    const add = function (it, cat) {
      const k = Spell.wordOf(it) + '|' + it.type;
      if (seen[k]) return;
      seen[k] = 1;
      out.push(Object.assign({}, it, { cat: cat }));
    };
    /* groep 8-stof pas als het kind zelf al groep 8-spelling doet */
    const g8 = playerLevel() === 3;
    const sets = (window.SPELL_SETS || []).filter(function (s) { return Spell.isOpen(s) && (g8 || s.grade !== 8); });

    /* 1. woorden die de laatste keer fout gingen (de events staan op volgorde) */
    const last = {};
    Stats.spellItems().forEach(function (e) { if (e.word) last[e.word] = e.correct; });
    const wrong = [];
    sets.forEach(function (s) {
      s.items.forEach(function (it) { if (last[Spell.wordOf(it)] === false) wrong.push({ it: it, cat: s.cat }); });
    });
    mix(wrong, rnd).slice(0, 3).forEach(function (x) { add(x.it, x.cat); });

    /* 2. de rest: één opdracht per regel, de zwakste regels eerst */
    const acc = Stats.spellByCat();
    const cats = (window.SPELL_CATS || [])
      .filter(function (c) { return sets.some(function (s) { return s.cat === c.id; }); })
      .map(function (c) {
        const d = acc[c.id] || { n: 0, ok: 0 };
        return { id: c.id, score: (d.ok + 1) / (d.n + 2) + rnd() * 0.35 };
      })
      .sort(function (a, b) { return a.score - b.score; });
    let i = 0;
    while (out.length < DAILY_SIZE - DAILY_VERBS && i < cats.length * 4) {
      const c = cats[i % cats.length];
      i++;
      const s = one(sets.filter(function (x) { return x.cat === c.id; }), rnd);
      add(one(s.items, rnd), s.cat);
    }

    /* 3. altijd twee werkwoorden */
    verbItems(playerLevel(), DAILY_VERBS, rnd).forEach(function (it) { add(it, 'dt'); });
    return mix(out, rnd);
  }

  /* het dictee van vandaag; eenmaal gemaakt blijft het de hele dag gelijk */
  function todaySet() {
    const d = dict();
    const day = localDay();
    if (!d.cur || d.cur.day !== day || !Array.isArray(d.cur.items) || !d.cur.items.length) {
      const rnd = Rewards.seeded('dictee|' + day + '|' + (Store.activeProfileId || ''));
      d.cur = { day: day, items: dailyItems(rnd) };
      Store.save();
    }
    return {
      id: 'daily-' + day, virtual: 'daily', cat: null, day: day,
      level: playerLevel(), emoji: '📅', hue: 200,
      title: { nl: 'Dagdictee', en: 'Daily dictation' },
      items: JSON.parse(JSON.stringify(d.cur.items)),
      onFinish: function (r) { return dailyDone(day, r); }
    };
  }

  function dailyDone(day, r) {
    const d = dict();
    const prev = d.days[day];
    const rec = { stars: r.stars, ok: r.correct, n: r.total };
    if (prev) {
      if (r.correct > prev.ok) d.days[day] = rec;
      Store.save();
      return { note: '' };
    }
    d.days[day] = rec;
    d.count = (d.count || 0) + 1;
    const n = monthDay(d.count);
    let note = t('dailyStamped').replace('{n}', n);
    addCoins(10, 'dictee');
    Store.log('dictee_day', { day: day, count: d.count, stars: r.stars });
    if (MILESTONES.indexOf(n) !== -1) Rewards.grantChest('dictee');
    if (n === MONTH) note = t('dailyMonthDone');
    Store.save();
    return { note: note };
  }

  function openDaily() {
    Sound.click();
    S.mode = 'spell';
    Spell.openSet(todaySet());
  }

  /* =====================================================================
     4. De werkwoordtrainer
     ===================================================================== */
  function verbSet(lv) {
    return {
      id: 'verbs-' + lv, virtual: 'verbs', cat: null, level: lv,
      grade: lv === 3 ? 8 : undefined, emoji: '⚡', hue: 355,
      title: { nl: 'Werkwoordtrainer · groep ' + (lv + 5), en: 'Verb trainer · group ' + (lv + 5) },
      items: verbItems(lv, ROUND_SIZE, Math.random),
      onFinish: function (r) { return verbDone(lv, r); },
      again: function () { openVerbs(lv); }
    };
  }

  function verbDone(lv, r) {
    const st = verbState();
    st.rounds++;
    const b = st.best[lv];
    if (!b || r.correct > b.ok) st.best[lv] = { stars: r.stars, ok: r.correct, n: r.total };
    Store.log('verb_round', { level: lv, correct: r.correct, total: r.total });
    Store.save();
    return { note: '', verbs8: lv === 3 && r.correct === r.total };
  }

  function openVerbs(lv) {
    S.mode = 'spell';
    Spell.openSet(verbSet(lv));
  }

  /* =====================================================================
     5. De twee kaarten bovenaan het spellingscherm
     ===================================================================== */
  function dailyCard() {
    const d = dict();
    const today = d.days[localDay()];
    const n = monthDay(d.count);
    /* is de maand net vol, laat dan nog de volle kalender zien tot morgen */
    const shown = today ? n : (n === MONTH ? 0 : n);
    const card = document.createElement('button');
    card.className = 'daily-card' + (today ? ' done' : '');
    card.id = 'daily-card';
    let cal = '';
    for (let i = 1; i <= MONTH; i++) {
      const on = i <= shown;
      const gift = MILESTONES.indexOf(i) !== -1;
      cal += '<i class="cal-cell' + (on ? ' on' : '') + (gift ? ' gift' : '') + (i === shown && today ? ' today' : '') + '">' +
        (on ? '✓' : gift ? '🎁' : i) + '</i>';
    }
    card.innerHTML =
      '<span class="dc-emoji">📅</span>' +
      '<span class="dc-body"><b class="dc-title">' + t('dailyTitle') + '</b>' +
      '<span class="dc-sub">' + t('dailySub') + '</span>' +
      '<span class="dc-status">' + (today ? '✅ ' + t('dailyDoneToday') + ' ' + '⭐'.repeat(today.stars) : '✏️ ' + t('dailyTodo')) +
      ' &middot; ' + t('dailyMonth').replace('{n}', shown) + '</span>' +
      '<span class="cal">' + cal + '</span></span>';
    card.addEventListener('click', openDaily);
    return card;
  }

  function verbCard() {
    const st = verbState();
    const card = document.createElement('div');
    card.className = 'daily-card verb-card';
    card.id = 'verb-card';
    let btns = '';
    [1, 2, 3].forEach(function (lv) {
      const b = st.best[lv];
      btns += '<button class="verb-lv" data-lv="' + lv + '">' + [t('verbLv1'), t('verbLv2'), t('verbLv3')][lv - 1] +
        '<small>' + (b ? '⭐'.repeat(b.stars) + ' ' + b.ok + '/' + b.n : t('notYet')) + '</small></button>';
    });
    card.innerHTML =
      '<span class="dc-emoji">⚡</span>' +
      '<span class="dc-body"><b class="dc-title">' + t('verbTitle') + '</b>' +
      '<span class="dc-sub">' + t('verbSub') + '</span>' +
      '<span class="verb-lvs">' + btns + '</span>' +
      (st.rounds ? '<span class="dc-status">' + t('verbRounds').replace('{n}', st.rounds) + '</span>' : '') + '</span>';
    $$('.verb-lv', card).forEach(function (b) {
      b.addEventListener('click', function () { Sound.click(); openVerbs(parseInt(b.dataset.lv, 10)); });
    });
    return card;
  }

  function renderCards(grid) {
    if (!Store.activeProfileId) return;
    const h = document.createElement('h3');
    h.className = 'grid-heading';
    h.textContent = '📅 ' + t('dailyHead');
    grid.appendChild(h);
    grid.appendChild(dailyCard());
    grid.appendChild(verbCard());
  }

  return {
    renderCards: renderCards,
    openDaily: openDaily,
    openVerbs: openVerbs,
    daysDone: daysDone,
    rounds: function () { return Store.activeProfileId ? verbState().rounds : 0; },
    /* voor de tests: een ronde maken zonder hem te spelen */
    verbItems: verbItems,
    todaySet: todaySet,
    levels: LEVELS
  };
})();
