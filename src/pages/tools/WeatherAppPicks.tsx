import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Cloud } from 'lucide-react';

const APPS = [
  { name: 'Apple Weather (built-in)', cost: 'FREE', best: 'iPhone default. Hourly + 10-day. Owned by Apple (was Dark Sky). Solid for most.', good: 'Best built-in.' },
  { name: 'Google Weather', cost: 'FREE', best: 'Built into Pixel/Android. Hourly. Pollen, AQI.', good: 'Best Android default.' },
  { name: 'Weather Underground', cost: 'FREE / $4/mo Premium', best: 'Hyperlocal — uses 250,000 personal weather stations. Most accurate for your zip.', good: 'Best hyperlocal.' },
  { name: 'AccuWeather', cost: 'FREE / $4/mo', best: 'Long-time leader. "MinuteCast" precipitation prediction.', good: 'Best minute-by-minute.' },
  { name: 'Carrot Weather', cost: '$5/yr / $20/yr Premium', best: 'Funny + accurate. Combines multiple data sources. Best UI.', good: 'Best premium.' },
  { name: 'Windy', cost: 'FREE / $25/yr', best: 'Best for storms, wind, marine forecasts. Map-based.', good: 'Best for storms.' },
  { name: 'NOAA Weather Radio (free apps)', cost: 'FREE', best: 'Official US National Weather Service alerts. RadarScope, Weather Radio Plus.', good: 'Best official source.' },
];

export default function WeatherAppPicks() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Weather App Picks | TekSure" description="Apple Weather, Weather Underground, AccuWeather, Carrot. Plain-English picks for the most accurate weather apps." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Cloud className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Weather App Picks</h1>
          <p className="text-lg text-muted-foreground">Best forecasts for your zip code.</p>
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
            <h2 className="font-bold text-xl mb-3">Sign up for emergency alerts</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>iPhone — Settings → Notifications → scroll to Government Alerts → ON.</li>
              <li>Android — Settings → Notifications → Wireless emergency alerts → ON.</li>
              <li>NOAA Weather Radio app sends free severe-weather alerts.</li>
              <li>Sign up for "[your county] alerts" texts — search county name.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Avoid sketchy weather apps</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Many free weather apps sell your location data.</li>
              <li>Stick with Apple Weather, Google Weather, or NOAA-powered apps.</li>
              <li>Check app reviews for hidden subscriptions.</li>
              <li>"Weather Forever Free!!!" — usually has hidden subscription.</li>
              <li>Prefer apps that don&apos;t ask for "Always" location access.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Air quality</h3>
            <p className="text-sm text-muted-foreground">During wildfire season — install <strong>AirVisual</strong> or use your weather app&apos;s AQI feature. Check before going outside. Above 150 AQI — N95 mask + stay inside. Especially important for seniors with heart/lung conditions.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
