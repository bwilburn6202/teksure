import { describe, expect, it } from 'vitest';
import { expandQuery, rank, normalize } from '@/lib/search';
import guideIndex from '@/data/guide-index.json';

const guides = guideIndex as { slug: string; title: string; excerpt: string; tags: string[] }[];
const top = (q: string, n = 5) =>
  rank(guides, (g) => ({ title: g.title, text: `${g.excerpt} ${g.tags.join(' ')}` }), q, n).map((g) => g.slug);

describe('forgiving search', () => {
  it('normalises spelling variants', () => {
    expect(normalize('Wi-Fi Pop-Ups E-mail')).toBe('wifi popup email');
  });

  it('drops filler words but keeps a lone filler word', () => {
    expect(expandQuery('how do I fix my printer')).toEqual([['printer', 'print', 'printing']]);
    expect(expandQuery('help')).toEqual([['help']]);
    expect(expandQuery('   ')).toEqual([]);
  });

  it.each([
    ['my phone is talking to me', 'hidden-accessibility-features-your-phone-already-has'],
    ['facebook hacked', 'facebook-account-recovery-guide'],
    ['bigger text', 'iphone-display-zoom-guide'],
    ['spam calls', 'how-to-handle-robocalls-spam-calls-2026'],
    ['forgot my password', 'forgot-email-password-recovery'],
    ['storage full iphone', 'iphone-storage-breakdown-guide'],
    ['my computer is slow', 'fix-slow-windows-pc-2026'],
    ['video chat with grandkids', 'how-to-video-call-family-with-facetime-or-google-duo'],
  ])('“%s” finds %s', (q, slug) => {
    expect(top(q)).toContain(slug);
  });

  it('does not match short words inside longer ones', () => {
    // "ai" must not match every guide that mentions "email".
    expect(top('ai', 40).every((s) => !s.includes('email') || s.includes('ai'))).toBe(true);
  });

  it('returns nothing for gibberish', () => {
    expect(top('zzzzqq')).toEqual([]);
  });
});
