export interface GuideSection {
  heading: string;
  paragraphs: string[];
  /** Affiliate product IDs to show after this section */
  productIds?: string[];
}

export interface GuideFaq {
  q: string;
  a: string;
}

export interface GuideDef {
  slug: string;
  path: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  breadcrumbLabel: string;
  hasAffiliateLinks: boolean;
  readTimeMinutes: number;
  datePublished: string;
  dateModified: string;
  sections: GuideSection[];
  faq: GuideFaq[];
  relatedGuideSlugs: string[];
  relatedLandingPaths: string[];
}

export const GUIDES: GuideDef[] = [
  {
    slug: 'what-is-a-satoshi',
    path: '/guides/what-is-a-satoshi',
    title: 'What Is a Satoshi? Bitcoin’s Smallest Unit Explained',
    description:
      'Learn what a Satoshi is, how it relates to Bitcoin, and why sats make small amounts easier to understand. Includes live conversion links.',
    h1: 'What Is a Satoshi?',
    intro:
      'A Satoshi is the smallest unit of Bitcoin — like cents to a dollar, but with eight decimal places. Understanding sats helps you think in everyday amounts instead of fractions like 0.00001 BTC.',
    breadcrumbLabel: 'What Is a Satoshi?',
    hasAffiliateLinks: false,
    readTimeMinutes: 6,
    datePublished: '2026-06-01',
    dateModified: '2026-06-29',
    sections: [
      {
        heading: 'The basics: 100 million Satoshis in one Bitcoin',
        paragraphs: [
          'One Bitcoin (BTC) equals exactly 100,000,000 Satoshis. That means 1 Satoshi = 0.00000001 BTC. The name honors Satoshi Nakamoto, Bitcoin’s pseudonymous creator.',
          'When Bitcoin trades above tens of thousands of dollars, whole-coin prices feel abstract. Satoshis let you say “I have 500,000 sats” instead of “I have 0.005 BTC” — clearer for most people.',
        ],
      },
      {
        heading: 'Why wallets and exchanges show sats',
        paragraphs: [
          'Many mobile wallets (Phoenix, Wallet of Satoshi, Strike) default to satoshi display for smaller balances. Lightning Network payments are often denominated in sats because they suit micropayments.',
          'If you’re comparing prices, use a live converter. Our homepage updates every 60 seconds from CoinGecko for USD, EUR, GBP, and CAD.',
        ],
      },
      {
        heading: 'Satoshi vs Bitcoin — when to use each',
        paragraphs: [
          'Use BTC when discussing large holdings, portfolio allocation, or exchange listings. Use sats for tips, Lightning invoices, stacking sats, and everyday mental math.',
          'Neither is “more correct” — they’re the same money, different scale. A good rule: if the BTC amount has more than four leading zeros after the decimal, switch to sats.',
        ],
      },
    ],
    faq: [
      {
        q: 'How many Satoshis are in 1 Bitcoin?',
        a: 'Exactly 100,000,000 (one hundred million) Satoshis equal 1 Bitcoin.',
      },
      {
        q: 'Can you send a single Satoshi?',
        a: 'On-chain fees often make single-satoshi transfers impractical, but Lightning and some layer-2 systems handle tiny amounts efficiently.',
      },
      {
        q: 'How do I convert sats to dollars?',
        a: 'Multiply your sats by the current BTC price in USD, then divide by 100,000,000. Use our live Satoshi to USD converter for instant results.',
      },
    ],
    relatedGuideSlugs: ['how-many-satoshis-in-a-bitcoin', 'usd-to-satoshi', 'how-to-store-bitcoin-safely'],
    relatedLandingPaths: ['/satoshi-to-usd', '/1000-satoshi-to-usd', '/100000-satoshi-to-usd'],
  },
  {
    slug: 'how-many-satoshis-in-a-bitcoin',
    path: '/guides/how-many-satoshis-in-a-bitcoin',
    title: 'How Many Satoshis in 1 Bitcoin? (Quick Answer + Chart)',
    description:
      'There are 100 million Satoshis in one Bitcoin. See common satoshi amounts, BTC equivalents, and live fiat values.',
    h1: 'How Many Satoshis Are in 1 Bitcoin?',
    intro:
      'The answer is always 100,000,000 sats per BTC — fixed by Bitcoin’s code, not by market price. Price only affects how much those sats are worth in dollars or euros.',
    breadcrumbLabel: 'Satoshis in 1 Bitcoin',
    hasAffiliateLinks: false,
    readTimeMinutes: 5,
    datePublished: '2026-06-01',
    dateModified: '2026-06-29',
    sections: [
      {
        heading: 'The fixed ratio',
        paragraphs: [
          'Bitcoin’s divisibility stops at 8 decimal places. That smallest unit is named the Satoshi. No matter whether BTC is $30,000 or $100,000, the ratio stays 1 BTC = 100,000,000 sats.',
          'This is why “stacking sats” works as a strategy: you accumulate units that never change in definition, even as fiat value fluctuates.',
        ],
      },
      {
        heading: 'Common amounts at a glance',
        paragraphs: [
          '1,000 sats = 0.00001 BTC · 100,000 sats = 0.001 BTC · 1,000,000 sats = 0.01 BTC · 10,000,000 sats = 0.1 BTC · 100,000,000 sats = 1 BTC.',
          'For live fiat values, use our amount pages — they update every minute with current market prices.',
        ],
      },
      {
        heading: 'Why this matters for self-custody',
        paragraphs: [
          'When you withdraw from an exchange, verify amounts in both BTC and sats. A misplaced decimal is a costly mistake. Hardware wallets display both; always double-check before confirming.',
          'Once you hold sats you control, storage becomes the next question — see our guide on hardware wallets below.',
        ],
      },
    ],
    faq: [
      {
        q: 'Is the number of sats per Bitcoin ever changing?',
        a: 'No. It is hard-coded in Bitcoin’s consensus rules. Only the fiat value of those sats changes.',
      },
      {
        q: 'How many sats is $100 worth?',
        a: 'It depends on the live BTC price. Divide $100 by the BTC/USD price, then multiply by 100,000,000. Try our 100 dollars in satoshi page for the current number.',
      },
    ],
    relatedGuideSlugs: ['what-is-a-satoshi', 'usd-to-satoshi', 'how-to-store-bitcoin-safely'],
    relatedLandingPaths: ['/100-dollars-in-satoshi', '/1000-satoshi-to-usd', '/usd-to-satoshi'],
  },
  {
    slug: 'usd-to-satoshi',
    path: '/guides/usd-to-satoshi',
    title: 'How to Convert USD to Satoshi (Step-by-Step)',
    description:
      'Learn the USD to Satoshi formula with examples. Use our free live converter for USD, EUR, GBP, and CAD.',
    h1: 'How to Convert USD to Satoshi',
    intro:
      'Converting dollars to sats is a two-step calculation using the live Bitcoin price. Once you know the formula, you can sanity-check any wallet or exchange quote.',
    breadcrumbLabel: 'USD to Satoshi',
    hasAffiliateLinks: false,
    readTimeMinutes: 5,
    datePublished: '2026-06-10',
    dateModified: '2026-06-29',
    sections: [
      {
        heading: 'The formula',
        paragraphs: [
          'Satoshis = (USD amount ÷ BTC price in USD) × 100,000,000. Example: at $60,000 BTC, $100 buys (100 ÷ 60,000) × 100,000,000 ≈ 166,667 sats.',
          'Our reverse converter on the homepage does this instantly for USD, EUR, GBP, and CAD with prices refreshed every 60 seconds.',
        ],
      },
      {
        heading: 'Step-by-step',
        paragraphs: [
          '1. Look up the current BTC/USD price (SatoshiCalc shows it on the homepage). 2. Divide your dollar amount by that price to get BTC. 3. Multiply by 100 million for sats. 4. Round down if buying on an exchange — you also pay fees.',
          'For common amounts, skip the math: use /100-dollars-in-satoshi or /1000-dollars-in-satoshi for live results.',
        ],
      },
      {
        heading: 'After you convert — custody matters',
        paragraphs: [
          'Knowing how many sats you can buy is only half the picture. Leaving Bitcoin on an exchange means you don’t hold the keys. For amounts you plan to keep, withdraw to a wallet you control.',
          'Our hardware wallet guide compares beginner-friendly and advanced options.',
        ],
      },
    ],
    faq: [
      {
        q: 'Does the conversion rate change?',
        a: 'Yes. Bitcoin trades 24/7, so the sats you get per dollar changes constantly. Always use a live price for current estimates.',
      },
      {
        q: 'Can I convert Satoshi back to USD?',
        a: 'Yes — multiply sats by the BTC price and divide by 100,000,000. Use our Satoshi to USD converter for live values.',
      },
    ],
    relatedGuideSlugs: ['what-is-a-satoshi', 'how-to-store-bitcoin-safely', 'bitcoin-self-custody-basics'],
    relatedLandingPaths: ['/usd-to-satoshi', '/100-dollars-in-satoshi', '/satoshi-to-usd'],
  },
  {
    slug: 'how-to-store-bitcoin-safely',
    path: '/guides/how-to-store-bitcoin-safely',
    title: 'How to Store Bitcoin Safely: Hardware Wallets Compared',
    description:
      'Compare Coldcard, Blockstream Jade, and BitBox02. Learn cold storage basics, seed phrase safety, and when to move off exchanges.',
    h1: 'How to Store Bitcoin Safely',
    intro:
      'If you don’t hold your private keys, you don’t fully own your Bitcoin. This guide covers hot vs cold storage, hardware wallet options, and backup best practices — with honest pros and cons.',
    breadcrumbLabel: 'Store Bitcoin Safely',
    hasAffiliateLinks: true,
    readTimeMinutes: 10,
    datePublished: '2026-06-15',
    dateModified: '2026-06-29',
    sections: [
      {
        heading: 'Hot wallets vs cold storage',
        paragraphs: [
          'Hot wallets (phone apps, browser extensions) are connected to the internet — convenient for small amounts and spending, but higher attack surface.',
          'Cold storage keeps keys offline. Hardware wallets are the most popular cold option for long-term holders: you sign transactions on a dedicated device while keys never touch your computer or phone.',
        ],
      },
      {
        heading: 'Hardware wallets worth considering',
        paragraphs: [
          'No wallet is perfect for everyone. Match the device to your skill level, budget, and threat model. Below are three well-regarded options in the Bitcoin-only / Bitcoin-first space.',
        ],
        productIds: ['coldcard', 'jade', 'bitbox02'],
      },
      {
        heading: 'Seed phrases and metal backups',
        paragraphs: [
          'Your 12- or 24-word recovery phrase IS your Bitcoin. Never photograph it, never store it in cloud notes, never type it on a website. Write it on paper initially, then move to a metal backup for durability.',
          'One metal backup kit is enough for most people — store it separately from the hardware wallet itself.',
        ],
        productIds: ['seedplate'],
      },
      {
        heading: 'When to move off an exchange',
        paragraphs: [
          'A practical rule: once you would be upset to lose the amount, withdraw to self-custody. For many people that’s anywhere from $100 to a few hundred dollars — but only after you understand seed phrase responsibility.',
          'Use our converter to see how many sats you’re moving before you send. Triple-check addresses; Bitcoin transactions are irreversible.',
        ],
      },
    ],
    faq: [
      {
        q: 'Do I need a hardware wallet for small amounts?',
        a: 'For pocket change, a reputable mobile wallet may suffice. For savings you’d regret losing, hardware cold storage is the standard recommendation.',
      },
      {
        q: 'What happens if I lose my hardware wallet?',
        a: 'Your Bitcoin is on the blockchain, not on the device. If you have your seed phrase, you can restore into a new wallet. Lose the seed and you lose access permanently.',
      },
      {
        q: 'Are affiliate recommendations biased?',
        a: 'We may earn a commission on some links, but we list multiple brands so you can compare. Always do your own research before buying.',
      },
    ],
    relatedGuideSlugs: ['bitcoin-self-custody-basics', 'run-your-own-bitcoin-node', 'what-is-a-satoshi'],
    relatedLandingPaths: ['/satoshi-to-usd', '/100000-satoshi-to-usd'],
  },
  {
    slug: 'bitcoin-self-custody-basics',
    path: '/guides/bitcoin-self-custody-basics',
    title: 'Bitcoin Self-Custody Basics: Keys, Seeds & Sovereignty',
    description:
      'Understand not your keys not your coins, seed phrase hygiene, multisig intro, and the path from exchange to full ownership.',
    h1: 'Bitcoin Self-Custody Basics',
    intro:
      'Self-custody means you — not an exchange — control the private keys that spend your Bitcoin. It’s the core of financial sovereignty, and it starts with a few non-negotiable habits.',
    breadcrumbLabel: 'Self-Custody Basics',
    hasAffiliateLinks: true,
    readTimeMinutes: 9,
    datePublished: '2026-06-18',
    dateModified: '2026-06-29',
    sections: [
      {
        heading: 'Not your keys, not your coins',
        paragraphs: [
          'Exchange balances are IOUs. If the platform freezes withdrawals, goes bankrupt, or gets hacked, your Bitcoin can vanish. History has repeated this lesson multiple times.',
          'Self-custody removes counterparty risk but adds personal responsibility. There is no password reset for a lost seed phrase.',
        ],
      },
      {
        heading: 'Your first self-custody setup',
        paragraphs: [
          '1. Buy on a reputable exchange if needed. 2. Withdraw to a hardware wallet you set up yourself. 3. Verify the receive address on the device screen. 4. Start with a test transaction before moving larger amounts.',
        ],
        productIds: ['jade', 'bitbox02'],
      },
      {
        heading: 'Level up: verify with your own node',
        paragraphs: [
          'A hardware wallet alone is huge progress. Running your own Bitcoin node lets you verify transactions and balances without trusting someone else’s server — the next step toward sovereignty.',
          'See our node guide for plug-and-play options that don’t require a CS degree.',
        ],
      },
      {
        heading: 'Multisig (brief intro)',
        paragraphs: [
          'Multisignature wallets require M-of-N keys to spend (e.g. 2-of-3). They reduce single-point-of-failure from one seed but add complexity. Most beginners should master single-sig hardware wallets first.',
        ],
      },
    ],
    faq: [
      {
        q: 'Is self-custody safe for beginners?',
        a: 'Yes, if you follow seed phrase rules and start small. A hardware wallet plus a metal backup is the standard path.',
      },
      {
        q: 'Should I tell anyone about my Bitcoin?',
        a: 'Operational security matters. The fewer people who know you hold significant Bitcoin, the smaller your target profile.',
      },
    ],
    relatedGuideSlugs: ['how-to-store-bitcoin-safely', 'run-your-own-bitcoin-node', 'usd-to-satoshi'],
    relatedLandingPaths: ['/100-dollars-in-satoshi', '/usd-to-satoshi'],
  },
  {
    slug: 'run-your-own-bitcoin-node',
    path: '/guides/run-your-own-bitcoin-node',
    title: 'How to Run Your Own Bitcoin Node (Sovereignty Guide)',
    description:
      'Why run a Bitcoin node, what Start9 and Umbrel offer, and how home nodes support privacy and self-verification.',
    h1: 'How to Run Your Own Bitcoin Node',
    intro:
      'A Bitcoin full node downloads and validates the entire blockchain. You stop trusting “green checkmarks” from apps and start verifying the rules yourself — the foundation of Bitcoin sovereignty.',
    breadcrumbLabel: 'Run a Bitcoin Node',
    hasAffiliateLinks: true,
    readTimeMinutes: 11,
    datePublished: '2026-06-22',
    dateModified: '2026-06-29',
    sections: [
      {
        heading: 'Why run a node?',
        paragraphs: [
          'Nodes enforce Bitcoin’s rules: supply cap, block size limits, valid transactions. When your wallet connects to your own node, you’re not leaking addresses and balances to a third-party server.',
          'You don’t need a node to self-custody — but pairing a hardware wallet with your own node is the gold standard for privacy and verification.',
        ],
      },
      {
        heading: 'Plug-and-play home servers',
        paragraphs: [
          'You can compile Bitcoin Core on any PC, but dedicated home-server kits bundle everything with a friendly UI. Two popular options:',
        ],
        productIds: ['start9', 'umbrel'],
      },
      {
        heading: 'What you’ll need',
        paragraphs: [
          'Stable home internet, a one-time hardware cost ($300–$700 for turnkey kits), and ~1 TB storage for the full chain (growing over time). Initial sync can take hours to days depending on hardware and connection.',
          'Run the node on wired Ethernet if possible. Expect modest electricity use — comparable to a small appliance.',
        ],
      },
      {
        heading: 'Connect your wallet to your node',
        paragraphs: [
          'Most hardware wallets and apps (Sparrow, Specter, BlueWallet) let you point at your node’s IP or Tor address. Once connected, every balance check and send is verified against your own copy of the blockchain.',
        ],
      },
      {
        heading: 'Lightning (optional next step)',
        paragraphs: [
          'Many home servers also bundle Lightning for fast, low-fee payments. Learn on-chain self-custody first; add Lightning when you’re comfortable with channel management or use custodial Lightning for small amounts only.',
        ],
      },
    ],
    faq: [
      {
        q: 'Do I earn money running a node?',
        a: 'Non-mining full nodes don’t earn block rewards. The payoff is privacy, verification, and supporting the network — not direct income.',
      },
      {
        q: 'Can I run a node on a Raspberry Pi?',
        a: 'Yes, though performance varies. Turnkey products like Start9 and Umbrel exist partly to simplify hardware choices.',
      },
      {
        q: 'Is running a node the same as mining?',
        a: 'No. Nodes validate blocks; miners compete to create them. You can run a node without mining.',
      },
    ],
    relatedGuideSlugs: ['bitcoin-self-custody-basics', 'how-to-store-bitcoin-safely', 'what-is-a-satoshi'],
    relatedLandingPaths: ['/satoshi-to-usd'],
  },
];

export const GUIDE_BY_SLUG = new Map(GUIDES.map((g) => [g.slug, g]));

export function getGuideBySlug(slug: string | undefined): GuideDef | undefined {
  if (!slug) return undefined;
  return GUIDE_BY_SLUG.get(slug);
}

export const GUIDE_PATHS = GUIDES.map((g) => g.path);

export const FEATURED_GUIDES = GUIDES.filter((g) =>
  ['what-is-a-satoshi', 'how-to-store-bitcoin-safely', 'run-your-own-bitcoin-node'].includes(g.slug)
);
