import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { PackageOpen } from 'lucide-react';

const SVCS = [
  { name: 'Chewy', cost: 'FREE shipping $49+', best: 'Largest. Auto-ship discount. Senior-friendly site.', good: 'Best overall.' },
  { name: 'Petco / PetSmart', cost: 'FREE shipping $49+', best: 'In-store + online. Curbside pickup.', good: 'Best in-store option.' },
  { name: 'Amazon Subscribe & Save', cost: 'FREE Prime', best: '15% off recurring. Wide selection.', good: 'Best with Prime.' },
  { name: 'Costco', cost: 'Membership $60', best: 'Bulk Kirkland brand pet food. Best price.', good: 'Best bulk.' },
  { name: 'Walmart Pet Pickup', cost: 'FREE pickup', best: 'Curbside. Same-day pickup.', good: 'Best curbside.' },
];

export default function PetSupplyDelivery() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Pet Supply Delivery for Seniors | TekSure" description="No more lugging pet food bags. Plain-English picks for senior pet supply delivery." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <PackageOpen className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Pet Supply Delivery</h1>
          <p className="text-lg text-muted-foreground">Stop hauling 30-lb food bags.</p>
        </div>

        <div className="space-y-3 mb-6">
          {SVCS.map(s => (
            <Card key={s.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{s.name}</h3>
                  <span className="text-sm font-semibold text-primary">{s.cost}</span>
                </div>
                <p className="text-sm">{s.best}</p>
                <p className="text-sm text-muted-foreground">{s.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Auto-ship benefits</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Save 5-15% on every order.</li>
              <li>Schedule monthly / 6-week / quarterly.</li>
              <li>Skip or pause anytime.</li>
              <li>No more &quot;ran out of food&quot; emergencies.</li>
              <li>Heavy bags delivered to door.</li>
              <li>Email reminders before each shipment.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Chewy — senior favorite</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>24/7 phone support — real people.</li>
              <li>365-day return policy.</li>
              <li>Personal touch — flowers if pet dies.</li>
              <li>Pharmacy with vet prescriptions.</li>
              <li>Connect Pharmacy app for pet meds delivery.</li>
              <li>Auto-ship discount + free shipping $49+.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Save money on pet care</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Generic vs name-brand often equivalent.</li>
              <li>Vet/specialty diets — get prescription, buy at pharmacy.</li>
              <li>Costco Kirkland brand = excellent quality + price.</li>
              <li>Amazon often cheapest if comparing same brand.</li>
              <li>Email alerts for sales — stock up.</li>
              <li>Coupons — RetailMeNot, vendor email lists.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Pet meds online</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Chewy Pharmacy</strong> — prescription meds, often half vet&apos;s price.</li>
              <li><strong>1-800-PetMeds</strong> — long-time online pharmacy.</li>
              <li><strong>Costco Pet Pharmacy</strong> — even cheaper if member.</li>
              <li>Get vet to fax/email prescription.</li>
              <li>Heartworm + flea meds especially cheaper online.</li>
              <li>VIPPS-accredited only — verifies legitimacy.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Free pet food assistance</h3>
            <p className="text-sm text-muted-foreground">If on fixed income — many local food banks include pet food. <strong>Pet Pantry</strong> programs nationwide. <strong>Meals on Wheels</strong> serves pets too in many areas. <strong>Banfield Foundation Pet Pantry</strong> grants. Call local Humane Society — most know all programs.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
