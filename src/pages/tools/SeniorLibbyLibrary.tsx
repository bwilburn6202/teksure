import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Library } from 'lucide-react';

export default function SeniorLibbyLibrary() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Libby Library App — Senior Guide" description="Borrow free e-books and audiobooks from your library." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Library className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Libby Library App</h1>
          <p className="text-lg text-muted-foreground">Free books from your local library.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Get the app</h2><p>Free. Search Libby in App Store or Play Store. Made by OverDrive.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Add your library</h2><p>Type your library name. Sign in with library card number and PIN.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Borrow a book</h2><p>Search title or browse. Tap Borrow. E-book or audiobook downloads to your phone.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Place holds</h2><p>If a popular book is checked out, tap Place Hold. App notifies when ready.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Send to Kindle</h2><p>Tap a borrowed e-book. Tap Send to Kindle. Reads on the Kindle device too.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Free magazines</h2><p>Many libraries offer Vogue, Time, Reader's Digest. Free.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Multiple library cards? Add them all. Each library has different books and wait times.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
