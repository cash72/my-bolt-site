import { AlertTriangle, Check, Clock, Droplets, Flame, Shield } from 'lucide-react';
import { formatDuration } from '../lib/fasting/calculate';
import type { FastingClockResult } from '../lib/fasting/types';

interface FastingClockResultsProps {
  result: FastingClockResult;
  isRunning: boolean;
  goalHours: number;
}

export default function FastingClockResults({ result, isRunning, goalHours }: FastingClockResultsProps) {
  const elapsed = formatDuration(result.elapsedMs);
  const remaining = result.remainingMs != null ? formatDuration(result.remainingMs) : null;

  return (
    <div className="p-5 rounded-xl border border-teal-200 dark:border-teal-900/50 bg-teal-50/50 dark:bg-teal-950/20 space-y-5 animate-slide-up">
      <div className="text-center">
        <p className="text-xs font-medium text-teal-700 dark:text-teal-400 uppercase tracking-wide mb-1">
          {isRunning ? 'Fasting' : 'Ready to start'}
        </p>
        <p
          className="text-4xl sm:text-5xl font-mono font-bold tabular-nums text-slate-900 dark:text-slate-100"
          aria-live="polite"
          aria-atomic="true"
        >
          {isRunning ? elapsed.display : '00:00:00'}
        </p>
        {isRunning && remaining && !result.goalReached && (
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
            {remaining.display} until {goalHours}h goal
          </p>
        )}
        {result.goalReached && isRunning && (
          <p className="text-sm font-medium text-teal-700 dark:text-teal-400 mt-2">
            <Check className="w-4 h-4 inline mr-1 -mt-0.5" aria-hidden="true" />
            Goal reached —{' '}
            <a href="#break-fast-guide" className="underline hover:text-teal-800 dark:hover:text-teal-300">
              see how to break your fast
            </a>
          </p>
        )}
      </div>

      {isRunning && (
        <>
          <div>
            <div className="flex items-center justify-between text-xs mb-1.5">
              <span className="font-medium text-slate-700 dark:text-slate-300 flex items-center gap-1">
                <Flame className="w-3.5 h-3.5 text-teal-600" aria-hidden="true" />
                {result.currentPhase.label}
              </span>
              <span className="text-slate-500">{result.currentPhase.shortLabel}</span>
            </div>
            <div className="h-2 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
              <div
                className="h-full rounded-full bg-teal-600 transition-all duration-1000"
                style={{ width: `${result.phaseProgress}%` }}
                role="progressbar"
                aria-valuenow={Math.round(result.phaseProgress)}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label="Current fasting phase progress"
              />
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
              {result.currentPhase.description}
            </p>
          </div>

          {result.nextPhase && (
            <p className="text-xs text-slate-500 dark:text-slate-400">
              <Clock className="w-3.5 h-3.5 inline mr-1 -mt-0.5" aria-hidden="true" />
              Next: <strong className="font-medium text-slate-700 dark:text-slate-300">{result.nextPhase.label}</strong>{' '}
              at {result.nextPhase.minHours}h
            </p>
          )}

          {result.bozRatio != null && (
            <div className="rounded-lg bg-white/60 dark:bg-slate-900/40 px-3 py-2 border border-teal-100 dark:border-teal-900/30">
              <p className="text-xs font-medium text-slate-700 dark:text-slate-300">
                Dr. Boz Ratio: <span className="text-teal-700 dark:text-teal-400">{result.bozRatio}</span>
              </p>
              {result.bozInterpretation && (
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">{result.bozInterpretation}</p>
              )}
            </div>
          )}
        </>
      )}

      {!isRunning && (
        <p className="text-sm text-slate-600 dark:text-slate-400 text-center">
          Set your goal and tap <strong className="font-medium">Start fast</strong>. Your timer persists if you close
          the tab.
        </p>
      )}
    </div>
  );
}

interface FastingGuidanceProps {
  result: FastingClockResult;
  isRunning: boolean;
}

export function FastingGuidance({ result, isRunning }: FastingGuidanceProps) {
  if (!isRunning) return null;

  return (
    <div className="space-y-4 mt-6">
      {result.currentPhase.doctorNotes.length > 0 && (
        <section aria-labelledby="doctor-notes">
          <h3 id="doctor-notes" className="text-sm font-semibold text-slate-800 dark:text-slate-200 mb-2">
            What experts say at this stage
          </h3>
          <ul className="space-y-2">
            {result.currentPhase.doctorNotes.map((note) => (
              <li
                key={`${note.doctor}-${note.note.slice(0, 30)}`}
                className="text-xs rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 px-3 py-2"
              >
                <span className="font-medium text-teal-700 dark:text-teal-400">{note.doctor}:</span>{' '}
                <span className="text-slate-600 dark:text-slate-400">{note.note}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {result.cycleGuidance && (
        <section
          className="rounded-lg border border-violet-200 dark:border-violet-900/40 bg-violet-50/50 dark:bg-violet-950/20 px-3 py-2"
          aria-label="Cycle guidance"
        >
          <p className="text-xs text-violet-800 dark:text-violet-300">{result.cycleGuidance}</p>
        </section>
      )}

      {result.assistedTips.length > 0 && (
        <section aria-labelledby="assisted-tips">
          <h3 id="assisted-tips" className="text-sm font-semibold text-slate-800 dark:text-slate-200 mb-2 flex items-center gap-1">
            <Droplets className="w-4 h-4 text-teal-600" aria-hidden="true" />
            Hydration & assisted fasting tips
          </h3>
          <ul className="space-y-1.5">
            {result.assistedTips.map((tip) => (
              <li key={tip} className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                • {tip}
              </li>
            ))}
          </ul>
        </section>
      )}

      {result.safetyAlerts.length > 0 && (
        <section aria-labelledby="safety-alerts">
          <h3 id="safety-alerts" className="text-sm font-semibold text-amber-800 dark:text-amber-300 mb-2 flex items-center gap-1">
            <Shield className="w-4 h-4" aria-hidden="true" />
            Safety reminders
          </h3>
          <ul className="space-y-2">
            {result.safetyAlerts.map((alert) => (
              <li
                key={alert}
                className="text-xs rounded-lg border border-amber-200 dark:border-amber-900/40 bg-amber-50/50 dark:bg-amber-950/20 px-3 py-2 text-amber-900 dark:text-amber-200 flex gap-2"
              >
                <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" aria-hidden="true" />
                <span>{alert}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      <section aria-labelledby="milestones">
        <h3 id="milestones" className="text-sm font-semibold text-slate-800 dark:text-slate-200 mb-2">
          Milestones
        </h3>
        <ul className="grid grid-cols-2 gap-2">
          {result.milestones.map((m) => (
            <li
              key={m.hours}
              className={`text-xs px-2 py-1.5 rounded-md border ${
                m.reached
                  ? 'border-teal-300 dark:border-teal-800 bg-teal-50 dark:bg-teal-950/30 text-teal-800 dark:text-teal-300'
                  : 'border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-500'
              }`}
            >
              <span className="font-mono font-medium">{m.hours}h</span> — {m.label}
              {m.reached && <Check className="w-3 h-3 inline ml-1" aria-hidden="true" />}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
