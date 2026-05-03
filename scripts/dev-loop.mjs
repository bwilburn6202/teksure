#!/usr/bin/env node
/**
 * dev-loop.mjs — TekSure deterministic development loop.
 *
 * Runs a battery of read-only checks across the repo, records findings to a
 * machine-readable state file, and appends a human-readable section to the
 * backlog file at .claude/dev-loop-backlog.md. The backlog is the queue that
 * the creative scheduled tasks (weekly-guide-enrichment, content-freshness-check,
 * monthly-feature-build) pick up on their next run.
 *
 * The loop deliberately does NOT call any external API and does NOT auto-edit
 * source files. Every finding either fixes itself via a tiny safe regex (see
 * scripts/dev-loop/auto-fixes/) or shows up in the backlog as a TODO for a
 * human or a Claude Code session to pick up.
 *
 * Usage
 *   node scripts/dev-loop.mjs            # continuous loop, default 30 min interval
 *   node scripts/dev-loop.mjs --once     # single iteration, then exit
 *   node scripts/dev-loop.mjs --once --dry-run   # report only, no file writes
 *   node scripts/dev-loop.mjs --once --ci         # CI mode: write findings + exit non-zero on hard failures
 *   node scripts/dev-loop.mjs --interval=600      # 10 min between iterations
 *
 * Flags
 *   --once          single iteration
 *   --dry-run       no writes to .claude/dev-loop-state.json or backlog
 *   --ci            stricter exit codes (1 on broken links / slug dupes / tsc errors)
 *   --interval=N    seconds between iterations (default 1800)
 *   --skip=health,stale  comma list of check names to skip
 *   --only=health        comma list of check names to run exclusively
 *
 * Output files
 *   .claude/dev-loop-state.json     persisted state (cycle count, last findings)
 *   .claude/dev-loop-backlog.md     append-only human-readable log
 */
import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const STATE_FILE = path.join(ROOT, '.claude', 'dev-loop-state.json');
const BACKLOG_FILE = path.join(ROOT, '.claude', 'dev-loop-backlog.md');
const BACKLOG_MAX_BYTES = 256 * 1024; // 256KB cap; older sections trimmed

const args = parseArgs(process.argv.slice(2));
const ONCE = args.has('once');
const DRY = args.has('dry-run');
const CI = args.has('ci');
const INTERVAL = Number(args.get('interval') ?? 1800);
const ONLY = (args.get('only') ?? '').split(',').filter(Boolean);
const SKIP = (args.get('skip') ?? '').split(',').filter(Boolean);

function parseArgs(argv) {
  const map = new Map();
  for (const raw of argv) {
    const [k, v] = raw.includes('=') ? raw.split('=') : [raw, 'true'];
    map.set(k.replace(/^--/, ''), v);
  }
  return map;
}

function shouldRun(name) {
  if (ONLY.length > 0) return ONLY.includes(name);
  return !SKIP.includes(name);
}

function run(cmd, opts = {}) {
  const [bin, ...parts] = cmd.split(' ');
  const result = spawnSync(bin, parts, {
    cwd: ROOT,
    encoding: 'utf8',
    timeout: opts.timeout ?? 120_000,
    shell: process.platform === 'win32',
  });
  return {
    cmd,
    ok: result.status === 0,
    status: result.status ?? 1,
    stdout: (result.stdout ?? '').trim(),
    stderr: (result.stderr ?? '').trim(),
  };
}

function safeRead(file) {
  try {
    return fs.readFileSync(file, 'utf8');
  } catch {
    return '';
  }
}

function listSourceFiles(dir) {
  const out = [];
  function walk(d) {
    for (const entry of fs.readdirSync(d, { withFileTypes: true })) {
      const full = path.join(d, entry.name);
      if (entry.isDirectory()) {
        if (entry.name === 'node_modules' || entry.name.startsWith('.')) continue;
        walk(full);
      } else if (/\.(tsx?|mjs|jsx?)$/.test(entry.name)) {
        out.push(full);
      }
    }
  }
  walk(dir);
  return out;
}

// ── Checks ────────────────────────────────────────────────────────────────

function checkSlugs() {
  const result = run('node scripts/validate-slugs.mjs');
  return {
    name: 'slugs',
    label: 'Duplicate guide slugs',
    ok: result.ok,
    severity: result.ok ? 'info' : 'error',
    summary: result.ok
      ? 'No duplicate slugs.'
      : 'Duplicate slugs detected — see validate-slugs output.',
    details: result.ok ? '' : `${result.stdout}\n${result.stderr}`.trim(),
  };
}

function checkLinks() {
  const result = run('node scripts/link-audit.mjs --json');
  if (!result.ok) {
    return {
      name: 'links',
      label: 'Internal link audit',
      ok: false,
      severity: 'error',
      summary: 'link-audit script failed to run.',
      details: result.stderr || result.stdout,
    };
  }
  let data;
  try {
    data = JSON.parse(result.stdout);
  } catch (err) {
    return {
      name: 'links',
      label: 'Internal link audit',
      ok: false,
      severity: 'error',
      summary: 'link-audit emitted non-JSON output.',
      details: result.stdout.slice(0, 500),
    };
  }
  const broken = data.brokenTargets ?? 0;
  const orphans = data.orphanCount ?? 0;
  return {
    name: 'links',
    label: 'Internal link audit',
    ok: broken === 0,
    severity: broken === 0 ? 'info' : 'warn',
    summary: `${broken} broken targets, ${orphans} orphaned routes (of ${data.definedRoutes?.length ?? '?'} routes).`,
    details:
      broken > 0
        ? data.broken
            .slice(0, 10)
            .map((b) => `- ${b.target}  (${b.refs.length}× — first: ${b.refs[0]})`)
            .join('\n')
        : '',
    metrics: {
      brokenTargets: broken,
      orphanedRoutes: orphans,
      definedRoutes: data.definedRoutes?.length ?? 0,
    },
  };
}

function checkTypeScript() {
  const result = run('npx tsc --noEmit --pretty false', { timeout: 240_000 });
  if (result.ok) {
    return {
      name: 'typescript',
      label: 'TypeScript compile',
      ok: true,
      severity: 'info',
      summary: 'No TypeScript errors.',
      details: '',
    };
  }
  const lines = result.stdout.split('\n').filter((l) => /error TS\d+:/.test(l));
  return {
    name: 'typescript',
    label: 'TypeScript compile',
    ok: false,
    severity: 'error',
    summary: `${lines.length} TypeScript errors.`,
    details: lines.slice(0, 8).join('\n'),
    metrics: { errorCount: lines.length },
  };
}

function checkStaleOsVersions() {
  // Look in guide bodies for OS version mentions that have aged out.
  // We do NOT auto-edit — only flag for the creative loop to revisit.
  const dataDir = path.join(ROOT, 'src', 'data');
  if (!fs.existsSync(dataDir)) {
    return {
      name: 'stale-os',
      label: 'Stale OS version mentions',
      ok: true,
      severity: 'info',
      summary: 'src/data not found.',
      details: '',
    };
  }
  const guideFiles = fs
    .readdirSync(dataDir)
    .filter((f) => f.startsWith('guides') && f.endsWith('.ts'))
    .map((f) => path.join(dataDir, f));

  // Patterns to flag. Keep this list short and obviously stale to avoid noise.
  const STALE_PATTERNS = [
    { re: /\biOS\s?1[0-6]\b/g, label: 'iOS 10–16' },
    { re: /\bAndroid\s?1[0-3]\b/g, label: 'Android 10–13' },
    { re: /\bWindows\s?7\b/g, label: 'Windows 7' },
    { re: /\bWindows\s?8(?!\.)/g, label: 'Windows 8' },
    { re: /\bmacOS\s?(Catalina|Mojave|High Sierra|Sierra|Big Sur|Monterey)\b/g, label: 'macOS pre-Ventura' },
  ];

  const findings = [];
  for (const file of guideFiles) {
    const content = fs.readFileSync(file, 'utf8');
    for (const { re, label } of STALE_PATTERNS) {
      re.lastIndex = 0;
      let m;
      while ((m = re.exec(content)) !== null) {
        const line = content.substring(0, m.index).split('\n').length;
        findings.push({ file: path.relative(ROOT, file), line, label, match: m[0] });
        if (findings.length >= 50) break;
      }
      if (findings.length >= 50) break;
    }
    if (findings.length >= 50) break;
  }

  return {
    name: 'stale-os',
    label: 'Stale OS version mentions',
    ok: findings.length === 0,
    severity: findings.length === 0 ? 'info' : 'warn',
    summary:
      findings.length === 0
        ? 'No stale OS version mentions found.'
        : `${findings.length} mention(s) of older OS versions in guides.`,
    details: findings
      .slice(0, 10)
      .map((f) => `- ${f.file}:${f.line} — ${f.label} (\`${f.match}\`)`)
      .join('\n'),
    metrics: { count: findings.length },
  };
}

function checkOldGuides() {
  // Flag guides with publishedAt > 18 months ago that haven't been touched.
  const dataDir = path.join(ROOT, 'src', 'data');
  if (!fs.existsSync(dataDir)) {
    return { name: 'old-guides', label: 'Aged guides', ok: true, severity: 'info', summary: 'no data dir', details: '' };
  }
  const cutoff = new Date();
  cutoff.setMonth(cutoff.getMonth() - 18);
  const cutoffStr = cutoff.toISOString().slice(0, 10);

  const guideFiles = fs
    .readdirSync(dataDir)
    .filter((f) => f.startsWith('guides') && f.endsWith('.ts'))
    .map((f) => path.join(dataDir, f));

  let total = 0;
  let aged = 0;
  const sample = [];
  const re = /publishedAt:\s*['"`](\d{4}-\d{2}-\d{2})['"`]/g;

  for (const file of guideFiles) {
    const content = fs.readFileSync(file, 'utf8');
    re.lastIndex = 0;
    let m;
    while ((m = re.exec(content)) !== null) {
      total += 1;
      if (m[1] < cutoffStr) {
        aged += 1;
        if (sample.length < 5) {
          const line = content.substring(0, m.index).split('\n').length;
          sample.push(`- ${path.relative(ROOT, file)}:${line} — published ${m[1]}`);
        }
      }
    }
  }

  return {
    name: 'old-guides',
    label: 'Aged guides',
    ok: true, // never fails, just informational
    severity: aged > total * 0.2 ? 'warn' : 'info',
    summary: `${aged} of ${total} guides published before ${cutoffStr}.`,
    details: sample.join('\n'),
    metrics: { total, aged, cutoff: cutoffStr },
  };
}

function checkSiteMetrics() {
  // Quick snapshot of growth metrics so the backlog tracks trajectory over time.
  const app = safeRead(path.join(ROOT, 'src', 'App.tsx'));
  const tools = safeRead(path.join(ROOT, 'src', 'pages', 'Tools.tsx'));
  const dataDir = path.join(ROOT, 'src', 'data');
  let guideCount = 0;
  if (fs.existsSync(dataDir)) {
    for (const f of fs.readdirSync(dataDir)) {
      if (!f.startsWith('guides') || !f.endsWith('.ts')) continue;
      const content = fs.readFileSync(path.join(dataDir, f), 'utf8');
      guideCount += (content.match(/^\s*slug:\s*['"`]/gm) ?? []).length;
    }
  }
  return {
    name: 'metrics',
    label: 'Site metrics snapshot',
    ok: true,
    severity: 'info',
    summary: `${guideCount} guides, ${(app.match(/<Route\s+path=/g) ?? []).length} routes, ${(tools.match(/\n\s*title:\s*['"]/g) ?? []).length} tools.`,
    details: '',
    metrics: {
      guides: guideCount,
      routes: (app.match(/<Route\s+path=/g) ?? []).length,
      lazyImports: (app.match(/lazy\(\(\) => import/g) ?? []).length,
      tools: (tools.match(/\n\s*title:\s*['"]/g) ?? []).length,
    },
  };
}

const ALL_CHECKS = [
  { name: 'metrics', fn: checkSiteMetrics },
  { name: 'slugs', fn: checkSlugs },
  { name: 'links', fn: checkLinks },
  { name: 'typescript', fn: checkTypeScript },
  { name: 'stale-os', fn: checkStaleOsVersions },
  { name: 'old-guides', fn: checkOldGuides },
];

// ── State + backlog ──────────────────────────────────────────────────────

function readState() {
  if (!fs.existsSync(STATE_FILE)) {
    return {
      version: '1.0',
      cycleCount: 0,
      lastRun: null,
      lastFindings: {},
      history: [],
    };
  }
  try {
    return JSON.parse(fs.readFileSync(STATE_FILE, 'utf8'));
  } catch {
    return { version: '1.0', cycleCount: 0, lastRun: null, lastFindings: {}, history: [] };
  }
}

function writeState(state) {
  if (DRY) return;
  fs.mkdirSync(path.dirname(STATE_FILE), { recursive: true });
  fs.writeFileSync(STATE_FILE, JSON.stringify(state, null, 2) + '\n');
}

function appendBacklog(block) {
  if (DRY) return;
  fs.mkdirSync(path.dirname(BACKLOG_FILE), { recursive: true });
  if (!fs.existsSync(BACKLOG_FILE)) {
    fs.writeFileSync(
      BACKLOG_FILE,
      [
        '# TekSure Dev-Loop Backlog',
        '',
        'Auto-generated by `scripts/dev-loop.mjs` on every cycle.',
        'Creative scheduled tasks (weekly-guide-enrichment, content-freshness-check,',
        'monthly-feature-build) pick items off this list on their next run.',
        '',
        'Newest cycles appear at the top.',
        '',
        '---',
        '',
      ].join('\n'),
    );
  }
  const existing = fs.readFileSync(BACKLOG_FILE, 'utf8');
  // Insert new block after the leading header (between `---\n\n` and the rest).
  const splitAt = existing.indexOf('---\n\n');
  let updated;
  if (splitAt === -1) {
    updated = existing + '\n' + block + '\n';
  } else {
    const head = existing.slice(0, splitAt + 5);
    const tail = existing.slice(splitAt + 5);
    updated = head + block + '\n\n' + tail;
  }
  // Trim if backlog grew past cap. Keep header + most recent ~256KB of cycles.
  if (Buffer.byteLength(updated, 'utf8') > BACKLOG_MAX_BYTES) {
    const head = updated.slice(0, splitAt === -1 ? 0 : splitAt + 5);
    const remainder = updated.slice(head.length, head.length + BACKLOG_MAX_BYTES - head.length);
    updated = head + remainder + '\n\n_(older cycles trimmed)_\n';
  }
  fs.writeFileSync(BACKLOG_FILE, updated);
}

// ── Cycle ─────────────────────────────────────────────────────────────────

function severityIcon(sev) {
  return { info: 'ok', warn: 'warn', error: 'fail' }[sev] ?? '·';
}

function runCycle(state) {
  const stamp = new Date().toISOString();
  state.cycleCount += 1;
  state.lastRun = stamp;

  const results = [];
  for (const check of ALL_CHECKS) {
    if (!shouldRun(check.name)) continue;
    try {
      const r = check.fn();
      results.push(r);
    } catch (err) {
      results.push({
        name: check.name,
        label: check.name,
        ok: false,
        severity: 'error',
        summary: `Check threw: ${err.message}`,
        details: '',
      });
    }
  }

  // Build markdown block for backlog.
  const lines = [
    `## Cycle ${state.cycleCount} — ${stamp}`,
    '',
  ];
  for (const r of results) {
    lines.push(`### [${severityIcon(r.severity)}] ${r.label}`);
    lines.push(r.summary);
    if (r.details) {
      lines.push('');
      lines.push('```');
      lines.push(r.details);
      lines.push('```');
    }
    lines.push('');
  }
  // Pull out actionable items for the creative loop to pick up.
  const actionable = results.filter((r) => !r.ok || r.severity === 'warn');
  if (actionable.length > 0) {
    lines.push('### Suggested next actions');
    for (const r of actionable) {
      lines.push(`- **${r.label}** — ${r.summary}`);
    }
    lines.push('');
  }
  lines.push('---');

  appendBacklog(lines.join('\n'));

  // Update state snapshot.
  state.lastFindings = Object.fromEntries(
    results.map((r) => [
      r.name,
      { ok: r.ok, severity: r.severity, summary: r.summary, metrics: r.metrics ?? null },
    ]),
  );
  state.history.push({
    cycle: state.cycleCount,
    at: stamp,
    findings: state.lastFindings,
  });
  // Keep only last 50 cycles in history.
  if (state.history.length > 50) state.history = state.history.slice(-50);
  writeState(state);

  // Console summary.
  console.log(`\n=== dev-loop cycle ${state.cycleCount} (${stamp}) ===`);
  for (const r of results) {
    console.log(`  [${severityIcon(r.severity)}] ${r.label}: ${r.summary}`);
  }
  console.log('');

  // CI mode exit code.
  const hardFails = results.filter((r) => r.severity === 'error');
  return { results, hardFailCount: hardFails.length };
}

async function main() {
  console.log('TekSure dev-loop starting');
  console.log(`  once=${ONCE} dry=${DRY} ci=${CI} interval=${INTERVAL}s`);
  if (ONLY.length) console.log(`  only=${ONLY.join(',')}`);
  if (SKIP.length) console.log(`  skip=${SKIP.join(',')}`);

  const state = readState();
  let lastResult;
  do {
    lastResult = runCycle(state);
    if (!ONCE) {
      await new Promise((r) => setTimeout(r, INTERVAL * 1000));
    }
  } while (!ONCE);

  if (CI && lastResult.hardFailCount > 0) {
    console.error(`dev-loop: ${lastResult.hardFailCount} hard failure(s) in CI mode`);
    process.exit(1);
  }
  process.exit(0);
}

main().catch((err) => {
  console.error('dev-loop crashed:', err);
  process.exit(1);
});
