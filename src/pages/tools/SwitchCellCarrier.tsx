import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Signal } from 'lucide-react';

export default function SwitchCellCarrier() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Switch Cell Carrier for Seniors | TekSure" description="Save $50/mo on phone. Plain-English senior guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Signal className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Switch Cell Carrier</h1>
          <p className="text-lg text-muted-foreground">Save $50+/mo. Same coverage.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Big 3 vs MVNO</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Verizon, ATT, T-Mobile</strong> — $80+/mo.</li>
              <li><strong>MVNOs</strong> — $25-40/mo same network.</li>
              <li>Same coverage.</li>
              <li>Same speeds (mostly).</li>
              <li>Save $500+/yr.</li>
              <li>Skip stores — online easier.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best senior carriers</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Consumer Cellular</strong> — senior-focused, $20+/mo.</li>
              <li><strong>Mint Mobile</strong> — $15-30/mo, T-Mobile network.</li>
              <li><strong>Visible</strong> — $25/mo unlimited, Verizon.</li>
              <li><strong>US Mobile</strong> — picks any network.</li>
              <li><strong>Tello</strong> — customizable plans, $5-25.</li>
              <li>Spectrum + Xfinity Mobile — bundles.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior pick: Consumer Cellular</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>$20-50/mo.</li>
              <li>AARP discount 5%.</li>
              <li>US-based customer service.</li>
              <li>Senior-trained reps.</li>
              <li>ATT + T-Mobile networks.</li>
              <li>No contracts.</li>
              <li>Bring your own phone.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Switch process</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>1. Verify phone unlocked (paid off).</li>
              <li>2. Check coverage at new carrier&apos;s map.</li>
              <li>3. Order new SIM card.</li>
              <li>4. Get account number from old carrier.</li>
              <li>5. Activate new SIM (keeps your number).</li>
              <li>6. Cancel old service.</li>
              <li>Total time: 1-2 hours.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">eSIM (newer)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Digital SIM — no physical card.</li>
              <li>iPhone 14+ + newer Android.</li>
              <li>Switch carriers from phone.</li>
              <li>No mailing.</li>
              <li>Mint, Visible, US Mobile support.</li>
              <li>Future of cell switching.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Avoid contract gotchas</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Read termination fees first.</li>
              <li>Check &quot;promotional pricing&quot; expires.</li>
              <li>Hotspot + tethering allowed?</li>
              <li>International data?</li>
              <li>Streaming throttling?</li>
              <li>Roaming costs.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">First month bonus</h3>
            <p className="text-sm text-muted-foreground">Many MVNOs offer first month $5 trial. Test coverage in your area. Most port number free. Keep old SIM in drawer 30 days as backup. Tech-savvy family member can help. Senior reps on Consumer Cellular very patient. Worth phone call to plan switch. AARP members extra discount.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
