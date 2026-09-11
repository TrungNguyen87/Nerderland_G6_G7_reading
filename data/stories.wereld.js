/* Wereld 9 - Wereld & Culturen */
addStories([
{
  id: 'wereld-1', topic: 'wereld', level: 1, emoji: '🏮', scene: 'world',
  title: { nl: 'Nieuwjaar in februari', en: 'New Year in February' },
  text: {
    nl: [
      "Bij ons begint het nieuwe jaar op 1 januari. In China is dat anders. Daar kijken ze naar de maan. Het feest valt elk jaar op een andere dag, ergens tussen 21 januari en 20 februari.",
      "Het heet het Lentefeest. Miljoenen mensen reizen dan naar huis om bij hun familie te zijn. Het is de drukste reistijd van de wereld: treinen, bussen en vliegtuigen zitten wekenlang vol.",
      "Voor het feest wordt het hele huis schoongemaakt. Zo veeg je de pech van vorig jaar naar buiten. Maar op de eerste dag van het nieuwe jaar mag je juist niet vegen. Dan zou je het geluk weer weggooien.",
      "Rood is overal. Rode lampionnen, rode kleren en rode envelopjes met geld voor de kinderen. Volgens een oud verhaal was er een monster dat bang was voor de kleur rood en voor harde knallen. Daarom is er ook vuurwerk.",
      "Elk jaar hoort bij een dier: de rat, de os, de tijger, en zo verder, twaalf in totaal. Ben je in een jaar van de draak geboren, dan ben je een draak. In 2024 was dat weer zover."
    ],
    en: [
      "Here the new year starts on 1 January. In China it is different. There they look at the moon. The festival falls on a different day every year, somewhere between 21 January and 20 February.",
      "It is called the Spring Festival. Millions of people travel home then to be with their family. It is the busiest travelling time in the world: trains, buses and planes are full for weeks.",
      "Before the festival the whole house is cleaned. That way you sweep last year’s bad luck out of the door. But on the first day of the new year you must not sweep at all. Then you would throw the good luck away again.",
      "Red is everywhere. Red lanterns, red clothes and red envelopes with money for the children. According to an old story there was a monster that was afraid of the colour red and of loud bangs. That is why there are fireworks too.",
      "Every year belongs to an animal: the rat, the ox, the tiger, and so on, twelve in all. If you were born in a year of the dragon, you are a dragon. In 2024 that came round again."
    ]
  },
  words: [
    { nl: 'lampion', en: 'lantern', defNl: 'een lamp van papier die je kunt ophangen', defEn: 'a paper lamp you can hang up' },
    { nl: 'pech', en: 'bad luck', defNl: 'als het steeds tegenzit', defEn: 'when things keep going wrong' },
    { nl: 'Lentefeest', en: 'Spring Festival', defNl: 'de naam van het Chinese nieuwjaarsfeest', defEn: 'the name of the Chinese New Year festival' }
  ],
  questions: [
    { id: 'q1', type: 'mc', skill: 'letterlijk',
      q: { nl: 'Waar kijken ze in China naar om te weten wanneer het feest is?',
           en: 'What do they look at in China to know when the festival is?' },
      options: [
        { nl: 'Naar de maan', en: 'At the moon' },
        { nl: 'Naar de zon', en: 'At the sun' },
        { nl: 'Naar de kalender van januari', en: 'At the January calendar' },
        { nl: 'Naar het weer', en: 'At the weather' }
      ], answer: 0,
      explain: { nl: 'In alinea 1 staat: daar kijken ze naar de maan.', en: 'Paragraph 1 says: there they look at the moon.' } },
    { id: 'q2', type: 'tf', skill: 'letterlijk',
      q: { nl: 'Op de eerste dag van het nieuwe jaar wordt er juist extra geveegd.',
           en: 'On the first day of the new year people sweep extra hard.' },
      answer: false,
      explain: { nl: 'Dan mag je juist níét vegen, want dan gooi je het geluk weg.',
                 en: 'On that day you must not sweep, because you would throw the luck away.' } },
    { id: 'q3', type: 'mc', skill: 'gevolgtrekking',
      q: { nl: 'Waarom is er vuurwerk bij het feest?', en: 'Why are there fireworks at the festival?' },
      options: [
        { nl: 'Omdat het monster uit het verhaal bang was voor harde knallen',
          en: 'Because the monster in the story was afraid of loud bangs' },
        { nl: 'Omdat het dan lente wordt', en: 'Because spring is starting' },
        { nl: 'Omdat de treinen zo vol zitten', en: 'Because the trains are so full' },
        { nl: 'Omdat het dan donker is', en: 'Because it is dark then' }
      ], answer: 0,
      explain: { nl: 'Alinea 4: het monster was bang voor rood én voor harde knallen.',
                 en: 'Paragraph 4: the monster was afraid of red and of loud bangs.' } },
    { id: 'q4', type: 'gap', skill: 'woordenschat',
      q: { nl: 'Een lampion is ___.', en: 'A lantern is ___.' },
      options: [
        { nl: 'een lamp van papier die je kunt ophangen', en: 'a paper lamp you can hang up' },
        { nl: 'een rode envelop met geld', en: 'a red envelope with money' },
        { nl: 'een soort vuurwerk', en: 'a kind of firework' },
        { nl: 'een dier van het Chinese jaar', en: 'an animal of the Chinese year' }
      ], answer: 0,
      explain: { nl: 'In alinea 4 hangen er rode lampionnen: papieren lampen.',
                 en: 'In paragraph 4 there are red lanterns: paper lamps.' } },
    { id: 'q5', type: 'order', skill: 'volgorde',
      q: { nl: 'Zet op volgorde wat er rond het feest gebeurt.', en: 'Put in order what happens around the festival.' },
      items: [
        { nl: 'Het huis wordt helemaal schoongemaakt.', en: 'The house is cleaned completely.' },
        { nl: 'Mensen reizen naar hun familie.', en: 'People travel to their family.' },
        { nl: 'Er is vuurwerk en iedereen draagt rood.', en: 'There are fireworks and everyone wears red.' },
        { nl: 'Op de eerste dag wordt er niet geveegd.', en: 'On the first day nobody sweeps.' }
      ], answer: [0, 1, 2, 3],
      explain: { nl: 'Eerst schoonmaken vóór het feest, dan reizen, dan feest, en daarna de eerste dag.',
                 en: 'First cleaning before the festival, then travelling, then the party, then the first day.' } },
    { id: 'q6', type: 'mc', skill: 'hoofdgedachte',
      q: { nl: 'Waar gaat dit stuk vooral over?', en: 'What is this text mainly about?' },
      options: [
        { nl: 'Hoe het Chinese nieuwjaar gevierd wordt', en: 'How Chinese New Year is celebrated' },
        { nl: 'Hoe druk het is in Chinese treinen', en: 'How busy Chinese trains are' },
        { nl: 'Waarom rood een mooie kleur is', en: 'Why red is a nice colour' },
        { nl: 'Hoe je een huis schoonmaakt', en: 'How to clean a house' }
      ], answer: 0,
      explain: { nl: 'Elke alinea vertelt iets over dat feest: de datum, het reizen, de gewoontes en de dieren.',
                 en: 'Every paragraph tells something about that festival.' } }
  ]
},

{
  id: 'wereld-2', topic: 'wereld', level: 2, emoji: '🗣️', scene: 'world',
  title: { nl: 'De taal die je fluit', en: 'The language you whistle' },
  text: {
    nl: [
      "Op La Gomera, een klein Spaans eiland bij Afrika, staan diepe dalen tussen de bergen. Vroeger duurde het uren om van de ene kant naar de andere te lopen. Roepen had geen zin: je stem draagt niet ver genoeg.",
      "De bewoners bedachten iets anders. Ze gingen hun taal fluiten. Zo'n fluittoon draagt over een afstand van wel drie kilometer, over het dal heen, langs de rotswanden. De taal heet Silbo Gomero, van het Spaanse woord silbar: fluiten.",
      "Het is geen geheimtaal met afgesproken signalen. Het is echt Spaans. De fluiter vervangt klinkers door hoge en lage tonen en medeklinkers door korte onderbrekingen. Wie het kan, fluit hele zinnen: \"Kom morgen de geiten halen.\"",
      "In de jaren zestig kwamen de telefoon en betere wegen. Bijna niemand had het fluiten nog nodig. De oude fluiters werden minder, en de taal dreigde te verdwijnen.",
      "In 1999 besloot het eiland in te grijpen. Silbo werd een verplicht vak op de basisschool, een halfuur per week. Inmiddels leren alle kinderen op La Gomera fluiten, en in 2009 zette de Verenigde Naties de taal op een wereldlijst van dingen die bewaard moeten blijven.",
      "Of het genoeg is, weet niemand. Een taal blijft pas leven als mensen hem echt gebruiken, en niemand fluit meer om te zeggen dat het eten klaar is. Maar boven het dal klinkt hij nog steeds: één lange toon, twee korte, en aan de overkant lacht iemand."
    ],
    en: [
      "On La Gomera, a small Spanish island near Africa, deep valleys lie between the mountains. It used to take hours to walk from one side to the other. Shouting was no use: your voice does not carry far enough.",
      "The islanders came up with something else. They started whistling their language. Such a whistled note carries as far as three kilometres, across the valley and along the rock faces. The language is called Silbo Gomero, from the Spanish word silbar: to whistle.",
      "It is not a secret code with agreed signals. It is really Spanish. The whistler replaces vowels with high and low notes and consonants with short breaks. Anyone who can do it whistles whole sentences: \"Come and fetch the goats tomorrow.\"",
      "In the sixties the telephone arrived, and better roads. Almost nobody needed the whistling any more. The old whistlers grew fewer, and the language was in danger of disappearing.",
      "In 1999 the island decided to act. Silbo became a compulsory subject in primary school, half an hour a week. Now all the children on La Gomera learn to whistle, and in 2009 the United Nations put the language on a world list of things that must be preserved.",
      "Whether that is enough, nobody knows. A language only stays alive if people really use it, and nobody whistles any more to say dinner is ready. But above the valley it still sounds: one long note, two short ones, and on the other side somebody laughs."
    ]
  },
  words: [
    { nl: 'klinkers', en: 'vowels', defNl: 'de letters a, e, i, o en u', defEn: 'the letters a, e, i, o and u' },
    { nl: 'medeklinkers', en: 'consonants', defNl: 'alle andere letters van het alfabet', defEn: 'all the other letters of the alphabet' },
    { nl: 'verplicht vak', en: 'compulsory subject', defNl: 'een les die iedereen op school moet volgen', defEn: 'a lesson everybody at school has to take' }
  ],
  questions: [
    { id: 'q1', type: 'mc', skill: 'letterlijk',
      q: { nl: 'Waarom gingen de bewoners van La Gomera fluiten?',
           en: 'Why did the people of La Gomera start whistling?' },
      options: [
        { nl: 'Omdat roepen niet ver genoeg draagt over de diepe dalen',
          en: 'Because shouting does not carry far enough across the deep valleys' },
        { nl: 'Omdat ze geen Spaans spraken', en: 'Because they did not speak Spanish' },
        { nl: 'Omdat ze het leuk vonden op school', en: 'Because they enjoyed it at school' },
        { nl: 'Omdat de telefoon kapot was', en: 'Because the telephone was broken' }
      ], answer: 0,
      explain: { nl: 'Alinea 1 en 2: lopen duurde uren en roepen had geen zin, fluiten draagt drie kilometer.',
                 en: 'Paragraphs 1 and 2: walking took hours and shouting was useless; whistling carries three kilometres.' } },
    { id: 'q2', type: 'tf', skill: 'gevolgtrekking',
      q: { nl: 'Silbo Gomero is een geheimtaal met afgesproken signalen.',
           en: 'Silbo Gomero is a secret code with agreed signals.' },
      answer: false,
      explain: { nl: 'Alinea 3 zegt juist dat het echt Spaans is, gefloten in plaats van gesproken.',
                 en: 'Paragraph 3 says it is really Spanish, whistled instead of spoken.' } },
    { id: 'q3', type: 'mc', skill: 'gevolgtrekking',
      q: { nl: 'Waarom raakte het fluiten in de jaren zestig uit de mode?',
           en: 'Why did the whistling fall out of use in the sixties?' },
      options: [
        { nl: 'Door de telefoon en betere wegen was het niet meer nodig',
          en: 'The telephone and better roads made it unnecessary' },
        { nl: 'Het was verboden op school', en: 'It was banned at school' },
        { nl: 'De bergen werden afgegraven', en: 'The mountains were dug away' },
        { nl: 'Niemand kon het meer leren', en: 'Nobody could learn it any more' }
      ], answer: 0,
      explain: { nl: 'Alinea 4 noemt precies die twee oorzaken.',
                 en: 'Paragraph 4 names exactly those two causes.' } },
    { id: 'q4', type: 'match', skill: 'woordenschat',
      q: { nl: 'Koppel elk woord aan de betekenis.', en: 'Match each word to its meaning.' },
      pairs: [
        { word: { nl: 'klinkers', en: 'vowels' }, meaning: { nl: 'a, e, i, o en u', en: 'a, e, i, o and u' } },
        { word: { nl: 'medeklinkers', en: 'consonants' }, meaning: { nl: 'alle andere letters', en: 'all the other letters' } },
        { word: { nl: 'silbar', en: 'silbar' }, meaning: { nl: 'het Spaanse woord voor fluiten', en: 'the Spanish word for whistling' } }
      ],
      explain: { nl: 'Alle drie de woorden staan in alinea 2 en 3.', en: 'All three words appear in paragraphs 2 and 3.' } },
    { id: 'q5', type: 'mc', skill: 'letterlijk',
      q: { nl: 'Wat gebeurde er in 1999 op La Gomera?', en: 'What happened on La Gomera in 1999?' },
      options: [
        { nl: 'Silbo werd een verplicht vak op de basisschool', en: 'Silbo became a compulsory primary school subject' },
        { nl: 'De Verenigde Naties zette de taal op een lijst', en: 'The United Nations put the language on a list' },
        { nl: 'De eerste telefoon kwam op het eiland', en: 'The first telephone came to the island' },
        { nl: 'De laatste fluiter overleed', en: 'The last whistler died' }
      ], answer: 0,
      explain: { nl: 'Alinea 5: in 1999 het schoolvak, in 2009 pas de lijst van de VN.',
                 en: 'Paragraph 5: the school subject in 1999, the UN list only in 2009.' } },
    { id: 'q6', type: 'mc', skill: 'hoofdgedachte',
      q: { nl: 'Wat is de hoofdgedachte van deze tekst?', en: 'What is the main idea of this text?' },
      options: [
        { nl: 'Een gefloten taal ontstond uit noodzaak, verdween bijna, en wordt nu op school in leven gehouden',
          en: 'A whistled language grew out of necessity, nearly vanished, and is now kept alive at school' },
        { nl: 'Op La Gomera staan diepe dalen', en: 'La Gomera has deep valleys' },
        { nl: 'Spaans is een moeilijke taal', en: 'Spanish is a difficult language' },
        { nl: 'Geiten moeten elke dag gehaald worden', en: 'Goats have to be fetched every day' }
      ], answer: 0,
      explain: { nl: 'De alinea’s lopen van ontstaan naar verval naar redding.',
                 en: 'The paragraphs run from origin to decline to rescue.' } }
  ]
},

{
  id: 'wereld-3', topic: 'wereld', level: 3, emoji: '⏰', scene: 'world',
  title: { nl: 'Waarom heeft de wereld tijdzones?', en: 'Why does the world have time zones?' },
  text: {
    nl: [
      "Tot halverwege de negentiende eeuw had bijna elke stad zijn eigen tijd. Je keek naar de zon: stond hij op zijn hoogst, dan was het twaalf uur. In Amsterdam gebeurde dat een paar minuten eerder dan in Groningen, en niemand had daar last van. Je reisde immers met de trekschuit.",
      "Met de trein veranderde dat. Een spoorboekje werkte niet meer als elk station een andere klok had. In Engeland, waar de treinen het eerst reden, spraken de spoorwegen daarom één tijd af voor het hele land: de tijd van Greenwich, bij Londen. Klokken kregen soms twee wijzers voor de minuten, eentje voor de stadstijd en eentje voor de spoortijd.",
      "In 1884 kwamen vertegenwoordigers van zesentwintig landen in Washington bijeen. Ze verdeelden de aarde in vierentwintig schijven van elk vijftien graden, want de aarde draait in vierentwintig uur helemaal rond. Als beginlijn kozen ze de lijn door Greenwich, vooral omdat de meeste zeekaarten die al gebruikten. Frankrijk stemde niet mee en hield nog tot 1911 vast aan de tijd van Parijs.",
      "Op de kaart lijken de zones keurige stroken, maar in het echt buigen ze alle kanten op. Landen willen liever niet dat er midden door een stad een grens loopt. China, dat vijf zones breed is, gebruikt er maar één: in het westen komt de zon daardoor pas rond tien uur op. Nepal koos een zone van een kwartier naast die van India, precies om te laten zien dat het een eigen land is.",
      "Sinds het internet lijkt het soms weer alsof we terug zijn bij de stadstijden. Een klas in Nederland heeft online les met een leraar in Canada, en iemand moet vroeg opstaan. Sommige mensen stellen daarom voor om de tijdzones af te schaffen en overal dezelfde klok te gebruiken.",
      "Waarschijnlijk gebeurt dat nooit. Want de tijd op je klok mag dan een afspraak zijn, je lichaam luistert vooral naar de zon."
    ],
    en: [
      "Until the middle of the nineteenth century almost every town had its own time. You looked at the sun: when it stood at its highest, it was twelve o’clock. In Amsterdam that happened a few minutes earlier than in Groningen, and nobody minded. After all, you travelled by canal barge.",
      "The train changed that. A timetable no longer worked if every station had a different clock. In England, where the trains ran first, the railways therefore agreed one time for the whole country: the time of Greenwich, near London. Clocks sometimes got two minute hands, one for town time and one for railway time.",
      "In 1884 representatives of twenty-six countries met in Washington. They divided the earth into twenty-four slices of fifteen degrees each, because the earth turns right round in twenty-four hours. As the starting line they chose the line through Greenwich, mainly because most sea charts already used it. France did not vote and stuck to the time of Paris until 1911.",
      "On the map the zones look like tidy strips, but in reality they bend in all directions. Countries would rather not have a border running through the middle of a city. China, which is five zones wide, uses only one: in the west the sun therefore rises only at about ten o’clock. Nepal chose a zone a quarter of an hour away from India’s, precisely to show that it is a country of its own.",
      "Since the internet it sometimes feels as if we are back with town times. A class in the Netherlands has an online lesson with a teacher in Canada, and somebody has to get up early. Some people therefore suggest abolishing time zones and using the same clock everywhere.",
      "That will probably never happen. Because the time on your clock may be an agreement, but your body mostly listens to the sun."
    ]
  },
  words: [
    { nl: 'trekschuit', en: 'canal barge', defNl: 'een boot die vroeger door paarden langs het water werd getrokken', defEn: 'a boat once pulled along the water by horses' },
    { nl: 'vertegenwoordigers', en: 'representatives', defNl: 'mensen die namens hun land ergens naartoe gaan', defEn: 'people who go somewhere on behalf of their country' },
    { nl: 'afschaffen', en: 'to abolish', defNl: 'ergens definitief mee stoppen', defEn: 'to stop something for good' }
  ],
  questions: [
    { id: 'q1', type: 'mc', skill: 'gevolgtrekking',
      q: { nl: 'Waarom werd één tijd voor een heel land opeens nodig?',
           en: 'Why did one time for a whole country suddenly become necessary?' },
      options: [
        { nl: 'Omdat een spoorboekje niet werkt als elk station een andere klok heeft',
          en: 'Because a timetable does not work if every station has a different clock' },
        { nl: 'Omdat de zon anders ging schijnen', en: 'Because the sun began to shine differently' },
        { nl: 'Omdat mensen geen klok meer konden lezen', en: 'Because people could no longer read a clock' },
        { nl: 'Omdat Frankrijk dat eiste', en: 'Because France demanded it' }
      ], answer: 0,
      explain: { nl: 'Alinea 2 noemt precies dat probleem van de trein.',
                 en: 'Paragraph 2 names exactly that problem with the train.' } },
    { id: 'q2', type: 'mc', skill: 'letterlijk',
      q: { nl: 'Waarom werd Greenwich als beginlijn gekozen?', en: 'Why was Greenwich chosen as the starting line?' },
      options: [
        { nl: 'Omdat de meeste zeekaarten die lijn al gebruikten', en: 'Because most sea charts already used that line' },
        { nl: 'Omdat Engeland de vergadering organiseerde', en: 'Because England organised the meeting' },
        { nl: 'Omdat Greenwich precies in het midden van de wereld ligt', en: 'Because Greenwich lies exactly in the middle of the world' },
        { nl: 'Omdat Frankrijk het voorstelde', en: 'Because France proposed it' }
      ], answer: 0,
      explain: { nl: 'Alinea 3 geeft die reden: het stond al op de meeste zeekaarten.',
                 en: 'Paragraph 3 gives that reason: it was already on most sea charts.' } },
    { id: 'q3', type: 'mc', skill: 'verwijswoorden',
      q: { nl: '"Frankrijk stemde niet mee en hield daar nog tot 1911 aan vast." Waaraan hield Frankrijk vast?',
           en: '"France did not vote and stuck to it until 1911." What did France stick to?' },
      options: [
        { nl: 'Aan de tijd van Parijs', en: 'To the time of Paris' },
        { nl: 'Aan de tijd van Greenwich', en: 'To the time of Greenwich' },
        { nl: 'Aan vierentwintig zones', en: 'To twenty-four zones' },
        { nl: 'Aan de stadstijden per dorp', en: 'To town times per village' }
      ], answer: 0,
      explain: { nl: 'De zin zelf noemt het: Frankrijk hield vast aan de tijd van Parijs.',
                 en: 'The sentence itself says it: France stuck to the time of Paris.' } },
    { id: 'q4', type: 'multi', skill: 'letterlijk',
      q: { nl: 'Welke twee voorbeelden geeft de tekst van landen die hun zone aanpassen? Kies er 2.',
           en: 'Which two examples of countries adjusting their zone does the text give? Pick 2.' },
      options: [
        { nl: 'China gebruikt maar één zone terwijl het er vijf breed is',
          en: 'China uses only one zone although it is five wide' },
        { nl: 'Nepal ligt een kwartier naast India', en: 'Nepal sits a quarter of an hour away from India' },
        { nl: 'Nederland gebruikt de tijd van Groningen', en: 'The Netherlands uses the time of Groningen' },
        { nl: 'Canada heeft geen tijdzone', en: 'Canada has no time zone' }
      ], answer: [0, 1],
      explain: { nl: 'Alinea 4 noemt China en Nepal als voorbeelden.',
                 en: 'Paragraph 4 names China and Nepal as examples.' } },
    { id: 'q5', type: 'gap', skill: 'woordenschat',
      q: { nl: 'Iets afschaffen betekent: er ___.', en: 'To abolish something means to ___.' },
      options: [
        { nl: 'definitief mee stoppen', en: 'stop it for good' },
        { nl: 'meer van maken', en: 'make more of it' },
        { nl: 'een dag mee wachten', en: 'wait a day with it' },
        { nl: 'een prijs voor vragen', en: 'charge a price for it' }
      ], answer: 0,
      explain: { nl: 'In alinea 5 stellen mensen voor om de tijdzones helemaal weg te doen.',
                 en: 'In paragraph 5 people suggest getting rid of time zones altogether.' } },
    { id: 'q6', type: 'order', skill: 'volgorde',
      q: { nl: 'Zet de gebeurtenissen op volgorde.', en: 'Put the events in order.' },
      items: [
        { nl: 'Elke stad heeft zijn eigen tijd naar de zon.', en: 'Every town has its own time by the sun.' },
        { nl: 'De Engelse spoorwegen spreken één tijd af.', en: 'The English railways agree on one time.' },
        { nl: 'Zesentwintig landen verdelen de aarde in 1884.', en: 'Twenty-six countries divide the earth in 1884.' },
        { nl: 'Frankrijk stapt in 1911 over.', en: 'France switches over in 1911.' }
      ], answer: [0, 1, 2, 3],
      explain: { nl: 'De tekst volgt precies die tijdlijn: stadstijd, spoortijd, wereldafspraak, Frankrijk.',
                 en: 'The text follows exactly that timeline.' } },
    { id: 'q7', type: 'mc', skill: 'hoofdgedachte',
      q: { nl: 'Wat is de hoofdgedachte van deze tekst?', en: 'What is the main idea of this text?' },
      options: [
        { nl: 'Tijdzones zijn een afspraak die ontstond door de trein en die landen naar eigen inzicht buigen',
          en: 'Time zones are an agreement born from the train, which countries bend as they see fit' },
        { nl: 'De zon staat in Groningen later op zijn hoogst', en: 'The sun peaks later in Groningen' },
        { nl: 'China is een heel groot land', en: 'China is a very big country' },
        { nl: 'Online lesgeven is lastig', en: 'Teaching online is difficult' }
      ], answer: 0,
      explain: { nl: 'Ontstaan, afspraak en aanpassing: dat is samen de kern van de tekst.',
                 en: 'Origin, agreement and adjustment together form the core.' } }
  ]
},

{
  id: 'wereld-4', topic: 'wereld', level: 4, emoji: '🧂', scene: 'world',
  title: { nl: 'Het witte goud van de woestijn', en: 'The white gold of the desert' },
  text: {
    nl: [
      "Midden in de Sahara, in het noorden van Mali, ligt een plaats waar bijna niemand woont maar waar al duizend jaar gewerkt wordt. Ze heet Taoudenni. Er is geen boom, geen rivier en geen schaduw. Wat er wel is, ligt onder de grond: zout.",
      "Miljoenen jaren geleden lag hier een zee. Toen die opdroogde, bleef een dikke laag zout achter, nu bedekt door woestijnzand. Mannen graven met bijl en breekijzer rechthoekige platen los, ongeveer een meter lang. Elke plaat weegt zo'n dertig kilo.",
      "Waarom zoveel moeite voor zout? In Europa vergeten we snel hoe kostbaar het was. Zonder koelkast is zout de enige manier om vlees en vis maandenlang goed te houden. En in een heet land verlies je zout door zweten; zonder aanvulling word je ziek. Eeuwenlang was zout in West-Afrika daarom net zoveel waard als goud, soms zelfs meer.",
      "Vanuit Taoudenni gingen de platen op kamelen naar Timboektoe, ruim zevenhonderd kilometer verderop. Zo'n karavaan heette een azalai. Duizenden kamelen liepen achter elkaar, twee of drie weken lang, met een gids die de weg wist zonder kaart. Hij las de duinen, de sterren en de kleur van het zand.",
      "Ondertussen is er veel veranderd. Vrachtwagens doen dezelfde reis in twee dagen, dus de grote karavanen zijn bijna verdwenen. Toch rijden ze nog, want een vrachtwagen zakt weg in het mulle zand waar een kameel gewoon doorheen loopt. Waar de weg het zwaarst is, wint het oudste vervoermiddel nog steeds.",
      "In Timboektoe worden de platen op de markt gewogen en gebroken. Een deel gaat het land in, een deel wordt vermalen tot keukenzout. En op de breukvlakken zie je, als je goed kijkt, de streepjes van die oude zee: laagjes die zijn afgezet toen er in de Sahara nog water stond."
    ],
    en: [
      "In the middle of the Sahara, in the north of Mali, lies a place where almost nobody lives but where people have worked for a thousand years. It is called Taoudenni. There is no tree, no river and no shade. What there is lies underground: salt.",
      "Millions of years ago a sea lay here. When it dried up, a thick layer of salt was left behind, now covered by desert sand. Men dig out rectangular slabs with an axe and a crowbar, about a metre long. Each slab weighs some thirty kilos.",
      "Why so much trouble for salt? In Europe we quickly forget how precious it was. Without a fridge, salt is the only way to keep meat and fish good for months. And in a hot country you lose salt through sweating; without topping it up you fall ill. For centuries salt in West Africa was therefore worth as much as gold, sometimes more.",
      "From Taoudenni the slabs went by camel to Timbuktu, more than seven hundred kilometres away. Such a caravan was called an azalai. Thousands of camels walked one behind the other for two or three weeks, with a guide who knew the way without a map. He read the dunes, the stars and the colour of the sand.",
      "Much has changed in the meantime. Lorries make the same journey in two days, so the great caravans have almost disappeared. Yet they still run, because a lorry sinks into the soft sand that a camel simply walks through. Where the road is hardest, the oldest means of transport still wins.",
      "In Timbuktu the slabs are weighed and broken on the market. Part goes inland, part is ground into table salt. And on the broken faces you can see, if you look closely, the stripes of that ancient sea: layers laid down when there was still water in the Sahara."
    ]
  },
  words: [
    { nl: 'karavaan', en: 'caravan', defNl: 'een lange rij reizende dieren en mensen met handelswaar', defEn: 'a long line of travelling animals and people carrying goods' },
    { nl: 'mul zand', en: 'soft, loose sand', defNl: 'los zand waar je voet in wegzakt', defEn: 'loose sand your foot sinks into' },
    { nl: 'breukvlak', en: 'broken surface', defNl: 'het vlak dat je ziet als iets doormidden breekt', defEn: 'the face you see when something breaks in two' }
  ],
  questions: [
    { id: 'q1', type: 'mc', skill: 'letterlijk',
      q: { nl: 'Hoe zwaar is één zoutplaat uit Taoudenni?', en: 'How heavy is one salt slab from Taoudenni?' },
      options: [
        { nl: 'Ongeveer dertig kilo', en: 'About thirty kilos' },
        { nl: 'Ongeveer drie kilo', en: 'About three kilos' },
        { nl: 'Ongeveer honderd kilo', en: 'About a hundred kilos' },
        { nl: 'Dat staat niet in de tekst', en: 'The text does not say' }
      ], answer: 0,
      explain: { nl: 'Alinea 2: elke plaat weegt zo’n dertig kilo.', en: 'Paragraph 2: each slab weighs some thirty kilos.' } },
    { id: 'q2', type: 'multi', skill: 'gevolgtrekking',
      q: { nl: 'Welke twee redenen geeft de tekst waarom zout zo kostbaar was? Kies er 2.',
           en: 'Which two reasons does the text give for salt being so precious? Pick 2.' },
      options: [
        { nl: 'Zonder koelkast houd je vlees en vis alleen goed met zout',
          en: 'Without a fridge, salt is the only way to keep meat and fish' },
        { nl: 'In de hitte verlies je zout door zweten', en: 'In the heat you lose salt through sweating' },
        { nl: 'Zout is mooi wit van kleur', en: 'Salt is a beautiful white colour' },
        { nl: 'Zout is licht om te dragen', en: 'Salt is light to carry' }
      ], answer: [0, 1],
      explain: { nl: 'Alinea 3 noemt precies die twee: bewaren en aanvullen.',
                 en: 'Paragraph 3 names exactly those two: preserving and replacing.' } },
    { id: 'q3', type: 'mc', skill: 'gevolgtrekking',
      q: { nl: 'Waarom rijden er nog steeds kamelen, ook al gaan vrachtwagens sneller?',
           en: 'Why do camels still travel, even though lorries are faster?' },
      options: [
        { nl: 'Omdat een vrachtwagen wegzakt in mul zand en een kameel niet',
          en: 'Because a lorry sinks into soft sand and a camel does not' },
        { nl: 'Omdat kamelen goedkoper eten', en: 'Because camels eat more cheaply' },
        { nl: 'Omdat vrachtwagens verboden zijn in Mali', en: 'Because lorries are banned in Mali' },
        { nl: 'Omdat de gidsen geen rijbewijs hebben', en: 'Because the guides have no driving licence' }
      ], answer: 0,
      explain: { nl: 'Alinea 5: waar de weg het zwaarst is, wint het oudste vervoermiddel.',
                 en: 'Paragraph 5: where the road is hardest, the oldest means of transport wins.' } },
    { id: 'q4', type: 'mc', skill: 'verwijswoorden',
      q: { nl: '"Wat er wel is, ligt onder de grond: zout." Waar slaat "er" op?',
           en: '"What there is lies underground: salt." What does "there" point to?' },
      options: [
        { nl: 'Op Taoudenni, midden in de Sahara', en: 'To Taoudenni, in the middle of the Sahara' },
        { nl: 'Op Timboektoe', en: 'To Timbuktu' },
        { nl: 'Op Europa', en: 'To Europe' },
        { nl: 'Op de markt', en: 'To the market' }
      ], answer: 0,
      explain: { nl: 'De alinea beschrijft Taoudenni: geen boom, geen rivier, geen schaduw.',
                 en: 'The paragraph describes Taoudenni: no tree, no river, no shade.' } },
    { id: 'q5', type: 'order', skill: 'volgorde',
      q: { nl: 'Zet de reis van het zout op volgorde.', en: 'Put the salt’s journey in order.' },
      items: [
        { nl: 'Een oude zee droogt op en laat een laag zout achter.', en: 'An ancient sea dries up and leaves a layer of salt.' },
        { nl: 'Mannen hakken platen los met bijl en breekijzer.', en: 'Men cut slabs loose with axe and crowbar.' },
        { nl: 'Kamelen dragen de platen naar Timboektoe.', en: 'Camels carry the slabs to Timbuktu.' },
        { nl: 'Op de markt worden de platen gewogen en gebroken.', en: 'On the market the slabs are weighed and broken.' }
      ], answer: [0, 1, 2, 3],
      explain: { nl: 'De tekst volgt die volgorde van alinea 2 tot alinea 6.',
                 en: 'The text follows that order from paragraph 2 to paragraph 6.' } },
    { id: 'q6', type: 'mc', skill: 'structuur',
      q: { nl: 'Alinea 3 begint met de vraag "Waarom zoveel moeite voor zout?". Wat doet die vraag?',
           en: 'Paragraph 3 opens with "Why so much trouble for salt?". What does that question do?' },
      options: [
        { nl: 'Ze leidt de uitleg in over de waarde van zout', en: 'It introduces the explanation of the value of salt' },
        { nl: 'Ze geeft de mening van de gids', en: 'It gives the guide’s opinion' },
        { nl: 'Ze vat de hele tekst samen', en: 'It summarises the whole text' },
        { nl: 'Ze vraagt de lezer om een antwoord op te zoeken', en: 'It asks the reader to look up an answer' }
      ], answer: 0,
      explain: { nl: 'Na de vraag volgen de redenen. Zo’n vraag is een wegwijzer in de tekst.',
                 en: 'The reasons follow the question: it is a signpost in the text.' } },
    { id: 'q7', type: 'gap', skill: 'woordenschat',
      q: { nl: 'Een karavaan is ___.', en: 'A caravan is ___.' },
      options: [
        { nl: 'een lange rij reizende dieren en mensen met handelswaar',
          en: 'a long line of travelling animals and people with goods' },
        { nl: 'een plaat zout van een meter lang', en: 'a slab of salt a metre long' },
        { nl: 'een markt in Timboektoe', en: 'a market in Timbuktu' },
        { nl: 'een gids die de sterren leest', en: 'a guide who reads the stars' }
      ], answer: 0,
      explain: { nl: 'Alinea 4: duizenden kamelen achter elkaar, met een gids: dat is een azalai, een karavaan.',
                 en: 'Paragraph 4: thousands of camels in a line with a guide: that is an azalai, a caravan.' } },
    { id: 'q8', type: 'mc', skill: 'hoofdgedachte',
      q: { nl: 'Wat is de hoofdgedachte van de tekst?', en: 'What is the main idea of the text?' },
      options: [
        { nl: 'Zout uit de Sahara was eeuwenlang goud waard en wordt nog steeds op een heel oude manier gehaald',
          en: 'Salt from the Sahara was worth gold for centuries and is still fetched in a very old way' },
        { nl: 'In Mali is het erg heet', en: 'It is very hot in Mali' },
        { nl: 'Kamelen zijn sterke dieren', en: 'Camels are strong animals' },
        { nl: 'Vrachtwagens zijn sneller dan dieren', en: 'Lorries are faster than animals' }
      ], answer: 0,
      explain: { nl: 'De alinea’s gaan over de waarde van het zout en over de manier waarop het nog altijd vervoerd wordt.',
                 en: 'The paragraphs are about the value of the salt and how it is still transported.' } }
  ]
},

{
  id: 'wereld-5', topic: 'wereld', level: 5, emoji: '💬', scene: 'world',
  title: { nl: 'Elke twee weken verdwijnt er een taal', en: 'Every two weeks a language disappears' },
  text: {
    nl: [
      "Op aarde worden ongeveer zevenduizend talen gesproken. Taalkundigen schatten dat ruwweg de helft daarvan deze eeuw zal verdwijnen. Gemiddeld sterft er elke twee weken een laatste spreker. Als die persoon doodgaat, verdwijnt er geen woordenboek maar een manier van denken.",
      "Wat er precies verloren gaat, is moeilijk uit te leggen aan iemand die maar één of twee talen kent. Neem het Guugu Yimithirr, een taal in het noordoosten van Australië. Daarin bestaan links en rechts niet. Sprekers zeggen: \"Er zit een mier op je zuidwesterbeen.\" Om zo te kunnen praten moet je altijd weten waar het noorden is, en dat kunnen ze ook, binnen in een gebouw, zonder ramen.",
      "Of neem talen van vissersvolken met tientallen woorden voor toestanden van de zee waar wij alleen \"golven\" voor hebben. In die woorden zit kennis van eeuwen: welke stroming gevaarlijk is, wanneer een school vis aankomt. Verdwijnt de taal, dan verdwijnt die kennis meestal mee.",
      "Waarom sterven talen uit? Vaak niet door een ramp, maar door een optelsom van kleine keuzes. Ouders willen dat hun kind het verder schopt, en het onderwijs, de baan en de televisie zijn in de grote taal. Dus spreken ze die thuis ook. De kinderen verstaan de oude taal nog wel, maar antwoorden in de nieuwe. Eén generatie later is het over.",
      "Soms ging het minder vrijwillig. In Australië, Canada en Noorwegen werden kinderen tot ver in de twintigste eeuw op internaten gestraft als ze hun eigen taal spraken. Die schade werkt tot vandaag door, en dat weten de betrokken landen inmiddels ook.",
      "Toch is het niet alleen somber. Het Maori in Nieuw-Zeeland was in de jaren tachtig bijna verdwenen. Daarna kwamen er taalnesten: kleuterscholen waar alleen Maori gesproken wordt, met grootouders als leraar. Nu groeit het aantal sprekers weer. Het Hebreeuws werd zelfs bijna vanaf nul opnieuw een dagelijkse taal.",
      "Wat blijkt uit die voorbeelden? Niet dat een taal te redden is met een woordenboek of een app. Een taal blijft alleen leven als kinderen hem horen van mensen die van hen houden, in gewone zinnen, over gewone dingen. Redden begint dus niet in een bibliotheek, maar aan een keukentafel."
    ],
    en: [
      "About seven thousand languages are spoken on earth. Linguists estimate that roughly half of them will disappear this century. On average a last speaker dies every two weeks. When that person dies, it is not a dictionary that disappears but a way of thinking.",
      "What exactly is lost is hard to explain to someone who knows only one or two languages. Take Guugu Yimithirr, a language in north-east Australia. In it, left and right do not exist. Speakers say: \"There is an ant on your south-west leg.\" To talk like that you must always know where north is, and they can, inside a building, with no windows.",
      "Or take languages of fishing peoples with dozens of words for states of the sea for which we only have \"waves\". Those words hold centuries of knowledge: which current is dangerous, when a shoal of fish arrives. If the language goes, that knowledge usually goes with it.",
      "Why do languages die out? Often not through a disaster, but through a sum of small choices. Parents want their child to get on, and school, work and television are in the big language. So they speak it at home too. The children still understand the old language, but answer in the new one. One generation later it is over.",
      "Sometimes it was less voluntary. In Australia, Canada and Norway, children were punished in boarding schools well into the twentieth century for speaking their own language. That damage still works through today, and the countries involved now know it.",
      "Yet it is not all gloom. Maori in New Zealand had almost vanished in the eighties. Then came language nests: nursery schools where only Maori is spoken, with grandparents as teachers. Now the number of speakers is growing again. Hebrew even became an everyday language again almost from nothing.",
      "What do those examples show? Not that a language can be saved with a dictionary or an app. A language only stays alive if children hear it from people who love them, in ordinary sentences, about ordinary things. So saving one does not begin in a library, but at a kitchen table."
    ]
  },
  words: [
    { nl: 'taalkundige', en: 'linguist', defNl: 'iemand die talen onderzoekt', defEn: 'someone who studies languages' },
    { nl: 'generatie', en: 'generation', defNl: 'alle mensen die ongeveer in dezelfde tijd geboren zijn', defEn: 'all the people born at about the same time' },
    { nl: 'internaat', en: 'boarding school', defNl: 'een school waar kinderen ook slapen, ver van huis', defEn: 'a school where children also sleep, far from home' }
  ],
  questions: [
    { id: 'q1', type: 'mc', skill: 'letterlijk',
      q: { nl: 'Hoeveel talen worden er op aarde gesproken, volgens de tekst?',
           en: 'How many languages are spoken on earth, according to the text?' },
      options: [
        { nl: 'Ongeveer zevenduizend', en: 'About seven thousand' },
        { nl: 'Ongeveer zevenhonderd', en: 'About seven hundred' },
        { nl: 'Ongeveer zeventigduizend', en: 'About seventy thousand' },
        { nl: 'Precies de helft van vroeger', en: 'Exactly half of what there used to be' }
      ], answer: 0,
      explain: { nl: 'De eerste zin noemt ongeveer zevenduizend talen.',
                 en: 'The first sentence names about seven thousand languages.' } },
    { id: 'q2', type: 'mc', skill: 'gevolgtrekking',
      q: { nl: 'Waarom noemt de schrijver het Guugu Yimithirr als voorbeeld?',
           en: 'Why does the writer use Guugu Yimithirr as an example?' },
      options: [
        { nl: 'Om te laten zien dat een taal een andere manier van denken meebrengt',
          en: 'To show that a language brings a different way of thinking' },
        { nl: 'Omdat het de oudste taal ter wereld is', en: 'Because it is the oldest language in the world' },
        { nl: 'Omdat het de moeilijkste taal is om te leren', en: 'Because it is the hardest language to learn' },
        { nl: 'Omdat er nog maar één spreker is', en: 'Because there is only one speaker left' }
      ], answer: 0,
      explain: { nl: 'Alinea 1 eindigt met "een manier van denken", en alinea 2 geeft daar het bewijs bij.',
                 en: 'Paragraph 1 ends with "a way of thinking", and paragraph 2 supplies the proof.' } },
    { id: 'q3', type: 'sort', skill: 'feitmening',
      q: { nl: 'Feit of mening? Zet elke zin in de goede groep.',
           en: 'Fact or opinion? Put every sentence in the right group.' },
      bins: [{ nl: 'Feit', en: 'Fact' }, { nl: 'Mening', en: 'Opinion' }],
      items: [
        { nl: 'In het Guugu Yimithirr bestaan links en rechts niet.',
          en: 'In Guugu Yimithirr left and right do not exist.', bin: 0 },
        { nl: 'Redden begint niet in een bibliotheek maar aan een keukentafel.',
          en: 'Saving a language does not begin in a library but at a kitchen table.', bin: 1 },
        { nl: 'In Nieuw-Zeeland groeit het aantal sprekers van het Maori weer.',
          en: 'In New Zealand the number of Maori speakers is growing again.', bin: 0 },
        { nl: 'Het is niet alleen somber.', en: 'It is not all gloom.', bin: 1 }
      ],
      explain: { nl: 'Hoe een taal in elkaar zit en hoeveel sprekers er zijn, kun je vaststellen. De twee andere zinnen zijn oordelen van de schrijver.',
                 en: 'How a language works and how many speakers it has can be established. The other two are the writer’s judgements.' } },
    { id: 'q4', type: 'mc', skill: 'verwijswoorden',
      q: { nl: '"Verdwijnt de taal, dan verdwijnt die kennis meestal mee." Welke kennis?',
           en: '"If the language goes, that knowledge usually goes with it." Which knowledge?' },
      options: [
        { nl: 'De kennis over stromingen en vis die in de zeewoorden zit',
          en: 'The knowledge of currents and fish held in the sea words' },
        { nl: 'De kennis van waar het noorden is', en: 'The knowledge of where north is' },
        { nl: 'De kennis van taalkundigen', en: 'The knowledge of linguists' },
        { nl: 'De kennis die op internaten werd geleerd', en: 'The knowledge taught in boarding schools' }
      ], answer: 0,
      explain: { nl: 'De zin ervoor gaat over de tientallen woorden voor de zee en wat erin zit.',
                 en: 'The sentence before is about the dozens of words for the sea and what they hold.' } },
    { id: 'q5', type: 'mc', skill: 'structuur',
      q: { nl: 'Alinea 6 begint met "Toch is het niet alleen somber." Wat verandert er in de tekst?',
           en: 'Paragraph 6 begins "Yet it is not all gloom." What changes in the text?' },
      options: [
        { nl: 'Van de oorzaken van verlies naar voorbeelden van herstel',
          en: 'From the causes of loss to examples of recovery' },
        { nl: 'Van Australië naar Canada', en: 'From Australia to Canada' },
        { nl: 'Van feiten naar cijfers', en: 'From facts to figures' },
        { nl: 'Van de inleiding naar het eerste voorbeeld', en: 'From the introduction to the first example' }
      ], answer: 0,
      explain: { nl: '"Toch" kondigt de omslag aan: nu komen Maori en Hebreeuws als hoopvolle gevallen.',
                 en: '"Yet" announces the turn: Maori and Hebrew follow as hopeful cases.' } },
    { id: 'q6', type: 'multi', skill: 'gevolgtrekking',
      q: { nl: 'Welke twee oorzaken van taalverlies noemt de tekst? Kies er 2.',
           en: 'Which two causes of language loss does the text name? Pick 2.' },
      options: [
        { nl: 'Ouders kiezen thuis voor de grote taal van school en werk',
          en: 'Parents choose the big language of school and work at home' },
        { nl: 'Kinderen werden op internaten gestraft voor hun eigen taal',
          en: 'Children were punished in boarding schools for their own language' },
        { nl: 'Woordenboeken zijn te duur', en: 'Dictionaries are too expensive' },
        { nl: 'Talen met veel woorden zijn te moeilijk', en: 'Languages with many words are too hard' }
      ], answer: [0, 1],
      explain: { nl: 'Alinea 4 noemt de vrijwillige optelsom, alinea 5 de gedwongen kant.',
                 en: 'Paragraph 4 names the voluntary sum of choices, paragraph 5 the forced side.' } },
    { id: 'q7', type: 'mc', skill: 'doel',
      q: { nl: 'Wat wil de schrijver bereiken?', en: 'What does the writer want to achieve?' },
      options: [
        { nl: 'Laten zien wat er verloren gaat én dat er iets aan te doen is',
          en: 'Show what is lost and that something can be done about it' },
        { nl: 'Ouders verwijten dat ze de verkeerde taal spreken', en: 'Blame parents for speaking the wrong language' },
        { nl: 'Uitleggen hoe je een woordenboek maakt', en: 'Explain how to make a dictionary' },
        { nl: 'Bewijzen dat het Maori de mooiste taal is', en: 'Prove that Maori is the finest language' }
      ], answer: 0,
      explain: { nl: 'De tekst beschrijft het verlies én geeft geslaagde voorbeelden, en eindigt met wat werkt.',
                 en: 'The text describes the loss, gives successful examples and ends with what works.' } },
    { id: 'q8', type: 'mc', skill: 'samenvatten',
      q: { nl: 'Welke samenvatting past het beste?', en: 'Which summary fits best?' },
      options: [
        { nl: 'Met elke taal die verdwijnt gaat kennis en een manier van denken verloren; dat komt door keuzes en dwang, maar voorbeelden als het Maori laten zien dat herstel mogelijk is als kinderen de taal thuis horen.',
          en: 'With every language that disappears, knowledge and a way of thinking are lost; that is caused by choices and coercion, but examples like Maori show recovery is possible when children hear the language at home.' },
        { nl: 'In het Guugu Yimithirr zeggen mensen zuidwest in plaats van links.',
          en: 'In Guugu Yimithirr people say south-west instead of left.' },
        { nl: 'Er zijn ongeveer zevenduizend talen op aarde.', en: 'There are about seven thousand languages on earth.' },
        { nl: 'Grootouders zijn goede leraren.', en: 'Grandparents make good teachers.' }
      ], answer: 0,
      explain: { nl: 'Die samenvatting bevat het verlies, de oorzaken én de oplossing.',
                 en: 'That summary contains the loss, the causes and the solution.' } },
    { id: 'q9', type: 'tf', skill: 'gevolgtrekking',
      q: { nl: 'Volgens de tekst is een app of woordenboek genoeg om een taal te redden.',
           en: 'According to the text an app or dictionary is enough to save a language.' },
      answer: false,
      explain: { nl: 'De slotalinea zegt juist het tegenovergestelde: het moet aan de keukentafel gebeuren.',
                 en: 'The closing paragraph says the opposite: it has to happen at the kitchen table.' } }
  ]
}
]);
