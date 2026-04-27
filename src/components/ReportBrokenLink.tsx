import { useState } from 'react';
import { Flag, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

interface ReportBrokenLinkProps {
  guideSlug: string;
  guideTitle: string;
}

export function ReportBrokenLink({ guideSlug, guideTitle }: ReportBrokenLinkProps) {
  const [reported, setReported] = useState(false);

  const handleReport = () => {
    // Store report in localStorage for now; could connect to Supabase
    const reports = JSON.parse(
      (typeof window !== 'undefined' && localStorage.getItem('teksure-broken-reports')) || '[]'
    );
    reports.push({ slug: guideSlug, title: guideTitle, reportedAt: new Date().toISOString() });
    if (typeof window !== 'undefined') {
      localStorage.setItem('teksure-broken-reports', JSON.stringify(reports));
    }
    setReported(true);
    toast.success('Thank you! We\'ll review this guide for broken links.');
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      className="gap-2 text-muted-foreground hover:text-destructive no-print min-h-[44px]"
      onClick={handleReport}
      disabled={reported}
      aria-label="Report a broken link in this guide"
    >
      {reported ? (
        <><Check className="h-3.5 w-3.5" /> Reported</>
      ) : (
        <><Flag className="h-3.5 w-3.5" /> Report Broken Link</>
      )}
    </Button>
  );
}
