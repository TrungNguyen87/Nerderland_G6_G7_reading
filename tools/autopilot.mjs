/* =====================================================================
   Leeskampioen - arcade autopilot (optional, not part of CI).

   Plays full rounds of the real-time arcade games with REAL physics: the
   owl steers to the right gate, the runner jumps when the right word is
   high, the bucket moves under the right drop, the climber jumps to the
   right platform (after "reading" for a moment, so the lava gets a
   chance), the Mario-style hero times its jump under the misspelled
   block and stomps beetles, and the kart steers into the right lane.
   Every round should end with every word right and all hearts left. Use
   it after changing speeds, gravity, gap sizes or spawn distances in
   js/arcade.js or js/games/*.js - that is exactly how a too-hard Flappy
   Uil was caught. Takes several minutes per level.

   Run it with:   node tools/autopilot.mjs [width] [games] [levels]
   e.g.           node tools/autopilot.mjs 390 flappy,bonk 1,3
   ===================================================================== */
import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { join, extname, normalize } from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright';
const ROOT = fileURLToPath(new URL('..', import.meta.url));
const MIME = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css' };
const server = createServer(async (req, res) => {
  const url = decodeURIComponent(req.url.split('?')[0]);
  const file = join(ROOT, normalize(url === '/' ? '/index.html' : url));
  try { await stat(file); res.writeHead(200, { 'Content-Type': MIME[extname(file)] || 'application/octet-stream' }); res.end(await readFile(file)); }
  catch { res.writeHead(404); res.end(); }
});
await new Promise((r) => server.listen(8798, r));
const browser = await chromium.launch(
  process.env.PLAYWRIGHT_CHROMIUM ? { executablePath: process.env.PLAYWRIGHT_CHROMIUM } : {}
);
const width = Number(process.argv[2] || 1000);
const games = (process.argv[3] || 'flappy,runner,rain,obby,bonk,race').split(',');
const levels = (process.argv[4] || '1').split(',').map(Number);
const page = await browser.newPage({ viewport: { width, height: 820 } });
const errs = [];
let failed = false;
page.on('pageerror', (e) => errs.push(e.message));
await page.goto('http://localhost:8798/', { waitUntil: 'networkidle' });
await page.fill('#input-name', 'Pilot'); await page.click('#btn-start');
await page.waitForSelector('#screen-worlds.active');
/* every level open, nothing locked: this is about physics, not the ladder */
await page.evaluate(() => { Store.player.lockEasy = false; Store.player.games = {}; });
for (const lv of levels) {
  for (const g of games) {
    await page.evaluate(({ g, lv }) => {
      Store.player.tickets = 5;
      Store.player.games[g] = { 1: { stars: 3 }, 2: { stars: 3 } };
      Arcade.start(g, lv);
    }, { g, lv });
    await page.click('#arc-start');
    await page.evaluate((g) => {
      const G = Arcade.state();
      let waitUntil = 0;
      window.__pilot = setInterval(() => {
        const m = G.game; if (!m || G.state !== 'play') return;
        if (g === 'flappy') {
          const o = m.owl;
          const c = m.cols.find((c) => !G.duels[c.di].done && c.x + c.w > o.x - o.r);
          const ty = c ? (c.rightTop ? m.topY : m.botY) : G.H * 0.45;
          if (o.y > ty + 8 && o.vy > 0) m.action();
        } else if (g === 'runner') {
          const h = m.hero; const front = h.x + h.w / 2;
          for (const it of m.items) {
            if (it.x + it.w < h.x - h.w) continue;
            if (it.kind === 'snail') { if (it.x - front < 40 && it.x - front > 0) m.action(); break; }
            if (G.duels[it.di].done) continue;
            if (it.rightHigh && it.x - front < 62 && it.x - front > 20) m.action();
            break;
          }
        } else if (g === 'rain') {
          const d = m.drops.find((d) => d.right && !G.duels[d.di].done);
          if (d) m.pointer(d.x);
        } else if (g === 'obby') {
          /* a child reads both words first: 2.5 seconds per floor */
          if (m.anim || performance.now() < waitUntil) return;
          if (!waitUntil) { waitUntil = performance.now() + 2500; return; }
          waitUntil = 0;
          const f = m.floors[m.at + 1];
          if (f) m.jump(f.rightLeft ? 'L' : 'R');
        } else if (g === 'bonk') {
          const h = m.hero; const hx = m.heroX();
          if (h.h > 4) return;
          const bug = m.items.find((it) => it.kind === 'bug' && !it.dead && it.x - hx > 0 && it.x - hx < 80);
          if (bug && bug.x - hx < 56) { m.action(); return; }
          const s = m.sentence();
          if (s && !s.done) {
            const b = s.blocks.find((x) => x.err);
            const c = b.x + b.w / 2;
            if (c - hx < 12 && c - hx > 0) m.action();
          }
        } else if (g === 'race') {
          const r = m.rows.filter((r) => !r.judged).sort((a, b) => b.y - a.y)[0];
          if (r && r.y > -40) m.steer(r.lanes.indexOf('right'));
        }
      }, 16);
    }, g);
    const t0 = Date.now();
    await page.waitForSelector('#screen-arcade-result.active', { timeout: 240000 });
    const r = await page.evaluate(() => { clearInterval(window.__pilot); const G = Arcade.state(); return G.last_result; });
    const full = r.correct === r.total && r.total === r.of && r.hearts === 3;
    if (!full) failed = true;
    console.log(`${full ? '✅' : '❌'} ${g} L${lv} @${width}px: ${r.correct}/${r.total} correct, hearts ${r.hearts}, score ${r.score}, stars ${r.stars}, ${(Date.now() - t0) / 1000}s` +
      (r.place ? `, place ${r.place}` : '') + `, missed: ${r.mistakes.map((d) => d.right + '(' + d.how + ')').join(' ')}`);
    /* a diploma appears a moment after the result: close it first */
    await page.waitForTimeout(900);
    await page.evaluate(() => { const o = document.getElementById('diploma-overlay'); if (!o.classList.contains('hidden')) document.getElementById('dip-close').click(); });
    await page.click('#btn-arc-menu');
  }
}
console.log('errors', JSON.stringify(errs));
await browser.close(); server.close();
if (errs.length || failed) process.exit(1);
