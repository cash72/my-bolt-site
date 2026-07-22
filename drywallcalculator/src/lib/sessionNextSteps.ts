import type { NextStepLink } from '../components/SessionDeepener';

/** Post-results links to raise pages/session for AdSense. */
export const CALCULATOR_NEXT_STEPS: NextStepLink[] = [
  {
    to: '/drywall-cost-estimator',
    label: 'Drywall cost estimator',
    hint: 'Sheets + mud + screws',
  },
  {
    to: '/how-many-drywall-sheets',
    label: 'How many drywall sheets?',
    hint: 'Sheet-count focused tool',
  },
  {
    to: '/guides/drywall-project-from-framing-to-paint',
    label: 'Framing-to-paint project roadmap',
    hint: 'Hang → tape → finish → paint',
  },
];
