import type { NextStepLink } from '../components/SessionDeepener';

/** Post-results links to raise pages/session for AdSense. */
export const CALCULATOR_NEXT_STEPS: NextStepLink[] = [
  {
    to: '/bitcoin-fee-calculator',
    label: 'Bitcoin fee calculator',
    hint: 'Estimate sat/vB network fees',
  },
  {
    to: '/btc-to-usd',
    label: 'BTC to USD converter',
    hint: 'Live Bitcoin price hub',
  },
  {
    to: '/guides/what-is-a-satoshi',
    label: 'What is a satoshi?',
    hint: 'Unit basics for beginners',
  },
];

export const FEE_NEXT_STEPS: NextStepLink[] = [
  {
    to: '/btc-to-usd',
    label: 'BTC to USD',
    hint: 'Convert the fee amount to fiat',
  },
  {
    to: '/usd-to-btc',
    label: 'USD to BTC',
    hint: 'Reverse conversion hub',
  },
  {
    to: '/guides/what-is-a-satoshi',
    label: 'What is a satoshi?',
    hint: 'Understand the unit you just priced',
  },
];
