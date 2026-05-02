import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen } from 'lucide-react';

export default function SeniorLocalLibraryTech() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Library Tech Help for Seniors — TekSure" description="Free tech classes at libraries — computers, smartphones, ebooks." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <BookOpen className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Library Tech Help</h1>
          <p className="text-lg text-muted-foreground">FREE. Local. Patient.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Free tech classes</h2><p>Most libraries offer free senior classes. Smartphone, email, internet, Microsoft Word.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">1-on-1 help</h2><p>Many libraries offer book-a-librarian free 30-minute help sessions.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Free Wi-Fi</h2><p>Always free in libraries. Reliable backup if home Wi-Fi breaks.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Hotspot lending</h2><p>Many libraries lend Wi-Fi hotspots. Take home for free internet 1-2 weeks.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Free ebooks/audiobooks</h2><p>Libby and Hoopla apps. All free with library card.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Computer access</h2><p>Free computer use for hours. Print for $0.10/page.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Visit your library this week. Most seniors don&apos;t realize how much is free.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
