#!/usr/bin/env node
/**
 * Strip decorative emoji from TekSure source files.
 *
 * Removes characters in the common emoji unicode ranges from `src/pages/`
 * and `src/components/` so the UI stops showing decorative emoji in
 * headlines, hero text, button labels, list items, etc.
 *
 * Excludes:
 *   - src/data/  — guide content + thumbnailEmoji data field (cards now
 *                  use lucide icons via GuideThumbnail; the field stays
 *                  on disk so older code paths don't crash)
 *   - tests + __tests__
 *
 * IMPORTANT: this script ONLY removes emoji characters. It does not
 * collapse whitespace, trim string literals, or rearrange code. A
 * "Hello 👋 world" string becomes "Hello  world" (with the extra space
 * preserved so we don't accidentally fuse adjacent words).
 *
 * Re-running is idempotent.
 */
import { readFileSync, writeFileSync } from "node:fs";
import { execSync } from "node:child_process";

// Emoji unicode ranges. Aggressive on purpose — the brand instruction is
// "no emojis anywhere in the UI". Variation selectors and ZWJ are stripped
// too so we don't leave behind half-built emoji sequences.
const EMOJI_RE = new RegExp(
  [
    "[\\u{1F000}-\\u{1FFFF}]", // Pictographs, emoticons, transport, dingbats, supplemental
    "[\\u{2300}-\\u{23FF}]",   // Misc Technical (⌚ ⏰ ⌛)
    "[\\u{2400}-\\u{243F}]",   // Control Pictures
    "[\\u{2600}-\\u{27BF}]",   // Misc Symbols + Dingbats (☀ ✓ ✗ ★)
    "[\\u{2B00}-\\u{2BFF}]",   // Misc Symbols and Arrows
    "\\u{200D}",               // Zero-width joiner (emoji combiner)
    "[\\u{FE00}-\\u{FE0F}]",   // Variation selectors
    "[\\u{1F3FB}-\\u{1F3FF}]", // Skin tone modifiers
  ].join("|"),
  "gu",
);

function listFiles() {
  const tracked = execSync("git ls-files src/pages src/components", {
    encoding: "utf8",
  });
  const untracked = execSync(
    "git ls-files --others --exclude-standard src/pages src/components",
    { encoding: "utf8" },
  );
  return (tracked + untracked)
    .split("\n")
    .map((p) => p.trim())
    .filter((p) => p)
    .filter((p) => /\.(tsx?|jsx?)$/.test(p))
    .filter((p) => !/(\.test\.|__tests__)/.test(p));
}

let touched = 0;
let scanned = 0;
for (const path of listFiles()) {
  scanned += 1;
  const original = readFileSync(path, "utf8");
  EMOJI_RE.lastIndex = 0;
  if (!EMOJI_RE.test(original)) continue;
  EMOJI_RE.lastIndex = 0;
  const next = original.replace(EMOJI_RE, "");
  if (next !== original) {
    writeFileSync(path, next);
    touched += 1;
    console.log(`stripped: ${path}`);
  }
}
console.log(`\nScanned ${scanned} files, modified ${touched}.`);
