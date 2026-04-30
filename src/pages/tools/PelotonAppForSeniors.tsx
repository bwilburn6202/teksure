import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Bike } from 'lucide-react';

export default function PelotonAppForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Peloton App for Seniors | TekSure" description="Peloton without the bike — app-only workouts for senior users. Variety + community." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Bike className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Peloton App</h1>
          <p className="text-lg text-muted-foreground">Peloton classes without the $2,500 bike.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Don&apos;t need the bike</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Peloton App — $13/month or $129/year.</li>
              <li>Hundreds of classes without bike or treadmill.</li>
              <li>Yoga, strength, walking, cardio, meditation.</li>
              <li>Stream from app to TV.</li>
              <li>Free 30-day trial.</li>
              <li>Way cheaper than $2,500 bike.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best for seniors</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Outdoor walking classes (audio-guided).</li>
              <li>Beginner Yoga + Strength.</li>
              <li>Meditation library.</li>
              <li>Stretching for flexibility.</li>
              <li>Low-impact cardio options.</li>
              <li>Filter by 5–20 minute classes.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">App features</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Filter by length, instructor, level.</li>
              <li>Save favorites.</li>
              <li>Track progress over time.</li>
              <li>Stream to Apple TV, Roku, Fire Stick.</li>
              <li>Take classes anywhere — hotel room, vacation.</li>
              <li>Download for offline use.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Famous instructors</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Cody Rigsby — popular cardio.</li>
              <li>Robin Arzon — strength + motivation.</li>
              <li>Kristin McGee — yoga + meditation.</li>
              <li>Anna Greenberg — gentle strength.</li>
              <li>Try different instructors to find favorites.</li>
              <li>Each has unique style.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Should seniors buy the bike?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Bike: $1,500 + $44/month subscription.</li>
              <li>Bike+: $2,500 + $44/month.</li>
              <li>Probably not for most seniors.</li>
              <li>App-only is plenty for most.</li>
              <li>If serious cyclist + 5+ classes a week — consider.</li>
              <li>Refurbished bikes available.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Tread alternatives</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Use Peloton classes with any treadmill.</li>
              <li>Or NordicTrack with iFit ($39/month).</li>
              <li>Or Echelon Stride.</li>
              <li>Don&apos;t need brand-name treadmill.</li>
              <li>Outdoor walking classes great + free.</li>
              <li>Senior-friendly options abound.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">App-only $13 is the sweet spot</h3>
            <p className="text-sm text-muted-foreground">Peloton App at $13/month is genuinely good value if you enjoy variety. Hundreds of yoga, strength, walking, and meditation classes. No bike or treadmill needed. Try the 30-day free trial — see if you click with the instructor styles. Many seniors find the celebrity-energy of Peloton classes more motivating than other apps.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
