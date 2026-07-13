import { Link } from 'react-router-dom';
import LegalPageLayout from '../components/LegalPageLayout';
import { usePageMeta } from '../hooks/usePageMeta';
import { CONTACT_EMAIL, SITE_NAME } from '../lib/site';

export default function AboutPage() {
  usePageMeta({
    title: 'About',
    description: `${SITE_NAME} is a free paint calculator for interior and exterior projects — room area, coverage, coats, and gallon counts.`,
    path: '/about',
  });

  return (
    <LegalPageLayout title={`About ${SITE_NAME}`}>
      <p>
        {SITE_NAME} helps homeowners and DIYers estimate how much paint to buy before heading to the store. Enter room
        dimensions and ceiling height, choose walls or ceiling, add coats and waste, and get gallon counts rounded up
        so you do not run short mid-project.
      </p>
      <p>
        The calculator runs entirely in your browser — no account, no uploads, no sales calls. Copy the shopping list
        and take it with you.
      </p>
      <p>
        Questions or feedback?{' '}
        <Link to="/contact" className="text-blue-600 dark:text-blue-400 hover:underline">
          Get in touch
        </Link>{' '}
        or email{' '}
        <a href={`mailto:${CONTACT_EMAIL}`} className="text-blue-600 dark:text-blue-400 hover:underline">
          {CONTACT_EMAIL}
        </a>
        .
      </p>
    </LegalPageLayout>
  );
}
