import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Mail } from 'lucide-react';

export default function EmailHackedRecovery() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Email Hacked Recovery for Seniors | TekSure" description="Recover hacked email. Plain-English senior guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Mail className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Email Hacked?</h1>
          <p className="text-lg text-muted-foreground">Recover + secure. Step by step.</p>
        </div>

        <Card className="mb-4 border-red-300">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3 text-red-700">Signs hacked</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Friends say &quot;you sent me weird email&quot;.</li>
              <li>Sent folder has emails you didn&apos;t send.</li>
              <li>Can&apos;t login.</li>
              <li>Password changed without you.</li>
              <li>New filters / forwarding rules added.</li>
              <li>Recovery email changed.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Step 1: Try login</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Try old password first.</li>
              <li>If it works = change immediately.</li>
              <li>If locked out — &quot;Forgot password&quot;.</li>
              <li>Email recovery code to backup email.</li>
              <li>Or text to phone.</li>
              <li>Follow steps carefully.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Step 2: Strong password</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Use passphrase: 4 random words.</li>
              <li>Example: &quot;Purple-Tractor-Sandwich-9!&quot;.</li>
              <li>20+ characters minimum.</li>
              <li>Different from previous.</li>
              <li>Save in password manager.</li>
              <li>Or in physical password book.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Step 3: Enable 2FA</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Two-factor authentication.</li>
              <li>Code sent to phone.</li>
              <li>Or authenticator app.</li>
              <li>Stops most hacks.</li>
              <li>Gmail / iCloud / Outlook all support.</li>
              <li>Settings → Security.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Step 4: Check filters</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Hacker may have added forwarding.</li>
              <li>Settings → Filters and Forwarding.</li>
              <li>Delete suspicious filters.</li>
              <li>Delete forwarding to unknown emails.</li>
              <li>Reset signature if changed.</li>
              <li>Check recovery options.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Step 5: Notify contacts</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Email all contacts: &quot;I was hacked&quot;.</li>
              <li>&quot;Don&apos;t click links from me yesterday.&quot;</li>
              <li>&quot;Account secure now.&quot;</li>
              <li>Especially family + financial contacts.</li>
              <li>Bank — they may be targeted next.</li>
              <li>Stay vigilant for callbacks.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Other accounts</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Email = master key to other accounts.</li>
              <li>Hacker may have reset others.</li>
              <li>Change passwords on:</li>
              <li>Bank, Amazon, Facebook, Apple ID, Google.</li>
              <li>Check all bank statements.</li>
              <li>haveibeenpwned.com — check leaks.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Future-proof</h3>
            <p className="text-sm text-muted-foreground">Use unique password per site. Password manager (Bitwarden FREE, 1Password $36/yr). 2FA everywhere. Don&apos;t reuse passwords. Senior tip: write critical passwords in physical book in safe place. Tell trusted family member where book is. Hacked = stressful but recoverable.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
