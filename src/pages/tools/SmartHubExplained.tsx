import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Server } from 'lucide-react';

export default function SmartHubExplained() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Smart Home Hubs Explained | TekSure" description="Hub or no hub? Plain-English explainer for Echo, Nest Hub, HomePod, SmartThings, Hubitat. Skip if you can." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Server className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Smart Home Hubs Explained</h1>
          <p className="text-lg text-muted-foreground">When you need one. When you don&apos;t.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What a "hub" is</h2>
            <p className="text-sm">Central device that talks to your smart home gadgets — bulbs, locks, sensors. Lets them all work together. Can be:</p>
            <ul className="list-disc pl-5 space-y-1 text-sm mt-2">
              <li>Voice assistant (Echo, Nest Hub, HomePod) — most do hub duties now.</li>
              <li>Dedicated hub (SmartThings, Hubitat) — controls more devices.</li>
              <li>Built-in to a router (Google Wifi, Eero).</li>
              <li>Phone app — many systems work without any "hub".</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Most seniors don&apos;t need a separate hub</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Echo Dot ($35) handles 95% of senior smart home needs.</li>
              <li>Nest Hub Max ($229) does same + has screen for video calls.</li>
              <li>Most smart bulbs/plugs/cameras connect direct to wifi (no hub needed).</li>
              <li>Skip $80-200 dedicated hubs unless you have 30+ devices.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">When you NEED a real hub</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>You want Z-Wave or Zigbee devices (older protocols, more options).</li>
              <li>30+ smart devices.</li>
              <li>Apple HomeKit secure videos (HomePod or Apple TV does it).</li>
              <li>Complex automations across multiple platforms.</li>
              <li>You enjoy tinkering.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best dedicated hubs (if you want one)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>SmartThings Station</strong> — $60. Now Matter-compatible.</li>
              <li><strong>Hubitat C-8 Pro</strong> — $200. For serious tinkerers.</li>
              <li><strong>Apple TV 4K</strong> — $130. Doubles as HomeKit hub.</li>
              <li><strong>HomePod / HomePod Mini</strong> — $99-300. HomeKit hub + speaker.</li>
              <li><strong>Aeotec / Aqara hubs</strong> — for specific device families.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">"Matter" — new standard 2024+</h2>
            <p className="text-sm">Matter is a new universal smart home standard. Apple, Google, Amazon all support it. Means devices from any brand work with any voice assistant. Buy "Matter-certified" devices for future-proofing.</p>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Keep it simple</h3>
            <p className="text-sm text-muted-foreground">Most seniors do best with: Echo Dot + 2-4 smart bulbs/plugs + smart doorbell. That&apos;s it. Don&apos;t over-engineer. Tech that works beats fancy tech that confuses. Add things ONE at a time. Master each.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
