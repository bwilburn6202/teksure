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
import { readToolSlugs, readToolRedirects } from './tool-slugs.mjs';

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
/**
 * Skip the first N routes of the (deterministically sorted) route list.
 *
 * This exists so one run can be split across several short-lived child
 * processes — see scripts/prerender-sharded.mjs. A single long-lived process
 * grows its RSS to the container ceiling and is killed around route 4,500 with
 * `failed: 0`, because the memory is external to the V8 heap and GC cannot
 * reclaim it. A fresh process per slice starts from a clean RSS every time.
 */
const OFFSET = Number(flag('offset', '0')) || 0;
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
  const redirectSources = new Set([
    ...readNavigateRedirects().map((r) => r.source),
    ...readToolRedirects().map((r) => r.source),
  ]);

  // Tool pages resolve through src/data/tools-registry.ts, not the route table.
  for (const slug of readToolSlugs()) routes.add(`/tools/${slug}`);

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
  // Slice AFTER the sort, so offset/limit address stable positions and the
  // shards together cover the list exactly once with no gaps or overlaps.
  if (OFFSET) list = list.slice(OFFSET);
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

// The shard driver needs the total route count before it can plan slices.
// Answer and exit *before* importing the SSR bundle — that import is what
// costs seconds and hundreds of MB.
if (args.includes('--print-route-count')) {
  console.log(collectRoutes().length);
  process.exit(0);
}

const { render } = await import(pathToFileURL(SERVER_ENTRY).href);

const routes = collectRoutes();
console.log(`[prerender] ${routes.length} routes (offset ${OFFSET}), concurrency ${CONCURRENCY}`);

let done = 0;
let failed = 0;
let degraded = 0;
const failures = [];
const degradedList = [];
const started = Date.now();

/**
 * Write the run's own report to dist/prerender-report.json.
 *
 * Called at checkpoints during the run and once at the end, because the run
 * has been dying partway through: package.json wraps this script in
 * `npm run prerender || <log a warning>`, so a crash or an OOM kill is
 * swallowed, the build carries on, and the site deploys with however many
 * pages happened to be written. The only symptom from outside was a page
 * count that quietly fell short of the sitemap.
 *
 * Route paths and error strings only — no secrets, a couple of KB.
 */
function writeReport({ partial }) {
  try {
    writeFileSync(
      join(DIST, 'prerender-report.json'),
      JSON.stringify(
        {
          status: partial ? 'in-progress-or-killed' : 'complete',
          generatedAt: new Date().toISOString(),
          offset: OFFSET,
          limit: LIMIT || null,
          routesAttempted: routes.length,
          completed: done,
          written: done - failed,
          failed,
          renderedWithoutTitle: degraded,
          elapsedSeconds: Number(((Date.now() - started) / 1000).toFixed(1)),
          heapUsedMb: Math.round(process.memoryUsage().heapUsed / 1024 / 1024),
          rssMb: Math.round(process.memoryUsage().rss / 1024 / 1024),
          // The gap between heapUsed and rss is what has been killing this.
          externalMb: Math.round(process.memoryUsage().external / 1024 / 1024),
          arrayBuffersMb: Math.round(process.memoryUsage().arrayBuffers / 1024 / 1024),
          gcExposed: typeof global.gc === 'function',
          concurrency: CONCURRENCY,
          sampleFailures: failures,
          sampleDegraded: degradedList,
        },
        null,
        2
      ) + '\n'
    );
  } catch {
    /* Reporting must never break an otherwise-good build. */
  }
}

/**
 * Longest a single page may take to render before we give up on it.
 *
 * Three consecutive runs stopped at exactly 4500 of 7100 with failed: 0. Memory
 * pressure does not produce that kind of repeatability — it varies with content
 * — but a route whose render never returns does. `await render(route)` has no
 * timeout, so a promise that never settles parks that worker permanently. With
 * a pool of workers, a handful of such routes silently drains the pool until
 * nothing is left to make progress and the build is killed from outside.
 *
 * That also explains failed: 0. A hang throws nothing, so the catch below never
 * runs and the route is never counted as a failure. It just disappears.
 *
 * 20 seconds is far beyond a healthy render here (the run averages ~30/second),
 * so this only fires on something genuinely stuck — and when it does, the route
 * lands in sampleFailures by name instead of taking the whole build down.
 */
const RENDER_TIMEOUT_MS = 20_000;

function renderWithTimeout(route) {
  // Deliberately NOT unref'd. An unref'd timer does not hold the event loop
  // open, so if a hung route were the last item in the queue the process would
  // exit before the rejection ever fired — reintroducing the silent-stall bug
  // this is meant to fix. (Caught by a self-test before shipping.) Instead the
  // timer is cleared on the happy path so it never delays a clean exit.
  let timer;
  const timeout = new Promise((_, reject) => {
    timer = setTimeout(
      () => reject(new Error(`render exceeded ${RENDER_TIMEOUT_MS}ms — likely hung`)),
      RENDER_TIMEOUT_MS
    );
  });
  return Promise.race([render(route), timeout]).finally(() => clearTimeout(timer));
}

async function renderOne(route) {
  try {
    const { html: appHtml, head, errors } = await renderWithTimeout(route);

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
    const mem = process.memoryUsage();
    console.log(
      `[prerender] ${done}/${routes.length} (${secs}s, ${rate}/s, ${failed} failed, ` +
        `heap ${Math.round(mem.heapUsed / 1048576)}MB, rss ${Math.round(mem.rss / 1048576)}MB, ` +
        `ext ${Math.round(mem.external / 1048576)}MB)`
    );

    /**
     * Force a collection.
     *
     * Two runs died at the same point with heapUsed ~714MB against a 4GB and
     * then a 1.5GB ceiling, while RSS sat above 4.3GB. Lowering the heap limit
     * barely moved RSS, which rules the V8 heap out entirely — the memory is
     * external, almost certainly the Buffers that writeFileSync allocates for
     * each of thousands of rendered pages. Because heap pressure stays low, V8
     * never feels a reason to run, so those buffers accumulate until the
     * container kills the process.
     *
     * global.gc() is exposed by --expose-gc in the npm script. If the flag is
     * missing this is simply skipped, so the script still runs standalone.
     */
    if (typeof global.gc === 'function') global.gc();
    // Checkpoint the report mid-run. If this process is killed — which is
    // what has been happening — the final write at the bottom never
    // executes, and the only evidence of how far it got dies with it.
    // A checkpoint every 250 routes means a killed run still leaves a
    // readable record of where and why it stopped.
    writeReport({ partial: true });
  }
}

/**
 * Leave a report behind even when this process dies unexpectedly.
 *
 * The run has been terminating partway through, and because package.json wraps
 * it in `npm run prerender || <warn>`, the failure is swallowed and the build
 * ships anyway. These handlers mean the next deploy still carries evidence of
 * what happened, instead of just a page count that came up short.
 *
 * Note a V8 heap OOM kill cannot be trapped in JavaScript at all — that is
 * what the periodic checkpoint in renderOne() is for.
 */
for (const signal of ['SIGTERM', 'SIGINT']) {
  process.on(signal, () => {
    console.error(`[prerender] received ${signal} after ${done}/${routes.length} routes`);
    writeReport({ partial: true });
    process.exit(1);
  });
}
process.on('uncaughtException', (err) => {
  console.error(`[prerender] uncaught exception after ${done}/${routes.length} routes:`, err?.message ?? err);
  writeReport({ partial: true });
  process.exit(1);
});

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

// Final report. Readable at https://www.teksure.com/prerender-report.json
writeReport({ partial: false });
console.log('[prerender] wrote dist/prerender-report.json');
// A handful of failures still leaves a working site (those routes fall back to
// the SPA shell), but a wholesale failure should break the build.
if (failed > routes.length * 0.25) {
  console.error('[prerender] more than 25% of routes failed — failing the build.');
  process.exit(1);
}

/**
 * Exit explicitly.
 *
 * Importing the SSR bundle pulls in the whole app, and something in that graph
 * keeps a handle on the event loop (a module-level timer or client instance), so
 * Node will not exit on its own once the work is done. Locally that looks like a
 * build that never finishes; on Vercel it looked like a deploy that "succeeded"
 * three times while the site kept serving the previous build, because the build
 * container sat waiting on this process until it timed out.
 *
 * All output above is written synchronously, so exiting here loses nothing.
 */
process.exit(0);
