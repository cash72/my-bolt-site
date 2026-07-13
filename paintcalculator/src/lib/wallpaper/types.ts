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

export interface WallpaperSettings {
  rollWidthIn: string;
  rollLengthFt: string;
  patternRepeatIn: string;
  wastePercent: string;
  pricePerRoll: string;
  doors: string;
  windows: string;
}

export interface RoomResult {
  id: string;
  name: string;
  wallSqFt: number;
}

export interface WallpaperEstimate {
  rooms: RoomResult[];
  totalWallSqFt: number;
  doorDeductionSqFt: number;
  windowDeductionSqFt: number;
  totalDeductionSqFt: number;
  netWallSqFt: number;
  wastePercent: number;
  wasteSqFt: number;
  totalWithWasteSqFt: number;
  sqFtPerRoll: number;
  rollsNeeded: number;
  totalCost: number | null;
}

export const MAX_ROOMS = 5;
export const DEFAULT_WASTE = 15;
export const DEFAULT_ROLL_WIDTH_IN = 21;
export const DEFAULT_ROLL_LENGTH_FT = 33;
export const DOOR_DEDUCTION_SQFT = 20;
export const WINDOW_DEDUCTION_SQFT = 15;

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

export function defaultWallpaperSettings(): WallpaperSettings {
  return {
    rollWidthIn: String(DEFAULT_ROLL_WIDTH_IN),
    rollLengthFt: String(DEFAULT_ROLL_LENGTH_FT),
    patternRepeatIn: '0',
    wastePercent: String(DEFAULT_WASTE),
    pricePerRoll: '',
    doors: '1',
    windows: '1',
  };
}
