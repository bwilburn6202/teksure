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
    <div role="dialog" aria-label="Cookie consent" className="fixed bottom-0 inset-x-0 z-50 p-4 no-print">
      <div className="container max-w-3xl mx-auto bg-card border border-border rounded-xl shadow-lg p-4 sm:p-6 flex flex-col sm:flex-row items-center gap-4">
        <Cookie className="h-6 w-6 text-primary shrink-0 hidden sm:block" aria-hidden="true" />
        <p className="text-sm text-muted-foreground flex-1">
          We use cookies to improve your experience and remember your preferences.
          See our <a href="/privacy" className="text-primary underline">Privacy Policy</a> for details.
        </p>
        <div className="flex gap-2 shrink-0">
          <Button asChild size="sm" variant="outline">
            <Link to="/privacy">Learn more</Link>
          </Button>
          <Button size="sm" onClick={accept}>Accept</Button>
        </div>
      </div>
    </div>
  );
}
