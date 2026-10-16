/* Vervolgverhaal - Wereld & Culturen: Zadi en de duizend verhalen
   Losjes gebaseerd op "Duizend-en-één-nacht", maar veel eenvoudiger en vriendelijker:
   een sultan die niet meer lacht, en een meisje dat elke avond een verhaal vertelt
   en precies op het spannendste moment stopt. Zo moet hij de volgende avond terugkomen.
   Hoofdstuk 1 = groep 6 (niveau 2), 2 = niveau 3, 3 = groep 7 (niveau 4),
   4 = groep 8 (niveau 6). Een hoofdstuk 5 erbij? Zet een nieuw object achteraan
   `chapters` (niveau 6, met een `recap`) en zet een `teaser` op hoofdstuk 4.
   Elk hoofdstuk is één avond; het verhaal-in-het-verhaal mag steeds een nieuw
   verhaal van Zadi zijn (de papegaai, het tapijt, ...). Houd de zinnen kort. */
addSeries({
  id: 'nachten', topic: 'wereld', emoji: '🪔', more: true,
  title: { nl: 'Zadi en de duizend verhalen', en: 'Zadi and the thousand stories' },
  blurb: { nl: 'Sultan Karim heeft al jaren niet gelachen. Dan komt Zadi (10 jaar) met een verhaal dat net op het spannendste moment stopt. Wil de sultan weten hoe het afloopt? Dan moet hij morgen terugkomen!',
           en: 'Sultan Karim has not laughed for years. Then ten-year-old Zadi arrives with a story that stops at the most exciting moment. Does the sultan want to know how it ends? Then he has to come back tomorrow!' },
  ideas: [
    { nl: 'Wie is de vreemdeling aan de poort, en welk verhaal vertelt hij?', en: 'Who is the stranger at the gate, and what story does he tell?' },
    { nl: 'Bedenk een nieuw verhaal van Zadi. Stop op het spannendste moment!', en: 'Make up a new story by Zadi. Stop at the most exciting moment!' },
    { nl: 'Schrijf het antwoord van Farid op de brief van de sultan.', en: 'Write Farid’s answer to the sultan’s letter.' }
  ],
  chapters: [
{
  level: 2, emoji: '🪔', scene: 'world',
  title: { nl: 'De sultan die niet lachte', en: 'The sultan who did not laugh' },
  teaser: { nl: 'Wat fluistert de papegaai? En wat heeft het met het paleis te maken?', en: 'What does the parrot whisper? And what does it have to do with the palace?' },
  text: {
    nl: [
      "In een stad vol zand en zon woonde sultan Karim. Hij had een groot paleis, honderd paarden en een kamer vol goud. Maar hij was niet blij. Zijn beste vriend Farid, de paleisnar, was weggegaan. Sinds die dag lachte de sultan nooit meer.",
      "Iedereen probeerde hem op te vrolijken. De koks bakten taarten zo groot als wagenwielen. De muzikanten speelden de hele dag. Maar de sultan zuchtte alleen en keek uit het raam.",
      "Op een avond kwam Zadi het paleis binnen. Zadi was tien jaar en de dochter van de wezir. De wezir is de rechterhand van de sultan. “Majesteit, mag ik u een verhaal vertellen?” vroeg ze. “Als het saai is, stuur ik je weg”, bromde de sultan.",
      "Zadi ging op een kussen zitten. “Er was eens een jongen die Hakim heette”, begon ze. “Hij verkocht dadels op de markt. Op een dag riep een stem boven zijn kraam: ‘Koop de lekkerste dadels van de stad!’ Hakim keek omhoog. Daar zat een groene papegaai.”",
      "“De papegaai zei: ‘Hakim, ik ken alle geheimen van deze stad.’ Hij boog zich naar Hakim toe en fluisterde iets in zijn oor. Hakim werd zo wit als een laken. Het was een geheim over het paleis van de sultan.”",
      "Zadi stopte. “Het is laat, majesteit. Morgenavond vertel ik verder.” “Wat? Nu al?” zei de sultan. Hij wilde boos kijken, maar zijn mondhoeken gingen een klein beetje omhoog. “Goed dan”, bromde hij. “Kom morgen terug.”"
    ],
    en: [
      "In a city full of sand and sun lived Sultan Karim. He had a big palace, a hundred horses and a room full of gold. But he was not happy. His best friend Farid, the palace jester, had gone away. Since that day the sultan never laughed any more.",
      "Everybody tried to cheer him up. The cooks baked cakes as big as cartwheels. The musicians played all day long. But the sultan only sighed and looked out of the window.",
      "One evening Zadi came into the palace. Zadi was ten years old and the vizier’s daughter. The vizier is the sultan’s right-hand man. “Your Majesty, may I tell you a story?” she asked. “If it is boring, I will send you away,” grumbled the sultan.",
      "Zadi sat down on a cushion. “Once upon a time there was a boy called Hakim,” she began. “He sold dates at the market. One day a voice called from above his stall: ‘Buy the tastiest dates in the city!’ Hakim looked up. There sat a green parrot.”",
      "“The parrot said: ‘Hakim, I know all the secrets of this city.’ He leaned towards Hakim and whispered something in his ear. Hakim turned as white as a sheet. It was a secret about the sultan’s palace.”",
      "Zadi stopped. “It is late, Your Majesty. Tomorrow evening I will tell more.” “What? Already?” said the sultan. He wanted to look angry, but the corners of his mouth went up a tiny bit. “All right,” he grumbled. “Come back tomorrow.”"
    ]
  },
  words: [
    { nl: 'paleisnar', en: 'palace jester', defNl: 'iemand die in een paleis grappen maakt om de koning aan het lachen te maken', defEn: 'someone who makes jokes in a palace to make the king laugh' },
    { nl: 'wezir', en: 'vizier', defNl: 'de belangrijkste helper van een sultan', defEn: 'the most important helper of a sultan' },
    { nl: 'dadels', en: 'dates', defNl: 'zoete, bruine vruchten die aan palmbomen groeien', defEn: 'sweet, brown fruits that grow on palm trees' },
    { nl: 'kraam', en: 'stall', defNl: 'een kleine winkel op de markt, vaak met alleen een dak', defEn: 'a small shop at the market, often with just a roof' }
  ],
  questions: [
    { id: 'q1', type: 'mc', skill: 'letterlijk',
      q: { nl: 'Waarom lachte de sultan niet meer?', en: 'Why did the sultan not laugh any more?' },
      options: [
        { nl: 'Zijn beste vriend Farid was weggegaan', en: 'His best friend Farid had gone away' },
        { nl: 'Hij had geen geld meer', en: 'He had no money left' },
        { nl: 'Zijn paarden waren ziek', en: 'His horses were sick' },
        { nl: 'Het paleis was te klein', en: 'The palace was too small' }
      ], answer: 0,
      explain: { nl: 'Alinea 1: “Zijn beste vriend Farid, de paleisnar, was weggegaan. Sinds die dag lachte de sultan nooit meer.”', en: 'Paragraph 1: “His best friend Farid, the palace jester, had gone away. Since that day the sultan never laughed any more.”' } },
    { id: 'q2', type: 'tf', skill: 'letterlijk',
      q: { nl: 'Zadi is de dochter van de sultan.', en: 'Zadi is the sultan’s daughter.' },
      answer: false,
      explain: { nl: 'Alinea 3: Zadi is de dochter van de wezir, niet van de sultan.', en: 'Paragraph 3: Zadi is the vizier’s daughter, not the sultan’s.' } },
    { id: 'q3', type: 'mc', skill: 'gevolgtrekking',
      q: { nl: 'Hoe weet je dat de sultan het verhaal toch leuk vindt?', en: 'How do you know the sultan likes the story after all?' },
      options: [
        { nl: 'Zijn mondhoeken gaan omhoog en hij wil dat Zadi morgen terugkomt', en: 'The corners of his mouth go up and he wants Zadi to come back tomorrow' },
        { nl: 'Hij stuurt Zadi meteen weg', en: 'He sends Zadi away at once' },
        { nl: 'Hij valt in slaap op zijn kussen', en: 'He falls asleep on his cushion' },
        { nl: 'Hij vertelt zelf een verhaal', en: 'He tells a story himself' }
      ], answer: 0,
      explain: { nl: 'De sultan zegt wel dat hij boos is, maar zijn mond en zijn woorden laten iets anders zien: hij wil meer horen.', en: 'The sultan says he is angry, but his mouth and his words show something different: he wants to hear more.' } },
    { id: 'q4', type: 'order', skill: 'volgorde',
      q: { nl: 'Zet in de volgorde van het verhaal.', en: 'Put these in the order of the story.' },
      items: [
        { nl: 'De koks bakken grote taarten.', en: 'The cooks bake big cakes.' },
        { nl: 'Zadi vraagt of ze een verhaal mag vertellen.', en: 'Zadi asks if she may tell a story.' },
        { nl: 'Een papegaai fluistert Hakim iets in zijn oor.', en: 'A parrot whispers something in Hakim’s ear.' },
        { nl: 'Zadi stopt met vertellen.', en: 'Zadi stops telling the story.' }
      ], answer: [0, 1, 2, 3],
      explain: { nl: 'Eerst proberen de koks de sultan op te vrolijken, dan komt Zadi, dan begint het verhaal en op het spannendste moment stopt ze.', en: 'First the cooks try to cheer up the sultan, then Zadi comes, then the story begins and she stops at the most exciting moment.' } },
    { id: 'q5', type: 'gap', skill: 'woordenschat',
      q: { nl: 'De ___ is de rechterhand van de sultan.', en: 'The ___ is the sultan’s right-hand man.' },
      options: [
        { nl: 'wezir', en: 'vizier' },
        { nl: 'paleisnar', en: 'palace jester' },
        { nl: 'dadel', en: 'date' },
        { nl: 'kraam', en: 'stall' }
      ], answer: 0,
      explain: { nl: 'Alinea 3: “De wezir is de rechterhand van de sultan.”', en: 'Paragraph 3: “The vizier is the sultan’s right-hand man.”' } },
    { id: 'q6', type: 'mc', skill: 'gevolgtrekking',
      q: { nl: 'Waarom stopt Zadi midden in het verhaal?', en: 'Why does Zadi stop in the middle of the story?' },
      options: [
        { nl: 'Dan wil de sultan morgen weer luisteren', en: 'Then the sultan will want to listen again tomorrow' },
        { nl: 'Ze is het verhaal vergeten', en: 'She has forgotten the story' },
        { nl: 'Ze is bang voor de sultan', en: 'She is afraid of the sultan' },
        { nl: 'De muzikanten beginnen te spelen', en: 'The musicians begin to play' }
      ], answer: 0,
      explain: { nl: 'Zadi stopt bij het spannendste moment. De sultan wil weten hoe het afloopt en zegt: “Kom morgen terug.”', en: 'Zadi stops at the most exciting moment. The sultan wants to know how it ends and says: “Come back tomorrow.”' } }
  ]
},
{
  level: 3, emoji: '🦜', scene: 'world',
  title: { nl: 'De papegaai en de ring', en: 'The parrot and the ring' },
  recap: { nl: 'Sultan Karim lacht niet meer sinds zijn vriend Farid is weggegaan. Zadi vertelt hem een verhaal over Hakim, een jongen op de markt. Een papegaai fluistert Hakim een geheim over het paleis in zijn oor.',
           en: 'Sultan Karim has not laughed since his friend Farid went away. Zadi tells him a story about Hakim, a boy at the market. A parrot whispers a secret about the palace in Hakim’s ear.' },
  teaser: { nl: 'Wat gebeurt er als het tapijt van Yusuf gaat vliegen?', en: 'What happens when Yusuf’s carpet starts to fly?' },
  text: {
    nl: [
      "De tweede avond zat de sultan al op zijn kussen voordat Zadi er was. Naast hem stond zijn dienaar Bashir. Bashir had een lange neus en een smalle mond. “Majesteit, u hebt werk te doen”, mopperde hij. “Zwijg, Bashir”, zei de sultan. “Ik wil weten wat het geheim is.”",
      "Zadi ging verder. “De papegaai had gefluisterd: ‘De gouden ring van de prinses is niet gestolen. Hij ligt in de oven van de bakker.’ Iedereen dacht dat de dienstmeid Laila de ring had gepakt. Ze moest de volgende ochtend het paleis verlaten.”",
      "“Hakim rende naar de bakkerij. De bakker was er niet. In de warme oven lag een brood, en daarnaast zat een dikke, grijze kat. Tussen haar pootjes glinsterde iets. Het was de ring! De kat had hem van het raam van de prinses gepakt, omdat hij zo mooi schitterde.”",
      "“Hakim bracht de ring terug naar het paleis. De prinses riep: ‘Mijn ring!’ en Laila mocht blijven. De kat kreeg als beloning een heel visje.” De sultan snoof. Eerst dacht Zadi dat hij boos was. Maar het was een klein lachje, dat hij snel achter zijn hand verstopte.",
      "“Dat was het verhaal van de papegaai”, zei Zadi. “Maar ik ken er nog een. Dat gaat over een tapijtenmaker die Yusuf heette. Hij maakte het mooiste tapijt van het hele land. Maar op een nacht begon het tapijt te trillen en van de grond te komen...”",
      "Zadi stond op. “De rest hoort u morgen, majesteit.” Bashir keek haar kwaad aan. Daarna keek hij naar de sultan, die nog steeds glimlachte. Bashir kneep zijn lippen op elkaar en zei niets."
    ],
    en: [
      "On the second evening the sultan was already sitting on his cushion before Zadi arrived. Beside him stood his servant Bashir. Bashir had a long nose and a thin mouth. “Your Majesty, you have work to do,” he grumbled. “Be quiet, Bashir,” said the sultan. “I want to know what the secret is.”",
      "Zadi went on. “The parrot had whispered: ‘The princess’s golden ring has not been stolen. It is in the baker’s oven.’ Everybody thought the maid Laila had taken the ring. She had to leave the palace the next morning.”",
      "“Hakim ran to the bakery. The baker was not there. In the warm oven lay a loaf of bread, and next to it sat a fat, grey cat. Something glittered between her paws. It was the ring! The cat had taken it from the princess’s window because it sparkled so beautifully.”",
      "“Hakim took the ring back to the palace. The princess cried: ‘My ring!’ and Laila was allowed to stay. The cat received a whole little fish as a reward.” The sultan snorted. At first Zadi thought he was angry. But it was a tiny laugh, which he quickly hid behind his hand.",
      "“That was the story of the parrot,” said Zadi. “But I know another one. It is about a carpet maker called Yusuf. He made the most beautiful carpet in the whole country. But one night the carpet began to tremble and rise from the ground...”",
      "Zadi stood up. “You will hear the rest tomorrow, Your Majesty.” Bashir gave her an angry look. Then he looked at the sultan, who was still smiling. Bashir pressed his lips together and said nothing."
    ]
  },
  words: [
    { nl: 'dienaar', en: 'servant', defNl: 'iemand die voor een ander werkt en hem helpt', defEn: 'someone who works for another person and helps him' },
    { nl: 'glinsterde', en: 'glittered', defNl: 'schitterde, scheen mooi als goud of sterren', defEn: 'sparkled, shone beautifully like gold or stars' },
    { nl: 'beloning', en: 'reward', defNl: 'iets moois dat je krijgt omdat je iets goeds hebt gedaan', defEn: 'something nice you get because you have done something good' }
  ],
  questions: [
    { id: 'q1', type: 'mc', skill: 'letterlijk',
      q: { nl: 'Waar lag de gouden ring van de prinses?', en: 'Where was the princess’s golden ring?' },
      options: [
        { nl: 'In de oven van de bakker', en: 'In the baker’s oven' },
        { nl: 'In de kraam van Hakim', en: 'In Hakim’s stall' },
        { nl: 'Op het dak van het paleis', en: 'On the roof of the palace' },
        { nl: 'In de zak van Laila', en: 'In Laila’s pocket' }
      ], answer: 0,
      explain: { nl: 'De papegaai fluisterde: “Hij ligt in de oven van de bakker.” Daar vond Hakim hem ook.', en: 'The parrot whispered: “It is in the baker’s oven.” That is where Hakim found it too.' } },
    { id: 'q2', type: 'tf', skill: 'letterlijk',
      q: { nl: 'De dienstmeid Laila had de ring echt gestolen.', en: 'The maid Laila had really stolen the ring.' },
      answer: false,
      explain: { nl: 'De kat had de ring gepakt. Laila had niets gedaan.', en: 'The cat had taken the ring. Laila had done nothing.' } },
    { id: 'q3', type: 'mc', skill: 'gevolgtrekking',
      q: { nl: 'Waarom hoefde Laila het paleis niet meer te verlaten?', en: 'Why did Laila no longer have to leave the palace?' },
      options: [
        { nl: 'Hakim vond de ring en bracht hem terug', en: 'Hakim found the ring and brought it back' },
        { nl: 'De prinses kocht een nieuwe ring', en: 'The princess bought a new ring' },
        { nl: 'Laila gaf de kat een visje', en: 'Laila gave the cat a little fish' },
        { nl: 'De sultan verbood het', en: 'The sultan forbade it' }
      ], answer: 0,
      explain: { nl: 'Iedereen dacht dat Laila de dief was. Toen de ring terug was, bleek dat de kat het had gedaan.', en: 'Everybody thought Laila was the thief. When the ring was back, it turned out the cat had done it.' } },
    { id: 'q4', type: 'gap', skill: 'woordenschat',
      q: { nl: 'Als je iets moois krijgt omdat je iets goeds hebt gedaan, noem je dat een ___.', en: 'If you get something nice because you have done something good, it is called a ___.' },
      options: [
        { nl: 'beloning', en: 'reward' },
        { nl: 'dienaar', en: 'servant' },
        { nl: 'bakkerij', en: 'bakery' },
        { nl: 'geheim', en: 'secret' }
      ], answer: 0,
      explain: { nl: 'De kat kreeg een heel visje “als beloning”.', en: 'The cat got a whole little fish “as a reward”.' } },
    { id: 'q5', type: 'mc', skill: 'verwijswoorden',
      q: { nl: '“Hij ligt in de oven van de bakker.” Waar verwijst “hij” naar?', en: '“It is in the baker’s oven.” What does “it” point to?' },
      options: [
        { nl: 'De ring', en: 'The ring' },
        { nl: 'De papegaai', en: 'The parrot' },
        { nl: 'Het brood', en: 'The bread' },
        { nl: 'Hakim', en: 'Hakim' }
      ], answer: 0,
      explain: { nl: 'De zin ervoor gaat over “de gouden ring van de prinses”. Dat is waar “hij” naar terugwijst.', en: 'The sentence before is about “the princess’s golden ring”. That is what “it” points back to.' } },
    { id: 'q6', type: 'mc', skill: 'gevolgtrekking',
      q: { nl: 'Wat vindt Bashir van de verhalen van Zadi?', en: 'What does Bashir think of Zadi’s stories?' },
      options: [
        { nl: 'Hij vindt ze niet leuk, want hij kijkt kwaad en zegt dat de sultan werk heeft', en: 'He does not like them, because he looks angry and says the sultan has work to do' },
        { nl: 'Hij vindt ze de mooiste verhalen van het land', en: 'He thinks they are the most beautiful stories in the country' },
        { nl: 'Hij heeft ze zelf bedacht', en: 'He made them up himself' },
        { nl: 'Hij is bang voor de papegaai', en: 'He is afraid of the parrot' }
      ], answer: 0,
      explain: { nl: 'Bashir mompelt dat de sultan werk heeft en kijkt Zadi kwaad aan. Hij is niet blij met de verhalen.', en: 'Bashir grumbles that the sultan has work to do and gives Zadi an angry look. He is not happy about the stories.' } },
    { id: 'q7', type: 'order', skill: 'volgorde',
      q: { nl: 'Zet in de volgorde van het verhaal van de papegaai.', en: 'Put these in the order of the parrot’s story.' },
      items: [
        { nl: 'De papegaai fluistert waar de ring ligt.', en: 'The parrot whispers where the ring is.' },
        { nl: 'Hakim rent naar de bakkerij.', en: 'Hakim runs to the bakery.' },
        { nl: 'Hakim vindt een kat met de ring.', en: 'Hakim finds a cat with the ring.' },
        { nl: 'Laila mag in het paleis blijven.', en: 'Laila is allowed to stay in the palace.' }
      ], answer: [0, 1, 2, 3],
      explain: { nl: 'Eerst het geheim, dan de bakkerij, dan de kat met de ring en ten slotte het goede einde voor Laila.', en: 'First the secret, then the bakery, then the cat with the ring and finally the happy ending for Laila.' } }
  ]
},
{
  level: 4, emoji: '🧞', scene: 'world',
  title: { nl: 'Het tapijt dat kon vliegen', en: 'The carpet that could fly' },
  recap: { nl: 'Een papegaai vertelde Hakim waar de ring van de prinses lag: in de oven van de bakker. Zo werd de dienstmeid Laila gered. De sultan glimlachte, maar zijn dienaar Bashir keek boos. Zadi begon aan een nieuw verhaal, over de tapijtenmaker Yusuf.',
           en: 'A parrot told Hakim where the princess’s ring was: in the baker’s oven. That is how the maid Laila was saved. The sultan smiled, but his servant Bashir looked angry. Zadi began a new story, about the carpet maker Yusuf.' },
  teaser: { nl: 'Van wie is de brief met het groene zegel, en waarom verstopt Bashir hem?', en: 'Who is the letter with the green seal from, and why is Bashir hiding it?' },
  text: {
    nl: [
      "Op de derde avond wachtte Bashir Zadi op bij de poort. “Jij houdt de sultan van zijn werk”, siste hij. “De boeren hebben hulp nodig, en jij vertelt sprookjes!” Zadi bleef rustig. “Dan vraag ik het aan de sultan zelf”, zei ze. Dat deed ze, en de sultan besliste: eerst het verhaal, daarna het werk.",
      "Zadi begon. “Yusuf de tapijtenmaker had een bijzonder tapijt gemaakt. Hij wist niet dat het kon vliegen, tot hij op een avond moest lachen om zijn eigen grapje. Meteen kwam het tapijt van de grond. Hoe harder Yusuf lachte, hoe hoger het tapijt vloog.”",
      "“Yusuf was dolblij. De volgende dag nam hij de kinderen van de buren mee. Ze lachten allemaal, en het tapijt zweefde over de daken. Ze zagen de markt, de rivier en de woestijn, heel klein onder zich.”",
      "“Maar in het dorp woonde ook een rijke koopman, Rashid. Rashid was zo gierig dat hij elke munt twee keer telde. Hij had nog nooit hard gelachen. ‘Dat tapijt moet van mij zijn’, dacht hij. In het donker sloop hij naar het huis van Yusuf en nam het mee.”",
      "“Rashid ging op het tapijt zitten. ‘Vlieg!’ beval hij. Er gebeurde niets. ‘Ha. Ha. Ha’, zei hij met een stijf gezicht. Het tapijt kwam een klein stukje omhoog en zakte weer neer. Toen sprong er een aapje op zijn schouder. Het kietelde hem onder zijn kin.”",
      "“Rashid schoot in de lach. Het tapijt vloog als een pijl omhoog, hoger dan de torens en hoger dan de wolken. ‘Help!’ wilde hij roepen, maar hij moest zo lachen dat er geen woord uit kwam. De hele nacht zweefde hij boven het dorp, met een aapje op zijn hoofd.”",
      "Toen hoorde Zadi een geluid dat ze nog nooit in het paleis had gehoord. Sultan Karim lachte! Hij lachte zo hard dat hij van zijn kussen rolde. Het hele paleis stond stil en luisterde. Alleen Bashir lachte niet. Hij draaide zich snel om en stopte iets achter zijn rug: een brief met een groen zegel. Zadi zag het precies."
    ],
    en: [
      "On the third evening Bashir waited for Zadi at the gate. “You keep the sultan from his work,” he hissed. “The farmers need help, and you tell fairy tales!” Zadi stayed calm. “Then I will ask the sultan himself,” she said. She did, and the sultan decided: first the story, then the work.",
      "Zadi began. “Yusuf the carpet maker had made a special carpet. He did not know that it could fly, until one evening he had to laugh at his own joke. At once the carpet rose from the ground. The harder Yusuf laughed, the higher the carpet flew.”",
      "“Yusuf was overjoyed. The next day he took the neighbours’ children along. They all laughed, and the carpet floated over the roofs. They saw the market, the river and the desert, very small beneath them.”",
      "“But a rich merchant lived in the village too, Rashid. Rashid was so stingy that he counted every coin twice. He had never laughed out loud. ‘That carpet must be mine,’ he thought. In the dark he crept to Yusuf’s house and took it.”",
      "“Rashid sat down on the carpet. ‘Fly!’ he ordered. Nothing happened. ‘Ha. Ha. Ha,’ he said with a stiff face. The carpet rose a tiny bit and sank down again. Then a little monkey jumped onto his shoulder. It tickled him under his chin.”",
      "“Rashid burst out laughing. The carpet shot up like an arrow, higher than the towers and higher than the clouds. ‘Help!’ he wanted to shout, but he was laughing so hard that no word came out. All night he floated above the village, with a little monkey on his head.”",
      "Then Zadi heard a sound she had never heard in the palace before. Sultan Karim was laughing! He laughed so hard that he rolled off his cushion. The whole palace stood still and listened. Only Bashir did not laugh. He quickly turned round and hid something behind his back: a letter with a green seal. Zadi saw it clearly."
    ]
  },
  words: [
    { nl: 'gierig', en: 'stingy', defNl: 'iemand die zijn geld niet wil uitgeven of delen', defEn: 'someone who does not want to spend or share his money' },
    { nl: 'zweefde', en: 'floated', defNl: 'bleef in de lucht hangen zonder te vallen', defEn: 'stayed up in the air without falling' },
    { nl: 'zegel', en: 'seal', defNl: 'een stempel van was waarmee een brief dichtgemaakt wordt', defEn: 'a stamp of wax with which a letter is closed' },
    { nl: 'kietelen', en: 'to tickle', defNl: 'iemand zachtjes aanraken zodat hij moet lachen', defEn: 'to touch someone gently so that he has to laugh' }
  ],
  questions: [
    { id: 'q1', type: 'mc', skill: 'letterlijk',
      q: { nl: 'Wanneer vloog het tapijt van Yusuf?', en: 'When did Yusuf’s carpet fly?' },
      options: [
        { nl: 'Als iemand erop lachte', en: 'When somebody laughed on it' },
        { nl: 'Als iemand “Vlieg!” riep', en: 'When somebody shouted “Fly!”' },
        { nl: 'Als het regende', en: 'When it rained' },
        { nl: 'Als het donker was', en: 'When it was dark' }
      ], answer: 0,
      explain: { nl: 'Alinea 2: “Hoe harder Yusuf lachte, hoe hoger het tapijt vloog.” Bevelen als “Vlieg!” hielpen niet.', en: 'Paragraph 2: “The harder Yusuf laughed, the higher the carpet flew.” Orders like “Fly!” did not help.' } },
    { id: 'q2', type: 'tf', skill: 'letterlijk',
      q: { nl: 'Rashid lachte vaak en hard.', en: 'Rashid often laughed out loud.' },
      answer: false,
      explain: { nl: 'Alinea 4: “Hij had nog nooit hard gelachen.”', en: 'Paragraph 4: “He had never laughed out loud.”' } },
    { id: 'q3', type: 'gap', skill: 'woordenschat',
      q: { nl: 'Een koopman die elke munt twee keer telt en niets wil delen, is ___.', en: 'A merchant who counts every coin twice and does not want to share is ___.' },
      options: [
        { nl: 'gierig', en: 'stingy' },
        { nl: 'dolblij', en: 'overjoyed' },
        { nl: 'rustig', en: 'calm' },
        { nl: 'bijzonder', en: 'special' }
      ], answer: 0,
      explain: { nl: 'Alinea 4: “Rashid was zo gierig dat hij elke munt twee keer telde.”', en: 'Paragraph 4: “Rashid was so stingy that he counted every coin twice.”' } },
    { id: 'q4', type: 'mc', skill: 'gevolgtrekking',
      q: { nl: 'Waarom vloog het tapijt eerst bijna niet toen Rashid “Ha. Ha. Ha” zei?', en: 'Why did the carpet hardly fly at first when Rashid said “Ha. Ha. Ha”?' },
      options: [
        { nl: 'Hij lachte niet echt, want hij had een stijf gezicht', en: 'He was not really laughing, because he had a stiff face' },
        { nl: 'Het tapijt was te zwaar', en: 'The carpet was too heavy' },
        { nl: 'Het aapje zat in de weg', en: 'The monkey was in the way' },
        { nl: 'Het was te donker', en: 'It was too dark' }
      ], answer: 0,
      explain: { nl: 'Het tapijt vliegt op echte lach. Pas toen het aapje hem kietelde, lachte Rashid echt.', en: 'The carpet flies on real laughter. Only when the monkey tickled him did Rashid laugh for real.' } },
    { id: 'q5', type: 'mc', skill: 'verwijswoorden',
      q: { nl: '“De hele nacht zweefde hij boven het dorp.” Wie is “hij”?', en: '“All night he floated above the village.” Who is “he”?' },
      options: [
        { nl: 'Rashid', en: 'Rashid' },
        { nl: 'Yusuf', en: 'Yusuf' },
        { nl: 'Het aapje', en: 'The monkey' },
        { nl: 'Bashir', en: 'Bashir' }
      ], answer: 0,
      explain: { nl: 'De alinea gaat over Rashid, die op het gestolen tapijt zat.', en: 'The paragraph is about Rashid, who was sitting on the stolen carpet.' } },
    { id: 'q6', type: 'order', skill: 'volgorde',
      q: { nl: 'Zet in de volgorde van het verhaal van Yusuf.', en: 'Put these in the order of Yusuf’s story.' },
      items: [
        { nl: 'Yusuf ontdekt dat zijn tapijt kan vliegen.', en: 'Yusuf discovers that his carpet can fly.' },
        { nl: 'Yusuf vliegt met de buurkinderen over de daken.', en: 'Yusuf flies over the roofs with the neighbours’ children.' },
        { nl: 'Rashid steelt het tapijt.', en: 'Rashid steals the carpet.' },
        { nl: 'Een aapje kietelt Rashid.', en: 'A little monkey tickles Rashid.' },
        { nl: 'Rashid zweeft de hele nacht boven het dorp.', en: 'Rashid floats above the village all night.' }
      ], answer: [0, 1, 2, 3, 4],
      explain: { nl: 'Eerst de ontdekking, dan de vlucht met de kinderen, dan de diefstal. Daarna volgen de kietels en de zwevende nacht.', en: 'First the discovery, then the flight with the children, then the theft. After that come the tickles and the floating night.' } },
    { id: 'q7', type: 'mc', skill: 'hoofdgedachte',
      q: { nl: 'Wat laat het verhaal van Yusuf vooral zien?', en: 'What does Yusuf’s story mainly show?' },
      options: [
        { nl: 'Echte vreugde kun je niet commanderen of stelen', en: 'You cannot order or steal real joy' },
        { nl: 'Tapijten zijn gevaarlijk', en: 'Carpets are dangerous' },
        { nl: 'Rijke mensen hebben altijd gelijk', en: 'Rich people are always right' },
        { nl: 'Apen zijn slimmer dan mensen', en: 'Monkeys are smarter than people' }
      ], answer: 0,
      explain: { nl: 'Rashid kan het tapijt stelen, maar het vliegt alleen als hij echt lacht. Dat kun je niet bevelen.', en: 'Rashid can steal the carpet, but it only flies when he really laughs. You cannot order that.' } },
    { id: 'q8', type: 'mc', skill: 'gevolgtrekking',
      q: { nl: 'Wat denkt Zadi waarschijnlijk als ze Bashir de brief ziet verstoppen?', en: 'What does Zadi probably think when she sees Bashir hide the letter?' },
      options: [
        { nl: 'Dat Bashir iets voor de sultan verborgen houdt', en: 'That Bashir is keeping something from the sultan' },
        { nl: 'Dat de brief een cadeau voor haar is', en: 'That the letter is a present for her' },
        { nl: 'Dat Bashir ook wil lachen', en: 'That Bashir also wants to laugh' },
        { nl: 'Dat de brief van de prinses komt', en: 'That the letter comes from the princess' }
      ], answer: 0,
      explain: { nl: 'Bashir draait zich snel om en verstopt de brief achter zijn rug. Dat doe je alleen als niemand het mag zien.', en: 'Bashir quickly turns round and hides the letter behind his back. You only do that if nobody may see it.' } }
  ]
},
{
  level: 6, emoji: '💌', scene: 'world',
  title: { nl: 'De brief met het groene zegel', en: 'The letter with the green seal' },
  recap: { nl: 'Het verhaal van Zadi over het vliegende tapijt maakte sultan Karim voor het eerst aan het lachen. Alleen Bashir lachte niet. Hij verstopte een brief met een groen zegel achter zijn rug, en Zadi zag het.',
           en: 'Zadi’s story about the flying carpet made Sultan Karim laugh for the first time. Only Bashir did not laugh. He hid a letter with a green seal behind his back, and Zadi saw it.' },
  more: true,
  teaser: { nl: 'Wie is de vreemdeling aan de poort, en welk verhaal heeft hij?', en: 'Who is the stranger at the gate, and what story does he have?' },
  text: {
    nl: [
      "De volgende ochtend vertelde Zadi haar vader, de wezir, wat ze had gezien. Hij werd stil. “Bashir werkt al dertig jaar voor de sultan”, zei hij. “Als je hem beschuldigt, heb je bewijs nodig. Wat jij denkt, is een mening. Een bewijs is iets wat je kunt laten zien.” Zadi knikte. Ze had geen bewijs. Maar ze had wel een verhaal.",
      "Die avond zat Bashir weer naast de sultan. Zadi begon met een kort verhaal. “Twee kooplieden trokken door de woestijn. De eerste had een kaart van de oase. Hij was bang dat de tweede er eerder zou zijn, dus hij verstopte de kaart. Maar zonder kaart verdwaalde hij zelf. Pas na drie dagen strompelde hij de oase binnen. De tweede koopman had de weg gevraagd aan een herder. Hij zat al lang in de schaduw, met een kruik water voor zijn reisgenoot.”",
      "Het bleef stil. Bashir schoof onrustig heen en weer. “Het is maar een verhaal”, mompelde hij. “Natuurlijk”, zei Zadi vriendelijk. “Maar waarom hebt u dan een brief met een groen zegel in uw mouw?” Bashir greep naar zijn arm, en daarmee gaf hij zichzelf bloot. De brief gleed op de grond. De wezir raapte hem op en gaf hem aan de sultan.",
      "De sultan las hardop. “Beste Karim, dit is mijn twintigste brief. Waarom antwoord je nooit? Ik ben niet boos weggegaan. Mijn moeder was ziek en ik moest naar Samarra. Ik mis je en je slechte grappen. Je vriend, Farid.” De sultan liet de brief zakken. Zijn handen trilden.",
      "“Waarom, Bashir?” vroeg hij zacht. Bashir keek naar de grond. “Farid maakte u aan het lachen, majesteit. Als hij terugkwam, zou u niet meer naar mij luisteren. Ik was bang mijn plaats te verliezen.” De sultan zweeg lang. Toen zei hij: “Je hebt me twee jaar lang van mijn vriend gescheiden. Dat vergeef ik niet zomaar. Je rijdt morgen zelf naar Samarra en brengt hem terug.”",
      "Daarna keek hij naar Zadi. “Jij hebt meer gedaan dan alle koks en muzikanten bij elkaar. Vertel morgen weer een verhaal. Ik wil er nog duizend en één horen.” Zadi lachte. Maar op dat moment rende een bewaker de zaal in. “Majesteit! Aan de poort staat een vreemdeling. Hij zegt dat hij een verhaal heeft dat nog mooier is dan dat van Zadi.”"
    ],
    en: [
      "The next morning Zadi told her father, the vizier, what she had seen. He fell silent. “Bashir has worked for the sultan for thirty years,” he said. “If you accuse him, you need proof. What you think is an opinion. Proof is something you can show.” Zadi nodded. She had no proof. But she did have a story.",
      "That evening Bashir sat beside the sultan again. Zadi began with a short story. “Two merchants travelled through the desert. The first had a map of the oasis. He was afraid that the second would get there sooner, so he hid the map. But without the map he got lost himself. Only after three days did he stumble into the oasis. The second merchant had asked a shepherd for the way. He had been sitting in the shade for a long time, with a jug of water for his travelling companion.”",
      "It stayed quiet. Bashir shifted restlessly back and forth. “It is only a story,” he muttered. “Of course,” said Zadi kindly. “But then why do you have a letter with a green seal in your sleeve?” Bashir grabbed at his arm, and by doing so he gave himself away. The letter slid to the floor. The vizier picked it up and gave it to the sultan.",
      "The sultan read aloud. “Dear Karim, this is my twentieth letter. Why do you never answer? I did not leave angry. My mother was ill and I had to go to Samarra. I miss you and your bad jokes. Your friend, Farid.” The sultan let the letter sink. His hands were trembling.",
      "“Why, Bashir?” he asked softly. Bashir looked at the ground. “Farid made you laugh, Your Majesty. If he came back, you would no longer listen to me. I was afraid of losing my place.” The sultan was silent for a long time. Then he said: “For two years you kept me away from my friend. I will not forgive that just like that. Tomorrow you will ride to Samarra yourself and bring him back.”",
      "Then he looked at Zadi. “You have done more than all the cooks and musicians put together. Tell another story tomorrow. I want to hear a thousand and one more.” Zadi laughed. But at that moment a guard ran into the hall. “Your Majesty! There is a stranger at the gate. He says he has a story that is even more beautiful than Zadi’s.”"
    ]
  },
  words: [
    { nl: 'beschuldigen', en: 'to accuse', defNl: 'zeggen dat iemand iets verkeerds heeft gedaan', defEn: 'to say that someone has done something wrong' },
    { nl: 'oase', en: 'oasis', defNl: 'een plek in de woestijn met water en bomen', defEn: 'a place in the desert with water and trees' },
    { nl: 'strompelen', en: 'to stumble along', defNl: 'moeizaam en wankelend lopen, omdat je moe bent', defEn: 'to walk with difficulty and unsteadily, because you are tired' },
    { nl: 'zichzelf blootgeven', en: 'to give yourself away', defNl: 'per ongeluk laten zien dat je iets verbergt', defEn: 'to show by accident that you are hiding something' }
  ],
  questions: [
    { id: 'q1', type: 'mc', skill: 'letterlijk',
      q: { nl: 'Waarom hield Bashir de brieven van Farid achter?', en: 'Why did Bashir keep Farid’s letters back?' },
      options: [
        { nl: 'Hij was bang zijn plaats bij de sultan te verliezen', en: 'He was afraid of losing his place beside the sultan' },
        { nl: 'Hij kon de brieven niet lezen', en: 'He could not read the letters' },
        { nl: 'Hij wilde de sultan een verrassing geven', en: 'He wanted to give the sultan a surprise' },
        { nl: 'Hij was boos op Zadi', en: 'He was angry with Zadi' }
      ], answer: 0,
      explain: { nl: 'Bashir zegt: “Als hij terugkwam, zou u niet meer naar mij luisteren. Ik was bang mijn plaats te verliezen.”', en: 'Bashir says: “If he came back, you would no longer listen to me. I was afraid of losing my place.”' } },
    { id: 'q2', type: 'find', skill: 'gevolgtrekking',
      q: { nl: 'Welke zin laat zien dat de sultan geraakt is door de brief van Farid?', en: 'Which sentence shows that the sultan is moved by Farid’s letter?' },
      options: [
        { nl: 'Het bleef stil.', en: 'It stayed quiet.' },
        { nl: 'Zijn handen trilden.', en: 'His hands were trembling.' },
        { nl: 'De wezir raapte hem op en gaf hem aan de sultan.', en: 'The vizier picked it up and gave it to the sultan.' },
        { nl: 'Zadi knikte.', en: 'Zadi nodded.' }
      ], answer: 1,
      explain: { nl: 'Trillende handen laten zien dat de sultan veel voelt. De andere zinnen zeggen niets over zijn gevoelens.', en: 'Trembling hands show that the sultan feels a lot. The other sentences say nothing about his feelings.' } },
    { id: 'q3', type: 'gap', skill: 'woordenschat',
      q: { nl: 'Als je zegt dat iemand iets verkeerds heeft gedaan, ___ je hem.', en: 'If you say that someone has done something wrong, you ___ him.' },
      options: [
        { nl: 'beschuldigt', en: 'accuse' },
        { nl: 'beloont', en: 'reward' },
        { nl: 'begroet', en: 'greet' },
        { nl: 'bewondert', en: 'admire' }
      ], answer: 0,
      explain: { nl: 'De wezir zegt: “Als je hem beschuldigt, heb je bewijs nodig.”', en: 'The vizier says: “If you accuse him, you need proof.”' } },
    { id: 'q4', type: 'order', skill: 'volgorde',
      q: { nl: 'Zet in de volgorde van het verhaal.', en: 'Put these in the order of the story.' },
      items: [
        { nl: 'De wezir zegt dat Zadi bewijs nodig heeft.', en: 'The vizier says that Zadi needs proof.' },
        { nl: 'Zadi vertelt het verhaal van de twee kooplieden.', en: 'Zadi tells the story of the two merchants.' },
        { nl: 'De brief glijdt op de grond.', en: 'The letter slides to the floor.' },
        { nl: 'De sultan leest de brief van Farid voor.', en: 'The sultan reads Farid’s letter aloud.' },
        { nl: 'Een bewaker meldt een vreemdeling.', en: 'A guard announces a stranger.' }
      ], answer: [0, 1, 2, 3, 4],
      explain: { nl: 'Eerst het advies van de wezir, dan het verhaal dat Bashir laat schrikken, dan de brief en ten slotte de vreemdeling.', en: 'First the vizier’s advice, then the story that startles Bashir, then the letter and finally the stranger.' } },
    { id: 'q5', type: 'mc', skill: 'verwijswoorden',
      q: { nl: '“Hij zat al lang in de schaduw, met een kruik water voor zijn reisgenoot.” Wie is “hij”?', en: '“He had been sitting in the shade for a long time, with a jug of water for his travelling companion.” Who is “he”?' },
      options: [
        { nl: 'De tweede koopman', en: 'The second merchant' },
        { nl: 'De eerste koopman', en: 'The first merchant' },
        { nl: 'De herder', en: 'The shepherd' },
        { nl: 'Bashir', en: 'Bashir' }
      ], answer: 0,
      explain: { nl: 'De zin ervoor zegt dat de tweede koopman de weg had gevraagd aan een herder. Die koopman zat al lang in de oase.', en: 'The sentence before says that the second merchant had asked a shepherd for the way. That merchant had been in the oasis for a long time.' } },
    { id: 'q6', type: 'sort', skill: 'feitmening',
      q: { nl: 'Feit of mening? Zet elke zin in de goede groep.', en: 'Fact or opinion? Put every sentence in the right group.' },
      bins: [ { nl: 'Feit', en: 'Fact' }, { nl: 'Mening', en: 'Opinion' } ],
      items: [
        { nl: 'De brief van Farid was zijn twintigste brief.', en: 'Farid’s letter was his twentieth letter.', bin: 0 },
        { nl: 'Zadi’s verhaal is mooier dan alle muziek in het paleis.', en: 'Zadi’s story is more beautiful than all the music in the palace.', bin: 1 },
        { nl: 'Bashir werkt al dertig jaar voor de sultan.', en: 'Bashir has worked for the sultan for thirty years.', bin: 0 },
        { nl: 'Wat Bashir deed, is erger dan stelen.', en: 'What Bashir did is worse than stealing.', bin: 1 }
      ],
      explain: { nl: 'Hoeveel brieven en hoeveel jaren kun je tellen. Of iets “mooier” of “erger” is, vindt iemand zelf.', en: 'You can count letters and years. Whether something is “more beautiful” or “worse” is what somebody thinks.' } },
    { id: 'q7', type: 'multi', skill: 'letterlijk',
      q: { nl: 'Wat staat er in de brief van Farid? Kies er 3.', en: 'What does Farid’s letter say? Pick 3.' },
      options: [
        { nl: 'Dit is zijn twintigste brief', en: 'This is his twentieth letter' },
        { nl: 'Hij is niet boos weggegaan', en: 'He did not leave angry' },
        { nl: 'Zijn moeder was ziek', en: 'His mother was ill' },
        { nl: 'Hij wil nooit meer terugkomen', en: 'He never wants to come back' },
        { nl: 'Hij heeft een nieuwe baan gevonden', en: 'He has found a new job' }
      ], answer: [0, 1, 2],
      explain: { nl: 'Farid schrijft dat het zijn twintigste brief is, dat hij niet boos wegging en dat zijn moeder ziek was.', en: 'Farid writes that it is his twentieth letter, that he did not leave angry and that his mother was ill.' } },
    { id: 'q8', type: 'mc', skill: 'doel',
      q: { nl: 'Waarom vertelt Zadi het verhaal van de twee kooplieden aan Bashir?', en: 'Why does Zadi tell Bashir the story of the two merchants?' },
      options: [
        { nl: 'Ze wil hem laten voelen dat verstoppen en liegen jezelf nog meer schaadt', en: 'She wants him to feel that hiding and lying harm yourself even more' },
        { nl: 'Ze wil hem laten zien waar de oase ligt', en: 'She wants to show him where the oasis is' },
        { nl: 'Ze heeft geen ander verhaal meer', en: 'She has no other story left' },
        { nl: 'Ze wil de sultan aan het lachen maken', en: 'She wants to make the sultan laugh' }
      ], answer: 0,
      explain: { nl: 'De koopman die de kaart verstopte, verdwaalde zelf. Zo kan Bashir zien dat verstoppen ook slecht voor hemzelf is.', en: 'The merchant who hid the map got lost himself. That way Bashir can see that hiding things is bad for him too.' } },
    { id: 'q9', type: 'mc', skill: 'samenvatten',
      q: { nl: 'Welke samenvatting past het best bij dit hoofdstuk?', en: 'Which summary fits this chapter best?' },
      options: [
        { nl: 'Zadi ontdekt met een verhaal dat Bashir de brieven van Farid verborg. De sultan stuurt hem er zelf op uit om Farid terug te halen.', en: 'Zadi uses a story to find out that Bashir hid Farid’s letters. The sultan sends him out himself to bring Farid back.' },
        { nl: 'De sultan wordt boos op Zadi en stuurt haar weg. Bashir wordt wezir.', en: 'The sultan gets angry with Zadi and sends her away. Bashir becomes vizier.' },
        { nl: 'Farid komt naar het paleis en vertelt een verhaal over een oase.', en: 'Farid comes to the palace and tells a story about an oasis.' },
        { nl: 'Zadi en de wezir gaan naar Samarra om Farid te zoeken.', en: 'Zadi and the vizier go to Samarra to look for Farid.' }
      ], answer: 0,
      explain: { nl: 'Dit zijn de belangrijkste gebeurtenissen: het verhaal, de ontdekking van de brieven en de opdracht aan Bashir. De andere keuzes kloppen niet met de tekst.', en: 'These are the main events: the story, the discovery of the letters and the task for Bashir. The other options do not match the text.' } }
  ]
}
  ]
});
