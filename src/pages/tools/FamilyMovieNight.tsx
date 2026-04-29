import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Tv } from 'lucide-react';

export default function FamilyMovieNight() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Family Movie Night Picks | TekSure" description="Best family movies for grandparents + grandkids. Plain-English picks." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Tv className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Family Movie Night</h1>
          <p className="text-lg text-muted-foreground">Connect generations. Watch together.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best with grandkids 5-10</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Toy Story (all 4) — Disney+.</li>
              <li>Finding Nemo — Disney+.</li>
              <li>Frozen — Disney+.</li>
              <li>Sing — Netflix.</li>
              <li>Kung Fu Panda — Netflix.</li>
              <li>Paw Patrol Movie — Paramount+.</li>
              <li>The Mitchells vs. The Machines — Netflix.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best with grandkids 10-15</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Harry Potter (all) — HBO Max.</li>
              <li>Star Wars (original trilogy) — Disney+.</li>
              <li>Princess Bride — HBO Max.</li>
              <li>Back to the Future (all 3) — Peacock.</li>
              <li>Karate Kid — Netflix.</li>
              <li>Indiana Jones — Disney+.</li>
              <li>Spider-Man (animated) — Netflix.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Multi-generation classics</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Sound of Music — Disney+.</li>
              <li>Mary Poppins (original) — Disney+.</li>
              <li>The Wizard of Oz — Max.</li>
              <li>It&apos;s a Wonderful Life — Amazon.</li>
              <li>Singin&apos; in the Rain — TCM.</li>
              <li>Mary Poppins Returns — Disney+.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Series for binge nights</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>The Mandalorian — Disney+.</li>
              <li>Stranger Things (older kids) — Netflix.</li>
              <li>Wednesday — Netflix.</li>
              <li>Avatar: The Last Airbender — Netflix.</li>
              <li>Bluey — Disney+.</li>
              <li>Encanto — Disney+.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Watch remotely together</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li><strong>Teleparty</strong> — Chrome extension. Sync watching.</li>
              <li><strong>Disney+ GroupWatch</strong> — built-in.</li>
              <li><strong>Amazon Prime Watch Party</strong>.</li>
              <li><strong>Twoseven.xyz</strong> — multi-service sync.</li>
              <li>Video chat side-by-side OK.</li>
              <li>Pause + react together.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Movie night setup</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Pop popcorn (microwave OK).</li>
              <li>Theater snacks — candy + drinks.</li>
              <li>Dim lights.</li>
              <li>Sound system / soundbar important.</li>
              <li>Closed captions = on.</li>
              <li>Phones away (boundaries).</li>
              <li>Discuss after — what surprised you?</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Pre-screen difficult content</h3>
            <p className="text-sm text-muted-foreground">CommonSenseMedia.org rates kid-appropriateness. Check before watching with grandkids. Ask parents what kids may watch. Newer movies = more swearing/violence than older. Disney+ + Pixar generally safe. Pre-watch yourself first if uncertain. Build family tradition.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
