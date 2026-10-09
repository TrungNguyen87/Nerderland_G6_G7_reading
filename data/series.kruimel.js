/* Vervolgverhaal - Mysterie & Detective: Detectivebureau Kruimel
   Een lopend verhaal ("wordt vervolgd"): hoofdstuk 1 = groep 6 (niveau 2), 2 = niveau 3,
   3 = groep 7 (niveau 4), 4 = groep 8 (niveau 6). Een hoofdstuk 5 erbij? Zet een nieuw object
   achteraan `chapters` (niveau 6, met een `recap`) en zet een `teaser` op hoofdstuk 4. */
addSeries({
  id: 'kruimel', topic: 'mysterie', emoji: '🕵️', more: true,
  title: { nl: 'Detectivebureau Kruimel', en: 'Crumb Detective Agency' },
  blurb: { nl: 'Fenna, Yassin en kleine Pepijn lossen álles op vanuit een tuinhuisje. Maar wie is De Raadselaar, die hen raadsels stuurt?',
           en: 'Fenna, Yassin and little Pepijn solve everything from a garden shed. But who is The Riddler, sending them riddles?' },
  ideas: [
    { nl: 'Wat staat er in de nieuwe envelop met “Zaak 2”?', en: 'What is in the new envelope marked “Case 2”?' },
    { nl: 'Verzin zelf een raadsel dat de detectives moeten oplossen.', en: 'Make up a riddle of your own for the detectives to solve.' },
    { nl: 'Wie is de tweede Raadselaar, en waarom stuurt diegene de brief?', en: 'Who is the second Riddler, and why is that person sending the letter?' }
  ],
  chapters: [
{
  level: 2, emoji: '🥄', scene: 'school',
  title: { nl: 'Het Gouden Lepeltje', en: 'The Golden Spoon' },
  teaser: { nl: 'Wie heeft het briefje in het eksternest gelegd? En wat is “de echte zaak”?', en: 'Who put the note in the magpie’s nest? And what is “the real case”?' },
  text: {
    nl: [
      "Achter het huis van Fenna staat een oud tuinhuisje. Op de deur hangt een bord: DETECTIVEBUREAU KRUIMEL. Wij lossen álles op. Fenna is de baas. Haar vriend Yassin is de uitvinder. En haar broertje Pepijn is de stagiair. Hij is acht jaar en heeft altijd een koekje in zijn zak.",
      "Op maandagochtend komt bakker Van Dam binnen. Hij ziet er verdrietig uit. “Mijn Gouden Lepeltje is weg”, zegt hij. “Dat is de prijs voor de lekkerste appeltaart van het land. Gisteren stond het nog in de etalage. Vanochtend was het verdwenen!”",
      "De drie detectives rennen naar de bakkerij. Yassin bekijkt het raam. Bovenin staat een klein spleetje open. Fenna schrijft alles op in haar boekje. Pepijn zoekt op de stoep en vindt een zwart-wit veertje en een stukje zilverpapier.",
      "“Een veertje!” roept Pepijn. “Was het een vogel?” “Een vogel kan toch geen lepel stelen?” zegt Yassin. Fenna denkt na. “Een ekster wel. Eksters houden van alles wat glimt.” Ze kijken omhoog. In de grote boom achter de kerk zit een nest.",
      "Yassin klimt in de boom. In het nest liggen een flessendop, een knoop, een sleutel en… het Gouden Lepeltje! Beneden juicht bakker Van Dam. Hij geeft de detectives elk een taartje.",
      "Yassin klimt weer naar beneden. “Er lag nog iets onder het lepeltje”, zegt hij. Hij geeft Fenna een opgevouwen briefje. Er staat op: ‘Goed gedaan, Kruimel. Dit was nog maar een oefening. De echte zaak begint morgen. – De Raadselaar.’ Fenna kijkt Yassin aan. “Wie legt nou een briefje in een eksternest?” fluistert ze."
    ],
    en: [
      "Behind Fenna’s house stands an old garden shed. On the door hangs a sign: CRUMB DETECTIVE AGENCY. We solve everything. Fenna is the boss. Her friend Yassin is the inventor. And her little brother Pepijn is the intern. He is eight years old and always has a cookie in his pocket.",
      "On Monday morning baker Van Dam comes in. He looks sad. “My Golden Spoon is gone,” he says. “It is the prize for the tastiest apple pie in the country. Yesterday it was still in the shop window. This morning it had disappeared!”",
      "The three detectives run to the bakery. Yassin looks at the window. At the top a small gap is open. Fenna writes everything down in her notebook. Pepijn searches the pavement and finds a black-and-white feather and a bit of silver paper.",
      "“A feather!” shouts Pepijn. “Was it a bird?” “Surely a bird cannot steal a spoon?” says Yassin. Fenna thinks. “A magpie can. Magpies love anything that shines.” They look up. In the big tree behind the church there is a nest.",
      "Yassin climbs the tree. In the nest lie a bottle cap, a button, a key and… the Golden Spoon! Down below, baker Van Dam cheers. He gives each of the detectives a little cake.",
      "Yassin climbs back down. “There was something else under the spoon,” he says. He hands Fenna a folded note. It says: ‘Well done, Crumb. This was only a practice run. The real case begins tomorrow. – The Riddler.’ Fenna looks at Yassin. “Who puts a note in a magpie’s nest?” she whispers."
    ]
  },
  words: [
    { nl: 'stagiair', en: 'intern', defNl: 'iemand die nog leert en een tijdje meehelpt op een werkplek', defEn: 'somebody who is still learning and helps out at a workplace for a while' },
    { nl: 'etalage', en: 'shop window', defNl: 'het raam van een winkel waarin de spullen te zien zijn', defEn: 'the window of a shop in which the goods can be seen' },
    { nl: 'ekster', en: 'magpie', defNl: 'een zwart-witte vogel die van glimmende dingen houdt', defEn: 'a black-and-white bird that loves shiny things' }
  ],
  questions: [
    { id: 'q1', type: 'mc', skill: 'letterlijk',
      q: { nl: 'Wie is de baas van Detectivebureau Kruimel?', en: 'Who is the boss of the Crumb Detective Agency?' },
      options: [
        { nl: 'Fenna', en: 'Fenna' },
        { nl: 'Yassin', en: 'Yassin' },
        { nl: 'Pepijn', en: 'Pepijn' },
        { nl: 'Bakker Van Dam', en: 'Baker Van Dam' }
      ], answer: 0,
      explain: { nl: 'In de eerste alinea staat: “Fenna is de baas.”', en: 'The first paragraph says: “Fenna is the boss.”' } },
    { id: 'q2', type: 'tf', skill: 'letterlijk',
      q: { nl: 'Het Gouden Lepeltje is de prijs voor de lekkerste appeltaart van het land.', en: 'The Golden Spoon is the prize for the tastiest apple pie in the country.' },
      answer: true,
      explain: { nl: 'Dat zegt bakker Van Dam zelf in alinea 2.', en: 'Baker Van Dam says so himself in paragraph 2.' } },
    { id: 'q3', type: 'mc', skill: 'gevolgtrekking',
      q: { nl: 'Waarom denkt Fenna aan een ekster?', en: 'Why does Fenna think of a magpie?' },
      options: [
        { nl: 'Eksters houden van glimmende dingen en Pepijn vond een zwart-wit veertje', en: 'Magpies love shiny things and Pepijn found a black-and-white feather' },
        { nl: 'Ze zag een ekster het lepeltje meenemen', en: 'She saw a magpie take the spoon' },
        { nl: 'De bakker vertelde dat een ekster zijn lepeltje had gestolen', en: 'The baker told her a magpie had stolen his spoon' },
        { nl: 'Yassin heeft het nest al eerder gezien', en: 'Yassin had seen the nest before' }
      ], answer: 0,
      explain: { nl: 'Het veertje is zwart-wit en een lepeltje glimt. Die twee aanwijzingen samen wijzen naar een ekster.', en: 'The feather is black-and-white and a spoon shines. Those two clues together point to a magpie.' } },
    { id: 'q4', type: 'order', skill: 'volgorde',
      q: { nl: 'Zet in de volgorde van het verhaal.', en: 'Put these in the order of the story.' },
      items: [
        { nl: 'Bakker Van Dam vertelt dat zijn lepeltje weg is.', en: 'Baker Van Dam says his spoon is gone.' },
        { nl: 'Pepijn vindt een veertje op de stoep.', en: 'Pepijn finds a feather on the pavement.' },
        { nl: 'Yassin klimt in de boom.', en: 'Yassin climbs the tree.' },
        { nl: 'Fenna leest het briefje van De Raadselaar.', en: 'Fenna reads the note from The Riddler.' }
      ], answer: [0, 1, 2, 3],
      explain: { nl: 'Eerst de bakker, dan de aanwijzing op de stoep, daarna de boom en ten slotte het briefje.', en: 'First the baker, then the clue on the pavement, then the tree and finally the note.' } },
    { id: 'q5', type: 'gap', skill: 'woordenschat',
      q: { nl: 'Wat in de ___ staat, kun je van buiten door het raam zien.', en: 'What is in the ___ can be seen through the window from outside.' },
      options: [
        { nl: 'etalage', en: 'shop window' },
        { nl: 'stagiair', en: 'intern' },
        { nl: 'ekster', en: 'magpie' },
        { nl: 'spleetje', en: 'gap' }
      ], answer: 0,
      explain: { nl: 'De etalage is het raam van een winkel waarin je de spullen van buiten ziet, zoals het Gouden Lepeltje.', en: 'The shop window is the window of a shop in which you see the goods from outside, like the Golden Spoon.' } },
    { id: 'q6', type: 'mc', skill: 'gevolgtrekking',
      q: { nl: 'Waarom is het briefje in het nest zo vreemd?', en: 'Why is the note in the nest so strange?' },
      options: [
        { nl: 'Iemand moet het daar met opzet hebben neergelegd, dus die persoon wist dat de detectives zouden komen', en: 'Somebody must have put it there on purpose, so that person knew the detectives would come' },
        { nl: 'Eksters kunnen briefjes schrijven', en: 'Magpies can write notes' },
        { nl: 'Het briefje was van bakker Van Dam', en: 'The note was from baker Van Dam' },
        { nl: 'Het briefje was al heel oud', en: 'The note was very old' }
      ], answer: 0,
      explain: { nl: 'Een briefje onder het gestolen lepeltje, in een nest in een boom: dat leg je er niet per ongeluk neer. Het was bedoeld voor de detectives.', en: 'A note under the stolen spoon, in a nest in a tree: you do not leave that there by accident. It was meant for the detectives.' } }
  ]
},
{
  level: 3, emoji: '✉️', scene: 'school',
  title: { nl: 'Het raadsel van De Raadselaar', en: 'The Riddler’s riddle' },
  recap: { nl: 'Fenna, Yassin en Pepijn vonden het Gouden Lepeltje in een eksternest. Onder het lepeltje lag een briefje van ene De Raadselaar: ‘De echte zaak begint morgen.’',
           en: 'Fenna, Yassin and Pepijn found the Golden Spoon in a magpie’s nest. Under the spoon lay a note from somebody called The Riddler: ‘The real case begins tomorrow.’' },
  teaser: { nl: 'Wat liggen er op de plekken die op de kaart staan aangegeven?', en: 'What is waiting at the places marked on the map?' },
  text: {
    nl: [
      "De volgende ochtend ligt er een envelop op de mat van het tuinhuisje. Er staat geen postzegel op en ook geen naam. Fenna scheurt hem open. Binnenin zit een kaartje met een raadsel.",
      "“Ik heb duizend verhalen en geen mond”, leest Fenna voor. “Je mag mij lenen, maar niet houden. Zoek mij waar het stil moet zijn, en kijk naar het boek met de lege rug.” Yassin krabt op zijn hoofd. “Iemand met duizend verhalen is een verteller.” “Maar zonder mond kan hij niet vertellen”, zegt Pepijn.",
      "Fenna schrijft de woorden onder elkaar op: lenen, niet houden, stil, boek. “Het is een bibliotheek!” roept ze ineens. “Daar mag je boeken lenen, maar je moet ze terugbrengen. En daar moet je stil zijn.”",
      "In de bibliotheek zoekt Pepijn langs alle boekenruggen. Eén boek heeft een rug zonder titel. Fenna slaat het open. Tussen de bladzijden ligt een gevouwen plattegrond van Kruimelveen. Er staan drie rode kruisjes op, met de nummers 1, 2 en 3.",
      "“Een schattenkaart!” fluistert Pepijn. De bibliothecaris, meneer Bos, kijkt over zijn bril. “Dat boek heeft nog nooit iemand geleend”, zegt hij. “Ik wist niet eens dat het hier stond.” Fenna en Yassin kijken elkaar aan. Wie heeft het daar neergelegd?",
      "Yassin legt de kaart op tafel. Kruisje 1 is de klokkentoren. Kruisje 2 is het zwembad. En kruisje 3? Dat staat aan de Wilgenlaan, bij nummer 12. “Wacht even”, zegt Fenna langzaam. “Wilgenlaan 12? Dat is míjn adres.”"
    ],
    en: [
      "The next morning there is an envelope on the mat of the garden shed. It has no stamp and no name on it either. Fenna tears it open. Inside is a little card with a riddle.",
      "“I have a thousand stories and no mouth,” Fenna reads out. “You may borrow me, but not keep me. Look for me where it must be quiet, and look at the book with the empty spine.” Yassin scratches his head. “Somebody with a thousand stories is a storyteller.” “But without a mouth he cannot tell them,” says Pepijn.",
      "Fenna writes the words down one under the other: borrow, not keep, quiet, book. “It is a library!” she suddenly shouts. “There you may borrow books, but you have to bring them back. And there you have to be quiet.”",
      "In the library Pepijn searches along all the spines of the books. One book has a spine without a title. Fenna opens it. Between the pages lies a folded map of Kruimelveen. There are three red crosses on it, with the numbers 1, 2 and 3.",
      "“A treasure map!” whispers Pepijn. The librarian, Mr Bos, looks over his glasses. “Nobody has ever borrowed that book,” he says. “I did not even know it was here.” Fenna and Yassin look at each other. Who put it there?",
      "Yassin spreads the map out on the table. Cross 1 is the clock tower. Cross 2 is the swimming pool. And cross 3? That is on Willow Lane, at number 12. “Wait a moment,” says Fenna slowly. “Willow Lane 12? That is my address.”"
    ]
  },
  words: [
    { nl: 'raadsel', en: 'riddle', defNl: 'een vraag waar je goed over moet nadenken om het antwoord te vinden', defEn: 'a question you have to think hard about to find the answer' },
    { nl: 'bibliothecaris', en: 'librarian', defNl: 'iemand die in een bibliotheek werkt en op de boeken past', defEn: 'somebody who works in a library and looks after the books' },
    { nl: 'plattegrond', en: 'map of a town', defNl: 'een tekening van een stad of gebouw, gezien van boven', defEn: 'a drawing of a town or building, seen from above' }
  ],
  questions: [
    { id: 'q1', type: 'mc', skill: 'letterlijk',
      q: { nl: 'Wat ligt er op de mat van het tuinhuisje?', en: 'What is on the mat of the garden shed?' },
      options: [
        { nl: 'Een envelop zonder postzegel en zonder naam', en: 'An envelope without a stamp and without a name' },
        { nl: 'Een pakketje met een postzegel', en: 'A parcel with a stamp' },
        { nl: 'Een brief van meneer Bos', en: 'A letter from Mr Bos' },
        { nl: 'Een plattegrond van Kruimelveen', en: 'A map of Kruimelveen' }
      ], answer: 0,
      explain: { nl: 'Alinea 1: “Er staat geen postzegel op en ook geen naam.”', en: 'Paragraph 1: “It has no stamp and no name on it either.”' } },
    { id: 'q2', type: 'tf', skill: 'letterlijk',
      q: { nl: 'Volgens het raadsel mag je het boek houden.', en: 'According to the riddle you may keep the book.' },
      answer: false,
      explain: { nl: 'Het raadsel zegt: “Je mag mij lenen, maar niet houden.”', en: 'The riddle says: “You may borrow me, but not keep me.”' } },
    { id: 'q3', type: 'mc', skill: 'gevolgtrekking',
      q: { nl: 'Hoe weet Fenna dat het raadsel over een bibliotheek gaat?', en: 'How does Fenna know the riddle is about a library?' },
      options: [
        { nl: 'In een bibliotheek leen je boeken en moet je stil zijn', en: 'In a library you borrow books and you have to be quiet' },
        { nl: 'Er staat het woord “bibliotheek” in het raadsel', en: 'The word “library” is in the riddle' },
        { nl: 'Pepijn vertelt het haar', en: 'Pepijn tells her' },
        { nl: 'Ze woont vlak bij de bibliotheek', en: 'She lives right next to the library' }
      ], answer: 0,
      explain: { nl: 'Fenna zet de woorden lenen, niet houden en stil onder elkaar. Samen passen ze maar op één plek.', en: 'Fenna writes the words borrow, not keep and quiet one under the other. Together they only fit one place.' } },
    { id: 'q4', type: 'order', skill: 'volgorde',
      q: { nl: 'Zet in de volgorde van het verhaal.', en: 'Put these in the order of the story.' },
      items: [
        { nl: 'Er ligt een envelop op de mat.', en: 'There is an envelope on the mat.' },
        { nl: 'Fenna ontdekt dat het raadsel over een bibliotheek gaat.', en: 'Fenna discovers the riddle is about a library.' },
        { nl: 'Pepijn vindt het boek met de lege rug.', en: 'Pepijn finds the book with the empty spine.' },
        { nl: 'Yassin zoekt de kruisjes op de plattegrond.', en: 'Yassin looks up the crosses on the map.' },
        { nl: 'Fenna ziet dat kruisje 3 haar eigen adres is.', en: 'Fenna sees that cross 3 is her own address.' }
      ], answer: [0, 1, 2, 3, 4],
      explain: { nl: 'Van de envelop naar het raadsel, de bibliotheek, de kaart en ten slotte het verrassende adres.', en: 'From the envelope to the riddle, the library, the map and finally the surprising address.' } },
    { id: 'q5', type: 'gap', skill: 'woordenschat',
      q: { nl: 'Een ___ is een tekening van een stad, gezien van boven.', en: 'A ___ is a drawing of a town, seen from above.' },
      options: [
        { nl: 'plattegrond', en: 'map of a town' },
        { nl: 'raadsel', en: 'riddle' },
        { nl: 'bibliothecaris', en: 'librarian' },
        { nl: 'envelop', en: 'envelope' }
      ], answer: 0,
      explain: { nl: 'Op de plattegrond van Kruimelveen staan de drie kruisjes.', en: 'The three crosses are on the map of Kruimelveen.' } },
    { id: 'q6', type: 'mc', skill: 'verwijswoorden',
      q: { nl: '“Dat boek heeft nog nooit iemand geleend”, zegt hij. Over welk boek gaat het?', en: '“Nobody has ever borrowed that book,” he says. Which book is it about?' },
      options: [
        { nl: 'Het boek met de lege rug', en: 'The book with the empty spine' },
        { nl: 'Het boek over eksters', en: 'The book about magpies' },
        { nl: 'Het boek van Fenna', en: 'Fenna’s book' },
        { nl: 'Elk boek in de bibliotheek', en: 'Every book in the library' }
      ], answer: 0,
      explain: { nl: 'Meneer Bos kijkt naar het boek dat Fenna net heeft opengeslagen: het boek zonder titel op de rug.', en: 'Mr Bos is looking at the book Fenna has just opened: the one without a title on the spine.' } },
    { id: 'q7', type: 'mc', skill: 'hoofdgedachte',
      q: { nl: 'Waar gaat dit hoofdstuk vooral over?', en: 'What is this chapter mainly about?' },
      options: [
        { nl: 'Fenna lost een raadsel op en vindt een kaart die naar haar eigen adres wijst', en: 'Fenna solves a riddle and finds a map that points to her own address' },
        { nl: 'Hoe een bibliotheek werkt', en: 'How a library works' },
        { nl: 'Pepijn die een boek leent', en: 'Pepijn borrowing a book' },
        { nl: 'Yassin die een nieuwe uitvinding maakt', en: 'Yassin making a new invention' }
      ], answer: 0,
      explain: { nl: 'Het hele hoofdstuk draait om het raadsel, de bibliotheek en de kaart. De laatste zin is de verrassing.', en: 'The whole chapter is about the riddle, the library and the map. The last sentence is the surprise.' } }
  ]
},
{
  level: 4, emoji: '🔑', scene: 'night',
  title: { nl: 'Drie kruisjes', en: 'Three crosses' },
  recap: { nl: 'De Raadselaar stuurde Fenna een raadsel dat naar de bibliotheek wees. Daar lag in een boek met een lege rug een plattegrond met drie kruisjes: de klokkentoren, het zwembad en Fenna’s eigen adres.',
           en: 'The Riddler sent Fenna a riddle that pointed to the library. There, in a book with an empty spine, lay a map with three crosses: the clock tower, the swimming pool and Fenna’s own address.' },
  teaser: { nl: 'Wat wacht er op de zolder van de Wilgenschool, en wie zit erachter?', en: 'What is waiting in the attic of the Willow School, and who is behind it all?' },
  text: {
    nl: [
      "Op woensdagmiddag maakte Yassin een plan. “We gaan alle drie de kruisjes langs”, zei hij, “en we schrijven precies op wat we vinden. Als we iets missen, snappen we het raadsel niet.” Fenna knikte. Een goede detective let op alles, ook op dingen die gewoon lijken.",
      "Bij kruisje 1, de klokkentoren, wachtte koster Aksoy. Ze nam de kinderen mee naar boven. Onder de grote wijzerplaat hing een blikken koekjestrommel aan een haakje. Pepijn mocht hem pakken, want hij paste als enige door het smalle luikje. Er zat een kaartje in: ‘Ga naar de zolder.’",
      "Bij kruisje 2, het zwembad, hielp badmeester Joris hen. Op de plattegrond stond een klein getal naast het kruisje: 12. “Dat is een kastje in de kleedkamer”, zei hij. In kastje 12 lag opnieuw een trommel. Het tweede kaartje zei: ‘van de Wilgenschool.’",
      "Bij kruisje 3 hoefden ze niet ver te lopen, want dat was hun eigen tuinhuisje. Fenna zocht onder het bord op de deur en vond een derde trommel, vastgeplakt aan de achterkant. Hoe lang zat die daar al? Op het kaartje stond: ‘en neem de sleutel mee.’ Daaronder lag een kleine koperen sleutel.",
      "Ze legden de drie kaartjes in de goede volgorde: 1, 2 en 3. Nu stond er een hele zin: ‘Ga naar de zolder van de Wilgenschool en neem de sleutel mee.’ Yassin bekeek de letters. “Alle drie zijn met groene inkt geschreven”, zei hij, “en elke d heeft bovenaan een lusje. Dat is dezelfde schrijver.”",
      "“De Wilgenschool is al twee jaar leeg”, zei Fenna. “Wij zaten er vroeger zelf op.” “Misschien is het een val”, zei Pepijn met een mond vol koekje. Yassin schudde zijn hoofd. “Wie een val wil zetten, maakt het niet zo moeilijk. Wie ons een raadsel stuurt, wil dat wij winnen.” Fenna pakte de sleutel. “Zaterdag gaan we.”"
    ],
    en: [
      "On Wednesday afternoon Yassin made a plan. “We will visit all three crosses,” he said, “and we will write down exactly what we find. If we miss something, we will not understand the riddle.” Fenna nodded. A good detective notices everything, even things that look ordinary.",
      "At cross 1, the clock tower, caretaker Aksoy was waiting. She took the children upstairs. Under the big clock face a tin cookie box hung on a hook. Pepijn was allowed to take it, because he was the only one who fitted through the narrow hatch. Inside was a little card: ‘Go to the attic.’",
      "At cross 2, the swimming pool, lifeguard Joris helped them. On the map a small number stood next to the cross: 12. “That is a locker in the changing room,” he said. In locker 12 there was another tin. The second card said: ‘of the Willow School.’",
      "At cross 3 they did not have to walk far, because that was their own garden shed. Fenna looked under the sign on the door and found a third tin, taped to the back. How long had it been there? The card said: ‘and take the key with you.’ Underneath lay a small copper key.",
      "They put the three cards in the right order: 1, 2 and 3. Now a whole sentence was there: ‘Go to the attic of the Willow School and take the key with you.’ Yassin studied the letters. “All three are written in green ink,” he said, “and every d has a little loop at the top. That is the same writer.”",
      "“The Willow School has been empty for two years,” said Fenna. “We used to go there ourselves.” “Maybe it is a trap,” said Pepijn with his mouth full of cookie. Yassin shook his head. “Whoever wants to set a trap does not make it so difficult. Whoever sends us a riddle wants us to win.” Fenna picked up the key. “We will go on Saturday.”"
    ]
  },
  words: [
    { nl: 'wijzerplaat', en: 'clock face', defNl: 'de ronde plaat van een klok waarop de cijfers en de wijzers staan', defEn: 'the round plate of a clock with the numbers and the hands on it' },
    { nl: 'badmeester', en: 'lifeguard', defNl: 'iemand die in een zwembad op de zwemmers let', defEn: 'somebody who watches over the swimmers in a swimming pool' },
    { nl: 'val', en: 'trap', defNl: 'iets wat iemand heeft neergezet om een ander erin te laten lopen', defEn: 'something set up so that somebody else walks into it' }
  ],
  questions: [
    { id: 'q1', type: 'mc', skill: 'letterlijk',
      q: { nl: 'Wat vindt Pepijn onder de wijzerplaat in de klokkentoren?', en: 'What does Pepijn find under the clock face in the clock tower?' },
      options: [
        { nl: 'Een blikken koekjestrommel met een kaartje erin', en: 'A tin cookie box with a card in it' },
        { nl: 'Een gouden sleutel', en: 'A golden key' },
        { nl: 'Een nest van een ekster', en: 'A magpie’s nest' },
        { nl: 'Een plattegrond van de school', en: 'A map of the school' }
      ], answer: 0,
      explain: { nl: 'Alinea 2: “Onder de grote wijzerplaat hing een blikken koekjestrommel aan een haakje.”', en: 'Paragraph 2: “Under the big clock face a tin cookie box hung on a hook.”' } },
    { id: 'q2', type: 'mc', skill: 'verwijswoorden',
      q: { nl: '“Dat is een kastje in de kleedkamer”, zei hij. Waar verwijst “dat” naar?', en: '“That is a locker in the changing room,” he said. What does “that” refer to?' },
      options: [
        { nl: 'Het getal 12 op de plattegrond', en: 'The number 12 on the map' },
        { nl: 'Het zwembad', en: 'The swimming pool' },
        { nl: 'Het tweede kaartje', en: 'The second card' },
        { nl: 'De badmeester', en: 'The lifeguard' }
      ], answer: 0,
      explain: { nl: 'De zin ervoor zegt dat er een klein getal naast het kruisje stond: 12. Over dat getal gaat de badmeester het hebben.', en: 'The sentence before says a small number stood next to the cross: 12. The lifeguard is talking about that number.' } },
    { id: 'q3', type: 'multi', skill: 'letterlijk',
      q: { nl: 'Waaraan ziet Yassin dat de drie kaartjes van dezelfde schrijver zijn? Kies er 2.', en: 'How does Yassin see that the three cards are from the same writer? Pick 2.' },
      options: [
        { nl: 'Ze zijn met groene inkt geschreven', en: 'They are written in green ink' },
        { nl: 'Elke d heeft bovenaan een lusje', en: 'Every d has a little loop at the top' },
        { nl: 'Ze zijn op dezelfde dag gekocht', en: 'They were bought on the same day' },
        { nl: 'Er staat dezelfde tekening op', en: 'The same drawing is on them' }
      ], answer: [0, 1],
      explain: { nl: 'Yassin noemt de groene inkt en de d met een lusje.', en: 'Yassin mentions the green ink and the d with a loop.' } },
    { id: 'q4', type: 'order', skill: 'volgorde',
      q: { nl: 'Zet de plekken in de volgorde waarin de detectives ze bezochten.', en: 'Put the places in the order in which the detectives visited them.' },
      items: [
        { nl: 'De klokkentoren', en: 'The clock tower' },
        { nl: 'Het zwembad', en: 'The swimming pool' },
        { nl: 'Hun eigen tuinhuisje', en: 'Their own garden shed' },
        { nl: 'De zolder van de Wilgenschool', en: 'The attic of the Willow School' }
      ], answer: [0, 1, 2, 3],
      explain: { nl: 'Eerst kruisje 1, dan kruisje 2, dan kruisje 3. De zolder komt pas zaterdag.', en: 'First cross 1, then cross 2, then cross 3. The attic only comes on Saturday.' } },
    { id: 'q5', type: 'gap', skill: 'woordenschat',
      q: { nl: 'Een ___ is iets wat iemand heeft neergezet om een ander erin te laten lopen.', en: 'A ___ is something set up so that somebody else walks into it.' },
      options: [
        { nl: 'val', en: 'trap' },
        { nl: 'wijzerplaat', en: 'clock face' },
        { nl: 'badmeester', en: 'lifeguard' },
        { nl: 'trommel', en: 'tin' }
      ], answer: 0,
      explain: { nl: 'Pepijn is bang dat de zin op de kaartjes een val is.', en: 'Pepijn is afraid the sentence on the cards is a trap.' } },
    { id: 'q6', type: 'mc', skill: 'gevolgtrekking',
      q: { nl: 'Waarom denkt Yassin dat het geen val is?', en: 'Why does Yassin think it is not a trap?' },
      options: [
        { nl: 'Wie een val zet, maakt het niet zo moeilijk; wie een raadsel stuurt, wil dat de ander wint', en: 'Whoever sets a trap does not make it so difficult; whoever sends a riddle wants the other person to win' },
        { nl: 'De school is al twee jaar leeg', en: 'The school has been empty for two years' },
        { nl: 'Hij heeft de sleutel al gebruikt', en: 'He has already used the key' },
        { nl: 'Pepijn heeft het gezegd', en: 'Pepijn said so' }
      ], answer: 0,
      explain: { nl: 'Yassin redeneert: een val zou veel makkelijker zijn gemaakt. Een raadsel is bedoeld om opgelost te worden.', en: 'Yassin reasons: a trap would have been made much easier. A riddle is meant to be solved.' } },
    { id: 'q7', type: 'mc', skill: 'structuur',
      q: { nl: 'Hoe is de tekst opgebouwd?', en: 'How is the text built up?' },
      options: [
        { nl: 'Eerst een plan, dan een alinea per kruisje, en daarna wat de kaartjes samen zeggen', en: 'First a plan, then a paragraph per cross, and after that what the cards say together' },
        { nl: 'Eerst de oplossing en daarna alle aanwijzingen', en: 'First the solution and then all the clues' },
        { nl: 'Alleen een gesprek tussen Fenna en Yassin', en: 'Only a conversation between Fenna and Yassin' },
        { nl: 'Een lijst met dingen die ze moeten kopen', en: 'A list of things they have to buy' }
      ], answer: 0,
      explain: { nl: 'Alinea 1 is het plan, alinea 2 tot en met 4 gaan over kruisje 1, 2 en 3 en alinea 5 zet de kaartjes samen.', en: 'Paragraph 1 is the plan, paragraphs 2 to 4 are about cross 1, 2 and 3 and paragraph 5 puts the cards together.' } },
    { id: 'q8', type: 'mc', skill: 'hoofdgedachte',
      q: { nl: 'Waar gaat dit hoofdstuk vooral over?', en: 'What is this chapter mainly about?' },
      options: [
        { nl: 'De detectives volgen drie kruisjes en vinden kaartjes en een sleutel die naar de Wilgenschool wijzen', en: 'The detectives follow three crosses and find cards and a key that point to the Willow School' },
        { nl: 'Hoe je een koekjestrommel opent', en: 'How to open a cookie tin' },
        { nl: 'Pepijn die in de klokkentoren blijft steken', en: 'Pepijn getting stuck in the clock tower' },
        { nl: 'Een zwemles bij badmeester Joris', en: 'A swimming lesson with lifeguard Joris' }
      ], answer: 0,
      explain: { nl: 'Alle alinea’s gaan over de kruisjes, de kaartjes en de sleutel. Samen wijzen ze naar de zolder van de Wilgenschool.', en: 'All paragraphs are about the crosses, the cards and the key. Together they point to the attic of the Willow School.' } }
  ]
},
{
  level: 6, emoji: '🖋️', scene: 'night',
  title: { nl: 'De Raadselaar', en: 'The Riddler' },
  recap: { nl: 'Op drie plekken in Kruimelveen vonden Fenna, Yassin en Pepijn kaartjes in groene inkt. Samen zeggen ze: ‘Ga naar de zolder van de Wilgenschool en neem de sleutel mee.’',
           en: 'In three places in Kruimelveen Fenna, Yassin and Pepijn found cards in green ink. Together they say: ‘Go to the attic of the Willow School and take the key with you.’' },
  teaser: { nl: 'Wie heeft de envelop met “Zaak 2” gestuurd, als mevrouw Wiegersma het niet was?', en: 'Who sent the envelope marked “Case 2”, if it was not Mrs Wiegersma?' },
  text: {
    nl: [
      "Zaterdagmiddag stonden de drie detectives voor de oude Wilgenschool. Het gebouw was sinds kort een buurthuis, en de beheerder liet hen binnen toen Fenna de koperen sleutel liet zien. “Die ken ik”, mompelde hij. “Die hoort bij de zolder. Maar hij was al jaren zoek.”",
      "Boven op de zolder was het stoffig en warm. Onder het dakraam stond een oude houten kist. Pepijn probeerde de koperen sleutel en hij paste. In de kist lag een dikke map vol briefjes, allemaal in groene inkt. Op elk briefje stond een raadsel, met erboven de naam van een leerling. Het oudste briefje was van 1983.",
      "“Dit zijn raadsels voor een hele school”, zei Yassin. Hij las de naam op het bovenste briefje. “Voor Fenna Kruimel, groep 6.” Fenna schrok. “Dat ben ik! Maar ik heb dat raadsel nooit gekregen.” “Omdat ik met pensioen ging voordat jij in groep 6 zat”, klonk een stem achter hen.",
      "In de deuropening stond een kleine, oude vrouw met een groene pen achter haar oor. “Ik ben mevrouw Wiegersma”, zei ze. “Veertig jaar was ik juf op deze school. Elke vrijdag kreeg mijn klas een raadsel. Toen ik met pensioen ging, miste ik dat zo erg dat ik nieuwe raadsels ben gaan maken. Maar er was niemand meer om ze aan te geven.”",
      "“Waarom dan zo ingewikkeld?” vroeg Fenna. “U had gewoon langs kunnen komen.” De juf glimlachte. “Ik zocht geen kinderen die snel opgeven. Ik zocht kinderen die goed lezen, goed kijken en volhouden. Jullie losten alles op zonder hulp. Dat is zeldzaam.” Pepijn vroeg hoe het zat met het eksternest. “Dat was geluk”, zei ze. “De ekster stal het lepeltje echt. Mijn briefje heb ik er daarna met een lange stok bijgelegd.”",
      "Fenna keek naar de map. “Wilt u dat wij het ook doen?” vroeg ze. “Ik wil dat jullie dat blijven doen”, zei mevrouw Wiegersma. “Een goed raadsel heeft altijd een oplossing, maar de beste laten je ook iets zien dat je nog niet wist.”",
      "Die avond lag er een nieuwe envelop op de mat van het tuinhuisje. Er stond geen postzegel op en geen naam, alleen met groene inkt: ‘Zaak 2’. Fenna belde meteen mevrouw Wiegersma. “Die is niet van mij”, zei de juf verbaasd. Fenna keek naar Yassin en Pepijn. Er was dus nog iemand die raadsels maakte."
    ],
    en: [
      "On Saturday afternoon the three detectives stood in front of the old Willow School. The building had recently become a community centre, and the caretaker let them in when Fenna showed him the copper key. “I know that one,” he muttered. “It belongs to the attic. But it has been missing for years.”",
      "Up in the attic it was dusty and warm. Under the skylight stood an old wooden chest. Pepijn tried the copper key and it fitted. In the chest lay a thick folder full of notes, all in green ink. On every note was a riddle, with a pupil’s name above it. The oldest note was from 1983.",
      "“These are riddles for a whole school,” said Yassin. He read the name on the top note. “For Fenna Kruimel, group 6.” Fenna was startled. “That is me! But I never received that riddle.” “Because I retired before you were in group 6,” a voice sounded behind them.",
      "In the doorway stood a small, old woman with a green pen behind her ear. “I am Mrs Wiegersma,” she said. “For forty years I was a teacher at this school. Every Friday my class got a riddle. When I retired, I missed that so much that I started making new riddles. But there was nobody left to give them to.”",
      "“Then why so complicated?” asked Fenna. “You could simply have come round.” The teacher smiled. “I was not looking for children who give up quickly. I was looking for children who read well, look well and keep going. You solved everything without help. That is rare.” Pepijn asked how it worked with the magpie’s nest. “That was luck,” she said. “The magpie really did steal the spoon. I put my note in there afterwards with a long stick.”",
      "Fenna looked at the folder. “Do you want us to do it too?” she asked. “I want you to keep doing it,” said Mrs Wiegersma. “A good riddle always has a solution, but the best ones also show you something you did not know yet.”",
      "That evening there was a new envelope on the mat of the garden shed. It had no stamp and no name on it, only in green ink: ‘Case 2’. Fenna phoned Mrs Wiegersma straight away. “That one is not from me,” said the teacher in surprise. Fenna looked at Yassin and Pepijn. So there was somebody else who made riddles."
    ]
  },
  words: [
    { nl: 'pensioen', en: 'retirement', defNl: 'de tijd waarin je niet meer hoeft te werken omdat je oud bent', defEn: 'the time when you no longer have to work because you are old' },
    { nl: 'volhouden', en: 'to keep going', defNl: 'doorgaan, ook als iets moeilijk is en je niet snel resultaat ziet', defEn: 'to carry on, even when something is difficult and you see no quick result' },
    { nl: 'zeldzaam', en: 'rare', defNl: 'bijna nooit te vinden of te zien', defEn: 'hardly ever to be found or seen' }
  ],
  questions: [
    { id: 'q1', type: 'mc', skill: 'letterlijk',
      q: { nl: 'Wie is mevrouw Wiegersma?', en: 'Who is Mrs Wiegersma?' },
      options: [
        { nl: 'Een gepensioneerde juf van de Wilgenschool', en: 'A retired teacher of the Willow School' },
        { nl: 'De beheerder van het buurthuis', en: 'The caretaker of the community centre' },
        { nl: 'De moeder van Fenna', en: 'Fenna’s mother' },
        { nl: 'De schrijfster van een raadselboek', en: 'The writer of a riddle book' }
      ], answer: 0,
      explain: { nl: 'Alinea 4: “Veertig jaar was ik juf op deze school”, en ze ging met pensioen.', en: 'Paragraph 4: “For forty years I was a teacher at this school”, and she retired.' } },
    { id: 'q2', type: 'find', skill: 'gevolgtrekking',
      q: { nl: 'Welke zin legt uit waarom mevrouw Wiegersma raadsels bleef maken?', en: 'Which sentence explains why Mrs Wiegersma kept making riddles?' },
      options: [
        { nl: 'Boven op de zolder was het stoffig en warm.', en: 'Up in the attic it was dusty and warm.' },
        { nl: 'Toen ik met pensioen ging, miste ik dat zo erg dat ik nieuwe raadsels ben gaan maken.', en: 'When I retired, I missed that so much that I started making new riddles.' },
        { nl: 'Het oudste briefje was van 1983.', en: 'The oldest note was from 1983.' },
        { nl: 'Fenna keek naar de map.', en: 'Fenna looked at the folder.' }
      ], answer: 1,
      explain: { nl: 'Ze miste het raadsels geven aan haar klas. Daarom maakte ze er nieuwe, ook al had ze geen klas meer.', en: 'She missed giving riddles to her class. That is why she made new ones, even though she no longer had a class.' } },
    { id: 'q3', type: 'gap', skill: 'woordenschat',
      q: { nl: 'Wie met ___ gaat, hoeft niet meer te werken omdat hij oud is.', en: 'Whoever goes into ___ no longer has to work because he is old.' },
      options: [
        { nl: 'pensioen', en: 'retirement' },
        { nl: 'vakantie', en: 'holiday' },
        { nl: 'les', en: 'a lesson' },
        { nl: 'zolder', en: 'the attic' }
      ], answer: 0,
      explain: { nl: 'Mevrouw Wiegersma ging met pensioen: ze was geen juf meer.', en: 'Mrs Wiegersma retired: she was no longer a teacher.' } },
    { id: 'q4', type: 'order', skill: 'volgorde',
      q: { nl: 'Zet in de volgorde van het verhaal.', en: 'Put these in the order of the story.' },
      items: [
        { nl: 'De beheerder herkent de koperen sleutel.', en: 'The caretaker recognises the copper key.' },
        { nl: 'Pepijn opent de kist op de zolder.', en: 'Pepijn opens the chest in the attic.' },
        { nl: 'Mevrouw Wiegersma stelt zichzelf voor.', en: 'Mrs Wiegersma introduces herself.' },
        { nl: 'De juf legt uit waarom ze kinderen zocht die volhouden.', en: 'The teacher explains why she looked for children who keep going.' },
        { nl: 'Er ligt een nieuwe envelop op de mat.', en: 'A new envelope lies on the mat.' }
      ], answer: [0, 1, 2, 3, 4],
      explain: { nl: 'Eerst de school en de kist, dan de ontmoeting met de juf, en ’s avonds de nieuwe envelop.', en: 'First the school and the chest, then the meeting with the teacher, and in the evening the new envelope.' } },
    { id: 'q5', type: 'mc', skill: 'verwijswoorden',
      q: { nl: '“Jullie losten alles op zonder hulp. Dat is zeldzaam.” Waar verwijst “dat” naar?', en: '“You solved everything without help. That is rare.” What does “that” refer to?' },
      options: [
        { nl: 'Dat kinderen alles zonder hulp oplossen', en: 'That children solve everything without help' },
        { nl: 'Dat er een eksternest in de boom zat', en: 'That there was a magpie’s nest in the tree' },
        { nl: 'Dat mevrouw Wiegersma juf was', en: 'That Mrs Wiegersma was a teacher' },
        { nl: 'Dat de zolder stoffig was', en: 'That the attic was dusty' }
      ], answer: 0,
      explain: { nl: 'In de zin ervoor staat wat de kinderen deden: alles oplossen zonder hulp. “Dat” kijkt daarnaar terug.', en: 'The sentence before says what the children did: solve everything without help. “That” looks back at it.' } },
    { id: 'q6', type: 'sort', skill: 'feitmening',
      q: { nl: 'Feit of mening? Zet elke zin in de goede groep.', en: 'Fact or opinion? Put every sentence in the right group.' },
      bins: [ { nl: 'Feit', en: 'Fact' }, { nl: 'Mening', en: 'Opinion' } ],
      items: [
        { nl: 'Mevrouw Wiegersma was veertig jaar juf.', en: 'Mrs Wiegersma was a teacher for forty years.', bin: 0 },
        { nl: 'De beste raadsels laten je iets zien dat je nog niet wist.', en: 'The best riddles show you something you did not know yet.', bin: 1 },
        { nl: 'Het oudste briefje in de map was van 1983.', en: 'The oldest note in the folder was from 1983.', bin: 0 },
        { nl: 'Dat jullie alles zonder hulp oplosten is zeldzaam.', en: 'That you solved everything without help is rare.', bin: 1 }
      ],
      explain: { nl: 'Een aantal jaren en een jaartal kun je nagaan. Wat de “beste” raadsels zijn en wat “zeldzaam” is, vindt mevrouw Wiegersma.', en: 'A number of years and a year can be checked. What the “best” riddles are and what is “rare”, Mrs Wiegersma thinks.' } },
    { id: 'q7', type: 'multi', skill: 'letterlijk',
      q: { nl: 'Welke dingen zocht mevrouw Wiegersma bij kinderen? Kies er 3.', en: 'What things did Mrs Wiegersma look for in children? Pick 3.' },
      options: [
        { nl: 'Goed lezen', en: 'Reading well' },
        { nl: 'Goed kijken', en: 'Looking well' },
        { nl: 'Volhouden', en: 'Keeping going' },
        { nl: 'Snel opgeven', en: 'Giving up quickly' },
        { nl: 'Hard rennen', en: 'Running fast' }
      ], answer: [0, 1, 2],
      explain: { nl: 'Alinea 5: “goed lezen, goed kijken en volhouden”. Snel opgeven zocht ze juist niet.', en: 'Paragraph 5: “read well, look well and keep going”. She was explicitly not looking for children who give up quickly.' } },
    { id: 'q8', type: 'mc', skill: 'doel',
      q: { nl: 'Waarom eindigt de schrijver met de nieuwe envelop?', en: 'Why does the writer end with the new envelope?' },
      options: [
        { nl: 'Om je nieuwsgierig te maken naar het volgende hoofdstuk', en: 'To make you curious about the next chapter' },
        { nl: 'Om uit te leggen hoe een envelop wordt gemaakt', en: 'To explain how an envelope is made' },
        { nl: 'Om te laten zien dat Fenna niet kan bellen', en: 'To show that Fenna cannot phone' },
        { nl: 'Om het verhaal netjes af te sluiten zonder vragen', en: 'To close the story neatly without any questions' }
      ], answer: 0,
      explain: { nl: 'Het mysterie lijkt opgelost, maar dan komt er een nieuwe envelop van iemand anders. Dat laat je willen weten hoe het verdergaat.', en: 'The mystery seems solved, but then a new envelope arrives from somebody else. That makes you want to know what happens next.' } },
    { id: 'q9', type: 'tf', skill: 'gevolgtrekking',
      q: { nl: 'Mevrouw Wiegersma heeft de envelop met “Zaak 2” gestuurd.', en: 'Mrs Wiegersma sent the envelope marked “Case 2”.' },
      answer: false,
      explain: { nl: 'Zij zegt zelf: “Die is niet van mij.” Er is dus nog iemand anders die raadsels maakt.', en: 'She says so herself: “That one is not from me.” So there is somebody else who makes riddles.' } },
    { id: 'q10', type: 'find', skill: 'hoofdgedachte',
      q: { nl: 'Welke zin laat het best zien wat mevrouw Wiegersma belangrijk vindt?', en: 'Which sentence best shows what Mrs Wiegersma finds important?' },
      options: [
        { nl: 'Pepijn probeerde de koperen sleutel en hij paste.', en: 'Pepijn tried the copper key and it fitted.' },
        { nl: 'Er stond geen postzegel op en geen naam, alleen met groene inkt: ‘Zaak 2’.', en: 'It had no stamp and no name on it, only in green ink: ‘Case 2’.' },
        { nl: 'Ik zocht kinderen die goed lezen, goed kijken en volhouden.', en: 'I was looking for children who read well, look well and keep going.' },
        { nl: 'In de deuropening stond een kleine, oude vrouw met een groene pen achter haar oor.', en: 'In the doorway stood a small, old woman with a green pen behind her ear.' }
      ], answer: 2,
      explain: { nl: 'Zij zegt zelf wat ze zoekt: kinderen die goed lezen, goed kijken en volhouden. Dat is wat zij belangrijk vindt.', en: 'She says herself what she is looking for: children who read well, look well and keep going. That is what she finds important.' } }
  ]
}
  ]
});
