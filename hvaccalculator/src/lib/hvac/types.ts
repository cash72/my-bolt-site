export type ApplicationType =
  | 'standard_room'
  | 'bedroom'
  | 'living_room'
  | 'tiny_home'
  | 'rv'
  | 'she_shed'
  | 'cottage'
  | 'garage_workshop'
  | 'sunroom';

export type InsulationLevel = 'good' | 'average' | 'poor' | 'none';

export type SunExposure = 'average' | 'sunny' | 'shaded';

export type ClimateZone = 'mild' | 'moderate' | 'hot_humid' | 'cold';

export interface SpaceInput {
  id: string;
  name: string;
  lengthFt: string;
  lengthIn: string;
  widthFt: string;
  widthIn: string;
  heightFt: string;
  heightIn: string;
}

export interface ProjectSettings {
  applicationType: ApplicationType;
  insulation: InsulationLevel;
  sunExposure: SunExposure;
  climateZone: ClimateZone;
  occupants: string;
  hasKitchenLoad: boolean;
  isHighCeiling: boolean;
}

export interface SpaceResult {
  id: string;
  name: string;
  areaSqFt: number;
  volumeCuFt: number;
  coolingBtu: number;
  heatingBtu: number;
  miniSplitBtu: number;
  tons: number;
}

export interface EstimateResult {
  spaces: SpaceResult[];
  totalAreaSqFt: number;
  totalVolumeCuFt: number;
  totalCoolingBtu: number;
  totalHeatingBtu: number;
  recommendedMiniSplitBtu: number;
  recommendedTons: number;
  alternateMiniSplitBtu: number | null;
}

export const MAX_SPACES = 5;

export const MINI_SPLIT_BTU_SIZES = [6000, 9000, 12000, 18000, 24000, 30000, 36000, 48000, 60000] as const;

/** Base cooling BTU per sq ft before insulation/sun/climate adjustments */
export const BASE_BTU_PER_SQFT: Record<ApplicationType, number> = {
  standard_room: 25,
  bedroom: 25,
  living_room: 30,
  tiny_home: 22,
  rv: 35,
  she_shed: 32,
  cottage: 28,
  garage_workshop: 30,
  sunroom: 35,
};

export const INSULATION_MULTIPLIER: Record<InsulationLevel, number> = {
  good: 0.85,
  average: 1,
  poor: 1.15,
  none: 1.25,
};

export const SUN_MULTIPLIER: Record<SunExposure, number> = {
  average: 1,
  sunny: 1.1,
  shaded: 0.9,
};

export const CLIMATE_MULTIPLIER: Record<ClimateZone, number> = {
  mild: 0.95,
  moderate: 1,
  hot_humid: 1.1,
  cold: 0.9,
};

export const APPLICATION_LABEL: Record<ApplicationType, string> = {
  standard_room: 'Standard room',
  bedroom: 'Bedroom',
  living_room: 'Living room',
  tiny_home: 'Tiny home',
  rv: 'RV / camper',
  she_shed: 'She-shed / workshop',
  cottage: 'Cottage / cabin',
  garage_workshop: 'Garage / workshop',
  sunroom: 'Sunroom / porch',
};

export function createEmptySpace(index: number): SpaceInput {
  return {
    id: crypto.randomUUID(),
    name: index === 0 ? 'Space 1' : `Space ${index + 1}`,
    lengthFt: '',
    lengthIn: '',
    widthFt: '',
    widthIn: '',
    heightFt: '8',
    heightIn: '',
  };
}

export function defaultProjectSettings(applicationType: ApplicationType = 'standard_room'): ProjectSettings {
  return {
    applicationType,
    insulation: applicationDefaults(applicationType).insulation ?? 'average',
    sunExposure: applicationDefaults(applicationType).sunExposure ?? 'average',
    climateZone: 'moderate',
    occupants: '2',
    hasKitchenLoad: applicationType === 'tiny_home' || applicationType === 'living_room',
    isHighCeiling: false,
  };
}

export function applicationDefaults(
  applicationType: ApplicationType
): Partial<ProjectSettings> {
  switch (applicationType) {
    case 'tiny_home':
      return { insulation: 'good', sunExposure: 'average', hasKitchenLoad: true };
    case 'rv':
      return { insulation: 'poor', sunExposure: 'sunny', hasKitchenLoad: false };
    case 'she_shed':
      return { insulation: 'poor', sunExposure: 'average', hasKitchenLoad: false };
    case 'cottage':
      return { insulation: 'average', sunExposure: 'average', hasKitchenLoad: false };
    case 'sunroom':
      return { insulation: 'poor', sunExposure: 'sunny', hasKitchenLoad: false };
    case 'garage_workshop':
      return { insulation: 'poor', sunExposure: 'average', hasKitchenLoad: false };
    default:
      return { insulation: 'average', sunExposure: 'average', hasKitchenLoad: false };
  }
}
