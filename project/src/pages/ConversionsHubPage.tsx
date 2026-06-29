import { Link } from 'react-router-dom';
import { ArrowRight, ArrowRightLeft, BookOpen } from 'lucide-react';
import { usePageMeta } from '../hooks/usePageMeta';
import { CURRENCY_LABELS, CURRENCY_NAMES, FIAT_CURRENCIES, type FiatCurrency } from '../lib/conversion';
import { FEATURED_GUIDES } from '../lib/guides';
import { FEATURED_LANDING_LINKS, LANDING_PAGES } from '../lib/landingPages';

function AmountLinkGrid({ pages }: { pages: typeof LANDING_PAGES }) {
  return (
    <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
      {pages.map((page) => (
        <li key={page.slug}>
          <Link
            to={page.path}
            className="block rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 py-3 text-sm font-medium hover:border-orange-300 dark:hover:border-orange-700 transition-colors"
          >
            {page.breadcrumbLabel}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default function ConversionsHubPage() {
  usePageMeta({
    title: 'All Satoshi Conversions — USD, EUR, GBP & CAD',
    description:
      'Browse every SatoshiCalc conversion: currency hubs, common satoshi amounts, and reverse fiat-to-satoshi calculators with live Bitcoin prices.',
    path: '/conversions',
  });

  const satoshiHubs = LANDING_PAGES.filter((p) => p.kind === 'satoshi-to-fiat-hub');
  const fiatHubs = LANDING_PAGES.filter((p) => p.kind === 'fiat-to-satoshi-hub');

  const satoshiAmountsByCurrency = Object.fromEntries(
    FIAT_CURRENCIES.map((currency) => [
      currency,
      LANDING_PAGES.filter((p) => p.kind === 'satoshi-to-fiat-amount' && p.currency === currency),
    ])
  ) as Record<FiatCurrency, typeof LANDING_PAGES>;

  const fiatAmountsByCurrency = Object.fromEntries(
    FIAT_CURRENCIES.map((currency) => [
      currency,
      LANDING_PAGES.filter((p) => p.kind === 'fiat-to-satoshi-amount' && p.currency === currency),
    ])
  ) as Record<FiatCurrency, typeof LANDING_PAGES>;

  return (
    <main id="main-content" className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12" role="main">
      <header className="mb-10">
        <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-3">
          <ArrowRightLeft className="w-4 h-4" aria-hidden="true" />
          <span>All conversion tools</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">Satoshi Conversion Directory</h1>
        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
          Every live calculator on SatoshiCalc in one place. Prices refresh every 60 seconds from CoinGecko. For
          deeper explanations, see our{' '}
          <Link to="/guides" className="text-orange-600 dark:text-orange-400 hover:underline">
            Bitcoin guides
          </Link>
          .
        </p>
      </header>

      <section className="mb-12" aria-labelledby="currency-hubs-heading">
        <h2 id="currency-hubs-heading" className="text-xl font-bold mb-4">
          Satoshi to fiat
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {satoshiHubs.map((page) => (
            <li key={page.slug}>
              <Link
                to={page.path}
                className="block rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 py-3 text-sm font-medium hover:border-orange-300 dark:hover:border-orange-700 transition-colors"
              >
                Satoshi → {CURRENCY_LABELS[page.currency]}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {FIAT_CURRENCIES.map((currency) => (
        <section key={`sats-${currency}`} className="mb-12" aria-labelledby={`sats-${currency}-heading`}>
          <h2 id={`sats-${currency}-heading`} className="text-xl font-bold mb-4">
            Common satoshi amounts ({CURRENCY_LABELS[currency]})
          </h2>
          <AmountLinkGrid pages={satoshiAmountsByCurrency[currency]} />
        </section>
      ))}

      <section className="mb-12" aria-labelledby="reverse-hubs-heading">
        <h2 id="reverse-hubs-heading" className="text-xl font-bold mb-4">
          Fiat to Satoshi
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {fiatHubs.map((page) => (
            <li key={page.slug}>
              <Link
                to={page.path}
                className="block rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 py-3 text-sm font-medium hover:border-orange-300 dark:hover:border-orange-700 transition-colors"
              >
                {CURRENCY_LABELS[page.currency]} → Satoshi
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {FIAT_CURRENCIES.map((currency) => (
        <section key={`fiat-${currency}`} className="mb-12" aria-labelledby={`fiat-${currency}-heading`}>
          <h2 id={`fiat-${currency}-heading`} className="text-xl font-bold mb-4">
            Common {CURRENCY_NAMES[currency].toLowerCase()} amounts in sats
          </h2>
          <AmountLinkGrid pages={fiatAmountsByCurrency[currency]} />
        </section>
      ))}

      <section className="mb-12" aria-labelledby="featured-heading">
        <h2 id="featured-heading" className="text-xl font-bold mb-4">
          Featured conversions
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {FEATURED_LANDING_LINKS.map((page) => (
            <li key={page.slug}>
              <Link
                to={page.path}
                className="block rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 py-3 text-sm font-medium hover:border-orange-300 dark:hover:border-orange-700 transition-colors"
              >
                {page.breadcrumbLabel}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section
        className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8"
        aria-labelledby="guides-heading"
      >
        <div className="flex items-center gap-2 mb-4">
          <BookOpen className="w-5 h-5 text-orange-500" aria-hidden="true" />
          <h2 id="guides-heading" className="text-xl font-bold">
            Learn Bitcoin basics
          </h2>
        </div>
        <ul className="space-y-2 mb-6">
          {FEATURED_GUIDES.map((guide) => (
            <li key={guide.slug}>
              <Link
                to={guide.path}
                className="text-orange-600 dark:text-orange-400 hover:underline font-medium"
              >
                {guide.h1}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-orange-500 text-white font-semibold hover:bg-orange-600 transition-colors"
        >
          Open main converter
          <ArrowRight className="w-4 h-4" aria-hidden="true" />
        </Link>
      </section>
    </main>
  );
}
