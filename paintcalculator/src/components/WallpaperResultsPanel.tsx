import { useState } from 'react';
import AdSlot from './AdSlot';
import SessionDeepener from './SessionDeepener';
import { CALCULATOR_NEXT_STEPS } from '../lib/sessionNextSteps';
import { Check, Copy } from 'lucide-react';
import { buildWallpaperShoppingList, formatCurrency, formatSqFt } from '../lib/wallpaper/calculate';
import type { WallpaperEstimate, WallpaperSettings } from '../lib/wallpaper/types';

interface WallpaperResultsPanelProps {
  estimate: WallpaperEstimate;
  settings: WallpaperSettings;
}

export default function WallpaperResultsPanel({ estimate, settings }: WallpaperResultsPanelProps) {
  const [copied, setCopied] = useState(false);
  const hasInput = estimate.netWallSqFt > 0;

  async function copyList() {
    await navigator.clipboard.writeText(buildWallpaperShoppingList(settings, estimate));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="p-5 rounded-xl border border-violet-200 dark:border-violet-900/50 bg-violet-50/50 dark:bg-violet-950/20 space-y-4 animate-slide-up">
      <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Your estimate</h2>

      {!hasInput ? (
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Enter room dimensions to see wall area and roll counts.
        </p>
      ) : (
        <>
          <dl className="grid grid-cols-2 gap-x-4 gap-y-3 text-sm">
            <div>
              <dt className="text-slate-500 dark:text-slate-400">Wall area</dt>
              <dd className="text-lg font-semibold">{formatSqFt(estimate.netWallSqFt)} sq ft</dd>
            </div>
            <div>
              <dt className="text-slate-500 dark:text-slate-400">With waste ({estimate.wastePercent}%)</dt>
              <dd className="text-lg font-semibold">+{formatSqFt(estimate.wasteSqFt)} sq ft</dd>
            </div>
            <div className="col-span-2">
              <dt className="text-slate-500 dark:text-slate-400">Rolls to buy</dt>
              <dd className="text-2xl font-bold text-violet-700 dark:text-violet-400">{estimate.rollsNeeded}</dd>
            </div>
          </dl>

          {estimate.sqFtPerRoll > 0 && (
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {settings.rollWidthIn}" × {settings.rollLengthFt} ft roll = {formatSqFt(estimate.sqFtPerRoll)} sq ft
              coverage
            </p>
          )}

          {estimate.totalCost !== null && (
            <p className="text-sm">
              <span className="text-slate-500">Estimated cost: </span>
              <span className="font-semibold">{formatCurrency(estimate.totalCost)}</span>
            </p>
          )}

          <SessionDeepener links={CALCULATOR_NEXT_STEPS} />

          <AdSlot placement="results" className="my-3" />

          <button
            type="button"
            onClick={copyList}
            className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-violet-600 hover:bg-violet-700 text-white text-sm font-medium transition-colors"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4" />
                Copied!
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                Copy shopping list
              </>
            )}
          </button>
        </>
      )}
    </div>
  );
}
