import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Camera } from 'lucide-react';

const PICKS = [
  { name: 'AUTO-VOX V5 Pro', cost: '$120', best: 'Wireless. License-plate-mounted camera. 5" mirror display. Senior favorite.', good: 'Best overall.' },
  { name: 'eRapta T01 Pro', cost: '$80', best: 'Cheapest decent. Wired install — more reliable.', good: 'Best budget.' },
  { name: 'Garmin BC 50 + Garmin Drive', cost: '$200-300', best: 'Pairs with Garmin GPS. Premium.', good: 'Best with Garmin GPS.' },
  { name: 'Toguard CE60', cost: '$140', best: 'Front + rear dash cam combo. Records too.', good: 'Best with dashcam.' },
  { name: 'Professional install (Best Buy)', cost: '$300-500 install + $100-300 camera', best: 'Best Buy Auto Install. Done right. Warranty.', good: 'Best done-for-you.' },
];

export default function BackupCameraRetrofit() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Add a Backup Camera to Older Car | TekSure" description="$80-300 retrofit. Plain-English picks for adding a backup camera to a car that doesn&apos;t have one." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Camera className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Backup Camera Retrofit</h1>
          <p className="text-lg text-muted-foreground">Don&apos;t back into mailboxes anymore.</p>
        </div>

        <div className="space-y-3 mb-6">
          {PICKS.map(p => (
            <Card key={p.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{p.name}</h3>
                  <span className="text-sm font-semibold text-primary">{p.cost}</span>
                </div>
                <p className="text-sm">{p.best}</p>
                <p className="text-sm text-muted-foreground">{p.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior reality</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Cars from 2019+ have built-in backup cameras (federal law).</li>
              <li>Older cars don&apos;t — but you can ADD one.</li>
              <li>Backup cameras reduce backing accidents 70%.</li>
              <li>Especially helpful with neck stiffness / arthritis.</li>
              <li>$80-150 wireless = easy install.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Wireless vs wired</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Wireless</strong> — easier install, may have 1-2 sec delay, occasional interference.</li>
              <li><strong>Wired</strong> — better quality, more reliable, harder install ($150-300 install).</li>
              <li>For most seniors: wireless. The 1-2 sec delay is fine.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">DIY install (1-2 hours)</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Mount camera on license plate (replaces frame).</li>
              <li>Wire to reverse light power (camera turns on with reverse).</li>
              <li>Mount monitor on dash OR replace rearview mirror.</li>
              <li>Test before tightening.</li>
              <li>OR pay handyman / Best Buy $100-300 install.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Skip "OEM-style" expensive retrofit</h3>
            <p className="text-sm text-muted-foreground">Some shops sell $1,000+ "OEM-style" integrated retrofit. Not worth it. $150 wireless camera works just as well visually. Save the money.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
