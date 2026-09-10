# 🚀 Leeskampioen op GitHub Pages zetten

Deze site is **statisch**: alleen HTML, CSS en JavaScript. Er is geen server,
geen database en geen build-stap nodig. Daarom is GitHub Pages ideaal: gratis,
snel, en het werkt op elke tablet of telefoon.

Je krijgt uiteindelijk een adres als:

```
https://trungnguyen87.github.io/Nerderland_G6_G7_reading/
```

Kies één van de twee routes hieronder. **Route A** is het makkelijkst als je
niet met de terminal wilt werken.

---

## ⚡ Eerst even testen zonder GitHub

Je hoeft niet te publiceren om het te proberen. Download de map en
**dubbelklik op `index.html`**. De site werkt volledig lokaal — inclusief de
downloads van het rapport. Alleen het lettertype ziet er iets anders uit als je
offline bent.

---

## Route A — Via de website van GitHub (geen terminal nodig)

### Stap 1. Zet de bestanden op de `main`-branch

De code staat nu op de branch `claude/dutch-reading-game-kids-j7ekss`.
GitHub Pages publiceert het makkelijkst vanaf `main`.

1. Ga naar je repository: `https://github.com/TrungNguyen87/Nerderland_G6_G7_reading`
2. Klik bovenin op **Pull requests** → **New pull request**.
3. Zet **base:** op `main` en **compare:** op `claude/dutch-reading-game-kids-j7ekss`.
4. Klik **Create pull request** → **Merge pull request** → **Confirm merge**.

> Heeft je repo nog geen `main`-branch? Dan kun je in stap 2 gewoon de branch
> `claude/dutch-reading-game-kids-j7ekss` kiezen. Dat werkt net zo goed.

### Stap 2. Zet GitHub Pages aan

1. Ga in je repository naar **Settings** (tandwiel, bovenin rechts).
2. Klik links in het menu op **Pages**.
3. Bij **Source** kies je: **Deploy from a branch**.
4. Bij **Branch** kies je: **`main`** en map **`/ (root)`**.
5. Klik op **Save**.

![instelling] Branch: `main` · Folder: `/ (root)` · Save

### Stap 3. Wachten en openen

- Ververs de Pages-pagina na **1 tot 3 minuten**.
- Bovenaan verschijnt een groen kader:
  *"Your site is live at https://trungnguyen87.github.io/Nerderland_G6_G7_reading/"*
- Klik op **Visit site**.

De eerste keer kan het tot 10 minuten duren. Krijg je een 404, wacht dan even
en ververs met **Ctrl+F5** (Windows) of **Cmd+Shift+R** (Mac).

---

## Route B — Via de terminal (git)

```bash
# 1. Repo binnenhalen (eenmalig)
git clone https://github.com/TrungNguyen87/Nerderland_G6_G7_reading.git
cd Nerderland_G6_G7_reading

# 2. De branch met het spel ophalen
git fetch origin claude/dutch-reading-game-kids-j7ekss
git checkout claude/dutch-reading-game-kids-j7ekss

# 3. Samenvoegen met main
git checkout main
git merge claude/dutch-reading-game-kids-j7ekss
git push -u origin main
```

Zet daarna GitHub Pages aan zoals in **Route A, stap 2**.

### Alternatief: publiceren vanaf de huidige branch

Wil je `main` niet aanraken, kies dan bij **Settings → Pages → Branch** gewoon
`claude/dutch-reading-game-kids-j7ekss` in plaats van `main`. Verder verandert er niets.

---

## 🔄 Later iets aanpassen

Elke push naar de gekozen branch publiceert automatisch opnieuw, meestal binnen
een minuut.

**Een verhaal toevoegen of aanpassen via de website:**

1. Ga naar de map `data/` in je repository.
2. Klik op bijvoorbeeld `stories.dieren.js`.
3. Klik op het **potloodje** (✏️ Edit this file).
4. Pas de tekst aan.
5. Onderaan: **Commit changes**.

Klaar. Ververs de site na een minuut.

> ⚠️ Let op de komma's en accolades in het bestand. Klopt er iets niet, dan
> blijft het scherm leeg. Druk dan op **F12** in de browser; onder *Console*
> staat precies op welke regel de fout zit.

---

## 📱 Op de tablet zetten als "app"

Zo krijgt je zoon een icoontje op het startscherm, zonder browserbalk:

**iPad / iPhone (Safari)**
1. Open de site in Safari.
2. Tik op het deel-icoon (vierkantje met pijltje omhoog).
3. Tik op **Zet op beginscherm**.

**Android (Chrome)**
1. Open de site in Chrome.
2. Tik op de drie puntjes rechtsboven.
3. Tik op **Toevoegen aan startscherm**.

---

## 🧯 Problemen oplossen

| Wat je ziet | Wat er aan de hand is | Oplossing |
|---|---|---|
| **404 – niet gevonden** | Pages staat nog uit, of de verkeerde branch is gekozen | Settings → Pages → controleer Branch en `/ (root)`. Wacht 2 minuten. |
| **Witte/lege pagina** | Een JavaScript-bestand wordt niet gevonden | Druk F12 → tabblad *Console*. Staat er `404` bij een `.js`-bestand? Controleer of de map `data/` en `js/` echt zijn geüpload. |
| **Oude versie blijft staan** | De browser onthoudt de site | Ververs met **Ctrl+F5** / **Cmd+Shift+R**, of open een privévenster. |
| **Werkt op laptop, niet op tablet** | Cache van de tablet | Sluit het tabblad helemaal en open opnieuw. |
| **Voorlezen doet niets** | Het apparaat heeft geen Nederlandse stem | Chrome op Android/Windows en Safari op iPad hebben die wél. Op Linux vaak niet. De rest van het spel werkt gewoon. |
| **Geen geluid** | Browsers blokkeren geluid tot de eerste klik | Klik eerst ergens op de pagina. Of zet het aan met de 🔊-knop. |
| **Vreemde letters (Ã©, â€™)** | Bestand niet als UTF-8 opgeslagen | Bewerk het bestand via GitHub zelf, dan gaat het automatisch goed. |

---

## 🔐 Belangrijk om te weten

- **De repository moet openbaar (public) zijn** voor gratis GitHub Pages.
  Een privé-repo kan alleen met een betaald GitHub-abonnement.
  De site bevat geen persoonlijke gegevens, dus openbaar is prima.
- **De resultaten van je zoon staan nooit op internet.** Alles blijft in de
  browser van het apparaat zelf (`localStorage`). Wie de link opent, ziet een
  leeg spel — niet zijn scores.
- **Gevolg daarvan:** de scores staan per apparaat. Speelt hij op de tablet,
  download het rapport dan óók op die tablet.
- Het bestand `.nojekyll` moet blijven staan. Zonder dat bestand negeert
  GitHub Pages sommige mappen.

---

## Optioneel: publiceren via GitHub Actions

In `.github/workflows/pages.yml` staat een kant-en-klare workflow. Die heb je
**niet nodig** voor de gewone route. Gebruik hem alleen als je bij
**Settings → Pages → Source** kiest voor **GitHub Actions** in plaats van
*Deploy from a branch*. Je ziet dan bij het tabblad **Actions** van elke
publicatie of die geslaagd is.
