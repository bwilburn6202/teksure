import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Car } from 'lucide-react';

export default function SeniorUberRideshare() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Uber for Seniors — Senior Guide" description="Get a ride with Uber on your phone." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Car className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Uber Rideshare</h1>
          <p className="text-lg text-muted-foreground">A car at your door in minutes.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Sign up</h2><p>Free. Add a credit card for payment. No cash needed.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Request a ride</h2><p>Tap Where to. Type your destination. See the price upfront. Tap Confirm.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Wait for the car</h2><p>App shows the driver, license plate, and minutes away. Match before getting in.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. UberX vs Comfort</h2><p>UberX is cheapest. Comfort gives newer cars with more legroom for $3-5 more.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Tipping</h2><p>Optional. App asks at the end. 15-20% is standard for good service.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Lost something</h2><p>Tap your trip, then Lost item. Connects you with the driver to retrieve.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Always confirm the license plate before getting in. Don't get into a car that doesn't match.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
