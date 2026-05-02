import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Map } from 'lucide-react';

export default function SeniorAndroidMaps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Google Maps on Android — Senior Guide" description="Get directions on your Android phone." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Map className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Google Maps</h1>
          <p className="text-lg text-muted-foreground">Step-by-step directions.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Open Maps</h2><p>Tap the colorful pin icon. Allow Maps to use your location.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Search a place</h2><p>Type an address or business name. Tap the result.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Directions</h2><p>Tap Directions. Pick driving, walking, or transit. Tap Start.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Voice guidance</h2><p>Maps speaks turns out loud. Keep your eyes on the road.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Save Home address</h2><p>Tap Saved, then Home. Add your address. One tap to head home from anywhere.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Share location</h2><p>Tap your photo, then Location sharing. Family can see where you are during a trip.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Maps works offline if you download an area first — useful in spots with bad cell service.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
