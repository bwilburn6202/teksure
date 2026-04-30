import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Car } from 'lucide-react';

export default function CarwashSubscriptionForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Car Wash Subscriptions for Seniors | TekSure" description="Unlimited car washes. Senior carwash subscription guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Car className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Car Wash Subscriptions</h1>
          <p className="text-lg text-muted-foreground">Unlimited monthly washes.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">What it is</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Monthly unlimited washes.</li><li>$15-$40/month.</li><li>Drive-through tunnel.</li><li>Stay in car.</li><li>Senior easy.</li><li>RFID auto-scan.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Best chains</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Take 5.</li><li>Mister Carwash.</li><li>Soft Touch.</li><li>Local chains often cheapest.</li><li>App tracks visits.</li><li>Senior options.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior wins</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>No bucket lifting.</li><li>No spraying.</li><li>Stay in dry car.</li><li>Wash whenever convenient.</li><li>Salt removal winter.</li><li>Pollen removal spring.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Math</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$25/month subscription.</li><li>Single wash $15.</li><li>2 washes/month break-even.</li><li>4+ washes huge savings.</li><li>Senior daily/weekly.</li><li>Good value.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Cancel</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Cancel anytime usually.</li><li>App or front desk.</li><li>Senior no contract.</li><li>Snowbird pause options.</li><li>Cheap to try.</li><li>Most user-friendly.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior tips</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Avoid soft cloth tunnel if delicate paint.</li><li>Touchless if any concern.</li><li>Vacuum stations free.</li><li>Snowbird — cancel for season.</li><li>Senior flexible.</li><li>Try first month.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">$25 unlimited = senior easy</h3><p className="text-sm text-muted-foreground">Senior arthritis + bucket of soapy water = no good. $25/month unlimited car washes = stay in car, wash daily after rain. RFID scans, drive through. Many seniors save physical effort + money. Top under-rated senior auto service.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
