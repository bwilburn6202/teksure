import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Ear } from 'lucide-react';

export default function HearingTestAppsForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Hearing Test Apps for Seniors | TekSure" description="Free hearing tests on phone. Senior screening guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Ear className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Hearing Test Apps</h1>
          <p className="text-lg text-muted-foreground">Free senior screening.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Mimi Hearing Test</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Free app.</li><li>15-min test.</li><li>Headphones needed.</li><li>Senior screening.</li><li>Tracks over time.</li><li>iPhone + Android.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">SonicCloud</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Tunes phone calls.</li><li>Senior hard-of-hearing.</li><li>Custom sound profile.</li><li>Free trial.</li><li>Helps before aids.</li><li>Senior bonus.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Apple Watch test</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Headphone Audio Levels.</li><li>Track exposure.</li><li>Settings → Audio.</li><li>Senior protect remaining hearing.</li><li>Built-in iOS.</li><li>Free.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">When to see audiologist</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Test shows loss.</li><li>Family complains volume.</li><li>Senior misses conversation.</li><li>Costco free test.</li><li>Worth professional.</li><li>App = screening only.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">OTC hearing aids</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>2022+ FDA approved OTC.</li><li>$200-$1,500.</li><li>Mild-moderate loss.</li><li>Senior cheaper option.</li><li>Jabra Enhance Plus.</li><li>Lexie.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">AirPods Pro 2</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$249 FDA hearing aid.</li><li>Mild-moderate loss.</li><li>Senior discreet.</li><li>Built-in test.</li><li>Multi-purpose.</li><li>Game-changer 2024.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Free Mimi test = senior baseline</h3><p className="text-sm text-muted-foreground">Free Mimi Hearing Test app = senior baseline screening. Track yearly. If declining, see audiologist or try AirPods Pro 2 ($249 FDA approved hearing aid mild-moderate loss). OTC hearing aids 2022+ broadens options. Don&apos;t suffer in silence.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
