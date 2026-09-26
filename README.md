# 📚 Leeskampioen

An interactive **reading and spelling** game for **Dutch primary school groups 6,
7 and 8** (ages 9–12). The stories and the spelling exercises are in Dutch, with
one button that translates the interface into English, plus a parent area where
you can download a report at the end of the day.

> **Try it now:** download the folder and double-click `index.html`.
> **Put it online:** see **[DEPLOY.md](DEPLOY.md)** for step-by-step instructions.

---

## What is in it

**Three tabs, sharing the same XP, coins, badges and report:**

| | |
|---|---|
| 📖 **Lezen** | 150 stories · 1070 questions · 10 worlds · 6 difficulty levels, up to groep 8 · 10 serial stories whose three chapters climb from groep 6 to groep 8 |
| ✍️ **Spelling** | 503 exercises · 20 spelling rules (5 of them new in groep 8) · 75 sets |
| 🎮 **Spellen** | Nine games in four kinds — arcade, adventure & platform (an obby tower, a Mario-style block bonker), puzzles and strategy (a castle defence) — each with three levels (groep 6, 7, 8), plus the 🗃️ Woordkist for daily spaced-repetition micro-learning |
| 🎓 **Diploma's** | Mastered an easy level? It closes with a diploma, and the button goes straight to the next level up |
| 🪙 **Winkel** | Spend earned coins on stickers, avatars, characters and tools |
| 🎁 **Beloningen** | Daily quests, a day streak, a reading dragon that grows, gift boxes and a collector's album of 26 chest-only gifts |

Pick the game with the tab at the top of the world screen, and the coin
button in the top bar opens the shop any time.

---

# 📖 The reading game

## Ten worlds

| World | Topic |
|---|---|
| 🦊 | Animals & Nature — the city fox, the humpback's song, the wolf, the bees' dance, should we wipe out the mosquito? · the beaver's dam, the octopus's memory, bird migration, an ant colony, should zoos disappear? · the frog that freezes |
| 🚀 | Space & Stars — sleeping on the space station, the Mars rover, space junk, who owns the moon? · astronaut food, the James Webb telescope, why you float in orbit, life on a moon of Jupiter, should we send humans to Mars? · why the Moon changes shape |
| ⚽ | Sport & Excitement — the last penalty, the Elfstedentocht, nerves at the start, the VAR, starting young · the first kickflip, top sport without two legs, cycling in the slipstream, home advantage, doping and second chances · Sara's swimming certificate |
| 🏰 | Knights & History — Joris the squire, cold in the castle, the Golden Age, the Black Death, two stories at one statue · a blacksmith's apprentice, the night watch, a VOC cabin boy, the printing press, should controversial statues stay standing? · how to defend a castle |
| 🔬 | Tech & Discovery — velcro, the Delta Works, the robot that learned to fall, solar panels, may the computer write your essay? · the bicycle without pedals, the chocolate that melted by accident, a house printed in a day, how a self-driving car sees the road, should a computer decide who gets helped first? · the compass needle that points north |
| 🔍 | Mystery & Detective — the empty biscuit tin, grandpa's code, the theft nobody saw, the trail that was too tidy, how sure is an eyewitness? · the missing school trophy, the wet footprints, fingerprint evidence, the sniffer dog, should police scan your face on the street? · who ate the neighbours' pie? |
| 🥐 | Food & Cooking — why bread rises, a cocoa bean's journey, taste and smell, the crooked carrot, insects on your plate · why popcorn pops, why onions make you cry, how cheese gets its holes, where our food disappears to, should sugar be more expensive? · strawberries in winter? |
| 🎵 | Music & Art — the talking drum, the Stradivarius, Vermeer's blue, earworms, who made this painting? · a first performance, how a piano makes sound, the symphony a deaf composer wrote, why minor keys sound sad, is graffiti art or vandalism? · music from a bottle |
| 🌍 | World & Cultures — New Year in February, the whistled language, time zones, salt caravans, vanishing languages · the festival of lights, eating with chopsticks, the longest wall in the world, why some countries drive on the left, should everyone learn a second language? · sleeping in a hotel made of ice |
| 🫀 | Body & Health — why you sleep, bones that repair themselves, gut bacteria, how your body learns to fight, do screens make you unhappy? · why you sneeze, your skin as an organ, why growth spurts differ, how memories are stored, should school start later? · why you get new teeth |

The groep 8 **Eindbaas** level adds one longer text per world: where have
all the insects gone? (animals), looking for a second Earth (space), is
gaming a real sport? (sport), the night the water came — the 1953 flood
(history), power for when the wind drops (tech), become a fake-news
detective (mystery), a burger from the lab (food), goosebumps from music
(music), rights for every child (world) and stress: your body on alert
(body).

## 📚 Serial stories

Below the worlds is a bookshelf with ten **vervolgverhalen**: one story in
three chapters, where every chapter is harder than the one before, so the
child grows with the story. Chapter 1 is groep 6 (Doorzetter level, 6
questions), chapter 2 groep 7 (Expert level, 8 questions) and chapter 3
groep 8 (Eindbaas level, 10 questions, with "find the proof" questions).
Each chapter ends on a cliffhanger ("how does it end?") and the next one
opens with a short recap. A chapter opens once the previous one has at
least ⭐; reading the last chapter earns the book diploma and a gift box.

| Book | World | The story |
|---|---|---|
| 🔦 Het licht in de vuurtoren | Mystery | Every night a light flashes SOS in a lighthouse that has been locked for twenty years |
| 🐺 Sporen in de sneeuw | Animals | At the edge of the Veluwe, Noor finds tracks that cannot belong to a dog. Is the wolf back? |
| 🌕 Een jaar op de Maan | Space | In 2045 Sem moves to a Moon base with his mum — great for jumping, until the solar storm comes |
| 🧤 De keeper die niet durfde | Sport | Mo is scared of hard balls, and he is the one who has to become the new goalkeeper |
| 🗝️ De sleutel van de tijd | History | An old key from grandma's attic fits a little door that leads to the year 1370 |
| 🤖 Robot Rik | Tech | Twins build a robot that sorts rubbish — only Rik thinks a banana is a newspaper |
| 🥧 Het geheime recept van oma | Food | Yusuf has to bake grandma's famous apple pie, but the secret has been torn off the page |
| 🎭 De stem achter het gordijn | Music | Sara sings beautifully, but only when nobody is listening — from groep 6 to the groep 8 musical |
| ✉️ Brieven uit Tanzania | World | Ruben gets a pen pal, Amani, in Tanzania; they draw a comic together and Ruben finds out how much he did not know |
| 🦴 Zes weken gips | Body | A somersault on the trampoline, a strange sound, and Bram is in plaster for six weeks. How do you get strong again? |

The chapters are ordinary stories in `data/series.*.js` (see *Adding your
own stories*); they do not count towards a world's levels.

## 🎓 Diplomas: finished levels close

A child who has done everything once tends to keep replaying the easy
stories for quick stars. So a level that has been mastered **closes with a
diploma** instead:

- **Reading** — all stories of a level in a world read with at least ⭐⭐ →
  the reading diploma for that level, and that level closes.
- **Spelling** — an exercise with ⭐⭐ or more closes.
- **Games** — ⭐ opens the next game level, ⭐⭐ earns that level's diploma.
- **Serial stories** — chapters 1 and 2 close with ⭐⭐; the last chapter
  earns the book diploma.

The highest level of a world, a spelling rule or a game never closes, so
there is always something to play. A diploma is a celebration, not a
punishment: a full-screen certificate with the child's name, +20 XP (and a
gift box for a reading or book diploma), the level's card turning gold
with 🎓, and one button that goes straight to the next level — where
the stories and exercises give more XP (the ⚡ bonus on each card). The
world screen always says what the next diploma is and how many stories are
still needed; the 🎓 button shows all diplomas earned. Players who had
already mastered levels before this update get their diplomas the first
time they open the game.

A parent can switch the closing off per child in the parent area
(*Afgeronde makkelijke niveaus op slot*); diplomas are still awarded.

## Six difficulty levels

Every world has at least two stories at levels 1–5 (and three at the
Startklaar entry level) and one groep 8 story, so the ladder never has a
hole in it.

| Level | Reading level | Length | What is new |
|---|---|---|---|
| ⭐ Startklaar | AVI M6 | ± 165 words | Short sentences, the answer is in the text |
| ⭐⭐ Doorzetter | AVI E6 | ± 215 words | Questions that make you think |
| ⭐⭐⭐ Kampioen | AVI M7 | ± 260 words | More paragraphs, main-idea questions |
| ⭐⭐⭐⭐ Expert | AVI E7 | ± 325 words | Referring words and signal words, 8 questions |
| ⭐⭐⭐⭐⭐ Cito-meester | AVI Plus | ± 360 words | Fact or opinion, the writer's purpose, 9 questions |
| 👑 Eindbaas | Groep 8 · 2F | ± 390 words | Informative and argumentative texts like the groep 8 *doorstroomtoets*; "find the proof" questions, 10 questions |

A level only unlocks once the previous one has been played, and a level
the child has mastered closes with a diploma (see *Diplomas* above).

## Eight kinds of questions

Not just multiple choice, so it does not get boring — and the last three are
the ones the real Cito and doorstroom tests keep using:

- **Multiple choice** — find the answer in the text
- **True / false** — quick and tense
- **Fill the gap** — click the right word into the sentence
- **Sequencing** — put the events in the right order
- **Matching** — connect a word to its meaning
- **Pick two or three** — more than one answer is correct *(Cito-style)*
- **Sorting** — put each sentence in the right bin, e.g. fact vs opinion *(Cito-style)*
- **Find the proof** — tap the sentence from the text that proves the answer *(groep 8)*

## Ten reading skills

Every question trains one named skill, which is what lets the report show
*where* things go wrong instead of just a score:

| | | |
|---|---|---|
| 🔎 Letterlijk lezen | 🧠 Conclusie trekken | 📖 Woordenschat |
| 🔢 Volgorde | 💡 Hoofdgedachte | 🔗 Verwijswoorden |
| 🧱 Tekststructuur | 🎯 Doel van de schrijver | ⚖️ Feit of mening |
| 📝 Samenvatten | | |

The last five are exactly the categories the Cito *begrijpend lezen* test comes
back to again and again.

---

# ✍️ The spelling game

Twenty spelling rules from group 6, 7 and 8, matching the **spellingcategorieën**
Dutch schools actually use (Cito, Staal, Taal actief). Every rule has a
plain-language explanation that stays one tap away while he works, and three
exercises that get harder.

## The three meta-categories

Rather than one flat list, every rule is also tagged with the strategy it
belongs to — the same three groups his school's own **categoriekaart**
(Staal or Taal actief) uses, shown as a small badge on each rule's card:

| | | |
|---|---|---|
| 🎧 **Klankwoord** | Sound word | Written exactly as it sounds — no rule needed (kat, lamp) |
| 📐 **Regelwoord** | Rule word | A fixed grammatical rule applies (dt, bakker/jager, tussen-n) |
| 🧠 **Weetwoord** | Memory word | No rule tells you — you simply have to know it (ei/ij, au/ou) |

The last rule, **🧭 Cito-check**, is pure practice at *identifying* the
category itself — exactly the three Cito question styles: "which category
does this word belong to", "which word follows the same rule as X", and
sorting a mixed list of words into klankwoord / regelwoord / weetwoord bins.

| Rule | Meta | What it practises |
|---|---|---|
| 🌧️ **ei of ij** | weet | The -lijk and -tijd helpers, and the ei picture list |
| 🎈 **au of ou** | weet | "Een blauwe pauw met een nauwe kous", and the -auw / -ouw pairs |
| ✍️ **Werkwoorden: d, t of dt** | regel | ik word / hij wordt / word jij, and 't kofschip |
| 🔁 **Bomen of bommen** | regel | Bakker- and jagerwoorden: doubling a short vowel, dropping a long one |
| 🐣 **Verkleinwoorden** | regel | -je, -tje, -pje, -kje and -etje |
| 🔗 **Samenstellingen** | regel | The linking -n, the linking -s, or nothing at all |
| 🔠 **Hoofdletters en leestekens** | regel | Names, countries, festivals — and the small letter on days and months |
| 🧩 **Stille stukjes achteraan** | regel | -lijk, -ig, -tie and -isch: heard one way, written another |
| ✨ **Trema en apostrof** | regel | knieën, ideeën, foto's, taxi's |
| 🎧 **Dictee: luister en typ** | klank | The hardest words of the year, spoken out loud |
| 📏 **Hond of lief: d of t?** | regel | Make the word longer (honden, lieve) to hear whether it ends in d or t |
| ⚖️ **Kilowoord** | weet | Hearing "ie" but writing one i: kilo, gitaar, piloot |
| 🥤 **Cent of cola** | weet | The letter c sounding like s (cent) or k (cola) |
| 🚕 **Taxiwoord: x en -tie** | weet | x always sounds like ks; -tie/-cie always sounds like tsie |
| 🧭 **Cito-check: welke categorie?** | — | Identifying klankwoord / regelwoord / weetwoord itself |

Every one of those fifteen rules also has a fourth, **groep 8** exercise
(longer words, harder sentences), which opens once the third one is done.
Then there are five rules that only come up in **groep 8**, three exercises
each, under their own "🎓 Nieuw in groep 8" heading:

| Rule | Meta | What it practises |
|---|---|---|
| 🧾 **De verhuisde kast** | regel | The past participle as an adjective: de gefietste route, de verbrande pannenkoek vs oma verbrandde, de vergrote foto vs zij vergrootte |
| 💻 **Engelse werkwoorden** | regel | hij downloadt, hij printt, ik updatete, geüpdatet, gerecycled |
| 🗼 **Leenwoorden** | weet | cadeau, bureau, chauffeur, garage, trottoir, portemonnee, computer |
| 🔢 **Getallen in letters** | regel | veertig, achttien, tachtig, tweeëntwintig, achtste, twintigste |
| ➖ **Het koppelteken** | regel | zee-egel, auto-ongeluk, na-apen, Noord-Holland, tv-programma, privé-eigendom |

## Six kinds of exercises

| Exercise | What he does |
|---|---|
| **Welk woord is goed?** | Two spellings side by side in a real sentence |
| **Vul het stukje in** | `kl__n` — ei or ij? |
| **Dictee** | The device says the word; he types it |
| **Zoek de fout** | Click the misspelled word in the sentence |
| **Sorteer** | Put each word in the right group |
| **Bouw het woord** | Tap the pieces (plus a few decoys) in the right order to build the word |

Every answer, right or wrong, is followed by the **rule that explains it** — not
just "wrong", but *why*. The words he got wrong are listed again at the end of
the round, with their rule, so you can go through them together.

---

# 🎮 The arcade and the Woordkist

The third tab, **Spellen**, is where the practice turns into a game. Most
rounds are 15 "duels" — one right and one wrong word — taken from the
spelling exercises (words the child got wrong before come up more often) or
from the vocabulary of the stories. Nine games in four kinds:

| Game | Kind | How it plays |
|---|---|---|
| 🦉 **Flappy Uil** | Arcade | Tap (or space) to flap and fly through the gate with the right word. Forgiving on purpose: wide gates and a soft flap |
| ☔ **Woordregen** | Arcade | Slide the bucket (finger, mouse or arrow keys) and catch only the right words |
| 🏎️ **Woordrace** | Arcade | A kart race: change lanes and drive through the right word for a turbo, dodge the oil, overtake the other karts and finish as high as you can |
| 🏃 **Springheld** | Adventure | A platform runner: if the right word is on the high block, jump; if it is on the ground, keep running. Jump over the snails |
| 🧗 **Obby-toren** | Adventure | A Roblox-style obby: jump left or right to the platform with the right word (the wrong one is a trap block) before the lava catches up, with a checkpoint 🚩 every five floors |
| 🍄 **Blokbonk** | Adventure | Mario-style: a sentence on ?-blocks, one word misspelled — jump and bonk exactly that block for a coin, and stomp the beetles for bonus points |
| 🧠 **Woordmemory** | Puzzle | Turn over two cards and match every word (or saying) to its meaning |
| 🔎 **Woordzoeker** | Puzzle | A word search where the clue is the meaning, or the word spelled wrong — work out the word first, then find it in the grid |
| 🏰 **Kasteelverdediging** | Strategy | Tower defence: answer questions to earn gold, choose where to build 🏹 and 🔮 towers and upgrade them, then start the wave. Spelling bugs must not reach the castle |

**Every game has three levels**: ⭐ groep 6, ⭐⭐ groep 7 and 👑 groep 8.
A higher level takes its words from harder exercises and stories, is a
little faster and gives more points. ⭐ on a level opens the next one;
⭐⭐ earns that level's diploma, after which it closes and the game starts
at the next level (see *Diplomas*). Stars come from how many duels were
right, so hurrying through does not pay.

Hearts, combo points and a record per game and level; the result screen
lists every missed word with the rule that explains it, and has a button
straight to the next level once it is open.

**🎟️ Game tickets** keep reading the main thing: every game costs one
ticket, and tickets are only earned by finishing a story (+2), a spelling
exercise (+1) or a Woordkist round (+1). A new player starts with three,
and at most twenty can be saved up. Arcade time does not count towards the
30-minute reading mission.

**🗃️ The Woordkist** is daily micro-learning with spaced repetition: eight
flash cards, each with four possible meanings. It is a five-box Leitner
system — a right answer moves the card up a box and it only returns after
1, 2, 4, 7 or 14 days; a wrong answer sends it back to box 1 and it comes
round once more in the same session. Two piles: *words from your stories*
(each shown with the sentence it came from) and **42 groep 8 sayings**
(*de kat uit de boom kijken*, *door de mand vallen*, *nattigheid voelen*…).
The Woordkist is free and earns a ticket.

---

## What keeps them going

- ⏱ **30-minute mission** — a ring in the top bar fills up; at half an hour
  there is a trophy, confetti and coins (once per day)
- ⚡ **XP, levels and a streak counter** shared between reading and spelling;
  every level-up shows what just unlocked in the shop
- 🪙 **Coins** — earned by finishing stories and spelling sets, spendable in the shop
- 🎯 **Daily quests** — three small goals a day ("read 2 stories", "tap 3
  tricky words", "spell 6 words correctly"…). Finish all three for a gift box.
  They are the same all day and different every day.
- 🔥 **Day streak** — how many days in a row something was finished; a gift
  box at 3, 7, 14 and 30 days
- 🎁 **Gift boxes** — tap to open; inside is a collectable gift (only
  obtainable this way, never for sale), a joker card or bonus coins. Earned
  for all daily quests, the first three-star score on a story, the day
  streak and every fifth level.
- 📒 **Collector's album** — 26 gifts in four rarities; the missing ones show
  as ❓ so there is always something left to find
- 🦉 **Oscar the owl** reacts to every answer, gives hints and tells a
  "did you know?" fact (50 of them, matched to the world you just read)
- 🐉 **The reading dragon** — hatches from an egg and grows through six
  stages (up to Koningsdraak) from everything the child finishes; reading
  feeds it most. It is sleepy on days nobody has read yet, and every new
  stage brings a gift box
- 🔥 **Combo pop-ups** — "3× OP EEN RIJ!", "5× SUPERREEKS!" — and a
  "better than last time" message when a replay beats the old score
- 🎓 **Diplomas** — a certificate with the child's name for every mastered
  level, a "next diploma" goal on the world screen, and more XP (⚡) the
  higher the level
- 📚 **Cliffhangers** — every serial-story chapter ends with "how does it
  end?", and the next chapter is one tap away
- 🎉 Confetti, stars, sound effects and **30 collectable badges**
- ⚡ **Flash-words bonus round** — a word flashes briefly; which word was it?

## 🪙 The rewards shop

Coins are only earned by **finishing** something — a story, a spelling
round, a badge, the 30-minute mission — never for single questions, and a
**daily coin cap** (60 a day, shown live in the shop) means even a marathon
session cannot empty the shop in one sitting. It takes real, repeated days
of reading to save up, on purpose. The coin button in the top bar opens the
shop, where coins are spent on five rarity tiers — nothing here is needed
to play, it is purely a reason to keep coming back:

| Tier | Kind | What it is | Example |
|---|---|---|---|
| Common | 🎨 **Stickers** | Cheap, purely for the collection — shown on a shelf on the world screen | 🌈 Regenboog, 🦄 Eenhoorn |
| Uncommon | 🧢 **Iconen** | Extra avatars, need a small player level | 🧛 Vampier, 🦁 Leeuw |
| Rare | 🎭 **Personages** | Bigger, pricier avatars, need a solid player level | 🧑‍🚀 Astronaut, 🧞 Geest |
| Epic | 🥋 **Special personages** | Anime-style heroes, unlocked only at a high player level | 🏴‍☠️ Piratenkapitein, 🐲 Drakenkrijger |
| Legendary | 🌠 **Kosmische Kampioen** | One holographic "3D" card, buyable only after *every* story, *every* spelling set and *every* badge has been earned | 🌠 |
| — | 🧰 **Gereedschap** | A consumable **jokerkaart**, or a permanent **kleurenthema** | 🃏 Jokerkaart, 🌊 Oceaanthema |

Bought icons and characters show up as extra choices in the avatar picker;
bought themes can be switched on from the shop at any time. A jokerkaart
only works on questions with a clear right answer (multiple choice,
true/false, fill‑the‑gap, pick‑two) and gives less XP than solving it
yourself, so it stays a genuine "I'm stuck" option rather than a shortcut.

A locked item shows exactly what is missing — the player level needed, or
(for the legendary card) a live checklist of stories, spelling sets and
badges still to go — so the goal always feels reachable, never mysterious.
The special/epic characters are original anime-archetype heroes (pirate
captain, ninja master, dragon warrior, cyber hero) rather than characters
from an existing show, so the game does not borrow a name or design that
belongs to someone else's franchise; feel free to rename them in
`data/shop.js` for your own copy.

## Reading support

Specifically for a child who finds reading hard:

| Button | What it does |
|---|---|
| 🔈 **Voorlezen** | The device reads the story out loud, in Dutch or English |
| ✨ **Meelezen** | Highlights word by word at a calm pace |
| 🔠 **Groter** | Three text sizes |
| 📏 **Liniaal** | Dims every line except the one he is on |
| 🅰 **Leeshulp** | Rounder font with extra letter spacing |
| 👀 **Tekst** | Pull the story back up while answering questions |
| 💡 **De regel** | Pull the spelling rule back up during an exercise |
| 📌 Word cards | Hard words with a plain explanation; click to hear them |

## 🇳🇱 / 🇬🇧 The translate button

One click on the flag switches **everything**: story, questions, answers,
explanations and interface — even in the middle of a question, *with the answer
he already gave still in place*. Useful to check whether he really understood
it, or to look up one hard word without leaving the Dutch text behind.

The spelling words themselves always stay Dutch, and the dictation is always
spoken in Dutch — only the instructions and the rules translate.

## 📊 For parents

Behind a small multiplication sum, so he cannot wander in:

- **More than one child on the same device?** Each player gets their own
  profile — own name, avatar, XP, coins and log — picked from a "Wie speelt
  er?" (who's playing?) screen. Inside the parent dashboard you can switch
  between the children's profiles to see (and download) each one's own
  report separately; nothing is ever mixed together. A downloaded CSV,
  JSON or HTML report has the player's name in its file name too.
- Stories, questions, percentage correct, reading time and **reading pace (wpm)**
- **A bar per reading skill** — the weak spot is visible at a glance
- **A bar per spelling rule**, plus the words he misspelled and what he wrote
- A table per topic and level
- **Concrete advice** for home, derived from the actual numbers — including
  which spelling rule to say out loud and which words to dictate this week
- The last 20 answers, with the question itself
- A warning if he **clicked through** without really reading
- **Coins saved and items bought**, so you can see how the shop is going too
- **Arcade games played and Woordkist words known** — games cost tickets
  that are only earned by reading, and the daily log shows games and
  reviewed cards per day, so you can see the balance
- **Diplomas earned** and a switch, *Afgeronde makkelijke niveaus op
  slot*, to turn off the closing of mastered levels for this child
  (on by default); the HTML report lists the latest diplomas
- **A daily activity log** — sessions, time played, stories, questions,
  accuracy, spelling and coins earned, one row per day for at least the
  last three weeks. It is stored separately from the detailed answer log,
  so it survives a page refresh and is not affected if the detailed log
  ever gets trimmed for space.

### Downloading the report

| Button | File | For |
|---|---|---|
| **CSV** | `leeskampioen_naam_date.csv` | Open in Excel or Numbers; one row per question, spelling rows at the bottom |
| **JSON** | `leeskampioen_naam_date.json` | All raw data |
| **Rapport** | `leesrapport_naam_date.html` | A tidy page to read or print, with both games in it |

> **Privacy:** everything stays in that device's browser (`localStorage`).
> Nothing is sent anywhere. The log is kept until you press *Wis alles*, so you
> can just as easily download at the end of the week. With more than one
> child on the device, *Wis alles* only erases the profile you are currently
> viewing — the other children's progress and logs are not touched.

---

## Adding your own stories

Open a file in `data/` and paste in another story. The pattern:

```js
{
  id: 'dieren-11', topic: 'dieren', level: 2, emoji: '🦔', scene: 'forest',
  title: { nl: 'De egel in de tuin', en: 'The hedgehog in the garden' },
  text: {
    nl: ['Eerste alinea...', 'Tweede alinea...'],
    en: ['First paragraph...', 'Second paragraph...']
  },
  words: [{ nl: 'schemering', en: 'dusk', defNl: 'als het net donker wordt', defEn: 'when it just gets dark' }],
  questions: [
    { id: 'q1', type: 'mc', skill: 'letterlijk',
      q: { nl: 'Waar slaapt de egel?', en: 'Where does the hedgehog sleep?' },
      options: [{ nl: 'Onder de heg', en: 'Under the hedge' }, { nl: 'In de vijver', en: 'In the pond' }],
      answer: 0,
      explain: { nl: 'Dat staat in alinea 1.', en: 'That is in paragraph 1.' } }
  ]
}
```

Question types are `mc`, `tf`, `gap`, `order`, `match`, `multi`, `sort` and
`find` (like `mc`, but the options are sentences copied word for word from
the story, in text order; the validator checks they really are in the text).
Skills are `letterlijk`, `gevolgtrekking`, `woordenschat`, `volgorde`,
`hoofdgedachte`, `verwijswoorden`, `structuur`, `doel`, `feitmening` and
`samenvatten`. A new world goes into `data/bootstrap.js` plus one `<script>`
line in `index.html`.

A serial story is one `addSeries({...})` call in its own
`data/series.<id>.js` file, plus a `<script>` line in `index.html` (the
validator reads the same script list, so it picks the file up by itself):

```js
addSeries({
  id: 'vuurtoren', topic: 'mysterie', emoji: '🔦',
  title: { nl: '...', en: '...' }, blurb: { nl: '...', en: '...' },
  chapters: [
    { level: 2, emoji: '🔦', scene: 'night', title: {...}, text: {...}, words: [...], questions: [...],
      teaser: { nl: 'Hoe loopt het af?', en: 'How does it end?' } },
    { level: 4, ..., recap: { nl: 'Wat eraan voorafging...', en: 'Previously...' }, teaser: {...} },
    { level: 6, ..., recap: {...} }
  ]
})
```

Each chapter is an ordinary story (same fields as above) without an `id`
or `topic`: `addSeries` fills in `vuurtoren-1`, `-2`, `-3` and the world.
The validator requires every chapter to be harder than the one before, a
`recap` on every chapter after the first and a `teaser` on every chapter
before the last (and warns if three chapters are not at levels 2, 4 and 6).

A spelling exercise goes into `data/spelling.sets.js`:

```js
{ type: 'pick', options: ['wordt', 'word'], answer: 0,
  sentence: { nl: 'Hij ___ later voetballer.', en: 'He ___ a footballer later.' },
  why: { nl: 'Bij hij komt er een t achter de stam.', en: 'With "hij" you add a t to the stem.' } }
```

A word-builder exercise lists the pieces in order (`tiles`) and a few decoys
(`extra`); the validator checks the tiles spell the word:

```js
{ type: 'build', word: 'boterhammen', tiles: ['bo', 'ter', 'ham', 'men'], extra: ['boo', 'ha'],
  sentence: { nl: 'Ik neem twee ___ mee.', en: 'I take two ___.' },
  why: { nl: 'Bo-ter: lange o. Ham-men: korte a.', en: 'Bo-ter: long o. Ham-men: short a.' } }
```

A new rule (category) goes into `window.SPELL_CATS` in `data/spelling.js`,
tagged with a `meta` of `'klank'`, `'regel'` or `'weet'` so it gets the right
badge on its card (and `grade: 8` for a groep 8 rule). The groep 8 rules and
sets live in `data/spelling.groep8.js`; sayings for the Woordkist in
`data/idioms.js`.

A shop item goes into `window.SHOP_ITEMS` in `data/shop.js`:

```js
{ id: 'sticker-star', kind: 'sticker', tier: 'common', emoji: '⭐', cost: 18, nl: 'Ster', en: 'Star' }
```

`kind` is `sticker`, `icon`, `character` or `tool`. A `tool` also needs an
`effect`: `'joker'` with an `amount` (a consumable jokerkaart pack), or
`'theme'` with a `hue` (a permanent colour unlock).

Three more fields make an item harder to reach:

- `tier` — `'common'`, `'uncommon'`, `'rare'`, `'epic'` or `'legendary'`.
  Purely cosmetic (it picks the little rarity pill and, for `'legendary'`,
  the holographic card style) but keep the naming honest: a `cost` should
  climb with the tier.
- `minLevel` — the player level (from XP) required before the item can be
  bought at all. Shown to the child as a locked card with the level still
  needed.
- `unlock` — an extra, non-negotiable requirement on top of level and
  coins, checked by `itemUnlockOk()` in `js/app.js`. Any combination of
  `{ allStories: true, allSpelling: true, allBadges: true }` — "every
  story played", "every spelling set played", "every badge earned". This
  is what makes the legendary item mean *finished the whole game*, not
  just *saved up enough coins*.

## Checking your changes

Two commands, no build step:

```bash
node tools/validate.js     # checks every story and exercise
```

It loads the data files exactly like the browser does and reports anything that
would break the game or confuse a child: a missing translation, an answer index
pointing outside its own option list, a duplicate id, a level with no story, a
"find the mistake" item whose fix is identical to the mistake. It prints a
summary of the whole database and exits non-zero if anything is wrong.

```bash
npm install playwright     # once
node tools/smoke.mjs       # plays the game in a real browser
```

This serves the folder over plain HTTP exactly like GitHub Pages does, then
reads a story, answers every question type, plays a spelling round, a groep 8
story and a groep 8 spelling set, all nine games (each with real input at
least once, plus a full round to the result screen) and a Woordkist round,
reads a whole serial story chapter by chapter, earns and checks diplomas
and the closed levels (and the parent switch that opens them again),
switches language mid-question, opens the parent dashboard, downloads all
three reports and reloads to check the progress was saved. Any console
error, failed request or wrongly graded answer fails the run. If Chromium
is already on the machine, point at it with
`PLAYWRIGHT_CHROMIUM=/path/to/chromium`.

```bash
node tools/autopilot.mjs [width] [games] [levels]
# e.g. node tools/autopilot.mjs 390 obby,bonk,race 1,2,3
```

Optional, not part of CI: plays full rounds of the action games with real
physics and a simple "bot" that always aims for the right word; every
round must end 15/15. Run it after changing anything about game speed,
gravity or sizes.

Both also run automatically on GitHub for every push and pull request
(`.github/workflows/check.yml`), and the Pages deploy refuses to publish if
`validate.js` fails.

## Technical

Plain HTML, CSS and JavaScript. No framework, no build step, no dependencies.
Works offline and straight from `file://`.

```
index.html              the whole screen structure
css/style.css           styling and animation
js/i18n.js              every interface string, in NL and EN
js/audio.js             sound effects (WebAudio) and read-aloud (SpeechSynthesis)
js/fx.js                confetti, background, the owl
js/log.js               storage, statistics and the export buttons
js/rewards.js           daily quests, day streak, gift boxes, the album, fun facts, tickets, the reading dragon
js/arcade.js            the arcade engine (levels, duels, hearts, results, menu) plus Flappy Uil, Springheld and Woordregen
js/games/*.js           the other six games, each registered with Arcade.register()
js/ladder.js            the diploma ladder: which levels are mastered, closed or next
js/books.js             the serial-story bookshelf and book screen
js/woordkist.js         the Woordkist: spaced-repetition flash cards
js/app.js               reading game: screens, questions, scoring, dashboard, shop, coins, joker
js/spelling.js          spelling game: rules, exercises, scoring, joker
data/bootstrap.js       worlds, levels and reading skills
data/stories.*.js       the stories, one file per world
data/series.*.js        the serial stories, one book (three chapters) per file
data/spelling.js        the fifteen group 6-7 spelling rules, their meta-category and explanation
data/spelling.sets.js   the spelling exercises
data/shop.js            the stickers, icons, characters and tools in the coin shop, plus the chest-only gifts
data/spelling.groep8.js the groep 8 exercise for every rule, plus the five groep 8 rules
data/facts.js           Oscar's "did you know?" facts, five per world
data/idioms.js          the groep 8 sayings for the Woordkist
tools/validate.js       checks the data (no dependencies)
tools/autopilot.mjs     optional: plays a full round of every arcade game with real physics
tools/smoke.mjs         plays the game in a browser (needs playwright)
```

The in-game language stays Dutch by default; these docs are in English.

## 💌 Feedback

Ideas, a question that seems wrong, or something your child would love to
see? Email **[nxtrung87@gmail.com](mailto:nxtrung87@gmail.com?subject=Leeskampioen%20feedback)**.
The address is also on the home screen, in the parent area and at the bottom
of every downloaded report. The game itself never sends anything: a mail is
only ever something you write and send yourself.
