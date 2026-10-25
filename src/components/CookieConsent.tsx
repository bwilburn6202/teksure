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
    // Sits above the mobile bottom nav (56px + safe area) below lg, at the bottom edge on desktop.
    <div role="dialog" aria-label="Cookie consent" className="fixed inset-x-0 bottom-[calc(56px+env(safe-area-inset-bottom))] lg:bottom-0 z-50 p-3 sm:p-4 no-print">
      <div className="mx-auto max-w-3xl bg-card border-2 border-border rounded-xl shadow-lg p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
        <Cookie className="h-6 w-6 text-primary shrink-0 hidden sm:block" aria-hidden="true" />
        <p className="text-base text-foreground flex-1">
          We use cookies to improve your experience and remember your preferences.
          See our <a href="/privacy" className="text-primary underline underline-offset-4">Privacy Policy</a> for details.
        </p>
        <div className="flex gap-2 shrink-0 self-stretch sm:self-auto [&>*]:flex-1 sm:[&>*]:flex-none">
          <Button asChild size="sm" variant="outline" className="min-h-[44px] px-4">
            <Link to="/privacy">Learn more</Link>
          </Button>
          <Button size="sm" onClick={accept} className="min-h-[44px] px-4">Accept</Button>
        </div>
      </div>
    </div>
  );
}
