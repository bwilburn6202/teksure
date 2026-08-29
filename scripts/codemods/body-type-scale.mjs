#!/usr/bin/env node
/**
 * Codemod 2 — raise body-copy type one step for the senior audience.
 *
 *   text-xs -> text-sm      (~13px -> ~15px at the 17px root)
 *   text-sm -> text-base    (~15px -> ~17px)
 *
 *   node scripts/codemods/body-type-scale.mjs                     # dry run
 *   node scripts/codemods/body-type-scale.mjs --only src/pages/tools
 *   node scripts/codemods/body-type-scale.mjs --apply
 *
 * Why: the generated tool pages set body copy at text-sm / text-xs almost
 * everywhere (~18,000 usages) for an audience that is mostly seniors.
 *
 * This is the risky codemod, so it is deliberately narrow. It only touches a
 * className on a text-bearing element (p, li, ul, ol, span, td, th, dd, dt,
 * blockquote, label) and it skips any class string that looks like chrome
 * rather than prose — see SKIP below. Chips, badges, buttons, tabs and icon
 * rows are sized to fit their container; bumping their type breaks layout,
 * and that is exactly what the SKIP list protects.
 *
 * Headings are never touched: they are already above body size, and raising
 * them compresses the size gap that signals hierarchy.
 */
import fs from 'node:fs';
import { walk, tokens, rewriteTokens, parseArgs, report } from './lib-codemod.mjs';

const TEXT_TAGS = /^(p|li|ul|ol|span|td|th|dd|dt|blockquote|label)$/;

/** Class strings that mean "this is chrome, not prose" — left alone. */
const SKIP = [
  /\bh-\d/,            // fixed-height control
  /\bw-\d/,            // fixed-width control
  /\brounded-full\b/,  // pill / chip / badge
  /\babsolute\b/,
  /\bfixed\b/,
  /\bsr-only\b/,
  /\buppercase\b/,     // eyebrow / label styling, sized deliberately
  /\btracking-wider?\b/,
  /\btruncate\b/,
  /\bline-clamp-/,
  /\bwhitespace-nowrap\b/,
];

const BUMP = { 'text-xs': 'text-sm', 'text-sm': 'text-base' };

function bumpToken(tok) {
  // Only bare or responsive-variant sizes; leave print:, group-*, peer-* alone.
  const i = tok.lastIndexOf(':');
  const variants = i === -1 ? '' : tok.slice(0, i + 1);
  const base = i === -1 ? tok : tok.slice(i + 1);
  if (variants && !/^(sm|md|lg|xl|2xl):$/.test(variants)) return tok;
  return BUMP[base] ? variants + BUMP[base] : tok;
}

const args = parseArgs(process.argv);
const root = args.only ?? 'src';

let files = 0;
let edits = 0;
let skipped = 0;
const samples = [];

for (const file of walk(root).slice(0, args.limit)) {
  // src/components/ui holds shadcn primitives whose sizes are contractual.
  if (file.includes('/components/ui/')) continue;

  const src = fs.readFileSync(file, 'utf8'); // in-line edits only; CRLF preserved
  let changed = 0;

  // Match an opening tag and the className inside it, so we know the element.
  const out = src.replace(
    /<([a-z]+)((?:\s+[^<>]*?)?)className=(?:"([^"]*)"|\{`([^`]*)`\})/g,
    (full, tag, mid, dq, tpl) => {
      if (!TEXT_TAGS.test(tag)) return full;
      const cls = dq ?? tpl;
      if (!tokens(cls).some((t) => BUMP[t.split(':').pop()])) return full;
      if (SKIP.some((re) => re.test(cls))) {
        skipped++;
        return full;
      }
      const next = rewriteTokens(cls, bumpToken);
      if (next === cls) return full;
      changed++;
      if (samples.length < 6) {
        samples.push({
          file,
          before: `<${tag} ... ${cls.replace(/\s+/g, ' ').slice(0, 80)}`,
          after: `<${tag} ... ${next.replace(/\s+/g, ' ').slice(0, 80)}`,
        });
      }
      return full.replace(cls, next);
    },
  );

  if (changed) {
    files++;
    edits += changed;
    if (args.apply) fs.writeFileSync(file, out);
  }
}

report({ name: 'body-type-scale', apply: args.apply, files, edits, samples });
console.log(`  ${skipped} class strings skipped by the chrome-vs-prose guard.\n`);
