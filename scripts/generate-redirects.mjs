/**
 * generate-redirects.mjs
 *
 * App.tsx declares a number of legacy URLs as client-side redirects:
 *   <Route path="/pricing" element={<Navigate to="/get-help" replace />} />
 *
 * Those work for a person with JavaScript, but a crawler asking for /pricing
 * gets 200 OK and an empty page — no redirect, no content, no link equity
 * passed to the destination. Prerendering made this visible: 17 URLs shipped
 * with an empty <title>, and every one of them was in the sitemap.
 *
 * This reads those routes and writes them into vercel.json as real 308
 * redirects, so search engines and browsers both follow them properly.
 * `scripts/prerender.mjs` and `scripts/generate-sitemap.mjs` read the same
 * list and skip them.
 */
import { readFileSync, writeFileSync } from 'fs';
import { dirname, join, resolve } from 'path';
import { fileURLToPath } from 'url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');

/** Every `<Route path="X" element={<Navigate to="Y" .../>}>` in App.tsx. */
export function readNavigateRedirects() {
  const appTsx = readFileSync(join(ROOT, 'src', 'App.tsx'), 'utf8');
  const out = [];
  const re = /path="([^"]+)"\s+element=\{<Navigate\s+to="([^"]+)"/g;
  for (const m of appTsx.matchAll(re)) {
    out.push({ source: m[1], destination: m[2] });
  }
  return out;
}

// Running as a script (not just imported as a helper).
if (process.argv[1] && process.argv[1].endsWith('generate-redirects.mjs')) {
  const redirects = readNavigateRedirects();
  const vercelPath = join(ROOT, 'vercel.json');
  const config = JSON.parse(readFileSync(vercelPath, 'utf8'));

  // Preserve any hand-written redirects that aren't derived from App.tsx.
  //
  // NOTE: entries must contain ONLY keys Vercel's schema allows (source,
  // destination, permanent, statusCode, has, missing). Vercel validates
  // vercel.json strictly and rejects the whole deployment on an unknown
  // property — a "generated": true marker here, and a "comment" key on the
  // rewrite, silently failed several deploys in a row while the previous build
  // stayed live. Derived entries are identified by matching App.tsx instead.
  const derivedSources = new Set(redirects.map((r) => r.source));
  const manual = (config.redirects ?? []).filter((r) => !derivedSources.has(r.source));

  config.redirects = [
    ...manual,
    ...redirects.map((r) => ({
      source: r.source,
      destination: r.destination,
      permanent: true,
    })),
  ];

  writeFileSync(vercelPath, JSON.stringify(config, null, 2) + '\n');
  console.log(
    `[generate-redirects] wrote ${redirects.length} permanent redirects to vercel.json` +
      (manual.length ? ` (kept ${manual.length} manual)` : '')
  );
}
