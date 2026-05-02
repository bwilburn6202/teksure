import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Tv } from 'lucide-react';

export default function SeniorYouTubeTV() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="YouTube TV for Seniors — TekSure" description="Cut cable — YouTube TV for seniors. Live TV, sports, news, DVR." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Tv className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">YouTube TV for Seniors</h1>
          <p className="text-lg text-muted-foreground">Live TV without cable.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Cost</h2><p>$73/month. Cancel anytime. Often half of cable.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">100+ channels</h2><p>ABC, NBC, CBS, FOX, ESPN, CNN, FOX News, MSNBC, food, history.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Unlimited DVR</h2><p>Record everything. Keep 9 months. Skip commercials.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">3 streams at once</h2><p>Different rooms. Different people. Different shows.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Watch anywhere</h2><p>Phone, tablet, computer, Roku, Apple TV. Even traveling.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Compare</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>Hulu Live: $77/month, 95 channels</li><li>Sling: $40/month, fewer channels</li><li>Philo: $25/month, no sports</li></ul></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Free trial. Try 1 week. Cancel before bill if not for you.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
