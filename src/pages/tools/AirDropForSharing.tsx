import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Share2 } from 'lucide-react';

export default function AirDropForSharing() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="AirDrop for Seniors | TekSure" description="Share photos + files instantly between Apple devices. AirDrop step-by-step for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Share2 className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">AirDrop</h1>
          <p className="text-lg text-muted-foreground">Share files Apple-to-Apple instantly.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What is AirDrop?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Share photos, videos, files between Apple devices.</li>
              <li>iPhone to iPhone, iPad, Mac.</li>
              <li>No internet needed.</li>
              <li>Direct device-to-device transfer.</li>
              <li>Faster than email or text.</li>
              <li>Free + built-in.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">How to AirDrop a photo</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Open Photos app, find photo.</li>
              <li>Tap Share button (square + arrow).</li>
              <li>Tap AirDrop icon.</li>
              <li>Tap recipient&apos;s name.</li>
              <li>They tap Accept on their device.</li>
              <li>Photo arrives in seconds.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best uses for seniors</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Send photos to grandkids during visits.</li>
              <li>Share contacts with friends.</li>
              <li>Send PDFs from email to family member.</li>
              <li>Transfer files to spouse&apos;s iPad.</li>
              <li>Move photos from old iPhone to new.</li>
              <li>Quick share without email/text.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Settings + privacy</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Settings → General → AirDrop.</li>
              <li>Choose: Receiving Off, Contacts Only, or Everyone.</li>
              <li>Best: Contacts Only (most secure).</li>
              <li>Everyone setting useful temporarily for first share.</li>
              <li>Switch back to Contacts Only.</li>
              <li>Don&apos;t leave Everyone permanently — gets spam.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Troubleshooting</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Both devices need WiFi + Bluetooth ON.</li>
              <li>Both devices unlocked + screens on.</li>
              <li>Get within 30 feet.</li>
              <li>Same Apple ID is fine, different Apple IDs work too.</li>
              <li>Restart both devices if stuck.</li>
              <li>Personal Hotspot off helps.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Android equivalent</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Quick Share (formerly Nearby Share).</li>
              <li>Android-to-Android transfers.</li>
              <li>Settings → Connected devices.</li>
              <li>Works similarly to AirDrop.</li>
              <li>Cross-platform (iOS to Android) trickier.</li>
              <li>Use email or text for cross-platform.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">No more emailing photos to yourself</h3>
            <p className="text-sm text-muted-foreground">Many seniors email photos to themselves to move between iPhone and Mac. AirDrop eliminates that. Tap photo → Share → AirDrop → tap your Mac. Photo arrives in seconds. Same for moving files between iPhone and iPad. Once you learn AirDrop, you&apos;ll wonder how you lived without it. Practice once with a family member.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
