import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Tablet } from 'lucide-react';

export default function SeniorAndroidTablets() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Android Tablets for Seniors — TekSure" description="Samsung Galaxy Tab, Lenovo, Amazon Fire — Android tablets for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Tablet className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Android Tablets</h1>
          <p className="text-lg text-muted-foreground">Cheaper iPad alternatives.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Samsung Galaxy Tab A9+</h2><p>$220. Best mid-range Android tablet. Good build.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Amazon Fire HD 10</h2><p>$140. Cheap. Best for reading and Prime Video.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Lenovo Tab P11</h2><p>$280. Premium feel at lower price.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">When Android tablet</h2><p>If you have Android phone — apps share between. Saves money.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">When iPad better</h2><p>If you have iPhone, Apple Watch, etc. — iPad easier.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Easy Mode (Samsung)</h2><p>Settings → Display → Easy Mode. Big icons for seniors.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Fire HD 10 ($140) is plenty for most senior daily uses.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
