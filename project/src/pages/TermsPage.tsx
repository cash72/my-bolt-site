import { Link } from 'react-router-dom';
import LegalPageLayout from '../components/LegalPageLayout';
import { usePageMeta } from '../hooks/usePageMeta';
import { CONTACT_EMAIL, SITE_NAME, SITE_URL } from '../lib/site';

export default function TermsPage() {
  usePageMeta({
    title: 'Terms of Use',
    description: `Terms of use for ${SITE_NAME} calculators, tools, and guides.`,
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

      <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100 pt-2">What this site provides</h2>
      <p>
        {SITE_NAME} offers free Bitcoin and satoshi conversion calculators, guides, and educational tools for understanding BTC amounts in USD and other currencies. Content is for general information and estimating only.
      </p>

      <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100 pt-2">Not professional advice</h2>
      <p>
        Nothing on this site is professional engineering, contracting, financial, medical, or legal advice. Calculators
        produce estimates based on formulas and the inputs you provide. Always verify materials, measurements, and
        safety requirements for your project. See our{' '}
        <Link to="/disclaimer" className="text-orange-600 dark:text-orange-400 hover:underline">
          Disclaimer
        </Link>
        .
      </p>

      <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100 pt-2">Acceptable use</h2>
      <p>
        You agree not to misuse the site, including attempting to disrupt servers, scrape content at abusive rates, or
        misrepresent our estimates as certified professional calculations. You may not copy large portions of our
        guides for republication without permission.
      </p>

      <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100 pt-2">Intellectual property</h2>
      <p>
        Site design, original writing, and compilation of tools and guides are owned by {SITE_NAME} or its licensors.
        Stock photos are credited where shown and remain the property of their photographers / providers. You may link
        to our pages; you may not frame the site or present our content as your own.
      </p>

      <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100 pt-2">Advertising and affiliates</h2>
      <p>
        We may display advertising (including Google AdSense when approved) and affiliate links. Advertising does not
        change our obligation to keep calculator methods transparent. Affiliate relationships, if any, are disclosed
        where required.
      </p>

      <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100 pt-2">No warranties</h2>
      <p>
        The site is provided “as is.” We do not warrant uninterrupted availability, error-free calculations, or that
        content meets your specific project needs. Estimates can be wrong if inputs, product labels, or site conditions
        differ.
      </p>

      <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100 pt-2">Limitation of liability</h2>
      <p>
        To the fullest extent permitted by law, {SITE_NAME} and its operators are not liable for damages arising from
        use of the site, including purchasing or construction decisions based on calculator outputs.
      </p>

      <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100 pt-2">Changes</h2>
      <p>
        We may update these terms. The “Last updated” date will change when we do. Continued use after changes means
        you accept the revised terms.
      </p>

      <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100 pt-2">Contact</h2>
      <p>
        Questions about these terms: 
        <a href={`mailto:${CONTACT_EMAIL}`} className="text-orange-600 dark:text-orange-400 hover:underline">
          {CONTACT_EMAIL}
        </a> 
        or our 
        <Link to="/contact" className="text-orange-600 dark:text-orange-400 hover:underline">
          Contact
        </Link> 
        page.
      </p>
    </LegalPageLayout>
  );
}
