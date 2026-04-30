import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Film } from 'lucide-react';

export default function DigitizeOldMedia() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Digitize Old VHS, Photos & Slides — Save Family Memories | TekSure" description="VHS tapes, slides, photo albums — they fade and break. Save them digitally before it's too late. Mail-in services, DIY options, and what they cost." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Film className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Digitize Old Media</h1>
          <p className="text-lg text-muted-foreground">VHS tapes, photos, slides, 8mm film — saved forever, in your pocket.</p>
        </div>

        <Card className="mb-6 bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <h2 className="font-bold mb-2">Why now</h2>
            <p className="text-sm">VHS tapes lose magnetic signal — most are unwatchable after 25 years. Photo prints fade. Slides crack. The window to save these memories is closing. Once they're digital, they're permanent.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Easy path — mail-in services</h2>
            <p className="text-sm mb-3">You ship them a box. They digitize everything. They send back the originals plus a USB or cloud download.</p>
            <div className="space-y-3">
              <div className="border-l-4 border-primary pl-3">
                <p className="font-bold">Legacybox</p>
                <p className="text-sm text-muted-foreground">Best-known. They send you a box, you load it up, ship back. Roughly $80 for 5 items, $300 for 25 items. Sales bring it down 40-60%.</p>
              </div>
              <div className="border-l-4 border-primary pl-3">
                <p className="font-bold">ScanCafe</p>
                <p className="text-sm text-muted-foreground">Often cheaper. Slides, prints, negatives. About $0.30 per photo, $20 per VHS tape.</p>
              </div>
              <div className="border-l-4 border-primary pl-3">
                <p className="font-bold">Costco Photo</p>
                <p className="text-sm text-muted-foreground">If you have a Costco membership — they handle photos, slides, video tapes, 8mm/16mm film. Reliable and reasonably priced.</p>
              </div>
              <div className="border-l-4 border-primary pl-3">
                <p className="font-bold">iMemories</p>
                <p className="text-sm text-muted-foreground">Cloud-first — they upload everything to a private cloud you can share with family.</p>
              </div>
            </div>
            <p className="text-sm mt-3 bg-muted/50 p-3 rounded"><strong>Tip:</strong> Mail with tracking and insurance. Schedule shipments for Q1 — companies are slammed near holidays.</p>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">DIY — for photos and slides</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>"PhotoScan by Google Photos"</strong> (free app) — lay the photo flat, hold the phone over it, follow 4 dots on screen. Removes glare. Saves to Google Photos automatically.</li>
              <li><strong>"Photomyne"</strong> — scans 4 photos at once from an album page. Auto-crops each one.</li>
              <li><strong>Flatbed scanner</strong> (Epson V600 or similar, $250) — for slides and negatives. Best quality but slower.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">DIY — for VHS and Hi8 tapes</h2>
            <p className="text-sm mb-2">Trickier than photos because you need a working VCR.</p>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>If you have a VCR, buy a $30 USB capture device (Diamond VC500 or similar).</li>
              <li>Plug VCR's red/white/yellow cables into the capture device, capture device into computer USB.</li>
              <li>Free software: Windows uses "OBS Studio" or the included app. Mac: same.</li>
              <li>Realistically — for less than 10 tapes, mail-in is faster and cheaper than the DIY hassle.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">After it's all digital</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Upload to Google Photos or iCloud. Auto-backup means you'll never lose them.</li>
              <li>Make a shared album with family — kids and grandkids can add their own photos too.</li>
              <li>Burn a backup to a USB drive. Put it in your safe deposit box.</li>
              <li>Make a photo book on Shutterfly or Mixbook for keepsakes.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Where to start</h3>
            <p className="text-sm text-muted-foreground">Pick the one box you'd most regret losing. Tackle that first. You don't have to do it all in one weekend — even doing one shoebox a month means you'll be done by next year, with all the memories saved.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
