import LegalPageLayout from '../components/LegalPageLayout';
import { usePageMeta } from '../hooks/usePageMeta';
import { CONTACT_EMAIL, SITE_NAME } from '../lib/site';

export default function ContactPage() {
  usePageMeta({
    title: 'Contact',
    description: `Contact ${SITE_NAME} — pricing corrections, affiliate inquiries, or general feedback.`,
    path: '/contact',
  });

  return (
    <LegalPageLayout title="Contact">
      <p>
        Reach us at{' '}
        <a href={`mailto:${CONTACT_EMAIL}`} className="text-emerald-600 dark:text-emerald-400 hover:underline">
          {CONTACT_EMAIL}
        </a>
        .
      </p>
      <p>
        We welcome pricing corrections, broken links, and suggestions for tools or comparisons to add. We do not
        offer software support for third-party products — contact vendors directly for account help.
      </p>
    </LegalPageLayout>
  );
}
