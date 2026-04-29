import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Music } from 'lucide-react';

export default function BallroomDancingSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Ballroom Dancing for Seniors | TekSure" description="Senior ballroom + line + square dancing. Plain-English guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Music className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Ballroom Dancing</h1>
          <p className="text-lg text-muted-foreground">Best brain + body + social senior activity.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why senior favorite</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Reduces dementia 76% in studies.</li>
              <li>Best aerobic + balance combo.</li>
              <li>Brain learning patterns.</li>
              <li>Social — meet partners.</li>
              <li>Music + joy.</li>
              <li>Can be alone (line dancing).</li>
              <li>Many seniors&apos; favorite.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior-friendly dance types</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Line dancing</strong> — no partner needed.</li>
              <li><strong>Square dancing</strong> — group, fun, calls.</li>
              <li><strong>Country two-step</strong> — easy, fun.</li>
              <li><strong>Waltz</strong> — graceful.</li>
              <li><strong>Foxtrot</strong> — classic ballroom.</li>
              <li><strong>Swing</strong> — energetic but adapt.</li>
              <li><strong>Salsa</strong> — Latin energy.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Where to dance</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Senior centers</strong> — most have classes.</li>
              <li><strong>Community colleges</strong>.</li>
              <li><strong>Arthur Murray studios</strong> — paid lessons.</li>
              <li><strong>Local dance studios</strong>.</li>
              <li><strong>Country dance halls</strong>.</li>
              <li><strong>Cruise ships</strong> — many senior dance cruises.</li>
              <li>$10-30 per class typically.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior tips</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Comfortable shoes (dance shoes optional).</li>
              <li>Stay hydrated.</li>
              <li>Don&apos;t over-do — pace yourself.</li>
              <li>Take breaks.</li>
              <li>Don&apos;t need partner — solo classes great.</li>
              <li>Single seniors meet through dance.</li>
              <li>Studies show longevity boost.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Studies are clear</h3>
            <p className="text-sm text-muted-foreground">Bronx Aging Study: dancing reduces dementia risk 76% (more than chess, crosswords). Combination of physical + mental + social = best brain health activity. Plus joy. Try it weekly.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
