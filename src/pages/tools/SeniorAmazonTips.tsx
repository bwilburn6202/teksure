import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { ShoppingCart } from 'lucide-react';

export default function SeniorAmazonTips() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Amazon Tips for Seniors — TekSure" description="Shop Amazon safely as a senior — Prime perks, return tricks, scam alerts." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <ShoppingCart className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Amazon Tips for Seniors</h1>
          <p className="text-lg text-muted-foreground">Shop smarter. Avoid scams.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Prime savings</h2><p>$139/year. Free 2-day shipping, Prime Video, Photos. Often pays for itself.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">EBT or Medicaid? Save half</h2><p>Prime Access is $6.99/month — same benefits.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Read reviews</h2><p>Filter to &ldquo;Verified Purchase&rdquo; only. Skim 1-star reviews for issues.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Returns</h2><p>30 days, free, no box needed. Drop at Whole Foods, Kohl&apos;s, or UPS.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Common scams</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>&ldquo;Your account suspended&rdquo; emails</li><li>Fake order confirmations</li><li>Calls from &ldquo;Amazon Security&rdquo;</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Always check</h2><p>Open Amazon app yourself. Real notices appear in Account → Messages.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Subscribe &amp; Save knocks 5-15% off paper goods, batteries, vitamins.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
