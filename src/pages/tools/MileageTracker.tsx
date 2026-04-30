import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { MapPinned } from 'lucide-react';

const APPS = [
  { name: 'MileIQ', cost: 'Free 40 trips/mo; $6/mo unlimited', best: 'Auto-detects driving and lets you swipe trips as Business or Personal. Most popular.', good: 'Best for self-employed, gig drivers.' },
  { name: 'Stride', cost: 'FREE', best: 'Free unlimited mileage tracking for gig workers. Insurance app too.', good: 'Best free option for gig drivers.' },
  { name: 'Everlance', cost: 'Free 30 trips/mo; $8/mo', best: 'Auto-tracks plus expenses + receipts.', good: 'Best for full freelance bookkeeping.' },
  { name: 'TripLog', cost: 'Free; $6/mo Pro', best: 'Most accurate auto-detection. Solid for serious mileage logging.', good: 'Best for high-mile drivers.' },
  { name: 'Hurdlr', cost: 'Free; $8/mo Pro', best: 'Mileage + invoices + tax estimates for self-employed.', good: 'Best small-business pick.' },
  { name: 'Notebook', cost: 'FREE', best: 'Old-school. Date, mileage, purpose. Works fine.', good: 'Always reliable.' },
];

export default function MileageTracker() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Mileage Tracker Apps — MileIQ, Stride | TekSure" description="Drive for work, charity, or medical? Track mileage automatically and deduct on taxes. Plain-English picks." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <MapPinned className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Mileage Tracker</h1>
          <p className="text-lg text-muted-foreground">Auto-tracks every drive. Saves money on taxes.</p>
        </div>

        <Card className="mb-6 bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <h2 className="font-bold mb-2">2025 IRS mileage rates</h2>
            <ul className="text-sm list-disc pl-5">
              <li><strong>Business:</strong> 70¢/mile.</li>
              <li><strong>Medical or moving:</strong> 21¢/mile.</li>
              <li><strong>Charitable:</strong> 14¢/mile.</li>
            </ul>
            <p className="text-sm mt-2">A retiree volunteering 100 miles/month for charity = $168/year deduction. A self-employed retiree driving 5,000 business miles = $3,500 deduction.</p>
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
                <p className="text-sm">{a.best}</p>
                <p className="text-sm text-muted-foreground">{a.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What to track for taxes</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Date</strong> of trip.</li>
              <li><strong>Starting and ending location</strong>.</li>
              <li><strong>Miles driven</strong>.</li>
              <li><strong>Purpose</strong> (medical visit, charity drive, business meeting).</li>
              <li><strong>Receipts for tolls and parking</strong> — separate deductible.</li>
            </ul>
            <p className="text-sm mt-2">IRS requires "contemporaneous" log — written at time of travel, not reconstructed later. Apps do this automatically.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Volunteer driving deductions</h2>
            <p className="text-sm">Drive for Meals on Wheels, church, Red Cross? You can deduct 14¢/mile if you itemize. Save documentation that you drove for the charity (the charity will provide a confirmation letter).</p>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Best free path</h3>
            <p className="text-sm text-muted-foreground"><strong>Stride</strong> for gig drivers. <strong>Notebook + monthly Google Maps history printout</strong> for occasional. <strong>MileIQ free</strong> if 40 trips/month is enough.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
