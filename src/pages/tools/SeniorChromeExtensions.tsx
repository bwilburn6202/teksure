import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Puzzle } from 'lucide-react';

export default function SeniorChromeExtensions() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Chrome Extensions — Senior Guide" description="Add helpful extensions to Chrome safely." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Puzzle className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Chrome Extensions</h1>
          <p className="text-lg text-muted-foreground">Make Chrome work harder for you.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. What are they</h2><p>Small add-ons that add features to Chrome on a computer. Phones don't support most.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Open the store</h2><p>Visit chrome.google.com/webstore. Browse free extensions.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. uBlock Origin</h2><p>Free ad blocker. Removes most ads and pop-ups. Makes news sites readable again.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Bitwarden</h2><p>Free password vault. Stronger than Chrome's built-in. Works across browsers too.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Read Aloud</h2><p>Reads any web page out loud. Great if your eyes are tired.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Be picky</h2><p>Only install extensions with thousands of users. Check ratings before adding.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Extensions can read what you type. Avoid unknown ones — they can be sneaky.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
