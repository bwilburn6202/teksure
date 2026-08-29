/**
 * Ratchet test for the design-token cleanup.
 *
 * The site's semantic tokens live in src/index.css and are AA-contrast checked.
 * Raw Tailwind palette classes (bg-amber-50, text-gray-500, ...) bypass them,
 * and are the reason pages break in dark mode. Phase 2 of the universal-design
 * work brought the count down from 17,626; this test stops it climbing back.
 *
 * When you legitimately reduce the count, lower BUDGET to the new number. Never
 * raise it — if this fails, run:
 *
 *   node scripts/codemods/semantic-colors.mjs --unmapped
 *   node scripts/codemods/semantic-colors.mjs --apply
 */
import { describe, expect, it } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';

const FAMILIES =
  'red|blue|green|yellow|purple|indigo|pink|orange|teal|cyan|emerald|violet|amber|slate|gray|zinc|neutral|stone';
const RAW_PALETTE = new RegExp(`(?:bg|text|border)-(?:${FAMILIES})-\\d{2,3}`, 'g');

const BUDGET = 6400; // measured 6,305 on 2026-08-27, after the Phase 2 codemod

function walk(dir: string, out: string[] = []): string[] {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) {
      if (e.name === 'node_modules' || e.name.startsWith('.')) continue;
      walk(p, out);
    } else if (e.name.endsWith('.tsx')) out.push(p);
  }
  return out;
}

describe('design tokens', () => {
  it(`keeps raw Tailwind palette usage at or under ${BUDGET}`, () => {
    let count = 0;
    for (const f of walk('src')) {
      count += (fs.readFileSync(f, 'utf8').match(RAW_PALETTE) ?? []).length;
    }
    console.log(`[design-tokens] raw palette classes: ${count} (budget ${BUDGET})`);
    expect(count).toBeLessThanOrEqual(BUDGET);
  });

  it('defines every semantic surface token in both light and dark', () => {
    const css = fs.readFileSync('src/index.css', 'utf8');
    const root = css.slice(css.indexOf(':root {'), css.indexOf('.dark {'));
    const dark = css.slice(css.indexOf('.dark {'));

    for (const name of ['warn', 'success', 'info', 'danger']) {
      for (const suffix of ['', '-foreground']) {
        const token = `--${name}-surface${suffix}:`;
        expect(root, `light mode is missing ${token}`).toContain(token);
        expect(dark, `dark mode is missing ${token}`).toContain(token);
      }
    }
  });
});
