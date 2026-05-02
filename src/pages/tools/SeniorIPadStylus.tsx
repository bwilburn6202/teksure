import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Pencil } from 'lucide-react';

export default function SeniorIPadStylus() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="iPad Stylus for Seniors — Senior Guide" description="Pick the right stylus for iPad." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Pencil className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">iPad Stylus</h1>
          <p className="text-lg text-muted-foreground">Write naturally on your iPad.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Apple Pencil USB-C</h2><p>$79. Works with most newer iPads. Most affordable Apple option.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Apple Pencil 2nd Gen</h2><p>$129. Magnetic charging. Pressure sensitive. For iPad Pro and Air.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Logitech Crayon</h2><p>$70. Great for handwriting in Notes. Not pressure sensitive.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Cheap stylus</h2><p>$10-20 capacitive styluses work for basic tapping. Less precise.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Best uses</h2><p>Handwriting in Notes. Marking up PDFs. Drawing in Procreate.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Charging</h2><p>Apple Pencil 2 charges magnetically on iPad. Easy to remember.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Replace pencil tips when worn ($10/4-pack). Sharper writing.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
