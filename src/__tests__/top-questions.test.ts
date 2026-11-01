import { describe, expect, it } from 'vitest';
import { TOP_QUESTIONS } from '@/data/top-questions';
import guideIndex from '@/data/guide-index.json';
import { TOOL_GROUPS } from '@/data/tools-list';

describe('home page top questions', () => {
  const guides = new Set((guideIndex as { slug: string }[]).map((g) => g.slug));
  const tools = new Set(TOOL_GROUPS.flatMap((g) => g.tools.map((t) => t.slug)));

  it.each(TOP_QUESTIONS)('$q links to a live page', ({ to }) => {
    const [, kind, slug] = to.split('/');
    expect(kind === 'guides' ? guides.has(slug) : kind === 'tools' && tools.has(slug)).toBe(true);
  });
});
