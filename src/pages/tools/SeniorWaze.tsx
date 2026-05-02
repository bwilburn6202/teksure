import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Navigation } from 'lucide-react';

export default function SeniorWaze() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Waze for Seniors — Senior Guide" description="Use Waze for traffic-aware directions." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Navigation className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Waze</h1>
          <p className="text-lg text-muted-foreground">Real-time traffic and police alerts.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Free</h2><p>Waze on App Store or Play Store. Free and ad-supported.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Live traffic</h2><p>Drivers report jams, accidents, road closures. Waze reroutes you to avoid them.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Police alerts</h2><p>Other drivers warn of police ahead. Useful to drive carefully through.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Cheaper gas</h2><p>Tap gas pump icon. Sort prices nearby. Saves a few dollars per fill-up.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Trip planner</h2><p>Plan a future drive. Waze tells you the best time to leave.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Voice picker</h2><p>Settings, Sound. Try celebrity voices or polite assistant — fun on long drives.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Owned by Google. Some areas may use Google Maps better — try both for tricky trips.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
