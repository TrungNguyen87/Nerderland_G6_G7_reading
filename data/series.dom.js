/* Vervolgverhaal - Ridders & Vroeger: De wachters van de Dom
   Een lopend verhaal ("wordt vervolgd"): hoofdstuk 1 = groep 6 (niveau 2), 2 = niveau 3,
   3 = groep 7 (niveau 4), 4 = groep 8 (niveau 6). Een hoofdstuk 5 erbij? Zet een nieuw object
   achteraan `chapters` (niveau 6, met een `recap`) en zet een `teaser` op hoofdstuk 4. */
addSeries({
  id: 'dom', topic: 'ridders', emoji: '🐉', more: true,
  title: { nl: 'De wachters van de Dom', en: 'The guardians of the Dom' },
  blurb: { nl: 'Op de Domtoren in Utrecht zit een stenen wezentje dat praten kan. Hij is bang voor hoogtes en hij heeft Lotte nodig om het Hart van de toren terug te vinden.',
           en: 'On the Dom Tower in Utrecht sits a little stone creature that can talk. He is afraid of heights and he needs Lotte to find the Heart of the tower.' },
  ideas: [
    { nl: 'Wat staat er in het briefje van de wachter uit het noorden? Waar is zijn toren?', en: 'What does the note from the guardian in the north say? Where is his tower?' },
    { nl: 'Schrijf over een nacht waarin Gus voor het eerst durft te vliegen.', en: 'Write about a night when Gus dares to fly for the first time.' },
    { nl: 'Wat gebeurt er als iemand anders dan Lotte en Arjun de wachters ontdekt?', en: 'What happens if somebody other than Lotte and Arjun discovers the guardians?' }
  ],
  chapters: [
{
  level: 2, emoji: '🗼', scene: 'castle',
  title: { nl: 'Een steen die niesde', en: 'A stone that sneezed' },
  teaser: { nl: 'Wat is het Hart van de toren, en waar is het gebleven?', en: 'What is the Heart of the tower, and where has it gone?' },
  text: {
    nl: [
      "Lotte zit in groep 6 en ze tekent altijd en overal. Vandaag gaat haar klas naar de Domtoren in Utrecht. Dat is de hoogste kerktoren van Nederland: 112 meter. Er zijn 465 trappen en Lotte telt ze allemaal.",
      "De gids, meneer Van Rijn, vertelt dat de toren meer dan zeshonderd jaar oud is. “Buiten zitten waterspuwers”, zegt hij. Dat zijn stenen figuren met een grote mond. Het regenwater stroomt er doorheen naar buiten. De meeste hebben een boos gezicht.",
      "Lotte blijft achter bij een raampje. Ze pakt haar schetsboek en tekent een klein wezentje op de rand. Het heeft puntoren en een bolle neus. Opeens knippert het wezentje met zijn ogen. Lotte wrijft in haar ogen. Dan niest het: “Hatsjoe!”",
      "“Pardon”, zegt het zacht. “Ik ben stoffig.” Lotte durft bijna niet te ademen. “Kun jij praten?” fluistert ze. “Alleen tegen mensen die goed kijken”, zegt het. “Ik ben Gus. Ik ben al meer dan zeshonderd jaar waterspuwer. En ik ben bang voor hoogtes.” “Op een toren van 112 meter?” “Ja. Dat is niet handig.”",
      "Gus kijkt snel naar links en naar rechts. “Luister”, fluistert hij. “Er is iets verdwenen: het Hart van de toren. Zonder dat Hart worden wij steeds stiller. En als we te stil worden, worden we gewone steen.” Beneden roept meneer Van Rijn dat iedereen moet komen.",
      "“Kom vanavond terug”, zegt Gus. Lotte stopt haar schetsboek in haar tas en loopt de trap af. Bij de laatste bocht kijkt ze nog één keer om. Op de rand zit alleen nog een stenen figuurtje. Maar het steekt heel even zijn tong naar haar uit."
    ],
    en: [
      "Lotte is in group 6 and she draws always and everywhere. Today her class is going to the Dom Tower in Utrecht. It is the tallest church tower in the Netherlands: 112 metres. There are 465 steps and Lotte counts every one.",
      "The guide, Mr Van Rijn, says that the tower is more than six hundred years old. “Outside there are gargoyles,” he says. Those are stone figures with a big mouth. The rainwater flows out through them. Most of them have an angry face.",
      "Lotte stays behind at a little window. She takes out her sketchbook and draws a small creature on the ledge. It has pointed ears and a round nose. Suddenly the creature blinks its eyes. Lotte rubs her eyes. Then it sneezes: “Atchoo!”",
      "“Pardon,” it says softly. “I am dusty.” Lotte hardly dares to breathe. “Can you talk?” she whispers. “Only to people who look carefully,” it says. “I am Gus. I have been a gargoyle for more than six hundred years. And I am afraid of heights.” “On a tower of 112 metres?” “Yes. That is not very handy.”",
      "Gus looks quickly to the left and to the right. “Listen,” he whispers. “Something has disappeared: the Heart of the tower. Without that Heart we are getting quieter and quieter. And if we get too quiet, we become ordinary stone.” Below, Mr Van Rijn calls that everybody must come.",
      "“Come back this evening,” says Gus. Lotte puts her sketchbook in her bag and walks down the stairs. At the last bend she looks back one more time. On the ledge there is only a stone figure. But for a moment it sticks its tongue out at her."
    ]
  },
  words: [
    { nl: 'gids', en: 'guide', defNl: 'iemand die mensen rondleidt en vertelt over een plek', defEn: 'somebody who shows people around and tells them about a place' },
    { nl: 'waterspuwer', en: 'gargoyle', defNl: 'een stenen figuur aan een gebouw waar het regenwater doorheen naar buiten stroomt', defEn: 'a stone figure on a building through which the rainwater flows out' },
    { nl: 'schetsboek', en: 'sketchbook', defNl: 'een schrift waarin je tekeningen maakt', defEn: 'a book in which you make drawings' }
  ],
  questions: [
    { id: 'q1', type: 'mc', skill: 'letterlijk',
      q: { nl: 'Hoe hoog is de Domtoren?', en: 'How tall is the Dom Tower?' },
      options: [
        { nl: '112 meter', en: '112 metres' },
        { nl: '465 meter', en: '465 metres' },
        { nl: '600 meter', en: '600 metres' },
        { nl: '65 meter', en: '65 metres' }
      ], answer: 0,
      explain: { nl: 'Alinea 1: “Dat is de hoogste kerktoren van Nederland: 112 meter.” (De 465 is het aantal trappen.)', en: 'Paragraph 1: “It is the tallest church tower in the Netherlands: 112 metres.” (The 465 is the number of steps.)' } },
    { id: 'q2', type: 'tf', skill: 'letterlijk',
      q: { nl: 'Gus is bang voor hoogtes.', en: 'Gus is afraid of heights.' },
      answer: true,
      explain: { nl: 'Hij zegt het zelf: “En ik ben bang voor hoogtes.”', en: 'He says so himself: “And I am afraid of heights.”' } },
    { id: 'q3', type: 'mc', skill: 'gevolgtrekking',
      q: { nl: 'Waarom kan Lotte Gus horen, en de rest van de klas niet?', en: 'Why can Lotte hear Gus, and the rest of the class cannot?' },
      options: [
        { nl: 'Gus praat alleen met mensen die goed kijken, en Lotte keek goed omdat ze hem tekende', en: 'Gus only talks to people who look carefully, and Lotte looked carefully because she was drawing him' },
        { nl: 'De rest van de klas was te ver weg', en: 'The rest of the class was too far away' },
        { nl: 'Gus kent Lotte al sinds ze klein was', en: 'Gus has known Lotte since she was little' },
        { nl: 'Lotte heeft betere oren dan de anderen', en: 'Lotte has better ears than the others' }
      ], answer: 0,
      explain: { nl: 'Gus zegt: “Alleen tegen mensen die goed kijken.” Lotte tekent een wezentje en kijkt dus extra goed.', en: 'Gus says: “Only to people who look carefully.” Lotte draws a creature and so looks extra carefully.' } },
    { id: 'q4', type: 'order', skill: 'volgorde',
      q: { nl: 'Zet in de volgorde van het verhaal.', en: 'Put these in the order of the story.' },
      items: [
        { nl: 'De gids vertelt over de waterspuwers.', en: 'The guide tells about the gargoyles.' },
        { nl: 'Lotte tekent een wezentje op de rand.', en: 'Lotte draws a creature on the ledge.' },
        { nl: 'Het wezentje niest.', en: 'The creature sneezes.' },
        { nl: 'Gus vertelt dat het Hart verdwenen is.', en: 'Gus says the Heart has disappeared.' }
      ], answer: [0, 1, 2, 3],
      explain: { nl: 'Eerst de gids, dan de tekening, dan de nies en pas daarna Gus’ verhaal.', en: 'First the guide, then the drawing, then the sneeze and only then Gus’s story.' } },
    { id: 'q5', type: 'gap', skill: 'woordenschat',
      q: { nl: 'Een ___ is een stenen figuur aan een gebouw waar regenwater doorheen naar buiten stroomt.', en: 'A ___ is a stone figure on a building through which rainwater flows out.' },
      options: [
        { nl: 'waterspuwer', en: 'gargoyle' },
        { nl: 'schetsboek', en: 'sketchbook' },
        { nl: 'gids', en: 'guide' },
        { nl: 'toren', en: 'tower' }
      ], answer: 0,
      explain: { nl: 'Meneer Van Rijn legt het uit: stenen figuren met een grote mond waar het regenwater doorheen stroomt.', en: 'Mr Van Rijn explains it: stone figures with a big mouth through which the rainwater flows.' } },
    { id: 'q6', type: 'mc', skill: 'gevolgtrekking',
      q: { nl: 'Wat gebeurt er met de stenen wachters als ze te stil worden?', en: 'What happens to the stone guardians if they become too quiet?' },
      options: [
        { nl: 'Ze worden gewone steen', en: 'They become ordinary stone' },
        { nl: 'Ze verhuizen naar een andere toren', en: 'They move to another tower' },
        { nl: 'Ze worden bang voor hoogtes', en: 'They become afraid of heights' },
        { nl: 'Ze gaan op reis', en: 'They go on a journey' }
      ], answer: 0,
      explain: { nl: 'Gus zegt: “als we te stil worden, worden we gewone steen.”', en: 'Gus says: “if we get too quiet, we become ordinary stone.”' } }
  ]
},
{
  level: 3, emoji: '🌪️', scene: 'castle',
  title: { nl: 'Wat de storm meenam', en: 'What the storm took' },
  recap: { nl: 'Lotte ontmoet Gus, een stenen waterspuwer op de Domtoren. Hij is bang voor hoogtes en vertelt dat het Hart van de toren verdwenen is. Zonder het Hart worden de stenen wachters stil, en daarna gewone steen.',
           en: 'Lotte meets Gus, a stone gargoyle on the Dom Tower. He is afraid of heights and says the Heart of the tower has disappeared. Without the Heart the stone guardians become quiet, and then ordinary stone.' },
  teaser: { nl: 'Wat zit er in het holletje achter de losse steen?', en: 'What is in the little hollow behind the loose stone?' },
  text: {
    nl: [
      "Die avond ging Lotte met haar vriend Arjun naar het Domplein. Haar moeder werkte daar nog. Ze is steenhouwer en zet nieuwe stenen in de toren, op de plekken waar de oude kapot zijn. “Blijf in de buurt”, zei ze, en ze klom de steiger op.",
      "Bij de voet van de toren zat Gus op een stenen richel. Hij was nog kleiner dan op de tekening. Arjun staarde. “Hij beweegt echt”, fluisterde hij. “Natuurlijk beweeg ik”, zei Gus gekrenkt. “Ik ben geen standbeeld.”",
      "Gus vertelde over de storm van 1674. Toen stond er naast de toren nog een grote kerk. Een enorme windhoos blies de kerk om, en alleen de toren bleef staan. “Het Hart hing in de muur tussen de toren en de kerk”, zei hij. “Sinds die dag is het weg.” Arjun knikte. “Dat is echt gebeurd. Daarom staat de toren los van de kerk, en is het Domplein leeg.”",
      "“Wat is het Hart eigenlijk?” vroeg Lotte. “Een ronde steen met een zon erop”, zei Gus. “Zolang hij in de toren zat, waren wij elke nacht wakker. Nu zijn we er maar een paar uur per week.” Zijn stem trilde. “Mijn vriendin Marijke slaapt al drie maanden.”",
      "Toen riep Lottes moeder van boven: “Jongens, ik ga naar huis!” Gus dook weg tussen de stenen. Onderweg zei Lottes moeder: “Vandaag vond ik achter een losse steen een klein holletje, aan de kant waar vroeger de kerk zat. Ik dacht aan een nestje.” Lotte en Arjun keken elkaar aan.",
      "“Mogen we morgen meekijken?” vroeg Lotte. “Voor ons werkstuk over de Dom?” “Als jullie niets aanraken”, zei haar moeder."
    ],
    en: [
      "That evening Lotte went with her friend Arjun to the Dom Square. Her mother was still working there. She is a stonemason and puts new stones in the tower, in the places where the old ones are broken. “Stay close by,” she said, and she climbed up the scaffolding.",
      "At the foot of the tower Gus sat on a stone ledge. He was even smaller than in the drawing. Arjun stared. “He really moves,” he whispered. “Of course I move,” said Gus, offended. “I am not a statue.”",
      "Gus told them about the storm of 1674. Back then a big church still stood next to the tower. A huge tornado blew the church down, and only the tower remained standing. “The Heart hung in the wall between the tower and the church,” he said. “Since that day it has been gone.” Arjun nodded. “That really happened. That is why the tower stands apart from the church, and why the Dom Square is empty.”",
      "“What is the Heart, actually?” asked Lotte. “A round stone with a sun on it,” said Gus. “As long as it was in the tower, we were awake every night. Now we are only awake for a few hours a week.” His voice trembled. “My friend Marijke has been asleep for three months.”",
      "Then Lotte’s mother called from above: “Kids, I am going home!” Gus ducked away between the stones. On the way Lotte’s mother said: “Today I found a little hollow behind a loose stone, on the side where the church used to be. I thought it was a nest.” Lotte and Arjun looked at each other.",
      "“May we come and look tomorrow?” asked Lotte. “For our project about the Dom?” “If you do not touch anything,” said her mother."
    ]
  },
  words: [
    { nl: 'steenhouwer', en: 'stonemason', defNl: 'iemand die steen bewerkt en nieuwe stenen in gebouwen zet', defEn: 'somebody who works stone and sets new stones into buildings' },
    { nl: 'steiger', en: 'scaffolding', defNl: 'een frame van buizen en planken waarop je kunt staan om aan een gebouw te werken', defEn: 'a frame of tubes and planks you can stand on to work on a building' },
    { nl: 'windhoos', en: 'tornado', defNl: 'een draaiende, heel sterke wervelwind', defEn: 'a spinning, very strong whirlwind' }
  ],
  questions: [
    { id: 'q1', type: 'mc', skill: 'letterlijk',
      q: { nl: 'Wat doet Lottes moeder voor werk?', en: 'What is Lotte’s mother’s job?' },
      options: [
        { nl: 'Ze is steenhouwer', en: 'She is a stonemason' },
        { nl: 'Ze is gids op de toren', en: 'She is a guide on the tower' },
        { nl: 'Ze is schilder', en: 'She is a painter' },
        { nl: 'Ze is bibliothecaris', en: 'She is a librarian' }
      ], answer: 0,
      explain: { nl: 'Alinea 1: “Ze is steenhouwer en zet nieuwe stenen in de toren.”', en: 'Paragraph 1: “She is a stonemason and puts new stones in the tower.”' } },
    { id: 'q2', type: 'tf', skill: 'letterlijk',
      q: { nl: 'In 1674 bleef de kerk naast de toren gewoon staan.', en: 'In 1674 the church next to the tower simply stayed standing.' },
      answer: false,
      explain: { nl: 'Een windhoos blies de kerk om. Alleen de toren bleef staan.', en: 'A tornado blew the church down. Only the tower remained standing.' } },
    { id: 'q3', type: 'mc', skill: 'gevolgtrekking',
      q: { nl: 'Waarom staat de Domtoren los van de kerk?', en: 'Why does the Dom Tower stand apart from the church?' },
      options: [
        { nl: 'De kerk is in 1674 door een windhoos omgeblazen', en: 'The church was blown down by a tornado in 1674' },
        { nl: 'De toren is later verplaatst', en: 'The tower was moved later' },
        { nl: 'De kerk is nooit gebouwd', en: 'The church was never built' },
        { nl: 'De kerk is afgebroken omdat ze te klein was', en: 'The church was demolished because it was too small' }
      ], answer: 0,
      explain: { nl: 'Arjun zegt: “Dat is echt gebeurd. Daarom staat de toren los van de kerk.” De windhoos van 1674 blies de kerk om.', en: 'Arjun says: “That really happened. That is why the tower stands apart from the church.” The tornado of 1674 blew the church down.' } },
    { id: 'q4', type: 'mc', skill: 'verwijswoorden',
      q: { nl: '“Sinds die dag is het weg.” Waar verwijst “het” naar?', en: '“Since that day it has been gone.” What does “it” refer to?' },
      options: [
        { nl: 'Het Hart', en: 'The Heart' },
        { nl: 'De kerk', en: 'The church' },
        { nl: 'De steiger', en: 'The scaffolding' },
        { nl: 'Het Domplein', en: 'The Dom Square' }
      ], answer: 0,
      explain: { nl: 'De zin ervoor zegt: “Het Hart hing in de muur tussen de toren en de kerk.” Dat Hart is sinds de storm weg.', en: 'The sentence before says: “The Heart hung in the wall between the tower and the church.” That Heart has been gone since the storm.' } },
    { id: 'q5', type: 'order', skill: 'volgorde',
      q: { nl: 'Zet in de volgorde van het verhaal.', en: 'Put these in the order of the story.' },
      items: [
        { nl: 'Lotte en Arjun gaan naar het Domplein.', en: 'Lotte and Arjun go to the Dom Square.' },
        { nl: 'Gus vertelt over de storm van 1674.', en: 'Gus tells about the storm of 1674.' },
        { nl: 'Gus vertelt wat het Hart is.', en: 'Gus tells what the Heart is.' },
        { nl: 'Lottes moeder vertelt over het holletje.', en: 'Lotte’s mother tells about the little hollow.' }
      ], answer: [0, 1, 2, 3],
      explain: { nl: 'Eerst het plein, dan de storm, dan het Hart en ten slotte het holletje van Lottes moeder.', en: 'First the square, then the storm, then the Heart and finally Lotte’s mother’s hollow.' } },
    { id: 'q6', type: 'gap', skill: 'woordenschat',
      q: { nl: 'Een ___ maakt of herstelt dingen van steen.', en: 'A ___ makes or repairs things made of stone.' },
      options: [
        { nl: 'steenhouwer', en: 'stonemason' },
        { nl: 'gids', en: 'guide' },
        { nl: 'windhoos', en: 'tornado' },
        { nl: 'waterspuwer', en: 'gargoyle' }
      ], answer: 0,
      explain: { nl: 'Lottes moeder zet nieuwe stenen in de toren: dat doet een steenhouwer.', en: 'Lotte’s mother puts new stones in the tower: that is what a stonemason does.' } },
    { id: 'q7', type: 'mc', skill: 'hoofdgedachte',
      q: { nl: 'Waar gaat dit hoofdstuk vooral over?', en: 'What is this chapter mainly about?' },
      options: [
        { nl: 'Lotte en Arjun horen van Gus wat het Hart is en vinden een aanwijzing waar het kan zijn', en: 'Lotte and Arjun hear from Gus what the Heart is and find a clue about where it might be' },
        { nl: 'Hoe een steenhouwer werkt', en: 'How a stonemason works' },
        { nl: 'Arjun die niet gelooft dat Gus kan praten', en: 'Arjun not believing Gus can talk' },
        { nl: 'De bouw van een nieuwe kerk', en: 'The building of a new church' }
      ], answer: 0,
      explain: { nl: 'Gus legt uit wat het Hart is en wanneer het verdween, en Lottes moeder vindt toevallig een holletje op de juiste plek.', en: 'Gus explains what the Heart is and when it disappeared, and Lotte’s mother happens to find a hollow in the right place.' } }
  ]
},
{
  level: 4, emoji: '☀️', scene: 'castle',
  title: { nl: 'Het holletje', en: 'The little hollow' },
  recap: { nl: 'Gus vertelt dat het Hart van de toren, een ronde steen met een zon, in de storm van 1674 verdween. Lottes moeder vond bij de voet van de toren een holletje achter een losse steen, aan de kant waar vroeger de kerk zat.',
           en: 'Gus says the Heart of the tower, a round stone with a sun, disappeared in the storm of 1674. Lotte’s mother found a little hollow behind a loose stone at the foot of the tower, on the side where the church used to be.' },
  teaser: { nl: 'Lukt het om het Hart op tijd terug te brengen, voordat de storm komt?', en: 'Will they manage to bring the Heart back in time, before the storm comes?' },
  text: {
    nl: [
      "De volgende avond stonden Lotte en Arjun weer aan de voet van de toren. Gus zat verstopt in Lottes rugzak, want hij durfde niet alleen over de richel te lopen. “Als je me laat vallen, ben ik kapot”, fluisterde hij. “Dan vang ik je”, beloofde Arjun.",
      "Lottes moeder wees naar een losse steen onderin de muur. “Hier zit het holletje. Ik moet even naar boven om iets te meten. Blijven jullie hier? En niets aanraken, hè.” Daarna verdween ze in de steiger.",
      "Zodra ze weg was, gleed Gus uit de rugzak. Samen duwden ze voorzichtig tegen de losse steen. Hij gleed naar buiten. In het donkere holletje lag iets in een stuk oud, grijs doek: een ronde steen, zo groot als een bord. Op de steen was een zon gebeiteld, met twaalf stralen.",
      "Gus legde zijn handje op de steen. Heel even gloeide de zon zacht geel op. “Het Hart!” zei hij, en hij begon te huilen van geluk. Maar toen fronste hij. “Het gloeit zwak. Het is te lang weg geweest. Als het niet snel terugkomt op zijn plek, boven bij de grote klok, wordt het nooit meer sterk.”",
      "“Hoe snel?” vroeg Arjun. Gus keek omhoog naar de wolken. “Er komt een storm. Als de wind morgennacht hard waait en het Hart zit niet op zijn plek, vallen wij voorgoed stil.” Arjun pakte zijn telefoon. “Het weerbericht zegt: windkracht negen, morgenavond.” Ze schrokken allebei.",
      "“Dan hebben we alleen morgen”, zei Lotte. “Mama moet morgenmiddag naar de top van de toren. Misschien mogen wij haar lunch brengen.” Ze wikkelden het Hart weer in het doek. Het was zwaar. Ze moesten het ruim honderd meter omhoog dragen, zonder dat iemand het zag. Buiten werd de lucht al donkerder, alsof het weerbericht gelijk wilde krijgen."
    ],
    en: [
      "The next evening Lotte and Arjun stood at the foot of the tower again. Gus was hiding in Lotte’s rucksack, because he did not dare to walk along the ledge alone. “If you drop me, I will be broken,” he whispered. “Then I will catch you,” promised Arjun.",
      "Lotte’s mother pointed at a loose stone low in the wall. “The hollow is here. I have to go up for a moment to measure something. Will you two stay here? And do not touch anything, okay.” Then she disappeared into the scaffolding.",
      "As soon as she was gone, Gus slid out of the rucksack. Together they carefully pushed against the loose stone. It slid out. In the dark hollow lay something in a piece of old grey cloth: a round stone, as big as a plate. A sun was carved into the stone, with twelve rays.",
      "Gus put his little hand on the stone. For a moment the sun glowed a soft yellow. “The Heart!” he said, and he started crying with happiness. But then he frowned. “It glows weakly. It has been gone too long. If it does not return to its place soon, up by the big bell, it will never become strong again.”",
      "“How soon?” asked Arjun. Gus looked up at the clouds. “A storm is coming. If the wind blows hard tomorrow night and the Heart is not in its place, we will fall silent for good.” Arjun took out his phone. “The weather forecast says: force nine winds, tomorrow evening.” They were both startled.",
      "“Then we only have tomorrow,” said Lotte. “Mum has to go to the top of the tower tomorrow afternoon. Maybe we can bring her lunch.” They wrapped the Heart in the cloth again. It was heavy. They had to carry it up more than a hundred metres, without anybody seeing it. Outside the sky was already getting darker, as if it wanted the weather forecast to be right."
    ]
  },
  words: [
    { nl: 'richel', en: 'ledge', defNl: 'een smalle rand waar je op kunt zitten of staan', defEn: 'a narrow edge you can sit or stand on' },
    { nl: 'gebeiteld', en: 'carved', defNl: 'met een beitel in steen gehakt', defEn: 'cut into stone with a chisel' },
    { nl: 'voorgoed', en: 'for good', defNl: 'voor altijd, zonder dat het nog terugkomt', defEn: 'forever, without it ever coming back' }
  ],
  questions: [
    { id: 'q1', type: 'mc', skill: 'letterlijk',
      q: { nl: 'Waarom zit Gus in Lottes rugzak?', en: 'Why is Gus in Lotte’s rucksack?' },
      options: [
        { nl: 'Hij durft niet alleen over de richel te lopen', en: 'He does not dare to walk along the ledge alone' },
        { nl: 'Hij wil mee naar school', en: 'He wants to go to school' },
        { nl: 'Hij heeft honger', en: 'He is hungry' },
        { nl: 'Lottes moeder mag hem niet zien', en: 'Lotte’s mother may not see him' }
      ], answer: 0,
      explain: { nl: 'Alinea 1: “hij durfde niet alleen over de richel te lopen.”', en: 'Paragraph 1: “he did not dare to walk along the ledge alone.”' } },
    { id: 'q2', type: 'mc', skill: 'letterlijk',
      q: { nl: 'Hoe groot is de ronde steen?', en: 'How big is the round stone?' },
      options: [
        { nl: 'Zo groot als een bord', en: 'As big as a plate' },
        { nl: 'Zo groot als een knikker', en: 'As big as a marble' },
        { nl: 'Zo groot als een tafel', en: 'As big as a table' },
        { nl: 'Zo groot als een voetbal', en: 'As big as a football' }
      ], answer: 0,
      explain: { nl: 'Alinea 3: “een ronde steen, zo groot als een bord.”', en: 'Paragraph 3: “a round stone, as big as a plate.”' } },
    { id: 'q3', type: 'mc', skill: 'verwijswoorden',
      q: { nl: '“Het gloeit zwak. Het is te lang weg geweest.” Waar verwijst “het” naar?', en: '“It glows weakly. It has been gone too long.” What does “it” refer to?' },
      options: [
        { nl: 'Het Hart', en: 'The Heart' },
        { nl: 'De zon op de steen alleen', en: 'Only the sun on the stone' },
        { nl: 'Het doek', en: 'The cloth' },
        { nl: 'Het holletje', en: 'The hollow' }
      ], answer: 0,
      explain: { nl: 'Gus roept net “Het Hart!”. Daarover zegt hij dat het zwak gloeit en te lang weg is geweest.', en: 'Gus has just shouted “The Heart!”. About that he says it glows weakly and has been gone too long.' } },
    { id: 'q4', type: 'multi', skill: 'letterlijk',
      q: { nl: 'Welke dingen kloppen over het Hart? Kies er 3.', en: 'Which things are true about the Heart? Pick 3.' },
      options: [
        { nl: 'Het is rond', en: 'It is round' },
        { nl: 'Er is een zon op gebeiteld', en: 'A sun is carved on it' },
        { nl: 'Het lag in een stuk oud doek', en: 'It lay in a piece of old cloth' },
        { nl: 'Het is gemaakt van hout', en: 'It is made of wood' },
        { nl: 'Het is zo klein als een knikker', en: 'It is as small as a marble' }
      ], answer: [0, 1, 2],
      explain: { nl: 'Het is een ronde steen met een zon, in oud grijs doek. Hout en knikkergrootte staan er niet.', en: 'It is a round stone with a sun, in old grey cloth. Wood and marble size are not mentioned.' } },
    { id: 'q5', type: 'order', skill: 'volgorde',
      q: { nl: 'Zet in de volgorde van het verhaal.', en: 'Put these in the order of the story.' },
      items: [
        { nl: 'Lottes moeder wijst de losse steen aan.', en: 'Lotte’s mother points out the loose stone.' },
        { nl: 'De kinderen schuiven de steen opzij.', en: 'The children push the stone aside.' },
        { nl: 'Gus legt zijn hand op het Hart.', en: 'Gus puts his hand on the Heart.' },
        { nl: 'Arjun leest het weerbericht.', en: 'Arjun reads the weather forecast.' }
      ], answer: [0, 1, 2, 3],
      explain: { nl: 'Eerst de losse steen, dan het Hart, dan het gloeien en ten slotte het weerbericht over de storm.', en: 'First the loose stone, then the Heart, then the glowing and finally the weather forecast about the storm.' } },
    { id: 'q6', type: 'gap', skill: 'woordenschat',
      q: { nl: 'Als iets met een beitel in steen is gehakt, is het in de steen ___.', en: 'If something has been cut into stone with a chisel, it has been ___ in the stone.' },
      options: [
        { nl: 'gebeiteld', en: 'carved' },
        { nl: 'geplakt', en: 'stuck' },
        { nl: 'geschilderd', en: 'painted' },
        { nl: 'gewikkeld', en: 'wrapped' }
      ], answer: 0,
      explain: { nl: 'De zon is met een beitel in de steen gehakt: gebeiteld.', en: 'The sun has been cut into the stone with a chisel: carved.' } },
    { id: 'q7', type: 'mc', skill: 'gevolgtrekking',
      q: { nl: 'Waarom hebben ze haast om het Hart terug te brengen?', en: 'Why are they in a hurry to bring the Heart back?' },
      options: [
        { nl: 'Morgennacht komt er een storm, en zonder Hart op zijn plek vallen de wachters voorgoed stil', en: 'A storm comes tomorrow night, and without the Heart in place the guardians will fall silent for good' },
        { nl: 'Lottes moeder wil naar huis', en: 'Lotte’s mother wants to go home' },
        { nl: 'Het Hart wordt steeds zwaarder', en: 'The Heart is getting heavier and heavier' },
        { nl: 'De toren sluit morgen', en: 'The tower closes tomorrow' }
      ], answer: 0,
      explain: { nl: 'Gus zegt dat ze voorgoed stilvallen als het Hart bij de storm niet op zijn plek zit. Het weerbericht belooft een storm morgenavond.', en: 'Gus says they will fall silent for good if the Heart is not in place for the storm. The weather forecast promises a storm tomorrow evening.' } },
    { id: 'q8', type: 'mc', skill: 'hoofdgedachte',
      q: { nl: 'Waar gaat dit hoofdstuk vooral over?', en: 'What is this chapter mainly about?' },
      options: [
        { nl: 'De kinderen vinden het Hart, maar ze moeten het snel naar boven brengen voordat de storm komt', en: 'The children find the Heart, but they have to carry it up quickly before the storm comes' },
        { nl: 'Hoe je een steen opzij schuift', en: 'How to push a stone aside' },
        { nl: 'Arjun die zijn telefoon verliest', en: 'Arjun losing his phone' },
        { nl: 'Gus die leert vliegen', en: 'Gus learning to fly' }
      ], answer: 0,
      explain: { nl: 'Het gaat om het vinden van het Hart en de tijdsdruk: de storm komt morgenavond.', en: 'It is about finding the Heart and the time pressure: the storm is coming tomorrow evening.' } }
  ]
},
{
  level: 6, emoji: '🌟', scene: 'castle',
  title: { nl: 'Het Hart van de toren', en: 'The Heart of the tower' },
  recap: { nl: 'Achter een losse steen vonden Lotte, Arjun en Gus het Hart van de toren: een ronde steen met een zon. Het gloeit zwak. Als het niet vóór de storm van morgennacht terug is op zijn plek bij de grote klok, vallen de stenen wachters voorgoed stil.',
           en: 'Behind a loose stone Lotte, Arjun and Gus found the Heart of the tower: a round stone with a sun. It glows weakly. If it is not back in its place by the big bell before tomorrow night’s storm, the stone guardians will fall silent for good.' },
  teaser: { nl: 'Wie stuurt Lotte een briefje uit het noorden, en wat staat erin?', en: 'Who sends Lotte a note from the north, and what does it say?' },
  text: {
    nl: [
      "De volgende middag mochten Lotte en Arjun mee naar boven. “Jullie brengen mijn lunch”, zei Lottes moeder, “en jullie blijven bij me.” Het Hart zat in Arjuns rugzak, onder een trui, en Gus in die van Lotte. Bij trede honderd hijgde Arjun. Bij trede tweehonderd hijgde Lotte. Bij trede driehonderd hijgde zelfs Gus, al hoefde hij niet te lopen.",
      "Boven de klokkenkamer wees Gus een ronde holte in de muur aan, naast de grote klok Salvator. “Daar hoort het”, fluisterde hij. Maar Lottes moeder stond tien meter verderop te meten. Arjun bedacht snel een plan. “Mevrouw, ik denk dat ik buiten iets raars zie.” Ze liep naar het raam.",
      "Lotte duwde het Hart in de holte. Het paste precies. Eerst gebeurde er niets. Toen begon de zon op de steen te gloeien, eerst zwak, daarna fel goud. Door de hele toren klonk een zacht gekraak, als het geluid van honderd mensen die tegelijk uitrekken. Bij elk raam knipperde een stenen wezen met zijn ogen.",
      "“Het werkt!” juichte Gus. Hij sprong op en neer, tot hij naar beneden keek en snel weer ging zitten. Marijke, die drie maanden had geslapen, gaapte zo hard dat het stof van de balken viel. “Wat heb ik gemist?” vroeg ze.",
      "Beneden zei Arjun: “We moeten dit filmen. Dan gelooft iedereen ons, en worden de waterspuwers beroemd!” Lotte schudde haar hoofd. “Dan komen er duizenden mensen kijken en zijn ze nooit meer veilig. Sommige dingen zijn mooier als je ze geheimhoudt.” “Maar niemand zal ons geloven”, zei Arjun. “Dat hoeft ook niet”, zei Lotte. “Wij weten het.”",
      "Arjun dacht lang na. Toen stopte hij zijn telefoon in zijn zak. “Oké. Het blijft geheim.” ’s Nachts raasde de storm over Utrecht. Takken vlogen over het plein en de lantaarnpalen zwaaiden heen en weer. Maar boven de daken stond de toren, rustig en rechtop, en op elke hoek zwaaide heel even een klein stenen wezentje. De toren hield stand. Een week later vond Lotte in haar schetsboek een briefje met steenstof erop: ‘Hulp! Mijn toren is hol en mijn Hart is weg. – Een wachter uit het noorden.’ Gus las mee over haar schouder. “Mijn oudoom Bernhard”, zuchtte hij. “Hij is altijd iets kwijt.”"
    ],
    en: [
      "The next afternoon Lotte and Arjun were allowed to go up. “You bring my lunch,” said Lotte’s mother, “and you stay with me.” The Heart was in Arjun’s rucksack, under a jumper, and Gus in Lotte’s. At step one hundred Arjun panted. At step two hundred Lotte panted. At step three hundred even Gus panted, although he did not have to walk.",
      "Above the bell chamber Gus pointed out a round hollow in the wall, next to the great bell Salvator. “It belongs there,” he whispered. But Lotte’s mother was measuring ten metres further on. Arjun quickly thought of a plan. “Excuse me, I think I can see something odd outside.” She walked to the window.",
      "Lotte pushed the Heart into the hollow. It fitted exactly. At first nothing happened. Then the sun on the stone began to glow, first weakly, then bright gold. A soft creaking sounded through the whole tower, like the sound of a hundred people stretching at the same time. At every window a stone creature blinked its eyes.",
      "“It works!” cheered Gus. He jumped up and down, until he looked down and quickly sat again. Marijke, who had slept for three months, yawned so hard that the dust fell from the beams. “What have I missed?” she asked.",
      "Downstairs Arjun said: “We have to film this. Then everybody will believe us, and the gargoyles will become famous!” Lotte shook her head. “Then thousands of people will come to look and they will never be safe again. Some things are nicer when you keep them secret.” “But nobody will believe us,” said Arjun. “That does not matter,” said Lotte. “We know.”",
      "Arjun thought for a long time. Then he put his phone in his pocket. “Okay. It stays a secret.” That night the storm raged over Utrecht. Branches flew across the square and the lamp posts swayed back and forth. But above the roofs stood the tower, calm and upright, and on every corner a little stone creature waved for a moment. The tower held firm. A week later Lotte found a note in her sketchbook with stone dust on it: ‘Help! My tower is hollow and my Heart is gone. – A guardian from the north.’ Gus read along over her shoulder. “My great-uncle Bernhard,” he sighed. “He is always losing something.”"
    ]
  },
  words: [
    { nl: 'holte', en: 'hollow', defNl: 'een open plek of gat binnenin iets', defEn: 'an open space or hole inside something' },
    { nl: 'beroemd', en: 'famous', defNl: 'door heel veel mensen gekend', defEn: 'known by very many people' },
    { nl: 'hijgen', en: 'to pant', defNl: 'snel en zwaar ademen, bijvoorbeeld na het rennen of klimmen', defEn: 'to breathe quickly and heavily, for example after running or climbing' }
  ],
  questions: [
    { id: 'q1', type: 'mc', skill: 'letterlijk',
      q: { nl: 'Waar moet het Hart terug?', en: 'Where does the Heart have to go back?' },
      options: [
        { nl: 'In een ronde holte in de muur, naast de grote klok Salvator', en: 'In a round hollow in the wall, next to the great bell Salvator' },
        { nl: 'In het Domplein', en: 'Into the Dom Square' },
        { nl: 'In de rugzak van Lotte', en: 'Into Lotte’s rucksack' },
        { nl: 'Onder de steiger', en: 'Under the scaffolding' }
      ], answer: 0,
      explain: { nl: 'Alinea 2: “een ronde holte in de muur, naast de grote klok Salvator.”', en: 'Paragraph 2: “a round hollow in the wall, next to the great bell Salvator.”' } },
    { id: 'q2', type: 'find', skill: 'gevolgtrekking',
      q: { nl: 'Welke zin laat zien dat Arjun een plan bedenkt om Lottes moeder weg te lokken?', en: 'Which sentence shows that Arjun thinks of a plan to lure Lotte’s mother away?' },
      options: [
        { nl: 'Bij trede honderd hijgde Arjun.', en: 'At step one hundred Arjun panted.' },
        { nl: 'Mevrouw, ik denk dat ik buiten iets raars zie.', en: 'Excuse me, I think I can see something odd outside.' },
        { nl: 'Lotte duwde het Hart in de holte.', en: 'Lotte pushed the Heart into the hollow.' },
        { nl: 'Het paste precies.', en: 'It fitted exactly.' }
      ], answer: 1,
      explain: { nl: 'Met die zin laat Arjun haar naar het raam lopen, zodat Lotte ongezien het Hart kan neerleggen.', en: 'With that sentence Arjun makes her walk to the window, so that Lotte can place the Heart unseen.' } },
    { id: 'q3', type: 'gap', skill: 'woordenschat',
      q: { nl: 'Wie na het trappenlopen snel en zwaar ademt, ___.', en: 'Whoever breathes quickly and heavily after climbing stairs ___.' },
      options: [
        { nl: 'hijgt', en: 'pants' },
        { nl: 'gaapt', en: 'yawns' },
        { nl: 'juicht', en: 'cheers' },
        { nl: 'fluistert', en: 'whispers' }
      ], answer: 0,
      explain: { nl: 'Arjun, Lotte en zelfs Gus hijgen bij het omhoog klimmen.', en: 'Arjun, Lotte and even Gus pant while climbing up.' } },
    { id: 'q4', type: 'order', skill: 'volgorde',
      q: { nl: 'Zet in de volgorde van het verhaal.', en: 'Put these in the order of the story.' },
      items: [
        { nl: 'De kinderen klimmen met het Hart naar boven.', en: 'The children climb up with the Heart.' },
        { nl: 'Arjun lokt Lottes moeder naar het raam.', en: 'Arjun lures Lotte’s mother to the window.' },
        { nl: 'Het Hart gaat gloeien.', en: 'The Heart begins to glow.' },
        { nl: 'Arjun besluit niet te filmen.', en: 'Arjun decides not to film.' },
        { nl: 'Lotte vindt een briefje in haar schetsboek.', en: 'Lotte finds a note in her sketchbook.' }
      ], answer: [0, 1, 2, 3, 4],
      explain: { nl: 'Eerst de klim en het plan, dan het gloeien, daarna het gesprek over filmen en een week later het briefje.', en: 'First the climb and the plan, then the glowing, after that the conversation about filming and a week later the note.' } },
    { id: 'q5', type: 'mc', skill: 'verwijswoorden',
      q: { nl: '“Dat hoeft ook niet”, zei Lotte. “Wij weten het.” Waar verwijst “het” naar?', en: '“That does not matter,” said Lotte. “We know.” What does “it” refer to?' },
      options: [
        { nl: 'Dat de waterspuwers echt leven en het Hart terug is', en: 'That the gargoyles really live and the Heart is back' },
        { nl: 'Dat de storm voorbij is', en: 'That the storm is over' },
        { nl: 'Hoe hoog de toren is', en: 'How tall the tower is' },
        { nl: 'Dat Arjun een telefoon heeft', en: 'That Arjun has a phone' }
      ], answer: 0,
      explain: { nl: 'Het gesprek gaat over het geheim van de waterspuwers. Lotte bedoelt: wij weten dat ze echt zijn, ook als niemand ons gelooft.', en: 'The conversation is about the gargoyles’ secret. Lotte means: we know they are real, even if nobody believes us.' } },
    { id: 'q6', type: 'sort', skill: 'feitmening',
      q: { nl: 'Feit of mening? Zet elke zin in de goede groep.', en: 'Fact or opinion? Put every sentence in the right group.' },
      bins: [ { nl: 'Feit', en: 'Fact' }, { nl: 'Mening', en: 'Opinion' } ],
      items: [
        { nl: 'De storm raasde ’s nachts over Utrecht.', en: 'The storm raged over Utrecht that night.', bin: 0 },
        { nl: 'Sommige dingen zijn mooier als je ze geheimhoudt.', en: 'Some things are nicer when you keep them secret.', bin: 1 },
        { nl: 'Het Hart paste precies in de holte.', en: 'The Heart fitted exactly in the hollow.', bin: 0 },
        { nl: 'Niemand zal ons geloven.', en: 'Nobody will believe us.', bin: 1 }
      ],
      explain: { nl: 'Wat er gebeurde (een storm, een steen die past) is een feit. “Mooier” en “niemand zal ons geloven” zijn wat iemand denkt of vindt.', en: 'What happened (a storm, a stone that fits) is a fact. “Nicer” and “nobody will believe us” are what somebody thinks.' } },
    { id: 'q7', type: 'multi', skill: 'letterlijk',
      q: { nl: 'Wat gebeurde er toen het Hart op zijn plek lag? Kies er 3.', en: 'What happened when the Heart was in its place? Pick 3.' },
      options: [
        { nl: 'De zon op de steen gloeide fel goud', en: 'The sun on the stone glowed bright gold' },
        { nl: 'Door de hele toren klonk een zacht gekraak', en: 'A soft creaking sounded through the whole tower' },
        { nl: 'Bij elk raam knipperde een stenen wezen', en: 'At every window a stone creature blinked' },
        { nl: 'De klok Salvator viel naar beneden', en: 'The bell Salvator fell down' },
        { nl: 'Lottes moeder zag alles', en: 'Lotte’s mother saw everything' }
      ], answer: [0, 1, 2],
      explain: { nl: 'Alinea 3 noemt het gloeien, het gekraak en de knipperende wezens. De klok viel niet en Lottes moeder keek net de andere kant op.', en: 'Paragraph 3 mentions the glowing, the creaking and the blinking creatures. The bell did not fall and Lotte’s mother was looking the other way.' } },
    { id: 'q8', type: 'mc', skill: 'doel',
      q: { nl: 'Waarom laat de schrijver Lotte en Arjun van mening verschillen over het filmen?', en: 'Why does the writer let Lotte and Arjun disagree about filming?' },
      options: [
        { nl: 'Zodat je twee kanten ziet: iedereen laten weten wat je weet, of het geheim bewaren', en: 'So that you see two sides: letting everybody know what you know, or keeping the secret' },
        { nl: 'Om te laten zien dat Arjun een slechte vriend is', en: 'To show that Arjun is a bad friend' },
        { nl: 'Om uit te leggen hoe je een telefoon gebruikt', en: 'To explain how to use a phone' },
        { nl: 'Om het verhaal korter te maken', en: 'To make the story shorter' }
      ], answer: 0,
      explain: { nl: 'Arjun wil bewijs en roem voor de wachters, Lotte wil ze beschermen. Beide argumenten klinken logisch, en daardoor moet je zelf nadenken.', en: 'Arjun wants proof and fame for the guardians, Lotte wants to protect them. Both arguments sound logical, so you have to think for yourself.' } },
    { id: 'q9', type: 'tf', skill: 'gevolgtrekking',
      q: { nl: 'Arjun filmt de waterspuwers uiteindelijk toch.', en: 'In the end Arjun films the gargoyles after all.' },
      answer: false,
      explain: { nl: 'Hij zegt: “Oké. Het blijft geheim”, en stopt zijn telefoon in zijn zak.', en: 'He says: “Okay. It stays a secret”, and puts his phone in his pocket.' } },
    { id: 'q10', type: 'find', skill: 'hoofdgedachte',
      q: { nl: 'Welke zin laat het best zien wat Lotte belangrijk vindt?', en: 'Which sentence best shows what Lotte finds important?' },
      options: [
        { nl: 'Het Hart zat in Arjuns rugzak, onder een trui, en Gus in die van Lotte.', en: 'The Heart was in Arjun’s rucksack, under a jumper, and Gus in Lotte’s.' },
        { nl: 'Sommige dingen zijn mooier als je ze geheimhoudt.', en: 'Some things are nicer when you keep them secret.' },
        { nl: 'Marijke, die drie maanden had geslapen, gaapte zo hard dat het stof van de balken viel.', en: 'Marijke, who had slept for three months, yawned so hard that the dust fell from the beams.' },
        { nl: 'Gus las mee over haar schouder.', en: 'Gus read along over her shoulder.' }
      ], answer: 1,
      explain: { nl: 'Lotte wil de waterspuwers beschermen en vindt daarom dat het geheim moet blijven. Dat zegt ze met die zin.', en: 'Lotte wants to protect the gargoyles and so thinks the secret should be kept. She says so with that sentence.' } }
  ]
}
  ]
});
