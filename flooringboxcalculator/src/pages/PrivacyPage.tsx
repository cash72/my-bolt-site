import { Link } from 'react-router-dom';
import LegalPageLayout from '../components/LegalPageLayout';
import { usePageMeta } from '../hooks/usePageMeta';
import { CONTACT_EMAIL, SITE_NAME, SITE_URL } from '../lib/site';

export default function PrivacyPage() {
  usePageMeta({
    title: 'Privacy Policy',
    description: `Privacy policy for ${SITE_NAME} — cookies, calculators, and Google AdSense disclosures.`,
    path: '/privacy',
  });

  return (
    <LegalPageLayout title="Privacy Policy">
      <p>
        <strong>Last updated:</strong> September 4, 2026
      </p>
      <p>
        {SITE_NAME} ({SITE_URL}) respects your privacy. This policy explains what information is collected when you use
        our flooring calculators and guides, and how advertising partners may use cookies when ads are enabled.
      </p>

      <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200">Information you enter in tools</h2>
      <p>
        Room dimensions, material settings, and box counts you type into calculators are processed in your browser. We do not require an account and we do not intentionally store
        your personal calculator inputs on our servers. If you clear browser data, those local values are gone.
      </p>

      <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200">Hosting data</h2>
      <p>
        Our hosting provider may process standard request data for security and aggregate traffic reporting. We do not
        currently load a separate site-analytics service.
      </p>

      <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200">Cookies and similar technologies</h2>
      <p>
        Local storage may be used for site preferences (for example dark mode). When ads are enabled, advertising
        partners may use cookies or similar technologies. You can block or delete this data in your browser settings.
      </p>

      <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200">Google AdSense and advertising</h2>
      <p>
        We may use Google AdSense or similar networks to display ads. Google and its partners may use cookies or device
        identifiers to show personalized or non-personalized ads based on your visits to this and other sites. You can
        learn how Google uses data and manage ad settings here:
      </p>
      <ul className="list-disc list-inside space-y-2">
        <li>
          <a
            href="https://policies.google.com/technologies/ads"
            className="text-emerald-600 dark:text-emerald-400 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            How Google uses information from sites that use its services
          </a>
        </li>
        <li>
          <a
            href="https://adssettings.google.com/"
            className="text-emerald-600 dark:text-emerald-400 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Ads Settings
          </a>{' '}
          (opt out of personalized ads)
        </li>
        <li>
          <a
            href="https://www.aboutads.info/"
            className="text-emerald-600 dark:text-emerald-400 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            aboutads.info
          </a>{' '}
          industry opt-out tools
        </li>
      </ul>
      <p>
        Third-party vendors, including Google, use cookies to serve ads based on a user’s prior visits to this website or
        other websites. We do not control those cookies once ads are active.
      </p>

      <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200">Email you send us</h2>
      <p>
        If you email {CONTACT_EMAIL}, we keep the message long enough to respond and handle your request. Do not send
        passwords or sensitive personal records.
      </p>

      <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200">Children</h2>
      <p>
        The site is intended for adults. We do not knowingly collect personal information from children under 13.
      </p>

      <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200">Changes</h2>
      <p>
        We may update this policy. The “Last updated” date will change when we do. Continued use of the site means you
        accept the revised policy.
      </p>

      <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200">Contact</h2>
      <p>
        Privacy questions:{' '}
        <a href={`mailto:${CONTACT_EMAIL}`} className="text-emerald-600 dark:text-emerald-400 hover:underline">
          {CONTACT_EMAIL}
        </a>{' '}
        or our{' '}
        <Link to="/contact" className="text-emerald-600 dark:text-emerald-400 hover:underline">
          Contact
        </Link>{' '}
        page. Also see{' '}
        <Link to="/terms" className="text-emerald-600 dark:text-emerald-400 hover:underline">
          Terms of Use
        </Link>
        .
      </p>
    </LegalPageLayout>
  );
}
