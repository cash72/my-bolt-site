import { Link } from 'react-router-dom';
import LegalPageLayout from '../components/LegalPageLayout';
import { usePageMeta } from '../hooks/usePageMeta';
import { CONTACT_EMAIL, SITE_NAME, SITE_URL } from '../lib/site';

export default function AboutPage() {
  usePageMeta({
    title: `About ${SITE_NAME}`,
    description:
      'Learn about SatoshiCalc — a free live Satoshi to USD, EUR, GBP and CAD converter powered by CoinGecko market data.',
    path: '/about',
  });

  return (
    <LegalPageLayout title={`About ${SITE_NAME}`}>
      <p>
        <strong>{SITE_NAME}</strong> is a free Bitcoin unit converter that helps you translate between Satoshis
        (sats) and major fiat currencies using live market prices.
      </p>
      <p>
        Bitcoin is often quoted in whole coins, but everyday amounts — tips, payments, and wallet balances — are
        easier to understand in Satoshis. One Bitcoin equals exactly 100,000,000 Satoshis. Our calculator handles
        that math instantly so you do not have to.
      </p>
      <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100 pt-2">Who runs this site?</h2>
      <p>
        {SITE_NAME} is operated by an independent publisher focused on practical Bitcoin tools. We are not a
        financial institution, exchange, or investment advisor. Our goal is to provide accurate, fast conversions
        with clear sourcing.
      </p>
      <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100 pt-2">Where do prices come from?</h2>
      <p>
        Live Bitcoin prices are fetched from the{' '}
        <a
          href="https://www.coingecko.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-orange-600 dark:text-orange-400 hover:underline"
        >
          CoinGecko API
        </a>{' '}
        and refresh automatically every 60 seconds. Historical chart data covers the past 10 days in USD.
      </p>
      <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100 pt-2">Supported currencies</h2>
      <ul className="list-disc pl-6 space-y-1">
        <li>US Dollar (USD)</li>
        <li>Euro (EUR)</li>
        <li>British Pound (GBP)</li>
        <li>Canadian Dollar (CAD)</li>
      </ul>
      <p>
        Questions or corrections?{' '}
        <Link to="/contact" className="text-orange-600 dark:text-orange-400 hover:underline">
          Contact us
        </Link>{' '}
        at{' '}
        <a href={`mailto:${CONTACT_EMAIL}`} className="text-orange-600 dark:text-orange-400 hover:underline">
          {CONTACT_EMAIL}
        </a>
        .
      </p>
      <p className="text-sm text-slate-500 dark:text-slate-400">
        Site URL:{' '}
        <a href={SITE_URL} className="text-orange-600 dark:text-orange-400 hover:underline">
          {SITE_URL}
        </a>
      </p>
    </LegalPageLayout>
  );
}
