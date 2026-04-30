import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Video } from 'lucide-react';

export default function VideoLettersGrandkids() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Video Letters for Grandkids | TekSure" description="Record video messages for grandkids' future. Plain-English guide to recording + storing." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Video className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Video Letters for Grandkids</h1>
          <p className="text-lg text-muted-foreground">Your voice + face = priceless gift forever.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why video over written</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Grandkids will remember your VOICE.</li>
              <li>Easier than writing.</li>
              <li>Show personality, mannerisms.</li>
              <li>5 minutes = enough.</li>
              <li>Multiple short videos &gt; one long one.</li>
              <li>Future generations will treasure.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Topics to record</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>The day grandkid was born — your memory.</li>
              <li>What you hope for them as adults.</li>
              <li>Family stories not in books.</li>
              <li>How world was different growing up.</li>
              <li>Your favorite memory of them.</li>
              <li>Love letters for milestones (graduation, wedding).</li>
              <li>Cooking demos with family recipe.</li>
              <li>&quot;If I could give you one piece of advice...&quot;</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">How to record</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Phone camera — Camera app → Video.</li>
              <li>Front camera so you see yourself.</li>
              <li>Good lighting (face the window).</li>
              <li>Quiet room.</li>
              <li>Phone held steady (lean against book/wall).</li>
              <li>Don&apos;t script — speak naturally.</li>
              <li>Mistakes okay — they make it real.</li>
              <li>5-10 min max per video.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Where to store</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>iCloud / Google Photos</strong> — automatic backup.</li>
              <li><strong>External hard drive</strong> — give to kids.</li>
              <li><strong>YouTube</strong> — set as &quot;Unlisted&quot; for private sharing.</li>
              <li><strong>Vimeo</strong> — password-protected for family.</li>
              <li><strong>Dropbox / OneDrive</strong> — share with family folder.</li>
              <li>Multiple backups essential.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Time-locked services</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>FutureMe.org</strong> — schedule emails to deliver later.</li>
              <li><strong>Vimeo Showcase</strong> — release on date you set.</li>
              <li><strong>Trust + Estate</strong> — instructions for video releases (graduations, marriages, births).</li>
              <li>Letter to estate executor: &quot;Release video #3 when grandchild graduates HS.&quot;</li>
              <li>Lasting legacy beyond your lifetime.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Voicemail magic</h3>
            <p className="text-sm text-muted-foreground">Save your phone&apos;s voicemail greeting from grandkids. Family member who passed = leave their voicemail recorded forever. Your voice = better than any written letter for grandkids&apos; memory. Even short clips become treasures decades later.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
