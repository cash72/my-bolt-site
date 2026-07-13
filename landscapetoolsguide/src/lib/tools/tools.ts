import type { Tool } from './types';

/** Curated landscaping & lawn care business software — researched from public pricing pages. */
export const TOOLS: Tool[] = [
  {
    slug: 'jobber',
    name: 'Jobber',
    tagline: 'Popular all-in-one FSM for small lawn and landscape crews',
    description:
      'Jobber handles quoting, scheduling, invoicing, and client management for home and field service businesses. Widely used by solo operators and small maintenance crews.',
    category: 'all-in-one-fsm',
    websiteUrl: 'https://www.getjobber.com',
    startingPriceUsd: 49,
    pricingNote: 'Core plan from ~$49/mo (1 user); Connect/Grow tiers add automations and more users.',
    bestFor: ['solo', '2-5'],
    features: {
      routeOptimization: true,
      recurringBilling: true,
      quickbooks: true,
      mobileApp: true,
      snowModule: false,
      designBuild: false,
      chemicalTracking: false,
    },
    pros: [
      'Very polished mobile app for crews',
      'Easy client hub and online booking',
      'Strong QuickBooks integration',
    ],
    cons: [
      'Less depth for design-build estimating vs LMN',
      'Per-user pricing adds up past 5 crew',
    ],
    verdict:
      'Best starting point for maintenance-focused landscapers and solo lawn care operators who want one simple system for quotes, routes, and invoices.',
    relatedToolSlugs: ['housecall-pro', 'lmn', 'fieldpulse'],
    relatedGuideSlugs: ['how-to-choose-lawn-care-software', 'jobber-alternatives-landscaping'],
  },
  {
    slug: 'housecall-pro',
    name: 'Housecall Pro',
    tagline: 'All-in-one platform for home service pros including lawn & landscape',
    description:
      'Housecall Pro bundles scheduling, dispatch, payments, and marketing tools. Common choice for residential lawn care and light landscaping.',
    category: 'all-in-one-fsm',
    websiteUrl: 'https://www.housecallpro.com',
    startingPriceUsd: 59,
    pricingNote: 'Basic from ~$59/mo; higher tiers add CSR AI, marketing, and more users.',
    bestFor: ['solo', '2-5', '6-15'],
    features: {
      routeOptimization: true,
      recurringBilling: true,
      quickbooks: true,
      mobileApp: true,
      snowModule: false,
      designBuild: false,
      chemicalTracking: false,
    },
    pros: [
      'Built-in payment processing and card-on-file',
      'Marketing and review tools included',
      'Scales to mid-size residential crews',
    ],
    cons: [
      'Can feel heavy for solo operators who only need scheduling',
      'Landscape-specific estimating is basic',
    ],
    verdict:
      'Strong pick for growing residential lawn companies that want payments and marketing in the same stack as scheduling.',
    relatedToolSlugs: ['jobber', 'gorilladesk', 'service-autopilot'],
    relatedGuideSlugs: ['how-to-choose-lawn-care-software', 'housecall-pro-alternatives'],
  },
  {
    slug: 'lmn',
    name: 'LMN (Landscape Management Network)',
    tagline: 'Landscape-industry software for estimating, budgeting, and operations',
    description:
      'LMN is built specifically for landscape contractors — strong on estimating, job costing, and design-build workflows rather than generic home services.',
    category: 'landscape-specific',
    websiteUrl: 'https://golmn.com',
    startingPriceUsd: 197,
    pricingNote: 'Pro plans typically from ~$197/mo; priced for serious landscape contractors.',
    bestFor: ['2-5', '6-15', '15-plus'],
    features: {
      routeOptimization: true,
      recurringBilling: true,
      quickbooks: true,
      mobileApp: true,
      snowModule: true,
      designBuild: true,
      chemicalTracking: true,
    },
    pros: [
      'Industry-standard for design-build and install estimating',
      'Budgeting and job costing depth',
      'Snow and enhancement modules',
    ],
    cons: [
      'Higher price and learning curve',
      'Overkill for solo maintenance-only operators',
    ],
    verdict:
      'The right choice when you do install work, detailed estimates, and need true landscape job costing — not just route-based mowing.',
    relatedToolSlugs: ['aspire', 'singleops', 'jobber'],
    relatedGuideSlugs: ['lmn-vs-jobber-landscaping'],
  },
  {
    slug: 'service-autopilot',
    name: 'Service Autopilot',
    tagline: 'Automation-heavy platform for recurring lawn and landscape routes',
    description:
      'Service Autopilot focuses on recurring service businesses — routing, automations, and crew management for maintenance-heavy companies.',
    category: 'lawn-maintenance',
    websiteUrl: 'https://www.serviceautopilot.com',
    startingPriceUsd: 97,
    pricingNote: 'Plans from ~$97/mo depending on features and crew size.',
    bestFor: ['2-5', '6-15'],
    features: {
      routeOptimization: true,
      recurringBilling: true,
      quickbooks: true,
      mobileApp: true,
      snowModule: true,
      designBuild: false,
      chemicalTracking: false,
    },
    pros: [
      'Strong recurring-route automations',
      'Good for multi-crew maintenance companies',
      'Snow add-on workflows',
    ],
    cons: [
      'UI feels dated vs Jobber/HCP',
      'Less suited to one-off design projects',
    ],
    verdict:
      'Worth a look if your revenue is mostly recurring maintenance routes and you want deep automation over polish.',
    relatedToolSlugs: ['jobber', 'aspire', 'gorilladesk'],
  },
  {
    slug: 'aspire',
    name: 'Aspire (ServiceTitan landscape)',
    tagline: 'Enterprise landscape business management for larger contractors',
    description:
      'Aspire targets mid-to-large landscape companies with complex operations — multi-branch, install + maintenance, and detailed financial reporting.',
    category: 'landscape-specific',
    websiteUrl: 'https://www.youraspire.com',
    startingPriceUsd: 0,
    pricingNote: 'Custom pricing — typically for $3M+ revenue landscape firms; demo required.',
    bestFor: ['6-15', '15-plus'],
    features: {
      routeOptimization: true,
      recurringBilling: true,
      quickbooks: true,
      mobileApp: true,
      snowModule: true,
      designBuild: true,
      chemicalTracking: true,
    },
    pros: [
      'Deep operations and reporting for large firms',
      'Handles install, maintenance, and snow under one roof',
      'Strong industry reputation at scale',
    ],
    cons: [
      'Not practical for solos or small startups',
      'Implementation takes months, not a weekend',
    ],
    verdict:
      'Only relevant once you have multiple crews, branches, or $3M+ revenue — otherwise start with Jobber, HCP, or LMN.',
    relatedToolSlugs: ['lmn', 'singleops'],
  },
  {
    slug: 'gorilladesk',
    name: 'GorillaDesk',
    tagline: 'Lawn care and pest-focused scheduling and billing',
    description:
      'GorillaDesk is popular with lawn treatment and route-based companies — chemical tracking, recurring visits, and simple crew apps.',
    category: 'lawn-maintenance',
    websiteUrl: 'https://gorilladesk.com',
    startingPriceUsd: 49,
    pricingNote: 'From ~$49/mo; tiers based on active customers and features.',
    bestFor: ['solo', '2-5', '6-15'],
    features: {
      routeOptimization: true,
      recurringBilling: true,
      quickbooks: true,
      mobileApp: true,
      snowModule: false,
      designBuild: false,
      chemicalTracking: true,
    },
    pros: [
      'Chemical and treatment tracking built in',
      'Simple for fertilization / lawn treatment routes',
      'Affordable entry price',
    ],
    cons: [
      'Less known for hardscape or design-build',
      'Fewer integrations than Jobber ecosystem',
    ],
    verdict:
      'Strong niche pick for fertilization, weed control, and treatment-heavy lawn companies — less ideal for full-service landscape install.',
    relatedToolSlugs: ['housecall-pro', 'service-autopilot'],
  },
  {
    slug: 'fieldpulse',
    name: 'FieldPulse',
    tagline: 'Affordable FSM for small trade and lawn businesses',
    description:
      'FieldPulse offers quoting, scheduling, and invoicing at a lower price point — often compared to Jobber for budget-conscious startups.',
    category: 'all-in-one-fsm',
    websiteUrl: 'https://www.fieldpulse.com',
    startingPriceUsd: 39,
    pricingNote: 'From ~$39/mo; good for very small teams testing software for the first time.',
    bestFor: ['solo', '2-5'],
    features: {
      routeOptimization: true,
      recurringBilling: true,
      quickbooks: true,
      mobileApp: true,
      snowModule: false,
      designBuild: false,
      chemicalTracking: false,
    },
    pros: ['Lower cost entry', 'Quick setup', 'Decent mobile app'],
    cons: ['Less landscape-specific depth', 'Smaller ecosystem than Jobber/HCP'],
    verdict:
      'A budget alternative when you are validating software spend before committing to Jobber or Housecall Pro.',
    relatedToolSlugs: ['jobber', 'housecall-pro'],
  },
  {
    slug: 'singleops',
    name: 'SingleOps',
    tagline: 'Operations platform for commercial landscape and tree care',
    description:
      'SingleOps combines CRM, estimating, scheduling, and invoicing with a focus on commercial landscape and tree care contractors.',
    category: 'landscape-specific',
    websiteUrl: 'https://www.singleops.com',
    startingPriceUsd: 0,
    pricingNote: 'Custom quote based on users and modules; mid-market pricing.',
    bestFor: ['6-15', '15-plus'],
    features: {
      routeOptimization: true,
      recurringBilling: true,
      quickbooks: true,
      mobileApp: true,
      snowModule: true,
      designBuild: true,
      chemicalTracking: false,
    },
    pros: [
      'Commercial job workflows and estimating',
      'Tree care and landscape install support',
      'Good reporting for ops managers',
    ],
    cons: ['Not aimed at solo lawn mowing', 'Demo-first sales process'],
    verdict:
      'Better fit for commercial-focused landscape or tree companies outgrowing consumer-grade FSM tools.',
    relatedToolSlugs: ['lmn', 'aspire'],
  },
];

export function getToolBySlug(slug: string): Tool | undefined {
  return TOOLS.find((t) => t.slug === slug);
}

export function getToolsByCategory(category: Tool['category']): Tool[] {
  return TOOLS.filter((t) => t.category === category);
}

export const TOOL_SLUGS = TOOLS.map((t) => t.slug);
