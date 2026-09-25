/* =====================================================================
   Leeskampioen - arcade autopilot (optional, not part of CI).

   Plays one full 15-word round of each arcade game with REAL physics:
   the owl steers to the right gate, the runner jumps when the right word
   is high, the bucket moves under the right drop. Every game should end
   15/15 with 3 hearts. Use it after changing speeds, gravity, gap sizes
   or spawn distances in js/arcade.js - that is exactly how a too-hard
   Flappy Uil was caught. Takes about three minutes.

   Run it with:   node tools/autopilot.mjs [width] [games]
   e.g.           node tools/autopilot.mjs 390 flappy,runner
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
const page = await browser.newPage({ viewport: { width, height: 820 } });
const errs = [];
let failed = false;
page.on('pageerror', (e) => errs.push(e.message));
await page.goto('http://localhost:8798/', { waitUntil: 'networkidle' });
await page.fill('#input-name', 'Pilot'); await page.click('#btn-start');
await page.waitForSelector('#screen-worlds.active');
for (const g of (process.argv[3] || 'flappy,runner,rain').split(',')) {
  await page.evaluate((g) => { Store.player.tickets = 5; Arcade.start(g); }, g);
  await page.click('#arc-start');
  await page.evaluate((g) => {
    const G = Arcade.state();
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
      } else {
        const d = m.drops.find((d) => d.right && !G.duels[d.di].done);
        if (d) m.pointer(d.x);
      }
    }, 16);
  }, g);
  const t0 = Date.now();
  await page.waitForSelector('#screen-arcade-result.active', { timeout: 150000 });
  const r = await page.evaluate(() => { clearInterval(window.__pilot); const G = Arcade.state(); return G.last_result; });
  if (r.correct !== r.total || r.hearts !== 3) failed = true;
  console.log(`${g} @${width}px: ${r.correct}/${r.total} correct, hearts ${r.hearts}, score ${r.score}, win ${r.win}, ${(Date.now() - t0) / 1000}s, missed: ${r.mistakes.map((d) => d.right + '(' + d.how + ')').join(' ')}`);
  await page.click('#btn-arc-menu');
}
console.log('errors', JSON.stringify(errs));
await browser.close(); server.close();
if (errs.length || failed) process.exit(1);
