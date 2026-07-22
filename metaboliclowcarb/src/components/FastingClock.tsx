import { Play, Square, RotateCcw } from 'lucide-react';
import { useFastingClock, type UseFastingClockOptions } from '../hooks/useFastingClock';
import FastingClockResults, { FastingGuidance } from './FastingClockResults';
import ToolGuide from './ToolGuide';
import FieldHint from './FieldHint';
import { GOAL_OPTIONS } from '../lib/fasting/phases';
import { cycleProfileLabel, modeLabel } from '../lib/fasting/calculate';
import BreakFastGuidePanel from './BreakFastGuide';
import AdSlot from './AdSlot';
import SessionDeepener from './SessionDeepener';
import { CALCULATOR_NEXT_STEPS } from '../lib/sessionNextSteps';
import { shouldShowBreakGuide } from '../lib/fasting/breakFast';
import type { CycleProfile, FastingGoalHours, FastingMode } from '../lib/fasting/types';

const inputClass =
  'w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/40';

const FASTING_STEPS = [
  'Choose water-only or assisted fasting, pick your goal hours, and set your profile for personalized guidance.',
  'Tap Start fast when you finish your last bite. When you reach your goal, we show how to break the fast with meal ideas.',
  'Follow doctor-sourced tips for electrolytes, cycle timing, and when to break your fast safely.',
];

interface FastingClockProps extends UseFastingClockOptions {
  heading?: string;
  subheading?: string;
}

export default function FastingClock({
  heading = 'Fasting Clock',
  subheading = 'Track water-only and assisted fasts beyond 16 hours with guidance from Dr. Mindy Pelz, Dr. Eric Westman, and Dr. Boz.',
  defaultGoal,
  defaultMode,
}: FastingClockProps) {
  const clock = useFastingClock({ defaultGoal, defaultMode });
  const { state, result, showBreakGuide, completedFastHours } = clock;

  const breakGuideHours = completedFastHours ?? result.elapsedHours;
  const showBreakPanel = shouldShowBreakGuide(
    state.isRunning,
    result.goalReached,
    showBreakGuide,
    result.elapsedHours
  );

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2">{heading}</h1>
        <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">{subheading}</p>
      </div>

      <ToolGuide steps={FASTING_STEPS} />

      <div className="grid lg:grid-cols-5 gap-8">
        <div className="lg:col-span-3 space-y-5">
          {!state.isRunning ? (
            <>
              <fieldset className="space-y-3">
                <legend className="text-sm font-semibold text-slate-800 dark:text-slate-200">Fasting type</legend>
                <div className="grid sm:grid-cols-2 gap-3">
                  {(['assisted', 'water-only'] as FastingMode[]).map((mode) => (
                    <label
                      key={mode}
                      className={`flex flex-col p-3 rounded-lg border cursor-pointer transition-colors ${
                        state.mode === mode
                          ? 'border-teal-500 bg-teal-50 dark:bg-teal-950/30 ring-2 ring-teal-500/30'
                          : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                      }`}
                    >
                      <input
                        type="radio"
                        name="fasting-mode"
                        className="sr-only"
                        checked={state.mode === mode}
                        onChange={() => clock.setMode(mode)}
                      />
                      <span className="text-sm font-medium text-slate-800 dark:text-slate-200">{modeLabel(mode)}</span>
                      <span className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                        {mode === 'water-only'
                          ? 'Plain water only — strictest. Best for shorter fasts.'
                          : 'Water + electrolytes, bouillon, black coffee/tea (Dr. Westman & Boz).'}
                      </span>
                    </label>
                  ))}
                </div>
              </fieldset>

              <fieldset className="space-y-3">
                <legend className="text-sm font-semibold text-slate-800 dark:text-slate-200">Goal duration</legend>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {GOAL_OPTIONS.map((opt) => (
                    <button
                      key={opt.hours}
                      type="button"
                      onClick={() => clock.setGoalHours(opt.hours as FastingGoalHours)}
                      className={`px-3 py-2.5 rounded-lg border text-left transition-colors ${
                        state.goalHours === opt.hours
                          ? 'border-teal-500 bg-teal-600 text-white'
                          : 'border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-teal-300'
                      }`}
                    >
                      <span className="block text-sm font-medium">{opt.label}</span>
                      <span
                        className={`block text-xs mt-0.5 ${
                          state.goalHours === opt.hours ? 'text-teal-100' : 'text-slate-500 dark:text-slate-500'
                        }`}
                      >
                        {opt.description}
                      </span>
                    </button>
                  ))}
                </div>
              </fieldset>

              <label className="block">
                <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">Profile (for cycle guidance)</span>
                <select
                  className={`${inputClass} mt-1.5`}
                  value={state.cycleProfile}
                  onChange={(e) => clock.setCycleProfile(e.target.value as CycleProfile)}
                >
                  <option value="female-cycling">{cycleProfileLabel('female-cycling')}</option>
                  <option value="female-postmenopause">{cycleProfileLabel('female-postmenopause')}</option>
                  <option value="male">{cycleProfileLabel('male')}</option>
                </select>
                <FieldHint>Dr. Mindy&apos;s cycle-based guidance applies to cycling women. Men and post-menopause skip cycle timing.</FieldHint>
              </label>

              <div className="rounded-lg border border-slate-200 dark:border-slate-800 p-4 space-y-3">
                <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                  Optional: Dr. Boz Ratio (glucose ÷ ketones)
                </p>
                <div className="grid sm:grid-cols-2 gap-3">
                  <label className="block">
                    <span className="text-xs font-medium text-slate-500 dark:text-slate-400">Glucose (mg/dL)</span>
                    <input
                      type="number"
                      min="0"
                      placeholder="e.g. 95"
                      className={`${inputClass} mt-1.5`}
                      value={state.glucoseMgDl ?? ''}
                      onChange={(e) =>
                        clock.setGlucose(e.target.value ? Number(e.target.value) : null)
                      }
                    />
                  </label>
                  <label className="block">
                    <span className="text-xs font-medium text-slate-500 dark:text-slate-400">Ketones (mmol/L)</span>
                    <input
                      type="number"
                      min="0"
                      step="0.1"
                      placeholder="e.g. 1.2"
                      className={`${inputClass} mt-1.5`}
                      value={state.ketonesMmol ?? ''}
                      onChange={(e) =>
                        clock.setKetones(e.target.value ? Number(e.target.value) : null)
                      }
                    />
                  </label>
                </div>
                <FieldHint>Track metabolic progress during your fast. Target under 80 for ketosis; under 40 for deeper benefits (Dr. Boz).</FieldHint>
              </div>

              <button
                type="button"
                onClick={clock.start}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-teal-600 hover:bg-teal-700 text-white font-medium transition-colors"
              >
                <Play className="w-5 h-5" aria-hidden="true" />
                Start fast
              </button>

              <BreakFastGuidePanel elapsedHours={0} goalHours={state.goalHours} />
            </>
          ) : (
            <>
              <div className="flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={clock.end}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-900 dark:bg-slate-700 dark:hover:bg-slate-600 text-white font-medium transition-colors"
                >
                  <Square className="w-4 h-4" aria-hidden="true" />
                  End fast
                </button>
                <button
                  type="button"
                  onClick={clock.reset}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 font-medium transition-colors"
                >
                  <RotateCcw className="w-4 h-4" aria-hidden="true" />
                  Reset
                </button>
              </div>

              <div className="text-sm text-slate-600 dark:text-slate-400 space-y-1">
                <p>
                  <strong className="font-medium text-slate-800 dark:text-slate-200">Mode:</strong>{' '}
                  {modeLabel(state.mode)}
                </p>
                <p>
                  <strong className="font-medium text-slate-800 dark:text-slate-200">Goal:</strong> {state.goalHours}{' '}
                  hours
                </p>
                <p>
                  <strong className="font-medium text-slate-800 dark:text-slate-200">Profile:</strong>{' '}
                  {cycleProfileLabel(state.cycleProfile)}
                </p>
              </div>

              <FastingGuidance result={result} isRunning={state.isRunning} />

              {showBreakPanel && (
                <BreakFastGuidePanel
                  elapsedHours={breakGuideHours}
                  goalHours={state.goalHours}
                  prominent={result.goalReached || showBreakGuide}
                />
              )}
            </>
          )}

          {!state.isRunning && showBreakGuide && (
            <BreakFastGuidePanel
              elapsedHours={breakGuideHours}
              goalHours={state.goalHours}
              prominent
            />
          )}

          <p className="text-xs text-slate-500 dark:text-slate-400 rounded-lg bg-slate-100 dark:bg-slate-900/60 px-3 py-2">
            <strong className="font-medium text-slate-700 dark:text-slate-300">Not medical advice.</strong> Guidance
            synthesizes public teachings from Dr. Mindy Pelz, Dr. Eric Westman, and Dr. Boz. Talk to your doctor before
            fasting — especially on diabetes, blood pressure, or kidney medications.
          </p>
        </div>

        <div className="lg:col-span-2">
          <p className="text-xs font-medium text-teal-700 dark:text-teal-400 mb-2 lg:sr-only">Fasting timer</p>
          <div className="lg:sticky lg:top-20 space-y-6">
            <FastingClockResults result={result} isRunning={state.isRunning} goalHours={state.goalHours} />
            {(state.isRunning || result.elapsedHours > 0) && (
              <>
                <SessionDeepener links={CALCULATOR_NEXT_STEPS} />
                <AdSlot placement="results" className="my-0" />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
