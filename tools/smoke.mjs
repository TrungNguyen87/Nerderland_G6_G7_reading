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

/* A diploma appears a moment after a result screen when a level is
   mastered. Wait for it and close it, and say how many there were. */
async function closeDiplomas(waitMs = 1100) {
  await page.waitForTimeout(waitMs);
  let n = 0;
  while (n < 8 && await page.evaluate(() => !document.getElementById('diploma-overlay').classList.contains('hidden'))) {
    const closeVisible = await sel('#dip-close').isVisible();
    await sel(closeVisible ? '#dip-close' : '#dip-go').click();
    n++;
    await page.waitForTimeout(400);
  }
  return n;
}

/* answer every question of the open story correctly, straight from the data */
async function answerStory(label) {
  const n = await page.evaluate(() => S.story.questions.length);
  for (let i = 0; i < n; i++) {
    const q = await page.evaluate(() => {
      const qq = S.story.questions[S.qi];
      return { type: qq.type, answer: qq.answer, bins: qq.type === 'sort' ? S.views[S.qi].items.map((x) => x.o.bin) : null,
        pairs: qq.type === 'match' ? qq.pairs.length : null };
    });
    if (q.type === 'find') await sel(`#q-body .find-opt[data-orig="${q.answer}"]`).click();
    else if (q.type === 'mc' || q.type === 'gap') await sel(`#q-body .opt[data-orig="${q.answer}"]`).click();
    else if (q.type === 'multi') { for (const o of q.answer) await sel(`#q-body .opt[data-orig="${o}"]`).click(); }
    else if (q.type === 'tf') await sel(`#q-body .tf-btn[data-val="${q.answer ? '1' : '0'}"]`).click();
    else if (q.type === 'order') { for (const o of q.answer) await sel(`#order-pool .order-item[data-orig="${o}"]`).click(); }
    else if (q.type === 'sort') {
      for (let r = 0; r < q.bins.length; r++) await sel('#q-body .sort-row').nth(r).locator('.sort-bin').nth(q.bins[r]).click();
    } else if (q.type === 'match') {
      for (let p = 0; p < q.pairs; p++) {
        await sel(`#q-body .match-col:first-child .match-item[data-pair="${p}"]`).click();
        await sel(`#q-body .match-col:last-child .match-item[data-pair="${p}"]`).click();
      }
      await page.waitForTimeout(600);
    }
    if (q.type !== 'match') await sel('#btn-check').click();
    await page.waitForSelector('#q-feedback.show');
    if (await page.evaluate(() => S.results[S.qi]) !== true) bad(`${label}: question ${i + 1} (${q.type}) was marked wrong although the data says it is right`);
    await sel('#btn-next').click();
  }
  await page.waitForSelector('#screen-result.active');
}

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
    (topicId) => window.STORY_DB.filter((s) => !s.series && s.topic === topicId && s.level < 5).length,
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
  for (const t of ['mc', 'tf', 'gap', 'order', 'match', 'multi', 'sort', 'find']) {
    if (!typesSeen[t]) bad(`question type "${t}" is never used`);
  }
  ok('all eight question types appear in the story database');

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
  /* the first exercise of a rule, with three stars: that is a spelling
     diploma, and "practise again" disappears because the set now closes */
  const spDip = await page.evaluate(() => ({ again: !document.getElementById('btn-sp-again').classList.contains('hidden'),
    key: Ladder.list().find((k) => k.startsWith('spell:')) }));
  const spDipShown = await closeDiplomas();
  if (!spDip.key || spDipShown < 1) bad(`a mastered first spelling exercise did not show a diploma (${JSON.stringify(spDip)}, shown ${spDipShown})`);
  else if (spDip.again) bad('"practise again" is still offered on a spelling exercise that now has a diploma');
  else ok(`a mastered spelling exercise gives a diploma (${spDip.key}) and is not offered again`);

  /* =================================================================
     7b. Rewards: daily quests, gift boxes, the album and the shop
     ================================================================= */
  await sel('.back-btn[data-back="spell-cats"]').last().click();
  await page.waitForSelector('#screen-worlds.active');
  await sel('.mode-tab[data-mode="read"]').click();

  const quests = await sel('#quest-list .quest').count();
  if (quests !== 3) bad(`the "today" card shows ${quests} daily quests (expected 3)`);
  const questState = await page.evaluate(() => Rewards.today());
  const anyProgress = Object.values(questState.prog).some((n) => n > 0);
  if (!anyProgress) bad('none of today\'s quests moved after two stories and a spelling exercise');
  else ok(`three daily quests are shown and track progress (${questState.ids.join(', ')})`);

  /* two flawless stories = two first-time three-star gift boxes */
  const chestsBefore = await page.evaluate(() => (Store.player.chests || []).length);
  if (chestsBefore < 1) bad('a first three-star story did not earn a gift box');
  else if (!(await sel('#btn-chest').isVisible())) bad('the gift button in the top bar is hidden although a gift is waiting');
  else {
    const before = await page.evaluate(() => ({
      gifts: ((Store.player.owned || {}).gift || []).length,
      coins: Store.player.coins, jokers: (Store.player.tools || {}).jokers || 0
    }));
    await sel('#btn-chest').click();
    await page.waitForSelector('#chest-overlay:not(.hidden)');
    await sel('#chest-gift').click();
    await page.waitForSelector('#chest-reward:not(.hidden)');
    const after = await page.evaluate(() => ({
      gifts: ((Store.player.owned || {}).gift || []).length,
      coins: Store.player.coins, jokers: (Store.player.tools || {}).jokers || 0,
      left: Store.player.chests.length
    }));
    const got = after.gifts > before.gifts || after.coins > before.coins || after.jokers > before.jokers;
    if (!got) bad('opening a gift box gave nothing');
    else if (after.left !== chestsBefore - 1) bad('opening a gift box did not use it up');
    else ok(`a gift box opens with a reward (${chestsBefore} waiting, ${after.left} left)`);
    /* close, and open the rest that open automatically one after another */
    for (let i = 0; i < 12; i++) {
      await sel('#chest-close').click();
      await page.waitForTimeout(300);
      if (await sel('#chest-overlay').isHidden()) break;
      await sel('#chest-gift').click();
      await page.waitForSelector('#chest-reward:not(.hidden)');
    }
    if (!(await sel('#chest-overlay').isHidden())) bad('the gift overlay does not close');
  }

  /* the album shows every chest-only gift, found or not */
  await sel('#btn-album').click();
  await page.waitForSelector('#screen-shop.active');
  const albumCards = await sel('#shop-grid .album-card').count();
  const giftTotal = await page.evaluate(() => window.SHOP_ITEMS.filter((it) => it.kind === 'gift').length);
  if (albumCards !== giftTotal) bad(`the album shows ${albumCards} of ${giftTotal} gifts`);
  else ok(`the album shows all ${giftTotal} collectable gifts`);

  /* buy an icon and wear it: this used to crash (selectAvatar was undefined) */
  await page.evaluate(() => { Store.player.coins = 400; Store.player.xp = 5 * 160; Store.save(); updateHUD(); });
  await sel('.shop-tab[data-kind="icon"]').click();
  await sel('#shop-grid .shop-card .sc-buy').first().click();
  await sel('#shop-grid .shop-card .sc-equip').first().click();
  const worn = await page.evaluate(() => ({
    avatar: Store.player.avatar, hud: document.getElementById('hud-avatar').textContent,
    registry: Store.profiles.find((p) => p.id === Store.activeProfileId).avatar
  }));
  const icon = await page.evaluate(() => window.SHOP_ITEMS.find((it) => it.kind === 'icon' &&
    (Store.player.owned.icon || []).indexOf(it.id) !== -1).emoji);
  if (worn.avatar !== icon || worn.hud !== icon || worn.registry !== icon) {
    bad(`buying and wearing an icon did not change the avatar everywhere (${JSON.stringify(worn)})`);
  } else ok(`an icon bought in the shop can be worn as the avatar (${icon})`);

  /* the 30-minute mission pays out once per day, not on every reload */
  await sel('#btn-home').click();
  await page.waitForSelector('#screen-worlds.active');
  await page.evaluate(() => { Store.player.daily[todayKey()] = MISSION_MS - 1500; Store.player.missionDay = ''; });
  await page.waitForTimeout(2600);
  const missionOnce = await page.evaluate(() => Store.events.filter((e) => e.t === 'mission_done').length);
  await page.reload({ waitUntil: 'networkidle' });
  await page.locator('#profile-chips .profile-chip', { hasText: 'Testkind' }).click();
  await page.waitForSelector('#screen-worlds.active');
  await page.waitForTimeout(2600);
  const missionAfterReload = await page.evaluate(() => Store.events.filter((e) => e.t === 'mission_done').length);
  if (missionOnce !== 1) bad(`the 30-minute mission fired ${missionOnce} times instead of once`);
  else if (missionAfterReload !== 1) bad('the 30-minute mission paid out again after a reload');
  else ok('the 30-minute mission pays out once per day, also after a reload');

  /* =================================================================
     7c. Groep 8, the arcade, the Woordkist and the reading dragon
     ================================================================= */
  /* tickets: 3 to start, +2 per finished story, +1 per spelling set.
     So far: two flawless stories and one flawless spelling set. */
  const tickets0 = await page.evaluate(() => Store.player.tickets);
  if (tickets0 !== 3 + 2 + 2 + 1) bad(`expected 8 game tickets after two stories and a spelling set, found ${tickets0}`);
  else ok('game tickets are earned by reading (+2 per story) and spelling (+1 per set)');

  /* the reading dragon has hatched from all that reading */
  const pet = await page.evaluate(() => ({ stage: Rewards.petStage(), emoji: document.getElementById('pet-emoji').textContent,
    grew: Store.events.filter((e) => e.t === 'pet_grow').length }));
  if (pet.stage < 1 || pet.emoji === '🥚' || pet.grew < 1) bad(`the reading dragon did not hatch after reading (${JSON.stringify(pet)})`);
  else ok(`the reading dragon hatched and is shown on the world screen (${pet.emoji})`);

  /* a groep 8 story: the level-6 card is there, and a whole Eindbaas
     story plays through, including the new "find the proof" questions */
  const g8 = await page.evaluate(() => {
    const s = window.STORY_DB.find((x) => x.level === 6 && x.questions.some((q) => q.type === 'find'));
    openStory(s);
    return { id: s.id, n: s.questions.length, finds: s.questions.filter((q) => q.type === 'find').length };
  });
  await page.waitForSelector('#screen-read.active');
  await sel('#btn-done-reading').click();
  await page.waitForSelector('#screen-quiz.active');
  const g8Types = new Set();
  for (let i = 0; i < g8.n; i++) {
    const q = await page.evaluate(() => {
      const qq = S.story.questions[S.qi];
      return { type: qq.type, answer: qq.answer, bins: qq.type === 'sort' ? S.views[S.qi].items.map((x) => x.o.bin) : null,
        pairs: qq.type === 'match' ? qq.pairs.length : null };
    });
    g8Types.add(q.type);
    if (q.type === 'find') {
      /* the sentences must stay in the order of the text, not shuffled */
      const inOrder = await page.evaluate(() => S.views[S.qi].opts.every((o, n) => o.i === n));
      if (!inOrder) bad('the sentences of a "find the proof" question were shuffled');
      await sel(`#q-body .find-opt[data-orig="${q.answer}"]`).click();
    } else if (q.type === 'mc' || q.type === 'gap') await sel(`#q-body .opt[data-orig="${q.answer}"]`).click();
    else if (q.type === 'multi') { for (const o of q.answer) await sel(`#q-body .opt[data-orig="${o}"]`).click(); }
    else if (q.type === 'tf') await sel(`#q-body .tf-btn[data-val="${q.answer ? '1' : '0'}"]`).click();
    else if (q.type === 'order') { for (const o of q.answer) await sel(`#order-pool .order-item[data-orig="${o}"]`).click(); }
    else if (q.type === 'sort') {
      for (let r = 0; r < q.bins.length; r++) await sel('#q-body .sort-row').nth(r).locator('.sort-bin').nth(q.bins[r]).click();
    } else if (q.type === 'match') {
      for (let p = 0; p < q.pairs; p++) {
        await sel(`#q-body .match-col:first-child .match-item[data-pair="${p}"]`).click();
        await sel(`#q-body .match-col:last-child .match-item[data-pair="${p}"]`).click();
      }
      await page.waitForTimeout(600);
    }
    if (q.type !== 'match') await sel('#btn-check').click();
    await page.waitForSelector('#q-feedback.show');
    if (await page.evaluate(() => S.results[S.qi]) !== true) bad(`groep 8 question ${i + 1} (${q.type}) was marked wrong although the data says it is right`);
    await sel('#btn-next').click();
  }
  await page.waitForSelector('#screen-result.active');
  const g8Result = await page.evaluate(() => ({ stars: S.lastResult.stars, badge: (Store.player.badges || []).indexOf('g8') !== -1 }));
  if (g8Result.stars !== 3) bad(`a flawless groep 8 story gave ${g8Result.stars} stars`);
  else if (!g8Result.badge) bad('a flawless groep 8 story did not earn the "Groep 8-baas" badge');
  else ok(`played a groep 8 story (${g8.id}, ${g8.n} questions, ${g8.finds} "find the proof"): 3 stars and the Groep 8 badge`);
  if (!g8Types.has('find')) bad('the groep 8 story never showed a "find the proof" question');

  /* a wrong "find" answer is marked wrong */
  await sel('#btn-again').click();
  await page.waitForSelector('#screen-read.active');
  await sel('#btn-done-reading').click();
  await page.waitForSelector('#screen-quiz.active');
  const findWrong = await page.evaluate(() => {
    const i = S.story.questions.findIndex((q) => q.type === 'find');
    S.qi = i; renderQuestion();
    const q = S.story.questions[i];
    return q.options.findIndex((o, n) => n !== q.answer);
  });
  await sel(`#q-body .find-opt[data-orig="${findWrong}"]`).click();
  await sel('#btn-check').click();
  await page.waitForSelector('#q-feedback.show');
  if (await page.evaluate(() => S.results[S.qi]) !== false) bad('a wrong sentence in a "find the proof" question was accepted');
  else ok('a wrong sentence in a "find the proof" question is marked wrong');

  /* a groep 8 spelling set with the new word-builder exercise */
  await sel('#btn-home').click();
  await page.waitForSelector('#screen-worlds.active');
  await sel('.mode-tab[data-mode="spell"]').click();
  const g8Head = await sel('#spell-grid .grid-heading').count();
  if (g8Head !== 1) bad('the spelling tab has no "groep 8" heading for the new rules');
  await page.evaluate(() => Spell.openSet(window.SPELL_SETS.find((s) => s.id === 'getal-2')));
  await page.waitForSelector('#screen-spell.active');
  const g8Items = await page.evaluate(() => Spell.state().items.length);
  let builds = 0;
  for (let i = 0; i < g8Items; i++) {
    const it = await page.evaluate(() => {
      const SP = Spell.state(); const item = Spell.current();
      return { type: item.type, answer: item.answer, word: item.word, tiles: item.tiles ? item.tiles.length : 0,
        bins: item.type === 'sort' ? SP.views[SP.i].words.map((w) => w.bin) : null };
    });
    if (it.type === 'build') {
      builds++;
      for (let k = 0; k < it.tiles; k++) await sel(`#sp-body .sp-tile[data-k="t${k}"]`).first().click();
    } else if (it.type === 'type') await sel('#sp-input').fill(it.word);
    else if (it.type === 'fill') await sel(`#sp-body .sp-piece[data-orig="${it.answer}"]`).click();
    else if (it.type === 'pick') await sel(`#sp-body .opt[data-orig="${it.answer}"]`).click();
    else if (it.type === 'error') await sel(`#sp-body .sp-chip[data-orig="${it.answer}"]`).click();
    else if (it.type === 'sort') {
      for (let r = 0; r < it.bins.length; r++) await sel('#sp-body .sort-row').nth(r).locator('.sort-bin').nth(it.bins[r]).click();
    }
    await sel('#btn-sp-check').click();
    await page.waitForSelector('#sp-feedback.show');
    if (await page.evaluate(() => { const SP = Spell.state(); return SP.results[SP.i]; }) !== true) {
      bad(`groep 8 spelling item ${i + 1} (${it.type}) was marked wrong although the data says it is right`);
    }
    await sel('#btn-sp-next').click();
  }
  await page.waitForSelector('#screen-spell-result.active');
  const sp8 = await page.evaluate(() => ({ stars: Spell.state().last.stars, badge: (Store.player.badges || []).indexOf('spell8') !== -1 }));
  if (!builds) bad('the groep 8 spelling set had no word-builder exercise');
  if (sp8.stars !== 3 || !sp8.badge) bad(`a flawless groep 8 spelling set gave ${sp8.stars} stars / badge ${sp8.badge}`);
  else ok(`played a groep 8 spelling set with ${builds} word-builder item(s): 3 stars and the Groep 8 speller badge`);
  await closeDiplomas();

  /* a wrongly built word is marked wrong */
  await page.evaluate(() => {
    const s = window.SPELL_SETS.find((x) => x.id === 'getal-2');
    Spell.openSet(s);
    const SP = Spell.state();
    SP.i = SP.items.findIndex((x) => x.type === 'build');
    Spell.renderItem();
  });
  await sel('#sp-body .sp-tile[data-k="x0"]').click();
  await sel('#btn-sp-check').click();
  await page.waitForSelector('#sp-feedback.show');
  if (await page.evaluate(() => { const SP = Spell.state(); return SP.results[SP.i]; }) !== false) bad('a wrongly built word was accepted');
  else ok('a wrongly built word is marked wrong and the right word is shown');

  /* the arcade: three games and the Woordkist in a third tab */
  await sel('#btn-home').click();
  await page.waitForSelector('#screen-worlds.active');
  await sel('.mode-tab[data-mode="play"]').click();
  const gameCards = await sel('#play-grid .game-card').count();
  const gameTotal = await page.evaluate(() => Arcade.games.length);
  if (gameTotal < 9 || gameCards !== gameTotal + 1) bad(`the arcade tab shows ${gameCards} cards (expected ${gameTotal} games + the Woordkist)`);
  else ok(`the "Spellen" tab shows ${gameTotal} games in ${await sel('#play-grid .grid-heading').count()} groups, plus the Woordkist`);

  const pools = await page.evaluate(() => Arcade.pools());
  if (pools.spell < 100 || pools.words < 100) bad(`the arcade has too few words to play with (${JSON.stringify(pools)})`);

  const ticketsBefore = await page.evaluate(() => Store.player.tickets);
  await sel('#play-grid .game-card[data-game="runner"]').click();
  await page.waitForSelector('#screen-arcade.active');
  if (await page.evaluate(() => Store.player.tickets) !== ticketsBefore - 1) bad('starting a game did not cost one ticket');
  await sel('#arc-start').click();
  /* real physics: an autopilot that jumps when the right word is high
     must get the first two word pairs right without losing a heart */
  await page.evaluate(() => {
    const G = Arcade.state();
    window.__pilot = setInterval(() => {
      const m = G.game; if (!m || G.state !== 'play') return;
      const h = m.hero; const front = h.x + h.w / 2;
      for (const it of m.items) {
        if (it.x + it.w < h.x - h.w) continue;
        if (it.kind === 'snail') { if (it.x - front < 40 && it.x - front > 0) m.action(); break; }
        if (G.duels[it.di].done) continue;
        if (it.rightHigh && it.x - front < 62 && it.x - front > 20) m.action();
        break;
      }
    }, 16);
  });
  await page.waitForFunction(() => Arcade.state().di >= 2, null, { timeout: 25000 });
  const run2 = await page.evaluate(() => { clearInterval(window.__pilot); const G = Arcade.state(); return { correct: G.correct, hearts: G.hearts, frames: G.frames }; });
  if (run2.correct !== 2 || run2.hearts !== 3) bad(`Springheld: jumping to the right word did not score (${JSON.stringify(run2)})`);
  else ok(`Springheld plays with real physics: jumping or staying low picks the right word (${run2.frames} frames)`);

  /* switching language mid-game keeps the game going */
  await sel('#btn-lang').click();
  const goalEn = await sel('#arc-goal').innerText();
  await sel('#btn-lang').click();
  if (!/Right word|Keep running/.test(goalEn)) bad('the arcade did not switch to English');

  /* finish the round through the test hook: 12 right, 1 wrong */
  await page.evaluate(() => { for (let i = 0; i < 13; i++) Arcade.debugResolve(i !== 5); });
  await page.waitForSelector('#screen-arcade-result.active', { timeout: 5000 });
  const arc = await page.evaluate(() => ({
    correct: document.getElementById('arr-correct').textContent,
    missed: document.querySelectorAll('#arr-missed .sp-missed').length,
    best: (Store.player.arcadeBest || {}).runner || 0,
    logged: Store.events.filter((e) => e.t === 'arcade_done').length,
    badge: (Store.player.badges || []).indexOf('arcade') !== -1
  }));
  if (arc.correct !== '14/15' || arc.missed !== 1 || !arc.best || arc.logged !== 1) bad(`the arcade result is wrong (${JSON.stringify(arc)})`);
  else if (!arc.badge) bad('12+ right in one arcade game did not earn the arcade badge');
  else ok(`an arcade round ends with a result: ${arc.correct} right, the missed word listed with its rule, record ${arc.best}`);
  /* 14 of 15 and still hearts left = two stars: level 1 of Springheld gets
     a diploma, and the result offers level 2 instead of the same level */
  const arcLv = await page.evaluate(() => ({ stars: Arcade.state().last_result.stars, next: !document.getElementById('btn-arc-next').classList.contains('hidden'),
    again: !document.getElementById('btn-arc-again').classList.contains('hidden'), sel: Arcade.selectedLevel('runner') }));
  const arcDip = await closeDiplomas();
  if (arcLv.stars !== 2 || !arcLv.next || arcLv.again || arcLv.sel !== 2 || arcDip < 1) bad(`two stars in level 1 did not give a diploma and open level 2 (${JSON.stringify(arcLv)}, diplomas ${arcDip})`);
  else ok('two stars in a game level: a diploma, that level closes and the result offers level 2');

  /* Flappy Uil and Woordregen start and run too */
  for (const g of ['flappy', 'rain']) {
    await sel('#btn-arc-menu').click();
    await page.waitForSelector('#screen-worlds.active');
    await sel(`#play-grid .game-card[data-game="${g}"]`).click();
    await page.waitForSelector('#screen-arcade.active');
    await sel('#arc-start').click();
    if (g === 'flappy') {
      await page.keyboard.press('Space');
      const vy = await page.evaluate(() => Arcade.state().game.owl.vy);
      if (!(vy < 0)) bad('pressing space does not make the owl flap');
    }
    await page.waitForTimeout(800);
    const frames = await page.evaluate(() => Arcade.state().frames);
    if (frames < 15) bad(`${g}: the game loop is not running (${frames} frames)`);
    await page.evaluate(() => { for (let i = 0; i < 15; i++) Arcade.debugResolve(true); });
    await page.waitForSelector('#screen-arcade-result.active', { timeout: 5000 });
    await closeDiplomas();
  }
  ok('Flappy Uil and Woordregen start, animate and finish a round');

  /* no tickets, no game */
  await sel('#btn-arc-menu').click();
  await page.waitForSelector('#screen-worlds.active');
  await page.evaluate(() => { Store.player.tickets = 0; Arcade.renderMenu(); });
  await sel('#play-grid .game-card[data-game="flappy"]').click();
  await page.waitForTimeout(300);
  if (!(await page.evaluate(() => S.screen === 'worlds'))) bad('a game could be started without a ticket');
  else ok('without tickets the games stay closed (and say how to earn one)');

  /* the Woordkist: 8 cards, one wrong (it comes back once), spaced repetition */
  await sel('#play-grid .kist-card-btn').click();
  await page.waitForSelector('#screen-woordkist.active');
  const kistN = await page.evaluate(() => Woordkist.state().queue.length);
  if (kistN !== 8) bad(`the Woordkist session has ${kistN} cards instead of 8`);
  for (let i = 0; i < 20; i++) {
    const st = await page.evaluate(() => { const K = Woordkist.state(); return { done: K.done, i: K.i, n: K.queue.length }; });
    if (st.done) break;
    const pickId = await page.evaluate((first) => {
      const K = Woordkist.state(); const c = Woordkist.card();
      return first ? K.opts.find((o) => o.id !== c.id).id : c.id;
    }, i === 0);
    await sel(`#kist-body .kist-opt[data-id="${pickId}"]`).click();
    await sel('#btn-kist-next').click();
  }
  const kist = await page.evaluate(() => {
    const cards = Store.player.kist.cards; const ids = Object.keys(cards);
    return { done: Woordkist.state().done, total: ids.length, box1: ids.filter((k) => cards[k].box === 1).length,
      box2: ids.filter((k) => cards[k].box === 2).length, dueLater: ids.every((k) => cards[k].due > localDay()) };
  });
  if (!kist.done || kist.total !== 8 || kist.box1 !== 1 || kist.box2 !== 7 || !kist.dueLater) bad(`the Woordkist schedule is wrong (${JSON.stringify(kist)})`);
  else ok('the Woordkist: 8 cards, the missed one came back and went to box 1, the rest moved up and are due later');
  const ticketsAfterKist = await page.evaluate(() => Store.player.tickets);
  if (ticketsAfterKist !== 1) bad(`finishing the Woordkist gave ${ticketsAfterKist} tickets instead of 1`);

  await page.evaluate(() => Woordkist.open('idiom'));
  const idiom = await page.evaluate(() => ({ front: document.querySelector('.kist-word').textContent, opts: document.querySelectorAll('.kist-opt').length }));
  if (!idiom.front || idiom.opts !== 4) bad('the sayings pile of the Woordkist does not show a card with four meanings');
  else ok(`the Woordkist also has a groep 8 sayings pile ("${idiom.front}")`);
  await sel('#btn-lang').click();
  const kistQ = await sel('.kist-q').innerText();
  await sel('#btn-lang').click();
  if (!/mean/.test(kistQ)) bad('the Woordkist did not switch to English');

  await sel('#btn-home').click();
  await page.waitForSelector('#screen-worlds.active');

  /* =================================================================
     7d. The diploma ladder, the serial stories and the new games
     ================================================================= */
  /* reading: two of the three level-1 stories of the first world already
     have two stars or more; reading the last one flawlessly earns the
     reading diploma for that level, and then the level closes */
  const lvl1 = await page.evaluate(() => {
    const topic = window.TOPICS[0].id;
    const list = storiesOf(topic, 1);
    list.slice(0, -1).forEach((st) => {
      if (!Store.player.best[st.id] || Store.player.best[st.id].stars < 2) Store.player.best[st.id] = { stars: 2, correct: 4, total: 5, wpm: 0, at: Date.now() };
    });
    Store.save();
    return { topic, last: list[list.length - 1].id, n: list.length, chests: (Store.player.chests || []).length };
  });
  await sel('.mode-tab[data-mode="read"]').click();
  await sel('#world-grid .world-card').first().click();
  await page.waitForSelector('#screen-levels.active');
  const ladderBefore = await sel('#level-ladder').innerText();
  if (!/🎯/.test(ladderBefore)) bad('the reading ladder does not point at the next diploma');
  await sel(`#level-grid .level-card[data-story="${lvl1.last}"]`).click();
  await page.waitForSelector('#screen-read.active');
  await sel('#btn-done-reading').click();
  await page.waitForSelector('#screen-quiz.active');
  await answerStory('the last level-1 story');
  const readDip = await page.evaluate(() => ({
    again: !document.getElementById('btn-again').classList.contains('hidden'),
    line: document.getElementById('result-ladder').textContent
  }));
  await page.waitForSelector('#diploma-overlay:not(.hidden)', { timeout: 4000 });
  const dipText = await sel('#dip-kind').innerText();
  const dipTitle = await sel('#dip-title').innerText();
  await sel('#dip-go').click();
  await page.waitForSelector('#screen-levels.active');
  const graduated = await page.evaluate(() => ({
    cards: document.querySelectorAll('#level-grid .level-card.graduated').length,
    step: document.querySelector('#level-ladder .ladder-step').classList.contains('grad'),
    chests: Store.player.chests.filter((c) => c.src === 'diploma').length
  }));
  await sel('#level-grid .level-card.graduated').first().click();
  await page.waitForTimeout(300);
  const stayed = await page.evaluate(() => S.screen);
  if (readDip.again || !/Diploma/i.test(readDip.line)) bad(`the result of a mastered level still offers "try again" or does not mention the diploma (${JSON.stringify(readDip)})`);
  else if (!/Leesdiploma|Reading diploma/i.test(dipText) || !dipTitle) bad(`the reading diploma overlay is wrong ("${dipText}" / "${dipTitle}")`);
  else if (graduated.cards !== lvl1.n || !graduated.step || stayed !== 'levels') bad(`a mastered level did not close with a diploma (${JSON.stringify(graduated)}, screen ${stayed})`);
  else if (graduated.chests < 1) bad('a reading diploma did not come with a gift box');
  else ok(`all ${lvl1.n} level-1 stories with ⭐⭐: a reading diploma ("${dipTitle}"), a gift box, and the level closes with 🎓 on the ladder`);

  /* with the parent's lock switched off, a mastered level opens again */
  await page.evaluate(() => { Ladder.setLock(false); renderLevels(); });
  await sel('#level-grid .level-card.graduated').first().click();
  const openedWithLockOff = await page.evaluate(() => S.screen === 'read');
  await page.evaluate(() => { Ladder.setLock(true); });
  if (!openedWithLockOff) bad('with "close finished levels" switched off, a mastered level still does not open');
  else ok('with the lock switched off (parent setting), a mastered level can be read again');

  /* the diploma collection */
  await sel('#btn-home').click();
  await page.waitForSelector('#screen-worlds.active');
  await sel('#btn-diplomas').click();
  await page.waitForSelector('#screen-diplomas.active');
  const dipScreen = await page.evaluate(() => ({ tiles: document.querySelectorAll('#dip-grid .dip-tile').length,
    count: document.getElementById('dip-count').textContent, next: document.querySelectorAll('#dip-grid .dip-next').length,
    have: Ladder.count(), total: Ladder.total() }));
  if (dipScreen.tiles !== dipScreen.have || dipScreen.have < 5 || !dipScreen.next) bad(`the diploma screen is wrong (${JSON.stringify(dipScreen)})`);
  else ok(`the diploma screen shows ${dipScreen.have} of ${dipScreen.total} diplomas and what is closest to the next one`);

  /* serial stories: a shelf of books, chapter 2 opens after chapter 1,
     with a "what happened before" and a "what happens next" */
  await sel('#btn-home').click();
  await page.waitForSelector('#screen-worlds.active');
  await sel('.mode-tab[data-mode="read"]').click();
  const books = await page.evaluate(() => ({ shelf: document.querySelectorAll('#series-shelf .book-card').length, total: window.SERIES.length }));
  if (books.total < 10 || books.shelf !== books.total) bad(`the book shelf shows ${books.shelf} of ${books.total} serial stories`);
  await sel('#series-shelf .book-card').first().click();
  await page.waitForSelector('#screen-book.active');
  const ch = await page.evaluate(() => ({ n: document.querySelectorAll('#book-grid .chapter-card').length,
    lock2: /🔒/.test(document.querySelectorAll('#book-grid .chapter-card')[1].querySelector('.lc-stars').textContent) }));
  if (ch.n !== 3 || !ch.lock2) bad(`a book should show 3 chapters with chapter 2 locked (${JSON.stringify(ch)})`);
  await sel('#book-grid .chapter-card').first().click();
  await page.waitForSelector('#screen-read.active');
  await sel('#btn-done-reading').click();
  await page.waitForSelector('#screen-quiz.active');
  await answerStory('chapter 1');
  const teaser = await sel('#result-teaser').innerText();
  const cont = await sel('#btn-continue').innerText();
  await closeDiplomas(300);
  await sel('#btn-continue').click();
  await page.waitForSelector('#screen-read.active');
  const ch2 = await page.evaluate(() => ({ chapter: S.story.chapter, recap: !document.getElementById('story-recap').classList.contains('hidden'),
    meta: document.getElementById('story-meta').textContent }));
  await sel('.back-btn[data-back="story"]').click();
  await page.waitForSelector('#screen-book.active');
  if (!teaser || !/2/.test(cont)) bad(`chapter 1 does not end with a teaser and a "read chapter 2" button ("${teaser}" / "${cont}")`);
  else if (ch2.chapter !== 2 || !ch2.recap || !/7/.test(ch2.meta)) bad(`chapter 2 did not open with a recap at group 7 level (${JSON.stringify(ch2)})`);
  else ok(`serial stories: ${books.total} books; chapter 1 (group 6) ends with a teaser, chapter 2 (group 7) opens with a recap`);

  /* the six new games, each with real input first, then finished */
  await page.evaluate(() => { Store.player.tickets = 20; Store.save(); });
  const newGames = ['obby', 'bonk', 'race', 'memory', 'wordsearch', 'castle'];
  for (const g of newGames) {
    await page.evaluate(() => { S.mode = 'play'; renderWorlds(); show('worlds'); });
    await sel(`#play-grid .game-card[data-game="${g}"] .wc-sub`).click();
    await page.waitForSelector('#screen-arcade.active');
    await sel('#arc-start').click();
    let real = '';
    if (g === 'obby') {
      /* jump to the platform with the right word, for real */
      await page.evaluate(() => { const m = Arcade.state().game; m.jump(m.floors[1].rightLeft ? 'L' : 'R'); });
      await page.waitForTimeout(700);
      const o = await page.evaluate(() => ({ at: Arcade.state().game.at, correct: Arcade.state().correct }));
      if (o.at !== 1 || o.correct !== 1) bad(`Obby-toren: jumping to the right platform did not climb a floor (${JSON.stringify(o)})`);
      real = 'climbed a floor';
    } else if (g === 'bonk') {
      /* a real bonk: jump under the misspelled block of the first sentence */
      await page.evaluate(() => {
        window.__bonk = setInterval(() => {
          const m = Arcade.state().game; if (!m || !m.sentence) return;
          const s = m.sentence(); if (!s || s.done || m.hero.h > 4) return;
          const b = s.blocks.find((x) => x.err); const c = b.x + b.w / 2 - m.heroX();
          if (c < 12 && c > 0) m.action();
        }, 16);
      });
      await page.waitForFunction(() => Arcade.state().di >= 1, null, { timeout: 30000 });
      const b = await page.evaluate(() => { clearInterval(window.__bonk); return { correct: Arcade.state().correct, hearts: Arcade.state().hearts }; });
      if (b.correct !== 1 || b.hearts !== 3) bad(`Blokbonk: bonking the misspelled block did not score (${JSON.stringify(b)})`);
      real = 'bonked the misspelled block';
    } else if (g === 'race') {
      await page.evaluate(() => {
        window.__race = setInterval(() => {
          const m = Arcade.state().game; if (!m || !m.rows) return;
          const r = m.rows.find((x) => !x.judged); if (r) m.steer(r.lanes.indexOf('right'));
        }, 16);
      });
      await page.waitForFunction(() => Arcade.state().di >= 1, null, { timeout: 20000 });
      const r = await page.evaluate(() => { clearInterval(window.__race); return Arcade.state().correct; });
      if (r !== 1) bad('Woordrace: driving through the right word did not score');
      real = 'drove through the right gate';
    } else if (g === 'memory') {
      /* real taps: a matching pair, then two cards that do not match */
      const k = await page.evaluate(() => document.querySelector('#arc-dom .mem-card').dataset.k);
      await sel(`#arc-dom .mem-card[data-k="${k}"][data-face="word"]`).click();
      await sel(`#arc-dom .mem-card[data-k="${k}"][data-face="def"]`).click();
      const other = await page.evaluate((k) => [...document.querySelectorAll('#arc-dom .mem-card')].filter((c) => c.dataset.k !== k).map((c) => c.dataset.n), k);
      const pairOk = await page.evaluate(() => Arcade.state().correct);
      const firstOther = await page.evaluate((n) => document.querySelector(`#arc-dom .mem-card[data-n="${n}"]`).dataset.k, other[0]);
      const second = await page.evaluate((a) => [...document.querySelectorAll('#arc-dom .mem-card')].find((c) => c.dataset.k !== a.k && c.dataset.k !== a.first && !c.classList.contains('found')).dataset.n, { k, first: firstOther });
      await sel(`#arc-dom .mem-card[data-n="${other[0]}"]`).click();
      await sel(`#arc-dom .mem-card[data-n="${second}"]`).click();
      await page.waitForTimeout(1100);
      const m = await page.evaluate(() => ({ misses: Arcade.state().game.misses, open: document.querySelectorAll('#arc-dom .mem-card.open:not(.found)').length }));
      if (pairOk !== 1 || m.misses !== 1 || m.open !== 0) bad(`Woordmemory: a pair or a miss is not handled (${pairOk}, ${JSON.stringify(m)})`);
      real = 'found a pair, turned a wrong pair back';
    } else if (g === 'wordsearch') {
      /* tap the first and the last letter of a hidden word */
      const cells = await page.evaluate(() => Arcade.state().duels[0].cells);
      const [a, b] = [cells[0], cells[cells.length - 1]];
      await sel(`#arc-dom .ws-cell[data-r="${a[0]}"][data-c="${a[1]}"]`).click();
      await sel(`#arc-dom .ws-cell[data-r="${b[0]}"][data-c="${b[1]}"]`).click();
      const w = await page.evaluate(() => ({ correct: Arcade.state().correct, found: document.querySelectorAll('#arc-dom .ws-cell.found').length }));
      if (w.correct !== 1 || w.found < 3) bad(`Woordzoeker: tapping the first and last letter did not find the word (${JSON.stringify(w)})`);
      real = 'found a word by tapping its first and last letter';
    } else if (g === 'castle') {
      /* answer the questions by tapping, build a tower by tapping a spot, start a wave */
      for (let i = 0; i < 5; i++) {
        const right = await page.evaluate(() => { const m = Arcade.state().game; return Arcade.state().duels[m.qi].right; });
        await page.locator('#arc-panel .td-opt', { hasText: right }).first().click();
        await page.waitForTimeout(800);
      }
      const box = await sel('#arc-canvas').boundingBox();
      const spot = await page.evaluate(() => Arcade.state().game.spots[2]);
      await page.mouse.click(box.x + spot[0], box.y + spot[1]);
      const built = await page.evaluate(() => Arcade.state().game.towers.length);
      await sel('#arc-panel .td-wave').click();
      await page.evaluate(() => Arcade.debugFast(60));
      const c = await page.evaluate(() => { const G = Arcade.state(); return { phase: G.game.phase, wave: G.game.wave, gold: G.game.gold, correct: G.correct }; });
      if (built !== 1 || c.wave !== 1 || c.phase !== 'build' || c.correct !== 5) bad(`Kasteelverdediging: answering, building or the first wave went wrong (built ${built}, ${JSON.stringify(c)})`);
      real = 'answered 5 questions, built a tower, defended wave 1';
      /* the rest of the waves: answer, build, upgrade, defend */
      await page.evaluate(() => {
        const G = Arcade.state(); const m = G.game;
        for (let w = 0; w < 10 && G.state === 'play'; w++) {
          while (m.canAsk() && m.phase === 'build') Arcade.debugResolve(true);
          for (let i = 0; i < 7; i++) m.build(i, i % 3 === 2 ? 'wizard' : 'archer');
          m.towers.forEach((tw) => m.upgrade(tw));
          m.startWave();
          Arcade.debugFast(120);
        }
      });
    }
    if (g !== 'castle') await page.evaluate(() => { for (let i = 0; i < 40; i++) Arcade.debugResolve(true); });
    await page.waitForSelector('#screen-arcade-result.active', { timeout: 8000 });
    const r = await page.evaluate(() => ({ win: Arcade.state().last_result.win, stars: Arcade.state().last_result.stars,
      level: document.getElementById('arr-level').textContent, sub: document.getElementById('arr-sub').textContent }));
    if (!r.win || r.stars < 1) bad(`${g}: a finished round did not end as a win with stars (${JSON.stringify(r)})`);
    else ok(`${g}: real input works (${real}); the round ends with ${'⭐'.repeat(r.stars)} (${r.level})`);
    await closeDiplomas();
    await sel('#btn-arc-menu').click();
    await page.waitForSelector('#screen-worlds.active');
  }
  /* level chips: a level with a diploma cannot be chosen again while locked */
  await sel('#play-grid .game-card[data-game="flappy"] .lv-chip[data-lv="1"]').click();
  const chip = await page.evaluate(() => ({ screen: S.screen, sel: Arcade.selectedLevel('flappy'),
    grad: document.querySelector('#play-grid .game-card[data-game="flappy"] .lv-chip[data-lv="1"]').classList.contains('grad'),
    allgames: (Store.player.badges || []).includes('allgames') }));
  if (chip.screen !== 'worlds' || chip.sel !== 2 || !chip.grad) bad(`a game level with a diploma can still be chosen (${JSON.stringify(chip)})`);
  else ok('a game level with a diploma shows 🎓 and stays closed; the game starts at the next level');
  if (!chip.allgames) bad('playing every game did not earn the "all-round gamer" badge');

  /* =================================================================
     8. Language switch across the whole interface
     ================================================================= */
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
    logRows: document.querySelectorAll('#p-log tr').length,
    arcade: document.getElementById('p-arcade').textContent,
    kist: document.getElementById('p-kist').textContent,
    dailyCols: document.querySelectorAll('#p-daily-log tr:first-child th').length,
    dailyGames: document.querySelector('#p-daily-log tr:nth-child(2) td:nth-child(10)')?.textContent
  }));
  if (Number(stats.arcade) < 3) bad(`the dashboard shows ${stats.arcade} arcade games (expected 3)`);
  if (stats.dailyCols !== 11 || Number(stats.dailyGames) < 3) bad(`the daily log does not count today's arcade games (${stats.dailyCols} columns, ${stats.dailyGames} games)`);
  else ok(`the parent dashboard also shows arcade games (${stats.arcade}) and Woordkist words known (${stats.kist}), per day too`);
  const pDip = await page.evaluate(() => ({ tile: Number(document.getElementById('p-diplomas').textContent), lock: document.getElementById('p-lock-easy').checked }));
  await sel('#p-lock-easy').uncheck();
  const lockOff = await page.evaluate(() => Ladder.lockOn());
  await sel('#p-lock-easy').check();
  const lockOn = await page.evaluate(() => Ladder.lockOn());
  if (pDip.tile < 5 || !pDip.lock) bad(`the dashboard does not show the diplomas or the lock setting (${JSON.stringify(pDip)})`);
  else if (lockOff || !lockOn) bad('the parent setting "close finished easy levels" does not switch');
  else ok(`the parent dashboard shows ${pDip.tile} diplomas and a working "close finished easy levels" switch`);
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

  /* the arcade tab and a running game fit on a phone too */
  await sel('.mode-tab[data-mode="play"]').click();
  await page.evaluate(() => { Store.player.tickets = 1; Arcade.start('rain'); });
  await page.waitForSelector('#screen-arcade.active');
  const phoneArc = await page.evaluate(() => ({
    overflow: document.documentElement.scrollWidth - document.documentElement.clientWidth,
    canvas: document.getElementById('arc-canvas').getBoundingClientRect().width,
    view: document.documentElement.clientWidth
  }));
  if (phoneArc.overflow > 2 || phoneArc.canvas > phoneArc.view) bad(`the arcade does not fit on a phone (${JSON.stringify(phoneArc)})`);
  else ok(`an arcade game fits on a phone (canvas ${Math.round(phoneArc.canvas)}px wide)`);
  for (const g of ['memory', 'wordsearch', 'castle']) {
    await page.evaluate((g) => { Store.player.tickets = 2; Arcade.quit(); Arcade.start(g); }, g);
    await page.waitForSelector('#screen-arcade.active');
    await sel('#arc-start').click();
    const fit = await page.evaluate(() => ({ overflow: document.documentElement.scrollWidth - document.documentElement.clientWidth,
      board: (document.querySelector('#arc-dom:not(.hidden) > *') || document.getElementById('arc-canvas')).getBoundingClientRect().width,
      view: document.documentElement.clientWidth }));
    if (fit.overflow > 2 || fit.board > fit.view) bad(`${g} does not fit on a phone (${JSON.stringify(fit)})`);
  }
  ok('the memory game, the word search and the castle defence fit on a phone too');

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
