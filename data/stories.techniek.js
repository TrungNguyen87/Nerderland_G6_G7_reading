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
