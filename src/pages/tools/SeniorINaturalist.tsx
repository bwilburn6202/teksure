import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Leaf } from 'lucide-react';

export default function SeniorINaturalist() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="iNaturalist for Seniors — Senior Guide" description="Identify and log plants, bugs, animals." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Leaf className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">iNaturalist</h1>
          <p className="text-lg text-muted-foreground">Identify any plant, insect, or animal.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Free</h2><p>App from National Geographic and California Academy of Sciences.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Snap a photo</h2><p>Photograph anything. AI suggests what species it is. Real experts confirm.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Seek (kids version)</h2><p>Same makers, simpler. Great for grandkid visits — turn ID into a game.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Plant a seed</h2><p>Photograph a leaf to identify a tree. Find that mystery flower in your yard.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Citizen science</h2><p>Sightings used by researchers worldwide. Helps protect endangered species.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Bioblitz</h2><p>Join community events to log every species in a park or trail.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>The more you log, the better the AI gets. Even a single backyard contributes.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
