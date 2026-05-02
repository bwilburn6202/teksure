import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Bus } from 'lucide-react';

export default function SeniorElderlyTransportation() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Senior Transportation — Senior Guide" description="Free or low-cost rides for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Bus className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Senior Transportation</h1>
          <p className="text-lg text-muted-foreground">Get rides without driving.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Senior Ride free or low-cost</h2><p>Many cities have a Senior Ride or Dial-a-Ride. Call 211 to find local options.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Medical transport</h2><p>Many Medicare Advantage plans include free rides to doctor appointments.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. ITNAmerica</h2><p>Volunteer driver service for seniors. Door-to-door rides. itnamerica.org.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. GoGoGrandparent</h2><p>Call from any phone. Books Uber or Lyft for you.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Public bus discounts</h2><p>Most city buses offer half-price senior fares with ID.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Eldercare Locator</h2><p>Call 1-800-677-1116. They connect you with rides in your area.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Many community centers and senior centers offer free shuttle to grocery and pharmacy.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
