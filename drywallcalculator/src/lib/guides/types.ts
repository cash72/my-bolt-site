export type GuideCategory = 'planning' | 'installation' | 'finishing' | 'materials' | 'repair';

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
  planning: 'Planning & estimating',
  installation: 'Hanging drywall',
  finishing: 'Tape, mud & sand',
  materials: 'Materials & specs',
  repair: 'Patches & repair',
};
