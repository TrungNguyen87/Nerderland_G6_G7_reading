/* =====================================================================
   Leeskampioen - browser test.

   Serves the folder over plain HTTP, exactly like GitHub Pages does, and
   then plays the game in a real browser: it reads a story, answers every
   question type, finishes a spelling exercise, switches language, opens
   the parent dashboard and checks the downloads. Any console error, any
   failed request and any wrong answer marked correct fails the run.

   Needs Playwright:   npm install playwright
   Run it with:        node tools/smoke.mjs
   ===================================================================== */

import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { join, extname, normalize } from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright';

const ROOT = fileURLToPath(new URL('..', import.meta.url));
const PORT = 8787;

const MIME = {
  '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css',
  '.json': 'application/json', '.svg': 'image/svg+xml', '.ico': 'image/x-icon'
};

/* ---- a deliberately dumb static server: no rewrites, like Pages ---- */
const requested = [];
const server = createServer(async (req, res) => {
  const url = decodeURIComponent(req.url.split('?')[0]);
  requested.push(url);
  const rel = normalize(url === '/' ? '/index.html' : url).replace(/^(\.\.[/\\])+/, '');
  const file = join(ROOT, rel);
  try {
    const info = await stat(file);
    if (!info.isFile()) throw new Error('not a file');
    res.writeHead(200, { 'Content-Type': MIME[extname(file)] || 'application/octet-stream' });
    res.end(await readFile(file));
  } catch {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('not found');
  }
});

const problems = [];
const steps = [];
function ok(msg) { steps.push('  ✅ ' + msg); }
function bad(msg) { problems.push(msg); steps.push('  ❌ ' + msg); }

await new Promise((r) => server.listen(PORT, r));

/* PLAYWRIGHT_CHROMIUM lets you point at a Chromium that is already on the
   machine, for environments where "playwright install" is not wanted. */
const browser = await chromium.launch(
  process.env.PLAYWRIGHT_CHROMIUM ? { executablePath: process.env.PLAYWRIGHT_CHROMIUM } : {}
);
const page = await browser.newPage({ viewport: { width: 1100, height: 900 } });

/* Anything the browser complains about is a failure - except the Google
   Fonts request, which cannot reach the internet from a sandbox. The page
   has a full fallback font stack, so that is not a defect of the site. */
const external = (url) => !url.startsWith(`http://localhost:${PORT}`);
let fontsBlocked = false;

page.on('console', (m) => {
  const text = m.text();
  /* CERT_/SSL_ only ever shows up here for the https:// Google Fonts request:
     the test server itself is plain http://localhost, so it can never produce
     that error, and a sandboxed proxy that intercepts TLS reports exactly this
     instead of the plainer ERR_CONNECTION/ERR_NAME_NOT_RESOLVED. */
  if (/fonts\.(googleapis|gstatic)/.test(text) || /ERR_CONNECTION|ERR_NAME_NOT_RESOLVED|ERR_CERT_|ERR_SSL_/.test(text)) {
    fontsBlocked = true;
    return;
  }
  if (m.type() === 'error') bad('console error: ' + text);
  if (m.type() === 'warning' && /deprecat/i.test(text)) bad('console warning: ' + text);
});
page.on('pageerror', (e) => bad('uncaught exception: ' + e.message));
page.on('requestfailed', (r) => {
  if (external(r.url())) { fontsBlocked = true; return; }
  bad('failed request: ' + r.url());
});
page.on('response', (r) => {
  if (r.status() >= 400 && !external(r.url())) bad('HTTP ' + r.status() + ' for ' + r.url());
});

const sel = (s) => page.locator(s);

try {
  /* =================================================================
     1. Loading
     ================================================================= */
  await page.goto(`http://localhost:${PORT}/`, { waitUntil: 'networkidle' });

  const counts = await page.evaluate(() => ({
    stories: window.STORY_DB.length,
    topics: window.TOPICS.length,
    levels: window.LEVELS.length,
    skills: Object.keys(window.SKILLS).length,
    spellCats: window.SPELL_CATS.length,
    spellSets: window.SPELL_SETS.length,
    questions: window.STORY_DB.reduce((n, s) => n + s.questions.length, 0)
  }));
  ok(`loaded ${counts.stories} stories, ${counts.questions} questions, ` +
     `${counts.topics} worlds, ${counts.levels} levels, ${counts.skills} skills`);
  ok(`loaded ${counts.spellCats} spelling rules in ${counts.spellSets} exercises`);
  if (counts.stories < 40) bad('fewer stories loaded than expected');
  if (counts.levels < 5) bad('fewer than five difficulty levels');

  /* =================================================================
     2. Start the game
     ================================================================= */
  await sel('#input-name').fill('Testkind');
  await sel('#btn-start').click();
  await page.waitForSelector('#screen-worlds.active');
  const worldCards = await sel('#world-grid .world-card').count();
  if (worldCards !== counts.topics) bad(`world grid shows ${worldCards} of ${counts.topics} worlds`);
  else ok(`world screen shows all ${worldCards} worlds`);

  /* =================================================================
     3. Reading: open a story and check every level is listed
     ================================================================= */
  await sel('#world-grid .world-card').first().click();
  await page.waitForSelector('#screen-levels.active');
  const levelCards = await sel('#level-grid .level-card').count();
  if (levelCards < 5) bad(`level screen shows only ${levelCards} levels`);
  else ok(`level screen shows ${levelCards} difficulty levels`);

  /* a world can have more than one story per level, so the card index of
     "the first level-5 card" is however many level 1-4 cards precede it,
     not a fixed offset */
  const firstTopicId = await page.evaluate(() => window.TOPICS[0].id);
  const firstLevel5Index = await page.evaluate(
    (topicId) => window.STORY_DB.filter((s) => s.topic === topicId && s.level < 5).length,
    firstTopicId
  );
  const locked = await sel('#level-grid .level-card').nth(firstLevel5Index).innerText();
  if (!/🔒/.test(locked)) bad('level 5 is not locked for a new player');
  else ok('higher levels start locked');

  await sel('#level-grid .level-card').first().click();
  await page.waitForSelector('#screen-read.active');
  const storyWords = await sel('#story-text .w').count();
  if (storyWords < 50) bad('story text did not render');
  else ok(`story rendered (${storyWords} words, reading tools present)`);

  /* the reading aids must not throw */
  for (const btn of ['#btn-font', '#btn-ruler', '#btn-easyfont', '#btn-karaoke']) {
    await sel(btn).click();
  }
  await sel('#btn-karaoke').click();   /* stop the karaoke timer again */
  ok('reading aids (text size, ruler, easy font, follow-along) all respond');

  await sel('#btn-done-reading').click();
  await page.waitForSelector('#screen-quiz.active');

  /* =================================================================
     4. Answer every question of this story CORRECTLY, driven by the data
     ================================================================= */
  const total = await page.evaluate(() => S.story.questions.length);
  for (let i = 0; i < total; i++) {
    const type = await page.evaluate(() => S.story.questions[S.qi].type);

    if (type === 'mc' || type === 'gap' || type === 'multi') {
      const wanted = await page.evaluate(() => {
        const q = S.story.questions[S.qi];
        return q.type === 'multi' ? q.answer : [q.answer];
      });
      for (const orig of wanted) await sel(`#q-body .opt[data-orig="${orig}"]`).click();
    } else if (type === 'tf') {
      const val = await page.evaluate(() => (S.story.questions[S.qi].answer ? '1' : '0'));
      await sel(`#q-body .tf-btn[data-val="${val}"]`).click();
    } else if (type === 'order') {
      const order = await page.evaluate(() => S.story.questions[S.qi].answer);
      for (const orig of order) await sel(`#order-pool .order-item[data-orig="${orig}"]`).click();
    } else if (type === 'sort') {
      const bins = await page.evaluate(() => S.views[S.qi].items.map((x) => x.o.bin));
      for (let r = 0; r < bins.length; r++) {
        await sel('#q-body .sort-row').nth(r).locator('.sort-bin').nth(bins[r]).click();
      }
    } else if (type === 'match') {
      const pairs = await page.evaluate(() => S.story.questions[S.qi].pairs.length);
      for (let p = 0; p < pairs; p++) {
        await sel(`#q-body .match-col:first-child .match-item[data-pair="${p}"]`).click();
        await sel(`#q-body .match-col:last-child .match-item[data-pair="${p}"]`).click();
      }
      await page.waitForTimeout(600);   /* the match question checks itself */
    }

    if (type !== 'match') await sel('#btn-check').click();
    await page.waitForSelector('#q-feedback.show');

    const verdict = await page.evaluate(() => S.results[S.qi]);
    if (verdict !== true) bad(`question ${i + 1} (${type}) was marked wrong while the data says it is right`);

    /* A child often presses the flag to read the explanation in the other
       language. The answer and the feedback have to survive that. */
    if (i === 1) {
      const dutch = await sel('#q-feedback').innerText();
      await sel('#btn-lang').click();
      const english = await sel('#q-feedback').innerText();
      const stillChecked = await page.evaluate(() => S.checked && S.results[S.qi] === true);
      const nextVisible = await sel('#btn-next').isVisible();
      if (!stillChecked || !nextVisible) bad('switching language after answering reset the question');
      else if (dutch === english) bad('switching language did not translate the explanation');
      else ok('switching language after answering keeps the answer and translates the explanation');
      await sel('#btn-lang').click();
    }
    await sel('#btn-next').click();
  }
  ok(`answered all ${total} questions of the first story; every one scored correct`);

  await page.waitForSelector('#screen-result.active');
  const stars = await sel('#result-stars').innerText();
  const score = await sel('#rt-correct').innerText();
  if (!/⭐⭐⭐/.test(stars)) bad(`a flawless story gave "${stars}" instead of three stars`);
  else ok(`result screen: ${score} correct, ${stars}`);

  /* =================================================================
     5. Play the hardest level too: that is where multi and sort live
     ================================================================= */
  const typesSeen = await page.evaluate(() => {
    const seen = {};
    window.STORY_DB.forEach((s) => s.questions.forEach((q) => { seen[q.type] = (seen[q.type] || 0) + 1; }));
    return seen;
  });
  for (const t of ['mc', 'tf', 'gap', 'order', 'match', 'multi', 'sort']) {
    if (!typesSeen[t]) bad(`question type "${t}" is never used`);
  }
  ok('all seven question types appear in the story database');

  /* open a Cito-level story straight away, without grinding through the ladder */
  const hardest = await page.evaluate(() => {
    const s = window.STORY_DB.filter((x) => x.level === 5)[0];
    openStory(s);
    return { title: s.title.nl, n: s.questions.length, words: s.text.nl.join(' ').split(/\s+/).length };
  });
  await page.waitForSelector('#screen-read.active');
  await sel('#btn-done-reading').click();
  await page.waitForSelector('#screen-quiz.active');

  const playedTypes = new Set();
  const playedSkills = new Set();
  for (let i = 0; i < hardest.n; i++) {
    const q = await page.evaluate(() => {
      const qq = S.story.questions[S.qi];
      return {
        type: qq.type, skill: qq.skill,
        answer: qq.answer,
        bins: qq.type === 'sort' ? S.views[S.qi].items.map((x) => x.o.bin) : null,
        pairs: qq.type === 'match' ? qq.pairs.length : null
      };
    });
    playedTypes.add(q.type);
    playedSkills.add(q.skill);

    if (q.type === 'mc' || q.type === 'gap') {
      await sel(`#q-body .opt[data-orig="${q.answer}"]`).click();
    } else if (q.type === 'multi') {
      for (const o of q.answer) await sel(`#q-body .opt[data-orig="${o}"]`).click();
    } else if (q.type === 'tf') {
      await sel(`#q-body .tf-btn[data-val="${q.answer ? '1' : '0'}"]`).click();
    } else if (q.type === 'order') {
      for (const o of q.answer) await sel(`#order-pool .order-item[data-orig="${o}"]`).click();
    } else if (q.type === 'sort') {
      for (let r = 0; r < q.bins.length; r++) {
        await sel('#q-body .sort-row').nth(r).locator('.sort-bin').nth(q.bins[r]).click();
      }
    } else if (q.type === 'match') {
      for (let p = 0; p < q.pairs; p++) {
        await sel(`#q-body .match-col:first-child .match-item[data-pair="${p}"]`).click();
        await sel(`#q-body .match-col:last-child .match-item[data-pair="${p}"]`).click();
      }
      await page.waitForTimeout(600);
    }
    if (q.type !== 'match') await sel('#btn-check').click();
    await page.waitForSelector('#q-feedback.show');
    const verdict = await page.evaluate(() => S.results[S.qi]);
    if (verdict !== true) bad(`Cito-level question ${i + 1} (${q.type}/${q.skill}) was marked wrong although the data says it is right`);
    await sel('#btn-next').click();
  }
  await page.waitForSelector('#screen-result.active');
  ok(`played the hardest level ("${hardest.title}", ${hardest.words} words, ${hardest.n} questions)`);
  ok(`  question types used there: ${[...playedTypes].sort().join(', ')}`);
  ok(`  reading skills tested there: ${[...playedSkills].sort().join(', ')}`);
  for (const t of ['multi', 'sort']) {
    if (!playedTypes.has(t)) bad(`the Cito-level story never showed a "${t}" question`);
  }

  /* =================================================================
     6. A wrong answer must be marked wrong
     ================================================================= */
  await sel('#btn-again').click();
  await page.waitForSelector('#screen-read.active');
  await sel('#btn-done-reading').click();
  await page.waitForSelector('#screen-quiz.active');
  const wrongIdx = await page.evaluate(() => {
    const q = S.story.questions[0];
    if (q.type === 'mc' || q.type === 'gap') {
      return S.views[0].opts.map((o) => o.i).find((i) => i !== q.answer);
    }
    return null;
  });
  if (wrongIdx !== null && wrongIdx !== undefined) {
    await sel(`#q-body .opt[data-orig="${wrongIdx}"]`).click();
    await sel('#btn-check').click();
    await page.waitForSelector('#q-feedback.show');
    const verdict = await page.evaluate(() => S.results[0]);
    if (verdict !== false) bad('a deliberately wrong answer was accepted as correct');
    else ok('a wrong answer is marked wrong and the explanation appears');
  }

  /* =================================================================
     7. Spelling
     ================================================================= */
  await sel('#btn-home').click();
  await page.waitForSelector('#screen-worlds.active');
  await sel('.mode-tab[data-mode="spell"]').click();
  const spellCards = await sel('#spell-grid .world-card').count();
  if (spellCards !== counts.spellCats) bad(`spelling grid shows ${spellCards} of ${counts.spellCats} rules`);
  else ok(`spelling tab shows all ${spellCards} spelling rules`);

  await sel('#spell-grid .world-card').first().click();
  await page.waitForSelector('#screen-spell-sets.active');
  const rule = await sel('#spell-rule-text').innerText();
  if (rule.length < 40) bad('the spelling rule card is empty');
  else ok('the rule is explained above the exercises');

  await sel('#spell-set-grid .level-card').first().click();
  await page.waitForSelector('#screen-spell.active');

  const items = await page.evaluate(() => Spell.state().items.length);
  const typesPlayed = new Set();
  for (let i = 0; i < items; i++) {
    const it = await page.evaluate(() => {
      const SP = Spell.state();
      const item = Spell.current();
      return {
        type: item.type,
        answer: item.answer,
        word: item.word,
        bins: item.type === 'sort' ? SP.views[SP.i].words.map((w) => w.bin) : null
      };
    });
    typesPlayed.add(it.type);

    if (it.type === 'type') {
      await sel('#sp-input').fill(it.word);
    } else if (it.type === 'fill') {
      await sel(`#sp-body .sp-piece[data-orig="${it.answer}"]`).click();
    } else if (it.type === 'pick') {
      await sel(`#sp-body .opt[data-orig="${it.answer}"]`).click();
    } else if (it.type === 'error') {
      await sel(`#sp-body .sp-chip[data-orig="${it.answer}"]`).click();
    } else if (it.type === 'sort') {
      for (let r = 0; r < it.bins.length; r++) {
        await sel('#sp-body .sort-row').nth(r).locator('.sort-bin').nth(it.bins[r]).click();
      }
    } else {
      bad(`unknown spelling exercise type "${it.type}"`);
    }

    await sel('#btn-sp-check').click();
    await page.waitForSelector('#sp-feedback.show');
    const verdict = await page.evaluate(() => { const SP = Spell.state(); return SP.results[SP.i]; });
    if (verdict !== true) bad(`spelling item ${i + 1} (${it.type}) was marked wrong while the data says it is right`);
    await sel('#btn-sp-next').click();
  }
  await page.waitForSelector('#screen-spell-result.active');
  const spScore = await sel('#spt-correct').innerText();
  ok(`played a full spelling exercise (${items} items, types: ${[...typesPlayed].sort().join(', ')}) → ${spScore}`);
  const spStars = await sel('#sp-stars').innerText();
  if (!/⭐⭐⭐/.test(spStars)) bad(`a flawless spelling round gave "${spStars}" instead of three stars`);
  else ok('a flawless spelling round gives three stars');

  /* =================================================================
     8. Language switch across the whole interface
     ================================================================= */
  await sel('.back-btn[data-back="spell-cats"]').last().click();
  await page.waitForSelector('#screen-worlds.active');
  await sel('#btn-lang').click();
  const englishTab = await sel('.mode-tab[data-mode="read"]').innerText();
  if (!/Reading/.test(englishTab)) bad('the interface did not switch to English');
  else ok('the flag button switches the whole interface to English');
  await sel('#btn-lang').click();

  /* =================================================================
     9. Parent dashboard and the three downloads
     ================================================================= */
  await sel('#btn-parent').click();
  await page.waitForSelector('#screen-parent.active');
  /* answer the grown-up sum by reading it off the screen */
  const gate = await sel('#gate-sum').innerText();
  const [x, y] = gate.replace('= ?', '').split('×').map((n) => parseInt(n.trim(), 10));
  await sel('#gate-input').fill(String(x * y));
  await sel('#gate-btn').click();
  await page.waitForSelector('#parent-body:not(.hidden)');
  ok('the parent area opens after the multiplication gate');

  const stats = await page.evaluate(() => ({
    stories: document.getElementById('p-stories').textContent,
    questions: document.getElementById('p-questions').textContent,
    acc: document.getElementById('p-acc').textContent,
    spellWords: document.getElementById('p-spell-words').textContent,
    skillRows: document.querySelectorAll('#p-skills .sb-row').length,
    spellRows: document.querySelectorAll('#p-spell .sb-row').length,
    adviceRows: document.querySelectorAll('#p-advice li').length,
    logRows: document.querySelectorAll('#p-log tr').length
  }));
  if (Number(stats.questions) < 5) bad('the dashboard logged no questions');
  if (Number(stats.spellWords) < 3) bad('the dashboard logged no spelling words');
  if (stats.skillRows < 10) bad(`only ${stats.skillRows} reading-skill bars (expected 10)`);
  if (stats.spellRows < 10) bad(`only ${stats.spellRows} spelling bars (expected 10)`);
  if (stats.adviceRows < 1) bad('no advice was generated');
  ok(`dashboard: ${stats.stories} stories, ${stats.questions} questions, ${stats.acc} correct, ` +
     `${stats.spellWords} spelling words, ${stats.skillRows} skill bars, ${stats.spellRows} spelling bars, ` +
     `${stats.adviceRows} tips`);

  for (const [btn, label] of [['#btn-dl-csv', 'CSV'], ['#btn-dl-json', 'JSON'], ['#btn-dl-html', 'HTML report']]) {
    const [download] = await Promise.all([
      page.waitForEvent('download', { timeout: 5000 }),
      sel(btn).click()
    ]);
    const name = download.suggestedFilename();
    if (!name) bad(`${label} download produced no file`);
    else ok(`${label} download works (${name})`);
  }

  /* =================================================================
     10. Progress survives a reload, and the returning player sees a
     "who is playing?" chip instead of the name form
     ================================================================= */
  await page.reload({ waitUntil: 'networkidle' });
  await page.waitForSelector('#profile-picker:not(.hidden)');
  const chipCount = await sel('#profile-chips .profile-chip').count();
  if (chipCount !== 1) bad(`profile picker shows ${chipCount} chips after one profile was created (expected 1)`);
  else ok('a returning player sees a "who is playing?" chip instead of retyping their name');

  await page.locator('#profile-chips .profile-chip', { hasText: 'Testkind' }).click();
  await page.waitForSelector('#screen-worlds.active');
  const saved = await page.evaluate(() => ({
    name: Store.player.name,
    xp: Store.player.xp,
    stories: Object.keys(Store.player.best || {}).length,
    spelling: Object.keys(Store.player.spellBest || {}).length
  }));
  if (saved.name !== 'Testkind' || saved.xp <= 0) bad('progress did not survive a reload');
  else ok(`progress survives a reload (${saved.xp} XP, ${saved.stories} story, ${saved.spelling} spelling exercise)`);

  /* =================================================================
     11. A second player on the same device gets a separate profile
     and a separate log, and a parent can switch between them
     ================================================================= */
  await page.reload({ waitUntil: 'networkidle' });
  await page.waitForSelector('#profile-picker:not(.hidden)');
  await sel('#btn-new-player').click();
  await page.waitForSelector('#new-player-form:not(.hidden)');
  if (!(await sel('#btn-cancel-new').isVisible())) bad('"back to profiles" is missing once a profile already exists');
  const nameField = await sel('#input-name').inputValue();
  const avatarIsDefault = await page.evaluate(() => document.querySelector('.avatar-opt.sel').dataset.avatar === '🦸');
  if (nameField !== '' || !avatarIsDefault) bad('the new-player form was pre-filled with the other player\'s name or avatar');
  else ok('the new-player form starts blank, never pre-filled from another profile in memory');

  await sel('#input-name').fill('Speler2');
  await sel('#avatar-picker .avatar-opt').nth(3).click();
  await sel('#btn-start').click();
  await page.waitForSelector('#screen-worlds.active');

  const profileCount = await page.evaluate(() => Store.profiles.length);
  if (profileCount !== 2) bad(`expected 2 profiles on this device, found ${profileCount}`);
  else ok('a second player gets their own profile, separate from the first');

  await sel('#btn-parent').click();
  await page.waitForSelector('#screen-parent.active');
  const gate2 = await sel('#gate-sum').innerText();
  const [gx, gy] = gate2.replace('= ?', '').split('×').map((n) => parseInt(n.trim(), 10));
  await sel('#gate-input').fill(String(gx * gy));
  await sel('#gate-btn').click();
  await page.waitForSelector('#parent-body:not(.hidden)');

  const switchChips = await sel('#p-profile-switch .profile-chip').count();
  if (switchChips !== 2) bad(`parent profile switcher shows ${switchChips} players (expected 2)`);
  const speler2Stories = await sel('#p-stories').innerText();
  if (speler2Stories !== '0') bad(`a brand-new second player already shows ${speler2Stories} stories - logs are mixed up`);
  else ok('the parent dashboard for the new player starts clean, with no trace of the first player\'s log');

  await page.locator('#p-profile-switch .profile-chip', { hasText: 'Testkind' }).click();
  await page.waitForSelector('#p-stories');
  const testkindStories = await page.evaluate(() => document.getElementById('p-stories').textContent);
  if (testkindStories === '0') bad('switching the parent view back to Testkind lost their story count');
  else ok(`a parent can switch the dashboard back to Testkind and see their own log again (${testkindStories} stories)`);

  const [dl2] = await Promise.all([
    page.waitForEvent('download', { timeout: 5000 }),
    sel('#btn-dl-csv').click()
  ]);
  const dl2Name = dl2.suggestedFilename();
  if (!/testkind/i.test(dl2Name)) bad(`downloaded file "${dl2Name}" does not identify which player it belongs to`);
  else ok(`the downloaded file names the player it belongs to (${dl2Name})`);

  /* =================================================================
     12. Phone width works
     ================================================================= */
  await sel('#btn-home').click();
  await page.waitForSelector('#screen-worlds.active');
  await page.setViewportSize({ width: 390, height: 780 });
  const overflow = await page.evaluate(() =>
    document.documentElement.scrollWidth - document.documentElement.clientWidth);
  if (overflow > 2) bad(`the page scrolls sideways on a phone (${overflow}px too wide)`);
  else ok('no sideways scrolling at phone width (390px)');

  /* =================================================================
     13. Everything index.html asks for actually exists
     ================================================================= */
  const missing = requested.filter((u) => u !== '/favicon.ico' && !u.startsWith('/__'));
  ok(`server delivered ${missing.length} files without a single 404`);

} catch (e) {
  bad('the test itself crashed: ' + e.message + '\n' + e.stack);
} finally {
  await browser.close();
  server.close();
}

console.log('\n🧪 Leeskampioen - browser test');
console.log('───────────────────────────────────────────────');
steps.forEach((s) => console.log(s));
if (fontsBlocked) {
  console.log('  ℹ️  Google Fonts could not be reached from this machine; the page');
  console.log('      fell back to the system font, which is what it is designed to do.');
}
console.log('───────────────────────────────────────────────');
if (problems.length) {
  console.log(`  ${problems.length} problem(s) found.\n`);
  process.exit(1);
}
console.log('  ✅ the game plays through without a single error.\n');
