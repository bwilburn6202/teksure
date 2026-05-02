import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Sparkles } from 'lucide-react';

export default function SeniorBraceMonitorApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Knee Brace Apps for Seniors — TekSure" description="Knee braces, ankle braces, back braces — what helps senior arthritis." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Sparkles className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Senior Braces</h1>
          <p className="text-lg text-muted-foreground">Support that helps.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Knee sleeve</h2><p>$25. Compression. Reduces arthritis pain. Most seniors wear.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Hinged knee brace</h2><p>$50-$150. After surgery or injury. Stabilizes more.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Ankle brace</h2><p>$30. Lace-up. Prevents rolled ankles. Fall reduction.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Back brace</h2><p>$50. Lower back support. Mixed evidence. May weaken muscles long-term.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Medicare</h2><p>Often covers braces with prescription.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Compression socks</h2><p>$20. Different from braces. Help circulation in legs.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Knee sleeve $25 helps senior arthritis without doctor needed.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
