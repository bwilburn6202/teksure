import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Printer } from 'lucide-react';

export default function SeniorIPadPrint() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Print from iPad — Senior Guide" description="Print photos and documents from your iPad." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Printer className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Print from iPad</h1>
          <p className="text-lg text-muted-foreground">No cables needed.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. AirPrint printer</h2><p>Most modern HP, Canon, Epson, Brother printers support AirPrint. Check the box or manual.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Same Wi-Fi</h2><p>Both iPad and printer must be on the same home Wi-Fi for printing to work.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Print a document</h2><p>Open the file. Tap the share box (square with arrow). Scroll down. Tap Print.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Pick the printer</h2><p>Tap Printer at the top of the print sheet. Pick yours from the list.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Choose copies</h2><p>Use plus and minus buttons to set how many copies. Tap Print top right.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. No AirPrint?</h2><p>Get the printer's free app — HP Smart, Canon Print, Epson iPrint. Same idea, different button.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>If printing fails, restart the printer. Most printer problems clear after a power cycle.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
