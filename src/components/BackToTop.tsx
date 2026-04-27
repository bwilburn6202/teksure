import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

/**
 * Floating "Back to top" button that appears after scrolling down.
 * Designed for seniors — large touch target, clear label.
 */
export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  const handleClick = () => {
    const reduceMotion =
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
  };

  return (
    <Button
      variant="outline"
      size="sm"
      className="fixed bottom-20 right-6 z-40 rounded-full shadow-lg gap-2 no-print min-h-[44px] px-4 bg-background/95 backdrop-blur"
      onClick={handleClick}
      aria-label="Back to top of page"
    >
      <ArrowUp className="h-4 w-4" />
      <span className="hidden sm:inline">Top</span>
    </Button>
  );
}
