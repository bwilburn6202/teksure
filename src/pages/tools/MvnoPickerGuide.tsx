import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Smartphone } from 'lucide-react';

export default function MvnoPickerGuide() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="MVNO Picker — What &amp; Why | TekSure" description="What an MVNO is, why they&apos;re cheaper, and how to pick the right one for your network. Plain-English guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Smartphone className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">MVNO Picker Guide</h1>
          <p className="text-lg text-muted-foreground">Same towers. Half the price.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What an MVNO is</h2>
            <p className="text-sm">"MVNO" = Mobile Virtual Network Operator. They lease network capacity from the big 3 (Verizon, AT&amp;T, T-Mobile) and resell it cheaper. Same towers. Same coverage. Less marketing overhead = less expensive plans.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">By underlying network</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Verizon network</strong> — Visible, Total Wireless, Straight Talk (some), US Mobile (some).</li>
              <li><strong>T-Mobile network</strong> — Mint Mobile, Metro by T-Mobile, Tello, US Mobile (some).</li>
              <li><strong>AT&amp;T network</strong> — Cricket, H2O, Red Pocket (some), US Mobile (some).</li>
              <li><strong>Multi-network</strong> — Red Pocket, US Mobile let you choose.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Pick by your area</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Which carrier has best signal at YOUR home? (Ask neighbors, check coverage maps.)</li>
              <li>Pick MVNO using that network.</li>
              <li>Rural — Verizon usually wins. Cities — all 3 work.</li>
              <li>Compare price + GB to your needs.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Trade-offs to know</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Postpaid customers may get priority during peak — MVNO speed sometimes slower then.</li>
              <li>International roaming usually costs more on MVNOs.</li>
              <li>Hotspot data sometimes capped on MVNOs.</li>
              <li>Customer service is online/chat (no stores). For most, fine.</li>
              <li>Some don&apos;t support Apple Watch cellular.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best beginner MVNOs</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Mint Mobile</strong> — easy setup, $15/mo if you prepay 12 months.</li>
              <li><strong>Visible</strong> — Verizon network, $25 unlimited, super-simple.</li>
              <li><strong>Consumer Cellular</strong> — senior-focused, AARP discount, friendly support.</li>
              <li><strong>US Mobile</strong> — pick network, lots of plan options.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">First-month risk-free</h3>
            <p className="text-sm text-muted-foreground">Most MVNOs offer 7-30 day money-back guarantee. Test on your phone with eSIM. If signal is bad, switch back. Worst case = $30 wasted. Best case = $700/year saved.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
