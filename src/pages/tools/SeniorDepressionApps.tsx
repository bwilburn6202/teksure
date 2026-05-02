import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Heart } from 'lucide-react';

export default function SeniorDepressionApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Depression Apps for Seniors — TekSure" description="Manage senior depression — Sanvello, Moodfit, support groups." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Heart className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Depression Apps for Seniors</h1>
          <p className="text-lg text-muted-foreground">Real support.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Sanvello</h2><p>$90/year. CBT-based. Mood tracking + therapy.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Moodfit</h2><p>FREE basic. Mood tracking. Spot triggers.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">988 lifeline</h2><p>FREE 988. If hopeless or suicidal thoughts. 24/7.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Common in seniors</h2><p>1 in 5 seniors has depression. Often missed. Treatable.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Light therapy</h2><p>$60 box. 30 min daily. Real benefit for winter depression.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Get checked</h2><p>Annual depression screening covered by Medicare. Don&apos;t skip.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Senior depression = treatable. Walking + therapy + light = often enough.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
