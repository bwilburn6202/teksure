import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Activity } from 'lucide-react';

export default function SeniorRPMRemote() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Remote Patient Monitoring — Senior Guide" description="Monitor health from home, share with doctors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Activity className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Remote Patient Monitoring</h1>
          <p className="text-lg text-muted-foreground">Doctor visits from home.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. What it is</h2><p>Devices send blood pressure, weight, glucose to doctors. Less office visits.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Medicare covers</h2><p>For chronic conditions. Heart failure, diabetes, COPD. Free or low cost.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Cuff plus app</h2><p>Smart blood pressure cuff. Sends readings automatically.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Smart scale</h2><p>Heart failure patients track weight daily. Sudden gain means fluid retention.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. CGM glucose</h2><p>Continuous glucose monitor. Diabetics save fingersticks.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Ask your doctor</h2><p>If you have heart, lung, or diabetes condition, ask about remote monitoring.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Studies show remote monitoring reduces hospital visits by 30-50% for some conditions.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
