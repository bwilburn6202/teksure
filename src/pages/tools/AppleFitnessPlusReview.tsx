import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Activity } from 'lucide-react';

export default function AppleFitnessPlusReview() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Apple Fitness+ Review for Seniors | TekSure" description="Apple Fitness Plus reviewed for senior users. Workouts, meditation, low impact options." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Activity className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Apple Fitness+</h1>
          <p className="text-lg text-muted-foreground">Studio-quality workouts on your iPad or TV.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What it offers</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>$9.99/month or $79.99/year.</li>
              <li>Free 1 month trial.</li>
              <li>Hundreds of workouts — yoga, strength, walking, meditation.</li>
              <li>Multiple difficulty levels.</li>
              <li>Stream to Apple TV, iPad, iPhone.</li>
              <li>Works with Apple Watch for tracking.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Best for seniors</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>&quot;Time to Walk&quot; — guided audio walks with celebrities.</li>
              <li>Mindful Cooldown — meditation + stretches.</li>
              <li>Yoga for All Levels.</li>
              <li>Beginner Strength.</li>
              <li>Senior-friendly low-impact options.</li>
              <li>Stream chair-friendly workouts.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Setup</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Open Fitness app on iPhone.</li>
              <li>Tap Fitness+ tab.</li>
              <li>Browse + select workout.</li>
              <li>AirPlay to TV for big screen.</li>
              <li>Apple Watch automatically tracks.</li>
              <li>Heart rate + calories on screen.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Versus competitors</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Apple Fitness+ ($10/mo) — best for Apple users.</li>
              <li>Peloton App ($13/mo) — variety, no bike needed.</li>
              <li>Beachbody on Demand ($10/mo) — strength focus.</li>
              <li>Les Mills+ ($14/mo) — global classes.</li>
              <li>SilverSneakers — FREE with many Medicare plans.</li>
              <li>Always check Medicare first.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">SilverSneakers first</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Most Medicare Advantage plans include FREE.</li>
              <li>SilverSneakers GO app — at-home videos.</li>
              <li>Senior-specific instructors.</li>
              <li>No additional cost beyond Medicare.</li>
              <li>Plus access to fitness clubs free.</li>
              <li>Always confirm SilverSneakers first before paying.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Free YouTube alternative</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>HASfit — completely free senior workouts.</li>
              <li>Yoga With Adriene — free yoga.</li>
              <li>Search YouTube: &quot;senior chair exercises.&quot;</li>
              <li>SilverSneakers official channel.</li>
              <li>Hundreds of free classes.</li>
              <li>Cast YouTube to TV via Chromecast.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">SilverSneakers + YouTube usually enough</h3>
            <p className="text-sm text-muted-foreground">For most seniors, SilverSneakers (free with Medicare Advantage) plus free YouTube workouts (HASfit, Yoga With Adriene) cover all home fitness needs without spending extra. Apple Fitness+ is excellent if you have Apple devices and prefer their interface, but rarely necessary. Try free options first. Spend the $10/month on a personal trainer once monthly instead.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
