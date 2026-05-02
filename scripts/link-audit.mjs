#!/usr/bin/env node
/**
 * Internal link audit for TekSure.
 *
 * 1. Walks src/App.tsx and collects every `<Route path="..." />` plus
 *    every dynamic route (`:slug`, etc.) so we know what destinations
 *    exist.
 * 2. Walks every TSX/TS file under src/ and extracts every internal
 *    link target it can find:
 *      - <Link to="...">, <NavLink to="...">, <PreloadLink to="...">
 *      - to="/foo" attribute on any element
 *      - href="/foo"  attribute on <a> elements
 *      - navigate("/foo")
 * 3. Cross-references and reports each link that doesn't match an
 *    existing route. External URLs (http://, mailto:, tel:) and
 *    in-page anchors (#section) are ignored.
 *
 * Output:
 *   - JSON to stdout when --json is passed
 *   - Human-readable summary otherwise (broken targets + the files
 *     that reference them)
 */
import { readFileSync } from "node:fs";
import { execSync } from "node:child_process";

const args = process.argv.slice(2);
const asJson = args.includes("--json");

// ── 1. Collect defined routes from App.tsx ────────────────────────────
const appSrc = readFileSync("src/App.tsx", "utf8");

const routePathRe = /<Route\s+[^>]*?path=(?:"([^"]+)"|\{[^}]+\})/g;
const definedRoutes = new Set();
// `<Route path="/foo" element={<Navigate to="/bar" />}>` — these are
// redirect aliases. They don't need incoming links because their whole
// purpose is to forward to a target route.
const redirectRoutes = new Set();
const routeBlockRe =
  /<Route\s+[^>]*?path="([^"]+)"[^>]*?element=\{<Navigate\b/g;
let m;
while ((m = routePathRe.exec(appSrc)) !== null) {
  if (m[1]) definedRoutes.add(m[1]);
}
while ((m = routeBlockRe.exec(appSrc)) !== null) {
  if (m[1]) redirectRoutes.add(m[1]);
}

// Convert routes with params (`/guides/:slug`) into a regex matcher.
function buildRouteMatchers(routes) {
  return [...routes].map((p) => {
    // Only normalize parameter segments. Splat patterns like `*` are kept.
    const normalized = p
      .replace(/:[A-Za-z_]\w*/g, "[^/]+")
      .replace(/\*/g, ".*");
    return { raw: p, regex: new RegExp(`^${normalized}/?$`) };
  });
}
const matchers = buildRouteMatchers(definedRoutes);

function isDefinedRoute(path) {
  // Strip query string and hash
  const clean = path.split(/[?#]/)[0];
  if (!clean) return true; // pure anchor (#foo) — skip
  if (!clean.startsWith("/")) return true; // relative or external — skip
  return matchers.some(({ regex }) => regex.test(clean));
}

// ── 2. Collect all link targets from src/ files ───────────────────────
const filesRaw = execSync("git ls-files src", { encoding: "utf8" });
const files = filesRaw
  .split("\n")
  .map((p) => p.trim())
  .filter((p) => p && /\.(tsx?|jsx?)$/.test(p))
  .filter((p) => !/(\.test\.|__tests__)/.test(p));

// Patterns that introduce internal link targets. Each must capture the
// destination string in group 1.
const PATTERNS = [
  // <Link to="...">, <NavLink to="...">, <PreloadLink to="...">
  /\b(?:Link|NavLink|PreloadLink)\b[^>]*?\bto=["']([^"'`]+)["']/g,
  // Generic `to="..."` attribute (catches <Route>, custom comps; we filter
  // out matches that don't start with `/` later)
  /\bto=["']([^"'`]+)["']/g,
  // Object-literal nav entries: `{ to: '/foo', label: 'Bar' }` and similar.
  // Used heavily in the Navbar `moreLinks` and footer arrays where the
  // path lives on a property, not a JSX attribute.
  /\bto:\s*["']([^"'`]+)["']/g,
  /\bpath:\s*["']([^"'`]+)["']/g,
  /\bhref:\s*["']([^"'`]+)["']/g,
  // href="/foo" — only catches plain attribute form, ignores expressions
  /\bhref=["']([^"'`]+)["']/g,
  // navigate("/foo") and navigate('/foo')
  /\bnavigate\(\s*["']([^"'`]+)["']/g,
];

function isExternal(target) {
  return (
    target.startsWith("http://") ||
    target.startsWith("https://") ||
    target.startsWith("mailto:") ||
    target.startsWith("tel:") ||
    target.startsWith("//") ||
    target.startsWith("data:") ||
    target.startsWith("blob:") ||
    target.startsWith("javascript:")
  );
}

const broken = new Map(); // target → Set<file:line>
let totalLinks = 0;
const internalLinkSet = new Set();

for (const path of files) {
  // Skip App.tsx itself (it's the source of truth for routes — references
  // there are by definition the route definitions)
  if (path === "src/App.tsx") continue;

  const src = readFileSync(path, "utf8");
  const lines = src.split("\n");

  for (const re of PATTERNS) {
    re.lastIndex = 0;
    while ((m = re.exec(src)) !== null) {
      const target = m[1];
      if (!target) continue;
      if (isExternal(target)) continue;
      // Drop pure anchors and template literals with placeholders
      if (target.startsWith("#")) continue;
      if (target.includes("${") || target.includes("{")) continue;
      // Only consider absolute paths starting with /
      if (!target.startsWith("/")) continue;

      totalLinks += 1;
      internalLinkSet.add(target);

      if (!isDefinedRoute(target)) {
        const lineNo = src.slice(0, m.index).split("\n").length;
        const key = target;
        if (!broken.has(key)) broken.set(key, new Set());
        broken.get(key).add(`${path}:${lineNo}`);
      }
    }
  }
}

// ── 3a. Orphan detection ──────────────────────────────────────────────
// A route is "orphaned" if no link targets it. Dynamic routes (with `:`
// or `*`) are skipped because they're matched by template literals we
// can't statically resolve.
const orphans = [];
for (const route of definedRoutes) {
  if (route.includes(":") || route.includes("*")) continue;
  // Skip the root and known programmatic-only routes
  if (route === "*" || route === "/") continue;
  // Skip redirect aliases — they're not real destinations
  if (redirectRoutes.has(route)) continue;
  // Direct hit?
  if (internalLinkSet.has(route)) continue;
  // Trailing slash variant?
  if (internalLinkSet.has(route + "/")) continue;
  if (route.endsWith("/") && internalLinkSet.has(route.slice(0, -1))) continue;
  orphans.push(route);
}
orphans.sort();

// ── 3b. Report ────────────────────────────────────────────────────────
const sortedBroken = [...broken.entries()]
  .map(([target, refs]) => ({ target, refs: [...refs].sort() }))
  .sort((a, b) => a.target.localeCompare(b.target));

if (asJson) {
  console.log(
    JSON.stringify(
      {
        definedRoutes: [...definedRoutes].sort(),
        totalInternalLinks: totalLinks,
        uniqueInternalTargets: internalLinkSet.size,
        brokenTargets: sortedBroken.length,
        broken: sortedBroken,
        orphanCount: orphans.length,
        orphans,
      },
      null,
      2,
    ),
  );
} else {
  console.log(`Defined routes:        ${definedRoutes.size}`);
  console.log(`Internal link calls:   ${totalLinks}`);
  console.log(`Unique internal paths: ${internalLinkSet.size}`);
  console.log(`Broken targets:        ${sortedBroken.length}`);
  console.log(`Orphaned routes:       ${orphans.length}\n`);

  if (sortedBroken.length === 0) {
    console.log("No broken internal links found.\n");
  } else {
    console.log("BROKEN LINKS:");
    for (const { target, refs } of sortedBroken) {
      console.log(`\n  ${target}   (referenced ${refs.length}×)`);
      for (const ref of refs) console.log(`    ${ref}`);
    }
    console.log();
  }

  if (orphans.length > 0) {
    console.log(
      `ORPHANED ROUTES (${orphans.length} routes are defined but no link targets them):`,
    );
    for (const route of orphans) console.log(`  ${route}`);
  }
}
