import type { PaintType, ProjectSettings, SurfaceType } from '../lib/paint/types';
import { isStainType } from '../lib/paint/types';

interface ProjectSettingsFormProps {
  settings: ProjectSettings;
  onPaintTypeChange: (paintType: PaintType) => void;
  onUpdate: (patch: Partial<ProjectSettings>) => void;
}

const PAINT_TYPES: { value: PaintType; label: string }[] = [
  { value: 'interior', label: 'Interior' },
  { value: 'primer', label: 'Primer' },
  { value: 'exterior', label: 'Exterior' },
];

const STAIN_TYPES: { value: PaintType; label: string }[] = [
  { value: 'fence_stain', label: 'Fence stain' },
  { value: 'house_stain', label: 'House stain' },
  { value: 'deck_stain', label: 'Deck stain' },
];

const INTERIOR_SURFACES: { value: SurfaceType; label: string }[] = [
  { value: 'walls', label: 'Walls' },
  { value: 'ceiling', label: 'Ceiling' },
  { value: 'both', label: 'Both' },
  { value: 'trim', label: 'Cabinets & trim' },
];

export default function ProjectSettingsForm({
  settings,
  onPaintTypeChange,
  onUpdate,
}: ProjectSettingsFormProps) {
  const stainLocked = isStainType(settings.paintType);
  const showBothSides = settings.surface === 'fence' || settings.surface === 'trim';
  const isTrim = settings.surface === 'trim';
  const showOpenings =
    !stainLocked && !isTrim && settings.surface !== 'fence' && settings.surface !== 'deck';

  return (
    <div className="space-y-4">
      <fieldset>
        <legend className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Paint</legend>
        <div className="grid grid-cols-3 gap-2">
          {PAINT_TYPES.map(({ value, label }) => (
            <button
              key={value}
              type="button"
              onClick={() => onPaintTypeChange(value)}
              className={`px-3 py-2.5 rounded-lg text-sm font-medium border transition-colors ${
                settings.paintType === value
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-blue-300'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </fieldset>

      <fieldset>
        <legend className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Stain</legend>
        <div className="grid grid-cols-3 gap-2">
          {STAIN_TYPES.map(({ value, label }) => (
            <button
              key={value}
              type="button"
              onClick={() => onPaintTypeChange(value)}
              className={`px-3 py-2.5 rounded-lg text-sm font-medium border transition-colors ${
                settings.paintType === value
                  ? 'bg-amber-700 text-white border-amber-700'
                  : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-amber-400'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </fieldset>

      {!stainLocked && (
        <fieldset>
          <legend className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Surface</legend>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {INTERIOR_SURFACES.map(({ value, label }) => (
              <button
                key={value}
                type="button"
                onClick={() =>
                  onUpdate({
                    surface: value,
                    ...(value === 'trim'
                      ? { wastePercent: '15', bothSides: true, doors: '0', windows: '0' }
                      : {}),
                  })
                }
                className={`px-3 py-2.5 rounded-lg text-sm font-medium border transition-colors ${
                  settings.surface === value
                    ? 'bg-blue-600 text-white border-blue-600'
                    : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-blue-300'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </fieldset>
      )}

      {isTrim && (
        <div className="grid sm:grid-cols-2 gap-4 p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50">
          <p className="sm:col-span-2 text-xs text-slate-500 dark:text-slate-400">
            Count cabinet doors and drawer fronts (~5 sq ft each), interior doors (~20 sq ft per face), and
            baseboard/casing linear feet × height.
          </p>
          <div>
            <label htmlFor="cabinet-doors" className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1.5">
              Cabinet doors / drawers
            </label>
            <input
              id="cabinet-doors"
              type="number"
              min="0"
              step="1"
              value={settings.cabinetDoors}
              onChange={(e) => onUpdate({ cabinetDoors: e.target.value })}
              className="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/40"
            />
          </div>
          <div>
            <label htmlFor="trim-doors" className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1.5">
              Interior doors to paint
            </label>
            <input
              id="trim-doors"
              type="number"
              min="0"
              step="1"
              value={settings.trimDoors}
              onChange={(e) => onUpdate({ trimDoors: e.target.value })}
              className="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/40"
            />
          </div>
          <div>
            <label htmlFor="trim-lf" className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1.5">
              Trim linear feet
            </label>
            <input
              id="trim-lf"
              type="number"
              min="0"
              step="1"
              value={settings.trimLinearFt}
              onChange={(e) => onUpdate({ trimLinearFt: e.target.value })}
              className="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/40"
            />
          </div>
          <div>
            <label htmlFor="trim-height" className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1.5">
              Trim height (inches)
            </label>
            <input
              id="trim-height"
              type="number"
              min="0"
              step="0.25"
              value={settings.trimHeightIn}
              onChange={(e) => onUpdate({ trimHeightIn: e.target.value })}
              className="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/40"
            />
            <p className="text-[10px] text-slate-400 mt-1">Default 3.5″ for baseboards</p>
          </div>
        </div>
      )}

      {stainLocked && (
        <p className="text-xs text-slate-500 dark:text-slate-400">
          {settings.paintType === 'fence_stain' &&
            'Enter fence run length × panel height. Rough wood absorbs more — default coverage is 150 sq ft/gallon.'}
          {settings.paintType === 'house_stain' &&
            'Enter building footprint (length × width) and wall height. Default coverage is 200 sq ft/gallon for siding.'}
          {settings.paintType === 'deck_stain' &&
            'Enter deck length × width. Horizontal boards often need 175 sq ft/gallon — check your stain label.'}
        </p>
      )}

      {showBothSides && (
        <fieldset>
          <legend className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
            {isTrim ? 'Door faces' : 'Fence faces'}
          </legend>
          <div className="flex gap-2">
            {[
              { value: false, label: isTrim ? 'One face' : 'One side' },
              { value: true, label: isTrim ? 'Both faces' : 'Both sides' },
            ].map(({ value, label }) => (
              <button
                key={label}
                type="button"
                onClick={() => onUpdate({ bothSides: value })}
                className={`flex-1 px-3 py-2.5 rounded-lg text-sm font-medium border transition-colors ${
                  settings.bothSides === value
                    ? isTrim
                      ? 'bg-blue-600 text-white border-blue-600'
                      : 'bg-amber-700 text-white border-amber-700'
                    : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-blue-300'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </fieldset>
      )}

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div>
          <label htmlFor="coats" className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1.5">
            Coats
          </label>
          <input
            id="coats"
            type="number"
            min="1"
            max="5"
            step="1"
            value={settings.coats}
            onChange={(e) => onUpdate({ coats: e.target.value })}
            className="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/40"
          />
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
            className="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/40"
          />
          <p className="text-[10px] text-slate-400 mt-1">
            {isTrim ? 'Default 15% for cutting in' : 'Default 10% for touch-ups'}
          </p>
        </div>
        <div>
          <label htmlFor="sqft-gallon" className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1.5">
            Sq ft / gallon
          </label>
          <input
            id="sqft-gallon"
            type="number"
            min="0"
            step="1"
            value={settings.sqFtPerGallon}
            onChange={(e) => onUpdate({ sqFtPerGallon: e.target.value })}
            className="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/40"
          />
        </div>
        {showOpenings && (
          <>
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
                className="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/40"
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
                className="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/40"
              />
            </div>
          </>
        )}
        <div>
          <label htmlFor="price-gallon" className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1.5">
            Price / gallon <span className="font-normal">(optional)</span>
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">$</span>
            <input
              id="price-gallon"
              type="number"
              min="0"
              step="0.01"
              value={settings.pricePerGallon}
              onChange={(e) => onUpdate({ pricePerGallon: e.target.value })}
              placeholder="0"
              className="w-full pl-7 pr-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/40"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
