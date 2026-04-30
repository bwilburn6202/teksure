import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Shield } from 'lucide-react';

export default function TwoFactorAuthSetup() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Two-Factor Authentication Setup for Seniors | TekSure" description="Protect your accounts with 2FA. Step-by-step setup for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Shield className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Two-Factor Authentication</h1>
          <p className="text-lg text-muted-foreground">Add a security code to your accounts.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What is 2FA?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>After typing password, also enter a 6-digit code.</li>
              <li>Code comes via text or app — only you have it.</li>
              <li>Prevents hackers from accessing even with password.</li>
              <li>One of the most important security measures.</li>
              <li>Used by banks, email, social media.</li>
              <li>Sometimes called &quot;2-Step Verification.&quot;</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Where to enable first</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Email accounts (Gmail, Yahoo, Outlook).</li>
              <li>Banking + financial accounts.</li>
              <li>Social Security myAccount.</li>
              <li>Apple ID + Google account.</li>
              <li>Investment accounts.</li>
              <li>Anything with money or sensitive info.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">SMS (text) 2FA</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Easiest — code sent by text message.</li>
              <li>Login prompts: &quot;Enter the code we texted you.&quot;</li>
              <li>Works without any new app.</li>
              <li>Vulnerable to SIM swap fraud.</li>
              <li>Better than nothing — much better than just password.</li>
              <li>Most banks offer this.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">App-based 2FA (more secure)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Google Authenticator — free, simple.</li>
              <li>Authy — free, syncs across devices.</li>
              <li>Microsoft Authenticator — free.</li>
              <li>App generates new code every 30 seconds.</li>
              <li>No SMS needed.</li>
              <li>More secure than text codes.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Setup process (most accounts)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Login to account.</li>
              <li>Find Settings → Security or 2-Factor Auth.</li>
              <li>Choose: text message or authenticator app.</li>
              <li>Verify your phone number.</li>
              <li>Enter test code.</li>
              <li>Save backup codes — printed copy in safe.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Backup codes — critical</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Always save backup codes when offered.</li>
              <li>10 one-time use codes typically.</li>
              <li>Use if phone lost or new phone.</li>
              <li>Print + keep in safe place.</li>
              <li>Without these, lost phone = locked out.</li>
              <li>Email them to yourself + delete after printing.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Email + bank first, today</h3>
            <p className="text-sm text-muted-foreground">If you do nothing else, enable 2FA on your primary email and your bank accounts today. Email is the master key — if hackers control your email, they can reset all other passwords. Banking is obvious. Both take 5 minutes to set up. Combined with a strong unique password from Bitwarden, you become 99% safer than the average person online.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
