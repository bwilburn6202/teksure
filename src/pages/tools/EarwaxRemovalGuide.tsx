import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Ear } from 'lucide-react';

export default function EarwaxRemovalGuide() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Earwax Removal for Seniors | TekSure" description="Safe earwax removal at home + when to see doctor. Plain-English guide for seniors." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Ear className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Earwax Removal</h1>
          <p className="text-lg text-muted-foreground">Most seniors have wax buildup mistaken for hearing loss.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why seniors get more earwax</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Glands produce drier wax with age.</li>
              <li>Hair in ear canal traps it.</li>
              <li>Hearing aids push wax deeper.</li>
              <li>30% of seniors have impacted wax — many think it&apos;s hearing loss.</li>
              <li>Safe removal often restores hearing immediately.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">NEVER use</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Cotton swabs (Q-tips) — push wax deeper.</li>
              <li>Ear candles — proven dangerous + ineffective.</li>
              <li>Bobby pins, pencils, fingers.</li>
              <li>Water if eardrum tube/perforation/hearing aid.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Safe at-home methods</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Debrox drops</strong> — $8. Hydrogen peroxide-based. 5 drops, wait 5 min, drain.</li>
              <li><strong>Mineral oil</strong> — 2-3 drops, soften wax over 2 days.</li>
              <li><strong>Bulb syringe</strong> — warm water rinse after softening.</li>
              <li><strong>Earigate</strong> — water spray cleaner, $30.</li>
              <li>Tilt head, drops in, lay 5 min, drain on towel.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">See doctor if</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Sudden hearing loss.</li>
              <li>Pain, drainage, blood.</li>
              <li>Dizziness or vertigo.</li>
              <li>Hearing aid wearer (don&apos;t self-treat).</li>
              <li>History of eardrum surgery / perforation.</li>
              <li>Doctors use micro-suction or curettes — fast + painless.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Medicare covers</h3>
            <p className="text-sm text-muted-foreground">Doctor earwax removal covered by Medicare Part B. ENT specialist visit if blockage severe. Hearing aid users — get cleaned every 6 months. Free at most ENT offices for established patients.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
