import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Pill } from 'lucide-react';

export default function PharmacyAppRewards() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="CVS + Walgreens App Rewards for Seniors | TekSure" description="Maximize savings on prescriptions and shopping with CVS, Walgreens apps." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Pill className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Pharmacy Apps</h1>
          <p className="text-lg text-muted-foreground">CVS + Walgreens. Refills, rewards, savings.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">CVS app features</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Refill prescriptions — tap or scan label.</li>
              <li>Schedule pickup time.</li>
              <li>Schedule vaccinations.</li>
              <li>Telehealth visits ($35).</li>
              <li>ExtraBucks rewards stacking.</li>
              <li>Weekly digital coupons.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">CVS ExtraCare</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Free membership.</li>
              <li>2% back as ExtraBucks.</li>
              <li>Carepass — $5/month for free shipping + extra perks.</li>
              <li>Senior 60+ Tuesday — 30% off select items.</li>
              <li>Sunday flu shot specials.</li>
              <li>Stack coupons with rewards.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Walgreens app features</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Pill reminders + refill alerts.</li>
              <li>Photo printing from phone.</li>
              <li>Refill via Express Pharmacy.</li>
              <li>Vaccination scheduling.</li>
              <li>Prescription savings club.</li>
              <li>Weekly digital ad.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">MyWalgreens rewards</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Free membership.</li>
              <li>1% back on health + wellness.</li>
              <li>5% back on Walgreens brand.</li>
              <li>Senior Tuesday 20% off.</li>
              <li>Birthday rewards.</li>
              <li>Vaccine notifications.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Photo printing</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Both apps print photos from phone.</li>
              <li>Same-day pickup.</li>
              <li>4x6 prints — $0.40 typically.</li>
              <li>Photo books, calendars, holiday cards.</li>
              <li>Frequent 50% off promotions.</li>
              <li>Cheaper than online printing services.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Smart refill strategy</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Schedule auto-refill in app.</li>
              <li>Get text when ready.</li>
              <li>Drive-through pickup if avail.</li>
              <li>Or in-store on senior 60+ days.</li>
              <li>Apply ExtraBucks/MyWalgreens to non-Rx purchases.</li>
              <li>Maximize each visit.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Senior Tuesday is real</h3>
            <p className="text-sm text-muted-foreground">If you&apos;re 60+, mark Tuesdays on your calendar. Both CVS (50% off) and Walgreens (20% off) have senior Tuesday discounts on regular merchandise. Combine with digital coupons in app for biggest savings. Many seniors save $30–$50 per shopping trip just by timing visits to Tuesdays.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
