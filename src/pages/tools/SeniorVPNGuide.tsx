import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Lock } from 'lucide-react';

export default function SeniorVPNGuide() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="VPN Guide for Seniors — TekSure" description="Do seniors need a VPN? Yes — for travel, public Wi-Fi, and privacy." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Lock className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">VPN Guide for Seniors</h1>
          <p className="text-lg text-muted-foreground">Privacy on coffee shop and hotel Wi-Fi.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">What a VPN does</h2><p>Encrypts internet traffic. Hides what you do from snoops on shared Wi-Fi.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">When seniors need one</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>Hotel Wi-Fi</li><li>Coffee shop / library</li><li>Banking on travel</li><li>Watching US Netflix abroad</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">NordVPN</h2><p>~$3/month with 2-year plan. Easy app. Big provider.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Proton VPN</h2><p>Free version available. Limited speed but works.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">ExpressVPN</h2><p>$8/month. Most user-friendly app.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Built-in options</h2><p>iCloud+ Private Relay (iPhone, $0.99/month). Google One VPN (with 2 TB plan).</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Avoid free VPNs that aren&apos;t Proton. Many sell your data — defeats the purpose.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
