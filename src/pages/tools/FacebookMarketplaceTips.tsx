import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { ShoppingBag } from 'lucide-react';

export default function FacebookMarketplaceTips() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Facebook Marketplace for Seniors | TekSure" description="Sell + buy locally on Facebook Marketplace. Senior safety + selling tips." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <ShoppingBag className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Facebook Marketplace</h1>
          <p className="text-lg text-muted-foreground">Local sales. Senior safety first.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What sells well locally</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Furniture — too expensive to ship.</li>
              <li>Lawn equipment.</li>
              <li>Exercise equipment.</li>
              <li>Patio furniture.</li>
              <li>Children&apos;s items.</li>
              <li>Tools.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">List for free</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Free Facebook account required.</li>
              <li>Tap Marketplace icon.</li>
              <li>+Sell button.</li>
              <li>Add photos + description.</li>
              <li>Set price + radius.</li>
              <li>Done in 2 minutes.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior safety rules</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Meet in public — Walmart, police station.</li>
              <li>Day light only.</li>
              <li>Tell family member.</li>
              <li>Bring spouse or friend.</li>
              <li>Cash only — no checks.</li>
              <li>Many police stations have &quot;Safe Trade&quot; spots.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Don&apos;t allow these</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Don&apos;t let strangers in your home.</li>
              <li>Especially if living alone.</li>
              <li>Don&apos;t accept Zelle/Venmo from buyers (scams).</li>
              <li>Cash only or in-person card payment.</li>
              <li>Refuse buyers who want to ship.</li>
              <li>Local-only is the safer rule.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Common scams</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Buyer overpays + asks refund difference (fake check).</li>
              <li>Asks for your phone number to text — phishing setup.</li>
              <li>Wants to ship — usually scam.</li>
              <li>Pays via gift cards.</li>
              <li>Send fake Zelle email pretending paid.</li>
              <li>Ignore + report all suspicious.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">For senior buyers</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Inspect before paying.</li>
              <li>Check seller&apos;s profile + ratings.</li>
              <li>Ask questions in chat first.</li>
              <li>Bring spouse or friend.</li>
              <li>Cash + receipt.</li>
              <li>Know what fair price is.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Police safe trade spots</h3>
            <p className="text-sm text-muted-foreground">Many police stations now have designated &quot;Safe Trade&quot; areas in their lot — under camera surveillance. Use these for Marketplace transactions. Free + safe. Search &quot;safe trade location near me.&quot; Combined with cash-only + bring-a-friend rules, Facebook Marketplace becomes a safe + valuable tool for seniors.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
