# Changelog

All notable changes to Leeskampioen are recorded here. Format loosely follows
[Keep a Changelog](https://keepachangelog.com/).

## Unreleased

### Added — six new games, game levels, diplomas and serial stories (2026-09-26)
Prompted by: "add more kinds of interactive games (Roblox, Mario, arcade,
puzzle, strategy…), with micro-learning; make playing feel more
encouraging; close the easy levels a child has finished so they move up
without feeling pushed; add stories with chapters that go from groep 6 to
groep 7 to groep 8."

**Six new games** (the arcade now has nine, under four headings)
- **🧗 Obby-toren** (adventure, Roblox-style obby) — jump left or right to
  the platform with the right word; the wrong one is a trap block. The lava
  keeps rising, and there is a checkpoint 🚩 every five floors.
- **🍄 Blokbonk** (adventure, Mario-style) — a sentence on ?-blocks with
  one misspelled word: jump and bonk exactly that block for a coin, stomp
  the beetles for bonus points.
- **🏎️ Woordrace** (arcade) — a kart race: drive through the right word
  for a turbo, dodge the oil, overtake the other karts; your place at the
  finish depends on how many words were right.
- **🧠 Woordmemory** (puzzle) — match every word, or groep 8 saying, to its
  meaning; fewer misses = more stars.
- **🔎 Woordzoeker** (puzzle) — a word search whose clues are meanings or
  wrong spellings, so the child has to work out the word first. Swipe or
  tap first and last letter; a 💡 hint shows the first letter.
- **🏰 Kasteelverdediging** (strategy, tower defence) — answer questions
  to earn gold, build and upgrade 🏹 and 🔮 towers, then start the wave.
  Stars need both a won game and accurate answers, so guessing does not pay.

**Three levels in every game**
- ⭐ groep 6, ⭐⭐ groep 7, 👑 groep 8: a higher level takes its words from
  harder spelling exercises and stories, is a little faster and gives more
  points. ⭐ opens the next level, ⭐⭐ earns that level's diploma.
- Level chips on every game card, "🔓 level 2 is open!" on the result
  screen and a button straight to the next level.
- All nine games share one engine (`Arcade.register()` and a small kit of
  drawing, duel and scoring helpers), so a tenth game is one new file in
  `js/games/`.

**🎓 Diplomas: finished easy levels close (and it feels like winning)**
- Reading all stories of a level in a world with ⭐⭐, a spelling exercise
  with ⭐⭐, a game level with ⭐⭐ or chapters 1–2 of a serial story with
  ⭐⭐ earns a **diploma** — a full-screen certificate with the child's
  name, +20 XP, and a gift box for reading and book diplomas — and that
  level **closes**. Its card turns gold with 🎓, and tapping it says "you
  already have this diploma, a higher level gives more XP".
- The highest level of every world, spelling rule and game never closes.
- The diploma screen has one button that goes straight to the next level.
- The world screen always shows the next diploma to earn and how many
  stories with ⭐⭐ it still needs; a new 🎓 button on the "Hoi {naam}!"
  card lists every diploma earned, with suggestions for what to do next.
- **Harder levels give more XP**: a ⚡ bonus on each reading level (+4 XP
  per level) and spelling exercise (+3), shown on the card.
- Children who already mastered levels before this update get those
  diplomas the first time they open the game ("🎓 5 diplomas for what you
  could already do!").
- **Parent switch** in the parent area: *Afgeronde makkelijke niveaus op
  slot* (on by default, per child). Off = nothing closes; diplomas still
  come.
- Four new badges (30 total): Eerste diploma, Diplomajager (10 diplomas),
  Boek uit! (a whole serial story) and Allround gamer (every game played).

**📚 Serial stories: one story, three chapters, groep 6 → 7 → 8**
- Ten books on a new bookshelf below the worlds, one per world:
  *Het licht in de vuurtoren*, *Sporen in de sneeuw*, *Een jaar op de
  Maan*, *De keeper die niet durfde*, *De sleutel van de tijd*, *Robot
  Rik*, *Het geheime recept van oma*, *De stem achter het gordijn*,
  *Brieven uit Tanzania* and *Zes weken gips*.
- Chapter 1 is groep 6 (Doorzetter level, 6 questions), chapter 2 groep 7
  (Expert, 8 questions), chapter 3 groep 8 (Eindbaas, 10 questions with
  "find the proof"). Every chapter ends on a cliffhanger and the next one
  starts with a recap; a chapter opens after ⭐ on the one before.
- 30 chapters, 240 questions: reading now has 150 stories and 1070
  questions (was 120 / 830).

**For parents**
- The dashboard shows the diplomas earned and has the closing switch; the
  HTML report has a "🎓 Diploma's" section; the CSV's arcade rows say
  which game level was played.

**Checks**
- `tools/validate.js` checks the serial stories (chapter order and ids,
  every chapter harder than the last, recap and teaser in both languages,
  the usual 2/4/6 levels), scans every script in `js/` (including
  `js/games/`) for i18n keys, and no longer counts serial chapters as
  world levels.
- `tools/smoke.mjs` plays all six new games with real input and to the
  result screen, checks game levels, reads a whole serial story, earns and
  checks reading, spelling and game diplomas and the closed levels, turns
  the parent switch off and on again, and checks the new games fit on a
  phone.
- `tools/autopilot.mjs [width] [games] [levels]` now also plays Obby-toren,
  Blokbonk and Woordrace, at any level. All six action games end 15/15 at
  every level on a 390px phone and on a 1000px desktop.

### Changed (2026-09-26)
- The arcade menu is grouped into Arcade, Adventure & platform, Puzzles and
  Strategy, plus the free "learn every day" Woordkist.
- The legendary shop card's "every story" now includes the 30 serial
  chapters, so it still means "finished the whole game".

### Fixed (2026-09-26)
- The **Woordenkenner** badge (25 Woordkist cards in box 3+) could never
  be earned: the check looked for `window.Woordkist`, but `Woordkist` is a
  top-level `const` and is never on `window`.

### Added — groep 8, the arcade and micro-learning (2026-09-25)
Prompted by: "my son finished all the spelling games — add more levels,
groep 8, more kinds of game play (like Flappy Bird or Mario), micro-learning,
and make playing feel more encouraging."

**Groep 8 — spelling**
- **A fourth, groep 8 exercise for every one of the 15 existing spelling
  rules** (e.g. *gebeurt/gebeurd*, *zonnebloem/ruggengraat*, *geïnteresseerd*,
  *-tie of -sie*, *vriendschap*, *succes/circus*). It opens as soon as the
  third exercise of that rule is done, so a child who finished everything
  can carry on straight away.
- **Five new groep 8 spelling rules**, three exercises each, under a new
  "🎓 Nieuw in groep 8" heading: *De verhuisde kast* (past participle as an
  adjective: gefietste, verbrande vs verbrandde, vergrote vs vergrootte),
  *Engelse werkwoorden* (downloadt, printt, updatete, geüpdatet, gerecycled),
  *Leenwoorden* (cadeau, chauffeur, trottoir, portemonnee), *Getallen in
  letters* (veertig, achttien, tweeëntwintig, achtste) and *Het koppelteken*
  (zee-egel, auto-ongeluk, Noord-Holland, tv-programma).
- **New exercise type: the word builder** — tap the pieces (with a couple of
  decoy pieces) in the right order to build the word. 26 of them.
- Spelling now has 20 rules, 75 exercises and 503 items (was 15 / 45 / 292).

**Groep 8 — reading**
- **A sixth level, 👑 Eindbaas (groep 8, reference level 2F)**: one new story
  per world (10 stories, ~390 words, 10 questions each) in the style of the
  groep 8 *doorstroomtoets*: why insects are disappearing, the search for a
  second Earth, is gaming a sport?, the 1953 flood, storing green power,
  becoming a fake-news detective, lab-grown meat, goosebumps from music,
  children's rights, and what stress does to your body.
- **New question type: "find the proof"** — tap the sentence from the text
  that proves the answer. The validator checks every such sentence really
  appears word for word in the story, in both languages.
- Reading now has 120 stories and 830 questions (was 110 / 730).

**New ways to play**
- **🎮 A third tab, "Spellen" (the arcade)**, with three canvas games that
  are really spelling and vocabulary practice in disguise — each round is
  15 "duels" of a right and a wrong word, taken from the existing exercises
  (words the child spelled wrong before come up more often) or from the
  story vocabulary:
  - **🦉 Flappy Uil** — tap to flap; fly through the gate with the right word.
  - **🏃 Springheld** — a platform runner: jump to the high block if the
    right word is up there, stay low if it is on the ground, jump the snails.
  - **☔ Woordregen** — slide a bucket and catch only the right words.
  Three hearts, combo points, a record per game, and a result screen that
  lists every missed word with its spelling rule.
- **🎟️ Game tickets** keep reading the main thing: a game costs 1 ticket;
  finishing a story earns 2, a spelling exercise or a Woordkist round 1
  (new players start with 3, at most 20 can be saved). The arcade time does
  not count towards the 30-minute reading mission.
- **🗃️ The Woordkist (micro-learning)** — 8 flash cards a day with spaced
  repetition (a five-box Leitner system: a right answer moves a card up and
  it returns after 1, 2, 4, 7 or 14 days; a wrong one goes back to box 1 and
  comes round again in the same session). Two piles: *words from your
  stories* (shown with the sentence from the story they came from) and
  **42 groep 8 sayings and idioms** (*de kat uit de boom kijken*, *door de
  mand vallen*…). Free to play, and it earns a ticket.

**More encouragement**
- **🐉 The reading dragon** on the world screen hatches from an egg and grows
  through six stages (Babydraakje → Koningsdraak) from everything the child
  finishes — reading feeds it most, games only a little. It is sleepy on
  days nobody has read yet, talks when you tap it, and every new stage
  brings a gift box.
- **Combo pop-ups** ("3× OP EEN RIJ!", "5× SUPERREEKS!") in reading,
  spelling, the arcade and the Woordkist.
- "Better than last time: 4 → 6 correct!" when a story or exercise is
  replayed with a better score, and a "Welcome back, {name}! 🔥" greeting
  with the day streak.
- Two new daily quests (play an arcade game, review the Woordkist) and
  **five new badges** (26 total): Groep 8-baas, Groep 8-speller,
  Speelhalheld, Woordenkenner and Drakentemmer.
- Result screens show the tickets earned.

**For parents**
- The dashboard shows games played and Woordkist words known; the daily
  activity log gained 🎮 (games) and 🗃️ (cards reviewed) columns.
- The CSV has a fourth table with every arcade and Woordkist round, and the
  HTML report a short "Speelhal en Woordkist" section.

**Checks**
- `tools/validate.js` knows the `build` and `find` types, checks idioms for
  duplicate meanings and reports the groep 8 totals.
- `tools/smoke.mjs` now also plays a groep 8 story (including wrong "find"
  answers), a groep 8 spelling set with word builders, the runner game with
  real physics, all three arcade games, the ticket rules, a Woordkist round
  (including the spaced-repetition schedule), the sayings pile, the parent
  counters and the arcade at phone width.
- New optional `tools/autopilot.mjs` plays a full round of each arcade game
  with real physics (not part of CI; ~3 minutes).

### Changed (2026-09-25)
- Flappy Uil was tuned to be forgiving for 9–11-year-olds (wide gates, a
  soft flap) after an autopilot showed the first version crashed every time.
- The legendary shop card now also needs the groep 8 stories, spelling
  sets and badges — it still means "finished the whole game".

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
