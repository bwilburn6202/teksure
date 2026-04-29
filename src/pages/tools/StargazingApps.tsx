import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Sparkles } from 'lucide-react';

const APPS = [
  { name: 'Sky Tonight', cost: 'Free', best: 'Free, no ads. Tonight\'s constellations, the moon, planets visible. Updates daily.', good: 'Best free pick.' },
  { name: 'SkyView Lite', cost: 'Free; Pro $2', best: 'Hold your phone up to the sky — names appear over each constellation. Great for kids and grandkids.', good: 'Lite version is fine for casual use.' },
  { name: 'Star Walk 2', cost: '$3 once', best: 'Beautiful design. Best for serious learning — teaches mythology, deep-sky objects.', good: 'No subscription, one-time purchase.' },
  { name: 'NASA app', cost: 'Free', best: 'Live ISS tracker, daily astronomy photo, NASA TV stream.', good: 'Inspirational, great for grandkids.' },
  { name: 'PhotoPills', cost: '$11', best: 'For photographing the night sky — Milky Way, full moons, sunrise. Aimed at amateur photographers.', good: 'Niche but excellent.' },
];

export default function StargazingApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Stargazing Apps — Identify Stars and Planets | TekSure" description="Hold your phone to the sky — see what stars and planets you\'re looking at. Free apps for star-gazing, plus when to look for meteor showers." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Sparkles className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Stargazing Apps</h1>
          <p className="text-lg text-muted-foreground">Point your phone at the sky. Apps name what you\'re seeing.</p>
        </div>

        <Card className="mb-6 bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <h2 className="font-bold mb-2">How they work</h2>
            <p className="text-sm">Your phone\'s compass and tilt sensors know which direction you\'re holding it. The app overlays the names of stars, planets, and constellations on the screen, matching the real sky.</p>
          </CardContent>
        </Card>

        <div className="space-y-3">
          {APPS.map(a => (
            <Card key={a.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{a.name}</h3>
                  <span className="text-sm font-semibold text-primary">{a.cost}</span>
                </div>
                <p className="text-sm mb-1">{a.best}</p>
                <p className="text-sm text-muted-foreground">{a.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-6">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best things to look for through the year</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><strong>Big Dipper</strong> — visible all year in the northern US. Easy to find first.</li>
              <li><strong>Orion</strong> — winter king. Belt of three bright stars in a row.</li>
              <li><strong>Venus</strong> — usually the brightest "star" in dawn or dusk. It\'s a planet.</li>
              <li><strong>Jupiter & Saturn</strong> — bright steady "stars" not twinkling. Apps show when to look.</li>
              <li><strong>International Space Station (ISS)</strong> — passes overhead a few times a week. Bright moving point. NASA app shows when.</li>
              <li><strong>Meteor showers</strong> — Perseids (August), Geminids (December), Quadrantids (January) — best free shows in nature.</li>
              <li><strong>Lunar eclipses</strong> — visible from your backyard with no equipment.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mt-4 bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Best with grandkids</h3>
            <p className="text-sm text-muted-foreground">SkyView Lite + a meteor shower night = magic. Bring lawn chairs, tea, and pick a date 1-2 days BEFORE the peak (less crowded, often clearer). Most kids remember the first time they spotted Saturn for life.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
