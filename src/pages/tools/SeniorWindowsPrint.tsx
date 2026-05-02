import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Printer } from 'lucide-react';

export default function SeniorWindowsPrint() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Print from Windows — Senior Guide" description="Print documents and photos from your PC." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Printer className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Print from Windows</h1>
          <p className="text-lg text-muted-foreground">Documents, photos, web pages.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Add a printer</h2><p>Settings, Bluetooth & devices, Printers & scanners. Click Add device. Pick yours.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Print a document</h2><p>Press Ctrl + P. Pick the printer. Click Print.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Print preview</h2><p>Always check preview first. Saves wasted ink and paper.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Number of copies</h2><p>Use the copies box to print 1, 2, or more at once.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Print to PDF</h2><p>Pick Microsoft Print to PDF as your printer. Saves a file you can email instead of printing.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Stuck job</h2><p>Open Settings, Printers, your printer. Open queue. Cancel the stuck job and try again.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>If printing fails, restart the printer and PC. Solves most printer problems.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
