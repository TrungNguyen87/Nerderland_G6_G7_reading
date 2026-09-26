/* Vervolgverhaal - Sport & Spanning: De keeper die niet durfde
   Hoofdstuk 1 = groep 6 (niveau 2), 2 = groep 7 (niveau 4), 3 = groep 8 (niveau 6). */
addSeries({
  id: 'keeper', topic: 'sport', emoji: '🧤',
  title: { nl: 'De keeper die niet durfde', en: 'The goalkeeper who did not dare' },
  blurb: { nl: 'Mo is bang voor harde ballen. En juist hij moet de nieuwe keeper worden...',
           en: 'Mo is scared of hard balls. And he is the one who has to become the new goalkeeper...' },
  chapters: [
{
  level: 2, emoji: '⚽', scene: 'stadium',
  title: { nl: 'Een nieuwe keeper', en: 'A new goalkeeper' },
  teaser: { nl: 'Durft Mo zaterdag in het doel te staan, nu iedereen om hem heeft gelachen?', en: 'Will Mo dare to stand in goal on Saturday, now that everybody has laughed at him?' },
  text: {
    nl: [
      "Mo is tien jaar en voetbal is zijn lievelingssport. Hij speelt bij FC De Meeuwen. Er is alleen één probleem: Mo is bang voor harde ballen. Als er een bal op hem afkomt, draait hij zich meestal om.",
      "Op een dinsdag vertelt trainer Ilse slecht nieuws. “Onze keeper Daan is verhuisd. We hebben een nieuwe keeper nodig. Wie wil er in het doel staan?” Het blijft stil. Niemand steekt zijn hand op.",
      "“Mo!” roept Jesse, zijn beste vriend. “Mo is de langste van het team!” Iedereen kijkt naar Mo. Zijn buik doet opeens pijn. Maar hij wil niet dat de anderen denken dat hij een bangerik is. Dus zegt hij zacht: “Oké.”",
      "Hij krijgt de grote handschoenen van Daan. Ze ruiken naar gras en zweet. Dan begint de training. Jesse schiet de eerste bal op het doel. Mo knijpt zijn ogen dicht. De bal vliegt langs zijn hoofd het net in.",
      "Een paar jongens lachen. “Hij kijkt niet eens!” roept iemand. Mo voelt zijn wangen warm worden. Trainer Ilse fluit en zegt dat iedereen moet stoppen met lachen. Maar het is al te laat. Mo wil het liefst naar huis.",
      "Na de training hangt er een briefje op de deur van de kleedkamer. Zaterdag spelen ze tegen de Kraaien, de sterkste ploeg van de competitie. Mo leest zijn eigen naam bovenaan de lijst. Achter zijn naam staat één woord: keeper."
    ],
    en: [
      "Mo is ten years old and football is his favourite sport. He plays for FC De Meeuwen. There is just one problem: Mo is scared of hard balls. When a ball comes at him, he usually turns away.",
      "One Tuesday coach Ilse has bad news. “Our goalkeeper Daan has moved away. We need a new goalkeeper. Who wants to stand in goal?” It stays quiet. Nobody raises a hand.",
      "“Mo!” shouts Jesse, his best friend. “Mo is the tallest in the team!” Everybody looks at Mo. Suddenly his tummy hurts. But he does not want the others to think he is a scaredy-cat. So he says quietly: “Okay.”",
      "He gets Daan’s big gloves. They smell of grass and sweat. Then the training starts. Jesse shoots the first ball at the goal. Mo squeezes his eyes shut. The ball flies past his head into the net.",
      "A few boys laugh. “He is not even looking!” somebody shouts. Mo feels his cheeks get hot. Coach Ilse blows her whistle and says everybody has to stop laughing. But it is already too late. Mo would like to go home.",
      "After training a note is hanging on the changing-room door. On Saturday they play the Crows, the strongest team in the league. Mo reads his own name at the top of the list. After his name is one word: goalkeeper."
    ]
  },
  words: [
    { nl: 'bangerik', en: 'scaredy-cat', defNl: 'iemand die snel bang is (een beetje een pestwoord)', defEn: 'somebody who gets scared easily (a bit of a teasing word)' },
    { nl: 'handschoenen', en: 'gloves', defNl: 'kleding voor je handen, met een plekje voor elke vinger', defEn: 'clothing for your hands, with a place for every finger' },
    { nl: 'competitie', en: 'league', defNl: 'een reeks wedstrijden waarin ploegen punten halen', defEn: 'a series of matches in which teams earn points' }
  ],
  questions: [
    { id: 'q1', type: 'mc', skill: 'letterlijk',
      q: { nl: 'Waarom zegt Jesse dat Mo keeper moet worden?', en: 'Why does Jesse say Mo should become goalkeeper?' },
      options: [
        { nl: 'Omdat Mo de langste van het team is', en: 'Because Mo is the tallest in the team' },
        { nl: 'Omdat Mo de beste speler is', en: 'Because Mo is the best player' },
        { nl: 'Omdat Mo het zelf vroeg', en: 'Because Mo asked for it himself' },
        { nl: 'Omdat Mo nieuwe handschoenen heeft', en: 'Because Mo has new gloves' }
      ], answer: 0,
      explain: { nl: 'Jesse roept: “Mo is de langste van het team!”', en: 'Jesse shouts: “Mo is the tallest in the team!”' } },
    { id: 'q2', type: 'tf', skill: 'letterlijk',
      q: { nl: 'Mo steekt meteen zijn hand op om keeper te worden.', en: 'Mo raises his hand straight away to become goalkeeper.' },
      answer: false,
      explain: { nl: 'Niemand steekt zijn hand op. Pas als Jesse zijn naam roept, zegt Mo zacht “Oké”.', en: 'Nobody raises a hand. Only when Jesse calls his name does Mo quietly say “Okay”.' } },
    { id: 'q3', type: 'mc', skill: 'gevolgtrekking',
      q: { nl: 'Waarom zegt Mo toch “Oké”?', en: 'Why does Mo say “Okay” anyway?' },
      options: [
        { nl: 'Hij wil niet dat de anderen denken dat hij bang is', en: 'He does not want the others to think he is scared' },
        { nl: 'Hij wil al jaren keeper worden', en: 'He has wanted to be goalkeeper for years' },
        { nl: 'De trainer dwingt hem', en: 'The coach forces him' },
        { nl: 'Hij vindt harde ballen leuk', en: 'He likes hard balls' }
      ], answer: 0,
      explain: { nl: 'Alinea 3: “hij wil niet dat de anderen denken dat hij een bangerik is.”', en: 'Paragraph 3: “he does not want the others to think he is a scaredy-cat.”' } },
    { id: 'q4', type: 'order', skill: 'volgorde',
      q: { nl: 'Zet op volgorde wat er gebeurt.', en: 'Put what happens in order.' },
      items: [
        { nl: 'Ilse vertelt dat keeper Daan is verhuisd.', en: 'Ilse says goalkeeper Daan has moved away.' },
        { nl: 'Jesse roept dat Mo keeper moet worden.', en: 'Jesse shouts that Mo should be goalkeeper.' },
        { nl: 'Mo knijpt zijn ogen dicht bij de eerste bal.', en: 'Mo squeezes his eyes shut at the first ball.' },
        { nl: 'Mo leest zijn naam op de lijst.', en: 'Mo reads his name on the list.' }
      ], answer: [0, 1, 2, 3],
      explain: { nl: 'Eerst het nieuws, dan de keuze, de training en na de training de lijst.', en: 'First the news, then the choice, the training, and after training the list.' } },
    { id: 'q5', type: 'gap', skill: 'woordenschat',
      q: { nl: 'Iemand die heel snel bang is, noemen anderen soms een ___.', en: 'Somebody who gets scared very easily is sometimes called a ___.' },
      options: [
        { nl: 'bangerik', en: 'scaredy-cat' },
        { nl: 'keeper', en: 'goalkeeper' },
        { nl: 'trainer', en: 'coach' },
        { nl: 'kampioen', en: 'champion' }
      ], answer: 0,
      explain: { nl: 'Een bangerik is iemand die snel bang is. Mo wil niet dat ze hem zo zien.', en: 'A scaredy-cat is somebody who gets scared easily. Mo does not want them to see him that way.' } },
    { id: 'q6', type: 'mc', skill: 'hoofdgedachte',
      q: { nl: 'Waar gaat dit hoofdstuk vooral over?', en: 'What is this chapter mainly about?' },
      options: [
        { nl: 'Mo wordt keeper, terwijl hij bang is voor de bal', en: 'Mo becomes goalkeeper, even though he is scared of the ball' },
        { nl: 'Hoe je een doelpunt maakt', en: 'How to score a goal' },
        { nl: 'Waarom Daan is verhuisd', en: 'Why Daan moved away' },
        { nl: 'De wedstrijd tegen de Kraaien', en: 'The match against the Crows' }
      ], answer: 0,
      explain: { nl: 'Het hoofdstuk draait om Mo, die keeper wordt terwijl hij bang is. De wedstrijd komt pas later.', en: 'The chapter is about Mo becoming goalkeeper while he is scared. The match only comes later.' } }
  ]
},
{
  level: 4, emoji: '🧤', scene: 'stadium',
  title: { nl: 'Kijk naar de naad', en: 'Watch the seam' },
  recap: { nl: 'Mo is bang voor harde ballen, maar toch wordt hij de nieuwe keeper van FC De Meeuwen. Bij zijn eerste training knijpt hij zijn ogen dicht en lachen een paar jongens hem uit. Zaterdag moet hij in het doel staan tegen de Kraaien, de sterkste ploeg.',
           en: 'Mo is scared of hard balls, but he still becomes the new goalkeeper of FC De Meeuwen. At his first training he squeezes his eyes shut and a few boys laugh at him. On Saturday he has to stand in goal against the Crows, the strongest team.' },
  teaser: { nl: 'Wat doet Mo met wat Jesse zei? En durft hij in de finale in het doel te staan?', en: 'What will Mo do about what Jesse said? And will he dare to stand in goal in the final?' },
  text: {
    nl: [
      "De volgende dag bleef trainer Ilse na de training op het veld. “Mag ik je een geheim vertellen?” vroeg ze. “Elke keeper is weleens bang. Dat is heel normaal, want je lichaam wil zich beschermen. Het verschil is wat je met die angst doet.” Ze leerde hem een trucje: kijk niet naar de schutter, maar naar de naad op de bal. Wie zich op één klein ding richt, heeft minder tijd om bang te zijn.",
      "Elke avond oefende Mo in de tuin. Zijn zus Amira gooide ballen, eerst zacht, daarna steeds harder. Ze filmde hem met haar telefoon, zodat hij kon zien wat hij deed. Op de eerste filmpjes draaide hij zijn hoofd nog weg. Op vrijdag hield hij zijn ogen open, zelfs bij de hardste worp.",
      "Zaterdag regende het. De Kraaien waren groot en snel, en na tien minuten stond het al 1-0. De bal rolde tussen Mo's benen door. Hij hoorde iemand zuchten. Maar daarna gebeurde er iets vreemds. Hoe vaker de bal kwam, hoe rustiger Mo werd. Hij keek naar de naad, stapte naar voren en maakte zich breed. Drie keer achter elkaar hield hij de bal tegen.",
      "Ze verloren met 3-2, maar na afloop sloeg trainer Ilse hem op zijn schouder. “Zonder jou was het 8-2 geworden”, zei ze. De weken daarna won FC De Meeuwen twee wedstrijden achter elkaar. Het team mocht meedoen aan de finale van de beker. De tegenstander: de Kraaien.",
      "Op woensdag ging Mo zijn waterfles halen in de kleedkamer. Daar hoorde hij Jesse praten met twee andere jongens. “Die ene bal tussen zijn benen”, zei Jesse. “Met Mo in de goal winnen we de finale nooit.” Mo bleef doodstil staan achter de deur. Zijn beste vriend. Hij liep weg zonder zijn fles. Die avond gooide Amira ballen in de tuin, maar Mo liet ze allemaal liggen."
    ],
    en: [
      "The next day coach Ilse stayed on the pitch after training. “Can I tell you a secret?” she asked. “Every goalkeeper is scared sometimes. That is completely normal, because your body wants to protect itself. The difference is what you do with that fear.” She taught him a trick: do not look at the shooter, but at the seam on the ball. If you focus on one small thing, you have less time to be scared.",
      "Every evening Mo practised in the garden. His sister Amira threw balls, softly at first, then harder and harder. She filmed him with her phone, so he could see what he was doing. In the first videos he still turned his head away. By Friday he kept his eyes open, even at the hardest throw.",
      "On Saturday it rained. The Crows were big and fast, and after ten minutes it was already 1-0. The ball rolled between Mo’s legs. He heard somebody sigh. But then something strange happened. The more often the ball came, the calmer Mo got. He watched the seam, stepped forward and made himself wide. Three times in a row he stopped the ball.",
      "They lost 3-2, but afterwards coach Ilse patted him on the shoulder. “Without you it would have been 8-2,” she said. In the weeks after that FC De Meeuwen won two matches in a row. The team got to play in the cup final. The opponent: the Crows.",
      "On Wednesday Mo went to get his water bottle from the changing room. There he heard Jesse talking to two other boys. “That one ball between his legs,” said Jesse. “With Mo in goal we will never win the final.” Mo stood stock-still behind the door. His best friend. He walked away without his bottle. That evening Amira threw balls in the garden, but Mo let them all lie."
    ]
  },
  words: [
    { nl: 'angst', en: 'fear', defNl: 'het gevoel dat je hebt als je heel bang bent', defEn: 'the feeling you have when you are very scared' },
    { nl: 'schutter', en: 'shooter', defNl: 'de speler die op het doel schiet', defEn: 'the player who shoots at the goal' },
    { nl: 'beker', en: 'cup', defNl: 'een wedstrijd waarbij de winnaar een prijs in de vorm van een grote beker krijgt', defEn: 'a competition in which the winner gets a prize shaped like a big cup' }
  ],
  questions: [
    { id: 'q1', type: 'mc', skill: 'letterlijk',
      q: { nl: 'Welk trucje leerde trainer Ilse aan Mo?', en: 'Which trick did coach Ilse teach Mo?' },
      options: [
        { nl: 'Kijk naar de naad op de bal, niet naar de schutter', en: 'Watch the seam on the ball, not the shooter' },
        { nl: 'Schiet de bal zo hard mogelijk terug', en: 'Kick the ball back as hard as you can' },
        { nl: 'Spring altijd met je ogen dicht', en: 'Always jump with your eyes shut' },
        { nl: 'Blijf de hele tijd op de doellijn staan', en: 'Stay on the goal line the whole time' }
      ], answer: 0,
      explain: { nl: 'Alinea 1: “kijk niet naar de schutter, maar naar de naad op de bal.”', en: 'Paragraph 1: “do not look at the shooter, but at the seam on the ball.”' } },
    { id: 'q2', type: 'mc', skill: 'gevolgtrekking',
      q: { nl: 'Waarom filmde Amira haar broer?', en: 'Why did Amira film her brother?' },
      options: [
        { nl: 'Zodat Mo zelf kon zien of hij nog wegkeek', en: 'So Mo could see for himself whether he still looked away' },
        { nl: 'Om het filmpje op internet te zetten', en: 'To put the video on the internet' },
        { nl: 'Om Mo uit te lachen', en: 'To laugh at Mo' },
        { nl: 'Omdat de trainer dat verplicht had', en: 'Because the coach said she had to' }
      ], answer: 0,
      explain: { nl: 'Ze filmde hem “zodat hij kon zien wat hij deed”. Op de filmpjes zag hij dat hij eerst nog wegdraaide.', en: 'She filmed him “so he could see what he was doing”. In the videos he saw that he still turned away at first.' } },
    { id: 'q3', type: 'mc', skill: 'verwijswoorden',
      q: { nl: '“Dat is heel normaal, want je lichaam wil zich beschermen.” Waar verwijst “dat” naar?', en: '“That is completely normal, because your body wants to protect itself.” What does “that” refer to?' },
      options: [
        { nl: 'Dat elke keeper weleens bang is', en: 'That every goalkeeper is scared sometimes' },
        { nl: 'Dat het zaterdag regent', en: 'That it rains on Saturday' },
        { nl: 'Dat Mo de langste is', en: 'That Mo is the tallest' },
        { nl: 'Dat de Kraaien groot zijn', en: 'That the Crows are big' }
      ], answer: 0,
      explain: { nl: 'Vlak ervoor zegt Ilse: “Elke keeper is weleens bang.” Daar wijst “dat” naar.', en: 'Just before, Ilse says: “Every goalkeeper is scared sometimes.” That is what “that” points to.' } },
    { id: 'q4', type: 'multi', skill: 'letterlijk',
      q: { nl: 'Wat deed Mo in de wedstrijd om de bal tegen te houden? Kies er 3.', en: 'What did Mo do in the match to stop the ball? Pick 3.' },
      options: [
        { nl: 'Hij keek naar de naad', en: 'He watched the seam' },
        { nl: 'Hij stapte naar voren', en: 'He stepped forward' },
        { nl: 'Hij maakte zich breed', en: 'He made himself wide' },
        { nl: 'Hij sloot zijn ogen', en: 'He closed his eyes' },
        { nl: 'Hij riep om hulp', en: 'He shouted for help' }
      ], answer: [0, 1, 2],
      explain: { nl: 'Alinea 3: “Hij keek naar de naad, stapte naar voren en maakte zich breed.”', en: 'Paragraph 3: “He watched the seam, stepped forward and made himself wide.”' } },
    { id: 'q5', type: 'order', skill: 'volgorde',
      q: { nl: 'Zet in de volgorde van het verhaal.', en: 'Put these in the order of the story.' },
      items: [
        { nl: 'Ilse vertelt Mo een geheim.', en: 'Ilse tells Mo a secret.' },
        { nl: 'Amira filmt Mo in de tuin.', en: 'Amira films Mo in the garden.' },
        { nl: 'De bal rolt tussen Mo’s benen door.', en: 'The ball rolls between Mo’s legs.' },
        { nl: 'FC De Meeuwen haalt de finale.', en: 'FC De Meeuwen reaches the final.' },
        { nl: 'Mo hoort Jesse praten in de kleedkamer.', en: 'Mo hears Jesse talking in the changing room.' }
      ], answer: [0, 1, 2, 3, 4],
      explain: { nl: 'Eerst de tip en het oefenen, dan de wedstrijd, de finaleplaats en op woensdag de kleedkamer.', en: 'First the tip and the practice, then the match, the place in the final and on Wednesday the changing room.' } },
    { id: 'q6', type: 'gap', skill: 'woordenschat',
      q: { nl: 'De ___ is de speler die op het doel schiet.', en: 'The ___ is the player who shoots at the goal.' },
      options: [
        { nl: 'schutter', en: 'shooter' },
        { nl: 'keeper', en: 'goalkeeper' },
        { nl: 'scheidsrechter', en: 'referee' },
        { nl: 'trainer', en: 'coach' }
      ], answer: 0,
      explain: { nl: 'De schutter schiet, de keeper houdt tegen. Ilse zegt: kijk niet naar de schutter.', en: 'The shooter shoots, the goalkeeper saves. Ilse says: do not look at the shooter.' } },
    { id: 'q7', type: 'mc', skill: 'structuur',
      q: { nl: 'Met welk woord laat de schrijver in alinea 3 zien dat de wedstrijd een andere kant op gaat?', en: 'With which word does the writer show in paragraph 3 that the match takes a turn?' },
      options: [
        { nl: 'Maar', en: 'But' },
        { nl: 'Zaterdag', en: 'Saturday' },
        { nl: 'Drie', en: 'Three' },
        { nl: 'Regende', en: 'Rained' }
      ], answer: 0,
      explain: { nl: '“Maar daarna gebeurde er iets vreemds.” Het signaalwoord “maar” laat een omslag zien: eerst ging het mis, daarna goed.', en: '“But then something strange happened.” The signal word “but” shows a turn: first it went wrong, then well.' } },
    { id: 'q8', type: 'mc', skill: 'hoofdgedachte',
      q: { nl: 'Waar gaat dit hoofdstuk vooral over?', en: 'What is this chapter mainly about?' },
      options: [
        { nl: 'Mo leert omgaan met zijn angst en wordt beter, tot hij iets pijnlijks hoort', en: 'Mo learns to deal with his fear and gets better, until he hears something painful' },
        { nl: 'Hoe je een goede telefoon kiest om te filmen', en: 'How to choose a good phone for filming' },
        { nl: 'Waarom het in het najaar zo vaak regent', en: 'Why it rains so often in autumn' },
        { nl: 'Hoe de Kraaien de sterkste ploeg werden', en: 'How the Crows became the strongest team' }
      ], answer: 0,
      explain: { nl: 'Mo wordt steeds moediger, maar aan het eind hoort hij zijn beste vriend iets lelijks zeggen.', en: 'Mo gets braver and braver, but at the end he hears his best friend say something unkind.' } }
  ]
},
{
  level: 6, emoji: '🏆', scene: 'stadium',
  title: { nl: 'Bang en het toch doen', en: 'Scared and doing it anyway' },
  recap: { nl: 'Met hulp van trainer Ilse en zijn zus Amira leert Mo om zijn ogen open te houden. FC De Meeuwen haalt de finale van de beker, tegen de Kraaien. Maar dan hoort Mo zijn beste vriend Jesse zeggen: “Met Mo in de goal winnen we de finale nooit.”',
           en: 'With help from coach Ilse and his sister Amira, Mo learns to keep his eyes open. FC De Meeuwen reaches the cup final, against the Crows. But then Mo hears his best friend Jesse say: “With Mo in goal we will never win the final.”' },
  text: {
    nl: [
      "Twee dagen lang zei Mo niets tegen Jesse. Op de ochtend van de finale kwam Jesse naar hem toe in de kleedkamer. “Amira zei dat je me hebt gehoord”, zei hij. Hij keek naar zijn schoenen. “Het spijt me. Ik was eigenlijk boos op mezelf, omdat ik die wedstrijd drie kansen heb gemist. Het was makkelijker om het op jou te gooien.” Mo dacht even na. Toen gaf hij Jesse een boks. Boos blijven zou het team niet helpen.",
      "De finale was spannend. Na een uur stond het 2-2. Toen ging een speler van de Kraaien hard onderuit en bleef liggen. Mo had de bal. Hij kon hem ver naar voren schoppen, naar Jesse, die vrij stond. In plaats daarvan schopte hij de bal over de zijlijn, zodat de jongen geholpen kon worden. Een paar ouders langs de lijn riepen dat hij gek was. Maar toen de speler weer opstond, gaven de Kraaien de bal netjes terug.",
      "Het werd een strafschoppenserie. Mo wist iets wat de anderen niet wisten. Hij had de filmpjes van de eerste wedstrijd tegen de Kraaien steeds opnieuw bekeken. Hun beste spits schoot zijn strafschoppen altijd naar links als hij zenuwachtig was, en zenuwachtig was hij nu zeker. Hij bleef maar aan zijn sok trekken.",
      "Bij de vijfde strafschop stond het 4-4. De spits van de Kraaien legde de bal neer. Mo keek niet naar zijn gezicht, maar naar de naad op de bal. Hij dook naar links en voelde de bal hard tegen zijn handschoen slaan. Gered. Daarna schoot Jesse de laatste strafschop keihard in de kruising. Het hele team sprong boven op Mo.",
      "Na afloop kreeg Mo niet alleen de beker, maar ook de fairplayprijs van de competitie. De scheidsrechter vertelde dat het schoppen over de zijlijn het mooiste moment van het seizoen was. Ook de trainer van de Kraaien kwam hem een hand geven. In de krant stond de volgende dag een foto van het hele team, met Mo in het midden.",
      "Die avond vroeg Amira of hij nu nooit meer bang was. Mo schudde zijn hoofd. “Ik was vandaag bij elke bal bang”, zei hij. “Maar moedig zijn betekent niet dat je nergens bang voor bent. Het betekent dat je bang bent en het toch doet.”"
    ],
    en: [
      "For two days Mo did not say anything to Jesse. On the morning of the final Jesse came up to him in the changing room. “Amira said you heard me,” he said. He looked at his shoes. “I am sorry. I was actually angry with myself, because I missed three chances in that match. It was easier to blame you.” Mo thought for a moment. Then he gave Jesse a fist bump. Staying angry would not help the team.",
      "The final was exciting. After an hour it was 2-2. Then a player from the Crows fell hard and stayed down. Mo had the ball. He could kick it far forward, to Jesse, who was free. Instead he kicked the ball over the touchline, so the boy could be helped. A few parents along the line shouted that he was crazy. But when the player got up again, the Crows neatly gave the ball back.",
      "It came down to a penalty shoot-out. Mo knew something the others did not know. He had watched the videos of the first match against the Crows again and again. Their best striker always shot his penalties to the left when he was nervous, and he was certainly nervous now. He kept tugging at his sock.",
      "At the fifth penalty it was 4-4. The Crows’ striker put the ball down. Mo did not look at his face, but at the seam on the ball. He dived to the left and felt the ball slam against his glove. Saved. Then Jesse blasted the last penalty into the top corner. The whole team jumped on top of Mo.",
      "Afterwards Mo got not only the cup, but also the league’s fair-play award. The referee said that kicking the ball over the touchline was the best moment of the season. Even the Crows’ coach came to shake his hand. The next day the newspaper had a photo of the whole team, with Mo in the middle.",
      "That evening Amira asked whether he was never scared any more. Mo shook his head. “I was scared of every ball today,” he said. “But being brave does not mean you are not scared of anything. It means that you are scared and do it anyway.”"
    ]
  },
  words: [
    { nl: 'strafschoppenserie', en: 'penalty shoot-out', defNl: 'als het gelijk blijft, nemen beide ploegen om de beurt strafschoppen', defEn: 'if the score stays level, both teams take turns taking penalties' },
    { nl: 'zenuwachtig', en: 'nervous', defNl: 'onrustig en een beetje bang omdat er iets spannends komt', defEn: 'restless and a bit scared because something exciting is coming' },
    { nl: 'moedig', en: 'brave', defNl: 'zo dat je iets durft, ook al is het eng', defEn: 'daring to do something, even though it is scary' }
  ],
  questions: [
    { id: 'q1', type: 'mc', skill: 'letterlijk',
      q: { nl: 'Waarom zei Jesse dat lelijke over Mo?', en: 'Why did Jesse say that unkind thing about Mo?' },
      options: [
        { nl: 'Hij was eigenlijk boos op zichzelf, omdat hij drie kansen had gemist', en: 'He was actually angry with himself, because he had missed three chances' },
        { nl: 'Hij vond Mo nooit een goede keeper', en: 'He never thought Mo was a good goalkeeper' },
        { nl: 'Amira had hem boos gemaakt', en: 'Amira had made him angry' },
        { nl: 'Hij wilde zelf keeper worden', en: 'He wanted to be goalkeeper himself' }
      ], answer: 0,
      explain: { nl: 'Jesse zegt: “Ik was eigenlijk boos op mezelf, omdat ik die wedstrijd drie kansen heb gemist.”', en: 'Jesse says: “I was actually angry with myself, because I missed three chances in that match.”' } },
    { id: 'q2', type: 'find', skill: 'gevolgtrekking',
      q: { nl: 'Welke zin laat zien naar welke kant de spits zou schieten?', en: 'Which sentence shows which side the striker would shoot to?' },
      options: [
        { nl: 'Het werd een strafschoppenserie.', en: 'It came down to a penalty shoot-out.' },
        { nl: 'Mo wist iets wat de anderen niet wisten.', en: 'Mo knew something the others did not know.' },
        { nl: 'Hun beste spits schoot zijn strafschoppen altijd naar links als hij zenuwachtig was, en zenuwachtig was hij nu zeker.', en: 'Their best striker always shot his penalties to the left when he was nervous, and he was certainly nervous now.' },
        { nl: 'Hij bleef maar aan zijn sok trekken.', en: 'He kept tugging at his sock.' }
      ], answer: 2,
      explain: { nl: 'Deze zin combineert twee dingen: naar links als hij zenuwachtig is, én hij is nu zenuwachtig. Dus: links.', en: 'This sentence combines two things: to the left when he is nervous, and he is nervous now. So: left.' } },
    { id: 'q3', type: 'gap', skill: 'woordenschat',
      q: { nl: 'Wie iets durft te doen terwijl hij bang is, is ___.', en: 'Somebody who dares to do something while scared is ___.' },
      options: [
        { nl: 'moedig', en: 'brave' },
        { nl: 'zenuwachtig', en: 'nervous' },
        { nl: 'boos', en: 'angry' },
        { nl: 'moe', en: 'tired' }
      ], answer: 0,
      explain: { nl: 'Mo zegt het zelf: moedig zijn is bang zijn en het toch doen.', en: 'Mo says it himself: being brave is being scared and doing it anyway.' } },
    { id: 'q4', type: 'order', skill: 'volgorde',
      q: { nl: 'Zet in de volgorde van het verhaal.', en: 'Put these in the order of the story.' },
      items: [
        { nl: 'Jesse zegt sorry in de kleedkamer.', en: 'Jesse says sorry in the changing room.' },
        { nl: 'Mo schopt de bal over de zijlijn.', en: 'Mo kicks the ball over the touchline.' },
        { nl: 'De Kraaien geven de bal terug.', en: 'The Crows give the ball back.' },
        { nl: 'Mo houdt de vijfde strafschop tegen.', en: 'Mo saves the fifth penalty.' },
        { nl: 'Mo krijgt de fairplayprijs.', en: 'Mo gets the fair-play award.' }
      ], answer: [0, 1, 2, 3, 4],
      explain: { nl: 'Eerst de ochtend in de kleedkamer, dan de wedstrijd, de strafschoppen en na afloop de prijs.', en: 'First the morning in the changing room, then the match, the penalties and afterwards the award.' } },
    { id: 'q5', type: 'mc', skill: 'verwijswoorden',
      q: { nl: '“Hij bleef maar aan zijn sok trekken.” Wie is “hij”?', en: '“He kept tugging at his sock.” Who is “he”?' },
      options: [
        { nl: 'De beste spits van de Kraaien', en: 'The Crows’ best striker' },
        { nl: 'Mo', en: 'Mo' },
        { nl: 'Jesse', en: 'Jesse' },
        { nl: 'De scheidsrechter', en: 'The referee' }
      ], answer: 0,
      explain: { nl: 'De zin ervoor gaat over de spits, die zenuwachtig was. Aan zijn sok trekken laat zien hoe zenuwachtig.', en: 'The sentence before is about the striker, who was nervous. Tugging at his sock shows how nervous.' } },
    { id: 'q6', type: 'sort', skill: 'feitmening',
      q: { nl: 'Feit of mening? Zet elke zin in de goede groep.', en: 'Fact or opinion? Put every sentence in the right group.' },
      bins: [ { nl: 'Feit', en: 'Fact' }, { nl: 'Mening', en: 'Opinion' } ],
      items: [
        { nl: 'Na een uur stond het 2-2.', en: 'After an hour it was 2-2.', bin: 0 },
        { nl: 'Het was gek om de bal over de zijlijn te schoppen.', en: 'It was crazy to kick the ball over the touchline.', bin: 1 },
        { nl: 'Mo kreeg de fairplayprijs.', en: 'Mo got the fair-play award.', bin: 0 },
        { nl: 'Dat was het mooiste moment van het seizoen.', en: 'That was the best moment of the season.', bin: 1 }
      ],
      explain: { nl: 'De stand en de prijs kun je nagaan. “Gek” en “het mooiste moment” zijn oordelen van mensen.', en: 'The score and the award can be checked. “Crazy” and “the best moment” are people’s judgements.' } },
    { id: 'q7', type: 'multi', skill: 'letterlijk',
      q: { nl: 'Wat kreeg Mo na afloop? Kies er 3.', en: 'What did Mo get afterwards? Pick 3.' },
      options: [
        { nl: 'De beker', en: 'The cup' },
        { nl: 'De fairplayprijs', en: 'The fair-play award' },
        { nl: 'Een hand van de trainer van de Kraaien', en: 'A handshake from the Crows’ coach' },
        { nl: 'Nieuwe handschoenen', en: 'New gloves' },
        { nl: 'Een plek in een profclub', en: 'A place at a professional club' }
      ], answer: [0, 1, 2],
      explain: { nl: 'Alinea 5: de beker, de fairplayprijs en een hand van de trainer van de Kraaien.', en: 'Paragraph 5: the cup, the fair-play award and a handshake from the Crows’ coach.' } },
    { id: 'q8', type: 'mc', skill: 'doel',
      q: { nl: 'Waarom vertelt de schrijver over de ouders die riepen dat Mo gek was?', en: 'Why does the writer tell you about the parents who shouted that Mo was crazy?' },
      options: [
        { nl: 'Om te laten zien dat fairplay niet makkelijk is, omdat niet iedereen het meteen snapt', en: 'To show that fair play is not easy, because not everybody understands it straight away' },
        { nl: 'Om de ouders uit te lachen', en: 'To make fun of the parents' },
        { nl: 'Om uit te leggen wat een zijlijn is', en: 'To explain what a touchline is' },
        { nl: 'Om te laten zien dat Mo slecht speelde', en: 'To show that Mo played badly' }
      ], answer: 0,
      explain: { nl: 'Mo kiest voor fairplay terwijl mensen hem uitlachen. Daardoor zie je hoe moedig die keuze was.', en: 'Mo chooses fair play while people make fun of him. That shows how brave that choice was.' } },
    { id: 'q9', type: 'tf', skill: 'gevolgtrekking',
      q: { nl: 'In de finale was Mo helemaal niet meer bang.', en: 'In the final Mo was not scared at all any more.' },
      answer: false,
      explain: { nl: 'Mo zegt: “Ik was vandaag bij elke bal bang.” Hij deed het toch.', en: 'Mo says: “I was scared of every ball today.” He did it anyway.' } },
    { id: 'q10', type: 'find', skill: 'hoofdgedachte',
      q: { nl: 'Welke zin geeft het beste weer waar het hele verhaal over gaat?', en: 'Which sentence best sums up what the whole story is about?' },
      options: [
        { nl: 'Boos blijven zou het team niet helpen.', en: 'Staying angry would not help the team.' },
        { nl: 'Daarna schoot Jesse de laatste strafschop keihard in de kruising.', en: 'Then Jesse blasted the last penalty into the top corner.' },
        { nl: 'Mo schudde zijn hoofd.', en: 'Mo shook his head.' },
        { nl: 'Het betekent dat je bang bent en het toch doet.', en: 'It means that you are scared and do it anyway.' }
      ], answer: 3,
      explain: { nl: 'Van het eerste hoofdstuk tot het laatste gaat het over bang zijn en het toch doen.', en: 'From the first chapter to the last, the story is about being scared and doing it anyway.' } }
  ]
}
  ]
});
