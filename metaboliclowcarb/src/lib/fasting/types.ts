export type FastingMode = 'water-only' | 'assisted';

export type FastingGoalHours = 16 | 18 | 24 | 36 | 48 | 72;

export type CycleProfile = 'female-cycling' | 'female-postmenopause' | 'male';

export interface FastingClockState {
  startTime: number | null;
  isRunning: boolean;
  mode: FastingMode;
  goalHours: FastingGoalHours;
  cycleProfile: CycleProfile;
  /** Optional Dr. Boz ratio inputs (mg/dL and mmol/L) */
  glucoseMgDl: number | null;
  ketonesMmol: number | null;
}

export interface DoctorNote {
  doctor: 'Dr. Mindy Pelz' | 'Dr. Eric Westman' | 'Dr. Boz';
  note: string;
}

export interface FastingPhase {
  id: string;
  minHours: number;
  maxHours: number | null;
  label: string;
  shortLabel: string;
  description: string;
  doctorNotes: DoctorNote[];
}

export interface FastingMilestone {
  hours: number;
  label: string;
  reached: boolean;
}

export interface FastingClockResult {
  elapsedMs: number;
  elapsedHours: number;
  remainingMs: number | null;
  goalReached: boolean;
  currentPhase: FastingPhase;
  nextPhase: FastingPhase | null;
  phaseProgress: number;
  milestones: FastingMilestone[];
  cycleGuidance: string | null;
  safetyAlerts: string[];
  assistedTips: string[];
  bozRatio: number | null;
  bozInterpretation: string | null;
}
