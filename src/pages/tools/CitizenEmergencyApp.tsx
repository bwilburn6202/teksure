import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { AlertCircle } from 'lucide-react';

const APPS = [
  { name: 'Citizen', cost: 'FREE; $20/mo Premium', best: 'Real-time crime and emergency alerts in your area. Live video from incidents. Used in 60+ US cities.', good: 'Best for big cities.' },
  { name: 'Nextdoor', cost: 'FREE', best: 'Hyperlocal — neighbors post about suspicious activity, missing pets, lost items.', good: 'Best for suburban communities.' },
  { name: 'Watch Duty', cost: 'FREE', best: 'Wildfire-specific alerts. Volunteer fire-watchers operate it. Critical in CA/CO/OR/AZ.', good: 'Best Western US wildfire app.' },
  { name: 'FEMA app', cost: 'FREE', best: 'Federal disaster alerts, shelter finder, post-disaster aid info.', good: 'Should be installed.' },
  { name: 'Red Cross Emergency app', cost: 'FREE', best: 'Real-time alerts for 35+ types of emergencies + first-aid info.', good: 'Best for general preparedness.' },
  { name: 'NOAA Weather Radio app', cost: 'FREE', best: 'Severe weather alerts directly from NWS.', good: 'For tornado/hurricane country.' },
  { name: 'Local police app', cost: 'FREE', best: 'Many police departments have apps for tip submission, neighborhood alerts. Search "[city] police".', good: 'Direct line to local response.' },
];

export default function CitizenEmergencyApp() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Citizen App & Local Emergency Apps | TekSure" description="Stay aware of crime, fires, weather, and emergencies in your area. Plain-English picks for the best free emergency awareness apps." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <AlertCircle className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Local Emergency Apps</h1>
          <p className="text-lg text-muted-foreground">Stay aware of what\'s happening near you.</p>
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
            <h2 className="font-bold text-xl mb-3">Tune notifications carefully</h2>
            <p className="text-sm">Citizen and Nextdoor will SPAM you with non-urgent alerts. After install, go into settings and turn off:</p>
            <ul className="list-disc pl-5 space-y-1 text-sm mt-2">
              <li>"Routine" alerts you don\'t care about.</li>
              <li>Anything beyond your immediate neighborhood.</li>
              <li>Daily digests if they get spammy.</li>
            </ul>
            <p className="text-sm mt-2">Keep ON: severe weather, your zip code\'s fire/police major events, missing-person alerts.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Built-in alerts (already on your phone)</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><strong>Wireless Emergency Alerts (WEA)</strong> — federal AMBER, weather, presidential alerts. Already enabled.</li>
              <li><strong>Apple Crash Detection</strong> (iPhone 14+ + Watch Series 8+) — auto-911 if car accident detected.</li>
              <li><strong>Apple SOS via Satellite</strong> — for backcountry (no cell signal).</li>
              <li><strong>Google Personal Safety</strong> on Pixel — similar features.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Don\'t over-do it</h3>
            <p className="text-sm text-muted-foreground">Constant emergency alerts can spike anxiety. Pick 2-3 apps that REALLY matter for your area (Watch Duty if wildfires, NOAA Weather if tornadoes, FEMA for federal). Skip the rest. Awareness should reduce stress, not add to it.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
