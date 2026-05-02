import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Lightbulb } from 'lucide-react';

export default function SeniorEnergyAuditApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Energy Audit Apps — Senior Guide" description="Save on bills with home energy apps." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Lightbulb className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Energy Audit Apps</h1>
          <p className="text-lg text-muted-foreground">Find ways to lower your bills.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Sense</h2><p>$300 device. App shows which appliance uses how much. Pays back in savings.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Free utility tools</h2><p>Most utility apps include energy reports. Compare to neighbors.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. JouleBug</h2><p>Free. Energy-saving challenges as a game.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. ENERGY STAR app</h2><p>Free official EPA. Find efficient appliances. Federal rebates listed.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. LIHEAP</h2><p>Federal heat/cool assistance. Apps help you apply if income qualifies.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Free home audit</h2><p>Many utilities offer free home energy audits. Schedule online.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Setting thermostat 2 degrees lower in winter saves about 5% on heating.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
