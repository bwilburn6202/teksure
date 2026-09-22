/**
 * Remove build-only artefacts from dist/ after prerendering.
 *
 * The SSR bundle (dist/server) is a build tool, not something users should be
 * able to download — it is ~19MB and would otherwise be deployed as public
 * static files. Same for the shell snapshot the prerender step uses.
 *
 * This step must NEVER fail the build. It is the last link in `npm run
 * prerender`, and `prerender:safe` turns any non-zero exit in that chain into
 * "PRERENDER FAILED — shipping the client-only SPA". A leftover build artefact
 * is a wasted 19MB; a client-only SPA makes every one of ~4,500 URLs serve the
 * same generic title. Those are not remotely the same size of problem, so a
 * delete that will not go through gets a loud warning and exit 0.
 *
 * The delete really does get refused sometimes: on the Cowork mount the
 * filesystem returns EPERM on `unlink` for files inside dist/server, the same
 * refusal CLAUDE.md documents for `.git/*.lock`. Before this guard, that
 * refusal made a build with 4,449 of 4,449 pages written and 0 failed report
 * itself as a total prerender failure.
 */
import { rmSync, existsSync, renameSync } from 'node:fs';
import { join, dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const DIST = resolve(dirname(fileURLToPath(import.meta.url)), '..', 'dist');

const leftovers = [];

for (const target of ['server', '.prerender-template.html']) {
  const path = join(DIST, target);
  if (!existsSync(path)) continue;

  try {
    rmSync(path, { recursive: true, force: true });
    console.log(`[prerender-cleanup] removed dist/${target}`);
    continue;
  } catch (err) {
    console.warn(
      `[prerender-cleanup] could not delete dist/${target}: ${err.code || err.message}`
    );
  }

  // Deleting was refused. Rename instead — a `.build-artefact-*` name is still
  // deployed, but it is obvious in a file listing what it is and where it came
  // from. On this mount `rename` works where `unlink` does not.
  const parked = `${path}.build-artefact-${Date.now()}`;
  try {
    renameSync(path, parked);
    console.warn(`[prerender-cleanup] renamed it to ${parked.replace(`${DIST}/`, 'dist/')}`);
    leftovers.push(`dist/${target} (renamed, still in dist/)`);
  } catch {
    leftovers.push(`dist/${target}`);
  }
}

if (leftovers.length > 0) {
  console.warn(
    '\n[prerender-cleanup] WARNING — build artefacts are still in dist/ and will be ' +
      'deployed as public static files:\n' +
      leftovers.map((l) => `  - ${l}`).join('\n') +
      '\nPrerendering itself is unaffected: check dist/prerender-report.json for the ' +
      'page counts. Clear these by hand if the deploy size matters.\n'
  );
}

// Always succeed. See the header comment.
process.exit(0);
