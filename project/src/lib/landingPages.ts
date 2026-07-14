import landingConfig from '../../seo/landing-config.json';
import {
  CURRENCY_LABELS,
  CURRENCY_NAMES,
  CURRENCY_SLUG_NAMES,
  type FiatCurrency,
  formatSatoshiAmount,
} from './conversion';

export type LandingPageKind =
  | 'satoshi-to-fiat-hub'
  | 'satoshi-to-fiat-amount'
  | 'fiat-to-satoshi-hub'
  | 'fiat-to-satoshi-amount';

export interface LandingPageDef {
  slug: string;
  path: string;
  kind: LandingPageKind;
  direction: 'satoshi-to-fiat' | 'fiat-to-satoshi';
  amount: number;
  currency: FiatCurrency;
  title: string;
  description: string;
  h1: string;
  intro: string;
  breadcrumbLabel: string;
}

const DEFAULT_SATOSHI_HUB_AMOUNT = 100_000;
const DEFAULT_FIAT_HUB_AMOUNT = 100;

function satoshiAmountIntro(amount: number, label: string, formatted: string): string {
  if (amount <= 10) {
    return `${formatted} Satoshis is a dust-level amount — useful for learning Bitcoin's divisibility and Lightning micro-payments. See the live ${label} value below.`;
  }
  if (amount <= 1_000) {
    return `${formatted} Satoshis is a common Lightning tip and zap size. This page shows the live ${label} equivalent at today's Bitcoin price.`;
  }
  if (amount <= 10_000) {
    return `${formatted} Satoshis is a round figure for small Bitcoin payments and budgeting in ${label}. Live conversion below — updated every 60 seconds.`;
  }
  if (amount <= 100_000) {
    return `${formatted} Satoshis is a stacking milestone many holders track. See the live ${label} value for exactly ${formatted} sats at the current BTC price.`;
  }
  if (amount <= 1_000_000) {
    return `${formatted} Satoshis (${(amount / 100_000_000).toFixed(amount >= 100_000 ? 4 : 6)} BTC) is a serious stack. This page shows the live ${label} equivalent at today's market price.`;
  }
  return `${formatted} Satoshis (${amount / 100_000_000} BTC) is a major Bitcoin position. See the live ${label} value below using real-time CoinGecko data.`;
}

function fiatAmountIntro(amount: number, label: string, name: string): string {
  if (amount <= 1) {
    return `How many Satoshis is ${amount} ${label}? See the live sats equivalent at today's Bitcoin price — useful for wallet tests and first transactions.`;
  }
  if (amount <= 10) {
    return `${amount} ${label} is a popular first-buy size on mobile apps. This page shows exactly how many sats that equals at the live BTC/${label} price.`;
  }
  if (amount <= 100) {
    return `${amount} ${label} is one of the most searched fiat amounts for Bitcoin buyers. See the live satoshi equivalent at today's ${name.toLowerCase()} rate.`;
  }
  return `${amount} ${label} converts to a large satoshi stack at the live Bitcoin price. Exact sats equivalent below — updated every 60 seconds.`;
}

function buildSatoshiHubPage(currency: FiatCurrency): LandingPageDef {
  const label = CURRENCY_LABELS[currency];
  const name = CURRENCY_NAMES[currency];
  const slug = `satoshi-to-${currency}`;

  const title =
    currency === 'usd'
      ? 'Satoshi to USD Converter — Live Price Today'
      : currency === 'eur'
        ? 'Satoshi to EUR — Live Euro Conversion (2026)'
        : currency === 'gbp'
          ? 'Satoshi to GBP — Live Pound Conversion Today'
          : 'Satoshi to CAD — Live Canadian Dollar Price';

  const description =
    currency === 'usd'
      ? 'Convert Satoshis to USD at the live Bitcoin price. Free calculator — updated every 60 seconds from CoinGecko.'
      : `Convert Satoshis to ${label} (${name}) at the live Bitcoin price. Free ${label} calculator for stackers — updated every 60 seconds.`;

  return {
    slug,
    path: `/${slug}`,
    kind: 'satoshi-to-fiat-hub',
    direction: 'satoshi-to-fiat',
    amount: DEFAULT_SATOSHI_HUB_AMOUNT,
    currency,
    title,
    description,
    h1: `Satoshi to ${label} Converter`,
    intro: `See how many ${label} your Satoshis are worth at today's Bitcoin price. Enter any amount in sats for an instant ${label} value — or jump to fixed amounts like 50,000 and 100,000 sats.`,
    breadcrumbLabel: `Satoshi to ${label}`,
  };
}

function buildSatoshiAmountPage(amount: number, currency: FiatCurrency): LandingPageDef {
  const label = CURRENCY_LABELS[currency];
  const slug = `${amount}-satoshi-to-${currency}`;
  const formatted = formatSatoshiAmount(amount);

  return {
    slug,
    path: `/${slug}`,
    kind: 'satoshi-to-fiat-amount',
    direction: 'satoshi-to-fiat',
    amount,
    currency,
    title: `${formatted} Satoshi to ${label} — Live Price Today`,
    description: `How much is ${formatted} Satoshis in ${label}? See the live ${label} value at today's Bitcoin price. Free calculator — updated every 60 seconds.`,
    h1: `${formatted} Satoshi to ${label}`,
    intro: satoshiAmountIntro(amount, label, formatted),
    breadcrumbLabel: `${formatted} sats → ${label}`,
  };
}

function buildFiatHubPage(currency: FiatCurrency): LandingPageDef {
  const label = CURRENCY_LABELS[currency];
  const name = CURRENCY_NAMES[currency];
  const slug = `${currency}-to-satoshi`;

  const title =
    currency === 'usd'
      ? 'USD to Satoshi — How Many Sats per Dollar? (Live 2026)'
      : currency === 'eur'
        ? 'EUR to Satoshi — How Many Sats per Euro? (Live 2026)'
        : currency === 'gbp'
          ? 'GBP to Satoshi — How Many Sats per Pound? (Live 2026)'
          : currency === 'cad'
            ? 'CAD to Satoshi — How Many Sats per Dollar? (Live 2026)'
            : `${label} to Satoshi Converter — Live Sats Calculator`;

  const description =
    currency === 'usd'
      ? 'How many Satoshis is $100 USD? Convert any dollar amount to sats at the live BTC price. Free calculator — updated every 60 seconds.'
      : currency === 'eur'
        ? 'How many Satoshis is €100 EUR? Convert any euro amount to sats at the live BTC price. Free calculator — updated every 60 seconds.'
        : currency === 'gbp'
          ? 'How many Satoshis is £100 GBP? Convert any pound amount to sats at the live BTC price. Free calculator — updated every 60 seconds.'
          : currency === 'cad'
            ? 'How many Satoshis is $100 CAD? Convert any Canadian dollar amount to sats at the live BTC price. Free calculator — updated every 60 seconds.'
            : `Convert ${label} (${name}) to Satoshis at the live Bitcoin price. Free reverse calculator — updated every 60 seconds.`;

  return {
    slug,
    path: `/${slug}`,
    kind: 'fiat-to-satoshi-hub',
    direction: 'fiat-to-satoshi',
    amount: DEFAULT_FIAT_HUB_AMOUNT,
    currency,
    title,
    description,
    h1: `${label} to Satoshi Converter`,
    intro: `Find out how many Satoshis you can buy for any ${label} amount at the current Bitcoin price. SatoshiCalc uses live CoinGecko rates for accurate results.`,
    breadcrumbLabel: `${label} to Satoshi`,
  };
}

function buildFiatAmountPage(amount: number, currency: FiatCurrency): LandingPageDef {
  const label = CURRENCY_LABELS[currency];
  const name = CURRENCY_NAMES[currency];
  const slugName = CURRENCY_SLUG_NAMES[currency];
  const slug = `${amount}-${slugName}-in-satoshi`;

  return {
    slug,
    path: `/${slug}`,
    kind: 'fiat-to-satoshi-amount',
    direction: 'fiat-to-satoshi',
    amount,
    currency,
    title: `${amount} ${label} in Satoshi — Live Sats Calculator`,
    description: `How many Satoshis is ${amount} ${label}? See the live sats equivalent at today's Bitcoin price in ${name}. Updated every 60 seconds.`,
    h1: `${amount} ${label} in Satoshi`,
    intro: fiatAmountIntro(amount, label, name),
    breadcrumbLabel: `${amount} ${label} → sats`,
  };
}

function generateLandingPages(): LandingPageDef[] {
  const currencies = landingConfig.currencies as FiatCurrency[];
  const satoshiAmounts = landingConfig.satoshiAmounts;
  const fiatAmounts = landingConfig.fiatAmounts;

  const pages: LandingPageDef[] = [];

  for (const currency of currencies) {
    pages.push(buildSatoshiHubPage(currency));
  }

  for (const currency of currencies) {
    for (const amount of satoshiAmounts) {
      pages.push(buildSatoshiAmountPage(amount, currency));
    }
  }

  for (const currency of currencies) {
    pages.push(buildFiatHubPage(currency));
  }

  for (const currency of currencies) {
    for (const amount of fiatAmounts) {
      pages.push(buildFiatAmountPage(amount, currency));
    }
  }

  return pages;
}

export const LANDING_PAGES = generateLandingPages();

export const LANDING_PAGE_BY_SLUG = new Map(LANDING_PAGES.map((page) => [page.slug, page]));

export function getLandingPageBySlug(slug: string | undefined): LandingPageDef | undefined {
  if (!slug) return undefined;
  return LANDING_PAGE_BY_SLUG.get(slug);
}

export function getRelatedLandingPages(page: LandingPageDef, limit = 8): LandingPageDef[] {
  const hubPriorityAmounts = [1_000, 10_000, 50_000, 100_000, 1_000_000];

  if (page.kind === 'satoshi-to-fiat-hub') {
    const priority = hubPriorityAmounts
      .map((amount) => LANDING_PAGE_BY_SLUG.get(`${amount}-satoshi-to-${page.currency}`))
      .filter((p): p is LandingPageDef => p !== undefined);
    const reverse = LANDING_PAGE_BY_SLUG.get(`${page.currency}-to-satoshi`);
    const rest = LANDING_PAGES.filter(
      (p) =>
        p.slug !== page.slug &&
        !priority.some((pr) => pr.slug === p.slug) &&
        p.direction === page.direction
    );
    const merged = [...priority, ...(reverse ? [reverse] : []), ...rest];
    return merged.slice(0, limit);
  }

  const sameDirection = LANDING_PAGES.filter(
    (p) => p.direction === page.direction && p.slug !== page.slug
  );

  const sameCurrency = sameDirection.filter((p) => p.currency === page.currency);
  const otherCurrency = sameDirection.filter((p) => p.currency !== page.currency);

  const prioritized = [...sameCurrency, ...otherCurrency];
  return prioritized.slice(0, limit);
}

/** Curated links for site footer and homepage cross-linking */
export const FEATURED_LANDING_LINKS: LandingPageDef[] = [
  'satoshi-to-usd',
  'satoshi-to-eur',
  'satoshi-to-gbp',
  'satoshi-to-cad',
  '500-satoshi-to-usd',
  '5000-satoshi-to-usd',
  '1000-satoshi-to-usd',
  '50000-satoshi-to-usd',
  '100000-satoshi-to-usd',
  '10000000-satoshi-to-usd',
  'usd-to-satoshi',
  '100-dollars-in-satoshi',
]
  .map((slug) => LANDING_PAGE_BY_SLUG.get(slug))
  .filter((page): page is LandingPageDef => page !== undefined);

export const LANDING_PATHS = LANDING_PAGES.map((p) => p.path);
