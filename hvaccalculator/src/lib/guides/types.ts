export type GuideCategory = 'sizing' | 'mini_split' | 'tiny_home' | 'rv' | 'cottage' | 'diy';

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
  sizing: 'Sizing basics',
  mini_split: 'Mini-split guides',
  tiny_home: 'Tiny homes',
  rv: 'RV & mobile',
  cottage: 'Cottages & cabins',
  diy: 'DIY install',
};
