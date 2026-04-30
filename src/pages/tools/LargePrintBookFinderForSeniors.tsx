import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Type } from 'lucide-react';

export default function LargePrintBookFinderForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Large Print Books for Seniors | TekSure" description="Find large print books. Senior reading aid options." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Type className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Large Print Books</h1>
          <p className="text-lg text-muted-foreground">Easier on senior eyes.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Library large print</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Most libraries have section.</li><li>Free.</li><li>Senior friendly.</li><li>Browse + borrow.</li><li>Newer titles often.</li><li>Best place start.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Kindle adjustable</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$140 Kindle.</li><li>Any text size.</li><li>Bigger than print books.</li><li>Senior most flexible.</li><li>One device, all sizes.</li><li>Best long-term.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Thorndike Press</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Major large print publisher.</li><li>Bookstores carry.</li><li>$25-$35 per book.</li><li>Senior physical books.</li><li>Most popular titles.</li><li>Last decades.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Bookshare nonprofit</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Free for visually impaired.</li><li>Adjustable text.</li><li>Print disability proof.</li><li>Senior eligible.</li><li>Huge library.</li><li>Worth applying.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">National Library</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>NLS — free.</li><li>For visually impaired.</li><li>Audiobooks + braille.</li><li>Senior eligible.</li><li>Trusted source.</li><li>Library of Congress.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Phone reading</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Adjust text in any reading app.</li><li>Pinch to zoom.</li><li>Senior any size.</li><li>Free.</li><li>Always with you.</li><li>Most flexible.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">$140 Kindle = senior eye savior</h3><p className="text-sm text-muted-foreground">Kindle Paperwhite adjustable text any size = senior eye savior. Replaces $25 large print books. Or library section free. Bookshare/NLS free if visually impaired. Senior reading should be joy not strain. Get help.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
