import type { NextStepLink } from '../components/SessionDeepener';

/** Post-results links to raise pages/session for AdSense. */
export const CALCULATOR_NEXT_STEPS: NextStepLink[] = [
  {
    "to": "/mulch-cost-estimator",
    "label": "Mulch cost estimator",
    "hint": "Bulk yards vs bags"
  },
  {
    "to": "/sod-calculator",
    "label": "Sod calculator",
    "hint": "Rolls and pallets for lawns"
  },
  {
    "to": "/guides/delivery-vs-bags-bulk-mulch",
    "label": "Delivery vs bags guide",
    "hint": "When bulk wins on price"
  }
];
