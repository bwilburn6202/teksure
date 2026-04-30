import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Thermometer } from 'lucide-react';

export default function HVACMaintenanceApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="HVAC Maintenance Apps for Senior Homeowners | TekSure" description="Schedule HVAC maintenance, find repair pros. Senior home heating + cooling tips." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Thermometer className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">HVAC Maintenance</h1>
          <p className="text-lg text-muted-foreground">Annual service prevents breakdowns.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Annual maintenance plan</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Most HVAC companies offer plans.</li>
              <li>$150-$300/year typical.</li>
              <li>Spring AC tune-up.</li>
              <li>Fall furnace tune-up.</li>
              <li>Priority service when broken.</li>
              <li>Discounts on repairs.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">DIY filter changes</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Change every 1-3 months.</li>
              <li>FilterEasy app — auto-shipment.</li>
              <li>Saves trips to hardware store.</li>
              <li>Sized to your HVAC.</li>
              <li>Major cause of HVAC failure = dirty filter.</li>
              <li>Easy senior DIY task.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Smart thermostat</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Nest, Ecobee — $130-$250.</li>
              <li>Learns your patterns.</li>
              <li>Saves 10-15% on energy bills.</li>
              <li>Control from phone.</li>
              <li>Geofencing — adjusts when you leave.</li>
              <li>Great senior upgrade.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Energy bill apps</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Utility company apps — track usage.</li>
              <li>OhmConnect — earn rewards reducing usage.</li>
              <li>Sense — home energy monitor ($300).</li>
              <li>Identify energy hogs.</li>
              <li>Most utilities offer free analysis.</li>
              <li>Lower bills + carbon impact.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">When to replace</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>HVAC lifespan 15-20 years.</li>
              <li>Repairs over $1,500 — consider replacing.</li>
              <li>New systems much more efficient.</li>
              <li>Federal tax credits available.</li>
              <li>State + utility rebates.</li>
              <li>Heat pumps increasingly popular.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Find HVAC pro</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Yelp, Google reviews critical.</li>
              <li>Ask neighbors via Nextdoor.</li>
              <li>Verify license + insurance.</li>
              <li>Energy Star certified contractors.</li>
              <li>Get 3 quotes for big jobs.</li>
              <li>Annual contract for reliable service.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">$200/year prevents disasters</h3>
            <p className="text-sm text-muted-foreground">Annual HVAC maintenance plan ($150-$300/year) catches small problems before they become $5,000 replacements. Spring + fall tune-ups discover issues. Plus priority service when AC fails on hottest day. For senior homes especially — comfortable home prevents heat stroke + cold dangers. Worth every dollar.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
