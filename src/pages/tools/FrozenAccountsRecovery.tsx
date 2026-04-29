import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Lock } from 'lucide-react';

export default function FrozenAccountsRecovery() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Recover Frozen Accounts | TekSure" description="Bank or investment account locked? Plain-English steps to verify identity and unlock accounts." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Lock className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Recover Frozen Accounts</h1>
          <p className="text-lg text-muted-foreground">Calm steps to get back in.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why accounts get frozen</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Suspicious activity</strong> — someone tried to log in / wire / withdraw.</li>
              <li><strong>You triggered fraud detection</strong> — large deposit, sudden purchase, login from new device.</li>
              <li><strong>You requested it</strong> — maybe forgot.</li>
              <li><strong>Court / IRS lien / child support</strong> — legal hold.</li>
              <li><strong>Bank concern about senior fraud</strong> — required by law if elder abuse suspected.</li>
              <li><strong>Account inactivity</strong> — dormant accounts sometimes frozen.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Steps to unfreeze</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Call bank&apos;s number from BACK OF YOUR CARD (don&apos;t Google — risk of scam numbers).</li>
              <li>Verify identity — security questions, ID verification.</li>
              <li>Confirm recent legitimate transactions.</li>
              <li>Reset passwords + 2FA.</li>
              <li>Bank lifts hold within hours to days.</li>
              <li>If can&apos;t unlock by phone — visit branch with photo ID + Social Security card.</li>
              <li>Get written confirmation of unfreeze for records.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4 bg-yellow-50 border-yellow-300 dark:bg-yellow-950/20 dark:border-yellow-800">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">DO NOT click email "unfreeze account" links</h2>
            <p className="text-sm">Scammers send fake "account locked" emails. ALWAYS go directly to bank&apos;s website by typing it OR call the number on your card. Email links are how scams steal what wasn&apos;t even at risk.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">If frozen by court / IRS / child support</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Lawyer up. Worth $500-2,000 to restore $5K+ funds.</li>
              <li>Some states have low-income legal aid for seniors.</li>
              <li>Don&apos;t move funds to other accounts — same lien follows.</li>
              <li>Some money is "exempt" — Social Security, VA pension.</li>
              <li>File "Claim of Exemption" — court usually releases protected funds within 30-90 days.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Prevent future freezes</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Update phone number + email at bank.</li>
              <li>Tell bank ahead of large transactions.</li>
              <li>Use 2FA so YOUR logins don&apos;t trigger fraud.</li>
              <li>Add a "Trusted Contact" at bank — required by FINRA for seniors at brokerages. Bank can call them if concerned.</li>
              <li>Travel notice before international trips.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Stay calm</h3>
            <p className="text-sm text-muted-foreground">Frozen accounts are scary but almost always recoverable. Banks ARE on your side — they froze it to protect you. Verify identity properly, and access usually returns within 24-72 hours. Don&apos;t panic into clicking suspicious links.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
