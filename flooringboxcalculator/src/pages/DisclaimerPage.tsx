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
        {SITE_NAME} provides flooring estimates for informational purposes only. Results depend on the measurements
        and settings you enter. Always verify square footage, waste factors, and box coverage against your product
        labels and room conditions before purchasing materials.
      </p>
      <p>
        We are not responsible for ordering errors, installation outcomes, or costs arising from use of this
        calculator. Room shapes other than simple rectangles, pattern layouts, subfloor prep, and trim are not included
        in these estimates.
      </p>
      <p>
        This site does not currently use affiliate links. If that changes, qualifying links and the relationship will
        be clearly disclosed.
      </p>
      <p>
        By using {SITE_NAME}, you agree that you use the tool at your own risk and that professional measurement on
        site is recommended for large or complex projects.
      </p>
    </LegalPageLayout>
  );
}
