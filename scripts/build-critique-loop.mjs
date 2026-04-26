#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';

const args = new Map(
  process.argv.slice(2).map((arg) => {
    const [k, v] = arg.includes('=') ? arg.split('=') : [arg, 'true'];
    return [k.replace(/^--/, ''), v];
  }),
);

const root = process.cwd();
const intervalSec = Number(args.get('interval') ?? 180);
const maxCycles = Number(args.get('max-cycles') ?? Number.POSITIVE_INFINITY);
const checks = (args.get('checks') ?? 'quick').toLowerCase(); // none | quick | full
const outFile = path.resolve(root, args.get('out') ?? 'docs/BUILD_CRITIQUE_LOOP_LOG.md');

function read(file) {
  try {
    return fs.readFileSync(path.resolve(root, file), 'utf8');
  } catch {
    return '';
  }
}

function run(cmd) {
  const [bin, ...parts] = cmd.split(' ');
  const result = spawnSync(bin, parts, {
    cwd: root,
    encoding: 'utf8',
    timeout: 120_000,
    shell: process.platform === 'win32',
  });

  return {
    cmd,
    ok: result.status === 0,
    status: result.status ?? 1,
    output: `${result.stdout ?? ''}${result.stderr ?? ''}`.trim().slice(0, 3000),
  };
}

function getMetrics() {
  const app = read('src/App.tsx');
  const toolsPage = read('src/pages/Tools.tsx');
  const design = read('DESIGN.md');

  const routeCount = (app.match(/<Route\s+path=/g) ?? []).length;
  const lazyCount = (app.match(/lazy\(\(\) => import/g) ?? []).length;
  const toolsCount = (toolsPage.match(/\n\s*title:\s*['"]/g) ?? []).length;
  const hasDesignSpec = /# TekSure — Design System/.test(design);

  return { routeCount, lazyCount, toolsCount, hasDesignSpec };
}

function getCritique(metrics, checkResults) {
  const items = [];

  if (metrics.routeCount > 220) {
    items.push('Route table is very large. Split routes by domain (tools/community/account/admin) and compose in App.tsx.');
  }

  if (metrics.lazyCount > 200) {
    items.push('Lazy imports are highly centralized. Move to route manifest files to reduce merge conflicts and improve ownership.');
  }

  if (metrics.toolsCount > 120) {
    items.push('Tools catalog is large. Separate tool data from rendering and validate with a schema in CI.');
  }

  if (metrics.hasDesignSpec) {
    items.push('Run a design drift pass: pick 10 pages and compare tokens/components against DESIGN.md to reduce style fragmentation.');
  }

  for (const result of checkResults) {
    if (!result.ok) {
      items.push(`Quality gate failing: \`${result.cmd}\` exited with status ${result.status}. Fix top recurring errors first.`);
    }
  }

  if (items.length === 0) {
    items.push('No major static red flags found in this cycle. Focus on UX polish and performance budgets.');
  }

  return items;
}

function getIdeas(metrics, cycle) {
  const pool = [
    'Add a weekly "Tech Confidence" journey card that recommends exactly 1 guide + 1 tool + 1 practice simulation.',
    'Add a "What changed since last visit" panel using localStorage + changelog snippets.',
    'Create a scenario mode: "I got a suspicious call" that branches to 3 guided actions.',
    'Launch a "Caregiver handoff" page that exports emergency + account + device info as a printable packet.',
    'Add an "Explain this screen" upload helper (privacy-first local redaction before submit).',
    'Add "2-minute wins" category in Tools for immediate confidence boosts.',
    'Introduce a readability toggle that simplifies dense screens to one-column step cards.',
    'Create post-completion nudges: "Next best step" after each tool completion.',
    'Add a trust layer: show last-reviewed date and reviewer role on all high-risk guidance.',
    'Add a community-backed "worked for me" snippet under guides with moderation.',
  ];

  const start = cycle % pool.length;
  const count = metrics.toolsCount > 150 ? 4 : 3;
  return Array.from({ length: count }, (_, i) => pool[(start + i) % pool.length]);
}

function runChecks(mode) {
  if (mode === 'none') return [];
  if (mode === 'quick') {
    return [run('npm run -s lint'), run('npm run -s test')];
  }
  return [run('npm run -s lint'), run('npm run -s test'), run('npm run -s build')];
}

function appendLog(block) {
  const dir = path.dirname(outFile);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

  if (!fs.existsSync(outFile)) {
    fs.writeFileSync(outFile, '# Build & Critique Loop Log\n\n');
  }

  fs.appendFileSync(outFile, `${block}\n\n`);
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function main() {
  console.log('🔁 TekSure Build & Critique Loop started');
  console.log(`   interval=${intervalSec}s checks=${checks} out=${path.relative(root, outFile)}`);

  let cycle = 0;
  while (cycle < maxCycles) {
    cycle += 1;
    const stamp = new Date().toISOString();

    const metrics = getMetrics();
    const checkResults = runChecks(checks);
    const critique = getCritique(metrics, checkResults);
    const ideas = getIdeas(metrics, cycle);

    const lines = [
      `## Cycle ${cycle} — ${stamp}`,
      '',
      '### Snapshot',
      `- Routes in App.tsx: **${metrics.routeCount}**`,
      `- Lazy imports in App.tsx: **${metrics.lazyCount}**`,
      `- Tool cards detected: **${metrics.toolsCount}**`,
      `- Checks mode: **${checks}**`,
      '',
      '### Critique',
      ...critique.map((item) => `- ${item}`),
      '',
      '### Fresh Ideas',
      ...ideas.map((idea) => `- ${idea}`),
      '',
      '### Command Results',
      ...(checkResults.length
        ? checkResults.map((r) => `- ${r.ok ? '✅' : '❌'} \`${r.cmd}\``)
        : ['- (No checks this cycle)']),
    ];

    const block = lines.join('\n');
    appendLog(block);
    console.log(`\n${block}\n`);

    for (const result of checkResults) {
      if (!result.ok && result.output) {
        console.log(`--- ${result.cmd} (trimmed output) ---\n${result.output}\n`);
      }
    }

    if (cycle < maxCycles) {
      await sleep(intervalSec * 1000);
    }
  }

  console.log('✅ Loop finished.');
}

main().catch((err) => {
  console.error('Loop failed:', err);
  process.exit(1);
});
