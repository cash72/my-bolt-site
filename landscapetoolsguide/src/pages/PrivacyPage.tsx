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
        We do not require accounts. Our hosting provider may process standard request data such as IP address, browser
        type, requested page, and referring URL for security and aggregate reporting. When advertising is enabled,
        third-party ad networks may use cookies or similar technologies.
      </p>
      <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100 pt-2">Cookies</h2>
      <p>
        The current site does not store your dark-mode preference. When advertising is enabled, advertising partners may
        set cookies. You can disable cookies in your browser settings.
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
