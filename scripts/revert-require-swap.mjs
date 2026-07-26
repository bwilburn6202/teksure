/**
 * revert-require-swap.mjs — one-time surgical revert.
 *
 * simplify-vocabulary.mjs swapped require/requires/requiring/required to
 * need/needs/needing/needed everywhere in guide prose. Spot-checking found
 * this specific pair was unsafe in ways the other ~30 dictionary entries are
 * not: "require" doubles as an imposition verb ("lets you require X",
 * "reserve the right to require X") that "need" cannot substitute for
 * ("lets you need X" is not English), and "requires doing X" -> "needs
 * doing X" turns into the broken "needs using X" gerund construction.
 * Roughly a dozen breaks were found by hand; there is no confidence the
 * rest of the ~400 swaps are clean, so this reverts all of them rather than
 * hunting each one individually.
 *
 * This only reverses require<->need swaps. It does not touch any of the
 * other simplify-vocabulary.mjs word pairs (approximately->about,
 * obtain->get, purchase, etc.), which do not have this dual-sense problem
 * and were not implicated by the failing test or the manual spot-check.
 *
 *   node scripts/revert-require-swap.mjs --dry-run
 *   node scripts/revert-require-swap.mjs
 */
import { readdirSync, readFileSync, writeFileSync } from 'fs';
import { join, resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const DATA = join(ROOT, 'src', 'data');
const DRY = process.argv.includes('--dry-run');

// need -> require (reverse of the original swap). Order matters: longest
// first so "needed" doesn't get partially matched by "need".
const REVERSE = [
  ['needing', 'requiring'],
  ['needed', 'required'],
  ['needs', 'requires'],
  ['need', 'require'],
];

function revert(text) {
  let out = text;
  let changed = 0;
  for (const [from, to] of REVERSE) {
    const re = new RegExp(`\\b${from}\\b`, 'g');
    out = out.replace(re, () => {
      changed++;
      return to;
    });
    const cap = from[0].toUpperCase() + from.slice(1);
    const capTo = to[0].toUpperCase() + to.slice(1);
    const reCap = new RegExp(`\\b${cap}\\b`, 'g');
    out = out.replace(reCap, () => {
      changed++;
      return capTo;
    });
  }
  return { out, changed };
}

const FIELD_RE = /\b(body|content|tip|warning):\s*(['"`])((?:\\.|(?!\2)[\s\S])*)\2/g;

let filesChanged = 0;
let totalReplacements = 0;

for (const file of readdirSync(DATA)) {
  if (!file.startsWith('guides') || !file.endsWith('.ts')) continue;
  const original = readFileSync(join(DATA, file), 'utf8');
  let fileHadChange = false;

  const rewritten = original.replace(FIELD_RE, (full, field, quote, str) => {
    const { out, changed } = revert(str);
    if (changed === 0) return full;
    totalReplacements += changed;
    fileHadChange = true;
    return `${field}: ${quote}${out}${quote}`;
  });

  if (fileHadChange) {
    filesChanged++;
    if (!DRY) writeFileSync(join(DATA, file), rewritten);
  }
}

console.log(`[revert-require-swap] ${DRY ? 'DRY RUN — ' : ''}files touched: ${filesChanged}`);
console.log(`[revert-require-swap] total word reversions: ${totalReplacements}`);
