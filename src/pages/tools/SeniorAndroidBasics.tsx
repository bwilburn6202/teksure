import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Smartphone } from 'lucide-react';

export default function SeniorAndroidBasics() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Android Basics — Senior Guide" description="Get started with an Android phone." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Smartphone className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Android Basics</h1>
          <p className="text-lg text-muted-foreground">First steps with your new Android.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. The three buttons</h2><p>Back arrow, home circle, recent apps square. The bottom row of every screen.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Notification shade</h2><p>Swipe down from the top to see new messages, alerts, and quick toggles.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. App drawer</h2><p>Swipe up from the bottom to see every installed app sorted alphabetically.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Settings</h2><p>The gear icon. Adjust volume, screen brightness, Wi-Fi, and Bluetooth from here.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Google Account</h2><p>Sign in once and your contacts, photos, and email all sync. Same account works on tablets.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Restart it</h2><p>Hold the side button and a volume key. Tap Restart. Fixes most odd behavior.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Samsung, Pixel, Motorola, OnePlus all run Android. Layout differs slightly but the basics are the same.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
