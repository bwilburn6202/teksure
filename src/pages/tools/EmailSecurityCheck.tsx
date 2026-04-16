import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ShieldCheck, Mail, ExternalLink, ChevronDown, ChevronUp, Lightbulb, CheckCircle } from 'lucide-react';

type Provider = 'gmail' | 'outlook' | 'yahoo';

interface CheckItem {
  label: string;
  description: string;
  links: Record<Provider, string>;
}

const checkItems: CheckItem[] = [
  { label: 'Two-factor authentication (2FA) is turned on', description: 'This adds a second step when you sign in, like a code sent to your phone.', links: { gmail: 'https://myaccount.google.com/signinoptions/two-step-verification', outlook: 'https://account.microsoft.com/security', yahoo: 'https://login.yahoo.com/account/security' } },
  { label: 'Strong, unique password is set', description: 'Your email password should be at least 12 characters and not used on any other site.', links: { gmail: 'https://myaccount.google.com/signinoptions/password', outlook: 'https://account.microsoft.com/security', yahoo: 'https://login.yahoo.com/account/security' } },
  { label: 'Recovery email is set up', description: 'A backup email address lets you get back into your account if you are locked out.', links: { gmail: 'https://myaccount.google.com/recovery/email', outlook: 'https://account.microsoft.com/security', yahoo: 'https://login.yahoo.com/account/security' } },
  { label: 'Suspicious login alerts are on', description: 'Get notified if someone tries to sign in from a new device or location.', links: { gmail: 'https://myaccount.google.com/notifications', outlook: 'https://account.microsoft.com/security', yahoo: 'https://login.yahoo.com/account/security' } },
  { label: 'Forwarding rules checked', description: 'Hackers sometimes set up email forwarding to secretly copy your messages.', links: { gmail: 'https://mail.google.com/mail/u/0/#settings/fwdandpop', outlook: 'https://outlook.live.com/mail/0/options/mail/rules', yahoo: 'https://mail.yahoo.com/' } },
  { label: 'Connected apps reviewed', description: 'Remove apps or services you no longer use that have access to your email.', links: { gmail: 'https://myaccount.google.com/permissions', outlook: 'https://account.microsoft.com/privacy/app-access', yahoo: 'https://login.yahoo.com/account/security' } },
  { label: 'Recent login locations checked', description: 'Review where your account has been accessed from recently.', links: { gmail: 'https://myaccount.google.com/device-activity', outlook: 'https://account.microsoft.com/security', yahoo: 'https://login.yahoo.com/account/activity' } },
  { label: 'Backup codes saved', description: 'Print or write down backup codes in case you lose access to your phone.', links: { gmail: 'https://myaccount.google.com/signinoptions/two-step-verification', outlook: 'https://account.microsoft.com/security', yahoo: 'https://login.yahoo.com/account/security' } },
  { label: 'Account recovery options verified', description: 'Make sure your phone number and backup email are current.', links: { gmail: 'https://myaccount.google.com/recovery/phone', outlook: 'https://account.microsoft.com/security', yahoo: 'https://login.yahoo.com/account/security' } },
  { label: 'Spam and phishing filters are on', description: 'Most email providers filter spam automatically, but make sure it is not turned off.', links: { gmail: 'https://mail.google.com/mail/u/0/#settings/filters', outlook: 'https://outlook.live.com/mail/0/options/mail/junkEmail', yahoo: 'https://mail.yahoo.com/' } },
  { label: 'No unknown email filters or rules', description: 'Check that no one has created rules to auto-delete or hide your incoming mail.', links: { gmail: 'https://mail.google.com/mail/u/0/#settings/filters', outlook: 'https://outlook.live.com/mail/0/options/mail/rules', yahoo: 'https://mail.yahoo.com/' } },
  { label: 'Security checkup completed', description: 'Run your email provider\'s built-in security checkup tool.', links: { gmail: 'https://myaccount.google.com/security-checkup', outlook: 'https://account.microsoft.com/security', yahoo: 'https://login.yahoo.com/account/security' } },
];

const providerLabels: Record<Provider, string> = { gmail: 'Gmail', outlook: 'Outlook', yahoo: 'Yahoo Mail' };

const tips = [
  'Never click links in emails that ask you to "verify" your account. Go directly to the website instead.',
  'If an email seems urgent or threatening, it is probably a scam. Legitimate companies do not pressure you.',
  'Check the sender\'s actual email address, not just the display name. Scammers often use look-alike addresses.',
  'Be cautious of attachments from unknown senders. They can contain viruses.',
  'When in doubt, call the company directly using the phone number on their official website.',
];

export default function EmailSecurityCheck() {
  const [provider, setProvider] = useState<Provider | ''>('');
  const [checked, setChecked] = useState<Set<number>>(new Set());
  const [showTips, setShowTips] = useState(false);

  const score = Math.round((checked.size / checkItems.length) * 100);

  const toggleItem = (i: number) => {
    setChecked(prev => { const n = new Set(prev); n.has(i) ? n.delete(i) : n.add(i); return n; });
  };

  return (
    <>
      <SEOHead
        title="Email Security Check — Protect Your Email Account | TekSure"
        description="Walk through a 12-point email security checklist with step-by-step instructions for Gmail, Outlook, and Yahoo Mail."
        path="/tools/email-security-check"
      />
      <Navbar />
      <main className="min-h-screen bg-background">
        <div className="container pt-4">
          <PageBreadcrumb segments={[{ label: 'Tools', href: '/tools' }, { label: 'Email Security Check' }]} />
        </div>

        <section className="border-b">
          <div className="container py-12 md:py-16 max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-12 w-12 rounded-2xl bg-red-50 dark:bg-red-950/30 flex items-center justify-center flex-shrink-0">
                <Mail className="h-6 w-6 text-red-600" aria-hidden="true" />
              </div>
              <Badge variant="secondary">Free Tool</Badge>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">Email Security Check</h1>
            <p className="text-muted-foreground text-lg">
              Walk through this 12-point checklist to make sure your email account is locked down and safe from hackers.
            </p>
          </div>
        </section>

        <div className="container py-8 pb-24 max-w-3xl space-y-8">
          {/* Provider select */}
          <Card>
            <CardHeader><CardTitle className="text-lg">Select Your Email Provider</CardTitle></CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-3">
                {(['gmail', 'outlook', 'yahoo'] as const).map(p => (
                  <button key={p} onClick={() => setProvider(p)} className={`border rounded-xl p-4 text-center text-sm font-medium transition-colors ${provider === p ? 'border-red-500 bg-red-50 dark:bg-red-950/20 text-red-700' : 'hover:bg-muted'}`}>
                    {providerLabels[p]}
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Progress */}
          <Card>
            <CardContent className="pt-6">
              <div className="flex justify-between text-sm mb-2">
                <span>Security Score</span>
                <span className="font-bold">{score}%</span>
              </div>
              <div className="h-4 bg-muted rounded-full overflow-hidden">
                <div className={`h-full rounded-full transition-all ${score === 100 ? 'bg-emerald-500' : score >= 60 ? 'bg-amber-500' : 'bg-red-500'}`} style={{ width: `${score}%` }} />
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                {score === 100 ? 'Your email security is excellent!' : score >= 60 ? 'Good progress. Complete the remaining items to strengthen your security.' : 'Your email may be at risk. Work through the checklist below.'}
              </p>
            </CardContent>
          </Card>

          {/* Checklist */}
          <Card>
            <CardHeader><CardTitle className="text-lg flex items-center gap-2"><ShieldCheck className="h-5 w-5" aria-hidden="true" /> Security Checklist</CardTitle></CardHeader>
            <CardContent className="space-y-1">
              {checkItems.map((item, i) => (
                <div key={i} className={`rounded-xl p-4 transition-colors ${checked.has(i) ? 'bg-emerald-50/50 dark:bg-emerald-950/10' : ''}`}>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" checked={checked.has(i)} onChange={() => toggleItem(i)} className="mt-1 h-4 w-4 rounded" />
                    <div className="flex-1">
                      <p className={`text-sm font-medium ${checked.has(i) ? 'line-through text-muted-foreground' : ''}`}>{item.label}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{item.description}</p>
                      {provider && (
                        <a href={item.links[provider]} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs text-primary hover:underline mt-1">
                          Take action in {providerLabels[provider]} <ExternalLink className="h-3 w-3" />
                        </a>
                      )}
                    </div>
                  </label>
                </div>
              ))}
              <p className="text-xs text-muted-foreground pt-3 flex items-center gap-1">
                <CheckCircle className="h-3 w-3" /> {checked.size} of {checkItems.length} completed
              </p>
            </CardContent>
          </Card>

          {/* Print */}
          <Button variant="outline" onClick={() => window.print()} className="w-full">Print Your Results</Button>

          {/* Tips */}
          <div className="rounded-2xl border p-6">
            <button onClick={() => setShowTips(!showTips)} className="flex items-center gap-3 w-full text-left">
              <Lightbulb className="h-5 w-5 text-amber-500 flex-shrink-0" aria-hidden="true" />
              <span className="font-semibold text-sm flex-1">Email Safety Tips</span>
              {showTips ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </button>
            {showTips && (
              <ul className="mt-4 space-y-2">
                {tips.map((tip, i) => (
                  <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-amber-100 dark:bg-amber-950/30 text-amber-700 text-xs flex items-center justify-center font-medium">{i + 1}</span>
                    {tip}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
