import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Tv } from 'lucide-react';

export default function SeniorHuluLive() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Hulu Live for Seniors — TekSure" description="Hulu Live TV alternative to cable for seniors — Disney+ included." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Tv className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Hulu Live for Seniors</h1>
          <p className="text-lg text-muted-foreground">95 channels + Disney+ + ESPN+.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Cost</h2><p>$77/month. Includes Hulu library + Disney+ + ESPN+.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Channels</h2><p>ABC, NBC, CBS, FOX, ESPN, CNN, FOX News, MSNBC, History, Food.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">DVR</h2><p>Unlimited recordings. Keep 9 months.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Hulu library</h2><p>10,000+ on-demand shows and movies. Massive bonus.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Disney+ bonus</h2><p>All Disney, Pixar, Marvel, Star Wars. Great for grandkid visits.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Compare to YouTube TV</h2><p>Same channels. YouTube TV $4 cheaper but no Disney+.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: 30-day free trial. Plenty of time to decide.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
