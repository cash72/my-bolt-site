import { FASTING_MILESTONES, FASTING_PHASES } from './phases';
import type {
  FastingClockResult,
  FastingClockState,
  FastingMode,
  FastingPhase,
} from './types';

export function formatDuration(ms: number): { hours: number; minutes: number; seconds: number; display: string } {
  const totalSeconds = Math.max(0, Math.floor(ms / 1000));
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  const pad = (n: number) => String(n).padStart(2, '0');
  return {
    hours,
    minutes,
    seconds,
    display: `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`,
  };
}

export function getPhaseForHours(elapsedHours: number): FastingPhase {
  for (let i = FASTING_PHASES.length - 1; i >= 0; i--) {
    if (elapsedHours >= FASTING_PHASES[i].minHours) {
      return FASTING_PHASES[i];
    }
  }
  return FASTING_PHASES[0];
}

export function getNextPhase(current: FastingPhase): FastingPhase | null {
  const idx = FASTING_PHASES.findIndex((p) => p.id === current.id);
  return idx >= 0 && idx < FASTING_PHASES.length - 1 ? FASTING_PHASES[idx + 1] : null;
}

export function getPhaseProgress(elapsedHours: number, phase: FastingPhase): number {
  const max = phase.maxHours ?? phase.minHours + 24;
  const span = max - phase.minHours;
  if (span <= 0) return 100;
  return Math.min(100, Math.max(0, ((elapsedHours - phase.minHours) / span) * 100));
}

export function calcBozRatio(glucoseMgDl: number | null, ketonesMmol: number | null): {
  ratio: number | null;
  interpretation: string | null;
} {
  if (!glucoseMgDl || glucoseMgDl <= 0 || !ketonesMmol || ketonesMmol <= 0) {
    return { ratio: null, interpretation: null };
  }
  const ratio = Math.round((glucoseMgDl / ketonesMmol) * 10) / 10;
  let interpretation: string;
  if (ratio > 80) {
    interpretation =
      'Above 80 — higher ratio (more glucose relative to ketones). Branded materials sometimes cite this band; it is not a clinical cutoff.';
  } else if (ratio >= 40) {
    interpretation =
      '40–80 — mid-range ratio. A single reading does not diagnose health status or metabolic state.';
  } else {
    interpretation =
      'Below 40 — lower ratio (less glucose relative to ketones). Not validated as a treatment target or proof of autophagy.';
  }
  return { ratio, interpretation };
}

export function getSafetyAlerts(
  mode: FastingMode,
  elapsedHours: number,
  goalHours: number
): string[] {
  const alerts: string[] = [];

  if (elapsedHours >= 24 || goalHours >= 24) {
    alerts.push(
      'Extended fasts beyond 24 hours carry refeeding syndrome and electrolyte risks. Work with a healthcare provider — especially on diabetes or blood pressure medications. Do not adjust medication on your own.'
    );
  }

  if (elapsedHours >= 48) {
    alerts.push(
      'Multi-day fasts are advanced. Stop and seek medical advice if you feel unwell, dizzy, or confused.'
    );
  }

  if (elapsedHours >= 72) {
    alerts.push(
      'Fasts beyond 72 hours require medical supervision. Break your fast gradually with small portions of protein, healthy fat, and gentle fiber.'
    );
  }

  if (mode === 'water-only' && elapsedHours >= 16) {
    alerts.push(
      'Strict water-only fasts beyond 16 hours increase electrolyte-depletion risk for many people. Consider assisted mode or ending the fast if you feel unwell.'
    );
  }

  return alerts;
}

export function getAssistedTips(mode: FastingMode, elapsedHours: number): string[] {
  if (mode === 'water-only' && elapsedHours < 16) {
    return ['Plain water is fine for shorter fasts. Drink when thirsty.'];
  }

  const tips: string[] = [];

  if (mode === 'assisted' || elapsedHours >= 16) {
    tips.push(
      'Assisted mode allows plain water, zero-calorie electrolyte drinks without sugar, bouillon/broth, and black coffee or plain tea without calories.'
    );
    tips.push(
      'If you feel headache, dizziness, or weakness, consider ending the fast and discuss fasting safety with a clinician — especially on medications.'
    );
  }

  if (elapsedHours >= 24) {
    tips.push(
      'Plan your refeed before you start: small protein-forward portions, eaten slowly. See our break-fast guide when you end the timer.'
    );
  }

  if (mode === 'water-only') {
    tips.push('Water-only mode: no calories, no broth, no supplements with calories. Switch to assisted or end the fast if you feel weak or dizzy.');
  }

  return tips;
}

export function calcFastingClock(state: FastingClockState, now = Date.now()): FastingClockResult {
  const elapsedMs = state.isRunning && state.startTime ? Math.max(0, now - state.startTime) : 0;
  const elapsedHours = elapsedMs / (1000 * 60 * 60);
  const goalMs = state.goalHours * 60 * 60 * 1000;
  const remainingMs = state.isRunning && state.startTime ? Math.max(0, goalMs - elapsedMs) : null;
  const goalReached = elapsedMs >= goalMs;

  const currentPhase = getPhaseForHours(elapsedHours);
  const nextPhase = getNextPhase(currentPhase);
  const phaseProgress = getPhaseProgress(elapsedHours, currentPhase);

  const milestones = FASTING_MILESTONES.map((m) => ({
    ...m,
    reached: elapsedHours >= m.hours,
  }));

  const { ratio, interpretation } = calcBozRatio(state.glucoseMgDl, state.ketonesMmol);

  return {
    elapsedMs,
    elapsedHours,
    remainingMs,
    goalReached,
    currentPhase,
    nextPhase,
    phaseProgress,
    milestones,
    cycleGuidance: null,
    safetyAlerts: getSafetyAlerts(state.mode, elapsedHours, state.goalHours),
    assistedTips: getAssistedTips(state.mode, elapsedHours),
    bozRatio: ratio,
    bozInterpretation: interpretation,
  };
}

export function modeLabel(mode: FastingMode): string {
  return mode === 'water-only' ? 'Water only' : 'Assisted (electrolytes allowed)';
}
