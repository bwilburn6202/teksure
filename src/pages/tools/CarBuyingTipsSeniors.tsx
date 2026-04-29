import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Car } from 'lucide-react';

export default function CarBuyingTipsSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Car Buying Tips for Seniors | TekSure" description="Smart car buying. Plain-English senior guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Car className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Car Buying Tips</h1>
          <p className="text-lg text-muted-foreground">Avoid mistakes. Save thousands.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best senior cars 2026</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Toyota Camry / RAV4</strong> — reliable.</li>
              <li><strong>Honda Accord / CR-V</strong> — reliable.</li>
              <li><strong>Subaru Outback / Forester</strong> — high seat, AWD.</li>
              <li><strong>Buick Encore / Envision</strong> — quiet, comfortable.</li>
              <li><strong>Hyundai / Kia</strong> — value, 10-year warranty.</li>
              <li>Avoid: too-low sports cars (hard to enter).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior must-haves</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Backup camera (required 2018+).</li>
              <li>Blind spot warning.</li>
              <li>Lane departure warning.</li>
              <li>Adaptive cruise control.</li>
              <li>Heated seats — back pain.</li>
              <li>Higher seat — easier in/out.</li>
              <li>Easy-to-read dashboard.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Research first</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Consumer Reports</strong> — reliability rankings.</li>
              <li><strong>Edmunds.com</strong> — true cost to own.</li>
              <li><strong>KBB.com</strong> — fair price.</li>
              <li><strong>TrueCar</strong> — real prices paid.</li>
              <li><strong>Car &amp; Driver</strong> — driving reviews.</li>
              <li>2 weeks of research minimum.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">New vs certified used</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>New car — 20% depreciation year 1.</li>
              <li>2-3 year certified pre-owned — sweet spot.</li>
              <li>Manufacturer-certified = warranty.</li>
              <li>Save 30-40%.</li>
              <li>Toyota / Honda hold value best.</li>
              <li>Skip cheap unknown brands.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Negotiation</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Get quotes from 3+ dealers.</li>
              <li>Email negotiate first.</li>
              <li>Avoid &quot;dealer add-ons&quot;.</li>
              <li>Senior — bring family member.</li>
              <li>Never sign first day.</li>
              <li>End of month best deals.</li>
              <li>Year-end clearance — December.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Avoid scams</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>&quot;Limited time only&quot; pressure = walk away.</li>
              <li>&quot;Yours today only&quot; = lie.</li>
              <li>VIN-etching ($300) = scam.</li>
              <li>Extended warranty pressure = no.</li>
              <li>Door-edge guards ($200) = scam.</li>
              <li>Always read EVERYTHING.</li>
              <li>Bring trusted family.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Senior discount</h3>
            <p className="text-sm text-muted-foreground">AARP — auto buying program. AAA member discounts. Costco Auto Program — pre-negotiated prices. Senior trade-in often higher value (better-maintained). Insurance senior discount — 5-10%. Geico, State Farm rate retired drivers favorably. Driver education course = insurance discount.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
