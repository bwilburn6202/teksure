import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { RefreshCw } from 'lucide-react';

export default function SeniorIPadUpdates() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="iPad Updates — Senior Guide" description="Keep your iPad up to date safely." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <RefreshCw className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">iPad Updates</h1>
          <p className="text-lg text-muted-foreground">Stay current and safer.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Check for updates</h2><p>Settings, General, Software Update. iPad checks for the newest version.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Why update</h2><p>Updates fix security holes scammers use. Keeps your data safer.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Plug in first</h2><p>Updates need at least 50% battery, or plug into a charger.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Wi-Fi only</h2><p>Updates are big — typically 2-5 GB. Only download on home Wi-Fi.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Automatic updates</h2><p>Turn on Automatic Updates so iPad updates overnight while you sleep.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. After the update</h2><p>Some apps may need to update too. Open the App Store and tap your photo to check.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Apple supports most iPads for 5-7 years with free updates. Check Apple's compatibility list anytime.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
