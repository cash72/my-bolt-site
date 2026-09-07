import { Link } from 'react-router-dom';
import LegalPageLayout from '../components/LegalPageLayout';
import { usePageMeta } from '../hooks/usePageMeta';
import { SITE_NAME } from '../lib/site';
import { BRAND_AFFILIATION_DISCLAIMER } from '../lib/canadianPaintBrands';

export default function DisclaimerPage() {
  usePageMeta({
    title: 'Disclaimer',
    description: `${SITE_NAME} disclaimer — calculator results are estimates only. Not affiliated with paint manufacturers. Verify labels before purchasing.`,
    path: '/disclaimer',
  });

  return (
    <LegalPageLayout title="Disclaimer">
      <p>
        {SITE_NAME} provides paint estimates and DIY how-to for informational purposes only. Results depend on the
        measurements and settings you enter. Always verify paintable area, coverage rates, and coat counts against your
        product labels and surface conditions before purchasing paint.
      </p>
      <p>
        Tool advice (roller nap, brushes, tape, drop cloths) is general beginner guidance, not a substitute for the
        instructions on your paint can or a licensed painter for complex or hazardous work.
      </p>
      <p>
        We are not responsible for ordering errors, application outcomes, or costs arising from use of this calculator.
        Irregular room shapes, textured surfaces, trim, doors, and color-matching touch-ups are not fully captured in
        these estimates.
      </p>
      <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200">Trademarks</h2>
      <p>{BRAND_AFFILIATION_DISCLAIMER}</p>
      <p>
        This site does not currently use affiliate links. If that changes, qualifying links and the relationship will
        be clearly disclosed. See also our{' '}
        <Link to="/terms" className="text-blue-600 dark:text-blue-400 hover:underline">
          Terms of Use
        </Link>
        .
      </p>
      <p>
        By using {SITE_NAME}, you agree that you use the tool at your own risk and that professional measurement on
        site is recommended for large or complex projects.
      </p>
    </LegalPageLayout>
  );
}
