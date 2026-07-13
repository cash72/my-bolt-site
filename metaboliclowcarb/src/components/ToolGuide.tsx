interface ToolGuideProps {
  title?: string;
  steps: string[];
}

export default function ToolGuide({ title = 'How to use this', steps }: ToolGuideProps) {
  return (
    <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 p-4 sm:p-5">
      <h2 className="text-sm font-semibold text-slate-800 dark:text-slate-200 mb-3">{title}</h2>
      <ol className="space-y-2 text-sm text-slate-600 dark:text-slate-400 list-decimal list-inside">
        {steps.map((step) => (
          <li key={step} className="leading-relaxed pl-1">
            {step}
          </li>
        ))}
      </ol>
    </div>
  );
}
