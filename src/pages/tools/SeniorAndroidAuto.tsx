import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Car } from 'lucide-react';

export default function SeniorAndroidAuto() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Android Auto for Seniors — TekSure" description="Android phone on car dashboard — Android Auto for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Car className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Android Auto</h1>
          <p className="text-lg text-muted-foreground">Pixel/Samsung on the dashboard.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">What it does</h2><p>Plug Android phone into car. Phone screen on dashboard. Big senior-friendly icons.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Compatible cars</h2><p>Most 2017+ cars. Check androidauto.com for full list.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Voice control</h2><p>&ldquo;Hey Google&rdquo; or steering wheel button. Same as CarPlay for Apple.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Top apps</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>Google Maps or Waze</li><li>YouTube Music</li><li>Spotify</li><li>Audible</li><li>Phone calls</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Wireless</h2><p>Newer cars connect via Bluetooth. No cable.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">No Android Auto?</h2><p>Use Google Maps Driving Mode instead. Same idea, on phone screen.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: 90% of distracted driving accidents involve phones. Android Auto = much safer.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
