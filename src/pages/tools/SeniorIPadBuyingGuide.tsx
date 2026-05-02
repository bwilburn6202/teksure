import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Tablet } from 'lucide-react';

export default function SeniorIPadBuyingGuide() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="iPad Buying Guide for Seniors — TekSure" description="Which iPad for seniors — iPad, iPad Air, iPad Pro compared." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Tablet className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">iPad Buying Guide</h1>
          <p className="text-lg text-muted-foreground">Which iPad fits your needs?</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">iPad (10th gen)</h2><p>$349. Most seniors. Big screen. Reads books, video calls, web.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">iPad mini</h2><p>$499. Smaller. Easier one-hand. Great for reading.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">iPad Air</h2><p>$599. Faster. Good for art/sketching with Apple Pencil.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">iPad Pro</h2><p>$999+. Most seniors don&apos;t need this. Skip.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">256GB recommended</h2><p>$100 more. Don&apos;t worry about storage filling.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Cellular?</h2><p>$130 extra. Worth it if no Wi-Fi when traveling. Most don&apos;t need.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: iPad has bigger screen than iPhone — easier on senior eyes. Best tablet.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
