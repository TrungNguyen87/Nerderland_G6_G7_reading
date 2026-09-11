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
