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

addStories([
{
  id: 'wereld-6', topic: 'wereld', level: 1, emoji: '🪔', scene: 'world',
  title: { nl: 'Het feest van de lichtjes', en: 'The festival of lights' },
  text: {
    nl: [
      "Elk jaar, ergens tussen half oktober en half november, vieren miljoenen mensen het Lichtfeest. Het heet Diwali. Het feest duurt vijf dagen en is één van de belangrijkste feesten in India.",
      "Overal worden kleine olielampjes aangestoken. Zo'n lampje heet een diya en is gemaakt van klei. Er zit een beetje olie in met een lontje. Mensen zetten de diya's op vensterbanken en voor de deur.",
      "Voor het feest maken mensen zoetigheid: kleine gebakjes en snoepjes. Die worden uitgedeeld aan buren, familie en vrienden. Zelfs de buren die je bijna niet kent, krijgen een doosje lekkers.",
      "De lichtjes staan voor iets. Ze vertellen het verhaal van het licht dat wint van het donker, en het goede dat wint van het kwade. Daarom brandt elk huis vol lampjes.",
      "Overal worden de straten versierd met kleurige patronen van gekleurd zand. Zo'n patroon heet een rangoli. 's Avonds klinkt er vuurwerk en komt de hele familie samen. Het ruikt dan overal naar zoet gebak."
    ],
    en: [
      "Every year, somewhere between mid-October and mid-November, millions of people celebrate the Festival of Lights. It is called Diwali. The festival lasts five days and is one of the most important festivals in India.",
      "Small oil lamps are lit everywhere. Such a lamp is called a diya and is made of clay. It holds a little oil with a wick. People place the diyas on windowsills and in front of the door.",
      "Before the festival people make sweets: small pastries and treats. These are given out to neighbours, family and friends. Even the neighbours you barely know get a box of sweets.",
      "The little lights stand for something. They tell the story of light winning over darkness, and good winning over evil. That is why every house is full of burning lamps.",
      "Streets everywhere are decorated with colourful patterns made of coloured sand. Such a pattern is called a rangoli. In the evening there are fireworks and the whole family gets together. Everywhere it smells of sweet pastries."
    ]
  },
  words: [
    { nl: 'diya', en: 'diya', defNl: 'een klein lampje van klei met olie en een lontje', defEn: 'a small clay lamp with oil and a wick' },
    { nl: 'rangoli', en: 'rangoli', defNl: 'een kleurig patroon van gekleurd zand op straat', defEn: 'a colourful pattern made of coloured sand on the ground' },
    { nl: 'Lichtfeest', en: 'Festival of Lights', defNl: 'een andere naam voor het feest Diwali', defEn: 'another name for the festival of Diwali' }
  ],
  questions: [
    { id: 'q1', type: 'mc', skill: 'letterlijk',
      q: { nl: 'Hoeveel dagen duurt het Diwali-feest?', en: 'How many days does the Diwali festival last?' },
      options: [
        { nl: 'Vijf dagen', en: 'Five days' },
        { nl: 'Eén dag', en: 'One day' },
        { nl: 'Tien dagen', en: 'Ten days' },
        { nl: 'Dertig dagen', en: 'Thirty days' }
      ], answer: 0,
      explain: { nl: 'Alinea 1: "Het feest duurt vijf dagen."', en: 'Paragraph 1: "The festival lasts five days."' } },
    { id: 'q2', type: 'mc', skill: 'letterlijk',
      q: { nl: 'Waar zetten mensen de diya\'s neer?', en: 'Where do people place the diyas?' },
      options: [
        { nl: 'Op vensterbanken en voor de deur', en: 'On windowsills and in front of the door' },
        { nl: 'Onder het bed', en: 'Under the bed' },
        { nl: 'Begraven in de achtertuin', en: 'Buried in the back garden' },
        { nl: 'In de koelkast', en: 'In the fridge' }
      ], answer: 0,
      explain: { nl: 'Alinea 2: "Mensen zetten de diya\'s op vensterbanken en voor de deur."',
                 en: 'Paragraph 2: "People place the diyas on windowsills and in front of the door."' } },
    { id: 'q3', type: 'gap', skill: 'woordenschat',
      q: { nl: 'Een diya is ___.', en: 'A diya is ___.' },
      options: [
        { nl: 'een klein lampje van klei met olie en een lontje', en: 'a small clay lamp with oil and a wick' },
        { nl: 'een zoet gebakje voor de buren', en: 'a sweet pastry for the neighbours' },
        { nl: 'een kleurig patroon van zand', en: 'a colourful pattern of sand' },
        { nl: 'een feest dat één dag duurt', en: 'a festival that lasts one day' }
      ], answer: 0,
      explain: { nl: 'Alinea 2 legt uit wat een diya is: een lampje van klei met olie en een lontje.',
                 en: 'Paragraph 2 explains what a diya is: a clay lamp with oil and a wick.' } },
    { id: 'q4', type: 'order', skill: 'volgorde',
      q: { nl: 'Zet op volgorde wat er rond het feest gebeurt.', en: 'Put in order what happens around the festival.' },
      items: [
        { nl: 'Mensen steken de diya\'s aan.', en: 'People light the diyas.' },
        { nl: 'Buren en familie krijgen doosjes met zoetigheid.', en: 'Neighbours and family get boxes of sweets.' },
        { nl: 'De straten worden versierd met een rangoli.', en: 'The streets are decorated with a rangoli.' },
        { nl: '\'s Avonds klinkt er vuurwerk en komt de familie samen.', en: 'In the evening there are fireworks and the family gets together.' }
      ], answer: [0, 1, 2, 3],
      explain: { nl: 'De tekst volgt precies die volgorde: lampjes, zoetigheid, versieringen, en dan de avond.',
                 en: 'The text follows exactly that order: lamps, sweets, decorations, and then the evening.' } },
    { id: 'q5', type: 'mc', skill: 'hoofdgedachte',
      q: { nl: 'Waar gaat deze tekst vooral over?', en: 'What is this text mainly about?' },
      options: [
        { nl: 'Hoe mensen het Lichtfeest Diwali vieren', en: 'How people celebrate the Festival of Lights, Diwali' },
        { nl: 'Hoe je een diya van klei maakt', en: 'How to make a diya out of clay' },
        { nl: 'Waarom vuurwerk gevaarlijk kan zijn', en: 'Why fireworks can be dangerous' },
        { nl: 'Hoe je een rangoli tekent', en: 'How to draw a rangoli' }
      ], answer: 0,
      explain: { nl: 'Elke alinea gaat over een onderdeel van het Diwali-feest: de lampjes, de zoetigheid, de betekenis en het vieren.',
                 en: 'Every paragraph is about a part of the Diwali festival: the lamps, the sweets, the meaning and the celebration.' } }
  ]
},

{
  id: 'wereld-7', topic: 'wereld', level: 2, emoji: '🥢', scene: 'world',
  title: { nl: 'Waarom eten mensen met stokjes?', en: 'Why do people eat with chopsticks?' },
  text: {
    nl: [
      "Bij ons is het heel normaal om met mes en vork te eten. Maar in grote delen van Azië, van China tot Japan, Korea en Vietnam, eten mensen al meer dan drieduizend jaar met stokjes. Voor miljarden mensen is dat de gewoonste zaak van de wereld.",
      "Stokjes werden in China niet bedacht om te snijden, maar om te koken. Met lange stokjes kon je eten uit een hete pan of pot vissen zonder je vingers te branden. Aan tafel had je later dezelfde stokjes gewoon nodig om op te pakken wat je moeder al klein gesneden had.",
      "Dat 'klein snijden' gebeurt namelijk in de keuken, niet aan tafel. Vlees en groente worden al in hapklare stukjes gehakt voordat het gerecht wordt opgediend. Brandhout was vroeger schaars, dus kleine stukjes kookten sneller gaar. Een mes aan tafel was daardoor niet nodig, en volgens een oud verhaal vond de wijze Confucius messen aan tafel zelfs ongepast: ze deden hem denken aan een slachthuis.",
      "Rond het gebruik van stokjes bestaan strenge regels. Zet ze nooit rechtop in een kom rijst: dat lijkt te veel op de wierookstokjes die bij een begrafenis voor overledenen worden gebrand, en dat brengt ongeluk. Wijs ook nooit met je stokjes naar iemand, en trommel er niet mee op je kom. Wie deze regels kent, laat zien dat hij goede manieren heeft.",
      "In Europa ging het anders. Hier werd vlees vaak in grote stukken op tafel gezet en pas dáár gesneden, dus bleven mes en vork nodig. Geen van beide gewoontes is beter: het is vooral een andere keuze, ontstaan uit een andere manier van koken."
    ],
    en: [
      "For us it is completely normal to eat with a knife and fork. But across large parts of Asia, from China to Japan, Korea and Vietnam, people have eaten with chopsticks for more than three thousand years. For billions of people that is the most ordinary thing in the world.",
      "Chopsticks were not invented in China for cutting, but for cooking. With long sticks you could fish food out of a hot pan or pot without burning your fingers. At the table you later simply needed the same sticks to pick up what your mother had already cut small.",
      "That 'cutting small' happens in the kitchen, not at the table. Meat and vegetables are already chopped into bite-sized pieces before the dish is served. Firewood used to be scarce, so small pieces cooked done faster. A knife at the table was therefore not needed, and according to an old story the wise Confucius even found knives at the table inappropriate: they reminded him of a slaughterhouse.",
      "Strict rules surround the use of chopsticks. Never stand them upright in a bowl of rice: that looks too much like the incense sticks burned for the dead at a funeral, and that brings bad luck. Also never point your chopsticks at someone, and do not drum them on your bowl. Anyone who knows these rules shows they have good manners.",
      "In Europe it went differently. Here meat was often put on the table in large pieces and only cut there, so a knife and fork remained necessary. Neither custom is better: it is mainly a different choice, born from a different way of cooking."
    ]
  },
  words: [
    { nl: 'hapklaar', en: 'bite-sized', defNl: 'al in kleine stukjes gesneden, klaar om zo op te eten', defEn: 'already cut into small pieces, ready to eat just like that' },
    { nl: 'wierookstokjes', en: 'incense sticks', defNl: 'dunne stokjes die branden en lekker ruiken, gebruikt bij een begrafenis', defEn: 'thin sticks that burn and smell nice, used at a funeral' },
    { nl: 'schaars', en: 'scarce', defNl: 'er is niet veel van, het is moeilijk te krijgen', defEn: 'there is not much of it, it is hard to get' }
  ],
  questions: [
    { id: 'q1', type: 'mc', skill: 'letterlijk',
      q: { nl: 'Waarvoor werden stokjes in China oorspronkelijk gebruikt?', en: 'What were chopsticks originally used for in China?' },
      options: [
        { nl: 'Om mee te koken, voedsel uit een hete pan te vissen', en: 'For cooking, to fish food out of a hot pan' },
        { nl: 'Om mee te schrijven', en: 'For writing' },
        { nl: 'Om vlees mee te snijden', en: 'For cutting meat' },
        { nl: 'Om mee te vechten', en: 'For fighting' }
      ], answer: 0,
      explain: { nl: 'Alinea 2: "Stokjes werden in China niet bedacht om te snijden, maar om te koken."',
                 en: 'Paragraph 2: "Chopsticks were not invented in China for cutting, but for cooking."' } },
    { id: 'q2', type: 'mc', skill: 'letterlijk',
      q: { nl: 'Waarom hoefde er geen mes aan tafel te liggen?', en: 'Why was there no need for a knife at the table?' },
      options: [
        { nl: 'Omdat het eten al in de keuken in kleine stukjes was gesneden', en: 'Because the food had already been cut into small pieces in the kitchen' },
        { nl: 'Omdat mensen geen messen hadden', en: 'Because people had no knives' },
        { nl: 'Omdat er in Azië geen vlees werd gegeten', en: 'Because no meat was eaten in Asia' },
        { nl: 'Omdat stokjes scherper zijn dan messen', en: 'Because chopsticks are sharper than knives' }
      ], answer: 0,
      explain: { nl: 'Alinea 3: vlees en groente worden al in hapklare stukjes gehakt voordat het gerecht wordt opgediend.',
                 en: 'Paragraph 3: meat and vegetables are already chopped into bite-sized pieces before the dish is served.' } },
    { id: 'q3', type: 'mc', skill: 'gevolgtrekking',
      q: { nl: 'Waarom is het onbeleefd om je stokjes rechtop in een kom rijst te zetten?',
           en: 'Why is it rude to stand your chopsticks upright in a bowl of rice?' },
      options: [
        { nl: 'Omdat het lijkt op de wierookstokjes die bij een begrafenis worden gebrand',
          en: 'Because it looks like the incense sticks burned at a funeral' },
        { nl: 'Omdat de rijst dan koud wordt', en: 'Because the rice then gets cold' },
        { nl: 'Omdat de stokjes dan omvallen', en: 'Because the chopsticks then fall over' },
        { nl: 'Omdat het te lang duurt', en: 'Because it takes too long' }
      ], answer: 0,
      explain: { nl: 'Alinea 4 legt precies dat verband uit tussen stokjes in rijst en wierookstokjes bij een begrafenis.',
                 en: 'Paragraph 4 explains exactly that link between chopsticks in rice and incense sticks at a funeral.' } },
    { id: 'q4', type: 'match', skill: 'woordenschat',
      q: { nl: 'Koppel elk woord aan de betekenis.', en: 'Match each word to its meaning.' },
      pairs: [
        { word: { nl: 'hapklaar', en: 'bite-sized' }, meaning: { nl: 'al in kleine stukjes gesneden', en: 'already cut into small pieces' } },
        { word: { nl: 'wierookstokjes', en: 'incense sticks' }, meaning: { nl: 'stokjes die branden bij een begrafenis', en: 'sticks that burn at a funeral' } },
        { word: { nl: 'schaars', en: 'scarce' }, meaning: { nl: 'er is niet veel van', en: 'there is not much of it' } }
      ],
      explain: { nl: 'Alle drie de woorden komen uit de tekst over eetstokjes.', en: 'All three words come from the text about chopsticks.' } },
    { id: 'q5', type: 'mc', skill: 'gevolgtrekking',
      q: { nl: 'Waarom bleven mes en vork in Europa wél nodig?', en: 'Why did a knife and fork remain necessary in Europe?' },
      options: [
        { nl: 'Omdat vlees daar in grote stukken op tafel kwam en pas daar gesneden werd',
          en: 'Because meat was put on the table there in large pieces and only cut there' },
        { nl: 'Omdat Europeanen geen stokjes konden maken', en: 'Because Europeans could not make chopsticks' },
        { nl: 'Omdat vlees in Europa zachter is', en: 'Because meat is softer in Europe' },
        { nl: 'Omdat er in Europa geen keukens waren', en: 'Because there were no kitchens in Europe' }
      ], answer: 0,
      explain: { nl: 'Alinea 5: vlees werd in grote stukken op tafel gezet en pas dáár gesneden.',
                 en: 'Paragraph 5: meat was put on the table in large pieces and only cut there.' } },
    { id: 'q6', type: 'mc', skill: 'hoofdgedachte',
      q: { nl: 'Wat is de hoofdgedachte van deze tekst?', en: 'What is the main idea of this text?' },
      options: [
        { nl: 'Eetstokjes ontstonden uit de manier van koken in Azië en hebben eigen regels van beleefdheid',
          en: 'Chopsticks grew out of the way of cooking in Asia and have their own rules of politeness' },
        { nl: 'Mensen in Azië hebben geen messen', en: 'People in Asia have no knives' },
        { nl: 'Vlees is in Europa lekkerder dan in Azië', en: 'Meat tastes better in Europe than in Asia' },
        { nl: 'Confucius vond al het bestek onbeleefd', en: 'Confucius thought all cutlery was rude' }
      ], answer: 0,
      explain: { nl: 'De tekst gaat over het ontstaan, het gebruik, de regels en de vergelijking met Europa.',
                 en: 'The text is about the origin, the use, the rules and the comparison with Europe.' } }
  ]
},

{
  id: 'wereld-8', topic: 'wereld', level: 3, emoji: '🧱', scene: 'world',
  title: { nl: 'De langste muur ter wereld', en: 'The longest wall in the world' },
  text: {
    nl: [
      "De Chinese Muur is niet één muur, maar een heel netwerk van muren, wachttorens en forten. Het werd niet in één keer gebouwd, maar in stukken, door verschillende dynastieën, over een periode van meer dan tweeduizend jaar. Archeologen maten dat alle stukken samen, met de zijtakken meegerekend, ruim eenentwintigduizend kilometer lang zijn.",
      "Waarom bouwden Chinese keizers zoiets enorms? Vooral uit bescherming. Uit het noorden kwamen regelmatig ruiters van nomadische volken de vlaktes over, op zoek naar buit. Een muur hield hen niet altijd tegen, maar vertraagde ze wel, en gaf de keizer controle: wie er langs een poort mocht reizen en handelen, werd daar bijgehouden.",
      "Om snel te kunnen waarschuwen, stonden er om de paar honderd meter wachttorens. Zag een soldaat vijandelijke ruiters naderen, dan stak hij een vuur aan. De volgende toren zag de rook en deed hetzelfde. Zo kon een bericht in één dag honderden kilometers afleggen, sneller dan een ruiter te paard.",
      "De bekendste en best bewaarde stukken muur, van steen en baksteen, dateren uit de Ming-dynastie, zo'n zeshonderd jaar geleden. Veel oudere stukken, uit de tijd van de eerste keizer Qin Shi Huang, werden gemaakt van gestampte aarde. Daar is intussen weinig van over: die stukken zijn grotendeels weggesleten door regen en wind.",
      "Over de muur bestaat een hardnekkig verhaal: dat je hem met het blote oog vanuit de ruimte kunt zien, als enig bouwwerk van de mens. Astronauten spreken dat inmiddels tegen. De muur is smal, meestal maar een paar meter breed, en heeft ongeveer dezelfde kleur als het landschap eromheen. Een grote stad valt vanuit een baan om de aarde juist veel beter op.",
      "Tegenwoordig staat de muur op de Werelderfgoedlijst van de Unesco en komen er elk jaar miljoenen toeristen. Bij Peking zijn stukken prachtig gerestaureerd. Verderop, in afgelegen bergen, brokkelt de muur ongezien verder af, steen voor steen."
    ],
    en: [
      "The Great Wall of China is not one wall, but a whole network of walls, watchtowers and forts. It was not built all at once, but in pieces, by different dynasties, over a period of more than two thousand years. Archaeologists measured that all the pieces together, including the side branches, add up to more than twenty-one thousand kilometres.",
      "Why did Chinese emperors build something so enormous? Mainly for protection. Riders from nomadic peoples regularly came across the plains from the north, looking for plunder. A wall did not always stop them, but it did slow them down, and gave the emperor control: who was allowed to travel and trade past a gate was kept track of there.",
      "To be able to warn each other quickly, watchtowers stood every few hundred metres. If a soldier saw enemy riders approaching, he lit a fire. The next tower saw the smoke and did the same. That way a message could travel hundreds of kilometres in a single day, faster than a rider on horseback.",
      "The best-known and best-preserved sections of wall, made of stone and brick, date from the Ming dynasty, about six hundred years ago. Much older sections, from the time of the first emperor Qin Shi Huang, were made of packed earth. Little of that remains today: those sections have mostly worn away through rain and wind.",
      "A stubborn story exists about the wall: that you can see it with the naked eye from space, as the only man-made structure that can be seen. Astronauts now contradict that. The wall is narrow, usually only a few metres wide, and is roughly the same colour as the landscape around it. A large city stands out far better from orbit.",
      "Today the wall is on the Unesco World Heritage list, and millions of tourists visit every year. Near Beijing, sections have been beautifully restored. Further away, in remote mountains, the wall crumbles away unseen, stone by stone."
    ]
  },
  words: [
    { nl: 'dynastie', en: 'dynasty', defNl: 'een familie van keizers die achter elkaar aan de macht is', defEn: 'a family of emperors who rule one after another' },
    { nl: 'buit', en: 'plunder', defNl: 'spullen die je met geweld van een ander afpakt', defEn: 'things you take from someone else by force' },
    { nl: 'Werelderfgoed', en: 'World Heritage', defNl: 'een plek die de hele wereld belangrijk genoeg vindt om te beschermen', defEn: 'a place the whole world considers important enough to protect' }
  ],
  questions: [
    { id: 'q1', type: 'mc', skill: 'letterlijk',
      q: { nl: 'Hoe lang zijn alle stukken muur samen, met de zijtakken meegerekend?',
           en: 'How long are all the sections of wall together, including the side branches?' },
      options: [
        { nl: 'Ruim eenentwintigduizend kilometer', en: 'More than twenty-one thousand kilometres' },
        { nl: 'Tweeduizend kilometer', en: 'Two thousand kilometres' },
        { nl: 'Honderd kilometer', en: 'A hundred kilometres' },
        { nl: 'Zeshonderd kilometer', en: 'Six hundred kilometres' }
      ], answer: 0,
      explain: { nl: 'Alinea 1: alle stukken samen zijn ruim eenentwintigduizend kilometer lang.',
                 en: 'Paragraph 1: all the sections together are more than twenty-one thousand kilometres long.' } },
    { id: 'q2', type: 'mc', skill: 'gevolgtrekking',
      q: { nl: 'Waarom hielpen wachttorens met vuur en rook de Chinese keizers?',
           en: 'Why did watchtowers with fire and smoke help the Chinese emperors?' },
      options: [
        { nl: 'Omdat een bericht daardoor razendsnel over grote afstand kon reizen',
          en: 'Because a message could then travel very fast over a great distance' },
        { nl: 'Omdat vuur de ruiters uit het noorden verjoeg', en: 'Because fire chased away the riders from the north' },
        { nl: 'Omdat de soldaten het anders koud kregen', en: 'Because the soldiers would otherwise get cold' },
        { nl: 'Omdat het licht gaf in het donker', en: 'Because it gave light in the dark' }
      ], answer: 0,
      explain: { nl: 'Alinea 3: zo kon een bericht in één dag honderden kilometers afleggen, sneller dan een ruiter.',
                 en: 'Paragraph 3: a message could travel hundreds of kilometres in a day, faster than a rider.' } },
    { id: 'q3', type: 'mc', skill: 'verwijswoorden',
      q: { nl: '"Daar is intussen weinig van over." Waar verwijst "daar" naar?',
           en: '"Little of that remains today." What does "that" point to?' },
      options: [
        { nl: 'Naar de oude stukken muur van gestampte aarde uit de tijd van Qin Shi Huang',
          en: 'To the old sections of wall made of packed earth from the time of Qin Shi Huang' },
        { nl: 'Naar de wachttorens', en: 'To the watchtowers' },
        { nl: 'Naar de stad Peking', en: 'To the city of Beijing' },
        { nl: 'Naar het verhaal over de ruimte', en: 'To the story about space' }
      ], answer: 0,
      explain: { nl: 'De zin ervoor gaat over stukken van gestampte aarde uit de tijd van Qin Shi Huang.',
                 en: 'The sentence before is about sections of packed earth from the time of Qin Shi Huang.' } },
    { id: 'q4', type: 'mc', skill: 'structuur',
      q: { nl: 'Alinea 5 begint met "Over de muur bestaat een hardnekkig verhaal." Wat doet de rest van die alinea?',
           en: 'Paragraph 5 opens with "A stubborn story exists about the wall." What does the rest of that paragraph do?' },
      options: [
        { nl: 'Ze weerlegt het verhaal met feiten van astronauten', en: 'It refutes the story with facts from astronauts' },
        { nl: 'Ze vertelt een nieuw verhaal', en: 'It tells a new story' },
        { nl: 'Ze legt uit hoe je de muur bouwt', en: 'It explains how to build the wall' },
        { nl: 'Ze somt alle keizers op', en: 'It lists all the emperors' }
      ], answer: 0,
      explain: { nl: 'Na de inleidende zin volgt de weerlegging: astronauten spreken het verhaal tegen.',
                 en: 'After the introductory sentence comes the refutation: astronauts contradict the story.' } },
    { id: 'q5', type: 'mc', skill: 'letterlijk',
      q: { nl: 'Uit welke dynastie stammen de bekendste, best bewaarde stukken muur?',
           en: 'Which dynasty do the best-known, best-preserved sections of wall come from?' },
      options: [
        { nl: 'De Ming-dynastie', en: 'The Ming dynasty' },
        { nl: 'De Qin-dynastie', en: 'The Qin dynasty' },
        { nl: 'De Han-dynastie', en: 'The Han dynasty' },
        { nl: 'De Tang-dynastie', en: 'The Tang dynasty' }
      ], answer: 0,
      explain: { nl: 'Alinea 4: de bekendste en best bewaarde stukken dateren uit de Ming-dynastie.',
                 en: 'Paragraph 4: the best-known and best-preserved sections date from the Ming dynasty.' } },
    { id: 'q6', type: 'gap', skill: 'woordenschat',
      q: { nl: 'Een dynastie is ___.', en: 'A dynasty is ___.' },
      options: [
        { nl: 'een familie van keizers die na elkaar aan de macht is', en: 'a family of emperors who rule one after another' },
        { nl: 'een leger van soldaten', en: 'an army of soldiers' },
        { nl: 'een muur van steen', en: 'a wall of stone' },
        { nl: 'een verhaal over ruimtevaart', en: 'a story about space travel' }
      ], answer: 0,
      explain: { nl: 'Alinea 1 en 4 noemen de Ming-dynastie en de Qin-dynastie: families van keizers na elkaar aan de macht.',
                 en: 'Paragraphs 1 and 4 name the Ming and Qin dynasties: families of emperors ruling one after another.' } },
    { id: 'q7', type: 'mc', skill: 'hoofdgedachte',
      q: { nl: 'Wat is de hoofdgedachte van deze tekst?', en: 'What is the main idea of this text?' },
      options: [
        { nl: 'De Chinese Muur werd eeuwenlang gebouwd voor bescherming en waarschuwing, en is minder zichtbaar vanuit de ruimte dan het verhaal wil',
          en: 'The Great Wall was built for centuries for protection and warning, and is less visible from space than the story claims' },
        { nl: 'De Chinese Muur is één ononderbroken bouwwerk', en: 'The Great Wall is a single unbroken structure' },
        { nl: 'Astronauten kunnen niets zien vanuit de ruimte', en: 'Astronauts cannot see anything from space' },
        { nl: 'Peking is de hoofdstad van China', en: 'Beijing is the capital of China' }
      ], answer: 0,
      explain: { nl: 'Alle alinea\'s gaan over het ontstaan, het doel en het weerleggen van de mythe rond de muur.',
                 en: 'All the paragraphs are about the origin, the purpose and the refutation of the myth around the wall.' } }
  ]
},

{
  id: 'wereld-9', topic: 'wereld', level: 4, emoji: '🚗', scene: 'world',
  title: { nl: 'Waarom rijden sommige landen links?', en: 'Why do some countries drive on the left?' },
  text: {
    nl: [
      "In Nederland, Duitsland en de meeste landen van de wereld rijdt het verkeer rechts. Maar in Engeland, Japan, Australië en zo'n zestig andere landen rijdt iedereen juist links. Dat verschil lijkt willekeurig, maar heeft een lange geschiedenis, die begint eeuwen voordat de auto werd uitgevonden.",
      "In de middeleeuwen reisden mensen te paard, vaak gewapend met een zwaard aan de linkerheup, handig voor een rechtshandige ruiter, die het snel met zijn rechterhand kon trekken. Reed je links op de weg, dan wees je zwaardarm naar het midden, klaar voor een tegenligger die misschien een vijand was. Bovendien steeg je makkelijker op een paard op als je zwaard links hing, zonder over je eigen wapen te struikelen.",
      "Napoleon Bonaparte veranderde dat voor een groot deel van Europa. Historici twisten over de precieze reden: sommigen zeggen dat hij zelf linkshandig was, anderen wijzen op zijn legers, die praktischer rechts marcheerden. Zeker is dat overal waar Napoleons troepen kwamen, van Frankrijk tot Duitsland, Polen en Italië, rechts rijden de nieuwe regel werd, soms letterlijk afgedwongen.",
      "Engeland werd nooit door Napoleon veroverd, en bleef daarom gewoon links rijden. Landen die buiten zijn rijk lagen, zoals Portugal en Zweden, deden dat lange tijd ook, al stapten sommige daarvan later alsnog over op rechts.",
      "In diezelfde tijd breidde het Britse Rijk zich juist uit, over de hele wereld. Overal waar de Britten een kolonie stichtten, zoals India, Australië en delen van Afrika, namen ze het linksrijden mee. Toen die landen later onafhankelijk werden, bleven de meeste gewoon links rijden: een heel land ineens laten omschakelen is duur en gevaarlijk, dus niemand begon eraan.",
      "Vandaag de dag rijdt ongeveer een derde van de wereldbevolking links, de rest rechts. Aan de grens tussen zo'n linkse en rechtse buur moet het verkeer soms letterlijk van weghelft wisselen, via een speciaal kruispunt. Het is een van de duidelijkste sporen die de geschiedenis nog elke dag op straat achterlaat."
    ],
    en: [
      "In the Netherlands, Germany and most countries in the world, traffic drives on the right. But in England, Japan, Australia and about sixty other countries, everyone drives on the left instead. That difference looks random, but it has a long history that begins centuries before the car was invented.",
      "In the Middle Ages people travelled on horseback, often armed with a sword on their left hip, handy for a right-handed rider who could draw it quickly with his right hand. If you rode on the left side of the road, your sword arm pointed towards the middle, ready for an oncoming traveller who might be an enemy. Besides, it was easier to mount a horse if your sword hung on the left, without tripping over your own weapon.",
      "Napoleon Bonaparte changed that for a large part of Europe. Historians argue about the exact reason: some say he was left-handed himself, others point to his armies, which marched more practically on the right. What is certain is that everywhere Napoleon's troops went, from France to Germany, Poland and Italy, driving on the right became the new rule, sometimes literally enforced.",
      "England was never conquered by Napoleon, and so simply kept driving on the left. Countries that lay outside his empire, such as Portugal and Sweden, did the same for a long time, although some of them later switched to the right after all.",
      "At that same time the British Empire was expanding, all over the world. Everywhere the British founded a colony, such as India, Australia and parts of Africa, they brought left-hand driving with them. When those countries later became independent, most simply kept driving on the left: switching a whole country over at once is expensive and dangerous, so nobody started on it.",
      "Today about a third of the world's population drives on the left, the rest on the right. At the border between such a left-hand and right-hand neighbour, traffic sometimes literally has to switch sides of the road, through a special crossover. It is one of the clearest traces history still leaves on the street every day."
    ]
  },
  words: [
    { nl: 'rijk', en: 'empire', defNl: 'een heel groot gebied met veel landen dat door één heerser bestuurd wordt', defEn: 'a very large territory of many lands ruled by one ruler' },
    { nl: 'kolonie', en: 'colony', defNl: 'een gebied dat door een ander land wordt bestuurd, vaak ver weg', defEn: 'a territory ruled by another country, often far away' },
    { nl: 'omschakelen', en: 'to switch over', defNl: 'in één keer overstappen van de ene manier naar de andere', defEn: 'to change from one way of doing something to another, all at once' }
  ],
  questions: [
    { id: 'q1', type: 'mc', skill: 'letterlijk',
      q: { nl: 'Hoeveel landen rijden volgens de tekst links?', en: 'How many countries drive on the left, according to the text?' },
      options: [
        { nl: 'Zo\'n zestig landen', en: 'About sixty countries' },
        { nl: 'Precies dertig landen', en: 'Exactly thirty countries' },
        { nl: 'Honderd landen', en: 'A hundred countries' },
        { nl: 'Alle landen van Europa', en: 'All the countries of Europe' }
      ], answer: 0,
      explain: { nl: 'Alinea 1: "in Engeland, Japan, Australië en zo\'n zestig andere landen rijdt iedereen juist links."',
                 en: 'Paragraph 1: "in England, Japan, Australia and about sixty other countries, everyone drives on the left instead."' } },
    { id: 'q2', type: 'mc', skill: 'verwijswoorden',
      q: { nl: '"Landen die buiten zijn rijk lagen... deden dat lange tijd ook." Waarnaar verwijst "dat"?',
           en: '"Countries that lay outside his empire... did the same for a long time." What does "the same" point to?' },
      options: [
        { nl: 'Naar links blijven rijden', en: 'To continuing to drive on the left' },
        { nl: 'Naar een leger hebben', en: 'To having an army' },
        { nl: 'Naar een zwaard dragen', en: 'To carrying a sword' },
        { nl: 'Naar een kolonie stichten', en: 'To founding a colony' }
      ], answer: 0,
      explain: { nl: 'De vorige zin gaat over Engeland, dat links bleef rijden omdat het niet veroverd werd.',
                 en: 'The previous sentence is about England, which kept driving on the left because it was not conquered.' } },
    { id: 'q3', type: 'mc', skill: 'gevolgtrekking',
      q: { nl: 'Waarom reden middeleeuwse ruiters het liefst aan de linkerkant van de weg?',
           en: 'Why did medieval riders prefer to ride on the left side of the road?' },
      options: [
        { nl: 'Omdat hun zwaardarm dan naar een tegenligger in het midden van de weg wees',
          en: 'Because their sword arm then pointed towards an oncoming traveller in the middle of the road' },
        { nl: 'Omdat paarden van nature links liepen', en: 'Because horses naturally walked on the left' },
        { nl: 'Omdat de wegen links het gladst waren', en: 'Because the roads were smoothest on the left' },
        { nl: 'Omdat het zo in de wet stond', en: 'Because that is what the law said' }
      ], answer: 0,
      explain: { nl: 'Alinea 2 legt precies dat verband uit tussen het zwaard op de linkerheup en links rijden.',
                 en: 'Paragraph 2 explains exactly that link between the sword on the left hip and riding on the left.' } },
    { id: 'q4', type: 'gap', skill: 'woordenschat',
      q: { nl: 'Een kolonie is ___.', en: 'A colony is ___.' },
      options: [
        { nl: 'een gebied dat door een ander land wordt bestuurd, vaak ver weg', en: 'a territory ruled by another country, often far away' },
        { nl: 'een leger van ruiters', en: 'an army of riders' },
        { nl: 'een kruispunt tussen twee landen', en: 'a crossing between two countries' },
        { nl: 'een zwaard met twee kanten', en: 'a sword with two edges' }
      ], answer: 0,
      explain: { nl: 'Alinea 5 noemt India en Australië als voorbeelden van Britse koloniën.',
                 en: 'Paragraph 5 names India and Australia as examples of British colonies.' } },
    { id: 'q5', type: 'order', skill: 'volgorde',
      q: { nl: 'Zet de geschiedenis van linksrijden en rechtsrijden op volgorde.',
           en: 'Put the history of left-hand and right-hand driving in order.' },
      items: [
        { nl: 'Ridders dragen een zwaard aan hun linkerheup en rijden links.', en: 'Knights carry a sword on their left hip and ride on the left.' },
        { nl: 'Napoleons legers verspreiden rechtsrijden door Europa.', en: 'Napoleon\'s armies spread right-hand driving through Europe.' },
        { nl: 'Engeland blijft links rijden omdat het niet wordt veroverd.', en: 'England keeps driving on the left because it is not conquered.' },
        { nl: 'Britse koloniën nemen het linksrijden over.', en: 'British colonies adopt left-hand driving.' },
        { nl: 'Onafhankelijke landen houden links rijden, want omschakelen is duur.', en: 'Independent countries keep driving on the left, because switching over is expensive.' }
      ], answer: [0, 1, 2, 3, 4],
      explain: { nl: 'De tekst volgt precies deze volgorde, van de middeleeuwen tot vandaag.',
                 en: 'The text follows exactly this order, from the Middle Ages to today.' } },
    { id: 'q6', type: 'mc', skill: 'structuur',
      q: { nl: 'Alinea 3 begint met "Napoleon Bonaparte veranderde dat voor een groot deel van Europa." Wat doet die alinea in de opbouw van de tekst?',
           en: 'Paragraph 3 begins "Napoleon Bonaparte changed that for a large part of Europe." What does that paragraph do in the structure of the text?' },
      options: [
        { nl: 'Ze introduceert de gebeurtenis die rechtsrijden over Europa verspreidde, na de uitleg over ridders',
          en: 'It introduces the event that spread right-hand driving across Europe, after the explanation about knights' },
        { nl: 'Ze vat de hele tekst samen', en: 'It summarises the whole text' },
        { nl: 'Ze geeft de mening van de schrijver over Napoleon', en: 'It gives the writer\'s opinion of Napoleon' },
        { nl: 'Ze beschrijft hoe auto\'s worden gemaakt', en: 'It describes how cars are made' }
      ], answer: 0,
      explain: { nl: 'Na de uitleg over ridders (de oorzaak van linksrijden) volgt de kanteling door Napoleon (de oorzaak van rechtsrijden).',
                 en: 'After the explanation about knights (the cause of left-hand driving) comes the turn caused by Napoleon (the cause of right-hand driving).' } },
    { id: 'q7', type: 'multi', skill: 'letterlijk',
      q: { nl: 'Welke twee landen noemt de tekst als voorbeeld van Britse koloniën? Kies er 2.',
           en: 'Which two countries does the text name as examples of British colonies? Pick 2.' },
      options: [
        { nl: 'India', en: 'India' },
        { nl: 'Australië', en: 'Australia' },
        { nl: 'Portugal', en: 'Portugal' },
        { nl: 'Zweden', en: 'Sweden' }
      ], answer: [0, 1],
      explain: { nl: 'Alinea 5 noemt precies India en Australië (en delen van Afrika) als voorbeelden van Britse koloniën.',
                 en: 'Paragraph 5 names exactly India and Australia (and parts of Africa) as examples of British colonies.' } },
    { id: 'q8', type: 'mc', skill: 'hoofdgedachte',
      q: { nl: 'Wat is de hoofdgedachte van deze tekst?', en: 'What is the main idea of this text?' },
      options: [
        { nl: 'Of een land links of rechts rijdt, komt voort uit eeuwenoude gewoontes van ridders, Napoleon en koloniale geschiedenis',
          en: 'Whether a country drives on the left or right comes from centuries-old habits of knights, Napoleon and colonial history' },
        { nl: 'Auto\'s werden pas honderd jaar geleden uitgevonden', en: 'Cars were only invented a hundred years ago' },
        { nl: 'Engeland heeft de beste wegen van Europa', en: 'England has the best roads in Europe' },
        { nl: 'Zwaardvechten was populair in de middeleeuwen', en: 'Sword fighting was popular in the Middle Ages' }
      ], answer: 0,
      explain: { nl: 'De tekst legt uit hoe ridders, Napoleon en koloniën samen bepaalden welke kant landen nu nog kiezen.',
                 en: 'The text explains how knights, Napoleon and colonies together determined which side countries still choose today.' } }
  ]
},

{
  id: 'wereld-10', topic: 'wereld', level: 5, emoji: '🌐', scene: 'world',
  title: { nl: 'Moet iedereen op school een tweede taal leren?', en: 'Should everyone learn a second language at school?' },
  text: {
    nl: [
      "In Nederland leren de meeste kinderen op de basisschool al Engels, en op de middelbare school komt daar vaak nog een taal bij: Frans, Duits of Spaans. Niet elk land doet dat zo. In sommige landen is één vreemde taal genoeg, in andere is een tweede taal zelfs verplicht vanaf groep drie. Moet iedereen op school echt een tweede taal leren? Daarover verschillen de meningen.",
      "Voorstanders wijzen erop dat je met een extra taal meer deuren opent. Je kunt op vakantie makkelijker een gesprek voeren, later misschien in het buitenland werken of studeren, en meer vrienden maken die anders onbereikbaar zouden blijven. Onderzoek laat ook zien dat wie een taal spreekt, vaak beter naar andere mensen luistert en zich makkelijker in iemand anders kan verplaatsen.",
      "Daar komt bij dat een taal leren je iets vertelt over een andere cultuur: hoe mensen daar denken, grappen maken of beleefd zijn. En jonge kinderen leren talen nu eenmaal makkelijker dan volwassenen. Hun hersenen zijn daar nog goed op ingesteld. Wachten tot je achttien bent, is voor een taal vaak al te laat om hem echt vloeiend te leren.",
      "Tegenstanders zien vooral het lesrooster als probleem. Een schooldag duurt niet oneindig lang, en elk uur voor een tweede taal is een uur minder voor rekenen, geschiedenis of gymnastiek. Sommige scholen hebben daardoor amper tijd over voor vakken die volgens hen minstens zo belangrijk zijn.",
      "Ook wijzen ze erop dat niet elk kind een tweede taal nodig heeft voor het latere beroep dat het kiest. Een automonteur of tuinman heeft daar zelden iets aan. Bovendien hebben sommige kinderen al moeite met lezen en schrijven in hun eigen taal. Voor hen voelt een tweede taal dan al snel als een extra last, zeggen tegenstanders, in plaats van een cadeau.",
      "Beide kanten hebben een punt, en de keuze hangt ook af van het land: een klein land dat veel handelt met het buitenland heeft er misschien meer aan dan een heel groot land waar bijna iedereen al dezelfde taal spreekt. Sommige scholen proberen een middenweg: een beetje taal, gekoppeld aan spelletjes en liedjes, zonder dat het meteen een streng examen wordt.",
      "Een echt antwoord bestaat niet: het is een afweging tussen tijd, nut en plezier, en niemand kan voor een heel land tegelijk beslissen wat het beste is. En wat vind jij?"
    ],
    en: [
      "In the Netherlands, most children already learn English in primary school, and in secondary school another language is often added: French, German or Spanish. Not every country does it that way. In some countries one foreign language is enough, in others a second language is even compulsory from the age of six. Should everyone at school really learn a second language? Opinions on that differ.",
      "Supporters point out that an extra language opens more doors. You can hold a conversation more easily on holiday, perhaps later work or study abroad, and make more friends who would otherwise stay out of reach. Research also shows that people who speak a language often listen better to others and find it easier to imagine themselves in someone else's shoes.",
      "On top of that, learning a language tells you something about another culture: how people there think, joke or are polite. And young children simply learn languages more easily than adults. Their brains are still well set up for it. Waiting until you are eighteen is often already too late to learn a language really fluently.",
      "Opponents mainly see the timetable as a problem. A school day does not last forever, and every hour spent on a second language is an hour less for maths, history or PE. Because of that, some schools barely have time left for subjects they consider at least as important.",
      "They also point out that not every child needs a second language for the job they will later choose. A car mechanic or a gardener rarely gets any use out of it. What's more, some children already struggle with reading and writing in their own language. For them a second language quickly feels like an extra burden, opponents say, instead of a gift.",
      "Both sides have a point, and the choice also depends on the country: a small country that trades a lot with other countries may get more out of it than a very large country where almost everyone already speaks the same language. Some schools try a middle way: a little language, linked to games and songs, without it immediately becoming a strict exam.",
      "There is no real answer: it is a trade-off between time, usefulness and enjoyment, and nobody can decide for a whole country all at once what is best. And what do you think?"
    ]
  },
  words: [
    { nl: 'voorstanders', en: 'supporters', defNl: 'mensen die vóór iets zijn en het steunen', defEn: 'people who are in favour of something and support it' },
    { nl: 'tegenstanders', en: 'opponents', defNl: 'mensen die tegen iets zijn', defEn: 'people who are against something' },
    { nl: 'middenweg', en: 'middle way', defNl: 'een oplossing die tussen twee uitersten in zit', defEn: 'a solution that lies between two extremes' }
  ],
  questions: [
    { id: 'q1', type: 'mc', skill: 'letterlijk',
      q: { nl: 'Vanaf welke groep is een tweede taal in sommige landen verplicht, volgens de tekst?',
           en: 'From which year is a second language compulsory in some countries, according to the text?' },
      options: [
        { nl: 'Vanaf groep drie', en: 'From the first years of primary school' },
        { nl: 'Vanaf groep acht', en: 'From the last year of primary school' },
        { nl: 'Pas op de middelbare school', en: 'Only in secondary school' },
        { nl: 'Nooit verplicht', en: 'Never compulsory' }
      ], answer: 0,
      explain: { nl: 'Alinea 1: "in andere is een tweede taal zelfs verplicht vanaf groep drie."',
                 en: 'Paragraph 1: "in others a second language is even compulsory from the age of six."' } },
    { id: 'q2', type: 'sort', skill: 'feitmening',
      q: { nl: 'Feit of mening? Zet elke zin in de goede groep.', en: 'Fact or opinion? Put every sentence in the right group.' },
      bins: [{ nl: 'Feit', en: 'Fact' }, { nl: 'Mening', en: 'Opinion' }],
      items: [
        { nl: 'In Nederland leren de meeste kinderen op de basisschool al Engels.',
          en: 'In the Netherlands, most children already learn English in primary school.', bin: 0 },
        { nl: 'Jonge kinderen leren talen makkelijker dan volwassenen.',
          en: 'Young children learn languages more easily than adults.', bin: 0 },
        { nl: 'Voor sommige kinderen voelt een tweede taal als een extra last in plaats van een cadeau.',
          en: 'For some children a second language feels like an extra burden instead of a gift.', bin: 1 },
        { nl: 'Een klein land heeft waarschijnlijk meer aan een tweede taal dan een heel groot land.',
          en: 'A small country probably gets more out of a second language than a very large country.', bin: 1 }
      ],
      explain: { nl: 'De eerste twee zinnen kun je nagaan of onderzoeken. De laatste twee zijn een oordeel over wat beter of vervelender is.',
                 en: 'The first two sentences can be checked or researched. The last two are a judgement about what is better or more of a burden.' } },
    { id: 'q3', type: 'mc', skill: 'doel',
      q: { nl: 'Wat wil de schrijver met deze tekst vooral bereiken?', en: 'What is the writer mainly trying to achieve with this text?' },
      options: [
        { nl: 'Je laten nadenken over een lastige keuze, door voor- en tegenargumenten naast elkaar te zetten',
          en: 'Make you think about a hard choice by putting arguments for and against side by side' },
        { nl: 'Je overtuigen dat een tweede taal verplicht moet worden', en: 'Convince you that a second language should be compulsory' },
        { nl: 'Uitleggen hoe je snel een taal leert', en: 'Explain how to learn a language quickly' },
        { nl: 'Je vertellen welke taal het makkelijkst is', en: 'Tell you which language is the easiest' }
      ], answer: 0,
      explain: { nl: 'De tekst geeft eerst de voorstanders het woord, dan de tegenstanders, en eindigt met "En wat vind jij?".',
                 en: 'The text first gives the supporters a voice, then the opponents, and ends with "And what do you think?".' } },
    { id: 'q4', type: 'mc', skill: 'verwijswoorden',
      q: { nl: '"Daar komt bij dat een taal leren je iets vertelt over een andere cultuur." Waar slaat "daar" op?',
           en: '"On top of that, learning a language tells you something about another culture." What does "that" point to?' },
      options: [
        { nl: 'Op het argument van de voorstanders dat een taal deuren opent',
          en: 'On the supporters\' argument that a language opens doors' },
        { nl: 'Op het lesrooster van school', en: 'On the school timetable' },
        { nl: 'Op het beroep dat je later kiest', en: 'On the job you choose later' },
        { nl: 'Op groep drie', en: 'On the first years of primary school' }
      ], answer: 0,
      explain: { nl: 'De vorige alinea gaat over de voorstanders; "daar komt bij" voegt een extra argument toe.',
                 en: 'The previous paragraph is about the supporters; "on top of that" adds an extra argument.' } },
    { id: 'q5', type: 'multi', skill: 'gevolgtrekking',
      q: { nl: 'Welke twee argumenten gebruiken de tegenstanders? Kies er 2.', en: 'Which two arguments do the opponents use? Pick 2.' },
      options: [
        { nl: 'Elk lesuur voor een tweede taal is een uur minder voor een ander vak',
          en: 'Every lesson hour for a second language is one hour less for another subject' },
        { nl: 'Niet elk kind heeft een tweede taal nodig voor zijn latere beroep',
          en: 'Not every child needs a second language for their future job' },
        { nl: 'Een tweede taal is voor iedereen precies even makkelijk', en: 'A second language is exactly as easy for everyone' },
        { nl: 'Vreemde talen bestaan pas sinds honderd jaar', en: 'Foreign languages have only existed for a hundred years' }
      ], answer: [0, 1],
      explain: { nl: 'Alinea 4 en 5 noemen precies deze twee argumenten van de tegenstanders.',
                 en: 'Paragraphs 4 and 5 name exactly these two arguments from the opponents.' } },
    { id: 'q6', type: 'tf', skill: 'gevolgtrekking',
      q: { nl: 'Volgens de tekst is er één duidelijk juist antwoord op de vraag of iedereen een tweede taal moet leren.',
           en: 'According to the text there is one clearly correct answer to the question of whether everyone should learn a second language.' },
      answer: false,
      explain: { nl: 'De slotalinea zegt juist: "Een echt antwoord bestaat niet."',
                 en: 'The closing paragraph says the opposite: "There is no real answer."' } },
    { id: 'q7', type: 'mc', skill: 'structuur',
      q: { nl: 'De tekst behandelt eerst de voorstanders (alinea 2 en 3) en dan de tegenstanders (alinea 4 en 5). Wat doet alinea 6 daarna?',
           en: 'The text first deals with the supporters (paragraphs 2 and 3) and then the opponents (paragraphs 4 and 5). What does paragraph 6 do after that?' },
      options: [
        { nl: 'Ze brengt nuance en laat zien dat het ook van het land en de aanpak afhangt',
          en: 'It brings nuance and shows it also depends on the country and the approach' },
        { nl: 'Ze herhaalt de argumenten van de voorstanders', en: 'It repeats the supporters\' arguments' },
        { nl: 'Ze vertelt een nieuw feit over Engels', en: 'It tells a new fact about English' },
        { nl: 'Ze sluit de tekst af zonder iets toe te voegen', en: 'It closes the text without adding anything' }
      ], answer: 0,
      explain: { nl: 'Alinea 6 begint met "Beide kanten hebben een punt" en voegt een genuanceerd perspectief toe.',
                 en: 'Paragraph 6 begins with "Both sides have a point" and adds a nuanced perspective.' } },
    { id: 'q8', type: 'mc', skill: 'samenvatten',
      q: { nl: 'Welke samenvatting past het beste bij de hele tekst?', en: 'Which summary fits the whole text best?' },
      options: [
        { nl: 'Een tweede taal leren heeft duidelijke voordelen, maar kost ook lestijd en is niet voor elk kind even nuttig; een pasklaar antwoord is er niet.',
          en: 'Learning a second language has clear advantages, but also costs lesson time and is not equally useful for every child; there is no ready-made answer.' },
        { nl: 'In Nederland leren kinderen op de basisschool al Engels en later nog een taal erbij.',
          en: 'In the Netherlands children already learn English in primary school and another language later.' },
        { nl: 'Automonteurs en tuinlieden hebben nooit iets aan een tweede taal.',
          en: 'Car mechanics and gardeners never have any use for a second language.' },
        { nl: 'Jonge kinderen leren alles sneller dan volwassenen.', en: 'Young children learn everything faster than adults.' }
      ], answer: 0,
      explain: { nl: 'Een goede samenvatting bevat de voordelen, de nadelen én de open conclusie; de andere antwoorden zijn losse details uit één alinea.',
                 en: 'A good summary contains the advantages, the disadvantages and the open conclusion; the other answers are single details from one paragraph.' } },
    { id: 'q9', type: 'mc', skill: 'woordenschat',
      q: { nl: 'Wat betekent "middenweg" zoals gebruikt in de tekst?', en: 'What does "middle way" mean as used in the text?' },
      options: [
        { nl: 'Een oplossing die tussen twee uitersten in zit', en: 'A solution that lies between two extremes' },
        { nl: 'De kortste weg naar school', en: 'The shortest way to school' },
        { nl: 'Een taal die niemand meer spreekt', en: 'A language nobody speaks any more' },
        { nl: 'Een examen dat heel streng is', en: 'An exam that is very strict' }
      ], answer: 0,
      explain: { nl: 'Alinea 6: sommige scholen proberen een middenweg tussen niets doen en een streng examen.',
                 en: 'Paragraph 6: some schools try a middle way between doing nothing and a strict exam.' } }
  ]
}
]);
