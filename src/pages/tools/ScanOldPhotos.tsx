import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Camera } from 'lucide-react';

export default function ScanOldPhotos() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Scan Old Photos — Free &amp; Paid Options | TekSure" description="Turn shoeboxes of old photos into digital files. Plain-English picks for scanning apps and mail-in services." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Camera className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Scan Old Photos</h1>
          <p className="text-lg text-muted-foreground">Save the shoeboxes before they fade.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Free phone apps</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Google PhotoScan</strong> (free) — 4 corner shots auto-merged. Removes glare. Best free option.</li>
              <li><strong>Apple Notes</strong> — built into iPhone. Tap camera icon → "Scan Documents". Works on photos too.</li>
              <li><strong>Microsoft Lens</strong> (free) — auto-crops, fixes angles. Saves to OneDrive.</li>
              <li><strong>Photomyne</strong> ($30/year) — scans 4 photos at once from an album page. Pricey but huge time saver.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Mail-in services (best for big collections)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Legacybox</strong> — $400 for ~250 photos (all formats). Famous brand. Slow but reliable.</li>
              <li><strong>ScanCafe</strong> — $0.30/photo. Send physical photos in. Get a thumb drive back.</li>
              <li><strong>ScanMyPhotos</strong> — $200 prepaid box, holds 1,800 photos. Best per-photo price.</li>
              <li><strong>Costco Photo Center (online)</strong> — $20 for 62 photos. Decent quality.</li>
              <li><strong>iMemories</strong> — also handles VHS, slides, film reels.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Home scanner (best for archives)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Epson FastFoto FF-680W</strong> ($600) — scans 1 photo per second. Fastest at home. Best for thousands.</li>
              <li><strong>Epson V39</strong> ($100) — basic flatbed scanner. Slow but affordable.</li>
              <li><strong>Brother ADS-2700W</strong> ($350) — also handles documents.</li>
              <li>Library may have one to borrow.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Tips for great scans</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Wipe each photo with soft cloth first.</li>
              <li>Scan at 600 DPI minimum (1200 for old slides).</li>
              <li>Keep originals — never throw away.</li>
              <li>Name files with year + event ("1987-Christmas-AuntJoy.jpg").</li>
              <li>Back up scans to TWO places (cloud + external drive).</li>
              <li>Add date + names in Photos app metadata so you can search later.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">VHS, slides, film reels</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Costco Digital Conversion</strong> — VHS to digital ~$25/tape.</li>
              <li><strong>Walgreens, CVS</strong> — limited services, decent prices.</li>
              <li><strong>Legacybox</strong> — handles all formats.</li>
              <li>VHS tapes degrade — convert before they&apos;re unwatchable (most are 25-40 years old now).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Best ROI</h3>
            <p className="text-sm text-muted-foreground">Pick the 100 most important photos first. Scan those carefully, save in 3 places, share with family. The other 5,000? Mail-in service handles bulk. Don&apos;t spend years scanning every photo from 1965 — get the best ones digitized while you&apos;re here to identify who&apos;s in them.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
