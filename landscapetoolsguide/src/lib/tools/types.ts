export type ToolCategory =
  | 'all-in-one-fsm'
  | 'landscape-specific'
  | 'lawn-maintenance'
  | 'design-build';

export type CrewSize = 'solo' | '2-5' | '6-15' | '15-plus';

export interface ToolFeatures {
  routeOptimization: boolean;
  recurringBilling: boolean;
  quickbooks: boolean;
  mobileApp: boolean;
  snowModule: boolean;
  designBuild: boolean;
  chemicalTracking: boolean;
}

export interface Tool {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  category: ToolCategory;
  websiteUrl: string;
  startingPriceUsd: number;
  pricingNote: string;
  bestFor: CrewSize[];
  features: ToolFeatures;
  pros: string[];
  cons: string[];
  verdict: string;
  relatedToolSlugs?: string[];
  relatedGuideSlugs?: string[];
}

export const TOOL_CATEGORY_LABEL: Record<ToolCategory, string> = {
  'all-in-one-fsm': 'All-in-one field service',
  'landscape-specific': 'Landscape-specific',
  'lawn-maintenance': 'Lawn maintenance',
  'design-build': 'Design-build',
};

export const CREW_SIZE_LABEL: Record<CrewSize, string> = {
  solo: 'Solo operator',
  '2-5': '2–5 crew',
  '6-15': '6–15 crew',
  '15-plus': '15+ crew',
};
