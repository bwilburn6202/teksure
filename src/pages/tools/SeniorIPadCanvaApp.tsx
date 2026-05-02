import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Pencil } from 'lucide-react';

export default function SeniorIPadCanvaApp() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Canva for Senior iPad Users — TekSure" description="Make cards, posters, social posts — Canva for seniors easy design." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Pencil className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Canva for Seniors</h1>
          <p className="text-lg text-muted-foreground">Make beautiful cards.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Free version</h2><p>FREE. Plenty for senior cards, posters, invitations.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Canva Pro</h2><p>$13/month. More templates. Most seniors don&apos;t need.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Use cases</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>Birthday cards</li><li>Family newsletters</li><li>Holiday invitations</li><li>Garage sale posters</li><li>Family reunion announcements</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Templates</h2><p>500,000+ templates. Drag and drop. No design skill needed.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Print or share</h2><p>Print at home. Mail. Or share on Facebook.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Senior centers</h2><p>Many use Canva for newsletters. Volunteer skill.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Canva is the free Photoshop. 80% of design needs covered.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
