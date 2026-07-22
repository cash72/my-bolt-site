export type PaintType =
  | 'interior'
  | 'primer'
  | 'exterior'
  | 'fence_stain'
  | 'house_stain'
  | 'deck_stain';

export type SurfaceType = 'walls' | 'ceiling' | 'both' | 'fence' | 'deck' | 'trim';

export interface RoomInput {
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
  paintType: PaintType;
  surface: SurfaceType;
  bothSides: boolean;
  coats: string;
  wastePercent: string;
  sqFtPerGallon: string;
  pricePerGallon: string;
  doors: string;
  windows: string;
  /** Cabinets & trim mode — piece counts (not wall deductions). */
  cabinetDoors: string;
  trimDoors: string;
  trimLinearFt: string;
  trimHeightIn: string;
}

export interface RoomResult {
  id: string;
  name: string;
  wallSqFt: number;
  ceilingSqFt: number;
  paintableSqFt: number;
}

export interface EstimateResult {
  rooms: RoomResult[];
  totalWallSqFt: number;
  totalCeilingSqFt: number;
  totalPaintableSqFt: number;
  doorDeductionSqFt: number;
  windowDeductionSqFt: number;
  totalDeductionSqFt: number;
  netPaintableSqFt: number;
  wastePercent: number;
  wasteSqFt: number;
  totalWithWasteSqFt: number;
  coats: number;
  totalCoverageSqFt: number;
  sqFtPerGallon: number;
  gallonsNeeded: number;
  quartsNeeded: number;
  totalCost: number | null;
}

export const MAX_ROOMS = 5;

export const DEFAULT_WASTE = 10;

export const DEFAULT_COATS: Record<PaintType, number> = {
  interior: 2,
  primer: 1,
  exterior: 2,
  fence_stain: 1,
  house_stain: 2,
  deck_stain: 1,
};

export const DEFAULT_SQFT_PER_GALLON: Record<PaintType, number> = {
  interior: 350,
  primer: 300,
  exterior: 250,
  fence_stain: 150,
  house_stain: 200,
  deck_stain: 175,
};

export const DOOR_DEDUCTION_SQFT = 20;
export const WINDOW_DEDUCTION_SQFT = 15;
/** Average painted face for a kitchen cabinet door / drawer front. */
export const CABINET_DOOR_SQFT = 5;
/** One face of a standard interior door (bothSides doubles). */
export const TRIM_DOOR_FACE_SQFT = 20;
export const DEFAULT_TRIM_HEIGHT_IN = 3.5;
export const DEFAULT_TRIM_WASTE = 15;

export function isStainType(paintType: PaintType): boolean {
  return paintType === 'fence_stain' || paintType === 'house_stain' || paintType === 'deck_stain';
}

export function isTrimSurface(surface: SurfaceType): boolean {
  return surface === 'trim';
}

export function defaultSurfaceForPaintType(paintType: PaintType): SurfaceType {
  if (paintType === 'fence_stain') return 'fence';
  if (paintType === 'deck_stain') return 'deck';
  if (paintType === 'house_stain') return 'walls';
  return 'both';
}

export function paintTypeDefaults(paintType: PaintType): Partial<ProjectSettings> {
  const stain = isStainType(paintType);
  return {
    paintType,
    surface: defaultSurfaceForPaintType(paintType),
    bothSides: paintType === 'fence_stain',
    coats: String(DEFAULT_COATS[paintType]),
    sqFtPerGallon: String(DEFAULT_SQFT_PER_GALLON[paintType]),
    doors: stain ? '0' : '1',
    windows: stain ? '0' : '1',
  };
}

export function createEmptyRoom(index: number, surface: SurfaceType = 'both'): RoomInput {
  const isFence = surface === 'fence';
  const isDeck = surface === 'deck';
  const isTrim = surface === 'trim';
  return {
    id: crypto.randomUUID(),
    name: isFence
      ? index === 0
        ? 'Fence section 1'
        : `Fence section ${index + 1}`
      : isDeck
        ? index === 0
          ? 'Deck area 1'
          : `Deck area ${index + 1}`
        : isTrim
          ? 'Cabinets & trim'
          : index === 0
            ? 'Room 1'
            : `Room ${index + 1}`,
    lengthFt: '',
    lengthIn: '',
    widthFt: '',
    widthIn: '',
    heightFt: isFence ? '6' : isDeck || isTrim ? '' : '8',
    heightIn: '',
  };
}

export function defaultProjectSettings(paintType: PaintType = 'interior'): ProjectSettings {
  return {
    paintType,
    surface: defaultSurfaceForPaintType(paintType),
    bothSides: paintType === 'fence_stain',
    coats: String(DEFAULT_COATS[paintType]),
    wastePercent: String(DEFAULT_WASTE),
    sqFtPerGallon: String(DEFAULT_SQFT_PER_GALLON[paintType]),
    pricePerGallon: '',
    doors: isStainType(paintType) ? '0' : '1',
    windows: isStainType(paintType) ? '0' : '1',
    cabinetDoors: '12',
    trimDoors: '2',
    trimLinearFt: '80',
    trimHeightIn: String(DEFAULT_TRIM_HEIGHT_IN),
  };
}
