/* Vervolgverhaal - Dieren & Natuur: Sporen in de sneeuw
   Hoofdstuk 1 = groep 6 (niveau 2), 2 = groep 7 (niveau 4), 3 = groep 8 (niveau 6). */
addSeries({
  id: 'wolf', topic: 'dieren', emoji: '🐺',
  title: { nl: 'Sporen in de sneeuw', en: 'Tracks in the snow' },
  blurb: { nl: 'Noor vindt aan de rand van de Veluwe een spoor dat niet van een hond kan zijn. Is de wolf terug?',
           en: 'At the edge of the Veluwe, Noor finds tracks that cannot belong to a dog. Is the wolf back?' },
  chapters: [
{
  level: 2, emoji: '🐾', scene: 'forest',
  title: { nl: 'Het spoor langs het bos', en: 'The tracks along the forest' },
  teaser: { nl: 'Was het een grote hond, of heeft Noor echt een wolf gezien?', en: 'Was it a big dog, or did Noor really see a wolf?' },
  text: {
    nl: [
      "Het heeft de hele nacht gesneeuwd. Noor woont in een dorp aan de rand van de Veluwe. Voor school laat ze haar hond Bram uit, over het pad langs het bos.",
      "Opeens blijft Bram staan. Zijn staart gaat omlaag en hij gromt zacht. Noor kijkt naar de grond. In de verse sneeuw staan pootafdrukken. Ze zijn veel groter dan die van Bram.",
      "Noor zet haar want naast een afdruk. De afdruk is net zo groot als haar hand. En er is nog iets vreemds: de afdrukken staan precies achter elkaar, in één rechte lijn. Het spoor van Bram slingert alle kanten op.",
      "Thuis vertelt ze het aan papa. “Dat was vast een grote hond”, zegt hij. Maar Noor weet het niet zeker. Een hond rent heen en weer. Dit dier liep rustig rechtdoor, alsof het precies wist waar het heen ging.",
      "Na school gaat Noor terug met haar telefoon. Ze maakt foto's van het spoor. Het begint al te schemeren. Aan de rand van het bos ziet ze iets bewegen.",
      "Tussen de bomen staat een grijs dier met lange poten. Het heeft gele ogen en het kijkt haar recht aan. Noor houdt haar adem in. Eén tel later draait het dier zich om en verdwijnt zonder geluid tussen de bomen."
    ],
    en: [
      "It snowed all night. Noor lives in a village at the edge of the Veluwe. Before school she walks her dog Bram, along the path by the forest.",
      "Suddenly Bram stops. His tail goes down and he growls softly. Noor looks at the ground. In the fresh snow there are paw prints. They are much bigger than Bram’s.",
      "Noor puts her mitten next to a print. The print is as big as her hand. And there is something else strange: the prints are exactly one behind the other, in one straight line. Bram’s tracks wander off in every direction.",
      "At home she tells Dad. “That must have been a big dog,” he says. But Noor is not sure. A dog runs back and forth. This animal walked calmly straight ahead, as if it knew exactly where it was going.",
      "After school Noor goes back with her phone. She takes photos of the tracks. It is already getting dusky. At the edge of the forest she sees something move.",
      "Between the trees stands a grey animal with long legs. It has yellow eyes and it looks straight at her. Noor holds her breath. One second later the animal turns around and disappears between the trees without a sound."
    ]
  },
  words: [
    { nl: 'pootafdrukken', en: 'paw prints', defNl: 'de vormen die de poten van een dier in de grond achterlaten', defEn: 'the shapes an animal’s paws leave in the ground' },
    { nl: 'spoor', en: 'tracks', defNl: 'de rij afdrukken die een dier of mens achterlaat', defEn: 'the row of prints an animal or person leaves behind' },
    { nl: 'schemeren', en: 'to get dusky', defNl: 'langzaam donker worden aan het eind van de dag', defEn: 'to slowly get dark at the end of the day' }
  ],
  questions: [
    { id: 'q1', type: 'mc', skill: 'letterlijk',
      q: { nl: 'Wat doet Bram als hij de afdrukken ziet?', en: 'What does Bram do when he sees the prints?' },
      options: [
        { nl: 'Hij blijft staan en gromt zacht', en: 'He stops and growls softly' },
        { nl: 'Hij rent blaffend het bos in', en: 'He runs barking into the forest' },
        { nl: 'Hij gaat in de sneeuw liggen', en: 'He lies down in the snow' },
        { nl: 'Hij kwispelt vrolijk', en: 'He wags his tail happily' }
      ], answer: 0,
      explain: { nl: 'Alinea 2: “Opeens blijft Bram staan. Zijn staart gaat omlaag en hij gromt zacht.”', en: 'Paragraph 2: “Suddenly Bram stops. His tail goes down and he growls softly.”' } },
    { id: 'q2', type: 'tf', skill: 'letterlijk',
      q: { nl: 'De afdrukken zijn kleiner dan die van Bram.', en: 'The prints are smaller than Bram’s.' },
      answer: false,
      explain: { nl: 'Ze zijn juist veel groter dan die van Bram, zo groot als de hand van Noor.', en: 'They are actually much bigger than Bram’s, as big as Noor’s hand.' } },
    { id: 'q3', type: 'mc', skill: 'gevolgtrekking',
      q: { nl: 'Waarom twijfelt Noor of het een hond was?', en: 'Why is Noor not sure it was a dog?' },
      options: [
        { nl: 'Het spoor liep in één rechte lijn, en een hond rent heen en weer', en: 'The tracks went in one straight line, and a dog runs back and forth' },
        { nl: 'Het was midden in de nacht', en: 'It was the middle of the night' },
        { nl: 'Papa moest erom lachen', en: 'Dad laughed about it' },
        { nl: 'De afdrukken waren rood', en: 'The prints were red' }
      ], answer: 0,
      explain: { nl: 'Het spoor van Bram slingert alle kanten op. Dit dier liep rustig rechtdoor: dat past niet bij een hond.', en: 'Bram’s tracks wander everywhere. This animal walked calmly straight ahead: that does not fit a dog.' } },
    { id: 'q4', type: 'order', skill: 'volgorde',
      q: { nl: 'Zet op volgorde wat er gebeurt.', en: 'Put what happens in order.' },
      items: [
        { nl: 'Bram gromt bij de afdrukken.', en: 'Bram growls at the prints.' },
        { nl: 'Noor legt haar want naast een afdruk.', en: 'Noor puts her mitten next to a print.' },
        { nl: 'Papa zegt dat het een grote hond was.', en: 'Dad says it was a big dog.' },
        { nl: 'Noor ziet een grijs dier met gele ogen.', en: 'Noor sees a grey animal with yellow eyes.' }
      ], answer: [0, 1, 2, 3],
      explain: { nl: 'Eerst ’s ochtends bij het bos, dan thuis bij papa, en na school als het schemert.', en: 'First in the morning by the forest, then at home with Dad, and after school when it gets dusky.' } },
    { id: 'q5', type: 'gap', skill: 'woordenschat',
      q: { nl: 'Als het buiten langzaam donker wordt, begint het te ___.', en: 'When it slowly gets dark outside, it starts to ___.' },
      options: [
        { nl: 'schemeren', en: 'get dusky' },
        { nl: 'sneeuwen', en: 'snow' },
        { nl: 'onweren', en: 'thunder' },
        { nl: 'stralen', en: 'shine' }
      ], answer: 0,
      explain: { nl: 'Schemeren is het moment tussen licht en donker, aan het eind van de dag.', en: 'Getting dusky is the moment between light and dark, at the end of the day.' } },
    { id: 'q6', type: 'mc', skill: 'hoofdgedachte',
      q: { nl: 'Waar gaat dit hoofdstuk vooral over?', en: 'What is this chapter mainly about?' },
      options: [
        { nl: 'Noor vindt een vreemd spoor en ziet misschien een wolf', en: 'Noor finds strange tracks and maybe sees a wolf' },
        { nl: 'Noor krijgt een nieuwe hond', en: 'Noor gets a new dog' },
        { nl: 'Het weer op de Veluwe in de winter', en: 'The weather on the Veluwe in winter' },
        { nl: 'Papa die sneeuw ruimt voor het huis', en: 'Dad clearing snow in front of the house' }
      ], answer: 0,
      explain: { nl: 'Het hele hoofdstuk draait om het spoor en het grijze dier aan het eind.', en: 'The whole chapter is about the tracks and the grey animal at the end.' } }
  ]
},
{
  level: 4, emoji: '📷', scene: 'forest',
  title: { nl: 'De camera in het bos', en: 'The camera in the forest' },
  recap: { nl: 'Na een nacht vol sneeuw vindt Noor bij het bos grote pootafdrukken die in één rechte lijn lopen. Als het schemert, ziet ze tussen de bomen een grijs dier met gele ogen.',
           en: 'After a night of snow, Noor finds big paw prints by the forest that run in one straight line. When it gets dusky, she sees a grey animal with yellow eyes between the trees.' },
  teaser: { nl: 'Heeft Grijs Oor het schaap gedood? En wat gaat het dorp doen?', en: 'Did Grey Ear kill the sheep? And what will the village do?' },
  text: {
    nl: [
      "Noor liet haar foto's zien aan boswachter Sanne, die op school kwam vertellen over de natuur. Sanne bekeek ze lang. “Zie je dat elke afdruk ongeveer tien centimeter lang is?” vroeg ze. “En dat je de nagels ziet? Een wolf zet zijn achterpoot precies in de afdruk van zijn voorpoot. Daardoor lijkt het alsof er maar twee poten lopen, keurig op een rij. Dat heet rijgen.”",
      "Om het zeker te weten, hing Sanne samen met Noor een wildcamera aan een boom bij het pad. Zo'n camera maakt vanzelf een foto zodra er iets beweegt, ook in het donker. Een week later haalden ze het geheugenkaartje eruit. Op zestig foto's stonden reeën, twee vossen, een das en een verdwaalde kat. Maar op één foto, midden in de nacht, stond een wolf. Het was een jonge vrouwtjeswolf met een kras op haar linkeroor. Noor noemde haar Grijs Oor.",
      "Het nieuws ging snel rond in het dorp. Sommige mensen vonden het prachtig. Anderen waren bang, vooral boer Henk, die veertig schapen heeft. “Een wolf hoort niet naast een dorp”, zei hij boos. Zijn buurvrouw wilde haar kinderen niet meer alleen naar school laten fietsen.",
      "Sanne legde uit dat wolven mensen juist uit de weg gaan. Ze eten vooral reeën, herten en wilde zwijnen. Toch kan een wolf ook een schaap pakken als dat makkelijk gaat. Daarom kunnen boeren hulp krijgen bij het bouwen van een hoog schrikdraad rond hun weiland. Zo'n draad van ruim een meter hoog houdt de meeste wolven buiten.",
      "Twee weken bleef het rustig. Toen werd Noor op zaterdagochtend wakker van geschreeuw op straat. In het weiland van boer Henk lag een dood schaap. Voor de ramen van het dorpshuis hingen die middag al papieren met grote letters: DE WOLF MOET WEG.",
      "Noor keek naar de foto van Grijs Oor op haar telefoon. “Weten we eigenlijk wel zeker dat zij het was?” vroeg ze zacht. Maar niemand luisterde."
    ],
    en: [
      "Noor showed her photos to forest ranger Sanne, who came to school to talk about nature. Sanne looked at them for a long time. “Do you see that every print is about ten centimetres long?” she asked. “And that you can see the claws? A wolf puts its back paw exactly in the print of its front paw. That makes it look as if only two legs are walking, neatly in a row. That is called direct registering.”",
      "To be sure, Sanne and Noor hung a wildlife camera on a tree by the path. A camera like that takes a photo by itself as soon as something moves, even in the dark. A week later they took out the memory card. Sixty photos showed deer, two foxes, a badger and a lost cat. But one photo, in the middle of the night, showed a wolf. It was a young female wolf with a scratch on her left ear. Noor named her Grey Ear.",
      "The news spread quickly through the village. Some people thought it was wonderful. Others were scared, especially farmer Henk, who has forty sheep. “A wolf does not belong next to a village,” he said angrily. His neighbour no longer wanted her children to cycle to school alone.",
      "Sanne explained that wolves actually avoid people. They mainly eat deer and wild boar. Still, a wolf may take a sheep if that is easy. That is why farmers can get help building a tall electric fence around their field. A wire like that, just over a metre high, keeps most wolves out.",
      "For two weeks it was quiet. Then on Saturday morning Noor woke up to shouting in the street. In farmer Henk’s field lay a dead sheep. By that afternoon, papers with big letters were already hanging in the windows of the village hall: THE WOLF MUST GO.",
      "Noor looked at the photo of Grey Ear on her phone. “Do we actually know for sure that it was her?” she asked quietly. But nobody was listening."
    ]
  },
  words: [
    { nl: 'wildcamera', en: 'wildlife camera', defNl: 'een camera in de natuur die vanzelf een foto maakt als er een dier langskomt', defEn: 'a camera in nature that takes a photo by itself when an animal passes' },
    { nl: 'rijgen', en: 'direct registering', defNl: 'je achterpoot precies in de afdruk van je voorpoot zetten, zoals een wolf doet', defEn: 'putting your back paw exactly in the print of your front paw, like a wolf does' },
    { nl: 'schrikdraad', en: 'electric fence', defNl: 'een draad met een klein stroomstootje die dieren buiten of binnen houdt', defEn: 'a wire with a small electric shock that keeps animals out or in' }
  ],
  questions: [
    { id: 'q1', type: 'mc', skill: 'letterlijk',
      q: { nl: 'Hoe lang is de afdruk van een wolf ongeveer?', en: 'About how long is a wolf’s print?' },
      options: [
        { nl: 'Tien centimeter', en: 'Ten centimetres' },
        { nl: 'Twee centimeter', en: 'Two centimetres' },
        { nl: 'Dertig centimeter', en: 'Thirty centimetres' },
        { nl: 'Een meter', en: 'One metre' }
      ], answer: 0,
      explain: { nl: 'Sanne zegt: “elke afdruk is ongeveer tien centimeter lang”.', en: 'Sanne says: “every print is about ten centimetres long”.' } },
    { id: 'q2', type: 'mc', skill: 'gevolgtrekking',
      q: { nl: 'Waarom lijkt het of er maar twee poten lopen?', en: 'Why does it look as if only two legs are walking?' },
      options: [
        { nl: 'De wolf zet zijn achterpoot in de afdruk van zijn voorpoot', en: 'The wolf puts its back paw in the print of its front paw' },
        { nl: 'De wolf heeft maar twee poten', en: 'The wolf only has two legs' },
        { nl: 'De sneeuw bedekt twee van de poten', en: 'The snow covers two of the legs' },
        { nl: 'De wolf springt steeds met twee poten tegelijk', en: 'The wolf always jumps with two legs at once' }
      ], answer: 0,
      explain: { nl: 'Twee poten stappen in dezelfde afdruk. Daardoor zie je steeds maar één afdruk per paar poten.', en: 'Two paws step into the same print. So you only see one print for each pair of paws.' } },
    { id: 'q3', type: 'multi', skill: 'letterlijk',
      q: { nl: 'Welke dieren stonden op de foto’s van de wildcamera? Kies er 3.', en: 'Which animals were in the wildlife camera photos? Pick 3.' },
      options: [
        { nl: 'Reeën', en: 'Deer' },
        { nl: 'Vossen', en: 'Foxes' },
        { nl: 'Een das', en: 'A badger' },
        { nl: 'Een beer', en: 'A bear' },
        { nl: 'Een haas', en: 'A hare' }
      ], answer: [0, 1, 2],
      explain: { nl: 'Alinea 2: reeën, twee vossen, een das, een verdwaalde kat en één wolf.', en: 'Paragraph 2: deer, two foxes, a badger, a lost cat and one wolf.' } },
    { id: 'q4', type: 'mc', skill: 'verwijswoorden',
      q: { nl: '“Zo’n camera maakt vanzelf een foto zodra er iets beweegt.” Welke camera is bedoeld?', en: '“A camera like that takes a photo by itself as soon as something moves.” Which camera is meant?' },
      options: [
        { nl: 'De wildcamera aan de boom', en: 'The wildlife camera on the tree' },
        { nl: 'De telefoon van Noor', en: 'Noor’s phone' },
        { nl: 'De camera van boer Henk', en: 'Farmer Henk’s camera' },
        { nl: 'De camera op school', en: 'The camera at school' }
      ], answer: 0,
      explain: { nl: 'De zin ervoor gaat over de wildcamera die Sanne en Noor aan een boom hingen.', en: 'The sentence before is about the wildlife camera that Sanne and Noor hung on a tree.' } },
    { id: 'q5', type: 'order', skill: 'volgorde',
      q: { nl: 'Zet in de volgorde van het verhaal.', en: 'Put these in the order of the story.' },
      items: [
        { nl: 'Sanne bekijkt de foto’s van Noor.', en: 'Sanne looks at Noor’s photos.' },
        { nl: 'Ze hangen een wildcamera op.', en: 'They hang up a wildlife camera.' },
        { nl: 'Op één foto staat een wolf.', en: 'One photo shows a wolf.' },
        { nl: 'Er ligt een dood schaap in het weiland.', en: 'A dead sheep lies in the field.' }
      ], answer: [0, 1, 2, 3],
      explain: { nl: 'Eerst het onderzoek, dan de foto van Grijs Oor, en twee weken later het dode schaap.', en: 'First the investigation, then the photo of Grey Ear, and two weeks later the dead sheep.' } },
    { id: 'q6', type: 'gap', skill: 'woordenschat',
      q: { nl: 'Een ___ is een draad met een stroomstootje die dieren buiten houdt.', en: 'An ___ is a wire with a small shock that keeps animals out.' },
      options: [
        { nl: 'schrikdraad', en: 'electric fence' },
        { nl: 'wildcamera', en: 'wildlife camera' },
        { nl: 'pootafdruk', en: 'paw print' },
        { nl: 'geheugenkaartje', en: 'memory card' }
      ], answer: 0,
      explain: { nl: 'Met een hoog schrikdraad rond het weiland houdt een boer de meeste wolven buiten.', en: 'With a tall electric fence around the field, a farmer keeps most wolves out.' } },
    { id: 'q7', type: 'mc', skill: 'structuur',
      q: { nl: 'Hoe is dit hoofdstuk opgebouwd?', en: 'How is this chapter built up?' },
      options: [
        { nl: 'Eerst het onderzoek, dan de onrust in het dorp, en aan het eind iets onverwachts', en: 'First the investigation, then the unrest in the village, and at the end something unexpected' },
        { nl: 'Eerst een ruzie, en daarna meteen de oplossing', en: 'First a quarrel, and then straight away the solution' },
        { nl: 'Het is alleen uitleg over wolven, zonder verhaal', en: 'It is only information about wolves, without a story' },
        { nl: 'Het begint met het einde en gaat dan terug in de tijd', en: 'It starts with the ending and then goes back in time' }
      ], answer: 0,
      explain: { nl: 'Alinea 1 en 2 gaan over het bewijs, alinea 3 en 4 over het dorp, en alinea 5 brengt het dode schaap.', en: 'Paragraphs 1 and 2 are about the proof, 3 and 4 about the village, and paragraph 5 brings the dead sheep.' } },
    { id: 'q8', type: 'mc', skill: 'hoofdgedachte',
      q: { nl: 'Waar gaat dit hoofdstuk vooral over?', en: 'What is this chapter mainly about?' },
      options: [
        { nl: 'Er is bewijs dat er een wolf bij het dorp woont, en dat geeft onrust', en: 'There is proof that a wolf lives near the village, and that causes unrest' },
        { nl: 'Hoe je een geheugenkaartje leegmaakt', en: 'How to empty a memory card' },
        { nl: 'Hoe boer Henk zijn schapen verzorgt', en: 'How farmer Henk looks after his sheep' },
        { nl: 'Wat een boswachter allemaal doet op een dag', en: 'Everything a forest ranger does in a day' }
      ], answer: 0,
      explain: { nl: 'De camera bewijst dat Grijs Oor er is, en het dorp raakt verdeeld. Dat is de kern.', en: 'The camera proves Grey Ear is there, and the village becomes divided. That is the core.' } }
  ]
},
{
  level: 6, emoji: '🧬', scene: 'forest',
  title: { nl: 'Het bewijs', en: 'The proof' },
  recap: { nl: 'Op de wildcamera staat een jonge wolf, Grijs Oor. Het dorp is verdeeld: sommige mensen vinden het mooi, anderen zijn bang. Dan ligt er een dood schaap in het weiland van boer Henk, en iedereen denkt dat de wolf het heeft gedaan.',
           en: 'The wildlife camera shows a young wolf, Grey Ear. The village is divided: some people think it is wonderful, others are scared. Then a dead sheep lies in farmer Henk’s field, and everybody thinks the wolf did it.' },
  text: {
    nl: [
      "Boswachter Sanne kwam nog dezelfde middag. Ze droeg handschoenen en veegde met een wattenstaafje langs de beet in de nek van het schaap. “Speeksel”, zei ze. “Daarin zit DNA van het dier dat heeft gebeten. Een laboratorium kan precies zien of het van een wolf was, of van iets anders.” Noor mocht meekijken, zolang ze niets aanraakte. De uitslag zou tien dagen duren.",
      "Die tien dagen waren lang. Op het schoolplein werd Noor uitgelachen om haar “lievelingswolf”. Boer Henk zette een bord bij zijn hek: ‘Wolvenland? Nee, bedankt!’ En op de website van de krant schreven mensen dat wolven gevaarlijk zijn en afgeschoten moeten worden. Noor durfde bijna niet meer naar het bos.",
      "Toen kwam de uitslag. In het speeksel zat geen DNA van een wolf, maar van een hond. Grijs Oor was onschuldig. Een paar dagen later meldde de eigenaar van het vakantiepark dat zijn husky die nacht was ontsnapt. De hond was de volgende ochtend moe en modderig teruggekomen.",
      "Op de dorpsavond die volgde, mocht iedereen zeggen wat hij vond. Boer Henk was eerlijk. “Ik ben blij dat het de wolf niet was”, zei hij. “Maar ik blijf bang dat het een keer wél gebeurt. Een schaap is voor mij geen getal.” Sanne vertelde dat de wolf in Nederland beschermd is, en dat wolven helpen om het aantal reeën en wilde zwijnen in balans te houden. “Maar boeren moeten wel geholpen worden”, zei ze. Veel mensen knikten.",
      "Het dorp besloot iets wat eigenlijk voor iedereen goed was. De gemeente betaalde mee aan hoge schrikdraden rond de weilanden, en vrijwilligers hielpen de boeren met bouwen. Henk bouwde als eerste mee. Hondenbezitters moesten hun hond in het bos voortaan aan de lijn houden. De school van Noor begon een wolvenwacht: elke maand bekijken de leerlingen samen met Sanne de foto's van de wildcamera.",
      "Noor schreef er een stuk over voor de krant. ‘Een wolf is geen monster en geen knuffel’, schreef ze. ‘Het is een wild dier dat terug is, en we moeten leren om naast elkaar te leven.’ In het voorjaar liep Grijs Oor weer langs de camera. Achter haar, in één rechte lijn, liepen drie kleine welpen."
    ],
    en: [
      "Forest ranger Sanne came that same afternoon. She wore gloves and wiped a cotton bud along the bite in the sheep’s neck. “Saliva,” she said. “It contains DNA from the animal that bit. A laboratory can tell exactly whether it came from a wolf, or from something else.” Noor was allowed to watch, as long as she did not touch anything. The result would take ten days.",
      "Those ten days were long. In the playground Noor was laughed at for her “favourite wolf”. Farmer Henk put a sign by his gate: ‘Wolf country? No, thank you!’ And on the newspaper’s website people wrote that wolves are dangerous and should be shot. Noor hardly dared to go into the forest any more.",
      "Then the result came. The saliva did not contain DNA from a wolf, but from a dog. Grey Ear was innocent. A few days later the owner of the holiday park reported that his husky had escaped that night. The dog had come back the next morning, tired and muddy.",
      "At the village evening that followed, everybody could say what they thought. Farmer Henk was honest. “I am glad it was not the wolf,” he said. “But I will stay afraid that one day it will happen. A sheep is not just a number to me.” Sanne explained that the wolf is protected in the Netherlands, and that wolves help to keep the number of deer and wild boar in balance. “But farmers do need help,” she said. Many people nodded.",
      "The village decided on something that was actually good for everybody. The council paid towards tall electric fences around the fields, and volunteers helped the farmers build them. Henk was the first to join in. From then on, dog owners had to keep their dogs on a lead in the forest. Noor’s school started a wolf watch: every month the pupils look at the wildlife camera photos together with Sanne.",
      "Noor wrote a piece about it for the newspaper. ‘A wolf is not a monster and not a cuddly toy,’ she wrote. ‘It is a wild animal that has come back, and we have to learn to live side by side.’ In the spring Grey Ear walked past the camera again. Behind her, in one straight line, walked three little cubs."
    ]
  },
  words: [
    { nl: 'speeksel', en: 'saliva', defNl: 'het vocht in je mond, spuug', defEn: 'the liquid in your mouth, spit' },
    { nl: 'beschermd', en: 'protected', defNl: 'zo dat je het niet mag vangen, pesten of doodmaken', defEn: 'so that you are not allowed to catch, harm or kill it' },
    { nl: 'welpen', en: 'cubs', defNl: 'jonge dieren van een wolf, vos, leeuw of beer', defEn: 'young animals of a wolf, fox, lion or bear' }
  ],
  questions: [
    { id: 'q1', type: 'mc', skill: 'letterlijk',
      q: { nl: 'Hoe onderzocht Sanne wie het schaap had gedood?', en: 'How did Sanne find out what had killed the sheep?' },
      options: [
        { nl: 'Ze nam speeksel van de beet af voor een DNA-onderzoek', en: 'She took saliva from the bite for a DNA test' },
        { nl: 'Ze telde de voetstappen in het weiland', en: 'She counted the footprints in the field' },
        { nl: 'Ze vroeg het aan boer Henk', en: 'She asked farmer Henk' },
        { nl: 'Ze bekeek alleen de foto’s van de wildcamera', en: 'She only looked at the wildlife camera photos' }
      ], answer: 0,
      explain: { nl: 'Alinea 1: met een wattenstaafje haalde ze speeksel uit de beet. Daarin zit DNA.', en: 'Paragraph 1: with a cotton bud she took saliva from the bite. It contains DNA.' } },
    { id: 'q2', type: 'find', skill: 'gevolgtrekking',
      q: { nl: 'Welke zin bewijst dat Grijs Oor het schaap níet heeft gedood?', en: 'Which sentence proves that Grey Ear did not kill the sheep?' },
      options: [
        { nl: 'De uitslag zou tien dagen duren.', en: 'The result would take ten days.' },
        { nl: 'Noor durfde bijna niet meer naar het bos.', en: 'Noor hardly dared to go into the forest any more.' },
        { nl: 'In het speeksel zat geen DNA van een wolf, maar van een hond.', en: 'The saliva did not contain DNA from a wolf, but from a dog.' },
        { nl: 'Veel mensen knikten.', en: 'Many people nodded.' }
      ], answer: 2,
      explain: { nl: 'Het DNA is het bewijs: het dier dat beet was een hond, geen wolf.', en: 'The DNA is the proof: the animal that bit was a dog, not a wolf.' } },
    { id: 'q3', type: 'gap', skill: 'woordenschat',
      q: { nl: 'Een dier dat ___ is, mag je niet vangen of doodmaken.', en: 'An animal that is ___ may not be caught or killed.' },
      options: [
        { nl: 'beschermd', en: 'protected' },
        { nl: 'ontsnapt', en: 'escaped' },
        { nl: 'modderig', en: 'muddy' },
        { nl: 'verdwaald', en: 'lost' }
      ], answer: 0,
      explain: { nl: 'Sanne vertelt dat de wolf in Nederland beschermd is: je mag hem niet zomaar afschieten.', en: 'Sanne explains that the wolf is protected in the Netherlands: you may not simply shoot it.' } },
    { id: 'q4', type: 'order', skill: 'volgorde',
      q: { nl: 'Zet in de volgorde van het verhaal.', en: 'Put these in the order of the story.' },
      items: [
        { nl: 'Sanne neemt speeksel af van de beet.', en: 'Sanne takes saliva from the bite.' },
        { nl: 'Boer Henk zet een bord bij zijn hek.', en: 'Farmer Henk puts a sign by his gate.' },
        { nl: 'De uitslag laat DNA van een hond zien.', en: 'The result shows a dog’s DNA.' },
        { nl: 'Het dorp besluit schrikdraden te bouwen.', en: 'The village decides to build electric fences.' },
        { nl: 'Grijs Oor loopt met drie welpen langs de camera.', en: 'Grey Ear walks past the camera with three cubs.' }
      ], answer: [0, 1, 2, 3, 4],
      explain: { nl: 'Onderzoek, wachten, de uitslag, de dorpsavond met het besluit, en in het voorjaar de welpen.', en: 'Investigation, waiting, the result, the village evening with the decision, and in spring the cubs.' } },
    { id: 'q5', type: 'mc', skill: 'verwijswoorden',
      q: { nl: '“Daarin zit DNA van het dier dat heeft gebeten.” Waar verwijst “daarin” naar?', en: '“It contains DNA from the animal that bit.” What does “it” refer to?' },
      options: [
        { nl: 'Het speeksel', en: 'The saliva' },
        { nl: 'De handschoenen', en: 'The gloves' },
        { nl: 'Het laboratorium', en: 'The laboratory' },
        { nl: 'Het weiland', en: 'The field' }
      ], answer: 0,
      explain: { nl: 'Vlak ervoor zegt Sanne: “Speeksel.” Daarin zit het DNA.', en: 'Just before, Sanne says: “Saliva.” That is what contains the DNA.' } },
    { id: 'q6', type: 'sort', skill: 'feitmening',
      q: { nl: 'Feit of mening? Zet elke zin in de goede groep.', en: 'Fact or opinion? Put every sentence in the right group.' },
      bins: [ { nl: 'Feit', en: 'Fact' }, { nl: 'Mening', en: 'Opinion' } ],
      items: [
        { nl: 'Het schaap is gedood door een hond.', en: 'The sheep was killed by a dog.', bin: 0 },
        { nl: 'Wolven moeten allemaal worden afgeschoten.', en: 'All wolves should be shot.', bin: 1 },
        { nl: 'De wolf is in Nederland beschermd.', en: 'The wolf is protected in the Netherlands.', bin: 0 },
        { nl: 'Een wolf hoort niet naast een dorp.', en: 'A wolf does not belong next to a village.', bin: 1 }
      ],
      explain: { nl: 'Het DNA-onderzoek en de wet kun je nagaan. Wat er moet gebeuren en waar een wolf “hoort”, is wat iemand vindt.', en: 'The DNA test and the law can be checked. What should happen and where a wolf “belongs” is what somebody thinks.' } },
    { id: 'q7', type: 'multi', skill: 'letterlijk',
      q: { nl: 'Wat besloot het dorp? Kies er 3.', en: 'What did the village decide? Pick 3.' },
      options: [
        { nl: 'De gemeente betaalt mee aan hoge schrikdraden', en: 'The council pays towards tall electric fences' },
        { nl: 'Honden moeten in het bos aan de lijn', en: 'Dogs must be on a lead in the forest' },
        { nl: 'De school begint een wolvenwacht', en: 'The school starts a wolf watch' },
        { nl: 'Grijs Oor wordt gevangen en weggebracht', en: 'Grey Ear is caught and taken away' },
        { nl: 'Het vakantiepark moet dicht', en: 'The holiday park must close' }
      ], answer: [0, 1, 2],
      explain: { nl: 'Alinea 5 noemt de schrikdraden, de lijn voor honden en de wolvenwacht van de school.', en: 'Paragraph 5 mentions the electric fences, the lead for dogs and the school’s wolf watch.' } },
    { id: 'q8', type: 'mc', skill: 'doel',
      q: { nl: 'Waarom schreef Noor een stuk voor de krant?', en: 'Why did Noor write a piece for the newspaper?' },
      options: [
        { nl: 'Om mensen te laten nadenken over hoe we naast de wolf kunnen leven', en: 'To make people think about how we can live alongside the wolf' },
        { nl: 'Om te vertellen dat schapen niet belangrijk zijn', en: 'To say that sheep are not important' },
        { nl: 'Om geld in te zamelen voor de boswachter', en: 'To raise money for the forest ranger' },
        { nl: 'Om te laten zien dat boer Henk ongelijk had', en: 'To show that farmer Henk was wrong' }
      ], answer: 0,
      explain: { nl: 'Ze wil mensen overtuigen: een wolf is geen monster en geen knuffel, we moeten leren samenleven.', en: 'She wants to convince people: a wolf is not a monster and not a cuddly toy, we have to learn to live together.' } },
    { id: 'q9', type: 'tf', skill: 'gevolgtrekking',
      q: { nl: 'Na de uitslag is boer Henk helemaal niet meer bang voor de wolf.', en: 'After the result farmer Henk is not afraid of the wolf at all any more.' },
      answer: false,
      explain: { nl: 'Hij zegt: “Maar ik blijf bang dat het een keer wél gebeurt.” Daarom bouwt hij ook als eerste mee aan het schrikdraad.', en: 'He says: “But I will stay afraid that one day it will happen.” That is also why he is the first to help build the fence.' } },
    { id: 'q10', type: 'find', skill: 'hoofdgedachte',
      q: { nl: 'Welke zin zegt het beste wat het dorp in dit verhaal heeft geleerd?', en: 'Which sentence best says what the village learned in this story?' },
      options: [
        { nl: 'Boer Henk was eerlijk.', en: 'Farmer Henk was honest.' },
        { nl: 'Henk bouwde als eerste mee.', en: 'Henk was the first to join in.' },
        { nl: 'Het is een wild dier dat terug is, en we moeten leren om naast elkaar te leven.', en: 'It is a wild animal that has come back, and we have to learn to live side by side.' },
        { nl: 'Achter haar, in één rechte lijn, liepen drie kleine welpen.', en: 'Behind her, in one straight line, walked three little cubs.' }
      ], answer: 2,
      explain: { nl: 'Dat is de les van het hele verhaal: niet bang en niet naïef, maar samenleven met een wild dier.', en: 'That is the lesson of the whole story: not afraid and not naive, but living together with a wild animal.' } }
  ]
}
  ]
});
