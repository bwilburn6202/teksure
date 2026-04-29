import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Zap } from 'lucide-react';

export default function EVHomeChargerGuide() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="EV Home Charger Guide for Seniors | TekSure" description="Charge electric car at home. Plain-English EV charger setup for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Zap className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">EV Home Charger</h1>
          <p className="text-lg text-muted-foreground">Plug in at night. Drive 250+ miles morning.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">3 levels of charging</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Level 1</strong> — regular outlet. 4-5 miles/hour. Slow.</li>
              <li><strong>Level 2</strong> — 240V outlet. 25-40 miles/hour. Best home.</li>
              <li><strong>Level 3 (DC fast)</strong> — public stations. 100+ miles in 30 min.</li>
              <li>Most home installs Level 2.</li>
              <li>Charges overnight — drive full daily.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best Level 2 chargers 2026</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Wallbox Pulsar Plus</strong> — $700. Compact + smart.</li>
              <li><strong>ChargePoint Home Flex</strong> — $700. Reliable.</li>
              <li><strong>Tesla Wall Connector</strong> — $475. For Teslas + others.</li>
              <li><strong>Grizzl-E Classic</strong> — $400. Tough + reliable.</li>
              <li><strong>JuiceBox</strong> — $700. Senior-favorite app.</li>
              <li>$200-1,000 install via electrician.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Federal tax credits</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>30% federal tax credit on EV charger install.</li>
              <li>Up to $1,000.</li>
              <li>Plus state/utility rebates.</li>
              <li>Apply at install.</li>
              <li>Pays back fast.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Install steps</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Pick charger model.</li>
              <li>Hire licensed electrician.</li>
              <li>240V circuit installed.</li>
              <li>Mounted in garage.</li>
              <li>Hardwired or 240V outlet.</li>
              <li>Inspection by city.</li>
              <li>Plug in EV — done.</li>
              <li>4-8 hours typical install.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Cost to charge</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>$0.10-0.15/kWh average.</li>
              <li>~$8-12 to fill EV from empty.</li>
              <li>Equivalent gas: $1/gallon.</li>
              <li>30 miles per dollar (vs 8 miles per dollar gas).</li>
              <li>Off-peak hours save more.</li>
              <li>$80-100/month vs $200-300 gas.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Apartment / no garage</h3>
            <p className="text-sm text-muted-foreground">If no garage — Level 1 (regular outlet) might work for daily local use. Some apartment complexes adding chargers. Check workplace charging. Public DC fast chargers — Tesla Supercharger, Electrify America. EV ownership easier than ever.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
