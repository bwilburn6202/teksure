import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Ear } from 'lucide-react';

export default function SeniorHearingAidApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Hearing Aid Apps for Seniors — TekSure" description="Control hearing aids from your phone — adjust volume, find lost ones, stream calls." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Ear className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Hearing Aid Apps</h1>
          <p className="text-lg text-muted-foreground">Your hearing aids, controlled by phone.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">myPhonak</h2><p>Free. Volume slider. Restaurant mode. Find My Hearing Aids.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Oticon ON</h2><p>Free. Battery indicator. Stream phone calls direct to hearing aids.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Starkey Thrive</h2><p>Free. Step counter and fall alerts built in.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Live Listen (iPhone)</h2><p>Built into iPhone. Place phone on table — phone becomes a microphone, hearing aids hear better.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Sound Amplifier (Android)</h2><p>Free Google app. Turns Android phone + earbuds into basic hearing assist.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Find lost ones</h2><p>Most apps show last known location on a map. Saves $1,000+ if you find them.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Save scenes for places you visit often: Church, Restaurant, Home.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
