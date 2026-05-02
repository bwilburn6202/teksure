import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Camera } from 'lucide-react';

export default function SeniorWildlifeCams() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Wildlife Trail Cams for Seniors — TekSure" description="See backyard wildlife — Stealth Cam, Reconyx, Bushnell trail cameras." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Camera className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Wildlife Trail Cams</h1>
          <p className="text-lg text-muted-foreground">See deer, raccoons, foxes at night.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Stealth Cam</h2><p>$80-$150. Most popular budget pick. Night vision included.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Bushnell Core</h2><p>$200. Best image quality. Battery lasts months.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Reconyx</h2><p>$500+. Pro level. Used by wildlife researchers.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Cellular trail cams</h2><p>$200+. Send photos to your phone. No need to retrieve SD card.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Setup</h2><p>Mount on tree at chest height. Aim toward likely paths.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Privacy</h2><p>Inform neighbors if visible from their property. Most love seeing wildlife photos.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Photos at 3 AM are best — most active wildlife time.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
