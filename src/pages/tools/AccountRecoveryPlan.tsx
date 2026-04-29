import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { LifeBuoy } from 'lucide-react';

export default function AccountRecoveryPlan() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Account Recovery Plan — Locked Out? | TekSure" description="Set up recovery BEFORE you&apos;re locked out. Plain-English steps for Apple, Google, Microsoft account recovery." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <LifeBuoy className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Account Recovery Plan</h1>
          <p className="text-lg text-muted-foreground">Set this up BEFORE you need it.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why now</h2>
            <p className="text-sm">If you forget your password, lose your phone, or get hacked — recovery is much easier if you set it up FIRST. Setting up after a problem is painful (or impossible). Five minutes today saves weeks of frustration later.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Apple ID — Recovery Contact + Recovery Key</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Settings → tap your name → Sign-In &amp; Security.</li>
              <li>Tap "Recovery Contact" — add a trusted family member with their own iPhone.</li>
              <li>If locked out, they help you back in.</li>
              <li>Also tap "Recovery Key" — Apple gives a 28-character code. WRITE IT DOWN.</li>
              <li>Without the key, Apple can&apos;t help if you forget master password.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Google Account</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Go to <strong>myaccount.google.com</strong> → Security.</li>
              <li>Add a recovery phone number (your cell).</li>
              <li>Add a recovery email (a SECOND email, not the same one).</li>
              <li>Set up an authenticator app for 2FA.</li>
              <li>Print or save the 8 backup codes. Store with will.</li>
              <li>Add 2-3 trusted contacts in Inactive Account Manager (legacy).</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Microsoft Account</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Go to <strong>account.microsoft.com</strong> → Security.</li>
              <li>Add recovery phone + recovery email.</li>
              <li>Turn on 2FA via Microsoft Authenticator app.</li>
              <li>Save backup codes.</li>
              <li>Add a recovery alternate authentication method (security key or text).</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Bank accounts</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Update your phone number on file (online banking → Profile).</li>
              <li>Update email.</li>
              <li>Add a "trusted contact" — bank can call them if account looks compromised. Required for many states for seniors.</li>
              <li>Print account numbers + customer service phone. Keep with will.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">The "locked out" one-page sheet</h2>
            <p className="text-sm">Print and keep in a safe place:</p>
            <ul className="list-disc pl-5 space-y-1 text-sm mt-2">
              <li>Apple ID email + Recovery Key.</li>
              <li>Google email + 8 backup codes.</li>
              <li>Microsoft email + recovery phone.</li>
              <li>Password manager master password.</li>
              <li>Phone passcode + computer login.</li>
              <li>Bank phone numbers.</li>
            </ul>
            <p className="text-sm mt-3">Sealed envelope. Tell ONE trusted family member where it is.</p>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Test it</h3>
            <p className="text-sm text-muted-foreground">Once a year — try logging into one account using only the recovery process. If recovery doesn&apos;t work, fix it now while you&apos;re calm. NOT after you&apos;re locked out and panicking.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
