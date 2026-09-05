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

const defaultState = () => ({
  currency: 'CAD',
  autoUpdate: true,
  conservativePaycheques: true,
  you: { amount: '', cadence: 'biweekly' },
  spouse: { amount: '', cadence: 'biweekly' },
  other: { amount: '', cadence: 'monthly' },
  expenses: [
    { id: 'housing', name: 'Housing (rent or mortgage)', amount: '', cadence: 'monthly' },
    { id: 'utilities', name: 'Utilities', amount: '', cadence: 'monthly' },
    { id: 'groceries', name: 'Groceries', amount: '', cadence: 'monthly' },
    { id: 'transport', name: 'Transport / fuel / transit', amount: '', cadence: 'monthly' },
    { id: 'insurance', name: 'Insurance', amount: '', cadence: 'monthly' },
    { id: 'phone', name: 'Phone / internet', amount: '', cadence: 'monthly' },
    { id: 'medical', name: 'Medical / prescriptions', amount: '', cadence: 'monthly' },
    { id: 'other', name: 'Other living costs', amount: '', cadence: 'monthly' },
  ],
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
    if (Array.isArray(parsed.expenses)) state.expenses = parsed.expenses;
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

function expensesMonthly(conservative) {
  const conv = conservative ? toFourWeek : toMonthly;
  return state.expenses.reduce((s, row) => s + conv(row.amount, row.cadence), 0);
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
  const spend = expensesMonthly(conservative);
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
  return { income, spend, leftover, debts, minTotal, monthlyBudget, result, comparison, conservative };
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

function renderResults() {
  const model = buildModel();
  lastModel = model;
  const { income, spend, leftover, debts, minTotal, result, comparison } = model;
  const short = leftover + 0.01 < minTotal && debts.length > 0;

  $('stat-income').textContent = money(income);
  $('stat-spend').textContent = money(spend);
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
    state.expenses.push({ id: uid(), name: '', amount: '', cadence: 'monthly' });
    renderForm();
    bindTables();
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
      state = { ...defaultState(), ...parsed };
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
    const parts = line.split(/[\t,]+/).map((p) => p.trim());
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
