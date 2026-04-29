import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Video } from 'lucide-react';

export default function ZoomBeginnerTips() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Zoom for Senior Beginners | TekSure" description="First Zoom call. Plain-English step-by-step. Audio fixes, video, mute, screen sharing." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Video className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Zoom Beginner Tips</h1>
          <p className="text-lg text-muted-foreground">First call. Confidence.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Setup before first call</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Download Zoom app on phone OR computer.</li>
              <li>Sign up with email + password (free).</li>
              <li>Test camera + mic in app settings.</li>
              <li>Test by calling yourself or family at non-business time.</li>
              <li>Practice mute button + video button.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Joining a meeting</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Click meeting link in email OR open Zoom app + enter Meeting ID.</li>
              <li>Click "Join with Computer Audio" (very important).</li>
              <li>Click camera icon to turn ON video.</li>
              <li>Click mic icon to mute / unmute.</li>
              <li>Wave hello when you arrive.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Common problems</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>"Can&apos;t hear anything"</strong> — click computer audio button. Check volume up.</li>
              <li><strong>"They can&apos;t hear me"</strong> — check mic icon (should be black, not red).</li>
              <li><strong>"Video upside down"</strong> — Settings → Video → flip.</li>
              <li><strong>"My face is dark"</strong> — sit FACING window. Don&apos;t backlight yourself.</li>
              <li><strong>"It&apos;s laggy"</strong> — turn off video, audio-only.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior tips</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Wired headphones improve audio.</li>
              <li>Phone propped up at eye level (not lap).</li>
              <li>Lighting on FACE, not behind.</li>
              <li>Mute when not speaking — kills feedback.</li>
              <li>Tap "Speaker View" to see whoever&apos;s talking large.</li>
              <li>Live Captions on iPhone (Settings → Accessibility) — auto-subtitles.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Practice with grandkid</h3>
            <p className="text-sm text-muted-foreground">Best practice: ask grandkid for a 15-min Zoom test. They show you tricks. You show them the buttons you&apos;ve mastered. Builds confidence + connection. Better than YouTube tutorial.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
