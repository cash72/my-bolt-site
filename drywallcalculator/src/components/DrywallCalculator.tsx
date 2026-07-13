import RoomForm from './RoomForm';
import DrywallSettingsForm from './DrywallSettingsForm';
import ResultsPanel from './ResultsPanel';
import { useDrywallEstimate } from '../hooks/useDrywallEstimate';

interface DrywallCalculatorProps {
  initialIncludeCeiling?: boolean;
  heading?: string;
  subheading?: string;
}

export default function DrywallCalculator({
  initialIncludeCeiling = false,
  heading = 'Drywall Calculator',
  subheading = 'Enter room dimensions and ceiling height. Get wall area, sheet counts, and an optional screw estimate.',
}: DrywallCalculatorProps) {
  const {
    rooms,
    settings,
    estimate,
    updateRoom,
    addRoom,
    removeRoom,
    updateSettings,
    canAddRoom,
  } = useDrywallEstimate(initialIncludeCeiling);

  return (
    <div className="grid lg:grid-cols-5 gap-8">
      <div className="lg:col-span-3 space-y-6">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2">{heading}</h1>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">{subheading}</p>
        </div>

        <section aria-labelledby="rooms-heading">
          <h2 id="rooms-heading" className="text-sm font-semibold text-slate-800 dark:text-slate-200 mb-3">
            Rooms
          </h2>
          <RoomForm
            rooms={rooms}
            canAddRoom={canAddRoom}
            onUpdate={updateRoom}
            onAdd={addRoom}
            onRemove={removeRoom}
          />
        </section>

        <section aria-labelledby="settings-heading">
          <h2 id="settings-heading" className="text-sm font-semibold text-slate-800 dark:text-slate-200 mb-3">
            Project settings
          </h2>
          <DrywallSettingsForm settings={settings} onUpdate={updateSettings} />
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
