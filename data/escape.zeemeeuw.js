/* Ontsnappingskamers - zaak 2: Het schip van kapitein Kluif.
   Level 1 = groep 6, level 2 = groep 7, level 3 = groep 8. Zie js/games/escape.js voor het formaat. */
addEscape({
  id: 'zeemeeuw', emoji: '🏴‍☠️', hue: 200,
  title: { nl: 'Het schip van kapitein Kluif', en: 'Captain Kluif’s ship' },
  blurb: {
    nl: 'Je zit opgesloten aan boord van de Zeemeeuw, het schip van de vergeetachtige piraat Kluif. Lees de aanwijzingen, ontcijfer de codes en kom van boord!',
    en: 'You are locked up aboard the Seagull, the ship of the forgetful pirate Kluif. Read the clues, crack the codes and get off the ship!'
  },
  rooms: [
    /* ------------------------------------------------------------------ */
    {
      id: 'zeemeeuw-1', lv: 1,
      title: { nl: 'De kajuit', en: 'The cabin' },
      intro: {
        nl: 'Je wordt wakker in een kleine kajuit op een piratenschip. Het schip schommelt zachtjes. Op de deur is een briefje geprikt: ‘Welkom aan boord van de Zeemeeuw! Wie mijn kajuit wil verlaten, moet de goede kist vinden. – Kapitein Kluif’ Je probeert de deur, maar die zit op slot.',
        en: 'You wake up in a small cabin on a pirate ship. The ship rocks gently. A note is pinned to the door: ‘Welcome aboard the Seagull! Whoever wants to leave my cabin must find the right chest. – Captain Kluif’ You try the door, but it is locked.'
      },
      outro: {
        nl: 'De deur zwaait open en je stapt naar buiten. Het is stil aan dek. Dan hoor je onder je voeten iets bonken, diep in het ruim. Iemand… of iets… wil eruit!',
        en: 'The door swings open and you step outside. It is quiet on deck. Then you hear something thumping beneath your feet, deep in the hold. Somebody… or something… wants to get out!'
      },
      items: { sleutel: { emoji: '🗝️', nl: 'de koperen sleutel', en: 'the copper key' } },
      objects: [
        { id: 'kompas', emoji: '🧭', name: { nl: 'het kompas', en: 'the compass' },
          text: {
            nl: 'Een oud kompas op het bureau. De naald wijst naar het noorden, naar de muur met de zeekaarten. Op het deksel is een kaartje geplakt: ‘De goede kist staat aan de kant waar de zon opkomt.’',
            en: 'An old compass on the desk. The needle points north, towards the wall with the sea charts. A little card is stuck on the lid: ‘The right chest stands on the side where the sun rises.’'
          } },
        { id: 'papegaai', emoji: '🦜', name: { nl: 'de papegaai', en: 'the parrot' },
          text: {
            nl: 'In een kooi zit een groene papegaai. Hij schreeuwt steeds hetzelfde: ‘Drie dukaten! Twee ringen! Vijf parels! Rraak!’',
            en: 'In a cage sits a green parrot. He keeps screaming the same thing: ‘Three ducats! Two rings! Five pearls! Squawk!’'
          } },
        { id: 'raam', emoji: '🪟', name: { nl: 'het raampje', en: 'the porthole' },
          text: {
            nl: 'Door het ronde raampje zie je de zee en een stukje strand. Op de vensterbank ligt een dode vlieg. Verder is er niets bijzonders te zien.',
            en: 'Through the round porthole you see the sea and a bit of beach. A dead fly lies on the windowsill. There is nothing special to see otherwise.'
          } },
        { id: 'kisten', emoji: '📦', name: { nl: 'de vier kisten', en: 'the four chests' },
          text: {
            nl: 'In de kajuit staan vier kisten die er precies hetzelfde uitzien: één bij de noordmuur, één bij de oostmuur, één bij de zuidmuur en één bij de westmuur.',
            en: 'In the cabin stand four chests that look exactly the same: one by the north wall, one by the east wall, one by the south wall and one by the west wall.'
          },
          lock: {
            kind: 'choice', answer: 1,
            options: [{ emoji: '⬆️', nl: 'de noordkist', en: 'the north chest' }, { emoji: '➡️', nl: 'de oostkist', en: 'the east chest' },
                      { emoji: '⬇️', nl: 'de zuidkist', en: 'the south chest' }, { emoji: '⬅️', nl: 'de westkist', en: 'the west chest' }],
            ask: { nl: 'Welke kist is de goede?', en: 'Which chest is the right one?' },
            hint: { nl: 'Lees het kaartje op het kompas. Aan welke kant komt de zon op?', en: 'Read the card on the compass. On which side does the sun rise?' }
          },
          opened: {
            nl: 'Je tilt het deksel van de oostkist op. Er zit een cijferslot met drie cijfers op de binnenkant.',
            en: 'You lift the lid of the east chest. There is a combination lock with three digits on the inside.'
          },
          reveals: ['oostkist'] },
        { id: 'oostkist', emoji: '🧰', name: { nl: 'het cijferslot', en: 'the combination lock' }, hidden: true,
          text: {
            nl: 'Een cijferslot met drie cijfers in de oostkist. Misschien weet iemand in deze kajuit het antwoord…',
            en: 'A combination lock with three digits in the east chest. Maybe somebody in this cabin knows the answer…'
          },
          lock: {
            kind: 'code', answer: '325',
            ask: { nl: 'Welke code van drie cijfers opent het slot?', en: 'Which code of three digits opens the lock?' },
            hint: { nl: 'De papegaai noemt drie getallen. Zet ze in dezelfde volgorde achter elkaar.', en: 'The parrot names three numbers. Put them one after the other in the same order.' }
          },
          opened: { nl: 'KLIK! In de kist ligt een koperen sleutel.', en: 'CLICK! In the chest lies a copper key.' },
          gives: 'sleutel' },
        { id: 'deur', emoji: '🚪', name: { nl: 'de deur', en: 'the door' },
          text: { nl: 'De deur van de kajuit. Hij zit op slot.', en: 'The cabin door. It is locked.' },
          lock: { kind: 'item', item: 'sleutel', need: { nl: 'De deur zit op slot. Je hebt een sleutel nodig.', en: 'The door is locked. You need a key.' } },
          opened: { nl: 'De sleutel past! De deur zwaait open.', en: 'The key fits! The door swings open.' },
          exit: true }
      ]
    },

    /* ------------------------------------------------------------------ */
    {
      id: 'zeemeeuw-2', lv: 2,
      title: { nl: 'Het ruim', en: 'The hold' },
      intro: {
        nl: 'Je loopt de trap af naar het ruim: een donkere ruimte vol vaten, touwen en kisten. Boven je valt een zwaar luik dicht. Aan een haak hangt een lantaarn die net genoeg licht geeft om te lezen. Op een plank ligt het logboek van kapitein Kluif.',
        en: 'You walk down the stairs to the hold: a dark space full of barrels, ropes and chests. Above you a heavy hatch falls shut. A lantern hangs on a hook that gives just enough light to read by. On a shelf lies Captain Kluif’s logbook.'
      },
      outro: {
        nl: 'Achter de deur loopt een trap omhoog. Boven hoor je een papegaai krijsen: ‘Schat! Schat!’ Dat komt uit de kapiteinshut!',
        en: 'Behind the door a staircase leads up. Upstairs you hear a parrot screeching: ‘Treasure! Treasure!’ It is coming from the captain’s cabin!'
      },
      items: { ijzersleutel: { emoji: '🗝️', nl: 'de ijzeren sleutel', en: 'the iron key' } },
      objects: [
        { id: 'logboek', emoji: '📜', name: { nl: 'het logboek', en: 'the logbook' },
          text: {
            nl: 'Het logboek van kapitein Kluif. ‘Dag 1: we vertrokken uit Vlissingen. Dag 4: storm, drie vaten overboord. Dag 6: we vonden het eiland. Dag 9: de schat ging in de kist.’ Onderaan staat: ‘Het slot van het luik in de vloer gaat open met het aantal dagen tussen ons vertrek en de dag waarop de schat in de kist ging.’',
            en: 'Captain Kluif’s logbook. ‘Day 1: we left Vlissingen. Day 4: storm, three barrels overboard. Day 6: we found the island. Day 9: the treasure went into the chest.’ At the bottom it says: ‘The lock of the hatch in the floor opens with the number of days between our departure and the day on which the treasure went into the chest.’'
          } },
        { id: 'luik', emoji: '🕳️', name: { nl: 'het luik in de vloer', en: 'the hatch in the floor' },
          text: {
            nl: 'Een houten luik in de vloer met een slot voor één cijfer. Er hangt een kaartje aan: ‘Reken goed!’',
            en: 'A wooden hatch in the floor with a lock for one digit. A card hangs from it: ‘Count carefully!’'
          },
          lock: {
            kind: 'code', answer: '8',
            ask: { nl: 'Welk cijfer opent het luik?', en: 'Which digit opens the hatch?' },
            hint: { nl: 'Lees het logboek. Op welke dag vertrokken ze, en op welke dag ging de schat in de kist? Hoeveel dagen zitten ertussen?', en: 'Read the logbook. On which day did they leave, and on which day did the treasure go into the chest? How many days are in between?' }
          },
          opened: {
            nl: 'KLIK! Het luik klapt open. Eronder staan vier houten vaten naast elkaar: een rood, een blauw, een groen en een geel vat.',
            en: 'CLICK! The hatch flips open. Underneath stand four wooden barrels side by side: a red, a blue, a green and a yellow one.'
          },
          reveals: ['vaten'] },
        { id: 'bord', emoji: '🪧', name: { nl: 'het bordje', en: 'the little sign' },
          text: {
            nl: 'Een houten bordje aan de wand: ‘Rol de vaten in de goede volgorde weg. Het rode vat gaat eerst. Het gele vat gaat als laatste. Het groene vat moet vóór het blauwe.’',
            en: 'A wooden sign on the wall: ‘Roll the barrels away in the right order. The red barrel goes first. The yellow barrel goes last. The green barrel must go before the blue one.’'
          } },
        { id: 'rat', emoji: '🐀', name: { nl: 'de rat', en: 'the rat' },
          text: {
            nl: 'Een dikke rat zit op een stukje kaas. Hij kijkt je aan alsof jij hier de indringer bent. Verder is hij nergens goed voor.',
            en: 'A fat rat sits on a piece of cheese. He looks at you as if you are the intruder here. He is no use otherwise.'
          } },
        { id: 'anker', emoji: '⚓', name: { nl: 'het anker', en: 'the anchor' },
          text: {
            nl: 'Een roestig reserveanker. Er staat in krasletters op: ‘Niet aanraken, veel te zwaar.’ Dat klopt.',
            en: 'A rusty spare anchor. Scratched into it is: ‘Do not touch, far too heavy.’ That is true.'
          } },
        { id: 'vaten', emoji: '🛢️', name: { nl: 'de vier vaten', en: 'the four barrels' }, hidden: true,
          text: {
            nl: 'Vier vaten staan in een rij voor een kleine ijzeren kluis in de muur: een rood, een blauw, een groen en een geel vat. Ze moeten één voor één worden weggerold.',
            en: 'Four barrels stand in a row in front of a small iron safe in the wall: a red, a blue, a green and a yellow barrel. They have to be rolled away one by one.'
          },
          lock: {
            kind: 'seq', answer: [0, 2, 1, 3],
            options: [{ emoji: '🔴', nl: 'rood vat', en: 'red barrel' }, { emoji: '🔵', nl: 'blauw vat', en: 'blue barrel' },
                      { emoji: '🟢', nl: 'groen vat', en: 'green barrel' }, { emoji: '🟡', nl: 'geel vat', en: 'yellow barrel' }],
            ask: { nl: 'In welke volgorde rol je de vaten weg?', en: 'In which order do you roll the barrels away?' },
            hint: { nl: 'Begin met rood en eindig met geel. Groen komt vóór blauw.', en: 'Start with red and end with yellow. Green comes before blue.' }
          },
          opened: { nl: 'De vaten rollen één voor één weg. In de kluis erachter ligt een ijzeren sleutel!', en: 'The barrels roll away one by one. In the safe behind them lies an iron key!' },
          gives: 'ijzersleutel' },
        { id: 'deur', emoji: '🚪', name: { nl: 'de zware deur', en: 'the heavy door' },
          text: { nl: 'Een zware ijzeren deur achter in het ruim. Hij zit op slot.', en: 'A heavy iron door at the back of the hold. It is locked.' },
          lock: { kind: 'item', item: 'ijzersleutel', need: { nl: 'De deur zit op slot. Je hebt een sleutel nodig.', en: 'The door is locked. You need a key.' } },
          opened: { nl: 'De ijzeren sleutel past precies. De deur piept open.', en: 'The iron key fits exactly. The door creaks open.' },
          exit: true }
      ]
    },

    /* ------------------------------------------------------------------ */
    {
      id: 'zeemeeuw-3', lv: 3,
      title: { nl: 'De kapiteinshut', en: 'The captain’s cabin' },
      intro: {
        nl: 'Je klimt de trap op en komt in de kapiteinshut. Er is niemand. Op het bureau ligt een briefje: ‘Mijn schatkaart is gestolen! Een van mijn drie matrozen heeft het gedaan: Ko, Lot of Mo. Zoek uit wie, want in zijn kist ligt de sleutel van mijn geheime luik. – K.’ De deur naar het dek zit op slot.',
        en: 'You climb the stairs and arrive in the captain’s cabin. Nobody is there. A note lies on the desk: ‘My treasure map has been stolen! One of my three sailors did it: Ko, Lot or Mo. Find out who, because in his chest lies the key to my secret hatch. – K.’ The door to the deck is locked.'
      },
      outro: {
        nl: 'KLIK! Het luik naar het dek zwaait open en de zon schijnt je tegemoet. Kapitein Kluif staat aan het roer en lacht. ‘Goed gedaan, matroos! Ko dacht dat mijn kaart een koekje was. Maar de écht grote schat? Die ligt nog ergens op het eiland. Een raadsel voor een volgende keer!’',
        en: 'CLICK! The hatch to the deck swings open and the sun shines on you. Captain Kluif stands at the helm and laughs. ‘Well done, sailor! Ko thought my map was a cookie. But the really big treasure? That is still somewhere on the island. A riddle for next time!’'
      },
      items: { matrozensleutel: { emoji: '🗝️', nl: 'de zilveren sleutel', en: 'the silver key' } },
      objects: [
        { id: 'rooster', emoji: '📋', name: { nl: 'het wachtrooster', en: 'the watch rota' },
          text: {
            nl: 'Het wachtrooster van de matrozen. ‘Tussen 10 en 12 uur: Ko poetste het dek. Lot hielp de kok in de kombuis. Mo repareerde een zeil.’ Eronder heeft de kapitein geschreven: ‘Tussen 10 en 12 uur is de schatkaart verdwenen.’',
            en: 'The sailors’ watch rota. ‘Between 10 and 12 o’clock: Ko scrubbed the deck. Lot helped the cook in the galley. Mo repaired a sail.’ Underneath the captain has written: ‘Between 10 and 12 o’clock the treasure map disappeared.’'
          } },
        { id: 'kok', emoji: '🍳', name: { nl: 'het briefje van de kok', en: 'the cook’s note' },
          text: {
            nl: 'Een vettig briefje van de kok: ‘Van 10 tot 12 uur stond Lot de hele tijd naast mij in de kombuis. Ze schilde zeker honderd aardappels. Ik zweer het, bij mijn pollepel!’',
            en: 'A greasy note from the cook: ‘From 10 to 12 o’clock Lot stood next to me in the galley the whole time. She peeled at least a hundred potatoes. I swear it, by my ladle!’'
          } },
        { id: 'zeil', emoji: '⛵', name: { nl: 'het briefje van de bootsman', en: 'the boatswain’s note' },
          text: {
            nl: 'Een briefje van de bootsman, vastgeprikt aan een stuk zeildoek: ‘Mo en ik hebben tussen 10 en 12 uur samen het grote zeil gerepareerd. Hij is geen minuut weggeweest.’',
            en: 'A note from the boatswain, pinned to a piece of sailcloth: ‘Mo and I repaired the big sail together between 10 and 12 o’clock. He was not gone for a single minute.’'
          } },
        { id: 'kisten', emoji: '🧰', name: { nl: 'de matrozenkisten', en: 'the sailors’ chests' },
          text: {
            nl: 'In de hoek staan drie kisten, elk met een naam erop: Ko, Lot en Mo. De kapitein heeft geschreven: ‘Open alleen de kist van de dief. Een fout slot kan alarm slaan!’',
            en: 'In the corner stand three chests, each with a name on it: Ko, Lot and Mo. The captain has written: ‘Open only the chest of the thief. A wrong lock may sound the alarm!’'
          },
          lock: {
            kind: 'choice', answer: 0,
            options: [{ emoji: '🧔', nl: 'de kist van Ko', en: 'Ko’s chest' }, { emoji: '👩‍🦰', nl: 'de kist van Lot', en: 'Lot’s chest' }, { emoji: '👨', nl: 'de kist van Mo', en: 'Mo’s chest' }],
            ask: { nl: 'Wiens kist moet je openen?', en: 'Whose chest must you open?' },
            hint: { nl: 'De kaart verdween tussen 10 en 12 uur. Wie van de drie had in die tijd een getuige, en wie niet?', en: 'The map disappeared between 10 and 12 o’clock. Which of the three had a witness during that time, and which did not?' },
            fail: { nl: 'Die matroos heeft een getuige. Zoek degene die tussen 10 en 12 uur helemaal alleen was.', en: 'That sailor has a witness. Look for the one who was completely alone between 10 and 12 o’clock.' }
          },
          opened: {
            nl: 'In Ko’s kist ligt een zilveren sleutel en… een half opgegeten stuk schatkaart met tandafdrukken. Ko heeft de kaart per ongeluk voor een koekje aangezien!',
            en: 'In Ko’s chest lies a silver key and… a half-eaten piece of treasure map with teeth marks. Ko mistook the map for a cookie!'
          },
          gives: 'matrozensleutel' },
        { id: 'kist', emoji: '🔒', name: { nl: 'de zware kist', en: 'the heavy chest' },
          text: { nl: 'Een zware kist op het bureau met een groot slot. In het slot zit een sleutelgat.', en: 'A heavy chest on the desk with a big lock. There is a keyhole in the lock.' },
          lock: { kind: 'item', item: 'matrozensleutel', need: { nl: 'De kist zit op slot. Je hebt de sleutel van de dief nodig.', en: 'The chest is locked. You need the thief’s key.' } },
          opened: {
            nl: 'In de kist ligt een perkament met een geheim bericht: ‘Elke letter is één plaats opgeschoven in het alfabet: ik schreef steeds de volgende letter op. Het wachtwoord van het luik is: TDIBU.’ In de wand achter de kist zie je ineens een luik met een toetsenbordje.',
            en: 'In the chest lies a parchment with a secret message: ‘Every letter has been moved one place along in the alphabet: I always wrote down the next letter. The password of the hatch is: TDIBU.’ In the wall behind the chest you suddenly see a hatch with a little keyboard.'
          },
          reveals: ['luik'] },
        { id: 'kijker', emoji: '🔭', name: { nl: 'de kijker', en: 'the spyglass' },
          text: {
            nl: 'Een koperen verrekijker. Je ziet een meeuw die een visgraat steelt. Meer niet.',
            en: 'A copper spyglass. You see a seagull stealing a fish bone. Nothing more.'
          } },
        { id: 'vlag', emoji: '🏴‍☠️', name: { nl: 'de vlag', en: 'the flag' },
          text: {
            nl: 'De piratenvlag van de Zeemeeuw, netjes opgevouwen. Op de achterkant staat met stift: ‘Eigendom van K. Kluif. Wassen op 30 graden.’',
            en: 'The pirate flag of the Seagull, neatly folded. On the back it says in marker: ‘Property of K. Kluif. Wash at 30 degrees.’'
          } },
        { id: 'luik', emoji: '🔐', name: { nl: 'het geheime luik', en: 'the secret hatch' }, hidden: true,
          text: {
            nl: 'Een luik naar het dek met een toetsenbordje voor een woord van vijf letters.',
            en: 'A hatch to the deck with a little keyboard for a word of five letters.'
          },
          lock: {
            kind: 'code', answer: 'schat',
            ask: { nl: 'Welk wachtwoord moet je typen?', en: 'Which password must you type?' },
            hint: { nl: 'Elke letter is de volgende letter van het alfabet. Ga bij elke letter één plaats terug: T wordt S.', en: 'Every letter is the next letter of the alphabet. Go back one place for every letter: T becomes S.' }
          },
          opened: { nl: 'KLIK! Het luik klapt open en je ruikt de zeelucht.', en: 'CLICK! The hatch flips open and you smell the sea air.' },
          exit: true }
      ]
    }
  ]
});
