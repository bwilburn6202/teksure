import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Bird } from 'lucide-react';

export default function HummingbirdFeederSetup() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Hummingbird Feeder Setup | TekSure" description="Attract hummingbirds. Plain-English guide for senior bird-watchers — feeders, recipes, plants." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Bird className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Hummingbird Feeder Setup</h1>
          <p className="text-lg text-muted-foreground">Tiny visitors that bring big joy.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Right feeder picks</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Aspects HummZinger</strong> — $20. Easy to clean, ant moat built-in.</li>
              <li><strong>Perky-Pet Glass</strong> — $15. Classic, holds more.</li>
              <li><strong>First Nature 8oz</strong> — $10. Cheap + works great.</li>
              <li>Red color attracts (no red dye in nectar though).</li>
              <li>Multiple feeding ports — less aggression.</li>
              <li>Glass cleans easier than plastic.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">DIY nectar (4:1 ratio)</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>1 part REGULAR white sugar.</li>
              <li>4 parts water.</li>
              <li>Boil 1-2 minutes — kills mold.</li>
              <li>Cool to room temperature.</li>
              <li>NO red dye — harms hummingbirds.</li>
              <li>NO honey, brown sugar, sweetener.</li>
              <li>Store extra in fridge up to 1 week.</li>
              <li>Costs $0.10 per fill vs $5 commercial.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Cleaning routine</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Replace nectar every 4-5 days (more often if hot).</li>
              <li>Mold = sick birds = won&apos;t come back.</li>
              <li>Wash with hot water + mild soap weekly.</li>
              <li>NO bleach — residue harms birds.</li>
              <li>Bottle brush helps reach corners.</li>
              <li>Dry completely before refilling.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Where to hang</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Window-view location — enjoy from inside.</li>
              <li>4-5 feet off ground.</li>
              <li>Near (not in) bushes for hiding spots.</li>
              <li>Multiple feeders 10+ feet apart (territorial).</li>
              <li>Shade in afternoon — keeps nectar fresh.</li>
              <li>Away from windows (or use decals to prevent strikes).</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Native plants attract more</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Bee balm</strong> — perennial favorite.</li>
              <li><strong>Salvia</strong> — many varieties.</li>
              <li><strong>Trumpet vine</strong> — climbing favorite.</li>
              <li><strong>Cardinal flower</strong> — wet areas.</li>
              <li><strong>Coral honeysuckle</strong> — non-invasive type.</li>
              <li><strong>Petunias</strong> — easy annual.</li>
              <li><strong>Zinnias</strong> — colorful summer.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Migration timing</h3>
            <p className="text-sm text-muted-foreground">Hummingbirds migrate. Put feeders out 1-2 weeks before they typically arrive. Track migration at Hummingbird Central. East coast: Ruby-throated. West coast: Anna&apos;s, Allen&apos;s, Rufous. Take down 2 weeks after last sighting in fall (myth they need feeders to migrate — they don&apos;t).</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
