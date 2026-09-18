import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

/**
 * The catch-all rewrite and the prerendered 404 page are one mechanism split
 * across two files, and nothing else connects them.
 *
 * `vercel.json` sends every URL that matches no file and no redirect to a
 * single destination. That destination only exists if `scripts/prerender.mjs`
 * writes it, and the prerenderer builds its route list from literal `path="…"`
 * strings in App.tsx — which never includes the `path="*"` catch-all. So the
 * 404 route is added to the list by hand, and a future edit to either file can
 * silently break the pair:
 *
 *   - drop `routes.add('/404')` and the edge rewrites to a file that no longer
 *     exists, turning every typo'd URL into a bare Vercel error page;
 *   - point the rewrite somewhere else and unknown URLs start serving that
 *     page's content and canonical under HTTP 200 instead.
 *
 * The second one is how this started: the destination was `/`, so every
 * unknown URL on the site returned the homepage — same title, same canonical,
 * HTTP 200. A soft 404 at the scale of the whole URL space.
 */
describe('catch-all rewrite', () => {
  const root = join(__dirname, '..', '..');
  const vercel = JSON.parse(readFileSync(join(root, 'vercel.json'), 'utf8'));
  const prerender = readFileSync(join(root, 'scripts', 'prerender.mjs'), 'utf8');

  const catchAll = (vercel.rewrites ?? []).find(
    (r: { source: string }) => r.source === '/(.*)'
  );

  it('exists, so client-side routes still boot', () => {
    expect(catchAll).toBeDefined();
  });

  it('does not send unknown URLs to the homepage', () => {
    expect(catchAll.destination).not.toBe('/');
  });

  it('points at a route the prerenderer actually writes', () => {
    expect(prerender).toContain(`routes.add('${catchAll.destination}')`);
  });
});
