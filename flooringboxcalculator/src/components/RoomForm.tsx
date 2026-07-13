import { Plus, Trash2 } from 'lucide-react';
import type { RoomInput } from '../lib/flooring/types';

interface RoomFormProps {
  rooms: RoomInput[];
  canAddRoom: boolean;
  onUpdate: (id: string, patch: Partial<RoomInput>) => void;
  onAdd: () => void;
  onRemove: (id: string) => void;
}

function DimensionInput({
  label,
  ft,
  inches,
  onFtChange,
  onInChange,
}: {
  label: string;
  ft: string;
  inches: string;
  onFtChange: (value: string) => void;
  onInChange: (value: string) => void;
}) {
  return (
    <div>
      <label className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1.5">{label}</label>
      <div className="flex gap-2">
        <div className="flex-1">
          <input
            type="number"
            min="0"
            step="1"
            inputMode="numeric"
            placeholder="ft"
            value={ft}
            onChange={(e) => onFtChange(e.target.value)}
            className="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
            aria-label={`${label} feet`}
          />
          <span className="text-[10px] text-slate-400 mt-0.5 block">ft</span>
        </div>
        <div className="w-20">
          <input
            type="number"
            min="0"
            max="11"
            step="1"
            inputMode="numeric"
            placeholder="in"
            value={inches}
            onChange={(e) => onInChange(e.target.value)}
            className="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
            aria-label={`${label} inches`}
          />
          <span className="text-[10px] text-slate-400 mt-0.5 block">in</span>
        </div>
      </div>
    </div>
  );
}

export default function RoomForm({ rooms, canAddRoom, onUpdate, onAdd, onRemove }: RoomFormProps) {
  return (
    <div className="space-y-4">
      {rooms.map((room, index) => (
        <div
          key={room.id}
          className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 space-y-3"
        >
          <div className="flex items-center justify-between gap-2">
            <input
              type="text"
              value={room.name}
              onChange={(e) => onUpdate(room.id, { name: e.target.value })}
              className="font-medium bg-transparent border-b border-transparent hover:border-slate-200 dark:hover:border-slate-700 focus:border-emerald-500 focus:outline-none px-1 py-0.5 text-sm"
              aria-label={`Room ${index + 1} name`}
            />
            {rooms.length > 1 && (
              <button
                type="button"
                onClick={() => onRemove(room.id)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-950/30 transition-colors"
                aria-label={`Remove ${room.name}`}
              >
                <Trash2 className="w-4 h-4" />
              </button>
            )}
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <DimensionInput
              label="Length"
              ft={room.lengthFt}
              inches={room.lengthIn}
              onFtChange={(value) => onUpdate(room.id, { lengthFt: value })}
              onInChange={(value) => onUpdate(room.id, { lengthIn: value })}
            />
            <DimensionInput
              label="Width"
              ft={room.widthFt}
              inches={room.widthIn}
              onFtChange={(value) => onUpdate(room.id, { widthFt: value })}
              onInChange={(value) => onUpdate(room.id, { widthIn: value })}
            />
          </div>
        </div>
      ))}

      {canAddRoom && (
        <button
          type="button"
          onClick={onAdd}
          className="flex items-center gap-2 text-sm font-medium text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors"
        >
          <Plus className="w-4 h-4" />
          Add room ({rooms.length}/5)
        </button>
      )}
    </div>
  );
}
