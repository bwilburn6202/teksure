import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Droplet } from 'lucide-react';

export default function WaterShutoffGuide() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Find Your Water Shutoff Valve | TekSure" description="Burst pipe? Toilet overflowing? Find your main water shutoff valve in 30 seconds. Plain-English guide for every type of home." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Droplet className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Water Shutoff Guide</h1>
          <p className="text-lg text-muted-foreground">Find it BEFORE the pipe bursts.</p>
        </div>

        <Card className="mb-4 bg-yellow-50 border-yellow-300 dark:bg-yellow-950/20 dark:border-yellow-800">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Find it NOW</h2>
            <p className="text-sm">Average pipe burst pours 100 gallons/hour. By the time you find the shutoff in a panic, you have $5,000 in damage. Take 5 minutes today and learn where it is.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Where to look</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Basement</strong> — most common. Wall closest to street, near floor.</li>
              <li><strong>Crawl space</strong> — entry point of water line.</li>
              <li><strong>Garage</strong> — sometimes mounted on inside wall.</li>
              <li><strong>Utility/laundry room</strong> — common in slab homes.</li>
              <li><strong>Outside (warm climates)</strong> — near front of house, ground level.</li>
              <li><strong>Curb shutoff</strong> — at the street, in a metal lid marked WATER. Needs special "water key" tool ($15 at Home Depot).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Two types of valves</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Ball valve</strong> — straight handle. Turn 90° to close. Easiest. Most newer homes.</li>
              <li><strong>Gate valve</strong> — round wheel. Turn CLOCKWISE multiple times to close. Older homes.</li>
              <li>If gate valve is stuck — don&apos;t force it. Call plumber.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Test it once a year</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Turn it OFF.</li>
              <li>Try a faucet — should run dry within 30 seconds.</li>
              <li>Turn it back ON.</li>
              <li>If it leaks or won&apos;t fully turn — call plumber for replacement ($150-300).</li>
              <li>If it&apos;s seized shut/open — that&apos;s why you test annually.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Individual fixture shutoffs</h2>
            <p className="text-sm">Each toilet, sink, washer, fridge has its OWN shutoff right behind/below it. For one fixture problem, you don&apos;t need the main shutoff.</p>
            <ul className="list-disc pl-5 space-y-1 text-sm mt-2">
              <li><strong>Toilet</strong> — small valve behind/below tank. Turn clockwise.</li>
              <li><strong>Sink</strong> — small valves under sink, on supply lines.</li>
              <li><strong>Washer</strong> — two valves (hot/cold) behind machine.</li>
              <li><strong>Water heater</strong> — valve on top, COLD inlet.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Smart auto-shutoff (worth it)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Moen Flo</strong> ($350-500 + plumber install) — installs at main line. Auto-shuts off if leak detected.</li>
              <li><strong>Phyn Plus</strong> ($600 + install) — same idea.</li>
              <li><strong>Insurance discount</strong> — many insurers give 5-10% off for these.</li>
              <li>Cheaper alternative: <strong>leak sensors</strong> ($30 for 4) at every fixture. Phone alert, manual shutoff still needed.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Tag the valve</h3>
            <p className="text-sm text-muted-foreground">Hang a bright sign or piece of duct tape labeled "MAIN WATER" on the valve. In a panicked moment — at midnight, in the dark — you&apos;ll thank yourself. Tell every adult in the house. Pet sitters too.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
