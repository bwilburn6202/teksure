/**
 * simplify-vocabulary.mjs — safe, mechanical readability pass.
 *
 * 843 guides score above the grade-10 reading level (see
 * .claude/readability-backlog.md). Hand-rewriting all of them sentence by
 * sentence is the right long-term approach but cannot be finished
 * responsibly in one pass — every real rewrite needs a judgment call about
 * whether meaning survived.
 *
 * This script does the safe subset of that work automatically: whole-word
 * swaps from a fixed dictionary of formal, multi-syllable words to a plain
 * equivalent that means the same thing in every context tested (verb tense
 * and capitalization preserved). It does NOT restructure sentences, split
 * clauses, or reword anything beyond a single word — that bound is what
 * makes it safe to run unattended across thousands of guides.
 *
 * An earlier version of this script tried to slice out whole guide blocks
 * (slug...body...steps) with one big regex so it could target only guides
 * currently over grade 10. That regex was too fragile against a 4,000-guide
 * file with varying indentation and only matched 14 of 843 guides, and a
 * mis-slice on a stray match could have corrupted a file. This version
 * instead finds every individual `body:`, `content:`, `tip:`, and
 * `warning:` string literal — the same narrow, well-tested pattern already
 * used by scripts/audit-senior-ux.mjs and scripts/check-source-links.mjs —
 * and swaps words inside just that string. Because the swap is safe in any
 * context, it does not need to know which guide or field it is touching,
 * which removes the fragile part entirely.
 *
 *   node scripts/simplify-vocabulary.mjs --dry-run   # report only
 *   node scripts/simplify-vocabulary.mjs             # write changes
 */
import { readdirSync, readFileSync, writeFileSync } from 'fs';
import { join, resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const DATA = join(ROOT, 'src', 'data');
const DRY = process.argv.includes('--dry-run');

const DICTIONARY = {
  approximately: 'about',
  additionally: 'also',
  assistance: 'help',
  immediately: 'right away',
  numerous: 'many',
  obtain: 'get',
  obtains: 'gets',
  obtaining: 'getting',
  obtained: 'got',
  commence: 'start',
  commences: 'starts',
  commencing: 'starting',
  commenced: 'started',
  subsequently: 'later',
  therefore: 'so',
  nevertheless: 'still',
  furthermore: 'also',
  regarding: 'about',
  sufficient: 'enough',
  require: 'need',
  requires: 'needs',
  requiring: 'needing',
  required: 'needed',
  significantly: 'a lot',
  frequently: 'often',
  occasionally: 'sometimes',
  consequently: 'so',
  beneficial: 'helpful',
  facilitate: 'help',
  facilitates: 'helps',
  facilitated: 'helped',
  indicate: 'show',
  indicates: 'shows',
  indicated: 'showed',
  terminate: 'end',
  terminates: 'ends',
  terminated: 'ended',
  // "attempt" and "purchase" were removed from this dictionary: both are
  // used as nouns throughout the guides ("the purchase price", "an
  // attempt"), and swapping to "buy"/"try" breaks grammar in noun position
  // ("the buy price", "an try"). A word-boundary regex can't tell verb from
  // noun, so the safe choice is to leave both alone rather than risk it.
  utilize: 'use',
  utilizes: 'uses',
  utilized: 'used',
  utilizing: 'using',
  demonstrate: 'show',
  demonstrates: 'shows',
  demonstrated: 'showed',
  ensure: 'make sure',
  ensures: 'makes sure',
  ensured: 'made sure',
  ensuring: 'making sure',
};

function applyDictionary(text) {
  let changed = 0;
  let out = text;
  for (const [word, replacement] of Object.entries(DICTIONARY)) {
    const re = new RegExp(`\\b${word}\\b`, 'g'); // case-sensitive: body text is normal prose
    out = out.replace(re, () => {
      changed++;
      return replacement;
    });
    // Also handle a capitalized, sentence-initial form.
    const cap = word[0].toUpperCase() + word.slice(1);
    const capReplacement = replacement[0].toUpperCase() + replacement.slice(1);
    const reCap = new RegExp(`\\b${cap}\\b`, 'g');
    out = out.replace(reCap, () => {
      changed++;
      return capReplacement;
    });
  }
  return { out, changed };
}

// Matches `fieldName: 'string'` / "..." / `...` (including multi-line
// backtick bodies) for the four prose fields that hold guide text.
const FIELD_RE = /\b(body|content|tip|warning):\s*(['"`])((?:\\.|(?!\2)[\s\S])*)\2/g;

let filesChanged = 0;
let fieldsChanged = 0;
let totalReplacements = 0;

for (const file of readdirSync(DATA)) {
  if (!file.startsWith('guides') || !file.endsWith('.ts')) continue;
  const original = readFileSync(join(DATA, file), 'utf8');
  let fileHadChange = false;

  const rewritten = original.replace(FIELD_RE, (full, field, quote, str) => {
    const { out, changed } = applyDictionary(str);
    if (changed === 0) return full;
    fieldsChanged++;
    totalReplacements += changed;
    fileHadChange = true;
    return `${field}: ${quote}${out}${quote}`;
  });

  if (fileHadChange) {
    filesChanged++;
    if (!DRY) writeFileSync(join(DATA, file), rewritten);
  }
}

console.log(`[simplify-vocabulary] ${DRY ? 'DRY RUN — ' : ''}files touched: ${filesChanged}`);
console.log(`[simplify-vocabulary] fields touched: ${fieldsChanged}`);
console.log(`[simplify-vocabulary] total word swaps: ${totalReplacements}`);
