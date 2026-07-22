import {
  CURRENCY_LABELS,
  CURRENCY_NAMES,
  CURRENCY_SLUG_NAMES,
  formatBtcDisplay,
  formatSatoshiAmount,
  type FiatCurrency,
} from './conversion';
import type { LandingEditorial, LandingEditorialSection } from './landingEditorial';
import type { LandingPageDef } from './landingPages';

const SATOSHI_PER_BTC = 100_000_000;

type AmountTier = 'dust' | 'lightning' | 'small' | 'milestone' | 'serious' | 'major';

function satoshiTier(amount: number): AmountTier {
  if (amount <= 10) return 'dust';
  if (amount <= 1_000) return 'lightning';
  if (amount <= 10_000) return 'small';
  if (amount <= 100_000) return 'milestone';
  if (amount <= 1_000_000) return 'serious';
  return 'major';
}

function fiatTier(amount: number): 'micro' | 'starter' | 'common' | 'lump' {
  if (amount <= 1) return 'micro';
  if (amount <= 10) return 'starter';
  if (amount <= 100) return 'common';
  return 'lump';
}

const CURRENCY_CONTEXT: Record<
  FiatCurrency,
  { region: string; onRamp: string; hubPath: string; fiat100Path: string }
> = {
  usd: {
    region: 'the United States',
    onRamp: 'US exchanges and apps like Strike, Cash App, or Coinbase',
    hubPath: '/usd-to-satoshi',
    fiat100Path: '/100-dollars-in-satoshi',
  },
  eur: {
    region: 'the Eurozone',
    onRamp: 'EU-friendly platforms such as Relai, Bitvavo, or Kraken with SEPA transfers',
    hubPath: '/eur-to-satoshi',
    fiat100Path: '/100-euros-in-satoshi',
  },
  gbp: {
    region: 'the United Kingdom',
    onRamp: 'FCA-registered exchanges like Coinbase UK, Kraken, or Revolut',
    hubPath: '/gbp-to-satoshi',
    fiat100Path: '/100-pounds-in-satoshi',
  },
  cad: {
    region: 'Canada',
    onRamp: 'Canadian exchanges such as Bull Bitcoin, Newton, or Kraken with Interac e-Transfer',
    hubPath: '/cad-to-satoshi',
    fiat100Path: '/100-cad-in-satoshi',
  },
};

function btcFraction(amount: number): string {
  const btc = amount / SATOSHI_PER_BTC;
  if (btc >= 0.01) return `${btc} BTC`;
  if (btc >= 0.001) return `0.${String(Math.round(btc * 1000)).padStart(3, '0')} BTC`;
  return `${btc.toFixed(8).replace(/\.?0+$/, '')} BTC`;
}

function satoshiTierIntro(amount: number, label: string, currency: FiatCurrency): string {
  const formatted = formatSatoshiAmount(amount);
  const tier = satoshiTier(amount);
  const ctx = CURRENCY_CONTEXT[currency];

  switch (tier) {
    case 'dust':
      return `${formatted} Satoshis is among the smallest practical Bitcoin units people look up — useful for understanding how tiny fractions of BTC translate into ${label}. The live calculator below shows the current ${label} value at today's Bitcoin price.`;
    case 'lightning':
      return `${formatted} Satoshis (${btcFraction(amount)}) sits in the Lightning Network sweet spot — common for tips, zaps, and small wallet experiments. See the live ${label} equivalent below using today's Bitcoin price.`;
    case 'small':
      return `${formatted} Satoshis is a round figure for everyday Bitcoin payments and budgeting in ${label}. This page shows the live ${label} value for exactly ${formatted} sats at the current market price.`;
    case 'milestone':
      return `${formatted} Satoshis (${btcFraction(amount)}) is a stacking milestone many holders track in ${ctx.region}. Use the live calculator below to see how many ${label} that equals at today's Bitcoin price.`;
    case 'serious':
      return `${formatted} Satoshis equals ${btcFraction(amount)} — a meaningful stack where self-custody and withdrawal planning start to matter. The live ${label} value below updates every 60 seconds from CoinGecko.`;
    case 'major':
      return `${formatted} Satoshis is ${btcFraction(amount)} — a major Bitcoin position for most holders. This page shows the live ${label} equivalent at the current market price, with context on what that stack size means.`;
  }
}

function satoshiTierSections(amount: number, currency: FiatCurrency): LandingEditorialSection[] {
  const label = CURRENCY_LABELS[currency];
  const formatted = formatSatoshiAmount(amount);
  const tier = satoshiTier(amount);
  const ctx = CURRENCY_CONTEXT[currency];
  const hubSlug = `satoshi-to-${currency}`;

  const sections: LandingEditorialSection[] = [];

  if (tier === 'dust' || tier === 'lightning') {
    sections.push({
      heading: `Why look up ${formatted} sats in ${label}?`,
      paragraphs: [
        tier === 'dust'
          ? `Single-digit and double-digit sat amounts help new users grasp Bitcoin's divisibility. At today's BTC price, even 1 sat has a non-zero ${label} value — proof that you do not need a whole coin to participate.`
          : `Lightning wallets, Nostr zaps, and tipping apps often quote amounts between 100 and 10,000 sats. Converting ${formatted} sats to ${label} puts micro-payments in familiar fiat terms without mental math.`,
        `Wallets in ${ctx.region} may display balances in sats even when you think in ${label}. This page bridges both units with a live price feed.`,
      ],
    });
    sections.push({
      heading: 'On-chain fees vs Lightning for tiny amounts',
      paragraphs: [
        `Sending very small sat amounts on Bitcoin's base layer can cost more in network fees than the payment itself during busy blocks. The Lightning Network exists partly to make sub-dollar Bitcoin transfers economical.`,
        `For experimental balances, a custodial Lightning wallet is fine. Move larger stacks to self-custody once the ${label} value would hurt to lose — see our [storage guide](/guides/how-to-store-bitcoin-safely).`,
      ],
    });
  } else if (tier === 'small') {
    sections.push({
      heading: `Everyday ${label} context for ${formatted} sats`,
      paragraphs: [
        `${formatted} sats is large enough to compare against a lunch, transit fare, or streaming subscription in ${label} — helpful when someone paid you in Bitcoin and you want a quick fiat reference.`,
        `Bitcoin trades 24/7 without market close, so the ${label} label on ${formatted} sats shifts with volatility. Refresh this page before making spending decisions.`,
      ],
    });
    sections.push({
      heading: 'Stacking perspective',
      paragraphs: [
        `Small sat counts add up. Regular buys through ${ctx.onRamp} compound into milestones like [50,000 sats](/50000-satoshi-to-${currency}) or [100,000 sats](/100000-satoshi-to-${currency}).`,
        `Track progress in sats (fixed supply) and review ${label} occasionally for budgeting. Our [stacking sats guide](/guides/stacking-sats-dca) explains repeatable DCA in fiat while holding in sats.`,
      ],
    });
  } else if (tier === 'milestone') {
    sections.push({
      heading: `Why ${formatted} sats is a checkpoint`,
      paragraphs: [
        `${formatted} sats (${btcFraction(amount)}) is a round number stackers celebrate — easier to share than quoting many decimal places of BTC.`,
        `At this level, many holders in ${ctx.region} start researching hardware wallets and seed phrase backup. The ${label} figure helps you decide when withdrawal fees justify moving off-exchange.`,
      ],
    });
    sections.push({
      heading: 'Nearby milestones to compare',
      paragraphs: [
        amount === 50_000
          ? `Halfway to [100,000 sats](/100000-satoshi-to-${currency}); five times [10,000 sats](/10000-satoshi-to-${currency}). Each has a dedicated live page.`
          : amount === 100_000
            ? `Half of [50,000 sats](/50000-satoshi-to-${currency}); one-fifth of [500,000 sats](/500000-satoshi-to-${currency}). Bookmark the milestones that match your DCA plan.`
            : `Compare against other round amounts on our [${label} satoshi hub](${hubSlug.startsWith('/') ? hubSlug : `/${hubSlug}`}) or flip to [${label} → sats](${ctx.hubPath}).`,
        `To add more sats with ${label}, see [100 ${label} in satoshi](${ctx.fiat100Path}) or use the reverse converter on the homepage.`,
      ],
    });
  } else {
    sections.push({
      heading: `What ${btcFraction(amount)} means in practice`,
      paragraphs: [
        `${formatted} sats is no longer a casual experiment for most people — it is a financial position that deserves cold storage, backup discipline, and clear records.`,
        `The ${label} value shown above is a spot estimate. Exchanges in ${ctx.region} may quote slightly different prices after spread and fees.`,
      ],
    });
    sections.push({
      heading: 'Security and next steps',
      paragraphs: [
        `At this stack size, hardware wallet cost is negligible compared to holdings. Our [self-custody basics guide](/guides/bitcoin-self-custody-basics) covers habits beyond picking a device.`,
        amount >= 10_000_000
          ? `Stacks near 0.1 BTC may trigger tax reporting in your jurisdiction when sold. SatoshiCalc provides price estimates only — not tax advice. Keep acquisition records from ${ctx.onRamp}.`
          : `Plan a test withdrawal before moving the full amount. One wrong address character is irreversible on Bitcoin.`,
      ],
    });
  }

  sections.push({
    heading: `More ${label} conversion tools`,
    paragraphs: [
      `Use the [Satoshi → ${label} hub](/${hubSlug}) for any custom amount, or browse [all conversions](/conversions) for EUR, GBP, CAD, and fixed-amount pages.`,
      `New to sats? Start with [what is a Satoshi](/guides/what-is-a-satoshi) or the [${label} to Satoshi hub](${ctx.hubPath}) to plan your next buy.`,
    ],
  });

  return sections;
}

function fiatAmountIntro(amount: number, currency: FiatCurrency): string {
  const label = CURRENCY_LABELS[currency];
  const slugName = CURRENCY_SLUG_NAMES[currency];
  const tier = fiatTier(amount);
  const ctx = CURRENCY_CONTEXT[currency];

  switch (tier) {
    case 'micro':
      return `${amount} ${label} buys a small number of Satoshis at today's Bitcoin price — useful for testing wallets and understanding how fiat maps to sats in ${ctx.region}.`;
    case 'starter':
      return `${amount} ${label} is a common first-purchase size on ${ctx.onRamp}. This page shows exactly how many sats that equals at the live BTC/${label} price.`;
    case 'common':
      return `${amount} ${label} is one of the most searched fiat amounts for Bitcoin buyers in ${ctx.region}. See the live satoshi equivalent below — updated every 60 seconds.`;
    case 'lump':
      return `${amount} ${label} converts to a substantial satoshi stack at today's Bitcoin price. This page calculates the exact sats equivalent for a ${amount}-${slugName} buy using live market data.`;
  }
}

function fiatAmountSections(amount: number, currency: FiatCurrency): LandingEditorialSection[] {
  const label = CURRENCY_LABELS[currency];
  const name = CURRENCY_NAMES[currency];
  const tier = fiatTier(amount);
  const ctx = CURRENCY_CONTEXT[currency];
  const hubSlug = `${currency}-to-satoshi`;

  const sections: LandingEditorialSection[] = [
    {
      heading: `Why ${amount} ${label} is a popular lookup`,
      paragraphs:
        tier === 'lump'
          ? [
              `A ${amount} ${name.toLowerCase()} buy is a lump sum — one entry point, one price. Many holders split large amounts across weeks to reduce timing regret, but round ${label} figures are easy to budget and compare.`,
              `Before committing, check exchange limits, bank transfer times (SEPA, Faster Payments, or Interac depending on region), and withdrawal minimums on ${ctx.onRamp}.`,
            ]
          : tier === 'common'
            ? [
                `${amount} ${label} sits in the sweet spot between learning and meaningful stacking — large enough to feel real, small enough to treat as tuition if something goes wrong.`,
                `DCA plans in ${ctx.region} often use round ${label} amounts (${amount / 4}, ${amount / 2}, or ${amount} per week) because paychecks and bank transfers think in fiat, not sats.`,
              ]
            : [
                `${amount} ${label} is ideal for first wallet setup: practice sending, receiving, and backing up a seed phrase without oversized risk.`,
                `Exchanges quote BTC in ${label}; this page answers the reverse question — how many sats your ${label} budget buys right now.`,
              ],
    },
    {
      heading: 'Fees reduce the sats you actually receive',
      paragraphs: [
        `Trading fees, card premiums, and spread all shrink the sat count versus the spot price shown here. The calculator assumes mid-market — your fill may be slightly lower.`,
        `Withdrawal fees apply when moving off-exchange. Batch withdrawals when the sat stack justifies the on-chain or Lightning fee rather than withdrawing every single buy.`,
      ],
    },
    {
      heading: 'After you know the sat count',
      paragraphs: [
        tier === 'lump'
          ? `At ${amount} ${label} equivalent, self-custody is non-optional. Plan your hardware wallet before you buy so you are not leaving four figures on an exchange overnight. Our [how to buy Bitcoin guide](/guides/how-to-buy-bitcoin) covers withdrawal step by step.`
          : `Compare this result to [50,000 sats](/50000-satoshi-to-${currency}) and [100,000 sats](/100000-satoshi-to-${currency}) to see how close your purchase gets you to common milestones.`,
        `For repeatable ${label} buys, read [stacking sats and DCA](/guides/stacking-sats-dca). Use the [${label} → Satoshi hub](/${hubSlug}) to try other amounts.`,
      ],
    },
  ];

  return sections;
}

function satoshiHubIntro(currency: FiatCurrency): string {
  const label = CURRENCY_LABELS[currency];
  const ctx = CURRENCY_CONTEXT[currency];
  return `Convert any Satoshi amount to ${label} using the live Bitcoin price. This hub defaults to 100,000 sats and links to fixed amounts holders in ${ctx.region} search most often.`;
}

function satoshiHubSections(currency: FiatCurrency): LandingEditorialSection[] {
  const label = CURRENCY_LABELS[currency];
  const name = CURRENCY_NAMES[currency];
  const ctx = CURRENCY_CONTEXT[currency];

  const regionalNote =
    currency === 'eur'
      ? 'Eurozone wallets and exchanges often default to EUR display even when the underlying asset is global Bitcoin. Converting sats to EUR helps stackers compare against rent, groceries, and SEPA transfer sizes.'
      : currency === 'gbp'
        ? 'UK holders frequently track stacks in sats while budgeting in pounds. Post-Brexit, GBP/BTC liquidity on major exchanges remains strong — this hub uses the same live CoinGecko feed as our USD tools.'
        : currency === 'cad'
          ? 'Canadian stackers face unique on-ramp choices — Interac e-Transfer, CAD bank wires, and local exchanges. Converting sats to CAD puts Lightning tips and exchange balances in familiar dollar terms.'
          : 'US stackers popularized "sats" language as whole Bitcoin prices climbed. This hub bridges wallet balances (sats) and everyday budgeting (USD).';

  return [
    {
      heading: `Satoshi to ${label} in ${ctx.region}`,
      paragraphs: [
        regionalNote,
        `One Bitcoin equals exactly 100,000,000 Satoshis. Multiply your sat count by the live BTC/${label} price, then divide by 100 million for the ${label} equivalent.`,
      ],
    },
    {
      heading: 'When to use this hub vs fixed-amount pages',
      paragraphs: [
        `Type any sat count in the calculator above for one-off lookups. Fixed-amount pages like [50,000 sats](/50000-satoshi-to-${currency}) and [100,000 sats](/100000-satoshi-to-${currency}) load faster for sharing and include stacking context.`,
        `To buy more sats with ${label}, flip to our [${label} → Satoshi hub](${ctx.hubPath}) or [100 ${label} in satoshi](${ctx.fiat100Path}) page.`,
      ],
    },
    {
      heading: `Live ${name.toLowerCase()} prices`,
      paragraphs: [
        `SatoshiCalc refreshes BTC/${label} every 60 seconds from CoinGecko. Bitcoin does not close on weekends — the ${label} value of your sats at 2 AM matters as much as midday.`,
        `Spot is a mid-market estimate. ${ctx.onRamp} may show bid/ask spread around this number. Refresh before large decisions.`,
      ],
    },
    {
      heading: 'Other currencies and guides',
      paragraphs: [
        currency !== 'usd'
          ? `We also support USD with the same pipeline — see [Satoshi to USD](/satoshi-to-usd) for the most popular hub. Browse [all conversions](/conversions) for the full directory.`
          : `For euros, pounds, or Canadian dollars, use [Satoshi to EUR](/satoshi-to-eur), [GBP](/satoshi-to-gbp), or [CAD](/satoshi-to-cad). Every currency has matching reverse converters.`,
        `Learn the unit behind the math in [what is a Satoshi](/guides/what-is-a-satoshi), or plan buys with [stacking sats and DCA](/guides/stacking-sats-dca).`,
      ],
    },
  ];
}

function fiatHubIntro(currency: FiatCurrency): string {
  const label = CURRENCY_LABELS[currency];
  const ctx = CURRENCY_CONTEXT[currency];
  return `Convert any ${label} amount to Satoshis at the live Bitcoin price. This hub defaults to ${currency === 'usd' ? '$100' : `100 ${label}`} — a typical starting buy in ${ctx.region} — with links to other round fiat amounts.`;
}

function fiatHubSections(currency: FiatCurrency): LandingEditorialSection[] {
  const label = CURRENCY_LABELS[currency];
  const name = CURRENCY_NAMES[currency];
  const slugName = CURRENCY_SLUG_NAMES[currency];

  const regionalBuy =
    currency === 'eur'
      ? 'SEPA bank transfers on EU exchanges often settle in 1–2 business days with lower fees than card buys. Many Eurozone stackers DCA with €25–€100 weekly via apps like Relai or Bitvavo.'
      : currency === 'gbp'
        ? 'UK Faster Payments and debit cards fund most GBP buys. FCA oversight means reputable exchanges verify identity — plan KYC before your first withdrawal.'
        : currency === 'cad'
          ? 'Interac e-Transfer is the dominant CAD on-ramp for Canadian exchanges. Watch for spread on small buys; larger transfers often get better effective rates.'
          : 'US buyers use ACH, wire, or debit through Strike, Cash App, Coinbase, and others. Card purchases carry a premium — bank transfer is cheaper for recurring DCA.';

  return [
    {
      heading: `Buying Bitcoin with ${label}`,
      paragraphs: [
        regionalBuy,
        `The formula: divide your ${label} budget by the live BTC price, then multiply by 100,000,000 for Satoshis. This hub highlights round numbers people search for directly.`,
      ],
    },
    {
      heading: 'Plan in fiat, hold in sats',
      paragraphs: [
        `Budgets live in ${label}; Bitcoin scarcity lives in sats. DCA in round ${label} amounts, but track progress toward 500k or 1M sat milestones to stay motivated.`,
        `After buying, withdraw to a wallet you control. Leaving stacks on an exchange keeps counterparty risk alive — see [how to store Bitcoin safely](/guides/how-to-store-bitcoin-safely).`,
      ],
    },
    {
      heading: `Common ${name.toLowerCase()} amounts`,
      paragraphs: [
        `Fixed pages for quick sharing: [1 ${slugName}](/1-${slugName}-in-satoshi), [10 ${slugName}](/10-${slugName}-in-satoshi), [100 ${slugName}](/100-${slugName}-in-satoshi), and [1,000 ${slugName}](/1000-${slugName}-in-satoshi) — each with live sat counts.`,
        `For satoshi → ${label} lookups, use the [Satoshi to ${label} hub](/satoshi-to-${currency}). Full directory: [all conversions](/conversions).`,
      ],
    },
    {
      heading: 'Educational resources',
      paragraphs: [
        `Our [${label.toLowerCase()} to Satoshi guide](/guides/usd-to-satoshi) walks through the math with examples (USD-focused but the formula applies to all fiat).`,
        `Ready to buy? [How to buy Bitcoin](/guides/how-to-buy-bitcoin) covers exchange setup, first purchase, and withdrawal in plain language.`,
      ],
    },
  ];
}

/** Programmatic editorial for landing pages without hand-crafted overrides. */
export function buildGeneratedLandingEditorial(page: LandingPageDef): LandingEditorial {
  switch (page.kind) {
    case 'satoshi-to-fiat-hub':
      return {
        intro: satoshiHubIntro(page.currency),
        sections: satoshiHubSections(page.currency),
      };
    case 'satoshi-to-fiat-amount':
      return {
        intro: satoshiTierIntro(page.amount, CURRENCY_LABELS[page.currency], page.currency),
        sections: satoshiTierSections(page.amount, page.currency),
      };
    case 'fiat-to-satoshi-hub':
      return {
        intro: fiatHubIntro(page.currency),
        sections: fiatHubSections(page.currency),
      };
    case 'fiat-to-satoshi-amount':
      return {
        intro: fiatAmountIntro(page.amount, page.currency),
        sections: fiatAmountSections(page.amount, page.currency),
      };
    case 'btc-to-fiat-hub':
      return {
        intro: `See the live ${CURRENCY_LABELS[page.currency]} value of 1 Bitcoin at today's market price. Jump to fixed amounts like 0.01 BTC or 0.1 BTC when you know the exact figure.`,
        sections: [
          {
            heading: `Why convert BTC to ${CURRENCY_LABELS[page.currency]}?`,
            paragraphs: [
              `News and exchanges quote Bitcoin in whole coins. This hub multiplies BTC by the live ${CURRENCY_LABELS[page.currency]} price so you can budget in familiar units.`,
              `For everyday tips and wallet balances, switch to our [Satoshi to ${CURRENCY_LABELS[page.currency]}](/satoshi-to-${page.currency}) converter — one Bitcoin equals 100,000,000 sats.`,
            ],
          },
          {
            heading: 'Related tools',
            paragraphs: [
              `Reverse the math on [${CURRENCY_LABELS[page.currency]} to Bitcoin](/${page.currency}-to-btc). Estimate on-chain costs with the [Bitcoin fee calculator](/bitcoin-fee-calculator).`,
              `Learn the unit relationship in [how many Satoshis in a Bitcoin](/guides/how-many-satoshis-in-a-bitcoin).`,
            ],
          },
        ],
      };
    case 'btc-to-fiat-amount': {
      const display = formatBtcDisplay(page.amount);
      const label = CURRENCY_LABELS[page.currency];
      return {
        intro: `${display} BTC equals ${(page.amount * SATOSHI_PER_BTC).toLocaleString('en-US')} Satoshis. See the live ${label} value below.`,
        sections: [
          {
            heading: `What ${display} BTC means`,
            paragraphs: [
              page.amount < 1
                ? `${display} BTC is a fractional stack — common for DCA milestones and self-custody practice moves.`
                : `${display} BTC is a large position for most individuals. Confirm custody and withdrawal fees before moving this amount.`,
              `Compare with [Satoshi to ${label}](/satoshi-to-${page.currency}) if your wallet shows sats instead of coins.`,
            ],
          },
          {
            heading: 'Next steps',
            paragraphs: [
              `Buy more with [${CURRENCY_LABELS[page.currency]} to BTC](/${page.currency}-to-btc) or read [how to buy Bitcoin](/guides/how-to-buy-bitcoin).`,
              `Estimate network fees before an on-chain send with the [fee calculator](/bitcoin-fee-calculator).`,
            ],
          },
        ],
      };
    }
    case 'fiat-to-btc-hub':
      return {
        intro: `Find out how much Bitcoin any ${CURRENCY_LABELS[page.currency]} amount buys at the live price — shown in BTC and Satoshis.`,
        sections: [
          {
            heading: `${CURRENCY_LABELS[page.currency]} to BTC vs sats`,
            paragraphs: [
              `Whole-coin quotes help with large purchases; sats help with DCA and Lightning. Use this hub for BTC, or [${CURRENCY_LABELS[page.currency]} to Satoshi](/${page.currency}-to-satoshi) for sat counts.`,
              `Live price comes from CoinGecko and refreshes every 60 seconds.`,
            ],
          },
          {
            heading: 'Related pages',
            paragraphs: [
              `See [Bitcoin to ${CURRENCY_LABELS[page.currency]}](/btc-to-${page.currency}) for the reverse conversion.`,
              `New to buying? [How to buy Bitcoin](/guides/how-to-buy-bitcoin) covers exchange setup and first withdrawal.`,
            ],
          },
        ],
      };
    case 'fiat-to-btc-amount': {
      const label = CURRENCY_LABELS[page.currency];
      return {
        intro: `How much BTC does ${page.amount} ${label} buy today? Live Bitcoin and Satoshi equivalents below.`,
        sections: [
          {
            heading: 'Why this amount is searched',
            paragraphs: [
              `${page.amount} ${label} is a common budgeting figure for first buys and recurring DCA deposits.`,
              `Also see [${page.amount} ${label} in Satoshi](/${page.amount}-${CURRENCY_SLUG_NAMES[page.currency]}-in-satoshi) if you track progress in sats.`,
            ],
          },
          {
            heading: 'After you know the BTC amount',
            paragraphs: [
              `Plan self-custody with [how to store Bitcoin safely](/guides/how-to-store-bitcoin-safely).`,
              `Check on-chain cost with the [Bitcoin fee calculator](/bitcoin-fee-calculator) before withdrawing from an exchange.`,
            ],
          },
        ],
      };
    }
  }
}
