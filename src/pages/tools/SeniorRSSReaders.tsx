import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Rss } from 'lucide-react';

export default function SeniorRSSReaders() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="RSS Readers for Seniors — TekSure" description="Follow your favorite blogs and websites — Feedly, Inoreader, NetNewsWire." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Rss className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">RSS Readers</h1>
          <p className="text-lg text-muted-foreground">Read all favorite sites in one app.</p>
        </div>
        <div className="space-y-4">
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Feedly</h2><p>FREE basic. Best-known RSS reader. Beautiful interface.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Inoreader</h2><p>FREE basic. Very powerful. Senior-friendly customization.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">NetNewsWire</h2><p>FREE on iPhone/Mac. No tracking. Simplest.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Why use RSS</h2><p>No algorithms deciding what you see. Pure chronological from sources you choose.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Add a feed</h2><p>Most websites have RSS link. Or paste URL into reader — finds RSS automatically.</p></CardContent></Card>
          <Card><CardContent className="pt-6"><h2 className="font-semibold mb-2">Senior favorites</h2><ul className="list-disc pl-5 space-y-1 text-sm"><li>NYT Cooking</li><li>AARP Bulletin</li><li>Smithsonian Magazine</li><li>National Geographic</li></ul></CardContent></Card>
          <Card className="bg-muted/40"><CardContent className="pt-6"><p className="text-sm">Quick Tip: Replaces social media for news junkies. Less distraction, more substance.</p></CardContent></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
