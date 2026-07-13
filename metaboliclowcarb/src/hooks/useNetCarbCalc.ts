import { useMemo, useState } from 'react';
import { calcNetCarbs } from '../lib/metabolic/calculate';
import type { NetCarbInput } from '../lib/metabolic/types';

const DEFAULT: NetCarbInput = {
  totalCarbsG: 0,
  fiberG: 0,
  sugarAlcoholsG: 0,
  servings: 1,
};

export function useNetCarbCalc() {
  const [input, setInput] = useState<NetCarbInput>(DEFAULT);

  const result = useMemo(() => calcNetCarbs(input), [input]);

  function update(field: keyof NetCarbInput, value: number) {
    setInput((prev) => ({ ...prev, [field]: value }));
  }

  return { input, result, update };
}
