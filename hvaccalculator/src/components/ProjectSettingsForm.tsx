import type { ApplicationType, ClimateZone, InsulationLevel, ProjectSettings, SunExposure } from '../lib/hvac/types';
import { APPLICATION_LABEL } from '../lib/hvac/types';

interface ProjectSettingsFormProps {
  settings: ProjectSettings;
  onApplicationChange: (applicationType: ApplicationType) => void;
  onUpdate: (patch: Partial<ProjectSettings>) => void;
}

const APPLICATIONS: ApplicationType[] = [
  'standard_room',
  'bedroom',
  'living_room',
  'tiny_home',
  'rv',
  'she_shed',
  'cottage',
  'garage_workshop',
  'sunroom',
];

const INSULATION: { value: InsulationLevel; label: string }[] = [
  { value: 'good', label: 'Good' },
  { value: 'average', label: 'Average' },
  { value: 'poor', label: 'Poor' },
  { value: 'none', label: 'None' },
];

const SUN: { value: SunExposure; label: string }[] = [
  { value: 'shaded', label: 'Shaded' },
  { value: 'average', label: 'Average' },
  { value: 'sunny', label: 'Sunny' },
];

const CLIMATE: { value: ClimateZone; label: string }[] = [
  { value: 'mild', label: 'Mild' },
  { value: 'moderate', label: 'Moderate' },
  { value: 'hot_humid', label: 'Hot / humid' },
  { value: 'cold', label: 'Cold' },
];

export default function ProjectSettingsForm({
  settings,
  onApplicationChange,
  onUpdate,
}: ProjectSettingsFormProps) {
  return (
    <div className="space-y-4">
      <fieldset>
        <legend className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Application</legend>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {APPLICATIONS.map((value) => (
            <button
              key={value}
              type="button"
              onClick={() => onApplicationChange(value)}
              className={`px-3 py-2.5 rounded-lg text-sm font-medium border transition-colors text-left ${
                settings.applicationType === value
                  ? 'bg-sky-600 text-white border-sky-600'
                  : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-sky-300'
              }`}
            >
              {APPLICATION_LABEL[value]}
            </button>
          ))}
        </div>
      </fieldset>

      <fieldset>
        <legend className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Insulation</legend>
        <div className="flex flex-wrap gap-2">
          {INSULATION.map(({ value, label }) => (
            <button
              key={value}
              type="button"
              onClick={() => onUpdate({ insulation: value })}
              className={`px-3 py-2 rounded-lg text-sm font-medium border transition-colors ${
                settings.insulation === value
                  ? 'bg-sky-600 text-white border-sky-600'
                  : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-sky-300'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </fieldset>

      <div className="grid sm:grid-cols-2 gap-4">
        <fieldset>
          <legend className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Sun exposure</legend>
          <div className="flex gap-2">
            {SUN.map(({ value, label }) => (
              <button
                key={value}
                type="button"
                onClick={() => onUpdate({ sunExposure: value })}
                className={`flex-1 px-2 py-2 rounded-lg text-xs sm:text-sm font-medium border transition-colors ${
                  settings.sunExposure === value
                    ? 'bg-sky-600 text-white border-sky-600'
                    : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-sky-300'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </fieldset>

        <fieldset>
          <legend className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Climate</legend>
          <select
            value={settings.climateZone}
            onChange={(e) => onUpdate({ climateZone: e.target.value as ClimateZone })}
            className="w-full px-3 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/40"
          >
            {CLIMATE.map(({ value, label }) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </fieldset>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="occupants" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
            Occupants
          </label>
          <input
            id="occupants"
            type="number"
            min="1"
            max="12"
            value={settings.occupants}
            onChange={(e) => onUpdate({ occupants: e.target.value })}
            className="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/40"
          />
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <label className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300 cursor-pointer">
          <input
            type="checkbox"
            checked={settings.hasKitchenLoad}
            onChange={(e) => onUpdate({ hasKitchenLoad: e.target.checked })}
            className="rounded border-slate-300 text-sky-600 focus:ring-sky-500"
          />
          Kitchen or cooking heat load (+4,000 BTU)
        </label>
        <label className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300 cursor-pointer">
          <input
            type="checkbox"
            checked={settings.isHighCeiling}
            onChange={(e) => onUpdate({ isHighCeiling: e.target.checked })}
            className="rounded border-slate-300 text-sky-600 focus:ring-sky-500"
          />
          Vaulted or high ceiling (+10% load)
        </label>
      </div>
    </div>
  );
}
