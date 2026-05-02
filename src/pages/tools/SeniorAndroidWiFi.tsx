import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Wifi } from 'lucide-react';

export default function SeniorAndroidWiFi() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Android Wi-Fi — Senior Guide" description="Connect Android to home and travel Wi-Fi." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Wifi className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Android Wi-Fi</h1>
          <p className="text-lg text-muted-foreground">Get online and save data.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Connect at home</h2><p>Settings, Network & internet, Wi-Fi. Tap your network. Type the password.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Forget a network</h2><p>Tap a saved network, tap Forget. Useful when a router password changes.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Public Wi-Fi caution</h2><p>Browsing is fine. Skip banking and shopping on coffee-shop Wi-Fi.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Mobile hotspot</h2><p>Share phone's cellular with a tablet or laptop. Settings, Network, Hotspot & tethering.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Slow Wi-Fi fix</h2><p>Restart the router (unplug for 30 seconds). Toggle phone Wi-Fi off and back on.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Share a Wi-Fi QR</h2><p>Tap your network, tap Share. A QR code lets a guest connect without typing the password.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>The Wi-Fi icon at the top shows signal strength. More bars means faster speed.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
