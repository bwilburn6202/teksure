import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { ShieldAlert } from 'lucide-react';

export default function CarbonMonoxideSafety() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Carbon Monoxide Safety for Seniors | TekSure" description="Carbon monoxide is the silent killer. Detector recommendations and safety for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <ShieldAlert className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Carbon Monoxide Safety</h1>
          <p className="text-lg text-muted-foreground">The silent killer. How to stay safe.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What is carbon monoxide?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Colorless, odorless, tasteless gas.</li>
              <li>Can&apos;t see it, smell it, or taste it.</li>
              <li>Produced by combustion — gas, propane, wood, charcoal.</li>
              <li>Kills 400+ Americans yearly.</li>
              <li>Sends 50,000+ to emergency rooms.</li>
              <li>Seniors more vulnerable to poisoning.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Symptoms of CO poisoning</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Headache.</li>
              <li>Dizziness or confusion.</li>
              <li>Nausea or vomiting.</li>
              <li>Shortness of breath.</li>
              <li>Weakness or chest pain.</li>
              <li>Often mistaken for flu.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Detector requirements</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Required by law in most states.</li>
              <li>One on every floor of home.</li>
              <li>Outside each sleeping area.</li>
              <li>Replace every 5–7 years.</li>
              <li>Test monthly — push test button.</li>
              <li>Many CO + smoke combo units available.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best CO detectors</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Kidde Nighthawk — battery + plug-in, $30.</li>
              <li>First Alert SCO5CN — combo CO + smoke, $40.</li>
              <li>Nest Protect — smart, smartphone alerts, $120.</li>
              <li>Battery operated — works during outages.</li>
              <li>Digital display shows CO levels.</li>
              <li>10-year sealed battery models exist.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Common danger sources</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Gas furnaces — annual maintenance critical.</li>
              <li>Gas stoves + ovens.</li>
              <li>Gas water heaters.</li>
              <li>Fireplaces with blocked chimney.</li>
              <li>Generators (NEVER use inside or in garage).</li>
              <li>Charcoal grills (NEVER use inside).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">If alarm goes off</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Get everyone outside immediately.</li>
              <li>Call 911 from outside.</li>
              <li>Do NOT re-enter to investigate.</li>
              <li>Fire department will check air levels.</li>
              <li>Don&apos;t go back in until they say safe.</li>
              <li>Annual furnace inspection prevents most leaks.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Check your detectors today</h3>
            <p className="text-sm text-muted-foreground">Push the test button on every smoke and CO detector right now. If they don&apos;t beep loudly, replace the batteries (or the unit if older than 7 years). $30 per detector versus your life is the easiest math you&apos;ll ever do. If you don&apos;t have CO detectors at all, buy them today on Amazon — they&apos;ll arrive tomorrow. Many seniors have died from CO poisoning that a $30 detector would have prevented.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
