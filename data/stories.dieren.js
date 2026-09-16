/* Wereld 1 - Dieren & Natuur */
addStories([
{
  id: 'dieren-1', topic: 'dieren', level: 1, emoji: '🦊', scene: 'city-night',
  title: { nl: 'De vos in de stad', en: 'The fox in the city' },
  text: {
    nl: [
      "Elke avond, als het donker wordt, sluipt Vera de vos de stad in. Overdag slaapt ze in een hol onder een oude schuur. Maar 's nachts is de stad van haar.",
      "Vera zoekt eten. Ze snuffelt aan vuilniszakken en pikt een korst brood van het schoolplein. Soms vangt ze een muis in het park. Een vos eet bijna alles: bessen, wormen, kip en zelfs kaas.",
      "Mensen schrikken vaak van haar. Toch is Vera schuw. Zodra ze een voetstap hoort, verdwijnt ze tussen de struiken. Ze is veel sneller dan je denkt.",
      "In het voorjaar krijgt Vera vier jongen. Die noem je welpen. De welpen blijven de eerste weken in het hol. Daarna leren ze jagen van hun moeder.",
      "Er wonen steeds meer vossen in de stad. Daar is namelijk veel eten en weinig gevaar. Zolang wij onze rommel opruimen, blijven zij rustig in de schaduw."
    ],
    en: [
      "Every evening, when it gets dark, Vera the fox sneaks into the city. During the day she sleeps in a den under an old shed. But at night the city is hers.",
      "Vera looks for food. She sniffs at rubbish bags and grabs a crust of bread from the schoolyard. Sometimes she catches a mouse in the park. A fox eats almost anything: berries, worms, chicken and even cheese.",
      "People often get a fright when they see her. Yet Vera is shy. The moment she hears a footstep, she disappears into the bushes. She is much faster than you think.",
      "In spring Vera has four young. You call them cubs. For the first weeks the cubs stay in the den. After that their mother teaches them to hunt.",
      "More and more foxes live in the city. That is because there is plenty of food and little danger. As long as we clean up our mess, they stay quietly in the shadows."
    ]
  },
  words: [
    { nl: 'sluipt', en: 'sneaks', defNl: 'heel stil en voorzichtig lopen', defEn: 'to walk very quietly and carefully' },
    { nl: 'schuw', en: 'shy / wary', defNl: 'bang voor mensen, blijft liever weg', defEn: 'afraid of people, prefers to stay away' },
    { nl: 'welpen', en: 'cubs', defNl: 'de jongen van een vos, wolf of leeuw', defEn: 'the young of a fox, wolf or lion' }
  ],
  questions: [
    { id: 'q1', type: 'mc', skill: 'letterlijk',
      q: { nl: 'Waar slaapt Vera overdag?', en: 'Where does Vera sleep during the day?' },
      options: [
        { nl: 'In een hol onder een oude schuur', en: 'In a den under an old shed' },
        { nl: 'In een boom in het park', en: 'In a tree in the park' },
        { nl: 'Op het schoolplein', en: 'On the schoolyard' },
        { nl: 'Tussen de vuilniszakken', en: 'Among the rubbish bags' }
      ], answer: 0,
      explain: { nl: 'In de eerste alinea staat: "Overdag slaapt ze in een hol onder een oude schuur."',
                 en: 'The first paragraph says: "During the day she sleeps in a den under an old shed."' } },
    { id: 'q2', type: 'tf', skill: 'letterlijk',
      q: { nl: 'Vera jaagt vooral overdag.', en: 'Vera hunts mainly during the day.' },
      answer: false,
      explain: { nl: 'Ze slaapt overdag en gaat pas de stad in als het donker wordt.',
                 en: 'She sleeps during the day and only enters the city when it gets dark.' } },
    { id: 'q3', type: 'gap', skill: 'woordenschat',
      q: { nl: 'Vera is schuw. Dat betekent dat ze ___.', en: 'Vera is shy. That means she ___.' },
      options: [
        { nl: 'snel wegloopt bij mensen', en: 'quickly runs away from people' },
        { nl: 'graag bij mensen komt', en: 'likes to come close to people' },
        { nl: 'heel groot en sterk is', en: 'is very big and strong' },
        { nl: 'niet goed kan ruiken', en: 'cannot smell very well' }
      ], answer: 0,
      explain: { nl: 'In de tekst staat: zodra ze een voetstap hoort, verdwijnt ze. Schuw = bang, vermijdt mensen.',
                 en: 'The text says: the moment she hears a footstep she disappears. Shy = wary, avoids people.' } },
    { id: 'q4', type: 'order', skill: 'volgorde',
      q: { nl: 'Zet de avond van Vera in de juiste volgorde.', en: 'Put Vera’s evening in the right order.' },
      items: [
        { nl: 'Het wordt donker en Vera wordt wakker.', en: 'It gets dark and Vera wakes up.' },
        { nl: 'Ze snuffelt aan de vuilniszakken.', en: 'She sniffs at the rubbish bags.' },
        { nl: 'Ze hoort een voetstap.', en: 'She hears a footstep.' },
        { nl: 'Ze verdwijnt tussen de struiken.', en: 'She disappears into the bushes.' }
      ], answer: [0, 1, 2, 3],
      explain: { nl: 'Eerst wakker worden, dan eten zoeken, dan schrikken, dan wegrennen.',
                 en: 'First wake up, then look for food, then get startled, then run away.' } },
    { id: 'q5', type: 'mc', skill: 'hoofdgedachte',
      q: { nl: 'Waar gaat dit verhaal vooral over?', en: 'What is this text mainly about?' },
      options: [
        { nl: 'Hoe een vos in de stad leeft', en: 'How a fox lives in the city' },
        { nl: 'Waarom kaas lekker is', en: 'Why cheese is tasty' },
        { nl: 'Hoe je een schuur bouwt', en: 'How to build a shed' },
        { nl: 'Waarom muizen in het park wonen', en: 'Why mice live in the park' }
      ], answer: 0,
      explain: { nl: 'Elke alinea gaat over het leven van de vos in de stad: slapen, eten, jongen krijgen.',
                 en: 'Every paragraph is about the fox’s life in the city: sleeping, eating, having young.' } }
  ]
},

{
  id: 'dieren-2', topic: 'dieren', level: 2, emoji: '🐋', scene: 'ocean',
  title: { nl: 'Het lied van de bultrug', en: 'The song of the humpback whale' },
  text: {
    nl: [
      "Diep in de oceaan klinkt een geluid dat op een roestige deur lijkt. Het kreunt, het piept en het zoemt. Toch is het geen deur: het is een bultrugwalvis die zingt.",
      "Alleen de mannetjes zingen. Hun lied duurt soms wel twintig minuten. Daarna beginnen ze gewoon weer opnieuw, uren achter elkaar. Onder water reist het geluid enorm ver. Een walvis in de Stille Oceaan kan een soortgenoot horen die honderden kilometers verderop drijft.",
      "Het gekke is dat alle bultruggen in hetzelfde zeegebied precies hetzelfde lied zingen. En elk jaar verandert dat lied een beetje. Een walvis verzint een nieuw stukje, de rest neemt het over, en binnen een paar maanden zingt de hele groep de nieuwe versie. Onderzoekers noemen dat een hit die de wereld rondgaat.",
      "Waarom ze zingen, weten we nog niet zeker. Misschien is het om indruk te maken. Misschien is het een manier om elkaar te vinden in het donkere water.",
      "Wat wij wel weten, is dat lawaai van schepen het lied overstemt. Als een schip voorbijvaart, stoppen sommige walvissen met zingen. Daarom worden er nu stillere schroeven bedacht, zodat de oceaan weer van de walvissen wordt."
    ],
    en: [
      "Deep in the ocean there is a sound like a rusty door. It groans, it squeaks and it hums. Yet it is not a door: it is a humpback whale singing.",
      "Only the males sing. Their song sometimes lasts twenty minutes. After that they simply start again, for hours on end. Under water the sound travels enormously far. A whale in the Pacific can hear another of its kind floating hundreds of kilometres away.",
      "The strange thing is that all humpbacks in the same sea area sing exactly the same song. And every year that song changes a little. One whale invents a new bit, the rest copy it, and within a few months the whole group sings the new version. Researchers call it a hit that travels the world.",
      "Why they sing, we still do not know for sure. Perhaps it is to impress. Perhaps it is a way to find each other in the dark water.",
      "What we do know is that noise from ships drowns out the song. When a ship passes, some whales stop singing. That is why quieter propellers are now being designed, so that the ocean belongs to the whales again."
    ]
  },
  words: [
    { nl: 'soortgenoot', en: 'a member of the same species', defNl: 'een dier van dezelfde soort', defEn: 'an animal of the same kind' },
    { nl: 'overstemt', en: 'drowns out', defNl: 'zo hard is dat je het andere niet meer hoort', defEn: 'is so loud that you cannot hear the other thing' },
    { nl: 'schroeven', en: 'propellers', defNl: 'de draaiende bladen die een schip vooruit duwen', defEn: 'the turning blades that push a ship forward' }
  ],
  questions: [
    { id: 'q1', type: 'mc', skill: 'letterlijk',
      q: { nl: 'Wie van de bultruggen zingen er?', en: 'Which humpbacks sing?' },
      options: [
        { nl: 'Alleen de mannetjes', en: 'Only the males' },
        { nl: 'Alleen de vrouwtjes', en: 'Only the females' },
        { nl: 'Alleen de jonge walvissen', en: 'Only the young whales' },
        { nl: 'Alle walvissen tegelijk', en: 'All whales at the same time' }
      ], answer: 0,
      explain: { nl: 'Alinea 2 begint met: "Alleen de mannetjes zingen."',
                 en: 'Paragraph 2 starts with: "Only the males sing."' } },
    { id: 'q2', type: 'mc', skill: 'gevolgtrekking',
      q: { nl: 'Waarom noemen onderzoekers het lied "een hit die de wereld rondgaat"?',
           en: 'Why do researchers call the song "a hit that travels the world"?' },
      options: [
        { nl: 'Omdat een nieuw stukje snel door alle walvissen wordt overgenomen',
          en: 'Because a new part is quickly copied by all the whales' },
        { nl: 'Omdat het lied op de radio komt', en: 'Because the song is played on the radio' },
        { nl: 'Omdat walvissen prijzen winnen', en: 'Because whales win prizes' },
        { nl: 'Omdat het lied altijd hetzelfde blijft', en: 'Because the song always stays the same' }
      ], answer: 0,
      explain: { nl: 'Net als een popliedje verspreidt het nieuwe stukje zich razendsnel door de hele groep.',
                 en: 'Just like a pop song, the new part spreads very fast through the whole group.' } },
    { id: 'q3', type: 'tf', skill: 'letterlijk',
      q: { nl: 'Wetenschappers weten precies waarom bultruggen zingen.',
           en: 'Scientists know exactly why humpbacks sing.' },
      answer: false,
      explain: { nl: 'In de tekst staat: "Waarom ze zingen, weten we nog niet zeker."',
                 en: 'The text says: "Why they sing, we still do not know for sure."' } },
    { id: 'q4', type: 'match', skill: 'woordenschat',
      q: { nl: 'Klik het woord en daarna de juiste betekenis.', en: 'Click the word and then the correct meaning.' },
      pairs: [
        { word: { nl: 'soortgenoot', en: 'kin' }, meaning: { nl: 'een dier van dezelfde soort', en: 'an animal of the same kind' } },
        { word: { nl: 'overstemmen', en: 'to drown out' }, meaning: { nl: 'harder zijn dan een ander geluid', en: 'to be louder than another sound' } },
        { word: { nl: 'schroef', en: 'propeller' }, meaning: { nl: 'draaiend blad dat een schip voortduwt', en: 'a turning blade that pushes a ship' } }
      ],
      explain: { nl: 'Deze drie woorden komen allemaal uit de tekst.', en: 'All three words come from the text.' } },
    { id: 'q5', type: 'mc', skill: 'gevolgtrekking',
      q: { nl: 'Waarom worden er stillere scheepsschroeven bedacht?',
           en: 'Why are quieter ship propellers being designed?' },
      options: [
        { nl: 'Zodat walvissen elkaar weer goed kunnen horen', en: 'So whales can hear each other properly again' },
        { nl: 'Zodat schepen sneller varen', en: 'So ships sail faster' },
        { nl: 'Omdat matrozen willen slapen', en: 'Because sailors want to sleep' },
        { nl: 'Omdat schroeven snel roesten', en: 'Because propellers rust quickly' }
      ], answer: 0,
      explain: { nl: 'Scheepslawaai overstemt het lied, dus minder lawaai helpt de walvissen.',
                 en: 'Ship noise drowns out the song, so less noise helps the whales.' } }
  ]
},

{
  id: 'dieren-3', topic: 'dieren', level: 3, emoji: '🐺', scene: 'forest',
  title: { nl: 'De wolf is terug', en: 'The wolf is back' },
  text: {
    nl: [
      "Ruim honderdvijftig jaar lang leefde er in Nederland geen enkele wolf. De laatste werd rond 1870 doodgeschoten. Sindsdien kende bijna niemand het dier nog uit het echt; de wolf bestond alleen nog in sprookjes.",
      "In 2015 stak er opeens weer eentje de grens over vanuit Duitsland. Een jonge wolvin liep in een paar dagen tientallen kilometers en dook op in Drenthe. Inmiddels leven er meerdere roedels op de Veluwe. Een roedel is een familie: een vader, een moeder en hun jongen van dat jaar.",
      "Niet iedereen is blij. Schapenhouder Ben de Groot vond op één ochtend zeven dode schapen in de wei. \"Ik snap dat de wolf een beschermd dier is\", zegt hij, \"maar mijn schapen zijn dat ook waard. Een hek van anderhalve meter met stroomdraad kost me duizenden euro's.\"",
      "Boswachter Anouk Meijer kijkt er anders naar. Volgens haar houdt de wolf het bos gezond. \"Er lopen hier veel te veel reeën en zwijnen. Die eten jonge boompjes op, waardoor het bos zich niet kan vernieuwen. Waar wolven jagen, blijven de kuddes in beweging en krijgt de natuur rust.\"",
      "Beiden hebben gelijk, en juist daarom is het lastig. De provincie betaalt daarom mee aan wolfwerende hekken en vergoedt schade aan vee. Ondertussen leert Nederland opnieuw iets wat het was vergeten: hoe je samenleeft met een roofdier dat je zelf hebt laten terugkomen."
    ],
    en: [
      "For more than a hundred and fifty years not a single wolf lived in the Netherlands. The last one was shot around 1870. After that almost nobody knew the animal for real; the wolf only existed in fairy tales.",
      "In 2015 one suddenly crossed the border from Germany. A young female wolf walked dozens of kilometres in a few days and turned up in Drenthe. Today several packs live on the Veluwe. A pack is a family: a father, a mother and their young of that year.",
      "Not everyone is happy. Sheep farmer Ben de Groot found seven dead sheep in his field in a single morning. \"I understand the wolf is a protected animal,\" he says, \"but my sheep are worth protecting too. A fence one and a half metres high with an electric wire costs me thousands of euros.\"",
      "Forest ranger Anouk Meijer sees it differently. According to her the wolf keeps the forest healthy. \"There are far too many deer and wild boar here. They eat the young trees, so the forest cannot renew itself. Where wolves hunt, the herds keep moving and nature gets a rest.\"",
      "Both of them are right, and that is exactly what makes it difficult. So the province helps pay for wolf-proof fences and compensates damage to livestock. Meanwhile the Netherlands is relearning something it had forgotten: how to live alongside a predator it allowed to come back itself."
    ]
  },
  words: [
    { nl: 'roedel', en: 'pack', defNl: 'een wolvenfamilie die samen jaagt', defEn: 'a wolf family that hunts together' },
    { nl: 'wolfwerend', en: 'wolf-proof', defNl: 'zo gemaakt dat een wolf er niet door kan', defEn: 'made so a wolf cannot get through' },
    { nl: 'vergoedt', en: 'compensates', defNl: 'betaalt het verlies terug', defEn: 'pays back the loss' }
  ],
  questions: [
    { id: 'q1', type: 'mc', skill: 'letterlijk',
      q: { nl: 'In welk jaar dook er weer een wolf op in Nederland?', en: 'In which year did a wolf turn up in the Netherlands again?' },
      options: [ { nl: '2015', en: '2015' }, { nl: '1870', en: '1870' }, { nl: '1950', en: '1950' }, { nl: '2005', en: '2005' } ],
      answer: 0,
      explain: { nl: 'Alinea 2: "In 2015 stak er opeens weer eentje de grens over."',
                 en: 'Paragraph 2: "In 2015 one suddenly crossed the border."' } },
    { id: 'q2', type: 'mc', skill: 'gevolgtrekking',
      q: { nl: 'Waarom is boswachter Anouk blij met de wolf?', en: 'Why is ranger Anouk happy about the wolf?' },
      options: [
        { nl: 'Omdat het bos zich kan vernieuwen als er minder reeën zijn',
          en: 'Because the forest can renew itself when there are fewer deer' },
        { nl: 'Omdat wolven mooi zijn om te fotograferen', en: 'Because wolves are beautiful to photograph' },
        { nl: 'Omdat er dan meer toeristen komen', en: 'Because more tourists will come' },
        { nl: 'Omdat schapen dan beter beschermd worden', en: 'Because sheep will be better protected' }
      ], answer: 0,
      explain: { nl: 'Zij zegt dat te veel reeën en zwijnen de jonge boompjes opeten.',
                 en: 'She says too many deer and boar eat the young trees.' } },
    { id: 'q3', type: 'tf', skill: 'gevolgtrekking',
      q: { nl: 'De schrijver vindt dat alleen de boer gelijk heeft.', en: 'The writer thinks only the farmer is right.' },
      answer: false,
      explain: { nl: 'In de laatste alinea staat: "Beiden hebben gelijk." De schrijver kiest geen kant.',
                 en: 'The last paragraph says: "Both of them are right." The writer picks no side.' } },
    { id: 'q4', type: 'gap', skill: 'woordenschat',
      q: { nl: 'Een roedel is ___.', en: 'A pack is ___.' },
      options: [
        { nl: 'een wolvenfamilie die samen leeft en jaagt', en: 'a wolf family that lives and hunts together' },
        { nl: 'een hek rond een weiland', en: 'a fence around a field' },
        { nl: 'een gebied in Drenthe', en: 'an area in Drenthe' },
        { nl: 'een jong schaap', en: 'a young sheep' }
      ], answer: 0,
      explain: { nl: 'De tekst legt het zelf uit: "Een roedel is een familie."',
                 en: 'The text explains it itself: "A pack is a family."' } },
    { id: 'q5', type: 'mc', skill: 'hoofdgedachte',
      q: { nl: 'Welke titel past het beste bij de hele tekst?', en: 'Which title fits the whole text best?' },
      options: [
        { nl: 'Leren samenleven met de wolf', en: 'Learning to live alongside the wolf' },
        { nl: 'Hoe bouw je een hek?', en: 'How do you build a fence?' },
        { nl: 'De geschiedenis van Drenthe', en: 'The history of Drenthe' },
        { nl: 'Waarom reeën jonge boompjes eten', en: 'Why deer eat young trees' }
      ], answer: 0,
      explain: { nl: 'De tekst laat twee kanten zien en eindigt met samenleven met een roofdier.',
                 en: 'The text shows two sides and ends with living alongside a predator.' } }
  ]
}
]);

/* --- Niveau 4 en 5: langere teksten met Cito-achtige vragen --- */
addStories([
{
  id: 'dieren-4', topic: 'dieren', level: 4, emoji: '🐝', scene: 'forest',
  title: { nl: 'De dans van de bijen', en: 'The dance of the bees' },
  text: {
    nl: [
      "Een bij die een veld vol bloemen heeft gevonden, vliegt terug naar de korf. Daar doet ze iets geks: ze begint te dansen op de raat. De andere bijen kruipen dichterbij en voelen met hun sprieten mee. Even later vliegen ze precies de goede kant op.",
      "Die dans is geen toeval. Het is een boodschap. De bij loopt een rondje, dan een recht stukje, dan weer een rondje de andere kant op. Samen lijkt dat op een liggende acht. Onderzoekers noemen het de kwispeldans.",
      "In dat rechte stukje zit alle informatie. De hoek waaronder de bij loopt, vertelt de richting ten opzichte van de zon. Loopt ze recht omhoog over de raat, dan moeten de anderen recht naar de zon toe vliegen. Loopt ze schuin naar links, dan ligt het veld schuin links van de zon. En hoe langer het rechte stukje duurt, hoe verder weg het eten is.",
      "Karl von Frisch ontdekte dit bijna honderd jaar geleden. Hij verfde kleine stipjes op de ruggen van bijen en volgde ze dagenlang. Eerst geloofde bijna niemand hem. Een insect met een taal, dat kon toch niet? Toch kreeg hij er later de Nobelprijs voor.",
      "Het knapste is misschien wel dat de bijen elkaar in het donker begrijpen. In de korf is het pikzwart. De andere bijen zien de dans dus helemaal niet, ze voelen hem: de trillingen van de vleugels en het duwen van het lijfje. Daardoor komt de boodschap ook aan als het buiten allang nacht is.",
      "En de dans klopt verrassend goed. Als onderzoekers zelf naar de aangewezen plek liepen, vonden ze daar meestal echt bloemen. Bijen maken heus fouten, maar gemiddeld kloppen de richting en de afstand. Daarom zeggen biologen voorzichtig: bijen praten niet met woorden, maar ze vertellen elkaar wel degelijk iets."
    ],
    en: [
      "A bee that has found a field full of flowers flies back to the hive. There she does something odd: she starts to dance on the comb. The other bees crawl closer and feel along with their antennae. A moment later they fly off in exactly the right direction.",
      "That dance is no accident. It is a message. The bee walks a circle, then a straight bit, then another circle the other way round. Together it looks like a figure of eight lying down. Researchers call it the waggle dance.",
      "All the information is in that straight bit. The angle at which the bee walks tells the direction compared to the sun. If she walks straight up the comb, the others must fly straight towards the sun. If she walks at an angle to the left, the field lies at an angle to the left of the sun. And the longer the straight bit lasts, the further away the food is.",
      "Karl von Frisch discovered this almost a hundred years ago. He painted little dots on the backs of bees and followed them for days. At first almost nobody believed him. An insect with a language, surely that was impossible? Yet he later won the Nobel Prize for it.",
      "The cleverest part is perhaps that the bees understand each other in the dark. Inside the hive it is pitch black. So the other bees do not see the dance at all, they feel it: the vibrations of the wings and the pushing of the body. That is why the message still arrives when it has been night outside for hours.",
      "And the dance is surprisingly accurate. When researchers walked to the spot themselves, they usually did find flowers there. Bees certainly make mistakes, but on average the direction and the distance are right. That is why biologists say carefully: bees do not talk in words, but they really do tell each other something."
    ]
  },
  words: [
    { nl: 'raat', en: 'honeycomb', defNl: 'de plaat met zeshoekige vakjes waarin bijen honing bewaren', defEn: 'the sheet of six-sided cells where bees store honey' },
    { nl: 'kwispeldans', en: 'waggle dance', defNl: 'de dans waarmee een bij vertelt waar eten te vinden is', defEn: 'the dance a bee uses to tell where food can be found' },
    { nl: 'trillingen', en: 'vibrations', defNl: 'heel snelle kleine bewegingen die je kunt voelen', defEn: 'very fast small movements that you can feel' }
  ],
  questions: [
    { id: 'q1', type: 'mc', skill: 'letterlijk',
      q: { nl: 'Waar voert de bij haar dans uit?', en: 'Where does the bee perform her dance?' },
      options: [
        { nl: 'Op de raat in de korf', en: 'On the comb inside the hive' },
        { nl: 'Boven het bloemenveld', en: 'Above the field of flowers' },
        { nl: 'Op een tak voor de korf', en: 'On a branch in front of the hive' },
        { nl: 'In de lucht, vlak bij de zon', en: 'In the air, close to the sun' }
      ], answer: 0,
      explain: { nl: 'In de eerste alinea staat: "ze begint te dansen op de raat".',
                 en: 'The first paragraph says she starts to dance on the comb.' } },
    { id: 'q2', type: 'mc', skill: 'verwijswoorden',
      q: { nl: '"In dat rechte stukje zit alle informatie." Waar verwijst het woord "dat" naar?',
           en: '"All the information is in that straight bit." What does the word "that" point to?' },
      options: [
        { nl: 'Naar het rechte stukje van de kwispeldans', en: 'To the straight bit of the waggle dance' },
        { nl: 'Naar het bloemenveld', en: 'To the field of flowers' },
        { nl: 'Naar de korf', en: 'To the hive' },
        { nl: 'Naar de sprieten van de bijen', en: 'To the antennae of the bees' }
      ], answer: 0,
      explain: { nl: 'In de zin ervoor is de dans beschreven: rondje, recht stukje, rondje. "Dat rechte stukje" verwijst dus terug naar dat middelste deel.',
                 en: 'The sentence before describes the dance: circle, straight bit, circle. "That straight bit" refers back to that middle part.' } },
    { id: 'q3', type: 'multi', skill: 'letterlijk',
      q: { nl: 'Welke twee dingen vertelt de kwispeldans aan de andere bijen? Kies er 2.',
           en: 'Which two things does the waggle dance tell the other bees? Pick 2.' },
      options: [
        { nl: 'In welke richting het eten ligt', en: 'In which direction the food lies' },
        { nl: 'Hoe ver het eten weg is', en: 'How far away the food is' },
        { nl: 'Welke kleur de bloemen hebben', en: 'What colour the flowers are' },
        { nl: 'Hoeveel bijen er mee moeten', en: 'How many bees should come along' }
      ], answer: [0, 1],
      explain: { nl: 'De hoek vertelt de richting, en de duur van het rechte stukje vertelt de afstand. Over kleur of aantallen zegt de tekst niets.',
                 en: 'The angle gives the direction and the length of the straight bit gives the distance. The text says nothing about colour or numbers.' } },
    { id: 'q4', type: 'mc', skill: 'gevolgtrekking',
      q: { nl: 'Waarom werkt de dans ook als het in de korf helemaal donker is?',
           en: 'Why does the dance still work when it is completely dark inside the hive?' },
      options: [
        { nl: 'Omdat de bijen de dans voelen in plaats van zien', en: 'Because the bees feel the dance instead of seeing it' },
        { nl: 'Omdat bijen in het donker kunnen kijken', en: 'Because bees can see in the dark' },
        { nl: 'Omdat de bij dan harder danst', en: 'Because the bee dances harder then' },
        { nl: 'Omdat er een lampje in de korf brandt', en: 'Because there is a little light in the hive' }
      ], answer: 0,
      explain: { nl: 'Alinea 5: de bijen voelen de trillingen van de vleugels en het duwen van het lijfje.',
                 en: 'Paragraph 5: the bees feel the vibrations of the wings and the pushing of the body.' } },
    { id: 'q5', type: 'gap', skill: 'woordenschat',
      q: { nl: 'Een raat is ___.', en: 'A honeycomb is ___.' },
      options: [
        { nl: 'de plaat met vakjes waarin bijen hun honing bewaren', en: 'the sheet of cells where bees keep their honey' },
        { nl: 'het geluid dat een bij maakt', en: 'the sound a bee makes' },
        { nl: 'een veld vol bloemen', en: 'a field full of flowers' },
        { nl: 'de spriet waarmee een bij voelt', en: 'the antenna a bee feels with' }
      ], answer: 0,
      explain: { nl: 'De bijen dansen erop en bewaren er honing in: het is de plaat met zeshoekige vakjes.',
                 en: 'The bees dance on it and store honey in it: it is the sheet of six-sided cells.' } },
    { id: 'q6', type: 'order', skill: 'volgorde',
      q: { nl: 'Zet op volgorde wat er gebeurt als een bij eten heeft gevonden.',
           en: 'Put in order what happens when a bee has found food.' },
      items: [
        { nl: 'De bij vindt een veld vol bloemen.', en: 'The bee finds a field full of flowers.' },
        { nl: 'Ze vliegt terug naar de korf.', en: 'She flies back to the hive.' },
        { nl: 'Ze danst een liggende acht op de raat.', en: 'She dances a figure of eight on the comb.' },
        { nl: 'De andere bijen voelen de dans met hun sprieten.', en: 'The other bees feel the dance with their antennae.' },
        { nl: 'Ze vliegen de goede kant op.', en: 'They fly off in the right direction.' }
      ], answer: [0, 1, 2, 3, 4],
      explain: { nl: 'De eerste alinea vertelt precies deze volgorde, van vinden tot wegvliegen.',
                 en: 'The first paragraph tells exactly this order, from finding to flying off.' } },
    { id: 'q7', type: 'mc', skill: 'structuur',
      q: { nl: 'Alinea 4 eindigt met: "Toch kreeg hij er later de Nobelprijs voor." Wat doet het signaalwoord "toch" hier?',
           en: 'Paragraph 4 ends with: "Yet he later won the Nobel Prize for it." What does the signal word "yet" do here?' },
      options: [
        { nl: 'Het zet een tegenstelling neer: eerst geloofde niemand hem, later kreeg hij de hoogste prijs',
          en: 'It sets up a contrast: at first nobody believed him, later he got the highest prize' },
        { nl: 'Het geeft een voorbeeld van de kwispeldans', en: 'It gives an example of the waggle dance' },
        { nl: 'Het vertelt hoe lang het onderzoek duurde', en: 'It tells how long the research took' },
        { nl: 'Het maakt een opsomming af', en: 'It finishes a list' }
      ], answer: 0,
      explain: { nl: '"Toch" laat zien dat er iets onverwachts komt: precies het tegenovergestelde van wat je zou verwachten.',
                 en: '"Yet" shows something unexpected is coming: the opposite of what you would expect.' } },
    { id: 'q8', type: 'mc', skill: 'hoofdgedachte',
      q: { nl: 'Wat is de hoofdgedachte van deze tekst?', en: 'What is the main idea of this text?' },
      options: [
        { nl: 'Bijen geven elkaar met een dans door waar eten te vinden is',
          en: 'Bees use a dance to tell each other where food can be found' },
        { nl: 'Karl von Frisch was een beroemde onderzoeker', en: 'Karl von Frisch was a famous researcher' },
        { nl: 'In een bijenkorf is het altijd donker', en: 'It is always dark inside a beehive' },
        { nl: 'Bijen maken vaak fouten', en: 'Bees often make mistakes' }
      ], answer: 0,
      explain: { nl: 'Elke alinea gaat over de dans en de boodschap erin. De andere antwoorden zijn kleine details uit één alinea.',
                 en: 'Every paragraph is about the dance and its message. The other answers are small details from one paragraph.' } }
  ]
},

{
  id: 'dieren-5', topic: 'dieren', level: 5, emoji: '🦟', scene: 'forest',
  title: { nl: 'Moeten we de mug uitroeien?', en: 'Should we wipe out the mosquito?' },
  text: {
    nl: [
      "Er is geen dier dat zoveel mensen doodt als de mug. Niet de haai, niet de leeuw, maar dat zoemende beestje boven je bed. Muggen dragen ziektes over, en de ergste daarvan is malaria. Volgens de Wereldgezondheidsorganisatie sterven daar elk jaar ongeveer zeshonderdduizend mensen aan. De meesten van hen zijn kinderen onder de vijf jaar.",
      "Hoe gaat dat precies? Alleen vrouwtjesmuggen steken. Zij hebben bloed nodig om eitjes te kunnen maken. Bij een steek komt er een klein beetje speeksel in je huid, en daar zit soms een parasiet in. Die parasiet nestelt zich in je lever en later in je bloed. Zo verspreidt de ziekte zich van mens naar mens, telkens met de mug als koerier.",
      "De laatste jaren is er een techniek bij gekomen die alles kan veranderen. Onderzoekers kunnen het erfelijk materiaal van muggen zo aanpassen dat de vrouwtjes geen nakomelingen meer krijgen. Laat je zulke muggen los, dan verdwijnt de hele populatie binnen een paar jaar. In afgesloten laboratoria is dat al gelukt.",
      "Voorstanders vinden dat we niet mogen wachten. \"Elke minuut sterft er ergens een kind aan malaria,\" zegt een onderzoeker van een Brits programma. \"Wie een middel heeft en het niet gebruikt, laat die kinderen in de steek.\" Voor hen is de keuze eenvoudig.",
      "Tegenstanders zijn veel voorzichtiger. Muggen en hun larven zijn voedsel voor vogels, vissen, kikkers en vleermuizen. Larven eten rottende bladeren in het water en houden zo sloten schoon. Niemand weet zeker wat er gebeurt als die schakel verdwijnt. En, waarschuwen ze, een uitgestorven soort kun je niet terugzetten als het misgaat.",
      "Toch is het beeld minder zwart-wit dan het lijkt. Er bestaan ongeveer drieduizendvijfhonderd soorten muggen, en daarvan dragen er maar een handjevol malaria over. Niemand wil alle muggen weg. Het gaat om één soort, in bepaalde gebieden, waar de ziekte het hardst toeslaat.",
      "De techniek is er bijna. De moeilijkste vraag is niet of het kán, maar wie er mag beslissen. Want een mug houdt zich niet aan landsgrenzen. Wat in het ene land wordt losgelaten, vliegt het volgende land binnen. Daarom praten regeringen, boeren en dorpsbewoners er samen over. En wat vind jij?"
    ],
    en: [
      "No animal kills as many people as the mosquito. Not the shark, not the lion, but that buzzing little creature above your bed. Mosquitoes pass on diseases, and the worst of them is malaria. According to the World Health Organization about six hundred thousand people die of it every year. Most of them are children under five.",
      "How does that work exactly? Only female mosquitoes bite. They need blood to be able to make eggs. When they bite, a little saliva enters your skin, and sometimes there is a parasite in it. That parasite settles in your liver and later in your blood. This is how the disease spreads from person to person, with the mosquito as the courier every time.",
      "In recent years a technique has appeared that could change everything. Researchers can alter the genetic material of mosquitoes so that the females no longer have offspring. Release such mosquitoes and the whole population disappears within a few years. In sealed laboratories this has already worked.",
      "Supporters believe we must not wait. \"Every minute a child somewhere dies of malaria,\" says a researcher from a British programme. \"Anyone who has a remedy and does not use it is abandoning those children.\" For them the choice is simple.",
      "Opponents are far more careful. Mosquitoes and their larvae are food for birds, fish, frogs and bats. The larvae eat rotting leaves in the water and so keep ditches clean. Nobody knows for sure what happens if that link disappears. And, they warn, a species that has died out cannot be put back if things go wrong.",
      "Yet the picture is less black and white than it seems. There are about three and a half thousand species of mosquito, and only a handful of them carry malaria. Nobody wants every mosquito gone. It is about one species, in certain areas, where the disease hits hardest.",
      "The technique is almost ready. The hardest question is not whether it can be done, but who is allowed to decide. Because a mosquito does not respect borders. What is released in one country flies into the next. That is why governments, farmers and villagers are talking it over together. And what do you think?"
    ]
  },
  words: [
    { nl: 'parasiet', en: 'parasite', defNl: 'een piepklein levend wezen dat in een ander dier of mens leeft en het ziek maakt', defEn: 'a tiny living thing that lives inside another animal or person and makes it ill' },
    { nl: 'populatie', en: 'population', defNl: 'alle dieren van één soort bij elkaar in een gebied', defEn: 'all the animals of one species together in an area' },
    { nl: 'erfelijk materiaal', en: 'genetic material', defNl: 'de code in een cel die bepaalt hoe een dier eruitziet en werkt', defEn: 'the code inside a cell that decides how an animal looks and works' }
  ],
  questions: [
    { id: 'q1', type: 'mc', skill: 'letterlijk',
      q: { nl: 'Welke muggen steken volgens de tekst?', en: 'Which mosquitoes bite, according to the text?' },
      options: [
        { nl: 'Alleen de vrouwtjes', en: 'Only the females' },
        { nl: 'Alleen de mannetjes', en: 'Only the males' },
        { nl: 'Alleen de larven', en: 'Only the larvae' },
        { nl: 'Alle muggen even vaak', en: 'All mosquitoes equally often' }
      ], answer: 0,
      explain: { nl: 'Alinea 2: "Alleen vrouwtjesmuggen steken. Zij hebben bloed nodig om eitjes te kunnen maken."',
                 en: 'Paragraph 2: "Only female mosquitoes bite. They need blood to make eggs."' } },
    { id: 'q2', type: 'sort', skill: 'feitmening',
      q: { nl: 'Is het een feit of een mening? Zet elke zin in de goede groep.',
           en: 'Fact or opinion? Put every sentence in the right group.' },
      bins: [{ nl: 'Feit', en: 'Fact' }, { nl: 'Mening', en: 'Opinion' }],
      items: [
        { nl: 'Alleen vrouwtjesmuggen steken.', en: 'Only female mosquitoes bite.', bin: 0 },
        { nl: 'Wie een middel heeft en het niet gebruikt, laat kinderen in de steek.',
          en: 'Anyone who has a remedy and does not use it is abandoning children.', bin: 1 },
        { nl: 'Er bestaan ongeveer 3500 soorten muggen.', en: 'There are about 3,500 species of mosquito.', bin: 0 },
        { nl: 'We moeten veel voorzichtiger zijn met de natuur.', en: 'We should be far more careful with nature.', bin: 1 }
      ],
      explain: { nl: 'Een feit kun je nameten of opzoeken. Een mening herken je aan woorden als "moeten", "laat in de steek" en "voorzichtiger": daar vindt iemand iets van.',
                 en: 'A fact can be measured or looked up. An opinion shows words like "should" and "abandoning": somebody is judging.' } },
    { id: 'q3', type: 'mc', skill: 'doel',
      q: { nl: 'Wat wil de schrijver vooral bereiken met deze tekst?',
           en: 'What is the writer mainly trying to achieve with this text?' },
      options: [
        { nl: 'Je laten nadenken over een moeilijke keuze, door beide kanten te laten zien',
          en: 'Make you think about a hard choice by showing both sides' },
        { nl: 'Je overtuigen dat alle muggen zo snel mogelijk weg moeten',
          en: 'Convince you that every mosquito must go as fast as possible' },
        { nl: 'Je laten lachen om een grappig beestje', en: 'Make you laugh about a funny little creature' },
        { nl: 'Uitleggen hoe je een muggenbult behandelt', en: 'Explain how to treat a mosquito bite' }
      ], answer: 0,
      explain: { nl: 'De schrijver geeft eerst de voorstanders het woord, dan de tegenstanders, en eindigt met "En wat vind jij?". Dat is geen overtuigen maar laten nadenken.',
                 en: 'The writer gives the supporters a voice, then the opponents, and ends with "what do you think?". That is inviting thought, not persuading.' } },
    { id: 'q4', type: 'mc', skill: 'verwijswoorden',
      q: { nl: '"Niemand weet zeker wat er gebeurt als die schakel verdwijnt." Welke schakel wordt bedoeld?',
           en: '"Nobody knows for sure what happens if that link disappears." Which link is meant?' },
      options: [
        { nl: 'De muggen en hun larven als voedsel voor andere dieren',
          en: 'The mosquitoes and their larvae as food for other animals' },
        { nl: 'De parasiet in het bloed van mensen', en: 'The parasite in people’s blood' },
        { nl: 'De grens tussen twee landen', en: 'The border between two countries' },
        { nl: 'Het laboratorium waar de proeven gedaan worden', en: 'The laboratory where the tests are done' }
      ], answer: 0,
      explain: { nl: 'De zinnen ervoor gaan over muggen en larven die vogels, vissen, kikkers en vleermuizen voeden. Dát is de schakel in de voedselketen.',
                 en: 'The sentences before are about mosquitoes and larvae feeding birds, fish, frogs and bats. That is the link in the food chain.' } },
    { id: 'q5', type: 'multi', skill: 'gevolgtrekking',
      q: { nl: 'Welke twee argumenten gebruiken de tegenstanders? Kies er 2.',
           en: 'Which two arguments do the opponents use? Pick 2.' },
      options: [
        { nl: 'Andere dieren eten muggen en larven', en: 'Other animals eat mosquitoes and larvae' },
        { nl: 'Een uitgestorven soort kun je niet terugzetten', en: 'A species that has died out cannot be brought back' },
        { nl: 'Muggen zijn mooie insecten om naar te kijken', en: 'Mosquitoes are beautiful insects to look at' },
        { nl: 'De techniek is nog veel te duur', en: 'The technique is still far too expensive' }
      ], answer: [0, 1],
      explain: { nl: 'Alinea 5 noemt precies die twee: de muggen zijn voedsel én het is onomkeerbaar. Over schoonheid of geld zegt de tekst niets.',
                 en: 'Paragraph 5 names exactly those two: mosquitoes are food, and it cannot be undone. The text says nothing about beauty or money.' } },
    { id: 'q6', type: 'mc', skill: 'structuur',
      q: { nl: 'Alinea 6 begint met "Toch". Wat gebeurt er in die alinea?',
           en: 'Paragraph 6 starts with "Yet". What happens in that paragraph?' },
      options: [
        { nl: 'De schrijver zwakt het felle voor-en-tegen af en laat zien dat het om één soort gaat',
          en: 'The writer softens the sharp for-and-against and shows it is about one species' },
        { nl: 'De schrijver herhaalt het argument van de voorstanders', en: 'The writer repeats the supporters’ argument' },
        { nl: 'De schrijver vertelt hoe malaria wordt behandeld', en: 'The writer explains how malaria is treated' },
        { nl: 'De schrijver geeft de tegenstanders gelijk', en: 'The writer agrees with the opponents' }
      ], answer: 0,
      explain: { nl: '"Toch is het beeld minder zwart-wit dan het lijkt" kondigt een nuance aan: niet alle muggen, maar één soort in bepaalde gebieden.',
                 en: '"Yet the picture is less black and white" announces a nuance: not all mosquitoes, but one species in certain areas.' } },
    { id: 'q7', type: 'mc', skill: 'samenvatten',
      q: { nl: 'Welke samenvatting past het beste bij de hele tekst?',
           en: 'Which summary fits the whole text best?' },
      options: [
        { nl: 'Muggen doden veel mensen. Er is een techniek om één soort te laten verdwijnen, maar dat heeft gevolgen voor de natuur, dus moet de wereld er samen over beslissen.',
          en: 'Mosquitoes kill many people. A technique exists to make one species disappear, but that affects nature, so the world has to decide together.' },
        { nl: 'Muggen steken alleen als ze eitjes willen maken en dat doen vooral de vrouwtjes.',
          en: 'Mosquitoes only bite when they want to make eggs, and mainly the females do that.' },
        { nl: 'Onderzoekers in laboratoria hebben een nieuwe soort mug gemaakt die niemand meer steekt.',
          en: 'Researchers in laboratories have made a new kind of mosquito that no longer bites anyone.' },
        { nl: 'Vogels, vissen en vleermuizen zouden honger krijgen zonder muggen.',
          en: 'Birds, fish and bats would go hungry without mosquitoes.' }
      ], answer: 0,
      explain: { nl: 'Een goede samenvatting pakt van elke alinea de kern: probleem, techniek, voor, tegen, nuance en beslissing. De andere antwoorden zijn losse details.',
                 en: 'A good summary takes the core of each paragraph: problem, technique, for, against, nuance and decision. The others are single details.' } },
    { id: 'q8', type: 'tf', skill: 'gevolgtrekking',
      q: { nl: 'Uit de tekst blijkt dat onderzoekers alle drieduizendvijfhonderd muggensoorten willen laten verdwijnen.',
           en: 'The text shows that researchers want all three and a half thousand mosquito species to disappear.' },
      answer: false,
      explain: { nl: 'Alinea 6 zegt juist het tegenovergestelde: "Niemand wil alle muggen weg. Het gaat om één soort."',
                 en: 'Paragraph 6 says the opposite: "Nobody wants every mosquito gone. It is about one species."' } },
    { id: 'q9', type: 'mc', skill: 'woordenschat',
      q: { nl: 'In de tekst staat: de mug is telkens de "koerier". Wat betekent dat hier?',
           en: 'The text calls the mosquito the "courier" every time. What does that mean here?' },
      options: [
        { nl: 'De mug brengt de parasiet van de ene mens naar de andere',
          en: 'The mosquito carries the parasite from one person to another' },
        { nl: 'De mug bezorgt pakjes', en: 'The mosquito delivers parcels' },
        { nl: 'De mug is het snelste insect', en: 'The mosquito is the fastest insect' },
        { nl: 'De mug maakt de parasiet zelf aan', en: 'The mosquito makes the parasite itself' }
      ], answer: 0,
      explain: { nl: 'Een koerier brengt iets van de ene plek naar de andere. De mug maakt de parasiet niet, ze vervoert hem alleen.',
                 en: 'A courier takes something from one place to another. The mosquito does not make the parasite, it only carries it.' } }
  ]
}
]);

/* --- Nieuwe verhalen: bever, octopus, trekvogels, mieren, dierentuinen --- */
addStories([
{
  id: 'dieren-6', topic: 'dieren', level: 1, emoji: '🦫', scene: 'forest',
  title: { nl: 'De bever bouwt een dam', en: 'The beaver builds a dam' },
  text: {
    nl: [
      "Honderd jaar geleden was de bever helemaal verdwenen uit Nederland. Jagers vingen hem voor zijn dikke vacht. Pas de laatste tijd wonen er weer bevers, langs rustige beken en sloten.",
      "Een bever is een echte bouwer. Met zijn scherpe tanden knaagt hij takken van bomen. Hij stapelt de takken op elkaar en stopt de gaten dicht met modder en gras. Zo bouwt hij een dam dwars door het water.",
      "Achter de dam stijgt het water langzaam. Een smal beekje verandert in een brede poel. Midden in die poel bouwt de bever zijn burcht: een huis van takken, met de ingang onder water.",
      "De poel is niet alleen goed voor de bever zelf. Vissen krijgen meer plek om te zwemmen. Kikkers leggen er hun eitjes. Vogels komen er drinken en baden. Eén dam zorgt dus voor een heel nieuw leefgebied.",
      "Sommige boeren zijn niet blij, want een dam kan een weiland onder water zetten. Toch vinden veel mensen de bever een held: zonder machines maakt hij een plek waar heel veel andere dieren van profiteren."
    ],
    en: [
      "A hundred years ago the beaver had completely disappeared from the Netherlands. Hunters caught it for its thick fur. Only recently have beavers returned, along quiet streams and ditches.",
      "A beaver is a true builder. With his sharp teeth he gnaws branches off trees. He stacks the branches on top of each other and seals the gaps with mud and grass. That is how he builds a dam right across the water.",
      "Behind the dam the water slowly rises. A narrow stream turns into a wide pond. In the middle of that pond the beaver builds his lodge: a house of branches, with the entrance underwater.",
      "The pond is not just good for the beaver himself. Fish get more room to swim. Frogs lay their eggs there. Birds come to drink and bathe. So one dam creates a whole new habitat.",
      "Some farmers are not happy, because a dam can flood a meadow. Still, many people see the beaver as a hero: without any machines, he creates a place where lots of other animals benefit."
    ]
  },
  words: [
    { nl: 'knaagt', en: 'gnaws', defNl: 'met de tanden stukjes van iets afbijten', defEn: 'to bite small pieces off something with your teeth' },
    { nl: 'burcht', en: 'lodge', defNl: 'het huis van takken waar een bever in woont', defEn: 'the house of branches a beaver lives in' },
    { nl: 'leefgebied', en: 'habitat', defNl: 'de plek waar een dier woont en eten vindt', defEn: 'the place where an animal lives and finds food' }
  ],
  questions: [
    { id: 'q1', type: 'mc', skill: 'letterlijk',
      q: { nl: 'Waarom verdween de bever vroeger uit Nederland?', en: 'Why did the beaver disappear from the Netherlands long ago?' },
      options: [
        { nl: 'Jagers vingen hem voor zijn vacht', en: 'Hunters caught him for his fur' },
        { nl: 'Er was geen water meer over', en: 'There was no water left' },
        { nl: 'Hij verhuisde zelf naar Duitsland', en: 'He moved to Germany on his own' },
        { nl: 'Boeren bouwden dammen weg', en: 'Farmers removed the dams' }
      ], answer: 0,
      explain: { nl: 'In de eerste alinea staat: "Jagers vingen hem voor zijn dikke vacht."',
                 en: 'The first paragraph says: "Hunters caught it for its thick fur."' } },
    { id: 'q2', type: 'tf', skill: 'letterlijk',
      q: { nl: 'De bever bouwt zijn burcht midden in de poel.', en: 'The beaver builds his lodge in the middle of the pond.' },
      answer: true,
      explain: { nl: 'Alinea 3 zegt: "Midden in die poel bouwt de bever zijn burcht."',
                 en: 'Paragraph 3 says: "In the middle of that pond the beaver builds his lodge."' } },
    { id: 'q3', type: 'gap', skill: 'woordenschat',
      q: { nl: 'De burcht van de bever is ___.', en: 'The beaver\'s lodge is ___.' },
      options: [
        { nl: 'zijn huis van takken, met de ingang onder water', en: 'his house of branches, with the entrance underwater' },
        { nl: 'de dam dwars door de beek', en: 'the dam right across the stream' },
        { nl: 'een school voor jonge bevers', en: 'a school for young beavers' },
        { nl: 'een nest hoog in een boom', en: 'a nest high in a tree' }
      ], answer: 0,
      explain: { nl: 'De tekst zegt het letterlijk: een huis van takken, met de ingang onder water.',
                 en: 'The text says it directly: a house of branches, with the entrance underwater.' } },
    { id: 'q4', type: 'order', skill: 'volgorde',
      q: { nl: 'Zet de bouw van de dam in de juiste volgorde.', en: 'Put the building of the dam in the right order.' },
      items: [
        { nl: 'De bever knaagt takken van de bomen.', en: 'The beaver gnaws branches off the trees.' },
        { nl: 'Hij stopt de gaten dicht met modder en gras.', en: 'He seals the gaps with mud and grass.' },
        { nl: 'Het water achter de dam stijgt.', en: 'The water behind the dam rises.' },
        { nl: 'Vissen, kikkers en vogels komen op de nieuwe poel af.', en: 'Fish, frogs and birds come to the new pond.' }
      ], answer: [0, 1, 2, 3],
      explain: { nl: 'Eerst knagen, dan bouwen, dan stijgt het water, en pas daarna komen de andere dieren.',
                 en: 'First gnawing, then building, then the water rises, and only after that the other animals come.' } },
    { id: 'q5', type: 'mc', skill: 'hoofdgedachte',
      q: { nl: 'Waar gaat dit verhaal vooral over?', en: 'What is this text mainly about?' },
      options: [
        { nl: 'Hoe een bever met zijn dam een nieuwe leefplek maakt', en: 'How a beaver creates a new habitat with his dam' },
        { nl: 'Waarom boeren geen water lusten', en: 'Why farmers dislike water' },
        { nl: 'Hoe je een muur van steen bouwt', en: 'How to build a wall of stone' },
        { nl: 'Waarom kikkers in bomen leven', en: 'Why frogs live in trees' }
      ], answer: 0,
      explain: { nl: 'Elke alinea gaat over de bever, zijn dam en wat die dam voor de natuur betekent.',
                 en: 'Every paragraph is about the beaver, his dam and what that dam means for nature.' } }
  ]
},

{
  id: 'dieren-7', topic: 'dieren', level: 2, emoji: '🐙', scene: 'ocean',
  title: { nl: 'Het geheugen van de octopus', en: 'The octopus\'s memory' },
  text: {
    nl: [
      "Een octopus heeft geen botten, geen schild en zelfs geen ruggengraat. Toch geldt hij als een van de slimste dieren in de zee. Van de driehonderd miljoen zenuwcellen in zijn lijf zit maar een derde in zijn hoofd.",
      "Zijn huid zit vol piepkleine zakjes kleurstof. Door die zakjes samen te trekken of juist op te rekken, verandert een octopus in een paar tellen van kleur. Hij past zelfs de structuur van zijn huid aan, zodat hij op een steen of op zeewier lijkt. Roofdieren zwemmen zo vlak langs hem heen zonder hem op te merken.",
      "Octopussen zijn ook uitstekende probleemoplossers. In een proef kregen ze een afgesloten potje met een lekkere garnaal erin. Binnen een paar minuten draaiden de meeste dieren het deksel eraf. Een octopus in een aquarium in Nieuw-Zeeland, Inky genaamd, kroop zelfs 's nachts door een piepklein gaatje, over de vloer en via een afvoerbuis regelrecht terug de oceaan in.",
      "Het knapste zit misschien wel in zijn armen. Elk van de acht armen heeft een eigen bosje zenuwcellen, een soort minibreintje. Daardoor kan een arm al een beetje zelfstandig voelen, grijpen en proeven, zonder dat het hoofdbrein daarvoor steeds een seintje hoeft te geven.",
      "Dat is best bijzonder, want een octopus leeft meestal maar één of twee jaar. Hij heeft dus nauwelijks tijd om iets van zijn ouders te leren, die meestal al dood zijn voordat hij uit het ei kruipt. Toch weet hij binnen die korte tijd potjes te openen, uit tanks te ontsnappen en gevaar te herkennen. Onderzoekers proberen nog steeds te snappen hoe dat precies kan."
    ],
    en: [
      "An octopus has no bones, no shell and not even a spine. Yet it counts as one of the smartest animals in the sea. Of the three hundred million nerve cells in its body, only a third sits in its head.",
      "Its skin is full of tiny sacs of pigment. By squeezing or stretching those sacs, an octopus changes colour within a few seconds. It even adjusts the texture of its skin, so that it looks like a rock or seaweed. Predators swim right past it without ever noticing.",
      "Octopuses are also excellent problem solvers. In one test they were given a sealed jar with a tasty shrimp inside. Within a few minutes most of the animals had unscrewed the lid. An octopus in an aquarium in New Zealand, named Inky, even crawled at night through a tiny gap, across the floor and through a drainpipe, straight back into the ocean.",
      "The cleverest part is perhaps in its arms. Each of the eight arms has its own little cluster of nerve cells, a kind of mini-brain. That lets an arm feel, grip and taste somewhat on its own, without the main brain having to give a signal every time.",
      "That is quite remarkable, because an octopus usually lives only one or two years. So it barely has time to learn anything from its parents, who are usually already dead before it hatches from its egg. Yet within that short time it manages to open jars, escape tanks and recognise danger. Researchers still struggle to understand exactly how that is possible."
    ]
  },
  words: [
    { nl: 'zenuwcellen', en: 'nerve cells', defNl: 'de cellen waarmee een dier voelt en denkt', defEn: 'the cells an animal uses to feel and think' },
    { nl: 'kleurstof', en: 'pigment', defNl: 'de stof in de huid die kleur geeft', defEn: 'the substance in the skin that gives colour' },
    { nl: 'minibreintje', en: 'mini-brain', defNl: 'een klein groepje zenuwcellen dat een beetje zelf kan denken', defEn: 'a small cluster of nerve cells that can think a little on its own' }
  ],
  questions: [
    { id: 'q1', type: 'mc', skill: 'letterlijk',
      q: { nl: 'Hoeveel zenuwcellen heeft een octopus ongeveer?', en: 'About how many nerve cells does an octopus have?' },
      options: [
        { nl: 'Driehonderd miljoen', en: 'Three hundred million' },
        { nl: 'Drie miljoen', en: 'Three million' },
        { nl: 'Dertigduizend', en: 'Thirty thousand' },
        { nl: 'Drie miljard', en: 'Three billion' }
      ], answer: 0,
      explain: { nl: 'Alinea 1: "Van de driehonderd miljoen zenuwcellen in zijn lijf..."',
                 en: 'Paragraph 1: "Of the three hundred million nerve cells in its body..."' } },
    { id: 'q2', type: 'tf', skill: 'letterlijk',
      q: { nl: 'Inky ontsnapte overdag uit het aquarium.', en: 'Inky escaped from the aquarium during the day.' },
      answer: false,
      explain: { nl: 'De tekst zegt dat hij "\'s nachts" door een piepklein gaatje kroop.',
                 en: 'The text says he crawled through a tiny gap "at night."' } },
    { id: 'q3', type: 'mc', skill: 'gevolgtrekking',
      q: { nl: 'Waarom kon Inky door zo\'n klein gaatje ontsnappen?', en: 'Why could Inky escape through such a tiny gap?' },
      options: [
        { nl: 'Omdat een octopus geen harde botten heeft en zich overal doorheen kan wurmen',
          en: 'Because an octopus has no hard bones and can squeeze through almost anything' },
        { nl: 'Omdat de bewakers een deur hadden opengelaten', en: 'Because the keepers had left a door open' },
        { nl: 'Omdat hij nog heel jong en klein was', en: 'Because he was still very young and small' },
        { nl: 'Omdat hij het gaatje eerst groter had geknaagd', en: 'Because he had first gnawed the gap bigger' }
      ], answer: 0,
      explain: { nl: 'Alinea 1 vertelt dat een octopus geen botten en geen ruggengraat heeft; daardoor past hij door heel kleine openingen, zoals bij Inky.',
                 en: 'Paragraph 1 says an octopus has no bones and no spine; that lets it fit through very small openings, as with Inky.' } },
    { id: 'q4', type: 'match', skill: 'woordenschat',
      q: { nl: 'Klik het woord en daarna de juiste betekenis.', en: 'Click the word and then the correct meaning.' },
      pairs: [
        { word: { nl: 'zenuwcellen', en: 'nerve cells' }, meaning: { nl: 'de cellen waarmee een dier voelt en denkt', en: 'the cells an animal uses to feel and think' } },
        { word: { nl: 'kleurstof', en: 'pigment' }, meaning: { nl: 'de stof in de huid die kleur geeft', en: 'the substance in the skin that gives colour' } },
        { word: { nl: 'minibreintje', en: 'mini-brain' }, meaning: { nl: 'een klein groepje zenuwcellen dat zelf een beetje kan denken', en: 'a small cluster of nerve cells that can think a little on its own' } }
      ],
      explain: { nl: 'Deze drie woorden komen allemaal uit de tekst.', en: 'All three words come from the text.' } },
    { id: 'q5', type: 'mc', skill: 'gevolgtrekking',
      q: { nl: 'Wat kun je afleiden uit het feit dat een octopus zoveel weet, terwijl hij maar één of twee jaar leeft?',
           en: 'What can you infer from the fact that an octopus knows so much, even though it lives only one or two years?' },
      options: [
        { nl: 'Hij moet zelf uitvogelen wat hij weet, want hij kan het niet van zijn ouders leren',
          en: 'He must figure things out for himself, because he cannot learn them from his parents' },
        { nl: 'Hij wordt op school onderwezen door andere octopussen', en: 'He is taught at school by other octopuses' },
        { nl: 'Hij leert alles van zijn moeder voordat hij geboren wordt', en: 'He learns everything from his mother before he is born' },
        { nl: 'Hij hoeft niets te leren omdat hij alles al kan', en: 'He does not need to learn anything because he already can do it all' }
      ], answer: 0,
      explain: { nl: 'De tekst zegt dat de ouders meestal al dood zijn voordat de octopus uit het ei kruipt, dus hij kan niets van hen leren.',
                 en: 'The text says the parents are usually already dead before the octopus hatches, so it cannot learn anything from them.' } },
    { id: 'q6', type: 'mc', skill: 'hoofdgedachte',
      q: { nl: 'Wat is de hoofdgedachte van deze tekst?', en: 'What is the main idea of this text?' },
      options: [
        { nl: 'De octopus is op allerlei manieren verrassend slim, ondanks dat hij zo anders in elkaar zit', en: 'The octopus is surprisingly smart in many ways, despite being built so differently' },
        { nl: 'Octopussen leven altijd in aquaria', en: 'Octopuses always live in aquariums' },
        { nl: 'Octopussen zijn de snelste zwemmers van de oceaan', en: 'Octopuses are the fastest swimmers in the ocean' },
        { nl: 'Een octopus verandert nooit van kleur', en: 'An octopus never changes colour' }
      ], answer: 0,
      explain: { nl: 'Elke alinea laat een ander bewijs van slimheid zien: camouflage, problemen oplossen, de armen en het korte leven.',
                 en: 'Every paragraph shows a different piece of evidence of intelligence: camouflage, problem-solving, the arms and the short life.' } }
  ]
},

{
  id: 'dieren-8', topic: 'dieren', level: 3, emoji: '🐦', scene: 'ocean',
  title: { nl: 'Hoe vinden trekvogels de weg?', en: 'How do migrating birds find their way?' },
  text: {
    nl: [
      "De grote stern is een klein vogeltje met een groot geheim. Hij weegt niet meer dan een tros druiven, maar vliegt elk jaar van de Noordpool naar de Zuidpool en weer terug. Dat is bijna zeventigduizend kilometer, bijna twee keer de aarde rond.",
      "Hoe vindt zo'n vogel zijn weg, zonder kaart, zonder gps en zonder ouders die de route wijzen? Jonge sterns vliegen namelijk vaak apart van de volwassen vogels. Toch komen de meesten precies op de goede plek aan. Onderzoekers breken zich al jaren het hoofd over die vraag.",
      "Eén antwoord ligt in de kop van de vogel. Trekvogels hebben cellen die gevoelig zijn voor het magneetveld van de aarde, net als het naaldje in een echt kompas. Daarmee voelen ze ruwweg waar het noorden en het zuiden liggen, zelfs in dikke mist of boven de open zee.",
      "Een kompas alleen is niet genoeg, want dat vertelt alleen een richting, geen bestemming. Daarom kijken vogels ook naar de sterren. Jonge vogels bestuderen in hun eerste zomer de draaiende sterrenhemel en onthouden rond welk punt alles draait. \"Het is alsof ze 's nachts een sterrenkaart uit hun hoofd leren,\" zegt bioloog Rens Holtkamp, die trekvogels al twintig jaar volgt met kleine zendertjes.",
      "Overdag gebruiken vogels vaak herkenningspunten: een kustlijn, een rivier, een bergketen. Ze combineren dus meerdere systemen tegelijk, als een reservekopie voor het geval er eentje uitvalt. Toch is niet alles ontrafeld. Waarom sommige sterns net iets oostelijker vliegen dan andere, blijft voorlopig een raadsel dat onderzoekers nog niet hebben opgelost."
    ],
    en: [
      "The Arctic tern is a small bird with a big secret. It weighs no more than a bunch of grapes, yet every year it flies from the North Pole to the South Pole and back again. That is almost seventy thousand kilometres, nearly twice around the earth.",
      "How does such a bird find its way, without a map, without GPS and without parents to show the route? Young terns often fly apart from the adult birds. Yet most of them still arrive exactly at the right place. Researchers have been puzzling over that question for years.",
      "One answer lies inside the bird's head. Migrating birds have cells that are sensitive to the earth's magnetic field, just like the needle in a real compass. With that they can roughly sense where north and south lie, even in thick fog or over the open sea.",
      "A compass alone is not enough, because it only gives a direction, not a destination. So birds also look at the stars. In their first summer, young birds study the turning night sky and remember the point everything seems to turn around. \"It's as if they learn a star map by heart at night,\" says biologist Rens Holtkamp, who has tracked migrating birds for twenty years using small transmitters.",
      "During the day birds often use landmarks: a coastline, a river, a mountain range. So they combine several systems at once, as a backup in case one of them fails. Still, not everything has been figured out. Why some terns fly a little further east than others remains, for now, a mystery researchers have not yet solved."
    ]
  },
  words: [
    { nl: 'trekvogels', en: 'migrating birds', defNl: 'vogels die elk jaar een lange reis maken naar een warmer of kouder gebied', defEn: 'birds that make a long journey every year to a warmer or colder area' },
    { nl: 'magneetveld', en: 'magnetic field', defNl: 'de onzichtbare kracht rond de aarde die een kompasnaald laat wijzen', defEn: 'the invisible force around the earth that makes a compass needle point' },
    { nl: 'herkenningspunten', en: 'landmarks', defNl: 'plekken die je makkelijk herkent, zoals een rivier of een berg', defEn: 'places you easily recognise, such as a river or a mountain' }
  ],
  questions: [
    { id: 'q1', type: 'mc', skill: 'letterlijk',
      q: { nl: 'Hoeveel kilometer vliegt de grote stern ongeveer per jaar?', en: 'About how many kilometres does the Arctic tern fly each year?' },
      options: [
        { nl: 'Bijna zeventigduizend kilometer', en: 'Almost seventy thousand kilometres' },
        { nl: 'Ongeveer duizend kilometer', en: 'About a thousand kilometres' },
        { nl: 'Precies honderd kilometer', en: 'Exactly a hundred kilometres' },
        { nl: 'Zeven kilometer', en: 'Seven kilometres' }
      ], answer: 0,
      explain: { nl: 'Alinea 1: "Dat is bijna zeventigduizend kilometer, bijna twee keer de aarde rond."',
                 en: 'Paragraph 1: "That is almost seventy thousand kilometres, nearly twice around the earth."' } },
    { id: 'q2', type: 'mc', skill: 'gevolgtrekking',
      q: { nl: 'Waarom komen jonge sterns toch op de goede plek aan, ook al vliegen ze zonder hun ouders?',
           en: 'Why do young terns still arrive at the right place, even though they fly without their parents?' },
      options: [
        { nl: 'Omdat ze zelf al meerdere manieren hebben om de weg te vinden, zoals het magneetveld en de sterren',
          en: 'Because they already have several ways of their own to find the way, such as the magnetic field and the stars' },
        { nl: 'Omdat ze een kaart bij zich dragen', en: 'Because they carry a map with them' },
        { nl: 'Omdat andere trekvogels ze altijd de hele weg begeleiden', en: 'Because other migrating birds always guide them the whole way' },
        { nl: 'Omdat ze de route van de vorige generatie uit hun geheugen erven', en: 'Because they inherit the previous generation\'s memories of the route' }
      ], answer: 0,
      explain: { nl: 'De tekst legt uit dat vogels een gevoel voor het magneetveld, de sterren én herkenningspunten gebruiken, zonder hulp van hun ouders nodig te hebben.',
                 en: 'The text explains that birds use a sense of the magnetic field, the stars and landmarks, without needing help from their parents.' } },
    { id: 'q3', type: 'mc', skill: 'verwijswoorden',
      q: { nl: '"Toch komen de meesten precies op de goede plek aan." Waar verwijst "de meesten" naar?',
           en: '"Yet most of them still arrive exactly at the right place." What does "most of them" point to?' },
      options: [
        { nl: 'Naar de meeste jonge sterns', en: 'To most of the young terns' },
        { nl: 'Naar de meeste onderzoekers', en: 'To most of the researchers' },
        { nl: 'Naar de meeste sterrenbeelden', en: 'To most of the star patterns' },
        { nl: 'Naar de meeste kustlijnen', en: 'To most of the coastlines' }
      ], answer: 0,
      explain: { nl: 'De zin ervoor gaat over jonge sterns die apart van de volwassenen vliegen. "De meesten" verwijst dus terug naar die jonge sterns.',
                 en: 'The sentence before is about young terns flying apart from the adults. "Most of them" refers back to those young terns.' } },
    { id: 'q4', type: 'mc', skill: 'structuur',
      q: { nl: 'De laatste alinea eindigt met: "Toch is niet alles ontrafeld." Wat doet het signaalwoord "toch" hier?',
           en: 'The last paragraph ends with: "Still, not everything has been figured out." What does the signal word "still" do here?' },
      options: [
        { nl: 'Het zet een tegenstelling neer: de vogels combineren knap veel systemen, maar toch blijft er een raadsel over',
          en: 'It sets up a contrast: the birds cleverly combine many systems, but a mystery still remains' },
        { nl: 'Het geeft een voorbeeld van een herkenningspunt', en: 'It gives an example of a landmark' },
        { nl: 'Het vertelt hoe lang het onderzoek al duurt', en: 'It tells how long the research has already taken' },
        { nl: 'Het sluit een opsomming van rivieren af', en: 'It closes off a list of rivers' }
      ], answer: 0,
      explain: { nl: '"Toch" laat zien dat er, ondanks alle knappe systemen die net zijn uitgelegd, nog steeds iets onopgelost blijft.',
                 en: '"Still" shows that, despite all the clever systems just explained, something remains unsolved.' } },
    { id: 'q5', type: 'gap', skill: 'woordenschat',
      q: { nl: 'Het magneetveld van de aarde is ___.', en: 'The earth\'s magnetic field is ___.' },
      options: [
        { nl: 'de onzichtbare kracht die een kompasnaald laat wijzen', en: 'the invisible force that makes a compass needle point' },
        { nl: 'de route die een vogel volgt', en: 'the route a bird follows' },
        { nl: 'een sterrenbeeld aan de nachtelijke hemel', en: 'a star pattern in the night sky' },
        { nl: 'een rivier die vogels als herkenningspunt gebruiken', en: 'a river birds use as a landmark' }
      ], answer: 0,
      explain: { nl: 'De tekst vergelijkt het gevoel van de vogel met het naaldje in een kompas, dat op het magneetveld reageert.',
                 en: 'The text compares the bird\'s sense to the needle in a compass, which reacts to the magnetic field.' } },
    { id: 'q6', type: 'mc', skill: 'hoofdgedachte',
      q: { nl: 'Wat is de hoofdgedachte van deze tekst?', en: 'What is the main idea of this text?' },
      options: [
        { nl: 'Trekvogels gebruiken meerdere systemen tegelijk om hun weg over duizenden kilometers te vinden',
          en: 'Migrating birds use several systems at once to find their way over thousands of kilometres' },
        { nl: 'De grote stern is het zwaarste vogeltje ter wereld', en: 'The Arctic tern is the heaviest little bird in the world' },
        { nl: 'Bioloog Rens Holtkamp heeft alle vogelraadsels opgelost', en: 'Biologist Rens Holtkamp has solved all bird mysteries' },
        { nl: 'Vogels vliegen altijd samen met hun ouders', en: 'Birds always fly together with their parents' }
      ], answer: 0,
      explain: { nl: 'Elke alinea beschrijft een ander hulpmiddel: het magneetveld, de sterren en herkenningspunten, allemaal om de weg te vinden.',
                 en: 'Every paragraph describes a different tool: the magnetic field, the stars and landmarks, all used to find the way.' } }
  ]
},

{
  id: 'dieren-9', topic: 'dieren', level: 4, emoji: '🐜', scene: 'forest',
  title: { nl: 'Het geheime leven van een mierenkolonie', en: 'The secret life of an ant colony' },
  text: {
    nl: [
      "Een mierenkolonie kan wel een miljoen mieren tellen. Van bovenaf lijkt het een chaotische mierenhoop, met mieren die kriskras door elkaar lopen. Toch werkt de hele kolonie samen als één groot wezen. Wetenschappers noemen dat een superorganisme: apart is een mier bijna niks, maar met miljoenen tegelijk vormen ze iets wat bijna op een dier met één lichaam lijkt.",
      "De koningin zit vaak diep in het nest, in een kamer helemaal voor haar alleen. Veel mensen denken dat zij de baas is die de kolonie bestuurt. Dat klopt niet. De koningin doet maar één ding: eitjes leggen, dag in dag uit, soms wel duizenden per dag. De echte beslissingen worden ergens anders genomen.",
      "Iedere werkster heeft namelijk een eigen taak. Sommige mieren zoeken voedsel buiten het nest. Andere verzorgen de eitjes en de larven. Weer andere bouwen gangen of verdedigen de ingang tegen indringers. Een werkster wisselt vaak van baan naarmate ze ouder wordt: jonge mieren blijven eerst binnen bij de larven, oudere mieren gaan naar buiten om te foerageren, want dat is gevaarlijker werk.",
      "Hoe weet een mier eigenlijk waar het eten ligt? Als een werkster voedsel vindt, laat ze op de terugweg een spoortje geurstof achter, feromoon genoemd. Andere mieren ruiken dat spoor en volgen het. Vinden zij ook eten, dan versterken zij het spoor met hun eigen feromoon. Zo groeit het pad steeds sterker, totdat het voedsel op is. Dan verdampt de geur langzaam en verdwijnt het spoor vanzelf.",
      "Niemand geeft een mier ooit een bevel. Er is geen bestuurder die zegt: jij zoekt eten, jij bewaakt de poort. Toch ontstaat er orde uit duizenden kleine beslissingen. Vergelijk het met de cellen in jouw lichaam: geen enkele cel kent het hele plaatje, maar samen zorgen ze ervoor dat jij kunt lopen, denken en ademen.",
      "Een enkele mier leeft vaak maar een paar maanden. Toch kan een kolonie soms wel dertig jaar bestaan, doordat er steeds nieuwe werksters bijkomen. Net als bij een lichaam waarvan de cellen steeds vervangen worden terwijl jij dezelfde persoon blijft, blijft de kolonie bestaan, ook al is geen enkele mier daarin hetzelfde gebleven."
    ],
    en: [
      "An ant colony can hold as many as a million ants. From above it looks like a chaotic anthill, with ants scurrying every which way. Yet the whole colony works together as a single being. Scientists call that a superorganism: on its own an ant is almost nothing, but with millions together they form something that resembles an animal with one body.",
      "The queen often sits deep inside the nest, in a chamber all to herself. Many people think she is the boss who runs the colony. That is not true. The queen really only does one thing: lay eggs, day after day, sometimes thousands a day. The real decisions are made somewhere else.",
      "Every worker has her own job. Some ants search for food outside the nest. Others tend the eggs and the larvae. Still others dig tunnels or defend the entrance against intruders. A worker often changes jobs as she gets older: young ants first stay inside with the larvae, while older ants go outside to forage, because that is more dangerous work.",
      "How does an ant actually know where food is? When a worker finds food, she leaves a trail of scent on her way back, called a pheromone. Other ants smell that trail and follow it. If they find food too, they reinforce the trail with their own pheromone. That way the path keeps growing stronger, until the food runs out. Then the scent slowly evaporates and the trail disappears on its own.",
      "No one ever gives an ant an order. There is no manager who says: you look for food, you guard the gate. Yet order still emerges from thousands of small decisions. Compare it to the cells in your own body: no single cell knows the whole picture, but together they let you walk, think and breathe.",
      "A single ant often lives only a few months. Yet a colony can sometimes last thirty years, because new workers keep being born. Just like a body whose cells keep being replaced while you stay the same person, the colony keeps existing, even though not a single ant in it has stayed the same."
    ]
  },
  words: [
    { nl: 'superorganisme', en: 'superorganism', defNl: 'een grote groep dieren die samen werkt als één levend wezen', defEn: 'a large group of animals that works together as a single living being' },
    { nl: 'feromoon', en: 'pheromone', defNl: 'een geurstof waarmee dieren zoals mieren met elkaar communiceren', defEn: 'a scent substance animals such as ants use to communicate with each other' },
    { nl: 'foerageren', en: 'to forage', defNl: 'buiten het nest op zoek gaan naar voedsel', defEn: 'to go looking for food outside the nest' }
  ],
  questions: [
    { id: 'q1', type: 'mc', skill: 'letterlijk',
      q: { nl: 'Wat doet de koningin vooral, de hele dag door?', en: 'What does the queen mostly do, all day long?' },
      options: [
        { nl: 'Eitjes leggen', en: 'Lay eggs' },
        { nl: 'De kolonie besturen', en: 'Run the colony' },
        { nl: 'Voedsel zoeken', en: 'Search for food' },
        { nl: 'Gangen graven', en: 'Dig tunnels' }
      ], answer: 0,
      explain: { nl: 'Alinea 2: "De koningin doet maar één ding: eitjes leggen."',
                 en: 'Paragraph 2: "The queen really only does one thing: lay eggs."' } },
    { id: 'q2', type: 'mc', skill: 'verwijswoorden',
      q: { nl: '"Andere mieren ruiken dat spoor en volgen het." Waar verwijst "dat spoor" naar?',
           en: '"Other ants smell that trail and follow it." What does "that trail" point to?' },
      options: [
        { nl: 'Naar het spoor van feromoon dat de werkster op de terugweg achterliet',
          en: 'To the pheromone trail the worker left on her way back' },
        { nl: 'Naar het spoor van de koningin naar haar kamer', en: 'To the queen\'s trail to her chamber' },
        { nl: 'Naar de gangen die de bouwers graven', en: 'To the tunnels the builders dig' },
        { nl: 'Naar het pad dat de indringers gebruiken', en: 'To the path the intruders use' }
      ], answer: 0,
      explain: { nl: 'De zin ervoor vertelt dat een werkster op de terugweg een spoortje feromoon achterlaat. "Dat spoor" verwijst daarnaar terug.',
                 en: 'The previous sentence explains a worker leaves a pheromone trail on the way back. "That trail" refers back to it.' } },
    { id: 'q3', type: 'mc', skill: 'gevolgtrekking',
      q: { nl: 'Wat kun je afleiden uit het feit dat een kolonie soms wel dertig jaar bestaat, terwijl een mier maar een paar maanden leeft?',
           en: 'What can you infer from the fact that a colony can last thirty years, even though a single ant lives only a few months?' },
      options: [
        { nl: 'Er komen steeds nieuwe werksters bij die de oude vervangen, zodat de kolonie blijft bestaan',
          en: 'New workers keep being born to replace the old ones, so the colony keeps existing' },
        { nl: 'Mieren in een kolonie worden veel ouder dan mieren buiten een kolonie', en: 'Ants in a colony live much longer than ants outside a colony' },
        { nl: 'De koningin doet al het werk in haar eentje', en: 'The queen does all the work by herself' },
        { nl: 'Een kolonie stopt met groeien zodra de eerste mier sterft', en: 'A colony stops growing as soon as the first ant dies' }
      ], answer: 0,
      explain: { nl: 'De tekst legt uit dat de kolonie blijft bestaan doordat er steeds nieuwe werksters bijkomen, net als cellen in een lichaam die vervangen worden.',
                 en: 'The text explains the colony keeps existing because new workers keep being added, just like cells in a body being replaced.' } },
    { id: 'q4', type: 'gap', skill: 'woordenschat',
      q: { nl: 'Een feromoon is ___.', en: 'A pheromone is ___.' },
      options: [
        { nl: 'een geurstof waarmee mieren met elkaar communiceren', en: 'a scent substance ants use to communicate with each other' },
        { nl: 'de kamer waar de koningin woont', en: 'the chamber where the queen lives' },
        { nl: 'een soort mier die de ingang bewaakt', en: 'a type of ant that guards the entrance' },
        { nl: 'het geluid dat mieren maken', en: 'the sound ants make' }
      ], answer: 0,
      explain: { nl: 'De tekst noemt het letterlijk: "een spoortje geurstof achter, feromoon genoemd."',
                 en: 'The text says it directly: "a trail of scent... called a pheromone."' } },
    { id: 'q5', type: 'order', skill: 'volgorde',
      q: { nl: 'Zet uit hoe een voedselspoor van feromoon ontstaat en weer verdwijnt.',
           en: 'Put in order how a pheromone food trail appears and disappears.' },
      items: [
        { nl: 'Een werkster vindt voedsel buiten het nest.', en: 'A worker finds food outside the nest.' },
        { nl: 'Ze laat op de terugweg een spoor van feromoon achter.', en: 'On the way back she leaves a trail of pheromone.' },
        { nl: 'Andere mieren ruiken het spoor en volgen het.', en: 'Other ants smell the trail and follow it.' },
        { nl: 'Vinden zij ook eten, dan versterken zij het spoor.', en: 'If they find food too, they reinforce the trail.' },
        { nl: 'Is het voedsel op, dan verdampt de geur en verdwijnt het spoor.', en: 'Once the food runs out, the scent evaporates and the trail disappears.' }
      ], answer: [0, 1, 2, 3, 4],
      explain: { nl: 'De vierde alinea beschrijft precies deze volgorde, van vinden tot verdwijnen.',
                 en: 'The fourth paragraph describes exactly this order, from finding to disappearing.' } },
    { id: 'q6', type: 'mc', skill: 'structuur',
      q: { nl: 'Alinea 5 zegt: "Toch ontstaat er orde uit duizenden kleine beslissingen." Wat doet "toch" hier?',
           en: 'Paragraph 5 says: "Yet order still emerges from thousands of small decisions." What does "yet" do here?' },
      options: [
        { nl: 'Het zet een tegenstelling neer: niemand geeft bevelen, en toch ontstaat er orde',
          en: 'It sets up a contrast: nobody gives orders, and yet order still emerges' },
        { nl: 'Het geeft een voorbeeld van een indringer', en: 'It gives an example of an intruder' },
        { nl: 'Het vertelt hoeveel beslissingen de koningin neemt', en: 'It tells how many decisions the queen makes' },
        { nl: 'Het sluit de uitleg over feromonen af', en: 'It closes off the explanation about pheromones' }
      ], answer: 0,
      explain: { nl: '"Toch" laat het onverwachte zien: zonder baas of bevelen ontstaat er tóch een werkende orde.',
                 en: '"Yet" shows the unexpected part: without a boss or orders, a working order still emerges.' } },
    { id: 'q7', type: 'multi', skill: 'letterlijk',
      q: { nl: 'Welke twee taken voeren werksters uit? Kies er 2.', en: 'Which two jobs do workers carry out? Pick 2.' },
      options: [
        { nl: 'Voedsel zoeken buiten het nest', en: 'Search for food outside the nest' },
        { nl: 'De eitjes en larven verzorgen', en: 'Tend the eggs and the larvae' },
        { nl: 'Zelf eitjes leggen', en: 'Lay eggs themselves' },
        { nl: 'Een nieuwe koningin kiezen', en: 'Choose a new queen' }
      ], answer: [0, 1],
      explain: { nl: 'Alinea 3 noemt precies deze twee taken. Eitjes leggen doet alleen de koningin, en een koningin "kiezen" komt niet in de tekst voor.',
                 en: 'Paragraph 3 names exactly these two jobs. Only the queen lays eggs, and "choosing" a queen is not in the text at all.' } },
    { id: 'q8', type: 'mc', skill: 'hoofdgedachte',
      q: { nl: 'Wat is de hoofdgedachte van deze tekst?', en: 'What is the main idea of this text?' },
      options: [
        { nl: 'Een mierenkolonie werkt samen als één superorganisme, zonder dat iemand de baas is',
          en: 'An ant colony works together as one superorganism, without anyone being in charge' },
        { nl: 'De koningin bestuurt de hele kolonie persoonlijk', en: 'The queen personally rules the whole colony' },
        { nl: 'Mieren leven maar een paar dagen', en: 'Ants live only a few days' },
        { nl: 'Feromonen zijn gevaarlijk voor mieren', en: 'Pheromones are dangerous for ants' }
      ], answer: 0,
      explain: { nl: 'Elke alinea laat zien hoe de kolonie zonder leider toch goed georganiseerd is: taakverdeling, feromonen en het vergelijk met een lichaam.',
                 en: 'Every paragraph shows how the colony is well organised without a leader: division of labour, pheromones and the comparison with a body.' } }
  ]
},

{
  id: 'dieren-10', topic: 'dieren', level: 5, emoji: '🦁', scene: 'default',
  title: { nl: 'Moeten dierentuinen verdwijnen?', en: 'Should zoos disappear?' },
  text: {
    nl: [
      "In dierentuinen over de hele wereld lopen olifanten, ijsberen en gorilla's rond, terwijl duizenden bezoekers toekijken. Al meer dan honderd jaar gaan mensen naar de dierentuin om dieren te bekijken die ze anders nooit zouden zien. Maar de laatste jaren groeit de vraag: hebben dierentuinen nog wel een plek in deze tijd, of moeten ze verdwijnen?",
      "Voorstanders wijzen vooral op het behoud van bedreigde diersoorten. Van sommige dieren, zoals bepaalde soorten neushoorn, leven er nog maar een paar honderd exemplaren in het wild. Dierentuinen houden fokprogramma's bij, waarbij dieren van over de hele wereld met elkaar gekoppeld worden om de genenpool gezond te houden. Zonder die programma's, zeggen zij, waren sommige soorten al uitgestorven.",
      "Ook educatie is volgens voorstanders belangrijk. \"Een kind dat oog in oog staat met een leeuw, vergeet dat nooit meer,\" zegt dierentuindirecteur Marloes Stins. \"Wie een dier van dichtbij ziet, gaat er sneller iets voor doen: geld doneren, minder plastic gebruiken, opkomen voor de natuur.\" Onderzoek naar hoeveel bezoekers hun gedrag daadwerkelijk veranderen, is er overigens nauwelijks.",
      "Tegenstanders zien vooral het dierenwelzijn over het hoofd. Een ijsbeer zwerft in het wild wel honderden kilometers per week; in een dierentuin past dat nooit in een verblijf, hoe groot ook. Sommige dieren vertonen daardoor stereotiep gedrag: ze lopen eindeloos heen en weer, of bijten op de tralies. Dat is volgens gedragsbiologen een teken van chronische stress.",
      "Bovendien, zeggen tegenstanders, worden maar weinig dieren uit fokprogramma's ooit echt teruggezet in het wild. De meeste blijven hun leven lang achter glas of hek. Dan is het niet zozeer natuurbehoud, maar vooral een manier om bezoekers te trekken, verpakt als een goed doel.",
      "Toch is niet elke dierentuin hetzelfde. Sommige parken hebben de kooien van vroeger vervangen door grote, natuurlijke verblijven, en werken écht mee aan het terugzetten van dieren, zoals de Arabische oryx, die dankzij fokprogramma's weer in de woestijn rondloopt. Andere dierentuinen zijn eigenlijk niet veel meer dan een pretpark met dieren erbij.",
      "Het antwoord hangt dus af van de vraag welke dierentuin je precies bedoelt. Moet je alle dierentuinen sluiten om een paar slechte voorbeelden, of juist de goede beschermen en de slechte aanpakken? Wetenschappers, dierentuinen en dierenbeschermers praten er nog steeds over. En wat vind jij?"
    ],
    en: [
      "In zoos all over the world, elephants, polar bears and gorillas roam around while thousands of visitors watch. For more than a hundred years people have gone to zoos to see animals they would otherwise never encounter. But in recent years a question keeps growing: do zoos still have a place today, or should they disappear?",
      "Supporters point mainly to the conservation of endangered species. Of some animals, such as certain kinds of rhino, only a few hundred remain in the wild. Zoos run breeding programmes, pairing animals from all over the world to keep the gene pool healthy. Without those programmes, they say, some species would already be extinct.",
      "Supporters also see education as important. \"A child who stands eye to eye with a lion never forgets it,\" says zoo director Marloes Stins. \"Someone who sees an animal up close is more likely to act for it: donate money, use less plastic, stand up for nature.\" Research into how many visitors actually change their behaviour is, however, scarce.",
      "Opponents mainly point to animal welfare being overlooked. In the wild a polar bear roams hundreds of kilometres a week; in a zoo that never fits into an enclosure, however large. As a result, some animals show stereotypic behaviour: pacing back and forth endlessly, or biting at the bars. Behavioural biologists see that as a sign of chronic stress.",
      "What is more, opponents say, only a few animals from breeding programmes are ever actually released back into the wild. Most spend their whole lives behind glass or fencing. In that case it is not so much conservation, but mainly a way to attract visitors, dressed up as a good cause.",
      "Still, not every zoo is the same. Some parks have replaced the old-fashioned cages with large, natural enclosures, and genuinely help release animals, such as the Arabian oryx, which thanks to breeding programmes now roams the desert again. Other zoos are really little more than an amusement park with animals added.",
      "So the answer depends on which zoo you actually mean. Should you close every zoo because of a few bad examples, or rather protect the good ones and fix the bad ones? Scientists, zoos and animal welfare groups are still talking it over. And what do you think?"
    ]
  },
  words: [
    { nl: 'fokprogramma\'s', en: 'breeding programmes', defNl: 'plannen om dieren gecontroleerd jongen te laten krijgen, om een soort te redden', defEn: 'plans to let animals breed in a controlled way, in order to save a species' },
    { nl: 'genenpool', en: 'gene pool', defNl: 'alle verschillende erfelijke eigenschappen die binnen een diersoort voorkomen', defEn: 'all the different hereditary traits found within an animal species' },
    { nl: 'stereotiep gedrag', en: 'stereotypic behaviour', defNl: 'hetzelfde bewegen dat een dier steeds weer herhaalt, vaak door stress', defEn: 'the same movement an animal repeats over and over, often caused by stress' }
  ],
  questions: [
    { id: 'q1', type: 'mc', skill: 'letterlijk',
      q: { nl: 'Wat doen fokprogramma\'s volgens de tekst?', en: 'What do breeding programmes do, according to the text?' },
      options: [
        { nl: 'Dieren van over de hele wereld koppelen om de genenpool gezond te houden',
          en: 'Pair animals from all over the world to keep the gene pool healthy' },
        { nl: 'Dieren africhten voor shows', en: 'Train animals for shows' },
        { nl: 'Bezoekers leren hoe ze een dier moeten voeren', en: 'Teach visitors how to feed an animal' },
        { nl: 'Geld inzamelen voor nieuwe verblijven', en: 'Raise money for new enclosures' }
      ], answer: 0,
      explain: { nl: 'Alinea 2: "Dierentuinen houden fokprogramma\'s bij, waarbij dieren van over de hele wereld met elkaar gekoppeld worden om de genenpool gezond te houden."',
                 en: 'Paragraph 2: "Zoos run breeding programmes, pairing animals from all over the world to keep the gene pool healthy."' } },
    { id: 'q2', type: 'sort', skill: 'feitmening',
      q: { nl: 'Is het een feit of een mening? Zet elke zin in de goede groep.',
           en: 'Fact or opinion? Put every sentence in the right group.' },
      bins: [{ nl: 'Feit', en: 'Fact' }, { nl: 'Mening', en: 'Opinion' }],
      items: [
        { nl: 'Van sommige neushoornsoorten leven er nog maar een paar honderd exemplaren in het wild.',
          en: 'Of some rhino species, only a few hundred remain in the wild.', bin: 0 },
        { nl: 'Een kind dat oog in oog staat met een leeuw, vergeet dat nooit meer.',
          en: 'A child who stands eye to eye with a lion never forgets it.', bin: 1 },
        { nl: 'Een ijsbeer zwerft in het wild honderden kilometers per week.',
          en: 'In the wild a polar bear roams hundreds of kilometres a week.', bin: 0 },
        { nl: 'Het is niet zozeer natuurbehoud, maar vooral een manier om bezoekers te trekken.',
          en: 'It is not so much conservation, but mainly a way to attract visitors.', bin: 1 }
      ],
      explain: { nl: 'Een feit kun je nameten of opzoeken, zoals aantallen en afstanden. Een mening herken je aan een oordeel, zoals "vergeet dat nooit meer" of "vooral een manier om".',
                 en: 'A fact can be measured or looked up, like numbers and distances. An opinion shows a judgment, like "never forgets it" or "mainly a way to."' } },
    { id: 'q3', type: 'mc', skill: 'doel',
      q: { nl: 'Wat wil de schrijver vooral bereiken met deze tekst?', en: 'What is the writer mainly trying to achieve with this text?' },
      options: [
        { nl: 'Je laten nadenken over dierentuinen, door voor- en tegenargumenten eerlijk te laten zien',
          en: 'Make you think about zoos by fairly showing arguments for and against' },
        { nl: 'Je overtuigen dat alle dierentuinen zo snel mogelijk dicht moeten', en: 'Convince you that every zoo must close as fast as possible' },
        { nl: 'Reclame maken voor een bepaalde dierentuin', en: 'Advertise for one particular zoo' },
        { nl: 'Uitleggen hoe je zelf een ijsbeer verzorgt', en: 'Explain how to take care of a polar bear yourself' }
      ], answer: 0,
      explain: { nl: 'De schrijver laat eerst voorstanders aan het woord, dan tegenstanders, en eindigt met "En wat vind jij?". Dat is geen overtuigen maar laten nadenken.',
                 en: 'The writer first gives supporters a voice, then opponents, and ends with "And what do you think?" That is inviting thought, not persuading.' } },
    { id: 'q4', type: 'mc', skill: 'verwijswoorden',
      q: { nl: '"De meeste blijven hun leven lang achter glas of hek." Waar verwijst "de meeste" naar?',
           en: '"Most spend their whole lives behind glass or fencing." What does "most" point to?' },
      options: [
        { nl: 'Naar de meeste dieren uit fokprogramma\'s', en: 'To most of the animals from breeding programmes' },
        { nl: 'Naar de meeste dierentuinen', en: 'To most of the zoos' },
        { nl: 'Naar de meeste bezoekers', en: 'To most of the visitors' },
        { nl: 'Naar de meeste gedragsbiologen', en: 'To most of the behavioural biologists' }
      ], answer: 0,
      explain: { nl: 'De zin ervoor gaat over dieren uit fokprogramma\'s die maar zelden teruggezet worden. "De meeste" verwijst dus terug naar die dieren.',
                 en: 'The sentence before is about animals from breeding programmes that are rarely released. "Most" refers back to those animals.' } },
    { id: 'q5', type: 'multi', skill: 'gevolgtrekking',
      q: { nl: 'Welke twee argumenten gebruiken tegenstanders van dierentuinen? Kies er 2.',
           en: 'Which two arguments do opponents of zoos use? Pick 2.' },
      options: [
        { nl: 'Dieren krijgen vaak te weinig ruimte, waardoor ze stereotiep gedrag vertonen',
          en: 'Animals often get too little space, causing them to show stereotypic behaviour' },
        { nl: 'Maar weinig dieren uit fokprogramma\'s keren echt terug naar het wild',
          en: 'Only a few animals from breeding programmes really return to the wild' },
        { nl: 'Dierentuinen zijn te duur voor gemeentes om te betalen', en: 'Zoos are too expensive for local councils to pay for' },
        { nl: 'Kinderen leren helemaal niets van een bezoek aan de dierentuin', en: 'Children learn absolutely nothing from visiting a zoo' }
      ], answer: [0, 1],
      explain: { nl: 'Alinea 4 en 5 noemen precies deze twee argumenten. Over de kosten voor gemeentes of het "helemaal niets" leren zegt de tekst niets.',
                 en: 'Paragraphs 4 and 5 name exactly these two arguments. The text says nothing about council costs or learning "absolutely nothing."' } },
    { id: 'q6', type: 'tf', skill: 'gevolgtrekking',
      q: { nl: 'Uit de tekst blijkt dat alle dierentuinen precies hetzelfde zijn.', en: 'The text shows that all zoos are exactly the same.' },
      answer: false,
      explain: { nl: 'Alinea 6 laat juist het tegenovergestelde zien: sommige dierentuinen hebben grote, natuurlijke verblijven, andere zijn eigenlijk een pretpark.',
                 en: 'Paragraph 6 shows exactly the opposite: some zoos have large, natural enclosures, others are really just an amusement park.' } },
    { id: 'q7', type: 'mc', skill: 'structuur',
      q: { nl: 'Alinea 6 begint met "Toch". Wat gebeurt er in die alinea?', en: 'Paragraph 6 begins with "Still." What happens in that paragraph?' },
      options: [
        { nl: 'De schrijver zwakt het felle voor-en-tegen af en laat zien dat niet elke dierentuin hetzelfde is',
          en: 'The writer softens the sharp for-and-against and shows not every zoo is the same' },
        { nl: 'De schrijver herhaalt het argument van de voorstanders', en: 'The writer repeats the supporters\' argument' },
        { nl: 'De schrijver vertelt hoe je een ijsbeer voert', en: 'The writer explains how to feed a polar bear' },
        { nl: 'De schrijver geeft de tegenstanders helemaal gelijk', en: 'The writer fully agrees with the opponents' }
      ], answer: 0,
      explain: { nl: '"Toch is niet elke dierentuin hetzelfde" kondigt een nuance aan na de felle argumenten voor en tegen.',
                 en: '"Still, not every zoo is the same" announces a nuance after the sharp arguments for and against.' } },
    { id: 'q8', type: 'mc', skill: 'samenvatten',
      q: { nl: 'Welke samenvatting past het beste bij de hele tekst?', en: 'Which summary fits the whole text best?' },
      options: [
        { nl: 'Dierentuinen helpen bedreigde dieren en leren bezoekers over de natuur, maar dieren hebben er vaak weinig ruimte en niet elk fokprogramma werkt echt goed; het hangt af van de dierentuin of het goed of slecht uitpakt.',
          en: 'Zoos help endangered animals and teach visitors about nature, but animals often have little space and not every breeding programme really works; it depends on the zoo whether it turns out well or badly.' },
        { nl: 'Dierentuinen bestaan vooral om kinderen te vermaken met leeuwen en olifanten.',
          en: 'Zoos mainly exist to entertain children with lions and elephants.' },
        { nl: 'Alle dieren uit fokprogramma\'s worden uiteindelijk teruggezet in het wild.',
          en: 'All animals from breeding programmes are eventually released back into the wild.' },
        { nl: 'IJsberen voelen zich altijd prima in een verblijf in de dierentuin.',
          en: 'Polar bears always feel perfectly fine in a zoo enclosure.' }
      ], answer: 0,
      explain: { nl: 'Een goede samenvatting pakt de kern van elke alinea: behoud, educatie, welzijn, kritiek op fokprogramma\'s en de nuance dat niet elke dierentuin hetzelfde is. De andere antwoorden zijn losse details.',
                 en: 'A good summary captures the core of every paragraph: conservation, education, welfare, criticism of breeding programmes and the nuance that not every zoo is the same. The others are single details.' } },
    { id: 'q9', type: 'mc', skill: 'woordenschat',
      q: { nl: 'Wat betekent "genenpool" in deze tekst?', en: 'What does "gene pool" mean in this text?' },
      options: [
        { nl: 'Alle verschillende erfelijke eigenschappen die binnen een diersoort voorkomen',
          en: 'All the different hereditary traits found within an animal species' },
        { nl: 'Een zwembad speciaal voor dierentuindieren', en: 'A swimming pool especially for zoo animals' },
        { nl: 'Het geld dat een dierentuin verdient aan kaartjes', en: 'The money a zoo earns from tickets' },
        { nl: 'Een groep bezoekers die samen de dierentuin bezoekt', en: 'A group of visitors who visit the zoo together' }
      ], answer: 0,
      explain: { nl: 'De tekst legt uit dat fokprogramma\'s dieren koppelen "om de genenpool gezond te houden": het gaat om erfelijke eigenschappen, niet om zwemmen.',
                 en: 'The text explains breeding programmes pair animals "to keep the gene pool healthy": it is about hereditary traits, not swimming.' } }
  ]
}
]);
