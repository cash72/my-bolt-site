import type { NextStepLink } from '../components/SessionDeepener';

/** Post-results links to raise pages/session for AdSense. */
export const CALCULATOR_NEXT_STEPS: NextStepLink[] = [
  {
    "to": "/ac-cost-to-run-calculator",
    "label": "AC cost-to-run calculator",
    "hint": "SEER and kWh estimate"
  },
  {
    "to": "/mini-split-calculator",
    "label": "Mini-split calculator",
    "hint": "BTU sizing for ductless"
  },
  {
    "to": "/guides/btu-per-square-foot-explained",
    "label": "BTU per square foot guide",
    "hint": "Rule-of-thumb vs calculator"
  }
];
