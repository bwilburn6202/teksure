import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { BatteryCharging } from 'lucide-react';

export default function SeniorPhoneCharging() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Phone Charging Tips — Senior Guide" description="Battery best practices for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <BatteryCharging className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Phone Charging Tips</h1>
          <p className="text-lg text-muted-foreground">Make battery last longer.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Use original charger</h2><p>Apple/Samsung chargers safest. Cheap knock-offs damage batteries.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Avoid overheating</h2><p>Don't leave phone in hot car. Heat kills batteries fast.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Don't drain to zero</h2><p>Charge before 20%. Modern batteries do best between 20% and 80%.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Wireless chargers</h2><p>Convenient. Charge slower. Generate more heat. Use sparingly.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Optimize charging</h2><p>iPhone Settings, Battery, Battery Health. Turn on Optimized Charging.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Battery replacement</h2><p>After 2-3 years, battery holds less. Apple replacement $69-99.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Plug in nightly. Modern phones won't overcharge. Trickle charge keeps battery full.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
