export interface BestPage {
  slug: string;
  title: string;
  description: string;
  toolSlugs: string[];
  intro: string;
  pickNotes: Record<string, string>;
  faqs: { question: string; answer: string }[];
}

export const BEST_PAGES: BestPage[] = [
  {
    slug: 'best-software-solo-landscaper',
    title: 'Best Landscaping Software for Solo Operators',
    description:
      'The best lawn care and landscaping software for one-person businesses — affordable, mobile-friendly, and quick to set up.',
    toolSlugs: ['jobber', 'fieldpulse', 'housecall-pro', 'gorilladesk'],
    intro:
      'Solo landscapers need fast quoting, simple routing, and invoicing without paying for enterprise features. These tools balance price and ease of use.',
    pickNotes: {
      jobber: 'Best overall polish — client hub, mobile app, QuickBooks sync.',
      fieldpulse: 'Best budget entry if you are testing software for the first time.',
      'housecall-pro': 'Best if you want card-on-file payments and review tools early.',
      gorilladesk: 'Best if you do lawn treatments and need chemical tracking.',
    },
    faqs: [
      {
        question: 'Do solo landscapers need expensive software?',
        answer:
          'No — plans from ~$39–$59/mo cover most solos. Avoid LMN or Aspire until you have install estimating complexity or multiple crews.',
      },
    ],
  },
  {
    slug: 'best-lawn-care-route-software',
    title: 'Best Lawn Care Route Optimization Software',
    description:
      'Software with strong route optimization for recurring lawn care routes — compare Jobber, Service Autopilot, GorillaDesk, and Housecall Pro.',
    toolSlugs: ['service-autopilot', 'jobber', 'housecall-pro', 'gorilladesk'],
    intro:
      'Recurring mowing and treatment routes live or die on efficient scheduling. These platforms prioritize route density, recurring visits, and crew dispatch.',
    pickNotes: {
      'service-autopilot': 'Deepest automations for high-volume recurring routes.',
      jobber: 'Best balance of route tools + modern UX for small and mid crews.',
      'housecall-pro': 'Strong for residential routes with payments at the door.',
      gorilladesk: 'Best when routes include chemical applications and treatment notes.',
    },
    faqs: [
      {
        question: 'Does route optimization matter for 50 lawns per week?',
        answer:
          'Yes — even small operators save fuel and time. Most FSM tools include basic route ordering; Service Autopilot goes further on automation.',
      },
    ],
  },
];

export function getBestPageBySlug(slug: string): BestPage | undefined {
  return BEST_PAGES.find((b) => b.slug === slug);
}

export const BEST_PAGE_SLUGS = BEST_PAGES.map((b) => b.slug);
