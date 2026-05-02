import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Car } from 'lucide-react';

export default function SeniorRoadTripApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Road Trip Apps for Seniors — Senior Guide" description="Apps that make road trips smoother." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Car className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Road Trip Apps</h1>
          <p className="text-lg text-muted-foreground">Hit the open road, prepared.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Roadtrippers</h2><p>Free. Plan stops along your route. Find quirky attractions.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. iExit</h2><p>Free. Shows what's at every interstate exit. Gas, food, lodging.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. AAA TripTik</h2><p>Free for members. Plan a route. Find AAA-approved hotels and attractions.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. RoadAhead</h2><p>Free. Voice-tells what's at upcoming exits. Hands-free.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Hotels Tonight</h2><p>Last-minute hotel deals. Often 50% off if you book that day.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Rest stop locator</h2><p>USA Rest Stops app. Free. Find clean rest stops on long drives.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Stop every 2 hours. Walk 5 minutes. Reduces fatigue and DVT risk.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
