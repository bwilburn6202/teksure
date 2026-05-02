import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Pill } from 'lucide-react';

export default function SeniorPharmacyDeliveryApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Senior Pharmacy Delivery Apps | TekSure" description="Pill delivery to senior door. Pharmacy app guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Pill className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Pharmacy Delivery</h1>
          <p className="text-lg text-muted-foreground">Senior door medication.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Amazon Pharmacy</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Prime Rx 5% off.</li><li>Free 2-day delivery.</li><li>Senior cheaper often.</li><li>Insurance accepted.</li><li>Worth comparing.</li><li>Trusted.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Capsule</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Free same-day.</li><li>Senior NYC + cities.</li><li>Text-based ordering.</li><li>Insurance covered.</li><li>Worth if available.</li><li>Reliable.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">CVS + Walgreens</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Free in-store pickup.</li><li>Same-day delivery $5.</li><li>Senior local convenient.</li><li>Auto-refills.</li><li>App schedules.</li><li>Worth.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Mail-order 90-day</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>OptumRx, Express Scripts.</li><li>$10-$30/mo savings.</li><li>Senior insurance prefers.</li><li>Less trips.</li><li>Auto-deliver.</li><li>Worth switching.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior tips</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Compare 3 services.</li><li>Senior loyalty discount.</li><li>Auto-refill reminders.</li><li>Family proxy access.</li><li>Worth setup once.</li><li>Critical medication safety.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Compare GoodRx</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Sometimes cheaper than insurance.</li><li>Senior compare both ways.</li><li>Free.</li><li>Cash price tool.</li><li>Worth checking always.</li><li>Save $$$.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Mail-order 90-day = senior cheapest</h3><p className="text-sm text-muted-foreground">Senior mail-order pharmacy 90-day supply = $10-$30/mo savings + less trips. Insurance often prefers. Plus Amazon Pharmacy 5% Prime, Capsule cities free same-day. CVS/Walgreens local backup. Compare GoodRx always — sometimes cheaper than insurance.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
