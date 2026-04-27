/* ════════════════════════════════════════════════
   MKU · MKS SALES TEAM APP  —  sales.js
   Reads from: RAW (data.js)  +  PRODUCTS (products.js)
════════════════════════════════════════════════ */

// ── VOLUME TIERS (confirm with Cost Control) ──
const TIERS = [
  { label: '1–5 Cartons',  min:1,  max:5,   disc: 0,    note: 'Standard price' },
  { label: '6–10 Cartons', min:6,  max:10,  disc: 0.03, note: '3% discount' },
  { label: '11+ Cartons',  min:11, max:999, disc: 0.05, note: '5% off - confirm with CC' },
];

// ── PRICELIST CATEGORY ORDER (matches PDF order) ──
const CAT_ORDER_MKU = ['French Fries','Butter & Mozzarella','Cooking & Cream','Dry Goods Tomatoes','Olive Oil','Pasta','Pork Meat','Salmon','Japanese Sauce','Syrup','Fruit Crush','Tea','Beverage Powder','Gourmet Syrup','Frappe Powder','Fruit Concentrate','Beverage Commodity','Topping & Sauce','Ice Shaken Powder','Cocofreo Powder','Alcohol Beverage'];
const CAT_ORDER_MKS = ['Flour','Dairy','Barista Milk','Tomatoes','Salt & Sweetener','Chinese Sauce','Seafood','Processed Meat','Cured Meat','Frozen Meat','Wagyu','Nestle'];

// WA opens directly — user picks contact from their list

// ── AVATAR COLORS ──
const COLORS = ['#C8242A','#163C70','#1A7A45','#B07D1A','#6B3FA0','#1A6B7A','#7A3A1A','#2A6BB0','#8B1A5A','#2A7A2A','#5A4A1A','#1A4A6B','#6B1A3A','#3A7A3A'];

// ── STOCK SEARCH STATE ──
let stockSearch = '';

// ── REP CONFIG (from real data) ──
const REP_CONFIG = [
  { name:'Picrom',         area:'UBUD',                   div:'MKS' },
  { name:'I Made Luih',   area:'DENPASAR - SANUR',        div:'MKS' },
  { name:'Juni',           area:'KUTA SEL - ULUWATU',     div:'MKS' },
  { name:'Lani',           area:'KUTA - INDUSTRI / HOTEL',div:'MKS' },
  { name:'Monica',         area:'KUTA SEL - NUSA DUA',    div:'MKS' },
  { name:'Sujana',         area:'SEMINYAK',                div:'MKS' },
  { name:'Eka',            area:'KUTA - LEGIAN',          div:'MKS' },
  { name:'Taufik',         area:'CANGGU 1',               div:'MKS' },
  { name:'Dewi Kristiani', area:'CANGGU 2',               div:'MKS' },
  { name:'Wira',           area:'GT + FOODY',             div:'MKS' },
  { name:'Sriasih',        area:'MODERN + GT',            div:'MKS' },
  { name:'Ridwan',         area:'NP-1 (Nestlé)',          div:'MKS' },
  { name:'Redi',           area:'NP-2 (Nestlé)',          div:'MKS' },
  { name:'Gek Mas',        area:'NP-3 (Nestlé)',          div:'MKS' },
];

// ── STATE ──
let currentRep   = null;
let currentTab   = 'target';
let plDiv        = 'MKU';
let plCat        = 'ALL';
let plSearch     = '';
let stockDiv     = 'MKU';
let stockFilter  = 'all';
let orderItems   = {};   // { productId: qty }
let activeProduct = null;

// ── HELPERS ──
const fmt = n => n ? 'Rp ' + Math.round(n).toLocaleString('id-ID') : '—';
const fmtShort = n => {
  if (!n) return '—';
  if (n >= 1e9) return 'Rp ' + (n/1e9).toFixed(2) + 'B';
  if (n >= 1e6) return 'Rp ' + (n/1e6).toFixed(1) + 'Jt';
  if (n >= 1e3) return 'Rp ' + Math.round(n/1e3) + 'K';
  return 'Rp ' + n;
};
const fmtNum = n => n ? Math.round(n).toLocaleString('id-ID') : '0';
const pctColor = p => p >= 80 ? 'var(--green)' : p >= 50 ? 'var(--gold)' : 'var(--red)';
const pctTag   = p => p >= 80 ? 'good' : p >= 50 ? 'warn' : 'low';
const tierPrice = (base, idx) => Math.round(base * (1 - TIERS[idx].disc));

const CAT_EMOJI = {
  'French Fries':'🍟','Butter & Mozzarella':'🧀','Cooking & Cream':'🥛',
  'Dry Goods Tomatoes':'🍅','Olive Oil':'🫒','Pasta':'🍝',
  'Pork Meat':'🥩','Salmon':'🐟','Japanese Sauce':'🍱',
  'Syrup':'🍯','Fruit Crush':'🍹','Tea':'🍵',
  'Beverage Powder':'🌿','Gourmet Syrup':'🧴','Frappe Powder':'🧋',
  'Beverage Commodity':'☕','Topping & Sauce':'🍫','Ice Shaken Powder':'🧊',
  'Cocofreo Powder':'🍦','Fruit Concentrate':'🍊','Alcohol Beverage':'🍶',
  'Flour':'🌾','Dairy':'🧀','Barista Milk':'🥛',
  'Tomatoes':'🍅','Chinese Sauce':'🥡','Seafood':'🦐',
  'Processed Meat':'🌭','Cured Meat':'🥓','Frozen Meat':'🥩',
  'Wagyu':'🐄','Nestle':'☕','Salt & Sweetener':'🧂',
};

function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2200);
}

// ── DATA ACCESSORS ──
function getLatestData() {
  const latest = RAW.latest;
  return RAW.targets_by_date[latest];
}
function getStockData(div) {
  const latest = RAW.latest;
  const sd = RAW.stock_by_date[latest];
  return div === 'MKU' ? (sd.MKU_full || sd.MKU || []) : (sd.MKS_full || sd.MKS || []);
}
function getStockItem(productName) {
  // Try to find a stock entry matching product name (fuzzy)
  const allStock = [...(RAW.stock_by_date[RAW.latest].MKU_full || []),
                    ...(RAW.stock_by_date[RAW.latest].MKS_full || [])];
  const pname = productName.toLowerCase();
  return allStock.find(s => s.name && pname.includes(s.name.toLowerCase().substring(0,8)));
}
function getTodaySO(repName) {
  // Exact match first, then fuzzy fallback for name variants
  const exact = RAW.so.filter(s => s.date === RAW.latest && s.sales === repName);
  if (exact.length > 0) return exact;
  // Fallback: match on full name parts (not just first word)
  const parts = repName.toLowerCase().split(' ').filter(w => w.length > 2);
  return RAW.so.filter(s => s.date === RAW.latest && s.sales &&
    parts.every(p => s.sales.toLowerCase().includes(p)));
}

// ════════════════
// LOGIN
// ════════════════
function buildLogin() {
  const sel = document.getElementById('rep-select');
  if (!sel) return; // loading screen is showing, not ready yet
  // Add optgroups
  const fieldReps = REP_CONFIG.filter(r => !r.area.includes('Nestlé'));
  const nestleReps = REP_CONFIG.filter(r => r.area.includes('Nestlé'));

  // Shorten area labels so they fit on one line
  const SHORT_AREA = {
    'UBUD':                    'Ubud',
    'DENPASAR - SANUR':        'Denpasar - Sanur',
    'KUTA SEL - ULUWATU':      'Kuta Sel - Uluwatu',
    'KUTA - INDUSTRI / HOTEL': 'Kuta Industri/Hotel',
    'KUTA SEL - NUSA DUA':     'Nusa Dua',
    'SEMINYAK':                'Seminyak',
    'KUTA - LEGIAN':           'Kuta Legian',
    'CANGGU 1':                'Canggu 1',
    'CANGGU 2':                'Canggu 2',
    'GT + FOODY':              'GT + Foody',
    'MODERN + GT':             'Modern + GT',
    'NP-1 (Nestlé)':           'NP-1',
    'NP-2 (Nestlé)':           'NP-2',
    'NP-3 (Nestlé)':           'NP-3',
  };

  let grp1 = document.createElement('optgroup');
  grp1.label = 'Field Sales';
  fieldReps.forEach(rep => {
    const idx = REP_CONFIG.indexOf(rep);
    const opt = document.createElement('option');
    opt.value = idx;
    const area = SHORT_AREA[rep.area] || rep.area;
    opt.textContent = rep.name + ' · ' + area;
    grp1.appendChild(opt);
  });

  let grp2 = document.createElement('optgroup');
  grp2.label = 'Nestlé Team';
  nestleReps.forEach(rep => {
    const idx = REP_CONFIG.indexOf(rep);
    const opt = document.createElement('option');
    opt.value = idx;
    const area = SHORT_AREA[rep.area] || rep.area;
    opt.textContent = rep.name + ' · ' + area;
    grp2.appendChild(opt);
  });

  sel.appendChild(grp1);
  sel.appendChild(grp2);
}

function onRepSelect(sel) {
  const btn = document.getElementById('login-enter-btn');
  btn.disabled = sel.value === '';
}

function doLogin() {
  const sel = document.getElementById('rep-select');
  const idx = parseInt(sel.value);
  if (isNaN(idx)) return;
  selectRep(idx);
}

function selectRep(idx) {
  try {
    currentRep = REP_CONFIG[idx];
    currentRep._color = COLORS[idx % COLORS.length];
    document.getElementById('login-screen').classList.add('hidden');
    document.getElementById('main-app').classList.remove('hidden');
    document.getElementById('topbar-name').textContent = currentRep.name;
    document.getElementById('topbar-area').textContent = currentRep.area;
    const d = new Date(RAW.latest);
    document.getElementById('topbar-date').textContent =
      d.toLocaleDateString('id-ID', { day:'numeric', month:'short', year:'2-digit' });
    try { renderTarget(); } catch(e) {
      console.error('renderTarget error:', e);
      document.getElementById('target-body').innerHTML =
        '<div style="padding:20px;color:red;font-size:.8rem">Target data error: ' + e.message + '</div>';
    }
  } catch(e) {
    console.error('selectRep error:', e);
    alert('Login error: ' + e.message);
  }
}

function logout() {
  currentRep = null;
  orderItems = {};
  document.getElementById('main-app').classList.add('hidden');
  document.getElementById('login-screen').classList.remove('hidden');
  switchTab('target');
}

// ════════════════
// TAB NAVIGATION
// ════════════════
function switchTab(tab) {
  currentTab = tab;
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.bnav').forEach(b => b.classList.remove('active'));
  document.getElementById('screen-' + tab).classList.add('active');
  document.getElementById('bnav-' + tab).classList.add('active');
  if (tab === 'price') { renderPricelist(); }
  if (tab === 'stock') { renderStock(); }
  if (tab === 'order') { renderOrder(); }
}

// ════════════════
// TARGET SCREEN
// ════════════════
// ── REP TYPE HELPERS ──
const NESTLE_REPS  = ['Ridwan','Redi','Gek Mas'];
const NN_REPS      = { 'I Made Luih': 'NAUGHTY NURIS (SANUR)', 'Sujana': 'NAUGHTY NURIS (SEMINYAK)' };

function isNestleRep(name)  { return NESTLE_REPS.includes(name); }
function hasNNArea(name)    { return !!NN_REPS[name]; }

function renderTarget() {
  if (!currentRep) return;
  const d = getLatestData();
  const repName = currentRep.name;

  // ── NESTLÉ REPS: show only Nestlé data ──
  if (isNestleRep(repName)) {
    renderNestleTarget(d, repName);
    return;
  }

  // ── REGULAR REPS: find their areas (exclude Naughty Nuris) ──
  const myMainAreas = d.area_targets.filter(a =>
    a.sales === repName && !a.area.includes('NAUGHTY NURIS')
  );

  // Naughty Nuris area for this rep (if any)
  const myNNArea = d.area_targets.find(a =>
    a.sales === repName && a.area.includes('NAUGHTY NURIS')
  );

  // Aggregate main area totals only
  let food_target = 0, bev_target = 0, food_ach = 0, bev_ach = 0;
  myMainAreas.forEach(a => {
    food_target += a.food_target || 0;
    bev_target  += a.bev_target  || 0;
    food_ach    += a.food_ach    || 0;
    bev_ach     += a.bev_ach     || 0;
  });

  // If rep also has Naughty Nuris, add it separately as food
  let nn_target = 0, nn_ach = 0;
  if (myNNArea) {
    nn_target = myNNArea.food_target || 0;
    nn_ach    = myNNArea.food_ach    || 0;
  }

  const total_target = food_target + bev_target + nn_target;
  const total_ach    = food_ach + bev_ach + nn_ach;
  const overall_pct  = total_target > 0 ? Math.round((total_ach / total_target) * 100) : 0;

  const gap80  = Math.max(0, total_target * 0.80 - total_ach);
  const gap100 = Math.max(0, total_target - total_ach);
  const tagCls = pctTag(overall_pct);
  const tagLabel = overall_pct >= 100 ? '🎉 Target Hit!' : overall_pct >= 80 ? '🔥 Almost there' : overall_pct >= 50 ? '📈 On Track' : '⚡ Push harder';

  // Build mini cards
  const multiArea = myMainAreas.length > 1;
  let miniCardsHtml = '';

  if (multiArea) {
    // Multiple areas (e.g. Lani): show each area separately
    myMainAreas.forEach(a => {
      const at = (a.food_target||0) + (a.bev_target||0);
      const aa = (a.food_ach||0)   + (a.bev_ach||0);
      const ap = at > 0 ? Math.round(aa / at * 100) : 0;
      // Shorten area label
      const aLabel = a.area.replace('KUTA - ','').replace('KUTA SEL - ','');
      miniCardsHtml += '<div class="th-mini">' +
        '<div class="th-mini-label" style="font-size:.55rem">' + aLabel + '</div>' +
        '<div class="th-mini-val">' + fmtShort(aa) + '</div>' +
        '<div class="th-mini-pct" style="color:' + pctColor(ap) + '">' + ap + '%</div>' +
        '</div>';
    });
  } else {
    if (food_target > 0) miniCardsHtml +=
      '<div class="th-mini"><div class="th-mini-label">Food</div>' +
      '<div class="th-mini-val">' + fmtShort(food_ach) + '</div>' +
      '<div class="th-mini-pct" style="color:' + pctColor(Math.round(food_ach/food_target*100)) + '">' + Math.round(food_ach/food_target*100) + '%</div></div>';
    if (bev_target > 0) miniCardsHtml +=
      '<div class="th-mini"><div class="th-mini-label">Beverage</div>' +
      '<div class="th-mini-val">' + fmtShort(bev_ach) + '</div>' +
      '<div class="th-mini-pct" style="color:' + pctColor(Math.round(bev_ach/bev_target*100)) + '">' + Math.round(bev_ach/bev_target*100) + '%</div></div>';
  }
  // Always show NN mini card if rep has Naughty Nuris
  if (nn_target > 0) miniCardsHtml +=
    '<div class="th-mini"><div class="th-mini-label">N. Nuris</div>' +
    '<div class="th-mini-val">' + fmtShort(nn_ach) + '</div>' +
    '<div class="th-mini-pct" style="color:' + pctColor(Math.round(nn_ach/nn_target*100)) + '">' + Math.round(nn_ach/nn_target*100) + '%</div></div>';

  // Hero
  document.getElementById('target-hero').innerHTML = `
    <div class="th-month">${RAW.month} · as of ${RAW.latest}</div>
    <div class="th-rep">${repName}</div>
    <div class="th-overall">
      <div>
        <div class="th-pct" style="color:${pctColor(overall_pct)}">${overall_pct}%</div>
        <div class="th-pct-label">Overall</div>
      </div>
      <div>
        <div class="th-status-tag ${tagCls}">${tagLabel}</div>
        <div style="color:rgba(255,255,255,0.35);font-size:.68rem;margin-top:6px">${fmtShort(total_ach)} of ${fmtShort(total_target)}</div>
      </div>
    </div>
    <div class="th-mini-grid">${miniCardsHtml}</div>`;

  let bodyHtml = '';

  // ── MILESTONE CARD ──
  bodyHtml += `<div class="milestone-card">
    <div class="mc-title">Progress to Milestones</div>
    <div class="mc-bars">`;

  const bars = [];
  if (multiArea) {
    const areaColors = ['#C8242A','#163C70','#1A7A45','#B07D1A'];
    myMainAreas.forEach((a, i) => {
      const at = (a.food_target||0) + (a.bev_target||0);
      const aa = (a.food_ach||0)   + (a.bev_ach||0);
      if (at > 0) bars.push({ label: a.area.replace('KUTA - ','').replace('KUTA SEL - ',''), ach: aa, tgt: at, color: areaColors[i % areaColors.length] });
    });
  } else {
    if (food_target > 0)  bars.push({ label:'Food',     ach:food_ach, tgt:food_target, color:'#C8242A' });
    if (bev_target > 0)   bars.push({ label:'Beverage', ach:bev_ach,  tgt:bev_target,  color:'#163C70' });
  }
  if (nn_target > 0) bars.push({ label:'Naughty Nuris', ach:nn_ach, tgt:nn_target, color:'#B07D1A' });

  bars.forEach(b => {
    const pct = b.tgt > 0 ? Math.min(100, (b.ach / b.tgt * 100)) : 0;
    bodyHtml += `<div class="mc-bar-row">
      <div class="mc-bar-top">
        <div class="mc-bar-label">${b.label}</div>
        <div class="mc-bar-nums">${fmtShort(b.ach)} / ${fmtShort(b.tgt)}</div>
      </div>
      <div class="mc-bar-bg">
        <div class="mc-bar-fill" style="width:${pct}%;background:${b.color}"></div>
      </div>
      <div class="mc-markers">
        <div class="mc-mark" style="left:80%"><div class="mc-mark-line"></div><div class="mc-mark-label">80%</div></div>
        <div class="mc-mark" style="left:99%"><div class="mc-mark-line"></div><div class="mc-mark-label">100%</div></div>
      </div>
    </div>`;
  });
  bodyHtml += `</div></div>`;

  // ── GAP CARD ──
  if (multiArea) {
    // Lani etc: show separate gap cards per area
    bodyHtml += '<div class="gap-card"><div class="gc-title">How Much More to Go</div>';
    myMainAreas.forEach(a => {
      const at = (a.food_target||0) + (a.bev_target||0);
      const aa = (a.food_ach||0) + (a.bev_ach||0);
      const g80  = Math.max(0, at * 0.80 - aa);
      const g100 = Math.max(0, at - aa);
      const aLabel = a.area.replace('KUTA - ','').replace('KUTA SEL - ','');
      bodyHtml += '<div class="gc-area-label">' + aLabel + '</div>' +
        '<div class="gc-grid">' +
        '<div class="gc-item"><div class="gc-label">To reach 80%</div>' +
        '<div class="gc-val" style="color:' + (g80===0?'var(--green)':'var(--gold)') + '">' + (g80===0?'✓ Done':fmtShort(g80)) + '</div>' +
        '<div class="gc-sub">' + (g80===0?'Milestone reached!':'Still needed') + '</div></div>' +
        '<div class="gc-item"><div class="gc-label">To reach 100%</div>' +
        '<div class="gc-val" style="color:' + (g100===0?'var(--green)':'var(--red)') + '">' + (g100===0?'✓ Done':fmtShort(g100)) + '</div>' +
        '<div class="gc-sub">' + (g100===0?'Target achieved!':'Still needed') + '</div></div>' +
        '<div class="gc-item"><div class="gc-label">Days remaining</div>' +
        '<div class="gc-val">~' + daysLeft() + '</div>' +
        '<div class="gc-sub">in ' + RAW.month + '</div></div>' +
        '<div class="gc-item"><div class="gc-label">Daily run rate</div>' +
        '<div class="gc-val" style="color:var(--red)">' + (daysLeft()>0?fmtShort(g100/daysLeft()):'—') + '</div>' +
        '<div class="gc-sub">to hit 100%</div></div>' +
        '</div>';
    });
    bodyHtml += '</div>';
  } else {
    bodyHtml += `<div class="gap-card">
    <div class="gc-title">How Much More to Go</div>
    <div class="gc-grid">
      <div class="gc-item">
        <div class="gc-label">To reach 80%</div>
        <div class="gc-val" style="color:${gap80===0?'var(--green)':'var(--gold)'}">${gap80===0?'✓ Done':fmtShort(gap80)}</div>
        <div class="gc-sub">${gap80===0?'Milestone reached!':'Still needed'}</div>
      </div>
      <div class="gc-item">
        <div class="gc-label">To reach 100%</div>
        <div class="gc-val" style="color:${gap100===0?'var(--green)':'var(--red)'}">${gap100===0?'✓ Done':fmtShort(gap100)}</div>
        <div class="gc-sub">${gap100===0?'Target achieved!':'Still needed'}</div>
      </div>
      <div class="gc-item">
        <div class="gc-label">Days remaining</div>
        <div class="gc-val">~${daysLeft()}</div>
        <div class="gc-sub">in ${RAW.month}</div>
      </div>
      <div class="gc-item">
        <div class="gc-label">Daily run rate</div>
        <div class="gc-val" style="color:var(--red)">${daysLeft()>0?fmtShort(gap100/daysLeft()):'—'}</div>
        <div class="gc-sub">to hit 100%</div>
      </div>
    </div>
  </div>`;
  }

  // ── AREA LEADERBOARD ──
  // Build ranked list from main areas only (no NN), then inject NN sub-rows under their sales
  const mainAreas = d.area_targets.filter(a => !a.area.includes('NAUGHTY NURIS'));
  const nnAreas   = d.area_targets.filter(a =>  a.area.includes('NAUGHTY NURIS'));
  const sortedAreas = [...mainAreas].sort((a,b) => b.pct - a.pct);
  const myAreaNames = myMainAreas.map(a => a.area);

  // Group Lani rows together — sort so both Lani rows are adjacent
  // (they already come from same sales name, just different areas)

  let lbHtml = '';
  let rank = 0;
  const renderedSales = new Set(); // track who we've already ranked

  sortedAreas.forEach((a, i) => {
    const isMe = myAreaNames.includes(a.area);
    const isLani = a.sales === 'Lani';

    // If Lani and we already rendered one Lani row, skip rank increment
    if (!renderedSales.has(a.sales)) {
      rank++;
      renderedSales.add(a.sales);
    }

    const rankDisp = rank <= 3 ? (rank===1?'🥇':rank===2?'🥈':'🥉') : rank;
    const meStyle = isMe ? 'background:var(--red-l);border-radius:8px;padding:8px 6px;margin:-2px -4px;' : '';

    lbHtml += `<div class="ac-row" style="${meStyle}">
      <div class="ac-rank" style="${rank<=3?'color:var(--gold);font-weight:700':''}">${rankDisp}</div>
      <div>
        <div class="ac-name">${a.sales}${isMe?' 👈':''}</div>
        <div class="ac-area">${a.area}</div>
      </div>
      <div class="ac-bar-wrap"><div class="ac-bar" style="width:${Math.min(a.pct,100)}%;background:${pctColor(a.pct)}"></div></div>
      <div class="ac-pct" style="color:${pctColor(a.pct)}">${a.pct}%</div>
    </div>`;

    // After each sales row, inject their Naughty Nuris sub-row if they have one
    const nnRow = nnAreas.find(n => n.sales === a.sales);
    if (nnRow) {
      const isNNMe = myNNArea && myNNArea.area === nnRow.area;
      const nnStyle = isNNMe ? 'background:var(--red-l);border-radius:8px;padding:8px 6px;margin:-2px -4px;' : '';
      lbHtml += `<div class="ac-row nn-subrow" style="${nnStyle}">
        <div class="ac-rank" style="color:var(--txt3);font-size:.65rem">↳</div>
        <div>
          <div class="ac-name" style="font-size:.75rem;color:var(--txt2)">${nnRow.area}</div>
          <div class="ac-area">Naughty Nuris</div>
        </div>
        <div class="ac-bar-wrap"><div class="ac-bar" style="width:${Math.min(nnRow.pct,100)}%;background:${pctColor(nnRow.pct)}"></div></div>
        <div class="ac-pct" style="color:${pctColor(nnRow.pct)};font-size:.75rem">${nnRow.pct}%</div>
      </div>`;
    }
  });

  bodyHtml += `<div class="area-card">
    <div class="ac-title">Area Leaderboard · ${RAW.month}</div>
    ${lbHtml}
  </div>`;

  // ── TODAY'S ORDERS ──
  const todaySO = getTodaySO(repName);
  if (todaySO.length > 0) {
    const todayRev = todaySO.reduce((s,o) => s+(o.revenue||0), 0);
    bodyHtml += `<div class="today-card">
      <div class="tc-title">Today's Orders · ${fmtShort(todayRev)} (${todaySO.length} SO)</div>
      <div class="tc-so">
        ${todaySO.map(o => `<div class="tc-so-row">
          <div class="tc-so-left">
            <div class="tc-so-cust">${o.customer}</div>
            <div class="tc-so-prod">${o.product}</div>
          </div>
          <div class="tc-so-rev">${fmtShort(o.revenue)}</div>
        </div>`).join('')}
      </div>
    </div>`;
  }

  document.getElementById('target-body').innerHTML = bodyHtml;
}

// ── NESTLÉ REP TARGET VIEW ──
function renderNestleTarget(d, repName) {
  const myNestle = d.nestle_areas.find(n => n.sales === repName);
  if (!myNestle) { document.getElementById('target-hero').innerHTML = '<div style="padding:20px;color:white">No Nestlé data found</div>'; return; }

  const pct = myNestle.pct || 0;
  const ach = myNestle.achievement || 0;
  const tgt = myNestle.target || 0;
  const gap80  = Math.max(0, tgt * 0.80 - ach);
  const gap100 = Math.max(0, tgt - ach);
  const tagCls = pctTag(pct);
  const tagLabel = pct >= 100 ? '🎉 Target Hit!' : pct >= 80 ? '🔥 Almost there' : pct >= 50 ? '📈 On Track' : '⚡ Push harder';

  document.getElementById('target-hero').innerHTML = `
    <div class="th-month">${RAW.month} · as of ${RAW.latest}</div>
    <div class="th-rep">${repName}</div>
    <div class="th-overall">
      <div>
        <div class="th-pct" style="color:${pctColor(pct)}">${pct}%</div>
        <div class="th-pct-label">Nestlé Target</div>
      </div>
      <div>
        <div class="th-status-tag ${tagCls}">${tagLabel}</div>
        <div style="color:rgba(255,255,255,0.35);font-size:.68rem;margin-top:6px">${fmtShort(ach)} of ${fmtShort(tgt)}</div>
      </div>
    </div>
    <div class="th-mini-grid">
      <div class="th-mini">
        <div class="th-mini-label">Achievement</div>
        <div class="th-mini-val">${fmtShort(ach)}</div>
        <div class="th-mini-pct" style="color:${pctColor(pct)}">${pct}%</div>
      </div>
      <div class="th-mini">
        <div class="th-mini-label">Target</div>
        <div class="th-mini-val">${fmtShort(tgt)}</div>
        <div class="th-mini-pct" style="color:rgba(255,255,255,0.4)">100%</div>
      </div>
    </div>`;

  let bodyHtml = '';

  // Progress bar
  bodyHtml += `<div class="milestone-card">
    <div class="mc-title">Nestlé Progress</div>
    <div class="mc-bars">
      <div class="mc-bar-row">
        <div class="mc-bar-top">
          <div class="mc-bar-label">Nestlé</div>
          <div class="mc-bar-nums">${fmtShort(ach)} / ${fmtShort(tgt)}</div>
        </div>
        <div class="mc-bar-bg">
          <div class="mc-bar-fill" style="width:${Math.min(pct,100)}%;background:#B07D1A"></div>
        </div>
        <div class="mc-markers">
          <div class="mc-mark" style="left:80%"><div class="mc-mark-line"></div><div class="mc-mark-label">80%</div></div>
          <div class="mc-mark" style="left:99%"><div class="mc-mark-line"></div><div class="mc-mark-label">100%</div></div>
        </div>
      </div>
    </div>
  </div>`;

  // Gap card
  bodyHtml += `<div class="gap-card">
    <div class="gc-title">How Much More to Go</div>
    <div class="gc-grid">
      <div class="gc-item">
        <div class="gc-label">To reach 80%</div>
        <div class="gc-val" style="color:${gap80===0?'var(--green)':'var(--gold)'}">${gap80===0?'✓ Done':fmtShort(gap80)}</div>
        <div class="gc-sub">${gap80===0?'Milestone reached!':'Still needed'}</div>
      </div>
      <div class="gc-item">
        <div class="gc-label">To reach 100%</div>
        <div class="gc-val" style="color:${gap100===0?'var(--green)':'var(--red)'}">${gap100===0?'✓ Done':fmtShort(gap100)}</div>
        <div class="gc-sub">${gap100===0?'Target achieved!':'Still needed'}</div>
      </div>
      <div class="gc-item">
        <div class="gc-label">Days remaining</div>
        <div class="gc-val">~${daysLeft()}</div>
        <div class="gc-sub">in ${RAW.month}</div>
      </div>
      <div class="gc-item">
        <div class="gc-label">Daily run rate</div>
        <div class="gc-val" style="color:var(--red)">${daysLeft()>0?fmtShort(gap100/daysLeft()):'—'}</div>
        <div class="gc-sub">to hit 100%</div>
      </div>
    </div>
  </div>`;

  // Nestlé Leaderboard
  const sortedNestle = [...d.nestle_areas].sort((a,b) => b.pct - a.pct);
  bodyHtml += `<div class="area-card">
    <div class="ac-title">Nestlé Leaderboard · ${RAW.month}</div>
    ${sortedNestle.map((n,i) => {
      const isMe = n.sales === repName;
      return `<div class="ac-row" style="${isMe?'background:var(--red-l);border-radius:8px;padding:8px 6px;margin:-2px -4px;':''}">
        <div class="ac-rank" style="${i<3?'color:var(--gold);font-weight:700':''}">${i===0?'🥇':i===1?'🥈':i===2?'🥉':(i+1)}</div>
        <div>
          <div class="ac-name">${n.sales}${isMe?' 👈':''}</div>
          <div class="ac-area">${n.area}</div>
        </div>
        <div class="ac-bar-wrap"><div class="ac-bar" style="width:${Math.min(n.pct,100)}%;background:${pctColor(n.pct)}"></div></div>
        <div class="ac-pct" style="color:${pctColor(n.pct)}">${n.pct}%</div>
      </div>`;
    }).join('')}
  </div>`;

  // Today's orders
  const todaySO = getTodaySO(repName);
  if (todaySO.length > 0) {
    const todayRev = todaySO.reduce((s,o) => s+(o.revenue||0), 0);
    bodyHtml += `<div class="today-card">
      <div class="tc-title">Today's Orders · ${fmtShort(todayRev)} (${todaySO.length} SO)</div>
      <div class="tc-so">
        ${todaySO.map(o => `<div class="tc-so-row">
          <div class="tc-so-left">
            <div class="tc-so-cust">${o.customer}</div>
            <div class="tc-so-prod">${o.product}</div>
          </div>
          <div class="tc-so-rev">${fmtShort(o.revenue)}</div>
        </div>`).join('')}
      </div>
    </div>`;
  }

  document.getElementById('target-body').innerHTML = bodyHtml;
}

function daysLeft() {
  const latest = new Date(RAW.latest);
  const endOfMonth = new Date(latest.getFullYear(), latest.getMonth()+1, 0);
  return Math.max(1, endOfMonth.getDate() - latest.getDate());
}

// ════════════════
// PRICELIST
// ════════════════
function switchDiv(div, btn) {
  plDiv = div; plCat = 'ALL'; plSearch = '';
  document.getElementById('pl-search').value = '';
  document.querySelectorAll('.pl-divtab').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderCats(); renderList();
}

function renderPricelist() {
  const nestleOnly = currentRep && isNestleRep(currentRep.name);
  if (nestleOnly) {
    // Nestlé reps: force MKS, Nestlé category, hide category chips
    plDiv = 'MKS';
    plCat = 'Nestle';
    document.querySelectorAll('.pl-divtab').forEach(b => b.classList.remove('active'));
    const mksTab = document.querySelectorAll('.pl-divtab')[1];
    if (mksTab) mksTab.classList.add('active');
    // Hide category strip and MKU tab
    const cats = document.getElementById('pl-cats');
    if (cats) cats.style.display = 'none';
    const divTabs = document.getElementById('pl-divtabs');
    if (divTabs) divTabs.style.display = 'none';
    const mksN = PRODUCTS.filter(p => p.division === 'MKS' && p.category === 'Nestle').length;
    document.getElementById('mks-count').textContent = mksN;
  } else {
    // Restore visibility for non-Nestlé reps
    const cats = document.getElementById('pl-cats');
    if (cats) cats.style.display = '';
    const divTabs = document.getElementById('pl-divtabs');
    if (divTabs) divTabs.style.display = '';
    const mkuN = PRODUCTS.filter(p => p.division === 'MKU').length;
    const mksN = PRODUCTS.filter(p => p.division === 'MKS').length;
    document.getElementById('mku-count').textContent = mkuN;
    document.getElementById('mks-count').textContent = mksN;
  }
  renderCats(); renderList();
}

function getFiltered() {
  // Nestlé reps only see Nestlé products
  const nestleOnly = currentRep && isNestleRep(currentRep.name);

  return PRODUCTS.filter(p => {
    if (p.division !== plDiv) return false;
    if (nestleOnly && p.category !== 'Nestle') return false;
    if (plCat !== 'ALL' && p.category !== plCat) return false;
    if (plSearch) {
      const q = plSearch.toLowerCase();
      return p.name.toLowerCase().includes(q) ||
             p.brand.toLowerCase().includes(q) ||
             p.category.toLowerCase().includes(q) ||
             p.id.toLowerCase().includes(q);
    }
    return true;
  });
}

function sortedCats(div) {
  const order = div === 'MKU' ? CAT_ORDER_MKU : CAT_ORDER_MKS;
  const available = [...new Set(PRODUCTS.filter(p=>p.division===div).map(p=>p.category))];
  // Sort by pricelist order, unknown categories go to end
  return available.sort((a,b) => {
    const ia = order.indexOf(a); const ib = order.indexOf(b);
    if (ia === -1 && ib === -1) return a.localeCompare(b);
    if (ia === -1) return 1;
    if (ib === -1) return -1;
    return ia - ib;
  });
}

function renderCats() {
  const cats = sortedCats(plDiv);
  let h = `<button class="pl-cat ${plCat==='ALL'?'active':''}" onclick="selectCat('ALL')">All</button>`;
  cats.forEach(c => {
    h += `<button class="pl-cat ${plCat===c?'active':''}" onclick="selectCat('${c}')">${CAT_EMOJI[c]||'📦'} ${c}</button>`;
  });
  document.getElementById('pl-cats').innerHTML = h;
}

function renderList() {
  const items = getFiltered();
  const el = document.getElementById('pl-list');
  if (!items.length) {
    el.innerHTML = `<div class="pl-no-results"><div class="e">🔍</div><p>No products found</p></div>`;
    return;
  }

  let h = '';
  if (!plSearch && plCat === 'ALL') {
    // Use pricelist order for categories
    const orderedCats = sortedCats(plDiv);
    const groups = {};
    items.forEach(p => { if (!groups[p.category]) groups[p.category] = []; groups[p.category].push(p); });
    orderedCats.forEach(cat => {
      if (!groups[cat]) return;
      h += `<div class="pl-section-lbl">${CAT_EMOJI[cat]||'📦'} ${cat}</div>`;
      groups[cat].forEach(p => h += plCardHtml(p));
    });
  } else {
    items.forEach(p => h += plCardHtml(p));
  }
  el.innerHTML = h;
}

function plCardHtml(p) {
  const div = p.division.toLowerCase();
  const emoji = CAT_EMOJI[p.category] || '📦';
  // Use pre-built STOCK_MAP
  const sm = STOCK_MAP[p.id] || null;
  const stockDot = sm ? '<div class="pl-stock-dot ' + sm.st + '"></div>' : '';
  return `<div class="pl-card" onclick="openProdModal('${p.id}')">
    <div class="pl-card-icon">${emoji}</div>
    <div class="pl-card-info">
      <div class="pl-card-name">${p.name}</div>
      <div class="pl-card-meta">
        <span class="pl-card-tag">${p.brand !== '-' ? p.brand : p.category}</span>
        <span class="pl-card-tag">${p.packaging}</span>
      </div>
    </div>
    <div style="display:flex;align-items:center;gap:6px">
      ${stockDot}
      <div class="pl-card-price">
        <div class="pl-card-price-val ${div}">${fmtShort(p.priceUnit)}</div>
        <div class="pl-card-price-unit">/${p.unit}</div>
      </div>
    </div>
  </div>`;
}

function onSearch(v) {
  plSearch = v.trim();
  if (plSearch) plCat = 'ALL';
  renderCats(); renderList();
}

function selectCat(c) { plCat = c; renderCats(); renderList(); }

// ════════════════
// PRODUCT MODAL
// ════════════════
function openProdModal(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  activeProduct = p;
  const div = p.division.toLowerCase();

  document.getElementById('pm-badge').className = 'pm-badge ' + div;
  document.getElementById('pm-badge').textContent = p.division + ' · ' + p.category;
  document.getElementById('pm-name').textContent = p.name;

  // Stock from STOCK_MAP (pre-built product-to-stock mapping)
  const stockMatch = STOCK_MAP[p.id] || null;
  const stBar = document.getElementById('pm-stock-bar');
  if (stockMatch) {
    const labels = { ok:'In Stock', low:'Low Stock — Order Soon', critical:'Critical — Running Low', out:'Out of Stock' };
    const qtyDisplay = stockMatch.saldo > 0 ? fmtNum(stockMatch.saldo) + ' ' + stockMatch.unit : 'None';
    const daysDisplay = stockMatch.buf > 0 ? ' · ~' + Math.round(stockMatch.buf) + ' days' : '';
    stBar.className = 'pm-stock-bar ' + stockMatch.st;
    stBar.innerHTML = '<div class="pm-stock-dot"></div>' +
      '<div class="pm-stock-txt">' + (labels[stockMatch.st] || stockMatch.st) + '</div>' +
      '<div class="pm-stock-qty">' + qtyDisplay + daysDisplay + '</div>';
  } else {
    stBar.className = 'pm-stock-bar out';
    stBar.innerHTML = '<div class="pm-stock-dot"></div><div class="pm-stock-txt">Not in stock system</div>';
  }

  // Volume tiers
  document.getElementById('pm-tiers').innerHTML = `
    <div class="pm-tier-title">Volume Pricing</div>
    <div class="pm-tier-list">
      ${TIERS.map((t, i) => {
        const price = tierPrice(p.priceUnit, i);
        const disc = t.disc > 0 ? `<div class="pm-tier-disc">−${(t.disc*100).toFixed(0)}%</div>` : '';
        return `<div class="pm-tier t${i}">
          <div>
            <div class="pm-tier-label">${t.label}</div>
            <div class="pm-tier-sub">${t.note}</div>
          </div>
          <div class="pm-tier-price">
            <div class="pm-tier-price-val">${fmt(price)}</div>
            ${disc}
            <div class="pm-tier-per">/${p.unit}</div>
          </div>
        </div>`;
      }).join('')}
    </div>`;

  // Details
  document.getElementById('pm-details').innerHTML = `
    <div class="pm-det"><div class="pm-det-label">Brand</div><div class="pm-det-val">${p.brand !== '-' ? p.brand : '—'}</div></div>
    <div class="pm-det"><div class="pm-det-label">Origin</div><div class="pm-det-val">${p.origin !== '-' ? p.origin : '—'}</div></div>
    <div class="pm-det full"><div class="pm-det-label">Packaging</div><div class="pm-det-val">${p.packaging}</div></div>
    <div class="pm-det"><div class="pm-det-label">Price / Case</div><div class="pm-det-val" style="color:var(--red)">${p.priceCase ? fmt(p.priceCase) : '—'}</div></div>
    <div class="pm-det"><div class="pm-det-label">Product ID</div><div class="pm-det-val" style="font-family:var(--mono);font-size:.72rem">${p.id}</div></div>`;

  document.getElementById('prod-overlay').classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeProdModal(e) { if (e.target === document.getElementById('prod-overlay')) closeProdModalBtn(); }
function closeProdModalBtn() {
  document.getElementById('prod-overlay').classList.add('hidden');
  document.body.style.overflow = '';
}

function shareProductWA() {
  if (!activeProduct) return;
  const p = activeProduct;
  const lines = [
    '*' + p.name + '*',
    p.division + ' - ' + p.category,
    'Packaging: ' + p.packaging,
    '',
    'Price:',
    ...TIERS.map(t => '  ' + t.label + ': ' + fmt(tierPrice(p.priceUnit, TIERS.indexOf(t))) + '/' + p.unit),
    '',
    'Order: +62 822-3661-7866',
    'Email: order@ptmku.com',
  ];
  openWA(lines.join('\n'));
}

function openWA(message) {
  // Opens WhatsApp with message pre-filled — user picks contact from their list
  window.open('https://wa.me/?text=' + encodeURIComponent(message), '_blank');
}

function addToOrder() {
  if (!activeProduct) return;
  const id = activeProduct.id;
  orderItems[id] = (orderItems[id] || 0) + 1;
  closeProdModalBtn();
  updateOrderBadge();
  showToast(`Added: ${activeProduct.name.split(' ').slice(0,3).join(' ')} ✓`);
}

function updateOrderBadge() {
  const total = Object.values(orderItems).reduce((a,b)=>a+b,0);
  const badge = document.getElementById('order-badge');
  badge.textContent = total;
  badge.style.display = total > 0 ? 'flex' : 'none';
}

// ════════════════
// ORDER BUILDER
// ════════════════
function renderOrder() {
  const ids = Object.keys(orderItems);
  const body = document.getElementById('order-body');

  if (!ids.length) {
    body.innerHTML = `<div class="order-empty">
      <div class="oe-ico">🛒</div>
      <p>No items yet</p>
      <small>Go to Pricelist → tap a product → Add to Order</small>
    </div>`;
    return;
  }

  let total = 0;
  let itemsH = '';
  ids.forEach(id => {
    const p = PRODUCTS.find(x => x.id === id);
    if (!p) return;
    const qty = orderItems[id];
    const tierIdx = qty >= 11 ? 2 : qty >= 6 ? 1 : 0;
    const price = tierPrice(p.priceUnit, tierIdx);
    const lineTotal = price * qty;
    total += lineTotal;
    itemsH += `<div class="oi-card">
      <div class="oi-info">
        <div class="oi-name">${p.name}</div>
        <div class="oi-tier">${TIERS[tierIdx].label} · ${fmt(price)}/${p.unit}</div>
      </div>
      <div class="oi-qty">
        <button class="oi-qty-btn minus" onclick="changeQty('${id}',-1)">−</button>
        <div class="oi-qty-val">${qty}</div>
        <button class="oi-qty-btn" onclick="changeQty('${id}',1)">+</button>
      </div>
      <div class="oi-price">
        <div class="oi-price-total">${fmtShort(lineTotal)}</div>
        <div class="oi-price-unit">×${qty}</div>
      </div>
    </div>`;
  });

  const itemCount = Object.values(orderItems).reduce((a,b)=>a+b,0);
  body.innerHTML = `
    <div class="order-items">${itemsH}</div>
    <div class="order-summary">
      <div class="os-row"><span class="os-label">${ids.length} product(s) · ${itemCount} units</span><span class="os-val"></span></div>
      <div class="os-row total"><span>Total Estimate</span><span>${fmt(total)}</span></div>
    </div>
    <div class="order-footer">
      <button class="of-send" onclick="sendOrder()">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
        Send via WhatsApp
      </button>
      <button class="of-clear" onclick="clearOrder()" title="Clear all">🗑️</button>
    </div>`;
}

function changeQty(id, delta) {
  orderItems[id] = (orderItems[id] || 0) + delta;
  if (orderItems[id] <= 0) delete orderItems[id];
  updateOrderBadge();
  renderOrder();
}

function clearOrder() {
  orderItems = {};
  updateOrderBadge();
  renderOrder();
}

function sendOrder() {
  const ids = Object.keys(orderItems);
  if (!ids.length) return;
  const cust = document.getElementById('order-cust')?.value || '—';
  const notes = document.getElementById('order-notes')?.value || '';
  const rep = currentRep ? currentRep.name : '—';
  let total = 0;
  const lines = [
    `ORDER REQUEST`,
    `Sales: ${rep}`,
    `Customer: ${cust}`,
    notes ? `Notes: ${notes}` : '',
    `Date: ${RAW.latest}`,
    ``,
    `ITEMS:`,
  ].filter(Boolean);
  ids.forEach(id => {
    const p = PRODUCTS.find(x => x.id === id);
    if (!p) return;
    const qty = orderItems[id];
    const tierIdx = qty >= 11 ? 2 : qty >= 6 ? 1 : 0;
    const price = tierPrice(p.priceUnit, tierIdx);
    const lineTotal = price * qty;
    total += lineTotal;
    lines.push(`- ${p.name}: ${qty} ${p.unit} x ${fmt(price)} = ${fmt(lineTotal)}`);
  });
  lines.push(``, `*TOTAL: ${fmt(total)}*`);
  openWA(lines.join('\n'));
}

// ════════════════
// STOCK SCREEN
// ════════════════
function switchStockDiv(div, btn) {
  stockDiv = div;
  stockSearch = '';
  const inp = document.getElementById('stock-search-inp');
  if (inp) inp.value = '';
  document.querySelectorAll('.sdiv').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderStock();
}

function filterStock(f, btn) {
  stockFilter = f;
  document.querySelectorAll('.sf').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderStock();
}

function onStockSearch(v) {
  stockSearch = v.trim().toLowerCase();
  renderStock();
}

function renderStock() {
  let items = getStockData(stockDiv);

  // Apply search
  if (stockSearch) {
    items = items.filter(s => s.name && s.name.toLowerCase().includes(stockSearch));
  }

  // Apply status filter
  if (stockFilter !== 'all') items = items.filter(s => s.st === stockFilter);

  // Sort: critical first, then low, ok, out last
  const priority = { critical:0, low:1, ok:2, out:3 };
  items = [...items].sort((a,b) => (priority[a.st]||9) - (priority[b.st]||9));

  if (!items.length) {
    document.getElementById('stock-list').innerHTML = `<div class="pl-no-results"><div class="e">📦</div><p>No items found</p></div>`;
    return;
  }

  const statusLabel = { ok:'In Stock', low:'Low Stock', critical:'Critical', out:'Out of Stock' };
  let h = '';
  items.forEach(s => {
    const bufDays = s.buf > 0 ? `~${Math.round(s.buf)} days remaining` : s.saldo > 0 ? 'No avg data' : '';
    h += `<div class="sk-card">
      <div class="sk-status-dot ${s.st}"></div>
      <div class="sk-info">
        <div class="sk-name">${s.name}</div>
        <div class="sk-code">${s.code} · ${statusLabel[s.st] || s.st}</div>
      </div>
      <div class="sk-right">
        <div class="sk-qty ${s.st}">${fmtNum(s.saldo)} ${s.unit}</div>
        <div class="sk-buf">${bufDays}</div>
      </div>
    </div>`;
  });
  document.getElementById('stock-list').innerHTML = h;
}

// ── INIT ──
// buildLogin() is called by index.html after data loads and login HTML is ready
// Do NOT call it here — rep-select does not exist yet at this point
