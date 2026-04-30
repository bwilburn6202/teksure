import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Lock } from 'lucide-react';

const VPNS = [
  { name: 'Proton VPN', cost: 'FREE tier; $5-10/mo paid', best: 'Made by ProtonMail. Free tier is one of the few REAL free VPNs (no logs, no data collection).', good: 'Best free pick.' },
  { name: 'Mullvad', cost: '$5/mo flat', best: 'Most privacy-focused. No account info needed (uses anonymous account number). Sweden-based.', good: 'Best for privacy purists.' },
  { name: 'ExpressVPN', cost: '$8-13/mo', best: 'Fastest. Easy app. Great for streaming.', good: 'Most popular paid VPN.' },
  { name: 'NordVPN', cost: '$4-13/mo', best: 'Strong features (Threat Protection, Meshnet). Big network.', good: 'Black Friday deals are deep.' },
  { name: 'Surfshark', cost: '$2-13/mo', best: 'Cheapest top-tier. Unlimited devices.', good: 'Good multi-device value.' },
  { name: 'iCloud Private Relay', cost: 'Free with iCloud+ ($1/mo)', best: 'Apple\'s lightweight VPN-like service. Hides your IP from Safari sites.', good: 'Almost free, easy.' },
];

export default function VpnPicker() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="VPN Picker — Proton, NordVPN, Mullvad | TekSure" description="Plain-English guide to VPNs (Virtual Private Networks). When you actually need one, free vs paid, and the best picks for travel and privacy." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Lock className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">VPN Picker</h1>
          <p className="text-lg text-muted-foreground">Privacy and travel tool. Honest take on when you actually need it.</p>
        </div>

        <Card className="mb-6 bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <h2 className="font-bold mb-2">What a VPN is, in plain English</h2>
            <p className="text-sm">An app that routes your internet traffic through a private "tunnel". Hides what you do from your internet provider, hotel Wi-Fi, public hotspots. Also hides your location — useful for accessing region-locked content or for some kinds of privacy.</p>
          </CardContent>
        </Card>

        <div className="space-y-3 mb-6">
          {VPNS.map(v => (
            <Card key={v.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{v.name}</h3>
                  <span className="text-sm font-semibold text-primary">{v.cost}</span>
                </div>
                <p className="text-sm mb-1">{v.best}</p>
                <p className="text-sm text-muted-foreground">{v.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">When you actually need one</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Traveling internationally</strong> — to access US Netflix, banking, and avoid local restrictions.</li>
              <li><strong>Hotel and airport Wi-Fi</strong> — extra layer of safety.</li>
              <li><strong>You don\'t want your ISP knowing what you browse</strong>.</li>
              <li><strong>Watching out-of-region streaming</strong> — UK BBC iPlayer, etc.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">When you DON\'T need one</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Most everyday US browsing — modern websites use HTTPS already.</li>
              <li>Banking from your home Wi-Fi.</li>
              <li>If the slowdown bothers you (VPNs make internet 10-30% slower).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4 border-yellow-300 dark:border-yellow-800">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">⚠️ Free VPNs — caution</h2>
            <p className="text-sm">Many "free" VPNs sell your data, inject ads, or ARE the threat. Free options to TRUST: Proton VPN free tier, Apple\'s iCloud Private Relay. Avoid no-name free apps in the App Store.</p>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Where to start</h3>
            <p className="text-sm text-muted-foreground">Travel a lot? <strong>ExpressVPN or NordVPN</strong>. Care most about privacy? <strong>Mullvad</strong>. Want free that actually works? <strong>Proton VPN free tier</strong>. Already pay for iCloud+? Use Apple\'s built-in Private Relay.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
