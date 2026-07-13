import type { ReactNode } from 'react';

interface LegalPageLayoutProps {
  title: string;
  children: ReactNode;
}

export default function LegalPageLayout({ title, children }: LegalPageLayoutProps) {
  return (
    <main id="main-content" className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-14" role="main">
      <h1 className="text-3xl font-bold tracking-tight mb-8">{title}</h1>
      <div className="prose prose-slate dark:prose-invert max-w-none space-y-6 text-slate-600 dark:text-slate-300 leading-relaxed">
        {children}
      </div>
    </main>
  );
}
