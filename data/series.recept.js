/* Vervolgverhaal - Eten & Koken: Het geheime recept van oma
   Hoofdstuk 1 = groep 6 (niveau 2), 2 = groep 7 (niveau 4), 3 = groep 8 (niveau 6). */
addSeries({
  id: 'recept', topic: 'eten', emoji: '🥧',
  title: { nl: 'Het geheime recept van oma', en: 'Grandma’s secret recipe' },
  blurb: { nl: 'Yusuf moet oma’s beroemde appeltaart bakken. Maar het geheim is van de bladzijde afgescheurd...',
           en: 'Yusuf has to bake Grandma’s famous apple pie. But the secret has been torn off the page...' },
  chapters: [
{
  level: 2, emoji: '📖', scene: 'kitchen',
  title: { nl: 'De afgescheurde bladzijde', en: 'The torn page' },
  teaser: { nl: 'Wat is het geheime ingrediënt van oma’s appeltaart?', en: 'What is the secret ingredient of Grandma’s apple pie?' },
  text: {
    nl: [
      "Elk jaar is er in het dorp van Yusuf een bakwedstrijd. En elk jaar wint oma Rosa met haar appeltaart. Mensen komen er zelfs uit andere dorpen voor. Volgens de burgemeester is het de lekkerste taart van Nederland.",
      "Maar deze week is oma van de trap gevallen. Haar pols zit in het gips. “Jij moet dit jaar bakken, Yusuf”, zegt ze vanaf de bank. “Je hebt me zo vaak geholpen. Je kunt het.”",
      "Oma geeft hem haar oude receptenboek. De bladzijden zijn geel en er zitten vlekken van boter op. Achterin staat het recept van de appeltaart. Yusuf leest: appels, bloem, boter, suiker, een ei, kaneel.",
      "Dan ziet hij dat de onderkant van de bladzijde is afgescheurd. Er staat nog maar één stukje van een zin: ‘En het geheim: één theelepel...’ De rest is weg.",
      "“Oma, wat is het geheim?” vraagt Yusuf. Oma glimlacht een beetje raar. “Dat moet je zelf ontdekken”, zegt ze. “Het geheim staat niet in het boek. Het zit in je neus en in je tong.”",
      "Yusuf kijkt naar de kalender. Over zeven dagen is de wedstrijd. Hij heeft een recept zonder geheim, een oma met een pols in het gips, en een keuken vol appels. Hij rolt zijn mouwen op. “Oké”, zegt hij tegen zichzelf. “Dan gaan we proeven.”"
    ],
    en: [
      "Every year there is a baking contest in Yusuf’s village. And every year Grandma Rosa wins with her apple pie. People even come from other villages for it. According to the mayor it is the tastiest pie in the Netherlands.",
      "But this week Grandma fell down the stairs. Her wrist is in plaster. “You have to bake this year, Yusuf,” she says from the sofa. “You have helped me so often. You can do it.”",
      "Grandma gives him her old recipe book. The pages are yellow and there are butter stains on them. At the back is the recipe for the apple pie. Yusuf reads: apples, flour, butter, sugar, an egg, cinnamon.",
      "Then he sees that the bottom of the page has been torn off. Only one bit of a sentence is left: ‘And the secret: one teaspoon...’ The rest is gone.",
      "“Grandma, what is the secret?” asks Yusuf. Grandma gives a slightly odd smile. “You have to find that out yourself,” she says. “The secret is not in the book. It is in your nose and on your tongue.”",
      "Yusuf looks at the calendar. The contest is in seven days. He has a recipe without a secret, a grandma with her wrist in plaster, and a kitchen full of apples. He rolls up his sleeves. “Okay,” he says to himself. “Then we are going to taste.”"
    ]
  },
  words: [
    { nl: 'bakwedstrijd', en: 'baking contest', defNl: 'een wedstrijd waarin mensen laten zien wie het lekkerst bakt', defEn: 'a contest in which people show who bakes best' },
    { nl: 'receptenboek', en: 'recipe book', defNl: 'een boek waarin staat hoe je gerechten maakt', defEn: 'a book that tells you how to make dishes' },
    { nl: 'afgescheurd', en: 'torn off', defNl: 'met een ruk eraf getrokken, zodat er een stuk mist', defEn: 'pulled off with a jerk, so that a piece is missing' }
  ],
  questions: [
    { id: 'q1', type: 'mc', skill: 'letterlijk',
      q: { nl: 'Waarom moet Yusuf dit jaar bakken?', en: 'Why does Yusuf have to bake this year?' },
      options: [
        { nl: 'Oma’s pols zit in het gips', en: 'Grandma’s wrist is in plaster' },
        { nl: 'Oma is op vakantie', en: 'Grandma is on holiday' },
        { nl: 'Oma is het recept vergeten', en: 'Grandma has forgotten the recipe' },
        { nl: 'Yusuf wil oma verslaan', en: 'Yusuf wants to beat Grandma' }
      ], answer: 0,
      explain: { nl: 'Alinea 2: oma is van de trap gevallen en haar pols zit in het gips.', en: 'Paragraph 2: Grandma fell down the stairs and her wrist is in plaster.' } },
    { id: 'q2', type: 'tf', skill: 'letterlijk',
      q: { nl: 'In het recept staat kaneel.', en: 'Cinnamon is in the recipe.' },
      answer: true,
      explain: { nl: 'Alinea 3: appels, bloem, boter, suiker, een ei, kaneel.', en: 'Paragraph 3: apples, flour, butter, sugar, an egg, cinnamon.' } },
    { id: 'q3', type: 'mc', skill: 'gevolgtrekking',
      q: { nl: 'Wat bedoelt oma met: “Het zit in je neus en in je tong”?', en: 'What does Grandma mean by: “It is in your nose and on your tongue”?' },
      options: [
        { nl: 'Yusuf moet door te ruiken en te proeven zelf ontdekken wat het is', en: 'Yusuf has to find out what it is himself by smelling and tasting' },
        { nl: 'Yusuf is verkouden', en: 'Yusuf has a cold' },
        { nl: 'Het geheim is peper', en: 'The secret is pepper' },
        { nl: 'Oma heeft pijn aan haar tong', en: 'Grandma’s tongue hurts' }
      ], answer: 0,
      explain: { nl: 'Je neus ruikt en je tong proeft. Oma wil dat hij het geheim zelf vindt door te proberen.', en: 'Your nose smells and your tongue tastes. Grandma wants him to find the secret himself by trying.' } },
    { id: 'q4', type: 'order', skill: 'volgorde',
      q: { nl: 'Zet op volgorde wat er gebeurt.', en: 'Put what happens in order.' },
      items: [
        { nl: 'Oma valt van de trap.', en: 'Grandma falls down the stairs.' },
        { nl: 'Oma geeft Yusuf het receptenboek.', en: 'Grandma gives Yusuf the recipe book.' },
        { nl: 'Yusuf ziet dat de bladzijde is afgescheurd.', en: 'Yusuf sees the page has been torn.' },
        { nl: 'Yusuf rolt zijn mouwen op.', en: 'Yusuf rolls up his sleeves.' }
      ], answer: [0, 1, 2, 3],
      explain: { nl: 'Eerst het ongeluk, dan het boek, de ontdekking en ten slotte gaat Yusuf aan de slag.', en: 'First the accident, then the book, the discovery and finally Yusuf gets to work.' } },
    { id: 'q5', type: 'gap', skill: 'woordenschat',
      q: { nl: 'Een stuk van een bladzijde dat eraf is getrokken, is ___.', en: 'A piece of a page that has been pulled off has been ___.' },
      options: [
        { nl: 'afgescheurd', en: 'torn off' },
        { nl: 'geplakt', en: 'glued' },
        { nl: 'gevouwen', en: 'folded' },
        { nl: 'gekleurd', en: 'coloured' }
      ], answer: 0,
      explain: { nl: 'De onderkant van de bladzijde is afgescheurd: er mist een stuk, en daarmee het geheim.', en: 'The bottom of the page has been torn off: a piece is missing, and with it the secret.' } },
    { id: 'q6', type: 'mc', skill: 'hoofdgedachte',
      q: { nl: 'Waar gaat dit hoofdstuk vooral over?', en: 'What is this chapter mainly about?' },
      options: [
        { nl: 'Yusuf moet oma’s taart bakken, maar het geheime ingrediënt ontbreekt', en: 'Yusuf has to bake Grandma’s pie, but the secret ingredient is missing' },
        { nl: 'Hoe je een gebroken pols gipst', en: 'How to put a broken wrist in plaster' },
        { nl: 'De geschiedenis van de appeltaart', en: 'The history of apple pie' },
        { nl: 'Een wedstrijd die Yusuf wint', en: 'A contest that Yusuf wins' }
      ], answer: 0,
      explain: { nl: 'Het hele hoofdstuk bouwt op naar het probleem: een recept zonder geheim, en nog maar zeven dagen.', en: 'The whole chapter builds up to the problem: a recipe without its secret, and only seven days to go.' } }
  ]
},
{
  level: 4, emoji: '🧪', scene: 'kitchen',
  title: { nl: 'Zeven taartjes', en: 'Seven little pies' },
  recap: { nl: 'Oma Rosa wint elk jaar de bakwedstrijd met haar appeltaart. Nu haar pols in het gips zit, moet Yusuf bakken. Maar in oma’s receptenboek is het geheim afgescheurd: er staat alleen nog ‘één theelepel...’.',
           en: 'Grandma Rosa wins the baking contest with her apple pie every year. Now that her wrist is in plaster, Yusuf has to bake. But in Grandma’s recipe book the secret has been torn off: only ‘one teaspoon...’ is left.' },
  teaser: { nl: 'Is het recept eigenlijk wel van oma? En wat zat er in die ene theelepel?', en: 'Is the recipe really Grandma’s at all? And what was in that one teaspoon?' },
  text: {
    nl: [
      "Yusuf vroeg zijn vriendin Elif om te helpen. Elif houdt van natuurkunde en ze had meteen een plan. “We bakken elke dag een klein taartje”, zei ze. “Elke keer veranderen we maar één ding. Als je alles tegelijk verandert, weet je nooit wat het verschil maakte.” Zo doen onderzoekers dat ook: dat heet een eerlijke test.",
      "Het eerste taartje maakten ze precies volgens het boek. Het was lekker, maar het smaakte niet als oma's taart. Het deeg was taai. Oma zei vanaf de bank dat de boter koud moest zijn. Elif zocht uit waarom: koude boter smelt pas in de oven, en dan ontstaan er kleine luchtlaagjes in het deeg. Daardoor wordt het bros in plaats van taai.",
      "Ze merkten ook dat de gesneden appels bruin werden als ze even bleven liggen. Dat komt doordat de lucht met stoffen in de appel reageert. Een paar druppels citroensap houden de appels mooi licht. Maar citroen was niet het geheim, want oma's taart smaakt niet naar citroen.",
      "Op dag drie probeerden ze extra kaneel, op dag vier nootmuskaat, op dag vijf bruine suiker. Na elk taartje gaven de buren een cijfer. Mevrouw Jansen gaf de nootmuskaat een zeven, meneer De Vries gaf de bruine suiker een acht. Het taartje met bruine suiker was het lekkerst, maar nog steeds niet hetzelfde. Niemand zei: ‘Dit is hem!’",
      "Op dag zes rook Elif aan de afgescheurde bladzijde. Er zat een klein vlekje op, precies naast het stukje zin. Ze hielden het vlekje onder hun neus tot ze bijna moesten niezen. Het rook scherp en warm tegelijk, maar geen van beiden wist wat het was.",
      "Die middag gingen ze Yusufs naam opgeven voor de wedstrijd. Achter de tafel zat bakker Kees. Toen hij hoorde dat Yusuf oma's appeltaart ging bakken, werd hij rood. “Die appeltaart is niet van jouw oma”, zei hij. “Dat is het recept van míjn moeder.”"
    ],
    en: [
      "Yusuf asked his friend Elif to help. Elif loves physics and she had a plan straight away. “We bake a small pie every day,” she said. “Each time we change only one thing. If you change everything at once, you never know what made the difference.” That is how researchers do it too: it is called a fair test.",
      "They made the first little pie exactly as the book said. It was nice, but it did not taste like Grandma’s pie. The pastry was tough. From the sofa Grandma said the butter had to be cold. Elif found out why: cold butter only melts in the oven, and then little layers of air form in the pastry. That makes it crumbly instead of tough.",
      "They also noticed that the sliced apples turned brown if they were left for a while. That happens because the air reacts with substances in the apple. A few drops of lemon juice keep the apples nice and pale. But lemon was not the secret, because Grandma’s pie does not taste of lemon.",
      "On day three they tried extra cinnamon, on day four nutmeg, on day five brown sugar. After each pie the neighbours gave a mark. Mrs Jansen gave the nutmeg a seven, Mr De Vries gave the brown sugar an eight. The pie with brown sugar was the tastiest, but still not the same. Nobody said: ‘This is it!’",
      "On day six Elif smelled the torn page. There was a small stain on it, right next to the bit of sentence. They held the stain under their noses until they nearly sneezed. It smelled sharp and warm at the same time, but neither of them knew what it was.",
      "That afternoon they went to enter Yusuf’s name for the contest. Behind the table sat baker Kees. When he heard that Yusuf was going to bake Grandma’s apple pie, he went red. “That apple pie is not your grandma’s,” he said. “That is my mother’s recipe.”"
    ]
  },
  words: [
    { nl: 'natuurkunde', en: 'physics', defNl: 'het schoolvak waarin je leert hoe dingen in de natuur werken, zoals warmte en licht', defEn: 'the school subject in which you learn how things in nature work, like heat and light' },
    { nl: 'bros', en: 'crumbly', defNl: 'knapperig, zo dat het makkelijk breekt', defEn: 'crisp, so that it breaks easily' },
    { nl: 'nootmuskaat', en: 'nutmeg', defNl: 'een specerij met een warme smaak, geraspt van een noot', defEn: 'a spice with a warm taste, grated from a nut' }
  ],
  questions: [
    { id: 'q1', type: 'mc', skill: 'letterlijk',
      q: { nl: 'Wat was het plan van Elif?', en: 'What was Elif’s plan?' },
      options: [
        { nl: 'Elke dag een taartje bakken en telkens één ding veranderen', en: 'Bake a small pie every day and change one thing each time' },
        { nl: 'Een taart van oma kopen', en: 'Buy one of Grandma’s pies' },
        { nl: 'Het recept op internet opzoeken', en: 'Look up the recipe on the internet' },
        { nl: 'Bakker Kees om hulp vragen', en: 'Ask baker Kees for help' }
      ], answer: 0,
      explain: { nl: 'Alinea 1: “We bakken elke dag een klein taartje. Elke keer veranderen we maar één ding.”', en: 'Paragraph 1: “We bake a small pie every day. Each time we change only one thing.”' } },
    { id: 'q2', type: 'mc', skill: 'gevolgtrekking',
      q: { nl: 'Waarom verander je bij een eerlijke test maar één ding tegelijk?', en: 'Why do you change only one thing at a time in a fair test?' },
      options: [
        { nl: 'Anders weet je niet welke verandering het verschil maakte', en: 'Otherwise you do not know which change made the difference' },
        { nl: 'Omdat dat goedkoper is', en: 'Because that is cheaper' },
        { nl: 'Omdat oma dat wil', en: 'Because Grandma wants it' },
        { nl: 'Omdat je anders te veel taart eet', en: 'Because otherwise you eat too much pie' }
      ], answer: 0,
      explain: { nl: 'Elif zegt: “Als je alles tegelijk verandert, weet je nooit wat het verschil maakte.”', en: 'Elif says: “If you change everything at once, you never know what made the difference.”' } },
    { id: 'q3', type: 'mc', skill: 'verwijswoorden',
      q: { nl: '“Daardoor wordt het bros in plaats van taai.” Waar verwijst “daardoor” naar?', en: '“That makes it crumbly instead of tough.” What does “that” refer to?' },
      options: [
        { nl: 'De kleine luchtlaagjes in het deeg', en: 'The little layers of air in the pastry' },
        { nl: 'Het citroensap', en: 'The lemon juice' },
        { nl: 'De bruine suiker', en: 'The brown sugar' },
        { nl: 'De bank van oma', en: 'Grandma’s sofa' }
      ], answer: 0,
      explain: { nl: 'De zin ervoor gaat over koude boter die in de oven luchtlaagjes maakt. Die maken het deeg bros.', en: 'The sentence before is about cold butter making layers of air in the oven. Those make the pastry crumbly.' } },
    { id: 'q4', type: 'multi', skill: 'letterlijk',
      q: { nl: 'Wat probeerden ze op dag drie, vier en vijf? Kies er 3.', en: 'What did they try on days three, four and five? Pick 3.' },
      options: [
        { nl: 'Extra kaneel', en: 'Extra cinnamon' },
        { nl: 'Nootmuskaat', en: 'Nutmeg' },
        { nl: 'Bruine suiker', en: 'Brown sugar' },
        { nl: 'Chocola', en: 'Chocolate' },
        { nl: 'Honing', en: 'Honey' }
      ], answer: [0, 1, 2],
      explain: { nl: 'Alinea 4: dag drie kaneel, dag vier nootmuskaat, dag vijf bruine suiker.', en: 'Paragraph 4: day three cinnamon, day four nutmeg, day five brown sugar.' } },
    { id: 'q5', type: 'order', skill: 'volgorde',
      q: { nl: 'Zet in de volgorde van het verhaal.', en: 'Put these in the order of the story.' },
      items: [
        { nl: 'Ze bakken het eerste taartje volgens het boek.', en: 'They bake the first pie by the book.' },
        { nl: 'Elif zoekt uit waarom de boter koud moet zijn.', en: 'Elif finds out why the butter must be cold.' },
        { nl: 'De buren geven cijfers.', en: 'The neighbours give marks.' },
        { nl: 'Elif ruikt aan de bladzijde.', en: 'Elif smells the page.' },
        { nl: 'Bakker Kees zegt dat het recept van zijn moeder is.', en: 'Baker Kees says the recipe is his mother’s.' }
      ], answer: [0, 1, 2, 3, 4],
      explain: { nl: 'Dag één, de uitleg over boter, dag drie tot vijf, dag zes, en die middag de inschrijving.', en: 'Day one, the explanation about butter, days three to five, day six, and that afternoon the entry.' } },
    { id: 'q6', type: 'gap', skill: 'woordenschat',
      q: { nl: 'Deeg dat knapperig is en makkelijk breekt, is ___.', en: 'Pastry that is crisp and breaks easily is ___.' },
      options: [
        { nl: 'bros', en: 'crumbly' },
        { nl: 'taai', en: 'tough' },
        { nl: 'nat', en: 'wet' },
        { nl: 'zuur', en: 'sour' }
      ], answer: 0,
      explain: { nl: 'Bros is het tegenovergestelde van taai: het breekt makkelijk in knapperige stukjes.', en: 'Crumbly is the opposite of tough: it breaks easily into crisp pieces.' } },
    { id: 'q7', type: 'mc', skill: 'structuur',
      q: { nl: 'Wat doet alinea 3 voor het verhaal?', en: 'What does paragraph 3 do for the story?' },
      options: [
        { nl: 'Hij laat zien dat citroen niet het geheim is, dus moeten ze verder zoeken', en: 'It shows that lemon is not the secret, so they have to keep looking' },
        { nl: 'Hij vertelt hoe het verhaal afloopt', en: 'It tells you how the story ends' },
        { nl: 'Hij beschrijft het huis van Elif', en: 'It describes Elif’s house' },
        { nl: 'Hij legt uit wat nootmuskaat is', en: 'It explains what nutmeg is' }
      ], answer: 0,
      explain: { nl: 'Ze leren iets over appels, maar het laatste zinnetje zegt: citroen was het niet. Het zoeken gaat door.', en: 'They learn something about apples, but the last sentence says: it was not lemon. The search goes on.' } },
    { id: 'q8', type: 'mc', skill: 'hoofdgedachte',
      q: { nl: 'Waar gaat dit hoofdstuk vooral over?', en: 'What is this chapter mainly about?' },
      options: [
        { nl: 'Yusuf en Elif zoeken het geheim als echte onderzoekers, en dan komt er een verrassing', en: 'Yusuf and Elif search for the secret like real researchers, and then comes a surprise' },
        { nl: 'Hoe je limonade maakt', en: 'How to make lemonade' },
        { nl: 'De bakkerij van Kees', en: 'Kees’s bakery' },
        { nl: 'Waarom appels gezond zijn', en: 'Why apples are healthy' }
      ], answer: 0,
      explain: { nl: 'Ze testen elke dag één ding, en aan het eind zegt Kees iets wat alles op zijn kop zet.', en: 'They test one thing every day, and at the end Kees says something that turns everything upside down.' } }
  ]
},
{
  level: 6, emoji: '👵', scene: 'kitchen',
  title: { nl: 'Het recept van twee vriendinnen', en: 'The recipe of two friends' },
  recap: { nl: 'Yusuf en Elif bakken elke dag een taartje en veranderen telkens één ding, maar ze vinden het geheim van oma’s appeltaart niet. Op de afgescheurde bladzijde zit een vlekje dat scherp en warm ruikt. En dan zegt bakker Kees dat het recept eigenlijk van zijn moeder is.',
           en: 'Yusuf and Elif bake a little pie every day and change one thing each time, but they do not find the secret of Grandma’s apple pie. On the torn page there is a stain that smells sharp and warm. And then baker Kees says the recipe is actually his mother’s.' },
  text: {
    nl: [
      "Yusuf fietste meteen naar oma. Toen hij vertelde wat Kees had gezegd, werd oma een hele tijd stil. Toen pakte ze een oude foto uit een la. Er stonden twee meisjes op, met schorten voor en meel op hun wangen. “Dat ben ik”, zei oma, “en dat is Truus, de moeder van Kees. We waren vijftien en we bakten elke zaterdag samen.”",
      "Oma vertelde het hele verhaal. Truus en zij hadden de taart samen bedacht. Maar toen ze zeventien waren, kregen ze ruzie. Waarover precies, wist oma niet eens meer. Ze spraken elkaar nooit meer, en allebei bakten ze de taart verder alsof het hun eigen recept was. Oma bekende dat ze de bladzijde zelf had afgescheurd. “Het geheim hoorde bij ons tweeën. Zonder Truus voelde het niet goed om het op te schrijven.”",
      "Het geheim bleek een theelepel geraspte verse gember te zijn. Dat was ook het vlekje op het papier: gember ruikt scherp en warm tegelijk. Elif zocht nog iets anders uit. Oma deed altijd een klein snufje zout in de vulling. Zout maakt zoete dingen niet zouter, maar juist zoeter, omdat het je tong gevoeliger maakt voor smaak.",
      "Yusuf had een idee dat spannender was dan elke taart. Hij fietste naar de bakkerij van Kees en vroeg of ze samen wilden bakken, voor hun moeder en oma. Kees keek hem lang aan. Toen lachte hij voor het eerst. “Mijn moeder had het vaak over een Rosa”, zei hij. “Ze miste haar, denk ik.”",
      "Op de dag van de wedstrijd stond er een taart op tafel met een bordje ernaast: ‘De taart van Rosa en Truus’. Kees had de appels gesneden, Yusuf had het deeg gemaakt. De jury vond hem niet de allermooiste, want de rand was een beetje scheef. Maar hij won wel de publieksprijs, want bijna iedereen die een stukje proefde, kwam terug voor een tweede. Oma zat met haar gipsarm op de eerste rij, naast Kees.",
      "Die avond schreef Yusuf het recept helemaal af in het oude boek. Onder ‘één theelepel’ schreef hij: ‘geraspte gember, een snufje zout, en nooit alleen bakken’. Oma las het en veegde iets uit haar oog. “Dat laatste”, zei ze, “is het belangrijkste ingrediënt.”"
    ],
    en: [
      "Yusuf cycled straight to Grandma. When he told her what Kees had said, Grandma was quiet for a long time. Then she took an old photo out of a drawer. It showed two girls, wearing aprons, with flour on their cheeks. “That is me,” said Grandma, “and that is Truus, Kees’s mother. We were fifteen and we baked together every Saturday.”",
      "Grandma told him the whole story. She and Truus had thought up the pie together. But when they were seventeen, they had a quarrel. What exactly it was about, Grandma could not even remember. They never spoke to each other again, and both of them carried on baking the pie as if it were their own recipe. Grandma admitted that she had torn out the page herself. “The secret belonged to the two of us. Without Truus it did not feel right to write it down.”",
      "The secret turned out to be a teaspoon of freshly grated ginger. That was also the stain on the paper: ginger smells sharp and warm at the same time. Elif found out something else as well. Grandma always put a small pinch of salt in the filling. Salt does not make sweet things saltier, but actually sweeter, because it makes your tongue more sensitive to taste.",
      "Yusuf had an idea that was more exciting than any pie. He cycled to Kees’s bakery and asked whether they could bake together, for their mother and grandma. Kees looked at him for a long time. Then he laughed for the first time. “My mother often talked about a Rosa,” he said. “She missed her, I think.”",
      "On the day of the contest there was a pie on the table with a sign next to it: ‘The pie of Rosa and Truus’. Kees had sliced the apples, Yusuf had made the pastry. The jury did not think it was the most beautiful, because the edge was a bit crooked. But it did win the audience prize, because almost everyone who tasted a piece came back for a second one. Grandma sat in the front row with her arm in plaster, next to Kees.",
      "That evening Yusuf finished writing the recipe in the old book. Under ‘one teaspoon’ he wrote: ‘grated ginger, a pinch of salt, and never bake alone’. Grandma read it and wiped something from her eye. “That last one,” she said, “is the most important ingredient.”"
    ]
  },
  words: [
    { nl: 'gember', en: 'ginger', defNl: 'een wortel met een scherpe, warme smaak, die je vaak raspt', defEn: 'a root with a sharp, warm taste, often grated' },
    { nl: 'bekende', en: 'admitted', defNl: 'gaf toe wat ze eerst geheim hield (bekennen)', defEn: 'owned up to what she had kept secret (to admit)' },
    { nl: 'publieksprijs', en: 'audience prize', defNl: 'een prijs die het publiek kiest, niet de jury', defEn: 'a prize chosen by the audience, not the jury' }
  ],
  questions: [
    { id: 'q1', type: 'mc', skill: 'letterlijk',
      q: { nl: 'Wie is Truus?', en: 'Who is Truus?' },
      options: [
        { nl: 'De moeder van bakker Kees, en vroeger de vriendin van oma', en: 'Baker Kees’s mother, and Grandma’s friend long ago' },
        { nl: 'De oma van Elif', en: 'Elif’s grandma' },
        { nl: 'De burgemeester van het dorp', en: 'The mayor of the village' },
        { nl: 'Iemand van de jury', en: 'A member of the jury' }
      ], answer: 0,
      explain: { nl: 'Alinea 1: Truus is de moeder van Kees. Samen met oma bakte ze vroeger elke zaterdag.', en: 'Paragraph 1: Truus is Kees’s mother. Long ago she baked with Grandma every Saturday.' } },
    { id: 'q2', type: 'find', skill: 'gevolgtrekking',
      q: { nl: 'Welke zin laat zien waarom oma het geheim nooit opschreef?', en: 'Which sentence shows why Grandma never wrote the secret down?' },
      options: [
        { nl: 'Truus en zij hadden de taart samen bedacht.', en: 'She and Truus had thought up the pie together.' },
        { nl: 'Waarover precies, wist oma niet eens meer.', en: 'What exactly it was about, Grandma could not even remember.' },
        { nl: 'Zonder Truus voelde het niet goed om het op te schrijven.', en: 'Without Truus it did not feel right to write it down.' },
        { nl: 'Dat was ook het vlekje op het papier: gember ruikt scherp en warm tegelijk.', en: 'That was also the stain on the paper: ginger smells sharp and warm at the same time.' }
      ], answer: 2,
      explain: { nl: 'Het geheim was van hen samen. Zonder haar vriendin wilde oma het niet opschrijven.', en: 'The secret belonged to them together. Without her friend Grandma did not want to write it down.' } },
    { id: 'q3', type: 'gap', skill: 'woordenschat',
      q: { nl: 'Oma ___ dat ze de bladzijde zelf had afgescheurd.', en: 'Grandma ___ that she had torn out the page herself.' },
      options: [
        { nl: 'bekende', en: 'admitted' },
        { nl: 'vergat', en: 'forgot' },
        { nl: 'bakte', en: 'baked' },
        { nl: 'verstopte', en: 'hid' }
      ], answer: 0,
      explain: { nl: 'Bekennen is iets toegeven wat je eerst geheim hield. Oma vertelde eindelijk de waarheid.', en: 'To admit is to own up to something you had kept secret. Grandma finally told the truth.' } },
    { id: 'q4', type: 'order', skill: 'volgorde',
      q: { nl: 'Zet in de volgorde van het verhaal.', en: 'Put these in the order of the story.' },
      items: [
        { nl: 'Oma laat een oude foto zien.', en: 'Grandma shows an old photo.' },
        { nl: 'Oma vertelt over de ruzie.', en: 'Grandma tells him about the quarrel.' },
        { nl: 'Elif ontdekt wat het zout doet.', en: 'Elif discovers what the salt does.' },
        { nl: 'Yusuf vraagt Kees om samen te bakken.', en: 'Yusuf asks Kees to bake together.' },
        { nl: 'De taart wint de publieksprijs.', en: 'The pie wins the audience prize.' }
      ], answer: [0, 1, 2, 3, 4],
      explain: { nl: 'De foto, het verhaal, het geheim, het plan en de wedstrijd.', en: 'The photo, the story, the secret, the plan and the contest.' } },
    { id: 'q5', type: 'mc', skill: 'verwijswoorden',
      q: { nl: '“Dat laatste”, zei oma, “is het belangrijkste ingrediënt.” Wat is “dat laatste”?', en: '“That last one,” said Grandma, “is the most important ingredient.” What is “that last one”?' },
      options: [
        { nl: 'Nooit alleen bakken', en: 'Never bake alone' },
        { nl: 'De geraspte gember', en: 'The grated ginger' },
        { nl: 'Het snufje zout', en: 'The pinch of salt' },
        { nl: 'De publieksprijs', en: 'The audience prize' }
      ], answer: 0,
      explain: { nl: 'Yusuf schreef drie dingen op. Het laatste was: nooit alleen bakken.', en: 'Yusuf wrote down three things. The last one was: never bake alone.' } },
    { id: 'q6', type: 'sort', skill: 'feitmening',
      q: { nl: 'Feit of mening? Zet elke zin in de goede groep.', en: 'Fact or opinion? Put every sentence in the right group.' },
      bins: [ { nl: 'Feit', en: 'Fact' }, { nl: 'Mening', en: 'Opinion' } ],
      items: [
        { nl: 'In de taart zit een theelepel gember.', en: 'There is a teaspoon of ginger in the pie.', bin: 0 },
        { nl: 'Dit is de lekkerste taart van Nederland.', en: 'This is the tastiest pie in the Netherlands.', bin: 1 },
        { nl: 'De rand van de taart was een beetje scheef.', en: 'The edge of the pie was a bit crooked.', bin: 0 },
        { nl: 'Samen bakken is het belangrijkste ingrediënt.', en: 'Baking together is the most important ingredient.', bin: 1 }
      ],
      explain: { nl: 'Wat erin zit en hoe de rand eruitziet, kun je nagaan. “De lekkerste” en “het belangrijkste” zijn meningen.', en: 'What is in it and what the edge looks like can be checked. “The tastiest” and “the most important” are opinions.' } },
    { id: 'q7', type: 'multi', skill: 'letterlijk',
      q: { nl: 'Wat was het geheim van oma’s taart? Kies er 2.', en: 'What was the secret of Grandma’s pie? Pick 2.' },
      options: [
        { nl: 'Een theelepel geraspte verse gember', en: 'A teaspoon of freshly grated ginger' },
        { nl: 'Een klein snufje zout', en: 'A small pinch of salt' },
        { nl: 'Extra kaneel', en: 'Extra cinnamon' },
        { nl: 'Citroensap', en: 'Lemon juice' }
      ], answer: [0, 1],
      explain: { nl: 'Alinea 3: geraspte verse gember, en een snufje zout in de vulling.', en: 'Paragraph 3: freshly grated ginger, and a pinch of salt in the filling.' } },
    { id: 'q8', type: 'mc', skill: 'doel',
      q: { nl: 'Waarom vertelt de schrijver dat de jury de taart niet de mooiste vond?', en: 'Why does the writer tell you the jury did not think the pie was the most beautiful?' },
      options: [
        { nl: 'Om te laten zien dat de taart niet om het uiterlijk won, maar om de smaak en het verhaal', en: 'To show that the pie did not win for its looks, but for its taste and its story' },
        { nl: 'Om de jury belachelijk te maken', en: 'To make fun of the jury' },
        { nl: 'Om uit te leggen hoe je een rand maakt', en: 'To explain how to make an edge' },
        { nl: 'Om te zeggen dat Kees slecht bakt', en: 'To say that Kees bakes badly' }
      ], answer: 0,
      explain: { nl: 'De taart is scheef, maar iedereen komt terug voor een tweede stuk. Het gaat om iets anders dan mooi zijn.', en: 'The pie is crooked, but everyone comes back for a second piece. It is about something other than looking nice.' } },
    { id: 'q9', type: 'tf', skill: 'gevolgtrekking',
      q: { nl: 'Kees was blij te horen dat zijn moeder en oma Rosa vroeger vriendinnen waren.', en: 'Kees was glad to hear that his mother and Grandma Rosa used to be friends.' },
      answer: true,
      explain: { nl: 'Hij lacht voor het eerst en zegt dat zijn moeder Rosa miste. Hij bakt ook mee.', en: 'He laughs for the first time and says his mother missed Rosa. He also bakes with them.' } },
    { id: 'q10', type: 'find', skill: 'hoofdgedachte',
      q: { nl: 'Welke zin laat het beste zien dat het geheim van de taart meer was dan een ingrediënt?', en: 'Which sentence best shows that the secret of the pie was more than an ingredient?' },
      options: [
        { nl: 'Er stonden twee meisjes op, met schorten voor en meel op hun wangen.', en: 'It showed two girls, wearing aprons, with flour on their cheeks.' },
        { nl: 'Het geheim hoorde bij ons tweeën.', en: 'The secret belonged to the two of us.' },
        { nl: 'Het geheim bleek een theelepel geraspte verse gember te zijn.', en: 'The secret turned out to be a teaspoon of freshly grated ginger.' },
        { nl: 'De jury vond hem niet de allermooiste, want de rand was een beetje scheef.', en: 'The jury did not think it was the most beautiful, because the edge was a bit crooked.' }
      ], answer: 1,
      explain: { nl: 'Het echte geheim was de vriendschap: het recept hoorde bij Rosa én Truus samen.', en: 'The real secret was the friendship: the recipe belonged to Rosa and Truus together.' } }
  ]
}
  ]
});
