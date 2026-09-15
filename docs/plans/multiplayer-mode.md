# Draft plan: two players competing (head-to-head mode)

Status: **draft, not implemented.** Written to scope the work before building
anything, and to capture the trade-offs so a later session (or the next
person reading this) doesn't have to rediscover them.

This builds on the player-profile system shipped alongside this plan (see
`CHANGELOG.md` and `CLAUDE.md`): every child already has their own separate
profile, XP, coins and log. A "duel" is really just *two profiles, one
shared challenge, one scoreboard*.

## Why this needs a phased approach

The whole game is a static site with **no backend and no build step** — see
`README.md` ("Technical") and `DEPLOY.md`. Everything lives in `localStorage`
and nothing is ever sent anywhere; that's an explicit privacy promise, not
an accident. A "two players compete" feature can mean two very different
things depending on whether both kids are on the **same device** or on
**separate devices**, and only one of those fits the current architecture
for free.

## Phase 1 — Same-device "hot-seat" duel (recommended first slice)

Both kids are physically at the same tablet/computer, one after the other.
No networking, no new infrastructure, no change to the "nothing leaves this
device" promise.

**Flow:**
1. A new entry point (e.g. a "🆚 Uitdaging" / "🆚 Challenge" button on the
   worlds screen) opens a duel-setup screen.
2. Pick a story (or spelling set) and pick the two players from the
   existing profile chips (reusing the chip UI added in this session).
3. Player 1 plays the story/quiz exactly as today.
4. A hand-off screen ("Geef het apparaat aan <player 2>") appears.
5. Player 2 plays the same content.
6. A side-by-side result screen shows both scores, accuracy and time, with
   a winner call-out (or a tie) — framed encouragingly for both, not just
   the winner.

**What it needs, concretely:**
- A small dedicated `localStorage` key (e.g. `leeskampioen.duel.v1`) that
  holds the in-progress duel — *outside* any one profile's blob, because
  switching the active profile for player 2 replaces `Store.data` entirely.
  Shape: `{ duelId, challenge: {type, storyId|spellSetId}, players: [{profileId, result}], stage }`.
- A couple of new `Store` methods to start/record/clear a duel.
- Three small new screens/states: duel-setup, hand-off, duel-result. The
  actual reading/quiz or spelling screens are reused unchanged; only the
  "finish" step is intercepted to record into the duel instead of (or in
  addition to) each player's own stats.
- No changes to `data/*.js` story content.
- A duel round should also be logged as a normal event (tagged with a
  `duelId`) in both players' own logs, so it still shows up in the parent
  dashboard and exports — consistent with "every event has a player name"
  from this session's change.

**Open question:** identical content for both players is simplest to build,
but the second player may have overheard the first player's answers out
loud. Options: keep it identical (simplest, and answer order is already
shuffled per-play); or match two different stories with the same topic
and level (fairer, no extra data-authoring cost since every topic already
has a story at every level); decide before building.

**Estimated effort:** small. Reuses ~95% of the existing reading/spelling
engine; the new work is orchestration (setup → play → hand-off → play →
compare), not new game logic.

## Phase 2 — Cross-device competition (bigger lift, needs a decision first)

Two kids on separate devices (different tablets, or not in the same room)
who want to compete without physically swapping one device.

This is the point where the project would, for the first time, need
*something* outside the browser's own `localStorage` — which is a real
architectural and privacy decision, not just an engineering task, so it
shouldn't be started without agreeing on it first.

**Two shapes this could take:**

- **Asynchronous / no live connection.** Each device keeps logging locally
  as it already does; add an "export a challenge" / "import a result" flow
  built on the existing JSON export as the transport (a parent shares the
  file however they already share files with the other parent/device).
  No new infrastructure, no new privacy trade-off, but not a live
  experience — more like sending each other a score by message.

- **Live/synced (room codes, real-time scoreboard).** Requires a channel
  between the two devices. Ranked by cost/complexity if this is ever
  wanted:
  1. **Firebase Realtime Database / Firestore (free tier).** Fastest to
     build; needs a Google account and some security rules; no server code
     to run or maintain ourselves.
  2. **Serverless WebSocket relay** (e.g. Cloudflare Durable Objects,
     PartyKit). A bit more setup than Firebase, avoids a single-vendor
     dependency, still effectively free at this scale.
  3. **WebRTC data channel with a minimal signaling server.** Game data
     itself is peer-to-peer (no ongoing hosting cost for it), but a
     signaling server is still needed to establish the connection, and
     NAT traversal can fail on restrictive networks (school wifi, mobile
     carriers) without a TURN server — which does cost money to run
     reliably.
  - If Phase 2 is greenlit, start with option 1 for time-to-value, gate it
    behind a short "family code" (not public matchmaking), and disclose
    clearly that this one feature sends data off the device — everything
    else stays local as it does today.

**Estimated effort:** medium–large, and mostly not game logic — new
infrastructure, room-code UI, connection/reconnect handling, and a new,
explicit privacy note since it changes the app's core promise.

## Phase 3 — Same-instant real-time races (not scoped)

Both kids answer the *identical* question at the *identical* moment,
fastest correct answer wins. Meaningfully harder than Phase 2 (latency and
state-sync requirements), and only worth scoping in detail if Phase 2 ships
and actually gets used.

## Questions to settle with the user before writing code

1. Same-device hot-seat (Phase 1) only, or is cross-device (Phase 2) really
   wanted? Phase 2 is the one that changes the app's "nothing ever leaves
   this device" promise.
2. Identical story for both players, or two different same-level stories?
3. Should duel results feed into each child's normal XP/coins/badges, or be
   a separate, lower-stakes "for fun" mode — so competitive pressure
   doesn't discourage whichever kid reads more slowly?

## Suggested build order (once the questions above are answered)

1. Duel-state `Store` helper (start/record/clear).
2. Duel-setup screen (challenge picker + two profile chips).
3. Hand-off screen.
4. Duel-result screen (scoreboard).
5. Hook the existing story/spelling "finish" step to feed the duel when one
   is active.
6. Extend `tools/smoke.mjs` with a full duel pass, the same way this
   session added the second-profile pass.
