import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Tablet } from 'lucide-react';

export default function SeniorTabletStands() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Tablet Stands for Seniors — TekSure" description="Best tablet stands and holders — bedside, kitchen, hands-free reading." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Tablet className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Tablet Stands</h1>
          <p className="text-lg text-muted-foreground">Hands-free for video calls and reading.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Lamicall stand</h2><p>$15. Adjustable angle. Most popular. Senior-friendly.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Floor stand</h2><p>$30. Tall stand for couch/bed. Read or video call hands-free.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Gooseneck holder</h2><p>$25. Clamps to bed/table. Bend any direction. Comfortable reading.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Kitchen stand</h2><p>$15. Holds tablet upright on counter. Follow recipe videos.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Wall mount</h2><p>$30. Mount in kitchen/garage. Space-saving.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Magic Keyboard (iPad)</h2><p>$300. iPad becomes mini-laptop. Some seniors love.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Floor stand near your favorite chair = best $30 senior tech upgrade.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
