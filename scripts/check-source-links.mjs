/**
 * check-source-links.mjs — verify external source citations are still live.
 *
 * Guides cite official sources two ways: a structured `sourceUrl:` field, and
 * a `(Source: ... url)` note inline in the body text. Both rot over time —
 * the July 2026 audit found FTC, AARP, CNET, Consumer Reports, and CFPB pages
 * that had moved or been retired, some still linked from guides about scams
 * and fraud, which is exactly the content where a dead "verify this" link
 * hurts trust most.
 *
 * This script does NOT auto-fix anything (a 404 needs a human or an LLM to
 * find the right replacement, not a script). It reports what's broken so
 * that work can be triaged and assigned.
 *
 *   node scripts/check-source-links.mjs            # summary
 *   node scripts/check-source-links.mjs --verbose   # list every broken link + guide
 *   node scripts/check-source-links.mjs --json      # machine-readable (dev-loop)
 */
import { readdirSync, readFileSync } from 'fs';
import { dirname, join, resolve } from 'path';
import { fileURLToPath } from 'url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const DATA = join(ROOT, 'src', 'data');
const VERBOSE = process.argv.includes('--verbose');
const JSON_OUT = process.argv.includes('--json');
const TIMEOUT_MS = 6000;

function nearestSlugBefore(text, index) {
  const upto = text.slice(Math.max(0, index - 8000), index);
  const matches = [...upto.matchAll(/slug:\s*['"`]([^'"`]+)['"`]/g)];
  return matches.length ? matches[matches.length - 1][1] : '(unknown slug)';
}

function collectSourceUrls() {
  const found = new Map(); // url -> [{slug, file}]
  for (const file of readdirSync(DATA)) {
    if (!file.startsWith('guides') || !file.endsWith('.ts')) continue;
    const text = readFileSync(join(DATA, file), 'utf8');

    // Structured field — independent global pass, slug found by looking
    // backward from the match instead of requiring both in one window
    // (some guides have long steps arrays that pushed sourceUrl past a
    // fixed-size window from slug, which silently dropped real entries).
    const fieldRe = /sourceUrl:\s*(['"`])(https?:\/\/[^'"`]+)\1/g;
    let m;
    while ((m = fieldRe.exec(text)) !== null) {
      const url = m[2];
      const slug = nearestSlugBefore(text, m.index);
      if (!found.has(url)) found.set(url, []);
      found.get(url).push({ slug, file });
    }

    // Inline "(Source: ... url)" note in body text. Some are bare domains
    // with no protocol ("aarp.org/...") rather than full https:// links.
    const srcRe = /\(Source:([^)]*)\)/g;
    while ((m = srcRe.exec(text)) !== null) {
      const chunk = m[1];
      // Match the full host, including subdomains (support.apple.com, not
      // just apple.com) — an earlier version of this regex dropped
      // subdomains and produced false "broken" reports for links that were
      // actually fine.
      const urlMatch = chunk.match(
        /(?:https?:\/\/)?(?:[a-zA-Z0-9-]+\.)+(?:gov|com|org)(?:\/[a-zA-Z0-9./_?&=-]*)?/
      );
      if (!urlMatch) continue;
      let url = urlMatch[0].replace(/[).,]+$/, '');
      if (!/^https?:\/\//.test(url)) url = `https://${url}`;
      const slug = nearestSlugBefore(text, m.index);
      if (!found.has(url)) found.set(url, []);
      found.get(url).push({ slug, file });
    }
  }
  return found;
}

async function checkUrl(url) {
  for (let attempt = 0; attempt < 2; attempt++) {
    try {
      const controller = new AbortController();
      const t = setTimeout(() => controller.abort(), TIMEOUT_MS);
      const res = await fetch(url, {
        method: 'GET',
        redirect: 'follow',
        signal: controller.signal,
        headers: { 'User-Agent': 'Mozilla/5.0 (compatible; TekSureLinkCheck/1.0)' },
      });
      clearTimeout(t);
      return res.status;
    } catch {
      // retry once — some sites rate-limit rapid sequential requests
    }
  }
  return 0; // unreachable after retry
}

const urls = collectSourceUrls();
if (!JSON_OUT) console.log(`[check-source-links] checking ${urls.size} unique source URLs...`);
else console.error(`[check-source-links] checking ${urls.size} unique source URLs...`);

const broken = [];
const unreachable = [];
let checked = 0;
const entries = [...urls.entries()];
const CONCURRENCY = 12;
let cursor = 0;
await Promise.all(
  Array.from({ length: CONCURRENCY }, async () => {
    while (cursor < entries.length) {
      const [url, refs] = entries[cursor++];
      const status = await checkUrl(url);
      checked++;
      if (status === 404 || status === 410) broken.push({ url, status, refs });
      else if (status === 0) unreachable.push({ url, refs });
    }
  })
);

const report = {
  urlsChecked: checked,
  broken: broken.length,
  unreachable: unreachable.length,
};

if (JSON_OUT) {
  console.log(JSON.stringify({ report, broken, unreachable: unreachable.slice(0, 20) }, null, 2));
  process.exit(broken.length > 0 ? 1 : 0);
}

console.log(`\n── Source link check ───────────────────────────────────`);
console.log(`URLs checked      ${report.urlsChecked}`);
console.log(`Confirmed broken  ${report.broken}  (404/410 — needs a real fix)`);
console.log(`Unreachable       ${report.unreachable}  (timeout/blocked — often bot-blocking, not necessarily dead)`);
console.log(`──────────────────────────────────────────────────────\n`);

if (broken.length && (VERBOSE || !JSON_OUT)) {
  console.log('Broken source links:');
  for (const b of broken) {
    console.log(`  ${b.status}  ${b.url}`);
    for (const r of b.refs) console.log(`         used by ${r.slug} (${r.file})`);
  }
}

process.exit(broken.length > 0 ? 1 : 0);
