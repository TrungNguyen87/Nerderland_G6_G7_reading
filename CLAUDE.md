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
- `tools/validate.js` greps `js/app.js`, `js/spelling.js`, `js/log.js` and
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
