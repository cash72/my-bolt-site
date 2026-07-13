import LegalPageLayout from '../components/LegalPageLayout';
import { usePageMeta } from '../hooks/usePageMeta';
import { SITE_NAME } from '../lib/site';

export default function DisclaimerPage() {
  usePageMeta({
    title: 'Disclaimer',
    description: `${SITE_NAME} disclaimer — independent reviews, affiliate links, and pricing accuracy.`,
    path: '/disclaimer',
  });

  return (
    <LegalPageLayout title="Disclaimer">
      <p>
        {SITE_NAME} publishes software comparisons for informational purposes only. We are not financial, legal, or
        business advisors. Purchasing decisions are yours alone.
      </p>
      <p>
        Pricing, features, and product names change frequently. Figures on this site are estimates from public sources
        at the time of writing. Always confirm current plans on each vendor&apos;s website before signing a contract.
      </p>
      <p>
        <strong>Affiliate disclosure:</strong> Some links to software vendors are affiliate links. If you sign up
        through those links, we may earn a commission at no additional cost to you. Affiliate relationships do not
        determine our written comparisons — we list pros, cons, and alternatives for each tool.
      </p>
      <p>
        <strong>Advertising:</strong> We may display third-party ads (e.g. Google AdSense). Ad content is served by
        those networks and is not an endorsement by {SITE_NAME}.
      </p>
      <p>
        By using this site, you agree that {SITE_NAME} is not liable for losses arising from software purchases,
        implementation, or business decisions based on our content.
      </p>
    </LegalPageLayout>
  );
}
