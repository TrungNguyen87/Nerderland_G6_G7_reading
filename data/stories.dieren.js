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
