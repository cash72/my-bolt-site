import LegalPageLayout from '../components/LegalPageLayout';
import { usePageMeta } from '../hooks/usePageMeta';
import { CONTACT_EMAIL, SITE_NAME } from '../lib/site';

export default function DisclaimerPage() {
  usePageMeta({
    title: 'Disclaimer',
    description: `Financial disclaimer for ${SITE_NAME}. Not investment advice. Cryptocurrency involves risk.`,
    path: '/disclaimer',
  });

  return (
    <LegalPageLayout title="Disclaimer">
      <p>
        <strong>Last updated:</strong> June 2026
      </p>
      <p>
        The information provided on {SITE_NAME} is for <strong>general educational and informational purposes
        only</strong>. It is not intended as financial, investment, tax, or legal advice.
      </p>
      <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100 pt-2">Not financial advice</h2>
      <p>
        We do not recommend buying, selling, or holding any cryptocurrency. Conversion results are mathematical
        calculations based on third-party market data. You should consult a qualified financial advisor before
        making investment decisions.
      </p>
      <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100 pt-2">Price accuracy</h2>
      <p>
        Bitcoin prices change constantly. While we refresh data every 60 seconds from CoinGecko, displayed values
        may differ from exchange prices, include delays, or contain errors. Do not rely on this site for
        time-sensitive trades or accounting.
      </p>
      <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100 pt-2">Risk disclosure</h2>
      <p>
        Cryptocurrency is highly volatile and may result in partial or total loss of capital. Past performance
        does not guarantee future results. Only invest what you can afford to lose.
      </p>
      <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100 pt-2">Affiliate links &amp; advertising</h2>
      <p>
        Some guides and product recommendations include <strong>affiliate links</strong>. If you purchase through
        those links, {SITE_NAME} may earn a commission at no extra cost to you. We only link to products we believe
        are relevant to Bitcoin education and self-custody.
      </p>
      <p>
        Affiliate relationships do not change our obligation to provide accurate conversion data on the calculator.
        Product opinions are our own. We are not responsible for third-party products, shipping, or support.
      </p>
      <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100 pt-2">Limitation of liability</h2>
      <p>
        {SITE_NAME} and its operators shall not be liable for any damages arising from use of this website,
        including financial losses related to reliance on displayed conversion rates.
      </p>
      <p>
        Questions? Contact{' '}
        <a href={`mailto:${CONTACT_EMAIL}`} className="text-orange-600 dark:text-orange-400 hover:underline">
          {CONTACT_EMAIL}
        </a>
        .
      </p>
    </LegalPageLayout>
  );
}
