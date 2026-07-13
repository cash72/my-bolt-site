export type GuideCategory = 'planning' | 'mulch' | 'gravel' | 'topsoil' | 'installation';

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
  planning: 'Planning & math',
  mulch: 'Mulch & bark',
  gravel: 'Gravel & stone',
  topsoil: 'Topsoil & fill',
  installation: 'Bed prep & install',
};
