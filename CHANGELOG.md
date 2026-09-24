# Changelog

All notable changes to Leeskampioen are recorded here. Format loosely follows
[Keep a Changelog](https://keepachangelog.com/).

## Unreleased

### Added — rewards update (2026-09-24)
- **Daily quests.** Three small goals a day on a new "Hoi {naam}!" card at
  the top of the world screen (e.g. read 2 stories, answer 8 questions
  correctly, tap 3 tricky words, do a spelling exercise). Progress also shows
  on both result screens. All three done = a gift box. The same three all
  day, different every day, different per child.
- **Day streak** 🔥 — days in a row with a finished story or spelling set,
  with a gift box at 3, 7, 14 and 30 days.
- **Gift boxes** 🎁 — an animated box to tap open, from a wiggling gift
  button in the top bar or on the world screen. Contains a collectable gift,
  a joker card or bonus coins. Earned for all daily quests, the first
  three-star score on each story, the day streak and every fifth level.
- **Collector's album** — a new "🎁 Album" shop tab with 26 chest-only gifts
  in four rarities; missing ones show as ❓.
- **"Did you know?"** — 50 short fun facts (five per world) from Oscar the owl
  on the world screen and after every story, matched to that story's world.
- **Level-up shows what unlocked** in the shop ("New in the shop: 🦋 🦜").
- **24 new shop items**: 6 stickers, 6 animal icons, 5 characters, 4 epic
  heroes and 3 colour themes.
- **5 new badges** (21 total): Bookworm (25 stories), Three days, Week
  champion, Quest hero, Collector.
- **10 new stories**, one per world at the Startklaar entry level (110
  stories, 730 questions): the frog that freezes, why the Moon changes shape,
  Sara's swimming certificate, how to defend a castle, the compass, who ate
  the neighbours' pie?, strawberries in winter, music from a bottle, the ice
  hotel, why you get new teeth.
- **Feedback email** (nxtrung87@gmail.com) on the home screen, in the parent
  area and at the bottom of the HTML report, as a plain `mailto:` link —
  nothing is sent automatically.
- Parent dashboard: longest day streak and gifts collected.
- XP and coins count up on the result screens; toasts queue instead of
  overwriting each other; the sound on/off choice is remembered.
- CI: `.github/workflows/check.yml` runs `validate.js` and the full browser
  smoke test on every push and PR; the Pages deploy now validates first.

### Fixed (2026-09-24)
- **Equipping a bought icon or character crashed** (`selectAvatar` was never
  defined), so shop avatars could be bought but never worn.
- **The 30-minute mission paid 15 coins again on every page reload** once
  the half hour was reached; it is now once per day per child.
- Mission time was also counted on the start screen and in the parent area.
- Pressing Enter after checking a spelling word could skip the next word
  (the browser also "clicked" the focused Next button).
- Quitting the flash-word bonus round mid-round could bounce you back to the
  world screen a second later with a stray score toast.
- The result screen's subtitle was white text on a white card (invisible).
- Days were keyed in UTC, so in the Netherlands "today" started at 01:00 or
  02:00; the daily log, streak and CSV dates now use the device's local date.
- Child-typed spelling answers and names are HTML-escaped in the dashboard
  and the downloaded report.
- The answer streak no longer carries over when switching to another child.
- English UI said "punten" after the bonus round; parent advice no longer
  assumes the child is a boy.
- The five shop tabs no longer overflow on phones; confetti now shows above
  the level-up and gift overlays.

### Added — earlier
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
