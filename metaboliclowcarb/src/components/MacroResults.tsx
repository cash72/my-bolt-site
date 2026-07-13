import { formatCalories } from '../lib/metabolic/calculate';
import type { MacroResult } from '../lib/metabolic/types';

interface MacroResultsProps {
  result: MacroResult | null;
}

export default function MacroResults({ result }: MacroResultsProps) {
  if (!result) {
    return (
      <div className="p-5 rounded-xl border border-teal-200 dark:border-teal-900/50 bg-teal-50/50 dark:bg-teal-950/20 space-y-3">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Your daily targets</h2>
        <div className="text-sm text-slate-500 dark:text-slate-400 space-y-2">
          <p>Fill in the form on the left — your personalized targets will appear here.</p>
          <p className="text-xs">
            You will get a daily calorie estimate plus how much <strong className="font-medium">protein</strong>,{' '}
            <strong className="font-medium">net carbs</strong>, and <strong className="font-medium">fat</strong> to aim
            for.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-5 rounded-xl border border-teal-200 dark:border-teal-900/50 bg-teal-50/50 dark:bg-teal-950/20 space-y-4 animate-slide-up">
      <div>
        <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Your daily targets</h2>
        <p className="text-xs text-teal-800 dark:text-teal-300/80 mt-1">{result.planLabel}</p>
      </div>

      <div className="p-3 rounded-lg bg-white dark:bg-slate-900/60 border border-teal-100 dark:border-teal-900/40 text-center">
        <p className="text-xs text-slate-500 dark:text-slate-400">About how many calories to maintain weight</p>
        <p className="text-2xl font-bold text-teal-700 dark:text-teal-400">{formatCalories(result.calories)}</p>
        <p className="text-xs text-slate-400 mt-1">per day</p>
      </div>

      <p className="text-xs text-slate-600 dark:text-slate-400">
        Try to hit these amounts each day — they are a starting guide, not a strict rule:
      </p>

      <div className="grid grid-cols-3 gap-2 text-center">
        <div className="p-3 rounded-lg bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
          <p className="text-xs text-slate-500">Protein</p>
          <p className="text-lg font-bold text-slate-900 dark:text-slate-100">{result.proteinG}g</p>
          <p className="text-[10px] text-slate-400 mt-0.5">per day</p>
        </div>
        <div className="p-3 rounded-lg bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
          <p className="text-xs text-slate-500">Net carbs</p>
          <p className="text-lg font-bold text-slate-900 dark:text-slate-100">{result.netCarbsG}g</p>
          <p className="text-[10px] text-slate-400 mt-0.5">max per day</p>
        </div>
        <div className="p-3 rounded-lg bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
          <p className="text-xs text-slate-500">Fat</p>
          <p className="text-lg font-bold text-slate-900 dark:text-slate-100">{result.fatG}g</p>
          <p className="text-[10px] text-slate-400 mt-0.5">per day</p>
        </div>
      </div>

      <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
        Estimates only — not medical advice. Talk to your doctor before changing your diet, especially if you take
        diabetes or blood pressure medication.
      </p>
    </div>
  );
}
