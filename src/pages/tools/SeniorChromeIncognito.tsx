import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { EyeOff } from 'lucide-react';

export default function SeniorChromeIncognito() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Chrome Incognito Mode — Senior Guide" description="Browse without saving history in Chrome." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <EyeOff className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Incognito Mode</h1>
          <p className="text-lg text-muted-foreground">Private browsing — for the right reasons.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. How to open</h2><p>Tap the three-dot menu. Tap New Incognito tab. The screen turns dark.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Good uses</h2><p>Shop without seeing ads later. Sign in to a friend's account on a borrowed device.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. What is private</h2><p>History and cookies clear when you close the window. Saved passwords still work.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Not invisible</h2><p>Your internet provider and the websites you visit can still see what you do.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Close it fast</h2><p>Tap the squares icon. Swipe Incognito tabs away to clear them quickly.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Does not block scams</h2><p>Incognito does not protect from phishing or fake sites. Stay alert.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Use Incognito for shopping or research, not for banking — public networks are still risky.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
