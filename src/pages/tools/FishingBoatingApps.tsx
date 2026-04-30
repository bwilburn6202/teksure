import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Anchor } from 'lucide-react';

const APPS = [
  { name: 'Fishbrain', cost: 'Free; $11/mo Premium', best: 'Like Strava for fishing. Lake/river maps, top fishing spots, what bait works.', good: 'Best free fishing app.' },
  { name: 'Navionics Boating', cost: '$25/year per region', best: 'Marine charts. Depth contours. Tide and current.', good: 'Best for actual boating.' },
  { name: 'Windy', cost: 'FREE', best: 'Most beautiful weather app for sailors and pilots. Wind, gusts, forecast.', good: 'Free, no ads.' },
  { name: 'Tides Near Me', cost: 'FREE', best: 'Tide times, sunrise/sunset.', good: 'Best for coastal fishing.' },
  { name: 'iAngler', cost: 'FREE', best: 'Records FL/Gulf catches for state fisheries data — citizen science.', good: 'Best for FL anglers.' },
  { name: 'NautideFREE', cost: 'FREE', best: 'Solid free tide app.', good: 'Free alternative.' },
  { name: 'BoatU.S. app', cost: 'FREE for members', best: 'Tow service, fuel info, marina ratings.', good: 'Like AAA for boats.' },
];

export default function FishingBoatingApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Fishing & Boating Apps — Fishbrain, Navionics, Windy | TekSure" description="Fishing reports, boating charts, tide tables, weather. Plain-English picks for the best apps for anglers and boaters." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Anchor className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Fishing & Boating Apps</h1>
          <p className="text-lg text-muted-foreground">Tides, weather, charts, fish finders.</p>
        </div>

        <div className="space-y-3 mb-6">
          {APPS.map(a => (
            <Card key={a.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{a.name}</h3>
                  <span className="text-sm font-semibold text-primary">{a.cost}</span>
                </div>
                <p className="text-sm">{a.best}</p>
                <p className="text-sm text-muted-foreground">{a.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Fishing licenses</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Most states: senior discount or FREE for 65+. Check your state\'s fish & wildlife site.</li>
              <li>Lifetime senior license available in many states ($30-150 once).</li>
              <li>Fish Brain has license info per state.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Identifying fish</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><strong>Picture Fish</strong> — point camera at fish; get ID.</li>
              <li><strong>iNaturalist Seek</strong> — free, identifies fish + everything else.</li>
              <li><strong>FishVerify</strong> — Florida-specific, good for grouper/snapper.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Safety apps too</h3>
            <p className="text-sm text-muted-foreground">USCG\'s "USCG Mobile" app — float plan, distress button. Check it BEFORE going out. Wearing PFD + sharing float plan with someone on shore = simple way to come back safely.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
