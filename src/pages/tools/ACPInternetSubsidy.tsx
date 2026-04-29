import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Wifi } from 'lucide-react';

export default function ACPInternetSubsidy() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Affordable Connectivity Program for Seniors | TekSure" description="$30-75/mo internet credit for low-income seniors. Plain-English ACP guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Wifi className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">ACP Internet Subsidy</h1>
          <p className="text-lg text-muted-foreground">FREE / cheap internet for income-eligible.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">2026 status update</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>ACP funding ran out June 2024.</li>
              <li>Congress debating renewal.</li>
              <li>Some ISPs continue similar discounts.</li>
              <li>Lifeline program still active (different).</li>
              <li>Senior internet help still available.</li>
              <li>Apply at lifelinesupport.org.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Lifeline (similar program)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Federal program, still funded.</li>
              <li>$9.25/mo internet OR phone discount.</li>
              <li>Income limits 135% federal poverty (~$20K individual).</li>
              <li>Or qualifies if SNAP, SSI, Medicaid recipient.</li>
              <li>Lifelinesupport.org to apply.</li>
              <li>Most ISPs participate.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">ISP low-income plans</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Comcast Internet Essentials</strong> — $10-15/mo.</li>
              <li><strong>Spectrum Internet Assist</strong> — $20/mo.</li>
              <li><strong>AT&amp;T Access</strong> — $5-10/mo.</li>
              <li><strong>Cox ConnectAssist</strong> — $30/mo.</li>
              <li>Income limits ~$30-50K/yr.</li>
              <li>SNAP recipients qualify automatically usually.</li>
              <li>Often FREE with Lifeline.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Apply</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Lifeline: lifelinesupport.org. Federal application.</li>
              <li>Then choose participating ISP.</li>
              <li>Apply individually with each ISP.</li>
              <li>Bring proof of income or assistance program.</li>
              <li>Approval 30-90 days.</li>
              <li>Free help: 2-1-1 hotline, library, senior center.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Free internet alternatives</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Library WiFi</strong> — free in lobby.</li>
              <li><strong>McDonald&apos;s, Starbucks, Panera</strong> — free WiFi.</li>
              <li><strong>Library hotspot lending</strong> — many lend free.</li>
              <li><strong>Cell phone hotspot</strong> — share data with computer.</li>
              <li><strong>Senior center computer rooms</strong> — free.</li>
              <li>Combine to bridge if can&apos;t afford home internet.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Senior internet essentials</h3>
            <p className="text-sm text-muted-foreground">Internet not luxury anymore — needed for telehealth, banking, government accounts. If income tight — apply for Lifeline + ISP discount programs. Most seniors qualify but don&apos;t know. <strong>EveryoneOn.org</strong> connects with discount programs by ZIP. Free.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
