import { describe, expect, it } from 'vitest';
import { renderToStaticMarkup } from 'react-dom/server';
import { TooltipProvider } from '@/components/ui/tooltip';
import { StepContent } from '@/components/guide/StepContentRenderer';

const render = (text: string) =>
  renderToStaticMarkup(<TooltipProvider><StepContent text={text} /></TooltipProvider>);

describe('menu paths in guide steps', () => {
  it('prints "Settings > Phone > Blocked Contacts" as screen labels', () => {
    const html = render('Go to Settings > Phone > Blocked Contacts to see them.');
    expect(html.match(/class="keycap"/g)?.length).toBe(3);
    expect(html).toContain('>Blocked Contacts<');
    expect(html).toContain(' to see them.');
  });

  it('keeps iCloud and [Your Name] inside the path', () => {
    const html = render('Open Settings > [Your Name] > iCloud now.');
    expect(html.match(/class="keycap"/g)?.length).toBe(3);
    expect(html).toContain('<span>Open </span>');
    expect(html).toContain('>Settings<');
  });

  it('leaves comparisons and lowercase text alone', () => {
    expect(render('Pick 5 GHz if speed > range matters.')).not.toContain('keycap');
  });
});
