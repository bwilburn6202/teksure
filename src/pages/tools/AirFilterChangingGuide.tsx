import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Wind } from 'lucide-react';

export default function AirFilterChangingGuide() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Air Filter Changing Guide for Seniors | TekSure" description="HVAC filter basics. Plain-English senior guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Wind className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Air Filter Changing</h1>
          <p className="text-lg text-muted-foreground">5-min job. Saves health + money.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why change?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Cleaner indoor air.</li>
              <li>Reduces allergies.</li>
              <li>Lower energy bills.</li>
              <li>HVAC lasts longer.</li>
              <li>Reduces dust + odors.</li>
              <li>Critical for seniors with respiratory issues.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Find your filter</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Furnace area — slot on side.</li>
              <li>Or in return air vent (large grille on wall).</li>
              <li>Look for arrow showing airflow direction.</li>
              <li>Photo current filter for reference.</li>
              <li>Note size on edge (e.g., 16x25x1).</li>
              <li>Bring photo to store.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">How often?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Standard 1&quot; filter: every 1-3 months.</li>
              <li>Check monthly.</li>
              <li>Replace when dirty (flashlight test).</li>
              <li>Pets — every month.</li>
              <li>Allergies — every month.</li>
              <li>5-inch deeper filter: 6 months.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">MERV rating</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>MERV 8 — basic dust + pollen.</li>
              <li>MERV 11 — pet dander + smoke.</li>
              <li>MERV 13 — bacteria, viruses.</li>
              <li>Higher = more filtration.</li>
              <li>But too high = strain HVAC.</li>
              <li>MERV 8-13 most homes.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Where to buy</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Home Depot / Lowes — $5-25 each.</li>
              <li>Amazon — subscription option.</li>
              <li>FilterBuy.com — discount packs.</li>
              <li>Costco — bulk savings.</li>
              <li>Tip: buy 4-6 at once for year.</li>
              <li>Cheap thin filters often suffice.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">How to change</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Turn off thermostat.</li>
              <li>Slide old filter out.</li>
              <li>Note arrow direction.</li>
              <li>Slide new filter in matching arrow.</li>
              <li>Done!</li>
              <li>Set phone reminder for next change.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Subscription convenience</h3>
            <p className="text-sm text-muted-foreground">FilterBuy, Amazon Subscribe &amp; Save — auto-deliver every 1-3 months. Forget to remember. Door delivery. 5-10% discount. No more guessing dates. Senior-friendly. Set + forget. $50-100/yr depending on size + frequency. Pays itself in HVAC longevity.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
