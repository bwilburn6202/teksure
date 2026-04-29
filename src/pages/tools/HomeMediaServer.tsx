import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { HardDrive } from 'lucide-react';

export default function HomeMediaServer() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Home Media Server — Plex, Jellyfin, NAS | TekSure" description="Stream your DVD collection, family photos, home videos to any TV / phone. Plain-English guide to Plex, Jellyfin, and Network-Attached Storage." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <HardDrive className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Home Media Server</h1>
          <p className="text-lg text-muted-foreground">Your own Netflix — for DVDs, home videos, family photos.</p>
        </div>

        <Card className="mb-6 bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <h2 className="font-bold mb-2">What this is</h2>
            <p className="text-sm">A small computer (or NAS — Network Attached Storage) at home that stores ALL your movies, photos, and videos. You watch them on any TV, phone, or tablet — even when traveling. Like a personal Netflix.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What you need</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>NAS device</strong> — Synology DS224+ ($300) or DS923+ ($600). 2-4 hard drives slot in.</li>
              <li><strong>Hard drives</strong> — 2x 8TB ($300-400). Use TWO so if one fails, your data survives.</li>
              <li><strong>Plex (free) or Jellyfin (free)</strong> — software that streams.</li>
              <li><strong>Smart TV / Roku / Apple TV / Fire TV</strong> — to play the streams.</li>
              <li><strong>Total</strong>: $700-1,000 once. Lasts 7-10 years.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Plex vs Jellyfin</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Plex (free; $5/mo Pass)</strong> — most popular. Beautiful interface. Works on Roku, Apple TV, every smart TV, every phone.</li>
              <li><strong>Jellyfin (free, open source)</strong> — privacy-focused alternative. No subscription ever. Slightly less polished.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Use cases</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Rip your DVDs</strong> — convert collection to digital. Use HandBrake (free).</li>
              <li><strong>Home movies / VHS tapes</strong> — store digitized family videos in one library.</li>
              <li><strong>Photo library</strong> — every family photo, organized by year/event.</li>
              <li><strong>Audiobooks</strong> — your purchased Audible library.</li>
              <li><strong>Stream to grandkids when they visit</strong> — kid movies always available.</li>
              <li><strong>Remote access while traveling</strong> — watch your home library from anywhere.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Simpler alternative — old computer + Plex</h2>
            <p className="text-sm">If you have an old desktop or laptop sitting around — install Plex on it for free. Connect external hard drives ($100 for 4TB). Done. No NAS needed.</p>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">For most seniors</h3>
            <p className="text-sm text-muted-foreground">Skip this unless you have a specific reason — a 1,000-DVD collection, decades of home videos to digitize, or want full control of family media. Otherwise iCloud Photos / Google Photos cover the photos, streaming services cover movies.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
