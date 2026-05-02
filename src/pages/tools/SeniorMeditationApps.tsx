import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Brain } from 'lucide-react';

export default function SeniorMeditationApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Meditation Apps for Seniors — TekSure" description="Calm anxiety and sleep better — best meditation apps for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Brain className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Meditation Apps</h1>
          <p className="text-lg text-muted-foreground">Calmer days. Better sleep.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Calm</h2><p>Free trial. Sleep stories narrated by famous voices. $70/year.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Headspace</h2><p>Free trial. Guided 10-minute sessions. Senior discount available.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Insight Timer</h2><p>100% free for 100,000+ meditations. No credit card.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Smiling Mind</h2><p>Free, no ads. Designed by psychologists. Programs for grief and chronic pain.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Start small</h2><p>5 minutes when you wake up, 5 before bed. Two weeks in, it becomes habit.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Use earbuds or speaker</h2><p>Quality sound makes a big difference. Even cheap earbuds help.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Sleep stories work — most people fall asleep before the story ends.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
