import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Eye } from 'lucide-react';

export default function SeniorGlaucomaTracking() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Glaucoma Tracking for Seniors — TekSure" description="Track glaucoma — eye drop adherence, visual field tests, app tracking." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Eye className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Glaucoma Tracking</h1>
          <p className="text-lg text-muted-foreground">Save your sight.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Eye drops critical</h2><p>Missing drops = vision loss. Phone reminders 100% needed.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Medisafe app</h2><p>FREE. Track glaucoma drops. Reminders, adherence reports.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Visual field test</h2><p>Free at home with HEYE app or VisionAware. Detect changes early.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Eye drop guide</h2><p>$15 device helps shaky hands aim drops correctly.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Annual exam</h2><p>Medicare Part B covers. Catches progression.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Surgery options</h2><p>SLT laser, MIGS surgery. Often replaces drops. Talk to ophthalmologist.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Glaucoma is silent. By the time you notice vision loss, damage is permanent. Daily drops critical.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
