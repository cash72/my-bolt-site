import { Link } from 'react-router-dom';
import LegalPageLayout from '../components/LegalPageLayout';
import { usePageMeta } from '../hooks/usePageMeta';
import { CONTACT_EMAIL, SITE_NAME } from '../lib/site';

export default function AboutPage() {
  usePageMeta({
    title: 'About',
    description: `${SITE_NAME} is a free BTU and mini-split sizing calculator for rooms, RVs, tiny homes, she-sheds, and cottages.`,
    path: '/about',
  });

  return (
    <LegalPageLayout title={`About ${SITE_NAME}`}>
      <p>
        {SITE_NAME} helps homeowners and DIYers estimate cooling BTU, heating load, and mini-split head size before
        buying ductless equipment. Enter space dimensions, pick your application type — RV, tiny home, shed, cottage,
        or standard room — and get a sizing summary you can copy to your notes or contractor.
      </p>
      <p>
        The calculator runs entirely in your browser — no account, no uploads, no sales calls. Results are planning
        estimates, not a substitute for licensed Manual J load calculations or permit work.
      </p>
      <p>
        Questions or feedback?{' '}
        <Link to="/contact" className="text-sky-600 dark:text-sky-400 hover:underline">
          Get in touch
        </Link>{' '}
        or email{' '}
        <a href={`mailto:${CONTACT_EMAIL}`} className="text-sky-600 dark:text-sky-400 hover:underline">
          {CONTACT_EMAIL}
        </a>
        .
      </p>
    </LegalPageLayout>
  );
}
