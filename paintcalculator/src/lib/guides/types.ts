export type GuideCategory = 'prep' | 'paint' | 'wallpaper' | 'stain' | 'exterior';

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
  paint: 'Interior paint',
  wallpaper: 'Wallpaper',
  stain: 'Stain & deck',
  exterior: 'Exterior',
};
