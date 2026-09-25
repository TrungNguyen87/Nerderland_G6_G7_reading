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

  /* ---- toast ----
     Berichten komen in een rij: na een verhaal kunnen er tegelijk een
     dagopdracht, een cadeau en een badge binnenkomen, en die moet het kind
     alle drie kunnen lezen in plaats van alleen de laatste. */
  const toastEl = document.getElementById('toast');
  const queue = [];
  let showing = false;
  function toast(msg, ms) {
    if (queue.length && queue[queue.length - 1].msg === msg) return;   /* geen dubbele */
    if (showing && queue.length >= 4) queue.shift();                   /* niet eindeloos opstapelen */
    queue.push({ msg: msg, ms: ms || 2600 });
    if (!showing) nextToast();
  }
  function nextToast() {
    const item = queue.shift();
    if (!item) { showing = false; return; }
    showing = true;
    toastEl.textContent = item.msg;
    toastEl.classList.add('show');
    /* staan er nog meer klaar, dan iets sneller door naar de volgende */
    const ms = queue.length ? Math.min(item.ms, 2200) : item.ms;
    setTimeout(function () {
      toastEl.classList.remove('show');
      setTimeout(nextToast, 260);
    }, ms);
  }

  /* ---- getal dat optelt (XP en munten op het resultaatscherm) ---- */
  function countUp(el, to, prefix) {
    if (!el) return;
    const start = performance.now();
    const dur = Math.min(900, 250 + to * 12);
    prefix = prefix || '';
    if (!to) { el.textContent = prefix + '0'; return; }
    function step(now) {
      const f = Math.min((now - start) / dur, 1);
      el.textContent = prefix + Math.round(to * (1 - Math.pow(1 - f, 3)));
      if (f < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  /* ---- level-up overlay ---- */
  let levelTimer = null;
  function levelUp(text, sub) {
    const el = document.getElementById('levelup');
    document.getElementById('lu-text').textContent = text;
    const subEl = document.getElementById('lu-sub');
    subEl.textContent = sub || '';
    subEl.classList.toggle('hidden', !sub);
    el.classList.remove('hidden');
    burst(120);
    Sound.levelup();
    clearTimeout(levelTimer);
    levelTimer = setTimeout(function () { el.classList.add('hidden'); }, sub ? 3000 : 2200);
  }
  /* wie niet wil wachten, tikt het scherm weg */
  document.getElementById('levelup').addEventListener('click', function () {
    clearTimeout(levelTimer);
    this.classList.add('hidden');
  });

  /* ---- combo: "3 op een rij!" groot in beeld, als extra aanmoediging ---- */
  const comboEl = document.getElementById('combo');
  let comboTimer = null;
  function combo(n) {
    if (!comboEl) return;
    const nl = window.LANG !== 'en';
    const word = n >= 10 ? (nl ? 'ONSTOPBAAR!' : 'UNSTOPPABLE!') : n >= 5 ? (nl ? 'SUPERREEKS!' : 'SUPER STREAK!') : (nl ? 'OP EEN RIJ!' : 'IN A ROW!');
    comboEl.innerHTML = '<b>' + n + '×</b><span>' + (n >= 5 ? '🔥 ' : '⚡ ') + word + '</span>';
    comboEl.classList.remove('show');
    void comboEl.offsetWidth;   /* animatie opnieuw starten */
    comboEl.classList.add('show');
    clearTimeout(comboTimer);
    comboTimer = setTimeout(function () { comboEl.classList.remove('show'); }, 1300);
    if (n >= 5) burst(70);
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

  return { burst: burst, setShapes: setShapes, toast: toast, countUp: countUp, levelUp: levelUp, combo: combo, say: say, hush: hush };
})();
