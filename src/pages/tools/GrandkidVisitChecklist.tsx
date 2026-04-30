import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Baby } from 'lucide-react';

export default function GrandkidVisitChecklist() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Grandkid Visit Checklist for Seniors | TekSure" description="Childproof + plan grandkid visits. Plain-English senior visit guide." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Baby className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Grandkid Visit Prep</h1>
          <p className="text-lg text-muted-foreground">Make memories. Stay safe.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Childproof basics</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Outlet covers everywhere.</li>
              <li>Cabinet locks (medications + chemicals).</li>
              <li>Stair gates if visiting multiple days.</li>
              <li>Toilet locks for crawlers.</li>
              <li>Cord wraps on blinds.</li>
              <li>Move breakables up high.</li>
              <li>Hot stove guard.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Medication safety</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Lock ALL meds high.</li>
              <li>Don&apos;t leave on counter.</li>
              <li>Pill organizer in locked drawer.</li>
              <li>No vitamins out either.</li>
              <li>Plant ID for poisonous houseplants.</li>
              <li>Poison Control: 1-800-222-1222.</li>
              <li>Save number in phone.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Activities</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Bake cookies together.</li>
              <li>Family photo album look-through.</li>
              <li>Crafts (age-appropriate).</li>
              <li>Garden together.</li>
              <li>Cook family recipe.</li>
              <li>Old games (cards, board games).</li>
              <li>Storytelling — your life stories.</li>
              <li>Walks in park.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior-friendly snacks</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Cheese cubes.</li>
              <li>Fruit slices.</li>
              <li>Crackers.</li>
              <li>Yogurt.</li>
              <li>Dry cereal.</li>
              <li>NO grapes whole (choking).</li>
              <li>NO popcorn under 4.</li>
              <li>NO hot dogs whole.</li>
              <li>NO hard candies.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Pace yourself</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Quiet time during day for senior rest.</li>
              <li>Movie / TV time okay sometimes.</li>
              <li>Activities matched to your energy.</li>
              <li>Don&apos;t overschedule.</li>
              <li>Take breaks.</li>
              <li>Earlier bedtime senior + kid wins.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Memorable not perfect</h3>
            <p className="text-sm text-muted-foreground">Grandkids remember the love + time, not perfect activities. Bake cookies even if they break. Read same book 5 times. Sing songs. Hugs. Laugh together. These memories last decades. Pace + plan for joy.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
