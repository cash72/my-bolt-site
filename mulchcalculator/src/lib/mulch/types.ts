export type MaterialType = 'mulch' | 'gravel' | 'topsoil';

export interface RoomInput {
  id: string;
  name: string;
  lengthFt: string;
  lengthIn: string;
  widthFt: string;
  widthIn: string;
}

export interface ProjectSettings {
  depthIn: string;
  materialType: MaterialType;
  wastePercent: string;
  pricePerCubicYard: string;
}

export interface BedResult {
  id: string;
  name: string;
  areaSqFt: number;
}

export interface EstimateResult {
  beds: BedResult[];
  totalAreaSqFt: number;
  wastePercent: number;
  wasteSqFt: number;
  totalWithWasteSqFt: number;
  depthIn: number;
  cubicFeet: number;
  cubicYards: number;
  bagsNeeded: number;
  totalCost: number | null;
}

export const MAX_BEDS = 5;

export const DEFAULT_DEPTH = 3;

export const DEFAULT_WASTE = 10;

export const BAG_CU_FT = 2;

export function createEmptyBed(index: number): RoomInput {
  return {
    id: crypto.randomUUID(),
    name: index === 0 ? 'Bed 1' : `Bed ${index + 1}`,
    lengthFt: '',
    lengthIn: '',
    widthFt: '',
    widthIn: '',
  };
}

export function defaultProjectSettings(materialType: MaterialType = 'mulch'): ProjectSettings {
  return {
    depthIn: String(DEFAULT_DEPTH),
    materialType,
    wastePercent: String(DEFAULT_WASTE),
    pricePerCubicYard: '',
  };
}

export function materialTypeDefaults(materialType: MaterialType): Partial<ProjectSettings> {
  return {
    materialType,
    wastePercent: String(DEFAULT_WASTE),
  };
}
