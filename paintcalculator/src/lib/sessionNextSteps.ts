import type { NextStepLink } from '../components/SessionDeepener';

/** Post-results links to raise pages/session for AdSense. */
export const CALCULATOR_NEXT_STEPS: NextStepLink[] = [
  {
    to: '/cabinet-trim-paint-calculator',
    label: 'Cabinet & trim paint calculator',
    hint: 'Doors, cabinets, and linear trim',
  },
  {
    to: '/paint-cost-estimator',
    label: 'Paint cost estimator',
    hint: 'Gallons × store price (CAD)',
  },
  {
    to: '/guides/interior-painting-project-guide',
    label: 'Interior painting project guide',
    hint: 'Prep → prime → paint workflow',
  },
];
