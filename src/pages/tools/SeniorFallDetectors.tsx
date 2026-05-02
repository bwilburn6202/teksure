import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { AlertCircle } from 'lucide-react';

export default function SeniorFallDetectors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Fall Detectors for Seniors — TekSure" description="Best fall detection for seniors — Apple Watch, Lifeline, Bay Alarm." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <AlertCircle className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Fall Detectors</h1>
          <p className="text-lg text-muted-foreground">Help arrives even if you can&apos;t call.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Apple Watch SE+</h2><p>$249. Auto-detects hard falls. Calls 911 if no response in 60 seconds.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Lifeline AutoAlert</h2><p>$30/month. Pendant. Detects falls. 24/7 monitoring.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Bay Alarm SOS Smartwatch</h2><p>$129 + $30/month. Watch + cellular. No phone needed.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Pixel Watch 2</h2><p>$350. Free fall detection. Alerts emergency contacts.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Statistics</h2><p>1 in 4 seniors fall yearly. 30 minutes on floor = serious complications.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Why critical</h2><p>Lying alone after fall = lethal complications. Auto-detection saves lives.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Apple Watch is one-time cost vs $30/month subscriptions. Worth comparing.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
