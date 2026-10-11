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
import { readToolRedirects, readGuideRedirects } from './tool-slugs.mjs';
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

// Prerender skips these (scripts/prerender.mjs EXCLUDE): they show per-user
// state, so there is no static page for them.
const PRIVATE = /^\/(admin|customer|tech|profile|my-requests|my-path|favorites|setup|payment|api)(\/|$)/;

// Dynamic routes whose every value is prerendered. Any other value is a page
// that does not exist and should get a real 404.
const FULLY_PRERENDERED = new Set(['/guides/:slug', '/tools/:slug']);

/**
 * Routes the app serves that have no prerendered HTML file: account, booking,
 * payment and admin screens. Vercel has to rewrite these to an app shell so
 * the browser can load the app and render them.
 */
export function readAppShellRoutes() {
  const appTsx = readFileSync(join(ROOT, 'src', 'App.tsx'), 'utf8');
  const out = new Set();
  const re = /path="(\/[^"]*)"\s+element=\{\s*<(\w+)/g;
  for (const m of appTsx.matchAll(re)) {
    const [, path, element] = m;
    if (element === 'Navigate' || path.includes('*')) continue;
    if (FULLY_PRERENDERED.has(path)) continue;
    if (PRIVATE.test(path) || path.includes(':')) out.add(path);
  }
  return [...out].sort();
}

// Running as a script (not just imported as a helper).
if (process.argv[1] && process.argv[1].endsWith('generate-redirects.mjs')) {
  const redirects = [...readNavigateRedirects(), ...readToolRedirects(), ...readGuideRedirects()];
  const vercelPath = join(ROOT, 'vercel.json');
  const config = JSON.parse(readFileSync(vercelPath, 'utf8'));

  // The redirect list is rebuilt from source every time: App.tsx <Navigate>
  // routes, src/data/tool-redirects.ts and src/data/guide-redirects.ts, nothing else. This file used to
  // keep any entry it no longer found in App.tsx, treating it as hand-written.
  // That kept stale 308s alive after their source was removed or their target
  // deleted — 414 of 620 entries pointed at deleted pages by 2026-10-11, and a
  // kept redirect once shadowed a restored /pricing page for a whole session.
  // To add a redirect, add a <Navigate> route; never edit vercel.json by hand.
  //
  // Entries must contain ONLY keys Vercel's schema allows (source, destination,
  // permanent, statusCode, has, missing). Vercel rejects the whole deployment
  // on an unknown property.
  config.redirects = redirects.map((r) => ({
    source: r.source,
    destination: r.destination,
    permanent: true,
  }));

  // Rewrites: only the app-shell routes, never a catch-all. A catch-all
  // `/(.*) -> /404` rewrite used to serve every unknown URL — including the
  // ~3,000 guides retired on 2026-10-11 — the not-found page with HTTP 200,
  // a soft 404 that search engines keep recrawling. Without it, Vercel serves
  // dist/404.html (written by scripts/prerender-cleanup.mjs) with a real 404.
  // The app-shell routes still rewrite to /404: its HTML loads the full app,
  // and main.tsx renders with createRoot, so the right screen replaces it.
  config.rewrites = readAppShellRoutes().map((source) => ({ source, destination: '/404' }));

  writeFileSync(vercelPath, JSON.stringify(config, null, 2) + '\n');
  console.log(
    `[generate-redirects] wrote ${redirects.length} permanent redirects and ` +
      `${config.rewrites.length} app-shell rewrites to vercel.json`
  );
}
