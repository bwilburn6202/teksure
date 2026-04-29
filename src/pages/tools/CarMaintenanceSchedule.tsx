import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Wrench } from 'lucide-react';

export default function CarMaintenanceSchedule() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Car Maintenance Schedule for Seniors | TekSure" description="Keep car running. Plain-English maintenance schedule for senior drivers." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Wrench className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Maintenance Schedule</h1>
          <p className="text-lg text-muted-foreground">Don&apos;t over-spend. Don&apos;t skip essentials.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Monthly</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Check tire pressure (cold).</li>
              <li>Check oil level.</li>
              <li>Test all lights (turn signals, headlights, brake lights).</li>
              <li>Wash car (especially salt).</li>
              <li>Top wiper fluid.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Every 5,000-7,500 miles</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Oil change (synthetic 7,500-10,000).</li>
              <li>Tire rotation.</li>
              <li>Inspect brakes.</li>
              <li>Check fluids (coolant, brake, transmission, power steering).</li>
              <li>Check belts + hoses.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Yearly</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Wheel alignment.</li>
              <li>Cabin air filter.</li>
              <li>Wiper blades replace.</li>
              <li>Battery test.</li>
              <li>State inspection (per state).</li>
              <li>Brake inspection.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Every 30K miles</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Engine air filter.</li>
              <li>Spark plugs (some 100K).</li>
              <li>Brakes pads (varies).</li>
              <li>Suspension inspection.</li>
              <li>Check owner&apos;s manual specifics.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Every 60-100K miles</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Timing belt (some cars).</li>
              <li>Transmission service.</li>
              <li>Coolant flush.</li>
              <li>Spark plugs (long-life).</li>
              <li>Major tune-up.</li>
              <li>Plan ahead — expensive but essential.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Save money</h3>
            <p className="text-sm text-muted-foreground">Find independent mechanic — half dealer prices. Get 2 quotes. Don&apos;t fall for &quot;recommended&quot; services not in manual. Ask &quot;Is this in manufacturer&apos;s schedule?&quot; Track yourself in notebook. Trust your own knowledge.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
