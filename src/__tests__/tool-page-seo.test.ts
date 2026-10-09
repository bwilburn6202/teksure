import { describe, it, expect } from 'vitest';
import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

/**
 * Every /tools/<slug> page must set its own <title> and description.
 *
 * Prerendering writes one static HTML file per route, and the title comes from
 * the page's own <SEOHead>. A tool page that omits it renders with an empty
 * <title> — not the site default, empty — which is worse than a generic title:
 * search engines and AI answer engines get nothing to show for the page.
 *
 * This is not hypothetical. /tools/medication-reminder-setup shipped to
 * production without a <SEOHead> and served `<title></title>` to every crawler.
 * The sharded prerender report counted it (renderedWithoutTitle: 1) but nothing
 * failed the build, so it sat there unnoticed. One missing component in 388
 * files is exactly the kind of thing a person does not catch by reading diffs.
 *
 * CLAUDE.md already states the rule ("Every new page needs <SEOHead …>"); this
 * test is what makes the rule bite.
 */

const TOOLS_DIR = join(process.cwd(), 'src/pages/tools');

describe('tool pages set their own SEO head', () => {
  const files = readdirSync(TOOLS_DIR).filter((f) => f.endsWith('.tsx'));

  it('finds the tool page components', () => {
    expect(files.length).toBeGreaterThan(300);
  });

  it('every tool page renders <SEOHead>', () => {
    const missing = files.filter((f) => {
      const src = readFileSync(join(TOOLS_DIR, f), 'utf8');
      return !src.includes('<SEOHead');
    });

    expect(
      missing,
      `These tool pages render without a <title>. Add <SEOHead title="…" ` +
        `description="…" path="/tools/<slug>" /> to each:\n  ` +
        missing.join('\n  ')
    ).toEqual([]);
  });

  it('every tool page passes a non-empty title and description to SEOHead', () => {
    const bad: string[] = [];
    for (const f of files) {
      const src = readFileSync(join(TOOLS_DIR, f), 'utf8');
      const head = src.slice(src.indexOf('<SEOHead'));
      // Match up to the *same* delimiter that opened the value. A naive
      // [^"'`]* stops at the first inner quote, which reads a legitimate title
      // like "'Pig Butchering' Crypto Scam" as empty.
      const attr = (name: string) =>
        new RegExp(String.raw`${name}=\{?(["'\`])([\s\S]*?)\1`).exec(head)?.[2] ?? '';
      const title = attr('title');
      const description = attr('description');
      if (title.trim().length === 0 || description.trim().length === 0) bad.push(f);
    }

    expect(bad, `Empty SEOHead title or description in:\n  ${bad.join('\n  ')}`).toEqual([]);
  });
});
