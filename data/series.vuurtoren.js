/* Vervolgverhaal - Mysterie & Detective: Het licht in de vuurtoren
   Hoofdstuk 1 = groep 6 (niveau 2), 2 = groep 7 (niveau 4), 3 = groep 8 (niveau 6). */
addSeries({
  id: 'vuurtoren', topic: 'mysterie', emoji: '🔦',
  title: { nl: 'Het licht in de vuurtoren', en: 'The light in the lighthouse' },
  blurb: { nl: 'Op Terschelling gaat elke nacht een lampje aan in een vuurtoren die al twintig jaar op slot zit. Wie zit daar?',
           en: 'On Terschelling a small light switches on every night in a lighthouse that has been locked for twenty years. Who is in there?' },
  chapters: [
{
  level: 2, emoji: '🔦', scene: 'night',
  title: { nl: 'Een lampje in de nacht', en: 'A light in the night' },
  teaser: { nl: 'Wie zit er in de vuurtoren? En roept die echt om hulp?', en: 'Who is in the lighthouse? And are they really calling for help?' },
  text: {
    nl: [
      "In de zomervakantie logeren Lies en haar broertje Stijn bij opa op Terschelling. Opa woont in een klein huis aan de dijk. Vanuit het raam van hun slaapkamer zien ze de oude vuurtoren.",
      "De vuurtoren heet De Witte Wachter. Hij is al twintig jaar niet meer in gebruik. De deur zit op slot en de ramen zijn vies. “Alleen de oude wachter Jaap had een sleutel”, zegt opa. “Maar Jaap woont al lang niet meer op het eiland.”",
      "Die nacht kan Lies niet slapen. Ze kijkt naar buiten. Opeens ziet ze bovenin de vuurtoren een lampje. Het gaat aan en uit, aan en uit. Dan is het weer donker.",
      "De volgende ochtend lopen Lies en Stijn naar de vuurtoren. In het zand bij de deur staan voetstappen. Ze zijn klein, bijna net zo klein als die van Lies. Naast de deur ligt een snoeppapiertje. Het komt van een snoepwinkel in Harlingen, aan de overkant van het water.",
      "“Er is iemand binnen geweest”, fluistert Stijn. Lies voelt aan de deur. Hij zit nog steeds op slot.",
      "'s Avonds blijven ze samen wakker. Om precies elf uur gaat het lampje weer aan. Drie keer kort, drie keer lang, drie keer kort. Stijn grijpt de arm van Lies. “Dat is SOS!” zegt hij. “Iemand in de vuurtoren roept om hulp!”"
    ],
    en: [
      "During the summer holidays Lies and her little brother Stijn stay with Grandpa on Terschelling. Grandpa lives in a small house by the dike. From their bedroom window they can see the old lighthouse.",
      "The lighthouse is called The White Guard. It has not been used for twenty years. The door is locked and the windows are dirty. “Only the old keeper Jaap had a key,” says Grandpa. “But Jaap has not lived on the island for a long time.”",
      "That night Lies cannot sleep. She looks outside. Suddenly she sees a small light at the top of the lighthouse. It goes on and off, on and off. Then it is dark again.",
      "The next morning Lies and Stijn walk to the lighthouse. There are footprints in the sand by the door. They are small, almost as small as Lies’s. Next to the door lies a sweet wrapper. It comes from a sweet shop in Harlingen, on the other side of the water.",
      "“Somebody has been inside,” whispers Stijn. Lies tries the door. It is still locked.",
      "In the evening they stay awake together. At exactly eleven o’clock the light switches on again. Three times short, three times long, three times short. Stijn grabs Lies’s arm. “That is SOS!” he says. “Somebody in the lighthouse is calling for help!”"
    ]
  },
  words: [
    { nl: 'logeren', en: 'to stay over', defNl: 'een paar nachten bij iemand anders slapen', defEn: 'to sleep at somebody else’s home for a few nights' },
    { nl: 'wachter', en: 'keeper', defNl: 'iemand die ergens op past', defEn: 'somebody who looks after something' },
    { nl: 'voetstappen', en: 'footprints', defNl: 'de afdrukken die voeten achterlaten', defEn: 'the marks that feet leave behind' }
  ],
  questions: [
    { id: 'q1', type: 'mc', skill: 'letterlijk',
      q: { nl: 'Bij wie logeren Lies en Stijn?', en: 'Who are Lies and Stijn staying with?' },
      options: [
        { nl: 'Bij opa op Terschelling', en: 'With Grandpa on Terschelling' },
        { nl: 'Bij oma in Harlingen', en: 'With Grandma in Harlingen' },
        { nl: 'Bij wachter Jaap in de vuurtoren', en: 'With keeper Jaap in the lighthouse' },
        { nl: 'Op een camping aan zee', en: 'At a campsite by the sea' }
      ], answer: 0,
      explain: { nl: 'Dat staat in de eerste zin: ze logeren bij opa op Terschelling.', en: 'That is in the first sentence: they stay with Grandpa on Terschelling.' } },
    { id: 'q2', type: 'tf', skill: 'letterlijk',
      q: { nl: 'De vuurtoren is al twintig jaar niet meer in gebruik.', en: 'The lighthouse has not been used for twenty years.' },
      answer: true,
      explain: { nl: 'Alinea 2: “Hij is al twintig jaar niet meer in gebruik.”', en: 'Paragraph 2: “It has not been used for twenty years.”' } },
    { id: 'q3', type: 'mc', skill: 'gevolgtrekking',
      q: { nl: 'Waarom denkt Stijn dat er iemand binnen is geweest?', en: 'Why does Stijn think somebody has been inside?' },
      options: [
        { nl: 'Er staan voetstappen bij de deur en er ligt een snoeppapiertje', en: 'There are footprints by the door and there is a sweet wrapper' },
        { nl: 'De deur staat wagenwijd open', en: 'The door is wide open' },
        { nl: 'Opa heeft het hem verteld', en: 'Grandpa told him' },
        { nl: 'Hij hoort iemand zingen in de toren', en: 'He hears somebody singing in the tower' }
      ], answer: 0,
      explain: { nl: 'De voetstappen en het papiertje zijn sporen: daar heeft net iemand gestaan.', en: 'The footprints and the wrapper are clues: somebody has just been standing there.' } },
    { id: 'q4', type: 'order', skill: 'volgorde',
      q: { nl: 'Zet op volgorde wat er gebeurt.', en: 'Put what happens in order.' },
      items: [
        { nl: 'Lies ziet ’s nachts een lampje in de vuurtoren.', en: 'At night Lies sees a light in the lighthouse.' },
        { nl: 'De kinderen vinden voetstappen bij de deur.', en: 'The children find footprints by the door.' },
        { nl: 'Lies voelt of de deur op slot zit.', en: 'Lies checks whether the door is locked.' },
        { nl: 'Het lampje seint kort, lang, kort.', en: 'The light signals short, long, short.' }
      ], answer: [0, 1, 2, 3],
      explain: { nl: 'Eerst de nacht, dan de ochtend bij de deur, en de volgende avond het seinen.', en: 'First the night, then the morning at the door, and the next evening the signals.' } },
    { id: 'q5', type: 'gap', skill: 'woordenschat',
      q: { nl: 'Wie een paar nachten bij iemand anders slaapt, gaat daar ___.', en: 'If you sleep at somebody else’s home for a few nights, you ___ there.' },
      options: [
        { nl: 'logeren', en: 'stay over' },
        { nl: 'verhuizen', en: 'move house' },
        { nl: 'werken', en: 'work' },
        { nl: 'zwemmen', en: 'swim' }
      ], answer: 0,
      explain: { nl: 'Logeren betekent een paar nachten bij iemand anders slapen, zoals Lies en Stijn bij opa.', en: 'To stay over means sleeping at somebody else’s home for a few nights, like Lies and Stijn at Grandpa’s.' } },
    { id: 'q6', type: 'mc', skill: 'gevolgtrekking',
      q: { nl: 'Wat vertellen de kleine voetstappen over de persoon in de vuurtoren?', en: 'What do the small footprints tell you about the person in the lighthouse?' },
      options: [
        { nl: 'Het is waarschijnlijk een kind, of iemand met kleine voeten', en: 'It is probably a child, or somebody with small feet' },
        { nl: 'Het is zeker opa', en: 'It is definitely Grandpa' },
        { nl: 'Het is een grote, sterke man', en: 'It is a big, strong man' },
        { nl: 'Het is een hond', en: 'It is a dog' }
      ], answer: 0,
      explain: { nl: 'De voetstappen zijn bijna net zo klein als die van Lies. Dat past bij een kind.', en: 'The footprints are almost as small as Lies’s. That fits a child.' } }
  ]
},
{
  level: 4, emoji: '📓', scene: 'harbour',
  title: { nl: 'Vier letters', en: 'Four letters' },
  recap: { nl: 'Lies en Stijn logeren bij opa op Terschelling. In de oude vuurtoren, die al twintig jaar op slot zit, gaat ’s nachts een lampje aan. Stijn denkt dat iemand SOS seint.',
           en: 'Lies and Stijn are staying with Grandpa on Terschelling. In the old lighthouse, locked for twenty years, a light switches on at night. Stijn thinks somebody is signalling SOS.' },
  teaser: { nl: 'Wie seint er vanuit de vuurtoren, en wie seint er terug vanuit Harlingen?', en: 'Who is signalling from the lighthouse, and who is signalling back from Harlingen?' },
  text: {
    nl: [
      "“We moeten opa waarschuwen”, zei Stijn bij het ontbijt. Maar opa schrok niet. Hij luisterde, keek naar buiten en zei: “Iemand in nood seint niet elke avond precies om elf uur, en na vijf minuten weer niet. Die zou de hele nacht seinen, of de politie bellen. Schrijf eerst eens op wat je precies ziet.”",
      "Dus maakten Lies en Stijn een logboek, net als een echte vuurtorenwachter. Ze schreven de tijd op, hoe lang het lampje brandde en welke flitsen ze zagen. Opa leende hun zijn oude verrekijker. Elke avond was het hetzelfde: om elf uur begon het, na vijf minuten was het voorbij. En het waren geen drie korte, drie lange en drie korte flitsen. Stijn had zich vergist. Het waren telkens vier groepjes.",
      "In de bibliotheek van het dorp vonden ze een boek over seinen op zee. Achterin stond een tabel met het morsealfabet, waarin elke letter uit korte en lange flitsen bestaat. Met die tabel ontcijferden ze de groepjes: W, T, R en S. Ze telden de flitsen drie avonden lang, tot ze zeker wisten dat het klopte. “Dat is geen woord”, zei Stijn teleurgesteld. Lies dacht na. “Misschien is het een afkorting.”",
      "In hetzelfde boek stond een foto van de vuurtoren uit 1985. Ernaast stond een man met een pet en een grote zaklamp: wachter Jaap. Onder de foto stond dat Jaap met de vissers praatte door met zijn lamp te seinen. Zo wisten ze ook in de mist dat hij over hen waakte.",
      "Toen ze die avond weer bij het raam zaten, zag Lies iets wat ze nog niet eerder had gezien. Toen het lampje in de vuurtoren uitging, flitste er heel ver weg, aan de overkant van het water, een piepklein lichtje. Vier groepjes. Precies dezelfde. Stijn pakte de verrekijker. Het lichtje kwam uit een hoog gebouw in Harlingen, op het vasteland.",
      "“Het is een gesprek”, fluisterde Lies. “Iemand hier seint iets, en iemand daar seint terug.”"
    ],
    en: [
      "“We have to warn Grandpa,” said Stijn at breakfast. But Grandpa did not get a fright. He listened, looked outside and said: “Somebody in trouble does not signal at exactly eleven every evening, and then stop after five minutes. They would signal all night, or call the police. First write down exactly what you see.”",
      "So Lies and Stijn made a logbook, just like a real lighthouse keeper. They wrote down the time, how long the light was on and which flashes they saw. Grandpa lent them his old binoculars. Every evening it was the same: it started at eleven and after five minutes it was over. And it was not three short, three long and three short flashes. Stijn had made a mistake. Every time there were four little groups.",
      "In the village library they found a book about signalling at sea. At the back was a table with the Morse alphabet, in which every letter is made of short and long flashes. With that table they decoded the groups: W, T, R and S. They counted the flashes for three evenings, until they were sure it was right. “That is not a word,” said Stijn, disappointed. Lies thought about it. “Maybe it is an abbreviation.”",
      "In the same book there was a photo of the lighthouse from 1985. Next to it stood a man with a cap and a big torch: keeper Jaap. Under the photo it said that Jaap talked to the fishermen by signalling with his lamp. That way they knew, even in the fog, that he was watching over them.",
      "When they sat at the window again that evening, Lies saw something she had not seen before. When the light in the lighthouse went out, far away, on the other side of the water, a tiny light flashed. Four little groups. Exactly the same. Stijn grabbed the binoculars. The little light came from a tall building in Harlingen, on the mainland.",
      "“It is a conversation,” whispered Lies. “Somebody here is signalling something, and somebody there is signalling back.”"
    ]
  },
  words: [
    { nl: 'logboek', en: 'logbook', defNl: 'een schrift waarin je elke keer opschrijft wat er gebeurt', defEn: 'a notebook in which you write down what happens each time' },
    { nl: 'ontcijferden', en: 'decoded', defNl: 'een geheime code begrijpen en vertalen (ontcijferen)', defEn: 'understood and translated a secret code (to decode)' },
    { nl: 'afkorting', en: 'abbreviation', defNl: 'een kort woord dat voor een langer woord of een paar woorden staat', defEn: 'a short word that stands for a longer word or a few words' }
  ],
  questions: [
    { id: 'q1', type: 'mc', skill: 'letterlijk',
      q: { nl: 'Hoe laat begint het lampje elke avond?', en: 'What time does the light start every evening?' },
      options: [
        { nl: 'Om elf uur', en: 'At eleven o’clock' },
        { nl: 'Om tien uur', en: 'At ten o’clock' },
        { nl: 'Om middernacht', en: 'At midnight' },
        { nl: 'Zodra het donker wordt', en: 'As soon as it gets dark' }
      ], answer: 0,
      explain: { nl: 'Alinea 2: “om elf uur begon het, na vijf minuten was het voorbij.”', en: 'Paragraph 2: “it started at eleven and after five minutes it was over.”' } },
    { id: 'q2', type: 'mc', skill: 'gevolgtrekking',
      q: { nl: 'Waarom denkt opa dat het geen noodsignaal is?', en: 'Why does Grandpa think it is not a distress signal?' },
      options: [
        { nl: 'Iemand in nood zou niet elke avond op dezelfde tijd seinen en daarna stoppen', en: 'Somebody in trouble would not signal at the same time every evening and then stop' },
        { nl: 'Opa weet al wie er in de vuurtoren zit', en: 'Grandpa already knows who is in the lighthouse' },
        { nl: 'Opa denkt dat Stijn het verzint', en: 'Grandpa thinks Stijn is making it up' },
        { nl: 'Op Terschelling gebeurt nooit iets ergs', en: 'Nothing bad ever happens on Terschelling' }
      ], answer: 0,
      explain: { nl: 'Opa zegt: iemand in nood zou de hele nacht seinen of de politie bellen. Precies om elf uur en na vijf minuten stoppen past daar niet bij.', en: 'Grandpa says somebody in trouble would signal all night or call the police. Exactly at eleven and stopping after five minutes does not fit that.' } },
    { id: 'q3', type: 'mc', skill: 'verwijswoorden',
      q: { nl: '“Zo wisten ze ook in de mist dat hij over hen waakte.” Wie zijn “ze”?', en: '“That way they knew, even in the fog, that he was watching over them.” Who are “they”?' },
      options: [
        { nl: 'De vissers', en: 'The fishermen' },
        { nl: 'Lies en Stijn', en: 'Lies and Stijn' },
        { nl: 'De mensen van de bibliotheek', en: 'The library staff' },
        { nl: 'Opa en oma', en: 'Grandpa and Grandma' }
      ], answer: 0,
      explain: { nl: 'De zin ervoor gaat over Jaap die met de vissers praatte. “Ze” verwijst naar de vissers.', en: 'The sentence before is about Jaap talking to the fishermen. “They” refers to the fishermen.' } },
    { id: 'q4', type: 'multi', skill: 'letterlijk',
      q: { nl: 'Wat schreven Lies en Stijn op in hun logboek? Kies er 3.', en: 'What did Lies and Stijn write in their logbook? Pick 3.' },
      options: [
        { nl: 'De tijd', en: 'The time' },
        { nl: 'Hoe lang het lampje brandde', en: 'How long the light was on' },
        { nl: 'Welke flitsen ze zagen', en: 'Which flashes they saw' },
        { nl: 'Wat voor weer het was', en: 'What the weather was like' },
        { nl: 'De naam van de seiner', en: 'The name of the person signalling' }
      ], answer: [0, 1, 2],
      explain: { nl: 'Alinea 2: “Ze schreven de tijd op, hoe lang het lampje brandde en welke flitsen ze zagen.”', en: 'Paragraph 2: “They wrote down the time, how long the light was on and which flashes they saw.”' } },
    { id: 'q5', type: 'order', skill: 'volgorde',
      q: { nl: 'Zet in de volgorde van het verhaal.', en: 'Put these in the order of the story.' },
      items: [
        { nl: 'Opa zegt dat ze moeten opschrijven wat ze zien.', en: 'Grandpa says they should write down what they see.' },
        { nl: 'Ze vinden een tabel met het morsealfabet.', en: 'They find a table with the Morse alphabet.' },
        { nl: 'Ze zien een oude foto van wachter Jaap.', en: 'They see an old photo of keeper Jaap.' },
        { nl: 'Lies ziet een lichtje aan de overkant van het water.', en: 'Lies sees a small light on the other side of the water.' }
      ], answer: [0, 1, 2, 3],
      explain: { nl: 'Eerst het ontbijt met opa, dan de bibliotheek (tabel en foto), en die avond het lichtje aan de overkant.', en: 'First breakfast with Grandpa, then the library (table and photo), and that evening the light across the water.' } },
    { id: 'q6', type: 'gap', skill: 'woordenschat',
      q: { nl: 'Met de tabel konden ze de geheime code ___.', en: 'With the table they could ___ the secret code.' },
      options: [
        { nl: 'ontcijferen', en: 'decode' },
        { nl: 'vergeten', en: 'forget' },
        { nl: 'verstoppen', en: 'hide' },
        { nl: 'uitzetten', en: 'switch off' }
      ], answer: 0,
      explain: { nl: 'Ontcijferen is een code begrijpen en vertalen. Zo vonden ze de letters W, T, R en S.', en: 'To decode is to understand and translate a code. That is how they found the letters W, T, R and S.' } },
    { id: 'q7', type: 'mc', skill: 'structuur',
      q: { nl: 'Waarom vertelt de schrijver over de foto uit 1985?', en: 'Why does the writer tell you about the photo from 1985?' },
      options: [
        { nl: 'Het is een aanwijzing: vroeger seinde de wachter ook met een lamp', en: 'It is a clue: long ago the keeper also signalled with a lamp' },
        { nl: 'Om uit te leggen hoe een fototoestel werkt', en: 'To explain how a camera works' },
        { nl: 'Om te laten zien dat de bibliotheek oud is', en: 'To show that the library is old' },
        { nl: 'Om te vertellen hoe laat de bibliotheek opengaat', en: 'To say what time the library opens' }
      ], answer: 0,
      explain: { nl: 'De foto brengt Lies op het idee dat seinen met een lamp een manier van praten is, net als vroeger bij Jaap.', en: 'The photo gives Lies the idea that signalling with a lamp is a way of talking, just like Jaap did long ago.' } },
    { id: 'q8', type: 'mc', skill: 'hoofdgedachte',
      q: { nl: 'Waar gaat dit hoofdstuk vooral over?', en: 'What is this chapter mainly about?' },
      options: [
        { nl: 'Lies en Stijn onderzoeken het lampje en ontdekken dat het een gesprek is', en: 'Lies and Stijn investigate the light and find out it is a conversation' },
        { nl: 'Hoe het morsealfabet vroeger werd uitgevonden', en: 'How the Morse alphabet was invented' },
        { nl: 'Opa die een nieuwe verrekijker koopt', en: 'Grandpa buying new binoculars' },
        { nl: 'Vissers die verdwalen in de mist', en: 'Fishermen getting lost in the fog' }
      ], answer: 0,
      explain: { nl: 'Het hele hoofdstuk zoeken de kinderen uit wat het lampje betekent, tot Lies ontdekt dat iemand terugseint.', en: 'Throughout the chapter the children find out what the light means, until Lies discovers somebody is signalling back.' } }
  ]
},
{
  level: 6, emoji: '🌙', scene: 'night',
  title: { nl: 'Welterusten over het water', en: 'Goodnight across the water' },
  recap: { nl: 'In de vuurtoren seint iemand elke avond om elf uur vier letters: W, T, R en S. Vanaf de overkant, in Harlingen, seint iemand precies hetzelfde terug. Lies en Stijn willen weten wie dat zijn.',
           en: 'Every evening at eleven somebody in the lighthouse signals four letters: W, T, R and S. From the other side, in Harlingen, somebody signals exactly the same back. Lies and Stijn want to know who they are.' },
  text: {
    nl: [
      "Opa wilde de kinderen niet alleen naar de vuurtoren laten gaan, dus om kwart voor elf stonden ze er met z'n drieën. De deur zat op slot, maar aan de achterkant hing een touwladder naar een openstaand raampje. Voordat opa iets kon zeggen, verscheen er boven een gezicht in het raampje. Het was een meisje van een jaar of twaalf, met een zaklamp in haar hand.",
      "“Ik doe niets verkeerd”, zei ze meteen. Ze heette Mira, en wachter Jaap was haar overgrootvader. Jaap was eenennegentig en woonde sinds kort in een verzorgingshuis in Harlingen. Zijn gehoor was zo slecht geworden dat bellen niet meer lukte. “Maar zien kan hij nog prima”, zei Mira. “Dus zeggen we elkaar elke avond welterusten, zoals hij vroeger met de vissers praatte.” W, T, R, S: welterusten.",
      "Lies begreep het meteen, maar Stijn fronste. “Waarom doe je het dan stiekem?” Mira keek naar de grond. Ze had de oude sleutel uit Jaaps la meegenomen, zonder te vragen. En op de deur hing sinds een maand een bord van de gemeente: de vuurtoren werd verkocht. “Als iemand het ontdekt, is het misschien helemaal voorbij”, zei ze zacht.",
      "Een week later was er een vergadering in het dorpshuis. De wethouder legde uit dat het opknappen van de vuurtoren minstens twee ton zou kosten. “Dat geld kunnen we beter aan de school en de haven uitgeven”, vond hij. “Bovendien heeft niemand een vuurtoren nog nodig: schepen varen tegenwoordig met gps.” Een paar mensen knikten.",
      "Toen stak Lies haar hand op. Ze vertelde over het logboek, de vier letters en het lichtje aan de overkant. Het werd heel stil in de zaal. “Een vuurtoren is gemaakt om mensen te laten weten dat iemand over ze waakt”, zei ze. “Dat doet deze vuurtoren nog steeds.” Een visser achterin begon te klappen, en daarna klapte bijna iedereen.",
      "De vuurtoren werd niet verkocht. Het dorp begon een inzamelingsactie en de gemeente betaalde de rest. Er kwam een klein museum in, en Mira kreeg officieel een eigen sleutel. Elke avond om elf uur seint De Witte Wachter nu vier letters over het water. En heel ver weg, in Harlingen, flitst een zaklamp terug. Stijn noemt het het welterustenlicht."
    ],
    en: [
      "Grandpa did not want the children to go to the lighthouse alone, so at a quarter to eleven the three of them were standing there. The door was locked, but at the back a rope ladder hung down to a small open window. Before Grandpa could say anything, a face appeared in the window above. It was a girl of about twelve, with a torch in her hand.",
      "“I am not doing anything wrong,” she said straight away. Her name was Mira, and keeper Jaap was her great-grandfather. Jaap was ninety-one and had recently moved into a care home in Harlingen. His hearing had become so bad that phoning no longer worked. “But he can still see perfectly well,” said Mira. “So every evening we say goodnight to each other, the way he used to talk to the fishermen.” W, T, R, S: welterusten, goodnight.",
      "Lies understood straight away, but Stijn frowned. “Then why do you do it in secret?” Mira looked at the ground. She had taken the old key from Jaap’s drawer, without asking. And for a month a sign from the council had been hanging on the door: the lighthouse was being sold. “If anyone finds out, it might be over for good,” she said quietly.",
      "A week later there was a meeting in the village hall. The councillor explained that repairing the lighthouse would cost at least two hundred thousand euros. “We would do better to spend that money on the school and the harbour,” he said. “Besides, nobody needs a lighthouse any more: ships sail with GPS these days.” A few people nodded.",
      "Then Lies raised her hand. She told them about the logbook, the four letters and the little light on the other side. The hall went very quiet. “A lighthouse is made to let people know that somebody is watching over them,” she said. “This lighthouse still does that.” A fisherman at the back started clapping, and then almost everybody clapped.",
      "The lighthouse was not sold. The village started a fundraiser and the council paid the rest. A small museum was set up inside, and Mira officially got a key of her own. Every evening at eleven The White Guard now signals four letters across the water. And far away, in Harlingen, a torch flashes back. Stijn calls it the goodnight light."
    ]
  },
  words: [
    { nl: 'verzorgingshuis', en: 'care home', defNl: 'een huis waar oude mensen wonen die hulp nodig hebben', defEn: 'a home where old people live who need help' },
    { nl: 'vergadering', en: 'meeting', defNl: 'een bijeenkomst waar mensen samen praten en iets beslissen', defEn: 'a gathering where people talk together and decide something' },
    { nl: 'inzamelingsactie', en: 'fundraiser', defNl: 'een actie waarbij veel mensen samen geld geven voor een doel', defEn: 'a campaign in which many people give money together for a cause' }
  ],
  questions: [
    { id: 'q1', type: 'mc', skill: 'letterlijk',
      q: { nl: 'Wie is Mira?', en: 'Who is Mira?' },
      options: [
        { nl: 'De achterkleindochter van wachter Jaap', en: 'Keeper Jaap’s great-granddaughter' },
        { nl: 'De dochter van de wethouder', en: 'The councillor’s daughter' },
        { nl: 'Een meisje uit de klas van Lies', en: 'A girl from Lies’s class' },
        { nl: 'De kleindochter van opa', en: 'Grandpa’s granddaughter' }
      ], answer: 0,
      explain: { nl: 'Alinea 2: wachter Jaap is haar overgrootvader, dus Mira is zijn achterkleindochter.', en: 'Paragraph 2: keeper Jaap is her great-grandfather, so Mira is his great-granddaughter.' } },
    { id: 'q2', type: 'find', skill: 'gevolgtrekking',
      q: { nl: 'Welke zin legt uit waarom Mira en Jaap niet gewoon met elkaar bellen?', en: 'Which sentence explains why Mira and Jaap do not simply phone each other?' },
      options: [
        { nl: 'Het was een meisje van een jaar of twaalf, met een zaklamp in haar hand.', en: 'It was a girl of about twelve, with a torch in her hand.' },
        { nl: 'Jaap was eenennegentig en woonde sinds kort in een verzorgingshuis in Harlingen.', en: 'Jaap was ninety-one and had recently moved into a care home in Harlingen.' },
        { nl: 'Zijn gehoor was zo slecht geworden dat bellen niet meer lukte.', en: 'His hearing had become so bad that phoning no longer worked.' },
        { nl: 'Ze had de oude sleutel uit Jaaps la meegenomen, zonder te vragen.', en: 'She had taken the old key from Jaap’s drawer, without asking.' }
      ], answer: 2,
      explain: { nl: 'Jaap hoort te slecht om te bellen, maar hij kan nog goed zien. Daarom seinen ze met licht.', en: 'Jaap cannot hear well enough to phone, but he can still see well. That is why they signal with light.' } },
    { id: 'q3', type: 'gap', skill: 'woordenschat',
      q: { nl: 'Een ___ is een actie waarbij veel mensen samen geld geven voor een doel.', en: 'A ___ is a campaign in which many people give money together for a cause.' },
      options: [
        { nl: 'inzamelingsactie', en: 'fundraiser' },
        { nl: 'vergadering', en: 'meeting' },
        { nl: 'verzorgingshuis', en: 'care home' },
        { nl: 'touwladder', en: 'rope ladder' }
      ], answer: 0,
      explain: { nl: 'Met de inzamelingsactie brachten de dorpelingen samen geld bij elkaar voor de vuurtoren.', en: 'With the fundraiser the villagers raised money together for the lighthouse.' } },
    { id: 'q4', type: 'order', skill: 'volgorde',
      q: { nl: 'Zet in de volgorde van het verhaal.', en: 'Put these in the order of the story.' },
      items: [
        { nl: 'Mira verschijnt in het raampje van de vuurtoren.', en: 'Mira appears in the lighthouse window.' },
        { nl: 'Mira legt uit wat W, T, R, S betekent.', en: 'Mira explains what W, T, R, S means.' },
        { nl: 'De wethouder zegt dat opknappen te duur is.', en: 'The councillor says repairing it is too expensive.' },
        { nl: 'Lies vertelt in de zaal over het logboek.', en: 'Lies tells the hall about the logbook.' },
        { nl: 'Mira krijgt officieel een eigen sleutel.', en: 'Mira officially gets a key of her own.' }
      ], answer: [0, 1, 2, 3, 4],
      explain: { nl: 'Eerst de avond bij de vuurtoren, een week later de vergadering, en daarna de goede afloop.', en: 'First the evening at the lighthouse, a week later the meeting, and then the happy ending.' } },
    { id: 'q5', type: 'mc', skill: 'verwijswoorden',
      q: { nl: '“Dat doet deze vuurtoren nog steeds.” Waar verwijst “dat” naar?', en: '“This lighthouse still does that.” What does “that” refer to?' },
      options: [
        { nl: 'Mensen laten weten dat iemand over ze waakt', en: 'Letting people know that somebody is watching over them' },
        { nl: 'Schepen de weg wijzen met gps', en: 'Showing ships the way with GPS' },
        { nl: 'Heel veel geld kosten', en: 'Costing a lot of money' },
        { nl: 'Verkocht worden door de gemeente', en: 'Being sold by the council' }
      ], answer: 0,
      explain: { nl: 'In de zin ervoor zegt Lies waarvoor een vuurtoren gemaakt is: om mensen te laten weten dat iemand over ze waakt.', en: 'In the sentence before, Lies says what a lighthouse is made for: to let people know somebody is watching over them.' } },
    { id: 'q6', type: 'sort', skill: 'feitmening',
      q: { nl: 'Feit of mening? Zet elke zin in de goede groep.', en: 'Fact or opinion? Put every sentence in the right group.' },
      bins: [ { nl: 'Feit', en: 'Fact' }, { nl: 'Mening', en: 'Opinion' } ],
      items: [
        { nl: 'Jaap is eenennegentig jaar oud.', en: 'Jaap is ninety-one years old.', bin: 0 },
        { nl: 'Dat geld kunnen we beter aan de school uitgeven.', en: 'We would do better to spend that money on the school.', bin: 1 },
        { nl: 'Er hing een bord van de gemeente op de deur.', en: 'A sign from the council was hanging on the door.', bin: 0 },
        { nl: 'Niemand heeft een vuurtoren nog nodig.', en: 'Nobody needs a lighthouse any more.', bin: 1 }
      ],
      explain: { nl: 'Een leeftijd en een bord op de deur kun je nagaan. Wat “beter” is en dat “niemand” iets nodig heeft, vindt de wethouder.', en: 'An age and a sign on the door can be checked. What is “better” and that “nobody” needs something is what the councillor thinks.' } },
    { id: 'q7', type: 'multi', skill: 'letterlijk',
      q: { nl: 'Wat gebeurde er na de vergadering? Kies er 3.', en: 'What happened after the meeting? Pick 3.' },
      options: [
        { nl: 'Er kwam een klein museum in de vuurtoren', en: 'A small museum was set up in the lighthouse' },
        { nl: 'Mira kreeg officieel een eigen sleutel', en: 'Mira officially got a key of her own' },
        { nl: 'Het dorp begon een inzamelingsactie', en: 'The village started a fundraiser' },
        { nl: 'De vuurtoren werd toch verkocht', en: 'The lighthouse was sold after all' },
        { nl: 'Jaap verhuisde terug naar het eiland', en: 'Jaap moved back to the island' }
      ], answer: [0, 1, 2],
      explain: { nl: 'Alinea 6 noemt de inzamelingsactie, het museum en de eigen sleutel. De vuurtoren werd juist niet verkocht.', en: 'Paragraph 6 mentions the fundraiser, the museum and the key of her own. The lighthouse was not sold.' } },
    { id: 'q8', type: 'mc', skill: 'doel',
      q: { nl: 'Waarom laat de schrijver ook de wethouder aan het woord?', en: 'Why does the writer also let the councillor speak?' },
      options: [
        { nl: 'Zodat je beide kanten ziet: er waren ook redenen om de vuurtoren te verkopen', en: 'So you see both sides: there were also reasons to sell the lighthouse' },
        { nl: 'Om uit te leggen hoe gps werkt', en: 'To explain how GPS works' },
        { nl: 'Om te laten zien dat Lies ongelijk had', en: 'To show that Lies was wrong' },
        { nl: 'Om de wethouder belachelijk te maken', en: 'To make fun of the councillor' }
      ], answer: 0,
      explain: { nl: 'De wethouder heeft echte argumenten (geld voor de school en de haven). Daardoor wordt de keuze spannender en eerlijker.', en: 'The councillor has real arguments (money for the school and the harbour). That makes the choice more exciting and fairer.' } },
    { id: 'q9', type: 'tf', skill: 'gevolgtrekking',
      q: { nl: 'Mira deed het stiekem omdat ze bang was dat het seinen zou moeten stoppen.', en: 'Mira did it in secret because she was afraid the signalling would have to stop.' },
      answer: true,
      explain: { nl: 'Ze zegt: “Als iemand het ontdekt, is het misschien helemaal voorbij.” Ze had de sleutel zonder te vragen meegenomen.', en: 'She says: “If anyone finds out, it might be over for good.” She had taken the key without asking.' } },
    { id: 'q10', type: 'find', skill: 'hoofdgedachte',
      q: { nl: 'Welke zin laat het beste zien hoe het verhaal afloopt?', en: 'Which sentence best shows how the story ends?' },
      options: [
        { nl: 'Een paar mensen knikten.', en: 'A few people nodded.' },
        { nl: 'Het werd heel stil in de zaal.', en: 'The hall went very quiet.' },
        { nl: 'Elke avond om elf uur seint De Witte Wachter nu vier letters over het water.', en: 'Every evening at eleven The White Guard now signals four letters across the water.' },
        { nl: 'Stijn noemt het het welterustenlicht.', en: 'Stijn calls it the goodnight light.' }
      ], answer: 2,
      explain: { nl: 'Die zin vertelt dat de vuurtoren blijft en dat het welterusten zeggen gewoon door mag gaan: dat is de afloop.', en: 'That sentence tells you the lighthouse stays and the goodnight signals may carry on: that is the ending.' } }
  ]
}
  ]
});
