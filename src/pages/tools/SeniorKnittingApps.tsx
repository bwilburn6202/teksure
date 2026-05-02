import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

export default function SeniorKnittingApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Knitting Apps for Seniors — Senior Guide" description="Track patterns and knit better with apps." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Star className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Knitting Apps</h1>
          <p className="text-lg text-muted-foreground">Track stitches, save patterns.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Ravelry</h2><p>Free. Largest knitting community. Thousands of patterns.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Knit Companion</h2><p>$15/year. Track row counts. Auto-mark progress in PDFs.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Row Counter</h2><p>Free. Phone replaces clicker. Tap each row.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Stash management</h2><p>Track yarn at home. Stop buying duplicates.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. YouTube tutorials</h2><p>Search any stitch. Free video help for tricky techniques.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Knit-along communities</h2><p>Find Knit-Along (KAL) groups on Ravelry or Facebook. Knit together online.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Knitting reduces stress. Watching numbers go down on a row counter is satisfying for the brain.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
