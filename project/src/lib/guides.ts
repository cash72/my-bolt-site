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
    relatedGuideSlugs: ['bitcoin-self-custody-basics', 'how-to-store-bitcoin-safely', 'how-to-buy-bitcoin'],
    relatedLandingPaths: ['/satoshi-to-usd'],
  },
  {
    slug: 'how-to-buy-bitcoin',
    path: '/guides/how-to-buy-bitcoin',
    title: 'How to Buy Bitcoin Safely (Beginner’s Guide)',
    description:
      'Step-by-step guide to buying your first Bitcoin: choose an exchange, understand fees, buy in sats, and withdraw to a wallet you control.',
    h1: 'How to Buy Bitcoin',
    intro:
      'Buying Bitcoin is simpler than it looks — but the order of operations matters. This guide walks you from “how many sats can I get?” to holding keys yourself, without hype or financial advice.',
    breadcrumbLabel: 'Buy Bitcoin',
    hasAffiliateLinks: true,
    readTimeMinutes: 12,
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
          'Flow: set up a hardware or mobile wallet → generate a receive address → paste it into the exchange withdrawal form → send a **small test amount first** → confirm it arrived → then move the rest.',
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
    title: 'Stacking Sats & DCA: A Practical Guide',
    description:
      'Learn dollar-cost averaging (DCA), why people stack Satoshis instead of timing the market, common sat targets, and when to move sats to self-custody.',
    h1: 'Stacking Sats & Dollar-Cost Averaging',
    intro:
      '“Stacking sats” means accumulating Satoshis steadily over time — usually through small, repeated buys rather than one big bet. Dollar-cost averaging (DCA) is the simplest way to do it without trying to predict price.',
    breadcrumbLabel: 'Stacking Sats & DCA',
    hasAffiliateLinks: true,
    readTimeMinutes: 10,
    datePublished: '2026-06-29',
    dateModified: '2026-06-29',
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
  'usd-to-satoshi',
  'how-many-satoshis-in-a-bitcoin',
  'bitcoin-self-custody-basics',
  'run-your-own-bitcoin-node',
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
