/**
 * Remove placeholder videoUrl values from guide data.
 *
 * THE PROBLEM
 * 538 guides carry a videoUrl, but there are only 108 distinct YouTube IDs
 * between them. One ID — 4vQ4o9t5ND8 — is embedded in 249 guides spanning
 * seven unrelated categories: turning a PC on, health tech, social media, app
 * guides. No single video demonstrates all of that. These are placeholders
 * that shipped as if they were real per-guide walkthroughs.
 *
 * WHY IT MATTERS MORE THAN IT SOUNDS
 * The audience is people who are not confident with technology and who are
 * being invited to follow along with a video while reading the steps. Showing
 * them a video about something else is worse than showing none: they will
 * assume they have misunderstood, not that the site is wrong. It also emits
 * schema.org VideoObject markup claiming the page has a video of its subject,
 * which is a structured-data accuracy problem on top of the human one.
 *
 * THE THRESHOLD
 * Usage counts have a clean natural break — every ID is used either 5 times or
 * fewer, or 16 times or more, with nothing in between. Anything above 5 is one
 * of the six mass-duplicated placeholders. Small clusters are left alone
 * because a single genuine "Windows basics" video legitimately serving a few
 * Windows guides is plausible; a video serving 249 guides is not.
 *
 * WHAT THIS DOES NOT DO
 * It cannot tell which video *should* be on a guide — that needs someone to
 * watch them. Removing a wrong video is the safe half of the fix. videoUrl is
 * optional and GuideDetail treats it as a fallback, so guides simply stop
 * showing a video rather than breaking.
 *
 *   node scripts/strip-placeholder-videos.mjs            # dry run
 *   node scripts/strip-placeholder-videos.mjs --apply
 */
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { join, dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const DATA = join(ROOT, 'src', 'data');
const APPLY = process.argv.includes('--apply');
const MAX_LEGITIMATE_REUSE = 5;

const files = readdirSync(DATA).filter((f) => f.startsWith('guides') && f.endsWith('.ts'));

// Pass 1 — count how often each video ID appears across the whole corpus.
const counts = new Map();
for (const f of files) {
  const text = readFileSync(join(DATA, f), 'utf8');
  for (const m of text.matchAll(/videoUrl:\s*['"`][^'"`]*?\/embed\/([A-Za-z0-9_-]+)/g)) {
    counts.set(m[1], (counts.get(m[1]) || 0) + 1);
  }
}
const placeholders = new Set(
  [...counts.entries()].filter(([, n]) => n > MAX_LEGITIMATE_REUSE).map(([id]) => id)
);

console.log(`[videos] ${counts.size} distinct IDs across ${[...counts.values()].reduce((a, b) => a + b, 0)} guides`);
console.log(`[videos] ${placeholders.size} IDs exceed ${MAX_LEGITIMATE_REUSE} uses and are treated as placeholders:`);
for (const id of placeholders) console.log(`           ${String(counts.get(id)).padStart(4)} uses — ${id}`);

// Pass 2 — remove the placeholder videoUrl entries.
//
// Two shapes exist in this data and they need different handling:
//
//   a) videoUrl on its own line (the overwhelming majority) — drop the line.
//   b) a whole guide written as one long single-line object, with videoUrl
//      inline among the other fields — drop only that fragment.
//
// Case (b) is why the line pattern below is anchored with ^[ \t]* . Without
// the anchor it would match inside a single-line guide and delete the entire
// guide along with it. Nine guides in guides.ts are written that way, so this
// is not hypothetical.
let removedLines = 0;
let removedInline = 0;
let filesTouched = 0;

for (const f of files) {
  const path = join(DATA, f);
  const before = readFileSync(path, 'utf8');

  // (a) whole-line form
  let after = before.replace(
    /^[ \t]*videoUrl:\s*['"`][^'"`]*?\/embed\/([A-Za-z0-9_-]+)[^'"`]*['"`],?[ \t]*\r?\n/gm,
    (line, id) => {
      if (!placeholders.has(id)) return line;
      removedLines++;
      return '';
    }
  );

  // (b) inline form — strip just the field, leaving the rest of the object.
  after = after.replace(
    /videoUrl:\s*['"`][^'"`]*?\/embed\/([A-Za-z0-9_-]+)[^'"`]*['"`],\s*/g,
    (frag, id) => {
      if (!placeholders.has(id)) return frag;
      removedInline++;
      return '';
    }
  );

  if (after !== before) {
    filesTouched++;
    if (APPLY) writeFileSync(path, after);
  }
}
const removed = removedLines + removedInline;

console.log('');
console.log(`[videos] ${APPLY ? "Removed" : "Would remove"} ${removed} placeholder videoUrl entries (${removedLines} whole-line, ${removedInline} inline) across ${filesTouched} files.`);
console.log(`[videos] ${[...counts.entries()].filter(([, n]) => n <= MAX_LEGITIMATE_REUSE).reduce((a, [, n]) => a + n, 0)} guides keep their video.`);
if (!APPLY) console.log('[videos] Dry run — re-run with --apply to write.');
