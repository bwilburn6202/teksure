import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Activity } from 'lucide-react';

export default function SeniorVertigoExercises() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Vertigo Treatment for Seniors — TekSure" description="Epley maneuver, balance therapy, vestibular rehab for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Activity className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Vertigo Treatment</h1>
          <p className="text-lg text-muted-foreground">Stop the spinning.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Epley maneuver</h2><p>FREE. YouTube has tutorials. Resolves BPPV vertigo in 80%.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">See doctor first</h2><p>Different vertigo types. Doctor diagnoses cause.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Vestibular rehab</h2><p>Medicare covers. PT specifically for balance disorders.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Stop spinning</h2><p>Sit down immediately. Focus on still object. Don&apos;t close eyes.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Hydrate</h2><p>Dehydration causes vertigo. Many seniors.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Watch medications</h2><p>BP meds, diuretics common cause. Discuss with doctor.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Vertigo episodes mean fall risk. Get up slowly. Ask doctor about cane.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
