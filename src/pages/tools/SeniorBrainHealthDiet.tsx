import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Apple } from 'lucide-react';

export default function SeniorBrainHealthDiet() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Brain Health Diet for Seniors — TekSure" description="MIND diet for dementia prevention — recipes and apps." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Apple className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Brain Health Diet</h1>
          <p className="text-lg text-muted-foreground">Eat for cognitive protection.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">MIND diet</h2><p>Mediterranean + DASH. Studies show 53% lower Alzheimer&apos;s risk.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Eat more</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>Leafy greens (6+ servings/week)</li><li>Berries (2+ servings/week)</li><li>Nuts (5+ servings/week)</li><li>Olive oil (primary fat)</li><li>Fish (1+ servings/week)</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Eat less</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>Red meat</li><li>Butter, margarine</li><li>Cheese (limit 1/week)</li><li>Sweets, pastries</li><li>Fried food</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Mediterranean for Health</h2><p>$5/month app. MIND/Med recipes.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Combine with exercise</h2><p>Diet + walking 3x weekly = strongest dementia prevention.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Real benefit</h2><p>Even partial adherence reduces risk 33%.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Add berries to breakfast and spinach to dinner. Easy MIND start.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
