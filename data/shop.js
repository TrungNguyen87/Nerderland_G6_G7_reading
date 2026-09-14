/* =====================================================================
   Leeskampioen - de winkel.

   Munten verdien je vanzelf terwijl je speelt (samen met XP en badges).
   Je kunt ze sparen en uitgeven aan stickers, iconen, personages en
   gereedschap. Alles hier is puur leuk: niets hiervan is nodig om het
   spel te kunnen spelen.

   kind:
     sticker   - verzamelplaatje, puur decoratief
     icon      - extra avatar (dier/wezen), te gebruiken als speleravatar
     character - groter, duurder avatar-personage, past bij een wereld
     tool      - gereedschap: een jokerkaart (verbruiksartikel) of een
                 kleurenthema (eenmalig vrij te spelen, daarna te kiezen)
   ===================================================================== */

window.SHOP_ITEMS = [

  /* ---------------------------------------------------------------------
     Stickers
     --------------------------------------------------------------------- */
  { id: 'sticker-rainbow', kind: 'sticker', emoji: '🌈', cost: 8,  nl: 'Regenboog', en: 'Rainbow' },
  { id: 'sticker-star',    kind: 'sticker', emoji: '⭐', cost: 8,  nl: 'Ster',      en: 'Star' },
  { id: 'sticker-balloon', kind: 'sticker', emoji: '🎈', cost: 8,  nl: 'Ballon',    en: 'Balloon' },
  { id: 'sticker-crown',   kind: 'sticker', emoji: '👑', cost: 10, nl: 'Kroon',     en: 'Crown' },
  { id: 'sticker-fire',    kind: 'sticker', emoji: '🔥', cost: 10, nl: 'Vuur',      en: 'Fire' },
  { id: 'sticker-unicorn', kind: 'sticker', emoji: '🦄', cost: 12, nl: 'Eenhoorn',  en: 'Unicorn' },
  { id: 'sticker-dragon',  kind: 'sticker', emoji: '🐉', cost: 12, nl: 'Draak',     en: 'Dragon' },
  { id: 'sticker-gamepad', kind: 'sticker', emoji: '🎮', cost: 12, nl: 'Controller', en: 'Game controller' },
  { id: 'sticker-trophy',  kind: 'sticker', emoji: '🏆', cost: 14, nl: 'Beker',     en: 'Trophy' },
  { id: 'sticker-gem',     kind: 'sticker', emoji: '💎', cost: 15, nl: 'Diamant',   en: 'Gem' },

  /* ---------------------------------------------------------------------
     Iconen - extra avatars
     --------------------------------------------------------------------- */
  { id: 'icon-butterfly', kind: 'icon', emoji: '🦋', cost: 16, nl: 'Vlinder',   en: 'Butterfly' },
  { id: 'icon-eagle',     kind: 'icon', emoji: '🦅', cost: 16, nl: 'Arend',     en: 'Eagle' },
  { id: 'icon-wolf',      kind: 'icon', emoji: '🐺', cost: 16, nl: 'Wolf',      en: 'Wolf' },
  { id: 'icon-koala',     kind: 'icon', emoji: '🐨', cost: 16, nl: 'Koala',     en: 'Koala' },
  { id: 'icon-dolphin',   kind: 'icon', emoji: '🐬', cost: 16, nl: 'Dolfijn',   en: 'Dolphin' },
  { id: 'icon-vampire',   kind: 'icon', emoji: '🧛', cost: 18, nl: 'Vampier',   en: 'Vampire' },
  { id: 'icon-mermaid',   kind: 'icon', emoji: '🧜', cost: 18, nl: 'Zeemeermin', en: 'Mermaid' },
  { id: 'icon-fairy',     kind: 'icon', emoji: '🧚', cost: 18, nl: 'Fee',       en: 'Fairy' },

  /* ---------------------------------------------------------------------
     Personages - grotere, duurdere avatars, elk bij een wereld
     --------------------------------------------------------------------- */
  { id: 'char-chef',       kind: 'character', emoji: '🧑‍🍳', cost: 40, nl: 'Chef-kok',           en: 'Chef' },
  { id: 'char-doctor',     kind: 'character', emoji: '🧑‍⚕️', cost: 40, nl: 'Dokter',              en: 'Doctor' },
  { id: 'char-musician',   kind: 'character', emoji: '🧑‍🎤', cost: 40, nl: 'Muzikant',            en: 'Musician' },
  { id: 'char-astronaut',  kind: 'character', emoji: '🧑‍🚀', cost: 45, nl: 'Astronaut',           en: 'Astronaut' },
  { id: 'char-detective',  kind: 'character', emoji: '🕵️',        cost: 45, nl: 'Detective',           en: 'Detective' },
  { id: 'char-scientist',  kind: 'character', emoji: '🧑‍🔬', cost: 45, nl: 'Wetenschapper',       en: 'Scientist' },
  { id: 'char-pilot',      kind: 'character', emoji: '🧑‍✈️', cost: 45, nl: 'Piloot',              en: 'Pilot' },
  { id: 'char-knight',     kind: 'character', emoji: '🤺',        cost: 50, nl: 'Ridder',              en: 'Knight' },

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
    nl: 'Lentethema', en: 'Blossom theme' }
];
