import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShieldCheck, ExternalLink, Lock } from 'lucide-react';

interface Service {
  id: string;
  name: string;
  emoji: string;
  why: string;
  best: string;
  steps: string[];
  link: { label: string; url: string };
}

const SERVICES: Service[] = [
  { id: 'google', name: 'Google / Gmail', emoji: '✉️', why: 'Your Google account often resets passwords for everything else. Protect it first.',
    best: 'Use a Google prompt on your phone — it shows a "Yes / No" tap when someone tries to sign in.',
    steps: [
      'Open myaccount.google.com on a computer or phone.',
      'Click "Security" on the left side.',
      'Find "How you sign in to Google" and click "2-Step Verification".',
      'Click "Get started" and enter your password again.',
      'Pick "Google prompt" — easiest. It uses your phone.',
      'Add a backup phone number in case you lose your phone.',
      'Save the 10 backup codes — print them and put them in a safe spot.',
    ],
    link: { label: 'Open Google 2-Step Verification', url: 'https://myaccount.google.com/signinoptions/twosv' } },
  { id: 'apple', name: 'Apple ID / iCloud', emoji: '🍎', why: 'Your Apple ID protects your photos, iMessages, and Find My iPhone.',
    best: 'Two-factor with a trusted phone number is on by default for newer accounts.',
    steps: [
      'On iPhone: Settings → tap your name at top → "Sign-In & Security".',
      'Tap "Two-Factor Authentication" — turn it on if not already.',
      'Add a trusted phone number where Apple can text you a code.',
      'Add a recovery contact (a family member) so you can never get locked out.',
      'Write down your Apple ID password and recovery key — store somewhere safe.',
    ],
    link: { label: 'Apple two-factor help', url: 'https://support.apple.com/en-us/102660' } },
  { id: 'microsoft', name: 'Microsoft / Outlook', emoji: '🪟', why: 'Protects your email, Office files, and Windows sign-in.',
    best: 'Use the Microsoft Authenticator app — tap "Approve" on a phone notification.',
    steps: [
      'Go to account.microsoft.com and sign in.',
      'Click "Security" then "Advanced security options".',
      'Find "Two-step verification" and click "Turn on".',
      'Install "Microsoft Authenticator" from your phone\'s app store.',
      'Scan the QR code on screen with the app.',
      'Save the recovery code on paper.',
    ],
    link: { label: 'Microsoft 2FA setup', url: 'https://account.microsoft.com/security' } },
  { id: 'facebook', name: 'Facebook', emoji: '👥', why: 'Stops scammers from messaging your family and friends pretending to be you.',
    best: 'Text message codes work fine here. An app is more secure.',
    steps: [
      'On Facebook: tap your photo (top right on web, bottom right on phone).',
      'Settings & Privacy → Settings → Accounts Center → Password and security.',
      'Tap "Two-factor authentication" → pick your account.',
      'Choose "Text message (SMS)" — easiest. Confirm your phone number.',
      'Save the recovery codes shown.',
    ],
    link: { label: 'Facebook security settings', url: 'https://accountscenter.facebook.com/password_and_security' } },
  { id: 'amazon', name: 'Amazon', emoji: '📦', why: 'Stops strangers from buying things on your card.',
    best: 'Text codes are fine. Authenticator app is stronger.',
    steps: [
      'Go to amazon.com → "Account & Lists" → "Login & security".',
      'Find "2-Step Verification" → click "Turn on".',
      'Choose how you want codes — text message is easiest.',
      'Enter the code Amazon sends to confirm.',
      'Mark trusted devices so you don\'t need a code every time at home.',
    ],
    link: { label: 'Amazon login & security', url: 'https://www.amazon.com/a/settings/approval' } },
  { id: 'bank', name: 'Your Bank or Credit Card', emoji: '🏦', why: 'The single most important account to protect.',
    best: 'Most banks already require a code for new logins. Make sure yours does.',
    steps: [
      'Sign in to your bank\'s website on a computer.',
      'Look for "Security", "Profile", or "Settings".',
      'Find "Two-factor", "Verification", or "Login alerts".',
      'Turn on text or app codes for every sign-in.',
      'Turn on alerts for any purchase over $1.',
      'If you can\'t find it, call the number on the back of your card and ask.',
    ],
    link: { label: 'FTC: how 2FA protects you', url: 'https://consumer.ftc.gov/articles/use-two-factor-authentication-protect-your-accounts' } },
];

export default function TwoFactorCoach() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Two-Factor Authentication Setup Coach | TekSure" description="Plain-English steps to turn on two-factor (2FA) for Gmail, Apple, Microsoft, Facebook, Amazon, and your bank. Lock down every account in under 30 minutes." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-4xl">
        <div className="text-center mb-8">
          <ShieldCheck className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Two-Factor Setup Coach</h1>
          <p className="text-lg text-muted-foreground">Pick an account. We'll walk you through turning on the second lock — in plain English.</p>
        </div>

        <Card className="mb-6 bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <div className="flex gap-3">
              <Lock className="w-6 h-6 text-primary shrink-0" />
              <div>
                <h2 className="font-bold mb-1">What is two-factor?</h2>
                <p className="text-sm text-muted-foreground">A second lock on your account. Even if a scammer steals your password, they still can't get in without a code from your phone. It's the single biggest thing you can do to stop hackers.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-3">
          {SERVICES.map(s => (
            <Card key={s.id}>
              <CardContent className="pt-6">
                <button onClick={() => setOpen(open === s.id ? null : s.id)} className="w-full text-left flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{s.emoji}</span>
                    <div>
                      <h3 className="font-bold text-lg">{s.name}</h3>
                      <p className="text-sm text-muted-foreground">{s.why}</p>
                    </div>
                  </div>
                  <span className="text-sm text-primary font-medium">{open === s.id ? 'Hide' : 'Show steps'}</span>
                </button>
                {open === s.id && (
                  <div className="mt-4 pt-4 border-t space-y-3">
                    <p className="text-sm bg-muted/50 p-3 rounded"><strong>Best choice:</strong> {s.best}</p>
                    <ol className="space-y-2 list-decimal pl-5">
                      {s.steps.map((step, i) => <li key={i} className="text-sm">{step}</li>)}
                    </ol>
                    <Button asChild variant="outline" className="w-full"><a href={s.link.url} target="_blank" rel="noopener noreferrer">{s.link.label} <ExternalLink className="w-3 h-3 ml-2" /></a></Button>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-6 bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Quick Tip</h3>
            <p className="text-sm text-muted-foreground">Always save the "backup codes" each service offers. Print them and keep them with your important papers. They're your way back in if your phone is ever lost or broken.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
