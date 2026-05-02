import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { CloudLightning } from 'lucide-react';

export default function SeniorWeatherAlerts() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Weather Alerts — Senior Guide" description="Get warnings about severe weather." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <CloudLightning className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Weather Alerts</h1>
          <p className="text-lg text-muted-foreground">Stay ahead of storms.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Wireless Emergency Alerts</h2><p>Built into every phone. National Weather Service sends tornado, flood warnings.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. NOAA Weather Radio</h2><p>Free official app. Most reliable for severe weather.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Local TV apps</h2><p>WBZ, KARE, etc — your local news has detailed radar in their free app.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Set custom alerts</h2><p>Apple or Google Weather app — alerts for specific cities (vacation home, kid's town).</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Hurricane tracking</h2><p>Apple Weather and Hurricane Tracker show paths during storm season.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Heat alerts</h2><p>Heat advisory means stay indoors with AC. Important for older adults.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Buy a backup NOAA radio for power outages. About $30 at hardware stores.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
