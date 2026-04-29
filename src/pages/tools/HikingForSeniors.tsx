import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Mountain } from 'lucide-react';

export default function HikingForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Hiking for Seniors | TekSure" description="Senior-friendly hiking trails + gear + safety. Plain-English guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Mountain className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Hiking for Seniors</h1>
          <p className="text-lg text-muted-foreground">Mind + body workout. Best at any age.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why senior hiking</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Cardio + strength + balance combined.</li>
              <li>Lower BP, better mood.</li>
              <li>Outdoors = vitamin D + better sleep.</li>
              <li>Connects with nature.</li>
              <li>Free (most parks).</li>
              <li>Social if hiking groups.</li>
              <li>Goal-setting: &quot;all 5 trails in our park.&quot;</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Find right trails</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>AllTrails app</strong> — filter by difficulty, length.</li>
              <li>Start with &quot;easy&quot; trails (paved or flat).</li>
              <li>Loop trails better than out-and-back (boredom).</li>
              <li>Rail-trails — perfectly flat.</li>
              <li>State parks usually senior-friendly options.</li>
              <li>National parks have ADA-accessible trails.</li>
              <li>Read recent reviews — trail conditions change.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior gear</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Trekking poles</strong> ($50-150) — knee + balance help. Game-changer.</li>
              <li><strong>Hiking shoes</strong> — Hoka, Merrell, Keen. Wide widths.</li>
              <li><strong>Wool socks</strong> — blister prevention.</li>
              <li><strong>Daypack</strong> — water, snacks, layers.</li>
              <li><strong>Trekking pole + day pack</strong> = 80% of senior gear needs.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Safety</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Tell someone your route + return time.</li>
              <li>Bring fully charged phone.</li>
              <li>Garmin inReach satellite messenger ($300 + $15/mo) for remote.</li>
              <li>Apple Watch with cellular — emergency SOS.</li>
              <li>Always carry water (1 liter per 2 hrs).</li>
              <li>Snacks + first aid kit.</li>
              <li>Don&apos;t hike alone in remote areas.</li>
              <li>Turn back if anything wrong.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior National Park Pass</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>$80 LIFETIME for 62+ ($20/year option too).</li>
              <li>Free entry to ALL national parks.</li>
              <li>Free at federal recreation sites.</li>
              <li>50% off camping at federal sites.</li>
              <li>Apply at usgs.gov or any park entrance.</li>
              <li>Best $80 senior deal.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior hiking groups</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Sierra Club</strong> — many senior-paced hikes.</li>
              <li><strong>AMC (Appalachian Mountain Club)</strong> — Northeast.</li>
              <li><strong>Meetup.com</strong> — search &quot;senior hiking [city].&quot;</li>
              <li><strong>Road Scholar</strong> — senior hiking trips abroad.</li>
              <li><strong>Local Audubon societies</strong> — bird-watching hikes.</li>
              <li>Group hiking = safety + social.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Build slowly</h3>
            <p className="text-sm text-muted-foreground">Start: 1-mile flat trail. Each month, add 0.5 miles or harder. Year 1: comfortable 5-mile hikes. Many seniors do 10+ mile hikes regularly. National parks 5-10x easier than imagined. Gear + pacing = key. Hike weekly = transformative health.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
