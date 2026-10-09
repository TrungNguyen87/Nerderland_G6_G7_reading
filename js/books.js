/* =====================================================================
   De boekenkast: vervolgverhalen in hoofdstukken.

   Elk boek speelt in één wereld en groeit mee met de lezer:
     hoofdstuk 1 = groep 6 (niveau 2, AVI E6)
     hoofdstuk 2 = groep 7 (niveau 4, AVI E7)
     hoofdstuk 3 = groep 8 (niveau 6, 2F)
   Een boek mag ook langer zijn (4, 5, 6 ... hoofdstukken): na groep 8 blijft
   het op niveau 6 en worden de hoofdstukken vooral spannender. Een
   hoofdstuk opent pas als het vorige met minstens ⭐ is gelezen, en
   eindigt met een "hoe gaat het verder?"-zinnetje (teaser). Zo wil een kind
   het moeilijkere hoofdstuk lezen omdat het wil weten hoe het afloopt.
   Alle hoofdstukken na het eerste beginnen met een korte terugblik
   (recap), zodat het verhaal ook na een paar dagen nog te volgen is.

   Is een boek uit? Dan mag het kind zelf het volgende hoofdstuk schrijven
   (Store.player.myChapters). Dat blijft op het apparaat staan, de ouder ziet
   het in het rapport, en het levert XP en een badge op.

   De boeken staan in data/series.*.js (addSeries() in data/bootstrap.js).
   De hoofdstukken zijn gewone verhalen in STORY_DB met series + chapter
   erbij; storiesOf() in js/app.js laat ze buiten de werelden.
   ===================================================================== */
'use strict';

const Books = (function () {

  let current = null;

  function list() { return window.SERIES || []; }
  function byId(id) { return Ladder.seriesById(id); }
  function chapters(ser) { return Ladder.chapters(ser); }

  function gradeLabel(level) {
    return level <= 2 ? t('grade6') : level <= 5 ? t('grade7') : t('grade8');
  }

  function nextChapter(story) {
    if (!story || !story.series) return null;
    return chapters(byId(story.series)).filter(function (c) { return c.chapter === story.chapter + 1; })[0] || null;
  }

  /* het hoofdstuk dat nu aan de beurt is: open en nog niet gelezen */
  function upNext(ser) {
    const best = Store.player.best || {};
    return chapters(ser).filter(function (c) { return !best[c.id] && Ladder.chapterUnlocked(c); })[0] || null;
  }

  /* ---- de plank bovenaan het leestabblad ---- */
  function renderShelf() {
    const box = $('series-shelf');
    if (!box) return;
    box.innerHTML = '';
    if (!list().length) return;
    const best = Store.player.best || {};

    const head = document.createElement('div');
    head.className = 'shelf-head';
    head.innerHTML = '<h3>📚 ' + t('bookShelfTitle') + '</h3><p>' + t('bookShelfSub') + '</p>';
    box.appendChild(head);

    const row = document.createElement('div');
    row.className = 'book-row';
    list().forEach(function (ser) {
      const chs = chapters(ser);
      const done = chs.filter(function (c) { return best[c.id]; }).length;
      const nx = upNext(ser);
      const finished = Ladder.bookDone(ser);
      const card = document.createElement('button');
      card.className = 'book-card' + (finished ? ' done' : '') + (nx && done ? ' fresh' : '');
      card.dataset.series = ser.id;
      card.style.setProperty('--wh', ser.hue);
      const dots = chs.map(function (c) {
        return best[c.id] ? '✅' : Ladder.chapterUnlocked(c) ? '📖' : '🔒';
      }).join('') + (ser.more ? '✨' : '');
      card.innerHTML =
        (nx && done ? '<span class="book-ribbon">' + t('bookNew') + '</span>' : '') +
        '<span class="book-emoji">' + ser.emoji + '</span>' +
        '<b class="book-title"></b>' +
        '<span class="book-dots">' + dots + '</span>' +
        '<small class="book-prog">' + (finished ? (ser.more ? '📬 ' + t('bookMoreShort') : '🎓 ' + t('bookFinished'))
          : t('bookChapterOf').replace('{n}', nx ? nx.chapter : done).replace('{total}', chs.length)) + '</small>';
      card.querySelector('.book-title').textContent = L(ser.title);
      card.addEventListener('click', function () { Sound.click(); openBook(ser.id); });
      row.appendChild(card);
    });
    box.appendChild(row);
  }

  function openShelf() {
    S.mode = 'read';
    setHue(defaultHue(), 'default');
    renderWorlds();
    show('worlds');
    const box = $('series-shelf');
    if (box) setTimeout(function () { box.scrollIntoView({ behavior: 'smooth', block: 'start' }); }, 60);
  }

  function openBook(id) {
    const ser = byId(id);
    if (!ser) return;
    current = id;
    S.topic = ser.topic;
    setHue(ser.hue, 'default');
    renderBook();
    show('book');
  }

  /* ---- één boek: de drie hoofdstukken onder elkaar ---- */
  function renderBook() {
    const ser = byId(current);
    if (!ser) return;
    const best = Store.player.best || {};
    $('book-title').textContent = ser.emoji + ' ' + L(ser.title);
    $('book-blurb').textContent = L(ser.blurb);

    const grid = $('book-grid');
    grid.innerHTML = '';
    const chs = chapters(ser);
    const nx = upNext(ser);
    chs.forEach(function (ch) {
      const b = best[ch.id];
      const open = Ladder.chapterUnlocked(ch);
      const grad = Ladder.chapterGraduated(ch);
      const locked = grad && Ladder.lockOn();
      const lv = window.LEVELS.filter(function (l) { return l.level === ch.level; })[0];
      const prev = chs.filter(function (c) { return c.chapter === ch.chapter - 1; })[0];
      const got = b ? '⭐'.repeat(b.stars) + '☆'.repeat(3 - b.stars) : '';

      let desc;
      if (!open) desc = t('bookLockedPrev').replace('{n}', ch.chapter - 1);
      else if (grad) desc = t('gradCardDesc');
      else if (!b && prev && prev.teaser) desc = '📖 ' + L(prev.teaser);
      else desc = lv ? (window.LANG === 'nl' ? lv.descNl : lv.descEn) : '';

      const card = document.createElement('button');
      card.className = 'level-card chapter-card' + (grad ? ' graduated' : '') + (nx === ch ? ' next-dip' : '');
      card.dataset.story = ch.id;
      card.innerHTML =
        '<span class="lc-stars">' + (grad ? '🎓' : open ? (b ? got : '📖') : '🔒') + '</span>' +
        '<span><span class="lc-name">' + t('bookChapter').replace('{n}', ch.chapter) + ': ' + escHtml(L(ch.title)) + '</span>' +
          ' <span class="q-skill g8-pill">' + gradeLabel(ch.level) + '</span><br>' +
        '<span class="lc-meta">' + (lv ? lv.avi + ' &middot; ' : '') + ch.questions.length + ' ' + t('questionsShort') + '</span><br>' +
        '<span class="lc-desc"></span></span>' +
        '<span class="lc-right">' + (grad
          ? '<span class="lc-dip">🎓 ' + t('gradCardRight') + '</span><span class="lc-done">' + got + '</span>'
          : b ? '<span class="lc-done">' + t('bestScore') + ' ' + b.correct + '/' + b.total + '</span>'
            : (open ? t('notYet') : '🔒')) + '</span>';
      card.querySelector('.lc-desc').textContent = desc;
      if (!open) {
        card.style.opacity = '.55';
        card.addEventListener('click', function () { FX.toast(t('bookLockedPrev').replace('{n}', ch.chapter - 1)); Sound.wrong(); });
      } else if (locked) {
        card.addEventListener('click', function () { gradNudge(t('gradToastChapter')); });
      } else {
        card.addEventListener('click', function () { Sound.click(); openStory(ch); });
      }
      grid.appendChild(card);
    });

    /* een verhaal dat nog doorgaat: een stippelkaartje "wordt vervolgd" */
    if (ser.more) {
      const tbc = document.createElement('div');
      tbc.className = 'level-card chapter-card tbc';
      tbc.innerHTML =
        '<span class="lc-stars">📬</span>' +
        '<span><span class="lc-name"></span><br><span class="lc-desc"></span></span>';
      tbc.querySelector('.lc-name').textContent = t('bookChapter').replace('{n}', chs.length + 1) + ': ' + t('bookMore');
      tbc.querySelector('.lc-desc').textContent = t('bookMoreSub').replace('{n}', chs.length + 1);
      grid.appendChild(tbc);
    }

    const end = $('book-end');
    end.classList.toggle('hidden', !Ladder.bookDone(ser));
    end.textContent = (ser.more ? '📬 ' : '🎓 ') + (ser.more ? t('bookMoreNote') : t('bookDoneNote'));
    renderWrite(ser);
  }

  /* =====================================================================
     Zelf het volgende hoofdstuk schrijven
     ===================================================================== */
  const MIN_WORDS = 25;
  const MAX_CHARS = 2400;
  let editIdx = -1;          /* -1 = een nieuw hoofdstuk, anders het nummer in de lijst */
  let draftTimer = null;
  let formCtx = null;        /* van welk boek en welk hoofdstuk het formulier is */

  function mine(id) {
    const p = Store.player;
    if (!p.myChapters || typeof p.myChapters !== 'object') p.myChapters = {};
    if (!Array.isArray(p.myChapters[id])) p.myChapters[id] = [];
    return p.myChapters[id];
  }
  function words(text) {
    const m = String(text || '').trim().match(/\S+/g);
    return m ? m.length : 0;
  }
  function drafts() {
    const p = Store.player;
    if (!p.chapterDraft || typeof p.chapterDraft !== 'object') p.chapterDraft = {};
    return p.chapterDraft;
  }
  /* wat er in het formulier staat, voor als het scherm opnieuw getekend wordt
     (taalwissel) of de pagina ververst wordt */
  function readForm() {
    const ti = $('bw-title'), tx = $('bw-text');
    return ti && tx ? { title: ti.value, text: tx.value } : null;
  }
  function saveDraft(id) {
    const f = readForm();
    if (!f || editIdx !== -1) return;
    drafts()[id] = f;
    Store.save();
  }
  function ideasFor(ser) {
    /* de boekspecifieke ideeën gaan voor; de rest vult aan tot drie */
    const own = shuffle((ser.ideas || []).map(L));
    const gen = shuffle(I18N.bookIdeas[window.LANG || 'nl'].slice());
    return own.slice(0, 2).concat(gen).slice(0, 3);
  }
  let ideaCache = { id: null, lang: null, list: [] };

  function renderWrite(ser) {
    const box = $('book-write');
    if (!box) return;
    const keep = readForm();
    box.innerHTML = '';
    if (!Ladder.bookDone(ser)) {
      box.className = 'card book-write locked';
      box.textContent = '✍️ ' + t('bookWriteLocked');
      return;
    }
    box.className = 'card book-write';
    const base = chapters(ser).length;
    const list = mine(ser.id);
    const chapterNo = editIdx === -1 ? base + list.length + 1 : base + editIdx + 1;

    /* het geschreven werk eerst */
    if (list.length) {
      const h = document.createElement('h4');
      h.textContent = '📜 ' + t('bookWriteMine');
      box.appendChild(h);
      list.forEach(function (c, i) {
        const row = document.createElement('div');
        row.className = 'bw-mine' + (editIdx === i ? ' editing' : '');
        row.dataset.n = i;
        const head = document.createElement('div');
        head.className = 'bw-mine-head';
        const b = document.createElement('b');
        b.textContent = t('bookOwnChapter').replace('{n}', base + i + 1) + (c.title ? ': ' + c.title : '');
        const meta = document.createElement('small');
        meta.textContent = t('bookWriteWords').replace('{n}', words(c.text)) + ' · ' + new Date(c.ts).toLocaleDateString(window.LANG === 'nl' ? 'nl-NL' : 'en-GB');
        head.appendChild(b);
        head.appendChild(meta);
        const body = document.createElement('p');
        body.className = 'bw-body';
        body.textContent = c.text;
        const act = document.createElement('div');
        act.className = 'bw-actions';
        const ed = document.createElement('button');
        ed.className = 'ghost-btn bw-edit';
        ed.textContent = '✏️ ' + t('bookWriteEdit');
        ed.addEventListener('click', function () { Sound.click(); saveDraft(ser.id); editIdx = i; formCtx = null; renderWrite(ser); $('bw-text').focus(); });
        const del = document.createElement('button');
        del.className = 'ghost-btn bw-del';
        del.textContent = '🗑 ' + t('bookWriteDelete');
        del.addEventListener('click', function () {
          if (!window.confirm(t('bookWriteDeleteAsk'))) return;
          Sound.click();
          list.splice(i, 1);
          formCtx = null;
          if (editIdx === i) editIdx = -1; else if (editIdx > i) editIdx--;
          Store.save();
          renderWrite(ser);
        });
        act.appendChild(ed);
        act.appendChild(del);
        row.appendChild(head);
        row.appendChild(body);
        row.appendChild(act);
        box.appendChild(row);
      });
    }

    const title = document.createElement('h3');
    title.textContent = '✍️ ' + (editIdx === -1
      ? t('bookWriteTitle').replace('{n}', chapterNo)
      : t('bookWriteEditing').replace('{n}', chapterNo));
    box.appendChild(title);
    const sub = document.createElement('p');
    sub.className = 'bw-sub';
    sub.textContent = t('bookWriteSub');
    box.appendChild(sub);

    /* waar het verhaal ophield */
    const last = chapters(ser)[base - 1];
    const prevOwn = editIdx === -1 ? list[list.length - 1] : list[editIdx - 1];
    const stop = prevOwn ? '“' + prevOwn.text.trim().split(/\s+/).slice(-18).join(' ') + '”' : (last && last.teaser ? L(last.teaser) : '');
    if (stop) {
      const e = document.createElement('p');
      e.className = 'bw-stop';
      const bb = document.createElement('b');
      bb.textContent = '📖 ' + t('bookWriteLast') + ' ';
      e.appendChild(bb);
      e.appendChild(document.createTextNode(stop));
      box.appendChild(e);
    }

    /* drie ideeën om mee te beginnen */
    if (ideaCache.id !== ser.id || ideaCache.lang !== window.LANG) {
      ideaCache = { id: ser.id, lang: window.LANG, list: ideasFor(ser) };
    }
    const ih = document.createElement('p');
    ih.className = 'bw-ideas-head';
    ih.textContent = '💡 ' + t('bookWriteIdeas');
    box.appendChild(ih);
    const chips = document.createElement('div');
    chips.className = 'bw-chips';
    ideaCache.list.forEach(function (idea) {
      const c = document.createElement('span');
      c.className = 'bw-chip';
      c.textContent = idea;
      chips.appendChild(c);
    });
    box.appendChild(chips);

    /* dezelfde tekst als net: opnieuw tekenen (taalwissel) mag niets kwijtraken */
    const ctx = ser.id + ':' + editIdx;
    const cur = keep && formCtx === ctx ? keep
      : editIdx === -1 ? (drafts()[ser.id] || { title: '', text: '' })
        : { title: list[editIdx].title || '', text: list[editIdx].text || '' };
    formCtx = ctx;
    const ti = document.createElement('input');
    ti.id = 'bw-title';
    ti.className = 'bw-title';
    ti.type = 'text';
    ti.maxLength = 60;
    ti.placeholder = t('bookWriteTitlePh');
    ti.value = cur.title || '';
    const tx = document.createElement('textarea');
    tx.id = 'bw-text';
    tx.className = 'bw-text';
    tx.rows = 8;
    tx.maxLength = MAX_CHARS;
    tx.placeholder = t('bookWriteTextPh');
    tx.value = cur.text || '';
    const count = document.createElement('small');
    count.className = 'bw-count';
    const upd = function () {
      const w = words(tx.value);
      count.textContent = t('bookWriteWords').replace('{n}', w) + (w < MIN_WORDS ? ' · ' + t('bookWriteMin').replace('{n}', MIN_WORDS) : ' ✅');
      save.disabled = w < MIN_WORDS;
    };
    const save = document.createElement('button');
    save.id = 'bw-save';
    save.className = 'big-btn';
    save.textContent = '💾 ' + t('bookWriteSave');
    ti.addEventListener('input', function () { clearTimeout(draftTimer); draftTimer = setTimeout(function () { saveDraft(ser.id); }, 700); });
    tx.addEventListener('input', function () { upd(); clearTimeout(draftTimer); draftTimer = setTimeout(function () { saveDraft(ser.id); }, 700); });
    save.addEventListener('click', function () {
      const w = words(tx.value);
      if (w < MIN_WORDS) return;
      Sound.click();
      const rec = { ts: Date.now(), title: ti.value.trim(), text: tx.value.trim() };
      let first = false;
      if (editIdx === -1) { list.push(rec); first = true; delete drafts()[ser.id]; }
      else { rec.ts = list[editIdx].ts; rec.edited = Date.now(); list[editIdx] = rec; }
      editIdx = -1;
      formCtx = null;
      Store.log('my_chapter', { book: ser.id, n: base + list.length, words: w, edit: !first });
      let msg = t('bookWriteSaved');
      if (first) { addXP(15); msg += ' ' + t('bookWriteXp'); }
      Store.save();
      checkBadges({});
      FX.toast('✍️ ' + msg, 3600);
      FX.burst(70);
      Sound.star();
      renderWrite(ser);
      box.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
    box.appendChild(ti);
    box.appendChild(tx);
    box.appendChild(count);
    const row = document.createElement('div');
    row.className = 'bw-actions';
    row.appendChild(save);
    if (editIdx !== -1) {
      const cancel = document.createElement('button');
      cancel.className = 'ghost-btn';
      cancel.textContent = t('bookWriteCancel');
      cancel.addEventListener('click', function () { Sound.click(); editIdx = -1; formCtx = null; renderWrite(ser); });
      row.appendChild(cancel);
    }
    box.appendChild(row);
    const note = document.createElement('small');
    note.className = 'bw-note';
    note.textContent = '🔒 ' + t('bookWriteHome');
    box.appendChild(note);
    upd();
  }

  /* hoeveel eigen hoofdstukken heeft dit kind geschreven (voor de badge) */
  function writtenCount() {
    const all = (Store.player && Store.player.myChapters) || {};
    return Object.keys(all).reduce(function (n, k) {
      return n + (all[k] || []).filter(function (c) { return words(c.text) >= MIN_WORDS; }).length;
    }, 0);
  }

  return {
    renderShelf: renderShelf, openShelf: openShelf, openBook: openBook, renderBook: renderBook,
    nextChapter: nextChapter, gradeLabel: gradeLabel, current: function () { return current; },
    writtenCount: writtenCount, MIN_WORDS: MIN_WORDS
  };
})();
