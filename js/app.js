/* =====================================================================
   Leeskampioen - hoofdlogica
   ===================================================================== */
'use strict';

const $ = function (id) { return document.getElementById(id); };
const $$ = function (sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); };

window.LANG = 'nl';

const MISSION_MS = 30 * 60 * 1000;   /* de missie van 30 minuten */
const XP_PER_LEVEL = 120;
const MAX_WPM = 350;          /* daarboven is er doorgeklikt, niet gelezen */

const S = {
  screen: 'home',
  topic: null, level: null, story: null,
  qi: 0, results: [], shuffled: null,
  selected: null, orderPick: [], matchSel: null, matchLeftDone: 0,
  checked: false, hintUsed: false, qStart: 0, peeked: false,
  readStart: 0, readMs: 0, usedTTS: false, usedKaraoke: false, storyStart: 0,
  streak: 0,
  fontStep: 0, easyFont: false, ruler: false,
  karaokeTimer: null,
  sessionId: 'S' + Date.now().toString(36),
  activeMs: 0, lastTick: Date.now(), missionFired: false,
  flash: null
};

const SCENE_EMOJI = {
  'city-night': ['🌙','🏠','🌳','⭐','🦊'],
  'ocean':      ['🌊','🐟','🫧','🐋','⚓'],
  'forest':     ['🌲','🍃','🍄','🦌','🌿'],
  'space':      ['⭐','🪐','🚀','✨','🛰️'],
  'mars':       ['🔴','🪨','🚀','⭐','🛸'],
  'stadium':    ['⚽','🏆','🥅','👟','📣'],
  'ice':        ['❄️','⛸️','🧊','🌨️','🥶'],
  'castle':     ['🏰','🛡️','⚔️','👑','🐉'],
  'harbour':    ['⛵','🌊','🧭','📦','🗺️'],
  'lab':        ['🔬','⚗️','💡','🔧','🧪'],
  'water':      ['💧','🌊','🌬️','🚧','🐚'],
  'school':     ['🍪','📚','✏️','🎒','🔍'],
  'night':      ['🌙','🔦','🗝️','🕯️','❓'],
  'default':    ['📚','⭐','✨','💡','🎈']
};

/* =====================================================================
   1. Start
   ===================================================================== */
function init() {
  buildAvatars();
  bindGlobal();
  restorePlayer();
  applyLang();
  FX.setShapes(SCENE_EMOJI.default);
  Store.log('session_start', { session: S.sessionId, lang: window.LANG });
  startTicker();
}

function restorePlayer() {
  const p = Store.player;
  if (p.name) {
    $('input-name').value = p.name;
    $('btn-start').textContent = t('continueBtn');
  }
  selectAvatar(p.avatar || '🦸');
}

function buildAvatars() {
  const box = $('avatar-picker');
  box.innerHTML = '';
  AVATARS.forEach(function (a) {
    const b = document.createElement('button');
    b.className = 'avatar-opt';
    b.textContent = a;
    b.dataset.avatar = a;
    b.addEventListener('click', function () { selectAvatar(a); Sound.click(); });
    box.appendChild(b);
  });
}
function selectAvatar(a) {
  Store.player.avatar = a;
  $$('.avatar-opt').forEach(function (b) { b.classList.toggle('sel', b.dataset.avatar === a); });
}

/* ---- klok die bijhoudt hoelang er echt gespeeld wordt ---- */
function startTicker() {
  setInterval(function () {
    const now = Date.now();
    const delta = now - S.lastTick;
    S.lastTick = now;
    if (document.hidden || delta > 5000) return;   /* pauzeer bij weggeklikt tabblad */
    S.activeMs += delta;
    updateMission();
    if (S.screen === 'read') updateReadTimer();
  }, 1000);
}

function todayKey() { return new Date().toISOString().slice(0, 10); }

function updateMission() {
  const p = Store.player;
  if (!p.daily) p.daily = {};
  const k = todayKey();
  p.daily[k] = (p.daily[k] || 0) + 1000;
  const ms = p.daily[k];

  const frac = Math.min(ms / MISSION_MS, 1);
  const c = 2 * Math.PI * 18;
  $('ring-fill').style.strokeDashoffset = String(c * (1 - frac));
  const mins = Math.floor(ms / 60000), secs = Math.floor(ms % 60000 / 1000);
  $('mission-time').textContent = mins + ':' + String(secs).padStart(2, '0');

  if (frac >= 1 && !S.missionFired) {
    S.missionFired = true;
    $('mission').classList.add('done');
    FX.burst(150);
    FX.toast(t('missionDone'), 4200);
    Sound.finish();
    Store.log('mission_done', { minutes: 30 });
    awardBadge('mission');
  }
  if (Math.random() < 0.05) Store.save();   /* af en toe wegschrijven */
}

/* =====================================================================
   2. Schermen
   ===================================================================== */
function show(name) {
  Speech.stop();
  stopKaraoke();
  S.screen = name;
  $$('.screen').forEach(function (s) { s.classList.remove('active'); });
  const el = $('screen-' + name);
  if (el) el.classList.add('active');
  $('topbar').classList.toggle('hidden', name === 'home');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function setHue(hue, scene) {
  document.documentElement.style.setProperty('--hue', hue);
  FX.setShapes(SCENE_EMOJI[scene] || SCENE_EMOJI.default);
}

function bindGlobal() {
  $('btn-start').addEventListener('click', startGame);
  $('input-name').addEventListener('keydown', function (e) { if (e.key === 'Enter') startGame(); });
  $('btn-home').addEventListener('click', function () { Sound.click(); setHue(255, 'default'); renderWorlds(); show('worlds'); });
  $('btn-lang').addEventListener('click', toggleLang);
  $('btn-sound').addEventListener('click', function () {
    Sound.setOn(!Sound.isOn());
    $('btn-sound').textContent = Sound.isOn() ? '🔊' : '🔇';
  });
  $('btn-parent').addEventListener('click', openParent);
  $$('[data-back]').forEach(function (b) {
    b.addEventListener('click', function () {
      Sound.click();
      const to = b.dataset.back;
      if (to === 'worlds') { setHue(255, 'default'); renderWorlds(); show('worlds'); }
      else if (to === 'levels') { renderLevels(); show('levels'); }
    });
  });

  /* leesscherm */
  $('btn-done-reading').addEventListener('click', doneReading);
  $('btn-speak').addEventListener('click', toggleSpeak);
  $('btn-karaoke').addEventListener('click', toggleKaraoke);
  $('btn-font').addEventListener('click', cycleFont);
  $('btn-ruler').addEventListener('click', toggleRuler);
  $('btn-easyfont').addEventListener('click', toggleEasyFont);

  /* quiz */
  $('btn-check').addEventListener('click', checkAnswer);
  $('btn-next').addEventListener('click', nextQuestion);
  $('btn-hint').addEventListener('click', useHint);
  $('btn-peek').addEventListener('click', togglePeek);
  $('btn-peek-close').addEventListener('click', togglePeek);

  /* resultaat */
  $('btn-again').addEventListener('click', function () { Sound.click(); openStory(S.story); });
  $('btn-continue').addEventListener('click', function () { Sound.click(); nextStory(); });
  $('btn-bonus').addEventListener('click', startFlash);

  /* ouders */
  $('gate-btn').addEventListener('click', checkGate);
  $('gate-input').addEventListener('keydown', function (e) { if (e.key === 'Enter') checkGate(); });
  $('btn-dl-csv').addEventListener('click', function () { Exporter.csv(); FX.toast('CSV ✓'); });
  $('btn-dl-json').addEventListener('click', function () { Exporter.json(); FX.toast('JSON ✓'); });
  $('btn-dl-html').addEventListener('click', function () { Exporter.report(); FX.toast('HTML ✓'); });
  $('btn-wipe').addEventListener('click', function () {
    if (confirm(t('wipeConfirm'))) { Store.wipe(); location.reload(); }
  });

  /* toetsenbord: 1-4 om te kiezen, Enter om te controleren */
  document.addEventListener('keydown', function (e) {
    if (S.screen !== 'quiz') return;
    if (e.key >= '1' && e.key <= '9') {
      const opts = $$('#q-body .opt, #q-body .tf-btn, #q-body .order-item:not(.picked)');
      const i = parseInt(e.key, 10) - 1;
      if (opts[i]) opts[i].click();
    } else if (e.key === 'Enter') {
      if (!$('btn-next').classList.contains('hidden')) $('btn-next').click();
      else $('btn-check').click();
    }
  });
}

function startGame() {
  const name = $('input-name').value.trim();
  Store.player.name = name || (window.LANG === 'nl' ? 'Lezer' : 'Reader');
  Store.save();
  Sound.click();
  updateHUD();
  setHue(255, 'default');
  renderWorlds();
  show('worlds');
}

function toggleLang() {
  window.LANG = window.LANG === 'nl' ? 'en' : 'nl';
  Sound.click();
  applyLang();
  Store.log('lang_switch', { session: S.sessionId, lang: window.LANG, screen: S.screen });
  /* huidige scherm opnieuw tekenen in de nieuwe taal */
  if (S.screen === 'worlds') renderWorlds();
  else if (S.screen === 'levels') renderLevels();
  else if (S.screen === 'read') renderStory();
  else if (S.screen === 'quiz') renderQuestion(true);
  else if (S.screen === 'result') renderResultTexts();
  else if (S.screen === 'parent') renderParent();
}

function applyLang() {
  const nl = window.LANG === 'nl';
  document.documentElement.lang = nl ? 'nl' : 'en';
  $('lang-label').textContent = nl ? 'NL' : 'EN';
  $$('#btn-lang .flag')[0].textContent = nl ? '🇳🇱' : '🇬🇧';
  $$('[data-i18n]').forEach(function (el) { el.textContent = t(el.dataset.i18n); });
  if (!Store.player.name) $('btn-start').textContent = t('startBtn');
  else $('btn-start').textContent = t('continueBtn');
}

/* =====================================================================
   3. HUD, XP en badges
   ===================================================================== */
function updateHUD() {
  const p = Store.player;
  $('hud-avatar').textContent = p.avatar;
  $('hud-name').textContent = p.name || '...';
  const lvl = 1 + Math.floor(p.xp / XP_PER_LEVEL);
  const into = p.xp % XP_PER_LEVEL;
  $('hud-level').textContent = lvl;
  $('hud-xp-fill').style.width = (into / XP_PER_LEVEL * 100) + '%';
  $('streak-n').textContent = S.streak;
  $('hud-streak').classList.toggle('on', S.streak >= 3);
}

function addXP(n) {
  const p = Store.player;
  const before = 1 + Math.floor(p.xp / XP_PER_LEVEL);
  p.xp += n;
  const after = 1 + Math.floor(p.xp / XP_PER_LEVEL);
  p.level = after;
  updateHUD();
  Store.save();
  if (after > before) {
    FX.levelUp(t('levelUp') + ' ' + after);
    Store.log('level_up', { level: after, xp: p.xp });
  }
}

function awardBadge(id) {
  const p = Store.player;
  if (!p.badges) p.badges = [];
  if (p.badges.indexOf(id) !== -1) return null;
  p.badges.push(id);
  Store.save();
  Store.log('badge', { badge: id });
  return BADGES.filter(function (b) { return b.id === id; })[0];
}

function checkBadges(ctx) {
  const got = [];
  const p = Store.player;
  const done = Object.keys(p.best || {});

  const push = function (id) { const b = awardBadge(id); if (b) got.push(b); };

  if (done.length >= 1) push('first');
  if (done.length >= 10) push('ten');
  if (ctx && ctx.perfect) push('perfect');
  if (S.streak >= 5) push('streak5');
  if (S.streak >= 10) push('streak10');
  if (ctx && ctx.level === 3 && ctx.stars >= 1) push('g7');
  if (ctx && ctx.wpm >= 120) push('fast');

  const topics = {};
  done.forEach(function (id) { topics[id.split('-')[0]] = 1; });
  if (Object.keys(topics).length >= window.TOPICS.length) push('explorer');

  const vocabOk = Stats.answers().filter(function (e) { return e.skill === 'woordenschat' && e.correct; }).length;
  if (vocabOk >= 10) push('wordking');

  return got;
}

/* =====================================================================
   4. Werelden
   ===================================================================== */
function storiesOf(topic, level) {
  return window.STORY_DB.filter(function (s) {
    return s.topic === topic && (level === undefined || s.level === level);
  });
}

function renderWorlds() {
  const grid = $('world-grid');
  grid.innerHTML = '';
  const best = Store.player.best || {};

  window.TOPICS.forEach(function (tp) {
    const all = storiesOf(tp.id);
    const doneN = all.filter(function (s) { return best[s.id]; }).length;
    const pct = all.length ? Math.round(doneN / all.length * 100) : 0;

    const card = document.createElement('button');
    card.className = 'world-card';
    card.style.setProperty('--wh', tp.hue);
    card.innerHTML =
      '<span class="wc-emoji">' + tp.emoji + '</span>' +
      '<h3 class="wc-title">' + (window.LANG === 'nl' ? tp.nl : tp.en) + '</h3>' +
      '<p class="wc-sub">' + (window.LANG === 'nl' ? tp.subNl : tp.subEn) + '</p>' +
      '<div class="wc-progress"><i style="width:' + pct + '%"></i></div>' +
      '<span class="wc-count">' + doneN + '/' + all.length + ' ' +
        (window.LANG === 'nl' ? 'verhalen' : 'stories') + (doneN === all.length ? ' ✓' : '') + '</span>';
    card.addEventListener('click', function () {
      Sound.click();
      S.topic = tp.id;
      setHue(tp.hue, 'default');
      renderLevels();
      show('levels');
    });
    grid.appendChild(card);
  });

  renderBadgeShelf();
  updateHUD();
}

function renderBadgeShelf() {
  const shelf = $('badge-shelf');
  shelf.innerHTML = '';
  const owned = Store.player.badges || [];
  BADGES.forEach(function (b) {
    const d = document.createElement('div');
    const has = owned.indexOf(b.id) !== -1;
    d.className = 'badge' + (has ? '' : ' locked');
    d.title = window.LANG === 'nl' ? b.dNl : b.dEn;
    d.innerHTML = '<b>' + b.emoji + '</b> ' + (window.LANG === 'nl' ? b.nl : b.en);
    shelf.appendChild(d);
  });
}

/* =====================================================================
   5. Niveaus
   ===================================================================== */
function levelUnlocked(topic, level) {
  if (level === 1) return true;
  const best = Store.player.best || {};
  return storiesOf(topic, level - 1).some(function (s) { return best[s.id]; });
}

function renderLevels() {
  const tp = window.TOPICS.filter(function (x) { return x.id === S.topic; })[0];
  $('level-title').textContent = tp.emoji + ' ' + (window.LANG === 'nl' ? tp.nl : tp.en);

  const grid = $('level-grid');
  grid.innerHTML = '';
  const best = Store.player.best || {};

  window.LEVELS.forEach(function (lv) {
    const list = storiesOf(S.topic, lv.level);
    if (!list.length) return;
    const story = list[0];
    const b = best[story.id];
    const open = levelUnlocked(S.topic, lv.level);

    const card = document.createElement('button');
    card.className = 'level-card';
    card.innerHTML =
      '<span class="lc-stars">' + (open ? (b ? '⭐'.repeat(b.stars) + '☆'.repeat(3 - b.stars) : lv.stars) : '🔒') + '</span>' +
      '<span><span class="lc-name">' + (window.LANG === 'nl' ? lv.nl : lv.en) + '</span><br>' +
      '<span class="lc-meta">' + lv.avi + ' &middot; ' + L(story.title) + '</span></span>' +
      '<span class="lc-right">' + (b
        ? '<span class="lc-done">' + t('bestScore') + ' ' + b.correct + '/' + b.total + '</span>'
        : (open ? t('notYet') : t('storyLocked'))) + '</span>';

    if (!open) {
      card.style.opacity = '.55';
      card.addEventListener('click', function () { FX.toast(t('storyLocked')); Sound.wrong(); });
    } else {
      card.addEventListener('click', function () { Sound.click(); openStory(story); });
    }
    grid.appendChild(card);
  });
}

/* =====================================================================
   6. Lezen
   ===================================================================== */
function openStory(story) {
  S.story = story;
  S.level = story.level;
  S.topic = story.topic;
  S.qi = 0;
  S.results = [];
  S.readMs = 0;
  S.usedTTS = false;
  S.usedKaraoke = false;
  S.peeked = false;
  S.readStart = Date.now();
  S.storyStart = Date.now();

  const tp = window.TOPICS.filter(function (x) { return x.id === story.topic; })[0];
  setHue(tp ? tp.hue : 255, story.scene);
  renderStory();
  show('read');
  Store.log('story_start', {
    session: S.sessionId, story: story.id, topic: story.topic,
    level: story.level, title: L(story.title), lang: window.LANG
  });
}

function wordCount(story) {
  return L(story.text).join(' ').split(/\s+/).filter(Boolean).length;
}

function renderStory() {
  const st = S.story;
  const lv = window.LEVELS.filter(function (l) { return l.level === st.level; })[0];
  $('story-emoji').textContent = st.emoji;
  $('story-title').textContent = L(st.title);
  $('story-meta').textContent = lv.avi + ' · ' + (window.LANG === 'nl' ? lv.nl : lv.en) +
    ' · ' + wordCount(st) + ' ' + t('words');

  /* tekst in woorden opdelen, zodat meelezen kan markeren */
  const box = $('story-text');
  box.innerHTML = '';
  const keywords = (st.words || []).map(function (w) { return L(w).toLowerCase(); });

  L(st.text).forEach(function (para) {
    const p = document.createElement('p');
    para.split(/(\s+)/).forEach(function (chunk) {
      if (/^\s+$/.test(chunk)) { p.appendChild(document.createTextNode(chunk)); return; }
      const span = document.createElement('span');
      span.className = 'w';
      const bare = chunk.toLowerCase().replace(/[^a-zà-ÿ'-]/g, '');
      if (keywords.indexOf(bare) !== -1) span.classList.add('kw');
      span.textContent = chunk;
      p.appendChild(span);
    });
    p.addEventListener('mouseenter', function () {
      if (S.ruler) { $$('#story-text p').forEach(function (x) { x.classList.remove('focus'); }); p.classList.add('focus'); }
    });
    box.appendChild(p);
  });

  /* moeilijke woorden onderaan */
  const help = $('word-help');
  help.innerHTML = '';
  (st.words || []).forEach(function (w) {
    const c = document.createElement('button');
    c.className = 'chip-word';
    c.innerHTML = '📌 ' + L(w) + '<small>' + (window.LANG === 'nl' ? w.defNl : w.defEn) + '</small>';
    c.addEventListener('click', function () {
      Sound.click();
      Speech.speak(L(w), window.LANG, 0.8);
      Store.log('word_help', { session: S.sessionId, story: st.id, word: w.nl });
    });
    help.appendChild(c);
  });

  updateReadTimer();
}

function updateReadTimer() {
  const ms = Date.now() - S.readStart;
  const m = Math.floor(ms / 60000), s = Math.floor(ms % 60000 / 1000);
  $$('#read-timer span')[0].textContent = m + ':' + String(s).padStart(2, '0');
}

/* ---- voorlezen ---- */
function toggleSpeak() {
  if (Speech.speaking()) {
    Speech.stop();
    $('btn-speak').classList.remove('on');
    return;
  }
  if (!Speech.available()) { FX.toast(window.LANG === 'nl' ? 'Voorlezen werkt niet op dit apparaat.' : 'Read aloud is not available here.'); return; }
  S.usedTTS = true;
  $('btn-speak').classList.add('on');
  const text = L(S.story.text).join(' ');
  Speech.speak(text, window.LANG, 0.88, function () { $('btn-speak').classList.remove('on'); });
  Store.log('tts', { session: S.sessionId, story: S.story.id, lang: window.LANG });
}

/* ---- meelezen: markeert woord voor woord ---- */
function toggleKaraoke() {
  if (S.karaokeTimer) { stopKaraoke(); return; }
  S.usedKaraoke = true;
  $('btn-karaoke').classList.add('on');
  const words = $$('#story-text .w');
  let i = 0;
  const speed = 60000 / 125;   /* ongeveer 125 woorden per minuut */
  S.karaokeTimer = setInterval(function () {
    words.forEach(function (w) { w.classList.remove('lit'); });
    if (i >= words.length) { stopKaraoke(); return; }
    words[i].classList.add('lit');
    if (i % 8 === 0) words[i].scrollIntoView({ block: 'center', behavior: 'smooth' });
    i++;
  }, speed);
  Store.log('karaoke', { session: S.sessionId, story: S.story.id });
}
function stopKaraoke() {
  if (S.karaokeTimer) { clearInterval(S.karaokeTimer); S.karaokeTimer = null; }
  $$('#story-text .w').forEach(function (w) { w.classList.remove('lit'); });
  const b = $('btn-karaoke'); if (b) b.classList.remove('on');
}

/* ---- leeshulpmiddelen ---- */
function cycleFont() {
  S.fontStep = (S.fontStep + 1) % 3;
  const sizes = ['1.16rem', '1.36rem', '1.6rem'];
  const lh = ['1.95', '2.1', '2.2'];
  document.documentElement.style.setProperty('--story-size', sizes[S.fontStep]);
  document.documentElement.style.setProperty('--story-lh', lh[S.fontStep]);
  $('btn-font').classList.toggle('on', S.fontStep > 0);
  Sound.click();
}
function toggleRuler() {
  S.ruler = !S.ruler;
  document.body.classList.toggle('ruler', S.ruler);
  $('btn-ruler').classList.toggle('on', S.ruler);
  Sound.click();
}
function toggleEasyFont() {
  S.easyFont = !S.easyFont;
  document.documentElement.style.setProperty('--story-font',
    S.easyFont ? '"Comic Sans MS", "Trebuchet MS", Verdana, sans-serif' : 'var(--font-body)');
  document.documentElement.style.setProperty('--story-spacing', S.easyFont ? '0.045em' : '0px');
  $('btn-easyfont').classList.toggle('on', S.easyFont);
  Sound.click();
}

function doneReading() {
  stopKaraoke();
  Speech.stop();
  S.readMs = Date.now() - S.readStart;
  const words = wordCount(S.story);
  const mins = S.readMs / 60000;
  const raw = mins > 0 ? Math.round(words / mins) : 0;

  /* Boven de 350 woorden per minuut is er niet gelezen maar doorgeklikt.
     Dat loggen we apart, zodat het gemiddelde leestempo eerlijk blijft
     en de ouder ziet hoe vaak er doorgeklikt is. */
  const skimmed = S.readMs < 5000 || raw > MAX_WPM;
  const wpm = skimmed ? 0 : raw;
  S.lastWpm = wpm;

  Store.log('read_done', {
    session: S.sessionId, story: S.story.id, topic: S.topic, level: S.level,
    readMs: S.readMs, words: words, wpm: wpm, skimmed: skimmed,
    tts: S.usedTTS, karaoke: S.usedKaraoke, lang: window.LANG
  });

  Sound.click();
  startQuiz();
}

/* =====================================================================
   7. Vragen
   ===================================================================== */
function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const tmp = a[i]; a[i] = a[j]; a[j] = tmp;
  }
  return a;
}

/* Elke vraag krijgt één keer een geschudde weergave, zodat wisselen van
   taal of het lezen van de uitleg de volgorde niet verandert. */
function buildViews() {
  S.views = S.story.questions.map(function (q) {
    if (q.type === 'mc' || q.type === 'gap') {
      return { opts: shuffle(q.options.map(function (o, i) { return { o: o, i: i }; })) };
    }
    if (q.type === 'order') {
      return { items: shuffle(q.items.map(function (o, i) { return { o: o, i: i }; })) };
    }
    if (q.type === 'match') {
      return {
        left: shuffle(q.pairs.map(function (p, i) { return { p: p, i: i }; })),
        right: shuffle(q.pairs.map(function (p, i) { return { p: p, i: i }; }))
      };
    }
    return {};
  });
}

function startQuiz() {
  S.qi = 0;
  S.results = [];
  buildViews();
  show('quiz');
  FX.say(I18N.greet[window.LANG], 'happy');
  setTimeout(function () { FX.hush(); }, 3200);
  renderQuestion();
}

function currentQ() { return S.story.questions[S.qi]; }

function renderProgress() {
  const box = $('q-progress');
  box.innerHTML = '';
  S.story.questions.forEach(function (q, i) {
    const d = document.createElement('i');
    d.className = 'q-dot' + (i === S.qi ? ' now' : '') +
      (S.results[i] === true ? ' ok' : S.results[i] === false ? ' no' : '');
    box.appendChild(d);
  });
}

function renderQuestion() {
  const q = currentQ();
  const v = S.views[S.qi];

  S.selected = null;
  S.orderPick = [];
  S.matchSel = null;
  S.matchLeftDone = 0;
  S.matchWrong = 0;
  S.checked = false;
  S.hintUsed = false;
  S.qStart = Date.now();

  renderProgress();
  const sk = window.SKILLS[q.skill];
  $('q-skill').textContent = sk.emoji + ' ' + (window.LANG === 'nl' ? sk.nl : sk.en) +
    ' · ' + t('question') + ' ' + (S.qi + 1) + ' ' + t('of') + ' ' + S.story.questions.length;

  const fb = $('q-feedback');
  fb.className = 'q-feedback';
  fb.innerHTML = '';
  $('btn-check').classList.remove('hidden');
  $('btn-next').classList.add('hidden');
  $('btn-hint').classList.toggle('hidden', q.type === 'match');
  $('btn-check').textContent = t('check');
  $('btn-next').textContent = (S.qi === S.story.questions.length - 1) ? t('finishStory') : t('next');

  const body = $('q-body');
  body.innerHTML = '';

  if (q.type === 'mc') { $('q-text').textContent = L(q.q); renderChoices(body, v.opts); }
  else if (q.type === 'gap') { renderGap(body, q, v); }
  else if (q.type === 'tf') { $('q-text').textContent = L(q.q); renderTF(body); }
  else if (q.type === 'order') { $('q-text').textContent = L(q.q); renderOrder(body, v); }
  else if (q.type === 'match') { $('q-text').textContent = L(q.q); renderMatch(body, q, v); }
}

function renderChoices(body, opts) {
  opts.forEach(function (item, n) {
    const b = document.createElement('button');
    b.className = 'opt';
    b.dataset.orig = item.i;
    b.innerHTML = '<span class="key">' + (n + 1) + '</span><span>' + L(item.o) + '</span>';
    b.addEventListener('click', function () {
      if (S.checked) return;
      Sound.click();
      $$('#q-body .opt').forEach(function (x) { x.classList.remove('sel'); });
      b.classList.add('sel');
      S.selected = item.i;
    });
    body.appendChild(b);
  });
}

function renderGap(body, q, v) {
  $('q-text').textContent = window.LANG === 'nl' ? 'Vul het goede woord in:' : 'Fill in the right words:';
  const sent = document.createElement('div');
  sent.className = 'gap-sentence';
  sent.innerHTML = L(q.q).replace('___', '<span class="blank" id="the-blank">?</span>');
  body.appendChild(sent);
  const wrap = document.createElement('div');
  wrap.className = 'q-body';
  body.appendChild(wrap);
  v.opts.forEach(function (item, n) {
    const b = document.createElement('button');
    b.className = 'opt';
    b.dataset.orig = item.i;
    b.innerHTML = '<span class="key">' + (n + 1) + '</span><span>' + L(item.o) + '</span>';
    b.addEventListener('click', function () {
      if (S.checked) return;
      Sound.click();
      $$('#q-body .opt').forEach(function (x) { x.classList.remove('sel'); });
      b.classList.add('sel');
      S.selected = item.i;
      const blank = $('the-blank');
      if (blank) blank.textContent = L(item.o);
    });
    wrap.appendChild(b);
  });
}

function renderTF(body) {
  const row = document.createElement('div');
  row.className = 'tf-row';
  [[true, '✅ ' + t('trueLabel')], [false, '❌ ' + t('falseLabel')]].forEach(function (pair) {
    const b = document.createElement('button');
    b.className = 'tf-btn';
    b.textContent = pair[1];
    b.dataset.val = pair[0] ? '1' : '0';
    b.addEventListener('click', function () {
      if (S.checked) return;
      Sound.click();
      $$('#q-body .tf-btn').forEach(function (x) { x.classList.remove('sel'); });
      b.classList.add('sel');
      S.selected = pair[0];
    });
    row.appendChild(b);
  });
  body.appendChild(row);
}

function renderOrder(body, v) {
  const hint = document.createElement('p');
  hint.className = 'order-hint';
  hint.textContent = t('orderHint');
  body.appendChild(hint);

  const slots = document.createElement('div');
  slots.className = 'order-slots';
  slots.id = 'order-slots';
  body.appendChild(slots);

  const pool = document.createElement('div');
  pool.className = 'order-pool';
  pool.id = 'order-pool';
  body.appendChild(pool);

  v.items.forEach(function (item, n) {
    const b = document.createElement('button');
    b.className = 'order-item';
    b.dataset.orig = item.i;
    b.innerHTML = '<span class="num">+</span><span>' + L(item.o) + '</span>';
    b.addEventListener('click', function () {
      if (S.checked || b.classList.contains('picked')) return;
      Sound.click();
      b.classList.add('picked');
      S.orderPick.push(item.i);
      drawSlots();
    });
    pool.appendChild(b);
  });
  drawSlots();
}

function drawSlots() {
  const q = currentQ();
  const v = S.views[S.qi];
  const slots = $('order-slots');
  if (!slots) return;
  slots.innerHTML = '';
  if (!S.orderPick.length) {
    const p = document.createElement('div');
    p.className = 'order-hint';
    p.style.margin = '0';
    p.textContent = window.LANG === 'nl' ? '⬇ Hier komt jouw volgorde' : '⬇ Your order appears here';
    slots.appendChild(p);
  }
  S.orderPick.forEach(function (origIdx, pos) {
    const item = v.items.filter(function (x) { return x.i === origIdx; })[0];
    const d = document.createElement('button');
    d.className = 'order-slot';
    d.innerHTML = '<span class="num">' + (pos + 1) + '</span><span>' + L(item.o) + '</span>';
    d.title = t('orderUndo');
    d.addEventListener('click', function () {
      if (S.checked) return;
      Sound.click();
      S.orderPick.splice(pos, 1);
      $$('#order-pool .order-item').forEach(function (b) {
        if (parseInt(b.dataset.orig, 10) === origIdx) b.classList.remove('picked');
      });
      drawSlots();
    });
    slots.appendChild(d);
  });
  if (S.orderPick.length === q.answer.length) S.selected = S.orderPick.slice();
  else S.selected = null;
}

function renderMatch(body, q, v) {
  const hint = document.createElement('p');
  hint.className = 'order-hint';
  hint.textContent = t('matchHint');
  body.appendChild(hint);

  const grid = document.createElement('div');
  grid.className = 'match-grid';
  const colL = document.createElement('div'); colL.className = 'match-col';
  const colR = document.createElement('div'); colR.className = 'match-col';
  grid.appendChild(colL); grid.appendChild(colR);
  body.appendChild(grid);

  v.left.forEach(function (item) {
    const b = document.createElement('button');
    b.className = 'match-item';
    b.dataset.pair = item.i;
    b.textContent = L(item.p.word);
    b.addEventListener('click', function () {
      if (S.checked) return;
      Sound.click();
      $$('#q-body .match-col:first-child .match-item').forEach(function (x) { x.classList.remove('sel'); });
      b.classList.add('sel');
      S.matchSel = item.i;
    });
    colL.appendChild(b);
  });

  v.right.forEach(function (item) {
    const b = document.createElement('button');
    b.className = 'match-item';
    b.dataset.pair = item.i;
    b.textContent = L(item.p.meaning);
    b.addEventListener('click', function () {
      if (S.checked || S.matchSel === null) return;
      if (S.matchSel === item.i) {
        Sound.correct();
        b.classList.add('done');
        $$('#q-body .match-col:first-child .match-item').forEach(function (x) {
          if (parseInt(x.dataset.pair, 10) === item.i) { x.classList.add('done'); x.classList.remove('sel'); }
        });
        S.matchSel = null;
        S.matchLeftDone++;
        if (S.matchLeftDone === q.pairs.length) {
          S.selected = true;
          setTimeout(checkAnswer, 350);
        }
      } else {
        Sound.wrong();
        S.matchWrong++;
        b.classList.add('wrong');
        setTimeout(function () { b.classList.remove('wrong'); }, 420);
      }
    });
    colR.appendChild(b);
  });

  /* de koppelvraag controleert zichzelf */
  $('btn-check').classList.add('hidden');
}

/* ---- hint ---- */
function useHint() {
  const q = currentQ();
  if (S.checked) return;
  S.hintUsed = true;
  Sound.click();
  const sk = window.SKILLS[q.skill];
  FX.say(window.LANG === 'nl' ? sk.tipNl : sk.tipEn, 'happy');
  setTimeout(function () { FX.hush(); }, 6000);

  /* bij meerkeuze verdwijnt één fout antwoord */
  if (q.type === 'mc' || q.type === 'gap') {
    const wrong = $$('#q-body .opt').filter(function (b) {
      return parseInt(b.dataset.orig, 10) !== q.answer && b.style.opacity !== '.25';
    });
    if (wrong.length > 1) {
      const kill = wrong[Math.floor(Math.random() * wrong.length)];
      kill.style.opacity = '.25';
      kill.style.pointerEvents = 'none';
    }
  }
  Store.log('hint', { session: S.sessionId, story: S.story.id, qId: q.id, skill: q.skill });
}

/* ---- tekst terugkijken tijdens de vragen ---- */
function togglePeek() {
  const panel = $('peek-panel');
  const opening = panel.classList.contains('hidden');
  if (opening) {
    S.peeked = true;
    $('peek-text').innerHTML = '<h3>' + L(S.story.title) + '</h3>' +
      L(S.story.text).map(function (p) { return '<p>' + p + '</p>'; }).join('');
    Store.log('peek', { session: S.sessionId, story: S.story.id, qId: currentQ().id });
  }
  panel.classList.toggle('hidden');
  Sound.click();
}

/* ---- nakijken ---- */
function answerText(q, val) {
  if (q.type === 'tf') return val === true ? t('trueLabel') : val === false ? t('falseLabel') : '-';
  if (q.type === 'mc' || q.type === 'gap') return (val === null || val === undefined) ? '-' : L(q.options[val]);
  if (q.type === 'order') return Array.isArray(val) ? val.map(function (i) { return i + 1; }).join('-') : '-';
  if (q.type === 'match') return window.LANG === 'nl' ? 'gekoppeld' : 'matched';
  return String(val);
}

function isCorrect(q, val) {
  if (q.type === 'tf') return val === q.answer;
  if (q.type === 'mc' || q.type === 'gap') return val === q.answer;
  if (q.type === 'order') {
    if (!Array.isArray(val) || val.length !== q.answer.length) return false;
    return val.every(function (x, i) { return x === q.answer[i]; });
  }
  if (q.type === 'match') return S.matchWrong === 0;
  return false;
}

function checkAnswer() {
  if (S.checked) return;
  const q = currentQ();
  if (S.selected === null || S.selected === undefined) { FX.toast(t('chooseFirst')); Sound.wrong(); return; }

  S.checked = true;
  const ok = isCorrect(q, S.selected);
  const ms = Date.now() - S.qStart;
  S.results[S.qi] = ok;

  /* visuele nakijkstappen per vraagtype */
  if (q.type === 'mc' || q.type === 'gap') {
    $$('#q-body .opt').forEach(function (b) {
      const orig = parseInt(b.dataset.orig, 10);
      if (orig === q.answer) b.classList.add('ok');
      else if (orig === S.selected) b.classList.add('no');
      b.style.pointerEvents = 'none';
    });
  } else if (q.type === 'tf') {
    $$('#q-body .tf-btn').forEach(function (b) {
      const val = b.dataset.val === '1';
      if (val === q.answer) b.classList.add('ok');
      else if (val === S.selected) b.classList.add('no');
      b.style.pointerEvents = 'none';
    });
  } else if (q.type === 'order') {
    $$('#order-slots .order-slot').forEach(function (d, i) {
      d.classList.add(S.orderPick[i] === q.answer[i] ? 'ok' : 'no');
    });
  }

  /* punten en reeks */
  if (ok) {
    S.streak++;
    const bonus = Math.min(S.streak, 5) * 2;
    addXP((S.hintUsed ? 6 : 10) + bonus);
    Sound.correct();
    FX.burst(S.streak >= 3 ? 60 : 26);
    FX.say(tRandom('praise'), 'happy');
  } else {
    S.streak = 0;
    Sound.wrong();
    FX.say(tRandom('comfort'), 'sad');
  }
  updateHUD();

  const fb = $('q-feedback');
  fb.className = 'q-feedback show ' + (ok ? 'good' : 'bad');
  fb.innerHTML = '<b>' + (ok ? '✅ ' + t('correct') : '❌ ' + t('wrong')) + '</b>' + L(q.explain);

  $('btn-check').classList.add('hidden');
  $('btn-hint').classList.add('hidden');
  $('btn-next').classList.remove('hidden');
  renderProgress();

  Store.log('answer', {
    session: S.sessionId, story: S.story.id, topic: S.topic, level: S.level,
    qId: q.id, qType: q.type, skill: q.skill, correct: ok,
    given: answerText(q, S.selected), expected: answerText(q, q.type === 'order' ? q.answer : q.answer),
    qText: L(q.q), ms: ms, hint: S.hintUsed, peek: S.peeked, lang: window.LANG
  });
}

function nextQuestion() {
  FX.hush();
  Sound.click();
  if (S.qi < S.story.questions.length - 1) { S.qi++; renderQuestion(); }
  else finishStory();
}

/* =====================================================================
   8. Resultaat
   ===================================================================== */
function finishStory() {
  const total = S.story.questions.length;
  const correct = S.results.filter(Boolean).length;
  const ratio = correct / total;
  const stars = ratio === 1 ? 3 : ratio >= 0.7 ? 2 : ratio >= 0.4 ? 1 : 0;
  const totalMs = Date.now() - S.storyStart;
  const wpm = S.lastWpm || 0;

  const xpGain = stars * 15 + correct * 2;
  addXP(xpGain);

  /* beste score bewaren */
  const p = Store.player;
  if (!p.best) p.best = {};
  const prev = p.best[S.story.id];
  if (!prev || correct > prev.correct) {
    p.best[S.story.id] = { stars: stars, correct: correct, total: total, wpm: wpm, at: Date.now() };
  }
  Store.save();

  Store.log('story_done', {
    session: S.sessionId, story: S.story.id, topic: S.topic, level: S.level,
    correct: correct, total: total, stars: stars, xp: xpGain,
    totalMs: totalMs, readMs: S.readMs, wpm: wpm, lang: window.LANG
  });

  const newBadges = checkBadges({ perfect: ratio === 1, level: S.level, stars: stars, wpm: wpm });

  S.lastResult = { correct: correct, total: total, stars: stars, xp: xpGain, wpm: wpm, totalMs: totalMs, badges: newBadges };
  renderResult();
  show('result');

  if (stars === 3) { FX.burst(200); Sound.finish(); }
  else if (stars >= 1) { FX.burst(90); Sound.star(); }
}

function renderResult() {
  const r = S.lastResult;
  const box = $('result-stars');
  box.innerHTML = '';
  for (let i = 0; i < 3; i++) {
    const s = document.createElement('span');
    s.textContent = i < r.stars ? '⭐' : '☆';
    s.style.animationDelay = (i * 0.22) + 's';
    box.appendChild(s);
    if (i < r.stars) setTimeout(function () { Sound.star(); }, 300 + i * 220);
  }
  $('rt-correct').textContent = r.correct + '/' + r.total;
  $('rt-xp').textContent = '+' + r.xp;
  $('rt-wpm').textContent = r.wpm || '–';
  const m = Math.floor(r.totalMs / 60000), s = Math.floor(r.totalMs % 60000 / 1000);
  $('rt-time').textContent = m + ':' + String(s).padStart(2, '0');

  renderResultTexts();

  /* per vaardigheid van dit verhaal */
  const sk = $('result-skills');
  sk.innerHTML = '';
  S.story.questions.forEach(function (q, i) {
    const d = document.createElement('span');
    const info = window.SKILLS[q.skill];
    d.className = 'skill-pill ' + (S.results[i] ? 'good' : 'bad');
    d.textContent = info.emoji + ' ' + (window.LANG === 'nl' ? info.nl : info.en) + (S.results[i] ? ' ✓' : ' ✗');
    sk.appendChild(d);
  });

  const nb = $('result-new-badges');
  nb.innerHTML = '';
  (r.badges || []).forEach(function (b) {
    const d = document.createElement('div');
    d.className = 'new-badge';
    d.textContent = b.emoji + ' ' + (window.LANG === 'nl' ? b.nl : b.en);
    nb.appendChild(d);
  });
}

function renderResultTexts() {
  const r = S.lastResult;
  $('result-title').textContent = t('res' + r.stars);
  $('result-sub').textContent = t('res' + r.stars + 'sub');
  $('btn-again').textContent = t('tryAgain');
  $('btn-bonus').textContent = t('bonusRound');
  $('btn-continue').textContent = t('keepGoing');
}

/* volgend logisch verhaal kiezen */
function nextStory() {
  const best = Store.player.best || {};
  /* zelfde wereld, volgend niveau */
  for (let lv = S.level + 1; lv <= 3; lv++) {
    const list = storiesOf(S.topic, lv);
    if (list.length && levelUnlocked(S.topic, lv)) { openStory(list[0]); return; }
  }
  /* anders: eerste wereld met een verhaal dat nog niet af is */
  const order = shuffle(window.TOPICS.slice());
  for (let i = 0; i < order.length; i++) {
    for (let lv = 1; lv <= 3; lv++) {
      const list = storiesOf(order[i].id, lv);
      if (list.length && !best[list[0].id] && levelUnlocked(order[i].id, lv)) { openStory(list[0]); return; }
    }
  }
  FX.toast(t('allDone'), 3800);
  setHue(255, 'default');
  renderWorlds();
  show('worlds');
}

/* =====================================================================
   9. Bonusronde: flitswoorden
   Traint het snel herkennen van woorden, wat het leestempo helpt.
   ===================================================================== */
function wordPool() {
  const pool = [];
  window.STORY_DB.forEach(function (s) {
    (s.words || []).forEach(function (w) { pool.push(L(w)); });
    /* ook wat gewone woorden uit de tekst, zodat het gevarieerd blijft */
    L(s.text).join(' ').split(/\s+/).forEach(function (w) {
      const clean = w.replace(/[^A-Za-zÀ-ÿ'-]/g, '');
      if (clean.length >= 6 && clean.length <= 13) pool.push(clean.toLowerCase());
    });
  });
  return Array.from(new Set(pool));
}

function startFlash() {
  Sound.click();
  S.flash = { round: 0, score: 0, rounds: 10, pool: shuffle(wordPool()) };
  $('flits-score').textContent = '0';
  show('flits');
  $('btn-flits-quit').onclick = function () { endFlash(); };
  flashRound();
}

function flashRound() {
  const f = S.flash;
  if (!f || f.round >= f.rounds) { endFlash(); return; }
  f.round++;

  const stage = $('flits-stage');
  const opts = $('flits-options');
  opts.innerHTML = '';

  const target = f.pool[(f.round * 7) % f.pool.length];
  /* afleiders die op het doelwoord lijken: zelfde beginletter of lengte */
  const others = f.pool.filter(function (w) {
    return w !== target && (w[0] === target[0] || Math.abs(w.length - target.length) <= 1);
  });
  const distract = shuffle(others.length >= 3 ? others : f.pool.filter(function (w) { return w !== target; })).slice(0, 3);
  const choices = shuffle([target].concat(distract));

  /* aftellen, dan flits */
  let count = 3;
  stage.innerHTML = '<span>' + count + '</span>';
  const tick = setInterval(function () {
    count--;
    if (count > 0) { stage.innerHTML = '<span>' + count + '</span>'; Sound.click(); }
    else {
      clearInterval(tick);
      const ms = Math.max(260, 800 - f.round * 45);   /* elke ronde iets korter */
      stage.innerHTML = '<span class="flash">' + target + '</span>';
      Sound.flash();
      setTimeout(function () {
        stage.innerHTML = '<span style="opacity:.35">👀</span>';
        choices.forEach(function (w) {
          const b = document.createElement('button');
          b.className = 'flits-opt';
          b.textContent = w;
          b.addEventListener('click', function () {
            if (b.dataset.done) return;
            $$('.flits-opt').forEach(function (x) { x.dataset.done = '1'; });
            if (w === target) {
              b.classList.add('ok'); f.score += 10; Sound.correct(); FX.burst(20); addXP(4);
            } else {
              b.classList.add('no'); Sound.wrong();
              $$('.flits-opt').forEach(function (x) { if (x.textContent === target) x.classList.add('ok'); });
            }
            $('flits-score').textContent = f.score;
            setTimeout(flashRound, 900);
          });
          opts.appendChild(b);
        });
      }, ms);
    }
  }, 550);
}

function endFlash() {
  const f = S.flash;
  if (f) {
    Store.log('flash', { session: S.sessionId, score: f.score, rounds: f.round, lang: window.LANG });
    if (f.score > (Store.player.flashBest || 0)) { Store.player.flashBest = f.score; Store.save(); }
    FX.toast((window.LANG === 'nl' ? 'Bonusronde: ' : 'Bonus round: ') + f.score + ' punten');
  }
  S.flash = null;
  setHue(255, 'default');
  renderWorlds();
  show('worlds');
}

/* =====================================================================
   10. Oudergedeelte
   ===================================================================== */
let gateAnswer = 0;
function openParent() {
  Sound.click();
  const a = 3 + Math.floor(Math.random() * 7);
  const b = 4 + Math.floor(Math.random() * 8);
  gateAnswer = a * b;
  $('gate-sum').textContent = a + ' × ' + b + ' = ?';
  $('gate-input').value = '';
  $('parent-gate').classList.remove('hidden');
  $('parent-body').classList.add('hidden');
  show('parent');
}

function checkGate() {
  if (parseInt($('gate-input').value, 10) === gateAnswer) {
    $('parent-gate').classList.add('hidden');
    $('parent-body').classList.remove('hidden');
    renderParent();
  } else {
    FX.toast(t('gateWrong'));
    Sound.wrong();
    $('gate-input').value = '';
  }
}

function renderParent() {
  const s = Stats.summary();
  $('p-stories').textContent = s.stories;
  $('p-questions').textContent = s.questions;
  $('p-acc').textContent = s.accuracy + '%';
  $('p-time').textContent = Math.round(s.totalMs / 60000) + 'm';
  $('p-wpm').textContent = s.wpm || '–';
  $('p-days').textContent = s.days;

  /* balken per vaardigheid */
  const sk = Stats.bySkill();
  const box = $('p-skills');
  box.innerHTML = '';
  Object.keys(sk).forEach(function (k) {
    const info = window.SKILLS[k];
    const n = sk[k].n, ok = sk[k].ok;
    const pct = n ? Math.round(ok / n * 100) : 0;
    const col = !n ? '#ccc' : pct >= 80 ? 'var(--ok)' : pct >= 60 ? '#f0a500' : 'var(--no)';
    const row = document.createElement('div');
    row.className = 'sb-row';
    row.innerHTML = '<span>' + info.emoji + ' ' + (window.LANG === 'nl' ? info.nl : info.en) + '</span>' +
      '<span class="sb-track"><i class="sb-fill" style="width:' + pct + '%;background:' + col + '"></i></span>' +
      '<span>' + (n ? pct + '%' : '–') + '</span>';
    box.appendChild(row);
  });

  /* tabel per onderwerp */
  const topicName = function (id) {
    const tp = window.TOPICS.filter(function (x) { return x.id === id; })[0];
    return tp ? tp.emoji + ' ' + (window.LANG === 'nl' ? tp.nl : tp.en) : id;
  };
  const rows = Stats.byTopicLevel();
  let html = '<table><tr><th>' + (window.LANG === 'nl' ? 'Onderwerp' : 'Topic') + '</th><th>' +
    (window.LANG === 'nl' ? 'Niveau' : 'Level') + '</th><th>' + (window.LANG === 'nl' ? 'Goed' : 'Correct') + '</th><th>%</th></tr>';
  if (!rows.length) html += '<tr><td colspan="4">' + (window.LANG === 'nl' ? 'Nog geen gegevens.' : 'No data yet.') + '</td></tr>';
  rows.forEach(function (r) {
    const pct = Math.round(r.ok / r.n * 100);
    html += '<tr><td>' + topicName(r.topic) + '</td><td>' + r.level + '</td><td>' + r.ok + '/' + r.n +
      '</td><td class="' + (pct >= 70 ? 'good' : 'bad') + '">' + pct + '%</td></tr>';
  });
  html += '</table>';
  $('p-topics').innerHTML = html;

  /* advies */
  const ul = $('p-advice');
  ul.innerHTML = '';
  Stats.advice().forEach(function (tip) {
    const li = document.createElement('li');
    li.innerHTML = tip;
    ul.appendChild(li);
  });

  /* laatste antwoorden */
  const titleOf = function (id) {
    const st = window.STORY_DB.filter(function (x) { return x.id === id; })[0];
    return st ? L(st.title) : id;
  };
  let log = '<table><tr><th>' + (window.LANG === 'nl' ? 'Wanneer' : 'When') + '</th><th>' +
    (window.LANG === 'nl' ? 'Verhaal' : 'Story') + '</th><th>' + (window.LANG === 'nl' ? 'Vraag' : 'Question') +
    '</th><th>' + (window.LANG === 'nl' ? 'Goed?' : 'Correct?') + '</th><th>' + (window.LANG === 'nl' ? 'Sec' : 'Sec') + '</th></tr>';
  const recent = Stats.answers().slice(-20).reverse();
  if (!recent.length) log += '<tr><td colspan="5">' + (window.LANG === 'nl' ? 'Nog niets gespeeld.' : 'Nothing played yet.') + '</td></tr>';
  recent.forEach(function (e) {
    const d = new Date(e.ts);
    log += '<tr><td>' + d.toLocaleDateString() + ' ' + d.toTimeString().slice(0, 5) + '</td><td>' +
      titleOf(e.story) + '</td><td>' + (e.qText || '').slice(0, 60) + '</td><td class="' + (e.correct ? 'good' : 'bad') + '">' +
      (e.correct ? '✓' : '✗') + '</td><td>' + (e.ms ? (e.ms / 1000).toFixed(0) : '') + '</td></tr>';
  });
  log += '</table>';
  $('p-log').innerHTML = log;
}

/* ===================================================================== */
document.addEventListener('DOMContentLoaded', init);
