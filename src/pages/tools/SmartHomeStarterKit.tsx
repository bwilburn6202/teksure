import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Home } from 'lucide-react';

export default function SmartHomeStarterKit() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Smart Home Starter Kit for Seniors | TekSure" description="Build a senior-friendly smart home in 4 weeks. Plain-English step-by-step from $0 to $500." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Home className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Smart Home Starter Kit</h1>
          <p className="text-lg text-muted-foreground">Build it in 4 weeks. $50-500.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Pick ONE ecosystem</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Amazon Alexa</strong> — most affordable, biggest selection.</li>
              <li><strong>Google Home</strong> — best AI, integrates with Pixel/Android.</li>
              <li><strong>Apple HomeKit</strong> — privacy-first, locked to Apple.</li>
              <li>Pick early. Don&apos;t mix.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Week 1 — voice assistant</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Buy <strong>Echo Dot ($35)</strong> or <strong>Nest Mini ($35)</strong>.</li>
              <li>Plug in. Open the app on phone.</li>
              <li>Connect to wifi.</li>
              <li>Say "Alexa, what time is it?" — first command.</li>
              <li>Practice 1 week — weather, timers, music, calls.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Week 2 — smart lights</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Buy 1-2 smart bulbs ($10-15 each — Kasa, Wyze).</li>
              <li>Or 2 smart plugs ($10) for existing lamps.</li>
              <li>Set up: "Alexa, turn on lamp."</li>
              <li>Routine: "Alexa, good morning" → lights on, news, weather.</li>
              <li>Add motion sensor → bathroom light at night.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Week 3 — security</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Smart doorbell — Ring or Nest ($100-180).</li>
              <li>Or smart lock — Schlage Encode ($200) or August.</li>
              <li>See who&apos;s at door. Talk to delivery.</li>
              <li>Lock from phone if you forgot.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Week 4 — comfort</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Smart thermostat — Nest or Ecobee ($130-250).</li>
              <li>"Alexa, set thermostat to 72."</li>
              <li>Auto-adjust when away/home.</li>
              <li>Save 10-15% on energy bills typically.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best routines for seniors</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>"Good morning" → lights, weather, news.</li>
              <li>"Goodnight" → all off, lock doors, thermostat down.</li>
              <li>"I&apos;m leaving" → away mode, security on.</li>
              <li>"I&apos;m home" → lights, climate, calm music.</li>
              <li>"Find my phone" → ring lost phone.</li>
              <li>"Call my daughter" → drop-in video call.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Total spent: $50-500</h3>
            <p className="text-sm text-muted-foreground">For under $500, you can have voice assistant + smart lights + doorbell + thermostat = full smart home. Stretch over 4-8 weeks. Start small. Add what you need.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
