import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Home } from 'lucide-react';

export default function SeniorAppleHomeSetup() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Apple Home Setup — Senior Guide" description="Set up the Apple Home app." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Home className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Apple Home Setup</h1>
          <p className="text-lg text-muted-foreground">All smart devices in one app.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Apple Home</h2><p>Built into iPhone, iPad, Mac. Free. Works with HomeKit accessories.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Add accessories</h2><p>Tap plus icon. Scan QR code on device. Follow prompts.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Rooms</h2><p>Group devices by room. Living Room, Kitchen, Bedroom. Easier to control.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Scenes</h2><p>Good Morning turns on lights, opens shades. One tap.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Automations</h2><p>Lights on at sunset. Garage close at 10 PM. Hands-off.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Voice control</h2><p>Hey Siri, turn on bedroom lights. Works through HomePod, iPhone, Apple Watch.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Need a HomePod or Apple TV at home for remote control. Otherwise local only.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
