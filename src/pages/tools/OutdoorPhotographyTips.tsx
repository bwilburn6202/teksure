import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Camera } from 'lucide-react';

export default function OutdoorPhotographyTips() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Outdoor Photography Tips for Seniors | TekSure" description="Better photos outdoors. Plain-English guide for senior photographers." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Camera className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Outdoor Photography</h1>
          <p className="text-lg text-muted-foreground">Capture memories. Phone or camera.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Phone is enough</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>iPhone 13+ takes pro photos.</li>
              <li>Pixel 6+ same.</li>
              <li>Don&apos;t need DSLR.</li>
              <li>Wider aperture good lighting.</li>
              <li>Portrait mode for shallow depth.</li>
              <li>Night mode for low light.</li>
              <li>Live photos capture moments.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Better photos rules</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Rule of thirds — subject 1/3 from edge.</li>
              <li>Golden hour — sunrise + sunset.</li>
              <li>Avoid noon harsh shadows.</li>
              <li>Get close to subject.</li>
              <li>Lock focus + exposure (tap + hold).</li>
              <li>Multiple shots — pick best.</li>
              <li>Hold steady or tripod.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior gear upgrades</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Mini tripod</strong> ($30) — hold steady.</li>
              <li><strong>Bluetooth shutter</strong> ($15) — selfies.</li>
              <li><strong>Phone clip-on lenses</strong> ($30) — wide-angle, telephoto.</li>
              <li><strong>Selfie stick</strong> with light.</li>
              <li><strong>Power bank</strong> — long days.</li>
              <li><strong>Microfiber cloth</strong> — clean lens.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Editing made easy</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Apple Photos</strong> — built-in iPhone.</li>
              <li><strong>Snapseed</strong> — free, Google.</li>
              <li><strong>Adobe Lightroom Mobile</strong> — free tier.</li>
              <li>Tap auto-enhance.</li>
              <li>Adjust brightness, contrast.</li>
              <li>Crop for composition.</li>
              <li>Don&apos;t over-edit.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Sharing + organizing</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Apple Photos / Google Photos auto-organize.</li>
              <li>Shared albums for family events.</li>
              <li>Print best — Shutterfly, Costco.</li>
              <li>Photo books capture trips.</li>
              <li>Backup to cloud.</li>
              <li>External drive too.</li>
              <li>Don&apos;t lose lifetime memories.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Free senior classes</h3>
            <p className="text-sm text-muted-foreground">Apple Stores — free Today at Apple photo classes. Senior centers + community colleges. YouTube — endless tutorials. Library photography clubs. Many seniors take photography as creative outlet.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
