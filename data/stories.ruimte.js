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
