import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Map } from 'lucide-react';

export default function SeniorIPadMaps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Maps on iPad — Senior Guide" description="Get directions and look up places on iPad." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Map className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Maps on iPad</h1>
          <p className="text-lg text-muted-foreground">Directions on a clear, big screen.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Open Maps</h2><p>Tap the folded-map icon. Allow Maps to use your location.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Search a place</h2><p>Tap the search bar. Type a business name or address. Tap a result.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Get directions</h2><p>Tap Directions. Pick driving, walking, or transit. Tap Go.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Save favorite places</h2><p>Tap a place, scroll down, tap Add to Favorites. Home, doctor, pharmacy — saved.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Look around</h2><p>Tap the binoculars icon for a street-level photo of any address.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Share an address</h2><p>Tap a place, tap Share. Send by text so a family member knows where to meet.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>iPads with cellular work as a GPS in the car. Wi-Fi-only iPads need a saved route or hotspot.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
