import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { LifeBuoy } from 'lucide-react';

export default function AAAAppForSeniorEmergency() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="AAA App for Senior Emergency | TekSure" description="Roadside assistance app. AAA senior auto emergency guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <LifeBuoy className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">AAA App</h1>
          <p className="text-lg text-muted-foreground">Senior roadside helper.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Membership</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$60-$120/year.</li><li>Roadside assistance.</li><li>Tow truck.</li><li>Battery jump.</li><li>Locked out help.</li><li>Senior peace.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Request help</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Open AAA app.</li><li>Tap roadside.</li><li>Auto-detects location.</li><li>Pick problem.</li><li>Truck dispatched.</li><li>Track on map.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior wins</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>No phone calling on side of road.</li><li>App sends location.</li><li>Track ETA.</li><li>Stay in safe car.</li><li>Senior anxiety reduced.</li><li>Member benefits.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Member discounts</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Hotels 5-15%.</li><li>Restaurants 10%.</li><li>Theme parks.</li><li>Insurance discounts.</li><li>Senior savings stack.</li><li>Worth scanning before buying.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Trip planning</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>TripTik route planner.</li><li>Old paper version digital.</li><li>Member free.</li><li>Senior road trip planner.</li><li>Hotel + restaurant suggestions.</li><li>AAA-rated quality.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Alternatives</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Allstate Roadside.</li><li>Better World Club.</li><li>Many auto insurers include.</li><li>Check Geico, State Farm.</li><li>Senior compare.</li><li>May not need AAA.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">AAA app + member = senior road peace</h3><p className="text-sm text-muted-foreground">$80/year AAA + app = senior road trip peace. Battery dies, lockout, flat tire — tap app, help arrives. Plus member discounts at hotels/restaurants. Many seniors keep AAA decades for emergency value alone. Or check if insurance includes.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
