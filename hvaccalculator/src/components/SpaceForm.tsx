import { Plus, Trash2 } from 'lucide-react';
import type { SpaceInput } from '../lib/hvac/types';

interface SpaceFormProps {
  spaces: SpaceInput[];
  canAddSpace: boolean;
  onUpdate: (id: string, patch: Partial<SpaceInput>) => void;
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
            className="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/40"
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
            className="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/40"
            aria-label={`${label} inches`}
          />
          <span className="text-[10px] text-slate-400 mt-0.5 block">in</span>
        </div>
      </div>
    </div>
  );
}

export default function SpaceForm({ spaces, canAddSpace, onUpdate, onAdd, onRemove }: SpaceFormProps) {
  return (
    <div className="space-y-4">
      {spaces.map((space, index) => (
        <div
          key={space.id}
          className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 space-y-3"
        >
          <div className="flex items-center justify-between gap-2">
            <input
              type="text"
              value={space.name}
              onChange={(e) => onUpdate(space.id, { name: e.target.value })}
              className="font-medium bg-transparent border-b border-transparent hover:border-slate-200 dark:hover:border-slate-700 focus:border-sky-500 focus:outline-none px-1 py-0.5 text-sm"
              aria-label={`Space ${index + 1} name`}
            />
            {spaces.length > 1 && (
              <button
                type="button"
                onClick={() => onRemove(space.id)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-950/30 transition-colors"
                aria-label={`Remove ${space.name}`}
              >
                <Trash2 className="w-4 h-4" />
              </button>
            )}
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <DimensionInput
              label="Length"
              ft={space.lengthFt}
              inches={space.lengthIn}
              onFtChange={(value) => onUpdate(space.id, { lengthFt: value })}
              onInChange={(value) => onUpdate(space.id, { lengthIn: value })}
            />
            <DimensionInput
              label="Width"
              ft={space.widthFt}
              inches={space.widthIn}
              onFtChange={(value) => onUpdate(space.id, { widthFt: value })}
              onInChange={(value) => onUpdate(space.id, { widthIn: value })}
            />
            <DimensionInput
              label="Ceiling height"
              ft={space.heightFt}
              inches={space.heightIn}
              onFtChange={(value) => onUpdate(space.id, { heightFt: value })}
              onInChange={(value) => onUpdate(space.id, { heightIn: value })}
            />
          </div>
        </div>
      ))}

      {canAddSpace && (
        <button
          type="button"
          onClick={onAdd}
          className="flex items-center gap-2 text-sm font-medium text-sky-600 dark:text-sky-400 hover:text-sky-700 dark:hover:text-sky-300 transition-colors"
        >
          <Plus className="w-4 h-4" />
          Add space ({spaces.length}/5)
        </button>
      )}
    </div>
  );
}
