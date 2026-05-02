import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Cloud } from 'lucide-react';

export default function SeniorWeatherApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Weather Apps for Seniors — TekSure" description="Best weather apps for seniors — accurate forecasts, no ads, big text." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Cloud className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Weather Apps for Seniors</h1>
          <p className="text-lg text-muted-foreground">Free, simple, accurate.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Apple Weather</h2><p>FREE built into iPhone. Powered by Dark Sky. Hourly precipitation.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Weather.gov</h2><p>FREE official National Weather Service. No ads. Most accurate severe weather.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Carrot Weather</h2><p>$5/month. Witty/funny weather. Fun for seniors who like personality.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">My Radar</h2><p>FREE. Simple radar map. Track storms in real time.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Avoid</h2><p>Cluttered apps with too many ads. Slow phones suffer.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Add weather widget</h2><p>Long-press home screen → Weather widget. See forecast at a glance.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Severe weather alerts come free from FEMA app. No subscription needed.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
