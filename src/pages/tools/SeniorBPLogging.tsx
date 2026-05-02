import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Heart } from 'lucide-react';

export default function SeniorBPLogging() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Blood Pressure Logging for Seniors — TekSure" description="Track BP readings — Apple Health, Omron Connect, Samsung Health." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Heart className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">BP Logging</h1>
          <p className="text-lg text-muted-foreground">Better data. Better treatment.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Apple Health</h2><p>FREE. iPhone app. Type readings. Auto-graphs.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Omron Connect</h2><p>FREE. With Omron BP cuff. Auto-syncs every reading.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Withings BP</h2><p>FREE. With Withings cuff. Best app design.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">When to log</h2><p>Same time daily. Morning before meds. Sit 5 min first.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Two readings</h2><p>1 minute apart. Average for accuracy.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Share with doctor</h2><p>Email PDF before visit. Better data than &ldquo;I felt off.&rdquo;</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Two weeks of readings tells doctor more than 5 office visits.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
