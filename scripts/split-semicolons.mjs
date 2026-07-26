import { readdirSync, readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const DATA = process.argv[3] || 'src/data';
const DRY = process.argv[2] !== '--apply';

const files = readdirSync(DATA).filter(f => f.startsWith('guides') && f.endsWith('.ts'));

let totalCandidates = 0;
let totalSkippedList = 0;
let totalApplied = 0;
const samples = [];

for (const file of files) {
  const path = join(DATA, file);
  let content = readFileSync(path, 'utf8');
  let changed = false;

  // Only touch prose fields to avoid corrupting code/URLs/etc.
  const FIELD_RE = /\b(body|content|tip|warning|excerpt):\s*(['"`])((?:\\.|(?!\2)[\s\S])*)\2/g;

  content = content.replace(FIELD_RE, (whole, field, quote, text) => {
    // Split the field text into "sentences" on . ! ? followed by space/end,
    // but NOT on \n (literal backslash-n) or \\n escape sequences which we leave alone.
    // We operate directly on the text, finding each semicolon and checking its
    // enclosing sentence (bounded by . ! ? or start/end of field or \n).
    let result = '';
    let cursor = 0;
    // Find sentence boundaries: split on (period/!/?) followed by space, or on literal \n
    const boundaryRe = /(\\n|[.!?]\s+)/g;
    const parts = [];
    let last = 0;
    let bm;
    while ((bm = boundaryRe.exec(text))) {
      parts.push(text.slice(last, bm.index + bm[0].length));
      last = bm.index + bm[0].length;
    }
    parts.push(text.slice(last));

    const newParts = parts.map(sentence => {
      const semiCount = (sentence.match(/;/g) || []).length;
      if (semiCount !== 1) {
        if (semiCount > 1) totalSkippedList++;
        return sentence;
      }
      const idx = sentence.indexOf(';');
      let left = sentence.slice(0, idx);
      let right = sentence.slice(idx + 1);
      // right should start with a space then a word
      const rm = right.match(/^(\s*)([a-zA-Z])(.*)$/s);
      if (!rm) return sentence;
      const [, spaceBefore, firstLetter, rest] = rm;
      // Heuristics for a safe split:
      // - left side must have at least 4 words and look like it ends a clause (not "e.g." etc.)
      // - right side (after the semicolon) must have at least 4 words before its own boundary
      // - right side's first word, lowercased, must plausibly start a new sentence
      //   (skip if it's a coordinating conjunction fragment continuing a list, like "or", "and", "but",
      //   or a preposition-led list fragment starting a lowercase clause without a clear subject)
      const leftWords = left.trim().split(/\s+/).filter(Boolean);
      const restForCount = rest.replace(/\\n.*$/s, ''); // don't count past a literal \n
      const rightWords = restForCount.trim().split(/\s+/).filter(Boolean);
      if (leftWords.length < 4 || rightWords.length < 4) return sentence;

      // Safety: don't split inside an unbalanced parenthetical, bracket, or quote —
      // that would strand an open paren/bracket on one side of the new period.
      const opens = (s, ch) => (s.match(new RegExp('\\' + ch, 'g')) || []).length;
      if (opens(left, '(') !== opens(left, ')')) return sentence;
      if (opens(left, '[') !== opens(left, ']')) return sentence;
      const leftQuotes = (left.match(/"/g) || []).length;
      if (leftQuotes % 2 !== 0) return sentence;

      const firstWordLower = firstLetter.toLowerCase();
      const nextWordMatch = rest.match(/^[a-zA-Z]*/);
      const fullFirstWord = (firstLetter + (nextWordMatch ? nextWordMatch[0] : '')).toLowerCase();
      const skipStarters = new Set(['or','and','but','nor','nor','plus','which','who','whose','that','it','this','these','those','or,']);
      // If the right clause starts with a pronoun referring back with no clear new subject like "it" is
      // usually fine actually ("it" is a valid sentence subject). Only skip clear continuations:
      const badStarters = new Set(['or','and','but','nor','which','who','whose','plus']);
      if (badStarters.has(fullFirstWord)) return sentence;

      // Some brand/product names are conventionally lowercase-first (iPhone, iPad,
      // iOS, iMac, iCloud, iMessage, eBay, macOS, watchOS, tvOS, etc.) and are fine
      // to start a sentence as-is — do NOT force-capitalize those.
      const lowerFirstBrandRe = /^(iphone|ipad|ipod|imac|ios|imessage|icloud|itunes|ebay|macos|watchos|tvos|ipados)\b/i;
      const restLower = (firstLetter + rest).toLowerCase();
      const isLowerBrand = lowerFirstBrandRe.test(restLower) && firstLetter === firstLetter.toLowerCase();
      const newFirst = isLowerBrand ? firstLetter : firstLetter.toUpperCase();

      totalCandidates++;
      if (DRY) {
        if (samples.length < 60) {
          samples.push({ file, before: sentence.trim(), left: left.trim(), right: (newFirst + rest).trim() });
        }
        return sentence;
      }
      changed = true;
      totalApplied++;
      return left + '.' + spaceBefore + newFirst + rest;
    });

    return `${field}: ${quote}${newParts.join('')}${quote}`;
  });

  if (!DRY && changed) {
    writeFileSync(path, content);
  }
}

console.log('Candidates found:', totalCandidates);
console.log('Skipped (multi-semicolon / list-like):', totalSkippedList);
if (DRY) {
  console.log('\n--- Sample transformations (first 60) ---');
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
