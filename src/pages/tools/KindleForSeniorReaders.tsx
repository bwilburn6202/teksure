import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen } from 'lucide-react';

export default function KindleForSeniorReaders() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Kindle for Senior Readers | TekSure" description="Best e-reader for seniors. Kindle Paperwhite + alternatives." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <BookOpen className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Kindle</h1>
          <p className="text-lg text-muted-foreground">Senior e-reader.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Kindle Paperwhite</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$140-$190.</li><li>Best senior e-reader.</li><li>Backlit screen.</li><li>Adjust text size huge.</li><li>Eye-friendly.</li><li>Weeks battery.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior wins</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Big text.</li><li>No glare beach.</li><li>Lighter than book.</li><li>Carries 1000s books.</li><li>Travel friendly.</li><li>Built-in dictionary.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Free books</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Library Libby app.</li><li>Send to Kindle.</li><li>Project Gutenberg classics.</li><li>Senior frugal reader.</li><li>Free thousands.</li><li>Library card needed.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Kindle Unlimited</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>$12/month.</li><li>3 million books.</li><li>Senior heavy reader.</li><li>30-day trial.</li><li>Indie + classics.</li><li>Worth heavy use.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Audible bonus</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Whispersync.</li><li>Switch ebook + audiobook.</li><li>Senior multi-mode.</li><li>$15/mo Audible.</li><li>Pick up wherever.</li><li>Continuous reading.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Setup tips</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Increase text size.</li><li>Bold text.</li><li>Black text dark mode.</li><li>Senior eye comfort.</li><li>Auto-light adjust.</li><li>Free settings.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">$140 Kindle = senior eye relief</h3><p className="text-sm text-muted-foreground">$140 Kindle Paperwhite + library Libby = senior unlimited free reading. Big text, eye-friendly screen, weeks battery. Travel light. Plus Kindle Unlimited $12/mo if heavy reader. Best senior e-reader investment. Better than reading on phone.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
