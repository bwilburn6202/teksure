import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Sun } from 'lucide-react';

export default function GrowLightSetup() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Grow Light Setup for Seniors | TekSure" description="Grow plants indoors year-round. Plain-English grow light guide for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Sun className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Grow Light Setup</h1>
          <p className="text-lg text-muted-foreground">Sunshine for plants in winter. Cheap.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why grow lights</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Indoor plants thrive in winter.</li>
              <li>Start vegetables 6-8 weeks before garden.</li>
              <li>Save on starts ($3 each x dozens = saves $50-100).</li>
              <li>Seasonal Affective Disorder — also helps you.</li>
              <li>Keep tropical houseplants happy.</li>
              <li>Year-round salads.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best grow lights</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Soltech Aspect</strong> — beautiful pendant. $200-400.</li>
              <li><strong>Mars Hydro TS-600</strong> — full spectrum. $80.</li>
              <li><strong>Spider Farmer SF-1000</strong> — high quality. $150.</li>
              <li><strong>GE Grow Bulbs</strong> — $20 each. Replace any bulb.</li>
              <li><strong>Barrina LED strip lights</strong> — $40 for 4. For shelves.</li>
              <li>LED is best — cheap to run, no heat issues.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Setup tips</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Distance from plant: 12-24 inches typical.</li>
              <li>14-16 hours/day with timer.</li>
              <li>Outlet timer ($10) — automatic on/off.</li>
              <li>Reflective surface behind (mylar or white wall).</li>
              <li>Watch leaves — pale = need more light.</li>
              <li>Brown spots = too close.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior-easy stations</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Closet shelf with grow lights.</li>
              <li>Bathroom counter with vanity grow bulb.</li>
              <li>Kitchen countertop herb grow.</li>
              <li>Spare bedroom grow shelf ($150 setup).</li>
              <li>Garage with Mylar walls (winter starts).</li>
              <li>No yard needed — indoor only.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Easy first plants</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Lettuce — 30 days seed to harvest.</li>
              <li>Herbs — basil, mint, parsley.</li>
              <li>Microgreens — fast + nutritious.</li>
              <li>Tomato seedlings (transplant outdoor in spring).</li>
              <li>Pepper seedlings.</li>
              <li>Pothos houseplant — practically indestructible.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Light therapy bonus</h3>
            <p className="text-sm text-muted-foreground">Bright grow lights also help YOU. Studies show light therapy treats Seasonal Affective Disorder. 30 min/day at therapy lamp ($60-150 — separate purpose) OR sit near grow lights — mood boost. Free side benefit of plant lighting.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
