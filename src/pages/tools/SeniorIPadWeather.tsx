import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { CloudSun } from 'lucide-react';

export default function SeniorIPadWeather() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Weather on iPad — Senior Guide" description="Check the weather and forecasts on iPad." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <CloudSun className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Weather on iPad</h1>
          <p className="text-lg text-muted-foreground">Plan your day with confidence.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Open Weather</h2><p>Tap the blue cloud-and-sun icon. Allow location to see your current conditions.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Hourly forecast</h2><p>Scroll down to see hour-by-hour. Plan errands when rain is least likely.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. 10-day forecast</h2><p>Below hourly, see the next 10 days. Helpful for planning a trip or a doctor visit.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Add another city</h2><p>Tap the menu icon. Tap the plus. Type a city to track grandkids' weather too.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Severe alerts</h2><p>Turn on notifications in Settings. Get warnings for storms and heat advisories.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Air quality</h2><p>Scroll past the map. The Air Quality Index helps if you have asthma or allergies.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Apple Weather uses data from the National Weather Service and other trusted sources.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
