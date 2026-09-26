/* Vervolgverhaal - Ruimte & Sterren: Een jaar op de Maan
   Hoofdstuk 1 = groep 6 (niveau 2), 2 = groep 7 (niveau 4), 3 = groep 8 (niveau 6). */
addSeries({
  id: 'maanbasis', topic: 'ruimte', emoji: '🌕',
  title: { nl: 'Een jaar op de Maan', en: 'A year on the Moon' },
  blurb: { nl: 'Sem verhuist in 2045 met zijn moeder naar een maanbasis. Springen is er leuk, maar dan komt de zonnestorm...',
           en: 'In 2045 Sem moves to a Moon base with his mum. Jumping is great fun there, but then the solar storm comes...' },
  chapters: [
{
  level: 2, emoji: '🚀', scene: 'space',
  title: { nl: 'Verhuizen naar de Maan', en: 'Moving to the Moon' },
  teaser: { nl: 'Wat is een zonnestorm, en waarom moet iedereen zo snel schuilen?', en: 'What is a solar storm, and why does everybody have to take shelter so fast?' },
  text: {
    nl: [
      "Het is het jaar 2045. Sem is elf jaar en hij gaat verhuizen. Niet naar een andere stad, maar naar de Maan! Zijn moeder is ingenieur. Ze gaat een jaar werken op de maanbasis Artemis.",
      "De reis duurt drie dagen. In de raket zweeft Sem door de cabine. Zijn drinken zit in een zakje met een rietje, anders vliegen de druppels weg. Hij voelt zich een beetje misselijk, maar dat gaat vanzelf over. Door het raampje ziet hij de Aarde steeds kleiner worden.",
      "De maanbasis bestaat uit witte koepels. Er ligt een dikke laag maanstof op. “Dat stof beschermt ons tegen gevaarlijke straling uit de ruimte”, legt zijn moeder uit.",
      "Het leukste vindt Sem het springen. Op de Maan weeg je maar een zesde van wat je op Aarde weegt. Met één sprong komt hij bijna tot het plafond. Hij lacht zo hard dat hij de hik krijgt.",
      "Die avond kijkt hij door het dikke raam naar de Aarde. Die hangt als een blauwe knikker in de zwarte lucht. Ergens daar ligt Nederland, met zijn oude school.",
      "Midden in de nacht wordt Sem wakker van een hard, piepend geluid. Rode lampjes knipperen. Een stem roept: “Zonnestorm op komst! Iedereen binnen tien minuten naar de schuilkelder!”"
    ],
    en: [
      "It is the year 2045. Sem is eleven and he is moving house. Not to another city, but to the Moon! His mother is an engineer. She is going to work on the Moon base Artemis for a year.",
      "The journey takes three days. In the rocket Sem floats through the cabin. His drink is in a pouch with a straw, otherwise the drops fly away. He feels a little sick, but that passes by itself. Through the window he sees the Earth getting smaller and smaller.",
      "The Moon base is made of white domes. There is a thick layer of moon dust on top. “That dust protects us from dangerous radiation from space,” his mother explains.",
      "What Sem likes best is jumping. On the Moon you weigh only a sixth of what you weigh on Earth. With one jump he almost reaches the ceiling. He laughs so hard that he gets hiccups.",
      "That evening he looks through the thick window at the Earth. It hangs like a blue marble in the black sky. Somewhere down there is the Netherlands, with his old school.",
      "In the middle of the night Sem is woken by a loud, beeping sound. Red lights flash. A voice calls: “Solar storm coming! Everybody to the shelter within ten minutes!”"
    ]
  },
  words: [
    { nl: 'koepels', en: 'domes', defNl: 'ronde daken, zoals een halve bal', defEn: 'round roofs, like half a ball' },
    { nl: 'straling', en: 'radiation', defNl: 'onzichtbare energie die in grote hoeveelheden slecht is voor je lichaam', defEn: 'invisible energy that is bad for your body in large amounts' },
    { nl: 'schuilkelder', en: 'shelter', defNl: 'een veilige ruimte onder de grond waar je naartoe gaat bij gevaar', defEn: 'a safe room underground where you go when there is danger' }
  ],
  questions: [
    { id: 'q1', type: 'mc', skill: 'letterlijk',
      q: { nl: 'Waarom gaat Sem op de Maan wonen?', en: 'Why is Sem going to live on the Moon?' },
      options: [
        { nl: 'Zijn moeder gaat daar een jaar werken', en: 'His mother is going to work there for a year' },
        { nl: 'Hij heeft een wedstrijd gewonnen', en: 'He won a competition' },
        { nl: 'Zijn klas gaat op schoolreis', en: 'His class is going on a school trip' },
        { nl: 'Zijn vader is astronaut', en: 'His father is an astronaut' }
      ], answer: 0,
      explain: { nl: 'Alinea 1: zijn moeder is ingenieur en gaat een jaar werken op de maanbasis.', en: 'Paragraph 1: his mother is an engineer and is going to work on the Moon base for a year.' } },
    { id: 'q2', type: 'tf', skill: 'letterlijk',
      q: { nl: 'De reis naar de Maan duurt drie dagen.', en: 'The journey to the Moon takes three days.' },
      answer: true,
      explain: { nl: 'Alinea 2: “De reis duurt drie dagen.”', en: 'Paragraph 2: “The journey takes three days.”' } },
    { id: 'q3', type: 'mc', skill: 'gevolgtrekking',
      q: { nl: 'Waarom kan Sem op de Maan zo hoog springen?', en: 'Why can Sem jump so high on the Moon?' },
      options: [
        { nl: 'Op de Maan weeg je maar een zesde van wat je op Aarde weegt', en: 'On the Moon you weigh only a sixth of what you weigh on Earth' },
        { nl: 'Hij heeft speciale springschoenen', en: 'He has special jumping shoes' },
        { nl: 'De koepels zijn heel laag', en: 'The domes are very low' },
        { nl: 'Hij heeft veel geoefend op Aarde', en: 'He practised a lot on Earth' }
      ], answer: 0,
      explain: { nl: 'Je bent op de Maan veel lichter. Met dezelfde sprong kom je dan veel hoger.', en: 'You are much lighter on the Moon. With the same jump you go much higher.' } },
    { id: 'q4', type: 'order', skill: 'volgorde',
      q: { nl: 'Zet op volgorde wat er gebeurt.', en: 'Put what happens in order.' },
      items: [
        { nl: 'Sem zweeft door de raket.', en: 'Sem floats through the rocket.' },
        { nl: 'Sem ziet de witte koepels.', en: 'Sem sees the white domes.' },
        { nl: 'Sem springt bijna tot het plafond.', en: 'Sem jumps almost to the ceiling.' },
        { nl: 'Sem wordt wakker van een alarm.', en: 'Sem is woken by an alarm.' }
      ], answer: [0, 1, 2, 3],
      explain: { nl: 'Eerst de reis, dan de aankomst, het springen, en ’s nachts het alarm.', en: 'First the journey, then arriving, the jumping, and at night the alarm.' } },
    { id: 'q5', type: 'gap', skill: 'woordenschat',
      q: { nl: 'Een ___ is een veilige ruimte onder de grond waar je naartoe gaat bij gevaar.', en: 'A ___ is a safe room underground where you go when there is danger.' },
      options: [
        { nl: 'schuilkelder', en: 'shelter' },
        { nl: 'koepel', en: 'dome' },
        { nl: 'raket', en: 'rocket' },
        { nl: 'cabine', en: 'cabin' }
      ], answer: 0,
      explain: { nl: 'Bij de zonnestorm moet iedereen naar de schuilkelder, waar het veilig is.', en: 'During the solar storm everybody has to go to the shelter, where it is safe.' } },
    { id: 'q6', type: 'mc', skill: 'hoofdgedachte',
      q: { nl: 'Waar gaat dit hoofdstuk vooral over?', en: 'What is this chapter mainly about?' },
      options: [
        { nl: 'De eerste dag van Sem op de Maan, tot het alarm afgaat', en: 'Sem’s first day on the Moon, until the alarm goes off' },
        { nl: 'Hoe je een raket bouwt', en: 'How to build a rocket' },
        { nl: 'Het werk van een ingenieur op Aarde', en: 'The work of an engineer on Earth' },
        { nl: 'Waarom de Aarde blauw is', en: 'Why the Earth is blue' }
      ], answer: 0,
      explain: { nl: 'We volgen Sem van de reis tot zijn eerste nacht, als het alarm gaat.', en: 'We follow Sem from the journey to his first night, when the alarm goes off.' } }
  ]
},
{
  level: 4, emoji: '☀️', scene: 'space',
  title: { nl: 'Dertig uur onder de grond', en: 'Thirty hours underground' },
  recap: { nl: 'Sem woont een jaar met zijn moeder op de maanbasis Artemis. Hij springt er bijna tot het plafond. Maar in zijn eerste nacht gaat het alarm: er komt een zonnestorm aan.',
           en: 'Sem is living on the Moon base Artemis with his mother for a year. He can jump almost to the ceiling. But on his first night the alarm goes off: a solar storm is coming.' },
  teaser: { nl: 'Hoe krijgen ze de planten weer water, nu er drie weken lang geen raket komt?', en: 'How will they get water to the plants again, now that no rocket is coming for three weeks?' },
  text: {
    nl: [
      "Binnen acht minuten zat iedereen in de schuilkelder: twaalf volwassenen en twee kinderen. De kelder ligt diep onder de grond, onder meters maanstof. Langs de muren staan grote tanks met water. “Water is een van de beste schilden tegen straling”, zei de commandant, een vrouw met kort grijs haar.",
      "Sems moeder legde uit wat een zonnestorm is. Soms blaast de zon een enorme wolk van heel snelle deeltjes de ruimte in. Op Aarde merk je daar bijna niets van, omdat het magnetisch veld om de Aarde de deeltjes wegduwt. Soms zie je dan wel noorderlicht. Maar de Maan heeft zo'n veld niet. Daarom moet je daar schuilen, soms wel twee dagen lang.",
      "Het andere kind in de kelder was Yara uit Brazilië. Ze was twaalf en woonde al een half jaar op de basis. Eerst zei ze niet veel, maar na een paar uur leerde ze Sem een kaartspel voor lage zwaartekracht: als je te hard gooit, zweven de kaarten weg. Sem leerde haar in ruil een paar woorden Nederlands. Ze vond “gezellig” het mooiste woord.",
      "Na dertig uur klonk er eindelijk een zoemer. De storm was voorbij. Iedereen rekte zich uit en liep naar boven. Op de monitor zag Sem dat een paar zonnepanelen buiten vol stof zaten, maar verder leek alles heel. Toen de commandant de kas controleerde, werd haar gezicht ernstig.",
      "In de kas groeien sla, tomaten en bonen onder paarse lampen. Een pompje geeft de planten precies genoeg water. Door de storm was dat pompje kapotgegaan. De bladeren van de sla hingen al slap naar beneden.",
      "“De volgende raket met reserveonderdelen komt pas over drie weken”, zei de commandant. “Tegen die tijd zijn alle planten dood.” Yara keek Sem aan. Ze dachten allebei hetzelfde: zonder kas geen verse groente, een heel jaar lang."
    ],
    en: [
      "Within eight minutes everybody was in the shelter: twelve adults and two children. The shelter lies deep underground, under metres of moon dust. Along the walls stand big tanks of water. “Water is one of the best shields against radiation,” said the commander, a woman with short grey hair.",
      "Sem’s mother explained what a solar storm is. Sometimes the Sun blows a huge cloud of very fast particles into space. On Earth you hardly notice it, because the magnetic field around the Earth pushes the particles away. Sometimes you do see the northern lights then. But the Moon does not have a field like that. That is why you have to take shelter there, sometimes for as long as two days.",
      "The other child in the shelter was Yara from Brazil. She was twelve and had already lived on the base for half a year. At first she did not say much, but after a few hours she taught Sem a card game for low gravity: if you throw too hard, the cards float away. In return Sem taught her a few words of Dutch. She thought “gezellig” was the most beautiful word.",
      "After thirty hours a buzzer finally sounded. The storm was over. Everybody stretched and went upstairs. On the monitor Sem saw that a few solar panels outside were covered in dust, but otherwise everything seemed fine. When the commander checked the greenhouse, her face became serious.",
      "In the greenhouse, lettuce, tomatoes and beans grow under purple lamps. A little pump gives the plants exactly enough water. The storm had broken that pump. The lettuce leaves were already hanging down limply.",
      "“The next rocket with spare parts only comes in three weeks,” said the commander. “By then all the plants will be dead.” Yara looked at Sem. They were both thinking the same thing: no greenhouse, no fresh vegetables, for a whole year."
    ]
  },
  words: [
    { nl: 'deeltjes', en: 'particles', defNl: 'heel kleine stukjes, veel te klein om te zien', defEn: 'very small bits, far too small to see' },
    { nl: 'zwaartekracht', en: 'gravity', defNl: 'de kracht die alles naar de grond trekt', defEn: 'the force that pulls everything towards the ground' },
    { nl: 'reserveonderdelen', en: 'spare parts', defNl: 'extra stukken om iets te repareren als het kapotgaat', defEn: 'extra pieces to repair something when it breaks' }
  ],
  questions: [
    { id: 'q1', type: 'mc', skill: 'letterlijk',
      q: { nl: 'Wie zaten er in de schuilkelder?', en: 'Who was in the shelter?' },
      options: [
        { nl: 'Twaalf volwassenen en twee kinderen', en: 'Twelve adults and two children' },
        { nl: 'Alleen Sem en zijn moeder', en: 'Only Sem and his mother' },
        { nl: 'Tien volwassenen en tien kinderen', en: 'Ten adults and ten children' },
        { nl: 'De commandant en Yara', en: 'The commander and Yara' }
      ], answer: 0,
      explain: { nl: 'Alinea 1: “twaalf volwassenen en twee kinderen”.', en: 'Paragraph 1: “twelve adults and two children”.' } },
    { id: 'q2', type: 'mc', skill: 'gevolgtrekking',
      q: { nl: 'Waarom hoeven mensen op Aarde niet te schuilen voor een zonnestorm?', en: 'Why do people on Earth not need to take shelter from a solar storm?' },
      options: [
        { nl: 'Het magnetisch veld om de Aarde duwt de deeltjes weg', en: 'The magnetic field around the Earth pushes the particles away' },
        { nl: 'Op Aarde is de zon veel verder weg', en: 'On Earth the Sun is much further away' },
        { nl: 'Iedereen op Aarde heeft een schuilkelder', en: 'Everybody on Earth has a shelter' },
        { nl: 'Zonnestormen komen alleen ’s nachts', en: 'Solar storms only come at night' }
      ], answer: 0,
      explain: { nl: 'Alinea 2: de Aarde heeft een magnetisch veld dat de deeltjes wegduwt, de Maan niet.', en: 'Paragraph 2: the Earth has a magnetic field that pushes the particles away, the Moon does not.' } },
    { id: 'q3', type: 'mc', skill: 'verwijswoorden',
      q: { nl: '“Daarom moet je daar schuilen.” Waar is “daar”?', en: '“That is why you have to take shelter there.” Where is “there”?' },
      options: [
        { nl: 'Op de Maan', en: 'On the Moon' },
        { nl: 'Op Aarde', en: 'On Earth' },
        { nl: 'In Brazilië', en: 'In Brazil' },
        { nl: 'In de kas', en: 'In the greenhouse' }
      ], answer: 0,
      explain: { nl: 'De zin ervoor gaat over de Maan, die geen magnetisch veld heeft.', en: 'The sentence before is about the Moon, which has no magnetic field.' } },
    { id: 'q4', type: 'multi', skill: 'letterlijk',
      q: { nl: 'Wat groeit er in de kas? Kies er 3.', en: 'What grows in the greenhouse? Pick 3.' },
      options: [
        { nl: 'Sla', en: 'Lettuce' },
        { nl: 'Tomaten', en: 'Tomatoes' },
        { nl: 'Bonen', en: 'Beans' },
        { nl: 'Aardappels', en: 'Potatoes' },
        { nl: 'Appels', en: 'Apples' }
      ], answer: [0, 1, 2],
      explain: { nl: 'Alinea 5: “In de kas groeien sla, tomaten en bonen onder paarse lampen.”', en: 'Paragraph 5: “In the greenhouse, lettuce, tomatoes and beans grow under purple lamps.”' } },
    { id: 'q5', type: 'order', skill: 'volgorde',
      q: { nl: 'Zet in de volgorde van het verhaal.', en: 'Put these in the order of the story.' },
      items: [
        { nl: 'Iedereen gaat naar de schuilkelder.', en: 'Everybody goes to the shelter.' },
        { nl: 'Sems moeder legt uit wat een zonnestorm is.', en: 'Sem’s mother explains what a solar storm is.' },
        { nl: 'Yara leert Sem een kaartspel.', en: 'Yara teaches Sem a card game.' },
        { nl: 'De commandant ontdekt dat het pompje kapot is.', en: 'The commander finds out the pump is broken.' }
      ], answer: [0, 1, 2, 3],
      explain: { nl: 'Eerst schuilen, dan de uitleg en het kaartspel, en na dertig uur het kapotte pompje.', en: 'First taking shelter, then the explanation and the card game, and after thirty hours the broken pump.' } },
    { id: 'q6', type: 'gap', skill: 'woordenschat',
      q: { nl: 'Door de lage ___ zweven de kaarten weg als je te hard gooit.', en: 'Because of the low ___ the cards float away if you throw too hard.' },
      options: [
        { nl: 'zwaartekracht', en: 'gravity' },
        { nl: 'straling', en: 'radiation' },
        { nl: 'temperatuur', en: 'temperature' },
        { nl: 'stroom', en: 'electricity' }
      ], answer: 0,
      explain: { nl: 'Zwaartekracht trekt dingen naar beneden. Op de Maan is die zwak, dus kaarten zweven weg.', en: 'Gravity pulls things down. On the Moon it is weak, so cards float away.' } },
    { id: 'q7', type: 'mc', skill: 'structuur',
      q: { nl: 'Wat is de taak van alinea 2 in dit hoofdstuk?', en: 'What is the job of paragraph 2 in this chapter?' },
      options: [
        { nl: 'Uitleggen wat een zonnestorm is en waarom je op de Maan moet schuilen', en: 'Explaining what a solar storm is and why you have to take shelter on the Moon' },
        { nl: 'Vertellen wie Yara is', en: 'Telling you who Yara is' },
        { nl: 'Beschrijven hoe de kas eruitziet', en: 'Describing what the greenhouse looks like' },
        { nl: 'Vertellen hoe het verhaal afloopt', en: 'Telling you how the story ends' }
      ], answer: 0,
      explain: { nl: 'In alinea 2 stopt het verhaal even voor uitleg. Zo begrijp je waarom de schuilkelder nodig is.', en: 'In paragraph 2 the story pauses for an explanation. That way you understand why the shelter is needed.' } },
    { id: 'q8', type: 'mc', skill: 'hoofdgedachte',
      q: { nl: 'Wat is het grote probleem aan het eind van dit hoofdstuk?', en: 'What is the big problem at the end of this chapter?' },
      options: [
        { nl: 'De kas krijgt geen water meer en de onderdelen komen pas over drie weken', en: 'The greenhouse gets no more water and the parts only come in three weeks' },
        { nl: 'De schuilkelder is te klein', en: 'The shelter is too small' },
        { nl: 'Yara wil terug naar Brazilië', en: 'Yara wants to go back to Brazil' },
        { nl: 'Sem is zijn kaartspel kwijt', en: 'Sem has lost his card game' }
      ], answer: 0,
      explain: { nl: 'Het pompje is kapot, de sla hangt al slap en er komt drie weken geen raket.', en: 'The pump is broken, the lettuce is already limp and no rocket is coming for three weeks.' } }
  ]
},
{
  level: 6, emoji: '⚙️', scene: 'lab',
  title: { nl: 'Het tandwieltje uit de printer', en: 'The little gear from the printer' },
  recap: { nl: 'Sem en Yara hebben dertig uur in de schuilkelder gezeten tijdens een zonnestorm. Daarna blijkt het pompje van de kas kapot. De planten drogen uit, en de volgende raket met onderdelen komt pas over drie weken.',
           en: 'Sem and Yara spent thirty hours in the shelter during a solar storm. Afterwards the greenhouse pump turns out to be broken. The plants are drying out, and the next rocket with parts only comes in three weeks.' },
  text: {
    nl: [
      "Die avond lag Sem wakker. Hij dacht aan het vak techniek op zijn oude school, waar ze met een 3D-printer sleutelhangers hadden gemaakt. Op de basis stond ook een 3D-printer, alleen veel groter. Die print met een soort poeder dat van maanstof is gemaakt. De volgende ochtend liep hij met Yara naar de werkplaats.",
      "De technicus, meneer Okafor, haalde het kapotte pompje uit elkaar. Het probleem was klein: een tandwieltje van plastic was gesmolten door een kortsluiting tijdens de storm. “Als we de tekening van dat onderdeel hebben, kunnen we het printen”, zei hij. “Maar die tekening zit in een computer op Aarde, en de verbinding is nog steeds slecht.”",
      "Yara had een idee. Ze legde het gesmolten tandwieltje naast een liniaal en telde de tanden: achttien. Samen met Sem mat ze de dikte en de breedte van elk stukje dat nog heel was. Meneer Okafor tekende het na op de computer. De eerste poging brak meteen. De tweede paste niet. Pas de derde keer draaide het tandwieltje soepel rond, en het pompje begon te zoemen.",
      "Sommige planten waren al te ver uitgedroogd, maar de meeste sla en alle tomaten bleven leven. Op de basis is water heel kostbaar. Bijna al het water wordt opnieuw gebruikt: zweet, douchewater en zelfs plas worden gezuiverd tot schoon drinkwater. Een machine haalt ongeveer achtennegentig procent terug. De kas krijgt het water dat overblijft.",
      "Een week later had Sem een videogesprek met zijn oude klas. Zijn meester vroeg of het wel verstandig is dat mensen op de Maan gaan wonen. De klas was verdeeld. Lotte vond het zonde van het geld: “Er zijn op Aarde genoeg problemen die we eerst moeten oplossen.” Daan vond juist dat we van de Maan kunnen leren om zuiniger te zijn. “Daar gooien ze bijna niets weg”, zei hij. Sem dacht aan het tandwieltje. Misschien hadden ze allebei een beetje gelijk.",
      "Aan het eind van zijn jaar plukte Sem de laatste rijpe tomaat uit de kas. Hij deelde hem met Yara. Toen hij weer op Aarde landde, voelde hij zich zo zwaar als een olifant. Het eerste wat hij deed, was heel lang naar de blauwe lucht kijken. In zijn tas zat een klein, grijs tandwieltje met achttien tanden."
    ],
    en: [
      "That evening Sem lay awake. He thought about design and technology at his old school, where they had made key rings with a 3D printer. On the base there was a 3D printer too, only much bigger. It prints with a kind of powder made from moon dust. The next morning he walked to the workshop with Yara.",
      "The technician, Mr Okafor, took the broken pump apart. The problem was small: a little plastic gear had melted because of a short circuit during the storm. “If we have the drawing of that part, we can print it,” he said. “But that drawing is on a computer on Earth, and the connection is still bad.”",
      "Yara had an idea. She put the melted gear next to a ruler and counted the teeth: eighteen. Together with Sem she measured the thickness and the width of every bit that was still whole. Mr Okafor drew it again on the computer. The first attempt broke straight away. The second did not fit. Only the third time did the little gear turn smoothly, and the pump started to hum.",
      "Some plants had already dried out too far, but most of the lettuce and all the tomatoes survived. On the base, water is very precious. Almost all the water is used again: sweat, shower water and even wee are purified into clean drinking water. A machine gets back about ninety-eight per cent. The greenhouse gets the water that is left over.",
      "A week later Sem had a video call with his old class. His teacher asked whether it is really sensible for people to go and live on the Moon. The class was divided. Lotte thought it was a waste of money: “There are enough problems on Earth that we should solve first.” Daan thought instead that we can learn from the Moon to be more careful with things. “They throw almost nothing away there,” he said. Sem thought of the little gear. Maybe they were both a little bit right.",
      "At the end of his year Sem picked the last ripe tomato from the greenhouse. He shared it with Yara. When he landed on Earth again, he felt as heavy as an elephant. The first thing he did was look at the blue sky for a very long time. In his bag was a small, grey gear with eighteen teeth."
    ]
  },
  words: [
    { nl: 'tandwieltje', en: 'little gear', defNl: 'een klein wiel met tanden dat een ander wiel laat draaien', defEn: 'a small wheel with teeth that makes another wheel turn' },
    { nl: 'gezuiverd', en: 'purified', defNl: 'schoongemaakt, zodat er niets vies of schadelijks meer in zit', defEn: 'cleaned, so that there is nothing dirty or harmful left in it' },
    { nl: 'kostbaar', en: 'precious', defNl: 'heel waardevol, zodat je er zuinig mee omgaat', defEn: 'very valuable, so that you use it carefully' }
  ],
  questions: [
    { id: 'q1', type: 'mc', skill: 'letterlijk',
      q: { nl: 'Wat was er kapot aan het pompje?', en: 'What was broken in the pump?' },
      options: [
        { nl: 'Een plastic tandwieltje was gesmolten', en: 'A little plastic gear had melted' },
        { nl: 'De stekker was kwijt', en: 'The plug was missing' },
        { nl: 'De paarse lampen waren stuk', en: 'The purple lamps were broken' },
        { nl: 'Het water was bevroren', en: 'The water was frozen' }
      ], answer: 0,
      explain: { nl: 'Alinea 2: een tandwieltje van plastic was gesmolten door een kortsluiting.', en: 'Paragraph 2: a little plastic gear had melted because of a short circuit.' } },
    { id: 'q2', type: 'find', skill: 'gevolgtrekking',
      q: { nl: 'Welke zin laat zien waarom ze het onderdeel niet meteen konden printen?', en: 'Which sentence shows why they could not print the part straight away?' },
      options: [
        { nl: 'Op de basis stond ook een 3D-printer, alleen veel groter.', en: 'On the base there was a 3D printer too, only much bigger.' },
        { nl: 'De technicus, meneer Okafor, haalde het kapotte pompje uit elkaar.', en: 'The technician, Mr Okafor, took the broken pump apart.' },
        { nl: 'Maar die tekening zit in een computer op Aarde, en de verbinding is nog steeds slecht.', en: 'But that drawing is on a computer on Earth, and the connection is still bad.' },
        { nl: 'De eerste poging brak meteen.', en: 'The first attempt broke straight away.' }
      ], answer: 2,
      explain: { nl: 'Om te printen heb je een tekening nodig, en die konden ze niet van Aarde krijgen.', en: 'To print you need a drawing, and they could not get it from Earth.' } },
    { id: 'q3', type: 'gap', skill: 'woordenschat',
      q: { nl: 'Iets wat ___ is, is heel waardevol en daar ga je zuinig mee om.', en: 'Something that is ___ is very valuable and you use it carefully.' },
      options: [
        { nl: 'kostbaar', en: 'precious' },
        { nl: 'gezuiverd', en: 'purified' },
        { nl: 'gesmolten', en: 'melted' },
        { nl: 'uitgedroogd', en: 'dried out' }
      ], answer: 0,
      explain: { nl: 'Water is op de basis kostbaar: er is weinig van, dus wordt bijna alles opnieuw gebruikt.', en: 'Water is precious on the base: there is little of it, so almost all of it is used again.' } },
    { id: 'q4', type: 'order', skill: 'volgorde',
      q: { nl: 'Zet in de volgorde van het verhaal.', en: 'Put these in the order of the story.' },
      items: [
        { nl: 'Sem denkt aan de 3D-printer op zijn oude school.', en: 'Sem thinks of the 3D printer at his old school.' },
        { nl: 'Meneer Okafor haalt het pompje uit elkaar.', en: 'Mr Okafor takes the pump apart.' },
        { nl: 'Yara telt de tanden van het tandwieltje.', en: 'Yara counts the teeth of the gear.' },
        { nl: 'Het pompje begint weer te zoemen.', en: 'The pump starts to hum again.' },
        { nl: 'Sem heeft een videogesprek met zijn klas.', en: 'Sem has a video call with his class.' }
      ], answer: [0, 1, 2, 3, 4],
      explain: { nl: 'Het idee, het onderzoek, het meten en printen, de reparatie en een week later het gesprek.', en: 'The idea, the investigation, measuring and printing, the repair and a week later the call.' } },
    { id: 'q5', type: 'mc', skill: 'verwijswoorden',
      q: { nl: '“Die print met een soort poeder dat van maanstof is gemaakt.” Waar verwijst “die” naar?', en: '“It prints with a kind of powder made from moon dust.” What does “it” refer to?' },
      options: [
        { nl: 'De 3D-printer op de basis', en: 'The 3D printer on the base' },
        { nl: 'De 3D-printer op Sems oude school', en: 'The 3D printer at Sem’s old school' },
        { nl: 'De sleutelhanger', en: 'The key ring' },
        { nl: 'De werkplaats', en: 'The workshop' }
      ], answer: 0,
      explain: { nl: 'De zin ervoor noemt de grote 3D-printer op de basis. Die print met poeder van maanstof.', en: 'The sentence before mentions the big 3D printer on the base. That one prints with moon-dust powder.' } },
    { id: 'q6', type: 'sort', skill: 'feitmening',
      q: { nl: 'Feit of mening? Zet elke zin in de goede groep.', en: 'Fact or opinion? Put every sentence in the right group.' },
      bins: [ { nl: 'Feit', en: 'Fact' }, { nl: 'Mening', en: 'Opinion' } ],
      items: [
        { nl: 'Op de basis wordt bijna al het water opnieuw gebruikt.', en: 'On the base almost all the water is used again.', bin: 0 },
        { nl: 'Er zijn op Aarde genoeg problemen die we eerst moeten oplossen.', en: 'There are enough problems on Earth that we should solve first.', bin: 1 },
        { nl: 'Het tandwieltje had achttien tanden.', en: 'The little gear had eighteen teeth.', bin: 0 },
        { nl: 'Wonen op de Maan is zonde van het geld.', en: 'Living on the Moon is a waste of money.', bin: 1 }
      ],
      explain: { nl: 'Water hergebruiken en tanden tellen kun je nagaan. Wat we “eerst moeten” doen en wat “zonde” is, zijn meningen.', en: 'Reusing water and counting teeth can be checked. What we “should do first” and what is a “waste” are opinions.' } },
    { id: 'q7', type: 'multi', skill: 'letterlijk',
      q: { nl: 'Welk water wordt op de basis gezuiverd tot drinkwater? Kies er 3.', en: 'Which water is purified into drinking water on the base? Pick 3.' },
      options: [
        { nl: 'Zweet', en: 'Sweat' },
        { nl: 'Douchewater', en: 'Shower water' },
        { nl: 'Plas', en: 'Wee' },
        { nl: 'Zeewater', en: 'Seawater' },
        { nl: 'Regenwater', en: 'Rainwater' }
      ], answer: [0, 1, 2],
      explain: { nl: 'Alinea 4: “zweet, douchewater en zelfs plas worden gezuiverd tot schoon drinkwater.”', en: 'Paragraph 4: “sweat, shower water and even wee are purified into clean drinking water.”' } },
    { id: 'q8', type: 'mc', skill: 'doel',
      q: { nl: 'Waarom laat de schrijver Lotte en Daan aan het woord?', en: 'Why does the writer let Lotte and Daan speak?' },
      options: [
        { nl: 'Om twee verschillende meningen over wonen op de Maan te laten zien', en: 'To show two different opinions about living on the Moon' },
        { nl: 'Om uit te leggen hoe een videogesprek werkt', en: 'To explain how a video call works' },
        { nl: 'Om te laten zien dat de klas ruzie maakt', en: 'To show that the class is quarrelling' },
        { nl: 'Om te vertellen wie de beste van de klas is', en: 'To say who is best in the class' }
      ], answer: 0,
      explain: { nl: 'Lotte is tegen, Daan ziet juist iets goeds. Zo zie je beide kanten van de vraag.', en: 'Lotte is against it, Daan sees something good. That way you see both sides of the question.' } },
    { id: 'q9', type: 'tf', skill: 'gevolgtrekking',
      q: { nl: 'Het lukte de eerste keer meteen om het tandwieltje goed te printen.', en: 'They managed to print the gear properly the very first time.' },
      answer: false,
      explain: { nl: 'De eerste poging brak en de tweede paste niet. Pas de derde keer lukte het.', en: 'The first attempt broke and the second did not fit. Only the third time did it work.' } },
    { id: 'q10', type: 'find', skill: 'hoofdgedachte',
      q: { nl: 'Welke zin laat het beste zien wat Sem denkt over de discussie in zijn klas?', en: 'Which sentence best shows what Sem thinks about the discussion in his class?' },
      options: [
        { nl: 'De klas was verdeeld.', en: 'The class was divided.' },
        { nl: 'Daan vond juist dat we van de Maan kunnen leren om zuiniger te zijn.', en: 'Daan thought instead that we can learn from the Moon to be more careful with things.' },
        { nl: 'Misschien hadden ze allebei een beetje gelijk.', en: 'Maybe they were both a little bit right.' },
        { nl: 'Hij deelde hem met Yara.', en: 'He shared it with Yara.' }
      ], answer: 2,
      explain: { nl: 'Sem kiest geen kant: hij ziet dat Lotte én Daan een punt hebben.', en: 'Sem does not choose a side: he sees that Lotte and Daan both have a point.' } }
  ]
}
  ]
});
