import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { ParkingCircle } from 'lucide-react';

export default function SeniorParkingApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Parking Apps for Seniors — Senior Guide" description="Pay parking meters from your phone." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <ParkingCircle className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Parking Apps</h1>
          <p className="text-lg text-muted-foreground">Skip the meter. Pay from the seat.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. ParkMobile</h2><p>Most common in cities. Tap meter zone number. Pick how long. Pay through the app.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. PayByPhone</h2><p>Used by airports and many cities. Same idea — type zone, time, pay.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. SpotHero</h2><p>Reserves a parking spot before arriving. Helpful for events and airports.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Add time later</h2><p>If a meeting runs long, add 30 more minutes from the app. No running back to the car.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Watch fees</h2><p>Most apps charge $0.30-0.45 service fee per session. Worth it for convenience.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Receipts</h2><p>App emails receipts. Helpful for taxes if parking is for work or medical.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Always check the meter sign for the correct zone number — wrong zone means a ticket.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
