import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Car } from 'lucide-react';

export default function CarRentalAppsForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Car Rental Apps for Senior Travelers | TekSure" description="Best car rental apps and tips for seniors. Avoid hidden fees, get senior discounts." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Car className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Car Rentals</h1>
          <p className="text-lg text-muted-foreground">Tips + apps for senior travelers.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best comparison apps</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>AutoSlash — auto-rebook if rates drop.</li>
              <li>Costco Travel — member-only rates.</li>
              <li>AAA Travel — discounts for members.</li>
              <li>Google Flights/Hotels — also has rentals.</li>
              <li>Kayak — compare across all major brands.</li>
              <li>Compare 3+ before booking.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior discounts</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Hertz: 50+ Senior Rates.</li>
              <li>Avis/Budget: AARP discount 5–25%.</li>
              <li>Enterprise: AARP rates.</li>
              <li>Always ask for senior rate at counter.</li>
              <li>AARP membership often beats Costco.</li>
              <li>Compare with + without discount codes.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Avoid hidden fees</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Decline counter insurance — credit card often covers.</li>
              <li>Pre-pay fuel = bad deal usually.</li>
              <li>Return with full tank.</li>
              <li>Decline GPS — use phone Google Maps.</li>
              <li>Check car for existing damage before driving.</li>
              <li>Photograph everything when picking up.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Insurance considerations</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Your auto policy may extend to rentals — check.</li>
              <li>Many credit cards include rental coverage.</li>
              <li>Decline the rental company&apos;s expensive option.</li>
              <li>Check before traveling — call insurance.</li>
              <li>International rentals — may need separate.</li>
              <li>Save $20–$40/day if your card covers.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior-friendly car features</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Backup camera — every modern rental.</li>
              <li>Adaptive cruise control — easier highway driving.</li>
              <li>Automatic transmission — request specifically.</li>
              <li>Mid-size sedan — easier in/out than SUV.</li>
              <li>Test all controls in lot before leaving.</li>
              <li>Adjust seat, mirrors, climate before driving.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Loyalty programs worth joining</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>All free to join.</li>
              <li>Hertz Gold Plus Rewards.</li>
              <li>National Emerald Club — pick own car.</li>
              <li>Avis Preferred — skip counter line.</li>
              <li>Earn points toward free rentals.</li>
              <li>Faster pickup at airport.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">AutoSlash for ongoing savings</h3>
            <p className="text-sm text-muted-foreground">Book any car rental, then enter the reservation in AutoSlash (free). The app monitors prices daily and auto-rebooks if a better rate appears for the same dates. Many seniors save $50–$200 per rental this way without lifting a finger after the initial booking. Combine with AARP discount and Costco rates for best deals.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
