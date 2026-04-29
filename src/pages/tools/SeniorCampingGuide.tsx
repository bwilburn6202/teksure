import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Tent } from 'lucide-react';

export default function SeniorCampingGuide() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Senior Camping Guide | TekSure" description="Camping comfortably as senior. Plain-English picks for outdoor seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Tent className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Senior Camping</h1>
          <p className="text-lg text-muted-foreground">Sleep under stars. Comfortably.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior-friendly options</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Cabins</strong> — KOA, state parks. With bed.</li>
              <li><strong>Glamping</strong> — luxury safari tents.</li>
              <li><strong>Camper van</strong> — bed + cooking inside.</li>
              <li><strong>RV</strong> — full home on wheels.</li>
              <li><strong>Tent + cot</strong> — affordable basic.</li>
              <li>Match comfort to your needs.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Camping comfort upgrades</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Tall cot</strong> — easier in/out than ground.</li>
              <li><strong>Self-inflating mattress</strong>.</li>
              <li><strong>Power pack</strong> — phone charging.</li>
              <li><strong>Camp chair with back support</strong>.</li>
              <li><strong>Quality sleeping bag</strong>.</li>
              <li><strong>Pillow from home</strong>.</li>
              <li><strong>Headlamp</strong> — bathroom trips at night.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior National Park Pass</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>$80 lifetime for 62+.</li>
              <li>FREE entry all national parks.</li>
              <li>50% off camping at federal sites.</li>
              <li>Apply at usgs.gov.</li>
              <li>Pays back fast.</li>
              <li>See /tools/national-parks-trip.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Camp safety</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Don&apos;t go alone first time.</li>
              <li>Cell signal at site.</li>
              <li>Tell someone where + when.</li>
              <li>Camping near restrooms easier.</li>
              <li>Don&apos;t hike alone.</li>
              <li>Watch weather forecasts.</li>
              <li>First aid kit + meds.</li>
              <li>Emergency contact bracelet if alone.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best senior camping spots</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>State parks — usually flat, accessible.</li>
              <li>KOA campgrounds — amenities.</li>
              <li>National park lodges — premium.</li>
              <li>Beach campgrounds.</li>
              <li>Lakeside spots.</li>
              <li>Avoid backcountry first time.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Senior camping clubs</h3>
            <p className="text-sm text-muted-foreground">RV clubs welcome solo seniors. Escapees RV Club. Good Sam. Many seniors find lifelong friends camping. Don&apos;t let age stop you. Modern camping much more comfortable than youth memories.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
