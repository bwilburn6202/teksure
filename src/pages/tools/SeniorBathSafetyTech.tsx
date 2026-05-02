import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Droplets } from 'lucide-react';

export default function SeniorBathSafetyTech() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Bath Safety Tech for Seniors — TekSure" description="Walk-in tubs, shower seats, grab bars, smart water — bath safety." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Droplets className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Bath Safety Tech</h1>
          <p className="text-lg text-muted-foreground">#1 fall location at home.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Grab bars</h2><p>$30. Install in shower and by toilet. Major fall reduction.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Shower seat</h2><p>$30-$80. Safer for long showers. Drive Medical popular.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Walk-in tub</h2><p>$5,000-$20,000. Easier entry. Some Medicare Advantage covers partial.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Smart water shut-off</h2><p>$500. Detects flooding. Auto-shuts main water.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Anti-slip mat</h2><p>$15. Suction cups. Way safer than wet tile.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Bathroom phone</h2><p>Waterproof phone holder. Reach phone easier in fall.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: $50 grab bars + $30 mat + $30 seat = 80% safer bathroom for seniors.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
