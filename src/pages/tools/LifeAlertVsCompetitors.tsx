import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { AlertCircle } from 'lucide-react';

export default function LifeAlertVsCompetitors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Life Alert vs Competitors for Seniors | TekSure" description="Why Life Alert is so expensive — and what better alternatives exist for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <AlertCircle className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Life Alert</h1>
          <p className="text-lg text-muted-foreground">Famous brand. Steep cost.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Life Alert pricing</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>$70+/month — most expensive option.</li>
              <li>3-year contracts typical.</li>
              <li>Equipment fees + activation fees.</li>
              <li>Total 3-year cost: $2,500+.</li>
              <li>&quot;I&apos;ve fallen and I can&apos;t get up&quot; brand.</li>
              <li>Aggressive sales tactics complaints.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why so expensive?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Brand recognition.</li>
              <li>Heavy marketing on TV.</li>
              <li>Old reputation drives sales.</li>
              <li>Same monitoring as cheaper services.</li>
              <li>Long-term contracts lock in payments.</li>
              <li>Hard to cancel mid-contract.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Better alternatives</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Bay Alarm Medical — $25/mo, no contract.</li>
              <li>Medical Guardian — $30+/mo.</li>
              <li>MobileHelp — $20+/mo.</li>
              <li>Philips Lifeline — $30+/mo.</li>
              <li>All same monitoring quality.</li>
              <li>Save $30–$50/month vs Life Alert.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Bay Alarm Medical (best value)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>$25/month in-home plan.</li>
              <li>$30/month mobile + GPS.</li>
              <li>No contracts.</li>
              <li>Free equipment.</li>
              <li>Free spouse monitoring.</li>
              <li>Save $500+/year vs Life Alert.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">If already with Life Alert</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Read your contract carefully.</li>
              <li>Most have early termination fees.</li>
              <li>Sometimes worth paying to switch.</li>
              <li>Don&apos;t auto-renew without comparing.</li>
              <li>Negotiate with Life Alert — sometimes lower.</li>
              <li>Or switch when contract ends.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Watch for scams</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Door-to-door medical alert sales.</li>
              <li>Phone calls saying &quot;your alert needs upgrading.&quot;</li>
              <li>Fake Life Alert calls.</li>
              <li>Always research before signing anything.</li>
              <li>Hang up on cold callers.</li>
              <li>Never give credit card to unsolicited callers.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Same protection, half the cost</h3>
            <p className="text-sm text-muted-foreground">Life Alert charges $70+/month for the same monitoring service Bay Alarm Medical or Medical Guardian provides for $25–$30. The technology is identical. The service quality is identical. The brand recognition is the only difference. Many seniors waste hundreds yearly. Switch when your contract ends — your bank account will thank you.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
