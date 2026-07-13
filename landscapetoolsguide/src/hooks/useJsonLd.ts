import { useEffect } from 'react';

export function useJsonLd(id: string, data: Record<string, unknown> | null) {
  const serialized = data ? JSON.stringify(data) : null;

  useEffect(() => {
    if (!serialized) return;

    let script = document.getElementById(id) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement('script');
      script.id = id;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.textContent = serialized;

    return () => {
      document.getElementById(id)?.remove();
    };
  }, [id, serialized]);
}
