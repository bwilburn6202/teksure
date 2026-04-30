import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Heart } from 'lucide-react';

export default function YogaForSeniorsApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Yoga for Seniors Apps | TekSure" description="Best gentle yoga apps for seniors. Free + paid options for older bodies." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Heart className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Senior Yoga</h1>
          <p className="text-lg text-muted-foreground">Gentle for older bodies.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Yoga with Adriene</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Free YouTube channel.</li><li>Most popular yoga teacher.</li><li>Many senior-friendly videos.</li><li>30-day journey series.</li><li>Beginner welcome.</li><li>Free always.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Down Dog</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>App customizes class.</li><li>Choose pace + length.</li><li>Senior-friendly options.</li><li>Free for limited.</li><li>$60/year unlimited.</li><li>Excellent quality.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Glo</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Senior + chair yoga.</li><li>$23/month.</li><li>Top-tier teachers.</li><li>Various lengths.</li><li>Senior-specific channel.</li><li>Premium quality.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Free YouTube</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Yoga With Bird — senior.</li><li>Yoga With Tim.</li><li>Eldergym — chair.</li><li>Sukasana — gentle.</li><li>Free + abundant.</li><li>Try until you click.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior modifications</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Use wall for support.</li><li>Yoga blocks — $20.</li><li>Skip what hurts.</li><li>Modify any pose.</li><li>Listen to body.</li><li>No competition.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Benefits</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Flexibility.</li><li>Balance.</li><li>Stress relief.</li><li>Better sleep.</li><li>Joint mobility.</li><li>Mind-body.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Free YouTube + $20 mat = senior yoga life</h3><p className="text-sm text-muted-foreground">Free Yoga with Adriene + $20 yoga mat = best senior yoga starter. Daily 20-30 minutes builds strength, balance, calm. Many seniors discover yoga in 60s+ and love it. Studies show prevents falls, eases arthritis. Start gentle, build slowly.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
