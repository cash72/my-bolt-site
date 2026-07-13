import type { ReactNode } from 'react';

interface FieldHintProps {
  children: ReactNode;
}

export default function FieldHint({ children }: FieldHintProps) {
  return <p className="mt-1 text-xs text-slate-400 dark:text-slate-500 leading-relaxed">{children}</p>;
}
