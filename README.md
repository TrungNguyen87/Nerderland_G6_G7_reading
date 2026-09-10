# 📚 Leeskampioen

Een interactief leesspel voor **groep 6 en 7** van de Nederlandse basisschool.
Nederlandse teksten met een knop om alles naar het Engels te vertalen, en een
oudergedeelte waar je aan het eind van de dag een rapport kunt downloaden.

> **Direct proberen:** download de map en dubbelklik op `index.html`.
> **Online zetten:** zie **[DEPLOY.md](DEPLOY.md)** voor een stap-voor-stap uitleg.

---

## Wat zit erin

**18 verhalen · 90 vragen · 6 onderwerpen · 3 niveaus**

| Wereld | Onderwerp |
|---|---|
| 🦊 | Dieren & Natuur — de stadsvos, het lied van de bultrug, de terugkeer van de wolf |
| 🚀 | Ruimte & Sterren — slapen in het ruimtestation, de Marsrover, waarom Mars zo moeilijk is |
| ⚽ | Sport & Spanning — de laatste penalty, de Elfstedentocht, zenuwen voor de start |
| 🏰 | Ridders & Vroeger — schildknaap Joris, koud in het kasteel, twee kanten van de Gouden Eeuw |
| 🔬 | Techniek & Ontdekking — de uitvinding van klittenband, dijken en Deltawerken, de lerende robot |
| 🔍 | Mysterie & Detective — de lege koektrommel, de code van opa, de diefstal die niemand zag |

Elk onderwerp heeft drie niveaus die oplopen in moeilijkheid en **stoppen bij
groep 7**:

| Niveau | Leesniveau | Lengte |
|---|---|---|
| ⭐ Startklaar | AVI M6 | ± 150 woorden, korte zinnen |
| ⭐⭐ Doorzetter | AVI E6 | ± 190 woorden |
| ⭐⭐⭐ Kampioen | AVI M7 | ± 250 woorden, meer inzichtvragen |

Niveau 2 gaat pas open als niveau 1 gehaald is.

## Vijf soorten vragen

Niet alleen meerkeuze, zodat het niet saai wordt:

- **Meerkeuze** — het antwoord opzoeken in de tekst
- **Waar / niet waar** — snel en spannend
- **Invulzin** — het juiste woord in de zin klikken
- **Volgorde** — de gebeurtenissen op een rij zetten
- **Koppelen** — woord aan betekenis verbinden

Elke vraag traint één van de vijf leesvaardigheden: **letterlijk lezen,
conclusie trekken, woordenschat, volgorde en hoofdgedachte**. Daardoor laat het
rapport precies zien wáár het misgaat.

## Wat het leuk houdt

- ⏱ **Missie van 30 minuten** — een ring in de balk vult zich; bij een half uur
  volgt een trofee met confetti
- ⚡ **XP, levels en een reeksteller** — hoe langer de reeks goede antwoorden,
  hoe meer punten
- 🦉 **Oscar de uil** reageert op elk antwoord en geeft hints
- 🎉 Confetti, sterren, geluidjes en tien verzamelbadges
- ⚡ **Bonusronde Flitswoorden** — een woord flitst kort in beeld; welk woord was
  het? Traint het snel herkennen van woorden, wat het leestempo helpt

## Hulp bij het lezen

Speciaal voor een kind dat lezen lastig vindt:

| Knop | Wat het doet |
|---|---|
| 🔈 **Voorlezen** | Het apparaat leest het verhaal hardop voor, in het Nederlands of Engels |
| ✨ **Meelezen** | Markeert woord voor woord mee, op rustig leestempo |
| 🔠 **Groter** | Drie letterformaten |
| 📏 **Liniaal** | Dimt alle regels behalve die waar je bent |
| 🅰 **Leeshulp** | Ronder lettertype met extra ruimte tussen de letters |
| 👀 **Tekst** | Tijdens de vragen het verhaal er nog eens bij pakken |
| 📌 Woordkaartjes | Moeilijke woorden met uitleg, klik om te horen |

## 🇳🇱 / 🇬🇧 Vertaalknop

Eén klik op de vlag zet **alles** om: verhaal, vragen, antwoorden, uitleg en
knoppen. Ook midden in een vraag. Handig om te controleren of hij het echt
begrepen heeft, of om een moeilijk woord even na te kijken.

## 📊 Voor ouders

Achter een klein rekensommetje (zodat je zoon er niet zomaar in komt):

- Aantal verhalen, vragen, percentage goed, leestijd en **leestempo (wpm)**
- Een balk per leesvaardigheid — meteen zichtbaar wat de zwakke plek is
- Tabel per onderwerp en niveau
- **Concreet advies** voor thuis, gebaseerd op de cijfers
- De laatste 20 antwoorden, met de vraag erbij
- Signaal als er **doorgeklikt** is zonder echt te lezen

### Rapport downloaden

| Knop | Bestand | Waarvoor |
|---|---|---|
| **CSV** | `leeskampioen_datum.csv` | Openen in Excel of Numbers; elke vraag een regel |
| **JSON** | `leeskampioen_datum.json` | Alle ruwe gegevens |
| **Rapport** | `leesrapport_datum.html` | Nette pagina om te bekijken of af te drukken |

De CSV bevat per antwoord: datum, tijd, onderwerp, niveau, verhaal, vraagtype,
leesvaardigheid, goed/fout, wat hij antwoordde, wat juist was, hoeveel seconden
hij erover deed, of hij een hint gebruikte en in welke taal. Onderaan staan de
leestijden en het leestempo per verhaal.

> **Privacy:** alles blijft in de browser van het apparaat (`localStorage`).
> Er gaat niets naar internet. Het logboek blijft bewaard tot je op *Wis alles*
> drukt — dus je kunt ook aan het eind van de week downloaden.

## Zelf verhalen toevoegen

Open een bestand in `data/` en plak er een verhaal bij. Het patroon:

```js
{
  id: 'dieren-4', topic: 'dieren', level: 2, emoji: '🦔', scene: 'forest',
  title: { nl: 'De egel in de tuin', en: 'The hedgehog in the garden' },
  text: {
    nl: ['Eerste alinea...', 'Tweede alinea...'],
    en: ['First paragraph...', 'Second paragraph...']
  },
  words: [{ nl: 'schemering', en: 'dusk', defNl: 'als het net donker wordt', defEn: 'when it just gets dark' }],
  questions: [
    { id: 'q1', type: 'mc', skill: 'letterlijk',
      q: { nl: 'Waar slaapt de egel?', en: 'Where does the hedgehog sleep?' },
      options: [{ nl: 'Onder de heg', en: 'Under the hedge' }, { nl: 'In de vijver', en: 'In the pond' }],
      answer: 0,
      explain: { nl: 'Dat staat in alinea 1.', en: 'That is in paragraph 1.' } }
  ]
}
```

De vraagtypen zijn `mc`, `tf`, `gap`, `order` en `match`; de vaardigheden
`letterlijk`, `gevolgtrekking`, `woordenschat`, `volgorde` en `hoofdgedachte`.
Een nieuw onderwerp voeg je toe in `data/bootstrap.js` en als `<script>` in
`index.html`.

## Techniek

Gewoon HTML, CSS en JavaScript. Geen framework, geen build-stap, geen
afhankelijkheden. Werkt ook offline en rechtstreeks vanaf `file://`.

```
index.html            de hele opbouw van het scherm
css/style.css         vormgeving en animaties
js/i18n.js            alle interfaceteksten in NL en EN
js/audio.js           geluidjes (WebAudio) en voorlezen (SpeechSynthesis)
js/fx.js              confetti, achtergrond, de uil
js/log.js             opslag, statistiek en de exportknoppen
js/app.js             spellogica: schermen, vragen, punten, dashboard
data/bootstrap.js     werelden, niveaus en leesvaardigheden
data/stories.*.js     de verhalen, per onderwerp
```
