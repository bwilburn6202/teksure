import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Video } from 'lucide-react';

export default function ZoomThanksgivingTips() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Zoom Thanksgiving + Holiday Calls | TekSure" description="Family video calls when far apart. Plain-English tips for joyful Zoom Thanksgiving, Christmas, family video gatherings." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Video className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Zoom Thanksgiving Tips</h1>
          <p className="text-lg text-muted-foreground">Holiday connection from afar.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Pick the right tool</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Zoom</strong> — works on everything. Free 40-min for groups (or pay $15/mo unlimited).</li>
              <li><strong>FaceTime Group</strong> — if everyone iPhone. Up to 32 people. Free.</li>
              <li><strong>Google Meet</strong> — free, works in browser. Up to 100 people.</li>
              <li><strong>WhatsApp video</strong> — up to 32 people. Best for international family.</li>
              <li><strong>Facebook Messenger Rooms</strong> — up to 50, no time limit.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Setup BEFORE the day</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Schedule meeting + send link a week ahead.</li>
              <li>Test call WITH grandparents 2 days before.</li>
              <li>Prop iPad/laptop on counter facing dining room.</li>
              <li>External speaker for older folks (Echo, Bluetooth speaker).</li>
              <li>Bring extra phone cable + charger.</li>
              <li>Wifi password handy if hosting.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Make it joyful</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Set a START + END time. 1-2 hours max.</li>
              <li>Have a HOST who picks who speaks.</li>
              <li>Include the meal — turn camera around for "show your plate".</li>
              <li>Toast over Zoom — funny + meaningful.</li>
              <li>Take screenshots of group call — instant family photo.</li>
              <li>Game ideas: bingo, charades, "share what you&apos;re grateful for".</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Avoid these problems</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>"Mute when not speaking" rule — kills feedback noise.</li>
              <li>Backlit grandparents — face dark. Light should be ON face.</li>
              <li>Bad audio — wired earbuds work better than computer speakers.</li>
              <li>Wifi too weak — use 5GHz wifi if available, OR ethernet.</li>
              <li>Drama over politics — set a "no politics" rule ahead.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">It&apos;s OK to keep it short</h3>
            <p className="text-sm text-muted-foreground">15-30 min calls beat awkward 2-hour ones. Match in-person family rhythm. Older folks tire on long calls. Quality > quantity. Better to have great 20 min than mediocre 90 min.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
