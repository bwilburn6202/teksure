import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { BatteryCharging } from 'lucide-react';

export default function SeniorOldPhoneCharger() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Phone Charging Tips for Seniors — TekSure" description="Make phone battery last longer — wireless charging, charging habits." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <BatteryCharging className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Phone Charging Tips</h1>
          <p className="text-lg text-muted-foreground">Battery lasts longer.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Best practice</h2><p>Charge between 20-80%. Avoid 100% all the time. Battery lasts 2-3x longer.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Wireless charging stand</h2><p>$30. Place phone down. Charges automatically. Easier than cable for arthritis.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">MagSafe (iPhone)</h2><p>$40. Magnetic. Snaps on. No fumbling.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Power bank</h2><p>$20. 10,000 mAh battery. 2-3 phone charges. Lifesaver in airports.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Battery health</h2><p>iPhone: Settings → Battery → Battery Health. Should stay over 80%.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">When to replace</h2><p>If battery health under 80% and phone dies fast. ~$80 Apple replacement.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Charge in kitchen, not bedside. Better sleep + safer.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
