import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Sparkles } from 'lucide-react';

export default function SeniorWasherDryerApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Smart Washer Dryer Apps for Seniors — TekSure" description="Get phone alerts when laundry is done — Samsung, LG, GE smart laundry." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Sparkles className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Smart Washer/Dryer</h1>
          <p className="text-lg text-muted-foreground">Don&apos;t forget the laundry. Phone alerts.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Samsung SmartThings</h2><p>App alerts when wash is done. Avoids damp laundry.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">LG ThinQ</h2><p>Same. Diagnostic mode helps the repairman.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">GE Profile</h2><p>UltraFresh vent system reduces mold. Sends alerts to phone.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Skip smart, use timer</h2><p>$15 plug-in timer + Alexa = same alert without expensive appliances.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Senior-friendly features</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>Big buttons</li><li>Auto-detect load size</li><li>Front-load (no bending into top)</li><li>Pedestal for easier loading</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Detergent dispenser</h2><p>Holds 30+ loads of detergent. No measuring each time.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: A pedestal under the front-loader saves your back. Worth the $200.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
