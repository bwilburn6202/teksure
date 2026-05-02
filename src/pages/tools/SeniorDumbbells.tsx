import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Sparkles } from 'lucide-react';

export default function SeniorDumbbells() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Dumbbells for Seniors — TekSure" description="Pick right weights for senior strength — start light, progress safely." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Sparkles className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Dumbbells for Seniors</h1>
          <p className="text-lg text-muted-foreground">Right weights. Right way.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Start light</h2><p>2-5 lb pairs. Buy 3 sets: 2, 5, 8 lb. About $40 total.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Bowflex SelectTech</h2><p>$330. Adjusts 5-52 lb. Saves space. Good investment.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Right exercises</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>Bicep curls</li><li>Shoulder press</li><li>Bent-over rows</li><li>Goblet squats</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">10-15 reps</h2><p>2-3 sets. If too easy, increase weight slightly.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Form first</h2><p>Slow controlled movements. Less risk of injury.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Personal trainer</h2><p>$50-$80/session. 2-3 sessions teach proper form. Worth it.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Strong seniors live longer. Strength training = real medicine.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
