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

/* --- Niveau 4 en 5: langere teksten met Cito-achtige vragen --- */
addStories([
{
  id: 'ridders-4', topic: 'ridders', level: 4, emoji: '🐀', scene: 'castle',
  title: { nl: 'Het jaar dat de klokken bleven luiden', en: 'The year the bells kept tolling' },
  text: {
    nl: [
      "In het najaar van 1347 meerde een schip aan in de haven van Messina, op Sicilië. De meeste bemanningsleden waren dood of stervend. Wat er verder aan boord zat, zag niemand: vlooien, in de vacht van ratten, en in die vlooien een bacterie. Binnen vier jaar zou ongeveer een derde van alle Europeanen niet meer in leven zijn.",
      "De ziekte kreeg later de naam de zwarte dood. Wie besmet raakte, kreeg koorts en dikke, pijnlijke bulten in de hals en de liezen. Vaak was iemand binnen een week dood. Omdat niemand wist waar het vandaan kwam, gingen de wildste verklaringen rond. Sommigen wezen naar de stand van de planeten, anderen naar slechte lucht, en in veel steden kregen onschuldige joodse inwoners de schuld, met vreselijke gevolgen.",
      "Toch deden mensen ook dingen die achteraf slim blijken. In de havenstad Ragusa, het huidige Dubrovnik, moesten schepen uit besmette gebieden dertig dagen buiten de haven wachten. Later werd dat veertig dagen: quaranta giorni in het Italiaans. Van dat woord komt ons woord quarantaine.",
      "De gevolgen waren enorm, en niet alleen verdrietig. Vóór de pest waren er veel meer boeren dan er werk was. Daarna waren er juist te weinig handen. Wie kon ploegen of metselen, kon opeens meer loon vragen, en durfde weg te lopen naar een heer die beter betaalde. Landheren probeerden dat met wetten te verbieden, maar de rekensom was sterker dan de wet.",
      "Ook in de kunst is het te zien. Schilders gingen de dood afbeelden als een skelet dat met iedereen danst: de bedelaar, de bisschop en de koning door elkaar. Die dodendans zegt precies wat mensen toen voelden: de ziekte trok zich niets aan van rijkdom of rang.",
      "Eeuwen later, in 1894, vond de Zwitsers-Franse arts Alexandre Yersin in Hongkong eindelijk de bacterie zelf. Pas toen werd duidelijk waarom quarantaine en het bestrijden van ratten hielpen. Mensen in de veertiende eeuw wisten dus niet wát ze bestreden. Ze zagen alleen dát het soms hielp, en dat was genoeg om het te blijven doen."
    ],
    en: [
      "In the autumn of 1347 a ship tied up in the harbour of Messina, on Sicily. Most of the crew were dead or dying. What else was on board nobody saw: fleas, in the fur of rats, and inside those fleas a bacterium. Within four years about a third of all Europeans would no longer be alive.",
      "The disease was later called the Black Death. Anyone infected got a fever and thick, painful lumps in the neck and the groin. Often a person was dead within a week. Because nobody knew where it came from, the wildest explanations went round. Some pointed at the position of the planets, others at bad air, and in many cities innocent Jewish inhabitants were blamed, with terrible consequences.",
      "Yet people also did things that turn out to have been clever. In the port of Ragusa, today’s Dubrovnik, ships from infected areas had to wait outside the harbour for thirty days. Later that became forty days: quaranta giorni in Italian. From that word comes our word quarantine.",
      "The consequences were enormous, and not only sad. Before the plague there were far more farm workers than there was work. Afterwards there were too few hands. Anyone who could plough or lay bricks could suddenly ask for more pay, and dared to walk off to a lord who paid better. Landowners tried to forbid that by law, but the sums were stronger than the law.",
      "You can see it in art as well. Painters began to show death as a skeleton dancing with everybody: the beggar, the bishop and the king all mixed together. That dance of death says exactly what people felt at the time: the disease cared nothing for wealth or rank.",
      "Centuries later, in 1894, the Swiss-French doctor Alexandre Yersin finally found the bacterium itself, in Hong Kong. Only then did it become clear why quarantine and fighting rats had helped. So people in the fourteenth century did not know what they were fighting. They only saw that it sometimes helped, and that was enough to keep doing it."
    ]
  },
  words: [
    { nl: 'bacterie', en: 'bacterium', defNl: 'een piepklein levend wezen dat je alleen met een microscoop ziet', defEn: 'a tiny living thing you can only see with a microscope' },
    { nl: 'quarantaine', en: 'quarantine', defNl: 'een tijd apart blijven zodat je een ziekte niet doorgeeft', defEn: 'staying apart for a while so you do not pass on a disease' },
    { nl: 'landheer', en: 'landowner, lord', defNl: 'de rijke eigenaar van het land waarop boeren werkten', defEn: 'the rich owner of the land the farm workers worked on' }
  ],
  questions: [
    { id: 'q1', type: 'mc', skill: 'letterlijk',
      q: { nl: 'Wat zat er volgens de tekst echt achter de ziekte?',
           en: 'What was really behind the disease, according to the text?' },
      options: [
        { nl: 'Een bacterie in vlooien die op ratten leefden', en: 'A bacterium in fleas that lived on rats' },
        { nl: 'De stand van de planeten', en: 'The position of the planets' },
        { nl: 'Slechte lucht in de steden', en: 'Bad air in the cities' },
        { nl: 'Vuil water in de haven', en: 'Dirty water in the harbour' }
      ], answer: 0,
      explain: { nl: 'Alinea 1 noemt de vlooien, de ratten en de bacterie. De planeten en de lucht waren verklaringen die mensen tóén bedachten.',
                 en: 'Paragraph 1 names the fleas, the rats and the bacterium. The planets and the air were explanations people invented at the time.' } },
    { id: 'q2', type: 'mc', skill: 'woordenschat',
      q: { nl: 'Waar komt het woord "quarantaine" vandaan?', en: 'Where does the word "quarantine" come from?' },
      options: [
        { nl: 'Van het Italiaanse "quaranta giorni", veertig dagen', en: 'From the Italian "quaranta giorni", forty days' },
        { nl: 'Van de naam van de stad Ragusa', en: 'From the name of the city Ragusa' },
        { nl: 'Van de arts Alexandre Yersin', en: 'From the doctor Alexandre Yersin' },
        { nl: 'Van het Latijnse woord voor ziekte', en: 'From the Latin word for disease' }
      ], answer: 0,
      explain: { nl: 'Alinea 3 legt dat precies uit: eerst dertig dagen, later veertig, quaranta giorni.',
                 en: 'Paragraph 3 explains it: first thirty days, later forty, quaranta giorni.' } },
    { id: 'q3', type: 'mc', skill: 'gevolgtrekking',
      q: { nl: 'Waarom konden boeren na de pest meer loon vragen?',
           en: 'Why could farm workers ask for more pay after the plague?' },
      options: [
        { nl: 'Omdat er veel minder werkers over waren dan er werk was',
          en: 'Because far fewer workers were left than there was work' },
        { nl: 'Omdat de landheren aardiger werden', en: 'Because the landowners became kinder' },
        { nl: 'Omdat er een wet kwam die hogere lonen voorschreef', en: 'Because a law demanded higher wages' },
        { nl: 'Omdat het land vruchtbaarder was geworden', en: 'Because the land had become more fertile' }
      ], answer: 0,
      explain: { nl: 'Alinea 4: vóór de pest te veel boeren, daarna te weinig handen. Wie schaars is, kan meer vragen.',
                 en: 'Paragraph 4: too many workers before, too few hands after. Whoever is scarce can ask for more.' } },
    { id: 'q4', type: 'mc', skill: 'verwijswoorden',
      q: { nl: '"Landheren probeerden dat met wetten te verbieden." Wat is "dat"?',
           en: '"Landowners tried to forbid that by law." What is "that"?' },
      options: [
        { nl: 'Dat werkers meer loon vroegen en naar een andere heer vertrokken',
          en: 'That workers asked for more pay and left for another lord' },
        { nl: 'Dat schepen in quarantaine moesten', en: 'That ships had to go into quarantine' },
        { nl: 'Dat schilders de dodendans schilderden', en: 'That painters painted the dance of death' },
        { nl: 'Dat ratten de stad in kwamen', en: 'That rats came into the city' }
      ], answer: 0,
      explain: { nl: 'De zin ervoor gaat over meer loon vragen en weglopen naar een heer die beter betaalde.',
                 en: 'The sentence before is about asking more pay and walking off to a better-paying lord.' } },
    { id: 'q5', type: 'mc', skill: 'gevolgtrekking',
      q: { nl: 'Waarom schilderden kunstenaars de dood als een skelet dat met iedereen danst?',
           en: 'Why did artists paint death as a skeleton dancing with everybody?' },
      options: [
        { nl: 'Om te laten zien dat de ziekte arm en rijk even hard trof',
          en: 'To show that the disease struck rich and poor just as hard' },
        { nl: 'Omdat er in die tijd veel gedanst werd op feesten', en: 'Because there was a lot of dancing at parties then' },
        { nl: 'Omdat skeletten makkelijk te tekenen zijn', en: 'Because skeletons are easy to draw' },
        { nl: 'Om de koning belachelijk te maken', en: 'To make fun of the king' }
      ], answer: 0,
      explain: { nl: 'Alinea 5 zegt het zelf: de ziekte trok zich niets aan van rijkdom of rang.',
                 en: 'Paragraph 5 says it: the disease cared nothing for wealth or rank.' } },
    { id: 'q6', type: 'order', skill: 'volgorde',
      q: { nl: 'Zet de gebeurtenissen op volgorde van tijd.', en: 'Put the events in order of time.' },
      items: [
        { nl: 'Een schip met zieke bemanning meert aan in Messina (1347).', en: 'A ship with a sick crew ties up in Messina (1347).' },
        { nl: 'Ragusa laat schepen eerst dertig dagen buiten de haven wachten.', en: 'Ragusa makes ships wait outside the harbour for thirty days.' },
        { nl: 'Er zijn zo weinig werkers dat de lonen stijgen.', en: 'There are so few workers that wages rise.' },
        { nl: 'Alexandre Yersin vindt de bacterie in Hongkong (1894).', en: 'Alexandre Yersin finds the bacterium in Hong Kong (1894).' }
      ], answer: [0, 1, 2, 3],
      explain: { nl: 'Eerst het schip, dan de quarantainemaatregel, daarna de gevolgen voor het werk, en pas eeuwen later de ontdekking.',
                 en: 'First the ship, then the quarantine rule, then the effect on work, and only centuries later the discovery.' } },
    { id: 'q7', type: 'mc', skill: 'structuur',
      q: { nl: 'Alinea 3 begint met "Toch deden mensen ook dingen die achteraf slim blijken." Wat kondigt dat aan?',
           en: 'Paragraph 3 begins "Yet people also did things that turn out to have been clever." What does that announce?' },
      options: [
        { nl: 'Een tegenstelling met de onzin en de schuldigen uit alinea 2',
          en: 'A contrast with the nonsense and the blaming in paragraph 2' },
        { nl: 'Een opsomming van alle steden met een haven', en: 'A list of all cities with a harbour' },
        { nl: 'De oorzaak van de ziekte', en: 'The cause of the disease' },
        { nl: 'Een samenvatting van de hele tekst', en: 'A summary of the whole text' }
      ], answer: 0,
      explain: { nl: 'Het signaalwoord "toch" zet iets goeds tegenover het slechte dat er net stond.',
                 en: 'The signal word "yet" sets something good against the bad that came just before.' } },
    { id: 'q8', type: 'mc', skill: 'hoofdgedachte',
      q: { nl: 'Wat is de hoofdgedachte van deze tekst?', en: 'What is the main idea of this text?' },
      options: [
        { nl: 'De pest doodde een derde van Europa en veranderde daardoor werk, kunst en gezondheidszorg',
          en: 'The plague killed a third of Europe and so changed work, art and health care' },
        { nl: 'Ratten en vlooien zijn vieze dieren', en: 'Rats and fleas are dirty animals' },
        { nl: 'Alexandre Yersin was een beroemde arts', en: 'Alexandre Yersin was a famous doctor' },
        { nl: 'In Italië spreken ze een mooie taal', en: 'Italy has a beautiful language' }
      ], answer: 0,
      explain: { nl: 'De alinea’s gaan over de ziekte én over alles wat daarna veranderde. Dat samen is de kern.',
                 en: 'The paragraphs are about the disease and about everything that changed afterwards.' } }
  ]
},

{
  id: 'ridders-5', topic: 'ridders', level: 5, emoji: '🗿', scene: 'harbour',
  title: { nl: 'Twee verhalen bij één standbeeld', en: 'Two stories at one statue' },
  text: {
    nl: [
      "Op het plein staat hij al sinds 1841: een man van brons, één hand aan zijn zwaard, de blik op zee. Jan Pieterszoon Coen, gouverneur-generaal van de Verenigde Oost-Indische Compagnie. Op de sokkel staat één zin over handel en roem. Over wat er in 1621 op de Banda-eilanden gebeurde, staat er niets.",
      "Dat is wat de discussie zo taai maakt. Coen zorgde ervoor dat de VOC steenrijk werd. Hij stichtte de stad Batavia, nu Jakarta, en bouwde een netwerk van handelsposten dat eeuwen meeging. In de schoolboeken van honderd jaar geleden was hij daarom eenvoudigweg een held.",
      "Maar dezelfde man liet op de Banda-eilanden een bevolking van ongeveer vijftienduizend mensen grotendeels uitmoorden of wegvoeren, omdat zij hun nootmuskaat ook aan anderen verkochten. Na afloop bleven er nog een paar honderd Bandanezen over. Dat is geen mening van vandaag: Coens eigen brieven en die van zijn bazen beschrijven het.",
      "Wat doe je dan met zo'n beeld? Grofweg zijn er drie antwoorden. Weghalen, zeggen sommigen: een standbeeld is een eerbetoon, en dit verdient geen eer. Laten staan, zeggen anderen: geschiedenis wis je niet uit door brons om te trekken. En de derde groep kiest ervoor het beeld te laten staan én er een bord bij te zetten dat het hele verhaal vertelt.",
      "In Hoorn is precies dat laatste gebeurd. Het beeld bleef, maar de tekst eronder werd veranderd. Daar staat nu ook dat Coen verantwoordelijk was voor de dood van duizenden Bandanezen. Het bord is klein, maar wie stilstaat, leest een ander verhaal dan zijn overgrootouders lazen.",
      "Historici wijzen er graag op dat het beeld ons vooral iets vertelt over 1841, het jaar waarin het werd neergezet. Nederland zocht toen helden voor een jong koninkrijk. Elke generatie kiest wie ze op een sokkel zet, en die keuze zegt net zoveel over de kiezers als over de gekozene.",
      "Misschien is dat de nuttigste manier om ernaar te kijken. Niet als een uitspraak over wie goed was, maar als een vraag die telkens opnieuw gesteld mag worden: wie willen wij eren, en waarom eigenlijk?"
    ],
    en: [
      "He has stood on the square since 1841: a man of bronze, one hand on his sword, his eyes on the sea. Jan Pieterszoon Coen, governor-general of the Dutch East India Company. On the pedestal there is one sentence about trade and glory. About what happened on the Banda Islands in 1621 there is nothing.",
      "That is what makes the argument so stubborn. Coen made the Company immensely rich. He founded the city of Batavia, now Jakarta, and built a network of trading posts that lasted for centuries. In the schoolbooks of a hundred years ago he was therefore simply a hero.",
      "But the same man had a population of about fifteen thousand people on the Banda Islands largely killed or carried off, because they sold their nutmeg to others as well. Afterwards only a few hundred Bandanese were left. That is not a modern opinion: Coen’s own letters and those of his bosses describe it.",
      "So what do you do with such a statue? Roughly speaking there are three answers. Take it away, some say: a statue is an honour, and this does not deserve honour. Leave it, say others: you do not erase history by pulling down bronze. And a third group chooses to leave the statue and put a sign beside it that tells the whole story.",
      "In Hoorn exactly that last thing happened. The statue stayed, but the text underneath was changed. It now also says that Coen was responsible for the deaths of thousands of Bandanese. The sign is small, but anyone who stops to read gets a different story from the one their great-grandparents read.",
      "Historians like to point out that the statue mainly tells us something about 1841, the year it was put up. The Netherlands was looking for heroes for a young kingdom then. Every generation chooses who it puts on a pedestal, and that choice says as much about the choosers as about the chosen.",
      "Perhaps that is the most useful way to look at it. Not as a verdict on who was good, but as a question that may be asked again and again: who do we want to honour, and why exactly?"
    ]
  },
  words: [
    { nl: 'sokkel', en: 'pedestal', defNl: 'het stenen blok waarop een standbeeld staat', defEn: 'the stone block a statue stands on' },
    { nl: 'eerbetoon', en: 'tribute, honour', defNl: 'iets wat je doet om iemand te eren', defEn: 'something you do to honour someone' },
    { nl: 'generatie', en: 'generation', defNl: 'alle mensen die ongeveer in dezelfde tijd geboren zijn', defEn: 'all the people born at roughly the same time' }
  ],
  questions: [
    { id: 'q1', type: 'mc', skill: 'letterlijk',
      q: { nl: 'Waarom liet Coen de bevolking van de Banda-eilanden aanvallen?',
           en: 'Why did Coen have the population of the Banda Islands attacked?' },
      options: [
        { nl: 'Omdat zij hun nootmuskaat ook aan anderen verkochten', en: 'Because they sold their nutmeg to others as well' },
        { nl: 'Omdat zij de stad Batavia hadden verwoest', en: 'Because they had destroyed the city of Batavia' },
        { nl: 'Omdat zij hem geen standbeeld wilden geven', en: 'Because they refused him a statue' },
        { nl: 'Omdat zij geen belasting betaalden aan de koning', en: 'Because they paid no tax to the king' }
      ], answer: 0,
      explain: { nl: 'Alinea 3 noemt die reden letterlijk.', en: 'Paragraph 3 states that reason literally.' } },
    { id: 'q2', type: 'sort', skill: 'feitmening',
      q: { nl: 'Feit of mening? Zet elke zin in de goede groep.',
           en: 'Fact or opinion? Put every sentence in the right group.' },
      bins: [{ nl: 'Feit', en: 'Fact' }, { nl: 'Mening', en: 'Opinion' }],
      items: [
        { nl: 'Het beeld staat er sinds 1841.', en: 'The statue has stood there since 1841.', bin: 0 },
        { nl: 'Dit beeld verdient geen eer.', en: 'This statue does not deserve honour.', bin: 1 },
        { nl: 'Coen stichtte de stad Batavia.', en: 'Coen founded the city of Batavia.', bin: 0 },
        { nl: 'Geschiedenis wis je niet uit door brons om te trekken.',
          en: 'You do not erase history by pulling down bronze.', bin: 1 }
      ],
      explain: { nl: 'Jaartallen en gebeurtenissen kun je opzoeken. De twee andere zinnen zijn standpunten uit de discussie.',
                 en: 'Dates and events can be looked up. The other two sentences are positions in the argument.' } },
    { id: 'q3', type: 'multi', skill: 'letterlijk',
      q: { nl: 'Welke drie oplossingen voor het beeld noemt de tekst? Kies er 3.',
           en: 'Which three solutions for the statue does the text name? Pick 3.' },
      options: [
        { nl: 'Het beeld weghalen', en: 'Take the statue away' },
        { nl: 'Het beeld laten staan zoals het is', en: 'Leave the statue as it is' },
        { nl: 'Het beeld laten staan met een bord dat het hele verhaal vertelt',
          en: 'Leave the statue with a sign telling the whole story' },
        { nl: 'Het beeld naar de Banda-eilanden verschepen', en: 'Ship the statue to the Banda Islands' }
      ], answer: [0, 1, 2],
      explain: { nl: 'Alinea 4 noemt precies deze drie antwoorden. Verschepen komt in de tekst niet voor.',
                 en: 'Paragraph 4 names exactly these three answers. Shipping it away does not appear in the text.' } },
    { id: 'q4', type: 'mc', skill: 'verwijswoorden',
      q: { nl: '"In Hoorn is precies dat laatste gebeurd." Wat is "dat laatste"?',
           en: '"In Hoorn exactly that last thing happened." What is "that last thing"?' },
      options: [
        { nl: 'Het beeld laten staan en er een uitleggend bord bij zetten',
          en: 'Leaving the statue and adding an explaining sign' },
        { nl: 'Het beeld weghalen', en: 'Taking the statue away' },
        { nl: 'Een nieuw beeld laten maken', en: 'Having a new statue made' },
        { nl: 'De sokkel vervangen', en: 'Replacing the pedestal' }
      ], answer: 0,
      explain: { nl: 'Alinea 4 noemt drie mogelijkheden; de laatste is beeld plus bord. Daar verwijst "dat laatste" naar.',
                 en: 'Paragraph 4 names three options; the last is statue plus sign, which is what "that last thing" means.' } },
    { id: 'q5', type: 'mc', skill: 'gevolgtrekking',
      q: { nl: 'Waarom benadrukt de schrijver dat Coens eigen brieven de gebeurtenissen beschrijven?',
           en: 'Why does the writer stress that Coen’s own letters describe the events?' },
      options: [
        { nl: 'Om te laten zien dat het om vaststaande feiten gaat, niet om een mening van nu',
          en: 'To show these are established facts, not a present-day opinion' },
        { nl: 'Omdat Coen mooi kon schrijven', en: 'Because Coen wrote beautifully' },
        { nl: 'Omdat brieven in die tijd zeldzaam waren', en: 'Because letters were rare in those days' },
        { nl: 'Om te bewijzen dat Coen spijt had', en: 'To prove that Coen was sorry' }
      ], answer: 0,
      explain: { nl: 'De tekst zegt het erbij: "Dat is geen mening van vandaag." De bron komt van Coen zelf.',
                 en: 'The text says so: "That is not a modern opinion." The source is Coen himself.' } },
    { id: 'q6', type: 'mc', skill: 'structuur',
      q: { nl: 'Alinea 2 eindigt met "was hij daarom eenvoudigweg een held" en alinea 3 begint met "Maar". Waarom?',
           en: 'Paragraph 2 ends "he was therefore simply a hero" and paragraph 3 starts with "But". Why?' },
      options: [
        { nl: 'De schrijver zet de twee kanten van dezelfde man bewust naast elkaar',
          en: 'The writer deliberately places the two sides of the same man side by side' },
        { nl: 'De schrijver wisselt van onderwerp naar de stad Hoorn', en: 'The writer changes the subject to the city of Hoorn' },
        { nl: 'De schrijver geeft een voorbeeld van handelsposten', en: 'The writer gives an example of trading posts' },
        { nl: 'De schrijver herhaalt wat er op de sokkel staat', en: 'The writer repeats what is on the pedestal' }
      ], answer: 0,
      explain: { nl: '"Maar dezelfde man…" is precies het scharnier van de tekst: dezelfde persoon, twee verhalen.',
                 en: '"But the same man…" is the hinge of the text: one person, two stories.' } },
    { id: 'q7', type: 'mc', skill: 'doel',
      q: { nl: 'Wat wil de schrijver met deze tekst?', en: 'What does the writer want with this text?' },
      options: [
        { nl: 'Laten zien dat er meerdere manieren zijn om naar een standbeeld te kijken, en de lezer zelf laten nadenken',
          en: 'Show that there are several ways of looking at a statue, and let the reader think for themselves' },
        { nl: 'De lezer overhalen het beeld omver te trekken', en: 'Persuade the reader to pull the statue down' },
        { nl: 'Reclame maken voor een bezoek aan Hoorn', en: 'Advertise a visit to Hoorn' },
        { nl: 'Uitleggen hoe je een bronzen beeld maakt', en: 'Explain how a bronze statue is made' }
      ], answer: 0,
      explain: { nl: 'De laatste alinea eindigt met een open vraag: "wie willen wij eren, en waarom eigenlijk?"',
                 en: 'The last paragraph ends with an open question: who do we want to honour, and why?' } },
    { id: 'q8', type: 'mc', skill: 'samenvatten',
      q: { nl: 'Welke samenvatting past het beste?', en: 'Which summary fits best?' },
      options: [
        { nl: 'Coen bracht de VOC rijkdom én liet duizenden Bandanezen doden; daarom wordt er gestreden over zijn beeld, en in Hoorn koos men voor een uitleggend bord.',
          en: 'Coen brought the Company wealth and had thousands of Bandanese killed; that is why his statue is fought over, and Hoorn chose an explaining sign.' },
        { nl: 'In 1841 werden er in Nederland veel standbeelden neergezet.',
          en: 'In 1841 many statues were put up in the Netherlands.' },
        { nl: 'Nootmuskaat was vroeger een heel duur kruid.', en: 'Nutmeg used to be a very expensive spice.' },
        { nl: 'Historici zijn het nooit met elkaar eens.', en: 'Historians never agree with each other.' }
      ], answer: 0,
      explain: { nl: 'Die samenvatting pakt beide kanten, de discussie en de oplossing. De rest zijn losse details.',
                 en: 'That summary covers both sides, the argument and the solution. The rest are single details.' } },
    { id: 'q9', type: 'tf', skill: 'gevolgtrekking',
      q: { nl: 'Volgens historici zegt het standbeeld ook iets over de mensen die het in 1841 neerzetten.',
           en: 'According to historians the statue also says something about the people who put it up in 1841.' },
      answer: true,
      explain: { nl: 'Alinea 6: elke generatie kiest wie ze op een sokkel zet, en die keuze zegt net zoveel over de kiezers.',
                 en: 'Paragraph 6: every generation chooses who it puts on a pedestal, and that choice says as much about the choosers.' } }
  ]
}
]);
