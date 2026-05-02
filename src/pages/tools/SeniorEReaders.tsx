import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen } from 'lucide-react';

export default function SeniorEReaders() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="E-Readers for Seniors — TekSure" description="Best e-readers for seniors — Kindle, Kobo, Nook compared." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <BookOpen className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">E-Readers for Seniors</h1>
          <p className="text-lg text-muted-foreground">Adjustable text. Built-in light. Easy on eyes.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Kindle Paperwhite</h2><p>$150. Best overall. Waterproof. 10 weeks battery.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Kindle Scribe</h2><p>$340. Big screen. Take notes with stylus.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Kobo Clara</h2><p>$130. Works with library Libby app directly. No Amazon needed.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Big text</h2><p>All e-readers let you make text 3x bigger than print books.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Lighter than books</h2><p>Hold a 1,000-page novel one-handed. Easier on arthritis.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Free books</h2><p>Library Libby/OverDrive. Project Gutenberg has 70,000+ free classics.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: E-ink is NOT the same as a phone screen. No eye strain. Like reading paper.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
