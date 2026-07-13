import { useMemo, useState } from 'react';
import { calculateEstimate } from '../lib/flooring/calculate';
import {
  createEmptyRoom,
  defaultProjectSettings,
  MAX_ROOMS,
  type MaterialType,
  type ProjectSettings,
  type RoomInput,
} from '../lib/flooring/types';

export function useFlooringEstimate(initialMaterial: MaterialType = 'laminate') {
  const [rooms, setRooms] = useState<RoomInput[]>(() => [createEmptyRoom(0)]);
  const [settings, setSettings] = useState<ProjectSettings>(() => defaultProjectSettings(initialMaterial));

  const estimate = useMemo(() => calculateEstimate(rooms, settings), [rooms, settings]);

  function updateRoom(id: string, patch: Partial<RoomInput>) {
    setRooms((prev) => prev.map((room) => (room.id === id ? { ...room, ...patch } : room)));
  }

  function addRoom() {
    setRooms((prev) => (prev.length >= MAX_ROOMS ? prev : [...prev, createEmptyRoom(prev.length)]));
  }

  function removeRoom(id: string) {
    setRooms((prev) => (prev.length <= 1 ? prev : prev.filter((room) => room.id !== id)));
  }

  function setMaterial(material: MaterialType) {
    const defaults = {
      laminate: { waste: 10, box: 20 },
      tile: { waste: 15, box: 10 },
      carpet: { waste: 10, box: 45 },
    }[material];
    setSettings((prev) => ({
      ...prev,
      material,
      wastePercent: String(defaults.waste),
      sqFtPerBox: String(defaults.box),
    }));
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
    setMaterial,
    updateSettings,
    canAddRoom: rooms.length < MAX_ROOMS,
  };
}
