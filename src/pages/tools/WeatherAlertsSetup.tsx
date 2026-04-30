import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { PageBreadcrumb } from '@/components/PageBreadcrumb';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CloudRain, ChevronRight, ExternalLink, AlertTriangle } from 'lucide-react';

type Phone = 'iphone' | 'android';

interface Step {
  title: string;
  detail: string;
}

const SETUP: Record<Phone, { government: Step[]; weatherApp: Step[] }> = {
  iphone: {
    government: [
      { title: 'Settings → Notifications → Government Alerts', detail: 'Settings → Notifications → scroll to the bottom → Government Alerts.' },
      { title: 'Turn ON: Public Safety Alerts', detail: 'Statewide emergencies — gas leaks, train derailments.' },
      { title: 'Turn ON: Emergency Alerts', detail: 'AMBER alerts and tornado warnings. Loud sound by default — leave it on.' },
      { title: 'Turn ON: Test Alerts', detail: 'Optional. The first Wednesday of each month is a quiet test.' },
    ],
    weatherApp: [
      { title: 'Open Weather (the built-in iPhone app)', detail: 'Should already be installed. White cloud icon.' },
      { title: 'Tap the menu (three lines, top-left) → tap your location', detail: 'Make sure your home is set as the primary location.' },
      { title: 'Tap the bell icon to enable severe weather alerts', detail: 'Now Apple Weather pushes you a notification when severe weather is forecast for that location.' },
      { title: 'Add other locations — daughter\'s house, vacation cabin', detail: 'Tap "+" → search city. The app sends alerts for any of them.' },
    ],
  },
  android: {
    government: [
      { title: 'Settings → Notifications → Wireless emergency alerts', detail: 'Settings → Notifications → "Wireless emergency alerts" or "Emergency alerts".' },
      { title: 'Turn ON: Tornado / Flash Flood / Hurricane', detail: 'Pick the categories you want. Most people leave all on.' },
      { title: 'Turn ON: AMBER alerts', detail: 'For missing children. Loud by default.' },
      { title: 'Test message preview', detail: 'Most Android phones run a test the first Wednesday of each month — usually quiet, no audio.' },
    ],
    weatherApp: [
      { title: 'Open Google Weather', detail: 'On Pixel: home screen → swipe down → "Weather". Or install the free "Weather Channel" app.' },
      { title: 'Set up severe-weather alerts', detail: 'In the weather app: Settings → Severe Weather Alerts → toggle ON.' },
      { title: 'Allow location access', detail: 'When asked, allow precise location. The app uses it to alert you for the right area.' },
    ],
  },
};

const APPS = [
  {
    name: 'NOAA Weather Radio (free, official)',
    what: 'Federal real-time radio updates. Works through a small handheld weather radio (about $30 at hardware stores) — important when cell service is down.',
    link: 'https://www.weather.gov/nwr/',
    notes: ['Battery-powered. Stays on during power outages.', 'Required equipment for tornado- and hurricane-prone areas.'],
  },
  {
    name: 'FEMA app',
    what: 'Federal alerts plus shelter locator and disaster resources. Free.',
    link: 'https://www.fema.gov/about/news-multimedia/app',
    notes: ['Built-in checklist for hurricane, fire, earthquake prep.', 'Shows nearby Red Cross shelters during emergencies.'],
  },
  {
    name: 'Watch Duty (wildfires)',
    what: 'Free non-profit app with wildfire alerts curated by retired firefighters and dispatchers. Best in CA, OR, WA, ID, MT, NV, AZ, CO.',
    link: 'https://www.watchduty.org/',
    notes: ['Only for wildfires.', 'Real human dispatchers verify each alert before sending. Faster than government channels.'],
  },
];

export default function WeatherAlertsSetup() {
  const [phone, setPhone] = useState<Phone>('iphone');
  const setup = SETUP[phone];

  return (
    <>
      <SEOHead
        title="Weather Alerts Setup"
        description="Get tornado, hurricane, and flash flood alerts on your phone. Government emergency alerts, weather app alerts, and the apps real first responders use."
        path="/tools/weather-alerts-setup"
      />
      <Navbar />

      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-br from-sky-50 via-background to-blue-50 dark:from-sky-950/20 dark:to-blue-950/20 border-b border-border py-10 px-4">
          <div className="container max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-3">
              <div className="p-3 bg-sky-500/10 rounded-full">
                <CloudRain className="h-8 w-8 text-sky-600" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Weather Alerts Setup</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Set it up once. Tornado warnings, flash floods, and hurricane updates land on your phone automatically.
            </p>
          </div>
        </section>

        <div className="container max-w-3xl mx-auto px-4 py-8">
          <PageBreadcrumb segments={[{ label: 'Tools', href: '/tools' }, { label: 'Weather Alerts Setup' }]} />

          <Card className="border-border shadow-sm mb-6">
            <CardContent className="p-5">
              <p className="text-sm font-semibold mb-3">Pick your phone</p>
              <div className="flex gap-2">
                {(['iphone', 'android'] as Phone[]).map(p => (
                  <Button key={p} variant={phone === p ? 'default' : 'outline'} onClick={() => setPhone(p)}>
                    {p === 'iphone' ? 'iPhone' : 'Android'}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Step 1 — Government emergency alerts</p>
          <Card className="border-border mb-6">
            <CardContent className="p-5">
              <ol className="space-y-3">
                {setup.government.map((s, i) => (
                  <li key={i} className="flex gap-3 text-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary font-semibold text-xs flex items-center justify-center mt-0.5">{i + 1}</span>
                    <div>
                      <p className="font-semibold">{s.title}</p>
                      <p className="text-muted-foreground mt-0.5">{s.detail}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </CardContent>
          </Card>

          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Step 2 — Weather app alerts</p>
          <Card className="border-border mb-6">
            <CardContent className="p-5">
              <ol className="space-y-3">
                {setup.weatherApp.map((s, i) => (
                  <li key={i} className="flex gap-3 text-sm">
                    <span className="shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary font-semibold text-xs flex items-center justify-center mt-0.5">{i + 1}</span>
                    <div>
                      <p className="font-semibold">{s.title}</p>
                      <p className="text-muted-foreground mt-0.5">{s.detail}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </CardContent>
          </Card>

          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Step 3 — Specialized apps and radios</p>
          <div className="space-y-3 mb-6">
            {APPS.map(a => (
              <Card key={a.name} className="border-border">
                <CardContent className="p-5">
                  <p className="font-semibold mb-1">{a.name}</p>
                  <p className="text-sm text-muted-foreground mb-2">{a.what}</p>
                  <ul className="space-y-1 mb-3">
                    {a.notes.map((n, i) => (
                      <li key={i} className="flex gap-2 text-xs text-muted-foreground"><span className="text-primary">•</span><span>{n}</span></li>
                    ))}
                  </ul>
                  <a href={a.link} target="_blank" rel="noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-primary hover:underline">
                    Visit <ExternalLink className="h-3 w-3" />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="border-amber-300 bg-amber-50 dark:bg-amber-950/20 mb-6">
            <CardContent className="p-5 flex gap-3">
              <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
              <div className="text-sm">
                <p className="font-semibold mb-1">If you live in a tornado, hurricane, or wildfire area</p>
                <p className="text-muted-foreground">
                  A $30 hand-crank weather radio (Midland WR-120 or similar) is the smartest spend in tech you will make. Cell towers fail in disasters. Radio frequencies do not.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border bg-muted/30">
            <CardContent className="p-5">
              <p className="text-sm font-semibold mb-2">A note on alert fatigue</p>
              <p className="text-xs text-muted-foreground">
                Some areas get a LOT of weather alerts. If your phone is buzzing daily, you can mute "Hourly Forecasts" in Apple Weather (Notifications → Weather → tone down) without losing the severe ones. The severe alerts have their own special tone — keep those loud.
              </p>
            </CardContent>
          </Card>

          <div className="mt-10 pt-8 border-t border-border">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Related</p>
            <div className="grid sm:grid-cols-3 gap-3">
              <Link to="/tools/fall-detection-setup" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Fall Detection Setup</p>
                <p className="text-xs text-muted-foreground mt-0.5">For other emergencies.</p>
              </Link>
              <Link to="/tools/travel-tech-checklist" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Travel Tech Checklist</p>
                <p className="text-xs text-muted-foreground mt-0.5">For weather alerts at the destination.</p>
              </Link>
              <Link to="/emergency-help" className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all">
                <p className="font-medium text-sm">Emergency Help</p>
                <p className="text-xs text-muted-foreground mt-0.5">When you need someone right now.</p>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
