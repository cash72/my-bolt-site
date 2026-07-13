import { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import {
  buildShoppingList,
  formatCurrency,
  formatSqFt,
  sheetSizeLabel,
} from '../lib/drywall/calculate';
import type { EstimateResult, ProjectSettings } from '../lib/drywall/types';
import { DEFAULT_SHEET_HEIGHT, DEFAULT_SHEET_WIDTH } from '../lib/drywall/types';

interface ResultsPanelProps {
  estimate: EstimateResult;
  settings: ProjectSettings;
}

function parseNonNegative(value: string): number {
  const n = parseFloat(value);
  if (!Number.isFinite(n) || n < 0) return 0;
  return n;
}

export default function ResultsPanel({ estimate, settings }: ResultsPanelProps) {
  const [copied, setCopied] = useState(false);
  const hasInput = estimate.netSqFt > 0;

  const sheetWidth = parseNonNegative(settings.sheetWidth) || DEFAULT_SHEET_WIDTH;
  const sheetHeight = parseNonNegative(settings.sheetHeight) || DEFAULT_SHEET_HEIGHT;

  async function copyList() {
    const text = buildShoppingList(settings, estimate);
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="p-5 rounded-xl border border-orange-200 dark:border-orange-900/50 bg-orange-50/50 dark:bg-orange-950/20 space-y-4 animate-slide-up">
      <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Your estimate</h2>

      {!hasInput ? (
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Enter room dimensions to see drywall area and sheet counts.
        </p>
      ) : (
        <>
          <dl className="grid grid-cols-2 gap-x-4 gap-y-3 text-sm">
            <div>
              <dt className="text-slate-500 dark:text-slate-400">Net area</dt>
              <dd className="text-lg font-semibold">{formatSqFt(estimate.netSqFt)} sq ft</dd>
            </div>
            <div>
              <dt className="text-slate-500 dark:text-slate-400">With waste ({estimate.wastePercent}%)</dt>
              <dd className="text-lg font-semibold">+{formatSqFt(estimate.wasteSqFt)} sq ft</dd>
            </div>
            <div>
              <dt className="text-slate-500 dark:text-slate-400">Sheet size</dt>
              <dd className="text-lg font-semibold text-orange-700 dark:text-orange-400">
                {sheetSizeLabel(sheetWidth, sheetHeight)}
              </dd>
            </div>
            <div>
              <dt className="text-slate-500 dark:text-slate-400">Sheets to buy</dt>
              <dd className="text-2xl font-bold text-orange-700 dark:text-orange-400">
                {estimate.sheetsNeeded}
              </dd>
            </div>
          </dl>

          {settings.includeCeiling && estimate.totalCeilingSqFt > 0 && (
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Includes {formatSqFt(estimate.totalCeilingSqFt)} sq ft ceiling area
            </p>
          )}

          {estimate.totalDeductionSqFt > 0 && (
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Deducted {formatSqFt(estimate.totalDeductionSqFt)} sq ft for doors/windows
            </p>
          )}

          {estimate.screwsEstimate !== null && (
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Screws estimate (rough): {estimate.screwsEstimate.toLocaleString('en-US')}
            </p>
          )}

          {estimate.totalCost !== null && (
            <div className="pt-3 border-t border-orange-200/60 dark:border-orange-900/40 text-sm">
              <p>
                <span className="text-slate-500 dark:text-slate-400">Estimated cost: </span>
                <span className="font-semibold">{formatCurrency(estimate.totalCost)}</span>
              </p>
            </div>
          )}

          {estimate.rooms.filter((r) => r.totalSqFt > 0).length > 1 && (
            <div className="pt-3 border-t border-orange-200/60 dark:border-orange-900/40">
              <p className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-2">By room</p>
              <ul className="text-sm space-y-1">
                {estimate.rooms
                  .filter((r) => r.totalSqFt > 0)
                  .map((room) => (
                    <li key={room.id} className="flex justify-between gap-2">
                      <span>{room.name}</span>
                      <span className="text-slate-500">{formatSqFt(room.totalSqFt)} sq ft</span>
                    </li>
                  ))}
              </ul>
            </div>
          )}

          <button
            type="button"
            onClick={copyList}
            className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-orange-600 hover:bg-orange-700 text-white text-sm font-medium transition-colors"
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
