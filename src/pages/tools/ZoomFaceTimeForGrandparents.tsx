import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Video } from 'lucide-react';

export default function ZoomFaceTimeForGrandparents() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Zoom and FaceTime for Grandparents | TekSure" description="Video chat with grandkids. Zoom vs FaceTime vs Google Meet for senior users." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Video className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Video Chat for Grandparents</h1>
          <p className="text-lg text-muted-foreground">See grandkids without leaving home.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">FaceTime — Apple devices</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Built into every iPhone, iPad, Mac.</li>
              <li>Tap green camera icon next to contact.</li>
              <li>Both must have Apple device — no PC.</li>
              <li>Free, no setup required.</li>
              <li>Best quality of all options.</li>
              <li>Works over WiFi or cellular.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Zoom — universal</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Free for 40-minute group calls.</li>
              <li>Works on any device — phone, tablet, computer.</li>
              <li>Mix of Apple + Android + Windows users.</li>
              <li>Up to 100 people on one call.</li>
              <li>Best for family Sunday calls.</li>
              <li>Family member usually hosts.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Google Meet</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Free with Google account.</li>
              <li>Works on any device.</li>
              <li>1-hour limit on free version.</li>
              <li>Easy invite via email.</li>
              <li>Built into Gmail.</li>
              <li>Good Zoom alternative.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">WhatsApp video</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Free if both have WhatsApp.</li>
              <li>Works iPhone + Android.</li>
              <li>International calls free over WiFi.</li>
              <li>Up to 32 people on call.</li>
              <li>Most popular outside US.</li>
              <li>Great for international family.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Tips for grandparent video calls</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Schedule weekly time — Sunday after dinner works.</li>
              <li>Tablet on stand is easier than holding phone.</li>
              <li>Read a book together aloud.</li>
              <li>Show grandkids what you&apos;re doing or making.</li>
              <li>Keep calls short with young kids — 15 min max.</li>
              <li>Send pictures/videos between calls.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">When tech fails</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Audio only? Internet too slow — close other apps.</li>
              <li>Frozen screen? Hang up + restart call.</li>
              <li>Echo? One person mute when not talking.</li>
              <li>Can&apos;t hear? Check volume + speaker icon.</li>
              <li>Camera flipped? Tap camera-flip icon.</li>
              <li>Restart phone if all else fails.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Schedule weekly grandparent time</h3>
            <p className="text-sm text-muted-foreground">The best video chat strategy: set a weekly recurring family video call. Sunday afternoons work for many. Use FaceTime if everyone has Apple, Zoom for mixed devices. Read a book to grandkids, ask about their week, share what you&apos;re doing. Even 20 minutes weekly maintains connection during seasons when in-person visits aren&apos;t possible.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
