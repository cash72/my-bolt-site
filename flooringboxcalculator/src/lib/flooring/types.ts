export type MaterialType = 'laminate' | 'tile' | 'carpet';

export interface RoomInput {
  id: string;
  name: string;
  lengthFt: string;
  lengthIn: string;
  widthFt: string;
  widthIn: string;
}

export interface ProjectSettings {
  material: MaterialType;
  wastePercent: string;
  sqFtPerBox: string;
  pricePerBox: string;
  materialPricePerSqFt: string;
  installPricePerSqFt: string;
}

export interface RoomResult {
  id: string;
  name: string;
  sqFt: number;
}

export interface EstimateResult {
  rooms: RoomResult[];
  totalSqFt: number;
  wastePercent: number;
  wasteSqFt: number;
  totalWithWasteSqFt: number;
  sqFtPerBox: number;
  boxesNeeded: number;
  sqYardsNeeded: number | null;
  coveredSqFt: number;
  leftoverSqFt: number;
  totalCost: number | null;
  wasteCost: number | null;
  materialCost: number | null;
  installCost: number | null;
}

export const MAX_ROOMS = 5;

export const DEFAULT_WASTE: Record<MaterialType, number> = {
  laminate: 10,
  tile: 15,
  carpet: 10,
};

export const DEFAULT_SQFT_PER_BOX: Record<MaterialType, number> = {
  laminate: 20,
  tile: 10,
  carpet: 45,
};

export function createEmptyRoom(index: number): RoomInput {
  return {
    id: crypto.randomUUID(),
    name: index === 0 ? 'Room 1' : `Room ${index + 1}`,
    lengthFt: '',
    lengthIn: '',
    widthFt: '',
    widthIn: '',
  };
}

export function defaultProjectSettings(material: MaterialType = 'laminate'): ProjectSettings {
  return {
    material,
    wastePercent: String(DEFAULT_WASTE[material]),
    sqFtPerBox: String(DEFAULT_SQFT_PER_BOX[material]),
    pricePerBox: '',
    materialPricePerSqFt: '',
    installPricePerSqFt: '',
  };
}
