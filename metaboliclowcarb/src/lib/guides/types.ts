export type GuideCategory = 'fasting' | 'insulin-resistance' | 'metabolic-health';

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
  /** Primary tool to promote */
  toolPath?: string;
  toolLabel?: string;
  relatedRecipeSlugs?: string[];
  relatedGuideSlugs?: string[];
}

export const GUIDE_CATEGORY_LABEL: Record<GuideCategory, string> = {
  fasting: 'Fasting',
  'insulin-resistance': 'Insulin resistance',
  'metabolic-health': 'Metabolic health',
};
