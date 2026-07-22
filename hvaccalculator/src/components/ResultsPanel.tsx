import { useState } from 'react';
import AdSlot from './AdSlot';
import SessionDeepener from './SessionDeepener';
import { CALCULATOR_NEXT_STEPS } from '../lib/sessionNextSteps';
import { Check, Copy } from 'lucide-react';
import {
  buildSizingSummary,
  formatBtu,
  formatSqFt,
  formatTons,
  miniSplitLabel,
} from '../lib/hvac/calculate';
import type { EstimateResult, ProjectSettings } from '../lib/hvac/types';

interface ResultsPanelProps {
  estimate: EstimateResult;
  settings: ProjectSettings;
}

export default function ResultsPanel({ estimate, settings }: ResultsPanelProps) {
  const [copied, setCopied] = useState(false);
  const hasInput = estimate.totalAreaSqFt > 0;

  async function copySummary() {
    const text = buildSizingSummary(settings, estimate);
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="p-5 rounded-xl border border-sky-200 dark:border-sky-900/50 bg-sky-50/50 dark:bg-sky-950/20 space-y-4 animate-slide-up">
      <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Your sizing estimate</h2>

      {!hasInput ? (
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Enter space dimensions to see BTU load and recommended mini-split size.
        </p>
      ) : (
        <>
          <dl className="grid grid-cols-2 gap-x-4 gap-y-3 text-sm">
            <div>
              <dt className="text-slate-500 dark:text-slate-400">Total area</dt>
              <dd className="text-lg font-semibold">{formatSqFt(estimate.totalAreaSqFt)} sq ft</dd>
            </div>
            <div>
              <dt className="text-slate-500 dark:text-slate-400">Cooling load</dt>
              <dd className="text-lg font-semibold">{formatBtu(estimate.totalCoolingBtu)} BTU</dd>
            </div>
            <div>
              <dt className="text-slate-500 dark:text-slate-400">Heating estimate</dt>
              <dd className="text-lg font-semibold">{formatBtu(estimate.totalHeatingBtu)} BTU</dd>
            </div>
            <div className="col-span-2">
              <dt className="text-slate-500 dark:text-slate-400">Recommended mini-split</dt>
              <dd className="text-2xl font-bold text-sky-700 dark:text-sky-400">
                {miniSplitLabel(estimate.recommendedMiniSplitBtu)}
              </dd>
            </div>
          </dl>

          {estimate.alternateMiniSplitBtu && (
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Upsize option: {miniSplitLabel(estimate.alternateMiniSplitBtu)} for hot climates, poor insulation, or
              west-facing glass.
            </p>
          )}

          <p className="text-xs text-slate-500 dark:text-slate-400">
            Tonnage: {formatTons(estimate.recommendedTons)} ton — common single-zone head sizes are 9k, 12k, 18k, and
            24k BTU.
          </p>

          {estimate.spaces.filter((s) => s.areaSqFt > 0).length > 1 && (
            <div className="pt-3 border-t border-sky-200/60 dark:border-sky-900/40">
              <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-2">By space (single zone total)</p>
              <ul className="text-sm space-y-1">
                {estimate.spaces
                  .filter((s) => s.areaSqFt > 0)
                  .map((space) => (
                    <li key={space.id} className="flex justify-between gap-2">
                      <span>{space.name}</span>
                      <span className="text-slate-500">{formatBtu(space.coolingBtu)} BTU</span>
                    </li>
                  ))}
              </ul>
            </div>
          )}

          <SessionDeepener links={CALCULATOR_NEXT_STEPS} />

          <AdSlot placement="results" className="my-3" />

          <button
            type="button"
            onClick={copySummary}
            className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-sky-600 hover:bg-sky-700 text-white text-sm font-medium transition-colors"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4" />
                Copied!
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                Copy sizing summary
              </>
            )}
          </button>
        </>
      )}
    </div>
  );
}
