import { Link } from 'react-router-dom';
import LegalPageLayout from '../components/LegalPageLayout';
import { usePageMeta } from '../hooks/usePageMeta';
import { CONTACT_EMAIL, SITE_NAME, SITE_URL } from '../lib/site';

export default function AboutPage() {
  usePageMeta({
    title: 'About',
    description: `${SITE_NAME} — who we are, how tools and recipes are built, and our editorial standards for keto and metabolic health content.`,
    path: '/about',
  });

  return (
    <LegalPageLayout title={`About ${SITE_NAME}`}>
      <p>
        {SITE_NAME} ({SITE_URL}) is an independent educational site for people exploring low-carb eating, keto,
        intermittent fasting, and metabolic health. We build free browser-based calculators, practical guides, and
        recipes with estimated net carbs — so you can check a label, set a daily target, or plan a meal without creating
        an account.
      </p>

      <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200">Who runs this site</h2>
      <p>
        The site is independently published, and its content is written and maintained by the Metabolic Low Carb
        Editorial Team. The team is not a clinic. Content is not currently medically reviewed unless an individual page
        explicitly says otherwise, and nothing on the site is a personal treatment plan. Read our{' '}
        <Link to="/editorial-policy" className="text-teal-600 dark:text-teal-400 hover:underline">
          Editorial Policy
        </Link>{' '}
        for our authorship, sourcing, correction, and advertising standards.
      </p>

      <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200">What we publish</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>
          <strong>Calculators</strong> — net carbs from nutrition labels, daily macros (keto, insulin-resistance-friendly,
          moderate low carb, TDEE-based weight loss), and fasting timers with educational windows.
        </li>
        <li>
          <strong>Guides</strong> — step-by-step explainers on labels, breaking a fast, PCOS and low carb, electrolytes,
          and related topics.
        </li>
        <li>
          <strong>Recipes</strong> — simple low-carb meals with estimated net carbs and protein per serving, organized by
          breakfast, lunch, dinner, and snacks.
        </li>
      </ul>

      <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200">How we build content</h2>
      <p>
        Calculator formulas are documented in-page (for example Mifflin-St Jeor for calorie estimates and standard US
        label net-carb math). Recipe net-carb and protein values are working estimates, not laboratory analyses — always
        verify packaged foods with our{' '}
        <Link to="/net-carb-calculator" className="text-teal-600 dark:text-teal-400 hover:underline">
          net carb calculator
        </Link>
        . Our{' '}
        <Link to="/methodology" className="text-teal-600 dark:text-teal-400 hover:underline">
          Methodology
        </Link>{' '}
        documents the formulas, fixed assumptions, fasting-timer behavior, and recipe limitations. We prioritize
        usefulness over hype: no miracle claims, no “cure” language, and clear medical disclaimers.
      </p>

      <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200">Editorial standards</h2>
      <p>
        We aim for original explanations, worked examples, and internal links between tools, recipes, and guides so you
        can move from a number on a label to a meal idea. We do not invent clinical studies. When evidence is mixed or
        individual results vary, we say so. Our{' '}
        <Link to="/editorial-policy" className="text-teal-600 dark:text-teal-400 hover:underline">
          Editorial Policy
        </Link>{' '}
        explains how we choose sources and handle higher-risk health claims. Corrections and suggestions are welcome via{' '}
        <Link to="/contact" className="text-teal-600 dark:text-teal-400 hover:underline">
          Contact
        </Link>
        .
      </p>

      <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200">Advertising</h2>
      <p>
        We may display ads (including Google AdSense when the site is approved) to keep tools free. Ads do not change
        calculator math or control editorial conclusions. See our{' '}
        <Link to="/editorial-policy" className="text-teal-600 dark:text-teal-400 hover:underline">
          Editorial Policy
        </Link>
        ,{' '}
        <Link to="/privacy" className="text-teal-600 dark:text-teal-400 hover:underline">
          Privacy Policy
        </Link>{' '}
        and{' '}
        <Link to="/terms" className="text-teal-600 dark:text-teal-400 hover:underline">
          Terms of Use
        </Link>
        .
      </p>

      <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200">Start here</h2>
      <p>
        Try the{' '}
        <Link to="/net-carb-calculator" className="text-teal-600 dark:text-teal-400 hover:underline">
          net carb calculator
        </Link>
        ,{' '}
        <Link to="/keto-macro-calculator" className="text-teal-600 dark:text-teal-400 hover:underline">
          keto macro calculator
        </Link>
        ,{' '}
        <Link to="/recipes" className="text-teal-600 dark:text-teal-400 hover:underline">
          recipe library
        </Link>
        , or{' '}
        <Link to="/guides" className="text-teal-600 dark:text-teal-400 hover:underline">
          guides
        </Link>
        . Email{' '}
        <a href={`mailto:${CONTACT_EMAIL}`} className="text-teal-600 dark:text-teal-400 hover:underline">
          {CONTACT_EMAIL}
        </a>{' '}
        anytime.
      </p>
    </LegalPageLayout>
  );
}
