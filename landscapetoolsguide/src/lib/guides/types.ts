export type GuideCategory = 'buying-guide' | 'comparison' | 'pricing' | 'operations';

export interface GuideSection {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
}

export interface Guide {
  slug: string;
  category: GuideCategory;
  title: string;
  description: string;
  readMinutes: number;
  sections: GuideSection[];
  faqs: { question: string; answer: string }[];
  relatedToolSlugs?: string[];
  relatedGuideSlugs?: string[];
  /** Primary CTA (comparison, best-of, etc.) */
  ctaPath?: string;
  ctaLabel?: string;
}

export const GUIDE_CATEGORY_LABEL: Record<GuideCategory, string> = {
  'buying-guide': 'Buying guide',
  comparison: 'Comparison',
  pricing: 'Pricing',
  operations: 'Operations',
};
