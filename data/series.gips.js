/* Vervolgverhaal - Lichaam & Gezondheid: Zes weken gips
   Hoofdstuk 1 = groep 6 (niveau 2), 2 = groep 7 (niveau 4), 3 = groep 8 (niveau 6). */
addSeries({
  id: 'gips', topic: 'lichaam', emoji: '🦴',
  title: { nl: 'Zes weken gips', en: 'Six weeks in plaster' },
  blurb: { nl: 'Een salto op de trampoline, een raar geluid, en Bram zit zes weken in het gips. Hoe word je weer sterk?',
           en: 'A somersault on the trampoline, a strange sound, and Bram is in plaster for six weeks. How do you get strong again?' },
  chapters: [
{
  level: 2, emoji: '🤕', scene: 'body',
  title: { nl: 'Een raar geluid', en: 'A strange sound' },
  teaser: { nl: 'Hoe gaat Bram zes weken lang schrijven, eten en spelen met één arm?', en: 'How will Bram write, eat and play with one arm for six weeks?' },
  text: {
    nl: [
      "Op het feestje van Noah springen alle kinderen op de trampoline in de tuin. Bram springt het hoogst van iedereen. “Kijk, een salto!” roept hij. Maar halverwege weet hij opeens niet meer waar boven en onder is.",
      "Hij komt verkeerd neer, op zijn rechterarm. Er klinkt een raar geluid, als een tak die knapt. Eerst voelt Bram niets. Dan komt de pijn, heel erg veel pijn. De tranen springen in zijn ogen.",
      "De moeder van Noah brengt hem met zijn vader naar het ziekenhuis. Een verpleegkundige legt zijn arm voorzichtig op een kussen. Daarna wordt er een röntgenfoto gemaakt. Op die foto kun je dwars door je huid heen je botten zien.",
      "“Kijk”, zegt de dokter, en ze wijst naar het scherm. In het bot van Brams onderarm zit een donkere streep. “Je arm is gebroken. Maar goed nieuws: botten kunnen zichzelf weer maken. Als je arm zes weken stil ligt, groeit het bot weer aan elkaar.”",
      "Bram krijgt gips, van zijn hand tot aan zijn elleboog. Het is warm en zwaar, en het jeukt. Zijn vader zegt dat hij er stoer uitziet.",
      "Pas in de auto naar huis beseft Bram wat dit betekent. Hij is rechtshandig. Hoe moet hij schrijven? Hoe moet hij zijn brood smeren? En over twee weken is de sportdag, waar hij zich al maanden op verheugt."
    ],
    en: [
      "At Noah’s party all the children are jumping on the trampoline in the garden. Bram jumps higher than anyone. “Look, a somersault!” he shouts. But halfway through he suddenly does not know which way is up and which is down.",
      "He lands badly, on his right arm. There is a strange sound, like a branch snapping. At first Bram feels nothing. Then the pain comes, a great deal of pain. Tears spring to his eyes.",
      "Noah’s mother takes him to the hospital with his father. A nurse carefully lays his arm on a cushion. Then an X-ray is taken. On that picture you can see your bones right through your skin.",
      "“Look,” says the doctor, pointing at the screen. There is a dark line in the bone of Bram’s forearm. “Your arm is broken. But good news: bones can repair themselves. If your arm stays still for six weeks, the bone grows back together.”",
      "Bram gets a plaster cast, from his hand up to his elbow. It is warm and heavy, and it itches. His father says he looks tough.",
      "Only in the car on the way home does Bram realise what this means. He is right-handed. How is he going to write? How is he going to butter his bread? And in two weeks it is sports day, which he has been looking forward to for months."
    ]
  },
  words: [
    { nl: 'verpleegkundige', en: 'nurse', defNl: 'iemand die in een ziekenhuis voor zieke mensen zorgt', defEn: 'somebody who looks after sick people in a hospital' },
    { nl: 'röntgenfoto', en: 'X-ray', defNl: 'een foto waarop je dwars door de huid heen de botten ziet', defEn: 'a picture on which you can see the bones right through the skin' },
    { nl: 'rechtshandig', en: 'right-handed', defNl: 'zo dat je vooral je rechterhand gebruikt, bijvoorbeeld om te schrijven', defEn: 'mainly using your right hand, for example to write' }
  ],
  questions: [
    { id: 'q1', type: 'mc', skill: 'letterlijk',
      q: { nl: 'Hoe breekt Bram zijn arm?', en: 'How does Bram break his arm?' },
      options: [
        { nl: 'Hij komt verkeerd neer bij een salto op de trampoline', en: 'He lands badly doing a somersault on the trampoline' },
        { nl: 'Hij valt van zijn fiets', en: 'He falls off his bike' },
        { nl: 'Hij botst tegen een boom', en: 'He bumps into a tree' },
        { nl: 'Hij valt van de trap', en: 'He falls down the stairs' }
      ], answer: 0,
      explain: { nl: 'Alinea 1 en 2: bij een salto op de trampoline komt hij verkeerd neer op zijn rechterarm.', en: 'Paragraphs 1 and 2: doing a somersault on the trampoline he lands badly on his right arm.' } },
    { id: 'q2', type: 'tf', skill: 'letterlijk',
      q: { nl: 'Bram voelt meteen heel veel pijn.', en: 'Bram feels a lot of pain straight away.' },
      answer: false,
      explain: { nl: '“Eerst voelt Bram niets. Dan komt de pijn.”', en: '“At first Bram feels nothing. Then the pain comes.”' } },
    { id: 'q3', type: 'mc', skill: 'gevolgtrekking',
      q: { nl: 'Waarom maken ze een röntgenfoto?', en: 'Why do they take an X-ray?' },
      options: [
        { nl: 'Om te zien of het bot in zijn arm gebroken is', en: 'To see whether the bone in his arm is broken' },
        { nl: 'Om een mooie foto voor het feestje te maken', en: 'To take a nice photo for the party' },
        { nl: 'Om zijn hart te bekijken', en: 'To look at his heart' },
        { nl: 'Omdat dat bij elk feestje moet', en: 'Because that has to happen at every party' }
      ], answer: 0,
      explain: { nl: 'Op een röntgenfoto zie je de botten. Zo ziet de dokter de donkere streep: de breuk.', en: 'An X-ray shows the bones. That is how the doctor sees the dark line: the break.' } },
    { id: 'q4', type: 'order', skill: 'volgorde',
      q: { nl: 'Zet op volgorde wat er gebeurt.', en: 'Put what happens in order.' },
      items: [
        { nl: 'Bram probeert een salto.', en: 'Bram tries a somersault.' },
        { nl: 'Er klinkt een geluid als een tak die knapt.', en: 'There is a sound like a branch snapping.' },
        { nl: 'Er wordt een röntgenfoto gemaakt.', en: 'An X-ray is taken.' },
        { nl: 'Bram krijgt gips.', en: 'Bram gets a plaster cast.' }
      ], answer: [0, 1, 2, 3],
      explain: { nl: 'De salto, de val, het ziekenhuis met de foto, en dan het gips.', en: 'The somersault, the fall, the hospital with the X-ray, and then the cast.' } },
    { id: 'q5', type: 'gap', skill: 'woordenschat',
      q: { nl: 'Iemand die vooral met zijn rechterhand schrijft, is ___.', en: 'Somebody who mainly writes with their right hand is ___.' },
      options: [
        { nl: 'rechtshandig', en: 'right-handed' },
        { nl: 'linkshandig', en: 'left-handed' },
        { nl: 'verpleegkundige', en: 'a nurse' },
        { nl: 'gebroken', en: 'broken' }
      ], answer: 0,
      explain: { nl: 'Bram is rechtshandig. Daarom is een gebroken rechterarm extra lastig.', en: 'Bram is right-handed. That is why a broken right arm is extra difficult.' } },
    { id: 'q6', type: 'mc', skill: 'gevolgtrekking',
      q: { nl: 'Waarom is Bram in de auto ongerust?', en: 'Why is Bram worried in the car?' },
      options: [
        { nl: 'Hij is rechtshandig en juist zijn rechterarm zit in het gips', en: 'He is right-handed and it is his right arm that is in plaster' },
        { nl: 'Hij is zijn cadeautje kwijt', en: 'He has lost his present' },
        { nl: 'Hij heeft honger', en: 'He is hungry' },
        { nl: 'Hij komt te laat op school', en: 'He will be late for school' }
      ], answer: 0,
      explain: { nl: 'Hij vraagt zich af hoe hij moet schrijven en eten, en of hij mee kan doen aan de sportdag.', en: 'He wonders how he will write and eat, and whether he can take part in sports day.' } }
  ]
},
{
  level: 4, emoji: '✍️', scene: 'body',
  title: { nl: 'Zes weken linkshandig', en: 'Left-handed for six weeks' },
  recap: { nl: 'Bram breekt zijn rechterarm bij een salto op de trampoline. Op de röntgenfoto zie je een donkere streep in het bot. Hij krijgt zes weken gips. Maar Bram is rechtshandig, en over twee weken is de sportdag.',
           en: 'Bram breaks his right arm doing a somersault on the trampoline. The X-ray shows a dark line in the bone. He gets a plaster cast for six weeks. But Bram is right-handed, and sports day is in two weeks.' },
  teaser: { nl: 'Wordt Brams arm ooit weer zo sterk als vroeger?', en: 'Will Bram’s arm ever be as strong as before?' },
  text: {
    nl: [
      "De eerste dagen waren moeilijk. Bram probeerde met zijn linkerhand te schrijven, maar de letters leken op spinnetjes die over het papier waren gelopen. Zijn veters strikken lukte niet, en bij het eten viel de helft van zijn erwten van zijn vork. Na een week ging het al beter. Na twee weken kon juf Fatma zijn werk weer lezen.",
      "Op school schreven alle kinderen hun naam op het gips. Noah tekende er een draak op, omdat hij zich schuldig voelde. Het was tenslotte zijn trampoline. Bram zei dat het niemands schuld was. Hij had zelf die salto willen doen.",
      "Bij biologie vertelde juf Fatma hoe een bot geneest. Een bot is geen dood stuk steen, maar levend weefsel met bloedvaten. Als het breekt, ontstaat er eerst een klompje gestold bloed tussen de stukken. Daarin groeit binnen een paar weken zacht, nieuw weefsel, een soort brug tussen de twee kanten. Langzaam wordt die brug harder, tot het weer echt bot is. Daarom moet je arm stilliggen: anders breekt de zachte brug steeds opnieuw.",
      "Toch werd Bram steeds chagrijniger. In de pauze keek hij vanaf de kant hoe de anderen voetbalden. Thuis snauwde hij tegen zijn zusje, terwijl zij alleen vroeg of hij wilde kaarten. ’s Avonds lag hij in bed en voelde hij zich nutteloos.",
      "Meester Tim, de gymleraar, zag het. “Op de sportdag heb ik een assistent-scheidsrechter nodig”, zei hij. “Iemand die de spelregels goed kent en overzicht heeft.” Bram kreeg een fluitje en een geel shirt. Hij floot die dag zes wedstrijden, en voor het eerst in weken lachte hij weer.",
      "Na zes weken ging het gips eraf. Bram had zich er zo op verheugd. Maar toen hij zijn arm zag, schrok hij. Hij was dun en bleek, en hij kon zijn pols bijna niet buigen. Thuis probeerde hij een pan op te tillen. Het lukte niet."
    ],
    en: [
      "The first few days were hard. Bram tried to write with his left hand, but the letters looked like little spiders that had walked across the paper. He could not tie his laces, and at dinner half his peas fell off his fork. After a week it was already going better. After two weeks Miss Fatma could read his work again.",
      "At school all the children wrote their names on the cast. Noah drew a dragon on it, because he felt guilty. It was his trampoline, after all. Bram said it was nobody’s fault. He had wanted to do that somersault himself.",
      "In biology Miss Fatma explained how a bone heals. A bone is not a dead piece of stone, but living tissue with blood vessels. When it breaks, first a little clump of clotted blood forms between the pieces. In that, within a few weeks, soft new tissue grows, a kind of bridge between the two sides. Slowly that bridge gets harder, until it is real bone again. That is why your arm has to stay still: otherwise the soft bridge keeps breaking again.",
      "Still, Bram got grumpier and grumpier. At break time he watched from the side while the others played football. At home he snapped at his little sister, when all she asked was whether he wanted to play cards. At night he lay in bed feeling useless.",
      "Mr Tim, the PE teacher, noticed. “On sports day I need an assistant referee,” he said. “Somebody who knows the rules well and can keep an overview.” Bram got a whistle and a yellow shirt. That day he refereed six matches, and for the first time in weeks he laughed again.",
      "After six weeks the cast came off. Bram had been looking forward to it so much. But when he saw his arm, he got a fright. It was thin and pale, and he could hardly bend his wrist. At home he tried to lift a pan. He could not."
    ]
  },
  words: [
    { nl: 'weefsel', en: 'tissue', defNl: 'het materiaal waar je lichaam uit bestaat, zoals huid, spier of bot', defEn: 'the material your body is made of, like skin, muscle or bone' },
    { nl: 'chagrijniger', en: 'grumpier', defNl: 'steeds slechter gehumeurd (chagrijnig)', defEn: 'more and more bad-tempered (grumpy)' },
    { nl: 'nutteloos', en: 'useless', defNl: 'zo dat je het gevoel hebt dat je niets kunt of niets toevoegt', defEn: 'feeling that you cannot do anything or add anything' }
  ],
  questions: [
    { id: 'q1', type: 'mc', skill: 'letterlijk',
      q: { nl: 'Wat tekende Noah op het gips?', en: 'What did Noah draw on the cast?' },
      options: [
        { nl: 'Een draak', en: 'A dragon' },
        { nl: 'Een voetbal', en: 'A football' },
        { nl: 'Een trampoline', en: 'A trampoline' },
        { nl: 'Een ziekenhuis', en: 'A hospital' }
      ], answer: 0,
      explain: { nl: 'Alinea 2: “Noah tekende er een draak op.”', en: 'Paragraph 2: “Noah drew a dragon on it.”' } },
    { id: 'q2', type: 'mc', skill: 'gevolgtrekking',
      q: { nl: 'Waarom voelde Noah zich schuldig?', en: 'Why did Noah feel guilty?' },
      options: [
        { nl: 'Bram brak zijn arm op Noahs trampoline', en: 'Bram broke his arm on Noah’s trampoline' },
        { nl: 'Noah had Bram geduwd', en: 'Noah had pushed Bram' },
        { nl: 'Noah had Bram uitgelachen', en: 'Noah had laughed at Bram' },
        { nl: 'Noah was de sportdag vergeten', en: 'Noah had forgotten sports day' }
      ], answer: 0,
      explain: { nl: '“Het was tenslotte zijn trampoline.” Bram zegt zelf dat het niemands schuld was.', en: '“It was his trampoline, after all.” Bram himself says it was nobody’s fault.' } },
    { id: 'q3', type: 'mc', skill: 'verwijswoorden',
      q: { nl: '“Daarin groeit binnen een paar weken zacht, nieuw weefsel.” Waar verwijst “daarin” naar?', en: '“In that, within a few weeks, soft new tissue grows.” What does “that” refer to?' },
      options: [
        { nl: 'Het klompje gestold bloed', en: 'The little clump of clotted blood' },
        { nl: 'Het gips', en: 'The cast' },
        { nl: 'De bloedvaten', en: 'The blood vessels' },
        { nl: 'De arm van Noah', en: 'Noah’s arm' }
      ], answer: 0,
      explain: { nl: 'De zin ervoor noemt het klompje gestold bloed tussen de stukken bot.', en: 'The sentence before mentions the clump of clotted blood between the pieces of bone.' } },
    { id: 'q4', type: 'multi', skill: 'letterlijk',
      q: { nl: 'Wat was moeilijk voor Bram in de eerste dagen? Kies er 3.', en: 'What was hard for Bram in the first few days? Pick 3.' },
      options: [
        { nl: 'Schrijven met zijn linkerhand', en: 'Writing with his left hand' },
        { nl: 'Zijn veters strikken', en: 'Tying his laces' },
        { nl: 'Erwten eten met een vork', en: 'Eating peas with a fork' },
        { nl: 'Televisie kijken', en: 'Watching television' },
        { nl: 'Praten met zijn vrienden', en: 'Talking to his friends' }
      ], answer: [0, 1, 2],
      explain: { nl: 'Alinea 1 noemt het schrijven, de veters en de erwten die van zijn vork vielen.', en: 'Paragraph 1 mentions writing, the laces and the peas falling off his fork.' } },
    { id: 'q5', type: 'order', skill: 'volgorde',
      q: { nl: 'Zet in de volgorde van het verhaal.', en: 'Put these in the order of the story.' },
      items: [
        { nl: 'Bram schrijft letters als spinnetjes.', en: 'Bram writes letters like little spiders.' },
        { nl: 'De kinderen schrijven hun naam op het gips.', en: 'The children write their names on the cast.' },
        { nl: 'Juf Fatma legt uit hoe een bot geneest.', en: 'Miss Fatma explains how a bone heals.' },
        { nl: 'Bram fluit wedstrijden op de sportdag.', en: 'Bram referees matches on sports day.' },
        { nl: 'Het gips gaat eraf.', en: 'The cast comes off.' }
      ], answer: [0, 1, 2, 3, 4],
      explain: { nl: 'De eerste dagen, de school, de biologieles, de sportdag, en na zes weken het gips eraf.', en: 'The first days, school, the biology lesson, sports day, and after six weeks the cast comes off.' } },
    { id: 'q6', type: 'gap', skill: 'woordenschat',
      q: { nl: 'Een bot is geen dood stuk steen, maar levend ___ met bloedvaten.', en: 'A bone is not a dead piece of stone, but living ___ with blood vessels.' },
      options: [
        { nl: 'weefsel', en: 'tissue' },
        { nl: 'plastic', en: 'plastic' },
        { nl: 'gips', en: 'plaster' },
        { nl: 'hout', en: 'wood' }
      ], answer: 0,
      explain: { nl: 'Weefsel is het materiaal waar je lichaam uit bestaat. Bot leeft, en kan daarom genezen.', en: 'Tissue is the material your body is made of. Bone is alive, and that is why it can heal.' } },
    { id: 'q7', type: 'mc', skill: 'structuur',
      q: { nl: 'Wat is de taak van alinea 3?', en: 'What is the job of paragraph 3?' },
      options: [
        { nl: 'Uitleggen hoe een bot geneest en waarom de arm stil moet liggen', en: 'Explaining how a bone heals and why the arm has to stay still' },
        { nl: 'Vertellen over de sportdag', en: 'Telling you about sports day' },
        { nl: 'De draak van Noah beschrijven', en: 'Describing Noah’s dragon' },
        { nl: 'Vertellen hoe het verhaal afloopt', en: 'Telling you how the story ends' }
      ], answer: 0,
      explain: { nl: 'Alinea 3 is uitleg: van gestold bloed via een zachte brug naar nieuw bot.', en: 'Paragraph 3 is an explanation: from clotted blood via a soft bridge to new bone.' } },
    { id: 'q8', type: 'mc', skill: 'hoofdgedachte',
      q: { nl: 'Waar gaat dit hoofdstuk vooral over?', en: 'What is this chapter mainly about?' },
      options: [
        { nl: 'Hoe Bram zes weken met één arm leeft, en hoe moeilijk dat soms is', en: 'How Bram lives with one arm for six weeks, and how hard that sometimes is' },
        { nl: 'Hoe je moet kaarten', en: 'How to play cards' },
        { nl: 'De spelregels van voetbal', en: 'The rules of football' },
        { nl: 'De trampoline van Noah', en: 'Noah’s trampoline' }
      ], answer: 0,
      explain: { nl: 'Het hoofdstuk volgt Bram van het schrijven met links tot het moment dat het gips eraf gaat.', en: 'The chapter follows Bram from writing with his left hand to the moment the cast comes off.' } }
  ]
},
{
  level: 6, emoji: '💪', scene: 'body',
  title: { nl: 'Gebruiken of verliezen', en: 'Use it or lose it' },
  recap: { nl: 'Bram brak zijn arm op een trampoline en had zes weken gips. Hij leerde met links schrijven en was assistent-scheidsrechter op de sportdag. Maar toen het gips eraf ging, was zijn arm dun en slap, en kon hij zijn pols bijna niet buigen.',
           en: 'Bram broke his arm on a trampoline and had a cast for six weeks. He learned to write with his left hand and was assistant referee on sports day. But when the cast came off, his arm was thin and weak, and he could hardly bend his wrist.' },
  text: {
    nl: [
      "Bij de fysiotherapeut legde Ilona uit wat er gebeurd was. “Je bot is weer heel”, zei ze, “maar je spieren zijn zes weken lang niet gebruikt. Spieren die niets hoeven te doen, worden kleiner. Je lichaam is namelijk zuinig: het houdt geen spieren in stand die je niet nodig hebt.” Ook zijn gewricht was stijf geworden, omdat het zo lang niet had bewogen. “Het goede nieuws is dat het andersom ook werkt. Wat je gebruikt, wordt weer sterker.”",
      "Bram kreeg een schema met oefeningen. Elke dag moest hij zijn pols buigen en strekken, een bal in zijn hand knijpen en met een klein gewichtje tillen. Hij hield alles bij in een oefenboekje, net als een echte sporter. In de eerste week kon hij de bal nauwelijks indrukken. In de vierde week tilde hij het gewichtje dertig keer achter elkaar op.",
      "Ilona vertelde ook dat botten veel slimmer zijn dan de meeste mensen denken. Een volwassene heeft zo'n tweehonderdzes botten, en die worden steeds opnieuw opgebouwd. Oude stukjes bot worden afgebroken en vervangen door nieuwe, zodat je in ongeveer tien jaar een bijna nieuw skelet hebt. Bewegen helpt daarbij: botten worden sterker als je er af en toe kracht op zet, bijvoorbeeld door te rennen of te springen.",
      "In die weken stond er een artikel in de krant. Een arts pleitte ervoor om trampolinespringen te verbieden voor kinderen onder de twaalf, omdat er elk jaar duizenden kinderen met een blessure naar de eerste hulp komen. Brams vader vond dat een goed idee. Bram niet. Hij schreef een brief naar de krant. ‘Bewegen is juist goed voor je botten’, schreef hij. ‘Een verbod is niet nodig. Beter zijn duidelijke regels: niet met te veel kinderen tegelijk springen, geen salto's zonder les, en altijd een net eromheen.’",
      "Tot zijn verbazing werd de brief afgedrukt. Een paar mensen reageerden boos, maar een trainer van een turnvereniging schreef dat Bram gelijk had. Zijn vader las de brief drie keer en zei toen: “Misschien heb je een punt.”",
      "Drie maanden na het ongeluk speelde Bram weer mee in zijn voetbalteam. Zijn arm was bijna zo sterk als de andere. En hij had er iets bij gekregen: hij kon nu met allebei zijn handen schrijven. Op de trampoline van Noah springt hij nog steeds. Alleen de salto bewaart hij voor de turnles."
    ],
    en: [
      "At the physiotherapist’s, Ilona explained what had happened. “Your bone is whole again,” she said, “but your muscles have not been used for six weeks. Muscles that have nothing to do get smaller. Your body is thrifty, you see: it does not keep muscles that you do not need.” His joint had become stiff too, because it had not moved for so long. “The good news is that it works the other way round too. What you use gets stronger again.”",
      "Bram got a schedule of exercises. Every day he had to bend and stretch his wrist, squeeze a ball in his hand and lift a small weight. He kept track of everything in an exercise notebook, just like a real athlete. In the first week he could hardly squeeze the ball. In the fourth week he lifted the weight thirty times in a row.",
      "Ilona also told him that bones are much cleverer than most people think. An adult has about two hundred and six bones, and they are rebuilt again and again. Old bits of bone are broken down and replaced by new ones, so that in about ten years you have an almost new skeleton. Moving helps with that: bones get stronger if you put some force on them now and then, for example by running or jumping.",
      "In those weeks there was an article in the newspaper. A doctor argued that trampolining should be banned for children under twelve, because every year thousands of children come to A&E with an injury. Bram’s father thought that was a good idea. Bram did not. He wrote a letter to the newspaper. ‘Moving is actually good for your bones,’ he wrote. ‘A ban is not necessary. Clear rules are better: do not jump with too many children at once, no somersaults without lessons, and always a net around it.’",
      "To his surprise the letter was printed. A few people reacted angrily, but a coach from a gymnastics club wrote that Bram was right. His father read the letter three times and then said: “Maybe you have a point.”",
      "Three months after the accident Bram was playing in his football team again. His arm was almost as strong as the other one. And he had gained something: he could now write with both hands. He still jumps on Noah’s trampoline. Only the somersault he saves for gymnastics class."
    ]
  },
  words: [
    { nl: 'fysiotherapeut', en: 'physiotherapist', defNl: 'iemand die mensen met oefeningen helpt om weer goed te bewegen', defEn: 'somebody who helps people move properly again with exercises' },
    { nl: 'gewricht', en: 'joint', defNl: 'de plek waar twee botten aan elkaar zitten en kunnen buigen, zoals je pols', defEn: 'the place where two bones meet and can bend, like your wrist' },
    { nl: 'pleitte', en: 'argued', defNl: 'gaf met redenen aan dat iets moet gebeuren (pleiten)', defEn: 'gave reasons why something should happen (to argue for)' }
  ],
  questions: [
    { id: 'q1', type: 'mc', skill: 'letterlijk',
      q: { nl: 'Waarom was de arm van Bram zo dun geworden?', en: 'Why had Bram’s arm become so thin?' },
      options: [
        { nl: 'Zijn spieren waren zes weken niet gebruikt en werden kleiner', en: 'His muscles had not been used for six weeks and got smaller' },
        { nl: 'Hij had te weinig gegeten', en: 'He had eaten too little' },
        { nl: 'Het gips zat te strak', en: 'The cast was too tight' },
        { nl: 'Het bot was nog steeds gebroken', en: 'The bone was still broken' }
      ], answer: 0,
      explain: { nl: 'Ilona zegt: “je spieren zijn zes weken lang niet gebruikt. Spieren die niets hoeven te doen, worden kleiner.”', en: 'Ilona says: “your muscles have not been used for six weeks. Muscles that have nothing to do get smaller.”' } },
    { id: 'q2', type: 'find', skill: 'gevolgtrekking',
      q: { nl: 'Welke zin legt uit waaróm je lichaam spieren kleiner maakt als je ze niet gebruikt?', en: 'Which sentence explains why your body makes muscles smaller if you do not use them?' },
      options: [
        { nl: 'Spieren die niets hoeven te doen, worden kleiner.', en: 'Muscles that have nothing to do get smaller.' },
        { nl: 'Je lichaam is namelijk zuinig: het houdt geen spieren in stand die je niet nodig hebt.', en: 'Your body is thrifty, you see: it does not keep muscles that you do not need.' },
        { nl: 'Ook zijn gewricht was stijf geworden, omdat het zo lang niet had bewogen.', en: 'His joint had become stiff too, because it had not moved for so long.' },
        { nl: 'Bram kreeg een schema met oefeningen.', en: 'Bram got a schedule of exercises.' }
      ], answer: 1,
      explain: { nl: 'De eerste zin zegt wát er gebeurt. De tweede zin zegt waaróm: je lichaam is zuinig.', en: 'The first sentence says what happens. The second sentence says why: your body is thrifty.' } },
    { id: 'q3', type: 'gap', skill: 'woordenschat',
      q: { nl: 'De arts ___ voor een verbod op trampolinespringen voor jonge kinderen.', en: 'The doctor ___ for a ban on trampolining for young children.' },
      options: [
        { nl: 'pleitte', en: 'argued' },
        { nl: 'turnde', en: 'did gymnastics' },
        { nl: 'knipte', en: 'cut' },
        { nl: 'vergat', en: 'forgot' }
      ], answer: 0,
      explain: { nl: 'Pleiten is met redenen zeggen dat iets moet gebeuren. De arts noemde de vele blessures als reden.', en: 'To argue for something is to give reasons why it should happen. The doctor gave the many injuries as a reason.' } },
    { id: 'q4', type: 'order', skill: 'volgorde',
      q: { nl: 'Zet in de volgorde van het verhaal.', en: 'Put these in the order of the story.' },
      items: [
        { nl: 'Ilona legt uit waarom de arm dun is.', en: 'Ilona explains why the arm is thin.' },
        { nl: 'Bram houdt een oefenboekje bij.', en: 'Bram keeps an exercise notebook.' },
        { nl: 'Er staat een artikel in de krant.', en: 'There is an article in the newspaper.' },
        { nl: 'Bram schrijft een brief naar de krant.', en: 'Bram writes a letter to the newspaper.' },
        { nl: 'Bram speelt weer mee in zijn voetbalteam.', en: 'Bram plays in his football team again.' }
      ], answer: [0, 1, 2, 3, 4],
      explain: { nl: 'De uitleg, het oefenen, het artikel, Brams brief, en drie maanden na het ongeluk het voetballen.', en: 'The explanation, the exercises, the article, Bram’s letter, and three months after the accident the football.' } },
    { id: 'q5', type: 'mc', skill: 'verwijswoorden',
      q: { nl: '“Het goede nieuws is dat het andersom ook werkt.” Wat werkt er andersom?', en: '“The good news is that it works the other way round too.” What works the other way round?' },
      options: [
        { nl: 'Spieren die je wél gebruikt, worden juist sterker', en: 'Muscles that you do use actually get stronger' },
        { nl: 'Botten worden vanzelf zwakker', en: 'Bones get weaker by themselves' },
        { nl: 'Het gips gaat er weer om', en: 'The cast goes back on' },
        { nl: 'De brief naar de krant', en: 'The letter to the newspaper' }
      ], answer: 0,
      explain: { nl: 'Niet gebruiken maakt spieren kleiner; andersom maakt gebruiken ze sterker: “Wat je gebruikt, wordt weer sterker.”', en: 'Not using makes muscles smaller; the other way round, using them makes them stronger: “What you use gets stronger again.”' } },
    { id: 'q6', type: 'sort', skill: 'feitmening',
      q: { nl: 'Feit of mening? Zet elke zin in de goede groep.', en: 'Fact or opinion? Put every sentence in the right group.' },
      bins: [ { nl: 'Feit', en: 'Fact' }, { nl: 'Mening', en: 'Opinion' } ],
      items: [
        { nl: 'Een volwassene heeft ongeveer tweehonderdzes botten.', en: 'An adult has about two hundred and six bones.', bin: 0 },
        { nl: 'Een trampolineverbod is niet nodig.', en: 'A trampoline ban is not necessary.', bin: 1 },
        { nl: 'Spieren die je niet gebruikt, worden kleiner.', en: 'Muscles you do not use get smaller.', bin: 0 },
        { nl: 'Trampolinespringen moet verboden worden voor jonge kinderen.', en: 'Trampolining should be banned for young children.', bin: 1 }
      ],
      explain: { nl: 'Het aantal botten en wat spieren doen, kun je nagaan. Of iets “nodig” is of “moet”, is een mening: daar kun je verschillend over denken.', en: 'The number of bones and what muscles do can be checked. Whether something is “necessary” or “should” happen is an opinion: people can disagree.' } },
    { id: 'q7', type: 'multi', skill: 'letterlijk',
      q: { nl: 'Welke regels stelde Bram voor in zijn brief? Kies er 3.', en: 'Which rules did Bram suggest in his letter? Pick 3.' },
      options: [
        { nl: 'Niet met te veel kinderen tegelijk springen', en: 'Do not jump with too many children at once' },
        { nl: 'Geen salto’s zonder les', en: 'No somersaults without lessons' },
        { nl: 'Altijd een net eromheen', en: 'Always a net around it' },
        { nl: 'Alleen springen met een helm', en: 'Only jump with a helmet' },
        { nl: 'Alleen springen in de zomer', en: 'Only jump in summer' }
      ], answer: [0, 1, 2],
      explain: { nl: 'Alinea 4: niet met te veel kinderen tegelijk, geen salto’s zonder les en altijd een net eromheen.', en: 'Paragraph 4: not too many children at once, no somersaults without lessons and always a net around it.' } },
    { id: 'q8', type: 'mc', skill: 'doel',
      q: { nl: 'Waarom schreef Bram een brief naar de krant?', en: 'Why did Bram write a letter to the newspaper?' },
      options: [
        { nl: 'Om de lezers te overtuigen dat regels beter zijn dan een verbod', en: 'To convince the readers that rules are better than a ban' },
        { nl: 'Om te vertellen hoe zijn arm brak', en: 'To tell them how his arm broke' },
        { nl: 'Om geld te vragen voor een nieuwe trampoline', en: 'To ask for money for a new trampoline' },
        { nl: 'Om de arts uit te lachen', en: 'To make fun of the doctor' }
      ], answer: 0,
      explain: { nl: 'Bram geeft een mening met argumenten (bewegen is goed voor je botten) en een beter voorstel: regels.', en: 'Bram gives an opinion with arguments (moving is good for your bones) and a better proposal: rules.' } },
    { id: 'q9', type: 'tf', skill: 'gevolgtrekking',
      q: { nl: 'Brams vader bleef het helemaal oneens met Bram.', en: 'Bram’s father stayed completely against Bram’s view.' },
      answer: false,
      explain: { nl: 'Na de brief drie keer te lezen zegt zijn vader: “Misschien heb je een punt.”', en: 'After reading the letter three times his father says: “Maybe you have a point.”' } },
    { id: 'q10', type: 'find', skill: 'hoofdgedachte',
      q: { nl: 'Welke zin vat de belangrijkste les van Ilona het beste samen?', en: 'Which sentence best sums up Ilona’s most important lesson?' },
      options: [
        { nl: 'Wat je gebruikt, wordt weer sterker.', en: 'What you use gets stronger again.' },
        { nl: 'In de eerste week kon hij de bal nauwelijks indrukken.', en: 'In the first week he could hardly squeeze the ball.' },
        { nl: 'Brams vader vond dat een goed idee.', en: 'Bram’s father thought that was a good idea.' },
        { nl: 'Alleen de salto bewaart hij voor de turnles.', en: 'Only the somersault he saves for gymnastics class.' }
      ], answer: 0,
      explain: { nl: 'Gebruiken of verliezen: wat je beweegt, wordt sterker. Dat geldt voor spieren én botten.', en: 'Use it or lose it: what you move gets stronger. That goes for muscles and bones.' } }
  ]
}
  ]
});
