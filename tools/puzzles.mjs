/* =====================================================================
   Leeskampioen - browser test voor de leespuzzels, de strategie en de verhalen.

   Aanvulling op tools/smoke.mjs (dat het hele spel in één keer afloopt):
   dit script test de nieuwe spellen en de vervolgverhalen dieper, met echte
   klikken waar het kan.

     - Speurneus, Schatkaart en de ontsnappingskamers maken hun puzzels zelf.
       Hier worden er honderden gemaakt en nagelopen: elke zaak heeft precies
       één dader en elke aanwijzing is nodig, elke kaart is met de tekst te
       lopen, elke kamer is op te lossen.
     - Woordvier: de computer wordt sterker per level.
     - Elk spel wordt echt gespeeld (klikken, fout en goed, taalwissel).
     - Een nieuw vervolgverhaal van vier hoofdstukken: alle vier doorlezen,
       dan zelf het volgende hoofdstuk schrijven.
     - Alles ook op een telefoonscherm: geen horizontaal scrollen.

   Nodig: Playwright (npm install --no-save playwright)
   Draaien: node tools/puzzles.mjs
   ===================================================================== */

import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { join, extname, normalize } from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright';

const ROOT = fileURLToPath(new URL('..', import.meta.url));
const PORT = 8788;
const MIME = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json' };

const server = createServer(async (req, res) => {
  const url = decodeURIComponent(req.url.split('?')[0]);
  const rel = normalize(url === '/' ? '/index.html' : url).replace(/^(\.\.[/\\])+/, '');
  try {
    const file = join(ROOT, rel);
    const info = await stat(file);
    if (!info.isFile()) throw new Error('not a file');
    res.writeHead(200, { 'Content-Type': MIME[extname(file)] || 'application/octet-stream' });
    res.end(await readFile(file));
  } catch {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('not found');
  }
});

const problems = [];
const steps = [];
const ok = (m) => steps.push('  ✅ ' + m);
const bad = (m) => { problems.push(m); steps.push('  ❌ ' + m); };

await new Promise((r) => server.listen(PORT, r));
const browser = await chromium.launch(process.env.PLAYWRIGHT_CHROMIUM ? { executablePath: process.env.PLAYWRIGHT_CHROMIUM } : {});
const page = await browser.newPage({ viewport: { width: 1100, height: 900 } });

page.on('console', (m) => {
  const text = m.text();
  if (/fonts\.(googleapis|gstatic)|ERR_CONNECTION|ERR_NAME_NOT_RESOLVED|ERR_CERT_|ERR_SSL_/.test(text)) return;
  if (m.type() === 'error') bad('console error: ' + text);
});
page.on('pageerror', (e) => bad('uncaught exception: ' + e.message));
page.on('response', (r) => { if (r.status() >= 400 && r.url().startsWith(`http://localhost:${PORT}`)) bad('HTTP ' + r.status() + ' for ' + r.url()); });

const sel = (s) => page.locator(s);
const evalIn = (fn, arg) => page.evaluate(fn, arg);

/* een diploma kan na een resultaatscherm verschijnen: sluiten */
async function closeDiplomas() {
  await page.waitForTimeout(900);
  for (let i = 0; i < 6; i++) {
    if (await evalIn(() => document.getElementById('diploma-overlay').classList.contains('hidden'))) return;
    await sel((await sel('#dip-close').isVisible()) ? '#dip-close' : '#dip-go').click();
    await page.waitForTimeout(300);
  }
}

/* een spel starten en de startkaart wegtikken */
async function startGame(id, lv, deck) {
  await evalIn(([id, lv, deck]) => {
    if (Store.player.tickets < 2) Store.player.tickets = 5;
    if (deck) Store.player.arcadeDeck = deck;
    Arcade.start(id, lv);
  }, [id, lv, deck]);
  await page.waitForSelector('#screen-arcade.active');
  await sel('#arc-start').click();
  await page.waitForTimeout(150);
}
async function finishToResult() {
  await page.waitForSelector('#screen-arcade-result.active', { timeout: 8000 });
  const r = await evalIn(() => { const r = Arcade.state().last_result; return { stars: r.stars, win: r.win, correct: r.correct, xp: r.xp }; });
  await closeDiplomas();
  await sel('#btn-arc-menu').click();
  await page.waitForSelector('#screen-worlds.active');
  return r;
}

/* alle vragen van het open verhaal goed beantwoorden, uit de data */
async function answerStory(label) {
  const n = await evalIn(() => S.story.questions.length);
  for (let i = 0; i < n; i++) {
    const q = await evalIn(() => {
      const qq = S.story.questions[S.qi];
      return { type: qq.type, answer: qq.answer, bins: qq.type === 'sort' ? S.views[S.qi].items.map((x) => x.o.bin) : null };
    });
    if (q.type === 'find') await sel(`#q-body .find-opt[data-orig="${q.answer}"]`).click();
    else if (q.type === 'mc' || q.type === 'gap') await sel(`#q-body .opt[data-orig="${q.answer}"]`).click();
    else if (q.type === 'multi') { for (const o of q.answer) await sel(`#q-body .opt[data-orig="${o}"]`).click(); }
    else if (q.type === 'tf') await sel(`#q-body .tf-btn[data-val="${q.answer ? '1' : '0'}"]`).click();
    else if (q.type === 'order') { for (const o of q.answer) await sel(`#order-pool .order-item[data-orig="${o}"]`).click(); }
    else if (q.type === 'sort') { for (let r = 0; r < q.bins.length; r++) await sel('#q-body .sort-row').nth(r).locator('.sort-bin').nth(q.bins[r]).click(); }
    await sel('#btn-check').click();
    await page.waitForSelector('#q-feedback.show');
    if ((await evalIn(() => S.results[S.qi])) !== true) bad(`${label}: question ${i + 1} (${q.type}) was marked wrong although the data says it is right`);
    await sel('#btn-next').click();
  }
  await page.waitForSelector('#screen-result.active');
}

try {
  await page.goto(`http://localhost:${PORT}/`, { waitUntil: 'networkidle' });
  await sel('#input-name').fill('Puzzelkind');
  await sel('#btn-start').click();
  await page.waitForSelector('#screen-worlds.active');

  /* =================================================================
     1. Wat er in de speelhal staat
     ================================================================= */
  const reg = await evalIn(() => ({
    ids: Arcade.games.map((g) => g.id),
    cats: Arcade.games.reduce((o, g) => { o[g.cat] = (o[g.cat] || 0) + 1; return o; }, {}),
    free: Arcade.games.filter((g) => g.free).map((g) => g.id),
    pools: Arcade.pools(),
    series: window.SERIES.map((s) => s.id + ':' + Ladder.chapters(s).length + (s.more ? '+' : ''))
  }));
  for (const id of ['detective', 'treasure', 'storypuzzle', 'fourrow', 'escape-plof']) {
    if (!reg.ids.includes(id)) bad(`the game "${id}" is not registered`);
  }
  if (reg.cats.puzzle < 5 || !reg.cats.strategy || reg.cats.strategy < 2 || !reg.cats.escape) bad(`the arcade groups look wrong: ${JSON.stringify(reg.cats)}`);
  else ok(`the arcade has ${reg.ids.length} games (${JSON.stringify(reg.cats)}), ${reg.free.length} of them free reading puzzles`);
  if (reg.pools.riddles < 80) bad(`the riddle deck has only ${reg.pools.riddles} riddles`);
  else ok(`the riddle deck has ${reg.pools.riddles} riddles`);
  ok(`bookshelf: ${reg.series.join(', ')}`);

  /* =================================================================
     2. De generators: honderden puzzels maken en nalopen
     ================================================================= */
  const gen = await evalIn(() => {
    const out = { bad: [], counts: {} };
    const D = Arcade.module('detective'), T = Arcade.module('treasure'), S = Arcade.module('storypuzzle');
    for (const lv of [1, 2, 3]) {
      let made = 0;
      for (let i = 0; i < 200; i++) {
        const cs = D.generate(lv);
        if (!cs) { out.bad.push(`detective lv${lv}: no case`); continue; }
        made++;
        const sol = D.solve(cs);
        if (sol.length !== 1 || sol[0] !== cs.culprit) out.bad.push(`detective lv${lv}: not exactly one culprit`);
        cs.clues.forEach((cl, j) => {
          const rest = cs.clues.filter((_, m) => m !== j);
          const alive = cs.suspects.map((s, k) => k).filter((k) => rest.every((c2) => c2.test(k)));
          if (alive.length <= 1) out.bad.push(`detective lv${lv}: clue ${j + 1} is not needed`);
          if (!cl.nl || !cl.en || /undefined|NaN/.test(cl.nl + cl.en)) out.bad.push(`detective lv${lv}: broken clue text`);
        });
      }
      out.counts['detective' + lv] = made;
      made = 0;
      for (let i = 0; i < 200; i++) {
        const m = T.generate(lv);
        if (!m) { out.bad.push(`treasure lv${lv}: no map`); continue; }
        made++;
        const f = T.follow(m);
        if (!f.ok) out.bad.push(`treasure lv${lv}: following the text does not end at the treasure (${f.why || 'wrong cell'})`);
        m.lines.forEach((l) => { if (!l.nl || !l.en || /undefined/.test(l.nl + l.en)) out.bad.push(`treasure lv${lv}: broken line`); });
      }
      out.counts['treasure' + lv] = made;
      made = 0;
      for (let i = 0; i < 60; i++) {
        const p = S.pick(lv, {});
        if (!p) { out.bad.push(`storypuzzle lv${lv}: no puzzle`); continue; }
        made++;
        if (p.tiles.some((t) => !t.nl || !t.en)) out.bad.push(`storypuzzle lv${lv}: empty tile`);
      }
      out.counts['story' + lv] = made;
    }
    return out;
  });
  if (gen.bad.length) bad(`generators: ${gen.bad.length} problems, e.g. ${gen.bad.slice(0, 3).join(' | ')}`);
  else ok(`generators: ${Object.values(gen.counts).reduce((a, b) => a + b, 0)} cases, maps and story puzzles made and checked (unique culprit, every clue needed, every text runs)`);

  /* de computer van Woordvier wordt sterker */
  const ai = await evalIn(() => {
    const F = Arcade.module('fourrow');
    const drop = (b, c, p) => { for (let r = 5; r >= 0; r--) if (!b[r][c]) { b[r][c] = p; return r; } return -1; };
    const random = (b) => { const o = []; for (let c = 0; c < 7; c++) if (!b[0][c]) o.push(c); return o[Math.floor(Math.random() * o.length)]; };
    const res = {};
    for (const lv of [1, 2, 3]) {
      let wins = 0;
      for (let i = 0; i < 20; i++) {
        const b = F.newBoard();
        let turn = i % 2 ? 2 : 1;
        for (let k = 0; k < 42; k++) {
          const c = turn === 2 ? F.aiMove(b, 2, lv) : random(b);
          const r = drop(b, c, turn);
          if (F.winLine(b, r, c)) { if (turn === 2) wins++; break; }
          turn = turn === 1 ? 2 : 1;
        }
      }
      res[lv] = wins;
    }
    return res;
  });
  if (ai[1] < 17 || ai[2] < 19 || ai[3] < 20) bad(`the Woordvier computer is too weak against random play: ${JSON.stringify(ai)}`);
  else ok(`Woordvier: the computer beats random play ${ai[1]}/20, ${ai[2]}/20 and ${ai[3]}/20 times at levels 1, 2 and 3`);

  /* =================================================================
     3. Speurneus met echte klikken
     ================================================================= */
  await evalIn(() => { Store.player.tickets = 5; });
  const ticketsBefore = await evalIn(() => Store.player.tickets);
  await startGame('detective', 1);
  const dt = await evalIn(() => ({ culprit: Arcade.state().game.cs.culprit, n: Arcade.state().game.cs.n }));
  const wrongI = dt.culprit === 0 ? 1 : 0;
  await sel(`.dt-card[data-i="${wrongI}"]`).click();
  await sel('.dt-accuse').click();
  const dt1 = await evalIn(() => ({ hearts: Arcade.state().hearts, msg: document.querySelector('.dt-msg').textContent, hit: document.querySelectorAll('.dt-clue.hit').length }));
  if (dt1.hearts !== 2 || !/Aanwijzing/.test(dt1.msg) || dt1.hit !== 1) bad(`a wrong accusation should cost a heart and name the clue that does not fit (${JSON.stringify(dt1)})`);
  await sel(`.dt-card[data-i="${dt.culprit}"]`).click();
  await sel('.dt-accuse').click();
  const dt2 = await evalIn(() => ({ di: Arcade.state().di, correct: Arcade.state().correct }));
  if (dt2.di !== 1 || dt2.correct !== 1) bad(`the right accusation did not solve the case (${JSON.stringify(dt2)})`);
  await sel('.dt-next').click();
  await evalIn(() => { Arcade.debugResolve(true); Arcade.debugResolve(true); });
  const dtr = await finishToResult();
  const ticketsAfter = await evalIn(() => Store.player.tickets);
  if (dtr.stars !== 2 || !dtr.win) bad(`Speurneus with one wrong accusation should give ⭐⭐ and a win (${JSON.stringify(dtr)})`);
  else if (ticketsAfter !== ticketsBefore) bad(`a free reading puzzle used a ticket (${ticketsBefore} → ${ticketsAfter})`);
  else ok('Speurneus: a wrong accusation names the clue that does not fit, the right one solves the case, ⭐⭐ and no ticket spent');

  /* de taal wisselen midden in een puzzel vertaalt de aanwijzingen */
  await startGame('detective', 2);
  const nlClue = await sel('.dt-clue').first().innerText();
  await sel('#btn-lang').click();
  await page.waitForTimeout(150);
  const enClue = await sel('.dt-clue').first().innerText();
  await sel('#btn-lang').click();
  if (nlClue === enClue || !/culprit/i.test(enClue)) bad(`switching language did not translate the clues ("${nlClue}" → "${enClue}")`);
  else ok('switching language in the middle of Speurneus translates the clues');
  await sel('#btn-arc-quit').click();
  await page.waitForSelector('#screen-arcade-result.active');
  await closeDiplomas();
  await sel('#btn-arc-menu').click();

  /* =================================================================
     4. Schatkaart: de tekst volgen met de knoppen
     ================================================================= */
  const ORDER = ['N', 'E', 'S', 'W'];
  for (const lv of [1, 2, 3]) {
    await startGame('treasure', lv);
    const map = await evalIn(() => Arcade.state().game.map);
    let heading = map.start.d;
    const click = async (s, n = 1) => { for (let k = 0; k < n; k++) await sel(s).click(); };
    for (const op of map.ops) {
      if (op.k === 'go') await click(`.tm-dirs .tm-btn[data-d="${op.d}"]`, op.n);
      else if (op.k === 'fwd') await click('.tm-fwd', op.n);
      else if (op.k === 'back') await click('.tm-back', op.n);
      else if (op.k === 'turn') { await click(op.side === 'L' ? '.tm-left-btn' : '.tm-right-btn'); heading = ORDER[(ORDER.indexOf(heading) + (op.side === 'L' ? 3 : 1)) % 4]; }
      else if (op.k === 'face') { while (heading !== op.d) { await click('.tm-right-btn'); heading = ORDER[(ORDER.indexOf(heading) + 1) % 4]; } }
      else if (op.k === 'cross') await click('.tm-fwd', 2);
      else if (op.k === 'until') { if (op.d) await click(`.tm-dirs .tm-btn[data-d="${op.d}"]`, op.n); else await click('.tm-fwd', op.n); }
    }
    await sel('.tm-dig').click();
    const tm = await evalIn(() => ({ correct: Arcade.state().correct, hearts: Arcade.state().hearts, msg: document.querySelector('.tm-msg').textContent }));
    if (tm.correct !== 1 || tm.hearts !== 3) bad(`Schatkaart level ${lv}: following the text with the buttons did not find the treasure (${JSON.stringify(tm)})`);
    else ok(`Schatkaart level ${lv}: the text led to the treasure by clicking (${map.ops.length} instructions)`);
    if (lv === 1) {
      /* de tweede kaart: twee keer verkeerd graven laat de route zien */
      await sel('.tm-next').click();
      await evalIn(() => { const g = Arcade.state().game; g.pose = { x: 0, y: 0, d: 'N' }; g.map.treasure.x === 0 && g.map.treasure.y === 0 && (g.pose = { x: g.map.N - 1, y: g.map.N - 1, d: 'N' }); });
      await sel('.tm-dig').click();
      await page.waitForTimeout(1200);
      await evalIn(() => { const g = Arcade.state().game; g.pose = { x: 0, y: 0, d: 'N' }; g.map.treasure.x === 0 && g.map.treasure.y === 0 && (g.pose = { x: g.map.N - 1, y: g.map.N - 1, d: 'N' }); });
      await sel('.tm-dig').click();
      const reveal = await evalIn(() => ({ route: document.querySelectorAll('.tm-cell.route').length, hearts: Arcade.state().hearts }));
      if (reveal.route < 3 || reveal.hearts !== 1) bad(`two wrong digs should show the route and cost two hearts (${JSON.stringify(reveal)})`);
      else ok('Schatkaart: two wrong digs show the correct route and cost two hearts');
    }
    await evalIn(() => { for (let i = 0; i < 6; i++) Arcade.debugResolve(true); });
    await sel('#btn-arc-quit').click().catch(() => {});
    await page.waitForSelector('#screen-arcade-result.active', { timeout: 8000 });
    await closeDiplomas();
    await sel('#btn-arc-menu').click();
  }

  /* =================================================================
     5. Verhaalpuzzel
     ================================================================= */
  await startGame('storypuzzle', 1);
  const sp0 = await evalIn(() => ({ n: Arcade.state().game.n, locked: Object.keys(Arcade.state().game.locked).length }));
  if (sp0.n !== 5 || sp0.locked !== 1) bad(`level 1 should show 5 sentences with the first one fixed (${JSON.stringify(sp0)})`);
  const movable = await evalIn(() => Arcade.state().game.order.map((id, pos) => pos).filter((pos) => !Arcade.state().game.locked[pos]));
  await sel(`.sp-tile[data-pos="${movable[0]}"]`).click();
  const arrows = await sel('.sp-arrow').count();
  await sel(`.sp-tile[data-pos="${movable[1]}"]`).click();
  await sel('.sp-check').click();
  const spMsg = await sel('.sp-msg').innerText();
  if (arrows !== 2 || !/van de 5 staan goed/.test(spMsg)) bad(`story puzzle: selecting shows up/down arrows and checking says how many are right ("${spMsg}", arrows ${arrows})`);
  await sel('.sp-hint').click();
  if ((await evalIn(() => Arcade.state().game.hints)) !== 1) bad('the story puzzle hint was not counted');
  /* oplossen door te wisselen */
  const sp1 = await evalIn(() => Arcade.state().game.n);
  for (let pos = 0; pos < sp1; pos++) {
    const st = await evalIn(() => ({ order: Arcade.state().game.order.slice(), locked: Object.assign({}, Arcade.state().game.locked) }));
    if (st.order[pos] === pos) continue;
    const at = st.order.indexOf(pos);
    if (st.locked[pos] || st.locked[at]) continue;
    await sel(`.sp-tile[data-pos="${at}"]`).click();
    await sel(`.sp-tile[data-pos="${pos}"]`).click();
  }
  await sel('.sp-check').click();
  const sp2 = await evalIn(() => ({ correct: Arcade.state().correct, msg: document.querySelector('.sp-msg').textContent }));
  if (sp2.correct !== 1) bad(`the story puzzle was not solved by putting the sentences in order (${JSON.stringify(sp2)})`);
  else ok('Verhaalpuzzel: swapping sentences, checking ("x van 5 staan goed") and the hint work and the puzzle can be solved');
  await evalIn(() => { Arcade.debugResolve(false); });
  await evalIn(() => { Arcade.debugResolve(true); });
  await finishToResult();
  /* de teksten komen echt uit de verhalen */
  const real = await evalIn(() => {
    const S = Arcade.module('storypuzzle');
    const p = S.pick(3, {});
    const full = p.story.text.nl.join(' ');
    return p.tiles.every((t) => full.indexOf(t.nl) !== -1);
  });
  if (!real) bad('story puzzle sentences are not literally from the story');
  else ok('story puzzle sentences are literally the story text');

  /* =================================================================
     6. Woordvier
     ================================================================= */
  const t0 = await evalIn(() => Store.player.tickets);
  await startGame('fourrow', 1, 'riddle');
  const f0 = await evalIn(() => ({ deck: Arcade.state().deck, tickets: Store.player.tickets }));
  if (f0.deck !== 'riddle') bad(`Woordvier did not use the riddle deck (${f0.deck})`);
  const wrongW = await evalIn(() => Arcade.state().duels[Arcade.state().game.qi].wrong);
  await sel(`.c4-opt[data-w="${wrongW}"]`).click();
  await page.waitForTimeout(1500);
  const f1 = await evalIn(() => ({ discs: document.querySelectorAll('.c4-disc').length, phase: Arcade.state().game.phase }));
  if (f1.discs !== 1 || f1.phase !== 'answer') bad(`after a wrong answer only the computer should have moved (${JSON.stringify(f1)})`);
  const rightW = await evalIn(() => Arcade.state().duels[Arcade.state().game.qi].right);
  await sel(`.c4-opt[data-w="${rightW}"]`).click();
  await sel('.c4-col[data-c="3"]').click();
  await page.waitForTimeout(1200);
  const f2 = await evalIn(() => ({ discs: document.querySelectorAll('.c4-disc').length, mine: document.querySelectorAll('.c4-disc.p1').length }));
  if (f2.mine !== 1 || f2.discs !== 3) bad(`a right answer and a column should drop my disc and let the computer answer (${JSON.stringify(f2)})`);
  await evalIn(() => Arcade.state().game.debugAlmostWin());
  const rightW2 = await evalIn(() => Arcade.state().duels[Arcade.state().game.qi].right);
  await sel(`.c4-opt[data-w="${rightW2}"]`).click();
  await sel('.c4-col[data-c="0"]').click();
  const fr = await finishToResult();
  const t1 = await evalIn(() => Store.player.tickets);
  if (!fr.win || fr.stars < 1) bad(`four in a row should win (${JSON.stringify(fr)})`);
  else if (t1 !== t0 - 1) bad(`Woordvier should cost one ticket (${t0} → ${t1})`);
  else ok(`Woordvier: riddles gate the moves, a wrong answer skips my turn, four in a row wins (${fr.stars}⭐), one ticket spent`);

  /* =================================================================
     7. Ontsnappingskamers: alle drie de kamers, met echte klikken
     ================================================================= */
  const escapes = await evalIn(() => Arcade.games.filter((g) => g.cat === 'escape').map((g) => g.id));
  if (escapes.length < 2) bad(`expected at least two escape cases, found ${escapes.length}`);
  for (const esc of escapes) for (const lv of [1, 2, 3]) {
    await evalIn((esc) => { Store.player.games = Object.assign({}, Store.player.games, { [esc]: { 1: { stars: 1 }, 2: { stars: 1 } } }); }, esc);
    await startGame(esc, lv);
    const room = await evalIn(() => Arcade.state().game.room);
    const plan = await evalIn(() => Arcade.state().game.solvable(Arcade.state().game.room).order);
    if (lv === 1 && esc === 'escape-plof') {
      /* een fout antwoord kost een hartje */
      await sel('.es-obj[data-id="kluis"]').click();
      await sel('.es-input').fill('000');
      await sel('.es-go').click();
      const eh = await evalIn(() => ({ hearts: Arcade.state().hearts, msg: document.querySelector('.es-msg').textContent }));
      if (eh.hearts !== 2 || !/klopt niet/.test(eh.msg)) bad(`a wrong code should cost a heart (${JSON.stringify(eh)})`);
      else ok('escape room: a wrong code costs a heart');
    }
    for (const id of plan) {
      const o = room.objects.find((x) => x.id === id);
      await sel(`.es-obj[data-id="${id}"]`).click();
      if (o.lock) {
        const lk = o.lock;
        if (lk.kind === 'code') { await sel('.es-input').fill(String(lk.answer)); await sel('.es-go').click(); }
        else if (lk.kind === 'choice') await sel('.es-opt').nth(lk.answer).click();
        else if (lk.kind === 'seq') { for (const i of lk.answer) await sel('.es-opt').nth(i).click(); }
        else if (lk.kind === 'item') await sel('.es-use').click();
      }
    }
    await sel('.es-finish').click();
    const er = await finishToResult();
    if (!er.win) bad(`escape room ${room.id}: solving every lock did not finish the room`);
    else ok(`escape room ${room.id}: solved by reading the clues and opening ${plan.length} things (${er.stars}⭐)`);
  }
  const prog = await evalIn(() => Store.player.escape);
  if (!prog || Object.keys(prog).length !== escapes.length || Object.values(prog).some((c) => Object.keys(c).length !== 3)) bad(`escape room progress was not saved (${JSON.stringify(prog)})`);

  /* =================================================================
     8. Een vervolgverhaal van vier hoofdstukken, en zelf het vervolg schrijven
     ================================================================= */
  await evalIn(() => { renderWorlds(); Books.openShelf(); });
  await page.waitForSelector('#series-shelf .book-card');
  const shelf = await evalIn(() => ({ cards: document.querySelectorAll('#series-shelf .book-card').length, total: window.SERIES.length }));
  if (shelf.cards !== shelf.total) bad(`the shelf shows ${shelf.cards} of ${shelf.total} books`);
  await sel('#series-shelf .book-card[data-series="kruimel"]').click();
  await page.waitForSelector('#screen-book.active');
  const book = await evalIn(() => ({
    chapters: document.querySelectorAll('#book-grid .chapter-card:not(.tbc)').length,
    tbc: document.querySelectorAll('#book-grid .chapter-card.tbc').length,
    write: document.getElementById('book-write').textContent
  }));
  if (book.chapters !== 4 || book.tbc !== 1) bad(`the book should show 4 chapters and a "to be continued" card (${JSON.stringify(book)})`);
  else if (!/Lees eerst het hele boek/.test(book.write)) bad('the writing panel should stay locked until the book is read');
  else ok('a four-chapter saga shows all chapters, a "wordt vervolgd" card and a locked writing panel');

  for (let ch = 1; ch <= 4; ch++) {
    await sel(`#book-grid .chapter-card[data-story="kruimel-${ch}"]`).click();
    await page.waitForSelector('#screen-read.active');
    if (ch > 1) {
      const recap = await evalIn(() => !document.getElementById('story-recap').classList.contains('hidden'));
      if (!recap) bad(`chapter ${ch} did not open with a recap`);
    }
    await sel('#btn-done-reading').click();
    await page.waitForSelector('#screen-quiz.active');
    await answerStory(`kruimel-${ch}`);
    const teaser = await evalIn(() => !document.getElementById('result-teaser').classList.contains('hidden'));
    if (!teaser) bad(`chapter ${ch} ended without a cliffhanger`);
    await closeDiplomas();
    if (ch < 4) {
      await sel('#btn-continue').click();
      await page.waitForSelector('#screen-read.active');
      await evalIn(() => { Books.openBook('kruimel'); });
      await page.waitForSelector('#screen-book.active');
    }
  }
  const write = await evalIn(() => !document.getElementById('btn-write-next').classList.contains('hidden'));
  if (!write) bad('after the last chapter the result screen should offer to write the next chapter');
  await sel('#btn-write-next').click();
  await page.waitForSelector('#bw-text');
  await sel('#bw-title').fill('De tweede Raadselaar');
  await sel('#bw-text').fill('Fenna scheurde de envelop open. Er zat een kaartje in met een raadsel dat ze nog nooit had gezien. Yassin las het drie keer en zei: dit is geen handschrift van mevrouw Wiegersma. Pepijn at zijn koekje en zei alleen maar: ik denk dat ik weet wie het is.');
  await sel('#bw-save').click();
  await page.waitForTimeout(200);
  const wrote = await evalIn(() => ({
    saved: ((Store.player.myChapters || {}).kruimel || []).length,
    badge: Store.player.badges.includes('writer'),
    shown: document.querySelectorAll('.bw-mine').length,
    next: document.querySelector('#book-write h3').textContent
  }));
  if (wrote.saved !== 1 || !wrote.badge || wrote.shown !== 1 || !/hoofdstuk 6/.test(wrote.next)) bad(`writing a chapter did not work (${JSON.stringify(wrote)})`);
  else ok('after reading all 4 chapters the child writes chapter 5: saved, the "Schrijver" badge earned, and the next prompt says chapter 6');
  /* de ouder kan het lezen in het rapport (en een script in de tekst blijft tekst) */
  await evalIn(() => { Store.player.myChapters.kruimel.push({ ts: Date.now(), title: '<b>x</b>', text: 'een <script>alert(1)</script> stukje tekst ' + 'woord '.repeat(30) }); });
  await evalIn(() => { show('worlds'); });
  await sel('#btn-parent').click();
  await page.waitForSelector('#screen-parent.active');
  const gate = await sel('#gate-sum').innerText();
  const [gx, gy] = gate.replace('= ?', '').split('×').map((n) => parseInt(n.trim(), 10));
  await sel('#gate-input').fill(String(gx * gy));
  await sel('#gate-btn').click();
  await page.waitForSelector('#parent-body:not(.hidden)');
  const [dl] = await Promise.all([page.waitForEvent('download', { timeout: 5000 }), sel('#btn-dl-html').click()]);
  const stream = await dl.createReadStream();
  let html = '';
  for await (const chunk of stream) html += chunk.toString();
  if (!/Eigen hoofdstukken|Chapters written/.test(html) || !/Fenna scheurde de envelop open/.test(html)) bad('the HTML report does not include the chapter the child wrote');
  else if (/<script>alert/.test(html)) bad('the HTML report did not escape what the child typed');
  else ok('the parent report shows the chapters the child wrote, and what they typed is escaped');

  /* =================================================================
     9. Op een telefoon past alles
     ================================================================= */
  await page.setViewportSize({ width: 390, height: 800 });
  for (const [id, lv] of [['detective', 3], ['treasure', 3], ['storypuzzle', 3], ['fourrow', 1], ['escape-plof', 3]]) {
    await evalIn(() => { if (S.screen === 'arcade') Arcade.quit(); });
    await page.waitForTimeout(200);
    await evalIn(() => { if (S.screen === 'arcade-result') document.getElementById('btn-arc-menu').click(); });
    await evalIn(([id]) => { Store.player.games = Store.player.games || {}; Store.player.games[id] = { 1: { stars: 1 }, 2: { stars: 1 } }; Store.player.tickets = 5; show('worlds'); }, [id]);
    await evalIn(([id, lv]) => { Arcade.start(id, lv); }, [id, lv]);
    await page.waitForSelector('#screen-arcade.active');
    await sel('#arc-start').click();
    await page.waitForTimeout(250);
    const fit = await evalIn(() => ({ overflow: document.documentElement.scrollWidth - document.documentElement.clientWidth, view: window.innerWidth }));
    if (fit.overflow > 2) bad(`${id} does not fit on a phone: the page scrolls sideways by ${fit.overflow}px`);
  }
  ok('all new games fit on a 390px phone screen without scrolling sideways');

} catch (e) {
  bad('the test crashed: ' + (e && e.stack || e));
}

await browser.close();
server.close();
console.log('\n📚 Leeskampioen - puzzle and story test');
console.log('───────────────────────────────────────────────');
console.log(steps.join('\n'));
console.log('───────────────────────────────────────────────');
if (problems.length) {
  console.log(`  ❌ ${problems.length} problem${problems.length === 1 ? '' : 's'}.`);
  process.exit(1);
}
console.log('  ✅ the puzzles and stories play through without a single error.');
