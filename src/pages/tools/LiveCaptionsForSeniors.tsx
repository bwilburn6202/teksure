import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Captions } from 'lucide-react';

export default function LiveCaptionsForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Live Captions on Phone for Seniors | TekSure" description="Real-time captions for phone calls + videos. Built into iPhone and Android." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Captions className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Live Captions</h1>
          <p className="text-lg text-muted-foreground">Read what people say in real time.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What it does</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Real-time captions for any audio.</li>
              <li>Phone calls + FaceTime calls.</li>
              <li>Videos on YouTube + websites.</li>
              <li>In-person conversations (using mic).</li>
              <li>Free — built into modern phones.</li>
              <li>Game-changer for hearing loss.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">iPhone Live Captions</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>iOS 16+ required.</li>
              <li>Settings → Accessibility → Live Captions.</li>
              <li>Toggle on.</li>
              <li>Captions appear as floating bar.</li>
              <li>Works on calls, videos, conversations.</li>
              <li>Works in airplane mode (on-device processing).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Android Live Captions</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Pixel + most modern Android phones.</li>
              <li>Settings → Accessibility → Live Caption.</li>
              <li>Or press volume button + tap caption icon.</li>
              <li>Captions appear during any audio.</li>
              <li>Customizable size + position.</li>
              <li>On-device, works offline.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Phone call captions</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Read what caller says as they speak.</li>
              <li>Helpful when hearing aids fail.</li>
              <li>Faster than asking &quot;what?&quot; repeatedly.</li>
              <li>Works on FaceTime + WhatsApp calls.</li>
              <li>Privacy: processed on your phone, not sent to Apple/Google.</li>
              <li>No internet required.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">In-person conversations</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Place phone on table during conversations.</li>
              <li>Captions appear as person speaks.</li>
              <li>Helpful in restaurants with background noise.</li>
              <li>Doctor appointments — read what doctor says.</li>
              <li>Family gatherings.</li>
              <li>Multiple speakers may be tricky.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Apps for hearing loss</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Otter.ai — meetings + transcription.</li>
              <li>Live Transcribe (Android) — by Google.</li>
              <li>Innocaption — free for Americans with hearing loss.</li>
              <li>InnoCaption Captioned Telephone (free FCC program).</li>
              <li>CapTel — captioned home phone.</li>
              <li>All free or low-cost options.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Try it tonight on TV</h3>
            <p className="text-sm text-muted-foreground">Tonight, watch your favorite TV show. Hold your phone with Live Captions enabled. Read along. Many seniors with mild hearing loss find this transformative — they catch dialogue they were missing without even realizing it. Combined with hearing aids, it&apos;s like having superpowers. Free, built into your phone, takes 30 seconds to enable.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
