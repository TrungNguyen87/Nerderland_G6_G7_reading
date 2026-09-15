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

### Planned (see `docs/plans/multiplayer-mode.md`)
- A draft, phased plan for a future "two players compete" mode, starting
  with a same-device hot-seat duel and outlining what a cross-device
  version would additionally require.

### Notes for upgraders
- No manual migration step is needed; it happens automatically on first
  load.
- `Store.wipe()` semantics changed: it now scopes to the active profile
  only (see above).
