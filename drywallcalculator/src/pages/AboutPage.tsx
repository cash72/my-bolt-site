import { Link } from 'react-router-dom';
import LegalPageLayout from '../components/LegalPageLayout';
import { usePageMeta } from '../hooks/usePageMeta';
import { CONTACT_EMAIL, SITE_NAME } from '../lib/site';

export default function AboutPage() {
  usePageMeta({
    title: 'About',
    description: `${SITE_NAME} is a free drywall calculator for walls and ceilings — room area, sheet counts, and waste allowance.`,
    path: '/about',
  });

  return (
    <LegalPageLayout title={`About ${SITE_NAME}`}>
      <p>
        {SITE_NAME} helps homeowners and DIYers estimate how many drywall sheets to buy before heading to the lumber
        yard. Enter room dimensions and ceiling height, toggle ceiling coverage, add waste, and get sheet counts rounded
        up so you do not run short mid-project.
      </p>
      <p>
        The calculator runs entirely in your browser — no account, no uploads, no sales calls. Copy the shopping list
        and take it with you.
      </p>
      <p>
        Questions or feedback?{' '}
        <Link to="/contact" className="text-orange-600 dark:text-orange-400 hover:underline">
          Get in touch
        </Link>{' '}
        or email{' '}
        <a href={`mailto:${CONTACT_EMAIL}`} className="text-orange-600 dark:text-orange-400 hover:underline">
          {CONTACT_EMAIL}
        </a>
        .
      </p>
    </LegalPageLayout>
  );
}
