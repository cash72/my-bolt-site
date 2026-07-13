import type { EstimateResult, MaterialType, ProjectSettings, RoomInput } from './types';
import { BAG_CU_FT, DEFAULT_DEPTH, DEFAULT_WASTE } from './types';
import { SITE_DOMAIN, SITE_NAME } from '../site';

function parseNonNegative(value: string): number {
  const n = parseFloat(value);
  if (!Number.isFinite(n) || n < 0) return 0;
  return n;
}

function dimensionToFeet(feet: string, inches: string): number {
  return parseNonNegative(feet) + parseNonNegative(inches) / 12;
}

export function bedAreaSqFt(bed: RoomInput): number {
  const length = dimensionToFeet(bed.lengthFt, bed.lengthIn);
  const width = dimensionToFeet(bed.widthFt, bed.widthIn);
  if (length <= 0 || width <= 0) return 0;
  return length * width;
}

export function calculateEstimate(beds: RoomInput[], settings: ProjectSettings): EstimateResult {
  const bedResults = beds.map((bed) => ({
    id: bed.id,
    name: bed.name.trim() || 'Unnamed bed',
    areaSqFt: bedAreaSqFt(bed),
  }));

  const totalAreaSqFt = bedResults.reduce((sum, bed) => sum + bed.areaSqFt, 0);

  const parsedWaste = parseNonNegative(settings.wastePercent);
  const wastePercent = settings.wastePercent.trim() === '' ? DEFAULT_WASTE : parsedWaste;
  const wasteSqFt = totalAreaSqFt * (wastePercent / 100);
  const totalWithWasteSqFt = totalAreaSqFt + wasteSqFt;

  const depthIn = parseNonNegative(settings.depthIn) || DEFAULT_DEPTH;
  const cubicFeet = totalWithWasteSqFt * (depthIn / 12);
  const cubicYards = cubicFeet / 27;
  const bagsNeeded = cubicFeet > 0 ? Math.ceil(cubicFeet / BAG_CU_FT) : 0;

  const pricePerCubicYard = parseNonNegative(settings.pricePerCubicYard);
  const buyCubicYards = cubicYards > 0 ? Math.ceil(cubicYards * 100) / 100 : 0;
  const totalCost =
    pricePerCubicYard > 0 && buyCubicYards > 0 ? Math.ceil(buyCubicYards) * pricePerCubicYard : null;

  return {
    beds: bedResults,
    totalAreaSqFt,
    wastePercent,
    wasteSqFt,
    totalWithWasteSqFt,
    depthIn,
    cubicFeet,
    cubicYards: buyCubicYards,
    bagsNeeded,
    totalCost,
  };
}

export function formatSqFt(value: number): string {
  if (value === 0) return '0';
  if (value < 10) return value.toFixed(1);
  return Math.round(value).toLocaleString('en-US');
}

export function formatCubicYards(value: number): string {
  if (value === 0) return '0';
  if (value < 10) return value.toFixed(2);
  return value.toFixed(1);
}

export function formatCurrency(value: number): string {
  return value.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });
}

export function materialTypeLabel(materialType: MaterialType): string {
  if (materialType === 'gravel') return 'Gravel';
  if (materialType === 'topsoil') return 'Topsoil';
  return 'Mulch';
}

export function buildShoppingList(settings: ProjectSettings, estimate: EstimateResult): string {
  const buyCubicYards = Math.ceil(estimate.cubicYards);
  const lines: string[] = [
    `${SITE_NAME} Shopping List`,
    '========================',
    '',
    `Material: ${materialTypeLabel(settings.materialType)}`,
    `Depth: ${estimate.depthIn}"`,
    `Waste allowance: ${estimate.wastePercent}%`,
    '',
    'Beds:',
  ];

  for (const bed of estimate.beds) {
    if (bed.areaSqFt <= 0) continue;
    lines.push(`  • ${bed.name}: ${formatSqFt(bed.areaSqFt)} sq ft`);
  }

  lines.push(
    '',
    `Total area: ${formatSqFt(estimate.totalAreaSqFt)} sq ft`,
    `With waste: ${formatSqFt(estimate.totalWithWasteSqFt)} sq ft (+${formatSqFt(estimate.wasteSqFt)} sq ft)`,
    '',
    `Volume: ${formatCubicYards(estimate.cubicYards)} cubic yards (${Math.round(estimate.cubicFeet)} cu ft)`,
    `${materialTypeLabel(settings.materialType)} to buy: ${formatCubicYards(estimate.cubicYards)} cu yd`,
    `Round up at store: ${buyCubicYards} cubic yard${buyCubicYards !== 1 ? 's' : ''}`,
    `Bag option (2 cu ft): ${estimate.bagsNeeded} bag${estimate.bagsNeeded !== 1 ? 's' : ''}`,
  );

  if (estimate.totalCost !== null) {
    lines.push(`Estimated cost: ${formatCurrency(estimate.totalCost)}`);
  }

  lines.push('', `Generated at ${SITE_DOMAIN}`);
  return lines.join('\n');
}
