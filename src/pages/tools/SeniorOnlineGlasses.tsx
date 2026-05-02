import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Eye } from 'lucide-react';

export default function SeniorOnlineGlasses() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Online Glasses for Seniors — TekSure" description="Buy glasses online cheap — Warby Parker, Zenni, EyeBuyDirect." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Eye className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Buy Glasses Online</h1>
          <p className="text-lg text-muted-foreground">Save 50-90% vs LensCrafters.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Warby Parker</h2><p>$95-$295. Free home try-on. Most senior-friendly returns.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Zenni Optical</h2><p>$10-$50 frames. Cheapest reliable option. Progressive lenses from $30.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">EyeBuyDirect</h2><p>$20-$80. Big sales constantly. Strong warranty.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Get prescription</h2><p>Ask eye doctor for &ldquo;PD&rdquo; (pupillary distance). They legally must give your prescription.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Progressive lenses</h2><p>$60-$120 online vs $400-$800 in store. Same quality.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Try at home</h2><p>Warby ships 5 frames free. Try at home. Mail back. Buy your favorite.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Many Medicare Advantage plans include a $200/year glasses benefit. Check yours.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
