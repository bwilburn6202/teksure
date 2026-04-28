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
import {
  ShieldX, ChevronRight, ExternalLink, AlertTriangle,
  CreditCard, KeyRound, Mail, Smartphone, FileText, Banknote,
} from 'lucide-react';

type StolenItem = 'ssn' | 'credit-card' | 'bank-account' | 'email-account' | 'phone-account' | 'mail';

interface RecoveryStep {
  title: string;
  detail: string;
  link?: { label: string; href: string };
  callOut?: string;
}

interface Plan {
  urgent: RecoveryStep[];
  thisWeek: RecoveryStep[];
  ongoing: RecoveryStep[];
}

const ITEMS: { id: StolenItem; label: string; sub: string; icon: typeof KeyRound }[] = [
  { id: 'ssn',           label: 'My Social Security Number', sub: 'SSN, date of birth, full name',         icon: KeyRound },
  { id: 'credit-card',   label: 'A credit or debit card',     sub: 'Number was used, card was lost / stolen', icon: CreditCard },
  { id: 'bank-account',  label: 'My bank login',              sub: 'Online banking password or money moved', icon: Banknote },
  { id: 'email-account', label: 'My email account',           sub: 'Locked out, or someone else logging in',  icon: Mail },
  { id: 'phone-account', label: 'My phone or carrier account', sub: 'SIM swapped, calls forwarded, port-out', icon: Smartphone },
  { id: 'mail',          label: 'Physical mail or documents', sub: 'Mailbox raided, papers stolen',           icon: FileText },
];

function buildPlan(picked: Set<StolenItem>): Plan {
  const plan: Plan = { urgent: [], thisWeek: [], ongoing: [] };

  if (picked.has('credit-card')) {
    plan.urgent.push({
      title: 'Call the card issuer right now',
      detail: 'Find the number on the back of another card or on your last statement. Tell them: "I need to report fraud and freeze this card." They will issue a new card overnight free of charge.',
      callOut: 'Federal law caps your liability at $50 — and most banks waive it entirely if you call quickly.',
    });
    plan.thisWeek.push({
      title: 'Dispute the charges in writing',
      detail: 'After the phone call, send a follow-up letter or use the bank\'s online dispute form. A written record protects you if anything goes sideways later.',
    });
  }

  if (picked.has('bank-account')) {
    plan.urgent.push({
      title: 'Call the bank — ask for the fraud department',
      detail: 'Have them lock the account, change the online password, and reverse any unauthorized transfers. Ask them to flag the account for "elevated verification" so future calls require extra ID.',
    });
    plan.urgent.push({
      title: 'Change the password on every other account that uses the same one',
      detail: 'If you reuse passwords, the attacker can hop to your email, Amazon, PayPal, and so on within hours. Start with email — that is the master key.',
      link: { label: 'Password Health Check', href: '/tools/password-health' },
    });
  }

  if (picked.has('email-account')) {
    plan.urgent.push({
      title: 'Recover the email account',
      detail: 'Go to your provider\'s account-recovery page (gmail.com/recover or account.live.com/acsr). They will text or email a backup contact, ask security questions, and walk you through reset.',
      link: { label: 'Google account recovery', href: 'https://accounts.google.com/signin/recovery' },
    });
    plan.urgent.push({
      title: 'Once back in, check forwarding and filters',
      detail: 'Attackers often add a hidden rule that auto-forwards your password-reset emails to them. Settings → Filters / Rules → delete anything you do not recognise. Same in your sent folder.',
    });
    plan.thisWeek.push({
      title: 'Turn on two-factor authentication',
      detail: 'This is the single change that prevents 99% of email takeovers. Use an app like Authy or Google Authenticator — not just text messages, since SIM swaps defeat texts.',
    });
  }

  if (picked.has('phone-account')) {
    plan.urgent.push({
      title: 'Call your carrier from another phone',
      detail: 'Tell them: "I think I have been SIM swapped or my line was ported out without my permission." Ask them to put a "port-out PIN" on the account so no one can move your number again.',
      callOut: 'Verizon: *611. AT&T: 611. T-Mobile: 611. Each carrier has a fraud team open 24/7.',
    });
    plan.thisWeek.push({
      title: 'Switch any 2-factor code from text to an app',
      detail: 'Banking, email, social media — anything where a text code is sent. SIM swaps work because of those texts. An authenticator app stays on your phone, not your number.',
    });
  }

  if (picked.has('ssn')) {
    plan.urgent.push({
      title: 'Place a fraud alert with all three credit bureaus (free)',
      detail: 'Call any one of them — they will tell the other two. The alert lasts 1 year, requires lenders to verify you in person before opening new credit.',
      link: { label: 'Equifax fraud alert', href: 'https://www.equifax.com/personal/credit-report-services/credit-fraud-alerts/' },
      callOut: 'Equifax: 1-800-685-1111 • Experian: 1-888-397-3742 • TransUnion: 1-888-909-8872.',
    });
    plan.urgent.push({
      title: 'Freeze your credit at all three bureaus (free)',
      detail: 'Stronger than a fraud alert. No new credit can be opened in your name until you "thaw" it. You will need to do this separately at each bureau — about 5 minutes each.',
      link: { label: 'How to freeze credit (FTC)', href: 'https://consumer.ftc.gov/articles/what-know-about-credit-freezes-fraud-alerts' },
    });
    plan.urgent.push({
      title: 'File a report at IdentityTheft.gov',
      detail: 'The FTC builds you a personalised recovery plan based on what was stolen. You will also get an "Identity Theft Report" — proof you can hand banks and credit bureaus.',
      link: { label: 'IdentityTheft.gov', href: 'https://www.identitytheft.gov/' },
    });
    plan.thisWeek.push({
      title: 'Pull your credit reports from all three bureaus',
      detail: 'Free at AnnualCreditReport.com — the only government-authorised site. Look for accounts you do not recognise, addresses that are not yours, and credit inquiries you did not authorise.',
      link: { label: 'AnnualCreditReport.com', href: 'https://www.annualcreditreport.com/' },
    });
    plan.thisWeek.push({
      title: 'Open an SSA "my Social Security" account',
      detail: 'Even if you never plan to use it, having one means a thief cannot create one in your name and reroute your benefits.',
      link: { label: 'SSA.gov', href: 'https://www.ssa.gov/myaccount/' },
    });
    plan.thisWeek.push({
      title: 'Get an IRS Identity Protection PIN',
      detail: 'A 6-digit code only you know. Required to file your tax return. Stops a thief from filing a fake return in your name and stealing your refund.',
      link: { label: 'IRS IP PIN', href: 'https://www.irs.gov/identity-theft-fraud-scams/get-an-identity-protection-pin' },
    });
  }

  if (picked.has('mail')) {
    plan.urgent.push({
      title: 'File a mail-theft report with USPS',
      detail: 'Call the Postal Inspection Service: 1-877-876-2455. If you saw who did it or have video, mention that — they prosecute mail theft as a federal crime.',
      link: { label: 'USPS Inspection Service', href: 'https://www.uspis.gov/report' },
    });
    plan.thisWeek.push({
      title: 'Set up Informed Delivery (free)',
      detail: 'USPS emails you a daily preview of every letter coming. If something never shows up, you know within hours.',
      link: { label: 'Informed Delivery sign-up', href: 'https://informeddelivery.usps.com/' },
    });
  }

  // Always-applicable steps
  plan.thisWeek.push({
    title: 'File a police report',
    detail: 'Banks and credit bureaus will take you more seriously with a report number. Most cities take ID theft reports online or over the phone — you do not need to go in.',
  });

  plan.ongoing.push({
    title: 'Watch your accounts and credit weekly for 90 days',
    detail: 'Most fraud follow-up shows up in the first 60–90 days. Check bank, credit card, and credit reports every Sunday until then.',
  });
  plan.ongoing.push({
    title: 'Keep every receipt, letter, and email in one folder',
    detail: 'Paper or digital — does not matter. If anything escalates (a bill from a debt collector, a denied loan), you will have the timeline ready.',
  });

  if (picked.has('ssn')) {
    plan.ongoing.push({
      title: 'Re-up the fraud alert annually',
      detail: 'Calendar reminder for one year from today — the initial alert expires and you can renew it (or extend to 7 years if you have an Identity Theft Report from IdentityTheft.gov).',
    });
  }

  return plan;
}

export default function IdTheftRecovery() {
  const [picked, setPicked] = useState<Set<StolenItem>>(new Set());
  const [submitted, setSubmitted] = useState(false);

  const toggle = (id: StolenItem) => {
    setPicked(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const plan = submitted ? buildPlan(picked) : null;
  const restart = () => { setPicked(new Set()); setSubmitted(false); };

  return (
    <>
      <SEOHead
        title="ID Theft Recovery Wizard"
        description="Stolen SSN, hacked card, drained bank account? Pick what was taken and get a clear, prioritised recovery plan — calls to make today, things to do this week, and what to watch for next."
        path="/tools/id-theft-recovery"
      />
      <Navbar />

      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-red-50 via-background to-amber-50 dark:from-red-950/20 dark:to-amber-950/20 border-b border-border py-10 px-4">
          <div className="container max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-3">
              <div className="p-3 bg-red-500/10 rounded-full">
                <ShieldX className="h-8 w-8 text-red-600" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">ID Theft Recovery Wizard</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Take a breath. We will give you a clear, prioritised plan in under a minute — calls to make today, things to do this week, and what to watch for next.
            </p>
          </div>
        </section>

        <div className="container max-w-3xl mx-auto px-4 py-8">
          <PageBreadcrumb segments={[{ label: 'Tools', href: '/tools' }, { label: 'ID Theft Recovery' }]} />

          {!submitted ? (
            <Card className="border-border shadow-sm mb-6">
              <CardContent className="p-6">
                <p className="text-sm font-semibold mb-1">What was stolen or compromised?</p>
                <p className="text-xs text-muted-foreground mb-4">Pick everything that applies — even if you are not sure.</p>
                <div className="space-y-2">
                  {ITEMS.map(item => {
                    const Icon = item.icon;
                    const checked = picked.has(item.id);
                    return (
                      <label
                        key={item.id}
                        className={`flex items-start gap-3 p-3 rounded-lg border cursor-pointer transition-all ${
                          checked ? 'border-primary bg-primary/5' : 'border-border hover:bg-muted/40'
                        }`}
                      >
                        <Checkbox checked={checked} onCheckedChange={() => toggle(item.id)} className="mt-1" />
                        <Icon className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium text-sm">{item.label}</p>
                          <p className="text-xs text-muted-foreground mt-0.5">{item.sub}</p>
                        </div>
                      </label>
                    );
                  })}
                </div>

                <Button
                  onClick={() => setSubmitted(true)}
                  disabled={picked.size === 0}
                  size="lg"
                  className="mt-5 gap-2 w-full sm:w-auto"
                >
                  Build my recovery plan <ChevronRight className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ) : (
            <>
              <Card className="border-red-300 bg-red-50 dark:bg-red-950/20 mb-6">
                <CardContent className="p-5 flex gap-3">
                  <AlertTriangle className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm">Do these in order. The "today" calls matter most — every hour counts.</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      We do not store any of your selections. This page generates everything client-side.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {(['urgent', 'thisWeek', 'ongoing'] as const).map(tier => {
                if (!plan || plan[tier].length === 0) return null;
                const tierMeta = {
                  urgent:   { label: 'Today',         emoji: '🟥', desc: 'Phone calls and freezes — within the next few hours.' },
                  thisWeek: { label: 'This week',     emoji: '🟧', desc: 'Paperwork, written follow-ups, longer-form steps.' },
                  ongoing:  { label: 'Going forward', emoji: '🟨', desc: 'Watch and re-up. The fraud usually trickles in over months.' },
                }[tier];
                return (
                  <section key={tier} className="mb-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="outline" className="text-xs">{tierMeta.emoji} {tierMeta.label}</Badge>
                      <p className="text-xs text-muted-foreground">{tierMeta.desc}</p>
                    </div>
                    <div className="space-y-3">
                      {plan[tier].map((step, i) => (
                        <Card key={i} className="border-border">
                          <CardContent className="p-4">
                            <p className="font-semibold text-sm mb-1">{i + 1}. {step.title}</p>
                            <p className="text-sm text-muted-foreground">{step.detail}</p>
                            {step.callOut && (
                              <p className="text-xs mt-2 p-2 rounded bg-muted/40 border border-border">
                                <strong>Tip:</strong> {step.callOut}
                              </p>
                            )}
                            {step.link && (
                              step.link.href.startsWith('/') ? (
                                <Link to={step.link.href}
                                  className="inline-flex items-center gap-1 mt-2 text-xs text-primary hover:underline">
                                  {step.link.label} <ChevronRight className="h-3 w-3" />
                                </Link>
                              ) : (
                                <a href={step.link.href} target="_blank" rel="noreferrer"
                                  className="inline-flex items-center gap-1 mt-2 text-xs text-primary hover:underline">
                                  {step.link.label} <ExternalLink className="h-3 w-3" />
                                </a>
                              )
                            )}
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </section>
                );
              })}

              <div className="flex flex-wrap gap-3 mt-6">
                <Button variant="outline" onClick={restart}>Start over</Button>
                <Button asChild>
                  <Link to="/tools/scam-witness-statement">Build a witness statement</Link>
                </Button>
              </div>
            </>
          )}

          <div className="mt-10 pt-8 border-t border-border">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Related</p>
            <div className="grid sm:grid-cols-3 gap-3">
              <Link to="/tools/scam-message-decoder" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Scam Message Decoder</p>
                <p className="text-xs text-muted-foreground mt-0.5">Spot the next attempt before you click.</p>
              </Link>
              <Link to="/tools/password-health" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Password Health Check</p>
                <p className="text-xs text-muted-foreground mt-0.5">See if your password is in a known breach.</p>
              </Link>
              <Link to="/scam-defense" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Scam Defense Center</p>
                <p className="text-xs text-muted-foreground mt-0.5">All scam protection in one place.</p>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
