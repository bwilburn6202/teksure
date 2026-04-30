import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { ScanLine } from 'lucide-react';

export default function AdobeScanForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Adobe Scan for Senior Document Scanning | TekSure" description="Free phone scanner for seniors. Adobe Scan turns phone into scanner." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <ScanLine className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Adobe Scan</h1>
          <p className="text-lg text-muted-foreground">Phone = scanner.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">What it does</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Free Adobe app.</li><li>Photo of paper = clean PDF.</li><li>Auto-cropped + clean.</li><li>Searchable text.</li><li>Multi-page.</li><li>Senior magic.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior wins</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Tax docs to email.</li><li>Insurance forms scanned.</li><li>Receipt records.</li><li>Recipe from magazine.</li><li>Handwritten letter preserved.</li><li>Senior paper to digital.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Setup</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Free download.</li><li>Adobe ID free.</li><li>Open camera.</li><li>Hover over paper.</li><li>Auto-captures.</li><li>Senior easy.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">iPhone built-in</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Notes app — camera button.</li><li>Scan Documents.</li><li>Same effect.</li><li>No app needed.</li><li>Save to Notes.</li><li>Share as PDF.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">OCR text</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Extracts text from scan.</li><li>Search later.</li><li>Copy + paste.</li><li>Edit document.</li><li>Senior accessible.</li><li>Free with subscription.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior tips</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Good lighting essential.</li><li>Plain background.</li><li>Hold phone steady.</li><li>Multi-page for booklets.</li><li>Save to Drive/iCloud.</li><li>Senior backup.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Phone scanner replaces $200 scanner</h3><p className="text-sm text-muted-foreground">Free Adobe Scan or iPhone Notes scanner replaces $200 desktop scanner. Tax docs → email. Receipts → record. Recipes → save. Handwritten letters → preserve forever. Many seniors digitize 30 years of files in weeks. Most under-used senior phone superpower.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
