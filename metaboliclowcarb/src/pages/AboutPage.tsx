import { Link } from 'react-router-dom';
import LegalPageLayout from '../components/LegalPageLayout';
import { usePageMeta } from '../hooks/usePageMeta';
import { CONTACT_EMAIL, SITE_NAME } from '../lib/site';

export default function AboutPage() {
  usePageMeta({
    title: 'About',
    description: `${SITE_NAME} — free net carb, macro, and fasting tools plus recipes and guides for keto, PCOS, insulin resistance, and metabolic health.`,
    path: '/about',
  });

  return (
    <LegalPageLayout title={`About ${SITE_NAME}`}>
      <p>
        {SITE_NAME} helps people on keto, low-carb, and insulin-resistance-friendly diets figure out net carbs from food
        labels, daily macro targets, and fasting windows. Enter label values or your body stats — everything runs in
        your browser with no account required.
      </p>
      <p>
        We offer three calculators — net carbs, daily macros, and a fasting clock with guidance from Dr. Mindy Pelz, Dr.
        Eric Westman, and Dr. Boz — plus{' '}
        <Link to="/guides" className="text-teal-600 dark:text-teal-400 hover:underline">
          guides
        </Link>{' '}
        and{' '}
        <Link to="/recipes" className="text-teal-600 dark:text-teal-400 hover:underline">
          low-carb recipes
        </Link>
        .
      </p>
      <p>
        Try the{' '}
        <Link to="/net-carb-calculator" className="text-teal-600 dark:text-teal-400 hover:underline">
          net carb calculator
        </Link>
        ,{' '}
        <Link to="/keto-macro-calculator" className="text-teal-600 dark:text-teal-400 hover:underline">
          keto macro calculator
        </Link>
        , or{' '}
        <Link to="/fasting-clock" className="text-teal-600 dark:text-teal-400 hover:underline">
          fasting clock
        </Link>
        .
      </p>
      <p>
        Questions or feedback?{' '}
        <Link to="/contact" className="text-teal-600 dark:text-teal-400 hover:underline">
          Get in touch
        </Link>{' '}
        or email{' '}
        <a href={`mailto:${CONTACT_EMAIL}`} className="text-teal-600 dark:text-teal-400 hover:underline">
          {CONTACT_EMAIL}
        </a>
        .
      </p>
    </LegalPageLayout>
  );
}
