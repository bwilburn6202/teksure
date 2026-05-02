import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Eye } from 'lucide-react';

export default function SeniorVisionTesting() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Online Vision Tests for Seniors — TekSure" description="Quick at-home eye tests for seniors — not replacing real exams." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Eye className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Online Vision Tests</h1>
          <p className="text-lg text-muted-foreground">Quick check-ups (not replacing real exams).</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">EyeQue VisionCheck</h2><p>$30 device. Test refraction at home. Get prescription for glasses.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Warby Parker app</h2><p>FREE. Try on glasses virtually. Renew prescription online.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">1-800 Contacts</h2><p>FREE app. Renew contact prescription online.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Amsler Grid (FREE)</h2><p>Search &ldquo;Amsler Grid&rdquo; — a 1-minute home test for macular degeneration.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">When to see a doctor</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>Sudden vision change</li><li>Flashing lights</li><li>Curtain across vision</li><li>Eye pain</li><li>Annual at minimum</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Medicare coverage</h2><p>Annual diabetic eye exams covered. Cataract surgery covered.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Apps don&apos;t replace your eye doctor. Use as a backup, not main care.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
