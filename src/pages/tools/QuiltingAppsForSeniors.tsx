import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Layers } from 'lucide-react';

export default function QuiltingAppsForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Quilting Apps for Seniors | TekSure" description="Quilt design + tracking apps for senior quilters." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Layers className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Quilting Apps</h1>
          <p className="text-lg text-muted-foreground">Senior quilters.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Robert Kaufman Kona</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Free fabric color picker.</li><li>340+ Kona colors.</li><li>Senior plan quilt.</li><li>Match fabric.</li><li>Free.</li><li>Quilter favorite.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Block Fab</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$5 quilt block library.</li><li>Senior quick reference.</li><li>1000s blocks.</li><li>Calculate yardage.</li><li>iPhone + iPad.</li><li>Worth small price.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">EQ8 software</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$240 design software.</li><li>Senior design custom quilts.</li><li>Calculates fabric.</li><li>Mac + Windows.</li><li>Worth serious quilters.</li><li>Premium.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Yardage calculator</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Free apps.</li><li>How much fabric needed.</li><li>Senior avoid waste.</li><li>Save $.</li><li>Free.</li><li>Essential.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Quilt finder</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Free patterns.</li><li>Pinterest abundant.</li><li>YouTube tutorials.</li><li>Senior project ideas.</li><li>Free.</li><li>Don&apos;t pay patterns.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Cricut + sewing</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Cricut Maker 3 cuts fabric.</li><li>Senior precision.</li><li>$400 worth quilting heavy.</li><li>Pattern cuts.</li><li>Save tedium.</li><li>Time saver.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Free Pinterest + Kaufman = senior quilter</h3><p className="text-sm text-muted-foreground">Free Pinterest patterns + Robert Kaufman color picker app + free YouTube tutorials = senior quilter complete. $5 Block Fab for block library. Skip EQ8 $240 unless heavy designer. Cricut Maker 3 cuts fabric if budget. Free abundant.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
