import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Truck } from 'lucide-react';

export default function DoorDashGrubhubSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="DoorDash + Grubhub for Seniors | TekSure" description="Restaurant food delivery apps for seniors. DoorDash, Grubhub, Uber Eats compared." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Truck className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Food Delivery</h1>
          <p className="text-lg text-muted-foreground">Restaurants delivered. Mobility-friendly.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">DoorDash</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Most restaurants partnered.</li>
              <li>DashPass — $9.99/month, free deliveries $12+.</li>
              <li>Grocery delivery too.</li>
              <li>Track driver in app.</li>
              <li>Tip drivers fairly ($5+ minimum).</li>
              <li>Most popular delivery app.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Uber Eats</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Same Uber app — orders + rides.</li>
              <li>Uber One — $9.99/month free deliveries.</li>
              <li>Often best for late-night.</li>
              <li>Restaurant variety similar.</li>
              <li>Track driver in app.</li>
              <li>Tip generously.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Grubhub</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Sometimes lower delivery fees.</li>
              <li>Free Grubhub+ with Amazon Prime.</li>
              <li>Local restaurants emphasized.</li>
              <li>Sometimes only option for certain restaurants.</li>
              <li>Coupons + promos common.</li>
              <li>Compare across apps.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Tips for senior orderers</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Order during off-peak — faster delivery.</li>
              <li>Special instructions clear (drinks separate).</li>
              <li>Note delivery preferences (porch).</li>
              <li>Tip in app — automatic.</li>
              <li>Save favorite restaurants.</li>
              <li>Reorder past favorites in 2 taps.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Watch the costs</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Delivery fees + service fees + tips.</li>
              <li>Often 30-50% more than restaurant pickup.</li>
              <li>Subscriptions ($9.99/mo) save if frequent.</li>
              <li>Compare to picking up yourself.</li>
              <li>Senior-friendly when mobility limited.</li>
              <li>Don&apos;t use daily — too expensive.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">For grandkids visiting</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Order pizza after a long visit.</li>
              <li>Multiple cuisines for picky eaters.</li>
              <li>Grandkids often happy to order via app.</li>
              <li>Dietary restrictions covered.</li>
              <li>Less than going out.</li>
              <li>More family time at home.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">DashPass if eating delivery weekly</h3>
            <p className="text-sm text-muted-foreground">If you order delivery 2+ times weekly, DoorDash DashPass at $9.99/month pays for itself in waived delivery fees. Otherwise, just pay per order. For seniors with mobility issues, food delivery is genuinely valuable. For others — driving + picking up is much cheaper.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
