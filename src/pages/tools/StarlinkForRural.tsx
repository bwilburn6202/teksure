import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { SatelliteDish } from 'lucide-react';

export default function StarlinkForRural() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Starlink for Rural Seniors | TekSure" description="High-speed internet anywhere. Plain-English Starlink guide for rural seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <SatelliteDish className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Starlink for Rural Seniors</h1>
          <p className="text-lg text-muted-foreground">Fast internet where cable doesn&apos;t reach.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What is Starlink?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>SpaceX satellite internet.</li>
              <li>Works ANYWHERE with sky view.</li>
              <li>No cables / cell towers needed.</li>
              <li>100-200 Mbps speeds.</li>
              <li>Fast enough for streaming + video calls.</li>
              <li>Game-changer for rural areas.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Cost</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Hardware: $599 (sometimes promo $349).</li>
              <li>Standard plan: $120/mo.</li>
              <li>Roam plan (RV): $50-150/mo.</li>
              <li>Mini hardware: $499 (smaller).</li>
              <li>Watch for promos.</li>
              <li>Pricier than cable but rural alternatives often $200/mo DSL.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Setup (1 hour)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Order at starlink.com.</li>
              <li>Box arrives in 1-4 weeks.</li>
              <li>Mount dish — clear sky view, north (US).</li>
              <li>Plug router into power.</li>
              <li>App walks through setup.</li>
              <li>Online in 15 minutes after install.</li>
              <li>Roof mount via local installer if needed.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">When Starlink helps seniors</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Rural retirees — no cable available.</li>
              <li>Mountain / forest property.</li>
              <li>Snowbirds (RV plan).</li>
              <li>Telehealth visits (need fast internet).</li>
              <li>Streaming + video calls with family.</li>
              <li>Beats slow DSL many rural seniors stuck with.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Limits</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Bad weather can degrade.</li>
              <li>Trees blocking sky = problems.</li>
              <li>Large dish needs mounting.</li>
              <li>Higher cost than urban options.</li>
              <li>SpaceX network can be congested.</li>
              <li>Better than nothing, not best in city.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Other rural options</h3>
            <p className="text-sm text-muted-foreground"><strong>Verizon LTE Home Internet</strong> — $25-60/mo if good signal. <strong>T-Mobile Home Internet</strong> — $50/mo. <strong>HughesNet</strong> — older satellite, slower. <strong>Viasat</strong> — older satellite. Check Starlink website for service map. Try competitors first if cheaper.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
