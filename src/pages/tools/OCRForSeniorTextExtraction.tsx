import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Type } from 'lucide-react';

export default function OCRForSeniorTextExtraction() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="OCR Text Extraction for Seniors | TekSure" description="Pull text from photos + scans. Free OCR for senior daily life." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Type className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">OCR Text Extract</h1>
          <p className="text-lg text-muted-foreground">Photo to editable text.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">iPhone Live Text</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Built-in iOS 15+.</li><li>Camera on text.</li><li>Yellow box appears.</li><li>Tap → Copy.</li><li>Paste anywhere.</li><li>Senior magic.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">From photos</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Open Photos.</li><li>Long-press text in photo.</li><li>Selectable like editable.</li><li>Copy + paste.</li><li>Senior daily use.</li><li>Free + powerful.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior uses</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Wifi password from sticker.</li><li>Address from envelope.</li><li>Recipe from book.</li><li>Phone number from sign.</li><li>Pill bottle ingredients.</li><li>No retyping.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Google Lens (Android)</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Same feature.</li><li>Camera or photo.</li><li>Translate too.</li><li>Free.</li><li>Senior use daily.</li><li>Built into Android.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Translation</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Foreign menu.</li><li>Camera = English.</li><li>Travel game-changer.</li><li>Free.</li><li>Senior travel.</li><li>iPhone or Google Lens.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Watch outs</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Handwriting harder.</li><li>Bad photo = bad text.</li><li>Verify accuracy.</li><li>Good light essential.</li><li>Senior critical.</li><li>Best for printed text.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Free magic = senior typing eliminator</h3><p className="text-sm text-muted-foreground">iPhone Live Text + Google Lens free OCR = no more retyping. Wifi passwords, addresses, recipes — point camera, copy, done. Plus instant translation of foreign signs/menus. Most under-used senior phone feature. Daily life upgrade.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
