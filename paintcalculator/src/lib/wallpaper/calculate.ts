import type { RoomInput, WallpaperEstimate, WallpaperSettings } from './types';
import {
  DEFAULT_ROLL_LENGTH_FT,
  DEFAULT_ROLL_WIDTH_IN,
  DEFAULT_WASTE,
  DOOR_DEDUCTION_SQFT,
  WINDOW_DEDUCTION_SQFT,
} from './types';

function parseNonNegative(value: string): number {
  const n = parseFloat(value);
  if (!Number.isFinite(n) || n < 0) return 0;
  return n;
}

function dimensionToFeet(feet: string, inches: string): number {
  return parseNonNegative(feet) + parseNonNegative(inches) / 12;
}

export function roomWallSqFt(room: RoomInput): number {
  const length = dimensionToFeet(room.lengthFt, room.lengthIn);
  const width = dimensionToFeet(room.widthFt, room.widthIn);
  const height = dimensionToFeet(room.heightFt, room.heightIn);
  if (length <= 0 || width <= 0 || height <= 0) return 0;
  return 2 * height * (length + width);
}

export function calculateWallpaperEstimate(
  rooms: RoomInput[],
  settings: WallpaperSettings
): WallpaperEstimate {
  const roomResults = rooms.map((room) => ({
    id: room.id,
    name: room.name.trim() || 'Unnamed room',
    wallSqFt: roomWallSqFt(room),
  }));

  const totalWallSqFt = roomResults.reduce((sum, room) => sum + room.wallSqFt, 0);

  const doorCount = parseNonNegative(settings.doors);
  const windowCount = parseNonNegative(settings.windows);
  const doorDeductionSqFt = doorCount * DOOR_DEDUCTION_SQFT;
  const windowDeductionSqFt = windowCount * WINDOW_DEDUCTION_SQFT;
  const totalDeductionSqFt = doorDeductionSqFt + windowDeductionSqFt;
  const netWallSqFt = Math.max(0, totalWallSqFt - totalDeductionSqFt);

  let wastePercent = settings.wastePercent.trim() === '' ? DEFAULT_WASTE : parseNonNegative(settings.wastePercent);
  const patternRepeatIn = parseNonNegative(settings.patternRepeatIn);
  if (patternRepeatIn > 0 && wastePercent < 20) {
    wastePercent = Math.max(wastePercent, 20);
  }

  const wasteSqFt = netWallSqFt * (wastePercent / 100);
  const totalWithWasteSqFt = netWallSqFt + wasteSqFt;

  const rollWidthFt = parseNonNegative(settings.rollWidthIn) / 12 || DEFAULT_ROLL_WIDTH_IN / 12;
  const rollLengthFt = parseNonNegative(settings.rollLengthFt) || DEFAULT_ROLL_LENGTH_FT;
  const sqFtPerRoll = rollWidthFt * rollLengthFt;

  const rollsNeeded = sqFtPerRoll > 0 && totalWithWasteSqFt > 0 ? Math.ceil(totalWithWasteSqFt / sqFtPerRoll) : 0;

  const pricePerRoll = parseNonNegative(settings.pricePerRoll);
  const totalCost = pricePerRoll > 0 && rollsNeeded > 0 ? rollsNeeded * pricePerRoll : null;

  return {
    rooms: roomResults,
    totalWallSqFt,
    doorDeductionSqFt,
    windowDeductionSqFt,
    totalDeductionSqFt,
    netWallSqFt,
    wastePercent,
    wasteSqFt,
    totalWithWasteSqFt,
    sqFtPerRoll,
    rollsNeeded,
    totalCost,
  };
}

export function formatSqFt(value: number): string {
  if (value === 0) return '0';
  if (value < 10) return value.toFixed(1);
  return Math.round(value).toLocaleString('en-US');
}

export function formatCurrency(value: number): string {
  return value.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });
}

import { SITE_DOMAIN, SITE_NAME } from '../site';

export function buildWallpaperShoppingList(settings: WallpaperSettings, estimate: WallpaperEstimate): string {
  const lines: string[] = [
    `${SITE_NAME} — Wallpaper Shopping List`,
    '================================',
    '',
    `Roll size: ${settings.rollWidthIn}" × ${settings.rollLengthFt} ft (${formatSqFt(estimate.sqFtPerRoll)} sq ft/roll)`,
    patternRepeatLine(settings),
    `Waste allowance: ${estimate.wastePercent}%`,
    '',
    'Rooms:',
  ];

  for (const room of estimate.rooms) {
    if (room.wallSqFt <= 0) continue;
    lines.push(`  • ${room.name}: ${formatSqFt(room.wallSqFt)} sq ft walls`);
  }

  lines.push(
    '',
    `Wall area: ${formatSqFt(estimate.netWallSqFt)} sq ft`,
    `With waste: ${formatSqFt(estimate.totalWithWasteSqFt)} sq ft`,
    '',
    `Rolls to buy: ${estimate.rollsNeeded}`,
  );

  if (estimate.totalCost !== null) {
    lines.push(`Estimated cost: ${formatCurrency(estimate.totalCost)}`);
  }

  lines.push('', `Generated at ${SITE_DOMAIN}`);
  return lines.join('\n');
}

function patternRepeatLine(settings: WallpaperSettings): string {
  const repeat = parseNonNegative(settings.patternRepeatIn);
  return repeat > 0 ? `Pattern repeat: ${repeat}" (extra waste included)` : 'Pattern repeat: none';
}
