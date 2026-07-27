import type { FastingPhase } from './types';

/**
 * Educational fasting stage labels keyed to elapsed clock time.
 * These are broad planning windows — not proof that a biological process occurred.
 */
export const FASTING_PHASES: FastingPhase[] = [
  {
    id: 'fed',
    minHours: 0,
    maxHours: 12,
    label: 'Fed state',
    shortLabel: '0–12h',
    description:
      'Your body is still processing your last meal. Insulin is typically elevated and glycogen stores are being used. Fasting-related changes, if any, usually accumulate over longer windows.',
    contextNotes: [
      {
        label: 'Context',
        note: 'On a lower-carb eating pattern, hunger often decreases over days, which can make time-restricted eating feel easier without forcing long fasts.',
      },
    ],
  },
  {
    id: 'metabolic-shift',
    minHours: 12,
    maxHours: 17,
    label: 'Commonly cited metabolic shift window',
    shortLabel: '12–16h',
    description:
      'Many educational materials describe 12–16 hours as a window when liver glycogen may be depleting and fat use may increase. Individual timing varies widely.',
    contextNotes: [
      {
        label: 'Limitation',
        note: 'Reaching this clock window does not confirm fat burning or metabolic flexibility in your body — only elapsed time without food.',
      },
    ],
  },
  {
    id: 'extended-if',
    minHours: 17,
    maxHours: 24,
    label: 'Extended intermittent window',
    shortLabel: '17–24h',
    description:
      'Some fasting literature discusses cellular cleanup research around roughly 17+ hours without food. Human timing is uncertain and not measurable from a timer alone.',
    contextNotes: [
      {
        label: 'Limitation',
        note: 'Autophagy and similar processes cannot be verified at home. This label marks an educational time window, not a cellular outcome.',
      },
    ],
  },
  {
    id: 'day-long',
    minHours: 24,
    maxHours: 36,
    label: 'Day-long fast window',
    shortLabel: '24–36h',
    description:
      'A full-day fast is an advanced choice for many people. Hydration, electrolyte balance, and refeeding planning become more important beyond 24 hours.',
    contextNotes: [
      {
        label: 'Safety',
        note: 'Extended fasts beyond 24 hours carry refeeding and electrolyte risks — discuss with a clinician, especially on diabetes or blood pressure medications.',
      },
    ],
  },
  {
    id: 'multi-day',
    minHours: 36,
    maxHours: 48,
    label: 'Multi-day fast window',
    shortLabel: '36–48h',
    description:
      'Fasts in this range are advanced. Responses vary by health status, medications, and prior eating pattern.',
    contextNotes: [
      {
        label: 'Safety',
        note: 'Do not continue a multi-day fast if you feel unwell. Seek medical advice before attempting fasts in this range.',
      },
    ],
  },
  {
    id: 'extended-reset',
    minHours: 48,
    maxHours: 72,
    label: 'Extended fast window',
    shortLabel: '48–72h',
    description:
      'Two- to three-day fasts are advanced and not appropriate for most people without medical supervision.',
    contextNotes: [
      {
        label: 'Safety',
        note: 'Medical supervision is strongly recommended for fasts approaching 48–72 hours, especially with metabolic conditions or medications.',
      },
    ],
  },
  {
    id: 'prolonged',
    minHours: 72,
    maxHours: null,
    label: 'Prolonged fast',
    shortLabel: '72h+',
    description:
      'Fasts beyond 72 hours are advanced and should involve medical supervision, especially if you take medications or have metabolic conditions.',
    contextNotes: [
      {
        label: 'Safety',
        note: 'Refeeding syndrome is a serious concern on prolonged fasts. End the fast and seek care if you feel chest pain, confusion, or severe weakness.',
      },
    ],
  },
];

export const FASTING_MILESTONES = [
  { hours: 12, label: '12h — commonly cited shift window' },
  { hours: 16, label: '16h — classic 16:8 complete' },
  { hours: 17, label: '17h — often-discussed extended-IF window' },
  { hours: 24, label: '24h — full-day fast' },
  { hours: 36, label: '36h — advanced multi-day window' },
  { hours: 48, label: '48h — extended fast begins' },
  { hours: 72, label: '72h — maximum guided timer goal' },
];

export const GOAL_OPTIONS = [
  { hours: 16 as const, label: '16 hours', description: 'Classic intermittent fasting (16:8)' },
  { hours: 18 as const, label: '18 hours', description: 'Slightly longer IF window' },
  { hours: 24 as const, label: '24 hours', description: 'Full-day fast' },
  { hours: 36 as const, label: '36 hours', description: 'Advanced multi-day window' },
  { hours: 48 as const, label: '48 hours', description: 'Two-day extended fast' },
  { hours: 72 as const, label: '72 hours', description: 'Three-day extended fast' },
];
