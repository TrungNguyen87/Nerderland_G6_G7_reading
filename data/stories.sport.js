/* Wereld 3 - Sport & Spanning */
addStories([
{
  id: 'sport-1', topic: 'sport', level: 1, emoji: '⚽', scene: 'stadium',
  title: { nl: 'De laatste penalty', en: 'The last penalty' },
  text: {
    nl: [
      "Nog één minuut. De stand is 2-2. Milan staat op de middenstip en veegt zijn handen af aan zijn broek.",
      "Dan valt Fenna in het strafschopgebied. De scheidsrechter wijst naar de stip. Penalty!",
      "Iedereen kijkt naar Milan. Hij is de aanvoerder, dus hij neemt hem altijd. Maar vorige week schoot hij er twee naast. Zijn benen voelen als pudding.",
      "\"Neem jij hem maar\", zegt hij zacht tegen Fenna. Zij kijkt hem verbaasd aan. \"Weet je het zeker?\" Milan knikt. \"Jij hebt de meeste doelpunten gemaakt dit seizoen.\"",
      "Fenna legt de bal neer. Ze haalt diep adem en kiest de linkerhoek. De keeper duikt naar rechts. Doelpunt!",
      "Het hele team rent juichend over het veld. Milan wordt bijna omvergelopen. \"Waarom gaf je hem weg?\" roept de trainer later in de kleedkamer.",
      "Milan haalt zijn schouders op. \"Ik wilde winnen\", zegt hij. \"En zij was de beste keuze.\" De trainer glimlacht. Soms is de sterkste speler degene die de bal durft af te staan."
    ],
    en: [
      "One minute left. The score is 2-2. Milan is standing on the centre spot wiping his hands on his shorts.",
      "Then Fenna falls in the penalty area. The referee points to the spot. Penalty!",
      "Everyone looks at Milan. He is the captain, so he always takes them. But last week he missed two. His legs feel like pudding.",
      "\"You take it,\" he says quietly to Fenna. She looks at him in surprise. \"Are you sure?\" Milan nods. \"You have scored the most goals this season.\"",
      "Fenna puts the ball down. She takes a deep breath and picks the left corner. The goalkeeper dives to the right. Goal!",
      "The whole team runs cheering across the pitch. Milan is almost knocked over. \"Why did you give it away?\" the coach shouts later in the changing room.",
      "Milan shrugs. \"I wanted to win,\" he says. \"And she was the better choice.\" The coach smiles. Sometimes the strongest player is the one who dares to hand over the ball."
    ]
  },
  words: [
    { nl: 'aanvoerder', en: 'captain', defNl: 'de leider van het team', defEn: 'the leader of the team' },
    { nl: 'strafschopgebied', en: 'penalty area', defNl: 'het grote vak voor het doel', defEn: 'the large box in front of the goal' },
    { nl: 'afstaan', en: 'to hand over', defNl: 'iets aan een ander geven', defEn: 'to give something to someone else' }
  ],
  questions: [
    { id: 'q1', type: 'mc', skill: 'letterlijk',
      q: { nl: 'Wat is de stand als het verhaal begint?', en: 'What is the score when the story starts?' },
      options: [ { nl: '2-2', en: '2-2' }, { nl: '1-0', en: '1-0' }, { nl: '3-2', en: '3-2' }, { nl: '0-0', en: '0-0' } ],
      answer: 0,
      explain: { nl: 'In de eerste zin staat: "De stand is 2-2."', en: 'The first line says: "The score is 2-2."' } },
    { id: 'q2', type: 'mc', skill: 'gevolgtrekking',
      q: { nl: 'Waarom voelen Milans benen als pudding?', en: 'Why do Milan’s legs feel like pudding?' },
      options: [
        { nl: 'Hij is zenuwachtig, want vorige week miste hij twee penalty\'s',
          en: 'He is nervous, because last week he missed two penalties' },
        { nl: 'Hij heeft te veel toetjes gegeten', en: 'He has eaten too many desserts' },
        { nl: 'Hij is geblesseerd', en: 'He is injured' },
        { nl: 'Het veld is te glad', en: 'The pitch is too slippery' }
      ], answer: 0,
      explain: { nl: 'Vlak ervoor staat dat hij er vorige week twee naast schoot. Dat maakt hem onzeker.',
                 en: 'Just before that it says he missed two last week. That makes him unsure.' } },
    { id: 'q3', type: 'tf', skill: 'letterlijk',
      q: { nl: 'De keeper dook de goede kant op.', en: 'The goalkeeper dived the right way.' },
      answer: false,
      explain: { nl: 'Fenna schoot links, de keeper dook naar rechts. Dus de verkeerde kant.',
                 en: 'Fenna shot left, the keeper dived right. So the wrong way.' } },
    { id: 'q4', type: 'order', skill: 'volgorde',
      q: { nl: 'Zet de gebeurtenissen in de goede volgorde.', en: 'Put the events in the right order.' },
      items: [
        { nl: 'Fenna valt in het strafschopgebied.', en: 'Fenna falls in the penalty area.' },
        { nl: 'Milan geeft de penalty aan Fenna.', en: 'Milan gives the penalty to Fenna.' },
        { nl: 'Fenna schiet de bal in de linkerhoek.', en: 'Fenna shoots the ball into the left corner.' },
        { nl: 'De trainer stelt vragen in de kleedkamer.', en: 'The coach asks questions in the changing room.' }
      ], answer: [0, 1, 2, 3],
      explain: { nl: 'Val, beslissing, doelpunt, kleedkamer: precies de volgorde van het verhaal.',
                 en: 'Fall, decision, goal, changing room: exactly the order of the story.' } },
    { id: 'q5', type: 'mc', skill: 'hoofdgedachte',
      q: { nl: 'Wat leert dit verhaal je vooral?', en: 'What does this story mainly teach you?' },
      options: [
        { nl: 'Soms is de beste keuze om iets aan een ander over te laten',
          en: 'Sometimes the best choice is to let someone else do it' },
        { nl: 'Aanvoerders moeten altijd zelf schieten', en: 'Captains must always shoot themselves' },
        { nl: 'Keepers duiken meestal naar rechts', en: 'Goalkeepers usually dive to the right' },
        { nl: 'Trainers worden snel boos', en: 'Coaches get angry quickly' }
      ], answer: 0,
      explain: { nl: 'De laatste zin vat het samen: de sterkste durft de bal af te staan.',
                 en: 'The last line sums it up: the strongest one dares to hand over the ball.' } }
  ]
},

{
  id: 'sport-2', topic: 'sport', level: 2, emoji: '⛸️', scene: 'ice',
  title: { nl: 'De tocht die maar niet komt', en: 'The race that never comes' },
  text: {
    nl: [
      "Vraag een Nederlander naar de Elfstedentocht en zijn ogen gaan glimmen. Het is een schaatstocht van bijna tweehonderd kilometer langs elf steden in Friesland. Je rijdt over sloten, meren en kanalen, en je begint nog voordat de zon opkomt.",
      "De tocht gaat alleen door als het ijs overal minstens vijftien centimeter dik is. Dat klinkt eenvoudig, maar één zwakke plek onder een brug is al genoeg om alles af te blazen. Duizenden vrijwilligers meten daarom dagenlang de dikte van het ijs.",
      "De laatste keer dat de tocht werd verreden was in 1997. Sindsdien wachten de schaatsers. Elke winter met een paar vriesnachten wordt het weerbericht gevolgd alsof het een spannende film is. En elke keer valt de dooi weer in.",
      "Dat komt door het warmer wordende klimaat. Vroeger vroor het bijna elke winter een week achter elkaar streng. Nu gebeurt dat nog maar zelden. Sommige onderzoekers denken dat de tocht misschien nooit meer wordt verreden.",
      "Toch houden de Friezen hun schaatsen scherp. In de dorpen langs de route hangen nog steeds de kaarten aan de muur. Want stel je voor dat het gebeurt, en jij bent niet klaar."
    ],
    en: [
      "Ask a Dutch person about the Elfstedentocht and their eyes light up. It is a skating tour of almost two hundred kilometres past eleven towns in Friesland. You skate over ditches, lakes and canals, and you start before the sun comes up.",
      "The tour only goes ahead if the ice is at least fifteen centimetres thick everywhere. That sounds simple, but one weak spot under a bridge is enough to call the whole thing off. That is why thousands of volunteers spend days measuring the thickness of the ice.",
      "The last time the tour was held was in 1997. Since then the skaters have been waiting. Every winter with a few frosty nights the weather forecast is followed like an exciting film. And every time the thaw sets in again.",
      "That is because of the warming climate. In the past it used to freeze hard almost every winter for a week on end. Now that happens only rarely. Some researchers think the tour may never be skated again.",
      "Still, the Frisians keep their skates sharp. In the villages along the route the maps still hang on the wall. Because imagine it happens, and you are not ready."
    ]
  },
  words: [
    { nl: 'vrijwilliger', en: 'volunteer', defNl: 'iemand die gratis helpt', defEn: 'someone who helps for free' },
    { nl: 'afblazen', en: 'to call off', defNl: 'iets toch niet laten doorgaan', defEn: 'to cancel something after all' },
    { nl: 'dooi', en: 'thaw', defNl: 'als het weer warmer wordt en het ijs smelt', defEn: 'when it gets warmer and the ice melts' }
  ],
  questions: [
    { id: 'q1', type: 'mc', skill: 'letterlijk',
      q: { nl: 'Hoe dik moet het ijs minstens zijn?', en: 'How thick does the ice have to be at least?' },
      options: [ { nl: 'Vijftien centimeter', en: 'Fifteen centimetres' }, { nl: 'Vijf centimeter', en: 'Five centimetres' },
                 { nl: 'Vijftig centimeter', en: 'Fifty centimetres' }, { nl: 'Eén meter', en: 'One metre' } ],
      answer: 0,
      explain: { nl: 'Alinea 2: "minstens vijftien centimeter dik".', en: 'Paragraph 2: "at least fifteen centimetres thick".' } },
    { id: 'q2', type: 'mc', skill: 'gevolgtrekking',
      q: { nl: 'Waarom is één zwakke plek onder een brug al een probleem?',
           en: 'Why is a single weak spot under a bridge already a problem?' },
      options: [
        { nl: 'Omdat schaatsers daar door het ijs kunnen zakken', en: 'Because skaters could fall through the ice there' },
        { nl: 'Omdat bruggen dan instorten', en: 'Because bridges would collapse' },
        { nl: 'Omdat je daar niet mag schaatsen', en: 'Because skating is forbidden there' },
        { nl: 'Omdat de route dan langer wordt', en: 'Because the route would get longer' }
      ], answer: 0,
      explain: { nl: 'Dat staat er niet letterlijk, maar dun ijs op de route is levensgevaarlijk.',
                 en: 'It is not written literally, but thin ice on the route is life-threatening.' } },
    { id: 'q3', type: 'gap', skill: 'woordenschat',
      q: { nl: 'De organisatie moet de tocht afblazen. Afblazen betekent hier ___.',
           en: 'The organisers have to call the tour off. To call off means ___ here.' },
      options: [
        { nl: 'niet door laten gaan', en: 'not let it go ahead' },
        { nl: 'harder gaan schaatsen', en: 'skate faster' },
        { nl: 'de wind meten', en: 'measure the wind' },
        { nl: 'later beginnen', en: 'start later' }
      ], answer: 0,
      explain: { nl: 'Afblazen = annuleren, niet door laten gaan.', en: 'To call off = to cancel, not let it happen.' } },
    { id: 'q4', type: 'tf', skill: 'letterlijk',
      q: { nl: 'De Elfstedentocht is na 1997 nog twee keer verreden.', en: 'The Elfstedentocht has been held twice since 1997.' },
      answer: false,
      explain: { nl: '1997 was de laatste keer. Daarna is hij niet meer verreden.',
                 en: '1997 was the last time. It has not been held since.' } },
    { id: 'q5', type: 'mc', skill: 'hoofdgedachte',
      q: { nl: 'Wat is de belangrijkste reden dat de tocht niet meer doorgaat?',
           en: 'What is the main reason the tour no longer happens?' },
      options: [
        { nl: 'Het klimaat wordt warmer, dus het vriest minder streng', en: 'The climate is warming, so it freezes less hard' },
        { nl: 'Er zijn te weinig schaatsers', en: 'There are too few skaters' },
        { nl: 'De route is kwijtgeraakt', en: 'The route has been lost' },
        { nl: 'Vrijwilligers hebben geen zin meer', en: 'Volunteers do not feel like it any more' }
      ], answer: 0,
      explain: { nl: 'Alinea 4 zegt het duidelijk: door het warmer wordende klimaat vriest het zelden streng.',
                 en: 'Paragraph 4 says it clearly: because of the warming climate it rarely freezes hard.' } }
  ]
},

{
  id: 'sport-3', topic: 'sport', level: 3, emoji: '🏃', scene: 'stadium',
  title: { nl: 'Zenuwen aan de start', en: 'Nerves at the start' },
  text: {
    nl: [
      "Vlak voor de start klopt je hart in je keel, je handen zijn klam en je moet nodig naar de wc. Bijna elke sporter kent dat gevoel, van de pupillen tot de olympisch kampioen. Het vervelende is dat je er niet van af komt. Het goede nieuws is dat je het kunt gebruiken.",
      "Wat er gebeurt, is eigenlijk heel logisch. Je lichaam denkt dat er gevaar is en maakt adrenaline aan. Je hart pompt sneller, je spieren krijgen extra zuurstof en je ogen zien scherper. Precies wat je nodig hebt als je hard moet rennen. Het probleem zit niet in je lijf, maar in je hoofd: je noemt dat gevoel \"bang\" in plaats van \"klaar\".",
      "Sportpsychologen leren kinderen daarom drie trucjes. Het eerste heet omkeren: zeg hardop \"ik ben gespannen\" in plaats van \"ik ben bang\". Het tweede is ademen: vier tellen in, zes tellen uit. Als je uitademing langer is dan je inademing, zakt je hartslag vanzelf. Het derde is inzoomen: bedenk niet wat er over tien minuten gebeurt, maar alleen wat je nu doet. Voeten op het blok. Ogen op de baan.",
      "Ook toppers gebruiken die trucs. Zwemster Ranomi Kromowidjojo vertelde ooit dat ze vlak voor haar race telkens hetzelfde liedje in haar hoofd draaide. Niet om zich moediger te voelen, maar om haar hoofd geen ruimte te geven voor twijfel.",
      "En als het toch misgaat? Dan hoort dat erbij. Sporters die na een slechte wedstrijd rustig nagaan wat ze de volgende keer anders doen, worden gemiddeld sneller beter dan sporters die alleen maar balen. Zenuwen zijn dus geen teken dat je het niet kunt. Ze zijn een teken dat het je iets kan schelen."
    ],
    en: [
      "Just before the start your heart pounds in your throat, your hands are clammy and you badly need the toilet. Almost every athlete knows that feeling, from the youngest club member to the Olympic champion. The annoying part is that you cannot get rid of it. The good news is that you can use it.",
      "What happens is actually quite logical. Your body thinks there is danger and produces adrenaline. Your heart pumps faster, your muscles get extra oxygen and your eyes see more sharply. Exactly what you need if you have to run fast. The problem is not in your body but in your head: you call that feeling \"scared\" instead of \"ready\".",
      "That is why sports psychologists teach children three tricks. The first is called flipping: say out loud \"I am tense\" instead of \"I am scared\". The second is breathing: four counts in, six counts out. If your out-breath is longer than your in-breath, your heart rate drops by itself. The third is zooming in: do not think about what happens in ten minutes, only about what you are doing now. Feet on the blocks. Eyes on the track.",
      "Top athletes use those tricks too. Swimmer Ranomi Kromowidjojo once said that just before her race she played the same song in her head every time. Not to feel braver, but to give her head no room for doubt.",
      "And what if it goes wrong anyway? Then that is part of it. Athletes who calmly work out after a bad race what they will do differently next time improve faster on average than athletes who only sulk. So nerves are not a sign that you cannot do it. They are a sign that you care."
    ]
  },
  words: [
    { nl: 'adrenaline', en: 'adrenaline', defNl: 'stof die je lichaam klaarmaakt voor actie', defEn: 'a substance that gets your body ready for action' },
    { nl: 'omkeren', en: 'to flip', defNl: 'iets precies andersom bekijken', defEn: 'to look at something the other way round' },
    { nl: 'twijfel', en: 'doubt', defNl: 'niet zeker weten of het lukt', defEn: 'not being sure it will work' }
  ],
  questions: [
    { id: 'q1', type: 'mc', skill: 'letterlijk',
      q: { nl: 'Welke drie trucjes leren sportpsychologen?', en: 'Which three tricks do sports psychologists teach?' },
      options: [
        { nl: 'Omkeren, ademen en inzoomen', en: 'Flipping, breathing and zooming in' },
        { nl: 'Rennen, springen en rusten', en: 'Running, jumping and resting' },
        { nl: 'Zingen, dansen en lachen', en: 'Singing, dancing and laughing' },
        { nl: 'Eten, drinken en slapen', en: 'Eating, drinking and sleeping' }
      ], answer: 0,
      explain: { nl: 'Alinea 3 noemt ze alle drie met naam.', en: 'Paragraph 3 names all three of them.' } },
    { id: 'q2', type: 'mc', skill: 'gevolgtrekking',
      q: { nl: 'Waarom draaide Ranomi steeds hetzelfde liedje in haar hoofd?',
           en: 'Why did Ranomi play the same song in her head every time?' },
      options: [
        { nl: 'Zodat er geen ruimte in haar hoofd was om te twijfelen',
          en: 'So there was no room in her head to doubt' },
        { nl: 'Omdat ze graag zingt', en: 'Because she likes singing' },
        { nl: 'Om harder te kunnen zwemmen', en: 'To be able to swim faster' },
        { nl: 'Omdat haar trainer dat eiste', en: 'Because her coach demanded it' }
      ], answer: 0,
      explain: { nl: 'De tekst zegt: niet om moediger te zijn, maar om twijfel geen ruimte te geven.',
                 en: 'The text says: not to feel braver, but to give doubt no room.' } },
    { id: 'q3', type: 'tf', skill: 'gevolgtrekking',
      q: { nl: 'Volgens de tekst zijn zenuwen een teken dat je iets niet kunt.',
           en: 'According to the text, nerves are a sign that you cannot do something.' },
      answer: false,
      explain: { nl: 'De laatste zin zegt juist het tegenovergestelde: het betekent dat het je iets kan schelen.',
                 en: 'The last line says the opposite: it means that you care.' } },
    { id: 'q4', type: 'gap', skill: 'woordenschat',
      q: { nl: 'Je handen zijn klam. Klam betekent ___.', en: 'Your hands are clammy. Clammy means ___.' },
      options: [
        { nl: 'een beetje vochtig en koud', en: 'a bit damp and cold' },
        { nl: 'heel warm en droog', en: 'very warm and dry' },
        { nl: 'sterk en gespierd', en: 'strong and muscular' },
        { nl: 'vies en zwart', en: 'dirty and black' }
      ], answer: 0,
      explain: { nl: 'Klam is dat plakkerige, vochtige gevoel van zweethanden.',
                 en: 'Clammy is that sticky, damp feeling of sweaty hands.' } },
    { id: 'q5', type: 'order', skill: 'volgorde',
      q: { nl: 'Wat gebeurt er in je lichaam bij spanning? Zet op volgorde.',
           en: 'What happens in your body when you are tense? Put it in order.' },
      items: [
        { nl: 'Je lichaam denkt dat er gevaar is.', en: 'Your body thinks there is danger.' },
        { nl: 'Het maakt adrenaline aan.', en: 'It produces adrenaline.' },
        { nl: 'Je hart pompt sneller en je spieren krijgen zuurstof.', en: 'Your heart pumps faster and your muscles get oxygen.' },
        { nl: 'Je ziet scherper en bent klaar om te rennen.', en: 'You see more sharply and are ready to run.' }
      ], answer: [0, 1, 2, 3],
      explain: { nl: 'Alinea 2 beschrijft precies deze keten van gevaar naar klaar zijn.',
                 en: 'Paragraph 2 describes exactly this chain from danger to being ready.' } }
  ]
}
]);
