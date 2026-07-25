/**
 * write-build-info.mjs — stamp the build so "what is actually live?" is answerable.
 *
 * This exists because of a real hour lost: three commits were pushed, the site kept
 * serving old HTML, and there was no way to tell from the outside whether Vercel had
 * deployed the new commit, silently failed, or skipped the prerender step. Guessing
 * cost more than the fix.
 *
 * After a deploy you can now just ask the site:
 *   curl -s https://www.teksure.com/build-info.json
 *
 * If `commit` is not the commit you pushed, the deploy did not happen. If
 * `prerenderedPages` is 0, prerendering did not run and the site is back to being a
 * client-only SPA that search engines cannot read properly.
 */
import { execSync } from 'node:child_process';
import { existsSync, readdirSync, statSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const DIST = join(ROOT, 'dist');

function sh(cmd, fallback = 'unknown') {
  try {
    return execSync(cmd, { cwd: ROOT, encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }).trim();
  } catch {
    return fallback;
  }
}

function countPrerendered(dir, depth = 0) {
  if (depth > 6 || !existsSync(dir)) return 0;
  let n = 0;
  for (const name of readdirSync(dir)) {
    if (name === 'assets' || name.startsWith('.')) continue;
    const p = join(dir, name);
    let s;
    try { s = statSync(p); } catch { continue; }
    if (s.isDirectory()) n += countPrerendered(p, depth + 1);
    else if (name === 'index.html') n++;
  }
  return n;
}

// Vercel exposes the commit SHA in the environment; fall back to local git.
const commit =
  process.env.VERCEL_GIT_COMMIT_SHA ||
  process.env.GITHUB_SHA ||
  sh('git rev-parse HEAD');

const info = {
  commit: commit.slice(0, 12),
  commitMessage: process.env.VERCEL_GIT_COMMIT_MESSAGE || sh('git log -1 --pretty=%s'),
  builtAt: new Date().toISOString(),
  prerenderedPages: countPrerendered(DIST),
  environment: process.env.VERCEL_ENV || 'local',
};

mkdirSync(DIST, { recursive: true });
writeFileSync(join(DIST, 'build-info.json'), JSON.stringify(info, null, 2) + '\n');
console.log(
  `[write-build-info] ${info.commit} · ${info.prerenderedPages} prerendered pages · ${info.environment}`
);

if (info.prerenderedPages < 100) {
  console.warn(
    '[write-build-info] WARNING: almost nothing was prerendered. Search engines will ' +
      'see a generic title on every URL. Check the prerender step above.'
  );
}
