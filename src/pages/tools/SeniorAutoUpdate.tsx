import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { RefreshCw } from 'lucide-react';

export default function SeniorAutoUpdate() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Auto Update Apps — Senior Guide" description="Why and how to enable automatic app updates." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <RefreshCw className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Automatic App Updates</h1>
          <p className="text-lg text-muted-foreground">Stay safe automatically.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Why update</h2><p>Updates fix security holes that scammers use. Skipping leaves apps vulnerable.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. iPhone</h2><p>Settings, App Store, App Updates. Toggle on. Free updates over Wi-Fi.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Android</h2><p>Play Store, your photo, Settings, Network preferences, Auto-update.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Windows</h2><p>Settings, Update & Security. Schedule active hours so updates don't restart while you work.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Mac</h2><p>System Settings, General, Software Update, Automatic Updates on.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Wi-Fi only</h2><p>Updates can be large. Turn on Wi-Fi only to avoid cellular data charges.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Plug in to charger overnight. Phone updates while you sleep.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
