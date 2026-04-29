import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Mountain } from 'lucide-react';

export default function NationalParksTrip() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="National Parks Trip Planning for Seniors | TekSure" description="Plan park visits at senior pace. Plain-English national parks guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Mountain className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">National Parks Trip Planning</h1>
          <p className="text-lg text-muted-foreground">63 parks. Many senior-friendly. Lifetime memories.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior Pass = $80 lifetime</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>62+ get LIFETIME pass for $80 ($20/yr option).</li>
              <li>Free entry to ALL 2,000+ federal recreation sites.</li>
              <li>50% off camping at federal sites.</li>
              <li>Apply at any park entrance OR usgs.gov.</li>
              <li>Best $80 spent in retirement.</li>
              <li>Pays back in 1 trip.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Most senior-friendly parks</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Acadia (Maine)</strong> — drive most viewpoints.</li>
              <li><strong>Yellowstone</strong> — drive thru, boardwalks accessible.</li>
              <li><strong>Grand Canyon (South Rim)</strong> — accessible viewpoints.</li>
              <li><strong>Smoky Mountains</strong> — driving routes.</li>
              <li><strong>Bryce Canyon</strong> — easy rim trail.</li>
              <li><strong>Mt. Rainier</strong> — paradise area accessible.</li>
              <li>Avoid Glacier (drives unpaved), Denali (challenging).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Plan ahead</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Lodgings book 1-2 years ahead for popular parks.</li>
              <li>Yellowstone, Glacier, Yosemite especially.</li>
              <li>Recreation.gov for permits + reservations.</li>
              <li>Off-season (May, Sept, Oct) = fewer crowds.</li>
              <li>Avoid summer holiday weekends.</li>
              <li>Park lodges often have senior rates.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior-paced visits</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>3-5 days minimum at major parks.</li>
              <li>Don&apos;t try to see everything.</li>
              <li>Drive scenic routes — many sites visible from car.</li>
              <li>Easy ranger walks (free, paced).</li>
              <li>Visitor center first — gets oriented.</li>
              <li>Picnic instead of restaurants.</li>
              <li>Rest day every 3-4 days.</li>
              <li>Altitude sickness — Yellowstone, Rocky Mtn 7K+ feet.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Apps + resources</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>NPS app</strong> — official, free. Each park&apos;s details.</li>
              <li><strong>AllTrails</strong> — find easy trails.</li>
              <li><strong>Recreation.gov</strong> — book lodging + camping.</li>
              <li><strong>Roadtrippers</strong> — plan multi-park trips.</li>
              <li><strong>Free park ranger talks</strong> — listed daily.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Group tours</h3>
            <p className="text-sm text-muted-foreground"><strong>Road Scholar</strong> — senior-paced national park trips. <strong>Tauck</strong>, <strong>Trafalgar</strong> — bus tours. Logistics done. Park lodges shared. Naturalist guides. $2K-5K/week. Worth it for those overwhelmed by planning. See /tools/senior-travel-groups.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
