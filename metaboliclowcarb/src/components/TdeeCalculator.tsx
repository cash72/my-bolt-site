import { useMemo, useState } from 'react';
import { calcTdeeTarget, formatCalories } from '../lib/metabolic/calculate';
import type { ActivityLevel, Sex, TdeeInput } from '../lib/metabolic/types';

const inputClass =
  'w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/40';

const ACTIVITY_OPTIONS: { value: ActivityLevel; label: string }[] = [
  { value: 'sedentary', label: 'Sedentary (desk / little exercise)' },
  { value: 'light', label: 'Light (1–3 days/week)' },
  { value: 'moderate', label: 'Moderate (3–5 days/week)' },
  { value: 'active', label: 'Active (6–7 days/week)' },
  { value: 'very_active', label: 'Very active (physical job / athlete)' },
];

const DEFICIT_OPTIONS = [
  { value: 0, label: 'Maintain (0%)' },
  { value: 10, label: 'Mild cut (10%)' },
  { value: 15, label: 'Moderate cut (15%)' },
  { value: 20, label: 'Aggressive cut (20%)' },
];

const DEFAULT: TdeeInput = {
  sex: 'female',
  age: 35,
  weightLbs: 160,
  heightFt: 5,
  heightIn: 5,
  activity: 'light',
  deficitPct: 15,
};

export default function TdeeCalculator({
  heading = 'TDEE Calorie Calculator',
  subheading = 'Estimate BMR and total daily energy expenditure (Mifflin-St Jeor), then apply an optional calorie deficit.',
}: {
  heading?: string;
  subheading?: string;
}) {
  const [input, setInput] = useState<TdeeInput>(DEFAULT);
  const result = useMemo(() => calcTdeeTarget(input), [input]);

  function update<K extends keyof TdeeInput>(key: K, value: TdeeInput[K]) {
    setInput((prev) => ({ ...prev, [key]: value }));
  }

  return (
    <div className="grid lg:grid-cols-5 gap-8">
      <div className="lg:col-span-3 space-y-6">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2">{heading}</h1>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">{subheading}</p>
        </div>

        <section className="space-y-4 p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
          <fieldset>
            <legend className="text-sm font-medium mb-2">Sex</legend>
            <div className="flex gap-2">
              {(['female', 'male'] as Sex[]).map((sex) => (
                <button
                  key={sex}
                  type="button"
                  onClick={() => update('sex', sex)}
                  className={`flex-1 px-3 py-2.5 rounded-lg text-sm font-medium border ${
                    input.sex === sex
                      ? 'bg-teal-600 text-white border-teal-600'
                      : 'border-slate-200 dark:border-slate-700'
                  }`}
                >
                  {sex === 'female' ? 'Female' : 'Male'}
                </button>
              ))}
            </div>
          </fieldset>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-slate-500 mb-1.5">Age</label>
              <input
                type="number"
                min="1"
                value={input.age || ''}
                onChange={(e) => update('age', Number(e.target.value) || 0)}
                className={inputClass}
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-500 mb-1.5">Weight (lbs)</label>
              <input
                type="number"
                min="1"
                value={input.weightLbs || ''}
                onChange={(e) => update('weightLbs', Number(e.target.value) || 0)}
                className={inputClass}
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-500 mb-1.5">Height (ft)</label>
              <input
                type="number"
                min="0"
                value={input.heightFt || ''}
                onChange={(e) => update('heightFt', Number(e.target.value) || 0)}
                className={inputClass}
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-500 mb-1.5">Height (in)</label>
              <input
                type="number"
                min="0"
                max="11"
                value={input.heightIn || ''}
                onChange={(e) => update('heightIn', Number(e.target.value) || 0)}
                className={inputClass}
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-500 mb-1.5">Activity</label>
            <select
              value={input.activity}
              onChange={(e) => update('activity', e.target.value as ActivityLevel)}
              className={inputClass}
            >
              {ACTIVITY_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>

          <fieldset>
            <legend className="text-sm font-medium mb-2">Calorie target</legend>
            <div className="grid sm:grid-cols-2 gap-2">
              {DEFICIT_OPTIONS.map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => update('deficitPct', opt.value)}
                  className={`px-3 py-2.5 rounded-lg text-sm font-medium border text-left ${
                    input.deficitPct === opt.value
                      ? 'bg-teal-600 text-white border-teal-600'
                      : 'border-slate-200 dark:border-slate-700'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </fieldset>
        </section>
      </div>

      <div className="lg:col-span-2">
        <div className="lg:sticky lg:top-20 p-5 rounded-xl border border-teal-200 dark:border-teal-900/50 bg-teal-50/50 dark:bg-teal-950/20 space-y-4">
          <h2 className="text-lg font-semibold">Your estimate</h2>
          {!result ? (
            <p className="text-sm text-slate-500">Enter age, weight, and height to calculate.</p>
          ) : (
            <dl className="space-y-3 text-sm">
              <div>
                <dt className="text-slate-500">BMR (at rest)</dt>
                <dd className="text-xl font-semibold">{formatCalories(result.bmr)}</dd>
              </div>
              <div>
                <dt className="text-slate-500">TDEE (maintenance)</dt>
                <dd className="text-xl font-semibold">{formatCalories(result.tdee)}</dd>
              </div>
              <div>
                <dt className="text-slate-500">
                  Target{result.deficitPct > 0 ? ` (−${result.deficitPct}%)` : ''}
                </dt>
                <dd className="text-3xl font-bold text-teal-700 dark:text-teal-400">
                  {formatCalories(result.targetCalories)}
                </dd>
              </div>
              {result.deficitKcal > 0 && (
                <p className="text-xs text-slate-500">
                  About {formatCalories(result.deficitKcal)} below maintenance. Target is floored at BMR.
                </p>
              )}
              <p className="text-xs text-slate-500">
                Next: set protein/fat/carbs with the{' '}
                <a href="/keto-macro-calculator" className="text-teal-700 dark:text-teal-400 underline">
                  keto macro calculator
                </a>
                .
              </p>
            </dl>
          )}
        </div>
      </div>
    </div>
  );
}
