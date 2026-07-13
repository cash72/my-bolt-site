import { useMemo, useState } from 'react';
import { calculateEstimate } from '../lib/drywall/calculate';
import {
  createEmptyRoom,
  defaultProjectSettings,
  MAX_ROOMS,
  type ProjectSettings,
  type RoomInput,
} from '../lib/drywall/types';

export function useDrywallEstimate(initialIncludeCeiling = false) {
  const [rooms, setRooms] = useState<RoomInput[]>(() => [createEmptyRoom(0)]);
  const [settings, setSettings] = useState<ProjectSettings>(() =>
    defaultProjectSettings(initialIncludeCeiling)
  );

  const estimate = useMemo(() => calculateEstimate(rooms, settings), [rooms, settings]);

  function updateRoom(id: string, patch: Partial<RoomInput>) {
    setRooms((prev) => prev.map((room) => (room.id === id ? { ...room, ...patch } : room)));
  }

  function addRoom() {
    setRooms((prev) =>
      prev.length >= MAX_ROOMS ? prev : [...prev, createEmptyRoom(prev.length)]
    );
  }

  function removeRoom(id: string) {
    setRooms((prev) => (prev.length <= 1 ? prev : prev.filter((room) => room.id !== id)));
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
    updateSettings,
    canAddRoom: rooms.length < MAX_ROOMS,
  };
}
