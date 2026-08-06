#!/usr/bin/env node
/**
 * Trim guide excerpts to 160 characters or fewer.
 *
 * Why: excerpt becomes the page's <meta name="description"> and the card blurb.
 * Search engines cut descriptions off around 155-160 characters, so a longer
 * excerpt gets truncated mid-sentence in the exact place most readers first
 * meet the page. The dev-loop has flagged ~283 of these for several cycles.
 *
 * How, in order of preference:
 *   1. Cut back to the last complete sentence that fits.
 *   2. Otherwise cut at a clause boundary (comma, dash, semicolon) and close
 *      with a period.
 *   3. Otherwise leave the excerpt alone and report it.
 * Facts are never rewritten - only trailing clauses are dropped - and step 3
 * means the script never emits a sentence fragment. Safe to run unattended.
 *
 *   node scripts/fix-long-excerpts.mjs            # report only
 *   node scripts/fix-long-excerpts.mjs --write    # apply
 */
import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const LIMIT = 160;
const DATA_DIR = new URL('../src/data/', import.meta.url).pathname;
const WRITE = process.argv.includes('--write');

// Matches the excerpt string in any quote style, including multi-line ones.
const EXCERPT_RE = /excerpt:\s*(['"`])((?:\\.|(?!\1)[\s\S])*)\1/g;

function shorten(raw) {
  // Collapse any hard-wrapped excerpt onto one line first.
  const text = raw.replace(/\s*\n\s*/g, ' ').trim();

  // 1. Last complete sentence that fits.
  const sentenceEnd = /[.!?](?=\s|$)/g;
  let best = -1;
  let m;
  while ((m = sentenceEnd.exec(text)) !== null) {
    const end = m.index + 1;
    if (text.slice(0, end).length <= LIMIT) best = end;
    else break;
  }
  if (best >= 80) return text.slice(0, best);

  // 2. Last clause boundary that fits, closed with a period.
  const clause = /[,;:]|\s[-–—]\s/g;
  let clauseCut = -1;
  while ((m = clause.exec(text)) !== null) {
    if (m.index <= LIMIT - 1) clauseCut = m.index;
    else break;
  }
  if (clauseCut >= 90) {
    const cut = text.slice(0, clauseCut).replace(/[\s,;:–—-]+$/, '').replace(/\\$/, '');
    if (cut.length >= 60) return cut + '.';
  }

  // 3. Give up rather than emit a fragment.
  return null;
}

const files = readdirSync(DATA_DIR).filter((f) => /^guides.*\.ts$/.test(f));
let total = 0;
let changed = 0;
let skipped = 0;
const examples = [];

for (const file of files) {
  const path = join(DATA_DIR, file);
  const original = readFileSync(path, 'utf8');

  const updated = original.replace(EXCERPT_RE, (whole, quote, body) => {
    if (body.length <= LIMIT) return whole;
    total++;
    const next = shorten(body);
    if (next === null || next.length > LIMIT || next === body) {
      skipped++;
      return whole;
    }
    changed++;
    if (examples.length < 5) {
      examples.push(file + '\n  before (' + body.length + '): ' + body.replace(/\s*\n\s*/g, ' ') + '\n  after  (' + next.length + '): ' + next);
    }
    return 'excerpt: ' + quote + next + quote;
  });

  if (updated !== original && WRITE) writeFileSync(path, updated);
}

console.log(files.length + ' guide data files scanned.');
console.log(total + ' excerpts over ' + LIMIT + ' characters: ' + changed + (WRITE ? ' trimmed' : ' would be trimmed') + ', ' + skipped + ' left alone (no clean cut point).');
if (examples.length) console.log('\nSamples:\n' + examples.join('\n'));
if (!WRITE && changed) console.log('\nRe-run with --write to apply.');
