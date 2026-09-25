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

/* --- Nieuwe verhalen: niveau 1 t/m 5 --- */
addStories([
{
  id: 'mysterie-6', topic: 'mysterie', level: 1, emoji: '🏆', scene: 'school',
  title: { nl: 'De verdwenen schoolbeker', en: 'The missing school trophy' },
  text: {
    nl: [
      "In de hal van school staat een grote glazen kast. Daarin staat de gouden beker die het voetbalteam vorig jaar won. Op een maandagochtend liep groep zeven door de hal. De kast was leeg. De beker was weg!",
      "Meester Joris schrok. \"Wie heeft de beker het laatst gezien?\" vroeg hij. Niemand wist het. Fenna, die altijd goed oplet, liep meteen naar de kast om te kijken.",
      "Op het glas zag ze een wazige vlek, net zo groot als een hand. Vlak voor de kast lag een klein geel sponsje op de vloer. Het rook naar zeep.",
      "\"Iemand heeft de kast schoongemaakt,\" zei Fenna. Ze liep naar conciërge meneer Van Dam en liet hem het sponsje zien. Hij knikte meteen. \"Dat is van mij. Ik maak de kast elke maand schoon. Dan haal ik de beker er even uit, zodat ik hem goed kan fotograferen voor de schoolwebsite.\"",
      "Meneer Van Dam liet zijn fototoestel zien. Daarop stond de beker, mooi glimmend. Die middag zette hij hem terug in de kast. Meester Joris bedankte Fenna. \"Goed opgelet! Jij zou een prima detective zijn.\""
    ],
    en: [
      "In the school hall stands a big glass cabinet. Inside it stands the golden trophy the football team won last year. On a Monday morning year six walked through the hall. The cabinet was empty. The trophy was gone!",
      "Mr Joris got a fright. \"Who saw the trophy last?\" he asked. Nobody knew. Fenna, who always pays close attention, walked straight to the cabinet to look.",
      "On the glass she saw a blurry smudge, about the size of a hand. Right in front of the cabinet lay a small yellow sponge on the floor. It smelled of soap.",
      "\"Somebody cleaned the cabinet,\" said Fenna. She walked to caretaker Mr Van Dam and showed him the sponge. He nodded at once. \"That's mine. I clean the cabinet every month. Then I take the trophy out for a while, so I can photograph it properly for the school website.\"",
      "Mr Van Dam showed his camera. On it was the trophy, nicely gleaming. That afternoon he put it back in the cabinet. Mr Joris thanked Fenna. \"Well spotted! You would make a great detective.\""
    ]
  },
  words: [
    { nl: 'vlek', en: 'smudge', defNl: 'een klein vuil plekje', defEn: 'a small dirty mark' },
    { nl: 'conciërge', en: 'caretaker', defNl: 'iemand die op het gebouw past en klusjes doet', defEn: 'someone who looks after the building and does small jobs' },
    { nl: 'glimmend', en: 'gleaming', defNl: 'zo schoon dat het licht weerkaatst', defEn: 'so clean that it reflects light' }
  ],
  questions: [
    { id: 'q1', type: 'mc', skill: 'letterlijk',
      q: { nl: 'Wat stond er normaal in de glazen kast in de hal?', en: 'What normally stood in the glass cabinet in the hall?' },
      options: [
        { nl: 'De gouden beker van het voetbalteam', en: 'The football team’s golden trophy' },
        { nl: 'De schooltas van meester Joris', en: 'Mr Joris’s school bag' },
        { nl: 'Een schilderij', en: 'A painting' },
        { nl: 'De klassenfoto', en: 'The class photo' }
      ], answer: 0,
      explain: { nl: 'Alinea 1 zegt: "Daarin staat de gouden beker die het voetbalteam vorig jaar won."',
                 en: 'Paragraph 1 says: "Inside it stands the golden trophy the football team won last year."' } },
    { id: 'q2', type: 'tf', skill: 'letterlijk',
      q: { nl: 'Fenna vond een sponsje op de vloer voor de kast.', en: 'Fenna found a sponge on the floor in front of the cabinet.' },
      answer: true,
      explain: { nl: 'Alinea 3 vertelt dat er een klein geel sponsje op de vloer lag.',
                 en: 'Paragraph 3 says a small yellow sponge lay on the floor.' } },
    { id: 'q3', type: 'gap', skill: 'woordenschat',
      q: { nl: 'Op het glas zat een vlek. Een vlek is ___.', en: 'On the glass there was a smudge. A smudge is ___.' },
      options: [
        { nl: 'een klein vuil plekje', en: 'a small dirty mark' },
        { nl: 'een scheur in het glas', en: 'a crack in the glass' },
        { nl: 'een sleutel', en: 'a key' },
        { nl: 'een schaduw', en: 'a shadow' }
      ], answer: 0,
      explain: { nl: 'De wazige plek op het glas was een klein vuil plekje van een hand.',
                 en: 'The blurry spot on the glass was a small dirty mark from a hand.' } },
    { id: 'q4', type: 'order', skill: 'volgorde',
      q: { nl: 'Zet het verhaal op volgorde.', en: 'Put the story in order.' },
      items: [
        { nl: 'De kast blijkt leeg te zijn.', en: 'The cabinet turns out to be empty.' },
        { nl: 'Fenna ontdekt de vlek en het sponsje.', en: 'Fenna discovers the smudge and the sponge.' },
        { nl: 'Meneer Van Dam legt uit waarom hij de beker weghaalde.', en: 'Mr Van Dam explains why he took the trophy out.' },
        { nl: 'De beker staat weer glimmend in de kast.', en: 'The trophy is back in the cabinet, gleaming.' }
      ], answer: [0, 1, 2, 3],
      explain: { nl: 'Eerst het probleem, dan de aanwijzingen, dan de uitleg, dan de oplossing.',
                 en: 'First the problem, then the clues, then the explanation, then the solution.' } },
    { id: 'q5', type: 'mc', skill: 'hoofdgedachte',
      q: { nl: 'Waar gaat dit verhaal vooral over?', en: 'What is this story mainly about?' },
      options: [
        { nl: 'Hoe Fenna met aanwijzingen ontdekt waarom de beker weg was', en: 'How Fenna uses clues to find out why the trophy was gone' },
        { nl: 'Hoe je een beker wint met voetbal', en: 'How to win a trophy at football' },
        { nl: 'Hoe je een kast schoonmaakt', en: 'How to clean a cabinet' },
        { nl: 'Waarom meester Joris streng is', en: 'Why Mr Joris is strict' }
      ], answer: 0,
      explain: { nl: 'Elke alinea draait om Fenna die de aanwijzingen volgt tot ze de oplossing vindt.',
                 en: 'Every paragraph is about Fenna following the clues until she finds the solution.' } }
  ]
},

{
  id: 'mysterie-7', topic: 'mysterie', level: 2, emoji: '👣', scene: 'school',
  title: { nl: 'Het raadsel van de natte voetstappen', en: 'The mystery of the wet footprints' },
  text: {
    nl: [
      "Elke dinsdag- en donderdagochtend ziet meester Ruud hetzelfde: een spoor van natte voetstappen op de gang, van de hoofdingang naar lokaal 4. De afdrukken zijn klein en duidelijk nat. Het is al de derde keer deze maand, en buiten heeft het al een week niet geregend.",
      "Meester Ruud vraagt Mila om hulp. Iedereen in groep zes weet dat zij goed is in dit soort raadsels. Mila bekijkt de afdrukken van dichtbij. Ze zijn ongeveer maat vierendertig en ze glimmen van het water.",
      "Eerst denkt ze aan een lekkende waterfles in een rugzak. Maar dat zou een druppelspoor geven, geen complete voetafdrukken. Deze zolen zijn helemaal nat, alsof iemand net door een plas is gelopen. Maar buiten is de grond kurkdroog.",
      "Mila kijkt naar het rooster naast de deur van lokaal 4. Op dinsdag en donderdag staat er één woord: zwemles. Precies de dagen waarop de voetstappen verschijnen.",
      "Ze loopt naar het zwembad, twee straten verderop. Daar zwemt de klas van lokaal 4 elke dinsdag en donderdag het laatste lesuur. Na het zwemmen trekken de kinderen snel hun kleren weer aan, maar hun haar is nog nat en hun sportschoenen staan op de vochtige kleedkamervloer.",
      "Terug op school legt Mila het uit aan meester Ruud. \"Het is geen inbreker en geen lekkende fles. Het zijn gewoon natte schoenen na het zwemmen.\" Meester Ruud knikt opgelucht. \"Weer een zaak opgelost. Nu snap ik ook waarom de vloer bij lokaal 4 elke week een extra beurt met de mop nodig heeft.\""
    ],
    en: [
      "Every Tuesday and Thursday morning Mr Ruud sees the same thing: a trail of wet footprints in the hallway, from the main entrance to classroom 4. The prints are small and clearly wet. It is already the third time this month, and outside it has not rained for a week.",
      "Mr Ruud asks Mila for help. Everyone in year six knows she is good at this kind of puzzle. Mila studies the prints up close. They are about size thirty-four and they glisten with water.",
      "At first she thinks of a leaking water bottle in a backpack. But that would leave a trail of drops, not complete footprints. These soles are entirely wet, as if someone had just walked through a puddle. But outside the ground is bone dry.",
      "Mila looks at the timetable next to the door of classroom 4. On Tuesday and Thursday there is one word: swimming lesson. Exactly the days the footprints appear.",
      "She walks to the swimming pool, two streets away. There, the class from classroom 4 swims every Tuesday and Thursday during the last lesson. After swimming the children quickly put their clothes back on, but their hair is still wet and their trainers have been standing on the damp changing-room floor.",
      "Back at school Mila explains it to Mr Ruud. \"It's not a burglar and not a leaking bottle. They're just wet shoes after swimming.\" Mr Ruud nods, relieved. \"Another case solved. Now I also understand why the floor by classroom 4 needs an extra mopping every week.\""
    ]
  },
  words: [
    { nl: 'kurkdroog', en: 'bone dry', defNl: 'helemaal droog, geen greintje vocht', defEn: 'completely dry, not a bit of moisture' },
    { nl: 'opgelucht', en: 'relieved', defNl: 'blij dat een probleem voorbij is', defEn: 'glad that a problem is over' },
    { nl: 'rooster', en: 'timetable', defNl: 'een schema met wat er wanneer gebeurt', defEn: 'a schedule of what happens when' }
  ],
  questions: [
    { id: 'q1', type: 'mc', skill: 'letterlijk',
      q: { nl: 'Waar liep het spoor van natte voetstappen precies?', en: 'Exactly where did the trail of wet footprints run?' },
      options: [
        { nl: 'Van de hoofdingang naar lokaal 4', en: 'From the main entrance to classroom 4' },
        { nl: 'Van lokaal 4 naar het zwembad', en: 'From classroom 4 to the swimming pool' },
        { nl: 'Van de gymzaal naar de kantine', en: 'From the gym to the canteen' },
        { nl: 'Van de fietsenstalling naar het plein', en: 'From the bike shed to the playground' }
      ], answer: 0,
      explain: { nl: 'Alinea 1 zegt: "een spoor van natte voetstappen op de gang, van de hoofdingang naar lokaal 4."',
                 en: 'Paragraph 1 says: "a trail of wet footprints in the hallway, from the main entrance to classroom 4."' } },
    { id: 'q2', type: 'mc', skill: 'gevolgtrekking',
      q: { nl: 'Waarom paste een lekkende waterfles niet als verklaring?', en: 'Why didn’t a leaking water bottle fit as an explanation?' },
      options: [
        { nl: 'Dat zou een druppelspoor geven, en dit waren hele natte voetafdrukken', en: 'That would leave a trail of drops, and these were whole wet footprints' },
        { nl: 'Waterflessen mogen niet mee naar school', en: 'Water bottles are not allowed at school' },
        { nl: 'De rugzakken waren allemaal droog', en: 'The backpacks were all dry' },
        { nl: 'Er waren geen rugzakken in de gang', en: 'There were no backpacks in the hallway' }
      ], answer: 0,
      explain: { nl: 'Alinea 3 legt het verschil uit: een druppelspoor is iets anders dan complete, natte voetafdrukken.',
                 en: 'Paragraph 3 explains the difference: a trail of drops is not the same as complete, wet footprints.' } },
    { id: 'q3', type: 'tf', skill: 'letterlijk',
      q: { nl: 'Buiten had het die week flink geregend.', en: 'It had rained heavily outside that week.' },
      answer: false,
      explain: { nl: 'De tekst zegt juist: "buiten heeft het al een week niet geregend."',
                 en: 'The text says the opposite: "outside it has not rained for a week."' } },
    { id: 'q4', type: 'mc', skill: 'gevolgtrekking',
      q: { nl: 'Hoe ontdekte Mila dat het spoor met zwemles te maken had?', en: 'How did Mila discover the trail was linked to the swimming lesson?' },
      options: [
        { nl: 'Ze zag dat de voetstappen alleen op de dagen met zwemles op het rooster verschenen', en: 'She saw the footprints only appeared on the days with swimming lessons on the timetable' },
        { nl: 'Een klasgenoot vertelde het haar', en: 'A classmate told her' },
        { nl: 'Ze zag natte badpakken in een rugzak', en: 'She saw wet swimsuits in a backpack' },
        { nl: 'Meester Ruud vertelde het haar zelf', en: 'Mr Ruud told her himself' }
      ], answer: 0,
      explain: { nl: 'Alinea 4: dinsdag en donderdag staan op het rooster als zwemles, precies de dagen van de voetstappen.',
                 en: 'Paragraph 4: Tuesday and Thursday are marked as swimming lesson on the timetable, exactly the days of the footprints.' } },
    { id: 'q5', type: 'gap', skill: 'woordenschat',
      q: { nl: 'Buiten was de grond kurkdroog. Kurkdroog betekent ___.', en: 'Outside the ground was bone dry. Bone dry means ___.' },
      options: [
        { nl: 'helemaal droog', en: 'completely dry' },
        { nl: 'een beetje vochtig', en: 'a little damp' },
        { nl: 'drijfnat', en: 'soaking wet' },
        { nl: 'ijskoud', en: 'freezing cold' }
      ], answer: 0,
      explain: { nl: 'Als iets kurkdroog is, is er geen greintje vocht meer over.',
                 en: 'If something is bone dry, there is not a trace of moisture left.' } },
    { id: 'q6', type: 'mc', skill: 'hoofdgedachte',
      q: { nl: 'Wat is de kern van dit verhaal?', en: 'What is the heart of this story?' },
      options: [
        { nl: 'Een heel gewone verklaring (zwemles) kan een geheimzinnig spoor oplossen, als je goed onderzoekt', en: 'A very ordinary explanation (a swimming lesson) can solve a mysterious trail, if you investigate carefully' },
        { nl: 'Je mag nooit een waterfles meenemen naar school', en: 'You should never bring a water bottle to school' },
        { nl: 'Het is verboden om met natte schoenen te lopen', en: 'It is forbidden to walk around in wet shoes' },
        { nl: 'Meester Ruud houdt niet van zwemmen', en: 'Mr Ruud doesn’t like swimming' }
      ], answer: 0,
      explain: { nl: 'Mila lost het raadsel op door goed te kijken naar wanneer het spoor verscheen, niet door iets spannends te verzinnen.',
                 en: 'Mila solves the puzzle by carefully looking at when the trail appeared, not by inventing something exciting.' } }
  ]
},

{
  id: 'mysterie-8', topic: 'mysterie', level: 3, emoji: '🔍', scene: 'night',
  title: { nl: 'Vingerafdrukken: het bewijs dat niet liegt?', en: 'Fingerprints: the evidence that doesn’t lie?' },
  text: {
    nl: [
      "Leg je vinger eens op een glimmend glas en haal hem weer weg. Je ziet een waas van lijntjes: je vingerafdruk. Die lijntjes vormen een patroon van bergjes en dalen, en geen twee mensen op de wereld hebben precies hetzelfde patroon. Zelfs een eeneiige tweeling heeft, ondanks hetzelfde DNA, andere vingerafdrukken.",
      "Rechercheurs gebruiken dat al meer dan honderd jaar. Op een plaats delict zoeken ze naar afdrukken op gladde oppervlakken zoals glas, deurklinken of messen. Onzichtbare afdrukken maken ze zichtbaar met een fijn poeder, dat blijft plakken aan het vet en zweet dat de vinger achterlaat. Daarna wordt de afdruk met plakband voorzichtig overgenomen en op een kaart geplakt.",
      "Elke vingerafdruk bestaat uit een van drie hoofdpatronen: een lus, een wervel of een boog. Rechercheurs kijken daarna naar kleinere details: waar een lijntje precies stopt, splitst of een eilandje vormt. Zulke details noemen ze minutiae, en een computer vergelijkt ze razendsnel met miljoenen afdrukken in een database.",
      "In 1892 gebruikte de Argentijnse rechercheur Juan Vucetich vingerafdrukken voor het eerst om een zaak op te lossen. Bij een woninginbraak had de dader een raam ingeslagen en was hij via de vensterbank naar binnen geklommen. Op de verse verf van de vensterbank bleef een duidelijke afdruk achter. Vucetich vergeleek die met de afdrukken van de verdachten, en één kwam exact overeen. Het was de allereerste keer dat een vingerafdruk als bewijs voor de rechter werd gebruikt.",
      "Vingerafdrukken zijn dus krachtig bewijs, maar niet onfeilbaar. Een afdruk op een deurklink bewijst alleen dat iemand die klink heeft aangeraakt, niet wanneer. Daarom zoeken rechercheurs er altijd ander bewijs bij, zoals camerabeelden of getuigen, voordat ze zeker weten wie waar was."
    ],
    en: [
      "Put your finger on a shiny glass and take it away again. You see a haze of little lines: your fingerprint. Those lines form a pattern of ridges and valleys, and no two people in the world have exactly the same pattern. Even identical twins, despite sharing the same DNA, have different fingerprints.",
      "Detectives have been using this for more than a hundred years. At a crime scene they look for prints on smooth surfaces such as glass, door handles or knives. They make invisible prints visible with a fine powder, which sticks to the grease and sweat a finger leaves behind. The print is then carefully lifted with tape and stuck onto a card.",
      "Every fingerprint has one of three main patterns: a loop, a whorl or an arch. Detectives then look at smaller details: exactly where a little line stops, splits, or forms a tiny island. They call such details minutiae, and a computer compares them at lightning speed with millions of prints in a database.",
      "In 1892 the Argentine detective Juan Vucetich used fingerprints for the first time to solve a case. During a house burglary the culprit had smashed a window and climbed in over the windowsill. A clear print was left in the fresh paint of the windowsill. Vucetich compared it with the prints of the suspects, and one matched exactly. It was the very first time a fingerprint was used as evidence in court.",
      "Fingerprints are therefore powerful evidence, but not infallible. A print on a door handle only proves that someone touched that handle, not when. That is why detectives always look for other evidence too, such as camera footage or witnesses, before they are sure who was where."
    ]
  },
  words: [
    { nl: 'minutiae', en: 'minutiae', defNl: 'de kleine details in een vingerafdruk, zoals waar een lijntje stopt of splitst', defEn: 'the small details in a fingerprint, such as where a line stops or splits' },
    { nl: 'onfeilbaar', en: 'infallible', defNl: 'nooit fout, altijd honderd procent zeker', defEn: 'never wrong, always completely certain' },
    { nl: 'plaats delict', en: 'crime scene', defNl: 'de plek waar een misdrijf is gebeurd', defEn: 'the place where a crime happened' }
  ],
  questions: [
    { id: 'q1', type: 'mc', skill: 'letterlijk',
      q: { nl: 'Waarmee maken rechercheurs een onzichtbare vingerafdruk zichtbaar?', en: 'What do detectives use to make an invisible fingerprint visible?' },
      options: [
        { nl: 'Met een fijn poeder dat aan vet en zweet blijft plakken', en: 'With a fine powder that sticks to grease and sweat' },
        { nl: 'Met een föhn', en: 'With a hairdryer' },
        { nl: 'Met een schaar', en: 'With scissors' },
        { nl: 'Met een zaklamp', en: 'With a torch' }
      ], answer: 0,
      explain: { nl: 'Alinea 2: "Onzichtbare afdrukken maken ze zichtbaar met een fijn poeder."',
                 en: 'Paragraph 2: "They make invisible prints visible with a fine powder."' } },
    { id: 'q2', type: 'tf', skill: 'letterlijk',
      q: { nl: 'Een eeneiige tweeling heeft precies dezelfde vingerafdrukken.', en: 'Identical twins have exactly the same fingerprints.' },
      answer: false,
      explain: { nl: 'Alinea 1 zegt juist: "Zelfs een eeneiige tweeling heeft, ondanks hetzelfde DNA, andere vingerafdrukken."',
                 en: 'Paragraph 1 says the opposite: "Even identical twins, despite sharing the same DNA, have different fingerprints."' } },
    { id: 'q3', type: 'mc', skill: 'gevolgtrekking',
      q: { nl: 'Waarom is een vingerafdruk op een deurklink niet altijd genoeg bewijs?', en: 'Why isn’t a fingerprint on a door handle always enough evidence?' },
      options: [
        { nl: 'Omdat het niet laat zien wannéér iemand die klink aanraakte', en: 'Because it doesn’t show when someone touched that handle' },
        { nl: 'Omdat deurklinken nooit afdrukken vasthouden', en: 'Because door handles never hold prints' },
        { nl: 'Omdat afdrukken al na een dag verdwijnen', en: 'Because prints disappear after just a day' },
        { nl: 'Omdat computers afdrukken niet kunnen vergelijken', en: 'Because computers cannot compare prints' }
      ], answer: 0,
      explain: { nl: 'Alinea 5 zegt het letterlijk: een afdruk bewijst alleen dát iemand iets aanraakte, niet wanneer.',
                 en: 'Paragraph 5 says it literally: a print only proves that someone touched something, not when.' } },
    { id: 'q4', type: 'mc', skill: 'verwijswoorden',
      q: { nl: '"Zulke details noemen ze minutiae." Waar verwijst "zulke details" naar?', en: '"They call such details minutiae." What does "such details" refer to?' },
      options: [
        { nl: 'Waar een lijntje precies stopt, splitst of een eilandje vormt', en: 'Exactly where a line stops, splits, or forms a tiny island' },
        { nl: 'De drie hoofdpatronen lus, wervel en boog', en: 'The three main patterns loop, whorl and arch' },
        { nl: 'Het fijne poeder dat rechercheurs gebruiken', en: 'The fine powder detectives use' },
        { nl: 'De datum waarop een misdrijf gebeurde', en: 'The date a crime happened' }
      ], answer: 0,
      explain: { nl: 'De zin ervoor beschrijft precies dat: waar een lijntje stopt, splitst of een eilandje vormt.',
                 en: 'The sentence before describes exactly that: where a line stops, splits, or forms a tiny island.' } },
    { id: 'q5', type: 'gap', skill: 'woordenschat',
      q: { nl: 'Minutiae zijn ___.', en: 'Minutiae are ___.' },
      options: [
        { nl: 'de kleine details in een vingerafdruk, zoals waar een lijntje stopt of splitst', en: 'the small details in a fingerprint, such as where a line stops or splits' },
        { nl: 'de naam van een beroemde rechercheur', en: 'the name of a famous detective' },
        { nl: 'een soort poeder', en: 'a kind of powder' },
        { nl: 'een stuk plakband', en: 'a piece of tape' }
      ], answer: 0,
      explain: { nl: 'De tekst legt het zelf uit in alinea 3.', en: 'The text explains it itself in paragraph 3.' } },
    { id: 'q6', type: 'mc', skill: 'structuur',
      q: { nl: 'Waarom vertelt de tekst in alinea 4 het verhaal van Juan Vucetich?', en: 'Why does the text tell the story of Juan Vucetich in paragraph 4?' },
      options: [
        { nl: 'Als concreet voorbeeld van hoe de uitleg uit de vorige alinea’s in de praktijk werkte', en: 'As a concrete example of how the explanation from the previous paragraphs worked in practice' },
        { nl: 'Om te laten zien dat Argentinië het eerste land met politie was', en: 'To show that Argentina was the first country to have police' },
        { nl: 'Om uit te leggen wat DNA is', en: 'To explain what DNA is' },
        { nl: 'Om een grap te maken over verf', en: 'To make a joke about paint' }
      ], answer: 0,
      explain: { nl: 'Na de uitleg over patronen en minutiae laat een echt voorbeeld zien hoe dat in de praktijk een zaak oploste.',
                 en: 'After the explanation of patterns and minutiae, a real example shows how that solved a case in practice.' } },
    { id: 'q7', type: 'mc', skill: 'hoofdgedachte',
      q: { nl: 'Wat is de hoofdgedachte van deze tekst?', en: 'What is the main idea of this text?' },
      options: [
        { nl: 'Vingerafdrukken zijn uniek en waardevol bewijs, maar rechercheurs hebben er meestal ook ander bewijs bij nodig', en: 'Fingerprints are unique and valuable evidence, but detectives usually also need other evidence alongside them' },
        { nl: 'Iedereen heeft dezelfde vingerafdruk', en: 'Everyone has the same fingerprint' },
        { nl: 'Poeder is het enige gereedschap dat rechercheurs gebruiken', en: 'Powder is the only tool detectives use' },
        { nl: 'Vucetich was de allereerste politieman ter wereld', en: 'Vucetich was the very first police officer in the world' }
      ], answer: 0,
      explain: { nl: 'De tekst laat eerst zien hoe uniek en krachtig vingerafdrukken zijn, en eindigt met de nuance dat ze niet onfeilbaar zijn.',
                 en: 'The text first shows how unique and powerful fingerprints are, and ends with the nuance that they are not infallible.' } }
  ]
},

{
  id: 'mysterie-9', topic: 'mysterie', level: 4, emoji: '🐕', scene: 'default',
  title: { nl: 'De speurhond die bijna nooit faalt', en: 'The sniffer dog that almost never fails' },
  text: {
    nl: [
      "Op de luchthaven loopt een labrador rustig langs een rij koffers. Bij één tas blijft hij plotseling zitten en kijkt naar zijn baasje. Dat zitten is het signaal: hier zit iets verdachts in. De douane opent de koffer en vindt inderdaad een pakketje drugs, verstopt tussen de kleren.",
      "Deze hond heet Boef en is een speurhond. Zulke honden worden getraind om met hun neus te zoeken naar dingen die mensen niet kunnen ruiken: drugs, explosieven, geld, en zelfs vermiste personen onder het puin van een ingestort gebouw.",
      "Dat een hond zoveel ruikt, komt door zijn neus. Een mens heeft ongeveer zes miljoen reukcellen. Een hond heeft er tot wel driehonderd miljoen: vijftig keer zoveel. Bovendien gebruikt een hond een apart deel van zijn hersenen om geuren te verwerken, veel groter dan bij ons. Daardoor ruikt een hond niet alleen sterker, maar ook gelaagder: hij kan losse geuren uit elkaar houden, zoals wij kleuren in een schilderij zien.",
      "De training van een speurhond begint al als puppy en duurt jaren. Eerst leert de hond een geur herkennen door een speeltje te vinden dat naar die geur ruikt. Elke keer dat hij het goed doet, krijgt hij een beloning: een speeltje of een snack. Zo leert hij: die geur = beloning. Langzaam wordt de oefening moeilijker, tot de hond de geur kan vinden tussen honderden andere geuren in een drukke ruimte.",
      "Tegenwoordig worden honden ook getraind om ziektes te ruiken. Sommige speurhonden herkennen de geur van een dalende bloedsuikerspiegel bij mensen met diabetes, nog voordat de persoon zelf iets merkt. Andere honden worden getest op het ruiken van bepaalde soorten kanker in adem of urine, met verrassend goede resultaten.",
      "Toch is een speurhond geen robot. Hij kan moe worden, afgeleid raken door een ander luchtje, of een keer fout zitten. Daarom controleert een agent altijd of het signaal klopt, en werkt een hond nooit langer dan een paar uur achter elkaar zonder rust. Perfect is hij niet, maar zijn neus blijft indrukwekkend: waar een scanner faalt, vindt Boef het soms alsnog."
    ],
    en: [
      "At the airport a labrador walks calmly past a row of suitcases. By one bag he suddenly sits down and looks at his handler. That sitting is the signal: something suspicious is in here. Customs opens the suitcase and indeed finds a small package of drugs, hidden among the clothes.",
      "This dog is called Boef and is a sniffer dog. Such dogs are trained to search with their nose for things people cannot smell: drugs, explosives, money, and even missing people under the rubble of a collapsed building.",
      "The reason a dog smells so much comes down to its nose. A human has about six million scent receptors. A dog has up to three hundred million: fifty times as many. On top of that, a dog uses a separate part of its brain to process smells, much bigger than ours. As a result a dog does not just smell more strongly, but also in more layers: it can tell separate smells apart, the way we see colours in a painting.",
      "The training of a sniffer dog starts as a puppy and takes years. First the dog learns to recognise a smell by finding a toy that smells of it. Every time he gets it right, he gets a reward: a toy or a treat. That is how he learns: that smell = reward. Slowly the exercise gets harder, until the dog can find the smell among hundreds of other smells in a busy space.",
      "These days dogs are also trained to smell illnesses. Some sniffer dogs recognise the smell of a dropping blood sugar level in people with diabetes, even before the person notices anything themselves. Other dogs are tested on smelling certain types of cancer in breath or urine, with surprisingly good results.",
      "Still, a sniffer dog is not a robot. It can get tired, get distracted by another smell, or get it wrong once in a while. That is why a handler always checks whether the signal is correct, and a dog never works longer than a few hours in a row without rest. It is not perfect, but its nose remains impressive: where a scanner fails, Boef sometimes finds it anyway."
    ]
  },
  words: [
    { nl: 'reukcellen', en: 'scent receptors', defNl: 'cellen in de neus waarmee je geuren waarneemt', defEn: 'cells in the nose that detect smells' },
    { nl: 'speurhond', en: 'sniffer dog', defNl: 'een hond die getraind is om dingen op te sporen met zijn neus', defEn: 'a dog trained to track things down using its nose' },
    { nl: 'beloning', en: 'reward', defNl: 'iets leuks dat je krijgt als je iets goed doet', defEn: 'something nice you get for doing something well' }
  ],
  questions: [
    { id: 'q1', type: 'mc', skill: 'letterlijk',
      q: { nl: 'Wat doet Boef als hij iets verdachts ruikt?', en: 'What does Boef do when he smells something suspicious?' },
      options: [
        { nl: 'Hij blijft zitten en kijkt naar zijn baasje', en: 'He sits down and looks at his handler' },
        { nl: 'Hij blaft drie keer', en: 'He barks three times' },
        { nl: 'Hij graaft in de koffer', en: 'He digs into the suitcase' },
        { nl: 'Hij rent snel weg', en: 'He runs away quickly' }
      ], answer: 0,
      explain: { nl: 'Alinea 1: "blijft hij plotseling zitten en kijkt naar zijn baasje. Dat zitten is het signaal."',
                 en: 'Paragraph 1: "he suddenly sits down and looks at his handler. That sitting is the signal."' } },
    { id: 'q2', type: 'mc', skill: 'verwijswoorden',
      q: { nl: '"Zo leert hij: die geur = beloning." Waar verwijst "die geur" naar?', en: '"That is how he learns: that smell = reward." What does "that smell" refer to?' },
      options: [
        { nl: 'De geur van het speeltje die de hond eerder moest leren herkennen', en: 'The smell of the toy the dog had to learn to recognise earlier' },
        { nl: 'De geur van de koffer op de luchthaven', en: 'The smell of the suitcase at the airport' },
        { nl: 'De geur van de snack zelf', en: 'The smell of the treat itself' },
        { nl: 'De geur van het puin', en: 'The smell of the rubble' }
      ], answer: 0,
      explain: { nl: 'De zin ervoor legt uit dat de hond eerst leert een geur te herkennen via een speeltje dat ernaar ruikt.',
                 en: 'The sentence before explains that the dog first learns to recognise a smell via a toy that smells of it.' } },
    { id: 'q3', type: 'multi', skill: 'letterlijk',
      q: { nl: 'Welke twee dingen kunnen speurhonden leren opsporen? Kies er 2.', en: 'Which two things can sniffer dogs learn to track down? Pick 2.' },
      options: [
        { nl: 'Drugs verstopt in een koffer', en: 'Drugs hidden in a suitcase' },
        { nl: 'Vermiste personen onder puin', en: 'Missing people under rubble' },
        { nl: 'Het weer van morgen', en: 'Tomorrow’s weather' },
        { nl: 'De kleur van iemands ogen', en: 'The colour of someone’s eyes' }
      ], answer: [0, 1],
      explain: { nl: 'Alinea 2 noemt drugs, explosieven, geld en vermiste personen. Weer en oogkleur staan er niet.',
                 en: 'Paragraph 2 names drugs, explosives, money and missing people. Weather and eye colour are not mentioned.' } },
    { id: 'q4', type: 'mc', skill: 'gevolgtrekking',
      q: { nl: 'Waarom kan een speurhond de bloedsuiker van iemand met diabetes ruiken, nog vóór de persoon het zelf merkt?', en: 'Why can a sniffer dog smell the blood sugar of someone with diabetes, even before the person notices it themselves?' },
      options: [
        { nl: 'Omdat een hond zoveel gevoeliger ruikt dat hij piepkleine veranderingen in de geur van een lichaam opmerkt', en: 'Because a dog smells so much more sensitively that it notices tiny changes in a body’s smell' },
        { nl: 'Omdat honden diabetes kunnen genezen', en: 'Because dogs can cure diabetes' },
        { nl: 'Omdat de hond de patiënt al lang kent', en: 'Because the dog has known the patient a long time' },
        { nl: 'Omdat honden zelf ook diabetes kunnen krijgen', en: 'Because dogs can get diabetes themselves' }
      ], answer: 0,
      explain: { nl: 'Alinea 3 legt uit dat een hond met veel meer reukcellen ook veel kleinere geurverschillen kan opmerken dan een mens.',
                 en: 'Paragraph 3 explains that a dog, with far more scent receptors, can notice much smaller differences in smell than a human.' } },
    { id: 'q5', type: 'gap', skill: 'woordenschat',
      q: { nl: 'Reukcellen zijn ___.', en: 'Scent receptors are ___.' },
      options: [
        { nl: 'cellen in de neus waarmee je geuren waarneemt', en: 'cells in the nose that detect smells' },
        { nl: 'kleine speeltjes voor honden', en: 'small toys for dogs' },
        { nl: 'een soort beloning', en: 'a kind of reward' },
        { nl: 'onderdelen van een koffer', en: 'parts of a suitcase' }
      ], answer: 0,
      explain: { nl: 'De tekst legt het uit in alinea 3: cellen waarmee je ruikt.',
                 en: 'The text explains it in paragraph 3: cells you smell with.' } },
    { id: 'q6', type: 'order', skill: 'volgorde',
      q: { nl: 'Zet de training van een speurhond op volgorde.', en: 'Put the training of a sniffer dog in order.' },
      items: [
        { nl: 'De puppy leert een geur herkennen via een speeltje.', en: 'The puppy learns to recognise a smell via a toy.' },
        { nl: 'Hij krijgt een beloning als hij het goed doet.', en: 'He gets a reward when he gets it right.' },
        { nl: 'De oefening wordt langzaam moeilijker.', en: 'The exercise slowly gets harder.' },
        { nl: 'De hond vindt de geur tussen honderden andere geuren.', en: 'The dog finds the smell among hundreds of other smells.' }
      ], answer: [0, 1, 2, 3],
      explain: { nl: 'Alinea 4 beschrijft precies deze stappen, van puppy tot ervaren speurhond.',
                 en: 'Paragraph 4 describes exactly these steps, from puppy to experienced sniffer dog.' } },
    { id: 'q7', type: 'mc', skill: 'structuur',
      q: { nl: 'Waarom begint de tekst met het voorbeeld van Boef op de luchthaven?', en: 'Why does the text start with the example of Boef at the airport?' },
      options: [
        { nl: 'Om meteen te laten zien wat een speurhond in de praktijk kan, voordat de uitleg volgt', en: 'To immediately show what a sniffer dog can do in practice, before the explanation follows' },
        { nl: 'Om te vertellen hoe een luchthaven eruitziet', en: 'To describe what an airport looks like' },
        { nl: 'Om te laten zien dat honden bang zijn voor koffers', en: 'To show that dogs are afraid of suitcases' },
        { nl: 'Om een grap te maken over reizen', en: 'To make a joke about travelling' }
      ], answer: 0,
      explain: { nl: 'Een pakkend voorbeeld vooraf maakt nieuwsgierig naar de uitleg die daarna komt.',
                 en: 'A gripping example up front makes you curious about the explanation that follows.' } },
    { id: 'q8', type: 'mc', skill: 'hoofdgedachte',
      q: { nl: 'Wat is de hoofdgedachte van deze tekst?', en: 'What is the main idea of this text?' },
      options: [
        { nl: 'Speurhonden ruiken dankzij hun bijzondere neus dingen die mensen niet kunnen ruiken, en worden daarvoor met beloningen getraind', en: 'Thanks to their special nose, sniffer dogs smell things people cannot smell, and they are trained for it with rewards' },
        { nl: 'Alle honden kunnen ziektes ruiken', en: 'All dogs can smell diseases' },
        { nl: 'Boef is de beste hond ter wereld', en: 'Boef is the best dog in the world' },
        { nl: 'Een speurhond maakt nooit een fout', en: 'A sniffer dog never makes a mistake' }
      ], answer: 0,
      explain: { nl: 'Elke alinea gaat over de bijzondere neus van de hond, hoe hij getraind wordt, en waar hij voor wordt ingezet.',
                 en: 'Every paragraph is about the dog’s special nose, how it is trained, and what it is used for.' } }
  ]
},

{
  id: 'mysterie-10', topic: 'mysterie', level: 5, emoji: '📹', scene: 'night',
  title: { nl: 'Mag de politie je gezicht scannen op straat?', en: 'Should the police be allowed to scan your face on the street?' },
  text: {
    nl: [
      "Stel je voor: je loopt door een drukke winkelstraat, en boven je hangen camera's die elk gezicht dat voorbijkomt vergelijken met een lijst van gezochte personen. Geen sciencefiction, maar iets dat in verschillende steden ter wereld al wordt getest, ook in Nederland.",
      "Hoe werkt dat precies? Een camera legt je gezicht vast en een computer meet de afstand tussen je ogen, je neus en je mond. Van al die maten maakt het programma een unieke code, net zoals een barcode voor jouw gezicht. Die code vergelijkt de computer binnen een paar seconden met een database van duizenden gezichten.",
      "Voorstanders zien vooral voordelen. Een voortvluchtige verdachte of een vermist kind kan zo veel sneller gevonden worden dan wanneer een agent alleen zijn ogen gebruikt. Bovendien, zeggen zij, denkt iemand die weet dat hij herkend kan worden misschien wel twee keer na voordat hij iets steelt.",
      "\"Vorig jaar vonden we binnen tien minuten een vermist meisje terug dankzij een camera bij het station,\" vertelt een woordvoerder van de politie. \"Zonder gezichtsherkenning had dat uren kunnen duren.\"",
      "Tegenstanders maken zich juist zorgen. Iedereen, ook wie nooit iets fout doet, wordt dan continu gefilmd en vergeleken. Bovendien blijkt uit onderzoek dat de techniek vaker fouten maakt bij mensen met een donkere huidskleur en bij vrouwen. Zo'n fout kan betekenen dat een onschuldig persoon wordt aangehouden, puur omdat een computer zich vergiste.",
      "Het is dus niet simpelweg voor of tegen. Sommige landen verbieden gezichtsherkenning op straat helemaal. Andere staan het alleen toe bij ernstige misdrijven, en dan nog met toestemming van een rechter vooraf. In Nederland loopt de discussie nog, en gemeenten en de politie experimenteren voorzichtig, onder strenge voorwaarden.",
      "Beide kanten hebben een punt: sneller boeven vangen aan de ene kant, en het recht om onopgemerkt over straat te lopen aan de andere kant. Misschien is de vraag niet óf we de techniek gebruiken, maar hoevaak en onder welke regels. En wat vind jij?"
    ],
    en: [
      "Imagine this: you are walking down a busy shopping street, and above you hang cameras that compare every face that passes with a list of wanted people. Not science fiction, but something already being tested in several cities around the world, including in the Netherlands.",
      "How does that work exactly? A camera captures your face and a computer measures the distance between your eyes, your nose and your mouth. From all those measurements the program makes a unique code, like a barcode for your face. The computer compares that code within a few seconds against a database of thousands of faces.",
      "Supporters mainly see advantages. A fugitive suspect or a missing child can be found much faster this way than when an officer only uses their eyes. Besides, they say, someone who knows they might be recognised may think twice before stealing something.",
      "\"Last year we found a missing girl again within ten minutes thanks to a camera at the station,\" says a police spokesperson. \"Without facial recognition that could have taken hours.\"",
      "Opponents, on the other hand, are worried. Everyone, even those who never do anything wrong, is then continuously filmed and compared. Moreover, research shows that the technology makes more mistakes with people who have darker skin and with women. Such a mistake can mean an innocent person is stopped and detained, purely because a computer got it wrong.",
      "So it is not simply for or against. Some countries ban facial recognition in public completely. Others only allow it for serious crimes, and even then only with a judge's approval beforehand. In the Netherlands the discussion is still ongoing, and municipalities and police are experimenting carefully, under strict conditions.",
      "Both sides have a point: catching criminals faster on one side, and the right to walk down the street unnoticed on the other. Maybe the question is not whether we use the technology, but how often and under which rules. And what do you think?"
    ]
  },
  words: [
    { nl: 'gezichtsherkenning', en: 'facial recognition', defNl: 'techniek die een gezicht herkent en vergelijkt met een database', defEn: 'technology that recognises a face and compares it to a database' },
    { nl: 'voortvluchtig', en: 'fugitive', defNl: 'op de vlucht voor de politie', defEn: 'on the run from the police' },
    { nl: 'aanhouden', en: 'to detain', defNl: 'vasthouden of oppakken door de politie', defEn: 'to be stopped or detained by the police' }
  ],
  questions: [
    { id: 'q1', type: 'mc', skill: 'letterlijk',
      q: { nl: 'Wat meet de computer om een unieke code van je gezicht te maken?', en: 'What does the computer measure to make a unique code of your face?' },
      options: [
        { nl: 'De afstand tussen je ogen, neus en mond', en: 'The distance between your eyes, nose and mouth' },
        { nl: 'De kleur van je haar', en: 'The colour of your hair' },
        { nl: 'Je lengte en gewicht', en: 'Your height and weight' },
        { nl: 'Je stem', en: 'Your voice' }
      ], answer: 0,
      explain: { nl: 'Alinea 2: "een computer meet de afstand tussen je ogen, je neus en je mond."',
                 en: 'Paragraph 2: "a computer measures the distance between your eyes, your nose and your mouth."' } },
    { id: 'q2', type: 'sort', skill: 'feitmening',
      q: { nl: 'Feit of mening? Zet elke zin in de goede groep.', en: 'Fact or opinion? Put every sentence in the right group.' },
      bins: [{ nl: 'Feit', en: 'Fact' }, { nl: 'Mening', en: 'Opinion' }],
      items: [
        { nl: 'De techniek maakt vaker fouten bij mensen met een donkere huidskleur en bij vrouwen.',
          en: 'The technology makes more mistakes with people who have darker skin and with women.', bin: 0 },
        { nl: 'Iemand die weet dat hij herkend kan worden, denkt misschien wel twee keer na voordat hij steelt.',
          en: 'Someone who knows they might be recognised may think twice before stealing.', bin: 1 },
        { nl: 'Sommige landen verbieden gezichtsherkenning op straat helemaal.',
          en: 'Some countries ban facial recognition in public completely.', bin: 0 },
        { nl: 'Beide kanten hebben een punt.', en: 'Both sides have a point.', bin: 1 }
      ],
      explain: { nl: 'Wat gemeten of vastgelegd is, zoals onderzoek of een wet, is een feit. Een verwachting over gedrag of een oordeel is een mening.',
                 en: 'What is measured or recorded, like research or a law, is a fact. An expectation about behaviour or a judgement is an opinion.' } },
    { id: 'q3', type: 'mc', skill: 'doel',
      q: { nl: 'Wat wil de schrijver met deze tekst vooral bereiken?', en: 'What is the writer mainly trying to achieve with this text?' },
      options: [
        { nl: 'Je laten nadenken over een lastige vraag, door beide kanten eerlijk te laten zien', en: 'Make you think about a difficult question, by showing both sides fairly' },
        { nl: 'Je overtuigen dat gezichtsherkenning overal verboden moet worden', en: 'Convince you that facial recognition should be banned everywhere' },
        { nl: 'Je bang maken voor camera’s', en: 'Make you afraid of cameras' },
        { nl: 'Uitleggen hoe je zelf een camera installeert', en: 'Explain how to install a camera yourself' }
      ], answer: 0,
      explain: { nl: 'De tekst geeft eerst de voorstanders het woord, dan de tegenstanders, en eindigt met "En wat vind jij?"',
                 en: 'The text first gives the supporters a voice, then the opponents, and ends with "And what do you think?"' } },
    { id: 'q4', type: 'mc', skill: 'verwijswoorden',
      q: { nl: '"Zo\'n fout kan betekenen dat een onschuldig persoon wordt aangehouden." Waar verwijst "zo\'n fout" naar?', en: '"Such a mistake can mean an innocent person is detained." What does "such a mistake" refer to?' },
      options: [
        { nl: 'Dat de techniek zich vaker vergist bij mensen met een donkere huidskleur of bij vrouwen', en: 'That the technology makes more mistakes with people who have darker skin or with women' },
        { nl: 'Dat een camera kapot is', en: 'That a camera is broken' },
        { nl: 'Dat een verdachte weet te ontsnappen', en: 'That a suspect manages to escape' },
        { nl: 'Dat een rechter geen toestemming geeft', en: 'That a judge refuses permission' }
      ], answer: 0,
      explain: { nl: 'De zin ervoor noemt precies dat: vaker fouten bij mensen met een donkere huidskleur en bij vrouwen.',
                 en: 'The sentence before names exactly that: more mistakes with people who have darker skin and with women.' } },
    { id: 'q5', type: 'multi', skill: 'gevolgtrekking',
      q: { nl: 'Welke twee argumenten gebruiken de voorstanders van gezichtsherkenning? Kies er 2.', en: 'Which two arguments do supporters of facial recognition use? Pick 2.' },
      options: [
        { nl: 'Voortvluchtige verdachten of vermiste kinderen kunnen sneller gevonden worden', en: 'Fugitive suspects or missing children can be found faster' },
        { nl: 'Mensen denken misschien twee keer na voordat ze iets stelen, omdat ze herkend kunnen worden', en: 'People may think twice before stealing something, because they might be recognised' },
        { nl: 'De techniek is helemaal gratis', en: 'The technology is completely free' },
        { nl: 'Iedereen vindt camera’s mooi staan', en: 'Everybody thinks cameras look nice' }
      ], answer: [0, 1],
      explain: { nl: 'Alinea 3 noemt precies deze twee argumenten van de voorstanders.',
                 en: 'Paragraph 3 names exactly these two arguments from the supporters.' } },
    { id: 'q6', type: 'tf', skill: 'gevolgtrekking',
      q: { nl: 'Uit de tekst blijkt dat elk land gezichtsherkenning op dezelfde manier gebruikt.', en: 'The text shows that every country uses facial recognition in the same way.' },
      answer: false,
      explain: { nl: 'Alinea 6: sommige landen verbieden het helemaal, andere staan het alleen toe bij ernstige misdrijven met toestemming van een rechter.',
                 en: 'Paragraph 6: some countries ban it completely, others only allow it for serious crimes with a judge’s approval.' } },
    { id: 'q7', type: 'mc', skill: 'structuur',
      q: { nl: 'Waarom staat het citaat van de politiewoordvoerder in alinea 4, vlak na de uitleg van de voorstanders?', en: 'Why does the quote from the police spokesperson appear in paragraph 4, right after the explanation of the supporters’ view?' },
      options: [
        { nl: 'Het geeft een concreet voorbeeld dat het argument van de voorstanders ondersteunt', en: 'It gives a concrete example that supports the supporters’ argument' },
        { nl: 'Het is het slot van de hele tekst', en: 'It is the conclusion of the whole text' },
        { nl: 'Het weerlegt wat de voorstanders net zeiden', en: 'It contradicts what the supporters just said' },
        { nl: 'Het legt uit hoe de camera technisch werkt', en: 'It explains how the camera technically works' }
      ], answer: 0,
      explain: { nl: 'Na het algemene argument van de voorstanders volgt een echt voorbeeld dat het kracht bijzet.',
                 en: 'After the supporters’ general argument follows a real example that backs it up.' } },
    { id: 'q8', type: 'mc', skill: 'samenvatten',
      q: { nl: 'Welke samenvatting past het beste bij de hele tekst?', en: 'Which summary fits the whole text best?' },
      options: [
        { nl: 'Gezichtsherkenning kan misdaad sneller oplossen, maar brengt risico’s op fouten en verlies van privacy met zich mee, dus landen gaan er verschillend mee om.',
          en: 'Facial recognition can solve crime faster, but brings risks of mistakes and loss of privacy, so countries handle it differently.' },
        { nl: 'Een computer meet de afstand tussen je ogen, neus en mond.', en: 'A computer measures the distance between your eyes, nose and mouth.' },
        { nl: 'Vorig jaar vond de politie een vermist meisje terug dankzij een camera.', en: 'Last year the police found a missing girl thanks to a camera.' },
        { nl: 'Gezichtsherkenning maakt vaker fouten bij vrouwen en mensen met een donkere huidskleur.', en: 'Facial recognition makes more mistakes with women and people who have darker skin.' }
      ], answer: 0,
      explain: { nl: 'Een goede samenvatting bevat het voordeel, het risico én de conclusie dat landen er verschillend mee omgaan. De andere drie zijn losse details uit één alinea.',
                 en: 'A good summary contains the benefit, the risk, and the conclusion that countries handle it differently. The other three are single details from one paragraph.' } },
    { id: 'q9', type: 'mc', skill: 'woordenschat',
      q: { nl: 'Wat betekent "voortvluchtig" in de tekst?', en: 'What does "fugitive" mean in the text?' },
      options: [
        { nl: 'Op de vlucht voor de politie', en: 'On the run from the police' },
        { nl: 'Heel snel kunnen rennen', en: 'Able to run very fast' },
        { nl: 'Iemand die nooit gevonden wordt', en: 'Someone who is never found' },
        { nl: 'Een soort camera', en: 'A kind of camera' }
      ], answer: 0,
      explain: { nl: 'Een voortvluchtige verdachte is iemand die de politie nog zoekt omdat hij op de vlucht is.',
                 en: 'A fugitive suspect is someone the police are still looking for because they are on the run.' } }
  ]
},
{
  id: 'mysterie-11', topic: 'mysterie', level: 1, emoji: '🐾', scene: 'night',
  title: { nl: 'Wie at de taart van de buren?', en: 'Who ate the neighbours’ cake?' },
  text: {
    nl: [
      "Mevrouw De Wit had een appeltaart gebakken. Ze zette hem in de vensterbank om af te koelen en ging even de was ophangen. Toen ze terugkwam, was er een groot stuk uit de taart verdwenen!",
      "Mila en haar broertje Ties wonen naast mevrouw De Wit. Ze houden van raadsels. \"Wij zoeken het uit,\" zei Mila, en ze pakte haar vergrootglas.",
      "Op de vensterbank lagen kruimels. Op de grond eronder zagen ze kleine pootafdrukken in de modder. Het waren vier ronde teentjes en een kussentje, zonder nageltjes ervoor.",
      "\"Een hond!\" riep Ties. Maar Mila schudde haar hoofd. \"Een hond laat altijd krassen van zijn nagels achter. Een kat trekt haar nagels in als ze loopt.\" Ze keken omhoog. Op het schuurdak lag Minoes, de kat van de overkant. Aan haar snorharen hing nog een stukje appel.",
      "Mevrouw De Wit moest lachen. \"Dan bak ik voortaan een extra taartje,\" zei ze. \"Eén voor mij en één voor de speurders.\""
    ],
    en: [
      "Mrs De Wit had baked an apple pie. She put it on the windowsill to cool down and went to hang out the washing. When she came back, a big piece of the pie had disappeared!",
      "Mila and her little brother Ties live next door to Mrs De Wit. They love mysteries. \"We will find out,\" said Mila, and she grabbed her magnifying glass.",
      "There were crumbs on the windowsill. On the ground below, they saw small paw prints in the mud. There were four round toes and a pad, with no claw marks in front of them.",
      "\"A dog!\" shouted Ties. But Mila shook her head. \"A dog always leaves scratches from its claws. A cat pulls its claws in when it walks.\" They looked up. On the shed roof lay Minoes, the cat from across the street. A little piece of apple was still hanging from her whiskers.",
      "Mrs De Wit burst out laughing. \"From now on I will bake an extra little pie,\" she said. \"One for me and one for the detectives.\""
    ]
  },
  words: [
    { nl: 'vensterbank', en: 'windowsill', defNl: 'de smalle plank onder een raam', defEn: 'the narrow shelf below a window' },
    { nl: 'vergrootglas', en: 'magnifying glass', defNl: 'een glas waardoor kleine dingen groter lijken', defEn: 'a glass that makes small things look bigger' },
    { nl: 'speurders', en: 'detectives', defNl: 'mensen die sporen zoeken om iets op te lossen', defEn: 'people who look for clues to solve something' }
  ],
  questions: [
    { id: 'q1', type: 'mc', skill: 'letterlijk',
      q: { nl: 'Waar zette mevrouw De Wit de taart neer?', en: 'Where did Mrs De Wit put the pie?' },
      options: [
        { nl: 'Op het schuurdak', en: 'On the shed roof' },
        { nl: 'In de koelkast', en: 'In the fridge' },
        { nl: 'In de vensterbank', en: 'On the windowsill' },
        { nl: 'Op de tafel in de tuin', en: 'On the garden table' }
      ], answer: 2,
      explain: { nl: 'In de eerste alinea staat: "Ze zette hem in de vensterbank om af te koelen."',
                 en: 'The first paragraph says: "She put it on the windowsill to cool down."' } },
    { id: 'q2', type: 'tf', skill: 'letterlijk',
      q: { nl: 'Bij de pootafdrukken zagen Mila en Ties krassen van nagels.', en: 'Next to the paw prints Mila and Ties saw claw scratches.' },
      answer: false,
      explain: { nl: 'Niet waar. Er stonden pootafdrukken "zonder nageltjes ervoor". Juist daarom was het geen hond.',
                 en: 'False. The prints had "no claw marks in front of them". That is exactly why it was not a dog.' } },
    { id: 'q3', type: 'gap', skill: 'woordenschat',
      q: { nl: 'Mila en Ties zoeken sporen om het raadsel op te lossen. Ze zijn echte ___.', en: 'Mila and Ties look for clues to solve the mystery. They are real ___.' },
      options: [
        { nl: 'bakkers', en: 'bakers' },
        { nl: 'speurders', en: 'detectives' },
        { nl: 'buren', en: 'neighbours' },
        { nl: 'dieven', en: 'thieves' }
      ], answer: 1,
      explain: { nl: 'Speurders zoeken sporen om iets op te lossen, precies wat Mila en Ties doen.',
                 en: 'Detectives look for clues to solve something, exactly what Mila and Ties do.' } },
    { id: 'q4', type: 'order', skill: 'volgorde',
      q: { nl: 'Zet het speurwerk in de goede volgorde.', en: 'Put the detective work in the right order.' },
      items: [
        { nl: 'Er is een stuk uit de taart verdwenen.', en: 'A piece of the pie has disappeared.' },
        { nl: 'Mila pakt haar vergrootglas.', en: 'Mila grabs her magnifying glass.' },
        { nl: 'Ze vinden pootafdrukken zonder nagels.', en: 'They find paw prints without claw marks.' },
        { nl: 'Ze zien Minoes met appel aan haar snorharen.', en: 'They see Minoes with apple on her whiskers.' }
      ], answer: [0, 1, 2, 3],
      explain: { nl: 'Eerst verdwijnt de taart, dan gaan ze zoeken, dan vinden ze het spoor en tot slot de dader.',
                 en: 'First the pie disappears, then they search, then they find the clue and finally the culprit.' } },
    { id: 'q5', type: 'mc', skill: 'hoofdgedachte',
      q: { nl: 'Waar gaat dit verhaal vooral over?', en: 'What is this story mainly about?' },
      options: [
        { nl: 'Hoe je een appeltaart bakt', en: 'How to bake an apple pie' },
        { nl: 'Twee kinderen die met slim speurwerk ontdekken dat een kat de taart at', en: 'Two children who use clever detective work to discover a cat ate the pie' },
        { nl: 'Waarom honden nagels hebben', en: 'Why dogs have claws' },
        { nl: 'Hoe je de was ophangt', en: 'How to hang out the washing' }
      ], answer: 1,
      explain: { nl: 'Het verhaal volgt het speurwerk van Mila en Ties, van verdwenen taart tot de kat als dader.',
                 en: 'The story follows the detective work of Mila and Ties, from the missing pie to the cat as culprit.' } }
  ]
},

{
  id: 'mysterie-12', topic: 'mysterie', level: 6, emoji: '🕵️', scene: 'night',
  title: { nl: 'Word een nepnieuwsdetective', en: 'Become a fake news detective' },
  text: {
    nl: [
      "Op een woensdagmiddag gaat een filmpje rond in de klassenapp. Je ziet een haai die door een ondergelopen straat zwemt, vlak na een storm. 'Echt gebeurd in Rotterdam!' staat erbij. Binnen een uur hebben honderden mensen het doorgestuurd. Maar een foto van precies zo'n haai duikt al sinds 2011 op, bij bijna elke overstroming ter wereld. Hij is in elkaar geknutseld op een computer.",
      "Nepnieuws is zo oud als nieuws zelf, maar door het internet verspreidt het zich sneller dan ooit. Onderzoekers ontdekten dat valse berichten op sociale media vaak vaker gedeeld worden dan echte. Dat komt niet doordat mensen dom zijn. Een saai maar waar bericht wordt veel minder vaak doorgestuurd. Nepnieuws is juist gemaakt om je te verrassen, bang te maken of boos te maken. En als je sterk iets voelt, druk je sneller op 'delen'.",
      "Gelukkig kun je leren om een bericht te controleren, net als een detective die sporen onderzoekt. De eerste vraag is: wie zegt dit? Staat er een bekende nieuwsorganisatie onder, of een onbekend account dat gisteren is aangemaakt? De tweede vraag: wanneer is het gemaakt? Oude foto's worden vaak opnieuw gebruikt bij nieuwe gebeurtenissen, zoals bij die haai.",
      "De derde vraag is: vertellen anderen hetzelfde? Als er echt een haai door Rotterdam zwemt, staat dat binnen een paar minuten op elke nieuwssite. Zie je het alleen in één filmpje, dan is dat verdacht. Ten slotte kun je een foto terugzoeken. Met een zoekmachine kun je een afbeelding uploaden en kijken waar die eerder verscheen. Zo zie je in een paar tellen dat de haai al jaren rondzwemt.",
      "Nieuwe technieken maken het wel lastiger. Met slimme computerprogramma's kan tegenwoordig bijna iedereen een nepfoto of zelfs een nepstem maken die heel echt lijkt. Zulke vervalsingen heten deepfakes. Let daarom ook op kleine foutjes: handen met zes vingers, tekst op de achtergrond die nergens op slaat, of een stem die net iets te vlak klinkt. En onthoud: hoe schokkender een bericht is, hoe beter je moet kijken.",
      "Het belangrijkste wapen van een nepnieuwsdetective is geen computer, maar geduld. Wacht even voordat je iets doorstuurt. Stel jezelf de vier vragen. Vraag het desnoods aan een ouder of je juf. Twijfel je nog steeds? Stuur het dan niet door. Zo zorg je ervoor dat een leugen bij jou ophoudt, in plaats van dat hij via jou verder reist."
    ],
    en: [
      "One Wednesday afternoon a video goes round the class chat. You see a shark swimming down a flooded street, just after a storm. 'Really happened in Rotterdam!' it says. Within an hour hundreds of people have forwarded it. But a photo of exactly that kind of shark has been popping up since 2011, at almost every flood in the world. It was put together on a computer.",
      "Fake news is as old as news itself, but thanks to the internet it spreads faster than ever. Researchers discovered that false messages on social media are often shared more than true ones. That is not because people are stupid. A boring but true message gets forwarded far less often. Fake news is made precisely to surprise you, frighten you or make you angry. And when you feel something strongly, you press 'share' more quickly.",
      "Luckily you can learn to check a message, just like a detective investigating clues. The first question is: who is saying this? Is a well-known news organisation behind it, or an unknown account created yesterday? The second question: when was it made? Old photos are often reused for new events, as with that shark.",
      "The third question is: are others saying the same? If a shark really is swimming through Rotterdam, it will be on every news site within minutes. If you only see it in one video, that is suspicious. Finally you can trace a photo back. With a search engine you can upload a picture and see where it appeared before. That way you see in a few seconds that the shark has been swimming around for years.",
      "New techniques do make it harder. With clever computer programs almost anyone can now make a fake photo or even a fake voice that looks or sounds very real. Such forgeries are called deepfakes. So also look out for small mistakes: hands with six fingers, text in the background that makes no sense, or a voice that sounds just a little too flat. And remember: the more shocking a message is, the more closely you should look.",
      "The most important weapon of a fake news detective is not a computer, but patience. Wait a moment before you forward something. Ask yourself the four questions. If you need to, ask a parent or your teacher. Still in doubt? Then do not forward it. That way you make sure a lie stops with you, instead of travelling on through you."
    ]
  },
  words: [
    { nl: 'verspreiden', en: 'to spread', defNl: 'overal naartoe gaan of gestuurd worden', defEn: 'to go or be sent everywhere' },
    { nl: 'vervalsing', en: 'forgery', defNl: 'iets wat nagemaakt is om mensen te bedriegen', defEn: 'something copied in order to fool people' },
    { nl: 'verdacht', en: 'suspicious', defNl: 'zo dat je denkt dat er iets niet klopt', defEn: 'making you think that something is not right' }
  ],
  questions: [
    { id: 'q1', type: 'mc', skill: 'letterlijk',
      q: { nl: 'Sinds wanneer duikt een foto van zo\'n haai al op?', en: 'Since when has a photo of such a shark been popping up?' },
      options: [
        { nl: 'Sinds 2011', en: 'Since 2011' },
        { nl: 'Sinds vorige week', en: 'Since last week' },
        { nl: 'Sinds de storm in Rotterdam', en: 'Since the storm in Rotterdam' },
        { nl: 'Sinds 1953', en: 'Since 1953' }
      ], answer: 0,
      explain: { nl: 'Alinea 1: de foto "duikt al sinds 2011 op, bij bijna elke overstroming ter wereld".',
                 en: 'Paragraph 1: the photo "has been popping up since 2011, at almost every flood in the world".' } },
    { id: 'q2', type: 'find', skill: 'gevolgtrekking',
      q: { nl: 'Welke zin legt uit waarom mensen nepnieuws zo snel doorsturen?', en: 'Which sentence explains why people forward fake news so quickly?' },
      options: [
        { nl: 'Binnen een uur hebben honderden mensen het doorgestuurd.', en: 'Within an hour hundreds of people have forwarded it.' },
        { nl: 'Hij is in elkaar geknutseld op een computer.', en: 'It was put together on a computer.' },
        { nl: "En als je sterk iets voelt, druk je sneller op 'delen'.", en: "And when you feel something strongly, you press 'share' more quickly." },
        { nl: 'Zulke vervalsingen heten deepfakes.', en: 'Such forgeries are called deepfakes.' }
      ], answer: 2,
      explain: { nl: 'Nepnieuws speelt in op je gevoel. Een sterk gevoel maakt dat je sneller deelt: dat is de oorzaak.',
                 en: 'Fake news plays on your feelings. A strong feeling makes you share faster: that is the cause.' } },
    { id: 'q3', type: 'gap', skill: 'woordenschat',
      q: { nl: 'Een deepfake is ___.', en: 'A deepfake is ___.' },
      options: [
        { nl: 'een nepfoto, nepfilmpje of nepstem die met een computer gemaakt is', en: 'a fake photo, video or voice made with a computer' },
        { nl: 'een heel diepe zee', en: 'a very deep sea' },
        { nl: 'een bekende nieuwsorganisatie', en: 'a well-known news organisation' },
        { nl: 'een zoekmachine voor foto\'s', en: 'a search engine for photos' }
      ], answer: 0,
      explain: { nl: 'Alinea 5: nepfoto\'s en nepstemmen die heel echt lijken, "zulke vervalsingen heten deepfakes".',
                 en: 'Paragraph 5: fake photos and voices that seem real, "such forgeries are called deepfakes".' } },
    { id: 'q4', type: 'order', skill: 'volgorde',
      q: { nl: 'Zet de vragen van de nepnieuwsdetective in de volgorde van de tekst.', en: 'Put the fake news detective\'s questions in the order of the text.' },
      items: [
        { nl: 'Wie zegt dit?', en: 'Who is saying this?' },
        { nl: 'Wanneer is het gemaakt?', en: 'When was it made?' },
        { nl: 'Vertellen anderen hetzelfde?', en: 'Are others saying the same?' },
        { nl: 'Waar verscheen de foto eerder?', en: 'Where did the photo appear before?' }
      ], answer: [0, 1, 2, 3],
      explain: { nl: 'Let op de signaalwoorden: "De eerste vraag", "De tweede vraag", "De derde vraag" en "Ten slotte".',
                 en: 'Watch the signal words: "the first question", "the second question", "the third question" and "finally".' } },
    { id: 'q5', type: 'mc', skill: 'verwijswoorden',
      q: { nl: '"Zo zie je in een paar tellen dat de haai al jaren rondzwemt." Waar verwijst "zo" naar?', en: '"That way you see in a few seconds that the shark has been swimming around for years." What does "that way" refer to?' },
      options: [
        { nl: 'Naar het terugzoeken van de foto met een zoekmachine', en: 'To tracing the photo back with a search engine' },
        { nl: 'Naar het doorsturen in de klassenapp', en: 'To forwarding it in the class chat' },
        { nl: 'Naar het kijken naar handen met zes vingers', en: 'To looking at hands with six fingers' },
        { nl: 'Naar het wachten voordat je iets deelt', en: 'To waiting before you share something' }
      ], answer: 0,
      explain: { nl: 'De zin ervoor legt uit hoe je met een zoekmachine een afbeelding terugzoekt. Daar wijst "zo" naar.',
                 en: 'The sentence before explains how to trace a picture with a search engine. "That way" points to that.' } },
    { id: 'q6', type: 'sort', skill: 'feitmening',
      q: { nl: 'Feit of mening? Zet elke zin in de goede groep.', en: 'Fact or opinion? Put every sentence in the right group.' },
      bins: [{ nl: 'Feit', en: 'Fact' }, { nl: 'Mening', en: 'Opinion' }],
      items: [
        { nl: 'Met een zoekmachine kun je een afbeelding terugzoeken.', en: 'You can trace a picture back with a search engine.', bin: 0 },
        { nl: 'Geduld is het belangrijkste wapen tegen nepnieuws.', en: 'Patience is the most important weapon against fake news.', bin: 1 },
        { nl: 'Een foto van zo\'n haai duikt al sinds 2011 op.', en: 'A photo of such a shark has been popping up since 2011.', bin: 0 },
        { nl: 'Wie nepnieuws deelt, is dom.', en: 'Anyone who shares fake news is stupid.', bin: 1 }
      ],
      explain: { nl: 'Wat een zoekmachine kan en sinds wanneer de foto rondgaat, is na te gaan. "Het belangrijkste" en "dom" zijn oordelen.',
                 en: 'What a search engine can do and since when the photo has been around can be checked. "Most important" and "stupid" are judgements.' } },
    { id: 'q7', type: 'multi', skill: 'letterlijk',
      q: { nl: 'Aan welke foutjes kun je een deepfake soms herkennen? Kies er 2.', en: 'By which mistakes can you sometimes recognise a deepfake? Pick 2.' },
      options: [
        { nl: 'Handen met zes vingers', en: 'Hands with six fingers' },
        { nl: 'Een stem die net iets te vlak klinkt', en: 'A voice that sounds just a little too flat' },
        { nl: 'Een datum onder de foto', en: 'A date under the photo' },
        { nl: 'Een bekende nieuwsorganisatie eronder', en: 'A well-known news organisation behind it' }
      ], answer: [0, 1],
      explain: { nl: 'Alinea 5 noemt zes vingers, tekst die nergens op slaat en een te vlakke stem.',
                 en: 'Paragraph 5 names six fingers, text that makes no sense and a voice that is too flat.' } },
    { id: 'q8', type: 'mc', skill: 'doel',
      q: { nl: 'Wat is het doel van de schrijver?', en: 'What is the writer\'s purpose?' },
      options: [
        { nl: 'De lezer leren hoe hij nepnieuws herkent en tegenhoudt', en: 'Teach the reader how to recognise and stop fake news' },
        { nl: 'De lezer bang maken voor haaien', en: 'Make the reader afraid of sharks' },
        { nl: 'Vertellen wat er in Rotterdam gebeurde', en: 'Tell what happened in Rotterdam' },
        { nl: 'Reclame maken voor een zoekmachine', en: 'Advertise a search engine' }
      ], answer: 0,
      explain: { nl: 'De tekst geeft stappen en tips, en eindigt met een advies. Dat is een tekst die iets wil aanleren.',
                 en: 'The text gives steps and tips and ends with advice. It is a text that wants to teach something.' } },
    { id: 'q9', type: 'tf', skill: 'gevolgtrekking',
      q: { nl: 'Volgens de schrijver sturen mensen nepnieuws door omdat ze dom zijn.', en: 'According to the writer, people forward fake news because they are stupid.' },
      answer: false,
      explain: { nl: 'Alinea 2 zegt juist: "Dat komt niet doordat mensen dom zijn." Het ligt aan hoe nepnieuws gemaakt is.',
                 en: 'Paragraph 2 says the opposite: "That is not because people are stupid." It is down to how fake news is made.' } },
    { id: 'q10', type: 'find', skill: 'hoofdgedachte',
      q: { nl: 'Welke zin geeft de belangrijkste boodschap van de tekst?', en: 'Which sentence gives the most important message of the text?' },
      options: [
        { nl: 'Nepnieuws is zo oud als nieuws zelf, maar door het internet verspreidt het zich sneller dan ooit.', en: 'Fake news is as old as news itself, but thanks to the internet it spreads faster than ever.' },
        { nl: 'Nieuwe technieken maken het wel lastiger.', en: 'New techniques do make it harder.' },
        { nl: 'De derde vraag is: vertellen anderen hetzelfde?', en: 'The third question is: are others saying the same?' },
        { nl: 'Zo zorg je ervoor dat een leugen bij jou ophoudt, in plaats van dat hij via jou verder reist.', en: 'That way you make sure a lie stops with you, instead of travelling on through you.' }
      ], answer: 3,
      explain: { nl: 'Alles in de tekst leidt naar dit doel: jij kunt nepnieuws tegenhouden. De andere zinnen zijn onderdelen.',
                 en: 'Everything in the text leads to this goal: you can stop fake news. The other sentences are parts of it.' } }
  ]
}
]);
