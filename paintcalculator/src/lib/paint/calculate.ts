import type { EstimateResult, PaintType, ProjectSettings, RoomInput } from './types';
import {
  DEFAULT_COATS,
  DEFAULT_SQFT_PER_GALLON,
  DEFAULT_WASTE,
  DOOR_DEDUCTION_SQFT,
  WINDOW_DEDUCTION_SQFT,
  isStainType,
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

export function roomFenceSqFt(room: RoomInput, bothSides: boolean): number {
  const length = dimensionToFeet(room.lengthFt, room.lengthIn);
  const height = dimensionToFeet(room.heightFt, room.heightIn);
  if (length <= 0 || height <= 0) return 0;
  const oneSide = length * height;
  return bothSides ? oneSide * 2 : oneSide;
}

export function roomDeckSqFt(room: RoomInput): number {
  return roomCeilingSqFt(room);
}

export function roomCeilingSqFt(room: RoomInput): number {
  const length = dimensionToFeet(room.lengthFt, room.lengthIn);
  const width = dimensionToFeet(room.widthFt, room.widthIn);
  if (length <= 0 || width <= 0) return 0;
  return length * width;
}

export function calculateEstimate(rooms: RoomInput[], settings: ProjectSettings): EstimateResult {
  const { surface } = settings;
  const includeWalls = surface === 'walls' || surface === 'both';
  const includeCeiling = surface === 'ceiling' || surface === 'both';
  const isFence = surface === 'fence';
  const isDeck = surface === 'deck';
  const skipDeductions = isFence || isDeck || isStainType(settings.paintType);

  const roomResults = rooms.map((room) => {
    let wallSqFt = 0;
    let ceilingSqFt = 0;

    if (isFence) {
      wallSqFt = roomFenceSqFt(room, settings.bothSides);
    } else if (isDeck) {
      ceilingSqFt = roomDeckSqFt(room);
    } else {
      wallSqFt = includeWalls ? roomWallSqFt(room) : 0;
      ceilingSqFt = includeCeiling ? roomCeilingSqFt(room) : 0;
    }

    return {
      id: room.id,
      name: room.name.trim() || 'Unnamed area',
      wallSqFt,
      ceilingSqFt,
      paintableSqFt: wallSqFt + ceilingSqFt,
    };
  });

  const totalWallSqFt = roomResults.reduce((sum, room) => sum + room.wallSqFt, 0);
  const totalCeilingSqFt = roomResults.reduce((sum, room) => sum + room.ceilingSqFt, 0);
  const totalPaintableSqFt = totalWallSqFt + totalCeilingSqFt;

  const doorCount = skipDeductions ? 0 : parseNonNegative(settings.doors);
  const windowCount = skipDeductions ? 0 : parseNonNegative(settings.windows);
  const doorDeductionSqFt = doorCount * DOOR_DEDUCTION_SQFT;
  const windowDeductionSqFt = windowCount * WINDOW_DEDUCTION_SQFT;
  const totalDeductionSqFt = doorDeductionSqFt + windowDeductionSqFt;
  const netPaintableSqFt = Math.max(0, totalPaintableSqFt - totalDeductionSqFt);

  const parsedWaste = parseNonNegative(settings.wastePercent);
  const wastePercent = settings.wastePercent.trim() === '' ? DEFAULT_WASTE : parsedWaste;
  const wasteSqFt = netPaintableSqFt * (wastePercent / 100);
  const totalWithWasteSqFt = netPaintableSqFt + wasteSqFt;

  const coats = Math.max(1, Math.round(parseNonNegative(settings.coats) || DEFAULT_COATS[settings.paintType]));
  const totalCoverageSqFt = totalWithWasteSqFt * coats;

  const sqFtPerGallon =
    parseNonNegative(settings.sqFtPerGallon) || DEFAULT_SQFT_PER_GALLON[settings.paintType];
  const rawGallons = sqFtPerGallon > 0 ? totalCoverageSqFt / sqFtPerGallon : 0;
  const gallonsNeeded = rawGallons > 0 ? Math.ceil(rawGallons * 100) / 100 : 0;
  const quartsNeeded = rawGallons > 0 ? Math.ceil(rawGallons * 4) : 0;

  const pricePerGallon = parseNonNegative(settings.pricePerGallon);
  const totalCost =
    pricePerGallon > 0 && gallonsNeeded > 0 ? Math.ceil(gallonsNeeded) * pricePerGallon : null;

  return {
    rooms: roomResults,
    totalWallSqFt,
    totalCeilingSqFt,
    totalPaintableSqFt,
    doorDeductionSqFt,
    windowDeductionSqFt,
    totalDeductionSqFt,
    netPaintableSqFt,
    wastePercent,
    wasteSqFt,
    totalWithWasteSqFt,
    coats,
    totalCoverageSqFt,
    sqFtPerGallon,
    gallonsNeeded,
    quartsNeeded,
    totalCost,
  };
}

export function formatSqFt(value: number): string {
  if (value === 0) return '0';
  if (value < 10) return value.toFixed(1);
  return Math.round(value).toLocaleString('en-US');
}

export function formatGallons(value: number): string {
  if (value === 0) return '0';
  if (value < 10) return value.toFixed(2);
  return value.toFixed(1);
}

export function formatCurrency(value: number): string {
  return value.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });
}

import { SITE_DOMAIN, SITE_NAME } from '../site';

export function paintTypeLabel(paintType: PaintType): string {
  if (paintType === 'primer') return 'Primer';
  if (paintType === 'exterior') return 'Exterior paint';
  if (paintType === 'fence_stain') return 'Fence stain';
  if (paintType === 'house_stain') return 'House stain';
  if (paintType === 'deck_stain') return 'Deck stain';
  return 'Interior paint';
}

export function productCategoryLabel(paintType: PaintType): string {
  return isStainType(paintType) ? 'Stain' : 'Paint';
}

export function surfaceLabel(surface: ProjectSettings['surface'], bothSides: boolean): string {
  if (surface === 'fence') return bothSides ? 'Fence (both sides)' : 'Fence (one side)';
  if (surface === 'deck') return 'Deck surface';
  if (surface === 'walls') return 'Exterior walls / siding';
  if (surface === 'ceiling') return 'Ceiling only';
  return 'Walls & ceiling';
}

export function buildShoppingList(settings: ProjectSettings, estimate: EstimateResult): string {
  const buyGallons = Math.ceil(estimate.gallonsNeeded);
  const lines: string[] = [
    `${SITE_NAME} Shopping List`,
    '========================',
    '',
    `${productCategoryLabel(settings.paintType)}: ${paintTypeLabel(settings.paintType)}`,
    `Surface: ${surfaceLabel(settings.surface, settings.bothSides)}`,
    `Coats: ${estimate.coats}`,
    `Waste allowance: ${estimate.wastePercent}%`,
    '',
    'Rooms:',
  ];

  for (const room of estimate.rooms) {
    if (room.paintableSqFt <= 0) continue;
    const parts: string[] = [];
    if (room.wallSqFt > 0) {
      parts.push(
        settings.surface === 'fence'
          ? `${formatSqFt(room.wallSqFt)} sq ft fence`
          : `${formatSqFt(room.wallSqFt)} sq ft walls`
      );
    }
    if (room.ceilingSqFt > 0) {
      parts.push(
        settings.surface === 'deck'
          ? `${formatSqFt(room.ceilingSqFt)} sq ft deck`
          : `${formatSqFt(room.ceilingSqFt)} sq ft ceiling`
      );
    }
    lines.push(`  • ${room.name}: ${parts.join(', ')}`);
  }

  lines.push(
    '',
    `Paintable area: ${formatSqFt(estimate.netPaintableSqFt)} sq ft`,
    `With waste: ${formatSqFt(estimate.totalWithWasteSqFt)} sq ft (+${formatSqFt(estimate.wasteSqFt)} sq ft)`,
    `Total coverage (${estimate.coats} coat${estimate.coats !== 1 ? 's' : ''}): ${formatSqFt(estimate.totalCoverageSqFt)} sq ft`,
    '',
    `Coverage per gallon: ${estimate.sqFtPerGallon} sq ft`,
    `${productCategoryLabel(settings.paintType)} to buy: ${formatGallons(estimate.gallonsNeeded)} gallons (${estimate.quartsNeeded} quarts if buying quarts)`,
    `Round up at store: ${buyGallons} gallon${buyGallons !== 1 ? 's' : ''}`,
  );

  if (estimate.totalCost !== null) {
    lines.push(`Estimated cost: ${formatCurrency(estimate.totalCost)}`);
  }

  lines.push('', `Generated at ${SITE_DOMAIN}`);
  return lines.join('\n');
}
