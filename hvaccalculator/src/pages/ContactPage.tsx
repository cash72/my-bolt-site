import LegalPageLayout from '../components/LegalPageLayout';
import { usePageMeta } from '../hooks/usePageMeta';
import { CONTACT_EMAIL, SITE_NAME } from '../lib/site';

export default function ContactPage() {
  usePageMeta({
    title: 'Contact',
    description: `Contact ${SITE_NAME} with questions, corrections, or feedback about the BTU and mini-split calculator.`,
    path: '/contact',
  });

  return (
    <LegalPageLayout title="Contact">
      <p>
        Have a question about the calculator, spotted an error, or want to suggest a feature? We would like to hear
        from you.
      </p>
      <p>
        Email:{' '}
        <a href={`mailto:${CONTACT_EMAIL}`} className="text-sky-600 dark:text-sky-400 hover:underline">
          {CONTACT_EMAIL}
        </a>
      </p>
      <p className="text-sm text-slate-500 dark:text-slate-400">
        We typically respond within a few business days. {SITE_NAME} does not provide installation quotes or
        contractor referrals.
      </p>
    </LegalPageLayout>
  );
}
