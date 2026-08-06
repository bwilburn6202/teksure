/**
 * audit-senior-ux.mjs — measure how well the site serves its actual audience.
 *
 * TekSure is written for people who find technology frustrating, most of them
 * over 60. That audience has specific, measurable needs:
 *
 *   - Text they can read without leaning in       → font-size floors
 *   - Buttons they can hit with an unsteady hand  → 44x44px minimum (WCAG 2.5.5)
 *   - Language they can follow                    → ~grade 8 reading level
 *   - Images that mean something to a screen reader → alt text
 *
 * Opinions about these are cheap; this script counts them. Run it before and
 * after a UX change to see whether the change actually helped.
 *
 *   node scripts/audit-senior-ux.mjs            # summary
 *   node scripts/audit-senior-ux.mjs --verbose  # list offending files
 *   node scripts/audit-senior-ux.mjs --json     # machine-readable (dev-loop)
 */
import { readdirSync, readFileSync, statSync } from 'fs';
import { dirname, join, relative, resolve } from 'path';
import { fileURLToPath } from 'url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const SRC = join(ROOT, 'src');
const VERBOSE = process.argv.includes('--verbose');
const JSON_OUT = process.argv.includes('--json');

function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    const s = statSync(p);
    if (s.isDirectory()) walk(p, out);
    else if (/\.(tsx|jsx)$/.test(p) && !/\.(test|spec)\./.test(p)) out.push(p);
  }
  return out;
}

const files = walk(join(SRC, 'pages')).concat(walk(join(SRC, 'components')));

// ── 1. Type that is too small for the audience ───────────────────
// text-xs is 12px. For a 70-year-old that is a squint at arm's length.
// We allow it in deliberately secondary chrome (badges, captions) but flag
// heavy use inside page bodies.
const tinyText = [];
// ── 2. Tap targets below the 44px WCAG minimum ───────────────────
// h-8 = 32px, h-9 = 36px. Fine for a mouse, poor for an unsteady finger.
const smallTargets = [];
// ── 3. Images with no alt attribute ──────────────────────────────
const missingAlt = [];
// ── 4. Click handlers on non-interactive elements (keyboard traps) ─
const divClicks = [];

for (const f of files) {
  const text = readFileSync(f, 'utf8');
  const rel = relative(ROOT, f);

  const xs = (text.match(/\btext-xs\b/g) || []).length;
  if (xs > 0) tinyText.push({ file: rel, count: xs });

  // Tap targets under 44px. The size class has to be on the interactive element
  // itself — an earlier version looked 200 characters backwards for the word
  // "button", which flagged decorative aria-hidden icons that merely sat near one.
  // Both files it reported on 2026-08-06 were `<Search className="h-8 w-8" />`
  // placeholder glyphs, not controls.
  let small = 0;
  for (const tag of text.match(/<(?:button|a|Button)\b[^>]{0,600}?>/gs) || []) {
    if (/aria-hidden=\{?["']?true/.test(tag)) continue;
    if (/\b(?:h-8|h-9|min-h-8|min-h-9)\b/.test(tag)) small++;
  }
  for (const tag of text.match(/<[A-Za-z][^>]{0,600}?role=["']button["'][^>]{0,600}?>/gs) || []) {
    if (/\b(?:h-8|h-9|min-h-8|min-h-9)\b/.test(tag)) small++;
  }
  if (small > 0) smallTargets.push({ file: rel, count: small });

  for (const img of text.match(/<img\b[^>]*>/g) || []) {
    if (!/\balt=/.test(img)) missingAlt.push({ file: rel, snippet: img.slice(0, 70) });
  }

  // A <div onClick> is only an accessibility problem when a keyboard user
  // cannot reach it. Backdrop-dismiss overlays and elements that already carry
  // role + tabIndex/onKeyDown are fine; flagging those trains people to ignore
  // this audit.
  //
  // NOTE: do not try to match "the whole tag" with a lazy [\s\S]*?> — an arrow
  // function inside a prop (`onClick={() => …}`) contains a ">" and the match
  // stops there, hiding the role/tabIndex that follow. Scan a window instead.
  let idx = text.indexOf('<div');
  while (idx !== -1) {
    // Find where this tag actually ends. A ">" inside {...} belongs to an arrow
    // function, not the tag, so only a ">" at brace depth 0 closes it. Without
    // this the scan either stops early (missing role/tabIndex that follow) or
    // runs past the tag and picks up a child element's onClick.
    let depth = 0;
    let end = -1;
    for (let i = idx; i < Math.min(text.length, idx + 4000); i++) {
      const ch = text[i];
      if (ch === '{') depth++;
      else if (ch === '}') depth--;
      else if (ch === '>' && depth === 0) { end = i; break; }
    }
    const tag = end === -1 ? '' : text.slice(idx, end + 1);
    if (tag && /\sonClick=/.test(tag)) {
      // A div with onClick is only a keyboard problem when the click is the ONLY
      // way to trigger something. Three patterns are not problems, and counting
      // them made this number meaningless — on 2026-08-06 all 7 flagged files
      // turned out to be one of these, including a lightbox that already handles
      // Escape and ships a 44px labelled close button.
      //
      //   1. The handler only calls stopPropagation, i.e. it shields content from
      //      a parent's click-away. It triggers nothing, so there is nothing to
      //      reach by keyboard.
      //   2. The element is aria-hidden, i.e. a decorative backdrop. Assistive
      //      tech never sees it; the real control is elsewhere.
      //   3. It is a click-away dismissal on an overlay in a file that also
      //      handles the Escape key. Escape IS the keyboard equivalent of
      //      clicking the backdrop.
      const shieldOnly = /onClick=\{\s*(?:\(?\s*e\s*\)?|event)\s*=>\s*e(?:vent)?\.stopPropagation\(\)\s*\}/.test(tag);
      const decorative = /aria-hidden=\{?["']?true/.test(tag);
      const fileHandlesEscape = /['"`]Escape['"`]/.test(text);
      const isOverlay = /role=["']dialog["']/.test(tag) || /\bfixed\b[^"']*\binset-0\b/.test(tag) || /position:\s*['"]fixed['"]/.test(tag);
      const dismissable = fileHandlesEscape && isOverlay;

      const accessible =
        (/\brole=/.test(tag) && (/\btabIndex=/.test(tag) || /\bonKeyDown=/.test(tag))) ||
        shieldOnly ||
        decorative ||
        dismissable;
      if (!accessible) {
        divClicks.push({
          file: rel,
          count: 1,
          snippet: tag.replace(/\s+/g, ' ').slice(0, 100),
        });
      }
    }
    idx = text.indexOf('<div', idx + 4);
  }
}

// ── 5. Reading level of the guide content ────────────────────────
// Flesch–Kincaid grade level. Target for this audience: 8 or below.
function syllables(word) {
  word = word.toLowerCase().replace(/[^a-z]/g, '');
  if (word.length <= 3) return 1;
  word = word.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '').replace(/^y/, '');
  return (word.match(/[aeiouy]{1,2}/g) || []).length || 1;
}

function fleschKincaid(text) {
  const sentences = (text.match(/[.!?]+/g) || []).length || 1;
  const words = text.split(/\s+/).filter(Boolean);
  if (words.length < 20) return null;
  const sylls = words.reduce((n, w) => n + syllables(w), 0);
  return 0.39 * (words.length / sentences) + 11.8 * (sylls / words.length) - 15.59;
}

const DATA = join(SRC, 'data');
const grades = [];
const hardGuides = [];
// Flesch–Kincaid's syllable heuristic is English-specific (it counts vowel
// clusters using an a-e-i-o-u-y alphabet and assumes English morphology for
// its "silent e" trimming). Spanish words average more syllables per word
// than English ones, and accented vowels (á é í ó ú ñ ü) get stripped by the
// [^a-z] cleanup in syllables() before counting even starts. Both effects
// push Spanish text to absurd grade levels regardless of how simple it
// actually reads — every guide in guides-spanish.ts scored grade 12-15 here,
// which manually reading several of them confirmed is not real: they are
// short, plain sentences a beginner reads fine. Scoring them with an
// English-only formula and averaging the (meaningless) result into the
// site-wide numbers actively misleads whoever reads this report, so they are
// scored and reported separately instead of being silently included above.
let esGuidesScored = 0;
let esGradeSum = 0;
for (const file of readdirSync(DATA)) {
  if (!file.startsWith('guides') || !file.endsWith('.ts')) continue;
  const text = readFileSync(join(DATA, file), 'utf8');
  const re = /slug:\s*(['"`])([^'"`]+)\1[\s\S]{0,3000}?body:\s*([`'"])((?:\\.|(?!\3)[\s\S])*)\3/g;
  let m;
  while ((m = re.exec(text)) !== null) {
    const slug = m[2];
    // Line breaks (esp. bullet list items) don't carry sentence punctuation,
    // which used to make the FK formula treat a whole bulleted list as one
    // giant run-on sentence and report absurd grades (30+) for guides that
    // are actually easy to scan. Treat a line break as a sentence boundary.
    // Bodies are backtick template literals, so line breaks are real \n
    // bytes in the source, not the two-character escape "\n" — both are
    // handled here since some batches also use escaped strings.
    const body = m[4]
      .replace(/\\n/g, '. ')
      .replace(/\r?\n+/g, '. ')
      .replace(/[*_#>`:-]/g, ' ')
      .replace(/\.\s*\./g, '.')
      .replace(/\s+/g, ' ');
    const g = fleschKincaid(body);
    if (g === null) continue;
    if (slug.startsWith('es-')) {
      esGuidesScored += 1;
      esGradeSum += g;
      continue;
    }
    grades.push(g);
    if (g > 10) hardGuides.push({ slug, grade: Number(g.toFixed(1)) });
  }
}

const avgGrade = grades.length ? grades.reduce((a, b) => a + b, 0) / grades.length : 0;
const pctOverTarget = grades.length
  ? (grades.filter((g) => g > 8).length / grades.length) * 100
  : 0;

const report = {
  filesScanned: files.length,
  guidesScored: grades.length,
  readingGradeAverage: Number(avgGrade.toFixed(1)),
  guidesAboveGrade8Pct: Number(pctOverTarget.toFixed(1)),
  guidesAboveGrade10: hardGuides.length,
  guidesScoredSpanishExcluded: esGuidesScored,
  spanishNote:
    esGuidesScored > 0
      ? `${esGuidesScored} Spanish-language guide(s) excluded from English readability scoring (formula does not apply to Spanish text).`
      : '',
  filesUsingTinyText: tinyText.length,
  tinyTextInstances: tinyText.reduce((n, x) => n + x.count, 0),
  filesWithSmallTapTargets: smallTargets.length,
  imagesMissingAlt: missingAlt.length,
  filesWithDivOnClick: divClicks.length,
};

if (JSON_OUT) {
  console.log(JSON.stringify({ report, hardGuides: hardGuides.slice(0, 50) }, null, 2));
  process.exit(0);
}

console.log('\n── TekSure senior-UX audit ─────────────────────────────');
console.log(`Files scanned                 ${report.filesScanned}`);
console.log(`Guides scored for readability ${report.guidesScored}`);
if (report.spanishNote) console.log(`  (${report.spanishNote})`);
console.log('');
console.log(`Average reading grade         ${report.readingGradeAverage}   (target: <= 8)`);
console.log(`Guides above grade 8          ${report.guidesAboveGrade8Pct}%`);
console.log(`Guides above grade 10         ${report.guidesAboveGrade10}`);
console.log('');
console.log(`Files using text-xs (12px)    ${report.filesUsingTinyText}  (${report.tinyTextInstances} instances)`);
console.log(`Files w/ sub-44px tap targets ${report.filesWithSmallTapTargets}`);
console.log(`Images missing alt text       ${report.imagesMissingAlt}`);
console.log(`Files with onClick on a div   ${report.filesWithDivOnClick}  (keyboard/screen-reader risk)`);
console.log('────────────────────────────────────────────────────────\n');

if (VERBOSE) {
  const top = (list, n = 12) => list.slice(0, n);
  if (hardGuides.length) {
    console.log('Hardest guides to read (grade level):');
    for (const g of top([...hardGuides].sort((a, b) => b.grade - a.grade)))
      console.log(`   ${g.grade}  ${g.slug}`);
    console.log('');
  }
  if (missingAlt.length) {
    console.log('Images missing alt text:');
    for (const a of top(missingAlt)) console.log(`   ${a.file}: ${a.snippet}`);
    console.log('');
  }
  if (divClicks.length) {
    console.log('onClick on a <div> (should be a <button>):');
    for (const d of top(divClicks)) console.log(`   ${d.file} (${d.count})`);
    console.log('');
  }
  if (tinyText.length) {
    console.log('Heaviest text-xs users:');
    for (const t of top([...tinyText].sort((a, b) => b.count - a.count)))
      console.log(`   ${t.count}x  ${t.file}`);
  }
}
