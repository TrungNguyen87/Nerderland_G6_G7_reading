/* Vervolgverhaal - Techniek & Ontdekking: Robot Rik
   Hoofdstuk 1 = groep 6 (niveau 2), 2 = groep 7 (niveau 4), 3 = groep 8 (niveau 6). */
addSeries({
  id: 'robotrik', topic: 'techniek', emoji: '🤖',
  title: { nl: 'Robot Rik', en: 'Robot Rik' },
  blurb: { nl: 'Een tweeling bouwt een robot die afval sorteert. Alleen denkt Rik dat een banaan een krant is...',
           en: 'A pair of twins builds a robot that sorts rubbish. Only Rik thinks a banana is a newspaper...' },
  chapters: [
{
  level: 2, emoji: '🔧', scene: 'lab',
  title: { nl: 'Een robot voor de wedstrijd', en: 'A robot for the contest' },
  teaser: { nl: 'Waarom maakt Rik steeds fouten, en lukt het de tweeling om hem op tijd te verbeteren?', en: 'Why does Rik keep making mistakes, and will the twins manage to improve him in time?' },
  text: {
    nl: [
      "Fenna en Jens zijn een tweeling van elf. Op school is er een uitvinderswedstrijd. Het thema is: maak iets wat de school beter maakt. De tweeling weet meteen wat ze willen bouwen: een robot die afval sorteert.",
      "Op school gooit bijna iedereen alles in dezelfde bak. Papier, plastic en schillen gaan allemaal samen weg. “Dat is zonde”, zegt Fenna. “Papier en plastic kun je opnieuw gebruiken, maar dan moet het wel apart.”",
      "Ze bouwen de robot van een oude speelgoedauto, een camera en een bouwpakketje met een klein computertje. Opa geeft hun een grijper van een oude grijpmachine. Na drie weekenden werk is de robot klaar. Ze noemen hem Rik.",
      "De eerste test doen ze in de keuken. Jens legt een krant, een plastic fles en een bananenschil op tafel. Rik zoemt, draait zijn camera en rijdt vol tegen de koelkast. Daarna pakt hij de bananenschil en legt hem bij het papier.",
      "Fenna moet zo lachen dat ze van haar stoel valt. Jens lacht niet. “Over twee weken is de wedstrijd”, zegt hij. “En onze robot denkt dat een banaan een krant is.”",
      "De volgende dag vertellen ze het aan juf Esra. Zij kijkt naar Rik en glimlacht. “Een robot is niet dom en niet slim”, zegt ze. “Hij doet precies wat jullie hem vertellen. Dus wat hebben jullie hem verteld?”"
    ],
    en: [
      "Fenna and Jens are eleven-year-old twins. At school there is an inventors’ contest. The theme is: make something that makes the school better. The twins know straight away what they want to build: a robot that sorts rubbish.",
      "At school almost everybody throws everything into the same bin. Paper, plastic and peel all go away together. “That is a waste,” says Fenna. “You can use paper and plastic again, but only if they are kept apart.”",
      "They build the robot from an old toy car, a camera and a kit with a tiny computer. Grandpa gives them a claw from an old claw machine. After three weekends of work the robot is finished. They call him Rik.",
      "They do the first test in the kitchen. Jens puts a newspaper, a plastic bottle and a banana peel on the table. Rik buzzes, turns his camera and drives straight into the fridge. Then he picks up the banana peel and puts it with the paper.",
      "Fenna laughs so much that she falls off her chair. Jens does not laugh. “The contest is in two weeks,” he says. “And our robot thinks a banana is a newspaper.”",
      "The next day they tell Miss Esra. She looks at Rik and smiles. “A robot is not stupid and not clever,” she says. “He does exactly what you tell him. So what did you tell him?”"
    ]
  },
  words: [
    { nl: 'tweeling', en: 'twins', defNl: 'twee kinderen die op dezelfde dag uit dezelfde moeder geboren zijn', defEn: 'two children born to the same mother on the same day' },
    { nl: 'sorteert', en: 'sorts', defNl: 'dingen in groepjes verdelen die bij elkaar horen (sorteren)', defEn: 'divides things into groups that belong together (to sort)' },
    { nl: 'grijper', en: 'claw', defNl: 'een soort mechanische hand die dingen kan oppakken', defEn: 'a kind of mechanical hand that can pick things up' }
  ],
  questions: [
    { id: 'q1', type: 'mc', skill: 'letterlijk',
      q: { nl: 'Wat moet Rik gaan doen?', en: 'What is Rik supposed to do?' },
      options: [
        { nl: 'Afval sorteren', en: 'Sort rubbish' },
        { nl: 'Het schoolplein vegen', en: 'Sweep the playground' },
        { nl: 'Boeken uitlenen', en: 'Lend out books' },
        { nl: 'Planten water geven', en: 'Water plants' }
      ], answer: 0,
      explain: { nl: 'Alinea 1: ze willen een robot bouwen die afval sorteert.', en: 'Paragraph 1: they want to build a robot that sorts rubbish.' } },
    { id: 'q2', type: 'tf', skill: 'letterlijk',
      q: { nl: 'Fenna en Jens bouwen de robot in één middag.', en: 'Fenna and Jens build the robot in one afternoon.' },
      answer: false,
      explain: { nl: 'Het kost drie weekenden werk.', en: 'It takes three weekends of work.' } },
    { id: 'q3', type: 'mc', skill: 'gevolgtrekking',
      q: { nl: 'Waarom vindt Fenna het zonde dat alles in één bak gaat?', en: 'Why does Fenna think it is a waste that everything goes into one bin?' },
      options: [
        { nl: 'Papier en plastic kun je opnieuw gebruiken als ze apart zijn', en: 'Paper and plastic can be used again if they are kept apart' },
        { nl: 'De bak is veel te klein', en: 'The bin is much too small' },
        { nl: 'De bak stinkt verschrikkelijk', en: 'The bin smells terrible' },
        { nl: 'De juf wil geen afval op school', en: 'The teacher wants no rubbish at school' }
      ], answer: 0,
      explain: { nl: 'Fenna zegt: “Papier en plastic kun je opnieuw gebruiken, maar dan moet het wel apart.”', en: 'Fenna says: “You can use paper and plastic again, but only if they are kept apart.”' } },
    { id: 'q4', type: 'order', skill: 'volgorde',
      q: { nl: 'Zet op volgorde wat er gebeurt.', en: 'Put what happens in order.' },
      items: [
        { nl: 'De school houdt een uitvinderswedstrijd.', en: 'The school holds an inventors’ contest.' },
        { nl: 'Opa geeft een grijper.', en: 'Grandpa gives them a claw.' },
        { nl: 'Rik rijdt tegen de koelkast.', en: 'Rik drives into the fridge.' },
        { nl: 'Juf Esra zegt dat een robot doet wat je hem vertelt.', en: 'Miss Esra says a robot does what you tell it.' }
      ], answer: [0, 1, 2, 3],
      explain: { nl: 'De wedstrijd, het bouwen, de test in de keuken en de volgende dag de juf.', en: 'The contest, the building, the test in the kitchen and the next day the teacher.' } },
    { id: 'q5', type: 'gap', skill: 'woordenschat',
      q: { nl: 'Twee kinderen die op dezelfde dag uit dezelfde moeder geboren zijn, heten een ___.', en: 'Two children born to the same mother on the same day are called ___.' },
      options: [
        { nl: 'tweeling', en: 'twins' },
        { nl: 'familie', en: 'a family' },
        { nl: 'klas', en: 'a class' },
        { nl: 'buren', en: 'neighbours' }
      ], answer: 0,
      explain: { nl: 'Fenna en Jens zijn een tweeling: ze zijn allebei elf en op dezelfde dag geboren.', en: 'Fenna and Jens are twins: they are both eleven and born on the same day.' } },
    { id: 'q6', type: 'mc', skill: 'gevolgtrekking',
      q: { nl: 'Wat bedoelt juf Esra, denk je?', en: 'What do you think Miss Esra means?' },
      options: [
        { nl: 'De fout zit in wat Fenna en Jens de robot hebben opgedragen', en: 'The mistake is in what Fenna and Jens told the robot to do' },
        { nl: 'Rik is helemaal kapot', en: 'Rik is completely broken' },
        { nl: 'Robots kunnen nooit iets leren', en: 'Robots can never learn anything' },
        { nl: 'Ze moeten een nieuwe robot kopen', en: 'They should buy a new robot' }
      ], answer: 0,
      explain: { nl: 'Een robot doet precies wat je hem vertelt. Doet hij iets raars, dan moet je naar je eigen opdrachten kijken.', en: 'A robot does exactly what you tell it. If it does something strange, you have to look at your own instructions.' } }
  ]
},
{
  level: 4, emoji: '💻', scene: 'lab',
  title: { nl: 'Als dit, dan dat', en: 'If this, then that' },
  recap: { nl: 'Fenna en Jens bouwen voor de uitvinderswedstrijd een robot die afval sorteert: Rik. Maar bij de eerste test rijdt Rik tegen de koelkast en legt hij een bananenschil bij het papier. Juf Esra zegt: “Hij doet precies wat jullie hem vertellen.”',
           en: 'For the inventors’ contest Fenna and Jens build a robot that sorts rubbish: Rik. But at the first test Rik drives into the fridge and puts a banana peel with the paper. Miss Esra says: “He does exactly what you tell him.”' },
  teaser: { nl: 'Kan Rik nog gerepareerd worden voor de wedstrijd van morgen?', en: 'Can Rik still be repaired before tomorrow’s contest?' },
  text: {
    nl: [
      "Die avond keken Fenna en Jens naar het programma van Rik. Een computerprogramma bestaat uit regels, en elke regel is een opdracht. Hun belangrijkste regel was: ‘Als het ding oranje is, dan is het plastic. Anders is het papier.’ Jens sloeg zich voor zijn hoofd. Een bananenschil is geel, dus niet oranje. Volgens hun eigen regel was een banaan dus papier.",
      "Zo'n fout in een programma heet een bug. Het woord betekent eigenlijk ‘insect’. Lang geleden kroop er een echte mot in een computer, waardoor die niet meer werkte. Sindsdien noemen programmeurs elke fout een bug. Ook Rik had dus een bug.",
      "De tweeling schreef nieuwe regels. Als het ding geel of bruin is, is het groente- of fruitafval. Als het glanst en knispert, is het plastic. En de botsing met de koelkast? Rik had een afstandssensor, maar die zat verkeerd om. Hij keek naar het plafond in plaats van naar voren. Ze draaiden hem om, en vanaf dat moment stopte Rik netjes voor elke muur.",
      "Ze testten Rik met vijftig dingen uit de afvalbak. Hij deed er eenenveertig goed. Toen kwam de buurvrouw kijken, mevrouw Bakker, die vroeger ingenieur was. “Regels zijn goed”, zei ze, “maar er bestaan zoveel soorten afval dat je nooit genoeg regels kunt bedenken. Je kunt een computer ook laten leren van voorbeelden.” Dan moesten ze honderden foto's maken, van elk ding met het goede antwoord erbij. Het computertje zoekt daarna zelf naar wat de foto's gemeen hebben.",
      "Een week lang fotografeerden ze afval: tweehonderdveertig foto's. Na het leren deed Rik er zevenenveertig van de vijftig goed. Maar de avond voor de wedstrijd stootte Jens zijn glas limonade om. De plakkerige limonade liep precies over het computertje van Rik. “Nee, nee, nee”, fluisterde Fenna. Er kwam een klein wolkje rook uit, en toen ging het lampje uit."
    ],
    en: [
      "That evening Fenna and Jens looked at Rik’s program. A computer program is made of rules, and every rule is an instruction. Their most important rule was: ‘If the thing is orange, then it is plastic. Otherwise it is paper.’ Jens slapped his forehead. A banana peel is yellow, so not orange. According to their own rule, a banana was paper.",
      "A mistake like that in a program is called a bug. The word actually means ‘insect’. Long ago a real moth crawled into a computer, which made it stop working. Since then programmers have called every mistake a bug. So Rik had a bug too.",
      "The twins wrote new rules. If the thing is yellow or brown, it is fruit or vegetable waste. If it shines and crackles, it is plastic. And the crash into the fridge? Rik had a distance sensor, but it had been fitted the wrong way round. It was looking at the ceiling instead of straight ahead. They turned it round, and from then on Rik stopped neatly in front of every wall.",
      "They tested Rik with fifty things from the rubbish bin. He got forty-one right. Then the neighbour came to have a look, Mrs Bakker, who used to be an engineer. “Rules are good,” she said, “but there are so many kinds of rubbish that you can never think of enough rules. You can also let a computer learn from examples.” Then they would have to take hundreds of photos, of every thing with the right answer next to it. After that the tiny computer looks by itself for what the photos have in common.",
      "For a week they photographed rubbish: two hundred and forty photos. After learning, Rik got forty-seven out of fifty right. But on the evening before the contest Jens knocked over his glass of lemonade. The sticky lemonade ran right over Rik’s tiny computer. “No, no, no,” whispered Fenna. A little puff of smoke came out, and then the light went off."
    ]
  },
  words: [
    { nl: 'bug', en: 'bug', defNl: 'een fout in een computerprogramma', defEn: 'a mistake in a computer program' },
    { nl: 'programmeurs', en: 'programmers', defNl: 'mensen die computerprogramma’s schrijven', defEn: 'people who write computer programs' },
    { nl: 'afstandssensor', en: 'distance sensor', defNl: 'een onderdeel dat meet hoe ver iets weg is', defEn: 'a part that measures how far away something is' }
  ],
  questions: [
    { id: 'q1', type: 'mc', skill: 'letterlijk',
      q: { nl: 'Wat was de belangrijkste regel in het eerste programma van Rik?', en: 'What was the most important rule in Rik’s first program?' },
      options: [
        { nl: 'Als het oranje is, is het plastic; anders papier', en: 'If it is orange, it is plastic; otherwise paper' },
        { nl: 'Als het groot is, is het papier', en: 'If it is big, it is paper' },
        { nl: 'Als het nat is, gaat het weg', en: 'If it is wet, it goes away' },
        { nl: 'Rij altijd rechtdoor', en: 'Always drive straight ahead' }
      ], answer: 0,
      explain: { nl: 'Alinea 1: ‘Als het ding oranje is, dan is het plastic. Anders is het papier.’', en: 'Paragraph 1: ‘If the thing is orange, then it is plastic. Otherwise it is paper.’' } },
    { id: 'q2', type: 'mc', skill: 'gevolgtrekking',
      q: { nl: 'Waarom legde Rik de bananenschil bij het papier?', en: 'Why did Rik put the banana peel with the paper?' },
      options: [
        { nl: 'De schil was geel, dus niet oranje, dus volgens de regel papier', en: 'The peel was yellow, so not orange, so paper according to the rule' },
        { nl: 'Rik vond bananen lekker', en: 'Rik liked bananas' },
        { nl: 'De camera van Rik was kapot', en: 'Rik’s camera was broken' },
        { nl: 'De bananenschil was van papier gemaakt', en: 'The banana peel was made of paper' }
      ], answer: 0,
      explain: { nl: 'Rik deed precies wat de regel zei. Alles wat niet oranje was, noemde hij papier.', en: 'Rik did exactly what the rule said. Everything that was not orange, he called paper.' } },
    { id: 'q3', type: 'mc', skill: 'verwijswoorden',
      q: { nl: '“Hij keek naar het plafond in plaats van naar voren.” Wat is “hij”?', en: '“It was looking at the ceiling instead of straight ahead.” What is “it”?' },
      options: [
        { nl: 'De afstandssensor', en: 'The distance sensor' },
        { nl: 'Jens', en: 'Jens' },
        { nl: 'De koelkast', en: 'The fridge' },
        { nl: 'Mevrouw Bakker', en: 'Mrs Bakker' }
      ], answer: 0,
      explain: { nl: 'De zin ervoor: “Rik had een afstandssensor, maar die zat verkeerd om.” Die sensor keek omhoog.', en: 'The sentence before: “Rik had a distance sensor, but it had been fitted the wrong way round.” That sensor looked upwards.' } },
    { id: 'q4', type: 'multi', skill: 'letterlijk',
      q: { nl: 'Welke nieuwe regels schreef de tweeling? Kies er 2.', en: 'Which new rules did the twins write? Pick 2.' },
      options: [
        { nl: 'Geel of bruin is groente- of fruitafval', en: 'Yellow or brown is fruit or vegetable waste' },
        { nl: 'Als het glanst en knispert, is het plastic', en: 'If it shines and crackles, it is plastic' },
        { nl: 'Alles wat groot is, is papier', en: 'Everything big is paper' },
        { nl: 'Alles wat nat is, is restafval', en: 'Everything wet is general waste' }
      ], answer: [0, 1],
      explain: { nl: 'Alinea 3 noemt de regel voor geel of bruin en de regel voor glanzen en knisperen.', en: 'Paragraph 3 gives the rule for yellow or brown and the rule for shining and crackling.' } },
    { id: 'q5', type: 'order', skill: 'volgorde',
      q: { nl: 'Zet in de volgorde van het verhaal.', en: 'Put these in the order of the story.' },
      items: [
        { nl: 'Ze vinden de fout in de regel.', en: 'They find the mistake in the rule.' },
        { nl: 'Ze draaien de afstandssensor om.', en: 'They turn the distance sensor round.' },
        { nl: 'Ze testen Rik met vijftig dingen.', en: 'They test Rik with fifty things.' },
        { nl: 'Mevrouw Bakker vertelt over leren van voorbeelden.', en: 'Mrs Bakker talks about learning from examples.' },
        { nl: 'Jens stoot zijn limonade om.', en: 'Jens knocks over his lemonade.' }
      ], answer: [0, 1, 2, 3, 4],
      explain: { nl: 'Eerst de bug, dan de sensor, de test, de tip van de buurvrouw en de avond voor de wedstrijd het ongeluk.', en: 'First the bug, then the sensor, the test, the neighbour’s tip and on the evening before the contest the accident.' } },
    { id: 'q6', type: 'gap', skill: 'woordenschat',
      q: { nl: 'Een fout in een computerprogramma heet een ___.', en: 'A mistake in a computer program is called a ___.' },
      options: [
        { nl: 'bug', en: 'bug' },
        { nl: 'sensor', en: 'sensor' },
        { nl: 'robot', en: 'robot' },
        { nl: 'camera', en: 'camera' }
      ], answer: 0,
      explain: { nl: 'Een bug is een fout in een programma, genoemd naar een echte mot die ooit in een computer kroop.', en: 'A bug is a mistake in a program, named after a real moth that once crawled into a computer.' } },
    { id: 'q7', type: 'mc', skill: 'structuur',
      q: { nl: 'Waarom staat alinea 2 in de tekst?', en: 'Why is paragraph 2 in the text?' },
      options: [
        { nl: 'Om uit te leggen waar het woord “bug” vandaan komt', en: 'To explain where the word “bug” comes from' },
        { nl: 'Om een insect te beschrijven', en: 'To describe an insect' },
        { nl: 'Om te vertellen dat de computer van Rik oud is', en: 'To tell you that Rik’s computer is old' },
        { nl: 'Om te zeggen dat er een mot in Rik zit', en: 'To say that there is a moth inside Rik' }
      ], answer: 0,
      explain: { nl: 'Alinea 2 onderbreekt het verhaal even voor uitleg over het woord bug.', en: 'Paragraph 2 briefly interrupts the story to explain the word bug.' } },
    { id: 'q8', type: 'mc', skill: 'hoofdgedachte',
      q: { nl: 'Wat leren Fenna en Jens vooral in dit hoofdstuk?', en: 'What do Fenna and Jens mainly learn in this chapter?' },
      options: [
        { nl: 'Hoe je fouten in een robot vindt, en dat een computer kan leren van voorbeelden', en: 'How to find mistakes in a robot, and that a computer can learn from examples' },
        { nl: 'Hoe je limonade maakt', en: 'How to make lemonade' },
        { nl: 'Hoe je een koelkast repareert', en: 'How to repair a fridge' },
        { nl: 'Hoe je mooie foto’s maakt', en: 'How to take beautiful photos' }
      ], answer: 0,
      explain: { nl: 'Ze vinden de bugs, verbeteren de regels en laten Rik leren van tweehonderdveertig foto’s.', en: 'They find the bugs, improve the rules and let Rik learn from two hundred and forty photos.' } }
  ]
},
{
  level: 6, emoji: '🏅', scene: 'school',
  title: { nl: 'Wat Rik niet wist', en: 'What Rik did not know' },
  recap: { nl: 'Fenna en Jens vinden de bugs in het programma van hun afvalrobot Rik en leren hem sorteren met tweehonderdveertig foto’s. Maar de avond voor de uitvinderswedstrijd valt er limonade over zijn computertje. Er komt rook uit, en Rik doet niets meer.',
           en: 'Fenna and Jens find the bugs in the program of their rubbish robot Rik and teach him to sort with two hundred and forty photos. But on the evening before the inventors’ contest lemonade spills over his tiny computer. Smoke comes out, and Rik stops working.' },
  text: {
    nl: [
      "Om zes uur 's ochtends stonden Fenna en Jens met opa in de schuur. Opa haalde het computertje voorzichtig los en spoelde het af met een beetje alcohol, die veel sneller opdroogt dan water. Daarna ontdekte hij dat er alleen een zekering was doorgebrand, een klein onderdeel dat juist kapotgaat om de rest te beschermen. Om half acht zoemde Rik weer. Het leren was niet verloren gegaan: dat zat opgeslagen op een geheugenkaartje.",
      "In de gymzaal stonden twaalf uitvindingen. Naast Rik stond de robot van groep 8B, glanzend wit en met twee armen die razendsnel bewogen. “Die van ons ziet eruit als een speelgoedauto met een grijper”, fluisterde Jens. “Dat ís ook een speelgoedauto met een grijper”, zei Fenna.",
      "Toen de jury bij hun tafel kwam, legde een vrouw een papieren drinkbeker neer. Rik draaide zijn camera, dacht even na en legde de beker bij het plastic. Een paar kinderen grinnikten. Fenna voelde haar wangen gloeien. De voorzitter van de jury, een onderzoeker die zelf met slimme computers werkt, vroeg waarom Rik dat deed.",
      "Fenna haalde diep adem. “Omdat die beker bijna plastic ís”, zei ze. “Er zit aan de binnenkant een dun laagje plastic, anders lekt hij. Daardoor glanst hij, net als een plastic fles. Rik heeft geleerd van onze foto's, en tussen onze foto's zat geen enkele drinkbeker. Een computer kan alleen zo goed zijn als de voorbeelden die je hem geeft.” De onderzoeker knikte langzaam. “Dat is precies het probleem waar grote bedrijven ook mee worstelen”, zei ze.",
      "Daarna stelde ze nog een moeilijke vraag. “Als robots straks al het afval sorteren, hebben de mensen die dat nu doen dan nog werk?” Jens dacht na. “Misschien moet een robot het vieze en saaie werk doen”, zei hij. “En mensen het werk waarvoor je moet nadenken, zoals het kiezen van de voorbeelden.” Of dat eerlijk is voor iedereen, wist hij niet zeker.",
      "De glanzende robot van 8B won de eerste prijs. Maar Fenna en Jens kregen de juryprijs voor de beste uitleg. Rik mocht in de aula blijven staan, naast de afvalbakken. Op de eerste dag maakte de tweeling meteen dertig foto's van drinkbekers. Want ook een robot leert nooit uit."
    ],
    en: [
      "At six in the morning Fenna and Jens were standing in the shed with Grandpa. Grandpa carefully took out the tiny computer and rinsed it with a little alcohol, which dries much faster than water. Then he discovered that only a fuse had blown, a small part that breaks on purpose to protect the rest. At half past seven Rik was buzzing again. The learning had not been lost: it was stored on a memory card.",
      "In the gym there were twelve inventions. Next to Rik stood the robot of class 8B, shiny white and with two arms that moved lightning-fast. “Ours looks like a toy car with a claw,” whispered Jens. “It is a toy car with a claw,” said Fenna.",
      "When the jury came to their table, a woman put down a paper cup. Rik turned his camera, thought for a moment and put the cup with the plastic. A few children giggled. Fenna felt her cheeks burn. The chair of the jury, a researcher who works with smart computers herself, asked why Rik did that.",
      "Fenna took a deep breath. “Because that cup is almost plastic,” she said. “There is a thin layer of plastic on the inside, otherwise it leaks. That makes it shine, just like a plastic bottle. Rik learned from our photos, and there was not a single paper cup among our photos. A computer can only be as good as the examples you give it.” The researcher nodded slowly. “That is exactly the problem big companies struggle with too,” she said.",
      "Then she asked another difficult question. “If robots sort all the rubbish one day, will the people who do that now still have work?” Jens thought about it. “Maybe a robot should do the dirty and boring work,” he said. “And people the work you have to think for, like choosing the examples.” Whether that is fair for everybody, he was not sure.",
      "The shiny robot from 8B won first prize. But Fenna and Jens got the jury prize for the best explanation. Rik was allowed to stay in the school hall, next to the bins. On the very first day the twins took thirty photos of paper cups. Because even a robot never stops learning."
    ]
  },
  words: [
    { nl: 'zekering', en: 'fuse', defNl: 'een klein onderdeel dat expres kapotgaat om de rest van een apparaat te beschermen', defEn: 'a small part that breaks on purpose to protect the rest of a device' },
    { nl: 'onderzoeker', en: 'researcher', defNl: 'iemand die beroepsmatig nieuwe dingen uitzoekt', defEn: 'somebody whose job is to find out new things' },
    { nl: 'worstelen', en: 'to struggle', defNl: 'moeite hebben met iets, er niet makkelijk uitkomen', defEn: 'to have difficulty with something, not easily solve it' }
  ],
  questions: [
    { id: 'q1', type: 'mc', skill: 'letterlijk',
      q: { nl: 'Wat was er kapot aan Rik na de limonade?', en: 'What was broken in Rik after the lemonade?' },
      options: [
        { nl: 'Alleen een zekering was doorgebrand', en: 'Only a fuse had blown' },
        { nl: 'De camera', en: 'The camera' },
        { nl: 'Het geheugenkaartje', en: 'The memory card' },
        { nl: 'De wielen', en: 'The wheels' }
      ], answer: 0,
      explain: { nl: 'Alinea 1: opa ontdekte dat er alleen een zekering was doorgebrand.', en: 'Paragraph 1: Grandpa discovered that only a fuse had blown.' } },
    { id: 'q2', type: 'find', skill: 'gevolgtrekking',
      q: { nl: 'Welke zin laat zien waarom Rik de drinkbeker fout sorteerde?', en: 'Which sentence shows why Rik sorted the cup wrongly?' },
      options: [
        { nl: 'Rik draaide zijn camera, dacht even na en legde de beker bij het plastic.', en: 'Rik turned his camera, thought for a moment and put the cup with the plastic.' },
        { nl: 'Een paar kinderen grinnikten.', en: 'A few children giggled.' },
        { nl: "Rik heeft geleerd van onze foto's, en tussen onze foto's zat geen enkele drinkbeker.", en: 'Rik learned from our photos, and there was not a single paper cup among our photos.' },
        { nl: 'De glanzende robot van 8B won de eerste prijs.', en: 'The shiny robot from 8B won first prize.' }
      ], answer: 2,
      explain: { nl: 'Rik had nooit een voorbeeld van een drinkbeker gezien. Wat hij niet heeft geleerd, kan hij niet weten.', en: 'Rik had never seen an example of a paper cup. What he has not learned, he cannot know.' } },
    { id: 'q3', type: 'gap', skill: 'woordenschat',
      q: { nl: 'Een ___ is een klein onderdeel dat expres kapotgaat om de rest van een apparaat te beschermen.', en: 'A ___ is a small part that breaks on purpose to protect the rest of a device.' },
      options: [
        { nl: 'zekering', en: 'fuse' },
        { nl: 'geheugenkaartje', en: 'memory card' },
        { nl: 'grijper', en: 'claw' },
        { nl: 'sensor', en: 'sensor' }
      ], answer: 0,
      explain: { nl: 'Doordat de zekering doorbrandde, bleef de rest van het computertje heel.', en: 'Because the fuse blew, the rest of the tiny computer stayed whole.' } },
    { id: 'q4', type: 'order', skill: 'volgorde',
      q: { nl: 'Zet in de volgorde van het verhaal.', en: 'Put these in the order of the story.' },
      items: [
        { nl: 'Opa spoelt het computertje af met alcohol.', en: 'Grandpa rinses the tiny computer with alcohol.' },
        { nl: 'Rik zoemt weer om half acht.', en: 'Rik is buzzing again at half past seven.' },
        { nl: 'De jury legt een drinkbeker neer.', en: 'The jury puts down a paper cup.' },
        { nl: 'Fenna legt uit waarom Rik een fout maakte.', en: 'Fenna explains why Rik made a mistake.' },
        { nl: 'De tweeling fotografeert drinkbekers.', en: 'The twins photograph paper cups.' }
      ], answer: [0, 1, 2, 3, 4],
      explain: { nl: 'De reparatie in de schuur, de wedstrijd met de jury, en daarna Rik in de aula.', en: 'The repair in the shed, the contest with the jury, and afterwards Rik in the school hall.' } },
    { id: 'q5', type: 'mc', skill: 'verwijswoorden',
      q: { nl: '“Dat is precies het probleem waar grote bedrijven ook mee worstelen.” Waar verwijst “dat” naar?', en: '“That is exactly the problem big companies struggle with too.” What does “that” refer to?' },
      options: [
        { nl: 'Dat een computer maar zo goed is als de voorbeelden die hij krijgt', en: 'That a computer is only as good as the examples it gets' },
        { nl: 'Dat drinkbekers soms lekken', en: 'That paper cups sometimes leak' },
        { nl: 'Dat robots heel duur zijn', en: 'That robots are very expensive' },
        { nl: 'Dat limonade plakt', en: 'That lemonade is sticky' }
      ], answer: 0,
      explain: { nl: 'De onderzoeker reageert op de laatste zin van Fenna over de voorbeelden.', en: 'The researcher is responding to Fenna’s last sentence about the examples.' } },
    { id: 'q6', type: 'sort', skill: 'feitmening',
      q: { nl: 'Feit of mening? Zet elke zin in de goede groep.', en: 'Fact or opinion? Put every sentence in the right group.' },
      bins: [ { nl: 'Feit', en: 'Fact' }, { nl: 'Mening', en: 'Opinion' } ],
      items: [
        { nl: 'In zo’n beker zit een dun laagje plastic.', en: 'There is a thin layer of plastic in a cup like that.', bin: 0 },
        { nl: 'Robots moeten het vieze werk doen.', en: 'Robots should do the dirty work.', bin: 1 },
        { nl: 'De robot van 8B won de eerste prijs.', en: 'The robot from 8B won first prize.', bin: 0 },
        { nl: 'De robot van 8B was de mooiste uitvinding.', en: 'The robot from 8B was the most beautiful invention.', bin: 1 }
      ],
      explain: { nl: 'Het laagje en de prijs kun je nagaan. Wat robots “moeten” doen en wat “het mooiste” is, vindt iemand.', en: 'The layer and the prize can be checked. What robots “should” do and what is “the most beautiful” is somebody’s view.' } },
    { id: 'q7', type: 'multi', skill: 'letterlijk',
      q: { nl: 'Wat deed opa om Rik te redden? Kies er 3.', en: 'What did Grandpa do to save Rik? Pick 3.' },
      options: [
        { nl: 'Hij haalde het computertje los', en: 'He took out the tiny computer' },
        { nl: 'Hij spoelde het af met alcohol', en: 'He rinsed it with alcohol' },
        { nl: 'Hij vond de doorgebrande zekering', en: 'He found the blown fuse' },
        { nl: 'Hij kocht een nieuwe robot', en: 'He bought a new robot' },
        { nl: 'Hij bouwde een nieuwe grijper', en: 'He built a new claw' }
      ], answer: [0, 1, 2],
      explain: { nl: 'Alinea 1: loshalen, afspoelen met alcohol en de zekering vinden.', en: 'Paragraph 1: taking it out, rinsing it with alcohol and finding the fuse.' } },
    { id: 'q8', type: 'mc', skill: 'doel',
      q: { nl: 'Waarom stelt de onderzoeker de vraag over werk voor mensen?', en: 'Why does the researcher ask the question about work for people?' },
      options: [
        { nl: 'Om de kinderen te laten nadenken over wat robots betekenen voor mensen', en: 'To make the children think about what robots mean for people' },
        { nl: 'Om de kinderen voor de gek te houden', en: 'To fool the children' },
        { nl: 'Om te laten zien dat robots slecht zijn', en: 'To show that robots are bad' },
        { nl: 'Omdat ze geen prijs wil geven', en: 'Because she does not want to give a prize' }
      ], answer: 0,
      explain: { nl: 'Een goede uitvinder denkt ook na over de gevolgen voor mensen. Daarom stelt ze die vraag.', en: 'A good inventor also thinks about the consequences for people. That is why she asks that question.' } },
    { id: 'q9', type: 'tf', skill: 'gevolgtrekking',
      q: { nl: 'Door de limonade was alles wat Rik had geleerd verdwenen.', en: 'Because of the lemonade, everything Rik had learned was gone.' },
      answer: false,
      explain: { nl: 'Het leren stond op een geheugenkaartje en was niet verloren gegaan.', en: 'The learning was stored on a memory card and had not been lost.' } },
    { id: 'q10', type: 'find', skill: 'hoofdgedachte',
      q: { nl: 'Welke zin geeft de belangrijkste les van dit verhaal het beste weer?', en: 'Which sentence best sums up the most important lesson of this story?' },
      options: [
        { nl: 'In de gymzaal stonden twaalf uitvindingen.', en: 'In the gym there were twelve inventions.' },
        { nl: 'Fenna voelde haar wangen gloeien.', en: 'Fenna felt her cheeks burn.' },
        { nl: 'Een computer kan alleen zo goed zijn als de voorbeelden die je hem geeft.', en: 'A computer can only be as good as the examples you give it.' },
        { nl: 'Rik mocht in de aula blijven staan, naast de afvalbakken.', en: 'Rik was allowed to stay in the school hall, next to the bins.' }
      ], answer: 2,
      explain: { nl: 'Dat is de les van het hele boek: een robot doet wat je hem leert, en leert van wat je hem laat zien.', en: 'That is the lesson of the whole book: a robot does what you teach it, and learns from what you show it.' } }
  ]
}
  ]
});
