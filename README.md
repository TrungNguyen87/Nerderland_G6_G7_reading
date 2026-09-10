# 📚 Leeskampioen

An interactive reading game for **Dutch primary school groups 6 and 7**
(ages 9–11). The stories are in Dutch, with one button that translates
everything into English, plus a parent area where you can download a report at
the end of the day.

> **Try it now:** download the folder and double-click `index.html`.
> **Put it online:** see **[DEPLOY.md](DEPLOY.md)** for step-by-step instructions.

---

## What is in it

**18 stories · 90 questions · 6 topics · 3 levels**

| World | Topic |
|---|---|
| 🦊 | Animals & Nature — the city fox, the humpback's song, the return of the wolf |
| 🚀 | Space & Stars — sleeping on the space station, the Mars rover, why Mars is so hard |
| ⚽ | Sport & Excitement — the last penalty, the Elfstedentocht, nerves at the start |
| 🏰 | Knights & History — Joris the squire, cold in the castle, two sides of the Golden Age |
| 🔬 | Tech & Discovery — how velcro was invented, dikes and the Delta Works, the robot that learned to fall |
| 🔍 | Mystery & Detective — the empty biscuit tin, grandpa's code, the theft nobody saw |

Each topic has three levels that rise in difficulty and **stop at group 7**:

| Level | Reading level | Length |
|---|---|---|
| ⭐ Startklaar | AVI M6 | ± 150 words, short sentences |
| ⭐⭐ Doorzetter | AVI E6 | ± 190 words |
| ⭐⭐⭐ Kampioen | AVI M7 | ± 250 words, more inference questions |

Level 2 only unlocks once level 1 is passed.

## Five kinds of questions

Not just multiple choice, so it does not get boring:

- **Multiple choice** — find the answer in the text
- **True / false** — quick and tense
- **Fill the gap** — click the right word into the sentence
- **Sequencing** — put the events in the right order
- **Matching** — connect a word to its meaning

Every question trains one of five reading skills: **literal reading, inference,
vocabulary, sequencing and main idea**. That is what lets the report show
*where* things go wrong, instead of just a score.

## What keeps him going

- ⏱ **30-minute mission** — a ring in the top bar fills up; at half an hour he
  gets a trophy and confetti
- ⚡ **XP, levels and a streak counter** — the longer the run of correct answers,
  the more points per answer
- 🦉 **Oscar the owl** reacts to every answer and gives hints
- 🎉 Confetti, stars, sound effects and ten collectable badges
- ⚡ **Flash-words bonus round** — a word flashes briefly; which word was it?
  Trains fast word recognition, which is what lifts reading pace

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
| 📌 Word cards | Hard words with a plain explanation; click to hear them |

## 🇳🇱 / 🇬🇧 The translate button

One click on the flag switches **everything**: story, questions, answers,
explanations and interface — even in the middle of a question. Useful to check
whether he really understood it, or to look up one hard word without leaving the
Dutch text behind.

## 📊 For parents

Behind a small multiplication sum, so he cannot wander in:

- Stories, questions, percentage correct, reading time and **reading pace (wpm)**
- A bar per reading skill — the weak spot is visible at a glance
- A table per topic and level
- **Concrete advice** for home, derived from the actual numbers
- The last 20 answers, with the question itself
- A warning if he **clicked through** without really reading

### Downloading the report

| Button | File | For |
|---|---|---|
| **CSV** | `leeskampioen_date.csv` | Open in Excel or Numbers; one row per question |
| **JSON** | `leeskampioen_date.json` | All raw data |
| **Rapport** | `leesrapport_date.html` | A tidy page to read or print |

The CSV holds, per answer: date, time, topic, level, story, question type,
reading skill, right/wrong, what he answered, what was correct, how many seconds
he took, whether he used a hint, and which language. Reading times and pace per
story are appended at the bottom.

> **Privacy:** everything stays in that device's browser (`localStorage`).
> Nothing is sent anywhere. The log is kept until you press *Wis alles*, so you
> can just as easily download at the end of the week.

## Adding your own stories

Open a file in `data/` and paste in another story. The pattern:

```js
{
  id: 'dieren-4', topic: 'dieren', level: 2, emoji: '🦔', scene: 'forest',
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

Question types are `mc`, `tf`, `gap`, `order` and `match`; skills are
`letterlijk`, `gevolgtrekking`, `woordenschat`, `volgorde` and `hoofdgedachte`.
A new topic goes into `data/bootstrap.js` plus one `<script>` line in
`index.html`.

## Technical

Plain HTML, CSS and JavaScript. No framework, no build step, no dependencies.
Works offline and straight from `file://`.

```
index.html            the whole screen structure
css/style.css         styling and animation
js/i18n.js            every interface string, in NL and EN
js/audio.js           sound effects (WebAudio) and read-aloud (SpeechSynthesis)
js/fx.js              confetti, background, the owl
js/log.js             storage, statistics and the export buttons
js/app.js             game logic: screens, questions, scoring, dashboard
data/bootstrap.js     worlds, levels and reading skills
data/stories.*.js     the stories, one file per topic
```

The in-game language stays Dutch by default; these docs are in English.
