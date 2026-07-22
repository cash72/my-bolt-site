import type { NextStepLink } from '../components/SessionDeepener';

/** Post-results links to raise pages/session for AdSense. */
export const CALCULATOR_NEXT_STEPS: NextStepLink[] = [
  {
    to: '/tdee-calorie-calculator',
    label: 'TDEE calorie calculator',
    hint: 'Daily burn + deficit targets',
  },
  {
    to: '/keto-macro-calculator',
    label: 'Keto macro calculator',
    hint: 'Protein, fat, and net carbs',
  },
  {
    to: '/guides/getting-started-keto-low-carb',
    label: 'Getting started with keto',
    hint: 'First two weeks on low carb',
  },
];

export const TDEE_NEXT_STEPS: NextStepLink[] = [
  {
    to: '/weight-loss-macro-calculator',
    label: 'Weight-loss macro calculator',
    hint: 'Turn TDEE into a cut plan',
  },
  {
    to: '/keto-macro-calculator',
    label: 'Keto macro calculator',
    hint: 'Split calories into macros',
  },
  {
    to: '/guides/protein-on-keto-and-low-carb',
    label: 'Protein on keto guide',
    hint: 'Hit protein without blowing carbs',
  },
];
