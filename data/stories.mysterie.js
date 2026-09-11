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

/* --- Niveau 4 en 5: langere teksten met Cito-achtige vragen --- */
addStories([
{
  id: 'mysterie-4', topic: 'mysterie', level: 4, emoji: '👟', scene: 'night',
  title: { nl: 'Het spoor dat te netjes was', en: 'The trail that was too tidy' },
  text: {
    nl: [
      "Op maandagochtend stond de deur van de fietsenstalling open en was de nieuwe bakfiets van school verdwenen. Conciërge Bram belde de wijkagent, en agent Nour kwam kijken. Ze deed wat ze altijd deed: eerst rondlopen, niets aanraken, alleen kijken.",
      "Bij de deur lag een spoor van modderige schoenafdrukken, van buiten naar binnen. Ze waren zo duidelijk dat je de ribbels van de zool kon tellen. Bram wees er trots op. \"Die hebben we tenminste,\" zei hij.",
      "Nour knikte langzaam. Precies die duidelijkheid vond zij vreemd. Het had zondag de hele dag geregend, dus modder klopte. Maar de afdrukken liepen alleen naar binnen. Iemand die een bakfiets naar buiten duwt, moet ook naar buiten lopen. En dan is de modder aan zijn zolen bijna op, dus zouden die afdrukken vager moeten zijn, maar ze zouden er wel moeten zijn.",
      "Ze keek naar het slot. Geen krassen, geen braakschade. Een dief met een breekijzer laat altijd iets achter. Ze vroeg wie er een sleutel had. Bram, de directeur, en de schoonmaakdienst. \"En hangt er hier een reservesleutel?\" vroeg ze. Bram werd rood. Aan de binnenkant van het kastje bij de ingang, gaf hij toe, aan een spijkertje.",
      "Toen wist Nour genoeg om de goede vraag te stellen. Niet: wie is er binnengekomen? Maar: wie wist waar de sleutel hing? Dat rijtje was kort, en er stond niemand op die van buiten kwam.",
      "Die middag meldde zich een leerling uit groep acht. Hij had de bakfiets geleend om zijn zieke opa naar het ziekenhuis te rijden, want de bus reed niet. Hij had de afdrukken zelf gemaakt, met zijn laarzen, in de hoop dat het op een inbraak zou lijken. En hij was op sokken weer naar buiten gelopen, netjes langs de rand.",
      "\"Dat had bijna gewerkt,\" zei Nour. \"Alleen: echte sporen zijn nooit zo netjes. Rommel hoort erbij. Wie te goed zijn best doet, valt juist op.\""
    ],
    en: [
      "On Monday morning the door of the bicycle shed stood open and the school’s new cargo bike had gone. Bram the caretaker rang the local police officer, and officer Nour came to look. She did what she always did: walk round first, touch nothing, only look.",
      "By the door lay a trail of muddy shoe prints, leading from outside to inside. They were so clear that you could count the ridges of the sole. Bram pointed at them proudly. \"At least we have those,\" he said.",
      "Nour nodded slowly. It was precisely that clearness she found odd. It had rained all Sunday, so the mud made sense. But the prints only led inwards. Someone pushing a cargo bike outside has to walk out as well. By then the mud on the soles is nearly gone, so those prints would be fainter, but they ought to be there.",
      "She looked at the lock. No scratches, no damage. A thief with a crowbar always leaves something behind. She asked who had a key. Bram, the head teacher and the cleaning company. \"And is there a spare key here?\" she asked. Bram went red. On the inside of the little cupboard by the entrance, he admitted, on a nail.",
      "Then Nour knew enough to ask the right question. Not: who got in? But: who knew where the key hung? That list was short, and nobody on it came from outside.",
      "That afternoon a pupil from year six came forward. He had borrowed the cargo bike to take his sick grandfather to hospital, because the bus was not running. He had made the prints himself, with his boots, hoping it would look like a break-in. And he had walked back out in his socks, neatly along the edge.",
      "\"That nearly worked,\" said Nour. \"Except: real traces are never that tidy. Mess belongs to them. Try too hard and that is exactly what stands out.\""
    ]
  },
  words: [
    { nl: 'conciërge', en: 'caretaker', defNl: 'degene die op een gebouw past en kleine klussen doet', defEn: 'the person who looks after a building and does small jobs' },
    { nl: 'braakschade', en: 'damage from a break-in', defNl: 'de sporen die achterblijven als iemand een slot forceert', defEn: 'the marks left behind when somebody forces a lock' },
    { nl: 'reservesleutel', en: 'spare key', defNl: 'een tweede sleutel voor het geval de eerste weg is', defEn: 'a second key in case the first one is missing' }
  ],
  questions: [
    { id: 'q1', type: 'mc', skill: 'letterlijk',
      q: { nl: 'Wat deed agent Nour als eerste toen ze aankwam?',
           en: 'What did officer Nour do first when she arrived?' },
      options: [
        { nl: 'Rondlopen en kijken zonder iets aan te raken', en: 'Walk round and look without touching anything' },
        { nl: 'Meteen de leerlingen ondervragen', en: 'Question the pupils straight away' },
        { nl: 'Het slot opendraaien', en: 'Open the lock' },
        { nl: 'De schoenafdrukken schoonvegen', en: 'Wipe away the shoe prints' }
      ], answer: 0,
      explain: { nl: 'Alinea 1: "eerst rondlopen, niets aanraken, alleen kijken".',
                 en: 'Paragraph 1: "walk round first, touch nothing, only look".' } },
    { id: 'q2', type: 'mc', skill: 'gevolgtrekking',
      q: { nl: 'Waarom vond Nour de schoenafdrukken verdacht?',
           en: 'Why did Nour find the shoe prints suspicious?' },
      options: [
        { nl: 'Ze liepen alleen naar binnen, terwijl de dief ook naar buiten moest',
          en: 'They only led inwards, while the thief had to go out as well' },
        { nl: 'Ze waren te klein voor een volwassene', en: 'They were too small for an adult' },
        { nl: 'Ze lagen buiten in het gras', en: 'They lay outside in the grass' },
        { nl: 'Ze waren van sokken in plaats van laarzen', en: 'They were made by socks, not boots' }
      ], answer: 0,
      explain: { nl: 'Alinea 3 legt precies dat uit: een spoor naar buiten ontbrak, en dat kan niet.',
                 en: 'Paragraph 3 explains exactly that: a trail leading out was missing, which is impossible.' } },
    { id: 'q3', type: 'mc', skill: 'verwijswoorden',
      q: { nl: '"Precies die duidelijkheid vond zij vreemd." Wat wordt met "die duidelijkheid" bedoeld?',
           en: '"It was precisely that clearness she found odd." What does "that clearness" mean?' },
      options: [
        { nl: 'Dat je de ribbels van de zool in de afdrukken kon tellen',
          en: 'That you could count the ridges of the sole in the prints' },
        { nl: 'Dat het slot geen krassen had', en: 'That the lock had no scratches' },
        { nl: 'Dat Bram meteen gebeld had', en: 'That Bram had rung at once' },
        { nl: 'Dat het de hele zondag geregend had', en: 'That it had rained all Sunday' }
      ], answer: 0,
      explain: { nl: 'De alinea ervoor beschrijft de afdrukken als zó duidelijk dat je de ribbels kon tellen.',
                 en: 'The previous paragraph describes the prints as so clear you could count the ridges.' } },
    { id: 'q4', type: 'multi', skill: 'gevolgtrekking',
      q: { nl: 'Welke twee aanwijzingen brachten Nour op het idee dat de dader van binnen kwam? Kies er 2.',
           en: 'Which two clues led Nour to think the culprit came from inside? Pick 2.' },
      options: [
        { nl: 'Het slot had geen krassen of braakschade', en: 'The lock had no scratches or damage' },
        { nl: 'De reservesleutel hing in het kastje bij de ingang',
          en: 'The spare key hung in the cupboard by the entrance' },
        { nl: 'De bakfiets was nieuw', en: 'The cargo bike was new' },
        { nl: 'Het had de hele zondag geregend', en: 'It had rained all Sunday' }
      ], answer: [0, 1],
      explain: { nl: 'Geen braakschade plus een sleutel die maar een paar mensen kenden: dat wijst naar binnen.',
                 en: 'No damage plus a key only a few people knew about points inside.' } },
    { id: 'q5', type: 'order', skill: 'volgorde',
      q: { nl: 'Zet het onderzoek van Nour op volgorde.', en: 'Put Nour’s investigation in order.' },
      items: [
        { nl: 'Ze loopt rond en bekijkt de schoenafdrukken.', en: 'She walks round and looks at the shoe prints.' },
        { nl: 'Ze ziet dat het slot geen krassen heeft.', en: 'She sees the lock has no scratches.' },
        { nl: 'Ze vraagt naar de reservesleutel.', en: 'She asks about the spare key.' },
        { nl: 'Ze stelt een andere vraag: wie wist waar de sleutel hing?', en: 'She asks a different question: who knew where the key hung?' },
        { nl: 'Een leerling meldt zich die middag.', en: 'A pupil comes forward that afternoon.' }
      ], answer: [0, 1, 2, 3, 4],
      explain: { nl: 'De alinea’s volgen precies deze stappen, van kijken tot de bekentenis.',
                 en: 'The paragraphs follow exactly these steps, from looking to the confession.' } },
    { id: 'q6', type: 'gap', skill: 'woordenschat',
      q: { nl: 'Braakschade betekent: ___.', en: 'Break-in damage means: ___.' },
      options: [
        { nl: 'de sporen die achterblijven als iemand een slot forceert',
          en: 'the marks left behind when somebody forces a lock' },
        { nl: 'modder op de vloer van een stalling', en: 'mud on the floor of a shed' },
        { nl: 'een sleutel die kwijt is', en: 'a key that has gone missing' },
        { nl: 'schade aan een fiets na een val', en: 'damage to a bike after a fall' }
      ], answer: 0,
      explain: { nl: 'De tekst zegt: "Een dief met een breekijzer laat altijd iets achter." Dat achtergelaten spoor is braakschade.',
                 en: 'The text says a thief with a crowbar always leaves something behind: that mark is break-in damage.' } },
    { id: 'q7', type: 'mc', skill: 'structuur',
      q: { nl: 'Alinea 5 begint met "Toen wist Nour genoeg om de goede vraag te stellen." Wat is de functie van die alinea?',
           en: 'Paragraph 5 begins "Then Nour knew enough to ask the right question." What does that paragraph do?' },
      options: [
        { nl: 'Het is het keerpunt: de aanwijzingen worden samengevat en het onderzoek draait om',
          en: 'It is the turning point: the clues are summed up and the investigation turns around' },
        { nl: 'Het geeft een beschrijving van de fietsenstalling', en: 'It describes the bicycle shed' },
        { nl: 'Het vertelt wat er zondag gebeurde', en: 'It tells what happened on Sunday' },
        { nl: 'Het is de bekentenis van de dader', en: 'It is the culprit’s confession' }
      ], answer: 0,
      explain: { nl: 'Daar verandert de vraag van "wie kwam binnen?" naar "wie wist waar de sleutel hing?": het scharnier van het verhaal.',
                 en: 'There the question changes from "who got in?" to "who knew where the key was?": the hinge of the story.' } },
    { id: 'q8', type: 'mc', skill: 'hoofdgedachte',
      q: { nl: 'Wat is de kern van wat Nour aan het eind zegt?',
           en: 'What is the heart of what Nour says at the end?' },
      options: [
        { nl: 'Sporen die te perfect zijn, zijn juist verdacht', en: 'Traces that are too perfect are exactly the suspicious ones' },
        { nl: 'Je moet altijd op sokken lopen', en: 'You should always walk in your socks' },
        { nl: 'Een bakfiets is moeilijk te stelen', en: 'A cargo bike is hard to steal' },
        { nl: 'Conciërges moeten beter opletten', en: 'Caretakers should pay better attention' }
      ], answer: 0,
      explain: { nl: '"Echte sporen zijn nooit zo netjes… Wie te goed zijn best doet, valt juist op."',
                 en: '"Real traces are never that tidy… Try too hard and that is exactly what stands out."' } }
  ]
},

{
  id: 'mysterie-5', topic: 'mysterie', level: 5, emoji: '👁️', scene: 'night',
  title: { nl: 'Hoe zeker is een ooggetuige?', en: 'How sure is an eyewitness?' },
  text: {
    nl: [
      "Voor de rechtbank is er weinig zo overtuigend als iemand die opstaat en zegt: \"Ik heb het zelf gezien. Hij was het.\" Toch is juist dat bewijs kwetsbaarder dan het lijkt. In de Verenigde Staten zijn inmiddels honderden mensen vrijgelaten nadat DNA-onderzoek aantoonde dat ze onschuldig waren. In een groot deel van die zaken was een ooggetuige het belangrijkste bewijs geweest.",
      "Dat komt doordat ons geheugen anders werkt dan we denken. Het is geen filmpje dat je terugspoelt. Elke keer dat je iets ophaalt, bouw je het opnieuw op uit stukjes, en bij dat bouwen sluipt er nieuwe informatie naar binnen: iets wat je las, iets wat iemand zei, een foto in de krant.",
      "De Amerikaanse onderzoeker Elizabeth Loftus liet dat met een eenvoudige proef zien. Proefpersonen keken naar een filmpje van een aanrijding. Aan de ene groep vroeg ze: hoe hard reden de auto's toen ze elkaar raakten? Aan de andere: hoe hard reden ze toen ze op elkaar knalden? De tweede groep noemde hogere snelheden. Sterker nog: een week later dachten meer mensen uit die groep dat ze glas op straat hadden gezien. Er was helemaal geen glas.",
      "Er speelt nog iets mee. Bij een overval kijken getuigen vaak naar het wapen in plaats van naar het gezicht. Onderzoekers noemen dat het wapenbrandpunt: hoe banger je bent, hoe smaller je blik wordt. Juist op het moment dat het ertoe doet, onthoud je dus minder van het gezicht.",
      "Dat betekent niet dat getuigen liegen. Ze zijn meestal volkomen oprecht, en dat maakt het lastig: iemand kan zich met zijn hele hart iets herinneren dat niet gebeurd is. Zekerheid in de stem zegt weinig over juistheid in het geheugen.",
      "Daarom is de manier waaróp je het vraagt veranderd. Een agent mag geen rij foto's meer laten zien terwijl hij zelf weet wie de verdachte is, want een klein knikje is al genoeg. Bij een moderne confrontatie ziet de getuige de personen één voor één, en de agent die het afneemt weet zelf niet wie de verdachte is. Ook wordt meteen gevraagd hoe zeker iemand is, vóór hij te horen krijgt of hij het goed had.",
      "Ooggetuigen zijn dus niet waardeloos, maar breekbaar, ongeveer zoals een vingerafdruk in zand. Je kunt hem gebruiken, als je maar weet hoe makkelijk hij uitwist."
    ],
    en: [
      "In court there is little as convincing as someone who stands up and says: \"I saw it myself. It was him.\" Yet that very evidence is more fragile than it looks. In the United States hundreds of people have now been freed after DNA testing showed they were innocent. In a large share of those cases an eyewitness had been the main evidence.",
      "That is because our memory works differently from how we think. It is not a film you rewind. Every time you call something up, you rebuild it out of pieces, and while you build, new information creeps in: something you read, something somebody said, a photo in the paper.",
      "The American researcher Elizabeth Loftus showed this with a simple experiment. Volunteers watched a film of a car crash. She asked one group: how fast were the cars going when they hit each other? The other group: how fast were they going when they smashed into each other? The second group named higher speeds. What is more, a week later more people in that group thought they had seen glass on the road. There had been no glass at all.",
      "Something else plays a part too. During a robbery, witnesses often look at the weapon instead of the face. Researchers call that weapon focus: the more frightened you are, the narrower your view becomes. So exactly at the moment that matters, you remember less of the face.",
      "That does not mean witnesses lie. They are usually completely sincere, and that is what makes it difficult: someone can remember with their whole heart something that never happened. Confidence in the voice says little about accuracy in the memory.",
      "That is why the way of asking has changed. An officer may no longer show a row of photographs while knowing himself who the suspect is, because a small nod is enough. In a modern line-up the witness sees the people one by one, and the officer running it does not know who the suspect is either. The witness is also asked at once how sure they are, before hearing whether they were right.",
      "So eyewitnesses are not worthless, but fragile, rather like a fingerprint in sand. You can use it, as long as you know how easily it rubs out."
    ]
  },
  words: [
    { nl: 'ooggetuige', en: 'eyewitness', defNl: 'iemand die iets met eigen ogen heeft zien gebeuren', defEn: 'someone who saw something happen with their own eyes' },
    { nl: 'proefpersoon', en: 'volunteer, test subject', defNl: 'iemand die meedoet aan een onderzoek', defEn: 'someone who takes part in a study' },
    { nl: 'confrontatie', en: 'line-up', defNl: 'het moment waarop een getuige moet aanwijzen wie het was', defEn: 'the moment a witness has to point out who it was' }
  ],
  questions: [
    { id: 'q1', type: 'mc', skill: 'letterlijk',
      q: { nl: 'Wat verschilde er tussen de twee vragen in het onderzoek van Loftus?',
           en: 'What was different between the two questions in Loftus’s study?' },
      options: [
        { nl: 'Eén woord: "raakten" tegenover "knalden"', en: 'One word: "hit" versus "smashed"' },
        { nl: 'De ene groep zag een ander filmpje', en: 'One group saw a different film' },
        { nl: 'De ene groep kreeg de vraag een week later', en: 'One group got the question a week later' },
        { nl: 'De ene groep mocht het filmpje twee keer zien', en: 'One group could watch the film twice' }
      ], answer: 0,
      explain: { nl: 'Alinea 3: alleen het werkwoord verschilde, en dat veranderde de antwoorden.',
                 en: 'Paragraph 3: only the verb differed, and that changed the answers.' } },
    { id: 'q2', type: 'mc', skill: 'gevolgtrekking',
      q: { nl: 'Wat bewijst het glas dat de tweede groep dacht te hebben gezien?',
           en: 'What does the glass the second group thought they saw prove?' },
      options: [
        { nl: 'Dat een herinnering kan veranderen door hoe een vraag gesteld wordt',
          en: 'That a memory can change because of how a question is asked' },
        { nl: 'Dat de proefpersonen logen', en: 'That the volunteers were lying' },
        { nl: 'Dat auto’s vaak glas verliezen', en: 'That cars often lose glass' },
        { nl: 'Dat mensen slecht kunnen rekenen', en: 'That people are bad at sums' }
      ], answer: 0,
      explain: { nl: 'Er was geen glas. Toch "herinnerden" mensen het zich, doordat één woord hun beeld had bijgekleurd.',
                 en: 'There was no glass, yet people "remembered" it because one word had coloured their picture.' } },
    { id: 'q3', type: 'sort', skill: 'feitmening',
      q: { nl: 'Feit of mening? Zet elke zin in de goede groep.',
           en: 'Fact or opinion? Put every sentence in the right group.' },
      bins: [{ nl: 'Feit', en: 'Fact' }, { nl: 'Mening', en: 'Opinion' }],
      items: [
        { nl: 'De tweede groep noemde hogere snelheden.', en: 'The second group named higher speeds.', bin: 0 },
        { nl: 'Ooggetuigen zijn breekbaar, als een vingerafdruk in zand.',
          en: 'Eyewitnesses are fragile, like a fingerprint in sand.', bin: 1 },
        { nl: 'Bij een moderne confrontatie ziet de getuige de personen één voor één.',
          en: 'In a modern line-up the witness sees the people one by one.', bin: 0 },
        { nl: 'Er is voor de rechtbank weinig zo overtuigend als een ooggetuige.',
          en: 'In court there is little as convincing as an eyewitness.', bin: 1 }
      ],
      explain: { nl: 'Wat gemeten of geregeld is, is een feit. Een vergelijking ("als een vingerafdruk in zand") en het woord "overtuigend" zijn oordelen.',
                 en: 'What is measured or regulated is a fact. A comparison and the word "convincing" are judgements.' } },
    { id: 'q4', type: 'mc', skill: 'woordenschat',
      q: { nl: 'Wat is het "wapenbrandpunt"?', en: 'What is "weapon focus"?' },
      options: [
        { nl: 'Dat een bange getuige naar het wapen kijkt en daardoor het gezicht minder onthoudt',
          en: 'That a frightened witness looks at the weapon and so remembers the face less' },
        { nl: 'De plek waar een wapen gevonden wordt', en: 'The place where a weapon is found' },
        { nl: 'Een brandplek op de plaats van een misdrijf', en: 'A burn mark at a crime scene' },
        { nl: 'Het moment waarop een agent zijn wapen trekt', en: 'The moment an officer draws a weapon' }
      ], answer: 0,
      explain: { nl: 'Alinea 4 legt het uit: hoe banger je bent, hoe smaller je blik wordt.',
                 en: 'Paragraph 4 explains it: the more frightened you are, the narrower your view.' } },
    { id: 'q5', type: 'mc', skill: 'verwijswoorden',
      q: { nl: '"...en dat maakt het lastig". Wat maakt het lastig?',
           en: '"...and that is what makes it difficult". What makes it difficult?' },
      options: [
        { nl: 'Dat getuigen meestal volkomen oprecht zijn', en: 'That witnesses are usually completely sincere' },
        { nl: 'Dat rechters snel beslissen', en: 'That judges decide quickly' },
        { nl: 'Dat DNA-onderzoek duur is', en: 'That DNA testing is expensive' },
        { nl: 'Dat er geen glas op straat lag', en: 'That there was no glass on the road' }
      ], answer: 0,
      explain: { nl: 'De zin ervoor is: "Ze zijn meestal volkomen oprecht." Omdat ze niet liegen, is het moeilijk te merken dat ze zich vergissen.',
                 en: 'The sentence before says they are usually completely sincere, which is why the mistake is hard to spot.' } },
    { id: 'q6', type: 'multi', skill: 'letterlijk',
      q: { nl: 'Welke twee dingen zijn er veranderd aan de manier van bevragen? Kies er 2.',
           en: 'Which two things have changed about the way witnesses are questioned? Pick 2.' },
      options: [
        { nl: 'De agent die de confrontatie afneemt weet zelf niet wie de verdachte is',
          en: 'The officer running the line-up does not know who the suspect is' },
        { nl: 'Er wordt meteen gevraagd hoe zeker de getuige is', en: 'The witness is asked at once how sure they are' },
        { nl: 'Getuigen mogen het filmpje twee keer zien', en: 'Witnesses may watch the film twice' },
        { nl: 'Getuigen krijgen altijd eerst een foto in de krant te zien',
          en: 'Witnesses are always shown a newspaper photo first' }
      ], answer: [0, 1],
      explain: { nl: 'Alinea 6 noemt precies deze twee maatregelen.',
                 en: 'Paragraph 6 names exactly these two measures.' } },
    { id: 'q7', type: 'mc', skill: 'doel',
      q: { nl: 'Wat wil de schrijver met deze tekst bereiken?',
           en: 'What does the writer want to achieve with this text?' },
      options: [
        { nl: 'Uitleggen waarom ooggetuigenbewijs voorzichtig gebruikt moet worden',
          en: 'Explain why eyewitness evidence must be used carefully' },
        { nl: 'Bewijzen dat ooggetuigen altijd liegen', en: 'Prove that eyewitnesses always lie' },
        { nl: 'Reclame maken voor DNA-onderzoek', en: 'Advertise DNA testing' },
        { nl: 'Een spannend misdaadverhaal vertellen', en: 'Tell an exciting crime story' }
      ], answer: 0,
      explain: { nl: 'De slotzin vat het doel samen: je kunt een ooggetuige gebruiken, als je maar weet hoe makkelijk hij uitwist.',
                 en: 'The closing line sums up the purpose: you can use an eyewitness as long as you know how easily it rubs out.' } },
    { id: 'q8', type: 'mc', skill: 'structuur',
      q: { nl: 'Waarom staat de vergelijking met een vingerafdruk in zand helemaal aan het eind?',
           en: 'Why does the comparison with a fingerprint in sand come right at the end?' },
      options: [
        { nl: 'Het vat in één beeld samen wat de hele tekst heeft uitgelegd',
          en: 'It sums up in one image what the whole text has explained' },
        { nl: 'Het is een nieuw onderwerp dat de schrijver nog wilde noemen',
          en: 'It is a new subject the writer still wanted to mention' },
        { nl: 'Het is een voorbeeld van bewijs uit een rechtszaak', en: 'It is an example of evidence from a trial' },
        { nl: 'Het hoort bij het onderzoek van Loftus', en: 'It belongs to Loftus’s study' }
      ], answer: 0,
      explain: { nl: 'Een slotbeeld pakt de kern van de tekst samen: bruikbaar maar breekbaar.',
                 en: 'A closing image sums up the core: usable but fragile.' } },
    { id: 'q9', type: 'mc', skill: 'samenvatten',
      q: { nl: 'Welke samenvatting past het beste bij de hele tekst?',
           en: 'Which summary fits the whole text best?' },
      options: [
        { nl: 'Ons geheugen bouwt herinneringen telkens opnieuw op, waardoor oprechte getuigen zich kunnen vergissen; daarom is de manier van bevragen aangepast.',
          en: 'Our memory rebuilds recollections each time, so sincere witnesses can be mistaken; that is why the way of questioning has been changed.' },
        { nl: 'Elizabeth Loftus deed een onderzoek met filmpjes van aanrijdingen.',
          en: 'Elizabeth Loftus did a study with films of car crashes.' },
        { nl: 'In de Verenigde Staten wordt veel DNA-onderzoek gedaan.',
          en: 'A lot of DNA testing is done in the United States.' },
        { nl: 'Bange mensen kijken naar wapens.', en: 'Frightened people look at weapons.' }
      ], answer: 0,
      explain: { nl: 'Dat antwoord bevat het probleem, de oorzaak én de oplossing. De andere drie zijn losse alinea’s.',
                 en: 'That answer contains the problem, the cause and the solution. The other three are single paragraphs.' } }
  ]
}
]);
