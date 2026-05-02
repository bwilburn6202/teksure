import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Ear } from 'lucide-react';

export default function SeniorHearingTestApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Hearing Test Apps for Seniors — TekSure" description="Test hearing at home — Mimi, SonicCloud, Apple AirPods test." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Ear className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Hearing Test Apps</h1>
          <p className="text-lg text-muted-foreground">Quick at-home check.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Mimi Hearing Test</h2><p>FREE. 5-minute test. Calibrated for headphones.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">SonicCloud</h2><p>FREE. Custom sound profile. Adjusts music to your hearing.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Apple AirPods test</h2><p>iPhone 14+. Settings → AirPods Pro → Audiogram. Personalized audio.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">When to see audiologist</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>Asking people to repeat often</li><li>TV volume up too loud</li><li>Trouble in noisy restaurants</li><li>Tinnitus (ringing)</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Free hearing tests</h2><p>Costco free. Many audiologists free. Phonak Online Test free.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Medicare</h2><p>Annual exam covered. Hearing aids not covered (yet).</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Apps screen for hearing loss. Real audiologist for diagnosis.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
