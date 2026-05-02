import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen } from 'lucide-react';

export default function SeniorScrapbooking() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Digital Scrapbooking for Seniors — TekSure" description="Project Life, Mosaic, scrapbook apps for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <BookOpen className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Digital Scrapbooking</h1>
          <p className="text-lg text-muted-foreground">Memories on demand.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Project Life</h2><p>FREE app. Becky Higgins approach. Drag and drop pages.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Mosaic</h2><p>$10/month. Photo book monthly. Ships printed copy.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Apple Photos</h2><p>FREE. Make hardcover books from iPhone photos. Print in app.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Shutterfly</h2><p>$30-$80. Auto-fills books from selected photos.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Print yearly</h2><p>One book per year. 10 years = beautiful family record.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Add stories</h2><p>Don&apos;t just photos. Caption with names, places, what was happening.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Best Christmas gift to family. $50 personalized photo book = priceless.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
