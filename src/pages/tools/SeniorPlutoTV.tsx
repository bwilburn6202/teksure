import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Tv } from 'lucide-react';

export default function SeniorPlutoTV() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Pluto TV for Seniors — TekSure" description="Free streaming TV — Pluto TV, Tubi, Freevee for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Tv className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Free Streaming TV</h1>
          <p className="text-lg text-muted-foreground">100% free TV with ads.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Pluto TV</h2><p>FREE. 250+ channels. CNN, MTV, classic TV, news, sports.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Tubi</h2><p>FREE. 50,000 movies. 200+ channels. Owned by FOX.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Freevee (Amazon)</h2><p>FREE. Old TV shows. Some originals.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">The Roku Channel</h2><p>FREE if you have Roku. Plus available on web.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Senior content</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>Classic Doctor Who</li><li>Old Westerns</li><li>I Love Lucy</li><li>MASH episodes</li><li>News in real time</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Watch out</h2><p>Lots of ads. Skip nothing free. Subscription beats ads if budget.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Pluto TV is great backup if regular subscription has issues.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
