export type GuideCategory = 'prep' | 'laminate' | 'tile' | 'carpet' | 'planning';

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
  toolPath?: string;
  toolLabel?: string;
  relatedGuideSlugs?: string[];
}

export const GUIDE_CATEGORY_LABEL: Record<GuideCategory, string> = {
  prep: 'Prep & how-to',
  laminate: 'Laminate & vinyl',
  tile: 'Tile',
  carpet: 'Carpet',
  planning: 'Planning & quantities',
};
