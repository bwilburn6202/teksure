/**
 * prerender-sharded.mjs — run the prerender in short-lived slices.
 *
 * WHY THIS EXISTS
 * ---------------
 * Prerendering used to be one long-lived Node process rendering all ~7,100
 * routes. It stopped at almost exactly 4,500 routes on every run, with
 * `failed: 0` and `status: in-progress-or-killed` in dist/prerender-report.json:
 *
 *   heapUsed 200MB · rss 3898MB · elapsed 120s · completed 4500 / 7128
 *
 * heapUsed stayed tiny while RSS climbed to the container ceiling, so this was
 * never a V8 heap problem — capping --max-old-space-size and calling global.gc()
 * both failed to move it, because the memory is external to the heap and GC has
 * no claim on it. The process was killed by the kernel, and because
 * `prerender:safe` swallows a non-zero exit, the build shipped anyway.
 *
 * The visible cost: ~2,600 of 7,128 sitemap URLs (37% of the site) served the
 * generic SPA shell — one identical title and no body text — to Bing,
 * DuckDuckGo, the social preview crawlers and the AI answer engines. For a site
 * whose product is 4,000 "how do I..." answers, that is the single biggest thing
 * standing between it and being found.
 *
 * THE FIX
 * -------
 * Render in slices, one child process each. RSS is reclaimed by the OS when a
 * child exits, so every slice starts from a clean baseline and the ceiling is
 * never approached. This needs no extra memory on the build machine — it is the
 * same total work, just not accumulated in one address space.
 *
 * Failure is loud on purpose. If a shard is killed, this exits non-zero so
 * `prerender:safe` prints its warning rather than a silently short build.
 *
 * USAGE
 *   node scripts/prerender-sharded.mjs                 # all routes
 *   node scripts/prerender-sharded.mjs --shard=800     # smaller slices
 *   node scripts/prerender-sharded.mjs --concurrency=2
 */

import { spawnSync } from 'node:child_process';
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const DIST = join(ROOT, 'dist');
const SCRIPT = join(__dirname, 'prerender.mjs');
const REPORT = join(DIST, 'prerender-report.json');

const args = process.argv.slice(2);
const flag = (name, fallback) => {
  const hit = args.find((a) => a.startsWith(`--${name}=`));
  return hit ? hit.split('=')[1] : fallback;
};

/**
 * Routes per child process.
 *
 * The old single process died at ~4,500. 1,000 keeps peak RSS to roughly a
 * quarter of what killed it, which leaves room for a build machine smaller
 * than the one this was measured on. The cost is re-importing the SSR bundle
 * once per shard (a few seconds each) — cheap next to shipping a third of the
 * site as an empty shell.
 */
const SHARD = Number(flag('shard', '1000')) || 1000;
const CONCURRENCY = Number(flag('concurrency', '2')) || 2;

const NODE_ARGS = ['--max-old-space-size=2048', '--expose-gc'];

function run(extra, opts = {}) {
  return spawnSync(process.execPath, [...NODE_ARGS, SCRIPT, ...extra], {
    cwd: ROOT,
    stdio: opts.capture ? ['ignore', 'pipe', 'inherit'] : 'inherit',
    encoding: 'utf8',
  });
}

// ── How many routes are there? ───────────────────────────────────
const probe = run(['--print-route-count'], { capture: true });
if (probe.status !== 0) {
  console.error('[prerender-sharded] could not determine the route count.');
  process.exit(probe.status ?? 1);
}
const total = Number(String(probe.stdout).trim().split('\n').pop());
if (!Number.isFinite(total) || total <= 0) {
  console.error(`[prerender-sharded] nonsense route count: ${probe.stdout}`);
  process.exit(1);
}

const shards = Math.ceil(total / SHARD);
console.log(`[prerender-sharded] ${total} routes in ${shards} shard(s) of ${SHARD}`);

// ── Render each slice in its own process ─────────────────────────
const started = Date.now();
let written = 0;
let failed = 0;
let degraded = 0;
const failures = [];
const killed = [];

for (let i = 0; i < shards; i++) {
  const offset = i * SHARD;
  const limit = Math.min(SHARD, total - offset);
  console.log(`[prerender-sharded] shard ${i + 1}/${shards} — routes ${offset}..${offset + limit - 1}`);

  const res = run([`--offset=${offset}`, `--limit=${limit}`, `--concurrency=${CONCURRENCY}`]);

  // Each shard overwrites dist/prerender-report.json with its own slice, so
  // read it here — after this loop only the last shard's copy would survive.
  let slice = null;
  try {
    slice = JSON.parse(readFileSync(REPORT, 'utf8'));
  } catch {
    /* A shard killed before its first checkpoint leaves nothing to read. */
  }

  if (slice) {
    written += slice.written ?? 0;
    failed += slice.failed ?? 0;
    degraded += slice.renderedWithoutTitle ?? 0;
    for (const f of slice.sampleFailures ?? []) if (failures.length < 20) failures.push(f);
  }

  if (res.status !== 0 || slice?.status !== 'complete') {
    const reason =
      res.signal ? `killed by ${res.signal}` : res.status !== 0 ? `exit ${res.status}` : 'reported incomplete';
    console.error(`[prerender-sharded] shard ${i + 1} did not finish — ${reason}`);
    killed.push({ shard: i + 1, offset, limit, reason });
  }
}

// ── One merged report for the whole run ──────────────────────────
const complete = killed.length === 0 && written + failed >= total;
const report = {
  status: complete ? 'complete' : 'in-progress-or-killed',
  mode: 'sharded',
  generatedAt: new Date().toISOString(),
  routesAttempted: total,
  completed: written + failed,
  written,
  failed,
  renderedWithoutTitle: degraded,
  elapsedSeconds: Number(((Date.now() - started) / 1000).toFixed(1)),
  shardSize: SHARD,
  shards,
  concurrency: CONCURRENCY,
  incompleteShards: killed,
  sampleFailures: failures,
};
if (existsSync(DIST)) writeFileSync(REPORT, JSON.stringify(report, null, 2) + '\n');

console.log(
  `[prerender-sharded] wrote ${written} of ${total} pages in ${report.elapsedSeconds}s ` +
    `(${failed} failed, ${degraded} rendered without a title)`
);
for (const f of failures) console.log('  - ' + f);

// A short build is the exact failure this script exists to catch. Never let it
// pass quietly again.
if (!complete) {
  console.error(
    `[prerender-sharded] INCOMPLETE — ${total - written} routes have no static HTML and will ` +
      `serve the generic SPA shell to crawlers.`
  );
  process.exit(1);
}
process.exit(0);
