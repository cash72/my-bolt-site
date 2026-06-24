import LegalPageLayout from '../components/LegalPageLayout';
import { usePageMeta } from '../hooks/usePageMeta';
import { CONTACT_EMAIL, SITE_NAME } from '../lib/site';

export default function PrivacyPage() {
  usePageMeta({
    title: `Privacy Policy`,
    description: `Privacy policy for ${SITE_NAME} — how we handle analytics, cookies, and third-party services.`,
    path: '/privacy',
  });

  return (
    <LegalPageLayout title="Privacy Policy">
      <p>
        <strong>Last updated:</strong> June 2026
      </p>
      <p>
        This Privacy Policy explains how {SITE_NAME} (&quot;we&quot;, &quot;us&quot;) collects and uses information when you visit
        our website.
      </p>
      <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100 pt-2">Information we collect</h2>
      <p>
        <strong>Usage analytics.</strong> If enabled, we use Google Analytics 4 to understand aggregate traffic
        patterns (pages visited, country, device type). IP addresses may be anonymized. You can opt out via
        browser add-ons such as the Google Analytics Opt-out Browser Add-on.
      </p>
      <p>
        <strong>Local storage.</strong> We may store preferences such as dark mode in your browser. This data
        stays on your device.
      </p>
      <p>
        <strong>We do not</strong> collect wallet addresses, payment information, or account credentials through
        the converter tool.
      </p>
      <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100 pt-2">Third-party services</h2>
      <ul className="list-disc pl-6 space-y-1">
        <li>
          <strong>CoinGecko</strong> — live Bitcoin price API. Requests go from your browser directly to
          CoinGecko. See{' '}
          <a
            href="https://www.coingecko.com/en/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-600 dark:text-orange-400 hover:underline"
          >
            CoinGecko&apos;s privacy policy
          </a>
          .
        </li>
        <li>
          <strong>Google Analytics</strong> (optional) — website analytics. See{' '}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-600 dark:text-orange-400 hover:underline"
          >
            Google&apos;s privacy policy
          </a>
          .
        </li>
        <li>
          <strong>Advertising partners</strong> — if we display ads in the future, those networks may use cookies
          per their own policies. We will update this page before enabling ads.
        </li>
      </ul>
      <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100 pt-2">Cookies</h2>
      <p>
        Essential cookies may be set by our hosting provider. Analytics and advertising cookies are used only if
        those features are active. You can control cookies through your browser settings.
      </p>
      <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100 pt-2">Your rights</h2>
      <p>
        Depending on your location, you may have rights to access, correct, or delete personal data we hold. Contact
        us at{' '}
        <a href={`mailto:${CONTACT_EMAIL}`} className="text-orange-600 dark:text-orange-400 hover:underline">
          {CONTACT_EMAIL}
        </a>{' '}
        to make a request.
      </p>
      <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100 pt-2">Changes</h2>
      <p>We may update this policy from time to time. The &quot;Last updated&quot; date at the top will reflect changes.</p>
    </LegalPageLayout>
  );
}
