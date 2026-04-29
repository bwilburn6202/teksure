import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Package } from 'lucide-react';

export default function BestBuyOpenBox() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Best Buy Open Box Deals | TekSure" description="Save 15-30% on like-new returns. Plain-English guide to Best Buy Open Box + similar refurbished programs." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Package className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Best Buy Open Box</h1>
          <p className="text-lg text-muted-foreground">15-30% off like-new electronics.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Open Box conditions</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Excellent — Certified</strong> — like new, full warranty.</li>
              <li><strong>Excellent</strong> — slight cosmetic flaws, unused, full warranty.</li>
              <li><strong>Satisfactory</strong> — slight wear, full function, full warranty.</li>
              <li><strong>Fair</strong> — visible wear, may have minor issues. Skip.</li>
              <li>Best to focus on Excellent / Excellent-Certified.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Where to find</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>BestBuy.com/openbox</strong> — searchable inventory across stores.</li>
              <li>Filter by store + condition.</li>
              <li>Online photos of actual unit.</li>
              <li>Free in-store pickup.</li>
              <li>Same return policy as new (15 days).</li>
              <li>Same Geek Squad warranty options.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best buys open-box</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>TVs</strong> — 25-40% off. Most common.</li>
              <li><strong>Laptops</strong> — 15-25% off. Reset to factory before use.</li>
              <li><strong>iPads / tablets</strong> — 20-30% off if available.</li>
              <li><strong>Major appliances</strong> — 30-50% off (cosmetic damage often only).</li>
              <li><strong>Headphones / speakers</strong> — usually like-new.</li>
              <li>SKIP: phones (privacy concerns), drones (high failure rates).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Other refurbished programs</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Apple Refurbished Store</strong> — apple.com/shop/refurbished. Like new + 1-year warranty. 15-30% off.</li>
              <li><strong>Amazon Renewed</strong> — varies in quality. Read reviews.</li>
              <li><strong>Dell Outlet</strong> — refurbished business laptops. 30-50% off.</li>
              <li><strong>Costco Outlet</strong> — refurbished electronics + furniture.</li>
              <li><strong>Manufacturer-direct refurbished</strong> always best (Apple, Dell, HP).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Apple refurbished is gold standard</h3>
            <p className="text-sm text-muted-foreground">Apple refurbished products are inspected, replaced battery + shell if needed, and come with full 1-year warranty. INDISTINGUISHABLE from new. Save 15-30%. Best deal in tech for most buyers.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
