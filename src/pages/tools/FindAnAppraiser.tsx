import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Gem } from 'lucide-react';

export default function FindAnAppraiser() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Find an Appraiser — Jewelry, Art, Antiques | TekSure" description="Need to know what your jewelry, art, or antiques are worth? Plain-English guide to certified appraisers — for insurance, estates, or selling." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Gem className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Find an Appraiser</h1>
          <p className="text-lg text-muted-foreground">Know what it\'s worth. The honest way.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why you might need one</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><strong>Insurance scheduling</strong> — to insure jewelry / art for full value.</li>
              <li><strong>Estate</strong> — fair market value for taxes / division.</li>
              <li><strong>Donation</strong> — IRS requires appraisal for donations over $5,000.</li>
              <li><strong>Selling</strong> — know what something\'s worth before consigning.</li>
              <li><strong>Divorce / property division</strong>.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Find a certified appraiser</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>American Society of Appraisers (appraisers.org)</strong> — biggest. Search by specialty (jewelry, fine art, antiques, machinery).</li>
              <li><strong>Appraisers Association of America (appraisersassociation.org)</strong> — for fine art + decorative.</li>
              <li><strong>International Society of Appraisers (isa-appraisers.org)</strong> — broad specialties.</li>
              <li><strong>For jewelry specifically</strong> — Look for GIA-certified gemologist (GG credential).</li>
              <li><strong>For art</strong> — must be specialist in the artist or era.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Cost</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>By the hour: $100-400/hr.</li>
              <li>Single piece (jewelry): $50-300 per appraisal.</li>
              <li>Full estate: $1,500-5,000+.</li>
              <li>NEVER pay percentage of appraised value (unethical).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Two values they\'ll quote</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Replacement value (insurance)</strong> — what it would cost to replace.</li>
              <li><strong>Fair market value (selling)</strong> — what it would actually sell for.</li>
              <li>These differ by 30-70%! Insurance is much higher.</li>
            </ul>
            <p className="text-sm mt-2">Use replacement for insurance. Use fair market for actual selling decisions.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Free options to start</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><strong>WorthPoint.com</strong> — paid database of past auction prices. Often free trial.</li>
              <li><strong>eBay "sold" filter</strong> — search item, filter "Sold listings" — REAL prices.</li>
              <li><strong>Heritage Auctions free archives</strong> — past sales of high-end items.</li>
              <li><strong>Sotheby\'s + Christie\'s past auctions</strong> — free price archives.</li>
              <li><strong>"Antiques Roadshow"</strong> — has hosting in many cities for free quick valuations.</li>
              <li><strong>Local pawn shops</strong> — quick low-ball estimate (they pay 30-50% of retail).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Avoid these</h3>
            <p className="text-sm text-muted-foreground">"Buy your gold" mailers and TV ads — pay 30-50% of value. Estate buyout services that come to your home — same. Get certified appraisal first, THEN sell to top venue (Sotheby\'s, Christie\'s, eBay, Etsy, or local auction).</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
