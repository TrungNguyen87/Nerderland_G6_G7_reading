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
