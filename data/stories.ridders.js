/* Wereld 4 - Ridders & Vroeger */
addStories([
{
  id: 'ridders-1', topic: 'ridders', level: 1, emoji: '🛡️', scene: 'castle',
  title: { nl: 'Schildknaap Joris', en: 'Joris the squire' },
  text: {
    nl: [
      "Joris is elf jaar en hij wil ridder worden. Maar eerst moet hij zeven jaar schildknaap zijn.",
      "Elke ochtend staat hij op als het nog donker is. Hij poetst het harnas van ridder Willem met zand en azijn, want anders gaat het roesten. Daarna borstelt hij de paarden.",
      "'s Middags leert Joris vechten met een houten zwaard. Het is zwaarder dan een echt zwaard. Zo worden zijn armen sterk.",
      "Hij leert ook tafelmanieren. Een ridder moet netjes kunnen eten bij de heer van het kasteel. Joris mag nooit met zijn mouw zijn mond afvegen.",
      "Het zwaarste is het wachten. Pas als hij eenentwintig is, mag hij geridderd worden. Dan tikt de heer met een zwaard op zijn schouders.",
      "'s Avonds, als iedereen slaapt, oefent Joris nog even in de stal. Het paard kijkt hem slaperig aan. \"Nog zes jaar\", fluistert Joris. \"Nog maar zes jaar.\""
    ],
    en: [
      "Joris is eleven years old and he wants to become a knight. But first he has to be a squire for seven years.",
      "Every morning he gets up while it is still dark. He polishes Sir Willem’s armour with sand and vinegar, because otherwise it will rust. After that he brushes the horses.",
      "In the afternoon Joris learns to fight with a wooden sword. It is heavier than a real sword. That way his arms grow strong.",
      "He also learns table manners. A knight must be able to eat neatly at the table of the lord of the castle. Joris must never wipe his mouth with his sleeve.",
      "The hardest part is the waiting. Only when he is twenty-one may he be knighted. Then the lord taps his shoulders with a sword.",
      "In the evening, when everybody is asleep, Joris practises a little longer in the stable. The horse looks at him sleepily. \"Six more years,\" Joris whispers. \"Only six more years.\""
    ]
  },
  words: [
    { nl: 'schildknaap', en: 'squire', defNl: 'een jongen die leert om ridder te worden', defEn: 'a boy learning to become a knight' },
    { nl: 'harnas', en: 'armour', defNl: 'het metalen pak van een ridder', defEn: 'the metal suit of a knight' },
    { nl: 'geridderd', en: 'knighted', defNl: 'officieel ridder gemaakt', defEn: 'officially made a knight' }
  ],
  questions: [
    { id: 'q1', type: 'mc', skill: 'letterlijk',
      q: { nl: 'Hoe oud is Joris?', en: 'How old is Joris?' },
      options: [ { nl: 'Elf jaar', en: 'Eleven' }, { nl: 'Zeven jaar', en: 'Seven' },
                 { nl: 'Eenentwintig jaar', en: 'Twenty-one' }, { nl: 'Zes jaar', en: 'Six' } ],
      answer: 0,
      explain: { nl: 'De eerste zin: "Joris is elf jaar."', en: 'The first line: "Joris is eleven years old."' } },
    { id: 'q2', type: 'mc', skill: 'gevolgtrekking',
      q: { nl: 'Waarom oefent Joris met een houten zwaard dat zwaarder is dan een echt zwaard?',
           en: 'Why does Joris practise with a wooden sword heavier than a real one?' },
      options: [
        { nl: 'Zodat zijn armen sterker worden', en: 'So his arms get stronger' },
        { nl: 'Omdat echte zwaarden te duur zijn', en: 'Because real swords are too expensive' },
        { nl: 'Omdat hout mooier is', en: 'Because wood is prettier' },
        { nl: 'Zodat hij niemand pijn doet', en: 'So he does not hurt anyone' }
      ], answer: 0,
      explain: { nl: 'De tekst zegt: "Zo worden zijn armen sterk."', en: 'The text says: "That way his arms grow strong."' } },
    { id: 'q3', type: 'tf', skill: 'letterlijk',
      q: { nl: 'Joris moet nog zes jaar wachten voordat hij ridder wordt.',
           en: 'Joris has to wait six more years before he becomes a knight.' },
      answer: true,
      explain: { nl: 'Hij fluistert het zelf tegen het paard: "Nog zes jaar."',
                 en: 'He whispers it to the horse himself: "Six more years."' } },
    { id: 'q4', type: 'gap', skill: 'woordenschat',
      q: { nl: 'Een harnas is ___.', en: 'Armour is ___.' },
      options: [
        { nl: 'het metalen pak van een ridder', en: 'the metal suit of a knight' },
        { nl: 'een groot paard', en: 'a big horse' },
        { nl: 'een deel van het kasteel', en: 'a part of the castle' },
        { nl: 'een houten zwaard', en: 'a wooden sword' }
      ], answer: 0,
      explain: { nl: 'In de tekst poetst Joris het harnas zodat het niet roest. Metaal dus.',
                 en: 'In the text Joris polishes the armour so it does not rust. So it is metal.' } },
    { id: 'q5', type: 'order', skill: 'volgorde',
      q: { nl: 'Zet de dag van Joris op volgorde.', en: 'Put Joris’ day in order.' },
      items: [
        { nl: 'Hij staat op als het nog donker is.', en: 'He gets up while it is still dark.' },
        { nl: 'Hij poetst het harnas en borstelt de paarden.', en: 'He polishes the armour and brushes the horses.' },
        { nl: '’s Middags oefent hij met het houten zwaard.', en: 'In the afternoon he practises with the wooden sword.' },
        { nl: '’s Avonds oefent hij stiekem in de stal.', en: 'In the evening he secretly practises in the stable.' }
      ], answer: [0, 1, 2, 3],
      explain: { nl: 'Ochtend, klusjes, middag, avond. Let op de tijdwoorden.',
                 en: 'Morning, chores, afternoon, evening. Watch the time words.' } }
  ]
},

{
  id: 'ridders-2', topic: 'ridders', level: 2, emoji: '🏰', scene: 'castle',
  title: { nl: 'Koud in het kasteel', en: 'Cold in the castle' },
  text: {
    nl: [
      "Op plaatjes ziet een kasteel er prachtig uit: hoge torens, wapperende vlaggen en een gracht eromheen. Wie er echt zou wonen, zou vooral één ding merken: het is er ijskoud.",
      "De muren zijn soms wel drie meter dik. Dat is goed tegen aanvallen, maar steen houdt de kou vast. In de winter vroor het binnen bijna net zo hard als buiten. Alleen de zaal met de grote open haard was warm, en dan nog alleen aan de kant waar het vuur brandde. Je voorkant gloeide terwijl je rug bevroor.",
      "Ramen hadden lange tijd geen glas. Er zaten luiken voor van hout. Deed je ze dicht, dan was het warm maar aardedonker. Deed je ze open, dan had je licht en tocht tegelijk.",
      "Daarom hingen er dikke wandkleden aan de muur. Die waren niet alleen mooi; ze hielden de kou een beetje tegen. Vloeren werden bedekt met stro en gedroogde kruiden tegen de stank.",
      "Slapen deed bijna niemand alleen. Bedienden sliepen met z'n allen in de grote zaal, dicht bij elkaar en dicht bij het vuur. Alleen de heer en vrouwe hadden een eigen kamer met een hemelbed. Die gordijnen rond het bed waren geen luxe, maar pure noodzaak: ze hielden de warmte binnen.",
      "Een kasteel was dus vooral een sterk gebouw, geen gezellig huis."
    ],
    en: [
      "In pictures a castle looks wonderful: tall towers, flapping flags and a moat around it. Anyone who actually lived there would notice one thing above all: it is freezing.",
      "The walls are sometimes three metres thick. That is good against attacks, but stone holds on to the cold. In winter it froze inside almost as hard as outside. Only the hall with the big fireplace was warm, and even then only on the side where the fire burned. Your front glowed while your back froze.",
      "For a long time windows had no glass. They had wooden shutters in front. If you closed them it was warm but pitch dark. If you opened them you had light and a draught at the same time.",
      "That is why thick tapestries hung on the walls. They were not only beautiful; they kept out some of the cold. Floors were covered with straw and dried herbs against the smell.",
      "Almost nobody slept alone. Servants slept all together in the great hall, close to each other and close to the fire. Only the lord and lady had their own room with a four-poster bed. The curtains around that bed were not a luxury but pure necessity: they kept the warmth in.",
      "So a castle was above all a strong building, not a cosy home."
    ]
  },
  words: [
    { nl: 'gracht', en: 'moat', defNl: 'brede sloot met water rond een kasteel', defEn: 'a wide ditch with water around a castle' },
    { nl: 'wandkleed', en: 'tapestry', defNl: 'groot geweven doek aan de muur', defEn: 'a large woven cloth on the wall' },
    { nl: 'noodzaak', en: 'necessity', defNl: 'iets wat echt nodig is', defEn: 'something that is really needed' }
  ],
  questions: [
    { id: 'q1', type: 'mc', skill: 'gevolgtrekking',
      q: { nl: 'Waarom was het binnen zo koud, ondanks de dikke muren?',
           en: 'Why was it so cold inside, despite the thick walls?' },
      options: [
        { nl: 'Omdat steen de kou juist vasthoudt', en: 'Because stone holds on to the cold' },
        { nl: 'Omdat er geen dak op zat', en: 'Because there was no roof' },
        { nl: 'Omdat de gracht bevroor', en: 'Because the moat froze' },
        { nl: 'Omdat er te veel mensen woonden', en: 'Because too many people lived there' }
      ], answer: 0,
      explain: { nl: 'Alinea 2: dikke muren zijn goed tegen aanvallen, maar steen houdt kou vast.',
                 en: 'Paragraph 2: thick walls are good against attacks, but stone holds the cold.' } },
    { id: 'q2', type: 'mc', skill: 'letterlijk',
      q: { nl: 'Wat lag er op de vloer?', en: 'What was on the floor?' },
      options: [
        { nl: 'Stro en gedroogde kruiden', en: 'Straw and dried herbs' },
        { nl: 'Tapijt en kussens', en: 'Carpet and cushions' },
        { nl: 'Zand en schelpen', en: 'Sand and shells' },
        { nl: 'Niets', en: 'Nothing' }
      ], answer: 0,
      explain: { nl: 'Alinea 4: vloeren werden bedekt met stro en gedroogde kruiden tegen de stank.',
                 en: 'Paragraph 4: floors were covered with straw and dried herbs against the smell.' } },
    { id: 'q3', type: 'mc', skill: 'gevolgtrekking',
      q: { nl: 'Waarom zaten er gordijnen rond het bed van de heer?',
           en: 'Why were there curtains around the lord’s bed?' },
      options: [
        { nl: 'Om de warmte binnen te houden', en: 'To keep the warmth in' },
        { nl: 'Om mooi te doen tegen gasten', en: 'To show off to guests' },
        { nl: 'Om het licht buiten te houden', en: 'To keep the light out' },
        { nl: 'Om de wandkleden te beschermen', en: 'To protect the tapestries' }
      ], answer: 0,
      explain: { nl: 'De tekst noemt het "pure noodzaak: ze hielden de warmte binnen".',
                 en: 'The text calls it "pure necessity: they kept the warmth in".' } },
    { id: 'q4', type: 'tf', skill: 'letterlijk',
      q: { nl: 'De ramen van een kasteel hadden meteen al glas.', en: 'Castle windows had glass right from the start.' },
      answer: false,
      explain: { nl: 'Lange tijd zat er alleen hout voor: luiken.', en: 'For a long time there were only wooden shutters.' } },
    { id: 'q5', type: 'mc', skill: 'hoofdgedachte',
      q: { nl: 'Welke zin vat de tekst het beste samen?', en: 'Which sentence sums up the text best?' },
      options: [
        { nl: 'Een kasteel was sterk, maar niet fijn om in te wonen', en: 'A castle was strong, but not nice to live in' },
        { nl: 'Kastelen hadden altijd mooie vlaggen', en: 'Castles always had beautiful flags' },
        { nl: 'Bedienden hadden het beter dan de heer', en: 'Servants were better off than the lord' },
        { nl: 'Wandkleden zijn kunstwerken', en: 'Tapestries are works of art' }
      ], answer: 0,
      explain: { nl: 'Dat staat bijna letterlijk in de slotzin.', en: 'That is almost literally the closing sentence.' } }
  ]
},

{
  id: 'ridders-3', topic: 'ridders', level: 3, emoji: '⛵', scene: 'harbour',
  title: { nl: 'Twee kanten van de Gouden Eeuw', en: 'Two sides of the Golden Age' },
  text: {
    nl: [
      "In de zeventiende eeuw was de Republiek der Nederlanden een van de rijkste gebieden ter wereld. In Amsterdam werden grachtenpanden gebouwd, schilders als Rembrandt kregen opdrachten en in de haven lagen honderden schepen. Die tijd kreeg later een mooie naam: de Gouden Eeuw.",
      "Een groot deel van dat geld kwam van de VOC, de Verenigde Oostindische Compagnie. Dat was het eerste bedrijf ter wereld waarvan gewone mensen aandelen konden kopen. Je legde geld in, de schepen voeren naar Azië, en als ze terugkwamen met peper, nootmuskaat en zijde kreeg je een deel van de winst. Kwam een schip niet terug, dan was je geld weg.",
      "Zo werd Amsterdam de handelsstad van Europa. Maar de winst had een schaduwkant die lang niet in de schoolboeken stond. Om specerijen goedkoop te krijgen, nam de VOC eilanden met geweld in. Bewoners die niet mee wilden werken, werden verjaagd of gedood. De West-Indische Compagnie verscheepte bovendien meer dan een half miljoen tot slaaf gemaakte mensen over de Atlantische Oceaan.",
      "Historici noemen die periode daarom steeds vaker gewoon \"de zeventiende eeuw\". Niet om Rembrandt weg te poetsen, maar omdat het woord \"gouden\" maar één kant laat zien. Voor de kooplieden in Amsterdam was het goud. Voor de mensen op Banda of in Suriname was het dat niet.",
      "Geschiedenis is zelden helemaal mooi of helemaal lelijk. Wie hem eerlijk wil begrijpen, moet twee verhalen tegelijk kunnen vasthouden: de rijkdom én de prijs die anderen daarvoor betaalden."
    ],
    en: [
      "In the seventeenth century the Dutch Republic was one of the richest areas in the world. In Amsterdam canal houses were built, painters like Rembrandt received commissions and hundreds of ships lay in the harbour. That period later got a beautiful name: the Golden Age.",
      "A large part of that money came from the VOC, the Dutch East India Company. It was the first company in the world in which ordinary people could buy shares. You put money in, the ships sailed to Asia, and when they came back with pepper, nutmeg and silk you got a share of the profit. If a ship did not return, your money was gone.",
      "That is how Amsterdam became the trading city of Europe. But the profit had a dark side that for a long time was not in the school books. To get spices cheaply, the VOC took islands by force. Inhabitants who would not cooperate were driven away or killed. The West India Company also shipped more than half a million enslaved people across the Atlantic Ocean.",
      "That is why historians increasingly call the period simply \"the seventeenth century\". Not to erase Rembrandt, but because the word \"golden\" shows only one side. For the merchants in Amsterdam it was gold. For the people on Banda or in Suriname it was not.",
      "History is rarely entirely beautiful or entirely ugly. Anyone who wants to understand it honestly has to hold two stories at once: the wealth and the price other people paid for it."
    ]
  },
  words: [
    { nl: 'aandeel', en: 'share', defNl: 'een stukje van een bedrijf dat je kunt kopen', defEn: 'a piece of a company you can buy' },
    { nl: 'specerijen', en: 'spices', defNl: 'peper, kaneel en nootmuskaat om eten mee te kruiden', defEn: 'pepper, cinnamon and nutmeg used to flavour food' },
    { nl: 'schaduwkant', en: 'dark side', defNl: 'het nare deel van iets moois', defEn: 'the unpleasant part of something good' }
  ],
  questions: [
    { id: 'q1', type: 'mc', skill: 'letterlijk',
      q: { nl: 'Wat was er bijzonder aan de VOC?', en: 'What was special about the VOC?' },
      options: [
        { nl: 'Gewone mensen konden er aandelen van kopen', en: 'Ordinary people could buy shares in it' },
        { nl: 'Het was het grootste schilderij van Rembrandt', en: 'It was Rembrandt’s largest painting' },
        { nl: 'Het was een school in Amsterdam', en: 'It was a school in Amsterdam' },
        { nl: 'Het verkocht alleen kaas', en: 'It only sold cheese' }
      ], answer: 0,
      explain: { nl: 'Alinea 2: het eerste bedrijf ter wereld waarvan gewone mensen aandelen konden kopen.',
                 en: 'Paragraph 2: the first company in the world in which ordinary people could buy shares.' } },
    { id: 'q2', type: 'mc', skill: 'gevolgtrekking',
      q: { nl: 'Waarom zeggen historici liever "de zeventiende eeuw" dan "de Gouden Eeuw"?',
           en: 'Why do historians prefer "the seventeenth century" to "the Golden Age"?' },
      options: [
        { nl: 'Omdat "gouden" maar één kant van het verhaal laat zien', en: 'Because "golden" shows only one side of the story' },
        { nl: 'Omdat er toen geen goud werd gevonden', en: 'Because no gold was found back then' },
        { nl: 'Omdat de eeuw korter was dan honderd jaar', en: 'Because the century was shorter than a hundred years' },
        { nl: 'Omdat Rembrandt niet beroemd genoeg was', en: 'Because Rembrandt was not famous enough' }
      ], answer: 0,
      explain: { nl: 'Dat staat in alinea 4, met de uitleg dat het voor anderen geen goud was.',
                 en: 'That is in paragraph 4, explaining that for others it was not gold.' } },
    { id: 'q3', type: 'tf', skill: 'gevolgtrekking',
      q: { nl: 'De schrijver vindt dat we Rembrandt moeten vergeten.', en: 'The writer thinks we should forget Rembrandt.' },
      answer: false,
      explain: { nl: 'Er staat juist: "Niet om Rembrandt weg te poetsen." Het gaat om beide verhalen.',
                 en: 'It says: "Not to erase Rembrandt." It is about both stories.' } },
    { id: 'q4', type: 'match', skill: 'woordenschat',
      q: { nl: 'Koppel elk woord aan de betekenis.', en: 'Match each word to its meaning.' },
      pairs: [
        { word: { nl: 'aandeel', en: 'share' }, meaning: { nl: 'een stukje van een bedrijf', en: 'a piece of a company' } },
        { word: { nl: 'specerijen', en: 'spices' }, meaning: { nl: 'peper, kaneel en nootmuskaat', en: 'pepper, cinnamon and nutmeg' } },
        { word: { nl: 'schaduwkant', en: 'dark side' }, meaning: { nl: 'het nare deel van iets moois', en: 'the ugly part of something good' } },
        { word: { nl: 'koopman', en: 'merchant' }, meaning: { nl: 'iemand die handelt in spullen', en: 'someone who trades in goods' } }
      ],
      explain: { nl: 'Deze woorden hoor je vaak bij dit onderwerp.', en: 'You often hear these words with this topic.' } },
    { id: 'q5', type: 'mc', skill: 'hoofdgedachte',
      q: { nl: 'Wat is de hoofdgedachte van de tekst?', en: 'What is the main idea of the text?' },
      options: [
        { nl: 'Je moet de rijkdom én de prijs die anderen betaalden samen bekijken',
          en: 'You have to look at the wealth and the price others paid together' },
        { nl: 'De VOC verdiende vooral geld met zijde', en: 'The VOC mostly earned money from silk' },
        { nl: 'Amsterdam heeft mooie grachtenpanden', en: 'Amsterdam has beautiful canal houses' },
        { nl: 'Schepen vergingen vaak op zee', en: 'Ships often sank at sea' }
      ], answer: 0,
      explain: { nl: 'De slotalinea zegt: je moet twee verhalen tegelijk kunnen vasthouden.',
                 en: 'The closing paragraph says: you must be able to hold two stories at once.' } }
  ]
}
]);
