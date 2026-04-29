import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen } from 'lucide-react';

const SERVICES = [
  { name: 'Shutterfly', cost: '$25-100/book', best: 'Biggest US service. Constant 50%-off coupons. Senior-friendly templates.', good: 'Best overall.' },
  { name: 'Mixbook', cost: '$30-120/book', best: 'Highest quality printing. Great editor. Frequent 40-50% sales.', good: 'Best quality.' },
  { name: 'Snapfish', cost: '$10-60/book', best: 'Cheapest acceptable quality. Good for casual books.', good: 'Best budget.' },
  { name: 'Apple Photo Books (via Project app)', cost: '$15-50', best: 'Built into iPhone Photos. AI helps pick best photos. Easy from camera roll.', good: 'Best for iPhone users.' },
  { name: 'Chatbooks', cost: '$10-15/book on subscription', best: 'Auto-creates monthly photo book from Instagram or camera roll. No effort.', good: 'Best autopilot.' },
  { name: 'Printique (Adorama)', cost: '$50-150/book', best: 'Pro-grade. Lay-flat pages. Heritage/heirloom quality.', good: 'Best gift quality.' },
];

export default function PhotoBookServices() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Photo Book Services Compared | TekSure" description="Make a beautiful photo book of your trip, year, or grandkids. Plain-English picks for Shutterfly, Mixbook, and Apple Photos." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <BookOpen className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Photo Book Services</h1>
          <p className="text-lg text-muted-foreground">Print your year. Best gift you&apos;ll give.</p>
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
            <h2 className="font-bold text-xl mb-3">Wait for the sale</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Shutterfly runs 50% off photo books constantly. Don&apos;t pay full price.</li>
              <li>Mixbook hits 40-55% off in any major holiday week.</li>
              <li>Black Friday/Cyber Monday — biggest discounts of year.</li>
              <li>Costco sometimes runs photo book discounts via Shutterfly.</li>
              <li>Apple Photo Books — no sales, but consistent prices.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Tips for a great book</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>20-40 pages is the sweet spot — readable, not overwhelming.</li>
              <li>Pick 3-5 photos per page max. White space matters.</li>
              <li>Caption photos with year + location + names. Future-you will thank present-you.</li>
              <li>Hardcover lasts decades; softcover is for cheap copies.</li>
              <li>Lay-flat binding preserves photos that span 2 pages.</li>
              <li>Order ONE first to check quality before printing 10 for family.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best book ideas</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Annual "year in review" — every December.</li>
              <li>Wedding anniversary year by year.</li>
              <li>Grandkids&apos; first year — 12 monthly photos.</li>
              <li>Big trip (Europe, cruise, road trip).</li>
              <li>"Then and now" with old family photos + recreated photos.</li>
              <li>Recipe book with photos of each dish + family memories.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Apple Photos auto-book</h3>
            <p className="text-sm text-muted-foreground">If you have iPhone — open Photos → Memories → tap any auto-generated memory → "Create a Project" → Book. iOS picks best photos, lays them out, and you can edit. Way faster than starting blank. Apple Print works seamlessly.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
