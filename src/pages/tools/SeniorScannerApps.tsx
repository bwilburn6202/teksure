import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Scan } from 'lucide-react';

export default function SeniorScannerApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Scanner Apps for Seniors — TekSure" description="Free phone scanner apps for seniors — Apple Notes, Adobe Scan, CamScanner." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Scan className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Scanner Apps for Seniors</h1>
          <p className="text-lg text-muted-foreground">Skip the bulky scanner. Phone does it.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Apple Notes</h2><p>FREE on iPhone. Notes → camera icon → Scan Documents.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Adobe Scan</h2><p>FREE for iPhone or Android. Auto-detects edges. Saves as PDF.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Microsoft Lens</h2><p>FREE. Works with OneDrive. Best for Windows users.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Google Drive</h2><p>FREE. Drive app → +. Tap Scan. Save right to your Google account.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Use for</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>Tax documents</li><li>Insurance claims</li><li>Medical receipts</li><li>Old photos</li><li>Recipes from books</li></ul></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Tips for sharper scans</h2><p>Bright even light. No shadows. Hold phone parallel to paper.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Scanned PDFs are searchable. Type any word — finds it across all your scans.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
