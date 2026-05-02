import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Activity } from 'lucide-react';

export default function SeniorGlucoseTracking() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Glucose Tracking Apps for Seniors — TekSure" description="Track blood sugar on your phone — Dexcom, Libre, and free options." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Activity className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Glucose Tracking Apps</h1>
          <p className="text-lg text-muted-foreground">Manage diabetes from your phone.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Dexcom G7</h2><p>Continuous monitor. App shows real-time glucose. No finger pricks.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">FreeStyle Libre 3</h2><p>Sensor on your arm. Scan with phone. Medicare may cover.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">mySugr</h2><p>Free. Manual entry. Tracks meals, exercise, mood. Charts for your doctor.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Glucose Buddy</h2><p>Free. Big numbers. Reminds you when to check.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Share with family</h2><p>Dexcom and Libre let family see your numbers in real time. Caregivers get low-blood-sugar alerts.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Print for doctor</h2><p>All apps export a PDF report. 2 weeks of data tells your doctor a lot.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Medicare Part B covers continuous monitors for many seniors. Ask your doctor.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
