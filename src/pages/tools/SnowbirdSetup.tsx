import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Snowflake } from 'lucide-react';

export default function SnowbirdSetup() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Snowbird Setup Guide | TekSure" description="Spend winter south. Plain-English logistics for snowbird seniors — mail, taxes, Medicare." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Snowflake className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Snowbird Setup</h1>
          <p className="text-lg text-muted-foreground">Winter south. Summer north. Logistics done right.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Mail forwarding</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>USPS Premium Forwarding — weekly box of mail. ~$25/wk.</li>
              <li>USPS regular forwarding — free, 12 months max.</li>
              <li>Switch to e-statements before leaving.</li>
              <li>Earth Class Mail — scans + emails everything ($25-100/mo).</li>
              <li>Trusted neighbor — free option for short stays.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Medicare + healthcare</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Original Medicare works nationwide.</li>
              <li>Medicare Advantage often LOCAL ONLY — check network in winter state.</li>
              <li>Get records on patient portal before leaving.</li>
              <li>Find primary care in winter location ahead.</li>
              <li>3-month medication refills before leaving (most insurers allow).</li>
              <li>CVS/Walgreens nationwide — sync prescription transfers.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Taxes + residency</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Florida, Texas, Tennessee = no state income tax.</li>
              <li>183-day rule — over half year = resident in that state.</li>
              <li>Keep voter registration, driver&apos;s license consistent.</li>
              <li>Consult tax pro before changing residency.</li>
              <li>Property tax — homestead exemption usually 1 state only.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Empty home checklist</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Smart thermostat + leak detectors (Nest, Govee).</li>
              <li>Smart cameras (Ring, Wyze) — check from south.</li>
              <li>Drain pipes if very cold — or set heat to 55°F.</li>
              <li>Stop newspaper, cancel deliveries.</li>
              <li>Trusted neighbor with key.</li>
              <li>Tell local police of vacancy + dates.</li>
              <li>Increase home insurance vacancy coverage.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Tech setup</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Same cell carrier works both states.</li>
              <li>Internet — pause northern service or keep for security cameras.</li>
              <li>Streaming services follow you (Netflix, Hulu nationwide).</li>
              <li>Bring laptop, chargers, backup phone.</li>
              <li>Use VPN if accessing bank from public WiFi.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Best snowbird states</h3>
            <p className="text-sm text-muted-foreground"><strong>Florida</strong> — most snowbirds. No state tax. <strong>Arizona</strong> — dry heat, golf. <strong>Texas</strong> — Hill Country, Gulf. <strong>South Carolina</strong> — beaches, mild. <strong>Mexico (Lake Chapala, Puerto Vallarta)</strong> — cheaper, growing senior community.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
