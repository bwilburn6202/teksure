import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Glasses } from 'lucide-react';

export default function SubtitleGlassesForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Subtitle Glasses for Seniors | TekSure" description="XReal + smart glasses showing live captions for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Glasses className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Subtitle Glasses</h1>
          <p className="text-lg text-muted-foreground">Senior live captions.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">XReal/Nreal</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$400-$700.</li><li>Smart glasses display.</li><li>Real-time captions.</li><li>Senior hearing aid future.</li><li>USB-C connect phone.</li><li>Cool tech.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Live Caption phone</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Free iPhone Live Captions.</li><li>Hold up phone screen.</li><li>Senior current option.</li><li>Less elegant than glasses.</li><li>Works now.</li><li>Free.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Vuzix Pro</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$1,500.</li><li>Enterprise quality.</li><li>Senior premium.</li><li>Better visuals.</li><li>Newer market.</li><li>Wait for cheaper.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Future tech</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Apple Vision Pro $3,500.</li><li>Senior heavy + expensive.</li><li>Not practical now.</li><li>Wait 2-5 years.</li><li>Will improve.</li><li>Watch space.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">For now</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>iPhone Live Captions free.</li><li>InnoCaption phone calls.</li><li>Hearing aids best.</li><li>Senior current options.</li><li>Subtitle glasses 2-3 years out.</li><li>Or splurge.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Public captions</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Theater subtitle glasses.</li><li>Free at venues with.</li><li>Senior ask.</li><li>Many movie theaters.</li><li>Worth asking always.</li><li>Free.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">iPhone Live Captions = senior current</h3><p className="text-sm text-muted-foreground">Subtitle glasses $400+ promising future but not quite ready. Senior current option: free iPhone Live Captions + InnoCaption phone calls + theater glasses (free at venues with). Wait 2-3 years for affordable subtitle glasses to mature. iPhone works now.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
