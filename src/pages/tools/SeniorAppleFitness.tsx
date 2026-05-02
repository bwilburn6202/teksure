import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Activity } from 'lucide-react';

export default function SeniorAppleFitness() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Apple Fitness+ for Seniors — TekSure" description="Apple Fitness+ subscription review for seniors — workouts on TV, watch, iPad." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Activity className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Apple Fitness+</h1>
          <p className="text-lg text-muted-foreground">Workouts on your iPhone, iPad, or Apple TV.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Cost</h2><p>$10/month or $80/year. Free 1-month trial. Free 3 months with new Apple Watch.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Senior categories</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>Time to Walk audio walks</li><li>Mindful Cooldown stretching</li><li>Yoga for beginners</li><li>Strength for older adults</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">No Apple Watch needed</h2><p>Works on iPhone, iPad, or Apple TV alone.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Time to Walk</h2><p>Audio-only walks with celebrities. Listen on phone during outdoor walks.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">5-minute workouts</h2><p>Many under 10 minutes. Easy to fit in mornings.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Cast to TV</h2><p>Apple TV — bigger screen, easier to follow movements.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Apple One Family ($23/month) bundles Fitness+ with iCloud and Music for $13 less.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
