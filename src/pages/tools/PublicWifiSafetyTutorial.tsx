import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { WifiOff } from 'lucide-react';

export default function PublicWifiSafetyTutorial() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Public WiFi Safety for Senior Travelers | TekSure" description="Use coffee shop, hotel, airport WiFi safely. Senior-specific advice." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <WifiOff className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Public WiFi Safety</h1>
          <p className="text-lg text-muted-foreground">Hotel, cafe, airport WiFi without getting hacked.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why public WiFi is risky</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Anyone on same network can sometimes intercept data.</li>
              <li>Fake hotspots called &quot;evil twin&quot; mimic real ones.</li>
              <li>Hotels + airports common attack targets.</li>
              <li>Risk especially high for banking + email.</li>
              <li>HTTPS sites mostly safe (most are now).</li>
              <li>Better safe than sorry.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Safe practices</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Never bank on public WiFi without VPN.</li>
              <li>Use cell data instead when possible.</li>
              <li>Hotspot from your phone if needed.</li>
              <li>Look for HTTPS lock icon in browser.</li>
              <li>Never click public WiFi captive page errors.</li>
              <li>Disable auto-connect to known WiFi.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">VPN protects you</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>VPN encrypts everything.</li>
              <li>Even on hostile WiFi, traffic safe.</li>
              <li>Especially for banking, email, sensitive info.</li>
              <li>NordVPN $5/month — worth it for travelers.</li>
              <li>Proton VPN free tier good option.</li>
              <li>Always-on with VPN = peace of mind.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Cellular hotspot</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Use phone&apos;s data plan via hotspot.</li>
              <li>Settings → Personal Hotspot.</li>
              <li>Connect laptop to phone&apos;s WiFi.</li>
              <li>Cellular safer than public WiFi.</li>
              <li>Watch data usage on limited plans.</li>
              <li>Better than risky hotel WiFi.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Verify network name</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Ask staff what hotel WiFi is called.</li>
              <li>Don&apos;t trust generic-named networks.</li>
              <li>&quot;Free Public WiFi&quot; — often fake.</li>
              <li>Verify exact spelling matches official.</li>
              <li>Some hotels have multiple — pick official.</li>
              <li>Hackers create fake networks.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">After traveling</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Forget hotel + airport WiFi networks.</li>
              <li>Settings → Wi-Fi → tap network → Forget.</li>
              <li>Prevents auto-reconnect later.</li>
              <li>Run Malwarebytes scan after risky use.</li>
              <li>Change passwords if used unsecured.</li>
              <li>Monitor accounts for suspicious activity.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">VPN if you travel</h3>
            <p className="text-sm text-muted-foreground">If you travel even occasionally — hotel stays, airport waiting, vacation — a $5/month VPN like NordVPN is worth the peace of mind. Banking from a hotel without VPN is risky. With VPN it&apos;s safe. Set it to auto-connect on unknown networks. One simple subscription that protects all your devices for travel.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
