/* Ontsnappingskamers - zaak 1: De bibliotheek van professor Plof.
   Level 1 = groep 6, level 2 = groep 7, level 3 = groep 8. Een kamer erbij?
   Zet er een object achteraan `rooms` bij (zie het formaat bovenaan js/games/escape.js)
   en draai `node tools/validate.js`: dat speelt de kamer na en zegt of hij op te lossen is. */
addEscape({
  id: 'plof', emoji: '📚', hue: 285,
  title: { nl: 'De bibliotheek van professor Plof', en: 'Professor Plof’s Library' },
  blurb: {
    nl: 'Je zit opgesloten in de bibliotheek van de verstrooide professor Plof. Lees de aanwijzingen, kraak de sloten en kom eruit!',
    en: 'You are locked in the library of absent-minded Professor Plof. Read the clues, crack the locks and get out!'
  },
  rooms: [
    /* ------------------------------------------------------------------ */
    {
      id: 'plof-1', lv: 1,
      title: { nl: 'De leeszaal', en: 'The reading room' },
      intro: {
        nl: 'Je brengt een boek terug naar de bibliotheek van professor Plof. Het is er heel stil. Plotseling valt de zware deur achter je dicht: KLIK! Op de deur hangt een briefje: ‘Beste lezer, de sleutel ligt in de kluis. De code bestaat uit drie cijfers. Je vindt ze allemaal in deze kamer. Veel succes! – Plof’',
        en: 'You are returning a book to Professor Plof’s library. It is very quiet. Suddenly the heavy door falls shut behind you: CLICK! A note hangs on the door: ‘Dear reader, the key is in the safe. The code has three digits. You can find all of them in this room. Good luck! – Plof’'
      },
      outro: {
        nl: 'Je stapt de gang in. Aan het eind begint een oude trap die naar beneden gaat, naar het archief. Beneden hoor je iemand mompelen: ‘Waar heb ik mijn bril nou weer gelegd?’ Dat moet professor Plof zijn!',
        en: 'You step into the corridor. At the end an old staircase leads down to the archive. Downstairs you hear somebody muttering: ‘Where on earth did I put my glasses?’ That must be Professor Plof!'
      },
      items: { sleutel: { emoji: '🗝️', nl: 'de sleutel', en: 'the key' } },
      objects: [
        { id: 'klok', emoji: '🕰️', name: { nl: 'de klok', en: 'the clock' },
          text: {
            nl: 'De grote klok aan de muur is blijven staan. De kleine wijzer staat precies op de 4 en de grote wijzer op de 12. Onder de klok hangt een kaartje: ‘Het eerste cijfer van de code is het uur waarop deze klok stilstaat.’',
            en: 'The big clock on the wall has stopped. The short hand is exactly on the 4 and the long hand on the 12. Under the clock hangs a card: ‘The first digit of the code is the hour at which this clock has stopped.’'
          } },
        { id: 'plant', emoji: '🪴', name: { nl: 'de plant', en: 'the plant' },
          text: {
            nl: 'Op de vensterbank staat een plant met bessen. Er hangen 7 rode bessen en 2 groene bessen aan. In de pot steekt een kaartje: ‘Het tweede cijfer van de code is het aantal rode bessen.’',
            en: 'On the windowsill stands a plant with berries. There are 7 red berries and 2 green berries on it. A card sticks out of the pot: ‘The second digit of the code is the number of red berries.’'
          } },
        { id: 'kat', emoji: '🐈', name: { nl: 'de kat', en: 'the cat' },
          text: {
            nl: 'Op een kussen slaapt Mimi, de kat van de professor. Om haar nek hangt een bandje met drie belletjes en een naamplaatje. Op haar etensbakje is een kaartje geplakt: ‘Het derde cijfer van de code is het aantal belletjes aan Mimi’s bandje.’',
            en: 'On a cushion sleeps Mimi, the professor’s cat. Around her neck hangs a collar with three little bells and a name tag. A card is stuck on her food bowl: ‘The third digit of the code is the number of little bells on Mimi’s collar.’'
          } },
        { id: 'kast', emoji: '📚', name: { nl: 'de boekenkast', en: 'the bookcase' },
          text: {
            nl: 'De boekenkast staat vol met boeken over draken, over taarten en over één boek zonder letters. Tussen twee boeken steekt een stoffig briefje: ‘Wie de kluis wil openen, moet álle kaartjes in de kamer lezen en de cijfers in de goede volgorde zetten.’',
            en: 'The bookcase is full of books about dragons, about cakes and about one book without letters. A dusty note sticks out between two books: ‘Whoever wants to open the safe must read ALL the cards in the room and put the digits in the right order.’'
          } },
        { id: 'kluis', emoji: '🔐', name: { nl: 'de kluis', en: 'the safe' },
          text: {
            nl: 'In de hoek staat een zware kluis met een slot voor een code van drie cijfers. Er hangt een plakkertje op: ‘Zet de cijfers in de volgorde van de kaartjes: eerste, tweede, derde.’',
            en: 'In the corner stands a heavy safe with a lock for a code of three digits. A sticker says: ‘Put the digits in the order of the cards: first, second, third.’'
          },
          lock: {
            kind: 'code', answer: '473',
            ask: { nl: 'Welke code van drie cijfers opent de kluis?', en: 'Which code of three digits opens the safe?' },
            hint: { nl: 'Zoek de kaartjes bij de klok, de plant en de kat. Welk cijfer is het eerste, het tweede en het derde?', en: 'Find the cards at the clock, the plant and the cat. Which digit is the first, the second and the third?' }
          },
          opened: {
            nl: 'KLIK! De kluis zwaait open. Er ligt een zilveren sleutel in met een label: ‘voor de deur’.',
            en: 'CLICK! The safe swings open. Inside lies a silver key with a label: ‘for the door’.'
          },
          gives: 'sleutel' },
        { id: 'deur', emoji: '🚪', name: { nl: 'de deur', en: 'the door' },
          text: { nl: 'De zware houten deur. Hij zit stevig op slot.', en: 'The heavy wooden door. It is locked tight.' },
          lock: { kind: 'item', item: 'sleutel',
            need: { nl: 'De deur zit op slot. Je hebt een sleutel nodig.', en: 'The door is locked. You need a key.' } },
          opened: { nl: 'Je steekt de sleutel in het slot en draait hem om. KLIK! De deur zwaait open.', en: 'You put the key in the lock and turn it. CLICK! The door swings open.' },
          exit: true }
      ]
    },

    /* ------------------------------------------------------------------ */
    {
      id: 'plof-2', lv: 2,
      title: { nl: 'Het archief', en: 'The archive' },
      intro: {
        nl: 'Je loopt de trap af en komt in het archief: een lage kamer vol laden en dozen. Achter je klapt het luik dicht en het slot springt dicht. Op een bordje staat: ‘Hier ligt alles wat professor Plof ooit heeft opgeschreven. Pas op: zijn slimste geheimen staan in de kleine lettertjes.’',
        en: 'You walk down the stairs and arrive in the archive: a low room full of drawers and boxes. Behind you the hatch slams and the lock clicks. A sign says: ‘Everything Professor Plof ever wrote down is kept here. Careful: his cleverest secrets are in the small print.’'
      },
      outro: {
        nl: 'Achter de geheime deur klim je een wenteltrap op. Boven hoor je een stem uit een luidspreker: ‘Hallo? Is daar iemand? Ik zit al drie dagen vast in mijn eigen torenkamer!’ Dat is professor Plof zelf!',
        en: 'Behind the secret door you climb a spiral staircase. Upstairs you hear a voice from a loudspeaker: ‘Hello? Is anybody there? I have been stuck in my own tower room for three days!’ That is Professor Plof himself!'
      },
      items: { bril: { emoji: '👓', nl: 'de bril van de professor', en: 'the professor’s glasses' } },
      objects: [
        { id: 'gedicht', emoji: '📜', name: { nl: 'het gedicht', en: 'the poem' },
          text: {
            nl: 'Aan de muur hangt een gedicht in een lijstje:\n\nLangzaam gaat de zon in het westen onder,\nIn de gang brandt nog één lamp.\nCitroenthee staat koud op tafel,\nHier in het archief is het stil.\nTel de eerste letters van elke regel: daar zit het woord.',
            en: 'On the wall hangs a poem in a frame (it is in Dutch, just like the secret word):\n\nLangzaam gaat de zon in het westen onder,\nIn de gang brandt nog één lamp.\nCitroenthee staat koud op tafel,\nHier in het archief is het stil.\nTel de eerste letters van elke regel: daar zit het woord.\n\nThe last line says: count the first letters of every line: that is where the word is.'
          } },
        { id: 'kistje', emoji: '🧰', name: { nl: 'het kistje', en: 'the little chest' },
          text: {
            nl: 'Een houten kistje met een woordslot van vijf letters. Op het deksel staat: ‘Het woord staat verstopt in het gedicht.’',
            en: 'A wooden chest with a word lock of five letters. On the lid it says: ‘The word is hidden in the poem.’'
          },
          lock: {
            kind: 'code', answer: 'licht',
            ask: { nl: 'Welk woord van vijf letters staat verstopt in het gedicht?', en: 'Which five-letter word is hidden in the poem?' },
            hint: { nl: 'Kijk naar de eerste letter van elke regel van het gedicht. Zet ze achter elkaar.', en: 'Look at the first letter of every line of the poem. Put them one after the other.' }
          },
          opened: {
            nl: 'KLIK! In het kistje ligt een bril met een plakkertje: ‘Eigendom van prof. Plof’. Misschien kun je er iets mee lezen!',
            en: 'CLICK! Inside the chest lies a pair of glasses with a sticker: ‘Property of Prof. Plof’. Maybe you can read something with them!'
          },
          gives: 'bril' },
        { id: 'briefje', emoji: '🔍', name: { nl: 'het kleine briefje', en: 'the tiny note' },
          text: {
            nl: 'Een stukje papier vol piepkleine lettertjes. Zonder bril kun je er niets van lezen.',
            en: 'A piece of paper full of tiny letters. You cannot read any of it without glasses.'
          },
          lock: { kind: 'item', item: 'bril',
            need: { nl: 'De letters zijn veel te klein. Je hebt een bril nodig.', en: 'The letters are far too small. You need glasses.' } },
          opened: {
            nl: 'Met de bril kun je het lezen: ‘Het slot van de lade gaat open met mijn leeftijd op de dag dat de bibliotheek werd geopend. Zoek de foto en de gedenksteen.’',
            en: 'With the glasses you can read it: ‘The lock of the drawer opens with my age on the day the library was opened. Look for the photo and the memorial stone.’'
          } },
        { id: 'foto', emoji: '🖼️', name: { nl: 'de foto', en: 'the photo' },
          text: {
            nl: 'Een foto van professor Plof met een grote taart. Op de taart staan de cijfers 4 en 0. Op de achterkant staat: ‘Mijn 40e verjaardag, in het jaar 2005.’',
            en: 'A photo of Professor Plof with a big cake. The numbers 4 and 0 are on the cake. On the back it says: ‘My 40th birthday, in the year 2005.’'
          } },
        { id: 'steen', emoji: '🪨', name: { nl: 'de gedenksteen', en: 'the memorial stone' },
          text: {
            nl: 'In de muur zit een gedenksteen met de tekst: ‘Deze bibliotheek werd geopend in het jaar 1985.’',
            en: 'In the wall is a memorial stone with the text: ‘This library was opened in the year 1985.’'
          } },
        { id: 'lade', emoji: '🗄️', name: { nl: 'de lade', en: 'the drawer' },
          text: {
            nl: 'Een brede lade met een slot voor een getal van twee cijfers. Er staat geen uitleg bij.',
            en: 'A wide drawer with a lock for a number of two digits. There is no explanation with it.'
          },
          lock: {
            kind: 'code', answer: '20',
            ask: { nl: 'Welk getal van twee cijfers opent de lade?', en: 'Which number of two digits opens the drawer?' },
            hint: { nl: 'Lees het briefje met de bril. Hoe oud was de professor toen de bibliotheek openging? Bekijk de foto en de gedenksteen.', en: 'Read the note with the glasses. How old was the professor when the library opened? Look at the photo and the memorial stone.' }
          },
          opened: {
            nl: 'In de lade ligt een briefje: ‘Trek de boeken uit de kast in deze volgorde. Begin met het boek waar de zon op lijkt. Daarna pak je het boek met de kleur van het gras. Ten slotte trek je het boek met de kleur van de lucht. Het rode boek raak je nooit aan!’ Ineens zie je een boekenkast die er eerst niet was.',
            en: 'In the drawer lies a note: ‘Pull the books out of the bookcase in this order. Start with the book that looks like the sun. After that take the book with the colour of grass. Finally pull the book with the colour of the sky. Never touch the red book!’ Suddenly you see a bookcase that was not there before.'
          },
          reveals: ['kast'] },
        { id: 'koffer', emoji: '🧳', name: { nl: 'de koffer', en: 'the suitcase' },
          text: {
            nl: 'Een oude koffer vol opgevouwen kaarten van steden die niet bestaan. Op één kaart staat: ‘Hier zijn draken.’ Verder niets bijzonders.',
            en: 'An old suitcase full of folded maps of cities that do not exist. On one map it says: ‘Here be dragons.’ Nothing special otherwise.'
          } },
        { id: 'kast', emoji: '📚', name: { nl: 'de boekenkast', en: 'the bookcase' }, hidden: true,
          text: {
            nl: 'Een lange boekenkast met vier opvallende boeken: een rood, een blauw, een groen en een geel boek. De kast staat een beetje scheef, alsof hij bewogen kan worden.',
            en: 'A long bookcase with four striking books: a red, a blue, a green and a yellow book. The bookcase is slightly crooked, as if it could be moved.'
          },
          lock: {
            kind: 'seq', answer: [3, 2, 1],
            options: [{ emoji: '🔴', nl: 'rood boek', en: 'red book' }, { emoji: '🔵', nl: 'blauw boek', en: 'blue book' },
                      { emoji: '🟢', nl: 'groen boek', en: 'green book' }, { emoji: '🟡', nl: 'geel boek', en: 'yellow book' }],
            ask: { nl: 'In welke volgorde trek je de boeken uit de kast?', en: 'In which order do you pull the books out of the bookcase?' },
            hint: { nl: 'De zon is geel, gras is groen en de lucht is blauw. Let op de woorden eerst, daarna en ten slotte.', en: 'The sun is yellow, grass is green and the sky is blue. Watch the words first, after that and finally.' }
          },
          opened: { nl: 'De kast zwaait langzaam open: het is een geheime deur! Daarachter begint een wenteltrap omhoog.', en: 'The bookcase slowly swings open: it is a secret door! Behind it a spiral staircase leads upwards.' },
          exit: true }
      ]
    },

    /* ------------------------------------------------------------------ */
    {
      id: 'plof-3', lv: 3,
      title: { nl: 'De torenkamer', en: 'The tower room' },
      intro: {
        nl: 'Je klimt de wenteltrap op en komt in de torenkamer van professor Plof: een ronde kamer vol boeken, een telescoop en wonderlijke apparaten. Uit een luidspreker klinkt zijn stem: ‘Welkom, redder! Ik heb mijn kamer zo slim beveiligd dat ik er zelf niet meer uit kom. Los de raadsels op en haal ons hieruit!’ De deur zit op slot.',
        en: 'You climb the spiral staircase and arrive in Professor Plof’s tower room: a round room full of books, a telescope and strange machines. His voice sounds from a loudspeaker: ‘Welcome, rescuer! I secured my room so cleverly that I cannot get out myself any more. Solve the riddles and get us out of here!’ The door is locked.'
      },
      outro: {
        nl: 'KLIK! De deur zwaait open en je rolt bijna de trap af, recht in de armen van professor Plof. ‘Ik heb mijn bril terug en mijn bibliotheek is gered! Dankzij jou!’ roept hij. Dan fluistert hij: ‘Eh… er is nog een geheim kamertje onder de grond, maar dat bewaren we voor een volgende keer.’',
        en: 'CLICK! The door swings open and you almost tumble down the stairs, straight into the arms of Professor Plof. ‘I have my glasses back and my library is saved! Thanks to you!’ he shouts. Then he whispers: ‘Er… there is still a secret little room underground, but we will save that for next time.’'
      },
      items: { sleutel: { emoji: '🗝️', nl: 'de zware sleutel', en: 'the heavy key' } },
      objects: [
        { id: 'luidspreker', emoji: '📢', name: { nl: 'de luidspreker', en: 'the loudspeaker' },
          text: {
            nl: 'Uit de luidspreker klinkt de stem van de professor: ‘Er zijn drie sloten! Eerst moet je de goede doos vinden, want daar ligt een sleutel in. Daarna volgt een wachtwoord dat ik achterstevoren heb opgeschreven. Het laatste slot is een rekensom met een prijslijst. Succes!’',
            en: 'The professor’s voice comes out of the loudspeaker: ‘There are three locks! First you must find the right box, because a key is in it. Then comes a password that I wrote down backwards. The last lock is a sum with a price list. Good luck!’'
          } },
        { id: 'dozen', emoji: '📦', name: { nl: 'de drie dozen', en: 'the three boxes' },
          text: {
            nl: 'Op de tafel staan drie dozen. Op elke doos zit een briefje. Op doos 1 staat: ‘De sleutel ligt in deze doos.’ Op doos 2 staat: ‘De sleutel ligt niet in deze doos.’ Op doos 3 staat: ‘De sleutel ligt niet in doos 1.’ Een kaartje van de professor zegt: ‘Precies één van deze drie briefjes is waar. De andere twee liegen.’',
            en: 'On the table stand three boxes. A note is stuck on every box. On box 1 it says: ‘The key is in this box.’ On box 2 it says: ‘The key is not in this box.’ On box 3 it says: ‘The key is not in box 1.’ A card from the professor says: ‘Exactly one of these three notes is true. The other two are lying.’'
          },
          lock: {
            kind: 'choice', answer: 1,
            options: [{ emoji: '1️⃣', nl: 'doos 1', en: 'box 1' }, { emoji: '2️⃣', nl: 'doos 2', en: 'box 2' }, { emoji: '3️⃣', nl: 'doos 3', en: 'box 3' }],
            ask: { nl: 'In welke doos ligt de sleutel?', en: 'In which box is the key?' },
            hint: { nl: 'Stel dat de sleutel in doos 1 ligt: hoeveel briefjes kloppen dan? Probeer dat ook voor doos 2 en doos 3. Er moet precies één briefje kloppen.', en: 'Suppose the key is in box 1: how many notes are true then? Try that for box 2 and box 3 as well. Exactly one note must be true.' },
            fail: { nl: 'Dat klopt niet: dan zijn er te veel (of te weinig) briefjes waar. Probeer elke doos uit.', en: 'That is not right: then too many (or too few) notes would be true. Try out every box.' }
          },
          opened: { nl: 'Je opent doos 2. Daar ligt een zware sleutel in!', en: 'You open box 2. A heavy key lies inside!' },
          gives: 'sleutel' },
        { id: 'kist', emoji: '🧰', name: { nl: 'de kist', en: 'the chest' },
          text: { nl: 'Een zware kist met een groot slot. Er zit een sleutelgat in.', en: 'A heavy chest with a big lock. There is a keyhole in it.' },
          lock: { kind: 'item', item: 'sleutel',
            need: { nl: 'De kist zit op slot. Je hebt een sleutel nodig.', en: 'The chest is locked. You need a key.' } },
          opened: {
            nl: 'In de kist ligt het logboek van de professor. Je slaat het open bij de laatste bladzijde: ‘Het wachtwoord van de telescoop heb ik achterstevoren opgeschreven, zodat niemand het kan lezen: TEEMOK. Lees het van rechts naar links.’ Achter de kist zie je ineens een telescoop staan.',
            en: 'In the chest lies the professor’s logbook. You open it at the last page: ‘I wrote down the password of the telescope backwards, so that nobody can read it: TEEMOK. Read it from right to left.’ Suddenly you notice a telescope behind the chest.'
          },
          reveals: ['telescoop'] },
        { id: 'telescoop', emoji: '🔭', name: { nl: 'de telescoop', en: 'the telescope' }, hidden: true,
          text: {
            nl: 'Een grote telescoop met een toetsenbordje onder de lens. Op een schermpje staat: ‘Typ het wachtwoord.’',
            en: 'A big telescope with a little keyboard under the lens. A small screen says: ‘Type the password.’'
          },
          lock: {
            kind: 'code', answer: 'komeet',
            ask: { nl: 'Welk wachtwoord moet je typen?', en: 'Which password must you type?' },
            hint: { nl: 'Lees het woord uit het logboek van achteren naar voren: begin met de laatste letter.', en: 'Read the word from the logbook from back to front: start with the last letter.' }
          },
          opened: {
            nl: 'De telescoop zoemt en draait naar de nachthemel. Een laatje schuift open en er valt een kassabon uit: de prijslijst van de professor!',
            en: 'The telescope hums and turns towards the night sky. A little drawer slides open and a receipt falls out: the professor’s price list!'
          },
          reveals: ['bon'] },
        { id: 'bon', emoji: '🧾', name: { nl: 'de kassabon', en: 'the receipt' }, hidden: true,
          text: {
            nl: 'De kassabon van de boekwinkel: ‘Draken voor beginners € 12. Het grote kookboek € 8. Sterren kijken € 9. Raadsels voor reuzen € 15. Mijn kat en ik € 6.’ Daaronder staat met pen: ‘Gekocht door prof. Plof.’',
            en: 'The receipt from the bookshop: ‘Dragons for Beginners € 12. The Big Cookbook € 8. Stargazing € 9. Riddles for Giants € 15. My Cat and Me € 6.’ Underneath it says in pen: ‘Bought by Prof. Plof.’'
          } },
        { id: 'reageerbuis', emoji: '🧪', name: { nl: 'de reageerbuisjes', en: 'the test tubes' },
          text: {
            nl: 'Een rij reageerbuisjes met gekleurd water. Op een etiket staat: ‘Niet opdrinken! Ook niet in de buurt van de kat brengen.’ Verder niets nuttigs.',
            en: 'A row of test tubes with coloured water. A label says: ‘Do not drink! Do not bring near the cat either.’ Nothing useful otherwise.'
          } },
        { id: 'globe', emoji: '🌍', name: { nl: 'de globe', en: 'the globe' },
          text: {
            nl: 'Een globe waar Nederland ontbreekt. Op een plakkertje staat: ‘Heb ik zelf weggehaald om te zien of iemand het merkt.’ Je merkt het wel, maar het helpt je niet.',
            en: 'A globe on which the Netherlands is missing. A sticker says: ‘I removed it myself to see whether anybody notices.’ You do notice, but it does not help you.'
          } },
        { id: 'deur', emoji: '🚪', name: { nl: 'de deur', en: 'the door' },
          text: {
            nl: 'De deur heeft een slot voor een getal van twee cijfers. Op het slot staat: ‘Tel de prijzen in euro’s op van alle boeken die ik voor minder dan 10 euro heb gekocht.’',
            en: 'The door has a lock for a number of two digits. On the lock it says: ‘Add up the prices in euros of all the books I bought for less than 10 euros.’'
          },
          lock: {
            kind: 'code', answer: '23',
            ask: { nl: 'Welk getal opent de deur?', en: 'Which number opens the door?' },
            hint: { nl: 'Zoek de kassabon. Kies alleen de boeken die minder dan € 10 kosten en tel hun prijzen bij elkaar op.', en: 'Find the receipt. Pick only the books that cost less than € 10 and add their prices together.' }
          },
          opened: { nl: 'KLIK! De deur zwaait open.', en: 'CLICK! The door swings open.' },
          exit: true }
      ]
    }
  ]
});
