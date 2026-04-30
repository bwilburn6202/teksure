import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Refrigerator } from 'lucide-react';

export default function ApplianceLifespanGuide() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Appliance Lifespan Guide for Seniors | TekSure" description="Repair vs replace. Plain-English senior guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Refrigerator className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Appliance Lifespan</h1>
          <p className="text-lg text-muted-foreground">Repair or replace? Know the limits.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Average lifespans</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Refrigerator</strong> — 13 years.</li>
              <li><strong>Dishwasher</strong> — 9 years.</li>
              <li><strong>Microwave</strong> — 9 years.</li>
              <li><strong>Range / oven</strong> — 13-15 years.</li>
              <li><strong>Washing machine</strong> — 10 years.</li>
              <li><strong>Dryer</strong> — 13 years.</li>
              <li><strong>Water heater</strong> — 10-15 years.</li>
              <li><strong>HVAC</strong> — 15-20 years.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Repair-or-replace rule</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>If repair &gt; 50% of new price = replace.</li>
              <li>If appliance &gt; 75% of life = replace.</li>
              <li>Repeated repairs same year = replace.</li>
              <li>Energy savings new appliance.</li>
              <li>Otherwise repair makes sense.</li>
              <li>Get estimate first.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Easy DIY fixes</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Refrigerator coil cleaning yearly.</li>
              <li>Dryer lint trap every load.</li>
              <li>Dryer vent yearly (fire hazard).</li>
              <li>Dishwasher filter clean monthly.</li>
              <li>Garbage disposal — ice + lemon.</li>
              <li>Microwave + range — vinegar wipe.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">When to call repair person</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Strange noises.</li>
              <li>Leaking water.</li>
              <li>Burning smell.</li>
              <li>Won&apos;t start.</li>
              <li>Inconsistent temperature.</li>
              <li>$80-150 service call typical.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior-friendly buying</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>French door fridge (less bending).</li>
              <li>Front-load washer (no reach down).</li>
              <li>Wall oven mid-height (no bending).</li>
              <li>Induction range — safer.</li>
              <li>Larger displays + buttons.</li>
              <li>Voice control (Alexa-compatible).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Save money</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Costco / Lowes during holiday sales.</li>
              <li>Open-box / scratch-and-dent — 30% off.</li>
              <li>Used appliances Facebook Marketplace.</li>
              <li>Energy Star = lower utility bills.</li>
              <li>Tax credit some efficient models.</li>
              <li>Brand: Bosch, GE, Whirlpool reliable.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Old appliance disposal</h3>
            <p className="text-sm text-muted-foreground">Most retailers haul away old when delivering new — free. Or city pickup ($25). Some appliance recycling — Best Buy, Home Depot. Avoid leaving on curb (illegal). Donate working ones to Habitat for Humanity ReStore. Goodwill takes some. Don&apos;t waste working appliances.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
