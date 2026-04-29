import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Snowflake } from 'lucide-react';

export default function FrozenPipesPrevention() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Frozen Pipes Prevention | TekSure" description="A burst pipe can cost \$10,000+ in damage. Plain-English steps to prevent freezing — including what to do BEFORE the cold snap." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Snowflake className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Frozen Pipes Prevention</h1>
          <p className="text-lg text-muted-foreground">A burst pipe = $10,000+ in damage. 30 minutes to prevent.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">When pipes freeze</h2>
            <p className="text-sm">Below 20°F outside for 6+ hours. Worse if windy. Pipes in unheated areas (garage, attic, exterior walls) most at risk.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Before winter</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Disconnect garden hoses and drain.</li>
              <li>Cover outdoor faucets with insulating covers ($3-10 each).</li>
              <li>Insulate pipes in unheated areas (foam pipe sleeves, $5-10 per 6 feet).</li>
              <li>Find your main water shutoff valve. Tag it.</li>
              <li>Caulk gaps where cold air enters near pipes.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Before a cold snap (overnight prep)</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li><strong>Drip faucets</strong> — leave one or two faucets running pencil-lead-thin all night. Especially exterior-wall faucets.</li>
              <li><strong>Open cabinet doors</strong> — let warm room air reach pipes under sinks.</li>
              <li><strong>Set thermostat</strong> to at least 55°F, even if away.</li>
              <li><strong>Garage</strong> — keep door closed; pull car inside to add ambient heat.</li>
              <li><strong>Smart thermostat alerts</strong> — get phone alerts if house temp drops too low.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">If you suspect a frozen pipe</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li><strong>Turn on the faucet</strong> the pipe leads to — let melting water drain.</li>
              <li><strong>Apply heat</strong> — hair dryer, heating pad, or warm towels. Start nearest the faucet.</li>
              <li><strong>Never use open flame</strong> (torch, propane heater).</li>
              <li><strong>If can\'t locate or pipe burst</strong> — turn off main water shutoff. Call plumber.</li>
              <li><strong>Insurance call</strong> — document with photos before cleanup.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Smart leak detectors</h2>
            <p className="text-sm">Detection saves you from "I came home from vacation and the basement was a swimming pool". Place sensors in:</p>
            <ul className="list-disc pl-5 space-y-1 text-sm mt-2">
              <li>Under washing machine.</li>
              <li>Under water heater.</li>
              <li>Under sinks.</li>
              <li>Behind toilets.</li>
              <li>Near sump pump.</li>
            </ul>
            <p className="text-sm mt-2">(See our Water Leak Detector tool.) Or get whole-house auto-shutoff like Moen Flo.</p>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Going on winter vacation?</h3>
            <p className="text-sm text-muted-foreground">Set thermostat to 55°F. Have a neighbor check the house every 2-3 days. Or better — turn off main water and drain pipes (open all faucets to drain). For Florida-bound retirees with northern homes — winterize with a plumber\'s help. $200 service prevents $20,000 of damage.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
