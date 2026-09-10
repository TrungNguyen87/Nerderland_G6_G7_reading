/* =====================================================================
   Geluid. Alles wordt live gemaakt met de WebAudio API, dus er zijn
   geen mp3-bestanden nodig en de site blijft klein en offline bruikbaar.
   ===================================================================== */
const Sound = (function () {
  let ctx = null;
  let on = true;

  function ensure() {
    if (!ctx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return null;
      ctx = new AC();
    }
    if (ctx.state === 'suspended') ctx.resume();
    return ctx;
  }

  /* één toon */
  function tone(freq, start, dur, type, vol) {
    const c = ensure(); if (!c) return;
    const osc = c.createOscillator();
    const gain = c.createGain();
    osc.type = type || 'sine';
    osc.frequency.setValueAtTime(freq, c.currentTime + start);
    gain.gain.setValueAtTime(0, c.currentTime + start);
    gain.gain.linearRampToValueAtTime(vol === undefined ? 0.18 : vol, c.currentTime + start + 0.015);
    gain.gain.exponentialRampToValueAtTime(0.0001, c.currentTime + start + dur);
    osc.connect(gain).connect(c.destination);
    osc.start(c.currentTime + start);
    osc.stop(c.currentTime + start + dur + 0.02);
  }

  function melody(notes) {
    if (!on) return;
    notes.forEach(function (n) { tone(n[0], n[1], n[2], n[3], n[4]); });
  }

  return {
    setOn: function (v) { on = v; },
    isOn: function () { return on; },
    click:    function () { melody([[520, 0, 0.06, 'triangle', 0.10]]); },
    correct:  function () { melody([[660, 0, 0.10, 'triangle', 0.16], [880, 0.09, 0.10, 'triangle', 0.16], [1180, 0.18, 0.22, 'triangle', 0.14]]); },
    wrong:    function () { melody([[300, 0, 0.14, 'sawtooth', 0.10], [200, 0.13, 0.24, 'sawtooth', 0.09]]); },
    star:     function () { melody([[880, 0, 0.09, 'sine', 0.14], [1180, 0.08, 0.09, 'sine', 0.14], [1560, 0.16, 0.30, 'sine', 0.13]]); },
    levelup:  function () { melody([[520, 0, 0.11, 'square', 0.12], [660, 0.10, 0.11, 'square', 0.12], [790, 0.20, 0.11, 'square', 0.12], [1050, 0.30, 0.40, 'square', 0.12]]); },
    flash:    function () { melody([[1200, 0, 0.05, 'sine', 0.10]]); },
    finish:   function () { melody([[520,0,0.12,'triangle',.14],[660,.12,0.12,'triangle',.14],[790,.24,0.12,'triangle',.14],[1050,.36,0.5,'triangle',.14]]); }
  };
})();

/* ---------------------------------------------------------------------
   Voorlezen met de stem van het apparaat (Web Speech API).
   Werkt op de meeste tablets, telefoons en desktops. Op sommige Linux-
   systemen ontbreekt een Nederlandse stem; dan valt hij stilletjes terug.
   --------------------------------------------------------------------- */
const Speech = (function () {
  const synth = window.speechSynthesis || null;
  let voices = [];

  function load() { if (synth) voices = synth.getVoices() || []; }
  if (synth) {
    load();
    if (typeof synth.onvoiceschanged !== 'undefined') synth.onvoiceschanged = load;
  }

  function pick(lang) {
    if (!voices.length) load();
    const want = lang === 'nl' ? 'nl' : 'en';
    let v = voices.find(function (x) { return x.lang && x.lang.toLowerCase().indexOf(want + '-') === 0; });
    if (!v) v = voices.find(function (x) { return x.lang && x.lang.toLowerCase().indexOf(want) === 0; });
    return v || null;
  }

  return {
    available: function () { return !!synth; },
    speak: function (text, lang, rate, onEnd) {
      if (!synth) { if (onEnd) onEnd(); return; }
      synth.cancel();
      const u = new SpeechSynthesisUtterance(text);
      const v = pick(lang);
      if (v) u.voice = v;
      u.lang = lang === 'nl' ? 'nl-NL' : 'en-GB';
      u.rate = rate || 0.92;      /* iets langzamer dan normaal, prettig om mee te lezen */
      u.pitch = 1.05;
      u.onend = function () { if (onEnd) onEnd(); };
      u.onerror = function () { if (onEnd) onEnd(); };
      synth.speak(u);
    },
    stop: function () { if (synth) synth.cancel(); },
    speaking: function () { return synth ? synth.speaking : false; }
  };
})();
