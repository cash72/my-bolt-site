import { useMemo, useState } from 'react';
import { calculateEstimate } from '../lib/paint/calculate';
import {
  createEmptyRoom,
  defaultProjectSettings,
  MAX_ROOMS,
  paintTypeDefaults,
  type PaintType,
  type ProjectSettings,
  type RoomInput,
  type SurfaceType,
} from '../lib/paint/types';

export function usePaintEstimate(initialPaintType: PaintType = 'interior', initialSurface?: SurfaceType) {
  const [rooms, setRooms] = useState<RoomInput[]>(() => [
    createEmptyRoom(0, initialSurface ?? defaultProjectSettings(initialPaintType).surface),
  ]);
  const [settings, setSettings] = useState<ProjectSettings>(() => {
    const defaults = defaultProjectSettings(initialPaintType);
    if (!initialSurface) return defaults;
    if (initialSurface === 'trim') {
      return {
        ...defaults,
        surface: 'trim',
        wastePercent: '15',
        bothSides: true,
        doors: '0',
        windows: '0',
      };
    }
    return { ...defaults, surface: initialSurface };
  });

  const estimate = useMemo(() => calculateEstimate(rooms, settings), [rooms, settings]);

  function updateRoom(id: string, patch: Partial<RoomInput>) {
    setRooms((prev) => prev.map((room) => (room.id === id ? { ...room, ...patch } : room)));
  }

  function addRoom() {
    setRooms((prev) =>
      prev.length >= MAX_ROOMS ? prev : [...prev, createEmptyRoom(prev.length, settings.surface)]
    );
  }

  function removeRoom(id: string) {
    setRooms((prev) => (prev.length <= 1 ? prev : prev.filter((room) => room.id !== id)));
  }

  function setPaintType(paintType: PaintType) {
    const defaults = paintTypeDefaults(paintType);
    const surface = defaults.surface ?? settings.surface;
    setSettings((prev) => ({ ...prev, ...defaults }));
    setRooms([createEmptyRoom(0, surface)]);
  }

  function updateSettings(patch: Partial<ProjectSettings>) {
    setSettings((prev) => ({ ...prev, ...patch }));
  }

  return {
    rooms,
    settings,
    estimate,
    updateRoom,
    addRoom,
    removeRoom,
    setPaintType,
    updateSettings,
    canAddRoom: rooms.length < MAX_ROOMS,
  };
}
