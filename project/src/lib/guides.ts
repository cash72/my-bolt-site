export interface GuideSection {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
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
    readTimeMinutes: 7,
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
      {
        heading: 'Quick conversion links',
        paragraphs: [
          'See live fiat values: [Satoshi to USD](/satoshi-to-usd), [100,000 sats](/100000-satoshi-to-usd), or [100 dollars in sats](/100-dollars-in-satoshi). Read [how many sats in 1 BTC](/guides/how-many-satoshis-in-a-bitcoin) for the fixed math.',
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
    relatedGuideSlugs: ['how-many-satoshis-in-a-bitcoin', 'usd-to-satoshi', 'how-to-buy-bitcoin'],
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
    readTimeMinutes: 7,
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
      {
        heading: 'Common sat amounts at today\'s prices',
        bullets: [
          '100,000 sats = 0.001 BTC — see [live USD value](/100000-satoshi-to-usd)',
          '500,000 sats = 0.005 BTC — [500k sats converter](/500000-satoshi-to-usd)',
          '1,000,000 sats = 0.01 BTC — [1M sats page](/1000000-satoshi-to-usd)',
          'Stacking habit — [DCA guide](/guides/stacking-sats-dca)',
        ],
        paragraphs: [],
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
    relatedGuideSlugs: ['what-is-a-satoshi', 'stacking-sats-dca', 'how-to-store-bitcoin-safely'],
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
    readTimeMinutes: 7,
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
      {
        heading: 'Multi-currency converters',
        paragraphs: [
          'Same math works for EUR, GBP, and CAD — use [USD to sats](/usd-to-satoshi), [EUR hub](/eur-to-satoshi), [GBP hub](/gbp-to-satoshi), or [CAD hub](/cad-to-satoshi). After buying, move sats off exchanges per our [storage guide](/guides/how-to-store-bitcoin-safely).',
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
    relatedGuideSlugs: ['how-to-buy-bitcoin', 'stacking-sats-dca', 'what-is-a-satoshi', 'how-to-store-bitcoin-safely'],
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
    readTimeMinutes: 11,
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
      {
        heading: 'Self-custody learning path',
        bullets: [
          '1. Buy on exchange — [how to buy Bitcoin](/guides/how-to-buy-bitcoin)',
          '2. Withdraw to hardware wallet (this guide)',
          '3. Learn seed hygiene — [self-custody basics](/guides/bitcoin-self-custody-basics)',
          '4. Optional: verify with [your own node](/guides/run-your-own-bitcoin-node)',
        ],
        paragraphs: [],
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
    relatedGuideSlugs: ['how-to-buy-bitcoin', 'bitcoin-self-custody-basics', 'run-your-own-bitcoin-node', 'what-is-a-satoshi'],
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
    readTimeMinutes: 10,
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
      {
        heading: 'First withdrawal checklist',
        paragraphs: [
          'Generate receive address on hardware wallet → paste into exchange → send test amount (10k–50k sats) → confirm on device screen → then move the rest. Check sats moved with [Satoshi to USD](/satoshi-to-usd) before and after.',
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
    relatedGuideSlugs: ['how-to-buy-bitcoin', 'how-to-store-bitcoin-safely', 'run-your-own-bitcoin-node', 'usd-to-satoshi'],
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
    readTimeMinutes: 12,
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
      {
        heading: 'Node + wallet stack',
        paragraphs: [
          'Pair your node with a hardware wallet from our [storage guide](/guides/how-to-store-bitcoin-safely). Self-custody without a node is valid; a node adds privacy and rule verification for long-term holders.',
          'If you are still buying on exchanges, start with [how to buy Bitcoin](/guides/how-to-buy-bitcoin) and [stacking sats](/guides/stacking-sats-dca) before investing in node hardware.',
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
    relatedGuideSlugs: ['bitcoin-self-custody-basics', 'how-to-store-bitcoin-safely', 'how-to-buy-bitcoin'],
    relatedLandingPaths: ['/satoshi-to-usd'],
  },
  {
    slug: 'how-to-buy-bitcoin',
    path: '/guides/how-to-buy-bitcoin',
    title: 'How to Buy Bitcoin — Step-by-Step for Beginners (2026)',
    description:
      'Buy your first Bitcoin safely: choose an exchange, place your order, and withdraw sats to a wallet you control. No hype — just clear steps.',
    h1: 'How to Buy Bitcoin',
    intro:
      'Buying Bitcoin is simpler than it looks — but the order of operations matters. This guide walks you from “how many sats can I get?” to holding keys yourself, without hype or financial advice.',
    breadcrumbLabel: 'Buy Bitcoin',
    hasAffiliateLinks: true,
    readTimeMinutes: 13,
    datePublished: '2026-06-29',
    dateModified: '2026-06-29',
    sections: [
      {
        heading: 'Before you buy: know what you’re getting',
        paragraphs: [
          'Bitcoin is sold in whole BTC on most exchanges, but you can buy any fraction — often displayed in Satoshis (sats). One Bitcoin = 100,000,000 sats. At today’s prices, most first purchases are hundreds of thousands of sats, not a full coin.',
          'Use a live converter to see how many sats your budget buys before you check out. Our homepage and pages like /100-dollars-in-satoshi update every 60 seconds from CoinGecko.',
        ],
      },
      {
        heading: 'Step 1 — Choose a reputable exchange or app',
        paragraphs: [
          'For your first buy, pick a regulated platform available in your country with a track record of allowing withdrawals. Popular options include Coinbase, Kraken, and River (US-focused) — availability varies by region.',
          'Avoid platforms that promise guaranteed returns, hide withdrawal fees, or pressure you to “act now.” If you cannot withdraw to your own wallet, you do not yet own Bitcoin — you have an IOU.',
          'SatoshiCalc does not endorse a single exchange. Compare fees, supported payment methods, and withdrawal minimums for your currency (USD, EUR, GBP, or CAD).',
        ],
      },
      {
        heading: 'Step 2 — Verify your account and fund it',
        paragraphs: [
          'Most regulated exchanges require identity verification (KYC) before you can buy or withdraw. This is normal for fiat on-ramps — plan for a few minutes to upload ID.',
          'Fund via bank transfer, debit card, or other methods your platform supports. Bank transfers often have lower fees than instant card buys; card purchases may include a premium.',
          'Start with an amount you would be comfortable learning with — many people begin between $50 and $200 while they practice withdrawals.',
        ],
      },
      {
        heading: 'Step 3 — Place your buy order',
        paragraphs: [
          'Two common order types: market orders (buy immediately at the current price) and limit orders (buy only if the price hits your target). Beginners usually use market orders for simplicity.',
          'Watch for trading fees (often 0.1%–1.5%) and spread — the gap between buy and sell prices. After fees, compare the sats you receive to our live calculator so you know what you paid per sat.',
          'Some apps let you buy recurring amounts (DCA — dollar-cost averaging). Buying a fixed dollar amount weekly removes timing stress and matches how many people “stack sats” over time.',
        ],
      },
      {
        heading: 'Step 4 — Withdraw to a wallet you control',
        paragraphs: [
          'Leaving Bitcoin on an exchange is convenient but risky — hacks, freezes, and bankruptcies happen. Once you understand seed phrases, withdraw to self-custody.',
          'Flow: set up a hardware or mobile wallet → generate a receive address → paste it into the exchange withdrawal form → send a small test amount first → confirm it arrived → then move the rest.',
          'Always verify the receive address on your wallet’s screen (especially hardware wallets). Bitcoin transactions are irreversible; one wrong character sends funds to the wrong place.',
        ],
        productIds: ['jade', 'bitbox02'],
      },
      {
        heading: 'Step 5 — Back up your seed phrase',
        paragraphs: [
          'When you create a wallet, you get a 12- or 24-word recovery phrase. That phrase IS your Bitcoin. Write it on paper during setup, then store a metal backup somewhere separate from the device.',
          'Never photograph it, never store it in cloud notes, never type it into a website or “support chat.” Anyone who asks for your seed phrase is scamming you.',
        ],
        productIds: ['seedplate'],
      },
      {
        heading: 'Fees, taxes, and realistic expectations',
        paragraphs: [
          'Total cost = exchange fee + payment method fee + network fee on withdrawal. Network fees spike during congestion; if you are not in a rush, wait for lower fee periods for on-chain withdrawals.',
          'Tax treatment of Bitcoin varies by country. Many jurisdictions treat selling or spending BTC as a taxable event. SatoshiCalc is not tax advice — keep records and consult a professional if needed.',
          'Bitcoin’s price moves 24/7. Short-term swings are normal. Many buyers focus on long-term holding and learning self-custody rather than daily price watching.',
        ],
      },
      {
        heading: 'Budget to sats before checkout',
        paragraphs: [
          'Enter your budget on [100 dollars in sats](/100-dollars-in-satoshi) or [1,000 dollars in sats](/1000-dollars-in-satoshi) to see current sat counts. Understanding [what a satoshi is](/guides/what-is-a-satoshi) makes exchange quotes less confusing.',
          'After your first buy, set up a DCA habit in [stacking sats guide](/guides/stacking-sats-dca) and plan withdrawal using [self-custody basics](/guides/bitcoin-self-custody-basics).',
        ],
      },
    ],
    faq: [
      {
        q: 'How much money do I need to buy Bitcoin?',
        a: 'Most exchanges allow purchases starting from roughly $10–$20, though minimums vary. You are buying a fraction of a Bitcoin (sats), not a whole coin. Use our converter to see how many sats your budget buys at the current price.',
      },
      {
        q: 'Is buying Bitcoin safe?',
        a: 'Buying on a regulated exchange and withdrawing to a wallet you control is the standard safe path. Risks include exchange counterparty risk (until you withdraw), phishing scams, and losing your seed phrase. Follow the steps above and start small.',
      },
      {
        q: 'Should I leave Bitcoin on the exchange?',
        a: 'Only for amounts you are actively trading or would not mind losing access to temporarily. For savings, withdraw to self-custody once you understand seed phrase backup.',
      },
      {
        q: 'What is the difference between Bitcoin and Satoshis when buying?',
        a: 'They are the same asset at different scales. Exchanges quote BTC; wallets often show sats for smaller amounts. 100,000 sats = 0.001 BTC. Our calculator converts between them instantly.',
      },
      {
        q: 'Can I buy Bitcoin without ID?',
        a: 'Regulated fiat on-ramps typically require ID verification. Peer-to-peer or Bitcoin ATMs may have different rules but often charge higher fees and carry more scam risk. Beginners should prefer well-known regulated platforms.',
      },
    ],
    relatedGuideSlugs: ['stacking-sats-dca', 'usd-to-satoshi', 'how-to-store-bitcoin-safely'],
    relatedLandingPaths: ['/100-dollars-in-satoshi', '/usd-to-satoshi', '/50000-satoshi-to-usd', '/1000-dollars-in-satoshi'],
  },
  {
    slug: 'stacking-sats-dca',
    path: '/guides/stacking-sats-dca',
    title: 'Stacking Sats & DCA — How to Buy Bitcoin Weekly (2026)',
    description:
      'Learn to stack Satoshis with dollar-cost averaging (DCA). Set a schedule, track sats not dollars, and know when to move to self-custody. Free guide with live converter links.',
    h1: 'Stacking Sats & Dollar-Cost Averaging',
    intro:
      '“Stacking sats” means accumulating Satoshis steadily over time — usually through small, repeated buys rather than one big bet. Dollar-cost averaging (DCA) is the simplest way to do it without trying to predict price.',
    breadcrumbLabel: 'Stacking Sats & DCA',
    hasAffiliateLinks: true,
    readTimeMinutes: 11,
    datePublished: '2026-06-29',
    dateModified: '2026-07-07',
    sections: [
      {
        heading: 'What “stacking sats” actually means',
        paragraphs: [
          'A Satoshi is the smallest unit of Bitcoin — 100,000,000 sats equal 1 BTC. Stacking sats is the habit of adding to your balance regularly, the way savers add to a bank account.',
          'The phrase caught on because whole Bitcoins became expensive to discuss. Saying “I stacked 50,000 sats this week” is clearer than quoting tiny BTC fractions — and it keeps focus on accumulation, not lottery-ticket thinking.',
        ],
      },
      {
        heading: 'Dollar-cost averaging (DCA) in plain English',
        paragraphs: [
          'DCA means buying a fixed dollar (or euro, pound, loonie) amount on a schedule — weekly, biweekly, or monthly — regardless of whether Bitcoin is up or down that day.',
          'You will not buy the exact bottom. You also will not put everything in at the exact top. Over time, your average purchase price smooths out volatility. Many stackers treat it like a subscription: set it, forget it, review quarterly.',
          'Example: $25 every Friday. Some weeks you get more sats, some weeks fewer. After a year, you have a meaningful stack without ever timing the market.',
        ],
      },
      {
        heading: 'Common sat milestones (and what they’re worth live)',
        paragraphs: [
          'Stackers often set round sat targets — not because the numbers are magic, but because they make progress tangible. Check live fiat values on our amount pages:',
          '50,000 sats (0.0005 BTC) · 100,000 sats (0.001 BTC) · 500,000 sats (0.005 BTC) · 1,000,000 sats (0.01 BTC) · 10,000,000 sats (0.1 BTC).',
          'Use /50000-satoshi-to-usd, /100000-satoshi-to-usd, or /500000-satoshi-to-usd for current USD, EUR, GBP, and CAD equivalents — updated every 60 seconds.',
        ],
      },
      {
        heading: 'How to set up a DCA plan',
        paragraphs: [
          '1. Pick an amount you can sustain for 6–12 months without stress — $10, $25, or $100 per interval is common. 2. Choose a schedule (payday-aligned works well). 3. Use an exchange or app with recurring buys if available. 4. Track progress in sats, not just dollars.',
          'Bank-funded recurring buys usually beat manual “I’ll buy when it dips” — dips are obvious only in hindsight. Automating removes emotion from the loop.',
          'If you have not bought Bitcoin before, read our How to Buy Bitcoin guide first — then come back here to build the habit.',
        ],
      },
      {
        heading: 'Track sats, not just portfolio dollars',
        paragraphs: [
          'Your exchange shows a dollar balance that moves with price. Your real stack is the number of sats you own. A $500 balance might be 800,000 sats today and still 800,000 sats tomorrow — the dollar label changed, your stack did not.',
          'SatoshiCalc’s reverse converter shows how many sats a fixed fiat amount buys at today’s price. Over time, your goal is rising sat count, not chasing green daily P&L screenshots.',
        ],
      },
      {
        heading: 'When to withdraw stacked sats to self-custody',
        paragraphs: [
          'DCA on an exchange is fine while you learn — but stacked sats left on a platform are still someone else’s IOU. A practical rule: batch-withdraw when your stack would hurt to lose, or when fees make sense relative to the amount.',
          'Many stackers withdraw monthly or at round milestones (500k sats, 1M sats). Send a test transaction first, verify the address on a hardware wallet screen, then move the rest.',
          'Once withdrawal becomes routine, a hardware wallet pays for itself in peace of mind.',
        ],
        productIds: ['jade', 'bitbox02'],
      },
      {
        heading: 'Mistakes stackers learn the hard way',
        paragraphs: [
          'Stopping DCA during red weeks — that is often when each dollar buys more sats. Pausing defeats the purpose.',
          'Checking price hourly — stacking is a multi-year habit; daily noise creates stress and bad decisions.',
          'Leaving large stacks on exchanges for years — convenience is not free; self-custody is the end goal for savings.',
          'Comparing your stack to influencers — everyone’s budget and timeline differ. Consistency beats heroics.',
        ],
      },
      {
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
    ],
    faq: [
      {
        q: 'What does stacking sats mean?',
        a: 'Accumulating Satoshis over time through regular small purchases or earnings. It emphasizes steady growth in sats rather than trying to buy one whole Bitcoin at once.',
      },
      {
        q: 'How much should I DCA into Bitcoin?',
        a: 'Only an amount you can afford to hold for years without needing it for bills or emergencies. Many beginners start at $10–$50 per week and adjust after a few months.',
      },
      {
        q: 'Is DCA better than buying a lump sum?',
        a: 'Historically, lump sums invested early sometimes outperform DCA — but DCA reduces regret and timing risk, which helps most people actually stay in the market. The best plan is one you stick to.',
      },
      {
        q: 'How many sats should I aim to stack?',
        a: 'There is no universal target. Some stackers aim for 100,000 sats as a first milestone, then 1 million sats (0.01 BTC). Use live conversion pages to see what those amounts mean in your currency today.',
      },
      {
        q: 'How often should I buy when stacking sats?',
        a: 'Weekly or biweekly aligns with paychecks for many people. Monthly works too. More important than frequency is consistency over 12+ months.',
      },
      {
        q: 'Should I stack sats on an exchange or in a wallet?',
        a: 'Buy on an exchange, then withdraw to a wallet you control for amounts you are saving. Keep only spending money or active-trade balances on exchanges.',
      },
    ],
    relatedGuideSlugs: ['how-to-buy-bitcoin', 'how-many-satoshis-in-a-bitcoin', 'how-to-store-bitcoin-safely'],
    relatedLandingPaths: [
      '/50000-satoshi-to-usd',
      '/100000-satoshi-to-usd',
      '/500000-satoshi-to-usd',
      '/10000000-satoshi-to-usd',
      '/100-dollars-in-satoshi',
    ],
  },
{
    slug: 'lightning-network-basics',
    path: '/guides/lightning-network-basics',
    title: 'Lightning Network Basics: Fast Bitcoin Payments Explained',
    description:
      'Learn how the Lightning Network works, when to use it vs on-chain Bitcoin, and how sats make micropayments practical. Includes wallet and fee basics.',
    h1: 'Lightning Network Basics',
    intro:
      'The Lightning Network is a layer built on Bitcoin that moves payments off the main chain for speed and low fees. If you have ever paid in sats through a mobile wallet, you were likely using Lightning — not a traditional on-chain transaction.',
    breadcrumbLabel: 'Lightning Network Basics',
    hasAffiliateLinks: false,
    readTimeMinutes: 9,
    datePublished: '2026-07-18',
    dateModified: '2026-07-18',
    sections: [
      {
        heading: 'What Lightning is — and what it is not',
        paragraphs: [
          'Bitcoin’s base layer settles transactions on a public ledger every ~10 minutes. That is secure but slow and fee-sensitive for small amounts. Lightning opens payment channels between nodes so two parties can send sats back and forth instantly, settling on-chain only when channels open or close.',
          'Lightning is still Bitcoin — same 21M supply cap, same consensus rules underneath. It is not a separate token. Amounts are usually shown in sats because a coffee tip of 5,000 sats is easier to read than 0.00005 BTC. See [what a Satoshi is](/guides/what-is-a-satoshi) for the unit math.',
        ],
      },
      {
        heading: 'When to use Lightning vs on-chain',
        paragraphs: [
          'Use Lightning for small, frequent payments: tips, streaming sats, retail purchases under a few dollars, and moving spending money between your own wallets. Fees are often fractions of a cent instead of dollars during on-chain congestion.',
          'Use on-chain for larger savings you plan to hold long term. Withdraw from an exchange to a hardware wallet on-chain, then optionally fund a Lightning wallet with a smaller spending balance. Our [storage guide](/guides/how-to-store-bitcoin-safely) covers cold storage; Lightning suits hot spending wallets.',
          'Check how many sats you are moving with [Satoshi to USD](/satoshi-to-usd) or [100 dollars in sats](/100-dollars-in-satoshi) before choosing a rail — the dollar label helps sanity-check whether on-chain fees are worth it.',
        ],
      },
      {
        heading: 'Getting started safely',
        paragraphs: [
          'Popular Lightning wallets (Phoenix, Wallet of Satoshi, Alby, Zeus) handle channel management for beginners. Start with an amount you would not mind losing while learning — treat it like cash in your pocket, not your vault.',
          'Lightning invoices are one-time payment requests. Always verify the amount in sats on your screen before confirming. For your first on-chain buy and withdrawal path, read [how to buy Bitcoin](/guides/how-to-buy-bitcoin) and [self-custody basics](/guides/bitcoin-self-custody-basics).',
          'Running your own node plus Lightning is an advanced step — see [run your own Bitcoin node](/guides/run-your-own-bitcoin-node) when you are ready to verify payments yourself instead of trusting a custodial Lightning provider.',
        ],
      },
    ],
    faq: [
      {
        q: 'Is Lightning the same as Bitcoin?',
        a: 'Yes — Lightning moves real Bitcoin (denominated in sats) off-chain for speed. It is a payment layer, not a separate cryptocurrency.',
      },
      {
        q: 'Can I lose money using Lightning?',
        a: 'User error (wrong invoice, scams) and custodial wallet risk are the main concerns. Non-custodial Lightning with your own node reduces counterparty risk but adds complexity.',
      },
      {
        q: 'Do I need to understand channels to use Lightning?',
        a: 'No for most mobile wallets — they open and manage channels automatically. Power users who run nodes choose channel partners and liquidity.',
      },
    ],
    relatedGuideSlugs: ['what-is-a-satoshi', 'bitcoin-transaction-fees-explained', 'how-to-send-bitcoin-first-time', 'run-your-own-bitcoin-node'],
    relatedLandingPaths: ['/satoshi-to-usd', '/1000-satoshi-to-usd', '/100-dollars-in-satoshi'],
  },
  {
    slug: 'bitcoin-transaction-fees-explained',
    path: '/guides/bitcoin-transaction-fees-explained',
    title: 'Bitcoin Transaction Fees Explained (2026 Guide)',
    description:
      'Why Bitcoin fees rise and fall, how miners prioritize transactions, and practical tips to pay less when sending sats on-chain or via Lightning.',
    h1: 'Bitcoin Transaction Fees Explained',
    intro:
      'Every on-chain Bitcoin transaction competes for limited block space. Fees are not a bank markup — they are the market price to get your payment confirmed. Understanding fees helps you avoid overpaying when moving sats.',
    breadcrumbLabel: 'Transaction Fees Explained',
    hasAffiliateLinks: false,
    readTimeMinutes: 8,
    datePublished: '2026-07-18',
    dateModified: '2026-07-18',
    sections: [
      {
        heading: 'How Bitcoin fees work',
        paragraphs: [
          'Fees are paid to miners, not to exchanges or wallet companies. Miners prioritize transactions offering higher fee rates (satoshis per virtual byte, or sat/vB). When mempools fill during busy periods, low-fee transactions wait hours or get dropped.',
          'Transaction size matters — spending from many small inputs costs more bytes than one clean UTXO. If you are sending 100,000 sats, compare that to live fiat on [100k sats](/100000-satoshi-to-usd) — a $3 fee hurts more on a $30 transfer than a $3,000 one.',
        ],
      },
      {
        heading: 'On-chain vs Lightning fees',
        paragraphs: [
          'On-chain fees scale with network demand. Lightning routing fees are typically tiny flat amounts plus occasional channel costs. For micro-payments and tips, Lightning wins; for cold-storage withdrawals and large self-custody moves, on-chain is the standard rail.',
          'Exchanges often charge a flat withdrawal fee that may not match live mempool rates — check their fee before moving stacked sats off-platform. If you DCA on an exchange, batch withdrawals at milestones to amortize fees — see [stacking sats & DCA](/guides/stacking-sats-dca).',
        ],
      },
      {
        heading: 'How to pay less',
        paragraphs: [
          'Wait for low-congestion periods (often weekends) if you are not in a rush. Use fee estimation in your wallet — “economy” or “low priority” is fine for non-urgent moves to hardware storage.',
          'Consolidate UTXOs during cheap fee periods if your wallet supports coin control. For first-time sends, practice with a test amount — walkthrough in [how to send Bitcoin first time](/guides/how-to-send-bitcoin-first-time).',
          'Convert your budget to sats first with [USD to Satoshi](/usd-to-satoshi) so fee percentages are obvious before you hit send.',
        ],
      },
    ],
    faq: [
      {
        q: 'Why did my Bitcoin fee spike overnight?',
        a: 'Mempool demand jumped — often during price volatility or NFT/inscription waves. Fees fall when congestion clears. Lightning fees stay low for small payments regardless.',
      },
      {
        q: 'Can I send Bitcoin with zero fees?',
        a: 'Technically you can broadcast a zero-fee transaction, but miners ignore it. Wallets require a minimum fee so your payment actually confirms.',
      },
      {
        q: 'Do I pay fees when receiving Bitcoin?',
        a: 'Receivers do not pay on-chain fees — senders do. Lightning may deduct tiny routing fees from the payment amount depending on wallet settings.',
      },
    ],
    relatedGuideSlugs: ['lightning-network-basics', 'how-to-send-bitcoin-first-time', 'how-to-store-bitcoin-safely', 'stacking-sats-dca'],
    relatedLandingPaths: ['/satoshi-to-usd', '/100000-satoshi-to-usd', '/usd-to-satoshi'],
  },
  {
    slug: 'bitcoin-wallet-types-compared',
    path: '/guides/bitcoin-wallet-types-compared',
    title: 'Bitcoin Wallet Types Compared: Hot, Cold, Custodial & Hardware',
    description:
      'Compare custodial, mobile, desktop, and hardware Bitcoin wallets. Learn which fits spending sats, savings, and self-custody at each stage.',
    h1: 'Bitcoin Wallet Types Compared',
    intro:
      'A Bitcoin wallet is software or hardware that holds your private keys — the passwords that spend your sats. The right type depends on amount, skill level, and whether you are saving or spending.',
    breadcrumbLabel: 'Wallet Types Compared',
    hasAffiliateLinks: true,
    readTimeMinutes: 10,
    datePublished: '2026-07-18',
    dateModified: '2026-07-18',
    sections: [
      {
        heading: 'Custodial vs self-custody',
        paragraphs: [
          'Custodial wallets (exchanges, some Lightning apps) hold keys for you — convenient, but “not your keys, not your coins” applies. Self-custody wallets give you a seed phrase; lose it and funds are gone forever.',
          'A common split: buy on an exchange (custodial temporarily), withdraw savings to hardware (self-custody), keep a mobile Lightning wallet for pocket change. Read [self-custody basics](/guides/bitcoin-self-custody-basics) before moving meaningful stacks.',
        ],
      },
      {
        heading: 'Hot wallets: mobile, desktop, browser',
        paragraphs: [
          'Hot wallets stay connected to the internet — fast for payments, higher attack surface. Mobile apps (BlueWallet, Phoenix) suit daily Lightning use. Desktop wallets (Sparrow, Electrum) offer coin control for advanced users.',
          'Never keep life-changing amounts in hot wallets. If your stack would hurt to lose, upgrade to cold storage. Check what you are protecting with [500k sats](/500000-satoshi-to-usd) or [1M sats](/1000000-satoshi-to-usd) live converters.',
        ],
        productIds: ['jade', 'bitbox02'],
      },
      {
        heading: 'Cold storage and hardware wallets',
        paragraphs: [
          'Hardware wallets keep keys offline and sign transactions on a dedicated screen you verify. They are the standard for long-term holders after their first [how to buy Bitcoin](/guides/how-to-buy-bitcoin) purchase.',
          'Pair hardware with a metal seed backup — paper burns and digital photos leak. Full comparison of devices and backup hygiene is in [how to store Bitcoin safely](/guides/how-to-store-bitcoin-safely).',
        ],
        productIds: ['coldcard', 'seedplate'],
      },
    ],
    faq: [
      {
        q: 'Which wallet is best for beginners?',
        a: 'Start with a reputable exchange to buy, then a beginner-friendly hardware wallet for savings and optionally a simple Lightning app for small spending. Master seed phrase backup before large withdrawals.',
      },
      {
        q: 'Can I use one wallet for everything?',
        a: 'You can, but separating savings (cold) and spending (hot/Lightning) reduces risk. Most serious holders use at least two wallet types.',
      },
      {
        q: 'Are mobile wallets safe?',
        a: 'Safe enough for small amounts with a strong phone passcode and no seed photos. Not recommended for your entire stack.',
      },
    ],
    relatedGuideSlugs: ['how-to-store-bitcoin-safely', 'bitcoin-self-custody-basics', 'how-to-buy-bitcoin', 'lightning-network-basics'],
    relatedLandingPaths: ['/100-dollars-in-satoshi', '/500000-satoshi-to-usd', '/satoshi-to-usd'],
  },
  {
    slug: 'how-to-send-bitcoin-first-time',
    path: '/guides/how-to-send-bitcoin-first-time',
    title: 'How to Send Bitcoin for the First Time (Step-by-Step)',
    description:
      'Send your first Bitcoin payment safely: verify addresses, choose fees, test with small sats, and confirm on a hardware wallet screen.',
    h1: 'How to Send Bitcoin for the First Time',
    intro:
      'Sending Bitcoin is irreversible — one wrong character in an address sends sats to a stranger forever. This walkthrough covers test sends, fee choice, and the verification habits that prevent costly mistakes.',
    breadcrumbLabel: 'Send Bitcoin First Time',
    hasAffiliateLinks: false,
    readTimeMinutes: 9,
    datePublished: '2026-07-18',
    dateModified: '2026-07-18',
    sections: [
      {
        heading: 'Before you send: amount and destination',
        paragraphs: [
          'Know exactly how many sats you are sending and why. Use [Satoshi to USD](/satoshi-to-usd) to double-check the fiat value — especially when copying addresses from messages or QR codes.',
          'Ask whether the recipient wants on-chain Bitcoin or a Lightning invoice. On-chain suits larger transfers; Lightning suits instant small payments. See [Lightning Network basics](/guides/lightning-network-basics) if you see a “lightning:” prefix or lnurl.',
        ],
      },
      {
        heading: 'Step-by-step on-chain send',
        paragraphs: [
          '1. Open your wallet and tap Send. 2. Paste or scan the receive address — prefer QR codes over typed addresses. 3. Enter amount in sats or BTC — remember [100 million sats = 1 BTC](/guides/how-many-satoshis-in-a-bitcoin). 4. Select a fee tier (economy if not urgent). 5. On hardware wallets, verify address and amount on the device screen before confirming.',
          'Send a test transaction first — 10,000–50,000 sats is common — and wait for at least one confirmation before moving the rest. Track test value on [10k sats](/10000-satoshi-to-usd) or nearby amount pages.',
        ],
      },
      {
        heading: 'After sending and common mistakes',
        paragraphs: [
          'Transactions need block confirmations before recipients treat them as final. One confirmation is usually enough for small amounts; exchanges may require three or more.',
          'Never send to an address someone DMed you unless you independently verified it. Scammers impersonate support and ask for “verification deposits.” Legitimate services never ask for your seed phrase.',
          'If you bought on an exchange and have not withdrawn yet, start with [how to buy Bitcoin](/guides/how-to-buy-bitcoin) and [self-custody basics](/guides/bitcoin-self-custody-basics) — sending from an exchange works the same but fees are set by the platform.',
        ],
      },
    ],
    faq: [
      {
        q: 'How long does a first Bitcoin send take?',
        a: 'Lightning settles in seconds. On-chain usually confirms within 10–60 minutes depending on fee rate and network congestion.',
      },
      {
        q: 'What if I sent to the wrong address?',
        a: 'Bitcoin transactions cannot be reversed. Prevention — test sends and hardware wallet screen verification — is the only reliable protection.',
      },
      {
        q: 'Should my first send be on-chain or Lightning?',
        a: 'If the recipient gave a Lightning invoice and the amount is small, use Lightning. For withdrawals to your own hardware wallet, use on-chain.',
      },
    ],
    relatedGuideSlugs: ['bitcoin-transaction-fees-explained', 'bitcoin-wallet-types-compared', 'how-to-buy-bitcoin', 'what-is-a-satoshi'],
    relatedLandingPaths: ['/satoshi-to-usd', '/10000-satoshi-to-usd', '/100-dollars-in-satoshi'],
  },
  {
    slug: 'understanding-bitcoin-price-volatility',
    path: '/guides/understanding-bitcoin-price-volatility',
    title: 'Understanding Bitcoin Price Volatility (Without Panic)',
    description:
      'Why Bitcoin’s price swings in dollars while your sat count stays fixed. Learn volatility drivers, mental models for holders, and how DCA helps.',
    h1: 'Understanding Bitcoin Price Volatility',
    intro:
      'Bitcoin’s dollar price can move 5–10% in a week — normal for a global asset trading 24/7 with no central bank. Your sat stack does not shrink when price drops; only the fiat label changes. That distinction matters for long-term holders.',
    breadcrumbLabel: 'Bitcoin Price Volatility',
    hasAffiliateLinks: false,
    readTimeMinutes: 8,
    datePublished: '2026-07-18',
    dateModified: '2026-07-18',
    sections: [
      {
        heading: 'Sats are fixed; dollars are not',
        paragraphs: [
          'You own a count of satoshis — 500,000 sats today is 500,000 sats tomorrow. What changes is how many dollars those sats trade for on exchanges. See [how many sats in 1 BTC](/guides/how-many-satoshis-in-a-bitcoin) — that ratio never moves.',
          'Track progress in sats when stacking, not daily portfolio screenshots. [100 dollars in sats](/100-dollars-in-satoshi) buys different sat counts each week — that is DCA working, not failure.',
        ],
      },
      {
        heading: 'Why Bitcoin moves more than stocks',
        paragraphs: [
          'Smaller market cap than major equities, no closing bell, global news hitting at 3 a.m., leverage liquidations, and exchange flows all amplify swings. Halving cycles and macro interest-rate shifts add multi-month trends on top of daily noise.',
          'Volatility cuts both ways — sharp rises get headlines; drawdowns test conviction. If swings cause sleepless nights, your position size may exceed your risk tolerance. Many beginners start with amounts they learn on via [how to buy Bitcoin](/guides/how-to-buy-bitcoin).',
        ],
      },
      {
        heading: 'Practical habits for volatile markets',
        paragraphs: [
          'Dollar-cost averaging removes timing stress — fixed fiat buys on a schedule through up and down weeks. Full playbook in [stacking sats & DCA](/guides/stacking-sats-dca).',
          'Separate “investment stack” sats in self-custody from spending wallets so red days do not tempt panic sells of long-term savings. Storage guidance: [how to store Bitcoin safely](/guides/how-to-store-bitcoin-safely).',
          'Use live converters ([USD to sats](/usd-to-satoshi), [1,000 dollars in sats](/1000-dollars-in-satoshi)) for planning buys — not for hourly price checking. Quarterly reviews beat daily charts for multi-year holders.',
        ],
      },
    ],
    faq: [
      {
        q: 'Is Bitcoin too volatile to use as savings?',
        a: 'That is a personal risk question. Many holders accept short-term volatility for long-term exposure, size positions accordingly, and never invest rent or emergency funds.',
      },
      {
        q: 'Does volatility affect transaction fees?',
        a: 'Indirectly — busy mempool periods often coincide with price spikes. Fee mechanics are covered in [Bitcoin transaction fees explained](/guides/bitcoin-transaction-fees-explained).',
      },
      {
        q: 'Should I stop DCA during downturns?',
        a: 'Down weeks often buy more sats per dollar — pausing DCA defeats its purpose. Consistency over 12+ months matters more than any single purchase.',
      },
    ],
    relatedGuideSlugs: ['stacking-sats-dca', 'how-to-buy-bitcoin', 'what-is-a-satoshi', 'usd-to-satoshi'],
    relatedLandingPaths: ['/100-dollars-in-satoshi', '/1000-dollars-in-satoshi', '/satoshi-to-usd', '/usd-to-satoshi'],
  },
];

export const GUIDE_BY_SLUG = new Map(GUIDES.map((g) => [g.slug, g]));

export function getGuideBySlug(slug: string | undefined): GuideDef | undefined {
  if (!slug) return undefined;
  return GUIDE_BY_SLUG.get(slug);
}

export const GUIDE_PATHS = GUIDES.map((g) => g.path);

export const FEATURED_GUIDES = [
  'how-to-buy-bitcoin',
  'stacking-sats-dca',
  'what-is-a-satoshi',
  'how-to-store-bitcoin-safely',
  'how-to-send-bitcoin-first-time',
  'bitcoin-transaction-fees-explained',
  'lightning-network-basics',
  'bitcoin-wallet-types-compared',
]
  .map((slug) => getGuideBySlug(slug))
  .filter((g): g is GuideDef => g !== undefined);

export function getGuidesForLanding(page: { direction: 'satoshi-to-fiat' | 'fiat-to-satoshi' }): GuideDef[] {
  if (page.direction === 'fiat-to-satoshi') {
    return ['how-to-buy-bitcoin', 'stacking-sats-dca', 'usd-to-satoshi']
      .map((slug) => getGuideBySlug(slug))
      .filter((g): g is GuideDef => g !== undefined);
  }

  return ['stacking-sats-dca', 'how-many-satoshis-in-a-bitcoin', 'what-is-a-satoshi']
    .map((slug) => getGuideBySlug(slug))
    .filter((g): g is GuideDef => g !== undefined);
}
