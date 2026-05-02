import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Battery } from 'lucide-react';

export default function SeniorIPadBattery() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="iPad Battery Care — Senior Guide" description="Make your iPad battery last longer." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Battery className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">iPad Battery Care</h1>
          <p className="text-lg text-muted-foreground">Last longer between charges.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Lower screen brightness</h2><p>Settings, Display & Brightness. Drag the slider. Bright screens use the most battery.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Auto-Lock</h2><p>Settings, Display & Brightness, Auto-Lock. Set to 2 minutes so screen sleeps faster.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. See what is using power</h2><p>Settings, Battery. Find the app draining the most power. Close it or use it less.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Turn off Background App Refresh</h2><p>Settings, General, Background App Refresh. Off saves a lot of power for apps you rarely open.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Don't fully drain</h2><p>Charge before it hits 20%. Modern batteries last longest if kept between 20% and 80%.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Keep it cool</h2><p>Avoid leaving iPad in a hot car. Heat damages the battery faster than anything else.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>After 2-3 years, batteries hold less charge. Apple offers paid battery replacements at any store.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
