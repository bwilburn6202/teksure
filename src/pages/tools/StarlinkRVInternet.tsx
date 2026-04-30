import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Satellite } from 'lucide-react';

export default function StarlinkRVInternet() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Starlink for RV Travelers | TekSure" description="Satellite internet for RVers. Starlink Roam reviewed for senior RV travelers." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Satellite className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Starlink for RVs</h1>
          <p className="text-lg text-muted-foreground">Internet anywhere on the road.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What is Starlink?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Satellite internet from SpaceX.</li>
              <li>Works almost anywhere with sky view.</li>
              <li>High-speed (50–250 Mbps).</li>
              <li>No cellular tower needed.</li>
              <li>Game-changer for remote camping.</li>
              <li>Available in US, Canada, Mexico.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Plans</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Starlink Roam (Mobile) — $50–$165/month.</li>
              <li>Mini ($499 hardware) — small dish.</li>
              <li>Standard ($349 hardware) — full size.</li>
              <li>Pause service when not RVing.</li>
              <li>No contract, cancel anytime.</li>
              <li>Hardware doesn&apos;t expire.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Setup process</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Order from Starlink.com.</li>
              <li>Box arrives in week — dish + router.</li>
              <li>Place dish outside RV with sky view.</li>
              <li>Plug router into power.</li>
              <li>Self-aligns within 5 minutes.</li>
              <li>Connect devices to WiFi.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best for these RVers</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Full-time RVers needing reliable work-from-RV.</li>
              <li>Those camping in remote areas.</li>
              <li>Heavy streaming users.</li>
              <li>Telehealth users needing video calls.</li>
              <li>Storm chasers, photographers.</li>
              <li>Frequent boondocking RVers.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Cellular alternative</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>T-Mobile Home Internet — $50/month.</li>
              <li>Verizon LTE Internet — $60/month.</li>
              <li>Hotspot from cell phone.</li>
              <li>Works where there&apos;s cell signal.</li>
              <li>Cheaper than Starlink.</li>
              <li>Many areas Starlink unnecessary.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">When Starlink shines</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Remote campgrounds with no cell.</li>
              <li>National park interior camping.</li>
              <li>Boondocking in deserts.</li>
              <li>Mountain camping where towers don&apos;t reach.</li>
              <li>True wilderness internet.</li>
              <li>Rivers, lakes, forests.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Cellular first, Starlink later</h3>
            <p className="text-sm text-muted-foreground">For most senior RVers, start with a T-Mobile Home Internet hotspot ($50/month) and a Verizon SIM as backup. Most RV destinations have cellular coverage. If you find yourself frequently in remote areas without service, then add Starlink. Many seniors use both — cell first, Starlink for remote stops. Combined cost about $200/month for unlimited connectivity anywhere.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
