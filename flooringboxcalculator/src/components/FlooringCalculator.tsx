import RoomForm from './RoomForm';
import ProjectSettingsForm from './ProjectSettingsForm';
import ResultsPanel from './ResultsPanel';
import { useFlooringEstimate } from '../hooks/useFlooringEstimate';
import type { MaterialType } from '../lib/flooring/types';

interface FlooringCalculatorProps {
  initialMaterial?: MaterialType;
  heading?: string;
  subheading?: string;
}

export default function FlooringCalculator({
  initialMaterial = 'laminate',
  heading = 'Flooring Calculator',
  subheading = 'Enter room sizes in feet and inches. Get square footage, waste, and how many boxes to buy.',
}: FlooringCalculatorProps) {
  const {
    rooms,
    settings,
    estimate,
    updateRoom,
    addRoom,
    removeRoom,
    setMaterial,
    updateSettings,
    canAddRoom,
  } = useFlooringEstimate(initialMaterial);

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
          <ProjectSettingsForm
            settings={settings}
            onMaterialChange={setMaterial}
            onUpdate={updateSettings}
          />
        </section>
      </div>

      <div className="lg:col-span-2">
        <div className="lg:sticky lg:top-20 space-y-6">
          <ResultsPanel estimate={estimate} settings={settings} />
        </div>
      </div>
    </div>
  );
}
