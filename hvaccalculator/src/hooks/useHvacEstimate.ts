import { useMemo, useState } from 'react';
import { calculateEstimate } from '../lib/hvac/calculate';
import {
  applicationDefaults,
  createEmptySpace,
  defaultProjectSettings,
  MAX_SPACES,
  type ApplicationType,
  type ProjectSettings,
  type SpaceInput,
} from '../lib/hvac/types';

export function useHvacEstimate(initialApplication: ApplicationType = 'standard_room') {
  const [spaces, setSpaces] = useState<SpaceInput[]>(() => [createEmptySpace(0)]);
  const [settings, setSettings] = useState<ProjectSettings>(() => defaultProjectSettings(initialApplication));

  const estimate = useMemo(() => calculateEstimate(spaces, settings), [spaces, settings]);

  function updateSpace(id: string, patch: Partial<SpaceInput>) {
    setSpaces((prev) => prev.map((space) => (space.id === id ? { ...space, ...patch } : space)));
  }

  function addSpace() {
    setSpaces((prev) =>
      prev.length >= MAX_SPACES ? prev : [...prev, createEmptySpace(prev.length)]
    );
  }

  function removeSpace(id: string) {
    setSpaces((prev) => (prev.length <= 1 ? prev : prev.filter((space) => space.id !== id)));
  }

  function setApplicationType(applicationType: ApplicationType) {
    const defaults = applicationDefaults(applicationType);
    setSettings((prev) => ({
      ...prev,
      applicationType,
      ...defaults,
    }));
  }

  function updateSettings(patch: Partial<ProjectSettings>) {
    setSettings((prev) => ({ ...prev, ...patch }));
  }

  return {
    spaces,
    settings,
    estimate,
    updateSpace,
    addSpace,
    removeSpace,
    setApplicationType,
    updateSettings,
    canAddSpace: spaces.length < MAX_SPACES,
  };
}
