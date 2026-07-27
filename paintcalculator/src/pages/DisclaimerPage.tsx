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
        {SITE_NAME} provides paint estimates for informational purposes only. Results depend on the measurements and
        settings you enter. Always verify paintable area, coverage rates, and coat counts against your product labels
        and surface conditions before purchasing paint.
      </p>
      <p>
        We are not responsible for ordering errors, application outcomes, or costs arising from use of this calculator.
        Irregular room shapes, textured surfaces, trim, doors, and color-matching touch-ups are not fully captured in
        these estimates.
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
