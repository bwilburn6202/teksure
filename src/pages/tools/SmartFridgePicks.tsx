import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Refrigerator } from 'lucide-react';

export default function SmartFridgePicks() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Smart Fridge Picks for Seniors | TekSure" description="Worth it or gimmick? Plain-English smart refrigerator guide for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Refrigerator className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Smart Fridge for Seniors</h1>
          <p className="text-lg text-muted-foreground">Mostly gimmick. Sometimes useful.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Honest assessment</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Smart fridges are 80% gimmick.</li>
              <li>Touch screens fail before fridge dies.</li>
              <li>Apps stop being supported after 5 yrs.</li>
              <li>Pay $1,000+ premium for features won&apos;t use.</li>
              <li>Skip smart, get reliable fridge.</li>
              <li>Save $1,500 on simpler model.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Genuinely useful features</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Internal cameras</strong> — see what&apos;s inside without opening (saves trip to store).</li>
              <li><strong>Door-in-door</strong> — minimize air loss.</li>
              <li><strong>Counter-depth</strong> — kitchen doesn&apos;t feel cramped.</li>
              <li><strong>Dispenser ergonomics</strong> — easy reach for water/ice.</li>
              <li><strong>Inverter compressor</strong> — quieter + lasts longer.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Skip these features</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Recipe display on door — nobody uses.</li>
              <li>Calendar / family bulletin — phone better.</li>
              <li>TV streaming on fridge — silly.</li>
              <li>Spotify built in — phone better.</li>
              <li>Voice control — Alexa / Google does it.</li>
              <li>Save the $1,500.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best non-smart picks</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>LG counter-depth</strong> — quiet, reliable. $1,500-2,500.</li>
              <li><strong>Whirlpool 25 cu ft</strong> — basic + reliable. $1,000-1,500.</li>
              <li><strong>GE Profile</strong> — beautiful + lasts. $2,000-3,000.</li>
              <li><strong>Bosch counter-depth</strong> — premium quiet.</li>
              <li>Avoid Samsung — more breakdowns reported.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior considerations</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>French door (2 short doors) easier than full door.</li>
              <li>Bottom freezer = bend less.</li>
              <li>Counter-depth = less protrusion.</li>
              <li>Lights in freezer — see what&apos;s there.</li>
              <li>Easy-glide drawers.</li>
              <li>Don&apos;t over-buy — match family size.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Replace timing</h3>
            <p className="text-sm text-muted-foreground">Fridges last 12-15 years. New efficient model saves $50-100/yr energy. Best deals: Memorial Day, Black Friday, Labor Day. Costco has best appliance bundles + delivery + haul-away. Avoid extended warranty — usually waste of $.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
