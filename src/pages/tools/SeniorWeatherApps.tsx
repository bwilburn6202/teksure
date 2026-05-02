import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { CloudSun } from 'lucide-react';

export default function SeniorWeatherApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Weather Apps for Seniors — Senior Guide" description="Pick a reliable weather app." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <CloudSun className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Weather Apps</h1>
          <p className="text-lg text-muted-foreground">Reliable forecasts on your phone.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Apple Weather</h2><p>Built into iPhone. Free. Now uses Dark Sky's accurate hourly data.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Google Weather</h2><p>Built into Pixel and most Androids. Powered by Weather.com.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. NOAA Weather</h2><p>Free official US National Weather Service app. Best severe weather alerts.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. AccuWeather</h2><p>Hour-by-hour. Real Feel temperature accounts for humidity and wind.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Set warnings</h2><p>Turn on tornado, thunderstorm, and flood alerts. Phone alarms automatically.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Hurricane tracking</h2><p>Hurricane Tracker app shows projected paths during hurricane season.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Skip free weather apps with lots of ads — they often sell location data. Stick with official apps.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
