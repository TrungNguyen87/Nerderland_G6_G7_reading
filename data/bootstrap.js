/* =====================================================================
   Leeskampioen - data bootstrap
   Loaded BEFORE any stories.*.js or spelling.js file.
   Every topic file calls addStories([...]) to register its stories.
   ===================================================================== */

window.STORY_DB = [];

window.addStories = function (list) {
  list.forEach(function (s) { window.STORY_DB.push(s); });
};

/* Vervolgverhalen: één boek in drie hoofdstukken die steeds moeilijker
   worden (groep 6 → 7 → 8). Elk hoofdstuk is een gewoon verhaal; addSeries
   zet er het boek (series), het hoofdstuknummer (chapter), de wereld en een
   id als <boek>-<n> bij en zet het in STORY_DB. De boeken zelf staan in
   window.SERIES. Zie data/series.*.js en js/books.js. */
window.SERIES = [];
window.addSeries = function (book) {
  const chapters = book.chapters || [];
  const topic = (window.TOPICS || []).filter(function (t) { return t.id === book.topic; })[0];
  window.SERIES.push({
    id: book.id, topic: book.topic, emoji: book.emoji,
    hue: typeof book.hue === 'number' ? book.hue : (topic ? topic.hue : 255),
    title: book.title, blurb: book.blurb, chapters: chapters.length
  });
  chapters.forEach(function (ch, i) {
    ch.series = book.id;
    ch.chapter = i + 1;
    if (!ch.topic) ch.topic = book.topic;
    if (!ch.id) ch.id = book.id + '-' + (i + 1);
    window.STORY_DB.push(ch);
  });
};

/* The ten worlds the child can choose from.
   `hue` drives the colour theme of every card / screen for that world. */
window.TOPICS = [
  { id: 'dieren',   emoji: '🦊', hue: 145, nl: 'Dieren & Natuur',      en: 'Animals & Nature',
    subNl: 'Vossen, walvissen en het bos', subEn: 'Foxes, whales and the forest' },
  { id: 'ruimte',   emoji: '🚀', hue: 255, nl: 'Ruimte & Sterren',     en: 'Space & Stars',
    subNl: 'Planeten, raketten en astronauten', subEn: 'Planets, rockets and astronauts' },
  { id: 'sport',    emoji: '⚽', hue: 25,  nl: 'Sport & Spanning',     en: 'Sport & Excitement',
    subNl: 'Wedstrijden, records en teamwork', subEn: 'Matches, records and teamwork' },
  { id: 'ridders',  emoji: '🏰', hue: 15,  nl: 'Ridders & Vroeger',    en: 'Knights & History',
    subNl: 'Kastelen, VOC-schepen en de Gouden Eeuw', subEn: 'Castles, ships and the Golden Age' },
  { id: 'techniek', emoji: '🔬', hue: 195, nl: 'Techniek & Ontdekking', en: 'Tech & Discovery',
    subNl: 'Uitvindingen, robots en experimenten', subEn: 'Inventions, robots and experiments' },
  { id: 'mysterie', emoji: '🔍', hue: 285, nl: 'Mysterie & Detective',  en: 'Mystery & Detective',
    subNl: 'Raadsels oplossen en sporen volgen', subEn: 'Solving riddles and following clues' },
  { id: 'eten',     emoji: '🥐', hue: 35,  nl: 'Eten & Koken',         en: 'Food & Cooking',
    subNl: 'Brood, chocola en de bakkerij', subEn: 'Bread, chocolate and the bakery' },
  { id: 'muziek',   emoji: '🎵', hue: 320, nl: 'Muziek & Kunst',       en: 'Music & Art',
    subNl: 'Instrumenten, schilders en het theater', subEn: 'Instruments, painters and theatre' },
  { id: 'wereld',   emoji: '🌍', hue: 175, nl: 'Wereld & Culturen',    en: 'World & Cultures',
    subNl: 'Landen, talen en feesten ver weg', subEn: 'Countries, languages and faraway festivals' },
  { id: 'lichaam',  emoji: '🫀', hue: 355, nl: 'Lichaam & Gezondheid', en: 'Body & Health',
    subNl: 'Je hart, je hersenen en slapen', subEn: 'Your heart, your brain and sleeping' }
];

/* Difficulty ladder. Runs from halfway group 6 up to the end of group 7,
   with a Cito-style top level for children who are ready for the test. */
window.LEVELS = [
  { level: 1, avi: 'AVI M6',  nl: 'Startklaar',   en: 'Warm-up',     stars: '⭐',         hue: 145,
    descNl: 'Korte zinnen, het antwoord staat in de tekst.',
    descEn: 'Short sentences, the answer is in the text.' },
  { level: 2, avi: 'AVI E6',  nl: 'Doorzetter',   en: 'Challenger',  stars: '⭐⭐',       hue: 40,
    descNl: 'Iets langer, met vragen waarbij je moet nadenken.',
    descEn: 'A bit longer, with questions that make you think.' },
  { level: 3, avi: 'AVI M7',  nl: 'Kampioen',     en: 'Champion',    stars: '⭐⭐⭐',     hue: 350,
    descNl: 'Meer alinea’s en vragen over de hoofdgedachte.',
    descEn: 'More paragraphs and questions about the main idea.' },
  { level: 4, avi: 'AVI E7',  nl: 'Expert',       en: 'Expert',      stars: '⭐⭐⭐⭐',   hue: 265,
    descNl: 'Lange tekst met verwijswoorden en signaalwoorden.',
    descEn: 'Long text with referring words and signal words.' },
  { level: 5, avi: 'AVI Plus', nl: 'Cito-meester', en: 'Cito master', stars: '⭐⭐⭐⭐⭐', hue: 205,
    descNl: 'Zoals de echte Cito-toets: feit of mening, doel van de schrijver.',
    descEn: 'Like the real Cito test: fact or opinion, the writer’s purpose.' },
  /* groep 8: lange, zakelijke teksten op het niveau van de doorstroomtoets
     (referentieniveau 2F). Nieuw vraagtype: zoek het bewijs in de tekst. */
  { level: 6, avi: 'Groep 8 · 2F', nl: 'Eindbaas', en: 'Final boss', stars: '👑', hue: 45, grade: 8,
    descNl: 'Groep 8: lange teksten zoals op de doorstroomtoets. Zoek het bewijs in de tekst.',
    descEn: 'Group 8: long texts like the final primary-school test. Find the proof in the text.' }
];

/* Reading skills we measure, so the report shows WHAT to practise.
   The first five are the classics; the last five are the extra categories
   that the Cito begrijpend-lezen toets keeps coming back to. */
window.SKILLS = {
  letterlijk:    { nl: 'Letterlijk lezen',    en: 'Literal reading',   emoji: '🔎',
                   tipNl: 'Het antwoord staat gewoon in de tekst. Zoek het woord op.',
                   tipEn: 'The answer is right there in the text. Find the word.' },
  gevolgtrekking:{ nl: 'Conclusie trekken',   en: 'Inference',         emoji: '🧠',
                   tipNl: 'Het antwoord staat er niet letterlijk. Combineer twee zinnen.',
                   tipEn: 'The answer is not written down. Combine two sentences.' },
  woordenschat:  { nl: 'Woordenschat',        en: 'Vocabulary',        emoji: '📖',
                   tipNl: 'Kijk naar de zin eromheen om de betekenis te raden.',
                   tipEn: 'Look at the sentence around it to guess the meaning.' },
  volgorde:      { nl: 'Volgorde',            en: 'Sequencing',        emoji: '🔢',
                   tipNl: 'Zoek woorden als eerst, daarna, toen en ten slotte.',
                   tipEn: 'Look for words like first, then, next and finally.' },
  hoofdgedachte: { nl: 'Hoofdgedachte',       en: 'Main idea',         emoji: '💡',
                   tipNl: 'Waar gaat het hele stuk over? Niet over een klein detail.',
                   tipEn: 'What is the whole text about? Not one small detail.' },
  verwijswoorden:{ nl: 'Verwijswoorden',      en: 'Referring words',   emoji: '🔗',
                   tipNl: 'Woorden als hij, die, dat en daarom verwijzen terug. Lees de zin ervoor nog eens.',
                   tipEn: 'Words like he, that and therefore point back. Read the sentence before it again.' },
  structuur:     { nl: 'Tekststructuur',      en: 'Text structure',    emoji: '🧱',
                   tipNl: 'Let op signaalwoorden: maar, omdat, daardoor, ten slotte. Die verraden hoe de tekst in elkaar zit.',
                   tipEn: 'Watch the signal words: but, because, so, finally. They show how the text is built.' },
  doel:          { nl: 'Doel van de schrijver', en: 'Author’s purpose', emoji: '🎯',
                   tipNl: 'Wil de schrijver iets uitleggen, iets laten geloven, of je laten lachen?',
                   tipEn: 'Does the writer want to explain, to convince, or to make you laugh?' },
  feitmening:    { nl: 'Feit of mening',      en: 'Fact or opinion',   emoji: '⚖️',
                   tipNl: 'Een feit kun je nameten of opzoeken. Een mening is wat iemand vindt.',
                   tipEn: 'A fact can be measured or looked up. An opinion is what somebody thinks.' },
  samenvatten:   { nl: 'Samenvatten',         en: 'Summarising',       emoji: '📝',
                   tipNl: 'Zoek per alinea de belangrijkste zin. Die zin samen vormen de samenvatting.',
                   tipEn: 'Find the most important sentence in each paragraph. Together they are the summary.' }
};
