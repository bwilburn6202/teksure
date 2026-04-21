#!/usr/bin/env tsx
/**
 * embed-all-guides.ts
 * -----------------------------------------------------------------------------
 * Orchestrates the ingestion side of TekBrain v2.
 *
 * What it does:
 *   1. Recursively loads every `src/data/guides-batch-*.ts` file.
 *   2. Extracts Guide objects from each module's exports.
 *   3. POSTs each guide to the `embed-guides` Supabase Edge Function.
 *   4. Tracks per-guide progress in `.embed-progress.json` at the repo root
 *      so interrupted runs can resume without redoing completed work.
 *
 * Guides are skipped when the SHA-256 of their JSON matches what's in the
 * progress file — so by default this is an incremental sync. Pass `--force`
 * to re-embed everything.
 *
 * Usage:
 *   npm run embed-guides                          # incremental sync
 *   npm run embed-guides -- --force               # re-embed everything
 *   npm run embed-guides -- --guide <slug>        # just this one guide
 *   npm run embed-guides -- --dry-run             # scan + report, no API calls
 *   npm run embed-guides -- --reset               # wipe progress file, then exit
 *   npm run embed-guides -- --concurrency 5       # parallel request fan-out
 *
 * Required env:
 *   SUPABASE_URL                (project URL, e.g. https://xxx.supabase.co)
 *   SUPABASE_SERVICE_ROLE_KEY   (used as `apikey` when calling the edge fn)
 *
 * Optional env:
 *   EMBED_FUNCTION_NAME         (default: embed-guides)
 * -----------------------------------------------------------------------------
 */

import { createHash } from 'node:crypto';
import { existsSync, readFileSync, writeFileSync, unlinkSync } from 'node:fs';
import { readdir } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

// ─────────────────────────────────────────────────────────────────────────────
// Types (mirror the shape we care about from src/data/guides.ts)
// ─────────────────────────────────────────────────────────────────────────────

interface Guide {
  slug: string;
  title: string;
  category: string;
  tags?: string[];
  readTime?: string;
  difficulty?: string;
  steps?: Array<{ title: string; content: string; tip?: string; warning?: string }>;
  body?: string;
  publishedAt?: string;
  lastVerifiedAt?: string;
  [key: string]: unknown;
}

interface ProgressEntry {
  hash: string;
  embedded_at: string;
  total_chunks?: number;
  embedded?: number;
  skipped_unchanged?: number;
  orphans_deleted?: number;
}

interface ProgressFile {
  version: 1;
  last_run_at: string;
  guides: Record<string, ProgressEntry>;
}

interface Cli {
  force: boolean;
  guide: string | null;
  dryRun: boolean;
  reset: boolean;
  concurrency: number;
}

// ─────────────────────────────────────────────────────────────────────────────
// Paths
// ─────────────────────────────────────────────────────────────────────────────

const __filename    = fileURLToPath(import.meta.url);
const __dirname     = dirname(__filename);
const PROJECT_ROOT  = resolve(__dirname, '..');
const DATA_DIR      = resolve(PROJECT_ROOT, 'src', 'data');
const PROGRESS_PATH = resolve(PROJECT_ROOT, '.embed-progress.json');

// ─────────────────────────────────────────────────────────────────────────────
// Entrypoint
// ─────────────────────────────────────────────────────────────────────────────

async function main() {
  const cli = parseArgs(process.argv.slice(2));

  if (cli.reset) {
    if (existsSync(PROGRESS_PATH)) {
      unlinkSync(PROGRESS_PATH);
      log('info', `Deleted ${PROGRESS_PATH}`);
    } else {
      log('info', 'No progress file to reset — nothing to do.');
    }
    return;
  }

  // ── Env check (skip when dry-run — no API calls anyway) ──────────────────
  const supabaseUrl   = process.env.SUPABASE_URL?.trim();
  const serviceRole   = process.env.SUPABASE_SERVICE_ROLE_KEY?.trim();
  const fnName        = process.env.EMBED_FUNCTION_NAME?.trim() || 'embed-guides';

  if (!cli.dryRun) {
    if (!supabaseUrl || !serviceRole) {
      log('error', 'SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY must be set in the environment.');
      log('error', 'Set them in your shell or via a .env loader and re-run. To preview without calling the API, pass --dry-run.');
      process.exit(1);
    }
  }

  // ── Discover + load guides ───────────────────────────────────────────────
  log('info', `Scanning ${DATA_DIR} for guides-batch-*.ts files…`);
  const batchFiles = await findBatchFiles(DATA_DIR);
  log('info', `Found ${batchFiles.length} batch file(s).`);

  const guides = await loadGuidesFromFiles(batchFiles);
  log('info', `Loaded ${guides.length} guide(s) total.`);

  // ── Filter down to a single guide if requested ───────────────────────────
  const selected = cli.guide
    ? guides.filter((g) => g.slug === cli.guide)
    : guides;

  if (cli.guide && selected.length === 0) {
    log('error', `No guide found with slug "${cli.guide}".`);
    process.exit(1);
  }

  // ── Load progress + decide what to skip ──────────────────────────────────
  const progress = loadProgress();
  const endpoint = supabaseUrl
    ? `${supabaseUrl.replace(/\/+$/, '')}/functions/v1/${fnName}`
    : '(dry-run — no endpoint)';

  log('info', `Endpoint: ${endpoint}`);
  log('info', `Concurrency: ${cli.concurrency}`);
  log('info', `Force: ${cli.force}  •  Dry-run: ${cli.dryRun}`);

  // Pre-compute each guide's current hash + whether it needs work.
  const queue: Array<{ guide: Guide; hash: string; reason: string }> = [];
  let skipped = 0;

  for (const guide of selected) {
    const hash = hashGuide(guide);
    const prev = progress.guides[guide.slug];

    if (!cli.force && prev && prev.hash === hash) {
      skipped++;
      continue;
    }
    const reason = !prev ? 'new' : cli.force ? 'forced' : 'changed';
    queue.push({ guide, hash, reason });
  }

  log('info', `Skipping ${skipped} guide(s) already at current hash.`);
  log('info', `Queued ${queue.length} guide(s) to embed.`);

  if (cli.dryRun) {
    for (const item of queue.slice(0, 20)) {
      console.log(`  • [${item.reason.padEnd(7)}] ${item.guide.slug}`);
    }
    if (queue.length > 20) console.log(`  …and ${queue.length - 20} more.`);
    log('info', 'Dry run complete — no requests were made.');
    return;
  }

  if (queue.length === 0) {
    log('info', 'Nothing to do.');
    return;
  }

  // ── Worker pool ──────────────────────────────────────────────────────────
  let doneCount = 0;
  let failCount = 0;
  const failures: Array<{ slug: string; error: string }> = [];

  const worker = async (workerId: number) => {
    while (true) {
      const item = queue.shift();
      if (!item) return;

      const { guide, hash, reason } = item;
      const idx = ++doneCount;
      const total = idx + queue.length;
      const label = `[${idx}/${total + failCount}]`;

      try {
        const result = await postGuide(
          endpoint,
          serviceRole!,
          guide,
          cli.force,
        );

        // Update progress as we go so a kill -9 doesn't lose work.
        progress.guides[guide.slug] = {
          hash,
          embedded_at: new Date().toISOString(),
          total_chunks: result.total_chunks,
          embedded: result.embedded,
          skipped_unchanged: result.skipped_unchanged,
          orphans_deleted: result.orphans_deleted,
        };
        saveProgress(progress);

        log(
          'ok',
          `${label} (w${workerId}) ${guide.slug} [${reason}] — ` +
            `${result.embedded} embedded, ${result.skipped_unchanged} unchanged, ` +
            `${result.orphans_deleted} orphans, ${result.duration_ms}ms`,
        );
      } catch (err) {
        failCount++;
        const msg = err instanceof Error ? err.message : String(err);
        failures.push({ slug: guide.slug, error: msg });
        log('error', `${label} (w${workerId}) ${guide.slug} FAILED — ${msg}`);
      }
    }
  };

  const workerCount = Math.max(1, Math.min(cli.concurrency, queue.length));
  await Promise.all(
    Array.from({ length: workerCount }, (_, i) => worker(i + 1)),
  );

  progress.last_run_at = new Date().toISOString();
  saveProgress(progress);

  // ── Summary ──────────────────────────────────────────────────────────────
  log('info', '─────────────────────────────────────────');
  log('info', `Done.  ${doneCount - failCount} succeeded, ${failCount} failed, ${skipped} skipped.`);
  if (failures.length > 0) {
    log('info', 'Failed guides:');
    for (const f of failures) console.log(`  • ${f.slug} — ${f.error}`);
    process.exitCode = 1;
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// CLI parsing
// ─────────────────────────────────────────────────────────────────────────────

function parseArgs(argv: string[]): Cli {
  const cli: Cli = {
    force: false,
    guide: null,
    dryRun: false,
    reset: false,
    concurrency: 3,
  };

  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    switch (arg) {
      case '--force':
        cli.force = true;
        break;
      case '--dry-run':
        cli.dryRun = true;
        break;
      case '--reset':
        cli.reset = true;
        break;
      case '--guide': {
        const next = argv[++i];
        if (!next) {
          log('error', '--guide requires a slug argument.');
          process.exit(1);
        }
        cli.guide = next;
        break;
      }
      case '--concurrency': {
        const next = argv[++i];
        const n = Number(next);
        if (!Number.isFinite(n) || n < 1) {
          log('error', '--concurrency must be a positive integer.');
          process.exit(1);
        }
        cli.concurrency = Math.floor(n);
        break;
      }
      case '--help':
      case '-h':
        printHelp();
        process.exit(0);
      default:
        log('error', `Unknown argument: ${arg}`);
        printHelp();
        process.exit(1);
    }
  }
  return cli;
}

function printHelp() {
  console.log(`\nembed-all-guides — ingest TekSure guides into guide_chunks\n`);
  console.log(`Usage:  npm run embed-guides -- [flags]\n`);
  console.log(`Flags:`);
  console.log(`  --force                Re-embed every guide, ignoring the progress file.`);
  console.log(`  --guide <slug>         Only embed the guide matching this slug.`);
  console.log(`  --dry-run              Scan + report, but do not call the API.`);
  console.log(`  --reset                Delete .embed-progress.json and exit.`);
  console.log(`  --concurrency <N>      Parallel request fan-out (default: 3).`);
  console.log(`  -h, --help             Print this help and exit.\n`);
}

// ─────────────────────────────────────────────────────────────────────────────
// Guide discovery + loading
// ─────────────────────────────────────────────────────────────────────────────

/** Recursively find all `guides-batch-*.ts` files under `dir`. */
async function findBatchFiles(dir: string): Promise<string[]> {
  const out: string[] = [];

  async function walk(current: string) {
    const entries = await readdir(current, { withFileTypes: true });
    for (const entry of entries) {
      const full = join(current, entry.name);
      if (entry.isDirectory()) {
        await walk(full);
      } else if (
        entry.isFile() &&
        /^guides-batch-\d+\.ts$/.test(entry.name)
      ) {
        out.push(full);
      }
    }
  }

  await walk(dir);
  // Sort numerically so log output is readable (batch-4 before batch-10).
  out.sort((a, b) => batchNumber(a) - batchNumber(b));
  return out;
}

function batchNumber(path: string): number {
  const m = /guides-batch-(\d+)\.ts$/.exec(path);
  return m ? parseInt(m[1], 10) : Number.MAX_SAFE_INTEGER;
}

/**
 * Dynamically import each batch file and pull every Guide-shaped object out
 * of its exports. We look for either:
 *   - an exported array whose items have { slug, title, category } strings
 *   - an exported object that itself looks like a single Guide
 *
 * This keeps us robust to future batches that might be named differently
 * (e.g. `guidesBatch105` vs `batch105Guides`).
 */
async function loadGuidesFromFiles(files: string[]): Promise<Guide[]> {
  const seen = new Set<string>();
  const all: Guide[] = [];

  for (const file of files) {
    // tsx handles transpiling .ts on dynamic import.
    const mod = await import(pathToFileURL(file).href);

    for (const key of Object.keys(mod)) {
      const value = (mod as Record<string, unknown>)[key];
      if (Array.isArray(value)) {
        for (const item of value) {
          if (isGuideLike(item)) {
            addGuide(all, seen, item, file);
          }
        }
      } else if (isGuideLike(value)) {
        addGuide(all, seen, value, file);
      }
    }
  }

  return all;
}

function addGuide(
  all: Guide[],
  seen: Set<string>,
  guide: Guide,
  sourceFile: string,
) {
  if (seen.has(guide.slug)) {
    log('warn', `Duplicate slug "${guide.slug}" in ${sourceFile} — keeping first occurrence.`);
    return;
  }
  seen.add(guide.slug);
  all.push(guide);
}

function isGuideLike(x: unknown): x is Guide {
  if (!x || typeof x !== 'object') return false;
  const o = x as Record<string, unknown>;
  return (
    typeof o.slug === 'string' &&
    typeof o.title === 'string' &&
    typeof o.category === 'string'
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Progress file
// ─────────────────────────────────────────────────────────────────────────────

function loadProgress(): ProgressFile {
  if (!existsSync(PROGRESS_PATH)) {
    return {
      version: 1,
      last_run_at: new Date().toISOString(),
      guides: {},
    };
  }

  try {
    const raw = readFileSync(PROGRESS_PATH, 'utf8');
    const parsed = JSON.parse(raw) as ProgressFile;
    if (parsed.version !== 1 || typeof parsed.guides !== 'object') {
      log('warn', `Progress file at ${PROGRESS_PATH} has unexpected shape — ignoring.`);
      return {
        version: 1,
        last_run_at: new Date().toISOString(),
        guides: {},
      };
    }
    return parsed;
  } catch (err) {
    log('warn', `Could not parse progress file (${err instanceof Error ? err.message : String(err)}) — starting fresh.`);
    return {
      version: 1,
      last_run_at: new Date().toISOString(),
      guides: {},
    };
  }
}

function saveProgress(progress: ProgressFile) {
  writeFileSync(PROGRESS_PATH, JSON.stringify(progress, null, 2) + '\n', 'utf8');
}

// ─────────────────────────────────────────────────────────────────────────────
// Hashing + HTTP
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Stable-ish hash of a guide. We stringify with sorted keys so key ordering
 * differences don't produce spurious diffs. Used only for progress
 * bookkeeping — the edge function does its own per-chunk hashing.
 */
function hashGuide(guide: Guide): string {
  const canonical = canonicalize(guide);
  return createHash('sha256').update(canonical).digest('hex');
}

function canonicalize(value: unknown): string {
  if (value === null || typeof value !== 'object') return JSON.stringify(value);
  if (Array.isArray(value)) {
    return '[' + value.map(canonicalize).join(',') + ']';
  }
  const keys = Object.keys(value as Record<string, unknown>).sort();
  return '{' + keys
    .map((k) => JSON.stringify(k) + ':' + canonicalize((value as Record<string, unknown>)[k]))
    .join(',') + '}';
}

interface EmbedResponse {
  guide_id: string;
  guide_title: string;
  total_chunks: number;
  embedded: number;
  skipped_unchanged: number;
  orphans_deleted: number;
  duration_ms: number;
}

/** POST a single guide to the edge function and parse its response. */
async function postGuide(
  endpoint: string,
  serviceRoleKey: string,
  guide: Guide,
  forceRefresh: boolean,
): Promise<EmbedResponse> {
  const resp = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      // Supabase gateway requires either `apikey` or `Authorization: Bearer …`
      // to route to the function. We send both so it works whether the
      // function has `verify_jwt` on or off.
      'apikey': serviceRoleKey,
      'Authorization': `Bearer ${serviceRoleKey}`,
    },
    body: JSON.stringify({ guide, force_refresh: forceRefresh }),
  });

  const rawText = await resp.text();
  if (!resp.ok) {
    throw new Error(`HTTP ${resp.status} — ${rawText.slice(0, 500)}`);
  }

  try {
    return JSON.parse(rawText) as EmbedResponse;
  } catch {
    throw new Error(`Edge function returned non-JSON: ${rawText.slice(0, 200)}`);
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// Logging
// ─────────────────────────────────────────────────────────────────────────────

function log(level: 'info' | 'warn' | 'error' | 'ok', message: string) {
  const ts = new Date().toISOString().slice(11, 19); // HH:MM:SS
  const prefix = level === 'ok'    ? '✓'
               : level === 'warn'  ? '!'
               : level === 'error' ? '✗'
               :                     '·';
  console.log(`${ts} ${prefix} ${message}`);
}

// ─────────────────────────────────────────────────────────────────────────────
main().catch((err) => {
  log('error', err instanceof Error ? err.stack ?? err.message : String(err));
  process.exit(1);
});
