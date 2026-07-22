import type { NextStepLink } from '../components/SessionDeepener';

/** End-of-page next steps for tool reviews and comparisons. */
export const TOOL_NEXT_STEPS: NextStepLink[] = [
  {
    to: '/pricing',
    label: 'Software pricing matrix',
    hint: 'Side-by-side starting prices',
  },
  {
    to: '/compare/jobber-vs-housecall-pro-landscaping',
    label: 'Jobber vs Housecall Pro',
    hint: 'Most common head-to-head',
  },
  {
    to: '/guides/how-to-choose-lawn-care-software',
    label: 'How to choose lawn care software',
    hint: 'Crew-size buying guide',
  },
];

export const COMPARE_NEXT_STEPS: NextStepLink[] = [
  {
    to: '/pricing',
    label: 'Software pricing matrix',
    hint: 'All vendors in one table',
  },
  {
    to: '/tools',
    label: 'Browse all tools',
    hint: 'Full directory with filters',
  },
  {
    to: '/guides/how-to-choose-lawn-care-software',
    label: 'How to choose lawn care software',
    hint: 'Decision framework by crew size',
  },
];
