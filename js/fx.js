/* =====================================================================
   Visuele effecten: confetti, zwevende achtergrondvormen, uil-mascotte,
   toast-berichten en het level-up scherm.
   ===================================================================== */
const FX = (function () {
  const canvas = document.getElementById('confetti');
  const ctx = canvas.getContext('2d');
  let pieces = [];
  let running = false;

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resize);
  resize();

  const COLORS = ['#ffb703', '#fb8500', '#8ecae6', '#219ebc', '#e63946', '#06d6a0', '#b388ff', '#ff6bcb'];

  function burst(n, originY) {
    for (let i = 0; i < n; i++) {
      pieces.push({
        x: Math.random() * canvas.width,
        y: (originY === undefined ? -20 : originY) - Math.random() * 120,
        vx: (Math.random() - 0.5) * 3.4,
        vy: Math.random() * 3 + 2.2,
        size: Math.random() * 9 + 5,
        color: COLORS[(Math.random() * COLORS.length) | 0],
        rot: Math.random() * Math.PI,
        vr: (Math.random() - 0.5) * 0.24,
        shape: Math.random() < 0.35 ? 'circle' : 'rect'
      });
    }
    if (!running) { running = true; requestAnimationFrame(loop); }
  }

  function loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    pieces = pieces.filter(function (p) { return p.y < canvas.height + 40; });
    pieces.forEach(function (p) {
      p.x += p.vx; p.y += p.vy; p.rot += p.vr; p.vy += 0.045;
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot);
      ctx.fillStyle = p.color;
      if (p.shape === 'circle') { ctx.beginPath(); ctx.arc(0, 0, p.size / 2, 0, 7); ctx.fill(); }
      else ctx.fillRect(-p.size / 2, -p.size / 3, p.size, p.size / 1.6);
      ctx.restore();
    });
    if (pieces.length) requestAnimationFrame(loop);
    else { running = false; ctx.clearRect(0, 0, canvas.width, canvas.height); }
  }

  /* ---- zwevende vormen op de achtergrond, passend bij de wereld ---- */
  const shapesEl = document.getElementById('bg-shapes');
  function setShapes(emojis) {
    shapesEl.innerHTML = '';
    for (let i = 0; i < 14; i++) {
      const s = document.createElement('span');
      s.textContent = emojis[i % emojis.length];
      s.style.left = (Math.random() * 100) + '%';
      s.style.fontSize = (Math.random() * 30 + 18) + 'px';
      s.style.animationDuration = (Math.random() * 26 + 22) + 's';
      s.style.animationDelay = (-Math.random() * 40) + 's';
      s.style.setProperty('--dx', (Math.random() * 160 - 80) + 'px');
      shapesEl.appendChild(s);
    }
  }

  /* ---- toast ---- */
  const toastEl = document.getElementById('toast');
  let toastTimer = null;
  function toast(msg, ms) {
    toastEl.textContent = msg;
    toastEl.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toastEl.classList.remove('show'); }, ms || 2600);
  }

  /* ---- level-up overlay ---- */
  function levelUp(text) {
    const el = document.getElementById('levelup');
    document.getElementById('lu-text').textContent = text;
    el.classList.remove('hidden');
    burst(120);
    Sound.levelup();
    setTimeout(function () { el.classList.add('hidden'); }, 2200);
  }

  /* ---- uil ---- */
  const owl = document.querySelector('.owl');
  const bubble = document.getElementById('mascot-bubble');
  function blink() {
    if (!owl) return;
    owl.classList.add('blink');
    setTimeout(function () { owl.classList.remove('blink'); }, 150);
  }
  setInterval(function () { if (Math.random() < 0.55) blink(); }, 3200);

  function say(text, mood) {
    if (!bubble) return;
    bubble.textContent = text;
    bubble.classList.add('show');
    owl.classList.remove('cheer', 'sad');
    if (mood === 'happy') { owl.classList.add('cheer'); setTimeout(function () { owl.classList.remove('cheer'); }, 1300); }
    if (mood === 'sad') { owl.classList.add('sad'); setTimeout(function () { owl.classList.remove('sad'); }, 1600); }
  }
  function hush() { if (bubble) bubble.classList.remove('show'); }

  return { burst: burst, setShapes: setShapes, toast: toast, levelUp: levelUp, say: say, hush: hush };
})();
