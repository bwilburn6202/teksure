import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Shield } from 'lucide-react';

export default function SeniorBrowserPrivacy() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Browser Privacy — Senior Guide" description="Stop ads from tracking you online." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Shield className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Browser Privacy</h1>
          <p className="text-lg text-muted-foreground">Less tracking, fewer creepy ads.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Private Browsing</h2><p>Chrome Incognito or Safari Private. Doesn't save history. Won't load saved logins.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Clear cookies</h2><p>Once a month, clear browsing data. Speeds up the browser.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Brave browser</h2><p>Free. Blocks ads and trackers automatically. Same as Chrome but cleaner.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. DuckDuckGo</h2><p>Search engine that doesn't track you. duckduckgo.com or as default search.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Sign out of Google</h2><p>Sign out of Gmail when not using. Reduces tracking across other Google sites.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Free uBlock</h2><p>Free Chrome extension. Blocks ads and trackers on every site.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>You can't be 100% private online. But these settings cut tracking by 80% or more.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
