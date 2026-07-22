import { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import {
  buildShoppingList,
  formatCurrency,
  formatSqFt,
  materialLabel,
} from '../lib/flooring/calculate';
import type { EstimateResult, ProjectSettings } from '../lib/flooring/types';

interface ResultsPanelProps {
  estimate: EstimateResult;
  settings: ProjectSettings;
}

export default function ResultsPanel({ estimate, settings }: ResultsPanelProps) {
  const [copied, setCopied] = useState(false);
  const hasInput = estimate.totalSqFt > 0;

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
          Enter room dimensions to see square footage, waste, and box counts.
        </p>
      ) : (
        <>
          <dl className="grid grid-cols-2 gap-x-4 gap-y-3 text-sm">
            <div>
              <dt className="text-slate-500 dark:text-slate-400">Total area</dt>
              <dd className="text-lg font-semibold">{formatSqFt(estimate.totalSqFt)} sq ft</dd>
            </div>
            <div>
              <dt className="text-slate-500 dark:text-slate-400">Waste ({estimate.wastePercent}%)</dt>
              <dd className="text-lg font-semibold">+{formatSqFt(estimate.wasteSqFt)} sq ft</dd>
            </div>
            <div>
              <dt className="text-slate-500 dark:text-slate-400">Buy this much</dt>
              <dd className="text-lg font-semibold text-emerald-700 dark:text-emerald-400">
                {formatSqFt(estimate.totalWithWasteSqFt)} sq ft
              </dd>
            </div>
            <div>
              <dt className="text-slate-500 dark:text-slate-400">
                {settings.material === 'carpet' ? 'Square yards (carpet)' : `Boxes (${materialLabel(settings.material)})`}
              </dt>
              <dd className="text-2xl font-bold text-emerald-700 dark:text-emerald-400">{estimate.boxesNeeded}</dd>
            </div>
          </dl>

          {settings.material === 'carpet' && estimate.totalWithWasteSqFt > 0 && (
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {formatSqFt(estimate.totalWithWasteSqFt)} sq ft ≈ {estimate.boxesNeeded} square yards (÷ 9)
            </p>
          )}

          {settings.material !== 'carpet' && estimate.sqFtPerBox > 0 && estimate.boxesNeeded > 0 && (
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {estimate.boxesNeeded} box{estimate.boxesNeeded !== 1 ? 'es' : ''} × {estimate.sqFtPerBox} sq ft ={' '}
              {formatSqFt(estimate.coveredSqFt)} sq ft covered
              {estimate.leftoverSqFt > 0 && ` (${formatSqFt(estimate.leftoverSqFt)} sq ft leftover)`}
            </p>
          )}

          {estimate.totalCost !== null && (
            <div className="pt-3 border-t border-emerald-200/60 dark:border-emerald-900/40 text-sm space-y-1">
              {estimate.materialCost !== null && (
                <p>
                  <span className="text-slate-500 dark:text-slate-400">Material: </span>
                  <span className="font-semibold">{formatCurrency(estimate.materialCost)}</span>
                </p>
              )}
              {estimate.installCost !== null && (
                <p>
                  <span className="text-slate-500 dark:text-slate-400">Install: </span>
                  <span className="font-semibold">{formatCurrency(estimate.installCost)}</span>
                </p>
              )}
              <p>
                <span className="text-slate-500 dark:text-slate-400">Estimated total: </span>
                <span className="font-semibold">{formatCurrency(estimate.totalCost)}</span>
              </p>
              {estimate.wasteCost !== null && (
                <p className="text-slate-500 dark:text-slate-400">
                  Waste portion of material (~): {formatCurrency(estimate.wasteCost)}
                </p>
              )}
            </div>
          )}

          {estimate.rooms.filter((r) => r.sqFt > 0).length > 1 && (
            <div className="pt-3 border-t border-emerald-200/60 dark:border-emerald-900/40">
              <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-2">By room</p>
              <ul className="text-sm space-y-1">
                {estimate.rooms
                  .filter((r) => r.sqFt > 0)
                  .map((room) => (
                    <li key={room.id} className="flex justify-between gap-2">
                      <span>{room.name}</span>
                      <span className="text-slate-500">{formatSqFt(room.sqFt)} sq ft</span>
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
