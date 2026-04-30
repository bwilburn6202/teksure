import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Moon } from 'lucide-react';

export default function CalmAppForSeniors() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title="Calm App for Senior Sleep + Stress | TekSure" description="Calm app review for senior users. Sleep stories, meditation, anxiety relief." />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-10 max-w-3xl">
        <div className="text-center mb-8">
          <Moon className="w-14 h-14 text-primary mx-auto mb-3" />
          <h1 className="text-4xl font-bold mb-2">Calm</h1>
          <p className="text-lg text-muted-foreground">Sleep stories + meditation.</p>
        </div>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">What Calm offers</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Sleep stories — read by celebrities.</li>
              <li>Guided meditations.</li>
              <li>Calming music.</li>
              <li>Breathing exercises.</li>
              <li>$70/year subscription.</li>
              <li>7-day free trial.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Sleep Stories</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>30-45 minute audio stories.</li>
              <li>Designed to help you sleep.</li>
              <li>Matthew McConaughey reads &quot;Wonder.&quot;</li>
              <li>Stephen Fry tells classics.</li>
              <li>Many seniors fall asleep within minutes.</li>
              <li>Most popular feature.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Senior benefits</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Reduces insomnia.</li>
              <li>Calms anxiety.</li>
              <li>Improves stress levels.</li>
              <li>Pre-bedtime ritual.</li>
              <li>Daytime mindfulness.</li>
              <li>Doctor-recommended sometimes.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Calm Daily</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Daily 10-minute meditation.</li>
              <li>Builds habit.</li>
              <li>Senior-friendly pace.</li>
              <li>Free with subscription.</li>
              <li>Notify daily reminder.</li>
              <li>Set bedtime ritual.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Free alternatives</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Insight Timer — free meditation library.</li>
              <li>YouTube — free sleep stories.</li>
              <li>NPR Sleep + Mindfulness podcasts.</li>
              <li>Calm has free version too.</li>
              <li>Try free first.</li>
              <li>Many seniors don&apos;t need premium.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardContent className="pt-6">
            <h2 className="font-bold text-xl mb-3">Headspace alternative</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              <li>Similar — $70/year.</li>
              <li>Animations + courses.</li>
              <li>Some seniors prefer Headspace style.</li>
              <li>Try both free trials.</li>
              <li>Pick voice + style you prefer.</li>
              <li>Both excellent.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-muted/40">
          <CardContent className="pt-6">
            <h3 className="font-bold mb-2">Free trial first</h3>
            <p className="text-sm text-muted-foreground">Both Calm and Headspace offer free trials. Try a week of each. Pick the voice + style that resonates. The $70/year is reasonable if you use daily for sleep + stress. Many seniors say these apps changed bedtime ritual for the better. Start with sleep stories — proven to help insomnia.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
