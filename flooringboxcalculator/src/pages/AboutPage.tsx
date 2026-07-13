import { Link } from 'react-router-dom';
import LegalPageLayout from '../components/LegalPageLayout';
import { usePageMeta } from '../hooks/usePageMeta';
import { CONTACT_EMAIL, SITE_NAME } from '../lib/site';

export default function AboutPage() {
  usePageMeta({
    title: 'About',
    description: `${SITE_NAME} — free calculators for laminate, LVP, tile, and carpet. Square footage, waste, box counts, and DIY flooring guides.`,
    path: '/about',
  });

  return (
    <LegalPageLayout title={`About ${SITE_NAME}`}>
      <p>
        {SITE_NAME} helps homeowners and contractors estimate how much flooring to buy before heading to the store.
        Enter room dimensions in feet and inches, add a waste allowance, and get box counts (or square yards for carpet)
        rounded up so you do not run short on install day.
      </p>
      <p>
        We cover laminate, luxury vinyl plank (LVP), tile, and carpet — plus{' '}
        <Link to="/guides" className="text-emerald-600 dark:text-emerald-400 hover:underline">
          DIY guides
        </Link>{' '}
        on subfloor prep, underlay, product choices, and installation basics.
      </p>
      <p>
        The calculator runs entirely in your browser — no account, no uploads, no sales calls. Copy the shopping list
        and take it with you. Try the{' '}
        <Link to="/laminate-flooring-calculator" className="text-emerald-600 dark:text-emerald-400 hover:underline">
          laminate calculator
        </Link>
        ,{' '}
        <Link to="/tile-flooring-calculator" className="text-emerald-600 dark:text-emerald-400 hover:underline">
          tile calculator
        </Link>
        , or{' '}
        <Link to="/carpet-calculator" className="text-emerald-600 dark:text-emerald-400 hover:underline">
          carpet calculator
        </Link>
        .
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
