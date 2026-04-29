import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Building } from 'lucide-react';

export default function AirbnbForSeniorTravelers() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Airbnb + VRBO for Senior Travelers | TekSure" description="Vacation rentals for seniors. Plain-English Airbnb guide for senior renters." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Building className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Airbnb + VRBO for Seniors</h1>
          <p className="text-lg text-muted-foreground">Apartments + houses cheaper than hotels.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why senior-friendly</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Kitchen — cook own meals (cheap + dietary).</li>
              <li>Multiple bedrooms for family.</li>
              <li>Washer + dryer for long stays.</li>
              <li>Living room — feels like home.</li>
              <li>Cheaper than hotels for week+.</li>
              <li>Quieter than hotels.</li>
              <li>Often more space.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Critical filters for seniors</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>No stairs</strong> filter — single-level only.</li>
              <li><strong>Step-free entry</strong>.</li>
              <li><strong>Elevator</strong> if higher floors.</li>
              <li><strong>Walk-in shower</strong> instead of tub.</li>
              <li><strong>Grab bars</strong> in bathroom.</li>
              <li><strong>Senior-friendly</strong> — some hosts mention.</li>
              <li>Check photos carefully.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Vetting hosts</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Read recent reviews (last 6 months).</li>
              <li>Look for &quot;super host&quot; badge.</li>
              <li>Recent senior reviews helpful.</li>
              <li>Ask host questions before booking.</li>
              <li>Verify check-in process (sometimes complex).</li>
              <li>Ask: noise levels, parking, accessibility.</li>
              <li>Cancellation policy — flexible better.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Airbnb vs VRBO</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Airbnb</strong> — biggest selection. Some shared homes.</li>
              <li><strong>VRBO</strong> — only entire homes. Family-focused.</li>
              <li><strong>Booking.com</strong> — homes + hotels.</li>
              <li><strong>Vacasa</strong> — managed properties.</li>
              <li>VRBO often safer for seniors (no shared spaces).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Avoid scams</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Pay ONLY through platform — no Venmo/wire.</li>
              <li>Don&apos;t pay outside Airbnb.</li>
              <li>Verify listing belongs to host (not stolen photos).</li>
              <li>Read recent reviews carefully.</li>
              <li>Watch for too-good prices.</li>
              <li>Use credit card — chargeback protection.</li>
              <li>Get receipt before checking in.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Long stays = better deal</h3>
            <p className="text-sm text-muted-foreground">Many hosts give 20-30% discount on weekly + monthly stays. Snowbirds especially benefit. Live in different cities a month at a time. New experiences without uprooting. Cheaper than rent in many places. Senior travel revolution.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
