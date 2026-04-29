import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Wrench } from 'lucide-react';

const APPS = [
  { name: 'CARFAX Car Care', cost: 'FREE', best: 'Tracks oil changes, repairs, recall alerts. Pulls data from your VIN.', good: 'Best free option, tied to CARFAX history.' },
  { name: 'Fuelly', cost: 'FREE', best: 'Track fuel economy across fills. Spot when MPG drops (signal of needed maintenance).', good: 'Best for tracking gas costs.' },
  { name: 'AUTOsist', cost: '$5/mo or $40/yr', best: 'Detailed records — receipts, photos, dates. Multiple vehicles.', good: 'Best for serious record-keeping.' },
  { name: 'Drivvo', cost: 'Free; $20/yr Pro', best: 'Maintenance, fuel, and expense tracking. Solid free version.', good: 'Best free Android pick.' },
  { name: 'Your car\'s app', cost: 'FREE', best: 'Most modern cars (FordPass, MyChevrolet, Toyota app, etc.) track service automatically.', good: 'Already have it; just install.' },
  { name: 'Spreadsheet', cost: 'FREE', best: 'Old-fashioned Google Sheet with date, mileage, what was done, who did it, cost.', good: 'Most reliable long-term.' },
];

export default function CarMaintenanceTracker() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Car Maintenance Tracker — CARFAX, Fuelly, AUTOsist | TekSure" description="Keep car records that increase resale value and prevent missed maintenance. Plain-English picks for car maintenance tracking apps." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Wrench className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Car Maintenance Tracker</h1>
          <p className="text-lg text-muted-foreground">Records that prove the car was loved — boosts resale by $1,000+.</p>
        </div>

        <Card className="mb-6 bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <h2 className="font-bold mb-2">Why track</h2>
            <ul className="text-sm list-disc pl-5">
              <li>Documented maintenance increases resale value $500-1,500.</li>
              <li>Knowing your last oil change prevents over-paying jiffy lubes.</li>
              <li>Catches problems early — slow MPG drop signals needed tune-up.</li>
              <li>Useful for taxes (mileage, work-related expense).</li>
            </ul>
          </CardContent>
        </Card>

        <div className="space-y-3 mb-6">
          {APPS.map(a => (
            <Card key={a.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{a.name}</h3>
                  <span className="text-sm font-semibold text-primary">{a.cost}</span>
                </div>
                <p className="text-sm mb-1">{a.best}</p>
                <p className="text-sm text-muted-foreground">{a.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What to track</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Oil changes — every 5,000-7,500 miles for most cars.</li>
              <li>Tire rotation — every 5,000-7,500 miles.</li>
              <li>Tire replacement — every 30,000-60,000 miles depending on tread wear.</li>
              <li>Brake pads — every 30,000-70,000 miles.</li>
              <li>Battery — every 4-6 years.</li>
              <li>Transmission fluid — every 60,000-100,000 miles.</li>
              <li>Coolant flush — every 50,000 miles.</li>
              <li>Spark plugs — every 30,000-100,000 miles depending on type.</li>
              <li>Cabin air filter — yearly.</li>
              <li>Engine air filter — every 15,000-30,000 miles.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Save receipts</h2>
            <p className="text-sm">Take a photo of every service receipt. Store in a "Car" album in your phone OR upload to your tracking app. When selling, you can show 5-10 years of records.</p>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Recall checking</h3>
            <p className="text-sm text-muted-foreground">Every 6 months, check <strong>nhtsa.gov/recalls</strong> with your VIN. Open recalls are FREE to fix at any dealer (regardless of who did the work).</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
