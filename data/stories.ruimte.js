/* Wereld 2 - Ruimte & Sterren */
addStories([
{
  id: 'ruimte-1', topic: 'ruimte', level: 1, emoji: '👨‍🚀', scene: 'space',
  title: { nl: 'Slapen in de ruimte', en: 'Sleeping in space' },
  text: {
    nl: [
      "Hoe ga je naar bed als er geen onder en geen boven is? In het ruimtestation zweeft alles. Een kussen is dus nutteloos.",
      "Astronauten slapen in een slaapzak die met klittenband aan de wand vastzit. Zo zweven ze niet in de nacht naar de andere kant van het station. Hun armen zweven wel: die blijven een beetje voor hun lichaam hangen.",
      "In het station gaat de zon elke negentig minuten op en onder. Zestien zonsopgangen per dag! Daarom dragen astronauten een slaapmasker en oordopjes, want de ventilatoren maken veel lawaai.",
      "Tanden poetsen gaat met heel weinig water. Je spuugt de tandpasta gewoon door. Haren wassen doe je met shampoo die je er niet uit hoeft te spoelen.",
      "De Nederlandse astronaut André Kuipers heeft twee keer in de ruimte geslapen. Hij zei dat hij de eerste nachten steeds wakker werd, omdat zijn lichaam dacht dat hij viel. Na een paar dagen was hij eraan gewend en sliep hij beter dan thuis."
    ],
    en: [
      "How do you go to bed when there is no down and no up? In the space station everything floats. So a pillow is useless.",
      "Astronauts sleep in a sleeping bag attached to the wall with velcro. That way they do not float to the other side of the station during the night. Their arms do float: they hang a little in front of their body.",
      "In the station the sun rises and sets every ninety minutes. Sixteen sunrises a day! That is why astronauts wear a sleep mask and earplugs, because the fans make a lot of noise.",
      "Brushing your teeth uses very little water. You simply swallow the toothpaste. You wash your hair with shampoo that does not need rinsing out.",
      "The Dutch astronaut André Kuipers has slept in space twice. He said that during the first nights he kept waking up, because his body thought he was falling. After a few days he was used to it and slept better than at home."
    ]
  },
  words: [
    { nl: 'klittenband', en: 'velcro', defNl: 'band die aan elkaar blijft plakken', defEn: 'a strip that sticks to itself' },
    { nl: 'ventilator', en: 'fan', defNl: 'apparaat dat lucht rondblaast', defEn: 'a device that blows air around' },
    { nl: 'gewend', en: 'used to it', defNl: 'het is normaal voor je geworden', defEn: 'it has become normal for you' }
  ],
  questions: [
    { id: 'q1', type: 'mc', skill: 'letterlijk',
      q: { nl: 'Waarmee zit de slaapzak aan de wand vast?', en: 'What holds the sleeping bag to the wall?' },
      options: [ { nl: 'Klittenband', en: 'Velcro' }, { nl: 'Spijkers', en: 'Nails' },
                 { nl: 'Een touw', en: 'A rope' }, { nl: 'Plakband', en: 'Sticky tape' } ],
      answer: 0,
      explain: { nl: 'Alinea 2: "een slaapzak die met klittenband aan de wand vastzit".',
                 en: 'Paragraph 2: "a sleeping bag attached to the wall with velcro".' } },
    { id: 'q2', type: 'mc', skill: 'letterlijk',
      q: { nl: 'Hoe vaak komt de zon per dag op in het ruimtestation?', en: 'How often does the sun rise each day in the station?' },
      options: [ { nl: 'Zestien keer', en: 'Sixteen times' }, { nl: 'Eén keer', en: 'Once' },
                 { nl: 'Negentig keer', en: 'Ninety times' }, { nl: 'Twee keer', en: 'Twice' } ],
      answer: 0,
      explain: { nl: 'Elke negentig minuten een zonsopgang, dus zestien per dag.',
                 en: 'A sunrise every ninety minutes, so sixteen a day.' } },
    { id: 'q3', type: 'mc', skill: 'gevolgtrekking',
      q: { nl: 'Waarom werd André Kuipers de eerste nachten steeds wakker?',
           en: 'Why did André Kuipers keep waking up the first nights?' },
      options: [
        { nl: 'Zijn lichaam dacht dat hij viel', en: 'His body thought he was falling' },
        { nl: 'Hij had honger', en: 'He was hungry' },
        { nl: 'Hij had geen slaapzak', en: 'He had no sleeping bag' },
        { nl: 'De zon scheen te fel', en: 'The sun was too bright' }
      ], answer: 0,
      explain: { nl: 'Dat staat in de laatste alinea. Zweven voelt voor je lichaam als vallen.',
                 en: 'It is in the last paragraph. Floating feels like falling to your body.' } },
    { id: 'q4', type: 'tf', skill: 'letterlijk',
      q: { nl: 'Astronauten gebruiken shampoo die je moet uitspoelen.', en: 'Astronauts use shampoo you have to rinse out.' },
      answer: false,
      explain: { nl: 'Juist niet: de shampoo hoeft er niet uit gespoeld te worden.',
                 en: 'The opposite: the shampoo does not need rinsing out.' } },
    { id: 'q5', type: 'order', skill: 'volgorde',
      q: { nl: 'Zet de stappen van bedtijd in de ruimte op een rij.', en: 'Put the bedtime steps in space in order.' },
      items: [
        { nl: 'Je poetst je tanden met heel weinig water.', en: 'You brush your teeth with very little water.' },
        { nl: 'Je kruipt in de slaapzak aan de wand.', en: 'You climb into the sleeping bag on the wall.' },
        { nl: 'Je doet je slaapmasker en oordopjes in.', en: 'You put on your sleep mask and earplugs.' },
        { nl: 'Je valt in slaap terwijl je armen zweven.', en: 'You fall asleep while your arms float.' }
      ], answer: [0, 1, 2, 3],
      explain: { nl: 'Eerst tanden, dan de slaapzak, dan masker en oordopjes, dan slapen.',
                 en: 'First teeth, then the sleeping bag, then mask and earplugs, then sleep.' } }
  ]
},

{
  id: 'ruimte-2', topic: 'ruimte', level: 2, emoji: '🛸', scene: 'mars',
  title: { nl: 'De rover die naar stenen luistert', en: 'The rover that listens to rocks' },
  text: {
    nl: [
      "Op Mars rijdt een karretje zo groot als een kleine auto. Hij heet Perseverance, wat \"volhouden\" betekent. Hij landde in 2021 in een krater die vroeger vol water stond.",
      "Perseverance rijdt langzaam: ongeveer honderd meter per dag. Dat lijkt traag, maar hij mag nergens tegenaan botsen. Er is namelijk geen monteur op Mars.",
      "Het bijzonderste aan de rover is zijn laser. Hij schiet een klein vlammetje op een steen, waardoor er een wolkje stof ontstaat. Een camera meet daarna welke kleuren er in dat wolkje zitten. Zo weet de rover waar de steen van gemaakt is, zonder hem aan te raken. Er zit zelfs een microfoon op, dus we kunnen de tik van de laser echt horen.",
      "Perseverance boort ook stukjes steen uit de bodem. Die stopt hij in metalen buisjes en die legt hij netjes op de grond. Over een aantal jaren moet een andere raket die buisjes ophalen en naar de aarde brengen.",
      "Waarom al die moeite? Omdat de onderzoekers hopen sporen te vinden van heel oud leven. Niet van marsmannetjes, maar van bacteriën van miljarden jaren oud. Vinden ze die, dan weten we eindelijk dat de aarde niet de enige plek was waar leven ontstond."
    ],
    en: [
      "On Mars there is a vehicle the size of a small car. It is called Perseverance, which means \"to keep going\". It landed in 2021 in a crater that was once full of water.",
      "Perseverance drives slowly: about a hundred metres a day. That seems slow, but it must not bump into anything. After all, there is no mechanic on Mars.",
      "The most special thing about the rover is its laser. It fires a tiny flame at a rock, which creates a small cloud of dust. A camera then measures which colours are in that cloud. That way the rover knows what the rock is made of without touching it. It even has a microphone, so we can really hear the tick of the laser.",
      "Perseverance also drills little pieces of rock out of the ground. It puts them in metal tubes and lays them neatly on the surface. In a number of years another rocket has to collect those tubes and bring them to Earth.",
      "Why all that trouble? Because the researchers hope to find traces of very old life. Not of little green men, but of bacteria billions of years old. If they find them, we will finally know that Earth was not the only place where life began."
    ]
  },
  words: [
    { nl: 'krater', en: 'crater', defNl: 'een ronde kuil, bijvoorbeeld van een meteoriet', defEn: 'a round pit, for instance from a meteorite' },
    { nl: 'volhouden', en: 'to persevere', defNl: 'doorgaan, ook als het moeilijk is', defEn: 'to keep going, even when it is hard' },
    { nl: 'sporen', en: 'traces', defNl: 'kleine aanwijzingen die iets achterlaat', defEn: 'small clues something leaves behind' }
  ],
  questions: [
    { id: 'q1', type: 'gap', skill: 'woordenschat',
      q: { nl: 'De naam Perseverance betekent ___.', en: 'The name Perseverance means ___.' },
      options: [ { nl: 'volhouden', en: 'to keep going' }, { nl: 'snelheid', en: 'speed' },
                 { nl: 'ontdekken', en: 'to discover' }, { nl: 'landen', en: 'to land' } ],
      answer: 0,
      explain: { nl: 'De eerste alinea zegt het letterlijk: "wat volhouden betekent".',
                 en: 'The first paragraph says it literally: "which means to keep going".' } },
    { id: 'q2', type: 'mc', skill: 'gevolgtrekking',
      q: { nl: 'Waarom rijdt de rover zo langzaam?', en: 'Why does the rover drive so slowly?' },
      options: [
        { nl: 'Omdat niemand hem kan repareren als hij botst', en: 'Because nobody can repair it if it crashes' },
        { nl: 'Omdat zijn motor te klein is', en: 'Because its engine is too small' },
        { nl: 'Omdat Mars heel glad is', en: 'Because Mars is very slippery' },
        { nl: 'Omdat hij zwaar is van de stenen', en: 'Because it is heavy with rocks' }
      ], answer: 0,
      explain: { nl: 'De tekst zegt: hij mag nergens tegenaan botsen, want er is geen monteur op Mars.',
                 en: 'The text says: it must not bump into anything, because there is no mechanic on Mars.' } },
    { id: 'q3', type: 'order', skill: 'volgorde',
      q: { nl: 'Hoe onderzoekt de laser een steen? Zet de stappen op een rij.',
           en: 'How does the laser study a rock? Put the steps in order.' },
      items: [
        { nl: 'De laser schiet een vlammetje op de steen.', en: 'The laser fires a tiny flame at the rock.' },
        { nl: 'Er ontstaat een wolkje stof.', en: 'A small cloud of dust appears.' },
        { nl: 'De camera meet de kleuren in het wolkje.', en: 'The camera measures the colours in the cloud.' },
        { nl: 'De onderzoekers weten waar de steen van gemaakt is.', en: 'The researchers know what the rock is made of.' }
      ], answer: [0, 1, 2, 3],
      explain: { nl: 'Laser, stofwolkje, kleuren meten, antwoord. Precies zoals in alinea 3.',
                 en: 'Laser, dust cloud, measure colours, answer. Exactly as in paragraph 3.' } },
    { id: 'q4', type: 'tf', skill: 'letterlijk',
      q: { nl: 'De buisjes met steen liggen nog op Mars.', en: 'The tubes of rock are still lying on Mars.' },
      answer: true,
      explain: { nl: 'Een andere raket moet ze over een aantal jaren nog ophalen.',
                 en: 'Another rocket still has to collect them in a number of years.' } },
    { id: 'q5', type: 'mc', skill: 'hoofdgedachte',
      q: { nl: 'Wat is de belangrijkste reden voor dit hele onderzoek?',
           en: 'What is the most important reason for this whole mission?' },
      options: [
        { nl: 'Uitzoeken of er ooit leven op Mars was', en: 'To find out whether there was ever life on Mars' },
        { nl: 'Mooie foto\'s maken van stenen', en: 'To take nice photos of rocks' },
        { nl: 'Een snelheidsrecord rijden', en: 'To set a speed record' },
        { nl: 'Marsmannetjes zoeken om mee te praten', en: 'To look for Martians to talk to' }
      ], answer: 0,
      explain: { nl: 'De laatste alinea legt uit: ze hopen sporen van heel oud leven te vinden.',
                 en: 'The last paragraph explains: they hope to find traces of very old life.' } }
  ]
},

{
  id: 'ruimte-3', topic: 'ruimte', level: 3, emoji: '🪐', scene: 'space',
  title: { nl: 'Waarom wonen we nog niet op Mars?', en: 'Why don’t we live on Mars yet?' },
  text: {
    nl: [
      "In films stappen mensen zo even uit op Mars. In het echt is het een van de moeilijkste klussen die de mensheid ooit heeft bedacht. Er zijn drie grote problemen, en geen ervan is opgelost.",
      "Het eerste probleem is de reis. Mars staat gemiddeld zo'n tweehonderdvijftig miljoen kilometer van de aarde. Een raket doet er ongeveer zeven maanden over, en dat alleen als de planeten gunstig staan. Onderweg kun je niet terug, niet uitstappen en niets laten bezorgen. Alles wat je nodig hebt, moet mee.",
      "Het tweede probleem is straling. De aarde heeft een magnetisch schild dat ons beschermt tegen deeltjes van de zon. Mars heeft dat schild niet meer. Astronauten zouden dus onder de grond of onder een laag zand moeten wonen. Een huis met ramen en uitzicht zit er niet in.",
      "Het derde probleem is het lichaam zelf. Door de lage zwaartekracht worden spieren slapper en botten dunner. Wie twee jaar wegblijft, moet elke dag uren sporten en kan bij thuiskomst niet meteen staan.",
      "Toch werken duizenden ingenieurs eraan. Ze oefenen met kassen die water hergebruiken, met beton van marsstof en met brandstof die je op Mars zelf kunt maken. Juist die oefeningen leveren nu al iets op: zonnepanelen, waterfilters en gewassen die met weinig water groeien gebruiken wij op aarde allemaal.",
      "Misschien landt de eerste mens er pas als jij zelf volwassen bent. Maar bijna alles wat we onderweg uitvinden, blijft hier nuttig."
    ],
    en: [
      "In films people simply step out onto Mars. In reality it is one of the hardest jobs humanity has ever thought up. There are three big problems, and none of them is solved.",
      "The first problem is the journey. On average Mars is about two hundred and fifty million kilometres from Earth. A rocket takes roughly seven months, and only when the planets line up favourably. On the way you cannot turn back, cannot step out and cannot have anything delivered. Everything you need has to come along.",
      "The second problem is radiation. Earth has a magnetic shield that protects us from particles from the sun. Mars no longer has that shield. So astronauts would have to live underground or under a layer of sand. A house with windows and a view is out of the question.",
      "The third problem is the body itself. Because of the low gravity muscles get weaker and bones get thinner. Anyone who stays away for two years has to exercise for hours every day and cannot stand up straight away on returning.",
      "Still, thousands of engineers are working on it. They practise with greenhouses that reuse water, with concrete made of Mars dust and with fuel you can make on Mars itself. Those very experiments are already paying off: solar panels, water filters and crops that grow with little water are all used by us on Earth.",
      "Perhaps the first human will only land there when you are grown up yourself. But almost everything we invent along the way stays useful here."
    ]
  },
  words: [
    { nl: 'straling', en: 'radiation', defNl: 'onzichtbare deeltjes die je lichaam kunnen beschadigen', defEn: 'invisible particles that can damage your body' },
    { nl: 'zwaartekracht', en: 'gravity', defNl: 'de kracht die alles naar de grond trekt', defEn: 'the force that pulls everything to the ground' },
    { nl: 'hergebruiken', en: 'to reuse', defNl: 'opnieuw gebruiken in plaats van weggooien', defEn: 'to use again instead of throwing away' }
  ],
  questions: [
    { id: 'q1', type: 'mc', skill: 'letterlijk',
      q: { nl: 'Hoeveel grote problemen noemt de tekst?', en: 'How many big problems does the text name?' },
      options: [ { nl: 'Drie', en: 'Three' }, { nl: 'Twee', en: 'Two' }, { nl: 'Vier', en: 'Four' }, { nl: 'Zeven', en: 'Seven' } ],
      answer: 0,
      explain: { nl: 'Alinea 1: "Er zijn drie grote problemen." Daarna volgt elk probleem in een eigen alinea.',
                 en: 'Paragraph 1: "There are three big problems." Each one then gets its own paragraph.' } },
    { id: 'q2', type: 'mc', skill: 'gevolgtrekking',
      q: { nl: 'Waarom zouden astronauten op Mars onder de grond moeten wonen?',
           en: 'Why would astronauts on Mars have to live underground?' },
      options: [
        { nl: 'Omdat Mars geen magnetisch schild tegen straling heeft', en: 'Because Mars has no magnetic shield against radiation' },
        { nl: 'Omdat het er te donker is boven de grond', en: 'Because it is too dark above ground' },
        { nl: 'Omdat er geen bouwmateriaal is', en: 'Because there is no building material' },
        { nl: 'Omdat de zwaartekracht te laag is', en: 'Because gravity is too low' }
      ], answer: 0,
      explain: { nl: 'Zand en aarde houden de straling tegen, want het schild van Mars is verdwenen.',
                 en: 'Sand and soil block the radiation, because Mars’ shield has disappeared.' } },
    { id: 'q3', type: 'tf', skill: 'gevolgtrekking',
      q: { nl: 'Volgens de schrijver is het onderzoek naar Mars nu al nuttig voor de aarde.',
           en: 'According to the writer, Mars research is already useful for Earth.' },
      answer: true,
      explain: { nl: 'Zonnepanelen, waterfilters en droogte-gewassen komen uit dat onderzoek.',
                 en: 'Solar panels, water filters and drought crops come from that research.' } },
    { id: 'q4', type: 'match', skill: 'woordenschat',
      q: { nl: 'Koppel het woord aan de juiste betekenis.', en: 'Match the word to the right meaning.' },
      pairs: [
        { word: { nl: 'straling', en: 'radiation' }, meaning: { nl: 'onzichtbare deeltjes die schade doen', en: 'invisible particles that do damage' } },
        { word: { nl: 'zwaartekracht', en: 'gravity' }, meaning: { nl: 'kracht die alles naar beneden trekt', en: 'force that pulls everything down' } },
        { word: { nl: 'hergebruiken', en: 'reuse' }, meaning: { nl: 'nog een keer gebruiken', en: 'use one more time' } },
        { word: { nl: 'gunstig', en: 'favourable' }, meaning: { nl: 'precies goed uitkomend', en: 'working out just right' } }
      ],
      explain: { nl: 'Alle vier de woorden staan in de tekst.', en: 'All four words appear in the text.' } },
    { id: 'q5', type: 'mc', skill: 'hoofdgedachte',
      q: { nl: 'Wat wil de schrijver vooral duidelijk maken?', en: 'What does the writer mainly want to make clear?' },
      options: [
        { nl: 'Naar Mars gaan is heel moeilijk, maar het onderzoek levert nu al iets op',
          en: 'Going to Mars is very hard, but the research already pays off now' },
        { nl: 'We moeten zo snel mogelijk naar Mars verhuizen', en: 'We should move to Mars as fast as possible' },
        { nl: 'Films over Mars zijn spannender dan de echte ruimte', en: 'Films about Mars are more exciting than real space' },
        { nl: 'Astronauten moeten meer sporten', en: 'Astronauts should exercise more' }
      ], answer: 0,
      explain: { nl: 'Eerst de drie problemen, dan de voordelen voor de aarde. Dat samen is de hoofdgedachte.',
                 en: 'First the three problems, then the benefits for Earth. Together that is the main idea.' } }
  ]
}
]);

/* --- Niveau 4 en 5: langere teksten met Cito-achtige vragen --- */
addStories([
{
  id: 'ruimte-4', topic: 'ruimte', level: 4, emoji: '🛰️', scene: 'space',
  title: { nl: 'De vuilnisbelt boven ons hoofd', en: 'The rubbish dump above our heads' },
  text: {
    nl: [
      "Als je 's avonds omhoogkijkt, lijkt de ruimte leeg en rustig. Dat is hij niet. Op een paar honderd kilometer hoogte draaien duizenden satellieten om de aarde, en daartussen zwerven miljoenen stukjes afval: losgeraakte schroeven, verfschilfers, een verloren gereedschapstas en de resten van oude raketten.",
      "Dat afval zou onschuldig klinken als het stil zou liggen. Maar in een baan om de aarde vliegt alles ongeveer acht kilometer per seconde. Dat is vijfentwintig keer zo snel als een verkeersvliegtuig. Bij die snelheid slaat een moertje van één centimeter in als een handgranaat.",
      "In 2009 gebeurde waar experts al jaren bang voor waren. Een uitgeschakelde Russische satelliet botste boven Siberië frontaal op een werkende Amerikaanse satelliet. Binnen een seconde waren beide veranderd in een wolk van meer dan tweeduizend brokstukken. Die brokstukken draaien er nog altijd rond.",
      "En dat is precies het probleem. Elke botsing maakt nieuwe brokstukken, en elk brokstuk kan weer botsen. De Amerikaan Donald Kessler beschreef dit al in 1978: als het te druk wordt, kan één botsing een kettingreactie starten. Uiteindelijk zou een schil van puin de ruimte zo gevaarlijk maken dat er geen raket meer doorheen kan.",
      "Daarom wordt er nu opgeruimd. Europese ingenieurs testen een satelliet met vier armen, die een oud stuk raket vastgrijpt en er samen mee de dampkring in duikt, waar alles verbrandt. Anderen denken aan netten, harpoenen of een laser die puin vanaf de grond een zetje geeft, zodat het eerder naar beneden valt.",
      "Opruimen alleen is niet genoeg. Er gaan nu ook regels gelden: wie een satelliet lanceert, moet hem binnen vijf jaar na afloop weer naar beneden halen. Dat kost brandstof en dus geld, en niet elk land houdt zich eraan. De ruimte heeft namelijk geen politie.",
      "Toch is er hoop. Dezelfde mensen die de rommel hebben gemaakt, bouwen nu de opruimwagens. En anders dan bij een vuilnisbelt op aarde geldt hier: wie niets doet, raakt de hele ruimte kwijt."
    ],
    en: [
      "When you look up in the evening, space looks empty and calm. It is not. A few hundred kilometres up, thousands of satellites circle the earth, and among them drift millions of pieces of rubbish: loose screws, flakes of paint, a lost tool bag and the remains of old rockets.",
      "That rubbish would sound harmless if it lay still. But in orbit everything travels at about eight kilometres per second. That is twenty-five times faster than a passenger plane. At that speed a one-centimetre nut hits like a hand grenade.",
      "In 2009 the thing experts had feared for years actually happened. A dead Russian satellite crashed head-on into a working American one above Siberia. Within a second both had turned into a cloud of more than two thousand fragments. Those fragments are still going round up there.",
      "And that is exactly the problem. Every collision makes new fragments, and every fragment can collide again. The American Donald Kessler described this back in 1978: once it gets too crowded, one collision can start a chain reaction. In the end a shell of debris could make space so dangerous that no rocket could get through it.",
      "So the clean-up has begun. European engineers are testing a satellite with four arms that grabs an old piece of rocket and dives with it into the atmosphere, where everything burns up. Others are thinking of nets, harpoons or a laser that nudges debris from the ground so that it falls down sooner.",
      "Clearing up alone is not enough. There are rules now as well: anyone who launches a satellite has to bring it down within five years of the end of its life. That costs fuel and therefore money, and not every country obeys. Space, after all, has no police.",
      "Yet there is hope. The same people who made the mess are now building the rubbish trucks. And unlike a dump on earth, here the rule is: do nothing, and you lose the whole of space."
    ]
  },
  words: [
    { nl: 'baan om de aarde', en: 'orbit', defNl: 'de vaste ronde weg die een satelliet om de aarde aflegt', defEn: 'the fixed circular path a satellite follows around the earth' },
    { nl: 'kettingreactie', en: 'chain reaction', defNl: 'het ene gebeurt door het andere, steeds opnieuw en steeds sneller', defEn: 'one thing causes the next, again and again and faster and faster' },
    { nl: 'dampkring', en: 'atmosphere', defNl: 'de laag lucht om de aarde heen', defEn: 'the layer of air around the earth' }
  ],
  questions: [
    { id: 'q1', type: 'mc', skill: 'letterlijk',
      q: { nl: 'Hoe snel vliegt afval in een baan om de aarde?', en: 'How fast does rubbish travel in orbit?' },
      options: [
        { nl: 'Ongeveer acht kilometer per seconde', en: 'About eight kilometres per second' },
        { nl: 'Ongeveer acht kilometer per uur', en: 'About eight kilometres per hour' },
        { nl: 'Net zo snel als een verkeersvliegtuig', en: 'Just as fast as a passenger plane' },
        { nl: 'Het ligt bijna stil', en: 'It lies almost still' }
      ], answer: 0,
      explain: { nl: 'Alinea 2: "vliegt alles ongeveer acht kilometer per seconde", vijfentwintig keer zo snel als een vliegtuig.',
                 en: 'Paragraph 2: "everything travels at about eight kilometres per second", twenty-five times faster than a plane.' } },
    { id: 'q2', type: 'mc', skill: 'gevolgtrekking',
      q: { nl: 'Waarom is een moertje van één centimeter in de ruimte zo gevaarlijk?',
           en: 'Why is a one-centimetre nut so dangerous in space?' },
      options: [
        { nl: 'Door de enorme snelheid slaat het in als een handgranaat',
          en: 'Because of the huge speed it hits like a hand grenade' },
        { nl: 'Omdat het van ijzer is gemaakt', en: 'Because it is made of iron' },
        { nl: 'Omdat er geen lucht is in de ruimte', en: 'Because there is no air in space' },
        { nl: 'Omdat het heel zwaar is', en: 'Because it is very heavy' }
      ], answer: 0,
      explain: { nl: 'Niet het gewicht maar de snelheid maakt het gevaarlijk: dat staat letterlijk in alinea 2.',
                 en: 'Not the weight but the speed makes it dangerous, as paragraph 2 says.' } },
    { id: 'q3', type: 'mc', skill: 'verwijswoorden',
      q: { nl: '"En dat is precies het probleem." Waar verwijst "dat" naar?',
           en: '"And that is exactly the problem." What does "that" refer to?' },
      options: [
        { nl: 'Dat de brokstukken van de botsing van 2009 er nog steeds rondzweven',
          en: 'That the fragments from the 2009 crash are still up there' },
        { nl: 'Dat satellieten duur zijn', en: 'That satellites are expensive' },
        { nl: 'Dat de ruimte leeg lijkt als je omhoogkijkt', en: 'That space looks empty when you look up' },
        { nl: 'Dat Europese ingenieurs een satelliet testen', en: 'That European engineers are testing a satellite' }
      ], answer: 0,
      explain: { nl: 'De zin ervoor eindigt met: "Die brokstukken draaien er nog altijd rond." Daar verwijst "dat" naar.',
                 en: 'The sentence before ends: "Those fragments are still going round up there." That is what "that" points to.' } },
    { id: 'q4', type: 'gap', skill: 'woordenschat',
      q: { nl: 'Een kettingreactie is ___.', en: 'A chain reaction is ___.' },
      options: [
        { nl: 'als het ene het volgende veroorzaakt, steeds opnieuw', en: 'when one thing causes the next, again and again' },
        { nl: 'een botsing tussen twee satellieten', en: 'a crash between two satellites' },
        { nl: 'een ketting die om de aarde ligt', en: 'a chain lying around the earth' },
        { nl: 'het verbranden van afval in de dampkring', en: 'rubbish burning up in the atmosphere' }
      ], answer: 0,
      explain: { nl: 'Kessler bedoelde: elke botsing maakt brokstukken, die weer botsen, die weer brokstukken maken.',
                 en: 'Kessler meant: every crash makes fragments, which crash again and make more fragments.' } },
    { id: 'q5', type: 'multi', skill: 'letterlijk',
      q: { nl: 'Welke drie manieren om puin op te ruimen noemt de tekst? Kies er 3.',
           en: 'Which three ways of clearing up debris does the text name? Pick 3.' },
      options: [
        { nl: 'Een satelliet met armen die puin vastgrijpt', en: 'A satellite with arms that grabs debris' },
        { nl: 'Netten en harpoenen', en: 'Nets and harpoons' },
        { nl: 'Een laser die puin vanaf de grond een zetje geeft', en: 'A laser that nudges debris from the ground' },
        { nl: 'Een grote stofzuiger aan een ruimtestation', en: 'A big vacuum cleaner on a space station' }
      ], answer: [0, 1, 2],
      explain: { nl: 'Alinea 5 noemt de grijparmen, de netten en harpoenen en de laser. Een stofzuiger komt in de tekst niet voor.',
                 en: 'Paragraph 5 names the grabbing arms, the nets and harpoons and the laser. No vacuum cleaner appears in the text.' } },
    { id: 'q6', type: 'order', skill: 'volgorde',
      q: { nl: 'Zet de gebeurtenissen uit de tekst in de goede volgorde.',
           en: 'Put the events from the text in the right order.' },
      items: [
        { nl: 'Kessler waarschuwt in 1978 voor een kettingreactie.', en: 'In 1978 Kessler warns about a chain reaction.' },
        { nl: 'In 2009 botsen twee satellieten boven Siberië.', en: 'In 2009 two satellites collide above Siberia.' },
        { nl: 'Er ontstaat een wolk van meer dan tweeduizend brokstukken.', en: 'A cloud of more than two thousand fragments appears.' },
        { nl: 'Ingenieurs beginnen opruimsatellieten te testen.', en: 'Engineers start testing clean-up satellites.' }
      ], answer: [0, 1, 2, 3],
      explain: { nl: 'De waarschuwing kwam in 1978, de botsing in 2009, daarna de brokstukken en pas daarna het opruimen.',
                 en: 'The warning came in 1978, the crash in 2009, then the fragments and only then the clean-up.' } },
    { id: 'q7', type: 'mc', skill: 'structuur',
      q: { nl: 'Waarom staat alinea 6 ("Opruimen alleen is niet genoeg") na alinea 5 over de opruimtechnieken?',
           en: 'Why does paragraph 6 ("Clearing up alone is not enough") come after paragraph 5 about clean-up techniques?' },
      options: [
        { nl: 'Omdat de schrijver eerst de oplossing laat zien en dan waarom die nog niet genoeg is',
          en: 'Because the writer first shows the solution and then why it is not enough yet' },
        { nl: 'Omdat alinea 6 het verhaal van 2009 herhaalt', en: 'Because paragraph 6 repeats the story of 2009' },
        { nl: 'Omdat de alinea’s per jaartal op volgorde staan', en: 'Because the paragraphs are ordered by year' },
        { nl: 'Omdat de schrijver een grap wil maken', en: 'Because the writer wants to make a joke' }
      ], answer: 0,
      explain: { nl: 'De tekst bouwt op: probleem, gevolg, oplossing, en dan de beperking van die oplossing ("niet genoeg", "geen politie").',
                 en: 'The text builds up: problem, consequence, solution, and then the limits of that solution.' } },
    { id: 'q8', type: 'mc', skill: 'hoofdgedachte',
      q: { nl: 'Wat is de hoofdgedachte van de tekst?', en: 'What is the main idea of the text?' },
      options: [
        { nl: 'Ruimteafval wordt zo gevaarlijk dat we het moeten opruimen én nieuwe rommel moeten voorkomen',
          en: 'Space junk is getting so dangerous that we must clear it up and stop making more' },
        { nl: 'In 2009 botsten twee satellieten boven Siberië', en: 'In 2009 two satellites collided above Siberia' },
        { nl: 'Satellieten vliegen sneller dan vliegtuigen', en: 'Satellites fly faster than planes' },
        { nl: 'Donald Kessler was een slimme Amerikaan', en: 'Donald Kessler was a clever American' }
      ], answer: 0,
      explain: { nl: 'Alle alinea’s samen gaan over het probleem én over wat eraan gedaan wordt. De rest zijn losse details.',
                 en: 'All the paragraphs together are about the problem and what is being done. The rest are single details.' } }
  ]
},

{
  id: 'ruimte-5', topic: 'ruimte', level: 5, emoji: '🌕', scene: 'space',
  title: { nl: 'Van wie is de maan?', en: 'Who owns the moon?' },
  text: {
    nl: [
      "In 1967 tekenden landen een verdrag over de ruimte. De afspraak was kort en duidelijk: geen enkel land mag de maan of een planeet zijn eigendom noemen. De ruimte is van iedereen, stond erin, en moet gebruikt worden ten voordele van alle mensen.",
      "Toen dat verdrag werd ondertekend, was er nog geen mens op de maan geweest. Niemand dacht aan zakelijke plannen. Dat is nu anders. Op de bodem van donkere kraters bij de zuidpool ligt bevroren water. Uit water kun je drinken maken, maar ook zuurstof en raketbrandstof. Wie daar als eerste een installatie neerzet, hoeft die brandstof niet meer duur vanaf de aarde omhoog te vliegen.",
      "Bovendien zit er in het maanstof helium-3, een stof die op aarde bijna niet voorkomt. Sommige onderzoekers denken dat je er ooit schone energie mee kunt maken. Anderen vinden dat een luchtkasteel: de techniek daarvoor bestaat nog niet eens.",
      "Het verdrag van 1967 verbiedt landen om de maan te bezitten. Maar over bedrijven zegt het bijna niets. Daar maken sommige landen gebruik van. De Verenigde Staten en Luxemburg hebben wetten gemaakt waarin staat dat een bedrijf mag houden wat het in de ruimte opgraaft. Volgens hen is dat hetzelfde als vissen in een zee die van niemand is.",
      "Andere landen zijn boos. Zij zeggen: een zee kun je niet leegvissen zonder afspraken, en met de maan is het net zo. Als een handvol rijke landen daar het beste plekje inneemt, blijft er voor de rest weinig over. En juist die zuidpoolkraters met ijs zijn er maar een paar.",
      "Er is nog een reden voor haast. Een landing wervelt maanstof op dat, doordat er geen lucht is, kilometers ver wegschiet. Dat stof is scherp als glas. Het kan de spiegels van telescopen en de panelen van andere bases beschadigen. Wie het eerst bouwt, bepaalt dus ook een beetje wat de buren nog kunnen doen.",
      "Intussen praten diplomaten verder. Ze proberen regels te maken voordat de eerste graafmachine landt, en niet erna. Want dat is het lastige aan de ruimte: als je te laat bent met afspreken, zijn de feiten al geschapen."
    ],
    en: [
      "In 1967 countries signed a treaty about space. The agreement was short and clear: no country may call the moon or a planet its property. Space belongs to everyone, it said, and must be used for the benefit of all people.",
      "When the treaty was signed, no human had yet walked on the moon. Nobody was thinking about business plans. That is different now. On the floor of dark craters near the south pole there is frozen water. From water you can make drinking water, but also oxygen and rocket fuel. Whoever sets up a plant there first no longer has to fly that fuel up from earth at great cost.",
      "On top of that, moon dust contains helium-3, a substance that is almost absent on earth. Some researchers think it could one day be used to make clean energy. Others call that a castle in the air: the technology for it does not even exist yet.",
      "The 1967 treaty forbids countries to own the moon. But about companies it says almost nothing. Some countries are making use of that. The United States and Luxembourg have passed laws saying that a company may keep what it digs up in space. According to them that is the same as fishing in a sea that belongs to nobody.",
      "Other countries are angry. They say: you cannot empty a sea of fish without agreements, and the moon is just the same. If a handful of rich countries take the best spot, little is left for the rest. And there are only a few of those south pole craters with ice.",
      "There is another reason to hurry. A landing whips up moon dust which, because there is no air, shoots kilometres away. That dust is as sharp as glass. It can damage the mirrors of telescopes and the panels of other bases. So whoever builds first also decides a little of what the neighbours can still do.",
      "Meanwhile the diplomats keep talking. They are trying to make rules before the first digging machine lands, and not afterwards. Because that is the tricky thing about space: if you agree too late, the facts are already on the ground."
    ]
  },
  words: [
    { nl: 'verdrag', en: 'treaty', defNl: 'een afspraak op papier tussen landen', defEn: 'a written agreement between countries' },
    { nl: 'luchtkasteel', en: 'castle in the air', defNl: 'een mooi plan dat waarschijnlijk nooit uitkomt', defEn: 'a fine plan that will probably never happen' },
    { nl: 'diplomaten', en: 'diplomats', defNl: 'mensen die namens hun land met andere landen onderhandelen', defEn: 'people who negotiate with other countries on behalf of their own' }
  ],
  questions: [
    { id: 'q1', type: 'mc', skill: 'letterlijk',
      q: { nl: 'Wat spraken landen in 1967 af over de maan?', en: 'What did countries agree about the moon in 1967?' },
      options: [
        { nl: 'Geen enkel land mag de maan zijn eigendom noemen', en: 'No country may call the moon its property' },
        { nl: 'Alleen de Verenigde Staten mogen er landen', en: 'Only the United States may land there' },
        { nl: 'Bedrijven mogen er niets opgraven', en: 'Companies may not dig anything up there' },
        { nl: 'De maan wordt in stukken verdeeld', en: 'The moon is divided into pieces' }
      ], answer: 0,
      explain: { nl: 'Alinea 1 zegt het letterlijk: geen land mag de maan of een planeet zijn eigendom noemen.',
                 en: 'Paragraph 1 says it literally: no country may call the moon or a planet its property.' } },
    { id: 'q2', type: 'mc', skill: 'gevolgtrekking',
      q: { nl: 'Waarom is bevroren water op de maan zo waardevol?',
           en: 'Why is frozen water on the moon so valuable?' },
      options: [
        { nl: 'Je kunt er drinken, zuurstof én raketbrandstof van maken', en: 'You can make drinking water, oxygen and rocket fuel from it' },
        { nl: 'Het is mooi om naar te kijken', en: 'It is beautiful to look at' },
        { nl: 'Het bevat helium-3', en: 'It contains helium-3' },
        { nl: 'Het beschermt tegen scherp maanstof', en: 'It protects against sharp moon dust' }
      ], answer: 0,
      explain: { nl: 'Alinea 2 noemt alle drie. Helium-3 zit in het stof, niet in het ijs.',
                 en: 'Paragraph 2 names all three. Helium-3 is in the dust, not in the ice.' } },
    { id: 'q3', type: 'sort', skill: 'feitmening',
      q: { nl: 'Feit of mening? Zet elke zin in de goede groep.',
           en: 'Fact or opinion? Put every sentence in the right group.' },
      bins: [{ nl: 'Feit', en: 'Fact' }, { nl: 'Mening', en: 'Opinion' }],
      items: [
        { nl: 'In 1967 tekenden landen een verdrag over de ruimte.',
          en: 'In 1967 countries signed a treaty about space.', bin: 0 },
        { nl: 'Helium-3 op de maan is een luchtkasteel.', en: 'Helium-3 on the moon is a castle in the air.', bin: 1 },
        { nl: 'Er ligt bevroren water in kraters bij de zuidpool.',
          en: 'There is frozen water in craters near the south pole.', bin: 0 },
        { nl: 'Rijke landen mogen het beste plekje niet inpikken.',
          en: 'Rich countries should not grab the best spot.', bin: 1 }
      ],
      explain: { nl: 'Jaartallen en metingen zijn feiten. "Luchtkasteel" en "mogen niet" zijn oordelen van mensen: dat zijn meningen.',
                 en: 'Dates and measurements are facts. "Castle in the air" and "should not" are judgements: opinions.' } },
    { id: 'q4', type: 'mc', skill: 'verwijswoorden',
      q: { nl: '"Daar maken sommige landen gebruik van." Waarvan maken die landen gebruik?',
           en: '"Some countries are making use of that." Of what?' },
      options: [
        { nl: 'Dat het verdrag bijna niets zegt over bedrijven',
          en: 'That the treaty says almost nothing about companies' },
        { nl: 'Dat er ijs ligt in de zuidpoolkraters', en: 'That there is ice in the south pole craters' },
        { nl: 'Dat maanstof scherp is als glas', en: 'That moon dust is as sharp as glass' },
        { nl: 'Dat diplomaten nog aan het praten zijn', en: 'That diplomats are still talking' }
      ], answer: 0,
      explain: { nl: 'De zin ervoor is: "Maar over bedrijven zegt het bijna niets." Dat gat gebruiken die landen.',
                 en: 'The sentence before is: "But about companies it says almost nothing." That gap is what they use.' } },
    { id: 'q5', type: 'mc', skill: 'doel',
      q: { nl: 'Wat is het doel van de schrijver met deze tekst?',
           en: 'What is the writer’s purpose with this text?' },
      options: [
        { nl: 'Uitleggen waarom er ruzie dreigt over de maan, en beide kanten laten horen',
          en: 'Explain why a quarrel over the moon is brewing, and let both sides be heard' },
        { nl: 'Reclame maken voor een reis naar de maan', en: 'Advertise a trip to the moon' },
        { nl: 'Bewijzen dat het verdrag van 1967 nutteloos was', en: 'Prove that the 1967 treaty was useless' },
        { nl: 'Vertellen hoe je raketbrandstof maakt', en: 'Explain how to make rocket fuel' }
      ], answer: 0,
      explain: { nl: 'De schrijver geeft eerst de landen die wetten maken het woord, dan de boze landen, en eindigt bij de diplomaten. Dat is uitleggen, niet overtuigen.',
                 en: 'The writer gives a voice to the countries making laws, then to the angry countries, and ends with the diplomats. That is explaining, not persuading.' } },
    { id: 'q6', type: 'mc', skill: 'structuur',
      q: { nl: 'Met welke vergelijking maken de voorstanders hun standpunt duidelijk?',
           en: 'Which comparison do the supporters use to make their point?' },
      options: [
        { nl: 'Met vissen in een zee die van niemand is', en: 'With fishing in a sea that belongs to nobody' },
        { nl: 'Met een vuilnisbelt', en: 'With a rubbish dump' },
        { nl: 'Met een kasteel in de lucht', en: 'With a castle in the air' },
        { nl: 'Met glas dat kapotgaat', en: 'With glass that breaks' }
      ], answer: 0,
      explain: { nl: 'Alinea 4: opgraven in de ruimte zou hetzelfde zijn als vissen in een zee die van niemand is. In alinea 5 draaien de tegenstanders die vergelijking om.',
                 en: 'Paragraph 4 uses the fishing comparison; in paragraph 5 the opponents turn it round.' } },
    { id: 'q7', type: 'multi', skill: 'gevolgtrekking',
      q: { nl: 'Welke twee redenen noemt de tekst waarom haast geboden is? Kies er 2.',
           en: 'Which two reasons does the text give for hurrying? Pick 2.' },
      options: [
        { nl: 'Er zijn maar een paar kraters met ijs', en: 'There are only a few craters with ice' },
        { nl: 'Wie het eerst bouwt, beperkt met opgewerveld stof wat de buren nog kunnen',
          en: 'Whoever builds first limits what the neighbours can do, because of the dust thrown up' },
        { nl: 'Het verdrag van 1967 loopt binnenkort af', en: 'The 1967 treaty expires soon' },
        { nl: 'Helium-3 raakt op de maan bijna op', en: 'Helium-3 is almost running out on the moon' }
      ], answer: [0, 1],
      explain: { nl: 'Alinea 5 noemt de schaarse ijskraters, alinea 6 het scherpe stof. Over aflopen of opraken staat niets in de tekst.',
                 en: 'Paragraph 5 names the scarce ice craters, paragraph 6 the sharp dust. Nothing in the text says the treaty expires or the helium runs out.' } },
    { id: 'q8', type: 'mc', skill: 'samenvatten',
      q: { nl: 'Welke samenvatting past het beste bij de hele tekst?',
           en: 'Which summary fits the whole text best?' },
      options: [
        { nl: 'Een oud verdrag verbiedt landen de maan te bezitten, maar nu er iets te halen valt zoeken bedrijven en landen de mazen op, en dat moet met nieuwe regels opgelost worden.',
          en: 'An old treaty stops countries owning the moon, but now that there is something to gain, companies and countries look for loopholes, which new rules must solve.' },
        { nl: 'Op de maan ligt ijs in kraters bij de zuidpool.', en: 'There is ice in craters near the moon’s south pole.' },
        { nl: 'Maanstof is scherp als glas en beschadigt telescopen.',
          en: 'Moon dust is as sharp as glass and damages telescopes.' },
        { nl: 'Luxemburg is een klein land met bijzondere wetten.',
          en: 'Luxembourg is a small country with unusual laws.' }
      ], answer: 0,
      explain: { nl: 'De kern van alle alinea’s samen: oud verdrag, nieuwe waarde, mazen in de regels, ruzie en nieuwe afspraken.',
                 en: 'The core of all the paragraphs: old treaty, new value, loopholes, quarrel and new agreements.' } },
    { id: 'q9', type: 'tf', skill: 'letterlijk',
      q: { nl: 'Volgens de tekst was er in 1967 al een mens op de maan geweest.',
           en: 'According to the text, a human had already walked on the moon in 1967.' },
      answer: false,
      explain: { nl: 'Alinea 2 begint juist met: "Toen dat verdrag werd ondertekend, was er nog geen mens op de maan geweest."',
                 en: 'Paragraph 2 begins: "When the treaty was signed, no human had yet walked on the moon."' } }
  ]
}
]);
