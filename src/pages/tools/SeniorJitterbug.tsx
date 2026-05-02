import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Phone } from 'lucide-react';

export default function SeniorJitterbug() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Jitterbug Phones for Seniors — TekSure" description="Are Jitterbug phones worth it? Senior-friendly phones from Lively reviewed." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Phone className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Jitterbug Phones</h1>
          <p className="text-lg text-muted-foreground">Big buttons. Bigger screens. Real urgent help.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Jitterbug Flip2</h2><p>$100. Old-style flip phone. Big buttons. Loud speaker.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Jitterbug Smart4</h2><p>$150. Big icon smartphone. Simplified menu. Built-in Urgent Response.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Lively service</h2><p>Plans from $20/month. Urgent Response button calls 24/7 trained operators.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Health &amp; Safety</h2><p>$25/month adds nurse access and fall detection (Smart4 only).</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Alternatives</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>iPhone with Senior Mode</li><li>Samsung Easy Mode</li><li>Consumer Cellular Iris Connect</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Honest review</h2><p>Good for seniors who don&apos;t want to learn smartphones. iPhone/Samsung often more value.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Try a regular smartphone with Easy Mode first. Often does the same job.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
