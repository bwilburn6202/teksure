import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Tv } from 'lucide-react';

export default function HASfitFreeYouTube() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="HASfit Free Workouts on YouTube for Seniors | TekSure" description="Hundreds of free senior workouts on YouTube. HASfit and other channels." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Tv className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Free Senior Workouts</h1>
          <p className="text-lg text-muted-foreground">Hundreds of free YouTube workouts.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">HASfit channel</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>3,000+ free workout videos on YouTube.</li>
              <li>Senior-specific section.</li>
              <li>Chair exercises.</li>
              <li>Low-impact cardio.</li>
              <li>Strength training for older adults.</li>
              <li>Free + completely accessible.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Other senior-friendly channels</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Yoga With Adriene — gentle yoga for everyone.</li>
              <li>SilverSneakers — official channel, free clips.</li>
              <li>Senior Fitness with Meredith — chair-based.</li>
              <li>AgeProof Your Body — research-based.</li>
              <li>Improved Health — slow tempo, clear instruction.</li>
              <li>All free.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Cast YouTube to TV</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Roku, Fire Stick, Apple TV all have YouTube app.</li>
              <li>Search workout, play on big screen.</li>
              <li>Better than squinting at phone.</li>
              <li>Or cast from phone using cast button.</li>
              <li>Smart TVs have YouTube built in usually.</li>
              <li>Living room becomes home gym.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Search tips</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>&quot;Senior chair workout 15 minutes&quot;</li>
              <li>&quot;Senior balance exercises&quot;</li>
              <li>&quot;Gentle yoga for seniors beginner&quot;</li>
              <li>&quot;Walking workout 20 minutes seniors&quot;</li>
              <li>&quot;Senior strength training resistance band&quot;</li>
              <li>YouTube finds dozens of options.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">YouTube Premium worth it?</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>$13.99/month removes ads.</li>
              <li>Background play (audio only).</li>
              <li>Download for offline.</li>
              <li>Family plan — $22.99/month for 6.</li>
              <li>Free version with ads is fine.</li>
              <li>Skip the subscription.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Build a routine</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Find 3–5 favorite videos.</li>
              <li>Save to a YouTube playlist.</li>
              <li>Pick 1 each day.</li>
              <li>Start with 10–15 minutes.</li>
              <li>Build to 30 minutes over weeks.</li>
              <li>Same time each day = habit.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">No subscription needed</h3>
            <p className="text-sm text-muted-foreground">Before paying for any fitness app, search YouTube for &quot;HASfit chair exercises seniors&quot; or &quot;SilverSneakers chair workout.&quot; Pick one, follow along on your phone or TV. Repeat tomorrow. After a week of this free routine, you&apos;ll know if you need anything more. Most seniors find YouTube&apos;s free options exceed their needs entirely.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
