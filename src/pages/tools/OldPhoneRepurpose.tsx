import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Smartphone } from 'lucide-react';

export default function OldPhoneRepurpose() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Repurpose Old Phones | TekSure" description="Don&apos;t throw out your old iPhone or Android. Plain-English ideas to reuse as security camera, alarm clock, GPS, more." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Smartphone className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Repurpose Old Phones</h1>
          <p className="text-lg text-muted-foreground">Free uses for old iPhone / Android.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best uses</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Security camera</strong> — apps: AlfredCamera, Manything. Free, motion alerts.</li>
              <li><strong>Bedside alarm clock</strong> — keep on charger, full-screen clock app.</li>
              <li><strong>Music player</strong> — old phone connects to Bluetooth speaker, plays Spotify.</li>
              <li><strong>Kids&apos; first phone</strong> (no SIM, wifi only) — emergency calls + games.</li>
              <li><strong>Dedicated GPS in car</strong> — Google Maps, no plan needed.</li>
              <li><strong>Workout phone</strong> — strap to arm, music + heart rate.</li>
              <li><strong>Digital photo frame</strong> — slideshow on stand.</li>
              <li><strong>Backup if main phone breaks</strong>.</li>
              <li><strong>Travel phone</strong> — overseas with local SIM.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Before reusing</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Backup data first (iCloud / Google).</li>
              <li>Sign OUT of accounts.</li>
              <li>Factory reset to wipe data.</li>
              <li>Update to latest OS if supported.</li>
              <li>Charge fully + reset.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Trade-in vs sell vs reuse</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Trade-in (Apple, carrier)</strong> — convenient, fair value.</li>
              <li><strong>Sell on Swappa, Decluttr, Gazelle</strong> — usually 20-50% more than trade-in.</li>
              <li><strong>Donate</strong> — Cell Phones for Soldiers, women&apos;s shelters.</li>
              <li><strong>Reuse</strong> — best for very old phones not worth selling.</li>
              <li><strong>Recycle</strong> — Best Buy free recycle bin.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Worth saving 1</h3>
            <p className="text-sm text-muted-foreground">Always keep ONE old phone as backup. Phone dropped + dies + you NEED to make calls. SIM swap into old phone = back online in 5 min. Free insurance against tech disasters.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
