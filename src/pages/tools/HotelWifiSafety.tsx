import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Wifi, ShieldAlert, CheckCircle2 } from 'lucide-react';

export default function HotelWifiSafety() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Hotel Wi-Fi Safety — Travel Without Getting Hacked | TekSure" description="Hotel, airport, and coffee shop Wi-Fi can be risky. A simple checklist to keep your bank login and email safe while traveling." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Wifi className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Hotel & Public Wi-Fi Safety</h1>
          <p className="text-lg text-muted-foreground">Travel without getting hacked. A simple checklist.</p>
        </div>

        <Card className="mb-6 bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <h2 className="font-bold mb-2">The risk in plain English</h2>
            <p className="text-sm">Public Wi-Fi (hotels, airports, coffee shops) is often shared with hundreds of strangers. Crooks can set up fake networks named "Hotel-Free-WiFi" to trick you into joining them. Once joined, they can sometimes see what you type — including bank logins.</p>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">✅ Before you travel</h2>
            <ul className="space-y-2 list-disc pl-5 text-sm">
              <li>Turn on two-factor authentication on your bank, email, and main accounts. Even if a scammer gets your password, they can't get in.</li>
              <li>Update your phone and laptop — security updates patch holes that public Wi-Fi attackers use.</li>
              <li>Know your phone's hotspot password. If you don't trust the hotel Wi-Fi, you can use your own data.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">🏨 At the hotel — picking the right network</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Ask the front desk for the EXACT network name. Crooks copy hotel names like "Marriott_Guest" vs "Marriott-Guest".</li>
              <li>If the network has no password, it's open to everyone. Be extra careful.</li>
              <li>If the network DOES have a password — that's safer, but don't assume it's foolproof.</li>
              <li>Watch out for two networks with very similar names — only one is real.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-6 border-yellow-300 dark:border-yellow-800">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">🛑 What NOT to do on hotel Wi-Fi</h2>
            <ul className="space-y-2 list-disc pl-5 text-sm">
              <li>Don't log in to your bank or move money. Use your phone's cellular data instead, or wait until you're home.</li>
              <li>Don't shop with a credit card. (Apple Pay / Google Pay are safer because the merchant never sees the real card number.)</li>
              <li>Don't ignore browser warnings about "this site is not secure".</li>
              <li>Don't agree to install anything the Wi-Fi sign-in page asks you to install.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">✅ What's safe to do</h2>
            <ul className="space-y-2 list-disc pl-5 text-sm">
              <li>Web browsing on big sites (news, weather, search) — fine.</li>
              <li>Streaming Netflix or YouTube — fine.</li>
              <li>FaceTime, iMessage, WhatsApp — these are encrypted; fine.</li>
              <li>Gmail and most email apps — fine because they use HTTPS.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-green-50 border-green-300 dark:bg-green-950/20 dark:border-green-800">
          <CardContent className="pt-6">
            <div className="flex gap-3">
              <CheckCircle2 className="w-6 h-6 text-green-700 dark:text-green-400 shrink-0" />
              <div>
                <h3 className="font-bold mb-1">Easiest answer: use your phone</h3>
                <p className="text-sm text-muted-foreground">For anything important — banking, paying bills, signing in to important accounts — turn on your phone's <strong>Personal Hotspot</strong> and use cellular instead. It's almost always safer than hotel Wi-Fi.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mt-4 bg-muted/40">
          <CardContent className="pt-6">
            <div className="flex gap-3">
              <ShieldAlert className="w-6 h-6 text-muted-foreground shrink-0" />
              <div>
                <h3 className="font-bold mb-1">Should I get a VPN?</h3>
                <p className="text-sm text-muted-foreground">A VPN (Virtual Private Network) hides your traffic from the public Wi-Fi. For most travelers, it's helpful but not required — modern websites already use encryption (HTTPS). If you do get one, stick to well-known names: ExpressVPN, NordVPN, or Proton VPN. Avoid free VPNs.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
