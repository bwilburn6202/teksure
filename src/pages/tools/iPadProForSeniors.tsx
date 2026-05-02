import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Tablet } from 'lucide-react';

export default function iPadProForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="iPad for Seniors | TekSure" description="iPad models compared. Senior tablet buying guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Tablet className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">iPad for Seniors</h1>
          <p className="text-lg text-muted-foreground">Best senior tablet.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">iPad 10th gen</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$349.</li><li>Best senior value.</li><li>10.9-inch screen.</li><li>USB-C charging.</li><li>Apple Pencil 1.</li><li>Reliable for years.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">iPad Air</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$599.</li><li>M2 chip.</li><li>Faster.</li><li>Senior creative.</li><li>Photo editing.</li><li>Worth premium.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">iPad mini</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$499.</li><li>Compact.</li><li>Senior travel.</li><li>One-handed.</li><li>Older eyes harder.</li><li>Trade-off.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior wins</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Bigger screen than iPhone.</li><li>Easier reading.</li><li>FaceTime great.</li><li>Apps + games.</li><li>Senior daily companion.</li><li>Long battery.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Cellular?</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$150 extra.</li><li>$10/mo plan.</li><li>Senior travel friendly.</li><li>Or use phone hotspot.</li><li>Save $$ wifi-only.</li><li>Choice depends use.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Apple Pencil</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$80-$130.</li><li>Senior journaling.</li><li>Photo editing.</li><li>Crossword + sudoku.</li><li>Magnetic charge.</li><li>Optional.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">$349 iPad 10 = senior best value</h3><p className="text-sm text-muted-foreground">$349 iPad 10th gen = senior best tablet value. 10.9-inch easy reading. Reliable years. Skip cellular if home wifi. Apple Pencil $80 if want stylus. Better than iPhone for reading + FaceTime. Most senior daily companion.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
