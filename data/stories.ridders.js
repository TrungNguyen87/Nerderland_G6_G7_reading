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

/* --- Nieuwe verhalen: smid, stadswacht, VOC, drukpers, standbeelden --- */
addStories([
{
  id: 'ridders-6', topic: 'ridders', level: 1, emoji: '🔨', scene: 'castle',
  title: { nl: 'Leerling van de smid', en: 'The blacksmith’s apprentice' },
  text: {
    nl: [
      "Bram is tien jaar en werkt bij smid Hendrik. Hij is nog geen echte smid, maar een leerling. Zijn belangrijkste taak: de blaasbalg pompen, zodat het vuur in de smidse heet genoeg blijft.",
      "De smidse is een klein, donker gebouw vol herrie. Het vuur gloeit oranje en rood. Overal vliegen vonken. Als smid Hendrik met zijn hamer op het gloeiende ijzer slaat, klinkt dat door de hele straat: bang, bang, bang.",
      "Uren achter elkaar pompt Bram de blaasbalg. Zijn armen doen pijn en zijn gezicht is zwart van het roet. Tussendoor haalt hij nieuwe kolen en houdt hij de tang vast waarmee Hendrik het hete ijzer beetpakt.",
      "Op een dag mag Bram voor het eerst zelf slaan. Smid Hendrik houdt een gloeiend stuk ijzer op het aambeeld en wijst Bram waar hij moet raken. Langzaam moet het ijzer de vorm van een hoefijzer krijgen.",
      "Bram slaat voorzichtig, dan steviger. Zijn eerste hoefijzer is een beetje scheef, maar het is er wel een. \"Goed zo\", zegt smid Hendrik. Bram glimlacht. Over een paar jaar, denkt hij, maak ik ze mooi recht."
    ],
    en: [
      "Bram is ten years old and works for blacksmith Hendrik. He is not yet a real blacksmith, but an apprentice. His most important task: pumping the bellows, so the fire in the smithy stays hot enough.",
      "The smithy is a small, dark building full of noise. The fire glows orange and red. Sparks fly everywhere. When blacksmith Hendrik strikes the glowing iron with his hammer, you can hear it through the whole street: clang, clang, clang.",
      "For hours on end Bram pumps the bellows. His arms hurt and his face is black with soot. In between he fetches new coal and holds the tongs with which Hendrik grips the hot iron.",
      "One day Bram is allowed to strike the iron himself for the first time. Blacksmith Hendrik holds a glowing piece of iron on the anvil and points out where Bram must hit. Slowly the iron has to take the shape of a horseshoe.",
      "Bram strikes carefully, then more firmly. His first horseshoe is a little crooked, but it is a horseshoe. \"Well done,\" says blacksmith Hendrik. Bram smiles. In a few years, he thinks, I will make them nice and straight."
    ]
  },
  words: [
    { nl: 'blaasbalg', en: 'bellows', defNl: 'een soort zak waarmee je een vuur harder laat branden', defEn: 'a kind of bag used to make a fire burn hotter' },
    { nl: 'aambeeld', en: 'anvil', defNl: 'het zware ijzeren blok waarop een smid slaat', defEn: 'the heavy iron block a blacksmith hammers on' },
    { nl: 'hoefijzer', en: 'horseshoe', defNl: 'het ijzeren beslag onder de hoef van een paard', defEn: 'the iron shoe fitted under a horse’s hoof' }
  ],
  questions: [
    { id: 'q1', type: 'mc', skill: 'letterlijk',
      q: { nl: 'Wat is de belangrijkste taak van Bram?', en: 'What is Bram’s most important task?' },
      options: [ { nl: 'De blaasbalg pompen', en: 'Pumping the bellows' }, { nl: 'Op het ijzer hameren', en: 'Hammering the iron' },
                 { nl: 'Kolen verkopen', en: 'Selling coal' }, { nl: 'Paarden africhten', en: 'Training horses' } ],
      answer: 0,
      explain: { nl: 'De tekst zegt: "Zijn belangrijkste taak: de blaasbalg pompen."',
                 en: 'The text says: "His most important task: pumping the bellows."' } },
    { id: 'q2', type: 'mc', skill: 'letterlijk',
      q: { nl: 'Waar is het gezicht van Bram zwart van, na uren pompen?', en: 'What is Bram’s face black with, after hours of pumping?' },
      options: [ { nl: 'Van het roet', en: 'From soot' }, { nl: 'Van de modder', en: 'From mud' },
                 { nl: 'Van de verf', en: 'From paint' }, { nl: 'Van het zand', en: 'From sand' } ],
      answer: 0,
      explain: { nl: 'Alinea 3: "zijn gezicht is zwart van het roet."', en: 'Paragraph 3: "his face is black with soot."' } },
    { id: 'q3', type: 'gap', skill: 'woordenschat',
      q: { nl: 'Een aambeeld is ___.', en: 'An anvil is ___.' },
      options: [
        { nl: 'het zware ijzeren blok waarop de smid slaat', en: 'the heavy iron block the blacksmith hammers on' },
        { nl: 'de blaasbalg waarmee je het vuur aanwakkert', en: 'the bellows used to stoke the fire' },
        { nl: 'een hoefijzer voor een paard', en: 'a horseshoe for a horse' },
        { nl: 'de tang waarmee je heet ijzer vastpakt', en: 'the tongs used to grip hot iron' }
      ], answer: 0,
      explain: { nl: 'Alinea 4: Hendrik houdt het gloeiende ijzer op het aambeeld om erop te slaan.',
                 en: 'Paragraph 4: Hendrik holds the glowing iron on the anvil to hammer it.' } },
    { id: 'q4', type: 'order', skill: 'volgorde',
      q: { nl: 'Zet de leerperiode van Bram op volgorde.', en: 'Put Bram’s learning steps in order.' },
      items: [
        { nl: 'Bram pompt de blaasbalg zodat het vuur heet blijft.', en: 'Bram pumps the bellows so the fire stays hot.' },
        { nl: 'Hij haalt kolen en houdt de tang vast.', en: 'He fetches coal and holds the tongs.' },
        { nl: 'Smid Hendrik laat hem voor het eerst zelf op het ijzer slaan.', en: 'Blacksmith Hendrik lets him strike the iron himself for the first time.' },
        { nl: 'Bram maakt zijn eerste, een beetje scheve, hoefijzer.', en: 'Bram makes his first, slightly crooked, horseshoe.' }
      ], answer: [0, 1, 2, 3],
      explain: { nl: 'Zo staat het in de tekst: eerst de vaste klusjes, dan pas mag hij zelf slaan en zijn eerste hoefijzer maken.',
                 en: 'That is the order in the text: first the fixed chores, only then may he strike himself and make his first horseshoe.' } },
    { id: 'q5', type: 'mc', skill: 'hoofdgedachte',
      q: { nl: 'Welke zin vat de tekst het beste samen?', en: 'Which sentence sums up the text best?' },
      options: [
        { nl: 'Bram leert stap voor stap het vak van smid', en: 'Bram is learning the blacksmith’s trade step by step' },
        { nl: 'Bram wil geen smid meer worden', en: 'Bram no longer wants to become a blacksmith' },
        { nl: 'Smid Hendrik is boos op Bram', en: 'Blacksmith Hendrik is angry with Bram' },
        { nl: 'Paarden zijn bang voor hoefijzers', en: 'Horses are afraid of horseshoes' }
      ], answer: 0,
      explain: { nl: 'Van blaasbalg pompen tot zelf een hoefijzer maken: de hele tekst laat Bram steeds meer leren.',
                 en: 'From pumping the bellows to making a horseshoe himself: the whole text shows Bram learning more and more.' } }
  ]
},

{
  id: 'ridders-7', topic: 'ridders', level: 2, emoji: '🔔', scene: 'castle',
  title: { nl: 'De nachtwacht op de stadsmuur', en: 'The night watch on the city wall' },
  text: {
    nl: [
      "Een middeleeuwse stad had bijna altijd een dikke muur eromheen, met een paar poorten als enige ingang. Dat klinkt overdreven, maar zonder muur was een stad een makkelijk doelwit voor rovers en vijandige legers. Wie de stad in wilde, moest via een poort naar binnen, en die poort werd streng in de gaten gehouden.",
      "Bij zonsondergang klonk er een bel of een hoorn, en dan gingen de zware poorten dicht. Was je te laat? Dan sliep je die nacht buiten de muren, tussen de velden, of je klopte aan en hoopte dat een wachter je toch binnenliet.",
      "'s Nachts liep de nachtwacht zijn rondes over de stadsmuur. Om het uur riep hij hardop hoe laat het was, zodat de inwoners wisten dat alles goed ging. Hoorde je zijn stem niet meer, dan was er iets mis.",
      "De grootste gevaren waren geen vijandige legers, maar brand en dieven. Huizen waren van hout, met rieten daken, en één omgevallen kaars kon een hele straat in vlammen zetten. De nachtwacht speurde daarom vanaf de muur naar rook en vreemde schaduwen in de steegjes.",
      "Wie deze baan kreeg, moest wakker kunnen blijven zonder in slaap te vallen, ook als het uren stil bleef. Sommige steden gaven de wachter daarom een hond, of lieten hem in koppels van twee lopen, zodat de een de ander wakker hield.",
      "Vandaag de dag staan de meeste stadsmuren er niet meer, of ze zijn een rustig wandelpad geworden. Maar de torens die je soms nog ziet, herinneren aan een tijd waarin een stad zonder muur, poort en waakzame nachtwacht gewoon niet veilig was."
    ],
    en: [
      "A medieval city almost always had a thick wall around it, with only a few gates as entrances. That sounds exaggerated, but without a wall a city was an easy target for robbers and enemy armies. Anyone who wanted to enter the city had to go through a gate, and that gate was closely guarded.",
      "At sunset a bell or a horn sounded, and then the heavy gates closed. Were you too late? Then you slept that night outside the walls, among the fields, or you knocked and hoped a guard would let you in after all.",
      "At night the night watchman walked his rounds along the city wall. Every hour he called out loudly what time it was, so the townspeople knew everything was fine. If you no longer heard his voice, something was wrong.",
      "The biggest dangers were not enemy armies, but fire and thieves. Houses were made of wood, with thatched roofs, and one fallen candle could set a whole street ablaze. That is why the night watchman scanned from the wall for smoke and strange shadows in the alleys.",
      "Anyone who got this job had to be able to stay awake without falling asleep, even when it stayed quiet for hours. Some cities therefore gave the watchman a dog, or had him walk in pairs, so that one kept the other awake.",
      "Today most city walls are gone, or have become a peaceful walking path. But the towers you sometimes still see remind us of a time when a city without a wall, a gate and a watchful night watchman simply was not safe."
    ]
  },
  words: [
    { nl: 'poort', en: 'gate', defNl: 'de ingang in een stadsmuur die in de avond dicht ging', defEn: 'the entrance in a city wall that closed in the evening' },
    { nl: 'nachtwacht', en: 'night watchman', defNl: 'iemand die in de nacht de stad in de gaten houdt', defEn: 'someone who keeps watch over the city at night' },
    { nl: 'rieten dak', en: 'thatched roof', defNl: 'een dak gemaakt van gedroogd riet of stro', defEn: 'a roof made of dried reed or straw' }
  ],
  questions: [
    { id: 'q1', type: 'mc', skill: 'letterlijk',
      q: { nl: 'Waarom had een middeleeuwse stad een muur?', en: 'Why did a medieval city have a wall?' },
      options: [
        { nl: 'Om rovers en vijandige legers buiten te houden', en: 'To keep out robbers and enemy armies' },
        { nl: 'Om de stad er mooier uit te laten zien', en: 'To make the city look prettier' },
        { nl: 'Om toeristen te trekken', en: 'To attract tourists' },
        { nl: 'Om de kerk te beschermen tegen regen', en: 'To protect the church from rain' }
      ], answer: 0,
      explain: { nl: 'Alinea 1: zonder muur was een stad een makkelijk doelwit voor rovers en vijandige legers.',
                 en: 'Paragraph 1: without a wall a city was an easy target for robbers and enemy armies.' } },
    { id: 'q2', type: 'mc', skill: 'letterlijk',
      q: { nl: 'Wat gebeurde er bij zonsondergang?', en: 'What happened at sunset?' },
      options: [
        { nl: 'De zware poorten gingen dicht', en: 'The heavy gates closed' },
        { nl: 'De markt begon', en: 'The market started' },
        { nl: 'Alle huizen werden verlicht', en: 'All the houses were lit up' },
        { nl: 'De nachtwacht ging naar bed', en: 'The night watchman went to bed' }
      ], answer: 0,
      explain: { nl: 'Alinea 2: bij zonsondergang klonk een bel of hoorn en gingen de zware poorten dicht.',
                 en: 'Paragraph 2: at sunset a bell or horn sounded and the heavy gates closed.' } },
    { id: 'q3', type: 'mc', skill: 'gevolgtrekking',
      q: { nl: 'Waarom riep de nachtwacht elk uur hardop hoe laat het was?',
           en: 'Why did the night watchman call out the time every hour?' },
      options: [
        { nl: 'Zodat de inwoners wisten dat alles veilig was', en: 'So the townspeople knew everything was safe' },
        { nl: 'Om zichzelf voor de lol wakker te houden', en: 'To keep himself awake for fun' },
        { nl: 'Om te oefenen met tellen', en: 'To practise counting' },
        { nl: 'Om andere wachters te irriteren', en: 'To annoy other guards' }
      ], answer: 0,
      explain: { nl: 'Alinea 3: "zodat de inwoners wisten dat alles goed ging."',
                 en: 'Paragraph 3: "so the townspeople knew everything was fine."' } },
    { id: 'q4', type: 'tf', skill: 'gevolgtrekking',
      q: { nl: 'Vuur was voor een stad een groter gevaar dan een vijandig leger.',
           en: 'Fire was a bigger danger for a city than an enemy army.' },
      answer: true,
      explain: { nl: 'Alinea 4: "De grootste gevaren waren geen vijandige legers, maar brand en dieven."',
                 en: 'Paragraph 4: "The biggest dangers were not enemy armies, but fire and thieves."' } },
    { id: 'q5', type: 'match', skill: 'woordenschat',
      q: { nl: 'Koppel elk woord aan de betekenis.', en: 'Match each word to its meaning.' },
      pairs: [
        { word: { nl: 'poort', en: 'gate' }, meaning: { nl: 'de ingang in een stadsmuur', en: 'the entrance in a city wall' } },
        { word: { nl: 'nachtwacht', en: 'night watchman' }, meaning: { nl: 'iemand die in de nacht de wacht houdt', en: 'someone who keeps watch at night' } },
        { word: { nl: 'rieten dak', en: 'thatched roof' }, meaning: { nl: 'een dak van gedroogd riet of stro', en: 'a roof of dried reed or straw' } },
        { word: { nl: 'stadsmuur', en: 'city wall' }, meaning: { nl: 'de dikke muur rond een stad', en: 'the thick wall around a city' } }
      ],
      explain: { nl: 'Deze woorden hoor je vaak samen met dit onderwerp.', en: 'You often hear these words together with this topic.' } },
    { id: 'q6', type: 'mc', skill: 'hoofdgedachte',
      q: { nl: 'Wat is de hoofdgedachte van de tekst?', en: 'What is the main idea of the text?' },
      options: [
        { nl: 'Een stad zonder muur, poort en nachtwacht was vroeger niet veilig',
          en: 'A city without a wall, gate and night watchman was not safe in the past' },
        { nl: 'Nachtwachten hadden altijd een hond bij zich', en: 'Night watchmen always had a dog with them' },
        { nl: 'Stadsmuren waren vooral mooi om naar te kijken', en: 'City walls were mainly nice to look at' },
        { nl: 'Brand kwam in middeleeuwse steden bijna nooit voor', en: 'Fire almost never happened in medieval cities' }
      ], answer: 0,
      explain: { nl: 'Dat staat bijna letterlijk in de slotalinea.', en: 'That is almost literally in the closing paragraph.' } }
  ]
},

{
  id: 'ridders-8', topic: 'ridders', level: 3, emoji: '⚓', scene: 'harbour',
  title: { nl: 'Een scheepsjongen op een VOC-schip', en: 'A cabin boy on a VOC ship' },
  text: {
    nl: [
      "Pieter is dertien jaar als hij aan boord klimt van De Hoop, een schip van de VOC. Vanaf de kade in Texel zwaait zijn moeder, maar Pieter kijkt vooral vooruit. Hij is scheepsjongen nu, en over een paar maanden ziet hij Batavia, aan de andere kant van de wereld.",
      "Aan boord is geen centimeter ruimte over. Pieter slaapt in een hangmat, ingeklemd tussen kisten specerijen en vaten drinkwater, met tientallen andere scheepsjongens om hem heen. Het ruikt er naar teer, zout en zeewater. De eerste weken is hij zo zeeziek dat hij bijna niets binnenhoudt.",
      "Zijn dagen zijn gevuld met werk: touwen splitsen, dekken schrobben, en ratten vangen die op de proviand azen. Als het stormt, moet hij hoog in de mast klimmen om zeilen vast te binden, terwijl het schip heen en weer slingert. Wie bang is voor hoogte, wordt hier snel over die angst heen geholpen, of anders niet.",
      "Na een paar weken is de kust van Nederland allang uit zicht. Alleen water, dag in dag uit. Pieter mist zijn moeder, het geluid van de kerkklok in zijn dorp, zelfs het gemekker van de geiten. 's Avonds fluistert hij haar naam voor zichzelf, alsof dat de afstand kleiner maakt.",
      "Onderweg wordt de reis nog zwaarder. Vers voedsel raakt op en scheurbuik, een ziekte door gebrek aan groente en fruit, eist zijn tol onder de bemanning. Twee matrozen worden, genaaid in canvas, overboord gezet. Pieter beseft dat hij, als hij dat wil overleven, precies moet doen wat de stuurman zegt.",
      "Na bijna acht maanden verschijnt eindelijk de kust van Java aan de horizon. Batavia blijkt drukker en heter dan Pieter zich ooit had voorgesteld. Trots, uitgeput en een beetje bang tegelijk stapt hij van boord. Van de honderden scheepsjongens die met hem vertrokken, zijn lang niet allemaal levend aangekomen. Pieter wel, en dat, denkt hij, is al een overwinning."
    ],
    en: [
      "Pieter is thirteen years old when he climbs aboard De Hoop, a ship of the VOC. From the quay in Texel his mother waves, but Pieter is mostly looking ahead. He is a cabin boy now, and in a few months he will see Batavia, on the other side of the world.",
      "On board there is not a centimetre of space to spare. Pieter sleeps in a hammock, wedged between crates of spices and barrels of drinking water, with dozens of other cabin boys around him. It smells of tar, salt and seawater. For the first weeks he is so seasick that he can barely keep anything down.",
      "His days are filled with work: splicing ropes, scrubbing decks, and catching rats that go after the food supplies. When it storms, he has to climb high into the mast to tie down sails, while the ship rolls back and forth. Anyone afraid of heights is quickly cured of that fear here, or else.",
      "After a few weeks the coast of the Netherlands is long out of sight. Only water, day after day. Pieter misses his mother, the sound of the church bell in his village, even the bleating of the goats. In the evening he whispers her name to himself, as if that makes the distance smaller.",
      "Along the way the voyage gets even harder. Fresh food runs out, and scurvy, a disease caused by a lack of vegetables and fruit, takes its toll on the crew. Two sailors, sewn into canvas, are put overboard. Pieter realises that if he wants to survive this, he has to do exactly what the mate says.",
      "After almost eight months the coast of Java finally appears on the horizon. Batavia turns out to be busier and hotter than Pieter had ever imagined. Proud, exhausted and a little scared all at once, he steps ashore. Of the hundreds of cabin boys who set off with him, not nearly all arrived alive. Pieter did, and that, he thinks, is already a victory."
    ]
  },
  words: [
    { nl: 'scheepsjongen', en: 'cabin boy', defNl: 'een jonge jongen die op een schip werkt en klusjes doet', defEn: 'a young boy who works on a ship doing chores' },
    { nl: 'hangmat', en: 'hammock', defNl: 'een hangend bed van stof of touw', defEn: 'a hanging bed made of cloth or rope' },
    { nl: 'scheurbuik', en: 'scurvy', defNl: 'een ziekte die je krijgt door te weinig groente en fruit te eten', defEn: 'a disease caused by eating too little fruit and vegetables' }
  ],
  questions: [
    { id: 'q1', type: 'mc', skill: 'letterlijk',
      q: { nl: 'Waar slaapt Pieter aan boord?', en: 'Where does Pieter sleep on board?' },
      options: [
        { nl: 'In een hangmat tussen kisten en vaten', en: 'In a hammock between crates and barrels' },
        { nl: 'In een eigen hut met een bed', en: 'In his own cabin with a bed' },
        { nl: 'Op het dek onder de sterren', en: 'On deck under the stars' },
        { nl: 'In de keuken bij het fornuis', en: 'In the galley by the stove' }
      ], answer: 0,
      explain: { nl: 'Alinea 2: "Pieter slaapt in een hangmat, ingeklemd tussen kisten specerijen en vaten drinkwater."',
                 en: 'Paragraph 2: "Pieter sleeps in a hammock, wedged between crates of spices and barrels of drinking water."' } },
    { id: 'q2', type: 'mc', skill: 'verwijswoorden',
      q: { nl: "\"'s Avonds fluistert hij haar naam voor zichzelf.\" Naar wie verwijst \"haar\"?",
           en: "\"In the evening he whispers her name to himself.\" Who does \"her\" refer to?" },
      options: [
        { nl: 'Naar zijn moeder', en: 'To his mother' },
        { nl: 'Naar de stuurman', en: 'To the mate' },
        { nl: 'Naar de stad Batavia', en: 'To the city of Batavia' },
        { nl: 'Naar een andere scheepsjongen', en: 'To another cabin boy' }
      ], answer: 0,
      explain: { nl: 'De zin ervoor gaat over Pieter die zijn moeder mist. "Haar" verwijst dus naar zijn moeder.',
                 en: 'The sentence before is about Pieter missing his mother. So "her" refers to his mother.' } },
    { id: 'q3', type: 'mc', skill: 'gevolgtrekking',
      q: { nl: 'Waarom moet Pieter zijn angst voor hoogte snel overwinnen?',
           en: 'Why does Pieter quickly have to overcome his fear of heights?' },
      options: [
        { nl: 'Omdat hij bij storm hoog de mast in moet om zeilen vast te binden',
          en: 'Because in a storm he has to climb high into the mast to tie down sails' },
        { nl: 'Omdat de kapitein hem dat als straf oplegt', en: 'Because the captain orders it as a punishment' },
        { nl: 'Omdat hij dat al kon voor hij aan boord kwam', en: 'Because he could already do that before boarding' },
        { nl: 'Omdat andere jongens hem daarmee plagen', en: 'Because other boys tease him about it' }
      ], answer: 0,
      explain: { nl: 'Alinea 3 legt uit dat hij bij storm de mast in moet, of hij nu bang is of niet.',
                 en: 'Paragraph 3 explains he has to climb the mast in a storm, whether he is afraid or not.' } },
    { id: 'q4', type: 'mc', skill: 'structuur',
      q: { nl: 'Alinea 5 begint met "Onderweg wordt de reis nog zwaarder." Wat kondigt die zin aan?',
           en: 'Paragraph 5 begins "Along the way the voyage gets even harder." What does that sentence announce?' },
      options: [
        { nl: 'Dat het nu nog moeilijker wordt dan wat er al beschreven is', en: 'That it now gets even harder than what has already been described' },
        { nl: 'Dat de reis bijna afgelopen is', en: 'That the voyage is almost over' },
        { nl: 'Dat er een nieuw personage wordt geïntroduceerd', en: 'That a new character is introduced' },
        { nl: 'Dat het weer in Nederland verandert', en: 'That the weather in the Netherlands is changing' }
      ], answer: 0,
      explain: { nl: 'Het woord "nog" laat zien dat de zwaarte toeneemt ten opzichte van eerder in de tekst.',
                 en: 'The word "even" shows that the hardship is increasing compared to earlier in the text.' } },
    { id: 'q5', type: 'gap', skill: 'woordenschat',
      q: { nl: 'Scheurbuik is ___.', en: 'Scurvy is ___.' },
      options: [
        { nl: 'een ziekte door te weinig groente en fruit', en: 'a disease caused by too little fruit and vegetables' },
        { nl: 'een sterke storm op zee', en: 'a strong storm at sea' },
        { nl: 'een soort VOC-schip', en: 'a type of VOC ship' },
        { nl: 'een straf voor lui personeel', en: 'a punishment for lazy crew members' }
      ], answer: 0,
      explain: { nl: 'Alinea 5: "scheurbuik, een ziekte door gebrek aan groente en fruit."',
                 en: 'Paragraph 5: "scurvy, a disease caused by a lack of vegetables and fruit."' } },
    { id: 'q6', type: 'tf', skill: 'gevolgtrekking',
      q: { nl: 'Niet alle scheepsjongens die met Pieter vertrokken, kwamen levend aan in Batavia.',
           en: 'Not all the cabin boys who set off with Pieter arrived alive in Batavia.' },
      answer: true,
      explain: { nl: 'Laatste alinea: "zijn lang niet allemaal levend aangekomen."',
                 en: 'Last paragraph: "not nearly all arrived alive."' } },
    { id: 'q7', type: 'mc', skill: 'hoofdgedachte',
      q: { nl: 'Wat is de hoofdgedachte van de tekst?', en: 'What is the main idea of the text?' },
      options: [
        { nl: 'Het leven van een scheepsjongen op een VOC-schip was zwaar en gevaarlijk, maar Pieter overleefde de reis',
          en: 'Life as a cabin boy on a VOC ship was hard and dangerous, but Pieter survived the voyage' },
        { nl: 'Pieter werd al snel kapitein van het schip', en: 'Pieter quickly became captain of the ship' },
        { nl: 'VOC-schepen waren heel comfortabel om op te reizen', en: 'VOC ships were very comfortable to travel on' },
        { nl: 'Scheepsjongens hoefden bijna nooit te werken', en: 'Cabin boys hardly ever had to work' }
      ], answer: 0,
      explain: { nl: 'De hele tekst laat de zware, gevaarlijke kanten van de reis zien, maar eindigt met Pieters overwinning: hij overleeft.',
                 en: 'The whole text shows the hard, dangerous sides of the voyage, but ends with Pieter’s victory: he survives.' } }
  ]
},

{
  id: 'ridders-9', topic: 'ridders', level: 4, emoji: '📚', scene: 'default',
  title: { nl: 'De uitvinding die boeken voor iedereen maakte', en: 'The invention that made books for everyone' },
  text: {
    nl: [
      "Rond het jaar 1450 werkte een Duitse goudsmid genaamd Johannes Gutenberg in het geheim aan een uitvinding die de wereld zou veranderen. Vóór die tijd werd elk boek met de hand overgeschreven, meestal door monniken in een klooster. Eén bijbel kopiëren kon wel een jaar duren, en het resultaat was zo kostbaar dat alleen kerken, kloosters en rijke edelen zich een boek konden veroorloven.",
      "Gutenberg bedacht iets slims: losse metalen lettertjes, elk apart gegoten, die je steeds opnieuw kon rangschikken tot woorden en zinnen. Was een bladzijde klaar gedrukt, dan haalde je de letters uit elkaar en zette je ze weer opnieuw in elkaar voor de volgende bladzijde. Die techniek heet boekdrukkunst met losse letters, en ze was precies wat er nodig was.",
      "Om zijn machine goed te laten werken, moest Gutenberg ook een speciale inkt ontwikkelen die aan het metaal bleef plakken zonder te vlekken, en een pers bouwen die stevig genoeg was om gelijkmatig te drukken. Pas na jaren experimenteren, en flink wat schulden, kreeg hij het voor elkaar.",
      "Rond 1455 drukte hij zijn beroemdste werk: de Gutenbergbijbel, in een oplage van ongeveer honderdtachtig exemplaren. Dat klinkt weinig, maar vergeleken met de paar bijbels die een klooster per jaar met de hand kon overschrijven, was het een revolutie. Binnen vijftig jaar stonden er drukkerijen in meer dan tweehonderd Europese steden.",
      "Die snelheid veranderde alles. Nieuwe ideeën, wetenschappelijke ontdekkingen en ook felle meningsverschillen konden zich nu in weken verspreiden in plaats van in decennia. Toen de Duitse monnik Maarten Luther het in 1517 oneens was met de kerk, werden zijn geschriften binnen enkele maanden in heel Europa gelezen. Zonder de drukpers was dat ondenkbaar geweest.",
      "Ook voor gewone mensen veranderde er iets. Boeken werden goedkoper, en steeds meer mensen leerden lezen, al bleef dat nog eeuwenlang een voorrecht van een kleine groep. Historici noemen Gutenbergs uitvinding daarom een van de belangrijkste ooit: niet omdat hij het idee van een boek bedacht, maar omdat hij ervoor zorgde dat kennis niet langer het bezit van een handjevol mensen hoefde te blijven."
    ],
    en: [
      "Around the year 1450 a German goldsmith named Johannes Gutenberg was secretly working on an invention that would change the world. Before that time every book was copied by hand, usually by monks in a monastery. Copying a single bible could take a whole year, and the result was so costly that only churches, monasteries and rich nobles could afford a book.",
      "Gutenberg came up with something clever: separate metal letters, each cast individually, that you could arrange again and again into words and sentences. Once a page was printed, you took the letters apart and set them up again for the next page. That technique is called movable-type printing, and it was exactly what was needed.",
      "To make his machine work properly, Gutenberg also had to develop a special ink that stuck to the metal without smudging, and build a press sturdy enough to print evenly. Only after years of experimenting, and quite a lot of debt, did he manage it.",
      "Around 1455 he printed his most famous work: the Gutenberg Bible, in a print run of about a hundred and eighty copies. That sounds like little, but compared to the handful of bibles a monastery could copy by hand each year, it was a revolution. Within fifty years there were printing shops in more than two hundred European cities.",
      "That speed changed everything. New ideas, scientific discoveries and fierce disagreements too could now spread in weeks instead of decades. When the German monk Martin Luther disagreed with the church in 1517, his writings were read across Europe within a few months. Without the printing press that would have been unthinkable.",
      "Something changed for ordinary people too. Books became cheaper, and more and more people learned to read, though for centuries that remained a privilege of a small group. Historians therefore call Gutenberg’s invention one of the most important ever: not because he invented the idea of a book, but because he made sure knowledge no longer had to remain the property of a handful of people."
    ]
  },
  words: [
    { nl: 'boekdrukkunst', en: 'movable-type printing', defNl: 'het drukken van boeken met losse metalen letters', defEn: 'printing books using separate metal letters' },
    { nl: 'oplage', en: 'print run', defNl: 'het aantal exemplaren dat er van een boek gedrukt wordt', defEn: 'the number of copies printed of a book' },
    { nl: 'voorrecht', en: 'privilege', defNl: 'iets bijzonders dat maar weinig mensen mogen of kunnen', defEn: 'something special that only a few people are allowed or able to have' }
  ],
  questions: [
    { id: 'q1', type: 'mc', skill: 'letterlijk',
      q: { nl: 'Hoe werden boeken gemaakt vóór Gutenbergs uitvinding?', en: 'How were books made before Gutenberg’s invention?' },
      options: [
        { nl: 'Ze werden met de hand overgeschreven, meestal door monniken', en: 'They were copied by hand, usually by monks' },
        { nl: 'Ze werden gedrukt met losse metalen letters', en: 'They were printed with separate metal letters' },
        { nl: 'Ze werden gemaakt van papyrus in Egypte', en: 'They were made of papyrus in Egypt' },
        { nl: 'Ze werden ingesproken en later opgeschreven', en: 'They were dictated and written down later' }
      ], answer: 0,
      explain: { nl: 'Alinea 1: elk boek werd met de hand overgeschreven, meestal door monniken in een klooster.',
                 en: 'Paragraph 1: every book was copied by hand, usually by monks in a monastery.' } },
    { id: 'q2', type: 'mc', skill: 'verwijswoorden',
      q: { nl: '"Pas na jaren experimenteren, en flink wat schulden, kreeg hij het voor elkaar." Waar verwijst "het" naar?',
           en: '"Only after years of experimenting, and quite a lot of debt, did he manage it." What does "it" refer to?' },
      options: [
        { nl: 'Een werkende drukpers met goede inkt bouwen', en: 'Building a working press with good ink' },
        { nl: 'Een bijbel met de hand overschrijven', en: 'Copying a bible by hand' },
        { nl: 'Een klooster bezoeken', en: 'Visiting a monastery' },
        { nl: 'Losse letters verkopen aan monniken', en: 'Selling separate letters to monks' }
      ], answer: 0,
      explain: { nl: 'De zinnen ervoor gaan over de inkt en de pers die Gutenberg moest ontwikkelen. Dát is wat hem uiteindelijk lukte.',
                 en: 'The sentences before are about the ink and press Gutenberg had to develop. That is what he finally managed.' } },
    { id: 'q3', type: 'mc', skill: 'gevolgtrekking',
      q: { nl: 'Waarom kon Maarten Luthers verzet tegen de kerk zich zo snel verspreiden?',
           en: 'Why could Martin Luther’s opposition to the church spread so quickly?' },
      options: [
        { nl: 'Omdat de drukpers zijn geschriften in korte tijd door heel Europa kon verspreiden',
          en: 'Because the printing press could spread his writings across Europe in a short time' },
        { nl: 'Omdat Luther zelf naar elke stad reisde om te preken', en: 'Because Luther himself travelled to every city to preach' },
        { nl: 'Omdat de kerk zijn boeken gratis liet kopiëren', en: 'Because the church had his books copied for free' },
        { nl: 'Omdat er toen al kranten bestonden', en: 'Because newspapers already existed back then' }
      ], answer: 0,
      explain: { nl: 'Alinea 5 legt precies dat verband: zonder de drukpers was de snelle verspreiding ondenkbaar geweest.',
                 en: 'Paragraph 5 makes exactly that link: without the printing press, the rapid spread would have been unthinkable.' } },
    { id: 'q4', type: 'gap', skill: 'woordenschat',
      q: { nl: 'Een oplage is ___.', en: 'A print run is ___.' },
      options: [
        { nl: 'het aantal exemplaren dat van een boek gedrukt is', en: 'the number of copies printed of a book' },
        { nl: 'de prijs van een boek', en: 'the price of a book' },
        { nl: 'de naam van een drukkerij', en: 'the name of a printing shop' },
        { nl: 'het aantal bladzijden in een boek', en: 'the number of pages in a book' }
      ], answer: 0,
      explain: { nl: 'Alinea 4: de Gutenbergbijbel werd gedrukt "in een oplage van ongeveer honderdtachtig exemplaren."',
                 en: 'Paragraph 4: the Gutenberg Bible was printed "in a print run of about a hundred and eighty copies."' } },
    { id: 'q5', type: 'order', skill: 'volgorde',
      q: { nl: 'Zet de gebeurtenissen op volgorde van tijd.', en: 'Put the events in order of time.' },
      items: [
        { nl: 'Gutenberg werkt in het geheim aan losse metalen letters.', en: 'Gutenberg secretly works on separate metal letters.' },
        { nl: 'Hij ontwikkelt een goede inkt en bouwt een stevige pers.', en: 'He develops a good ink and builds a sturdy press.' },
        { nl: 'Hij drukt de Gutenbergbijbel in ongeveer 180 exemplaren.', en: 'He prints the Gutenberg Bible in about 180 copies.' },
        { nl: 'Er staan drukkerijen in meer dan tweehonderd Europese steden.', en: 'There are printing shops in more than two hundred European cities.' },
        { nl: 'Maarten Luthers geschriften worden binnen maanden in heel Europa gelezen.', en: 'Martin Luther’s writings are read across Europe within months.' }
      ], answer: [0, 1, 2, 3, 4],
      explain: { nl: 'Eerst de uitvinding zelf, dan de techniek eromheen, dan de eerste grote druk, de verspreiding van drukkerijen en tenslotte het effect op Luther.',
                 en: 'First the invention itself, then the technique around it, then the first big print, the spread of printing shops and finally the effect on Luther.' } },
    { id: 'q6', type: 'mc', skill: 'structuur',
      q: { nl: 'Alinea 5 begint met "Die snelheid veranderde alles." Wat kondigt die zin aan?',
           en: 'Paragraph 5 begins "That speed changed everything." What does that sentence announce?' },
      options: [
        { nl: 'De schrijver gaat uitleggen welke gevolgen de snelheid van drukken had',
          en: 'The writer is going to explain what the consequences of printing speed were' },
        { nl: 'De schrijver herhaalt hoe de drukpers precies werkt', en: 'The writer repeats exactly how the printing press works' },
        { nl: 'De schrijver vertelt over Gutenbergs jeugd', en: 'The writer talks about Gutenberg’s childhood' },
        { nl: 'De schrijver introduceert een nieuwe uitvinder', en: 'The writer introduces a new inventor' }
      ], answer: 0,
      explain: { nl: 'Na deze zin volgen voorbeelden van hoe snel ideeën zich nu konden verspreiden, zoals bij Maarten Luther.',
                 en: 'After this sentence come examples of how fast ideas could now spread, such as with Martin Luther.' } },
    { id: 'q7', type: 'mc', skill: 'hoofdgedachte',
      q: { nl: 'Wat is de hoofdgedachte van de tekst?', en: 'What is the main idea of the text?' },
      options: [
        { nl: 'Gutenbergs drukpers zorgde ervoor dat boeken en ideeën zich veel sneller konden verspreiden',
          en: 'Gutenberg’s printing press made it possible for books and ideas to spread much faster' },
        { nl: 'Gutenberg was vooral een goede goudsmid', en: 'Gutenberg was mainly a good goldsmith' },
        { nl: 'Bijbels werden na 1450 helemaal gratis', en: 'Bibles became completely free after 1450' },
        { nl: 'Monniken stopten meteen met het schrijven van boeken', en: 'Monks immediately stopped writing books' }
      ], answer: 0,
      explain: { nl: 'Elke alinea laat op een andere manier zien hoe de drukpers boeken en kennis sneller liet verspreiden.',
                 en: 'Every paragraph shows, in a different way, how the printing press spread books and knowledge faster.' } },
    { id: 'q8', type: 'multi', skill: 'letterlijk',
      q: { nl: 'Wat moest Gutenberg naast losse letters ook nog ontwikkelen om zijn drukpers te laten werken? Kies er 2.',
           en: 'What did Gutenberg also have to develop besides separate letters to make his press work? Pick 2.' },
      options: [
        { nl: 'Een speciale inkt die aan het metaal bleef plakken', en: 'A special ink that stuck to the metal' },
        { nl: 'Een stevige pers om gelijkmatig te drukken', en: 'A sturdy press to print evenly' },
        { nl: 'Een nieuw soort papier dat hijzelf uitvond', en: 'A new kind of paper that he invented himself' },
        { nl: 'Een eigen klooster om boeken te verkopen', en: 'His own monastery to sell books' }
      ], answer: [0, 1],
      explain: { nl: 'Alinea 3 noemt precies deze twee: een speciale inkt en een stevige pers. Over papier of een klooster zegt de tekst niets.',
                 en: 'Paragraph 3 names exactly these two: a special ink and a sturdy press. The text says nothing about paper or a monastery.' } }
  ]
},

{
  id: 'ridders-10', topic: 'ridders', level: 5, emoji: '🏛️', scene: 'default',
  title: { nl: 'Moeten omstreden standbeelden blijven staan?', en: 'Should controversial statues remain standing?' },
  text: {
    nl: [
      "In steden over de hele wereld staan standbeelden van mensen die vroeger als helden werden gezien: ontdekkingsreizigers, veldheren, kooplieden. Sommigen van hen waren ook verantwoordelijk voor slavenhandel, oorlogsmisdaden of de onderdrukking van hele volken. De laatste jaren wordt daardoor steeds vaker gevraagd: moet zo'n beeld gewoon blijven staan?",
      "In 2020 gebeurde er in de Engelse stad Bristol iets wat de discussie in heel Europa aanwakkerde. Demonstranten trokken het standbeeld van Edward Colston, een slavenhandelaar uit de zeventiende eeuw, van zijn sokkel en gooiden het in de haven. Het beeld werd later opgevist en in een museum gezet, met uitleg over wie Colston werkelijk was.",
      "Wie vindt dat standbeelden moeten blijven staan, heeft daar duidelijke argumenten voor. Een standbeeld weghalen wist de geschiedenis niet uit, zeggen zij: het gebeurde al, of het beeld er nu staat of niet. Bovendien is een beeld een aanknopingspunt om juist over die geschiedenis te praten, zeker als er goede uitleg bij staat.",
      "Voorstanders van weghalen zien dat anders. Een standbeeld op een plein is geen geschiedenisles, zeggen zij, maar een eerbetoon. Als een gemeente iemand op een sokkel zet, zegt ze daarmee: kijk naar deze persoon, wees trots. Voor nabestaanden van tot slaaf gemaakte mensen voelt dat vaak als een klap in het gezicht.",
      "Een derde groep kiest een middenweg: het beeld laten staan, maar met een bord of kunstwerk ernaast dat het hele verhaal vertelt, inclusief het leed dat de persoon veroorzaakte. Zo blijft het beeld zichtbaar, zonder dat de stad doet alsof er niets aan de hand was.",
      "Wat de juiste keuze is, verschilt bovendien per beeld en per stad. Een klein bord bij een nauwelijks bekend standbeeld heeft misschien weinig effect, terwijl een groot beeld op een centraal plein veel meer aandacht trekt, en dus ook meer pijn kan doen.",
      "Eén ding is duidelijk: openbare ruimte verandert mee met de tijd. Straten worden omgedoopt, pleinen krijgen een andere naam, en misschien is het logisch dat ook standbeelden soms verplaatst worden. Definitieve antwoorden zijn er niet. En wat vind jij: moet zo'n beeld blijven staan, verdwijnen, of ergens tussenin?"
    ],
    en: [
      "In cities all over the world there are statues of people who used to be seen as heroes: explorers, generals, merchants. Some of them were also responsible for the slave trade, war crimes or the oppression of entire peoples. In recent years this has led to a question that comes up more and more often: should such a statue simply keep standing?",
      "In 2020 something happened in the English city of Bristol that fuelled the debate across Europe. Demonstrators pulled the statue of Edward Colston, a seventeenth-century slave trader, off its pedestal and threw it into the harbour. The statue was later fished out and placed in a museum, with an explanation of who Colston really was.",
      "Those who believe statues should stay have clear arguments for that. Removing a statue does not erase history, they say: it already happened, whether the statue is there or not. Besides, a statue is a starting point for talking about that history, especially if there is good context beside it.",
      "Supporters of removal see it differently. A statue on a square is not a history lesson, they say, but a tribute. When a city puts someone on a pedestal, it is saying: look at this person, be proud. For descendants of enslaved people, that often feels like a slap in the face.",
      "A third group chooses a middle way: leave the statue standing, but add a sign or artwork beside it that tells the whole story, including the harm the person caused. That way the statue stays visible, without the city pretending nothing happened.",
      "What the right choice is also differs per statue and per city. A small sign next to a barely known statue may have little effect, while a large statue on a central square draws far more attention, and so can also cause more pain.",
      "One thing is clear: public space changes along with the times. Streets get renamed, squares get new names, and perhaps it makes sense that statues too are sometimes moved. There are no final answers. And what do you think: should such a statue stay standing, disappear, or something in between?"
    ]
  },
  words: [
    { nl: 'slavenhandelaar', en: 'slave trader', defNl: 'iemand die vroeger mensen kocht en verkocht als slaaf', defEn: 'someone who used to buy and sell people as slaves' },
    { nl: 'nabestaanden', en: 'descendants', defNl: 'de familie en nakomelingen van iemand die overleden is', defEn: 'the family and descendants of someone who has died' },
    { nl: 'aanknopingspunt', en: 'starting point', defNl: 'iets waarmee je een gesprek of uitleg kunt beginnen', defEn: 'something you can use to start a conversation or explanation' }
  ],
  questions: [
    { id: 'q1', type: 'mc', skill: 'letterlijk',
      q: { nl: 'Wat deden demonstranten in 2020 met het standbeeld van Edward Colston in Bristol?',
           en: 'What did demonstrators do with the statue of Edward Colston in Bristol in 2020?' },
      options: [
        { nl: 'Ze trokken het van de sokkel en gooiden het in de haven', en: 'They pulled it off its pedestal and threw it into the harbour' },
        { nl: 'Ze schilderden het beeld helemaal rood', en: 'They painted the statue completely red' },
        { nl: 'Ze zetten er bloemen omheen', en: 'They placed flowers around it' },
        { nl: 'Ze verplaatsten het naar een ander plein', en: 'They moved it to a different square' }
      ], answer: 0,
      explain: { nl: 'Alinea 2: "Demonstranten trokken het standbeeld ... van zijn sokkel en gooiden het in de haven."',
                 en: 'Paragraph 2: "Demonstrators pulled the statue ... off its pedestal and threw it into the harbour."' } },
    { id: 'q2', type: 'sort', skill: 'feitmening',
      q: { nl: 'Feit of mening? Zet elke zin in de goede groep.', en: 'Fact or opinion? Put every sentence in the right group.' },
      bins: [{ nl: 'Feit', en: 'Fact' }, { nl: 'Mening', en: 'Opinion' }],
      items: [
        { nl: 'Het standbeeld van Colston werd in 2020 in de haven van Bristol gegooid.',
          en: 'The statue of Colston was thrown into the harbour of Bristol in 2020.', bin: 0 },
        { nl: 'Een standbeeld weghalen wist de geschiedenis niet uit.', en: 'Removing a statue does not erase history.', bin: 1 },
        { nl: 'Edward Colston was een slavenhandelaar uit de zeventiende eeuw.',
          en: 'Edward Colston was a seventeenth-century slave trader.', bin: 0 },
        { nl: 'Een standbeeld op een plein is vooral een eerbetoon, geen geschiedenisles.',
          en: 'A statue on a square is mainly a tribute, not a history lesson.', bin: 1 }
      ],
      explain: { nl: 'Jaartallen en gebeurtenissen kun je opzoeken. De andere twee zinnen zijn standpunten uit de discussie.',
                 en: 'Dates and events can be looked up. The other two sentences are positions in the debate.' } },
    { id: 'q3', type: 'mc', skill: 'doel',
      q: { nl: 'Wat is het doel van deze tekst?', en: 'What is the purpose of this text?' },
      options: [
        { nl: 'Verschillende kanten van de discussie laten zien en de lezer laten nadenken',
          en: 'Show different sides of the debate and make the reader think' },
        { nl: 'De lezer overtuigen dat alle standbeelden weg moeten', en: 'Convince the reader that every statue must go' },
        { nl: 'Uitleggen hoe je een standbeeld schoonmaakt', en: 'Explain how to clean a statue' },
        { nl: 'Reclame maken voor een bezoek aan Bristol', en: 'Advertise a visit to Bristol' }
      ], answer: 0,
      explain: { nl: 'De tekst geeft eerst beide kanten het woord en eindigt met de open vraag "En wat vind jij?"',
                 en: 'The text gives both sides a voice and ends with the open question "And what do you think?"' } },
    { id: 'q4', type: 'mc', skill: 'verwijswoorden',
      q: { nl: '"Zo blijft het beeld zichtbaar, zonder dat de stad doet alsof er niets aan de hand was." Waar verwijst "zo" naar?',
           en: '"That way the statue stays visible, without the city pretending nothing happened." What does "that way" refer to?' },
      options: [
        { nl: 'Het beeld laten staan met een bord of kunstwerk dat het hele verhaal vertelt',
          en: 'Leaving the statue standing with a sign or artwork that tells the whole story' },
        { nl: 'Het beeld weghalen en in een museum zetten', en: 'Removing the statue and placing it in a museum' },
        { nl: 'Het beeld optillen en naar een ander plein verplaatsen', en: 'Lifting the statue and moving it to another square' },
        { nl: 'Het beeld schoonmaken na de demonstratie', en: 'Cleaning the statue after the demonstration' }
      ], answer: 0,
      explain: { nl: 'Alinea 5 beschrijft eerst de middenweg: beeld laten staan plus bord of kunstwerk erbij. Daarnaar verwijst "zo".',
                 en: 'Paragraph 5 first describes the middle way: leave the statue plus add a sign or artwork. That is what "that way" refers to.' } },
    { id: 'q5', type: 'multi', skill: 'gevolgtrekking',
      q: { nl: 'Welke twee argumenten gebruiken mensen die vinden dat een standbeeld moet blijven staan? Kies er 2.',
           en: 'Which two arguments do people who think a statue should stay use? Pick 2.' },
      options: [
        { nl: 'Weghalen wist de geschiedenis niet uit', en: 'Removing it does not erase history' },
        { nl: 'Het beeld is een aanknopingspunt om over geschiedenis te praten', en: 'The statue is a starting point for talking about history' },
        { nl: 'Het beeld is te zwaar om te verplaatsen', en: 'The statue is too heavy to move' },
        { nl: 'Niemand vindt het beeld mooi genoeg om te bewaren', en: 'Nobody thinks the statue is pretty enough to keep' }
      ], answer: [0, 1],
      explain: { nl: 'Alinea 3 noemt precies deze twee argumenten. Over gewicht of schoonheid zegt de tekst niets.',
                 en: 'Paragraph 3 names exactly these two arguments. The text says nothing about weight or beauty.' } },
    { id: 'q6', type: 'tf', skill: 'gevolgtrekking',
      q: { nl: 'Volgens de tekst is er één duidelijk juist antwoord op de vraag of een omstreden beeld moet blijven staan.',
           en: 'According to the text there is one clearly correct answer to whether a controversial statue should stay standing.' },
      answer: false,
      explain: { nl: 'De slotalinea zegt juist: "Definitieve antwoorden zijn er niet."',
                 en: 'The closing paragraph says the opposite: "There are no final answers."' } },
    { id: 'q7', type: 'mc', skill: 'structuur',
      q: { nl: 'Alinea 4 begint met "Voorstanders van weghalen zien dat anders." Wat doet deze zin?',
           en: 'Paragraph 4 begins "Supporters of removal see it differently." What does this sentence do?' },
      options: [
        { nl: 'Ze zet de mening van voorstanders van weghalen tegenover die uit alinea 3',
          en: 'It sets the opinion of supporters of removal against the one in paragraph 3' },
        { nl: 'Ze vat de hele tekst kort samen', en: 'It briefly summarises the whole text' },
        { nl: 'Ze introduceert het voorbeeld van Bristol', en: 'It introduces the Bristol example' },
        { nl: 'Ze legt uit wanneer het beeld gemaakt is', en: 'It explains when the statue was made' }
      ], answer: 0,
      explain: { nl: 'Alinea 3 gaf de argumenten om te laten staan, alinea 4 geeft met "anders" het tegenovergestelde standpunt.',
                 en: 'Paragraph 3 gave the arguments for keeping it, paragraph 4 uses "differently" to give the opposite view.' } },
    { id: 'q8', type: 'mc', skill: 'samenvatten',
      q: { nl: 'Welke samenvatting past het beste?', en: 'Which summary fits best?' },
      options: [
        { nl: 'Standbeelden van mensen die ook kwaad deden, roepen discussie op: weghalen, laten staan, of laten staan met uitleg; een definitief antwoord is er niet.',
          en: 'Statues of people who also did harm cause debate: remove them, leave them, or leave them with an explanation; there is no final answer.' },
        { nl: 'In Bristol staat het standbeeld van Colston nog steeds op zijn oude plek.',
          en: 'In Bristol the statue of Colston still stands in its old place.' },
        { nl: 'Alle historici zijn het erover eens dat standbeelden weg moeten.', en: 'All historians agree that statues must go.' },
        { nl: 'Standbeelden worden altijd van brons gemaakt.', en: 'Statues are always made of bronze.' }
      ], answer: 0,
      explain: { nl: 'Die samenvatting pakt de kern van elke alinea: het probleem, de drie mogelijke keuzes en de open vraag. De rest zijn losse of onjuiste details.',
                 en: 'That summary captures the core of every paragraph: the problem, the three possible choices and the open question. The rest are single or incorrect details.' } },
    { id: 'q9', type: 'mc', skill: 'woordenschat',
      q: { nl: 'In de tekst is een standbeeld voor sommigen een "aanknopingspunt". Wat betekent dat hier?',
           en: 'In the text a statue is, for some, a "starting point". What does that mean here?' },
      options: [
        { nl: 'Iets waarmee je een gesprek over geschiedenis kunt beginnen', en: 'Something you can use to start a conversation about history' },
        { nl: 'Een plek waar mensen elkaar ontmoeten om te winkelen', en: 'A place where people meet to shop' },
        { nl: 'Het moment waarop een beeld gemaakt wordt', en: 'The moment a statue is made' },
        { nl: 'Een soort standbeeld dat van steen is', en: 'A type of statue made of stone' }
      ], answer: 0,
      explain: { nl: 'Alinea 3: een beeld is "een aanknopingspunt om juist over die geschiedenis te praten".',
                 en: 'Paragraph 3: a statue is "a starting point for talking about that history".' } }
  ]
},
{
  id: 'ridders-11', topic: 'ridders', level: 1, emoji: '🌉', scene: 'castle',
  title: { nl: 'Hoe verdedig je een kasteel?', en: 'How do you defend a castle?' },
  text: {
    nl: [
      "Een kasteel was vroeger niet alleen een huis voor een heer of een koning. Het was ook een fort. Als er vijanden kwamen, moest iedereen binnen veilig zijn.",
      "Rond veel kastelen lag een brede sloot vol water: de slotgracht. Vijanden konden daar niet zomaar overheen lopen. Wie toch wilde zwemmen, werd met zware kleren of een harnas aan snel moe.",
      "Over de gracht lag een ophaalbrug. Kwam er gevaar, dan trokken de soldaten de brug met kettingen omhoog. Achter de brug zat een zware poort van hout en ijzer.",
      "De muren waren dik en hoog. Bovenop liepen de verdedigers achter kantelen: stukken muur met gaten ertussen. Door die gaten konden ze pijlen schieten en zich daarna weer verstoppen.",
      "Binnen de muren lag genoeg eten en was er een waterput. Zo kon het kasteel het wekenlang volhouden. Vaak gaven de vijanden het daarom na een tijdje op."
    ],
    en: [
      "Long ago a castle was not just a home for a lord or a king. It was also a fortress. When enemies came, everyone inside had to be safe.",
      "Around many castles lay a wide ditch full of water: the moat. Enemies could not simply walk across it. Anyone who tried to swim got tired quickly in heavy clothes or armour.",
      "Across the moat lay a drawbridge. When danger came, the soldiers pulled the bridge up with chains. Behind the bridge was a heavy gate of wood and iron.",
      "The walls were thick and high. On top, the defenders walked behind battlements: pieces of wall with gaps in between. Through those gaps they could shoot arrows and then hide again.",
      "Inside the walls there was plenty of food and a well for water. That way the castle could hold out for weeks. So the enemies often gave up after a while."
    ]
  },
  words: [
    { nl: 'slotgracht', en: 'moat', defNl: 'een brede sloot met water rond een kasteel', defEn: 'a wide ditch of water around a castle' },
    { nl: 'ophaalbrug', en: 'drawbridge', defNl: 'een brug die je omhoog kunt trekken', defEn: 'a bridge that can be pulled up' },
    { nl: 'kantelen', en: 'battlements', defNl: 'stukken muur met gaten ertussen, bovenop een kasteel', defEn: 'pieces of wall with gaps between them, on top of a castle' }
  ],
  questions: [
    { id: 'q1', type: 'mc', skill: 'letterlijk',
      q: { nl: 'Wat deden de soldaten met de ophaalbrug als er gevaar kwam?', en: 'What did the soldiers do with the drawbridge when danger came?' },
      options: [
        { nl: 'Ze staken hem in brand', en: 'They set it on fire' },
        { nl: 'Ze trokken hem met kettingen omhoog', en: 'They pulled it up with chains' },
        { nl: 'Ze lieten hem in de gracht vallen', en: 'They dropped it into the moat' },
        { nl: 'Ze verfden hem zwart', en: 'They painted it black' }
      ], answer: 1,
      explain: { nl: 'Alinea 3: "Kwam er gevaar, dan trokken de soldaten de brug met kettingen omhoog."',
                 en: 'Paragraph 3: "When danger came, the soldiers pulled the bridge up with chains."' } },
    { id: 'q2', type: 'tf', skill: 'letterlijk',
      q: { nl: 'Binnen de muren van het kasteel was een waterput.', en: 'There was a well inside the castle walls.' },
      answer: true,
      explain: { nl: 'Waar. Alinea 5: "Binnen de muren lag genoeg eten en was er een waterput."',
                 en: 'True. Paragraph 5: "Inside the walls there was plenty of food and a well for water."' } },
    { id: 'q3', type: 'gap', skill: 'woordenschat',
      q: { nl: 'De brede sloot met water rond een kasteel heet de ___.', en: 'The wide ditch of water around a castle is called the ___.' },
      options: [
        { nl: 'kantelen', en: 'battlements' },
        { nl: 'poort', en: 'gate' },
        { nl: 'slotgracht', en: 'moat' },
        { nl: 'toren', en: 'tower' }
      ], answer: 2,
      explain: { nl: 'Alinea 2 legt het uit: "een brede sloot vol water: de slotgracht."',
                 en: 'Paragraph 2 explains it: "a wide ditch full of water: the moat."' } },
    { id: 'q4', type: 'order', skill: 'volgorde',
      q: { nl: 'Een vijand komt van buiten. Wat moet hij achter elkaar voorbij? Zet het in de goede volgorde.', en: 'An enemy comes from outside. What must he get past, one after another? Put it in the right order.' },
      items: [
        { nl: 'De slotgracht met water', en: 'The moat with water' },
        { nl: 'De opgetrokken ophaalbrug', en: 'The raised drawbridge' },
        { nl: 'De zware poort van hout en ijzer', en: 'The heavy gate of wood and iron' },
        { nl: 'De binnenplaats van het kasteel', en: 'The courtyard inside the castle' }
      ], answer: [0, 1, 2, 3],
      explain: { nl: 'Eerst ligt de gracht, daarover de brug, achter de brug de poort, en pas dan ben je binnen.',
                 en: 'First comes the moat, across it the bridge, behind the bridge the gate, and only then are you inside.' } },
    { id: 'q5', type: 'mc', skill: 'hoofdgedachte',
      q: { nl: 'Waar gaat de tekst vooral over?', en: 'What is the text mainly about?' },
      options: [
        { nl: 'Hoe een kasteel gebouwd was om vijanden buiten te houden', en: 'How a castle was built to keep enemies out' },
        { nl: 'Wat een koning at', en: 'What a king ate' },
        { nl: 'Hoe je leert zwemmen in een harnas', en: 'How to learn to swim in armour' },
        { nl: 'Waarom kastelen nu musea zijn', en: 'Why castles are museums now' }
      ], answer: 0,
      explain: { nl: 'Elke alinea noemt een manier om het kasteel te verdedigen: gracht, brug, muren en voorraad.',
                 en: 'Every paragraph names a way to defend the castle: moat, bridge, walls and supplies.' } }
  ]
}
]);
