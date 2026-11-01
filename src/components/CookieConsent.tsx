import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Cookie } from 'lucide-react';

export function CookieConsent() {
  const [visible, setVisible] = useState(() => {
    if (typeof window === 'undefined') return false;
    return !localStorage.getItem('teksure-cookie-consent');
  });

  if (!visible) return null;

  const accept = () => {
    localStorage.setItem('teksure-cookie-consent', 'accepted');
    setVisible(false);
  };

  return (
    <div role="dialog" aria-label="Cookie consent" className="fixed bottom-0 inset-x-0 z-50 p-2 sm:p-4 no-print">
      <div className="container max-w-3xl mx-auto bg-card border-2 border-border rounded-md shadow-lg px-4 py-3 sm:p-6 flex flex-wrap items-center gap-x-4 gap-y-2">
        <Cookie className="h-6 w-6 text-primary shrink-0 hidden sm:block" aria-hidden="true" />
        <p className="text-base text-muted-foreground flex-1 min-w-[12rem]">
          We use cookies to remember your settings.{' '}
          <a href="/privacy" className="text-primary underline">Privacy Policy</a>
        </p>
        <div className="flex gap-2 shrink-0">
          <Button asChild size="sm" variant="outline" className="hidden sm:inline-flex min-h-[44px] px-4">
            <Link to="/privacy">Learn more</Link>
          </Button>
          <Button size="sm" onClick={accept} className="min-h-[44px] px-6">Accept</Button>
        </div>
      </div>
    </div>
  );
}
