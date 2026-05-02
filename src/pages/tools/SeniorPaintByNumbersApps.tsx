import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Pencil } from 'lucide-react';

export default function SeniorPaintByNumbersApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Paint by Numbers Apps for Seniors — TekSure" description="Digital paint-by-numbers — Happy Color, Pixel Art for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Pencil className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Paint by Numbers</h1>
          <p className="text-lg text-muted-foreground">Calming. Creative. No skill needed.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Happy Color</h2><p>FREE. Most popular. New images daily.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Pixel Art</h2><p>FREE. Bigger pixels. Easier on eyes.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Real kits</h2><p>$15-$30 from Amazon. Real paint. Real canvas. Hang finished art.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Why for seniors</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>Reduces anxiety</li><li>Improves focus</li><li>Sense of accomplishment</li><li>No artistic skill needed</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Senior centers</h2><p>Many host paint groups. Free supplies. Social.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Sip and Paint</h2><p>$30-$50. Local studios. Senior-friendly nights. Wine optional.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: 30-min painting daily reduces stress. Real meditation alternative.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
