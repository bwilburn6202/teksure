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
// CLAUDE.md sets the backlog budget at 64KB: this file is read at the start of
// every run, so its size is a direct context cost. The cap was 256KB - four times
// the documented budget - which is why it kept having to be trimmed by hand.
// Keep these two numbers in agreement.
const BACKLOG_MAX_BYTES = 64 * 1024;

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
        // Skip min-version baselines like "iOS 16 or later", "Android 13+", "iOS 16 and newer",
        // and backward-compat phrasing like "macOS Monterey or earlier"
        const after = content.slice(m.index + m[0].length, m.index + m[0].length + 25);
        if (/^[\s]*(\+|\.[0-9]|or later|or newer|or higher|or above|or earlier|or older|and (later|newer|higher|above|up|earlier|older))/i.test(after)) continue;
        // Skip historical/requirement references — these are facts, not staleness:
        // "introduced in iOS 14", "since iOS 15", "requires iOS 16", "iPhone with iOS 14"
        const before = content.slice(Math.max(0, m.index - 60), m.index);
        if (/\b(introduced|added|launched|released|debuted|available|began|arrived|improved)\s+(in|with|on|since)\s*\(?\s*$/i.test(before)) continue;
        if (/\b(since|as of|back in|before|until|through|from|starting (in|with))\s*\(?\s*$/i.test(before)) continue;
        if (/\b(requires?|needs?|running|runs?|has|have|with|on|in|and|are|including)\s*\(?\s*$/i.test(before)) continue;
        // Skip versioned point releases ("macOS Monterey 12.1") and dated facts ("iOS 16, which came out in late 2022")
        if (/^\s*[0-9]+\./.test(after)) continue;
        if (/^\s*(\)|,? which came out|,? released| \(released| \(20[0-9]{2}\))/i.test(after)) continue;

        // The three suppressions below were added 2026-08-05. Every one of the
        // four then-outstanding findings was a *correct* mention that this
        // check was wrong to flag; the content needed no edit. Rather than
        // rewrite accurate guides to silence a warning, the check got more
        // precise. Each rule is deliberately narrow — see the comment on each.
        const afterWide = content.slice(m.index + m[0].length, m.index + m[0].length + 140);

        // 1. The guide is *about* the OS being obsolete. Flagging "Windows 7
        //    stopped receiving updates years ago" as stale content inverts the
        //    meaning: naming the dead OS is the whole point of the sentence.
        if (/\b(stopped|no longer|ceased|ended|ends|end of|reached end of life|unsupported|obsolete|out of support|stop feeling usable|too old|last received)\b/i.test(afterWide)) continue;

        // 2. Distributive minimum-requirement across a compound subject:
        //    "iOS 16 and macOS Ventura or later" means both are floors. The
        //    existing `after` rule only caught the qualifier when it sat
        //    immediately next to the version. Require that no sentence break
        //    intervenes, so this cannot swallow a later unrelated clause.
        const toQualifier = afterWide.match(/^([^.!?]*?)\bor (?:later|newer|higher|above)\b/i);
        if (toQualifier) continue;

        // 3. Upgrade-path framing: "upgrading from Windows 7", "if you are
        //    still on Windows 8". The old version is named as the thing being
        //    left behind, which is exactly what a current guide should say.
        if (/\b(upgrad\w*|migrat\w*|mov\w*|switch\w*|coming|still (on|running)|replace\w*)\s+(from|off|away from|on)?\s*\(?\s*$/i.test(before)) continue;
        const line = content.substring(0, m.index).split('\n').length;
        findings.push({ file: path.relative(ROOT, file), line, label, match: m[0] });
        if (findings.length >= 100) break;
      }
      if (findings.length >= 100) break;
    }
    if (findings.length >= 100) break;
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
  // Tools.tsx is the HAND-CURATED /tools listing page, not the tool surface.
  // It lists 285 tools while the site publishes ~2,958, so reporting its length
  // as "tools" understated the live surface by an order of magnitude - and made
  // it look as though the 2026-08-30 redundancy cut (2,970 -> 387) had already
  // shipped when production never received it. Cycle 151 escalated exactly that
  // question; this number was answering it wrongly. Count the authoritative
  // auto-generated directory instead, and keep the curated count as its own
  // metric so the gap between "pages that exist" and "pages a human can reach
  // from /tools" stays visible instead of being silently averaged away.
  const curated = safeRead(path.join(ROOT, 'src', 'pages', 'Tools.tsx'));
  const toolsDir = safeRead(path.join(ROOT, 'src', 'data', 'tools-directory.ts'));
  const dataDir = path.join(ROOT, 'src', 'data');
  let guideCount = 0;
  if (fs.existsSync(dataDir)) {
    for (const f of fs.readdirSync(dataDir)) {
      if (!f.startsWith('guides') || !f.endsWith('.ts')) continue;
      const content = fs.readFileSync(path.join(dataDir, f), 'utf8');
      // Do NOT anchor this to the start of a line. Roughly 300 guides are written
      // as single-line object literals (`{ slug: '...', title: '...' }`), so
      // /^\s*slug:/gm silently skipped them and this snapshot reported 3748
      // guides while validate-slugs and the aged-guides check both said 4049.
      // A wrong headline number is worse than no number: cycle 70 spent a full
      // session chasing a "missing 300 guides" sitemap bug that never existed.
      // The leading [{,\s] keeps `canonicalSlug:` and similar keys out.
      guideCount += (content.match(/(?:^|[{,\s])slug:\s*['"`]/gm) ?? []).length;
    }
  }
  const toolCount = (toolsDir.match(/\{\s*path:\s*'\/tools\//g) ?? []).length;
  const curatedTools = (curated.match(/\n\s*title:\s*['"]/g) ?? []).length;
  const routes = (app.match(/<Route\s+path=/g) ?? []).length;
  return {
    name: 'metrics',
    label: 'Site metrics snapshot',
    ok: true,
    severity: 'info',
    summary: `${guideCount} guides, ${routes} routes, ${toolCount} tools (${curatedTools} curated on /tools).`,
    details: '',
    metrics: {
      guides: guideCount,
      routes,
      lazyImports: (app.match(/lazy\(\(\) => import/g) ?? []).length,
      tools: toolCount,
      curatedToolsListed: curatedTools,
    },
  };
}

/**
 * Duplicate <title>s across guides.
 *
 * Two URLs with the same title compete for the same search query and split
 * their ranking signals, so neither ranks as well as one page would. Fix by
 * setting `canonicalSlug` on the weaker one (scripts/fix-duplicate-titles.mjs
 * does this automatically) or by giving them genuinely different titles.
 */
function checkDuplicateTitles() {
  const dataDir = path.join(ROOT, 'src', 'data');
  const titles = new Map();
  for (const file of fs.readdirSync(dataDir)) {
    if (!file.startsWith('guides') || !file.endsWith('.ts')) continue;
    const text = fs.readFileSync(path.join(dataDir, file), 'utf8');
    const re = /slug:\s*(['"`])([^'"`]+)\1([\s\S]{0,400}?)title:\s*(['"`])((?:\\.|(?!\4)[\s\S])*)\4/g;
    let m;
    while ((m = re.exec(text)) !== null) {
      // A guide that already points at a canonical is intentionally a duplicate.
      if (/canonicalSlug:/.test(m[3])) continue;
      const title = m[5].trim();
      if (!title) continue;
      if (!titles.has(title)) titles.set(title, []);
      titles.get(title).push(m[2]);
    }
  }
  const dupes = [...titles.entries()].filter(([, slugs]) => slugs.length > 1);
  return {
    name: 'duplicate-titles',
    label: 'Duplicate guide titles',
    ok: dupes.length === 0,
    severity: dupes.length === 0 ? 'info' : 'warn',
    summary:
      dupes.length === 0
        ? 'No duplicate guide titles.'
        : `${dupes.length} title(s) used by more than one guide.`,
    details: dupes
      .slice(0, 10)
      .map(([t, slugs]) => `- "${t.slice(0, 60)}" → ${slugs.join(', ')}`)
      .join('\n'),
    metrics: { count: dupes.length },
  };
}

/**
 * The same video embedded across many unrelated guides.
 *
 * In July 2026 one YouTube ID was embedded in 249 guides spanning seven
 * categories — turning a PC on, health tech, social media. Placeholders that
 * shipped as if they were per-guide walkthroughs. For readers who are being
 * invited to follow along with a video, a video about something else is worse
 * than none: they conclude they have misunderstood, not that the site is wrong.
 * It also emits schema.org VideoObject claiming the page has a video of its
 * subject.
 *
 * A handful of guides legitimately sharing one general video is fine, so this
 * only fires above a threshold that no honest reuse would reach.
 */
function checkDuplicateVideos() {
  const dataDir = path.join(ROOT, 'src', 'data');
  if (!fs.existsSync(dataDir)) {
    return { name: 'duplicate-videos', label: 'Reused placeholder videos', ok: true, severity: 'info', summary: 'no data dir', details: '' };
  }
  const LIMIT = 5;
  const counts = new Map();
  for (const file of fs.readdirSync(dataDir)) {
    if (!file.startsWith('guides') || !file.endsWith('.ts')) continue;
    const text = fs.readFileSync(path.join(dataDir, file), 'utf8');
    for (const m of text.matchAll(/videoUrl:\s*['"`][^'"`]*?\/embed\/([A-Za-z0-9_-]+)/g)) {
      counts.set(m[1], (counts.get(m[1]) || 0) + 1);
    }
  }
  const over = [...counts.entries()].filter(([, n]) => n > LIMIT).sort((a, b) => b[1] - a[1]);
  const affected = over.reduce((a, [, n]) => a + n, 0);
  return {
    name: 'duplicate-videos',
    label: 'Reused placeholder videos',
    ok: over.length === 0,
    severity: over.length === 0 ? 'info' : 'warn',
    summary:
      over.length === 0
        ? 'No video is reused across more than 5 guides.'
        : `${over.length} video(s) reused across ${affected} guides — almost certainly placeholders, not real walkthroughs.`,
    details: over.slice(0, 8).map(([id, n]) => `- ${n} guides share /embed/${id}`).join('\n'),
    metrics: { offendingIds: over.length, affectedGuides: affected },
  };
}

/**
 * Guide excerpts longer than the documented limit.
 *
 * CLAUDE.md specifies "excerpt: Max 160 characters — used in cards and meta
 * tags". That limit is not stylistic: the excerpt becomes the page's meta
 * description, and Google truncates those around 155-160 characters. Anything
 * longer gets cut mid-sentence in search results, which is where most people
 * meet these pages for the first time.
 *
 * A July 2026 audit found 364 guides over the limit, the worst at 493
 * characters — three times the spec, and reading like a content brief rather
 * than a description. Nothing was checking, so they accumulated.
 */
function checkExcerptLength() {
  const dataDir = path.join(ROOT, 'src', 'data');
  if (!fs.existsSync(dataDir)) {
    return { name: 'excerpt-length', label: 'Overlong guide excerpts', ok: true, severity: 'info', summary: 'no data dir', details: '' };
  }
  const LIMIT = 160;
  const over = [];
  for (const file of fs.readdirSync(dataDir)) {
    if (!file.startsWith('guides') || !file.endsWith('.ts')) continue;
    const text = fs.readFileSync(path.join(dataDir, file), 'utf8');
    // Pair each slug with the excerpt that follows it in the same object.
    const re = /slug:\s*(['"`])([^'"`]+)\1[\s\S]{0,400}?excerpt:\s*(['"`])((?:\\.|(?!\3)[\s\S])*)\3/g;
    let m;
    while ((m = re.exec(text)) !== null) {
      const len = m[4].length;
      if (len > LIMIT) over.push({ slug: m[2], len });
    }
  }
  over.sort((a, b) => b.len - a.len);
  return {
    name: 'excerpt-length',
    label: 'Overlong guide excerpts',
    ok: over.length === 0,
    severity: over.length === 0 ? 'info' : 'warn',
    summary:
      over.length === 0
        ? `All guide excerpts are within ${LIMIT} characters.`
        : `${over.length} excerpt(s) exceed ${LIMIT} chars and will be truncated mid-sentence in search results.`,
    details: over.slice(0, 12).map((o) => `- ${o.len} chars: ${o.slug}`).join('\n'),
    metrics: { count: over.length, worst: over[0]?.len ?? 0 },
  };
}

/**
 * Prices quoted in a page instead of imported from src/data/pricing.ts.
 *
 * On 2026-07-26 the site had three different prices live for the same service:
 * the booking flow charged $49 first hour + $29/additional, /pricing advertised
 * flat $49/$99/$149 tiers, and the FAQ said "sessions start at $29". A customer
 * could read one number and be charged another. Nobody introduced that on
 * purpose — the prices were simply hardcoded in three places and drifted.
 *
 * pricing.ts now exists as the single source of truth. This check exists so the
 * drift cannot quietly start again: any dollar figure typed directly into a
 * customer-facing page gets flagged.
 */
function checkPricingConsistency() {
  const pagesDir = path.join(ROOT, 'src', 'pages');
  const offenders = [];
  // Money written straight into a page. Guides legitimately quote third-party
  // prices ("Shopify is $29/mo"), so only look at the pages that describe
  // TekSure's own service and checkout.
  const OWN_PRICE_PAGES = new Set([
    'Pricing.tsx',
    'GetHelp.tsx',
    'FAQ.tsx',
    'HowItWorks.tsx',
    'Terms.tsx',
    'RefundPolicy.tsx',
    'TechnicianProfile.tsx',
  ]);
  for (const file of OWN_PRICE_PAGES) {
    const p = path.join(pagesDir, file);
    if (!fs.existsSync(p)) continue;
    const text = fs.readFileSync(p, 'utf8');
    const importsPricing = /from ['"]@\/data\/pricing['"]/.test(text);
    for (const m of text.matchAll(/\$\d+(?:\.\d{2})?/g)) {
      // Inside a template literal referencing the constants is fine.
      const around = text.slice(Math.max(0, m.index - 40), m.index);
      if (/formatPrice\(|PRICE|DEPOSIT/.test(around)) continue;
      // Comments explaining past price drift are not price drift. Check the
      // start of the physical line rather than the whole preceding window.
      const lineStart = text.lastIndexOf('\n', m.index) + 1;
      const line = text.slice(lineStart, m.index);
      if (/^\s*(\/\/|\*|\/\*)/.test(line)) continue;
      offenders.push(`- ${file}: hardcoded ${m[0]}${importsPricing ? '' : ' (file does not import pricing.ts at all)'}`);
    }
  }
  const unique = [...new Set(offenders)];
  return {
    name: 'pricing-consistency',
    label: 'Hardcoded prices outside pricing.ts',
    ok: unique.length === 0,
    severity: unique.length === 0 ? 'info' : 'warn',
    summary:
      unique.length === 0
        ? 'All service prices come from src/data/pricing.ts.'
        : `${unique.length} hardcoded price(s) on customer-facing pages — these are how the three-way price drift started.`,
    details: unique.slice(0, 12).join('\n'),
    metrics: { count: unique.length },
  };
}

/**
 * Invented people presented as real customers, and trust claims we cannot back.
 *
 * On 2026-07-26 /technicians was live with four made-up technicians and eleven
 * fabricated named reviews ("Patricia W., 5 stars: He arrived on time..."),
 * and /stories ran a dozen invented people under the headline "Real Stories
 * from Real People" with no disclosure anywhere.
 *
 * Publishing invented testimonials as genuine is deceptive advertising; the
 * FTC's Rule on Consumer Reviews and Testimonials prohibits it and carries
 * civil penalties. For a brand whose whole promise is "trusted and secure",
 * aimed at the demographic that fake tech-support outfits target, this is the
 * single most damaging thing that can end up on the site by accident.
 *
 * The rule enforced here: a page that contains review-shaped data must also
 * contain a disclosure, unless the reviews come from the database (real ones).
 */
function checkTestimonialHonesty() {
  const pagesDir = path.join(ROOT, 'src', 'pages');
  const flagged = [];
  const DISCLOSURE = /fictional|illustrative example|representative example|not actual (customer|user) testimonial|names and details are (made up|fictional)/i;
  /**
   * Testimonial-shaped data specifically: a person's name paired with words
   * they supposedly said.
   *
   * An earlier, looser version matched `name:` next to `rating:` and flagged
   * /tools/VpnGuide and /tools/TwoFactorSetup, which rate *products*
   * ("Proton VPN, rating: 5"). That is TekSure's own editorial opinion and is
   * completely fine. Requiring a quote/text field alongside the name is what
   * separates "we rate this app 5 stars" from "Patricia W. said we were
   * wonderful" — only the second one is a testimonial.
   */
  const REVIEW_SHAPE = /(author|reviewer):\s*['"`][^'"`]+['"`][\s\S]{0,200}?(quote|text|review|testimonial):\s*['"`]/i;

  const walk = (dir) => {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const p = path.join(dir, entry.name);
      if (entry.isDirectory()) { walk(p); continue; }
      if (!entry.name.endsWith('.tsx')) continue;
      const text = fs.readFileSync(p, 'utf8');
      if (!REVIEW_SHAPE.test(text)) continue;
      // Reviews loaded from Supabase are real; only hardcoded ones are suspect.
      if (/from\(['"]testimonials['"]\)|from\(['"]guide_ratings['"]\)/.test(text)) continue;
      if (DISCLOSURE.test(text)) continue;
      flagged.push(`- ${path.relative(ROOT, p)} — hardcoded reviews with ratings and no disclosure`);
    }
  };
  if (fs.existsSync(pagesDir)) walk(pagesDir);

  return {
    name: 'testimonial-honesty',
    label: 'Undisclosed invented testimonials',
    ok: flagged.length === 0,
    severity: flagged.length === 0 ? 'info' : 'warn',
    summary:
      flagged.length === 0
        ? 'No hardcoded reviews without a disclosure.'
        : `${flagged.length} page(s) present invented reviews as real. This is an FTC issue, not a style one — fix before anything else in this report.`,
    details: flagged.slice(0, 10).join('\n'),
    metrics: { count: flagged.length },
  };
}

/**
 * Reading level and small-type usage, via scripts/audit-senior-ux.mjs.
 *
 * TekSure is written for people who mostly did not grow up with this stuff and
 * are often over 60. Content pitched above roughly grade 8 stops doing its job,
 * however accurate it is.
 */
function checkSeniorUx() {
  try {
    const res = spawnSync('node', ['scripts/audit-senior-ux.mjs', '--json'], {
      cwd: ROOT,
      encoding: 'utf8',
      maxBuffer: 20 * 1024 * 1024,
    });
    if (res.status !== 0) throw new Error(res.stderr?.split('\n')[0] || 'audit failed');
    const { report, hardGuides } = JSON.parse(res.stdout);
    const overTarget = report.guidesAboveGrade8Pct;
    return {
      name: 'senior-ux',
      label: 'Readability & senior UX',
      ok: overTarget < 50 && report.imagesMissingAlt === 0,
      severity: overTarget >= 50 ? 'warn' : 'info',
      summary:
        `avg reading grade ${report.readingGradeAverage} (target <= 8), ` +
        `${overTarget}% of guides above grade 8, ` +
        `${report.imagesMissingAlt} images missing alt.`,
      details: hardGuides
        .slice(0, 10)
        .map((g) => `- grade ${g.grade}: ${g.slug}`)
        .join('\n'),
      metrics: report,
    };
  } catch (err) {
    return {
      name: 'senior-ux',
      label: 'Readability & senior UX',
      ok: true,
      severity: 'info',
      summary: `audit did not run (${err.message.split('\n')[0]}).`,
      details: '',
      metrics: null,
    };
  }
}

/**
 * External source-citation health, via scripts/check-source-links.mjs.
 *
 * Guides cite official sources (FTC, CFPB, AARP, Apple/Google support, etc.)
 * both in a structured `sourceUrl:` field and inline "(Source: ... url)"
 * notes. The July 2026 audit found 18 of these had gone dead — moved,
 * retired, or renamed — some on guides about scams and fraud, which is
 * exactly the content where a broken "verify this" link costs the most
 * trust. This makes external requests, so it is opt-in per run (skip it
 * with --skip=source-links) rather than blocking every cycle on network
 * access.
 */
function checkSourceLinks() {
  try {
    const res = spawnSync('node', ['scripts/check-source-links.mjs', '--json'], {
      cwd: ROOT,
      encoding: 'utf8',
      maxBuffer: 20 * 1024 * 1024,
      timeout: 120000,
    });
    const parsed = JSON.parse(res.stdout);
    const { report, broken } = parsed;
    return {
      name: 'source-links',
      label: 'External source link health',
      ok: report.broken === 0,
      severity: report.broken === 0 ? 'info' : 'warn',
      summary: `${report.urlsChecked} source URLs checked, ${report.broken} confirmed broken (404/410), ${report.unreachable} unreachable (often bot-blocking).`,
      details: broken
        .slice(0, 15)
        .map((b) => `- ${b.status} ${b.url} — used by ${b.refs.map((r) => r.slug).join(', ')}`)
        .join('\n'),
      metrics: report,
    };
  } catch (err) {
    return {
      name: 'source-links',
      label: 'External source link health',
      ok: true,
      severity: 'info',
      summary: `check did not run (${err.message.split('\n')[0]}).`,
      details: '',
      metrics: null,
    };
  }
}

const ALL_CHECKS = [
  { name: 'metrics', fn: checkSiteMetrics },
  { name: 'slugs', fn: checkSlugs },
  { name: 'links', fn: checkLinks },
  { name: 'typescript', fn: checkTypeScript },
  { name: 'stale-os', fn: checkStaleOsVersions },
  { name: 'old-guides', fn: checkOldGuides },
  { name: 'duplicate-titles', fn: checkDuplicateTitles },
  { name: 'senior-ux', fn: checkSeniorUx },
  { name: 'source-links', fn: checkSourceLinks },
  { name: 'pricing-consistency', fn: checkPricingConsistency },
  { name: 'testimonial-honesty', fn: checkTestimonialHonesty },
  { name: 'excerpt-length', fn: checkExcerptLength },
  { name: 'duplicate-videos', fn: checkDuplicateVideos },
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
  fs.writeFileSync(BACKLOG_FILE, trimBacklog(updated));
}

/**
 * Trim the backlog to BACKLOG_MAX_BYTES on a cycle boundary.
 *
 * The previous implementation sliced at a raw byte offset, which cut through
 * the middle of whichever cycle happened to straddle the cap and left a
 * half-sentence followed by a stray code fence. It also computed the header
 * offset against the pre-insert string while slicing the post-insert one, so
 * the kept region was off by the length of the new block. Cut at `## Cycle`
 * headings instead: the result is always a whole number of readable cycles.
 */
function trimBacklog(text) {
  if (Buffer.byteLength(text, 'utf8') <= BACKLOG_MAX_BYTES) return text;
  const splitAt = text.indexOf('---\n\n');
  const head = splitAt === -1 ? '' : text.slice(0, splitAt + 5);
  const body = text.slice(head.length);
  const marker = '\n## Cycle ';
  let kept = body;
  // Drop whole cycles from the oldest end until the file fits.
  while (Buffer.byteLength(head + kept, 'utf8') > BACKLOG_MAX_BYTES) {
    const lastCycle = kept.lastIndexOf(marker);
    if (lastCycle <= 0) break; // never drop the newest cycle
    kept = kept.slice(0, lastCycle + 1);
  }
  return head + kept.replace(/\s+$/, '') + '\n\n_(older cycles trimmed)_\n';
}

/**
 * Collapse a run of identical all-clear cycles into a single entry.
 *
 * The scheduled loop runs every 6 hours. When nothing changes it was writing a
 * fresh ~70-line dump of the same thirteen "[ok]" lines each time, so nine
 * consecutive green cycles filled the entire 64KB budget and evicted the
 * hand-written cycles that actually recorded decisions. When the findings are
 * byte-identical to the previous cycle, update a counter line on the existing
 * top block instead of appending a new one.
 *
 * Returns true if the repeat was folded in, false if the caller should append.
 */
function foldRepeatCycle(cycleNumber, stamp) {
  if (DRY) return true;
  if (!fs.existsSync(BACKLOG_FILE)) return false;
  const text = fs.readFileSync(BACKLOG_FILE, 'utf8');
  const headingIdx = text.indexOf('\n## Cycle ');
  if (headingIdx === -1) return false;
  const lineEnd = text.indexOf('\n', headingIdx + 1);
  if (lineEnd === -1) return false;

  const rest = text.slice(lineEnd + 1);
  const nextHeading = rest.indexOf('\n## Cycle ');
  const blockBody = nextHeading === -1 ? rest : rest.slice(0, nextHeading + 1);
  const REPEAT_RE = /^_No change through cycle \d+ \([^)]*\) — (\d+) consecutive identical cycles\._$/m;

  const prior = blockBody.match(REPEAT_RE);
  const count = prior ? Number(prior[1]) + 1 : 2;
  const line = `_No change through cycle ${cycleNumber} (${stamp}) — ${count} consecutive identical cycles._`;

  const newBody = prior
    ? blockBody.replace(REPEAT_RE, line)
    : '\n' + line + '\n' + blockBody;

  const updated =
    text.slice(0, lineEnd + 1) + newBody + (nextHeading === -1 ? '' : rest.slice(nextHeading + 1));
  fs.writeFileSync(BACKLOG_FILE, trimBacklog(updated));
  return true;
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

  // Signature = the findings only, with no timestamp or cycle number, so an
  // unchanged run is detectable. Written to state so the comparison survives
  // across processes (the loop runs as a fresh process every 6 hours).
  const signature = JSON.stringify(
    results.map((r) => [r.name, r.severity, r.summary, r.details]),
  );
  const unchanged = state.lastSignature === signature && state.cycleCount > 1;

  if (!(unchanged && foldRepeatCycle(state.cycleCount, stamp))) {
    appendBacklog(lines.join('\n'));
  }
  state.lastSignature = signature;

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
