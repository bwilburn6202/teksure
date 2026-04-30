import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Umbrella } from 'lucide-react';

export default function UmbrellaInsuranceSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Umbrella Insurance for Seniors | TekSure" description="Extra liability protection for senior assets. Why umbrella insurance matters." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Umbrella className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Umbrella Insurance</h1>
          <p className="text-lg text-muted-foreground">Protect savings from lawsuits.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What is umbrella?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Extra liability coverage above home + auto.</li>
              <li>Kicks in when those policies max out.</li>
              <li>Covers $1M-$5M+ excess.</li>
              <li>Cheap — $200-$500/year for $1M.</li>
              <li>Protects your retirement savings.</li>
              <li>Best deal in insurance.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why seniors need it</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Have assets to lose (retirement savings).</li>
              <li>Lawsuits could wipe out 401k.</li>
              <li>Visitor falls at your home — sues.</li>
              <li>Car accident more than auto policy.</li>
              <li>Dog bite litigation common.</li>
              <li>Drink + drive accident catastrophic.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Coverage amount</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>$1M — minimum recommended.</li>
              <li>$2M — for moderate net worth.</li>
              <li>$3M+ — high net worth.</li>
              <li>Match coverage to net worth.</li>
              <li>Cheaper than you&apos;d expect.</li>
              <li>Renew annually.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Cost</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>$1M coverage = $200-$300/year typical.</li>
              <li>$2M = $300-$500/year.</li>
              <li>Bundle with home + auto for discount.</li>
              <li>Most affordable insurance you can buy.</li>
              <li>Insurer requires home + auto with them.</li>
              <li>Or umbrella standalone at slightly higher rate.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Get a quote</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Call your home/auto insurer.</li>
              <li>Quote takes 15 minutes.</li>
              <li>Provide net worth + assets info.</li>
              <li>Discuss coverage with agent.</li>
              <li>Decision in days.</li>
              <li>Effective immediately when bound.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">When critical</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Have pool or trampoline.</li>
              <li>Dog with bite history.</li>
              <li>Frequent home guests.</li>
              <li>Active driver still.</li>
              <li>Substantial retirement savings.</li>
              <li>Live in litigious state.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Best $300/year you can spend</h3>
            <p className="text-sm text-muted-foreground">For seniors with $200,000+ in savings, umbrella insurance at $200-$500/year is the most cost-effective insurance available. Protects your retirement from one bad lawsuit. Many seniors don&apos;t know about umbrella insurance — call your insurer today and ask for a quote. 15 minutes could save your retirement.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
