import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Laptop } from 'lucide-react';

export default function MacBookForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="MacBook for Senior Users | TekSure" description="Should seniors buy a MacBook? Setup, accessibility, and tips." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Laptop className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">MacBook for Seniors</h1>
          <p className="text-lg text-muted-foreground">Apple laptop guide.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Why a Mac</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Easy setup.</li><li>Less malware.</li><li>Works with iPhone.</li><li>Long battery life.</li><li>10+ year lifespan.</li><li>Senior reliable.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Best models</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>MacBook Air M3 — $999.</li><li>13&quot; or 15&quot; screen.</li><li>Battery 18 hours.</li><li>Senior travel friendly.</li><li>Refurb $750.</li><li>Worth it.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior setup</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Larger text — System Settings → Display.</li><li>Increase pointer size.</li><li>Reduce motion.</li><li>VoiceOver if needed.</li><li>Spoken Content.</li><li>Senior friendly accessibility.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Free training</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Apple Today at Apple — free.</li><li>In-store senior classes.</li><li>YouTube — Apple Support.</li><li>Library senior tech.</li><li>Apple Care call free.</li><li>Don&apos;t buy course.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Apple Care</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$199/3yr — worth it.</li><li>Spills + drops covered.</li><li>Phone support unlimited.</li><li>Genius Bar visits.</li><li>Senior peace of mind.</li><li>Recommended.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">vs Windows</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Mac more expensive.</li><li>Less malware.</li><li>Better integration with iPhone.</li><li>Long-term Apple ecosystem.</li><li>Each has pros.</li><li>Senior choice.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">$999 MacBook Air = 10-year senior laptop</h3><p className="text-sm text-muted-foreground">MacBook Air M3 ($999 or $750 refurb) lasts most seniors 10+ years. Pairs perfectly with iPhone. Less malware. 18-hour battery. Add $199 Apple Care for peace of mind. Best senior laptop investment if budget allows. Refurb option saves $$.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
