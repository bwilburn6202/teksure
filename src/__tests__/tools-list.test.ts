import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { TOOL_GROUPS } from '@/data/tools-list';

// Read the registry as text: importing it would pull in every tool page.
const registrySlugs = [
  ...readFileSync(join(__dirname, '..', 'data', 'tools-registry.ts'), 'utf8').matchAll(/^ {2}'([^']+)':\s*lazy\(/gm),
].map((m) => m[1]);

describe('tools list', () => {
  const listed = TOOL_GROUPS.flatMap((g) => g.tools.map((t) => t.slug));

  it('lists every registered tool', () => {
    expect(registrySlugs.filter((s) => !listed.includes(s))).toEqual([]);
  });

  it('lists only registered tools, once each', () => {
    expect(listed.filter((s) => !registrySlugs.includes(s))).toEqual([]);
    expect(new Set(listed).size).toBe(listed.length);
  });
});
