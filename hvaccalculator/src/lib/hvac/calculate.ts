import type { EstimateResult, ProjectSettings, SpaceInput, SpaceResult } from './types';
import {
  APPLICATION_LABEL,
  BASE_BTU_PER_SQFT,
  CLIMATE_MULTIPLIER,
  INSULATION_MULTIPLIER,
  MINI_SPLIT_BTU_SIZES,
  SUN_MULTIPLIER,
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

export function spaceAreaSqFt(space: SpaceInput): number {
  const length = dimensionToFeet(space.lengthFt, space.lengthIn);
  const width = dimensionToFeet(space.widthFt, space.widthIn);
  if (length <= 0 || width <= 0) return 0;
  return length * width;
}

export function spaceVolumeCuFt(space: SpaceInput): number {
  const area = spaceAreaSqFt(space);
  const height = dimensionToFeet(space.heightFt, space.heightIn) || 8;
  return area * height;
}

export function roundUpMiniSplitBtu(rawBtu: number): number {
  if (rawBtu <= 0) return 0;
  for (const size of MINI_SPLIT_BTU_SIZES) {
    if (size >= rawBtu) return size;
  }
  return MINI_SPLIT_BTU_SIZES[MINI_SPLIT_BTU_SIZES.length - 1];
}

export function nextMiniSplitSize(current: number): number | null {
  const idx = MINI_SPLIT_BTU_SIZES.indexOf(current as (typeof MINI_SPLIT_BTU_SIZES)[number]);
  if (idx === -1 || idx >= MINI_SPLIT_BTU_SIZES.length - 1) return null;
  return MINI_SPLIT_BTU_SIZES[idx + 1];
}

export function btuToTons(btu: number): number {
  return Math.round((btu / 12000) * 100) / 100;
}

function occupantAdjustment(occupants: number): number {
  if (occupants <= 2) return 0;
  return (occupants - 2) * 600;
}

function ceilingHeightFactor(avgHeightFt: number, isHighCeiling: boolean): number {
  if (isHighCeiling && avgHeightFt > 9) return 1.1;
  if (avgHeightFt > 10) return 1.15;
  if (avgHeightFt > 12) return 1.2;
  return 1;
}

export function calculateSpaceBtu(
  areaSqFt: number,
  avgHeightFt: number,
  settings: ProjectSettings
): { coolingBtu: number; heatingBtu: number } {
  if (areaSqFt <= 0) return { coolingBtu: 0, heatingBtu: 0 };

  const base = areaSqFt * BASE_BTU_PER_SQFT[settings.applicationType];
  let cooling =
    base *
    INSULATION_MULTIPLIER[settings.insulation] *
    SUN_MULTIPLIER[settings.sunExposure] *
    CLIMATE_MULTIPLIER[settings.climateZone] *
    ceilingHeightFactor(avgHeightFt, settings.isHighCeiling);

  cooling += occupantAdjustment(parseNonNegative(settings.occupants));
  if (settings.hasKitchenLoad) cooling += 4000;

  cooling = Math.round(cooling);
  const heating = Math.round(cooling * 1.15);

  return { coolingBtu: cooling, heatingBtu: heating };
}

export function calculateEstimate(spaces: SpaceInput[], settings: ProjectSettings): EstimateResult {
  const spaceResults: SpaceResult[] = spaces.map((space) => {
    const areaSqFt = spaceAreaSqFt(space);
    const volumeCuFt = spaceVolumeCuFt(space);
    const heightFt = dimensionToFeet(space.heightFt, space.heightIn) || 8;
    const { coolingBtu, heatingBtu } = calculateSpaceBtu(areaSqFt, heightFt, settings);
    const miniSplitBtu = roundUpMiniSplitBtu(coolingBtu);

    return {
      id: space.id,
      name: space.name.trim() || 'Unnamed space',
      areaSqFt,
      volumeCuFt,
      coolingBtu,
      heatingBtu,
      miniSplitBtu,
      tons: btuToTons(miniSplitBtu),
    };
  });

  const totalAreaSqFt = spaceResults.reduce((sum, s) => sum + s.areaSqFt, 0);
  const totalVolumeCuFt = spaceResults.reduce((sum, s) => sum + s.volumeCuFt, 0);
  const totalCoolingBtu = spaceResults.reduce((sum, s) => sum + s.coolingBtu, 0);
  const totalHeatingBtu = spaceResults.reduce((sum, s) => sum + s.heatingBtu, 0);
  const recommendedMiniSplitBtu = roundUpMiniSplitBtu(totalCoolingBtu);

  return {
    spaces: spaceResults,
    totalAreaSqFt,
    totalVolumeCuFt,
    totalCoolingBtu,
    totalHeatingBtu,
    recommendedMiniSplitBtu,
    recommendedTons: btuToTons(recommendedMiniSplitBtu),
    alternateMiniSplitBtu: nextMiniSplitSize(recommendedMiniSplitBtu),
  };
}

export function formatSqFt(value: number): string {
  if (value === 0) return '0';
  if (value < 10) return value.toFixed(1);
  return Math.round(value).toLocaleString('en-US');
}

export function formatBtu(value: number): string {
  if (value === 0) return '0';
  return Math.round(value).toLocaleString('en-US');
}

export function formatTons(value: number): string {
  if (value === 0) return '0';
  if (value < 10) return value.toFixed(2);
  return value.toFixed(1);
}

export function miniSplitLabel(btu: number): string {
  const tons = btuToTons(btu);
  return `${formatBtu(btu)} BTU (${formatTons(tons)} ton${tons !== 1 ? 's' : ''})`;
}

export function buildSizingSummary(settings: ProjectSettings, estimate: EstimateResult): string {
  const lines: string[] = [
    `${SITE_NAME} HVAC Sizing Summary`,
    '========================',
    '',
    `Application: ${APPLICATION_LABEL[settings.applicationType]}`,
    `Insulation: ${settings.insulation}`,
    `Sun exposure: ${settings.sunExposure}`,
    `Climate: ${settings.climateZone}`,
    '',
    'Spaces:',
  ];

  for (const space of estimate.spaces) {
    if (space.areaSqFt <= 0) continue;
    lines.push(
      `  • ${space.name}: ${formatSqFt(space.areaSqFt)} sq ft → ${formatBtu(space.coolingBtu)} BTU cooling`
    );
  }

  lines.push(
    '',
    `Total area: ${formatSqFt(estimate.totalAreaSqFt)} sq ft`,
    `Calculated cooling load: ${formatBtu(estimate.totalCoolingBtu)} BTU`,
    `Estimated heating load: ${formatBtu(estimate.totalHeatingBtu)} BTU`,
    '',
    `Recommended mini-split: ${miniSplitLabel(estimate.recommendedMiniSplitBtu)}`,
  );

  if (estimate.alternateMiniSplitBtu) {
    lines.push(`Upsize option: ${miniSplitLabel(estimate.alternateMiniSplitBtu)} (hot climates or poor insulation)`);
  }

  lines.push('', 'Estimates only — verify with a licensed HVAC pro before buying.', '', `Generated at ${SITE_DOMAIN}`);
  return lines.join('\n');
}
