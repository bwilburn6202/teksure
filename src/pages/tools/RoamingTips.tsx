import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Globe } from 'lucide-react';

export default function RoamingTips() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="International Roaming Tips | TekSure" description="Don&apos;t come home to a $1,200 phone bill. Plain-English roaming tips for traveling internationally — eSIMs, wifi, and carrier passes." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Globe className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">International Roaming</h1>
          <p className="text-lg text-muted-foreground">Don&apos;t come home to a $1,200 bill.</p>
        </div>

        <Card className="mb-4 bg-yellow-50 border-yellow-300 dark:bg-yellow-950/20 dark:border-yellow-800">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">First — turn OFF roaming</h2>
            <p className="text-sm">Before flying:</p>
            <ul className="list-disc pl-5 space-y-1 text-sm mt-2">
              <li>iPhone — Settings → Cellular → Cellular Data Options → "Data Roaming" OFF.</li>
              <li>Android — Settings → Mobile Network → "Data Roaming" OFF.</li>
              <li>This blocks $5-10/MB charges.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best options abroad</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>eSIM (Airalo, Holafly, GigSky)</strong> — buy data plan in app for the country you visit. $5-30/week. Best.</li>
              <li><strong>T-Mobile Magenta</strong> — free 5GB international + free texting in 215+ countries built in. Senior favorite.</li>
              <li><strong>Verizon TravelPass</strong> — $10/day. Use your normal plan abroad.</li>
              <li><strong>AT&amp;T International Day Pass</strong> — $12/day.</li>
              <li><strong>Google Fi</strong> — built for travel. Same price abroad as US.</li>
              <li><strong>Local SIM card</strong> — old-school. $10-30 at airport.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">eSIM setup (best for most)</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Download Airalo or Holafly app.</li>
              <li>Pick country / region.</li>
              <li>Pick data plan (1-30 days, 1-20 GB).</li>
              <li>Pay $5-30.</li>
              <li>Install eSIM (QR code on phone).</li>
              <li>Land abroad — switch to eSIM in Settings.</li>
              <li>Internet works without home carrier.</li>
              <li>WhatsApp / iMessage / FaceTime now free.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Free travel tips</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Download Google Maps offline maps BEFORE leaving (in the app).</li>
              <li>Pre-download Netflix shows over hotel wifi for the plane.</li>
              <li>WhatsApp + iMessage work over wifi — free.</li>
              <li>Hotels + cafes have free wifi worldwide.</li>
              <li>Turn off auto-app updates (Settings → App Store → Automatic Downloads).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Cruise ship roaming WARNING</h2>
            <p className="text-sm">Cruise ships use SATELLITE — unbelievably expensive. $5-15/MB. <strong>Always Airplane Mode at sea.</strong> Only connect to ship&apos;s wifi. Or skip internet entirely (digital detox).</p>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Texts vs iMessage</h3>
            <p className="text-sm text-muted-foreground">If you&apos;re iPhone-to-iPhone, iMessage uses wifi/data — FREE internationally. Green-bubble (regular SMS) costs roaming. Tell family to use iMessage / WhatsApp / FaceTime while you&apos;re away — keeps you connected free.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
