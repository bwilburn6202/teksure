import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Bird } from 'lucide-react';

export default function SeniorBirdingApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Birding Apps for Seniors — Senior Guide" description="Identify and log birds with free apps." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Bird className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Birding Apps</h1>
          <p className="text-lg text-muted-foreground">A wonderful hobby with phone help.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Merlin Bird ID</h2><p>Free from Cornell Lab. ID by sound. Aim phone at a singing bird — name appears.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. eBird</h2><p>Free. Log every bird you see. Citizen science — your sightings help researchers.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Audubon Bird Guide</h2><p>Free. Detailed info on every North American bird. Great photos.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Photo ID</h2><p>Take a phone photo of a bird. Apps identify it from the image.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Hotspots</h2><p>eBird shows nearby spots where birders are seeing rare species right now.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Yard list</h2><p>Track every species visiting your yard. Surprisingly addictive.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Free birding clubs meet weekly in most cities. Search your area in eBird groups.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
