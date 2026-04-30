import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Wind } from 'lucide-react';

export default function HurricanePrepDigital() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Hurricane Prep Digital Tools for Seniors | TekSure" description="Apps + tools for senior hurricane preparation. Tracking, alerts, evacuation, recovery." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Wind className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Hurricane Prep Digital</h1>
          <p className="text-lg text-muted-foreground">Apps for hurricane season.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">National Hurricane Center app</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Free official NOAA tracking.</li>
              <li>Live storm tracks.</li>
              <li>Cone of uncertainty.</li>
              <li>Storm surge forecasts.</li>
              <li>5-day projections.</li>
              <li>Most reliable hurricane source.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Documentation apps</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Photograph belongings before storm.</li>
              <li>Apple Notes — &quot;Home Inventory&quot; album.</li>
              <li>HomeZada — paid home inventory app.</li>
              <li>Insurance claims need pre-loss photos.</li>
              <li>Cloud backup essential.</li>
              <li>Document serial numbers + receipts.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Evacuation apps</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Florida 511 — traffic + road closures.</li>
              <li>Waze — real-time evacuation routes.</li>
              <li>GasBuddy — find open gas stations.</li>
              <li>Hotels Tonight — last-minute lodging.</li>
              <li>Red Cross Hurricane app — shelters.</li>
              <li>Plan multiple route options.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Power outage tools</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Utility company outage map.</li>
              <li>PowerOutage.us — nationwide.</li>
              <li>Battery-powered weather radio.</li>
              <li>Portable power station for CPAP.</li>
              <li>Phone hotspot keeps internet alive.</li>
              <li>Plan for 3+ days without power.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Family communication</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Designate out-of-state contact.</li>
              <li>Text more reliable than calls during disasters.</li>
              <li>Share Find My location with family.</li>
              <li>Group text for status updates.</li>
              <li>Save important phone numbers paper backup.</li>
              <li>Preserve phone battery.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">After storm</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>FEMA app — apply for assistance.</li>
              <li>Photograph all damage immediately.</li>
              <li>Insurance company app — file claim.</li>
              <li>Don&apos;t throw anything before adjuster sees.</li>
              <li>Track expenses — meals, hotel, supplies.</li>
              <li>Save receipts for tax deductions.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Photograph everything before season</h3>
            <p className="text-sm text-muted-foreground">Before hurricane season starts (June 1), spend 30 minutes photographing every room in your home. Open closets, photograph contents. This pre-loss documentation is gold for insurance claims if disaster strikes. Back up to iCloud or Google Photos. Many seniors who lost everything to hurricanes had no documentation — extending insurance claims by months.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
