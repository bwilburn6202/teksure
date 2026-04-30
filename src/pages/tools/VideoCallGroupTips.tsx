import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Video } from 'lucide-react';

export default function VideoCallGroupTips() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Group Video Call Tips for Seniors | TekSure" description="Host a family Zoom or FaceTime that actually works. Plain-English tips for hearing, lighting, mute etiquette, and group settings." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Video className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Group Video Call Tips</h1>
          <p className="text-lg text-muted-foreground">Make Sunday family calls actually work.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Pick the right app</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>FaceTime</strong> — best if everyone has iPhone/iPad. Up to 32 people. Free.</li>
              <li><strong>Zoom</strong> — best mixed-device. Free 40-minute calls, unlimited 1-on-1. Best for big groups.</li>
              <li><strong>Google Meet</strong> — free, works in browser. Up to 100 people for 1 hour free.</li>
              <li><strong>WhatsApp</strong> — up to 32 people. Best if family lives overseas.</li>
              <li><strong>Facebook Messenger</strong> — up to 50 people. Best if family already on Facebook.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Lighting</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Sit FACING a window. Light on your face = clear video.</li>
              <li>Don&apos;t sit with window BEHIND you — backlit silhouette.</li>
              <li>If no window — table lamp pointed at face, not at ceiling.</li>
              <li>$15 ring light for phones is a game changer.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Hearing better</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Wired headphones or AirPods improve audio dramatically.</li>
              <li>Cut down background noise — TV off, fan off, AC off.</li>
              <li>iPhone Live Captions (Settings → Accessibility) — auto subtitles for every call.</li>
              <li>Zoom has built-in captions — turn on "Show Captions" during call.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Camera angle</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Phone propped UP at eye level. Not in your lap.</li>
              <li>Pile of books or a phone stand ($10) works fine.</li>
              <li>Looking down into phone shows ceiling and chin. Not flattering.</li>
              <li>iPad on a kitchen counter at standing height works great.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Group call etiquette</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Mute when not speaking</strong> — kills background noise. Tap mic icon.</li>
              <li>Have a "host" who picks who speaks (avoids talking over each other).</li>
              <li>"Speaker view" shows whoever is talking large. Easier to follow.</li>
              <li>Take turns — each person talks for 60 seconds, then passes to next.</li>
              <li>If kids/grandkids on call — keep it under 45 minutes.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Schedule a recurring call</h2>
            <p className="text-sm">Pick the same day &amp; time every week. Sunday 4 PM. Wednesday 7 PM. Whatever. Recurring beats "let&apos;s plan one" — that one rarely happens. Send a calendar invite to family. Auto-reminders.</p>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">The grandkid trick</h3>
            <p className="text-sm text-muted-foreground">Read a book aloud to grandkids over video. They&apos;ll watch you for 20 minutes happily. Beats trying to ask them about school for 5 awkward minutes. Pre-pick a book, hold it up, read with voices.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
