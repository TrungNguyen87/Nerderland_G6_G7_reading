/* =====================================================================
   Leeskampioen - data bootstrap
   Loaded BEFORE any stories.*.js file.
   Every topic file calls addStories([...]) to register its stories.
   ===================================================================== */

window.STORY_DB = [];

window.addStories = function (list) {
  list.forEach(function (s) { window.STORY_DB.push(s); });
};

/* The six worlds the child can choose from.
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
    subNl: 'Raadsels oplossen en sporen volgen', subEn: 'Solving riddles and following clues' }
];

/* Difficulty ladder. Stops at group 7 on purpose. */
window.LEVELS = [
  { level: 1, avi: 'AVI M6', nl: 'Startklaar',  en: 'Warm-up',    stars: '⭐',       hue: 145 },
  { level: 2, avi: 'AVI E6', nl: 'Doorzetter',  en: 'Challenger', stars: '⭐⭐',     hue: 40 },
  { level: 3, avi: 'AVI M7', nl: 'Kampioen',    en: 'Champion',   stars: '⭐⭐⭐',   hue: 350 }
];

/* Reading skills we measure, so the report shows WHAT to practise. */
window.SKILLS = {
  letterlijk:   { nl: 'Letterlijk lezen',   en: 'Literal reading',   emoji: '🔎',
                  tipNl: 'Het antwoord staat gewoon in de tekst. Zoek het woord op.',
                  tipEn: 'The answer is right there in the text. Find the word.' },
  gevolgtrekking:{ nl: 'Conclusie trekken', en: 'Inference',         emoji: '🧠',
                  tipNl: 'Het antwoord staat er niet letterlijk. Combineer twee zinnen.',
                  tipEn: 'The answer is not written down. Combine two sentences.' },
  woordenschat: { nl: 'Woordenschat',       en: 'Vocabulary',        emoji: '📖',
                  tipNl: 'Kijk naar de zin eromheen om de betekenis te raden.',
                  tipEn: 'Look at the sentence around it to guess the meaning.' },
  volgorde:     { nl: 'Volgorde',           en: 'Sequencing',        emoji: '🔢',
                  tipNl: 'Zoek woorden als eerst, daarna, toen en ten slotte.',
                  tipEn: 'Look for words like first, then, next and finally.' },
  hoofdgedachte:{ nl: 'Hoofdgedachte',      en: 'Main idea',         emoji: '💡',
                  tipNl: 'Waar gaat het hele stuk over? Niet over een klein detail.',
                  tipEn: 'What is the whole text about? Not one small detail.' }
};
