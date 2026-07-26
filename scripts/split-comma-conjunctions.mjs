// Safely splits run-on sentences of the form "<independent clause>, but/and <subject> <verb>..."
// into two sentences: "<independent clause>. But/And <subject> <verb>..."
//
// This only fires when the clause after the comma clearly starts a new independent
// clause (a subject pronoun immediately after "and"/"but"), which is a strong signal
// it isn't just a compound predicate ("ate breakfast and left") or a list item
// ("milk, eggs, and bread"). Starting a sentence with "But"/"And" is fine in plain,
// accessible writing (and matches the conversational tone already used across this
// corpus) so we keep the conjunction rather than dropping it.
//
// Safety rules (mirrors split-semicolons.mjs):
//  - only operate inside body/content/tip/warning/excerpt string fields
//  - skip if the split point sits inside an unbalanced ( ), [ ], or " " span
//  - require both sides to be reasonably long (avoid chopping short lists/phrases)
//  - never fires more than once per matched span (regex is non-overlapping by construction)
//  - preserves lowercase-first brand names (iPhone, iPad, iOS, eBay, macOS, etc.)

import { readdirSync, readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const DATA = process.argv[3] || 'src/data';
const DRY = process.argv[2] !== '--apply';

const files = readdirSync(DATA).filter((f) => f.startsWith('guides') && f.endsWith('.ts'));

// Note: deliberately excludes this/that/these/those — they're too often determiners
// in a noun phrase ("...taxes, and those mysterious fees") rather than the subject
// of a new clause, and there's no cheap way to tell the two apart here.
const SUBJECTS = ['I', 'you', 'he', 'she', 'it', 'we', 'they', 'there'];
// Match ", but SUBJECT" or ", and SUBJECT" followed by a space and a lowercase word
// (the start of the predicate) — case-insensitive on the conjunction, subject list
// itself is case-sensitive-ish (we lowercase-compare).
const SPLIT_RE = new RegExp(
  ',\\s+(but|and|so)\\s+(' + SUBJECTS.join('|') + ')\\s+(?=[a-z])',
  'gi'
);

let totalCandidates = 0;
let totalSkippedUnbalanced = 0;
let totalSkippedShort = 0;
let totalApplied = 0;
const samples = [];

const lowerFirstBrandRe = /^(iphone|ipad|ipod|imac|ios|imessage|icloud|itunes|ebay|macos|watchos|tvos|ipados)\b/i;

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
    // Sentence-boundary split (same approach as split-semicolons.mjs) so we only
    // ever consider ONE match per sentence — a sentence with 2+ "but/and SUBJECT"
    // hits is unusual and safer to leave alone entirely.
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
      if (matches.length !== 1) {
        return sentence; // 0 matches: nothing to do. 2+ matches: too ambiguous, skip.
      }
      const m = matches[0];
      const idx = m.index;
      const conj = m[1];
      const subj = m[2];
      const matchEnd = idx + m[0].length;

      const left = sentence.slice(0, idx);
      const rest = sentence.slice(matchEnd); // predicate text after "SUBJECT "

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

      // Only the conjunction is sentence-initial after the split ("But it...",
      // "And you..."); the subject pronoun keeps its original case (it isn't the
      // first word of the new sentence). "I" is already uppercase by convention.
      const conjCap = conj.charAt(0).toUpperCase() + conj.slice(1).toLowerCase();

      totalCandidates++;
      if (DRY) {
        if (samples.length < 80) {
          samples.push({
            file,
            before: sentence.trim(),
            left: left.trim(),
            right: `${conjCap} ${subj} ${rest}`.trim(),
          });
        }
        return sentence;
      }
      changed = true;
      totalApplied++;
      return `${left}. ${conjCap} ${subj} ${rest}`;
    });

    return `${field}: ${quote}${newParts.join('')}${quote}`;
  });

  if (!DRY && changed) {
    writeFileSync(path, content);
  }
}

console.log('Candidates found:', totalCandidates);
console.log('Skipped (too short):', totalSkippedShort);
console.log('Skipped (unbalanced parens/brackets/quotes):', totalSkippedUnbalanced);
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
