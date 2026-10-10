/**
 * Prerendered /guides/:slug pages carry their guide as
 * <script type="application/json" id="guide-data" data-slug="…">.
 *
 * main.tsx calls captureEmbeddedGuide() before React mounts, because the first
 * client render (a Suspense fallback while the lazy GuideDetail chunk loads)
 * replaces the prerendered markup — script tag included — before GuideDetail
 * gets a chance to read it. Kept tiny: it ships in the entry chunk.
 */
export const EMBEDDED_GUIDE_ID = 'guide-data';

let captured: { slug: string; json: string } | null = null;

export function captureEmbeddedGuide(): void {
  if (typeof document === 'undefined') return;
  const el = document.getElementById(EMBEDDED_GUIDE_ID);
  const slug = el?.getAttribute('data-slug');
  if (el && slug && el.textContent) captured = { slug, json: el.textContent };
}

/** The embedded guide JSON if it is for this slug; other slugs are fetched. */
export function takeEmbeddedGuide(slug: string): string | null {
  return captured && captured.slug === slug ? captured.json : null;
}
