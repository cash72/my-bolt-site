import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';

const LINK_RE = /\[([^\]]+)\]\(([^)]+)\)/g;

/** Renders editorial copy with optional `[label](/path)` internal links. */
export function renderEditorialText(text: string): ReactNode {
  const parts: ReactNode[] = [];
  let lastIndex = 0;

  for (const match of text.matchAll(LINK_RE)) {
    const index = match.index ?? 0;
    if (index > lastIndex) {
      parts.push(text.slice(lastIndex, index));
    }
    parts.push(
      <Link
        key={index}
        to={match[2]}
        className="text-teal-600 dark:text-teal-400 hover:underline font-medium"
      >
        {match[1]}
      </Link>
    );
    lastIndex = index + match[0].length;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts.length === 1 ? parts[0] : <>{parts}</>;
}
