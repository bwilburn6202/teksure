import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen } from 'lucide-react';

export default function SeniorBookClubs() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Book Clubs for Seniors — TekSure" description="Online book clubs for seniors — Goodreads, Reese's Book Club, library." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <BookOpen className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Book Clubs for Seniors</h1>
          <p className="text-lg text-muted-foreground">Read together. Connect.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Goodreads</h2><p>FREE. Track reading. Find groups.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Library book clubs</h2><p>FREE local. Most libraries host. Various genres.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Reese&apos;s Book Club</h2><p>FREE. Reese Witherspoon picks. Massive online community.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Senior centers</h2><p>Often weekly groups. In-person friendships.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Zoom book clubs</h2><p>Many run virtually. Make global friends.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Audio club</h2><p>Listen on Audible while doing tasks. Discuss virtually.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Library book clubs free + senior-friendly. Start there.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
