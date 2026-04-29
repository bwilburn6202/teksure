import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Video } from 'lucide-react';

export default function VideoCallTipsForFamily() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Video Call Tips for Family — FaceTime, Zoom, WhatsApp | TekSure" description="Pick the right app, set up the room, fix common problems. Plain-English video call tips for grandparents and families." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Video className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Video Call Tips</h1>
          <p className="text-lg text-muted-foreground">FaceTime, Zoom, WhatsApp — pick the right one and use it well.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Which app to use?</h2>
            <ul className="space-y-2 text-sm">
              <li><strong>Everyone has iPhones?</strong> Use <strong>FaceTime</strong>. Already installed, works perfectly.</li>
              <li><strong>Mix of iPhone and Android?</strong> Use <strong>WhatsApp</strong>. Free, easy, works on every phone.</li>
              <li><strong>Big group call (4+)?</strong> Use <strong>Zoom</strong> or <strong>Google Meet</strong>. Free up to 40 minutes.</li>
              <li><strong>Just chatting with one grandkid who's on a school-issued device?</strong> Try <strong>Google Meet</strong> or <strong>Microsoft Teams</strong> — many schools use these.</li>
              <li><strong>Want to read a story to grandkids?</strong> Use <strong>Caribu</strong> — designed for grandparent-grandchild calls with shared books.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">📞 Set up the call (any app)</h2>
            <p className="font-semibold text-sm mt-2">Make a FaceTime call:</p>
            <ol className="list-decimal pl-5 space-y-1 text-sm mb-3">
              <li>Open FaceTime.</li>
              <li>Tap "New FaceTime" → type or pick a contact.</li>
              <li>Tap the green camera. They get a ringtone.</li>
            </ol>
            <p className="font-semibold text-sm">Make a WhatsApp call:</p>
            <ol className="list-decimal pl-5 space-y-1 text-sm mb-3">
              <li>Open WhatsApp → find the contact.</li>
              <li>Tap the camera icon (top right) for video, phone icon for voice only.</li>
            </ol>
            <p className="font-semibold text-sm">Join a Zoom call:</p>
            <ol className="list-decimal pl-5 space-y-1 text-sm">
              <li>Tap the link in the email/text the host sent.</li>
              <li>Zoom opens automatically (install it once if asked).</li>
              <li>Tap "Join with video" and "Join with audio".</li>
              <li>Tap the screen — controls appear at the bottom: Mute, Stop Video, Leave.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Look and sound great</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Light from in front, not behind.</strong> A window in front of you = lit-up face. A window behind = silhouette.</li>
              <li><strong>Camera at eye level.</strong> Stack a few books to prop up the phone or laptop. Looking down at the camera = double chin.</li>
              <li><strong>Headphones</strong> (any kind, even cheap ones) eliminate echo and boost sound quality dramatically.</li>
              <li><strong>Quiet room.</strong> Turn off the TV. Close the window if traffic is loud.</li>
              <li><strong>Plug in</strong> the laptop or phone — video calls drain batteries fast.</li>
              <li><strong>Wi-Fi over cellular</strong> if possible — fewer freezes.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">If something goes wrong</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Can't hear them:</strong> Check the volume buttons. Tap the speaker icon — make sure it's not muted.</li>
              <li><strong>They can't hear you:</strong> You're muted. Look for a microphone icon with a line through it — tap it.</li>
              <li><strong>Camera shows nothing:</strong> The "Stop Video" icon is on, OR another app has the camera. Close other apps.</li>
              <li><strong>Frozen video:</strong> Wi-Fi is weak. Move closer to the router. Or restart the call.</li>
              <li><strong>Screen too dark:</strong> Turn on a lamp facing you.</li>
              <li><strong>Echo or feedback:</strong> Use headphones. Otherwise, lower your volume.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Tips for grandkid video calls</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Keep them short — 10-15 minutes for younger kids. Their attention is short.</li>
              <li>Have a prop ready — a toy, a book, the family pet. Static face-to-face gets old fast.</li>
              <li>Read a story together (Caribu does this beautifully — picture book on shared screen).</li>
              <li>Show, don't just talk — go for a "tour of the house" with the camera.</li>
              <li>Stickers, filters, and silly hats keep little kids engaged. FaceTime, WhatsApp, and Zoom all have them in the app.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Schedule it</h3>
            <p className="text-sm text-muted-foreground">A scheduled weekly call (Sunday at 5 PM with the kids) is the single biggest predictor of staying close with grandkids who live far away. Put it on the calendar like a doctor's appointment — it sticks.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
