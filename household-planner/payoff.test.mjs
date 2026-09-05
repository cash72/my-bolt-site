import { simulate, parseMoney, toMonthly } from './payoff.mjs';
import assert from 'node:assert/strict';

const debts = [
  { id: 'a', name: 'Store', balance: 250, apr: 22, min: 25, order: 1 },
  { id: 'b', name: 'Card', balance: 500, apr: 19.99, min: 26, order: 2 },
  { id: 'c', name: 'Auto', balance: 2500, apr: 6.5, min: 110, order: 3 },
];

const budget = 25 + 26 + 110 + 100;
const snow = simulate({ debts, monthlyBudget: budget, method: 'snowball' });
const ava = simulate({ debts, monthlyBudget: budget, method: 'avalanche' });

assert.equal(snow.ok, true);
assert.equal(ava.ok, true);
assert.ok(ava.totalInterest <= snow.totalInterest + 1, 'avalanche should not cost more interest');
assert.equal(snow.firstWinName, 'Store');
assert.ok(snow.months > 0 && snow.months < 60);

const monthly = toMonthly(500, 'biweekly');
assert.ok(Math.abs(monthly - ((500 * 26) / 12)) < 0.001);
assert.equal(parseMoney('$1,200.50'), 1200.5);

console.log('payoff engine ok', {
  snowballMonths: snow.months,
  avalancheMonths: ava.months,
  snowInterest: Math.round(snow.totalInterest),
  avaInterest: Math.round(ava.totalInterest),
});
