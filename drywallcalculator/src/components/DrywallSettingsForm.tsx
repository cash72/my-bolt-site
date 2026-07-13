import type { ProjectSettings } from '../lib/drywall/types';

interface DrywallSettingsFormProps {
  settings: ProjectSettings;
  onUpdate: (patch: Partial<ProjectSettings>) => void;
}

export default function DrywallSettingsForm({ settings, onUpdate }: DrywallSettingsFormProps) {
  return (
    <div className="space-y-4">
      <fieldset>
        <legend className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Surfaces</legend>
        <div className="flex gap-2">
          {[
            { value: false, label: 'Walls only' },
            { value: true, label: 'Walls + ceiling' },
          ].map(({ value, label }) => (
            <button
              key={label}
              type="button"
              onClick={() => onUpdate({ includeCeiling: value })}
              className={`flex-1 px-3 py-2.5 rounded-lg text-sm font-medium border transition-colors ${
                settings.includeCeiling === value
                  ? 'bg-orange-600 text-white border-orange-600'
                  : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-orange-300'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </fieldset>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div>
          <label htmlFor="sheet-width" className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1.5">
            Sheet width (ft)
          </label>
          <input
            id="sheet-width"
            type="number"
            min="0"
            step="0.5"
            value={settings.sheetWidth}
            onChange={(e) => onUpdate({ sheetWidth: e.target.value })}
            className="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/40"
          />
        </div>
        <div>
          <label htmlFor="sheet-height" className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1.5">
            Sheet height (ft)
          </label>
          <input
            id="sheet-height"
            type="number"
            min="0"
            step="0.5"
            value={settings.sheetHeight}
            onChange={(e) => onUpdate({ sheetHeight: e.target.value })}
            className="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/40"
          />
          <p className="text-[10px] text-slate-400 mt-1">Default 4×8 ft (32 sq ft)</p>
        </div>
        <div>
          <label htmlFor="waste-percent" className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1.5">
            Waste %
          </label>
          <input
            id="waste-percent"
            type="number"
            min="0"
            max="50"
            step="1"
            value={settings.wastePercent}
            onChange={(e) => onUpdate({ wastePercent: e.target.value })}
            className="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/40"
          />
          <p className="text-[10px] text-slate-400 mt-1">Default 10% for cuts and mistakes</p>
        </div>
        <div>
          <label htmlFor="doors" className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1.5">
            Doors <span className="font-normal">(−20 sq ft each)</span>
          </label>
          <input
            id="doors"
            type="number"
            min="0"
            step="1"
            value={settings.doors}
            onChange={(e) => onUpdate({ doors: e.target.value })}
            className="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/40"
          />
        </div>
        <div>
          <label htmlFor="windows" className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1.5">
            Windows <span className="font-normal">(−15 sq ft each)</span>
          </label>
          <input
            id="windows"
            type="number"
            min="0"
            step="1"
            value={settings.windows}
            onChange={(e) => onUpdate({ windows: e.target.value })}
            className="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/40"
          />
        </div>
        <div>
          <label htmlFor="price-sheet" className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1.5">
            Price / sheet <span className="font-normal">(optional)</span>
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">$</span>
            <input
              id="price-sheet"
              type="number"
              min="0"
              step="0.01"
              value={settings.pricePerSheet}
              onChange={(e) => onUpdate({ pricePerSheet: e.target.value })}
              placeholder="0"
              className="w-full pl-7 pr-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/40"
            />
          </div>
        </div>
      </div>

      <label className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300 cursor-pointer">
        <input
          type="checkbox"
          checked={settings.estimateScrews}
          onChange={(e) => onUpdate({ estimateScrews: e.target.checked })}
          className="rounded border-slate-300 text-orange-600 focus:ring-orange-500/40"
        />
        Estimate screws (~32 per sheet)
      </label>
    </div>
  );
}
