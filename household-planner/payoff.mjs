/** Household debt payoff engine. Browser and Node both import this module. */

export const METHODS = [
  { id: 'avalanche', label: 'Avalanche', hint: 'Highest APR first — usually the cheapest' },
  { id: 'snowball', label: 'Snowball', hint: 'Smallest balance first — fastest early wins' },
  { id: 'hybrid', label: 'Hybrid', hint: 'Lowest balance ÷ APR — mix of speed and savings' },
  { id: 'interest-dollars', label: 'Highest interest $', hint: 'Highest monthly interest dollars first' },
  { id: 'payment', label: 'Highest payment', hint: 'Biggest minimum first — frees cash sooner' },
  { id: 'cfi', label: 'Cash-flow index', hint: 'Lowest balance ÷ min payment first' },
  { id: 'utilization', label: 'Utilization', hint: 'Closest to the credit limit first' },
  { id: 'custom', label: 'Custom order', hint: 'Uses the order number on each debt' },
];

export const CADENCES = [
  { id: 'weekly', label: 'Weekly' },
  { id: 'biweekly', label: 'Every 2 weeks' },
  { id: 'semimonthly', label: 'Twice a month' },
  { id: 'monthly', label: 'Monthly' },
  { id: 'annual', label: 'Yearly' },
];

export function parseMoney(value) {
  if (value == null || value === '') return 0;
  const n = Number(String(value).replace(/[^0-9.-]/g, ''));
  return Number.isFinite(n) ? n : 0;
}

export function toMonthly(amount, cadence) {
  const n = parseMoney(amount);
  switch (cadence) {
    case 'weekly':
      return (n * 52) / 12;
    case 'biweekly':
      return (n * 26) / 12;
    case 'semimonthly':
      return (n * 24) / 12;
    case 'annual':
      return n / 12;
    default:
      return n;
  }
}

/** Two pays per 4-week month — the lean month a biweekly household actually lives in. */
export function toFourWeek(amount, cadence) {
  const n = parseMoney(amount);
  switch (cadence) {
    case 'weekly':
      return n * 4;
    case 'biweekly':
      return n * 2;
    case 'semimonthly':
      return n * 2;
    case 'annual':
      return n / 13;
    default:
      return (n * 12) / 13;
  }
}

export function extraPaysPerYear(cadence) {
  if (cadence === 'biweekly' || cadence === 'weekly') return 2;
  return 0;
}

export function monthlyRate(aprPercent) {
  return parseMoney(aprPercent) / 100 / 12;
}

function cloneDebts(debts) {
  return debts
    .map((d, index) => ({
      id: d.id || `d${index}`,
      name: String(d.name || '').trim() || `Debt ${index + 1}`,
      balance: parseMoney(d.balance),
      apr: parseMoney(d.apr),
      min: parseMoney(d.min),
      limit: parseMoney(d.limit),
      type: d.type || 'other',
      order: Number(d.order) || index + 1,
    }))
    .filter((d) => d.balance > 0);
}

function rank(debts, method) {
  const copy = [...debts];
  const cmp = {
    snowball: (a, b) => a.balance - b.balance || a.apr - b.apr,
    avalanche: (a, b) => b.apr - a.apr || a.balance - b.balance,
    hybrid: (a, b) => a.balance / Math.max(a.apr, 0.01) - b.balance / Math.max(b.apr, 0.01),
    'interest-dollars': (a, b) => b.balance * b.apr - a.balance * a.apr,
    payment: (a, b) => b.min - a.min || a.balance - b.balance,
    cfi: (a, b) => a.balance / Math.max(a.min, 1) - b.balance / Math.max(b.min, 1),
    utilization: (a, b) => {
      const ua = a.limit > 0 ? a.balance / a.limit : -1;
      const ub = b.limit > 0 ? b.balance / b.limit : -1;
      return ub - ua;
    },
    custom: (a, b) => a.order - b.order,
  }[method];
  copy.sort(cmp || cmp.avalanche);
  return copy;
}

/**
 * @param {object} opts
 * @param {Array} opts.debts
 * @param {number} opts.monthlyBudget total cash available for all debt payments this month
 * @param {string} opts.method
 * @param {boolean} [opts.blaster]
 * @param {number} [opts.blasterAmt]
 * @param {number} [opts.snowflakeMonth1]
 * @param {number[]} [opts.snowflakeMonths] extra dollars in specific 1-based months
 * @param {number} [opts.maxMonths]
 */
export function simulate({
  debts,
  monthlyBudget,
  method = 'avalanche',
  blaster = false,
  blasterAmt = 0,
  snowflakeMonth1 = 0,
  snowflakeMonths = {},
  maxMonths = 360,
}) {
  const live = cloneDebts(debts);
  const startBalance = live.reduce((s, d) => s + d.balance, 0);
  if (!live.length) {
    return {
      ok: false,
      reason: 'no-debts',
      months: 0,
      totalInterest: 0,
      startBalance: 0,
      firstWinMonth: null,
      firstWinName: null,
      schedule: [],
      remainingSeries: [],
      paidOrder: [],
      shortfall: 0,
    };
  }

  const mins = () => live.filter((d) => d.balance > 0.005).reduce((s, d) => s + Math.max(d.min, 0), 0);
  let extraPool = 0;
  let totalInterest = 0;
  let firstWinMonth = null;
  let firstWinName = null;
  const paidOrder = [];
  const schedule = [];
  const remainingSeries = [];
  let shortfall = 0;

  for (let month = 1; month <= maxMonths; month += 1) {
    const active = live.filter((d) => d.balance > 0.005);
    if (!active.length) break;

    const required = mins();
    let available = monthlyBudget + extraPool;
    extraPool = 0;
    const flake = (month === 1 ? snowflakeMonth1 : 0) + (Number(snowflakeMonths[month]) || 0);
    available += flake;

    if (available + 0.01 < required) {
      shortfall = Math.max(shortfall, required - available);
    }

    let interestThisMonth = 0;
    for (const d of live.filter((row) => row.balance > 0.005)) {
      const interest = d.balance * monthlyRate(d.apr);
      d.balance += interest;
      totalInterest += interest;
      interestThisMonth += interest;
    }

    const still = live.filter((d) => d.balance > 0.005);
    const minDue = still.reduce((s, d) => s + Math.max(d.min, 0), 0);
    let cash = available;
    for (const d of still) {
      const pay = Math.min(d.balance, Math.max(d.min, 0), cash);
      d.balance -= pay;
      cash -= pay;
      if (d.balance < 0.005) d.balance = 0;
    }

    const leftover = Math.max(0, cash);
    const ordered = rank(
      live.filter((d) => d.balance > 0.005),
      method,
    );
    let extra = leftover;
    const attacks = [];
    for (const d of ordered) {
      if (extra < 0.005) break;
      const pay = Math.min(d.balance, extra);
      d.balance -= pay;
      extra -= pay;
      attacks.push({ name: d.name, extra: pay });
      if (d.balance < 0.005) d.balance = 0;
    }

    const justPaid = live.filter((d) => d.balance <= 0.005 && !paidOrder.some((p) => p.id === d.id));
    for (const d of justPaid) {
      paidOrder.push({ id: d.id, name: d.name, month });
      if (firstWinMonth == null) {
        firstWinMonth = month;
        firstWinName = d.name;
      }
      if (blaster) extraPool += parseMoney(blasterAmt);
    }

    const remaining = live.reduce((s, d) => s + d.balance, 0);
    remainingSeries.push(Math.max(0, remaining));
    if (month <= 24 || remaining <= 0.01) {
      schedule.push({
        month,
        remaining,
        interestMonth: interestThisMonth,
        paid: justPaid.map((d) => d.name),
        target: ordered[0]?.name || justPaid[0]?.name || '',
        extra: attacks.reduce((s, a) => s + a.extra, 0),
        minDue,
      });
    }

    if (remaining <= 0.05) {
      return {
        ok: true,
        reason: 'paid',
        months: month,
        totalInterest,
        startBalance,
        firstWinMonth,
        firstWinName,
        schedule,
        remainingSeries,
        paidOrder,
        shortfall,
        leftoverBudget: monthlyBudget - minDue,
      };
    }
  }

  return {
    ok: false,
    reason: shortfall > 0 ? 'shortfall' : 'horizon',
    months: maxMonths,
    totalInterest,
    startBalance,
    firstWinMonth,
    firstWinName,
    schedule,
    remainingSeries,
    paidOrder,
    shortfall,
  };
}

export function compareMethods(opts) {
  return METHODS.map((m) => {
    const result = simulate({ ...opts, method: m.id });
    return { ...m, ...result };
  });
}

export function formatMoney(n, currency = 'CAD') {
  try {
    return new Intl.NumberFormat('en-CA', {
      style: 'currency',
      currency,
      maximumFractionDigits: 0,
    }).format(n || 0);
  } catch {
    return `$${(n || 0).toFixed(0)}`;
  }
}

export function formatMoneyExact(n, currency = 'CAD') {
  try {
    return new Intl.NumberFormat('en-CA', {
      style: 'currency',
      currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(n || 0);
  } catch {
    return `$${(n || 0).toFixed(2)}`;
  }
}

export function monthsLabel(months) {
  if (!months || months <= 0) return '—';
  const y = Math.floor(months / 12);
  const m = months % 12;
  if (y && m) return `${y}y ${m}mo`;
  if (y) return `${y} year${y === 1 ? '' : 's'}`;
  return `${m} month${m === 1 ? '' : 's'}`;
}
