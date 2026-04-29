import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Archive } from 'lucide-react';

export default function MemorabiliaPreservation() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Memorabilia Preservation Guide | TekSure" description="Preserve photos, letters, VHS, slides. Plain-English digitization guide for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Archive className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Memorabilia Preservation</h1>
          <p className="text-lg text-muted-foreground">Save the memories. Toss the boxes.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Photo digitization services</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Legacybox</strong> — most popular. $200-700 box. Mail-in.</li>
              <li><strong>iMemories</strong> — $0.50/photo. Cloud + DVD.</li>
              <li><strong>Costco Photo Center</strong> — $20/100 photos. Cheapest reliable.</li>
              <li><strong>ScanCafe</strong> — $0.30/photo. Quality.</li>
              <li><strong>DIY scanner</strong> — Epson V600 ($300). 100s of photos.</li>
              <li><strong>Photo to Cloud apps</strong> — Photomyne, Google PhotoScan. FREE.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">VHS, film, slides</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Costco/Walmart kiosks</strong> — VHS to DVD/digital. $20-30/tape.</li>
              <li><strong>Legacybox</strong> — all formats one box.</li>
              <li><strong>iMemories</strong> — slides + 8mm + VHS.</li>
              <li><strong>Local video transfer shops</strong> — Google &quot;[your city] VHS digitize&quot;.</li>
              <li>Tape degrades after 30 years — DON&apos;T DELAY.</li>
              <li>Get duplicates — give to siblings.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Documents + letters</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Adobe Scan</strong> — phone app, FREE. Auto-crops.</li>
              <li><strong>Genius Scan</strong> — alternative.</li>
              <li>Acid-free archival boxes for originals worth keeping.</li>
              <li>Donate historic letters to local historical society.</li>
              <li>Diaries — type up most important entries, scan rest.</li>
              <li>Newspapers — yellow + brittle. Scan + recycle.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Storage + sharing</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Google Photos</strong> — FREE 15GB. Auto-faces, search.</li>
              <li><strong>Apple iCloud Photos</strong> — 50GB $1/mo, 200GB $3/mo.</li>
              <li><strong>Amazon Prime Photos</strong> — UNLIMITED with Prime. Best value.</li>
              <li><strong>Backblaze</strong> — $7/mo unlimited backup.</li>
              <li><strong>External hard drive</strong> — $80 for 2TB. Keep at family member&apos;s home.</li>
              <li>Use 2 storage methods (cloud + drive).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Heirloom items</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Take photos of items + write story.</li>
              <li>Family meeting — let family pick what they want.</li>
              <li>Use Photo Books (Shutterfly) for photos of objects.</li>
              <li>Donate special items to relevant museum.</li>
              <li>Sell collectibles via specialist auction.</li>
              <li>Don&apos;t force kids to keep things they don&apos;t want.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Story preservation</h3>
            <p className="text-sm text-muted-foreground"><strong>StoryWorth</strong> — $99/yr. Weekly questions. Year-end book of your life. <strong>StoryCorps</strong> — FREE. Record family interview, archived at Library of Congress. <strong>Voice Memo on phone</strong> — record stories yourself, family treasures forever.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
