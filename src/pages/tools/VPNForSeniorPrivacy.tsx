import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Shield } from 'lucide-react';

export default function VPNForSeniorPrivacy() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="VPN for Senior Privacy | TekSure" description="VPNs for senior internet privacy. Beginner-friendly guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Shield className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">VPN Apps</h1>
          <p className="text-lg text-muted-foreground">Internet privacy.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">What VPN does</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Encrypts internet.</li><li>Hides location.</li><li>Coffee shop wifi safer.</li><li>ISPs can&apos;t track.</li><li>Senior privacy.</li><li>$3-$10/month.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Best VPNs</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>NordVPN — $4/mo.</li><li>ExpressVPN — $8/mo.</li><li>ProtonVPN — free tier.</li><li>Mullvad — $5/mo privacy.</li><li>Senior pick.</li><li>Avoid free sketchy.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Free included?</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Google One 2TB has VPN.</li><li>iCloud+ Private Relay.</li><li>Norton 360 includes.</li><li>Senior may already have.</li><li>Check existing.</li><li>Avoid double pay.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">When senior needs</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Travel hotel wifi.</li><li>Coffee shop work.</li><li>Public hotspots.</li><li>Sensitive banking.</li><li>Senior protection.</li><li>Worth $50/yr.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">When NOT needed</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Home wifi password-protected.</li><li>Cellular 4G/5G.</li><li>Senior daily life ok.</li><li>Don&apos;t over-engineer.</li><li>Most useful travel.</li><li>Not always-on.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior tips</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>NordVPN one-click.</li><li>Auto-on for hotel wifi.</li><li>No technical knowledge needed.</li><li>Senior simple.</li><li>Adult kid can set up.</li><li>Free trials available.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">$50/yr VPN = senior travel safety</h3><p className="text-sm text-muted-foreground">$50/yr NordVPN = senior travel/hotel wifi protection. Or check Google One/iCloud+ if subscribed — VPN included free. Auto-on for public wifi. Senior simple — one click. Most useful when away from home wifi. Don&apos;t skip when traveling.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
