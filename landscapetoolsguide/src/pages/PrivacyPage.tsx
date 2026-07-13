import LegalPageLayout from '../components/LegalPageLayout';
import { usePageMeta } from '../hooks/usePageMeta';
import { CONTACT_EMAIL, SITE_NAME } from '../lib/site';

export default function PrivacyPage() {
  usePageMeta({
    title: 'Privacy Policy',
    description: `Privacy policy for ${SITE_NAME} — how we use cookies, analytics, and advertising.`,
    path: '/privacy',
  });

  return (
    <LegalPageLayout title="Privacy Policy">
      <p>
        <strong>Last updated:</strong> June 2026
      </p>
      <p>
        {SITE_NAME} ({CONTACT_EMAIL}) operates a free informational website. This policy explains what data we
        collect when you visit.
      </p>
      <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100 pt-2">Information we collect</h2>
      <p>
        We do not require accounts. Standard web server logs and analytics may record IP address, browser type, pages
        viewed, and referring URL. Third-party ad networks (such as Google AdSense) may use cookies to serve relevant
        ads.
      </p>
      <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100 pt-2">Cookies</h2>
      <p>
        We use cookies for dark mode preference (local storage) and advertising. You can disable cookies in your
        browser settings.
      </p>
      <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100 pt-2">Third-party links</h2>
      <p>
        Outbound links to software vendors have their own privacy policies. We are not responsible for third-party
        sites.
      </p>
      <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100 pt-2">Contact</h2>
      <p>
        Privacy questions:{' '}
        <a href={`mailto:${CONTACT_EMAIL}`} className="text-emerald-600 dark:text-emerald-400 hover:underline">
          {CONTACT_EMAIL}
        </a>
      </p>
    </LegalPageLayout>
  );
}
