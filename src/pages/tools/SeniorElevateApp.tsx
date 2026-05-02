import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Brain } from 'lucide-react';

export default function SeniorElevateApp() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Elevate App for Seniors — TekSure" description="Elevate brain training — reading, math, focus, vocabulary for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Brain className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Elevate App</h1>
          <p className="text-lg text-muted-foreground">Sharper reading, writing, math.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Cost</h2><p>Free version (3 games/day). $40/year for full access.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Categories</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>Reading comprehension</li><li>Vocabulary</li><li>Math &amp; tip calculation</li><li>Spelling</li><li>Focus exercises</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">15 min daily</h2><p>5 games. App tracks improvement on each skill.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Vs Lumosity</h2><p>Elevate focuses on language and life skills. Lumosity on speed/memory. Both useful.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Senior-friendly</h2><p>Adjustable difficulty. Doesn&apos;t shame mistakes. Encouraging.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Try free first</h2><p>Free version is plenty for many seniors. Pay only if you love it.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Reading puzzles especially help with daily reading speed and comprehension.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
