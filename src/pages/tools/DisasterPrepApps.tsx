import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { ShieldAlert } from 'lucide-react';

export default function DisasterPrepApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Disaster Prep Apps & Kit — Hurricanes, Tornadoes, Wildfires | TekSure" description="Be ready when storms hit or fires force evacuation. Plain-English emergency kit, apps, and a 72-hour grab-bag." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <ShieldAlert className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Disaster Prep Apps & Kit</h1>
          <p className="text-lg text-muted-foreground">When 911 is overwhelmed, you\'re on your own for 72 hours.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Essential free apps</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>FEMA app</strong> — official emergency alerts, shelter finder, post-disaster aid.</li>
              <li><strong>Red Cross First Aid app</strong> — what to do for falls, choking, heart attack.</li>
              <li><strong>Watch Duty</strong> — wildfire-specific (Western US). Run by volunteer fire-watchers. Better than government feeds.</li>
              <li><strong>NOAA Weather Radio app or RadarScope</strong> — for tornado/hurricane watches.</li>
              <li><strong>Your local utility\'s outage app</strong> — shows when power expected back.</li>
              <li><strong>Zello (free walkie-talkie app)</strong> — works on Wi-Fi and cellular when phones are spotty.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">72-hour kit (grab and go)</h2>
            <p className="text-sm mb-2">A duffel or backpack near the door, ready always:</p>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>1 gallon of water per person per day × 3 days.</li>
              <li>Non-perishable food: granola bars, peanut butter, canned goods, can opener.</li>
              <li>Battery-powered or hand-crank radio.</li>
              <li>Flashlight + extra batteries.</li>
              <li>First-aid kit.</li>
              <li>3-day supply of any prescription medications.</li>
              <li>Spare glasses.</li>
              <li>Cash ($100+ in small bills — ATMs and credit cards may not work).</li>
              <li>Whistle.</li>
              <li>Dust masks.</li>
              <li>Moist towelettes.</li>
              <li>Phone chargers + portable power bank (charged).</li>
              <li>Local maps (paper).</li>
              <li>Copies of insurance, ID, medical info in waterproof bag.</li>
              <li>Pet food + medication for any pets.</li>
              <li>Spare clothes.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Stay-at-home supplies (longer outages)</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>2 weeks of food and water.</li>
              <li>NOAA weather radio with battery backup.</li>
              <li>Power station (Jackery 240 or larger) — runs CPAP, phones, light.</li>
              <li>Camp stove or grill (use OUTSIDE only — never indoors).</li>
              <li>Coolers + ice for refrigeration.</li>
              <li>Manual can opener.</li>
              <li>Plenty of batteries.</li>
              <li>Toiletries, garbage bags, bleach, plastic ties.</li>
              <li>Tools — wrench to turn off gas if needed.</li>
              <li>Generator (whole-house or portable) if you live in storm country.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Region-specific</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Hurricane country (FL, LA, NC, SC, TX)</strong> — plywood for windows, sandbags, evacuation plan, fuel for generator.</li>
              <li><strong>Wildfire country (CA, OR, WA, CO)</strong> — defensible space around home, N95 masks, air purifier with HEPA filter, evacuation plan.</li>
              <li><strong>Tornado alley (TX, OK, KS, NE, MO, AR)</strong> — designated shelter (basement, interior closet), helmet for kids, NOAA weather radio.</li>
              <li><strong>Earthquake (CA, AK, HI)</strong> — secure heavy furniture to walls, water heater straps, gas shut-off training.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">For medication-dependent people</h3>
            <p className="text-sm text-muted-foreground">Talk to your doctor about a 30-day "emergency supply" of essential medications. Most insurance allows this once a year, especially for hurricane-prone regions. Insulin, oxygen, dialysis — make a written plan with your doctor about what to do during extended outages.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
