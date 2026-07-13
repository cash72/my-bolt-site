export interface AlternativesPage {
  slug: string;
  title: string;
  description: string;
  sourceToolSlug: string;
  alternativeSlugs: string[];
  intro: string;
  faqs: { question: string; answer: string }[];
}

export const ALTERNATIVES: AlternativesPage[] = [
  {
    slug: 'jobber-alternatives-landscaping',
    title: 'Best Jobber Alternatives for Landscaping Companies',
    description:
      'Top Jobber alternatives for lawn care and landscape businesses — compared by price, crew size, and maintenance vs install focus.',
    sourceToolSlug: 'jobber',
    alternativeSlugs: ['housecall-pro', 'lmn', 'fieldpulse', 'service-autopilot', 'gorilladesk'],
    intro:
      'Jobber is the default pick for many small lawn and landscape crews — but it is not the only option. These alternatives fit different budgets, crew sizes, and workflow types (maintenance vs design-build vs treatments).',
    faqs: [
      {
        question: 'What is the cheapest Jobber alternative?',
        answer:
          'FieldPulse often undercuts Jobber on entry price (~$39/mo). GorillaDesk is competitive for treatment-heavy lawn routes. Always compare total cost at your actual user count.',
      },
      {
        question: 'What Jobber alternative is best for design-build?',
        answer: 'LMN or SingleOps — Jobber is maintenance-first; LMN is built for landscape estimating and job costing.',
      },
    ],
  },
  {
    slug: 'housecall-pro-alternatives',
    title: 'Best Housecall Pro Alternatives for Lawn & Landscape',
    description:
      'Housecall Pro alternatives for landscaping and lawn care — Jobber, Service Autopilot, GorillaDesk, and more.',
    sourceToolSlug: 'housecall-pro',
    alternativeSlugs: ['jobber', 'service-autopilot', 'gorilladesk', 'fieldpulse'],
    intro:
      'Housecall Pro bundles payments and marketing with scheduling. If you want a simpler stack, lower price, or landscape-specific features, these tools are worth evaluating.',
    faqs: [
      {
        question: 'Is Jobber better than Housecall Pro for landscapers?',
        answer:
          'Jobber is often simpler for owner-operators. Housecall Pro wins when integrated payments and marketing matter as much as scheduling.',
      },
    ],
  },
];

export function getAlternativesBySlug(slug: string): AlternativesPage | undefined {
  return ALTERNATIVES.find((a) => a.slug === slug);
}

export const ALTERNATIVES_SLUGS = ALTERNATIVES.map((a) => a.slug);
