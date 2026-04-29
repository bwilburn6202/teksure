import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Music } from 'lucide-react';

export default function HarmonicaForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Harmonica for Seniors | TekSure" description="Pocket harmonica for seniors. Plain-English beginner guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Music className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Harmonica for Seniors</h1>
          <p className="text-lg text-muted-foreground">Cheap, portable. Lung exercise + fun.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Why harmonica?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Pocket-size — anywhere.</li>
              <li>$30-50 = good harmonica.</li>
              <li>Lung exercise — proven for COPD.</li>
              <li>Easier than guitar.</li>
              <li>Country, blues, gospel sounds.</li>
              <li>Calming for anxiety.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best beginner</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Hohner Special 20</strong> ($45) — gold standard.</li>
              <li><strong>Lee Oskar Major Diatonic</strong> ($45).</li>
              <li><strong>Suzuki Harpmaster</strong> ($35).</li>
              <li>Get key of C — most songs.</li>
              <li>Avoid: cheap $5 harmonicas (bad).</li>
              <li>Diatonic harmonica = beginner type.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">First steps</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Hold loosely between thumb + finger.</li>
              <li>Mouth wide enough for 3 holes.</li>
              <li>Blow gently (not hard).</li>
              <li>Single notes = lip pucker or tongue block.</li>
              <li>In + out same hole = different notes.</li>
              <li>Inhale + exhale equal.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Learn online</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>JP Allen</strong> — YouTube + free course.</li>
              <li><strong>Tomlin Leckie</strong> — YouTube blues.</li>
              <li><strong>Mickey Raphael</strong> — Willie Nelson&apos;s harmonica player.</li>
              <li><strong>HarmonicaAcademy.com</strong>.</li>
              <li>YouTube — search song name + harmonica tab.</li>
              <li>Library — harmonica books.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">First easy songs</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Mary Had a Little Lamb.</li>
              <li>When the Saints Go Marching In.</li>
              <li>You Are My Sunshine.</li>
              <li>Camptown Races.</li>
              <li>Folsom Prison Blues riff.</li>
              <li>Simple country tunes.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Health benefits</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Strengthens diaphragm.</li>
              <li>Studies — improves COPD breathing.</li>
              <li>Lung capacity increased.</li>
              <li>Breathing focus = stress relief.</li>
              <li>Brain rhythm + memory.</li>
              <li>Anytime, anywhere.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Senior bands</h3>
            <p className="text-sm text-muted-foreground">Lots of senior centers + churches have country / bluegrass jams. Bring harmonica — join in. Folks happy to play with you. Don&apos;t need to read music. 30 days = playing songs. 90 days = playing along. Make friends through music. Lifetime hobby.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
