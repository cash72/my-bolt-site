import LegalPageLayout from '../components/LegalPageLayout';
import { usePageMeta } from '../hooks/usePageMeta';
import { SITE_NAME } from '../lib/site';

export default function DisclaimerPage() {
  usePageMeta({
    title: 'Disclaimer',
    description: `${SITE_NAME} disclaimer — calculator results are estimates only and not medical advice.`,
    path: '/disclaimer',
  });

  return (
    <LegalPageLayout title="Disclaimer">
      <p>
        {SITE_NAME} provides nutrition and macro estimates for informational and educational purposes only. Results
        depend on the values you enter and simplified formulas. They are not a substitute for professional medical,
        nutritional, or dietary advice.
      </p>
      <p>
        Do not use this site to diagnose, treat, or manage any medical condition. Consult your physician or registered
        dietitian before starting or changing a diet — especially if you have diabetes, take insulin or other glucose-lowering
        medications, have kidney disease, are pregnant or breastfeeding, or have a history of eating disorders.
      </p>
      <p>
        Net carb calculations vary by product, region, and individual tolerance. Sugar alcohols and fiber affect people
        differently. Macro targets here use general assumptions (such as Mifflin-St Jeor for calories and fixed net-carb
        caps per plan) that may not fit your needs.
      </p>
      <p>
        We are not responsible for health outcomes, medication interactions, or errors arising from use of these
        calculators. By using {SITE_NAME}, you agree that you use the tools at your own risk.
      </p>
      <p>
        Links to products or services may be affiliate links. If you purchase through those links, we may earn a
        commission at no extra cost to you.
      </p>
    </LegalPageLayout>
  );
}
