import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Library } from 'lucide-react';

export default function LibbyAppForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Libby Library App for Seniors | TekSure" description="Free library books on phone. Senior Libby app guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Library className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Libby App</h1>
          <p className="text-lg text-muted-foreground">Free library books.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">What it is</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Free library app.</li><li>Borrow ebooks + audiobooks.</li><li>Need library card.</li><li>OverDrive owned.</li><li>Senior reader best.</li><li>Daily new books.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Setup</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Free app.</li><li>Add library card.</li><li>Search books.</li><li>Borrow free.</li><li>21 days typical.</li><li>Auto-return.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Hold queues</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Popular books waitlist.</li><li>Place hold.</li><li>Email when available.</li><li>Senior patience pays.</li><li>Free book wait.</li><li>Worth it.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Multiple libraries</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Add 3+ library cards.</li><li>Different cities.</li><li>Often allow non-residents.</li><li>Senior bigger selection.</li><li>Free.</li><li>Stack libraries.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Send to Kindle</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Tap &quot;Read with Kindle.&quot;</li><li>Free conversion.</li><li>Reads on Kindle.</li><li>Senior preferred.</li><li>Eye-friendly screen.</li><li>Free.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Audiobooks free</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Audible alternative.</li><li>Same library lending.</li><li>Sleep timer.</li><li>Senior commute listening.</li><li>Free with library card.</li><li>Try first vs Audible.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Free Libby = senior unlimited reading</h3><p className="text-sm text-muted-foreground">Free Libby app + library card = unlimited senior ebooks + audiobooks. Add 3 library cards if possible. Send to Kindle for eye-friendly reading. Skip Audible if patience. Most senior frugal reading hack. Library renaissance.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
