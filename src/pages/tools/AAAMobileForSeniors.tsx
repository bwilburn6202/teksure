import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Car } from 'lucide-react';

export default function AAAMobileForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="AAA Mobile App for Senior Drivers | TekSure" description="Get the most from AAA membership. Roadside, hotel discounts, travel for senior drivers." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Car className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">AAA Mobile</h1>
          <p className="text-lg text-muted-foreground">Maximize your AAA membership.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Membership tiers</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Classic — $65/year, basic roadside.</li>
              <li>Plus — $115/year, extended towing.</li>
              <li>Premier — $145/year, RV coverage, lockout pay.</li>
              <li>Premier worth it for full-time RVers.</li>
              <li>Plus good for most seniors.</li>
              <li>Cheaper than calling tow individually.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Request roadside via app</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Tap &quot;Request Roadside.&quot;</li>
              <li>App detects your location.</li>
              <li>Pick service: tow, fuel, jump, lockout.</li>
              <li>Track tow truck arriving on map.</li>
              <li>Get text updates.</li>
              <li>No phone tag with operators.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Discounts in app</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Hotel discounts — 10–20% off many chains.</li>
              <li>Restaurant discounts.</li>
              <li>Movie theaters.</li>
              <li>Auto repair shops + tire stores.</li>
              <li>Show app at checkout.</li>
              <li>Saves $$ over membership cost.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Travel planning</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Free trip planning still available.</li>
              <li>Print TripTik routes.</li>
              <li>AAA Travel agent — no booking fees.</li>
              <li>Cruise + tour discounts.</li>
              <li>Travel insurance available.</li>
              <li>Senior travel specialty.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">DMV services</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Some states — DMV transactions at AAA.</li>
              <li>Avoid DMV lines.</li>
              <li>License renewals.</li>
              <li>Vehicle registration.</li>
              <li>Senior-friendly alternative to DMV.</li>
              <li>Check local AAA office.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Insurance + financial</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Auto insurance through AAA.</li>
              <li>Often competitive rates.</li>
              <li>Compare with USAA + others.</li>
              <li>Member discount on insurance.</li>
              <li>Long-term member loyalty rewards.</li>
              <li>Bundle discounts.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Worth it for older cars</h3>
            <p className="text-sm text-muted-foreground">If you drive a car 10+ years old, AAA membership at $65/year is essential. One tow without coverage can be $200+. Plus the hotel discounts alone often pay for membership for senior travelers. New cars usually have manufacturer roadside, so AAA may be redundant. Compare with USAA if you&apos;re eligible — sometimes USAA is included free.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
