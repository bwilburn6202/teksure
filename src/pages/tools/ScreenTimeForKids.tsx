import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Clock } from 'lucide-react';

export default function ScreenTimeForKids() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Screen Time for Kids — Plain-English Guide | TekSure" description="Recommended screen time by age, free apps to enforce limits, and what counts as &quot;good&quot; vs &quot;junk&quot; screen time. Grandparent-friendly." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Clock className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Screen Time for Kids</h1>
          <p className="text-lg text-muted-foreground">For grandparents who help raise grandkids.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">AAP recommended limits</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Under 18 months</strong> — only video calls (Grandma on FaceTime).</li>
              <li><strong>18-24 months</strong> — high-quality with adult.</li>
              <li><strong>2-5 years</strong> — 1 hour/day max, with adult co-watching.</li>
              <li><strong>6+ years</strong> — consistent limits, school nights stricter.</li>
              <li>NO screens 30 min before bed (blue light disrupts sleep).</li>
              <li>NO screens during meals.</li>
              <li>NO screens in bedroom for under-12.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Built-in screen time tools</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>iPhone/iPad — Screen Time</strong> — Settings → Screen Time. Pin-locked time limits, app limits, content filters.</li>
              <li><strong>Android — Family Link</strong> — free Google app. Same idea.</li>
              <li><strong>Apple Family Sharing</strong> — set up grandkid&apos;s account. You get reports.</li>
              <li><strong>Google Family Link</strong> — Android equivalent.</li>
              <li><strong>Bark</strong> — $14/mo. Monitors texts/social for cyberbullying.</li>
              <li><strong>Circle (Disney)</strong> — $130 + $10/mo. Whole-home wifi parental control.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Good vs junk screen time</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>GOOD</strong> — video chat with family, learning apps (Khan Academy Kids), educational shows (Sesame Street, Bluey, Wild Kratts), reading apps (Epic!), creative tools (Lego app, GarageBand).</li>
              <li><strong>NEUTRAL</strong> — most age-appropriate movies, audiobooks.</li>
              <li><strong>JUNK</strong> — endless YouTube/TikTok scrolling, ad-heavy free games, &quot;unboxing&quot; videos, anything algorithm-driven.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Grandparent-friendly rules</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Ask parents what THEIR rules are — follow them.</li>
              <li>Don&apos;t feel guilty saying "screens off, let&apos;s [ride bikes / bake / play board games]".</li>
              <li>If you allow extra — be honest with parents.</li>
              <li>Co-watch some — best bonding.</li>
              <li>Put devices in a basket during dinner / before bed.</li>
              <li>Books are still better. Magic.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Best free tools</h3>
            <p className="text-sm text-muted-foreground"><strong>Khan Academy Kids</strong> — free, ad-free, ages 2-8. <strong>PBS Kids</strong> — free, educational. <strong>YouTube Kids</strong> — restricted YouTube (better than regular YouTube, still imperfect). <strong>Common Sense Media</strong> — reviews movies/games/apps for age-appropriateness.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
