/* =====================================================================
   De Woordkist: microleren met herhaalkaartjes.

   Elke dag een paar minuten: acht kaartjes met een woord (of een
   spreekwoord) en vier mogelijke betekenissen. Dit is een Leitner-kist
   met vijf vakjes:

     - goed geantwoord  → het kaartje schuift een vakje op en komt pas
                          later terug (na 1, 2, 4, 7 of 14 dagen)
     - fout geantwoord  → terug naar vakje 1, en het komt aan het eind
                          van de ronde nog één keer langs

   Zo oefen je vooral wat je nog niet weet, en onthoud je de rest voor
   de lange termijn. Twee stapels:
     - "Woorden uit je verhalen": de moeilijke woorden uit de verhalen die
       het kind gelezen heeft (aangevuld met niveau 1 als dat er nog weinig
       zijn), met de zin uit het verhaal erbij
     - "Spreekwoorden": gezegden uit data/idioms.js, stof voor groep 8

   Alles staat in Store.player.kist, per kind en alleen op dit apparaat.
   ===================================================================== */
'use strict';

const Woordkist = (function () {

  const INTERVAL = [0, 1, 2, 4, 7, 14];   /* dagen tot de volgende keer, per vakje */
  const SESSION = 8;
  const MAX_NEW = 5;
  const DECKS = ['story', 'idiom'];

  const K = { deck: 'story', queue: [], i: 0, answered: false, first: {}, results: [], opts: [], done: false, summary: null };

  function kist() {
    const p = Store.player;
    if (!p.kist || typeof p.kist !== 'object') p.kist = { cards: {}, sessions: 0 };
    if (!p.kist.cards || typeof p.kist.cards !== 'object') p.kist.cards = {};
    return p.kist;
  }
  function addDays(day, n) {
    const d = new Date(day + 'T12:00:00');
    d.setDate(d.getDate() + n);
    return localDay(d.getTime());
  }

  /* ---- de kaartjes ---- */
  function sentenceWith(story, word) {
    const low = word.toLowerCase();
    const paras = (story.text && story.text.nl) || [];
    for (let i = 0; i < paras.length; i++) {
      const parts = paras[i].match(/[^.!?]+[.!?]+["”']?/g) || [paras[i]];
      for (let j = 0; j < parts.length; j++) {
        if (parts[j].toLowerCase().indexOf(low) !== -1) return parts[j].trim();
      }
    }
    return '';
  }

  let storyCache = null;
  function storyCards() {
    if (storyCache) return storyCache;
    const seen = {};
    const out = [];
    (window.STORY_DB || []).forEach(function (s) {
      (s.words || []).forEach(function (w) {
        const key = w.nl.toLowerCase();
        if (seen[key]) return;
        seen[key] = 1;
        out.push({
          id: 'w:' + key, front: w.nl, frontEn: w.en,
          def: { nl: w.defNl, en: w.defEn }, story: s.id, level: s.level,
          context: sentenceWith(s, w.nl)
        });
      });
    });
    storyCache = out;
    return out;
  }
  function idiomCards() {
    return (window.IDIOMS || []).map(function (it) {
      return { id: 'i:' + it.id, front: it.nl, frontEn: it.en, def: { nl: it.meaningNl, en: it.meaningEn }, idiom: true };
    });
  }
  function allCards(deck) { return deck === 'idiom' ? idiomCards() : storyCards(); }

  /* de stapel van dit kind: woorden uit gelezen verhalen gaan voor */
  function deckCards(deck) {
    if (deck === 'idiom') return idiomCards();
    const all = storyCards();
    const best = Store.player.best || {};
    const read = all.filter(function (c) { return best[c.story]; });
    if (read.length >= SESSION) return read;
    return read.concat(all.filter(function (c) { return !best[c.story] && c.level === 1; }));
  }

  function dueCards(deck) {
    const cards = kist().cards;
    const today = localDay();
    return deckCards(deck).filter(function (c) { return cards[c.id] && cards[c.id].due <= today; });
  }

  function buildQueue(deck) {
    const cards = kist().cards;
    const due = dueCards(deck).sort(function (a, b) { return cards[a.id].box - cards[b.id].box; }).slice(0, SESSION);
    const fresh = shuffle(deckCards(deck).filter(function (c) { return !cards[c.id]; }));
    const room = SESSION - due.length;
    const newN = Math.max(0, Math.min(room, due.length ? MAX_NEW : SESSION));
    return shuffle(due.concat(fresh.slice(0, newN)));
  }

  function summary() {
    const cards = kist().cards;
    const ids = Object.keys(cards);
    const boxes = [0, 0, 0, 0, 0];
    ids.forEach(function (id) { boxes[Math.max(1, Math.min(5, cards[id].box)) - 1]++; });
    return {
      due: dueCards('story').length + dueCards('idiom').length,
      known: ids.filter(function (id) { return cards[id].box >= 3; }).length,
      total: ids.length,
      boxes: boxes
    };
  }

  /* =====================================================================
     Een ronde
     ===================================================================== */
  function open(deck) {
    K.deck = DECKS.indexOf(deck) !== -1 ? deck : (K.deck || 'story');
    K.queue = buildQueue(K.deck);
    K.i = 0;
    K.first = {};
    K.results = [];
    K.done = false;
    K.summary = null;
    K.coinsBefore = Store.player.coins || 0;
    setHue(35, 'school');
    show('woordkist');
    Store.log('woordkist_start', { session: S.sessionId, deck: K.deck, cards: K.queue.length, lang: window.LANG });
    prepare();
    render();
  }

  function card() { return K.queue[K.i]; }

  /* vier betekenissen: de goede en drie andere uit dezelfde soort kaartjes */
  function prepare() {
    const c = card();
    K.answered = false;
    K.picked = null;
    if (!c) return;
    const others = shuffle(allCards(K.deck).filter(function (x) {
      return x.id !== c.id && x.def.nl !== c.def.nl;
    })).slice(0, 3);
    K.opts = shuffle([c].concat(others)).map(function (x) { return { id: x.id, def: x.def }; });
  }

  function render() {
    renderTabs();
    const body = $('kist-body');
    const fb = $('kist-feedback');
    body.innerHTML = '';
    if (K.done) { renderSummary(body); return; }
    if (!K.queue.length) {
      fb.className = 'q-feedback';
      $('btn-kist-next').classList.add('hidden');
      $('kist-progress').innerHTML = '';
      body.innerHTML = '<div class="kist-empty"><span>🎉</span><h3>' + t('kistEmptyTitle') + '</h3><p>' + t('kistEmptyText') + '</p></div>';
      renderBoxes(body);
      return;
    }
    renderProgress();
    const c = card();
    const cards = kist().cards;
    const known = cards[c.id];

    const front = document.createElement('div');
    front.className = 'kist-front' + (c.idiom ? ' idiom' : '');
    front.innerHTML =
      '<span class="kist-box-tag">' + (known ? '🗃️ ' + t('kistBox').replace('{n}', known.box) : '✨ ' + t('kistNew')) + '</span>' +
      '<h2 class="kist-word"></h2>' +
      (c.context ? '<p class="kist-context"></p>' : '') +
      '<button class="icon-btn kist-say" title="🔊" aria-label="🔊">🔊</button>';
    front.querySelector('.kist-word').textContent = c.front;
    if (c.context) {
      /* het woord in de zin uit het verhaal oplichten */
      const safe = escHtml(c.context);
      const re = new RegExp('(' + c.front.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'i');
      front.querySelector('.kist-context').innerHTML = '📖 “' + safe.replace(re, '<mark>$1</mark>') + '”';
    }
    front.querySelector('.kist-say').addEventListener('click', function () {
      Sound.click();
      if (!Speech.available()) { FX.toast(t('noSpeech')); return; }
      Speech.speak(c.front, 'nl', 0.8);
    });
    body.appendChild(front);

    const q = document.createElement('p');
    q.className = 'kist-q';
    q.textContent = c.idiom ? t('kistQIdiom') : t('kistQWord');
    body.appendChild(q);

    const wrap = document.createElement('div');
    wrap.className = 'q-body';
    K.opts.forEach(function (o, n) {
      const b = document.createElement('button');
      b.className = 'opt kist-opt';
      b.dataset.id = o.id;
      b.innerHTML = '<span class="key">' + (n + 1) + '</span><span></span>';
      b.lastChild.textContent = L(o.def);
      if (K.answered) {
        if (o.id === c.id) b.classList.add('ok');
        else if (o.id === K.picked) b.classList.add('no');
        b.style.pointerEvents = 'none';
      }
      b.addEventListener('click', function () { choose(o.id); });
      wrap.appendChild(b);
    });
    body.appendChild(wrap);

    if (K.answered) showVerdict(); else { fb.className = 'q-feedback'; fb.innerHTML = ''; $('btn-kist-next').classList.add('hidden'); }
  }

  function renderTabs() {
    $$('.kist-tab').forEach(function (b) { b.classList.toggle('on', b.dataset.deck === K.deck); });
  }

  function renderProgress() {
    const box = $('kist-progress');
    box.innerHTML = '';
    K.queue.forEach(function (c, i) {
      const d = document.createElement('i');
      d.className = 'q-dot' + (i === K.i ? ' now' : '') +
        (K.results[i] === true ? ' ok' : K.results[i] === false ? ' no' : '');
      box.appendChild(d);
    });
  }

  function choose(id) {
    if (K.answered || K.done) return;
    const c = card();
    const ok = id === c.id;
    K.answered = true;
    K.picked = id;
    K.results[K.i] = ok;

    /* alleen de eerste poging in een ronde telt voor het schema */
    const cards = kist().cards;
    if (!K.first[c.id]) {
      K.first[c.id] = ok ? 'ok' : 'no';
      const cur = cards[c.id] || { box: 0, due: '', seen: 0, ok: 0 };
      cur.seen = (cur.seen || 0) + 1;
      if (ok) {
        cur.ok = (cur.ok || 0) + 1;
        cur.box = Math.min(5, Math.max(1, cur.box) + 1);
      } else {
        cur.box = 1;
      }
      cur.due = addDays(localDay(), INTERVAL[cur.box]);
      cards[c.id] = cur;
      /* fout? dan komt hij aan het eind nog één keer langs */
      if (!ok) K.queue.push(c);
      Store.save();
    }

    if (ok) {
      S.streak++;
      addXP(K.first[c.id] === 'ok' ? 4 : 1);
      Sound.correct();
      FX.burst(20);
      if ([3, 5, 8].indexOf(S.streak) !== -1) FX.combo(S.streak);
    } else {
      S.streak = 0;
      Sound.wrong();
    }
    updateHUD();
    Store.log('kist_card', { session: S.sessionId, deck: K.deck, card: c.id, correct: ok, box: cards[c.id].box });
    render();
  }

  function showVerdict() {
    const c = card();
    const ok = K.results[K.i];
    const fb = $('kist-feedback');
    fb.className = 'q-feedback show ' + (ok ? 'good' : 'bad');
    const box = kist().cards[c.id].box;
    let html = '<b>' + (ok ? '✅ ' + t('correct') : '❌ ' + t('wrong')) + '</b>' +
      '<p class="sp-answer"><b>' + escHtml(c.front) + '</b> = ' + escHtml(L(c.def)) + '</p>';
    /* de Engelse vertaling, maar alleen als die iets toevoegt */
    if (c.frontEn && c.frontEn.toLowerCase() !== c.front.toLowerCase()) {
      html += '<p class="mini-note">🇬🇧 ' + escHtml(c.frontEn) + '</p>';
    }
    html += '<p class="mini-note">' + (ok ? '📦 ' + t('kistMoved').replace('{n}', box) : '🔁 ' + t('kistAgain')) + '</p>';
    fb.innerHTML = html;
    const next = $('btn-kist-next');
    next.textContent = K.i === K.queue.length - 1 ? t('finishStory') : t('next');
    next.classList.remove('hidden');
    next.focus();
  }

  function next() {
    if (!K.answered) return;
    Sound.click();
    if (K.i < K.queue.length - 1) { K.i++; prepare(); render(); }
    else finish();
  }

  function finish() {
    const firstTry = Object.keys(K.first);
    const ok = firstTry.filter(function (id) { return K.first[id] === 'ok'; }).length;
    const k = kist();
    k.sessions = (k.sessions || 0) + 1;
    Store.save();
    const earned = Rewards.earn('woordkist');
    Rewards.track('woordkist');
    Rewards.markPlayedToday();
    addCoins(ok >= 6 ? 2 : ok >= 3 ? 1 : 0, 'woordkist');
    Store.log('woordkist_done', { session: S.sessionId, deck: K.deck, cards: firstTry.length, correct: ok, lang: window.LANG });
    const badges = checkBadges({});
    K.done = true;
    K.summary = { n: firstTry.length, ok: ok, tickets: earned.tickets, badges: badges, coins: (Store.player.coins || 0) - (K.coinsBefore || 0) };
    $('kist-progress').innerHTML = '';
    $('kist-feedback').className = 'q-feedback';
    $('btn-kist-next').classList.add('hidden');
    render();
    FX.burst(ok === firstTry.length ? 160 : 70);
    Sound.finish();
  }

  function renderBoxes(body) {
    const s = summary();
    const wrap = document.createElement('div');
    wrap.className = 'kist-boxes';
    const max = Math.max(1, Math.max.apply(null, s.boxes));
    s.boxes.forEach(function (n, i) {
      const d = document.createElement('div');
      d.className = 'kist-slot';
      d.innerHTML = '<span class="kist-bar"><i style="height:' + Math.round(n / max * 100) + '%"></i></span>' +
        '<b>' + n + '</b><small>' + t('kistBox').replace('{n}', i + 1) + '</small>';
      wrap.appendChild(d);
    });
    body.appendChild(wrap);
    const note = document.createElement('p');
    note.className = 'mini-note kist-note';
    note.textContent = t('kistBoxesNote');
    body.appendChild(note);
  }

  function renderSummary(body) {
    const r = K.summary;
    const head = document.createElement('div');
    head.className = 'kist-done';
    head.innerHTML = '<span class="kist-done-emoji">' + (r.ok === r.n ? '🏆' : '🗃️') + '</span>' +
      '<h2>' + t('kistDoneTitle') + '</h2>' +
      '<p>' + t('kistDoneText').replace('{ok}', r.ok).replace('{n}', r.n) + '</p>' +
      '<div class="result-grid"><div class="result-tile"><span class="rt-icon">✅</span><b>' + r.ok + '/' + r.n +
      '</b><small>' + t('correctLabel') + '</small></div><div class="result-tile"><span class="rt-icon">🎟️</span><b>+' + r.tickets +
      '</b><small>' + t('ticketsLabel') + '</small></div><div class="result-tile"><span class="rt-icon">🪙</span><b>+' + r.coins +
      '</b><small>' + t('coinsLabel') + '</small></div></div>';
    body.appendChild(head);
    (r.badges || []).forEach(function (b) {
      const d = document.createElement('div');
      d.className = 'new-badge';
      d.textContent = b.emoji + ' ' + (window.LANG === 'nl' ? b.nl : b.en);
      body.appendChild(d);
    });
    renderBoxes(body);
    const strip = document.createElement('div');
    strip.className = 'quest-strip';
    body.appendChild(strip);
    Rewards.renderQuestStrip(strip);
    const again = document.createElement('div');
    again.className = 'result-actions';
    again.innerHTML = '<button class="ghost-btn" id="btn-kist-more"></button><button class="big-btn" id="btn-kist-back"></button>';
    body.appendChild(again);
    $('btn-kist-more').textContent = '🔁 ' + t('kistMore');
    $('btn-kist-back').textContent = t('arcadeMenu');
    $('btn-kist-more').addEventListener('click', function () { Sound.click(); open(K.deck); });
    $('btn-kist-back').addEventListener('click', function () { Sound.click(); S.mode = 'play'; setHue(defaultHue(), 'default'); renderWorlds(); show('worlds'); });
  }

  function bind() {
    $('btn-kist-next').addEventListener('click', next);
    $$('.kist-tab').forEach(function (b) {
      b.addEventListener('click', function () { Sound.click(); open(b.dataset.deck); });
    });
    document.addEventListener('keydown', function (e) {
      if (S.screen !== 'woordkist' || e.ctrlKey || e.metaKey || e.altKey || K.done) return;
      if (e.key >= '1' && e.key <= '4' && !K.answered) {
        const o = K.opts[parseInt(e.key, 10) - 1];
        if (o) choose(o.id);
      } else if (e.key === 'Enter' && K.answered) {
        e.preventDefault();
        next();
      }
    });
  }
  document.addEventListener('DOMContentLoaded', bind);

  return {
    open: open,
    render: render,
    summary: summary,
    known: function () { return summary().known; },
    state: function () { return K; },
    card: card
  };
})();
