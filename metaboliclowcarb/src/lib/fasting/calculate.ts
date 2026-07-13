import { FASTING_MILESTONES, FASTING_PHASES } from './phases';
import type {
  CycleProfile,
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
      'Above 80 — still glucose-dominant (Dr. Boz). More low-carb eating or longer fasting may help shift into fat burning.';
  } else if (ratio >= 40) {
    interpretation =
      '40–80 — moderate ketosis. Good for general health and weight management (Dr. Boz).';
  } else {
    interpretation =
      'Under 40 — deeper ketosis associated with autophagy and therapeutic benefits (Dr. Boz).';
  }
  return { ratio, interpretation };
}

export function getCycleGuidance(profile: CycleProfile, elapsedHours: number): string | null {
  if (profile === 'male') return null;

  if (profile === 'female-postmenopause') {
    if (elapsedHours > 24) {
      return 'Post-menopause: Dr. Mindy notes you can explore 24–36+ hour fasts more freely without cycling hormones — still listen to your body and stay hydrated.';
    }
    return 'Post-menopause: longer fasts (24h+) are generally easier to schedule without cycle timing (Dr. Mindy).';
  }

  // female-cycling — general guidance without day-of-cycle input
  if (elapsedHours >= 17 && elapsedHours <= 24) {
    return 'Dr. Mindy: During ovulation (Manifestation Phase, days 11–15), keep fasts to 15 hours max — longer autophagy fasts can cause detox symptoms when estrogen peaks.';
  }
  if (elapsedHours > 15 && elapsedHours < 17) {
    return 'Approaching autophagy territory (17h+). If you are in days 11–15 of your cycle, Dr. Mindy recommends stopping at 15 hours.';
  }
  if (elapsedHours >= 36) {
    return 'Extended fasts (36–72h) align best with Power Phase 1 (days 1–10) or Power Phase 2 (days 16–19). Avoid during the Nurture Phase before your period (Dr. Mindy).';
  }
  if (elapsedHours >= 17) {
    return 'Power phases (days 1–10 and 16–19) support longer autophagy fasts. Match aggressive fasting to those windows (Dr. Mindy).';
  }
  return 'Dr. Mindy\'s Fasting Cycle: baseline 13–15h fasts work in any phase. Save 17h+ autophagy and 36h+ fat-burner fasts for power phases.';
}

export function getSafetyAlerts(
  mode: FastingMode,
  elapsedHours: number,
  goalHours: number,
  profile: CycleProfile
): string[] {
  const alerts: string[] = [];

  if (elapsedHours >= 24 || goalHours >= 24) {
    alerts.push(
      'Dr. Westman: Extended fasts beyond 24 hours carry refeeding syndrome and electrolyte risks — work with a healthcare provider, especially on diabetes or blood pressure medications.'
    );
  }

  if (elapsedHours >= 48) {
    alerts.push(
      'Dr. Boz: If fasting glucose stays above ~100 mg/dL after 48+ hours, insulin resistance may still be blocking fat burning. Consider stabilizing with low-carb eating before continuing.'
    );
  }

  if (elapsedHours >= 72) {
    alerts.push(
      'Fasts beyond 72 hours require medical supervision. Break your fast gradually with protein, healthy fat, and fiber (Dr. Mindy).'
    );
  }

  if (profile === 'female-cycling' && elapsedHours > 15 && elapsedHours < 36) {
    alerts.push(
      'Dr. Mindy: If you are in days 11–15 (Manifestation Phase), limit fasts to 15 hours to avoid double-detox symptoms during hormone peaks.'
    );
  }

  if (mode === 'water-only' && elapsedHours >= 16) {
    alerts.push(
      'Strict water-only fasts beyond 16 hours increase electrolyte needs. Consider switching to assisted mode with salt, magnesium, and potassium (Dr. Westman & Dr. Boz).'
    );
  }

  return alerts;
}

export function getAssistedTips(mode: FastingMode, elapsedHours: number): string[] {
  if (mode === 'water-only' && elapsedHours < 16) {
    return ['Plain water is fine for shorter fasts. Stay hydrated when thirsty (Dr. Westman).'];
  }

  const tips: string[] = [];

  if (mode === 'assisted' || elapsedHours >= 16) {
    tips.push('Dr. Westman: A cup of bouillon or broth daily supplies sodium and helps prevent headaches during low-carb fasting.');
    tips.push('Dr. Boz: Salt + water is the foundation — plain salt in water can reduce fasting side effects.');
    tips.push('Dr. Westman: Generously salt food when you eat; during fasts use sodium, potassium (leafy greens when refeeding), and magnesium.');
  }

  if (elapsedHours >= 24) {
    tips.push('Assisted fasting allows: water, plain electrolytes, black coffee or plain tea (no cream or sweeteners during strict fasts — Dr. Boz on 16:8).');
    tips.push('Dr. Mindy: Break extended fasts with protein, healthy fat, and fiber — not a carb-heavy meal.');
  }

  if (mode === 'water-only') {
    tips.push('Water-only mode: no calories, no broth, no supplements with calories. Switch to assisted if you feel weak or dizzy.');
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
    cycleGuidance: getCycleGuidance(state.cycleProfile, elapsedHours),
    safetyAlerts: getSafetyAlerts(state.mode, elapsedHours, state.goalHours, state.cycleProfile),
    assistedTips: getAssistedTips(state.mode, elapsedHours),
    bozRatio: ratio,
    bozInterpretation: interpretation,
  };
}

export function modeLabel(mode: FastingMode): string {
  return mode === 'water-only' ? 'Water only' : 'Assisted (electrolytes)';
}

export function cycleProfileLabel(profile: CycleProfile): string {
  switch (profile) {
    case 'female-cycling':
      return 'Female (cycling)';
    case 'female-postmenopause':
      return 'Female (post-menopause)';
    case 'male':
      return 'Male';
  }
}
