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
