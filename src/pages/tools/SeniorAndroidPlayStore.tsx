import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Download } from 'lucide-react';

export default function SeniorAndroidPlayStore() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Google Play Store — Senior Guide" description="Find and install Android apps safely." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Download className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Google Play Store</h1>
          <p className="text-lg text-muted-foreground">Where Android apps come from.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Open Play Store</h2><p>Tap the colorful triangle icon. Use the search bar at the top.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Read reviews</h2><p>4-star apps with thousands of reviews are usually safe. Skip apps with under 100 reviews.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Install</h2><p>Tap Install. The app downloads. Open it from the app drawer when ready.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Watch permissions</h2><p>If a flashlight app asks for contacts, that is a red flag. Decline odd permission requests.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Updates</h2><p>Tap your photo, Manage apps. Tap Update All to keep apps secure.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Uninstall</h2><p>Press and hold an app icon. Tap Uninstall. Frees space and removes clutter.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Only install from Play Store. Apps from text-message links or websites can be unsafe.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
