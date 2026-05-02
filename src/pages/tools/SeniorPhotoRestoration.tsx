import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Camera } from 'lucide-react';

export default function SeniorPhotoRestoration() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Photo Restoration for Seniors — TekSure" description="Restore old photos with AI — Remini, Photomyne, MyHeritage." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Camera className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Photo Restoration</h1>
          <p className="text-lg text-muted-foreground">Bring old photos to life.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Remini</h2><p>$10/month. AI restoration. Blurry to sharp. Magical.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Photomyne</h2><p>$5/month. Scan + restore + colorize old photos.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">MyHeritage Photo Enhancer</h2><p>$13/month. Add motion to old photos. See ancestors smile.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">FREE option</h2><p>Apple Photos colorize. Limited but free.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Best for</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>Wedding photos from 50s</li><li>Childhood photos</li><li>Black & white to color</li><li>Damaged photo repair</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Print as gifts</h2><p>Restored photos. Frame. Gift to family. Treasure.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Remini is the magic app. $10/month transforms old family photos.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
