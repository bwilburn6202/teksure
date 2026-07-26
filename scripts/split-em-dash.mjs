// Safely splits "<independent clause> — <subject> <verb>..." into two sentences:
// "<independent clause>. <Subject> <verb>..." (capitalizing the subject, since here
// it IS the first word of the new sentence — unlike split-comma-conjunctions.mjs,
// there's no conjunction being inserted before it).
//
// Same safety rules as the other two splitters in this directory:
//  - only operate inside body/content/tip/warning/excerpt string fields
//  - require a subject pronoun (I/you/he/she/it/we/they/there) directly after the
//    em dash — a strong signal of a new independent clause, not an appositive or
//    aside ("the CEO — Jane Smith — said..." would never match this)
//  - deliberately excludes this/that/these/those (too often determiners in a noun
//    phrase, not the subject of a new clause)
//  - skip if the split point sits inside an unbalanced ( ), [ ], or " " span
//  - require both sides to be reasonably long (avoid chopping short labels/asides)
//  - preserves lowercase-first brand names (iPhone, iPad, iOS, eBay, macOS, etc.)
//    — not actually reachable here since the subject is always a pronoun, but kept
//    for consistency/defense in depth if the subject list is ever extended.

import { readdirSync, readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const DATA = process.argv[3] || 'src/data';
const DRY = process.argv[2] !== '--apply';

const files = readdirSync(DATA).filter((f) => f.startsWith('guides') && f.endsWith('.ts'));

const SUBJECTS = ['I', 'you', 'he', 'she', 'it', 'we', 'they', 'there'];
// Em dash in this codebase is a real "—" character (not "--"). Require a space on
// both sides, then the subject, then a lowercase word (the predicate).
const SPLIT_RE = new RegExp('\\s+—\\s+(' + SUBJECTS.join('|') + ')\\s+(?=[a-z])', 'g');

let totalCandidates = 0;
let totalSkippedShort = 0;
let totalSkippedUnbalanced = 0;
let totalApplied = 0;
const samples = [];

function balanced(s, openCh, closeCh) {
  const opens = (s.match(new RegExp('\\' + openCh, 'g')) || []).length;
  const closes = (s.match(new RegExp('\\' + closeCh, 'g')) || []).length;
  return opens === closes;
}

for (const file of files) {
  const path = join(DATA, file);
  let content = readFileSync(path, 'utf8');
  let changed = false;

  const FIELD_RE = /\b(body|content|tip|warning|excerpt):\s*(['"`])((?:\\.|(?!\2)[\s\S])*)\2/g;

  content = content.replace(FIELD_RE, (whole, field, quote, text) => {
    const boundaryRe = /(\\n|[.!?]\s+)/g;
    const parts = [];
    let last = 0;
    let bm;
    while ((bm = boundaryRe.exec(text))) {
      parts.push(text.slice(last, bm.index + bm[0].length));
      last = bm.index + bm[0].length;
    }
    parts.push(text.slice(last));

    const newParts = parts.map((sentence) => {
      const matches = [...sentence.matchAll(SPLIT_RE)];
      if (matches.length !== 1) return sentence; // 0: nothing to do. 2+: too ambiguous.

      const m = matches[0];
      const idx = m.index;
      const subj = m[1];
      const matchEnd = idx + m[0].length;

      const left = sentence.slice(0, idx);
      const rest = sentence.slice(matchEnd);

      const leftWords = left.trim().split(/\s+/).filter(Boolean);
      const restForCount = rest.replace(/\\n.*$/s, '');
      const rightWords = restForCount.trim().split(/\s+/).filter(Boolean);
      if (leftWords.length < 5 || rightWords.length < 4) {
        totalSkippedShort++;
        return sentence;
      }

      if (!balanced(left, '(', ')') || !balanced(left, '[', ']')) {
        totalSkippedUnbalanced++;
        return sentence;
      }
      const leftQuotes = (left.match(/"/g) || []).length;
      if (leftQuotes % 2 !== 0) {
        totalSkippedUnbalanced++;
        return sentence;
      }
      // If there's a SECOND em dash still inside `left`, this was likely a pair of
      // em dashes bracketing an aside ("X — an aside — Y") rather than a genuine
      // clause boundary. Skip those; too easy to mis-split.
      const leftDashes = (left.match(/—/g) || []).length;
      if (leftDashes % 2 !== 0) {
        totalSkippedUnbalanced++;
        return sentence;
      }

      const newSubj = subj.charAt(0).toUpperCase() + subj.slice(1);

      totalCandidates++;
      if (DRY) {
        if (samples.length < 80) {
          samples.push({ file, before: sentence.trim(), left: left.trim(), right: `${newSubj} ${rest}`.trim() });
        }
        return sentence;
      }
      changed = true;
      totalApplied++;
      return `${left}. ${newSubj} ${rest}`;
    });

    return `${field}: ${quote}${newParts.join('')}${quote}`;
  });

  if (!DRY && changed) {
    writeFileSync(path, content);
  }
}

console.log('Candidates found:', totalCandidates);
console.log('Skipped (too short):', totalSkippedShort);
console.log('Skipped (unbalanced parens/brackets/quotes/dashes):', totalSkippedUnbalanced);
if (DRY) {
  console.log(`\n--- Sample transformations (first ${samples.length}) ---`);
  for (const s of samples) {
    console.log(`[${s.file}]`);
    console.log('  BEFORE:', s.before);
    console.log('  LEFT :', s.left);
    console.log('  RIGHT:', s.right);
    console.log('');
  }
} else {
  console.log('Applied:', totalApplied);
}
