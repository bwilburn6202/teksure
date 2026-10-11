import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

/**
 * Unknown URLs must get a real HTTP 404, and the account, payment and admin
 * screens must still load. Those two needs are met by three files that nothing
 * else connects:
 *
 *   - `scripts/prerender.mjs` writes the not-found page (`routes.add('/404')`);
 *   - `scripts/prerender-cleanup.mjs` copies it to `dist/404.html`, which Vercel
 *     serves with status 404 for any URL that matches no file, redirect or rewrite;
 *   - `vercel.json` rewrites only the app-shell routes (no prerendered HTML) to
 *     `/404`, whose HTML loads the app so the right screen renders.
 *
 * Until 2026-10-11 there was a catch-all `/(.*) -> /404` rewrite instead. A
 * rewrite answers 200, so every unknown URL, including ~3,000 retired guides,
 * was a soft 404. Before that the catch-all pointed at `/`, which served the
 * homepage for every unknown URL.
 */
describe('not-found status and app-shell rewrites', () => {
  const root = join(__dirname, '..', '..');
  const vercel = JSON.parse(readFileSync(join(root, 'vercel.json'), 'utf8'));
  const prerender = readFileSync(join(root, 'scripts', 'prerender.mjs'), 'utf8');
  const cleanup = readFileSync(join(root, 'scripts', 'prerender-cleanup.mjs'), 'utf8');
  const rewrites: { source: string; destination: string }[] = vercel.rewrites ?? [];

  it('has no catch-all rewrite, so unknown URLs answer 404', () => {
    const catchAll = rewrites.filter((r) => /\(\.\*\)|:path\*|\/\*$/.test(r.source));
    expect(catchAll).toEqual([]);
  });

  it('writes dist/404.html from the prerendered not-found page', () => {
    expect(prerender).toContain(`routes.add('/404')`);
    expect(cleanup).toContain(`'404.html'`);
  });

  it('rewrites only to a page the prerenderer writes', () => {
    for (const r of rewrites) expect(r.destination).toBe('/404');
  });

  it('keeps the screens Stripe and signed-in users land on', () => {
    const sources = rewrites.map((r) => r.source);
    for (const p of ['/payment/success', '/payment/cancel', '/profile', '/my-requests', '/admin']) {
      expect(sources).toContain(p);
    }
  });
});
