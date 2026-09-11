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
