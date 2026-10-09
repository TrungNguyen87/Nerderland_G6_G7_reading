/* Vervolgverhaal - Dieren & Natuur: Een otter in de gracht
   Een lopend verhaal ("wordt vervolgd"): hoofdstuk 1 = groep 6 (niveau 2), 2 = niveau 3,
   3 = groep 7 (niveau 4), 4 = groep 8 (niveau 6). Een hoofdstuk 5 erbij? Zet een nieuw object
   achteraan `chapters` (niveau 6, met een `recap`) en zet een `teaser` op hoofdstuk 4. */
addSeries({
  id: 'otter', topic: 'dieren', emoji: '🦦', more: true,
  title: { nl: 'Een otter in de gracht', en: 'An otter in the canal' },
  blurb: { nl: 'Sanne logeert op de woonboot van opa en ziet een dier dat er volgens opa niet hoort te zijn. Een otter, midden in de stad!',
           en: 'Sanne is staying on Grandpa’s houseboat and sees an animal that, according to Grandpa, should not be there. An otter, in the middle of the city!' },
  ideas: [
    { nl: 'Van wie zijn de grote pootafdrukken in het park?', en: 'Whose are the big paw prints in the park?' },
    { nl: 'Hoe gaat het met het otterjong als hij groter wordt?', en: 'How does the young otter get on as he grows up?' },
    { nl: 'Schrijf een brief van Sanne aan meneer De Wit over de otters.', en: 'Write a letter from Sanne to Mr De Wit about the otters.' }
  ],
  chapters: [
{
  level: 2, emoji: '🐾', scene: 'water',
  title: { nl: 'Wie steelt de vis?', en: 'Who is stealing the fish?' },
  teaser: { nl: 'Wat voor dier is het, en waar komt het vandaan?', en: 'What kind of animal is it, and where does it come from?' },
  text: {
    nl: [
      "Sanne logeert deze zomer bij opa Wim. Opa woont op een woonboot in de gracht, midden in de stad. Elke ochtend staat Sanne vroeg op. Dan is het stil op het water en vliegen de eenden laag over de gracht.",
      "Op het dek staat een emmer met kleine visjes. Opa gebruikt ze als aas als hij gaat vissen. Maar vanochtend is de emmer leeg! Er ligt geen enkel visje meer in. Alleen het water in de emmer is nog nat.",
      "“Opa, iemand heeft onze vis gestolen!” roept Sanne. Opa komt naar buiten in zijn pyjama. “Dat zal die reiger zijn”, gromt hij. Maar de reiger zit rustig op de wal. En op het dek ziet Sanne iets raars: natte pootafdrukken, met vijf teentjes en dunne velletjes ertussen.",
      "Sanne gaat op haar hurken zitten. Dan hoort ze een zacht gepiep. Uit het water steekt een klein, bruin hoofdje omhoog. Het dier heeft grote zwarte ogen en lange snorharen. Het kijkt Sanne recht aan. Een tel later is het weer onder water verdwenen.",
      "“Opa! Kom kijken!” Sanne pakt opa’s oude telefoon en maakt een foto van het natte dek en de afdrukken. Opa bekijkt ze lang. Hij zegt niets. Dan zegt hij: “Dat is geen rat. En geen reiger. Dat is iets heel anders.”",
      "“Wat dan?” vraagt Sanne. Opa krabt achter zijn oor. “Ik woon al veertig jaar aan deze gracht. Maar zo’n dier heb ik hier nog nooit gezien.”"
    ],
    en: [
      "Sanne is staying with Grandpa Wim this summer. Grandpa lives on a houseboat in the canal, in the middle of the city. Every morning Sanne gets up early. Then it is quiet on the water and the ducks fly low over the canal.",
      "On the deck stands a bucket of little fish. Grandpa uses them as bait when he goes fishing. But this morning the bucket is empty! Not a single little fish is left in it. Only the water in the bucket is still wet.",
      "“Grandpa, somebody has stolen our fish!” shouts Sanne. Grandpa comes outside in his pyjamas. “That will be that heron,” he growls. But the heron is sitting calmly on the bank. And on the deck Sanne sees something odd: wet paw prints, with five little toes and thin skin between them.",
      "Sanne crouches down. Then she hears a soft squeak. A small brown head pops up out of the water. The animal has big black eyes and long whiskers. It looks straight at Sanne. A moment later it has disappeared under the water again.",
      "“Grandpa! Come and look!” Sanne takes Grandpa’s old phone and takes a photo of the wet deck and the prints. Grandpa studies them for a long time. He says nothing. Then he says: “That is not a rat. And not a heron. That is something very different.”",
      "“What, then?” asks Sanne. Grandpa scratches behind his ear. “I have lived beside this canal for forty years. But I have never seen an animal like that here.”"
    ]
  },
  words: [
    { nl: 'woonboot', en: 'houseboat', defNl: 'een boot waarop mensen wonen, zoals in een huis', defEn: 'a boat on which people live, as in a house' },
    { nl: 'aas', en: 'bait', defNl: 'eten waarmee je vissen lokt om ze te vangen', defEn: 'food you use to lure fish so that you can catch them' },
    { nl: 'snorharen', en: 'whiskers', defNl: 'lange, stijve haren bij de neus van een dier waarmee het kan voelen', defEn: 'long, stiff hairs near an animal’s nose with which it can feel' }
  ],
  questions: [
    { id: 'q1', type: 'mc', skill: 'letterlijk',
      q: { nl: 'Waar woont opa Wim?', en: 'Where does Grandpa Wim live?' },
      options: [
        { nl: 'Op een woonboot in de gracht', en: 'On a houseboat in the canal' },
        { nl: 'In een huis aan het strand', en: 'In a house at the beach' },
        { nl: 'In een boerderij in het bos', en: 'On a farm in the woods' },
        { nl: 'In een flat in de stad', en: 'In a flat in the city' }
      ], answer: 0,
      explain: { nl: 'Alinea 1: “Opa woont op een woonboot in de gracht, midden in de stad.”', en: 'Paragraph 1: “Grandpa lives on a houseboat in the canal, in the middle of the city.”' } },
    { id: 'q2', type: 'tf', skill: 'letterlijk',
      q: { nl: 'Vanochtend zat de emmer vol met visjes.', en: 'This morning the bucket was full of little fish.' },
      answer: false,
      explain: { nl: 'Alinea 2: “vanochtend is de emmer leeg!”', en: 'Paragraph 2: “this morning the bucket is empty!”' } },
    { id: 'q3', type: 'mc', skill: 'gevolgtrekking',
      q: { nl: 'Waarom denkt Sanne dat het geen reiger is?', en: 'Why does Sanne think it is not a heron?' },
      options: [
        { nl: 'De reiger zit rustig op de wal en de afdrukken hebben vijf teentjes met velletjes ertussen', en: 'The heron is sitting calmly on the bank and the prints have five little toes with skin between them' },
        { nl: 'Reigers eten nooit vis', en: 'Herons never eat fish' },
        { nl: 'Opa heeft de reiger al weggejaagd', en: 'Grandpa has already chased the heron away' },
        { nl: 'De reiger is veel te groot voor de emmer', en: 'The heron is far too big for the bucket' }
      ], answer: 0,
      explain: { nl: 'De reiger zit op de wal, dus hij heeft de vis niet gepakt. En de afdrukken met velletjes tussen de teentjes passen bij een zwemmend dier.', en: 'The heron is on the bank, so it did not take the fish. And the prints with skin between the toes fit a swimming animal.' } },
    { id: 'q4', type: 'order', skill: 'volgorde',
      q: { nl: 'Zet in de volgorde van het verhaal.', en: 'Put these in the order of the story.' },
      items: [
        { nl: 'Sanne ziet dat de emmer leeg is.', en: 'Sanne sees that the bucket is empty.' },
        { nl: 'Opa denkt dat het de reiger is.', en: 'Grandpa thinks it is the heron.' },
        { nl: 'Een bruin hoofdje steekt uit het water.', en: 'A brown head pops up out of the water.' },
        { nl: 'Sanne maakt een foto van de afdrukken.', en: 'Sanne takes a photo of the prints.' }
      ], answer: [0, 1, 2, 3],
      explain: { nl: 'Eerst de lege emmer, dan opa’s gedachte, dan het dier en ten slotte de foto.', en: 'First the empty bucket, then Grandpa’s thought, then the animal and finally the photo.' } },
    { id: 'q5', type: 'gap', skill: 'woordenschat',
      q: { nl: 'Opa gebruikt kleine visjes als ___ om grote vissen te vangen.', en: 'Grandpa uses little fish as ___ to catch big fish.' },
      options: [
        { nl: 'aas', en: 'bait' },
        { nl: 'woonboot', en: 'houseboat' },
        { nl: 'snorharen', en: 'whiskers' },
        { nl: 'hurken', en: 'a crouch' }
      ], answer: 0,
      explain: { nl: 'Aas is eten waarmee je vissen lokt, zoals de visjes in de emmer.', en: 'Bait is food you use to lure fish, like the little fish in the bucket.' } },
    { id: 'q6', type: 'mc', skill: 'gevolgtrekking',
      q: { nl: 'Wat zegt opa’s reactie aan het eind over het dier?', en: 'What does Grandpa’s reaction at the end tell you about the animal?' },
      options: [
        { nl: 'Het is een dier dat opa hier nog nooit heeft gezien', en: 'It is an animal Grandpa has never seen here before' },
        { nl: 'Het is een dier dat opa elke dag ziet', en: 'It is an animal Grandpa sees every day' },
        { nl: 'Het is gewoon een rat', en: 'It is just a rat' },
        { nl: 'Het is een huisdier van opa', en: 'It is one of Grandpa’s pets' }
      ], answer: 0,
      explain: { nl: 'Opa woont al veertig jaar aan de gracht en zegt dat hij zo’n dier hier nog nooit heeft gezien.', en: 'Grandpa has lived beside the canal for forty years and says he has never seen an animal like that here.' } }
  ]
},
{
  level: 3, emoji: '📷', scene: 'water',
  title: { nl: 'Foto’s voor de deskundige', en: 'Photos for the expert' },
  recap: { nl: 'Sanne ontdekt dat de visjes uit opa Wims emmer zijn gestolen. Ze ziet natte pootafdrukken en een klein bruin hoofdje met snorharen in het water.',
           en: 'Sanne discovers that the little fish from Grandpa Wim’s bucket have been stolen. She sees wet paw prints and a small brown head with whiskers in the water.' },
  teaser: { nl: 'Wie fluit er ’s nachts bij de sluis, en waarom komt dat dier niet dichterbij?', en: 'Who is whistling by the lock at night, and why does that animal not come closer?' },
  text: {
    nl: [
      "Die middag stuurt opa de foto’s naar het natuurcentrum. Twee uur later staat er een vrouw met een rugzak aan de wal. “Ik ben Fatima”, zegt ze. “Ik werk met otters. Mag ik de foto’s zien?” Ze kijkt er even naar en begint dan te glimlachen.",
      "“Dit is een otter”, zegt Fatima. “En door de grootte van de afdrukken is het een jong van een maand of vier.” Sanne kijkt opa aan. Opa kijkt naar het water. “Een otter? Hier?” “Otters zijn lange tijd uit Nederland verdwenen”, legt Fatima uit. “In 1988 verdween de laatste. Pas in 2002 zijn er weer otters uitgezet. Nu zwemmen ze op steeds meer plekken.”",
      "Fatima laat zien hoe je een otter herkent. Hij heeft zwemvliezen tussen zijn tenen, dikke snorharen om te voelen waar de vis zit en een lange, stevige staart die als een roer werkt. “Onder water doet hij zijn oren en neus dicht”, zegt ze. “En hij is vooral ’s nachts actief. Daarom zie je otters bijna nooit.”",
      "Sanne wil weten waarom het jong alleen is. “Een jong blijft ongeveer een jaar bij zijn moeder”, zegt Fatima. “Zijn moeder moet dus ergens in de buurt zijn. Ik maak me zorgen, want dit jong is te mager.” Ze noemt twee regels. Niet voeren en niet aanraken. “Een wild dier moet wild blijven.”",
      "Die nacht kan Sanne niet slapen. Rond middernacht hoort ze een hoog gefluit, ver weg bij de sluis. Het jong op de gracht fluit terug. Sanne gluurt door het raam. Bij de sluis ziet ze een donkere vorm op de wal, groter dan het jong. Dan is de vorm weer weg."
    ],
    en: [
      "That afternoon Grandpa sends the photos to the nature centre. Two hours later a woman with a rucksack is standing on the bank. “I am Fatima,” she says. “I work with otters. May I see the photos?” She looks at them for a moment and then starts to smile.",
      "“This is an otter,” says Fatima. “And from the size of the prints it is a young one of about four months.” Sanne looks at Grandpa. Grandpa looks at the water. “An otter? Here?” “Otters disappeared from the Netherlands for a long time,” Fatima explains. “In 1988 the last one vanished. Only in 2002 were otters released again. Now they swim in more and more places.”",
      "Fatima shows how you recognise an otter. It has webbed feet, thick whiskers to feel where the fish is and a long, strong tail that works like a rudder. “Under water it closes its ears and nose,” she says. “And it is mostly active at night. That is why you almost never see otters.”",
      "Sanne wants to know why the young one is alone. “A young otter stays with its mother for about a year,” says Fatima. “So its mother must be somewhere near. I am worried, because this young one is too thin.” She mentions two rules. Do not feed it and do not touch it. “A wild animal must stay wild.”",
      "That night Sanne cannot sleep. Around midnight she hears a high whistle, far away by the lock. The young one in the canal whistles back. Sanne peeks through the window. By the lock she sees a dark shape on the bank, bigger than the young one. Then the shape is gone again."
    ]
  },
  words: [
    { nl: 'deskundige', en: 'expert', defNl: 'iemand die heel veel weet over één onderwerp', defEn: 'somebody who knows a great deal about one subject' },
    { nl: 'zwemvliezen', en: 'webbed feet', defNl: 'dunne velletjes tussen de tenen waarmee een dier beter kan zwemmen', defEn: 'thin skin between the toes with which an animal swims better' },
    { nl: 'sluis', en: 'lock', defNl: 'een soort deur in een gracht of kanaal waarmee je het waterpeil regelt', defEn: 'a kind of gate in a canal with which you control the water level' }
  ],
  questions: [
    { id: 'q1', type: 'mc', skill: 'letterlijk',
      q: { nl: 'Wie is Fatima?', en: 'Who is Fatima?' },
      options: [
        { nl: 'Een vrouw die met otters werkt', en: 'A woman who works with otters' },
        { nl: 'De buurvrouw van opa', en: 'Grandpa’s neighbour' },
        { nl: 'Een vriendin van Sanne', en: 'A friend of Sanne’s' },
        { nl: 'Een visser', en: 'A fisherwoman' }
      ], answer: 0,
      explain: { nl: 'Ze zegt zelf: “Ik werk met otters.”', en: 'She says so herself: “I work with otters.”' } },
    { id: 'q2', type: 'tf', skill: 'letterlijk',
      q: { nl: 'Otters zijn altijd gewoon in Nederland te zien geweest.', en: 'Otters have always been a normal sight in the Netherlands.' },
      answer: false,
      explain: { nl: 'Fatima vertelt dat de laatste otter in 1988 verdween en dat er pas in 2002 weer otters zijn uitgezet.', en: 'Fatima says the last otter vanished in 1988 and that otters were only released again in 2002.' } },
    { id: 'q3', type: 'mc', skill: 'gevolgtrekking',
      q: { nl: 'Waarom denkt Fatima dat de moeder in de buurt is?', en: 'Why does Fatima think the mother is nearby?' },
      options: [
        { nl: 'Een jong blijft ongeveer een jaar bij zijn moeder', en: 'A young otter stays with its mother for about a year' },
        { nl: 'Ze heeft de moeder zelf gezien', en: 'She has seen the mother herself' },
        { nl: 'Opa heeft het haar verteld', en: 'Grandpa told her' },
        { nl: 'Otters leven nooit alleen', en: 'Otters never live alone' }
      ], answer: 0,
      explain: { nl: 'Het jong is pas vier maanden oud. Omdat jongen een jaar bij hun moeder blijven, moet zij dichtbij zijn.', en: 'The young one is only four months old. Because young otters stay with their mother for a year, she must be close by.' } },
    { id: 'q4', type: 'multi', skill: 'letterlijk',
      q: { nl: 'Hoe herken je een otter? Kies er 3.', en: 'How do you recognise an otter? Pick 3.' },
      options: [
        { nl: 'Zwemvliezen tussen de tenen', en: 'Webbed feet' },
        { nl: 'Dikke snorharen', en: 'Thick whiskers' },
        { nl: 'Een lange, stevige staart', en: 'A long, strong tail' },
        { nl: 'Gele ogen', en: 'Yellow eyes' },
        { nl: 'Vleugels', en: 'Wings' }
      ], answer: [0, 1, 2],
      explain: { nl: 'Alinea 3 noemt de zwemvliezen, de snorharen en de staart.', en: 'Paragraph 3 mentions the webbed feet, the whiskers and the tail.' } },
    { id: 'q5', type: 'order', skill: 'volgorde',
      q: { nl: 'Zet in de volgorde van het verhaal.', en: 'Put these in the order of the story.' },
      items: [
        { nl: 'Opa stuurt de foto’s naar het natuurcentrum.', en: 'Grandpa sends the photos to the nature centre.' },
        { nl: 'Fatima zegt dat het een otter is.', en: 'Fatima says it is an otter.' },
        { nl: 'Fatima noemt twee regels.', en: 'Fatima mentions two rules.' },
        { nl: 'Sanne hoort ’s nachts gefluit bij de sluis.', en: 'At night Sanne hears whistling by the lock.' }
      ], answer: [0, 1, 2, 3],
      explain: { nl: 'Eerst de foto’s, dan het bezoek van Fatima en de regels, en pas ’s nachts het gefluit.', en: 'First the photos, then Fatima’s visit and the rules, and only at night the whistling.' } },
    { id: 'q6', type: 'gap', skill: 'woordenschat',
      q: { nl: 'Een ___ is iemand die heel veel weet over één onderwerp.', en: 'An ___ is somebody who knows a great deal about one subject.' },
      options: [
        { nl: 'deskundige', en: 'expert' },
        { nl: 'zwemvlies', en: 'webbed foot' },
        { nl: 'sluis', en: 'lock' },
        { nl: 'jong', en: 'young one' }
      ], answer: 0,
      explain: { nl: 'Fatima werkt met otters en weet er dus veel van: ze is een deskundige.', en: 'Fatima works with otters and so knows a lot about them: she is an expert.' } },
    { id: 'q7', type: 'mc', skill: 'hoofdgedachte',
      q: { nl: 'Waar gaat dit hoofdstuk vooral over?', en: 'What is this chapter mainly about?' },
      options: [
        { nl: 'Sanne hoort van een deskundige dat het een otterjong is en dat zijn moeder in de buurt moet zijn', en: 'Sanne hears from an expert that it is a young otter and that its mother must be nearby' },
        { nl: 'Hoe je een foto naar een natuurcentrum stuurt', en: 'How to send a photo to a nature centre' },
        { nl: 'Waarom Sanne niet kan slapen', en: 'Why Sanne cannot sleep' },
        { nl: 'Hoe een sluis werkt', en: 'How a lock works' }
      ], answer: 0,
      explain: { nl: 'De alinea’s gaan over wat een otter is, waarom hij verdween, en waar het jong naar zijn moeder zoekt.', en: 'The paragraphs are about what an otter is, why it vanished, and how the young one looks for its mother.' } }
  ]
},
{
  level: 4, emoji: '🪧', scene: 'water',
  title: { nl: 'Het hek bij de sluis', en: 'The grating at the lock' },
  recap: { nl: 'In de gracht bij opa Wims woonboot zwemt een otterjong. Otterdeskundige Fatima zegt dat het jong te mager is en dat zijn moeder in de buurt moet zijn. ’s Nachts hoort Sanne gefluit bij de sluis.',
           en: 'A young otter is swimming in the canal by Grandpa Wim’s houseboat. Otter expert Fatima says the young one is too thin and that its mother must be nearby. At night Sanne hears whistling by the lock.' },
  teaser: { nl: 'Lukt het om het jong bij zijn moeder te krijgen, en wat zeggen de buren ervan?', en: 'Will they manage to get the young one back to its mother, and what will the neighbours say?' },
  text: {
    nl: [
      "De volgende dag liep Fatima met Sanne en opa langs de gracht naar de sluis. “Kijk daar”, zei ze, en ze wees naar een stalen hek onder de sluisdeur. “Dat hek moet vuil tegenhouden. Maar er zit een gat in, net groot genoeg voor een jong. De moeder past er niet door.”",
      "Fatima legde uit wat er waarschijnlijk was gebeurd. Het jong was door het gat gezwommen en kon door de sterke stroming niet meer terug. De moeder kon hem horen, maar niet bereiken. Daarom had het jong honger en stal het visjes uit opa’s emmer. “Hij zoekt gewoon eten”, zei Fatima. “Hij weet niet beter.”",
      "Sanne vroeg wat ze konden doen. Fatima haalde een schetsboekje uit haar rugzak. “We kunnen een otterpassage maken: een plank met latjes, zodat de moeder over de sluis kan klimmen en het jong naar haar toe kan. Het hout is ruw, zodat een otter er goed grip op heeft. Maar daar hebben we toestemming voor nodig van het waterschap.”",
      "Zo kwamen ze bij mevrouw Smit van het waterschap. “Normaal duurt een vergunning weken”, zei ze. “Maar als de buurt meewerkt, kunnen we een tijdelijke plank toestaan.” Ze legde uit wat daarvoor nodig was: één nacht lang geen honden, geen harde muziek en geen felle lampen langs de gracht.",
      "Dus liepen Sanne en opa die middag langs alle deuren. Sommige buren vonden het prachtig. Anderen waren bang voor hun siervissen. Meneer De Wit zei zelfs: “Een wilde otter in mijn stad? Ik denk er het mijne van.” Maar hij beloofde wel zijn hond binnen te houden.",
      "’s Avonds telde Sanne de handtekeningen. Het waren er negentien. Dat was nog niet genoeg om de hele buurt mee te krijgen, maar het was een begin. “Zaterdag”, zei opa. “Als alles goed gaat, is het zaterdag.”"
    ],
    en: [
      "The next day Fatima walked with Sanne and Grandpa along the canal to the lock. “Look there,” she said, and she pointed at a steel grating under the lock gate. “That grating is meant to hold back rubbish. But there is a hole in it, just big enough for a young one. The mother does not fit through.”",
      "Fatima explained what had probably happened. The young one had swum through the hole and could not get back because of the strong current. The mother could hear him, but not reach him. That was why the young one was hungry and stole little fish from Grandpa’s bucket. “He is simply looking for food,” said Fatima. “He does not know any better.”",
      "Sanne asked what they could do. Fatima took a little sketchbook out of her rucksack. “We can make an otter passage: a plank with little battens, so that the mother can climb over the lock and the young one can reach her. The wood is rough, so that an otter has a good grip on it. But we need permission for that from the water board.”",
      "That is how they came to Mrs Smit of the water board. “Normally a permit takes weeks,” she said. “But if the neighbourhood helps, we can allow a temporary plank.” She explained what was needed: for one night no dogs, no loud music and no bright lights along the canal.",
      "So that afternoon Sanne and Grandpa went along all the doors. Some neighbours thought it was wonderful. Others were afraid for their ornamental fish. Mr De Wit even said: “A wild otter in my city? I have my own thoughts about that.” But he did promise to keep his dog indoors.",
      "In the evening Sanne counted the signatures. There were nineteen. That was not yet enough to get the whole neighbourhood on board, but it was a start. “Saturday,” said Grandpa. “If all goes well, it will be Saturday.”"
    ]
  },
  words: [
    { nl: 'waterschap', en: 'water board', defNl: 'een overheid die zorgt voor het water, de dijken en de sluizen in een gebied', defEn: 'an authority that looks after the water, the dykes and the locks in an area' },
    { nl: 'vergunning', en: 'permit', defNl: 'een officieel papier waarmee je iets mag doen wat anders niet mag', defEn: 'an official paper that lets you do something that is otherwise not allowed' },
    { nl: 'siervissen', en: 'ornamental fish', defNl: 'vissen die je alleen houdt omdat ze mooi zijn, bijvoorbeeld in een vijver', defEn: 'fish you keep only because they are beautiful, for example in a pond' }
  ],
  questions: [
    { id: 'q1', type: 'mc', skill: 'letterlijk',
      q: { nl: 'Waar zit het gat dat groot genoeg is voor een jong?', en: 'Where is the hole that is big enough for a young one?' },
      options: [
        { nl: 'In het stalen hek onder de sluisdeur', en: 'In the steel grating under the lock gate' },
        { nl: 'In de plank van opa’s woonboot', en: 'In the plank of Grandpa’s houseboat' },
        { nl: 'In de wal bij het park', en: 'In the bank by the park' },
        { nl: 'In het net van de siervijver', en: 'In the net of the ornamental pond' }
      ], answer: 0,
      explain: { nl: 'Alinea 1: “een stalen hek onder de sluisdeur … Er zit een gat in, net groot genoeg voor een jong.”', en: 'Paragraph 1: “a steel grating under the lock gate … there is a hole in it, just big enough for a young one.”' } },
    { id: 'q2', type: 'mc', skill: 'verwijswoorden',
      q: { nl: '“Hij weet niet beter”, zei Fatima. Wie is “hij”?', en: '“He does not know any better,” said Fatima. Who is “he”?' },
      options: [
        { nl: 'Het otterjong', en: 'The young otter' },
        { nl: 'Opa', en: 'Grandpa' },
        { nl: 'Meneer De Wit', en: 'Mr De Wit' },
        { nl: 'De reiger', en: 'The heron' }
      ], answer: 0,
      explain: { nl: 'De zin ervoor zegt: “Hij zoekt gewoon eten.” Dat gaat over het jong dat visjes uit de emmer stal.', en: 'The sentence before says: “He is simply looking for food.” That is about the young one who stole the fish from the bucket.' } },
    { id: 'q3', type: 'mc', skill: 'gevolgtrekking',
      q: { nl: 'Waarom stal het jong visjes uit opa’s emmer?', en: 'Why did the young one steal fish from Grandpa’s bucket?' },
      options: [
        { nl: 'Hij had honger omdat hij niet bij zijn moeder kon', en: 'He was hungry because he could not get to his mother' },
        { nl: 'Hij wilde opa plagen', en: 'He wanted to tease Grandpa' },
        { nl: 'Hij was ziek', en: 'He was ill' },
        { nl: 'Otters stelen voor de lol', en: 'Otters steal for fun' }
      ], answer: 0,
      explain: { nl: 'Door het hek en de stroming kon hij niet meer terug. Zonder moeder vond hij zelf geen eten.', en: 'Because of the grating and the current he could not go back. Without his mother he could not find food himself.' } },
    { id: 'q4', type: 'multi', skill: 'letterlijk',
      q: { nl: 'Wat moest er die ene nacht langs de gracht niet zijn? Kies er 3.', en: 'What was not allowed along the canal on that one night? Pick 3.' },
      options: [
        { nl: 'Honden', en: 'Dogs' },
        { nl: 'Harde muziek', en: 'Loud music' },
        { nl: 'Felle lampen', en: 'Bright lights' },
        { nl: 'Eenden', en: 'Ducks' },
        { nl: 'Boten', en: 'Boats' }
      ], answer: [0, 1, 2],
      explain: { nl: 'Mevrouw Smit noemt: geen honden, geen harde muziek en geen felle lampen.', en: 'Mrs Smit mentions: no dogs, no loud music and no bright lights.' } },
    { id: 'q5', type: 'order', skill: 'volgorde',
      q: { nl: 'Zet in de volgorde van het verhaal.', en: 'Put these in the order of the story.' },
      items: [
        { nl: 'Fatima wijst het hek bij de sluis aan.', en: 'Fatima points out the grating at the lock.' },
        { nl: 'Fatima bedenkt een otterpassage.', en: 'Fatima thinks of an otter passage.' },
        { nl: 'Mevrouw Smit van het waterschap zegt dat het mag als de buurt meewerkt.', en: 'Mrs Smit of the water board says it is allowed if the neighbourhood helps.' },
        { nl: 'Sanne en opa vragen de buren om mee te doen.', en: 'Sanne and Grandpa ask the neighbours to join in.' },
        { nl: 'Sanne telt negentien handtekeningen.', en: 'Sanne counts nineteen signatures.' }
      ], answer: [0, 1, 2, 3, 4],
      explain: { nl: 'Eerst het probleem, dan het plan, dan de toestemming, daarna de buren en ten slotte het tellen.', en: 'First the problem, then the plan, then the permission, then the neighbours and finally the counting.' } },
    { id: 'q6', type: 'gap', skill: 'woordenschat',
      q: { nl: 'Met een ___ mag je iets doen wat anders niet mag, omdat een officiële instantie ja heeft gezegd.', en: 'With a ___ you may do something that is otherwise not allowed, because an official authority has said yes.' },
      options: [
        { nl: 'vergunning', en: 'permit' },
        { nl: 'handtekening', en: 'signature' },
        { nl: 'stroming', en: 'current' },
        { nl: 'passage', en: 'passage' }
      ], answer: 0,
      explain: { nl: 'Mevrouw Smit zegt dat een vergunning normaal weken duurt, maar dat een tijdelijke plank sneller kan.', en: 'Mrs Smit says a permit normally takes weeks, but that a temporary plank can be done sooner.' } },
    { id: 'q7', type: 'mc', skill: 'structuur',
      q: { nl: 'Hoe is deze tekst opgebouwd?', en: 'How is this text built up?' },
      options: [
        { nl: 'Eerst het probleem bij het hek, dan het plan en de toestemming, en daarna de reacties van de buren', en: 'First the problem at the grating, then the plan and the permission, and after that the neighbours’ reactions' },
        { nl: 'Eerst de afloop en daarna hoe het begon', en: 'First the ending and then how it began' },
        { nl: 'Een lijst met regels voor otters', en: 'A list of rules for otters' },
        { nl: 'Alleen een gesprek tussen Sanne en opa', en: 'Only a conversation between Sanne and Grandpa' }
      ], answer: 0,
      explain: { nl: 'Alinea 1 en 2 leggen het probleem uit, 3 en 4 gaan over het plan en de toestemming, 5 en 6 over de buren.', en: 'Paragraphs 1 and 2 explain the problem, 3 and 4 are about the plan and the permission, 5 and 6 about the neighbours.' } },
    { id: 'q8', type: 'mc', skill: 'hoofdgedachte',
      q: { nl: 'Waar gaat dit hoofdstuk vooral over?', en: 'What is this chapter mainly about?' },
      options: [
        { nl: 'Er is een plan om het otterjong te helpen, maar eerst moet de hele buurt meedoen', en: 'There is a plan to help the young otter, but first the whole neighbourhood has to join in' },
        { nl: 'Hoe een waterschap werkt', en: 'How a water board works' },
        { nl: 'Waarom otters gevaarlijk zijn voor siervissen', en: 'Why otters are dangerous for ornamental fish' },
        { nl: 'Sanne die ruzie krijgt met meneer De Wit', en: 'Sanne having an argument with Mr De Wit' }
      ], answer: 0,
      explain: { nl: 'Het hele hoofdstuk draait om het plan met de plank en de toestemming van de buurt.', en: 'The whole chapter is about the plan with the plank and the neighbourhood’s permission.' } }
  ]
},
{
  level: 6, emoji: '🌙', scene: 'water',
  title: { nl: 'De nacht van de otter', en: 'The night of the otter' },
  recap: { nl: 'Een otterjong zit aan de ene kant van een hek bij de sluis, zijn moeder aan de andere kant. Fatima wil een tijdelijke otterpassage maken. Het waterschap zegt ja, als de buurt één nacht stil en donker blijft.',
           en: 'A young otter is on one side of a grating at the lock, its mother on the other. Fatima wants to make a temporary otter passage. The water board says yes, if the neighbourhood stays quiet and dark for one night.' },
  teaser: { nl: 'Van wie zijn de grote pootafdrukken die naar het park lopen?', en: 'Whose are the big paw prints leading to the park?' },
  text: {
    nl: [
      "Vrijdagavond was er een buurtvergadering op de wal. Meneer De Wit begon meteen. “Een otter eet vis”, zei hij. “Mijn siervissen hebben me drieduizend euro gekost. Wie betaalt als ze verdwijnen?” Een paar mensen knikten. Mevrouw Hoek wilde vooral weten of otters gevaarlijk zijn voor kinderen.",
      "Fatima stond op. “Otters zijn schuw”, zei ze. “Ze lopen weg voor mensen. En je kunt siervissen beschermen met een net over de vijver. Dat kost veel minder dan drieduizend euro.” Meneer De Wit mompelde dat hij het nog steeds geen goed idee vond. Maar hij bleef zitten.",
      "Toen vroeg Sanne of ze iets mocht zeggen. Haar knieën trilden. “Veertig jaar geleden verdween de laatste otter uit Nederland”, zei ze. “Het water was te vies geworden. Nu is het water schoner en zijn er weer otters. Dit jong is het bewijs dat het beter gaat. Als we hem nu helpen, laten we zien dat we geleerd hebben van onze fouten.”",
      "Het werd stil. Toen stak mevrouw Hoek haar hand op. “Ik ben voor.” Een voor een deden de anderen mee, en uiteindelijk ook meneer De Wit. “Maar als mijn vissen verdwijnen”, bromde hij, “dan weet ik wie ik moet hebben.”",
      "Zaterdagnacht lag de gracht donker en stil. Op de sluis lag een lange plank met latjes. Sanne, opa en Fatima zaten op de woonboot met een thermosfles chocolademelk. Niemand zei iets. Zelfs de eenden leken te zwijgen. Om twee uur klonk er een zacht gefluit. Het jong zwom naar de plank. Aan de andere kant verscheen een grote, donkere vorm: de moeder.",
      "Voorzichtig klom ze over de sluis en gleed de plank af. Het jong piepte van blijdschap en kroop tegen haar aan. Sanne kreeg tranen in haar ogen. Het water rimpelde zilver in het licht van de maan. Samen zwommen ze weg, onder de oude brug door, de nacht in. “Dat zie je maar zelden”, fluisterde Fatima.",
      "De volgende ochtend stond meneer De Wit voor de woonboot. “Ik heb de hele nacht geluisterd”, zei hij. “Ik wil een bordje ophangen: otters welkom.” Maar toen Sanne naar de plank liep, zag ze iets raars in het natte zand: een rij pootafdrukken die naar het park liepen. Ze waren veel groter dan die van het jong."
    ],
    en: [
      "On Friday evening there was a neighbourhood meeting on the bank. Mr De Wit started straight away. “An otter eats fish,” he said. “My ornamental fish cost me three thousand euros. Who pays if they disappear?” A few people nodded. Mrs Hoek mostly wanted to know whether otters are dangerous for children.",
      "Fatima stood up. “Otters are shy,” she said. “They run away from people. And you can protect ornamental fish with a net over the pond. That costs much less than three thousand euros.” Mr De Wit muttered that he still did not think it was a good idea. But he stayed seated.",
      "Then Sanne asked whether she might say something. Her knees were trembling. “Forty years ago the last otter disappeared from the Netherlands,” she said. “The water had become too dirty. Now the water is cleaner and there are otters again. This young one is the proof that things are getting better. If we help him now, we show that we have learned from our mistakes.”",
      "It went quiet. Then Mrs Hoek raised her hand. “I am in favour.” One by one the others joined in, and finally Mr De Wit too. “But if my fish disappear,” he growled, “then I know who to blame.”",
      "On Saturday night the canal lay dark and quiet. On the lock lay a long plank with little battens. Sanne, Grandpa and Fatima sat on the houseboat with a flask of hot chocolate. Nobody said anything. Even the ducks seemed to be silent. At two o’clock a soft whistle sounded. The young one swam towards the plank. On the other side a big, dark shape appeared: the mother.",
      "Carefully she climbed over the lock and slid down the plank. The young one squeaked with joy and snuggled up against her. Sanne got tears in her eyes. The water rippled silver in the light of the moon. Together they swam away, under the old bridge, into the night. “You rarely see that,” whispered Fatima.",
      "The next morning Mr De Wit stood in front of the houseboat. “I listened all night,” he said. “I want to put up a little sign: otters welcome.” But when Sanne walked to the plank, she saw something odd in the wet sand: a row of paw prints leading to the park. They were much bigger than those of the young one."
    ]
  },
  words: [
    { nl: 'schuw', en: 'shy', defNl: 'bang voor mensen en snel op de vlucht', defEn: 'afraid of people and quick to run away' },
    { nl: 'buurtvergadering', en: 'neighbourhood meeting', defNl: 'een bijeenkomst waar mensen uit een straat of wijk samen praten en besluiten', defEn: 'a gathering where people from a street or district talk and decide together' },
    { nl: 'bewijs', en: 'proof', defNl: 'iets waaruit je kunt zien dat iets waar is', defEn: 'something that shows you that something is true' }
  ],
  questions: [
    { id: 'q1', type: 'mc', skill: 'letterlijk',
      q: { nl: 'Waarom is meneer De Wit tegen de otter?', en: 'Why is Mr De Wit against the otter?' },
      options: [
        { nl: 'Hij is bang voor zijn dure siervissen', en: 'He is afraid for his expensive ornamental fish' },
        { nl: 'Hij is bang dat de otter kinderen bijt', en: 'He is afraid the otter will bite children' },
        { nl: 'Hij vindt otters lelijk', en: 'He thinks otters are ugly' },
        { nl: 'Hij wil de woonboot kopen', en: 'He wants to buy the houseboat' }
      ], answer: 0,
      explain: { nl: 'Hij zegt: “Mijn siervissen hebben me drieduizend euro gekost. Wie betaalt als ze verdwijnen?”', en: 'He says: “My ornamental fish cost me three thousand euros. Who pays if they disappear?”' } },
    { id: 'q2', type: 'find', skill: 'gevolgtrekking',
      q: { nl: 'Welke zin laat zien dat Fatima een oplossing heeft voor het probleem van meneer De Wit?', en: 'Which sentence shows that Fatima has a solution for Mr De Wit’s problem?' },
      options: [
        { nl: 'Fatima stond op.', en: 'Fatima stood up.' },
        { nl: 'Een paar mensen knikten.', en: 'A few people nodded.' },
        { nl: 'En je kunt siervissen beschermen met een net over de vijver.', en: 'And you can protect ornamental fish with a net over the pond.' },
        { nl: 'Meneer De Wit mompelde dat hij het nog steeds geen goed idee vond.', en: 'Mr De Wit muttered that he still did not think it was a good idea.' }
      ], answer: 2,
      explain: { nl: 'Een net over de vijver beschermt de vissen tegen de otter. Dat is een echte oplossing voor het probleem.', en: 'A net over the pond protects the fish from the otter. That is a real solution to the problem.' } },
    { id: 'q3', type: 'gap', skill: 'woordenschat',
      q: { nl: 'Een ___ dier loopt weg zodra het een mens ziet.', en: 'A ___ animal runs away as soon as it sees a person.' },
      options: [
        { nl: 'schuw', en: 'shy' },
        { nl: 'rustig', en: 'calm' },
        { nl: 'tam', en: 'tame' },
        { nl: 'mager', en: 'thin' }
      ], answer: 0,
      explain: { nl: 'Fatima zegt: “Otters zijn schuw. Ze lopen weg voor mensen.”', en: 'Fatima says: “Otters are shy. They run away from people.”' } },
    { id: 'q4', type: 'order', skill: 'volgorde',
      q: { nl: 'Zet in de volgorde van het verhaal.', en: 'Put these in the order of the story.' },
      items: [
        { nl: 'Meneer De Wit noemt zijn siervissen.', en: 'Mr De Wit mentions his ornamental fish.' },
        { nl: 'Sanne houdt een toespraak.', en: 'Sanne gives a speech.' },
        { nl: 'De buurt stemt in met het plan.', en: 'The neighbourhood agrees to the plan.' },
        { nl: 'De moeder klimt over de sluis.', en: 'The mother climbs over the lock.' },
        { nl: 'Sanne ziet grote pootafdrukken.', en: 'Sanne sees big paw prints.' }
      ], answer: [0, 1, 2, 3, 4],
      explain: { nl: 'Vrijdag de vergadering, zaterdagnacht de ontmoeting, en zondagochtend de vreemde pootafdrukken.', en: 'On Friday the meeting, on Saturday night the reunion, and in the morning the strange paw prints.' } },
    { id: 'q5', type: 'mc', skill: 'verwijswoorden',
      q: { nl: '“Het jong piepte van blijdschap en kroop tegen haar aan.” Wie is “haar”?', en: '“The young one squeaked with joy and snuggled up against her.” Who is “her”?' },
      options: [
        { nl: 'De moeder', en: 'The mother' },
        { nl: 'Sanne', en: 'Sanne' },
        { nl: 'Fatima', en: 'Fatima' },
        { nl: 'Mevrouw Hoek', en: 'Mrs Hoek' }
      ], answer: 0,
      explain: { nl: 'De zin ervoor gaat over de moederotter die over de sluis klimt. Het jong kruipt bij haar.', en: 'The sentence before is about the mother otter climbing over the lock. The young one snuggles up to her.' } },
    { id: 'q6', type: 'sort', skill: 'feitmening',
      q: { nl: 'Feit of mening? Zet elke zin in de goede groep.', en: 'Fact or opinion? Put every sentence in the right group.' },
      bins: [ { nl: 'Feit', en: 'Fact' }, { nl: 'Mening', en: 'Opinion' } ],
      items: [
        { nl: 'Een otter eet vis.', en: 'An otter eats fish.', bin: 0 },
        { nl: 'Een wilde otter in de stad is geen goed idee.', en: 'A wild otter in the city is not a good idea.', bin: 1 },
        { nl: 'Veertig jaar geleden verdween de laatste otter uit Nederland.', en: 'Forty years ago the last otter disappeared from the Netherlands.', bin: 0 },
        { nl: 'Dit jong is het bewijs dat het beter gaat met de natuur.', en: 'This young one is the proof that nature is doing better.', bin: 1 }
      ],
      explain: { nl: 'Wat een otter eet en wanneer hij verdween kun je opzoeken. Of iets een “goed idee” is en wat iets “bewijst”, is wat iemand vindt.', en: 'What an otter eats and when it vanished can be looked up. Whether something is a “good idea” and what something “proves” is what somebody thinks.' } },
    { id: 'q7', type: 'multi', skill: 'letterlijk',
      q: { nl: 'Wat gebeurde er zaterdagnacht bij de sluis? Kies er 3.', en: 'What happened at the lock on Saturday night? Pick 3.' },
      options: [
        { nl: 'Er lag een plank met latjes op de sluis', en: 'A plank with little battens lay on the lock' },
        { nl: 'De moeder klom over de sluis', en: 'The mother climbed over the lock' },
        { nl: 'Moeder en jong zwommen samen weg', en: 'Mother and young one swam away together' },
        { nl: 'De plank viel in het water', en: 'The plank fell into the water' },
        { nl: 'Fatima nam het jong mee naar huis', en: 'Fatima took the young one home' }
      ], answer: [0, 1, 2],
      explain: { nl: 'Alinea 5 en 6 vertellen over de plank, de moeder en hoe ze samen wegzwommen.', en: 'Paragraphs 5 and 6 tell about the plank, the mother and how they swam away together.' } },
    { id: 'q8', type: 'mc', skill: 'doel',
      q: { nl: 'Wat wil de schrijver vooral laten zien met de toespraak van Sanne?', en: 'What does the writer mainly want to show with Sanne’s speech?' },
      options: [
        { nl: 'Dat iemand met goede argumenten anderen kan overtuigen, ook als je jong bent', en: 'That somebody with good arguments can convince others, even when you are young' },
        { nl: 'Dat kinderen beter kunnen praten dan volwassenen', en: 'That children can speak better than adults' },
        { nl: 'Dat het water in Nederland nog altijd vies is', en: 'That the water in the Netherlands is still dirty' },
        { nl: 'Dat Sanne bang is voor meneer De Wit', en: 'That Sanne is afraid of Mr De Wit' }
      ], answer: 0,
      explain: { nl: 'Sanne geeft een reden (de otter kwam terug door schoner water), en daardoor veranderen mensen van mening.', en: 'Sanne gives a reason (the otter came back because of cleaner water), and because of that people change their minds.' } },
    { id: 'q9', type: 'tf', skill: 'gevolgtrekking',
      q: { nl: 'Meneer De Wit blijft aan het eind van het verhaal tegen de otter.', en: 'Mr De Wit is still against the otter at the end of the story.' },
      answer: false,
      explain: { nl: 'Hij heeft de hele nacht geluisterd en wil een bordje ophangen met “otters welkom”.', en: 'He listened all night and wants to put up a sign saying “otters welcome”.' } },
    { id: 'q10', type: 'find', skill: 'hoofdgedachte',
      q: { nl: 'Welke zin laat het beste zien waarom het belangrijk is om de otter te helpen?', en: 'Which sentence best shows why it is important to help the otter?' },
      options: [
        { nl: 'Sanne, opa en Fatima zaten op de woonboot met een thermosfles chocolademelk.', en: 'Sanne, Grandpa and Fatima sat on the houseboat with a flask of hot chocolate.' },
        { nl: 'Dit jong is het bewijs dat het beter gaat.', en: 'This young one is the proof that things are getting better.' },
        { nl: 'Mevrouw Hoek wilde vooral weten of otters gevaarlijk zijn voor kinderen.', en: 'Mrs Hoek mostly wanted to know whether otters are dangerous for children.' },
        { nl: 'Op de sluis lag een lange plank met latjes.', en: 'On the lock lay a long plank with little battens.' }
      ], answer: 1,
      explain: { nl: 'Sanne legt uit dat de otter terugkomt omdat de natuur schoner wordt. Als je hem helpt, behoud je dat succes.', en: 'Sanne explains that the otter returns because nature is getting cleaner. If you help him, you protect that success.' } }
  ]
}
  ]
});
