import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Bluetooth } from 'lucide-react';

export default function SeniorBluetoothBasics() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Bluetooth Basics — Senior Guide" description="Pair Bluetooth devices to your phone and computer." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Bluetooth className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Bluetooth Basics</h1>
          <p className="text-lg text-muted-foreground">Connect speakers, headphones, and more.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. What it is</h2><p>Wireless connection over short distances — about 30 feet.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Turn it on</h2><p>Settings, Bluetooth. Toggle on. Find devices nearby.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Pair</h2><p>Set the speaker or headphones to pair mode. Tap them in your Bluetooth list.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. PIN code</h2><p>Some devices need 0000 or 1234. Most work without one.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Forget a device</h2><p>Tap a paired device. Tap Forget. Useful when borrowing or selling.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. One device at a time</h2><p>Most speakers connect to one phone at a time. Disconnect first to switch.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Bluetooth uses a tiny bit of battery. Turn it off if you don't use any wireless devices.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
