import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { CarTaxiFront } from 'lucide-react';

export default function RentalCarAppsForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Rental Car Apps for Senior Travelers | TekSure" description="Hertz, Enterprise, Avis apps explained. Senior discounts + fast pickup tips." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <CarTaxiFront className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Rental Car Apps</h1>
          <p className="text-lg text-muted-foreground">Faster pickup. Senior discounts.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Major rental apps</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Hertz — Gold Plus skip the counter.</li>
              <li>Enterprise — Plus members faster pickup.</li>
              <li>Avis — Preferred members skip lines.</li>
              <li>Budget — owned by Avis, similar perks.</li>
              <li>Sign up FREE for fastest service.</li>
              <li>Skip the counter at airports.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">AARP discount stacking</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>AARP members — discount at all major.</li>
              <li>Hertz: up to 30% off.</li>
              <li>Avis: 25% off.</li>
              <li>Enterprise: 5% off.</li>
              <li>Free additional driver (spouse).</li>
              <li>Worth $16/year AARP membership.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Costco Travel</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Often cheapest rental car prices.</li>
              <li>Free additional driver included.</li>
              <li>Includes additional liability coverage.</li>
              <li>Member-only pricing.</li>
              <li>Save 20–40% vs walk-up.</li>
              <li>Worth checking before booking.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Insurance — important</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Your auto insurance often covers rentals.</li>
              <li>Check before paying for daily insurance.</li>
              <li>Credit card may include CDW.</li>
              <li>Decline insurance if you have coverage.</li>
              <li>Save $20–$30/day this way.</li>
              <li>Verify before declining.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior-friendly tips</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Choose smaller car — easier parking.</li>
              <li>Check car features before driving.</li>
              <li>Familiar with backup camera, lights.</li>
              <li>Set up GPS before driving.</li>
              <li>Photograph existing damage at pickup.</li>
              <li>Return with full tank.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Avoid surprise fees</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Decline upgrades unless free.</li>
              <li>Decline pre-paid fuel option (overpay).</li>
              <li>Return on time — late fees common.</li>
              <li>Toll system charges add up — bring transponder.</li>
              <li>Read final invoice carefully.</li>
              <li>Dispute incorrect charges immediately.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Costco Travel + AARP combo</h3>
            <p className="text-sm text-muted-foreground">For best rental car prices: Compare Costco Travel + AARP-discounted prices on hertz.com. Choose lower price. Sign up for rental loyalty program (free) to skip counter. Decline insurance if your auto policy covers. This combo often saves $50–$200 per rental compared to walking up to counter.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
