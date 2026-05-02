import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Globe } from 'lucide-react';

export default function SeniorChromeBasics() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Chrome Browser Basics — Senior Guide" description="Use Chrome to browse the web safely." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Globe className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Chrome Basics</h1>
          <p className="text-lg text-muted-foreground">Browse the web with confidence.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Open Chrome</h2><p>Tap the colorful circle icon. The address bar is at the top.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Search</h2><p>Tap the address bar. Type a question. Tap Go on the keyboard.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Bookmarks</h2><p>Tap the star icon. Save sites you visit often. Find them under the bookmarks menu.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Bigger text</h2><p>Settings, Accessibility, Text scaling. Slide larger for any website.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Tabs</h2><p>Tap the squares icon to see open pages. Tap X to close any you no longer need.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Clear data</h2><p>Settings, Privacy, Clear browsing data. Speeds up Chrome and clears old cookies.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Look for the padlock icon before any address. No padlock means do not type passwords.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
