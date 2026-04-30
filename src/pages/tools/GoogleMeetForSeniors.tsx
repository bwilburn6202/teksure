import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Video } from 'lucide-react';

export default function GoogleMeetForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Google Meet for Seniors | TekSure" description="Google video calling. Free Google Meet senior guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Video className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Google Meet</h1>
          <p className="text-lg text-muted-foreground">Free Google video.</p>
        </div>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">What it is</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Google&apos;s Zoom alternative.</li><li>Free with Gmail.</li><li>Up to 100 people.</li><li>1 hour limit free.</li><li>No download needed (web).</li><li>Senior easy.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Join a meeting</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Click email link.</li><li>Or meet.google.com.</li><li>Type meeting code.</li><li>Allow camera + mic.</li><li>Join.</li><li>Senior simple.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Start a meeting</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Gmail compose.</li><li>Or meet.google.com.</li><li>New Meeting.</li><li>Send link via email.</li><li>Family clicks to join.</li><li>Senior easy share.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior wins</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Free closed captions.</li><li>Hand raise feature.</li><li>Mute by default.</li><li>Background blur.</li><li>Family group calls.</li><li>Doctor visits often use.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">vs Zoom + FaceTime</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Zoom most popular.</li><li>FaceTime Apple-only.</li><li>Meet works any device.</li><li>Senior platform-flexible.</li><li>Pick what family uses.</li><li>Free options all.</li></ul></CardContent></Card>
        <Card className="mb-4"><CardContent className="pt-6"><h2 className="font-bold text-xl mb-3">Senior tips</h2><ul className="list-disc pl-5 space-y-2 text-sm"><li>Test camera + mic before.</li><li>Quiet room.</li><li>Good lighting.</li><li>Captions for hearing.</li><li>Test link before sending.</li><li>Family help first time.</li></ul></CardContent></Card>
        <Card className="bg-muted/40"><CardContent className="pt-6"><h3 className="font-bold mb-2">Free Meet = senior video any device</h3><p className="text-sm text-muted-foreground">Free Google Meet with Gmail = senior video any platform. Works iPhone, Android, Windows, Mac. Closed captions free for hearing. Doctor offices often use Meet for telehealth. Pick whichever your family uses — Meet, Zoom, FaceTime all free.</p></CardContent></Card>
      </main>
      <Footer />
    </div>
  );
}
