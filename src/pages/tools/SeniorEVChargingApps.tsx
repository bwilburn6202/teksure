import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Zap } from 'lucide-react';

export default function SeniorEVChargingApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="EV Charging Apps for Seniors — TekSure" description="Find and pay for EV charging — PlugShare, ChargePoint, Tesla, Electrify America." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Zap className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">EV Charging for Seniors</h1>
          <p className="text-lg text-muted-foreground">Find every charger near you.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">PlugShare</h2><p>Free. Shows ALL chargers from every network. Best one app.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">ChargePoint</h2><p>Free. Most common in shopping centers and hotels.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Electrify America</h2><p>Fast chargers along highways. $4 monthly Pass+ saves money.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Tesla Supercharger</h2><p>For Tesla. Newer models from Ford, GM, Rivian also use Tesla now.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">EVgo</h2><p>Common in city parking garages. Pay-per-use or membership.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Costs</h2><p>Level 2 ~$0.20/kWh. Fast charging ~$0.45/kWh. Add 200 miles for $20-$40.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Plug in at hotels and movie theaters — many free during your stay.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
