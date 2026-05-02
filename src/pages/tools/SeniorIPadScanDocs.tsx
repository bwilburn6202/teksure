import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { ScanLine } from 'lucide-react';

export default function SeniorIPadScanDocs() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Scan Documents on iPad — Senior Guide" description="Scan and email documents from iPad." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <ScanLine className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Scan Documents</h1>
          <p className="text-lg text-muted-foreground">Replace your home scanner with iPad.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Open Notes</h2><p>Tap Notes. Start a new note with the pencil-and-paper icon.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Tap the camera icon</h2><p>Above the keyboard. Pick Scan Documents from the menu.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Position the page</h2><p>Hold the iPad over the document. iPad finds edges automatically and snaps the photo.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Multi-page</h2><p>Keep scanning more pages. Tap Save when done. Notes stitches them into one PDF.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Email it</h2><p>Tap the scan in Notes. Tap share. Pick Mail. Send to a doctor, accountant, or yourself.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Sign documents</h2><p>Tap Markup. Tap the plus and pick Signature. Sign with your finger or Apple Pencil.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Scans look like a real scanner — straight edges, white background, sharp text.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
