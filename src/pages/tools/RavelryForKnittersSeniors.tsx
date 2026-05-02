import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { CircleDashed } from 'lucide-react';

export default function RavelryForKnittersSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Ravelry for Senior Knitters | TekSure" description="Best knitting community + patterns site for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <CircleDashed className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Ravelry</h1>
          <p className="text-lg text-muted-foreground">Senior knitter heaven.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Free signup</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Ravelry.com.</li><li>Free + community-driven.</li><li>1M+ patterns.</li><li>Senior knitter mecca.</li><li>Yarn database.</li><li>Free always.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Pattern library</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Free + paid patterns.</li><li>$5-$10 typical.</li><li>Indie designers.</li><li>Senior support.</li><li>Track projects.</li><li>Best knitting site.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Stash tracker</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Track yarn collection.</li><li>Senior avoid duplicates.</li><li>Photos + details.</li><li>Free.</li><li>Find by color.</li><li>Inventory.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Project notes</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Track in-progress.</li><li>Photo finished.</li><li>Senior memory keeper.</li><li>Share friends.</li><li>Free.</li><li>Years of work documented.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Forums</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Knit groups.</li><li>Yarn discussions.</li><li>Senior community.</li><li>Pattern help.</li><li>Free.</li><li>Like-minded friends.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">App or website</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Mobile-friendly site.</li><li>No official app.</li><li>Senior phone or computer.</li><li>Bookmark login.</li><li>Free.</li><li>Works fine.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Free Ravelry = senior knitter community</h3><p className="text-sm text-muted-foreground">Free Ravelry = 1M+ patterns + yarn stash tracker + project notes + community forums. Senior knitter complete platform. Skip official app — mobile site works fine. Most senior knitting site since 2007. Trusted decades.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
