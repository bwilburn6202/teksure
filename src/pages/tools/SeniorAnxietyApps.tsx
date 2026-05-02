import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Brain } from 'lucide-react';

export default function SeniorAnxietyApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Anxiety Apps for Seniors — TekSure" description="Manage senior anxiety — Calm, Headspace, MindShift CBT." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Brain className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Anxiety Apps</h1>
          <p className="text-lg text-muted-foreground">Calm an anxious mind.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Calm</h2><p>$70/year. Sleep stories, anxiety meditations.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Headspace</h2><p>$70/year. Senior-specific anxiety programs.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">MindShift CBT</h2><p>FREE. Cognitive Behavioral Therapy techniques. Anxiety-focused.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Reduce caffeine</h2><p>Coffee + tea contribute to senior anxiety. Cut to morning only.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Walking</h2><p>30 min daily walks reduce anxiety as much as medication.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Talk to doctor</h2><p>Some senior anxiety from medications. Review with PCP.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Box breathing 5 minutes daily reduces senior anxiety dramatically.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
