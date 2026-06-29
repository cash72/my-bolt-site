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

function buildSatoshiHubPage(currency: FiatCurrency): LandingPageDef {
  const label = CURRENCY_LABELS[currency];
  const name = CURRENCY_NAMES[currency];
  const slug = `satoshi-to-${currency}`;

  return {
    slug,
    path: `/${slug}`,
    kind: 'satoshi-to-fiat-hub',
    direction: 'satoshi-to-fiat',
    amount: DEFAULT_SATOSHI_HUB_AMOUNT,
    currency,
    title: `Satoshi to ${label} Converter | Live Bitcoin Price`,
    description: `Convert Satoshis to ${label} (${name}) at the live Bitcoin price. Free calculator with rates updated every 60 seconds from CoinGecko.`,
    h1: `Satoshi to ${label} Converter`,
    intro: `See how many ${label} your Satoshis are worth at today's Bitcoin price. Enter any amount in sats and get an instant ${label} value using live market data.`,
    breadcrumbLabel: `Satoshi to ${label}`,
  };
}

function buildSatoshiAmountPage(amount: number, currency: FiatCurrency): LandingPageDef {
  const label = CURRENCY_LABELS[currency];
  const name = CURRENCY_NAMES[currency];
  const slug = `${amount}-satoshi-to-${currency}`;
  const formatted = formatSatoshiAmount(amount);

  return {
    slug,
    path: `/${slug}`,
    kind: 'satoshi-to-fiat-amount',
    direction: 'satoshi-to-fiat',
    amount,
    currency,
    title: `${formatted} Satoshi to ${label} | Live Price`,
    description: `How much is ${formatted} Satoshis in ${label}? Live conversion at the current Bitcoin price in ${name}. Updated every 60 seconds.`,
    h1: `${formatted} Satoshi to ${label}`,
    intro: `${formatted} Satoshis (sats) is a common amount people look up when Bitcoin is priced in whole coins. This page shows the live ${label} value for exactly ${formatted} sats.`,
    breadcrumbLabel: `${formatted} sats → ${label}`,
  };
}

function buildFiatHubPage(currency: FiatCurrency): LandingPageDef {
  const label = CURRENCY_LABELS[currency];
  const name = CURRENCY_NAMES[currency];
  const slug = `${currency}-to-satoshi`;

  return {
    slug,
    path: `/${slug}`,
    kind: 'fiat-to-satoshi-hub',
    direction: 'fiat-to-satoshi',
    amount: DEFAULT_FIAT_HUB_AMOUNT,
    currency,
    title: `${label} to Satoshi Converter | Live Bitcoin Price`,
    description: `Convert ${label} (${name}) to Satoshis at the live Bitcoin price. Free reverse calculator with rates updated every 60 seconds.`,
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
    title: `${amount} ${label} in Satoshi | Live Price`,
    description: `How many Satoshis is ${amount} ${label}? Live conversion at the current Bitcoin price in ${name}. Updated every 60 seconds.`,
    h1: `${amount} ${label} in Satoshi`,
    intro: `At today's Bitcoin price, ${amount} ${label} equals a specific number of Satoshis. This page shows the live sats equivalent for exactly ${amount} ${label}.`,
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
