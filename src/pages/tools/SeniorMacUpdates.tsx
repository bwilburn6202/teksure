import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { RefreshCw } from 'lucide-react';

export default function SeniorMacUpdates() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Mac Updates — Senior Guide" description="Keep your Mac up to date and safe." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <RefreshCw className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Mac Updates</h1>
          <p className="text-lg text-muted-foreground">Stay current and protected.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Check for updates</h2><p>System Settings, General, Software Update. Click Check.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Why update</h2><p>Updates fix security holes and bugs. Skipping leaves Mac open to scammers.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Plug in</h2><p>Plug into power. Update can take 30-60 minutes. Don't unplug.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Auto-update apps</h2><p>App Store, Settings. Check Automatic Updates so apps stay current.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Save first</h2><p>Save open documents before updating. Macs restart automatically during install.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Wi-Fi update</h2><p>Updates can be 12-15 GB. Use home Wi-Fi, not cellular hotspot.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Apple supports most Macs for 7+ years with free updates. Check Apple's compatibility list.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
