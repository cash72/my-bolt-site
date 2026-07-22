import type { NextStepLink } from '../components/SessionDeepener';

/** Post-results links to raise pages/session for AdSense. */
export const CALCULATOR_NEXT_STEPS: NextStepLink[] = [
  {
    "to": "/flooring-cost-estimator",
    "label": "Flooring cost estimator",
    "hint": "Material + install $/sq ft"
  },
  {
    "to": "/how-many-flooring-boxes",
    "label": "How many flooring boxes?",
    "hint": "Box-count shopping list"
  },
  {
    "to": "/guides/diy-flooring-installation-roadmap",
    "label": "DIY flooring installation roadmap",
    "hint": "Acclimate → cut → install"
  }
];
