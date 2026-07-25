/**
 * Brand voice: remove "it's easy / it is easy" claims from guide copy.
 *
 * CLAUDE.md bans "It's easy" — telling a reader who is stuck that the thing
 * they cannot do is easy is the fastest way to make them feel worse.
 *
 * Two shapes appear in the content and they need different rewrites:
 *   1. Claiming a TASK is easy   → "it's easy to find X"    → "you can find X"
 *   2. Normalising a MISTAKE     → "it's easy to forget X"  → "it is common to forget X"
 * The second is empathetic rather than dismissive, so it keeps its meaning
 * instead of being reworded into an instruction.
 */
import { readdirSync, readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const DIR = new URL('../src/data/', import.meta.url).pathname;

// Verbs where "easy to X" is normalising a slip, not promising an easy task.
const MISTAKE_VERBS = ['forget', 'assume', 'miss', 'overlook', 'lose', 'confuse', 'end'];

let changed = 0;
let total = 0;

for (const f of readdirSync(DIR)) {
  if (!f.startsWith('guides') || !f.endsWith('.ts')) continue;
  const path = join(DIR, f);
  const before = readFileSync(path, 'utf8');
  let after = before;

  // Mistake-normalising sense → "it is common to forget"
  after = after.replace(
    new RegExp(`\\b([Ii])t(?:'|’)?s easy to (${MISTAKE_VERBS.join('|')})\\b`, 'g'),
    (_m, i, verb) => `${i === 'I' ? 'I' : 'i'}t is common to ${verb}`
  );
  after = after.replace(
    new RegExp(`\\b([Ii])t is easy to (${MISTAKE_VERBS.join('|')})\\b`, 'g'),
    (_m, i, verb) => `${i === 'I' ? 'I' : 'i'}t is common to ${verb}`
  );

  // Task sense → "you can <verb>"
  after = after.replace(/\b([Ii])t(?:'|’)?s easy to ([a-z]+)\b/g,
    (_m, i, verb) => `${i === 'I' ? 'Y' : 'y'}ou can ${verb}`);
  after = after.replace(/\b([Ii])t is easy to ([a-z]+)\b/g,
    (_m, i, verb) => `${i === 'I' ? 'Y' : 'y'}ou can ${verb}`);

  // "it's easy for X to happen" → "X can easily happen" reads worse; normalise.
  after = after.replace(/\b([Ii])t(?:'|’)?s easy for\b/g,
    (_m, i) => `${i === 'I' ? 'I' : 'i'}t is common for`);
  after = after.replace(/\b([Ii])t is easy for\b/g,
    (_m, i) => `${i === 'I' ? 'I' : 'i'}t is common for`);

  if (after !== before) {
    const n = (before.match(/it.{0,2}s easy|it is easy/gi) || []).length;
    total += n;
    changed++;
    writeFileSync(path, after);
  }
}

console.log(`[fix-its-easy] rewrote ${total} "it's easy" claims across ${changed} files`);
