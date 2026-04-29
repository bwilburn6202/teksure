import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Youtube } from 'lucide-react';

export default function YouTubeForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="YouTube for Seniors | TekSure" description="Endless free content. Plain-English YouTube guide for senior viewers." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Youtube className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">YouTube for Seniors</h1>
          <p className="text-lg text-muted-foreground">FREE. Endless. Educational.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What seniors love</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>How-to videos</strong> — fix anything yourself.</li>
              <li><strong>Travel videos</strong> — virtual sight-seeing.</li>
              <li><strong>Cooking</strong> — countless recipe channels.</li>
              <li><strong>History</strong> — documentaries.</li>
              <li><strong>Music + concerts</strong>.</li>
              <li><strong>Lectures + university classes</strong>.</li>
              <li><strong>Old TV shows + movies</strong>.</li>
              <li><strong>Senior fitness videos</strong>.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">YouTube Premium worth it?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>$14/mo Personal — no ads + downloads + YouTube Music.</li>
              <li>$23/mo Family — share with 5.</li>
              <li>FREE option works fine — just ads.</li>
              <li>Senior families share Family plan = $5/person.</li>
              <li>Premium worth if you watch 1+ hour/day.</li>
              <li>Replaces Spotify too.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior-favorite channels</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Bob &amp; Brad</strong> — physical therapy, senior-friendly.</li>
              <li><strong>HASfit</strong> — workouts seniors do.</li>
              <li><strong>Yes2Next</strong> — chair exercise.</li>
              <li><strong>Ryan Trahan</strong> — clean adventure.</li>
              <li><strong>Crash Course</strong> — educational.</li>
              <li><strong>Kurzgesagt</strong> — beautiful science.</li>
              <li><strong>Cooking with Dog</strong> — Japanese cooking.</li>
              <li><strong>BBC Earth</strong> — nature.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Setup well</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Sign up Google account if no Gmail.</li>
              <li>Subscribe to channels you like.</li>
              <li>Like videos = better recommendations.</li>
              <li>Disable autoplay if doom-scroll problem.</li>
              <li>Larger captions in settings.</li>
              <li>Cast to TV via Chromecast / AirPlay.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Watch out for</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Misleading thumbnails (clickbait).</li>
              <li>Conspiracy / health misinformation.</li>
              <li>Stick to verified creators.</li>
              <li>Be skeptical of medical advice.</li>
              <li>YouTube Shorts can be addictive — limit.</li>
              <li>Comment sections often toxic — ignore.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Cast to TV</h3>
            <p className="text-sm text-muted-foreground">Smart TV has YouTube app built-in. Sign in with phone QR code. Use phone as remote. Bigger screen + better audio. AirPlay (iPhone) or Chromecast = phone to TV. Most seniors prefer TV viewing over phone.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
