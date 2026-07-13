import type { FastingPhase } from './types';

/**
 * Metabolic fasting phases synthesized from Dr. Mindy Pelz (Fast Like a Girl),
 * Dr. Eric Westman (keto + IF), and Dr. Boz (insulin resistance + ketosis).
 * Hour thresholds are educational guides, not medical prescriptions.
 */
export const FASTING_PHASES: FastingPhase[] = [
  {
    id: 'fed',
    minHours: 0,
    maxHours: 12,
    label: 'Fed state',
    shortLabel: '0–12h',
    description:
      'Your body is still processing your last meal. Insulin is elevated and glycogen stores are being used. This is normal — fasting benefits accumulate after longer windows.',
    doctorNotes: [
      {
        doctor: 'Dr. Eric Westman',
        note: 'On a well-formulated low-carb diet, hunger often drops within a day or two, making natural intermittent fasting easier without forcing it.',
      },
    ],
  },
  {
    id: 'fat-burning',
    minHours: 12,
    maxHours: 17,
    label: 'Fat burning & metabolic shift',
    shortLabel: '12–16h',
    description:
      'Liver glycogen is depleting and your body begins shifting toward fat as fuel. This is the entry zone for intermittent fasting — most people start here with 13–16 hour windows.',
    doctorNotes: [
      {
        doctor: 'Dr. Mindy Pelz',
        note: '13–15 hour fasts are the baseline for metabolic flexibility. Accessible to nearly everyone and enough to activate basic fat burning.',
      },
      {
        doctor: 'Dr. Eric Westman',
        note: 'When carbs stay low, you can skip meals when not hungry — eat when hungry, stop when full. Time-restricted eating follows naturally.',
      },
    ],
  },
  {
    id: 'autophagy',
    minHours: 17,
    maxHours: 24,
    label: 'Autophagy window',
    shortLabel: '17–24h',
    description:
      'Around 17 hours, cellular autophagy — your body\'s cleanup and recycling process — becomes more active. At 24 hours, many practitioners describe a "gut reset" effect.',
    doctorNotes: [
      {
        doctor: 'Dr. Mindy Pelz',
        note: '17+ hours activates autophagy (Nobel Prize-winning research by Dr. Yoshinori Ohsumi). A 24-hour fast once weekly is her "gut reset" — gentle autophagy without overwhelming your system.',
      },
      {
        doctor: 'Dr. Boz',
        note: 'A Dr. Boz Ratio under 80 suggests moderate ketosis; under 40 points toward deeper therapeutic ketosis and autophagy-friendly metabolism.',
      },
    ],
  },
  {
    id: 'gut-reset',
    minHours: 24,
    maxHours: 36,
    label: 'Deeper autophagy & gut reset',
    shortLabel: '24–36h',
    description:
      'Beyond 24 hours, autophagy and stem-cell-related repair pathways deepen. Ketone production typically rises. Electrolytes and hydration become critical.',
    doctorNotes: [
      {
        doctor: 'Dr. Mindy Pelz',
        note: '24–36 hour fasts can be done quarterly or a few times per year for a deeper cellular clean-out — especially post-menopause when hormonal cycling is less of a factor.',
      },
      {
        doctor: 'Dr. Eric Westman',
        note: 'Extended fasts beyond 24 hours carry risks including electrolyte imbalance and refeeding syndrome. Discuss with your provider, especially on blood pressure or diabetes medications.',
      },
    ],
  },
  {
    id: 'fat-burner-extended',
    minHours: 36,
    maxHours: 48,
    label: 'Extended fat-burner fast',
    shortLabel: '36–48h',
    description:
      'Forces deeper glycogen depletion and sustained ketosis. Dr. Mindy uses this range for weight-loss plateaus; Dr. Boz emphasizes insulin must be low enough first.',
    doctorNotes: [
      {
        doctor: 'Dr. Mindy Pelz',
        note: 'A 36-hour fast can help bust weight-loss plateaus when shorter fasts stop working — best aligned with "power phases" of the menstrual cycle for women.',
      },
      {
        doctor: 'Dr. Boz',
        note: 'If glucose stays in the hundreds after 48+ hours of fasting, severe insulin resistance may be blocking fat burning. Stabilize with low-carb eating before pushing longer fasts.',
      },
    ],
  },
  {
    id: 'extended-reset',
    minHours: 48,
    maxHours: 72,
    label: 'Extended metabolic reset',
    shortLabel: '48–72h',
    description:
      'Multi-day water or assisted fasts used occasionally for deeper metabolic resets. Requires careful electrolyte management and medical awareness.',
    doctorNotes: [
      {
        doctor: 'Dr. Mindy Pelz',
        note: 'Power phases (cycle days 1–10 and 16–19) can support longer 48–72 hour fasts for women who are cycling. Avoid extended fasts during the nurture phase before your period.',
      },
      {
        doctor: 'Dr. Boz',
        note: 'Salt and water are your best friends during extended fasts. If it takes many days to reach ketosis, you may not be metabolically ready — build with low-carb eating first.',
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
    doctorNotes: [
      {
        doctor: 'Dr. Eric Westman',
        note: 'Fasts of days or weeks have not been studied enough to show benefits outweigh risks for most people. Refeeding syndrome is a serious concern beyond 24 hours.',
      },
      {
        doctor: 'Dr. Boz',
        note: 'Extended fasting without adequate metabolic preparation can push the body toward muscle breakdown instead of fat burning when insulin remains elevated.',
      },
    ],
  },
];

export const FASTING_MILESTONES = [
  { hours: 12, label: 'Metabolic shift begins' },
  { hours: 16, label: 'Classic 16:8 complete' },
  { hours: 17, label: 'Autophagy threshold (Mindy)' },
  { hours: 24, label: 'Gut reset fast (Mindy)' },
  { hours: 36, label: 'Fat-burner fast (Mindy)' },
  { hours: 48, label: 'Extended reset begins' },
  { hours: 72, label: 'Maximum guided extended fast' },
];

export const GOAL_OPTIONS = [
  { hours: 16 as const, label: '16 hours', description: 'Classic intermittent fasting (16:8)' },
  { hours: 18 as const, label: '18 hours', description: 'Slightly longer IF window' },
  { hours: 24 as const, label: '24 hours', description: 'Gut reset / autophagy fast' },
  { hours: 36 as const, label: '36 hours', description: 'Fat-burner extended fast' },
  { hours: 48 as const, label: '48 hours', description: 'Two-day metabolic reset' },
  { hours: 72 as const, label: '72 hours', description: 'Three-day extended reset' },
];
