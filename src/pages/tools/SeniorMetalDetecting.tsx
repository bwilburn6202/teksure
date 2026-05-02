import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Compass } from 'lucide-react';

export default function SeniorMetalDetecting() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Metal Detecting for Seniors — TekSure" description="Senior metal detecting hobby — beginner detectors, club, etiquette." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Compass className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Metal Detecting</h1>
          <p className="text-lg text-muted-foreground">Active outdoor hobby.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Beginner detector</h2><p>$200 Garrett ACE 300. Senior-friendly. Lightweight.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Pro level</h2><p>$1,000+ Minelab Equinox. Better depth, discrimination.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Where to detect</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>Parks (check rules)</li><li>Beaches</li><li>Old building sites</li><li>Friends&apos; properties</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Etiquette</h2><p>Fill holes. Get permission. Report finds in some areas.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Senior friendly</h2><p>Light walking. Bend less if you use long-handle scoop ($30).</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Find clubs</h2><p>FMDAC.org. Find local clubs. Group hunts. Friendship.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Metal detecting = walking + treasure hunt. Best senior hobby.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
