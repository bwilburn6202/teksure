/**
 * prerender.mjs — static HTML for every route.
 *
 * WHY THIS EXISTS
 * ---------------
 * TekSure was a pure client-rendered SPA, so every one of its 7,000+ URLs served
 * the *same* generic <title> and description. Google can execute JS, but Bing,
 * DuckDuckGo, the social preview crawlers, and the AI answer engines (GPTBot,
 * ClaudeBot, PerplexityBot) largely do not. They all saw one identical page, and
 * none of the guide text was in the HTML at all.
 *
 * For a site whose entire product is 4,000 "how do I…" answers, that is the
 * single biggest thing standing between it and being found. This script renders
 * each route to real HTML at build time, with that page's own title, meta
 * description, canonical, Open Graph tags and JSON-LD baked in.
 *
 * HOW
 * ---
 *   1. `vite build`                       → dist/ (client assets + index.html shell)
 *   2. `vite build --ssr entry-server`    → dist/server/entry-server.js
 *   3. this script                        → dist/<route>/index.html for each route
 *
 * React then takes over on the client as usual (createRoot re-renders into the
 * same container), so behaviour is unchanged for real users — they just get
 * meaningful HTML sooner.
 *
 * USAGE
 *   node scripts/prerender.mjs                  # everything
 *   node scripts/prerender.mjs --limit=25       # first 25 routes (smoke test)
 *   node scripts/prerender.mjs --only=guides    # guides | tools | pages
 *   node scripts/prerender.mjs --concurrency=8
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { readNavigateRedirects } from './generate-redirects.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const DIST = join(ROOT, 'dist');
const SERVER_ENTRY = join(DIST, 'server', 'entry-server.js');

const args = process.argv.slice(2);
const flag = (name, fallback) => {
  const hit = args.find((a) => a.startsWith(`--${name}=`));
  return hit ? hit.split('=')[1] : fallback;
};
const LIMIT = Number(flag('limit', '0')) || 0;
const ONLY = flag('only', '');
const CONCURRENCY = Number(flag('concurrency', '4')) || 4;

// ── Preconditions ────────────────────────────────────────────────
if (!existsSync(join(DIST, 'index.html'))) {
  console.error('[prerender] dist/index.html missing — run `npm run build` first.');
  process.exit(1);
}
if (!existsSync(SERVER_ENTRY)) {
  console.error('[prerender] dist/server/entry-server.js missing — run `npm run build:server` first.');
  process.exit(1);
}

/**
 * Snapshot the pristine shell before we write anything.
 *
 * The homepage renders to dist/index.html — the very file we use as the
 * template. Without this snapshot a second prerender run reads the already-
 * rendered homepage as its template and every page inherits the homepage's
 * <title>, producing two titles per page. `vite build` empties dist/, so the
 * snapshot is always from the current build.
 */
const TEMPLATE_SNAPSHOT = join(DIST, '.prerender-template.html');
if (!existsSync(TEMPLATE_SNAPSHOT)) {
  writeFileSync(TEMPLATE_SNAPSHOT, readFileSync(join(DIST, 'index.html'), 'utf8'));
}
const template = readFileSync(TEMPLATE_SNAPSHOT, 'utf8');

// ── Route list: same source of truth as the sitemap ──────────────
const EXCLUDE = /^\/(admin|customer|tech|profile|my-requests|my-path|favorites|setup|payment|api)(\/|$)/;

function collectRoutes() {
  const appTsx = readFileSync(join(ROOT, 'src', 'App.tsx'), 'utf8');
  const routes = new Set(['/']);

  // Routes that only exist to redirect are served as real 308s by Vercel
  // (see scripts/generate-redirects.mjs). Prerendering them would emit an
  // empty page that competes with the destination in search results.
  const redirectSources = new Set(readNavigateRedirects().map((r) => r.source));

  for (const m of appTsx.matchAll(/path="(\/[^"]*)"/g)) {
    const p = m[1];
    if (p.includes(':') || p.includes('*')) continue;
    if (EXCLUDE.test(p)) continue;
    if (redirectSources.has(p)) continue;
    routes.add(p);
  }

  // Guide detail pages come from the data files, not the route table
  // (they all share the /guides/:slug route).
  const dataDir = join(ROOT, 'src', 'data');
  const { readdirSync } = require('node:fs');
  for (const f of readdirSync(dataDir)) {
    if (!f.startsWith('guides') || !f.endsWith('.ts')) continue;
    const content = readFileSync(join(dataDir, f), 'utf8');
    for (const m of content.matchAll(/slug:\s*['"`]([^'"`]+)['"`]/g)) {
      routes.add(`/guides/${m[1]}`);
    }
  }

  let list = [...routes];
  if (ONLY === 'guides') list = list.filter((r) => r.startsWith('/guides/'));
  else if (ONLY === 'tools') list = list.filter((r) => r.startsWith('/tools/'));
  else if (ONLY === 'pages') list = list.filter((r) => !r.startsWith('/guides/') && !r.startsWith('/tools/'));

  // Shortest paths first so the important hub pages land even if a run is cut short.
  list.sort((a, b) => a.length - b.length || a.localeCompare(b));
  return LIMIT ? list.slice(0, LIMIT) : list;
}

// `require` shim for the readdirSync use above (this file is ESM).
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);

// ── Head injection ───────────────────────────────────────────────
/**
 * Replace the shell's default head tags with this page's real ones.
 *
 * The template ships a generic title/description so the SPA is never blank in
 * a browser with JS disabled mid-load. Those defaults must be stripped or a
 * crawler sees two titles and picks the wrong one.
 */
function buildHtml(head, appHtml) {
  let html = template;

  if (head.includes('<title')) {
    html = html.replace(/<title[^>]*>[\s\S]*?<\/title>\s*/i, '');
  }
  for (const attr of ['description', 'robots']) {
    if (head.includes(`name="${attr}"`)) {
      html = html.replace(new RegExp(`<meta[^>]*name="${attr}"[^>]*>\\s*`, 'i'), '');
    }
  }
  // Helmet re-emits the whole OG/Twitter set per page; drop the shell's copies.
  if (head.includes('property="og:')) {
    html = html.replace(/<meta[^>]*property="og:[^"]*"[^>]*>\s*/gi, '');
  }
  if (head.includes('name="twitter:')) {
    html = html.replace(/<meta[^>]*name="twitter:[^"]*"[^>]*>\s*/gi, '');
  }
  if (head.includes('rel="canonical"')) {
    html = html.replace(/<link[^>]*rel="canonical"[^>]*>\s*/gi, '');
  }

  // The shell already carries the SSR placeholders this pipeline was designed
  // around: `<!--ssr-outlet-->` inside #root and `<!--ssr-head-->` after it.
  if (html.includes('<!--ssr-head-->')) {
    html = html.replace('<!--ssr-head-->', head);
  } else {
    html = html.replace('</head>', `    ${head}\n  </head>`);
  }

  if (!html.includes('<!--ssr-outlet-->')) {
    throw new Error('shell template is missing the <!--ssr-outlet--> placeholder');
  }
  html = html.replace('<!--ssr-outlet-->', appHtml);
  return html;
}

function outPathFor(route) {
  const clean = route.replace(/^\/+|\/+$/g, '');
  return clean ? join(DIST, clean, 'index.html') : join(DIST, 'index.html');
}

// ── Run ──────────────────────────────────────────────────────────
const { render } = await import(pathToFileURL(SERVER_ENTRY).href);

const routes = collectRoutes();
console.log(`[prerender] ${routes.length} routes, concurrency ${CONCURRENCY}`);

let done = 0;
let failed = 0;
let degraded = 0;
const failures = [];
const degradedList = [];
const started = Date.now();

async function renderOne(route) {
  try {
    const { html: appHtml, head, errors } = await render(route);

    // A page that renders its shell but no <title> hit a recoverable error and
    // fell back — it would ship invisible to search. Surface it loudly.
    if (!head.includes('<title')) {
      degraded++;
      if (degradedList.length < 40) {
        degradedList.push(`${route} — no <title> (${errors?.[0] ?? 'unknown cause'})`);
      }
    } else if (errors?.length) {
      if (degradedList.length < 40) degradedList.push(`${route} — ${errors[0]}`);
    }

    const page = buildHtml(head, appHtml);
    const out = outPathFor(route);
    mkdirSync(dirname(out), { recursive: true });
    writeFileSync(out, page);
  } catch (err) {
    failed++;
    if (failures.length < 20) failures.push(`${route} — ${err?.message ?? err}`);
  }
  done++;
  if (done % 250 === 0 || done === routes.length) {
    const secs = ((Date.now() - started) / 1000).toFixed(0);
    const rate = (done / Math.max(1, (Date.now() - started) / 1000)).toFixed(1);
    console.log(`[prerender] ${done}/${routes.length} (${secs}s, ${rate}/s, ${failed} failed)`);
  }
}

// Simple fixed-size worker pool — React SSR is CPU-bound, so a small pool
// beats spawning thousands of concurrent renders.
const queue = [...routes];
await Promise.all(
  Array.from({ length: CONCURRENCY }, async () => {
    while (queue.length) {
      const route = queue.shift();
      if (route) await renderOne(route);
    }
  })
);

const totalSecs = ((Date.now() - started) / 1000).toFixed(1);
console.log(
  `[prerender] wrote ${done - failed} pages in ${totalSecs}s (${failed} failed, ${degraded} rendered without a title)`
);
if (failures.length) {
  console.log('[prerender] first failures:');
  for (const f of failures) console.log('  - ' + f);
}
if (degradedList.length) {
  console.log('[prerender] pages that fell back on the server (invisible to non-JS crawlers):');
  for (const d of degradedList) console.log('  ! ' + d);
}
// A handful of failures still leaves a working site (those routes fall back to
// the SPA shell), but a wholesale failure should break the build.
if (failed > routes.length * 0.25) {
  console.error('[prerender] more than 25% of routes failed — failing the build.');
  process.exit(1);
}
