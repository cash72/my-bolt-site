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
    to: '/satoshi-to-usd',
    label: 'Satoshi to USD',
    hint: 'Compare fee sats to your stack',
  },
  {
    to: '/100000-satoshi-to-usd',
    label: '100k sats → USD',
    hint: 'Common stack checkpoint',
  },
  {
    to: '/1000000-satoshi-to-usd',
    label: '1M sats → USD',
    hint: '0.01 BTC milestone value',
  },
];
