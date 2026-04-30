import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Mail } from 'lucide-react';

export default function EmailScamSpotterTutorial() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Email Scam Spotter for Seniors | TekSure" description="Learn to spot phishing emails. Senior-specific email scam patterns + defenses." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Mail className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Email Scams</h1>
          <p className="text-lg text-muted-foreground">Spot phishing in 5 seconds.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Red flags</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Urgent language — &quot;account suspended.&quot;</li>
              <li>Threats — &quot;lose access.&quot;</li>
              <li>Generic greeting — &quot;Dear Customer.&quot;</li>
              <li>Spelling/grammar errors.</li>
              <li>Suspicious sender email.</li>
              <li>Click suspicious links.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Common senior scams</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>&quot;Your Amazon order is delayed&quot; — fake.</li>
              <li>&quot;PayPal account suspended&quot; — fake.</li>
              <li>&quot;Your computer has virus&quot; — fake.</li>
              <li>&quot;You won a prize&quot; — fake.</li>
              <li>&quot;IRS owes you refund&quot; — fake.</li>
              <li>&quot;Grandchild in jail&quot; emergency.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Verify before clicking</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Hover over link — see actual URL.</li>
              <li>Real Amazon = amazon.com.</li>
              <li>Fake = amazon-secure-login.xyz.</li>
              <li>Don&apos;t click any link.</li>
              <li>Go to amazon.com directly.</li>
              <li>Login + check account.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Safe responses</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Don&apos;t reply.</li>
              <li>Don&apos;t click links.</li>
              <li>Don&apos;t call number in email.</li>
              <li>Don&apos;t download attachments.</li>
              <li>Mark as spam.</li>
              <li>Delete.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">If you clicked already</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Don&apos;t panic.</li>
              <li>Change password if entered.</li>
              <li>Run antivirus scan.</li>
              <li>Watch bank/credit card statements.</li>
              <li>Tell family.</li>
              <li>Most clicks survive without harm.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Email security setup</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Strong password + 2FA.</li>
              <li>Spam filter enabled.</li>
              <li>Don&apos;t share email widely.</li>
              <li>Use throwaway for online forms.</li>
              <li>Different emails for banking + social.</li>
              <li>Review monthly for problems.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">When in doubt — verify directly</h3>
            <p className="text-sm text-muted-foreground">Got an &quot;urgent&quot; email from Amazon, your bank, or anyone? Don&apos;t click. Don&apos;t reply. Don&apos;t call. Open a new browser tab, type the company&apos;s URL directly. Login + check. If real issue, you&apos;ll see it. If not — it&apos;s scam. This single habit prevents 95% of phishing scams.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
