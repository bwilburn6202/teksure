import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Cable } from 'lucide-react';

export default function EthernetVsWifi() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Ethernet vs WiFi for Seniors | TekSure" description="When to use cable, when to use WiFi. Plain-English explainer of speed + reliability + safety differences." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Cable className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Ethernet vs WiFi</h1>
          <p className="text-lg text-muted-foreground">Wire when it counts.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">When to use Ethernet</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Smart TV</strong> — streaming 4K is much smoother on cable.</li>
              <li><strong>Desktop computer</strong> — wired is faster + steadier.</li>
              <li><strong>Game console</strong> — kids&apos; gaming benefits.</li>
              <li><strong>Home office</strong> — Zoom calls don&apos;t glitch.</li>
              <li><strong>Voice phone (VoIP)</strong> — sounds clearer.</li>
              <li><strong>Anything that struggles on WiFi</strong> — try cable first.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">When to use WiFi</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Phones, iPads, laptops (mobility).</li>
              <li>Smart home devices (Echo, smart bulbs).</li>
              <li>Anything you carry around.</li>
              <li>Most of your home is fine on WiFi.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">No nearby ethernet outlet?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Long ethernet cable</strong> — $10-30 for 50ft. Run along baseboards.</li>
              <li><strong>Powerline adapters</strong> — TP-Link AV2000 ($60). Use HOUSE WIRING as ethernet.</li>
              <li><strong>MoCA adapter</strong> — uses COAX (TV cable wires) as ethernet. Best for older homes.</li>
              <li><strong>Hire electrician</strong> — runs CAT6 wire through walls. Permanent.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Cable choice</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Cat6</strong> — supports gigabit. Most homes. $1/ft.</li>
              <li><strong>Cat6a / Cat7</strong> — for 10+ Gigabit. Overkill for most homes.</li>
              <li><strong>Cat5e</strong> — older, still works for most home use.</li>
              <li>Don&apos;t buy fancy "audio" Cat cables — marketing. Cat6 is Cat6.</li>
              <li>Amazon Basics, Monoprice = cheap + good.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Best ROI: TV ethernet</h3>
            <p className="text-sm text-muted-foreground">Smart TV on ethernet = stable streaming. No buffering. No "sorry, video paused" interruptions during the game. $20 cable + 5 min run = best WiFi upgrade for many seniors.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
