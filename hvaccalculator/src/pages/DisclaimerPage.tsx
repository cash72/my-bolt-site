import LegalPageLayout from '../components/LegalPageLayout';
import { usePageMeta } from '../hooks/usePageMeta';
import { SITE_NAME } from '../lib/site';

export default function DisclaimerPage() {
  usePageMeta({
    title: 'Disclaimer',
    description: `${SITE_NAME} disclaimer — BTU and mini-split sizing results are estimates only. Verify with a licensed HVAC professional.`,
    path: '/disclaimer',
  });

  return (
    <LegalPageLayout title="Disclaimer">
      <p>
        {SITE_NAME} provides BTU and mini-split sizing estimates for informational and planning purposes only. Results
        depend on the measurements and settings you enter. Actual heating and cooling loads vary with construction,
        air leakage, ductwork, altitude, and equipment efficiency.
      </p>
      <p>
        This tool is not a Manual J load calculation, Manual S equipment selection, or engineering report. We are not
        responsible for oversizing, undersizing, comfort issues, energy costs, or equipment failures arising from use
        of these estimates. Always verify sizing with a licensed HVAC contractor before purchasing and installing
        equipment — permits and code compliance may apply.
      </p>
      <p>
        This site does not currently use affiliate links. If that changes, qualifying links and the relationship will
        be clearly disclosed.
      </p>
      <p>
        By using {SITE_NAME}, you agree that you use the tool at your own risk and that professional load calculation
        and installation are recommended for all permanent HVAC work.
      </p>
    </LegalPageLayout>
  );
}
