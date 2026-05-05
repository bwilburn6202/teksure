import { useMemo, useState } from 'react';
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
  KeyRound,
  ShieldCheck,
  Mail,
  Building2,
  CreditCard,
  Phone,
  Smartphone,
  AlertTriangle,
  CheckCircle2,
  Printer,
  RotateCcw,
  ChevronRight,
  Lock,
  ArrowRight,
} from 'lucide-react';

interface AccountType {
  id: string;
  label: string;
  priority: number; // 1 = most important to recover first
  icon: typeof KeyRound;
  why: string;
  recoverySteps: string[];
}

const ACCOUNTS: AccountType[] = [
  {
    id: 'email',
    label: 'Primary email (Gmail, Yahoo, Outlook, iCloud)',
    priority: 1,
    icon: Mail,
    why: 'Email is the master key. Most other accounts use email-based password resets, so losing your email locks you out of everything else.',
    recoverySteps: [
      'Print your account recovery codes from each email provider — Gmail at myaccount.google.com/security, Yahoo at login.yahoo.com/account/security, iCloud at appleid.apple.com.',
      'Add a recovery phone number AND a recovery email at a different provider — so if Gmail goes down, you can recover via Yahoo or iCloud.',
      'Add a trusted family member as a recovery contact (Apple, Google, and Microsoft all support this).',
    ],
  },
  {
    id: 'apple-google-id',
    label: 'Apple ID or Google Account (whole-phone account)',
    priority: 1,
    icon: Smartphone,
    why: 'Losing this account locks you out of all your photos, contacts, app purchases, and synced data. Recovery without a backup plan can take 2 weeks or longer.',
    recoverySteps: [
      'Apple ID: enable Account Recovery Contacts at appleid.apple.com → Account Security → add 1–2 family members.',
      'Apple ID: print your Recovery Key — appleid.apple.com → Account Security → Recovery Key.',
      'Google: visit myaccount.google.com → Security → 2-Step Verification → Backup codes → Get codes → print and store.',
    ],
  },
  {
    id: 'bank',
    label: 'Bank account (Chase, Wells Fargo, BoA, Citi, etc.)',
    priority: 2,
    icon: Building2,
    why: 'Bank apps usually require text-message codes for login on a new phone. If you lose your phone before the new one is set up, you may be locked out for 24–72 hours.',
    recoverySteps: [
      'Confirm your bank has your CURRENT mobile phone number on file. If you change phone numbers, update with the bank within a week.',
      'Enable a backup verification method — most banks let you choose phone OR email OR security questions.',
      'Save your bank\'s fraud line phone number (on the back of your debit card) in your contacts.',
    ],
  },
  {
    id: 'credit-card',
    label: 'Credit card accounts (Visa, Mastercard, Amex, Discover)',
    priority: 3,
    icon: CreditCard,
    why: 'Most card issuers can re-verify by mail, but it takes 5–10 days. Faster recovery requires a backup phone or email on file.',
    recoverySteps: [
      'Each card website (chase.com, americanexpress.com, etc.) has Security Settings → Verification Methods. Add an alternate phone number or email.',
      'Keep printed statements for at least 12 months — they prove the account is yours if everything else fails.',
    ],
  },
  {
    id: 'social-security',
    label: 'Social Security online (my Social Security at ssa.gov)',
    priority: 2,
    icon: ShieldCheck,
    why: 'My Social Security uses Login.gov or ID.me with strict identity verification. Recovery requires uploading a photo of your driver license — without smartphone access, this is hard.',
    recoverySteps: [
      'Sign in once via a computer — not just your phone — so you have a fallback.',
      'Print your Login.gov backup codes: login.gov → Your account → Backup codes → Download.',
      'Keep a paper copy in the same place you keep your Social Security card.',
    ],
  },
  {
    id: 'medicare',
    label: 'Medicare account (medicare.gov)',
    priority: 3,
    icon: ShieldCheck,
    why: 'Medicare uses the same Login.gov / ID.me system as Social Security. Recovery is moderately difficult and requires the same identity-verification process.',
    recoverySteps: [
      'If you have a my Social Security backup plan, you also have a Medicare backup plan — same login system.',
      'Print your Medicare card information and keep it with your other vital documents.',
    ],
  },
  {
    id: 'authenticator-app',
    label: 'Authenticator app (Google Authenticator, Authy, Microsoft Authenticator)',
    priority: 1,
    icon: KeyRound,
    why: 'If your phone is lost or replaced, the codes in your authenticator app may NOT transfer automatically. You need backup codes for every account that uses the authenticator.',
    recoverySteps: [
      'Switch to Authy or Microsoft Authenticator — both back up your codes to the cloud (Google Authenticator does too if you sign in to Google in the app).',
      'For every account that has 2FA enabled, log in on a computer, find Security Settings, and download backup codes (they look like "1a2b-3c4d-5e6f"). Print them.',
      'Store printed backup codes in a sealed envelope with your important paperwork.',
    ],
  },
  {
    id: 'phone-carrier',
    label: 'Phone carrier (Verizon, AT&T, T-Mobile)',
    priority: 2,
    icon: Phone,
    why: 'A SIM-swap attack — where a scammer transfers your phone number to their phone — bypasses most 2FA. Carrier security PINs prevent this.',
    recoverySteps: [
      'Call your carrier (or visit their website) and add a "Number Transfer PIN" or "Account PIN" — a 4–8 digit number required to move your phone number.',
      'Verizon: account.verizon.com → Profile → Security. AT&T: att.com/myatt → Profile → Wireless Passcode. T-Mobile: t-mobile.com → Profile → Account Security.',
      'Pick a PIN that is not a birthday, anniversary, or last 4 of SSN.',
    ],
  },
  {
    id: 'social-media',
    label: 'Social media (Facebook, Instagram, X)',
    priority: 4,
    icon: KeyRound,
    why: 'Lower priority than financial accounts, but still useful — Facebook in particular has long recovery windows and is hard to get back without backup options.',
    recoverySteps: [
      'Facebook: Settings → Security and Login → set up Trusted Contacts (3–5 friends who can help you regain access).',
      'Each platform: print backup codes from Settings → Security → Two-Factor Authentication.',
    ],
  },
];

const STORAGE_OPTIONS = [
  {
    label: 'A locked drawer or filing cabinet at home',
    pros: 'Free. You can find it quickly. No one else has access without a key.',
    cons: 'Lost in a fire, flood, or burglary. Family can\'t find it without you.',
    bestFor: 'Most people. The realistic best option for printed codes if you live alone or with a spouse.',
  },
  {
    label: 'A safe deposit box at your bank',
    pros: 'Fireproof, theft-proof, and your bank keeps it safe.',
    cons: '$30–$80/year. Only accessible during bank hours. Cannot reach it in an emergency on Sunday.',
    bestFor: 'Backup copies and items you do not need urgently — second copies of recovery codes alongside birth certificates and wills.',
  },
  {
    label: 'A password manager (1Password, Bitwarden, iCloud Keychain)',
    pros: 'Available from any of your devices. Encrypted. Easy to share with family.',
    cons: 'Requires you to remember the master password. Backup codes inside a password manager are useless if you lose access to the password manager.',
    bestFor: 'Storing the original passwords and codes. NOT for storing the master password itself or the recovery codes for the password manager.',
  },
  {
    label: 'A sealed envelope with a trusted family member',
    pros: 'Your family can help you recover if you cannot.',
    cons: 'Requires real trust. They could open it without you knowing.',
    bestFor: 'Adult children or a long-term spouse you trust completely. Make sure they understand they should NOT open it unless you ask.',
  },
];

export default function TwoFactorRecoveryPlan() {
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [showPlan, setShowPlan] = useState(false);

  const toggle = (id: string) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const selectedAccounts = useMemo(() => {
    return ACCOUNTS.filter((a) => selected.has(a.id)).sort((a, b) => a.priority - b.priority);
  }, [selected]);

  const reset = () => {
    setSelected(new Set());
    setShowPlan(false);
  };

  const handlePrint = () => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  return (
    <>
      <SEOHead
        title="Two-Factor Recovery Plan Builder — Don't Get Locked Out | TekSure"
        description="A printable backup plan for every 2-factor-authenticated account: bank, email, Apple ID, Google. Step-by-step recovery codes setup so you can replace a lost phone safely."
        path="/tools/two-factor-recovery-plan"
      />
      <Navbar />

      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-indigo-50 via-background to-emerald-50 dark:from-indigo-950/20 dark:to-emerald-950/20 border-b border-border py-10 px-4 print:hidden">
          <div className="container max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-3">
              <div className="p-3 bg-indigo-500/10 rounded-full">
                <KeyRound className="h-8 w-8 text-indigo-600" aria-hidden="true" />
              </div>
            </div>
            <Badge variant="secondary" className="mb-3">Free Tool · 5 minutes</Badge>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              Two-Factor Recovery Plan Builder
            </h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              If your phone is lost, stolen, or replaced, two-factor codes don\'t always come along.
              This tool builds a printable plan so you can get back into every important account.
            </p>
          </div>
        </section>

        <div className="container max-w-3xl mx-auto px-4 py-8 space-y-6">
          <PageBreadcrumb
            segments={[
              { label: 'Tools', href: '/tools' },
              { label: '2FA Recovery Plan' },
            ]}
          />

          {!showPlan && (
            <>
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-lg font-semibold mb-2">Step 1: Which accounts have 2-factor turned on?</h2>
                  <p className="text-sm text-muted-foreground mb-5">
                    Check every account where you receive a text code, use an authenticator app, or
                    get a code by email when you sign in. We\'ll build a recovery plan for each.
                  </p>

                  <div className="space-y-3">
                    {ACCOUNTS.map((acc) => {
                      const Icon = acc.icon;
                      const checked = selected.has(acc.id);
                      return (
                        <label
                          key={acc.id}
                          className={`flex items-start gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                            checked
                              ? 'border-primary bg-primary/5'
                              : 'border-border hover:border-primary/40 hover:bg-muted/40'
                          }`}
                        >
                          <Checkbox
                            checked={checked}
                            onCheckedChange={() => toggle(acc.id)}
                            aria-label={acc.label}
                          />
                          <Icon
                            className={`h-5 w-5 mt-0.5 flex-shrink-0 ${
                              checked ? 'text-primary' : 'text-muted-foreground'
                            }`}
                            aria-hidden="true"
                          />
                          <div className="min-w-0 flex-1">
                            <p className="font-medium">{acc.label}</p>
                            <p className="text-xs text-muted-foreground mt-0.5">{acc.why}</p>
                          </div>
                        </label>
                      );
                    })}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <Button
                      size="lg"
                      onClick={() => setShowPlan(true)}
                      disabled={selected.size === 0}
                      className="gap-2"
                    >
                      Build my plan ({selected.size} {selected.size === 1 ? 'account' : 'accounts'})
                      <ChevronRight className="h-4 w-4" aria-hidden="true" />
                    </Button>
                    {selected.size > 0 && (
                      <Button variant="outline" onClick={reset} size="lg">
                        Clear
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-dashed">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <h3 className="font-semibold mb-1">Why this matters</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Two-factor authentication is excellent security — but if you lose your phone
                        without a backup plan, recovery can take 2 days for a bank account or 2
                        weeks for an Apple ID. Most people only realize this AFTER they need it.
                        Spending 30 minutes today on a plan saves real heartache later.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </>
          )}

          {showPlan && (
            <>
              <div className="flex flex-wrap items-center justify-between gap-3 print:hidden">
                <h2 className="text-2xl font-bold">Your Recovery Plan</h2>
                <div className="flex gap-2">
                  <Button variant="outline" onClick={handlePrint} className="gap-2">
                    <Printer className="h-4 w-4" aria-hidden="true" /> Print
                  </Button>
                  <Button variant="outline" onClick={reset} className="gap-2">
                    <RotateCcw className="h-4 w-4" aria-hidden="true" /> Start over
                  </Button>
                </div>
              </div>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4 flex items-center gap-2">
                    <Lock className="h-5 w-5 text-muted-foreground" aria-hidden="true" />
                    Recover these accounts in this order
                  </h3>
                  <p className="text-sm text-muted-foreground mb-5">
                    Higher priority means recovery is more urgent or unblocks other accounts. Work
                    through them in order — start with the highest-priority account.
                  </p>

                  <div className="space-y-4">
                    {selectedAccounts.map((acc, i) => {
                      const Icon = acc.icon;
                      return (
                        <div
                          key={acc.id}
                          className="rounded-xl border bg-card p-5 space-y-3 break-inside-avoid"
                        >
                          <div className="flex items-start gap-3">
                            <div className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                              <span className="text-sm font-bold text-primary">{i + 1}</span>
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 flex-wrap">
                                <Icon className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
                                <h4 className="font-semibold">{acc.label}</h4>
                              </div>
                              <p className="text-sm text-muted-foreground mt-1">{acc.why}</p>
                            </div>
                          </div>
                          <ul className="ml-12 space-y-2 text-sm">
                            {acc.recoverySteps.map((step, j) => (
                              <li key={j} className="flex gap-2">
                                <CheckCircle2 className="h-4 w-4 text-emerald-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                                <span>{step}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Where to store your printed codes</h3>
                  <div className="space-y-3">
                    {STORAGE_OPTIONS.map((opt) => (
                      <div key={opt.label} className="rounded-xl border bg-card p-4 break-inside-avoid">
                        <h4 className="font-semibold mb-2">{opt.label}</h4>
                        <div className="grid sm:grid-cols-3 gap-3 text-xs">
                          <div>
                            <p className="font-medium text-emerald-700 dark:text-emerald-400 mb-1">Pros</p>
                            <p className="text-muted-foreground">{opt.pros}</p>
                          </div>
                          <div>
                            <p className="font-medium text-amber-700 dark:text-amber-400 mb-1">Cons</p>
                            <p className="text-muted-foreground">{opt.cons}</p>
                          </div>
                          <div>
                            <p className="font-medium text-primary mb-1">Best for</p>
                            <p className="text-muted-foreground">{opt.bestFor}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <ArrowRight className="h-5 w-5 text-primary" aria-hidden="true" />
                    The 30-minute action plan
                  </h3>
                  <ol className="space-y-3 text-sm">
                    <li className="flex gap-3">
                      <span className="font-bold text-primary">1.</span>
                      <span>
                        Sit down at a computer (not your phone) with a printer ready. You will need
                        to log into each account.
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="font-bold text-primary">2.</span>
                      <span>
                        For each account above, log in → find Security or Privacy settings → look
                        for "Backup codes" or "Recovery codes" → click Generate → print the page.
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="font-bold text-primary">3.</span>
                      <span>
                        Label each printout with the account name. Put them all in one envelope.
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="font-bold text-primary">4.</span>
                      <span>
                        Choose ONE storage location from the list above. Put the envelope there.
                        Tell one trusted family member where it is (without showing them the
                        contents).
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="font-bold text-primary">5.</span>
                      <span>
                        Repeat once a year — backup codes get used up if you ever need them, and
                        accounts add new security features over time.
                      </span>
                    </li>
                  </ol>
                </CardContent>
              </Card>

              <Card className="bg-muted/30 print:hidden">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-3">Related help</h3>
                  <div className="flex flex-wrap gap-2">
                    <Button asChild variant="outline" size="sm">
                      <Link to="/guides/two-factor-authentication-guide">2FA Setup Guide</Link>
                    </Button>
                    <Button asChild variant="outline" size="sm">
                      <Link to="/tools/account-recovery">Account Recovery Tool</Link>
                    </Button>
                    <Button asChild variant="outline" size="sm">
                      <Link to="/guides/new-phone-first-day-setup-checklist">New Phone Setup</Link>
                    </Button>
                    <Button asChild variant="outline" size="sm">
                      <Link to="/tekbrain">Ask TekBrain</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </>
          )}

          <p className="text-xs text-muted-foreground text-center max-w-prose mx-auto print:mt-6">
            Built from public guidance by Apple, Google, Microsoft, and the FTC. Nothing you select
            on this page is recorded — the plan is generated entirely in your browser.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
