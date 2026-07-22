import type { MaterialType, ProjectSettings } from '../lib/flooring/types';

interface ProjectSettingsFormProps {
  settings: ProjectSettings;
  onMaterialChange: (material: MaterialType) => void;
  onUpdate: (patch: Partial<ProjectSettings>) => void;
}

export default function ProjectSettingsForm({
  settings,
  onMaterialChange,
  onUpdate,
}: ProjectSettingsFormProps) {
  return (
    <div className="space-y-4">
      <fieldset>
        <legend className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Material</legend>
        <div className="flex gap-2">
          {(['laminate', 'tile', 'carpet'] as const).map((material) => (
            <button
              key={material}
              type="button"
              onClick={() => onMaterialChange(material)}
              className={`flex-1 px-4 py-2.5 rounded-lg text-sm font-medium border transition-colors ${
                settings.material === material
                  ? 'bg-emerald-600 text-white border-emerald-600'
                  : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-emerald-300'
              }`}
            >
              {material === 'laminate' ? 'Laminate' : material === 'carpet' ? 'Carpet' : 'Tile'}
            </button>
          ))}
        </div>
      </fieldset>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
            className="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
          />
          <p className="text-[10px] text-slate-400 mt-1">
            Default {settings.material === 'tile' ? '15%' : '10%'}
          </p>
        </div>
        <div>
          <label htmlFor="sqft-box" className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1.5">
            Sq ft / box
          </label>
          <input
            id="sqft-box"
            type="number"
            min="0"
            step="0.1"
            value={settings.sqFtPerBox}
            onChange={(e) => onUpdate({ sqFtPerBox: e.target.value })}
            className="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
          />
        </div>
        <div>
          <label htmlFor="price-box" className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1.5">
            Price / box <span className="font-normal">(optional)</span>
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">$</span>
            <input
              id="price-box"
              type="number"
              min="0"
              step="0.01"
              value={settings.pricePerBox}
              onChange={(e) => onUpdate({ pricePerBox: e.target.value })}
              placeholder="0"
              className="w-full pl-7 pr-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
            />
          </div>
        </div>
        <div>
          <label htmlFor="price-sqft" className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1.5">
            Material $ / sq ft <span className="font-normal">(optional)</span>
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">$</span>
            <input
              id="price-sqft"
              type="number"
              min="0"
              step="0.01"
              value={settings.materialPricePerSqFt}
              onChange={(e) => onUpdate({ materialPricePerSqFt: e.target.value })}
              placeholder="0"
              className="w-full pl-7 pr-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
            />
          </div>
          <p className="text-[10px] text-slate-400 mt-1">Overrides box price when set</p>
        </div>
        <div>
          <label htmlFor="install-sqft" className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1.5">
            Install $ / sq ft <span className="font-normal">(optional)</span>
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">$</span>
            <input
              id="install-sqft"
              type="number"
              min="0"
              step="0.01"
              value={settings.installPricePerSqFt}
              onChange={(e) => onUpdate({ installPricePerSqFt: e.target.value })}
              placeholder="0"
              className="w-full pl-7 pr-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
