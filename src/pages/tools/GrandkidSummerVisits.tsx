import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Sun } from 'lucide-react';

export default function GrandkidSummerVisits() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Grandkid Summer Visits | TekSure" description="Plan summer with grandkids. Plain-English senior summer guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Sun className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Grandkid Summer Visits</h1>
          <p className="text-lg text-muted-foreground">Make memories without exhausting yourself.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Length of visits</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Long weekend (3-4 days) ideal first visits.</li>
              <li>Whole week okay if you have energy.</li>
              <li>2 weeks demanding for most seniors.</li>
              <li>Discuss with parents.</li>
              <li>Quality &gt; quantity.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Daily structure</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Morning activity (energetic).</li>
              <li>Lunch + quiet time (TV/reading).</li>
              <li>Afternoon outing.</li>
              <li>Dinner together.</li>
              <li>Quiet evening — bath, story, bed.</li>
              <li>Senior bedtime EARLIER than parents&apos;.</li>
              <li>You need rest too.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior-pace activities</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Park outings.</li>
              <li>Swimming (you watch from chair).</li>
              <li>Library story time.</li>
              <li>Cooking together.</li>
              <li>Movies.</li>
              <li>Crafts (Hobby Lobby has senior-friendly).</li>
              <li>Picnics.</li>
              <li>Photo albums + family stories.</li>
              <li>Old-fashioned games.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Skip these</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Theme parks (exhausting).</li>
              <li>All-day excursions.</li>
              <li>Tourist hot spots crowded.</li>
              <li>Late nights.</li>
              <li>Heavy hikes / sports.</li>
              <li>Save those for parents.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Cousin time</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Multiple grandkids = exponentially harder.</li>
              <li>1 at a time = quality.</li>
              <li>2 cousins together = fun, watch each other.</li>
              <li>3+ = stressful for many seniors.</li>
              <li>Or invite grown adult child to help.</li>
              <li>Family reunions seasonal best.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">After they leave</h3>
            <p className="text-sm text-muted-foreground">Rest 2-3 days. Recovery time normal. Send photo collage to grandkids. Letter or call to share favorite moment. Plan next visit. These memories last decades. Worth the exhaustion. Nap is well-earned.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
