import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Smartphone } from 'lucide-react';

export default function ApplePaySetupSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Apple Pay Setup for Seniors | TekSure" description="Tap to pay with phone. Plain-English Apple Pay setup + safety for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Smartphone className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Apple Pay Setup</h1>
          <p className="text-lg text-muted-foreground">More secure than physical card. Easy to set up.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why use Apple Pay</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Card # NEVER given to merchant.</li>
              <li>Face ID / fingerprint required — thieves can&apos;t use.</li>
              <li>Faster than card.</li>
              <li>No card swiping at scammy gas pumps.</li>
              <li>Works at 90% of retailers now.</li>
              <li>Chargebacks easier when problems.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Setup steps (3 minutes)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Open Wallet app (orange/red icon).</li>
              <li>Tap + (top right).</li>
              <li>Choose &quot;Debit or Credit Card&quot;.</li>
              <li>Position card in frame — auto-reads.</li>
              <li>Type security code on back.</li>
              <li>Verify with bank (text code or call).</li>
              <li>Done. Add multiple cards same way.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">How to pay</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>At checkout — terminal asks &quot;tap to pay&quot;.</li>
              <li>Double-click side button (iPhone with Face ID).</li>
              <li>Or hold near terminal.</li>
              <li>Look at phone (Face ID) or fingerprint.</li>
              <li>Beep + checkmark = paid.</li>
              <li>Done in 3 seconds.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Online + app payments</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Many websites have &quot;Apple Pay&quot; button at checkout.</li>
              <li>One tap = pay. No typing card #.</li>
              <li>Same for app purchases.</li>
              <li>No card # exposed even online.</li>
              <li>Faster + safer than typing card.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">If phone lost/stolen</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Apple Pay PROTECTED by Face ID/passcode.</li>
              <li>Sign in to iCloud.com on another device.</li>
              <li>Mark phone as Lost — Apple Pay disabled.</li>
              <li>Or call bank to suspend cards.</li>
              <li>SAFER than losing physical wallet.</li>
              <li>Works offline — no internet needed for tap-to-pay.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Google Pay / Samsung Pay</h3>
            <p className="text-sm text-muted-foreground">Same idea, Android phones. Google Wallet app — add card, tap to pay. Samsung Pay built into Galaxy phones. All three (Apple, Google, Samsung) more secure than plastic. PIN/fingerprint protects even if phone lost.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
