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
