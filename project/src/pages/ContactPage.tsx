import LegalPageLayout from '../components/LegalPageLayout';
import { usePageMeta } from '../hooks/usePageMeta';
import { CONTACT_EMAIL, SITE_NAME } from '../lib/site';

export default function ContactPage() {
  usePageMeta({
    title: `Contact ${SITE_NAME}`,
    description: `Contact SatoshiCalc for support, feedback, or data correction requests.`,
    path: '/contact',
  });

  return (
    <LegalPageLayout title="Contact Us">
      <p>
        We welcome questions, bug reports, and suggestions for {SITE_NAME}. We typically respond within a few
        business days.
      </p>
      <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100 pt-2">Email</h2>
      <p>
        <a
          href={`mailto:${CONTACT_EMAIL}?subject=SatoshiCalc%20inquiry`}
          className="text-orange-600 dark:text-orange-400 hover:underline font-medium"
        >
          {CONTACT_EMAIL}
        </a>
      </p>
      <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100 pt-2">What to include</h2>
      <ul className="list-disc pl-6 space-y-1">
        <li>A description of the issue or suggestion</li>
        <li>The page URL where you noticed a problem</li>
        <li>Your browser and device (if reporting a display bug)</li>
      </ul>
      <p className="text-sm text-slate-500 dark:text-slate-400">
        Please do not send private keys, seed phrases, or wallet credentials. We will never ask for them.
      </p>
    </LegalPageLayout>
  );
}
