import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Sprout } from 'lucide-react';

export default function SeniorPlantIDApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Plant ID Apps for Seniors — TekSure" description="Identify plants and weeds — Seek, PictureThis, PlantNet for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Sprout className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Plant ID Apps</h1>
          <p className="text-lg text-muted-foreground">Snap a photo. Know any plant.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Seek by iNaturalist</h2><p>FREE. No subscription. Built by California Academy of Sciences.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">PlantNet</h2><p>FREE. Scientific database. Strong for European plants.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">PictureThis</h2><p>$30/year. Most accurate for North American garden plants.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Why useful</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>Identify weeds before pulling</li><li>Find what grew unexpectedly</li><li>Diagnose sick plant problems</li><li>Avoid poisonous plants</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Mushroom warning</h2><p>Don&apos;t eat wild mushrooms based on apps. Apps wrong = death. Always consult experts.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Grandkids love it</h2><p>Identify everything in your backyard. Educational and fun together.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Take 3 photos: leaves, flowers, full plant. More angles = better accuracy.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
