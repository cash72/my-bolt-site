import SpaceForm from './SpaceForm';
import ProjectSettingsForm from './ProjectSettingsForm';
import ResultsPanel from './ResultsPanel';
import { useHvacEstimate } from '../hooks/useHvacEstimate';
import type { ApplicationType } from '../lib/hvac/types';

interface HvacCalculatorProps {
  initialApplication?: ApplicationType;
  heading?: string;
  subheading?: string;
}

export default function HvacCalculator({
  initialApplication = 'standard_room',
  heading = 'BTU & Mini-Split Calculator',
  subheading = 'Enter room dimensions. Get cooling BTU, heating estimate, and recommended mini-split size.',
}: HvacCalculatorProps) {
  const {
    spaces,
    settings,
    estimate,
    updateSpace,
    addSpace,
    removeSpace,
    setApplicationType,
    updateSettings,
    canAddSpace,
  } = useHvacEstimate(initialApplication);

  return (
    <div className="grid lg:grid-cols-5 gap-8">
      <div className="lg:col-span-3 space-y-6">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2">{heading}</h1>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">{subheading}</p>
        </div>

        <section aria-labelledby="spaces-heading">
          <h2 id="spaces-heading" className="text-sm font-semibold text-slate-800 dark:text-slate-200 mb-3">
            Space dimensions
          </h2>
          <SpaceForm
            spaces={spaces}
            canAddSpace={canAddSpace}
            onUpdate={updateSpace}
            onAdd={addSpace}
            onRemove={removeSpace}
          />
        </section>

        <section aria-labelledby="settings-heading">
          <h2 id="settings-heading" className="text-sm font-semibold text-slate-800 dark:text-slate-200 mb-3">
            Sizing settings
          </h2>
          <ProjectSettingsForm
            settings={settings}
            onApplicationChange={setApplicationType}
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
