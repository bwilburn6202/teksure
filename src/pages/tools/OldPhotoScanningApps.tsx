import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Camera } from 'lucide-react';

export default function OldPhotoScanningApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Old Photo Scanning Apps for Seniors | TekSure" description="Best phone apps to scan old family photos. Preserve memories digitally." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Camera className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Photo Scanning Apps</h1>
          <p className="text-lg text-muted-foreground">Save those old photos before they fade.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">PhotoScan by Google</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>100% free from Google.</li>
              <li>Eliminates glare from prints.</li>
              <li>Auto-crops and straightens.</li>
              <li>Saves to Google Photos automatically.</li>
              <li>Best free phone scanner.</li>
              <li>Works on iPhone + Android.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">How to use PhotoScan</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Open app, tap scan button.</li>
              <li>Hold phone over photo.</li>
              <li>App shows 4 dots — move phone to each.</li>
              <li>Combines 4 angles to remove glare.</li>
              <li>Auto-saves to Google Photos.</li>
              <li>Takes about 10 seconds per photo.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Apple iPhone Notes app</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Open Notes, tap camera icon.</li>
              <li>Tap &quot;Scan Documents.&quot;</li>
              <li>Works for photos too.</li>
              <li>Saves as PDF or photo.</li>
              <li>Already on every iPhone — no install.</li>
              <li>Quick option for simple scans.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">For larger projects</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Flatbed scanner — Epson Perfection V39 ($90).</li>
              <li>Higher quality than phone scanning.</li>
              <li>Better for old fragile photos.</li>
              <li>USB connects to computer.</li>
              <li>Slow but quality unmatched.</li>
              <li>Worth it for hundreds of photos.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Mail-in services</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>ScanMyPhotos — $0.30 per photo.</li>
              <li>iMemories — also handles slides + film.</li>
              <li>Legacybox — premium service, secure shipping.</li>
              <li>Costco Photo Center — discounted bulk.</li>
              <li>Mail box of photos — receive digital + originals back.</li>
              <li>For thousands of photos this saves time.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Restoring damaged photos</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Google Photos — auto-enhance feature.</li>
              <li>MyHeritage In Color — colorize black + white.</li>
              <li>Remini — AI restoration of blurry photos.</li>
              <li>Photoshop Express — free basic editing.</li>
              <li>Local photo studios offer professional restoration.</li>
              <li>$25–$75 per photo for pro restoration.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Start with one photo album</h3>
            <p className="text-sm text-muted-foreground">Pick one photo album from a shelf. Open Google PhotoScan. Scan 20 photos this Sunday afternoon. Share with family in Google Photos. Repeat next weekend with another album. Within a few months, all your physical photos will be safely backed up to the cloud — protected from fire, flood, and fading. Future generations can access them. The 20 minutes you spend today preserves family history forever.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
