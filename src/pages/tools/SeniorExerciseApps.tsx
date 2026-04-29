import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Activity } from 'lucide-react';

const APPS = [
  { name: 'SilverSneakers GO', cost: 'FREE for members (often free with Medicare Advantage)', best: 'Built for 65+. Find local gyms (10,000+ partners — Anytime Fitness, Planet Fitness, YMCAs, Curves). On-demand video workouts.', good: 'Many Medicare Advantage plans cover SilverSneakers free.' },
  { name: 'Renew Active (UnitedHealthcare)', cost: 'FREE for members', good: 'Equivalent to SilverSneakers for UHC plans.', best: 'Free gym memberships, exercise classes, brain games.' },
  { name: 'GoActive (Humana)', cost: 'FREE for members', best: 'Humana\'s equivalent senior fitness program. Free gym + classes.', good: 'Check your Humana plan benefits.' },
  { name: 'Yoga With Adriene (free on YouTube)', cost: 'FREE', best: 'Most beloved free yoga teacher. "Yoga for Seniors" series, "Chair yoga" series. Gentle and clear.', good: 'No app needed — just YouTube.' },
  { name: 'Apple Fitness+', cost: '$10/mo or free with Apple One', best: 'Best produced workout videos — yoga, pilates, walking, low-impact. "Fitness for Seniors" category.', good: 'Free 3 months with new Apple Watch.' },
  { name: 'Peloton App', cost: '$13/mo (no bike needed)', best: 'Walking, yoga, strength, cardio. The "App One" plan doesn\'t need a Peloton bike. Senior-friendly classes.', good: 'Free 30-day trial.' },
  { name: 'NHS Couch to 5K (free)', cost: 'FREE', best: 'Free walking-to-running program. 9 weeks. From the British NHS but works anywhere.', good: 'Best for getting back to walking/running.' },
];

export default function SeniorExerciseApps() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Senior Exercise Apps — SilverSneakers, Free Yoga, Apple Fitness+ | TekSure" description="Free gym memberships through Medicare. Chair yoga, walking programs, low-impact exercise. Plain-English picks for staying active over 60." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Activity className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Senior Exercise Apps</h1>
          <p className="text-lg text-muted-foreground">Stay strong and balanced — at home or the gym.</p>
        </div>

        <Card className="mb-6 bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <h2 className="font-bold mb-2">Why exercise matters more after 60</h2>
            <p className="text-sm">Strength training literally adds years to life. Walking 30 min/day cuts heart disease risk by 30%. Balance work prevents falls (the #1 cause of senior injury). Best news: even SHORT, light exercise has big effects.</p>
          </CardContent>
        </Card>

        <div className="space-y-3 mb-6">
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

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Check your insurance for free fitness</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Most <strong>Medicare Advantage</strong> plans include SilverSneakers, Renew Active, or GoActive — often FREE.</li>
              <li>Call the number on your insurance card and ask "Do I have a free fitness benefit?".</li>
              <li>If yes, you walk into a partner gym (Planet Fitness, Anytime Fitness, YMCA, Curves) and just say "I have SilverSneakers" — they sign you up free.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">For people who can\'t leave home</h2>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li><strong>YouTube "chair yoga"</strong> — hundreds of free 10-30 minute videos.</li>
              <li><strong>YouTube "senior strength training"</strong> — instructors like Bob & Brad Physical Therapists are golden.</li>
              <li><strong>Apple Fitness+</strong> — has dedicated senior categories, including chair-only.</li>
              <li><strong>SilverSneakers GO app</strong> — on-demand from home.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Best place to start</h3>
            <p className="text-sm text-muted-foreground">Walk 20 minutes a day. That\'s it. Add light resistance (canned soup or 1-2lb dumbbells) twice a week. Add balance — stand on one foot for 30 seconds while brushing teeth. Three pillars, no gym needed, dramatic health benefits.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
