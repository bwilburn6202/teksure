#!/usr/bin/env node
/**
 * Remove duplicate `const X = lazy(...)` declarations in src/App.tsx.
 *
 * Recent automated cycle commits have been adding new lazy imports
 * without checking whether the import was already declared, leaving
 * duplicate `const` lines that break the Vite/esbuild build with
 * "The symbol X has already been declared". This script keeps the
 * first declaration of each name and removes any later duplicates.
 *
 * Idempotent: running it on a clean App.tsx is a no-op.
 */
import { readFileSync, writeFileSync } from "node:fs";

const PATH = "src/App.tsx";
const src = readFileSync(PATH, "utf8");
const lines = src.split("\n");

const declRe = /^const\s+([A-Z][A-Za-z0-9_]*)\s*=\s*lazy\(/;
const seen = new Set();
const dropped = [];

const kept = lines.filter((line, idx) => {
  const m = declRe.exec(line);
  if (!m) return true;
  const name = m[1];
  if (seen.has(name)) {
    dropped.push({ name, line: idx + 1, content: line });
    return false;
  }
  seen.add(name);
  return true;
});

if (dropped.length === 0) {
  console.log("No duplicate `const X = lazy(...)` lines found.");
  process.exit(0);
}

writeFileSync(PATH, kept.join("\n"));
console.log(`Removed ${dropped.length} duplicate lazy declarations:`);
for (const { name, line } of dropped) {
  console.log(`  ${PATH}:${line}  ${name}`);
}
