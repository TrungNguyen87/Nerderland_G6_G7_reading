/* Wereld 7 - Eten & Koken */
addStories([
{
  id: 'eten-1', topic: 'eten', level: 1, emoji: '🥖', scene: 'kitchen',
  title: { nl: 'Waarom rijst brood?', en: 'Why does bread rise?' },
  text: {
    nl: [
      "In de bakkerij ligt om vijf uur 's ochtends al een bult deeg op tafel. Het is een taai, plakkerig ding. Twee uur later is diezelfde bult twee keer zo groot. Er is niets bij gedaan. Hoe kan dat?",
      "Het geheim heet gist. Gist bestaat uit heel kleine zwammetjes, veel kleiner dan je met je ogen kunt zien. Ze leven, net als jij. En net als jij hebben ze eten nodig.",
      "In deeg zit meel, en in meel zit suiker. Dat is precies wat gist lekker vindt. Terwijl de zwammetjes die suiker opeten, blazen ze een gas uit. Dat gas heet koolzuur. Het blijft vastzitten in het deeg, in duizenden kleine bellen.",
      "Door al die bellen wordt het deeg steeds dikker. De bakker noemt dat rijzen. Hoe warmer het is, hoe sneller het gaat. Daarom zet een bakker zijn deeg vlak bij de oven en niet bij het open raam.",
      "In de oven gaat het snel. De bellen zetten uit en de gist gaat dood van de hitte. Wat overblijft zijn de holletjes. Kijk maar eens goed naar een snee brood: al die gaatjes zijn het werk van iets wat leefde."
    ],
    en: [
      "At five in the morning a lump of dough is already lying on the bakery table. It is a tough, sticky thing. Two hours later the same lump is twice as big. Nothing has been added to it. How is that possible?",
      "The secret is called yeast. Yeast is made of tiny little fungi, far too small to see with your eyes. They are alive, just like you. And just like you, they need food.",
      "Dough contains flour, and flour contains sugar. That is exactly what yeast likes. While the little fungi eat that sugar, they blow out a gas. That gas is called carbon dioxide. It stays trapped inside the dough, in thousands of little bubbles.",
      "All those bubbles make the dough grow thicker and thicker. Bakers call that rising. The warmer it is, the faster it goes. That is why a baker puts the dough near the oven and not by the open window.",
      "In the oven it goes quickly. The bubbles expand and the yeast dies from the heat. What is left behind are the little holes. Take a good look at a slice of bread: all those holes are the work of something that was alive."
    ]
  },
  words: [
    { nl: 'deeg', en: 'dough', defNl: 'het mengsel van meel en water waar je brood van bakt', defEn: 'the mix of flour and water that bread is baked from' },
    { nl: 'gist', en: 'yeast', defNl: 'heel kleine zwammetjes die deeg laten rijzen', defEn: 'tiny fungi that make dough rise' },
    { nl: 'rijzen', en: 'to rise', defNl: 'vanzelf groter worden, zoals deeg', defEn: 'to grow bigger by itself, like dough' }
  ],
  questions: [
    { id: 'q1', type: 'mc', skill: 'letterlijk',
      q: { nl: 'Wat eet gist in het deeg?', en: 'What does yeast eat in the dough?' },
      options: [
        { nl: 'De suiker die in meel zit', en: 'The sugar in the flour' },
        { nl: 'Het water', en: 'The water' },
        { nl: 'Het zout', en: 'The salt' },
        { nl: 'De boter', en: 'The butter' }
      ], answer: 0,
      explain: { nl: 'In alinea 3 staat: in meel zit suiker, en dat is precies wat gist lekker vindt.',
                 en: 'Paragraph 3 says flour contains sugar, and that is exactly what yeast likes.' } },
    { id: 'q2', type: 'tf', skill: 'letterlijk',
      q: { nl: 'De bakker doet extra lucht in het deeg om het te laten rijzen.',
           en: 'The baker adds extra air to the dough to make it rise.' },
      answer: false,
      explain: { nl: 'Er wordt niets bij gedaan. Het gas komt uit de gist zelf.',
                 en: 'Nothing is added. The gas comes from the yeast itself.' } },
    { id: 'q3', type: 'gap', skill: 'woordenschat',
      q: { nl: 'Rijzen betekent dat het deeg ___.', en: 'Rising means the dough ___.' },
      options: [
        { nl: 'vanzelf groter wordt', en: 'grows bigger by itself' },
        { nl: 'hard wordt', en: 'goes hard' },
        { nl: 'bruin wordt', en: 'turns brown' },
        { nl: 'in stukjes valt', en: 'falls apart' }
      ], answer: 0,
      explain: { nl: 'In alinea 4 staat: door de bellen wordt het deeg steeds dikker, en dat noemt de bakker rijzen.',
                 en: 'Paragraph 4 says the bubbles make the dough grow thicker, and bakers call that rising.' } },
    { id: 'q4', type: 'mc', skill: 'gevolgtrekking',
      q: { nl: 'Waarom zet een bakker zijn deeg dicht bij de oven?',
           en: 'Why does a baker put the dough near the oven?' },
      options: [
        { nl: 'Omdat het deeg dan sneller rijst in de warmte', en: 'Because the dough rises faster in the warmth' },
        { nl: 'Omdat het daar het schoonst is', en: 'Because it is cleanest there' },
        { nl: 'Omdat de oven het deeg kneedt', en: 'Because the oven kneads the dough' },
        { nl: 'Omdat het deeg dan minder plakt', en: 'Because the dough sticks less there' }
      ], answer: 0,
      explain: { nl: 'Alinea 4: hoe warmer het is, hoe sneller het rijzen gaat.',
                 en: 'Paragraph 4: the warmer it is, the faster the rising goes.' } },
    { id: 'q5', type: 'order', skill: 'volgorde',
      q: { nl: 'Zet op volgorde wat er met het deeg gebeurt.', en: 'Put in order what happens to the dough.' },
      items: [
        { nl: 'De gist eet de suiker uit het meel.', en: 'The yeast eats the sugar from the flour.' },
        { nl: 'Er ontstaan kleine bellen gas in het deeg.', en: 'Small bubbles of gas appear in the dough.' },
        { nl: 'Het deeg wordt twee keer zo groot.', en: 'The dough grows twice as big.' },
        { nl: 'In de oven gaat de gist dood en blijven de gaatjes over.', en: 'In the oven the yeast dies and the holes are left.' }
      ], answer: [0, 1, 2, 3],
      explain: { nl: 'Eerst eten, dan bellen, dan rijzen, en pas in de oven blijven de gaatjes over.',
                 en: 'First eating, then bubbles, then rising, and only in the oven the holes remain.' } },
    { id: 'q6', type: 'mc', skill: 'hoofdgedachte',
      q: { nl: 'Waar gaat dit stuk vooral over?', en: 'What is this text mainly about?' },
      options: [
        { nl: 'Hoe kleine zwammetjes ervoor zorgen dat brood groot en luchtig wordt',
          en: 'How tiny fungi make bread big and airy' },
        { nl: 'Hoe vroeg een bakker moet opstaan', en: 'How early a baker has to get up' },
        { nl: 'Waarom brood bruin wordt', en: 'Why bread turns brown' },
        { nl: 'Hoeveel meel er in een brood gaat', en: 'How much flour goes into a loaf' }
      ], answer: 0,
      explain: { nl: 'Elke alinea gaat over gist en de bellen die het deeg laten rijzen.',
                 en: 'Every paragraph is about yeast and the bubbles that make the dough rise.' } }
  ]
},

{
  id: 'eten-2', topic: 'eten', level: 2, emoji: '🍫', scene: 'farm',
  title: { nl: 'De reis van een cacaoboon', en: 'The journey of a cocoa bean' },
  text: {
    nl: [
      "Aan een boom in Ivoorkust hangt een vrucht zo groot als een kleine meloen. Hij is geel en hobbelig en groeit niet aan een tak, maar recht uit de stam. In die vrucht zitten ongeveer veertig witte bonen, in een laagje dat naar citroen smaakt. Van chocola is nog niets te merken.",
      "De boer hakt de vrucht open en schept de bonen op een stapel bladeren. Daar blijven ze een week liggen. In die week gaan ze gisten: ze worden warm, bijna heet, en de witte laag lost op. Zonder die week zou chocola bitter blijven en naar niets smaken.",
      "Daarna gaan de bonen in de zon, op grote houten tafels. Ze moeten regelmatig omgeschept worden, anders schimmelen ze. Pas als ze kraken tussen je vingers, zijn ze droog genoeg voor de zak.",
      "In Nederland komen ze aan in de haven van Amsterdam, een van de grootste cacaohavens ter wereld. In de fabriek worden ze geroosterd, gepeld en fijngemalen. Door het malen komt er vet vrij en verandert het poeder in een dikke, bruine stroom. Met suiker en melkpoeder erbij wordt dat de reep uit de winkel.",
      "Van de prijs van die reep gaat maar een klein deel terug naar de boer in Ivoorkust: vaak rond de zes of zeven procent. De rest gaat naar vervoer, fabriek, verpakking en winkel. Daarom staat er op sommige repen een keurmerk, dat belooft dat de boer een hogere prijs krijgt.",
      "Zes maanden nadat de vrucht werd opengehakt, ligt de reep bij jou op tafel. Als je hem langzaam laat smelten, proef je iets wat over land, zee en drie fabrieken heen naar je toe is gereisd."
    ],
    en: [
      "On a tree in Ivory Coast hangs a fruit the size of a small melon. It is yellow and bumpy and does not grow on a branch but straight out of the trunk. Inside that fruit are about forty white beans, in a layer that tastes of lemon. There is no hint of chocolate yet.",
      "The farmer chops the fruit open and scoops the beans onto a pile of leaves. There they lie for a week. During that week they ferment: they become warm, almost hot, and the white layer dissolves. Without that week chocolate would stay bitter and taste of nothing.",
      "After that the beans go into the sun, on big wooden tables. They have to be turned over regularly, otherwise they go mouldy. Only when they crack between your fingers are they dry enough for the sack.",
      "In the Netherlands they arrive in the port of Amsterdam, one of the biggest cocoa ports in the world. In the factory they are roasted, peeled and ground fine. The grinding releases fat and turns the powder into a thick brown stream. With sugar and milk powder added, that becomes the bar in the shop.",
      "Of the price of that bar only a small part goes back to the farmer in Ivory Coast: often around six or seven percent. The rest goes to transport, factory, packaging and shop. That is why some bars carry a label promising that the farmer gets a higher price.",
      "Six months after the fruit was chopped open, the bar is lying on your table. If you let it melt slowly, you are tasting something that travelled to you across land, sea and three factories."
    ]
  },
  words: [
    { nl: 'gisten', en: 'to ferment', defNl: 'warm worden en veranderen doordat kleine wezentjes eraan werken', defEn: 'becoming warm and changing because tiny organisms work on it' },
    { nl: 'keurmerk', en: 'certification label', defNl: 'een teken op een product dat iets belooft over hoe het gemaakt is', defEn: 'a mark on a product promising something about how it was made' },
    { nl: 'roosteren', en: 'to roast', defNl: 'droog verhitten zodat de smaak sterker wordt', defEn: 'heating something dry so the flavour gets stronger' }
  ],
  questions: [
    { id: 'q1', type: 'mc', skill: 'letterlijk',
      q: { nl: 'Waar groeit de cacaovrucht aan de boom?', en: 'Where does the cocoa fruit grow on the tree?' },
      options: [
        { nl: 'Recht uit de stam', en: 'Straight out of the trunk' },
        { nl: 'Aan de hoogste takken', en: 'On the highest branches' },
        { nl: 'Onder de grond', en: 'Under the ground' },
        { nl: 'Tussen de bladeren aan de top', en: 'Among the leaves at the top' }
      ], answer: 0,
      explain: { nl: 'Alinea 1: "groeit niet aan een tak, maar recht uit de stam".',
                 en: 'Paragraph 1: "does not grow on a branch but straight out of the trunk".' } },
    { id: 'q2', type: 'mc', skill: 'gevolgtrekking',
      q: { nl: 'Waarom is de week op de bladeren zo belangrijk?',
           en: 'Why is the week on the leaves so important?' },
      options: [
        { nl: 'Zonder die week zou chocola bitter blijven en nergens naar smaken',
          en: 'Without it chocolate would stay bitter and taste of nothing' },
        { nl: 'Anders worden de bonen te zwaar', en: 'Otherwise the beans get too heavy' },
        { nl: 'Anders kan de boer ze niet tellen', en: 'Otherwise the farmer cannot count them' },
        { nl: 'Anders past de zak niet in de boot', en: 'Otherwise the sack does not fit in the ship' }
      ], answer: 0,
      explain: { nl: 'Alinea 2 zegt dat letterlijk: zonder het gisten smaakt chocola nergens naar.',
                 en: 'Paragraph 2 says it literally: without fermenting, chocolate tastes of nothing.' } },
    { id: 'q3', type: 'gap', skill: 'woordenschat',
      q: { nl: 'Een keurmerk op een reep belooft iets over ___.',
           en: 'A label on a bar promises something about ___.' },
      options: [
        { nl: 'hoe het product gemaakt is', en: 'how the product was made' },
        { nl: 'hoe zwaar de reep is', en: 'how heavy the bar is' },
        { nl: 'hoe lang de reep houdbaar is', en: 'how long the bar keeps' },
        { nl: 'welke kleur de verpakking heeft', en: 'what colour the wrapper is' }
      ], answer: 0,
      explain: { nl: 'De tekst noemt een keurmerk dat belooft dat de boer een hogere prijs krijgt.',
                 en: 'The text names a label promising the farmer a higher price.' } },
    { id: 'q4', type: 'order', skill: 'volgorde',
      q: { nl: 'Zet de reis van de boon op volgorde.', en: 'Put the bean’s journey in order.' },
      items: [
        { nl: 'De boer hakt de vrucht open.', en: 'The farmer chops the fruit open.' },
        { nl: 'De bonen gisten een week op bladeren.', en: 'The beans ferment for a week on leaves.' },
        { nl: 'Ze drogen in de zon op houten tafels.', en: 'They dry in the sun on wooden tables.' },
        { nl: 'Ze worden geroosterd en gemalen in de fabriek.', en: 'They are roasted and ground in the factory.' },
        { nl: 'De reep ligt bij jou op tafel.', en: 'The bar is lying on your table.' }
      ], answer: [0, 1, 2, 3, 4],
      explain: { nl: 'De alinea’s volgen precies de route van boom tot tafel.',
                 en: 'The paragraphs follow exactly the route from tree to table.' } },
    { id: 'q5', type: 'tf', skill: 'letterlijk',
      q: { nl: 'De boer krijgt ongeveer de helft van de prijs van een reep.',
           en: 'The farmer gets about half the price of a bar.' },
      answer: false,
      explain: { nl: 'Alinea 5: vaak rond de zes of zeven procent, dus veel minder dan de helft.',
                 en: 'Paragraph 5: often around six or seven percent, far less than half.' } },
    { id: 'q6', type: 'mc', skill: 'hoofdgedachte',
      q: { nl: 'Wat is de hoofdgedachte van deze tekst?', en: 'What is the main idea of this text?' },
      options: [
        { nl: 'Er zitten veel stappen en veel kilometers tussen de cacaoboom en jouw reep',
          en: 'There are many steps and many kilometres between the cocoa tree and your bar' },
        { nl: 'Ivoorkust is een warm land', en: 'Ivory Coast is a hot country' },
        { nl: 'Chocola is ongezond', en: 'Chocolate is unhealthy' },
        { nl: 'In Amsterdam staat een grote haven', en: 'Amsterdam has a big port' }
      ], answer: 0,
      explain: { nl: 'De tekst volgt de hele reis, stap voor stap, van vrucht tot tafel.',
                 en: 'The text follows the whole journey step by step, from fruit to table.' } }
  ]
},

{
  id: 'eten-3', topic: 'eten', level: 3, emoji: '👃', scene: 'kitchen',
  title: { nl: 'Waarom smaakt alles naar niets als je verkouden bent?',
           en: 'Why does everything taste of nothing when you have a cold?' },
  text: {
    nl: [
      "Je bent verkouden, je moeder maakt je lievelingseten, en je proeft er bijna niets van. Je tong is niet stuk. Er is niets mis met het eten. Toch smaakt het alsof je op een natte spons kauwt.",
      "De verklaring is dat wij het woord smaak veel te ruim gebruiken. Je tong kan maar vijf dingen: zoet, zuur, zout, bitter en umami, de hartige smaak van kaas en bouillon. Dat is alles. Meer kan je tong niet.",
      "Alle andere verschillen ruik je. Aardbei, kaneel, koffie, gebakken ui: dat zijn geuren. Terwijl je kauwt, stijgen er geurdeeltjes op vanuit je mond naar je neus, via een gangetje aan de achterkant. Daar zitten miljoenen geurcellen die honderden verschillende deeltjes kunnen herkennen.",
      "Bij verkoudheid zit dat gangetje dicht met slijm. De deeltjes komen niet meer bij de geurcellen. Je proeft dan nog wel dat iets zoet of zout is, maar het verschil tussen aardbeienyoghurt en perzikyoghurt valt weg. Dat je dat \"geen smaak\" noemt, komt doordat we geur en smaak in ons hoofd tot één ding hebben gemaakt.",
      "Je kunt het zelf testen zonder ziek te worden. Knijp je neus dicht, stop een stukje appel in je mond en kauw. Je proeft zoet en een beetje zuur, verder niets. Laat halverwege je neus los, en de appel verschijnt ineens, alsof er een lamp aangaat.",
      "Koks weten dit allang. Daarom ruikt een restaurant al lekker voordat je hebt gegeten, en daarom serveren ze warme gerechten: warmte laat geurdeeltjes sneller opstijgen. Wie zijn eten uit de koelkast eet, proeft er het minst van."
    ],
    en: [
      "You have a cold, your mother makes your favourite meal, and you can hardly taste it. Your tongue is not broken. There is nothing wrong with the food. Yet it tastes like chewing on a wet sponge.",
      "The explanation is that we use the word taste far too loosely. Your tongue can only do five things: sweet, sour, salty, bitter and umami, the savoury taste of cheese and stock. That is all. Your tongue can do no more.",
      "Every other difference you smell. Strawberry, cinnamon, coffee, fried onion: those are smells. While you chew, smell particles rise from your mouth to your nose, through a little passage at the back. There sit millions of smell cells that can recognise hundreds of different particles.",
      "With a cold that passage is blocked with mucus. The particles no longer reach the smell cells. You can still taste that something is sweet or salty, but the difference between strawberry yoghurt and peach yoghurt falls away. That you call that \"no taste\" is because in our heads we have made smell and taste into one thing.",
      "You can test it yourself without getting ill. Pinch your nose shut, put a piece of apple in your mouth and chew. You taste sweet and a little sour, nothing more. Let go of your nose halfway through, and the apple suddenly appears, as if a lamp has been switched on.",
      "Cooks have known this for ages. That is why a restaurant smells good before you have eaten anything, and why they serve hot dishes: warmth makes smell particles rise faster. Whoever eats their food straight from the fridge tastes the least of it."
    ]
  },
  words: [
    { nl: 'umami', en: 'umami', defNl: 'de hartige smaak van kaas, bouillon en tomaat', defEn: 'the savoury taste of cheese, stock and tomato' },
    { nl: 'geurcellen', en: 'smell cells', defNl: 'de cellen in je neus die geuren herkennen', defEn: 'the cells in your nose that recognise smells' },
    { nl: 'slijm', en: 'mucus', defNl: 'de dikke vloeistof in je neus als je verkouden bent', defEn: 'the thick fluid in your nose when you have a cold' }
  ],
  questions: [
    { id: 'q1', type: 'multi', skill: 'letterlijk',
      q: { nl: 'Welke drie smaken kan je tong volgens de tekst proeven? Kies er 3.',
           en: 'Which three tastes can your tongue detect, according to the text? Pick 3.' },
      options: [
        { nl: 'Zoet', en: 'Sweet' },
        { nl: 'Bitter', en: 'Bitter' },
        { nl: 'Umami', en: 'Umami' },
        { nl: 'Kaneel', en: 'Cinnamon' }
      ], answer: [0, 1, 2],
      explain: { nl: 'De vijf smaken zijn zoet, zuur, zout, bitter en umami. Kaneel is een geur, geen smaak.',
                 en: 'The five tastes are sweet, sour, salty, bitter and umami. Cinnamon is a smell, not a taste.' } },
    { id: 'q2', type: 'mc', skill: 'gevolgtrekking',
      q: { nl: 'Waarom proef je bij verkoudheid het verschil tussen twee soorten yoghurt niet?',
           en: 'Why can you not taste the difference between two yoghurts when you have a cold?' },
      options: [
        { nl: 'Omdat de geurdeeltjes door het slijm niet bij de geurcellen komen',
          en: 'Because the mucus stops the smell particles reaching the smell cells' },
        { nl: 'Omdat je tong dan minder werkt', en: 'Because your tongue works less then' },
        { nl: 'Omdat yoghurt koud is', en: 'Because yoghurt is cold' },
        { nl: 'Omdat je dan minder honger hebt', en: 'Because you are less hungry then' }
      ], answer: 0,
      explain: { nl: 'Alinea 4: het gangetje zit dicht, dus het verschil tussen aardbei en perzik valt weg.',
                 en: 'Paragraph 4: the passage is blocked, so the difference between strawberry and peach falls away.' } },
    { id: 'q3', type: 'mc', skill: 'verwijswoorden',
      q: { nl: '"Daar zitten miljoenen geurcellen." Waar is "daar"?',
           en: '"There sit millions of smell cells." Where is "there"?' },
      options: [
        { nl: 'In de neus, aan het eind van het gangetje vanuit de mond',
          en: 'In the nose, at the end of the passage from the mouth' },
        { nl: 'Op de tong', en: 'On the tongue' },
        { nl: 'In het eten zelf', en: 'In the food itself' },
        { nl: 'In de keel', en: 'In the throat' }
      ], answer: 0,
      explain: { nl: 'De zin ervoor beschrijft het gangetje van de mond naar de neus. "Daar" is dus in de neus.',
                 en: 'The sentence before describes the passage from mouth to nose, so "there" is in the nose.' } },
    { id: 'q4', type: 'mc', skill: 'gevolgtrekking',
      q: { nl: 'Waarom serveren koks gerechten graag warm?',
           en: 'Why do cooks like to serve dishes hot?' },
      options: [
        { nl: 'Omdat geurdeeltjes dan sneller opstijgen en je meer proeft',
          en: 'Because smell particles then rise faster and you taste more' },
        { nl: 'Omdat warm eten sneller op is', en: 'Because hot food is eaten faster' },
        { nl: 'Omdat je tong warmte prettig vindt', en: 'Because your tongue likes warmth' },
        { nl: 'Omdat een warm bord mooier staat', en: 'Because a hot plate looks nicer' }
      ], answer: 0,
      explain: { nl: 'Laatste alinea: warmte laat geurdeeltjes sneller opstijgen, dus proef je meer.',
                 en: 'Last paragraph: warmth makes smell particles rise faster, so you taste more.' } },
    { id: 'q5', type: 'gap', skill: 'woordenschat',
      q: { nl: 'Umami is ___.', en: 'Umami is ___.' },
      options: [
        { nl: 'de hartige smaak van kaas en bouillon', en: 'the savoury taste of cheese and stock' },
        { nl: 'een sterke geur van kaneel', en: 'a strong smell of cinnamon' },
        { nl: 'het slijm in je neus', en: 'the mucus in your nose' },
        { nl: 'een Japans gerecht', en: 'a Japanese dish' }
      ], answer: 0,
      explain: { nl: 'De tekst legt het erbij uit: umami is de hartige smaak van kaas en bouillon.',
                 en: 'The text explains it: umami is the savoury taste of cheese and stock.' } },
    { id: 'q6', type: 'mc', skill: 'structuur',
      q: { nl: 'Wat doet alinea 5 (de proef met de appel) in deze tekst?',
           en: 'What does paragraph 5 (the apple test) do in this text?' },
      options: [
        { nl: 'Het geeft de lezer een proefje waarmee hij de uitleg zelf kan controleren',
          en: 'It gives the reader an experiment to check the explanation themselves' },
        { nl: 'Het geeft een tegenargument', en: 'It gives a counter-argument' },
        { nl: 'Het vat de hele tekst samen', en: 'It summarises the whole text' },
        { nl: 'Het vertelt iets over koks', en: 'It tells something about cooks' }
      ], answer: 0,
      explain: { nl: '"Je kunt het zelf testen" kondigt een proefje aan dat de uitleg uit de vorige alinea’s bewijst.',
                 en: '"You can test it yourself" announces an experiment that proves the previous explanation.' } },
    { id: 'q7', type: 'mc', skill: 'hoofdgedachte',
      q: { nl: 'Wat is de hoofdgedachte?', en: 'What is the main idea?' },
      options: [
        { nl: 'Wat wij smaak noemen is vooral geur, en daarom valt het weg als je neus dicht zit',
          en: 'What we call taste is mostly smell, which is why it disappears when your nose is blocked' },
        { nl: 'Verkoudheid is vervelend', en: 'Having a cold is unpleasant' },
        { nl: 'Appels zijn zoet en een beetje zuur', en: 'Apples are sweet and a little sour' },
        { nl: 'Koks weten veel van eten', en: 'Cooks know a lot about food' }
      ], answer: 0,
      explain: { nl: 'Alle alinea’s samen leggen dat uit: tong kan vijf dingen, de rest ruik je.',
                 en: 'All the paragraphs explain that: the tongue can do five things, the rest you smell.' } }
  ]
},

{
  id: 'eten-4', topic: 'eten', level: 4, emoji: '🥕', scene: 'farm',
  title: { nl: 'De kromme wortel die niemand wilde', en: 'The crooked carrot nobody wanted' },
  text: {
    nl: [
      "Er groeit op een akker in Flevoland een wortel met twee benen. Hij is gezond, hij smaakt precies als zijn rechte buren, maar hij zal nooit in een schap liggen. Hij past niet in de machine die wortels wast, niet in het zakje, en niet in het beeld dat wij van een wortel hebben.",
      "Zulke wortels zijn geen uitzondering. Wereldwijd haalt ongeveer een derde van al het voedsel dat geproduceerd wordt het bord niet. Een deel gaat verloren op het land, een deel in de fabriek en in de winkel, en een groot deel bij mensen thuis. In Nederland gooit een gemiddeld gezin zo'n dertig kilo eten per persoon per jaar weg.",
      "Dat is niet alleen zonde van het eten. Voor elke weggegooide aardappel is er ook water gebruikt, land bewerkt, brandstof verstookt en mest gestrooid. Al die moeite verdwijnt mee in de bak. Onderzoekers rekenden uit dat voedselverspilling verantwoordelijk is voor ongeveer acht procent van alle broeikasgassen: meer dan de hele luchtvaart.",
      "Waarom gebeurt het dan? Een deel van de oorzaak zit in regels. Supermarkten spraken lang af hoe krom een komkommer mocht zijn. Een ander deel zit in gewoontes. Veel mensen denken dat de datum op een pak de dag is waarop iets gevaarlijk wordt. Dat klopt alleen bij \"te gebruiken tot\", op vlees en vis. Bij \"ten minste houdbaar tot\" gaat het om kwaliteit: koek wordt slap, maar niet giftig.",
      "Er verandert wel iets. Sommige ketens verkopen kromme groente in een apart schap, met korting en een grappige naam. Apps koppelen restaurants aan klanten die tegen sluitingstijd een doos overgebleven eten willen kopen. En scholen laten kinderen zien hoe je met je neus in plaats van met de datum kunt beslissen of yoghurt nog goed is.",
      "Toch begint de grootste winst thuis. Wie een week vooruit denkt, koopt minder te veel. Wie de koelkast op de goede temperatuur zet, houdt melk dagen langer. Wie kliekjes de volgende dag opwarmt, haalt zo een maaltijd uit de prullenbak.",
      "En die wortel met twee benen? Die gaat tegenwoordig in de soep. Want in een pan ziet niemand of hij recht was."
    ],
    en: [
      "In a field in Flevoland grows a carrot with two legs. It is healthy, it tastes exactly like its straight neighbours, but it will never lie on a shelf. It does not fit in the machine that washes carrots, nor in the bag, nor in the picture we have of a carrot.",
      "Such carrots are not an exception. Worldwide about a third of all the food produced never reaches a plate. Part is lost in the field, part in the factory and the shop, and a large part in people’s homes. In the Netherlands an average family throws away some thirty kilos of food per person per year.",
      "That is not only a waste of the food. For every potato thrown away, water was used, land was worked, fuel was burned and fertiliser was spread. All that effort goes into the bin along with it. Researchers worked out that food waste is responsible for about eight percent of all greenhouse gases: more than the whole of aviation.",
      "So why does it happen? Part of the cause lies in rules. Supermarkets long agreed how crooked a cucumber was allowed to be. Another part lies in habits. Many people think the date on a packet is the day something becomes dangerous. That is only true for \"use by\", on meat and fish. With \"best before\" it is about quality: a biscuit goes soft, but not poisonous.",
      "Things are changing, though. Some chains sell crooked vegetables on a separate shelf, discounted and with a funny name. Apps connect restaurants with customers who want to buy a box of leftover food near closing time. And schools show children how to decide with their nose instead of the date whether yoghurt is still good.",
      "Yet the biggest gain starts at home. Plan a week ahead and you buy less than you would. Set the fridge to the right temperature and milk keeps for days longer. Heat up leftovers the next day and you pull a whole meal out of the bin.",
      "And that carrot with two legs? Nowadays it goes into the soup. Because in a pan nobody can see whether it was straight."
    ]
  },
  words: [
    { nl: 'voedselverspilling', en: 'food waste', defNl: 'eten weggooien dat nog goed was', defEn: 'throwing away food that was still fine' },
    { nl: 'broeikasgassen', en: 'greenhouse gases', defNl: 'gassen die de aarde warmer maken', defEn: 'gases that make the earth warmer' },
    { nl: 'kliekjes', en: 'leftovers', defNl: 'het eten dat na een maaltijd overblijft', defEn: 'the food left over after a meal' }
  ],
  questions: [
    { id: 'q1', type: 'mc', skill: 'letterlijk',
      q: { nl: 'Hoeveel van al het geproduceerde voedsel haalt volgens de tekst het bord niet?',
           en: 'How much of all the food produced never reaches a plate, according to the text?' },
      options: [
        { nl: 'Ongeveer een derde', en: 'About a third' },
        { nl: 'Ongeveer acht procent', en: 'About eight percent' },
        { nl: 'Ongeveer dertig kilo', en: 'About thirty kilos' },
        { nl: 'Bijna de helft', en: 'Almost half' }
      ], answer: 0,
      explain: { nl: 'Alinea 2: wereldwijd haalt ongeveer een derde het bord niet. De acht procent gaat over broeikasgassen.',
                 en: 'Paragraph 2: about a third never reaches a plate. The eight percent is about greenhouse gases.' } },
    { id: 'q2', type: 'mc', skill: 'gevolgtrekking',
      q: { nl: 'Waarom is een weggegooide aardappel meer verlies dan alleen die aardappel?',
           en: 'Why is a thrown-away potato more of a loss than just that potato?' },
      options: [
        { nl: 'Omdat het water, het land, de brandstof en de mest ook verloren gaan',
          en: 'Because the water, land, fuel and fertiliser are lost too' },
        { nl: 'Omdat aardappels duur zijn', en: 'Because potatoes are expensive' },
        { nl: 'Omdat de boer er verdrietig van wordt', en: 'Because it makes the farmer sad' },
        { nl: 'Omdat de prullenbak dan vol zit', en: 'Because the bin gets full' }
      ], answer: 0,
      explain: { nl: 'Alinea 3: "Al die moeite verdwijnt mee in de bak."',
                 en: 'Paragraph 3: "All that effort goes into the bin along with it."' } },
    { id: 'q3', type: 'mc', skill: 'woordenschat',
      q: { nl: 'Wat is het verschil tussen "te gebruiken tot" en "ten minste houdbaar tot"?',
           en: 'What is the difference between "use by" and "best before"?' },
      options: [
        { nl: '"Te gebruiken tot" gaat over veiligheid, "ten minste houdbaar tot" over kwaliteit',
          en: '"Use by" is about safety, "best before" is about quality' },
        { nl: 'Er is geen verschil', en: 'There is no difference' },
        { nl: '"Ten minste houdbaar tot" staat alleen op vlees', en: '"Best before" only appears on meat' },
        { nl: '"Te gebruiken tot" betekent dat het nog jaren goed is', en: '"Use by" means it is good for years' }
      ], answer: 0,
      explain: { nl: 'Alinea 4 legt het uit: koek wordt slap, maar niet giftig; bij vlees en vis gaat het wél om veiligheid.',
                 en: 'Paragraph 4 explains it: a biscuit goes soft but not poisonous; with meat and fish it really is about safety.' } },
    { id: 'q4', type: 'mc', skill: 'verwijswoorden',
      q: { nl: '"Dat klopt alleen bij \'te gebruiken tot\'." Wat klopt daar alleen?',
           en: '"That is only true for \'use by\'." What is only true there?' },
      options: [
        { nl: 'Dat de datum de dag is waarop iets gevaarlijk wordt',
          en: 'That the date is the day something becomes dangerous' },
        { nl: 'Dat supermarkten regels hadden voor kromme komkommers',
          en: 'That supermarkets had rules for crooked cucumbers' },
        { nl: 'Dat koek slap wordt', en: 'That biscuits go soft' },
        { nl: 'Dat je op je neus kunt afgaan', en: 'That you can go by your nose' }
      ], answer: 0,
      explain: { nl: 'De zin ervoor: "Veel mensen denken dat de datum op een pak de dag is waarop iets gevaarlijk wordt."',
                 en: 'The sentence before: many people think the date is the day something becomes dangerous.' } },
    { id: 'q5', type: 'multi', skill: 'letterlijk',
      q: { nl: 'Welke drie oplossingen noemt alinea 5? Kies er 3.', en: 'Which three solutions does paragraph 5 name? Pick 3.' },
      options: [
        { nl: 'Kromme groente in een apart schap met korting', en: 'Crooked vegetables on a discounted shelf' },
        { nl: 'Apps die restaurants aan klanten koppelen', en: 'Apps that connect restaurants with customers' },
        { nl: 'Scholen die leren op je neus af te gaan', en: 'Schools teaching children to go by their nose' },
        { nl: 'Een boete voor wie eten weggooit', en: 'A fine for throwing food away' }
      ], answer: [0, 1, 2],
      explain: { nl: 'Alinea 5 noemt precies deze drie. Een boete komt in de tekst niet voor.',
                 en: 'Paragraph 5 names exactly these three. No fine appears in the text.' } },
    { id: 'q6', type: 'mc', skill: 'structuur',
      q: { nl: 'Alinea 4 begint met "Waarom gebeurt het dan?". Wat is de functie van die vraag?',
           en: 'Paragraph 4 begins "So why does it happen?". What does that question do?' },
      options: [
        { nl: 'Hij kondigt aan dat nu de oorzaken komen', en: 'It announces that the causes are coming now' },
        { nl: 'Hij vraagt de lezer om een mening', en: 'It asks the reader for an opinion' },
        { nl: 'Hij vat de vorige alinea samen', en: 'It summarises the previous paragraph' },
        { nl: 'Hij geeft de oplossing', en: 'It gives the solution' }
      ], answer: 0,
      explain: { nl: 'Na de vraag volgen twee oorzaken: regels en gewoontes. De vraag is dus een wegwijzer.',
                 en: 'Two causes follow the question: rules and habits. The question is a signpost.' } },
    { id: 'q7', type: 'mc', skill: 'doel',
      q: { nl: 'Wat wil de schrijver met deze tekst?', en: 'What does the writer want with this text?' },
      options: [
        { nl: 'Laten zien hoe groot voedselverspilling is en wat je er zelf aan kunt doen',
          en: 'Show how big food waste is and what you can do about it yourself' },
        { nl: 'Reclame maken voor kromme wortels', en: 'Advertise crooked carrots' },
        { nl: 'Uitleggen hoe je soep maakt', en: 'Explain how to make soup' },
        { nl: 'Bewijzen dat supermarkten slecht zijn', en: 'Prove that supermarkets are bad' }
      ], answer: 0,
      explain: { nl: 'De tekst geeft cijfers, oorzaken én tips voor thuis. Dat is informeren met een duwtje.',
                 en: 'The text gives numbers, causes and tips for home: informing with a nudge.' } },
    { id: 'q8', type: 'mc', skill: 'hoofdgedachte',
      q: { nl: 'Wat is de hoofdgedachte?', en: 'What is the main idea?' },
      options: [
        { nl: 'Er gaat enorm veel eten verloren door regels en gewoontes, en daar valt thuis het meest aan te doen',
          en: 'Huge amounts of food are lost through rules and habits, and home is where most can be done about it' },
        { nl: 'Kromme wortels smaken beter', en: 'Crooked carrots taste better' },
        { nl: 'De luchtvaart vervuilt meer dan eten', en: 'Aviation pollutes more than food' },
        { nl: 'Supermarkten mogen geen komkommers meer keuren', en: 'Supermarkets may no longer inspect cucumbers' }
      ], answer: 0,
      explain: { nl: 'De alinea’s lopen van het probleem naar de oorzaken naar wat je zelf kunt doen.',
                 en: 'The paragraphs run from the problem to the causes to what you can do yourself.' } }
  ]
},

{
  id: 'eten-5', topic: 'eten', level: 5, emoji: '🦗', scene: 'kitchen',
  title: { nl: 'Insecten op je bord: vies of verstandig?', en: 'Insects on your plate: disgusting or sensible?' },
  text: {
    nl: [
      "In een loods bij Bergen op Zoom staan duizenden plastic bakken op stellingen. In elke bak krioelen larven van de meelworm. Ze eten restjes brood en wortel, en ze groeien snel. Over een paar weken gaan ze de vriezer in, en daarna de molen. Wat overblijft is een lichtbruin poeder dat je door een pastasaus kunt roeren zonder dat iemand het merkt.",
      "Voor tweeduizend miljoen mensen op aarde is dit niets bijzonders. In Thailand koop je gefrituurde krekels op de markt, in Mexico horen mierenlarven bij een feestmaal. Alleen in Europa en Noord-Amerika kijken de meeste mensen ervan op. Dat is geen natuurwet, maar een gewoonte: wij aten ooit ook geen rauwe vis, tot sushi hier gewoon werd.",
      "De cijfers achter het idee zijn indrukwekkend. Om één kilo rundvlees te maken heb je grofweg tien kilo voer nodig; bij krekels is dat ongeveer twee kilo. Insecten hebben nauwelijks water nodig, ze stapelen in de hoogte in plaats van in de breedte, en ze eten voedselresten waar wij niets meer mee kunnen. Bovendien bestaat een meelworm voor zo'n vijftig procent uit eiwit.",
      "Toch verloopt de doorbraak trager dan verwacht. Dat komt maar voor een klein deel door de smaak. Het grootste struikelblok is de prijs: een kilo insecteneiwit kost in Europa nog altijd meer dan een kilo kip. De kweekbakken moeten precies op temperatuur blijven en veel werk gebeurt nog met de hand.",
      "Daar komt bij dat de wetgeving streng is. In de Europese Unie moet elke nieuwe insectensoort apart worden goedgekeurd voordat hij verkocht mag worden, en dat duurt jaren. Kwekers vinden dat traag; toezichthouders zeggen dat je bij nieuw voedsel nu eenmaal zeker moet weten dat niemand er ziek van wordt.",
      "Er is ook echte kritiek. Mensen met een schaaldierallergie kunnen op insecten reageren, want de eiwitten lijken op elkaar. En critici wijzen erop dat de meeste insecten hier voorlopig niet op ons bord belanden maar in het voer van kippen en vissen. Dat scheelt soja uit Brazilië, zeggen kwekers, en dat is óók winst. Anderen vinden dat te makkelijk: dan blijft de veehouderij gewoon bestaan.",
      "Zo staat het er nu voor. De techniek werkt, de voordelen zijn te meten, de bezwaren zijn echt en de prijs is het grootste obstakel. Of jij over tien jaar meelwormpoeder in je pasta hebt, hangt dus minder af van je smaak dan van een fabriek die goedkoper leert werken."
    ],
    en: [
      "In a shed near Bergen op Zoom, thousands of plastic trays stand on racks. In every tray mealworm larvae are swarming. They eat scraps of bread and carrot, and they grow fast. In a few weeks they go into the freezer, and after that the mill. What is left is a light brown powder you can stir through a pasta sauce without anyone noticing.",
      "For two thousand million people on earth this is nothing special. In Thailand you buy fried crickets at the market; in Mexico ant larvae belong to a feast. Only in Europe and North America do most people raise an eyebrow. That is not a law of nature but a habit: we once did not eat raw fish either, until sushi became ordinary here.",
      "The numbers behind the idea are impressive. To make one kilo of beef you roughly need ten kilos of feed; for crickets it is about two. Insects hardly need water, they stack upwards instead of spreading sideways, and they eat food scraps we can do nothing with. On top of that, a mealworm is about fifty percent protein.",
      "Yet the breakthrough is slower than expected. Only a small part of that is down to the taste. The biggest stumbling block is the price: a kilo of insect protein in Europe still costs more than a kilo of chicken. The trays have to be kept at exactly the right temperature and much of the work is still done by hand.",
      "On top of that the law is strict. In the European Union every new insect species has to be approved separately before it may be sold, and that takes years. Breeders find that slow; regulators say that with new food you simply have to be sure nobody gets ill.",
      "There is real criticism too. People with a shellfish allergy can react to insects, because the proteins are similar. And critics point out that for now most insects here do not end up on our plates but in the feed of chickens and fish. That saves soya from Brazil, breeders say, and that is a gain as well. Others find that too easy: it leaves the livestock industry exactly as it was.",
      "So that is where things stand. The technology works, the advantages can be measured, the objections are real and the price is the biggest obstacle. So whether you have mealworm powder in your pasta in ten years depends less on your taste than on a factory learning to work more cheaply."
    ]
  },
  words: [
    { nl: 'eiwit', en: 'protein', defNl: 'de bouwstof in voedsel waar je lichaam spieren van maakt', defEn: 'the building material in food your body makes muscle from' },
    { nl: 'struikelblok', en: 'stumbling block', defNl: 'het grootste probleem dat iets tegenhoudt', defEn: 'the biggest problem holding something back' },
    { nl: 'wetgeving', en: 'legislation', defNl: 'alle regels die de overheid heeft vastgelegd', defEn: 'all the rules laid down by the government' }
  ],
  questions: [
    { id: 'q1', type: 'mc', skill: 'letterlijk',
      q: { nl: 'Hoeveel voer is er ongeveer nodig voor één kilo rundvlees?',
           en: 'How much feed is roughly needed for one kilo of beef?' },
      options: [
        { nl: 'Ongeveer tien kilo', en: 'About ten kilos' },
        { nl: 'Ongeveer twee kilo', en: 'About two kilos' },
        { nl: 'Ongeveer vijftig kilo', en: 'About fifty kilos' },
        { nl: 'Dat staat niet in de tekst', en: 'The text does not say' }
      ], answer: 0,
      explain: { nl: 'Alinea 3: grofweg tien kilo voer voor rundvlees, tegenover ongeveer twee kilo voor krekels.',
                 en: 'Paragraph 3: roughly ten kilos of feed for beef, against about two for crickets.' } },
    { id: 'q2', type: 'sort', skill: 'feitmening',
      q: { nl: 'Feit of mening? Zet elke zin in de goede groep.',
           en: 'Fact or opinion? Put every sentence in the right group.' },
      bins: [{ nl: 'Feit', en: 'Fact' }, { nl: 'Mening', en: 'Opinion' }],
      items: [
        { nl: 'Een meelworm bestaat voor ongeveer vijftig procent uit eiwit.',
          en: 'A mealworm is about fifty percent protein.', bin: 0 },
        { nl: 'Kwekers vinden de goedkeuringsregels te traag.',
          en: 'Breeders find the approval rules too slow.', bin: 1 },
        { nl: 'In de EU moet elke nieuwe insectensoort apart goedgekeurd worden.',
          en: 'In the EU every new insect species must be approved separately.', bin: 0 },
        { nl: 'Insecten in kippenvoer is een te makkelijke oplossing.',
          en: 'Insects in chicken feed is too easy a solution.', bin: 1 }
      ],
      explain: { nl: 'Percentages en regels zijn te controleren. "Te traag" en "te makkelijk" zijn oordelen van mensen.',
                 en: 'Percentages and rules can be checked. "Too slow" and "too easy" are people’s judgements.' } },
    { id: 'q3', type: 'mc', skill: 'gevolgtrekking',
      q: { nl: 'Waarom noemt de schrijver sushi in alinea 2?', en: 'Why does the writer mention sushi in paragraph 2?' },
      options: [
        { nl: 'Om te laten zien dat wat wij vies vinden een gewoonte is die kan veranderen',
          en: 'To show that what we find disgusting is a habit that can change' },
        { nl: 'Omdat sushi net zo gezond is als insecten', en: 'Because sushi is as healthy as insects' },
        { nl: 'Omdat sushi ook uit Thailand komt', en: 'Because sushi also comes from Thailand' },
        { nl: 'Om te laten zien dat rauw voedsel gevaarlijk is', en: 'To show that raw food is dangerous' }
      ], answer: 0,
      explain: { nl: '"Dat is geen natuurwet, maar een gewoonte" — sushi is het bewijs dat gewoontes veranderen.',
                 en: '"That is not a law of nature but a habit" — sushi is the proof that habits change.' } },
    { id: 'q4', type: 'mc', skill: 'verwijswoorden',
      q: { nl: '"Anderen vinden dat te makkelijk." Wat vinden zij te makkelijk?',
           en: '"Others find that too easy." What do they find too easy?' },
      options: [
        { nl: 'Het argument dat insecten in kippenvoer al winst zijn omdat het soja bespaart',
          en: 'The argument that insects in chicken feed are already a gain because they save soya' },
        { nl: 'Dat mensen met een allergie moeten oppassen', en: 'That people with an allergy have to be careful' },
        { nl: 'Dat de prijs te hoog is', en: 'That the price is too high' },
        { nl: 'Dat in Thailand krekels gegeten worden', en: 'That crickets are eaten in Thailand' }
      ], answer: 0,
      explain: { nl: 'De zin ervoor is het argument van de kwekers over soja. Daarop reageren de "anderen".',
                 en: 'The sentence before is the breeders’ soya argument, which the "others" respond to.' } },
    { id: 'q5', type: 'multi', skill: 'gevolgtrekking',
      q: { nl: 'Welke twee dingen remmen volgens de tekst de doorbraak van insecten als voedsel? Kies er 2.',
           en: 'Which two things are holding back the breakthrough of insects as food? Pick 2.' },
      options: [
        { nl: 'De hoge prijs vergeleken met kip', en: 'The high price compared to chicken' },
        { nl: 'Wetgeving die per soort goedkeuring vraagt', en: 'Legislation that demands approval per species' },
        { nl: 'Het gebrek aan insecten in de natuur', en: 'The lack of insects in nature' },
        { nl: 'Dat insecten te weinig eiwit bevatten', en: 'That insects contain too little protein' }
      ], answer: [0, 1],
      explain: { nl: 'Alinea 4 noemt de prijs als grootste struikelblok, alinea 5 de strenge wetgeving. Eiwit is juist een voordeel.',
                 en: 'Paragraph 4 names the price as the biggest stumbling block, paragraph 5 the strict law. Protein is an advantage.' } },
    { id: 'q6', type: 'mc', skill: 'structuur',
      q: { nl: 'Alinea 4 begint met "Toch verloopt de doorbraak trager dan verwacht." Wat doet dat woord "toch"?',
           en: 'Paragraph 4 begins "Yet the breakthrough is slower than expected." What does "yet" do?' },
      options: [
        { nl: 'Het draait de tekst om: na de voordelen komen nu de problemen',
          en: 'It turns the text around: after the advantages come the problems' },
        { nl: 'Het geeft een extra voordeel', en: 'It adds another advantage' },
        { nl: 'Het herhaalt de cijfers uit alinea 3', en: 'It repeats the figures from paragraph 3' },
        { nl: 'Het vat de tekst samen', en: 'It summarises the text' }
      ], answer: 0,
      explain: { nl: 'Alinea 3 is vol voordelen; "toch" kondigt de ommekeer aan naar de bezwaren.',
                 en: 'Paragraph 3 is full of advantages; "yet" announces the turn towards the objections.' } },
    { id: 'q7', type: 'mc', skill: 'doel',
      q: { nl: 'Wat is het doel van de schrijver?', en: 'What is the writer’s purpose?' },
      options: [
        { nl: 'Een eerlijk overzicht geven van voordelen én bezwaren, zodat de lezer zelf kan oordelen',
          en: 'Give a fair overview of advantages and objections so the reader can judge' },
        { nl: 'De lezer overhalen morgen krekels te eten', en: 'Persuade the reader to eat crickets tomorrow' },
        { nl: 'Waarschuwen dat insecten gevaarlijk zijn', en: 'Warn that insects are dangerous' },
        { nl: 'Reclame maken voor een kwekerij in Bergen op Zoom', en: 'Advertise a farm near Bergen op Zoom' }
      ], answer: 0,
      explain: { nl: 'De slotalinea zet voor- en nadelen naast elkaar en laat de uitkomst open.',
                 en: 'The closing paragraph puts pros and cons side by side and leaves the outcome open.' } },
    { id: 'q8', type: 'mc', skill: 'samenvatten',
      q: { nl: 'Welke samenvatting past het beste?', en: 'Which summary fits best?' },
      options: [
        { nl: 'Insecten kweken kost veel minder voer en water dan vlees, maar prijs, regels en kritiek houden de doorbraak tegen.',
          en: 'Farming insects costs far less feed and water than meat, but price, rules and criticism are holding back the breakthrough.' },
        { nl: 'In Thailand en Mexico eten mensen al heel lang insecten.',
          en: 'People in Thailand and Mexico have eaten insects for a long time.' },
        { nl: 'Meelwormen groeien in plastic bakken op restjes brood.',
          en: 'Mealworms grow in plastic trays on scraps of bread.' },
        { nl: 'Mensen met een schaaldierallergie moeten oppassen met insecten.',
          en: 'People with a shellfish allergy should be careful with insects.' }
      ], answer: 0,
      explain: { nl: 'Die zin bevat de voordelen én de drie remmen. De andere drie zijn losse details.',
                 en: 'That sentence holds both the advantages and the three brakes. The others are single details.' } },
    { id: 'q9', type: 'tf', skill: 'letterlijk',
      q: { nl: 'Volgens de tekst is de smaak het grootste probleem bij insecten als voedsel.',
           en: 'According to the text, taste is the biggest problem with insects as food.' },
      answer: false,
      explain: { nl: 'Alinea 4: "Dat komt maar voor een klein deel door de smaak. Het grootste struikelblok is de prijs."',
                 en: 'Paragraph 4: "Only a small part of that is down to the taste. The biggest stumbling block is the price."' } }
  ]
}
]);

addStories([
{
  id: 'eten-6', topic: 'eten', level: 1, emoji: '🍿', scene: 'kitchen',
  title: { nl: 'Waarom knapt popcorn?', en: 'Why does popcorn pop?' },
  text: {
    nl: [
      "In de keuken staat een pan op het vuur. Er zitten harde gele korrels in, mais. Na een paar minuten begint het: knap, knap, knap! De korrels springen tegen het deksel. Wat is er precies aan de hand in zo'n korrel?",
      "Elke maiskorrel heeft een hard, dik jasje. Vanbinnen zit een klein beetje water, verstopt in het zetmeel. Dat water kun je niet zien. Maar het zit er wel, in elke korrel opnieuw.",
      "Als de pan heet wordt, warmt dat kleine beetje water op. Het water verandert in stoom. Stoom heeft veel meer plaats nodig dan water. Maar de korrel laat de stoom niet zomaar weg: het harde jasje zit potdicht.",
      "De stoom blijft duwen, harder en harder. Op een gegeven moment kan het jasje het niet meer houden. Het knapt open met een klap. De binnenkant van de korrel klapt naar buiten, wit en schuimig. Zo ontstaat popcorn.",
      "Niet elke mais doet dit. Gewone mais, zoals je van de kolf eet, heeft een dunner jasje. De stoom ontsnapt daar te makkelijk. Alleen popcornmais heeft het stevige jasje dat nodig is voor die harde knap."
    ],
    en: [
      "In the kitchen a pan stands on the stove. It is full of hard yellow kernels, corn. After a few minutes it starts: pop, pop, pop! The kernels jump against the lid. What exactly is going on inside such a kernel?",
      "Every corn kernel has a hard, thick jacket. Inside sits a tiny bit of water, hidden in the starch. You cannot see that water. But it is there, in every single kernel.",
      "When the pan gets hot, that tiny bit of water heats up. The water turns into steam. Steam needs far more space than water. But the kernel does not simply let the steam out: the hard jacket is sealed tight.",
      "The steam keeps pushing, harder and harder. At some point the jacket cannot hold it any longer. It pops open with a bang. The inside of the kernel flips outward, white and foamy. That is how popcorn is made.",
      "Not every corn does this. Regular corn, the kind you eat off the cob, has a thinner jacket. The steam escapes there too easily. Only popcorn corn has the sturdy jacket needed for that loud pop."
    ]
  },
  words: [
    { nl: 'korrel', en: 'kernel', defNl: 'een klein hard zaadje, bijvoorbeeld van mais', defEn: 'a small hard seed, for example of corn' },
    { nl: 'zetmeel', en: 'starch', defNl: 'de stof in mais en aardappels waar ook water in verstopt kan zitten', defEn: 'the substance in corn and potatoes that can also hide water inside it' },
    { nl: 'stoom', en: 'steam', defNl: 'wat er ontstaat als water heel heet wordt', defEn: 'what water turns into when it gets very hot' }
  ],
  questions: [
    { id: 'q1', type: 'mc', skill: 'letterlijk',
      q: { nl: 'Wat zit er verstopt in het zetmeel van een maiskorrel?', en: 'What is hidden in the starch of a corn kernel?' },
      options: [
        { nl: 'Een klein beetje water', en: 'A tiny bit of water' },
        { nl: 'Een beetje zout', en: 'A bit of salt' },
        { nl: 'Een druppel olie', en: 'A drop of oil' },
        { nl: 'Een luchtbelletje', en: 'A little air bubble' }
      ], answer: 0,
      explain: { nl: 'Alinea 2: "Vanbinnen zit een klein beetje water, verstopt in het zetmeel."',
                 en: 'Paragraph 2: "Inside sits a tiny bit of water, hidden in the starch."' } },
    { id: 'q2', type: 'tf', skill: 'letterlijk',
      q: { nl: 'Gewone mais van de kolf knapt precies zo hard open als popcornmais.',
           en: 'Regular corn off the cob pops open exactly as loudly as popcorn corn.' },
      answer: false,
      explain: { nl: 'Alinea 5: gewone mais heeft een dunner jasje, waardoor de stoom te makkelijk ontsnapt.',
                 en: 'Paragraph 5: regular corn has a thinner jacket, so the steam escapes too easily.' } },
    { id: 'q3', type: 'gap', skill: 'woordenschat',
      q: { nl: 'Stoom is water dat ___.', en: 'Steam is water that ___.' },
      options: [
        { nl: 'zo heet is geworden dat het gas is geworden', en: 'has become so hot that it has turned into gas' },
        { nl: 'is bevroren tot ijs', en: 'has frozen into ice' },
        { nl: 'zout heeft opgelost', en: 'has dissolved salt' },
        { nl: 'in de koelkast heeft gestaan', en: 'has been in the fridge' }
      ], answer: 0,
      explain: { nl: 'Alinea 3: "Het water verandert in stoom." Stoom is water dat door hitte gas is geworden.',
                 en: 'Paragraph 3: "The water turns into steam." Steam is water that has turned into gas through heat.' } },
    { id: 'q4', type: 'order', skill: 'volgorde',
      q: { nl: 'Zet op volgorde wat er in de korrel gebeurt.', en: 'Put in order what happens inside the kernel.' },
      items: [
        { nl: 'De pan wordt heet.', en: 'The pan gets hot.' },
        { nl: 'Het water in de korrel verandert in stoom.', en: 'The water in the kernel turns into steam.' },
        { nl: 'De stoom duwt steeds harder tegen het jasje.', en: 'The steam pushes harder and harder against the jacket.' },
        { nl: 'Het jasje knapt open en de korrel klapt naar buiten.', en: 'The jacket pops open and the kernel flips outward.' }
      ], answer: [0, 1, 2, 3],
      explain: { nl: 'Eerst wordt het heet, dan ontstaat stoom, dan groeit de druk, en pas dan knapt de korrel open.',
                 en: 'First it gets hot, then steam forms, then the pressure grows, and only then does the kernel pop open.' } },
    { id: 'q5', type: 'mc', skill: 'hoofdgedachte',
      q: { nl: 'Waar gaat deze tekst vooral over?', en: 'What is this text mainly about?' },
      options: [
        { nl: 'Hoe een druppel water in een maiskorrel popcorn laat ontstaan',
          en: 'How a drop of water inside a corn kernel creates popcorn' },
        { nl: 'Hoe je een pan schoonmaakt', en: 'How to clean a pan' },
        { nl: 'Waarom mais geel is', en: 'Why corn is yellow' },
        { nl: 'Hoe je een deksel vastmaakt', en: 'How to fasten a lid' }
      ], answer: 0,
      explain: { nl: 'Elke alinea legt een stapje uit van water tot knappende korrel.',
                 en: 'Every paragraph explains one step from water to popping kernel.' } }
  ]
},

{
  id: 'eten-7', topic: 'eten', level: 2, emoji: '🧅', scene: 'kitchen',
  title: { nl: 'Waarom moet je huilen van een ui?', en: 'Why do onions make you cry?' },
  text: {
    nl: [
      "Je staat in de keuken, snijdt een ui doormidden, en na een paar seconden prikken je ogen. Even later huil je gewoon, terwijl er niets verdrietigs is gebeurd. Wat doet die ui met je?",
      "In een ui zitten piepkleine cellen, opgesloten achter dunne wandjes. Zolang de ui heel is, gebeurt er niets. Maar zodra je mes door die wandjes snijdt, komen er stoffen vrij die normaal gescheiden blijven. Ze mengen zich en vormen een prikkelend gas.",
      "Dat gas stijgt op naar je ogen. In je ogen zit altijd een laagje vocht, om ze vochtig te houden. Zodra het gas dat vocht raakt, ontstaat er een heel zwak zuurtje. Je ogen voelen dat meteen als iets vervelends.",
      "Je hersenen reageren razendsnel. Ze sturen een seintje: spoel dit weg! Daarom maken je traanklieren extra tranen aan. Die tranen spoelen het zuurtje weg, net zoals water een vlek uit een trui spoelt.",
      "Gelukkig zijn er trucjes. Een koude ui geeft minder gas af, dus leg hem even in de koelkast voor je gaat snijden. Snijden onder de afzuigkap of vlak bij een open raam helpt ook: het gas waait dan weg voordat het je ogen bereikt. En een heel scherp mes beschadigt minder cellen dan een bot mes, dus komt er minder gas vrij.",
      "Zo simpel is het dus: geen verdriet, maar chemie. Je ogen doen precies wat ze moeten doen, alleen kiezen ze op dat moment het verkeerde moment om het te laten zien."
    ],
    en: [
      "You are standing in the kitchen, you cut an onion in half, and after a few seconds your eyes start to sting. A moment later you are simply crying, even though nothing sad has happened. What does that onion do to you?",
      "An onion is full of tiny cells, sealed off behind thin walls. As long as the onion is whole, nothing happens. But the moment your knife cuts through those walls, substances that normally stay separate are released. They mix together and form an irritating gas.",
      "That gas rises up to your eyes. Your eyes always have a thin layer of moisture on them, to keep them moist. The moment the gas touches that moisture, a very weak acid forms. Your eyes feel that right away as something unpleasant.",
      "Your brain reacts in a flash. It sends a signal: rinse this away! That is why your tear glands make extra tears. Those tears rinse the mild acid away, just like water rinses a stain out of a jumper.",
      "Luckily there are tricks. A cold onion releases less gas, so pop it in the fridge for a bit before you start cutting. Cutting under the extractor fan or near an open window also helps: the gas blows away before it reaches your eyes. And a very sharp knife damages fewer cells than a blunt one, so less gas is released.",
      "So it is that simple: no sadness, just chemistry. Your eyes are doing exactly what they are supposed to do, they just pick the wrong moment to show it."
    ]
  },
  words: [
    { nl: 'traanklieren', en: 'tear glands', defNl: 'de plekjes bij je ogen die tranen maken', defEn: 'the spots near your eyes that make tears' },
    { nl: 'vocht', en: 'moisture', defNl: 'een dun laagje water, bijvoorbeeld op je oog', defEn: 'a thin layer of water, for example on your eye' },
    { nl: 'afzuigkap', en: 'extractor fan', defNl: 'het apparaat boven het fornuis dat lucht en geur wegzuigt', defEn: 'the appliance above the stove that sucks away air and smell' }
  ],
  questions: [
    { id: 'q1', type: 'mc', skill: 'letterlijk',
      q: { nl: 'Wat zit er altijd in je ogen, om ze vochtig te houden?', en: 'What is always in your eyes, to keep them moist?' },
      options: [
        { nl: 'Een laagje vocht', en: 'A thin layer of moisture' },
        { nl: 'Een laagje huid', en: 'A layer of skin' },
        { nl: 'Een laagje zout', en: 'A layer of salt' },
        { nl: 'Een laagje was', en: 'A layer of wax' }
      ], answer: 0,
      explain: { nl: 'Alinea 3: "In je ogen zit altijd een laagje vocht, om ze vochtig te houden."',
                 en: 'Paragraph 3: "Your eyes always have a thin layer of moisture on them, to keep them moist."' } },
    { id: 'q2', type: 'mc', skill: 'gevolgtrekking',
      q: { nl: 'Waarom maak je extra tranen aan als je een ui snijdt?', en: 'Why do you produce extra tears when you cut an onion?' },
      options: [
        { nl: 'Om het zuurtje uit je ogen te spoelen', en: 'To rinse the mild acid out of your eyes' },
        { nl: 'Omdat je ogen moe worden van het snijden', en: 'Because your eyes get tired from cutting' },
        { nl: 'Omdat de ui een sterke geur heeft', en: 'Because the onion has a strong smell' },
        { nl: 'Omdat je hersenen verdrietig worden', en: 'Because your brain becomes sad' }
      ], answer: 0,
      explain: { nl: 'Alinea 4: de tranen spoelen het zuurtje weg, net zoals water een vlek uit een trui spoelt.',
                 en: 'Paragraph 4: the tears rinse the mild acid away, just like water rinses a stain out of a jumper.' } },
    { id: 'q3', type: 'gap', skill: 'woordenschat',
      q: { nl: 'Je traanklieren zijn de plekjes bij je ogen die ___.', en: 'Your tear glands are the spots near your eyes that ___.' },
      options: [
        { nl: 'tranen aanmaken', en: 'make tears' },
        { nl: 'een prikkelend gas maken', en: 'make an irritating gas' },
        { nl: 'je ogen dichtknijpen', en: 'squeeze your eyes shut' },
        { nl: 'het mes vasthouden', en: 'hold the knife' }
      ], answer: 0,
      explain: { nl: 'Alinea 4: "Daarom maken je traanklieren extra tranen aan."',
                 en: 'Paragraph 4: "That is why your tear glands make extra tears."' } },
    { id: 'q4', type: 'match', skill: 'woordenschat',
      q: { nl: 'Klik het woord en daarna de juiste betekenis.', en: 'Click the word and then the correct meaning.' },
      pairs: [
        { word: { nl: 'traanklieren', en: 'tear glands' }, meaning: { nl: 'de plekjes die tranen maken', en: 'the spots that make tears' } },
        { word: { nl: 'vocht', en: 'moisture' }, meaning: { nl: 'een dun laagje water op iets', en: 'a thin layer of water on something' } },
        { word: { nl: 'afzuigkap', en: 'extractor fan' }, meaning: { nl: 'het apparaat boven het fornuis dat lucht wegzuigt', en: 'the appliance above the stove that sucks away air' } }
      ],
      explain: { nl: 'Deze drie woorden komen allemaal uit de tekst.', en: 'All three words come from the text.' } },
    { id: 'q5', type: 'mc', skill: 'gevolgtrekking',
      q: { nl: 'Wat hebben een koude ui, een afzuigkap en een scherp mes met elkaar gemeen volgens de tekst?',
           en: 'According to the text, what do a cold onion, an extractor fan and a sharp knife have in common?' },
      options: [
        { nl: 'Ze zorgen er alle drie voor dat er minder prikkelend gas bij je ogen komt',
          en: 'All three make sure less irritating gas reaches your eyes' },
        { nl: 'Ze maken de ui zoeter', en: 'They make the onion sweeter' },
        { nl: 'Ze halen de schil van de ui', en: 'They remove the onion’s skin' },
        { nl: 'Ze laten de ui sneller garen', en: 'They make the onion cook faster' }
      ], answer: 0,
      explain: { nl: 'Alinea 5 noemt alle drie als manieren om minder gas bij je ogen te krijgen.',
                 en: 'Paragraph 5 names all three as ways to get less gas near your eyes.' } },
    { id: 'q6', type: 'mc', skill: 'hoofdgedachte',
      q: { nl: 'Wat is de hoofdgedachte van deze tekst?', en: 'What is the main idea of this text?' },
      options: [
        { nl: 'Ui-tranen zijn geen verdriet maar een chemische reactie die je oog probeert weg te spoelen',
          en: 'Onion tears are not sadness but a chemical reaction your eye tries to rinse away' },
        { nl: 'Ui is een ongezonde groente', en: 'Onion is an unhealthy vegetable' },
        { nl: 'Een scherp mes is altijd beter dan een bot mes', en: 'A sharp knife is always better than a blunt one' },
        { nl: 'Je moet nooit in de keuken huilen', en: 'You should never cry in the kitchen' }
      ], answer: 0,
      explain: { nl: 'Alle alinea’s samen leggen uit hoe het prikkelende gas ontstaat en waarom je ogen erop reageren met tranen.',
                 en: 'All the paragraphs together explain how the irritating gas forms and why your eyes respond to it with tears.' } }
  ]
},

{
  id: 'eten-8', topic: 'eten', level: 3, emoji: '🧀', scene: 'farm',
  title: { nl: 'Hoe krijgt kaas zijn gaten?', en: 'How does cheese get its holes?' },
  text: {
    nl: [
      "Op de foto in het prentenboek heeft de muis een geel blok kaas met ronde gaten erin. Kinderen tekenen kaas al jaren zo. Maar hoe komen die gaten daar eigenlijk in? Niemand prikt ze erin met een satéprikker.",
      "Het antwoord zit al in de melk, voordat de kaas zelfs maar bestaat. Bij het kaasmaken wordt melk gestremd tot een dikke massa, en daar worden speciale bacteriën aan toegevoegd. Deze bacteriën zijn onmisbaar: zonder hen wordt melk nooit kaas, maar gewoon bedorven melk.",
      "Sommige van die bacteriën doen iets bijzonders terwijl de kaas rijpt in een koele kelder. Ze eten een stofje in de kaas, melkzuur, en daarbij laten ze een gas los: koolzuurgas. Dat gas kan nergens heen in de stevige kaasmassa, dus het blijft zitten en duwt de kaas een beetje uit elkaar. Zo ontstaat een bel.",
      "Hoe langer de kaas rijpt, hoe meer tijd de bacteriën krijgen om te werken, en hoe groter de bellen kunnen worden. Bij een jonge kaas van een paar weken zie je nog bijna niets. Bij een kaas die maanden rijpt, zoals een Leerdammer, zijn de gaten vaak zo groot als een knikker of nog groter.",
      "Kaasmakers hebben hier zelf best veel invloed op. Door de temperatuur van de rijpkelder aan te passen, kunnen ze de bacteriën sneller of langzamer laten werken. Willen ze een kaas zonder gaten, zoals sommige geraspte kazen, dan gebruiken ze bacteriën die geen gas maken.",
      "Dus die gaten zijn geen foutje en ook geen trucje van de fabriek. Het zijn de sporen van piepkleine bacteriën die, verstopt in het donker, precies deden waar ze goed in zijn."
    ],
    en: [
      "In the picture book the mouse has a yellow block of cheese with round holes in it. Children have drawn cheese like that for years. But how do those holes actually get in there? Nobody pokes them in with a skewer.",
      "The answer is already in the milk, before the cheese even exists. When cheese is made, milk is curdled into a thick mass, and special bacteria are added to it. These bacteria are essential: without them milk never becomes cheese, just spoiled milk.",
      "Some of those bacteria do something special while the cheese ripens in a cool cellar. They eat a substance in the cheese, lactic acid, and as they do they release a gas: carbon dioxide. That gas has nowhere to go inside the firm cheese mass, so it stays put and pushes the cheese apart a little. That is how a bubble forms.",
      "The longer the cheese ripens, the more time the bacteria get to work, and the bigger the bubbles can become. In a young cheese only a few weeks old you hardly see anything yet. In a cheese that ripens for months, like a Leerdammer, the holes are often as big as a marble or even bigger.",
      "Cheesemakers actually have quite a lot of influence on this themselves. By adjusting the temperature of the ripening cellar, they can make the bacteria work faster or slower. If they want a cheese without holes, like some grated cheeses, they use bacteria that make no gas.",
      "So those holes are not a mistake, and not a trick by the factory either. They are the traces of tiny bacteria that, hidden in the dark, did exactly what they are good at."
    ]
  },
  words: [
    { nl: 'stremmen', en: 'to curdle', defNl: 'melk dik laten worden zodat er kaas van gemaakt kan worden', defEn: 'to make milk thicken so cheese can be made from it' },
    { nl: 'rijpen', en: 'to ripen', defNl: 'een tijd bewaard worden zodat de smaak verandert', defEn: 'to be stored for a while so the flavour changes' },
    { nl: 'koolzuurgas', en: 'carbon dioxide', defNl: 'een onzichtbaar gas dat bacteriën kunnen maken', defEn: 'an invisible gas that bacteria can produce' }
  ],
  questions: [
    { id: 'q1', type: 'mc', skill: 'letterlijk',
      q: { nl: 'Wat laten de bacteriën los terwijl ze melkzuur opeten?', en: 'What do the bacteria release while they eat lactic acid?' },
      options: [
        { nl: 'Koolzuurgas', en: 'Carbon dioxide' },
        { nl: 'Zuurstof', en: 'Oxygen' },
        { nl: 'Waterdamp', en: 'Water vapour' },
        { nl: 'Zout', en: 'Salt' }
      ], answer: 0,
      explain: { nl: 'Alinea 3: "Ze eten een stofje in de kaas, melkzuur, en daarbij laten ze een gas los: koolzuurgas."',
                 en: 'Paragraph 3: "They eat a substance in the cheese, lactic acid, and as they do they release a gas: carbon dioxide."' } },
    { id: 'q2', type: 'mc', skill: 'verwijswoorden',
      q: { nl: '"Dat gas kan nergens heen in de stevige kaasmassa." Waar verwijst "dat gas" naar?',
           en: '"That gas has nowhere to go inside the firm cheese mass." What does "that gas" refer to?' },
      options: [
        { nl: 'Het koolzuurgas dat de bacteriën loslaten', en: 'The carbon dioxide the bacteria release' },
        { nl: 'De lucht in de kaaswinkel', en: 'The air in the cheese shop' },
        { nl: 'De geur van de kelder', en: 'The smell of the cellar' },
        { nl: 'Het gas van het fornuis', en: 'The gas from the stove' }
      ], answer: 0,
      explain: { nl: 'De zin ervoor noemt het koolzuurgas dat vrijkomt; "dat gas" verwijst daarnaar terug.',
                 en: 'The sentence before names the carbon dioxide that is released; "that gas" refers back to it.' } },
    { id: 'q3', type: 'mc', skill: 'gevolgtrekking',
      q: { nl: 'Waarom heeft een kaas die maanden rijpt vaak grotere gaten dan een jonge kaas van een paar weken?',
           en: 'Why does a cheese that ripens for months often have bigger holes than a young cheese only a few weeks old?' },
      options: [
        { nl: 'Omdat de bacteriën dan meer tijd hebben gehad om gas te maken',
          en: 'Because the bacteria have had more time to make gas' },
        { nl: 'Omdat oude kaas meer melk bevat', en: 'Because old cheese contains more milk' },
        { nl: 'Omdat de kelder dan kouder wordt', en: 'Because the cellar gets colder then' },
        { nl: 'Omdat er dan meer bacteriën worden toegevoegd', en: 'Because more bacteria are added then' }
      ], answer: 0,
      explain: { nl: 'Alinea 4: hoe langer de kaas rijpt, hoe meer tijd de bacteriën krijgen en hoe groter de bellen worden.',
                 en: 'Paragraph 4: the longer the cheese ripens, the more time the bacteria get and the bigger the bubbles become.' } },
    { id: 'q4', type: 'gap', skill: 'woordenschat',
      q: { nl: 'Rijpen betekent dat een kaas ___.', en: 'To ripen means a cheese ___.' },
      options: [
        { nl: 'een tijd bewaard wordt, waardoor de smaak verandert', en: 'is stored for a while, which changes its flavour' },
        { nl: 'meteen na het maken wordt opgegeten', en: 'is eaten right after it is made' },
        { nl: 'in de vriezer wordt bewaard', en: 'is stored in the freezer' },
        { nl: 'extra zout krijgt', en: 'gets extra salt' }
      ], answer: 0,
      explain: { nl: 'Alinea 3 en 4 laten zien dat de kaas een tijd in een koele kelder ligt voordat hij klaar is.',
                 en: 'Paragraphs 3 and 4 show the cheese sits in a cool cellar for a while before it is ready.' } },
    { id: 'q5', type: 'mc', skill: 'structuur',
      q: { nl: 'Wat doet de laatste alinea in deze tekst?', en: 'What does the last paragraph do in this text?' },
      options: [
        { nl: 'Ze vat samen dat de gaten het werk zijn van bacteriën, en geen foutje',
          en: 'It sums up that the holes are the work of bacteria, not a mistake' },
        { nl: 'Ze legt uit hoe je zelf kaas maakt', en: 'It explains how to make cheese yourself' },
        { nl: 'Ze geeft een nieuw voorbeeld van een kaassoort', en: 'It gives a new example of a cheese type' },
        { nl: 'Ze waarschuwt dat kaas met gaten ongezond is', en: 'It warns that cheese with holes is unhealthy' }
      ], answer: 0,
      explain: { nl: 'De laatste alinea sluit de tekst af door terug te komen op de vraag uit alinea 1: geen foutje, maar het werk van bacteriën.',
                 en: 'The last paragraph closes the text by returning to the question from paragraph 1: not a mistake, but the work of bacteria.' } },
    { id: 'q6', type: 'mc', skill: 'hoofdgedachte',
      q: { nl: 'Wat is de hoofdgedachte van deze tekst?', en: 'What is the main idea of this text?' },
      options: [
        { nl: 'Bacteriën die melkzuur opeten, laten een gas los waardoor er gaten in bepaalde kazen ontstaan',
          en: 'Bacteria that eat lactic acid release a gas that creates holes in certain cheeses' },
        { nl: 'Kaas wordt altijd gemaakt met een satéprikker', en: 'Cheese is always made using a skewer' },
        { nl: 'Hoe ouder de kaas, hoe minder smaak hij heeft', en: 'The older the cheese, the less flavour it has' },
        { nl: 'Alle kazen krijgen vanzelf gaten', en: 'Every cheese automatically gets holes' }
      ], answer: 0,
      explain: { nl: 'Elke alinea legt een stap uit van bacteriën tot bel tot gat, en dat is precies waar de tekst over gaat.',
                 en: 'Every paragraph explains one step from bacteria to bubble to hole, which is exactly what the text is about.' } }
  ]
},

{
  id: 'eten-9', topic: 'eten', level: 4, emoji: '🗑️', scene: 'default',
  title: { nl: 'Waar verdwijnt ons eten naartoe?', en: 'Where does our food disappear to?' },
  text: {
    nl: [
      "Een brood dat een dag oud is, sla die te slap is geworden, een pak yoghurt met een datum van gisteren: elke dag verdwijnt er in Nederland een enorme berg eten in de vuilnisbak. Niet omdat het bedorven is, maar omdat iemand in de keten besloot dat het niet meer verkocht of gegeten kon worden.",
      "Die keten begint op het land. Een deel van de oogst blijft liggen: te klein, te groot, of overtollig omdat de vraag lager was dan verwacht. In fabrieken en winkels gaat eten weg door beschadigde verpakkingen, te volle schappen en producten die simpelweg niet op tijd verkocht raakten.",
      "In restaurants speelt iets anders mee: mensen bestellen te veel, of de keuken bereidt iets meer dan er die avond wordt opgegeten. Dan is er de laatste schakel, misschien de grootste: thuis. Onderzoekers schatten dat huishoudens samen minstens zoveel weggooien als winkels en restaurants samen.",
      "Een groot deel van die thuisverspilling komt door een misverstand over de datum op de verpakking. Veel mensen lezen \"ten minste houdbaar tot\" als een harde grens: één dag erover en het pak gaat de bak in. Maar die datum zegt iets over kwaliteit, niet over veiligheid. Koekjes een week over de datum zijn heus niet giftig, hooguit iets minder knapperig.",
      "Bij \"te gebruiken tot\", vooral op vlees, vis en verse maaltijden, ligt dat anders: die datum gaat wél over veiligheid, omdat bacteriën dan kunnen groeien. Het verschil tussen die twee zinnetjes lijkt klein, maar bepaalt of je een half pak yoghurt gerust opeet of toch weggooit.",
      "Wat vooral helpt, is heel gewoon gedrag. Een boodschappenlijst maken voorkomt dat je dingen dubbel koopt. De koelkast op de juiste temperatuur zetten, tussen de twee en vier graden, houdt groente en zuivel dagen langer goed. Kliekjes de volgende dag opwarmen levert een gratis lunch op.",
      "Geen van die stappen is ingewikkeld. Toch zou Nederland, als iedereen ze toepaste, in één klap veel weggegooid eten kunnen redden. Het probleem zit dus niet alleen bij boeren, fabrieken of supermarkten, maar voor een flink stuk in onze eigen keuken."
    ],
    en: [
      "A loaf of bread that is a day old, lettuce that has gone too limp, a carton of yoghurt dated yesterday: every day an enormous pile of food disappears into the bin in the Netherlands. Not because it has gone bad, but because somewhere along the chain someone decided it could no longer be sold or eaten.",
      "That chain begins in the field. Part of the harvest simply stays there: too small, too big, or surplus because demand was lower than expected. In factories and shops food is lost through damaged packaging, overstocked shelves and products that simply did not sell in time.",
      "In restaurants something else plays a role: people order too much, or the kitchen prepares slightly more than gets eaten that evening. Then there is the last link, perhaps the biggest one: home. Researchers estimate that households together throw away at least as much as shops and restaurants combined.",
      "A large part of that waste at home comes from a misunderstanding about the date on the packaging. Many people read \"best before\" as a hard line: one day over and the packet goes in the bin. But that date says something about quality, not about safety. Biscuits a week past their date are really not poisonous, at most a little less crunchy.",
      "With \"use by\", mainly on meat, fish and fresh meals, that is different: that date really is about safety, because bacteria can then grow. The difference between those two little phrases seems small, but it decides whether you eat half a tub of yoghurt without worry or throw it away after all.",
      "What mainly helps is very ordinary behaviour. A shopping list stops you buying things twice. Setting the fridge to the right temperature, between two and four degrees, keeps vegetables and dairy good for days longer. Reheating leftovers the next day gives you a free lunch.",
      "None of those steps is complicated. Yet if everyone in the Netherlands applied them, the country could save much of all that wasted food in one go. So the problem does not only lie with farmers, factories or supermarkets, but for a good part in our own kitchen."
    ]
  },
  words: [
    { nl: 'schakel', en: 'link', defNl: 'een onderdeel van een keten, bijvoorbeeld één stap in de weg van boer tot bord', defEn: 'a part of a chain, for example one step on the way from farmer to plate' },
    { nl: 'misverstand', en: 'misunderstanding', defNl: 'een verkeerd idee dat mensen over iets hebben', defEn: 'a wrong idea that people have about something' },
    { nl: 'overtollig', en: 'surplus', defNl: 'meer dan er nodig of gevraagd is', defEn: 'more than is needed or asked for' }
  ],
  questions: [
    { id: 'q1', type: 'mc', skill: 'letterlijk',
      q: { nl: 'Waar begint de keten van voedselverspilling volgens de tekst?', en: 'Where does the food-waste chain begin, according to the text?' },
      options: [
        { nl: 'Op het land, bij de oogst', en: 'In the field, at the harvest' },
        { nl: 'In de vuilnisbak thuis', en: 'In the bin at home' },
        { nl: 'In het restaurant', en: 'In the restaurant' },
        { nl: 'Bij de kassa van de supermarkt', en: 'At the supermarket checkout' }
      ], answer: 0,
      explain: { nl: 'Alinea 2 begint met: "Die keten begint op het land."',
                 en: 'Paragraph 2 starts with: "That chain begins in the field."' } },
    { id: 'q2', type: 'mc', skill: 'verwijswoorden',
      q: { nl: '"Toch zou Nederland, als iedereen ze toepaste, ... eten kunnen redden." Waar verwijst "ze" naar?',
           en: '"Yet if everyone applied them ... could save ... food." What does "them" refer to?' },
      options: [
        { nl: 'Naar de drie gewoontes uit de vorige alinea: een lijstje maken, de koelkast goed instellen, kliekjes opwarmen',
          en: 'To the three habits from the previous paragraph: making a list, setting the fridge, reheating leftovers' },
        { nl: 'Naar de boeren en de fabrieken', en: 'To the farmers and the factories' },
        { nl: 'Naar de datums op de verpakking', en: 'To the dates on the packaging' },
        { nl: 'Naar de restaurants en de winkels', en: 'To the restaurants and the shops' }
      ], answer: 0,
      explain: { nl: 'Alinea 6 noemt drie gewone gewoontes; "ze" in alinea 7 verwijst terug naar die drie.',
                 en: 'Paragraph 6 names three ordinary habits; "them" in paragraph 7 refers back to those three.' } },
    { id: 'q3', type: 'multi', skill: 'letterlijk',
      q: { nl: 'Welke twee redenen noemt de tekst waarom er eten weggaat in fabrieken en winkels? Kies er 2.',
           en: 'Which two reasons does the text give for food being lost in factories and shops? Pick 2.' },
      options: [
        { nl: 'Beschadigde verpakkingen', en: 'Damaged packaging' },
        { nl: 'Te volle schappen', en: 'Overstocked shelves' },
        { nl: 'Te weinig personeel', en: 'Too few staff' },
        { nl: 'Te hoge energieprijzen', en: 'Too-high energy prices' }
      ], answer: [0, 1],
      explain: { nl: 'Alinea 2: "beschadigde verpakkingen, te volle schappen en producten die simpelweg niet op tijd verkocht raakten."',
                 en: 'Paragraph 2: "damaged packaging, overstocked shelves and products that simply did not sell in time."' } },
    { id: 'q4', type: 'mc', skill: 'gevolgtrekking',
      q: { nl: 'Waarom is een pak koekjes met een overschreden "ten minste houdbaar tot"-datum meestal nog gewoon te eten?',
           en: 'Why is a packet of biscuits past its "best before" date usually still fine to eat?' },
      options: [
        { nl: 'Omdat die datum over kwaliteit gaat, niet over veiligheid', en: 'Because that date is about quality, not safety' },
        { nl: 'Omdat koekjes nooit bederven', en: 'Because biscuits never go off' },
        { nl: 'Omdat de fabrikant de datum expres te vroeg zet', en: 'Because the manufacturer deliberately sets the date too early' },
        { nl: 'Omdat koekjes bacteriën doden', en: 'Because biscuits kill bacteria' }
      ], answer: 0,
      explain: { nl: 'Alinea 4: "die datum zegt iets over kwaliteit, niet over veiligheid."',
                 en: 'Paragraph 4: "that date says something about quality, not about safety."' } },
    { id: 'q5', type: 'gap', skill: 'woordenschat',
      q: { nl: 'Een misverstand is ___.', en: 'A misunderstanding is ___.' },
      options: [
        { nl: 'een verkeerd idee dat mensen over iets hebben', en: 'a wrong idea that people have about something' },
        { nl: 'een lege verpakking', en: 'an empty packet' },
        { nl: 'een fout in de datum zelf', en: 'a mistake in the date itself' },
        { nl: 'een tekort aan voedsel', en: 'a shortage of food' }
      ], answer: 0,
      explain: { nl: 'Alinea 4 noemt het misverstand over de datum: mensen denken dat die over veiligheid gaat, terwijl het om kwaliteit gaat.',
                 en: 'Paragraph 4 names the misunderstanding about the date: people think it is about safety while it is about quality.' } },
    { id: 'q6', type: 'order', skill: 'volgorde',
      q: { nl: 'Zet de schakels van de voedselketen op volgorde.', en: 'Put the links of the food chain in order.' },
      items: [
        { nl: 'Een deel van de oogst blijft op het land liggen.', en: 'Part of the harvest stays in the field.' },
        { nl: 'In fabrieken en winkels gaat eten weg door schade en te volle schappen.', en: 'In factories and shops food is lost through damage and overstocked shelves.' },
        { nl: 'In restaurants wordt soms te veel besteld of bereid.', en: 'In restaurants too much is sometimes ordered or prepared.' },
        { nl: 'Thuis gooien huishoudens samen nog meer weg dan winkels en restaurants.', en: 'At home, households together throw away even more than shops and restaurants.' }
      ], answer: [0, 1, 2, 3],
      explain: { nl: 'De tekst volgt precies deze volgorde: land, fabriek en winkel, restaurant, en dan thuis.',
                 en: 'The text follows exactly this order: field, factory and shop, restaurant, and then home.' } },
    { id: 'q7', type: 'mc', skill: 'structuur',
      q: { nl: 'Alinea 4 en 5 leggen het verschil uit tussen twee soorten datums op een verpakking. Wat is de functie van die twee alinea\'s in de tekst?',
           en: 'Paragraphs 4 and 5 explain the difference between two kinds of dates on packaging. What do those two paragraphs do in the text?' },
      options: [
        { nl: 'Ze verklaren een misverstand dat een groot deel van de verspilling thuis veroorzaakt',
          en: 'They explain a misunderstanding that causes a large part of the waste at home' },
        { nl: 'Ze geven een nieuw voorbeeld van verspilling in de winkel', en: 'They give a new example of waste in the shop' },
        { nl: 'Ze vatten de hele tekst samen', en: 'They summarise the whole text' },
        { nl: 'Ze waarschuwen dat alle datums onbetrouwbaar zijn', en: 'They warn that all dates are unreliable' }
      ], answer: 0,
      explain: { nl: 'Na de alinea over thuisverspilling volgt precies de uitleg die dat misverstand ophelderen: het verschil tussen de twee datums.',
                 en: 'After the paragraph about waste at home comes exactly the explanation that clears up that misunderstanding: the difference between the two dates.' } },
    { id: 'q8', type: 'mc', skill: 'hoofdgedachte',
      q: { nl: 'Wat is de hoofdgedachte van deze tekst?', en: 'What is the main idea of this text?' },
      options: [
        { nl: 'Eten gaat verloren in elke stap van het land tot je eigen keuken, en thuis valt de meeste winst te behalen',
          en: 'Food is lost at every step from the field to your own kitchen, and the biggest gain can be made at home' },
        { nl: 'Boeren zijn verantwoordelijk voor alle voedselverspilling', en: 'Farmers are responsible for all food waste' },
        { nl: 'Restaurants gooien het meeste eten weg', en: 'Restaurants throw away the most food' },
        { nl: 'Een datum op een verpakking is altijd betrouwbaar', en: 'A date on packaging is always reliable' }
      ], answer: 0,
      explain: { nl: 'De tekst loopt van land naar fabriek naar restaurant naar thuis, en eindigt met de conclusie dat de grootste winst in onze eigen keuken zit.',
                 en: 'The text runs from field to factory to restaurant to home, and ends with the conclusion that the biggest gain lies in our own kitchen.' } }
  ]
},

{
  id: 'eten-10', topic: 'eten', level: 5, emoji: '🍬', scene: 'default',
  title: { nl: 'Moet suiker duurder worden?', en: 'Should sugar become more expensive?' },
  text: {
    nl: [
      "Een blikje cola kost in de supermarkt al een paar jaar meer dan vroeger. Een deel van die prijsstijging komt niet van de fabrikant, maar van de overheid: een extra belasting op suiker. Moet dat wel? Veel mensen vragen zich hardop af of de overheid zich daarmee niet te veel bemoeit met wat we eten en drinken.",
      "Zo'n suikertaks bestaat al in meerdere landen. Het Verenigd Koninkrijk voerde in 2018 een belasting in op frisdrank met veel suiker. Mexico deed dat al eerder, in 2014. Ook Nederland verhoogde in 2024 de belasting op suikerhoudende dranken. Het idee is steeds hetzelfde: maak het product duurder, en mensen kopen er vanzelf minder van.",
      "Voorstanders wijzen naar de cijfers. In het Verenigd Koninkrijk daalde de hoeveelheid suiker in frisdrank flink, omdat veel fabrikanten hun recept aanpasten om onder de belastinggrens te blijven. Minder suiker drinken betekent minder overgewicht, minder gaatjes in tanden en op termijn minder kosten voor de zorg. Bovendien levert de belasting geld op, dat de overheid weer kan besteden aan bijvoorbeeld sportlessen op school.",
      "\"Suiker is verslavend en jonge kinderen weten dat niet\", zegt een voorstander van zulke maatregelen. \"Als de prijs helpt om die eerste slok net iets minder vanzelfsprekend te maken, dan is dat de moeite waard.\"",
      "Tegenstanders zien vooral de nadelen. Een extra belasting raakt gezinnen met een lager inkomen harder, omdat zij relatief een groter deel van hun geld aan boodschappen uitgeven. Bovendien wijken mensen vaak simpelweg uit naar goedkopere alternatieven die net zo veel suiker bevatten, zoals zelfgemaakte limonade of producten die niet onder de belasting vallen. Dan is er van de gezondheidswinst weinig over, terwijl iedereen wel meer betaalt.",
      "\"Mensen mogen zelf weten wat ze eten en drinken\", zegt een tegenstander. \"De overheid kan beter voorlichting geven dan mensen via hun portemonnee dwingen.\"",
      "Onderzoekers zien intussen dat de waarheid ergens in het midden ligt: een suikertaks werkt het best als hij wordt gecombineerd met goede voorlichting op scholen en gezondere alternatieven in de schappen. Los daarvan verandert hij weinig. De discussie gaat door, in Nederland en daarbuiten. En wat vind jij: moet suiker duurder worden, of is dat een te makkelijke oplossing voor een lastig probleem?"
    ],
    en: [
      "A can of cola has cost more in the supermarket for a few years now. Part of that price rise does not come from the manufacturer, but from the government: an extra tax on sugar. Should that really happen? Many people openly wonder whether the government is not interfering too much with what we eat and drink.",
      "A sugar tax like this already exists in several countries. The United Kingdom introduced a tax on high-sugar soft drinks in 2018. Mexico had already done so earlier, in 2014. The Netherlands also raised the tax on sugary drinks in 2024. The idea is always the same: make the product more expensive, and people automatically buy less of it.",
      "Supporters point to the figures. In the United Kingdom the amount of sugar in soft drinks dropped considerably, because many manufacturers adjusted their recipes to stay under the tax threshold. Drinking less sugar means less obesity, fewer cavities in teeth, and lower healthcare costs in the long run. On top of that, the tax raises money, which the government can spend on, for example, sports lessons at school.",
      "\"Sugar is addictive and young children do not know that,\" says a supporter of such measures. \"If the price helps make that first sip a little less obvious a choice, then it is worth it.\"",
      "Opponents mainly see the downsides. An extra tax hits families with a lower income harder, because they spend a relatively bigger part of their money on groceries. On top of that, people often simply switch to cheaper alternatives that contain just as much sugar, such as homemade lemonade or products that fall outside the tax. Then little is left of the health benefit, while everyone pays more.",
      "\"People are allowed to decide for themselves what they eat and drink,\" says an opponent. \"The government would do better to give information than to force people through their wallet.\"",
      "Researchers meanwhile find that the truth lies somewhere in the middle: a sugar tax works best when it is combined with good information at schools and healthier alternatives on the shelves. On its own it changes little. The debate continues, in the Netherlands and beyond. So what do you think: should sugar become more expensive, or is that too easy a solution to a difficult problem?"
    ]
  },
  words: [
    { nl: 'suikertaks', en: 'sugar tax', defNl: 'een extra belasting op producten met veel suiker', defEn: 'an extra tax on products with a lot of sugar' },
    { nl: 'voorlichting', en: 'public information', defNl: 'uitleg geven zodat mensen een onderwerp beter begrijpen', defEn: 'giving explanation so people understand a topic better' },
    { nl: 'belastinggrens', en: 'tax threshold', defNl: 'de grens waarboven een product extra belasting krijgt', defEn: 'the limit above which a product gets an extra tax' }
  ],
  questions: [
    { id: 'q1', type: 'mc', skill: 'letterlijk',
      q: { nl: 'In welk jaar voerde het Verenigd Koninkrijk een belasting in op frisdrank met veel suiker?',
           en: 'In which year did the United Kingdom introduce a tax on high-sugar soft drinks?' },
      options: [
        { nl: '2018', en: '2018' },
        { nl: '2014', en: '2014' },
        { nl: '2024', en: '2024' },
        { nl: '2010', en: '2010' }
      ], answer: 0,
      explain: { nl: 'Alinea 2: "Het Verenigd Koninkrijk voerde in 2018 een belasting in op frisdrank met veel suiker."',
                 en: 'Paragraph 2: "The United Kingdom introduced a tax on high-sugar soft drinks in 2018."' } },
    { id: 'q2', type: 'sort', skill: 'feitmening',
      q: { nl: 'Feit of mening? Zet elke zin in de goede groep.', en: 'Fact or opinion? Put every sentence in the right group.' },
      bins: [{ nl: 'Feit', en: 'Fact' }, { nl: 'Mening', en: 'Opinion' }],
      items: [
        { nl: 'Het Verenigd Koninkrijk voerde in 2018 een suikertaks in.', en: 'The United Kingdom introduced a sugar tax in 2018.', bin: 0 },
        { nl: 'De overheid bemoeit zich te veel met wat we eten en drinken.', en: 'The government is interfering too much with what we eat and drink.', bin: 1 },
        { nl: 'In het Verenigd Koninkrijk daalde de hoeveelheid suiker in frisdrank.', en: 'In the United Kingdom the amount of sugar in soft drinks dropped.', bin: 0 },
        { nl: 'Mensen mogen zelf weten wat ze eten en drinken.', en: 'People are allowed to decide for themselves what they eat and drink.', bin: 1 }
      ],
      explain: { nl: 'Jaartallen en dalingen zijn te controleren. Uitspraken met "te veel" of "mogen zelf weten" zijn oordelen van mensen.',
                 en: 'Years and drops can be checked. Statements with "too much" or "allowed to decide" are people’s judgements.' } },
    { id: 'q3', type: 'mc', skill: 'doel',
      q: { nl: 'Wat wil de schrijver vooral bereiken met deze tekst?', en: 'What is the writer mainly trying to achieve with this text?' },
      options: [
        { nl: 'Je laten nadenken over een lastige keuze, door voor- en tegenargumenten naast elkaar te zetten',
          en: 'Make you think about a difficult choice by placing arguments for and against side by side' },
        { nl: 'Je overtuigen dat suiker helemaal verboden moet worden', en: 'Convince you that sugar should be banned altogether' },
        { nl: 'Reclame maken voor frisdrank zonder suiker', en: 'Advertise sugar-free soft drinks' },
        { nl: 'Uitleggen hoe je zelf limonade maakt', en: 'Explain how to make your own lemonade' }
      ], answer: 0,
      explain: { nl: 'De tekst geeft eerst de voorstanders het woord, dan de tegenstanders, en eindigt met "En wat vind jij?". Dat is nadenken uitlokken, geen overtuigen.',
                 en: 'The text first gives the supporters a voice, then the opponents, and ends with "So what do you think?" That is inviting thought, not persuading.' } },
    { id: 'q4', type: 'mc', skill: 'verwijswoorden',
      q: { nl: '"Dan is er van de gezondheidswinst weinig over." Waar verwijst "dan" naar?',
           en: '"Then little is left of the health benefit." What does "then" refer to?' },
      options: [
        { nl: 'Naar het moment waarop mensen overstappen op goedkopere suikerhoudende alternatieven',
          en: 'To the moment when people switch to cheaper sugary alternatives' },
        { nl: 'Naar het moment waarop de belasting wordt ingevoerd', en: 'To the moment when the tax is introduced' },
        { nl: 'Naar het moment waarop fabrikanten hun recept aanpassen', en: 'To the moment when manufacturers adjust their recipe' },
        { nl: 'Naar het moment waarop de overheid voorlichting geeft', en: 'To the moment when the government gives information' }
      ], answer: 0,
      explain: { nl: 'De zin ervoor beschrijft dat mensen uitwijken naar goedkopere suikerhoudende alternatieven; "dan" verwijst naar dat moment.',
                 en: 'The sentence before describes people switching to cheaper sugary alternatives; "then" refers to that moment.' } },
    { id: 'q5', type: 'multi', skill: 'gevolgtrekking',
      q: { nl: 'Welke twee argumenten gebruiken de tegenstanders van een suikertaks? Kies er 2.',
           en: 'Which two arguments do opponents of a sugar tax use? Pick 2.' },
      options: [
        { nl: 'Een extra belasting raakt gezinnen met een lager inkomen harder', en: 'An extra tax hits families with a lower income harder' },
        { nl: 'Mensen wijken vaak uit naar goedkopere suikerhoudende alternatieven', en: 'People often switch to cheaper sugary alternatives' },
        { nl: 'Suiker is niet slecht voor je tanden', en: 'Sugar is not bad for your teeth' },
        { nl: 'De belasting levert de overheid te veel geld op', en: 'The tax raises too much money for the government' }
      ], answer: [0, 1],
      explain: { nl: 'Alinea 5 noemt precies deze twee: de belasting raakt lagere inkomens harder, en mensen wijken uit naar alternatieven. Over tanden of te veel geld zegt de tekst niets.',
                 en: 'Paragraph 5 names exactly these two: the tax hits lower incomes harder, and people switch to alternatives. The text says nothing about teeth or too much money.' } },
    { id: 'q6', type: 'mc', skill: 'structuur',
      q: { nl: 'Alinea 7 begint met "Onderzoekers zien intussen...". Wat doet die alinea in de tekst?',
           en: 'Paragraph 7 begins "Researchers meanwhile find...". What does that paragraph do in the text?' },
      options: [
        { nl: 'Ze brengt de twee kanten samen en laat zien dat de waarheid genuanceerd is',
          en: 'It brings the two sides together and shows the truth is nuanced' },
        { nl: 'Ze herhaalt het argument van de voorstanders', en: 'It repeats the supporters’ argument' },
        { nl: 'Ze bewijst dat de tegenstanders gelijk hebben', en: 'It proves the opponents are right' },
        { nl: 'Ze vertelt hoe je frisdrank maakt', en: 'It explains how to make soft drinks' }
      ], answer: 0,
      explain: { nl: 'Na de duidelijke voor- en tegenkant komt een alinea die nuanceert: een suikertaks werkt vooral in combinatie met voorlichting.',
                 en: 'After the clear for-and-against comes a paragraph that adds nuance: a sugar tax mainly works combined with information.' } },
    { id: 'q7', type: 'mc', skill: 'samenvatten',
      q: { nl: 'Welke samenvatting past het beste bij de hele tekst?', en: 'Which summary fits the whole text best?' },
      options: [
        { nl: 'Een suikertaks maakt suiker duurder om mensen minder te laten drinken en eten, maar de effecten op arme gezinnen en de kans om uit te wijken naar alternatieven maken het een lastige discussie.',
          en: 'A sugar tax makes sugar more expensive to make people eat and drink less of it, but the effects on poorer families and the chance to switch to alternatives make it a difficult discussion.' },
        { nl: 'Cola is duurder geworden omdat fabrikanten meer winst willen maken.', en: 'Cola has become more expensive because manufacturers want more profit.' },
        { nl: 'Het Verenigd Koninkrijk en Mexico hebben dezelfde belastingregels.', en: 'The United Kingdom and Mexico have the same tax rules.' },
        { nl: 'De overheid gebruikt het belastinggeld altijd voor sportlessen.', en: 'The government always uses the tax money for sports lessons.' }
      ], answer: 0,
      explain: { nl: 'Die zin vat het hele dilemma samen: doel, voordeel én nadeel. De andere drie zijn losse details uit één alinea.',
                 en: 'That sentence sums up the whole dilemma: goal, benefit and downside. The other three are single details from one paragraph.' } },
    { id: 'q8', type: 'tf', skill: 'gevolgtrekking',
      q: { nl: 'Volgens de tekst is iedereen het erover eens dat een suikertaks de beste oplossing is.',
           en: 'According to the text, everyone agrees that a sugar tax is the best solution.' },
      answer: false,
      explain: { nl: 'De tekst laat juist zien dat voor- en tegenstanders het oneens zijn, en dat onderzoekers een genuanceerd antwoord geven.',
                 en: 'The text actually shows supporters and opponents disagree, and researchers give a nuanced answer.' } },
    { id: 'q9', type: 'mc', skill: 'woordenschat',
      q: { nl: 'In de tekst staat: mensen "wijken uit naar goedkopere alternatieven". Wat betekent dat hier?',
           en: 'The text says people "switch to cheaper alternatives". What does that mean here?' },
      options: [
        { nl: 'Ze kopen iets anders dat minder kost maar net zo veel suiker bevat',
          en: 'They buy something else that costs less but contains just as much sugar' },
        { nl: 'Ze stoppen helemaal met frisdrank drinken', en: 'They stop drinking soft drinks completely' },
        { nl: 'Ze verhuizen naar een ander land', en: 'They move to another country' },
        { nl: 'Ze kopen juist duurdere merken', en: 'They buy more expensive brands instead' }
      ], answer: 0,
      explain: { nl: '"Uitwijken naar" betekent hier overstappen op iets anders: in dit geval een goedkoper product met evenveel suiker.',
                 en: '"Switch to" here means moving to something else: in this case a cheaper product with just as much sugar.' } }
  ]
},
{
  id: 'eten-11', topic: 'eten', level: 1, emoji: '🍓', scene: 'farm',
  title: { nl: 'Aardbeien in de winter?', en: 'Strawberries in winter?' },
  text: {
    nl: [
      "In de zomer kun je bij veel boeren zelf aardbeien plukken. Ze zijn rood, zoet en sappig. Maar in de supermarkt liggen er ook aardbeien als het buiten sneeuwt. Hoe kan dat?",
      "Een aardbeiplant heeft zon en warmte nodig. In Nederland groeien aardbeien buiten daarom vooral in juni en juli. Dat noemen we het seizoen van de aardbei.",
      "In de winter komen aardbeien vaak uit een kas. Een kas is een huis van glas. De boer verwarmt de kas en zet er lampen aan. Zo lijkt het voor de plant elke dag zomer.",
      "Andere aardbeien komen van ver weg, bijvoorbeeld uit Spanje of Egypte. Daar is het in de winter warmer. De aardbeien reizen dan met vrachtwagens of vliegtuigen naar onze winkels.",
      "Een verwarmde kas en een lange reis kosten veel energie. Daarom kiezen sommige mensen ervoor om aardbeien alleen in de zomer te eten. Dan smaken ze volgens hen ook het lekkerst."
    ],
    en: [
      "In summer you can pick your own strawberries at many farms. They are red, sweet and juicy. But there are also strawberries in the supermarket when it is snowing outside. How is that possible?",
      "A strawberry plant needs sun and warmth. That is why, in the Netherlands, strawberries grow outdoors mainly in June and July. We call that the strawberry season.",
      "In winter, strawberries often come from a greenhouse. A greenhouse is a house made of glass. The farmer heats the greenhouse and switches on lamps. That way, for the plant it seems like summer every day.",
      "Other strawberries come from far away, for example from Spain or Egypt. It is warmer there in winter. The strawberries then travel by lorry or by plane to our shops.",
      "A heated greenhouse and a long journey use a lot of energy. That is why some people choose to eat strawberries only in summer. They say that is when they taste best, too."
    ]
  },
  words: [
    { nl: 'seizoen', en: 'season', defNl: 'de tijd van het jaar waarin iets gebeurt of groeit', defEn: 'the time of year when something happens or grows' },
    { nl: 'kas', en: 'greenhouse', defNl: 'een huis van glas waarin planten groeien', defEn: 'a glass house in which plants grow' },
    { nl: 'energie', en: 'energy', defNl: 'wat je nodig hebt om iets warm te maken of te laten bewegen', defEn: 'what you need to heat something or make it move' }
  ],
  questions: [
    { id: 'q1', type: 'mc', skill: 'letterlijk',
      q: { nl: 'In welke maanden groeien aardbeien in Nederland vooral buiten?', en: 'In which months do strawberries mainly grow outdoors in the Netherlands?' },
      options: [
        { nl: 'In juni en juli', en: 'In June and July' },
        { nl: 'In december en januari', en: 'In December and January' },
        { nl: 'In maart en april', en: 'In March and April' },
        { nl: 'Het hele jaar door', en: 'All year round' }
      ], answer: 0,
      explain: { nl: 'Alinea 2: "In Nederland groeien aardbeien buiten daarom vooral in juni en juli."',
                 en: 'Paragraph 2: "in the Netherlands, strawberries grow outdoors mainly in June and July."' } },
    { id: 'q2', type: 'tf', skill: 'letterlijk',
      q: { nl: 'Een boer zet in een kas lampen aan, zodat het voor de plant lijkt alsof het zomer is.', en: 'A farmer switches on lamps in a greenhouse, so that it seems like summer to the plant.' },
      answer: true,
      explain: { nl: 'Waar. Alinea 3: "De boer verwarmt de kas en zet er lampen aan. Zo lijkt het voor de plant elke dag zomer."',
                 en: 'True. Paragraph 3: "The farmer heats the greenhouse and switches on lamps. That way, for the plant it seems like summer every day."' } },
    { id: 'q3', type: 'gap', skill: 'woordenschat',
      q: { nl: 'Een huis van glas waarin planten groeien, heet een ___.', en: 'A glass house in which plants grow is called a ___.' },
      options: [
        { nl: 'schuur', en: 'shed' },
        { nl: 'stal', en: 'stable' },
        { nl: 'kas', en: 'greenhouse' },
        { nl: 'kelder', en: 'cellar' }
      ], answer: 2,
      explain: { nl: 'De tekst zegt letterlijk: "Een kas is een huis van glas."',
                 en: 'The text says it directly: "A greenhouse is a house made of glass."' } },
    { id: 'q4', type: 'order', skill: 'volgorde',
      q: { nl: 'Een winteraardbei uit Spanje: zet de reis in de goede volgorde.', en: 'A winter strawberry from Spain: put the journey in the right order.' },
      items: [
        { nl: 'De aardbei groeit in het warme Spanje.', en: 'The strawberry grows in warm Spain.' },
        { nl: 'Hij wordt geplukt.', en: 'It is picked.' },
        { nl: 'Een vrachtwagen rijdt hem naar Nederland.', en: 'A lorry drives it to the Netherlands.' },
        { nl: 'Hij ligt in de supermarkt.', en: 'It is in the supermarket.' }
      ], answer: [0, 1, 2, 3],
      explain: { nl: 'Eerst groeien, dan plukken, dan reizen, en pas dan ligt hij in de winkel.',
                 en: 'First growing, then picking, then travelling, and only then is it in the shop.' } },
    { id: 'q5', type: 'mc', skill: 'hoofdgedachte',
      q: { nl: 'Welke vraag beantwoordt deze tekst?', en: 'Which question does this text answer?' },
      options: [
        { nl: 'Hoe maak je aardbeienjam?', en: 'How do you make strawberry jam?' },
        { nl: 'Waarom zijn aardbeien rood?', en: 'Why are strawberries red?' },
        { nl: 'Hoe komen er aardbeien in de winkel als het winter is?', en: 'How do strawberries get into the shop in winter?' },
        { nl: 'Wat eten ze in Egypte?', en: 'What do people eat in Egypt?' }
      ], answer: 2,
      explain: { nl: 'De tekst begint met die vraag en legt uit: uit een kas, of van ver weg.',
                 en: 'The text starts with that question and explains: from a greenhouse, or from far away.' } }
  ]
},

{
  id: 'eten-12', topic: 'eten', level: 6, emoji: '🍔', scene: 'lab',
  title: { nl: 'Een hamburger uit het lab', en: 'A burger from the lab' },
  text: {
    nl: [
      "In augustus 2013 zat een groepje journalisten in Londen klaar voor een bijzondere proeverij. Op het bord lag een hamburger die er heel gewoon uitzag. Toch was er geen koe voor gestorven. Het vlees was gegroeid in een laboratorium in Maastricht, onder leiding van professor Mark Post. Die ene burger had ongeveer 250.000 euro gekost. De proevers vonden hem wat droog, maar het was onmiskenbaar vlees.",
      "Hoe maak je vlees zonder dier? Onderzoekers nemen met een klein prikje een paar cellen uit de spier van een levende koe. De koe merkt daar weinig van. In het lab leggen ze die cellen in een voedingsvloeistof, een soort soep vol suikers, zouten en eiwitten. Daarin gaan de cellen delen: uit één cel worden er twee, dan vier, dan acht. Na een paar weken zijn het er miljarden, genoeg voor een stukje gehakt.",
      "Waarom zou je dat willen? De veehouderij heeft enorm veel land nodig voor weiden en voor voer. Koeien stoten bovendien methaan uit, een gas dat de aarde sterk opwarmt. Als vlees uit het lab op grote schaal gemaakt kan worden, zijn er veel minder dieren nodig. Voorstanders zeggen dat het ook diervriendelijker is: geen stallen vol dieren meer die alleen voor hun vlees leven.",
      "Toch is het nog lang niet zover. Het grootste probleem is de prijs. De burger is sinds 2013 veel goedkoper geworden, maar nog altijd duurder dan gewoon vlees. Ook moeten de fabrieken enorm groot worden om miljoenen mensen te kunnen voeden. En die fabrieken hebben zelf veel energie nodig. Als die energie uit kolen komt, is de winst voor het klimaat een stuk kleiner.",
      "Daarnaast twijfelen sommige mensen of ze het wel willen eten. Zij vinden het onnatuurlijk: 'Vlees hoort van een dier uit de wei te komen.' Veehouders maken zich zorgen over hun werk. In Singapore mag kweekvlees sinds 2020 in restaurants verkocht worden. In Nederland mogen mensen het sinds kort onder strenge regels proeven, maar in de winkel ligt het nog niet.",
      "Misschien eten we over twintig jaar allemaal kweekvlees. Misschien blijft het een dure proef, en kiezen mensen liever voor bonen, noten of gewoon minder vlees. Eén ding is zeker: de vraag hoe we in de toekomst genoeg eten maken voor bijna tien miljard mensen, zonder de aarde uit te putten, is nog lang niet beantwoord."
    ],
    en: [
      "In August 2013 a small group of journalists in London sat ready for a special tasting. On the plate lay a burger that looked perfectly ordinary. Yet no cow had died for it. The meat had been grown in a laboratory in Maastricht, led by professor Mark Post. That one burger had cost about 250,000 euros. The tasters found it a bit dry, but it was unmistakably meat.",
      "How do you make meat without an animal? Researchers use a small needle to take a few cells from the muscle of a living cow. The cow hardly notices. In the lab they put those cells in a nutrient liquid, a kind of soup full of sugars, salts and proteins. In it the cells start to divide: one cell becomes two, then four, then eight. After a few weeks there are billions, enough for a piece of mince.",
      "Why would you want that? Livestock farming needs an enormous amount of land for pastures and for feed. Cows also give off methane, a gas that strongly warms the earth. If lab-grown meat can be made on a large scale, far fewer animals are needed. Supporters say it is kinder to animals too: no more barns full of animals that live only for their meat.",
      "Still, we are far from there. The biggest problem is the price. The burger has become much cheaper since 2013, but it is still more expensive than ordinary meat. The factories also have to become enormous to feed millions of people. And those factories need a lot of energy themselves. If that energy comes from coal, the gain for the climate is a lot smaller.",
      "On top of that, some people doubt whether they want to eat it at all. They find it unnatural: 'Meat should come from an animal in the meadow.' Livestock farmers worry about their jobs. In Singapore cultured meat has been allowed on sale in restaurants since 2020. In the Netherlands people have recently been allowed to taste it under strict rules, but it is not in the shops yet.",
      "Perhaps in twenty years we will all eat cultured meat. Perhaps it will stay an expensive experiment, and people will prefer beans, nuts or simply less meat. One thing is certain: the question of how we will make enough food in the future for almost ten billion people, without wearing out the earth, is far from answered."
    ]
  },
  words: [
    { nl: 'onmiskenbaar', en: 'unmistakably', defNl: 'zo duidelijk dat niemand kan zeggen dat het niet zo is', defEn: 'so clearly that nobody can deny it' },
    { nl: 'voedingsvloeistof', en: 'nutrient liquid', defNl: 'een vloeistof met alles wat cellen nodig hebben om te groeien', defEn: 'a liquid with everything cells need to grow' },
    { nl: 'veehouderij', en: 'livestock farming', defNl: 'het houden van dieren zoals koeien en varkens voor vlees of melk', defEn: 'keeping animals such as cows and pigs for meat or milk' }
  ],
  questions: [
    { id: 'q1', type: 'mc', skill: 'letterlijk',
      q: { nl: 'Waar werd het vlees van de eerste kweekburger gegroeid?', en: 'Where was the meat of the first cultured burger grown?' },
      options: [
        { nl: 'In een laboratorium in Maastricht', en: 'In a laboratory in Maastricht' },
        { nl: 'In een restaurant in Londen', en: 'In a restaurant in London' },
        { nl: 'Op een boerderij in Singapore', en: 'On a farm in Singapore' },
        { nl: 'In een fabriek op kolen', en: 'In a coal-powered factory' }
      ], answer: 0,
      explain: { nl: 'Alinea 1: "Het vlees was gegroeid in een laboratorium in Maastricht." Geproefd werd er in Londen.',
                 en: 'Paragraph 1: "The meat had been grown in a laboratory in Maastricht." The tasting was in London.' } },
    { id: 'q2', type: 'find', skill: 'letterlijk',
      q: { nl: 'Welke zin vertelt hoe de cellen zich vermenigvuldigen?', en: 'Which sentence tells how the cells multiply?' },
      options: [
        { nl: 'De koe merkt daar weinig van.', en: 'The cow hardly notices.' },
        { nl: 'Die ene burger had ongeveer 250.000 euro gekost.', en: 'That one burger had cost about 250,000 euros.' },
        { nl: 'Daarin gaan de cellen delen: uit één cel worden er twee, dan vier, dan acht.', en: 'In it the cells start to divide: one cell becomes two, then four, then eight.' },
        { nl: 'Koeien stoten bovendien methaan uit, een gas dat de aarde sterk opwarmt.', en: 'Cows also give off methane, a gas that strongly warms the earth.' }
      ], answer: 2,
      explain: { nl: 'Vermenigvuldigen betekent: steeds meer worden. Dat staat precies in deze zin uit alinea 2.',
                 en: 'Multiplying means: becoming more and more. This sentence from paragraph 2 says exactly that.' } },
    { id: 'q3', type: 'gap', skill: 'woordenschat',
      q: { nl: 'Als iets op grote schaal gemaakt wordt, dan ___.', en: 'If something is made on a large scale, then ___.' },
      options: [
        { nl: 'wordt er heel veel van gemaakt, bijvoorbeeld in grote fabrieken', en: 'a great deal of it is made, for example in big factories' },
        { nl: 'wordt het op een weegschaal gewogen', en: 'it is weighed on scales' },
        { nl: 'is het heel groot van formaat', en: 'it is very large in size' },
        { nl: 'wordt het maar één keer gemaakt', en: 'it is made only once' }
      ], answer: 0,
      explain: { nl: 'Op grote schaal betekent: in grote hoeveelheden. Daarom moeten de fabrieken in alinea 4 ook zo groot worden.',
                 en: 'On a large scale means: in large quantities. That is why the factories in paragraph 4 must become so big.' } },
    { id: 'q4', type: 'order', skill: 'volgorde',
      q: { nl: 'Hoe wordt kweekvlees gemaakt? Zet de stappen op volgorde.', en: 'How is cultured meat made? Put the steps in order.' },
      items: [
        { nl: 'Met een prikje worden cellen uit een koe gehaald.', en: 'Cells are taken from a cow with a needle.' },
        { nl: 'De cellen gaan in een voedingsvloeistof.', en: 'The cells go into a nutrient liquid.' },
        { nl: 'De cellen delen zich steeds opnieuw.', en: 'The cells divide again and again.' },
        { nl: 'Er zijn genoeg cellen voor een stukje gehakt.', en: 'There are enough cells for a piece of mince.' }
      ], answer: [0, 1, 2, 3],
      explain: { nl: 'Alinea 2 beschrijft de stappen in deze volgorde: prikje, soep, delen, na een paar weken genoeg.',
                 en: 'Paragraph 2 describes the steps in this order: needle, soup, dividing, enough after a few weeks.' } },
    { id: 'q5', type: 'mc', skill: 'verwijswoorden',
      q: { nl: '"Zij vinden het onnatuurlijk." Wie zijn "zij"?', en: '"They find it unnatural." Who are "they"?' },
      options: [
        { nl: 'Mensen die twijfelen of ze kweekvlees willen eten', en: 'People who doubt whether they want to eat cultured meat' },
        { nl: 'De journalisten in Londen', en: 'The journalists in London' },
        { nl: 'De cellen in het lab', en: 'The cells in the lab' },
        { nl: 'De restaurants in Singapore', en: 'The restaurants in Singapore' }
      ], answer: 0,
      explain: { nl: 'De zin ervoor noemt "sommige mensen" die twijfelen. Naar hen verwijst "zij".',
                 en: 'The sentence before names "some people" who doubt. "They" points to them.' } },
    { id: 'q6', type: 'sort', skill: 'structuur',
      q: { nl: 'Voordeel of probleem? Zet elke zin in de goede groep.', en: 'Advantage or problem? Put every sentence in the right group.' },
      bins: [{ nl: 'Voordeel', en: 'Advantage' }, { nl: 'Probleem', en: 'Problem' }],
      items: [
        { nl: 'Er is veel minder land nodig.', en: 'Much less land is needed.', bin: 0 },
        { nl: 'Het is nog duurder dan gewoon vlees.', en: 'It is still more expensive than ordinary meat.', bin: 1 },
        { nl: 'Er zijn geen stallen vol dieren meer nodig.', en: 'Barns full of animals are no longer needed.', bin: 0 },
        { nl: 'De fabrieken gebruiken veel energie.', en: 'The factories use a lot of energy.', bin: 1 }
      ],
      explain: { nl: 'De tekst zet voordelen (alinea 3) tegenover problemen (alinea 4 en 5). Het signaalwoord "Toch" markeert de overgang.',
                 en: 'The text sets advantages (paragraph 3) against problems (paragraphs 4 and 5). The signal word "Still" marks the switch.' } },
    { id: 'q7', type: 'sort', skill: 'feitmening',
      q: { nl: 'Feit of mening? Zet elke zin in de goede groep.', en: 'Fact or opinion? Put every sentence in the right group.' },
      bins: [{ nl: 'Feit', en: 'Fact' }, { nl: 'Mening', en: 'Opinion' }],
      items: [
        { nl: 'In Singapore mag kweekvlees sinds 2020 verkocht worden.', en: 'Cultured meat has been allowed on sale in Singapore since 2020.', bin: 0 },
        { nl: 'Vlees hoort van een dier uit de wei te komen.', en: 'Meat should come from an animal in the meadow.', bin: 1 },
        { nl: 'Koeien stoten methaan uit.', en: 'Cows give off methane.', bin: 0 },
        { nl: 'Kweekvlees smaakt vast lekkerder dan bonen.', en: 'Cultured meat must taste better than beans.', bin: 1 }
      ],
      explain: { nl: 'Wetten en metingen zijn feiten. "Hoort" en "lekkerder" zijn wat iemand vindt.',
                 en: 'Laws and measurements are facts. "Should" and "better" are what someone thinks.' } },
    { id: 'q8', type: 'multi', skill: 'letterlijk',
      q: { nl: 'Welke problemen staan kweekvlees volgens de tekst nu nog in de weg? Kies er 2.', en: 'According to the text, which problems still stand in the way of cultured meat? Pick 2.' },
      options: [
        { nl: 'De prijs is nog te hoog', en: 'The price is still too high' },
        { nl: 'De fabrieken moeten veel groter worden', en: 'The factories have to become much bigger' },
        { nl: 'Koeien willen niet meewerken', en: 'Cows refuse to cooperate' },
        { nl: 'Het mag nergens ter wereld verkocht worden', en: 'It may not be sold anywhere in the world' }
      ], answer: [0, 1],
      explain: { nl: 'Alinea 4 noemt de prijs en de grootte van de fabrieken. In Singapore mag het juist wel verkocht worden.',
                 en: 'Paragraph 4 names the price and the size of the factories. In Singapore it can in fact be sold.' } },
    { id: 'q9', type: 'mc', skill: 'doel',
      q: { nl: 'Wat doet de schrijver in de laatste alinea?', en: 'What does the writer do in the last paragraph?' },
      options: [
        { nl: 'Hij laat twee mogelijke toekomsten zien en zegt dat de grote vraag nog open is', en: 'Shows two possible futures and says the big question is still open' },
        { nl: 'Hij raadt iedereen aan om kweekvlees te kopen', en: 'Advises everyone to buy cultured meat' },
        { nl: 'Hij legt uit hoe je bonen kookt', en: 'Explains how to cook beans' },
        { nl: 'Hij vertelt hoe de burger in 2013 smaakte', en: 'Tells how the burger tasted in 2013' }
      ], answer: 0,
      explain: { nl: 'Twee keer "misschien" en dan "Eén ding is zeker": de schrijver kiest geen kant, maar sluit af met de grote vraag.',
                 en: 'Twice "perhaps" and then "one thing is certain": the writer takes no side but ends with the big question.' } },
    { id: 'q10', type: 'mc', skill: 'samenvatten',
      q: { nl: 'Welke samenvatting past het best bij de hele tekst?', en: 'Which summary fits the whole text best?' },
      options: [
        { nl: 'Vlees uit het lab kan goed zijn voor klimaat en dieren, maar is nog duur, lastig op grote schaal te maken en niet iedereen wil het eten.',
          en: 'Lab-grown meat could be good for the climate and animals, but it is still expensive, hard to make on a large scale and not everyone wants to eat it.' },
        { nl: 'In 2013 werd in Londen een hamburger geproefd.', en: 'In 2013 a burger was tasted in London.' },
        { nl: 'Koeien stoten methaan uit en moeten daarom verdwijnen.', en: 'Cows give off methane and must therefore disappear.' },
        { nl: 'Kweekvlees ligt al overal in de winkel.', en: 'Cultured meat is already in shops everywhere.' }
      ], answer: 0,
      explain: { nl: 'Een goede samenvatting noemt de belofte én de problemen. De andere keuzes zijn een detail, een mening of kloppen niet.',
                 en: 'A good summary names the promise and the problems. The other options are a detail, an opinion or wrong.' } }
  ]
}
]);
