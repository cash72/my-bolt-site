import { Link } from 'react-router-dom';
import LegalPageLayout from '../components/LegalPageLayout';
import { usePageMeta } from '../hooks/usePageMeta';
import { SITE_NAME } from '../lib/site';

export default function EditorialPolicyPage() {
  usePageMeta({
    title: 'Editorial Policy',
    description: `${SITE_NAME} editorial policy — authorship, sourcing, corrections, advertising independence, updates, and health-content safety.`,
    path: '/editorial-policy',
  });

  return (
    <LegalPageLayout title="Editorial Policy">
      <p>
        {SITE_NAME} is independently published. Articles, recipes, and calculator explanations are written and maintained
        by the <strong>Metabolic Low Carb Editorial Team</strong>. The team is not a clinic, and our content is{' '}
        <strong>not currently medically reviewed</strong> unless an individual page explicitly states otherwise. We do
        not imply a clinical review from a quotation, external link, or reference to a clinician.
      </p>

      <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200">Purpose and scope</h2>
      <p>
        We publish educational information and planning tools about low-carb eating, fasting, recipes, and metabolic
        health. The material is general information, not diagnosis, treatment, or a personal nutrition prescription.
        Calculator outputs and recipe nutrition values are estimates. Our{' '}
        <Link to="/methodology" className="text-teal-600 dark:text-teal-400 hover:underline">
          Methodology
        </Link>{' '}
        explains what the site currently calculates and where its limits are.
      </p>

      <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200">How we choose sources</h2>
      <p>
        We look for sources that directly support the statement being made. Depending on the topic, that can include
        government and public-health guidance, professional medical or nutrition organizations, peer-reviewed research,
        and primary product labels or manufacturer documentation. We prefer primary and current sources when they are
        available, distinguish established guidance from emerging or disputed ideas, and avoid treating an expert&apos;s
        opinion as proof of a general medical claim.
      </p>
      <p>
        A source is not included merely because it supports a desired conclusion. We consider relevance, publication
        date, study design, population, conflicts or commercial incentives, and whether the source actually supports the
        surrounding wording. We do not invent citations, studies, authors, credentials, or review status. Links can
        become outdated, and the presence of a source does not make general information suitable for an individual.
      </p>

      <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200">Health and YMYL safety</h2>
      <p>
        Nutrition and metabolic-health content can affect health decisions. For higher-risk subjects—such as medication
        changes, diabetes and glucose-lowering drugs, pregnancy, kidney disease, eating-disorder history, prolonged
        fasting, severe symptoms, or claims about diagnosing, curing, or treating disease—we use more cautious language,
        add prominent limitations, and direct readers to an appropriate licensed healthcare professional. Unsupported
        claims are narrowed or removed rather than presented as certainty.
      </p>
      <p>
        Content is escalated for additional editorial review when a claim could reasonably cause harm, when reliable
        sources conflict, or when the team cannot support the claim confidently. We may delay or decline publication.
        The site is not an emergency service; anyone who may be experiencing a medical emergency should contact local
        emergency services.
      </p>

      <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200">Corrections</h2>
      <p>
        Readers can report a possible error through our{' '}
        <Link to="/contact" className="text-teal-600 dark:text-teal-400 hover:underline">
          Contact page
        </Link>
        . We check the report against the page, its sources, and the site&apos;s current code where relevant. Confirmed
        errors are corrected as soon as practical; material errors may also receive a correction note or updated date.
        Minor spelling, formatting, and clarity edits may be made without a note. We do not remove accurate information
        solely because a person or advertiser dislikes it.
      </p>

      <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200">Updates</h2>
      <p>
        Pages are reviewed and revised when formulas or site behavior change, important guidance changes, a source is no
        longer reliable, or a correction identifies a problem. An updated date, where shown, means the page was edited;
        it does not by itself mean a clinician reviewed it. Older pages may not yet reflect the latest evidence, so
        readers should check publication dates and current professional guidance before making health decisions.
      </p>

      <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-200">Advertising and commercial independence</h2>
      <p>
        Advertising may fund the site, but advertisers do not set calculator formulas, assign topics, approve copy, or
        receive favorable health claims. Ads are separate from editorial content. We do not currently use affiliate
        links; if that changes, qualifying links and the commercial relationship will be clearly disclosed. Payment,
        products, or access would not guarantee coverage or a positive conclusion.
      </p>

      <p>
        For the limits that apply to all content, also read our{' '}
        <Link to="/disclaimer" className="text-teal-600 dark:text-teal-400 hover:underline">
          Disclaimer
        </Link>
        .
      </p>
    </LegalPageLayout>
  );
}
