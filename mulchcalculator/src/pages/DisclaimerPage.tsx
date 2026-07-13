import LegalPageLayout from '../components/LegalPageLayout';
import { usePageMeta } from '../hooks/usePageMeta';
import { SITE_NAME } from '../lib/site';

export default function DisclaimerPage() {
  usePageMeta({
    title: 'Disclaimer',
    description: `${SITE_NAME} disclaimer — calculator results are estimates only. Verify measurements before purchasing.`,
    path: '/disclaimer',
  });

  return (
    <LegalPageLayout title="Disclaimer">
      <p>
        {SITE_NAME} provides mulch and landscaping material estimates for informational purposes only. Results depend on
        the measurements and settings you enter. Always verify area, depth, and material quantities against your site
        conditions before purchasing.
      </p>
      <p>
        We are not responsible for ordering errors, application outcomes, or costs arising from use of this calculator.
        Irregular bed shapes, slopes, compaction, and settling are not fully captured in these estimates.
      </p>
      <p>
        Links to retailers or products may be affiliate links. If you purchase through those links, we may earn a
        commission at no extra cost to you.
      </p>
      <p>
        By using {SITE_NAME}, you agree that you use the tool at your own risk and that professional measurement on
        site is recommended for large or complex projects.
      </p>
    </LegalPageLayout>
  );
}
