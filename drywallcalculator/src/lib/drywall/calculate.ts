import type { EstimateResult, ProjectSettings, RoomInput } from './types';
import {
  DEFAULT_SHEET_HEIGHT,
  DEFAULT_SHEET_WIDTH,
  DEFAULT_WASTE,
  DOOR_DEDUCTION_SQFT,
  SCREWS_PER_SHEET,
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

export function roomCeilingSqFt(room: RoomInput): number {
  const length = dimensionToFeet(room.lengthFt, room.lengthIn);
  const width = dimensionToFeet(room.widthFt, room.widthIn);
  if (length <= 0 || width <= 0) return 0;
  return length * width;
}

export function calculateEstimate(rooms: RoomInput[], settings: ProjectSettings): EstimateResult {
  const roomResults = rooms.map((room) => {
    const wallSqFt = roomWallSqFt(room);
    const ceilingSqFt = settings.includeCeiling ? roomCeilingSqFt(room) : 0;
    return {
      id: room.id,
      name: room.name.trim() || 'Unnamed room',
      wallSqFt,
      ceilingSqFt,
      totalSqFt: wallSqFt + ceilingSqFt,
    };
  });

  const totalWallSqFt = roomResults.reduce((sum, room) => sum + room.wallSqFt, 0);
  const totalCeilingSqFt = roomResults.reduce((sum, room) => sum + room.ceilingSqFt, 0);
  const totalSqFt = totalWallSqFt + totalCeilingSqFt;

  const doorCount = parseNonNegative(settings.doors);
  const windowCount = parseNonNegative(settings.windows);
  const doorDeductionSqFt = doorCount * DOOR_DEDUCTION_SQFT;
  const windowDeductionSqFt = windowCount * WINDOW_DEDUCTION_SQFT;
  const totalDeductionSqFt = doorDeductionSqFt + windowDeductionSqFt;
  const netSqFt = Math.max(0, totalSqFt - totalDeductionSqFt);

  const parsedWaste = parseNonNegative(settings.wastePercent);
  const wastePercent = settings.wastePercent.trim() === '' ? DEFAULT_WASTE : parsedWaste;
  const wasteSqFt = netSqFt * (wastePercent / 100);
  const totalWithWasteSqFt = netSqFt + wasteSqFt;

  const sheetWidth = parseNonNegative(settings.sheetWidth) || DEFAULT_SHEET_WIDTH;
  const sheetHeight = parseNonNegative(settings.sheetHeight) || DEFAULT_SHEET_HEIGHT;
  const sheetSqFt = sheetWidth * sheetHeight;
  const sheetsNeeded =
    sheetSqFt > 0 && totalWithWasteSqFt > 0 ? Math.ceil(totalWithWasteSqFt / sheetSqFt) : 0;

  const screwsEstimate =
    settings.estimateScrews && sheetsNeeded > 0 ? sheetsNeeded * SCREWS_PER_SHEET : null;

  const pricePerSheet = parseNonNegative(settings.pricePerSheet);
  const totalCost = pricePerSheet > 0 && sheetsNeeded > 0 ? sheetsNeeded * pricePerSheet : null;

  return {
    rooms: roomResults,
    totalWallSqFt,
    totalCeilingSqFt,
    totalSqFt,
    doorDeductionSqFt,
    windowDeductionSqFt,
    totalDeductionSqFt,
    netSqFt,
    wastePercent,
    wasteSqFt,
    totalWithWasteSqFt,
    sheetSqFt,
    sheetsNeeded,
    screwsEstimate,
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

export function sheetSizeLabel(width: number, height: number): string {
  return `${width}×${height} ft (${width * height} sq ft)`;
}

export function buildShoppingList(settings: ProjectSettings, estimate: EstimateResult): string {
  const sheetWidth = parseNonNegative(settings.sheetWidth) || DEFAULT_SHEET_WIDTH;
  const sheetHeight = parseNonNegative(settings.sheetHeight) || DEFAULT_SHEET_HEIGHT;

  const lines: string[] = [
    `${SITE_NAME} Shopping List`,
    '========================',
    '',
    `Sheet size: ${sheetSizeLabel(sheetWidth, sheetHeight)}`,
    `Include ceiling: ${settings.includeCeiling ? 'Yes' : 'No'}`,
    `Waste allowance: ${estimate.wastePercent}%`,
    '',
    'Rooms:',
  ];

  for (const room of estimate.rooms) {
    if (room.totalSqFt <= 0) continue;
    const parts: string[] = [];
    if (room.wallSqFt > 0) parts.push(`${formatSqFt(room.wallSqFt)} sq ft walls`);
    if (room.ceilingSqFt > 0) parts.push(`${formatSqFt(room.ceilingSqFt)} sq ft ceiling`);
    lines.push(`  • ${room.name}: ${parts.join(', ')}`);
  }

  lines.push(
    '',
    `Total area: ${formatSqFt(estimate.netSqFt)} sq ft`,
    `With waste: ${formatSqFt(estimate.totalWithWasteSqFt)} sq ft (+${formatSqFt(estimate.wasteSqFt)} sq ft)`,
    '',
    `Drywall sheets to buy: ${estimate.sheetsNeeded}`,
  );

  if (estimate.screwsEstimate !== null) {
    lines.push(`Screws estimate (rough): ${estimate.screwsEstimate.toLocaleString('en-US')}`);
  }

  if (estimate.totalCost !== null) {
    lines.push(`Estimated cost: ${formatCurrency(estimate.totalCost)}`);
  }

  lines.push('', `Generated at ${SITE_DOMAIN}`);
  return lines.join('\n');
}
