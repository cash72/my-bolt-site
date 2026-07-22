import type { NextStepLink } from '../components/SessionDeepener';

/** Post-results links to raise pages/session for AdSense. */
export const CALCULATOR_NEXT_STEPS: NextStepLink[] = [
  {
    to: '/mulch-cost-estimator',
    label: 'Mulch cost estimator',
    hint: 'Bulk yards vs bags',
  },
  {
    to: '/sod-calculator',
    label: 'Sod calculator',
    hint: 'Rolls and pallets for lawns',
  },
  {
    to: '/guides/mulch-bed-project-from-scratch',
    label: 'Mulch bed project from scratch',
    hint: 'Edge → weed → spread workflow',
  },
];
