import type { NextStepLink } from '../components/SessionDeepener';

/** Post-results links to raise pages/session for AdSense. */
export const CALCULATOR_NEXT_STEPS: NextStepLink[] = [
  {
    to: '/ac-cost-to-run-calculator',
    label: 'AC cost-to-run calculator',
    hint: 'SEER and kWh estimate',
  },
  {
    to: '/mini-split-calculator',
    label: 'Mini-split calculator',
    hint: 'BTU sizing for ductless',
  },
  {
    to: '/guides/diy-mini-split-project-roadmap',
    label: 'DIY mini-split project roadmap',
    hint: 'Size → wire → mount sequence',
  },
];
