import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Bed } from 'lucide-react';

export default function SeniorMattressSensors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Bed Sensors for Seniors — TekSure" description="Mattress sensors for seniors — track sleep, fall risk, wandering." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Bed className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Bed/Mattress Sensors</h1>
          <p className="text-lg text-muted-foreground">Wellness tracking for seniors.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Withings Sleep Mat</h2><p>$130. Slips under mattress. Tracks sleep + breathing.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Bed exit alarms</h2><p>$50-$150. For dementia patients. Alerts caregiver if leaving bed.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Eight Sleep Pod</h2><p>$2,500+. Mattress topper. Cools/warms. Tracks vitals.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">For caregivers</h2><p>Bed sensors send alerts. Help arrives faster after falls or wandering.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Senior dignity</h2><p>Better than camera in bedroom. Sensors only detect bed presence.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Insurance</h2><p>Some Medicaid waivers cover medical bed sensors. Ask social worker.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Withings Mat is best dual-purpose: sleep tracking + caregiver alerts.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
