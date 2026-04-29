import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Wifi } from 'lucide-react';

export default function WifiPasswordSharing() {
  const [tab, setTab] = useState<'iphone' | 'android'>('iphone');

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Wi-Fi Password Sharing — Easy Way | TekSure" description="Stop reading 26-character passwords aloud. Plain-English steps to share Wi-Fi via tap, QR code, or AirDrop." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Wifi className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Wi-Fi Password Sharing</h1>
          <p className="text-lg text-muted-foreground">Don\'t read out 26 characters. Share by tap.</p>
        </div>

        <div className="flex gap-2 mb-4">
          <button onClick={() => setTab('iphone')} className={`flex-1 p-3 rounded-lg border-2 ${tab === 'iphone' ? 'border-primary bg-primary/10' : 'border-muted'}`}>📱 iPhone</button>
          <button onClick={() => setTab('android')} className={`flex-1 p-3 rounded-lg border-2 ${tab === 'android' ? 'border-primary bg-primary/10' : 'border-muted'}`}>🤖 Android</button>
        </div>

        {tab === 'iphone' && (
          <Card className="mb-4">
            <CardContent className="pt-6">
              <h3 className="font-bold text-lg mb-3">iPhone-to-iPhone (instant)</h3>
              <ol className="list-decimal pl-5 space-y-2 text-sm">
                <li>YOUR phone is connected to Wi-Fi. THEIR phone is unlocked nearby.</li>
                <li>They tap the network name on their phone.</li>
                <li>YOUR phone shows a popup: "Share Your Wi-Fi". Tap "Share Password".</li>
                <li>Their phone connects automatically. No typing.</li>
                <li>BOTH phones must have each other in Contacts.</li>
              </ol>
              <h3 className="font-bold text-lg mt-4 mb-3">QR code for non-iPhone visitors</h3>
              <ol className="list-decimal pl-5 space-y-1 text-sm">
                <li>Settings → Wi-Fi → tap your network.</li>
                <li>Tap "QR Code" (newer iOS).</li>
                <li>Visitor scans with their phone camera. Connects.</li>
              </ol>
            </CardContent>
          </Card>
        )}

        {tab === 'android' && (
          <Card className="mb-4">
            <CardContent className="pt-6">
              <h3 className="font-bold text-lg mb-3">Android — QR code share</h3>
              <ol className="list-decimal pl-5 space-y-2 text-sm">
                <li>Settings → Network → Wi-Fi → tap your connected network.</li>
                <li>Tap "Share" or "QR code".</li>
                <li>QR code appears.</li>
                <li>Visitor scans with their camera. Connects.</li>
              </ol>
              <p className="text-sm mt-3">Works iPhone → Android too via QR.</p>
            </CardContent>
          </Card>
        )}

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Print a "guest Wi-Fi card"</h2>
            <p className="text-sm">For frequent visitors:</p>
            <ol className="list-decimal pl-5 space-y-1 text-sm mt-2">
              <li>Set up a "Guest Network" in your router (free, takes 5 min).</li>
              <li>Generate a QR code at <strong>qifi.org</strong> or <strong>qrcode-monkey.com</strong> with your guest network name + password.</li>
              <li>Print it. Frame it. Put on guest room nightstand or kitchen counter.</li>
              <li>Anyone scans QR → connects to guest network. Your main computers stay private.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Quick tip — secure your password</h3>
            <p className="text-sm text-muted-foreground">When grandkids ask for Wi-Fi, give them GUEST network — not main. Your computers, smart bulbs, and printer stay invisible to them. (See our Childproof for Visits tool.)</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
