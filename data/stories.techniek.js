/* Wereld 5 - Techniek & Ontdekking */
addStories([
{
  id: 'techniek-1', topic: 'techniek', level: 1, emoji: '🌿', scene: 'lab',
  title: { nl: 'De hond die klittenband uitvond', en: 'The dog that invented velcro' },
  text: {
    nl: [
      "In 1941 ging de Zwitser George de Mestral wandelen met zijn hond. Het was een gewone dag in de bergen.",
      "Toen hij thuiskwam, zat de vacht van zijn hond vol met klissen. Klissen zijn kleine bolletjes van een plant. Ze plakken overal aan vast. George moest ze er stuk voor stuk uit plukken.",
      "De meeste mensen worden daar boos van. George niet. Hij werd nieuwsgierig. Hij legde één klis onder zijn microscoop.",
      "Wat hij zag, verbaasde hem. Aan de klis zaten honderden piepkleine haakjes. Die haakjes bleven hangen in de lusjes van de hondenvacht.",
      "George dacht: kan ik dat namaken? Het duurde acht jaar voordat het lukte. Uiteindelijk maakte hij twee bandjes: eentje vol haakjes en eentje vol lusjes. Als je ze op elkaar drukt, plakken ze aan elkaar. Trek je ze los, dan hoor je dat bekende geluid.",
      "Nu zit klittenband op schoenen, jassen en zelfs op de slaapzakken van astronauten. Allemaal dankzij een hond die door het veld rende."
    ],
    en: [
      "In 1941 the Swiss man George de Mestral went for a walk with his dog. It was an ordinary day in the mountains.",
      "When he got home, his dog’s coat was full of burrs. Burrs are little balls from a plant. They stick to everything. George had to pull them out one by one.",
      "Most people get annoyed by that. Not George. He got curious. He put one burr under his microscope.",
      "What he saw astonished him. The burr had hundreds of tiny hooks on it. Those hooks got caught in the loops of the dog’s coat.",
      "George thought: can I copy that? It took eight years before he managed it. In the end he made two strips: one full of hooks and one full of loops. If you press them together, they stick. Pull them apart and you hear that familiar sound.",
      "Today velcro is on shoes, coats and even on the sleeping bags of astronauts. All thanks to a dog that ran through a field."
    ]
  },
  words: [
    { nl: 'klis', en: 'burr', defNl: 'stekelig bolletje van een plant dat vastplakt', defEn: 'a prickly ball from a plant that sticks' },
    { nl: 'nieuwsgierig', en: 'curious', defNl: 'je wilt graag weten hoe iets zit', defEn: 'you really want to know how something works' },
    { nl: 'namaken', en: 'to copy', defNl: 'zelf hetzelfde maken', defEn: 'to make the same thing yourself' }
  ],
  questions: [
    { id: 'q1', type: 'mc', skill: 'letterlijk',
      q: { nl: 'Wat zag George onder de microscoop?', en: 'What did George see under the microscope?' },
      options: [
        { nl: 'Honderden piepkleine haakjes', en: 'Hundreds of tiny hooks' },
        { nl: 'Kleine wormpjes', en: 'Little worms' },
        { nl: 'Zaadjes van een boom', en: 'Seeds of a tree' },
        { nl: 'Stukjes hondenhaar', en: 'Bits of dog hair' }
      ], answer: 0,
      explain: { nl: 'Alinea 4: "Aan de klis zaten honderden piepkleine haakjes."',
                 en: 'Paragraph 4: "The burr had hundreds of tiny hooks on it."' } },
    { id: 'q2', type: 'mc', skill: 'gevolgtrekking',
      q: { nl: 'Wat maakte George anders dan de meeste mensen?', en: 'What made George different from most people?' },
      options: [
        { nl: 'Hij werd nieuwsgierig in plaats van boos', en: 'He got curious instead of annoyed' },
        { nl: 'Hij had een grotere hond', en: 'He had a bigger dog' },
        { nl: 'Hij wandelde vaker', en: 'He walked more often' },
        { nl: 'Hij hield niet van klissen', en: 'He did not like burrs' }
      ], answer: 0,
      explain: { nl: 'De tekst zet het naast elkaar: anderen worden boos, George werd nieuwsgierig.',
                 en: 'The text puts it side by side: others get annoyed, George got curious.' } },
    { id: 'q3', type: 'tf', skill: 'letterlijk',
      q: { nl: 'George had het klittenband binnen een week af.', en: 'George finished velcro within a week.' },
      answer: false,
      explain: { nl: 'Het duurde acht jaar voordat het lukte.', en: 'It took eight years before he managed it.' } },
    { id: 'q4', type: 'order', skill: 'volgorde',
      q: { nl: 'Zet de uitvinding op volgorde.', en: 'Put the invention in order.' },
      items: [
        { nl: 'George gaat wandelen met zijn hond.', en: 'George goes walking with his dog.' },
        { nl: 'De vacht van de hond zit vol klissen.', en: 'The dog’s coat is full of burrs.' },
        { nl: 'Hij legt een klis onder de microscoop.', en: 'He puts a burr under the microscope.' },
        { nl: 'Na acht jaar maakt hij twee bandjes die aan elkaar plakken.', en: 'After eight years he makes two strips that stick together.' }
      ], answer: [0, 1, 2, 3],
      explain: { nl: 'Wandeling, klissen, microscoop, uitvinding.', en: 'Walk, burrs, microscope, invention.' } },
    { id: 'q5', type: 'gap', skill: 'woordenschat',
      q: { nl: 'George wilde de klis namaken. Namaken betekent ___.', en: 'George wanted to copy the burr. To copy means ___.' },
      options: [
        { nl: 'zelf hetzelfde maken', en: 'to make the same thing yourself' },
        { nl: 'weggooien', en: 'to throw away' },
        { nl: 'opeten', en: 'to eat up' },
        { nl: 'tekenen', en: 'to draw' }
      ], answer: 0,
      explain: { nl: 'Hij wilde zelf iets maken dat net zo werkt als de klis.',
                 en: 'He wanted to make something himself that works just like the burr.' } }
  ]
},

{
  id: 'techniek-2', topic: 'techniek', level: 2, emoji: '🌊', scene: 'water',
  title: { nl: 'Hoe houden we onze voeten droog?', en: 'How do we keep our feet dry?' },
  text: {
    nl: [
      "Ongeveer een derde van Nederland ligt onder de zeespiegel. Zonder dijken zou je in Rotterdam moeten zwemmen in plaats van fietsen. Dat wij droge voeten houden, is geen toeval maar een van de grootste bouwprojecten ter wereld.",
      "Het begon simpel. Boeren gooiden aarde op tot een dijkje rond hun land. Als het water toch kwam, maakten ze het dijkje hoger. Later kwamen de molens. Een molen pompte het water uit de polder omhoog, naar een vaart die naar zee liep.",
      "Op 1 februari 1953 ging het toch mis. Een zware storm viel samen met springtij, waardoor het water veel hoger kwam dan ooit. In Zeeland braken de dijken op tientallen plaatsen. Meer dan 1800 mensen kwamen om.",
      "Daarna zei Nederland: dit nooit meer. Er kwamen de Deltawerken, een reeks dammen en keringen. De bekendste is de Oosterscheldekering. Die is bijzonder, want hij staat normaal open. Daardoor blijft het zoute water in de Oosterschelde stromen en blijven mosselen en zeehonden leven. Alleen bij zware storm gaan de schuiven omlaag.",
      "Nu bouwen ingenieurs anders dan vroeger. Ze maken niet alleen hogere dijken, maar geven rivieren ook meer ruimte. Bij hoog water mag een stuk land onder lopen, zodat de stad droog blijft. Water tegenhouden lukt niet altijd. Water de ruimte geven soms wel."
    ],
    en: [
      "About a third of the Netherlands lies below sea level. Without dikes you would have to swim in Rotterdam instead of cycle. The fact that we keep our feet dry is no accident but one of the biggest building projects in the world.",
      "It started simply. Farmers piled up earth into a small dike around their land. If the water still came, they made the dike higher. Later came the windmills. A mill pumped the water up out of the polder into a channel that ran to the sea.",
      "On 1 February 1953 it went wrong all the same. A heavy storm coincided with a spring tide, so the water rose higher than ever. In Zeeland the dikes broke in dozens of places. More than 1800 people died.",
      "After that the Netherlands said: never again. The Delta Works were built, a series of dams and barriers. The best known is the Eastern Scheldt barrier. It is special, because normally it stands open. That lets the salt water keep flowing into the Eastern Scheldt so mussels and seals can live on. Only in a heavy storm do the gates come down.",
      "Today engineers build differently than before. They do not only make higher dikes, they also give rivers more room. At high water a piece of land is allowed to flood, so that the town stays dry. Holding water back does not always work. Giving water room sometimes does."
    ]
  },
  words: [
    { nl: 'zeespiegel', en: 'sea level', defNl: 'de hoogte van het zeewater', defEn: 'the height of the sea water' },
    { nl: 'polder', en: 'polder', defNl: 'laag land waar het water uit gepompt is', defEn: 'low land the water has been pumped out of' },
    { nl: 'kering', en: 'barrier', defNl: 'bouwwerk dat water kan tegenhouden', defEn: 'a structure that can hold water back' }
  ],
  questions: [
    { id: 'q1', type: 'mc', skill: 'letterlijk',
      q: { nl: 'Wat gebeurde er op 1 februari 1953?', en: 'What happened on 1 February 1953?' },
      options: [
        { nl: 'Een zware storm en springtij lieten de dijken breken', en: 'A heavy storm and spring tide broke the dikes' },
        { nl: 'De Deltawerken werden geopend', en: 'The Delta Works were opened' },
        { nl: 'De eerste molen werd gebouwd', en: 'The first windmill was built' },
        { nl: 'Rotterdam werd gebouwd', en: 'Rotterdam was built' }
      ], answer: 0,
      explain: { nl: 'Alinea 3 beschrijft de watersnoodramp: storm plus springtij.',
                 en: 'Paragraph 3 describes the flood disaster: storm plus spring tide.' } },
    { id: 'q2', type: 'mc', skill: 'gevolgtrekking',
      q: { nl: 'Waarom staat de Oosterscheldekering normaal open?',
           en: 'Why does the Eastern Scheldt barrier normally stand open?' },
      options: [
        { nl: 'Zodat zout water blijft stromen en dieren blijven leven', en: 'So salt water keeps flowing and animals survive' },
        { nl: 'Omdat hij kapot is', en: 'Because it is broken' },
        { nl: 'Omdat schepen anders niet kunnen varen', en: 'Because ships could not sail otherwise' },
        { nl: 'Omdat het goedkoper is', en: 'Because it is cheaper' }
      ], answer: 0,
      explain: { nl: 'De tekst noemt mosselen en zeehonden als reden.',
                 en: 'The text names mussels and seals as the reason.' } },
    { id: 'q3', type: 'order', skill: 'volgorde',
      q: { nl: 'Zet de geschiedenis van waterbouw op volgorde.', en: 'Put the history of water building in order.' },
      items: [
        { nl: 'Boeren maken kleine dijkjes rond hun land.', en: 'Farmers make small dikes around their land.' },
        { nl: 'Molens pompen het water uit de polder.', en: 'Windmills pump the water out of the polder.' },
        { nl: 'De watersnoodramp van 1953.', en: 'The flood disaster of 1953.' },
        { nl: 'De Deltawerken worden gebouwd.', en: 'The Delta Works are built.' },
        { nl: 'Rivieren krijgen weer meer ruimte.', en: 'Rivers are given more room again.' }
      ], answer: [0, 1, 2, 3, 4],
      explain: { nl: 'De tekst loopt netjes van vroeger naar nu.', en: 'The text runs neatly from the past to today.' } },
    { id: 'q4', type: 'tf', skill: 'gevolgtrekking',
      q: { nl: 'Volgens de tekst is een hogere dijk altijd de beste oplossing.',
           en: 'According to the text a higher dike is always the best solution.' },
      answer: false,
      explain: { nl: 'De slotalinea zegt juist dat rivieren soms ruimte moeten krijgen.',
                 en: 'The final paragraph says rivers sometimes need to be given room.' } },
    { id: 'q5', type: 'gap', skill: 'woordenschat',
      q: { nl: 'Een polder is ___.', en: 'A polder is ___.' },
      options: [
        { nl: 'laag land waar het water uit gepompt is', en: 'low land the water has been pumped out of' },
        { nl: 'een hoge berg', en: 'a high mountain' },
        { nl: 'een soort molen', en: 'a kind of windmill' },
        { nl: 'een storm op zee', en: 'a storm at sea' }
      ], answer: 0,
      explain: { nl: 'De molen pompt het water uit de polder omhoog: het land ligt dus lager.',
                 en: 'The mill pumps water up out of the polder: so the land lies lower.' } }
  ]
},

{
  id: 'techniek-3', topic: 'techniek', level: 3, emoji: '🤖', scene: 'lab',
  title: { nl: 'De robot die leerde vallen', en: 'The robot that learned to fall' },
  text: {
    nl: [
      "Een robot leren lopen is veel lastiger dan het lijkt. Een mens van één jaar oud doet het zonder na te denken, maar voor een machine is elke stap een rekensom: hoe zwaar leun ik, hoe hoog til ik mijn voet, wat als de vloer glad is?",
      "Vroeger schreven programmeurs elke beweging zelf op. Regel voor regel: knie buigen, voet neerzetten, gewicht verplaatsen. Zolang de vloer precies was zoals verwacht, ging het goed. Lag er een drempel, dan viel de robot om.",
      "Daarom werken onderzoekers nu anders. Ze laten de robot het zelf uitzoeken in een computerversie van de echte wereld, een simulatie. Daar mag de robot duizenden keren per uur vallen zonder iets kapot te maken. Elke keer dat hij iets langer blijft staan, krijgt hij een punt. Elke keer dat hij valt, krijgt hij niets. Het programma probeert simpelweg zoveel mogelijk punten te halen. Na een paar miljoen pogingen loopt de robot.",
      "Het gekke is dat niemand precies kan uitleggen hóé hij het doet. De computer heeft geen regels opgeschreven, maar patronen ontdekt. Sommige robots vinden zelfs bewegingen die geen mens had bedacht, zoals een rare huppel die energie bespaart.",
      "Toch zit er een grens aan. Een robot die perfect loopt in de simulatie kan in het echt alsnog omvallen, want echte modder, wind en kinderen die eraan trekken zitten niet in de computer. Onderzoekers noemen dat het gat tussen simulatie en werkelijkheid.",
      "Leren door te vallen werkt dus, maar alleen als je daarna ook echt naar buiten durft."
    ],
    en: [
      "Teaching a robot to walk is far harder than it looks. A one-year-old human does it without thinking, but for a machine every step is a calculation: how far do I lean, how high do I lift my foot, what if the floor is slippery?",
      "In the past programmers wrote down every movement themselves. Line by line: bend knee, put foot down, shift weight. As long as the floor was exactly as expected, it went fine. Put a doorstep there and the robot fell over.",
      "That is why researchers now work differently. They let the robot work it out itself in a computer version of the real world, a simulation. There the robot may fall thousands of times an hour without breaking anything. Every time it stays upright a bit longer, it gets a point. Every time it falls, it gets nothing. The program simply tries to collect as many points as possible. After a few million attempts the robot walks.",
      "The odd thing is that nobody can explain exactly how it does it. The computer has not written down rules but discovered patterns. Some robots even find movements no human had thought of, such as a strange hop that saves energy.",
      "Still, there is a limit. A robot that walks perfectly in the simulation can fall over in real life anyway, because real mud, wind and children pulling at it are not in the computer. Researchers call that the gap between simulation and reality.",
      "So learning by falling works, but only if afterwards you really dare to go outside."
    ]
  },
  words: [
    { nl: 'simulatie', en: 'simulation', defNl: 'een nagemaakte wereld in de computer', defEn: 'an imitation world inside the computer' },
    { nl: 'patroon', en: 'pattern', defNl: 'iets dat steeds op dezelfde manier terugkomt', defEn: 'something that keeps coming back the same way' },
    { nl: 'werkelijkheid', en: 'reality', defNl: 'de echte wereld', defEn: 'the real world' }
  ],
  questions: [
    { id: 'q1', type: 'mc', skill: 'gevolgtrekking',
      q: { nl: 'Waarom laten onderzoekers de robot eerst in een simulatie oefenen?',
           en: 'Why do researchers let the robot practise in a simulation first?' },
      options: [
        { nl: 'Omdat hij daar duizenden keren kan vallen zonder kapot te gaan',
          en: 'Because there it can fall thousands of times without breaking' },
        { nl: 'Omdat de simulatie mooiere kleuren heeft', en: 'Because the simulation has nicer colours' },
        { nl: 'Omdat echte robots niet kunnen lopen', en: 'Because real robots cannot walk' },
        { nl: 'Omdat het buiten te koud is', en: 'Because it is too cold outside' }
      ], answer: 0,
      explain: { nl: 'Alinea 3 zegt het letterlijk: vallen zonder iets kapot te maken.',
                 en: 'Paragraph 3 says it literally: falling without breaking anything.' } },
    { id: 'q2', type: 'mc', skill: 'letterlijk',
      q: { nl: 'Wat krijgt de robot als hij langer blijft staan?', en: 'What does the robot get when it stays upright longer?' },
      options: [ { nl: 'Een punt', en: 'A point' }, { nl: 'Een nieuwe accu', en: 'A new battery' },
                 { nl: 'Een naam', en: 'A name' }, { nl: 'Een nieuwe voet', en: 'A new foot' } ],
      answer: 0,
      explain: { nl: 'Punten voor blijven staan, niets voor vallen. Zo leert het programma.',
                 en: 'Points for staying up, nothing for falling. That is how the program learns.' } },
    { id: 'q3', type: 'tf', skill: 'gevolgtrekking',
      q: { nl: 'Onderzoekers kunnen precies uitleggen hoe de robot leert lopen.',
           en: 'Researchers can explain exactly how the robot learns to walk.' },
      answer: false,
      explain: { nl: 'Alinea 4: "niemand kan precies uitleggen hóé hij het doet".',
                 en: 'Paragraph 4: "nobody can explain exactly how it does it".' } },
    { id: 'q4', type: 'mc', skill: 'woordenschat',
      q: { nl: 'Wat bedoelt de schrijver met "het gat tussen simulatie en werkelijkheid"?',
           en: 'What does the writer mean by "the gap between simulation and reality"?' },
      options: [
        { nl: 'Het verschil tussen de computerwereld en de echte wereld', en: 'The difference between the computer world and the real world' },
        { nl: 'Een kuil in de vloer van het lab', en: 'A hole in the lab floor' },
        { nl: 'De tijd die het leren kost', en: 'The time the learning takes' },
        { nl: 'Een kapotte robotvoet', en: 'A broken robot foot' }
      ], answer: 0,
      explain: { nl: 'Modder, wind en trekkende kinderen zitten niet in de computer. Dat is het gat.',
                 en: 'Mud, wind and children pulling are not in the computer. That is the gap.' } },
    { id: 'q5', type: 'mc', skill: 'hoofdgedachte',
      q: { nl: 'Wat is de hoofdgedachte?', en: 'What is the main idea?' },
      options: [
        { nl: 'Robots leren lopen door heel vaak te vallen, maar de echte wereld blijft moeilijker',
          en: 'Robots learn to walk by falling a lot, but the real world stays harder' },
        { nl: 'Programmeurs moeten meer regels schrijven', en: 'Programmers should write more rules' },
        { nl: 'Robots zijn slimmer dan mensen', en: 'Robots are smarter than people' },
        { nl: 'Simulaties zijn nutteloos', en: 'Simulations are useless' }
      ], answer: 0,
      explain: { nl: 'De tekst legt de nieuwe manier uit én de grens ervan.',
                 en: 'The text explains the new method and its limit.' } }
  ]
}
]);
