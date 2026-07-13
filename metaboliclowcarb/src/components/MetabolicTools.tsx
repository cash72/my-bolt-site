import NetCarbResults from './NetCarbResults';
import MacroResults from './MacroResults';
import ToolGuide from './ToolGuide';
import FieldHint from './FieldHint';
import AdSlot from './AdSlot';
import { useNetCarbCalc } from '../hooks/useNetCarbCalc';
import { useMacroCalc } from '../hooks/useMacroCalc';
import type { DietPlan, ToolId } from '../lib/metabolic/types';
import { planLabel } from '../lib/metabolic/calculate';

const inputClass =
  'w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/40';

const NET_CARB_STEPS = [
  'Grab the food package and find the Nutrition Facts label.',
  'Type in the numbers for one serving — use the lines shown on the label below.',
  'Your net carbs appear on the right. Change servings if you will eat more than one.',
];

const MACRO_STEPS = [
  'Pick the eating plan that fits you (keto, insulin resistance, or moderate low carb).',
  'Enter your age, sex, weight, height, and how active you are.',
  'Your daily protein, net carbs, and fat targets show on the right — use them as a simple daily guide.',
];

interface MetabolicToolsProps {
  activeTool: ToolId;
  onToolChange?: (tool: ToolId) => void;
  showTabs?: boolean;
  showHeader?: boolean;
  macroPlan?: DietPlan;
  heading?: string;
  subheading?: string;
}

export default function MetabolicTools({
  activeTool,
  onToolChange,
  showTabs = true,
  showHeader = true,
  macroPlan = 'low_carb_ir',
  heading = 'Metabolic Low Carb Calculator',
  subheading = 'Two free tools: count net carbs from any food label, or get daily macro targets for low-carb eating.',
}: MetabolicToolsProps) {
  const netCarb = useNetCarbCalc();
  const macro = useMacroCalc(macroPlan);

  return (
    <div className="space-y-6">
      {showHeader && (
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2">{heading}</h1>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">{subheading}</p>
        </div>
      )}

      {showTabs && onToolChange && (
        <div className="space-y-2">
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Choose what you need help with — you can switch anytime.
          </p>
          <div className="flex gap-2 p-1 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <button
              type="button"
              onClick={() => onToolChange('net-carb')}
              className={`flex-1 px-3 sm:px-4 py-2.5 rounded-md text-left sm:text-center transition-colors ${
                activeTool === 'net-carb'
                  ? 'bg-teal-600 text-white'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              <span className="block text-sm font-medium">Net carbs</span>
              <span
                className={`block text-xs mt-0.5 ${
                  activeTool === 'net-carb' ? 'text-teal-100' : 'text-slate-400 dark:text-slate-500'
                }`}
              >
                From a food label
              </span>
            </button>
            <button
              type="button"
              onClick={() => onToolChange('macro')}
              className={`flex-1 px-3 sm:px-4 py-2.5 rounded-md text-left sm:text-center transition-colors ${
                activeTool === 'macro'
                  ? 'bg-teal-600 text-white'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              <span className="block text-sm font-medium">Daily macros</span>
              <span
                className={`block text-xs mt-0.5 ${
                  activeTool === 'macro' ? 'text-teal-100' : 'text-slate-400 dark:text-slate-500'
                }`}
              >
                Your daily targets
              </span>
            </button>
          </div>
        </div>
      )}

      <ToolGuide steps={activeTool === 'net-carb' ? NET_CARB_STEPS : MACRO_STEPS} />

      <div className="grid lg:grid-cols-5 gap-8">
        <div className="lg:col-span-3 space-y-4">
          {activeTool === 'net-carb' ? (
            <>
              <div>
                <h2 className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                  Enter numbers from the label
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  All values are per <strong className="font-medium">one serving</strong>, exactly as printed on the
                  package.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <label className="block">
                  <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                    Total Carbohydrate (g)
                  </span>
                  <input
                    type="number"
                    min="0"
                    step="0.1"
                    placeholder="e.g. 15"
                    className={`${inputClass} mt-1.5`}
                    value={netCarb.input.totalCarbsG || ''}
                    onChange={(e) => netCarb.update('totalCarbsG', Number(e.target.value) || 0)}
                  />
                  <FieldHint>Label line: &ldquo;Total Carbohydrate&rdquo;</FieldHint>
                </label>
                <label className="block">
                  <span className="text-xs font-medium text-slate-500 dark:text-slate-400">Dietary Fiber (g)</span>
                  <input
                    type="number"
                    min="0"
                    step="0.1"
                    placeholder="e.g. 3"
                    className={`${inputClass} mt-1.5`}
                    value={netCarb.input.fiberG || ''}
                    onChange={(e) => netCarb.update('fiberG', Number(e.target.value) || 0)}
                  />
                  <FieldHint>Usually indented under Total Carbohydrate</FieldHint>
                </label>
                <label className="block">
                  <span className="text-xs font-medium text-slate-500 dark:text-slate-400">Sugar Alcohols (g)</span>
                  <input
                    type="number"
                    min="0"
                    step="0.1"
                    placeholder="0 if none"
                    className={`${inputClass} mt-1.5`}
                    value={netCarb.input.sugarAlcoholsG || ''}
                    onChange={(e) => netCarb.update('sugarAlcoholsG', Number(e.target.value) || 0)}
                  />
                  <FieldHint>Only if listed (common in sugar-free products). Otherwise leave 0.</FieldHint>
                </label>
                <label className="block">
                  <span className="text-xs font-medium text-slate-500 dark:text-slate-400">How many servings?</span>
                  <input
                    type="number"
                    min="1"
                    step="1"
                    placeholder="1"
                    className={`${inputClass} mt-1.5`}
                    value={netCarb.input.servings}
                    onChange={(e) => netCarb.update('servings', Math.max(1, Number(e.target.value) || 1))}
                  />
                  <FieldHint>Example: eating half the box with 2 servings per box → enter 1</FieldHint>
                </label>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 rounded-lg bg-slate-100 dark:bg-slate-900/60 px-3 py-2">
                <strong className="font-medium text-slate-700 dark:text-slate-300">What we calculate:</strong> net carbs
                = total carbs − fiber − sugar alcohols
              </p>
            </>
          ) : (
            <>
              <div>
                <h2 className="text-sm font-semibold text-slate-800 dark:text-slate-200">Tell us about you</h2>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Results update automatically as you fill this in. No sign-up required.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <label className="block sm:col-span-2">
                  <span className="text-xs font-medium text-slate-500 dark:text-slate-400">Which plan fits you?</span>
                  <select
                    className={`${inputClass} mt-1.5`}
                    value={macro.input.plan}
                    onChange={(e) => macro.setPlan(e.target.value as DietPlan)}
                  >
                    <option value="strict_keto">{planLabel('strict_keto')}</option>
                    <option value="low_carb_ir">{planLabel('low_carb_ir')}</option>
                    <option value="moderate_low_carb">{planLabel('moderate_low_carb')}</option>
                  </select>
                  <FieldHint>
                    Keto = strictest (20g). Insulin resistance = balanced (50g). Moderate = more flexible (100g).
                  </FieldHint>
                </label>
                <label className="block">
                  <span className="text-xs font-medium text-slate-500 dark:text-slate-400">Sex</span>
                  <select
                    className={`${inputClass} mt-1.5`}
                    value={macro.input.sex}
                    onChange={(e) => macro.update('sex', e.target.value as 'female' | 'male')}
                  >
                    <option value="female">Female</option>
                    <option value="male">Male</option>
                  </select>
                  <FieldHint>Used for calorie estimate only</FieldHint>
                </label>
                <label className="block">
                  <span className="text-xs font-medium text-slate-500 dark:text-slate-400">Age (years)</span>
                  <input
                    type="number"
                    min="1"
                    placeholder="e.g. 45"
                    className={`${inputClass} mt-1.5`}
                    value={macro.input.age}
                    onChange={(e) => macro.update('age', Number(e.target.value) || 0)}
                  />
                </label>
                <label className="block">
                  <span className="text-xs font-medium text-slate-500 dark:text-slate-400">Weight (lbs)</span>
                  <input
                    type="number"
                    min="1"
                    placeholder="e.g. 170"
                    className={`${inputClass} mt-1.5`}
                    value={macro.input.weightLbs}
                    onChange={(e) => macro.update('weightLbs', Number(e.target.value) || 0)}
                  />
                </label>
                <label className="block">
                  <span className="text-xs font-medium text-slate-500 dark:text-slate-400">Height</span>
                  <div className="flex gap-2 mt-1.5">
                    <div className="flex-1">
                      <input
                        type="number"
                        min="0"
                        placeholder="ft"
                        aria-label="Height feet"
                        className={inputClass}
                        value={macro.input.heightFt}
                        onChange={(e) => macro.update('heightFt', Number(e.target.value) || 0)}
                      />
                    </div>
                    <div className="flex-1">
                      <input
                        type="number"
                        min="0"
                        max="11"
                        placeholder="in"
                        aria-label="Height inches"
                        className={inputClass}
                        value={macro.input.heightIn}
                        onChange={(e) => macro.update('heightIn', Number(e.target.value) || 0)}
                      />
                    </div>
                  </div>
                  <FieldHint>Feet and inches — e.g. 5 ft 6 in</FieldHint>
                </label>
                <label className="block sm:col-span-2">
                  <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                    How active are you most days?
                  </span>
                  <select
                    className={`${inputClass} mt-1.5`}
                    value={macro.input.activity}
                    onChange={(e) => macro.update('activity', e.target.value as typeof macro.input.activity)}
                  >
                    <option value="sedentary">Mostly sitting (desk job, little exercise)</option>
                    <option value="light">Light exercise 1–3 days per week</option>
                    <option value="moderate">Moderate exercise 3–5 days per week</option>
                    <option value="active">Hard exercise 6–7 days per week</option>
                    <option value="very_active">Very hard exercise or physical job</option>
                  </select>
                  <FieldHint>Pick the option closest to your typical week — not your best week.</FieldHint>
                </label>
              </div>
            </>
          )}
        </div>

        <div className="lg:col-span-2">
          <p className="text-xs font-medium text-teal-700 dark:text-teal-400 mb-2 lg:sr-only">
            Your results (updates as you type)
          </p>
          <div className="lg:sticky lg:top-20 space-y-6">
            {activeTool === 'net-carb' ? (
              <NetCarbResults result={netCarb.result} />
            ) : (
              <MacroResults result={macro.result} />
            )}
            <AdSlot placement="sidebar" className="my-0 hidden lg:block" />
            <AdSlot placement="content" className="my-0 lg:hidden" />
          </div>
        </div>
      </div>
    </div>
  );
}
