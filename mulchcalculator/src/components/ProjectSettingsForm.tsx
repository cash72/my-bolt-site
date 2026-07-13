import type { MaterialType, ProjectSettings } from '../lib/mulch/types';

interface ProjectSettingsFormProps {
  settings: ProjectSettings;
  onMaterialTypeChange: (materialType: MaterialType) => void;
  onUpdate: (patch: Partial<ProjectSettings>) => void;
}

const MATERIAL_TYPES: { value: MaterialType; label: string }[] = [
  { value: 'mulch', label: 'Mulch' },
  { value: 'gravel', label: 'Gravel' },
  { value: 'topsoil', label: 'Topsoil' },
];

export default function ProjectSettingsForm({
  settings,
  onMaterialTypeChange,
  onUpdate,
}: ProjectSettingsFormProps) {
  return (
    <div className="space-y-4">
      <fieldset>
        <legend className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Material</legend>
        <div className="grid grid-cols-3 gap-2">
          {MATERIAL_TYPES.map(({ value, label }) => (
            <button
              key={value}
              type="button"
              onClick={() => onMaterialTypeChange(value)}
              className={`px-3 py-2.5 rounded-lg text-sm font-medium border transition-colors ${
                settings.materialType === value
                  ? 'bg-emerald-600 text-white border-emerald-600'
                  : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-emerald-300'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </fieldset>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div>
          <label htmlFor="depth-in" className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1.5">
            Depth (inches)
          </label>
          <input
            id="depth-in"
            type="number"
            min="1"
            max="12"
            step="0.5"
            value={settings.depthIn}
            onChange={(e) => onUpdate({ depthIn: e.target.value })}
            className="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
          />
          <p className="text-[10px] text-slate-400 mt-1">Default 3" for mulch beds</p>
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
            className="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
          />
          <p className="text-[10px] text-slate-400 mt-1">Default 10% for settling</p>
        </div>
        <div>
          <label htmlFor="price-cu-yd" className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1.5">
            Price / cubic yard <span className="font-normal">(optional)</span>
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">$</span>
            <input
              id="price-cu-yd"
              type="number"
              min="0"
              step="0.01"
              value={settings.pricePerCubicYard}
              onChange={(e) => onUpdate({ pricePerCubicYard: e.target.value })}
              placeholder="0"
              className="w-full pl-7 pr-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
