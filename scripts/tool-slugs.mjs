/**
 * tool-slugs.mjs
 *
 * Shared reader for the tool URL list.
 *
 * /tools/<slug> used to be ~3,000 hand-written routes in App.tsx, and the
 * sitemap, the A–Z directory and the prerenderer each scraped that file for
 * `path="/tools/…"`. App.tsx now carries one dynamic /tools/:slug route, so the
 * list lives in src/data/tools-registry.ts and everything reads it from here.
 */
import { readFileSync } from 'fs';
import { dirname, join, resolve } from 'path';
import { fileURLToPath } from 'url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');

/** Every live tool slug, sorted. */
export function readToolSlugs() {
  const src = readFileSync(join(ROOT, 'src', 'data', 'tools-registry.ts'), 'utf8');
  return [...src.matchAll(/^ {2}'([^']+)':\s*lazy\(/gm)].map((m) => m[1]).sort();
}

/** Removed tool slugs that redirect somewhere, as { source, destination }. */
export function readToolRedirects() {
  const src = readFileSync(join(ROOT, 'src', 'data', 'tool-redirects.ts'), 'utf8');
  return [...src.matchAll(/^ {2}'([^']+)':\s*'([^']+)',/gm)].map((m) => ({
    source: `/tools/${m[1]}`,
    destination: m[2],
  }));
}
