import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { Lock, ChevronRight, ExternalLink, AlertTriangle } from 'lucide-react';

interface Bureau {
  name: string;
  freezeUrl: string;
  phone: string;
  steps: string[];
  notes: string[];
}

const BUREAUS: Bureau[] = [
  {
    name: 'Equifax',
    freezeUrl: 'https://www.equifax.com/personal/credit-report-services/credit-freeze/',
    phone: '1-800-685-1111',
    steps: [
      'Go to equifax.com/personal/credit-report-services/credit-freeze.',
      'Click "Add a freeze".',
      'Sign in or create a myEquifax account (free).',
      'Verify identity with name, SSN, address, last credit account.',
      'Click "Place freeze". Done in about 5 minutes.',
    ],
    notes: [
      'Free, lifetime. No fee to freeze, unfreeze, or refreeze.',
      'Save your PIN — you will need it to lift the freeze later.',
    ],
  },
  {
    name: 'Experian',
    freezeUrl: 'https://www.experian.com/freeze/center.html',
    phone: '1-888-397-3742',
    steps: [
      'Go to experian.com/freeze/center.html.',
      'Click "Add a security freeze".',
      'Sign in or create a free account.',
      'Verify identity (same as Equifax).',
      'Submit. Confirmation by email.',
    ],
    notes: [
      'Free.',
      'Experian also runs CreditWorks (paid monitoring) — DO NOT sign up for that. Stick to the free freeze.',
    ],
  },
  {
    name: 'TransUnion',
    freezeUrl: 'https://www.transunion.com/credit-freeze',
    phone: '1-888-909-8872',
    steps: [
      'Go to transunion.com/credit-freeze.',
      'Click "Add freeze".',
      'Sign in or create a free Service Center account.',
      'Verify identity.',
      'Submit.',
    ],
    notes: [
      'Free.',
      'TransUnion will offer "TrueCredit" monitoring during signup — skip it.',
    ],
  },
];

const REASONS = [
  {
    title: 'It is the single best ID-theft prevention',
    detail: 'A frozen credit file blocks new accounts from being opened in your name. No new credit card, loan, or mortgage can be created without you lifting it first.',
  },
  {
    title: 'It is free, since 2018',
    detail: 'Federal law (the Economic Growth Act) made credit freezes and unfreezes permanently free at all three bureaus. No fee, ever.',
  },
  {
    title: 'It does not affect your credit score',
    detail: 'A freeze locks viewing — your score stays exactly the same. The freeze itself is invisible to lenders unless they try to pull a new report.',
  },
  {
    title: 'It does not stop your existing accounts',
    detail: 'Cards you already have keep working. Auto-pays continue. The freeze only blocks NEW credit pulls.',
  },
  {
    title: 'You can lift it temporarily for a real reason',
    detail: 'Buying a car, applying for a mortgage? Log in to each bureau, lift the freeze for a date range, then it auto-refreezes. Or do permanent — your call.',
  },
];

export default function CreditFreezeWalkthrough() {
  const [done, setDone] = useState<Set<string>>(new Set());

  const toggle = (id: string) => {
    setDone(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <>
      <SEOHead
        title="Credit Freeze Walkthrough"
        description="Freeze your credit at Equifax, Experian, and TransUnion in 15 minutes total. Free, federal-law-protected, the single strongest ID-theft prevention. Step-by-step."
        path="/tools/credit-freeze-walkthrough"
      />
      <Navbar />

      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-blue-50 via-background to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-b border-border py-10 px-4">
          <div className="container max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-3">
              <div className="p-3 bg-blue-500/10 rounded-full">
                <Lock className="h-8 w-8 text-blue-600" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Credit Freeze Walkthrough</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Free at all three bureaus. 15 minutes total. Stops thieves from opening new accounts in your name.
            </p>
          </div>
        </section>

        <div className="container max-w-3xl mx-auto px-4 py-8">
          <PageBreadcrumb segments={[{ label: 'Tools', href: '/tools' }, { label: 'Credit Freeze Walkthrough' }]} />

          <Card className="border-border shadow-sm mb-6">
            <CardContent className="p-5">
              <p className="text-sm font-semibold mb-3">Why freeze your credit?</p>
              <div className="space-y-2">
                {REASONS.map((r, i) => (
                  <div key={i} className="p-3 rounded-lg border border-border bg-muted/30">
                    <p className="font-medium text-sm">{r.title}</p>
                    <p className="text-xs text-muted-foreground mt-1">{r.detail}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Freeze each of the three bureaus</p>
          <p className="text-xs text-muted-foreground mb-3">{done.size} of 3 done</p>

          <div className="space-y-4 mb-6">
            {BUREAUS.map((b, idx) => {
              const id = `bureau-${idx}`;
              const isDone = done.has(id);
              return (
                <Card key={b.name} className={`border-border ${isDone ? 'bg-green-50/50 dark:bg-green-950/20' : ''}`}>
                  <CardContent className="p-5">
                    <div className="flex items-start gap-3 mb-3">
                      <Checkbox checked={isDone} onCheckedChange={() => toggle(id)} className="mt-1" />
                      <div className="flex-1">
                        <p className={`font-semibold text-base ${isDone ? 'line-through text-muted-foreground' : ''}`}>{idx + 1}. {b.name}</p>
                        <Badge variant="outline" className="mt-1">{b.phone}</Badge>
                      </div>
                    </div>

                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Steps</p>
                    <ol className="space-y-1.5 mb-3">
                      {b.steps.map((s, i) => (
                        <li key={i} className="flex gap-2 text-sm">
                          <span className="text-primary font-semibold shrink-0">{i + 1}.</span>
                          <span>{s}</span>
                        </li>
                      ))}
                    </ol>

                    <ul className="space-y-1 mt-3 pt-3 border-t border-border">
                      {b.notes.map((n, i) => (
                        <li key={i} className="text-xs text-muted-foreground flex gap-2">
                          <span className="text-primary">•</span><span>{n}</span>
                        </li>
                      ))}
                    </ul>

                    <a href={b.freezeUrl} target="_blank" rel="noreferrer"
                      className="inline-flex items-center gap-1 mt-3 text-xs text-primary hover:underline">
                      Open {b.name} freeze page <ExternalLink className="h-3 w-3" />
                    </a>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {done.size === 3 && (
            <Card className="border-green-300 bg-green-50 dark:bg-green-950/20 mb-6">
              <CardContent className="p-5 text-center">
                <Badge className="mb-2 bg-green-100 text-green-700 border-green-300">All three frozen</Badge>
                <p className="font-semibold">No new credit can open in your name.</p>
                <p className="text-sm text-muted-foreground mt-1">Save your three PINs in a safe place. You will need them when you want to lift a freeze for a real loan or mortgage.</p>
              </CardContent>
            </Card>
          )}

          <Card className="border-border bg-muted/30 mb-6">
            <CardContent className="p-5">
              <p className="text-sm font-semibold mb-2">Bonus: also freeze ChexSystems and Innovis</p>
              <p className="text-xs text-muted-foreground mb-2">
                Two smaller credit bureaus that ID thieves sometimes use. The same federal protections apply, also free.
              </p>
              <ul className="space-y-1 text-xs">
                <li><a href="https://www.chexsystems.com/security-freeze" target="_blank" rel="noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">ChexSystems freeze <ExternalLink className="h-3 w-3" /></a> — used by banks for new checking accounts</li>
                <li><a href="https://www.innovis.com/personal/securityFreeze" target="_blank" rel="noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">Innovis freeze <ExternalLink className="h-3 w-3" /></a> — used by some lenders</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-amber-300 bg-amber-50 dark:bg-amber-950/20">
            <CardContent className="p-5 flex gap-3">
              <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
              <div className="text-sm">
                <p className="font-semibold mb-1">"Credit lock" vs "credit freeze" — they are not the same</p>
                <p className="text-muted-foreground">
                  The bureaus push paid "credit lock" services (Lock & Alert, etc) that look easier but offer weaker legal protection. A federal credit FREEZE (the option above) is free and protected by federal law. Use the freeze. Skip the paid lock.
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="mt-10 pt-8 border-t border-border">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Related</p>
            <div className="grid sm:grid-cols-3 gap-3">
              <Link to="/tools/id-theft-recovery" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">ID Theft Recovery</p>
                <p className="text-xs text-muted-foreground mt-0.5">If something has already happened.</p>
              </Link>
              <Link to="/tools/credit-report-reader" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Credit Report Reader</p>
                <p className="text-xs text-muted-foreground mt-0.5">Pull and read your reports.</p>
              </Link>
              <Link to="/tools/online-banking-safety" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Online Banking Safety</p>
                <p className="text-xs text-muted-foreground mt-0.5">Lock down accounts you have.</p>
              </Link>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-4 flex items-center gap-1">
            <ChevronRight className="h-3 w-3" /> Quick Tip: write all three PINs on the same card with your tech-will (see /tools/tech-will-builder). Family will need them eventually.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
