import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Wifi } from 'lucide-react';

export default function PocketWifiAbroad() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Pocket WiFi for International Travel Seniors | TekSure" description="Stay connected abroad without huge phone bills. Pocket WiFi and eSIM options for senior travelers." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Wifi className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">WiFi Abroad</h1>
          <p className="text-lg text-muted-foreground">Stay connected internationally without huge bills.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">The problem: roaming charges</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Using your regular phone abroad = expensive.</li>
              <li>Some carriers charge $10–$15/day for international.</li>
              <li>Unexpected charges = bill shock.</li>
              <li>Call carrier before trip — know your plan.</li>
              <li>Or use one of these better options.</li>
              <li>Never assume your plan works abroad for free.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Option 1: Pocket WiFi hotspot</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Small device — fits in pocket or purse.</li>
              <li>Creates WiFi for your phone and tablet.</li>
              <li>Rent at airport kiosks or order before trip.</li>
              <li>Around $8–$15/day rental.</li>
              <li>Connect up to 5 devices.</li>
              <li>Good for groups or multiple devices.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Option 2: International SIM card</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Buy a local SIM card at destination.</li>
              <li>Replace US SIM temporarily.</li>
              <li>Very cheap data — often $10–$30 for whole trip.</li>
              <li>Need unlocked phone.</li>
              <li>Save old SIM — reinstall when home.</li>
              <li>Best for longer trips (1+ weeks).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Option 3: eSIM (easiest)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Digital SIM — no physical card swap.</li>
              <li>Buy online before trip — Airalo, Holafly.</li>
              <li>Scan QR code to activate.</li>
              <li>Around $15–$30 for 1–2 weeks data.</li>
              <li>Requires iPhone XS or newer (most new phones).</li>
              <li>Keep US number active while using eSIM data.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Option 4: Carrier international plan</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>T-Mobile — free international data (slow) in 200+ countries.</li>
              <li>AT&amp;T International Day Pass — $10/day when used.</li>
              <li>Verizon TravelPass — $10/day.</li>
              <li>Simplest — no extra setup needed.</li>
              <li>Good for short trips (1–3 days international).</li>
              <li>Activate before leaving — call carrier.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Before you leave</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Call carrier: &quot;What are my international rates?&quot;</li>
              <li>Download maps for offline use (Google Maps).</li>
              <li>Download translation app with offline language packs.</li>
              <li>Note hotel WiFi — use it for calls home.</li>
              <li>WhatsApp works on WiFi — free calls home.</li>
              <li>Turn off cellular data if worried about charges.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">eSIM easiest for iPhone users</h3>
            <p className="text-sm text-muted-foreground">If you have an iPhone XS or newer, an eSIM from Airalo is the easiest option. Search the country you&apos;re visiting, pay $15–$25, scan the QR code, and you have data for your whole trip. Your US number still works on WiFi calls. No physical SIM swap, no renting a hotspot device. Buy it the night before you leave.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
