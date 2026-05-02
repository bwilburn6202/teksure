import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Car } from 'lucide-react';

export default function SeniorParkingApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Parking Apps for Seniors — TekSure" description="Pay for parking from your phone — ParkMobile, SpotHero, Passport Parking." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Car className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Parking Apps for Seniors</h1>
          <p className="text-lg text-muted-foreground">Pay for parking without coins.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">ParkMobile</h2><p>Most popular. Used in 500+ US cities. Free app.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">SpotHero</h2><p>Reserve garage spots in advance. Save 30-50% vs. drive-up rates.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">PayByPhone</h2><p>Common in Florida and California cities.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Setup</h2><p>Download. Add credit card. Add license plate. Done forever.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Use it</h2><p>At meter, find zone number. Open app → enter zone → pay. App texts when time runs out.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Extend remotely</h2><p>Don&apos;t rush back. Add 15 minutes from your phone — even at lunch.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Save your license plate accurately. Tickets get issued for typos.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
