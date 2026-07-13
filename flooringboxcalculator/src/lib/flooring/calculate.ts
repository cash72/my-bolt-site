import type { EstimateResult, MaterialType, ProjectSettings, RoomInput } from './types';
import { DEFAULT_WASTE } from './types';

function isCarpet(material: MaterialType): boolean {
  return material === 'carpet';
}

function parseNonNegative(value: string): number {
  const n = parseFloat(value);
  if (!Number.isFinite(n) || n < 0) return 0;
  return n;
}

export function dimensionsToSqFt(lengthFt: string, lengthIn: string, widthFt: string, widthIn: string): number {
  const length = parseNonNegative(lengthFt) + parseNonNegative(lengthIn) / 12;
  const width = parseNonNegative(widthFt) + parseNonNegative(widthIn) / 12;
  return length * width;
}

export function calculateEstimate(rooms: RoomInput[], settings: ProjectSettings): EstimateResult {
  const roomResults = rooms.map((room) => ({
    id: room.id,
    name: room.name.trim() || 'Unnamed room',
    sqFt: dimensionsToSqFt(room.lengthFt, room.lengthIn, room.widthFt, room.widthIn),
  }));

  const totalSqFt = roomResults.reduce((sum, room) => sum + room.sqFt, 0);

  const parsedWaste = parseNonNegative(settings.wastePercent);
  const wastePercent =
    settings.wastePercent.trim() === ''
      ? DEFAULT_WASTE[settings.material]
      : parsedWaste;

  const wasteSqFt = totalSqFt * (wastePercent / 100);
  const totalWithWasteSqFt = totalSqFt + wasteSqFt;

  const sqFtPerBox = parseNonNegative(settings.sqFtPerBox);
  const isCarpet = settings.material === 'carpet';

  let boxesNeeded = 0;
  let sqYardsNeeded: number | null = null;
  let coveredSqFt = 0;

  if (isCarpet && totalWithWasteSqFt > 0) {
    sqYardsNeeded = Math.ceil((totalWithWasteSqFt / 9) * 100) / 100;
    boxesNeeded = Math.ceil(totalWithWasteSqFt / 9);
    coveredSqFt = boxesNeeded * 9;
  } else if (sqFtPerBox > 0) {
    boxesNeeded = Math.ceil(totalWithWasteSqFt / sqFtPerBox);
    coveredSqFt = boxesNeeded * sqFtPerBox;
  }

  const leftoverSqFt = Math.max(0, coveredSqFt - totalWithWasteSqFt);

  const pricePerBox = parseNonNegative(settings.pricePerBox);
  const totalCost = pricePerBox > 0 && boxesNeeded > 0 ? boxesNeeded * pricePerBox : null;
  const wasteCost =
    totalCost !== null && totalWithWasteSqFt > 0
      ? (wasteSqFt / totalWithWasteSqFt) * totalCost
      : null;

  return {
    rooms: roomResults,
    totalSqFt,
    wastePercent,
    wasteSqFt,
    totalWithWasteSqFt,
    sqFtPerBox,
    boxesNeeded,
    sqYardsNeeded,
    coveredSqFt,
    leftoverSqFt,
    totalCost,
    wasteCost,
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

export function materialLabel(material: MaterialType): string {
  if (material === 'laminate') return 'Laminate';
  if (material === 'carpet') return 'Carpet';
  return 'Tile';
}

export function buildShoppingList(
  settings: ProjectSettings,
  estimate: EstimateResult
): string {
  const lines: string[] = [
    `${SITE_NAME} Shopping List`,
    '========================',
    '',
    `Material: ${materialLabel(settings.material)}`,
    `Waste allowance: ${estimate.wastePercent}%`,
    '',
    'Rooms:',
  ];

  for (const room of estimate.rooms) {
    if (room.sqFt <= 0) continue;
    lines.push(`  • ${room.name}: ${formatSqFt(room.sqFt)} sq ft`);
  }

  lines.push(
    '',
    `Total area: ${formatSqFt(estimate.totalSqFt)} sq ft`,
    `With waste: ${formatSqFt(estimate.totalWithWasteSqFt)} sq ft (+${formatSqFt(estimate.wasteSqFt)} sq ft waste)`,
    '',
    isCarpet(settings.material)
      ? `Square yards to buy: ${estimate.boxesNeeded} (${formatSqFt(estimate.totalWithWasteSqFt)} sq ft)`
      : `Coverage per box: ${estimate.sqFtPerBox || '—'} sq ft`,
    isCarpet(settings.material)
      ? `Order: ${estimate.boxesNeeded} sq yd`
      : `Boxes to buy: ${estimate.boxesNeeded}`,
  );

  if (estimate.totalCost !== null) {
    lines.push(`Estimated cost: ${formatCurrency(estimate.totalCost)}`);
    if (estimate.wasteCost !== null) {
      lines.push(`Waste portion (~): ${formatCurrency(estimate.wasteCost)}`);
    }
  }

  lines.push('', `Generated at ${SITE_DOMAIN}`);
  return lines.join('\n');
}
