import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Footprints } from 'lucide-react';

export default function SeniorWalkingMonitors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Walking Monitors for Seniors — TekSure" description="Pedometers and walking trackers for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Footprints className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Walking Monitors</h1>
          <p className="text-lg text-muted-foreground">Track every step.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Phone built-in</h2><p>iPhone Health, Google Fit. FREE. Tracks when phone in pocket.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Fitbit Inspire 3</h2><p>$100. Light. Pedometer + heart rate. 10-day battery.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Cheap pedometer</h2><p>3DFitBud $20. No phone needed. Clip on belt.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Step goal</h2><p>6,000-8,000 daily for seniors. Studies show benefits at lower than 10,000.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">10,000 myth</h2><p>Came from Japanese marketing in 1960s. Not magic. 6,000 is plenty for benefits.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Track speed</h2><p>Faster walking = more benefit. 100 steps/min is brisk.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Walk after meals. 15 min walks 3x daily = lower blood sugar.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
