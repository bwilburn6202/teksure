import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin } from 'lucide-react';

export default function SeniorEvacuationApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Evacuation Apps for Seniors — TekSure" description="Hurricane, fire, flood evacuation — Red Cross, FEMA, Watch Duty." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <MapPin className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Evacuation Apps</h1>
          <p className="text-lg text-muted-foreground">Know when to leave.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">FEMA app</h2><p>FREE. Disaster alerts, shelter locations, recovery resources.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Red Cross Emergency</h2><p>FREE. 35+ disaster alerts. First aid info.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Watch Duty (wildfire)</h2><p>FREE. Real-time wildfire info. California, West Coast.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">NHC Hurricane</h2><p>FREE. National Hurricane Center. Path forecasts.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Senior &ldquo;Go bag&rdquo;</h2><p>Pre-pack: 7 days meds, ID copies, change of clothes, snacks.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Family plan</h2><p>Pre-arrange meeting places. Out-of-state relative as central contact.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Don&apos;t wait for evacuation order. If you feel unsafe, leave early.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
