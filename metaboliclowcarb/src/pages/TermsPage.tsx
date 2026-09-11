import { Link } from 'react-router-dom';
import LegalPageLayout from '../components/LegalPageLayout';
import { usePageMeta } from '../hooks/usePageMeta';
import { CONTACT_EMAIL, SITE_NAME, SITE_URL } from '../lib/site';

export default function TermsPage() {
  usePageMeta({
    title: 'Terms of Use',
    description: `Read the ${SITE_NAME} terms covering calculator estimates, recipes, health education, acceptable use, warranties, and liability.`,
    path: '/terms',
  });

  return (
    <LegalPageLayout title="Terms of Use">
      <p>
        <strong>Last updated:</strong> July 26, 2026
      </p>
      <p>
        Welcome to {SITE_NAME} ({SITE_URL}). By using this website you agree to these Terms of Use. If you do not
        agree, please do not use the site.
      </p>

      <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200">What this site provides</h2>
      <p>
        {SITE_NAME} offers free educational tools and content for people exploring keto, low-carb, intermittent
        fasting, and metabolic health topics. That includes calculators (net carbs, macros, TDEE, fasting timers),
        recipes with estimated nutrition, and written guides. Content is for general information only.
      </p>

      <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200">Not medical advice</h2>
      <p>
        Nothing on this site is medical, nutritional, or therapeutic advice. Calculators produce estimates based on
        formulas and inputs you provide. Recipes list approximate net carbs and macros. Always consult a qualified
        healthcare professional before changing diet, fasting, or medication. See our{' '}
        <Link to="/disclaimer" className="text-teal-600 dark:text-teal-400 hover:underline">
          Disclaimer
        </Link>
        .
      </p>

      <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200">Acceptable use</h2>
      <p>You agree not to misuse the site, including attempting to disrupt servers, scrape content at abusive rates, or use
        tools to generate harmful or unlawful advice for others. You may not copy large portions of our guides or
        recipes for republication without permission.</p>

      <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200">Intellectual property</h2>
      <p>
        Site design, original writing, and compilation of recipes and guides are owned by {SITE_NAME} or its
        licensors. Stock photos are credited on individual pages and remain the property of their photographers /
        providers. You may link to our pages; you may not frame the site or present our content as your own.
      </p>

      <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200">Advertising and affiliates</h2>
      <p>
        We may display advertising (including Google AdSense when approved) and affiliate links. Advertising does not
        change our obligation to keep calculator formulas transparent. Affiliate relationships, if any, are disclosed
        where required.
      </p>

      <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200">No warranties</h2>
      <p>
        The site is provided “as is.” We do not warrant uninterrupted availability, error-free calculations, or that
        content meets your specific health goals. Nutrition estimates can be wrong if labels or portions differ.
      </p>

      <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200">Limitation of liability</h2>
      <p>
        To the fullest extent permitted by law, {SITE_NAME} and its operators are not liable for damages arising from
        use of the site, including decisions made based on calculator outputs or recipes.
      </p>

      <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200">Changes</h2>
      <p>
        We may update these terms. The “Last updated” date will change when we do. Continued use after changes means
        you accept the revised terms.
      </p>

      <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200">Contact</h2>
      <p>
        Questions about these terms:{' '}
        <a href={`mailto:${CONTACT_EMAIL}`} className="text-teal-600 dark:text-teal-400 hover:underline">
          {CONTACT_EMAIL}
        </a>{' '}
        or our{' '}
        <Link to="/contact" className="text-teal-600 dark:text-teal-400 hover:underline">
          Contact
        </Link>{' '}
        page.
      </p>
    </LegalPageLayout>
  );
}
