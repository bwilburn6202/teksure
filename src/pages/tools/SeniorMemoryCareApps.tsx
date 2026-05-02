import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Brain } from 'lucide-react';

export default function SeniorMemoryCareApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Memory Care Apps for Seniors — TekSure" description="Apps for early dementia — MapHabit, MindMate, Constant Therapy." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Brain className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Memory Care Apps</h1>
          <p className="text-lg text-muted-foreground">Early dementia support.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">MindMate</h2><p>FREE. Brain games for dementia. Daily reminders.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">MapHabit</h2><p>$10/month. Visual step-by-step routines. For early-stage dementia.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Constant Therapy</h2><p>$25/month. Brain rehab post-stroke or aphasia.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Lumosity Memory</h2><p>$12/month. Memory-focused brain games.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Reminder Rosie</h2><p>Voice-recorded reminders. Family records messages.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Get diagnosed</h2><p>Early diagnosis = better treatment. Don&apos;t hide concerns from doctor.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Routine + reminders + family support = best dementia management.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
