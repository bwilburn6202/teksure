import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Wifi } from 'lucide-react';

export default function SeniorIPadWiFi() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="iPad Wi-Fi — Senior Guide" description="Connect your iPad to home and travel Wi-Fi." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Wifi className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">iPad Wi-Fi</h1>
          <p className="text-lg text-muted-foreground">Get online at home and away.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Connect at home</h2><p>Settings, Wi-Fi. Tap your home network. Enter the password printed on your router.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Forget a network</h2><p>Tap the i next to a saved network. Tap Forget. Useful when a password changes.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Share Wi-Fi with iPhone</h2><p>Hold an iPhone close to the iPad. The phone will offer to share its password automatically.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Public Wi-Fi caution</h2><p>Free Wi-Fi at coffee shops works for browsing. Skip banking and shopping on these networks.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Personal Hotspot</h2><p>If your iPhone has cellular, share its internet with the iPad in a pinch.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Slow Wi-Fi fix</h2><p>Restart the router (unplug 30 seconds). Then turn iPad Wi-Fi off and back on.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>The Wi-Fi icon in the upper corner shows signal strength. More bars means faster speed.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
