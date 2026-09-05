import {
  CADENCES,
  METHODS,
  compareMethods,
  extraPaysPerYear,
  formatMoney,
  formatMoneyExact,
  monthsLabel,
  parseMoney,
  simulate,
  toFourWeek,
  toMonthly,
} from './payoff.mjs';

const STORAGE_KEY = 'household-planner-v1';
const DEBOUNCE_MS = 450;

const uid = () => `id-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`;

const DEFAULT_EXPENSES = [
  { id: 'housing', name: 'Housing (rent or mortgage)', amount: '', spent: '', cadence: 'monthly' },
  { id: 'utilities', name: 'Utilities (hydro, heat, water)', amount: '', spent: '', cadence: 'monthly' },
  { id: 'groceries', name: 'Groceries', amount: '', spent: '', cadence: 'monthly' },
  { id: 'sundries', name: 'Sundries / household / toiletries', amount: '', spent: '', cadence: 'monthly' },
  { id: 'hardware', name: 'Hardware / home maintenance', amount: '', spent: '', cadence: 'monthly' },
  { id: 'entertainment', name: 'Entertainment', amount: '', spent: '', cadence: 'monthly' },
  { id: 'dining', name: 'Dining out / coffee', amount: '', spent: '', cadence: 'monthly' },
  { id: 'transport', name: 'Transport / fuel / transit', amount: '', spent: '', cadence: 'monthly' },
  { id: 'insurance', name: 'Insurance', amount: '', spent: '', cadence: 'monthly' },
  { id: 'phone', name: 'Phone / internet', amount: '', spent: '', cadence: 'monthly' },
  { id: 'medical', name: 'Medical / prescriptions', amount: '', spent: '', cadence: 'monthly' },
  { id: 'clothing', name: 'Clothing', amount: '', spent: '', cadence: 'monthly' },
  { id: 'personal', name: 'Personal care', amount: '', spent: '', cadence: 'monthly' },
  { id: 'kids', name: 'Kids / childcare', amount: '', spent: '', cadence: 'monthly' },
  { id: 'pets', name: 'Pets', amount: '', spent: '', cadence: 'monthly' },
  { id: 'subscriptions', name: 'Subscriptions', amount: '', spent: '', cadence: 'monthly' },
  { id: 'gifts', name: 'Gifts / charity', amount: '', spent: '', cadence: 'monthly' },
  { id: 'other', name: 'Other living costs', amount: '', spent: '', cadence: 'monthly' },
];

function normalizeName(name) {
  return String(name || '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();
}

function mergeExpenses(saved) {
  if (!Array.isArray(saved) || !saved.length) return DEFAULT_EXPENSES.map((row) => ({ ...row }));
  const remaining = [...saved];
  const merged = [];
  for (const def of DEFAULT_EXPENSES) {
    const idx = remaining.findIndex(
      (row) => row.id === def.id || normalizeName(row.name) === normalizeName(def.name) ||
        (def.id === 'groceries' && /grocer/i.test(row.name || '')) ||
        (def.id === 'housing' && /housing|rent|mortgage/i.test(row.name || '')) ||
        (def.id === 'transport' && /transport|fuel|transit/i.test(row.name || '')) ||
        (def.id === 'phone' && /phone|internet/i.test(row.name || '')) ||
        (def.id === 'medical' && /medical|prescription/i.test(row.name || '')) ||
        (def.id === 'utilities' && /utilit|hydro/i.test(row.name || '')) ||
        (def.id === 'other' && /^other/i.test(row.name || '')),
    );
    if (idx >= 0) {
      const hit = remaining.splice(idx, 1)[0];
      merged.push({
        ...def,
        ...hit,
        id: def.id,
        name: hit.name || def.name,
        spent: hit.spent ?? '',
        cadence: hit.cadence || def.cadence,
      });
    } else {
      merged.push({ ...def });
    }
  }
  for (const extra of remaining) {
    merged.push({ cadence: 'monthly', amount: '', spent: '', ...extra });
  }
  return merged;
}

const defaultState = () => ({
  currency: 'CAD',
  autoUpdate: true,
  conservativePaycheques: true,
  you: { amount: '', cadence: 'biweekly' },
  spouse: { amount: '', cadence: 'biweekly' },
  other: { amount: '', cadence: 'monthly' },
  expenses: DEFAULT_EXPENSES.map((row) => ({ ...row })),
  debts: [
    { id: uid(), name: '', balance: '', apr: '', min: '', limit: '', type: 'card', order: 1 },
  ],
  method: 'avalanche',
  blaster: false,
  blasterAmt: '25',
  extraOverride: '',
  snowflake: '',
  notes: '',
  openItems: [
    { id: 'undebt', text: 'Paste the Undebt.it account list (balance, APR, min, limit)', done: false },
    { id: 'you-pay', text: 'Confirm your take-home after tax / deductions', done: false },
    { id: 'assist', text: 'Confirm spouse assistance amount (net, every 2 weeks)', done: false },
    { id: 'housing', text: 'Lock housing: rent vs mortgage, taxes, fees', done: false },
    { id: 'promo', text: 'Note any promo APR expiry dates', done: false },
    { id: 'buffer', text: 'Decide the cash buffer before extra principal', done: false },
  ],
});

let state = defaultState();
let debounceTimer = null;
let dirty = false;
let lastModel = null;

const $ = (id) => document.getElementById(id);

function cadenceOptions(selected) {
  return CADENCES.map(
    (c) => `<option value="${c.id}" ${c.id === selected ? 'selected' : ''}>${c.label}</option>`,
  ).join('');
}

function load() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    const parsed = JSON.parse(raw);
    state = { ...defaultState(), ...parsed, you: { ...defaultState().you, ...parsed.you }, spouse: { ...defaultState().spouse, ...parsed.spouse }, other: { ...defaultState().other, ...parsed.other } };
    state.expenses = mergeExpenses(parsed.expenses);
    if (Array.isArray(parsed.debts) && parsed.debts.length) state.debts = parsed.debts;
    if (Array.isArray(parsed.openItems)) state.openItems = parsed.openItems;
  } catch {
    /* keep defaults */
  }
}

function save() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function setStatus(text, pending = false) {
  const el = $('status');
  if (el) el.textContent = text;
  dirty = pending;
}

function incomeMonthly(conservative) {
  const conv = conservative ? toFourWeek : toMonthly;
  return (
    conv(state.you.amount, state.you.cadence) +
    conv(state.spouse.amount, state.spouse.cadence) +
    conv(state.other.amount, state.other.cadence)
  );
}

function categoryRows(conservative) {
  const conv = conservative ? toFourWeek : toMonthly;
  return state.expenses.map((row) => {
    const budget = conv(row.amount, row.cadence);
    const spent = parseMoney(row.spent);
    return { ...row, budget, spent, variance: budget - spent };
  });
}

function snowflakeMonths() {
  if (!state.conservativePaycheques) return {};
  const extra =
    extraPaysPerYear(state.you.cadence) * parseMoney(state.you.amount) +
    extraPaysPerYear(state.spouse.cadence) * parseMoney(state.spouse.amount);
  if (extra <= 0) return {};
  return { 6: extra / 2, 12: extra / 2 };
}

function buildModel() {
  const conservative = state.conservativePaycheques;
  const income = incomeMonthly(conservative);
  const categories = categoryRows(conservative);
  const spend = categories.reduce((s, row) => s + row.budget, 0);
  const actual = categories.reduce((s, row) => s + row.spent, 0);
  const leftover = income - spend;
  const debts = state.debts.filter((d) => parseMoney(d.balance) > 0);
  const minTotal = debts.reduce((s, d) => s + parseMoney(d.min), 0);
  const override = parseMoney(state.extraOverride);
  const monthlyBudget = override > 0 ? override + minTotal : leftover;
  const result = simulate({
    debts,
    monthlyBudget: Math.max(0, monthlyBudget),
    method: state.method,
    blaster: state.blaster,
    blasterAmt: state.blasterAmt,
    snowflakeMonth1: parseMoney(state.snowflake),
    snowflakeMonths: snowflakeMonths(),
  });
  const comparison = debts.length
    ? compareMethods({
        debts,
        monthlyBudget: Math.max(0, monthlyBudget),
        blaster: state.blaster,
        blasterAmt: state.blasterAmt,
        snowflakeMonth1: parseMoney(state.snowflake),
        snowflakeMonths: snowflakeMonths(),
      })
    : [];
  return { income, spend, actual, leftover, debts, minTotal, monthlyBudget, result, comparison, conservative, categories };
}

function money(n) {
  return formatMoney(n, state.currency);
}

function drawChart(series) {
  const svg = $('balance-chart');
  if (!svg) return;
  if (!series.length) {
    svg.innerHTML = '';
    return;
  }
  const w = 640;
  const h = 160;
  const pad = 8;
  const max = Math.max(...series, 1);
  const step = series.length === 1 ? 0 : (w - pad * 2) / (series.length - 1);
  const pts = series
    .map((v, i) => {
      const x = pad + i * step;
      const y = h - pad - (v / max) * (h - pad * 2);
      return `${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(' ');
  svg.setAttribute('viewBox', `0 0 ${w} ${h}`);
  svg.innerHTML = `<polyline fill="none" stroke="currentColor" stroke-width="2.5" points="${pts}" />`;
}

const SLICE_COLORS = ['#2563eb', '#0ea5e9', '#1e3a8a', '#334155', '#64748b', '#0369a1', '#475569', '#38bdf8'];

function drawPie(slices) {
  const svg = $('spend-pie');
  if (!svg) return;
  const total = slices.reduce((s, row) => s + row.value, 0);
  if (total <= 0) {
    svg.innerHTML = '';
    return;
  }
  const cx = 80;
  const cy = 80;
  const r = 70;
  let angle = -Math.PI / 2;
  const parts = [];
  slices.forEach((slice, i) => {
    const color = SLICE_COLORS[i % SLICE_COLORS.length];
    if (slice.value >= total - 0.0001) {
      parts.push(`<circle cx="${cx}" cy="${cy}" r="${r}" fill="${color}" />`);
      angle += Math.PI * 2;
      return;
    }
    const next = angle + (slice.value / total) * Math.PI * 2;
    const large = next - angle > Math.PI ? 1 : 0;
    const x1 = cx + r * Math.cos(angle);
    const y1 = cy + r * Math.sin(angle);
    const x2 = cx + r * Math.cos(next);
    const y2 = cy + r * Math.sin(next);
    parts.push(
      `<path d="M ${cx} ${cy} L ${x1.toFixed(1)} ${y1.toFixed(1)} A ${r} ${r} 0 ${large} 1 ${x2.toFixed(1)} ${y2.toFixed(1)} Z" fill="${color}" />`,
    );
    angle = next;
  });
  svg.setAttribute('viewBox', '0 0 160 160');
  svg.innerHTML = parts.join('');
}

function renderTracker(categories) {
  const active = categories.filter((row) => row.budget > 0 || row.spent > 0);
  const bars = $('spend-bars');
  const caption = $('spend-caption');
  const select = $('spend-cat');
  if (select) {
    select.innerHTML = state.expenses
      .map((row) => `<option value="${escapeAttr(row.id)}">${escapeHtml(row.name || 'Untitled')}</option>`)
      .join('');
  }
  if (!active.length) {
    bars.innerHTML = '';
    drawPie([]);
    caption.textContent = 'Enter a budget or a spent amount to see the mix.';
    return;
  }
  const top = [...active].sort((a, b) => b.budget + b.spent - (a.budget + a.spent)).slice(0, 8);
  bars.innerHTML = top
    .map((row) => {
      const cap = Math.max(row.budget, row.spent, 1);
      const pct = Math.min(100, (row.spent / cap) * 100);
      const over = row.spent > row.budget + 0.005 && row.budget > 0;
      return `<div class="spend-row">
        <div class="name" title="${escapeAttr(row.name)}">${escapeHtml(row.name)}</div>
        <div class="bar"><span class="${over ? 'over' : ''}" style="width:${pct.toFixed(1)}%"></span></div>
        <div class="amt">${money(row.spent)} / ${money(row.budget)}</div>
      </div>`;
    })
    .join('');
  drawPie(active.filter((row) => row.budget > 0).map((row) => ({ label: row.name, value: row.budget })));
  const overCount = active.filter((row) => row.budget > 0 && row.spent > row.budget + 0.005).length;
  caption.textContent = overCount
    ? `${overCount} categor${overCount === 1 ? 'y is' : 'ies are'} over budget this period. Bars are spent vs budget.`
    : 'Bars are spent vs budget this period. Pie is the budget mix.';
}

function renderResults() {
  const model = buildModel();
  lastModel = model;
  const { income, spend, actual, leftover, debts, minTotal, result, comparison, categories } = model;
  const short = leftover + 0.01 < minTotal && debts.length > 0;
  const variance = spend - actual;

  $('stat-income').textContent = money(income);
  $('stat-spend').textContent = money(spend);
  $('stat-actual').textContent = money(actual);
  $('stat-variance').textContent = money(variance);
  $('stat-variance').parentElement.classList.toggle('danger', variance < -0.5);
  $('stat-variance').parentElement.classList.toggle('ok', actual > 0 && variance >= 0);
  $('stat-variance-label').textContent = variance >= 0 ? 'Under budget this period' : 'Over budget this period';
  $('stat-left').textContent = money(leftover);
  $('stat-left').parentElement.classList.toggle('danger', leftover < 0 || short);
  $('stat-left').parentElement.classList.toggle('ok', leftover > minTotal && debts.length > 0);
  $('stat-debtfree').textContent = result.ok ? monthsLabel(result.months) : debts.length ? 'Not in 30y' : 'Add a debt';
  $('stat-income-label').textContent = model.conservative ? 'Operating income (4-week month)' : 'Average monthly income';
  $('stat-left-label').textContent = short ? 'Short vs debt minimums' : 'Left for debt / buffer';

  const alert = $('budget-alert');
  if (short) {
    alert.className = 'callout danger';
    alert.textContent = `Operating leftover ${money(leftover)} is below debt minimums ${money(minTotal)}. Raise income, cut a living cost, or the schedule cannot run.`;
    alert.classList.remove('hidden');
  } else if (debts.length && leftover > minTotal) {
    alert.className = 'callout ok';
    alert.textContent = `${money(leftover - minTotal)} extra per operating month after minimums, rolled onto the current target (${METHODS.find((m) => m.id === state.method)?.label}).`;
    alert.classList.remove('hidden');
  } else {
    alert.classList.add('hidden');
  }

  const compareWrap = $('compare-wrap');
  const scheduleWrap = $('schedule-wrap');
  const chartCaption = $('chart-caption');
  if (!debts.length) {
    compareWrap.classList.add('hidden');
    scheduleWrap.classList.add('hidden');
    drawChart([]);
    chartCaption.textContent = 'Balance chart appears after a debt balance is entered.';
  } else {
    compareWrap.classList.remove('hidden');
    scheduleWrap.classList.remove('hidden');
    $('compare-body').innerHTML = comparison
      .map((row) => {
        const active = row.id === state.method;
        return `<tr${active ? ' style="font-weight:600"' : ''}>
          <td>${row.label}${active ? ' · current' : ''}</td>
          <td class="num">${row.ok ? monthsLabel(row.months) : '—'}</td>
          <td class="num">${money(row.totalInterest)}</td>
          <td>${row.firstWinName ? `${row.firstWinName} · mo ${row.firstWinMonth}` : '—'}</td>
        </tr>`;
      })
      .join('');
    const rows = result.schedule.map((row) => {
      const paid = row.paid.length ? row.paid.join(', ') : '';
      return `<tr>
        <td>Month ${row.month}</td>
        <td>${row.target || '—'}</td>
        <td class="num">${formatMoneyExact(row.extra, state.currency)}</td>
        <td class="num">${money(row.remaining)}</td>
        <td>${paid || '—'}</td>
      </tr>`;
    });
    $('schedule-body').innerHTML = rows.join('');
    drawChart(result.remainingSeries.slice(0, 60));
    chartCaption.textContent = result.ok
      ? `Remaining total debt by month until paid off (${result.months} months). Interest over the plan: ${money(result.totalInterest)}.`
      : `Remaining total debt by month for the first ${result.remainingSeries.length} months.`;
  }
  $('interest-stat').textContent = debts.length ? money(result.totalInterest) : '—';
  renderTracker(categories);
}

function renderForm() {
  $('currency').value = state.currency;
  $('auto-update').checked = state.autoUpdate;
  $('conservative').checked = state.conservativePaycheques;
  $('you-amount').value = state.you.amount;
  $('you-cadence').innerHTML = cadenceOptions(state.you.cadence);
  $('spouse-amount').value = state.spouse.amount;
  $('spouse-cadence').innerHTML = cadenceOptions(state.spouse.cadence);
  $('other-amount').value = state.other.amount;
  $('other-cadence').innerHTML = cadenceOptions(state.other.cadence);
  $('blaster').checked = state.blaster;
  $('blaster-amt').value = state.blasterAmt;
  $('extra-override').value = state.extraOverride;
  $('snowflake').value = state.snowflake;
  $('notes').value = state.notes;

  $('expense-body').innerHTML = state.expenses
    .map(
      (row) => `<tr data-id="${row.id}">
        <td><input type="text" data-k="name" value="${escapeAttr(row.name)}" /></td>
        <td><input type="number" inputmode="decimal" data-k="amount" value="${escapeAttr(row.amount)}" min="0" step="1" /></td>
        <td><input type="number" inputmode="decimal" data-k="spent" value="${escapeAttr(row.spent ?? '')}" min="0" step="1" /></td>
        <td><select data-k="cadence">${cadenceOptions(row.cadence)}</select></td>
        <td><button class="btn ghost" data-act="del-exp" title="Remove">Remove</button></td>
      </tr>`,
    )
    .join('');

  $('debt-body').innerHTML = state.debts
    .map(
      (row) => `<tr data-id="${row.id}">
        <td><input class="tiny" type="number" data-k="order" value="${escapeAttr(row.order)}" min="1" /></td>
        <td><input type="text" data-k="name" value="${escapeAttr(row.name)}" placeholder="Visa, car, CRA…" /></td>
        <td><input type="number" inputmode="decimal" data-k="balance" value="${escapeAttr(row.balance)}" min="0" step="1" /></td>
        <td><input type="number" inputmode="decimal" data-k="apr" value="${escapeAttr(row.apr)}" min="0" step="0.01" /></td>
        <td><input type="number" inputmode="decimal" data-k="min" value="${escapeAttr(row.min)}" min="0" step="1" /></td>
        <td><input type="number" inputmode="decimal" data-k="limit" value="${escapeAttr(row.limit)}" min="0" step="1" /></td>
        <td>
          <select data-k="type">
            ${['card', 'loan', 'auto', 'student', 'tax', 'mortgage', 'other']
              .map((t) => `<option ${row.type === t ? 'selected' : ''}>${t}</option>`)
              .join('')}
          </select>
        </td>
        <td><button class="btn ghost" data-act="del-debt">Remove</button></td>
      </tr>`,
    )
    .join('');

  $('methods').innerHTML = METHODS.map(
    (m) =>
      `<button type="button" class="method" data-method="${m.id}" aria-pressed="${state.method === m.id}" title="${escapeAttr(m.hint)}">${m.label}</button>`,
  ).join('');

  $('open-items').innerHTML = state.openItems
    .map(
      (item) =>
        `<li><input type="checkbox" data-open="${item.id}" ${item.done ? 'checked' : ''} /> <span>${escapeHtml(item.text)}</span></li>`,
    )
    .join('');
}

function escapeHtml(s) {
  return String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}
function escapeAttr(s) {
  return escapeHtml(s);
}

function scheduleUpdate(immediate = false) {
  save();
  if (immediate || !state.autoUpdate) {
    if (immediate) {
      clearTimeout(debounceTimer);
      renderResults();
      setStatus(`Updated ${new Date().toLocaleTimeString()}`);
    } else {
      setStatus('Click Update to recalculate', true);
    }
    return;
  }
  setStatus('Updating…', true);
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(() => {
    renderResults();
    setStatus(`Updated ${new Date().toLocaleTimeString()}`);
  }, DEBOUNCE_MS);
}

function bind() {
  $('update-btn').addEventListener('click', () => scheduleUpdate(true));
  $('auto-update').addEventListener('change', (e) => {
    state.autoUpdate = e.target.checked;
    scheduleUpdate(true);
  });
  $('conservative').addEventListener('change', (e) => {
    state.conservativePaycheques = e.target.checked;
    scheduleUpdate();
  });
  $('currency').addEventListener('change', (e) => {
    state.currency = e.target.value;
    scheduleUpdate(true);
  });
  $('you-amount').addEventListener('input', (e) => {
    state.you.amount = e.target.value;
    scheduleUpdate();
  });
  $('you-cadence').addEventListener('change', (e) => {
    state.you.cadence = e.target.value;
    scheduleUpdate();
  });
  $('spouse-amount').addEventListener('input', (e) => {
    state.spouse.amount = e.target.value;
    scheduleUpdate();
  });
  $('spouse-cadence').addEventListener('change', (e) => {
    state.spouse.cadence = e.target.value;
    scheduleUpdate();
  });
  $('other-amount').addEventListener('input', (e) => {
    state.other.amount = e.target.value;
    scheduleUpdate();
  });
  $('other-cadence').addEventListener('change', (e) => {
    state.other.cadence = e.target.value;
    scheduleUpdate();
  });
  $('blaster').addEventListener('change', (e) => {
    state.blaster = e.target.checked;
    scheduleUpdate();
  });
  $('blaster-amt').addEventListener('input', (e) => {
    state.blasterAmt = e.target.value;
    scheduleUpdate();
  });
  $('extra-override').addEventListener('input', (e) => {
    state.extraOverride = e.target.value;
    scheduleUpdate();
  });
  $('snowflake').addEventListener('input', (e) => {
    state.snowflake = e.target.value;
    scheduleUpdate();
  });
  $('notes').addEventListener('input', (e) => {
    state.notes = e.target.value;
    save();
  });

  $('expense-body').addEventListener('input', onTableInput('expenses'));
  $('expense-body').addEventListener('change', onTableInput('expenses'));
  $('debt-body').addEventListener('input', onTableInput('debts'));
  $('debt-body').addEventListener('change', onTableInput('debts'));
  $('expense-body').addEventListener('click', (e) => {
    const btn = e.target.closest('[data-act="del-exp"]');
    if (!btn) return;
    const id = btn.closest('tr').dataset.id;
    state.expenses = state.expenses.filter((row) => row.id !== id);
    renderForm();
    bindTables();
    scheduleUpdate(true);
  });
  $('debt-body').addEventListener('click', (e) => {
    const btn = e.target.closest('[data-act="del-debt"]');
    if (!btn) return;
    const id = btn.closest('tr').dataset.id;
    state.debts = state.debts.filter((row) => row.id !== id);
    if (!state.debts.length) state.debts.push({ id: uid(), name: '', balance: '', apr: '', min: '', limit: '', type: 'card', order: 1 });
    renderForm();
    bindTables();
    scheduleUpdate(true);
  });
  $('add-expense').addEventListener('click', () => {
    state.expenses.push({ id: uid(), name: '', amount: '', spent: '', cadence: 'monthly' });
    renderForm();
    bindTables();
    scheduleUpdate(true);
  });
  $('reset-spent').addEventListener('click', () => {
    state.expenses = state.expenses.map((row) => ({ ...row, spent: '' }));
    renderForm();
    bindTables();
    scheduleUpdate(true);
  });
  $('add-spend').addEventListener('click', () => {
    const id = $('spend-cat').value;
    const amt = parseMoney($('spend-amt').value);
    if (!id || amt <= 0) return;
    const row = state.expenses.find((item) => item.id === id);
    if (!row) return;
    row.spent = String(parseMoney(row.spent) + amt);
    const note = $('spend-note').value.trim();
    if (note) {
      state.notes = state.notes
        ? `${state.notes}\n${row.name}: ${amt}${state.currency === 'USD' ? ' USD' : ''} — ${note}`
        : `${row.name}: ${amt} — ${note}`;
    }
    $('spend-amt').value = '';
    $('spend-note').value = '';
    renderForm();
    bindTables();
    scheduleUpdate(true);
  });
  $('add-debt').addEventListener('click', () => {
    state.debts.push({
      id: uid(),
      name: '',
      balance: '',
      apr: '',
      min: '',
      limit: '',
      type: 'card',
      order: state.debts.length + 1,
    });
    renderForm();
    bindTables();
  });
  $('methods').addEventListener('click', (e) => {
    const btn = e.target.closest('[data-method]');
    if (!btn) return;
    state.method = btn.dataset.method;
    renderForm();
    bindTables();
    scheduleUpdate(true);
  });
  $('open-items').addEventListener('change', (e) => {
    const id = e.target.dataset.open;
    if (!id) return;
    state.openItems = state.openItems.map((item) => (item.id === id ? { ...item, done: e.target.checked } : item));
    save();
  });
  $('export-btn').addEventListener('click', () => {
    const blob = new Blob([JSON.stringify({ ...state, exportedAt: new Date().toISOString() }, null, 2)], {
      type: 'application/json',
    });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'household-budget.json';
    a.click();
    URL.revokeObjectURL(a.href);
  });
  $('import-file').addEventListener('change', async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      const parsed = JSON.parse(await file.text());
      const debts = Array.isArray(parsed.debts) && parsed.debts.length ? parsed.debts : defaultState().debts;
      state = { ...defaultState(), ...parsed, you: { ...defaultState().you, ...parsed.you }, spouse: { ...defaultState().spouse, ...parsed.spouse }, other: { ...defaultState().other, ...parsed.other } };
      state.expenses = mergeExpenses(parsed.expenses);
      state.debts = debts;
      renderForm();
      bindTables();
      scheduleUpdate(true);
    } catch {
      setStatus('Import failed — use a JSON export from this page');
    }
    e.target.value = '';
  });
  $('reset-btn').addEventListener('click', () => {
    if (!confirm('Clear this browser’s saved planner numbers?')) return;
    state = defaultState();
    localStorage.removeItem(STORAGE_KEY);
    renderForm();
    bindTables();
    scheduleUpdate(true);
  });
  $('paste-debts').addEventListener('click', () => {
    const raw = $('debt-paste').value.trim();
    if (!raw) return;
    const rows = parseDebtPaste(raw);
    if (!rows.length) {
      setStatus('Could not parse that paste — use Name, Balance, APR, Min, Limit');
      return;
    }
    state.debts = rows;
    $('debt-paste').value = '';
    renderForm();
    bindTables();
    scheduleUpdate(true);
  });
}

function bindTables() {
  /* listeners are delegated on tbody; re-render keeps them */
}

function onTableInput(listKey) {
  return (e) => {
    const input = e.target.closest('[data-k]');
    if (!input) return;
    const tr = input.closest('tr');
    const row = state[listKey].find((item) => item.id === tr.dataset.id);
    if (!row) return;
    row[input.dataset.k] = input.type === 'number' || input.tagName === 'SELECT' || true ? input.value : input.value;
    scheduleUpdate();
  };
}

function parseDebtPaste(raw) {
  const lines = raw.split(/\n+/).map((l) => l.trim()).filter(Boolean);
  const rows = [];
  for (const line of lines) {
    if (/^name/i.test(line)) continue;
    let parts;
    if (/[\t,]/.test(line)) {
      parts = line.split(/[\t,]+/).map((p) => p.trim());
    } else {
      const m = line.match(/^(.+?)\s+(-?[\d,]+(?:\.\d+)?)\s+(-?[\d.]+)\s+(-?[\d,]+(?:\.\d+)?)(?:\s+(-?[\d,]+(?:\.\d+)?))?(?:\s+(\S+))?$/);
      parts = m ? m.slice(1).filter((p) => p != null) : [];
    }
    if (parts.length < 3) continue;
    rows.push({
      id: uid(),
      name: parts[0],
      balance: parts[1],
      apr: parts[2],
      min: parts[3] || '',
      limit: parts[4] || '',
      type: parts[5] || 'other',
      order: rows.length + 1,
    });
  }
  return rows;
}

load();
renderForm();
bind();
renderResults();
setStatus('Ready — numbers save in this browser');
