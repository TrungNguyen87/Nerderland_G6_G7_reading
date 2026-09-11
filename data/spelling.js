/* =====================================================================
   Spellingkampioen - de spellingregels van groep 6 en 7.
   Loaded BEFORE data/spelling.sets.js, which registers the exercises.

   Elke categorie is één spellingregel. De regel staat er in gewone taal
   bij, zodat een kind (of een ouder) kan nalezen waaróm iets zo hoort.
   ===================================================================== */

window.SPELL_SETS = [];

window.addSpelling = function (list) {
  list.forEach(function (s) { window.SPELL_SETS.push(s); });
};

window.SPELL_CATS = [
  {
    id: 'eiij', emoji: '🌧️', hue: 210,
    nl: 'ei of ij', en: 'ei or ij',
    subNl: 'De korte ei en de lange ij', subEn: 'The short ei and the long ij',
    ruleNl: 'Ei en ij klinken precies hetzelfde, dus je moet ze uit je hoofd leren. Twee hulpjes: woorden die eindigen op <b>-lijk</b> (mogelijk, eindelijk) en op <b>-tijd</b> krijgen altijd de lange ij. En bij <b>ei</b> hoort een klein rijtje beeldwoorden: ei, trein, klein, geit, meisje, eiland.',
    ruleEn: 'Ei and ij sound exactly the same in Dutch, so they have to be learned by heart. Two helpers: words ending in <b>-lijk</b> and <b>-tijd</b> always take the long ij. And a small picture list belongs to <b>ei</b>: egg, train, small, goat, girl, island.'
  },
  {
    id: 'auou', emoji: '🎈', hue: 25,
    nl: 'au of ou', en: 'au or ou',
    subNl: 'De blauwe pauw en de oude vrouw', subEn: 'The blue peacock and the old woman',
    ruleNl: 'Au en ou klinken hetzelfde. Onthoud het zinnetje: <b>"Een blauwe pauw met een nauwe kous"</b> — die woorden hebben <b>au</b>. De rest heeft bijna altijd <b>ou</b>: oud, koud, hout, zout, goud, fout, vrouw, touw.',
    ruleEn: 'Au and ou sound the same. Remember the sentence <b>"a blue peacock in a narrow stocking"</b> — those words take <b>au</b>. Almost everything else takes <b>ou</b>: old, cold, wood, salt, gold, wrong.'
  },
  {
    id: 'dt', emoji: '✍️', hue: 355,
    nl: 'Werkwoorden: d, t of dt', en: 'Verbs: d, t or dt',
    subNl: 'Hij wordt, ik word, word jij?', subEn: 'He becomes, I become, do you become?',
    ruleNl: '<b>Ik</b> + stam (ik word). <b>Hij, zij, het, jij</b> + stam + t (hij wordt). Staat <b>jij</b> ná het werkwoord, dan valt de t weg: word jij? In de verleden tijd gebruik je <b>\'t kofschip</b>: eindigt de stam op t, k, f, s, ch of p, dan komt er <b>-te(n)</b> en <b>-t</b> (werkte, gewerkt). Anders <b>-de(n)</b> en <b>-d</b> (hoorde, gehoord).',
    ruleEn: '<b>I</b> + stem. <b>He, she, it, you</b> + stem + t. If <b>jij</b> comes after the verb, the t disappears. In the past tense use the memory word <b>\'t kofschip</b>: if the stem ends in t, k, f, s, ch or p you add <b>-te(n)</b> and <b>-t</b>; otherwise <b>-de(n)</b> and <b>-d</b>.'
  },
  {
    id: 'dubbel', emoji: '🔁', hue: 145,
    nl: 'Bomen of bommen', en: 'One letter or two',
    subNl: 'Open en gesloten lettergrepen', subEn: 'Open and closed syllables',
    ruleNl: 'Hoor je een <b>korte klank</b> (bom, kat, pop), dan verdubbel je de medeklinker: bom<b>m</b>en, kat<b>t</b>en, pop<b>p</b>en. Hoor je een <b>lange klank</b> (boom, maan, poot), dan gooi je juist een klinker weg: b<b>o</b>men, m<b>a</b>nen, p<b>o</b>ten.',
    ruleEn: 'A <b>short</b> vowel sound doubles the consonant: bom → bommen. A <b>long</b> vowel sound drops one vowel instead: boom → bomen.'
  },
  {
    id: 'verkleinwoord', emoji: '🐣', hue: 55,
    nl: 'Verkleinwoorden', en: 'Diminutives',
    subNl: '-je, -tje, -pje, -kje of -etje', subEn: 'Which little ending fits?',
    ruleNl: 'Na b, d, f, g, k, p, s, t en ch komt <b>-je</b> (boekje, kopje). Na een klinker of l, n, r, w met een lange klank komt <b>-tje</b> (stoeltje, eitje). Na een <b>m</b> met een lange klank komt <b>-pje</b> (boompje, armpje). Na een <b>korte klank</b> + l, m, n, r of ng komt <b>-etje</b> (balletje, mannetje). En na een onbeklemtoonde <b>-ing</b> komt <b>-kje</b> (koninkje).',
    ruleEn: 'The little ending changes with the sound before it: -je, -tje, -pje, -etje or -kje. A short vowel before l, m, n, r or ng gives -etje; an unstressed -ing gives -kje.'
  },
  {
    id: 'samenstelling', emoji: '🔗', hue: 285,
    nl: 'Samenstellingen', en: 'Compound words',
    subNl: 'Pannenkoek, verkeersbord of voetbal?', subEn: 'With -n, with -s, or with nothing?',
    ruleNl: 'Twee woorden aan elkaar. Soms komt er een letter tussen. <b>Tussen-n</b> als het eerste woord alleen een meervoud op -en heeft: pan → pannen → <b>pannen</b>koek. <b>Tussen-s</b> als je die s duidelijk hoort: verkeer<b>s</b>bord, dorp<b>s</b>straat. En vaak komt er helemaal niets tussen: voetbal, schoolplein.',
    ruleEn: 'Two words glued together, sometimes with a letter in between: an <b>-n</b> when the first word has only an -en plural, an <b>-s</b> when you clearly hear it, and often nothing at all.'
  },
  {
    id: 'hoofdletter', emoji: '🔠', hue: 190,
    nl: 'Hoofdletters en leestekens', en: 'Capitals and punctuation',
    subNl: 'Namen, landen, punten en vraagtekens', subEn: 'Names, countries, dots and question marks',
    ruleNl: 'Een hoofdletter aan het begin van een zin, bij <b>namen</b> (Daan, Amsterdam), bij <b>landen en talen</b> (Nederland, Nederlands) en bij <b>feesten</b> (Kerstmis, Pasen). Let op: <b>dagen en maanden krijgen géén hoofdletter</b> — maandag, juli. Een vraag eindigt op een <b>vraagteken</b>, een uitroep op een <b>uitroepteken</b>.',
    ruleEn: 'Capitals start a sentence and mark names, countries, languages and festivals. Careful: in Dutch the days and months take a small letter. Questions end in a question mark.'
  },
  {
    id: 'achtervoegsel', emoji: '🧩', hue: 320,
    nl: 'Stille stukjes achteraan', en: 'Tricky endings',
    subNl: '-lijk, -ig, -tie en -isch', subEn: '-lijk, -ig, -tie and -isch',
    ruleNl: 'Je hoort iets anders dan je schrijft. Hoor je "luk", dan schrijf je <b>-lijk</b> (vriendelijk, natuurlijk). Hoor je "ug", dan schrijf je <b>-ig</b> (rustig, handig). Hoor je "tsie", dan schrijf je <b>-tie</b> (politie, vakantie). Hoor je "ies" aan het eind van een moeilijk woord, dan schrijf je <b>-isch</b> (logisch, fantastisch).',
    ruleEn: 'You hear something different from what you write: "luk" is written -lijk, "ug" is written -ig, "tsie" is written -tie and "ies" is written -isch.'
  },
  {
    id: 'tremaApostrof', emoji: '✨', hue: 100,
    nl: 'Trema en apostrof', en: 'Diaeresis and apostrophe',
    subNl: "Foto's, knieën en oma's", subEn: 'Photos, knees and grandmas',
    ruleNl: 'Een <b>trema</b> (twee puntjes) zet je als twee klinkers anders per ongeluk samen één klank worden: kni<b>e</b>ën, idee<b>ë</b>n, twee<b>ë</b>n. Een <b>apostrof</b> zet je in het meervoud van woorden die eindigen op a, i, o, u of y: foto\'s, oma\'s, taxi\'s, menu\'s, baby\'s. Eindigt het woord op een andere letter, dan komt er gewoon -s of -en bij: tafels, huizen.',
    ruleEn: 'A <b>diaeresis</b> (two dots) splits two vowels that would otherwise melt into one sound. An <b>apostrophe</b> makes the plural of words ending in a, i, o, u or y.'
  },
  {
    id: 'luisterwoord', emoji: '🎧', hue: 240,
    nl: 'Dictee: luister en typ', en: 'Dictation: listen and type',
    subNl: 'Moeilijke woorden uit groep 6 en 7', subEn: 'Hard words from group 6 and 7',
    ruleNl: 'Hier hoor je het woord en typ je het zelf. Zeg het woord eerst in stukjes in je hoofd: <b>ge-beur-de</b>, <b>bi-bli-o-theek</b>. Twijfel je? Klik op "Luister nog eens" en luister naar het laatste stukje.',
    ruleEn: 'Here you hear the word and type it yourself. Say the word in pieces in your head first. In doubt, listen again and pay attention to the last piece.'
  }
];
