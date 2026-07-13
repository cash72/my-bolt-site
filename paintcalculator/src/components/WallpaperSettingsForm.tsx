import type { WallpaperSettings } from '../lib/wallpaper/types';

interface WallpaperSettingsFormProps {
  settings: WallpaperSettings;
  onUpdate: (patch: Partial<WallpaperSettings>) => void;
}

export default function WallpaperSettingsForm({ settings, onUpdate }: WallpaperSettingsFormProps) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <div>
        <label htmlFor="roll-width" className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1.5">
          Roll width (inches)
        </label>
        <input
          id="roll-width"
          type="number"
          min="0"
          step="0.5"
          value={settings.rollWidthIn}
          onChange={(e) => onUpdate({ rollWidthIn: e.target.value })}
          className="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500/40"
        />
        <p className="text-[10px] text-slate-400 mt-1">Standard double roll: 21"</p>
      </div>
      <div>
        <label htmlFor="roll-length" className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1.5">
          Roll length (ft)
        </label>
        <input
          id="roll-length"
          type="number"
          min="0"
          step="1"
          value={settings.rollLengthFt}
          onChange={(e) => onUpdate({ rollLengthFt: e.target.value })}
          className="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500/40"
        />
        <p className="text-[10px] text-slate-400 mt-1">Common: 33 ft</p>
      </div>
      <div>
        <label htmlFor="pattern-repeat" className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1.5">
          Pattern repeat (in)
        </label>
        <input
          id="pattern-repeat"
          type="number"
          min="0"
          step="0.5"
          value={settings.patternRepeatIn}
          onChange={(e) => onUpdate({ patternRepeatIn: e.target.value })}
          className="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500/40"
        />
        <p className="text-[10px] text-slate-400 mt-1">0 for no repeat</p>
      </div>
      <div>
        <label htmlFor="wp-waste" className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1.5">
          Waste %
        </label>
        <input
          id="wp-waste"
          type="number"
          min="0"
          max="50"
          step="1"
          value={settings.wastePercent}
          onChange={(e) => onUpdate({ wastePercent: e.target.value })}
          className="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500/40"
        />
      </div>
      <div>
        <label htmlFor="wp-doors" className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1.5">
          Doors (−20 sq ft)
        </label>
        <input
          id="wp-doors"
          type="number"
          min="0"
          step="1"
          value={settings.doors}
          onChange={(e) => onUpdate({ doors: e.target.value })}
          className="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500/40"
        />
      </div>
      <div>
        <label htmlFor="wp-windows" className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1.5">
          Windows (−15 sq ft)
        </label>
        <input
          id="wp-windows"
          type="number"
          min="0"
          step="1"
          value={settings.windows}
          onChange={(e) => onUpdate({ windows: e.target.value })}
          className="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500/40"
        />
      </div>
      <div>
        <label htmlFor="price-roll" className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1.5">
          Price / roll <span className="font-normal">(optional)</span>
        </label>
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">$</span>
          <input
            id="price-roll"
            type="number"
            min="0"
            step="0.01"
            value={settings.pricePerRoll}
            onChange={(e) => onUpdate({ pricePerRoll: e.target.value })}
            placeholder="0"
            className="w-full pl-7 pr-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500/40"
          />
        </div>
      </div>
    </div>
  );
}
