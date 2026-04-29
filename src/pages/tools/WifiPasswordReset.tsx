import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Wifi } from 'lucide-react';

export default function WifiPasswordReset() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Reset WiFi Password — Plain English Guide | TekSure" description="Forgot wifi password? Plain-English steps to find or change your home WiFi password." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Wifi className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Reset WiFi Password</h1>
          <p className="text-lg text-muted-foreground">Find or change. 5 minutes.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Find current password</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Look on router itself — sticker on bottom or back. Default password printed.</li>
              <li>Or: ask any device already connected.</li>
              <li>iPhone: Settings → Wi-Fi → tap (i) next to network name → Password. Tap to copy.</li>
              <li>Mac: Keychain Access → search wifi name → check "Show password".</li>
              <li>Windows: Settings → Network → Status → Wireless Properties → Security → Show characters.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Change password (more secure)</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Look at router — note the IP address (often 192.168.1.1 or 10.0.0.1).</li>
              <li>Open browser → type IP address.</li>
              <li>Login with admin password (often on same sticker).</li>
              <li>Find Wireless / WiFi settings.</li>
              <li>Change password to NEW strong password.</li>
              <li>Save changes.</li>
              <li>Reconnect ALL devices with new password.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Use carrier/ISP app</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Comcast Xfinity app</strong> — change password from phone.</li>
              <li><strong>Verizon FiOS app</strong>.</li>
              <li><strong>AT&amp;T Smart Home Manager</strong>.</li>
              <li><strong>Spectrum app</strong>.</li>
              <li>Easier than logging into router directly.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Factory reset (last resort)</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Find tiny "Reset" hole on back of router.</li>
              <li>Push paperclip in for 30 seconds.</li>
              <li>Router restarts.</li>
              <li>Reverts to default settings (default password on sticker).</li>
              <li>Have to reconnect all devices + reset preferences.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Save it</h3>
            <p className="text-sm text-muted-foreground">After reset — write password on a card, tape inside kitchen cabinet OR save in password manager. Family + visitors will ask. Print + post in guest area.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
