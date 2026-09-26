/* =====================================================================
   De diplomaladder: wat je al kunt, gaat op slot - met een diploma.

   Een kind dat alles al gespeeld heeft, blijft anders de makkelijke
   dingen herhalen (snelle sterren, snelle munten). Daarom:

     - Lezen: heb je ALLE verhalen van een niveau in een wereld met minstens
       ⭐⭐ gelezen, dan krijg je het leesdiploma van dat niveau en gaat het
       niveau op slot. Het hoogste niveau van een wereld gaat nooit op slot.
     - Spelling: een oefening met ⭐⭐ of meer gaat op slot, behalve de
       moeilijkste oefening van die regel.
     - Spellen: elk spel heeft drie levels (groep 6, 7 en 8). ⭐ opent het
       volgende level, ⭐⭐ geeft het diploma en zet het level op slot.
       Level 3 gaat nooit op slot.
     - Vervolgverhalen: hoofdstuk 1 en 2 gaan met ⭐⭐ op slot; het laatste
       hoofdstuk uitlezen geeft het boekdiploma.

   Het slot voelt als een beloning, niet als straf: een gouden kaart met
   🎓, een diploma op naam, en een knop die meteen naar het volgende niveau
   gaat, waar ook meer XP te verdienen is. Een ouder kan het slot per kind
   uitzetten in het ouderdeel (Store.player.lockEasy = false); diploma's
   blijven dan gewoon komen.

   Alles staat in Store.player.diplomas ({ sleutel: tijdstip }), per kind.
   Sleutels: 'read:<wereld>:<niveau>', 'spell:<oefening-id>',
   'game:<spel-id>:<level>' en 'book:<serie-id>'.
   ===================================================================== */
'use strict';

const Ladder = (function () {

  const GAME_TOP = 3;

  function pl() { return Store.player; }
  /* Arcade is een const van een ander script: dat staat NIET op window */
  function arcadeGames() { return typeof Arcade !== 'undefined' ? Arcade.games : []; }
  function active() { return !!Store.activeProfileId; }

  /* ---- het slot: standaard aan, de ouder kan het per kind uitzetten ---- */
  function lockOn() { const p = pl(); return !p || p.lockEasy !== false; }
  function setLock(on) { pl().lockEasy = !!on; Store.save(); }

  function diplomas() {
    const p = pl();
    if (!p.diplomas || typeof p.diplomas !== 'object') p.diplomas = {};
    return p.diplomas;
  }
  function has(key) { return !!diplomas()[key]; }
  function count() { return active() ? Object.keys(diplomas()).length : 0; }
  function stars(best, id) { return best[id] ? best[id].stars || 0 : 0; }

  /* =====================================================================
     1. Lezen (de werelden; vervolgverhalen tellen hier niet mee)
     ===================================================================== */
  function worldStories(topic, level) {
    return (window.STORY_DB || []).filter(function (s) {
      return !s.series && s.topic === topic && (level === undefined || s.level === level);
    });
  }
  function readTop(topic) {
    return worldStories(topic).reduce(function (m, s) { return Math.max(m, s.level); }, 0);
  }
  function readStatus(topic, level) {
    const list = worldStories(topic, level);
    const best = pl().best || {};
    const good = list.filter(function (s) { return stars(best, s.id) >= 2; }).length;
    return { total: list.length, good: good, need: list.length - good };
  }
  function readGraduated(topic, level) {
    if (level >= readTop(topic)) return false;
    const st = readStatus(topic, level);
    return st.total > 0 && st.need === 0;
  }
  function readLocked(topic, level) { return lockOn() && readGraduated(topic, level); }

  /* de trede waar het volgende diploma te halen is: het laagste niveau dat
     al open is maar nog geen diploma heeft */
  function readNext(topic) {
    const top = readTop(topic);
    for (let lv = 1; lv < top; lv++) {
      if (readGraduated(topic, lv)) continue;
      if (typeof levelUnlocked === 'function' && !levelUnlocked(topic, lv)) return null;
      return lv;
    }
    return null;
  }

  /* =====================================================================
     2. Spelling
     ===================================================================== */
  function spellTop(cat) {
    return (window.SPELL_SETS || []).filter(function (s) { return s.cat === cat; })
      .reduce(function (m, s) { return Math.max(m, s.level); }, 0);
  }
  function spellGraduated(set) {
    if (!set || set.level >= spellTop(set.cat)) return false;
    return stars(pl().spellBest || {}, set.id) >= 2;
  }
  function spellLocked(set) { return lockOn() && spellGraduated(set); }

  /* =====================================================================
     3. Spellen: drie levels per spel
     ===================================================================== */
  function gameRec(id, lv) {
    const g = pl().games || {};
    return (g[id] || {})[lv] || null;
  }
  function gameStars(id, lv) { const r = gameRec(id, lv); return r ? r.stars || 0 : 0; }
  function gameUnlocked(id, lv) { return lv <= 1 || gameStars(id, lv - 1) >= 1; }
  function gameGraduated(id, lv) { return lv < GAME_TOP && gameStars(id, lv) >= 2; }
  function gameLocked(id, lv) { return lockOn() && gameGraduated(id, lv); }
  /* het hoogste level dat open is en niet op slot: daar speel je */
  function gameCurrent(id) {
    let cur = 1;
    for (let lv = 1; lv <= GAME_TOP; lv++) if (gameUnlocked(id, lv) && !gameLocked(id, lv)) cur = lv;
    return cur;
  }

  /* =====================================================================
     4. Vervolgverhalen
     ===================================================================== */
  function seriesById(id) { return (window.SERIES || []).filter(function (s) { return s.id === id; })[0]; }
  function chapters(ser) {
    return (window.STORY_DB || []).filter(function (s) { return s.series === ser.id; })
      .sort(function (a, b) { return a.chapter - b.chapter; });
  }
  function chapterUnlocked(story) {
    if (!story.series || story.chapter <= 1) return true;
    const prev = chapters(seriesById(story.series)).filter(function (s) { return s.chapter === story.chapter - 1; })[0];
    return !!prev && stars(pl().best || {}, prev.id) >= 1;
  }
  function chapterGraduated(story) {
    const ser = story.series && seriesById(story.series);
    if (!ser || story.chapter >= chapters(ser).length) return false;
    return stars(pl().best || {}, story.id) >= 2;
  }
  function bookDone(ser) {
    const list = chapters(ser);
    const last = list[list.length - 1];
    return !!last && stars(pl().best || {}, last.id) >= 1;
  }

  /* voor elk verhaal, uit een wereld of uit een boek */
  function storyLocked(story) {
    if (!story) return false;
    if (story.series) return lockOn() && chapterGraduated(story);
    return readLocked(story.topic, story.level);
  }

  /* =====================================================================
     5. Diploma's uitreiken
     ===================================================================== */
  function award(key, silent) {
    if (!active() || has(key)) return null;
    diplomas()[key] = Date.now();
    Store.log('diploma', { key: key, silent: !!silent });
    if (!silent) addXP(20);
    Store.save();
    return key;
  }

  function checkStory(story) {
    if (!story) return [];
    if (story.series) {
      const ser = seriesById(story.series);
      return ser && bookDone(ser) ? [award('book:' + ser.id)].filter(Boolean) : [];
    }
    return readGraduated(story.topic, story.level) ? [award('read:' + story.topic + ':' + story.level)].filter(Boolean) : [];
  }
  function checkSpell(set) {
    return spellGraduated(set) ? [award('spell:' + set.id)].filter(Boolean) : [];
  }
  function checkGame(id, lv) {
    return gameGraduated(id, lv) ? [award('game:' + id + ':' + lv)].filter(Boolean) : [];
  }

  /* Wie al veel gespeeld had voor deze update, krijgt de diploma's voor wat
     hij al kon in één keer (zonder twintig schermen achter elkaar) */
  function sync() {
    if (!active()) return 0;
    let n = 0;
    const give = function (key) { if (award(key, true)) n++; };
    (window.TOPICS || []).forEach(function (tp) {
      for (let lv = 1; lv < readTop(tp.id); lv++) if (readGraduated(tp.id, lv)) give('read:' + tp.id + ':' + lv);
    });
    (window.SPELL_SETS || []).forEach(function (s) { if (spellGraduated(s)) give('spell:' + s.id); });
    arcadeGames().forEach(function (g) {
      for (let lv = 1; lv < GAME_TOP; lv++) if (gameGraduated(g.id, lv)) give('game:' + g.id + ':' + lv);
    });
    (window.SERIES || []).forEach(function (ser) { if (bookDone(ser)) give('book:' + ser.id); });
    return n;
  }

  /* hoeveel diploma's er in totaal te halen zijn */
  function total() {
    let n = 0;
    (window.TOPICS || []).forEach(function (tp) {
      for (let lv = 1; lv < readTop(tp.id); lv++) if (worldStories(tp.id, lv).length) n++;
    });
    (window.SPELL_SETS || []).forEach(function (s) { if (s.level < spellTop(s.cat)) n++; });
    n += arcadeGames().length * (GAME_TOP - 1);
    n += (window.SERIES || []).length;
    return n;
  }

  /* ---- wat staat er op een diploma? ---- */
  function describe(key) {
    const part = key.split(':');
    const nl = window.LANG === 'nl';
    if (part[0] === 'read') {
      const tp = (window.TOPICS || []).filter(function (x) { return x.id === part[1]; })[0];
      const lv = parseInt(part[2], 10);
      const L1 = (window.LEVELS || []).filter(function (l) { return l.level === lv; })[0];
      const L2 = (window.LEVELS || []).filter(function (l) { return l.level === lv + 1; })[0];
      if (!tp || !L1) return null;
      return {
        kind: 'read', emoji: tp.emoji, label: t('dipRead'),
        title: nl ? tp.nl : tp.en,
        sub: L1.stars + ' ' + (nl ? L1.nl : L1.en) + ' · ' + L1.avi,
        next: L2 ? L2.stars + ' ' + (nl ? L2.nl : L2.en) : '',
        go: function () { S.topic = tp.id; setHue(tp.hue, 'default'); renderLevels(); show('levels'); }
      };
    }
    if (part[0] === 'spell') {
      const set = (window.SPELL_SETS || []).filter(function (s) { return s.id === part[1]; })[0];
      if (!set) return null;
      const c = (window.SPELL_CATS || []).filter(function (x) { return x.id === set.cat; })[0];
      const nextSet = (window.SPELL_SETS || []).filter(function (s) { return s.cat === set.cat && s.level === set.level + 1; })[0];
      return {
        kind: 'spell', emoji: c ? c.emoji : '✍️', label: t('dipSpell'),
        title: c ? (nl ? c.nl : c.en) : set.cat,
        sub: L(set.title),
        next: nextSet ? L(nextSet.title) : '',
        go: function () { Spell.openCat(set.cat); }
      };
    }
    if (part[0] === 'game') {
      const g = arcadeGames().filter(function (x) { return x.id === part[1]; })[0];
      const lv = parseInt(part[2], 10);
      if (!g) return null;
      return {
        kind: 'game', emoji: g.emoji, label: t('dipGame'),
        title: L(g),
        sub: Arcade.levelName(lv),
        next: lv < GAME_TOP ? Arcade.levelName(lv + 1) : '',
        go: function () { Arcade.openMenu(g.id, lv + 1); }
      };
    }
    if (part[0] === 'book') {
      const ser = seriesById(part[1]);
      if (!ser) return null;
      return {
        kind: 'book', emoji: ser.emoji, label: t('dipBook'),
        title: L(ser.title),
        sub: t('bookChapters').replace('{n}', chapters(ser).length),
        next: t('dipBookNext'),
        go: function () { Books.openShelf(); }
      };
    }
    return null;
  }

  /* =====================================================================
     6. Het diploma-scherm dat verschijnt (één of meer achter elkaar)
     ===================================================================== */
  const queue = [];
  let current = null;
  function present(keys) {
    (keys || []).forEach(function (k) { if (k && queue.indexOf(k) === -1) queue.push(k); });
    if (!current) setTimeout(openNext, 700);
  }
  /* nooit over een lopend spel, verhaal of oefening heen: dan wachten we
     tot het kind weer op een rustig scherm is */
  const BUSY = ['arcade', 'read', 'quiz', 'spell', 'flits', 'woordkist'];
  function openNext() {
    if (current || !queue.length) return;
    if (BUSY.indexOf(S.screen) !== -1) { setTimeout(openNext, 1000); return; }
    const key = queue.shift();
    if (!key) return;
    const d = describe(key);
    if (!d) { openNext(); return; }
    current = { key: key, d: d };
    const ov = $('diploma-overlay');
    $('dip-emoji').textContent = d.emoji;
    $('dip-kind').textContent = '🎓 ' + d.label;
    $('dip-title').textContent = d.title;
    $('dip-sub').textContent = d.sub;
    $('dip-name').textContent = t('dipAwarded').replace('{name}', pl().name || '');
    $('dip-date').textContent = new Date(diplomas()[key] || Date.now()).toLocaleDateString(window.LANG === 'nl' ? 'nl-NL' : 'en-GB');
    $('dip-msg').textContent = d.kind === 'book' ? t('dipMsgBook') : (lockOn() ? t('dipMsgLock') : t('dipMsg'));
    const go = $('dip-go');
    go.textContent = d.next ? t('dipGo').replace('{next}', d.next) : t('dipClose');
    $('dip-close').textContent = t('dipClose');
    $('dip-close').classList.toggle('hidden', !d.next);
    ov.classList.remove('hidden');
    FX.burst(180);
    Sound.levelup();
    go.focus();
  }
  function close(andGo) {
    const cur = current;
    current = null;
    $('diploma-overlay').classList.add('hidden');
    if (andGo && cur && cur.d.next) { Sound.click(); cur.d.go(); }
    else Sound.click();
    if (queue.length) setTimeout(openNext, 250);
  }
  function showing() { return !!current; }

  /* =====================================================================
     7. De diplomamap
     ===================================================================== */
  function open() {
    Sound.click();
    render();
    setHue(45, 'default');
    show('diplomas');
  }

  /* bijna-diploma's: wat is het dichtstbij? */
  function suggestions() {
    const out = [];
    const nl = window.LANG === 'nl';
    (window.TOPICS || []).forEach(function (tp) {
      const lv = readNext(tp.id);
      if (!lv) return;
      const st = readStatus(tp.id, lv);
      const L1 = (window.LEVELS || []).filter(function (l) { return l.level === lv; })[0];
      out.push({ need: st.need, emoji: tp.emoji, text: (nl ? tp.nl : tp.en) + ' · ' + L1.stars + ' ' + (nl ? L1.nl : L1.en),
        todo: t('dipNeedStories').replace('{n}', st.need),
        go: function () { S.topic = tp.id; S.mode = 'read'; setHue(tp.hue, 'default'); renderLevels(); show('levels'); } });
    });
    out.sort(function (a, b) { return a.need - b.need; });
    return out.slice(0, 4);
  }

  function render() {
    const box = $('dip-grid');
    if (!box) return;
    const all = Object.keys(diplomas()).sort(function (a, b) { return diplomas()[a] - diplomas()[b]; });
    $('dip-count').textContent = t('dipCount').replace('{n}', all.length).replace('{total}', total());
    box.innerHTML = '';

    const sug = suggestions();
    if (sug.length) {
      const card = document.createElement('div');
      card.className = 'card dip-next-card';
      card.innerHTML = '<h3>' + t('dipNextHead') + '</h3>';
      sug.forEach(function (s) {
        const b = document.createElement('button');
        b.className = 'dip-next';
        b.innerHTML = '<span class="dip-next-emoji">' + s.emoji + '</span><span><b></b><small></small></span><span class="dip-next-go">→</span>';
        b.querySelector('b').textContent = s.text;
        b.querySelector('small').textContent = s.todo;
        b.addEventListener('click', function () { Sound.click(); s.go(); });
        card.appendChild(b);
      });
      box.appendChild(card);
    }

    if (!all.length) {
      const p = document.createElement('p');
      p.className = 'mini-note dip-empty';
      p.textContent = t('dipNone');
      box.appendChild(p);
      return;
    }
    [['read', t('modeRead')], ['book', t('dipSecBook')], ['spell', t('modeSpell')], ['game', t('modePlay')]].forEach(function (sec) {
      const mine = all.filter(function (k) { return k.indexOf(sec[0] + ':') === 0; });
      if (!mine.length) return;
      const h = document.createElement('h3');
      h.className = 'grid-heading';
      h.textContent = sec[1] + ' · ' + mine.length;
      box.appendChild(h);
      const grid = document.createElement('div');
      grid.className = 'dip-tiles';
      mine.forEach(function (k) {
        const d = describe(k);
        if (!d) return;
        const tile = document.createElement('div');
        tile.className = 'dip-tile dip-' + d.kind;
        tile.innerHTML = '<span class="dip-seal">🎓</span><span class="dip-tile-emoji">' + d.emoji + '</span><b></b><small></small>';
        tile.querySelector('b').textContent = d.title;
        tile.querySelector('small').textContent = d.sub;
        grid.appendChild(tile);
      });
      box.appendChild(grid);
    });
  }

  function bind() {
    $('dip-go').addEventListener('click', function () { close(true); });
    $('dip-close').addEventListener('click', function () { close(false); });
    $('btn-diplomas').addEventListener('click', open);
    const lock = $('p-lock-easy');
    if (lock) lock.addEventListener('change', function () {
      setLock(lock.checked);
      FX.toast(lock.checked ? t('pLockOnToast') : t('pLockOffToast'), 3000);
    });
  }
  document.addEventListener('DOMContentLoaded', bind);

  return {
    lockOn: lockOn, setLock: setLock,
    readTop: readTop, readStatus: readStatus, readGraduated: readGraduated, readLocked: readLocked, readNext: readNext,
    spellGraduated: spellGraduated, spellLocked: spellLocked,
    gameUnlocked: gameUnlocked, gameGraduated: gameGraduated, gameLocked: gameLocked, gameCurrent: gameCurrent,
    gameStars: gameStars, GAME_TOP: GAME_TOP,
    chapters: chapters, chapterUnlocked: chapterUnlocked, chapterGraduated: chapterGraduated, bookDone: bookDone,
    seriesById: seriesById, storyLocked: storyLocked,
    checkStory: checkStory, checkSpell: checkSpell, checkGame: checkGame,
    present: present, showing: showing, sync: sync, count: count, total: total, has: has,
    list: function () { return Object.keys(diplomas()); },
    open: open, render: render, describe: describe
  };
})();
