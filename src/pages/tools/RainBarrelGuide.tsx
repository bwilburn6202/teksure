import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { CloudRain } from 'lucide-react';

export default function RainBarrelGuide() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Rain Barrel Guide for Senior Gardeners | TekSure" description="Free water for garden. Plain-English rain barrel install + rebate guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <CloudRain className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Rain Barrel Guide</h1>
          <p className="text-lg text-muted-foreground">Free water. Save environment + bills.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why rain barrels</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Plants love rainwater — no chlorine.</li>
              <li>Reduces water bill.</li>
              <li>Reduces stormwater runoff (eco-friendly).</li>
              <li>Self-fills every rain.</li>
              <li>Many cities give rebates / subsidies.</li>
              <li>Good for environment.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best rain barrels</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Algreen 50-gal</strong> — $80-110. Decorative styles.</li>
              <li><strong>RTS Home Accents 50-gal</strong> — $75. Looks like wood.</li>
              <li><strong>RainPerfect Solar Pump</strong> — adds powered drip irrigation.</li>
              <li><strong>DIY 55-gal food-grade barrel</strong> — $30-50. Functional only.</li>
              <li>Look for: spigot, overflow valve, child-safe top.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Install (1-2 hours)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Place at downspout (gutter).</li>
              <li>Cut downspout to barrel height.</li>
              <li>Add downspout adapter / diverter.</li>
              <li>Place on concrete blocks (raise for hose access).</li>
              <li>Connect overflow hose toward away from house.</li>
              <li>Hire handyman if uncomfortable ($75-150).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">City rebates</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Many cities offer $50-100 rebate.</li>
              <li>Search &quot;[your city] rain barrel rebate.&quot;</li>
              <li>Some give barrels FREE.</li>
              <li>Sometimes county-level program.</li>
              <li>Local water utility often runs.</li>
              <li>Apply BEFORE buying typically.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Maintenance</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Mosquito control — keep tightly screened OR add mosquito dunks ($5).</li>
              <li>Clean every spring — debris settles bottom.</li>
              <li>Drain before winter (prevents cracking).</li>
              <li>Refit downspout normally for winter.</li>
              <li>Check for leaks.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Use rain water</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Garden watering (best use).</li>
              <li>Flowers + houseplants.</li>
              <li>Wash car / patio.</li>
              <li>NOT for drinking.</li>
              <li>NOT for vegetables you eat raw (some safety experts cautious).</li>
              <li>Boil first if for sensitive plants.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Combine with drip irrigation</h3>
            <p className="text-sm text-muted-foreground">Solar pump + drip irrigation from rain barrel = fully automatic garden watering. Save 20-50% on water bill in summer. Senior favorite combo. $200 setup pays back first year. Free water + free electricity (solar) = free watering forever.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
