/**
 * reapply-vocabulary-from-head.mjs — one-time recovery script.
 *
 * `git checkout -- src/data/` cannot run in this sandbox (the mount blocks
 * `unlink`, which checkout needs to replace a working-tree file), so a
 * normal "revert and redo" isn't available. This gets the same result a
 * different way: pull each file's content from HEAD via `git show` (read-
 * only, works fine), and overwrite the working copy with
 * `writeFileSync` (also fine — the FS only blocks unlink, not truncating
 * writes). HEAD at the time this runs is commit 69703d8, which already
 * has the manual grade-10 rewrites and dead-link fixes from earlier in
 * this session but predates the vocabulary-swap script — exactly the
 * right base to redo the swap from with the corrected dictionary.
 *
 *   node scripts/reapply-vocabulary-from-head.mjs --dry-run
 *   node scripts/reapply-vocabulary-from-head.mjs
 */
import { readdirSync, writeFileSync, readFileSync } from 'fs';
import { join, resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { execFileSync } from 'node:child_process';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const DATA = join(ROOT, 'src', 'data');
const DRY = process.argv.includes('--dry-run');

// Same dictionary as simplify-vocabulary.mjs, MINUS require/requires/
// requiring/required — removed after spot-checking found roughly a dozen
// broken sentences ("lets you need X", "reserve the right to need X",
// "it needs using the Google Play Protect...") where "require" was acting
// as an imposition verb or in a gerund-object construction that "need"
// cannot substitute for. Also minus attempt/purchase, excluded from the
// start for the same reason (noun-form ambiguity).
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
    const re = new RegExp(`\\b${word}\\b`, 'g');
    out = out.replace(re, () => {
      changed++;
      return replacement;
    });
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

const FIELD_RE = /\b(body|content|tip|warning):\s*(['"`])((?:\\.|(?!\2)[\s\S])*)\2/g;

let filesChanged = 0;
let totalReplacements = 0;
let filesProcessed = 0;

for (const file of readdirSync(DATA)) {
  if (!file.startsWith('guides') || !file.endsWith('.ts')) continue;
  const relPath = `src/data/${file}`;

  let headContent;
  try {
    headContent = execFileSync('git', ['show', `HEAD:${relPath}`], {
      cwd: ROOT,
      encoding: 'utf8',
      maxBuffer: 20 * 1024 * 1024,
    });
  } catch {
    continue; // file didn't exist at HEAD (shouldn't happen for guides*.ts)
  }
  filesProcessed++;

  let fileHadChange = false;
  const rewritten = headContent.replace(FIELD_RE, (full, field, quote, str) => {
    const { out, changed } = applyDictionary(str);
    if (changed === 0) return full;
    totalReplacements += changed;
    fileHadChange = true;
    return `${field}: ${quote}${out}${quote}`;
  });

  if (fileHadChange) {
    filesChanged++;
    if (!DRY) writeFileSync(join(DATA, file), rewritten);
  } else if (!DRY) {
    // Even files with no dictionary hits still need to be reset to HEAD in
    // case the buggy require->need pass touched them and nothing else did.
    writeFileSync(join(DATA, file), headContent);
  }
}

console.log(`[reapply-vocabulary-from-head] ${DRY ? 'DRY RUN — ' : ''}files processed: ${filesProcessed}`);
console.log(`[reapply-vocabulary-from-head] files with a safe word swap: ${filesChanged}`);
console.log(`[reapply-vocabulary-from-head] total word swaps: ${totalReplacements}`);
