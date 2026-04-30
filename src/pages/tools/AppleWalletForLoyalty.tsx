import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Wallet } from 'lucide-react';

export default function AppleWalletForLoyalty() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Apple Wallet for Loyalty Cards | TekSure" description="Stop carrying loyalty cards. Use Apple Wallet on iPhone for senior cardholders." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Wallet className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Apple Wallet</h1>
          <p className="text-lg text-muted-foreground">All loyalty cards in one place.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What Apple Wallet does</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Built into every iPhone — free.</li>
              <li>Stores credit cards, loyalty cards, boarding passes.</li>
              <li>Movie + concert tickets.</li>
              <li>Hotel keys (some hotels).</li>
              <li>Vaccine records.</li>
              <li>Driver license (some states).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Add loyalty cards</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Most chain stores — CVS, Walgreens, Target, Kroger.</li>
              <li>Open store&apos;s app first — find &quot;Add to Apple Wallet.&quot;</li>
              <li>Or scan physical card barcode in Wallet.</li>
              <li>Cards appear stacked.</li>
              <li>Tap one to show barcode.</li>
              <li>Cashier scans phone.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best loyalty cards to add</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>CVS ExtraCare.</li>
              <li>Walgreens MyWalgreens.</li>
              <li>Kroger Plus.</li>
              <li>Target Circle.</li>
              <li>Starbucks Rewards.</li>
              <li>Chick-fil-A One.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Tap to Pay</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Add credit card to Wallet.</li>
              <li>Tap iPhone on payment terminal.</li>
              <li>Use Face ID / Touch ID to confirm.</li>
              <li>More secure than swiping card.</li>
              <li>Card number not transmitted.</li>
              <li>Works at any contactless terminal.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Boarding passes</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Airline app → Add to Apple Wallet.</li>
              <li>Show phone at TSA + gate.</li>
              <li>Auto-displays before flight.</li>
              <li>Updates with gate changes.</li>
              <li>No paper required.</li>
              <li>Works at most major airlines.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Android Google Wallet</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Same concept on Android.</li>
              <li>Stores loyalty cards, payment cards.</li>
              <li>Tap to pay.</li>
              <li>Free, built into Android.</li>
              <li>Same usage as Apple Wallet.</li>
              <li>Use whichever your phone has.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Empty your wallet</h3>
            <p className="text-sm text-muted-foreground">If your physical wallet is bursting with loyalty cards, spend 30 minutes adding them all to Apple Wallet. Most chain store apps have an &quot;Add to Apple Wallet&quot; button. Once added, you can leave the physical cards at home. Combined with Tap to Pay for credit cards, you might never need a physical wallet for shopping again.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
