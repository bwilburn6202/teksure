import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Laptop } from 'lucide-react';

export default function ChromebookForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Chromebook for Seniors | TekSure" description="Cheap, simple, scam-resistant laptops. Plain-English Chromebook guide for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Laptop className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Chromebook for Seniors</h1>
          <p className="text-lg text-muted-foreground">$200-400 laptop. No viruses. Senior-friendly.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why Chromebook</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>$200-500 vs $800-1,500 PC/Mac</strong>.</li>
              <li>Auto-updates — no maintenance.</li>
              <li>Virus-resistant — fewer scam pop-ups.</li>
              <li>Boots in 5 seconds.</li>
              <li>Battery 8-12 hours.</li>
              <li>Lightweight (2-3 lbs).</li>
              <li>Cloud-based = no data loss.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best picks 2026</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Acer Chromebook 314</strong> — $250. Senior favorite.</li>
              <li><strong>Lenovo IdeaPad Slim 3 Chromebook</strong> — $300.</li>
              <li><strong>HP Chromebook 14</strong> — $300. Larger screen.</li>
              <li><strong>ASUS Chromebook CX1</strong> — $280.</li>
              <li><strong>Lenovo IdeaPad Duet</strong> — $300. Tablet + keyboard combo.</li>
              <li>Best Buy/Costco have demos.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What you can do</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Email + web browsing.</li>
              <li>Microsoft Office online (free).</li>
              <li>Google Docs/Sheets free.</li>
              <li>Video calls (Zoom, FaceTime, Skype).</li>
              <li>Photo viewing + editing.</li>
              <li>Streaming (Netflix, Hulu).</li>
              <li>Banking, shopping, taxes.</li>
              <li>Most apps via Google Play.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What you CAN&apos;T do</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Heavy photo/video editing (Photoshop, Premiere).</li>
              <li>Most gaming (some via cloud).</li>
              <li>Some niche software (TurboTax desktop has alternatives).</li>
              <li>iTunes (use Apple Music web instead).</li>
              <li>For 90%+ of senior tasks — works fine.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Simplify for seniors</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Pin important sites (Gmail, news) to taskbar.</li>
              <li>Bigger text — Settings → Display → Display Size.</li>
              <li>Mouse cursor larger.</li>
              <li>One Google account everywhere.</li>
              <li>Auto-fill passwords (Google Password Manager).</li>
              <li>Easier than Windows for many seniors.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">When NOT a Chromebook</h3>
            <p className="text-sm text-muted-foreground">If you do Photoshop, video editing, photography hobby with RAW files, gaming, or specialty software — get Mac or PC. If your needs are: email, web, video calls, photos, basic documents = Chromebook is perfect. Save $500+ vs other laptops.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
