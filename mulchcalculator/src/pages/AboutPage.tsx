import { Link } from 'react-router-dom';
import LegalPageLayout from '../components/LegalPageLayout';
import { usePageMeta } from '../hooks/usePageMeta';
import { CONTACT_EMAIL, SITE_NAME } from '../lib/site';

export default function AboutPage() {
  usePageMeta({
    title: 'About',
    description: `${SITE_NAME} is a free mulch and landscaping material calculator — cubic yards, bag counts, and cost estimates for garden beds.`,
    path: '/about',
  });

  return (
    <LegalPageLayout title={`About ${SITE_NAME}`}>
      <p>
        {SITE_NAME} helps homeowners and DIY landscapers estimate how much mulch, gravel, or topsoil to buy before
        heading to the garden center. Enter bed dimensions, set depth and waste, and get cubic yard counts plus bag
        equivalents so you do not run short mid-project.
      </p>
      <p>
        The calculator runs entirely in your browser — no account, no uploads, no sales calls. Copy the shopping list
        and take it with you.
      </p>
      <p>
        Questions or feedback?{' '}
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
