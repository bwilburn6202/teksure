import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ShieldAlert, X, Phone, KeyRound, Flag, Users, Ban, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const steps = [
  {
    icon: Ban,
    title: 'Stop all contact immediately',
    description: 'Hang up the phone, close the email, or stop replying to the message. Do not send any more money or information.',
  },
  {
    icon: Phone,
    title: 'Call your bank right now',
    description: 'Tell them you may have been scammed. They can freeze your account and sometimes reverse payments.',
    action: { label: 'Find your bank\'s number', href: '/tools/scam-report' },
  },
  {
    icon: KeyRound,
    title: 'Change your passwords',
    description: 'Change the password for any account you shared details about. Start with your email and banking passwords.',
  },
  {
    icon: Flag,
    title: 'Report it to the FTC',
    description: 'Go to ReportFraud.ftc.gov or call 1-877-382-4357. Your report helps protect others.',
    action: { label: 'Call the FTC', href: 'tel:18773824357' },
  },
  {
    icon: Users,
    title: 'Tell someone you trust',
    description: "Talk to a family member, friend, or neighbor. You are not alone and this is not your fault — scammers are professionals.",
  },
];

export function ScamPanicButton() {
  const [open, setOpen] = useState(false);
  const [checked, setChecked] = useState<boolean[]>(new Array(steps.length).fill(false));

  // Escape closes the modal — standard dialog dismiss behavior. Mounted
  // only while open so the listener doesn't run on every page.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  const toggle = (i: number) => {
    setChecked(prev => {
      const next = [...prev];
      next[i] = !next[i];
      return next;
    });
  };

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 left-6 z-50 hidden md:flex items-center gap-2 rounded-full bg-destructive px-4 py-3 text-sm font-semibold text-destructive-foreground shadow-lg hover:bg-destructive/90 transition-colors no-print"
        aria-label="I think I've been scammed — get help now"
        aria-haspopup="dialog"
      >
        <ShieldAlert className="h-5 w-5" aria-hidden="true" />
        <span className="hidden sm:inline">Been Scammed?</span>
      </button>
    );
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="scam-panic-heading"
      className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-sm overflow-y-auto no-print"
    >
      <div className="container max-w-lg mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <ShieldAlert className="h-7 w-7 text-destructive" aria-hidden="true" />
              <h1 id="scam-panic-heading" className="text-2xl font-bold tracking-tight">Don't Panic</h1>
            </div>
            <p className="text-muted-foreground">
              Follow these steps one at a time. You can sort this out.
            </p>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setOpen(false)}
            className="rounded-full"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Steps */}
        <div className="space-y-4">
          {steps.map((step, i) => (
            <button
              key={step.title}
              onClick={() => toggle(i)}
              aria-pressed={checked[i]}
              aria-label={`Step ${i + 1}: ${step.title}${checked[i] ? ' (done)' : ''}`}
              className={`w-full text-left rounded-2xl border p-5 transition-all ${
                checked[i]
                  ? 'border-primary/30 bg-primary/5'
                  : 'border-border bg-card hover:border-border/80'
              }`}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full ${
                    checked[i] ? 'bg-primary text-primary-foreground' : 'bg-muted'
                  }`}
                  aria-hidden="true"
                >
                  {checked[i] ? (
                    <CheckCircle2 className="h-5 w-5" />
                  ) : (
                    <span className="text-sm font-bold">{i + 1}</span>
                  )}
                </div>
                <div className="flex-1">
                  <h3 className={`font-semibold text-base mb-1 ${checked[i] ? 'line-through opacity-60' : ''}`} aria-hidden="true">
                    {step.title}
                  </h3>
                  <p className={`text-sm text-muted-foreground ${checked[i] ? 'opacity-50' : ''}`}>
                    {step.description}
                  </p>
                  {step.action && !checked[i] && (
                    <a
                      href={step.action.href}
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1.5 mt-3 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
                    >
                      <Phone className="h-4 w-4" aria-hidden="true" />
                      {step.action.label}
                    </a>
                  )}
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Footer reassurance */}
        <div className="mt-8 rounded-2xl bg-muted/50 p-5 text-center">
          <p className="text-sm text-muted-foreground">
            <strong className="text-foreground">Remember:</strong> Scammers are professionals.
            Being scammed does not mean you did something wrong. Thousands of people are targeted every day.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-4">
            <Link
              to="/tools/scam-report"
              className="text-sm font-medium text-primary hover:underline"
              onClick={() => setOpen(false)}
            >
              Report a scam on TekSure
            </Link>
            <span className="hidden sm:inline text-muted-foreground">·</span>
            <Link
              to="/safety/scam-alerts"
              className="text-sm font-medium text-primary hover:underline"
              onClick={() => setOpen(false)}
            >
              Learn how to spot scams
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
