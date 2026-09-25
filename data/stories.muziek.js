/* Wereld 8 - Muziek & Kunst */
addStories([
{
  id: 'muziek-1', topic: 'muziek', level: 1, emoji: '🥁', scene: 'stage',
  title: { nl: 'De trommel die praat', en: 'The drum that talks' },
  text: {
    nl: [
      "In Nigeria bestaat een trommel die kan praten. Hij heet de talking drum. Hij is klein, hij lijkt op een zandloper, en je klemt hem onder je arm.",
      "Aan de zijkant zitten touwtjes. Knijp je je arm samen, dan trek je aan die touwtjes. Het vel op de trommel wordt strakker en de toon gaat omhoog. Laat je los, dan gaat de toon weer omlaag.",
      "Waarom is dat zo bijzonder? In veel talen in West-Afrika betekent een woord iets anders als je het hoger of lager zegt. Een trommelaar kan daarom hele zinnen nadoen: hoog, laag, hoog, kort, lang.",
      "Vroeger gebruikten mensen de trommel om berichten door te geven. Van dorp naar dorp, over een afstand van wel acht kilometer. Als het stil was, kon een boodschap sneller reizen dan een ruiter.",
      "Nu hoor je de talking drum ook op feesten en in popmuziek. En nog steeds geldt: wie de taal kent, hoort geen geklop maar woorden."
    ],
    en: [
      "In Nigeria there is a drum that can talk. It is called the talking drum. It is small, it looks like an hourglass, and you hold it under your arm.",
      "There are cords along the side. Squeeze your arm and you pull on those cords. The skin of the drum gets tighter and the note goes up. Let go and the note goes down again.",
      "Why is that so special? In many West African languages a word means something else if you say it higher or lower. So a drummer can copy whole sentences: high, low, high, short, long.",
      "In the old days people used the drum to pass on messages. From village to village, over a distance of as much as eight kilometres. On a quiet day a message could travel faster than a rider.",
      "Nowadays you also hear the talking drum at parties and in pop music. And it is still true: anyone who knows the language hears no knocking, but words."
    ]
  },
  words: [
    { nl: 'vel', en: 'skin (of a drum)', defNl: 'het strakke stuk leer of plastic waar je op slaat', defEn: 'the tight piece of leather or plastic you hit' },
    { nl: 'toon', en: 'note, pitch', defNl: 'hoe hoog of laag een geluid klinkt', defEn: 'how high or low a sound is' },
    { nl: 'boodschap', en: 'message', defNl: 'iets wat je aan iemand anders wilt laten weten', defEn: 'something you want to let somebody else know' }
  ],
  questions: [
    { id: 'q1', type: 'mc', skill: 'letterlijk',
      q: { nl: 'Waar lijkt de talking drum op?', en: 'What does the talking drum look like?' },
      options: [
        { nl: 'Op een zandloper', en: 'An hourglass' },
        { nl: 'Op een emmer', en: 'A bucket' },
        { nl: 'Op een gitaar', en: 'A guitar' },
        { nl: 'Op een bal', en: 'A ball' }
      ], answer: 0,
      explain: { nl: 'In alinea 1 staat: hij lijkt op een zandloper.', en: 'Paragraph 1 says it looks like an hourglass.' } },
    { id: 'q2', type: 'tf', skill: 'letterlijk',
      q: { nl: 'Als je je arm samenknijpt, gaat de toon omlaag.', en: 'If you squeeze your arm, the note goes down.' },
      answer: false,
      explain: { nl: 'Dan wordt het vel juist strakker en gaat de toon omhóóg.',
                 en: 'Then the skin gets tighter and the note goes up.' } },
    { id: 'q3', type: 'mc', skill: 'gevolgtrekking',
      q: { nl: 'Waarom kan een trommelaar met deze trommel zinnen nadoen?',
           en: 'Why can a drummer copy sentences with this drum?' },
      options: [
        { nl: 'Omdat woorden in die talen anders betekenen als je ze hoger of lager zegt',
          en: 'Because in those languages words mean something else when said higher or lower' },
        { nl: 'Omdat de trommel heel hard klinkt', en: 'Because the drum is very loud' },
        { nl: 'Omdat er letters op de trommel staan', en: 'Because there are letters on the drum' },
        { nl: 'Omdat de trommel klein is', en: 'Because the drum is small' }
      ], answer: 0,
      explain: { nl: 'Alinea 3 legt dat uit: hoog en laag veranderen de betekenis van een woord.',
                 en: 'Paragraph 3 explains it: high and low change the meaning of a word.' } },
    { id: 'q4', type: 'gap', skill: 'woordenschat',
      q: { nl: 'Het vel van een trommel is ___.', en: 'The skin of a drum is ___.' },
      options: [
        { nl: 'het strakke stuk leer of plastic waarop je slaat', en: 'the tight piece of leather or plastic you hit' },
        { nl: 'het touwtje aan de zijkant', en: 'the cord along the side' },
        { nl: 'de houten rand eromheen', en: 'the wooden rim around it' },
        { nl: 'het geluid dat eruit komt', en: 'the sound that comes out' }
      ], answer: 0,
      explain: { nl: 'In alinea 2 staat dat het vel strakker wordt als je aan de touwtjes trekt.',
                 en: 'Paragraph 2 says the skin gets tighter when you pull the cords.' } },
    { id: 'q5', type: 'mc', skill: 'hoofdgedachte',
      q: { nl: 'Waar gaat dit stuk vooral over?', en: 'What is this text mainly about?' },
      options: [
        { nl: 'Een trommel waarmee je woorden kunt doorgeven', en: 'A drum you can pass on words with' },
        { nl: 'Hoe je een trommel maakt', en: 'How to make a drum' },
        { nl: 'Popmuziek in Nigeria', en: 'Pop music in Nigeria' },
        { nl: 'Hoe snel een ruiter kan rijden', en: 'How fast a rider can ride' }
      ], answer: 0,
      explain: { nl: 'Elke alinea gaat over de trommel die praat.', en: 'Every paragraph is about the drum that talks.' } }
  ]
},

{
  id: 'muziek-2', topic: 'muziek', level: 2, emoji: '🎻', scene: 'stage',
  title: { nl: 'Het geheim van de Stradivarius', en: 'The secret of the Stradivarius' },
  text: {
    nl: [
      "In een kluis in Cremona, in Italië, ligt een viool van driehonderd jaar oud. Hij is gemaakt door Antonio Stradivari. Zo'n viool kan miljoenen euro's kosten, meer dan een groot huis. Er zijn er nog ongeveer zeshonderd over.",
      "Waarom zijn ze zo duur? Veel violisten zeggen dat het geluid warmer en voller is dan van een nieuwe viool. Anderen denken dat er iets anders meespeelt: de naam.",
      "Onderzoekers hebben het uitgezocht met een eerlijke proef. Beroepsviolisten kregen een blinddoek op en speelden om de beurt op oude en nieuwe violen. Ze wisten niet wat ze in handen hadden. Daarna moesten ze hun favoriet kiezen.",
      "De uitkomst verbaasde veel mensen. De violisten kozen vaak een nieuwe viool. En als ze moesten raden of iets een Stradivarius was, zaten ze er even vaak naast als goed.",
      "Toch blijven de oude violen bijzonder. Ze zijn met de hand gemaakt van hout dat langzaam groeide in een koude periode, waardoor de jaarringen dicht op elkaar zitten. Het vernis is een recept dat Stradivari nooit opschreef.",
      "Misschien is het echte geheim dus niet de klank, maar het verhaal. Een viool die drie eeuwen heeft overleefd, klinkt anders in je oor, ook als je meetapparaat niets bijzonders ziet."
    ],
    en: [
      "In a safe in Cremona, in Italy, lies a violin three hundred years old. It was made by Antonio Stradivari. Such a violin can cost millions of euros, more than a large house. About six hundred of them are left.",
      "Why are they so expensive? Many violinists say the sound is warmer and fuller than that of a new violin. Others think something else plays a part: the name.",
      "Researchers looked into it with a fair test. Professional violinists were blindfolded and played old and new violins in turn. They did not know what they were holding. Afterwards they had to choose their favourite.",
      "The result surprised many people. The violinists often chose a new violin. And when they had to guess whether something was a Stradivarius, they were wrong just as often as they were right.",
      "Still, the old violins are special. They were made by hand from wood that grew slowly in a cold period, so the growth rings sit close together. The varnish follows a recipe Stradivari never wrote down.",
      "So perhaps the real secret is not the sound but the story. A violin that has survived three centuries sounds different in your ear, even when your measuring equipment sees nothing special."
    ]
  },
  words: [
    { nl: 'kluis', en: 'safe, vault', defNl: 'een sterke kast waarin je kostbare dingen bewaart', defEn: 'a strong cupboard where valuable things are kept' },
    { nl: 'jaarringen', en: 'growth rings', defNl: 'de kringen in hout die laten zien hoeveel een boom per jaar groeide', defEn: 'the rings in wood showing how much a tree grew each year' },
    { nl: 'vernis', en: 'varnish', defNl: 'de glanzende laag die je over hout schildert', defEn: 'the shiny layer painted over wood' }
  ],
  questions: [
    { id: 'q1', type: 'mc', skill: 'letterlijk',
      q: { nl: 'Hoe werd de proef met de violisten eerlijk gehouden?',
           en: 'How was the test with the violinists kept fair?' },
      options: [
        { nl: 'De violisten kregen een blinddoek op', en: 'The violinists were blindfolded' },
        { nl: 'Ze speelden allemaal hetzelfde liedje', en: 'They all played the same tune' },
        { nl: 'Ze mochten maar één keer spelen', en: 'They were allowed to play only once' },
        { nl: 'Er stond een jury bij', en: 'A jury was present' }
      ], answer: 0,
      explain: { nl: 'Alinea 3: met een blinddoek wisten ze niet wat ze in handen hadden.',
                 en: 'Paragraph 3: blindfolded, they did not know what they were holding.' } },
    { id: 'q2', type: 'mc', skill: 'gevolgtrekking',
      q: { nl: 'Wat bleek uit de proef?', en: 'What did the test show?' },
      options: [
        { nl: 'Violisten kozen vaak een nieuwe viool en konden een Stradivarius niet herkennen',
          en: 'Violinists often chose a new violin and could not recognise a Stradivarius' },
        { nl: 'Oude violen klinken altijd beter', en: 'Old violins always sound better' },
        { nl: 'Alleen kinderen horen het verschil', en: 'Only children hear the difference' },
        { nl: 'Nieuwe violen zijn duurder', en: 'New violins are more expensive' }
      ], answer: 0,
      explain: { nl: 'Alinea 4 noemt beide uitkomsten: vaak nieuw gekozen, en het raden lukte niet.',
                 en: 'Paragraph 4 gives both results: new ones often chosen, and guessing did not work.' } },
    { id: 'q3', type: 'gap', skill: 'woordenschat',
      q: { nl: 'Jaarringen in hout laten zien ___.', en: 'Growth rings in wood show ___.' },
      options: [
        { nl: 'hoeveel een boom per jaar groeide', en: 'how much a tree grew each year' },
        { nl: 'hoe duur het hout is', en: 'how expensive the wood is' },
        { nl: 'welke kleur het vernis heeft', en: 'what colour the varnish is' },
        { nl: 'hoe zwaar de viool is', en: 'how heavy the violin is' }
      ], answer: 0,
      explain: { nl: 'De tekst zegt dat het hout langzaam groeide, waardoor de ringen dicht op elkaar zitten.',
                 en: 'The text says the wood grew slowly, so the rings sit close together.' } },
    { id: 'q4', type: 'match', skill: 'woordenschat',
      q: { nl: 'Koppel het woord aan de betekenis.', en: 'Match the word to its meaning.' },
      pairs: [
        { word: { nl: 'kluis', en: 'safe' }, meaning: { nl: 'sterke kast voor kostbare spullen', en: 'strong cupboard for valuables' } },
        { word: { nl: 'vernis', en: 'varnish' }, meaning: { nl: 'glanzende laag over hout', en: 'shiny layer over wood' } },
        { word: { nl: 'violist', en: 'violinist' }, meaning: { nl: 'iemand die viool speelt', en: 'someone who plays the violin' } }
      ],
      explain: { nl: 'Alle drie de woorden komen in de tekst voor.', en: 'All three words appear in the text.' } },
    { id: 'q5', type: 'tf', skill: 'gevolgtrekking',
      q: { nl: 'Volgens de tekst bewijst de proef dat oude violen waardeloos zijn.',
           en: 'According to the text the test proves old violins are worthless.' },
      answer: false,
      explain: { nl: 'Alinea 5 begint met "Toch blijven de oude violen bijzonder". De proef zegt alleen iets over de klank.',
                 en: 'Paragraph 5 begins "Still, the old violins are special". The test only says something about the sound.' } },
    { id: 'q6', type: 'mc', skill: 'hoofdgedachte',
      q: { nl: 'Wat is de hoofdgedachte van deze tekst?', en: 'What is the main idea of this text?' },
      options: [
        { nl: 'De waarde van een Stradivarius zit misschien meer in het verhaal dan in het geluid',
          en: 'The value of a Stradivarius may lie more in the story than in the sound' },
        { nl: 'Violen zijn moeilijk te maken', en: 'Violins are hard to make' },
        { nl: 'In Italië staan veel kluizen', en: 'Italy has many safes' },
        { nl: 'Blinddoeken helpen bij het luisteren', en: 'Blindfolds help you listen' }
      ], answer: 0,
      explain: { nl: 'De slotalinea zegt het: misschien is het echte geheim niet de klank, maar het verhaal.',
                 en: 'The closing paragraph says it: perhaps the real secret is the story, not the sound.' } }
  ]
},

{
  id: 'muziek-3', topic: 'muziek', level: 3, emoji: '🎨', scene: 'stage',
  title: { nl: 'De schilder die zijn eigen kleuren maakte', en: 'The painter who made his own colours' },
  text: {
    nl: [
      "Wie in het museum voor het Meisje met de parel staat, ziet eerst die parel, en dan die blauwe tulband. Het is een blauw dat op geen enkele foto goed overkomt: diep, koel en toch warm. Johannes Vermeer schilderde het rond 1665, en dat blauw kostte hem meer dan zijn huur.",
      "De verf heette ultramarijn. Hij werd gemaakt van lapis lazuli, een steen die alleen gevonden werd in de bergen van het huidige Afghanistan. De steen reisde over land en zee naar Venetië en vandaar naar Delft. Daar werd hij fijngestampt, gezeefd en met olie vermengd. Per gram was de verf duurder dan goud.",
      "De meeste schilders gebruikten die blauwe verf daarom alleen voor het allerbelangrijkste, bijvoorbeeld de mantel van Maria. Vermeer deed iets anders. Hij smeerde het blauw ook onder andere kleuren, waar je het niet eens ziet, om de verf erboven dieper te laten lijken. Onderzoekers ontdekten dat pas eeuwen later met röntgenfoto's.",
      "Dat kostte geld dat hij niet had. Vermeer schilderde langzaam, ongeveer twee of drie doeken per jaar, en na zijn dood bleek zijn vrouw met grote schulden te zitten. Ze moest schilderijen aan de bakker geven om een rekening te betalen.",
      "Vandaag zou hij die verf voor een paar euro kopen. In 1826 vond een Franse scheikundige een manier om ultramarijn na te maken in een oven, van klei, soda en zwavel. Het resultaat leek zo sterk op het origineel dat schilders het bijna niet konden onderscheiden.",
      "Toch is er iets verdwenen. Het blauw van Vermeer verschilt van vlak tot vlak, omdat elke handvol gestampte steen net iets anders was. Fabrieksverf is overal precies hetzelfde. Wat we wonnen aan prijs, verloren we aan toeval."
    ],
    en: [
      "Anyone standing in front of the Girl with a Pearl Earring sees the pearl first, and then that blue turban. It is a blue that never comes out properly in a photograph: deep, cool and yet warm. Johannes Vermeer painted it around 1665, and that blue cost him more than his rent.",
      "The paint was called ultramarine. It was made from lapis lazuli, a stone found only in the mountains of what is now Afghanistan. The stone travelled over land and sea to Venice and from there to Delft. There it was crushed, sieved and mixed with oil. Gram for gram the paint was more expensive than gold.",
      "Most painters therefore used that blue only for the most important thing, for instance the Virgin Mary’s cloak. Vermeer did something else. He also smeared the blue underneath other colours, where you cannot even see it, to make the paint above it look deeper. Researchers only discovered that centuries later, with X-ray photographs.",
      "It cost money he did not have. Vermeer painted slowly, about two or three canvases a year, and after his death his wife turned out to be deep in debt. She had to give paintings to the baker to settle a bill.",
      "Today he would buy that paint for a few euros. In 1826 a French chemist found a way to imitate ultramarine in a furnace, from clay, soda and sulphur. The result looked so much like the original that painters could barely tell them apart.",
      "Yet something has disappeared. Vermeer’s blue differs from patch to patch, because every handful of crushed stone was slightly different. Factory paint is exactly the same everywhere. What we gained in price, we lost in chance."
    ]
  },
  words: [
    { nl: 'ultramarijn', en: 'ultramarine', defNl: 'een diepblauwe verf, vroeger gemaakt van een dure steen', defEn: 'a deep blue paint, once made from an expensive stone' },
    { nl: 'zeven', en: 'to sieve', defNl: 'door een fijn gaas halen zodat alleen het fijnste overblijft', defEn: 'passing through fine mesh so only the finest remains' },
    { nl: 'schulden', en: 'debts', defNl: 'geld dat je aan anderen moet betalen', defEn: 'money you owe to other people' }
  ],
  questions: [
    { id: 'q1', type: 'mc', skill: 'letterlijk',
      q: { nl: 'Waar kwam de steen voor ultramarijn vandaan?', en: 'Where did the stone for ultramarine come from?' },
      options: [
        { nl: 'Uit de bergen van het huidige Afghanistan', en: 'From the mountains of what is now Afghanistan' },
        { nl: 'Uit Venetië', en: 'From Venice' },
        { nl: 'Uit Delft', en: 'From Delft' },
        { nl: 'Uit een Franse oven', en: 'From a French furnace' }
      ], answer: 0,
      explain: { nl: 'Alinea 2: lapis lazuli werd alleen daar gevonden; Venetië en Delft waren tussenstations.',
                 en: 'Paragraph 2: lapis lazuli was found only there; Venice and Delft were stops on the way.' } },
    { id: 'q2', type: 'mc', skill: 'gevolgtrekking',
      q: { nl: 'Waarom smeerde Vermeer dure blauwe verf ónder andere kleuren?',
           en: 'Why did Vermeer smear expensive blue paint underneath other colours?' },
      options: [
        { nl: 'Om de kleur erboven dieper te laten lijken', en: 'To make the colour above it look deeper' },
        { nl: 'Omdat hij verf over had', en: 'Because he had paint left over' },
        { nl: 'Om het doek te beschermen', en: 'To protect the canvas' },
        { nl: 'Omdat dat zo hoorde in Delft', en: 'Because that was the custom in Delft' }
      ], answer: 0,
      explain: { nl: 'Alinea 3 zegt dat letterlijk. Het is een trucje dat je pas op röntgenfoto’s ziet.',
                 en: 'Paragraph 3 says so literally. It is a trick you only see on X-rays.' } },
    { id: 'q3', type: 'mc', skill: 'verwijswoorden',
      q: { nl: '"Dat kostte geld dat hij niet had." Waar verwijst "dat" naar?',
           en: '"It cost money he did not have." What does "it" refer to?' },
      options: [
        { nl: 'Dat Vermeer de dure blauwe verf ook onder andere kleuren gebruikte',
          en: 'That Vermeer also used the expensive blue under other colours' },
        { nl: 'Dat de steen uit Afghanistan kwam', en: 'That the stone came from Afghanistan' },
        { nl: 'Dat hij in Delft woonde', en: 'That he lived in Delft' },
        { nl: 'Dat zijn vrouw schulden had', en: 'That his wife had debts' }
      ], answer: 0,
      explain: { nl: 'De alinea ervoor beschrijft juist die dure gewoonte van Vermeer.',
                 en: 'The previous paragraph describes exactly that expensive habit of Vermeer’s.' } },
    { id: 'q4', type: 'order', skill: 'volgorde',
      q: { nl: 'Zet de reis van de verf op volgorde.', en: 'Put the paint’s journey in order.' },
      items: [
        { nl: 'De steen wordt gevonden in de bergen.', en: 'The stone is found in the mountains.' },
        { nl: 'Hij reist over land en zee naar Venetië.', en: 'It travels over land and sea to Venice.' },
        { nl: 'In Delft wordt hij gestampt en gezeefd.', en: 'In Delft it is crushed and sieved.' },
        { nl: 'Vermeer mengt hem met olie en schildert de tulband.', en: 'Vermeer mixes it with oil and paints the turban.' }
      ], answer: [0, 1, 2, 3],
      explain: { nl: 'Alinea 2 beschrijft die route precies in deze volgorde.',
                 en: 'Paragraph 2 describes that route in exactly this order.' } },
    { id: 'q5', type: 'multi', skill: 'letterlijk',
      q: { nl: 'Waarvan maakte de Franse scheikundige in 1826 namaak-ultramarijn? Kies er 3.',
           en: 'What did the French chemist make imitation ultramarine from in 1826? Pick 3.' },
      options: [
        { nl: 'Klei', en: 'Clay' },
        { nl: 'Soda', en: 'Soda' },
        { nl: 'Zwavel', en: 'Sulphur' },
        { nl: 'Goud', en: 'Gold' }
      ], answer: [0, 1, 2],
      explain: { nl: 'Alinea 5 noemt klei, soda en zwavel. Goud komt alleen voor in de vergelijking met de prijs.',
                 en: 'Paragraph 5 names clay, soda and sulphur. Gold only appears in the price comparison.' } },
    { id: 'q6', type: 'mc', skill: 'structuur',
      q: { nl: 'De laatste alinea begint met "Toch is er iets verdwenen." Wat gebeurt daar?',
           en: 'The last paragraph begins "Yet something has disappeared." What happens there?' },
      options: [
        { nl: 'De schrijver zet een nadeel tegenover het voordeel van goedkope verf',
          en: 'The writer sets a drawback against the advantage of cheap paint' },
        { nl: 'De schrijver legt uit hoe verf gemaakt wordt', en: 'The writer explains how paint is made' },
        { nl: 'De schrijver vertelt over de schulden van Vermeer', en: 'The writer talks about Vermeer’s debts' },
        { nl: 'De schrijver noemt een nieuw schilderij', en: 'The writer names a new painting' }
      ], answer: 0,
      explain: { nl: '"Toch" draait het om: goedkoop én overal hetzelfde, en dat laatste is het verlies.',
                 en: '"Yet" turns it round: cheap, but the same everywhere, and that sameness is the loss.' } },
    { id: 'q7', type: 'mc', skill: 'hoofdgedachte',
      q: { nl: 'Wat is de hoofdgedachte?', en: 'What is the main idea?' },
      options: [
        { nl: 'Vermeers blauw was zo duur en zo wisselend dat het zijn schilderijen iets gaf wat fabrieksverf mist',
          en: 'Vermeer’s blue was so costly and so varied that it gave his paintings something factory paint lacks' },
        { nl: 'Vermeer kon niet goed met geld omgaan', en: 'Vermeer was bad with money' },
        { nl: 'Afghanistan heeft mooie bergen', en: 'Afghanistan has beautiful mountains' },
        { nl: 'Röntgenfoto’s zijn handig in een museum', en: 'X-rays are handy in a museum' }
      ], answer: 0,
      explain: { nl: 'Alle alinea’s gaan over dat blauw: waar het vandaan kwam, wat het kostte en wat het deed.',
                 en: 'All the paragraphs are about that blue: where it came from, what it cost and what it did.' } }
  ]
},

{
  id: 'muziek-4', topic: 'muziek', level: 4, emoji: '🎧', scene: 'stage',
  title: { nl: 'Waarom blijft dat liedje in je hoofd zitten?', en: 'Why does that song stick in your head?' },
  text: {
    nl: [
      "Je staat onder de douche en daar is het weer: dat ene stukje refrein, voor de twaalfde keer die ochtend. Je hebt het niet gekozen, je wilt het niet, en toch speelt het door. In het Nederlands heet zo'n liedje een oorwurm.",
      "Bijna iedereen kent het verschijnsel. In onderzoeken zegt tussen de negentig en de honderd procent van de ondervraagden er weleens last van te hebben. Bij de meeste mensen gebeurt het een paar keer per week, en meestal duurt het niet langer dan een kwartier.",
      "Wat maakt een liedje zo plakkerig? Onderzoekers in Engeland vergeleken honderden nummers en vonden een paar patronen. Oorwurmen hebben vaak een stevig, snel tempo. Ze hebben een melodie die in bochten omhoog en omlaag gaat, zoals een kinderliedje. En ze bevatten meestal één klein sprongetje dat niet helemaal klopt met de rest: iets onverwachts waar je oor over struikelt.",
      "Dat struikelen is waarschijnlijk de sleutel. Je hersenen houden van patronen die ze kunnen voorspellen. Wordt zo'n patroon net niet afgemaakt, dan blijft het systeem zoeken naar het slot. Datzelfde gebeurt als je een liedje halverwege uitzet: juist dan blijft het rondzingen. Onderzoekers noemen dat het zeigarnik-effect, naar de psychologe die ontdekte dat mensen onafgemaakte taken beter onthouden dan afgemaakte.",
      "Er is nog een tweede voorwaarde: herhaling. Bijna niemand krijgt een oorwurm van een liedje dat hij één keer hoorde. Radio en streamingdiensten spelen hits tientallen keren per week, en juist die herhaling zet het spoor in je geheugen.",
      "Wat helpt ertegen? Niet: proberen er niet aan te denken, want dat werkt averechts. Wel: het liedje helemaal afluisteren, zodat je hersenen het slot krijgen. Ook helpt een andere bezigheid die net genoeg aandacht vraagt, zoals een kruiswoordpuzzel. Té makkelijk werkt niet, want dan is er ruimte over; té moeilijk ook niet, want dan geef je op.",
      "Zo bekeken is een oorwurm geen storing maar een bijwerking. Je hersenen doen precies waarvoor ze gebouwd zijn: patronen vasthouden. Alleen kiezen ze zelf welk patroon."
    ],
    en: [
      "You are standing in the shower and there it is again: that one bit of the chorus, for the twelfth time this morning. You did not choose it, you do not want it, and still it plays on. In Dutch such a song is called an earworm.",
      "Almost everyone knows the phenomenon. In studies between ninety and a hundred percent of those asked say they get them sometimes. For most people it happens a few times a week, and usually it does not last longer than a quarter of an hour.",
      "What makes a song so sticky? Researchers in England compared hundreds of tracks and found a few patterns. Earworms often have a firm, fast tempo. They have a melody that curves up and down, like a nursery rhyme. And they usually contain one small leap that does not quite fit the rest: something unexpected that your ear trips over.",
      "That tripping is probably the key. Your brain loves patterns it can predict. If such a pattern is not quite finished, the system keeps looking for the ending. The same happens when you switch a song off halfway: that is exactly when it keeps ringing round. Researchers call it the Zeigarnik effect, after the psychologist who found that people remember unfinished tasks better than finished ones.",
      "There is a second condition: repetition. Almost nobody gets an earworm from a song they heard once. Radio and streaming services play hits dozens of times a week, and it is that repetition that lays the track in your memory.",
      "What helps against it? Not trying not to think about it, because that backfires. What does help is listening to the whole song, so that your brain gets the ending. Another activity that asks just enough attention, such as a crossword, helps too. Too easy does not work, because then there is room left over; too hard does not work either, because then you give up.",
      "Seen this way an earworm is not a fault but a side effect. Your brain is doing exactly what it was built for: holding on to patterns. It just picks the pattern itself."
    ]
  },
  words: [
    { nl: 'oorwurm', en: 'earworm', defNl: 'een liedje dat maar door je hoofd blijft spelen', defEn: 'a song that keeps playing in your head' },
    { nl: 'verschijnsel', en: 'phenomenon', defNl: 'iets wat gebeurt en wat je kunt waarnemen', defEn: 'something that happens and can be observed' },
    { nl: 'averechts', en: 'counterproductive', defNl: 'precies het tegenovergestelde van wat je wilde', defEn: 'exactly the opposite of what you wanted' }
  ],
  questions: [
    { id: 'q1', type: 'multi', skill: 'letterlijk',
      q: { nl: 'Welke drie kenmerken van een oorwurm noemt de tekst? Kies er 3.',
           en: 'Which three features of an earworm does the text name? Pick 3.' },
      options: [
        { nl: 'Een stevig, snel tempo', en: 'A firm, fast tempo' },
        { nl: 'Een melodie die omhoog en omlaag gaat', en: 'A melody that goes up and down' },
        { nl: 'Een klein sprongetje dat niet helemaal klopt', en: 'A small leap that does not quite fit' },
        { nl: 'Een lange, trage inleiding', en: 'A long, slow introduction' }
      ], answer: [0, 1, 2],
      explain: { nl: 'Alinea 3 noemt precies deze drie patronen.',
                 en: 'Paragraph 3 names exactly these three patterns.' } },
    { id: 'q2', type: 'mc', skill: 'gevolgtrekking',
      q: { nl: 'Waarom blijft een liedje juist hangen als je het halverwege uitzet?',
           en: 'Why does a song stick especially when you switch it off halfway?' },
      options: [
        { nl: 'Omdat je hersenen blijven zoeken naar het slot van het patroon',
          en: 'Because your brain keeps looking for the end of the pattern' },
        { nl: 'Omdat de melodie dan harder klinkt', en: 'Because the melody sounds louder then' },
        { nl: 'Omdat je het liedje dan vaker hoort', en: 'Because you hear the song more often then' },
        { nl: 'Omdat het tempo dan omhooggaat', en: 'Because the tempo goes up then' }
      ], answer: 0,
      explain: { nl: 'Alinea 4: een onafgemaakt patroon laat het systeem doorzoeken; dat heet het zeigarnik-effect.',
                 en: 'Paragraph 4: an unfinished pattern keeps the system searching; that is the Zeigarnik effect.' } },
    { id: 'q3', type: 'mc', skill: 'verwijswoorden',
      q: { nl: '"Dat struikelen is waarschijnlijk de sleutel." Wat is "dat struikelen"?',
           en: '"That tripping is probably the key." What is "that tripping"?' },
      options: [
        { nl: 'Het onverwachte sprongetje in de melodie', en: 'The unexpected leap in the melody' },
        { nl: 'Het snelle tempo', en: 'The fast tempo' },
        { nl: 'Het uitzetten van de radio', en: 'Switching off the radio' },
        { nl: 'Het vergelijken van honderden nummers', en: 'Comparing hundreds of tracks' }
      ], answer: 0,
      explain: { nl: 'De zin ervoor eindigt met: "iets onverwachts waar je oor over struikelt".',
                 en: 'The sentence before ends: "something unexpected that your ear trips over".' } },
    { id: 'q4', type: 'gap', skill: 'woordenschat',
      q: { nl: 'Als iets averechts werkt, gebeurt er ___.', en: 'If something is counterproductive, what happens is ___.' },
      options: [
        { nl: 'precies het tegenovergestelde van wat je wilde', en: 'exactly the opposite of what you wanted' },
        { nl: 'precies wat je verwachtte', en: 'exactly what you expected' },
        { nl: 'helemaal niets', en: 'nothing at all' },
        { nl: 'iets wat lang duurt', en: 'something that takes a long time' }
      ], answer: 0,
      explain: { nl: 'De tekst zegt: niet aan het liedje denken werkt averechts, want dan denk je er juist aan.',
                 en: 'The text says that trying not to think of the song backfires: you think of it more.' } },
    { id: 'q5', type: 'mc', skill: 'structuur',
      q: { nl: 'Alinea 6 begint met de vraag "Wat helpt ertegen?". Wat is de functie daarvan?',
           en: 'Paragraph 6 opens with "What helps against it?". What is that for?' },
      options: [
        { nl: 'De tekst gaat van uitleggen over naar advies geven', en: 'The text moves from explaining to giving advice' },
        { nl: 'De schrijver twijfelt aan zijn eigen uitleg', en: 'The writer doubts his own explanation' },
        { nl: 'Het is een vraag aan de onderzoekers', en: 'It is a question to the researchers' },
        { nl: 'Het herhaalt alinea 2', en: 'It repeats paragraph 2' }
      ], answer: 0,
      explain: { nl: 'Na die vraag volgen tips. De vraag markeert dus de overgang naar het praktische deel.',
                 en: 'Tips follow the question, so it marks the move to the practical part.' } },
    { id: 'q6', type: 'mc', skill: 'gevolgtrekking',
      q: { nl: 'Waarom werkt een té makkelijke bezigheid niet tegen een oorwurm?',
           en: 'Why does an activity that is too easy not work against an earworm?' },
      options: [
        { nl: 'Omdat er dan aandacht overblijft waarin het liedje verder speelt',
          en: 'Because attention is left over for the song to keep playing in' },
        { nl: 'Omdat je er dan moe van wordt', en: 'Because it makes you tired' },
        { nl: 'Omdat je hersenen dan het slot vinden', en: 'Because your brain then finds the ending' },
        { nl: 'Omdat je dan gaat zingen', en: 'Because you start singing then' }
      ], answer: 0,
      explain: { nl: 'Alinea 6: té makkelijk laat ruimte over, té moeilijk laat je opgeven.',
                 en: 'Paragraph 6: too easy leaves room over, too hard makes you give up.' } },
    { id: 'q7', type: 'mc', skill: 'doel',
      q: { nl: 'Wat wil de schrijver vooral?', en: 'What does the writer mainly want?' },
      options: [
        { nl: 'Een alledaags verschijnsel verklaren met onderzoek, en er een tip bij geven',
          en: 'Explain an everyday phenomenon with research, and add a tip' },
        { nl: 'Waarschuwen dat oorwurmen slecht voor je zijn', en: 'Warn that earworms are bad for you' },
        { nl: 'Reclame maken voor een streamingdienst', en: 'Advertise a streaming service' },
        { nl: 'Bewijzen dat popmuziek te vaak herhaald wordt', en: 'Prove that pop music is repeated too often' }
      ], answer: 0,
      explain: { nl: 'De laatste alinea noemt het zelfs geen storing maar een bijwerking. Het is uitleg, geen waarschuwing.',
                 en: 'The last paragraph calls it a side effect, not a fault. It is explanation, not warning.' } },
    { id: 'q8', type: 'mc', skill: 'hoofdgedachte',
      q: { nl: 'Wat is de hoofdgedachte?', en: 'What is the main idea?' },
      options: [
        { nl: 'Een oorwurm ontstaat door een bijna-voorspelbaar patroon plus herhaling, en je verjaagt hem door het af te maken',
          en: 'An earworm comes from an almost-predictable pattern plus repetition, and you chase it away by finishing it' },
        { nl: 'Bijna iedereen luistert naar de radio', en: 'Almost everyone listens to the radio' },
        { nl: 'Kruiswoordpuzzels zijn goed voor je hersenen', en: 'Crosswords are good for your brain' },
        { nl: 'Onder de douche zing je het meest', en: 'You sing most in the shower' }
      ], answer: 0,
      explain: { nl: 'Oorzaak, voorwaarde en oplossing samen vormen de kern van de tekst.',
                 en: 'Cause, condition and solution together form the core of the text.' } }
  ]
},

{
  id: 'muziek-5', topic: 'muziek', level: 5, emoji: '🖼️', scene: 'stage',
  title: { nl: 'Wie maakte dit schilderij eigenlijk?', en: 'Who actually made this painting?' },
  text: {
    nl: [
      "In 2019 hing er in een Frans museum een portret dat honderd jaar lang van Rembrandt heette te zijn. Daarna heette het veertig jaar van een leerling. En sinds kort hangt er weer een bordje met de naam Rembrandt naast. Het schilderij zelf is in al die tijd geen streek veranderd.",
      "Zulke wisselingen zijn normaler dan je denkt. In de zeventiende eeuw was een schildersatelier een werkplaats. De meester bedacht de compositie, schilderde het gezicht en de handen, en liet de mantel, de achtergrond en de lucht aan leerlingen over. Het geheel werd verkocht onder zijn naam, en niemand vond dat vreemd.",
      "Wij zijn anders gaan kijken. Sinds de negentiende eeuw zien we een kunstenaar als een eenling met een eigen genie, en dus willen we weten wiens hand welke verf heeft aangeraakt. Daar is een hele wetenschap uit ontstaan.",
      "Die wetenschap heeft inmiddels stevig gereedschap. Met röntgenstraling zie je wat er onder de verf zit: een eerdere schets, een arm die verplaatst is. Met infrarood kun je de onderlaag lezen. Uit een speldenknopje verf haalt een laboratorium welke stoffen de schilder gebruikte, en dendrochronologie, het tellen van jaarringen in het paneel, vertelt op een jaar of tien nauwkeurig wanneer de boom is gekapt.",
      "Toch beslist geen enkel apparaat in zijn eentje. Een paneel uit 1640 bewijst alleen dat het schilderij niet eerder is gemaakt, niet dat Rembrandt het deed. De meeste discussies gaan dan ook over iets wat je niet kunt meten: de manier waarop iemand een penseelstreek zet. Daar komen kenners bij elkaar, kijken lang, en zijn het soms oneens.",
      "Voor musea en veilinghuizen is de uitkomst geen detail. Een echte Rembrandt kan tientallen miljoenen opbrengen; hetzelfde doek van een leerling een fractie daarvan. Sommige onderzoekers vinden dat ongemakkelijk: het onderzoek zou over kennis moeten gaan, niet over prijs.",
      "En er is een eerlijker vraag mogelijk. Als de leerling de mantel schilderde en de meester het gezicht, van wie is het schilderij dan? Misschien zegt onze drang om één naam op een bordje te zetten meer over ons dan over de schilders. In het atelier van 1640 had niemand die vraag gesteld."
    ],
    en: [
      "In 2019 a French museum had a portrait that had been called a Rembrandt for a hundred years. After that it was called a pupil’s work for forty years. And recently a label with the name Rembrandt has appeared beside it again. The painting itself has not changed by a single brushstroke in all that time.",
      "Such changes are more normal than you think. In the seventeenth century a painter’s studio was a workshop. The master thought up the composition, painted the face and the hands, and left the cloak, the background and the sky to pupils. The whole thing was sold under his name, and nobody found that odd.",
      "We have come to look at it differently. Since the nineteenth century we see an artist as a lone figure with a genius of their own, and so we want to know whose hand touched which paint. A whole science has grown out of that.",
      "That science now has solid tools. With X-rays you see what lies under the paint: an earlier sketch, an arm that was moved. With infrared you can read the under-layer. From a pinhead of paint a laboratory works out which substances the painter used, and dendrochronology, the counting of growth rings in the panel, tells you to within about ten years when the tree was felled.",
      "Yet no instrument decides on its own. A panel from 1640 only proves the painting was not made earlier, not that Rembrandt made it. So most arguments are about something you cannot measure: the way somebody places a brushstroke. That is where experts gather, look for a long time, and sometimes disagree.",
      "For museums and auction houses the outcome is not a detail. A real Rembrandt can fetch tens of millions; the same canvas by a pupil a fraction of that. Some researchers find that uncomfortable: the research should be about knowledge, not about price.",
      "And a fairer question is possible. If the pupil painted the cloak and the master the face, whose painting is it? Perhaps our urge to put one name on a label says more about us than about the painters. In the studio of 1640 nobody would have asked the question."
    ]
  },
  words: [
    { nl: 'atelier', en: 'studio', defNl: 'de werkplaats waar een kunstenaar werkt', defEn: 'the workshop where an artist works' },
    { nl: 'dendrochronologie', en: 'dendrochronology', defNl: 'jaarringen tellen om te bepalen wanneer een boom gekapt is', defEn: 'counting growth rings to find out when a tree was felled' },
    { nl: 'kenner', en: 'connoisseur, expert', defNl: 'iemand die door jarenlang kijken verschillen herkent', defEn: 'someone who recognises differences through years of looking' }
  ],
  questions: [
    { id: 'q1', type: 'mc', skill: 'letterlijk',
      q: { nl: 'Wie schilderde in een zeventiende-eeuws atelier meestal het gezicht?',
           en: 'Who usually painted the face in a seventeenth-century studio?' },
      options: [
        { nl: 'De meester', en: 'The master' },
        { nl: 'De jongste leerling', en: 'The youngest pupil' },
        { nl: 'De koper van het schilderij', en: 'The buyer of the painting' },
        { nl: 'Een aparte gezichtenschilder', en: 'A separate face painter' }
      ], answer: 0,
      explain: { nl: 'Alinea 2: de meester deed de compositie, het gezicht en de handen.',
                 en: 'Paragraph 2: the master did the composition, the face and the hands.' } },
    { id: 'q2', type: 'multi', skill: 'letterlijk',
      q: { nl: 'Welke drie onderzoekstechnieken noemt alinea 4? Kies er 3.',
           en: 'Which three research techniques does paragraph 4 name? Pick 3.' },
      options: [
        { nl: 'Röntgenstraling', en: 'X-rays' },
        { nl: 'Infrarood', en: 'Infrared' },
        { nl: 'Jaarringen tellen in het paneel', en: 'Counting growth rings in the panel' },
        { nl: 'Het schilderij wegen', en: 'Weighing the painting' }
      ], answer: [0, 1, 2],
      explain: { nl: 'Alinea 4 noemt röntgen, infrarood, verfonderzoek en dendrochronologie. Wegen staat er niet bij.',
                 en: 'Paragraph 4 names X-rays, infrared, paint analysis and dendrochronology. Weighing is not among them.' } },
    { id: 'q3', type: 'mc', skill: 'gevolgtrekking',
      q: { nl: 'Waarom bewijst een paneel uit 1640 niet dat Rembrandt de schilder was?',
           en: 'Why does a panel from 1640 not prove that Rembrandt was the painter?' },
      options: [
        { nl: 'Het zegt alleen dat het niet eerder gemaakt kan zijn, niet door wie',
          en: 'It only says it cannot have been made earlier, not by whom' },
        { nl: 'Omdat jaarringen altijd verkeerd geteld worden', en: 'Because growth rings are always counted wrongly' },
        { nl: 'Omdat Rembrandt nooit op paneel schilderde', en: 'Because Rembrandt never painted on panel' },
        { nl: 'Omdat het hout uit een ander land kwam', en: 'Because the wood came from another country' }
      ], answer: 0,
      explain: { nl: 'Alinea 5 zegt het letterlijk: het bewijst alleen dat het niet eerder is gemaakt.',
                 en: 'Paragraph 5 says it literally: it only proves it was not made earlier.' } },
    { id: 'q4', type: 'sort', skill: 'feitmening',
      q: { nl: 'Feit of mening? Zet elke zin in de goede groep.',
           en: 'Fact or opinion? Put every sentence in the right group.' },
      bins: [{ nl: 'Feit', en: 'Fact' }, { nl: 'Mening', en: 'Opinion' }],
      items: [
        { nl: 'Dendrochronologie kan het kapjaar op ongeveer tien jaar nauwkeurig bepalen.',
          en: 'Dendrochronology can date the felling to within about ten years.', bin: 0 },
        { nl: 'Het onderzoek zou over kennis moeten gaan, niet over prijs.',
          en: 'The research should be about knowledge, not about price.', bin: 1 },
        { nl: 'In de zeventiende eeuw schilderden leerlingen de achtergrond.',
          en: 'In the seventeenth century pupils painted the background.', bin: 0 },
        { nl: 'Onze drang om één naam op een bordje te zetten zegt meer over ons dan over de schilders.',
          en: 'Our urge to put one name on a label says more about us than about the painters.', bin: 1 }
      ],
      explain: { nl: 'Meetmethodes en historische gewoontes zijn feiten. "Zou moeten" en "zegt meer over ons" zijn oordelen.',
                 en: 'Measuring methods and historical customs are facts. "Should" and "says more about us" are judgements.' } },
    { id: 'q5', type: 'mc', skill: 'verwijswoorden',
      q: { nl: '"Sommige onderzoekers vinden dat ongemakkelijk." Wat vinden zij ongemakkelijk?',
           en: '"Some researchers find that uncomfortable." What do they find uncomfortable?' },
      options: [
        { nl: 'Dat het oordeel over de maker de prijs enorm beïnvloedt',
          en: 'That the verdict on the maker hugely affects the price' },
        { nl: 'Dat er röntgenstraling gebruikt wordt', en: 'That X-rays are used' },
        { nl: 'Dat leerlingen de lucht schilderden', en: 'That pupils painted the sky' },
        { nl: 'Dat het bordje in 2019 veranderd werd', en: 'That the label was changed in 2019' }
      ], answer: 0,
      explain: { nl: 'De zinnen ervoor gaan over tientallen miljoenen tegenover een fractie daarvan.',
                 en: 'The sentences before are about tens of millions against a fraction of that.' } },
    { id: 'q6', type: 'mc', skill: 'structuur',
      q: { nl: 'Waarom begint de tekst met het schilderij dat drie keer van naam wisselde?',
           en: 'Why does the text start with the painting that changed name three times?' },
      options: [
        { nl: 'Het is een voorbeeld dat meteen laat zien hoe wankel zo’n oordeel is',
          en: 'It is an example that shows at once how shaky such a verdict is' },
        { nl: 'Het is het duurste schilderij ter wereld', en: 'It is the most expensive painting in the world' },
        { nl: 'Het legt uit hoe röntgenstraling werkt', en: 'It explains how X-rays work' },
        { nl: 'Het geeft de mening van de schrijver', en: 'It gives the writer’s opinion' }
      ], answer: 0,
      explain: { nl: 'De laatste zin van alinea 1 is de clou: het schilderij zelf veranderde geen streek.',
                 en: 'The last line of paragraph 1 is the point: the painting itself did not change at all.' } },
    { id: 'q7', type: 'mc', skill: 'doel',
      q: { nl: 'Wat wil de schrijver met deze tekst?', en: 'What does the writer want with this text?' },
      options: [
        { nl: 'Laten zien hoe zo’n oordeel tot stand komt, en de vraag stellen of één naam wel klopt',
          en: 'Show how such a verdict is reached, and ask whether one name is right at all' },
        { nl: 'Bewijzen dat Rembrandt niets zelf schilderde', en: 'Prove that Rembrandt painted nothing himself' },
        { nl: 'Musea aanraden hun bordjes weg te halen', en: 'Advise museums to remove their labels' },
        { nl: 'Uitleggen hoe je zelf een schilderij maakt', en: 'Explain how to make a painting yourself' }
      ], answer: 0,
      explain: { nl: 'De slotalinea stelt precies die vraag: van wie is het schilderij dan?',
                 en: 'The closing paragraph asks exactly that question: whose painting is it then?' } },
    { id: 'q8', type: 'mc', skill: 'samenvatten',
      q: { nl: 'Welke samenvatting past het beste?', en: 'Which summary fits best?' },
      options: [
        { nl: 'Omdat oude schilderijen in een werkplaats met meerdere handen ontstonden, is de vraag wie de maker is met techniek alleen niet te beantwoorden, en hangt er ook veel geld vanaf.',
          en: 'Because old paintings were made by several hands in a workshop, the question of who made them cannot be answered by technology alone, and a lot of money depends on it too.' },
        { nl: 'Röntgenstraling en infrarood zijn nuttige uitvindingen.',
          en: 'X-rays and infrared are useful inventions.' },
        { nl: 'Rembrandt had veel leerlingen in zijn atelier.',
          en: 'Rembrandt had many pupils in his studio.' },
        { nl: 'Franse musea veranderen vaak hun bordjes.',
          en: 'French museums often change their labels.' }
      ], answer: 0,
      explain: { nl: 'Dat antwoord bevat de werkplaats, de grens van de techniek én het geld. De rest zijn losse details.',
                 en: 'That answer holds the workshop, the limits of the technology and the money. The rest are details.' } },
    { id: 'q9', type: 'tf', skill: 'gevolgtrekking',
      q: { nl: 'In de zeventiende eeuw vond men het vreemd dat leerlingen meeschilderden aan een werk van de meester.',
           en: 'In the seventeenth century people found it odd that pupils helped paint the master’s work.' },
      answer: false,
      explain: { nl: 'Alinea 2 eindigt juist met: "en niemand vond dat vreemd".',
                 en: 'Paragraph 2 ends with: "and nobody found that odd".' } }
  ]
}
]);

addStories([
{
  id: 'muziek-6', topic: 'muziek', level: 1, emoji: '🎤', scene: 'stage',
  title: { nl: 'Het eerste optreden', en: 'The first performance' },
  text: {
    nl: [
      "Vanavond is het zover: het schoolconcert. Noa speelt op het keyboard, samen met de rest van groep 7. Het is de allereerste keer dat ze voor publiek optreedt. In de gymzaal zetten meneer Bram de stoelen al klaar.",
      "Achter het gordijn, in de coulissen, voelt Noa haar hart bonzen. Haar handen trillen en haar buik doet pijn van de zenuwen. Ze wil het liefst naar huis rennen. Wat als ze een fout maakt? Wat als iedereen naar haar kijkt?",
      "Juf Sanne ziet dat Noa bang is. Ze buigt zich voorover en fluistert: \"Je hebt hier honderd keer voor geoefend. Je vingers weten precies wat ze moeten doen.\" Noa haalt diep adem en loopt het podium op.",
      "Het licht is fel en de zaal is stil. Noa legt haar vingers op de toetsen en begint te spelen. Bij de derde maat speelt ze bijna een verkeerde toets, maar ze herstelt zich meteen. De rest van het lied gaat vanzelf.",
      "Als de laatste toon wegsterft, barst het applaus los. Noa buigt en ziet haar ouders vooraan staan klappen. De zenuwen zijn weg, en er blijft alleen trots over. Ze heeft het gedaan."
    ],
    en: [
      "Tonight is the night: the school concert. Noa is playing keyboard, together with the rest of the class. It is the very first time she has performed in front of an audience. In the gym Mr Bram is already setting out the chairs.",
      "Behind the curtain, in the wings, Noa feels her heart pounding. Her hands are shaking and her stomach hurts from nerves. She would rather just run home. What if she makes a mistake? What if everyone is staring at her?",
      "Teacher Sanne sees that Noa is scared. She leans in and whispers: \"You have practised this a hundred times. Your fingers know exactly what to do.\" Noa takes a deep breath and walks onto the stage.",
      "The light is bright and the hall is silent. Noa puts her fingers on the keys and starts to play. On the third bar she almost hits a wrong key, but she recovers at once. The rest of the song comes naturally.",
      "As the last note fades away, applause breaks out. Noa bows and sees her parents clapping in the front row. The nerves are gone, and only pride is left. She did it."
    ]
  },
  words: [
    { nl: 'coulissen', en: 'the wings (backstage)', defNl: 'de ruimte opzij van het podium waar je niet gezien wordt', defEn: 'the space beside the stage where you cannot be seen' },
    { nl: 'zenuwen', en: 'nerves', defNl: 'een onrustig, gespannen gevoel vlak voor iets spannends', defEn: 'an uneasy, tense feeling right before something exciting' },
    { nl: 'applaus', en: 'applause', defNl: 'het klappen van het publiek', defEn: 'the audience clapping' }
  ],
  questions: [
    { id: 'q1', type: 'mc', skill: 'letterlijk',
      q: { nl: 'Wat moest Noa die avond doen?', en: 'What did Noa have to do that evening?' },
      options: [
        { nl: 'Meespelen op het schoolconcert', en: 'Perform at the school concert' },
        { nl: 'Een toets afmaken op school', en: 'Finish a test at school' },
        { nl: 'Voetballen met groep 7', en: 'Play football with her class' },
        { nl: 'Een cadeau uitzoeken', en: 'Pick out a present' }
      ], answer: 0,
      explain: { nl: 'Alinea 1: "Vanavond is het zover: het schoolconcert. Noa speelt op het keyboard."',
                 en: 'Paragraph 1: "Tonight is the night: the school concert. Noa is playing keyboard."' } },
    { id: 'q2', type: 'tf', skill: 'letterlijk',
      q: { nl: 'Noa’s handen trilden in de coulissen.', en: 'Noa’s hands were shaking in the wings.' },
      answer: true,
      explain: { nl: 'Alinea 2: "Haar handen trillen en haar buik doet pijn van de zenuwen."',
                 en: 'Paragraph 2: "Her hands are shaking and her stomach hurts from nerves."' } },
    { id: 'q3', type: 'gap', skill: 'woordenschat',
      q: { nl: 'Noa voelde zenuwen. Dat betekent dat ze ___.', en: 'Noa felt nerves. That means she ___.' },
      options: [
        { nl: 'een onrustig, gespannen gevoel had vlak voor het optreden', en: 'had an uneasy, tense feeling right before the performance' },
        { nl: 'heel blij en rustig was', en: 'was very happy and calm' },
        { nl: 'moe was van het oefenen', en: 'was tired from practising' },
        { nl: 'boos was op de juf', en: 'was angry at her teacher' }
      ], answer: 0,
      explain: { nl: 'Alinea 2 beschrijft precies dat gevoel: een bonzend hart en een pijnlijke buik van de zenuwen.',
                 en: 'Paragraph 2 describes exactly that feeling: a pounding heart and a stomach ache from nerves.' } },
    { id: 'q4', type: 'order', skill: 'volgorde',
      q: { nl: 'Zet het verhaal van Noa in de juiste volgorde.', en: 'Put Noa’s story in the right order.' },
      items: [
        { nl: 'Noa staat achter het gordijn met trillende handen.', en: 'Noa stands behind the curtain with shaking hands.' },
        { nl: 'Juf Sanne fluistert een bemoedigend woord.', en: 'Teacher Sanne whispers an encouraging word.' },
        { nl: 'Noa speelt bijna een verkeerde toets, maar herstelt zich.', en: 'Noa almost hits a wrong key, but recovers.' },
        { nl: 'Het publiek klapt en Noa buigt.', en: 'The audience claps and Noa bows.' }
      ], answer: [0, 1, 2, 3],
      explain: { nl: 'Zo vertelt de tekst het: eerst de zenuwen, dan de bemoediging, dan het spelen, dan het applaus.',
                 en: 'That is the order the text tells it in: first the nerves, then the encouragement, then the playing, then the applause.' } },
    { id: 'q5', type: 'mc', skill: 'hoofdgedachte',
      q: { nl: 'Waar gaat dit verhaal vooral over?', en: 'What is this text mainly about?' },
      options: [
        { nl: 'Een meisje dat ondanks haar zenuwen toch optreedt en trots is', en: 'A girl who performs despite her nerves and feels proud' },
        { nl: 'Hoe je keyboard leert spelen', en: 'How to learn to play keyboard' },
        { nl: 'Een schoolconcert dat niet doorgaat', en: 'A school concert that gets cancelled' },
        { nl: 'Een meisje die een prijs wint', en: 'A girl who wins a prize' }
      ], answer: 0,
      explain: { nl: 'Het verhaal volgt Noa van doodsbange zenuwen tot trots na het optreden.',
                 en: 'The story follows Noa from scared nerves to pride after the performance.' } }
  ]
},

{
  id: 'muziek-7', topic: 'muziek', level: 2, emoji: '🎹', scene: 'stage',
  title: { nl: 'Hoe maakt een piano geluid?', en: 'How does a piano make sound?' },
  text: {
    nl: [
      "Til het deksel van een vleugelpiano op en je ziet een web van snaren, strak gespannen over een gouden plaat. Meer dan tweehonderd stuks, elk met zijn eigen spanning. Maar hoe wordt dat drukken op een toets nou precies een toon?",
      "Onder elke toets zit een klein hameltje van vilt. Druk je een toets in, dan zwiept dat hameltje omhoog en raakt het een snaar. De snaar gaat trillen, en die trilling maakt het geluid dat je hoort. Laat je de toets los, dan valt er een dempertje tegen de snaar en stopt het geluid meteen.",
      "Waarom klinkt de ene toets hoog en de andere laag? Dat zit hem in de snaar zelf. Korte, dunne snaren trillen heel snel en klinken hoog. Lange, dikke snaren trillen langzaam en klinken laag. Kijk maar naar de linkerkant van de piano: daar liggen de dikste, langste snaren, omwikkeld met koperdraad.",
      "Onderaan de piano zitten pedalen. Trap je het rechterpedaal in, dan gaan alle dempertjes tegelijk omhoog. De snaren mogen dan blijven natrillen, ook als je je vinger al van de toets hebt gehaald. Zo klinkt een akkoord lang door en vloeien de tonen in elkaar over.",
      "Bij een stevig muziekstuk raken de hameltjes de snaren duizenden keren per minuut. Toch hoor je geen gehamer, alleen muziek. Dat komt doordat het hele mechaniek in een fractie van een seconde werkt: druk, sla, dempen, en weer opnieuw."
    ],
    en: [
      "Lift the lid of a grand piano and you see a web of strings, stretched tight over a golden plate. More than two hundred of them, each with its own tension. But how does pressing a key become a note exactly?",
      "Under every key sits a small hammer covered in felt. Press a key and that hammer swings up and hits a string. The string starts to vibrate, and that vibration makes the sound you hear. Let go of the key and a small damper drops against the string, stopping the sound at once.",
      "Why does one key sound high and another low? That is down to the string itself. Short, thin strings vibrate very fast and sound high. Long, thick strings vibrate slowly and sound low. Just look at the left side of the piano: that is where the thickest, longest strings are, wound with copper wire.",
      "At the bottom of the piano are pedals. Press the right-hand pedal and all the dampers lift up at once. The strings are then free to keep ringing, even after you have lifted your finger off the key. That is how a chord keeps sounding and the notes blend into each other.",
      "During a lively piece the hammers hit the strings thousands of times a minute. Yet you hear no hammering, only music. That is because the whole mechanism works in a fraction of a second: press, strike, dampen, and again."
    ]
  },
  words: [
    { nl: 'hameltje', en: 'hammer', defNl: 'een klein onderdeeltje bekleed met vilt dat op de snaar slaat', defEn: 'a small felt-covered part that strikes the string' },
    { nl: 'dempertje', en: 'damper', defNl: 'een stukje vilt dat tegen de snaar valt om het geluid te stoppen', defEn: 'a bit of felt that drops against the string to stop the sound' },
    { nl: 'snaar', en: 'string', defNl: 'een strak gespannen draad die trilt en geluid maakt', defEn: 'a tightly stretched wire that vibrates and makes sound' }
  ],
  questions: [
    { id: 'q1', type: 'mc', skill: 'letterlijk',
      q: { nl: 'Wat gebeurt er als je een toets indrukt?', en: 'What happens when you press a key?' },
      options: [
        { nl: 'Een hameltje zwiept omhoog en raakt een snaar', en: 'A hammer swings up and hits a string' },
        { nl: 'Een snaar wordt losgemaakt', en: 'A string is loosened' },
        { nl: 'Een pedaal gaat automatisch omlaag', en: 'A pedal automatically goes down' },
        { nl: 'Het dempertje slaat een geluid aan', en: 'The damper strikes a sound' }
      ], answer: 0,
      explain: { nl: 'Alinea 2: "dan zwiept dat hameltje omhoog en raakt het een snaar."',
                 en: 'Paragraph 2: "that hammer swings up and hits a string."' } },
    { id: 'q2', type: 'mc', skill: 'letterlijk',
      q: { nl: 'Wat doet het dempertje als je de toets loslaat?', en: 'What does the damper do when you let go of the key?' },
      options: [
        { nl: 'Het valt tegen de snaar en stopt het geluid', en: 'It drops against the string and stops the sound' },
        { nl: 'Het maakt de snaar strakker', en: 'It tightens the string' },
        { nl: 'Het verandert de toon', en: 'It changes the pitch' },
        { nl: 'Het zwiept tegen de hamer', en: 'It swings against the hammer' }
      ], answer: 0,
      explain: { nl: 'Alinea 2: "dan valt er een dempertje tegen de snaar en stopt het geluid meteen."',
                 en: 'Paragraph 2: "a small damper drops against the string, stopping the sound at once."' } },
    { id: 'q3', type: 'mc', skill: 'gevolgtrekking',
      q: { nl: 'Waarom liggen de dikste en langste snaren aan de linkerkant van de piano?',
           en: 'Why are the thickest and longest strings on the left side of the piano?' },
      options: [
        { nl: 'Omdat dikke, lange snaren langzaam trillen en dus laag klinken', en: 'Because thick, long strings vibrate slowly and so sound low' },
        { nl: 'Omdat linkshandige mensen daar zitten', en: 'Because left-handed people sit there' },
        { nl: 'Omdat dat de goedkoopste snaren zijn', en: 'Because those are the cheapest strings' },
        { nl: 'Omdat ze daar het makkelijkst te stemmen zijn', en: 'Because they are easiest to tune there' }
      ], answer: 0,
      explain: { nl: 'Alinea 3 legt uit: lange, dikke snaren trillen langzaam en klinken laag.',
                 en: 'Paragraph 3 explains it: long, thick strings vibrate slowly and sound low.' } },
    { id: 'q4', type: 'gap', skill: 'woordenschat',
      q: { nl: 'Een snaar is ___.', en: 'A string is ___.' },
      options: [
        { nl: 'een strak gespannen draad die trilt en geluid maakt', en: 'a tightly stretched wire that vibrates and makes sound' },
        { nl: 'een toets van de piano', en: 'a key of the piano' },
        { nl: 'het pedaal onderaan de piano', en: 'the pedal at the bottom of the piano' },
        { nl: 'het deksel van de piano', en: 'the lid of the piano' }
      ], answer: 0,
      explain: { nl: 'In alinea 1 en 3 wordt de snaar beschreven als de trillende draad die het geluid maakt.',
                 en: 'Paragraphs 1 and 3 describe the string as the vibrating wire that makes the sound.' } },
    { id: 'q5', type: 'mc', skill: 'gevolgtrekking',
      q: { nl: 'Wat gebeurt er als je het rechterpedaal indrukt terwijl je een akkoord speelt?',
           en: 'What happens if you press the right-hand pedal while playing a chord?' },
      options: [
        { nl: 'De dempertjes gaan omhoog en de tonen blijven natrillen', en: 'The dampers lift and the notes keep ringing' },
        { nl: 'De snaren worden dikker', en: 'The strings become thicker' },
        { nl: 'Het geluid stopt meteen', en: 'The sound stops immediately' },
        { nl: 'De hameltjes raken twee snaren tegelijk', en: 'The hammers hit two strings at once' }
      ], answer: 0,
      explain: { nl: 'Alinea 4: "gaan alle dempertjes tegelijk omhoog. De snaren mogen dan blijven natrillen."',
                 en: 'Paragraph 4: "all the dampers lift up at once. The strings are then free to keep ringing."' } },
    { id: 'q6', type: 'mc', skill: 'hoofdgedachte',
      q: { nl: 'Wat legt deze tekst vooral uit?', en: 'What does this text mainly explain?' },
      options: [
        { nl: 'Hoe drukken op een toets uiteindelijk een toon maakt', en: 'How pressing a key eventually makes a note' },
        { nl: 'Hoe je een piano moet stemmen', en: 'How to tune a piano' },
        { nl: 'Waarom piano’s duur zijn', en: 'Why pianos are expensive' },
        { nl: 'Hoe je pianoles neemt', en: 'How to take piano lessons' }
      ], answer: 0,
      explain: { nl: 'Elke alinea volgt de weg van drukken, via hameltje en snaar, naar geluid.',
                 en: 'Every paragraph follows the path from pressing, via hammer and string, to sound.' } }
  ]
},

{
  id: 'muziek-8', topic: 'muziek', level: 3, emoji: '🎼', scene: 'stage',
  title: { nl: 'De symfonie die een dove componist schreef', en: 'The symphony a deaf composer wrote' },
  text: {
    nl: [
      "Ludwig van Beethoven was zesentwintig toen er een zoemend geluid in zijn oren begon dat niet meer wegging. De jaren erna werd zijn gehoor steeds slechter. Op zijn negenentwintigste schreef hij een wanhopige brief aan zijn broers, waarin hij bekende dat hij aan zelfmoord had gedacht. Toch besloot hij door te gaan: de muziek in zijn hoofd was hem te dierbaar.",
      "Hoe componeer je muziek die je niet meer kunt horen? Beethoven kende de wetten van harmonie en ritme zo goed, dat hij een heel orkest in zijn hoofd kon laten spelen zonder er één noot van te horen. Zo schreef hij op uit het geheugen, niet uit wat zijn oren opvingen.",
      "Toch wilde hij ook echt blijven voelen. Hij liet de poten van zijn piano afzagen, zodat het instrument plat op de vloer stond en de klanken via de vloerplanken door zijn lichaam trilden. Sommige verhalen vertellen dat hij ook een houten stok tussen zijn tanden en de piano klemde, om de trillingen via zijn kaak te voelen.",
      "In 1824 ging zijn negende symfonie in première, met het beroemde 'Ode an die Freude'. Beethoven was toen al volledig doof. Hij stond naast de echte dirigent en sloeg de maat mee, zonder iets van het orkest te horen. Toen het laatste akkoord wegstierf, bleef hij naar de muzikanten kijken. Pas toen een zangeres hem voorzichtig omdraaide, zag hij de zaal vol klappend en juichend publiek.",
      "Dat moment laat precies zien wat zijn dove jaren zo bijzonder maakten. Beethoven kon het applaus niet horen, maar hij had het stuk wél geschreven, tot in het kleinste detail. Zijn compositie kwam niet uit zijn oren, maar uit een innerlijk gehoor, opgebouwd door jaren van studie.",
      "Zijn verhaal veranderde hoe mensen naar componeren keken. Muziek maken bleek niet alleen een kwestie van luisteren, maar ook van weten en onthouden. Beethovens doofheid nam hem zijn oren af, maar niet zijn muziek."
    ],
    en: [
      "Ludwig van Beethoven was twenty-six when a ringing sound began in his ears that never went away. In the years that followed his hearing kept getting worse. At twenty-nine he wrote a desperate letter to his brothers, in which he admitted he had thought about suicide. Still, he decided to carry on: the music in his head was too precious to give up.",
      "How do you compose music you can no longer hear? Beethoven knew the laws of harmony and rhythm so well that he could have a whole orchestra play inside his head without hearing a single note of it. That is how he wrote it down, from memory, not from what his ears picked up.",
      "Still, he also wanted to keep truly feeling it for as long as possible. He had the legs of his piano sawn off, so the instrument stood flat on the floor and the sounds travelled up through the floorboards into his body. Some stories say he also clamped a wooden stick between his teeth and the piano, to feel the vibrations through his jaw.",
      "In 1824 his Ninth Symphony premiered, with the famous 'Ode to Joy'. By then Beethoven was completely deaf. He stood next to the actual conductor and beat time along with the music, without hearing a thing from the orchestra. When the last chord died away, he kept looking at the musicians. Only when a singer gently turned him around did he see the hall full of a clapping, cheering audience.",
      "That moment shows exactly what made his deaf years so remarkable. Beethoven could not hear the applause, but he had written the piece, down to the smallest detail. His composition did not come from his ears, but from an inner hearing built up over years of study.",
      "His story changed how people looked at composing. Making music turned out to be not only a matter of listening, but also of knowing and remembering. Beethoven’s deafness took away his ears, but not his music."
    ]
  },
  words: [
    { nl: 'dirigent', en: 'conductor', defNl: 'iemand die met gebaren het orkest leidt tijdens het spelen', defEn: 'someone who leads the orchestra with gestures while it plays' },
    { nl: 'trillingen', en: 'vibrations', defNl: 'hele snelle, kleine bewegingen die je kunt voelen of horen', defEn: 'very fast, tiny movements you can feel or hear' },
    { nl: 'compositie', en: 'composition', defNl: 'een stuk muziek dat iemand heeft bedacht en opgeschreven', defEn: 'a piece of music that someone has thought up and written down' }
  ],
  questions: [
    { id: 'q1', type: 'mc', skill: 'letterlijk',
      q: { nl: 'Wat liet Beethoven met de poten van zijn piano doen?', en: 'What did Beethoven have done to the legs of his piano?' },
      options: [
        { nl: 'Afzagen, zodat het instrument plat op de vloer stond', en: 'Sawn off, so the instrument stood flat on the floor' },
        { nl: 'Verlengen, zodat hij rechtop kon staan', en: 'Lengthened, so he could stand upright' },
        { nl: 'Vervangen door wielen', en: 'Replaced with wheels' },
        { nl: 'Verven in een felle kleur', en: 'Painted a bright colour' }
      ], answer: 0,
      explain: { nl: 'Alinea 3: "Hij liet de poten van zijn piano afzagen, zodat het instrument plat op de vloer stond."',
                 en: 'Paragraph 3: "He had the legs of his piano sawn off, so the instrument stood flat on the floor."' } },
    { id: 'q2', type: 'mc', skill: 'verwijswoorden',
      q: { nl: '"Dat moment laat precies zien wat zijn dove jaren zo bijzonder maakten." Naar welk moment verwijst "dat"?',
           en: '"That moment shows exactly what made his deaf years so remarkable." Which moment does "that" refer to?' },
      options: [
        { nl: 'Naar het moment dat de zangeres Beethoven omdraaide en hij het juichende publiek zag',
          en: 'To the moment the singer turned Beethoven around and he saw the cheering audience' },
        { nl: 'Naar het moment dat hij de brief aan zijn broers schreef', en: 'To the moment he wrote the letter to his brothers' },
        { nl: 'Naar het moment dat de piano zijn poten kwijtraakte', en: 'To the moment the piano lost its legs' },
        { nl: 'Naar het moment dat hij zesentwintig werd', en: 'To the moment he turned twenty-six' }
      ], answer: 0,
      explain: { nl: 'De vorige alinea eindigt precies met dat moment: hij wordt omgedraaid en ziet het klappende publiek.',
                 en: 'The previous paragraph ends with exactly that moment: he is turned around and sees the clapping audience.' } },
    { id: 'q3', type: 'mc', skill: 'gevolgtrekking',
      q: { nl: 'Waarom kon Beethoven toch een symfonie componeren, ook al was hij doof?',
           en: 'Why could Beethoven still compose a symphony, even though he was deaf?' },
      options: [
        { nl: 'Omdat hij de regels van muziek zo goed kende dat hij het orkest in zijn hoofd kon horen',
          en: 'Because he knew the rules of music so well that he could hear the orchestra in his head' },
        { nl: 'Omdat hij stiekem toch nog een beetje kon horen', en: 'Because he could secretly still hear a little' },
        { nl: 'Omdat andere componisten het voor hem opschreven', en: 'Because other composers wrote it down for him' },
        { nl: 'Omdat hij alleen heel simpele stukken schreef', en: 'Because he only wrote very simple pieces' }
      ], answer: 0,
      explain: { nl: 'Alinea 2 legt het uit: hij kon een heel orkest in zijn hoofd laten spelen zonder er iets van te horen.',
                 en: 'Paragraph 2 explains it: he could have a whole orchestra play in his head without hearing any of it.' } },
    { id: 'q4', type: 'mc', skill: 'structuur',
      q: { nl: 'Waarom vertelt de tekst eerst over de wanhopige brief, voordat de negende symfonie ter sprake komt?',
           en: 'Why does the text first tell about the desperate letter, before the Ninth Symphony comes up?' },
      options: [
        { nl: 'Om te laten zien hoe zwaar het verlies van zijn gehoor voor Beethoven was, voordat blijkt wat hij er ondanks alles mee bereikte',
          en: 'To show how heavy the loss of his hearing was for Beethoven, before revealing what he still achieved despite it' },
        { nl: 'Omdat de brief en de symfonie in hetzelfde jaar geschreven zijn', en: 'Because the letter and the symphony were written in the same year' },
        { nl: 'Om uit te leggen hoe je een brief schrijft', en: 'To explain how to write a letter' },
        { nl: 'Omdat de schrijver de volgorde van de tijd niet kon veranderen', en: 'Because the writer could not change the order of time' }
      ], answer: 0,
      explain: { nl: 'Het contrast tussen wanhoop aan het begin en het triomfmoment bij de symfonie maakt zijn prestatie extra groot.',
                 en: 'The contrast between despair at the start and the triumphant symphony moment makes his achievement stand out more.' } },
    { id: 'q5', type: 'mc', skill: 'gevolgtrekking',
      q: { nl: 'Wat bedoelt de tekst met een "innerlijk gehoor"?', en: 'What does the text mean by an "inner hearing"?' },
      options: [
        { nl: 'Het vermogen om muziek in je hoofd te horen zonder dat je oren iets opvangen',
          en: 'The ability to hear music in your head without your ears picking up anything' },
        { nl: 'Een gehoorapparaat dat Beethoven droeg', en: 'A hearing aid Beethoven wore' },
        { nl: 'Het geluid van het orkest zelf', en: 'The sound of the orchestra itself' },
        { nl: 'Een soort oefening voor je oren', en: 'A kind of exercise for your ears' }
      ], answer: 0,
      explain: { nl: 'Alinea 5: zijn compositie kwam niet uit zijn oren, maar uit een innerlijk gehoor, opgebouwd door studie.',
                 en: 'Paragraph 5: his composition did not come from his ears, but from an inner hearing built up through study.' } },
    { id: 'q6', type: 'mc', skill: 'hoofdgedachte',
      q: { nl: 'Wat is de hoofdgedachte van deze tekst?', en: 'What is the main idea of this text?' },
      options: [
        { nl: 'Beethoven bleef ondanks zijn doofheid schitterende muziek schrijven, dankzij kennis en verbeelding in plaats van gehoor',
          en: 'Despite his deafness Beethoven kept writing brilliant music, thanks to knowledge and imagination rather than hearing' },
        { nl: 'Beethoven vond het niet erg om doof te zijn', en: 'Beethoven did not mind being deaf' },
        { nl: 'Een piano zonder poten werkt beter', en: 'A piano without legs works better' },
        { nl: 'Dirigenten moeten altijd meebewegen met het orkest', en: 'Conductors must always move along with the orchestra' }
      ], answer: 0,
      explain: { nl: 'De hele tekst laat zien hoe Beethoven ondanks doofheid bleef componeren, dankzij kennis en gevoel.',
                 en: 'The whole text shows how Beethoven kept composing despite deafness, thanks to knowledge and feeling.' } }
  ]
},

{
  id: 'muziek-9', topic: 'muziek', level: 4, emoji: '🎶', scene: 'stage',
  title: { nl: 'Waarom klinkt muziek in mineur verdrietig?', en: 'Why does music in a minor key sound sad?' },
  text: {
    nl: [
      "Speel dezelfde melodie twee keer, verander maar één toon, en het lied slaat om van vrolijk naar verdrietig. Componisten weten dat al eeuwen, maar wat gebeurt er dan precies in je hoofd?",
      "Het geheim zit in de toonladder. Een gewone, vrolijke toonladder heet majeur. Tel je vanaf de eerste toon vier halve stapjes omhoog, dan kom je bij de derde toon, en dat stapje heet een grote terts. In een mineurladder is dat stapje één halve toon kleiner: een kleine terts. Dat ene, minieme verschil is genoeg om je gevoel om te draaien.",
      "Waarom klinkt zo'n kleine terts dan verdrietig? Onderzoekers denken dat het te maken heeft met spraak. Als mensen verdrietig praten, dalen hun stem en de afstand tussen hun tonen vaak op een manier die lijkt op een kleine terts. Ons brein herkent dat patroon, ook zonder dat we het weten, en koppelt het aan emotie. Kinderen van amper vier jaar oud kunnen al horen dat mineurmuziek 'bozer' of 'verdrietiger' klinkt dan majeurmuziek, zelfs voordat iemand het hun heeft uitgelegd.",
      "Filmcomponisten gebruiken dat trucje voortdurend, en bewust. Een scène waarin een personage over slecht nieuws hoort, krijgt bijna nooit vrolijke majeurakkoorden. In plaats daarvan schuift de muziek naar mineur, soms met extra wrijvende tonen ertussen, zodat de spanning nog voelbaarder wordt. Het publiek hoeft niets te weten van toonladders om het verschil te voelen: de emotie komt vanzelf binnen.",
      "Toch is het geen ijzeren wet. Er bestaan vrolijke popliedjes die technisch gezien in mineur staan, en trage, sombere stukken die keurig in majeur zijn geschreven. Tempo, volume en de woorden van een lied spelen minstens zo'n grote rol als de toonladder. Mineur werkt vooral als een sterke aanwijzing, niet als een garantie.",
      "Weet je dit eenmaal, dan luister je anders naar een film. Let maar eens op het moment vlak voordat er iets ergs gebeurt: de kans is groot dat de muziek al een paar tellen eerder stiekem naar mineur is geschoven, lang voordat je het zelf doorhebt."
    ],
    en: [
      "Play the same melody twice, change just one note, and the song flips from happy to sad. Composers have known this for centuries, but what exactly happens in your head?",
      "The secret lies in the scale. An ordinary, cheerful scale is called major. Count four half-steps up from the first note and you reach the third note, and that gap is called a major third. In a minor scale that gap is one half-step smaller: a minor third. That one tiny difference is enough to flip how you feel.",
      "Why does such a small third sound sad? Researchers think it has to do with speech. When people speak sadly, their voice drops, and the gap between their pitches often resembles a minor third. Our brain recognises that pattern, even without our knowing it, and links it to emotion. Children barely four years old can already hear that minor music sounds 'angrier' or 'sadder' than major music, even before anyone has explained it to them.",
      "Film composers use that trick constantly, and on purpose. A scene where a character hears bad news almost never gets cheerful major chords. Instead the music slides into minor, sometimes with extra clashing notes thrown in, so the tension feels even sharper. The audience does not need to know anything about scales to feel the difference: the emotion just arrives.",
      "Still, it is not an iron rule. There are cheerful pop songs that are technically in minor, and slow, gloomy pieces neatly written in major. Tempo, volume and a song's lyrics play at least as big a role as the scale. Minor mainly works as a strong hint, not a guarantee.",
      "Once you know this, you listen to a film differently. Watch the moment right before something bad happens: chances are the music has already quietly slipped into minor a few beats earlier, long before you notice it yourself."
    ]
  },
  words: [
    { nl: 'toonladder', en: 'scale', defNl: 'een reeks tonen die achter elkaar omhooggaan, van laag naar hoog', defEn: 'a series of notes going up one after another, from low to high' },
    { nl: 'terts', en: 'third (interval)', defNl: 'de afstand tussen de eerste en de derde toon van een toonladder', defEn: 'the gap between the first and third note of a scale' },
    { nl: 'aanwijzing', en: 'hint, clue', defNl: 'iets dat een hint geeft, maar geen absolute zekerheid', defEn: 'something that gives a hint, but not absolute certainty' }
  ],
  questions: [
    { id: 'q1', type: 'mc', skill: 'letterlijk',
      q: { nl: 'Wat is het verschil tussen een grote en een kleine terts?', en: 'What is the difference between a major and a minor third?' },
      options: [
        { nl: 'Bij een kleine terts is de afstand tussen de eerste en derde toon een halve toon kleiner',
          en: 'With a minor third the gap between the first and third note is one half-step smaller' },
        { nl: 'Een kleine terts heeft meer noten', en: 'A minor third has more notes' },
        { nl: 'Een grote terts klinkt altijd harder', en: 'A major third always sounds louder' },
        { nl: 'Een kleine terts bestaat niet in muziek', en: 'A minor third does not exist in music' }
      ], answer: 0,
      explain: { nl: 'Alinea 2: "In een mineurladder is dat stapje één halve toon kleiner: een kleine terts."',
                 en: 'Paragraph 2: "In a minor scale that gap is one half-step smaller: a minor third."' } },
    { id: 'q2', type: 'multi', skill: 'letterlijk',
      q: { nl: 'Welke twee dingen noemt de tekst als reden waarom mineur verdrietig klinkt? Kies er 2.',
           en: 'Which two things does the text name as reasons why minor sounds sad? Pick 2.' },
      options: [
        { nl: 'De klank lijkt op hoe mensen praten als ze verdrietig zijn', en: 'The sound resembles how people speak when they are sad' },
        { nl: 'Al heel jonge kinderen horen het verschil tussen mineur en majeur', en: 'Even very young children hear the difference between minor and major' },
        { nl: 'Mineurmuziek is altijd trager gespeeld', en: 'Minor music is always played more slowly' },
        { nl: 'Filmcomponisten hebben mineur uitgevonden', en: 'Film composers invented minor keys' }
      ], answer: [0, 1],
      explain: { nl: 'Alinea 3 noemt het lijken op verdrietige spraak en het al vroeg herkennen door jonge kinderen. Over tempo of een uitvinder zegt de tekst niets.',
                 en: 'Paragraph 3 names the resemblance to sad speech and early recognition by young children. The text says nothing about tempo or an inventor.' } },
    { id: 'q3', type: 'mc', skill: 'verwijswoorden',
      q: { nl: '"Het publiek hoeft niets te weten van toonladders om het verschil te voelen." Waar verwijst "het verschil" naar?',
           en: '"The audience does not need to know anything about scales to feel the difference." What does "the difference" refer to?' },
      options: [
        { nl: 'Naar het verschil tussen majeur- en mineurakkoorden in de filmmuziek', en: 'To the difference between major and minor chords in the film music' },
        { nl: 'Naar het verschil tussen twee acteurs', en: 'To the difference between two actors' },
        { nl: 'Naar het verschil tussen twee filmscènes', en: 'To the difference between two film scenes' },
        { nl: 'Naar het verschil tussen volume en tempo', en: 'To the difference between volume and tempo' }
      ], answer: 0,
      explain: { nl: 'De zinnen ervoor beschrijven hoe muziek naar mineur schuift in plaats van majeur; dat verschil wordt bedoeld.',
                 en: 'The sentences before describe music sliding into minor instead of major; that is the difference meant.' } },
    { id: 'q4', type: 'mc', skill: 'gevolgtrekking',
      q: { nl: 'Waarom kiest een filmcomponist voor mineurakkoorden bij slecht nieuws in een scène?',
           en: 'Why does a film composer choose minor chords for bad news in a scene?' },
      options: [
        { nl: 'Om de spanning of het verdriet voelbaarder te maken voor de kijker, ook zonder dat die het doorheeft',
          en: 'To make the tension or sadness feel stronger to the viewer, even without them realising it' },
        { nl: 'Omdat mineurakkoorden makkelijker te spelen zijn', en: 'Because minor chords are easier to play' },
        { nl: 'Omdat majeurakkoorden niet bestaan in filmmuziek', en: 'Because major chords do not exist in film music' },
        { nl: 'Omdat het publiek erom vraagt', en: 'Because the audience asks for it' }
      ], answer: 0,
      explain: { nl: 'Alinea 4: de spanning wordt voelbaarder, en het publiek hoeft niets van toonladders te weten om het te voelen.',
                 en: 'Paragraph 4: the tension feels sharper, and the audience does not need to know about scales to feel it.' } },
    { id: 'q5', type: 'gap', skill: 'woordenschat',
      q: { nl: 'Een toonladder is ___.', en: 'A scale is ___.' },
      options: [
        { nl: 'een reeks tonen die achter elkaar omhooggaan, van laag naar hoog', en: 'a series of notes going up one after another, from low to high' },
        { nl: 'het volume van een lied', en: 'the volume of a song' },
        { nl: 'een instrument dat je met je vingers bespeelt', en: 'an instrument you play with your fingers' },
        { nl: 'een soort mineurakkoord', en: 'a kind of minor chord' }
      ], answer: 0,
      explain: { nl: 'Alinea 2 legt het uit: je telt vanaf de eerste toon stapjes omhoog binnen de toonladder.',
                 en: 'Paragraph 2 explains it: you count steps up from the first note within the scale.' } },
    { id: 'q6', type: 'order', skill: 'volgorde',
      q: { nl: 'Zet de uitleg over mineur en majeur in de juiste volgorde.', en: 'Put the explanation about minor and major in the right order.' },
      items: [
        { nl: 'Je verandert één toon in een melodie en het gevoel slaat om.', en: 'You change one note in a melody and the feeling flips.' },
        { nl: 'Een grote terts (majeur) blijkt één halve toon groter dan een kleine terts (mineur).', en: 'A major third turns out to be one half-step bigger than a minor third.' },
        { nl: 'Onderzoekers ontdekken dat de kleine terts lijkt op verdrietige spraak.', en: 'Researchers discover that the minor third resembles sad speech.' },
        { nl: 'Filmcomponisten gebruiken mineur bewust om spanning op te roepen.', en: 'Film composers deliberately use minor to create tension.' },
        { nl: 'Je hoort zelf hoe muziek in een film al vóór een naar moment naar mineur is geschoven.', en: 'You notice yourself how film music has already slipped into minor before something bad happens.' }
      ], answer: [0, 1, 2, 3, 4],
      explain: { nl: 'De tekst bouwt precies zo op: het effect, dan de toonladder, dan waarom, dan het gebruik, dan het zelf horen.',
                 en: 'The text builds up in exactly this order: the effect, then the scale, then why, then the use, then noticing it yourself.' } },
    { id: 'q7', type: 'mc', skill: 'structuur',
      q: { nl: 'Waarom begint alinea 5 met het woord "Toch"?', en: 'Why does paragraph 5 start with the word "Still"?' },
      options: [
        { nl: 'Om een nuance toe te voegen: mineur is geen absolute wet, er zijn uitzonderingen',
          en: 'To add a nuance: minor is not an absolute rule, there are exceptions' },
        { nl: 'Om een nieuw voorbeeld van filmmuziek te geven', en: 'To give a new example of film music' },
        { nl: 'Om te herhalen wat alinea 2 al zei', en: 'To repeat what paragraph 2 already said' },
        { nl: 'Om de toonladder opnieuw uit te leggen', en: 'To explain the scale again' }
      ], answer: 0,
      explain: { nl: 'Alinea 5 zegt letterlijk "geen ijzeren wet" en geeft voorbeelden van uitzonderingen.',
                 en: 'Paragraph 5 literally says "not an iron rule" and gives examples of exceptions.' } },
    { id: 'q8', type: 'mc', skill: 'hoofdgedachte',
      q: { nl: 'Wat is de hoofdgedachte van deze tekst?', en: 'What is the main idea of this text?' },
      options: [
        { nl: 'Een klein verschil in toonladder kan al een groot verschil in gevoel geven, en filmcomponisten spelen daar bewust mee',
          en: 'A small difference in scale can already give a big difference in feeling, and film composers deliberately play with that' },
        { nl: 'Kinderen van vier snappen niets van muziek', en: 'Four-year-olds understand nothing about music' },
        { nl: 'Majeurmuziek is altijd beter dan mineurmuziek', en: 'Major music is always better than minor music' },
        { nl: 'Filmmuziek heeft geen invloed op wat je voelt', en: 'Film music has no effect on how you feel' }
      ], answer: 0,
      explain: { nl: 'De hele tekst draait om dat ene kleine verschil en hoe bewust componisten het inzetten.',
                 en: 'The whole text revolves around that one small difference and how deliberately composers use it.' } }
  ]
},

{
  id: 'muziek-10', topic: 'muziek', level: 5, emoji: '🧱', scene: 'default',
  title: { nl: 'Is graffiti kunst of vernieling?', en: 'Is graffiti art or vandalism?' },
  text: {
    nl: [
      "Op een grauwe muur naast het station staat 's ochtends niets bijzonders. De volgende ochtend prijkt er een kleurrijk schilderij van drie verdiepingen hoog: een vogel die uit een kooi ontsnapt. Buurtbewoners staan ervoor te kijken, sommigen enthousiast, anderen boos. Is dit kunst, of is dit vernieling?",
      "Graffiti is het spuiten of schilderen van tekeningen en letters op muren, treinen of andere oppervlakken, meestal zonder dat de eigenaar daar toestemming voor gaf. Het ontstond in de jaren zeventig in de metro's van New York, waar jongeren hun bijnaam als 'tag' overal neerzetten. Inmiddels is het uitgegroeid tot enorme, gedetailleerde muurschilderingen die je over de hele wereld tegenkomt.",
      "Voorstanders zien graffiti als een van de weinige kunstvormen die iedereen kan zien, zonder museumkaartje. Een saaie, grijze muur verandert in iets om naar te kijken, en dat maakt een buurt levendiger. Sommige graffitikunstenaars werden wereldberoemd: de Britse kunstenaar Banksy begon met illegale muren, en zijn werk hangt nu in de duurste veilinghuizen ter wereld.",
      "Tegenstanders wijzen op iets simpels: die muur is van iemand anders, en niemand heeft om die tekening gevraagd. Een winkelier die zijn pand elke maand moet laten schoonspuiten, betaalt dat uit eigen zak, en gemeenten geven jaarlijks miljoenen euro's uit aan het verwijderen van graffiti. Sommige buurtbewoners voelen zich ook onveiliger in een straat vol wilde spuitverf: het doet denken aan verwaarlozing, ook als de tekening zelf mooi is.",
      "Tussen die twee uitersten zit een groot grijs gebied. Steeds meer steden wijzen legale muren aan waar spuiten wél mag, of geven kunstenaars officieel een opdracht voor een muurschildering. Dan is precies dezelfde tekening ineens geen vernieling meer, maar een gemeentelijk kunstwerk. Kunst en toestemming blijken dus twee losse vragen: een tekening kan prachtig zijn én illegaal, allebei tegelijk.",
      "Datzelfde Banksy-werk laat de spanning goed zien. Zijn stukken werden ooit 's nachts stiekem op muren gezet, zonder toestemming, met het risico op een boete. Diezelfde stukken worden tegenwoordig voorzichtig van de muur gezaagd en voor miljoenen verkocht. Sommigen vinden dat een mooi bewijs dat straatkunst serieus genomen wordt. Anderen vinden het juist ironisch: het rebelse, illegale randje wordt nu net het verkoopargument.",
      "Een makkelijk antwoord bestaat niet. Wie zegt dat graffiti altijd kunst is, vergeet de winkelier met de rekening. Wie zegt dat het altijd vernieling is, vergeet de vogel die uit zijn kooi ontsnapt op die grauwe stationsmuur. En wat vind jij?"
    ],
    en: [
      "On a grey wall next to the station there is nothing special in the morning. The next morning a colourful painting three storeys high has appeared: a bird escaping from a cage. Local residents stand looking at it, some delighted, others angry. Is this art, or is this vandalism?",
      "Graffiti is spraying or painting drawings and letters on walls, trains or other surfaces, usually without the owner's permission. It started in the 1970s in the subways of New York, where young people put their nickname, their 'tag', up everywhere. By now it has grown into huge, detailed murals you come across all over the world.",
      "Supporters see graffiti as one of the few art forms everyone can see, without a museum ticket. A dull, grey wall turns into something worth looking at, and that makes a neighbourhood livelier. Some graffiti artists became world-famous: the British artist Banksy started out on illegal walls, and his work now hangs in the most expensive auction houses in the world.",
      "Opponents point to something simple: that wall belongs to somebody else, and nobody asked for that drawing. A shopkeeper who has to have their building cleaned every month pays for that out of their own pocket, and city councils spend millions of euros every year removing graffiti. Some residents also feel less safe in a street full of wild spray paint: it makes them think of neglect, even when the drawing itself is beautiful.",
      "Between those two extremes lies a big grey area. More and more cities designate legal walls where spraying is allowed, or officially commission artists for a mural. Then the exact same drawing suddenly stops being vandalism and becomes a municipal artwork. Art and permission turn out to be two separate questions: a drawing can be beautiful and illegal, both at once.",
      "That same Banksy work shows the tension well. His pieces were once put up secretly at night, without permission, at the risk of a fine. Those same pieces are now carefully sawn off the wall and sold for millions. Some people see that as a fine proof that street art is taken seriously. Others find it ironic: the rebellious, illegal edge has now become exactly the selling point.",
      "There is no easy answer. Anyone who says graffiti is always art forgets the shopkeeper with the bill. Anyone who says it is always vandalism forgets the bird escaping from its cage on that grey station wall. And what do you think?"
    ]
  },
  words: [
    { nl: 'muurschildering', en: 'mural', defNl: 'een groot schilderij dat direct op een muur is gemaakt', defEn: 'a large painting made directly on a wall' },
    { nl: 'vernieling', en: 'vandalism', defNl: 'iets kapotmaken of besmeuren zonder toestemming', defEn: 'damaging or defacing something without permission' },
    { nl: 'verwaarlozing', en: 'neglect', defNl: 'de toestand waarin niemand meer voor iets zorgt', defEn: 'the state of nobody taking care of something anymore' }
  ],
  questions: [
    { id: 'q1', type: 'mc', skill: 'letterlijk',
      q: { nl: 'Waar ontstond graffiti in de jaren zeventig?', en: 'Where did graffiti originate in the 1970s?' },
      options: [
        { nl: 'In de metro’s van New York', en: 'In the subways of New York' },
        { nl: 'In musea in Londen', en: 'In museums in London' },
        { nl: 'Op stationsmuren in Nederland', en: 'On station walls in the Netherlands' },
        { nl: 'Op treinen in Frankrijk', en: 'On trains in France' }
      ], answer: 0,
      explain: { nl: 'Alinea 2: "Het ontstond in de jaren zeventig in de metro’s van New York."',
                 en: 'Paragraph 2: "It started in the 1970s in the subways of New York."' } },
    { id: 'q2', type: 'sort', skill: 'feitmening',
      q: { nl: 'Feit of mening? Zet elke zin in de goede groep.', en: 'Fact or opinion? Put every sentence in the right group.' },
      bins: [{ nl: 'Feit', en: 'Fact' }, { nl: 'Mening', en: 'Opinion' }],
      items: [
        { nl: 'Graffiti ontstond in de jaren zeventig in de metro’s van New York.',
          en: 'Graffiti originated in the 1970s in the subways of New York.', bin: 0 },
        { nl: 'Een saaie, grijze muur verandert in iets om naar te kijken.',
          en: 'A dull, grey wall turns into something worth looking at.', bin: 1 },
        { nl: 'Gemeenten geven jaarlijks miljoenen euro’s uit aan het verwijderen van graffiti.',
          en: 'City councils spend millions of euros every year removing graffiti.', bin: 0 },
        { nl: 'Het doet denken aan verwaarlozing, ook als de tekening zelf mooi is.',
          en: 'It makes people think of neglect, even when the drawing itself is beautiful.', bin: 1 }
      ],
      explain: { nl: 'Ontstaansjaar en uitgegeven bedragen kun je narekenen: dat zijn feiten. Of iets "levendiger" of "verwaarloosd" aanvoelt, is een oordeel.',
                 en: 'A founding year and money spent can be checked: those are facts. Whether something feels "livelier" or "neglected" is a judgement.' } },
    { id: 'q3', type: 'mc', skill: 'doel',
      q: { nl: 'Wat wil de schrijver vooral bereiken met deze tekst?', en: 'What is the writer mainly trying to achieve with this text?' },
      options: [
        { nl: 'Je laten nadenken over een lastige vraag, door voor- en tegenstanders eerlijk aan het woord te laten',
          en: 'Make you think about a hard question, by letting supporters and opponents speak fairly' },
        { nl: 'Je overtuigen dat alle graffiti verboden moet worden', en: 'Convince you that all graffiti must be banned' },
        { nl: 'Je uitleggen hoe je zelf een muurschildering maakt', en: 'Explain how to make a mural yourself' },
        { nl: 'Reclame maken voor het werk van Banksy', en: 'Advertise Banksy’s work' }
      ], answer: 0,
      explain: { nl: 'De tekst geeft eerst de voorstanders het woord, dan de tegenstanders, en eindigt met "En wat vind jij?".',
                 en: 'The text gives supporters a voice first, then opponents, and ends with "And what do you think?"' } },
    { id: 'q4', type: 'mc', skill: 'verwijswoorden',
      q: { nl: '"Dan is precies dezelfde tekening ineens geen vernieling meer, maar een gemeentelijk kunstwerk." Waar verwijst "dezelfde tekening" naar?',
           en: '"Then the exact same drawing suddenly stops being vandalism and becomes a municipal artwork." What does "the exact same drawing" refer to?' },
      options: [
        { nl: 'Naar een tekening die eerst illegaal was, maar nu op een aangewezen legale muur staat',
          en: 'To a drawing that was illegal at first, but now stands on a designated legal wall' },
        { nl: 'Naar het schilderij van Banksy dat verkocht is', en: 'To the Banksy painting that was sold' },
        { nl: 'Naar de vogel op de stationsmuur', en: 'To the bird on the station wall' },
        { nl: 'Naar de tekeningen in de metro’s van New York in de jaren zeventig', en: 'To the drawings in the New York subways in the 1970s' }
      ], answer: 0,
      explain: { nl: 'De zin ervoor gaat over legale muren en officiële opdrachten; "dezelfde tekening" verwijst daarnaar terug.',
                 en: 'The sentence before is about legal walls and official commissions; "the exact same drawing" refers back to that.' } },
    { id: 'q5', type: 'multi', skill: 'gevolgtrekking',
      q: { nl: 'Welke twee dingen laten zien dat "kunst" en "toestemming" twee aparte vragen zijn? Kies er 2.',
           en: 'Which two things show that "art" and "permission" are two separate questions? Pick 2.' },
      options: [
        { nl: 'Dezelfde tekening kan legaal zijn op de ene muur en illegaal op de andere', en: 'The same drawing can be legal on one wall and illegal on another' },
        { nl: 'Banksy’s werk werd eerst illegaal gemaakt en later voor miljoenen verkocht', en: 'Banksy’s work was first made illegally and later sold for millions' },
        { nl: 'Alle graffiti wordt tegenwoordig door de gemeente betaald', en: 'All graffiti is nowadays paid for by the city council' },
        { nl: 'Musea vragen nooit toegang voor kunst', en: 'Museums never charge for admission to art' }
      ], answer: [0, 1],
      explain: { nl: 'Alinea 5 en 6 laten allebei zien dat dezelfde tekening kunst én (on)wettig kan zijn. De andere twee beweringen staan niet in de tekst.',
                 en: 'Paragraphs 5 and 6 both show the same drawing can be art and (il)legal at once. The other two claims are not in the text.' } },
    { id: 'q6', type: 'mc', skill: 'structuur',
      q: { nl: 'Waarom begint alinea 5 met "Tussen die twee uitersten zit een groot grijs gebied"?',
           en: 'Why does paragraph 5 start with "Between those two extremes lies a big grey area"?' },
      options: [
        { nl: 'Om de tekst een nuance te geven na de duidelijke voor- en tegenargumenten',
          en: 'To add a nuance to the text after the clear arguments for and against' },
        { nl: 'Om een nieuw voorbeeld van vernieling te geven', en: 'To give a new example of vandalism' },
        { nl: 'Om de geschiedenis van graffiti te herhalen', en: 'To repeat the history of graffiti' },
        { nl: 'Om te zeggen dat voorstanders gelijk hebben', en: 'To say the supporters are right' }
      ], answer: 0,
      explain: { nl: 'Na de duidelijke alinea’s vóór en tegen volgt hier een nuance: legale muren en opdrachten.',
                 en: 'After the clear for-and-against paragraphs, a nuance follows here: legal walls and commissions.' } },
    { id: 'q7', type: 'mc', skill: 'samenvatten',
      q: { nl: 'Welke samenvatting past het beste bij de hele tekst?', en: 'Which summary fits the whole text best?' },
      options: [
        { nl: 'Graffiti kan een buurt opfleuren en beroemde kunstenaars opleveren, maar het gebeurt vaak zonder toestemming en kost geld om te verwijderen, waardoor het geen simpele vraag is of het kunst of vernieling is.',
          en: 'Graffiti can brighten a neighbourhood and produce famous artists, but it often happens without permission and costs money to remove, so whether it is art or vandalism is not a simple question.' },
        { nl: 'Banksy is de beroemdste graffitikunstenaar ter wereld.', en: 'Banksy is the most famous graffiti artist in the world.' },
        { nl: 'Gemeenten moeten stoppen met het schoonmaken van muren.', en: 'City councils must stop cleaning walls.' },
        { nl: 'Graffiti ontstond in New York en verspreidde zich daarna over de wereld.', en: 'Graffiti originated in New York and then spread around the world.' }
      ], answer: 0,
      explain: { nl: 'Dat antwoord bevat de kern van elke alinea: voor, tegen en de nuance ertussen. De rest zijn losse details.',
                 en: 'That answer holds the core of every paragraph: for, against and the nuance between them. The rest are single details.' } },
    { id: 'q8', type: 'tf', skill: 'gevolgtrekking',
      q: { nl: 'Uit de tekst blijkt dat de schrijver vindt dat graffiti altijd verboden moet worden.',
           en: 'The text shows that the writer thinks graffiti should always be banned.' },
      answer: false,
      explain: { nl: 'De laatste alinea zegt: "Een makkelijk antwoord bestaat niet", en eindigt met een open vraag aan de lezer.',
                 en: 'The last paragraph says: "There is no easy answer", and ends with an open question to the reader.' } },
    { id: 'q9', type: 'mc', skill: 'woordenschat',
      q: { nl: 'Wat betekent "verwaarlozing" zoals het in de tekst gebruikt wordt?', en: 'What does "neglect" mean as used in the text?' },
      options: [
        { nl: 'De toestand waarin niemand meer voor iets zorgt', en: 'The state of nobody taking care of something anymore' },
        { nl: 'Een nieuwe kunstvorm', en: 'A new art form' },
        { nl: 'Het schoonmaken van een muur', en: 'The cleaning of a wall' },
        { nl: 'Een soort spuitverf', en: 'A type of spray paint' }
      ], answer: 0,
      explain: { nl: 'De tekst gebruikt het woord om te beschrijven hoe wilde graffiti een straat verwaarloosd kan laten aanvoelen.',
                 en: 'The text uses the word to describe how wild graffiti can make a street feel neglected.' } }
  ]
},
{
  id: 'muziek-11', topic: 'muziek', level: 1, emoji: '🍾', scene: 'stage',
  title: { nl: 'Muziek uit een fles', en: 'Music from a bottle' },
  text: {
    nl: [
      "Juf Anouk zet zeven lege glazen flessen op een rij. \"Vandaag maken we een orgel,\" zegt ze. De klas kijkt verbaasd. Een orgel van flessen? Dat kan toch niet?",
      "Eerst giet Noah water in de flessen. In de eerste fles doet hij een klein beetje. In de volgende steeds wat meer. De laatste fles is bijna helemaal vol.",
      "Dan blaast Fatima zachtjes over de rand van de eerste fles. Er klinkt een lage toon, als een misthoorn. Bij de volle fles klinkt de toon hoog en fluitend.",
      "Juf Anouk legt uit hoe dat komt. \"Geluid is trillende lucht. In een fles met weinig water zit veel lucht. Die lucht trilt langzaam, en dan hoor je een lage toon. Met meer water zit er minder lucht in de fles. Die trilt sneller, en dan wordt de toon hoger.\"",
      "Aan het eind van de les spelen de kinderen samen een liedje. Het klinkt een beetje vals, maar iedereen lacht. Thuis wil Noah het meteen nog eens proberen."
    ],
    en: [
      "Miss Anouk puts seven empty glass bottles in a row. \"Today we are making an organ,\" she says. The class looks surprised. An organ made of bottles? That cannot be right, can it?",
      "First Noah pours water into the bottles. He puts just a little in the first bottle. A bit more in each next one. The last bottle is almost completely full.",
      "Then Fatima gently blows across the top of the first bottle. A low note sounds, like a foghorn. With the full bottle the note sounds high and whistling.",
      "Miss Anouk explains why. \"Sound is vibrating air. A bottle with little water has a lot of air in it. That air vibrates slowly, and then you hear a low note. With more water there is less air in the bottle. It vibrates faster, and then the note gets higher.\"",
      "At the end of the lesson the children play a song together. It sounds a little out of tune, but everyone laughs. Noah wants to try it again at home straight away."
    ]
  },
  words: [
    { nl: 'toon', en: 'note', defNl: 'één geluid met een bepaalde hoogte', defEn: 'one sound with a certain pitch' },
    { nl: 'trilt', en: 'vibrates', defNl: 'heel snel heen en weer bewegen', defEn: 'moves back and forth very quickly' },
    { nl: 'vals', en: 'out of tune', defNl: 'net niet de goede toon, zodat het raar klinkt', defEn: 'not quite the right note, so it sounds odd' }
  ],
  questions: [
    { id: 'q1', type: 'mc', skill: 'letterlijk',
      q: { nl: 'Hoe klinkt de toon als Fatima over de eerste fles blaast?', en: 'What does the note sound like when Fatima blows across the first bottle?' },
      options: [
        { nl: 'Hoog en fluitend', en: 'High and whistling' },
        { nl: 'Laag, als een misthoorn', en: 'Low, like a foghorn' },
        { nl: 'Je hoort niets', en: 'You hear nothing' },
        { nl: 'Als een trommel', en: 'Like a drum' }
      ], answer: 1,
      explain: { nl: 'Alinea 3: "Er klinkt een lage toon, als een misthoorn."',
                 en: 'Paragraph 3: "A low note sounds, like a foghorn."' } },
    { id: 'q2', type: 'tf', skill: 'letterlijk',
      q: { nl: 'De laatste fles is bijna helemaal vol met water.', en: 'The last bottle is almost completely full of water.' },
      answer: true,
      explain: { nl: 'Waar. Alinea 2: "De laatste fles is bijna helemaal vol."',
                 en: 'True. Paragraph 2: "The last bottle is almost completely full."' } },
    { id: 'q3', type: 'gap', skill: 'woordenschat',
      q: { nl: 'Het liedje klinkt een beetje ___: net niet de goede tonen.', en: 'The song sounds a little ___: not quite the right notes.' },
      options: [
        { nl: 'vals', en: 'out of tune' },
        { nl: 'hard', en: 'loud' },
        { nl: 'mooi', en: 'beautiful' },
        { nl: 'stil', en: 'quiet' }
      ], answer: 0,
      explain: { nl: 'Vals spelen betekent dat de tonen net niet kloppen.',
                 en: 'Playing out of tune means the notes are not quite right.' } },
    { id: 'q4', type: 'order', skill: 'volgorde',
      q: { nl: 'Zet de les in de goede volgorde.', en: 'Put the lesson in the right order.' },
      items: [
        { nl: 'De juf zet zeven lege flessen op een rij.', en: 'The teacher puts seven empty bottles in a row.' },
        { nl: 'Noah giet water in de flessen.', en: 'Noah pours water into the bottles.' },
        { nl: 'Fatima blaast over de flessen.', en: 'Fatima blows across the bottles.' },
        { nl: 'De klas speelt samen een liedje.', en: 'The class plays a song together.' }
      ], answer: [0, 1, 2, 3],
      explain: { nl: 'Let op "eerst", "dan" en "aan het eind van de les".',
                 en: 'Look at "first", "then" and "at the end of the lesson".' } },
    { id: 'q5', type: 'mc', skill: 'hoofdgedachte',
      q: { nl: 'Wat leren de kinderen vooral in deze les?', en: 'What do the children mainly learn in this lesson?' },
      options: [
        { nl: 'Hoe je flessen afwast', en: 'How to wash bottles' },
        { nl: 'Dat een orgel in de kerk staat', en: 'That an organ stands in a church' },
        { nl: 'Dat minder lucht in de fles een hogere toon geeft', en: 'That less air in the bottle gives a higher note' },
        { nl: 'Hoe je een misthoorn bouwt', en: 'How to build a foghorn' }
      ], answer: 2,
      explain: { nl: 'De uitleg van juf Anouk is de kern: veel lucht trilt langzaam (laag), weinig lucht trilt snel (hoog).',
                 en: 'Miss Anouk’s explanation is the key: lots of air vibrates slowly (low), little air vibrates fast (high).' } }
  ]
},

{
  id: 'muziek-12', topic: 'muziek', level: 6, emoji: '🎻', scene: 'stage',
  title: { nl: 'Kippenvel van muziek', en: 'Goosebumps from music' },
  text: {
    nl: [
      "Misschien ken je het: je luistert naar een lied, en precies op één moment loopt er een rilling over je rug. De haartjes op je armen gaan rechtop staan. Soms voelt het zelfs alsof er een golf over je hoofd trekt. Je hebt kippenvel, terwijl je het helemaal niet koud hebt. Wetenschappers noemen dat met een Frans woord een frisson. Ongeveer de helft tot twee derde van alle mensen krijgt het weleens van muziek.",
      "Kippenvel is eigenlijk een overblijfsel uit de tijd dat onze voorouders nog een dikke vacht hadden. Als een dier het koud heeft of schrikt, gaan zijn haren overeind staan. Zo lijkt het groter en blijft het warmer. Bij mensen heeft dat weinig zin meer, want onze haartjes zijn dun en kort. Toch doet het lichaam het nog steeds, ook bij sterke gevoelens.",
      "Onderzoekers in Canada lieten proefpersonen hun lievelingsmuziek meenemen. Terwijl ze luisterden, keken de onderzoekers met een scanner in hun hersenen. Op het moment van het kippenvel kwam er dopamine vrij, een stof die je een fijn, beloond gevoel geeft. Hetzelfde stofje komt vrij als je iets lekkers eet of een doelpunt maakt. Het verrassende was dat er al dopamine vrijkwam vlak vóór het mooie moment, alsof de hersenen zich er alvast op verheugden.",
      "Wat maakt zo'n moment zo sterk? Vaak gebeurt er iets onverwachts. Een stem gaat ineens heel hoog, een koor valt in na een stil stuk, of een akkoord klinkt anders dan je verwachtte. Je hersenen voorspellen voortdurend hoe muziek verder gaat. Wordt die voorspelling op een mooie manier doorbroken, dan reageert je lichaam. Componisten gebruiken dat al eeuwen, vaak zonder te weten waarom het werkt.",
      "Niet iedereen krijgt even snel kippenvel. Uit een ander onderzoek bleek dat mensen die het vaak krijgen, meer verbindingen hebben tussen het deel van de hersenen dat geluid verwerkt en de delen die met gevoel te maken hebben. Ook maakt het uit welke muziek je kent en mooi vindt. Muziek uit je eigen jeugd of van een belangrijk moment werkt vaak het sterkst. Een lied dat de ene persoon ontroert, laat de ander koud.",
      "Je hoeft dus geen muziekkenner te zijn om het te voelen. Het is juist een teken dat je hersenen actief meeluisteren, voorspellen en genieten. De volgende keer dat je kippenvel krijgt van een liedje, weet je dat er binnen in je hoofd een klein feestje wordt gevierd."
    ],
    en: [
      "Perhaps you know it: you are listening to a song, and at exactly one moment a shiver runs down your back. The little hairs on your arms stand up. Sometimes it even feels like a wave passing over your head. You have goosebumps, even though you are not cold at all. Scientists call that by a French word, a frisson. About half to two thirds of all people sometimes get it from music.",
      "Goosebumps are really a leftover from the time when our ancestors still had a thick coat of fur. When an animal is cold or gets a fright, its hairs stand on end. That way it looks bigger and stays warmer. In humans that is not much use any more, because our little hairs are thin and short. Still, the body keeps doing it, also with strong feelings.",
      "Researchers in Canada asked volunteers to bring their favourite music. While they listened, the researchers looked into their brains with a scanner. At the moment of the goosebumps, dopamine was released, a substance that gives you a nice, rewarded feeling. The same substance is released when you eat something tasty or score a goal. The surprising thing was that dopamine was already released just before the beautiful moment, as if the brain was already looking forward to it.",
      "What makes such a moment so strong? Often something unexpected happens. A voice suddenly goes very high, a choir comes in after a quiet passage, or a chord sounds different from what you expected. Your brain is constantly predicting how music will go on. If that prediction is broken in a beautiful way, your body reacts. Composers have used that for centuries, often without knowing why it works.",
      "Not everyone gets goosebumps equally easily. Another study found that people who get them often have more connections between the part of the brain that processes sound and the parts that deal with feelings. It also matters which music you know and like. Music from your own childhood or from an important moment often works most strongly. A song that moves one person leaves another cold.",
      "So you do not have to be a music expert to feel it. It is actually a sign that your brain is actively listening along, predicting and enjoying. The next time you get goosebumps from a song, you will know that a little party is being held inside your head."
    ]
  },
  words: [
    { nl: 'overblijfsel', en: 'leftover', defNl: 'iets wat over is van vroeger', defEn: 'something left over from the past' },
    { nl: 'proefpersoon', en: 'test subject', defNl: 'iemand die meedoet aan een onderzoek', defEn: 'someone who takes part in a study' },
    { nl: 'ontroeren', en: 'to move (emotionally)', defNl: 'iemand een diep, warm gevoel geven', defEn: 'to give someone a deep, warm feeling' }
  ],
  questions: [
    { id: 'q1', type: 'mc', skill: 'letterlijk',
      q: { nl: 'Hoeveel mensen krijgen weleens kippenvel van muziek?', en: 'How many people sometimes get goosebumps from music?' },
      options: [
        { nl: 'Ongeveer de helft tot twee derde', en: 'About half to two thirds' },
        { nl: 'Bijna niemand', en: 'Almost nobody' },
        { nl: 'Alleen muzikanten', en: 'Only musicians' },
        { nl: 'Iedereen, altijd', en: 'Everyone, always' }
      ], answer: 0,
      explain: { nl: 'Alinea 1: "Ongeveer de helft tot twee derde van alle mensen krijgt het weleens van muziek."',
                 en: 'Paragraph 1: "About half to two thirds of all people sometimes get it from music."' } },
    { id: 'q2', type: 'find', skill: 'gevolgtrekking',
      q: { nl: 'Welke zin laat zien dat je hersenen al weten dat er een mooi moment aankomt?', en: 'Which sentence shows that your brain already knows a beautiful moment is coming?' },
      options: [
        { nl: 'De haartjes op je armen gaan rechtop staan.', en: 'The little hairs on your arms stand up.' },
        { nl: 'Hetzelfde stofje komt vrij als je iets lekkers eet of een doelpunt maakt.', en: 'The same substance is released when you eat something tasty or score a goal.' },
        { nl: 'Het verrassende was dat er al dopamine vrijkwam vlak vóór het mooie moment, alsof de hersenen zich er alvast op verheugden.', en: 'The surprising thing was that dopamine was already released just before the beautiful moment, as if the brain was already looking forward to it.' },
        { nl: 'Een lied dat de ene persoon ontroert, laat de ander koud.', en: 'A song that moves one person leaves another cold.' }
      ], answer: 2,
      explain: { nl: 'De dopamine komt al vóór het moment. Dus de hersenen zagen het aankomen.',
                 en: 'The dopamine comes before the moment. So the brain saw it coming.' } },
    { id: 'q3', type: 'match', skill: 'woordenschat',
      q: { nl: 'Klik het woord en daarna de juiste betekenis.', en: 'Click the word and then the correct meaning.' },
      pairs: [
        { word: { nl: 'overblijfsel', en: 'leftover' }, meaning: { nl: 'iets wat over is van vroeger', en: 'something left over from the past' } },
        { word: { nl: 'proefpersoon', en: 'test subject' }, meaning: { nl: 'iemand die meedoet aan een onderzoek', en: 'someone taking part in a study' } },
        { word: { nl: 'ontroeren', en: 'to move' }, meaning: { nl: 'een diep, warm gevoel geven', en: 'to give a deep, warm feeling' } }
      ],
      explain: { nl: 'Deze drie woorden komen allemaal uit de tekst.', en: 'All three words come from the text.' } },
    { id: 'q4', type: 'mc', skill: 'verwijswoorden',
      q: { nl: '"Zo lijkt het groter en blijft het warmer." Wat is "het"?', en: '"That way it looks bigger and stays warmer." What is "it"?' },
      options: [
        { nl: 'Een dier met een vacht', en: 'An animal with fur' },
        { nl: 'Een lied', en: 'A song' },
        { nl: 'De hersenen', en: 'The brain' },
        { nl: 'Een koor', en: 'A choir' }
      ], answer: 0,
      explain: { nl: 'De zin ervoor gaat over een dier dat het koud heeft of schrikt. "Het" is dat dier.',
                 en: 'The sentence before is about an animal that is cold or frightened. "It" is that animal.' } },
    { id: 'q5', type: 'order', skill: 'structuur',
      q: { nl: 'In welke volgorde komt dit in de tekst aan bod?', en: 'In which order does the text deal with these?' },
      items: [
        { nl: 'Wat kippenvel van muziek is', en: 'What goosebumps from music are' },
        { nl: 'Waar kippenvel vandaan komt', en: 'Where goosebumps come from' },
        { nl: 'Wat er in je hersenen gebeurt', en: 'What happens in your brain' },
        { nl: 'Waardoor zo\'n moment ontstaat', en: 'What causes such a moment' },
        { nl: 'Waarom niet iedereen het even snel krijgt', en: 'Why not everyone gets it equally easily' }
      ], answer: [0, 1, 2, 3, 4],
      explain: { nl: 'Elke alinea behandelt één vraag. Zo is de tekst opgebouwd als een reeks vragen en antwoorden.',
                 en: 'Each paragraph deals with one question. The text is built as a series of questions and answers.' } },
    { id: 'q6', type: 'sort', skill: 'feitmening',
      q: { nl: 'Feit of mening? Zet elke zin in de goede groep.', en: 'Fact or opinion? Put every sentence in the right group.' },
      bins: [{ nl: 'Feit', en: 'Fact' }, { nl: 'Mening', en: 'Opinion' }],
      items: [
        { nl: 'Bij kippenvel van muziek komt dopamine vrij.', en: 'Dopamine is released with goosebumps from music.', bin: 0 },
        { nl: 'Koormuziek is de mooiste muziek die er bestaat.', en: 'Choir music is the most beautiful music there is.', bin: 1 },
        { nl: 'Dieren zetten hun haren overeind als ze het koud hebben.', en: 'Animals make their hair stand on end when they are cold.', bin: 0 },
        { nl: 'Wie geen kippenvel krijgt, luistert niet goed.', en: 'Anyone who gets no goosebumps is not listening properly.', bin: 1 }
      ],
      explain: { nl: 'Wat onderzoekers meten en wat dieren doen, zijn feiten. "De mooiste" en "luistert niet goed" zijn oordelen.',
                 en: 'What researchers measure and what animals do are facts. "The most beautiful" and "not listening properly" are judgements.' } },
    { id: 'q7', type: 'multi', skill: 'letterlijk',
      q: { nl: 'Welke onverwachte momenten in muziek noemt de tekst? Kies er 2.', en: 'Which unexpected moments in music does the text name? Pick 2.' },
      options: [
        { nl: 'Een stem die ineens heel hoog gaat', en: 'A voice that suddenly goes very high' },
        { nl: 'Een koor dat invalt na een stil stuk', en: 'A choir coming in after a quiet passage' },
        { nl: 'Een liedje dat heel zacht blijft', en: 'A song that stays very quiet' },
        { nl: 'Een drummer die te laat komt', en: 'A drummer who arrives late' }
      ], answer: [0, 1],
      explain: { nl: 'Alinea 4 noemt een hoge stem, een invallend koor en een onverwacht akkoord.',
                 en: 'Paragraph 4 names a high voice, a choir coming in and an unexpected chord.' } },
    { id: 'q8', type: 'mc', skill: 'hoofdgedachte',
      q: { nl: 'Wat is de hoofdgedachte van de tekst?', en: 'What is the main idea of the text?' },
      options: [
        { nl: 'Kippenvel van muziek ontstaat doordat je hersenen meeluisteren, voorspellen en genieten', en: 'Goosebumps from music happen because your brain listens along, predicts and enjoys' },
        { nl: 'Onze voorouders hadden een dikke vacht', en: 'Our ancestors had a thick coat of fur' },
        { nl: 'In Canada wordt veel muziek gemaakt', en: 'A lot of music is made in Canada' },
        { nl: 'Koren zingen altijd na een stil stuk', en: 'Choirs always sing after a quiet passage' }
      ], answer: 0,
      explain: { nl: 'De hele tekst legt uit wat er in je lichaam en hoofd gebeurt. De andere keuzes zijn details of kloppen niet.',
                 en: 'The whole text explains what happens in your body and head. The other options are details or wrong.' } },
    { id: 'q9', type: 'tf', skill: 'gevolgtrekking',
      q: { nl: 'Volgens de tekst krijgen alleen mensen die veel van muziek weten kippenvel.', en: 'According to the text, only people who know a lot about music get goosebumps.' },
      answer: false,
      explain: { nl: 'De laatste alinea zegt juist: "Je hoeft dus geen muziekkenner te zijn om het te voelen."',
                 en: 'The last paragraph says the opposite: "So you do not have to be a music expert to feel it."' } },
    { id: 'q10', type: 'find', skill: 'doel',
      q: { nl: 'Met welke zin stelt de schrijver de lezer gerust?', en: 'With which sentence does the writer reassure the reader?' },
      options: [
        { nl: 'Niet iedereen krijgt even snel kippenvel.', en: 'Not everyone gets goosebumps equally easily.' },
        { nl: "Wat maakt zo'n moment zo sterk?", en: 'What makes such a moment so strong?' },
        { nl: 'Vaak gebeurt er iets onverwachts.', en: 'Often something unexpected happens.' },
        { nl: 'Je hoeft dus geen muziekkenner te zijn om het te voelen.', en: 'So you do not have to be a music expert to feel it.' }
      ], answer: 3,
      explain: { nl: 'Deze zin haalt een zorg weg: iedereen kan het voelen, ook zonder veel van muziek te weten.',
                 en: 'This sentence removes a worry: anyone can feel it, even without knowing much about music.' } }
  ]
}
]);
