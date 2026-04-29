import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Image } from 'lucide-react';

const SERVICES = [
  { name: 'Walgreens / CVS / Walmart Photo', cost: '$0.30-$0.50/print', best: 'Same-day pickup. Most convenient. Order from app, pick up in 1-2 hours.', good: 'Best for quick prints.' },
  { name: 'Costco Photo', cost: '$0.13-0.20/print (membership)', best: 'Cheapest 4×6 prints anywhere. Great quality.', good: 'Best price.' },
  { name: 'Shutterfly', cost: '$0.10-0.40/print', best: 'Best photo books, cards, calendars, mugs. Heavy coupons.', good: 'Sign up for emails — 50% codes weekly.' },
  { name: 'Mixbook', cost: 'Premium', best: 'Higher quality photo books. More design control.', good: 'Best photo books.' },
  { name: 'Snapfish', cost: 'Comparable to Shutterfly', best: 'Good for general printing.', good: 'Alternative to Shutterfly.' },
  { name: 'Apple Photos prints (Mac)', cost: 'Print orders shipped', best: 'Beautiful design. Order from inside Photos app on Mac.', good: 'Best for Apple users.' },
  { name: 'Jacquie Lawson', cost: '$24/year', best: 'Beautiful animated email cards. Anniversary, birthday, sympathy.', good: 'Best digital greeting cards.' },
  { name: 'Paperless Post', cost: 'Free with limits', best: 'Custom invitations and cards online.', good: 'Free option for invites.' },
];

export default function PhotoPrintAndCards() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Photo Prints & Holiday Cards — Shutterfly, Costco, Snapfish | TekSure" description="Print photos, make holiday cards, photo books, mugs and calendars. Plain-English picks for the cheapest and best photo services." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Image className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Photo Print & Holiday Cards</h1>
          <p className="text-lg text-muted-foreground">Real prints, custom mugs, calendars, holiday cards — done online.</p>
        </div>

        <div className="space-y-3 mb-6">
          {SERVICES.map(s => (
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
            <h2 className="font-bold text-xl mb-3">Best gift ideas</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Photo book of the year</strong> — Shutterfly hardcover $30-50. Family treasure.</li>
              <li><strong>Photo calendar</strong> — $20. 12 family photos, one per month.</li>
              <li><strong>Custom mug with grandkids\' faces</strong> — $15.</li>
              <li><strong>Canvas of family photo</strong> — $25-50. Hangs over fireplace.</li>
              <li><strong>Holiday cards with photo</strong> — Shutterfly 25 cards for $25 with coupon.</li>
              <li><strong>Photo throw blanket</strong> — surprisingly cheap and beloved.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Holiday card tips</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Pick a photo by mid-October.</li>
              <li>Order in early November for early-bird discount + comfortable mailing time.</li>
              <li>Look for "free shipping" + "50% off" combo (Shutterfly does this).</li>
              <li>Order envelopes + return-address printing — saves the writing.</li>
              <li>Consider Jacquie Lawson digital cards for far-away friends — animated, beautiful, no postage.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Quick Tip</h3>
            <p className="text-sm text-muted-foreground">Sign up for Shutterfly emails. Wait 1-2 weeks. They send 50% off coupons consistently. NEVER pay full price.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
