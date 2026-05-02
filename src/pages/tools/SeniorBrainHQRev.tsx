import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Brain } from 'lucide-react';

export default function SeniorBrainHQRev() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="BrainHQ Review for Seniors — TekSure" description="Is BrainHQ worth the cost? Senior-focused review of brain training app." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Brain className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">BrainHQ for Seniors</h1>
          <p className="text-lg text-muted-foreground">Real research-backed brain training.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Cost</h2><p>$96/year. Free trial. AARP discount available.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Why different</h2><p>Backed by 100+ peer-reviewed studies. Designed by neuroscientists.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Real benefits</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>Faster reaction time</li><li>Better balance</li><li>Improved memory</li><li>Reduced fall risk</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Daily use</h2><p>30 minutes, 3-5 days a week. Best results show after 8-10 weeks.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Vs Lumosity</h2><p>BrainHQ has more research. Lumosity is more game-like. Both work, BrainHQ slightly more proven.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Insurance</h2><p>Some Medicare Advantage plans cover. Worth asking your plan.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Pair brain training with daily walking. Combination beats either alone.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
