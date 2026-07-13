import { useMemo, useState } from 'react';
import { calculateWallpaperEstimate } from '../lib/wallpaper/calculate';
import {
  createEmptyRoom,
  defaultWallpaperSettings,
  MAX_ROOMS,
  type RoomInput,
  type WallpaperSettings,
} from '../lib/wallpaper/types';

export function useWallpaperEstimate() {
  const [rooms, setRooms] = useState<RoomInput[]>(() => [createEmptyRoom(0)]);
  const [settings, setSettings] = useState<WallpaperSettings>(() => defaultWallpaperSettings());

  const estimate = useMemo(() => calculateWallpaperEstimate(rooms, settings), [rooms, settings]);

  function updateRoom(id: string, patch: Partial<RoomInput>) {
    setRooms((prev) => prev.map((room) => (room.id === id ? { ...room, ...patch } : room)));
  }

  function addRoom() {
    setRooms((prev) => (prev.length >= MAX_ROOMS ? prev : [...prev, createEmptyRoom(prev.length)]));
  }

  function removeRoom(id: string) {
    setRooms((prev) => (prev.length <= 1 ? prev : prev.filter((room) => room.id !== id)));
  }

  function updateSettings(patch: Partial<WallpaperSettings>) {
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
