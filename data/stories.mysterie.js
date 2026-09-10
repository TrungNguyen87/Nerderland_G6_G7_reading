/* Wereld 6 - Mysterie & Detective */
addStories([
{
  id: 'mysterie-1', topic: 'mysterie', level: 1, emoji: '🍪', scene: 'school',
  title: { nl: 'De zaak van de lege trommel', en: 'The case of the empty tin' },
  text: {
    nl: [
      "Juf Saar had voor de hele klas koekjes gebakken. De trommel stond op haar bureau. Na de pauze was hij leeg.",
      "\"Wie was er in het lokaal?\" vroeg juf Saar. Drie kinderen staken hun hand op: Tim, Noor en Bas.",
      "Tim zei: \"Ik kwam mijn jas halen. Ik ben meteen weer weggegaan.\" Zijn handen waren schoon.",
      "Noor zei: \"Ik zat te lezen bij het raam.\" Op haar tafel lag een boek, opengeslagen op bladzijde 84.",
      "Bas zei: \"Ik heb niets gezien.\" Hij hield zijn handen achter zijn rug. Om zijn mond zaten kruimels.",
      "Sem, de klassendetective, keek rond. Naast de trommel lag één kruimel. Op de grond liep een spoor van kruimels naar de tafel van Bas.",
      "\"Bas\", zei Sem rustig, \"mag ik je handen even zien?\" Bas werd rood. Zijn vingers zaten onder de chocolade.",
      "\"Sorry\", mompelde hij. \"Ze roken zo lekker. Ik wilde er eentje, en toen nog eentje.\" Juf Saar zuchtte. \"Morgen bak ik nieuwe. En jij helpt.\""
    ],
    en: [
      "Miss Saar had baked biscuits for the whole class. The tin stood on her desk. After break it was empty.",
      "\"Who was in the classroom?\" asked Miss Saar. Three children raised their hands: Tim, Noor and Bas.",
      "Tim said: \"I came to get my coat. I left again straight away.\" His hands were clean.",
      "Noor said: \"I was reading by the window.\" On her table lay a book, open at page 84.",
      "Bas said: \"I did not see anything.\" He kept his hands behind his back. There were crumbs around his mouth.",
      "Sem, the class detective, looked around. Next to the tin lay one crumb. On the floor a trail of crumbs led to Bas’s table.",
      "\"Bas,\" said Sem calmly, \"may I see your hands?\" Bas turned red. His fingers were covered in chocolate.",
      "\"Sorry,\" he mumbled. \"They smelled so good. I wanted one, and then one more.\" Miss Saar sighed. \"Tomorrow I will bake new ones. And you are helping.\""
    ]
  },
  words: [
    { nl: 'spoor', en: 'trail', defNl: 'sporen die iemand achterlaat', defEn: 'marks somebody leaves behind' },
    { nl: 'kruimel', en: 'crumb', defNl: 'heel klein stukje koek of brood', defEn: 'a very small piece of biscuit or bread' },
    { nl: 'mompelen', en: 'to mumble', defNl: 'zacht en onduidelijk praten', defEn: 'to speak softly and unclearly' }
  ],
  questions: [
    { id: 'q1', type: 'mc', skill: 'gevolgtrekking',
      q: { nl: 'Welke twee aanwijzingen bewijzen dat Bas het deed?',
           en: 'Which two clues prove that Bas did it?' },
      options: [
        { nl: 'De kruimels om zijn mond en de chocolade op zijn vingers', en: 'The crumbs around his mouth and the chocolate on his fingers' },
        { nl: 'Zijn jas en zijn boek', en: 'His coat and his book' },
        { nl: 'Zijn rode gezicht en zijn stem', en: 'His red face and his voice' },
        { nl: 'De lege trommel en het raam', en: 'The empty tin and the window' }
      ], answer: 0,
      explain: { nl: 'Kruimels om zijn mond, een kruimelspoor naar zijn tafel en chocolade op zijn vingers.',
                 en: 'Crumbs around his mouth, a trail of crumbs to his table and chocolate on his fingers.' } },
    { id: 'q2', type: 'tf', skill: 'letterlijk',
      q: { nl: 'Noor zat te lezen bij het raam.', en: 'Noor was reading by the window.' },
      answer: true,
      explain: { nl: 'Dat vertelt ze zelf, en haar boek ligt open op tafel.',
                 en: 'She says so herself, and her book lies open on the table.' } },
    { id: 'q3', type: 'mc', skill: 'gevolgtrekking',
      q: { nl: 'Waarom hield Bas zijn handen achter zijn rug?', en: 'Why did Bas keep his hands behind his back?' },
      options: [
        { nl: 'Hij wilde de chocolade op zijn vingers verbergen', en: 'He wanted to hide the chocolate on his fingers' },
        { nl: 'Hij had het koud', en: 'He was cold' },
        { nl: 'Hij had zijn hand bezeerd', en: 'He had hurt his hand' },
        { nl: 'Hij hield iets voor de juf vast', en: 'He was holding something for the teacher' }
      ], answer: 0,
      explain: { nl: 'Even later blijkt dat zijn vingers onder de chocolade zitten.',
                 en: 'A moment later it turns out his fingers are covered in chocolate.' } },
    { id: 'q4', type: 'order', skill: 'volgorde',
      q: { nl: 'Hoe loste Sem de zaak op? Zet op volgorde.', en: 'How did Sem solve the case? Put it in order.' },
      items: [
        { nl: 'De trommel blijkt leeg na de pauze.', en: 'The tin turns out to be empty after break.' },
        { nl: 'Drie kinderen vertellen wat ze deden.', en: 'Three children say what they were doing.' },
        { nl: 'Sem ziet een spoor van kruimels naar de tafel van Bas.', en: 'Sem sees a trail of crumbs to Bas’s table.' },
        { nl: 'Bas laat zijn handen zien en bekent.', en: 'Bas shows his hands and confesses.' }
      ], answer: [0, 1, 2, 3],
      explain: { nl: 'Probleem, verhalen, aanwijzing, bekentenis. Zo werkt bijna elk detectiveverhaal.',
                 en: 'Problem, statements, clue, confession. That is how nearly every detective story works.' } },
    { id: 'q5', type: 'gap', skill: 'woordenschat',
      q: { nl: '"Sorry", mompelde hij. Mompelen is ___.', en: '"Sorry," he mumbled. To mumble is ___.' },
      options: [
        { nl: 'zacht en onduidelijk praten', en: 'to speak softly and unclearly' },
        { nl: 'heel hard roepen', en: 'to shout very loudly' },
        { nl: 'lachen', en: 'to laugh' },
        { nl: 'boos kijken', en: 'to look angry' }
      ], answer: 0,
      explain: { nl: 'Bas schaamt zich, dus hij praat zacht en binnensmonds.',
                 en: 'Bas is ashamed, so he speaks softly and under his breath.' } }
  ]
},

{
  id: 'mysterie-2', topic: 'mysterie', level: 2, emoji: '🔐', scene: 'night',
  title: { nl: 'De code van opa', en: 'Grandpa’s code' },
  text: {
    nl: [
      "Toen opa Bram overleed, liet hij een kleine ijzeren kist na. Op het deksel zat een slot met vier cijfers. In de envelop ernaast zat één briefje: \"Voor Lotte. Je kent me beter dan je denkt.\"",
      "Lotte probeerde eerst zijn geboortejaar. Fout. Toen het jaar waarin oma en hij trouwden. Ook fout. Na vijftien pogingen legde ze het slot boos neer.",
      "Twee dagen later zat ze in zijn oude stoel. Aan de muur hing de foto die hij het mooiste vond: opa op zijn boot, met een enorme snoek in zijn handen. Onder de foto had hij zelf geschreven: \"Mijn beste dag. 7 juli.\"",
      "Lotte hield haar adem in. 0707. Ze draaide de cijfers. Het slot bleef dicht.",
      "Ze keek nog eens goed. Op de achterkant van de lijst stond met potlood een klein getal: 1962. Het jaar van de foto.",
      "Lotte probeerde 0762. Klik.",
      "In de kist lag geen goud. Er lag een dagboek, een oude vishaak en een brief die begon met: \"Als je dit leest, heb je goed gekeken in plaats van goed gegokt. Precies wat ik je altijd wilde leren.\""
    ],
    en: [
      "When Grandpa Bram died, he left behind a small iron chest. On the lid was a lock with four digits. In the envelope beside it was a single note: \"For Lotte. You know me better than you think.\"",
      "Lotte first tried his year of birth. Wrong. Then the year he and Grandma married. Wrong too. After fifteen attempts she angrily put the lock down.",
      "Two days later she was sitting in his old chair. On the wall hung the photo he liked best: Grandpa on his boat, holding an enormous pike. Under the photo he had written himself: \"My best day. 7 July.\"",
      "Lotte held her breath. 0707. She turned the digits. The lock stayed shut.",
      "She looked again more carefully. On the back of the frame a small number was written in pencil: 1962. The year of the photo.",
      "Lotte tried 0762. Click.",
      "There was no gold in the chest. There was a diary, an old fish hook and a letter that began: \"If you are reading this, you looked carefully instead of guessing well. Exactly what I always wanted to teach you.\""
    ]
  },
  words: [
    { nl: 'nalaten', en: 'to leave behind', defNl: 'achterlaten als je overlijdt', defEn: 'to leave behind when you die' },
    { nl: 'poging', en: 'attempt', defNl: 'een keer proberen', defEn: 'one try' },
    { nl: 'gokken', en: 'to guess', defNl: 'iets zomaar proberen zonder te weten', defEn: 'to try something without knowing' }
  ],
  questions: [
    { id: 'q1', type: 'mc', skill: 'gevolgtrekking',
      q: { nl: 'Hoe is Lotte aan de code 0762 gekomen?', en: 'How did Lotte arrive at the code 0762?' },
      options: [
        { nl: 'De maand juli (07) plus de laatste twee cijfers van 1962', en: 'The month July (07) plus the last two digits of 1962' },
        { nl: 'Ze heeft geraden', en: 'She guessed' },
        { nl: 'Het stond in de envelop', en: 'It was written in the envelope' },
        { nl: 'Het was opa’s geboortejaar', en: 'It was Grandpa’s year of birth' }
      ], answer: 0,
      explain: { nl: 'Ze combineerde 7 juli van de foto met 1962 op de achterkant van de lijst.',
                 en: 'She combined 7 July from the photo with 1962 on the back of the frame.' } },
    { id: 'q2', type: 'tf', skill: 'letterlijk',
      q: { nl: 'In de kist lag goud.', en: 'There was gold in the chest.' },
      answer: false,
      explain: { nl: 'Er lag een dagboek, een vishaak en een brief.', en: 'There was a diary, a fish hook and a letter.' } },
    { id: 'q3', type: 'mc', skill: 'hoofdgedachte',
      q: { nl: 'Wat wilde opa Lotte vooral leren?', en: 'What did Grandpa mainly want to teach Lotte?' },
      options: [
        { nl: 'Goed kijken in plaats van gokken', en: 'To look carefully instead of guessing' },
        { nl: 'Hoe je moet vissen', en: 'How to fish' },
        { nl: 'Dat je nooit moet opgeven met sloten', en: 'That you should never give up on locks' },
        { nl: 'Hoe je een dagboek schrijft', en: 'How to write a diary' }
      ], answer: 0,
      explain: { nl: 'De laatste zin van zijn brief zegt het precies zo.',
                 en: 'The last line of his letter says exactly that.' } },
    { id: 'q4', type: 'order', skill: 'volgorde',
      q: { nl: 'Zet Lottes zoektocht op volgorde.', en: 'Put Lotte’s search in order.' },
      items: [
        { nl: 'Ze probeert opa’s geboortejaar en het trouwjaar.', en: 'She tries Grandpa’s birth year and the wedding year.' },
        { nl: 'Ze legt het slot boos neer.', en: 'She angrily puts the lock down.' },
        { nl: 'Ze ziet de datum onder de foto staan.', en: 'She sees the date written under the photo.' },
        { nl: 'Ze vindt het jaartal achter op de lijst.', en: 'She finds the year on the back of the frame.' },
        { nl: 'Het slot klikt open.', en: 'The lock clicks open.' }
      ], answer: [0, 1, 2, 3, 4],
      explain: { nl: 'Eerst gokken, dan opgeven, dan pas echt kijken. Daarna lukt het.',
                 en: 'First guessing, then giving up, then really looking. After that it works.' } },
    { id: 'q5', type: 'gap', skill: 'woordenschat',
      q: { nl: 'Na vijftien pogingen stopte ze. Een poging is ___.', en: 'After fifteen attempts she stopped. An attempt is ___.' },
      options: [
        { nl: 'een keer proberen', en: 'one try' },
        { nl: 'een soort slot', en: 'a kind of lock' },
        { nl: 'een cijfer', en: 'a digit' },
        { nl: 'een uur wachten', en: 'an hour of waiting' }
      ], answer: 0,
      explain: { nl: 'Vijftien keer proberen = vijftien pogingen.', en: 'Fifteen tries = fifteen attempts.' } }
  ]
},

{
  id: 'mysterie-3', topic: 'mysterie', level: 3, emoji: '🖼️', scene: 'night',
  title: { nl: 'De diefstal die niemand zag', en: 'The theft nobody saw' },
  text: {
    nl: [
      "Op een maandagochtend in maart ontdekte een suppoost dat er iets ontbrak. Aan de muur van zaal drie hing alleen nog een lege haak. Het kleine schilderij dat er had gehangen, was verdwenen.",
      "Het vreemde was dat de alarmen niet hadden gewerkt. De deuren waren dicht, de ramen heel, en op de camerabeelden was de hele nacht niets te zien geweest. Toch was het doek weg.",
      "Rechercheur Aisha Bakker liet zich niet meeslepen door spannende theorieën. \"Als niemand binnenkwam,\" zei ze, \"dan was de dief al binnen.\" Ze vroeg om de lijst van iedereen die het gebouw die zondag had verlaten. Er stonden achtentwintig namen op.",
      "Een naam viel op. Een schoonmaker, in dienst sinds twee weken, had het gebouw om 22.14 uur verlaten. Volgens het rooster hoorde hij die avond helemaal niet te werken. Bovendien had hij op de camera een platte kartonnen doos bij zich, terwijl hij binnenkwam met alleen een tas.",
      "Aisha wist genoeg om verder te zoeken, maar niet genoeg om iemand op te pakken. Zo werkt het echt: een verdenking is nog geen bewijs. Pas toen het karton later in een container werd teruggevonden, met verfsporen die exact bij het schilderij pasten, kon ze doorpakken.",
      "Het doek hing drie weken later weer aan de haak. Aisha kreeg complimenten voor haar scherpe blik, maar zelf noemde ze iets anders. \"Ik heb vooral de saaie lijst gelezen die niemand wilde lezen.\""
    ],
    en: [
      "On a Monday morning in March an attendant discovered that something was missing. On the wall of room three only an empty hook was left. The small painting that had hung there was gone.",
      "The strange thing was that the alarms had not gone off. The doors were shut, the windows intact, and the camera footage had shown nothing all night. Yet the canvas was gone.",
      "Detective Aisha Bakker refused to be carried away by exciting theories. \"If nobody came in,\" she said, \"then the thief was already inside.\" She asked for the list of everyone who had left the building that Sunday. There were twenty-eight names on it.",
      "One name stood out. A cleaner, employed for two weeks, had left the building at 22.14. According to the rota he was not supposed to be working that evening at all. On top of that, the camera showed him carrying a flat cardboard box, while he had come in with only a bag.",
      "Aisha knew enough to keep searching, but not enough to arrest anyone. That is how it really works: a suspicion is not yet proof. Only when the cardboard was later found in a skip, with paint traces that matched the painting exactly, could she act.",
      "The canvas hung back on its hook three weeks later. Aisha was complimented on her sharp eye, but she herself named something else. \"Mostly I read the boring list that nobody wanted to read.\""
    ]
  },
  words: [
    { nl: 'suppoost', en: 'museum attendant', defNl: 'iemand die in een museum op de zalen let', defEn: 'someone who watches the rooms in a museum' },
    { nl: 'verdenking', en: 'suspicion', defNl: 'het vermoeden dat iemand het gedaan heeft', defEn: 'the feeling that someone did it' },
    { nl: 'bewijs', en: 'proof', defNl: 'iets waarmee je het zeker kunt aantonen', defEn: 'something that shows it for certain' }
  ],
  questions: [
    { id: 'q1', type: 'mc', skill: 'gevolgtrekking',
      q: { nl: 'Waarom concludeerde Aisha dat de dief al binnen was?',
           en: 'Why did Aisha conclude the thief was already inside?' },
      options: [
        { nl: 'Omdat deuren, ramen, alarmen en camera’s geen inbraak lieten zien',
          en: 'Because doors, windows, alarms and cameras showed no break-in' },
        { nl: 'Omdat de suppoost het haar vertelde', en: 'Because the attendant told her' },
        { nl: 'Omdat het maandagochtend was', en: 'Because it was Monday morning' },
        { nl: 'Omdat het schilderij klein was', en: 'Because the painting was small' }
      ], answer: 0,
      explain: { nl: 'Alle manieren om binnen te komen waren uitgesloten, dus bleef er maar één mogelijkheid over.',
                 en: 'All ways of getting in were ruled out, so only one possibility remained.' } },
    { id: 'q2', type: 'mc', skill: 'letterlijk',
      q: { nl: 'Wat viel op aan de schoonmaker?', en: 'What stood out about the cleaner?' },
      options: [
        { nl: 'Hij werkte volgens het rooster die avond niet en droeg een doos naar buiten',
          en: 'He was not on the rota that evening and carried a box out' },
        { nl: 'Hij was al twintig jaar in dienst', en: 'He had worked there for twenty years' },
        { nl: 'Hij had geen sleutel', en: 'He had no key' },
        { nl: 'Hij kwam die zondag niet opdagen', en: 'He did not show up that Sunday' }
      ], answer: 0,
      explain: { nl: 'Beide details staan in alinea 4: niet ingeroosterd én een platte doos.',
                 en: 'Both details are in paragraph 4: not on the rota and a flat box.' } },
    { id: 'q3', type: 'tf', skill: 'gevolgtrekking',
      q: { nl: 'Een verdenking is volgens de tekst hetzelfde als bewijs.',
           en: 'According to the text a suspicion is the same as proof.' },
      answer: false,
      explain: { nl: 'De tekst zegt letterlijk: "een verdenking is nog geen bewijs".',
                 en: 'The text says literally: "a suspicion is not yet proof".' } },
    { id: 'q4', type: 'match', skill: 'woordenschat',
      q: { nl: 'Koppel het woord aan de betekenis.', en: 'Match the word to its meaning.' },
      pairs: [
        { word: { nl: 'suppoost', en: 'attendant' }, meaning: { nl: 'iemand die op de museumzalen let', en: 'someone who watches the museum rooms' } },
        { word: { nl: 'verdenking', en: 'suspicion' }, meaning: { nl: 'vermoeden dat iemand het deed', en: 'a feeling that someone did it' } },
        { word: { nl: 'bewijs', en: 'proof' }, meaning: { nl: 'iets waarmee je het zeker aantoont', en: 'something that shows it for certain' } },
        { word: { nl: 'rooster', en: 'rota' }, meaning: { nl: 'schema wie wanneer werkt', en: 'a schedule of who works when' } }
      ],
      explain: { nl: 'Vier woorden uit de wereld van het onderzoek.', en: 'Four words from the world of investigation.' } },
    { id: 'q5', type: 'mc', skill: 'hoofdgedachte',
      q: { nl: 'Wat wil de schrijver met de laatste zin duidelijk maken?',
           en: 'What does the writer want to make clear with the last sentence?' },
      options: [
        { nl: 'Zaken oplossen gaat vaker over saai, zorgvuldig werk dan over slimme trucs',
          en: 'Solving cases is more often about boring, careful work than clever tricks' },
        { nl: 'Aisha houdt niet van lezen', en: 'Aisha does not like reading' },
        { nl: 'Camerabeelden zijn nutteloos', en: 'Camera footage is useless' },
        { nl: 'Musea moeten meer suppoosten aannemen', en: 'Museums should hire more attendants' }
      ], answer: 0,
      explain: { nl: 'Ze wijst de complimenten voor haar "scherpe blik" af en noemt de saaie lijst.',
                 en: 'She rejects the compliments for her "sharp eye" and names the boring list.' } }
  ]
}
]);
