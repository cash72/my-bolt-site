import { useMemo, useState } from 'react';
import { calculateEstimate } from '../lib/mulch/calculate';
import {
  createEmptyBed,
  defaultProjectSettings,
  materialTypeDefaults,
  MAX_BEDS,
  type MaterialType,
  type ProjectSettings,
  type RoomInput,
} from '../lib/mulch/types';

export function useMulchEstimate(initialMaterialType: MaterialType = 'mulch', initialDepthIn?: number) {
  const [beds, setBeds] = useState<RoomInput[]>(() => [createEmptyBed(0)]);
  const [settings, setSettings] = useState<ProjectSettings>(() => {
    const defaults = defaultProjectSettings(initialMaterialType);
    return initialDepthIn !== undefined ? { ...defaults, depthIn: String(initialDepthIn) } : defaults;
  });

  const estimate = useMemo(() => calculateEstimate(beds, settings), [beds, settings]);

  function updateBed(id: string, patch: Partial<RoomInput>) {
    setBeds((prev) => prev.map((bed) => (bed.id === id ? { ...bed, ...patch } : bed)));
  }

  function addBed() {
    setBeds((prev) => (prev.length >= MAX_BEDS ? prev : [...prev, createEmptyBed(prev.length)]));
  }

  function removeBed(id: string) {
    setBeds((prev) => (prev.length <= 1 ? prev : prev.filter((bed) => bed.id !== id)));
  }

  function setMaterialType(materialType: MaterialType) {
    const defaults = materialTypeDefaults(materialType);
    setSettings((prev) => ({ ...prev, ...defaults }));
  }

  function updateSettings(patch: Partial<ProjectSettings>) {
    setSettings((prev) => ({ ...prev, ...patch }));
  }

  return {
    beds,
    settings,
    estimate,
    updateBed,
    addBed,
    removeBed,
    setMaterialType,
    updateSettings,
    canAddBed: beds.length < MAX_BEDS,
  };
}
