import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Building } from 'lucide-react';

export default function BecomeAirbnbHost() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Become an Airbnb Host — Guide for Seniors | TekSure" description="Empty nest? Spare room? Plain-English guide to becoming an Airbnb or VRBO host — the math, the work, and what surprises new hosts." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Building className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Become an Airbnb Host</h1>
          <p className="text-lg text-muted-foreground">Empty nest, spare room, or vacation home — earn from it.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Realistic income</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><strong>Spare bedroom in mid-size city</strong>: $300-1,000/month.</li>
              <li><strong>Whole apartment in tourist city</strong>: $1,500-5,000/month.</li>
              <li><strong>Vacation home in beach town</strong>: $2,000-15,000/month seasonal.</li>
              <li>Subtract: cleaning fees you cover, utilities, supplies, insurance, taxes, occasional damage.</li>
              <li>Net usually 50-70% of gross.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Before you list</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li><strong>Check local rules</strong> — many cities ban or restrict short-term rentals. Search "[your city] short-term rental ordinance".</li>
              <li><strong>HOA approval</strong> — required in many.</li>
              <li><strong>Special insurance</strong> — homeowners doesn\'t cover STR. Need separate STR rider ($500-2,000/yr) or comprehensive STR insurance like Proper or Slice.</li>
              <li><strong>Tax collection</strong> — many cities require 8-15% lodging tax. Airbnb collects in some, not others.</li>
              <li><strong>Smoke detectors</strong> in every bedroom + CO + fire extinguisher (required by Airbnb).</li>
              <li><strong>Outdoor camera</strong> with disclosure (Airbnb rules).</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Setup the listing</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Quality photos (hire a pro, $100-200, pays back in higher bookings).</li>
              <li>Write detailed description.</li>
              <li>Set check-in/out times.</li>
              <li>House rules — no parties, no smoking, max guests, etc.</li>
              <li>Smart lock for self-check-in (Schlage Encode, August).</li>
              <li>Welcome book in the home — Wi-Fi password, restaurant recs, instructions.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Daily work</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Clean (or hire cleaner for $80-150/turnover).</li>
              <li>Stock toiletries, toilet paper, coffee.</li>
              <li>Reply to inquiries (Airbnb expects within hours).</li>
              <li>Handle issues at any hour.</li>
              <li>Most hosts use Furnished Finder + Airbnb + VRBO simultaneously.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Co-host or property manager</h2>
            <p className="text-sm">If hosting is too much work, a co-host or property manager handles 80%+ for 15-30% of revenue. Search Airbnb co-host directory or local property management firms.</p>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Easier alternative</h3>
            <p className="text-sm text-muted-foreground">If full Airbnb feels like too much — try <strong>"home swap"</strong> (HomeExchange.com) or <strong>"long-term traveler"</strong> sites (FurnishedFinder for traveling nurses — typically 1-3 month stays, less turnover, more reliable income).</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
