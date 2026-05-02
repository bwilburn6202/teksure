import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Train } from 'lucide-react';

export default function SeniorTrainTravel() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Train Travel Apps — Senior Guide" description="Book Amtrak and city train tickets online." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Train className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Train Travel</h1>
          <p className="text-lg text-muted-foreground">Trains around the country.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Amtrak app</h2><p>Free. Book any Amtrak. Senior discount 10% for 65+. Apply at booking.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Mobile tickets</h2><p>Show conductor your phone. No paper needed.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. City rail apps</h2><p>BART, Metro, MTA — most cities have apps. Buy fare cards on phone.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. International</h2><p>Eurail and Rail Europe apps for European trains. Senior fares often available.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. USA Rail Pass</h2><p>10 segments in 30 days for $499. Affordable senior road trip.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Sleeper rooms</h2><p>For long trips, rooms include meals. Worth it for overnight travel.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Trains are easier on the body than long flights. Free luggage. No cramped seats.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
