#!/usr/bin/env node
/**
 * Codemod 1 — raw Tailwind palette classes  ->  TekSure semantic tokens.
 *
 *   node scripts/codemods/semantic-colors.mjs                # dry run, whole src
 *   node scripts/codemods/semantic-colors.mjs --only src/pages/tools
 *   node scripts/codemods/semantic-colors.mjs --limit 25     # first 25 files only
 *   node scripts/codemods/semantic-colors.mjs --apply
 *   node scripts/codemods/semantic-colors.mjs --unmapped     # what's left over
 *
 * Why: 17,626 class usages bypass the token system in src/index.css. Raw
 * palette classes are also the reason 107 files break in dark mode — they
 * hardcode a light wash with no dark: variant. The semantic tokens
 * (--warn-surface, --success-surface, --info-surface, --danger-surface) are
 * defined for BOTH themes, so once a class is mapped its dark: partner is
 * redundant and gets dropped.
 *
 * Deliberately NOT mapped: gradients (from-/via-/to-), decorative Origin
 * accents, and any shade combination not in the table below. Run --unmapped
 * to see what the table doesn't cover yet.
 */
import fs from 'node:fs';
import { walk, mapClassNames, tokens, rewriteTokens, parseArgs, report } from './lib-codemod.mjs';

const NEUTRAL = 'gray|slate|zinc|neutral|stone';

/** [regex on the bare class, replacement] — applied to the class minus variants. */
const RULES = [
  // neutrals -> foreground / muted / border
  [new RegExp(`^text-(?:${NEUTRAL})-(?:700|800|900|950)$`), 'text-foreground'],
  [new RegExp(`^text-(?:${NEUTRAL})-(?:300|400|500|600)$`), 'text-muted-foreground'],
  [new RegExp(`^bg-(?:${NEUTRAL})-(?:50|100)$`), 'bg-muted'],
  [new RegExp(`^border-(?:${NEUTRAL})-(?:100|200|300)$`), 'border-border'],

  // amber / yellow / orange -> warn
  [/^bg-(?:amber|yellow|orange)-(?:50|100)$/, 'bg-warn'],
  [/^text-(?:amber|yellow|orange)-(?:400|500|600|700|800|900)$/, 'text-warn-foreground'],
  [/^border-(?:amber|yellow|orange)-(?:200|300)$/, 'border-warn-foreground/25'],

  // green / emerald / teal -> success
  [/^bg-(?:green|emerald|teal)-(?:50|100)$/, 'bg-success'],
  [/^text-(?:green|emerald|teal)-(?:400|500|600|700|800|900)$/, 'text-success-foreground'],
  [/^border-(?:green|emerald|teal)-(?:200|300)$/, 'border-success-foreground/25'],

  // red / rose -> danger
  [/^bg-(?:red|rose)-(?:50|100)$/, 'bg-danger'],
  [/^text-(?:red|rose)-(?:400|500|600|700|800|900)$/, 'text-danger-foreground'],
  [/^border-(?:red|rose)-(?:200|300)$/, 'border-danger-foreground/25'],

  // blue / sky / cyan -> info
  [/^bg-(?:blue|sky|cyan)-(?:50|100)$/, 'bg-info'],
  [/^text-(?:blue|sky|cyan)-(?:400|500|600|700|800|900)$/, 'text-info-foreground'],
  [/^border-(?:blue|sky|cyan)-(?:200|300)$/, 'border-info-foreground/25'],

  // literal white/black surfaces -> themed equivalents
  [/^bg-white$/, 'bg-card'],
  [/^text-black$/, 'text-foreground'],

  // purple / violet / indigo -> brand primary
  [/^text-(?:purple|violet|indigo)-(?:400|500|600|700|800|900)$/, 'text-primary'],
  [/^bg-(?:purple|violet|indigo)-(?:50|100)$/, 'bg-primary/10'],
  [/^border-(?:purple|violet|indigo)-(?:200|300)$/, 'border-primary/25'],
];

// Trailing /40, /60 etc. are opacity modifiers — a dark:bg-blue-900/40 is
// still a raw-palette dark variant and must be recognised as one.
const ALL_FAMILIES = new RegExp(
  `^(?:bg|text|border)-(?:${NEUTRAL}|amber|yellow|orange|green|emerald|teal|red|rose|blue|sky|cyan|purple|violet|indigo)-\\d{2,3}(?:\\/\\d{1,3})?$`,
);

/** Strip variant prefixes (hover:, md:, group-hover:, print:, ...) off a token. */
function split(tok) {
  const i = tok.lastIndexOf(':');
  return i === -1 ? { variants: '', base: tok } : { variants: tok.slice(0, i + 1), base: tok.slice(i + 1) };
}

function baseMap(base) {
  for (const [re, to] of RULES) {
    if (re.test(base)) return to;
  }
  return null;
}

function property(base) {
  const m = /^(bg|text|border)-/.exec(base);
  return m ? m[1] : null;
}

/**
 * Two passes over one class string.
 *
 * Pass 1 records which CSS properties (bg / text / border) we actually mapped
 * to a semantic token. Pass 2 rewrites, and drops a `dark:` raw-palette token
 * ONLY for a property that pass 1 mapped — because the semantic token already
 * carries its own dark value, so the dark: partner is redundant.
 *
 * That condition matters. `bg-white dark:bg-gray-800` maps bg-white -> bg-card,
 * which is dark-correct, so dropping the partner is right. But if a class had
 * an unmapped light color with a dark: partner, dropping the partner alone
 * would silently break dark mode — so we leave both.
 */
function mapClass(cls) {
  const mappedProps = new Set();
  for (const tok of tokens(cls)) {
    const { variants, base } = split(tok);
    if (variants.includes('dark')) continue;
    if (baseMap(base)) {
      const p = property(base);
      if (p) mappedProps.add(p);
    }
  }

  return rewriteTokens(cls, (tok) => {
    const { variants, base } = split(tok);
    const isDark = variants.split(':').includes('dark');

    if (isDark && ALL_FAMILIES.test(base)) {
      const p = property(base.replace(/\/\d{1,3}$/, ''));
      return p && mappedProps.has(p) ? null : tok;
    }

    const to = baseMap(base);
    return to ? variants + to : tok;
  });
}

/** Single-token view, used only by the --unmapped report. */
function mapToken(tok) {
  const { variants, base } = split(tok);
  if (variants.split(':').includes('dark') && ALL_FAMILIES.test(base)) return null;
  const to = baseMap(base);
  return to ? variants + to : tok;
}

const args = parseArgs(process.argv);
const wantUnmapped = process.argv.includes('--unmapped');
const root = args.only ?? 'src';

let files = 0;
let edits = 0;
const samples = [];
const unmapped = new Map();

for (const file of walk(root).slice(0, args.limit)) {
  const src = fs.readFileSync(file, 'utf8'); // in-line edits only; CRLF preserved
  const { out, changed } = mapClassNames(src, (cls) => {
    // rewriteTokens keeps the original whitespace, so multi-line template
    // literals are not collapsed onto one line.
    const next = mapClass(cls);
    if (next !== cls && samples.length < 6) {
      samples.push({
        file,
        before: cls.replace(/\s+/g, ' ').slice(0, 100),
        after: next.replace(/\s+/g, ' ').slice(0, 100),
      });
    }
    return next;
  });

  if (wantUnmapped) {
    for (const m of src.matchAll(/className=(?:"([^"]*)"|\{`([^`]*)`\})/g)) {
      for (const t of tokens(m[1] ?? m[2])) {
        const { base } = split(t);
        if (ALL_FAMILIES.test(base) && mapToken(t) === t) {
          unmapped.set(base, (unmapped.get(base) ?? 0) + 1);
        }
      }
    }
  }

  if (changed) {
    files++;
    edits += changed;
    if (args.apply) fs.writeFileSync(file, out);
  }
}

if (wantUnmapped) {
  console.log('\n  Raw palette classes the mapping table does NOT cover:\n');
  for (const [cls, n] of [...unmapped].sort((a, b) => b[1] - a[1]).slice(0, 40)) {
    console.log(`    ${String(n).padStart(5)}  ${cls}`);
  }
  console.log(`\n  ${unmapped.size} distinct classes still unmapped.\n`);
} else {
  report({ name: 'semantic-colors', apply: args.apply, files, edits, samples });
}
