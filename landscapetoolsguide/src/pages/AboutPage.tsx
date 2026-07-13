import { Link } from 'react-router-dom';
import LegalPageLayout from '../components/LegalPageLayout';
import { usePageMeta } from '../hooks/usePageMeta';
import { CONTACT_EMAIL, SITE_NAME } from '../lib/site';

export default function AboutPage() {
  usePageMeta({
    title: 'About',
    description: `${SITE_NAME} is an independent directory comparing lawn care and landscaping business software — Jobber, LMN, Housecall Pro, and more.`,
    path: '/about',
  });

  return (
    <LegalPageLayout title={`About ${SITE_NAME}`}>
      <p>
        {SITE_NAME} helps lawn care and landscape business owners compare field service and industry-specific software
        before they sign up. We publish pricing notes, feature checklists, head-to-head comparisons, and outbound
        links to vendor sites.
      </p>
      <p>
        We are not a software vendor and do not provide implementation services. Reviews are written from public
        pricing pages, product documentation, and industry feedback — not from paid placement.
      </p>
      <p>
        Some outbound links are affiliate links. When you sign up through those links, we may earn a commission at no
        extra cost to you. See our{' '}
        <Link to="/disclaimer" className="text-emerald-600 dark:text-emerald-400 hover:underline">
          disclaimer
        </Link>{' '}
        for details.
      </p>
      <p>
        Questions or corrections?{' '}
        <Link to="/contact" className="text-emerald-600 dark:text-emerald-400 hover:underline">
          Get in touch
        </Link>{' '}
        or email{' '}
        <a href={`mailto:${CONTACT_EMAIL}`} className="text-emerald-600 dark:text-emerald-400 hover:underline">
          {CONTACT_EMAIL}
        </a>
        .
      </p>
    </LegalPageLayout>
  );
}
