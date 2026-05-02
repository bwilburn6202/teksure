import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { FileText } from 'lucide-react';

export default function SeniorPDFApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="PDF Apps for Seniors — TekSure" description="Sign forms, fill out PDFs, scan docs — best PDF apps for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <FileText className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">PDF Apps for Seniors</h1>
          <p className="text-lg text-muted-foreground">Sign forms. Fill PDFs. Skip the printer.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Adobe Acrobat Reader</h2><p>FREE. Most reliable. Works on every device.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Apple Files (iPhone)</h2><p>FREE. Open any PDF. Sign with finger. Save back.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Sign &amp; send</h2><p>Open PDF in Mail. Tap markup pen. Add signature. Tap Send.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">DocuSign</h2><p>If form requires it. Free for receivers. Legal e-signature.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Scan paper to PDF</h2><p>Apple Notes → camera → Scan Documents. Free, sharp results.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Combine PDFs</h2><p>Adobe Acrobat online ($10/month) or free ilovepdf.com.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Save your signature once in Apple Mail. Tap to insert in any future PDF.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
