import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Sparkles } from 'lucide-react';

export default function SeniorCompressionBoots() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Compression Boots for Seniors — TekSure" description="Compression therapy boots for seniors — circulation, edema, recovery." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Sparkles className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Compression Boots</h1>
          <p className="text-lg text-muted-foreground">Better circulation. Reduce swelling.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Normatec 3</h2><p>$700. Top-tier. App-controlled. Used by athletes and seniors.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Renpho LegPro</h2><p>$160. Budget. Real benefits at lower price.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Best for</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>Edema (swollen ankles)</li><li>Tired legs after standing</li><li>Poor circulation</li><li>Diabetes (consult doctor)</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Medicare</h2><p>If doctor prescribes for lymphedema or vascular issues, may be covered.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Cheap alternative</h2><p>Compression socks $20. Real benefits for seniors all day.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Talk to doctor</h2><p>If swelling is new or one-sided. Could indicate blood clot.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: 20 minutes daily reduces swelling for many seniors.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
