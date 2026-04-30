import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Luggage } from 'lucide-react';

export default function PackingChecklistSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Packing Checklist for Seniors | TekSure" description="Senior-specific packing list with meds, devices, comfort items. Plain-English." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Luggage className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Senior Packing Checklist</h1>
          <p className="text-lg text-muted-foreground">Forget nothing important.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Medications (carry-on always)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>All meds in original bottles with labels.</li>
              <li>Pack 7-day extra in case of delays.</li>
              <li>Medication list with doses + doctor.</li>
              <li>Insurance cards.</li>
              <li>Pharmacy phone number.</li>
              <li>EpiPen / inhaler if needed.</li>
              <li>Doctor&apos;s letter for controlled substances.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Medical devices (carry-on)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>CPAP machine — FREE extra carry-on (federal law).</li>
              <li>Glucose monitor + supplies.</li>
              <li>Hearing aids + spare batteries.</li>
              <li>Glasses (extra pair) + reading glasses.</li>
              <li>Compression socks for flights.</li>
              <li>Cane or walker (free to gate-check).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Documents (carry-on)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Passport (not expiring within 6 months for international).</li>
              <li>Driver&apos;s license / Real ID.</li>
              <li>Travel insurance + policy.</li>
              <li>Hotel + tour confirmations (paper backup).</li>
              <li>Emergency contacts list.</li>
              <li>Credit cards + small US cash.</li>
              <li>Photocopy of passport in checked bag.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Comfort essentials</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Compression socks for plane.</li>
              <li>Travel pillow — inflatable or neck.</li>
              <li>Eye mask + earplugs.</li>
              <li>Refillable water bottle (fill after security).</li>
              <li>Comfortable walking shoes (worn on flight).</li>
              <li>Layers — planes/buses cold.</li>
              <li>Sweater/jacket.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Tech</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Phone + charger.</li>
              <li>Power bank (Anker 10K mAh) — for delays.</li>
              <li>Universal power adapter (international).</li>
              <li>Headphones / earbuds.</li>
              <li>Apple AirTag in suitcase ($25) — track lost luggage.</li>
              <li>Camera if not using phone.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">First aid / personal</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Pain reliever, antacid, anti-diarrhea.</li>
              <li>Bandaids, antibiotic ointment.</li>
              <li>Sunscreen + lip balm w/ SPF.</li>
              <li>Hand sanitizer + wipes.</li>
              <li>Tissues.</li>
              <li>Toothbrush, toothpaste, denture supplies.</li>
              <li>Travel-size shampoo, soap, lotion.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Pack light rule</h3>
            <p className="text-sm text-muted-foreground">If suitcase too heavy to lift = too heavy. Hard to manage curbs, cobblestones, hotel stairs. Limit to 22-30 lbs. Can always buy extras (toothbrush, etc) at destination. Most seniors over-pack 30%.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
