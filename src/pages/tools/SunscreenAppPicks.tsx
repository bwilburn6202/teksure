import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Sun } from 'lucide-react';

const APPS = [
  { name: 'EWG Skin Deep', cost: 'FREE', best: 'Rates sunscreens 1-10 for safety + effectiveness.', good: 'Best safety check.' },
  { name: 'WeatherKit (built-in iPhone)', cost: 'FREE', best: 'Apple Weather app shows UV index. Plan accordingly.', good: 'Best built-in.' },
  { name: 'AccuWeather UV Index', cost: 'FREE', best: 'Real-time UV with hourly forecast.', good: 'Best UV forecast.' },
  { name: 'Apple Watch UV', cost: 'FREE with watch', best: 'Watch shows UV index throughout day.', good: 'Best on watch.' },
  { name: 'My Skin Track UV (La Roche)', cost: '$60 device', best: 'Tiny clip-on UV meter.', good: 'Best wearable.' },
];

export default function SunscreenAppPicks() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Sun Safety Apps + Picks for Seniors | TekSure" description="UV index trackers + best senior sunscreens. Plain-English picks. Skin cancer prevention." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Sun className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Sun Safety</h1>
          <p className="text-lg text-muted-foreground">Skin cancer = #1 cancer in seniors.</p>
        </div>

        <div className="space-y-3 mb-6">
          {APPS.map(a => (
            <Card key={a.name}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-lg">{a.name}</h3>
                  <span className="text-sm font-semibold text-primary">{a.cost}</span>
                </div>
                <p className="text-sm">{a.best}</p>
                <p className="text-sm text-muted-foreground">{a.good}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best sunscreens for seniors</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Mineral / zinc-based</strong> — best for sensitive skin. EltaMD UV Clear, La Roche-Posay Mineral.</li>
              <li><strong>SPF 30+ daily</strong> — face. Even cloudy days.</li>
              <li><strong>SPF 50+ for full sun</strong> — pool, beach, golf.</li>
              <li><strong>Reapply every 2 hours</strong>.</li>
              <li><strong>1 oz/full body</strong> — most people use too little.</li>
              <li>Avoid expired sunscreen — replace every 2 years.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior-specific cancer screening</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Annual skin check by dermatologist (Medicare covered for at-risk).</li>
              <li>Self-check monthly: ABCDE — Asymmetry, Border, Color, Diameter (>6mm), Evolving.</li>
              <li>Photo any new spots — track changes.</li>
              <li>Most senior skin cancers caught early are curable.</li>
              <li>Free skin checks — many dermatologists do during May (Skin Cancer Awareness).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Smarter than sunscreen</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Wide-brim hat (not baseball cap) — best protection.</li>
              <li>UPF clothing — Sun Smart wear.</li>
              <li>Avoid 10am-4pm sun.</li>
              <li>Sunglasses with 100% UV.</li>
              <li>Long sleeves on long outdoor days.</li>
              <li>Check shadow rule: shadow shorter than you = strong UV.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Vitamin D matters too</h3>
            <p className="text-sm text-muted-foreground">Don&apos;t avoid sun completely — Vitamin D from sunlight is important. 10-15 min morning sunlight on face/arms 2-3x/week. Or Vitamin D supplement (1,000-2,000 IU/day common). Test annually with doctor.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
