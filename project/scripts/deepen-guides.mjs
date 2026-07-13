#!/usr/bin/env node
/** One-time deepen pass: extra section + internal links + readTimeMinutes per guide slug. */
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const GUIDES_PATH = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../src/lib/guides.ts');

const PATCHES = [
  {
    slug: 'what-is-a-satoshi',
    readTimeMinutes: 7,
    insertBefore: "        q: 'How many Satoshis are in 1 Bitcoin?'",
    section: `      {
        heading: 'Quick conversion links',
        paragraphs: [
          'See live fiat values: [Satoshi to USD](/satoshi-to-usd), [100,000 sats](/100000-satoshi-to-usd), or [100 dollars in sats](/100-dollars-in-satoshi). Read [how many sats in 1 BTC](/guides/how-many-satoshis-in-a-bitcoin) for the fixed math.',
        ],
      },
`,
  },
  {
    slug: 'how-many-satoshis-in-a-bitcoin',
    readTimeMinutes: 7,
    insertBefore: "        q: 'Is the number of sats per Bitcoin ever changing?'",
    section: `      {
        heading: 'Common sat amounts at today\\'s prices',
        bullets: [
          '100,000 sats = 0.001 BTC — see [live USD value](/100000-satoshi-to-usd)',
          '500,000 sats = 0.005 BTC — [500k sats converter](/500000-satoshi-to-usd)',
          '1,000,000 sats = 0.01 BTC — [1M sats page](/1000000-satoshi-to-usd)',
          'Stacking habit — [DCA guide](/guides/stacking-sats-dca)',
        ],
        paragraphs: [],
      },
`,
  },
  {
    slug: 'usd-to-satoshi',
    readTimeMinutes: 7,
    insertBefore: "        q: 'Does the conversion rate change?'",
    section: `      {
        heading: 'Multi-currency converters',
        paragraphs: [
          'Same math works for EUR, GBP, and CAD — use [USD to sats](/usd-to-satoshi), [EUR hub](/eur-to-satoshi), [GBP hub](/gbp-to-satoshi), or [CAD hub](/cad-to-satoshi). After buying, move sats off exchanges per our [storage guide](/guides/how-to-store-bitcoin-safely).',
        ],
      },
`,
  },
  {
    slug: 'how-to-store-bitcoin-safely',
    readTimeMinutes: 11,
    insertBefore: "        q: 'Do I need a hardware wallet for small amounts?'",
    section: `      {
        heading: 'Self-custody learning path',
        bullets: [
          '1. Buy on exchange — [how to buy Bitcoin](/guides/how-to-buy-bitcoin)',
          '2. Withdraw to hardware wallet (this guide)',
          '3. Learn seed hygiene — [self-custody basics](/guides/bitcoin-self-custody-basics)',
          '4. Optional: verify with [your own node](/guides/run-your-own-bitcoin-node)',
        ],
        paragraphs: [],
      },
`,
  },
  {
    slug: 'bitcoin-self-custody-basics',
    readTimeMinutes: 10,
    insertBefore: "        q: 'Is self-custody safe for beginners?'",
    section: `      {
        heading: 'First withdrawal checklist',
        paragraphs: [
          'Generate receive address on hardware wallet → paste into exchange → send test amount (10k–50k sats) → confirm on device screen → then move the rest. Check sats moved with [Satoshi to USD](/satoshi-to-usd) before and after.',
        ],
      },
`,
  },
  {
    slug: 'run-your-own-bitcoin-node',
    readTimeMinutes: 12,
    insertBefore: "        q: 'Do I earn money running a node?'",
    section: `      {
        heading: 'Node + wallet stack',
        paragraphs: [
          'Pair your node with a hardware wallet from our [storage guide](/guides/how-to-store-bitcoin-safely). Self-custody without a node is valid; a node adds privacy and rule verification for long-term holders.',
          'If you are still buying on exchanges, start with [how to buy Bitcoin](/guides/how-to-buy-bitcoin) and [stacking sats](/guides/stacking-sats-dca) before investing in node hardware.',
        ],
      },
`,
  },
  {
    slug: 'how-to-buy-bitcoin',
    readTimeMinutes: 13,
    insertBefore: "        q: 'How much money do I need to buy Bitcoin?'",
    section: `      {
        heading: 'Budget to sats before checkout',
        paragraphs: [
          'Enter your budget on [100 dollars in sats](/100-dollars-in-satoshi) or [1,000 dollars in sats](/1000-dollars-in-satoshi) to see current sat counts. Understanding [what a satoshi is](/guides/what-is-a-satoshi) makes exchange quotes less confusing.',
          'After your first buy, set up a DCA habit in [stacking sats guide](/guides/stacking-sats-dca) and plan withdrawal using [self-custody basics](/guides/bitcoin-self-custody-basics).',
        ],
      },
`,
  },
  {
    slug: 'stacking-sats-dca',
    readTimeMinutes: 11,
    insertBefore: "        q: 'What does stacking sats mean?'",
    section: `      {
        heading: 'DCA milestone tracker',
        bullets: [
          '50,000 sats — [live fiat value](/50000-satoshi-to-usd)',
          '100,000 sats — [100k page](/100000-satoshi-to-usd)',
          '500,000 sats — [500k page](/500000-satoshi-to-usd)',
          '1,000,000 sats — [1M page](/1000000-satoshi-to-usd)',
          'New to buying? Start at [how to buy Bitcoin](/guides/how-to-buy-bitcoin)',
        ],
        paragraphs: [],
      },
`,
  },
];

let content = await fs.readFile(GUIDES_PATH, 'utf8');

for (const { slug, readTimeMinutes, insertBefore, section } of PATCHES) {
  const slugRe = new RegExp(`(slug: '${slug}',[\\s\\S]*?readTimeMinutes: )\\d+`);
  if (!slugRe.test(content)) {
    console.error(`Missing slug or readTimeMinutes: ${slug}`);
    process.exit(1);
  }
  content = content.replace(slugRe, `$1${readTimeMinutes}`);

  const faqIdx = content.indexOf(insertBefore);
  if (faqIdx === -1) {
    console.error(`Missing FAQ anchor for ${slug}`);
    process.exit(1);
  }
  const sectionsClose = content.lastIndexOf('    ],', faqIdx);
  const before = content.lastIndexOf('    sections: [', faqIdx);
  if (sectionsClose === -1 || sectionsClose < before) {
    console.error(`Missing sections close for ${slug}`);
    process.exit(1);
  }
  content = content.slice(0, sectionsClose) + section + content.slice(sectionsClose);
  console.log(`Deepened ${slug}`);
}

await fs.writeFile(GUIDES_PATH, content);
console.log('guides.ts updated.');
