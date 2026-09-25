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

/* --- Niveau 4 en 5: langere teksten met Cito-achtige vragen --- */
addStories([
{
  id: 'sport-4', topic: 'sport', level: 4, emoji: '📺', scene: 'stadium',
  title: { nl: 'Het oog dat nooit knippert', en: 'The eye that never blinks' },
  text: {
    nl: [
      "Het stadion staat op zijn kop. De bal ligt in het net, de spelers rennen juichend naar de hoekvlag. En dan wijst de scheidsrechter naar zijn oor. Hij luistert. Duizenden mensen zwijgen. Ergens in een busje, tientallen kilometers verderop, kijkt iemand het doelpunt nog een keer terug.",
      "Die iemand is de videoscheidsrechter, in Nederland kortweg de VAR. Sinds 2018 wordt hij bij grote toernooien gebruikt. Hij bemoeit zich niet met alles: alleen met doelpunten, strafschoppen, rode kaarten en persoonsverwisselingen. Bij die vier momenten mag hij de scheidsrechter waarschuwen als die iets duidelijk verkeerd heeft gezien.",
      "Het idee komt niet uit het voetbal. In het tennis kijken ze al sinds 2006 met camera's of een bal in of uit was, en in het cricket nog langer. Daar juicht het publiek zelfs mee met het scherm. Bij voetbal ging dat moeizamer, want een overtreding is geen streepje op een lijn. Of een duw genoeg is voor een strafschop, blijft een oordeel.",
      "Voorstanders wijzen op de cijfers. Onderzoekers telden in de Duitse competitie hoeveel grote beslissingen goed gingen. Zonder VAR klopte ongeveer vieren­negentig procent; met VAR steeg dat naar ruim achtennegentig. Dat lijkt weinig, maar het scheelt in een heel seizoen tientallen doelpunten die er niet hadden mogen zijn.",
      "Tegenstanders klagen over iets anders: het gevoel. Een doelpunt vieren terwijl je nog niet weet of het telt, is geen vieren. Bovendien duurde in het eerste jaar een controle soms meer dan drie minuten. Spelers stonden te kleumen, het publiek floot, en de spanning liep leeg als lucht uit een ballon.",
      "Daarom is er sindsdien geschaafd. Er kwam een vaste tijdslimiet voor de meeste controles. Bij buitenspel helpt sinds 2022 een systeem met twaalf camera's en een chip in de bal, dat binnen enkele seconden een tekening op het scherm zet. En scheidsrechters leggen sinds kort in het stadion hardop uit wat ze besloten hebben, zodat het publiek meekrijgt waarom.",
      "Perfect wordt het nooit. Een camera ziet waar een voet stond, niet of een duw gemeen was. Maar dat het oog in het busje nooit knippert, bevalt de meeste spelers inmiddels wel."
    ],
    en: [
      "The stadium is going wild. The ball is in the net, the players run cheering to the corner flag. And then the referee points at his ear. He is listening. Thousands of people fall silent. Somewhere in a van, dozens of kilometres away, someone is watching the goal again.",
      "That someone is the video referee, known in the Netherlands simply as the VAR. It has been used at big tournaments since 2018. It does not interfere with everything: only with goals, penalties, red cards and cases of mistaken identity. At those four moments it may warn the referee if he has clearly got something wrong.",
      "The idea does not come from football. In tennis they have used cameras since 2006 to see whether a ball was in or out, and in cricket for even longer. There the crowd even cheers along with the screen. In football it went less smoothly, because a foul is not a line on the grass. Whether a push is enough for a penalty remains a judgement.",
      "Supporters point at the numbers. Researchers counted how many big decisions went well in the German league. Without the VAR about ninety-four percent were right; with it that rose to just over ninety-eight. That sounds small, but across a whole season it means dozens of goals that should never have counted.",
      "Opponents complain about something else: the feeling. Celebrating a goal while you do not yet know whether it counts is not really celebrating. On top of that, in the first year a check sometimes took more than three minutes. Players stood shivering, the crowd whistled, and the tension leaked away like air from a balloon.",
      "So it has been trimmed ever since. Most checks now have a fixed time limit. For offside, a system of twelve cameras and a chip in the ball has helped since 2022, putting a drawing on the screen within seconds. And referees have recently started explaining out loud in the stadium what they decided, so that the crowd understands why.",
      "It will never be perfect. A camera sees where a foot was, not whether a push was nasty. But most players have come to like the fact that the eye in the van never blinks."
    ]
  },
  words: [
    { nl: 'persoonsverwisseling', en: 'mistaken identity', defNl: 'als de scheidsrechter de verkeerde speler een kaart geeft', defEn: 'when the referee books the wrong player' },
    { nl: 'competitie', en: 'league', defNl: 'alle wedstrijden van een seizoen samen', defEn: 'all the matches of a season together' },
    { nl: 'tijdslimiet', en: 'time limit', defNl: 'de afgesproken maximale tijd die iets mag duren', defEn: 'the agreed maximum time something may take' }
  ],
  questions: [
    { id: 'q1', type: 'multi', skill: 'letterlijk',
      q: { nl: 'Bij welke momenten mag de VAR ingrijpen? Kies er 3 uit de tekst.',
           en: 'At which moments may the VAR step in? Pick 3 from the text.' },
      options: [
        { nl: 'Doelpunten', en: 'Goals' },
        { nl: 'Strafschoppen', en: 'Penalties' },
        { nl: 'Rode kaarten', en: 'Red cards' },
        { nl: 'Inworpen', en: 'Throw-ins' }
      ], answer: [0, 1, 2],
      explain: { nl: 'Alinea 2 noemt vier momenten: doelpunten, strafschoppen, rode kaarten en persoonsverwisselingen. Inworpen staan er niet bij.',
                 en: 'Paragraph 2 names four moments: goals, penalties, red cards and mistaken identity. Throw-ins are not among them.' } },
    { id: 'q2', type: 'mc', skill: 'gevolgtrekking',
      q: { nl: 'Waarom was de videoscheidsrechter in het tennis makkelijker in te voeren dan in het voetbal?',
           en: 'Why was the video referee easier to introduce in tennis than in football?' },
      options: [
        { nl: 'In tennis kun je meten of een bal in of uit was; bij een overtreding blijft het een oordeel',
          en: 'In tennis you can measure whether a ball was in or out; a foul stays a judgement' },
        { nl: 'In tennis zijn er minder camera’s nodig', en: 'Tennis needs fewer cameras' },
        { nl: 'Tennissers klagen nooit', en: 'Tennis players never complain' },
        { nl: 'In het voetbal bestond nog geen televisie', en: 'Football had no television yet' }
      ], answer: 0,
      explain: { nl: 'Alinea 3: "een overtreding is geen streepje op een lijn… blijft een oordeel". Bij tennis is het een meting.',
                 en: 'Paragraph 3: a foul is not a line on the grass, it stays a judgement, while in tennis it is a measurement.' } },
    { id: 'q3', type: 'mc', skill: 'verwijswoorden',
      q: { nl: '"Daar juicht het publiek zelfs mee met het scherm." Welke sporten worden met "daar" bedoeld?',
           en: '"There the crowd even cheers along with the screen." Which sports does "there" mean?' },
      options: [
        { nl: 'Tennis en cricket', en: 'Tennis and cricket' },
        { nl: 'Voetbal en hockey', en: 'Football and hockey' },
        { nl: 'Alleen voetbal', en: 'Football only' },
        { nl: 'Schaatsen', en: 'Speed skating' }
      ], answer: 0,
      explain: { nl: 'De zin ervoor gaat over tennis sinds 2006 en cricket nog langer. Daar verwijst "daar" naar.',
                 en: 'The sentence before is about tennis since 2006 and cricket for even longer.' } },
    { id: 'q4', type: 'mc', skill: 'letterlijk',
      q: { nl: 'Hoeveel procent van de grote beslissingen klopte in Duitsland mét de VAR?',
           en: 'What percentage of big decisions in Germany was right with the VAR?' },
      options: [
        { nl: 'Ruim achtennegentig procent', en: 'Just over ninety-eight percent' },
        { nl: 'Ongeveer vierennegentig procent', en: 'About ninety-four percent' },
        { nl: 'Precies honderd procent', en: 'Exactly one hundred percent' },
        { nl: 'Ongeveer tachtig procent', en: 'About eighty percent' }
      ], answer: 0,
      explain: { nl: 'Alinea 4: zonder VAR ongeveer 94 procent, met VAR ruim 98 procent.',
                 en: 'Paragraph 4: about 94 percent without the VAR, just over 98 with it.' } },
    { id: 'q5', type: 'gap', skill: 'woordenschat',
      q: { nl: 'De spanning liep leeg "als lucht uit een ballon". Dat betekent dat de spanning ___.',
           en: 'The tension leaked away "like air from a balloon". That means the tension ___.' },
      options: [
        { nl: 'langzaam helemaal verdween', en: 'slowly disappeared completely' },
        { nl: 'juist steeds groter werd', en: 'actually kept growing' },
        { nl: 'met een knal terugkwam', en: 'came back with a bang' },
        { nl: 'omhoog de lucht in ging', en: 'floated up into the air' }
      ], answer: 0,
      explain: { nl: 'Een ballon die leegloopt wordt slap en klein. De vergelijking betekent dus: de spanning zakte helemaal weg.',
                 en: 'A deflating balloon goes limp and small, so the tension sank away completely.' } },
    { id: 'q6', type: 'order', skill: 'volgorde',
      q: { nl: 'Zet de gebeurtenissen uit de tekst op volgorde van tijd.',
           en: 'Put the events from the text in order of time.' },
      items: [
        { nl: 'In het tennis komt de camera die in of uit bepaalt (2006).', en: 'Tennis gets the camera that decides in or out (2006).' },
        { nl: 'De VAR wordt bij grote voetbaltoernooien gebruikt (2018).', en: 'The VAR is used at big football tournaments (2018).' },
        { nl: 'Een systeem met twaalf camera’s en een chip in de bal komt erbij (2022).', en: 'A system with twelve cameras and a chip in the ball is added (2022).' },
        { nl: 'Scheidsrechters leggen hun besluit hardop uit in het stadion.', en: 'Referees start explaining their decision out loud in the stadium.' }
      ], answer: [0, 1, 2, 3],
      explain: { nl: 'De jaartallen in de tekst geven de volgorde: 2006, 2018, 2022 en daarna "sinds kort".',
                 en: 'The dates give the order: 2006, 2018, 2022 and then "recently".' } },
    { id: 'q7', type: 'mc', skill: 'structuur',
      q: { nl: 'Hoe is deze tekst opgebouwd?', en: 'How is this text built up?' },
      options: [
        { nl: 'Voorbeeld, uitleg, argumenten voor, argumenten tegen, verbeteringen, slot',
          en: 'Example, explanation, arguments for, arguments against, improvements, conclusion' },
        { nl: 'Alleen argumenten tegen de VAR', en: 'Only arguments against the VAR' },
        { nl: 'Een verhaal over één wedstrijd van begin tot eind', en: 'The story of one match from start to finish' },
        { nl: 'Een opsomming van alle voetbalregels', en: 'A list of all the rules of football' }
      ], answer: 0,
      explain: { nl: 'De tekst opent met een scène, legt dan uit wat de VAR is, geeft de voorstanders en tegenstanders het woord en sluit af.',
                 en: 'The text opens with a scene, explains what the VAR is, gives both sides a voice and rounds off.' } },
    { id: 'q8', type: 'mc', skill: 'hoofdgedachte',
      q: { nl: 'Wat is de hoofdgedachte van de tekst?', en: 'What is the main idea of the text?' },
      options: [
        { nl: 'De videoscheidsrechter maakt beslissingen eerlijker, maar kost sfeer, en daarom wordt hij steeds bijgeschaafd',
          en: 'The video referee makes decisions fairer but costs atmosphere, so it keeps being fine-tuned' },
        { nl: 'Scheidsrechters maken heel veel fouten', en: 'Referees make a great many mistakes' },
        { nl: 'Tennis is eerlijker dan voetbal', en: 'Tennis is fairer than football' },
        { nl: 'Voetbalpubliek fluit te vaak', en: 'Football crowds whistle too often' }
      ], answer: 0,
      explain: { nl: 'Voordeel, nadeel en de aanpassingen daarna: dat is samen de kern van de tekst.',
                 en: 'Advantage, disadvantage and the fixes that followed: together that is the core.' } }
  ]
},

{
  id: 'sport-5', topic: 'sport', level: 5, emoji: '🏅', scene: 'stadium',
  title: { nl: 'Moet je jong beginnen om de top te halen?', en: 'Do you have to start young to reach the top?' },
  text: {
    nl: [
      "Wie een olympisch kampioen ziet winnen, hoort er vaak hetzelfde verhaal bij: ze begon op haar vierde, ze trainde elke dag, ze gaf alles op. Dat verhaal is zo bekend geworden dat veel ouders denken dat het de enige route is. Onderzoekers zijn daar minder zeker van.",
      "In sporten waarbij je heel jong lenig moet zijn, zoals turnen en kunstschaatsen, begint bijna iedereen inderdaad voor het achtste jaar. Wie later start, haalt het verschil zelden meer in. Maar dat zijn uitzonderingen. In de meeste sporten zien onderzoekers iets anders.",
      "Een Duitse studie vergeleek honderden topsporters met sporters die net iets minder ver kwamen. De echte wereldtoppers bleken als kind juist méér verschillende sporten te hebben gedaan, en ze gingen pas later dan hun concurrenten helemaal voor één sport. De sporters die zich het vroegst specialiseerden, piekten eerder, maar bleven daarna hangen.",
      "Hoe kan dat? Wie meerdere sporten doet, leert verschillende manieren van bewegen, vallen en samenspelen. Die ervaring is later bruikbaar in de sport die hij kiest. Bovendien belast hij niet elke dag dezelfde spieren en pezen. Kinderartsen zien bij vroege specialisten meer blessures die niet door een botsing komen, maar door herhaling.",
      "Er is nog een reden, en die heeft weinig met het lichaam te maken. \"Wie op zijn negende al elke vrije middag naar de club moet, is op zijn vijftiende soms gewoon klaar met de sport,\" zegt een sportpsycholoog. Zij noemt dat het grootste verlies: niet de blessures, maar de kinderen die stoppen terwijl ze eigenlijk talent hadden.",
      "Daar staat tegenover dat er ook iets te zeggen valt voor vroeg kiezen. Trainingstijd telt nu eenmaal. Wie met twaalf begint met schaatsen, heeft duizenden uren minder op het ijs gestaan dan wie met zes begon. In een sport waarin de techniek erg fijn is, kan dat een blijvende achterstand zijn.",
      "De meeste onderzoekers komen daarom uit op een tussenweg. Laat een kind onder de twaalf vooral veel verschillende dingen doen, met één sport waar het net iets meer van houdt. Kiezen mag later, rond een jaar of vijftien, als het lichaam bijna volgroeid is en het kind zelf kan zeggen wat het wil.",
      "Want er is één ding waar alle onderzoeken het over eens zijn: talent zonder plezier houdt het niet vol."
    ],
    en: [
      "When people see an Olympic champion win, the same story usually follows: she started at four, she trained every day, she gave everything up. That story has become so familiar that many parents think it is the only route. Researchers are less sure.",
      "In sports where you have to be very supple very young, such as gymnastics and figure skating, almost everyone really does start before the age of eight. Those who begin later rarely close the gap. But those are exceptions. In most sports researchers see something else.",
      "A German study compared hundreds of top athletes with athletes who came just a little less far. The real world-beaters turned out to have done more different sports as children, and they went all in on one sport later than their rivals did. The athletes who specialised earliest peaked sooner, but then got stuck.",
      "How can that be? Someone who does several sports learns different ways of moving, falling and playing together. That experience is useful later in the sport he chooses. On top of that, he is not loading the same muscles and tendons every day. Children’s doctors see more injuries among early specialists that come not from a collision but from repetition.",
      "There is one more reason, and it has little to do with the body. \"A child who has to be at the club every free afternoon at nine is sometimes simply finished with the sport at fifteen,\" says a sports psychologist. She calls that the biggest loss: not the injuries, but the children who quit while they actually had talent.",
      "On the other hand, something can be said for choosing early too. Training hours do count. A child who starts skating at twelve has spent thousands of hours less on the ice than one who started at six. In a sport where the technique is very fine, that can be a lasting disadvantage.",
      "So most researchers end up somewhere in the middle. Let a child under twelve do lots of different things, with one sport it likes just a bit more. Choosing can come later, at around fifteen, when the body is almost fully grown and the child can say what it wants itself.",
      "Because there is one thing every study agrees on: talent without enjoyment does not last."
    ]
  },
  words: [
    { nl: 'specialiseren', en: 'to specialise', defNl: 'je helemaal op één ding richten en de rest laten vallen', defEn: 'to focus completely on one thing and drop the rest' },
    { nl: 'pezen', en: 'tendons', defNl: 'de stevige koorden die je spieren aan je botten vastmaken', defEn: 'the tough cords that fasten your muscles to your bones' },
    { nl: 'volgroeid', en: 'fully grown', defNl: 'helemaal uitgegroeid, klaar met groeien', defEn: 'finished growing' }
  ],
  questions: [
    { id: 'q1', type: 'mc', skill: 'letterlijk',
      q: { nl: 'In welke twee sporten begint volgens de tekst bijna iedereen vóór het achtste jaar?',
           en: 'In which two sports does almost everyone start before the age of eight, according to the text?' },
      options: [
        { nl: 'Turnen en kunstschaatsen', en: 'Gymnastics and figure skating' },
        { nl: 'Voetbal en hockey', en: 'Football and hockey' },
        { nl: 'Zwemmen en tennis', en: 'Swimming and tennis' },
        { nl: 'Wielrennen en roeien', en: 'Cycling and rowing' }
      ], answer: 0,
      explain: { nl: 'Alinea 2 noemt turnen en kunstschaatsen als de sporten waarin je heel jong lenig moet zijn.',
                 en: 'Paragraph 2 names gymnastics and figure skating as the sports where you must be supple very young.' } },
    { id: 'q2', type: 'mc', skill: 'gevolgtrekking',
      q: { nl: 'Wat bleek uit de Duitse studie over de échte wereldtoppers?',
           en: 'What did the German study show about the real world-beaters?' },
      options: [
        { nl: 'Ze deden als kind meer verschillende sporten en kozen later pas één sport',
          en: 'As children they did more different sports and only chose one sport later' },
        { nl: 'Ze begonnen allemaal voor hun zesde', en: 'They all started before the age of six' },
        { nl: 'Ze trainden minder uren dan de rest', en: 'They trained fewer hours than the rest' },
        { nl: 'Ze raakten vaker geblesseerd', en: 'They got injured more often' }
      ], answer: 0,
      explain: { nl: 'Alinea 3 zegt het letterlijk: méér verschillende sporten, en pas later helemaal voor één sport gaan.',
                 en: 'Paragraph 3 says it literally: more different sports, and going all in on one sport later.' } },
    { id: 'q3', type: 'sort', skill: 'feitmening',
      q: { nl: 'Feit of mening? Zet elke zin in de goede groep.',
           en: 'Fact or opinion? Put every sentence in the right group.' },
      bins: [{ nl: 'Feit', en: 'Fact' }, { nl: 'Mening', en: 'Opinion' }],
      items: [
        { nl: 'Een Duitse studie vergeleek honderden topsporters.',
          en: 'A German study compared hundreds of top athletes.', bin: 0 },
        { nl: 'Het grootste verlies zijn de kinderen die stoppen.',
          en: 'The biggest loss is the children who quit.', bin: 1 },
        { nl: 'Kinderartsen zien bij vroege specialisten meer blessures door herhaling.',
          en: 'Children’s doctors see more repetition injuries among early specialists.', bin: 0 },
        { nl: 'Kinderen onder de twaalf moeten vooral veel verschillende dingen doen.',
          en: 'Children under twelve should mainly do lots of different things.', bin: 1 }
      ],
      explain: { nl: 'Wat onderzoekers of artsen tellen, kun je nameten: dat zijn feiten. "Het grootste verlies" en "moeten" zijn oordelen.',
                 en: 'What researchers or doctors count can be measured: facts. "The biggest loss" and "should" are judgements.' } },
    { id: 'q4', type: 'mc', skill: 'verwijswoorden',
      q: { nl: '"Zij noemt dat het grootste verlies." Naar wie verwijst "zij"?',
           en: '"She calls that the biggest loss." Who does "she" refer to?' },
      options: [
        { nl: 'De sportpsycholoog uit dezelfde alinea', en: 'The sports psychologist in the same paragraph' },
        { nl: 'De olympisch kampioen uit alinea 1', en: 'The Olympic champion from paragraph 1' },
        { nl: 'De kinderarts uit alinea 4', en: 'The children’s doctor from paragraph 4' },
        { nl: 'De moeder van een turnster', en: 'The mother of a gymnast' }
      ], answer: 0,
      explain: { nl: 'Vlak ervoor staat: "zegt een sportpsycholoog". Het verwijswoord "zij" pakt die persoon op.',
                 en: 'Just before it says "says a sports psychologist", and "she" picks up that person.' } },
    { id: 'q5', type: 'mc', skill: 'structuur',
      q: { nl: 'Alinea 6 begint met "Daar staat tegenover dat...". Wat doet die alinea?',
           en: 'Paragraph 6 begins "On the other hand...". What does that paragraph do?' },
      options: [
        { nl: 'Hij geeft het tegenargument: vroeg beginnen levert wel meer trainingsuren op',
          en: 'It gives the counter-argument: starting early does mean more training hours' },
        { nl: 'Hij herhaalt de uitkomst van de Duitse studie', en: 'It repeats the result of the German study' },
        { nl: 'Hij vertelt over blessures door herhaling', en: 'It talks about repetition injuries' },
        { nl: 'Hij geeft het eindadvies van de onderzoekers', en: 'It gives the researchers’ final advice' }
      ], answer: 0,
      explain: { nl: '"Daar staat tegenover" is een signaalwoord voor een tegenstelling: nu komt het argument voor de andere kant.',
                 en: '"On the other hand" is a signal word for a contrast: now comes the other side’s argument.' } },
    { id: 'q6', type: 'multi', skill: 'gevolgtrekking',
      q: { nl: 'Welke twee nadelen van vroeg specialiseren noemt de tekst? Kies er 2.',
           en: 'Which two disadvantages of early specialising does the text name? Pick 2.' },
      options: [
        { nl: 'Meer blessures door steeds dezelfde beweging', en: 'More injuries from repeating the same movement' },
        { nl: 'Kinderen die al jong afhaken', en: 'Children who drop out while still young' },
        { nl: 'Minder trainingsuren dan anderen', en: 'Fewer training hours than others' },
        { nl: 'Duurdere sportkleding', en: 'More expensive sports clothing' }
      ], answer: [0, 1],
      explain: { nl: 'Alinea 4 gaat over blessures door herhaling, alinea 5 over kinderen die stoppen. Trainingsuren zijn juist een vóórdeel van vroeg beginnen.',
                 en: 'Paragraph 4 is about repetition injuries, paragraph 5 about children quitting. Training hours are an advantage, not a drawback.' } },
    { id: 'q7', type: 'mc', skill: 'doel',
      q: { nl: 'Wat wil de schrijver met deze tekst bereiken?', en: 'What does the writer want to achieve with this text?' },
      options: [
        { nl: 'Een bekend idee nuanceren met onderzoek, en een middenweg voorstellen',
          en: 'Qualify a familiar idea with research, and suggest a middle way' },
        { nl: 'Ouders overtuigen hun kind van de sportclub af te halen',
          en: 'Convince parents to take their child out of the sports club' },
        { nl: 'Reclame maken voor turnen en kunstschaatsen', en: 'Advertise gymnastics and figure skating' },
        { nl: 'Uitleggen hoe je een blessure behandelt', en: 'Explain how to treat an injury' }
      ], answer: 0,
      explain: { nl: 'Alinea 1 zet het bekende verhaal neer, daarna komt het onderzoek, en alinea 7 geeft de tussenweg.',
                 en: 'Paragraph 1 sets up the familiar story, the research follows, and paragraph 7 offers the middle way.' } },
    { id: 'q8', type: 'mc', skill: 'samenvatten',
      q: { nl: 'Welke samenvatting past het beste?', en: 'Which summary fits best?' },
      options: [
        { nl: 'Behalve in een paar sporten halen kinderen die eerst breed sporten en pas later kiezen vaker de top, dus luidt het advies: kiezen rond je vijftiende.',
          en: 'Except in a few sports, children who first play broadly and choose later more often reach the top, so the advice is: choose at about fifteen.' },
        { nl: 'Turnen en kunstschaatsen zijn de zwaarste sporten die er bestaan.',
          en: 'Gymnastics and figure skating are the toughest sports there are.' },
        { nl: 'Wie met twaalf begint met schaatsen wordt nooit meer kampioen.',
          en: 'Anyone who starts skating at twelve will never be a champion.' },
        { nl: 'Sportpsychologen vinden blessures niet zo belangrijk.',
          en: 'Sports psychologists do not think injuries matter much.' }
      ], answer: 0,
      explain: { nl: 'De kern van alle alinea’s: uitzonderingen, onderzoek, uitleg, tegenargument en advies.',
                 en: 'The core of all the paragraphs: exceptions, research, explanation, counter-argument and advice.' } },
    { id: 'q9', type: 'tf', skill: 'gevolgtrekking',
      q: { nl: 'Volgens de tekst is vroeg beginnen in élke sport een slecht idee.',
           en: 'According to the text, starting early is a bad idea in every sport.' },
      answer: false,
      explain: { nl: 'Alinea 2 maakt juist een uitzondering voor turnen en kunstschaatsen, en alinea 6 noemt het voordeel van trainingsuren.',
                 en: 'Paragraph 2 makes an exception for gymnastics and figure skating, and paragraph 6 names the advantage of training hours.' } }
  ]
}
]);

/* --- Niveau 1, 2 en 3: nieuwe verhalen --- */
addStories([
{
  id: 'sport-6', topic: 'sport', level: 1, emoji: '🛹', scene: 'default',
  title: { nl: 'De eerste kickflip', en: 'The first kickflip' },
  text: {
    nl: [
      "Elke dag na school gaat Jayden naar het skatepark achter de sporthal. Hij wil één truc leren: de kickflip. Daarbij springt hij omhoog en laat hij het board onder zich ronddraaien.",
      "De eerste keer valt hij meteen op zijn knie. Au! Hij staat op, klopt het stof van zijn broek en probeert het opnieuw. En weer. En weer.",
      "Na een week kan hij het board al een half rondje laten draaien. Maar landen lukt niet. Hij valt steeds op zijn billen. Zijn vriendin Sanne roept: \"Kijk naar het board, niet naar je voeten!\"",
      "Jayden luistert. Hij buigt zijn knieën, springt en kijkt strak naar het board. Het draait helemaal rond. Zijn voeten raken de grond. Hij staat! Hij is niet gevallen!",
      "Sanne juicht en geeft hem een high five. Jayden lacht zo breed dat zijn wangen pijn doen. Honderd keer vallen voor één keer landen, dat is meer dan genoeg waard."
    ],
    en: [
      "Every day after school Jayden goes to the skatepark behind the sports hall. He wants to learn one trick: the kickflip. To do it, he jumps up and makes the board spin underneath him.",
      "The first time he falls straight onto his knee. Ouch! He gets up, brushes the dust off his trousers and tries again. And again. And again.",
      "After a week he can already make the board spin half a turn. But landing does not work. He keeps falling on his bottom. His friend Sanne shouts: \"Look at the board, not at your feet!\"",
      "Jayden listens. He bends his knees, jumps and stares hard at the board. It spins all the way round. His feet touch the ground. He is standing! He has not fallen!",
      "Sanne cheers and gives him a high five. Jayden smiles so wide his cheeks hurt. A hundred falls for one landing, that is worth more than enough."
    ]
  },
  words: [
    { nl: 'kickflip', en: 'kickflip', defNl: 'een skatetruc waarbij het board in de lucht ronddraait', defEn: 'a skateboard trick where the board spins around in the air' },
    { nl: 'opstaan', en: 'to get up', defNl: 'weer overeind komen nadat je bent gevallen', defEn: 'to stand up again after falling' },
    { nl: 'juichen', en: 'to cheer', defNl: 'hard roepen en springen van blijdschap', defEn: 'to shout loudly and jump for joy' }
  ],
  questions: [
    { id: 'q1', type: 'mc', skill: 'letterlijk',
      q: { nl: 'Welke truc wil Jayden leren?', en: 'Which trick does Jayden want to learn?' },
      options: [ { nl: 'De kickflip', en: 'The kickflip' }, { nl: 'De ollie', en: 'The ollie' }, { nl: 'De grind', en: 'The grind' }, { nl: 'De 360 flip', en: 'The 360 flip' } ],
      answer: 0,
      explain: { nl: 'De eerste alinea zegt: "Hij wil één truc leren: de kickflip."', en: 'The first paragraph says: "He wants to learn one trick: the kickflip."' } },
    { id: 'q2', type: 'mc', skill: 'letterlijk',
      q: { nl: 'Waar valt Jayden de eerste keer op?', en: 'What does Jayden fall on the first time?' },
      options: [ { nl: 'Zijn knie', en: 'His knee' }, { nl: 'Zijn arm', en: 'His arm' }, { nl: 'Zijn hoofd', en: 'His head' }, { nl: 'Zijn rug', en: 'His back' } ],
      answer: 0,
      explain: { nl: 'Alinea 2: "valt hij meteen op zijn knie".', en: 'Paragraph 2: "he falls straight onto his knee".' } },
    { id: 'q3', type: 'gap', skill: 'woordenschat',
      q: { nl: 'Na zijn val staat Jayden meteen weer op. Opstaan betekent hier ___.', en: 'After his fall Jayden gets straight back up. To get up here means ___.' },
      options: [
        { nl: 'weer overeind komen na een val', en: 'to stand up again after falling' },
        { nl: 'naar beneden vallen', en: 'to fall down' },
        { nl: 'heel hard springen', en: 'to jump very hard' },
        { nl: 'je veters strikken', en: 'to tie your shoelaces' }
      ], answer: 0,
      explain: { nl: 'Opstaan is het tegenovergestelde van vallen: je komt weer overeind.', en: 'To get up is the opposite of falling: you stand up again.' } },
    { id: 'q4', type: 'order', skill: 'volgorde',
      q: { nl: 'Zet de gebeurtenissen in de goede volgorde.', en: 'Put the events in the right order.' },
      items: [
        { nl: 'Jayden valt op zijn knie.', en: 'Jayden falls on his knee.' },
        { nl: 'Jayden kan het board een half rondje laten draaien.', en: 'Jayden can make the board spin half a turn.' },
        { nl: 'Sanne roept dat hij naar het board moet kijken.', en: 'Sanne shouts that he should look at the board.' },
        { nl: 'Jayden landt de kickflip.', en: 'Jayden lands the kickflip.' }
      ], answer: [0, 1, 2, 3],
      explain: { nl: 'Val, half rondje, de tip van Sanne, dan pas de landing: dat is de volgorde in het verhaal.', en: 'Fall, half turn, the tip from Sanne, then the landing: that is the order in the story.' } },
    { id: 'q5', type: 'mc', skill: 'hoofdgedachte',
      q: { nl: 'Wat leert dit verhaal je vooral?', en: 'What does this story mainly teach you?' },
      options: [
        { nl: 'Oefenen en vallen horen bij iets nieuws leren', en: 'Practising and falling are part of learning something new' },
        { nl: 'Skaten is te gevaarlijk om te proberen', en: 'Skateboarding is too dangerous to try' },
        { nl: 'Je moet altijd naar je voeten kijken', en: 'You should always look at your feet' },
        { nl: 'Vrienden mogen niet meekijken tijdens het oefenen', en: 'Friends are not allowed to watch while you practise' }
      ], answer: 0,
      explain: { nl: 'Jayden valt heel vaak voordat het lukt. Dat honderd keer vallen hoort erbij.', en: 'Jayden falls many times before it works. All that falling is part of it.' } }
  ]
},

{
  id: 'sport-7', topic: 'sport', level: 2, emoji: '🦽', scene: 'stadium',
  title: { nl: 'Topsport zonder twee benen', en: 'Top-level sport without two legs' },
  text: {
    nl: [
      "Een paar weken na de Olympische Spelen gaan de poorten van hetzelfde stadion weer open. Dan beginnen de Paralympische Spelen. Duizenden sporters met een lichamelijke of visuele beperking strijden om goud, zilver en brons. Het woord \"para\" komt niet van \"minder\", maar van het Griekse woord voor \"naast\": deze Spelen staan naast de Olympische Spelen, niet eronder.",
      "Om de wedstrijden eerlijk te maken, worden sporters ingedeeld in klassen. Een hardloper zonder onderbeen komt niet uit tegen iemand die blind is: hun beperking werkt heel anders. Daarom krijgt elke sporter, na een grondige keuring, een code zoals T64 of S9. De letter zegt om welke sport het gaat, het cijfer zegt hoe groot de beperking is.",
      "Ook het materiaal is aangepast, maar niet zomaar een beetje. Een racerolstoel is drie wielen lang, ligt heel laag en weegt soms minder dan negen kilo. Een sprintblade, het veerkrachtige kunstonderbeen waarmee sommige lopers rennen, is speciaal gemaakt voor de vorm en de kracht van elke sporter apart. Zo'n blade kost al snel duizenden euro's en wordt steeds opnieuw afgesteld.",
      "Denk niet dat het daardoor makkelijker wordt. De trainingsuren zijn precies zo lang als bij niet-beperkte topsporters: vaak zes dagen per week, meerdere uren per dag. De wereldrecords worden ieder jaar sneller. Sommige tijden op de honderd meter met een sprintblade liggen inmiddels dicht bij die van hardlopers zonder beperking.",
      "Toch kregen de Paralympische Spelen lang minder aandacht. Dat verandert. Steeds meer wedstrijden worden live uitgezonden en steeds meer mensen kijken toe. Topsport blijft topsport, met of zonder twee benen."
    ],
    en: [
      "A few weeks after the Olympic Games, the gates of the same stadium open again. Then the Paralympic Games begin. Thousands of athletes with a physical or visual impairment compete for gold, silver and bronze. The word \"para\" does not come from \"less\", but from the Greek word for \"alongside\": these Games stand alongside the Olympic Games, not beneath them.",
      "To make the competitions fair, athletes are placed into classes. A runner without a lower leg does not compete against someone who is blind: their impairment works completely differently. That is why every athlete, after a thorough assessment, gets a code such as T64 or S9. The letter says which sport it is, the number says how big the impairment is.",
      "The equipment is adapted too, but not just a little. A racing wheelchair is three wheels long, sits very low and sometimes weighs less than nine kilos. A running blade, the springy artificial lower leg some runners run on, is made specially to fit the shape and strength of each athlete. Such a blade quickly costs thousands of euros and is adjusted again and again.",
      "Do not think that makes it easier. The training hours are exactly as long as for non-disabled top athletes: often six days a week, several hours a day. World records get faster every year. Some times over a hundred metres with a running blade are now close to those of runners without an impairment.",
      "Still, the Paralympic Games got less attention for a long time. That is changing. More and more competitions are broadcast live and more and more people watch. Top-level sport stays top-level sport, with or without two legs."
    ]
  },
  words: [
    { nl: 'keuring', en: 'assessment', defNl: 'een onderzoek waarbij artsen precies bekijken wat iemand wel en niet kan', defEn: 'an examination where doctors check exactly what someone can and cannot do' },
    { nl: 'racerolstoel', en: 'racing wheelchair', defNl: 'een speciale, lichte rolstoel met drie wielen om snel mee te rijden', defEn: 'a special, light wheelchair with three wheels for racing' },
    { nl: 'sprintblade', en: 'running blade', defNl: 'een veerkrachtig kunstonderbeen waarmee je hard kunt rennen', defEn: 'a springy artificial lower leg that lets you run fast' }
  ],
  questions: [
    { id: 'q1', type: 'mc', skill: 'letterlijk',
      q: { nl: 'Waar komt het woord "para" vandaan, volgens de tekst?', en: 'Where does the word "para" come from, according to the text?' },
      options: [
        { nl: 'Het Griekse woord voor "naast"', en: 'The Greek word for "alongside"' },
        { nl: 'Het Engelse woord voor "minder"', en: 'The English word for "less"' },
        { nl: 'De naam van een oude stad', en: 'The name of an old city' },
        { nl: 'Een afkorting van het woord paralysis', en: 'An abbreviation of the word paralysis' }
      ], answer: 0,
      explain: { nl: 'Alinea 1: "van het Griekse woord voor \'naast\'".', en: 'Paragraph 1: "from the Greek word for \'alongside\'".' } },
    { id: 'q2', type: 'mc', skill: 'gevolgtrekking',
      q: { nl: 'Waarom krijgt elke sporter een code zoals T64 of S9?', en: 'Why does every athlete get a code such as T64 or S9?' },
      options: [
        { nl: 'Zodat sporters met een vergelijkbare beperking tegen elkaar strijden', en: 'So athletes with a comparable impairment compete against each other' },
        { nl: 'Zodat trainers weten wie het langst traint', en: 'So coaches know who trains the longest' },
        { nl: 'Om bij te houden hoeveel medailles iemand wint', en: 'To keep track of how many medals someone wins' },
        { nl: 'Om te bepalen welk land wint', en: 'To determine which country wins' }
      ], answer: 0,
      explain: { nl: 'Alinea 2 legt uit dat een hardloper zonder onderbeen niet uitkomt tegen iemand die blind is: de klasse zorgt voor een eerlijke strijd.', en: 'Paragraph 2 explains that a runner without a lower leg does not compete against someone blind: the class makes the contest fair.' } },
    { id: 'q3', type: 'gap', skill: 'woordenschat',
      q: { nl: 'Elke sporter krijgt een code na een grondige keuring. Een keuring is ___.', en: 'Every athlete gets a code after a thorough assessment. An assessment is ___.' },
      options: [
        { nl: 'een onderzoek dat precies bekijkt wat iemand kan', en: 'an examination that closely checks what someone can do' },
        { nl: 'een wedstrijd om medailles', en: 'a competition for medals' },
        { nl: 'een warming-up voor de wedstrijd', en: 'a warm-up before the race' },
        { nl: 'het moment dat je wint', en: 'the moment you win' }
      ], answer: 0,
      explain: { nl: 'De tekst noemt de keuring vlak voor het geven van de code: het is het onderzoek dat de klasse bepaalt.', en: 'The text mentions the assessment right before the code is given: it is the examination that decides the class.' } },
    { id: 'q4', type: 'match', skill: 'woordenschat',
      q: { nl: 'Klik het woord en daarna de juiste betekenis.', en: 'Click the word and then the correct meaning.' },
      pairs: [
        { word: { nl: 'keuring', en: 'assessment' }, meaning: { nl: 'onderzoek dat bekijkt wat iemand kan', en: 'an examination of what someone can do' } },
        { word: { nl: 'racerolstoel', en: 'racing wheelchair' }, meaning: { nl: 'lichte rolstoel met drie wielen om snel te rijden', en: 'a light wheelchair with three wheels for racing' } },
        { word: { nl: 'sprintblade', en: 'running blade' }, meaning: { nl: 'veerkrachtig kunstonderbeen om hard mee te rennen', en: 'a springy artificial lower leg for running fast' } }
      ],
      explain: { nl: 'Deze drie woorden komen allemaal uit de tekst.', en: 'All three words come from the text.' } },
    { id: 'q5', type: 'tf', skill: 'letterlijk',
      q: { nl: 'Sporters op de Paralympische Spelen trainen minder uren dan andere topsporters.', en: 'Athletes at the Paralympic Games train fewer hours than other top athletes.' },
      answer: false,
      explain: { nl: 'Alinea 4 zegt juist het tegenovergestelde: de trainingsuren zijn precies zo lang als bij niet-beperkte topsporters.', en: 'Paragraph 4 says the opposite: the training hours are exactly as long as for non-disabled top athletes.' } },
    { id: 'q6', type: 'mc', skill: 'hoofdgedachte',
      q: { nl: 'Wat is de hoofdgedachte van de tekst?', en: 'What is the main idea of the text?' },
      options: [
        { nl: 'Paralympische sporters zijn net zulke serieuze topsporters als Olympische sporters, met eigen klassen en aangepast materiaal', en: 'Paralympic athletes are just as serious top athletes as Olympic athletes, with their own classes and adapted equipment' },
        { nl: 'Blinde sporters mogen niet meedoen aan de Spelen', en: 'Blind athletes are not allowed to take part in the Games' },
        { nl: 'Racerolstoelen zijn te duur voor de meeste sporters', en: 'Racing wheelchairs are too expensive for most athletes' },
        { nl: 'De Paralympische Spelen bestaan pas sinds kort', en: 'The Paralympic Games have only existed since recently' }
      ], answer: 0,
      explain: { nl: 'De hele tekst legt uit hoe klassen en materiaal het mogelijk maken dat dit net zo serieuze topsport is als de Olympische Spelen.', en: 'The whole text explains how classes and equipment make this just as serious a top-level sport as the Olympic Games.' } }
  ]
},

{
  id: 'sport-8', topic: 'sport', level: 3, emoji: '🚴', scene: 'default',
  title: { nl: 'Waarom fietsers vlak achter elkaar rijden', en: 'Why cyclists ride close behind each other' },
  text: {
    nl: [
      "In de Tour de France fietst het peloton vaak als één grote, dichte klont. Honderdvijftig renners rijden soms maar een paar centimeter van elkaars achterwiel. Dat lijkt gevaarlijk, en dat is het soms ook, maar er zit een heel logische reden achter: windschaduw.",
      "Een fietser die vooraan rijdt, duwt met zijn hele lichaam de lucht opzij. Dat kost enorm veel kracht: bij hoge snelheid gaat wel tachtig procent van je energie op aan het overwinnen van luchtweerstand. Wie vlak achter een ander wiel blijft zitten, rijdt in een soort rustige luchtbel. Onderzoekers meten dat een volger daardoor zo'n dertig procent minder energie kwijt is bij dezelfde snelheid.",
      "Dat verklaart meteen waarom een solo-ontsnapping zo zwaar is. Eén renner die vooruit rijdt, vecht helemaal alleen tegen de wind. Het peloton erachter deelt de last: renners wisselen elkaar constant af aan kop, terwijl de rest lekker in de luwte meerijdt. Daardoor kan het peloton bijna altijd harder dan de vluchter, en wordt een ontsnapping meestal, maar niet altijd, ingehaald voor de finish.",
      "Ploegen gebruiken dit elke dag als tactiek. Zogeheten knechten rijden een groot deel van de etappe vooraan, zodat hun kopman de hele dag lekker uit de wind kan blijven en fris is voor de laatste beklimming. Bij harde zijwind splitst het peloton zelfs in waaiers: schuine linies waarin elke renner net iets naast en achter de vorige schuift om optimaal beschut te blijven. Wie de aansluiting mist, verliest in een paar minuten tijd soms al zijn kansen.",
      "Zo blijkt wielrennen minder een gevecht van de sterkste benen te zijn dan het lijkt. Wie het beste weet wanneer hij moet schuilen en wanneer hij moet trekken, wint vaker dan wie simpelweg het hardst kan fietsen."
    ],
    en: [
      "In the Tour de France the peloton often rides as one big, tightly packed clump. A hundred and fifty riders sometimes ride only a few centimetres from each other's back wheel. That looks dangerous, and sometimes it is, but there is a very logical reason behind it: drafting.",
      "A cyclist riding at the front pushes the air aside with his whole body. That costs an enormous amount of strength: at high speed as much as eighty percent of your energy goes into overcoming air resistance. Anyone who stays right behind another wheel rides in a kind of calm air bubble. Researchers measure that a follower uses about thirty percent less energy at the same speed because of this.",
      "That immediately explains why a solo breakaway is so hard. One rider riding out front fights the wind completely alone. The peloton behind shares the load: riders constantly take turns at the front, while the rest happily ride along in the shelter. Because of that the peloton can almost always go faster than the escapee, and a breakaway is usually, though not always, caught before the finish.",
      "Teams use this as tactics every day. So-called domestiques ride at the front for a large part of the stage, so that their team leader can stay out of the wind all day and be fresh for the final climb. In strong crosswinds the peloton even splits into echelons: diagonal lines in which every rider slots in just beside and behind the one in front to stay optimally sheltered. Anyone who misses the connection can lose all their chances within a few minutes.",
      "So cycling turns out to be less of a battle of the strongest legs than it looks. Whoever best knows when to shelter and when to pull wins more often than whoever can simply pedal the hardest."
    ]
  },
  words: [
    { nl: 'windschaduw', en: 'draft / slipstream', defNl: 'de luwe plek vlak achter iemand waar de wind minder hard voelt', defEn: 'the sheltered spot right behind someone where the wind feels less strong' },
    { nl: 'luchtweerstand', en: 'air resistance', defNl: 'de kracht van de lucht die tegen je in duwt als je beweegt', defEn: 'the force of the air pushing against you as you move' },
    { nl: 'waaier', en: 'echelon', defNl: 'een schuine linie van renners die elkaar beschutten tegen zijwind', defEn: 'a diagonal line of riders sheltering each other from crosswind' }
  ],
  questions: [
    { id: 'q1', type: 'mc', skill: 'letterlijk',
      q: { nl: 'Hoeveel procent minder energie is een volger kwijt, volgens de tekst?', en: 'How much less energy does a follower use, according to the text?' },
      options: [ { nl: 'Ongeveer dertig procent', en: 'About thirty percent' }, { nl: 'Ongeveer tachtig procent', en: 'About eighty percent' },
                 { nl: 'Ongeveer vijftig procent', en: 'About fifty percent' }, { nl: 'Ongeveer tien procent', en: 'About ten percent' } ],
      answer: 0,
      explain: { nl: 'Alinea 2: "zo\'n dertig procent minder energie kwijt".', en: 'Paragraph 2: "about thirty percent less energy".' } },
    { id: 'q2', type: 'mc', skill: 'gevolgtrekking',
      q: { nl: 'Waarom wordt een solo-ontsnapping meestal ingehaald?', en: 'Why is a solo breakaway usually caught?' },
      options: [
        { nl: 'Omdat het peloton de last van het kopwerk kan verdelen, en dus harder kan dan één renner alleen', en: 'Because the peloton can share the load of riding at the front, so it can go faster than one rider alone' },
        { nl: 'Omdat de vluchter altijd een lekke band krijgt', en: 'Because the escapee always gets a flat tyre' },
        { nl: 'Omdat de scheidsrechter dat beslist', en: 'Because the referee decides that' },
        { nl: 'Omdat het publiek dat wil', en: 'Because the crowd wants it' }
      ], answer: 0,
      explain: { nl: 'Alinea 3 legt uit dat het peloton de last deelt en daardoor bijna altijd harder kan dan de vluchter.', en: 'Paragraph 3 explains that the peloton shares the load and can therefore almost always go faster than the escapee.' } },
    { id: 'q3', type: 'gap', skill: 'woordenschat',
      q: { nl: 'Windschaduw is de plek ___.', en: 'Draft is the spot ___.' },
      options: [
        { nl: 'vlak achter iemand, waar de wind minder hard voelt', en: 'right behind someone, where the wind feels less strong' },
        { nl: 'voor het peloton, waar de wind het hardst waait', en: 'in front of the peloton, where the wind blows hardest' },
        { nl: 'naast de weg, waar je mag rusten', en: 'beside the road, where you are allowed to rest' },
        { nl: 'boven op de berg, waar de finish ligt', en: 'at the top of the mountain, where the finish is' }
      ], answer: 0,
      explain: { nl: 'De tekst legt uit: wie vlak achter een ander wiel blijft zitten, rijdt in een rustige luchtbel.', en: 'The text explains: staying right behind another wheel means riding in a calm air bubble.' } },
    { id: 'q4', type: 'mc', skill: 'verwijswoorden',
      q: { nl: '"Daardoor kan het peloton bijna altijd harder dan de vluchter." Waar verwijst "daardoor" naar?', en: '"Because of that the peloton can almost always go faster than the escapee." What does "that" refer to?' },
      options: [
        { nl: 'Naar het feit dat het peloton het kopwerk onderling verdeelt', en: 'To the fact that the peloton shares the work at the front among themselves' },
        { nl: 'Naar het feit dat de vluchter een lekke band heeft', en: 'To the fact that the escapee has a flat tyre' },
        { nl: 'Naar de finish van de etappe', en: 'To the finish of the stage' },
        { nl: 'Naar de zijwind', en: 'To the crosswind' }
      ], answer: 0,
      explain: { nl: 'De zin ervoor zegt dat renners elkaar constant afwisselen aan kop. Dat delen van het werk is waar "daardoor" naar terugwijst.', en: 'The sentence before says riders constantly take turns at the front. That sharing of the work is what "that" refers back to.' } },
    { id: 'q5', type: 'mc', skill: 'structuur',
      q: { nl: 'Waarom begint de tekst met een scène uit de Tour de France?', en: 'Why does the text start with a scene from the Tour de France?' },
      options: [
        { nl: 'Om eerst een herkenbaar beeld te geven, voordat de uitleg over windschaduw volgt', en: 'To first give a recognisable image, before the explanation of drafting follows' },
        { nl: 'Om te laten zien dat de Tour de France de beste wedstrijd is', en: 'To show that the Tour de France is the best race' },
        { nl: 'Om meteen de tactiek van de ploegen uit te leggen', en: 'To immediately explain the teams’ tactics' },
        { nl: 'Om een grap te maken over de renners', en: 'To make a joke about the riders' }
      ], answer: 0,
      explain: { nl: 'De tekst opent met het beeld van het dichte peloton en legt daarna pas uit waarom dat zo is.', en: 'The text opens with the image of the tightly packed peloton and only then explains why.' } },
    { id: 'q6', type: 'tf', skill: 'letterlijk',
      q: { nl: 'Bij harde zijwind blijft het peloton altijd in één rechte lijn rijden.', en: 'In strong crosswinds the peloton always keeps riding in one straight line.' },
      answer: false,
      explain: { nl: 'Alinea 4 zegt dat het peloton dan juist splitst in waaiers: schuine linies.', en: 'Paragraph 4 says the peloton splits into echelons instead: diagonal lines.' } },
    { id: 'q7', type: 'mc', skill: 'hoofdgedachte',
      q: { nl: 'Wat is de hoofdgedachte van de tekst?', en: 'What is the main idea of the text?' },
      options: [
        { nl: 'Door windschaduw en samenwerking is wielrennen niet alleen een kwestie van de sterkste benen, maar ook van slimme tactiek', en: 'Because of drafting and teamwork, cycling is not only about the strongest legs, but also about smart tactics' },
        { nl: 'Alleen de kopman van een ploeg telt mee', en: 'Only the team leader counts' },
        { nl: 'Zijwind is het grootste gevaar in het wielrennen', en: 'Crosswind is the biggest danger in cycling' },
        { nl: 'Elke renner fietst het liefst helemaal alleen', en: 'Every rider prefers to cycle completely alone' }
      ], answer: 0,
      explain: { nl: 'De hele tekst laat zien hoe windschaduw en teamwerk samen bepalen wie er wint, niet alleen pure kracht.', en: 'The whole text shows how drafting and teamwork together decide who wins, not just raw strength.' } }
  ]
},

{
  id: 'sport-9', topic: 'sport', level: 4, emoji: '🏟️', scene: 'stadium',
  title: { nl: 'Het thuisvoordeel: waarom een vol stadion helpt', en: 'Home advantage: why a full stadium helps' },
  text: {
    nl: [
      "Voetbalclubs weten het al lang: spelen op eigen veld levert vaker een overwinning op dan spelen bij de tegenstander. Onderzoekers die duizenden profwedstrijden natelden, kwamen op ongeveer 45 procent winst voor de thuisploeg, tegenover maar 27 procent voor de uitploeg. De rest eindigt gelijk. Dat verschil noemen we het thuisvoordeel, en het bestaat niet alleen in het voetbal, maar bijna overal waar mensen tegen elkaar sporten.",
      "Waar komt dat voordeel vandaan? Tijdens de coronapandemie kregen onderzoekers een unieke kans om dat uit te zoeken. Stadions bleven wekenlang helemaal leeg. Zonder joelend publiek gaven scheidsrechters opeens minder vaak een gele of rode kaart aan de uitploeg, en floten ze minder overtredingen in het voordeel van de thuisploeg. Een scheidsrechter laat zich blijkbaar, misschien zonder het zelf te merken, meebewegen door duizenden mensen die om een beslissing roepen.",
      "Geluid is niet de enige verklaring. Spelers van de thuisploeg kennen elke hoek van hun veld: de lengte van het gras, de akoestiek van de catacomben, de kleedkamer waar ze al jaren zitten. Die vertrouwdheid klinkt klein, maar sporters die zich op hun gemak voelen, nemen gemiddeld iets snellere en betere beslissingen op het veld.",
      "Daarnaast speelt vermoeidheid mee. De uitploeg reist soms uren met de bus of het vliegtuig, slaapt in een hotelbed dat niet het eigen bed is, en eet niet de vertrouwde maaltijd. Dat kost energie die de thuisploeg gewoon thuis kan sparen. Bij wedstrijden ver over de grens, met een tijdsverschil erbij, is dat verschil nog groter.",
      "Toch is het thuisvoordeel de laatste decennia iets kleiner geworden. Topclubs reizen nu in speciale vliegtuigen, slapen in hotels die zo veel mogelijk op de vertrouwde omgeving lijken en nemen zelfs hun eigen kok mee. Daardoor voelen uitwedstrijden minder ontregelend dan vroeger, al verdwijnt het effect van het joelende publiek natuurlijk niet helemaal.",
      "Het thuisvoordeel is dus geen toeval en ook geen enkel trucje, maar een optelsom: een scheidsrechter die meebeweegt met het publiek, spelers die zich vertrouwd voelen, en een lijf dat niet vermoeid is van het reizen. Samen verklaren die drie dingen waarom een vol stadion echt meetelt."
    ],
    en: [
      "Football clubs have known it for a long time: playing on your own pitch leads to a win more often than playing at the opponent's ground. Researchers who counted thousands of professional matches found about 45 percent wins for the home team, against only 27 percent for the away team. The rest end in a draw. We call that difference the home advantage, and it exists not only in football but in almost every sport where people compete against each other.",
      "Where does that advantage come from? During the coronavirus pandemic researchers got a unique chance to find out. Stadiums stayed completely empty for weeks. Without a roaring crowd, referees suddenly gave fewer yellow or red cards to the away team, and blew the whistle less often in the home team's favour. A referee is apparently swayed, perhaps without noticing it himself, by thousands of people shouting for a decision.",
      "Sound is not the only explanation. Home players know every corner of their pitch: the length of the grass, the acoustics of the tunnel, the dressing room they have used for years. That familiarity sounds small, but athletes who feel at ease make slightly faster and better decisions on the pitch on average.",
      "Tiredness also plays a part. The away team sometimes travels for hours by bus or plane, sleeps in a hotel bed that is not their own, and does not eat their usual meal. That costs energy the home team can simply save at home. In matches far across the border, with a time difference added, that gap is even bigger.",
      "Still, the home advantage has become a little smaller in recent decades. Top clubs now travel in special planes, sleep in hotels made to feel as familiar as possible, and even bring their own cook. Because of that, away games feel less disruptive than they used to, although the effect of a roaring crowd of course does not disappear completely.",
      "So the home advantage is neither a coincidence nor a single trick, but a combination: a referee who is swayed by the crowd, players who feel at home, and bodies that are not tired from travelling. Together these three things explain why a full stadium really does count."
    ]
  },
  words: [
    { nl: 'thuisvoordeel', en: 'home advantage', defNl: 'het voordeel dat een team heeft als het op eigen veld speelt', defEn: 'the advantage a team has when playing on its own pitch' },
    { nl: 'akoestiek', en: 'acoustics', defNl: 'hoe geluid klinkt en weerkaatst in een ruimte', defEn: 'how sound sounds and echoes in a space' },
    { nl: 'vertrouwdheid', en: 'familiarity', defNl: 'het gevoel dat je een plek heel goed kent', defEn: 'the feeling of knowing a place very well' }
  ],
  questions: [
    { id: 'q1', type: 'mc', skill: 'letterlijk',
      q: { nl: 'Hoeveel procent van de wedstrijden wint de thuisploeg volgens het onderzoek?', en: 'What percentage of matches does the home team win, according to the research?' },
      options: [ { nl: 'Ongeveer 45 procent', en: 'About 45 percent' }, { nl: 'Ongeveer 27 procent', en: 'About 27 percent' },
                 { nl: 'Ongeveer 70 procent', en: 'About 70 percent' }, { nl: 'Ongeveer 10 procent', en: 'About 10 percent' } ],
      answer: 0,
      explain: { nl: 'Alinea 1: "ongeveer 45 procent winst voor de thuisploeg".', en: 'Paragraph 1: "about 45 percent wins for the home team".' } },
    { id: 'q2', type: 'multi', skill: 'letterlijk',
      q: { nl: 'Wat ontdekten onderzoekers tijdens de lege stadions in de coronapandemie? Kies er 2.', en: 'What did researchers discover during the empty stadiums in the coronavirus pandemic? Pick 2.' },
      options: [
        { nl: 'Scheidsrechters gaven minder vaak een kaart aan de uitploeg', en: 'Referees gave fewer cards to the away team' },
        { nl: 'Scheidsrechters floten minder overtredingen in het voordeel van de thuisploeg', en: 'Referees blew the whistle less often in the home team’s favour' },
        { nl: 'Spelers scoorden veel meer doelpunten dan normaal', en: 'Players scored far more goals than normal' },
        { nl: 'Wedstrijden duurden korter dan normaal', en: 'Matches lasted shorter than normal' }
      ], answer: [0, 1],
      explain: { nl: 'Alinea 2 noemt precies deze twee dingen. Over doelpunten of de duur van wedstrijden zegt de tekst niets.', en: 'Paragraph 2 names exactly these two things. The text says nothing about goals or match length.' } },
    { id: 'q3', type: 'mc', skill: 'verwijswoorden',
      q: { nl: '"Die vertrouwdheid klinkt klein, maar..." Waar verwijst "die" naar?', en: '"That familiarity sounds small, but..." What does "that" refer to?' },
      options: [
        { nl: 'Naar het kennen van het veld, de akoestiek en de kleedkamer', en: 'To knowing the pitch, the acoustics and the dressing room' },
        { nl: 'Naar het geluid van het publiek', en: 'To the sound of the crowd' },
        { nl: 'Naar de reistijd van de uitploeg', en: 'To the away team’s travel time' },
        { nl: 'Naar de gele kaarten van de scheidsrechter', en: 'To the referee’s yellow cards' }
      ], answer: 0,
      explain: { nl: 'De zin ervoor somt op: de lengte van het gras, de akoestiek, de kleedkamer. "Die vertrouwdheid" verwijst naar die hele opsomming.', en: 'The sentence before lists: the length of the grass, the acoustics, the dressing room. "That familiarity" refers to that whole list.' } },
    { id: 'q4', type: 'mc', skill: 'gevolgtrekking',
      q: { nl: 'Waarom is het verschil in vermoeidheid extra groot bij wedstrijden ver over de grens?', en: 'Why is the tiredness gap extra large in matches far across the border?' },
      options: [
        { nl: 'Omdat er dan ook nog een tijdsverschil bijkomt, naast de lange reis', en: 'Because a time difference is then added on top of the long journey' },
        { nl: 'Omdat de bus daar langzamer rijdt', en: 'Because the bus drives slower there' },
        { nl: 'Omdat de scheidsrechter dan strenger is', en: 'Because the referee is stricter then' },
        { nl: 'Omdat het stadion daar altijd voller is', en: 'Because the stadium there is always fuller' }
      ], answer: 0,
      explain: { nl: 'Alinea 4 noemt de lange reis én het tijdsverschil samen als reden voor het grotere verschil.', en: 'Paragraph 4 names the long journey and the time difference together as the reason for the bigger gap.' } },
    { id: 'q5', type: 'gap', skill: 'woordenschat',
      q: { nl: 'Vertrouwdheid betekent hier ___.', en: 'Familiarity here means ___.' },
      options: [
        { nl: 'het gevoel dat je een plek heel goed kent', en: 'the feeling of knowing a place very well' },
        { nl: 'het geluid dat weerkaatst in een ruimte', en: 'the sound that echoes in a space' },
        { nl: 'de vermoeidheid na een lange reis', en: 'the tiredness after a long journey' },
        { nl: 'het aantal gele kaarten in een wedstrijd', en: 'the number of yellow cards in a match' }
      ], answer: 0,
      explain: { nl: 'De tekst noemt vertrouwdheid vlak na het voorbeeld van het veld en de kleedkamer kennen: het is het goed kennen van een plek.', en: 'The text mentions familiarity right after the example of knowing the pitch and dressing room: it is knowing a place well.' } },
    { id: 'q6', type: 'order', skill: 'volgorde',
      q: { nl: 'Zet de onderdelen van het thuisvoordeel in de volgorde waarin de tekst ze bespreekt.', en: 'Put the parts of the home advantage in the order the text discusses them.' },
      items: [
        { nl: 'Onderzoekers tellen duizenden wedstrijden en vinden een verschil in winstpercentage.', en: 'Researchers count thousands of matches and find a difference in win percentage.' },
        { nl: 'Tijdens lege stadions in de coronapandemie fluiten scheidsrechters anders.', en: 'During empty stadiums in the pandemic, referees whistle differently.' },
        { nl: 'Spelers blijken baat te hebben bij vertrouwdheid met hun eigen veld.', en: 'Players turn out to benefit from familiarity with their own pitch.' },
        { nl: 'Vermoeidheid door reizen kost de uitploeg energie.', en: 'Tiredness from travelling costs the away team energy.' },
        { nl: 'Topclubs proberen het thuisvoordeel van de tegenstander tegenwoordig te verkleinen.', en: 'Top clubs nowadays try to shrink the opponent’s home advantage.' }
      ], answer: [0, 1, 2, 3, 4],
      explain: { nl: 'De vijf alinea’s volgen precies deze volgorde: cijfers, scheidsrechters, vertrouwdheid, vermoeidheid, en de huidige aanpak van topclubs.', en: 'The five paragraphs follow exactly this order: numbers, referees, familiarity, tiredness, and the current approach of top clubs.' } },
    { id: 'q7', type: 'mc', skill: 'structuur',
      q: { nl: 'Alinea 5 begint met "Toch is het thuisvoordeel... kleiner geworden." Wat doet het signaalwoord "toch" hier?', en: 'Paragraph 5 begins "Still, the home advantage has become... smaller." What does the signal word "still" do here?' },
      options: [
        { nl: 'Het zet een tegenstelling neer: eerder leek het thuisvoordeel groot, nu blijkt het iets af te nemen', en: 'It sets up a contrast: earlier the home advantage seemed large, now it turns out to be shrinking a little' },
        { nl: 'Het geeft een voorbeeld van akoestiek', en: 'It gives an example of acoustics' },
        { nl: 'Het vat de hele tekst samen', en: 'It summarises the whole text' },
        { nl: 'Het introduceert een nieuw onderzoek uit Duitsland', en: 'It introduces a new study from Germany' }
      ], answer: 0,
      explain: { nl: '"Toch" laat een onverwachte wending zien na alle uitleg over waaróm het thuisvoordeel bestaat.', en: '"Still" shows an unexpected turn after all the explanation of why the home advantage exists.' } },
    { id: 'q8', type: 'mc', skill: 'hoofdgedachte',
      q: { nl: 'Wat is de hoofdgedachte van de tekst?', en: 'What is the main idea of the text?' },
      options: [
        { nl: 'Thuisvoordeel bestaat echt en komt door een combinatie van scheidsrechters die meebewegen, vertrouwdheid en minder vermoeidheid', en: 'Home advantage really exists and comes from a combination of referees being swayed, familiarity and less tiredness' },
        { nl: 'Scheidsrechters zijn altijd oneerlijk', en: 'Referees are always unfair' },
        { nl: 'Reizen heeft geen enkele invloed op een wedstrijd', en: 'Travelling has no influence at all on a match' },
        { nl: 'Het thuisvoordeel is helemaal verdwenen', en: 'The home advantage has disappeared completely' }
      ], answer: 0,
      explain: { nl: 'De tekst zet drie oorzaken naast elkaar en laat zien dat ze samen het thuisvoordeel verklaren.', en: 'The text sets three causes side by side and shows that together they explain the home advantage.' } }
  ]
},

{
  id: 'sport-10', topic: 'sport', level: 5, emoji: '💊', scene: 'default',
  title: { nl: 'Verdienen sporters die doping gebruikten een tweede kans?', en: 'Do athletes who used doping deserve a second chance?' },
  text: {
    nl: [
      "Stel je voor: een sprinter van negentien wordt betrapt op een verboden middel. Ze krijgt een schorsing van vier jaar en mag niet meer meedoen aan wedstrijden. Na die vier jaar staat ze, inmiddels drieëntwintig, weer aan de startlijn. Mag ze meedoen? Of heeft ze haar recht daarop voorgoed verspeeld? Over die vraag verschillen sporters, trainers en fans van mening.",
      "Doping zijn middelen die spieren sneller laten groeien, vermoeidheid uitstellen of het herstel versnellen. Ze staan op een verboden lijst omdat ze een oneerlijk voordeel geven én omdat ze op de lange termijn schadelijk kunnen zijn voor hart, lever of hormonen. Wie betrapt wordt, krijgt meestal een schorsing van enkele maanden tot enkele jaren, afhankelijk van het middel en of het de eerste keer is.",
      "Voorstanders van een tweede kans wijzen erop dat mensen kunnen veranderen. Sommige sporters gebruikten doping toen ze nog minderjarig waren, onder druk van een trainer of een land dat resultaten eiste. \"Een straf van vier jaar is al zwaar genoeg,\" zegt een sportjurist. \"Als je die straf hebt uitgezeten, moet je verder kunnen met je leven.\" Sommige teruggekeerde sporters tonen bovendien openlijk spijt en waarschuwen jongere sporters voor dezelfde fout.",
      "Tegenstanders denken vooral aan de sporters die zich wel aan de regels hielden. Zij trainden jarenlang net zo hard, zonder ooit een verboden middel aan te raken, en misten soms het podium omdat een concurrent stiekem voordeel had. Voor hen voelt een tweede kans oneerlijk: de een moest wachten op een eerlijke wedstrijd, de ander krijgt gewoon een nieuwe start. Ook wijzen zij op het voorbeeld dat topsporters geven aan kinderen die naar hen opkijken.",
      "Sportbonden proberen daarom onderscheid te maken. Een sporter die per ongeluk een verboden stofje binnenkreeg via een besmet voedingssupplement, krijgt vaak een kortere schorsing dan iemand die doelbewust en jarenlang doping gebruikte. Bij een tweede overtreding is de straf meestal levenslang. Toch blijft het lastig om opzet te bewijzen, en dat maakt elke zaak weer anders.",
      "Een makkelijk antwoord bestaat niet. Straf en vergeving, eerlijkheid en menselijkheid trekken allebei aan de discussie, en geen enkele sportbond heeft de perfecte regel gevonden. En wat vind jij?"
    ],
    en: [
      "Imagine this: a nineteen-year-old sprinter tests positive for a banned substance. She gets a four-year ban and is not allowed to compete anymore. After those four years, now twenty-three, she is back on the start line. Should she be allowed to compete? Or has she permanently forfeited that right? Athletes, coaches and fans disagree about that question.",
      "Doping means substances that make muscles grow faster, delay tiredness or speed up recovery. They are on a banned list because they give an unfair advantage and because in the long run they can damage the heart, liver or hormones. Anyone caught usually gets a ban of a few months to a few years, depending on the substance and whether it is a first offence.",
      "Supporters of a second chance point out that people can change. Some athletes used doping while still under age, under pressure from a coach or a country demanding results. \"A four-year punishment is already severe enough,\" says a sports lawyer. \"Once you have served that punishment, you should be able to move on with your life.\" Some returning athletes also openly show regret and warn younger athletes against making the same mistake.",
      "Opponents mainly think of the athletes who did stick to the rules. They trained just as hard for years, without ever touching a banned substance, and sometimes missed the podium because a rival had a secret advantage. For them a second chance feels unfair: one had to wait for a fair race, the other simply gets a fresh start. They also point to the example top athletes set for children who look up to them.",
      "Sports federations therefore try to make a distinction. An athlete who accidentally ingested a banned substance through a contaminated food supplement often gets a shorter ban than someone who used doping deliberately for years. For a second offence the punishment is usually a lifetime ban. Still, proving intent remains difficult, and that makes every case different again.",
      "There is no easy answer. Punishment and forgiveness, fairness and humanity both pull at the discussion, and no sports federation has found the perfect rule. And what do you think?"
    ]
  },
  words: [
    { nl: 'schorsing', en: 'ban / suspension', defNl: 'een periode waarin een sporter niet mag meedoen aan wedstrijden', defEn: 'a period in which an athlete is not allowed to compete' },
    { nl: 'opzet', en: 'intent', defNl: 'iets expres doen, niet per ongeluk', defEn: 'doing something on purpose, not by accident' },
    { nl: 'herstel', en: 'recovery', defNl: 'het proces waarbij je lichaam weer beter wordt na inspanning', defEn: 'the process of your body getting better again after effort' }
  ],
  questions: [
    { id: 'q1', type: 'mc', skill: 'letterlijk',
      q: { nl: 'Hoe lang duurt de schorsing van de sprinter uit het voorbeeld?', en: 'How long is the ban of the sprinter in the example?' },
      options: [ { nl: 'Vier jaar', en: 'Four years' }, { nl: 'Twee jaar', en: 'Two years' }, { nl: 'Tien jaar', en: 'Ten years' }, { nl: 'Eén jaar', en: 'One year' } ],
      answer: 0,
      explain: { nl: 'Alinea 1: "Ze krijgt een schorsing van vier jaar".', en: 'Paragraph 1: "She gets a four-year ban".' } },
    { id: 'q2', type: 'sort', skill: 'feitmening',
      q: { nl: 'Feit of mening? Zet elke zin in de goede groep.', en: 'Fact or opinion? Put every sentence in the right group.' },
      bins: [{ nl: 'Feit', en: 'Fact' }, { nl: 'Mening', en: 'Opinion' }],
      items: [
        { nl: 'Doping kan schadelijk zijn voor hart, lever of hormonen.', en: 'Doping can be harmful to the heart, liver or hormones.', bin: 0 },
        { nl: 'Een straf van vier jaar is al zwaar genoeg.', en: 'A four-year punishment is already severe enough.', bin: 1 },
        { nl: 'Bij een tweede overtreding is de straf meestal levenslang.', en: 'For a second offence the punishment is usually a lifetime ban.', bin: 0 },
        { nl: 'Een tweede kans voelt oneerlijk voor wie zich wel aan de regels hield.', en: 'A second chance feels unfair for those who did stick to the rules.', bin: 1 }
      ],
      explain: { nl: 'Wat de tekst als regel of cijfer geeft, kun je nameten: dat zijn feiten. "Al zwaar genoeg" en "voelt oneerlijk" zijn oordelen van mensen.', en: 'What the text gives as a rule or a number can be checked: those are facts. "Already enough" and "feels unfair" are judgements people make.' } },
    { id: 'q3', type: 'mc', skill: 'doel',
      q: { nl: 'Wat wil de schrijver met deze tekst vooral bereiken?', en: 'What is the writer mainly trying to achieve with this text?' },
      options: [
        { nl: 'Je laten nadenken over een moeilijke vraag door beide kanten eerlijk te laten zien', en: 'Make you think about a difficult question by showing both sides fairly' },
        { nl: 'Je overtuigen dat alle sporters die doping gebruikten voor altijd geschorst moeten blijven', en: 'Convince you that every athlete who used doping should stay banned forever' },
        { nl: 'Uitleggen hoe je doping herkent in een laboratorium', en: 'Explain how doping is detected in a laboratory' },
        { nl: 'Je laten lachen om een grappig verhaal over sport', en: 'Make you laugh with a funny story about sport' }
      ], answer: 0,
      explain: { nl: 'De schrijver geeft eerst de voorstanders het woord, dan de tegenstanders, en eindigt met "En wat vind jij?". Dat is geen overtuigen maar laten nadenken.', en: 'The writer gives the supporters a voice, then the opponents, and ends with "what do you think?". That is inviting thought, not persuading.' } },
    { id: 'q4', type: 'mc', skill: 'verwijswoorden',
      q: { nl: '"Voor hen voelt een tweede kans oneerlijk." Naar wie verwijst "hen"?', en: '"For them a second chance feels unfair." Who does "them" refer to?' },
      options: [
        { nl: 'Naar de sporters die zich wel aan de regels hielden', en: 'To the athletes who did stick to the rules' },
        { nl: 'Naar de sporters die doping gebruikten', en: 'To the athletes who used doping' },
        { nl: 'Naar de sportbonden', en: 'To the sports federations' },
        { nl: 'Naar de trainers die druk uitoefenden', en: 'To the coaches who put on pressure' }
      ], answer: 0,
      explain: { nl: 'Alinea 4 begint met "de sporters die zich wel aan de regels hielden". "Hen" pakt die groep verderop weer op.', en: 'Paragraph 4 starts with "the athletes who did stick to the rules". "Them" picks up that group again later on.' } },
    { id: 'q5', type: 'multi', skill: 'gevolgtrekking',
      q: { nl: 'Welke twee argumenten gebruiken voorstanders van een tweede kans? Kies er 2.', en: 'Which two arguments do supporters of a second chance use? Pick 2.' },
      options: [
        { nl: 'Mensen kunnen veranderen, zeker als ze jong fouten maakten', en: 'People can change, especially if they made mistakes when young' },
        { nl: 'Een uitgezeten straf zou niet voor altijd moeten blijven meetellen', en: 'A served punishment should not keep counting forever' },
        { nl: 'Doping is nooit echt schadelijk voor de gezondheid', en: 'Doping is never really harmful to health' },
        { nl: 'Sportbonden verdienen meer geld met dopingzaken', en: 'Sports federations earn more money from doping cases' }
      ], answer: [0, 1],
      explain: { nl: 'Alinea 3 noemt precies deze twee argumenten. Over gezondheid of geld voor sportbonden zegt de tekst iets anders of niets.', en: 'Paragraph 3 names exactly these two arguments. The text says something different or nothing about health or money for federations.' } },
    { id: 'q6', type: 'tf', skill: 'gevolgtrekking',
      q: { nl: 'Volgens de tekst krijgt elke sporter die doping gebruikt altijd dezelfde straf.', en: 'According to the text, every athlete who uses doping always gets the same punishment.' },
      answer: false,
      explain: { nl: 'Alinea 5 legt uit dat de straf verschilt: per ongeluk en doelbewust gebruik leiden tot een andere schorsing.', en: 'Paragraph 5 explains that the punishment differs: accidental and deliberate use lead to a different ban.' } },
    { id: 'q7', type: 'mc', skill: 'structuur',
      q: { nl: 'Alinea 5 gaat over het maken van onderscheid tussen soorten dopinggevallen. Wat is de functie van die alinea in de hele tekst?', en: 'Paragraph 5 is about making a distinction between types of doping cases. What is the function of that paragraph in the whole text?' },
      options: [
        { nl: 'Ze voegt nuance toe aan het felle voor-en-tegen door te laten zien dat niet elk geval hetzelfde is', en: 'It adds nuance to the sharp for-and-against by showing that not every case is the same' },
        { nl: 'Ze herhaalt het argument van de voorstanders', en: 'It repeats the supporters’ argument' },
        { nl: 'Ze vertelt het verhaal van de sprinter opnieuw', en: 'It tells the sprinter’s story again' },
        { nl: 'Ze geeft het laatste woord aan de tegenstanders', en: 'It gives the last word to the opponents' }
      ], answer: 0,
      explain: { nl: 'Na de scherpe tegenstelling in alinea 3 en 4 laat alinea 5 zien dat sportbonden juist per geval kijken.', en: 'After the sharp contrast in paragraphs 3 and 4, paragraph 5 shows that federations actually look at each case individually.' } },
    { id: 'q8', type: 'mc', skill: 'samenvatten',
      q: { nl: 'Welke samenvatting past het beste bij de hele tekst?', en: 'Which summary fits the whole text best?' },
      options: [
        { nl: 'Sporters die doping gebruikten mogen na hun schorsing terugkeren, maar daarover verschillen mensen van mening: sommigen vinden dat straf genoeg is, anderen vinden het oneerlijk tegenover eerlijke sporters', en: 'Athletes who used doping may return after their ban, but people disagree about that: some think punishment is enough, others find it unfair to clean athletes' },
        { nl: 'Doping is een middel dat spieren sneller laat groeien en daarom door alle sporters gebruikt wordt', en: 'Doping is a substance that makes muscles grow faster and is therefore used by all athletes' },
        { nl: 'Sportjuristen bepalen altijd hoe lang een schorsing duurt, ongeacht het middel', en: 'Sports lawyers always decide how long a ban lasts, regardless of the substance' },
        { nl: 'Sporters die eerlijk trainen, winnen nooit een medaille', en: 'Athletes who train honestly never win a medal' }
      ], answer: 0,
      explain: { nl: 'Een goede samenvatting pakt van elke alinea de kern: het dilemma, wat doping is, voor, tegen, nuance en open slot. De andere antwoorden zijn onjuist of losse details.', en: 'A good summary takes the core of each paragraph: the dilemma, what doping is, for, against, nuance and open ending. The other answers are incorrect or single details.' } },
    { id: 'q9', type: 'mc', skill: 'woordenschat',
      q: { nl: 'In de tekst staat: "Toch blijft het lastig om opzet te bewijzen." Wat betekent opzet hier?', en: 'The text says: "Still, proving intent remains difficult." What does intent mean here?' },
      options: [
        { nl: 'Dat iemand iets expres deed, niet per ongeluk', en: 'That someone did something on purpose, not by accident' },
        { nl: 'Dat iemand heel snel rent', en: 'That someone runs very fast' },
        { nl: 'Dat iemand een medaille wint', en: 'That someone wins a medal' },
        { nl: 'Dat iemand een schorsing krijgt', en: 'That someone gets a ban' }
      ], answer: 0,
      explain: { nl: 'Opzet staat tegenover per ongeluk: het is iets bewust en expres doen.', en: 'Intent is the opposite of accidental: it means doing something consciously and on purpose.' } }
  ]
},
{
  id: 'sport-11', topic: 'sport', level: 1, emoji: '🏊', scene: 'water',
  title: { nl: 'Het zwemdiploma van Sara', en: 'Sara’s swimming certificate' },
  text: {
    nl: [
      "Het is zaterdagochtend. Sara staat in haar kleren aan de rand van het zwembad. Haar knieën trillen een beetje. Vandaag doet ze examen voor haar zwemdiploma A.",
      "In Nederland is er veel water: sloten, rivieren en de zee. Daarom leren bijna alle kinderen zwemmen. Met een zwemdiploma laat je zien dat je jezelf kunt redden als je per ongeluk in het water valt.",
      "Eerst springt Sara met haar kleren en schoenen aan in het water. Die kleren zijn zwaar! Dan zwemt ze naar de overkant. Daarna moet ze onder een mat door zwemmen, met haar ogen open. Als laatste blijft ze een hele minuut drijven.",
      "Op de kant klappen papa en haar kleine broertje. De badmeester steekt zijn duim op. Sara klimt uit het water en rilt, maar ze lacht van oor tot oor.",
      "Na afloop krijgt ze een diploma met haar naam erop. Maar Sara weet dat ze nog niet klaar is. Ze wil ook diploma B en C halen, zodat ze later veilig in de zee kan zwemmen."
    ],
    en: [
      "It is Saturday morning. Sara stands fully dressed at the edge of the swimming pool. Her knees are shaking a little. Today she takes the test for her swimming certificate A.",
      "The Netherlands has a lot of water: ditches, rivers and the sea. That is why almost all children learn to swim. With a swimming certificate you show that you can save yourself if you fall into the water by accident.",
      "First Sara jumps into the water with her clothes and shoes on. Those clothes are heavy! Then she swims to the other side. After that she has to swim under a mat, with her eyes open. Finally she floats for a whole minute.",
      "At the side of the pool, Dad and her little brother clap. The lifeguard gives a thumbs up. Sara climbs out of the water and shivers, but she is grinning from ear to ear.",
      "Afterwards she gets a certificate with her name on it. But Sara knows she is not finished yet. She also wants to get certificates B and C, so that later she can swim safely in the sea."
    ]
  },
  words: [
    { nl: 'examen', en: 'test / exam', defNl: 'een toets waarbij je laat zien wat je kunt', defEn: 'a test where you show what you can do' },
    { nl: 'drijven', en: 'to float', defNl: 'bovenop het water blijven zonder te zinken', defEn: 'to stay on top of the water without sinking' },
    { nl: 'badmeester', en: 'lifeguard', defNl: 'iemand die in het zwembad let op de zwemmers', defEn: 'someone at the pool who watches over the swimmers' }
  ],
  questions: [
    { id: 'q1', type: 'mc', skill: 'letterlijk',
      q: { nl: 'Waarom leren bijna alle kinderen in Nederland zwemmen?', en: 'Why do almost all children in the Netherlands learn to swim?' },
      options: [
        { nl: 'Omdat zwemmen een schoolvak is', en: 'Because swimming is a school subject' },
        { nl: 'Omdat er in Nederland veel water is', en: 'Because there is a lot of water in the Netherlands' },
        { nl: 'Omdat je dan een prijs wint', en: 'Because you win a prize' },
        { nl: 'Omdat het zwembad gratis is', en: 'Because the pool is free' }
      ], answer: 1,
      explain: { nl: 'Alinea 2: "In Nederland is er veel water... Daarom leren bijna alle kinderen zwemmen."',
                 en: 'Paragraph 2: "The Netherlands has a lot of water... That is why almost all children learn to swim."' } },
    { id: 'q2', type: 'tf', skill: 'letterlijk',
      q: { nl: 'Sara springt in haar badpak in het water.', en: 'Sara jumps into the water in her swimsuit.' },
      answer: false,
      explain: { nl: 'Niet waar. Ze springt "met haar kleren en schoenen aan" in het water.',
                 en: 'False. She jumps in "with her clothes and shoes on".' } },
    { id: 'q3', type: 'gap', skill: 'woordenschat',
      q: { nl: 'Een hele minuut ___ betekent: bovenop het water blijven zonder te zinken.', en: 'To ___ for a whole minute means: staying on top of the water without sinking.' },
      options: [
        { nl: 'duiken', en: 'dive' },
        { nl: 'drijven', en: 'float' },
        { nl: 'rillen', en: 'shiver' },
        { nl: 'klappen', en: 'clap' }
      ], answer: 1,
      explain: { nl: 'Drijven is bovenop het water blijven liggen. Duiken is juist onder water gaan.',
                 en: 'Floating is staying on top of the water. Diving is the opposite: going under.' } },
    { id: 'q4', type: 'order', skill: 'volgorde',
      q: { nl: 'Zet de onderdelen van het examen in de goede volgorde.', en: 'Put the parts of the test in the right order.' },
      items: [
        { nl: 'Met kleren en schoenen aan in het water springen.', en: 'Jump into the water with clothes and shoes on.' },
        { nl: 'Naar de overkant zwemmen.', en: 'Swim to the other side.' },
        { nl: 'Onder een mat door zwemmen.', en: 'Swim under a mat.' },
        { nl: 'Een minuut blijven drijven.', en: 'Float for a minute.' }
      ], answer: [0, 1, 2, 3],
      explain: { nl: 'Let op de woorden "eerst", "dan", "daarna" en "als laatste" in alinea 3.',
                 en: 'Look at the words "first", "then", "after that" and "finally" in paragraph 3.' } },
    { id: 'q5', type: 'mc', skill: 'hoofdgedachte',
      q: { nl: 'Waar gaat dit verhaal vooral over?', en: 'What is this story mainly about?' },
      options: [
        { nl: 'Hoe je een zwembad schoonmaakt', en: 'How to clean a swimming pool' },
        { nl: 'Waarom zee gevaarlijk is', en: 'Why the sea is dangerous' },
        { nl: 'De broer van Sara', en: 'Sara’s brother' },
        { nl: 'Hoe Sara haar zwemdiploma A haalt', en: 'How Sara gets her swimming certificate A' }
      ], answer: 3,
      explain: { nl: 'Het hele verhaal volgt Sara tijdens haar zwemexamen, van zenuwen tot diploma.',
                 en: 'The whole story follows Sara during her swimming test, from nerves to certificate.' } }
  ]
},

{
  id: 'sport-12', topic: 'sport', level: 6, emoji: '🎮', scene: 'stadium',
  title: { nl: 'Is gamen een echte sport?', en: 'Is gaming a real sport?' },
  text: {
    nl: [
      "In een uitverkochte hal zitten duizenden fans te schreeuwen. Op een reusachtig scherm zie je hoe twee teams het tegen elkaar opnemen. Toch staat er niemand op een veld: de spelers zitten achter een computer. Dit is e-sport, wedstrijden in videogames. Er wordt om prijzengeld van miljoenen euro's gespeeld, en sommige finales trekken online meer kijkers dan een grote voetbalwedstrijd.",
      "Maar is dit eigenlijk wel sport? Daarover zijn mensen het flink oneens. Volgens het woordenboek is sport een activiteit waarbij je je lichaam beweegt en inspant, vaak in een wedstrijd. Critici zeggen daarom: wie alleen met zijn vingers klikt, beweegt te weinig om een sporter te heten. Voor hen hoort bij sport ook zweet. Zij vinden dat het woord sport zijn betekenis verliest als alles een sport mag worden.",
      "Voorstanders zien dat anders. Een topgamer maakt soms meer dan driehonderd bewegingen per minuut met muis en toetsenbord. Hij moet razendsnel beslissen, samenwerken met zijn team en urenlang geconcentreerd blijven. Professionele teams hebben een trainer, een vast trainingsschema en soms zelfs een voedingsdeskundige. Ook wijzen voorstanders erop dat schaken en darten in veel landen als sport gelden, terwijl je daarbij nauwelijks rent.",
      "Er is ook een groep die vooral twijfelt vanwege de gezondheid. Wie elke dag uren achter een scherm zit, beweegt te weinig. Artsen waarschuwen voor een slechte houding, pijn in polsen en ogen, en voor slecht slapen door het licht van het scherm. Serieuze e-sporters trainen daarom ook buiten de game: ze gaan hardlopen of naar de sportschool, zodat hun lichaam het volhoudt. Sommige teams hebben zelfs een fysiotherapeut in dienst.",
      "Sportorganisaties moeten intussen kiezen. Het Internationaal Olympisch Comité organiseerde in 2023 voor het eerst een Olympische e-sportweek. Er werd vooral gespeeld met spellen die op een echte sport lijken, zoals virtueel fietsen en tennis. Spellen waarin spelers op elkaar schieten, bleven buiten de deur, hoewel die bij jongeren juist heel populair zijn. Zo koos het comité voor e-sport, maar wel op zijn eigen voorwaarden.",
      "Wat vind jij? Misschien is de vraag niet eens of gamen sport is, maar of we het woord sport moeten veranderen. Honderd jaar geleden kende niemand snowboarden, en inmiddels is het gewoon een olympisch onderdeel. Ook skateboarden en breakdance mochten pas kort geleden naar de Spelen. Woorden groeien mee met de tijd, net als de spelletjes die we spelen."
    ],
    en: [
      "In a sold-out hall thousands of fans are screaming. On a gigantic screen you see two teams taking each other on. Yet nobody is standing on a pitch: the players are sitting at computers. This is esports, competitions in video games. They play for prize money of millions of euros, and some finals attract more viewers online than a big football match.",
      "But is this actually sport? People strongly disagree about that. According to the dictionary, sport is an activity in which you move and exert your body, often in a competition. So critics say: anyone who only clicks with their fingers moves too little to be called an athlete. For them, sport also means sweat. They feel the word sport loses its meaning if everything is allowed to be a sport.",
      "Supporters see it differently. A top gamer sometimes makes more than three hundred movements a minute with mouse and keyboard. He has to decide lightning fast, work with his team and stay focused for hours. Professional teams have a coach, a fixed training schedule and sometimes even a nutritionist. Supporters also point out that chess and darts count as sports in many countries, even though you hardly run at all.",
      "There is also a group that has doubts mainly because of health. Anyone who sits behind a screen for hours every day moves too little. Doctors warn about bad posture, pain in wrists and eyes, and poor sleep because of the light from the screen. That is why serious esports players also train outside the game: they go running or to the gym, so that their bodies can keep it up. Some teams even employ a physiotherapist.",
      "Meanwhile sports organisations have to choose. In 2023 the International Olympic Committee held an Olympic Esports Week for the first time. Mostly they played games that resemble a real sport, such as virtual cycling and tennis. Games in which players shoot at each other were kept out, although those are especially popular with young people. So the committee chose esports, but on its own terms.",
      "What do you think? Perhaps the question is not even whether gaming is sport, but whether we should change the word sport. A hundred years ago nobody knew snowboarding, and now it is simply an Olympic event. Skateboarding and breakdancing were also only allowed into the Games recently. Words grow with the times, just like the games we play."
    ]
  },
  words: [
    { nl: 'critici', en: 'critics', defNl: 'mensen die ergens kritiek op hebben', defEn: 'people who criticise something' },
    { nl: 'voedingsdeskundige', en: 'nutritionist', defNl: 'iemand die veel weet over gezond eten', defEn: 'someone who knows a lot about healthy eating' },
    { nl: 'voorwaarden', en: 'terms / conditions', defNl: 'de regels waaraan iets moet voldoen', defEn: 'the rules something has to meet' }
  ],
  questions: [
    { id: 'q1', type: 'mc', skill: 'letterlijk',
      q: { nl: 'Hoeveel bewegingen per minuut maakt een topgamer soms?', en: 'How many movements a minute does a top gamer sometimes make?' },
      options: [
        { nl: 'Meer dan driehonderd', en: 'More than three hundred' },
        { nl: 'Ongeveer dertig', en: 'About thirty' },
        { nl: 'Precies honderd', en: 'Exactly a hundred' },
        { nl: 'Meer dan duizend', en: 'More than a thousand' }
      ], answer: 0,
      explain: { nl: 'Alinea 3: "Een topgamer maakt soms meer dan driehonderd bewegingen per minuut."',
                 en: 'Paragraph 3: "A top gamer sometimes makes more than three hundred movements a minute."' } },
    { id: 'q2', type: 'find', skill: 'structuur',
      q: { nl: 'Welke zin uit de tekst geeft een argument van de critici?', en: 'Which sentence from the text gives an argument of the critics?' },
      options: [
        { nl: 'Critici zeggen daarom: wie alleen met zijn vingers klikt, beweegt te weinig om een sporter te heten.', en: 'So critics say: anyone who only clicks with their fingers moves too little to be called an athlete.' },
        { nl: 'Professionele teams hebben een trainer, een vast trainingsschema en soms zelfs een voedingsdeskundige.', en: 'Professional teams have a coach, a fixed training schedule and sometimes even a nutritionist.' },
        { nl: 'Hij moet razendsnel beslissen, samenwerken met zijn team en urenlang geconcentreerd blijven.', en: 'He has to decide lightning fast, work with his team and stay focused for hours.' },
        { nl: 'Woorden groeien mee met de tijd, net als de spelletjes die we spelen.', en: 'Words grow with the times, just like the games we play.' }
      ], answer: 0,
      explain: { nl: 'Alleen de eerste zin is een argument tégen. De andere zinnen horen bij de voorstanders of bij de schrijver.',
                 en: 'Only the first sentence is an argument against. The others belong to the supporters or to the writer.' } },
    { id: 'q3', type: 'match', skill: 'woordenschat',
      q: { nl: 'Klik het woord en daarna de juiste betekenis.', en: 'Click the word and then the correct meaning.' },
      pairs: [
        { word: { nl: 'critici', en: 'critics' }, meaning: { nl: 'mensen die ergens kritiek op hebben', en: 'people who criticise something' } },
        { word: { nl: 'voorstanders', en: 'supporters' }, meaning: { nl: 'mensen die ergens vóór zijn', en: 'people who are in favour of something' } },
        { word: { nl: 'voedingsdeskundige', en: 'nutritionist' }, meaning: { nl: 'iemand die weet wat gezond eten is', en: 'someone who knows what healthy food is' } }
      ],
      explain: { nl: 'Deze drie woorden komen allemaal uit de tekst.', en: 'All three words come from the text.' } },
    { id: 'q4', type: 'mc', skill: 'verwijswoorden',
      q: { nl: '"Hij moet razendsnel beslissen." Wie is "hij"?', en: '"He has to decide lightning fast." Who is "he"?' },
      options: [
        { nl: 'Een topgamer', en: 'A top gamer' },
        { nl: 'De trainer', en: 'The coach' },
        { nl: 'Een arts', en: 'A doctor' },
        { nl: 'De voedingsdeskundige', en: 'The nutritionist' }
      ], answer: 0,
      explain: { nl: 'De zin ervoor gaat over een topgamer. "Hij" verwijst daarnaar terug.',
                 en: 'The sentence before is about a top gamer. "He" points back to that.' } },
    { id: 'q5', type: 'sort', skill: 'feitmening',
      q: { nl: 'Feit of mening? Zet elke zin in de goede groep.', en: 'Fact or opinion? Put every sentence in the right group.' },
      bins: [{ nl: 'Feit', en: 'Fact' }, { nl: 'Mening', en: 'Opinion' }],
      items: [
        { nl: 'In 2023 organiseerde het IOC een Olympische e-sportweek.', en: 'In 2023 the IOC held an Olympic Esports Week.', bin: 0 },
        { nl: 'Wie alleen klikt, is geen echte sporter.', en: 'Anyone who only clicks is not a real athlete.', bin: 1 },
        { nl: 'Artsen waarschuwen voor pijn in polsen en ogen.', en: 'Doctors warn about pain in wrists and eyes.', bin: 0 },
        { nl: 'E-sport is spannender om naar te kijken dan voetbal.', en: 'Esports is more exciting to watch than football.', bin: 1 }
      ],
      explain: { nl: 'Wat het IOC deed en waar artsen voor waarschuwen, kun je nagaan: feiten. De andere twee zijn oordelen.',
                 en: 'What the IOC did and what doctors warn about can be checked: facts. The other two are judgements.' } },
    { id: 'q6', type: 'mc', skill: 'structuur',
      q: { nl: 'Hoe is deze tekst opgebouwd?', en: 'How is this text built up?' },
      options: [
        { nl: 'Een voorbeeld, dan de critici, de voorstanders en de twijfelaars, en aan het eind een vraag aan de lezer',
          en: 'An example, then the critics, the supporters and the doubters, and at the end a question to the reader' },
        { nl: 'Een verhaal over één gamer van begin tot eind', en: 'A story about one gamer from beginning to end' },
        { nl: 'Alleen argumenten vóór e-sport', en: 'Only arguments for esports' },
        { nl: 'Een handleiding om beter te worden in games', en: 'A manual for getting better at games' }
      ], answer: 0,
      explain: { nl: 'Het is een betoog met twee kanten: elke groep krijgt een eigen alinea, en de laatste alinea begint met "Wat vind jij?"',
                 en: 'It is a two-sided argument: each group gets its own paragraph, and the last one starts with "What do you think?"' } },
    { id: 'q7', type: 'mc', skill: 'doel',
      q: { nl: 'Wat is het doel van deze tekst?', en: 'What is the purpose of this text?' },
      options: [
        { nl: 'De lezer laten nadenken door beide kanten van de discussie te laten zien', en: 'Make the reader think by showing both sides of the discussion' },
        { nl: 'De lezer overhalen om e-sporter te worden', en: 'Persuade the reader to become an esports player' },
        { nl: 'Uitleggen hoe een schietspel werkt', en: 'Explain how a shooting game works' },
        { nl: 'Vertellen hoe laat de finale begint', en: 'Say what time the final starts' }
      ], answer: 0,
      explain: { nl: 'De schrijver kiest geen kant en vraagt de lezer om zelf een mening te vormen.',
                 en: 'The writer takes no side and asks the reader to form their own opinion.' } },
    { id: 'q8', type: 'multi', skill: 'letterlijk',
      q: { nl: 'Wat doen serieuze e-sporters volgens de tekst om gezond te blijven en beter te worden? Kies er 2.',
           en: 'According to the text, what do serious esports players do to stay healthy and get better? Pick 2.' },
      options: [
        { nl: 'Ze gaan hardlopen of naar de sportschool', en: 'They go running or to the gym' },
        { nl: 'Ze trainen volgens een vast schema', en: 'They train to a fixed schedule' },
        { nl: 'Ze spelen alleen schietspellen', en: 'They only play shooting games' },
        { nl: 'Ze slapen zo weinig mogelijk', en: 'They sleep as little as possible' }
      ], answer: [0, 1],
      explain: { nl: 'Alinea 3 noemt het vaste trainingsschema, alinea 4 het hardlopen en de sportschool.',
                 en: 'Paragraph 3 names the fixed training schedule, paragraph 4 the running and the gym.' } },
    { id: 'q9', type: 'tf', skill: 'letterlijk',
      q: { nl: 'Bij de Olympische e-sportweek mochten ook spellen meedoen waarin spelers op elkaar schieten.',
           en: 'Games in which players shoot at each other were allowed at the Olympic Esports Week.' },
      answer: false,
      explain: { nl: 'Alinea 5: "Spellen waarin spelers op elkaar schieten, bleven buiten de deur."',
                 en: 'Paragraph 5: "Games in which players shoot at each other were kept out."' } },
    { id: 'q10', type: 'find', skill: 'hoofdgedachte',
      q: { nl: 'Welke zin laat het best zien wat de schrijver zelf denkt?', en: 'Which sentence best shows what the writer thinks?' },
      options: [
        { nl: 'Maar is dit eigenlijk wel sport?', en: 'But is this actually sport?' },
        { nl: 'Sportorganisaties moeten intussen kiezen.', en: 'Meanwhile sports organisations have to choose.' },
        { nl: 'Wie elke dag uren achter een scherm zit, beweegt te weinig.', en: 'Anyone who sits behind a screen for hours every day moves too little.' },
        { nl: 'Misschien is de vraag niet eens of gamen sport is, maar of we het woord sport moeten veranderen.', en: 'Perhaps the question is not even whether gaming is sport, but whether we should change the word sport.' }
      ], answer: 3,
      explain: { nl: 'Pas in de laatste alinea geeft de schrijver een eigen gedachte: misschien moet de betekenis van het woord sport meegroeien.',
                 en: 'Only in the last paragraph does the writer give a thought of their own: perhaps the meaning of the word sport should grow.' } }
  ]
}
]);
