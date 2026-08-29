// Shared helpers for the universal-design codemods.
//
// IMPORTANT: several files in this repo use CRLF line endings. Every helper
// here does pure in-line string replacement and never splits/joins on "\n",
// so line endings survive untouched. Do not "simplify" this by reading with
// readFileSync(f, 'utf8').split('\n') — that silently reflows whole files.

import fs from 'node:fs';
import path from 'node:path';

export function walk(dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) {
      if (e.name === 'node_modules' || e.name.startsWith('.')) continue;
      walk(p, out);
    } else if (e.name.endsWith('.tsx')) {
      out.push(p);
    }
  }
  return out;
}

/** Run `fn` over every className="..." / className={`...`} string literal. */
export function mapClassNames(src, fn) {
  let changed = 0;
  const out = src.replace(
    /className=(?:"([^"]*)"|\{`([^`]*)`\}|\{"([^"]*)"\})/g,
    (full, dq, tpl, bq) => {
      const raw = dq ?? tpl ?? bq;
      const next = fn(raw, full);
      if (next === raw) return full;
      changed++;
      return full.replace(raw, next);
    },
  );
  return { out, changed };
}

/** Read-only token list (for reporting). Do not use this to rebuild a class string. */
export function tokens(cls) {
  return cls.split(/\s+/).filter(Boolean);
}

/**
 * Rewrite tokens in place, PRESERVING the original whitespace between them.
 * Class strings in this repo are often multi-line template literals; splitting
 * on whitespace and rejoining with " " reformats the source and produces a
 * needlessly enormous diff. `fn(token)` returns a replacement string, or null
 * to delete the token (its trailing whitespace goes with it).
 */
export function rewriteTokens(cls, fn) {
  return cls.replace(/(\S+)(\s*)/g, (full, tok, ws) => {
    const next = fn(tok);
    if (next === null) return '';
    return next + ws;
  });
}

export function parseArgs(argv) {
  return {
    apply: argv.includes('--apply'),
    limit: (() => {
      const i = argv.indexOf('--limit');
      return i === -1 ? Infinity : Number(argv[i + 1]);
    })(),
    only: (() => {
      const i = argv.indexOf('--only');
      return i === -1 ? null : argv[i + 1];
    })(),
  };
}

export function report({ name, apply, files, edits, samples }) {
  console.log('');
  console.log(`  ${name}`);
  console.log(`  ${'-'.repeat(name.length)}`);
  console.log(`  mode          ${apply ? 'APPLY (files written)' : 'DRY RUN (nothing written)'}`);
  console.log(`  files touched ${files}`);
  console.log(`  class strings ${edits}`);
  if (samples.length) {
    console.log('');
    console.log('  sample changes:');
    for (const s of samples) {
      console.log(`    ${s.file}`);
      console.log(`      - ${s.before}`);
      console.log(`      + ${s.after}`);
    }
  }
  if (!apply) {
    console.log('');
    console.log('  Re-run with --apply to write these changes.');
  }
  console.log('');
}
