import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Bird } from 'lucide-react';

export default function SeniorEbird() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="eBird for Seniors — Senior Guide" description="Log bird sightings with eBird and contribute to science." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Bird className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">eBird</h1>
          <p className="text-lg text-muted-foreground">Citizen science meets birdwatching.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Free</h2><p>App from Cornell Lab of Ornithology. Free worldwide. No ads.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Submit checklists</h2><p>Tap Start a checklist before each outing. Note birds you see and hear.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Hotspots</h2><p>Find nearby birding spots. See what species other birders have reported recently.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Life list</h2><p>App tracks every species you've ever seen. Watching the list grow is addictive.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Rare bird alerts</h2><p>Get notifications when rare birds are spotted near you. Drive over to see them.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Yard list</h2><p>Track birds at home with a separate yard checklist. Common feeder birds add up fast.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Your data helps scientists track climate change, migrations, and bird populations.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
