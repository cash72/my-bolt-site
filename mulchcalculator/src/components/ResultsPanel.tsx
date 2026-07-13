import { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import {
  buildShoppingList,
  formatCurrency,
  formatCubicYards,
  formatSqFt,
  materialTypeLabel,
} from '../lib/mulch/calculate';
import type { EstimateResult, ProjectSettings } from '../lib/mulch/types';

interface ResultsPanelProps {
  estimate: EstimateResult;
  settings: ProjectSettings;
}

export default function ResultsPanel({ estimate, settings }: ResultsPanelProps) {
  const [copied, setCopied] = useState(false);
  const hasInput = estimate.totalAreaSqFt > 0;
  const buyCubicYards = Math.ceil(estimate.cubicYards);

  async function copyList() {
    const text = buildShoppingList(settings, estimate);
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="p-5 rounded-xl border border-emerald-200 dark:border-emerald-900/50 bg-emerald-50/50 dark:bg-emerald-950/20 space-y-4 animate-slide-up">
      <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Your estimate</h2>

      {!hasInput ? (
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Enter bed dimensions to see area, cubic yards, and bag counts.
        </p>
      ) : (
        <>
          <dl className="grid grid-cols-2 gap-x-4 gap-y-3 text-sm">
            <div>
              <dt className="text-slate-500 dark:text-slate-400">Total area</dt>
              <dd className="text-lg font-semibold">{formatSqFt(estimate.totalAreaSqFt)} sq ft</dd>
            </div>
            <div>
              <dt className="text-slate-500 dark:text-slate-400">With waste ({estimate.wastePercent}%)</dt>
              <dd className="text-lg font-semibold">+{formatSqFt(estimate.wasteSqFt)} sq ft</dd>
            </div>
            <div>
              <dt className="text-slate-500 dark:text-slate-400">Depth</dt>
              <dd className="text-lg font-semibold">{estimate.depthIn}"</dd>
            </div>
            <div>
              <dt className="text-slate-500 dark:text-slate-400">
                Cubic yards ({materialTypeLabel(settings.materialType)})
              </dt>
              <dd className="text-2xl font-bold text-emerald-700 dark:text-emerald-400">
                {formatCubicYards(estimate.cubicYards)}
              </dd>
            </div>
            <div>
              <dt className="text-slate-500 dark:text-slate-400">Bags (2 cu ft)</dt>
              <dd className="text-lg font-semibold text-emerald-700 dark:text-emerald-400">{estimate.bagsNeeded}</dd>
            </div>
          </dl>

          {estimate.cubicYards > 0 && (
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Buy at store: {buyCubicYards} cubic yard{buyCubicYards !== 1 ? 's' : ''} · {Math.round(estimate.cubicFeet)}{' '}
              cu ft total · {estimate.bagsNeeded} bag{estimate.bagsNeeded !== 1 ? 's' : ''} if buying bagged
            </p>
          )}

          {estimate.totalCost !== null && (
            <div className="pt-3 border-t border-emerald-200/60 dark:border-emerald-900/40 text-sm">
              <p>
                <span className="text-slate-500 dark:text-slate-400">Estimated cost: </span>
                <span className="font-semibold">{formatCurrency(estimate.totalCost)}</span>
              </p>
            </div>
          )}

          {estimate.beds.filter((b) => b.areaSqFt > 0).length > 1 && (
            <div className="pt-3 border-t border-emerald-200/60 dark:border-emerald-900/40">
              <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-2">By bed</p>
              <ul className="text-sm space-y-1">
                {estimate.beds
                  .filter((b) => b.areaSqFt > 0)
                  .map((bed) => (
                    <li key={bed.id} className="flex justify-between gap-2">
                      <span>{bed.name}</span>
                      <span className="text-slate-500">{formatSqFt(bed.areaSqFt)} sq ft</span>
                    </li>
                  ))}
              </ul>
            </div>
          )}

          <button
            type="button"
            onClick={copyList}
            className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium transition-colors"
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
