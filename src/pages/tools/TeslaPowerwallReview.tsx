import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Battery } from 'lucide-react';

export default function TeslaPowerwallReview() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Tesla Powerwall Review for Seniors | TekSure" description="Home battery backup. Plain-English Tesla Powerwall + alternatives for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Battery className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Home Battery Backup</h1>
          <p className="text-lg text-muted-foreground">Tesla Powerwall + alternatives.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Tesla Powerwall 3</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>$10,000-15,000 + install.</li>
              <li>13.5 kWh capacity.</li>
              <li>Power 8-12 hours typical home.</li>
              <li>Auto-switches when grid down.</li>
              <li>Pairs with solar.</li>
              <li>10-year warranty.</li>
              <li>Phone app monitors.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Alternatives</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Enphase IQ Battery</strong> — $4-15K. Modular.</li>
              <li><strong>LG Chem RESU</strong> — competitor.</li>
              <li><strong>SunPower SunVault</strong> — solar-paired.</li>
              <li><strong>EcoFlow Delta Pro</strong> — $3K portable.</li>
              <li><strong>Generac PWRcell</strong> — competitor.</li>
              <li>$7K-25K range typical install.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Tax credits</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>30% federal tax credit (Solar + Battery).</li>
              <li>Most state credits + utility rebates.</li>
              <li>Net cost often half advertised.</li>
              <li>Some utilities offer Virtual Power Plant payments.</li>
              <li>Selling stored energy back.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior priorities</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>CPAP machine.</li>
              <li>Oxygen concentrator.</li>
              <li>Refrigerated medications.</li>
              <li>Heating/cooling in extreme weather.</li>
              <li>Lights + phone charging.</li>
              <li>Critical for medical needs.</li>
              <li>Set up &quot;essential loads&quot; in app.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Cheaper portable option</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>EcoFlow Delta 2</strong> — $1K. Powers fridge 6+ hours.</li>
              <li><strong>Jackery Explorer 2000 Pro</strong> — $1,800.</li>
              <li><strong>Bluetti AC200P</strong> — $1,500.</li>
              <li>Plug appliances directly.</li>
              <li>No install.</li>
              <li>Sufficient for many seniors.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Worth it?</h3>
            <p className="text-sm text-muted-foreground">If: frequent outages, medical equipment users, has solar, longer-term homeowner. Else: portable battery $1K cheaper option. Generators alternative — see /tools/generator-test-routine. Pick based on risk + budget.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
