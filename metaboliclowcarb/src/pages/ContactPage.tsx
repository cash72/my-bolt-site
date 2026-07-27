import { Link } from 'react-router-dom';
import LegalPageLayout from '../components/LegalPageLayout';
import { usePageMeta } from '../hooks/usePageMeta';
import { CONTACT_EMAIL, SITE_NAME } from '../lib/site';

export default function ContactPage() {
  usePageMeta({
    title: 'Contact',
    description: `Contact ${SITE_NAME} about calculators, recipe corrections, guide feedback, or privacy questions.`,
    path: '/contact',
  });

  return (
    <LegalPageLayout title="Contact">
      <p>
        We read every message. Use email for calculator questions, recipe or guide corrections, partnership inquiries,
        privacy requests, and general feedback about {SITE_NAME}.
      </p>

      <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200">Email</h2>
      <p>
        <a href={`mailto:${CONTACT_EMAIL}`} className="text-teal-600 dark:text-teal-400 hover:underline text-lg">
          {CONTACT_EMAIL}
        </a>
      </p>
      <p className="text-sm text-slate-500 dark:text-slate-400">
        Typical response time: within 2–5 business days. Complex medical questions cannot be answered personally — please
        speak with your clinician.
      </p>

      <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200">What to include</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>
          <strong>Calculator issue</strong> — which tool (net carb, macros, fasting), inputs you used, and what looked
          wrong.
        </li>
        <li>
          <strong>Recipe or guide correction</strong> — page URL, the error, and a suggested fix if you have one.
        </li>
        <li>
          <strong>Privacy</strong> — reference our{' '}
          <Link to="/privacy" className="text-teal-600 dark:text-teal-400 hover:underline">
            Privacy Policy
          </Link>{' '}
          and describe your request.
        </li>
        <li>
          <strong>Press / partnerships</strong> — who you are and what you are proposing.
        </li>
      </ul>

      <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200">What we cannot do by email</h2>
      <p>
        We do not provide personalized meal plans, diagnose conditions, adjust diabetes or blood-pressure medications, or
        replace care from your doctor or registered dietitian. Educational tools only — see our{' '}
        <Link to="/disclaimer" className="text-teal-600 dark:text-teal-400 hover:underline">
          Disclaimer
        </Link>
        .
      </p>

      <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200">Helpful links</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>
          <Link to="/about" className="text-teal-600 dark:text-teal-400 hover:underline">
            About the site
          </Link>
        </li>
        <li>
          <Link to="/terms" className="text-teal-600 dark:text-teal-400 hover:underline">
            Terms of Use
          </Link>
        </li>
        <li>
          <Link to="/guides" className="text-teal-600 dark:text-teal-400 hover:underline">
            Guides
          </Link>
        </li>
        <li>
          <Link to="/recipes" className="text-teal-600 dark:text-teal-400 hover:underline">
            Recipes
          </Link>
        </li>
      </ul>
    </LegalPageLayout>
  );
}
