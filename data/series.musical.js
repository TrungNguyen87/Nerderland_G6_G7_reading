/* Vervolgverhaal - Muziek & Kunst: De stem achter het gordijn
   Hoofdstuk 1 = groep 6 (niveau 2), 2 = groep 7 (niveau 4), 3 = groep 8 (niveau 6).
   Dit boek groeit letterlijk mee: Sara zit in hoofdstuk 1 in groep 6 en in hoofdstuk 3 in groep 8. */
addSeries({
  id: 'musical', topic: 'muziek', emoji: '🎭',
  title: { nl: 'De stem achter het gordijn', en: 'The voice behind the curtain' },
  blurb: { nl: 'Sara zingt prachtig, maar alleen als niemand luistert. Van groep 6 tot de eindmusical van groep 8.',
           en: 'Sara sings beautifully, but only when nobody is listening. From group 6 to the group 8 end-of-year musical.' },
  chapters: [
{
  level: 2, emoji: '🎤', scene: 'stage',
  title: { nl: 'Het spookkind', en: 'The ghost child' },
  teaser: { nl: 'Wat doet Sara, nu de microfoon het niet doet en honderd mensen wachten?', en: 'What will Sara do, now that the microphone is not working and a hundred people are waiting?' },
  text: {
    nl: [
      "Sara zit in groep 6 en ze zingt de hele dag. Onder de douche, op de fiets, in bed. Maar alleen als niemand het hoort. Zodra iemand luistert, wordt haar keel zo dik als een tennisbal.",
      "Groep 8 speelt dit jaar de eindmusical ‘Het spookschip’. In één lied zingt een spookkind. Meester Bas zoekt een kind uit groep 6 met een heldere stem. Sara's vriend Levi schrijft haar naam op de lijst, zonder het te vragen.",
      "“Levi!” roept Sara boos. “Ik durf echt niet te zingen waar iedereen bij is.” Levi haalt zijn schouders op. “Je zingt het mooist van de hele klas”, zegt hij. “Dat mogen anderen ook eens horen.”",
      "Bij de auditie trillen Sara's knieën. Ze zingt twee regels en stopt dan. Meester Bas kijkt haar lang aan. Dan vraagt hij iets vreemds: “Wil je het nog een keer doen, maar dan achter het gordijn?” Achter het gordijn zingt Sara het hele lied.",
      "Ze krijgt de rol. Het spookkind hoeft niet op het podium te staan. Het zingt vanachter het doek, met een microfoon, alsof de stem uit het niets komt. Drie weken lang oefent Sara elke dag.",
      "Dan is het de grote avond. De zaal zit vol: honderd ouders, opa's en oma's. Het schip vaart, het licht gaat uit, en het is tijd voor het spooklied. Sara zet haar mond bij de microfoon en begint. Maar er komt geen geluid uit de luidsprekers. De microfoon doet het niet."
    ],
    en: [
      "Sara is in group 6 and she sings all day long. In the shower, on her bike, in bed. But only when nobody can hear. As soon as somebody listens, her throat feels as thick as a tennis ball.",
      "This year group 8 is putting on the end-of-year musical ‘The Ghost Ship’. In one song a ghost child sings. Mr Bas is looking for a child from group 6 with a clear voice. Sara’s friend Levi writes her name on the list, without asking her.",
      "“Levi!” Sara shouts angrily. “I really do not dare to sing in front of everybody.” Levi shrugs. “You sing the most beautifully of the whole class,” he says. “Other people should get to hear that too.”",
      "At the audition Sara’s knees are shaking. She sings two lines and then stops. Mr Bas looks at her for a long time. Then he asks something strange: “Would you like to do it again, but behind the curtain?” Behind the curtain Sara sings the whole song.",
      "She gets the part. The ghost child does not have to stand on the stage. It sings from behind the curtain, with a microphone, as if the voice comes out of nowhere. For three weeks Sara practises every day.",
      "Then it is the big night. The hall is full: a hundred parents, grandpas and grandmas. The ship sails, the lights go out, and it is time for the ghost song. Sara puts her mouth to the microphone and starts. But no sound comes out of the loudspeakers. The microphone is not working."
    ]
  },
  words: [
    { nl: 'auditie', en: 'audition', defNl: 'een test waarbij je laat horen of zien wat je kunt, zodat iemand kan kiezen wie de rol krijgt', defEn: 'a test in which you show what you can do, so somebody can choose who gets the part' },
    { nl: 'gordijn', en: 'curtain', defNl: 'een grote lap stof voor een raam of een podium', defEn: 'a large piece of cloth in front of a window or a stage' },
    { nl: 'luidsprekers', en: 'loudspeakers', defNl: 'apparaten die geluid harder maken, zodat iedereen het hoort', defEn: 'devices that make sound louder, so everybody can hear it' }
  ],
  questions: [
    { id: 'q1', type: 'mc', skill: 'letterlijk',
      q: { nl: 'Wanneer zingt Sara?', en: 'When does Sara sing?' },
      options: [
        { nl: 'Alleen als niemand het hoort', en: 'Only when nobody can hear' },
        { nl: 'Altijd hardop in de klas', en: 'Always out loud in class' },
        { nl: 'Alleen bij verjaardagen', en: 'Only at birthdays' },
        { nl: 'Nooit', en: 'Never' }
      ], answer: 0,
      explain: { nl: 'Alinea 1: ze zingt de hele dag, “maar alleen als niemand het hoort.”', en: 'Paragraph 1: she sings all day long, “but only when nobody can hear.”' } },
    { id: 'q2', type: 'tf', skill: 'letterlijk',
      q: { nl: 'Sara schrijft zelf haar naam op de lijst voor de auditie.', en: 'Sara writes her own name on the list for the audition.' },
      answer: false,
      explain: { nl: 'Levi schrijft haar naam op, zonder het haar te vragen.', en: 'Levi writes her name down, without asking her.' } },
    { id: 'q3', type: 'mc', skill: 'gevolgtrekking',
      q: { nl: 'Waarom laat meester Bas Sara achter het gordijn zingen?', en: 'Why does Mr Bas let Sara sing behind the curtain?' },
      options: [
        { nl: 'Hij merkt dat ze beter zingt als niemand haar ziet', en: 'He notices that she sings better when nobody can see her' },
        { nl: 'Het gordijn is mooier dan het podium', en: 'The curtain is prettier than the stage' },
        { nl: 'Hij wil haar niet horen', en: 'He does not want to hear her' },
        { nl: 'Er is geen plek op het podium', en: 'There is no room on the stage' }
      ], answer: 0,
      explain: { nl: 'Voor iedereen stopt ze na twee regels. Achter het gordijn zingt ze het hele lied.', en: 'In front of everybody she stops after two lines. Behind the curtain she sings the whole song.' } },
    { id: 'q4', type: 'order', skill: 'volgorde',
      q: { nl: 'Zet op volgorde wat er gebeurt.', en: 'Put what happens in order.' },
      items: [
        { nl: 'Levi schrijft de naam van Sara op.', en: 'Levi writes down Sara’s name.' },
        { nl: 'Sara stopt na twee regels.', en: 'Sara stops after two lines.' },
        { nl: 'Sara zingt achter het gordijn het hele lied.', en: 'Sara sings the whole song behind the curtain.' },
        { nl: 'De microfoon doet het niet.', en: 'The microphone is not working.' }
      ], answer: [0, 1, 2, 3],
      explain: { nl: 'De lijst, de auditie, de tweede poging, en drie weken later de grote avond.', en: 'The list, the audition, the second try, and three weeks later the big night.' } },
    { id: 'q5', type: 'gap', skill: 'woordenschat',
      q: { nl: 'Bij een ___ laat je horen wat je kunt, zodat iemand kan kiezen wie de rol krijgt.', en: 'At an ___ you show what you can do, so somebody can choose who gets the part.' },
      options: [
        { nl: 'auditie', en: 'audition' },
        { nl: 'repetitie', en: 'rehearsal' },
        { nl: 'microfoon', en: 'microphone' },
        { nl: 'vakantie', en: 'holiday' }
      ], answer: 0,
      explain: { nl: 'Op de auditie zingt Sara voor meester Bas, die kiest wie het spookkind wordt.', en: 'At the audition Sara sings for Mr Bas, who chooses who will be the ghost child.' } },
    { id: 'q6', type: 'mc', skill: 'hoofdgedachte',
      q: { nl: 'Waar gaat dit hoofdstuk vooral over?', en: 'What is this chapter mainly about?' },
      options: [
        { nl: 'Sara durft niet te zingen als mensen luisteren, maar krijgt toch een rol', en: 'Sara does not dare to sing when people listen, but still gets a part' },
        { nl: 'Hoe een microfoon werkt', en: 'How a microphone works' },
        { nl: 'De verjaardag van Levi', en: 'Levi’s birthday' },
        { nl: 'Een echt spookschip op zee', en: 'A real ghost ship at sea' }
      ], answer: 0,
      explain: { nl: 'Het draait om Sara en haar angst om gehoord te worden, tot aan de spannende avond.', en: 'It is about Sara and her fear of being heard, right up to the exciting night.' } }
  ]
},
{
  level: 4, emoji: '🎶', scene: 'stage',
  title: { nl: 'Het koor', en: 'The choir' },
  recap: { nl: 'Sara zingt graag, maar alleen als niemand het hoort. Toch krijgt ze in groep 6 de rol van het spookkind in de eindmusical: ze mag vanachter het gordijn zingen. Maar op de grote avond doet haar microfoon het niet.',
           en: 'Sara loves singing, but only when nobody can hear. Still, in group 6 she gets the part of the ghost child in the end-of-year musical: she may sing from behind the curtain. But on the big night her microphone does not work.' },
  teaser: { nl: 'Lukt het Sara om een eigen lied te schrijven voor de eindmusical?', en: 'Will Sara manage to write her own song for the end-of-year musical?' },
  text: {
    nl: [
      "Die avond stond Sara een paar tellen stokstijf achter het gordijn. Toen deed ze iets wat ze zelf nooit had verwacht. Ze duwde het doek opzij, liep het donkere podium op en zong. Zonder microfoon, zo hard als ze kon. Het werd doodstil in de zaal. Na de laatste noot bleef het nog even stil, en toen stond iedereen op om te klappen.",
      "Een jaar later zat Sara in groep 7 en in het schoolkoor. Juf Maaike, de dirigent, legde uit hoe je stem werkt. In je keel zitten twee stembanden. Als je lucht langs die banden blaast, gaan ze heel snel trillen, wel honderden keren per seconde. Dat trillen hoor je als geluid. Hoe strakker de banden gespannen zijn, hoe hoger de toon.",
      "Daarom begint elke repetitie met ademhalingsoefeningen. Wie diep vanuit zijn buik ademt, heeft meer lucht en kan een toon langer vasthouden. Daarna zingen ze toonladders om de stembanden op te warmen, net zoals voetballers eerst hun spieren warm maken.",
      "Ook plankenkoorts kwam aan bod. Juf Maaike vertelde dat bijna alle zangers voor een optreden zenuwachtig zijn. Je lichaam maakt dan adrenaline, waardoor je hart sneller klopt en je handen gaan trillen. “Dat is geen teken dat je het niet kunt”, zei ze. “Het is je lichaam dat zich klaarmaakt voor iets belangrijks.” Sara dacht aan de avond achter het gordijn en knikte.",
      "In het voorjaar kwam meester Bas met groot nieuws. Volgend jaar, in groep 8, zou hun klas geen bestaande musical spelen, maar er zelf een schrijven. “En ik wil dat Sara het belangrijkste lied schrijft”, zei hij. De hele klas keek naar haar. Die avond zat Sara met een leeg schrift op haar kamer. Ze schreef één regel en streepte hem door. Toen nog een. Om tien uur was de bladzijde vol doorgestreepte zinnen."
    ],
    en: [
      "That night Sara stood frozen behind the curtain for a few seconds. Then she did something she had never expected of herself. She pushed the curtain aside, walked out onto the dark stage and sang. Without a microphone, as loud as she could. The hall went completely silent. After the last note it stayed quiet for a moment, and then everybody stood up to clap.",
      "A year later Sara was in group 7 and in the school choir. Miss Maaike, the conductor, explained how your voice works. In your throat there are two vocal cords. When you blow air past those cords, they vibrate very fast, hundreds of times a second. You hear that vibrating as sound. The tighter the cords are stretched, the higher the note.",
      "That is why every rehearsal starts with breathing exercises. If you breathe deeply from your belly, you have more air and can hold a note for longer. After that they sing scales to warm up their vocal cords, just like footballers first warm up their muscles.",
      "Stage fright came up too. Miss Maaike told them that almost all singers are nervous before a performance. Your body then makes adrenaline, which makes your heart beat faster and your hands shake. “That is not a sign that you cannot do it,” she said. “It is your body getting ready for something important.” Sara thought about the night behind the curtain and nodded.",
      "In the spring Mr Bas came with big news. Next year, in group 8, their class would not perform an existing musical, but write one themselves. “And I want Sara to write the most important song,” he said. The whole class looked at her. That evening Sara sat in her room with an empty notebook. She wrote one line and crossed it out. Then another. By ten o’clock the page was full of crossed-out sentences."
    ]
  },
  words: [
    { nl: 'dirigent', en: 'conductor', defNl: 'iemand die een koor of orkest leidt', defEn: 'somebody who leads a choir or orchestra' },
    { nl: 'stembanden', en: 'vocal cords', defNl: 'twee strakke bandjes in je keel die trillen als je praat of zingt', defEn: 'two tight little bands in your throat that vibrate when you talk or sing' },
    { nl: 'plankenkoorts', en: 'stage fright', defNl: 'het zenuwachtige gevoel voordat je moet optreden', defEn: 'the nervous feeling before you have to perform' }
  ],
  questions: [
    { id: 'q1', type: 'mc', skill: 'letterlijk',
      q: { nl: 'Wat deed Sara toen de microfoon het niet deed?', en: 'What did Sara do when the microphone did not work?' },
      options: [
        { nl: 'Ze liep het podium op en zong zonder microfoon', en: 'She walked onto the stage and sang without a microphone' },
        { nl: 'Ze rende naar huis', en: 'She ran home' },
        { nl: 'Ze wachtte tot hij gemaakt was', en: 'She waited until it was fixed' },
        { nl: 'Ze liet Levi zingen', en: 'She let Levi sing' }
      ], answer: 0,
      explain: { nl: 'Alinea 1: ze duwde het doek opzij, liep het podium op en zong, zonder microfoon.', en: 'Paragraph 1: she pushed the curtain aside, walked onto the stage and sang, without a microphone.' } },
    { id: 'q2', type: 'mc', skill: 'gevolgtrekking',
      q: { nl: 'Waarom beginnen ze elke repetitie met ademhalingsoefeningen?', en: 'Why do they start every rehearsal with breathing exercises?' },
      options: [
        { nl: 'Met diep ademen heb je meer lucht en kun je een toon langer vasthouden', en: 'Breathing deeply gives you more air so you can hold a note longer' },
        { nl: 'Om stil te worden voor de juf', en: 'To become quiet for the teacher' },
        { nl: 'Omdat de juf moe is', en: 'Because the teacher is tired' },
        { nl: 'Om te leren fluiten', en: 'To learn to whistle' }
      ], answer: 0,
      explain: { nl: 'Alinea 3: wie diep vanuit zijn buik ademt, heeft meer lucht en kan een toon langer vasthouden.', en: 'Paragraph 3: if you breathe deeply from your belly, you have more air and can hold a note longer.' } },
    { id: 'q3', type: 'mc', skill: 'verwijswoorden',
      q: { nl: '“Dat trillen hoor je als geluid.” Wat trilt er?', en: '“You hear that vibrating as sound.” What is vibrating?' },
      options: [
        { nl: 'De stembanden', en: 'The vocal cords' },
        { nl: 'De handen van Sara', en: 'Sara’s hands' },
        { nl: 'Het gordijn', en: 'The curtain' },
        { nl: 'De ramen van de zaal', en: 'The windows of the hall' }
      ], answer: 0,
      explain: { nl: 'De zin ervoor: de stembanden gaan heel snel trillen als er lucht langs blaast.', en: 'The sentence before: the vocal cords vibrate very fast when air blows past them.' } },
    { id: 'q4', type: 'multi', skill: 'letterlijk',
      q: { nl: 'Wat doet adrenaline met je lichaam? Kies er 2.', en: 'What does adrenaline do to your body? Pick 2.' },
      options: [
        { nl: 'Je hart klopt sneller', en: 'Your heart beats faster' },
        { nl: 'Je handen gaan trillen', en: 'Your hands shake' },
        { nl: 'Je wordt slaperig', en: 'You get sleepy' },
        { nl: 'Je krijgt het koud', en: 'You get cold' }
      ], answer: [0, 1],
      explain: { nl: 'Alinea 4: door adrenaline klopt je hart sneller en gaan je handen trillen.', en: 'Paragraph 4: adrenaline makes your heart beat faster and your hands shake.' } },
    { id: 'q5', type: 'order', skill: 'volgorde',
      q: { nl: 'Zet in de volgorde van het verhaal.', en: 'Put these in the order of the story.' },
      items: [
        { nl: 'Sara zingt zonder microfoon.', en: 'Sara sings without a microphone.' },
        { nl: 'Iedereen staat op om te klappen.', en: 'Everybody stands up to clap.' },
        { nl: 'Juf Maaike legt uit hoe je stem werkt.', en: 'Miss Maaike explains how your voice works.' },
        { nl: 'Meester Bas vertelt dat de klas een eigen musical gaat schrijven.', en: 'Mr Bas says the class will write its own musical.' },
        { nl: 'Sara streept zinnen door in haar schrift.', en: 'Sara crosses out sentences in her notebook.' }
      ], answer: [0, 1, 2, 3, 4],
      explain: { nl: 'De avond in groep 6, een jaar later het koor, en in het voorjaar het nieuws en het lege schrift.', en: 'The night in group 6, a year later the choir, and in spring the news and the empty notebook.' } },
    { id: 'q6', type: 'gap', skill: 'woordenschat',
      q: { nl: 'Het zenuwachtige gevoel voordat je moet optreden, heet ___.', en: 'The nervous feeling before you have to perform is called ___.' },
      options: [
        { nl: 'plankenkoorts', en: 'stage fright' },
        { nl: 'heimwee', en: 'homesickness' },
        { nl: 'hoofdpijn', en: 'a headache' },
        { nl: 'honger', en: 'hunger' }
      ], answer: 0,
      explain: { nl: 'Plankenkoorts: de planken zijn het podium. Bijna alle zangers hebben het weleens.', en: 'Stage fright: almost all singers have it sometimes.' } },
    { id: 'q7', type: 'mc', skill: 'structuur',
      q: { nl: 'Hoe is dit hoofdstuk opgebouwd?', en: 'How is this chapter built up?' },
      options: [
        { nl: 'Eerst hoe de avond afloopt, dan een jaar later het koor, en aan het eind een nieuwe uitdaging', en: 'First how the night ends, then a year later the choir, and at the end a new challenge' },
        { nl: 'Het is alleen uitleg over muziek', en: 'It is only an explanation about music' },
        { nl: 'Het begint in groep 8 en gaat terug naar groep 6', en: 'It starts in group 8 and goes back to group 6' },
        { nl: 'Het is een lied met coupletten', en: 'It is a song with verses' }
      ], answer: 0,
      explain: { nl: 'Alinea 1 sluit het vorige hoofdstuk af, alinea 2 tot 4 gaan over het koor, alinea 5 brengt iets nieuws.', en: 'Paragraph 1 closes the previous chapter, paragraphs 2 to 4 are about the choir, paragraph 5 brings something new.' } },
    { id: 'q8', type: 'mc', skill: 'hoofdgedachte',
      q: { nl: 'Wat is de belangrijkste boodschap van juf Maaike over zenuwen?', en: 'What is Miss Maaike’s most important message about nerves?' },
      options: [
        { nl: 'Zenuwen betekenen niet dat je het niet kunt: je lichaam maakt zich klaar', en: 'Nerves do not mean you cannot do it: your body is getting ready' },
        { nl: 'Wie zenuwachtig is, moet niet zingen', en: 'If you are nervous, you should not sing' },
        { nl: 'Adrenaline is gevaarlijk', en: 'Adrenaline is dangerous' },
        { nl: 'Je moet nooit optreden', en: 'You should never perform' }
      ], answer: 0,
      explain: { nl: 'Ze zegt: “Het is je lichaam dat zich klaarmaakt voor iets belangrijks.”', en: 'She says: “It is your body getting ready for something important.”' } }
  ]
},
{
  level: 6, emoji: '🎓', scene: 'stage',
  title: { nl: 'Het lied van groep 8', en: 'The song of group 8' },
  recap: { nl: 'In groep 6 durfde Sara het podium op te lopen en zonder microfoon te zingen. In groep 7 leerde ze in het koor hoe je stem werkt en wat plankenkoorts is. Nu moet ze voor de eindmusical van groep 8 het belangrijkste lied schrijven, maar er komt geen goede zin uit haar pen.',
           en: 'In group 6 Sara dared to walk onto the stage and sing without a microphone. In group 7 she learned in the choir how your voice works and what stage fright is. Now she has to write the most important song for the group 8 end-of-year musical, but no good line will come out of her pen.' },
  text: {
    nl: [
      "Na de zomer begon groep 8 aan de eigen musical. Eerst moest de klas kiezen waar hij over ging. Een groep wilde een grappig verhaal over een school vol robots. Een andere groep wilde iets serieus, over afscheid nemen. De discussie duurde twee lessen. Toen liet meester Bas iedereen stemmen: vijftien kinderen kozen voor de robots, dertien voor het afscheid. “Waarom niet allebei?” vroeg Sara. Zo werd het een grappige musical over robots die aan het eind van het jaar afscheid nemen van hun school.",
      "Het lied lukte nog steeds niet. Tot Sara op een zaterdag haar oude groep 6-rapport vond, met een tekening die Levi ooit voor haar had gemaakt. Levi was in groep 7 verhuisd naar Groningen. Opeens wist ze waar het lied over moest gaan: over dingen die je achterlaat, en dingen die je meeneemt. Ze schreef het in één middag.",
      "Juf Maaike hielp haar met de opbouw. Een lied bestaat meestal uit coupletten, een refrein en soms een brug. Elk couplet vertelt een ander stukje van het verhaal. Het refrein komt steeds terug en zegt waar het lied eigenlijk over gaat, zodat het publiek het kan meezingen. De brug komt vlak voor het laatste refrein en klinkt net even anders, zodat het slot extra hard binnenkomt.",
      "Sara's refrein was maar vier regels lang. ‘Ik neem de stilte mee van het lokaal, de krassen op mijn tafel allemaal. Ik weet nog niet waarheen ik ga, maar ik neem jullie mee, altijd daarna.’ Bij de eerste repetitie werd het stil in de klas. Daan, die altijd grapjes maakt, keek opeens heel lang naar het raam.",
      "Op de avond van de première had Sara plankenkoorts zoals nog nooit. Haar handen trilden en haar hart bonkte. Maar deze keer wist ze wat dat was: haar lichaam dat zich klaarmaakte. Ze keek naar de eerste rij, waar haar moeder zat. Ze stond in het midden van het podium, zonder gordijn. Toen het refrein kwam, zong de hele zaal mee.",
      "Na afloop stond er iemand achterin met een grote bos bloemen. Het was Levi. Hij was met zijn vader helemaal uit Groningen gekomen. “Ik zei toch dat anderen je stem ook eens moesten horen”, zei hij. Sara lachte en huilde tegelijk. Ze wist nu wat het lied betekende."
    ],
    en: [
      "After the summer group 8 started on its own musical. First the class had to choose what it would be about. One group wanted a funny story about a school full of robots. Another group wanted something serious, about saying goodbye. The discussion lasted two lessons. Then Mr Bas let everybody vote: fifteen children chose the robots, thirteen the goodbye. “Why not both?” asked Sara. So it became a funny musical about robots who say goodbye to their school at the end of the year.",
      "The song still would not come. Until one Saturday Sara found her old group 6 report, with a drawing that Levi had once made for her. Levi had moved to Groningen in group 7. Suddenly she knew what the song had to be about: about things you leave behind, and things you take with you. She wrote it in one afternoon.",
      "Miss Maaike helped her with the structure. A song usually consists of verses, a chorus and sometimes a bridge. Each verse tells a different part of the story. The chorus keeps coming back and says what the song is really about, so the audience can sing along. The bridge comes just before the last chorus and sounds a little different, so the ending hits extra hard.",
      "Sara’s chorus was only four lines long. ‘I take the silence of the classroom with me, the scratches on my desk for all to see. I do not know yet where I will go, but I take you with me, you should know.’ At the first rehearsal the classroom went quiet. Daan, who always makes jokes, suddenly stared out of the window for a long time.",
      "On the night of the premiere Sara had stage fright like never before. Her hands were shaking and her heart was pounding. But this time she knew what it was: her body getting ready. She looked at the front row, where her mother was sitting. She stood in the middle of the stage, with no curtain. When the chorus came, the whole hall sang along.",
      "Afterwards somebody was standing at the back with a big bunch of flowers. It was Levi. He had come all the way from Groningen with his father. “I told you other people should get to hear your voice,” he said. Sara laughed and cried at the same time. Now she knew what the song meant."
    ]
  },
  words: [
    { nl: 'coupletten', en: 'verses', defNl: 'de stukken van een lied die elke keer een ander stukje verhaal vertellen', defEn: 'the parts of a song that each tell a different part of the story' },
    { nl: 'refrein', en: 'chorus', defNl: 'het stuk van een lied dat steeds terugkomt', defEn: 'the part of a song that keeps coming back' },
    { nl: 'première', en: 'premiere', defNl: 'de allereerste voorstelling voor publiek', defEn: 'the very first performance for an audience' }
  ],
  questions: [
    { id: 'q1', type: 'mc', skill: 'letterlijk',
      q: { nl: 'Waar gaat de musical van groep 8 uiteindelijk over?', en: 'What is the group 8 musical about in the end?' },
      options: [
        { nl: 'Robots die aan het eind van het jaar afscheid nemen van hun school', en: 'Robots who say goodbye to their school at the end of the year' },
        { nl: 'Een spookschip op zee', en: 'A ghost ship at sea' },
        { nl: 'Een voetbalteam', en: 'A football team' },
        { nl: 'Een reis naar Groningen', en: 'A trip to Groningen' }
      ], answer: 0,
      explain: { nl: 'Alinea 1: Sara stelt voor om allebei de ideeën te combineren: robots én afscheid.', en: 'Paragraph 1: Sara suggests combining both ideas: robots and goodbye.' } },
    { id: 'q2', type: 'find', skill: 'gevolgtrekking',
      q: { nl: 'Welke zin laat zien waardoor Sara eindelijk wist waar haar lied over moest gaan?', en: 'Which sentence shows what made Sara finally know what her song should be about?' },
      options: [
        { nl: 'De discussie duurde twee lessen.', en: 'The discussion lasted two lessons.' },
        { nl: 'Het lied lukte nog steeds niet.', en: 'The song still would not come.' },
        { nl: 'Tot Sara op een zaterdag haar oude groep 6-rapport vond, met een tekening die Levi ooit voor haar had gemaakt.', en: 'Until one Saturday Sara found her old group 6 report, with a drawing that Levi had once made for her.' },
        { nl: 'Juf Maaike hielp haar met de opbouw.', en: 'Miss Maaike helped her with the structure.' }
      ], answer: 2,
      explain: { nl: 'De tekening van Levi, die verhuisd was, deed haar denken aan wat je achterlaat en meeneemt.', en: 'Levi’s drawing, from a friend who had moved away, made her think about what you leave behind and take with you.' } },
    { id: 'q3', type: 'gap', skill: 'woordenschat',
      q: { nl: 'Het stuk van een lied dat steeds terugkomt en dat het publiek kan meezingen, heet het ___.', en: 'The part of a song that keeps coming back and that the audience can sing along to is the ___.' },
      options: [
        { nl: 'refrein', en: 'chorus' },
        { nl: 'couplet', en: 'verse' },
        { nl: 'applaus', en: 'applause' },
        { nl: 'programma', en: 'programme' }
      ], answer: 0,
      explain: { nl: 'Het refrein komt steeds terug. Op de première zong de hele zaal het mee.', en: 'The chorus keeps coming back. At the premiere the whole hall sang along.' } },
    { id: 'q4', type: 'order', skill: 'volgorde',
      q: { nl: 'Zet in de volgorde van het verhaal.', en: 'Put these in the order of the story.' },
      items: [
        { nl: 'De klas stemt over de musical.', en: 'The class votes on the musical.' },
        { nl: 'Sara vindt haar oude rapport.', en: 'Sara finds her old report.' },
        { nl: 'Juf Maaike legt de opbouw van een lied uit.', en: 'Miss Maaike explains how a song is built.' },
        { nl: 'De hele zaal zingt het refrein mee.', en: 'The whole hall sings along with the chorus.' },
        { nl: 'Levi staat achterin met bloemen.', en: 'Levi is standing at the back with flowers.' }
      ], answer: [0, 1, 2, 3, 4],
      explain: { nl: 'Kiezen, schrijven, de opbouw, de première en na afloop de verrassing.', en: 'Choosing, writing, the structure, the premiere and afterwards the surprise.' } },
    { id: 'q5', type: 'mc', skill: 'verwijswoorden',
      q: { nl: '“Zo werd het een grappige musical over robots die afscheid nemen.” Waar verwijst “zo” naar?', en: '“So it became a funny musical about robots who say goodbye.” What does “so” refer to?' },
      options: [
        { nl: 'Naar het idee van Sara om de twee ideeën samen te voegen', en: 'To Sara’s idea of putting the two ideas together' },
        { nl: 'Naar de stemming', en: 'To the vote' },
        { nl: 'Naar de discussie van twee lessen', en: 'To the two-lesson discussion' },
        { nl: 'Naar het oude rapport', en: 'To the old report' }
      ], answer: 0,
      explain: { nl: 'Vlak ervoor vraagt Sara: “Waarom niet allebei?” Door dat idee werd het robots én afscheid.', en: 'Just before, Sara asks: “Why not both?” Because of that idea it became robots and goodbye.' } },
    { id: 'q6', type: 'sort', skill: 'structuur',
      q: { nl: 'Welk deel van een lied wordt bedoeld? Zet elke zin in de goede groep.', en: 'Which part of a song is meant? Put every sentence in the right group.' },
      bins: [ { nl: 'Couplet', en: 'Verse' }, { nl: 'Refrein', en: 'Chorus' }, { nl: 'Brug', en: 'Bridge' } ],
      items: [
        { nl: 'Vertelt elke keer een ander stukje van het verhaal.', en: 'Tells a different part of the story each time.', bin: 0 },
        { nl: 'Komt steeds terug, zodat het publiek kan meezingen.', en: 'Keeps coming back, so the audience can sing along.', bin: 1 },
        { nl: 'Klinkt net even anders, vlak voor het laatste refrein.', en: 'Sounds a little different, just before the last chorus.', bin: 2 },
        { nl: 'Zegt waar het lied eigenlijk over gaat.', en: 'Says what the song is really about.', bin: 1 }
      ],
      explain: { nl: 'Alinea 3 legt de drie delen uit: coupletten vertellen, het refrein komt terug en zegt waar het om gaat, de brug zorgt voor een sterk slot.', en: 'Paragraph 3 explains the three parts: verses tell the story, the chorus comes back and says what it is about, the bridge makes a strong ending.' } },
    { id: 'q7', type: 'multi', skill: 'letterlijk',
      q: { nl: 'Wat merkte Sara aan haar lichaam op de avond van de première? Kies er 2.', en: 'What did Sara notice in her body on the night of the premiere? Pick 2.' },
      options: [
        { nl: 'Haar handen trilden', en: 'Her hands were shaking' },
        { nl: 'Haar hart bonkte', en: 'Her heart was pounding' },
        { nl: 'Ze kreeg honger', en: 'She got hungry' },
        { nl: 'Ze werd slaperig', en: 'She got sleepy' }
      ], answer: [0, 1],
      explain: { nl: 'Alinea 5: “Haar handen trilden en haar hart bonkte.”', en: 'Paragraph 5: “Her hands were shaking and her heart was pounding.”' } },
    { id: 'q8', type: 'mc', skill: 'doel',
      q: { nl: 'Waarom vertelt de schrijver dat Daan, die altijd grapjes maakt, lang naar het raam keek?', en: 'Why does the writer tell you that Daan, who always makes jokes, stared out of the window for a long time?' },
      options: [
        { nl: 'Om te laten zien dat het lied zelfs hem ontroerde', en: 'To show that the song moved even him' },
        { nl: 'Om te laten zien dat Daan zich verveelde', en: 'To show that Daan was bored' },
        { nl: 'Om te zeggen dat het buiten mooi weer was', en: 'To say that the weather outside was nice' },
        { nl: 'Om te zeggen dat Daan niet kan zingen', en: 'To say that Daan cannot sing' }
      ], answer: 0,
      explain: { nl: 'Een grappenmaker die opeens stil wordt: zo laat de schrijver zien hoe sterk het lied is, zonder het te zeggen.', en: 'A joker who suddenly goes quiet: that is how the writer shows how powerful the song is, without saying it.' } },
    { id: 'q9', type: 'tf', skill: 'gevolgtrekking',
      q: { nl: 'Op de première schrok Sara van haar zenuwen, omdat ze niet wist wat het was.', en: 'At the premiere Sara was frightened by her nerves, because she did not know what they were.' },
      answer: false,
      explain: { nl: 'Deze keer wist ze wat het was: haar lichaam dat zich klaarmaakte. Dat had ze in groep 7 geleerd.', en: 'This time she knew what it was: her body getting ready. She had learned that in group 7.' } },
    { id: 'q10', type: 'find', skill: 'hoofdgedachte',
      q: { nl: 'Welke zin laat het beste zien hoe Sara in drie jaar veranderd is?', en: 'Which sentence best shows how Sara has changed in three years?' },
      options: [
        { nl: 'Bij de eerste repetitie werd het stil in de klas.', en: 'At the first rehearsal the classroom went quiet.' },
        { nl: 'Ze keek naar de eerste rij, waar haar moeder zat.', en: 'She looked at the front row, where her mother was sitting.' },
        { nl: 'Ze stond in het midden van het podium, zonder gordijn.', en: 'She stood in the middle of the stage, with no curtain.' },
        { nl: 'Het was Levi.', en: 'It was Levi.' }
      ], answer: 2,
      explain: { nl: 'In groep 6 zong ze alleen achter een gordijn. In groep 8 staat ze midden op het podium.', en: 'In group 6 she only sang behind a curtain. In group 8 she stands in the middle of the stage.' } }
  ]
}
  ]
});
