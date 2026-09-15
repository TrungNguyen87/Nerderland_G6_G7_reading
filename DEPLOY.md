# 🚀 Deploying Leeskampioen to GitHub Pages

This site is **static** — only HTML, CSS and JavaScript. No server, no database,
no build step. That is why GitHub Pages is the right fit: free, fast, and it
works on any tablet or phone.

Your final address will be:

```
https://trungnguyen87.github.io/Nerderland_G6_G7_reading/
```

Pick one of the two routes below. **Route A** needs no terminal at all.

---

## ⚡ First: try it without deploying anything

You do not have to publish it to test it. Download the folder and
**double-click `index.html`**. Everything works locally, including the report
downloads. Only the font looks slightly different when you are offline.

---

## Route A — Through the GitHub website (no terminal)

> **Important for your repository:** right now the live branch is
> `Main/dutch-reading-game-kids-g67`. There is **no `main` branch**.
> You can publish straight from that branch — it works exactly the same. If you
> prefer a cleaner name, see *"Would you rather use `main`?"* at the end of this
> route.

### Step 1. Turn on GitHub Pages

1. Go to your repository:
   `https://github.com/TrungNguyen87/Nerderland_G6_G7_reading`
2. Click **Settings** in the top bar (the gear icon).
3. In the left menu, click **Pages**.
4. Under **Source**, choose: **Deploy from a branch**.
5. Under **Branch**, in the first dropdown choose:
   **`Main/dutch-reading-game-kids-g67`**
6. In the second dropdown (the folder), choose: **`/ (root)`**.
7. Click **Save**.

```
Source:  Deploy from a branch
Branch:  Main/dutch-reading-game-kids-g67   /  (root)     [ Save ]
```

### Step 2. Make sure the repository is public

Free GitHub Pages only works on a **public** repository.

1. Still in **Settings**, scroll all the way down to **Danger Zone**.
2. If it says *"Change repository visibility → Make public"*, click it and
   confirm.
3. If it says *"Make private"*, it is already public. Do nothing.

The site contains no personal data, and your son's scores never leave his own
device, so public is fine here.

### Step 3. Wait, then open it

- Refresh the Pages settings screen after **1 to 3 minutes**.
- A green box appears at the top: *"Your site is live at ..."*
- Your address will be:

```
https://trungnguyen87.github.io/Nerderland_G6_G7_reading/
```

- Click **Visit site**.

The very first deploy can take up to 10 minutes. If you get a 404, wait a little
and refresh with **Ctrl+F5** (Windows) or **Cmd+Shift+R** (Mac).

### Would you rather use `main`?

A branch name with slashes works fine but looks messy. Here is how to rename it,
entirely in the browser:

1. Go to **Settings** → **General** (the first menu item).
2. Scroll to **Default branch** and click the ⇄ arrows next to the branch name.
3. Choose **Rename branch**, type `main`, and confirm.
4. Then go to **Settings → Pages** and set **Branch** to `main`.

---

## Route B — Through the terminal (git)

The code is already online, so you only need this if you prefer working locally.

```bash
# Get the repository
git clone https://github.com/TrungNguyen87/Nerderland_G6_G7_reading.git
cd Nerderland_G6_G7_reading
git checkout Main/dutch-reading-game-kids-g67

# View the site locally (pick one)
open index.html               # macOS
start index.html              # Windows
python3 -m http.server 8000   # then visit http://localhost:8000
```

To rename the branch to `main`:

```bash
git branch -m Main/dutch-reading-game-kids-g67 main
git push -u origin main
```

Then set **Settings → Pages → Branch** to `main`, and delete the old branch on
GitHub if you like.

---

## 🔄 Changing something later

Every push to the selected branch republishes automatically, usually within a
minute.

**To add or edit a story from the website:**

1. Open the `data/` folder in your repository.
2. Click a file, for example `stories.dieren.js`.
3. Click the **pencil** icon (✏️ Edit this file).
4. Change the text.
5. At the bottom: **Commit changes**.

Done. Refresh the site after a minute.

> ⚠️ Mind the commas and braces in the file. If something is off, the screen
> stays blank. Press **F12** in the browser; the *Console* tab tells you exactly
> which line is wrong.

**Safer: check before you publish.** If you have Node.js on your computer, run
this in the project folder after editing:

```bash
node tools/validate.js
```

It reads every story and spelling exercise and tells you in plain words what is
wrong — a missing English translation, an answer that points at an option that
does not exist, a level with no story. It needs no installation. There is also
`node tools/smoke.mjs`, which plays the whole game in a real browser; that one
needs `npm install playwright` first.

---

## 📱 Putting it on the tablet as an "app"

This gives your son an icon on the home screen, with no browser bar:

**iPad / iPhone (Safari)**
1. Open the site in Safari.
2. Tap the share icon (square with an arrow pointing up).
3. Tap **Add to Home Screen**.

**Android (Chrome)**
1. Open the site in Chrome.
2. Tap the three dots at the top right.
3. Tap **Add to Home screen**.

---

## 🧯 Troubleshooting

| What you see | What is going on | Fix |
|---|---|---|
| **404 – not found** | Pages is still off, or the wrong branch is selected | Settings → Pages → check Branch and `/ (root)`. Wait 2 minutes. |
| **Blank white page** | A JavaScript file is not being found | Press F12 → *Console* tab. Any `404` on a `.js` file? Check that the `data/` and `js/` folders were really uploaded. |
| **Old version keeps showing** | The browser cached the site | Refresh with **Ctrl+F5** / **Cmd+Shift+R**, or open a private window. |
| **Works on laptop, not on tablet** | Tablet cache | Close the tab completely and reopen it. |
| **Read-aloud does nothing** | The device has no Dutch voice installed | Chrome on Android/Windows and Safari on iPad do have one. Linux often does not. The rest of the game still works. |
| **No sound** | Browsers block audio until the first click | Click anywhere on the page first, or toggle the 🔊 button. |
| **Odd characters (Ã©, â€™)** | File not saved as UTF-8 | Edit the file through GitHub itself; it handles this automatically. |

---

## 🔐 Worth knowing

- **The repository must be public** for free GitHub Pages. A private repo
  requires a paid GitHub plan. The site holds no personal data, so public is
  fine.
- **Your son's results never go online.** Everything stays in that device's
  browser (`localStorage`). Anyone opening the link sees an empty game — not his
  scores.
- **Consequence:** scores are per device. If he plays on the tablet, download the
  report on that tablet too.
- Keep the `.nojekyll` file. Without it, GitHub Pages skips some folders.

---

## Optional: deploying via GitHub Actions

`.github/workflows/pages.yml` contains a ready-made workflow. You do **not**
need it for the normal route. Use it only if you set **Settings → Pages →
Source** to **GitHub Actions** instead of *Deploy from a branch*. The **Actions**
tab then shows whether each deploy succeeded.
