import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { UserPlus } from 'lucide-react';

export default function AppleIdGoogleAccountSetup() {
  const [tab, setTab] = useState<'apple' | 'google'>('apple');

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Apple ID & Google Account Setup — First-Time Coach | TekSure" description="New iPhone or Android? Plain-English steps to create your first Apple ID or Google account safely — and the security settings to set BEFORE you use it." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <UserPlus className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Apple ID & Google Account Setup</h1>
          <p className="text-lg text-muted-foreground">First-time setup, done right — and safe.</p>
        </div>

        <div className="flex gap-2 mb-4">
          <button onClick={() => setTab('apple')} className={`flex-1 p-3 rounded-lg border-2 ${tab === 'apple' ? 'border-primary bg-primary/10' : 'border-muted'}`}>🍎 Apple ID</button>
          <button onClick={() => setTab('google')} className={`flex-1 p-3 rounded-lg border-2 ${tab === 'google' ? 'border-primary bg-primary/10' : 'border-muted'}`}>📧 Google</button>
        </div>

        {tab === 'apple' && (
          <>
            <Card className="mb-4">
              <CardContent className="pt-6">
                <h3 className="font-bold text-lg mb-3">Create Apple ID</h3>
                <ol className="list-decimal pl-5 space-y-2 text-sm">
                  <li>On a new iPhone — pick "Create an Apple ID" during setup. Or go to <strong>appleid.apple.com</strong> on a computer.</li>
                  <li>Use an email you own (or get a free iCloud email).</li>
                  <li>Pick a strong password — 12+ characters, mix of letters/numbers. NOT your dog\'s name.</li>
                  <li>Add your real birthday (used for age-related features).</li>
                  <li>Add a phone number — for verification codes.</li>
                  <li>Apple sends you a verification email/text. Confirm.</li>
                </ol>
              </CardContent>
            </Card>
            <Card className="mb-4">
              <CardContent className="pt-6">
                <h3 className="font-bold text-lg mb-3">Critical safety settings</h3>
                <ol className="list-decimal pl-5 space-y-2 text-sm">
                  <li>Settings → tap your name → Sign-In & Security → "Two-Factor Authentication" → ON.</li>
                  <li>Same menu → "Account Recovery" → add a Recovery Contact (a trusted family member with their own Apple ID).</li>
                  <li>Same menu → "Recovery Key" → Generate. Print and save with your will.</li>
                  <li>Settings → tap your name → "Family Sharing" → set up if you have a spouse/family. Share music, books, App Store purchases — save money.</li>
                  <li>Settings → tap your name → "Legacy Contact" → add an heir who can access your data after you pass.</li>
                </ol>
              </CardContent>
            </Card>
          </>
        )}

        {tab === 'google' && (
          <>
            <Card className="mb-4">
              <CardContent className="pt-6">
                <h3 className="font-bold text-lg mb-3">Create Google Account</h3>
                <ol className="list-decimal pl-5 space-y-2 text-sm">
                  <li>Go to <strong>accounts.google.com/signup</strong> on any computer or phone.</li>
                  <li>Pick a Gmail address (you can also use an existing email).</li>
                  <li>Pick a strong password — 12+ characters.</li>
                  <li>Add your phone number — for verification.</li>
                  <li>Add a recovery email — different from this account.</li>
                  <li>Verify via text or email.</li>
                </ol>
              </CardContent>
            </Card>
            <Card className="mb-4">
              <CardContent className="pt-6">
                <h3 className="font-bold text-lg mb-3">Critical safety settings</h3>
                <ol className="list-decimal pl-5 space-y-2 text-sm">
                  <li>Go to <strong>myaccount.google.com</strong>.</li>
                  <li>Security → 2-Step Verification → ON. Use phone OR Google Authenticator.</li>
                  <li>Security → Recovery phone + Recovery email. Both essential.</li>
                  <li>Security → "Devices" — review where you\'re signed in. Sign out of strangers.</li>
                  <li>Data & Privacy → "Inactive Account Manager" — name a legacy contact for after you pass.</li>
                  <li>Print backup codes — for if you lose your phone.</li>
                </ol>
              </CardContent>
            </Card>
          </>
        )}

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Tell your spouse / family</h2>
            <p className="text-sm">Write down (offline, in a safe place):</p>
            <ul className="list-disc pl-5 space-y-1 text-sm mt-2">
              <li>The Apple ID / Google email address.</li>
              <li>The master password.</li>
              <li>The recovery phone and email.</li>
              <li>Where the recovery key (Apple) or backup codes (Google) are.</li>
            </ul>
            <p className="text-sm mt-2">If you\'re ever incapacitated or pass, your family will need this information to access photos, contacts, and important documents.</p>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Quick Tip</h3>
            <p className="text-sm text-muted-foreground">Use the same Apple ID / Google account on every device you own. That way photos, calendars, contacts, and notes all sync. Don\'t create a new account every time — that creates the world\'s most confusing mess.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
