import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Hash } from 'lucide-react';

export default function SeniorThreads() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Threads for Seniors — Senior Guide" description="Meta's Twitter-like Threads app." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Hash className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Threads</h1>
          <p className="text-lg text-muted-foreground">Meta's text social app.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">1. Owned by Meta</h2><p>Same company as Facebook, Instagram. Sign up with Instagram account.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">2. Free</h2><p>App and threads.net. No ads yet.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">3. Follow celebrities</h2><p>Many celebrities post here only. Not on Twitter or Bluesky.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">4. Calm community</h2><p>Most users find Threads less heated than Twitter.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">5. Privacy</h2><p>Settings, Privacy. Make account private if you want fewer strangers.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h2 className="text-xl font-semibold mb-2">6. Skip if too much</h2><p>You don't need every social app. Pick 1 or 2 max for sanity.</p></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="p-6"><p>Good test option if you've outgrown Twitter and want something quieter.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
