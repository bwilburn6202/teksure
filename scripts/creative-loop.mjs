#!/usr/bin/env node
/**
 * creative-loop.mjs — TekSure autonomous content creator.
 *
 * The dev-loop is read-only and surfaces work in a backlog. This loop is the
 * doer side: each cycle, it picks the next un-used topic from the curated
 * topics library, generates a complete guide batch file, wires it into
 * src/data/guides.ts, validates slugs, commits with a `feat:` message, and
 * pushes to GitHub.
 *
 * It is designed to run autonomously (cron / scheduled task / GitHub Action)
 * and to be safe to run repeatedly — if it has nothing new to add, it exits
 * cleanly with a no-op.
 *
 * Usage
 *   node scripts/creative-loop.mjs                # one cycle, commit + push
 *   node scripts/creative-loop.mjs --once         # alias for default
 *   node scripts/creative-loop.mjs --dry-run      # plan only, no writes
 *   node scripts/creative-loop.mjs --no-push      # write + commit, skip push
 *   node scripts/creative-loop.mjs --cycles=N     # run N iterations back-to-back
 *   node scripts/creative-loop.mjs --topics=2     # number of topics per cycle (default 1)
 *
 * Output files
 *   .claude/creative-loop-state.json      cycleCount, lastTopicIndex, history
 *   .claude/creative-loop-log.md          human-readable activity log
 *   src/data/guides-batch-{N}.ts          generated batch file
 *   src/data/guides.ts                    edited (import + spread added)
 */
import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { CREATIVE_TOPICS } from './creative-loop/topics.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const DATA_DIR = path.join(ROOT, 'src', 'data');
const STATE_FILE = path.join(ROOT, '.claude', 'creative-loop-state.json');
const LOG_FILE = path.join(ROOT, '.claude', 'creative-loop-log.md');
const LOG_MAX_BYTES = 256 * 1024;
const GUIDES_INDEX = path.join(DATA_DIR, 'guides.ts');

const args = parseArgs(process.argv.slice(2));
const DRY = args.has('dry-run');
const NO_PUSH = args.has('no-push');
const CYCLES = Number(args.get('cycles') ?? 1);
const TOPICS_PER_CYCLE = Number(args.get('topics') ?? 1);

function parseArgs(argv) {
  const map = new Map();
  for (const raw of argv) {
    const [k, v] = raw.includes('=') ? raw.split('=') : [raw, 'true'];
    map.set(k.replace(/^--/, ''), v);
  }
  return map;
}

function log(...m) {
  console.log('[creative-loop]', ...m);
}

function safeRead(file) {
  try { return fs.readFileSync(file, 'utf8'); } catch { return ''; }
}

function readState() {
  try {
    return JSON.parse(fs.readFileSync(STATE_FILE, 'utf8'));
  } catch {
    return { version: '1.0', cycleCount: 0, history: [], usedTopicSlugs: [] };
  }
}

function writeState(state) {
  if (DRY) return;
  fs.mkdirSync(path.dirname(STATE_FILE), { recursive: true });
  fs.writeFileSync(STATE_FILE, JSON.stringify(state, null, 2));
}

function appendLog(text) {
  if (DRY) return;
  fs.mkdirSync(path.dirname(LOG_FILE), { recursive: true });
  let existing = safeRead(LOG_FILE);
  if (Buffer.byteLength(existing, 'utf8') > LOG_MAX_BYTES) {
    // keep the most recent half
    existing = existing.slice(-LOG_MAX_BYTES / 2);
  }
  fs.writeFileSync(LOG_FILE, text + existing);
}

/** Collect every slug currently defined anywhere in src/data/guides*.ts */
function collectExistingSlugs() {
  const slugs = new Set();
  const files = fs.readdirSync(DATA_DIR)
    .filter((f) => f.startsWith('guides') && f.endsWith('.ts'))
    .map((f) => path.join(DATA_DIR, f));
  const re = /slug:\s*['"`]([^'"`]+)['"`]/g;
  for (const file of files) {
    const content = fs.readFileSync(file, 'utf8');
    let m;
    while ((m = re.exec(content)) !== null) slugs.add(m[1]);
  }
  return slugs;
}

/** Find the next available batch number by scanning existing batch files */
function nextBatchNumber() {
  const files = fs.readdirSync(DATA_DIR);
  let max = 0;
  for (const f of files) {
    const m = f.match(/^guides-batch-(\d+)\.ts$/);
    if (m) {
      const n = Number(m[1]);
      if (n > max) max = n;
    }
  }
  return max + 1;
}

const BANNED_FILLERS = [
  'It\'s easy', 'simply', 'just ', 'obviously', 'leverage', 'utilize',
  'seamless', 'cutting-edge', 'effortless', 'a breeze', 'piece of cake',
];

function scanForBanned(text) {
  const found = [];
  const lower = text.toLowerCase();
  for (const word of BANNED_FILLERS) {
    if (lower.includes(word.toLowerCase())) {
      found.push(word);
    }
  }
  return found;
}

/** Escape a string for inclusion in a single-quoted TS string literal */
function tsEscape(str) {
  return String(str)
    .replace(/\\/g, '\\\\')
    .replace(/'/g, "\\'");
}

/** Escape a string for inclusion in a backtick template literal */
function tsTemplateEscape(str) {
  return String(str)
    .replace(/\\/g, '\\\\')
    .replace(/`/g, '\\`')
    .replace(/\$\{/g, '\\${');
}

function renderStep(step, indent = '      ') {
  const lines = [];
  lines.push(`${indent}{`);
  lines.push(`${indent}  title: '${tsEscape(step.title)}',`);
  lines.push(`${indent}  content: '${tsEscape(step.content)}',`);
  if (step.tip) lines.push(`${indent}  tip: '${tsEscape(step.tip)}',`);
  if (step.warning) lines.push(`${indent}  warning: '${tsEscape(step.warning)}',`);
  lines.push(`${indent}},`);
  return lines.join('\n');
}

function renderGuide(t) {
  const today = new Date().toISOString().slice(0, 10);
  const tagsLine = t.tags.map((tag) => `'${tsEscape(tag)}'`).join(', ');
  const bodyEscaped = tsTemplateEscape(t.body);
  const stepsRendered = (t.steps || []).map((s) => renderStep(s)).join('\n');

  // Pick a more meaningful emoji name
  const emojiMap = {
    shield: '🛡️', medical: '🏥', magnifier: '🔍', bank: '🏦',
    iphone: '📱', photo: '🖼️', map: '🗺️', music: '🎵',
    cart: '🛒', sos: '🆘', document: '📄',
  };
  const emoji = emojiMap[t.emoji] || '📘';

  return `  {
    slug: '${tsEscape(t.slug)}',
    title: '${tsEscape(t.title)}',
    excerpt: '${tsEscape(t.excerpt)}',
    category: '${tsEscape(t.category)}',
    tags: [${tagsLine}],
    readTime: '${tsEscape(t.readTime)}',
    thumbnailEmoji: '${emoji}',
    publishedAt: '${today}',
    lastVerifiedAt: '${today}',
    difficulty: '${tsEscape(t.difficulty)}',
    body: \`${bodyEscaped}\`,
    steps: [
${stepsRendered}
    ],
  },`;
}

function renderBatchFile(batchNumber, topics) {
  const today = new Date().toISOString().slice(0, 10);
  const headerComment = `// guides-batch-${batchNumber} — Auto-generated by creative-loop on ${today}\n// Topics: ${topics.map((t) => t.title).join('; ')}\n`;
  const guideBlocks = topics.map(renderGuide).join('\n\n');
  return `${headerComment}
import type { Guide } from './guides';

export const guidesBatch${batchNumber}: Guide[] = [
${guideBlocks}
];
`;
}

/**
 * Insert the import statement for the new batch in the right place
 * (after the last guidesBatchN import) and add the spread to the allGuides
 * array. Returns the modified content of guides.ts.
 */
function wireUpBatch(indexContent, batchNumber) {
  const importLine = `import { guidesBatch${batchNumber} } from './guides-batch-${batchNumber}';`;
  const spreadToken = `...guidesBatch${batchNumber}`;

  // Find the last import { guidesBatch... } line
  const importRegex = /import \{ guidesBatch(\d+) \} from '\.\/guides-batch-\1';/g;
  let lastImportEnd = -1;
  let lastImportMatch = null;
  let m;
  while ((m = importRegex.exec(indexContent)) !== null) {
    lastImportEnd = m.index + m[0].length;
    lastImportMatch = m;
  }
  if (lastImportEnd === -1) {
    throw new Error('Could not find any guidesBatchN imports in guides.ts');
  }

  // Avoid duplicate import
  if (indexContent.includes(importLine)) {
    return indexContent;
  }

  let next = indexContent.slice(0, lastImportEnd) + '\n' + importLine + indexContent.slice(lastImportEnd);

  // Find the allGuides array and append the spread before the closing ];
  // Pattern: const allGuides: Guide[] = [...coreGuides, ...., ...guidesBatchXYZ];
  const arrRe = /(const allGuides: Guide\[\] = \[[^\]]*?)(\];)/s;
  if (!arrRe.test(next)) {
    throw new Error('Could not locate the allGuides array literal');
  }
  if (!next.includes(spreadToken)) {
    next = next.replace(arrRe, (full, before, end) => {
      const trimmed = before.replace(/,\s*$/, '');
      return `${trimmed}, ${spreadToken}${end}`;
    });
  }
  return next;
}

function run(cmd, opts = {}) {
  // Accept either a string ("git status") or an array (["git", "commit", "-m", "msg with spaces"])
  let bin, parts;
  if (Array.isArray(cmd)) {
    [bin, ...parts] = cmd;
  } else {
    [bin, ...parts] = cmd.split(' ');
  }
  const result = spawnSync(bin, parts, {
    cwd: ROOT,
    encoding: 'utf8',
    timeout: opts.timeout ?? 120_000,
    shell: false,
    stdio: 'pipe',
  });
  return {
    cmd: Array.isArray(cmd) ? cmd.join(' ') : cmd,
    ok: result.status === 0,
    status: result.status ?? 1,
    stdout: (result.stdout ?? '').trim(),
    stderr: (result.stderr ?? '').trim(),
  };
}

/** One cycle: pick topics, write batch, wire up, validate, commit, push */
function runCycle(state) {
  const cycleNumber = state.cycleCount + 1;
  log(`=== Cycle ${cycleNumber} ===`);

  const existingSlugs = collectExistingSlugs();
  const usedSet = new Set(state.usedTopicSlugs ?? []);

  // Pick the next N topics that aren't already used and don't conflict with existing slugs
  const picked = [];
  for (const t of CREATIVE_TOPICS) {
    if (picked.length >= TOPICS_PER_CYCLE) break;
    if (usedSet.has(t.slug)) continue;
    if (existingSlugs.has(t.slug)) {
      // Mark as used so we don't keep checking
      usedSet.add(t.slug);
      continue;
    }
    picked.push(t);
  }

  if (picked.length === 0) {
    log('No new topics available. Loop has caught up to the topic library.');
    log('Add more topics in scripts/creative-loop/topics.mjs to continue.');
    return { ok: true, noop: true, cycleNumber };
  }

  // Validate banned words
  for (const t of picked) {
    const allText = [t.title, t.excerpt, t.body, ...(t.steps || []).flatMap((s) => [s.title, s.content, s.tip || '', s.warning || ''])].join(' ');
    const banned = scanForBanned(allText);
    if (banned.length > 0) {
      log(`SKIP topic "${t.slug}": banned words detected:`, banned.join(', '));
      // Mark as used to skip permanently
      usedSet.add(t.slug);
      // Try to pick a replacement
      continue;
    }
  }
  const cleanPicked = picked.filter((t) => {
    const allText = [t.title, t.excerpt, t.body, ...(t.steps || []).flatMap((s) => [s.title, s.content, s.tip || '', s.warning || ''])].join(' ');
    return scanForBanned(allText).length === 0;
  });
  if (cleanPicked.length === 0) {
    log('All picked topics had banned words. Skipping cycle.');
    return { ok: true, noop: true, cycleNumber };
  }

  const batchNumber = nextBatchNumber();
  const batchPath = path.join(DATA_DIR, `guides-batch-${batchNumber}.ts`);
  const batchContent = renderBatchFile(batchNumber, cleanPicked);

  log(`Will write batch ${batchNumber} with ${cleanPicked.length} topic(s):`);
  for (const t of cleanPicked) log(`  - ${t.slug} :: ${t.title}`);

  if (DRY) {
    log('DRY RUN — not writing files');
    return { ok: true, dry: true, cycleNumber, batchNumber, picked: cleanPicked };
  }

  // Write the batch file
  fs.writeFileSync(batchPath, batchContent);
  log(`Wrote ${batchPath}`);

  // Wire it into guides.ts
  const indexContent = fs.readFileSync(GUIDES_INDEX, 'utf8');
  const updated = wireUpBatch(indexContent, batchNumber);
  fs.writeFileSync(GUIDES_INDEX, updated);
  log(`Updated ${GUIDES_INDEX}`);

  // Validate slugs (existing script — fails build on duplicates)
  const slugCheck = run('node scripts/validate-slugs.mjs');
  if (!slugCheck.ok) {
    log('Slug validation FAILED — rolling back batch');
    log(slugCheck.stdout);
    log(slugCheck.stderr);
    fs.unlinkSync(batchPath);
    fs.writeFileSync(GUIDES_INDEX, indexContent);
    return { ok: false, cycleNumber, error: 'slug-validation-failed' };
  }

  // Update used set
  for (const t of cleanPicked) usedSet.add(t.slug);

  // Commit
  const stage = run(['git', 'add', 'src/data/guides.ts', `src/data/guides-batch-${batchNumber}.ts`]);
  if (!stage.ok) {
    log('git add failed:', stage.stderr);
  }
  const titles = cleanPicked.map((t) => t.title).join(' + ');
  const msg = `feat(content): batch ${batchNumber} — ${titles}`;
  const commit = run(['git', 'commit', '-m', msg]);
  if (!commit.ok && !/nothing to commit/.test(commit.stdout + commit.stderr)) {
    log('git commit failed:', commit.stdout, commit.stderr);
  } else {
    log('Committed:', msg);
  }

  // Push (with retry)
  if (!NO_PUSH) {
    let pushed = false;
    for (const delay of [0, 2, 4, 8]) {
      if (delay > 0) {
        log(`Push retry after ${delay}s...`);
        spawnSync('sleep', [String(delay)]);
      }
      // Pull --rebase first to avoid rejection
      run(['git', 'pull', '--rebase', 'origin', 'main']);
      const push = run(['git', 'push', 'origin', 'main']);
      if (push.ok) {
        pushed = true;
        log('Pushed to origin/main');
        break;
      }
      log('Push failed:', push.stderr);
    }
    if (!pushed) log('Push failed after retries (continuing — local commit is still in place)');
  }

  return {
    ok: true,
    cycleNumber,
    batchNumber,
    picked: cleanPicked,
    usedSlugs: [...usedSet],
  };
}

function main() {
  log(`Starting creative-loop. cycles=${CYCLES} topics-per-cycle=${TOPICS_PER_CYCLE} dry=${DRY} no-push=${NO_PUSH}`);
  let state = readState();

  for (let i = 0; i < CYCLES; i++) {
    const result = runCycle(state);
    if (!result.ok) {
      log('Cycle failed; aborting.');
      process.exit(1);
    }
    if (result.noop) break;
    if (result.dry) {
      log('Dry run complete.');
      return;
    }

    state.cycleCount += 1;
    state.lastRun = new Date().toISOString();
    state.history = [
      {
        cycle: state.cycleCount,
        batchNumber: result.batchNumber,
        topics: result.picked.map((t) => ({ slug: t.slug, title: t.title })),
        timestamp: state.lastRun,
      },
      ...(state.history || []),
    ].slice(0, 50);
    state.usedTopicSlugs = result.usedSlugs;
    writeState(state);

    const today = new Date().toISOString().slice(0, 10);
    const logEntry = `## Cycle ${state.cycleCount} — ${today}\n\n` +
      `- Batch: \`guides-batch-${result.batchNumber}.ts\`\n` +
      result.picked.map((t) => `- ${t.title} (\`${t.slug}\`)\n`).join('') + `\n`;
    appendLog(logEntry);
  }

  log('Done.');
}

main();
