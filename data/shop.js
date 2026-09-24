/* =====================================================================
   Leeskampioen - de winkel.

   Munten verdien je door verhalen en spellingoefeningen HELEMAAL af te
   maken (niet meer per losse vraag) en er geldt een dagelijkse grens
   (zie DAILY_COIN_CAP in js/app.js): zo krijg je alles bij elkaar
   gespaard over meerdere dagen echt lezen, niet in één middag doorklikken.

   Elk item heeft een `tier` (zeldzaamheid), die ook de prijs en soms een
   `minLevel` (spelerniveau, uit XP) bepaalt:

     common     - stickers: goedkoop, geen niveau-eis
     uncommon   - iconen: extra avatars, een klein beetje niveau nodig
     rare       - personages: duurder, flink wat niveau nodig
     epic       - bijzondere, anime-achtige personages: alleen voor wie
                  al lang meespeelt
     legendary  - het felbegeerde 3D-kaart-personage: pas te koop nadat
                  ECHT alles in het spel is uitgespeeld (unlock hieronder)

   kind:
     sticker   - verzamelplaatje, puur decoratief
     icon      - extra avatar (dier/wezen), te gebruiken als speleravatar
     character - groter avatar-personage, hoe hoger de tier hoe zeldzamer
     tool      - gereedschap: een jokerkaart (verbruiksartikel) of een
                 kleurenthema (eenmalig vrij te spelen, daarna te kiezen)
     gift      - verzamelcadeau voor het album. NIET te koop (chestOnly,
                 geen prijs): zit alleen in een cadeaudoos, zie js/rewards.js

   unlock (alleen op het legendarische item): extra eis bovenop munten en
   niveau, gecontroleerd in js/app.js (itemUnlockOk). Alle velden moeten
   waar zijn:
     allStories  - elk verhaal in elke wereld minstens één keer gehaald
     allSpelling - elke spellingoefening minstens één keer gehaald
     allBadges   - alle badges verdiend
   ===================================================================== */

window.SHOP_ITEMS = [

  /* ---------------------------------------------------------------------
     Stickers - goedkoop en voor iedereen, maar niet meer weggegeven
     --------------------------------------------------------------------- */
  { id: 'sticker-rainbow',   kind: 'sticker', tier: 'common', emoji: '🌈', cost: 18, nl: 'Regenboog',     en: 'Rainbow' },
  { id: 'sticker-star',     kind: 'sticker', tier: 'common', emoji: '⭐', cost: 18, nl: 'Ster',          en: 'Star' },
  { id: 'sticker-balloon', kind: 'sticker', tier: 'common', emoji: '🎈', cost: 18, nl: 'Ballon',        en: 'Balloon' },
  { id: 'sticker-clover',  kind: 'sticker', tier: 'common', emoji: '🍀', cost: 18, nl: 'Klavertjevier', en: 'Four-leaf clover' },
  { id: 'sticker-candy',   kind: 'sticker', tier: 'common', emoji: '🍭', cost: 20, nl: 'Lolly',         en: 'Lollipop' },
  { id: 'sticker-crown',   kind: 'sticker', tier: 'common', emoji: '👑', cost: 22, nl: 'Kroon',         en: 'Crown' },
  { id: 'sticker-fire',    kind: 'sticker', tier: 'common', emoji: '🔥', cost: 22, nl: 'Vuur',          en: 'Fire' },
  { id: 'sticker-comet',   kind: 'sticker', tier: 'common', emoji: '☄️', cost: 24, nl: 'Komeet',        en: 'Comet' },
  { id: 'sticker-target',  kind: 'sticker', tier: 'common', emoji: '🎯', cost: 24, nl: 'Doelwit',       en: 'Target' },
  { id: 'sticker-puzzle',  kind: 'sticker', tier: 'common', emoji: '🧩', cost: 24, nl: 'Puzzelstuk',    en: 'Puzzle piece' },
  { id: 'sticker-circus',  kind: 'sticker', tier: 'common', emoji: '🎪', cost: 26, nl: 'Circus',        en: 'Circus tent' },
  { id: 'sticker-unicorn', kind: 'sticker', tier: 'common', emoji: '🦄', cost: 28, nl: 'Eenhoorn',      en: 'Unicorn' },
  { id: 'sticker-dragon',  kind: 'sticker', tier: 'common', emoji: '🐉', cost: 28, nl: 'Draak',         en: 'Dragon' },
  { id: 'sticker-lightning', kind: 'sticker', tier: 'common', emoji: '⚡', cost: 28, nl: 'Bliksem',     en: 'Lightning' },
  { id: 'sticker-gamepad', kind: 'sticker', tier: 'common', emoji: '🎮', cost: 28, nl: 'Controller',    en: 'Game controller' },
  { id: 'sticker-sparkstar', kind: 'sticker', tier: 'common', emoji: '🌟', cost: 30, nl: 'Fonkelster',  en: 'Sparkle star' },
  { id: 'sticker-trophy',  kind: 'sticker', tier: 'common', emoji: '🏆', cost: 32, nl: 'Beker',         en: 'Trophy' },
  { id: 'sticker-gem',     kind: 'sticker', tier: 'common', emoji: '💎', cost: 34, nl: 'Diamant',       en: 'Gem' },
  { id: 'sticker-pizza',   kind: 'sticker', tier: 'common', emoji: '🍕', cost: 18, nl: 'Pizza',         en: 'Pizza' },
  { id: 'sticker-cat',     kind: 'sticker', tier: 'common', emoji: '🐱', cost: 20, nl: 'Poes',          en: 'Kitten' },
  { id: 'sticker-guitar',  kind: 'sticker', tier: 'common', emoji: '🎸', cost: 24, nl: 'Gitaar',        en: 'Guitar' },
  { id: 'sticker-rocket',  kind: 'sticker', tier: 'common', emoji: '🚀', cost: 26, nl: 'Raket',         en: 'Rocket' },
  { id: 'sticker-palette', kind: 'sticker', tier: 'common', emoji: '🎨', cost: 26, nl: 'Verfpalet',     en: 'Paint palette' },
  { id: 'sticker-books',   kind: 'sticker', tier: 'common', emoji: '📚', cost: 30, nl: 'Boekenstapel',  en: 'Pile of books' },

  /* ---------------------------------------------------------------------
     Iconen - extra avatars, een beetje niveau nodig
     --------------------------------------------------------------------- */
  { id: 'icon-butterfly', kind: 'icon', tier: 'uncommon', minLevel: 3, emoji: '🦋', cost: 45, nl: 'Vlinder',    en: 'Butterfly' },
  { id: 'icon-parrot',    kind: 'icon', tier: 'uncommon', minLevel: 3, emoji: '🦜', cost: 45, nl: 'Papegaai',   en: 'Parrot' },
  { id: 'icon-penguin',   kind: 'icon', tier: 'uncommon', minLevel: 3, emoji: '🐧', cost: 48, nl: 'Pinguïn',    en: 'Penguin' },
  { id: 'icon-eagle',     kind: 'icon', tier: 'uncommon', minLevel: 3, emoji: '🦅', cost: 48, nl: 'Arend',      en: 'Eagle' },
  { id: 'icon-wolf',      kind: 'icon', tier: 'uncommon', minLevel: 3, emoji: '🐺', cost: 48, nl: 'Wolf',       en: 'Wolf' },
  { id: 'icon-koala',     kind: 'icon', tier: 'uncommon', minLevel: 3, emoji: '🐨', cost: 48, nl: 'Koala',      en: 'Koala' },
  { id: 'icon-dolphin',   kind: 'icon', tier: 'uncommon', minLevel: 3, emoji: '🐬', cost: 48, nl: 'Dolfijn',    en: 'Dolphin' },
  { id: 'icon-bat',       kind: 'icon', tier: 'uncommon', minLevel: 4, emoji: '🦇', cost: 52, nl: 'Vleermuis',  en: 'Bat' },
  { id: 'icon-peacock',   kind: 'icon', tier: 'uncommon', minLevel: 4, emoji: '🦚', cost: 55, nl: 'Pauw',       en: 'Peacock' },
  { id: 'icon-lion',      kind: 'icon', tier: 'uncommon', minLevel: 4, emoji: '🦁', cost: 58, nl: 'Leeuw',      en: 'Lion' },
  { id: 'icon-shark',     kind: 'icon', tier: 'uncommon', minLevel: 4, emoji: '🦈', cost: 58, nl: 'Haai',       en: 'Shark' },
  { id: 'icon-vampire',   kind: 'icon', tier: 'uncommon', minLevel: 5, emoji: '🧛', cost: 60, nl: 'Vampier',    en: 'Vampire' },
  { id: 'icon-mermaid',   kind: 'icon', tier: 'uncommon', minLevel: 5, emoji: '🧜', cost: 60, nl: 'Zeemeermin', en: 'Mermaid' },
  { id: 'icon-fairy',     kind: 'icon', tier: 'uncommon', minLevel: 5, emoji: '🧚', cost: 60, nl: 'Fee',        en: 'Fairy' },
  { id: 'icon-hedgehog',  kind: 'icon', tier: 'uncommon', minLevel: 2, emoji: '🦔', cost: 40, nl: 'Egel',       en: 'Hedgehog' },
  { id: 'icon-ladybug',   kind: 'icon', tier: 'uncommon', minLevel: 2, emoji: '🐞', cost: 40, nl: 'Lieveheersbeestje', en: 'Ladybird' },
  { id: 'icon-otter',     kind: 'icon', tier: 'uncommon', minLevel: 3, emoji: '🦦', cost: 48, nl: 'Otter',      en: 'Otter' },
  { id: 'icon-flamingo',  kind: 'icon', tier: 'uncommon', minLevel: 4, emoji: '🦩', cost: 52, nl: 'Flamingo',   en: 'Flamingo' },
  { id: 'icon-sloth',     kind: 'icon', tier: 'uncommon', minLevel: 4, emoji: '🦥', cost: 52, nl: 'Luiaard',    en: 'Sloth' },
  { id: 'icon-kangaroo',  kind: 'icon', tier: 'uncommon', minLevel: 6, emoji: '🦘', cost: 62, nl: 'Kangoeroe',  en: 'Kangaroo' },

  /* ---------------------------------------------------------------------
     Personages (rare) - grotere, duurdere avatars, elk bij een wereld
     --------------------------------------------------------------------- */
  { id: 'char-chef',       kind: 'character', tier: 'rare', minLevel: 7, emoji: '🧑‍🍳', cost: 90,  nl: 'Chef-kok',     en: 'Chef' },
  { id: 'char-doctor',     kind: 'character', tier: 'rare', minLevel: 7, emoji: '🧑‍⚕️', cost: 95,  nl: 'Dokter',       en: 'Doctor' },
  { id: 'char-musician',   kind: 'character', tier: 'rare', minLevel: 7, emoji: '🧑‍🎤', cost: 100, nl: 'Muzikant',     en: 'Musician' },
  { id: 'char-astronaut',  kind: 'character', tier: 'rare', minLevel: 7, emoji: '🧑‍🚀', cost: 105, nl: 'Astronaut',    en: 'Astronaut' },
  { id: 'char-detective',  kind: 'character', tier: 'rare', minLevel: 7, emoji: '🕵️',  cost: 110, nl: 'Detective',    en: 'Detective' },
  { id: 'char-scientist',  kind: 'character', tier: 'rare', minLevel: 7, emoji: '🧑‍🔬', cost: 115, nl: 'Wetenschapper', en: 'Scientist' },
  { id: 'char-pilot',      kind: 'character', tier: 'rare', minLevel: 7, emoji: '🧑‍✈️', cost: 120, nl: 'Piloot',       en: 'Pilot' },
  { id: 'char-knight',     kind: 'character', tier: 'rare', minLevel: 7, emoji: '🤺',   cost: 130, nl: 'Ridder',       en: 'Knight' },
  { id: 'char-artist',     kind: 'character', tier: 'rare', minLevel: 8, emoji: '🧑‍🎨', cost: 140, nl: 'Kunstenaar',   en: 'Artist' },
  { id: 'char-firefighter', kind: 'character', tier: 'rare', minLevel: 8, emoji: '🧑‍🚒', cost: 145, nl: 'Brandweer',   en: 'Firefighter' },
  { id: 'char-elf',        kind: 'character', tier: 'rare', minLevel: 8, emoji: '🧝',   cost: 150, nl: 'Elf',          en: 'Elf' },
  { id: 'char-genie',      kind: 'character', tier: 'rare', minLevel: 8, emoji: '🧞',   cost: 160, nl: 'Geest',        en: 'Genie' },
  { id: 'char-teacher',    kind: 'character', tier: 'rare', minLevel: 9, emoji: '🧑‍🏫', cost: 150, nl: 'Juf of meester', en: 'Teacher' },
  { id: 'char-farmer',     kind: 'character', tier: 'rare', minLevel: 9, emoji: '🧑‍🌾', cost: 150, nl: 'Boer',          en: 'Farmer' },
  { id: 'char-coder',      kind: 'character', tier: 'rare', minLevel: 10, emoji: '🧑‍💻', cost: 165, nl: 'Programmeur',  en: 'Coder' },
  { id: 'char-superhero',  kind: 'character', tier: 'rare', minLevel: 11, emoji: '🦸‍♀️', cost: 175, nl: 'Superheldin',  en: 'Superheroine' },
  { id: 'char-mechanic',   kind: 'character', tier: 'rare', minLevel: 12, emoji: '🧑‍🔧', cost: 180, nl: 'Uitvinder',    en: 'Inventor' },

  /* ---------------------------------------------------------------------
     Personages (epic) - zeldzame, anime-achtige helden voor wie al lang
     meespeelt. (Naar het voorbeeld van dappere stripboek-helden - geen
     personages uit een bestaande serie, om geen namen te "lenen" die niet
     van dit spel zijn. Wil je liever een bestaande naam, pas het gerust
     hier aan: het is jouw eigen kopie van het spel.)
     --------------------------------------------------------------------- */
  { id: 'epic-pirate',   kind: 'character', tier: 'epic', minLevel: 14, emoji: '🏴‍☠️', cost: 240, nl: 'Piratenkapitein', en: 'Pirate Captain' },
  { id: 'epic-ninja',    kind: 'character', tier: 'epic', minLevel: 15, emoji: '🥋',   cost: 260, nl: 'Ninjameester',    en: 'Ninja Master' },
  { id: 'epic-dragon',   kind: 'character', tier: 'epic', minLevel: 16, emoji: '🐲',   cost: 280, nl: 'Drakenkrijger',   en: 'Dragon Warrior' },
  { id: 'epic-mecha',    kind: 'character', tier: 'epic', minLevel: 17, emoji: '🦾',   cost: 300, nl: 'Cyberheld',       en: 'Cyber Hero' },
  { id: 'epic-sorceress', kind: 'character', tier: 'epic', minLevel: 18, emoji: '🧙‍♀️', cost: 320, nl: 'Tovenares',      en: 'Sorceress' },
  { id: 'epic-princess', kind: 'character', tier: 'epic', minLevel: 19, emoji: '👸',   cost: 340, nl: 'Prinses',         en: 'Princess' },
  { id: 'epic-prince',   kind: 'character', tier: 'epic', minLevel: 19, emoji: '🤴',   cost: 340, nl: 'Prins',           en: 'Prince' },
  { id: 'epic-trex',     kind: 'character', tier: 'epic', minLevel: 21, emoji: '🦕',   cost: 380, nl: 'Oerreus',         en: 'Dino Giant' },

  /* ---------------------------------------------------------------------
     Legendarisch - het felbegeerde 3D-kaart-personage. Pas te koop als
     ECHT alles is uitgespeeld: elk verhaal, elke spellingoefening en elke
     badge. Zie itemUnlockOk() in js/app.js.
     --------------------------------------------------------------------- */
  { id: 'legendary-champion', kind: 'character', tier: 'legendary', minLevel: 25, emoji: '🌠', cost: 500,
    nl: 'Kosmische Kampioen', en: 'Cosmic Champion',
    unlock: { allStories: true, allSpelling: true, allBadges: true } },

  /* ---------------------------------------------------------------------
     Gereedschap - een jokerkaart (verbruiksartikel) of een kleurenthema
     --------------------------------------------------------------------- */
  { id: 'tool-joker1', kind: 'tool', effect: 'joker', amount: 1, emoji: '🃏', cost: 20,
    nl: 'Jokerkaart', en: 'Joker card' },
  { id: 'tool-joker3', kind: 'tool', effect: 'joker', amount: 3, emoji: '🃏', cost: 50,
    nl: 'Jokerkaart × 3', en: 'Joker card × 3' },
  { id: 'tool-theme-ocean', kind: 'tool', effect: 'theme', hue: 200, emoji: '🌊', cost: 30,
    nl: 'Oceaanthema', en: 'Ocean theme' },
  { id: 'tool-theme-sunset', kind: 'tool', effect: 'theme', hue: 15, emoji: '🌅', cost: 30,
    nl: 'Zonsondergangthema', en: 'Sunset theme' },
  { id: 'tool-theme-blossom', kind: 'tool', effect: 'theme', hue: 320, emoji: '🌸', cost: 30,
    nl: 'Lentethema', en: 'Blossom theme' },
  { id: 'tool-theme-forest', kind: 'tool', effect: 'theme', hue: 130, emoji: '🌲', cost: 30,
    nl: 'Bosthema', en: 'Forest theme' },
  { id: 'tool-theme-sun', kind: 'tool', effect: 'theme', hue: 45, emoji: '🌻', cost: 30,
    nl: 'Zonnethema', en: 'Sunshine theme' },
  { id: 'tool-theme-night', kind: 'tool', effect: 'theme', hue: 232, emoji: '🌙', cost: 30,
    nl: 'Nachtthema', en: 'Night theme' },

  /* ---------------------------------------------------------------------
     Verzamelcadeaus voor het album - alleen uit een cadeaudoos, nooit
     te koop. Hoe zeldzamer, hoe kleiner de kans (zie js/rewards.js).
     --------------------------------------------------------------------- */
  { id: 'gift-teddy',     kind: 'gift', chestOnly: true, tier: 'common', emoji: '🧸', nl: 'Knuffelbeer',   en: 'Teddy bear' },
  { id: 'gift-kite',      kind: 'gift', chestOnly: true, tier: 'common', emoji: '🪁', nl: 'Vlieger',       en: 'Kite' },
  { id: 'gift-yoyo',      kind: 'gift', chestOnly: true, tier: 'common', emoji: '🪀', nl: 'Jojo',          en: 'Yo-yo' },
  { id: 'gift-donut',     kind: 'gift', chestOnly: true, tier: 'common', emoji: '🍩', nl: 'Donut',         en: 'Doughnut' },
  { id: 'gift-melon',     kind: 'gift', chestOnly: true, tier: 'common', emoji: '🍉', nl: 'Watermeloen',   en: 'Watermelon' },
  { id: 'gift-sunflower', kind: 'gift', chestOnly: true, tier: 'common', emoji: '🌻', nl: 'Zonnebloem',    en: 'Sunflower' },
  { id: 'gift-shell',     kind: 'gift', chestOnly: true, tier: 'common', emoji: '🐚', nl: 'Schelp',        en: 'Seashell' },
  { id: 'gift-mushroom',  kind: 'gift', chestOnly: true, tier: 'common', emoji: '🍄', nl: 'Paddenstoel',   en: 'Toadstool' },
  { id: 'gift-pinata',    kind: 'gift', chestOnly: true, tier: 'common', emoji: '🪅', nl: 'Piñata',        en: 'Piñata' },
  { id: 'gift-carousel',  kind: 'gift', chestOnly: true, tier: 'uncommon', emoji: '🎠', nl: 'Draaimolen',  en: 'Carousel' },
  { id: 'gift-ferris',    kind: 'gift', chestOnly: true, tier: 'uncommon', emoji: '🎡', nl: 'Reuzenrad',   en: 'Ferris wheel' },
  { id: 'gift-skates',    kind: 'gift', chestOnly: true, tier: 'uncommon', emoji: '🛼', nl: 'Rolschaatsen', en: 'Roller skates' },
  { id: 'gift-cactus',    kind: 'gift', chestOnly: true, tier: 'uncommon', emoji: '🌵', nl: 'Cactus',      en: 'Cactus' },
  { id: 'gift-island',    kind: 'gift', chestOnly: true, tier: 'uncommon', emoji: '🏝️', nl: 'Onbewoond eiland', en: 'Desert island' },
  { id: 'gift-moai',      kind: 'gift', chestOnly: true, tier: 'uncommon', emoji: '🗿', nl: 'Stenen reus', en: 'Stone giant' },
  { id: 'gift-planet',    kind: 'gift', chestOnly: true, tier: 'uncommon', emoji: '🪐', nl: 'Ringplaneet', en: 'Ringed planet' },
  { id: 'gift-crystal',   kind: 'gift', chestOnly: true, tier: 'rare', emoji: '🔮', nl: 'Glazen bol',      en: 'Crystal ball' },
  { id: 'gift-wand',      kind: 'gift', chestOnly: true, tier: 'rare', emoji: '🪄', nl: 'Toverstaf',       en: 'Magic wand' },
  { id: 'gift-volcano',   kind: 'gift', chestOnly: true, tier: 'rare', emoji: '🌋', nl: 'Vulkaan',         en: 'Volcano' },
  { id: 'gift-alien',     kind: 'gift', chestOnly: true, tier: 'rare', emoji: '👾', nl: 'Ruimtemonstertje', en: 'Space critter' },
  { id: 'gift-ufo',       kind: 'gift', chestOnly: true, tier: 'rare', emoji: '🛸', nl: 'Vliegende schotel', en: 'Flying saucer' },
  { id: 'gift-key',       kind: 'gift', chestOnly: true, tier: 'rare', emoji: '🗝️', nl: 'Geheime sleutel', en: 'Secret key' },
  { id: 'gift-galaxy',    kind: 'gift', chestOnly: true, tier: 'epic', emoji: '🌌', nl: 'Melkweg',         en: 'Milky Way' },
  { id: 'gift-fireworks', kind: 'gift', chestOnly: true, tier: 'epic', emoji: '🎆', nl: 'Vuurwerk',        en: 'Fireworks' },
  { id: 'gift-map',       kind: 'gift', chestOnly: true, tier: 'epic', emoji: '🗺️', nl: 'Schatkaart',      en: 'Treasure map' },
  { id: 'gift-stardust',  kind: 'gift', chestOnly: true, tier: 'epic', emoji: '💫', nl: 'Sterrenstof',     en: 'Stardust' }
];
