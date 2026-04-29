import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin } from 'lucide-react';

export default function ScenicByways() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="National Scenic Byways for Seniors | TekSure" description="Best US road trips. Plain-English picks for senior-friendly scenic byways and trip-planning apps." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <MapPin className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">National Scenic Byways</h1>
          <p className="text-lg text-muted-foreground">America&apos;s best road trips.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Top picks for seniors</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Blue Ridge Parkway (NC/VA)</strong> — 469 miles. Slow, scenic. Most senior-loved drive in US.</li>
              <li><strong>Pacific Coast Highway (CA)</strong> — Hwy 1, Big Sur. Stunning. Limited senior facilities — plan stops.</li>
              <li><strong>Great River Road (10 states)</strong> — follows Mississippi River. River towns, history, paddle boats.</li>
              <li><strong>Skyline Drive (VA)</strong> — Shenandoah. Compact, well-maintained.</li>
              <li><strong>Going-to-the-Sun Road (Glacier NP, MT)</strong> — only 50 miles but unforgettable.</li>
              <li><strong>Million Dollar Highway (CO)</strong> — beautiful but steep. Skip if vertigo.</li>
              <li><strong>Beartooth Highway (MT/WY)</strong> — 68 miles into Yellowstone backside.</li>
              <li><strong>Maine Coast Route 1</strong> — slow Atlantic coastline + lobster rolls.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Free trip planning</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>FHWA scenicbyways.cs.byu.edu</strong> — official US byway directory.</li>
              <li><strong>Roadtrippers app</strong> — find quirky stops along route.</li>
              <li><strong>iExit</strong> — what&apos;s at next exit.</li>
              <li><strong>NPS app</strong> — National Park Service. Trail maps, ranger programs.</li>
              <li><strong>Apple Maps Guides</strong> + Google Maps "Saved" — share lists with travel partner.</li>
              <li><strong>AllTrails</strong> — easy hikes near scenic stops.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior-friendly tips</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Drive 4-6 hours/day max — overnights in between.</li>
              <li>Stop every 2 hours minimum.</li>
              <li>Pack snacks, water, paper map (signal cuts out).</li>
              <li>Pre-book hotels — small towns fill up.</li>
              <li>America the Beautiful Senior Pass ($80 lifetime) — free entry to all national parks.</li>
              <li>Consider RV vs hotel — many seniors love it.</li>
              <li>Stick to well-traveled routes — no remote dirt roads.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">RV travel for seniors</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>RVshare / Outdoorsy</strong> — Airbnb for RVs. Try before buying.</li>
              <li><strong>KOA + Good Sam</strong> — best chains for seniors.</li>
              <li><strong>Harvest Hosts</strong> — overnight at wineries, farms ($110/yr).</li>
              <li><strong>Class B "camper van"</strong> — easiest to drive for first-time.</li>
              <li>Consider RV insurance + roadside extra.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Senior America the Beautiful Pass</h3>
            <p className="text-sm text-muted-foreground">$80 LIFETIME for 62+. Free entry to all 2,000+ federal recreation sites including every National Park, BLM, USFS. Single best $80 a senior can spend on travel. Get at any park entrance OR usgs.gov/store.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
