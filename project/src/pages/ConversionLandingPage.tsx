import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  ArrowRight,
  Bitcoin,
  ChevronRight,
  CircleDollarSign,
  DollarSign,
  Euro,
  PoundSterling,
  RefreshCw,
  TrendingUp,
} from 'lucide-react';
import { usePageMeta } from '../hooks/usePageMeta';
import { useBitcoinPrice } from '../hooks/useBitcoinPrice';
import {
  CURRENCY_LABELS,
  CURRENCY_NAMES,
  SATOSHI_PER_BTC,
  fiatToSatoshi,
  formatCurrency,
  formatNumber,
  formatSatoshiAmount,
  getBtcPrice,
  satoshiToFiat,
  type FiatCurrency,
} from '../lib/conversion';
import {
  getLandingPageBySlug,
  getRelatedLandingPages,
  type LandingPageDef,
} from '../lib/landingPages';
import { SITE_URL } from '../lib/site';

const currencyIcons: Record<FiatCurrency, React.ReactNode> = {
  usd: <DollarSign className="w-4 h-4" aria-hidden="true" />,
  eur: <Euro className="w-4 h-4" aria-hidden="true" />,
  gbp: <PoundSterling className="w-4 h-4" aria-hidden="true" />,
  cad: <CircleDollarSign className="w-4 h-4" aria-hidden="true" />,
};

function LandingNotFound() {
  usePageMeta({
    title: 'Page Not Found',
    description: 'The conversion page you requested could not be found.',
    path: '/404',
  });

  return (
    <main id="main-content" className="max-w-5xl mx-auto px-4 sm:px-6 py-16" role="main">
      <h1 className="text-2xl font-bold mb-4">Page not found</h1>
      <p className="text-slate-600 dark:text-slate-300 mb-6">
        That conversion page does not exist. Try the main converter instead.
      </p>
      <Link
        to="/"
        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-orange-500 text-white font-medium hover:bg-orange-600 transition-colors"
      >
        Go to converter
        <ArrowRight className="w-4 h-4" aria-hidden="true" />
      </Link>
    </main>
  );
}

function Breadcrumbs({ page }: { page: LandingPageDef }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6 text-sm text-slate-500 dark:text-slate-400">
      <ol className="flex flex-wrap items-center gap-1">
        <li>
          <Link to="/" className="hover:text-orange-600 dark:hover:text-orange-400">
            Home
          </Link>
        </li>
        <li aria-hidden="true">
          <ChevronRight className="w-3.5 h-3.5 inline" />
        </li>
        <li className="text-slate-700 dark:text-slate-300 font-medium">{page.breadcrumbLabel}</li>
      </ol>
    </nav>
  );
}

function LandingPageContent({ page }: { page: LandingPageDef }) {
  usePageMeta({
    title: page.title,
    description: page.description,
    path: page.path,
  });

  const { priceData, loading, error, lastUpdated, countdown } = useBitcoinPrice();
  const btcPrice = getBtcPrice(priceData, page.currency);
  const label = CURRENCY_LABELS[page.currency];
  const currencyName = CURRENCY_NAMES[page.currency];
  const related = getRelatedLandingPages(page);

  const isSatoshiToFiat = page.direction === 'satoshi-to-fiat';
  const fiatResult = satoshiToFiat(page.amount, btcPrice);
  const satoshiResult = Math.floor(fiatToSatoshi(page.amount, btcPrice));
  const btcEquivalent = isSatoshiToFiat
    ? page.amount / SATOSHI_PER_BTC
    : satoshiResult / SATOSHI_PER_BTC;

  const formulaText = isSatoshiToFiat
    ? `${formatSatoshiAmount(page.amount)} sats × (${formatCurrency(btcPrice, page.currency)} BTC price ÷ 100,000,000)`
    : `${formatCurrency(page.amount, page.currency)} ÷ ${formatCurrency(btcPrice, page.currency)} × 100,000,000 sats`;

  useEffect(() => {
    const faqItems = isSatoshiToFiat
      ? [
          {
            question: `How much is ${formatSatoshiAmount(page.amount)} Satoshi in ${label}?`,
            answer:
              btcPrice > 0
                ? `${formatSatoshiAmount(page.amount)} Satoshis equals ${formatCurrency(fiatResult, page.currency)} ${label} at the current Bitcoin price of ${formatCurrency(btcPrice, page.currency)}.`
                : 'Live price loading — refresh in a moment for the current conversion.',
          },
          {
            question: `How do you convert Satoshi to ${label}?`,
            answer: `Multiply the Satoshi amount by the live BTC price in ${label}, then divide by 100,000,000 because there are 100 million Satoshis in one Bitcoin.`,
          },
        ]
      : [
          {
            question: `How many Satoshis is ${page.amount} ${label}?`,
            answer:
              btcPrice > 0
                ? `${page.amount} ${label} buys about ${formatSatoshiAmount(satoshiResult)} Satoshis at a Bitcoin price of ${formatCurrency(btcPrice, page.currency)}.`
                : 'Live price loading — refresh in a moment for the current conversion.',
          },
          {
            question: `How do you convert ${label} to Satoshi?`,
            answer: `Divide your ${label} amount by the live Bitcoin price, then multiply by 100,000,000 to get the Satoshi equivalent.`,
          },
        ];

    const scriptId = 'landing-faq-schema';
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }

    script.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqItems.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      })),
    });

    const breadcrumbId = 'landing-breadcrumb-schema';
    let breadcrumbScript = document.getElementById(breadcrumbId) as HTMLScriptElement | null;
    if (!breadcrumbScript) {
      breadcrumbScript = document.createElement('script');
      breadcrumbScript.id = breadcrumbId;
      breadcrumbScript.type = 'application/ld+json';
      document.head.appendChild(breadcrumbScript);
    }

    breadcrumbScript.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: `${SITE_URL}/`,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: page.breadcrumbLabel,
          item: `${SITE_URL}${page.path}`,
        },
      ],
    });

    return () => {
      document.getElementById(scriptId)?.remove();
      document.getElementById(breadcrumbId)?.remove();
    };
  }, [page, btcPrice, fiatResult, satoshiResult, isSatoshiToFiat, label]);

  return (
    <main id="main-content" className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12" role="main">
      <Breadcrumbs page={page} />

      <header className="mb-8 animate-fade-in">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">{page.h1}</h1>
        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">{page.intro}</p>
      </header>

      {error && (
        <div
          className="mb-6 p-4 rounded-xl bg-rose-50 dark:bg-rose-900/20 border border-rose-200 dark:border-rose-800 text-rose-700 dark:text-rose-300 text-sm"
          role="alert"
        >
          {error}
        </div>
      )}

      <section
        className="mb-10 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm animate-slide-up"
        aria-label="Live conversion result"
      >
        <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-4">
          <TrendingUp className="w-4 h-4" aria-hidden="true" />
          <span>
            Live Bitcoin price in {label}:{' '}
            <strong className="text-slate-800 dark:text-slate-200">
              {btcPrice > 0 ? formatCurrency(btcPrice, page.currency) : '—'}
            </strong>
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-slate-50 dark:bg-slate-850 rounded-xl p-5 border border-slate-100 dark:border-slate-800">
            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 mb-2">
              {isSatoshiToFiat ? (
                <>
                  <Bitcoin className="w-4 h-4 text-orange-500" aria-hidden="true" />
                  <span className="text-sm font-medium">Satoshis</span>
                </>
              ) : (
                <>
                  <span aria-hidden="true">{currencyIcons[page.currency]}</span>
                  <span className="text-sm font-medium">{label}</span>
                </>
              )}
            </div>
            <p className="text-2xl sm:text-3xl font-bold tracking-tight">
              {isSatoshiToFiat
                ? `${formatSatoshiAmount(page.amount)} sats`
                : formatCurrency(page.amount, page.currency)}
            </p>
            {isSatoshiToFiat && (
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">= {formatNumber(btcEquivalent)} BTC</p>
            )}
          </div>

          <div className="bg-orange-50 dark:bg-orange-900/20 rounded-xl p-5 border border-orange-100 dark:border-orange-900/40">
            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 mb-2">
              {isSatoshiToFiat ? (
                <>
                  <span aria-hidden="true">{currencyIcons[page.currency]}</span>
                  <span className="text-sm font-medium">{label}</span>
                </>
              ) : (
                <>
                  <Bitcoin className="w-4 h-4 text-orange-500" aria-hidden="true" />
                  <span className="text-sm font-medium">Satoshis</span>
                </>
              )}
            </div>
            <p className="text-2xl sm:text-3xl font-bold tracking-tight text-orange-700 dark:text-orange-300">
              {loading && btcPrice === 0
                ? 'Loading…'
                : isSatoshiToFiat
                  ? formatCurrency(fiatResult, page.currency)
                  : `${formatSatoshiAmount(satoshiResult)} sats`}
            </p>
            {!isSatoshiToFiat && btcPrice > 0 && (
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">= {formatNumber(btcEquivalent)} BTC</p>
            )}
          </div>
        </div>

        <p className="mt-5 text-sm text-slate-500 dark:text-slate-400">
          Formula: {formulaText}
          {btcPrice === 0 && !loading ? ' (price unavailable)' : ''}
        </p>

        <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3 text-sm text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-2">
            <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} aria-hidden="true" />
            <span>{lastUpdated ? `Updated ${lastUpdated.toLocaleTimeString()}` : 'Loading…'}</span>
          </div>
          <span>Next update in {countdown}s · {currencyName} rates from CoinGecko</span>
        </div>
      </section>

      <section className="mb-10 prose prose-slate dark:prose-invert max-w-none">
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed">
          <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 mt-0">
            About this conversion
          </h2>
          {isSatoshiToFiat ? (
            <>
              <p>
                One Bitcoin equals exactly {formatSatoshiAmount(SATOSHI_PER_BTC)} Satoshis. To convert sats to{' '}
                {label}, multiply your Satoshi count by the current BTC/{label} price, then divide by 100 million.
              </p>
              <p>
                Because Bitcoin trades 24/7, the {label} value of {formatSatoshiAmount(page.amount)} sats changes
                with the market. SatoshiCalc refreshes prices every 60 seconds so you always see a current estimate.
              </p>
            </>
          ) : (
            <>
              <p>
                To buy Bitcoin with {label}, exchanges quote a BTC/{label} price. Dividing your {label} budget by
                that price gives the BTC amount; multiply by 100,000,000 for Satoshis.
              </p>
              <p>
                {page.amount} {label} is a practical amount for estimating stack sizes, tips, or small purchases.
                Use the full converter on the homepage to try other amounts and currencies.
              </p>
            </>
          )}
        </div>
      </section>

      <section className="mb-10" aria-label="Related conversions">
        <h2 className="text-xl font-bold mb-4">Related conversions</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {related.map((relatedPage) => (
            <li key={relatedPage.slug}>
              <Link
                to={relatedPage.path}
                className="block rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 py-3 text-sm font-medium hover:border-orange-300 dark:hover:border-orange-700 transition-colors"
              >
                {relatedPage.breadcrumbLabel}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="text-center">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-orange-500 text-white font-semibold hover:bg-orange-600 transition-colors"
        >
          Open full converter
          <ArrowRight className="w-4 h-4" aria-hidden="true" />
        </Link>
        <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">
          Convert any amount across USD, EUR, GBP, and CAD with charts and quick reference tables.
        </p>
      </section>
    </main>
  );
}

export default function ConversionLandingPage() {
  const { slug } = useParams<{ slug: string }>();
  const page = getLandingPageBySlug(slug);

  if (!page) {
    return <LandingNotFound />;
  }

  return <LandingPageContent page={page} />;
}
