import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Sun } from 'lucide-react';

export default function SnowbirdTechSetup() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Snowbird Tech Setup for Seniors | TekSure" description="Tech checklist for senior snowbirds heading south. Mail, banking, doctors, and more." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Sun className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Snowbird Tech</h1>
          <p className="text-lg text-muted-foreground">Tech setup for the long winter trip.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Mail handling</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>USPS Hold Mail or Forward to Florida address.</li>
              <li>Or use iPostal1 — scan + forward as needed.</li>
              <li>Switch all bills to autopay + e-statements.</li>
              <li>Sign up for USPS Informed Delivery (free).</li>
              <li>Tell important contacts of new address.</li>
              <li>Set up USPS forwarding online.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Banking + bills</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>All bills on autopay.</li>
              <li>Mobile banking apps installed + tested.</li>
              <li>Mobile deposit for any paper checks.</li>
              <li>Notify bank of travel + new state.</li>
              <li>Multiple credit cards (in case one declines).</li>
              <li>Cash for emergencies.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Healthcare access</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Confirm Medicare works in destination state.</li>
              <li>Get list of doctors at destination.</li>
              <li>Arrange 90-day prescriptions before leaving.</li>
              <li>Set up mail-order pharmacy with new address.</li>
              <li>Get medical records (or portal access).</li>
              <li>Telehealth apps for non-emergency questions.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Home security</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Smart cameras at primary home.</li>
              <li>Smart thermostat — keep house from freezing.</li>
              <li>Smart light timers.</li>
              <li>Trusted neighbor watching house.</li>
              <li>USPS hold mail.</li>
              <li>Newspaper delivery hold.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Family connection</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Echo Show in primary home.</li>
              <li>Drop In to check in remotely.</li>
              <li>Weekly video call schedule.</li>
              <li>Share location with adult children.</li>
              <li>Find My (iPhone) for safety.</li>
              <li>Daily check-in text or call.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Internet at destination</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Home WiFi at Florida property essential.</li>
              <li>Or T-Mobile Home Internet — easy setup.</li>
              <li>Streaming services follow you (Netflix, Hulu).</li>
              <li>Cable subscription not needed.</li>
              <li>Test before leaving for the season.</li>
              <li>Cellular as backup.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Set up systems before you leave</h3>
            <p className="text-sm text-muted-foreground">Two weeks before leaving for the south: switch everything to digital, set up autopay, get 90-day prescriptions, install smart thermostat, brief your neighbor. Many snowbirds say their first season was stressful — once they had the tech systems set up, subsequent winters became easy. Spend the time once, enjoy years of stress-free travel.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
