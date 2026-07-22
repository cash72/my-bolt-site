import { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import {
  buildShoppingList,
  formatCurrency,
  formatGallons,
  formatSqFt,
  paintTypeLabel,
  surfaceLabel,
} from '../lib/paint/calculate';
import type { EstimateResult, ProjectSettings } from '../lib/paint/types';

interface ResultsPanelProps {
  estimate: EstimateResult;
  settings: ProjectSettings;
}

export default function ResultsPanel({ estimate, settings }: ResultsPanelProps) {
  const [copied, setCopied] = useState(false);
  const hasInput = estimate.netPaintableSqFt > 0;
  const buyGallons = Math.ceil(estimate.gallonsNeeded);

  async function copyList() {
    const text = buildShoppingList(settings, estimate);
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="p-5 rounded-xl border border-blue-200 dark:border-blue-900/50 bg-blue-50/50 dark:bg-blue-950/20 space-y-4 animate-slide-up">
      <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Your estimate</h2>

      {!hasInput ? (
        <p className="text-sm text-slate-500 dark:text-slate-400">
          {settings.surface === 'trim'
            ? 'Enter cabinet doors, interior doors, and trim length to see gallons.'
            : 'Enter room dimensions to see paintable area and gallon counts.'}
        </p>
      ) : (
        <>
          <dl className="grid grid-cols-2 gap-x-4 gap-y-3 text-sm">
            <div>
              <dt className="text-slate-500 dark:text-slate-400">Paintable area</dt>
              <dd className="text-lg font-semibold">{formatSqFt(estimate.netPaintableSqFt)} sq ft</dd>
            </div>
            <div>
              <dt className="text-slate-500 dark:text-slate-400">With waste ({estimate.wastePercent}%)</dt>
              <dd className="text-lg font-semibold">+{formatSqFt(estimate.wasteSqFt)} sq ft</dd>
            </div>
            <div>
              <dt className="text-slate-500 dark:text-slate-400">
                Coverage ({estimate.coats} coat{estimate.coats !== 1 ? 's' : ''})
              </dt>
              <dd className="text-lg font-semibold text-blue-700 dark:text-blue-400">
                {formatSqFt(estimate.totalCoverageSqFt)} sq ft
              </dd>
            </div>
            <div>
              <dt className="text-slate-500 dark:text-slate-400">
                Gallons ({paintTypeLabel(settings.paintType)})
              </dt>
              <dd className="text-2xl font-bold text-blue-700 dark:text-blue-400">
                {formatGallons(estimate.gallonsNeeded)}
              </dd>
            </div>
          </dl>

          {estimate.sqFtPerGallon > 0 && estimate.gallonsNeeded > 0 && (
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Buy at store: {buyGallons} gallon{buyGallons !== 1 ? 's' : ''} ({estimate.quartsNeeded} quarts if buying
              quarts) · {surfaceLabel(settings.surface, settings.bothSides)} · {estimate.sqFtPerGallon} sq ft/gal
            </p>
          )}

          {estimate.totalDeductionSqFt > 0 && (
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Deducted {formatSqFt(estimate.totalDeductionSqFt)} sq ft for doors/windows
            </p>
          )}

          {estimate.totalCost !== null && (
            <div className="pt-3 border-t border-blue-200/60 dark:border-blue-900/40 text-sm">
              <p>
                <span className="text-slate-500 dark:text-slate-400">Estimated cost: </span>
                <span className="font-semibold">{formatCurrency(estimate.totalCost)}</span>
              </p>
            </div>
          )}

          {estimate.rooms.filter((r) => r.paintableSqFt > 0).length > 1 && (
            <div className="pt-3 border-t border-blue-200/60 dark:border-blue-900/40">
              <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-2">By room</p>
              <ul className="text-sm space-y-1">
                {estimate.rooms
                  .filter((r) => r.paintableSqFt > 0)
                  .map((room) => (
                    <li key={room.id} className="flex justify-between gap-2">
                      <span>{room.name}</span>
                      <span className="text-slate-500">{formatSqFt(room.paintableSqFt)} sq ft</span>
                    </li>
                  ))}
              </ul>
            </div>
          )}

          <button
            type="button"
            onClick={copyList}
            className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium transition-colors"
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
