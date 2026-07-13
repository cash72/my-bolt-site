import { formatGrams } from '../lib/metabolic/calculate';
import type { NetCarbResult } from '../lib/metabolic/types';

interface NetCarbResultsProps {
  result: NetCarbResult;
}

export default function NetCarbResults({ result }: NetCarbResultsProps) {
  const hasInput = result.totalCarbsG > 0;

  return (
    <div className="p-5 rounded-xl border border-teal-200 dark:border-teal-900/50 bg-teal-50/50 dark:bg-teal-950/20 space-y-4 animate-slide-up">
      <div>
        <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Your net carbs</h2>
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
          This is what counts toward your daily low-carb limit.
        </p>
      </div>

      {!hasInput ? (
        <div className="text-sm text-slate-500 dark:text-slate-400 space-y-2">
          <p>Start by entering <strong className="font-medium text-slate-700 dark:text-slate-300">Total Carbohydrate</strong> from the label.</p>
          <p className="text-xs">Your number will show here instantly — no button to press.</p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 rounded-lg bg-white dark:bg-slate-900/60 border border-teal-100 dark:border-teal-900/40">
              <p className="text-xs text-slate-500 dark:text-slate-400">One serving</p>
              <p className="text-2xl font-bold text-teal-700 dark:text-teal-400">
                {formatGrams(result.netCarbsPerServingG)}
              </p>
              <p className="text-xs text-slate-400">net carbs</p>
            </div>
            <div className="p-3 rounded-lg bg-white dark:bg-slate-900/60 border border-teal-100 dark:border-teal-900/40">
              <p className="text-xs text-slate-500 dark:text-slate-400">
                If you eat {result.servings} serving{result.servings !== 1 ? 's' : ''}
              </p>
              <p className="text-2xl font-bold text-teal-700 dark:text-teal-400">
                {formatGrams(result.netCarbsTotalG)}
              </p>
              <p className="text-xs text-slate-400">net carbs total</p>
            </div>
          </div>

          <div className="text-xs text-slate-500 dark:text-slate-400 rounded-lg bg-white/60 dark:bg-slate-900/40 px-3 py-2">
            <p className="font-medium text-slate-700 dark:text-slate-300 mb-1">How we got this:</p>
            <p>
              {formatGrams(result.totalCarbsG)} total − {formatGrams(result.fiberG)} fiber −{' '}
              {formatGrams(result.sugarAlcoholsG)} sugar alcohols
            </p>
          </div>
        </>
      )}
    </div>
  );
}
