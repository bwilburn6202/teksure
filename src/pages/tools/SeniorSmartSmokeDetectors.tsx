import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { AlertTriangle } from 'lucide-react';

export default function SeniorSmartSmokeDetectors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Smart Smoke Detectors for Seniors — TekSure" description="Smart smoke and CO detectors for seniors — Nest Protect, First Alert, Kidde." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <AlertTriangle className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Smart Smoke Detectors</h1>
          <p className="text-lg text-muted-foreground">Phone alerts even when away.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Nest Protect</h2><p>$120. Smoke + carbon monoxide. Voice alerts (&ldquo;Smoke in kitchen&rdquo;). 10-year battery.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">First Alert Onelink</h2><p>$120. Apple HomeKit. Hardwired or battery.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Kidde Wi-Fi</h2><p>$80. Cheaper smart option. App alerts.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Why &ldquo;smart&rdquo;</h2><p>Old detectors only beep. Smart ones text family if smoke detected and you don&apos;t respond.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">CO is critical for seniors</h2><p>Carbon monoxide kills silently. Required by law in most states.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Free options</h2><p>Many fire departments give free detectors to seniors. Call yours.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Test monthly. Replace every 10 years even if it still beeps.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
