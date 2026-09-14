#!/usr/bin/env node
/* =====================================================================
   Leeskampioen - data check.

   Loads every data file exactly like the browser does and then checks
   that the stories and spelling exercises are complete and consistent:
   no missing translations, no answer index that points outside its own
   option list, no duplicate ids, no question type the game cannot draw.

   Run it with:   node tools/validate.js
   It prints a summary and exits with code 1 when something is wrong.
   ===================================================================== */
'use strict';

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.join(__dirname, '..');
const errors = [];
const warnings = [];

function err(where, msg) { errors.push(where + ': ' + msg); }
function warn(where, msg) { warnings.push(where + ': ' + msg); }

/* ---------------------------------------------------------------------
   1. Load the data files in the same order as index.html
   --------------------------------------------------------------------- */
const html = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
const scriptSrcs = [];
html.replace(/<script src="([^"]+)"><\/script>/g, function (_, src) { scriptSrcs.push(src); return _; });

const dataFiles = scriptSrcs.filter(function (s) { return s.indexOf('data/') === 0; });
if (!dataFiles.length) err('index.html', 'no data/*.js script tags found');

const sandbox = { window: {}, console: console };
sandbox.window.window = sandbox.window;
vm.createContext(sandbox);

dataFiles.forEach(function (rel) {
  const file = path.join(ROOT, rel);
  if (!fs.existsSync(file)) { err(rel, 'file referenced by index.html does not exist'); return; }
  const code = fs.readFileSync(file, 'utf8');
  try {
    vm.runInContext(code, sandbox, { filename: rel });
  } catch (e) {
    err(rel, 'could not be loaded: ' + e.message);
    return;
  }
  /* the story files call the global addStories(); mirror what the browser does */
  if (sandbox.window.addStories && !sandbox.addStories) sandbox.addStories = sandbox.window.addStories;
  if (sandbox.window.addSpelling && !sandbox.addSpelling) sandbox.addSpelling = sandbox.window.addSpelling;
});

const W = sandbox.window;
const TOPICS = W.TOPICS || [];
const LEVELS = W.LEVELS || [];
const SKILLS = W.SKILLS || {};
const STORIES = W.STORY_DB || [];
const CATS = W.SPELL_CATS || [];
const SETS = W.SPELL_SETS || [];

/* ---------------------------------------------------------------------
   2. Little helpers
   --------------------------------------------------------------------- */
const QUESTION_TYPES = ['mc', 'tf', 'gap', 'order', 'match', 'multi', 'sort'];
const SPELL_TYPES = ['pick', 'fill', 'type', 'error', 'sort'];

/* every text shown to the child must exist in both languages */
function bilingual(where, obj, field) {
  if (!obj || typeof obj !== 'object') { err(where, field + ' is missing'); return; }
  ['nl', 'en'].forEach(function (lang) {
    const v = obj[lang];
    if (v === undefined || v === null) { err(where, field + '.' + lang + ' is missing'); return; }
    if (Array.isArray(v)) {
      if (!v.length) err(where, field + '.' + lang + ' is empty');
      v.forEach(function (p, i) {
        if (typeof p !== 'string' || !p.trim()) err(where, field + '.' + lang + '[' + i + '] is empty');
      });
    } else if (typeof v !== 'string' || !v.trim()) {
      err(where, field + '.' + lang + ' is empty');
    }
  });
}

function words(story, lang) {
  return story.text[lang].join(' ').split(/\s+/).filter(Boolean).length;
}

/* ---------------------------------------------------------------------
   3. Worlds, levels and skills
   --------------------------------------------------------------------- */
if (!TOPICS.length) err('bootstrap.js', 'TOPICS is empty');
if (!LEVELS.length) err('bootstrap.js', 'LEVELS is empty');

const topicIds = {};
TOPICS.forEach(function (t) {
  const where = 'topic ' + t.id;
  if (topicIds[t.id]) err(where, 'duplicate topic id');
  topicIds[t.id] = true;
  ['emoji', 'nl', 'en', 'subNl', 'subEn'].forEach(function (k) {
    if (!t[k]) err(where, 'missing ' + k);
  });
  if (typeof t.hue !== 'number') err(where, 'hue must be a number');
});

const levelNums = {};
LEVELS.forEach(function (l) {
  const where = 'level ' + l.level;
  if (levelNums[l.level]) err(where, 'duplicate level number');
  levelNums[l.level] = true;
  ['avi', 'nl', 'en', 'stars', 'descNl', 'descEn'].forEach(function (k) {
    if (!l[k]) err(where, 'missing ' + k);
  });
});

Object.keys(SKILLS).forEach(function (k) {
  ['nl', 'en', 'emoji', 'tipNl', 'tipEn'].forEach(function (f) {
    if (!SKILLS[k][f]) err('skill ' + k, 'missing ' + f);
  });
});

/* ---------------------------------------------------------------------
   4. Stories and questions
   --------------------------------------------------------------------- */
const storyIds = {};
const typeCount = {};
const skillCount = {};
let questionTotal = 0;

STORIES.forEach(function (s) {
  const where = 'story ' + (s.id || '(no id)');
  if (!s.id) { err(where, 'missing id'); return; }
  if (storyIds[s.id]) err(where, 'duplicate story id');
  storyIds[s.id] = true;

  if (!topicIds[s.topic]) err(where, 'unknown topic "' + s.topic + '"');
  if (!levelNums[s.level]) err(where, 'unknown level "' + s.level + '"');
  if (!s.emoji) err(where, 'missing emoji');

  bilingual(where, s.title, 'title');
  bilingual(where, s.text, 'text');

  if (s.text && s.text.nl && s.text.en && s.text.nl.length !== s.text.en.length) {
    err(where, 'the Dutch text has ' + s.text.nl.length + ' paragraphs but the English has ' + s.text.en.length);
  }

  (s.words || []).forEach(function (w, i) {
    ['nl', 'en', 'defNl', 'defEn'].forEach(function (f) {
      if (!w[f]) err(where, 'word ' + i + ' is missing ' + f);
    });
  });

  if (!Array.isArray(s.questions) || !s.questions.length) { err(where, 'has no questions'); return; }
  questionTotal += s.questions.length;

  const qIds = {};
  s.questions.forEach(function (q, qi) {
    const qw = where + ' / ' + (q.id || 'q' + (qi + 1));
    if (!q.id) err(qw, 'missing question id');
    if (qIds[q.id]) err(qw, 'duplicate question id inside this story');
    qIds[q.id] = true;

    if (QUESTION_TYPES.indexOf(q.type) === -1) err(qw, 'unknown question type "' + q.type + '"');
    if (!SKILLS[q.skill]) err(qw, 'unknown skill "' + q.skill + '"');
    typeCount[q.type] = (typeCount[q.type] || 0) + 1;
    skillCount[q.skill] = (skillCount[q.skill] || 0) + 1;

    bilingual(qw, q.q, 'q');
    bilingual(qw, q.explain, 'explain');

    if (q.type === 'mc' || q.type === 'gap') {
      if (!Array.isArray(q.options) || q.options.length < 2) err(qw, 'needs at least two options');
      else {
        q.options.forEach(function (o, i) { bilingual(qw, o, 'options[' + i + ']'); });
        if (typeof q.answer !== 'number' || q.answer < 0 || q.answer >= q.options.length) {
          err(qw, 'answer ' + q.answer + ' is outside the option list (0.." + (q.options.length - 1) + ")');
        }
        const seen = {};
        q.options.forEach(function (o) {
          if (seen[o.nl]) err(qw, 'two options have the same Dutch text: "' + o.nl + '"');
          seen[o.nl] = true;
        });
      }
      if (q.type === 'gap' && q.q && q.q.nl.indexOf('___') === -1) {
        err(qw, 'a gap question needs ___ in the Dutch sentence');
      }
      if (q.type === 'gap' && q.q && q.q.en.indexOf('___') === -1) {
        err(qw, 'a gap question needs ___ in the English sentence');
      }
    } else if (q.type === 'tf') {
      if (typeof q.answer !== 'boolean') err(qw, 'a true/false answer must be true or false');
    } else if (q.type === 'multi') {
      if (!Array.isArray(q.options) || q.options.length < 3) err(qw, 'needs at least three options');
      else q.options.forEach(function (o, i) { bilingual(qw, o, 'options[' + i + ']'); });
      if (!Array.isArray(q.answer) || q.answer.length < 2) err(qw, 'needs at least two correct answers');
      else {
        const seen = {};
        q.answer.forEach(function (a) {
          if (typeof a !== 'number' || !q.options || a < 0 || a >= q.options.length) {
            err(qw, 'answer index ' + a + ' is outside the option list');
          }
          if (seen[a]) err(qw, 'answer index ' + a + ' is listed twice');
          seen[a] = true;
        });
        if (q.options && q.answer.length >= q.options.length) err(qw, 'every option is correct, that cannot be right');
      }
    } else if (q.type === 'order') {
      if (!Array.isArray(q.items) || q.items.length < 3) err(qw, 'needs at least three items');
      else q.items.forEach(function (o, i) { bilingual(qw, o, 'items[' + i + ']'); });
      if (!Array.isArray(q.answer) || !q.items || q.answer.length !== q.items.length) {
        err(qw, 'the answer must list every item exactly once');
      } else {
        const sorted = q.answer.slice().sort(function (a, b) { return a - b; });
        sorted.forEach(function (v, i) {
          if (v !== i) err(qw, 'the answer must be a permutation of 0..' + (q.items.length - 1));
        });
      }
    } else if (q.type === 'match') {
      if (!Array.isArray(q.pairs) || q.pairs.length < 3) err(qw, 'needs at least three pairs');
      else q.pairs.forEach(function (p, i) {
        bilingual(qw, p.word, 'pairs[' + i + '].word');
        bilingual(qw, p.meaning, 'pairs[' + i + '].meaning');
      });
    } else if (q.type === 'sort') {
      if (!Array.isArray(q.bins) || q.bins.length < 2) err(qw, 'needs at least two bins');
      else q.bins.forEach(function (b, i) { bilingual(qw, b, 'bins[' + i + ']'); });
      if (!Array.isArray(q.items) || q.items.length < 3) err(qw, 'needs at least three items');
      else {
        const used = {};
        q.items.forEach(function (it, i) {
          bilingual(qw, it, 'items[' + i + ']');
          if (typeof it.bin !== 'number' || !q.bins || it.bin < 0 || it.bin >= q.bins.length) {
            err(qw, 'items[' + i + '].bin points to a bin that does not exist');
          } else used[it.bin] = true;
        });
        if (q.bins && Object.keys(used).length < 2) err(qw, 'every item lands in the same bin');
      }
    }
  });
});

/* every topic should offer every level, otherwise the ladder has a hole */
TOPICS.forEach(function (t) {
  LEVELS.forEach(function (l) {
    const n = STORIES.filter(function (s) { return s.topic === t.id && s.level === l.level; }).length;
    if (!n) err('topic ' + t.id, 'has no story at level ' + l.level + ' (' + l.avi + ')');
  });
});

/* ---------------------------------------------------------------------
   5. Spelling
   --------------------------------------------------------------------- */
const catIds = {};
CATS.forEach(function (c) {
  const where = 'spelling rule ' + c.id;
  if (catIds[c.id]) err(where, 'duplicate id');
  catIds[c.id] = true;
  ['emoji', 'nl', 'en', 'subNl', 'subEn', 'ruleNl', 'ruleEn'].forEach(function (k) {
    if (!c[k]) err(where, 'missing ' + k);
  });
  if (typeof c.hue !== 'number') err(where, 'hue must be a number');
});

const setIds = {};
const spellTypeCount = {};
let spellItemTotal = 0;

SETS.forEach(function (s) {
  const where = 'spelling set ' + (s.id || '(no id)');
  if (!s.id) { err(where, 'missing id'); return; }
  if (setIds[s.id]) err(where, 'duplicate id');
  setIds[s.id] = true;
  if (!catIds[s.cat]) err(where, 'unknown spelling rule "' + s.cat + '"');
  if (typeof s.level !== 'number' || s.level < 1) err(where, 'level must be 1 or higher');
  bilingual(where, s.title, 'title');

  if (!Array.isArray(s.items) || !s.items.length) { err(where, 'has no items'); return; }
  spellItemTotal += s.items.length;

  s.items.forEach(function (it, i) {
    const iw = where + ' / item ' + (i + 1);
    if (SPELL_TYPES.indexOf(it.type) === -1) { err(iw, 'unknown exercise type "' + it.type + '"'); return; }
    spellTypeCount[it.type] = (spellTypeCount[it.type] || 0) + 1;
    bilingual(iw, it.why, 'why');
    if (it.sentence) bilingual(iw, it.sentence, 'sentence');

    if (it.type === 'pick') {
      if (!Array.isArray(it.options) || it.options.length < 2) err(iw, 'needs at least two options');
      else {
        it.options.forEach(function (o, n) {
          if (typeof o !== 'string' || !o.trim()) err(iw, 'options[' + n + '] must be a non-empty string');
        });
        if (typeof it.answer !== 'number' || it.answer < 0 || it.answer >= it.options.length) {
          err(iw, 'answer is outside the option list');
        }
        if (it.options[0] === it.options[1]) err(iw, 'the two options are identical');
      }
      /* `whole: true` means the options are complete sentences, so the
         sentence above them is a plain question without a gap */
      if (!it.whole && it.sentence && it.sentence.nl.indexOf('___') === -1) {
        err(iw, 'the Dutch sentence needs ___ where the word goes, or the item needs whole: true');
      }
    } else if (it.type === 'fill') {
      if (typeof it.before !== 'string' || typeof it.after !== 'string') err(iw, 'needs before and after as strings');
      if (!Array.isArray(it.gap) || it.gap.length < 2) err(iw, 'needs at least two gap choices');
      else if (typeof it.answer !== 'number' || it.answer < 0 || it.answer >= it.gap.length) {
        err(iw, 'answer is outside the gap choices');
      }
      if (it.before === '' && it.after === '') err(iw, 'before and after cannot both be empty');
    } else if (it.type === 'type') {
      if (typeof it.word !== 'string' || !it.word.trim()) err(iw, 'needs a word to type');
      if (!it.sentence) err(iw, 'a dictation item needs a sentence for context');
      else if (it.sentence.nl.indexOf('___') === -1) err(iw, 'the Dutch sentence needs ___ where the word goes');
      if (/[‘’]/.test(it.word || '')) err(iw, 'a typed word should not contain a curly apostrophe');
    } else if (it.type === 'error') {
      if (!Array.isArray(it.words) || it.words.length < 3) err(iw, 'needs at least three words');
      else if (typeof it.answer !== 'number' || it.answer < 0 || it.answer >= it.words.length) {
        err(iw, 'answer points outside the sentence');
      } else if (typeof it.fix !== 'string' || !it.fix.trim()) {
        err(iw, 'needs the correct spelling in "fix"');
      } else if (it.fix === it.words[it.answer]) {
        err(iw, 'the fix is identical to the word marked as wrong');
      }
    } else if (it.type === 'sort') {
      if (!Array.isArray(it.bins) || it.bins.length < 2) err(iw, 'needs at least two bins');
      else it.bins.forEach(function (b, n) { bilingual(iw, b, 'bins[' + n + ']'); });
      if (!Array.isArray(it.words) || it.words.length < 3) err(iw, 'needs at least three words');
      else {
        const used = {};
        it.words.forEach(function (w, n) {
          if (!w.w) err(iw, 'words[' + n + '] is missing the shown text');
          if (!w.full) err(iw, 'words[' + n + '] is missing the full word');
          if (typeof w.bin !== 'number' || !it.bins || w.bin < 0 || w.bin >= it.bins.length) {
            err(iw, 'words[' + n + '].bin points to a bin that does not exist');
          } else used[w.bin] = true;
        });
        if (Object.keys(used).length < 2) err(iw, 'every word lands in the same bin');
      }
    }
  });
});

/* each rule should have the same ladder of exercises */
CATS.forEach(function (c) {
  const mine = SETS.filter(function (s) { return s.cat === c.id; });
  if (!mine.length) { err('spelling rule ' + c.id, 'has no exercises'); return; }
  const levels = mine.map(function (s) { return s.level; }).sort();
  for (let i = 1; i <= levels[levels.length - 1]; i++) {
    if (levels.indexOf(i) === -1) err('spelling rule ' + c.id, 'has no exercise at level ' + i);
  }
});

/* ---------------------------------------------------------------------
   5b. Shop
   --------------------------------------------------------------------- */
const SHOP = W.SHOP_ITEMS || [];
const SHOP_KINDS = ['sticker', 'icon', 'character', 'tool'];
const shopIds = {};
let shopCoinTotal = 0;

SHOP.forEach(function (it) {
  const where = 'shop item ' + (it.id || '(no id)');
  if (!it.id) { err(where, 'missing id'); return; }
  if (shopIds[it.id]) err(where, 'duplicate id');
  shopIds[it.id] = true;
  if (!it.emoji) err(where, 'missing emoji');
  if (typeof it.cost !== 'number' || it.cost <= 0) err(where, 'cost must be a positive number');
  else shopCoinTotal += it.cost;
  if (!it.nl || !it.en) err(where, 'missing nl or en name');
  if (SHOP_KINDS.indexOf(it.kind) === -1) err(where, 'unknown kind "' + it.kind + '"');

  if (it.kind === 'tool') {
    if (it.effect === 'joker') {
      if (typeof it.amount !== 'number' || it.amount < 1) err(where, 'a joker tool needs amount >= 1');
    } else if (it.effect === 'theme') {
      if (typeof it.hue !== 'number') err(where, 'a theme tool needs a numeric hue');
    } else {
      err(where, 'unknown tool effect "' + it.effect + '"');
    }
  }
});
if (!SHOP.length) warn('data/shop.js', 'no shop items defined');

/* ---------------------------------------------------------------------
   6. Interface strings: every key used must exist in both languages
   --------------------------------------------------------------------- */
const i18nBox = { window: { LANG: 'nl' }, console: console };
vm.createContext(i18nBox);
let I18N = {}, BADGES = [], AVATARS = [];
try {
  vm.runInContext(fs.readFileSync(path.join(ROOT, 'js/i18n.js'), 'utf8') +
    ';({ I18N: I18N, BADGES: BADGES, AVATARS: AVATARS })', i18nBox, { filename: 'js/i18n.js' });
  const out = vm.runInContext('({ I18N: I18N, BADGES: BADGES, AVATARS: AVATARS })', i18nBox);
  I18N = out.I18N; BADGES = out.BADGES; AVATARS = out.AVATARS;
} catch (e) {
  err('js/i18n.js', 'could not be loaded: ' + e.message);
}

const usedKeys = new Set();
html.replace(/data-i18n="([^"]+)"/g, function (_, k) { usedKeys.add(k); return _; });
['js/app.js', 'js/spelling.js', 'js/log.js'].forEach(function (f) {
  const code = fs.readFileSync(path.join(ROOT, f), 'utf8');
  code.replace(/\bt\('([A-Za-z0-9]+)'\)/g, function (_, k) { usedKeys.add(k); return _; });
  code.replace(/\btRandom\('([A-Za-z0-9]+)'\)/g, function (_, k) { usedKeys.add(k); return _; });
  code.replace(/\bI18N\.([A-Za-z0-9]+)\b/g, function (_, k) { usedKeys.add(k); return _; });
  code.replace(/t\('res' \+ [^)]+\)/g, function (m) {
    for (let i = 0; i <= 3; i++) { usedKeys.add('res' + i); usedKeys.add('res' + i + 'sub'); }
    return m;
  });
});
usedKeys.forEach(function (k) {
  if (!I18N[k]) err('i18n', 'the game asks for the string "' + k + '", which does not exist');
});
Object.keys(I18N).forEach(function (k) {
  const e = I18N[k];
  if (!e || e.nl === undefined || e.en === undefined) err('i18n', '"' + k + '" is missing a translation');
  if (!usedKeys.has(k)) warn('i18n', '"' + k + '" is defined but never used');
});
BADGES.forEach(function (b) {
  ['id', 'emoji', 'nl', 'en', 'dNl', 'dEn'].forEach(function (f) {
    if (!b[f]) err('badge ' + (b.id || '?'), 'missing ' + f);
  });
});
if (AVATARS.length < 8) err('i18n', 'too few avatars to choose from');

/* ---------------------------------------------------------------------
   7. Files the browser loads must all exist
   --------------------------------------------------------------------- */
scriptSrcs.forEach(function (src) {
  if (!fs.existsSync(path.join(ROOT, src))) err('index.html', 'references ' + src + ', which does not exist');
});
['css/style.css'].forEach(function (f) {
  if (!fs.existsSync(path.join(ROOT, f))) err('index.html', f + ' is missing');
});

/* ---------------------------------------------------------------------
   8. Report
   --------------------------------------------------------------------- */
const wordStats = STORIES.map(function (s) { return { id: s.id, level: s.level, n: words(s, 'nl') }; });
const byLevel = {};
wordStats.forEach(function (w) {
  if (!byLevel[w.level]) byLevel[w.level] = [];
  byLevel[w.level].push(w.n);
});

console.log('');
console.log('📚 Leeskampioen - data check');
console.log('───────────────────────────────────────────────');
console.log('  worlds        : ' + TOPICS.length);
console.log('  levels        : ' + LEVELS.length + '  (' + LEVELS.map(function (l) { return l.avi; }).join(', ') + ')');
console.log('  stories       : ' + STORIES.length);
console.log('  questions     : ' + questionTotal);
console.log('  question types: ' + Object.keys(typeCount).sort().map(function (k) { return k + ' ' + typeCount[k]; }).join(', '));
console.log('  reading skills: ' + Object.keys(skillCount).sort().map(function (k) { return k + ' ' + skillCount[k]; }).join(', '));
console.log('');
console.log('  average words per level (Dutch):');
Object.keys(byLevel).sort().forEach(function (lv) {
  const list = byLevel[lv];
  const avg = Math.round(list.reduce(function (a, b) { return a + b; }, 0) / list.length);
  const l = LEVELS.filter(function (x) { return String(x.level) === lv; })[0];
  console.log('    level ' + lv + ' (' + (l ? l.avi : '?') + '): ' + avg +
              ' words   [' + Math.min.apply(null, list) + '-' + Math.max.apply(null, list) + ']');
});
console.log('');
console.log('  interface    : ' + Object.keys(I18N).length + ' strings in NL and EN, ' + BADGES.length + ' badges');
console.log('');
console.log('  spelling rules: ' + CATS.length);
console.log('  spelling sets : ' + SETS.length);
console.log('  spelling items: ' + spellItemTotal);
console.log('  exercise types: ' + Object.keys(spellTypeCount).sort().map(function (k) { return k + ' ' + spellTypeCount[k]; }).join(', '));
console.log('');
console.log('  shop items    : ' + SHOP.length + '  (' + shopCoinTotal + ' coins to unlock everything once)');
console.log('───────────────────────────────────────────────');

warnings.forEach(function (w) { console.log('  ⚠️  ' + w); });

if (errors.length) {
  console.log('');
  errors.forEach(function (e) { console.log('  ❌ ' + e); });
  console.log('');
  console.log('  ' + errors.length + ' problem(s) found.');
  process.exit(1);
}

console.log('  ✅ everything checks out.');
console.log('');
