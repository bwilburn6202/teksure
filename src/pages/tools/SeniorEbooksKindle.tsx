import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen } from 'lucide-react';

export default function SeniorEbooksKindle() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Kindle for Seniors — Senior Guide" description="Read e-books on a Kindle." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <BookOpen className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Kindle Reading</h1>
          <p className="text-lg text-muted-foreground">Carry hundreds of books anywhere.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Pick a Kindle</h2><p>Basic Kindle $109. Paperwhite $159 — waterproof, warm light. Top option for nighttime.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Sign in</h2><p>Use your Amazon account. Books bought there sync to the Kindle automatically.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Bigger text</h2><p>Tap top of screen, gear icon. Pick larger font. Easier than reading paperbacks.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Library books</h2><p>Use the free Libby app to borrow library e-books. Sends them to Kindle for free.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Battery</h2><p>Lasts weeks per charge. Beats any phone or tablet.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Kindle Unlimited</h2><p>$12/month for unlimited e-books. Try free for 30 days first.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Page presses with one finger. No glare in sunlight. Like real paper.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
