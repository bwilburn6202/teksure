import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { AlertTriangle } from 'lucide-react';

export default function GasLeakDetect() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Gas Leak Detection — What to Do | TekSure" description="Smell rotten eggs? Plain-English emergency guide for natural gas leaks plus the best detectors to install in advance." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <AlertTriangle className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Gas Leak Detection</h1>
          <p className="text-lg text-muted-foreground">Don&apos;t flip switches. Get out. Then call.</p>
        </div>

        <Card className="mb-4 bg-yellow-50 border-yellow-300 dark:bg-yellow-950/20 dark:border-yellow-800">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">If you smell rotten eggs</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm font-medium">
              <li>Get OUT. Take family + pets.</li>
              <li>Don&apos;t flip light switches, garage door, anything electric (could spark).</li>
              <li>Don&apos;t use cell phone INSIDE the house.</li>
              <li>From OUTSIDE, call gas company emergency line OR 911.</li>
              <li>Don&apos;t go back in until cleared.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Symptoms in your house</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Rotten egg smell</strong> — added to natural gas as warning. Methane itself is odorless.</li>
              <li>Hissing or whistling near pipes, appliances, meter.</li>
              <li>Dead/dying plants near pipes.</li>
              <li>White cloud or dust blowing near pipe.</li>
              <li>Bubbles in puddles after rain near gas line.</li>
              <li>Headache, dizziness, nausea unexplained — could be subtle leak.</li>
              <li>Pets acting strange, refusing to come inside.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Detectors — install ahead of time</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Kidde Nighthawk Combo</strong> ($60) — natural gas + carbon monoxide alarm.</li>
              <li><strong>First Alert GCO1CN</strong> ($45) — same idea.</li>
              <li><strong>Smart Combo (Nest Protect)</strong> — alerts phone when away. ~$120 each.</li>
              <li>Place WITHIN 5 feet of gas-using appliances (stove, water heater, furnace, dryer).</li>
              <li>Mount about 6-12 inches from ceiling (natural gas rises).</li>
              <li>Replace every 5-7 years.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Carbon monoxide is different</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>CO is INVISIBLE and ODORLESS. You won&apos;t smell it.</li>
              <li>Comes from incomplete combustion — broken furnace, blocked chimney, generator running indoors.</li>
              <li>Symptoms: flu-like headache, dizziness, weakness, that lifts when you go outside.</li>
              <li>CO alarm essential. Different sensor than gas alarm.</li>
              <li>If alarm sounds: get out IMMEDIATELY. Call 911.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Prevention tips</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Annual furnace service ($100-200) catches problems before they become leaks.</li>
              <li>Have flexible gas connectors checked — old ones (pre-1990) prone to leaks.</li>
              <li>Don&apos;t store gasoline, paint, solvents near gas appliances.</li>
              <li>NEVER use stove/oven for heat.</li>
              <li>NEVER run generator inside garage or near windows.</li>
              <li>Shut off gas at meter before extended trips.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Free gas company inspection</h3>
            <p className="text-sm text-muted-foreground">Your gas utility (PG&amp;E, ConEd, etc.) does FREE leak inspections at your home. Just call. They&apos;ll come check appliances, lines, meter. Especially valuable if you&apos;ve smelled gas occasionally and don&apos;t know why.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
