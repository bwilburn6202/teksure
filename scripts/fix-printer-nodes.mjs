/**
 * One-off migration: PrinterTroubleshooter.tsx had two generations of node
 * schemas in one tree. The UI only renders the newer `kind: 'question' | 'fix'`
 * shape, so every legacy `type: 'question' | 'solution'` node rendered blank —
 * and START_OPTIONS pointed at `ink_q1`, which never existed, crashing the tool.
 *
 * This converts every legacy node to the current shape:
 *   type: 'solution' → kind: 'fix'    (statement→title, solution→why, solutionSteps→steps)
 *   type: 'question' → kind: 'question' (question→title, helpText→subtitle,
 *                                        yesNext/noNext→options[])
 */
import { readFileSync, writeFileSync } from 'fs';

const FILE = new URL('../src/pages/tools/PrinterTroubleshooter.tsx', import.meta.url);
let src = readFileSync(FILE, 'utf8');

// 1. Drop legacy `id:` lines and empty `emoji:` lines inside tree nodes.
src = src.replace(/^\s*id: '[a-z0-9_]+',\n/gim, '');
src = src.replace(/^\s*emoji: '',\n/gim, '');

// 2. Solution nodes → fix nodes.
src = src.replace(/^(\s*)type: 'solution',$/gim, "$1kind: 'fix',");
src = src.replace(/^(\s*)statement: /gim, '$1title: ');
src = src.replace(/^(\s*)solution: /gim, '$1why: ');
src = src.replace(/^(\s*)solutionSteps: \[/gim, '$1steps: [');

// 3. Question nodes → question nodes with explicit options.
src = src.replace(/^(\s*)type: 'question',$/gim, "$1kind: 'question',");
src = src.replace(/^(\s*)question: /gim, '$1title: ');
src = src.replace(/^(\s*)helpText: /gim, '$1subtitle: ');

// 4. yesNext/noNext pairs → options array.
src = src.replace(
  /^(\s*)yesNext: '([a-z0-9_]+)',\n\s*noNext: '([a-z0-9_]+)',$/gim,
  (_m, indent, yes, no) =>
    `${indent}options: [\n` +
    `${indent}  { label: 'Yes', next: '${yes}' },\n` +
    `${indent}  { label: 'No', next: '${no}' },\n` +
    `${indent}],`
);

// 5. The three multi-choice nodes that deferred to module-level constants.
src = src.replace(
  /^(\s*)title: 'What best describes your printer problem\?',\n(\s*)\/\/[^\n]*\n/im,
  `$1title: 'What best describes your printer problem?',\n$1icon: Printer,\n$1options: START_OPTIONS,\n`
);
src = src.replace(
  /^(\s*)title: 'Is your printer connected by a USB cable \(plugged directly into your computer\) or by WiFi \(wirelessly\)\?',\n(\s*)\/\/[^\n]*\n/im,
  `$1title: 'How is your printer connected — USB cable or WiFi?',\n$1options: CONNECTION_OPTIONS,\n`
);
src = src.replace(
  /^(\s*)title: 'What does the printed page look like\?',\n(\s*)\/\/[^\n]*\n/im,
  `$1title: 'What does the printed page look like?',\n$1options: QUALITY_OPTIONS,\n`
);

// 6. The start node had no options at all — give it the real symptom list, and
//    repoint the ink branch at `outOfInk` (ink_q1 never existed).
src = src.replace(/next: 'ink_q1'/g, "next: 'outOfInk'");

// 7. Move the option constants above `tree` so they're defined before use.
const constBlock = src.match(
  /\/\/ Multi-choice start question options[\s\S]*?const QUALITY_OPTIONS = \[[\s\S]*?\];\n/
);
if (constBlock) {
  src = src.replace(constBlock[0], '');
  src = src.replace(/^const tree: Record<string, Node> = \{$/m, `${constBlock[0]}\nconst tree: Record<string, Node> = {`);
}

writeFileSync(FILE, src);
console.log('[fix-printer-nodes] migrated legacy nodes to the current schema');
