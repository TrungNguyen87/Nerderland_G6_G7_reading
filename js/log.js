/* =====================================================================
   Opslag en logboek.
   Alles staat in localStorage van de browser: er gaat niets naar internet.
   Meerdere kinderen op hetzelfde apparaat krijgen elk hun eigen profiel
   (eigen XP, munten en logboek), zodat hun resultaten nooit door elkaar
   heen lopen. De ouder kan het logboek exporteren als CSV, JSON of een
   HTML-rapport, altijd voor het profiel dat op dat moment actief is.
   ===================================================================== */
const Store = (function () {
  const NS = 'leeskampioen.v1';
  const PROFILES_KEY = 'leeskampioen.profiles.v1';
  const MAX_EVENTS = 6000;

  const MAX_DAYS = 120;   /* activiteitenlog per dag: ruim meer dan de 10+ dagen die een ouder nodig heeft */

  const blankPlayer = {
    name: '', avatar: '🦸', xp: 0, level: 1, badges: [], best: {}, flashBest: 0,
    coins: 0, tools: { jokers: 0 }, theme: null,
    /* speelkaartjes voor de speelhal: een nieuwe (of bestaande) speler
       begint met drie, zodat de spellen meteen te proberen zijn */
    tickets: 3,
    coinsDaily: { date: '', earned: 0, toastShown: false },
    owned: { sticker: [], icon: [], character: [], tool: [] }
  };
  const blank = { version: 1, player: blankPlayer, events: [], daily: {} };

  function profileKey(id) { return NS + ':' + id; }
  function newId() { return 'p' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6); }

  /* leest één profiel-blob (of de oude, profielloze opslag) */
  function loadBlob(key) {
    try {
      const raw = localStorage.getItem(key);
      if (!raw) return null;
      const parsed = JSON.parse(raw);
      const pp = parsed.player || {};
      /* voorzichtig samenvoegen zodat een oude opslag niet crasht, ook
         de geneste velden van de winkel (owned, tools) */
      return {
        version: 1,
        player: Object.assign({}, blankPlayer, pp, {
          tools: Object.assign({}, blankPlayer.tools, pp.tools || {}),
          owned: Object.assign({}, blankPlayer.owned, pp.owned || {}),
          coinsDaily: Object.assign({}, blankPlayer.coinsDaily, pp.coinsDaily || {})
        }),
        events: Array.isArray(parsed.events) ? parsed.events : [],
        /* het dagoverzicht staat los van de losse gebeurtenissen: het wordt
           nooit ingekort door MAX_EVENTS, zodat een ouder altijd minstens
           de laatste maanden aan dagen kan terugzien, ook na verversen */
        daily: (parsed.daily && typeof parsed.daily === 'object') ? parsed.daily : {}
      };
    } catch (e) {
      return null;
    }
  }

  function loadRegistry() {
    try {
      const raw = localStorage.getItem(PROFILES_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed && Array.isArray(parsed.list)) return parsed;
      }
    } catch (e) { /* niets, dan bouwen we een nieuwe hieronder */ }
    return null;
  }

  function saveRegistry() {
    try { localStorage.setItem(PROFILES_KEY, JSON.stringify(registry)); } catch (e) {}
  }

  /* ---- opstarten: profielregister inlezen, of eenmalig migreren vanaf
     de oude opslag (van vóór er profielen bestonden) zodat niemand zijn
     voortgang kwijtraakt bij deze update ---- */
  let registry = loadRegistry();
  if (!registry) {
    registry = { activeId: null, list: [] };
    const legacy = loadBlob(NS);
    if (legacy && (legacy.player.name || legacy.events.length)) {
      const id = newId();
      registry.list.push({ id: id, name: legacy.player.name || '', avatar: legacy.player.avatar || '🦸', lastPlayed: Date.now() });
      registry.activeId = id;
      try { localStorage.setItem(profileKey(id), JSON.stringify(legacy)); } catch (e) {}
    }
  }

  let activeId = null;
  let data;
  if (registry.activeId && registry.list.some(function (p) { return p.id === registry.activeId; })) {
    activeId = registry.activeId;
    data = loadBlob(profileKey(activeId)) || JSON.parse(JSON.stringify(blank));
  } else if (registry.list.length) {
    activeId = registry.list[0].id;
    data = loadBlob(profileKey(activeId)) || JSON.parse(JSON.stringify(blank));
  } else {
    data = JSON.parse(JSON.stringify(blank));
  }
  registry.activeId = activeId;
  saveRegistry();

  function save() {
    if (!activeId) return;   /* nog geen profiel gekozen: niets om te bewaren */
    try {
      if (data.events.length > MAX_EVENTS) data.events = data.events.slice(-MAX_EVENTS);
      localStorage.setItem(profileKey(activeId), JSON.stringify(data));
      const entry = registry.list.filter(function (p) { return p.id === activeId; })[0];
      if (entry) {
        entry.name = data.player.name || '';
        entry.avatar = data.player.avatar || '🦸';
        entry.lastPlayed = Date.now();
        saveRegistry();
      }
    } catch (e) {
      /* opslag vol of geblokkeerd (privémodus): het spel blijft gewoon werken */
    }
  }

  /* maakt een nieuw, leeg profiel aan en maakt het meteen actief */
  function createProfile(name, avatar) {
    const id = newId();
    data = JSON.parse(JSON.stringify(blank));
    data.player.name = name || '';
    data.player.avatar = avatar || blankPlayer.avatar;
    activeId = id;
    registry.list.push({ id: id, name: data.player.name, avatar: data.player.avatar, lastPlayed: Date.now() });
    registry.activeId = id;
    saveRegistry();
    save();
    return id;
  }

  /* wisselt naar een bestaand profiel (bijv. het andere kind, of de ouder
     die een ander logboek wil bekijken) */
  function switchTo(id) {
    const entry = registry.list.filter(function (p) { return p.id === id; })[0];
    if (!entry) return false;
    data = loadBlob(profileKey(id)) || JSON.parse(JSON.stringify(blank));
    activeId = id;
    registry.activeId = id;
    saveRegistry();
    return true;
  }

  /* verwijdert een profiel volledig (gebruikt door "Wis alles") */
  function deleteProfile(id) {
    registry.list = registry.list.filter(function (p) { return p.id !== id; });
    try { localStorage.removeItem(profileKey(id)); } catch (e) {}
    if (activeId === id) {
      if (registry.list.length) {
        switchTo(registry.list[0].id);
        return;
      }
      activeId = null;
      data = JSON.parse(JSON.stringify(blank));
      registry.activeId = null;
    }
    saveRegistry();
  }

  /* telt elke gebeurtenis mee in het dagoverzicht van die kalenderdag */
  function bumpDaily(ev) {
    if (!data.daily) data.daily = {};
    const day = localDay(ev.ts);
    if (!data.daily[day]) {
      data.daily[day] = {
        sessions: {}, readMs: 0, quizMs: 0, stories: 0, questions: 0, correct: 0,
        spellWords: 0, spellCorrect: 0, spellSets: 0, coinsEarned: 0, badges: 0,
        games: 0, kist: 0, first: ev.ts, last: ev.ts
      };
    }
    const d = data.daily[day];
    d.last = ev.ts;
    if (ev.session) d.sessions[ev.session] = 1;
    if (ev.t === 'answer') { d.questions++; if (ev.correct) d.correct++; d.quizMs += ev.ms || 0; }
    else if (ev.t === 'read_done') { d.readMs += ev.readMs || 0; }
    else if (ev.t === 'story_done') { d.stories++; }
    else if (ev.t === 'spell_item') { d.spellWords++; if (ev.correct) d.spellCorrect++; }
    else if (ev.t === 'spell_done') { d.spellSets++; }
    else if (ev.t === 'badge') { d.badges++; }
    else if (ev.t === 'coins_earned') { d.coinsEarned += ev.amount || 0; }
    else if (ev.t === 'arcade_done') { d.games = (d.games || 0) + 1; }
    else if (ev.t === 'kist_card') { d.kist = (d.kist || 0) + 1; }

    /* nooit onbeperkt laten groeien: alleen de recentste MAX_DAYS bewaren */
    const days = Object.keys(data.daily).sort();
    if (days.length > MAX_DAYS) {
      days.slice(0, days.length - MAX_DAYS).forEach(function (k) { delete data.daily[k]; });
    }
  }

  /* elke gebeurtenis krijgt de naam van de speler erbij, zodat een export
     ook nog te herleiden is als hij los van dit apparaat bekeken wordt */
  function log(type, payload) {
    const ev = Object.assign({ t: type, ts: Date.now(), player: data.player.name || '' }, payload || {});
    data.events.push(ev);
    bumpDaily(ev);
    save();
    return ev;
  }

  return {
    get data() { return data; },
    get player() { return data.player; },
    get events() { return data.events; },
    /* alle profielen op dit apparaat, meest recent gespeeld eerst */
    get profiles() {
      return registry.list.slice().sort(function (a, b) { return (b.lastPlayed || 0) - (a.lastPlayed || 0); });
    },
    get activeProfileId() { return activeId; },
    save: save,
    log: log,
    createProfile: createProfile,
    switchTo: switchTo,
    /* wist alleen het actieve profiel, niet de andere spelers op dit apparaat */
    wipe: function () {
      if (activeId) deleteProfile(activeId);
      else data = JSON.parse(JSON.stringify(blank));
    }
  };
})();

/* =====================================================================
   Statistiek: rekent het logboek om naar iets wat een ouder snapt.
   ===================================================================== */
const Stats = (function () {

  function answers(events) {
    return (events || Store.events).filter(function (e) { return e.t === 'answer'; });
  }

  function summary(events) {
    events = events || Store.events;
    const a = answers(events);
    const done = events.filter(function (e) { return e.t === 'story_done'; });
    const reads = events.filter(function (e) { return e.t === 'read_done'; });

    const correct = a.filter(function (e) { return e.correct; }).length;
    const readMs = reads.reduce(function (s, e) { return s + (e.readMs || 0); }, 0);
    const quizMs = a.reduce(function (s, e) { return s + (e.ms || 0); }, 0);
    const wpmList = reads.map(function (e) { return e.wpm; }).filter(function (w) { return w > 0 && w <= 350; });
    const skimmed = reads.filter(function (e) { return e.skimmed; }).length;

    const days = {};
    events.forEach(function (e) { days[localDay(e.ts)] = 1; });

    return {
      stories: done.length,
      questions: a.length,
      correct: correct,
      accuracy: a.length ? Math.round(correct / a.length * 100) : 0,
      readMs: readMs,
      totalMs: readMs + quizMs,
      wpm: wpmList.length ? Math.round(wpmList.reduce(function (s, w) { return s + w; }, 0) / wpmList.length) : 0,
      skimmed: skimmed,
      reads: reads.length,
      days: Object.keys(days).length
    };
  }

  /* ---- spelling ---- */
  function spellItems(events) {
    return (events || Store.events).filter(function (e) { return e.t === 'spell_item'; });
  }

  function spellSummary(events) {
    const a = spellItems(events);
    const done = (events || Store.events).filter(function (e) { return e.t === 'spell_done'; });
    const ok = a.filter(function (e) { return e.correct; }).length;
    return {
      words: a.length,
      correct: ok,
      accuracy: a.length ? Math.round(ok / a.length * 100) : 0,
      sets: done.length
    };
  }

  function spellByCat(events) {
    const out = {};
    (window.SPELL_CATS || []).forEach(function (c) { out[c.id] = { n: 0, ok: 0 }; });
    spellItems(events).forEach(function (e) {
      if (!out[e.cat]) out[e.cat] = { n: 0, ok: 0 };
      out[e.cat].n++;
      if (e.correct) out[e.cat].ok++;
    });
    return out;
  }

  /* de woorden die het vaakst fout gaan, zodat een ouder gericht kan oefenen */
  function spellMistakes(events) {
    const map = {};
    spellItems(events).forEach(function (e) {
      if (e.correct) return;
      const k = e.word || '?';
      if (!map[k]) map[k] = { word: k, n: 0, cat: e.cat, given: e.given };
      map[k].n++;
      map[k].given = e.given;
    });
    return Object.keys(map).map(function (k) { return map[k]; })
      .sort(function (a, b) { return b.n - a.n; });
  }

  function bySkill(events) {
    const out = {};
    Object.keys(window.SKILLS).forEach(function (k) { out[k] = { n: 0, ok: 0 }; });
    answers(events).forEach(function (e) {
      if (!out[e.skill]) out[e.skill] = { n: 0, ok: 0 };
      out[e.skill].n++;
      if (e.correct) out[e.skill].ok++;
    });
    return out;
  }

  function byTopicLevel(events) {
    const out = {};
    answers(events).forEach(function (e) {
      const k = e.topic + '|' + e.level;
      if (!out[k]) out[k] = { topic: e.topic, level: e.level, n: 0, ok: 0 };
      out[k].n++;
      if (e.correct) out[k].ok++;
    });
    return Object.keys(out).map(function (k) { return out[k]; })
      .sort(function (x, y) { return x.topic.localeCompare(y.topic) || x.level - y.level; });
  }

  /* Concreet advies voor thuis, gebaseerd op de zwakste vaardigheden */
  function advice(events) {
    const sk = bySkill(events);
    const rows = Object.keys(sk)
      .filter(function (k) { return sk[k].n >= 3; })
      .map(function (k) { return { k: k, pct: sk[k].ok / sk[k].n, n: sk[k].n }; })
      .sort(function (a, b) { return a.pct - b.pct; });

    const tips = [];
    const lang = window.LANG || 'nl';

    rows.slice(0, 2).forEach(function (r) {
      if (r.pct >= 0.8) return;
      const s = window.SKILLS[r.k];
      const pct = Math.round(r.pct * 100);
      if (lang === 'nl') {
        tips.push(s.emoji + ' <b>' + s.nl + '</b> ligt op ' + pct + '% goed. ' + s.tipNl);
      } else {
        tips.push(s.emoji + ' <b>' + s.en + '</b> is at ' + pct + '% correct. ' + s.tipEn);
      }
    });

    const sum = summary(events);
    if (sum.wpm && sum.wpm < 90) {
      tips.push(lang === 'nl'
        ? '📖 Het leestempo is ongeveer ' + sum.wpm + ' woorden per minuut. Laat uw kind elke dag 10 minuten hardop lezen; tempo groeit vooral door hardop lezen.'
        : '📖 Reading pace is about ' + sum.wpm + ' words per minute. Ten minutes of reading out loud each day is what builds pace.');
    }
    if (sum.accuracy >= 85 && sum.stories >= 3) {
      tips.push(lang === 'nl'
        ? '🏔️ Het gaat goed op dit niveau. Laat uw kind vaker een niveau hoger kiezen.'
        : '🏔️ This level is going well. Let your child pick a harder level more often.');
    }
    if (sum.skimmed >= 2) {
      tips.push(lang === 'nl'
        ? '⏭️ ' + sum.skimmed + ' van de ' + sum.reads + ' keer is er binnen enkele seconden op "Ik heb het gelezen" geklikt. Vraag uw kind het verhaal eerst hardop na te vertellen voordat het verder gaat.'
        : '⏭️ ' + sum.skimmed + ' out of ' + sum.reads + ' times "I have read it" was clicked within seconds. Ask your child to retell the story before moving on.');
    }
    if (sum.accuracy > 0 && sum.accuracy < 55) {
      tips.push(lang === 'nl'
        ? '🌱 Veel vragen gaan mis. Kies een niveau lager en lees het verhaal samen voor met de knop "Voorlezen".'
        : '🌱 Many questions go wrong. Pick a lower level and use the "Read aloud" button together.');
    }
    /* spelling: noem de zwakste regel met de naam van die regel erbij */
    const sp = spellSummary(events);
    if (sp.words >= 6) {
      const cats = spellByCat(events);
      const weak = Object.keys(cats)
        .filter(function (k) { return cats[k].n >= 3; })
        .map(function (k) { return { k: k, pct: cats[k].ok / cats[k].n }; })
        .sort(function (a, b) { return a.pct - b.pct; })[0];
      if (weak && weak.pct < 0.8) {
        const c = (window.SPELL_CATS || []).filter(function (x) { return x.id === weak.k; })[0];
        const name = c ? (lang === 'nl' ? c.nl : c.en) : weak.k;
        const emoji = c ? c.emoji : '✍️';
        tips.push(lang === 'nl'
          ? emoji + ' Spelling: <b>' + name + '</b> ligt op ' + Math.round(weak.pct * 100) +
            '% goed. Laat uw kind die regel hardop opzeggen voordat het het woord opschrijft.'
          : emoji + ' Spelling: <b>' + name + '</b> is at ' + Math.round(weak.pct * 100) +
            '% correct. Have your child say the rule out loud before writing the word.');
      }
      const missed = spellMistakes(events).slice(0, 4).map(function (m) { return m.word; });
      if (missed.length >= 3) {
        tips.push(lang === 'nl'
          ? '📝 Maak thuis een dictee van deze woorden: <b>' + missed.join(', ') + '</b>.'
          : '📝 Make a home dictation of these words: <b>' + missed.join(', ') + '</b>.');
      }
    } else if (sp.words === 0 && sum.questions >= 10) {
      tips.push(lang === 'nl'
        ? '✍️ De spellingspellen zijn nog niet geprobeerd. Tik boven in het spel op "Spelling" — één oefening duurt maar een paar minuten.'
        : '✍️ The spelling games have not been tried yet. Tap "Spelling" at the top — one exercise only takes a few minutes.');
    }

    if (!tips.length) {
      tips.push(lang === 'nl'
        ? '👏 Er zijn nog geen zwakke plekken te zien. Blijf afwisselen tussen onderwerpen.'
        : '👏 No weak spots visible yet. Keep alternating between topics.');
    }
    return tips;
  }

  /* Het activiteitenlog per dag voor de ouder: gebaseerd op Store.data.daily,
     dat los staat van de losse gebeurtenissen en dus nooit ingekort wordt.
     Geeft de laatste `nDays` dagen terug, nieuwste eerst. */
  function dailyLog(nDays) {
    const daily = Store.data.daily || {};
    const days = Object.keys(daily).sort().reverse().slice(0, nDays || 14);
    return days.map(function (day) {
      const d = daily[day];
      const totalMs = (d.readMs || 0) + (d.quizMs || 0);
      return {
        date: day,
        sessions: Object.keys(d.sessions || {}).length,
        minutes: Math.round(totalMs / 60000),
        stories: d.stories || 0,
        questions: d.questions || 0,
        correct: d.correct || 0,
        accuracy: d.questions ? Math.round(d.correct / d.questions * 100) : 0,
        spellWords: d.spellWords || 0,
        spellSets: d.spellSets || 0,
        coinsEarned: d.coinsEarned || 0,
        badges: d.badges || 0,
        games: d.games || 0,
        kist: d.kist || 0
      };
    });
  }

  return {
    answers: answers, summary: summary, bySkill: bySkill, byTopicLevel: byTopicLevel, advice: advice,
    spellItems: spellItems, spellSummary: spellSummary, spellByCat: spellByCat, spellMistakes: spellMistakes,
    dailyLog: dailyLog
  };
})();

/* =====================================================================
   Exporteren
   ===================================================================== */
const Exporter = (function () {

  function download(filename, text, mime) {
    const blob = new Blob([text], { type: (mime || 'text/plain') + ';charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    setTimeout(function () { document.body.removeChild(a); URL.revokeObjectURL(url); }, 400);
  }

  function stamp() {
    const d = new Date();
    const p = function (n) { return String(n).padStart(2, '0'); };
    return d.getFullYear() + '-' + p(d.getMonth() + 1) + '-' + p(d.getDate()) + '_' + p(d.getHours()) + p(d.getMinutes());
  }

  function esc(v) {
    if (v === null || v === undefined) return '';
    const s = String(v).replace(/"/g, '""').replace(/\r?\n/g, ' ');
    return /[",;]/.test(s) ? '"' + s + '"' : s;
  }

  /* naam van de speler, geschikt om in een bestandsnaam te zetten */
  function nameSlug() {
    const name = (Store.player.name || '').trim();
    if (!name) return '';
    return '_' + name.toLowerCase()
      .replace(/[^a-z0-9à-ž]+/g, '-')
      .replace(/^-+|-+$/g, '')
      .slice(0, 24);
  }

  function csv() {
    const head = ['datum', 'tijd', 'speler', 'sessie', 'onderwerp', 'niveau', 'verhaal', 'vraag_id', 'vraagtype',
                  'leesvaardigheid', 'goed', 'antwoord_kind', 'juiste_antwoord', 'seconden', 'hint_gebruikt', 'taal', 'vraag'];
    const rows = [head.join(',')];

    Store.events.forEach(function (e) {
      if (e.t !== 'answer') return;
      const d = new Date(e.ts);
      rows.push([
        localDay(e.ts),
        d.toTimeString().slice(0, 8),
        e.player || '',
        e.session || '',
        e.topic || '',
        e.level || '',
        e.story || '',
        e.qId || '',
        e.qType || '',
        e.skill || '',
        e.correct ? 1 : 0,
        e.given || '',
        e.expected || '',
        e.ms ? (e.ms / 1000).toFixed(1) : '',
        e.hint ? 1 : 0,
        e.lang || '',
        e.qText || ''
      ].map(esc).join(','));
    });

    /* leesregels apart onderaan, zodat het tempo ook in de CSV staat */
    rows.push('');
    rows.push(['datum', 'tijd', 'speler', 'sessie', 'onderwerp', 'niveau', 'verhaal', 'leestijd_sec', 'aantal_woorden', 'woorden_per_minuut', 'voorgelezen'].join(','));
    Store.events.forEach(function (e) {
      if (e.t !== 'read_done') return;
      const d = new Date(e.ts);
      rows.push([
        localDay(e.ts), d.toTimeString().slice(0, 8), e.player || '', e.session || '',
        e.topic || '', e.level || '', e.story || '',
        e.readMs ? Math.round(e.readMs / 1000) : '', e.words || '', e.wpm || '', e.tts ? 1 : 0
      ].map(esc).join(','));
    });

    /* en de spellingoefeningen, één regel per woord */
    rows.push('');
    rows.push(['datum', 'tijd', 'speler', 'sessie', 'spellingregel', 'niveau', 'oefening', 'soort',
               'woord', 'antwoord_kind', 'goed', 'seconden'].join(','));
    Store.events.forEach(function (e) {
      if (e.t !== 'spell_item') return;
      const d = new Date(e.ts);
      rows.push([
        localDay(e.ts), d.toTimeString().slice(0, 8), e.player || '', e.session || '',
        e.cat || '', e.level || '', e.set || '', e.itype || '',
        e.word || '', e.given || '', e.correct ? 1 : 0,
        e.ms ? (e.ms / 1000).toFixed(1) : ''
      ].map(esc).join(','));
    });

    /* de speelhal en de Woordkist, zodat de ouder ziet hoeveel er gespeeld
       en herhaald is naast het echte lezen */
    rows.push('');
    rows.push(['datum', 'tijd', 'speler', 'sessie', 'activiteit', 'soort', 'goed', 'van', 'score', 'gemiste_woorden'].join(','));
    Store.events.forEach(function (e) {
      if (e.t !== 'arcade_done' && e.t !== 'woordkist_done') return;
      const d = new Date(e.ts);
      const arcade = e.t === 'arcade_done';
      rows.push([
        localDay(e.ts), d.toTimeString().slice(0, 8), e.player || '', e.session || '',
        arcade ? 'speelhal:' + (e.game || '') : 'woordkist', (e.deck || '') + (arcade && e.level ? ' · level ' + e.level : ''),
        e.correct || 0, arcade ? (e.total || 0) : (e.cards || 0), arcade ? (e.score || 0) : '',
        arcade ? (e.missed || '') : ''
      ].map(esc).join(','));
    });

    download('leeskampioen' + nameSlug() + '_' + stamp() + '.csv', '﻿' + rows.join('\n'), 'text/csv');
  }

  function json() {
    const payload = {
      exported: new Date().toISOString(),
      app: 'Leeskampioen',
      player: Store.player,
      summary: Stats.summary(),
      bySkill: Stats.bySkill(),
      byTopicLevel: Stats.byTopicLevel(),
      spelling: {
        summary: Stats.spellSummary(),
        byCategory: Stats.spellByCat(),
        mistakes: Stats.spellMistakes()
      },
      events: Store.events
    };
    download('leeskampioen' + nameSlug() + '_' + stamp() + '.json', JSON.stringify(payload, null, 2), 'application/json');
  }

  /* Zelfstandig HTML-rapport: dubbelklikken en printen kan */
  function report() {
    const s = Stats.summary();
    const sk = Stats.bySkill();
    const tl = Stats.byTopicLevel();
    const tips = Stats.advice();
    const p = Store.player;
    const nl = (window.LANG || 'nl') === 'nl';
    const titleOf = function (id) {
      const st = window.STORY_DB.filter(function (x) { return x.id === id; })[0];
      return st ? L(st.title) : id;
    };
    const topicName = function (id) {
      const tp = window.TOPICS.filter(function (x) { return x.id === id; })[0];
      return tp ? (nl ? tp.nl : tp.en) : id;
    };

    let skillRows = '';
    Object.keys(sk).forEach(function (k) {
      if (!sk[k].n) return;
      const pct = Math.round(sk[k].ok / sk[k].n * 100);
      const col = pct >= 80 ? '#22a86b' : pct >= 60 ? '#f0a500' : '#e4483f';
      skillRows += '<tr><td>' + window.SKILLS[k].emoji + ' ' + (nl ? window.SKILLS[k].nl : window.SKILLS[k].en) +
        '</td><td>' + sk[k].ok + '/' + sk[k].n + '</td>' +
        '<td><div style="background:#eee;border-radius:9px;height:14px;width:180px">' +
        '<div style="background:' + col + ';width:' + pct + '%;height:100%;border-radius:9px"></div></div></td>' +
        '<td><b style="color:' + col + '">' + pct + '%</b></td></tr>';
    });

    let topicRows = '';
    tl.forEach(function (r) {
      const pct = Math.round(r.ok / r.n * 100);
      topicRows += '<tr><td>' + topicName(r.topic) + '</td><td>' + (nl ? 'niveau ' : 'level ') + r.level +
        '</td><td>' + r.ok + '/' + r.n + '</td><td>' + pct + '%</td></tr>';
    });

    /* spelling per regel + de woorden die misgingen */
    const sp = Stats.spellSummary();
    const spCats = Stats.spellByCat();
    let spellRows = '';
    Object.keys(spCats).forEach(function (k) {
      if (!spCats[k].n) return;
      const c = (window.SPELL_CATS || []).filter(function (x) { return x.id === k; })[0];
      const pct = Math.round(spCats[k].ok / spCats[k].n * 100);
      const col = pct >= 80 ? '#22a86b' : pct >= 60 ? '#f0a500' : '#e4483f';
      spellRows += '<tr><td>' + (c ? c.emoji + ' ' + (nl ? c.nl : c.en) : k) + '</td><td>' +
        spCats[k].ok + '/' + spCats[k].n + '</td>' +
        '<td><div style="background:#eee;border-radius:9px;height:14px;width:180px">' +
        '<div style="background:' + col + ';width:' + pct + '%;height:100%;border-radius:9px"></div></div></td>' +
        '<td><b style="color:' + col + '">' + pct + '%</b></td></tr>';
    });
    let missedRows = '';
    Stats.spellMistakes().slice(0, 25).forEach(function (m) {
      const c = (window.SPELL_CATS || []).filter(function (x) { return x.id === m.cat; })[0];
      missedRows += '<tr><td style="color:#22a86b"><b>' + escHtml(m.word) + '</b></td><td style="color:#e4483f">' +
        escHtml(m.given || '-') + '</td><td>' + (c ? (nl ? c.nl : c.en) : '') + '</td><td>' + m.n + '×</td></tr>';
    });

    let wrongRows = '';
    Stats.answers().filter(function (e) { return !e.correct; }).slice(-25).reverse().forEach(function (e) {
      wrongRows += '<tr><td>' + new Date(e.ts).toLocaleDateString() + '</td><td>' + titleOf(e.story) +
        '</td><td>' + escHtml(e.qText || e.qId) + '</td><td style="color:#e4483f">' + escHtml(e.given || '-') +
        '</td><td style="color:#22a86b">' + escHtml(e.expected || '-') + '</td></tr>';
    });

    const html = '<!DOCTYPE html><html lang="' + (nl ? 'nl' : 'en') + '"><head><meta charset="utf-8">' +
      '<title>' + (nl ? 'Leesrapport' : 'Reading report') + ' - ' + escHtml(p.name || 'speler') + '</title>' +
      '<style>body{font-family:system-ui,Segoe UI,sans-serif;max-width:820px;margin:32px auto;padding:0 20px;color:#23243a;line-height:1.6}' +
      'h1{margin-bottom:4px}h2{margin-top:32px;border-bottom:2px solid #eee;padding-bottom:6px}' +
      'table{border-collapse:collapse;width:100%;margin-top:10px}td,th{padding:8px 10px;border-bottom:1px solid #eee;text-align:left;font-size:14px}' +
      'th{background:#f7f7fb;font-size:12px;text-transform:uppercase;letter-spacing:.4px}' +
      '.tiles{display:flex;flex-wrap:wrap;gap:10px;margin-top:14px}' +
      '.tile{background:#f5f5fb;border-radius:14px;padding:14px 18px;min-width:112px}' +
      '.tile b{display:block;font-size:22px}.tile small{color:#666}' +
      'li{margin-bottom:8px}@media print{body{margin:0}}</style></head><body>' +
      '<h1>' + (nl ? '📚 Leesrapport' : '📚 Reading report') + '</h1>' +
      '<p><b>' + escHtml(p.name || (nl ? 'Speler' : 'Player')) + '</b> ' + p.avatar + ' &middot; ' +
      (nl ? 'gemaakt op ' : 'generated ') + new Date().toLocaleString() + '</p>' +
      '<div class="tiles">' +
      '<div class="tile"><b>' + s.stories + '</b><small>' + (nl ? 'verhalen' : 'stories') + '</small></div>' +
      '<div class="tile"><b>' + s.questions + '</b><small>' + (nl ? 'vragen' : 'questions') + '</small></div>' +
      '<div class="tile"><b>' + s.accuracy + '%</b><small>' + (nl ? 'goed' : 'correct') + '</small></div>' +
      '<div class="tile"><b>' + Math.round(s.totalMs / 60000) + 'm</b><small>' + (nl ? 'speeltijd' : 'time played') + '</small></div>' +
      '<div class="tile"><b>' + s.wpm + '</b><small>' + (nl ? 'woorden/min' : 'words/min') + '</small></div>' +
      '<div class="tile"><b>' + s.days + '</b><small>' + (nl ? 'dagen actief' : 'days active') + '</small></div>' +
      '</div>' +
      '<h2>' + (nl ? 'Per leesvaardigheid' : 'By reading skill') + '</h2><table><tr><th>' +
      (nl ? 'Vaardigheid' : 'Skill') + '</th><th>' + (nl ? 'Goed' : 'Correct') + '</th><th></th><th>%</th></tr>' + skillRows + '</table>' +
      '<h2>' + (nl ? 'Per onderwerp en niveau' : 'By topic and level') + '</h2><table><tr><th>' +
      (nl ? 'Onderwerp' : 'Topic') + '</th><th>' + (nl ? 'Niveau' : 'Level') + '</th><th>' +
      (nl ? 'Goed' : 'Correct') + '</th><th>%</th></tr>' + topicRows + '</table>' +
      (sp.words
        ? '<h2>' + (nl ? '✍️ Spelling per regel' : '✍️ Spelling by rule') + '</h2>' +
          '<p>' + (nl ? 'In totaal ' : 'A total of ') + sp.words + (nl ? ' woorden geoefend, waarvan ' : ' words practised, of which ') +
          sp.correct + (nl ? ' goed (' : ' correct (') + sp.accuracy + '%).</p>' +
          '<table><tr><th>' + (nl ? 'Regel' : 'Rule') + '</th><th>' + (nl ? 'Goed' : 'Correct') +
          '</th><th></th><th>%</th></tr>' + spellRows + '</table>' +
          (missedRows
            ? '<h2>' + (nl ? 'Woorden om thuis te dicteren' : 'Words to dictate at home') + '</h2>' +
              '<table><tr><th>' + (nl ? 'Goed' : 'Correct') + '</th><th>' + (nl ? 'Schreef' : 'Wrote') +
              '</th><th>' + (nl ? 'Regel' : 'Rule') + '</th><th>' + (nl ? 'Keer fout' : 'Times wrong') +
              '</th></tr>' + missedRows + '</table>'
            : '')
        : '') +
      '<h2>' + (nl ? 'Laatste fouten om samen na te kijken' : 'Recent mistakes to review together') + '</h2>' +
      '<table><tr><th>' + (nl ? 'Datum' : 'Date') + '</th><th>' + (nl ? 'Verhaal' : 'Story') + '</th><th>' +
      (nl ? 'Vraag' : 'Question') + '</th><th>' + (nl ? 'Gaf' : 'Gave') + '</th><th>' + (nl ? 'Moest zijn' : 'Should be') +
      '</th></tr>' + (wrongRows || '<tr><td colspan="5">' + (nl ? 'Geen fouten. Netjes!' : 'No mistakes. Well done!') + '</td></tr>') + '</table>' +
      '<h2>' + (nl ? 'Advies voor thuis' : 'Advice for home') + '</h2><ul><li>' + tips.join('</li><li>') + '</li></ul>' +
      /* speelhal en Woordkist: zo ziet de ouder ook hoeveel er gespeeld
         werd naast het echte lezen (spellen kosten kaartjes die je met
         lezen verdient) */
      '<h2>' + (nl ? '🎮 Speelhal en 🗃️ Woordkist' : '🎮 Arcade and 🗃️ Word box') + '</h2><p>' +
      (nl ? 'Spellen gespeeld: ' : 'Games played: ') + (Store.player.arcadePlays || 0) + ' &middot; ' +
      (nl ? 'Woordkist-rondes: ' : 'Word box rounds: ') + ((Store.player.kist || {}).sessions || 0) + ' &middot; ' +
      (nl ? 'woorden gekend (vakje 3 of hoger): ' : 'words known (box 3 or higher): ') +
      Object.keys((Store.player.kist || {}).cards || {}).filter(function (k) { return Store.player.kist.cards[k].box >= 3; }).length +
      '</p><p style="color:#666;font-size:13px">' +
      (nl ? 'Een spel in de speelhal kost een kaartje; kaartjes verdient uw kind alleen met lezen, spelling en de Woordkist.'
          : 'A game in the arcade costs a ticket; your child only earns tickets through reading, spelling and the Word box.') + '</p>' +
      /* diploma's: welke niveaus heeft uw kind afgerond (en staan nu op slot) */
      (function () {
        const keys = (typeof Ladder !== 'undefined') ? Ladder.list() : [];
        const books = keys.filter(function (k) { return k.indexOf('book:') === 0; }).length;
        const names = keys.slice(-12).map(function (k) { const d = Ladder.describe(k); return d ? escHtml(d.label + ': ' + d.title + ' (' + d.sub + ')') : ''; })
          .filter(Boolean);
        return '<h2>' + (nl ? '🎓 Diploma’s' : '🎓 Diplomas') + '</h2><p>' +
          (nl ? 'Behaald: ' : 'Earned: ') + keys.length + ' &middot; ' + (nl ? 'vervolgverhalen uitgelezen: ' : 'serial stories finished: ') + books +
          ' &middot; ' + (nl ? 'afgeronde niveaus op slot: ' : 'finished levels closed: ') +
          ((typeof Ladder !== 'undefined' && Ladder.lockOn()) ? (nl ? 'ja' : 'yes') : (nl ? 'nee' : 'no')) + '</p>' +
          (names.length ? '<ul><li>' + names.join('</li><li>') + '</li></ul>' : '');
      })() +
      '<p style="margin-top:36px;color:#888;font-size:12px">Leeskampioen &middot; ' +
      (nl ? 'feedback of vragen: ' : 'feedback or questions: ') + FEEDBACK_EMAIL + '</p>' +
      '</body></html>';

    download('leesrapport' + nameSlug() + '_' + stamp() + '.html', html, 'text/html');
  }

  return { csv: csv, json: json, report: report };
})();
