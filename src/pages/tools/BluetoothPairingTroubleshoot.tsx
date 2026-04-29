import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Wifi } from 'lucide-react';

export default function BluetoothPairingTroubleshoot() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Bluetooth Won't Connect — Troubleshoot AirPods, Mouse | TekSure" description="AirPods won&apos;t pair? Bluetooth speaker not connecting? Plain-English fixes for the 8 most common Bluetooth problems." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Wifi className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Bluetooth Won\'t Connect</h1>
          <p className="text-lg text-muted-foreground">8 fixes that solve 95% of pairing problems.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Quick fixes (try in order)</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li><strong>Bluetooth on?</strong> — Settings → Bluetooth → ON.</li>
              <li><strong>Restart Bluetooth</strong> — toggle OFF, wait 5 seconds, toggle ON.</li>
              <li><strong>Restart the device</strong> (the phone, computer, etc.).</li>
              <li><strong>Restart the Bluetooth accessory</strong> — turn off, wait, turn on. Or hold reset button on AirPods case (5 seconds till light flashes).</li>
              <li><strong>"Forget" the device</strong> — Settings → Bluetooth → tap (i) next to device → "Forget". Then re-pair from scratch.</li>
              <li><strong>Move closer</strong> — Bluetooth range is 30 feet. Walls cut range.</li>
              <li><strong>Check battery</strong> on the accessory. AirPods need a charged case.</li>
              <li><strong>Update software</strong> — Settings → General → Software Update.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">AirPods specifically</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Open AirPods case lid near iPhone. Wait — pop-up should appear.</li>
              <li>If no pop-up: Settings → Bluetooth → "AirPods" listed but disconnected. Tap to connect.</li>
              <li>If not listed: hold the button on back of case for 15 seconds until light flashes WHITE (not orange).</li>
              <li>Pop-up should reappear. Tap "Connect".</li>
              <li>If fully bricked: forget device, reset case (back button 15+ seconds), then re-pair.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Bluetooth speaker stuck</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Unpair from old phone (or that phone is interfering).</li>
              <li>Hold speaker\'s Bluetooth button for 5-10 seconds → "discoverable" mode.</li>
              <li>Look in your phone\'s Bluetooth list — speaker should appear with name.</li>
              <li>Some speakers can only pair to ONE device at a time — switch back via button.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Bluetooth mouse / keyboard</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Replace batteries.</li>
              <li>Reset device (most have a tiny pinhole reset).</li>
              <li>Computer: Settings → Bluetooth → Forget device → Add new.</li>
              <li>If still not working: USB receiver may have failed. Some logitech mice come with a tiny "Unifying receiver" USB dongle.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Last resort</h3>
            <p className="text-sm text-muted-foreground">If NOTHING works after 30 minutes — bring the phone or device to Apple Genius Bar / Best Buy Geek Squad. Free 15-minute appointment usually solves what you can\'t.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
