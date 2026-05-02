import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Brain } from 'lucide-react';

export default function SeniorPeakBrain() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Peak Brain Training for Seniors — TekSure" description="Peak brain training app review — fun games, daily personalized workouts." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Brain className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Peak Brain Training</h1>
          <p className="text-lg text-muted-foreground">Game-style brain training.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Cost</h2><p>Free version. $35/year Premium.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">45+ games</h2><p>Memory, problem-solving, language, math, focus. New games added often.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Daily workout</h2><p>Personalized to your weakest areas. 5-10 minutes daily.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Coach mode</h2><p>Premium. Detailed insights and progress tracking.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Senior accessibility</h2><p>Adjustable text size. Color-blind friendly. Larger touch targets.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Cambridge research</h2><p>Used in University of Cambridge cognitive studies.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Play with grandkids. Many games feel like fun, not training.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
