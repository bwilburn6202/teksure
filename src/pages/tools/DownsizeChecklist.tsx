import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Home } from 'lucide-react';

export default function DownsizeChecklist() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Senior Downsizing Checklist | TekSure" description="3,000 sq ft to 1,000. Plain-English checklist for downsizing — what to keep, sell, donate, toss." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Home className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Senior Downsize Checklist</h1>
          <p className="text-lg text-muted-foreground">3 months. Manageable.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">90 days out</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Measure new place. Get floor plan.</li>
              <li>What furniture WILL fit? Mark on plan.</li>
              <li>Take photos of every room currently.</li>
              <li>Hire pro organizer if overwhelmed ($300-1,500).</li>
              <li>Tell adult kids — they can claim items.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">60 days out</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Sort one room at a time.</li>
              <li>4 piles: Keep, Sell, Donate, Toss.</li>
              <li>Hire estate sale company ($500-2,000) — they handle ALL of "Sell".</li>
              <li>Or sell on Facebook Marketplace, Craigslist, eBay.</li>
              <li>Schedule donation pickup — Salvation Army, Goodwill.</li>
              <li>Schedule junk removal — 1-800-Got-Junk, College Hunks.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">30 days out</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Final pass — every closet, drawer, cabinet.</li>
              <li>Estate sale weekend.</li>
              <li>Movers booked.</li>
              <li>Address change: USPS, Social Security, banks, insurance, voter registration, magazines, family.</li>
              <li>Cancel utilities at old, set up at new.</li>
              <li>Pack essentials box — meds, toiletries, 1 week clothes.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Hardest decisions</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Mom&apos;s china (sentimental, no one wants).</li>
              <li>Dad&apos;s tools (big, useful, no buyer).</li>
              <li>30 years of family photos (digitize first — see /tools/scan-old-photos).</li>
              <li>Books (donate to library).</li>
              <li>Wedding dress (keep one, donate rest).</li>
              <li>Kids&apos; old stuff (give them ONE chance + ship if they want).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Senior Move Manager</h3>
            <p className="text-sm text-muted-foreground">National Association of Senior Move Managers (nasmm.org) — pros who specialize in senior downsizing. They sort, organize, sell, set up new home. $1,500-5,000. Worth it for many. Especially big homes.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
