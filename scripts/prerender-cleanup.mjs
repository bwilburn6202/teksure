/**
 * Remove build-only artefacts from dist/ after prerendering.
 *
 * The SSR bundle (dist/server) is a build tool, not something users should be
 * able to download — it is ~19MB and would otherwise be deployed as public
 * static files. Same for the shell snapshot the prerender step uses.
 */
import { rmSync, existsSync } from 'node:fs';
import { join, dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const DIST = resolve(dirname(fileURLToPath(import.meta.url)), '..', 'dist');

for (const target of ['server', '.prerender-template.html']) {
  const path = join(DIST, target);
  if (existsSync(path)) {
    rmSync(path, { recursive: true, force: true });
    console.log(`[prerender-cleanup] removed dist/${target}`);
  }
}
