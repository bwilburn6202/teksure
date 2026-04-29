import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Plane } from 'lucide-react';

export default function TravelInsuranceReality() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Travel Insurance — Worth It? | TekSure" description="When to buy travel insurance, what credit cards already cover for free, and what the airline owes you regardless. Plain-English breakdown." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Plane className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Travel Insurance Reality</h1>
          <p className="text-lg text-muted-foreground">When you need it. When you don&apos;t.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">When to ALWAYS buy</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Cruise</strong> — cancellation rules are brutal. Pre-existing conditions are big risk for seniors.</li>
              <li><strong>International trips</strong> over $3,000.</li>
              <li><strong>Travel outside US</strong> — Medicare doesn&apos;t cover overseas. Get medical evac coverage.</li>
              <li><strong>You&apos;re 70+ and traveling far</strong> — health emergencies happen.</li>
              <li><strong>Trip with a tight schedule</strong> (wedding, funeral, missed-event consequences).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">When to skip</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Domestic flight under $500.</li>
              <li>Refundable hotel + flexible flight already.</li>
              <li>You have a credit card with built-in trip protection (see below).</li>
              <li>Trip is short, healthy traveler, no upfront non-refundable costs.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Credit cards with built-in coverage</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Chase Sapphire Preferred</strong> ($95/yr) — trip cancellation up to $10,000, baggage, rental car.</li>
              <li><strong>Chase Sapphire Reserve</strong> ($550/yr) — same plus medical evac, trip delay.</li>
              <li><strong>AmEx Platinum</strong> ($695/yr) — premium trip and medical coverage.</li>
              <li><strong>Capital One Venture X</strong> ($395/yr) — trip cancellation, lost luggage.</li>
            </ul>
            <p className="text-sm mt-3">Catch — you must pay for the trip with that card. Read the benefits guide BEFORE the trip.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best policies (if you do buy)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Allianz Travel</strong> — biggest. Annual plan good for frequent travelers.</li>
              <li><strong>Travel Guard (AIG)</strong> — strong cruise coverage.</li>
              <li><strong>World Nomads</strong> — best for adventure trips.</li>
              <li><strong>SquareMouth.com</strong> — comparison site. Shop by trip.</li>
              <li>Costs roughly 4-10% of trip cost.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">"Cancel for any reason" rider</h2>
            <p className="text-sm">Standard insurance only covers listed reasons (illness, weather, etc.). "CFAR" (Cancel For Any Reason) lets you cancel for ANY reason and get 50-75% back. Adds 40-50% to premium. Worth it for big trips when you&apos;re unsure.</p>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Airline owes you anyway</h3>
            <p className="text-sm text-muted-foreground">If a domestic US airline cancels your flight or delays it more than 3 hours, you&apos;re entitled to a full refund — even on non-refundable tickets. DOT rule, 2024. Don&apos;t accept a voucher unless you want one.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
