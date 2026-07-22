export interface SeerCostInputs {
  capacityMode: 'btu' | 'tons';
  capacity: string;
  seer: string;
  compareSeer: string;
  hoursPerDay: string;
  daysPerMonth: string;
  seasonDays: string;
  ratePerKwh: string;
}

export interface SeerCostResult {
  btu: number;
  seer: number;
  compareSeer: number | null;
  hoursPerDay: number;
  daysPerMonth: number;
  seasonDays: number;
  ratePerKwh: number;
  kwhPerDay: number;
  kwhPerMonth: number;
  kwhPerSeason: number;
  costPerDay: number;
  costPerMonth: number;
  costPerSeason: number;
  compareKwhPerMonth: number | null;
  compareCostPerMonth: number | null;
  monthlySavings: number | null;
  seasonalSavings: number | null;
}

export const DEFAULT_SEER_COST_INPUTS: SeerCostInputs = {
  capacityMode: 'btu',
  capacity: '12000',
  seer: '16',
  compareSeer: '22',
  hoursPerDay: '8',
  daysPerMonth: '30',
  seasonDays: '120',
  ratePerKwh: '0.15',
};

function parsePositive(value: string): number {
  const n = parseFloat(value);
  if (!Number.isFinite(n) || n <= 0) return 0;
  return n;
}

/** Rough planning estimate: kWh = (BTU/hr × hours) / (SEER × 1000). */
export function calculateSeerCost(inputs: SeerCostInputs): SeerCostResult {
  const capacity = parsePositive(inputs.capacity);
  const btu = inputs.capacityMode === 'tons' ? capacity * 12_000 : capacity;
  const seer = parsePositive(inputs.seer);
  const compareRaw = parsePositive(inputs.compareSeer);
  const compareSeer = compareRaw > 0 && compareRaw !== seer ? compareRaw : null;
  const hoursPerDay = parsePositive(inputs.hoursPerDay);
  const daysPerMonth = parsePositive(inputs.daysPerMonth) || 30;
  const seasonDays = parsePositive(inputs.seasonDays) || 120;
  const ratePerKwh = parsePositive(inputs.ratePerKwh);

  const kwhPerHour = seer > 0 && btu > 0 ? btu / (seer * 1000) : 0;
  const kwhPerDay = kwhPerHour * hoursPerDay;
  const kwhPerMonth = kwhPerDay * daysPerMonth;
  const kwhPerSeason = kwhPerDay * seasonDays;

  const costPerDay = kwhPerDay * ratePerKwh;
  const costPerMonth = kwhPerMonth * ratePerKwh;
  const costPerSeason = kwhPerSeason * ratePerKwh;

  let compareKwhPerMonth: number | null = null;
  let compareCostPerMonth: number | null = null;
  let monthlySavings: number | null = null;
  let seasonalSavings: number | null = null;

  if (compareSeer !== null && btu > 0 && hoursPerDay > 0 && ratePerKwh > 0) {
    const compareKwhPerHour = btu / (compareSeer * 1000);
    compareKwhPerMonth = compareKwhPerHour * hoursPerDay * daysPerMonth;
    compareCostPerMonth = compareKwhPerMonth * ratePerKwh;
    monthlySavings = costPerMonth - compareCostPerMonth;
    seasonalSavings = (kwhPerDay * seasonDays * ratePerKwh) - (compareKwhPerHour * hoursPerDay * seasonDays * ratePerKwh);
  }

  return {
    btu,
    seer,
    compareSeer,
    hoursPerDay,
    daysPerMonth,
    seasonDays,
    ratePerKwh,
    kwhPerDay,
    kwhPerMonth,
    kwhPerSeason,
    costPerDay,
    costPerMonth,
    costPerSeason,
    compareKwhPerMonth,
    compareCostPerMonth,
    monthlySavings,
    seasonalSavings,
  };
}

export function formatMoney(value: number): string {
  return value.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

export function formatKwh(value: number): string {
  if (value === 0) return '0';
  if (value < 10) return value.toFixed(2);
  return value.toFixed(1);
}
