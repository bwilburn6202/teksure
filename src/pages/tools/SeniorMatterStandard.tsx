import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Layers } from 'lucide-react';

export default function SeniorMatterStandard() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Matter Smart Home — Senior Guide" description="Why Matter is the new smart home standard." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Layers className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Matter Standard</h1>
          <p className="text-lg text-muted-foreground">Smart devices that just work.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. What it is</h2><p>New standard. Devices work across Apple, Google, Amazon, Samsung. Future-proof.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Look for the logo</h2><p>Box says Matter compatible. Same device works with Alexa, Google, and Apple.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Why it matters</h2><p>Switch ecosystems anytime. No re-buying lights when you change phone brands.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Hub helps</h2><p>HomePod, Amazon Echo, Google Nest hub controls Matter from anywhere.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Common categories</h2><p>Lights, plugs, thermostats, locks, sensors, blinds. More joining quickly.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Older devices</h2><p>Pre-Matter devices still work. Matter only matters for new buys.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Buying smart home for the first time? Stick to Matter. Worth a tiny premium.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
