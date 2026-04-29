import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Sun } from 'lucide-react';

export default function HeatwaveSafety() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Heatwave Safety for Seniors | TekSure" description="Stay safe in extreme heat. Plain-English heatwave guide for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Sun className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Heatwave Safety</h1>
          <p className="text-lg text-muted-foreground">Senior bodies struggle with heat. Plan ahead.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why seniors at risk</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Body cooling less efficient with age.</li>
              <li>Many medications increase heat sensitivity.</li>
              <li>Diuretics lose more fluid.</li>
              <li>BP meds, antidepressants impair sweating.</li>
              <li>Less thirst sensation.</li>
              <li>Heat stroke deadly for seniors.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Cool home tips</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>AC on, even if power bill higher.</li>
              <li>Set 78°F (cool enough, less expensive).</li>
              <li>Close blinds during day.</li>
              <li>Fans circulate AC air.</li>
              <li>Don&apos;t use oven.</li>
              <li>Lots of water — even if not thirsty.</li>
              <li>Cool showers / wet washcloth on neck.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Cooling centers</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Most cities have cooling centers.</li>
              <li>Senior centers often.</li>
              <li>Libraries.</li>
              <li>Mall walking.</li>
              <li>Free.</li>
              <li>Call 211 to find local.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Heat warning signs</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Heat exhaustion: heavy sweating, weakness, nausea.</li>
              <li>Heat stroke: confusion, no sweating, hot dry skin, fast pulse.</li>
              <li>HEAT STROKE = 911.</li>
              <li>Cool body fast — wet skin, fan, ice packs neck/armpits.</li>
              <li>Stop activity if dizzy.</li>
              <li>Move to AC immediately.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Energy assistance</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>LIHEAP — pays AC bills (income-eligible).</li>
              <li>Free AC units some programs.</li>
              <li>Salvation Army summer programs.</li>
              <li>State programs vary.</li>
              <li>Don&apos;t turn off AC to save money — risk death.</li>
              <li>Apply for help if needed.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Family check-ins</h3>
            <p className="text-sm text-muted-foreground">Heat waves — check on senior neighbors + family. Daily phone calls. Visit if alone. Many seniors die alone in heat. Apple Watch fall detection helps. NEVER leave senior in hot car. Most heat deaths PREVENTABLE.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
