import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { PenTool } from 'lucide-react';

export default function SeniorWritingApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Writing Apps for Seniors — TekSure" description="Write memoirs, journals, novels — Scrivener, Day One, Storyworth." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <PenTool className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Writing Apps for Seniors</h1>
          <p className="text-lg text-muted-foreground">Write your memoir. Tell your story.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Storyworth</h2><p>$99/year. Weekly questions emailed. Family compiles into hardcover book at end.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Day One Journal</h2><p>$3/month. Voice or typed. Auto-saves location and weather.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Scrivener</h2><p>$50 once. Best for serious memoirs or novels. Used by professional writers.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Google Docs</h2><p>FREE. Auto-saves. Family can read and add comments.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Voice typing</h2><p>Speak instead of type. iPhone, Android, Mac all support free.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Self-publishing</h2><p>Amazon KDP. Free. Print your memoir as a real book for family.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: 10 minutes daily writing. 1 year = 60,000 words. Real memoir done.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
