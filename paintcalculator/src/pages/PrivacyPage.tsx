import LegalPageLayout from '../components/LegalPageLayout';
import { usePageMeta } from '../hooks/usePageMeta';
import { CONTACT_EMAIL, SITE_NAME, SITE_URL } from '../lib/site';

export default function PrivacyPage() {
  usePageMeta({
    title: 'Privacy Policy',
    description: `Privacy policy for ${SITE_NAME} — what data we collect and how we use it.`,
    path: '/privacy',
  });

  return (
    <LegalPageLayout title="Privacy Policy">
      <p>
        <strong>Last updated:</strong> June 2026
      </p>
      <p>
        {SITE_NAME} ({SITE_URL}) respects your privacy. This policy explains what information we collect when you use
        our paint calculator.
      </p>

      <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200">Information we collect</h2>
      <p>
        Room dimensions and project settings you enter stay in your browser. We do not store your calculations on our
        servers.
      </p>
      <p>
        Our hosting provider may process standard request data for security and aggregate traffic reporting. We do not
        currently load a separate site-analytics service.
      </p>

      <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200">Cookies</h2>
      <p>
        When advertising is enabled, advertising partners may set cookies. You can control cookies through your browser
        settings.
      </p>

      <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200">Third-party services</h2>
      <p>
        We may display ads through Google AdSense or similar networks. Those services have their own privacy policies
        governing how they collect and use data.
      </p>

      <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200">Contact</h2>
      <p>
        Privacy questions:{' '}
        <a href={`mailto:${CONTACT_EMAIL}`} className="text-blue-600 dark:text-blue-400 hover:underline">
          {CONTACT_EMAIL}
        </a>
      </p>
    </LegalPageLayout>
  );
}
