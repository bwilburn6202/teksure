import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Car } from 'lucide-react';

export default function RentalCarAppsForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Rental Car Apps for Seniors | TekSure" description="Compare + book rental cars. Senior rental apps + tips." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Car className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Rental Car Apps</h1>
          <p className="text-lg text-muted-foreground">Senior compare + save.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">AutoSlash</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Tracks for price drops.</li><li>Free.</li><li>Auto-rebooks lower.</li><li>Senior set + forget.</li><li>Save 20%+.</li><li>Worth always.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Costco Travel</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Better rates.</li><li>Includes free additional driver.</li><li>Senior member benefit.</li><li>$5/day savings.</li><li>Worth checking.</li><li>Free for members.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior 50+</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Hertz 50+ rates.</li><li>Avis senior.</li><li>5-15% discount.</li><li>Senior ask explicitly.</li><li>AARP discounts too.</li><li>Stack discounts.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Skip insurance</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Credit card covers usually.</li><li>Read card terms.</li><li>Senior save $20/day.</li><li>Verify before declining.</li><li>Personal auto insurance often covers.</li><li>Don&apos;t double-pay.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Pre-pay vs pay-at-counter</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Pre-pay 10-20% cheaper.</li><li>Non-refundable usually.</li><li>Senior commitment.</li><li>Pay at counter — flexible.</li><li>Compare both options.</li><li>Senior choice.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Avoid airport</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Off-airport often cheaper.</li><li>Take Uber few miles.</li><li>Save $200/week.</li><li>Senior frugal.</li><li>Worth small inconvenience.</li><li>Especially long rentals.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">AutoSlash = senior automatic savings</h3><p className="text-sm text-muted-foreground">Free AutoSlash auto-rebooks rental car at lower prices. Save 20%. Plus Costco Travel members better rates + free driver. Skip insurance — credit card covers. Off-airport saves $200/week. Senior ask 50+ rates explicitly.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
