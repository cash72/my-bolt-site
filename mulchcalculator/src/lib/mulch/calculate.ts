import type { EstimateResult, MaterialType, ProjectSettings, RoomInput } from './types';
import {
  BAG_CU_FT,
  DEFAULT_DEPTH,
  DEFAULT_SOD_PALLET_SQ_FT,
  DEFAULT_SOD_ROLL_SQ_FT,
  DEFAULT_WASTE,
} from './types';
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

  const isSod = settings.materialType === 'sod';

  const depthIn = isSod ? 0 : parseNonNegative(settings.depthIn) || DEFAULT_DEPTH;
  const cubicFeet = isSod ? 0 : totalWithWasteSqFt * (depthIn / 12);
  const cubicYardsRaw = cubicFeet / 27;
  const cubicYards = cubicYardsRaw > 0 ? Math.ceil(cubicYardsRaw * 100) / 100 : 0;
  const bagsNeeded = cubicFeet > 0 ? Math.ceil(cubicFeet / BAG_CU_FT) : 0;

  const sodRollSqFt = parseNonNegative(settings.sodRollSqFt) || DEFAULT_SOD_ROLL_SQ_FT;
  const sodPalletSqFt = parseNonNegative(settings.sodPalletSqFt) || DEFAULT_SOD_PALLET_SQ_FT;

  const rollsNeeded =
    isSod && totalWithWasteSqFt > 0 && sodRollSqFt > 0
      ? Math.ceil(totalWithWasteSqFt / sodRollSqFt)
      : null;
  const palletsNeeded =
    isSod && totalWithWasteSqFt > 0 && sodPalletSqFt > 0
      ? Math.ceil(totalWithWasteSqFt / sodPalletSqFt)
      : null;

  const pricePerCubicYard = parseNonNegative(settings.pricePerCubicYard);
  const pricePerBag = parseNonNegative(settings.pricePerBag);
  const pricePerRoll = parseNonNegative(settings.pricePerRoll);
  const pricePerPallet = parseNonNegative(settings.pricePerPallet);

  const bulkCost =
    !isSod && pricePerCubicYard > 0 && cubicYards > 0
      ? Math.ceil(cubicYards) * pricePerCubicYard
      : null;
  const bagCost =
    !isSod && pricePerBag > 0 && bagsNeeded > 0 ? bagsNeeded * pricePerBag : null;
  const rollCost =
    isSod && pricePerRoll > 0 && rollsNeeded !== null && rollsNeeded > 0
      ? rollsNeeded * pricePerRoll
      : null;
  const palletCost =
    isSod && pricePerPallet > 0 && palletsNeeded !== null && palletsNeeded > 0
      ? palletsNeeded * pricePerPallet
      : null;

  let totalCost: number | null = null;
  if (isSod) {
    // Prefer roll pricing when both set; otherwise use whichever is available.
    if (rollCost !== null) totalCost = rollCost;
    else if (palletCost !== null) totalCost = palletCost;
  } else if (bulkCost !== null || bagCost !== null) {
    // Prefer bulk when both set (typical landscaping order).
    totalCost = bulkCost ?? bagCost;
  }

  return {
    beds: bedResults,
    totalAreaSqFt,
    wastePercent,
    wasteSqFt,
    totalWithWasteSqFt,
    depthIn,
    cubicFeet,
    cubicYards,
    bagsNeeded,
    rollsNeeded,
    palletsNeeded,
    bulkCost,
    bagCost,
    rollCost,
    palletCost,
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
  if (materialType === 'sod') return 'Sod';
  return 'Mulch';
}

export function buildShoppingList(settings: ProjectSettings, estimate: EstimateResult): string {
  const isSod = settings.materialType === 'sod';
  const lines: string[] = [
    `${SITE_NAME} Shopping List`,
    '========================',
    '',
    `Material: ${materialTypeLabel(settings.materialType)}`,
  ];

  if (!isSod) {
    lines.push(`Depth: ${estimate.depthIn}"`);
  }
  lines.push(`Waste allowance: ${estimate.wastePercent}%`, '', 'Areas:');

  for (const bed of estimate.beds) {
    if (bed.areaSqFt <= 0) continue;
    lines.push(`  • ${bed.name}: ${formatSqFt(bed.areaSqFt)} sq ft`);
  }

  lines.push(
    '',
    `Total area: ${formatSqFt(estimate.totalAreaSqFt)} sq ft`,
    `With waste: ${formatSqFt(estimate.totalWithWasteSqFt)} sq ft (+${formatSqFt(estimate.wasteSqFt)} sq ft)`,
    '',
  );

  if (isSod) {
    if (estimate.rollsNeeded !== null) {
      lines.push(`Sod rolls to buy: ${estimate.rollsNeeded}`);
    }
    if (estimate.palletsNeeded !== null) {
      lines.push(`Sod pallets to buy: ${estimate.palletsNeeded}`);
    }
    if (estimate.rollCost !== null) {
      lines.push(`Roll cost: ${formatCurrency(estimate.rollCost)}`);
    }
    if (estimate.palletCost !== null) {
      lines.push(`Pallet cost: ${formatCurrency(estimate.palletCost)}`);
    }
  } else {
    const buyCubicYards = Math.ceil(estimate.cubicYards);
    lines.push(
      `Volume: ${formatCubicYards(estimate.cubicYards)} cubic yards (${Math.round(estimate.cubicFeet)} cu ft)`,
      `${materialTypeLabel(settings.materialType)} to buy: ${formatCubicYards(estimate.cubicYards)} cu yd`,
      `Round up at store: ${buyCubicYards} cubic yard${buyCubicYards !== 1 ? 's' : ''}`,
      `Bag option (2 cu ft): ${estimate.bagsNeeded} bag${estimate.bagsNeeded !== 1 ? 's' : ''}`,
    );
    if (estimate.bulkCost !== null) {
      lines.push(`Bulk cost: ${formatCurrency(estimate.bulkCost)}`);
    }
    if (estimate.bagCost !== null) {
      lines.push(`Bag cost: ${formatCurrency(estimate.bagCost)}`);
    }
  }

  if (estimate.totalCost !== null) {
    lines.push(`Estimated total: ${formatCurrency(estimate.totalCost)}`);
  }

  lines.push('', `Generated at ${SITE_DOMAIN}`);
  return lines.join('\n');
}
