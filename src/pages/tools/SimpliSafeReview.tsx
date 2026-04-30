import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Shield } from 'lucide-react';

export default function SimpliSafeReview() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="SimpliSafe Home Security for Seniors | TekSure" description="SimpliSafe security system explained for seniors. No contract, easy setup, plain-English guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Shield className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">SimpliSafe</h1>
          <p className="text-lg text-muted-foreground">Home security. No contract. DIY install.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What is SimpliSafe?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Home security system — no contract required.</li>
              <li>Self-install — no technician needed.</li>
              <li>Sensors, cameras, alarm, monitoring.</li>
              <li>One of the most popular for seniors.</li>
              <li>Works without internet (cellular backup).</li>
              <li>24/7 professional monitoring optional.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Cost breakdown</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Starter kit — around $250–$350.</li>
              <li>No monitoring: free (self-monitored).</li>
              <li>Standard monitoring: $19.99/month.</li>
              <li>Interactive monitoring: $29.99/month.</li>
              <li>No long-term contract — cancel anytime.</li>
              <li>No installation fee.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What comes in kit</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Base station — the brain.</li>
              <li>Keypad — arm and disarm.</li>
              <li>Door + window sensors.</li>
              <li>Motion sensors.</li>
              <li>Key fob remote.</li>
              <li>Add cameras, smoke, water sensors separately.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Install tips</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Peel-and-stick sensors — no drilling needed.</li>
              <li>Set up from phone app.</li>
              <li>Plug in base station, follow phone steps.</li>
              <li>Test each sensor before finishing.</li>
              <li>Family member can help set up.</li>
              <li>SimpliSafe phone support very helpful.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior-friendly features</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Large keypad buttons — easy to press.</li>
              <li>Panic button available.</li>
              <li>Medical alert integration possible.</li>
              <li>Works with Alexa voice commands.</li>
              <li>Cellular backup — works when internet down.</li>
              <li>Remote access — family can check in.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Pros and cons</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Pro: no contract — flexible.</li>
              <li>Pro: DIY install — no appointment needed.</li>
              <li>Pro: works during internet outages.</li>
              <li>Con: cameras need WiFi.</li>
              <li>Con: app required for full features.</li>
              <li>Con: upfront hardware cost.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Best for seniors living alone</h3>
            <p className="text-sm text-muted-foreground">SimpliSafe is one of the top choices for seniors, especially those living alone. The panic button gives peace of mind. No contract means you can cancel if moving to assisted living. The $19.99 monitoring plan is affordable. Many adult children buy SimpliSafe systems as a gift for aging parents — installation is straightforward enough that a family visit can get it done.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
