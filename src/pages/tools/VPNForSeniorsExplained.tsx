import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Lock } from 'lucide-react';

export default function VPNForSeniorsExplained() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="VPN for Seniors Explained | TekSure" description="What VPN does + when seniors need one. Plain-English VPN explanation for senior users." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Lock className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">VPN Explained</h1>
          <p className="text-lg text-muted-foreground">What it does + when you need one.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What VPN does</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Encrypts your internet traffic.</li>
              <li>Hides your IP address (location).</li>
              <li>Protects on public WiFi.</li>
              <li>Bypasses location blocks (some streaming).</li>
              <li>Hides browsing from internet provider.</li>
              <li>Doesn&apos;t make you anonymous online.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">When seniors need one</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Using public WiFi (hotels, cafes, airports).</li>
              <li>Doing banking on hotel WiFi.</li>
              <li>Traveling abroad — access US streaming.</li>
              <li>If concerned about ISP tracking.</li>
              <li>Most home internet is fine without VPN.</li>
              <li>Don&apos;t need it for typical home browsing.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best VPN services</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>NordVPN — $5/month, most popular.</li>
              <li>ExpressVPN — $8/month, premium.</li>
              <li>Surfshark — $2.50/month, budget.</li>
              <li>Proton VPN — free tier available.</li>
              <li>Mullvad — $5/month, privacy-focused.</li>
              <li>Avoid free VPNs — usually compromised.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Setup is easy</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Subscribe to one — get email + password.</li>
              <li>Download app on phone, computer, tablet.</li>
              <li>Sign in.</li>
              <li>Tap &quot;Connect&quot; or big button.</li>
              <li>Choose location — US for most uses.</li>
              <li>Connected in seconds.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Travel use case</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>VPN at hotel — protects banking + email.</li>
              <li>VPN abroad — watch Netflix US library.</li>
              <li>VPN — access AmazonPrime + Hulu while traveling.</li>
              <li>Some streaming services block VPN.</li>
              <li>Worth it for international trips.</li>
              <li>Sometimes too — banking apps require US IP.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Common myths</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>VPN doesn&apos;t protect from viruses (need antivirus).</li>
              <li>VPN doesn&apos;t make you completely anonymous.</li>
              <li>VPN doesn&apos;t prevent phishing scams.</li>
              <li>Won&apos;t hide from FBI etc.</li>
              <li>Just one tool, not panacea.</li>
              <li>Don&apos;t replace common sense online.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">NordVPN for senior travelers</h3>
            <p className="text-sm text-muted-foreground">For most seniors, NordVPN at $5/month is a good choice. Easy app, large server network, reliable. Use it on hotel WiFi, when traveling abroad, or to access streaming. Skip if you only browse from home — your home network is usually fine without VPN. Don&apos;t pay for VPN if you don&apos;t actually need its specific features.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
