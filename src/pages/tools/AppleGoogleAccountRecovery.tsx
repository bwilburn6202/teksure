import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { KeyRound } from 'lucide-react';

export default function AppleGoogleAccountRecovery() {
  const [tab, setTab] = useState<'apple' | 'google'>('apple');

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Apple ID & Google Account Recovery | TekSure" description="Locked out of your Apple ID or Google account? Plain-English steps to recover access — and how to set up safety nets so this never happens again." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <KeyRound className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Account Recovery</h1>
          <p className="text-lg text-muted-foreground">Locked out? Don\'t panic. There are 3-4 ways back in.</p>
        </div>

        <div className="flex gap-2 mb-4">
          <button onClick={() => setTab('apple')} className={`flex-1 p-3 rounded-lg border-2 ${tab === 'apple' ? 'border-primary bg-primary/10' : 'border-muted'}`}>🍎 Apple ID</button>
          <button onClick={() => setTab('google')} className={`flex-1 p-3 rounded-lg border-2 ${tab === 'google' ? 'border-primary bg-primary/10' : 'border-muted'}`}>📧 Google</button>
        </div>

        {tab === 'apple' && (
          <>
            <Card className="mb-4">
              <CardContent className="pt-6">
                <h3 className="font-bold text-lg mb-3">Recover your Apple ID</h3>
                <ol className="list-decimal pl-5 space-y-2 text-sm">
                  <li>Go to <strong>iforgot.apple.com</strong>.</li>
                  <li>Type your Apple ID email.</li>
                  <li>Apple sends a code to a trusted device or phone number you previously set up.</li>
                  <li>Or — answer security questions (older accounts).</li>
                  <li>Reset your password.</li>
                </ol>
                <p className="text-sm mt-3">Doesn\'t work? Apple has an "Account Recovery" process that takes a few days. Apple is very strict to protect from imposters — they\'ll ask many questions.</p>
              </CardContent>
            </Card>
            <Card className="mb-4">
              <CardContent className="pt-6">
                <h3 className="font-bold text-lg mb-3">Set up safety nets NOW (before you\'re locked out)</h3>
                <ol className="list-decimal pl-5 space-y-2 text-sm">
                  <li><strong>Recovery Contact</strong>: iPhone → Settings → tap your name → Sign-In & Security → "Account Recovery" → "Add Recovery Contact". Pick a trusted family member with their own Apple ID. They can help verify it\'s really you.</li>
                  <li><strong>Recovery Key</strong>: Same menu → "Recovery Key" → "Generate". A 28-character code. PRINT IT — store with your will or in safe deposit. With this you can ALWAYS recover. WITHOUT it AND without recovery contacts, Apple may not be able to help.</li>
                  <li><strong>Trusted phone numbers</strong> — make sure your spouse\'s number is also on the account.</li>
                  <li><strong>Trusted device</strong> — make sure your iPad or Mac is also signed in (gives you another way to receive codes).</li>
                </ol>
              </CardContent>
            </Card>
          </>
        )}

        {tab === 'google' && (
          <>
            <Card className="mb-4">
              <CardContent className="pt-6">
                <h3 className="font-bold text-lg mb-3">Recover your Google account</h3>
                <ol className="list-decimal pl-5 space-y-2 text-sm">
                  <li>Go to <strong>accounts.google.com/signin/recovery</strong>.</li>
                  <li>Type your Gmail address.</li>
                  <li>Google asks for the last password you remember.</li>
                  <li>Sends a code to your recovery phone, recovery email, or a "trusted device" you\'re already signed into.</li>
                  <li>If you can\'t get any of those, Google has a long form asking when you created the account, who you email most, etc.</li>
                </ol>
                <p className="text-sm mt-3">The more recovery info you set up beforehand, the easier this is.</p>
              </CardContent>
            </Card>
            <Card className="mb-4">
              <CardContent className="pt-6">
                <h3 className="font-bold text-lg mb-3">Set up safety nets NOW</h3>
                <ol className="list-decimal pl-5 space-y-2 text-sm">
                  <li>Go to <strong>myaccount.google.com</strong>.</li>
                  <li>Security → Recovery phone — add a trusted phone number.</li>
                  <li>Security → Recovery email — add an alternate email (a spouse\'s or a backup Gmail).</li>
                  <li>Security → 2-Step Verification → ON. Adds a second lock.</li>
                  <li>Print the backup codes Google offers and store somewhere safe.</li>
                </ol>
              </CardContent>
            </Card>
          </>
        )}

        <Card className="mb-4 border-yellow-300 dark:border-yellow-800">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">⚠️ Recovery scams</h2>
            <p className="text-sm mb-2">Real Apple and Google will NEVER:</p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Call you about your account.</li>
              <li>Ask for your password by email or phone.</li>
              <li>Ask you to install screen-sharing software.</li>
              <li>Ask for your two-factor code.</li>
            </ul>
            <p className="text-sm mt-2">If a stranger calls saying "your Apple ID was hacked, let me help you" — hang up. You\'re being scammed.</p>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Tell your spouse / kids</h3>
            <p className="text-sm text-muted-foreground">Set up legacy contacts on your Apple ID and Google account NOW. Tell your spouse and adult kids that they\'re listed. If something happens to you, they can recover your accounts and the photos / emails inside.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
