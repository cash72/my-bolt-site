export interface ComparisonPage {
  slug: string;
  title: string;
  description: string;
  toolSlugs: [string, string];
  summary: string;
  sections: { heading: string; paragraphs: string[] }[];
  faqs: { question: string; answer: string }[];
}

export const COMPARISONS: ComparisonPage[] = [
  {
    slug: 'jobber-vs-housecall-pro-landscaping',
    title: 'Jobber vs Housecall Pro for Landscaping',
    description:
      'Side-by-side comparison for lawn care and landscape companies choosing between Jobber and Housecall Pro — pricing, routes, payments, and who each tool fits best.',
    toolSlugs: ['jobber', 'housecall-pro'],
    summary:
      'Both are strong all-in-one picks for residential lawn and light landscape work. Jobber wins on simplicity and polish for small crews; Housecall Pro wins when you want payments and marketing baked in from day one.',
    sections: [
      {
        heading: 'Pricing and crew size',
        paragraphs: [
          'Jobber Core starts around $49/mo for one user and scales with Connect/Grow tiers. Housecall Pro Basic starts around $59/mo with similar per-user scaling.',
          'For a solo operator or 2–5 person maintenance crew, total cost is often similar — compare based on which tier features you actually need (automations, marketing, CSR tools).',
        ],
      },
      {
        heading: 'Routing and recurring work',
        paragraphs: [
          'Both handle recurring lawn routes, visit scheduling, and crew dispatch well. Jobber’s client hub and quote-to-invoice flow is slightly smoother for owner-operators.',
          'Housecall Pro adds stronger native payment processing — useful if you want card-on-file and fewer third-party payment tools.',
        ],
      },
      {
        heading: 'Landscape-specific workflows',
        paragraphs: [
          'Neither replaces LMN for design-build estimating. For mowing, bed maintenance, and basic install quotes, both are sufficient.',
          'Choose Jobber if you want the fastest onboarding. Choose Housecall Pro if reviews, marketing, and payments are equally important as scheduling.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Is Jobber or Housecall Pro better for solo landscapers?',
        answer:
          'Jobber is often easier for solos who want quotes, routes, and invoices without extra marketing modules. Housecall Pro can still work if you want integrated payments from the start.',
      },
      {
        question: 'Can either handle snow removal routes?',
        answer:
          'Both can schedule snow routes as jobs, but neither is snow-specialized. For heavy snow + landscape hybrid shops, also evaluate LMN or Service Autopilot.',
      },
    ],
  },
  {
    slug: 'lmn-vs-jobber-landscaping',
    title: 'LMN vs Jobber for Landscape Contractors',
    description:
      'Compare LMN and Jobber for landscape companies — when design-build estimating matters vs when simple maintenance routing is enough.',
    toolSlugs: ['lmn', 'jobber'],
    summary:
      'LMN is built for landscape contractors doing real estimating and job costing. Jobber is built for getting a small crew scheduled and paid quickly.',
    sections: [
      {
        heading: 'When Jobber is enough',
        paragraphs: [
          'Maintenance-only lawn care, basic landscaping upsells, and solo/small crews rarely need LMN’s estimating depth.',
          'Jobber’s lower price and faster setup win when your jobs are mostly recurring visits with flat pricing.',
        ],
      },
      {
        heading: 'When LMN is worth the cost',
        paragraphs: [
          'Install work, detailed proposals, budget vs actual job costing, and snow/enhancement divisions justify LMN’s ~$197/mo starting point.',
          'If your estimator lives in spreadsheets today, LMN is the industry-standard upgrade path.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Can I start on Jobber and switch to LMN later?',
        answer:
          'Yes — many companies start on Jobber or Housecall Pro under ~$1M revenue, then move to LMN or Aspire as install complexity grows.',
      },
    ],
  },
  {
    slug: 'jobber-vs-gorilladesk-landscaping',
    title: 'Jobber vs GorillaDesk for Lawn Care',
    description:
      'Compare Jobber and GorillaDesk for lawn care and landscape maintenance — routing, chemical tracking, pricing, and which fits residential crews.',
    toolSlugs: ['jobber', 'gorilladesk'],
    summary:
      'Jobber is the polished all-rounder for quotes, routes, and client communication. GorillaDesk is built for lawn treatment companies that need chemical logs and measurement-based billing.',
    sections: [
      {
        heading: 'Core strengths',
        paragraphs: [
          'Jobber excels at fast onboarding for solo operators and small crews doing mowing, bed work, and light installs. Client hub, online booking, and quote-to-invoice flow are mature.',
          'GorillaDesk targets lawn treatment and fertilization shops — built-in chemical tracking, property measurement, and route density tools matter more than design-build estimating.',
        ],
      },
      {
        heading: 'Routing and recurring visits',
        paragraphs: [
          'Both handle recurring lawn routes. Jobber’s UI is friendlier for owner-operators who also sell enhancements. GorillaDesk optimizes for treatment routes with product application history per property.',
          'If your revenue is mostly mowing and cleanup, Jobber is usually simpler. If you spray or fertilize and need compliance logs, GorillaDesk deserves a demo.',
        ],
      },
      {
        heading: 'Pricing snapshot',
        paragraphs: [
          'Jobber Core starts around $49/mo for one user. GorillaDesk pricing varies by crew size and treatment modules — compare total cost with the features you will actually turn on.',
          'Neither replaces LMN for heavy install estimating. Both are maintenance-first platforms.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Which is better for a fertilization company?',
        answer:
          'GorillaDesk is purpose-built for lawn treatment workflows and chemical records. Jobber can work but may need add-ons or workarounds for detailed application logs.',
      },
      {
        question: 'Can GorillaDesk handle hardscape quotes?',
        answer:
          'Basic quotes yes, but not LMN-level job costing. Hardscape-heavy companies often outgrow both and move to LMN or Aspire.',
      },
    ],
  },
  {
    slug: 'housecall-pro-vs-service-autopilot-landscaping',
    title: 'Housecall Pro vs Service Autopilot for Landscaping',
    description:
      'Housecall Pro vs Service Autopilot for lawn and landscape companies — payments, marketing, routing, and mid-size crew fit.',
    toolSlugs: ['housecall-pro', 'service-autopilot'],
    summary:
      'Housecall Pro leads on payments, reviews, and marketing for residential service businesses. Service Autopilot is deeper on lawn route optimization and operational automation at scale.',
    sections: [
      {
        heading: 'Who each tool fits',
        paragraphs: [
          'Housecall Pro suits residential landscapers who want card-on-file, automated review requests, and CSR tools as they grow past solo status.',
          'Service Autopilot fits established lawn companies with many recurring routes that need tighter route optimization and crew accountability.',
        ],
      },
      {
        heading: 'Payments and customer experience',
        paragraphs: [
          'Housecall Pro’s payment processing and consumer-facing booking are stronger out of the box — useful if you compete on convenience and Google reviews.',
          'Service Autopilot is more operations-back-office focused — excellent when your bottleneck is route density, not lead generation.',
        ],
      },
      {
        heading: 'Landscape install work',
        paragraphs: [
          'Both can quote basic installs. Design-build contractors doing detailed estimating should still evaluate LMN, Aspire, or SingleOps instead of forcing maintenance software to fit.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Is Service Autopilot only for large companies?',
        answer:
          'It shines at roughly 5+ crew members with dense routes, but some 3–5 person lawn companies adopt it early for optimization. Solos often find it heavy.',
      },
      {
        question: 'Does Housecall Pro do chemical tracking?',
        answer:
          'Not as deeply as GorillaDesk or LMN. Treatment-heavy shops should verify compliance needs before choosing HCP.',
      },
    ],
  },
  {
    slug: 'aspire-vs-lmn-landscaping',
    title: 'Aspire vs LMN for Landscape Contractors',
    description:
      'Aspire vs LMN for growing landscape and snow contractors — estimating, job costing, multi-branch operations, and when to upgrade from Jobber.',
    toolSlugs: ['aspire', 'lmn'],
    summary:
      'LMN is the industry standard for design-build estimating and job costing. Aspire targets larger multi-service contractors that need CRM, operations, and snow in one platform.',
    sections: [
      {
        heading: 'Company size and complexity',
        paragraphs: [
          'LMN is the go-to when install estimating, budgets vs actuals, and proposal detail are daily workflows — common from roughly $1M–$10M revenue.',
          'Aspire often appears when companies add branches, snow divisions, and need enterprise-style CRM plus operations — typically upper mid-market and larger.',
        ],
      },
      {
        heading: 'Estimating and job costing',
        paragraphs: [
          'LMN’s estimating roots are deep — landscape-specific assemblies, labor, and materials are first-class. Finance teams like its job cost reporting.',
          'Aspire covers estimating plus broader business development and account management — stronger when you sell multi-year maintenance plus install bundles at scale.',
        ],
      },
      {
        heading: 'Implementation reality',
        paragraphs: [
          'Both require real onboarding time — not weekend switches from Jobber. Budget training, data migration, and a phased rollout.',
          'If you are under $1M and mostly maintenance, Jobber or Housecall Pro may still be the right tool. LMN and Aspire earn their cost when install complexity grows.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Is LMN or Aspire better for snow removal?',
        answer:
          'Both handle snow contracts. Aspire is often chosen when snow is one division among several branches. LMN works well for landscape-first companies adding snow.',
      },
      {
        question: 'Can I switch from LMN to Aspire later?',
        answer:
          'Yes — some companies graduate from LMN to Aspire as they add branches and CRM needs. Plan a data export and estimator retraining window.',
      },
    ],
  },
];

export function getComparisonBySlug(slug: string): ComparisonPage | undefined {
  return COMPARISONS.find((c) => c.slug === slug);
}

export const COMPARISON_SLUGS = COMPARISONS.map((c) => c.slug);
