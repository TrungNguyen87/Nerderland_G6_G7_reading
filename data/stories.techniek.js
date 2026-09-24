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

/* --- Niveau 4 en 5: langere teksten met Cito-achtige vragen --- */
addStories([
{
  id: 'techniek-4', topic: 'techniek', level: 4, emoji: '☀️', scene: 'lab',
  title: { nl: 'Hoe een plat plaatje zonlicht vangt', en: 'How a flat panel catches sunlight' },
  text: {
    nl: [
      "Op steeds meer daken liggen ze: donkerblauwe of zwarte platen die niets doen en toch stroom maken. Geen enkel onderdeel beweegt, er is geen geluid, en er komt geen rook vanaf. Hoe kan dat?",
      "Het geheim zit in silicium, een stof die je uit gewoon zand kunt halen. Silicium geleidt stroom niet goed, maar ook niet slecht. Daarom heet het een halfgeleider. Fabrikanten maken twee dunne laagjes van dat silicium en mengen er heel kleine hoeveelheden van andere stoffen doorheen. In het ene laagje zitten daardoor elektronen te veel, in het andere te weinig.",
      "Als licht op de plaat valt, slaat het elektronen los uit hun plek. Die losgeslagen elektronen willen naar het laagje waar er te weinig zijn. Tussen de twee laagjes ontstaat zo een duwtje, een spanning. Verbind je de boven- en onderkant met een draad, dan gaan de elektronen lopen. Dat lopen is precies wat wij elektrische stroom noemen.",
      "Het idee is ouder dan de meeste mensen denken. De Franse natuurkundige Edmond Becquerel merkte het effect al in 1839, als negentienjarige in het laboratorium van zijn vader. Pas in 1954 maakten onderzoekers van Bell Labs er een werkend paneel van. Dat eerste paneel zette ongeveer zes procent van het zonlicht om in stroom. Een modern paneel haalt rond de twintig procent, en in laboratoria lukt al meer dan dertig.",
      "Waarom niet honderd? Omdat licht uit allerlei kleuren bestaat. Silicium kan met een deel daarvan niets: die kleuren gaan er dwars doorheen of worden alleen maar warmte. Een paneel dat te heet wordt, levert bovendien juist mínder stroom. Daarom werken panelen op een koude, heldere aprildag vaak beter dan op een snikhete zomermiddag.",
      "En 's nachts? Dan doet het paneel niets. Daarom staat er bij veel huizen een accu, of gaat de stroom overdag het net op en haalt het huis hem 's avonds weer terug. Het moeilijkste aan zonne-energie is dus niet het vangen van het licht. Het moeilijkste is het bewaren."
    ],
    en: [
      "They lie on more and more roofs: dark blue or black panels that do nothing and still make electricity. Not a single part moves, there is no sound, and no smoke comes off. How is that possible?",
      "The secret is silicon, a substance you can get out of ordinary sand. Silicon does not conduct electricity well, but not badly either. That is why it is called a semiconductor. Manufacturers make two thin layers of that silicon and mix tiny amounts of other substances into them. One layer then has too many electrons, the other too few.",
      "When light hits the panel, it knocks electrons out of their place. Those loosened electrons want to go to the layer where there are too few. Between the two layers a little push appears, a voltage. Connect the top and the bottom with a wire and the electrons start to move. That movement is exactly what we call electric current.",
      "The idea is older than most people think. The French physicist Edmond Becquerel noticed the effect back in 1839, as a nineteen-year-old in his father’s laboratory. Only in 1954 did researchers at Bell Labs turn it into a working panel. That first panel turned about six percent of the sunlight into electricity. A modern panel reaches around twenty percent, and in laboratories more than thirty already works.",
      "Why not a hundred? Because light is made of all sorts of colours. Silicon can do nothing with some of them: those colours pass straight through or only become heat. And a panel that gets too hot actually delivers less electricity. That is why panels often work better on a cold, clear April day than on a baking summer afternoon.",
      "And at night? Then the panel does nothing. That is why many houses have a battery, or send the electricity to the grid during the day and take it back in the evening. So the hardest thing about solar energy is not catching the light. The hardest thing is storing it."
    ]
  },
  words: [
    { nl: 'halfgeleider', en: 'semiconductor', defNl: 'een stof die stroom niet goed en niet slecht doorlaat', defEn: 'a substance that conducts electricity neither well nor badly' },
    { nl: 'spanning', en: 'voltage', defNl: 'het duwtje dat elektronen door een draad laat lopen', defEn: 'the push that makes electrons move through a wire' },
    { nl: 'accu', en: 'battery', defNl: 'een bak waarin je stroom kunt bewaren voor later', defEn: 'a box in which you can store electricity for later' }
  ],
  questions: [
    { id: 'q1', type: 'mc', skill: 'letterlijk',
      q: { nl: 'Waar wordt silicium uit gehaald?', en: 'What is silicon taken from?' },
      options: [
        { nl: 'Uit gewoon zand', en: 'From ordinary sand' },
        { nl: 'Uit steenkool', en: 'From coal' },
        { nl: 'Uit zeewater', en: 'From sea water' },
        { nl: 'Uit oude accu’s', en: 'From old batteries' }
      ], answer: 0,
      explain: { nl: 'Alinea 2: "silicium, een stof die je uit gewoon zand kunt halen".',
                 en: 'Paragraph 2: "silicon, a substance you can get out of ordinary sand".' } },
    { id: 'q2', type: 'order', skill: 'volgorde',
      q: { nl: 'Zet op volgorde wat er gebeurt als er licht op een paneel valt.',
           en: 'Put in order what happens when light hits a panel.' },
      items: [
        { nl: 'Licht slaat elektronen los uit hun plek.', en: 'Light knocks electrons out of their place.' },
        { nl: 'De elektronen willen naar het laagje met te weinig elektronen.', en: 'The electrons want to go to the layer with too few.' },
        { nl: 'Tussen de laagjes ontstaat spanning.', en: 'A voltage appears between the layers.' },
        { nl: 'Door een draad gaan de elektronen lopen: dat is stroom.', en: 'Through a wire the electrons start to move: that is current.' }
      ], answer: [0, 1, 2, 3],
      explain: { nl: 'Alinea 3 beschrijft precies deze keten, van losslaan tot lopen.',
                 en: 'Paragraph 3 describes exactly this chain, from knocking loose to moving.' } },
    { id: 'q3', type: 'gap', skill: 'woordenschat',
      q: { nl: 'Silicium heet een halfgeleider omdat het stroom ___.',
           en: 'Silicon is called a semiconductor because it conducts electricity ___.' },
      options: [
        { nl: 'niet goed en niet slecht doorlaat', en: 'neither well nor badly' },
        { nl: 'helemaal niet doorlaat', en: 'not at all' },
        { nl: 'beter doorlaat dan koper', en: 'better than copper' },
        { nl: 'alleen in het donker doorlaat', en: 'only in the dark' }
      ], answer: 0,
      explain: { nl: '"Half" slaat hier op precies dat tussenin-zijn: alinea 2 legt het uit.',
                 en: '"Semi" means exactly that in-between quality, as paragraph 2 explains.' } },
    { id: 'q4', type: 'mc', skill: 'gevolgtrekking',
      q: { nl: 'Waarom werkt een paneel op een koude, heldere dag vaak beter dan op een snikhete dag?',
           en: 'Why does a panel often work better on a cold, clear day than on a baking hot one?' },
      options: [
        { nl: 'Omdat een paneel dat te heet wordt minder stroom levert',
          en: 'Because a panel that gets too hot delivers less electricity' },
        { nl: 'Omdat er in de winter meer licht is', en: 'Because there is more light in winter' },
        { nl: 'Omdat silicium niet tegen zon kan', en: 'Because silicon cannot stand the sun' },
        { nl: 'Omdat de accu dan sneller vol is', en: 'Because the battery fills up faster then' }
      ], answer: 0,
      explain: { nl: 'Alinea 5 noemt die reden. Koud én helder is de beste combinatie.',
                 en: 'Paragraph 5 gives that reason: cold and clear is the best combination.' } },
    { id: 'q5', type: 'mc', skill: 'verwijswoorden',
      q: { nl: '"Silicium kan met een deel daarvan niets." Waar verwijst "daarvan" naar?',
           en: '"Silicon can do nothing with some of them." What does "them" refer to?' },
      options: [
        { nl: 'De kleuren waaruit licht bestaat', en: 'The colours that light is made of' },
        { nl: 'De elektronen in het onderste laagje', en: 'The electrons in the bottom layer' },
        { nl: 'De daken waarop panelen liggen', en: 'The roofs the panels lie on' },
        { nl: 'De accu’s bij het huis', en: 'The batteries beside the house' }
      ], answer: 0,
      explain: { nl: 'De zin ervoor is: "licht bestaat uit allerlei kleuren". Daar pakt "daarvan" op terug.',
                 en: 'The sentence before says light is made of all sorts of colours; "them" picks that up.' } },
    { id: 'q6', type: 'multi', skill: 'letterlijk',
      q: { nl: 'Welke twee rendementen noemt de tekst? Kies er 2.',
           en: 'Which two efficiency figures does the text name? Pick 2.' },
      options: [
        { nl: 'Het eerste paneel van 1954: ongeveer zes procent', en: 'The first panel of 1954: about six percent' },
        { nl: 'Een modern paneel: rond de twintig procent', en: 'A modern panel: around twenty percent' },
        { nl: 'Een paneel in de winter: nul procent', en: 'A panel in winter: zero percent' },
        { nl: 'Een paneel met accu: honderd procent', en: 'A panel with a battery: a hundred percent' }
      ], answer: [0, 1],
      explain: { nl: 'Alinea 4 noemt zes procent in 1954 en rond de twintig procent nu (dertig in het laboratorium).',
                 en: 'Paragraph 4 names six percent in 1954 and around twenty percent today (thirty in the lab).' } },
    { id: 'q7', type: 'mc', skill: 'structuur',
      q: { nl: 'De tekst stelt twee keer een vraag: "Waarom niet honderd?" en "En \'s nachts?". Wat is daarvan het effect?',
           en: 'The text asks two questions: "Why not a hundred?" and "And at night?". What is the effect?' },
      options: [
        { nl: 'Elke vraag opent een nieuwe alinea met het antwoord erop', en: 'Each question opens a new paragraph that answers it' },
        { nl: 'De schrijver weet het antwoord zelf niet', en: 'The writer does not know the answer' },
        { nl: 'Het zijn vragen aan een deskundige', en: 'They are questions to an expert' },
        { nl: 'Ze maken de tekst korter', en: 'They make the text shorter' }
      ], answer: 0,
      explain: { nl: 'Zulke vragen heten leesvragen: ze kondigen aan waar de volgende alinea over gaat.',
                 en: 'Such questions announce what the next paragraph is about.' } },
    { id: 'q8', type: 'mc', skill: 'hoofdgedachte',
      q: { nl: 'Wat is de hoofdgedachte van deze tekst?', en: 'What is the main idea of this text?' },
      options: [
        { nl: 'Een zonnepaneel maakt stroom uit licht, maar kan niet alle licht gebruiken en kan het niet bewaren',
          en: 'A solar panel makes electricity from light, but cannot use all light and cannot store it' },
        { nl: 'Edmond Becquerel was pas negentien toen hij iets ontdekte',
          en: 'Edmond Becquerel was only nineteen when he discovered something' },
        { nl: 'Zand is een handige grondstof', en: 'Sand is a handy raw material' },
        { nl: 'Panelen zijn zwart of donkerblauw', en: 'Panels are black or dark blue' }
      ], answer: 0,
      explain: { nl: 'Werking, grenzen en opslag: dat zijn samen de alinea’s van deze tekst.',
                 en: 'How it works, its limits and storage: together those are the paragraphs of this text.' } }
  ]
},

{
  id: 'techniek-5', topic: 'techniek', level: 5, emoji: '🧠', scene: 'lab',
  title: { nl: 'Mag de computer je opstel schrijven?', en: 'May the computer write your essay?' },
  text: {
    nl: [
      "Je typt één zin in een venster, en twintig seconden later staat er een compleet werkstuk over de Romeinen. Netjes in alinea’s, met een inleiding en een slot. Sinds slimme taalprogramma’s voor iedereen te gebruiken zijn, staat elke school voor dezelfde vraag: wat doen we hiermee?",
      "Om te snappen waarom dit lastig ligt, helpt het te weten hoe zo’n programma werkt. Het heeft enorme hoeveelheden tekst gelezen en daarin patronen geleerd. Daarna raadt het telkens het volgende woord dat waarschijnlijk past. Het begrijpt de Romeinen dus niet. Het weet alleen welke woorden vaak in de buurt van elkaar staan.",
      "Dat verklaart ook de bekendste fout. Als het programma iets niet weet, verzint het gewoon iets dat waarschijnlijk klínkt. Onderzoekers noemen dat hallucineren. Het bedenkt een jaartal, een naam of zelfs een boek dat nooit bestaan heeft, en zegt het net zo overtuigd als de rest.",
      "Sommige scholen kozen daarom voor een verbod. Filters, schrijven op papier, toetsen zonder laptop. Het probleem is dat een verbod moeilijk te controleren is. Er bestaan programma’s die zouden herkennen of een tekst door een computer gemaakt is, maar die vergissen zich vaak, en ze doen dat vooral bij leerlingen die nog niet zo vloeiend schrijven. Wie op grond daarvan straft, straft soms de verkeerde.",
      "Andere scholen draaien het om. Zij laten leerlingen juist mét het programma werken, maar veranderen de opdracht. Niet: schrijf een werkstuk over de Romeinen. Wel: laat de computer er een schrijven, zoek daarna drie fouten en leg uit hoe je ze hebt gevonden. Zo wordt het gereedschap zelf het onderwerp van de les.",
      "Er is nog iets waar leraren zich zorgen over maken, en dat gaat niet over spieken. Schrijven is niet alleen opschrijven wat je denkt; door te schrijven ga je pas echt denken. Wie die worsteling overslaat, levert misschien een mooi werkstuk in, maar leert minder. Dat verlies zie je op geen enkele controle terug.",
      "Toch is er weinig reden voor paniek. Bij de rekenmachine gebeurde precies hetzelfde: eerst verbieden, dan toelaten, en uiteindelijk het rekenonderwijs zo veranderen dat je hem slim leert gebruiken. Waarschijnlijk gaat het deze keer net zo. Alleen moet er wel iemand bepalen wat kinderen nog zélf moeten kunnen. En die keuze maakt geen computer voor ons."
    ],
    en: [
      "You type one sentence into a window, and twenty seconds later there is a complete project about the Romans. Neatly in paragraphs, with an introduction and a conclusion. Since clever language programs became available to everyone, every school faces the same question: what do we do with this?",
      "To understand why this is tricky, it helps to know how such a program works. It has read enormous amounts of text and learned patterns in it. Then it keeps guessing the next word that probably fits. So it does not understand the Romans. It only knows which words often stand near each other.",
      "That also explains the best-known fault. When the program does not know something, it simply invents something that sounds likely. Researchers call that hallucinating. It makes up a date, a name or even a book that never existed, and says it just as confidently as the rest.",
      "Some schools therefore chose a ban. Filters, writing on paper, tests without a laptop. The problem is that a ban is hard to check. Programs exist that are supposed to recognise whether a text was made by a computer, but they are often wrong, especially with pupils who do not yet write fluently. Punishing on that basis sometimes punishes the wrong person.",
      "Other schools turn it around. They let pupils work with the program on purpose, but change the assignment. Not: write a project about the Romans. Instead: have the computer write one, then find three mistakes and explain how you found them. That way the tool itself becomes the subject of the lesson.",
      "There is something else teachers worry about, and it is not about cheating. Writing is not only putting down what you think; it is by writing that you really begin to think. Anyone who skips that struggle may hand in a fine project, but learns less. That loss shows up on no check at all.",
      "Yet there is little reason to panic. Exactly the same happened with the calculator: first a ban, then permission, and in the end maths teaching changed so that you learn to use it cleverly. This will probably go the same way. Only, somebody does have to decide what children must still be able to do themselves. And no computer makes that choice for us."
    ]
  },
  words: [
    { nl: 'patroon', en: 'pattern', defNl: 'iets wat zich steeds op dezelfde manier herhaalt', defEn: 'something that keeps repeating in the same way' },
    { nl: 'hallucineren', en: 'to hallucinate', defNl: 'hier: iets verzinnen dat echt lijkt maar niet bestaat', defEn: 'here: inventing something that looks real but does not exist' },
    { nl: 'gereedschap', en: 'tool', defNl: 'iets waarmee je een klus uitvoert', defEn: 'something you use to get a job done' }
  ],
  questions: [
    { id: 'q1', type: 'mc', skill: 'letterlijk',
      q: { nl: 'Hoe maakt zo’n taalprogramma een tekst?', en: 'How does such a language program make a text?' },
      options: [
        { nl: 'Het raadt telkens het volgende woord dat waarschijnlijk past',
          en: 'It keeps guessing the next word that probably fits' },
        { nl: 'Het zoekt het antwoord op in een boek', en: 'It looks the answer up in a book' },
        { nl: 'Het vraagt het aan een leraar', en: 'It asks a teacher' },
        { nl: 'Het kopieert een werkstuk van een andere leerling', en: 'It copies another pupil’s project' }
      ], answer: 0,
      explain: { nl: 'Alinea 2 legt het uit: patronen leren en dan telkens het volgende woord raden.',
                 en: 'Paragraph 2 explains it: learning patterns and then guessing the next word each time.' } },
    { id: 'q2', type: 'mc', skill: 'gevolgtrekking',
      q: { nl: 'Waarom verzint het programma soms een boek dat niet bestaat?',
           en: 'Why does the program sometimes invent a book that does not exist?' },
      options: [
        { nl: 'Omdat het niet weet wat waar is, maar alleen wat waarschijnlijk klinkt',
          en: 'Because it does not know what is true, only what sounds likely' },
        { nl: 'Omdat het expres wil liegen', en: 'Because it wants to lie on purpose' },
        { nl: 'Omdat er te weinig boeken bestaan', en: 'Because there are too few books' },
        { nl: 'Omdat leerlingen erom vragen', en: 'Because pupils ask for it' }
      ], answer: 0,
      explain: { nl: 'Het programma begrijpt niets; het kiest woorden die vaak samen voorkomen. Daardoor kan het overtuigend onzin maken.',
                 en: 'The program understands nothing; it picks words that often go together, so it can produce convincing nonsense.' } },
    { id: 'q3', type: 'sort', skill: 'feitmening',
      q: { nl: 'Feit of mening? Zet elke zin in de goede groep.',
           en: 'Fact or opinion? Put every sentence in the right group.' },
      bins: [{ nl: 'Feit', en: 'Fact' }, { nl: 'Mening', en: 'Opinion' }],
      items: [
        { nl: 'Het programma raadt telkens het volgende woord.',
          en: 'The program keeps guessing the next word.', bin: 0 },
        { nl: 'Er is weinig reden voor paniek.', en: 'There is little reason to panic.', bin: 1 },
        { nl: 'Herkenprogramma’s vergissen zich vaak bij leerlingen die minder vloeiend schrijven.',
          en: 'Detection programs are often wrong about pupils who write less fluently.', bin: 0 },
        { nl: 'Iemand moet bepalen wat kinderen nog zelf moeten kunnen.',
          en: 'Somebody has to decide what children must still be able to do themselves.', bin: 1 }
      ],
      explain: { nl: 'Hoe iets werkt en wat onderzoekers gemeten hebben zijn feiten. "Weinig reden voor paniek" en "moet" zijn standpunten.',
                 en: 'How something works and what researchers measured are facts. "Little reason to panic" and "must" are positions.' } },
    { id: 'q4', type: 'mc', skill: 'verwijswoorden',
      q: { nl: '"Wie op grond daarvan straft, straft soms de verkeerde." Waar verwijst "daarvan" naar?',
           en: '"Punishing on that basis sometimes punishes the wrong person." What does "that basis" refer to?' },
      options: [
        { nl: 'Op de uitslag van een programma dat computertekst moet herkennen',
          en: 'The result of a program that is supposed to recognise computer text' },
        { nl: 'Op het verbod op laptops in de toetsweek', en: 'The ban on laptops during tests' },
        { nl: 'Op het werkstuk over de Romeinen', en: 'The project about the Romans' },
        { nl: 'Op de mening van de leraar', en: 'The teacher’s opinion' }
      ], answer: 0,
      explain: { nl: 'De zin ervoor gaat over herkenprogramma’s die zich vaak vergissen. Daar verwijst "daarvan" naar.',
                 en: 'The sentence before is about detection programs that are often wrong.' } },
    { id: 'q5', type: 'mc', skill: 'gevolgtrekking',
      q: { nl: 'Waarom veranderen sommige scholen de opdracht in plaats van het programma te verbieden?',
           en: 'Why do some schools change the assignment instead of banning the program?' },
      options: [
        { nl: 'Omdat leerlingen dan leren fouten van de computer te herkennen',
          en: 'Because pupils then learn to spot the computer’s mistakes' },
        { nl: 'Omdat werkstukken dan sneller nagekeken zijn', en: 'Because projects are then marked faster' },
        { nl: 'Omdat de computer beter schrijft dan de leraar', en: 'Because the computer writes better than the teacher' },
        { nl: 'Omdat papier te duur is geworden', en: 'Because paper has become too expensive' }
      ], answer: 0,
      explain: { nl: 'Alinea 5: laat de computer schrijven, zoek drie fouten en leg uit hoe je ze vond. Het gereedschap wordt het onderwerp.',
                 en: 'Paragraph 5: let the computer write, find three mistakes and explain how. The tool becomes the subject.' } },
    { id: 'q6', type: 'mc', skill: 'doel',
      q: { nl: 'Wat is het doel van de schrijver?', en: 'What is the writer’s purpose?' },
      options: [
        { nl: 'Uitleggen waarom de vraag lastig is en laten zien hoe scholen er verschillend mee omgaan',
          en: 'Explain why the question is hard and show how schools deal with it differently' },
        { nl: 'Leerlingen aanraden hun werkstuk door de computer te laten schrijven',
          en: 'Advise pupils to have the computer write their project' },
        { nl: 'Bewijzen dat taalprogramma’s altijd liegen', en: 'Prove that language programs always lie' },
        { nl: 'Reclame maken voor een nieuw programma', en: 'Advertise a new program' }
      ], answer: 0,
      explain: { nl: 'De schrijver legt eerst de werking uit, laat dan twee schoolaanpakken zien en eindigt met een open vraag over keuzes.',
                 en: 'The writer first explains how it works, then shows two school approaches and ends with an open question.' } },
    { id: 'q7', type: 'mc', skill: 'structuur',
      q: { nl: 'Waarom noemt de schrijver in de laatste alinea de rekenmachine?',
           en: 'Why does the writer mention the calculator in the last paragraph?' },
      options: [
        { nl: 'Als vergelijking: ook toen ging het van verbieden naar slim leren gebruiken',
          en: 'As a comparison: back then too it went from banning to learning to use it cleverly' },
        { nl: 'Om te laten zien dat rekenen moeilijker is dan schrijven',
          en: 'To show that maths is harder than writing' },
        { nl: 'Omdat rekenmachines ook hallucineren', en: 'Because calculators hallucinate too' },
        { nl: 'Om uit te leggen hoe een rekenmachine werkt', en: 'To explain how a calculator works' }
      ], answer: 0,
      explain: { nl: 'Een vergelijking met iets bekends helpt de lezer de nieuwe situatie te plaatsen. Dat is precies wat hier gebeurt.',
                 en: 'A comparison with something familiar helps the reader place the new situation.' } },
    { id: 'q8', type: 'mc', skill: 'samenvatten',
      q: { nl: 'Welke samenvatting past het beste?', en: 'Which summary fits best?' },
      options: [
        { nl: 'Taalprogramma’s raden woorden en verzinnen soms onzin; verbieden werkt slecht, dus veranderen scholen hun opdrachten, terwijl de vraag blijft wat kinderen zelf moeten kunnen.',
          en: 'Language programs guess words and sometimes invent nonsense; bans work badly, so schools change their assignments, while the question remains what children must be able to do themselves.' },
        { nl: 'De Romeinen zijn een populair onderwerp voor werkstukken.',
          en: 'The Romans are a popular subject for school projects.' },
        { nl: 'Rekenmachines waren vroeger verboden op school.',
          en: 'Calculators used to be banned at school.' },
        { nl: 'Leerlingen die niet vloeiend schrijven worden vaak gestraft.',
          en: 'Pupils who do not write fluently are often punished.' }
      ], answer: 0,
      explain: { nl: 'Die samenvatting pakt van elke alinea de kern; de andere antwoorden zijn losse details.',
                 en: 'That summary takes the core of each paragraph; the others are single details.' } },
    { id: 'q9', type: 'tf', skill: 'gevolgtrekking',
      q: { nl: 'Volgens de tekst maakt het voor je leren niets uit of je een werkstuk zelf schrijft.',
           en: 'According to the text it makes no difference to your learning whether you write a project yourself.' },
      answer: false,
      explain: { nl: 'Alinea 6 zegt het tegenovergestelde: door te schrijven ga je pas echt denken, en wie dat overslaat leert minder.',
                 en: 'Paragraph 6 says the opposite: it is by writing that you really think, and skipping it means learning less.' } }
  ]
}
]);

/* --- Niveau 1-5: vijf nieuwe verhalen (techniek-6 t/m techniek-10) --- */
addStories([
{
  id: 'techniek-6', topic: 'techniek', level: 1, emoji: '🚲', scene: 'default',
  title: { nl: 'De fiets zonder trappers', en: 'The bicycle without pedals' },
  text: {
    nl: [
      "Stel je voor: een fiets zonder trappers. Om vooruit te komen, moet je met je voeten over de grond lopen, net zoals bij een stepje. Zo zag de allereerste fiets er echt uit.",
      "In 1817 bedacht de Duitse uitvinder Karl Drais zo’n fiets. Hij noemde hem de loopfiets. Het ding had twee wielen, een zadel en een stuur, maar geen trappers en geen kettingen.",
      "Om te rijden, zette je je voeten af tegen de grond, net als bij hardlopen. Als je genoeg vaart had, tilde je je voeten op en gleed je verder. Zo hield je moeiteloos je evenwicht.",
      "De loopfiets werd al snel populair. Mensen konden er sneller mee dan lopen. Toch was hij ook vermoeiend: bergop moest je stevig doorduwen, want trappers had de fiets niet.",
      "Pas tientallen jaren later, rond 1860, kwamen er trappers aan het voorwiel. Eindelijk kon je fietsen zonder je voeten op de grond te zetten. Zo werd de loopfiets stap voor stap de fiets die we nu kennen."
    ],
    en: [
      "Imagine a bicycle without pedals. To move forward, you have to walk your feet along the ground, just like on a kick scooter. That is really what the very first bicycle looked like.",
      "In 1817 the German inventor Karl Drais came up with such a bicycle. He called it the loopfiets, or balance bike. The thing had two wheels, a saddle and handlebars, but no pedals and no chains.",
      "To ride it, you pushed off with your feet against the ground, just like running. Once you had enough speed, you lifted your feet up and glided onward. That way you kept your balance without any effort.",
      "The balance bike quickly became popular. People could get around faster with it than on foot. Still, it was also tiring: going uphill you had to push hard, because the bike had no pedals.",
      "Only decades later, around 1860, pedals were added to the front wheel. At last you could cycle without putting your feet on the ground. Step by step, the balance bike became the bicycle we know today."
    ]
  },
  words: [
    { nl: 'loopfiets', en: 'balance bike', defNl: 'de allereerste fiets, zonder trappers', defEn: 'the very first bicycle, without pedals' },
    { nl: 'uitvinder', en: 'inventor', defNl: 'iemand die iets nieuws bedenkt en maakt', defEn: 'someone who thinks up and makes something new' },
    { nl: 'evenwicht', en: 'balance', defNl: 'niet omvallen, mooi rechtop blijven', defEn: 'not falling over, staying nicely upright' }
  ],
  questions: [
    { id: 'q1', type: 'mc', skill: 'letterlijk',
      q: { nl: 'Wie bedacht de loopfiets?', en: 'Who came up with the balance bike?' },
      options: [
        { nl: 'Karl Drais', en: 'Karl Drais' },
        { nl: 'Henry Ford', en: 'Henry Ford' },
        { nl: 'James Watt', en: 'James Watt' },
        { nl: 'Alexander Bell', en: 'Alexander Bell' }
      ], answer: 0,
      explain: { nl: 'Alinea 2: "In 1817 bedacht de Duitse uitvinder Karl Drais zo’n fiets."',
                 en: 'Paragraph 2: "In 1817 the German inventor Karl Drais came up with such a bicycle."' } },
    { id: 'q2', type: 'mc', skill: 'letterlijk',
      q: { nl: 'Hoe kwam je vooruit op de loopfiets?', en: 'How did you move forward on the balance bike?' },
      options: [
        { nl: 'Je zette je voeten af tegen de grond', en: 'You pushed off with your feet against the ground' },
        { nl: 'Je trapte op de pedalen', en: 'You pedalled' },
        { nl: 'Een paard trok de fiets', en: 'A horse pulled the bike' },
        { nl: 'Er zat een motor in', en: 'It had a motor in it' }
      ], answer: 0,
      explain: { nl: 'Alinea 3: "Om te rijden, zette je je voeten af tegen de grond."',
                 en: 'Paragraph 3: "To ride it, you pushed off with your feet against the ground."' } },
    { id: 'q3', type: 'gap', skill: 'woordenschat',
      q: { nl: 'Een uitvinder is iemand die ___.', en: 'An inventor is someone who ___.' },
      options: [
        { nl: 'iets nieuws bedenkt en maakt', en: 'thinks up and makes something new' },
        { nl: 'fietsen repareert', en: 'repairs bicycles' },
        { nl: 'in een fabriek werkt', en: 'works in a factory' },
        { nl: 'boeken schrijft over machines', en: 'writes books about machines' }
      ], answer: 0,
      explain: { nl: 'Karl Drais bedacht zelf iets nieuws: de loopfiets. Dat maakt hem een uitvinder.',
                 en: 'Karl Drais thought up something new himself: the balance bike. That makes him an inventor.' } },
    { id: 'q4', type: 'order', skill: 'volgorde',
      q: { nl: 'Zet de geschiedenis van de fiets op volgorde.', en: 'Put the history of the bicycle in order.' },
      items: [
        { nl: 'Karl Drais bedenkt de loopfiets.', en: 'Karl Drais comes up with the balance bike.' },
        { nl: 'Mensen rijden erop door met hun voeten af te zetten.', en: 'People ride it by pushing off with their feet.' },
        { nl: 'De loopfiets wordt populair, maar bergop is vermoeiend.', en: 'The balance bike becomes popular, but uphill is tiring.' },
        { nl: 'Rond 1860 komen er trappers bij.', en: 'Around 1860 pedals are added.' }
      ], answer: [0, 1, 2, 3],
      explain: { nl: 'De tekst loopt netjes van de uitvinding naar de trappers die er later bij kwamen.',
                 en: 'The text runs neatly from the invention to the pedals that were added later.' } },
    { id: 'q5', type: 'mc', skill: 'hoofdgedachte',
      q: { nl: 'Wat is de hoofdgedachte van deze tekst?', en: 'What is the main idea of this text?' },
      options: [
        { nl: 'De eerste fiets had geen trappers; die kwamen er pas veel later bij',
          en: 'The first bicycle had no pedals; those were only added much later' },
        { nl: 'Karl Drais reed graag paard', en: 'Karl Drais liked to ride horses' },
        { nl: 'Fietsen zijn altijd al heel snel geweest', en: 'Bicycles have always been very fast' },
        { nl: 'Trappers zijn moeilijk te maken', en: 'Pedals are hard to make' }
      ], answer: 0,
      explain: { nl: 'De hele tekst gaat over de loopfiets zonder trappers en hoe die er later bij kwamen.',
                 en: 'The whole text is about the balance bike without pedals and how they were added later.' } }
  ]
},

{
  id: 'techniek-7', topic: 'techniek', level: 2, emoji: '🍫', scene: 'lab',
  title: { nl: 'De chocolade die per ongeluk smolt', en: 'The chocolate that melted by accident' },
  text: {
    nl: [
      "In 1945 werkte de Amerikaanse ingenieur Percy Spencer aan radarapparatuur voor het leger. Hij stond vlak bij een magnetron, een buis die onzichtbare golven uitzendt. Ineens voelde hij iets kleverigs in zijn broekzak: de chocoladereep die hij bij zich had, was helemaal gesmolten.",
      "De meeste mensen zouden gewoon een nieuwe reep kopen en verdergaan. Percy niet. Hij was nieuwsgierig en wilde weten waarom. Hij legde popcornkorrels bij de magnetron. Binnen een paar seconden knalden ze uit elkaar. Toen probeerde hij een ei. Dat ontplofte zo hard dat het tegen het gezicht van een collega spatte.",
      "Percy snapte nu wat er gebeurde: de golven van de magnetron konden voedsel razendsnel verwarmen, zonder vuur en zonder gaspit. Hij bouwde een metalen kast om de magnetron heen, zodat de golven niet konden ontsnappen. Zo ontstond de allereerste magnetronoven.",
      "Maar hoe verwarmt zo’n oven eigenlijk je eten? In elk stuk voedsel zit water. De golven van de magnetron laten de watermoleculen supersnel heen en weer schudden, miljoenen keren per seconde. Door al dat schudden ontstaat wrijving, en wrijving maakt warmte. Zo wordt je eten van binnenuit warm, in plaats van van buitenaf zoals bij een pan op het vuur.",
      "De eerste magnetronovens waren enorm, duur en zo groot als een koelkast. Alleen restaurants en het leger konden ze betalen. Pas in 1967 kwam er een model dat in een gewone keuken paste. Sindsdien staat er in bijna elk huis wel eentje: allemaal dankzij een chocoladereep die op het verkeerde moment smolt."
    ],
    en: [
      "In 1945 the American engineer Percy Spencer was working on radar equipment for the army. He was standing right next to a magnetron, a tube that sends out invisible waves. Suddenly he felt something sticky in his trouser pocket: the chocolate bar he had with him had completely melted.",
      "Most people would just buy a new bar and move on. Not Percy. He was curious and wanted to know why. He put popcorn kernels next to the magnetron. Within a few seconds they popped. Then he tried an egg. It exploded so hard that it splattered onto a colleague’s face.",
      "Percy now understood what was happening: the waves from the magnetron could heat food incredibly fast, without fire and without a gas flame. He built a metal box around the magnetron so the waves could not escape. That is how the very first microwave oven was created.",
      "But how does such an oven actually heat your food? There is water in every piece of food. The waves from the magnetron make the water molecules shake back and forth super fast, millions of times a second. All that shaking creates friction, and friction makes heat. That way your food gets warm from the inside out, instead of from the outside like with a pan on the stove.",
      "The first microwave ovens were enormous, expensive and as big as a refrigerator. Only restaurants and the army could afford them. Only in 1967 did a model arrive that fit in an ordinary kitchen. Since then almost every house has one: all thanks to a chocolate bar that melted at just the right moment."
    ]
  },
  words: [
    { nl: 'golven', en: 'waves', defNl: 'onzichtbare trillingen die energie meenemen', defEn: 'invisible vibrations that carry energy' },
    { nl: 'wrijving', en: 'friction', defNl: 'de kracht die ontstaat als dingen tegen elkaar bewegen en die warmte maakt', defEn: 'the force created when things move against each other, which makes heat' },
    { nl: 'watermolecuul', en: 'water molecule', defNl: 'een piepklein deeltje waaruit water bestaat', defEn: 'a tiny particle that water is made of' }
  ],
  questions: [
    { id: 'q1', type: 'mc', skill: 'letterlijk',
      q: { nl: 'Wat merkte Percy Spencer in zijn broekzak?', en: 'What did Percy Spencer notice in his trouser pocket?' },
      options: [
        { nl: 'Zijn chocoladereep was gesmolten', en: 'His chocolate bar had melted' },
        { nl: 'Zijn sleutels waren verdwenen', en: 'His keys had disappeared' },
        { nl: 'Zijn zakdoek was nat', en: 'His handkerchief was wet' },
        { nl: 'Zijn telefoon was heet', en: 'His phone was hot' }
      ], answer: 0,
      explain: { nl: 'Alinea 1: "de chocoladereep die hij bij zich had, was helemaal gesmolten."',
                 en: 'Paragraph 1: "the chocolate bar he had with him had completely melted."' } },
    { id: 'q2', type: 'mc', skill: 'letterlijk',
      q: { nl: 'Wat gebeurde er met het ei dat Percy bij de magnetron legde?', en: 'What happened to the egg Percy put next to the magnetron?' },
      options: [
        { nl: 'Het ontplofte', en: 'It exploded' },
        { nl: 'Het werd hard gekookt', en: 'It became hard-boiled' },
        { nl: 'Het bleef precies hetzelfde', en: 'It stayed exactly the same' },
        { nl: 'Het rolde weg', en: 'It rolled away' }
      ], answer: 0,
      explain: { nl: 'Alinea 2: het ei "ontplofte zo hard dat het tegen het gezicht van een collega spatte".',
                 en: 'Paragraph 2: the egg "exploded so hard that it splattered onto a colleague’s face".' } },
    { id: 'q3', type: 'mc', skill: 'gevolgtrekking',
      q: { nl: 'Waarom bouwde Percy een metalen kast om de magnetron heen?', en: 'Why did Percy build a metal box around the magnetron?' },
      options: [
        { nl: 'Zodat de golven niet konden ontsnappen', en: 'So that the waves could not escape' },
        { nl: 'Om de magnetron mooier te laten lijken', en: 'To make the magnetron look nicer' },
        { nl: 'Om hem lichter te maken', en: 'To make it lighter' },
        { nl: 'Om hem stiller te maken', en: 'To make it quieter' }
      ], answer: 0,
      explain: { nl: 'Alinea 3 zegt het letterlijk: "zodat de golven niet konden ontsnappen".',
                 en: 'Paragraph 3 says it literally: "so that the waves could not escape".' } },
    { id: 'q4', type: 'gap', skill: 'woordenschat',
      q: { nl: 'Wrijving betekent ___.', en: 'Friction means ___.' },
      options: [
        { nl: 'de kracht die ontstaat als dingen tegen elkaar bewegen', en: 'the force created when things move against each other' },
        { nl: 'een golf die door de lucht gaat', en: 'a wave that travels through the air' },
        { nl: 'een klein deeltje water', en: 'a small particle of water' },
        { nl: 'een knop op de magnetron', en: 'a button on the magnetron' }
      ], answer: 0,
      explain: { nl: 'Alinea 4: "door al dat schudden ontstaat wrijving, en wrijving maakt warmte".',
                 en: 'Paragraph 4: "all that shaking creates friction, and friction makes heat".' } },
    { id: 'q5', type: 'mc', skill: 'hoofdgedachte',
      q: { nl: 'Wat is de hoofdgedachte van deze tekst?', en: 'What is the main idea of this text?' },
      options: [
        { nl: 'Een toevallige ontdekking met een gesmolten chocoladereep leidde tot de magnetronoven',
          en: 'An accidental discovery with a melted chocolate bar led to the microwave oven' },
        { nl: 'Percy Spencer was een slechte ingenieur', en: 'Percy Spencer was a bad engineer' },
        { nl: 'Eieren mag je nooit opeten', en: 'You should never eat eggs' },
        { nl: 'Radar en chocolade hebben niets met elkaar te maken', en: 'Radar and chocolate have nothing to do with each other' }
      ], answer: 0,
      explain: { nl: 'De hele tekst volgt die lijn: gesmolten chocolade, onderzoek, en dan de uitvinding.',
                 en: 'The whole text follows that line: melted chocolate, investigation, and then the invention.' } },
    { id: 'q6', type: 'match', skill: 'woordenschat',
      q: { nl: 'Sleep elk woord naar de juiste uitleg.', en: 'Drag each word to its correct explanation.' },
      pairs: [
        { word: { nl: 'golven', en: 'waves' },
          meaning: { nl: 'onzichtbare trillingen die energie meenemen', en: 'invisible vibrations that carry energy' } },
        { word: { nl: 'wrijving', en: 'friction' },
          meaning: { nl: 'de kracht die ontstaat als dingen tegen elkaar bewegen en die warmte maakt',
                     en: 'the force created when things move against each other, which makes heat' } },
        { word: { nl: 'watermolecuul', en: 'water molecule' },
          meaning: { nl: 'een piepklein deeltje waaruit water bestaat', en: 'a tiny particle that water is made of' } }
      ],
      explain: { nl: 'Alle drie de woorden staan uitgelegd in alinea 4, waar de tekst vertelt hoe een magnetron eten opwarmt.',
                 en: 'All three words are explained in paragraph 4, where the text tells how a microwave heats food.' } }
  ]
},

{
  id: 'techniek-8', topic: 'techniek', level: 3, emoji: '🖨️', scene: 'default',
  title: { nl: 'Een huis printen in een dag', en: 'Printing a house in a day' },
  text: {
    nl: [
      "Op een bouwterrein in Eindhoven staat een reusachtige printer. Hij drukt geen papier af, maar een huis. In iets meer dan een dag spuit hij de muren van een compleet huis op elkaar, laag voor laag.",
      "De printer werkt met een grote arm die over rails beweegt. Uit het mondstuk komt betonpasta, een dikke grijze smurrie die lijkt op glazuur op een taart. Elke laag moet stevig genoeg zijn om de volgende laag te dragen, maar ook nat genoeg om er goed mee te verbinden. Daarom moet de pasta precies de juiste dikte hebben.",
      "Sinds 2021 wonen er al echte mensen in zulke geprinte huizen, in het project Milestone bij Eindhoven. Wat meteen opvalt, zijn de ronde muren. Een metselaar heeft veel tijd nodig om een gebogen muur van losse stenen te maken. Voor de printer maakt het niets uit: hij volgt gewoon de vorm die in de computer staat, recht of rond.",
      "Waarom is dit interessant? Op veel plekken in de wereld is een groot woningtekort: er zijn simpelweg te weinig huizen voor alle mensen die er een nodig hebben. Printen gaat sneller dan traditioneel bouwen, en er zijn minder handen nodig om elke steen apart te leggen. Bovendien gebruikt de printer precies zoveel beton als nodig is, zodat er minder afval overblijft.",
      "Toch is een huis niet klaar na die ene dag. De printer maakt alleen de muren. Het dak, de ramen, de deuren en alle leidingen voor water en stroom moeten daarna nog met de hand worden aangebracht. Ook moet het recept van de betonpasta exact kloppen: is die te dun, dan zakken de lagen in elkaar voordat ze droog zijn.",
      "Bouwregels zijn in veel landen ook nog niet aangepast aan deze nieuwe manier van bouwen. Toch bouwen steeds meer steden proefwoningen. Misschien is een geprint huis over tien jaar heel gewoon."
    ],
    en: [
      "On a building site in Eindhoven stands a huge printer. It does not print paper, but a house. In just over a day it squirts the walls of a whole house on top of each other, layer by layer.",
      "The printer works with a large arm that moves along rails. Concrete paste comes out of the nozzle, a thick grey goo that looks like icing on a cake. Every layer has to be sturdy enough to carry the next layer, but also wet enough to bond well with it. That is why the paste has to be exactly the right thickness.",
      "Since 2021 real people have already been living in such printed houses, in the Milestone project near Eindhoven. What stands out immediately are the curved walls. A bricklayer needs a lot of time to build a curved wall out of loose bricks. For the printer it makes no difference: it simply follows the shape stored in the computer, straight or round.",
      "Why is this interesting? In many places in the world there is a big housing shortage: there are simply too few houses for all the people who need one. Printing is faster than traditional building, and fewer hands are needed to lay every brick separately. On top of that, the printer uses exactly as much concrete as needed, so less waste is left over.",
      "Still, a house is not finished after that one day. The printer only makes the walls. The roof, the windows, the doors and all the pipes for water and electricity still have to be added by hand afterwards. The recipe for the concrete paste also has to be exactly right: if it is too thin, the layers sink into each other before they dry.",
      "Building rules in many countries also have not yet been adapted to this new way of building. Even so, more and more cities are building test homes. Maybe a printed house will be completely normal in ten years."
    ]
  },
  words: [
    { nl: 'betonpasta', en: 'concrete paste', defNl: 'een dikke, vloeibare vorm van beton die uit een mondstuk geperst kan worden', defEn: 'a thick, liquid form of concrete that can be pushed out of a nozzle' },
    { nl: 'mondstuk', en: 'nozzle', defNl: 'het puntje waar de pasta uitkomt', defEn: 'the tip where the paste comes out' },
    { nl: 'woningtekort', en: 'housing shortage', defNl: 'er zijn te weinig huizen voor het aantal mensen dat een huis nodig heeft', defEn: 'there are too few houses for the number of people who need one' }
  ],
  questions: [
    { id: 'q1', type: 'mc', skill: 'letterlijk',
      q: { nl: 'Wat komt er uit het mondstuk van de printer?', en: 'What comes out of the printer’s nozzle?' },
      options: [
        { nl: 'Betonpasta', en: 'Concrete paste' },
        { nl: 'Water', en: 'Water' },
        { nl: 'Verf', en: 'Paint' },
        { nl: 'Zand', en: 'Sand' }
      ], answer: 0,
      explain: { nl: 'Alinea 2: "Uit het mondstuk komt betonpasta, een dikke grijze smurrie."',
                 en: 'Paragraph 2: "Concrete paste comes out of the nozzle, a thick grey goo."' } },
    { id: 'q2', type: 'mc', skill: 'letterlijk',
      q: { nl: 'Sinds welk jaar wonen er mensen in geprinte huizen bij Eindhoven?', en: 'Since which year have people been living in printed houses near Eindhoven?' },
      options: [
        { nl: '2021', en: '2021' },
        { nl: '2010', en: '2010' },
        { nl: '2030', en: '2030' },
        { nl: '1999', en: '1999' }
      ], answer: 0,
      explain: { nl: 'Alinea 3: "Sinds 2021 wonen er al echte mensen in zulke geprinte huizen."',
                 en: 'Paragraph 3: "Since 2021 real people have already been living in such printed houses."' } },
    { id: 'q3', type: 'mc', skill: 'gevolgtrekking',
      q: { nl: 'Waarom kan de printer makkelijker een ronde muur maken dan een metselaar?', en: 'Why can the printer make a curved wall more easily than a bricklayer?' },
      options: [
        { nl: 'Hij volgt gewoon de vorm uit de computer, steen voor steen is niet nodig',
          en: 'It simply follows the shape from the computer, brick by brick is not needed' },
        { nl: 'Ronde muren zijn dunner dan rechte muren', en: 'Curved walls are thinner than straight walls' },
        { nl: 'De printer werkt niet met beton', en: 'The printer does not work with concrete' },
        { nl: 'Metselaars mogen van de wet geen ronde muren maken', en: 'The law does not allow bricklayers to build curved walls' }
      ], answer: 0,
      explain: { nl: 'Alinea 3: "hij volgt gewoon de vorm die in de computer staat, recht of rond".',
                 en: 'Paragraph 3: "it simply follows the shape stored in the computer, straight or round".' } },
    { id: 'q4', type: 'mc', skill: 'verwijswoorden',
      q: { nl: '"Is die te dun, dan zakken de lagen in elkaar." Waar verwijst "die" naar?',
           en: '"If it is too thin, the layers sink into each other." What does "it" refer to?' },
      options: [
        { nl: 'Naar de betonpasta', en: 'To the concrete paste' },
        { nl: 'Naar de printer', en: 'To the printer' },
        { nl: 'Naar het dak', en: 'To the roof' },
        { nl: 'Naar de bouwregels', en: 'To the building rules' }
      ], answer: 0,
      explain: { nl: 'De zin ervoor gaat over het recept van de betonpasta dat exact moet kloppen.',
                 en: 'The sentence before is about the concrete paste recipe that has to be exactly right.' } },
    { id: 'q5', type: 'mc', skill: 'structuur',
      q: { nl: 'Het woord "Toch" aan het begin van alinea 5 laat zien dat er...', en: 'The word "Still" at the start of paragraph 5 shows that...' },
      options: [
        { nl: 'na de voordelen nu een nadeel of moeilijkheid volgt', en: 'after the advantages, a disadvantage or difficulty now follows' },
        { nl: 'de tekst hier ophoudt', en: 'the text stops here' },
        { nl: 'er een nieuw onderwerp begint dat niets met huizen te maken heeft', en: 'a new topic begins that has nothing to do with houses' },
        { nl: 'de schrijver een grapje maakt', en: 'the writer is making a joke' }
      ], answer: 0,
      explain: { nl: 'Alinea 4 noemt de voordelen, alinea 5 begint met "Toch" en noemt daarna de nadelen.',
                 en: 'Paragraph 4 names the advantages, paragraph 5 starts with "Still" and then names the drawbacks.' } },
    { id: 'q6', type: 'mc', skill: 'hoofdgedachte',
      q: { nl: 'Wat is de hoofdgedachte van deze tekst?', en: 'What is the main idea of this text?' },
      options: [
        { nl: 'Een 3D-printer kan snel muren bouwen en zo helpen tegen woningtekort, maar het dak, de leidingen en de regels zijn nog niet klaar',
          en: 'A 3D printer can build walls fast and so help against the housing shortage, but the roof, the pipes and the rules are not ready yet' },
        { nl: 'Metselaars zijn helemaal niet meer nodig', en: 'Bricklayers are not needed at all anymore' },
        { nl: 'Beton is het enige bouwmateriaal dat werkt', en: 'Concrete is the only building material that works' },
        { nl: 'Printers kunnen alleen ronde muren maken', en: 'Printers can only make curved walls' }
      ], answer: 0,
      explain: { nl: 'De tekst legt werking en voordelen uit, maar noemt ook duidelijk wat er nog moeilijk is.',
                 en: 'The text explains how it works and its advantages, but also clearly names what is still difficult.' } },
    { id: 'q7', type: 'gap', skill: 'woordenschat',
      q: { nl: 'Een woningtekort betekent ___.', en: 'A housing shortage means ___.' },
      options: [
        { nl: 'er zijn te weinig huizen voor het aantal mensen dat er een nodig heeft', en: 'there are too few houses for the number of people who need one' },
        { nl: 'er zijn te veel huizen', en: 'there are too many houses' },
        { nl: 'huizen zijn te duur geworden', en: 'houses have become too expensive' },
        { nl: 'er is te weinig beton', en: 'there is too little concrete' }
      ], answer: 0,
      explain: { nl: 'Alinea 4 legt het uit: "er zijn simpelweg te weinig huizen voor alle mensen die er een nodig hebben".',
                 en: 'Paragraph 4 explains it: "there are simply too few houses for all the people who need one".' } }
  ]
},

{
  id: 'techniek-9', topic: 'techniek', level: 4, emoji: '🚗', scene: 'default',
  title: { nl: 'Hoe "ziet" een zelfrijdende auto de weg?', en: 'How does a self-driving car "see" the road?' },
  text: {
    nl: [
      "Een zelfrijdende auto heeft geen ogen, en toch moet hij precies weten wat er om hem heen gebeurt: waar de weg loopt, of er een fietser oversteekt, of het stoplicht rood is. Dat lukt dankzij een combinatie van sensoren die samen razendsnel een beeld van de omgeving opbouwen, tientallen keren per seconde.",
      "Ten eerste zijn er camera’s. Die werken een beetje zoals onze ogen: ze zien kleuren en kunnen verkeersborden, stoplichten en belijning op de weg herkennen. Het probleem is dat een camera het moeilijk heeft bij mist, in het donker, of als de zon recht in de lens schijnt.",
      "Daarnaast gebruikt de auto radar. Radar stuurt radiogolven de lucht in, die terugkaatsen zodra ze een ander voertuig raken. Zo meet de auto heel precies hoe ver iets weg is en hoe snel het beweegt. Radar werkt prima in regen, mist en duisternis, maar ziet geen kleuren en kan geen bord lezen.",
      "Ten derde is er lidar, een soort laserradar. Een lidar-sensor stuurt miljoenen laserflitsjes per seconde alle kanten op en meet hoelang elke flits erover doet om terug te kaatsen. Zo ontstaat een driedimensionale puntenwolk van alles om de auto heen, tot op de centimeter nauwkeurig: stoepranden, voetgangers, bomen. Een lidar-sensor is wel duur, en werkt minder goed bij dichte sneeuw of mist.",
      "De boordcomputer voegt de gegevens van camera’s, radar en lidar tientallen keren per seconde samen tot één beeld. Hij beslist wat een auto is, wat een voetganger is en wat gewoon een plastic zakje is dat wegwaait. Maakt één sensor een fout, dan corrigeren de andere twee dat vaak.",
      "Toch blijven onverwachte situaties lastig. Sneeuw die de belijning bedekt, een bal die de straat op rolt gevolgd door een rennend kind, een agent die met handgebaren het verkeer regelt: de computer is getraind op miljoenen voorbeelden, maar de werkelijkheid blijft eindeloos verrassend. Daarom zit er bij veel testritten nog altijd een mens achter het stuur, klaar om meteen over te nemen."
    ],
    en: [
      "A self-driving car has no eyes, and yet it has to know exactly what is happening around it: where the road runs, whether a cyclist is crossing, whether the traffic light is red. It manages this thanks to a combination of sensors that build up a picture of its surroundings together, at lightning speed, dozens of times per second.",
      "First there are cameras. They work a bit like our eyes: they see colours and can recognise traffic signs, traffic lights and lane markings on the road. The problem is that a camera struggles in fog, in the dark, or when the sun shines straight into the lens.",
      "The car also uses radar. Radar sends radio waves into the air, which bounce back as soon as they hit another vehicle. That way the car measures very precisely how far away something is and how fast it is moving. Radar works fine in rain, fog and darkness, but it cannot see colours and cannot read a sign.",
      "Third, there is lidar, a kind of laser radar. A lidar sensor sends millions of laser pulses per second in every direction and measures how long each pulse takes to bounce back. That creates a three-dimensional point cloud of everything around the car, accurate to the centimetre: kerbs, pedestrians, trees. A lidar sensor is expensive, though, and works less well in heavy snow or fog.",
      "The onboard computer combines the data from cameras, radar and lidar dozens of times per second into one picture. It decides what is a car, what is a pedestrian, and what is just a plastic bag blowing away. If one sensor makes a mistake, the other two often correct it.",
      "Still, unexpected situations remain difficult. Snow covering the lane markings, a ball rolling into the street followed by a running child, an officer directing traffic with hand signals: the computer is trained on millions of examples, but reality keeps being endlessly surprising. That is why a human still sits behind the wheel during many test drives, ready to take over immediately."
    ]
  },
  words: [
    { nl: 'sensor', en: 'sensor', defNl: 'een apparaatje dat iets in de omgeving meet', defEn: 'a small device that measures something in the surroundings' },
    { nl: 'puntenwolk', en: 'point cloud', defNl: 'duizenden meetpunten die samen een 3D-vorm laten zien', defEn: 'thousands of measured points that together show a 3D shape' },
    { nl: 'boordcomputer', en: 'onboard computer', defNl: 'de computer in de auto die alle informatie verzamelt en beslissingen neemt', defEn: 'the computer in the car that gathers all the information and makes decisions' }
  ],
  questions: [
    { id: 'q1', type: 'mc', skill: 'letterlijk',
      q: { nl: 'Waar kan een camera moeite mee hebben?', en: 'What can a camera struggle with?' },
      options: [
        { nl: 'Met mist, duisternis of fel tegenlicht', en: 'With fog, darkness or bright glare' },
        { nl: 'Met het lezen van radiogolven', en: 'With reading radio waves' },
        { nl: 'Met het meten van snelheid', en: 'With measuring speed' },
        { nl: 'Met driedimensionale puntenwolken', en: 'With three-dimensional point clouds' }
      ], answer: 0,
      explain: { nl: 'Alinea 2: "een camera het moeilijk heeft bij mist, in het donker, of als de zon recht in de lens schijnt".',
                 en: 'Paragraph 2: "a camera struggles in fog, in the dark, or when the sun shines straight into the lens".' } },
    { id: 'q2', type: 'multi', skill: 'letterlijk',
      q: { nl: 'Welke twee dingen kan radar goed meten? Kies er 2.', en: 'Which two things can radar measure well? Pick 2.' },
      options: [
        { nl: 'Hoe ver iets weg is', en: 'How far away something is' },
        { nl: 'Hoe snel iets beweegt', en: 'How fast something is moving' },
        { nl: 'Welke kleur een auto heeft', en: 'What colour a car is' },
        { nl: 'Wat er op een verkeersbord staat', en: 'What is written on a traffic sign' }
      ], answer: [0, 1],
      explain: { nl: 'Alinea 3: radar meet "heel precies hoe ver iets weg is en hoe snel het beweegt", maar ziet geen kleuren of tekst.',
                 en: 'Paragraph 3: radar measures "very precisely how far away something is and how fast it is moving", but cannot see colours or text.' } },
    { id: 'q3', type: 'mc', skill: 'verwijswoorden',
      q: { nl: '"Maakt één sensor een fout, dan corrigeren de andere twee dat vaak." Waar verwijst "dat" naar?',
           en: '"If one sensor makes a mistake, the other two often correct it." What does "it" refer to?' },
      options: [
        { nl: 'Naar de fout van die ene sensor', en: 'To the mistake made by that one sensor' },
        { nl: 'Naar de kleur van de auto', en: 'To the colour of the car' },
        { nl: 'Naar het weer', en: 'To the weather' },
        { nl: 'Naar de laserflitsjes', en: 'To the laser pulses' }
      ], answer: 0,
      explain: { nl: 'De zin begint met "maakt één sensor een fout"; "dat" pakt precies die fout weer op.',
                 en: 'The sentence starts with "if one sensor makes a mistake"; "it" picks up exactly that mistake.' } },
    { id: 'q4', type: 'mc', skill: 'gevolgtrekking',
      q: { nl: 'Waarom gebruikt een zelfrijdende auto drie soorten sensoren in plaats van één?',
           en: 'Why does a self-driving car use three kinds of sensors instead of one?' },
      options: [
        { nl: 'Omdat elke sensor andere sterke en zwakke punten heeft, en ze elkaar zo aanvullen',
          en: 'Because each sensor has different strengths and weaknesses, so they complement each other' },
        { nl: 'Omdat drie sensoren goedkoper zijn dan één', en: 'Because three sensors are cheaper than one' },
        { nl: 'Omdat de wet drie sensoren verplicht stelt', en: 'Because the law requires three sensors' },
        { nl: 'Omdat een camera niet in een auto past', en: 'Because a camera does not fit in a car' }
      ], answer: 0,
      explain: { nl: 'Elke sensor heeft een zwak punt (camera bij mist, radar zonder kleur, lidar bij sneeuw); samen vullen ze elkaar aan.',
                 en: 'Each sensor has a weak point (camera in fog, radar without colour, lidar in snow); together they complement each other.' } },
    { id: 'q5', type: 'gap', skill: 'woordenschat',
      q: { nl: 'Een puntenwolk is ___.', en: 'A point cloud is ___.' },
      options: [
        { nl: 'duizenden meetpunten die samen een 3D-vorm laten zien', en: 'thousands of measured points that together show a 3D shape' },
        { nl: 'een wolk aan de hemel', en: 'a cloud in the sky' },
        { nl: 'een soort regen', en: 'a kind of rain' },
        { nl: 'een nieuwe verkeersregel', en: 'a new traffic rule' }
      ], answer: 0,
      explain: { nl: 'Alinea 4: de lidar maakt "een driedimensionale puntenwolk van alles om de auto heen".',
                 en: 'Paragraph 4: the lidar creates "a three-dimensional point cloud of everything around the car".' } },
    { id: 'q6', type: 'order', skill: 'volgorde',
      q: { nl: 'Zet de sensoren op volgorde zoals de tekst ze bespreekt.', en: 'Put the sensors in the order the text discusses them.' },
      items: [
        { nl: 'Camera’s herkennen borden en stoplichten.', en: 'Cameras recognise signs and traffic lights.' },
        { nl: 'Radar meet afstand en snelheid met radiogolven.', en: 'Radar measures distance and speed with radio waves.' },
        { nl: 'Lidar maakt een driedimensionale puntenwolk met laserflitsjes.', en: 'Lidar creates a three-dimensional point cloud with laser pulses.' },
        { nl: 'De boordcomputer voegt alle gegevens samen tot één beeld.', en: 'The onboard computer combines all the data into one picture.' }
      ], answer: [0, 1, 2, 3],
      explain: { nl: 'De tekst behandelt eerst camera, dan radar, dan lidar, en pas daarna hoe de boordcomputer alles combineert.',
                 en: 'The text first covers cameras, then radar, then lidar, and only after that how the onboard computer combines everything.' } },
    { id: 'q7', type: 'mc', skill: 'structuur',
      q: { nl: 'De tekst gebruikt de woorden "Ten eerste", "Daarnaast" en "Ten derde". Waarvoor dienen die woorden?',
           en: 'The text uses the words "First", "Also" and "Third". What are those words for?' },
      options: [
        { nl: 'Ze laten zien dat er een opsomming van verschillende sensoren volgt',
          en: 'They show that a list of different sensors follows' },
        { nl: 'Ze geven aan dat de tekst bijna afgelopen is', en: 'They indicate that the text is almost over' },
        { nl: 'Ze vergelijken twee meningen met elkaar', en: 'They compare two opinions with each other' },
        { nl: 'Ze geven een waarschuwing voor gevaar', en: 'They give a warning about danger' }
      ], answer: 0,
      explain: { nl: 'De woorden kondigen elk een nieuwe sensor aan: eerst camera, dan radar, dan lidar.',
                 en: 'Each word announces a new sensor: first cameras, then radar, then lidar.' } },
    { id: 'q8', type: 'mc', skill: 'hoofdgedachte',
      q: { nl: 'Wat is de hoofdgedachte van deze tekst?', en: 'What is the main idea of this text?' },
      options: [
        { nl: 'Een zelfrijdende auto combineert camera’s, radar en lidar om de omgeving te herkennen, maar onverwachte situaties blijven lastig',
          en: 'A self-driving car combines cameras, radar and lidar to recognise its surroundings, but unexpected situations remain difficult' },
        { nl: 'Camera’s zijn de enige sensor die een zelfrijdende auto nodig heeft', en: 'Cameras are the only sensor a self-driving car needs' },
        { nl: 'Lidar is in alle gevallen beter dan radar', en: 'Lidar is better than radar in every case' },
        { nl: 'Zelfrijdende auto’s rijden nooit fout', en: 'Self-driving cars never make mistakes' }
      ], answer: 0,
      explain: { nl: 'De tekst legt eerst de sensoren en hun samenwerking uit, en eindigt met de grens: onverwachte situaties.',
                 en: 'The text first explains the sensors and how they work together, and ends with the limit: unexpected situations.' } }
  ]
},

{
  id: 'techniek-10', topic: 'techniek', level: 5, emoji: '⚖️', scene: 'lab',
  title: { nl: 'Mag een computer beslissen wie er het eerst geholpen wordt?', en: 'Should a computer decide who gets helped first?' },
  text: {
    nl: [
      "Stel je voor: de spoedeisende hulp van een ziekenhuis zit stampvol. Tien mensen tegelijk hebben hulp nodig, maar er is maar één arts. Wie wordt eerst geholpen? Steeds vaker helpt een computerprogramma die keuze maken. En dat roept een lastige vraag op: mag een computer beslissen over iets dat zo belangrijk is?",
      "Zo’n programma kijkt naar symptomen, bloeddruk, hartslag en medische voorgeschiedenis, en vergelijkt dat met enorme hoeveelheden gegevens van eerdere patiënten. Binnen een paar seconden komt er een advies: wie waarschijnlijk het snelst hulp nodig heeft. Een uitgeputte arts die al twaalf uur dienst heeft, doet er veel langer over.",
      "Voorstanders wijzen daarop: een computer wordt niet moe, heeft geen slechte dag en behandelt elke patiënt volgens dezelfde regels. Dat zou eerlijker kunnen zijn dan een arts die, zonder het te willen, de ene patiënt toch anders bekijkt dan de andere. Bovendien kan snelheid levens redden.",
      "Tegenstanders zien juist een groot risico. Zo’n programma heeft geleerd van duizenden eerdere beslissingen, gemaakt door mensen. Als die beslissingen in het verleden oneerlijk waren voor een bepaalde groep patiënten, dan leert de computer die oneerlijkheid gewoon mee, verstopt diep in de code, waar niemand het meteen ziet. En als het misgaat, wie is er dan verantwoordelijk? De dokter die het advies volgde? De programmeur? Het ziekenhuis? Niemand heeft daar een duidelijk antwoord op.",
      "Er is nog iets waar een computer niet bij kan: angst van een patiënt, de situatie thuis, dingen die niet in cijfers te vangen zijn. Sommige beslissingen vragen om een mens die goed kan luisteren, niet alleen om rekenwerk.",
      "In de praktijk gebruiken de meeste ziekenhuizen het programma daarom als adviseur, niet als baas. De computer geeft een advies, maar de uiteindelijke keuze blijft bij een arts. Bij zelfrijdende auto’s speelt eenzelfde discussie: mag de boordcomputer in een fractie van een seconde zelf een noodbeslissing nemen, of moet er altijd een mens kunnen ingrijpen?",
      "Deze discussie gaat voorlopig niet weg. Computers worden steeds slimmer, en steeds vaker krijgen ze belangrijke beslissingen in handen. En wat vind jij: mag een computer meebeslissen over zoiets belangrijks, of moet dat altijd een mens blijven?"
    ],
    en: [
      "Imagine: a hospital’s emergency room is packed. Ten people need help at the same time, but there is only one doctor. Who gets helped first? Increasingly, a computer program helps make that choice. And that raises a difficult question: should a computer be allowed to decide something this important?",
      "Such a program looks at symptoms, blood pressure, heart rate and medical history, and compares that with huge amounts of data from earlier patients. Within a few seconds it gives advice: who probably needs help the fastest. An exhausted doctor who has already been on shift for twelve hours takes much longer to do the same thing.",
      "Supporters point that out: a computer does not get tired, does not have a bad day, and treats every patient by the same rules. That could be fairer than a doctor who, without meaning to, looks at one patient differently than another. On top of that, speed can save lives.",
      "Opponents see a big risk instead. Such a program has learned from thousands of earlier decisions, made by people. If those past decisions were unfair to a certain group of patients, the computer simply learns that unfairness too, hidden deep in the code, where nobody notices it right away. And if it goes wrong, who is responsible then? The doctor who followed the advice? The programmer? The hospital? Nobody has a clear answer to that.",
      "There is something else a computer cannot reach: a patient’s fear, the situation at home, things that cannot be captured in numbers. Some decisions need a person who can listen well, not just calculations.",
      "In practice, most hospitals therefore use the program as an advisor, not as a boss. The computer gives advice, but the final choice stays with a doctor. The same discussion plays out with self-driving cars: should the onboard computer be allowed to make an emergency decision itself in a fraction of a second, or must a human always be able to step in?",
      "This discussion is not going away any time soon. Computers keep getting smarter, and more and more often they are handed important decisions. So what do you think: should a computer be allowed to help decide something this important, or should that always stay a human’s job?"
    ]
  },
  words: [
    { nl: 'voorgeschiedenis', en: 'medical history', defNl: 'wat er vroeger met iemand gebeurd is, bijvoorbeeld bij een ziekte', defEn: 'what happened to someone in the past, for example with an illness' },
    { nl: 'verantwoordelijk', en: 'responsible', defNl: 'diegene die iets moet uitleggen als het misgaat', defEn: 'the one who has to explain if something goes wrong' },
    { nl: 'adviseur', en: 'advisor', defNl: 'iemand of iets dat een tip geeft, maar niet de baas is', defEn: 'someone or something that gives a tip, but is not the boss' }
  ],
  questions: [
    { id: 'q1', type: 'mc', skill: 'letterlijk',
      q: { nl: 'Waar kijkt het computerprogramma naar om een advies te geven?', en: 'What does the computer program look at to give advice?' },
      options: [
        { nl: 'Symptomen, bloeddruk, hartslag en medische voorgeschiedenis', en: 'Symptoms, blood pressure, heart rate and medical history' },
        { nl: 'Naam en adres van de patiënt', en: 'The patient’s name and address' },
        { nl: 'De kleur van de kleding van de patiënt', en: 'The colour of the patient’s clothes' },
        { nl: 'Het weer buiten het ziekenhuis', en: 'The weather outside the hospital' }
      ], answer: 0,
      explain: { nl: 'Alinea 2: het programma "kijkt naar symptomen, bloeddruk, hartslag en medische voorgeschiedenis".',
                 en: 'Paragraph 2: the program "looks at symptoms, blood pressure, heart rate and medical history".' } },
    { id: 'q2', type: 'sort', skill: 'feitmening',
      q: { nl: 'Feit of mening? Zet elke zin in de goede groep.', en: 'Fact or opinion? Put every sentence in the right group.' },
      bins: [{ nl: 'Feit', en: 'Fact' }, { nl: 'Mening', en: 'Opinion' }],
      items: [
        { nl: 'Het programma vergelijkt gegevens met die van eerdere patiënten.',
          en: 'The program compares data with that of earlier patients.', bin: 0 },
        { nl: 'Dat zou eerlijker kunnen zijn dan een arts.', en: 'That could be fairer than a doctor.', bin: 1 },
        { nl: 'Een uitgeputte arts die al twaalf uur dienst heeft, doet er veel langer over.',
          en: 'An exhausted doctor who has already been on shift for twelve hours takes much longer.', bin: 0 },
        { nl: 'Sommige beslissingen vragen om een mens die goed kan luisteren.',
          en: 'Some decisions need a person who can listen well.', bin: 1 }
      ],
      explain: { nl: 'Wat het programma doet en hoelang iets duurt zijn feiten. "Zou kunnen" en "vragen om" zijn standpunten.',
                 en: 'What the program does and how long something takes are facts. "Could be" and "need" are positions.' } },
    { id: 'q3', type: 'mc', skill: 'doel',
      q: { nl: 'Wat is het doel van de schrijver?', en: 'What is the writer’s purpose?' },
      options: [
        { nl: 'Laten zien dat er argumenten vóór én tegen zijn, zodat de lezer er zelf over kan nadenken',
          en: 'Show that there are arguments both for and against, so the reader can think it over themselves' },
        { nl: 'Bewijzen dat computers altijd beter beslissen dan mensen', en: 'Prove that computers always decide better than people' },
        { nl: 'Artsen aanraden om zich te laten vervangen door computers', en: 'Advise doctors to have themselves replaced by computers' },
        { nl: 'Uitleggen hoe je zelf een computerprogramma bouwt', en: 'Explain how to build a computer program yourself' }
      ], answer: 0,
      explain: { nl: 'De tekst noemt eerst voorstanders, dan tegenstanders, en eindigt met een open vraag aan de lezer.',
                 en: 'The text first names supporters, then opponents, and ends with an open question to the reader.' } },
    { id: 'q4', type: 'mc', skill: 'verwijswoorden',
      q: { nl: '"Als het misgaat, wie is er dan verantwoordelijk?" Waar slaat "het" hier op?',
           en: '"And if it goes wrong, who is responsible then?" What does "it" refer to here?' },
      options: [
        { nl: 'Op een verkeerd advies van het computerprogramma', en: 'To a wrong piece of advice from the computer program' },
        { nl: 'Op het weer', en: 'To the weather' },
        { nl: 'Op de spoedeisende hulp zelf', en: 'To the emergency room itself' },
        { nl: 'Op de twaalf uur dienst van de arts', en: 'To the doctor’s twelve-hour shift' }
      ], answer: 0,
      explain: { nl: 'De zinnen ervoor gaan over een programma dat geleerde oneerlijkheid meeneemt in zijn advies.',
                 en: 'The sentences before are about a program that carries learned unfairness into its advice.' } },
    { id: 'q5', type: 'multi', skill: 'gevolgtrekking',
      q: { nl: 'Welke twee risico’s noemen tegenstanders van zo’n programma? Kies er 2.',
           en: 'Which two risks do opponents of such a program name? Pick 2.' },
      options: [
        { nl: 'De computer kan oneerlijkheid uit het verleden meeleren', en: 'The computer can learn unfairness from the past' },
        { nl: 'Niemand weet altijd precies wie verantwoordelijk is als het misgaat', en: 'Nobody always knows exactly who is responsible if it goes wrong' },
        { nl: 'De computer is te traag voor spoedgevallen', en: 'The computer is too slow for emergencies' },
        { nl: 'De computer kost te veel stroom', en: 'The computer uses too much electricity' }
      ], answer: [0, 1],
      explain: { nl: 'Alinea 4 noemt precies deze twee risico’s: meegeleerde oneerlijkheid en onduidelijke verantwoordelijkheid.',
                 en: 'Paragraph 4 names exactly these two risks: learned unfairness and unclear responsibility.' } },
    { id: 'q6', type: 'tf', skill: 'gevolgtrekking',
      q: { nl: 'Volgens de tekst gebruiken de meeste ziekenhuizen het programma nu al als enige beslisser, zonder arts.',
           en: 'According to the text, most hospitals already use the program as the sole decision-maker, without a doctor.' },
      answer: false,
      explain: { nl: 'Alinea 6: het programma is een adviseur, "de uiteindelijke keuze blijft bij een arts".',
                 en: 'Paragraph 6: the program is an advisor, "the final choice stays with a doctor".' } },
    { id: 'q7', type: 'mc', skill: 'structuur',
      q: { nl: 'Hoe is deze tekst opgebouwd?', en: 'How is this text structured?' },
      options: [
        { nl: 'Eerst het probleem, dan argumenten vóór, dan argumenten tegen, en dan een open vraag aan de lezer',
          en: 'First the problem, then arguments for, then arguments against, and then an open question to the reader' },
        { nl: 'Een tijdlijn van 1900 tot nu', en: 'A timeline from 1900 to now' },
        { nl: 'Een stappenplan om zelf een computerprogramma te bouwen', en: 'A step-by-step plan for building a computer program yourself' },
        { nl: 'Een interview met een dokter', en: 'An interview with a doctor' }
      ], answer: 0,
      explain: { nl: 'De tekst begint met het dilemma, weegt daarna beide kanten, en sluit af met "En wat vind jij?".',
                 en: 'The text opens with the dilemma, then weighs both sides, and closes with "So what do you think?".' } },
    { id: 'q8', type: 'mc', skill: 'samenvatten',
      q: { nl: 'Welke samenvatting past het beste?', en: 'Which summary fits best?' },
      options: [
        { nl: 'Computerprogramma’s kunnen sneller en misschien eerlijker beslissen wie het eerst geholpen wordt, maar ze kunnen ook oneerlijkheid overnemen en niemand weet altijd wie verantwoordelijk is; de meeste ziekenhuizen laten daarom de dokter de baas blijven.',
          en: 'Computer programs can decide faster and maybe more fairly who gets helped first, but they can also take over unfairness and nobody always knows who is responsible; that is why most hospitals keep the doctor in charge.' },
        { nl: 'Ziekenhuizen gebruiken al honderd jaar computers om patiënten te helpen.', en: 'Hospitals have used computers to help patients for a hundred years already.' },
        { nl: 'Alleen artsen met twaalf jaar ervaring mogen op de spoedeisende hulp werken.', en: 'Only doctors with twelve years of experience are allowed to work in the emergency room.' },
        { nl: 'Zelfrijdende auto’s hebben niets te maken met dit onderwerp.', en: 'Self-driving cars have nothing to do with this topic.' }
      ], answer: 0,
      explain: { nl: 'Die samenvatting pakt de kern van elke alinea; de andere antwoorden zijn niet wat de tekst zegt.',
                 en: 'That summary takes the core of every paragraph; the other answers are not what the text says.' } },
    { id: 'q9', type: 'gap', skill: 'woordenschat',
      q: { nl: 'Een adviseur is ___.', en: 'An advisor is ___.' },
      options: [
        { nl: 'iemand of iets dat een tip geeft, maar niet de baas is', en: 'someone or something that gives a tip, but is not the boss' },
        { nl: 'de baas van het ziekenhuis', en: 'the boss of the hospital' },
        { nl: 'een patiënt met spoed', en: 'a patient in urgent need' },
        { nl: 'een computerprogramma dat nooit fouten maakt', en: 'a computer program that never makes mistakes' }
      ], answer: 0,
      explain: { nl: 'Alinea 6: het programma wordt gebruikt "als adviseur, niet als baas"; de keuze blijft bij de arts.',
                 en: 'Paragraph 6: the program is used "as an advisor, not as a boss"; the choice stays with the doctor.' } }
  ]
},
{
  id: 'techniek-11', topic: 'techniek', level: 1, emoji: '🧭', scene: 'lab',
  title: { nl: 'De naald die altijd naar het noorden wijst', en: 'The needle that always points north' },
  text: {
    nl: [
      "Stel je voor: je vaart op zee. Overal om je heen is water. Er is geen land en geen weg. Hoe weet je dan welke kant je op moet? Daarvoor bestaat het kompas.",
      "In een kompas zit een dun naaldje van ijzer dat magnetisch is. Het naaldje kan vrij ronddraaien. Maar wat je ook doet, het wijst altijd dezelfde kant op: naar het noorden.",
      "Dat komt doordat de aarde zelf een soort reusachtige magneet is. Die grote magneet trekt aan het kleine naaldje. Daardoor draait het naaldje steeds naar het noorden.",
      "Meer dan duizend jaar geleden gebruikten mensen in China al een kompas. Later namen zeelieden het mee op hun schepen. Zo konden ze verre reizen maken zonder te verdwalen.",
      "Je kunt zelf een kompas maken. Wrijf een naald een paar keer in dezelfde richting langs een magneet. Leg de naald op een blaadje dat in een bak water drijft. Het blaadje draait langzaam, tot de naald naar het noorden wijst."
    ],
    en: [
      "Imagine you are sailing at sea. There is water all around you. There is no land and no road. How do you know which way to go? That is what the compass is for.",
      "Inside a compass is a thin iron needle that is magnetic. The needle can turn freely. But whatever you do, it always points the same way: north.",
      "That is because the Earth itself is a kind of gigantic magnet. That big magnet pulls on the little needle. That is why the needle keeps turning towards the north.",
      "More than a thousand years ago, people in China were already using a compass. Later, sailors took it along on their ships. That way they could make long journeys without getting lost.",
      "You can make a compass yourself. Rub a needle a few times in the same direction along a magnet. Lay the needle on a leaf floating in a bowl of water. The leaf turns slowly, until the needle points north."
    ]
  },
  words: [
    { nl: 'kompas', en: 'compass', defNl: 'een ding met een naald die de richting van het noorden aanwijst', defEn: 'a device with a needle that shows which way north is' },
    { nl: 'magnetisch', en: 'magnetic', defNl: 'ijzer aantrekken of aangetrokken worden, zoals een magneet', defEn: 'attracting iron or being attracted, like a magnet' },
    { nl: 'verdwalen', en: 'to get lost', defNl: 'de weg niet meer weten', defEn: 'to no longer know the way' }
  ],
  questions: [
    { id: 'q1', type: 'mc', skill: 'letterlijk',
      q: { nl: 'Naar welke kant wijst de naald van een kompas altijd?', en: 'Which way does the needle of a compass always point?' },
      options: [
        { nl: 'Naar het zuiden', en: 'South' },
        { nl: 'Naar de zon', en: 'Towards the Sun' },
        { nl: 'Naar het noorden', en: 'North' },
        { nl: 'Naar het dichtstbijzijnde land', en: 'Towards the nearest land' }
      ], answer: 2,
      explain: { nl: 'Alinea 2: "het wijst altijd dezelfde kant op: naar het noorden."',
                 en: 'Paragraph 2: "it always points the same way: north."' } },
    { id: 'q2', type: 'tf', skill: 'letterlijk',
      q: { nl: 'Het kompas is pas honderd jaar geleden uitgevonden.', en: 'The compass was only invented a hundred years ago.' },
      answer: false,
      explain: { nl: 'Niet waar. "Meer dan duizend jaar geleden gebruikten mensen in China al een kompas."',
                 en: 'False. "More than a thousand years ago, people in China were already using a compass."' } },
    { id: 'q3', type: 'gap', skill: 'woordenschat',
      q: { nl: 'Met een kompas kun je op zee niet ___: je weet steeds welke kant je op moet.', en: 'With a compass you cannot ___ at sea: you always know which way to go.' },
      options: [
        { nl: 'drijven', en: 'float' },
        { nl: 'verdwalen', en: 'get lost' },
        { nl: 'vissen', en: 'fish' },
        { nl: 'zinken', en: 'sink' }
      ], answer: 1,
      explain: { nl: 'Verdwalen betekent de weg niet meer weten. Een kompas voorkomt dat.',
                 en: 'Getting lost means no longer knowing the way. A compass prevents that.' } },
    { id: 'q4', type: 'order', skill: 'volgorde',
      q: { nl: 'Zo maak je zelf een kompas. Zet de stappen in de goede volgorde.', en: 'This is how you make your own compass. Put the steps in the right order.' },
      items: [
        { nl: 'Wrijf een naald een paar keer langs een magneet.', en: 'Rub a needle along a magnet a few times.' },
        { nl: 'Leg de naald op een blaadje in een bak water.', en: 'Lay the needle on a leaf in a bowl of water.' },
        { nl: 'Het blaadje draait langzaam rond.', en: 'The leaf turns slowly.' },
        { nl: 'De naald wijst naar het noorden.', en: 'The needle points north.' }
      ], answer: [0, 1, 2, 3],
      explain: { nl: 'Alinea 5 geeft de stappen in deze volgorde.',
                 en: 'Paragraph 5 gives the steps in this order.' } },
    { id: 'q5', type: 'mc', skill: 'hoofdgedachte',
      q: { nl: 'Welke zin past het best bij de hele tekst?', en: 'Which sentence best fits the whole text?' },
      options: [
        { nl: 'Zeelieden zijn vaak zeeziek.', en: 'Sailors are often seasick.' },
        { nl: 'In China is het altijd koud.', en: 'It is always cold in China.' },
        { nl: 'Magneten zijn gevaarlijk speelgoed.', en: 'Magnets are dangerous toys.' },
        { nl: 'Een kompas wijst de weg omdat de aarde een grote magneet is.', en: 'A compass shows the way because the Earth is a big magnet.' }
      ], answer: 3,
      explain: { nl: 'De tekst legt uit wat een kompas doet, waarom het werkt en hoe het gebruikt werd.',
                 en: 'The text explains what a compass does, why it works and how it was used.' } }
  ]
}
]);
