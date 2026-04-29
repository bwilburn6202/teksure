import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { CloudRain } from 'lucide-react';

export default function GutterCleaningOptions() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Gutter Cleaning Options for Seniors | TekSure" description="Don't climb the ladder. Plain-English gutter cleaning options for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <CloudRain className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Gutter Cleaning</h1>
          <p className="text-lg text-muted-foreground">DON&apos;T climb. Hire it or solve permanently.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why gutters matter</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Clogged gutters = water in basement/foundation.</li>
              <li>Foundation repair $5K-50K.</li>
              <li>Roof rot from backed-up water.</li>
              <li>Mold inside walls.</li>
              <li>Ice dams in winter.</li>
              <li>Mosquito breeding.</li>
              <li>Critical to clean 2x/year minimum.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">PROS — hire someone</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Local handyman</strong> — $75-200 single story, $150-400 two story.</li>
              <li><strong>TaskRabbit / Thumbtack</strong> — vetted contractors.</li>
              <li><strong>Roofing companies</strong> — often offer cleaning.</li>
              <li><strong>Gutter cleaning services</strong> — twice yearly contracts $200-500.</li>
              <li>Insurance + ladder safety = their problem.</li>
              <li>Spring + fall cleanings standard.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Permanent solution: gutter guards</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Mesh or screen covers prevent leaves entering.</li>
              <li>$300-2,000 DIY for whole house.</li>
              <li>$1,500-5,000 professional install.</li>
              <li>LeafFilter, LeafGuard, MasterShield brands.</li>
              <li>Don&apos;t eliminate cleaning — reduce 80%.</li>
              <li>Worth it if 2-story or many trees.</li>
              <li>Wait for sales — companies negotiate.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">From-the-ground tools</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Gutter wand</strong> for hose — $30-60. Spray clean from ground.</li>
              <li><strong>Telescoping gutter cleaner</strong> — wet/dry vac attachment.</li>
              <li><strong>iRobot Looj</strong> — gutter robot. Mixed reviews. $300.</li>
              <li>Only good for small clogs.</li>
              <li>Not enough for serious blockages.</li>
              <li>Still need pro check yearly.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">If you MUST climb</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>NEVER alone — falls top senior killer.</li>
              <li>Don&apos;t lean over — climb down + reposition.</li>
              <li>Stable level ground.</li>
              <li>Spotter holding ladder.</li>
              <li>Don&apos;t step above 3rd-from-top rung.</li>
              <li>Wear closed-toe shoes with grip.</li>
              <li>Truly — DON&apos;T. $200 hire saves life.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Vetting gutter companies</h3>
            <p className="text-sm text-muted-foreground">Get 3 quotes. Check reviews + BBB. Insured + bonded. Avoid door-to-door pitches. LeafFilter etc. high-pressure sales — wait + get other quotes. NEVER pay full upfront. Ask for references. Some companies install gutter guards FREE as &quot;showcase&quot; for marketing — ask.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
