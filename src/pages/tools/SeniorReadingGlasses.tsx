import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Eye } from 'lucide-react';

export default function SeniorReadingGlasses() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Reading Glasses for Seniors — TekSure" description="Best reading glasses for seniors — drug store, prescription, computer." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Eye className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Reading Glasses for Seniors</h1>
          <p className="text-lg text-muted-foreground">Pick the right pair.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Drug store</h2><p>$15-$30. Plenty for most. CVS, Walgreens. Try several strengths.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Computer glasses</h2><p>+0.50 less than reading glasses. For 24-inch screens.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Prescription progressives</h2><p>$200-$500. Reading + distance + computer in one. Senior favorite.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Multiple pairs</h2><p>Keep pairs in: bedroom, kitchen, car, living room, bathroom. Always handy.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Bigger frames</h2><p>Larger frames easier to find. Less likely to misplace.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Strap or chain</h2><p>$5. Hangs from neck. Never &ldquo;where are my glasses?&rdquo; again.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Eye exam every 2 years. Prescription changes faster as we age.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
