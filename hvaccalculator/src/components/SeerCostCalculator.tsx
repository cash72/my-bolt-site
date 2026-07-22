import { useMemo, useState } from 'react';
import {
  DEFAULT_SEER_COST_INPUTS,
  calculateSeerCost,
  formatKwh,
  formatMoney,
  type SeerCostInputs,
} from '../lib/hvac/costCalculate';

export default function SeerCostCalculator({
  heading = 'AC Cost to Run Calculator',
  subheading = 'Estimate daily, monthly, and seasonal electricity cost from BTU capacity, SEER, run hours, and your $/kWh rate.',
}: {
  heading?: string;
  subheading?: string;
}) {
  const [inputs, setInputs] = useState<SeerCostInputs>(DEFAULT_SEER_COST_INPUTS);
  const result = useMemo(() => calculateSeerCost(inputs), [inputs]);

  function update(patch: Partial<SeerCostInputs>) {
    setInputs((prev) => ({ ...prev, ...patch }));
  }

  const hasResult = result.btu > 0 && result.seer > 0 && result.hoursPerDay > 0 && result.ratePerKwh > 0;

  return (
    <div className="grid lg:grid-cols-5 gap-8">
      <div className="lg:col-span-3 space-y-6">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2">{heading}</h1>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">{subheading}</p>
        </div>

        <section className="space-y-4 p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
          <fieldset>
            <legend className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Capacity</legend>
            <div className="flex gap-2 mb-3">
              {(
                [
                  { value: 'btu' as const, label: 'BTU/hr' },
                  { value: 'tons' as const, label: 'Tons' },
                ] as const
              ).map(({ value, label }) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => update({ capacityMode: value })}
                  className={`flex-1 px-3 py-2.5 rounded-lg text-sm font-medium border transition-colors ${
                    inputs.capacityMode === value
                      ? 'bg-sky-600 text-white border-sky-600'
                      : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
            <input
              type="number"
              min="0"
              step={inputs.capacityMode === 'tons' ? '0.5' : '1000'}
              value={inputs.capacity}
              onChange={(e) => update({ capacity: e.target.value })}
              className="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm"
              aria-label={inputs.capacityMode === 'tons' ? 'Tons' : 'BTU per hour'}
            />
            <p className="text-[10px] text-slate-400 mt-1">1 ton = 12,000 BTU/hr</p>
          </fieldset>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-slate-500 mb-1.5">SEER / SEER2 (current)</label>
              <input
                type="number"
                min="1"
                step="0.1"
                value={inputs.seer}
                onChange={(e) => update({ seer: e.target.value })}
                className="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-500 mb-1.5">
                Compare SEER <span className="font-normal">(optional)</span>
              </label>
              <input
                type="number"
                min="0"
                step="0.1"
                value={inputs.compareSeer}
                onChange={(e) => update({ compareSeer: e.target.value })}
                className="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-500 mb-1.5">Hours / day</label>
              <input
                type="number"
                min="0"
                step="0.5"
                value={inputs.hoursPerDay}
                onChange={(e) => update({ hoursPerDay: e.target.value })}
                className="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-500 mb-1.5">$/kWh</label>
              <input
                type="number"
                min="0"
                step="0.01"
                value={inputs.ratePerKwh}
                onChange={(e) => update({ ratePerKwh: e.target.value })}
                className="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-500 mb-1.5">Days / month</label>
              <input
                type="number"
                min="1"
                step="1"
                value={inputs.daysPerMonth}
                onChange={(e) => update({ daysPerMonth: e.target.value })}
                className="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-500 mb-1.5">Cooling season days</label>
              <input
                type="number"
                min="1"
                step="1"
                value={inputs.seasonDays}
                onChange={(e) => update({ seasonDays: e.target.value })}
                className="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm"
              />
            </div>
          </div>
        </section>
      </div>

      <div className="lg:col-span-2">
        <div className="lg:sticky lg:top-20 p-5 rounded-xl border border-sky-200 dark:border-sky-900/50 bg-sky-50/50 dark:bg-sky-950/20 space-y-4">
          <h2 className="text-lg font-semibold">Your estimate</h2>
          {!hasResult ? (
            <p className="text-sm text-slate-500">Enter capacity, SEER, hours, and rate to see costs.</p>
          ) : (
            <>
              <dl className="grid grid-cols-2 gap-3 text-sm">
                <div>
                  <dt className="text-slate-500">Capacity</dt>
                  <dd className="font-semibold">{result.btu.toLocaleString()} BTU/hr</dd>
                </div>
                <div>
                  <dt className="text-slate-500">Monthly kWh</dt>
                  <dd className="font-semibold">{formatKwh(result.kwhPerMonth)}</dd>
                </div>
                <div>
                  <dt className="text-slate-500">Cost / day</dt>
                  <dd className="font-semibold text-sky-700 dark:text-sky-400">{formatMoney(result.costPerDay)}</dd>
                </div>
                <div>
                  <dt className="text-slate-500">Cost / month</dt>
                  <dd className="text-2xl font-bold text-sky-700 dark:text-sky-400">
                    {formatMoney(result.costPerMonth)}
                  </dd>
                </div>
                <div className="col-span-2">
                  <dt className="text-slate-500">Season ({result.seasonDays} days)</dt>
                  <dd className="font-semibold">
                    {formatKwh(result.kwhPerSeason)} kWh · {formatMoney(result.costPerSeason)}
                  </dd>
                </div>
              </dl>
              {result.monthlySavings !== null && result.compareSeer !== null && (
                <p className="text-sm text-slate-600 dark:text-slate-300 border-l-4 border-sky-500 pl-3">
                  vs SEER {result.compareSeer}:{' '}
                  {result.monthlySavings > 0
                    ? `save about ${formatMoney(result.monthlySavings)}/month`
                    : result.monthlySavings < 0
                      ? `about ${formatMoney(Math.abs(result.monthlySavings))}/month more`
                      : 'similar monthly cost'}
                  {result.seasonalSavings !== null
                    ? ` · ${formatMoney(Math.abs(result.seasonalSavings))} over the season`
                    : ''}
                  .
                </p>
              )}
              <p className="text-xs text-slate-500">
                Formula: kWh ≈ (BTU/hr × hours) ÷ (SEER × 1,000). Planning estimate only — not a utility bill.
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
