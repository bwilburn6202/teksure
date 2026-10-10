import { createContext, useContext, useEffect, useState } from 'react';
import type { GuideWithNav } from './guide-nav';
import { EMBEDDED_GUIDE_ID, takeEmbeddedGuide } from './embedded-guide';

/**
 * One guide for /guides/:slug, without the 17 MB library.
 *
 * - Server render: a synchronous lookup from GuideSourceContext (entry-server.tsx).
 * - First browser load: the JSON the prerendered page embedded (embedded-guide.ts).
 * - Client-side navigation: fetch /guide-data/<slug>.json (generate-guide-data.mjs).
 *
 * Never import `guides` from '@/data/guides' in client code that ships on
 * ordinary pages — it pulls every batch file into the bundle. Type-only
 * imports are fine.
 */

export { EMBEDDED_GUIDE_ID };

export const GuideSourceContext = createContext<((slug: string) => GuideWithNav | undefined) | null>(null);

/** Serialize a guide for a <script type="application/json"> without letting it close the tag. */
export function guideToEmbeddedJson(guide: GuideWithNav): string {
  return JSON.stringify(guide).replace(/</g, '\\u003c');
}

export type GuideState =
  | { status: 'ready'; guide: GuideWithNav }
  | { status: 'loading'; guide?: undefined }
  | { status: 'missing'; guide?: undefined }
  | { status: 'error'; guide?: undefined };

type Entry = { slug: string | undefined; state: GuideState };

function initial(slug: string | undefined, source: ((s: string) => GuideWithNav | undefined) | null): GuideState {
  if (!slug) return { status: 'missing' };
  if (source) {
    const g = source(slug);
    return g ? { status: 'ready', guide: g } : { status: 'missing' };
  }
  const embedded = takeEmbeddedGuide(slug);
  if (embedded) {
    try {
      return { status: 'ready', guide: JSON.parse(embedded) as GuideWithNav };
    } catch {
      /* fall through to a fetch */
    }
  }
  return { status: 'loading' };
}

export function useGuide(slug: string | undefined): GuideState {
  const source = useContext(GuideSourceContext);
  const [entry, setEntry] = useState<Entry>(() => ({ slug, state: initial(slug, source) }));

  // A different slug (client-side navigation) starts over.
  const stale = entry.slug !== slug;
  const current: GuideState = stale ? { status: slug ? 'loading' : 'missing' } : entry.state;

  useEffect(() => {
    if (!stale && current.status !== 'loading') return;
    if (!slug) {
      setEntry({ slug, state: { status: 'missing' } });
      return;
    }
    let cancelled = false;
    setEntry({ slug, state: { status: 'loading' } });
    fetch(`/guide-data/${encodeURIComponent(slug)}.json`)
      .then(async (r) => {
        // Unknown files fall through to the site's 404 page, which is HTML
        // served with status 200 — so check the type, not only the status.
        const isJson = (r.headers.get('content-type') || '').includes('json');
        if (r.status === 404 || (r.ok && !isJson)) return { status: 'missing' } as GuideState;
        if (!r.ok) throw new Error(String(r.status));
        return { status: 'ready', guide: (await r.json()) as GuideWithNav } as GuideState;
      })
      .then((state) => {
        if (!cancelled) setEntry({ slug, state });
      })
      .catch(() => {
        if (!cancelled) setEntry({ slug, state: { status: 'error' } });
      });
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug]);

  return current;
}
