import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Briefcase } from 'lucide-react';

export default function SeniorTripIt() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="TripIt for Seniors — Senior Guide" description="Organize trip itineraries with TripIt." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Briefcase className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">TripIt</h1>
          <p className="text-lg text-muted-foreground">All trip details in one place.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Free</h2><p>Forward confirmations to plans@tripit.com. App builds itinerary automatically.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Master itinerary</h2><p>Flights, hotels, car rentals all in one screen. No flipping between emails.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Map view</h2><p>See all stops on a single map. Helpful when planning multi-city trips.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Pro version</h2><p>$49/year. Real-time gate alerts, refund alerts, point tracker.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Share with family</h2><p>Send the itinerary to a relative. They know where you are at any moment.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Offline access</h2><p>App works without Wi-Fi. Useful on planes and abroad.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Especially helpful on group trips. Everyone follows the same plan.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
