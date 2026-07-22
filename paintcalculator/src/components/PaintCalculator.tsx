import RoomForm from './RoomForm';
import ProjectSettingsForm from './ProjectSettingsForm';
import ResultsPanel from './ResultsPanel';
import { usePaintEstimate } from '../hooks/usePaintEstimate';
import type { PaintType, SurfaceType } from '../lib/paint/types';

interface PaintCalculatorProps {
  initialPaintType?: PaintType;
  initialSurface?: SurfaceType;
  heading?: string;
  subheading?: string;
}

export default function PaintCalculator({
  initialPaintType = 'interior',
  initialSurface,
  heading = 'Paint Calculator',
  subheading = 'Enter room dimensions and ceiling height. Get paintable square footage and gallons to buy.',
}: PaintCalculatorProps) {
  const {
    rooms,
    settings,
    estimate,
    updateRoom,
    addRoom,
    removeRoom,
    setPaintType,
    updateSettings,
    canAddRoom,
  } = usePaintEstimate(initialPaintType, initialSurface);

  return (
    <div className="grid lg:grid-cols-5 gap-8">
      <div className="lg:col-span-3 space-y-6">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2">{heading}</h1>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">{subheading}</p>
        </div>

        <section aria-labelledby="rooms-heading">
          <h2 id="rooms-heading" className="text-sm font-semibold text-slate-800 dark:text-slate-200 mb-3">
            {settings.surface === 'fence'
              ? 'Fence sections'
              : settings.surface === 'deck'
                ? 'Deck areas'
                : settings.surface === 'trim'
                  ? 'Cabinets, doors & trim'
                  : 'Rooms'}
          </h2>
          {settings.surface === 'trim' ? (
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
              Enter piece counts in project settings below — no room dimensions needed for cabinets and trim.
            </p>
          ) : (
            <RoomForm
              rooms={rooms}
              surface={settings.surface}
              canAddRoom={canAddRoom}
              onUpdate={updateRoom}
              onAdd={addRoom}
              onRemove={removeRoom}
            />
          )}
        </section>

        <section aria-labelledby="settings-heading">
          <h2 id="settings-heading" className="text-sm font-semibold text-slate-800 dark:text-slate-200 mb-3">
            Project settings
          </h2>
          <ProjectSettingsForm
            settings={settings}
            onPaintTypeChange={setPaintType}
            onUpdate={updateSettings}
          />
        </section>
      </div>

      <div className="lg:col-span-2">
        <div className="lg:sticky lg:top-20">
          <ResultsPanel estimate={estimate} settings={settings} />
        </div>
      </div>
    </div>
  );
}
