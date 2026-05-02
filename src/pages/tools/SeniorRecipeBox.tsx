import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen } from 'lucide-react';

export default function SeniorRecipeBox() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Digital Recipe Box for Seniors — TekSure" description="Save family recipes digitally — Paprika, Whisk, Apple Notes." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <BookOpen className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Digital Recipe Box</h1>
          <p className="text-lg text-muted-foreground">Save family recipes forever.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Paprika</h2><p>$5 once. Save any recipe from any website. One-click import. Best app.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Whisk</h2><p>FREE. Save recipes. Auto-builds grocery list.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Apple Notes</h2><p>FREE. Type or scan grandma&apos;s handwritten cards. Tag #recipes.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Scan handwritten</h2><p>Apple Notes camera scans. OCR makes it searchable.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Family share</h2><p>Paprika lets you sync to spouse, kids, grandkids. Family recipe legacy.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Print as a cookbook</h2><p>Many apps export to PDF. Print at Shutterfly as a personalized cookbook ($30-$50).</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Scan grandma&apos;s recipes NOW. Photos fade. Apps don&apos;t.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
