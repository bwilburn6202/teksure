/**
 * Brand voice: remove *minimizing* uses of "just" from guide copy.
 *
 * CLAUDE.md bans "just" because it minimizes difficulty ("just tap Settings")
 * and makes a reader who is stuck feel worse. It does NOT ban the ordinary
 * English senses — "just in case", "just like", "just one", "just below" —
 * which carry real meaning and read naturally.
 *
 * This script only strips "just" when it directly precedes an instruction verb,
 * which is exactly the minimizing pattern. Everything else is left alone.
 *
 *   "Just tap Settings."      → "Tap Settings."
 *   "you just need to tap"    → "you need to tap"
 *   "keep a copy just in case" → unchanged
 */
import { readdirSync, readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const DIR = new URL('../src/data/', import.meta.url).pathname;

// Instruction verbs that follow a minimizing "just".
const VERBS = [
  'tap', 'taps', 'click', 'clicks', 'press', 'presses', 'open', 'opens',
  'go', 'goes', 'type', 'types', 'select', 'selects', 'choose', 'chooses',
  'say', 'says', 'ask', 'asks', 'call', 'calls', 'visit', 'visits',
  'head', 'look', 'looks', 'turn', 'turns', 'plug', 'plugs', 'hold', 'holds',
  'swipe', 'swipes', 'drag', 'drags', 'scroll', 'scrolls', 'enter', 'enters',
  'download', 'downloads', 'install', 'installs', 'follow', 'follows',
  'check', 'checks', 'use', 'uses', 'set', 'sets', 'add', 'adds',
  'need', 'needs', 'want', 'wants', 'leave', 'leaves', 'wait', 'waits',
  'keep', 'keeps', 'make', 'makes', 'take', 'takes', 'sign', 'signs',
  'answer', 'answers', 'delete', 'deletes', 'restart', 'restarts',
  'unplug', 'unplugs', 'repeat', 'repeats', 'copy', 'paste', 'save', 'saves',
];
const VERB_RE = VERBS.join('|');

let filesChanged = 0;
let replacements = 0;

for (const f of readdirSync(DIR)) {
  if (!f.startsWith('guides') || !f.endsWith('.ts')) continue;
  const path = join(DIR, f);
  const before = readFileSync(path, 'utf8');
  let after = before;

  // Sentence-initial: "Just tap X" → "Tap X"  (also after \n, ", or `)
  after = after.replace(
    new RegExp(`(^|[.!?]\\s|\\\\n|["\`']\\s*)Just (${VERB_RE})\\b`, 'g'),
    (_m, lead, verb) => `${lead}${verb.charAt(0).toUpperCase()}${verb.slice(1)}`
  );
  // Mid-sentence: "you just need to" → "you need to"
  after = after.replace(new RegExp(`\\bjust (${VERB_RE})\\b`, 'g'), '$1');

  if (after !== before) {
    const n = (before.match(/\bjust\b/gi) || []).length - (after.match(/\bjust\b/gi) || []).length;
    replacements += n;
    filesChanged++;
    writeFileSync(path, after);
  }
}

console.log(`[fix-minimizing-just] removed ${replacements} minimizing "just" from ${filesChanged} files`);
