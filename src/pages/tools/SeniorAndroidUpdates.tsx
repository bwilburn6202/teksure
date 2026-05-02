import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { RefreshCw } from 'lucide-react';

export default function SeniorAndroidUpdates() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Android Updates — Senior Guide" description="Keep your Android phone safely updated." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <RefreshCw className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Android Updates</h1>
          <p className="text-lg text-muted-foreground">Stay current and protected.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Check for updates</h2><p>Settings, System, System update. Tap Check for update.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Why bother</h2><p>Updates fix security flaws and bugs. Skipping leaves your phone open to scammers.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Plug it in</h2><p>Updates need at least 30% battery. Easier to plug in and let it run.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Wi-Fi only</h2><p>Updates can be 1-3 GB. Use home Wi-Fi to avoid using cellular data.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Restart after</h2><p>Phone restarts automatically. May take 5-10 minutes the first time.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Auto-update apps</h2><p>Open Play Store. Tap your photo. Settings. Auto-update apps over Wi-Fi only.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Pixel phones get 7 years of updates. Samsung most flagships get 5-7 years too.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
