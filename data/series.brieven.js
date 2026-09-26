/* Vervolgverhaal - Wereld & Culturen: Brieven uit Tanzania
   Hoofdstuk 1 = groep 6 (niveau 2), 2 = groep 7 (niveau 4), 3 = groep 8 (niveau 6). */
addSeries({
  id: 'brieven', topic: 'wereld', emoji: '✉️',
  title: { nl: 'Brieven uit Tanzania', en: 'Letters from Tanzania' },
  blurb: { nl: 'Ruben krijgt een penvriend in Tanzania. Samen tekenen ze een strip, en Ruben ontdekt wat hij allemaal niet wist.',
           en: 'Ruben gets a pen pal in Tanzania. Together they draw a comic, and Ruben discovers how much he did not know.' },
  chapters: [
{
  level: 2, emoji: '✉️', scene: 'world',
  title: { nl: 'Een brief van ver', en: 'A letter from far away' },
  teaser: { nl: 'Wat gaan Ruben en Amani samen tekenen? En blijft het goed gaan tussen twee vrienden die elkaar nog nooit hebben gezien?', en: 'What will Ruben and Amani draw together? And will things keep going well between two friends who have never met?' },
  text: {
    nl: [
      "De klas van Ruben doet mee aan een project met penvrienden. Elk kind krijgt een vriend in een ander land. Ruben krijgt een brief uit Tanzania, in Afrika. Op de envelop zitten drie kleurige postzegels met een olifant erop.",
      "De brief is van Amani. Hij is elf jaar, net als Ruben. Hij schrijft in het Engels, want dat leert hij op school. Thuis praat hij Swahili. Juf Anouk helpt de klas met vertalen.",
      "Amani woont in een stad vlak bij de berg Kilimanjaro, de hoogste berg van Afrika. Er zit een foto bij. Op de top van de berg ligt sneeuw, ook al is het er warm. Ruben kijkt er lang naar.",
      "Amani vertelt dat hij elke ochtend drie kilometer naar school loopt. Hij speelt het liefst voetbal en hij tekent strips. “Wat eet jij als ontbijt?” vraagt hij. “Ik eet meestal chapati, een soort plat brood.”",
      "Ruben schrijft meteen terug. Hij vertelt over zijn fiets, zijn kat en de regen in Zwolle. En hij legt uit wat hagelslag is: kleine stukjes chocola op je brood. Amani gelooft dat vast niet. Daarom stopt Ruben een doosje hagelslag in de envelop.",
      "Drie weken later komt er een nieuwe brief. Ruben scheurt hem open. Er zit een tekening in: een strip van één bladzijde. Er staat een superheld op, met een cape en een boterham vol hagelslag. Onderaan staat: ‘Jij tekent de volgende bladzijde!’"
    ],
    en: [
      "Ruben’s class is taking part in a pen-pal project. Every child gets a friend in another country. Ruben gets a letter from Tanzania, in Africa. On the envelope are three colourful stamps with an elephant on them.",
      "The letter is from Amani. He is eleven, just like Ruben. He writes in English, because he learns that at school. At home he speaks Swahili. Miss Anouk helps the class translate.",
      "Amani lives in a town close to Mount Kilimanjaro, the highest mountain in Africa. There is a photo with the letter. There is snow on the top of the mountain, even though it is warm there. Ruben looks at it for a long time.",
      "Amani says he walks three kilometres to school every morning. He likes playing football best and he draws comics. “What do you eat for breakfast?” he asks. “I usually eat chapati, a kind of flat bread.”",
      "Ruben writes back straight away. He tells him about his bike, his cat and the rain in Zwolle. And he explains what hagelslag is: tiny bits of chocolate on your bread. Amani will never believe that. So Ruben puts a little box of hagelslag in the envelope.",
      "Three weeks later a new letter arrives. Ruben tears it open. There is a drawing inside: a comic of one page. It shows a superhero, with a cape and a slice of bread covered in hagelslag. At the bottom it says: ‘You draw the next page!’"
    ]
  },
  words: [
    { nl: 'penvrienden', en: 'pen pals', defNl: 'vrienden die elkaar brieven schrijven, vaak vanuit verschillende landen', defEn: 'friends who write letters to each other, often from different countries' },
    { nl: 'postzegels', en: 'stamps', defNl: 'kleine plaatjes op een envelop waarmee je betaalt om een brief te versturen', defEn: 'small pictures on an envelope that pay for sending a letter' },
    { nl: 'vertalen', en: 'to translate', defNl: 'een tekst van de ene taal in een andere taal zetten', defEn: 'to put a text from one language into another' }
  ],
  questions: [
    { id: 'q1', type: 'mc', skill: 'letterlijk',
      q: { nl: 'In welke taal schrijft Amani zijn brief?', en: 'In which language does Amani write his letter?' },
      options: [
        { nl: 'In het Engels', en: 'In English' },
        { nl: 'In het Swahili', en: 'In Swahili' },
        { nl: 'In het Nederlands', en: 'In Dutch' },
        { nl: 'In het Frans', en: 'In French' }
      ], answer: 0,
      explain: { nl: 'Alinea 2: hij schrijft in het Engels, want dat leert hij op school. Thuis praat hij Swahili.', en: 'Paragraph 2: he writes in English, because he learns it at school. At home he speaks Swahili.' } },
    { id: 'q2', type: 'tf', skill: 'letterlijk',
      q: { nl: 'Op de top van de Kilimanjaro ligt sneeuw.', en: 'There is snow on the top of Kilimanjaro.' },
      answer: true,
      explain: { nl: 'Alinea 3: op de top ligt sneeuw, ook al is het er warm.', en: 'Paragraph 3: there is snow on the top, even though it is warm there.' } },
    { id: 'q3', type: 'mc', skill: 'gevolgtrekking',
      q: { nl: 'Waarom stopt Ruben een doosje hagelslag in de envelop?', en: 'Why does Ruben put a little box of hagelslag in the envelope?' },
      options: [
        { nl: 'Hij denkt dat Amani anders niet gelooft wat hagelslag is', en: 'He thinks Amani would not believe what hagelslag is otherwise' },
        { nl: 'Amani had erom gevraagd', en: 'Amani had asked for it' },
        { nl: 'Ruben vindt hagelslag vies', en: 'Ruben thinks hagelslag is disgusting' },
        { nl: 'Om de envelop zwaarder te maken', en: 'To make the envelope heavier' }
      ], answer: 0,
      explain: { nl: '“Amani gelooft dat vast niet. Daarom stopt Ruben een doosje hagelslag in de envelop.”', en: '“Amani will never believe that. So Ruben puts a little box of hagelslag in the envelope.”' } },
    { id: 'q4', type: 'order', skill: 'volgorde',
      q: { nl: 'Zet op volgorde wat er gebeurt.', en: 'Put what happens in order.' },
      items: [
        { nl: 'Ruben krijgt een envelop met olifantpostzegels.', en: 'Ruben gets an envelope with elephant stamps.' },
        { nl: 'Ruben bekijkt een foto van de Kilimanjaro.', en: 'Ruben looks at a photo of Kilimanjaro.' },
        { nl: 'Ruben schrijft over zijn kat en de regen.', en: 'Ruben writes about his cat and the rain.' },
        { nl: 'Er komt een strip van Amani.', en: 'A comic arrives from Amani.' }
      ], answer: [0, 1, 2, 3],
      explain: { nl: 'De eerste brief, de foto, Rubens antwoord en drie weken later de strip.', en: 'The first letter, the photo, Ruben’s reply and three weeks later the comic.' } },
    { id: 'q5', type: 'gap', skill: 'woordenschat',
      q: { nl: 'Als je een tekst van de ene taal in een andere taal zet, ga je ___.', en: 'When you put a text from one language into another, you ___.' },
      options: [
        { nl: 'vertalen', en: 'translate' },
        { nl: 'tekenen', en: 'draw' },
        { nl: 'verhuizen', en: 'move house' },
        { nl: 'fietsen', en: 'cycle' }
      ], answer: 0,
      explain: { nl: 'Juf Anouk helpt de klas de Engelse brieven te vertalen naar het Nederlands.', en: 'Miss Anouk helps the class translate the English letters into Dutch.' } },
    { id: 'q6', type: 'mc', skill: 'hoofdgedachte',
      q: { nl: 'Waar gaat dit hoofdstuk vooral over?', en: 'What is this chapter mainly about?' },
      options: [
        { nl: 'Ruben en Amani leren elkaar kennen via brieven', en: 'Ruben and Amani get to know each other through letters' },
        { nl: 'Hoe je de Kilimanjaro beklimt', en: 'How to climb Kilimanjaro' },
        { nl: 'Het recept voor chapati', en: 'The recipe for chapati' },
        { nl: 'De kat van Ruben', en: 'Ruben’s cat' }
      ], answer: 0,
      explain: { nl: 'Het hoofdstuk gaat over de eerste brieven tussen twee jongens in twee verschillende landen.', en: 'The chapter is about the first letters between two boys in two different countries.' } }
  ]
},
{
  level: 4, emoji: '🗺️', scene: 'world',
  title: { nl: 'Het gevaar van één verhaal', en: 'The danger of a single story' },
  recap: { nl: 'Ruben uit Zwolle heeft een penvriend in Tanzania: Amani. Ze schrijven over hun ontbijt, hun school en het weer. Amani stuurt een strip met een superheld en vraagt Ruben om de volgende bladzijde te tekenen.',
           en: 'Ruben from Zwolle has a pen pal in Tanzania: Amani. They write about their breakfast, their school and the weather. Amani sends a comic with a superhero and asks Ruben to draw the next page.' },
  teaser: { nl: 'Hoe gaat het videogesprek tussen de twee klassen? En wat denken de kinderen in Tanzania eigenlijk over Nederland?', en: 'How will the video call between the two classes go? And what do the children in Tanzania actually think about the Netherlands?' },
  text: {
    nl: [
      "Ruben tekende de tweede bladzijde van de strip: de superheld vloog naar Zwolle en landde in een grote plas. Bij de tekening schreef hij een brief vol vragen. Hebben jullie wel elektriciteit? Wonen jullie in hutjes? Hebben jullie leeuwen in de tuin? Hij bedoelde het vriendelijk. Hij wist gewoon niet beter.",
      "Het antwoord van Amani was korter dan anders. Hij stuurde drie foto's mee. Op de eerste stond zijn straat, met een telefoonwinkel, een markt en een bus vol mensen. Op de tweede lagen zonnepanelen op het dak van zijn school. Op de derde stond Amani zelf, met een tablet in zijn hand. “In mijn land wonen meer dan zestig miljoen mensen”, schreef hij. “Leeuwen zie ik alleen als we met school naar het natuurpark gaan. Waarom denk je dat wij in hutjes wonen?”",
      "Ruben voelde zich rot. Hij liet de brief aan juf Anouk zien. Ze vertelde over een schrijfster uit Nigeria, Chimamanda Ngozi Adichie. Die waarschuwde voor het gevaar van één verhaal. Als je over een land steeds maar één soort verhaal hoort, bijvoorbeeld alleen over armoede of wilde dieren, ga je denken dat dat het hele verhaal is. Maar in elk land wonen miljoenen mensen, en die hebben allemaal hun eigen leven.",
      "“Waar kwamen jouw ideeën over Tanzania vandaan?” vroeg de juf. Ruben dacht na. Van een natuurfilm, van een reclame voor een goed doel en van een tekenfilm met leeuwen. Geen van die verhalen ging over een jongen met een tablet die strips tekent.",
      "Die avond schreef Ruben een nieuwe brief. Hij zei sorry, en hij stelde andere vragen: welke muziek Amani mooi vond, en wat hij later wilde worden. Toen deed hij iets geks. Hij schreef ook een lijstje met dingen die mensen vaak over Nederland denken: dat iedereen op klompen loopt, in een molen woont en elke dag kaas eet.",
      "Twee weken later kwam het antwoord. Amani had drie bladzijden strip teruggestuurd, vol lachende gezichtjes. En een vraag: “Zullen we met onze hele klassen een videogesprek houden? Dan kunnen we elkaar echt zien.”"
    ],
    en: [
      "Ruben drew the second page of the comic: the superhero flew to Zwolle and landed in a big puddle. With the drawing he wrote a letter full of questions. Do you have electricity? Do you live in huts? Do you have lions in the garden? He meant it kindly. He simply did not know any better.",
      "Amani’s reply was shorter than usual. He sent three photos with it. The first showed his street, with a phone shop, a market and a bus full of people. The second showed solar panels on the roof of his school. The third showed Amani himself, with a tablet in his hand. “More than sixty million people live in my country,” he wrote. “I only see lions when we go to the nature park with school. Why do you think we live in huts?”",
      "Ruben felt awful. He showed the letter to Miss Anouk. She told him about a writer from Nigeria, Chimamanda Ngozi Adichie. She warned about the danger of a single story. If you keep hearing only one kind of story about a country, for example only about poverty or wild animals, you start to think that is the whole story. But millions of people live in every country, and they all have their own lives.",
      "“Where did your ideas about Tanzania come from?” asked the teacher. Ruben thought about it. From a nature film, from an advert for a charity and from a cartoon with lions. None of those stories was about a boy with a tablet who draws comics.",
      "That evening Ruben wrote a new letter. He said sorry, and he asked different questions: what music Amani liked, and what he wanted to be when he grew up. Then he did something silly. He also wrote a list of things people often think about the Netherlands: that everybody wears clogs, lives in a windmill and eats cheese every day.",
      "Two weeks later the answer came. Amani had sent back three pages of comic, full of laughing faces. And a question: “Shall we have a video call with our whole classes? Then we can really see each other.”"
    ]
  },
  words: [
    { nl: 'zonnepanelen', en: 'solar panels', defNl: 'platen die van zonlicht stroom maken', defEn: 'panels that make electricity from sunlight' },
    { nl: 'waarschuwde', en: 'warned', defNl: 'zei dat je ergens voor moet oppassen (waarschuwen)', defEn: 'said that you should watch out for something (to warn)' },
    { nl: 'armoede', en: 'poverty', defNl: 'als mensen te weinig geld hebben voor wat ze nodig hebben', defEn: 'when people have too little money for what they need' }
  ],
  questions: [
    { id: 'q1', type: 'mc', skill: 'letterlijk',
      q: { nl: 'Wat stond er op de foto’s van Amani?', en: 'What was in Amani’s photos?' },
      options: [
        { nl: 'Zijn straat, zonnepanelen op zijn school en hijzelf met een tablet', en: 'His street, solar panels on his school and himself with a tablet' },
        { nl: 'Een leeuw in zijn tuin', en: 'A lion in his garden' },
        { nl: 'Het hutje waarin hij woont', en: 'The hut he lives in' },
        { nl: 'Alleen de berg Kilimanjaro', en: 'Only Mount Kilimanjaro' }
      ], answer: 0,
      explain: { nl: 'Alinea 2 beschrijft de drie foto’s: de straat, de zonnepanelen en Amani met een tablet.', en: 'Paragraph 2 describes the three photos: the street, the solar panels and Amani with a tablet.' } },
    { id: 'q2', type: 'mc', skill: 'gevolgtrekking',
      q: { nl: 'Waarom was het antwoord van Amani korter dan anders?', en: 'Why was Amani’s reply shorter than usual?' },
      options: [
        { nl: 'Hij voelde zich een beetje gekwetst door de vragen van Ruben', en: 'He felt a little hurt by Ruben’s questions' },
        { nl: 'Hij had geen tijd', en: 'He had no time' },
        { nl: 'Hij had geen postzegels meer', en: 'He had run out of stamps' },
        { nl: 'Hij was ziek', en: 'He was ill' }
      ], answer: 0,
      explain: { nl: 'Hij vraagt: “Waarom denk je dat wij in hutjes wonen?” De vragen van Ruben deden hem pijn.', en: 'He asks: “Why do you think we live in huts?” Ruben’s questions hurt him.' } },
    { id: 'q3', type: 'mc', skill: 'verwijswoorden',
      q: { nl: '“Die waarschuwde voor het gevaar van één verhaal.” Wie is “die”?', en: '“She warned about the danger of a single story.” Who is “she”?' },
      options: [
        { nl: 'De schrijfster Chimamanda Ngozi Adichie', en: 'The writer Chimamanda Ngozi Adichie' },
        { nl: 'Juf Anouk', en: 'Miss Anouk' },
        { nl: 'De moeder van Amani', en: 'Amani’s mother' },
        { nl: 'Een meisje uit de klas', en: 'A girl from the class' }
      ], answer: 0,
      explain: { nl: 'De zin ervoor noemt de schrijfster uit Nigeria. Zij waarschuwde voor het gevaar van één verhaal.', en: 'The sentence before mentions the writer from Nigeria. She warned about the danger of a single story.' } },
    { id: 'q4', type: 'multi', skill: 'letterlijk',
      q: { nl: 'Waar kwamen de ideeën van Ruben over Tanzania vandaan? Kies er 3.', en: 'Where did Ruben’s ideas about Tanzania come from? Pick 3.' },
      options: [
        { nl: 'Een natuurfilm', en: 'A nature film' },
        { nl: 'Een reclame voor een goed doel', en: 'An advert for a charity' },
        { nl: 'Een tekenfilm met leeuwen', en: 'A cartoon with lions' },
        { nl: 'Een reis naar Tanzania', en: 'A trip to Tanzania' },
        { nl: 'Een boek van juf Anouk', en: 'A book by Miss Anouk' }
      ], answer: [0, 1, 2],
      explain: { nl: 'Alinea 4: een natuurfilm, een reclame voor een goed doel en een tekenfilm met leeuwen.', en: 'Paragraph 4: a nature film, an advert for a charity and a cartoon with lions.' } },
    { id: 'q5', type: 'order', skill: 'volgorde',
      q: { nl: 'Zet in de volgorde van het verhaal.', en: 'Put these in the order of the story.' },
      items: [
        { nl: 'Ruben tekent de tweede bladzijde.', en: 'Ruben draws the second page.' },
        { nl: 'Amani stuurt drie foto’s.', en: 'Amani sends three photos.' },
        { nl: 'Juf Anouk vertelt over het gevaar van één verhaal.', en: 'Miss Anouk talks about the danger of a single story.' },
        { nl: 'Ruben schrijft een lijstje over Nederland.', en: 'Ruben writes a list about the Netherlands.' },
        { nl: 'Amani stelt een videogesprek voor.', en: 'Amani suggests a video call.' }
      ], answer: [0, 1, 2, 3, 4],
      explain: { nl: 'De vragen, het antwoord, het gesprek met de juf, de nieuwe brief en het voorstel van Amani.', en: 'The questions, the reply, the talk with the teacher, the new letter and Amani’s suggestion.' } },
    { id: 'q6', type: 'gap', skill: 'woordenschat',
      q: { nl: 'De schrijfster ___ voor het gevaar van één verhaal.', en: 'The writer ___ about the danger of a single story.' },
      options: [
        { nl: 'waarschuwde', en: 'warned' },
        { nl: 'lachte', en: 'laughed' },
        { nl: 'danste', en: 'danced' },
        { nl: 'vergat', en: 'forgot' }
      ], answer: 0,
      explain: { nl: 'Waarschuwen is zeggen dat je ergens voor moet oppassen.', en: 'To warn is to say that you should watch out for something.' } },
    { id: 'q7', type: 'mc', skill: 'structuur',
      q: { nl: 'Wat is de taak van alinea 3?', en: 'What is the job of paragraph 3?' },
      options: [
        { nl: 'Uitleggen wat “het gevaar van één verhaal” betekent', en: 'Explaining what “the danger of a single story” means' },
        { nl: 'Vertellen hoe het weer in Nigeria is', en: 'Telling you what the weather is like in Nigeria' },
        { nl: 'De brief van Amani samenvatten', en: 'Summing up Amani’s letter' },
        { nl: 'Vertellen hoe het verhaal afloopt', en: 'Telling you how the story ends' }
      ], answer: 0,
      explain: { nl: 'In alinea 3 legt de juf het idee uit dat het hele hoofdstuk zijn titel geeft.', en: 'In paragraph 3 the teacher explains the idea that gives the whole chapter its title.' } },
    { id: 'q8', type: 'mc', skill: 'hoofdgedachte',
      q: { nl: 'Wat leert Ruben vooral in dit hoofdstuk?', en: 'What does Ruben mainly learn in this chapter?' },
      options: [
        { nl: 'Dat je over een land niet maar één verhaal moet geloven', en: 'That you should not believe just one story about a country' },
        { nl: 'Hoe je een strip tekent', en: 'How to draw a comic' },
        { nl: 'Hoe zonnepanelen werken', en: 'How solar panels work' },
        { nl: 'Hoeveel mensen er in Nederland wonen', en: 'How many people live in the Netherlands' }
      ], answer: 0,
      explain: { nl: 'Ruben ontdekt dat zijn beeld van Tanzania uit maar een paar verhalen kwam, en dat dat niet het hele verhaal is.', en: 'Ruben discovers that his picture of Tanzania came from just a few stories, and that it is not the whole story.' } }
  ]
},
{
  level: 6, emoji: '💻', scene: 'world',
  title: { nl: 'Vijf dingen die niet waar zijn', en: 'Five things that are not true' },
  recap: { nl: 'Ruben stelde zijn penvriend Amani vragen over hutjes en leeuwen, en Amani antwoordde met foto’s van een drukke straat en zonnepanelen op zijn school. Van juf Anouk leerde Ruben over het gevaar van één verhaal. Nu willen de twee klassen elkaar zien in een videogesprek.',
           en: 'Ruben asked his pen pal Amani questions about huts and lions, and Amani answered with photos of a busy street and solar panels on his school. From Miss Anouk, Ruben learned about the danger of a single story. Now the two classes want to see each other in a video call.' },
  text: {
    nl: [
      "Het videogesprek was op een dinsdagmiddag in februari. In Zwolle was het twee uur, in Tanzania al vier uur, want daar loopt de klok in de winter twee uur voor. Beide klassen hadden een opdracht voorbereid: vijf dingen die mensen vaak denken over jouw land, maar die niet of niet helemaal waar zijn.",
      "De klas van Amani begon. Nummer één: ‘Afrika is één land.’ Afrika is een werelddeel met vierenvijftig landen en meer dan tweeduizend talen. Nummer twee: ‘Iedereen is arm.’ Er is in Tanzania veel armoede, zei Amani eerlijk, maar er zijn ook veel mensen met een goed inkomen, en veel jonge ondernemers. Nummer drie: ‘Er zijn geen computers.’ Bijna iedereen heeft een mobiele telefoon, en veel mensen betalen al jaren met hun telefoon in plaats van met contant geld. Daarin was Tanzania Nederland zelfs een stap voor.",
      "Toen was de klas van Ruben aan de beurt. Ze vertelden dat bijna niemand nog op klompen loopt, dat de meeste molens een museum zijn en dat lang niet iedereen blond is. De kinderen in Tanzania moesten lachen. Eén meisje vertelde dat zij dacht dat het in Nederland altijd regent. “Dat is bijna waar”, zei Ruben, en toen lachte iedereen.",
      "Daarna mocht iedereen vragen stellen. Een jongen in Tanzania vroeg of Nederlandse kinderen echt alleen naar school fietsen, zonder ouders. Een meisje in Zwolle vroeg hoe het is om een berg met sneeuw te zien in een warm land. Het ging steeds minder over verschillen en steeds meer over gewone dingen: huiswerk, voetbal, broertjes die irritant zijn.",
      "Na afloop schreven de kinderen op wat ze geleerd hadden. Ruben schreef: ‘Een verhaal over een land is nooit het hele verhaal. Je moet het vragen aan de mensen die er wonen.’ Juf Anouk hing het op in de klas. Op de ouderavond vonden sommige ouders het project eerst overbodig. Een vader vond dat de kinderen beter extra rekenles konden krijgen. Maar toen hij de brieven en de strip had gelezen, veranderde hij van gedachten.",
      "De strip van Ruben en Amani is inmiddels twaalf bladzijden lang. De superheld heeft een cape uit Tanzania en fietst door de regen in Zwolle. Op de laatste bladzijde schudden twee jongens elkaar de hand. ‘Wordt vervolgd’, staat eronder. Want dat is het mooie van een vriendschap: die is nooit af."
    ],
    en: [
      "The video call was on a Tuesday afternoon in February. In Zwolle it was two o’clock, in Tanzania already four, because in winter the clocks there are two hours ahead. Both classes had prepared a task: five things people often think about your country, but which are not true, or not quite true.",
      "Amani’s class went first. Number one: ‘Africa is one country.’ Africa is a continent with fifty-four countries and more than two thousand languages. Number two: ‘Everybody is poor.’ There is a lot of poverty in Tanzania, Amani said honestly, but there are also many people with a good income, and many young entrepreneurs. Number three: ‘There are no computers.’ Almost everybody has a mobile phone, and many people have been paying with their phone instead of cash for years. In that, Tanzania was actually a step ahead of the Netherlands.",
      "Then it was the turn of Ruben’s class. They explained that hardly anybody wears clogs any more, that most windmills are museums and that far from everybody is blond. The children in Tanzania laughed. One girl said she thought it always rains in the Netherlands. “That is almost true,” said Ruben, and then everybody laughed.",
      "After that everybody could ask questions. A boy in Tanzania asked whether Dutch children really cycle to school alone, without their parents. A girl in Zwolle asked what it is like to see a snowy mountain in a warm country. It was less and less about differences and more and more about ordinary things: homework, football, little brothers who are annoying.",
      "Afterwards the children wrote down what they had learned. Ruben wrote: ‘A story about a country is never the whole story. You have to ask the people who live there.’ Miss Anouk put it up in the classroom. At the parents’ evening some parents at first thought the project was unnecessary. One father thought the children would be better off with extra maths lessons. But when he had read the letters and the comic, he changed his mind.",
      "Ruben and Amani’s comic is now twelve pages long. The superhero has a cape from Tanzania and cycles through the rain in Zwolle. On the last page two boys shake hands. ‘To be continued’, it says underneath. Because that is the beautiful thing about a friendship: it is never finished."
    ]
  },
  words: [
    { nl: 'werelddeel', en: 'continent', defNl: 'een heel groot stuk land met veel landen, zoals Afrika of Europa', defEn: 'a very large piece of land with many countries, like Africa or Europe' },
    { nl: 'ondernemers', en: 'entrepreneurs', defNl: 'mensen die een eigen bedrijf beginnen', defEn: 'people who start their own business' },
    { nl: 'overbodig', en: 'unnecessary', defNl: 'niet nodig, zonder dat kan het ook', defEn: 'not needed, you could do without it' }
  ],
  questions: [
    { id: 'q1', type: 'mc', skill: 'letterlijk',
      q: { nl: 'Waarom was het in Tanzania al vier uur?', en: 'Why was it already four o’clock in Tanzania?' },
      options: [
        { nl: 'Daar loopt de klok in de winter twee uur voor', en: 'In winter the clocks there are two hours ahead' },
        { nl: 'De klas begon later met het gesprek', en: 'The class started the call later' },
        { nl: 'De school gaat daar langer door', en: 'School goes on longer there' },
        { nl: 'Ze hebben daar een andere kalender', en: 'They have a different calendar there' }
      ], answer: 0,
      explain: { nl: 'Alinea 1: “want daar loopt de klok in de winter twee uur voor.”', en: 'Paragraph 1: “because in winter the clocks there are two hours ahead.”' } },
    { id: 'q2', type: 'find', skill: 'gevolgtrekking',
      q: { nl: 'Welke zin laat zien wáárin Tanzania Nederland een stap voor was?', en: 'Which sentence shows in what way Tanzania was a step ahead of the Netherlands?' },
      options: [
        { nl: 'Afrika is een werelddeel met vierenvijftig landen en meer dan tweeduizend talen.', en: 'Africa is a continent with fifty-four countries and more than two thousand languages.' },
        { nl: 'Bijna iedereen heeft een mobiele telefoon, en veel mensen betalen al jaren met hun telefoon in plaats van met contant geld.', en: 'Almost everybody has a mobile phone, and many people have been paying with their phone instead of cash for years.' },
        { nl: 'De kinderen in Tanzania moesten lachen.', en: 'The children in Tanzania laughed.' },
        { nl: 'Juf Anouk hing het op in de klas.', en: 'Miss Anouk put it up in the classroom.' }
      ], answer: 1,
      explain: { nl: 'Betalen met je telefoon deden veel mensen in Tanzania al jaren. Daarin waren ze Nederland voor.', en: 'Many people in Tanzania had been paying with their phones for years. In that they were ahead of the Netherlands.' } },
    { id: 'q3', type: 'gap', skill: 'woordenschat',
      q: { nl: 'Afrika is geen land, maar een ___.', en: 'Africa is not a country, but a ___.' },
      options: [
        { nl: 'werelddeel', en: 'continent' },
        { nl: 'stad', en: 'city' },
        { nl: 'provincie', en: 'province' },
        { nl: 'eiland', en: 'island' }
      ], answer: 0,
      explain: { nl: 'Afrika is een werelddeel met vierenvijftig landen.', en: 'Africa is a continent with fifty-four countries.' } },
    { id: 'q4', type: 'order', skill: 'volgorde',
      q: { nl: 'Zet in de volgorde van het verhaal.', en: 'Put these in the order of the story.' },
      items: [
        { nl: 'De klas van Amani noemt dingen die niet waar zijn.', en: 'Amani’s class names things that are not true.' },
        { nl: 'De klas van Ruben vertelt over klompen en molens.', en: 'Ruben’s class talks about clogs and windmills.' },
        { nl: 'Iedereen mag vragen stellen.', en: 'Everybody can ask questions.' },
        { nl: 'De kinderen schrijven op wat ze geleerd hebben.', en: 'The children write down what they have learned.' },
        { nl: 'Een vader verandert van gedachten.', en: 'A father changes his mind.' }
      ], answer: [0, 1, 2, 3, 4],
      explain: { nl: 'Eerst Tanzania, dan Nederland, de vragen, het opschrijven en later de ouderavond.', en: 'First Tanzania, then the Netherlands, the questions, the writing and later the parents’ evening.' } },
    { id: 'q5', type: 'mc', skill: 'verwijswoorden',
      q: { nl: '“Daarin was Tanzania Nederland zelfs een stap voor.” Waar verwijst “daarin” naar?', en: '“In that, Tanzania was actually a step ahead of the Netherlands.” What does “that” refer to?' },
      options: [
        { nl: 'Betalen met je telefoon', en: 'Paying with your phone' },
        { nl: 'Het aantal talen', en: 'The number of languages' },
        { nl: 'De sneeuw op de berg', en: 'The snow on the mountain' },
        { nl: 'Naar school fietsen', en: 'Cycling to school' }
      ], answer: 0,
      explain: { nl: 'De zin ervoor gaat over betalen met de telefoon in plaats van met contant geld.', en: 'The sentence before is about paying with a phone instead of cash.' } },
    { id: 'q6', type: 'sort', skill: 'feitmening',
      q: { nl: 'Feit of mening? Zet elke zin in de goede groep.', en: 'Fact or opinion? Put every sentence in the right group.' },
      bins: [ { nl: 'Feit', en: 'Fact' }, { nl: 'Mening', en: 'Opinion' } ],
      items: [
        { nl: 'Afrika heeft vierenvijftig landen.', en: 'Africa has fifty-four countries.', bin: 0 },
        { nl: 'Zo’n project met penvrienden is overbodig.', en: 'A pen-pal project like this is unnecessary.', bin: 1 },
        { nl: 'In Tanzania wonen meer dan zestig miljoen mensen.', en: 'More than sixty million people live in Tanzania.', bin: 0 },
        { nl: 'Extra rekenles is belangrijker dan brieven schrijven.', en: 'Extra maths lessons are more important than writing letters.', bin: 1 }
      ],
      explain: { nl: 'Het aantal landen en inwoners kun je opzoeken. Of iets “overbodig” of “belangrijker” is, vindt iemand.', en: 'The number of countries and inhabitants can be looked up. Whether something is “unnecessary” or “more important” is somebody’s view.' } },
    { id: 'q7', type: 'multi', skill: 'letterlijk',
      q: { nl: 'Welke ideeën over Nederland bleken niet (helemaal) waar? Kies er 3.', en: 'Which ideas about the Netherlands turned out not to be (quite) true? Pick 3.' },
      options: [
        { nl: 'Iedereen loopt op klompen', en: 'Everybody wears clogs' },
        { nl: 'Molens zijn woonhuizen', en: 'Windmills are homes' },
        { nl: 'Iedereen is blond', en: 'Everybody is blond' },
        { nl: 'Het regent er vaak', en: 'It often rains there' },
        { nl: 'Er zijn veel fietsen', en: 'There are lots of bikes' }
      ], answer: [0, 1, 2],
      explain: { nl: 'Alinea 3: bijna niemand loopt op klompen, de meeste molens zijn een museum en lang niet iedereen is blond. Dat het vaak regent, is “bijna waar”.', en: 'Paragraph 3: hardly anybody wears clogs, most windmills are museums and far from everybody is blond. That it often rains is “almost true”.' } },
    { id: 'q8', type: 'mc', skill: 'doel',
      q: { nl: 'Waarom vertelt de schrijver over de vader die het project eerst overbodig vond?', en: 'Why does the writer tell you about the father who at first thought the project was unnecessary?' },
      options: [
        { nl: 'Om te laten zien dat niet iedereen meteen het nut zag, maar dat het project mensen deed veranderen', en: 'To show that not everybody saw the point at once, but that the project changed people’s minds' },
        { nl: 'Om vaders belachelijk te maken', en: 'To make fun of fathers' },
        { nl: 'Om te zeggen dat rekenen niet belangrijk is', en: 'To say that maths is not important' },
        { nl: 'Om de ouderavond te beschrijven', en: 'To describe the parents’ evening' }
      ], answer: 0,
      explain: { nl: 'Ook volwassenen hebben vaak “één verhaal” in hun hoofd. De vader laat zien dat je daar ook van kunt veranderen.', en: 'Grown-ups often have a “single story” in their heads too. The father shows that you can change that as well.' } },
    { id: 'q9', type: 'tf', skill: 'gevolgtrekking',
      q: { nl: 'Tijdens het gesprek ging het steeds meer over de verschillen tussen de twee landen.', en: 'During the call it was more and more about the differences between the two countries.' },
      answer: false,
      explain: { nl: 'Het ging juist steeds minder over verschillen en steeds meer over gewone dingen.', en: 'It was actually less and less about differences and more and more about ordinary things.' } },
    { id: 'q10', type: 'find', skill: 'hoofdgedachte',
      q: { nl: 'Welke zin geeft de belangrijkste les van dit verhaal het beste weer?', en: 'Which sentence best sums up the most important lesson of this story?' },
      options: [
        { nl: 'De kinderen in Tanzania moesten lachen.', en: 'The children in Tanzania laughed.' },
        { nl: 'Je moet het vragen aan de mensen die er wonen.', en: 'You have to ask the people who live there.' },
        { nl: 'Juf Anouk hing het op in de klas.', en: 'Miss Anouk put it up in the classroom.' },
        { nl: 'De superheld heeft een cape uit Tanzania en fietst door de regen in Zwolle.', en: 'The superhero has a cape from Tanzania and cycles through the rain in Zwolle.' }
      ], answer: 1,
      explain: { nl: 'Wil je een land echt leren kennen, dan vraag je het aan de mensen zelf: dat is de les van het hele boek.', en: 'If you really want to get to know a country, you ask the people themselves: that is the lesson of the whole book.' } }
  ]
}
  ]
});
