import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Sparkles } from 'lucide-react';

export default function SeniorChairExerciseApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Chair Exercise Apps for Seniors — TekSure" description="Best chair exercise videos for seniors — free YouTube and apps." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Sparkles className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Chair Exercises for Seniors</h1>
          <p className="text-lg text-muted-foreground">Stay active — even sitting down.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">YouTube channels</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>SilverSneakers official</li><li>Senior Fitness With Meredith</li><li>HASfit Senior</li><li>Yes2Next (chair yoga)</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Cast to TV</h2><p>Roku, Chromecast, or Apple TV — watch on big screen, follow easier.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Why chair exercise works</h2><p>Builds strength without falls. Helps after surgery, with arthritis, low energy days.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Resistance bands</h2><p>$15 set adds strength training to chair exercise. No weights to drop.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">10 minutes daily</h2><p>Studies show 10 min of chair exercise daily improves balance and energy.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Apps</h2><p>Senior Fitness app ($5/month). Bold app — designed for over 60.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Place a sturdy chair (no wheels) in living room. Reminds you to do daily exercises.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
