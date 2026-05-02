import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Droplet } from 'lucide-react';

export default function SeniorWaterUsage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Water Usage Tracking — Senior Guide" description="Save water and money at home." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Droplet className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Water Usage</h1>
          <p className="text-lg text-muted-foreground">Track and save water.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Smart water meter</h2><p>$50-200. App alerts to leaks. Saves much more in lifetime.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Utility apps</h2><p>Most water companies have apps with usage charts. See spikes meaning leaks.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Phyn or Flo</h2><p>$300 leak detectors. Auto-shutoff if pipe bursts. Insurance discount.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Drought rebates</h2><p>Some cities pay you to remove lawn or install efficient toilets. Check water utility site.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Sprinkler timers</h2><p>Rachio Wi-Fi controller adjusts watering by weather. Saves 30-50%.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Toilet leak test</h2><p>Drop dye in tank. Wait 10 min. If color in bowl, replace flapper.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>A running toilet wastes 200+ gallons a day. Catch it early with apps or yearly checks.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
