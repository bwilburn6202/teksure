import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Wifi } from 'lucide-react';

export default function RetirementCommunityWifi() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Retirement Community Wifi Survival | TekSure" description="Slow community wifi? Roommate streaming hogs bandwidth? Plain-English fixes for shared retirement-community internet." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Wifi className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Retirement Community Wifi</h1>
          <p className="text-lg text-muted-foreground">When the wifi is slow, weak, or shared.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Common problems</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>One wifi for the whole building — slow at 7 PM.</li>
              <li>Signal drops off in your unit (concrete walls).</li>
              <li>Logged out every 24 hours.</li>
              <li>Streaming TV blocked or slow.</li>
              <li>Public wifi = security worry.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Quick fixes (no extra cost)</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Move closer to wifi access point. Often in hallway.</li>
              <li>Remove walls — sit in a different room.</li>
              <li>Turn off auto-update on phone, laptop, tablet (uses bandwidth in background).</li>
              <li>Restart device once a week.</li>
              <li>Avoid 7-9 PM streaming peak. 11 AM is fastest.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Boost your unit&apos;s signal</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Wifi extender</strong> — TP-Link RE220 ($30). Plugs into outlet, repeats wifi signal. Best simple fix.</li>
              <li><strong>Mesh wifi</strong> — Eero, Nest. $100-200. Better but overkill for a small unit.</li>
              <li><strong>USB wifi adapter</strong> for laptop ($20). Adds a longer antenna.</li>
              <li>Ask community management — many have free in-unit boosters available.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Get your own internet (often allowed)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Most retirement communities allow private internet in your unit.</li>
              <li>Cellular hotspot — Verizon, T-Mobile sell home-internet hotspots, $30-50/mo unlimited.</li>
              <li>5G home internet — T-Mobile $50/mo, Verizon $50/mo. No installer needed.</li>
              <li>Cable internet — if community has Comcast/Spectrum drops in your unit, $35-60/mo.</li>
              <li>Your own router = faster, more secure, your password.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Public wifi safety</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Don&apos;t do banking on public wifi (community wifi counts).</li>
              <li>Use cellular data for banking instead.</li>
              <li>OR use a VPN ($3-5/mo from Mullvad, ProtonVPN, or NordVPN).</li>
              <li>Keep auto-connect to "remembered networks" OFF.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Lifeline / Affordable Connectivity</h3>
            <p className="text-sm text-muted-foreground">Federal Lifeline program subsidizes phone/internet for seniors on Medicaid, SNAP, or low income. Up to $9.25/month off. Apply at <strong>lifelinesupport.org</strong>. Many community managers can help with the form.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
