import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Eye } from 'lucide-react';

export default function SeniorCataractApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Cataract Surgery for Seniors — TekSure" description="Cataract surgery prep — Medicare covers. Lens choices explained." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Eye className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Cataract Surgery</h1>
          <p className="text-lg text-muted-foreground">Most common senior surgery. 96% success.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Medicare covers</h2><p>Standard lens fully covered. Premium lens $1,000-$3,000 out of pocket.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Multifocal lens</h2><p>$1,500-$3,000 extra. Reading + distance both. Often no glasses needed.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Toric lens</h2><p>For astigmatism. $1,000-$2,000 extra. Reduces glasses dependency.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Recovery</h2><p>1-2 weeks. Eye drops 4-6 weeks. Most see clearly within days.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Both eyes</h2><p>1-2 weeks apart typically. Some surgeons same day.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Don&apos;t delay</h2><p>Putting off makes surgery harder. Drive home risky with cataracts.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Most seniors say cataract surgery transforms their life. Don&apos;t wait.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
