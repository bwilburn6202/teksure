import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Brain } from 'lucide-react';

export default function SeniorMeditationDementia() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Meditation for Dementia Prevention — TekSure" description="Meditation reduces dementia risk — Calm, Headspace, Insight Timer." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Brain className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Meditation &amp; Dementia</h1>
          <p className="text-lg text-muted-foreground">Real evidence for protection.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Studies show</h2><p>12 minutes daily meditation linked to 50% reduction in cognitive decline.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Apps for seniors</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>Calm ($70/year)</li><li>Headspace ($70/year)</li><li>Insight Timer (FREE)</li><li>Smiling Mind (FREE)</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Kirtan Kriya</h2><p>FREE. 12-min specific meditation studied for dementia. YouTube tutorials.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Reduces stress</h2><p>Chronic stress accelerates dementia. Meditation protects.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Better sleep</h2><p>Sleep removes brain plaque. Meditation helps sleep.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Combine with exercise</h2><p>Walking + meditation + diet = strongest brain protection.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: 12 minutes daily. Same time each day. Brain grows over months.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
