import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Laptop } from 'lucide-react';

export default function SeniorChromebookBasics() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Chromebook Basics — Senior Guide" description="Use a Chromebook with confidence." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Laptop className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Chromebook Basics</h1>
          <p className="text-lg text-muted-foreground">Cheap, fast, simple computer.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Why Chromebook</h2><p>$200-400. Fast. Auto-updates. Hard for viruses to attack.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Sign in with Google</h2><p>Same Google account on phone and laptop. Email, photos, docs sync automatically.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Bigger text</h2><p>Hold Ctrl + plus key. Repeats — text gets bigger each press.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Print</h2><p>Ctrl + P. Pick the printer. Same as any computer.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. No installs needed</h2><p>Most things run in Chrome browser. Few apps to install or update manually.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Backups automatic</h2><p>Files save to Google Drive. Even if Chromebook breaks, files are safe.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Great choice if your main use is email, web, video calls. Skip if you need Microsoft Office.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
