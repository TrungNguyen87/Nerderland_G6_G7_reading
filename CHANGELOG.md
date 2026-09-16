# Changelog

All notable changes to Leeskampioen are recorded here. Format loosely follows
[Keep a Changelog](https://keepachangelog.com/).

## Unreleased

### Added
- **Multiple player profiles on one device.** Each child now gets their own
  named profile (avatar, XP, coins, badges and log), stored separately, so
  two kids sharing a tablet no longer see each other's results mixed
  together.
  - A "Wie speelt er?" (who's playing?) chip picker on the home screen for
    returning players, with a "➕ Nieuwe speler" (new player) option to add
    a sibling. First-time use on a device is unchanged: the name/avatar form
    still appears directly.
  - Existing single-profile data on a device is migrated automatically the
    first time it loads after this update — nobody loses their progress.
  - Every logged event now carries the player's name, and every exported
    CSV/JSON/HTML report file name includes it too (e.g.
    `leeskampioen_daan_2026-09-15_1420.csv`), so a downloaded file is
    self-identifying even after it's been renamed or forwarded.
  - The CSV export gains a `speler` (player) column on all three of its
    tables (answers, reading, spelling).
  - The parent dashboard gained a profile switcher so a parent can view (and
    download a report for) either child's log without the child having to
    log back in themselves.
  - "🗑 Wis alles" (erase all) now only erases the currently-viewed player's
    progress and log — the other players on the same device are untouched.
    Previously it wiped the entire device's data.
- `tools/smoke.mjs` now exercises the whole profile flow end to end: a
  returning player's chip, creating a second profile with no leakage from
  the first, the parent dashboard's profile switcher, and that a download's
  file name identifies the player.
- **A second story at every level of every world**, doubling the reading
  game from 50 to 100 stories (334 to 680 questions). Every one of the ten
  worlds now has two stories per difficulty level, each on a distinct
  subject from its existing five (see the world table in `README.md` for
  the full list) — a second playthrough of a world is never the same five
  stories again. The level screen already supported more than one story
  per level (it gives each its own card, numbered "Kampioen 2" etc.); this
  is the first time every world actually uses that.
  - `tools/smoke.mjs`'s "level 5 starts locked" check was hardcoded to the
    5th level-card being level 5, which only happened to be true while
    every world had exactly one story per level. Fixed it to compute the
    right card index instead, so it stays correct now that worlds can have
    any number of stories per level.

### Planned (see `docs/plans/multiplayer-mode.md`)
- A draft, phased plan for a future "two players compete" mode, starting
  with a same-device hot-seat duel and outlining what a cross-device
  version would additionally require.

### Notes for upgraders
- No manual migration step is needed; it happens automatically on first
  load.
- `Store.wipe()` semantics changed: it now scopes to the active profile
  only (see above).
