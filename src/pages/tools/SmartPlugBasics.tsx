import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Plug } from 'lucide-react';

export default function SmartPlugBasics() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Smart Plug Basics — What They Do, Which to Buy | TekSure" description="A $10 smart plug turns any lamp or appliance smart. Plain-English explainer of what they do, what to avoid, and which brands work." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Plug className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Smart Plug Basics</h1>
          <p className="text-lg text-muted-foreground">$10 to make any lamp smart.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What a smart plug does</h2>
            <p className="text-sm">A smart plug goes between the wall and your device. Turns the device on or off from your phone, on a schedule, by voice (Alexa, Google), or based on time (sunset, away from home).</p>
            <ul className="list-disc pl-5 space-y-1 text-sm mt-2">
              <li>Lamps — turn on at sunset, off at bedtime, automatically.</li>
              <li>Coffee maker — voice-on from bed.</li>
              <li>Christmas tree — schedule lights.</li>
              <li>Space heater — never left on by accident again.</li>
              <li>Cable box / TV / consoles — auto-off overnight (saves $50-100/year).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best buys (2025)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Kasa Smart Plug Mini (TP-Link)</strong> — $10 each. The standard. Works with Alexa, Google.</li>
              <li><strong>Amazon Smart Plug</strong> — $13. Works with Alexa only. Easiest setup if you have an Echo.</li>
              <li><strong>Wemo</strong> — $20. Works with Apple HomeKit (good if you only use iPhone/iPad).</li>
              <li><strong>Avoid</strong> off-brand $5 plugs from random Amazon sellers — security and reliability are bad.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Setup in 5 minutes</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Plug into wall.</li>
              <li>Download the app (Kasa app, Amazon Alexa, etc.).</li>
              <li>App finds the plug. Connects to your wifi.</li>
              <li>Name it ("Living Room Lamp").</li>
              <li>Set schedule OR add to Alexa/Google Home for voice control.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What NOT to plug in</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Refrigerator — needs constant power.</li>
              <li>Medical equipment (CPAP, oxygen).</li>
              <li>Anything over 1,800 watts (most space heaters are 1,500W and OK).</li>
              <li>Aquarium pumps — fish need 24/7.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Best first use</h3>
            <p className="text-sm text-muted-foreground">Put one on your living room lamp. Set it to come on at sunset. After two weeks, you&apos;ll wonder how you lived without it. Then add 3-4 more for the rest of the house.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
