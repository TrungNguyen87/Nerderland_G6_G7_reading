/* =====================================================================
   Spellingkampioen - de spellinglogica.

   Dezelfde opzet als het leesspel: kies een regel, kies een oefening,
   maak de opdrachten, krijg sterren. XP, streak, geluid en confetti
   worden gedeeld met het leesspel, zodat het één spel blijft.
   ===================================================================== */
'use strict';

const Spell = (function () {

  const SP = {
    cat: null, set: null, i: 0,
    items: [], results: [], wrong: [],
    selected: null, sortPick: null,
    checked: false, ruleOpen: false, jokerUsed: false,
    setStart: 0, itemStart: 0,
    last: null
  };

  const JOKER_TYPES = ['pick', 'fill', 'error'];

  /* ---- kleine helpers ---- */
  function catById(id) {
    return window.SPELL_CATS.filter(function (c) { return c.id === id; })[0];
  }
  function setsOf(catId) {
    return window.SPELL_SETS
      .filter(function (s) { return s.cat === catId; })
      .sort(function (a, b) { return a.level - b.level; });
  }
  function bestOf(setId) {
    const b = Store.player.spellBest || {};
    return b[setId];
  }
  function setUnlocked(catId, level) {
    if (level <= 1) return true;
    return setsOf(catId).some(function (s) { return s.level === level - 1 && bestOf(s.id); });
  }
  /* het hele woord dat bij een opdracht hoort - ook voor het logboek */
  function wordOf(it) {
    if (it.type === 'type') return it.word;
    if (it.type === 'fill') return it.before + it.gap[it.answer] + it.after;
    if (it.type === 'pick') return it.options[it.answer];
    if (it.type === 'error') return it.fix;
    if (it.type === 'sort') return it.words.map(function (w) { return w.full; }).join(', ');
    return '';
  }
  function sentenceWith(it, word) {
    const s = it.sentence ? (it.sentence.nl || '') : '';
    return s ? s.replace('___', word) : word;
  }

  /* Nederlandse woorden spreek je altijd in het Nederlands uit, ook als
     de knoppen op Engels staan. */
  function sayWord(it) {
    const word = wordOf(it);
    if (!Speech.available()) { FX.toast(t('spellNoSpeech')); return; }
    Speech.speak(word + '. ' + sentenceWith(it, word), 'nl', 0.78);
  }

  /* twee schrijfwijzen vergelijken: hoofdletters en soort apostrof maken
     voor een dictee niet uit */
  function tidy(s) {
    return String(s === null || s === undefined ? '' : s)
      .trim().replace(/\s+/g, ' ').replace(/[‘’`´]/g, "'");
  }
  function sameWord(given, want) {
    return tidy(given).toLowerCase() === tidy(want).toLowerCase();
  }

  /* =====================================================================
     1. De regels (categorieën) op het wereldenscherm
     ===================================================================== */
  function renderCats() {
    const grid = $('spell-grid');
    grid.innerHTML = '';

    window.SPELL_CATS.forEach(function (c) {
      const sets = setsOf(c.id);
      const doneN = sets.filter(function (s) { return bestOf(s.id); }).length;
      const pct = sets.length ? Math.round(doneN / sets.length * 100) : 0;
      const words = sets.reduce(function (n, s) { return n + s.items.length; }, 0);

      const meta = c.meta && window.SPELL_META && window.SPELL_META[c.meta];

      const card = document.createElement('button');
      card.className = 'world-card';
      card.style.setProperty('--wh', c.hue);
      card.innerHTML =
        '<span class="wc-emoji">' + c.emoji + '</span>' +
        (meta ? '<span class="q-skill">' + meta.emoji + ' ' + (window.LANG === 'nl' ? meta.nl : meta.en) + '</span>' : '') +
        '<h3 class="wc-title">' + (window.LANG === 'nl' ? c.nl : c.en) + '</h3>' +
        '<p class="wc-sub">' + (window.LANG === 'nl' ? c.subNl : c.subEn) + '</p>' +
        '<div class="wc-progress"><i style="width:' + pct + '%"></i></div>' +
        '<span class="wc-count">' + doneN + '/' + sets.length + ' ' + t('spellSets') +
          ' &middot; ' + words + ' ' + t('spellWords') + (doneN === sets.length ? ' ✓' : '') + '</span>';
      card.addEventListener('click', function () {
        Sound.click();
        SP.cat = c.id;
        setHue(c.hue, 'school');
        renderSets();
        show('spell-sets');
      });
      grid.appendChild(card);
    });
  }

  /* =====================================================================
     2. De oefeningen binnen één regel
     ===================================================================== */
  function renderSets() {
    const c = catById(SP.cat);
    if (!c) return;
    const meta = c.meta && window.SPELL_META && window.SPELL_META[c.meta];
    $('spell-cat-title').innerHTML = c.emoji + ' ' + (window.LANG === 'nl' ? c.nl : c.en) +
      (meta ? ' <span class="q-skill">' + meta.emoji + ' ' + (window.LANG === 'nl' ? meta.nl : meta.en) + '</span>' : '');
    $('spell-rule-title').textContent = '💡 ' + t('spellRule');
    $('spell-rule-text').innerHTML = window.LANG === 'nl' ? c.ruleNl : c.ruleEn;
    $('spell-sets-sub').textContent = t('chooseSet');

    const grid = $('spell-set-grid');
    grid.innerHTML = '';

    setsOf(c.id).forEach(function (s) {
      const b = bestOf(s.id);
      const open = setUnlocked(c.id, s.level);
      const stars = '⭐'.repeat(s.level) ;

      const card = document.createElement('button');
      card.className = 'level-card';
      card.innerHTML =
        '<span class="lc-stars">' + (open ? (b ? '⭐'.repeat(b.stars) + '☆'.repeat(3 - b.stars) : stars) : '🔒') + '</span>' +
        '<span><span class="lc-name">' + L(s.title) + '</span><br>' +
        '<span class="lc-meta">' + s.items.length + ' ' + t('spellWords') + '</span></span>' +
        '<span class="lc-right">' + (b
          ? '<span class="lc-done">' + t('bestScore') + ' ' + b.correct + '/' + b.total + '</span>'
          : (open ? t('notYet') : t('spellLocked'))) + '</span>';

      if (!open) {
        card.style.opacity = '.55';
        card.addEventListener('click', function () { FX.toast(t('spellLocked')); Sound.wrong(); });
      } else {
        card.addEventListener('click', function () { Sound.click(); openSet(s); });
      }
      grid.appendChild(card);
    });
  }

  /* =====================================================================
     3. Een oefening spelen
     ===================================================================== */
  function openSet(set) {
    SP.set = set;
    SP.cat = set.cat;
    SP.i = 0;
    SP.results = [];
    SP.wrong = [];
    SP.setStart = Date.now();
    SP.coinsBefore = Store.player.coins || 0;
    /* elke ronde in een andere volgorde, zodat herhalen zin heeft */
    SP.items = shuffle(set.items.slice());
    SP.views = SP.items.map(function (it) {
      if (it.type === 'pick') return { opts: shuffle(it.options.map(function (o, i) { return { o: o, i: i }; })) };
      if (it.type === 'sort') return { words: shuffle(it.words.slice()) };
      return {};
    });

    const c = catById(SP.cat);
    setHue(c ? c.hue : 255, 'school');
    Store.log('spell_start', {
      session: S.sessionId, set: set.id, cat: set.cat, level: set.level,
      items: set.items.length, lang: window.LANG
    });
    show('spell');
    renderItem();
  }

  function current() { return SP.items[SP.i]; }

  function renderProgress() {
    const box = $('sp-progress');
    box.innerHTML = '';
    SP.items.forEach(function (it, i) {
      const d = document.createElement('i');
      d.className = 'q-dot' + (i === SP.i ? ' now' : '') +
        (SP.results[i] === true ? ' ok' : SP.results[i] === false ? ' no' : '');
      box.appendChild(d);
    });
  }

  function renderItem() {
    if (!SP.set) return;
    const it = current();
    const v = SP.views[SP.i];
    const c = catById(SP.cat);

    SP.selected = null;
    SP.sortPick = null;
    SP.checked = false;
    SP.jokerUsed = false;
    SP.itemStart = Date.now();

    renderProgress();
    $('sp-cat').textContent = c.emoji + ' ' + (window.LANG === 'nl' ? c.nl : c.en) +
      ' · ' + t('question') + ' ' + (SP.i + 1) + ' ' + t('of') + ' ' + SP.items.length;

    const fb = $('sp-feedback');
    fb.className = 'q-feedback';
    fb.innerHTML = '';
    $('btn-sp-check').classList.remove('hidden');
    $('btn-sp-next').classList.add('hidden');
    $('btn-sp-next').textContent = (SP.i === SP.items.length - 1) ? t('finishStory') : t('next');
    $('btn-sp-listen').classList.toggle('hidden', it.type !== 'type');
    $('btn-sp-joker').classList.toggle('hidden',
      JOKER_TYPES.indexOf(it.type) === -1 || !((Store.player.tools || {}).jokers > 0));

    const body = $('sp-body');
    body.innerHTML = '';

    if (it.type === 'pick') { $('sp-question').textContent = t('spellPickHint'); renderPick(body, it, v); }
    else if (it.type === 'fill') { $('sp-question').textContent = t('spellFillHint'); renderFill(body, it); }
    else if (it.type === 'type') { $('sp-question').textContent = t('spellTypeHint'); renderType(body, it); }
    else if (it.type === 'error') { $('sp-question').textContent = t('spellErrorHint'); renderError(body, it); }
    else if (it.type === 'sort') { $('sp-question').textContent = t('spellSortHint'); renderSortItem(body, it, v); }
  }

  /* ---- welk woord is goed geschreven? ---- */
  function renderPick(body, it, v) {
    if (it.sentence) {
      const sent = document.createElement('div');
      sent.className = 'gap-sentence';
      sent.innerHTML = L(it.sentence).replace('___', '<span class="blank" id="sp-blank">?</span>');
      body.appendChild(sent);
    }
    const wrap = document.createElement('div');
    wrap.className = 'q-body';
    body.appendChild(wrap);

    v.opts.forEach(function (item, n) {
      const b = document.createElement('button');
      b.className = 'opt';
      b.dataset.orig = item.i;
      b.innerHTML = '<span class="key">' + (n + 1) + '</span><span class="sp-word">' + item.o + '</span>';
      b.addEventListener('click', function () {
        if (SP.checked) return;
        Sound.click();
        $$('#sp-body .opt').forEach(function (x) { x.classList.remove('sel'); });
        b.classList.add('sel');
        SP.selected = item.i;
        const blank = $('sp-blank');
        if (blank) blank.textContent = item.o;
      });
      wrap.appendChild(b);
    });
  }

  /* ---- welk stukje hoort er in het woord? ---- */
  function renderFill(body, it) {
    const shown = document.createElement('div');
    shown.className = 'sp-gapword';
    shown.innerHTML = it.before + '<span class="blank" id="sp-blank">?</span>' + it.after;
    body.appendChild(shown);

    const wrap = document.createElement('div');
    wrap.className = 'sp-gap-options';
    body.appendChild(wrap);

    it.gap.forEach(function (piece, i) {
      const b = document.createElement('button');
      b.className = 'opt sp-piece';
      b.dataset.orig = i;
      b.textContent = piece;
      b.addEventListener('click', function () {
        if (SP.checked) return;
        Sound.click();
        $$('#sp-body .sp-piece').forEach(function (x) { x.classList.remove('sel'); });
        b.classList.add('sel');
        SP.selected = i;
        $('sp-blank').textContent = piece;
      });
      wrap.appendChild(b);
    });
  }

  /* ---- dictee: luister en typ ---- */
  function renderType(body, it) {
    if (it.sentence) {
      const sent = document.createElement('div');
      sent.className = 'gap-sentence';
      sent.innerHTML = L(it.sentence).replace('___', '<span class="blank">?</span>');
      body.appendChild(sent);
    }
    const label = document.createElement('label');
    label.className = 'field-label';
    label.textContent = t('spellTypeLabel');
    body.appendChild(label);

    const input = document.createElement('input');
    input.className = 'text-input sp-input';
    input.id = 'sp-input';
    input.setAttribute('autocomplete', 'off');
    input.setAttribute('autocapitalize', 'off');
    input.setAttribute('autocorrect', 'off');
    input.setAttribute('spellcheck', 'false');
    input.addEventListener('input', function () { SP.selected = input.value; });
    input.addEventListener('keydown', function (e) {
      if (e.key !== 'Enter') return;
      e.preventDefault();
      if (SP.checked) next(); else check();
    });
    body.appendChild(input);
    setTimeout(function () { input.focus(); sayWord(it); }, 220);
  }

  /* ---- klik het fout geschreven woord aan ---- */
  function renderError(body, it) {
    const row = document.createElement('div');
    row.className = 'sp-sentence';
    body.appendChild(row);

    it.words.forEach(function (w, i) {
      const b = document.createElement('button');
      b.className = 'sp-chip';
      b.dataset.orig = i;
      b.textContent = w;
      b.addEventListener('click', function () {
        if (SP.checked) return;
        Sound.click();
        $$('#sp-body .sp-chip').forEach(function (x) { x.classList.remove('sel'); });
        b.classList.add('sel');
        SP.selected = i;
      });
      row.appendChild(b);
    });
  }

  /* ---- zet elk woord in de goede groep ---- */
  function renderSortItem(body, it, v) {
    SP.sortPick = v.words.map(function () { return null; });

    const list = document.createElement('div');
    list.className = 'sort-list';
    body.appendChild(list);

    v.words.forEach(function (word, n) {
      const row = document.createElement('div');
      row.className = 'sort-row';

      const label = document.createElement('span');
      label.className = 'sort-text';
      label.textContent = word.w;
      row.appendChild(label);

      const bins = document.createElement('span');
      bins.className = 'sort-bins';
      it.bins.forEach(function (bin, bi) {
        const b = document.createElement('button');
        b.className = 'sort-bin';
        b.textContent = L(bin);
        b.addEventListener('click', function () {
          if (SP.checked) return;
          Sound.click();
          $$('.sort-bin', bins).forEach(function (x) { x.classList.remove('sel'); });
          b.classList.add('sel');
          SP.sortPick[n] = bi;
          SP.selected = SP.sortPick.indexOf(null) === -1 ? SP.sortPick.slice() : null;
        });
        bins.appendChild(b);
      });
      row.appendChild(bins);
      list.appendChild(row);
    });
  }

  /* ---- joker: verklap het goede antwoord, tegen een lagere beloning ---- */
  function useJoker() {
    const it = current();
    if (!it || SP.checked || JOKER_TYPES.indexOf(it.type) === -1) return;
    const p = Store.player;
    if (!p.tools) p.tools = { jokers: 0 };
    if (!(p.tools.jokers > 0)) return;
    p.tools.jokers--;
    Store.save();
    Sound.click();
    SP.jokerUsed = true;
    let sel = null;
    if (it.type === 'pick') sel = '#sp-body .opt[data-orig="' + it.answer + '"]';
    else if (it.type === 'fill') sel = '#sp-body .sp-piece[data-orig="' + it.answer + '"]';
    else if (it.type === 'error') sel = '#sp-body .sp-chip[data-orig="' + it.answer + '"]';
    const b = sel ? $$(sel)[0] : null;
    if (b) b.click();
    $('btn-sp-joker').classList.add('hidden');
  }

  /* =====================================================================
     4. Nakijken
     ===================================================================== */
  function given(it) {
    const v = SP.views[SP.i];
    if (it.type === 'pick') return SP.selected === null ? '-' : it.options[SP.selected];
    if (it.type === 'fill') return SP.selected === null ? '-' : it.before + it.gap[SP.selected] + it.after;
    if (it.type === 'type') return tidy(SP.selected) || '-';
    if (it.type === 'error') return SP.selected === null ? '-' : it.words[SP.selected];
    if (it.type === 'sort') {
      if (!Array.isArray(SP.selected)) return '-';
      return SP.selected.map(function (bin, n) {
        return v.words[n].w + '=' + L(it.bins[bin]);
      }).join(' | ');
    }
    return '-';
  }

  function correctOf(it) {
    const v = SP.views[SP.i];
    if (it.type === 'pick') return SP.selected === it.answer;
    if (it.type === 'fill') return SP.selected === it.answer;
    if (it.type === 'type') return sameWord(SP.selected, it.word);
    if (it.type === 'error') return SP.selected === it.answer;
    if (it.type === 'sort') {
      if (!Array.isArray(SP.selected)) return false;
      return SP.selected.every(function (bin, n) { return bin === v.words[n].bin; });
    }
    return false;
  }

  function check() {
    if (SP.checked || !SP.set) return;
    const it = current();
    const v = SP.views[SP.i];

    if (it.type === 'type') {
      if (!tidy(SP.selected)) { FX.toast(t('typeFirst')); Sound.wrong(); return; }
    } else if (SP.selected === null || SP.selected === undefined) {
      FX.toast(t('chooseFirst')); Sound.wrong(); return;
    }

    SP.checked = true;
    const ok = correctOf(it);
    const ms = Date.now() - SP.itemStart;
    SP.results[SP.i] = ok;
    if (!ok) SP.wrong.push({ word: wordOf(it), given: given(it), why: L(it.why) });

    mark(it);

    if (ok) {
      if (SP.jokerUsed) {
        addXP(3);
      } else {
        S.streak++;
        addXP(8 + Math.min(S.streak, 5) * 2);
        FX.burst(S.streak >= 3 ? 50 : 22);
      }
      Sound.correct();
    } else {
      S.streak = 0;
      Sound.wrong();
    }
    updateHUD();

    verdict(it, ok);

    Store.log('spell_item', {
      session: S.sessionId, set: SP.set.id, cat: SP.cat, level: SP.set.level,
      itype: it.type, word: wordOf(it), given: given(it), correct: ok,
      ms: ms, joker: SP.jokerUsed, lang: window.LANG
    });
  }

  /* laten zien wat er goed was */
  function mark(it) {
    const v = SP.views[SP.i];
    if (it.type === 'pick' || it.type === 'fill') {
      const sel = it.type === 'pick' ? '#sp-body .opt' : '#sp-body .sp-piece';
      $$(sel).forEach(function (b) {
        const orig = parseInt(b.dataset.orig, 10);
        if (orig === it.answer) b.classList.add('ok');
        else if (orig === SP.selected) b.classList.add('no');
        b.style.pointerEvents = 'none';
      });
    } else if (it.type === 'error') {
      $$('#sp-body .sp-chip').forEach(function (b) {
        const orig = parseInt(b.dataset.orig, 10);
        if (orig === it.answer) { b.classList.add('ok'); b.textContent = it.fix; }
        else if (orig === SP.selected) b.classList.add('no');
        b.style.pointerEvents = 'none';
      });
    } else if (it.type === 'type') {
      const input = $('sp-input');
      if (input) { input.classList.add(SP.results[SP.i] ? 'ok' : 'no'); input.readOnly = true; }
    } else if (it.type === 'sort') {
      $$('#sp-body .sort-row').forEach(function (row, n) {
        row.classList.add(SP.sortPick[n] === v.words[n].bin ? 'ok' : 'no');
        $$('.sort-bin', row).forEach(function (x) { x.style.pointerEvents = 'none'; });
      });
    }
  }

  /* de regel en de uitleg onder de opdracht */
  function verdict(it, ok) {
    const fb = $('sp-feedback');
    fb.className = 'q-feedback show ' + (ok ? 'good' : 'bad');
    let html = '<b>' + (ok ? '✅ ' + t('correct') : '❌ ' + t('wrong')) + '</b>';
    if (!ok && it.type === 'type') {
      html += '<p class="sp-answer">' + t('spellRightWord') + ' <b>' + it.word + '</b></p>';
    }
    if (it.type === 'sort') {
      html += '<p class="sp-answer">' + it.words.map(function (w) {
        return w.full + ' <small>(' + L(it.bins[w.bin]) + ')</small>';
      }).join(' &middot; ') + '</p>';
    }
    if (SP.jokerUsed) html += '<p class="sp-answer">🃏 ' + t('jokerUsedNote') + '</p>';
    html += L(it.why);
    fb.innerHTML = html;

    $('btn-sp-check').classList.add('hidden');
    $('btn-sp-joker').classList.add('hidden');
    $('btn-sp-next').classList.remove('hidden');
    $('btn-sp-next').focus();
    renderProgress();
  }

  /* Opnieuw tekenen na een taalwissel, met de gemaakte keuze erin. */
  function reRenderItem() {
    const it = current();
    if (!it) return;
    const keep = {
      checked: SP.checked, selected: SP.selected, jokerUsed: SP.jokerUsed,
      sortPick: SP.sortPick ? SP.sortPick.slice() : null,
      itemStart: SP.itemStart
    };
    renderItem();
    if (!keep.checked) return;

    SP.checked = keep.checked;
    SP.selected = keep.selected;
    SP.jokerUsed = keep.jokerUsed;
    SP.sortPick = keep.sortPick;
    SP.itemStart = keep.itemStart;

    if (it.type === 'pick' || it.type === 'fill') {
      const sel = it.type === 'pick' ? '#sp-body .opt' : '#sp-body .sp-piece';
      $$(sel).forEach(function (b) {
        if (parseInt(b.dataset.orig, 10) === SP.selected) b.classList.add('sel');
      });
    } else if (it.type === 'error') {
      $$('#sp-body .sp-chip').forEach(function (b) {
        if (parseInt(b.dataset.orig, 10) === SP.selected) b.classList.add('sel');
      });
    } else if (it.type === 'type') {
      const input = $('sp-input');
      if (input) input.value = SP.selected || '';
    } else if (it.type === 'sort') {
      $$('#sp-body .sort-row').forEach(function (row, n) {
        const bin = SP.sortPick[n];
        if (bin === null || bin === undefined) return;
        $$('.sort-bin', row)[bin].classList.add('sel');
      });
    }

    mark(it);
    verdict(it, SP.results[SP.i]);
  }

  function next() {
    Sound.click();
    if (SP.i < SP.items.length - 1) { SP.i++; renderItem(); }
    else finish();
  }

  /* =====================================================================
     5. Resultaat
     ===================================================================== */
  function finish() {
    const total = SP.items.length;
    const correct = SP.results.filter(Boolean).length;
    const ratio = total ? correct / total : 0;
    const stars = ratio === 1 ? 3 : ratio >= 0.7 ? 2 : ratio >= 0.4 ? 1 : 0;
    const ms = Date.now() - SP.setStart;
    const xp = stars * 12 + correct * 2;
    addXP(xp);
    addCoins(stars * 3, 'spell:' + SP.set.id);
    const coinsGain = (Store.player.coins || 0) - (SP.coinsBefore || 0);

    const p = Store.player;
    if (!p.spellBest) p.spellBest = {};
    const prev = p.spellBest[SP.set.id];
    if (!prev || correct > prev.correct) {
      p.spellBest[SP.set.id] = { stars: stars, correct: correct, total: total, at: Date.now() };
    }
    Store.save();

    Store.log('spell_done', {
      session: S.sessionId, set: SP.set.id, cat: SP.cat, level: SP.set.level,
      correct: correct, total: total, stars: stars, xp: xp, ms: ms, lang: window.LANG
    });

    const badges = checkBadges({ spellPerfect: ratio === 1 });
    SP.last = { correct: correct, total: total, stars: stars, xp: xp, coins: coinsGain, ms: ms, badges: badges, wrong: SP.wrong.slice() };

    renderResult();
    show('spell-result');
    if (stars === 3) { FX.burst(200); Sound.finish(); }
    else if (stars >= 1) { FX.burst(80); Sound.star(); }
  }

  function renderResult() {
    const r = SP.last;
    if (!r) return;

    const box = $('sp-stars');
    box.innerHTML = '';
    for (let i = 0; i < 3; i++) {
      const s = document.createElement('span');
      s.textContent = i < r.stars ? '⭐' : '☆';
      s.style.animationDelay = (i * 0.22) + 's';
      box.appendChild(s);
    }
    $('sp-result-title').textContent = t('res' + r.stars);
    $('sp-result-sub').textContent = t('res' + r.stars + 'sub');
    $('spt-correct').textContent = r.correct + '/' + r.total;
    $('spt-xp').textContent = '+' + r.xp;
    $('spt-coins').textContent = '+' + (r.coins || 0);
    const m = Math.floor(r.ms / 60000), s = Math.floor(r.ms % 60000 / 1000);
    $('spt-time').textContent = m + ':' + String(s).padStart(2, '0');

    const list = $('sp-wordlist');
    list.innerHTML = '';
    if (r.wrong.length) {
      const h = document.createElement('h3');
      h.textContent = '📌 ' + t('spellWordList');
      list.appendChild(h);
      r.wrong.forEach(function (w) {
        const d = document.createElement('div');
        d.className = 'sp-missed';
        d.innerHTML = '<b>' + w.word + '</b><small>' + w.why + '</small>';
        list.appendChild(d);
      });
    }

    const nb = $('sp-new-badges');
    nb.innerHTML = '';
    (r.badges || []).forEach(function (b) {
      const d = document.createElement('div');
      d.className = 'new-badge';
      d.textContent = b.emoji + ' ' + (window.LANG === 'nl' ? b.nl : b.en);
      nb.appendChild(d);
    });

    $('btn-sp-again').textContent = t('spellAgain');
    $('btn-sp-continue').textContent = t('spellNextSet');
  }

  /* volgende oefening: eerst binnen dezelfde regel, anders een nieuwe regel */
  function nextSet() {
    const mine = setsOf(SP.cat);
    const open = mine.filter(function (s) { return !bestOf(s.id) && setUnlocked(SP.cat, s.level); });
    if (open.length) { openSet(open[0]); return; }

    const cats = shuffle(window.SPELL_CATS.slice());
    for (let i = 0; i < cats.length; i++) {
      const list = setsOf(cats[i].id).filter(function (s) {
        return !bestOf(s.id) && setUnlocked(cats[i].id, s.level);
      });
      if (list.length) { SP.cat = cats[i].id; openSet(list[0]); return; }
    }
    FX.toast(t('spellAllDone'), 3800);
    setHue(defaultHue(), 'default');
    S.mode = 'spell';
    renderWorlds();
    show('worlds');
  }

  /* =====================================================================
     6. Knoppen
     ===================================================================== */
  function bind() {
    $('btn-sp-check').addEventListener('click', check);
    $('btn-sp-next').addEventListener('click', next);
    $('btn-sp-joker').addEventListener('click', useJoker);
    $('btn-sp-listen').addEventListener('click', function () { Sound.click(); sayWord(current()); });
    $('btn-sp-rule').addEventListener('click', function () {
      Sound.click();
      SP.ruleOpen = !SP.ruleOpen;
      const c = catById(SP.cat);
      const panel = $('sp-rule-panel');
      panel.innerHTML = '<b>💡 ' + t('spellRule') + '</b>' + (window.LANG === 'nl' ? c.ruleNl : c.ruleEn);
      panel.classList.toggle('hidden', !SP.ruleOpen);
    });
    $('btn-sp-again').addEventListener('click', function () { Sound.click(); openSet(SP.set); });
    $('btn-sp-continue').addEventListener('click', function () { Sound.click(); nextSet(); });

    /* toetsenbord: 1-9 kiest, Enter controleert of gaat verder */
    document.addEventListener('keydown', function (e) {
      if (S.screen !== 'spell') return;
      if (current() && current().type === 'type') return;   /* daar typ je gewoon */
      if (e.key >= '1' && e.key <= '9') {
        const opts = $$('#sp-body .opt, #sp-body .sp-piece, #sp-body .sp-chip');
        const i = parseInt(e.key, 10) - 1;
        if (opts[i]) opts[i].click();
      } else if (e.key === 'Enter') {
        if (!$('btn-sp-next').classList.contains('hidden')) next();
        else check();
      }
    });
  }

  document.addEventListener('DOMContentLoaded', bind);

  return {
    renderCats: renderCats,
    renderSets: renderSets,
    renderItem: reRenderItem,
    renderResult: renderResult,
    openSet: openSet,
    /* de huidige stand van de oefening, zoals S dat doet voor het leesspel.
       Handig om in de console mee te kijken en om mee te testen. */
    state: function () { return SP; },
    current: current
  };
})();
