import BedForm from './BedForm';
import ProjectSettingsForm from './ProjectSettingsForm';
import ResultsPanel from './ResultsPanel';
import { useMulchEstimate } from '../hooks/useMulchEstimate';
import type { MaterialType } from '../lib/mulch/types';

interface MulchCalculatorProps {
  initialMaterialType?: MaterialType;
  initialDepthIn?: number;
  heading?: string;
  subheading?: string;
}

export default function MulchCalculator({
  initialMaterialType = 'mulch',
  initialDepthIn,
  heading = 'Mulch Calculator',
  subheading = 'Enter garden bed dimensions. Get cubic yards, bag counts, and optional cost estimates.',
}: MulchCalculatorProps) {
  const {
    beds,
    settings,
    estimate,
    updateBed,
    addBed,
    removeBed,
    setMaterialType,
    updateSettings,
    canAddBed,
  } = useMulchEstimate(initialMaterialType, initialDepthIn);

  return (
    <div className="grid lg:grid-cols-5 gap-8">
      <div className="lg:col-span-3 space-y-6">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2">{heading}</h1>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">{subheading}</p>
        </div>

        <section aria-labelledby="beds-heading">
          <h2 id="beds-heading" className="text-sm font-semibold text-slate-800 dark:text-slate-200 mb-3">
            Garden beds
          </h2>
          <BedForm
            beds={beds}
            canAddBed={canAddBed}
            onUpdate={updateBed}
            onAdd={addBed}
            onRemove={removeBed}
          />
        </section>

        <section aria-labelledby="settings-heading">
          <h2 id="settings-heading" className="text-sm font-semibold text-slate-800 dark:text-slate-200 mb-3">
            Project settings
          </h2>
          <ProjectSettingsForm
            settings={settings}
            onMaterialTypeChange={setMaterialType}
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
