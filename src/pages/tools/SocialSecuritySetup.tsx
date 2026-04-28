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
import { Shield, ChevronRight, ExternalLink, AlertTriangle, type LucideIcon } from 'lucide-react';

interface Section {
  id: string;
  title: string;
  icon: LucideIcon;
  why: string;
  steps: { id: string; title: string; detail: string; }[];
}

const SECTIONS: Section[] = [
  {
    id: 'create',
    title: 'Create the account (do this even if you are not retired)',
    icon: Shield,
    why: 'A "my Social Security" account lets you check earnings, estimate benefits, change direct deposit, and most importantly — keeps a thief from creating one in your name.',
    steps: [
      { id: 'c1', title: 'Go to ssa.gov', detail: 'On a computer (easier than phone). Click "Sign In" → "Create an Account".' },
      { id: 'c2', title: 'Sign up through Login.gov or ID.me', detail: 'Both are official identity-verification systems used across federal sites. Login.gov is simpler if you do not already have ID.me.' },
      { id: 'c3', title: 'Verify your identity', detail: 'You will need: Social Security number, mailing address, last 8 digits of a credit card, mortgage, or auto loan account number.' },
      { id: 'c4', title: 'Set a strong passphrase', detail: 'Run yours through Password Health Check first. Set it once and write it on a card kept in a safe place — you will use this maybe twice a year.' },
      { id: 'c5', title: 'Enable two-factor authentication', detail: 'After login, go to "Security" → enable 2FA via text or authenticator app. Authenticator app is stronger.' },
    ],
  },
  {
    id: 'earnings',
    title: 'Check your earnings record',
    icon: Shield,
    why: 'Your future benefits are calculated from this. Errors here cost real money. Check it once a year.',
    steps: [
      { id: 'e1', title: 'Sign in → "View Earnings Record"', detail: 'Lists every year of your work history that the SSA has on file.' },
      { id: 'e2', title: 'Compare to your tax records', detail: 'Especially: years you had multiple jobs, years you were self-employed, years where the W-2 had errors. Find any year that does not match.' },
      { id: 'e3', title: 'Report errors right away', detail: 'There is a form on the same page. Provide the W-2 or 1099 — keep them after retirement specifically for this.' },
      { id: 'e4', title: 'Set a yearly reminder', detail: 'Calendar event: "Check SSA earnings record" → repeats annually in January when last year\'s W-2 is in.' },
    ],
  },
  {
    id: 'benefits',
    title: 'Estimate your benefits',
    icon: Shield,
    why: 'See what you\'ll get at 62, 67, and 70 — and decide what to do.',
    steps: [
      { id: 'b1', title: 'Sign in → "Estimate Your Benefits"', detail: 'The estimator uses your real earnings record. Far more accurate than the public calculator.' },
      { id: 'b2', title: 'Compare claiming ages', detail: 'Try 62, 67, and 70. Each year you wait between 67 and 70 grows your benefit by about 8% — the best low-risk return in finance.' },
      { id: 'b3', title: 'Factor in spousal benefits', detail: 'If married, you may be able to claim half of a spouse\'s benefit while letting yours grow. The estimator shows this.' },
      { id: 'b4', title: 'Save the estimate as a PDF', detail: 'Print or save. Useful for retirement planning meetings, financial advisors, and family conversations.' },
    ],
  },
  {
    id: 'direct',
    title: 'Set up direct deposit',
    icon: Shield,
    why: 'Faster than checks. Cannot be stolen from the mailbox.',
    steps: [
      { id: 'd1', title: 'Sign in → "Direct Deposit"', detail: 'Find this under "Benefits and Payments". You will need: bank name, routing number, account number.' },
      { id: 'd2', title: 'Ignore any phone call about direct deposit', detail: 'A common scam: "We need to verify your direct deposit." SSA does not call about this. Always set it up through ssa.gov yourself.' },
      { id: 'd3', title: 'Confirm by waiting one cycle', detail: 'Next month\'s payment lands in your account on schedule. Then you know it worked.' },
    ],
  },
];

export default function SocialSecuritySetup() {
  const [done, setDone] = useState<Set<string>>(new Set());
  const total = SECTIONS.reduce((s, x) => s + x.steps.length, 0);

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
        title="My Social Security Setup"
        description="Create your my Social Security account at ssa.gov, check your earnings record, estimate benefits, set up direct deposit. Free, official, and one of the best ID-theft preventers there is."
        path="/tools/social-security-setup"
      />
      <Navbar />

      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-blue-50 via-background to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-b border-border py-10 px-4">
          <div className="container max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-3">
              <div className="p-3 bg-blue-500/10 rounded-full">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">My Social Security Setup</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Create your free account at ssa.gov. Check earnings, estimate benefits — and stop a thief from creating one in your name.
            </p>
          </div>
        </section>

        <div className="container max-w-3xl mx-auto px-4 py-8">
          <PageBreadcrumb segments={[{ label: 'Tools', href: '/tools' }, { label: 'My Social Security Setup' }]} />

          <Card className="border-amber-300 bg-amber-50 dark:bg-amber-950/20 mb-6">
            <CardContent className="p-5 flex gap-3">
              <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
              <div className="text-sm">
                <p className="font-semibold mb-1">Even if you are not retired yet — set this up</p>
                <p className="text-muted-foreground">
                  Identity thieves create my Social Security accounts in other people\'s names to redirect benefits when those people retire. Once you have created yours, no one else can. 15 minutes today, decades of protection.
                </p>
              </div>
            </CardContent>
          </Card>

          <p className="text-sm text-muted-foreground mb-3">{done.size} of {total} done</p>

          {SECTIONS.map(s => {
            const Icon = s.icon;
            return (
              <section key={s.id} id={s.id} className="mb-6 scroll-mt-24">
                <div className="flex items-start gap-3 mb-2">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold">{s.title}</h2>
                    <p className="text-xs text-muted-foreground italic mt-0.5">{s.why}</p>
                  </div>
                </div>
                <Card className="border-border">
                  <CardContent className="p-5">
                    <div className="space-y-2">
                      {s.steps.map(step => (
                        <label key={step.id}
                          className={`flex items-start gap-3 p-3 rounded-lg border cursor-pointer transition-all ${
                            done.has(step.id) ? 'border-green-300 bg-green-50/50 dark:bg-green-950/20' : 'border-border hover:bg-muted/40'
                          }`}>
                          <Checkbox checked={done.has(step.id)} onCheckedChange={() => toggle(step.id)} className="mt-1" />
                          <div className="flex-1">
                            <p className={`font-medium text-sm ${done.has(step.id) ? 'line-through text-muted-foreground' : ''}`}>{step.title}</p>
                            <p className="text-xs text-muted-foreground mt-1">{step.detail}</p>
                          </div>
                        </label>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </section>
            );
          })}

          <Card className="border-border mb-6">
            <CardContent className="p-5">
              <p className="text-sm font-semibold mb-3">Useful direct links</p>
              <ul className="space-y-2 text-sm">
                <li><a href="https://www.ssa.gov/myaccount/" target="_blank" rel="noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">ssa.gov/myaccount <ExternalLink className="h-3 w-3" /></a> — main login</li>
                <li><a href="https://secure.ssa.gov/RIL/SiView.do" target="_blank" rel="noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">Estimate Benefits <ExternalLink className="h-3 w-3" /></a> — public calculator (no account needed)</li>
                <li><a href="https://faq.ssa.gov" target="_blank" rel="noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">faq.ssa.gov <ExternalLink className="h-3 w-3" /></a> — official FAQs</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-amber-300 bg-amber-50 dark:bg-amber-950/20">
            <CardContent className="p-5 flex gap-3">
              <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
              <div className="text-sm">
                <p className="font-semibold mb-1">Watch for "SSA" calls</p>
                <p className="text-muted-foreground">
                  The SSA does NOT call you with threats about your number being suspended. It does NOT ask you to verify your number by phone. If anyone calls claiming to be from Social Security, hang up. The real SSA writes paper letters and answers calls only when you call THEM at 1-800-772-1213.
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="mt-10 pt-8 border-t border-border">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Related</p>
            <div className="grid sm:grid-cols-3 gap-3">
              <Link to="/tools/medicare-plan-chooser" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Medicare Plan Chooser</p>
                <p className="text-xs text-muted-foreground mt-0.5">Pair with the right Medicare plan.</p>
              </Link>
              <Link to="/tools/id-theft-recovery" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">ID Theft Recovery</p>
                <p className="text-xs text-muted-foreground mt-0.5">If something has gone wrong.</p>
              </Link>
              <Link to="/tools/password-health" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Password Health Check</p>
                <p className="text-xs text-muted-foreground mt-0.5">Strong passphrase first.</p>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
