import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Watch } from 'lucide-react';

export default function SeniorGarminGuide() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Garmin Watch for Seniors — TekSure" description="Garmin watches for seniors — long battery, GPS, heart tracking." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Watch className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Garmin Watch for Seniors</h1>
          <p className="text-lg text-muted-foreground">Best for outdoorsy seniors.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Garmin vivosmart 5</h2><p>$150. Slim band. 7-day battery. Heart, sleep, stress.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Garmin Venu Sq 2</h2><p>$250. Touchscreen. GPS. Music storage.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Best feature</h2><p>Battery lasts 7-30 days. No more daily charging.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Body Battery</h2><p>Tells you how recovered you are. Helps pace your day.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Hiking and golf</h2><p>Built-in GPS for trails. Yardage for golf without phone.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Incident detection</h2><p>If you crash on a bike, watch alerts emergency contacts.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Garmin Connect app is free. No paid subscription needed.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
