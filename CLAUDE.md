# Project memory for Claude Code sessions

This file is for continuity between sessions on this repo. Keep it updated
(append to "Session log", don't rewrite history) rather than treating it as
disposable scratch notes.

## What this project is

Leeskampioen: a static (no backend, no build step) Dutch reading + spelling
game for groups 6–7, deployed to GitHub Pages. Full feature description is
in `README.md`; deployment mechanics are in `DEPLOY.md`. Don't duplicate
that content here — this file is for things a session needs to know
*before* reading the code, and a log of what changed and why.

## Always do this before committing

```bash
node tools/validate.js     # checks data/*.js and js/i18n.js, no dependencies, seconds
node tools/smoke.mjs       # plays the whole game in a real browser via Playwright
```

`smoke.mjs` needs the `playwright` npm package (`npm install --no-save
playwright` — don't commit a `package.json`/lockfile for this, the project
intentionally has none). Browsers are pre-installed in this environment at
`/opt/pw-browsers`; if `chromium.launch()` can't find a matching build, run
it with `PLAYWRIGHT_CHROMIUM=/opt/pw-browsers/chromium-<version>/chrome-linux/chrome
node tools/smoke.mjs` rather than letting Playwright try to download a new one.
Both must be clean before pushing — this is the project's entire CI.

## Architecture facts worth knowing up front

- Everything lives in the browser's `localStorage`. Nothing is ever sent to
  a server — that's an explicit, advertised privacy promise, not an
  oversight. Any future feature that would send data off the device (see
  `docs/plans/multiplayer-mode.md` Phase 2) needs a deliberate decision, not
  a silent addition.
- `js/log.js` defines `Store` (persistence + profiles), `Stats` (turns raw
  events into parent-facing numbers) and `Exporter` (CSV/JSON/HTML
  downloads). `js/app.js` is the reading-game screen logic; `js/spelling.js`
  is the spelling-game equivalent; both call into `Store`/`Stats`.
- **Multiple player profiles** (added in the session logged below): `Store`
  keeps a small registry (`leeskampioen.profiles.v1`) of `{id, name,
  avatar, lastPlayed}` and one full data blob per profile
  (`leeskampioen.v1:<id>`), and exposes `Store.profiles`,
  `Store.activeProfileId`, `Store.createProfile(name, avatar)`,
  `Store.switchTo(id)`. `Store.player` / `Store.events` / `Store.data`
  always refer to whichever profile is currently active — there is only
  ever one "active" profile at a time, shared between actually playing the
  game and viewing the parent dashboard (switching profile in the parent
  view really does switch who's "logged in", by design — kept simple on
  purpose since this is a single shared family device).
  - Old, pre-profile single-blob saves (`leeskampioen.v1`) are migrated
    into a profile automatically on first load after the update. Don't
    "clean up" that legacy key reading path without checking whether real
    users still have unmigrated data.
  - Every event now carries `player: <name>` and export filenames include
    a slugified player name — this was the direct fix for the original
    complaint ("can't tell which kid's log I'm looking at").
- **Rewards live in `js/rewards.js`** (`Rewards.track(ev, amount, extra)`,
  `markPlayedToday()`, `grantChest(src)`, `renderToday()`, …). State is on
  `Store.player`: `quests` (today's 3 quests, reseeded per local day +
  profile id), `dayStreak {last,count,best}`, `questDays`, `chests` (queue of
  unopened boxes), `owned.gift` (album), `missionDay` (the 30-min mission's
  once-per-day guard). Chest coins deliberately bypass `DAILY_COIN_CAP`.
  Gifts are `kind: 'gift', chestOnly: true` items in `data/shop.js` with no
  cost; the shop hides them and shows them in the "Album" tab instead.
- Shared helpers in `js/i18n.js`: `localDay(ts)` (use this, never
  `toISOString().slice(0,10)`, which is UTC), `escHtml()` for anything a
  child typed, and `FEEDBACK_EMAIL`.
- `tools/validate.js` greps `js/app.js`, `js/spelling.js`, `js/log.js`, `js/rewards.js` and
  `index.html` for `t('key')` / `data-i18n="key"` usage to warn about
  unused or missing i18n strings — keep new UI strings wired through
  `t()`/`data-i18n` so this stays useful, not because it fails the build
  (unused-key is only a warning).

## Session log

### 2026-09-15 — player profiles, parent-dashboard profile switcher, multiplayer plan
Prompted by: a parent playing on one shared device with two kids couldn't
tell whose answers were whose in the parent dashboard or in downloaded
reports.

- Added the multi-profile system described above (`js/log.js`, `js/app.js`,
  `index.html`, `css/style.css`, `js/i18n.js`). See `CHANGELOG.md` for the
  user-facing summary.
- Extended `tools/smoke.mjs` to cover the new flow (returning-player chip,
  second-profile creation with no data leakage, parent-dashboard profile
  switch, filename identifies the player). Also hardened its Google-Fonts
  console-error filter to recognize `ERR_CERT_`/`ERR_SSL_` (this sandbox's
  proxy reports blocked external font requests that way instead of the
  `ERR_CONNECTION`/`ERR_NAME_NOT_RESOLVED` the test previously expected) —
  that's an environment quirk, not a defect in the app; real GitHub Pages
  visitors don't go through this proxy.
- Wrote `docs/plans/multiplayer-mode.md`: a draft, phased plan for a future
  "two players compete" mode (asked for, not built yet). Phase 1
  (same-device hot-seat duel) fits the current no-backend architecture;
  Phase 2 (cross-device/live) would be the first feature to send data off
  the device and needs an explicit go-ahead first. Open questions are
  listed at the end of that doc — check with the user before starting
  Phase 1 implementation.
- Both `node tools/validate.js` and `node tools/smoke.mjs` were run clean
  before committing.

**Next likely steps:** if the user wants Phase 1 of the multiplayer plan
built, start there — it's scoped concretely at the bottom of
`docs/plans/multiplayer-mode.md`.

### 2026-09-16 — doubled the story library, one new story per level per world
Prompted by: "add more reading content to each topic."

- Added a second story at every difficulty level of all ten worlds:
  `data/stories.*.js` went from 5 stories each (50 total) to 10 each (100
  total, 680 questions). The level screen already rendered a card per story
  when a level had more than one (`elk niveau kan meerdere verhalen hebben`
  in `js/app.js`'s `renderLevels()`) — this is the first time that code
  path is actually exercised by real content instead of just being ready
  for it.
  - New ids follow the existing `<topic>-<n>` convention, continuing at
    `-6` through `-10` (so `-1..5` are always the original five, `-6..10`
    are always this session's five) — level and id number no longer line
    up 1:1 the way they did when every world had exactly one story per
    level; check each story's own `level` field, don't infer it from the
    id.
  - New subjects were chosen to be clearly distinct from each world's
    existing five (e.g. dieren's new mosquito-adjacent "should zoos
    disappear?" question is a different debate from the existing "should
    we wipe out the mosquito?" one) — see the world table in `README.md`
    for the full list per world.
  - Wrote all ten worlds' new content in parallel via ten background
    subagents (one per `data/stories.*.js` file, so no two agents ever
    touched the same file), each given: the exact story/question JSON
    schema, the validation rules `tools/validate.js` enforces, a
    level-by-level template (question count, skill mix, word-count band)
    reverse-engineered from the existing 50 stories, and five pre-assigned
    subjects with a one-line brief each. Each agent ran `node
    tools/validate.js` itself before reporting back; I re-validated after
    every file landed and committed per-topic once its owning agent's
    report confirmed a pure append (no edits to the original five stories
    in that file). This is a reasonable pattern to repeat for future
    "add more content" requests — the parallelism is the only way ~50
    bilingual stories with schema-correct questions get written in one
    session, but it needs a tight shared spec up front (agents that
    improvise the question-type/skill mix drift from the existing style)
    and a careful integration pass (see below) rather than trusting each
    agent's self-report blindly.
- Fixed a latent bug in `tools/smoke.mjs` this surfaced: its "level 5
  starts locked" check used a hardcoded `nth(4)` (assuming the 5th
  level-card is always the first level-5 card), which only happened to be
  true while every world had exactly one story per level. It now computes
  the actual index — however many level 1-4 stories the first world has —
  instead. Committed and pushed separately before the story content
  landed, since it's a complete, independent fix.
- Verified integration issues that don't show up in any single agent's own
  `validate.js` run: zero duplicate story ids and zero duplicate titles
  across all ten files combined, every world ended up with exactly 2
  stories per level (not, say, 3 at level 1 and 1 at level 3 from a
  miscounted `level:` field), and `git diff` across the whole range of
  story commits shows zero removed/modified lines in the original five
  stories of any file — every change was a pure append.
- Updated `README.md`'s world table (one short subject list appended per
  world) and the "50 stories · 334 questions" stat line, and changed the
  `id: 'dieren-6'` placeholder in the "Adding your own stories" example to
  `dieren-11` since `dieren-6` is now a real story.
- Both `node tools/validate.js` (100 stories, 680 questions, clean) and
  `node tools/smoke.mjs` (full run, including the fixed locked-level
  check) were run clean before the final push. `smoke.mjs` needed
  `PLAYWRIGHT_CHROMIUM=/opt/pw-browsers/chromium-1194/chrome-linux/chrome`
  this session (the installed `playwright` npm package wanted a chromium
  build newer than the one pre-installed in this sandbox).

**Next likely steps:** the ten worlds are now evenly doubled (2 stories per
level each); if more content is wanted, either add a third story per level
across the board (same process as above) or go deeper on specific worlds
the user calls out. If the multiplayer plan (`docs/plans/multiplayer-mode.md`)
comes up again, that's still unstarted and unrelated to this session's work.

### 2026-09-24 — bug sweep, rewards system, more content, feedback email, CI
Prompted by: "debug and fix small errors, polish, improve visuals, add
content, more gifts/characters/rewards to make kids read more, add a
feedback email (nxtrung87@gmail.com), test everything for GitHub deploy."

- Bugs found by reading the code (none were covered by the old smoke test):
  shop equip crashed on an undefined `selectAvatar`; the 30-min mission
  re-paid coins on every reload (flag lived only in memory); mission clock
  ran on home/parent screens; Enter on spelling double-advanced; bonus-round
  quit left live timers; result subtitle invisible (white on white); UTC day
  keys; unescaped child input in innerHTML. Full list in `CHANGELOG.md`.
- New `js/rewards.js` + `data/facts.js`; reward hooks in `app.js`
  (`finishStory`, `checkAnswer`, word-help, `doneReading`, `endFlash`,
  `addXP`) and `spelling.js` (`check`, `finish`). `FX.toast` is now a queue
  (several reward messages arrive at once after a story) and `FX.countUp`
  / `FX.levelUp(text, sub)` were added.
- Content: 10 new level-1 stories `<topic>-11` (so level 1 now has 3
  stories per world, other levels 2), 50 fun facts, 24 shop items, 26
  gifts, 5 badges. Adding badges makes the legendary shop item (needs *all*
  badges) harder — `days7` means it now takes a real week of play.
  Wrote the stories myself this time (no subagents — not requested); same
  template as the existing level-1 stories, and a scratch Playwright run
  answered all 10 from the data to confirm they grade correctly.
- `tools/validate.js`: accepts `kind: 'gift'` (must be chestOnly, no cost),
  validates `FUN_FACTS`, warns on duplicate collectable emoji.
  `tools/smoke.mjs` gained section 7b: quests shown and moving, a gift box
  opens and is used up, album count, buy + wear an icon (catches the equip
  crash), mission pays once across a reload. Animated click targets need
  the animation on an inner element or Playwright never sees them "stable"
  (that is why `#chest-gift` wraps `.gift-inner`).
- Added `.github/workflows/check.yml` (validate + smoke on every push/PR,
  installs Playwright in CI only) and a validate step in `pages.yml` before
  upload. Pages still deploys only from `Main/dutch-reading-game-kids-g67`
  / `main`.
- `node tools/validate.js` and `node tools/smoke.mjs` both clean before
  committing (smoke again needed
  `PLAYWRIGHT_CHROMIUM=/opt/pw-browsers/chromium-1194/chrome-linux/chrome`).

**Next likely steps:** watch the first `Check` workflow run on GitHub (it
installs its own Chromium, so the sandbox's path override does not apply).
Possible follow-ups: more level 2–5 stories so every level has 3; a
"reading buddy" pet that grows with the day streak; the multiplayer plan is
still unstarted.

