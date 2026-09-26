/* Vervolgverhaal - Ridders & Vroeger: De sleutel van de tijd
   Hoofdstuk 1 = groep 6 (niveau 2), 2 = groep 7 (niveau 4), 3 = groep 8 (niveau 6). */
addSeries({
  id: 'tijdsleutel', topic: 'ridders', emoji: '🗝️',
  title: { nl: 'De sleutel van de tijd', en: 'The key of time' },
  blurb: { nl: 'Op oma’s zolder vindt Lotte een oude sleutel. Hij past op een deurtje dat naar het jaar 1370 leidt...',
           en: 'In Grandma’s attic Lotte finds an old key. It fits a little door that leads to the year 1370...' },
  chapters: [
{
  level: 2, emoji: '🗝️', scene: 'castle',
  title: { nl: 'Het deurtje in de muur', en: 'The little door in the wall' },
  teaser: { nl: 'Waar is Lotte terechtgekomen, en kan ze wel terug?', en: 'Where has Lotte ended up, and can she get back?' },
  text: {
    nl: [
      "Lotte helpt oma met opruimen. Op de zolder van oma's oude huis in Muiden staan dozen vol spullen. Het ruikt er naar stof en oud papier.",
      "Onder een deken vindt Lotte een houten kistje. Er zit een grote ijzeren sleutel in. Aan de sleutel hangt een briefje met sierlijke letters: ‘Voor wie de poort durft te openen.’",
      "“Die sleutel is heel oud”, zegt oma. “Hij lag er al toen ik hier kwam wonen. Ik weet niet eens welke deur hij opent.”",
      "Lotte loopt met de sleutel door de tuin. Achterin, tussen de klimop, ziet ze iets wat ze nog nooit heeft gezien. In de oude muur zit een klein houten deurtje. Er zit een sleutelgat in, en het is precies zo groot als de sleutel.",
      "Haar hart bonkt. Ze steekt de sleutel in het slot en draait. Met een piepend geluid gaat het deurtje open. Erachter hangt dikke, witte mist. Lotte stapt erdoor.",
      "Als de mist optrekt, staat ze op een modderig pad. Voor haar ligt een groot kasteel met torens en een gracht. Er lopen kippen rond. Een jongen met een emmer staart haar met open mond aan. “Wie ben jij?” vraagt hij. “En wat heb jij in vredesnaam aan?”"
    ],
    en: [
      "Lotte is helping Grandma tidy up. In the attic of Grandma’s old house in Muiden there are boxes full of things. It smells of dust and old paper.",
      "Under a blanket Lotte finds a wooden box. Inside is a big iron key. A note with elegant letters hangs from the key: ‘For whoever dares to open the gate.’",
      "“That key is very old,” says Grandma. “It was already here when I came to live here. I do not even know which door it opens.”",
      "Lotte walks through the garden with the key. At the back, among the ivy, she sees something she has never seen before. In the old wall there is a small wooden door. It has a keyhole, and it is exactly the size of the key.",
      "Her heart is pounding. She puts the key in the lock and turns it. With a squeak the little door opens. Behind it hangs thick, white fog. Lotte steps through.",
      "When the fog lifts, she is standing on a muddy path. In front of her is a big castle with towers and a moat. Chickens are walking around. A boy with a bucket stares at her with his mouth open. “Who are you?” he asks. “And what on earth are you wearing?”"
    ]
  },
  words: [
    { nl: 'zolder', en: 'attic', defNl: 'de ruimte helemaal boven in een huis, onder het dak', defEn: 'the room right at the top of a house, under the roof' },
    { nl: 'sierlijke', en: 'elegant', defNl: 'mooi en met veel krullen, zoals bij oud handschrift', defEn: 'beautiful and with lots of curls, like old handwriting' },
    { nl: 'gracht', en: 'moat', defNl: 'een brede sloot met water rond een kasteel of door een stad', defEn: 'a wide ditch of water around a castle or through a town' }
  ],
  questions: [
    { id: 'q1', type: 'mc', skill: 'letterlijk',
      q: { nl: 'Wat vindt Lotte in het kistje?', en: 'What does Lotte find in the box?' },
      options: [
        { nl: 'Een grote ijzeren sleutel met een briefje', en: 'A big iron key with a note' },
        { nl: 'Een oude schatkaart', en: 'An old treasure map' },
        { nl: 'Een gouden munt', en: 'A gold coin' },
        { nl: 'Het dagboek van oma', en: 'Grandma’s diary' }
      ], answer: 0,
      explain: { nl: 'Alinea 2: in het kistje zit een grote ijzeren sleutel, met een briefje eraan.', en: 'Paragraph 2: in the box is a big iron key, with a note attached.' } },
    { id: 'q2', type: 'tf', skill: 'letterlijk',
      q: { nl: 'Oma weet precies welke deur de sleutel opent.', en: 'Grandma knows exactly which door the key opens.' },
      answer: false,
      explain: { nl: 'Oma zegt: “Ik weet niet eens welke deur hij opent.”', en: 'Grandma says: “I do not even know which door it opens.”' } },
    { id: 'q3', type: 'mc', skill: 'gevolgtrekking',
      q: { nl: 'Waarom staart de jongen Lotte zo aan?', en: 'Why does the boy stare at Lotte like that?' },
      options: [
        { nl: 'Haar kleren zien er heel anders uit dan hij gewend is', en: 'Her clothes look very different from what he is used to' },
        { nl: 'Ze heeft ook een emmer bij zich', en: 'She is carrying a bucket too' },
        { nl: 'Ze is veel langer dan hij', en: 'She is much taller than him' },
        { nl: 'Ze zingt een liedje', en: 'She is singing a song' }
      ], answer: 0,
      explain: { nl: 'Hij vraagt: “En wat heb jij in vredesnaam aan?” Haar kleren zijn voor hem heel vreemd.', en: 'He asks: “And what on earth are you wearing?” Her clothes are very strange to him.' } },
    { id: 'q4', type: 'order', skill: 'volgorde',
      q: { nl: 'Zet op volgorde wat er gebeurt.', en: 'Put what happens in order.' },
      items: [
        { nl: 'Lotte vindt het houten kistje.', en: 'Lotte finds the wooden box.' },
        { nl: 'Oma vertelt dat de sleutel al heel lang op zolder lag.', en: 'Grandma says the key has been in the attic for a very long time.' },
        { nl: 'Lotte ziet het deurtje in de muur.', en: 'Lotte sees the little door in the wall.' },
        { nl: 'Lotte stapt door de mist.', en: 'Lotte steps through the fog.' }
      ], answer: [0, 1, 2, 3],
      explain: { nl: 'Eerst de zolder, dan oma, dan de tuin en ten slotte het deurtje met de mist.', en: 'First the attic, then Grandma, then the garden and finally the little door with the fog.' } },
    { id: 'q5', type: 'gap', skill: 'woordenschat',
      q: { nl: 'Een ___ is een brede sloot met water rond een kasteel.', en: 'A ___ is a wide ditch of water around a castle.' },
      options: [
        { nl: 'gracht', en: 'moat' },
        { nl: 'zolder', en: 'attic' },
        { nl: 'toren', en: 'tower' },
        { nl: 'tuin', en: 'garden' }
      ], answer: 0,
      explain: { nl: 'Het kasteel heeft torens en een gracht: water eromheen, zodat vijanden er moeilijk bij kunnen.', en: 'The castle has towers and a moat: water all around, so enemies cannot easily get to it.' } },
    { id: 'q6', type: 'mc', skill: 'gevolgtrekking',
      q: { nl: 'Wat is er met Lotte gebeurd, denk je?', en: 'What do you think has happened to Lotte?' },
      options: [
        { nl: 'Ze is terug in de tijd gereisd', en: 'She has travelled back in time' },
        { nl: 'Ze is op zolder in slaap gevallen', en: 'She has fallen asleep in the attic' },
        { nl: 'Ze is verdwaald in Muiden', en: 'She has got lost in Muiden' },
        { nl: 'Ze kijkt naar een toneelstuk', en: 'She is watching a play' }
      ], answer: 0,
      explain: { nl: 'Een kasteel met kippen, een modderig pad en een jongen die haar kleren vreemd vindt: ze is in het verleden.', en: 'A castle with chickens, a muddy path and a boy who finds her clothes strange: she is in the past.' } }
  ]
},
{
  level: 4, emoji: '🏰', scene: 'castle',
  title: { nl: 'Het jaar 1370', en: 'The year 1370' },
  recap: { nl: 'Op de zolder van oma vindt Lotte een oude ijzeren sleutel. Hij past op een deurtje in de tuinmuur. Als ze erdoor stapt, staat ze voor een kasteel, en een jongen met een emmer vraagt wie zij is.',
           en: 'In Grandma’s attic Lotte finds an old iron key. It fits a little door in the garden wall. When she steps through, she is standing in front of a castle, and a boy with a bucket asks who she is.' },
  teaser: { nl: 'Hoe komt Lotte thuis, nu het kasteel belegerd wordt?', en: 'How will Lotte get home, now that the castle is under siege?' },
  text: {
    nl: [
      "De jongen heette Wouter en hij was stalknecht op het kasteel. Toen Lotte vertelde dat ze uit een ander jaar kwam, lachte hij haar eerst uit. Maar toen ze hem haar horloge liet zien, dat oplichtte als je op een knopje drukte, werd hij heel stil. “Het is het jaar 1370”, fluisterde hij. “En jij moet andere kleren aan, anders denken ze dat je een heks bent.”",
      "In een oude jurk van Wouters zus liep Lotte het kasteel binnen. Alles was anders dan ze had gedacht. Het was er koud en donker, want de ramen waren klein en in de meeste zat geen glas. De muren waren meer dan twee meter dik. Wie naar de wc moest, ging naar een privaat: een klein kamertje met een gat in de vloer. Alles viel zo in de gracht. Daarom stonk het water.",
      "In de keuken kreeg Lotte een kom pap en een stuk grof brood. Ze vroeg om patat, maar niemand wist wat dat was. Wouter legde uit dat er geen aardappels bestonden. Lotte wist van school dat die pas veel later uit Amerika naar Europa zijn gebracht. In plaats daarvan aten de mensen veel brood, bonen, kool en soms vis uit de rivier.",
      "Het deurtje waardoor ze gekomen was, kon ze niet meer vinden. Op de plek waar het had moeten zitten, was alleen een muur. Wouter kende wel een oud verhaal over een poort in de oude toren, die alleen bij zonsondergang openging. Niemand durfde er te komen. “Morgen”, zei hij. “Dan gaan we samen kijken.”",
      "Maar de volgende ochtend klonken er hoorns op de muren. Mannen renden over het plein. Aan de overkant van het veld kwam een leger aan, met vlaggen, paarden en karren vol ladders. De ophaalbrug ging met veel gekraak omhoog. Lotte stond boven op de muur en zag hoe de weg naar het bos werd afgesloten. “Ze komen het kasteel belegeren!” riep iemand."
    ],
    en: [
      "The boy was called Wouter and he was a stable boy at the castle. When Lotte told him she came from another year, at first he laughed at her. But when she showed him her watch, which lit up when you pressed a button, he went very quiet. “It is the year 1370,” he whispered. “And you must put on different clothes, or they will think you are a witch.”",
      "In an old dress of Wouter’s sister, Lotte walked into the castle. Everything was different from what she had imagined. It was cold and dark there, because the windows were small and most of them had no glass. The walls were more than two metres thick. If you needed the toilet, you went to a privy: a tiny room with a hole in the floor. Everything fell straight into the moat. That is why the water stank.",
      "In the kitchen Lotte got a bowl of porridge and a piece of coarse bread. She asked for chips, but nobody knew what those were. Wouter explained that potatoes did not exist. Lotte knew from school that they were only brought from America to Europe much later. Instead, people ate a lot of bread, beans, cabbage and sometimes fish from the river.",
      "She could not find the little door she had come through any more. Where it should have been, there was only a wall. But Wouter knew an old story about a gate in the old tower, which only opened at sunset. Nobody dared to go there. “Tomorrow,” he said. “Then we will go and look together.”",
      "But the next morning horns sounded on the walls. Men ran across the courtyard. On the other side of the field an army was arriving, with flags, horses and carts full of ladders. The drawbridge went up with a lot of creaking. Lotte stood on top of the wall and saw the road to the forest being closed off. “They are coming to besiege the castle!” somebody shouted."
    ]
  },
  words: [
    { nl: 'stalknecht', en: 'stable boy', defNl: 'iemand die in de stal werkt en voor de paarden zorgt', defEn: 'somebody who works in the stable and looks after the horses' },
    { nl: 'privaat', en: 'privy', defNl: 'een ouderwetse wc, vaak een gat boven een put of gracht', defEn: 'an old-fashioned toilet, often a hole above a pit or moat' },
    { nl: 'belegeren', en: 'to besiege', defNl: 'met een leger om een kasteel of stad heen gaan staan om die in te nemen', defEn: 'to surround a castle or town with an army in order to take it' }
  ],
  questions: [
    { id: 'q1', type: 'mc', skill: 'letterlijk',
      q: { nl: 'In welk jaar is Lotte terechtgekomen?', en: 'Which year has Lotte ended up in?' },
      options: [
        { nl: '1370', en: '1370' },
        { nl: '1570', en: '1570' },
        { nl: '1945', en: '1945' },
        { nl: '1970', en: '1970' }
      ], answer: 0,
      explain: { nl: 'Wouter fluistert: “Het is het jaar 1370.”', en: 'Wouter whispers: “It is the year 1370.”' } },
    { id: 'q2', type: 'mc', skill: 'gevolgtrekking',
      q: { nl: 'Waarom moet Lotte van Wouter andere kleren aan?', en: 'Why does Wouter say Lotte must put on different clothes?' },
      options: [
        { nl: 'Anders denken de mensen dat ze een heks is', en: 'Otherwise people will think she is a witch' },
        { nl: 'Het is buiten veel te koud', en: 'It is far too cold outside' },
        { nl: 'Haar kleren zijn nat geworden', en: 'Her clothes have got wet' },
        { nl: 'Ze moet in de stal gaan werken', en: 'She has to work in the stable' }
      ], answer: 0,
      explain: { nl: 'In 1370 vonden mensen vreemde dingen eng. Een meisje met een lichtgevend horloge zou verdacht zijn.', en: 'In 1370 people found strange things frightening. A girl with a glowing watch would look suspicious.' } },
    { id: 'q3', type: 'mc', skill: 'verwijswoorden',
      q: { nl: '“Daarom stonk het water.” Wat is de reden?', en: '“That is why the water stank.” What is the reason?' },
      options: [
        { nl: 'Alles uit het privaat viel in de gracht', en: 'Everything from the privy fell into the moat' },
        { nl: 'Er zwommen veel vissen in', en: 'Lots of fish swam in it' },
        { nl: 'Het had lang geregend', en: 'It had rained for a long time' },
        { nl: 'De ophaalbrug was omhoog', en: 'The drawbridge was up' }
      ], answer: 0,
      explain: { nl: '“Daarom” verwijst naar de zin ervoor: alles uit het privaat viel zo in de gracht.', en: '“That is why” refers to the sentence before: everything from the privy fell straight into the moat.' } },
    { id: 'q4', type: 'multi', skill: 'letterlijk',
      q: { nl: 'Wat aten de mensen op het kasteel? Kies er 3.', en: 'What did people eat at the castle? Pick 3.' },
      options: [
        { nl: 'Brood', en: 'Bread' },
        { nl: 'Bonen', en: 'Beans' },
        { nl: 'Kool', en: 'Cabbage' },
        { nl: 'Patat', en: 'Chips' },
        { nl: 'Aardappels', en: 'Potatoes' }
      ], answer: [0, 1, 2],
      explain: { nl: 'Alinea 3: brood, bonen, kool en soms vis. Aardappels (en dus patat) bestonden in Europa nog niet.', en: 'Paragraph 3: bread, beans, cabbage and sometimes fish. Potatoes (and so chips) did not exist in Europe yet.' } },
    { id: 'q5', type: 'order', skill: 'volgorde',
      q: { nl: 'Zet in de volgorde van het verhaal.', en: 'Put these in the order of the story.' },
      items: [
        { nl: 'Lotte laat Wouter haar horloge zien.', en: 'Lotte shows Wouter her watch.' },
        { nl: 'Lotte trekt een oude jurk aan.', en: 'Lotte puts on an old dress.' },
        { nl: 'Lotte eet pap in de keuken.', en: 'Lotte eats porridge in the kitchen.' },
        { nl: 'Wouter vertelt over de poort in de oude toren.', en: 'Wouter tells her about the gate in the old tower.' },
        { nl: 'De ophaalbrug gaat omhoog.', en: 'The drawbridge goes up.' }
      ], answer: [0, 1, 2, 3, 4],
      explain: { nl: 'Kennismaken, verkleden, eten, het verhaal over de poort, en de volgende ochtend het leger.', en: 'Meeting, changing clothes, eating, the story about the gate, and the next morning the army.' } },
    { id: 'q6', type: 'gap', skill: 'woordenschat',
      q: { nl: 'Als een leger om een kasteel heen gaat staan om het in te nemen, gaat het het kasteel ___.', en: 'When an army surrounds a castle to take it, it is going to ___ the castle.' },
      options: [
        { nl: 'belegeren', en: 'besiege' },
        { nl: 'bouwen', en: 'build' },
        { nl: 'verkopen', en: 'sell' },
        { nl: 'schoonmaken', en: 'clean' }
      ], answer: 0,
      explain: { nl: 'Belegeren: om het kasteel heen gaan staan, zodat niemand er meer in of uit kan.', en: 'To besiege: surround the castle so that nobody can get in or out.' } },
    { id: 'q7', type: 'mc', skill: 'structuur',
      q: { nl: 'Welke alinea vertelt vooral hoe het leven in een kasteel was?', en: 'Which paragraph is mainly about what life in a castle was like?' },
      options: [
        { nl: 'Alinea 2', en: 'Paragraph 2' },
        { nl: 'Alinea 1', en: 'Paragraph 1' },
        { nl: 'Alinea 4', en: 'Paragraph 4' },
        { nl: 'Alinea 5', en: 'Paragraph 5' }
      ], answer: 0,
      explain: { nl: 'Alinea 2 gaat over de kou, de kleine ramen, de dikke muren en het privaat.', en: 'Paragraph 2 is about the cold, the small windows, the thick walls and the privy.' } },
    { id: 'q8', type: 'mc', skill: 'hoofdgedachte',
      q: { nl: 'Waar gaat dit hoofdstuk vooral over?', en: 'What is this chapter mainly about?' },
      options: [
        { nl: 'Lotte ontdekt hoe het leven in 1370 was, en dan wordt het kasteel belegerd', en: 'Lotte discovers what life was like in 1370, and then the castle is besieged' },
        { nl: 'Hoe een horloge in elkaar zit', en: 'How a watch is put together' },
        { nl: 'Het werk van Wouter in de stal', en: 'Wouter’s work in the stable' },
        { nl: 'Waarom patat zo lekker is', en: 'Why chips are so tasty' }
      ], answer: 0,
      explain: { nl: 'We zien het leven op het kasteel door de ogen van Lotte, en aan het eind komt het leger.', en: 'We see castle life through Lotte’s eyes, and at the end the army arrives.' } }
  ]
},
{
  level: 6, emoji: '🛡️', scene: 'castle',
  title: { nl: 'Het beleg', en: 'The siege' },
  recap: { nl: 'Lotte is door een deurtje in de tuinmuur in het jaar 1370 beland. Met stalknecht Wouter ontdekt ze hoe het leven op een kasteel was. De weg terug is een poort in de oude toren, die alleen bij zonsondergang opengaat. Maar dan komt er een leger om het kasteel te belegeren.',
           en: 'Lotte has ended up in the year 1370 through a little door in the garden wall. With stable boy Wouter she discovers what life in a castle was like. The way back is a gate in the old tower, which only opens at sunset. But then an army comes to besiege the castle.' },
  text: {
    nl: [
      "Het leger van de graaf probeerde het kasteel niet te bestormen. Dat zou te veel soldaten kosten, legde Wouter uit, want het kasteel was bijna niet in te nemen. De gracht was breed en diep, de ophaalbrug was omhoog en door de smalle schietgaten konden boogschutters op de vijand schieten zonder zelf geraakt te worden. Daarom kozen de belegeraars voor een ander wapen: honger. Ze wachtten gewoon tot er niets meer te eten was.",
      "Na twee weken was het brood op en kregen de mensen nog maar één kom pap per dag. Lotte merkte dat ze de hele tijd aan eten dacht. En toen werd Wouters zusje Aaltje ziek. Ze had koorts en lag te rillen onder een deken. De vrouw die voor de zieken zorgde, wilde een aderlating doen: een sneetje in de arm, zodat het ‘slechte bloed’ eruit kon lopen. Dat was in die tijd heel gewoon, maar Lotte wist dat het een zieke alleen maar zwakker maakt.",
      "“Laat haar veel drinken en maak haar voorhoofd koel met een natte doek”, zei Lotte. De vrouw keek haar wantrouwig aan, maar Wouter koos Lottes kant. Drie dagen lang zaten ze om de beurt bij Aaltje. Op de vierde dag vroeg ze om pap.",
      "Diezelfde avond hoorden ze gejuich op de muren. De vijand vertrok. Een boodschapper had verteld dat er vrede was gesloten. Maar de zon ging al onder, en Lotte wist wat dat betekende. Samen met Wouter rende ze de wenteltrap van de oude toren op. Bovenaan stond een klein deurtje open, met daarachter witte mist.",
      "“Kom je terug?” vroeg Wouter. Lotte wist het niet. Ze gaf hem haar potlood met een gummetje erop, iets wat in 1370 nog niet bestond. Wouter draaide het potlood rond in zijn hand, alsof het een schat was. Toen stapte ze de mist in.",
      "Ze stond weer in oma's tuin. Er was geen minuut voorbijgegaan. Op zolder zocht ze in een oud geschiedenisboek. Het kasteel was in 1370 inderdaad belegerd, en nooit ingenomen. Onder aan de bladzijde stond dat een zekere Wouter later rentmeester van het kasteel werd. Oma zei dat je niet alles moet geloven wat in oude boeken staat, want veel is pas later opgeschreven. Maar naast de tekst stond een klein tekeningetje van een potlood."
    ],
    en: [
      "The count’s army did not try to storm the castle. That would cost too many soldiers, Wouter explained, because the castle was almost impossible to take. The moat was wide and deep, the drawbridge was up, and through the narrow arrow slits archers could shoot at the enemy without being hit themselves. That is why the besiegers chose a different weapon: hunger. They simply waited until there was nothing left to eat.",
      "After two weeks the bread was gone and people only got one bowl of porridge a day. Lotte noticed that she was thinking about food all the time. And then Wouter’s little sister Aaltje fell ill. She had a fever and lay shivering under a blanket. The woman who looked after the sick wanted to do a bloodletting: a small cut in the arm, so that the ‘bad blood’ could run out. That was very normal in those days, but Lotte knew that it only makes a sick person weaker.",
      "“Let her drink a lot and cool her forehead with a wet cloth,” said Lotte. The woman looked at her suspiciously, but Wouter took Lotte’s side. For three days they took turns sitting with Aaltje. On the fourth day she asked for porridge.",
      "That same evening they heard cheering on the walls. The enemy was leaving. A messenger had brought news that peace had been made. But the sun was already setting, and Lotte knew what that meant. Together with Wouter she ran up the spiral staircase of the old tower. At the top a small door stood open, with white fog behind it.",
      "“Will you come back?” asked Wouter. Lotte did not know. She gave him her pencil with a little rubber on the end, something that did not exist in 1370 yet. Wouter turned the pencil round in his hand, as if it were treasure. Then she stepped into the fog.",
      "She was standing in Grandma’s garden again. Not a minute had passed. In the attic she searched an old history book. The castle had indeed been besieged in 1370, and never taken. At the bottom of the page it said that a certain Wouter later became the steward of the castle. Grandma said you should not believe everything in old books, because a lot was only written down later. But next to the text was a tiny drawing of a pencil."
    ]
  },
  words: [
    { nl: 'schietgaten', en: 'arrow slits', defNl: 'smalle openingen in een muur waardoor je kunt schieten', defEn: 'narrow openings in a wall through which you can shoot' },
    { nl: 'aderlating', en: 'bloodletting', defNl: 'vroeger: bloed laten weglopen uit een zieke, omdat men dacht dat dat hielp', defEn: 'in the past: letting blood run out of a sick person, because people thought it helped' },
    { nl: 'rentmeester', en: 'steward', defNl: 'iemand die voor de landen, het geld en de spullen van een kasteel zorgt', defEn: 'somebody who looks after the lands, money and belongings of a castle' }
  ],
  questions: [
    { id: 'q1', type: 'mc', skill: 'letterlijk',
      q: { nl: 'Welk “wapen” kozen de belegeraars?', en: 'Which “weapon” did the besiegers choose?' },
      options: [
        { nl: 'Honger: ze wachtten tot het eten op was', en: 'Hunger: they waited until the food ran out' },
        { nl: 'Kanonnen', en: 'Cannons' },
        { nl: 'Vuur', en: 'Fire' },
        { nl: 'Een groot houten paard', en: 'A big wooden horse' }
      ], answer: 0,
      explain: { nl: 'Alinea 1: “Daarom kozen de belegeraars voor een ander wapen: honger.”', en: 'Paragraph 1: “That is why the besiegers chose a different weapon: hunger.”' } },
    { id: 'q2', type: 'find', skill: 'gevolgtrekking',
      q: { nl: 'Welke zin legt uit waarom het leger het kasteel niet bestormde?', en: 'Which sentence explains why the army did not storm the castle?' },
      options: [
        { nl: 'Het leger van de graaf probeerde het kasteel niet te bestormen.', en: 'The count’s army did not try to storm the castle.' },
        { nl: 'Dat zou te veel soldaten kosten, legde Wouter uit, want het kasteel was bijna niet in te nemen.', en: 'That would cost too many soldiers, Wouter explained, because the castle was almost impossible to take.' },
        { nl: 'Lotte merkte dat ze de hele tijd aan eten dacht.', en: 'Lotte noticed that she was thinking about food all the time.' },
        { nl: 'De vijand vertrok.', en: 'The enemy was leaving.' }
      ], answer: 1,
      explain: { nl: 'De eerste zin zegt wát er gebeurde, de tweede zin zegt waaróm: het kostte te veel soldaten.', en: 'The first sentence says what happened, the second sentence says why: it would cost too many soldiers.' } },
    { id: 'q3', type: 'gap', skill: 'woordenschat',
      q: { nl: 'Smalle openingen in een muur waardoor boogschutters kunnen schieten, heten ___.', en: 'Narrow openings in a wall through which archers can shoot are called ___.' },
      options: [
        { nl: 'schietgaten', en: 'arrow slits' },
        { nl: 'grachten', en: 'moats' },
        { nl: 'wenteltrappen', en: 'spiral staircases' },
        { nl: 'privaten', en: 'privies' }
      ], answer: 0,
      explain: { nl: 'Door de schietgaten konden boogschutters schieten zonder zelf geraakt te worden.', en: 'Through the arrow slits archers could shoot without being hit themselves.' } },
    { id: 'q4', type: 'order', skill: 'volgorde',
      q: { nl: 'Zet in de volgorde van het verhaal.', en: 'Put these in the order of the story.' },
      items: [
        { nl: 'Het leger besluit het kasteel uit te hongeren.', en: 'The army decides to starve the castle out.' },
        { nl: 'Aaltje wordt ziek.', en: 'Aaltje falls ill.' },
        { nl: 'Lotte zegt dat Aaltje veel moet drinken.', en: 'Lotte says Aaltje must drink a lot.' },
        { nl: 'De vijand vertrekt.', en: 'The enemy leaves.' },
        { nl: 'Lotte geeft Wouter haar potlood.', en: 'Lotte gives Wouter her pencil.' }
      ], answer: [0, 1, 2, 3, 4],
      explain: { nl: 'Het beleg, de ziekte, Lottes hulp, de vrede en bij zonsondergang het afscheid.', en: 'The siege, the illness, Lotte’s help, the peace and at sunset the goodbye.' } },
    { id: 'q5', type: 'mc', skill: 'verwijswoorden',
      q: { nl: '“Dat was in die tijd heel gewoon.” Waar verwijst “dat” naar?', en: '“That was very normal in those days.” What does “that” refer to?' },
      options: [
        { nl: 'De aderlating', en: 'The bloodletting' },
        { nl: 'De koorts', en: 'The fever' },
        { nl: 'De kom pap', en: 'The bowl of porridge' },
        { nl: 'De deken', en: 'The blanket' }
      ], answer: 0,
      explain: { nl: 'De zin ervoor legt de aderlating uit. Die was in 1370 heel gewoon.', en: 'The sentence before explains the bloodletting. That was very normal in 1370.' } },
    { id: 'q6', type: 'sort', skill: 'feitmening',
      q: { nl: 'Feit of mening? Zet elke zin in de goede groep.', en: 'Fact or opinion? Put every sentence in the right group.' },
      bins: [ { nl: 'Feit', en: 'Fact' }, { nl: 'Mening', en: 'Opinion' } ],
      items: [
        { nl: 'Het kasteel werd in 1370 belegerd.', en: 'The castle was besieged in 1370.', bin: 0 },
        { nl: 'Honger is het slimste wapen dat er bestaat.', en: 'Hunger is the cleverest weapon there is.', bin: 1 },
        { nl: 'De gracht was breed en diep.', en: 'The moat was wide and deep.', bin: 0 },
        { nl: 'Een kasteel is de fijnste plek om te wonen.', en: 'A castle is the nicest place to live.', bin: 1 }
      ],
      explain: { nl: 'Een jaartal en de breedte van een gracht kun je nagaan. “Het slimste” en “de fijnste” zijn meningen.', en: 'A year and the width of a moat can be checked. “The cleverest” and “the nicest” are opinions.' } },
    { id: 'q7', type: 'multi', skill: 'letterlijk',
      q: { nl: 'Waardoor was het kasteel bijna niet in te nemen? Kies er 3.', en: 'What made the castle almost impossible to take? Pick 3.' },
      options: [
        { nl: 'De brede, diepe gracht', en: 'The wide, deep moat' },
        { nl: 'De ophaalbrug die omhoog was', en: 'The drawbridge that was up' },
        { nl: 'De smalle schietgaten', en: 'The narrow arrow slits' },
        { nl: 'Een hoge berg eromheen', en: 'A high mountain around it' },
        { nl: 'Kanonnen op de torens', en: 'Cannons on the towers' }
      ], answer: [0, 1, 2],
      explain: { nl: 'Alinea 1 noemt de gracht, de ophaalbrug en de schietgaten.', en: 'Paragraph 1 mentions the moat, the drawbridge and the arrow slits.' } },
    { id: 'q8', type: 'mc', skill: 'doel',
      q: { nl: 'Waarom laat de schrijver oma zeggen dat je niet alles moet geloven wat in oude boeken staat?', en: 'Why does the writer have Grandma say you should not believe everything in old books?' },
      options: [
        { nl: 'Om je te laten nadenken of een bron betrouwbaar is', en: 'To make you think about whether a source is reliable' },
        { nl: 'Om te laten zien dat oma niet van lezen houdt', en: 'To show that Grandma does not like reading' },
        { nl: 'Om het verhaal grappiger te maken', en: 'To make the story funnier' },
        { nl: 'Om te zeggen dat Wouter nooit heeft bestaan', en: 'To say that Wouter never existed' }
      ], answer: 0,
      explain: { nl: 'Veel oude geschiedenis is pas later opgeschreven. Een goede lezer vraagt zich af: klopt dit wel?', en: 'A lot of old history was only written down later. A good reader asks: is this really true?' } },
    { id: 'q9', type: 'tf', skill: 'gevolgtrekking',
      q: { nl: 'Aaltje werd beter doordat ze een aderlating kreeg.', en: 'Aaltje got better because she had a bloodletting.' },
      answer: false,
      explain: { nl: 'Lotte hield dat juist tegen. Aaltje kreeg veel drinken en een koele doek, en werd daarna beter.', en: 'Lotte actually stopped that. Aaltje got lots to drink and a cool cloth, and then got better.' } },
    { id: 'q10', type: 'find', skill: 'gevolgtrekking',
      q: { nl: 'Welke zin doet vermoeden dat Lottes reis echt gebeurd is?', en: 'Which sentence suggests that Lotte’s journey really happened?' },
      options: [
        { nl: 'Toen stapte ze de mist in.', en: 'Then she stepped into the fog.' },
        { nl: "Ze stond weer in oma's tuin.", en: 'She was standing in Grandma’s garden again.' },
        { nl: 'Er was geen minuut voorbijgegaan.', en: 'Not a minute had passed.' },
        { nl: 'Maar naast de tekst stond een klein tekeningetje van een potlood.', en: 'But next to the text was a tiny drawing of a pencil.' }
      ], answer: 3,
      explain: { nl: 'Lotte gaf Wouter een potlood, dat in 1370 nog niet bestond. Een tekening ervan in een oud boek is een aanwijzing dat het echt gebeurd is.', en: 'Lotte gave Wouter a pencil, which did not exist in 1370. A drawing of it in an old book is a clue that it really happened.' } }
  ]
}
  ]
});
