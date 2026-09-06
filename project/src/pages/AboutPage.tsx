import { Link } from 'react-router-dom';
import LegalPageLayout from '../components/LegalPageLayout';
import { usePageMeta } from '../hooks/usePageMeta';
import { CONTACT_EMAIL, SITE_CONTENT_UPDATED, SITE_EDITOR, SITE_NAME, SITE_URL } from '../lib/site';

export default function AboutPage() {
  usePageMeta({
    title: `About ${SITE_NAME}`,
    description:
      'Learn about SatoshiCalc — a free live Satoshi to USD, EUR, GBP, CAD, AUD and INR converter powered by CoinGecko market data.',
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
        {SITE_NAME} is published by the <strong>{SITE_EDITOR}</strong>, an independent group focused on practical
        Bitcoin tools and education. We are not a financial institution, exchange, or investment advisor. Our goal is
        to provide accurate, fast conversions with clear sourcing.
      </p>
      <p className="text-sm text-slate-500 dark:text-slate-400">
        Last updated:{' '}
        {new Date(`${SITE_CONTENT_UPDATED}T12:00:00`).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}
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
        and refresh automatically every 60 seconds. The figure shown is a mid-market spot estimate — exchanges may
        quote a slightly different price after spread and fees.
      </p>
      <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100 pt-2">Supported currencies</h2>
      <p>
        The homepage converter and reverse converter both support six fiat currencies. Dedicated hubs are also
        available when you want a shareable URL:
      </p>
      <ul className="list-disc pl-6 space-y-1">
        <li>
          US Dollar (USD) —{' '}
          <Link to="/satoshi-to-usd" className="text-orange-600 dark:text-orange-400 hover:underline">
            Satoshi to USD
          </Link>
        </li>
        <li>
          Euro (EUR) —{' '}
          <Link to="/satoshi-to-eur" className="text-orange-600 dark:text-orange-400 hover:underline">
            Satoshi to EUR
          </Link>
        </li>
        <li>
          British Pound (GBP) —{' '}
          <Link to="/satoshi-to-gbp" className="text-orange-600 dark:text-orange-400 hover:underline">
            Satoshi to GBP
          </Link>
        </li>
        <li>
          Canadian Dollar (CAD) —{' '}
          <Link to="/satoshi-to-cad" className="text-orange-600 dark:text-orange-400 hover:underline">
            Satoshi to CAD
          </Link>
        </li>
        <li>
          Australian Dollar (AUD) —{' '}
          <Link to="/satoshi-to-aud" className="text-orange-600 dark:text-orange-400 hover:underline">
            Satoshi to AUD
          </Link>
        </li>
        <li>
          Indian Rupee (INR) —{' '}
          <Link to="/satoshi-to-inr" className="text-orange-600 dark:text-orange-400 hover:underline">
            Satoshi to INR
          </Link>
        </li>
      </ul>
      <p>
        Browse the full set of amount pages in the{' '}
        <Link to="/conversions" className="text-orange-600 dark:text-orange-400 hover:underline">
          conversions directory
        </Link>
        .
      </p>
      <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100 pt-2">How conversion works</h2>
      <p>
        Satoshis to fiat: multiply the sat count by the live Bitcoin price in that currency, then divide by
        100,000,000. Fiat to Satoshis: divide the fiat amount by the Bitcoin price, then multiply by 100,000,000.
        The same formula applies to USD, EUR, GBP, CAD, AUD, and INR — only the market pair changes.
      </p>
      <p>
        We also publish educational{' '}
        <Link to="/guides" className="text-orange-600 dark:text-orange-400 hover:underline">
          Bitcoin guides
        </Link>{' '}
        and a{' '}
        <Link to="/bitcoin-fee-calculator" className="text-orange-600 dark:text-orange-400 hover:underline">
          Bitcoin fee calculator
        </Link>{' '}
        for on-chain cost estimates. Conversion results are for planning only — see our{' '}
        <Link to="/disclaimer" className="text-orange-600 dark:text-orange-400 hover:underline">
          Disclaimer
        </Link>
        .
      </p>
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
