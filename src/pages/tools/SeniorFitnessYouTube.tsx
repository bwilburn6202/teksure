import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { PlaySquare } from 'lucide-react';

const CHANNELS = [
  { name: 'SilverSneakers', cost: 'FREE', best: 'Official SilverSneakers brand. Strength, cardio, balance, yoga — all free. New videos weekly.', good: 'Best overall.' },
  { name: 'More Life Health Seniors', cost: 'FREE', best: 'Mike Hines. Australian PT. Specifically 60+ programs. Beginner-friendly.', good: 'Best PT-led.' },
  { name: 'Eldergym', cost: 'FREE / $30/yr Premium', best: 'Doug Schrift PT. Senior-specific routines. Some need premium.', good: 'Best paid + free.' },
  { name: 'HASfit (Heart and Soul Fitness)', cost: 'FREE', best: 'Senior modifications shown. Sit-down options. Strong cardio.', good: 'Best variety.' },
  { name: 'Yes2Next (Pahla B)', cost: 'FREE', best: 'Senior fitness coach. Friendly tone. Strong on women 50+ programs.', good: 'Best community feel.' },
  { name: 'Yoga with Adriene', cost: 'FREE', best: '12M+ subscribers. Some senior-friendly. Search "yoga for seniors" on her channel.', good: 'Best yoga.' },
];

export default function SeniorFitnessYouTube() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Senior Fitness YouTube Channels | TekSure" description="Free senior workout videos. Plain-English picks for the best YouTube channels — chair, balance, strength, yoga." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <PlaySquare className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Senior Fitness YouTube</h1>
          <p className="text-lg text-muted-foreground">Free workouts on your TV.</p>
        </div>

        <div className="space-y-3 mb-6">
          {CHANNELS.map(c => (
            <Card key={c.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{c.name}</h3>
                  <span className="text-sm font-semibold text-primary">{c.cost}</span>
                </div>
                <p className="text-sm">{c.best}</p>
                <p className="text-sm text-muted-foreground">{c.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Cast to TV</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Smart TV — open YouTube app on TV, search channel.</li>
              <li>Roku/FireTV — same. YouTube app.</li>
              <li>iPhone — open YouTube app, tap cast icon (top right). Picks Apple TV/Chromecast.</li>
              <li>iPad → smart TV via "AirPlay" or HDMI cable.</li>
              <li>Big screen makes it easier to follow form.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Pick the right level</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Brand new</strong> — start with chair workouts only.</li>
              <li><strong>Already active</strong> — standing balance + light strength.</li>
              <li><strong>Athletic 60+</strong> — full-body strength, longer cardio.</li>
              <li>Listen to your body. Stop if dizzy or short of breath.</li>
              <li>Check with doctor before starting if heart or BP issues.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Build the habit</h3>
            <p className="text-sm text-muted-foreground">Same time + place every day. Say "After morning coffee, I do my 15-minute video." Within 2 weeks, the habit sticks. Skip a day, no big deal — just don&apos;t skip two in a row.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
