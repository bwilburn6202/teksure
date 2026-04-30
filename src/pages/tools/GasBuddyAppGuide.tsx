import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Fuel } from 'lucide-react';

export default function GasBuddyAppGuide() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="GasBuddy App for Seniors | TekSure" description="Find cheapest gas prices nearby. GasBuddy + alternatives explained for senior drivers." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Fuel className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">GasBuddy</h1>
          <p className="text-lg text-muted-foreground">Find cheapest gas near you.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What is GasBuddy?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Free app shows gas prices at nearby stations.</li>
              <li>Updated by community of drivers.</li>
              <li>Save 10–30 cents per gallon often.</li>
              <li>Map view + list view.</li>
              <li>Filter by gas type (regular, premium, diesel).</li>
              <li>Free download — iPhone + Android.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">How it works</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Open app — sees your location.</li>
              <li>Shows all gas stations within set radius.</li>
              <li>Sorted by price, lowest first.</li>
              <li>Tap station for directions.</li>
              <li>Tap &quot;Report price&quot; to update community.</li>
              <li>Earn points for reporting prices.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">GasBuddy Pay</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Optional payment service.</li>
              <li>Save up to 25 cents/gallon at participating stations.</li>
              <li>Connects to your bank account.</li>
              <li>Free, no monthly fee.</li>
              <li>Works at most major chains.</li>
              <li>Adds another small discount layer.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Other gas apps</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Gas Guru — also free, similar features.</li>
              <li>Waze — shows gas prices on routes.</li>
              <li>Google Maps — shows gas stations + prices.</li>
              <li>Upside — cashback on gas purchases.</li>
              <li>Costco gas — usually cheapest if member.</li>
              <li>Sam&apos;s Club gas — similar discount.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior gas saving tips</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>AAA discount at Shell — 5 cents/gallon.</li>
              <li>Grocery store gas points (Kroger, Safeway).</li>
              <li>Walmart+ — 10 cents/gallon at Walmart + Murphy.</li>
              <li>Sam&apos;s Club + Costco — biggest savings if member.</li>
              <li>Fill up before holidays — prices spike.</li>
              <li>Tuesday/Wednesday morning often cheapest.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Privacy considerations</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>App tracks location to find nearby gas.</li>
              <li>Limit location: only when using app.</li>
              <li>Data may be sold to advertisers.</li>
              <li>Read privacy policy if concerned.</li>
              <li>Trade-off: convenience for some tracking.</li>
              <li>Most senior drivers fine with this.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Save $200+ per year</h3>
            <p className="text-sm text-muted-foreground">If you drive an average amount, GasBuddy can save you $200–$400 per year by directing you to the cheapest stations on your normal routes. Free to download, no subscription. Many seniors check it before any drive across town. Combine with Costco gas membership and grocery rewards programs for maximum savings.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
