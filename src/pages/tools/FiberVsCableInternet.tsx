import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Wifi } from 'lucide-react';

export default function FiberVsCableInternet() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Fiber vs Cable Internet for Seniors | TekSure" description="Pick best home internet. Plain-English fiber vs cable comparison." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Wifi className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Fiber vs Cable</h1>
          <p className="text-lg text-muted-foreground">Right home internet = faster + cheaper.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Side-by-side</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Fiber</strong> — fastest, most reliable. AT&amp;T Fiber, Verizon Fios, Google Fiber.</li>
              <li><strong>Cable</strong> — common everywhere. Comcast, Spectrum, Cox.</li>
              <li><strong>DSL</strong> — slower, dying. Avoid if possible.</li>
              <li><strong>5G Home Internet</strong> — T-Mobile, Verizon. New competitor.</li>
              <li><strong>Satellite</strong> — Starlink for rural areas only.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Speeds you actually need</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>1 person, basic use</strong> — 50 Mbps fine.</li>
              <li><strong>Couple, streaming</strong> — 100 Mbps.</li>
              <li><strong>Family, multiple TVs</strong> — 300-500 Mbps.</li>
              <li><strong>Heavy gaming/4K</strong> — 1 Gig.</li>
              <li>Most seniors over-pay for speed don&apos;t need.</li>
              <li>Test current speed at fast.com.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">5G Home Internet (game-changer)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>T-Mobile Home Internet</strong> — $50-60/mo. Often half cable cost.</li>
              <li><strong>Verizon 5G Home</strong> — competitive.</li>
              <li>Wireless — no cables to home.</li>
              <li>Plug device in. Done.</li>
              <li>Speed varies by location.</li>
              <li>Try free trial.</li>
              <li>Many seniors switch + save $50/mo.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Bundle vs separate</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Bundles (TV + internet) often less savings than advertised.</li>
              <li>Cut cable TV — use streaming. Save $80+/mo.</li>
              <li>Internet-only often cheaper.</li>
              <li>Local TV — use antenna ($30, free channels).</li>
              <li>See /tools/cordcutterwizard.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Hidden costs</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Modem rental $10-15/mo — buy own ($80, pays back 6 mo).</li>
              <li>WiFi router rental — buy ($100, pays back 1 yr).</li>
              <li>Broadcast TV fees, regional sports fees.</li>
              <li>Equipment fees + installation.</li>
              <li>Promo expires after 12-24 months — bill explodes.</li>
              <li>Read fine print.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Senior pick 2026</h3>
            <p className="text-sm text-muted-foreground">If fiber available — get fiber (Verizon Fios, AT&amp;T Fiber, Google Fiber). Reliable + fast. If cable only — negotiate annually. If T-Mobile 5G covers your home — try it ($50-60 with no contract). Cheap option for many seniors. Own modem + router = save more.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
