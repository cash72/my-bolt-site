import { useMemo, useState } from 'react';
import { calcMacros } from '../lib/metabolic/calculate';
import type { ActivityLevel, DietPlan, MacroInput, Sex } from '../lib/metabolic/types';

export function useMacroCalc(initialPlan: DietPlan = 'low_carb_ir') {
  const [input, setInput] = useState<MacroInput>({
    sex: 'female',
    age: 40,
    weightLbs: 170,
    heightFt: 5,
    heightIn: 6,
    activity: 'moderate',
    plan: initialPlan,
  });

  const result = useMemo(() => calcMacros(input), [input]);

  function update<K extends keyof MacroInput>(field: K, value: MacroInput[K]) {
    setInput((prev) => ({ ...prev, [field]: value }));
  }

  function setPlan(plan: DietPlan) {
    setInput((prev) => ({ ...prev, plan }));
  }

  return { input, result, update, setPlan };
}

export type { ActivityLevel, DietPlan, Sex };
