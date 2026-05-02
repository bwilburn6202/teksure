import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen } from 'lucide-react';

export default function SeniorAudibleAlternatives() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Audible Alternatives for Seniors — TekSure" description="Cheaper audiobook options — Libby, Hoopla, Spotify, library audiobooks." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <BookOpen className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Audible Alternatives</h1>
          <p className="text-lg text-muted-foreground">Save money on audiobooks.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Libby (FREE)</h2><p>Library card. Free audiobooks. Sometimes wait list. Worth it.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Hoopla (FREE)</h2><p>Library card. No wait lists. Instant audiobook borrows.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Spotify Premium</h2><p>$11/month. 15 hours of audiobooks included.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Apple Books</h2><p>Pay per book. No subscription. Works with Apple Music ecosystem.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">LibriVox (FREE)</h2><p>Public domain audiobooks. Classics from Jane Austen to Mark Twain.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Audible Plus</h2><p>$8/month. Cheaper than original $15. Limited catalog.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Get a library card today. Free Libby + Hoopla = $0/month audiobooks forever.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
