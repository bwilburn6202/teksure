import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { PenTool } from 'lucide-react';

export default function SeniorIPadAdaptiveInk() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="iPad Handwriting Tools — Senior Guide" description="Use iPad for handwriting and notes." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <PenTool className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">iPad Handwriting</h1>
          <p className="text-lg text-muted-foreground">Write naturally with the Apple Pencil.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Notes app</h2><p>Free. Built-in handwriting. Search converts your handwriting to text.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. GoodNotes</h2><p>$10. Best handwriting app. Beautiful notebooks. Backup to iCloud.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Notability</h2><p>$15/year. Records audio while you write. Replay your notes.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Scribble</h2><p>iPad feature. Write in any text field. iPad converts to typed text.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Sign documents</h2><p>Mark up PDFs. Sign with finger or pencil. Email back.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Replace paper</h2><p>Many seniors love iPad notes for journals, recipe books, sermon notes.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Paperlike screen protector adds paper-like texture. Pencil glides instead of sliding.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
