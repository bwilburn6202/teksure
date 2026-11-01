import { describe, expect, it, vi } from 'vitest';
import { renderToStaticMarkup } from 'react-dom/server';
import { MemoryRouter } from 'react-router-dom';

vi.mock('@/integrations/supabase/client', () => ({ supabase: {} }));
import { GuideFeedback } from '@/components/guide/GuideFeedback';

describe('GuideFeedback', () => {
  it('asks a plain Yes/No question with two large buttons', () => {
    const html = renderToStaticMarkup(
      <MemoryRouter>
        <GuideFeedback slug="block-spam-calls-iphone" />
      </MemoryRouter>,
    );
    expect(html).toContain('Did this guide fix your problem?');
    expect(html).toContain('Yes, it worked');
    expect(html).toContain('No, I am still stuck');
    expect(html).toContain('min-h-[52px]');
  });
});
