import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Shield } from 'lucide-react';

export default function AutoExtendedWarranty() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Auto Extended Warranty Guide | TekSure" description="Avoid scams. Plain-English senior guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Shield className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Extended Warranty</h1>
          <p className="text-lg text-muted-foreground">Mostly scams. Sometimes useful.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Robocall scams</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>&quot;Your warranty is expiring&quot; calls.</li>
              <li>NEVER from your dealer.</li>
              <li>Always scams.</li>
              <li>Block + report.</li>
              <li>Robokiller app — auto-block.</li>
              <li>FCC has issued warnings.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">When extended warranty MIGHT help</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>European luxury (BMW, Audi) — expensive repairs.</li>
              <li>Hybrid / EV — battery replacement risk.</li>
              <li>Used car post-warranty.</li>
              <li>Drive 100K+ miles plan.</li>
              <li>Anxiety about big repairs.</li>
              <li>Toyota / Honda almost never need.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Manufacturer-backed only</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Buy from car maker (Ford, Toyota, Honda).</li>
              <li>Repairs at any dealer.</li>
              <li>Quality parts.</li>
              <li>$1,500-3,000 typical cost.</li>
              <li>Negotiate — same as price.</li>
              <li>Don&apos;t pay full price.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Avoid third-party</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Endurance, CarShield — avoid.</li>
              <li>Heavy advertising = high cost.</li>
              <li>Complex claim denials.</li>
              <li>BBB complaints common.</li>
              <li>State AG complaints common.</li>
              <li>Worth less than premiums paid.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Self-warranty alternative</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Save warranty cost in dedicated account.</li>
              <li>$3,000 in repair fund.</li>
              <li>Earn interest until needed.</li>
              <li>Average car costs $700/yr in repairs.</li>
              <li>Rarely use $3,000 in any year.</li>
              <li>Keep difference if not used.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Read fine print</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Wear-and-tear excluded usually.</li>
              <li>Brakes + tires excluded.</li>
              <li>Pre-existing conditions excluded.</li>
              <li>Maintenance neglect = void.</li>
              <li>Deductibles per visit.</li>
              <li>Dealer of record limits.</li>
              <li>Pro-rated cancellation fees.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Skip them mostly</h3>
            <p className="text-sm text-muted-foreground">Consumer Reports — most extended warranties not worth cost. AAA — same finding. The financial industry profits from selling them. Senior strategy: buy reliable car (Toyota, Honda), maintain it, save for repairs. Dealer pressure to buy = big margin to dealer. Just say no.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
