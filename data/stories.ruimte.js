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

/* --- Nieuwe verhalen: niveau 1 t/m 5 --- */
addStories([
{
  id: 'ruimte-6', topic: 'ruimte', level: 1, emoji: '🍽️', scene: 'space',
  title: { nl: 'Eten uit een zakje', en: 'Food from a pouch' },
  text: {
    nl: [
      "Op het ruimtestation kun je geen bord met eten op tafel zetten. Zodra je het bord loslaat, zweeft alles weg. Astronauten eten daarom heel anders dan wij thuis.",
      "Veel van hun eten is gevriesdroogd. Dat betekent dat bijna al het water eruit is gehaald voordat het de ruimte in ging. Wil een astronaut soep of aardappelpuree eten, dan spuit hij er met een spuitje warm water bij. Na een paar minuten roeren is het weer een gewone maaltijd.",
      "Kruimels zijn verboden. Een kruimel brood zou door de lucht zweven en in iemands oog, neus of in een gevoelig apparaat terecht kunnen komen. Daarom eten astronauten geen gewoon brood, maar zachte tortillas die bijna niet kruimelen.",
      "Drinken doe je ook anders. Water in een open beker zou meteen in duizenden zwevende druppeltjes uiteenvallen. Daarom drinkt een astronaut uit een plastic zakje met een rietje. Een klein klepje houdt de vloeistof binnen tot je zuigt.",
      "Toch is niet alles anders. Astronauten mogen zelf kiezen wat er in hun zakjes zit, van macaroni tot chocolade. Veel astronauten vragen om extra pittig eten, want in de ruimte proef je minder sterk dan op aarde."
    ],
    en: [
      "On the space station you cannot just put a plate of food on the table. As soon as you let go of the plate, everything floats away. That is why astronauts eat very differently from us at home.",
      "Much of their food is freeze-dried. That means nearly all the water has been removed from it before it went into space. If an astronaut wants soup or mashed potato, he squirts warm water into the pouch with a syringe. After stirring for a few minutes it is a normal meal again.",
      "Crumbs are forbidden. A crumb of bread would float through the air and could end up in someone's eye, nose, or in a sensitive machine. That is why astronauts do not eat ordinary bread, but soft tortillas that hardly crumble at all.",
      "Drinking works differently too. Water in an open cup would instantly break apart into thousands of floating droplets. That is why an astronaut drinks from a plastic pouch with a straw. A small valve keeps the liquid inside until you suck.",
      "Still, not everything is different. Astronauts get to choose what goes in their pouches, from macaroni to chocolate. Many astronauts ask for extra spicy food, because in space you taste things less strongly than on Earth."
    ]
  },
  words: [
    { nl: 'gevriesdroogd', en: 'freeze-dried', defNl: 'eten waar bijna al het water uit is gehaald', defEn: 'food that has had nearly all its water removed' },
    { nl: 'kruimels', en: 'crumbs', defNl: 'hele kleine stukjes die van brood afvallen', defEn: 'tiny bits that fall off bread' },
    { nl: 'rietje', en: 'straw', defNl: 'een dun buisje waarmee je drinkt', defEn: 'a thin tube you drink through' }
  ],
  questions: [
    { id: 'q1', type: 'mc', skill: 'letterlijk',
      q: { nl: 'Wat doet een astronaut met gevriesdroogde soep voordat hij die eet?',
           en: 'What does an astronaut do with freeze-dried soup before eating it?' },
      options: [ { nl: 'Er warm water bij spuiten', en: 'Squirt warm water into it' },
                 { nl: 'Het in de vriezer stoppen', en: 'Put it in the freezer' },
                 { nl: 'Het in de oven opwarmen', en: 'Heat it in the oven' },
                 { nl: 'Er koud water bij spuiten', en: 'Squirt cold water into it' } ],
      answer: 0,
      explain: { nl: 'Alinea 2: hij spuit er met een spuitje warm water bij en roert dan een paar minuten.',
                 en: 'Paragraph 2: he squirts warm water into it with a syringe and then stirs for a few minutes.' } },
    { id: 'q2', type: 'tf', skill: 'letterlijk',
      q: { nl: 'Astronauten eten gewoon brood met kruimels.', en: 'Astronauts eat ordinary bread with crumbs.' },
      answer: false,
      explain: { nl: 'Alinea 3 zegt het tegenovergestelde: ze eten zachte tortillas die bijna niet kruimelen.',
                 en: 'Paragraph 3 says the opposite: they eat soft tortillas that hardly crumble at all.' } },
    { id: 'q3', type: 'gap', skill: 'woordenschat',
      q: { nl: 'Eten waar bijna al het water uit is gehaald, noem je ___.',
           en: 'Food that has had nearly all its water removed is called ___.' },
      options: [ { nl: 'gevriesdroogd', en: 'freeze-dried' }, { nl: 'vers', en: 'fresh' },
                 { nl: 'rot', en: 'rotten' }, { nl: 'ingevroren met water', en: 'frozen with water' } ],
      answer: 0,
      explain: { nl: 'Alinea 2 legt het woord precies zo uit.', en: 'Paragraph 2 explains the word exactly this way.' } },
    { id: 'q4', type: 'order', skill: 'volgorde',
      q: { nl: 'Zet de stappen van een maaltijd soep op een rij.', en: 'Put the steps of a soup meal in order.' },
      items: [
        { nl: 'De astronaut pakt een zakje gevriesdroogde soep.', en: 'The astronaut takes a pouch of freeze-dried soup.' },
        { nl: 'Hij spuit er warm water bij.', en: 'He squirts warm water into it.' },
        { nl: 'Hij roert een paar minuten.', en: 'He stirs for a few minutes.' },
        { nl: 'Hij eet de warme soep.', en: 'He eats the warm soup.' }
      ], answer: [0, 1, 2, 3],
      explain: { nl: 'Eerst het zakje, dan water erbij, dan roeren, en dan pas eten.',
                 en: 'First the pouch, then add water, then stir, and only then eat.' } },
    { id: 'q5', type: 'mc', skill: 'hoofdgedachte',
      q: { nl: 'Waar gaat deze tekst vooral over?', en: 'What is this text mainly about?' },
      options: [
        { nl: 'Hoe astronauten in de ruimte eten en drinken', en: 'How astronauts eat and drink in space' },
        { nl: 'Hoe je tortillas bakt', en: 'How to bake tortillas' },
        { nl: 'Waarom brood lekker is', en: 'Why bread tastes good' },
        { nl: 'Hoe astronauten slapen', en: 'How astronauts sleep' }
      ], answer: 0,
      explain: { nl: 'Elke alinea gaat over eten of drinken in de ruimte: gevriesdroogd voedsel, kruimels en het zakje met rietje.',
                 en: 'Every paragraph is about eating or drinking in space: freeze-dried food, crumbs and the pouch with a straw.' } }
  ]
},

{
  id: 'ruimte-7', topic: 'ruimte', level: 2, emoji: '🔭', scene: 'space',
  title: { nl: 'De telescoop die naar het begin kijkt', en: 'The telescope that looks at the beginning' },
  text: {
    nl: [
      "In 2021 ging de grootste ruimtetelescoop ooit de lucht in: de James Webb Space Telescope, vernoemd naar een voormalig directeur van de Amerikaanse ruimtevaartorganisatie NASA. Zijn taak is bijzonder: hij moet naar het allereerste begin van het heelal kijken.",
      "Dat klinkt onmogelijk, maar het kan dankzij licht. Licht reist snel, maar niet oneindig snel. Het licht van een sterrenstelsel dat miljarden lichtjaren ver weg staat, is miljarden jaren onderweg geweest voordat het de telescoop bereikt. Je kijkt dus niet naar hoe die plek er nu uitziet, maar naar hoe hij er toen uitzag, vlak na het ontstaan van het heelal.",
      "De spiegel van de telescoop is achttien meter breed en gemaakt van goudkleurig glas. Zo'n grote spiegel past niet in een raket. Daarom werd hij opgevouwen als een stuk origami, met scharnieren op precies de goede plekken. Pas nadat de telescoop in de ruimte aankwam, klapte hij langzaam open.",
      "Webb kijkt niet naar gewoon licht, maar naar infraroodlicht, een soort warmtestraling die je oog niet kan zien. Dat licht komt makkelijker door wolken stof heen, en juist heel oud sterrenlicht is vaak infrarood geworden tijdens de lange reis. Om die zwakke straling goed te vangen, moet de telescoop ijskoud blijven. Daarom staat hij anderhalf miljoen kilometer van de aarde, ver weg van de warmte van onze planeet.",
      "Sindsdien heeft Webb duizelingwekkende foto's gestuurd: pasgeboren sterren in wolken van gas, en zelfs de lucht rond planeten die om andere sterren draaien. Wetenschappers zoeken daar naar aanwijzingen voor water of leven. Voor het eerst kunnen we echt terugkijken naar het begin van alles."
    ],
    en: [
      "In 2021 the largest space telescope ever launched: the James Webb Space Telescope, named after a former director of the American space agency NASA. Its task is special: it has to look at the very beginning of the universe.",
      "That sounds impossible, but it works thanks to light. Light travels fast, but not infinitely fast. Light from a galaxy billions of light years away has been travelling for billions of years before it reaches the telescope. So you are not looking at what that place looks like now, but at what it looked like back then, just after the universe began.",
      "The telescope's mirror is eighteen metres wide and made of gold-coloured glass. A mirror that big does not fit in a rocket. So it was folded up like a piece of origami, with hinges in exactly the right spots. Only after the telescope arrived in space did it slowly unfold.",
      "Webb does not look at ordinary light, but at infrared light, a kind of heat radiation your eye cannot see. That light passes more easily through clouds of dust, and very old starlight has often turned infrared during its long journey. To catch that faint radiation properly, the telescope has to stay freezing cold. That is why it sits one and a half million kilometres from Earth, far from the warmth of our planet.",
      "Since then Webb has sent back breathtaking photos: newborn stars inside clouds of gas, and even the air around planets orbiting other stars. Scientists are searching there for clues of water or life. For the first time we can really look back at the beginning of everything."
    ]
  },
  words: [
    { nl: 'sterrenstelsel', en: 'galaxy', defNl: 'een enorme groep van miljarden sterren bij elkaar', defEn: 'a huge group of billions of stars together' },
    { nl: 'infraroodlicht', en: 'infrared light', defNl: 'een soort warmtestraling die je oog niet kan zien', defEn: 'a kind of heat radiation your eye cannot see' },
    { nl: 'scharnieren', en: 'hinges', defNl: 'de draaipunten waarmee je iets kunt open- en dichtvouwen', defEn: 'the pivot points that let you fold something open and shut' }
  ],
  questions: [
    { id: 'q1', type: 'mc', skill: 'letterlijk',
      q: { nl: 'Hoe breed is de spiegel van de James Webb telescoop ongeveer?',
           en: 'About how wide is the mirror of the James Webb telescope?' },
      options: [ { nl: 'Achttien meter', en: 'Eighteen metres' }, { nl: 'Twee meter', en: 'Two metres' },
                 { nl: 'Honderd meter', en: 'A hundred metres' }, { nl: 'Vijf meter', en: 'Five metres' } ],
      answer: 0,
      explain: { nl: 'Alinea 3 zegt dat de spiegel achttien meter breed is.',
                 en: 'Paragraph 3 says the mirror is eighteen metres wide.' } },
    { id: 'q2', type: 'mc', skill: 'gevolgtrekking',
      q: { nl: 'Waarom moest de spiegel worden opgevouwen?', en: 'Why did the mirror have to be folded up?' },
      options: [
        { nl: 'Omdat hij anders niet in de raket paste', en: 'Because otherwise it would not fit in the rocket' },
        { nl: 'Omdat hij dan lichter werd', en: 'Because that made it lighter' },
        { nl: 'Omdat vouwen hem sterker maakte', en: 'Because folding made it stronger' },
        { nl: 'Omdat NASA dat mooier vond', en: 'Because NASA thought that looked nicer' }
      ], answer: 0,
      explain: { nl: 'Alinea 3 legt uit dat zo een grote spiegel niet in een raket past.',
                 en: 'Paragraph 3 explains that a mirror that big does not fit in a rocket.' } },
    { id: 'q3', type: 'gap', skill: 'woordenschat',
      q: { nl: 'Warmtestraling die je oog niet kan zien, heet ___.', en: 'Heat radiation your eye cannot see is called ___.' },
      options: [ { nl: 'infraroodlicht', en: 'infrared light' }, { nl: 'sterrenlicht', en: 'starlight' },
                 { nl: 'zonlicht', en: 'sunlight' }, { nl: 'roentgenstraling', en: 'X-ray radiation' } ],
      answer: 0,
      explain: { nl: 'Alinea 4 geeft precies deze uitleg bij het woord infraroodlicht.',
                 en: 'Paragraph 4 gives exactly this explanation for the word infrared light.' } },
    { id: 'q4', type: 'tf', skill: 'letterlijk',
      q: { nl: 'Als je naar heel ver sterrenlicht kijkt, zie je hoe die plek er nu uitziet.',
           en: 'If you look at starlight from very far away, you see what that place looks like now.' },
      answer: false,
      explain: { nl: 'Alinea 2 zegt het tegenovergestelde: je ziet hoe de plek er toen uitzag, niet hoe hij er nu uitziet.',
                 en: 'Paragraph 2 says the opposite: you see what the place looked like back then, not what it looks like now.' } },
    { id: 'q5', type: 'match', skill: 'woordenschat',
      q: { nl: 'Koppel het woord aan de juiste betekenis.', en: 'Match the word to the right meaning.' },
      pairs: [
        { word: { nl: 'sterrenstelsel', en: 'galaxy' }, meaning: { nl: 'een enorme groep sterren bij elkaar', en: 'a huge group of stars together' } },
        { word: { nl: 'infraroodlicht', en: 'infrared light' }, meaning: { nl: 'warmtestraling die je oog niet kan zien', en: 'heat radiation your eye cannot see' } },
        { word: { nl: 'scharnieren', en: 'hinges' }, meaning: { nl: 'draaipunten om iets open te vouwen', en: 'pivot points for folding something open' } },
        { word: { nl: 'lichtjaar', en: 'light year' }, meaning: { nl: 'de afstand die licht in een jaar aflegt', en: 'the distance light travels in a year' } }
      ],
      explain: { nl: 'Alle vier de woorden komen uit de tekst.', en: 'All four words come from the text.' } },
    { id: 'q6', type: 'mc', skill: 'hoofdgedachte',
      q: { nl: 'Wat is de belangrijkste boodschap van deze tekst?', en: 'What is the main message of this text?' },
      options: [
        { nl: 'Dankzij zijn spiegel en infraroodlicht kan Webb terugkijken naar het begin van het heelal',
          en: 'Thanks to its mirror and infrared light, Webb can look back at the beginning of the universe' },
        { nl: 'De telescoop maakt vooral mooie foto’s van planeten', en: 'The telescope mainly takes nice photos of planets' },
        { nl: 'NASA heeft de duurste telescoop ooit gebouwd', en: 'NASA built the most expensive telescope ever' },
        { nl: 'Licht reist oneindig snel', en: 'Light travels infinitely fast' }
      ], answer: 0,
      explain: { nl: 'Elke alinea draagt bij aan hetzelfde idee: de spiegel en het infraroodlicht maken het mogelijk om heel ver terug te kijken in de tijd.',
                 en: 'Every paragraph adds to the same idea: the mirror and the infrared light make it possible to look far back in time.' } }
  ]
},

{
  id: 'ruimte-8', topic: 'ruimte', level: 3, emoji: '🌠', scene: 'space',
  title: { nl: 'Waarom zweef je in het ruimtestation?', en: 'Why do you float on the space station?' },
  text: {
    nl: [
      "Veel mensen denken dat astronauten zweven omdat er in de ruimte geen zwaartekracht is. Dat is een hardnekkig misverstand. Op de hoogte van het ruimtestation, ongeveer vierhonderd kilometer boven de aarde, is de zwaartekracht nog bijna negentig procent zo sterk als hier beneden. Zonder zwaartekracht zou het station meteen de diepe ruimte in vliegen. Waarom zweven de astronauten dan toch?",
      "Het antwoord zit in vallen. Schiet je een kanonskogel hard genoeg horizontaal weg, dan valt hij weliswaar naar de aarde, maar de aarde kromt onder hem net zo snel weg als hij valt. De kogel blijft dus vallen, zonder ooit de grond te raken. Zo een eeuwige val om de aarde heen noemen we een baan om de aarde.",
      "Het ruimtestation doet niets anders. Het valt voortdurend naar de aarde toe, maar beweegt tegelijk zijwaarts met ongeveer achtentwintigduizend kilometer per uur. Die snelheid is precies genoeg om steeds naast de aarde te blijven vallen in plaats van erop.",
      "De astronauten vallen gewoon mee, met dezelfde snelheid als het station zelf. Daarom drukken ze nergens tegenaan en lijkt het of ze zweven. Het is te vergelijken met een lift waarvan de kabel doorknipt: iedereen erin valt even snel, dus voor de inzittenden voelt het alsof ze gewichtloos zijn.",
      "Daarom spreken wetenschappers liever van gewichtloosheid dan van geen zwaartekracht. De zwaartekracht is er wel degelijk; alleen valt alles er samen mee, waardoor niemand er iets van voelt. Op aarde merk je zwaartekracht juist wel, want de grond duwt terug tegen je voeten, en dat voelt als gewicht.",
      "Astronauten oefenen dit gevoel al op aarde, in een vliegtuig met de bijnaam de kotsende komeet. Het maakt grote bogen door de lucht, net als de kanonskogel. Tijdens zo een boog valt iedereen aan boord ongeveer dertig seconden vrij, precies zoals op het ruimtestation, voordat het toestel weer omhoog trekt."
    ],
    en: [
      "Many people think astronauts float because there is no gravity in space. That is a stubborn misconception. At the height of the space station, about four hundred kilometres above Earth, gravity is still almost ninety percent as strong as it is down here. Without gravity the station would fly straight off into deep space. So why do the astronauts float after all?",
      "The answer lies in falling. If you fire a cannonball hard enough horizontally, it does fall towards Earth, but Earth curves away beneath it just as fast as it falls. So the ball keeps falling without ever hitting the ground. That endless fall around the Earth is what we call an orbit.",
      "The space station does exactly the same. It keeps falling towards Earth, but at the same time moves sideways at about twenty-eight thousand kilometres an hour. That speed is exactly enough to keep missing the Earth instead of hitting it.",
      "The astronauts simply fall along with it, at the same speed as the station itself. That is why they press against nothing and seem to float. It is like a lift whose cable has been cut: everyone inside falls at the same rate, so to the people in it, it feels as if they are weightless.",
      "That is why scientists prefer to speak of weightlessness rather than no gravity. Gravity is definitely still there; it is just that everything falls along with it, so nobody notices it. On Earth you do feel gravity, because the ground pushes back against your feet, and that feels like weight.",
      "Astronauts practise this feeling on Earth already, in a plane nicknamed the vomit comet. It flies big arcs through the sky, just like the cannonball. During such an arc everyone on board falls freely for about thirty seconds, exactly as on the space station, before the plane pulls back up."
    ]
  },
  words: [
    { nl: 'misverstand', en: 'misconception', defNl: 'iets dat de meeste mensen fout denken', defEn: 'something most people think wrongly' },
    { nl: 'gewichtloosheid', en: 'weightlessness', defNl: 'het gevoel dat je niets weegt', defEn: 'the feeling that you weigh nothing' },
    { nl: 'kanonskogel', en: 'cannonball', defNl: 'een zware ronde kogel die uit een kanon wordt geschoten', defEn: 'a heavy round ball fired from a cannon' }
  ],
  questions: [
    { id: 'q1', type: 'mc', skill: 'letterlijk',
      q: { nl: 'Hoeveel procent van de zwaartekracht op aarde is er nog op de hoogte van het ruimtestation?',
           en: 'About what percentage of Earth’s gravity is still there at the height of the space station?' },
      options: [ { nl: 'Ongeveer negentig procent', en: 'About ninety percent' }, { nl: 'Ongeveer tien procent', en: 'About ten percent' },
                 { nl: 'Helemaal niets', en: 'Nothing at all' }, { nl: 'Precies honderd procent', en: 'Exactly a hundred percent' } ],
      answer: 0,
      explain: { nl: 'Alinea 1 noemt ongeveer negentig procent op die hoogte.',
                 en: 'Paragraph 1 names about ninety percent at that height.' } },
    { id: 'q2', type: 'mc', skill: 'gevolgtrekking',
      q: { nl: 'Waarom raakt de kanonskogel de grond nooit, als hij hard genoeg wordt weggeschoten?',
           en: 'Why does the cannonball never hit the ground, if it is fired hard enough?' },
      options: [
        { nl: 'De aarde kromt onder hem net zo snel weg als hij valt', en: 'Earth curves away beneath it just as fast as it falls' },
        { nl: 'De zwaartekracht verdwijnt dan helemaal', en: 'Gravity disappears completely then' },
        { nl: 'De kogel wordt dan te licht', en: 'The ball becomes too light then' },
        { nl: 'De lucht houdt de kogel tegen', en: 'The air holds the ball back' }
      ], answer: 0,
      explain: { nl: 'Alinea 2 legt uit dat de aarde net zo snel wegkromt onder de kogel als hij valt.',
                 en: 'Paragraph 2 explains that Earth curves away beneath the ball just as fast as it falls.' } },
    { id: 'q3', type: 'mc', skill: 'verwijswoorden',
      q: { nl: 'Zo een eeuwige val om de aarde heen noemen we een baan om de aarde. Waar verwijst deze val naar?',
           en: 'That endless fall around the Earth is what we call an orbit. What does this fall refer to?' },
      options: [
        { nl: 'Naar de kogel die blijft vallen zonder ooit de grond te raken', en: 'To the ball that keeps falling without ever hitting the ground' },
        { nl: 'Naar de zwaartekracht van de aarde', en: 'To the gravity of the Earth' },
        { nl: 'Naar de snelheid van het ruimtestation', en: 'To the speed of the space station' },
        { nl: 'Naar het gewicht van de kanonskogel', en: 'To the weight of the cannonball' }
      ], answer: 0,
      explain: { nl: 'De zin ervoor beschrijft de kogel die blijft vallen zonder de grond te raken; daar verwijst het naar.',
                 en: 'The sentence before describes the ball that keeps falling without hitting the ground; that is what it refers to.' } },
    { id: 'q4', type: 'tf', skill: 'gevolgtrekking',
      q: { nl: 'Volgens de tekst is er helemaal geen zwaartekracht op de hoogte van het ruimtestation.',
           en: 'According to the text, there is no gravity at all at the height of the space station.' },
      answer: false,
      explain: { nl: 'Alinea 1 en 5 leggen uit dat de zwaartekracht er wel degelijk is; alleen valt alles er samen mee.',
                 en: 'Paragraphs 1 and 5 explain that gravity is definitely still there; it is just that everything falls along with it.' } },
    { id: 'q5', type: 'mc', skill: 'structuur',
      q: { nl: 'Alinea 5 begint met het woord daarom. Waar verwijst dat woord naar terug?',
           en: 'Paragraph 5 starts with the word therefore. What does that word refer back to?' },
      options: [
        { nl: 'Naar het feit dat astronauten met dezelfde snelheid vallen als het station zelf',
          en: 'To the fact that astronauts fall at the same speed as the station itself' },
        { nl: 'Naar de bouw van het ruimtestation', en: 'To the construction of the space station' },
        { nl: 'Naar het gewicht van een kanonskogel', en: 'To the weight of a cannonball' },
        { nl: 'Naar de temperatuur in de ruimte', en: 'To the temperature in space' }
      ], answer: 0,
      explain: { nl: 'Omdat astronauten en station samen met dezelfde snelheid vallen, spreken wetenschappers liever van gewichtloosheid dan van geen zwaartekracht.',
                 en: 'Because astronauts and station fall together at the same speed, scientists prefer to speak of weightlessness rather than no gravity.' } },
    { id: 'q6', type: 'mc', skill: 'hoofdgedachte',
      q: { nl: 'Wat is de hoofdgedachte van deze tekst?', en: 'What is the main idea of this text?' },
      options: [
        { nl: 'Astronauten zweven niet omdat er geen zwaartekracht is, maar omdat zij en het station constant om de aarde vallen',
          en: 'Astronauts do not float because there is no gravity, but because they and the station constantly fall around the Earth' },
        { nl: 'Astronauten trainen in een bijzonder vliegtuig', en: 'Astronauts train in a special plane' },
        { nl: 'Zwaartekracht bestaat helemaal niet in de ruimte', en: 'Gravity does not exist at all in space' },
        { nl: 'Het ruimtestation vliegt achtentwintigduizend kilometer per uur', en: 'The space station flies at twenty-eight thousand kilometres an hour' }
      ], answer: 0,
      explain: { nl: 'De hele tekst bouwt naar deze uitleg toe: van misverstand, via de kanonskogel, naar het echte antwoord.',
                 en: 'The whole text builds towards this explanation: from misconception, via the cannonball, to the real answer.' } }
  ]
},

{
  id: 'ruimte-9', topic: 'ruimte', level: 4, emoji: '🧊', scene: 'space',
  title: { nl: 'Is er leven op een maan van Jupiter?', en: 'Is there life on a moon of Jupiter?' },
  text: {
    nl: [
      "Jupiter heeft tientallen manen, maar een ervan houdt wetenschappers al jaren wakker: Europa. Deze maan is ongeveer even groot als onze eigen maan en helemaal bedekt met een dikke laag ijs. Van een afstand lijkt Europa op een gladde knikker vol barsten en strepen.",
      "Die barsten zijn het interessante deel. Ze ontstaan doordat de zwaartekracht van Jupiter voortdurend aan Europa trekt en duwt, alsof de maan wordt gekneed. Door die wrijving warmt het binnenste op. Onder de ijskorst, die vijftien tot vijfentwintig kilometer dik is, zit daardoor een oceaan van vloeibaar water. Die oceaan bevat waarschijnlijk meer water dan alle oceanen op aarde samen.",
      "Water alleen maakt nog geen leven, maar de combinatie is veelbelovend. Diep in de oceanen van de aarde leven organismen rond hete bronnen op de bodem, zonder ooit zonlicht te zien. Ze halen hun energie uit chemische reacties met mineralen uit de rotsen. Onderzoekers vermoeden dat de bodem van de oceaan van Europa vergelijkbare bronnen kan hebben, met dezelfde chemie die leven mogelijk zou kunnen maken.",
      "Om dat te onderzoeken lanceerde NASA de Europa Clipper, een ruimtesonde die tientallen keren langs de maan scheert zonder te landen. Aan boord zit onder andere radar die door het ijs heen kan kijken, om te meten hoe dik de korst precies is. De sonde zoekt ook naar pluimen: fonteinen van waterdamp die soms via scheuren de ruimte in spuiten. Vliegt de sonde daar doorheen, dan kan ze meteen proeven wat er in dat water zit, zonder ooit het ijs te hoeven doorboren.",
      "Een lander die daadwerkelijk door het ijs boort, staat nog niet gepland. Vijfentwintig kilometer ijs doorboren is met de techniek van nu bijna onmogelijk, en zo een missie zou tientallen jaren en miljarden kosten. Toch werken ingenieurs al aan proefrobots die zich al borend een weg naar beneden zouden kunnen smelten.",
      "Mocht er ooit leven gevonden worden onder dat ijs, dan zou dat een van de grootste ontdekkingen in de geschiedenis zijn: het bewijs dat leven niet uniek is voor de aarde. Tot die tijd blijft Europa een van de meest veelbelovende, en meest mysterieuze, plekken in ons zonnestelsel."
    ],
    en: [
      "Jupiter has dozens of moons, but one of them has kept scientists awake for years: Europa. This moon is roughly the same size as our own moon and completely covered by a thick layer of ice. From a distance Europa looks like a smooth marble covered in cracks and streaks.",
      "Those cracks are the interesting part. They form because Jupiter's gravity constantly pulls and pushes at Europa, as if the moon is being kneaded. That friction heats up the inside. Beneath the ice crust, which is fifteen to twenty-five kilometres thick, there is therefore an ocean of liquid water. That ocean probably contains more water than all of Earth's oceans combined.",
      "Water alone does not make life, but the combination is promising. Deep in Earth's oceans, organisms live around hot vents on the seafloor without ever seeing sunlight. They get their energy from chemical reactions with minerals in the rock. Researchers suspect the floor of Europa's ocean could have similar vents, with the same chemistry that might make life possible.",
      "To investigate this, NASA launched the Europa Clipper, a space probe that will fly past the moon dozens of times without landing. On board is, among other things, radar that can look through the ice to measure exactly how thick the crust is. The probe also searches for plumes: fountains of water vapour that sometimes shoot into space through cracks. If the probe flies through one, it can immediately taste what is in that water, without ever having to drill through the ice.",
      "A lander that actually drills through the ice is not yet planned. Drilling through twenty-five kilometres of ice is nearly impossible with today's technology, and such a mission would take decades and cost billions. Still, engineers are already working on test robots that could melt their own way down while drilling.",
      "If life were ever found beneath that ice, it would be one of the greatest discoveries in history: proof that life is not unique to Earth. Until then, Europa remains one of the most promising, and most mysterious, places in our solar system."
    ]
  },
  words: [
    { nl: 'ijskorst', en: 'ice crust', defNl: 'de harde buitenste laag ijs om een planeet of maan', defEn: 'the hard outer layer of ice around a planet or moon' },
    { nl: 'pluimen', en: 'plumes', defNl: 'fonteinen van waterdamp die de ruimte in spuiten', defEn: 'fountains of water vapour shooting into space' },
    { nl: 'mineralen', en: 'minerals', defNl: 'natuurlijke stoffen uit gesteente', defEn: 'natural substances found in rock' }
  ],
  questions: [
    { id: 'q1', type: 'mc', skill: 'letterlijk',
      q: { nl: 'Hoe dik is de ijskorst van Europa ongeveer?', en: 'About how thick is the ice crust of Europa?' },
      options: [ { nl: 'Vijftien tot vijfentwintig kilometer', en: 'Fifteen to twenty-five kilometres' },
                 { nl: 'Eén meter', en: 'One metre' }, { nl: 'Honderd meter', en: 'A hundred metres' },
                 { nl: 'Vijfhonderd kilometer', en: 'Five hundred kilometres' } ],
      answer: 0,
      explain: { nl: 'Alinea 2 noemt een ijskorst van vijftien tot vijfentwintig kilometer dik.',
                 en: 'Paragraph 2 names an ice crust fifteen to twenty-five kilometres thick.' } },
    { id: 'q2', type: 'mc', skill: 'verwijswoorden',
      q: { nl: 'Die barsten zijn het interessante deel. Waar verwijst die barsten naar?',
           en: 'Those cracks are the interesting part. What does those cracks refer to?' },
      options: [
        { nl: 'Naar de barsten en strepen op het ijs van Europa, genoemd in de vorige zin', en: 'To the cracks and streaks on the ice of Europa, named in the previous sentence' },
        { nl: 'Naar de manen van Jupiter in het algemeen', en: 'To the moons of Jupiter in general' },
        { nl: 'Naar de radar van de Europa Clipper', en: 'To the radar of the Europa Clipper' },
        { nl: 'Naar de hete bronnen op de bodem van de aarde', en: 'To the hot vents on the floor of Earth' }
      ], answer: 0,
      explain: { nl: 'De vorige zin noemt de barsten en strepen op het ijs; daar verwijst dat naar terug.',
                 en: 'The previous sentence names the cracks and streaks on the ice; that is what it refers back to.' } },
    { id: 'q3', type: 'mc', skill: 'gevolgtrekking',
      q: { nl: 'Waarom denken onderzoekers dat er leven in de oceaan van Europa zou kunnen zijn?',
           en: 'Why do researchers think there could be life in Europa’s ocean?' },
      options: [
        { nl: 'Omdat er misschien warme bronnen zijn met chemie zoals bij leven op de bodem van aardse oceanen',
          en: 'Because there may be warm vents with chemistry like the life on the floor of Earth’s oceans' },
        { nl: 'Omdat er al sporen van vissen zijn gevonden', en: 'Because traces of fish have already been found' },
        { nl: 'Omdat Europa dichter bij de zon staat dan de aarde', en: 'Because Europa is closer to the sun than Earth' },
        { nl: 'Omdat het ijs op Europa warmer is dan de lucht op aarde', en: 'Because the ice on Europa is warmer than the air on Earth' }
      ], answer: 0,
      explain: { nl: 'Alinea 3 vergelijkt het met hete bronnen op de bodem van aardse oceanen, waar leven bestaat zonder zonlicht.',
                 en: 'Paragraph 3 compares it to hot vents on the floor of Earth’s oceans, where life exists without sunlight.' } },
    { id: 'q4', type: 'gap', skill: 'woordenschat',
      q: { nl: 'Fonteinen van waterdamp die via scheuren de ruimte in spuiten, heten ___.',
           en: 'Fountains of water vapour that shoot into space through cracks are called ___.' },
      options: [ { nl: 'pluimen', en: 'plumes' }, { nl: 'kraters', en: 'craters' },
                 { nl: 'scharnieren', en: 'hinges' }, { nl: 'korsten', en: 'crusts' } ],
      answer: 0,
      explain: { nl: 'Alinea 4 noemt dit precies: pluimen zijn fonteinen van waterdamp die door scheuren spuiten.',
                 en: 'Paragraph 4 says exactly this: plumes are fountains of water vapour shooting through cracks.' } },
    { id: 'q5', type: 'order', skill: 'volgorde',
      q: { nl: 'Zet op volgorde wat de Europa Clipper doet.', en: 'Put in order what the Europa Clipper does.' },
      items: [
        { nl: 'NASA lanceert de Europa Clipper.', en: 'NASA launches the Europa Clipper.' },
        { nl: 'De sonde vliegt tientallen keren langs Europa.', en: 'The probe flies past Europa dozens of times.' },
        { nl: 'De radar meet hoe dik de ijskorst is.', en: 'The radar measures how thick the ice crust is.' },
        { nl: 'De sonde vliegt eventueel door een pluim waterdamp.', en: 'The probe may fly through a plume of water vapour.' },
        { nl: 'Wetenschappers proeven wat er in het water zit.', en: 'Scientists taste what is in the water.' }
      ], answer: [0, 1, 2, 3, 4],
      explain: { nl: 'Alinea 4 beschrijft deze stappen in precies deze volgorde, van lancering tot het proeven van het water.',
                 en: 'Paragraph 4 describes these steps in exactly this order, from launch to tasting the water.' } },
    { id: 'q6', type: 'mc', skill: 'structuur',
      q: { nl: 'Alinea 5 begint met de zin over een lander die nog niet gepland is. Wat doet die zin ten opzichte van alinea 4?',
           en: 'Paragraph 5 opens with the sentence about a lander that is not yet planned. What does that sentence do compared to paragraph 4?' },
      options: [
        { nl: 'Ze zet de grote wens (leven vinden) af tegen wat met de techniek van nu nog bijna onmogelijk is',
          en: 'It sets the big wish (finding life) against what is still nearly impossible with today’s technology' },
        { nl: 'Ze herhaalt precies wat de Europa Clipper al doet', en: 'It repeats exactly what the Europa Clipper already does' },
        { nl: 'Ze introduceert een onderwerp dat niets met Europa te maken heeft', en: 'It introduces a topic that has nothing to do with Europa' },
        { nl: 'Ze vat de hele tekst samen', en: 'It summarises the whole text' }
      ], answer: 0,
      explain: { nl: 'De Clipper kan al vliegen en meten, maar een lander die door het ijs boort is met de huidige techniek nog bijna onmogelijk: dat contrast legt alinea 5 uit.',
                 en: 'The Clipper can already fly past and measure, but a lander drilling through the ice is still nearly impossible with current technology: paragraph 5 explains that contrast.' } },
    { id: 'q7', type: 'mc', skill: 'hoofdgedachte',
      q: { nl: 'Wat is de hoofdgedachte van de tekst?', en: 'What is the main idea of the text?' },
      options: [
        { nl: 'Onder het ijs van Europa zit mogelijk een oceaan waarin leven zou kunnen bestaan, en missies proberen dat te onderzoeken',
          en: 'Beneath Europa’s ice there is possibly an ocean where life could exist, and missions are trying to investigate that' },
        { nl: 'Jupiter heeft de meeste manen van alle planeten', en: 'Jupiter has the most moons of all the planets' },
        { nl: 'De Europa Clipper is de duurste ruimtesonde ooit gebouwd', en: 'The Europa Clipper is the most expensive space probe ever built' },
        { nl: 'Het ijs op Europa is precies vijfentwintig kilometer dik', en: 'The ice on Europa is exactly twenty-five kilometres thick' }
      ], answer: 0,
      explain: { nl: 'Elke alinea gaat over dezelfde kern: de kans op een oceaan met leven onder het ijs, en de missies die dat proberen te onderzoeken.',
                 en: 'Every paragraph is about the same core idea: the chance of an ocean with life under the ice, and the missions trying to investigate it.' } },
    { id: 'q8', type: 'multi', skill: 'letterlijk',
      q: { nl: 'Welke twee dingen doet de Europa Clipper om de maan te onderzoeken? Kies er 2.',
           en: 'Which two things does the Europa Clipper do to study the moon? Pick 2.' },
      options: [
        { nl: 'Meet met radar hoe dik het ijs is', en: 'Measures with radar how thick the ice is' },
        { nl: 'Boort een gat door het ijs', en: 'Drills a hole through the ice' },
        { nl: 'Vliegt door pluimen waterdamp om ze te proeven', en: 'Flies through plumes of water vapour to taste them' },
        { nl: 'Landt op het oppervlak van Europa', en: 'Lands on the surface of Europa' }
      ], answer: [0, 2],
      explain: { nl: 'Alinea 4 zegt dat de sonde met radar het ijs meet en door pluimen vliegt om ze te proeven; landen of boren doet ze niet.',
                 en: 'Paragraph 4 says the probe measures the ice with radar and flies through plumes to taste them; it does not land or drill.' } }
  ]
},

{
  id: 'ruimte-10', topic: 'ruimte', level: 5, emoji: '🚀', scene: 'mars',
  title: { nl: 'Moeten we mensen naar Mars sturen?', en: 'Should we send humans to Mars?' },
  text: {
    nl: [
      "Al meer dan vijftig jaar dromen mensen van een reis naar Mars. Lang was het alleen een idee voor films en boeken. Nu zeggen ruimtevaartorganisaties en bedrijven dat het echt zou kunnen: misschien al over twintig jaar zet een mens voet op de rode planeet. Maar moeten we dat wel willen?",
      "Voorstanders noemen drie redenen. Ten eerste de wetenschap: een mens kan ter plekke beslissen welke steen de moeite waard is, iets waar een robot veel langer over doet. Ten tweede zien sommigen Mars als een soort reservekopie van de mensheid, mocht er op aarde ooit een ramp gebeuren. Ten derde wijzen ze op inspiratie: net als de maanlandingen ooit deden, zou een Marsmissie een hele generatie naar wetenschap kunnen trekken.",
      "Tegenstanders beginnen bij het geld. Een bemande missie zou honderden miljarden euro kosten. Met dat geld kun je scholen bouwen, ziekenhuizen bemannen of miljoenen mensen aan schoon water helpen. Waarom, vragen zij, zoveel geld uitgeven aan een planeet waar niemand kan ademen, terwijl er op aarde nog zoveel op te lossen is?",
      "Ook gezondheid baart zorgen. Een reis heen en terug duurt al snel twee tot drie jaar. Zonder het magnetische schild van de aarde krijgen astronauten onderweg een enorme dosis straling binnen, wat de kans op kanker verhoogt. Daarbij komt de eenzaamheid: maandenlang opgesloten zitten in een kleine cabine, ver van familie, is voor het brein een zware belasting.",
      "Het argument van de reservekopie wordt door critici bestreden. Mars heeft geen zuurstof, extreme kou en dodelijke straling: zelfs de zwaarst beschadigde aarde zou leefbaarder blijven dan Mars nu is. Beter, zeggen zij, is al dat geld gebruiken om problemen hier op te lossen, in plaats van te vluchten.",
      "Er is ook een tussenweg. Onbemande rovers zoals Perseverance doen al jaren waardevol onderzoek, voor een fractie van de kosten en zonder risico voor mensenlevens. Voorstanders van bemande missies antwoorden dat een mens sneller kan schakelen en op onverwachte ontdekkingen kan reageren op een manier die een robot niet kan.",
      "Een duidelijk antwoord is er niet. Ruimtevaartorganisaties blijven plannen maken en bedrijven blijven raketten testen, terwijl de discussie voortduurt. En wat vind jij: moeten we het risico en de kosten nemen, of eerst onze eigen planeet op orde brengen?"
    ],
    en: [
      "For more than fifty years people have dreamed of a journey to Mars. For a long time it was only an idea for films and books. Now both space agencies and companies say it could really happen: perhaps within twenty years a human will set foot on the red planet. But should we actually want that?",
      "Supporters name three reasons. First, science: a human can decide on the spot which rock is worth bringing back, something a robot takes much longer to do. Second, some see Mars as a kind of backup copy of humanity, in case a disaster ever strikes Earth. Third, they point to inspiration: just as the moon landings once did, a Mars mission could draw a whole generation toward science.",
      "Opponents start with the money. A crewed mission would cost hundreds of billions of euros. With that money you could build schools, staff hospitals or bring clean water to millions of people. Why, they ask, spend so much on a planet where nobody can breathe, while there is still so much to solve here on Earth?",
      "Health is also a concern. A round trip already takes two to three years. Without Earth's magnetic shield, astronauts absorb a huge dose of radiation on the way, which raises the risk of cancer. On top of that comes the loneliness: being shut in a small cabin for months, far from family, is a heavy burden on the brain.",
      "The backup-copy argument is challenged by critics. Mars has no oxygen, extreme cold and deadly radiation: even the most damaged Earth would still stay more liveable than Mars is now. Better, they say, to use all that money to solve problems here, instead of fleeing.",
      "There is also a middle way. Uncrewed rovers like Perseverance have done valuable research for years, at a fraction of the cost and without risk to human life. Supporters of crewed missions reply that a human can switch tasks faster and react to unexpected discoveries in a way a robot cannot.",
      "There is no clear answer. Space agencies keep making plans and companies keep testing rockets, while the debate continues. And what do you think: should we take the risk and the cost, or fix our own planet first?"
    ]
  },
  words: [
    { nl: 'bemand', en: 'crewed', defNl: 'met mensen aan boord', defEn: 'with people on board' },
    { nl: 'straling', en: 'radiation', defNl: 'onzichtbare deeltjes die je lichaam kunnen beschadigen', defEn: 'invisible particles that can damage your body' },
    { nl: 'reservekopie', en: 'backup copy', defNl: 'een extra versie die je achter de hand houdt voor het geval het misgaat', defEn: 'an extra version you keep in reserve in case something goes wrong' }
  ],
  questions: [
    { id: 'q1', type: 'mc', skill: 'letterlijk',
      q: { nl: 'Hoeveel zou een bemande missie naar Mars volgens de tekst ongeveer kosten?',
           en: 'About how much would a crewed mission to Mars cost, according to the text?' },
      options: [ { nl: 'Honderden miljarden euro', en: 'Hundreds of billions of euros' },
                 { nl: 'Honderd euro', en: 'A hundred euros' }, { nl: 'Eén miljoen euro', en: 'One million euros' },
                 { nl: 'Tien euro per kilometer', en: 'Ten euros per kilometre' } ],
      answer: 0,
      explain: { nl: 'Alinea 3 noemt honderden miljarden euro als geschatte kosten.',
                 en: 'Paragraph 3 names hundreds of billions of euros as the estimated cost.' } },
    { id: 'q2', type: 'sort', skill: 'feitmening',
      q: { nl: 'Feit of mening? Zet elke zin in de goede groep.', en: 'Fact or opinion? Put every sentence in the right group.' },
      bins: [{ nl: 'Feit', en: 'Fact' }, { nl: 'Mening', en: 'Opinion' }],
      items: [
        { nl: 'Een reis heen en terug duurt twee tot drie jaar.', en: 'A round trip takes two to three years.', bin: 0 },
        { nl: 'Beter is al dat geld gebruiken om problemen hier op te lossen.', en: 'It is better to use all that money to solve problems here.', bin: 1 },
        { nl: 'Onbemande rovers zoals Perseverance doen al jaren onderzoek.', en: 'Uncrewed rovers like Perseverance have done research for years.', bin: 0 },
        { nl: 'Een mens kan sneller schakelen dan een robot.', en: 'A human can switch tasks faster than a robot.', bin: 1 }
      ],
      explain: { nl: 'Feiten kun je nameten of opzoeken. Meningen bevatten een oordeel, zoals wat beter zou zijn of wie sneller is.',
                 en: 'Facts can be measured or looked up. Opinions contain a judgement, like what would be better or who is faster.' } },
    { id: 'q3', type: 'mc', skill: 'doel',
      q: { nl: 'Wat probeert de schrijver van deze tekst vooral te doen?', en: 'What is the writer of this text mainly trying to do?' },
      options: [
        { nl: 'Beide kanten van het Mars-debat eerlijk laten zien, zonder zelf een kant te kiezen',
          en: 'Show both sides of the Mars debate fairly, without picking a side' },
        { nl: 'De lezer overtuigen dat we naar Mars moeten gaan', en: 'Convince the reader that we should go to Mars' },
        { nl: 'De lezer overtuigen dat een Marsmissie geldverspilling is', en: 'Convince the reader that a Mars mission is a waste of money' },
        { nl: 'Uitleggen hoe je een raket bouwt', en: 'Explain how to build a rocket' }
      ], answer: 0,
      explain: { nl: 'De schrijver laat eerst de voorstanders aan het woord, dan de tegenstanders, en eindigt met een open vraag zonder zelf een kant te kiezen.',
                 en: 'The writer first gives the supporters a voice, then the opponents, and ends with an open question without picking a side.' } },
    { id: 'q4', type: 'mc', skill: 'verwijswoorden',
      q: { nl: 'Het argument van de reservekopie wordt door critici bestreden. Welk argument wordt hier bedoeld?',
           en: 'The backup-copy argument is challenged by critics. Which argument is meant here?' },
      options: [
        { nl: 'Dat Mars kan dienen als reservekopie van de mensheid bij een ramp op aarde',
          en: 'That Mars could serve as a backup copy of humanity in case of a disaster on Earth' },
        { nl: 'Dat een Marsmissie te duur is', en: 'That a Mars mission is too expensive' },
        { nl: 'Dat robots sneller onderzoek doen dan mensen', en: 'That robots do research faster than humans' },
        { nl: 'Dat astronauten te veel straling krijgen', en: 'That astronauts get too much radiation' }
      ], answer: 0,
      explain: { nl: 'Alinea 2 noemt dat argument het eerst; alinea 5 haalt het aan om het te bestrijden.',
                 en: 'Paragraph 2 first names that argument; paragraph 5 brings it back up to challenge it.' } },
    { id: 'q5', type: 'multi', skill: 'gevolgtrekking',
      q: { nl: 'Welke twee gezondheidsrisico’s voor astronauten noemt de tekst? Kies er 2.',
           en: 'Which two health risks for astronauts does the text name? Pick 2.' },
      options: [
        { nl: 'Een hoge dosis straling onderweg', en: 'A high dose of radiation on the way' },
        { nl: 'Eenzaamheid in een kleine cabine', en: 'Loneliness in a small cabin' },
        { nl: 'Te weinig zwaartekracht op Mars zelf', en: 'Too little gravity on Mars itself' },
        { nl: 'Gebrek aan eten tijdens de reis', en: 'Lack of food during the journey' }
      ], answer: [0, 1],
      explain: { nl: 'Alinea 4 noemt straling en eenzaamheid als gezondheidsrisico’s. Over zwaartekracht op Mars of te weinig eten zegt de tekst niets.',
                 en: 'Paragraph 4 names radiation and loneliness as health risks. The text says nothing about gravity on Mars or a lack of food.' } },
    { id: 'q6', type: 'tf', skill: 'gevolgtrekking',
      q: { nl: 'Volgens de tekst is Mars, ook al is de aarde zwaar beschadigd, altijd nog leefbaarder dan de aarde.',
           en: 'According to the text, Mars is always more liveable than Earth, even if Earth is badly damaged.' },
      answer: false,
      explain: { nl: 'Alinea 5 zegt het tegenovergestelde: zelfs de zwaarst beschadigde aarde blijft leefbaarder dan Mars nu is.',
                 en: 'Paragraph 5 says the opposite: even the most damaged Earth would stay more liveable than Mars is now.' } },
    { id: 'q7', type: 'mc', skill: 'structuur',
      q: { nl: 'Waarom noemt de schrijver in alinea 6 de rovers zoals Perseverance, vlak na de gezondheidsrisico’s in alinea 4 en 5?',
           en: 'Why does the writer bring up rovers like Perseverance in paragraph 6, right after the health risks in paragraphs 4 and 5?' },
      options: [
        { nl: 'Om een derde optie te laten zien die veel van de bezwaren omzeilt: onderzoek zonder mensen aan boord',
          en: 'To show a third option that avoids many of the objections: research without people on board' },
        { nl: 'Om te bewijzen dat rovers altijd beter zijn dan mensen', en: 'To prove that rovers are always better than humans' },
        { nl: 'Om de kosten van Perseverance te vergelijken met die van een Marsmissie', en: 'To compare the cost of Perseverance with that of a Mars mission' },
        { nl: 'Om terug te komen op de maanlandingen', en: 'To come back to the moon landings' }
      ], answer: 0,
      explain: { nl: 'Na de gezondheidsrisico’s laat de schrijver een derde optie zien: onderzoek zonder mensen aan boord.',
                 en: 'After the health risks, the writer shows a third option: research without people on board.' } },
    { id: 'q8', type: 'mc', skill: 'samenvatten',
      q: { nl: 'Welke samenvatting past het beste bij de hele tekst?', en: 'Which summary fits the whole text best?' },
      options: [
        { nl: 'Een bemande Marsmissie heeft grote voordelen zoals wetenschap en inspiratie, maar ook grote nadelen zoals kosten en gezondheidsrisico’s, en de discussie is nog niet beslist',
          en: 'A crewed Mars mission has big advantages like science and inspiration, but also big disadvantages like cost and health risks, and the debate is not settled' },
        { nl: 'Perseverance is een rover die al jaren onderzoek doet op Mars', en: 'Perseverance is a rover that has done research on Mars for years' },
        { nl: 'Astronauten krijgen tijdens de reis naar Mars te veel straling binnen', en: 'Astronauts absorb too much radiation during the journey to Mars' },
        { nl: 'De maanlandingen inspireerden ooit een hele generatie', en: 'The moon landings once inspired a whole generation' }
      ], answer: 0,
      explain: { nl: 'Een goede samenvatting pakt van elke alinea de kern: voordelen, nadelen en een discussie zonder duidelijke winnaar. De andere antwoorden zijn losse details.',
                 en: 'A good summary takes the core of each paragraph: advantages, disadvantages and a debate without a clear winner. The other answers are single details.' } },
    { id: 'q9', type: 'mc', skill: 'woordenschat',
      q: { nl: 'Wat betekent bemand in deze tekst?', en: 'What does crewed mean in this text?' },
      options: [
        { nl: 'Met mensen aan boord', en: 'With people on board' },
        { nl: 'Zonder mensen aan boord, bestuurd vanaf de aarde', en: 'Without people on board, controlled from Earth' },
        { nl: 'Gemaakt van metaal', en: 'Made of metal' },
        { nl: 'Heel duur', en: 'Very expensive' }
      ], answer: 0,
      explain: { nl: 'Bemand betekent met mensen aan boord; het tegenovergestelde is onbemand.',
                 en: 'Crewed means with people on board; the opposite is uncrewed.' } }
  ]
},
{
  id: 'ruimte-11', topic: 'ruimte', level: 1, emoji: '🌙', scene: 'space',
  title: { nl: 'Waarom verandert de maan van vorm?', en: 'Why does the Moon change shape?' },
  text: {
    nl: [
      "Kijk maar eens een paar avonden achter elkaar naar de maan. De ene keer is hij rond, de andere keer zie je maar een smal randje. Soms zie je hem helemaal niet. Hoe kan dat?",
      "De maan geeft zelf geen licht. Hij is een grote, grijze bol van steen. We zien hem alleen omdat de zon erop schijnt. Net zoals je een bal ziet als er een lamp op schijnt.",
      "De maan draait in ongeveer vier weken een rondje om de aarde. Daardoor kijken wij steeds van een andere kant naar de maan. Soms zien we de hele verlichte kant: dat heet volle maan.",
      "Staat de maan tussen de aarde en de zon, dan zien we alleen de donkere kant. Dat heet nieuwe maan. Daarna wordt het lichte stukje elke avond een beetje groter, tot het weer volle maan is. Dan wordt het stukje weer kleiner.",
      "De maan verandert dus niet echt van vorm. Hij is altijd rond. Alleen het stuk dat wij verlicht zien, verandert. Die verschillende vormen heten de schijngestalten van de maan."
    ],
    en: [
      "Try looking at the Moon for a few evenings in a row. One time it is round, another time you only see a thin edge. Sometimes you cannot see it at all. How is that possible?",
      "The Moon does not give off light itself. It is a big, grey ball of rock. We only see it because the Sun shines on it. Just like you see a ball when a lamp shines on it.",
      "The Moon travels once around the Earth in about four weeks. Because of that, we keep looking at the Moon from a different side. Sometimes we see the whole lit-up side: that is called a full moon.",
      "When the Moon is between the Earth and the Sun, we only see its dark side. That is called a new moon. After that the bright part grows a little every evening, until it is full moon again. Then the bright part shrinks again.",
      "So the Moon does not really change shape. It is always round. Only the part we see lit up changes. Those different shapes are called the phases of the Moon."
    ]
  },
  words: [
    { nl: 'verlicht', en: 'lit up', defNl: 'er schijnt licht op', defEn: 'light is shining on it' },
    { nl: 'volle maan', en: 'full moon', defNl: 'als je de maan helemaal rond en licht ziet', defEn: 'when you see the Moon completely round and bright' },
    { nl: 'schijngestalten', en: 'phases', defNl: 'de verschillende vormen waarin je de maan ziet', defEn: 'the different shapes in which you see the Moon' }
  ],
  questions: [
    { id: 'q1', type: 'mc', skill: 'letterlijk',
      q: { nl: 'Waarom kunnen we de maan zien?', en: 'Why can we see the Moon?' },
      options: [
        { nl: 'Omdat de maan zelf licht geeft', en: 'Because the Moon gives off its own light' },
        { nl: 'Omdat er lampen op de maan staan', en: 'Because there are lamps on the Moon' },
        { nl: 'Omdat de zon op de maan schijnt', en: 'Because the Sun shines on the Moon' },
        { nl: 'Omdat de maan heel dichtbij is', en: 'Because the Moon is very close' }
      ], answer: 2,
      explain: { nl: 'In alinea 2 staat: "We zien hem alleen omdat de zon erop schijnt."',
                 en: 'Paragraph 2 says: "We only see it because the Sun shines on it."' } },
    { id: 'q2', type: 'tf', skill: 'letterlijk',
      q: { nl: 'De maan draait in ongeveer vier weken om de aarde.', en: 'The Moon travels around the Earth in about four weeks.' },
      answer: true,
      explain: { nl: 'Waar. Alinea 3: "De maan draait in ongeveer vier weken een rondje om de aarde."',
                 en: 'True. Paragraph 3: "The Moon travels once around the Earth in about four weeks."' } },
    { id: 'q3', type: 'gap', skill: 'woordenschat',
      q: { nl: 'De verschillende vormen waarin je de maan ziet, heten de ___.', en: 'The different shapes in which you see the Moon are called the ___.' },
      options: [
        { nl: 'kraters', en: 'craters' },
        { nl: 'schijngestalten', en: 'phases' },
        { nl: 'sterrenbeelden', en: 'constellations' },
        { nl: 'getijden', en: 'tides' }
      ], answer: 1,
      explain: { nl: 'De laatste zin van de tekst: "Die verschillende vormen heten de schijngestalten van de maan."',
                 en: 'The last sentence of the text: "Those different shapes are called the phases of the Moon."' } },
    { id: 'q4', type: 'order', skill: 'volgorde',
      q: { nl: 'Zet de vormen van de maan in de goede volgorde, te beginnen bij nieuwe maan.', en: 'Put the shapes of the Moon in the right order, starting with the new moon.' },
      items: [
        { nl: 'Nieuwe maan: je ziet de maan niet.', en: 'New moon: you cannot see the Moon.' },
        { nl: 'Het lichte stukje wordt elke avond groter.', en: 'The bright part grows every evening.' },
        { nl: 'Volle maan: de maan is helemaal rond.', en: 'Full moon: the Moon is completely round.' },
        { nl: 'Het lichte stukje wordt weer kleiner.', en: 'The bright part shrinks again.' }
      ], answer: [0, 1, 2, 3],
      explain: { nl: 'Alinea 4 beschrijft het: eerst nieuwe maan, dan groter tot volle maan, dan weer kleiner.',
                 en: 'Paragraph 4 describes it: first new moon, then growing to full moon, then shrinking again.' } },
    { id: 'q5', type: 'mc', skill: 'hoofdgedachte',
      q: { nl: 'Wat is de belangrijkste boodschap van de tekst?', en: 'What is the main message of the text?' },
      options: [
        { nl: 'De maan is eigenlijk plat', en: 'The Moon is actually flat' },
        { nl: 'De maan is altijd rond; alleen het verlichte stuk dat wij zien verandert', en: 'The Moon is always round; only the lit part we see changes' },
        { nl: 'Je mag niet naar de maan kijken', en: 'You should not look at the Moon' },
        { nl: 'De maan is groter dan de zon', en: 'The Moon is bigger than the Sun' }
      ], answer: 1,
      explain: { nl: 'De laatste alinea vat het samen: "De maan verandert dus niet echt van vorm."',
                 en: 'The last paragraph sums it up: "So the Moon does not really change shape."' } }
  ]
},

{
  id: 'ruimte-12', topic: 'ruimte', level: 6, emoji: '🪐', scene: 'space',
  title: { nl: 'Op zoek naar een tweede aarde', en: 'Looking for a second Earth' },
  text: {
    nl: [
      "Eeuwenlang vroegen mensen zich af of er bij andere sterren ook planeten draaien. Niemand kon het bewijzen. Pas in 1995 vonden twee Zwitserse sterrenkundigen de eerste planeet bij een ster die op onze zon lijkt. Zo'n planeet buiten ons zonnestelsel heet een exoplaneet. Inmiddels kennen we er meer dan vijfduizend, en elk jaar komen er honderden bij.",
      "Het vreemde is dat bijna niemand zo'n planeet ooit echt gezien heeft. Een ster geeft miljarden keren meer licht dan de planeet ernaast. Het is alsof je vanaf een kilometer afstand een vuurvliegje naast een vuurtoren probeert te zien. Daarom zoeken onderzoekers op een slimme manier: ze kijken niet naar de planeet, maar naar de ster.",
      "Als een planeet precies tussen ons en zijn ster door schuift, wordt die ster heel even een klein beetje minder fel. Dat noemen sterrenkundigen een overgang. Een ruimtetelescoop meet het licht van duizenden sterren tegelijk, dag en nacht. Wordt een ster steeds na hetzelfde aantal dagen iets donkerder, dan draait er vrijwel zeker een planeet omheen. Uit de grootte van het dipje kun je zelfs uitrekenen hoe groot de planeet is.",
      "Maar een planeet vinden is nog iets anders dan een tweede aarde vinden. Daarvoor moet een planeet in de leefbare zone liggen: niet te dicht bij de ster, want dan kookt het water weg, en niet te ver weg, want dan bevriest alles. Alleen daartussen kan er vloeibaar water zijn, en water is voor zover wij weten nodig voor leven. Sterrenkundigen noemen dat gebied daarom ook wel de Goudlokjezone, naar het sprookje waarin de pap niet te heet en niet te koud moest zijn.",
      "Er zijn al tientallen planeten gevonden die ongeveer zo groot zijn als de aarde en in zo'n zone draaien. Toch betekent dat niet dat er ook leven is. Sommige hebben misschien geen dampkring, andere worden gebombardeerd door gevaarlijke straling van hun ster. De James Webb-telescoop probeert nu te meten welke gassen er in de lucht van zulke planeten zitten. Vindt hij bijvoorbeeld zuurstof en methaan samen, dan wordt het pas echt spannend.",
      "Verhuizen kunnen we voorlopig niet. De dichtstbijzijnde exoplaneet staat ruim vier lichtjaar van ons vandaan. Met de snelste raket van nu zou de reis tienduizenden jaren duren. De zoektocht gaat dus niet over een nieuw huis, maar over een oude vraag: zijn wij alleen in het heelal?"
    ],
    en: [
      "For centuries people wondered whether other stars also have planets going round them. Nobody could prove it. Only in 1995 did two Swiss astronomers find the first planet around a star that resembles our sun. Such a planet outside our solar system is called an exoplanet. By now we know more than five thousand, and hundreds more are added every year.",
      "The strange thing is that almost nobody has ever really seen such a planet. A star gives off billions of times more light than the planet next to it. It is like trying to see a firefly next to a lighthouse from a kilometre away. That is why researchers search in a clever way: they do not look at the planet, but at the star.",
      "When a planet slides exactly between us and its star, that star becomes a tiny bit less bright for a moment. Astronomers call that a transit. A space telescope measures the light of thousands of stars at once, day and night. If a star keeps getting slightly darker after the same number of days, a planet is almost certainly going round it. From the size of the dip you can even work out how big the planet is.",
      "But finding a planet is something different from finding a second Earth. For that, a planet has to lie in the habitable zone: not too close to the star, because then the water boils away, and not too far away, because then everything freezes. Only in between can there be liquid water, and as far as we know water is needed for life. That is why astronomers also call the area the Goldilocks zone, after the fairy tale in which the porridge had to be not too hot and not too cold.",
      "Dozens of planets have already been found that are roughly as big as the Earth and orbit in such a zone. Still, that does not mean there is life as well. Some may have no atmosphere, others are bombarded by dangerous radiation from their star. The James Webb telescope is now trying to measure which gases are in the air of such planets. If it finds oxygen and methane together, for example, then things get really exciting.",
      "We cannot move there for the time being. The nearest exoplanet is more than four light years away from us. With today's fastest rocket the journey would take tens of thousands of years. So the search is not about a new home, but about an old question: are we alone in the universe?"
    ]
  },
  words: [
    { nl: 'exoplaneet', en: 'exoplanet', defNl: 'een planeet die om een andere ster dan onze zon draait', defEn: 'a planet that orbits a star other than our sun' },
    { nl: 'leefbare zone', en: 'habitable zone', defNl: 'de afstand tot een ster waarop vloeibaar water kan bestaan', defEn: 'the distance from a star at which liquid water can exist' },
    { nl: 'dampkring', en: 'atmosphere', defNl: 'de laag lucht rond een planeet', defEn: 'the layer of air around a planet' }
  ],
  questions: [
    { id: 'q1', type: 'mc', skill: 'letterlijk',
      q: { nl: 'Wanneer werd de eerste planeet bij een ster zoals onze zon gevonden?', en: 'When was the first planet around a star like our sun found?' },
      options: [
        { nl: 'In 1995', en: 'In 1995' },
        { nl: 'Eeuwen geleden', en: 'Centuries ago' },
        { nl: 'Vorig jaar', en: 'Last year' },
        { nl: 'Nog nooit', en: 'Never' }
      ], answer: 0,
      explain: { nl: 'Alinea 1: "Pas in 1995 vonden twee Zwitserse sterrenkundigen de eerste planeet bij een ster die op onze zon lijkt."',
                 en: 'Paragraph 1: "Only in 1995 did two Swiss astronomers find the first planet around a star that resembles our sun."' } },
    { id: 'q2', type: 'find', skill: 'gevolgtrekking',
      q: { nl: 'Welke zin legt uit waarom je een exoplaneet bijna nooit kunt zien?', en: 'Which sentence explains why you can almost never see an exoplanet?' },
      options: [
        { nl: 'Inmiddels kennen we er meer dan vijfduizend, en elk jaar komen er honderden bij.', en: 'By now we know more than five thousand, and hundreds more are added every year.' },
        { nl: 'Een ster geeft miljarden keren meer licht dan de planeet ernaast.', en: 'A star gives off billions of times more light than the planet next to it.' },
        { nl: 'Een ruimtetelescoop meet het licht van duizenden sterren tegelijk, dag en nacht.', en: 'A space telescope measures the light of thousands of stars at once, day and night.' },
        { nl: 'De dichtstbijzijnde exoplaneet staat ruim vier lichtjaar van ons vandaan.', en: 'The nearest exoplanet is more than four light years away from us.' }
      ], answer: 1,
      explain: { nl: 'De ster straalt de planeet weg, net als een vuurtoren een vuurvliegje. Dat staat in alinea 2.',
                 en: 'The star outshines the planet, like a lighthouse outshines a firefly. That is in paragraph 2.' } },
    { id: 'q3', type: 'gap', skill: 'woordenschat',
      q: { nl: 'Een planeet in de leefbare zone ___.', en: 'A planet in the habitable zone ___.' },
      options: [
        { nl: 'staat zo ver van zijn ster dat er vloeibaar water kan zijn', en: 'is at such a distance from its star that there can be liquid water' },
        { nl: 'wordt altijd door mensen bewoond', en: 'is always inhabited by people' },
        { nl: 'draait heel snel om zichzelf', en: 'spins round very fast' },
        { nl: 'heeft nooit een dampkring', en: 'never has an atmosphere' }
      ], answer: 0,
      explain: { nl: 'Alinea 4: niet te dichtbij en niet te ver weg, zodat er vloeibaar water kan zijn.',
                 en: 'Paragraph 4: not too close and not too far, so there can be liquid water.' } },
    { id: 'q4', type: 'order', skill: 'volgorde',
      q: { nl: 'Hoe vind je een planeet met de overgangsmethode? Zet de stappen op volgorde.', en: 'How do you find a planet with the transit method? Put the steps in order.' },
      items: [
        { nl: 'De telescoop meet het licht van heel veel sterren.', en: 'The telescope measures the light of very many stars.' },
        { nl: 'Een planeet schuift tussen ons en de ster door.', en: 'A planet slides between us and the star.' },
        { nl: 'De ster wordt heel even iets minder fel.', en: 'The star becomes slightly less bright for a moment.' },
        { nl: 'Dat gebeurt steeds na evenveel dagen: er draait een planeet.', en: 'It keeps happening after the same number of days: a planet is going round.' }
      ], answer: [0, 1, 2, 3],
      explain: { nl: 'Eerst meten, dan schuift de planeet voorlangs, dan dipt het licht, en de herhaling bewijst dat het een planeet is.',
                 en: 'First measure, then the planet passes in front, then the light dips, and the repetition proves it is a planet.' } },
    { id: 'q5', type: 'mc', skill: 'verwijswoorden',
      q: { nl: '"Dat noemen sterrenkundigen een overgang." Wat is "dat"?', en: '"Astronomers call that a transit." What is "that"?' },
      options: [
        { nl: 'Een planeet die voor zijn ster langs schuift, zodat die ster iets minder fel wordt', en: 'A planet passing in front of its star so that the star gets slightly less bright' },
        { nl: 'Een ster die ontploft', en: 'A star that explodes' },
        { nl: 'Een telescoop die gaat draaien', en: 'A telescope that starts turning' },
        { nl: 'Een raket die vertrekt', en: 'A rocket taking off' }
      ], answer: 0,
      explain: { nl: '"Dat" wijst terug naar de zin ervoor: de planeet schuift voor de ster en de ster wordt minder fel.',
                 en: '"That" points back to the sentence before: the planet passes in front and the star gets less bright.' } },
    { id: 'q6', type: 'mc', skill: 'gevolgtrekking',
      q: { nl: 'Waarom wordt het "pas echt spannend" als de telescoop zuurstof en methaan samen vindt?', en: 'Why do things get "really exciting" if the telescope finds oxygen and methane together?' },
      options: [
        { nl: 'Omdat het een teken kan zijn dat er leven is', en: 'Because it might be a sign of life' },
        { nl: 'Omdat raketten er dan kunnen tanken', en: 'Because rockets could refuel there' },
        { nl: 'Omdat de planeet dan heel groot is', en: 'Because the planet is then very big' },
        { nl: 'Omdat de ster dan minder fel is', en: 'Because the star is then less bright' }
      ], answer: 0,
      explain: { nl: 'De hele tekst gaat over de vraag of er leven is. Die gassen samen zouden daar een aanwijzing voor kunnen zijn.',
                 en: 'The whole text is about whether there is life. Those gases together could be a clue.' } },
    { id: 'q7', type: 'sort', skill: 'feitmening',
      q: { nl: 'Feit of mening? Zet elke zin in de goede groep.', en: 'Fact or opinion? Put every sentence in the right group.' },
      bins: [{ nl: 'Feit', en: 'Fact' }, { nl: 'Mening', en: 'Opinion' }],
      items: [
        { nl: 'Er zijn meer dan vijfduizend exoplaneten bekend.', en: 'More than five thousand exoplanets are known.', bin: 0 },
        { nl: 'Het is zonde van het geld om naar exoplaneten te zoeken.', en: 'Searching for exoplanets is a waste of money.', bin: 1 },
        { nl: 'De dichtstbijzijnde exoplaneet staat ruim vier lichtjaar weg.', en: 'The nearest exoplanet is more than four light years away.', bin: 0 },
        { nl: 'De vraag of we alleen zijn, is de mooiste vraag die er bestaat.', en: 'Whether we are alone is the most beautiful question there is.', bin: 1 }
      ],
      explain: { nl: 'Aantallen en afstanden kun je meten: feiten. "Zonde" en "de mooiste" zijn oordelen: meningen.',
                 en: 'Numbers and distances can be measured: facts. "A waste" and "the most beautiful" are judgements: opinions.' } },
    { id: 'q8', type: 'multi', skill: 'letterlijk',
      q: { nl: 'Welke twee redenen noemt de tekst waarom een planeet in de leefbare zone toch geen leven hoeft te hebben? Kies er 2.',
           en: 'Which two reasons does the text give why a planet in the habitable zone need not have life? Pick 2.' },
      options: [
        { nl: 'Hij heeft misschien geen dampkring', en: 'It may have no atmosphere' },
        { nl: 'Hij krijgt misschien gevaarlijke straling van zijn ster', en: 'It may get dangerous radiation from its star' },
        { nl: 'Hij is te klein om te meten', en: 'It is too small to measure' },
        { nl: 'Hij draait te langzaam', en: 'It turns too slowly' }
      ], answer: [0, 1],
      explain: { nl: 'Alinea 5 noemt precies deze twee: geen dampkring en gevaarlijke straling.',
                 en: 'Paragraph 5 names exactly these two: no atmosphere and dangerous radiation.' } },
    { id: 'q9', type: 'find', skill: 'hoofdgedachte',
      q: { nl: 'Met welke zin laat de schrijver zien waar de zoektocht écht over gaat?', en: 'With which sentence does the writer show what the search is really about?' },
      options: [
        { nl: 'Verhuizen kunnen we voorlopig niet.', en: 'We cannot move there for the time being.' },
        { nl: 'Toch betekent dat niet dat er ook leven is.', en: 'Still, that does not mean there is life as well.' },
        { nl: 'De zoektocht gaat dus niet over een nieuw huis, maar over een oude vraag: zijn wij alleen in het heelal?', en: 'So the search is not about a new home, but about an old question: are we alone in the universe?' },
        { nl: 'Daarom zoeken onderzoekers op een slimme manier: ze kijken niet naar de planeet, maar naar de ster.', en: 'That is why researchers search in a clever way: they do not look at the planet, but at the star.' }
      ], answer: 2,
      explain: { nl: 'Het signaalwoord "dus" in de laatste alinea leidt de conclusie in: het gaat om de vraag of we alleen zijn.',
                 en: 'The signal word "so" in the last paragraph introduces the conclusion: it is about whether we are alone.' } },
    { id: 'q10', type: 'mc', skill: 'samenvatten',
      q: { nl: 'Welke samenvatting past het best bij de hele tekst?', en: 'Which summary fits the whole text best?' },
      options: [
        { nl: 'Sterrenkundigen vinden steeds meer planeten bij andere sterren door naar dipjes in sterrenlicht te kijken, en zoeken nu naar tekenen van leven op planeten in de leefbare zone.',
          en: 'Astronomers find more and more planets around other stars by looking for dips in starlight, and are now searching for signs of life on planets in the habitable zone.' },
        { nl: 'Met een raket kun je binnen een paar jaar naar een exoplaneet vliegen.', en: 'With a rocket you can fly to an exoplanet within a few years.' },
        { nl: 'Een vuurvliegje is moeilijk te zien naast een vuurtoren.', en: 'A firefly is hard to see next to a lighthouse.' },
        { nl: 'Op alle exoplaneten is vloeibaar water gevonden.', en: 'Liquid water has been found on all exoplanets.' }
      ], answer: 0,
      explain: { nl: 'Alleen de eerste keuze noemt het vinden, de methode en de zoektocht naar leven. De rest is een detail of klopt niet.',
                 en: 'Only the first option names the finding, the method and the search for life. The rest is a detail or wrong.' } }
  ]
}
]);
