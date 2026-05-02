import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Bed } from 'lucide-react';

export default function SeniorAdjustableBeds() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Adjustable Beds for Seniors — TekSure" description="Smart adjustable beds — Sleep Number, Tempur-Pedic, budget options." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Bed className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Adjustable Beds</h1>
          <p className="text-lg text-muted-foreground">Better sleep. Easier on joints.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Sleep Number</h2><p>$1,500-$5,000. Adjustable firmness. App-controlled.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Tempur-Pedic</h2><p>$2,000+. Adjustable base + memory foam.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Lucid L300</h2><p>$700. Budget adjustable base. Sleep position memory.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Senior benefits</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>Reduces snoring</li><li>Eases acid reflux</li><li>Helps with breathing</li><li>Lifts to standing position</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Medicare</h2><p>If doctor prescribes for medical condition, may be partially covered.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Wireless remote</h2><p>Most beds include wireless remote. Some pair with phone app.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Test for 30 days. Most companies offer return if not happy.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
