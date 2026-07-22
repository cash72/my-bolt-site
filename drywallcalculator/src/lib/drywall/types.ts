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
  includeCeiling: boolean;
  sheetWidth: string;
  sheetHeight: string;
  wastePercent: string;
  pricePerSheet: string;
  pricePerMudBucket: string;
  pricePerScrewBox: string;
  screwsPerBox: string;
  doors: string;
  windows: string;
  estimateScrews: boolean;
}

export interface RoomResult {
  id: string;
  name: string;
  wallSqFt: number;
  ceilingSqFt: number;
  totalSqFt: number;
}

export interface EstimateResult {
  rooms: RoomResult[];
  totalWallSqFt: number;
  totalCeilingSqFt: number;
  totalSqFt: number;
  doorDeductionSqFt: number;
  windowDeductionSqFt: number;
  totalDeductionSqFt: number;
  netSqFt: number;
  wastePercent: number;
  wasteSqFt: number;
  totalWithWasteSqFt: number;
  sheetSqFt: number;
  sheetsNeeded: number;
  screwsEstimate: number | null;
  mudBuckets: number;
  screwBoxes: number | null;
  sheetCost: number | null;
  mudCost: number | null;
  screwCost: number | null;
  totalCost: number | null;
}

export const MAX_ROOMS = 5;

export const DEFAULT_WASTE = 10;

export const DEFAULT_SHEET_WIDTH = 4;
export const DEFAULT_SHEET_HEIGHT = 8;

export const DOOR_DEDUCTION_SQFT = 20;
export const WINDOW_DEDUCTION_SQFT = 15;

export const SCREWS_PER_SHEET = 32;

/** Rough Level 4 finish: ~1 five-gallon bucket per 200 sq ft hung. */
export const SQ_FT_PER_MUD_BUCKET = 200;

export const DEFAULT_SCREWS_PER_BOX = 1000;

export function createEmptyRoom(index: number): RoomInput {
  return {
    id: crypto.randomUUID(),
    name: index === 0 ? 'Room 1' : `Room ${index + 1}`,
    lengthFt: '',
    lengthIn: '',
    widthFt: '',
    widthIn: '',
    heightFt: '8',
    heightIn: '',
  };
}

export function defaultProjectSettings(includeCeiling = false): ProjectSettings {
  return {
    includeCeiling,
    sheetWidth: String(DEFAULT_SHEET_WIDTH),
    sheetHeight: String(DEFAULT_SHEET_HEIGHT),
    wastePercent: String(DEFAULT_WASTE),
    pricePerSheet: '',
    pricePerMudBucket: '',
    pricePerScrewBox: '',
    screwsPerBox: String(DEFAULT_SCREWS_PER_BOX),
    doors: '1',
    windows: '1',
    estimateScrews: true,
  };
}
