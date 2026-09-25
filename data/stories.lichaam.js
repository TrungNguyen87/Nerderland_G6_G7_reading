/* Wereld 10 - Lichaam & Gezondheid */
addStories([
{
  id: 'lichaam-1', topic: 'lichaam', level: 1, emoji: '💤', scene: 'body',
  title: { nl: 'Waarom moet je eigenlijk slapen?', en: 'Why do you actually have to sleep?' },
  text: {
    nl: [
      "Elke avond gebeurt hetzelfde: je ogen vallen dicht en je bent uren weg. Dat is gek als je erover nadenkt. Je kunt niet eten, niet spelen en niet opletten. Toch doet elk dier het.",
      "Slapen is geen niets doen. Je hersenen zijn juist druk. Ze ruimen op en ze bergen op wat je die dag geleerd hebt. Een som die je 's middags oefende, zit 's ochtends beter in je hoofd.",
      "Ook je lichaam werkt door. Je maakt stofjes aan waarmee je groeit en waarmee je wondjes heelt. Daarom slaapt een baby veel meer dan een opa.",
      "Kinderen van tien jaar hebben ongeveer tien uur slaap nodig. Dat is meer dan volwassenen. Wie te weinig slaapt, wordt niet alleen moe, maar ook sneller boos en vergeetachtig.",
      "Eén ding helpt heel goed: het licht van een tablet of telefoon laat je hersenen denken dat het nog dag is. Leg het scherm dus een uur voor het slapen weg. Een boek maakt je juist slaperig."
    ],
    en: [
      "Every evening the same thing happens: your eyes close and you are gone for hours. That is odd when you think about it. You cannot eat, play or pay attention. Yet every animal does it.",
      "Sleeping is not doing nothing. Your brain is actually busy. It tidies up and stores away what you learned that day. A sum you practised in the afternoon sits better in your head in the morning.",
      "Your body carries on working too. You make substances that help you grow and heal your cuts. That is why a baby sleeps far more than a grandad.",
      "Ten-year-old children need about ten hours of sleep. That is more than adults. Anyone who sleeps too little does not only get tired, but also angry and forgetful more quickly.",
      "One thing helps a lot: the light of a tablet or phone makes your brain think it is still daytime. So put the screen away an hour before bed. A book actually makes you sleepy."
    ]
  },
  words: [
    { nl: 'hersenen', en: 'brain', defNl: 'het orgaan in je hoofd waarmee je denkt', defEn: 'the organ in your head that you think with' },
    { nl: 'vergeetachtig', en: 'forgetful', defNl: 'dingen snel weer kwijt zijn', defEn: 'losing track of things quickly' },
    { nl: 'heelt', en: 'heals', defNl: 'weer beter wordt, zoals een wondje', defEn: 'gets better again, like a cut' }
  ],
  questions: [
    { id: 'q1', type: 'mc', skill: 'letterlijk',
      q: { nl: 'Hoeveel slaap heeft een kind van tien ongeveer nodig?',
           en: 'How much sleep does a ten-year-old need, roughly?' },
      options: [
        { nl: 'Ongeveer tien uur', en: 'About ten hours' },
        { nl: 'Ongeveer zes uur', en: 'About six hours' },
        { nl: 'Net zoveel als een volwassene', en: 'The same as an adult' },
        { nl: 'Meer dan een baby', en: 'More than a baby' }
      ], answer: 0,
      explain: { nl: 'In alinea 4 staat: ongeveer tien uur, meer dan volwassenen.',
                 en: 'Paragraph 4 says: about ten hours, more than adults.' } },
    { id: 'q2', type: 'tf', skill: 'letterlijk',
      q: { nl: 'Tijdens het slapen doen je hersenen helemaal niets.',
           en: 'While you sleep your brain does nothing at all.' },
      answer: false,
      explain: { nl: 'Alinea 2: je hersenen zijn juist druk met opruimen en opbergen.',
                 en: 'Paragraph 2: your brain is actually busy tidying up and storing.' } },
    { id: 'q3', type: 'mc', skill: 'gevolgtrekking',
      q: { nl: 'Waarom slaapt een baby meer dan een opa?', en: 'Why does a baby sleep more than a grandad?' },
      options: [
        { nl: 'Omdat een baby nog hard moet groeien', en: 'Because a baby still has a lot of growing to do' },
        { nl: 'Omdat een baby geen tablet heeft', en: 'Because a baby has no tablet' },
        { nl: 'Omdat een opa meer leert', en: 'Because a grandad learns more' },
        { nl: 'Omdat een baby sneller boos wordt', en: 'Because a baby gets angry faster' }
      ], answer: 0,
      explain: { nl: 'Alinea 3: in je slaap maak je stofjes waarmee je groeit. Een baby groeit het hardst.',
                 en: 'Paragraph 3: in your sleep you make substances that help you grow, and a baby grows fastest.' } },
    { id: 'q4', type: 'gap', skill: 'woordenschat',
      q: { nl: 'Als een wondje heelt, wordt het ___.', en: 'When a cut heals, it ___.' },
      options: [
        { nl: 'weer beter', en: 'gets better again' },
        { nl: 'groter', en: 'gets bigger' },
        { nl: 'blauw', en: 'turns blue' },
        { nl: 'moe', en: 'gets tired' }
      ], answer: 0,
      explain: { nl: 'In alinea 3 gaat het over stofjes waarmee je wondjes heelt: beter maakt.',
                 en: 'Paragraph 3 is about substances that heal your cuts: make them better.' } },
    { id: 'q5', type: 'mc', skill: 'hoofdgedachte',
      q: { nl: 'Waar gaat dit stuk vooral over?', en: 'What is this text mainly about?' },
      options: [
        { nl: 'Waarom slapen belangrijk is voor je hoofd en je lichaam',
          en: 'Why sleep matters for your head and your body' },
        { nl: 'Hoe laat je naar bed moet', en: 'What time you have to go to bed' },
        { nl: 'Waarom tablets leuk zijn', en: 'Why tablets are fun' },
        { nl: 'Hoe je een som oefent', en: 'How to practise a sum' }
      ], answer: 0,
      explain: { nl: 'Elke alinea geeft een reden waarom slaap nodig is.',
                 en: 'Every paragraph gives a reason why sleep is needed.' } }
  ]
},

{
  id: 'lichaam-2', topic: 'lichaam', level: 2, emoji: '🦴', scene: 'body',
  title: { nl: 'Het bot dat zichzelf repareert', en: 'The bone that repairs itself' },
  text: {
    nl: [
      "Als je van je fiets valt en je pols breekt, hoor je soms een knak. Op de eerste hulp maken ze een foto, doen ze gips om je arm en sturen ze je naar huis. Verder gebeurt er niets. Toch is je bot zes weken later weer heel. Hoe kan dat?",
      "Een bot is namelijk geen dood stuk kalk. Er lopen bloedvaten doorheen en er zitten levende cellen in. Twee soorten doen al je hele leven hetzelfde werk: de ene breekt oud bot af, de andere bouwt nieuw bot op. Zo wordt je hele skelet in ongeveer tien jaar vernieuwd, zonder dat je het merkt.",
      "Bij een breuk gaan die cellen in de hoogste versnelling. Eerst ontstaat er een bloedprop rond de breuk. Daarna maken de cellen een soort zachte brug van kraakbeen: een tijdelijke verbinding die nog buigt. Daarin wordt vervolgens kalk afgezet, waardoor de brug hard wordt.",
      "Het gips doet dus niet het genezen. Het houdt alleen de twee stukken stil, zodat ze in de goede stand aan elkaar kunnen groeien. Zonder gips zou de zachte brug telkens weer breken.",
      "Later ruimt het lichaam nog op. De bult die eerst op de breuk zit, wordt langzaam weggewerkt tot het bot weer bijna zijn oude vorm heeft. Bij kinderen gaat dat zo goed dat je op een foto na een paar jaar vaak niet meer ziet waar het gebroken was.",
      "Botten worden ook sterker van gebruik. Wie veel springt en rent, krijgt dikkere botten dan wie stilzit. Astronauten in de ruimte merken het omgekeerde: zonder zwaartekracht verliezen ze elke maand ongeveer een procent botmassa."
    ],
    en: [
      "If you fall off your bike and break your wrist, you sometimes hear a crack. At the emergency department they take an X-ray, put your arm in plaster and send you home. Nothing else happens. Yet six weeks later your bone is whole again. How is that possible?",
      "A bone is not a dead piece of chalk. Blood vessels run through it and living cells sit inside it. Two kinds do the same work all your life: one breaks down old bone, the other builds new bone. That way your whole skeleton is renewed in about ten years, without you noticing.",
      "With a break, those cells shift into top gear. First a blood clot forms around the break. Then the cells make a kind of soft bridge of cartilage: a temporary connection that still bends. Calcium is then laid down in it, which makes the bridge hard.",
      "So the plaster does not do the healing. It only holds the two pieces still, so that they can grow together in the right position. Without plaster the soft bridge would break again and again.",
      "Later the body tidies up. The lump that first sits on the break is slowly worked away until the bone has almost its old shape back. In children that goes so well that after a few years an X-ray often no longer shows where it was broken.",
      "Bones also get stronger from use. Someone who jumps and runs a lot gets thicker bones than someone who sits still. Astronauts in space notice the opposite: without gravity they lose about one percent of their bone mass every month."
    ]
  },
  words: [
    { nl: 'kraakbeen', en: 'cartilage', defNl: 'het stevige maar buigzame materiaal in je neus en je oor', defEn: 'the firm but bendy material in your nose and ear' },
    { nl: 'bloedvaten', en: 'blood vessels', defNl: 'de buisjes waardoor je bloed stroomt', defEn: 'the tubes your blood flows through' },
    { nl: 'zwaartekracht', en: 'gravity', defNl: 'de kracht die alles naar de aarde toe trekt', defEn: 'the force that pulls everything towards the earth' }
  ],
  questions: [
    { id: 'q1', type: 'mc', skill: 'letterlijk',
      q: { nl: 'Wat doen de twee soorten cellen in je bot?', en: 'What do the two kinds of cells in your bone do?' },
      options: [
        { nl: 'De ene breekt oud bot af, de andere bouwt nieuw bot op',
          en: 'One breaks down old bone, the other builds new bone' },
        { nl: 'Ze maken allebei kalk', en: 'They both make calcium' },
        { nl: 'Ze vervoeren bloed door je lichaam', en: 'They carry blood through your body' },
        { nl: 'Ze houden het gips vast', en: 'They hold the plaster in place' }
      ], answer: 0,
      explain: { nl: 'Alinea 2 legt dat uit: afbreken en opbouwen, je hele leven lang.',
                 en: 'Paragraph 2 explains it: breaking down and building up, all your life.' } },
    { id: 'q2', type: 'mc', skill: 'gevolgtrekking',
      q: { nl: 'Waarom krijg je gips om een gebroken pols?', en: 'Why do you get plaster on a broken wrist?' },
      options: [
        { nl: 'Om de twee stukken stil te houden zodat ze goed aan elkaar groeien',
          en: 'To hold the two pieces still so they grow together properly' },
        { nl: 'Omdat gips het bot geneest', en: 'Because plaster heals the bone' },
        { nl: 'Om de pijn helemaal weg te nemen', en: 'To take the pain away completely' },
        { nl: 'Omdat je dan niet hoeft te fietsen', en: 'So you do not have to cycle' }
      ], answer: 0,
      explain: { nl: 'Alinea 4 zegt het letterlijk: het gips geneest niet, het houdt stil.',
                 en: 'Paragraph 4 says it literally: the plaster does not heal, it holds still.' } },
    { id: 'q3', type: 'order', skill: 'volgorde',
      q: { nl: 'Zet de stappen van het genezen op volgorde.', en: 'Put the healing steps in order.' },
      items: [
        { nl: 'Er ontstaat een bloedprop rond de breuk.', en: 'A blood clot forms around the break.' },
        { nl: 'De cellen maken een zachte brug van kraakbeen.', en: 'The cells make a soft bridge of cartilage.' },
        { nl: 'In die brug wordt kalk afgezet, zodat hij hard wordt.', en: 'Calcium is laid down in the bridge, making it hard.' },
        { nl: 'De bult op de breuk wordt weggewerkt.', en: 'The lump on the break is worked away.' }
      ], answer: [0, 1, 2, 3],
      explain: { nl: 'Alinea 3 en 5 beschrijven precies deze vier stappen.',
                 en: 'Paragraphs 3 and 5 describe exactly these four steps.' } },
    { id: 'q4', type: 'gap', skill: 'woordenschat',
      q: { nl: 'Kraakbeen is ___.', en: 'Cartilage is ___.' },
      options: [
        { nl: 'stevig maar buigzaam materiaal, zoals in je oor', en: 'firm but bendy material, like in your ear' },
        { nl: 'hetzelfde als kalk', en: 'the same as calcium' },
        { nl: 'een buisje waar bloed doorheen stroomt', en: 'a tube that blood flows through' },
        { nl: 'het witte gips om je arm', en: 'the white plaster on your arm' }
      ], answer: 0,
      explain: { nl: 'In alinea 3 is de brug van kraakbeen nog buigzaam; pas de kalk maakt hem hard.',
                 en: 'In paragraph 3 the cartilage bridge still bends; only the calcium makes it hard.' } },
    { id: 'q5', type: 'tf', skill: 'gevolgtrekking',
      q: { nl: 'Uit de tekst blijkt dat botten sterker worden als je veel beweegt.',
           en: 'The text shows that bones get stronger when you move a lot.' },
      answer: true,
      explain: { nl: 'Alinea 6: wie veel springt en rent, krijgt dikkere botten; astronauten verliezen juist botmassa.',
                 en: 'Paragraph 6: jumping and running thicken your bones, while astronauts lose bone mass.' } },
    { id: 'q6', type: 'mc', skill: 'hoofdgedachte',
      q: { nl: 'Wat is de hoofdgedachte van deze tekst?', en: 'What is the main idea of this text?' },
      options: [
        { nl: 'Bot is levend weefsel dat zichzelf voortdurend vernieuwt en na een breuk zelf herstelt',
          en: 'Bone is living tissue that keeps renewing itself and repairs itself after a break' },
        { nl: 'Gips is een slimme uitvinding', en: 'Plaster is a clever invention' },
        { nl: 'Fietsen is gevaarlijk', en: 'Cycling is dangerous' },
        { nl: 'Astronauten hebben een zwaar beroep', en: 'Astronauts have a hard job' }
      ], answer: 0,
      explain: { nl: 'Alle alinea’s gaan over bot als levend materiaal dat zichzelf repareert.',
                 en: 'All the paragraphs are about bone as living material that repairs itself.' } }
  ]
},

{
  id: 'lichaam-3', topic: 'lichaam', level: 3, emoji: '🧫', scene: 'body',
  title: { nl: 'De beestjes die bij je horen', en: 'The little creatures that belong to you' },
  text: {
    nl: [
      "In je darmen wonen ongeveer evenveel bacteriën als je lichaam cellen heeft: tienduizenden miljarden. Samen wegen ze ongeveer anderhalve kilo, zo zwaar als je hersenen. Toch merk je er meestal niets van.",
      "Dat ze er zijn, is maar goed ook. Ze helpen je vezels verteren die je zelf niet kunt afbreken, zoals die uit bruin brood en bonen. Daarbij maken ze stoffen aan die je darmwand voeden. Ze maken bovendien vitamine K, die nodig is om bloed te laten stollen.",
      "Iedereen heeft zijn eigen verzameling. Die begint al bij de geboorte, en verandert daarna door wat je eet, waar je woont en of je een hond hebt. Zelfs een tweeling die hetzelfde eet heeft niet precies dezelfde soorten. Onderzoekers vergelijken het met een vingerafdruk, maar dan eentje die langzaam verandert.",
      "Antibiotica maken die verzameling tijdelijk armer. Zo'n medicijn doodt de bacterie die je ziek maakt, maar het kan niet kiezen: het raakt ook de nuttige soorten. Daarom heb je er weleens buikpijn of diarree van. Na een paar weken is de boel meestal weer op orde, maar niet altijd helemaal hetzelfde als ervoor.",
      "Wat helpt dan wel? Vooral variatie. Wie veel verschillende groenten, bonen, noten en volkorenproducten eet, geeft meer soorten iets te doen. Vezels zijn het voer van die bacteriën. Suiker en heel fijn wit meel bereiken de bacteriën juist nauwelijks, want die zijn al opgenomen voordat ze zover komen.",
      "Onderzoekers zijn voorzichtig met grote beloftes. Er zijn verbanden gevonden tussen darmbacteriën en van alles, van overgewicht tot somberheid, maar een verband is nog geen oorzaak. Wat wel vaststaat: je darmen zijn geen buis waar eten doorheen glijdt. Het is een plek waar miljarden gasten wonen die meewerken aan jouw gezondheid."
    ],
    en: [
      "Your intestines are home to roughly as many bacteria as your body has cells: tens of thousands of billions. Together they weigh about one and a half kilos, as heavy as your brain. Yet you usually notice nothing of them.",
      "It is just as well that they are there. They help you digest fibres you cannot break down yourself, such as those in brown bread and beans. In doing so they make substances that feed your intestinal wall. On top of that they make vitamin K, which is needed for blood to clot.",
      "Everyone has their own collection. It begins at birth and then changes through what you eat, where you live and whether you have a dog. Even twins who eat the same food do not have exactly the same species. Researchers compare it to a fingerprint, but one that slowly changes.",
      "Antibiotics make that collection temporarily poorer. Such a medicine kills the bacterium that makes you ill, but it cannot choose: it hits the useful species too. That is why they sometimes give you stomach ache or diarrhoea. After a few weeks things are usually back in order, but not always exactly the same as before.",
      "So what does help? Above all, variety. Someone who eats many different vegetables, beans, nuts and wholegrain products gives more species something to do. Fibres are the food of those bacteria. Sugar and very fine white flour barely reach the bacteria, because they have already been absorbed before they get that far.",
      "Researchers are careful with big promises. Links have been found between gut bacteria and all sorts of things, from being overweight to feeling low, but a link is not yet a cause. What is certain: your intestines are not a pipe that food slides through. They are a place where billions of guests live and work on your health."
    ]
  },
  words: [
    { nl: 'vezels', en: 'fibres', defNl: 'de harde delen van groente en graan die je niet zelf verteert', defEn: 'the tough parts of vegetables and grain you cannot digest yourself' },
    { nl: 'antibiotica', en: 'antibiotics', defNl: 'medicijnen die bacteriën doden', defEn: 'medicines that kill bacteria' },
    { nl: 'verband', en: 'link, connection', defNl: 'dat twee dingen samen voorkomen, zonder dat het één het ander veroorzaakt', defEn: 'that two things appear together, without one causing the other' }
  ],
  questions: [
    { id: 'q1', type: 'multi', skill: 'letterlijk',
      q: { nl: 'Welke twee nuttige dingen doen darmbacteriën volgens de tekst? Kies er 2.',
           en: 'Which two useful things do gut bacteria do, according to the text? Pick 2.' },
      options: [
        { nl: 'Ze helpen vezels verteren die je zelf niet kunt afbreken',
          en: 'They help digest fibres you cannot break down yourself' },
        { nl: 'Ze maken vitamine K aan', en: 'They make vitamin K' },
        { nl: 'Ze maken je botten sterker', en: 'They make your bones stronger' },
        { nl: 'Ze doden alle andere bacteriën', en: 'They kill all other bacteria' }
      ], answer: [0, 1],
      explain: { nl: 'Alinea 2 noemt precies die twee taken.', en: 'Paragraph 2 names exactly those two tasks.' } },
    { id: 'q2', type: 'mc', skill: 'gevolgtrekking',
      q: { nl: 'Waarom krijg je soms buikpijn van antibiotica?',
           en: 'Why do antibiotics sometimes give you a stomach ache?' },
      options: [
        { nl: 'Omdat het medicijn ook de nuttige bacteriën raakt',
          en: 'Because the medicine hits the useful bacteria too' },
        { nl: 'Omdat het medicijn vezels bevat', en: 'Because the medicine contains fibres' },
        { nl: 'Omdat je er vitamine K van krijgt', en: 'Because it gives you vitamin K' },
        { nl: 'Omdat het medicijn te zoet is', en: 'Because the medicine is too sweet' }
      ], answer: 0,
      explain: { nl: 'Alinea 4: het medicijn kan niet kiezen en raakt ook de goede soorten.',
                 en: 'Paragraph 4: the medicine cannot choose and hits the good species too.' } },
    { id: 'q3', type: 'mc', skill: 'verwijswoorden',
      q: { nl: '"Dat ze er zijn, is maar goed ook." Wie zijn "ze"?',
           en: '"It is just as well that they are there." Who are "they"?' },
      options: [
        { nl: 'De bacteriën in je darmen', en: 'The bacteria in your intestines' },
        { nl: 'De onderzoekers', en: 'The researchers' },
        { nl: 'De vezels in bruin brood', en: 'The fibres in brown bread' },
        { nl: 'De cellen van je hersenen', en: 'The cells of your brain' }
      ], answer: 0,
      explain: { nl: 'De alinea ervoor gaat over de tienduizenden miljarden bacteriën in je darmen.',
                 en: 'The paragraph before is about the tens of thousands of billions of bacteria in your gut.' } },
    { id: 'q4', type: 'mc', skill: 'woordenschat',
      q: { nl: 'Waarom vergelijkt de tekst je bacteriën met een vingerafdruk?',
           en: 'Why does the text compare your bacteria to a fingerprint?' },
      options: [
        { nl: 'Omdat de verzameling bij iedereen anders is', en: 'Because the collection is different for everyone' },
        { nl: 'Omdat je ze op je vingers hebt', en: 'Because you have them on your fingers' },
        { nl: 'Omdat de politie ze kan gebruiken', en: 'Because the police can use them' },
        { nl: 'Omdat ze nooit veranderen', en: 'Because they never change' }
      ], answer: 0,
      explain: { nl: 'Alinea 3: iedereen heeft zijn eigen verzameling, zelfs een tweeling niet precies dezelfde.',
                 en: 'Paragraph 3: everyone has their own collection; even twins do not have exactly the same.' } },
    { id: 'q5', type: 'mc', skill: 'structuur',
      q: { nl: 'Alinea 5 begint met "Wat helpt dan wel?". Waarom staat die vraag daar?',
           en: 'Paragraph 5 begins "So what does help?". Why is that question there?' },
      options: [
        { nl: 'Alinea 4 ging over wat schaadt; nu volgt wat goed doet',
          en: 'Paragraph 4 was about what harms; now comes what helps' },
        { nl: 'De schrijver weet het antwoord niet', en: 'The writer does not know the answer' },
        { nl: 'Het is een vraag van een onderzoeker', en: 'It is a researcher’s question' },
        { nl: 'Het vat de hele tekst samen', en: 'It summarises the whole text' }
      ], answer: 0,
      explain: { nl: 'Het woord "dan" verwijst terug naar de antibiotica uit de vorige alinea.',
                 en: 'The word "so" points back to the antibiotics in the previous paragraph.' } },
    { id: 'q6', type: 'tf', skill: 'gevolgtrekking',
      q: { nl: 'Volgens de tekst is bewezen dat darmbacteriën overgewicht veroorzaken.',
           en: 'According to the text it is proven that gut bacteria cause obesity.' },
      answer: false,
      explain: { nl: 'Alinea 6 zegt juist: er zijn verbanden gevonden, maar een verband is nog geen oorzaak.',
                 en: 'Paragraph 6 says links have been found, but a link is not yet a cause.' } },
    { id: 'q7', type: 'mc', skill: 'hoofdgedachte',
      q: { nl: 'Wat is de hoofdgedachte?', en: 'What is the main idea?' },
      options: [
        { nl: 'Je darmen zitten vol bacteriën die meewerken aan je gezondheid, en variatie in eten houdt ze gevarieerd',
          en: 'Your gut is full of bacteria that work on your health, and varied food keeps them varied' },
        { nl: 'Antibiotica zijn gevaarlijke medicijnen', en: 'Antibiotics are dangerous medicines' },
        { nl: 'Een tweeling lijkt minder op elkaar dan je denkt', en: 'Twins are less alike than you think' },
        { nl: 'Bruin brood is lekkerder dan wit brood', en: 'Brown bread tastes better than white bread' }
      ], answer: 0,
      explain: { nl: 'De alinea’s lopen van wat ze doen naar wat ze schaadt naar wat ze helpt.',
                 en: 'The paragraphs run from what they do to what harms them to what helps them.' } }
  ]
},

{
  id: 'lichaam-4', topic: 'lichaam', level: 4, emoji: '💉', scene: 'body',
  title: { nl: 'Hoe je lichaam leert vechten', en: 'How your body learns to fight' },
  text: {
    nl: [
      "Als je een virus binnenkrijgt, begint er onmiddellijk een gevecht dat je niet ziet. Eerst komen de snelle cellen: ze vallen alles aan wat vreemd ruikt, zonder te kijken wát het precies is. Dat is de reden dat je koorts krijgt en moe wordt. Koorts is geen pech, maar een wapen: de meeste virussen vermenigvuldigen zich slechter bij een hogere temperatuur.",
      "Daarna komt het knappere deel. Speciale cellen nemen een stukje van de indringer mee en laten het aan andere cellen zien, zoals je een politiefoto doorgeeft. Cellen die precies bij dat stukje passen, gaan zich delen. Binnen een paar dagen zijn er miljoenen, allemaal gericht op deze ene indringer.",
      "En dan gebeurt het belangrijkste. Als het gevecht voorbij is, blijft een klein deel van die cellen over: geheugencellen. Zij doen jaren niets, soms je hele leven. Maar komt hetzelfde virus terug, dan staan ze meteen klaar. Je wordt dan niet meer ziek, of nauwelijks. Dat noemen we immuniteit.",
      "Op precies dat geheugen is een vaccin gebouwd. Een vaccin laat het afweersysteem een onschadelijk stukje van de indringer zien: een dood virus, een los eiwit, of een instructie waarmee je eigen cellen dat eiwit even namaken. Er is geen ziekte, maar er worden wel geheugencellen aangemaakt. Je lichaam heeft dan geoefend zonder de wedstrijd te hoeven spelen.",
      "Waarom moet bijna iedereen dan meedoen? Omdat niet iedereen kán. Een baby van drie maanden is nog te jong, en iemand die chemotherapie krijgt, maakt te weinig afweercellen aan. Zij worden beschermd doordat de mensen om hen heen de ziekte niet doorgeven. Dat heet groepsimmuniteit, en het werkt alleen boven een bepaald percentage.",
      "Bij mazelen ligt die grens erg hoog, rond de vijfennegentig procent, want mazelen is een van de besmettelijkste ziektes die we kennen: één zieke steekt er gemiddeld vijftien tot achttien aan. Zakt de dekking onder die grens, dan komen de uitbraken terug. Dat is in Europa de laatste jaren op verschillende plekken gebeurd.",
      "Een afweersysteem is dus geen muur maar een leerling. Het onthoudt wat het ooit is tegengekomen, en een vaccin is niets anders dan huiswerk."
    ],
    en: [
      "When a virus gets into you, a fight you cannot see begins at once. First come the fast cells: they attack everything that smells foreign, without looking at what exactly it is. That is why you get a fever and feel tired. A fever is not bad luck but a weapon: most viruses multiply less well at a higher temperature.",
      "Then comes the cleverer part. Special cells take a piece of the intruder along and show it to other cells, the way you pass on a police photograph. Cells that fit that piece exactly start dividing. Within a few days there are millions, all aimed at this one intruder.",
      "And then the most important thing happens. When the fight is over, a small part of those cells remains: memory cells. They do nothing for years, sometimes your whole life. But if the same virus comes back, they are ready at once. You then do not fall ill, or hardly. We call that immunity.",
      "A vaccine is built on exactly that memory. A vaccine shows the defence system a harmless piece of the intruder: a dead virus, a loose protein, or an instruction with which your own cells briefly copy that protein. There is no illness, but memory cells are made all the same. Your body has practised without having to play the match.",
      "So why does almost everybody have to join in? Because not everybody can. A baby of three months is still too young, and someone having chemotherapy makes too few defence cells. They are protected because the people around them do not pass the disease on. That is called herd immunity, and it only works above a certain percentage.",
      "For measles that threshold is very high, around ninety-five percent, because measles is one of the most infectious diseases we know: one ill person infects fifteen to eighteen others on average. If coverage drops below that line, the outbreaks come back. That has happened in several places in Europe in recent years.",
      "So a defence system is not a wall but a pupil. It remembers what it once met, and a vaccine is nothing but homework."
    ]
  },
  words: [
    { nl: 'immuniteit', en: 'immunity', defNl: 'dat je een ziekte niet meer krijgt omdat je lichaam hem kent', defEn: 'no longer catching a disease because your body knows it' },
    { nl: 'indringer', en: 'intruder', defNl: 'iets wat van buiten je lichaam binnendringt', defEn: 'something that gets into your body from outside' },
    { nl: 'dekking', en: 'coverage', defNl: 'hoeveel procent van de mensen beschermd is', defEn: 'what percentage of people are protected' }
  ],
  questions: [
    { id: 'q1', type: 'mc', skill: 'letterlijk',
      q: { nl: 'Waarom is koorts volgens de tekst nuttig?', en: 'Why is a fever useful, according to the text?' },
      options: [
        { nl: 'De meeste virussen vermenigvuldigen zich slechter bij een hogere temperatuur',
          en: 'Most viruses multiply less well at a higher temperature' },
        { nl: 'Je gaat er beter van slapen', en: 'It makes you sleep better' },
        { nl: 'Het maakt geheugencellen aan', en: 'It makes memory cells' },
        { nl: 'Het is een teken dat je beter wordt', en: 'It is a sign that you are getting better' }
      ], answer: 0,
      explain: { nl: 'Alinea 1: koorts is geen pech maar een wapen.',
                 en: 'Paragraph 1: a fever is not bad luck but a weapon.' } },
    { id: 'q2', type: 'order', skill: 'volgorde',
      q: { nl: 'Zet de stappen van het afweersysteem op volgorde.', en: 'Put the immune system’s steps in order.' },
      items: [
        { nl: 'Snelle cellen vallen alles aan wat vreemd is.', en: 'Fast cells attack everything foreign.' },
        { nl: 'Een stukje van de indringer wordt aan andere cellen getoond.', en: 'A piece of the intruder is shown to other cells.' },
        { nl: 'De passende cellen delen zich tot er miljoenen zijn.', en: 'The matching cells divide until there are millions.' },
        { nl: 'Na het gevecht blijven er geheugencellen over.', en: 'After the fight, memory cells remain.' }
      ], answer: [0, 1, 2, 3],
      explain: { nl: 'Alinea 1 tot en met 3 beschrijven precies deze volgorde.',
                 en: 'Paragraphs 1 to 3 describe exactly this order.' } },
    { id: 'q3', type: 'mc', skill: 'verwijswoorden',
      q: { nl: '"Zij worden beschermd doordat de mensen om hen heen de ziekte niet doorgeven." Wie zijn "zij"?',
           en: '"They are protected because the people around them do not pass the disease on." Who are "they"?' },
      options: [
        { nl: 'Mensen die zelf geen vaccin kunnen krijgen, zoals een baby of iemand met chemotherapie',
          en: 'People who cannot be vaccinated themselves, such as a baby or someone on chemotherapy' },
        { nl: 'De geheugencellen', en: 'The memory cells' },
        { nl: 'De onderzoekers die vaccins maken', en: 'The researchers who make vaccines' },
        { nl: 'Alle mensen in Europa', en: 'All the people in Europe' }
      ], answer: 0,
      explain: { nl: 'De twee zinnen ervoor noemen juist die twee groepen.',
                 en: 'The two sentences before name exactly those two groups.' } },
    { id: 'q4', type: 'multi', skill: 'letterlijk',
      q: { nl: 'Welke drie vormen van een vaccin noemt de tekst? Kies er 3.',
           en: 'Which three forms of a vaccine does the text name? Pick 3.' },
      options: [
        { nl: 'Een dood virus', en: 'A dead virus' },
        { nl: 'Een los eiwit', en: 'A loose protein' },
        { nl: 'Een instructie waarmee je eigen cellen een eiwit namaken',
          en: 'An instruction with which your own cells copy a protein' },
        { nl: 'Een pilletje met vitamine K', en: 'A pill with vitamin K' }
      ], answer: [0, 1, 2],
      explain: { nl: 'Alinea 4 noemt precies die drie vormen.', en: 'Paragraph 4 names exactly those three forms.' } },
    { id: 'q5', type: 'mc', skill: 'gevolgtrekking',
      q: { nl: 'Waarom ligt de grens voor groepsimmuniteit bij mazelen zo hoog?',
           en: 'Why is the herd immunity threshold for measles so high?' },
      options: [
        { nl: 'Omdat één zieke gemiddeld vijftien tot achttien anderen aansteekt',
          en: 'Because one ill person infects fifteen to eighteen others on average' },
        { nl: 'Omdat mazelen alleen bij baby’s voorkomt', en: 'Because measles only occurs in babies' },
        { nl: 'Omdat het vaccin niet goed werkt', en: 'Because the vaccine does not work well' },
        { nl: 'Omdat mazelen lang duurt', en: 'Because measles lasts a long time' }
      ], answer: 0,
      explain: { nl: 'Alinea 6: hoe besmettelijker een ziekte, hoe hoger het percentage dat beschermd moet zijn.',
                 en: 'Paragraph 6: the more infectious a disease, the higher the percentage that must be protected.' } },
    { id: 'q6', type: 'mc', skill: 'structuur',
      q: { nl: 'Wat doet de laatste zin: "een vaccin is niets anders dan huiswerk"?',
           en: 'What does the final line, "a vaccine is nothing but homework", do?' },
      options: [
        { nl: 'Het vat de hele uitleg samen in één beeld', en: 'It sums up the whole explanation in one image' },
        { nl: 'Het geeft een nieuw argument', en: 'It gives a new argument' },
        { nl: 'Het waarschuwt voor uitbraken', en: 'It warns about outbreaks' },
        { nl: 'Het legt uit wat koorts is', en: 'It explains what a fever is' }
      ], answer: 0,
      explain: { nl: 'Het beeld van de leerling en het huiswerk vat samen wat de hele tekst heeft uitgelegd: oefenen zonder wedstrijd.',
                 en: 'The image of the pupil and homework sums up the whole text: practising without the match.' } },
    { id: 'q7', type: 'mc', skill: 'doel',
      q: { nl: 'Wat wil de schrijver vooral met deze tekst?', en: 'What does the writer mainly want with this text?' },
      options: [
        { nl: 'Uitleggen hoe afweer en vaccinatie werken, zodat je snapt waarom dekking belangrijk is',
          en: 'Explain how defence and vaccination work, so you see why coverage matters' },
        { nl: 'Je bang maken voor mazelen', en: 'Make you afraid of measles' },
        { nl: 'Uitleggen hoe je koorts verlaagt', en: 'Explain how to bring down a fever' },
        { nl: 'Reclame maken voor een medicijn', en: 'Advertise a medicine' }
      ], answer: 0,
      explain: { nl: 'De tekst legt stap voor stap uit, en gebruikt de cijfers om de uitleg te ondersteunen.',
                 en: 'The text explains step by step and uses the figures to support the explanation.' } },
    { id: 'q8', type: 'mc', skill: 'hoofdgedachte',
      q: { nl: 'Wat is de hoofdgedachte?', en: 'What is the main idea?' },
      options: [
        { nl: 'Je afweersysteem onthoudt indringers, en een vaccin gebruikt dat geheugen om ook anderen te beschermen',
          en: 'Your immune system remembers intruders, and a vaccine uses that memory to protect others too' },
        { nl: 'Koorts is vervelend maar gaat vanzelf over', en: 'A fever is annoying but passes by itself' },
        { nl: 'Mazelen komt in Europa steeds vaker voor', en: 'Measles is becoming more common in Europe' },
        { nl: 'Baby’s zijn kwetsbaar', en: 'Babies are vulnerable' }
      ], answer: 0,
      explain: { nl: 'Geheugen, vaccin en groepsimmuniteit vormen samen de kern van de tekst.',
                 en: 'Memory, vaccine and herd immunity together form the core of the text.' } }
  ]
},

{
  id: 'lichaam-5', topic: 'lichaam', level: 5, emoji: '📱', scene: 'body',
  title: { nl: 'Maakt een scherm je ongelukkig?', en: 'Does a screen make you unhappy?' },
  text: {
    nl: [
      "Sinds ongeveer 2012 heeft bijna elke tiener een smartphone. In diezelfde jaren gingen jongeren in enquêtes zeggen dat ze zich vaker somber en eenzaam voelden. Twee lijnen die tegelijk omhooggaan: dat ziet eruit als een oorzaak. Maar zo eenvoudig is het niet.",
      "Onderzoekers leerden dat lesje eerder. In de jaren tachtig stegen het aantal tv-toestellen en het aantal misdrijven tegelijk, en toch bleek televisie niet de dader. Twee lijnen die samen bewegen, heet een correlatie. Pas als je kunt uitsluiten dat iets anders beide veroorzaakt, mag je van oorzaak spreken.",
      "Wat is er wel gemeten? Een groot onderzoek onder ruim driehonderdduizend jongeren vond een verband tussen schermtijd en welbevinden, maar een heel klein verband: het verklaarde minder dan een procent van de verschillen. De onderzoekers rekenden voor dat regelmatig ontbijten en genoeg slapen een sterker verband hadden dan de telefoon.",
      "Toch is daarmee niet alles gezegd. Uit ander onderzoek komt naar voren dat het wát je doet meer uitmaakt dan hoe lang. Actief gebruik, zoals berichten sturen naar vrienden die je ook in het echt ziet, hangt samen met je beter voelen. Passief scrollen langs de vakantiefoto's van onbekenden hangt samen met je slechter voelen.",
      "Bovendien telt wat de tijd verdringt. Een uur op je telefoon in de trein kost je niets. Een uur op je telefoon in bed kost je een uur slaap, en dat er een verband is tussen slaaptekort en somberheid staat wél stevig vast.",
      "Waarom klinken de koppen in de krant dan zo alarmerend? Deels omdat een klein verband makkelijker als \"schokkend\" te verkopen is, en deels omdat volwassenen zich altijd zorgen hebben gemaakt over nieuwe media. Over de roman, de radio en de stripboeken schreven kranten ooit precies zulke stukken.",
      "Een eerlijke conclusie is dus saaier dan een kop. Schermen zijn niet onschuldig en niet giftig. De vragen die ertoe doen zijn: wat doe je erop, met wie, en wat had je anders gedaan in dat uur?"
    ],
    en: [
      "Since about 2012 almost every teenager has had a smartphone. In those same years young people in surveys started saying they felt low and lonely more often. Two lines rising at the same time: that looks like a cause. But it is not that simple.",
      "Researchers learned that lesson before. In the eighties the number of television sets and the number of crimes rose together, and yet television turned out not to be the culprit. Two lines moving together is called a correlation. Only when you can rule out that something else causes both may you speak of a cause.",
      "So what has been measured? A large study of more than three hundred thousand young people found a link between screen time and wellbeing, but a very small one: it explained less than one percent of the differences. The researchers worked out that eating breakfast regularly and sleeping enough had a stronger link than the phone.",
      "Yet that is not the whole story. Other research suggests that what you do matters more than how long. Active use, such as messaging friends you also see in real life, goes together with feeling better. Passively scrolling past holiday photos of strangers goes together with feeling worse.",
      "On top of that, what the time displaces counts. An hour on your phone on the train costs you nothing. An hour on your phone in bed costs you an hour of sleep, and the link between lack of sleep and low mood is firmly established.",
      "So why do the newspaper headlines sound so alarming? Partly because a small link is easier to sell as \"shocking\", and partly because adults have always worried about new media. Newspapers once wrote exactly the same sort of pieces about the novel, the radio and comic books.",
      "So an honest conclusion is duller than a headline. Screens are neither harmless nor poisonous. The questions that matter are: what are you doing on it, with whom, and what would you have done otherwise in that hour?"
    ]
  },
  words: [
    { nl: 'correlatie', en: 'correlation', defNl: 'twee dingen die samen bewegen, zonder dat het één het ander veroorzaakt', defEn: 'two things moving together without one causing the other' },
    { nl: 'welbevinden', en: 'wellbeing', defNl: 'hoe goed iemand zich voelt', defEn: 'how well someone feels' },
    { nl: 'verdringen', en: 'to displace', defNl: 'de plaats innemen van iets anders', defEn: 'taking the place of something else' }
  ],
  questions: [
    { id: 'q1', type: 'mc', skill: 'woordenschat',
      q: { nl: 'Wat is een correlatie?', en: 'What is a correlation?' },
      options: [
        { nl: 'Twee dingen die samen bewegen, zonder dat het één het ander veroorzaakt',
          en: 'Two things that move together without one causing the other' },
        { nl: 'Een oorzaak die bewezen is', en: 'A cause that has been proven' },
        { nl: 'Een onderzoek onder veel mensen', en: 'A study among many people' },
        { nl: 'Een kop in de krant', en: 'A newspaper headline' }
      ], answer: 0,
      explain: { nl: 'Alinea 2 legt het uit met het voorbeeld van televisie en misdrijven.',
                 en: 'Paragraph 2 explains it with the example of television and crime.' } },
    { id: 'q2', type: 'mc', skill: 'gevolgtrekking',
      q: { nl: 'Waarom noemt de schrijver de televisies uit de jaren tachtig?',
           en: 'Why does the writer mention the televisions of the eighties?' },
      options: [
        { nl: 'Als waarschuwend voorbeeld dat samen stijgen nog geen oorzaak is',
          en: 'As a warning example that rising together is not yet a cause' },
        { nl: 'Om te laten zien dat televisie slecht is', en: 'To show that television is bad' },
        { nl: 'Omdat er toen ook smartphones waren', en: 'Because there were smartphones then too' },
        { nl: 'Om uit te leggen hoe misdrijven worden geteld', en: 'To explain how crimes are counted' }
      ], answer: 0,
      explain: { nl: 'Het voorbeeld dient om de lezer voorzichtig te maken met de twee lijnen uit alinea 1.',
                 en: 'The example serves to make the reader cautious about the two lines in paragraph 1.' } },
    { id: 'q3', type: 'sort', skill: 'feitmening',
      q: { nl: 'Feit of mening? Zet elke zin in de goede groep.',
           en: 'Fact or opinion? Put every sentence in the right group.' },
      bins: [{ nl: 'Feit', en: 'Fact' }, { nl: 'Mening', en: 'Opinion' }],
      items: [
        { nl: 'Het onderzoek verklaarde minder dan een procent van de verschillen.',
          en: 'The study explained less than one percent of the differences.', bin: 0 },
        { nl: 'Een eerlijke conclusie is saaier dan een kop.',
          en: 'An honest conclusion is duller than a headline.', bin: 1 },
        { nl: 'Ontbijten en slapen hadden een sterker verband met welbevinden dan de telefoon.',
          en: 'Breakfast and sleep had a stronger link with wellbeing than the phone.', bin: 0 },
        { nl: 'Schermen zijn niet onschuldig en niet giftig.',
          en: 'Screens are neither harmless nor poisonous.', bin: 1 }
      ],
      explain: { nl: 'Uitkomsten van onderzoek zijn feiten. De twee andere zinnen zijn conclusies van de schrijver.',
                 en: 'Study results are facts. The other two sentences are the writer’s conclusions.' } },
    { id: 'q4', type: 'multi', skill: 'gevolgtrekking',
      q: { nl: 'Welke twee dingen maken volgens de tekst meer uit dan de lengte van je schermtijd? Kies er 2.',
           en: 'Which two things matter more than the length of your screen time? Pick 2.' },
      options: [
        { nl: 'Of je actief contact hebt of passief scrollt', en: 'Whether you are in active contact or scrolling passively' },
        { nl: 'Wat die tijd verdringt, bijvoorbeeld slaap', en: 'What that time displaces, for instance sleep' },
        { nl: 'Hoe duur je telefoon was', en: 'How expensive your phone was' },
        { nl: 'Hoeveel apps je hebt', en: 'How many apps you have' }
      ], answer: [0, 1],
      explain: { nl: 'Alinea 4 gaat over actief tegenover passief, alinea 5 over wat de tijd verdringt.',
                 en: 'Paragraph 4 is about active versus passive, paragraph 5 about what the time displaces.' } },
    { id: 'q5', type: 'mc', skill: 'verwijswoorden',
      q: { nl: '"Toch is daarmee niet alles gezegd." Waarmee?',
           en: '"Yet that is not the whole story." With what?' },
      options: [
        { nl: 'Met de uitkomst dat het verband heel klein is',
          en: 'With the finding that the link is very small' },
        { nl: 'Met het voorbeeld van de televisies', en: 'With the television example' },
        { nl: 'Met de koppen in de krant', en: 'With the newspaper headlines' },
        { nl: 'Met het aantal jongeren met een smartphone', en: 'With the number of teenagers with a smartphone' }
      ], answer: 0,
      explain: { nl: 'De alinea ervoor eindigt met de kleine uitkomst van het grote onderzoek.',
                 en: 'The previous paragraph ends with the small finding of the large study.' } },
    { id: 'q6', type: 'mc', skill: 'structuur',
      q: { nl: 'Welke opbouw heeft deze tekst?', en: 'How is this text built up?' },
      options: [
        { nl: 'Een populaire aanname, dan het onderzoek, dan de nuances, dan de conclusie',
          en: 'A popular assumption, then the research, then the nuances, then the conclusion' },
        { nl: 'Alleen argumenten tegen smartphones', en: 'Only arguments against smartphones' },
        { nl: 'Een verhaal over één tiener', en: 'A story about one teenager' },
        { nl: 'Een opsomming van apps', en: 'A list of apps' }
      ], answer: 0,
      explain: { nl: 'Alinea 1 zet de aanname neer, 2 en 3 het onderzoek, 4 tot 6 de nuances, 7 de conclusie.',
                 en: 'Paragraph 1 sets the assumption, 2-3 the research, 4-6 the nuances, 7 the conclusion.' } },
    { id: 'q7', type: 'mc', skill: 'doel',
      q: { nl: 'Wat wil de schrijver bereiken?', en: 'What does the writer want to achieve?' },
      options: [
        { nl: 'De lezer leren voorzichtig te zijn met snelle conclusies uit cijfers',
          en: 'Teach the reader to be careful with quick conclusions from figures' },
        { nl: 'De lezer overhalen zijn telefoon weg te doen', en: 'Persuade the reader to get rid of their phone' },
        { nl: 'Bewijzen dat schermen onschadelijk zijn', en: 'Prove that screens are harmless' },
        { nl: 'Kranten belachelijk maken', en: 'Make fun of newspapers' }
      ], answer: 0,
      explain: { nl: 'De tekst gaat net zo goed over correlatie en koppen als over telefoons.',
                 en: 'The text is as much about correlation and headlines as about phones.' } },
    { id: 'q8', type: 'mc', skill: 'samenvatten',
      q: { nl: 'Welke samenvatting past het beste?', en: 'Which summary fits best?' },
      options: [
        { nl: 'Het verband tussen schermtijd en somberheid is klein; wat je doet en wat de tijd verdringt telt zwaarder, ook al klinken krantenkoppen anders.',
          en: 'The link between screen time and low mood is small; what you do and what the time displaces count more, even if headlines sound different.' },
        { nl: 'In 2012 kreeg bijna elke tiener een smartphone.', en: 'In 2012 almost every teenager got a smartphone.' },
        { nl: 'Televisie veroorzaakte in de jaren tachtig misdrijven.',
          en: 'Television caused crime in the eighties.' },
        { nl: 'Slaaptekort maakt somber.', en: 'Lack of sleep makes you low.' }
      ], answer: 0,
      explain: { nl: 'Dat antwoord bevat de uitkomst, de nuances én de koppen. De andere drie zijn losse zinnen uit de tekst.',
                 en: 'That answer holds the finding, the nuances and the headlines. The other three are single sentences.' } },
    { id: 'q9', type: 'tf', skill: 'gevolgtrekking',
      q: { nl: 'Volgens de tekst is bewezen dat smartphones jongeren somber maken.',
           en: 'According to the text it is proven that smartphones make young people unhappy.' },
      answer: false,
      explain: { nl: 'De hele tekst gaat erover dat een verband nog geen oorzaak is, en dat het gevonden verband bovendien heel klein was.',
                 en: 'The whole text is about a link not being a cause, and the link found being very small as well.' } }
  ]
}
]);

/* --- Extra verhalen: niezen, huid, groei, geheugen, schooltijden --- */
addStories([
{
  id: 'lichaam-6', topic: 'lichaam', level: 1, emoji: '🤧', scene: 'body',
  title: { nl: 'Waarom moet je niezen?', en: 'Why do you have to sneeze?' },
  text: {
    nl: [
      "Soms kriebelt het even in je neus, en voor je er iets aan kunt doen, nies je keihard. Niezen komt altijd onverwacht. Het duurt maar een paar seconden, maar je hele lichaam doet mee.",
      "Wat gebeurt er dan precies? In je neus zitten piepkleine haartjes en zenuwen. Die voelen alles wat er binnenkomt: stof, peper, een haartje van de kat of gewoon een kriebel. Zodra zoiets die zenuwen prikkelt, sturen ze meteen een seintje naar je hersenen.",
      "Je hersenen nemen dat seintje heel serieus. Ze geven het bevel voor een reflex: een beweging die je zelf niet kunt tegenhouden. Je longen vullen zich met lucht en de spieren in je borst en buik spannen zich in één keer aan.",
      "Dan komt de klap. De lucht schiet met een enorme vaart je neus en mond uit, soms wel honderdvijftig kilometer per uur. Duizenden piepkleine druppeltjes vliegen mee de kamer in, tot wel enkele meters ver.",
      "Dat lijkt misschien overdreven, maar het is heel handig. Met die harde windvlaag blaast je lichaam het stof of de kruimel weg, voordat het dieper naar binnen kan. Daarom hou je bij het niezen je elleboog voor je mond: dan blijven de druppeltjes bij jou."
    ],
    en: [
      "Sometimes your nose tickles for a moment, and before you can do anything about it, you sneeze hard. Sneezing always comes as a surprise. It only lasts a few seconds, but your whole body joins in.",
      "What exactly happens then? Your nose is lined with tiny hairs and nerves. They sense everything that comes in: dust, pepper, a cat hair or just a tickle. As soon as something like that irritates those nerves, they instantly send a signal to your brain.",
      "Your brain takes that signal very seriously. It gives the order for a reflex: a movement you cannot stop yourself. Your lungs fill with air and the muscles in your chest and belly all tighten at once.",
      "Then comes the blast. The air shoots out of your nose and mouth at enormous speed, sometimes as fast as one hundred and fifty kilometres an hour. Thousands of tiny droplets fly along into the room, sometimes several metres away.",
      "That may sound over the top, but it is very useful. With that hard gust of wind your body blows away the dust or the crumb, before it can get in any deeper. That is why you hold your elbow in front of your mouth when you sneeze: then the droplets stay with you."
    ]
  },
  words: [
    { nl: 'kriebel', en: 'tickle', defNl: 'een licht gevoel dat je bijna moet krabben of niezen', defEn: 'a light feeling that makes you want to scratch or sneeze' },
    { nl: 'zenuwen', en: 'nerves', defNl: 'dunne draadjes in je lijf die signalen naar je hersenen sturen', defEn: 'thin threads in your body that send signals to your brain' },
    { nl: 'reflex', en: 'reflex', defNl: 'een beweging die je lichaam vanzelf doet, zonder dat je erover nadenkt', defEn: 'a movement your body makes automatically, without you thinking about it' }
  ],
  questions: [
    { id: 'q1', type: 'mc', skill: 'letterlijk',
      q: { nl: 'Wat voelen de piepkleine haartjes en zenuwen in je neus?',
           en: 'What do the tiny hairs and nerves in your nose sense?' },
      options: [
        { nl: 'Alles wat er in je neus binnenkomt, zoals stof of peper', en: 'Everything that comes into your nose, like dust or pepper' },
        { nl: 'Hoe warm het buiten is', en: 'How warm it is outside' },
        { nl: 'Of je moe bent', en: 'Whether you are tired' },
        { nl: 'Hoeveel je hebt gegeten', en: 'How much you have eaten' }
      ], answer: 0,
      explain: { nl: 'Alinea 2: die voelen alles wat er binnenkomt: stof, peper, een haartje van de kat of een kriebel.',
                 en: 'Paragraph 2: they sense everything that comes in: dust, pepper, a cat hair or a tickle.' } },
    { id: 'q2', type: 'tf', skill: 'letterlijk',
      q: { nl: 'Een nies kan met een snelheid van meer dan honderd kilometer per uur je neus uit schieten.',
           en: 'A sneeze can shoot out of your nose faster than one hundred kilometres an hour.' },
      answer: true,
      explain: { nl: 'Alinea 4: soms wel honderdvijftig kilometer per uur.',
                 en: 'Paragraph 4: sometimes as fast as one hundred and fifty kilometres an hour.' } },
    { id: 'q3', type: 'gap', skill: 'woordenschat',
      q: { nl: 'Een reflex is een beweging die ___.', en: 'A reflex is a movement that ___.' },
      options: [
        { nl: 'je lichaam vanzelf doet, zonder dat je erover nadenkt', en: 'your body makes automatically, without you thinking about it' },
        { nl: 'je heel langzaam bedenkt', en: 'you think up very slowly' },
        { nl: 'alleen in de nacht gebeurt', en: 'only happens at night' },
        { nl: 'je expres oefent voor een wedstrijd', en: 'you deliberately practise for a match' }
      ], answer: 0,
      explain: { nl: 'Alinea 3 legt uit dat een reflex een beweging is die je zelf niet kunt tegenhouden.',
                 en: 'Paragraph 3 explains that a reflex is a movement you cannot stop yourself.' } },
    { id: 'q4', type: 'order', skill: 'volgorde',
      q: { nl: 'Zet de stappen van het niezen op volgorde.', en: 'Put the steps of sneezing in order.' },
      items: [
        { nl: 'Iets prikkelt de zenuwen in je neus.', en: 'Something irritates the nerves in your nose.' },
        { nl: 'De zenuwen sturen een seintje naar je hersenen.', en: 'The nerves send a signal to your brain.' },
        { nl: 'De spieren in je borst en buik spannen zich aan.', en: 'The muscles in your chest and belly tighten.' },
        { nl: 'De lucht schiet met grote vaart naar buiten.', en: 'The air shoots outward at great speed.' }
      ], answer: [0, 1, 2, 3],
      explain: { nl: 'Alinea 2 tot en met 4 beschrijven precies deze volgorde.',
                 en: 'Paragraphs 2 to 4 describe exactly this order.' } },
    { id: 'q5', type: 'mc', skill: 'hoofdgedachte',
      q: { nl: 'Waar gaat deze tekst vooral over?', en: 'What is this text mainly about?' },
      options: [
        { nl: 'Waarom en hoe je moet niezen', en: 'Why and how you sneeze' },
        { nl: 'Hoe je een verkoudheid voorkomt', en: 'How to prevent a cold' },
        { nl: 'Waarom katten haren verliezen', en: 'Why cats shed hair' },
        { nl: 'Hoe je hersenen werken tijdens het slapen', en: 'How your brain works while you sleep' }
      ], answer: 0,
      explain: { nl: 'Elke alinea gaat over de reden en het proces van niezen.',
                 en: 'Every paragraph is about the reason and the process of sneezing.' } }
  ]
},

{
  id: 'lichaam-7', topic: 'lichaam', level: 2, emoji: '🩹', scene: 'body',
  title: { nl: 'Je huid: het grootste orgaan', en: 'Your skin: the biggest organ' },
  text: {
    nl: [
      "Je huid is je grootste orgaan, groter dan je hart of je longen. Bij een volwassene is hij ongeveer twee vierkante meter groot: net zo groot als een deken voor een tweepersoonsbed. Toch denk je er zelden aan, want je huid werkt altijd door zonder dat je het merkt.",
      "Je huid is vooral een muur. Ze houdt water binnen je lijf en houdt vuil, bacteriën en te veel zonlicht buiten. Zonder die muur zou je lichaam binnen een paar dagen uitdrogen of ziek worden van de kleinste besmetting.",
      "Daarnaast is je huid een enorm zintuig. Er zitten miljoenen zenuwuiteinden in die voelen of iets zacht, hard, warm of koud is. Op je vingertoppen zitten de meeste: daarom lees je met je vingers ook braille, en daarom voel je een splinter sneller in je vinger dan in je rug.",
      "Je huid repareert zichzelf ook voortdurend. De bovenste laag bestaat uit dode cellen die steeds afschilferen, zoals stofjes die van je afvallen. Daaronder maken nieuwe cellen zich elke dag klaar om die plek in te nemen. Een schaafwond is binnen een paar dagen bedekt met een nieuw laagje huid.",
      "Ten slotte regelt je huid je temperatuur. Wordt het te warm in je lijf, dan gaan je zweetklieren aan het werk. Het zweet verdampt op je huid, en juist dat verdampen koelt je af, net zoals een natte handdoek in de wind afkoelt.",
      "Al die taken samen maken je huid tot een van de knapste onderdelen van je lichaam: een muur, een zintuig, een reparateur en een airconditioning, allemaal tegelijk."
    ],
    en: [
      "Your skin is your biggest organ, bigger than your heart or your lungs. In an adult it measures about two square metres: as big as a blanket for a double bed. Yet you rarely think about it, because your skin keeps working without you noticing.",
      "Your skin is mainly a wall. It keeps water inside your body and keeps dirt, bacteria and too much sunlight out. Without that wall your body would dry out within a few days, or fall ill from the smallest infection.",
      "Your skin is also a huge sense organ. It holds millions of nerve endings that feel whether something is soft, hard, warm or cold. Your fingertips have the most: that is why you can also read braille with your fingers, and why you feel a splinter faster in your finger than in your back.",
      "Your skin also repairs itself constantly. The top layer is made of dead cells that keep flaking off, like little bits of dust falling away from you. Underneath, new cells get ready every day to take that spot. A graze is covered with a new layer of skin within a few days.",
      "Finally, your skin controls your temperature. When your body gets too warm, your sweat glands go to work. The sweat evaporates on your skin, and it is exactly that evaporating that cools you down, just like a wet towel cools down in the wind.",
      "Together all these jobs make your skin one of the cleverest parts of your body: a wall, a sense organ, a repairer and an air conditioner, all at once."
    ]
  },
  words: [
    { nl: 'zintuig', en: 'sense organ', defNl: 'een deel van je lichaam waarmee je iets waarneemt, zoals voelen of zien', defEn: 'a body part you use to sense things, like touch or sight' },
    { nl: 'verdampen', en: 'to evaporate', defNl: 'van vloeistof veranderen in damp', defEn: 'turning from a liquid into vapour' },
    { nl: 'schaafwond', en: 'graze', defNl: 'een wondje waarbij de bovenste laag huid eraf is', defEn: 'a small wound where the top layer of skin has come off' }
  ],
  questions: [
    { id: 'q1', type: 'mc', skill: 'letterlijk',
      q: { nl: 'Hoeveel vierkante meter huid heeft een volwassene ongeveer?',
           en: 'How many square metres of skin does an adult have, roughly?' },
      options: [
        { nl: 'Ongeveer twee vierkante meter', en: 'About two square metres' },
        { nl: 'Ongeveer twintig vierkante meter', en: 'About twenty square metres' },
        { nl: 'Ongeveer een halve vierkante meter', en: 'About half a square metre' },
        { nl: 'Ongeveer tien vierkante meter', en: 'About ten square metres' }
      ], answer: 0,
      explain: { nl: 'Alinea 1: bij een volwassene is de huid ongeveer twee vierkante meter groot.',
                 en: 'Paragraph 1: in an adult the skin measures about two square metres.' } },
    { id: 'q2', type: 'mc', skill: 'gevolgtrekking',
      q: { nl: 'Waarom voel je een splinter sneller in je vinger dan in je rug?',
           en: 'Why do you feel a splinter faster in your finger than in your back?' },
      options: [
        { nl: 'Omdat er op je vingertoppen de meeste zenuwuiteinden zitten', en: 'Because your fingertips have the most nerve endings' },
        { nl: 'Omdat je rug dikkere huid heeft', en: 'Because your back has thicker skin' },
        { nl: 'Omdat je vingers warmer zijn', en: 'Because your fingers are warmer' },
        { nl: 'Omdat je rug minder bloed heeft', en: 'Because your back has less blood' }
      ], answer: 0,
      explain: { nl: 'Alinea 3: op je vingertoppen zitten de meeste zenuwuiteinden.',
                 en: 'Paragraph 3: your fingertips have the most nerve endings.' } },
    { id: 'q3', type: 'gap', skill: 'woordenschat',
      q: { nl: 'Verdampen betekent dat iets ___.', en: 'To evaporate means something ___.' },
      options: [
        { nl: 'van vloeistof in damp verandert', en: 'turns from a liquid into vapour' },
        { nl: 'keihard wordt', en: 'becomes rock hard' },
        { nl: 'van kleur verandert', en: 'changes colour' },
        { nl: 'kouder wordt dan ijs', en: 'gets colder than ice' }
      ], answer: 0,
      explain: { nl: 'Alinea 5: het zweet verdampt op je huid, en dat verdampen koelt je af.',
                 en: 'Paragraph 5: the sweat evaporates on your skin, and that evaporating cools you down.' } },
    { id: 'q4', type: 'tf', skill: 'letterlijk',
      q: { nl: 'Zweet koelt je af doordat het op je huid verdampt.', en: 'Sweat cools you down because it evaporates on your skin.' },
      answer: true,
      explain: { nl: 'Alinea 5 zegt het letterlijk: juist dat verdampen koelt je af.',
                 en: 'Paragraph 5 says it literally: it is exactly that evaporating that cools you down.' } },
    { id: 'q5', type: 'match', skill: 'woordenschat',
      q: { nl: 'Klik het woord en daarna de juiste betekenis.', en: 'Click the word and then the correct meaning.' },
      pairs: [
        { word: { nl: 'zintuig', en: 'sense organ' }, meaning: { nl: 'een deel van je lichaam waarmee je iets waarneemt', en: 'a body part you use to sense things' } },
        { word: { nl: 'verdampen', en: 'to evaporate' }, meaning: { nl: 'van vloeistof veranderen in damp', en: 'turning from a liquid into vapour' } },
        { word: { nl: 'schaafwond', en: 'graze' }, meaning: { nl: 'een wondje waarbij de bovenste laag huid eraf is', en: 'a small wound where the top layer of skin has come off' } }
      ],
      explain: { nl: 'Deze drie woorden komen allemaal uit de tekst.', en: 'All three words come from the text.' } },
    { id: 'q6', type: 'mc', skill: 'hoofdgedachte',
      q: { nl: 'Wat is de hoofdgedachte van deze tekst?', en: 'What is the main idea of this text?' },
      options: [
        { nl: 'Je huid doet veel meer dan je denkt: beschermen, voelen, repareren en afkoelen', en: 'Your skin does far more than you think: protecting, sensing, repairing and cooling' },
        { nl: 'Je huid is twee vierkante meter groot', en: 'Your skin is two square metres in size' },
        { nl: 'Zweet is vies', en: 'Sweat is dirty' },
        { nl: 'Braille is een taal voor blinden', en: 'Braille is a language for the blind' }
      ], answer: 0,
      explain: { nl: 'Elke alinea beschrijft een andere taak van de huid: muur, zintuig, reparateur en airconditioning.',
                 en: 'Every paragraph describes a different job of the skin: wall, sense organ, repairer and air conditioner.' } }
  ]
},

{
  id: 'lichaam-8', topic: 'lichaam', level: 3, emoji: '📏', scene: 'body',
  title: { nl: 'Waarom groeien sommige kinderen sneller dan anderen?', en: 'Why do some kids grow faster than others?' },
  text: {
    nl: [
      "Sta je weleens naast een klasgenoot die opeens een kop groter is, terwijl jullie vorig jaar nog even lang waren? Dat is geen toeval en zeker geen oneerlijkheid. Ieder lichaam heeft zijn eigen tempo, en dat tempo ligt voor een groot deel al vast voordat je geboren wordt.",
      "Het belangrijkste stuurt de erfelijkheid. In je cellen zit DNA, een soort bouwtekening die je van je ouders hebt gekregen. Die bouwtekening bepaalt niet alleen hoe lang je uiteindelijk wordt, maar ook wannéér je groeit. Kinderen van lange ouders groeien vaak, maar niet altijd, ook zelf lang en vaak op een vergelijkbare leeftijd als hun vader of moeder vroeger.",
      "Groeien gebeurt niet gelijkmatig, met elke dag een millimeter erbij. Het gaat met vlagen. Een hormoon, een stofje dat door je bloed reist en cellen een opdracht geeft, zet die vlagen in gang. Vooral 's nachts, in de diepe slaap, maakt je lichaam het meeste groeihormoon aan. Daarom is voldoende slaap voor een kind even belangrijk als goed eten.",
      "Rond het begin van de puberteit versnelt de groei flink, bij het ene kind rond het tiende jaar, bij het andere pas rond het veertiende. Meisjes beginnen daarbij vaak eerder dan jongens. Wie op zijn elfde nog niet is gegroeid, hoeft zich dus geen zorgen te maken: die groeispurt kan nog komen.",
      "Ook voeding en gezondheid spelen mee. Een kind dat te weinig eet of vaak ziek is, groeit tijdelijk langzamer, en haalt dat later vaak weer in. Dat verschil in tempo tussen kinderen is dus volkomen normaal: de een is op zijn tiende al bijna volgroeid, de ander schiet pas op zijn zestiende omhoog.",
      "Kortom: hoe lang je wordt en wanneer je groeit, hangt af van een mix van erfelijkheid, hormonen, slaap en voeding. Die mix is bij ieder kind anders, en daarom loopt niemands groeicurve precies gelijk met die van een klasgenoot."
    ],
    en: [
      "Do you ever stand next to a classmate who has suddenly become a head taller, even though you were the same height last year? That is not chance and certainly not unfair. Every body has its own pace, and that pace is largely set before you are even born.",
      "The most important factor is heredity. Inside your cells is DNA, a kind of blueprint you got from your parents. That blueprint decides not only how tall you eventually become, but also when you grow. Children of tall parents often, though not always, grow tall themselves too, and often at an age similar to when their father or mother did.",
      "Growing does not happen evenly, with a millimetre added every day. It comes in bursts. A hormone, a substance that travels through your blood and gives cells an order, sets those bursts going. Your body makes the most growth hormone especially at night, during deep sleep. That is why enough sleep is just as important for a child as eating well.",
      "Around the start of puberty, growth speeds up considerably, in one child around age ten, in another only around age fourteen. Girls often start earlier than boys in this. So anyone who has not grown much by age eleven need not worry: that growth spurt can still come.",
      "Diet and health also play a part. A child who eats too little or is often ill grows more slowly for a while, and often catches up again later. So that difference in pace between children is completely normal: one child is almost fully grown by age ten, while another only shoots up at sixteen.",
      "In short: how tall you become and when you grow depends on a mix of heredity, hormones, sleep and diet. That mix is different for every child, which is why nobody's growth curve runs exactly parallel to a classmate's."
    ]
  },
  words: [
    { nl: 'erfelijkheid', en: 'heredity', defNl: 'dat eigenschappen van je ouders op jou overgaan', defEn: 'traits from your parents passing on to you' },
    { nl: 'groeihormoon', en: 'growth hormone', defNl: 'een stofje in je bloed dat je lichaam laat groeien', defEn: 'a substance in your blood that makes your body grow' },
    { nl: 'groeispurt', en: 'growth spurt', defNl: 'een periode waarin je opeens veel groeit', defEn: 'a period when you suddenly grow a lot' }
  ],
  questions: [
    { id: 'q1', type: 'mc', skill: 'letterlijk',
      q: { nl: 'Wanneer maakt je lichaam het meeste groeihormoon aan?', en: 'When does your body make the most growth hormone?' },
      options: [
        { nl: "Vooral 's nachts, in de diepe slaap", en: 'Especially at night, during deep sleep' },
        { nl: 'Vooral tijdens het sporten', en: 'Mainly during sports' },
        { nl: 'Vooral tijdens het eten', en: 'Mainly while eating' },
        { nl: "Vooral 's ochtends vroeg", en: 'Mainly early in the morning' }
      ], answer: 0,
      explain: { nl: 'Alinea 3: vooral \'s nachts, in de diepe slaap, maakt je lichaam het meeste groeihormoon aan.',
                 en: 'Paragraph 3: your body makes the most growth hormone especially at night, during deep sleep.' } },
    { id: 'q2', type: 'mc', skill: 'verwijswoorden',
      q: { nl: '"Die bouwtekening bepaalt niet alleen hoe lang je wordt." Waar verwijst "die bouwtekening" naar?',
           en: '"That blueprint decides not only how tall you become." What does "that blueprint" refer to?' },
      options: [
        { nl: 'Naar het DNA in je cellen', en: 'To the DNA in your cells' },
        { nl: 'Naar de groeispurt', en: 'To the growth spurt' },
        { nl: 'Naar het hormoon in je bloed', en: 'To the hormone in your blood' },
        { nl: 'Naar de klasgenoot', en: 'To the classmate' }
      ], answer: 0,
      explain: { nl: 'De zin ervoor noemt DNA als een soort bouwtekening die je van je ouders hebt gekregen.',
                 en: 'The sentence before names DNA as a kind of blueprint you got from your parents.' } },
    { id: 'q3', type: 'mc', skill: 'gevolgtrekking',
      q: { nl: 'Waarom hoeft een kind van elf dat nog niet gegroeid is, zich geen zorgen te maken?',
           en: 'Why does an eleven-year-old who has not grown much yet not need to worry?' },
      options: [
        { nl: 'Omdat de groeispurt bij het ene kind later begint dan bij het andere', en: 'Because the growth spurt starts later for some children than for others' },
        { nl: 'Omdat groeien niet belangrijk is', en: 'Because growing is not important' },
        { nl: 'Omdat jongens sowieso niet groeien', en: 'Because boys do not grow at all' },
        { nl: 'Omdat hormonen op die leeftijd niet werken', en: 'Because hormones do not work at that age' }
      ], answer: 0,
      explain: { nl: 'Alinea 4: bij het ene kind rond het tiende jaar, bij het andere pas rond het veertiende.',
                 en: 'Paragraph 4: in one child around age ten, in another only around age fourteen.' } },
    { id: 'q4', type: 'gap', skill: 'woordenschat',
      q: { nl: 'Een groeispurt is ___.', en: 'A growth spurt is ___.' },
      options: [
        { nl: 'een periode waarin je opeens veel groeit', en: 'a period when you suddenly grow a lot' },
        { nl: 'een soort hormoon', en: 'a kind of hormone' },
        { nl: 'een stuk DNA', en: 'a piece of DNA' },
        { nl: 'een ziekte die je groei stopt', en: 'an illness that stops your growth' }
      ], answer: 0,
      explain: { nl: 'Alinea 4 gebruikt het woord voor de periode waarin de groei flink versnelt.',
                 en: 'Paragraph 4 uses the word for the period when growth speeds up considerably.' } },
    { id: 'q5', type: 'mc', skill: 'structuur',
      q: { nl: 'Waarom begint de tekst met de vraag over de klasgenoot die opeens een kop groter is?',
           en: 'Why does the text open with the question about the classmate who suddenly became a head taller?' },
      options: [
        { nl: 'Om een herkenbaar voorbeeld te geven voordat de uitleg over groeien begint', en: 'To give a recognisable example before the explanation about growing begins' },
        { nl: 'Om te bewijzen dat groeien oneerlijk is', en: 'To prove that growing is unfair' },
        { nl: 'Om een grap te maken over lange kinderen', en: 'To make a joke about tall children' },
        { nl: 'Om de hoofdgedachte al aan het begin te herhalen', en: 'To repeat the main idea right at the start' }
      ], answer: 0,
      explain: { nl: 'De openingsvraag lokt een herkenbare situatie op, waarna de tekst uitlegt waarom dat zo is.',
                 en: 'The opening question evokes a recognisable situation, after which the text explains why that happens.' } },
    { id: 'q6', type: 'mc', skill: 'hoofdgedachte',
      q: { nl: 'Wat is de hoofdgedachte van deze tekst?', en: 'What is the main idea of this text?' },
      options: [
        { nl: 'Hoe snel en wanneer je groeit, verschilt per kind door een mix van erfelijkheid, hormonen, slaap en voeding', en: 'How fast and when you grow differs per child due to a mix of heredity, hormones, sleep and diet' },
        { nl: 'Meisjes groeien altijd sneller dan jongens', en: 'Girls always grow faster than boys' },
        { nl: 'Groeihormoon werkt alleen in de nacht', en: 'Growth hormone only works at night' },
        { nl: 'Elk kind is op zijn tiende volgroeid', en: 'Every child is fully grown by age ten' }
      ], answer: 0,
      explain: { nl: 'Elke alinea voegt een andere factor toe die samen het groeitempo bepalen.',
                 en: 'Every paragraph adds a different factor that together determine the pace of growth.' } },
    { id: 'q7', type: 'tf', skill: 'letterlijk',
      q: { nl: 'Een kind dat een tijd lang ziek is geweest, groeit daarna nooit meer normaal.',
           en: 'A child who has been ill for a while never grows normally again afterwards.' },
      answer: false,
      explain: { nl: 'Alinea 5: het kind groeit tijdelijk langzamer, maar haalt dat later vaak weer in.',
                 en: 'Paragraph 5: the child grows more slowly for a while, but often catches up again later.' } }
  ]
},

{
  id: 'lichaam-9', topic: 'lichaam', level: 4, emoji: '🧠', scene: 'lab',
  title: { nl: 'Hoe je hersenen herinneringen opslaan', en: 'How your brain stores memories' },
  text: {
    nl: [
      "Je fietst langs de plek waar je vorige zomer bent gevallen, en meteen zie je het tafereel weer voor je: het asfalt, de schrik, de pleister die je moeder erop plakte. Een herinnering lijkt op een filmpje dat ergens in je hoofd is opgeslagen. Maar zo simpel werkt het niet.",
      "Elke gebeurtenis wordt eerst heel kort vastgehouden in je kortetermijngeheugen, een soort tijdelijk kladblok dat maar een paar seconden tot minuten meegaat. De meeste van die indrukken worden meteen weer weggegooid: je hersenen kunnen onmogelijk alles bewaren wat je elke dag meemaakt.",
      "Alleen wat belangrijk genoeg lijkt, wordt overgezet naar het langetermijngeheugen. Die overzetting, consolidatie genoemd, gebeurt voor een groot deel 's nachts. Terwijl je slaapt, speelt een diep hersengebied de gebeurtenissen van die dag opnieuw af, en worden de verbindingen tussen hersencellen die bij die herinnering horen steviger. Wie te weinig slaapt, onthoudt daardoor minder van wat hij die dag heeft geleerd.",
      "Twee dingen maken een herinnering extra sterk. Het eerste is herhaling: een som die je vaak oefent, of een liedje dat je tien keer hoort, slijt een dieper spoor in je hersenen. Het tweede is emotie. Gebeurtenissen waarbij je heel bang, blij of verdrietig was, blijven vaak feller hangen dan een gewone doordeweekse dinsdag, ook al is die net zo lang geleden.",
      "Er is nog iets vreemds aan de hand. Elke keer dat je een herinnering ophaalt, wordt hij instabiel, en moet je hersenen hem daarna weer opnieuw vastleggen. Bij dat opnieuw vastleggen sluipen er kleine veranderingen in: een detail dat verschuift, een kleur die anders wordt, een zin die iemand anders zei dan je denkt. Vandaar dat twee mensen die hetzelfde meemaakten, elkaar achteraf soms tegenspreken.",
      "Dat heeft grote gevolgen. Een getuige die een gebeurtenis steeds opnieuw navertelt, gelooft na een tijdje soms in details die er nooit zijn geweest. Onderzoekers noemen dit een vals geheugen: geen leugen, maar een herinnering die stilletjes is bijgeschaafd.",
      "Een herinnering is dus geen filmpje dat onveranderd in een la ligt, maar meer een verhaal dat je hersenen telkens opnieuw vertellen, en dat bij elk vertellen een klein beetje verschuift."
    ],
    en: [
      "You cycle past the spot where you fell last summer, and at once you see the whole scene again: the tarmac, the fright, the plaster your mother stuck on. A memory seems like a little film stored somewhere in your head. But it does not work that simply.",
      "Every event is first held very briefly in your short-term memory, a kind of temporary notepad that only lasts a few seconds to minutes. Most of those impressions are thrown away again immediately: your brain simply cannot keep everything you experience every day.",
      "Only what seems important enough gets moved into your long-term memory. That transfer, called consolidation, happens largely at night. While you sleep, a deep brain area replays the day's events, and the connections between the brain cells belonging to that memory become stronger. That is why someone who sleeps too little remembers less of what they learned that day.",
      "Two things make a memory extra strong. The first is repetition: a sum you practise often, or a song you hear ten times, wears a deeper track into your brain. The second is emotion. Events where you were very scared, happy or sad tend to stick more vividly than an ordinary weekday Tuesday, even if it happened just as long ago.",
      "There is something else strange going on. Every time you retrieve a memory, it briefly becomes unstable, and your brain then has to lock it in again. During that re-locking, small changes creep in: a detail that shifts, a colour that changes, a sentence someone said differently than you think. That is why two people who experienced the same thing sometimes contradict each other afterwards.",
      "That has big consequences. A witness who keeps retelling an event sometimes ends up believing in details that never happened. Researchers call this a false memory: not a lie, but a memory that has been quietly touched up.",
      "So a memory is not a little film lying unchanged in a drawer, but more like a story your brain tells over and over, shifting a little each time it is told."
    ]
  },
  words: [
    { nl: 'kortetermijngeheugen', en: 'short-term memory', defNl: 'het deel van je geheugen dat iets maar heel even vasthoudt', defEn: 'the part of your memory that holds something only briefly' },
    { nl: 'consolidatie', en: 'consolidation', defNl: 'het overzetten van een herinnering naar je langetermijngeheugen', defEn: 'moving a memory into your long-term memory' },
    { nl: 'vals geheugen', en: 'false memory', defNl: 'een herinnering aan iets dat in werkelijkheid nooit zo is gebeurd', defEn: 'a memory of something that never actually happened that way' }
  ],
  questions: [
    { id: 'q1', type: 'mc', skill: 'letterlijk',
      q: { nl: 'Hoe lang blijft een indruk ongeveer in je kortetermijngeheugen?',
           en: 'How long does an impression stay in your short-term memory, roughly?' },
      options: [
        { nl: 'Een paar seconden tot minuten', en: 'A few seconds to minutes' },
        { nl: 'Een paar dagen', en: 'A few days' },
        { nl: 'Je hele leven', en: 'Your whole life' },
        { nl: 'Precies één nacht', en: 'Exactly one night' }
      ], answer: 0,
      explain: { nl: 'Alinea 2: een tijdelijk kladblok dat maar een paar seconden tot minuten meegaat.',
                 en: 'Paragraph 2: a temporary notepad that only lasts a few seconds to minutes.' } },
    { id: 'q2', type: 'multi', skill: 'letterlijk',
      q: { nl: 'Welke twee dingen maken een herinnering volgens de tekst extra sterk? Kies er 2.',
           en: 'Which two things make a memory extra strong, according to the text? Pick 2.' },
      options: [
        { nl: 'Herhaling', en: 'Repetition' },
        { nl: 'Emotie', en: 'Emotion' },
        { nl: 'De kleur van de gebeurtenis', en: 'The colour of the event' },
        { nl: 'Hoe laat het gebeurde', en: 'What time it happened' }
      ], answer: [0, 1],
      explain: { nl: 'Alinea 4 noemt precies die twee: herhaling en emotie.',
                 en: 'Paragraph 4 names exactly those two: repetition and emotion.' } },
    { id: 'q3', type: 'mc', skill: 'verwijswoorden',
      q: { nl: '"Bij dat opnieuw vastleggen sluipen er kleine veranderingen in." Waar verwijst "dat opnieuw vastleggen" naar?',
           en: '"During that re-locking, small changes creep in." What does "that re-locking" refer to?' },
      options: [
        { nl: 'Naar het weer vastleggen van een herinnering nadat je hem hebt opgehaald', en: 'To locking a memory in again after you have retrieved it' },
        { nl: 'Naar het maken van een compleet nieuwe herinnering', en: 'To creating a completely new memory' },
        { nl: 'Naar het consolideren tijdens de slaap', en: 'To consolidating during sleep' },
        { nl: 'Naar het navertellen aan een getuige', en: 'To retelling something to a witness' }
      ], answer: 0,
      explain: { nl: 'De zin ervoor zegt dat je hersenen de herinnering daarna weer opnieuw moeten vastleggen.',
                 en: 'The sentence before says your brain then has to lock the memory in again.' } },
    { id: 'q4', type: 'mc', skill: 'gevolgtrekking',
      q: { nl: 'Waarom onthoudt iemand die te weinig slaapt minder van wat hij die dag heeft geleerd?',
           en: 'Why does someone who sleeps too little remember less of what they learned that day?' },
      options: [
        { nl: 'Omdat consolidatie, het overzetten naar het langetermijngeheugen, vooral \'s nachts gebeurt', en: 'Because consolidation, the transfer to long-term memory, happens mostly at night' },
        { nl: 'Omdat hersenen overdag helemaal niet werken', en: 'Because the brain does not work at all during the day' },
        { nl: 'Omdat hij dan minder emoties voelt', en: 'Because they feel fewer emotions then' },
        { nl: 'Omdat een getuige dan minder betrouwbaar is', en: 'Because a witness is then less reliable' }
      ], answer: 0,
      explain: { nl: 'Alinea 3 legt uit dat consolidatie voor een groot deel \'s nachts gebeurt.',
                 en: 'Paragraph 3 explains that consolidation happens largely at night.' } },
    { id: 'q5', type: 'gap', skill: 'woordenschat',
      q: { nl: 'Een vals geheugen is ___.', en: 'A false memory is ___.' },
      options: [
        { nl: 'een herinnering aan iets dat nooit precies zo is gebeurd', en: 'a memory of something that never exactly happened that way' },
        { nl: 'een herinnering die je expres verzint om te liegen', en: 'a memory you deliberately make up to lie' },
        { nl: 'een herinnering zonder enige emotie', en: 'a memory without any emotion' },
        { nl: 'een herinnering die je nooit meer terugkrijgt', en: 'a memory you never get back' }
      ], answer: 0,
      explain: { nl: 'Alinea 6: geen leugen, maar een herinnering die stilletjes is bijgeschaafd.',
                 en: 'Paragraph 6: not a lie, but a memory that has been quietly touched up.' } },
    { id: 'q6', type: 'order', skill: 'volgorde',
      q: { nl: 'Zet de stappen van een herinnering op volgorde.', en: 'Put the steps of a memory in order.' },
      items: [
        { nl: 'Een gebeurtenis komt kort in je kortetermijngeheugen.', en: 'An event briefly enters your short-term memory.' },
        { nl: 'De belangrijke informatie wordt \'s nachts overgezet naar je langetermijngeheugen.', en: 'The important information is moved into your long-term memory at night.' },
        { nl: 'Later haal je de herinnering weer op, en wordt hij instabiel.', en: 'Later you retrieve the memory again, and it becomes unstable.' },
        { nl: 'Je hersenen leggen de herinnering opnieuw vast, met kleine veranderingen.', en: 'Your brain locks the memory in again, with small changes.' }
      ], answer: [0, 1, 2, 3],
      explain: { nl: 'Alinea 2, 3 en 5 beschrijven precies deze volgorde.',
                 en: 'Paragraphs 2, 3 and 5 describe exactly this order.' } },
    { id: 'q7', type: 'mc', skill: 'structuur',
      q: { nl: 'Waarom begint de tekst met het voorbeeld van de val van vorige zomer?',
           en: 'Why does the text open with the example of falling last summer?' },
      options: [
        { nl: 'Om een herkenbaar voorbeeld te geven voordat de uitleg over het geheugen begint', en: 'To give a recognisable example before the explanation about memory begins' },
        { nl: 'Om te laten zien dat fietsen gevaarlijk is', en: 'To show that cycling is dangerous' },
        { nl: 'Om de hoofdgedachte alvast samen te vatten', en: 'To already sum up the main idea' },
        { nl: 'Om te bewijzen dat getuigen altijd liegen', en: 'To prove that witnesses always lie' }
      ], answer: 0,
      explain: { nl: 'Het voorbeeld maakt de rest van de uitleg over het geheugen herkenbaar.',
                 en: 'The example makes the rest of the explanation about memory recognisable.' } },
    { id: 'q8', type: 'mc', skill: 'hoofdgedachte',
      q: { nl: 'Wat is de hoofdgedachte van deze tekst?', en: 'What is the main idea of this text?' },
      options: [
        { nl: 'Herinneringen worden opgeslagen en telkens een beetje veranderd als je ze ophaalt, vooral door slaap, herhaling en emotie', en: 'Memories are stored and slightly changed each time you retrieve them, especially through sleep, repetition and emotion' },
        { nl: 'Slapen is alleen goed voor je lichaam, niet voor je hersenen', en: 'Sleep is only good for your body, not for your brain' },
        { nl: 'Getuigen liegen vaak expres', en: 'Witnesses often lie on purpose' },
        { nl: 'Een herinnering is een filmpje dat nooit verandert', en: 'A memory is a little film that never changes' }
      ], answer: 0,
      explain: { nl: 'Elke alinea voegt een aspect toe: opslag, versterking, verandering en gevolgen.',
                 en: 'Every paragraph adds an aspect: storage, strengthening, change and consequences.' } }
  ]
},

{
  id: 'lichaam-10', topic: 'lichaam', level: 5, emoji: '⏰', scene: 'school',
  title: { nl: 'Moeten scholen later beginnen?', en: 'Should schools start later?' },
  text: {
    nl: [
      "Half acht 's ochtends, en de helft van de klas zit er nog met dichte ogen bij. Niet omdat ze lui zijn, maar omdat hun lichaam op dat moment eigenlijk nog in de diepste slaap zou moeten zitten. Steeds meer wetenschappers en ouders stellen daarom een simpele vraag: moeten scholen gewoon later beginnen?",
      "Die vraag komt niet uit de lucht vallen. Rond een jaar of twaalf verschuift de biologische klok van bijna elke tiener een paar uur naar achteren. Het hormoon melatonine, dat je slaperig maakt, komt 's avonds later op gang dan bij een kind of een volwassene. Vroeg naar bed gaan lukt daardoor gewoonweg niet: het lichaam is nog niet moe genoeg.",
      "Het gevolg is dat veel tieners op een schooldag te weinig slaap krijgen. Terwijl ze negen uur nodig hebben, halen ze er in de praktijk vaak zeven. Onderzoek koppelt dat chronische slaaptekort aan een slechter humeur, een zwakker geheugen en zelfs een hoger risico op ongelukken in het verkeer.",
      "Voorstanders van een latere start wijzen op scholen die het al hebben geprobeerd. In de Amerikaanse staat Minnesota schoof een middelbare school het beginuur een uur op, en de cijfers gingen omhoog terwijl het aantal ongelukken van scholieren in de auto daalde. \"Je vecht niet tegen luiheid,\" zegt een slaaponderzoeker, \"je vecht tegen de biologie, en die wint altijd.\"",
      "Toch is de praktijk lastiger dan het idee. Later beginnen betekent ook later eindigen, en dat botst met sporttrainingen die om vier uur beginnen. Ouders die om acht uur op hun werk moeten zijn, kunnen hun kind dan niet meer wegbrengen. En bussen die kinderen van meerdere scholen vervoeren, rijden al krap op schema; een ander begintijd voor één school gooit het hele rooster overhoop.",
      "Er is dus geen simpele knop om over te zetten. Sommige scholen kiezen een tussenweg: een kwartier of half uur later beginnen, gecombineerd met minder huiswerk 's avonds zodat tieners ook echt eerder in bed liggen. Onderzoekers benadrukken dat het beginuur maar één stukje van de puzzel is; wat een tiener 's avonds op zijn telefoon doet, telt net zo zwaar mee.",
      "De biologie van tieners verandert niet, ook al verandert het lesrooster wel. De vraag is dan ook niet alleen wat wetenschappelijk het beste zou zijn, maar ook wat haalbaar is voor gezinnen, sportclubs en buschauffeurs. En wat vind jij: zou jouw school een uur later moeten beginnen?"
    ],
    en: [
      "Half past seven in the morning, and half the class is sitting there with their eyes half shut. Not because they are lazy, but because at that moment their bodies should really still be in the deepest part of sleep. More and more scientists and parents are therefore asking a simple question: should schools simply start later?",
      "That question does not come out of nowhere. Around the age of twelve, the biological clock of almost every teenager shifts a few hours later. The hormone melatonin, which makes you sleepy, kicks in later in the evening than it does for a child or an adult. Going to bed early simply does not work as a result: the body is not tired enough yet.",
      "The result is that many teenagers get too little sleep on a school day. While they need nine hours, in practice they often only get seven. Research links that chronic lack of sleep to a worse mood, a weaker memory and even a higher risk of traffic accidents.",
      "Supporters of a later start point to schools that have already tried it. In the American state of Minnesota, a secondary school pushed its start time back an hour, and grades went up while the number of accidents involving student drivers went down. \"You are not fighting laziness,\" says a sleep researcher, \"you are fighting biology, and biology always wins.\"",
      "Yet in practice it is trickier than the idea suggests. Starting later also means finishing later, which clashes with sports training that starts at four o'clock. Parents who have to be at work by eight can then no longer drop their child off. And buses that carry children from several schools are already running a tight schedule; a different start time for one school throws the whole timetable into chaos.",
      "So there is no simple switch to flip. Some schools choose a middle way: starting a quarter or half an hour later, combined with less homework in the evening so teenagers really do get to bed earlier. Researchers stress that the start time is only one piece of the puzzle; what a teenager does on their phone in the evening counts just as heavily.",
      "Teenagers' biology does not change, even though a timetable can. So the question is not only what would be scientifically best, but also what is realistic for families, sports clubs and bus drivers. And what do you think: should your school start an hour later?"
    ]
  },
  words: [
    { nl: 'melatonine', en: 'melatonin', defNl: 'een hormoon dat je slaperig maakt', defEn: 'a hormone that makes you feel sleepy' },
    { nl: 'chronisch', en: 'chronic', defNl: 'iets dat lang aanhoudt in plaats van maar even', defEn: 'something that lasts a long time instead of just briefly' },
    { nl: 'tussenweg', en: 'middle way', defNl: 'een oplossing die tussen twee uitersten in zit', defEn: 'a solution that lies between two extremes' }
  ],
  questions: [
    { id: 'q1', type: 'mc', skill: 'letterlijk',
      q: { nl: 'Hoeveel uur slaap hebben tieners volgens de tekst nodig, en hoeveel krijgen ze er in de praktijk vaak?',
           en: 'How many hours of sleep do teenagers need according to the text, and how many do they often get in practice?' },
      options: [
        { nl: 'Negen uur nodig, maar vaak maar zeven in de praktijk', en: 'Nine hours needed, but often only seven in practice' },
        { nl: 'Acht uur nodig, en die krijgen ze ook', en: 'Eight hours needed, and they get that too' },
        { nl: 'Zes uur nodig, en tien in de praktijk', en: 'Six hours needed, and ten in practice' },
        { nl: 'Tien uur nodig, en acht in de praktijk', en: 'Ten hours needed, and eight in practice' }
      ], answer: 0,
      explain: { nl: 'Alinea 3: terwijl ze negen uur nodig hebben, halen ze er in de praktijk vaak zeven.',
                 en: 'Paragraph 3: while they need nine hours, in practice they often only get seven.' } },
    { id: 'q2', type: 'sort', skill: 'feitmening',
      q: { nl: 'Feit of mening? Zet elke zin in de goede groep.',
           en: 'Fact or opinion? Put every sentence in the right group.' },
      bins: [{ nl: 'Feit', en: 'Fact' }, { nl: 'Mening', en: 'Opinion' }],
      items: [
        { nl: 'Rond een jaar of twaalf verschuift de biologische klok van bijna elke tiener.', en: 'Around the age of twelve the biological clock of almost every teenager shifts.', bin: 0 },
        { nl: 'Je vecht niet tegen luiheid, je vecht tegen de biologie, en die wint altijd.', en: 'You are not fighting laziness, you are fighting biology, and biology always wins.', bin: 1 },
        { nl: 'In Minnesota schoof een middelbare school het beginuur een uur op.', en: 'In Minnesota a secondary school pushed its start time back an hour.', bin: 0 },
        { nl: 'Een latere schooltijd past beter bij hoe het lichaam van een tiener werkt.', en: 'A later school start suits how a teenager’s body works better.', bin: 1 }
      ],
      explain: { nl: 'De eerste en derde zin zijn meetbare gebeurtenissen; de tweede en vierde zijn oordelen van mensen in het debat.',
                 en: 'The first and third sentences are measurable events; the second and fourth are judgements from people in the debate.' } },
    { id: 'q3', type: 'mc', skill: 'doel',
      q: { nl: 'Wat probeert de schrijver met deze tekst vooral te doen?',
           en: 'What is the writer mainly trying to do with this text?' },
      options: [
        { nl: 'Beide kanten van het debat over schooltijden laten zien, zodat de lezer er zelf over nadenkt', en: 'Show both sides of the debate about school start times, so the reader thinks it over themselves' },
        { nl: 'De lezer overtuigen dat elke school per direct later moet beginnen', en: 'Convince the reader that every school must start later immediately' },
        { nl: 'Uitleggen hoe je \'s avonds sneller in slaap valt', en: 'Explain how to fall asleep faster in the evening' },
        { nl: 'Bewijzen dat ouders ongelijk hebben', en: 'Prove that parents are wrong' }
      ], answer: 0,
      explain: { nl: 'De tekst geeft eerst de wetenschap, dan voor- en tegenargumenten, en eindigt met "En wat vind jij?".',
                 en: 'The text gives the science first, then arguments for and against, and ends with "And what do you think?".' } },
    { id: 'q4', type: 'mc', skill: 'verwijswoorden',
      q: { nl: '"Die vraag komt niet uit de lucht vallen." Waar verwijst "die vraag" naar?',
           en: '"That question does not come out of nowhere." What does "that question" refer to?' },
      options: [
        { nl: 'Naar de vraag of scholen later moeten beginnen', en: 'To the question of whether schools should start later' },
        { nl: 'Naar de vraag hoeveel uur slaap een tiener nodig heeft', en: 'To the question of how many hours of sleep a teenager needs' },
        { nl: 'Naar de vraag waarom bussen krap op schema rijden', en: 'To the question of why buses run a tight schedule' },
        { nl: 'Naar de vraag wat melatonine doet', en: 'To the question of what melatonin does' }
      ], answer: 0,
      explain: { nl: 'Alinea 1 eindigt met precies die vraag; alinea 2 verwijst erop terug.',
                 en: 'Paragraph 1 ends with exactly that question; paragraph 2 refers back to it.' } },
    { id: 'q5', type: 'multi', skill: 'gevolgtrekking',
      q: { nl: 'Welke twee praktische bezwaren tegen een latere schooltijd noemt de tekst? Kies er 2.',
           en: 'Which two practical objections to a later school start does the text mention? Pick 2.' },
      options: [
        { nl: 'Het botst met sporttrainingen die vroeg beginnen', en: 'It clashes with sports training that starts early' },
        { nl: 'Ouders kunnen hun kind dan niet meer wegbrengen voor werk', en: 'Parents can no longer drop their child off before work' },
        { nl: 'Tieners zouden minder huiswerk krijgen', en: 'Teenagers would get less homework' },
        { nl: 'Melatonine zou dan niet meer werken', en: 'Melatonin would stop working' }
      ], answer: [0, 1],
      explain: { nl: 'Alinea 5 noemt precies deze twee praktische problemen.',
                 en: 'Paragraph 5 names exactly these two practical problems.' } },
    { id: 'q6', type: 'tf', skill: 'gevolgtrekking',
      q: { nl: 'Uit de tekst blijkt dat onderzoekers een latere schooltijd zien als de enige oplossing voor slaaptekort bij tieners.',
           en: 'The text shows that researchers see a later school start as the only solution for sleep deprivation among teenagers.' },
      answer: false,
      explain: { nl: 'Alinea 6: het beginuur is maar één stukje van de puzzel; ook het telefoongebruik \'s avonds telt mee.',
                 en: 'Paragraph 6: the start time is only one piece of the puzzle; phone use in the evening counts too.' } },
    { id: 'q7', type: 'mc', skill: 'structuur',
      q: { nl: 'Hoe is deze tekst opgebouwd?', en: 'How is this text structured?' },
      options: [
        { nl: 'Een herkenbare situatie, dan de biologie erachter, dan argumenten voor, dan argumenten tegen, dan een nuance en een open vraag', en: 'A recognisable situation, then the biology behind it, then arguments for, then arguments against, then a nuance and an open question' },
        { nl: 'Alleen argumenten tegen een latere schooltijd', en: 'Only arguments against a later school start' },
        { nl: 'Een verhaal over één leerling in Minnesota', en: 'A story about one student in Minnesota' },
        { nl: 'Een opsomming van hormonen', en: 'A list of hormones' }
      ], answer: 0,
      explain: { nl: 'Alinea 1 schetst het beeld, 2-3 de biologie, 4 de voorstanders, 5 de tegenstanders, 6 de nuance, 7 de open vraag.',
                 en: 'Paragraph 1 sets the scene, 2-3 the biology, 4 the supporters, 5 the opponents, 6 the nuance, 7 the open question.' } },
    { id: 'q8', type: 'mc', skill: 'samenvatten',
      q: { nl: 'Welke samenvatting past het beste bij de hele tekst?', en: 'Which summary fits the whole text best?' },
      options: [
        { nl: 'Tieners hebben biologisch gezien een latere klok, wat pleit voor later beginnen, maar praktische bezwaren zoals sport, werk en bussen maken het lastig, en het beginuur is maar één deel van de oplossing.', en: 'Teenagers biologically have a later clock, which argues for starting later, but practical objections such as sport, work and buses make it difficult, and the start time is only one part of the solution.' },
        { nl: 'Melatonine zorgt ervoor dat kinderen altijd om acht uur naar bed gaan.', en: 'Melatonin makes sure children always go to bed at eight o’clock.' },
        { nl: 'In Minnesota beginnen nu alle scholen een uur later.', en: 'In Minnesota all schools now start an hour later.' },
        { nl: 'Bussen kunnen niet meer rijden als een school later begint.', en: 'Buses can no longer run if a school starts later.' }
      ], answer: 0,
      explain: { nl: 'De juiste samenvatting bevat de biologie, de twee kanten én de nuance. De andere drie zijn losse details uit één alinea.',
                 en: 'The correct summary holds the biology, both sides and the nuance. The other three are single details from one paragraph.' } },
    { id: 'q9', type: 'mc', skill: 'woordenschat',
      q: { nl: 'Wat betekent het woord "tussenweg" in deze tekst?', en: 'What does the word "tussenweg" (middle way) mean in this text?' },
      options: [
        { nl: 'Een oplossing die tussen twee uitersten in zit, zoals een kwartier later beginnen', en: 'A solution that lies between two extremes, such as starting a quarter of an hour later' },
        { nl: 'De weg naar school', en: 'The road to school' },
        { nl: 'Een pauze tussen twee lessen', en: 'A break between two lessons' },
        { nl: 'Een bus die tussen twee scholen rijdt', en: 'A bus that runs between two schools' }
      ], answer: 0,
      explain: { nl: 'Alinea 6: sommige scholen kiezen een tussenweg, zoals een kwartier of half uur later beginnen.',
                 en: 'Paragraph 6: some schools choose a middle way, such as starting a quarter or half an hour later.' } }
  ]
},
{
  id: 'lichaam-11', topic: 'lichaam', level: 1, emoji: '🦷', scene: 'body',
  title: { nl: 'Waarom krijg je nieuwe tanden?', en: 'Why do you get new teeth?' },
  text: {
    nl: [
      "Je eerste tandjes kreeg je toen je nog een baby was. Die heten melktanden. Een kind heeft er twintig. Ze zijn klein, want ze moeten passen in een klein kaakje.",
      "Maar jij groeit. Je kaak wordt groter, en dan passen die kleine tandjes niet meer goed. Daarom maakt je lichaam nieuwe, grotere tanden: de blijvende tanden.",
      "Die nieuwe tanden groeien eerst verstopt in je kaak, onder je melktanden. Als ze klaar zijn, duwen ze tegen de wortel van de melktand. Die wortel lost langzaam op. De melktand gaat wiebelen, en op een dag valt hij eruit.",
      "Rond je zesde jaar valt de eerste tand vaak uit. Rond je twaalfde zijn de meeste gewisseld. Een volwassene heeft wel 32 tanden, veel meer dan een kind.",
      "Let goed op je nieuwe tanden, want er komen er geen nieuwe meer bij. Poets ze twee keer per dag, en eet niet te vaak snoep. Dan heb je er je hele leven plezier van."
    ],
    en: [
      "You got your first little teeth when you were still a baby. They are called milk teeth. A child has twenty of them. They are small, because they have to fit in a small jaw.",
      "But you grow. Your jaw gets bigger, and then those small teeth no longer fit well. That is why your body makes new, bigger teeth: the permanent teeth.",
      "Those new teeth first grow hidden in your jaw, under your milk teeth. When they are ready, they push against the root of the milk tooth. That root slowly dissolves. The milk tooth starts to wobble, and one day it falls out.",
      "Around the age of six the first tooth often falls out. By about twelve most of them have been replaced. An adult has as many as 32 teeth, far more than a child.",
      "Take good care of your new teeth, because no new ones will come after them. Brush them twice a day, and do not eat sweets too often. Then you will enjoy them for the rest of your life."
    ]
  },
  words: [
    { nl: 'melktanden', en: 'milk teeth', defNl: 'de eerste tanden die een kind krijgt', defEn: 'the first teeth a child gets' },
    { nl: 'kaak', en: 'jaw', defNl: 'het bot in je mond waar je tanden in zitten', defEn: 'the bone in your mouth that holds your teeth' },
    { nl: 'blijvende', en: 'permanent', defNl: 'die blijven en niet meer vervangen worden', defEn: 'that stay and are not replaced again' }
  ],
  questions: [
    { id: 'q1', type: 'mc', skill: 'letterlijk',
      q: { nl: 'Hoeveel melktanden heeft een kind?', en: 'How many milk teeth does a child have?' },
      options: [
        { nl: 'Twaalf', en: 'Twelve' },
        { nl: 'Twintig', en: 'Twenty' },
        { nl: 'Tweeëndertig', en: 'Thirty-two' },
        { nl: 'Zes', en: 'Six' }
      ], answer: 1,
      explain: { nl: 'Alinea 1: "Een kind heeft er twintig." 32 is het aantal tanden van een volwassene.',
                 en: 'Paragraph 1: "A child has twenty of them." 32 is the number of teeth an adult has.' } },
    { id: 'q2', type: 'tf', skill: 'letterlijk',
      q: { nl: 'De nieuwe tanden groeien eerst verstopt in je kaak.', en: 'The new teeth first grow hidden in your jaw.' },
      answer: true,
      explain: { nl: 'Waar. Alinea 3: "Die nieuwe tanden groeien eerst verstopt in je kaak."',
                 en: 'True. Paragraph 3: "Those new teeth first grow hidden in your jaw."' } },
    { id: 'q3', type: 'gap', skill: 'woordenschat',
      q: { nl: 'Je blijvende tanden heten zo, omdat ze ___.', en: 'Your permanent teeth have that name because they ___.' },
      options: [
        { nl: 'blijven en niet meer vervangen worden', en: 'stay and are not replaced again' },
        { nl: 'altijd blijven wiebelen', en: 'always keep wobbling' },
        { nl: 'van melk gemaakt zijn', en: 'are made of milk' },
        { nl: 'in de kaak blijven zitten en nooit te zien zijn', en: 'stay inside the jaw and are never seen' }
      ], answer: 0,
      explain: { nl: 'De laatste alinea zegt: "er komen er geen nieuwe meer bij." Ze blijven dus.',
                 en: 'The last paragraph says: "no new ones will come after them." So they stay.' } },
    { id: 'q4', type: 'order', skill: 'volgorde',
      q: { nl: 'Hoe wisselt een tand? Zet het in de goede volgorde.', en: 'How does a tooth get replaced? Put it in the right order.' },
      items: [
        { nl: 'Een nieuwe tand groeit verstopt in de kaak.', en: 'A new tooth grows hidden in the jaw.' },
        { nl: 'Hij duwt tegen de wortel van de melktand.', en: 'It pushes against the root of the milk tooth.' },
        { nl: 'De melktand gaat wiebelen.', en: 'The milk tooth starts to wobble.' },
        { nl: 'De melktand valt eruit.', en: 'The milk tooth falls out.' }
      ], answer: [0, 1, 2, 3],
      explain: { nl: 'Alinea 3 beschrijft precies deze stappen, in deze volgorde.',
                 en: 'Paragraph 3 describes exactly these steps, in this order.' } },
    { id: 'q5', type: 'mc', skill: 'hoofdgedachte',
      q: { nl: 'Waar gaat de tekst vooral over?', en: 'What is the text mainly about?' },
      options: [
        { nl: 'Waarom snoep lekker is', en: 'Why sweets taste good' },
        { nl: 'Hoe je een tandarts wordt', en: 'How to become a dentist' },
        { nl: 'Wat baby’s eten', en: 'What babies eat' },
        { nl: 'Waarom en hoe je melktanden plaatsmaken voor blijvende tanden', en: 'Why and how your milk teeth make way for permanent teeth' }
      ], answer: 3,
      explain: { nl: 'De tekst legt uit waarom je nieuwe tanden krijgt en hoe het wisselen gaat.',
                 en: 'The text explains why you get new teeth and how the swap happens.' } }
  ]
},

{
  id: 'lichaam-12', topic: 'lichaam', level: 6, emoji: '🧘', scene: 'body',
  title: { nl: 'Stress: je lichaam in de alarmstand', en: 'Stress: your body on alert' },
  text: {
    nl: [
      "Je staat achter de schermen van de eindmusical. Over een minuut moet je op. Je hart bonkt, je handen zijn klam en je mond is kurkdroog. Misschien moet je ineens nodig naar de wc. Wat er in je lichaam gebeurt, is eeuwenoud: je zit in de alarmstand. Dat noemen we stress.",
      "Die alarmstand is ontstaan in de tijd dat mensen nog tussen wilde dieren leefden. Zag een van onze voorouders een beer, dan moest hij in een paar tellen kunnen vechten of vluchten. Zijn hersenen gaven daarom een seintje aan de bijnieren, twee kleine klieren boven op de nieren. Die maakten adrenaline en cortisol aan. Door die stoffen gaat je hart sneller kloppen, adem je sneller en stroomt er extra bloed naar je spieren. Je spijsvertering wordt juist even op een laag pitje gezet, want eten verteren kan later ook nog.",
      "Voor een korte tijd is stress dus handig. Een beetje spanning helpt je om scherp te zijn tijdens een toets of een wedstrijd. Sporters en artiesten zeggen vaak dat ze juist beter presteren met wat zenuwen. Het wordt een probleem als de alarmstand niet meer uitgaat. Wie weken achter elkaar stress heeft, slaapt slechter, wordt sneller ziek en kan zich minder goed concentreren.",
      "Tegenwoordig komt de beer niet meer uit het bos. Stress komt nu uit andere hoeken: een ruzie met een vriend, een volle agenda, zorgen thuis, of het gevoel dat je op sociale media steeds iets moet laten zien. Je lichaam maakt geen verschil tussen een beer en een lastig appje. Het reageert op dezelfde manier.",
      "Gelukkig kun je de alarmstand zelf helpen uitzetten. Rustig en diep ademhalen is een van de snelste trucs: adem vier tellen in en zes tellen uit. Daardoor krijgt je lichaam het signaal dat het gevaar voorbij is. Ook bewegen helpt, omdat je dan de stresstoffen als het ware opgebruikt. Genoeg slapen geeft je lichaam de kans om te herstellen. En praten met iemand die je vertrouwt, maakt een probleem vaak een stuk kleiner.",
      "Stress is dus geen teken van zwakte. Het is een slim systeem dat je lichaam beschermt. Het is alleen gemaakt voor korte sprintjes, niet voor een marathon. Merk je dat je al een tijd gespannen bent? Vertel het dan aan een ouder, je juf of je meester. Je hoeft een beer nooit in je eentje te verslaan."
    ],
    en: [
      "You are standing backstage at the leavers' musical. In a minute you have to go on. Your heart is pounding, your hands are clammy and your mouth is bone dry. Perhaps you suddenly need the toilet. What is happening in your body is ancient: you are on alert. We call that stress.",
      "That alert mode came about in the days when people still lived among wild animals. If one of our ancestors saw a bear, he had to be able to fight or run away within seconds. So his brain sent a signal to the adrenal glands, two small glands on top of the kidneys. They made adrenaline and cortisol. Because of those substances your heart beats faster, you breathe faster and extra blood flows to your muscles. Your digestion, on the other hand, is turned down for a while, because digesting food can wait.",
      "So for a short time stress is useful. A little tension helps you stay sharp during a test or a match. Athletes and performers often say they actually perform better with some nerves. It becomes a problem when the alert mode no longer switches off. Anyone who has stress for weeks on end sleeps worse, gets ill more quickly and finds it harder to concentrate.",
      "Nowadays the bear no longer comes out of the woods. Stress now comes from other directions: a fight with a friend, a busy schedule, worries at home, or the feeling that you always have to show something on social media. Your body makes no difference between a bear and an awkward message. It reacts in the same way.",
      "Fortunately you can help switch off the alert mode yourself. Breathing calmly and deeply is one of the quickest tricks: breathe in for four counts and out for six. That gives your body the signal that the danger is over. Moving helps too, because then you use up the stress substances, as it were. Getting enough sleep gives your body the chance to recover. And talking to someone you trust often makes a problem a lot smaller.",
      "So stress is not a sign of weakness. It is a clever system that protects your body. It is just made for short sprints, not for a marathon. Do you notice that you have been tense for a while? Then tell a parent or your teacher. You never have to beat a bear on your own."
    ]
  },
  words: [
    { nl: 'klam', en: 'clammy', defNl: 'een beetje nat en koud van het zweet', defEn: 'a bit damp and cold with sweat' },
    { nl: 'bijnieren', en: 'adrenal glands', defNl: 'twee kleine klieren boven op je nieren die stresstoffen maken', defEn: 'two small glands on top of your kidneys that make stress substances' },
    { nl: 'spijsvertering', en: 'digestion', defNl: 'het verwerken van eten in je maag en darmen', defEn: 'the processing of food in your stomach and gut' }
  ],
  questions: [
    { id: 'q1', type: 'mc', skill: 'letterlijk',
      q: { nl: 'Waar liggen de bijnieren?', en: 'Where are the adrenal glands?' },
      options: [
        { nl: 'Boven op de nieren', en: 'On top of the kidneys' },
        { nl: 'In de hersenen', en: 'In the brain' },
        { nl: 'Naast het hart', en: 'Next to the heart' },
        { nl: 'In de spieren', en: 'In the muscles' }
      ], answer: 0,
      explain: { nl: 'Alinea 2: "de bijnieren, twee kleine klieren boven op de nieren."',
                 en: 'Paragraph 2: "the adrenal glands, two small glands on top of the kidneys."' } },
    { id: 'q2', type: 'find', skill: 'letterlijk',
      q: { nl: 'Welke zin vertelt wat adrenaline en cortisol met je lichaam doen?', en: 'Which sentence tells what adrenaline and cortisol do to your body?' },
      options: [
        { nl: 'Die maakten adrenaline en cortisol aan.', en: 'They made adrenaline and cortisol.' },
        { nl: 'Je hart bonkt, je handen zijn klam en je mond is kurkdroog.', en: 'Your heart is pounding, your hands are clammy and your mouth is bone dry.' },
        { nl: 'Door die stoffen gaat je hart sneller kloppen, adem je sneller en stroomt er extra bloed naar je spieren.', en: 'Because of those substances your heart beats faster, you breathe faster and extra blood flows to your muscles.' },
        { nl: 'Ook bewegen helpt, omdat je dan de stresstoffen als het ware opgebruikt.', en: 'Moving helps too, because then you use up the stress substances, as it were.' }
      ], answer: 2,
      explain: { nl: '"Door die stoffen" is het signaal: nu komt het gevolg van adrenaline en cortisol.',
                 en: '"Because of those substances" is the signal: now comes the effect of adrenaline and cortisol.' } },
    { id: 'q3', type: 'gap', skill: 'woordenschat',
      q: { nl: 'Als je handen klam zijn, dan zijn ze ___.', en: 'If your hands are clammy, they are ___.' },
      options: [
        { nl: 'een beetje nat en koud van het zweet', en: 'a bit damp and cold with sweat' },
        { nl: 'heel warm en droog', en: 'very warm and dry' },
        { nl: 'vies van de verf', en: 'dirty with paint' },
        { nl: 'sterk van het sporten', en: 'strong from sport' }
      ], answer: 0,
      explain: { nl: 'Klam hoort bij de zenuwen voor de musical: je zweet een beetje en je handen voelen nat en koud.',
                 en: 'Clammy goes with the nerves before the musical: you sweat a little and your hands feel damp and cold.' } },
    { id: 'q4', type: 'mc', skill: 'verwijswoorden',
      q: { nl: '"Die maakten adrenaline en cortisol aan." Wie of wat zijn "die"?', en: '"They made adrenaline and cortisol." Who or what are "they"?' },
      options: [
        { nl: 'De bijnieren', en: 'The adrenal glands' },
        { nl: 'De wilde dieren', en: 'The wild animals' },
        { nl: 'De voorouders', en: 'The ancestors' },
        { nl: 'De spieren', en: 'The muscles' }
      ], answer: 0,
      explain: { nl: 'De zin ervoor eindigt met de bijnieren. "Die" verwijst daarnaar.',
                 en: 'The sentence before ends with the adrenal glands. "They" points to them.' } },
    { id: 'q5', type: 'order', skill: 'volgorde',
      q: { nl: 'Wat gebeurde er als een voorouder een beer zag? Zet op volgorde.', en: 'What happened when an ancestor saw a bear? Put in order.' },
      items: [
        { nl: 'Hij ziet een beer.', en: 'He sees a bear.' },
        { nl: 'De hersenen geven een seintje aan de bijnieren.', en: 'The brain sends a signal to the adrenal glands.' },
        { nl: 'De bijnieren maken adrenaline en cortisol.', en: 'The adrenal glands make adrenaline and cortisol.' },
        { nl: 'Het hart klopt sneller en er gaat extra bloed naar de spieren.', en: 'The heart beats faster and extra blood goes to the muscles.' }
      ], answer: [0, 1, 2, 3],
      explain: { nl: 'Alinea 2 beschrijft een ketting van oorzaak en gevolg, van de beer tot het bonzende hart.',
                 en: 'Paragraph 2 describes a chain of cause and effect, from the bear to the pounding heart.' } },
    { id: 'q6', type: 'sort', skill: 'gevolgtrekking',
      q: { nl: 'Helpt deze stress, of is het een probleem? Zet elke zin in de goede groep.', en: 'Does this stress help, or is it a problem? Put every sentence in the right group.' },
      bins: [{ nl: 'Stress die helpt', en: 'Stress that helps' }, { nl: 'Stress die een probleem is', en: 'Stress that is a problem' }],
      items: [
        { nl: 'Een beetje spanning vlak voor een wedstrijd', en: 'A little tension just before a match', bin: 0 },
        { nl: 'Weken achter elkaar slecht slapen door zorgen', en: 'Sleeping badly for weeks because of worries', bin: 1 },
        { nl: 'Scherp zijn tijdens een toets', en: 'Being sharp during a test', bin: 0 },
        { nl: 'Vaker ziek worden omdat de alarmstand niet uitgaat', en: 'Getting ill more often because the alert mode stays on', bin: 1 }
      ],
      explain: { nl: 'Kort is stress handig, lang is het een probleem. Dat is precies wat alinea 3 uitlegt.',
                 en: 'Short stress is useful, long stress is a problem. That is exactly what paragraph 3 explains.' } },
    { id: 'q7', type: 'sort', skill: 'feitmening',
      q: { nl: 'Feit of mening? Zet elke zin in de goede groep.', en: 'Fact or opinion? Put every sentence in the right group.' },
      bins: [{ nl: 'Feit', en: 'Fact' }, { nl: 'Mening', en: 'Opinion' }],
      items: [
        { nl: 'Bij stress maken de bijnieren adrenaline aan.', en: 'With stress the adrenal glands make adrenaline.', bin: 0 },
        { nl: 'Een eindmusical is het spannendste wat er bestaat.', en: 'A leavers\' musical is the most exciting thing there is.', bin: 1 },
        { nl: 'Bij stress gaat je hart sneller kloppen.', en: 'With stress your heart beats faster.', bin: 0 },
        { nl: 'Sociale media zouden verboden moeten worden.', en: 'Social media should be banned.', bin: 1 }
      ],
      explain: { nl: 'Hoe het lichaam werkt, is onderzocht: feiten. "Het spannendste" en "zou verboden moeten" zijn meningen.',
                 en: 'How the body works has been researched: facts. "The most exciting" and "should be banned" are opinions.' } },
    { id: 'q8', type: 'multi', skill: 'letterlijk',
      q: { nl: 'Welke manieren om de alarmstand uit te zetten noemt de tekst? Kies er 2.', en: 'Which ways to switch off the alert mode does the text name? Pick 2.' },
      options: [
        { nl: 'Rustig en diep ademhalen', en: 'Breathing calmly and deeply' },
        { nl: 'Praten met iemand die je vertrouwt', en: 'Talking to someone you trust' },
        { nl: 'Nog harder werken', en: 'Working even harder' },
        { nl: 'Vaker op je telefoon kijken', en: 'Checking your phone more often' }
      ], answer: [0, 1],
      explain: { nl: 'Alinea 5 noemt ademhalen, bewegen, slapen en praten. Harder werken of je telefoon helpen niet.',
                 en: 'Paragraph 5 names breathing, moving, sleeping and talking. Working harder or your phone do not help.' } },
    { id: 'q9', type: 'mc', skill: 'doel',
      q: { nl: 'Waarom schrijft de schrijver aan het eind: "Je hoeft een beer nooit in je eentje te verslaan"?', en: 'Why does the writer end with: "You never have to beat a bear on your own"?' },
      options: [
        { nl: 'Om de lezer aan te moedigen hulp te vragen als stress te lang duurt', en: 'To encourage the reader to ask for help if stress lasts too long' },
        { nl: 'Om te waarschuwen voor beren in het bos', en: 'To warn about bears in the woods' },
        { nl: 'Om uit te leggen hoe je met een beer vecht', en: 'To explain how to fight a bear' },
        { nl: 'Om te zeggen dat stress niet bestaat', en: 'To say that stress does not exist' }
      ], answer: 0,
      explain: { nl: 'De beer staat hier voor stress. De schrijver zegt: je mag hulp vragen, je hoeft het niet alleen op te lossen.',
                 en: 'The bear stands for stress here. The writer is saying: you may ask for help, you do not have to solve it alone.' } },
    { id: 'q10', type: 'find', skill: 'samenvatten',
      q: { nl: 'Welke zin vat het best samen wanneer stress goed is én wanneer niet?', en: 'Which sentence best sums up when stress is good and when it is not?' },
      options: [
        { nl: 'Je hart bonkt, je handen zijn klam en je mond is kurkdroog.', en: 'Your heart is pounding, your hands are clammy and your mouth is bone dry.' },
        { nl: 'Tegenwoordig komt de beer niet meer uit het bos.', en: 'Nowadays the bear no longer comes out of the woods.' },
        { nl: 'Het is alleen gemaakt voor korte sprintjes, niet voor een marathon.', en: 'It is just made for short sprints, not for a marathon.' },
        { nl: 'Rustig en diep ademhalen is een van de snelste trucs: adem vier tellen in en zes tellen uit.', en: 'Breathing calmly and deeply is one of the quickest tricks: breathe in for four counts and out for six.' }
      ], answer: 2,
      explain: { nl: 'Korte sprintjes = korte stress is prima. Een marathon = lange stress is te veel. Deze vergelijking vat de hele tekst samen.',
                 en: 'Short sprints = short stress is fine. A marathon = long stress is too much. This comparison sums up the whole text.' } }
  ]
}
]);
