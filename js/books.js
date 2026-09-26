/* =====================================================================
   De boekenkast: vervolgverhalen in drie hoofdstukken.

   Elk boek speelt in één wereld en groeit mee met de lezer:
     hoofdstuk 1 = groep 6 (niveau 2, AVI E6)
     hoofdstuk 2 = groep 7 (niveau 4, AVI E7)
     hoofdstuk 3 = groep 8 (niveau 6, 2F)
   Een hoofdstuk opent pas als het vorige met minstens ⭐ is gelezen, en
   eindigt met een "hoe gaat het verder?"-zinnetje (teaser). Zo wil een kind
   het moeilijkere hoofdstuk lezen omdat het wil weten hoe het afloopt.
   Hoofdstuk 2 en 3 beginnen met een korte terugblik (recap), zodat het
   verhaal ook na een paar dagen nog te volgen is.

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
      }).join('');
      card.innerHTML =
        (nx && done ? '<span class="book-ribbon">' + t('bookNew') + '</span>' : '') +
        '<span class="book-emoji">' + ser.emoji + '</span>' +
        '<b class="book-title"></b>' +
        '<span class="book-dots">' + dots + '</span>' +
        '<small class="book-prog">' + (finished ? '🎓 ' + t('bookFinished')
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

    const end = $('book-end');
    end.classList.toggle('hidden', !Ladder.bookDone(ser));
    end.textContent = '🎓 ' + t('bookDoneNote');
  }

  return {
    renderShelf: renderShelf, openShelf: openShelf, openBook: openBook, renderBook: renderBook,
    nextChapter: nextChapter, gradeLabel: gradeLabel, current: function () { return current; }
  };
})();
