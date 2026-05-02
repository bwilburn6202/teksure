import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Pencil } from 'lucide-react';

export default function ApplePencilForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Apple Pencil for Seniors | TekSure" description="iPad stylus for senior journaling, drawing, signatures." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Pencil className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Apple Pencil</h1>
          <p className="text-lg text-muted-foreground">Senior iPad stylus.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Models</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Apple Pencil USB-C — $80.</li><li>Pencil 2nd gen — $130.</li><li>Pencil Pro — $130.</li><li>Senior pick by iPad model.</li><li>Worth basic.</li><li>Compatibility check.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior wins</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Sign documents.</li><li>Journal handwriting.</li><li>Crossword + sudoku.</li><li>Digital painting.</li><li>Senior arthritis-friendly grip.</li><li>Markup PDFs.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Sign documents</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>PDF + Markup.</li><li>Apple Pencil signs.</li><li>Saves printer trip.</li><li>Senior easy.</li><li>Free with iPad.</li><li>Realistic ink.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Notes app</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Handwrite notes.</li><li>Convert to text.</li><li>Senior natural.</li><li>Free.</li><li>Search handwriting.</li><li>Magic.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Cheap alternative</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Logitech Crayon $50.</li><li>Same iPad function.</li><li>Senior cheap option.</li><li>Less features.</li><li>Worth trying.</li><li>Apple-approved.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Tips</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Tip wears down.</li><li>$15 replacement.</li><li>Don&apos;t lose.</li><li>Magnetic charge.</li><li>Senior care.</li><li>Worth replacements.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">$80 Apple Pencil = senior signature tool</h3><p className="text-sm text-muted-foreground">$80 Apple Pencil USB-C = senior iPad signature + handwriting + crossword. Sign PDFs without printer. Notes app converts handwriting to text. Or $50 Logitech Crayon cheaper alternative. Most senior iPad accessory upgrade.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
