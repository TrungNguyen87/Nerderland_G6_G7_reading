/* =====================================================================
   Beloningen: alles wat een kind laat terugkomen om nog een verhaal te
   lezen, bovenop de XP, munten en badges die er al waren.

   - Dagopdrachten: elke dag drie kleine opdrachten (bijv. "lees 2
     verhalen", "tik op 3 moeilijke woorden"). Alle drie klaar = een cadeau.
     Welke drie het zijn, hangt af van de datum en de speler, zodat ze de
     hele dag hetzelfde blijven maar elke dag anders zijn.
   - Dagreeks: hoeveel dagen op rij er iets is uitgespeeld (een verhaal of
     een spellingoefening). Bij 3, 7, 14 en 30 dagen een cadeau.
   - Cadeaudozen: te openen met een tik. Er zit een verzamelcadeau in (alleen
     zo te krijgen, niet te koop), een jokerkaart of een handje munten.
   - Het album: alle verzamelcadeaus, met de nog-niet-gevonden als ❓.
   - Weetjes: een korte "wist je dat?" van Oscar bij de werelden en na een
     verhaal, uit data/facts.js.

   Alles staat in Store.player, dus per kind en alleen op dit apparaat.
   Munten uit een cadeaudoos tellen NIET mee voor de dagelijkse muntengrens
   (DAILY_COIN_CAP): een doos krijg je alleen voor echt lezen, en er komen
   er maar een paar per dag bij.
   ===================================================================== */
'use strict';

const Rewards = (function () {

  /* ev = de gebeurtenis waarop de opdracht let (zie track() hieronder) */
  const QUESTS = [
    { id: 'read1',     group: 'read', ev: 'story',        goal: 1,  emoji: '📖', nl: 'Lees 1 verhaal uit',              en: 'Finish 1 story' },
    { id: 'read2',     group: 'read', ev: 'story',        goal: 2,  emoji: '📚', nl: 'Lees 2 verhalen uit',             en: 'Finish 2 stories' },
    { id: 'worlds2',   group: 'read', ev: 'world',        goal: 2,  emoji: '🧭', nl: 'Lees in 2 verschillende werelden', en: 'Read in 2 different worlds' },
    { id: 'correct8',  ev: 'correct',      goal: 8,  emoji: '✅', nl: 'Beantwoord 8 vragen goed',        en: 'Answer 8 questions correctly' },
    { id: 'stars3',    ev: 'perfect',      goal: 1,  emoji: '⭐', nl: 'Haal 3 sterren bij een verhaal',  en: 'Get 3 stars on a story' },
    { id: 'nohint',    ev: 'nohint',       goal: 1,  emoji: '🦉', nl: 'Maak een verhaal af zonder hint of joker', en: 'Finish a story without a hint or joker' },
    { id: 'spell1',    ev: 'spellSet',     goal: 1,  emoji: '✍️', nl: 'Maak 1 spellingoefening',          en: 'Do 1 spelling exercise' },
    { id: 'spell6',    ev: 'spellCorrect', goal: 6,  emoji: '🅰️', nl: 'Spel 6 woorden goed',              en: 'Spell 6 words correctly' },
    { id: 'words3',    ev: 'wordHelp',     goal: 3,  emoji: '📌', nl: 'Tik op 3 moeilijke woorden',       en: 'Tap 3 tricky words' },
    { id: 'minutes10', ev: 'readMin',      goal: 10, emoji: '⏱', nl: 'Lees 10 minuten',                  en: 'Read for 10 minutes' },
    { id: 'flash1',    ev: 'flash',        goal: 1,  emoji: '⚡', nl: 'Speel een bonusronde',             en: 'Play a bonus round' }
  ];
  const STREAK_GIFTS = [3, 7, 14, 30];
  const TIER_WEIGHT = { common: 8, uncommon: 5, rare: 2.5, epic: 1 };
  const GIFT_TIERS = ['common', 'uncommon', 'rare', 'epic'];

  /* waar een doos vandaan komt, voor de melding en de kop van de doos */
  function srcText(src, heading) {
    if (src === 'daily') return heading ? t('chestFromDaily') : t('chestEarnedDaily');
    if (src === 'streak') return heading ? t('chestFromStreak') : t('chestEarnedStreak');
    if (src === 'level') return heading ? t('chestFromLevel') : t('chestEarnedLevel');
    return heading ? t('chestFromStar') : t('chestEarnedStar');
  }

  function questById(id) { return QUESTS.filter(function (q) { return q.id === id; })[0]; }
  function active() { return !!Store.activeProfileId; }

  /* ---- een klein, voorspelbaar dobbelsteentje: zelfde dag + zelfde
     speler = dezelfde opdrachten, ook na herladen ---- */
  function seeded(str) {
    let h = 2166136261;
    for (let i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 16777619); }
    return function () {
      h += 0x6D2B79F5;
      let x = h;
      x = Math.imul(x ^ (x >>> 15), x | 1);
      x ^= x + Math.imul(x ^ (x >>> 7), x | 61);
      return ((x ^ (x >>> 14)) >>> 0) / 4294967296;
    };
  }
  function pickQuests(day) {
    const rnd = seeded(day + '|' + (Store.activeProfileId || ''));
    const reading = QUESTS.filter(function (q) { return q.group === 'read'; });
    const rest = QUESTS.filter(function (q) { return q.group !== 'read'; });
    const first = reading[Math.floor(rnd() * reading.length)];
    const picks = [first.id];
    while (picks.length < 3) {
      const q = rest[Math.floor(rnd() * rest.length)];
      if (picks.indexOf(q.id) === -1) picks.push(q.id);
    }
    return picks;
  }

  /* de opdrachten van vandaag (maakt ze aan zodra er een nieuwe dag is) */
  function today() {
    const p = Store.player;
    const d = localDay();
    if (!p.quests || p.quests.date !== d || !Array.isArray(p.quests.ids)) {
      p.quests = { date: d, ids: pickQuests(d), prog: {}, worlds: {}, done: {}, rewarded: false };
    }
    return p.quests;
  }

  /* ---- een gebeurtenis in het spel telt mee voor de dagopdrachten ---- */
  function track(ev, amount, extra) {
    if (!active()) return;
    const q = today();
    if (ev === 'world' && extra) q.worlds[extra] = 1;
    const finished = [];
    q.ids.forEach(function (id) {
      const def = questById(id);
      if (!def || def.ev !== ev || q.done[id]) return;
      q.prog[id] = ev === 'world'
        ? Object.keys(q.worlds).length
        : (q.prog[id] || 0) + (amount === undefined ? 1 : amount);
      if (q.prog[id] >= def.goal) { q.done[id] = true; finished.push(def); }
    });
    finished.forEach(function (def) {
      FX.toast('✅ ' + t('questDone') + ' ' + def.emoji + ' ' + L(def), 3000);
      Sound.star();
      Store.log('quest_done', { quest: def.id });
    });
    if (!q.rewarded && q.ids.every(function (id) { return q.done[id]; })) {
      q.rewarded = true;
      const p = Store.player;
      p.questDays = (p.questDays || 0) + 1;
      FX.burst(120);
      grantChest('daily');
    }
    Store.save();
    if (S.screen === 'worlds') renderToday();
  }

  /* ---- dagreeks: vandaag iets uitgespeeld? ---- */
  function yesterday() {
    const d = new Date();
    d.setDate(d.getDate() - 1);   /* zo gaat zomer-/wintertijd ook goed */
    return localDay(d.getTime());
  }
  function markPlayedToday() {
    if (!active()) return;
    const p = Store.player;
    const d = localDay();
    const ds = p.dayStreak || { last: '', count: 0, best: 0 };
    if (ds.last === d) return;
    ds.count = ds.last === yesterday() ? ds.count + 1 : 1;
    ds.last = d;
    ds.best = Math.max(ds.best || 0, ds.count);
    p.dayStreak = ds;
    Store.log('day_streak', { days: ds.count });
    if (ds.count > 1) FX.toast('🔥 ' + t('dayStreakToast').replace('{n}', ds.count), 3000);
    if (STREAK_GIFTS.indexOf(ds.count) !== -1) grantChest('streak');
    Store.save();
  }
  /* hoeveel dagen op rij, zoals het NU is: een reeks van eergisteren is al gebroken */
  function currentStreak() {
    const ds = Store.player.dayStreak;
    if (!ds || !ds.last) return 0;
    return (ds.last === localDay() || ds.last === yesterday()) ? ds.count : 0;
  }

  /* =====================================================================
     Cadeaudozen
     ===================================================================== */
  function chests() {
    const p = Store.player;
    if (!Array.isArray(p.chests)) p.chests = [];
    return p.chests;
  }

  function grantChest(src) {
    if (!active()) return;
    chests().push({ src: src, at: Date.now() });
    Store.log('chest_earned', { src: src });
    Store.save();
    Sound.coin();
    FX.toast('🎁 ' + srcText(src, false), 3200);
    renderChestButton();
  }

  function giftItems() {
    return (window.SHOP_ITEMS || []).filter(function (it) { return it.kind === 'gift'; });
  }
  function ownedGifts() {
    const p = Store.player;
    if (!p.owned) p.owned = {};
    if (!Array.isArray(p.owned.gift)) p.owned.gift = [];
    return p.owned.gift;
  }

  /* wat zit er in de doos? */
  function roll(src) {
    const have = ownedGifts();
    const left = giftItems().filter(function (g) { return have.indexOf(g.id) === -1; });
    const big = src !== 'star';                    /* dagopdracht, reeks en level-doos zijn "groot" */
    const r = Math.random();
    const giftChance = big ? 0.72 : 0.55;
    if (left.length && r < giftChance) {
      /* grote dozen geven vaker iets zeldzaams */
      const weights = left.map(function (g) {
        const w = TIER_WEIGHT[g.tier] || 1;
        return big && (g.tier === 'rare' || g.tier === 'epic') ? w * 2 : w;
      });
      let x = Math.random() * weights.reduce(function (a, b) { return a + b; }, 0);
      for (let i = 0; i < left.length; i++) {
        x -= weights[i];
        if (x <= 0) return { type: 'gift', item: left[i] };
      }
      return { type: 'gift', item: left[left.length - 1] };
    }
    if (r < giftChance + 0.14) return { type: 'joker', amount: 1 };
    const coins = big ? 10 + Math.floor(Math.random() * 11) : 5 + Math.floor(Math.random() * 6);
    return { type: 'coins', amount: coins };
  }

  function applyReward(rw, src) {
    const p = Store.player;
    if (rw.type === 'gift') {
      ownedGifts().push(rw.item.id);
    } else if (rw.type === 'joker') {
      if (!p.tools) p.tools = { jokers: 0 };
      p.tools.jokers = (p.tools.jokers || 0) + rw.amount;
    } else {
      p.coins = (p.coins || 0) + rw.amount;
      Store.log('coins_earned', { amount: rw.amount, reason: 'chest:' + src });
    }
    Store.log('chest_open', { src: src, reward: rw.type, item: rw.item ? rw.item.id : '', amount: rw.amount || 0 });
    Store.save();
  }

  let opening = null;
  function openChest() {
    const list = chests();
    if (!list.length || opening) return;
    opening = { chest: list[0], reward: null };
    Sound.click();
    const ov = $('chest-overlay');
    ov.classList.remove('hidden', 'opened');
    $('chest-src').textContent = srcText(opening.chest.src, true);
    $('chest-tap').textContent = t('chestTap');
    $('chest-reward').classList.add('hidden');
    $('chest-close').classList.add('hidden');
    $('chest-gift').disabled = false;
    $('chest-gift').focus();
  }

  function crackChest() {
    if (!opening || opening.reward) return;
    const gift = $('chest-gift');
    gift.disabled = true;
    gift.classList.add('shake');
    Sound.flash();
    setTimeout(function () {
      if (!opening) return;
      gift.classList.remove('shake');
      const rw = roll(opening.chest.src);
      opening.reward = rw;
      chests().shift();
      applyReward(rw, opening.chest.src);

      $('chest-overlay').classList.add('opened');
      Sound.chest();
      FX.burst(rw.type === 'gift' && (rw.item.tier === 'rare' || rw.item.tier === 'epic') ? 220 : 130);

      const tier = $('chest-tier');
      if (rw.type === 'gift') {
        $('chest-emoji').textContent = rw.item.emoji;
        $('chest-name').textContent = L(rw.item);
        $('chest-desc').textContent = t('chestGiftDesc');
        tier.textContent = L(TIER_LABEL[rw.item.tier]);
        tier.className = 'sc-tier sc-tier-' + rw.item.tier;
      } else if (rw.type === 'joker') {
        $('chest-emoji').textContent = '🃏';
        $('chest-name').textContent = t('chestJoker');
        $('chest-desc').textContent = t('chestJokerDesc');
        tier.className = 'sc-tier hidden';
      } else {
        $('chest-emoji').textContent = '🪙';
        $('chest-name').textContent = '+' + rw.amount + ' ' + t('coinsLabel');
        $('chest-desc').textContent = t('chestCoinsDesc');
        tier.className = 'sc-tier hidden';
      }
      $('chest-tap').textContent = '';
      $('chest-reward').classList.remove('hidden');
      const close = $('chest-close');
      close.textContent = chests().length ? t('chestNext').replace('{n}', chests().length) : t('chestClose');
      close.classList.remove('hidden');
      close.focus();

      /* een badge die hierdoor binnenkomt (bijv. 10 cadeaus verzameld) */
      checkBadges({}).forEach(function (b) {
        FX.toast('🏅 ' + (window.LANG === 'nl' ? b.nl : b.en), 3000);
      });
      updateHUD();
    }, 900);
  }

  function closeChest() {
    const more = chests().length > 0;
    opening = null;
    $('chest-overlay').classList.add('hidden');
    if (S.screen === 'worlds') renderWorlds();
    else if (S.screen === 'shop') renderShop();
    renderChestButton();
    if (more) setTimeout(openChest, 180);
  }

  function renderChestButton() {
    const btn = $('btn-chest');
    if (!btn) return;
    const n = active() ? chests().length : 0;
    btn.classList.toggle('hidden', !n);
    $('chest-n').textContent = n;
  }

  /* =====================================================================
     Het kaartje "Vandaag" bovenaan het wereldenscherm
     ===================================================================== */
  function questRows(box, compact) {
    const q = today();
    box.innerHTML = '';
    q.ids.forEach(function (id) {
      const def = questById(id);
      if (!def) return;
      const prog = Math.min(q.prog[id] || 0, def.goal);
      const done = !!q.done[id];
      const row = document.createElement('div');
      row.className = 'quest' + (done ? ' done' : '') + (compact ? ' compact' : '');
      const shown = def.ev === 'readMin' ? Math.floor(prog) : prog;
      row.innerHTML =
        '<span class="quest-emoji">' + (done ? '✅' : def.emoji) + '</span>' +
        '<span class="quest-main"><span class="quest-name"></span>' +
        '<span class="quest-track"><i style="width:' + Math.round(prog / def.goal * 100) + '%"></i></span></span>' +
        '<span class="quest-count">' + shown + '/' + def.goal + '</span>';
      row.querySelector('.quest-name').textContent = L(def);
      box.appendChild(row);
    });
    return q;
  }

  function renderQuestStrip(box) {
    if (!box) return;
    if (!active()) { box.innerHTML = ''; return; }
    const q = questRows(box, true);
    const h = document.createElement('p');
    h.className = 'quest-strip-head';
    h.textContent = q.rewarded ? '🎁 ' + t('questsAllDone') : '🎯 ' + t('questsTitle');
    box.insertBefore(h, box.firstChild);
  }

  function renderToday() {
    const card = $('today-card');
    if (!card) return;
    if (!active()) { card.classList.add('hidden'); return; }
    card.classList.remove('hidden');
    const p = Store.player;

    $('today-avatar').textContent = p.avatar;
    $('today-hello').textContent = t('hello').replace('{name}', p.name || '');
    const streak = currentStreak();
    const playedToday = (p.dayStreak || {}).last === localDay();
    $('today-streak').textContent = streak
      ? '🔥 ' + (streak === 1 ? t('dayStreakOne') : t('dayStreak').replace('{n}', streak)) + (playedToday ? '' : ' · ' + t('dayStreakKeep'))
      : '🌱 ' + t('dayStreakStart');

    const q = questRows($('quest-list'), false);
    const doneN = q.ids.filter(function (id) { return q.done[id]; }).length;
    $('quest-note').textContent = q.rewarded
      ? '🎁 ' + t('questsAllDone')
      : '🎁 ' + t('questsReward').replace('{n}', 3 - doneN);

    const n = chests().length;
    const cta = $('btn-today-chest');
    cta.classList.toggle('hidden', !n);
    cta.textContent = '🎁 ' + (n > 1 ? t('chestOpenN').replace('{n}', n) : t('chestOpen'));

    showFact(false);
  }

  /* =====================================================================
     Weetjes
     ===================================================================== */
  let factIdx = -1;
  function facts() { return window.FUN_FACTS || []; }
  function showFact(advance) {
    const list = facts();
    const el = $('fact-text');
    if (!el || !list.length) return;
    if (factIdx === -1) factIdx = Math.floor(Math.random() * list.length);
    else if (advance) factIdx = (factIdx + 1 + Math.floor(Math.random() * 3)) % list.length;
    el.textContent = L(list[factIdx]);
  }
  /* een weetje dat bij de wereld van het verhaal hoort, als dat er is */
  function factFor(topic) {
    const list = facts();
    if (!list.length) return null;
    const mine = list.filter(function (f) { return f.topic === topic; });
    const pool = mine.length ? mine : list;
    return pool[Math.floor(Math.random() * pool.length)];
  }

  /* =====================================================================
     Het album (tabblad in de winkel)
     ===================================================================== */
  function renderAlbum(grid, note) {
    const have = ownedGifts();
    const all = giftItems();
    note.textContent = '🎁 ' + t('albumNote').replace('{n}', have.length).replace('{total}', all.length);
    note.classList.remove('hidden');
    grid.innerHTML = '';
    GIFT_TIERS.forEach(function (tier) {
      all.filter(function (g) { return g.tier === tier; }).forEach(function (g) {
        const got = have.indexOf(g.id) !== -1;
        const card = document.createElement('div');
        card.className = 'shop-card album-card tier-' + tier + (got ? '' : ' missing');
        card.innerHTML =
          '<span class="sc-tier sc-tier-' + tier + '">' + L(TIER_LABEL[tier]) + '</span>' +
          '<span class="sc-emoji">' + (got ? g.emoji : '❓') + '</span>' +
          '<span class="sc-name">' + (got ? escHtml(L(g)) : '???') + '</span>' +
          '<span class="' + (got ? 'sc-owned' : 'sc-locked') + '">' + (got ? '✅ ' + t('albumFound') : t('albumMissing')) + '</span>';
        grid.appendChild(card);
      });
    });
  }

  /* ---- knoppen ---- */
  function bind() {
    $('btn-chest').addEventListener('click', openChest);
    $('btn-today-chest').addEventListener('click', openChest);
    $('chest-gift').addEventListener('click', crackChest);
    $('chest-close').addEventListener('click', closeChest);
    $('btn-fact').addEventListener('click', function () { Sound.click(); showFact(true); });
    $('btn-album').addEventListener('click', function () {
      Sound.click();
      S.shopKind = 'gift';
      renderShop();
      show('shop');
    });
  }
  document.addEventListener('DOMContentLoaded', bind);

  return {
    track: track,
    markPlayedToday: markPlayedToday,
    currentStreak: currentStreak,
    grantChest: grantChest,
    openChest: openChest,
    renderChestButton: renderChestButton,
    renderToday: renderToday,
    renderQuestStrip: renderQuestStrip,
    renderAlbum: renderAlbum,
    factFor: factFor,
    quests: QUESTS,
    today: function () { return active() ? today() : null; }
  };
})();
